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
            <div className="p-4 md:p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
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
                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm md:text-base"
                    />
                </div>

                <div className="flex items-center space-x-3">
                    <label className="text-xs md:text-sm font-medium text-slate-600 shrink-0">Filter by Status:</label>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="w-full md:w-auto px-4 py-2 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    >
                        <option value="all">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
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

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-slate-100">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div key={item._id} className="p-4 space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="flex-1 min-w-0 pr-4">
                                    <div className="font-bold text-slate-900 truncate">{item.name}</div>
                                    <div className="text-xs text-slate-500 truncate">{item.hospitalName}</div>
                                </div>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border uppercase shrink-0 ${statusColors[item.status]}`}>
                                    {item.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Service</p>
                                    <p className="text-slate-700 font-bold">{item.service}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-slate-700 font-bold">{item.district}, {item.state}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Contact</p>
                                    <p className="text-slate-700 font-bold">{item.phone}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Date</p>
                                    <p className="text-slate-700 font-bold" suppressHydrationWarning>
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Update Status</label>
                                <select
                                    disabled={updatingId === item._id}
                                    value={item.status}
                                    onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50 font-bold"
                                >
                                    <option value="pending">Mark Pending</option>
                                    <option value="contacted">Mark Contacted</option>
                                    <option value="completed">Mark Completed</option>
                                    <option value="cancelled">Mark Cancelled</option>
                                </select>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="px-6 py-12 text-center text-slate-500">
                        No requests found.
                    </div>
                )}
            </div>

            {/* Pagination Placeholder */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50">
                <p className="text-sm text-slate-500 text-center md:text-left">
                    Showing <span className="font-medium text-slate-900">{filteredData.length}</span> results
                </p>
            </div>
        </div>
    );
}
