import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";
import * as XLSX from "xlsx";

export async function GET(request: NextRequest) {
    try {
        // ── Auth check (API key or Session Cookie) ───────────────────────────
        const authHeader = request.headers.get("authorization");
        const apiKey = process.env.ADMIN_API_KEY;

        const cookieStore = await cookies();
        const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

        const hasValidApiKey = apiKey && authHeader === `Bearer ${apiKey}`;

        if (!hasValidApiKey && !isAuthenticated) {
            return new Response("Unauthorized", { status: 401 });
        }

        // ── Connect to MongoDB ───────────────────────────────────────────────
        await connectDB();

        // ── Fetch all reviews ────────────────────────────────────────────────
        const reviews = await Review.find({}).sort({ createdAt: -1 }).lean();

        if (!reviews || reviews.length === 0) {
            return NextResponse.json({ success: false, error: "No feedback data to export" }, { status: 404 });
        }

        // ── Format data for Excel ────────────────────────────────────────────
        const data = reviews.map((item: any) => ({
            "Submission Date": new Date(item.createdAt).toLocaleDateString(),
            "Reviewer Name": item.name,
            "Email": item.email,
            "Hospital Name": item.hospitalName,
            "Location": item.location,
            "Service Used": item.serviceUsed,
            "Rating": `${item.rating}/5`,
            "Review Title": item.reviewTitle,
            "Review Text": item.reviewText,
            "Would Recommend": item.wouldRecommend ? "Yes" : "No",
            "Status": item.status.toUpperCase(),
            "Verified": item.verified ? "Yes" : "No",
        }));

        // ── Generate Excel Workbook ──────────────────────────────────────────
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Feedback");

        // Set column widths
        const wscols = [
            { wch: 15 }, // Submission Date
            { wch: 20 }, // Reviewer Name
            { wch: 25 }, // Email
            { wch: 25 }, // Hospital Name
            { wch: 20 }, // Location
            { wch: 25 }, // Service Used
            { wch: 8 },  // Rating
            { wch: 30 }, // Review Title
            { wch: 50 }, // Review Text
            { wch: 15 }, // Would Recommend
            { wch: 12 }, // Status
            { wch: 10 }, // Verified
        ];
        worksheet["!cols"] = wscols;

        // Write to buffer
        const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

        // ── Return file response ─────────────────────────────────────────────
        return new NextResponse(buf, {
            status: 200,
            headers: {
                "Content-Disposition": `attachment; filename="Prime_Feedback_${new Date().toISOString().split('T')[0]}.xlsx"`,
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            },
        });
    } catch (error) {
        console.error("Feedback Export Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}
