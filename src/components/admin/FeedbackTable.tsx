"use client";

import React, { useState } from "react";

interface Feedback {
    _id: string;
    name: string;
    email: string;
    hospitalName: string;
    location: string;
    rating: number;
    serviceUsed: string;
    reviewTitle: string;
    reviewText: string;
    wouldRecommend: boolean;
    status: "pending" | "approved" | "rejected";
    verified: boolean;
    createdAt: string;
}

interface Props {
    initialData: Feedback[];
}



function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center space-x-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? "text-amber-400" : "text-slate-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function FeedbackTable({ initialData }: Props) {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filteredData = data.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.reviewTitle.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch;
    });



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
                        placeholder="Search by name, email, hospital, or title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>


            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                            <th className="px-6 py-4">Reviewer / Hospital</th>
                            <th className="px-6 py-4">Contact</th>
                            <th className="px-6 py-4">Service & Rating</th>
                            <th className="px-6 py-4">Review</th>
                            <th className="px-6 py-4">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item._id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</div>
                                        <div className="text-xs text-slate-500">{item.hospitalName}</div>
                                        <div className="text-xs text-slate-400">{item.location}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-700">{item.email}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-700 font-medium mb-1">{item.serviceUsed}</div>
                                        <StarRating rating={item.rating} />
                                    </td>
                                    <td className="px-6 py-4 max-w-xs">
                                        <div className="font-medium text-slate-900 text-sm">{item.reviewTitle}</div>
                                        <div className={`text-xs text-slate-500 mt-1 ${expandedId === item._id ? '' : 'line-clamp-2'}`}>
                                            {item.reviewText}
                                        </div>
                                        {item.reviewText.length > 80 && (
                                            <button
                                                onClick={() => setExpandedId(expandedId === item._id ? null : item._id)}
                                                className="text-xs text-blue-500 hover:text-blue-700 mt-1 font-medium"
                                            >
                                                {expandedId === item._id ? "Show less" : "Read more"}
                                            </button>
                                        )}
                                        {item.wouldRecommend && (
                                            <span className="inline-flex items-center text-[10px] text-green-600 font-bold mt-1">
                                                ✓ Recommends
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-600" suppressHydrationWarning>
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                    No feedback submissions found matching your criteria.
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
                                <div className="shrink-0 text-right">
                                    <StarRating rating={item.rating} />
                                    <p className="text-[10px] text-slate-400 mt-1 font-bold italic" suppressHydrationWarning>
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Service: {item.serviceUsed}</p>
                                <div className="font-bold text-slate-900 text-sm mb-1">{item.reviewTitle}</div>
                                <div className={`text-xs text-slate-600 leading-relaxed ${expandedId === item._id ? '' : 'line-clamp-3'}`}>
                                    {item.reviewText}
                                </div>
                                {item.reviewText.length > 80 && (
                                    <button
                                        onClick={() => setExpandedId(expandedId === item._id ? null : item._id)}
                                        className="text-xs text-blue-600 hover:text-blue-800 mt-2 font-black uppercase tracking-tighter"
                                    >
                                        {expandedId === item._id ? "[ Show Less ]" : "[ Read Full Review ]"}
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center justify-between text-[10px]">
                                <div className="text-slate-400 font-bold uppercase tracking-tighter">
                                    {item.email}
                                </div>
                                {item.wouldRecommend && (
                                    <span className="flex items-center text-green-600 font-black uppercase tracking-widest bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                        ✓ Recommends
                                    </span>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="px-6 py-12 text-center text-slate-500">
                        No feedback found.
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
