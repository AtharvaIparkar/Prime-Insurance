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
        <div className={`min-h-screen relative ${isAuthenticated ? "lg:flex lg:flex-row" : "bg-slate-50"} text-slate-900`}>
            {/* Universal Navbar & Sidebar System */}
            {isAuthenticated && <AdminSidebar />}

            {/* Main Content Area */}
            <main className={`${isAuthenticated ? "flex-1 min-w-0 bg-white relative z-20 pt-20" : ""} transition-all duration-300`}>
                <div className="p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div >
    );
}
