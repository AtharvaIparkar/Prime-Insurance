"use client";

import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
} from "recharts";

const COLORS = ["#3b82f6", "#14b8a6", "#6366f1", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function AnalyticsPage() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/admin/stats");
                const json = await res.json();
                if (json.success) {
                    setData(json.data);
                }
            } catch (err) {
                console.error("Failed to fetch analytics:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="p-8 flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!data) {
        return <div className="p-8 text-center text-slate-500">Failed to load analytics data.</div>;
    }

    return (
        <div className="p-8 pb-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
                <p className="text-slate-500 mt-2">Visual insights and trends for Prime Insurance Consultancy.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Service Distribution Pie Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Service Demand</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data.services}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.services.map((entry: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Status Bar Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Request Status Distribution</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data.statuses}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Daily Trends Area Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Last 30 Days Trend</h3>
                <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data.trends}>
                            <defs>
                                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="date"
                                tickFormatter={(val) => new Date(val).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}
                                tick={{ fontSize: 12, fill: '#64748b' }}
                            />
                            <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorCount)"
                                name="Requests"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
