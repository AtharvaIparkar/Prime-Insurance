import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCardProps {
    service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="group bg-white p-7 sm:p-9 rounded-[2rem] shadow-[0_15px_40px_-12px_rgba(2,6,23,0.08)] border border-slate-100 hover:shadow-[0_40px_80px_-15px_rgba(2,6,23,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 rounded-bl-[4rem] group-hover:bg-[#3B82F6]/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                    {service.icon || '🏥'}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#2872A1] mb-4 tracking-tight leading-[1.2] group-hover:text-[#2563EB] transition-colors uppercase">
                    {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-bold text-sm sm:text-base opacity-90 line-clamp-3 flex-grow">
                    {service.description}
                </p>
                <Link
                    href={service.link}
                    className="inline-flex items-center font-black text-xs uppercase tracking-[0.2em] text-[#3B82F6] group-hover:translate-x-3 transition-all duration-500"
                >
                    Detailed Analysis <span className="ml-2">→</span>
                </Link>
            </div>
        </div>
    );
};
