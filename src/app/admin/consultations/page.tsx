import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import ConsultationTable from "@/components/admin/ConsultationTable";
import ExportButton from "@/components/admin/ExportButton";

export default async function AdminConsultationsPage() {
    const cookieStore = await cookies();
    const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

    if (!isAuthenticated) {
        redirect("/admin/login");
    }

    // Fetch all consultations
    await connectDB();
    const consultations = await Consultation.find({})
        .sort({ createdAt: -1 })
        .lean();

    // Map _id to string for the client component
    const serializedConsultations = JSON.parse(JSON.stringify(consultations));

    return (
        <div className="p-8">
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Consultation Requests</h1>
                    <p className="text-slate-500 mt-2">Manage and track all patient consultancy submissions.</p>
                </div>
                <div className="flex space-x-3">
                    <ExportButton />
                </div>
            </div>

            <ConsultationTable initialData={serializedConsultations} />
        </div>
    );
}
