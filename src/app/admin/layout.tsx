import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            {/* Sidebar */}
            {isAuthenticated && (
                <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
                    <div className="p-6">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Prime Admin
                        </h2>
                    </div>

                    <nav className="flex-1 px-4 py-4 space-y-2">
                        <Link
                            href="/admin"
                            className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>Dashboard</span>
                        </Link>

                        <Link
                            href="/admin/consultations"
                            className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span>Consultations</span>
                        </Link>

                        <Link
                            href="/admin/feedback"
                            className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>Feedback</span>
                        </Link>
                    </nav>

                    <div className="p-4 border-t border-slate-800">
                        <LogoutButton />
                    </div>
                </aside>
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 pt-32">
                {isAuthenticated && (
                    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 md:hidden">
                        <h2 className="font-bold text-slate-900">Prime Admin</h2>
                    </header>
                )}
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
