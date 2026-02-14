import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export async function GET(request: NextRequest) {
    try {
        // ── Auth check ───────────────────────────────────────────────────
        const cookieStore = await cookies();
        const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

        if (!isAuthenticated) {
            return new Response("Unauthorized", { status: 401 });
        }

        // ── Connect to MongoDB ───────────────────────────────────────────────
        await connectDB();

        // ── Aggregation: Services ────────────────────────────────────────────
        const serviceStats = await Consultation.aggregate([
            { $group: { _id: "$service", count: { $sum: 1 } } },
            { $project: { name: "$_id", value: "$count", _id: 0 } }
        ]);

        // ── Aggregation: Status ──────────────────────────────────────────────
        const statusStats = await Consultation.aggregate([
            { $group: { _id: "$status", count: { $sum: 1 } } },
            { $project: { name: "$_id", value: "$count", _id: 0 } }
        ]);

        // ── Aggregation: Daily Trends (Last 30 days) ─────────────────────────
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const trendStats = await Consultation.aggregate([
            { $match: { createdAt: { $gte: thirtyDaysAgo } } },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id": 1 } },
            { $project: { date: "$_id", count: "$count", _id: 0 } }
        ]);

        return NextResponse.json({
            success: true,
            data: {
                services: serviceStats,
                statuses: statusStats,
                trends: trendStats
            }
        });
    } catch (error) {
        console.error("Stats Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}
