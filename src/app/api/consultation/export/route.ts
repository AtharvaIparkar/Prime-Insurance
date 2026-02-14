import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
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

        // ── Fetch all consultations ──────────────────────────────────────────
        const consultations = await Consultation.find({}).sort({ createdAt: -1 }).lean();

        if (!consultations || consultations.length === 0) {
            return NextResponse.json({ success: false, error: "No data to export" }, { status: 404 });
        }

        // ── Format data for Excel ─────────────────────────────────────────────
        const data = consultations.map((item: any) => ({
            "Submission Date": new Date(item.createdAt).toLocaleDateString(),
            "Client Name": item.name,
            "Email Address": item.email,
            "Phone Number": item.phone,
            "Hospital Name": item.hospitalName,
            "Service Requested": item.service,
            "State": item.state,
            "District": item.district,
            "Pincode": item.pincode,
            "Status": item.status.toUpperCase(),
            "Preferred Date": item.preferredDate || "N/A",
            "Message": item.message || "",
        }));

        // ── Generate Excel Workbook ─────────────────────────────────────────
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Consultations");

        // Set column widths for better readability
        const wscols = [
            { wch: 15 }, // Submission Date
            { wch: 20 }, // Client Name
            { wch: 25 }, // Email Address
            { wch: 15 }, // Phone Number
            { wch: 25 }, // Hospital Name
            { wch: 30 }, // Service Requested
            { wch: 15 }, // State
            { wch: 15 }, // District
            { wch: 10 }, // Pincode
            { wch: 12 }, // Status
            { wch: 15 }, // Preferred Date
            { wch: 40 }, // Message
        ];
        worksheet["!cols"] = wscols;

        // Write to buffer
        const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

        // ── Return file response ────────────────────────────────────────────
        return new NextResponse(buf, {
            status: 200,
            headers: {
                "Content-Disposition": `attachment; filename="Prime_Consultations_${new Date().toISOString().split('T')[0]}.xlsx"`,
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            },
        });
    } catch (error) {
        console.error("Export Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}
