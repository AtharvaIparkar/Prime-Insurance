'use client';

import { useState, useEffect } from 'react';
import { cookieUtils } from '@/lib/cookies';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const hasConsented = cookieUtils.exists('cookie_consent');
        if (!hasConsented) {
            // Small delay for better UX
            const timer = setTimeout(() => setShowBanner(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        cookieUtils.set('cookie_consent', 'all', 365);
        setShowBanner(false);
    };

    const rejectAll = () => {
        cookieUtils.set('cookie_consent', 'necessary', 365);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Premium Glass Overlay */}
            <div className="fixed inset-0 bg-[#1E293B]/40 backdrop-blur-sm z-[100] transition-opacity duration-700" />

            {/* Banner Container */}
            <div className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
                <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(30,41,59,0.3)] border border-[#D1D9E6] p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 blur-[80px] -z-0" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Content Side */}
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                                <div className="w-12 h-12 bg-[#EEF4FF] rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                                    🍪
                                </div>
                                <h3 className="text-[#1E293B] font-black text-2xl uppercase tracking-tight">Your <span className="text-[#2563EB]">Privacy</span> Matters</h3>
                            </div>
                            <p className="text-slate-600 font-bold leading-relaxed max-w-2xl">
                                We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized healthcare consultancy insights. By clicking "Accept All", you consent to our use of cookies in accordance with global data standards.
                            </p>
                        </div>

                        {/* Action Side */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <button
                                onClick={rejectAll}
                                className="px-10 py-5 bg-[#F9FAFB] hover:bg-slate-100 text-slate-500 font-black uppercase tracking-widest text-xs rounded-2xl transition-all border border-slate-200"
                            >
                                Necessary Only
                            </button>
                            <button
                                onClick={acceptAll}
                                className="px-10 py-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-[0_15px_30px_rgba(37,99,235,0.25)] hover:scale-105 active:scale-95"
                            >
                                Accept All Cookies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
