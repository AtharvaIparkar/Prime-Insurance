"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const adminLinks = [
    {
        href: "/admin",
        label: "Dashboard",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        href: "/admin/consultations",
        label: "Consultations",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        href: "/admin/feedback",
        label: "Feedback",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
];

export default function AdminSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const NavContent = () => (
        <>
            <nav className="flex-1 px-4 space-y-2 mt-8">
                {adminLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                }`}
                        >
                            <span className={`${isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400 transition-colors"}`}>
                                {link.icon}
                            </span>
                            <span className="font-bold text-sm tracking-tight">{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 border-t border-slate-800">
                <LogoutButton />
            </div>
        </>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-72 bg-slate-950 border-r border-slate-900 sticky top-20 h-[calc(100vh-80px)] z-40 overflow-y-auto shadow-2xl">
                <NavContent />
            </aside>

            {/* Mobile Header - Action Bar (No Logo to avoid clash) */}
            <header className="lg:hidden fixed top-20 w-full h-16 bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 flex items-center justify-end px-6 shadow-sm">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-slate-50 ring-1 ring-slate-100 rounded-2xl text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-95"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] lg:hidden transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <aside
                className={`fixed top-36 left-0 w-80 bg-slate-950 bottom-0 z-[70] lg:hidden flex flex-col transition-all duration-500 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <NavContent />
            </aside>
        </>
    );
}
