import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export default async function AdminDashboardPage() {
    const cookieStore = await cookies();
    const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

    if (!isAuthenticated) {
        redirect("/admin/login");
    }

    // Fetch stats
    await connectDB();
    const totalRequests = await Consultation.countDocuments();
    const pendingRequests = await Consultation.countDocuments({ status: "pending" });
    const completedRequests = await Consultation.countDocuments({ status: "completed" });
    const contactedRequests = await Consultation.countDocuments({ status: "contacted" });

    const stats = [
        { label: "Total Requests", value: totalRequests, color: "blue", icon: "📊" },
        { label: "Pending", value: pendingRequests, color: "yellow", icon: "🕒" },
        { label: "Contacted", value: contactedRequests, color: "indigo", icon: "📞" },
        { label: "Completed", value: completedRequests, color: "green", icon: "✅" },
    ];

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500 mt-2">Welcome back! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-${stat.color}-50 text-${stat.color}-600`}>
                                +12%
                            </span>
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
                        <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Activity</h3>
                    <p className="text-slate-500 italic">Coming soon: A detailed activity timeline.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                        <a
                            href="/admin/consultations"
                            className="block w-full text-center py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            View All Consultations
                        </a>
                        <a
                            href="/admin/analytics"
                            className="block w-full text-center py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            Generate Report
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
