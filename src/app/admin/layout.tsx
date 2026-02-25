import React from "react";
import { cookies } from "next/headers";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

    return (
        <div className={`min-h-screen bg-slate-50 text-slate-900 ${isAuthenticated ? "pt-20 lg:flex lg:flex-row" : ""}`}>
            {/* Universal Navbar & Sidebar System */}
            {isAuthenticated && <AdminSidebar />}

            {/* Main Content Area */}
            <main className={`${isAuthenticated ? "flex-1 min-w-0" : ""} transition-all duration-300`}>
                <div className="p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
