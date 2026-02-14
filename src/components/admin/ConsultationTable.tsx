"use client";

import React, { useState } from "react";

interface Consultation {
    _id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    hospitalName: string;
    state: string;
    district: string;
    pincode: string;
    status: "pending" | "contacted" | "completed" | "cancelled";
    createdAt: string;
}

interface Props {
    initialData: Consultation[];
}

const statusColors = {
    pending: "bg-yellow-50 text-yellow-700 border-yellow-100",
    contacted: "bg-indigo-50 text-indigo-700 border-indigo-100",
    completed: "bg-green-50 text-green-700 border-green-100",
    cancelled: "bg-red-50 text-red-700 border-red-100",
};

export default function ConsultationTable({ initialData }: Props) {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    const filteredData = data.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.hospitalName.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === "all" || item.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const handleStatusChange = async (id: string, newStatus: string) => {
        setUpdatingId(id);
        try {
            const res = await fetch("/api/consultation", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    // In a real app, we'd use the session cookie, 
                    // and our API should check for that cookie if the ADMIN_API_KEY isn't provided.
                    // For this simple implementation, the API route is currently checking for ADMIN_API_KEY.
                    // I will update the API route to also check the admin_session cookie.
                },
                body: JSON.stringify({ id, status: newStatus }),
            });

            if (res.ok) {
                setData(prev => prev.map(item => item._id === id ? { ...item, status: newStatus as any } : item));
            } else {
                alert("Failed to update status. Check if you are authorized.");
            }
        } catch (err) {
            alert("An error occurred while updating status.");
        } finally {
            setUpdatingId(null);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Filters */}
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search by name, email, or hospital..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>

                <div className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-slate-600">Filter by Status:</label>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    >
                        <option value="all">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                            <th className="px-6 py-4">Client / Hospital</th>
                            <th className="px-6 py-4">Contact Info</th>
                            <th className="px-6 py-4">Service</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item._id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</div>
                                        <div className="text-xs text-slate-500">{item.hospitalName}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-700">{item.email}</div>
                                        <div className="text-sm text-slate-500">{item.phone}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-slate-700 font-medium">{item.service}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-700">{item.district}, {item.state}</div>
                                        <div className="text-xs text-slate-500">{item.pincode}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${statusColors[item.status]}`}>
                                            {item.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-600" suppressHydrationWarning>
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <select
                                            disabled={updatingId === item._id}
                                            value={item.status}
                                            onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                            className="text-sm bg-transparent border border-slate-200 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
                                        >
                                            <option value="pending">Mark Pending</option>
                                            <option value="contacted">Mark Contacted</option>
                                            <option value="completed">Mark Completed</option>
                                            <option value="cancelled">Mark Cancelled</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                                    No consultation requests found matching your criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Placeholder */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <p className="text-sm text-slate-500">
                    Showing <span className="font-medium text-slate-900">{filteredData.length}</span> results
                </p>
            </div>
        </div>
    );
}
