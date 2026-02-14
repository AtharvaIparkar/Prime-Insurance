"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/admin/login");
            router.refresh();
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-red-900/20 hover:text-red-400 transition-colors text-slate-400"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
        </button>
    );
}
