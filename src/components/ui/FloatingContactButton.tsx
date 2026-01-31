'use client';

import React, { useState, useEffect } from 'react';

export const FloatingCallButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const phoneNumber = '7420802527';

    if (!isVisible) return null;

    return (
        <a
            href={`tel:${phoneNumber}`}
            className="group flex items-center"
            aria-label="Call Now"
        >
            <div className="absolute bottom-full right-0 mb-4 bg-white text-hospital-slate px-4 py-2 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-gray-100 uppercase tracking-[0.2em] text-[10px] font-black whitespace-nowrap">
                Call Now
            </div>
            <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(6,182,212,0.4)] hover:scale-110 transition-all duration-300 group-active:scale-95 border-4 border-white">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
            </div>
        </a>
    );
};
