'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';

interface ServiceDetailProps {
    service: Service;
}

export const ServiceDetailTemplate: React.FC<ServiceDetailProps> = ({ service }) => {
    return (
        <div className="pt-44 pb-24 container mx-auto px-4 bg-[#F9FAFB] min-h-screen">
            <div className="max-w-4xl mx-auto">
                <Link href="/services" className="text-[#2563EB] font-black mb-8 inline-flex items-center hover:text-[#1D4ED8] uppercase tracking-widest text-lg transition-colors">
                    <span className="mr-2">←</span> Back to All Services
                </Link>

                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
                    <div className="w-24 h-24 bg-[#2563EB]/10 rounded-3xl flex items-center justify-center text-5xl shadow-inner">
                        {service.icon || '🏥'}
                    </div>
                    <div>
                        <p className="text-[#2563EB] font-black uppercase tracking-[0.4em] text-xs mb-2">Service Solution</p>
                        <h1 className="text-4xl md:text-6xl font-black text-[#2872A1] tracking-tighter">{service.title}</h1>
                    </div>
                </div>

                <div className="prose prose-xl max-w-none text-gray-900 font-medium mb-16 leading-relaxed">
                    <p className="text-2xl leading-relaxed text-[#2872A1] font-black mb-10 border-l-4 border-[#2563EB] pl-8 italic">
                        {service.description}
                    </p>
                    <p className="font-black text-xl text-[#334155]">
                        {service.longDescription || "We offer end-to-end solutions for this service, ensuring that healthcare institutions meet all necessary standards of quality, safety, and operational efficiency."}
                    </p>
                </div>

                {service.bulletPoints && service.bulletPoints.length > 0 && (
                    <div className="bg-white p-12 rounded-[3.5rem] border border-[#D1D9E6] shadow-2xl mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 blur-3xl -z-0" />
                        <h2 className="text-2xl font-black text-[#2872A1] mb-10 uppercase tracking-tight relative z-10">Key Components & Benefits</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            {service.bulletPoints.map((point, index) => (
                                <li key={index} className="flex items-start space-x-4">
                                    <div className="w-7 h-7 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#2563EB] font-black text-xs">✓</span>
                                    </div>
                                    <span className="text-[#2872A1] font-black leading-tight text-lg tracking-tight">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="bg-[#2872A1] text-white p-16 rounded-[4rem] text-center space-y-8 shadow-[0_30px_60px_-15px_rgba(30,41,59,0.4)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/25 blur-[100px] -z-0" />
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Ready to start your <span className="text-white underline decoration-primary/50 underline-offset-8 italic">{service.title}</span>?</h3>
                        <p className="text-white text-xl max-w-xl mx-auto font-black tracking-tight">
                            Join 5,000+ clients in India that trust Prime Insurance Services for their protection and financial needs.
                        </p>
                        <div className="pt-6">
                            <Link
                                href="/contact"
                                className="bg-[#2563EB] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] inline-block"
                            >
                                Book Consultation Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
