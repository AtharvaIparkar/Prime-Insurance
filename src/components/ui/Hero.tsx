import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StatCounter } from './StatCounter';

export const Hero = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
            {/* Background Orbs - Trust Blue and Security Teal */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">🏥 India&apos;s Leading Hospital Consultant</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-hospital-slate leading-[1.1]">
                        Hospital & Healthcare <span className="text-primary italic">Consultation</span> Service
                    </h1>

                    <div className="space-y-4">
                        <p className="text-lg sm:text-xl md:text-2xl font-black text-[#2563EB] uppercase tracking-[0.2em]">Consultancy Excellence</p>
                        <p className="text-base sm:text-lg md:text-xl text-[#334155] leading-relaxed max-w-xl italic font-medium">
                            &quot;Transforming Healthcare, One Hospital at a Time&quot;
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 text-center"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto bg-white border border-gray-200 text-hospital-slate px-8 py-4 rounded-xl font-bold text-lg hover:border-primary/50 transition-all text-center"
                        >
                            Our Services
                        </Link>
                    </div>

                    <div className="flex items-center space-x-8 pt-4">
                        <div>
                            <p className="text-3xl font-bold text-primary">
                                <StatCounter end={7} suffix="+" />
                            </p>
                            <p className="text-sm font-medium text-gray-500 uppercase">Years Experience</p>
                        </div>
                        <div className="w-px h-12 bg-gray-200" />
                        <div>
                            <p className="text-3xl font-bold text-primary">
                                <StatCounter end={150} suffix="+" />
                            </p>
                            <p className="text-sm font-medium text-gray-500 uppercase">Hospitals Cashless tieup's</p>
                        </div>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    {/* Visual Enhancement - Healthcare Pattern Base */}
                    <div className="aspect-square bg-[#EEF4FF] rounded-[4rem] shadow-2xl overflow-hidden border border-[#D1D9E6] relative group">
                        {/* Dynamic Mesh Decorative Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-white to-[#EEF4FF]" />
                        <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-[#2563EB]/5 blur-[120px] rounded-full animate-pulse" />

                        {/* Framed Image - Made "abit small" and centered */}
                        <div className="absolute inset-0 flex items-center justify-center p-16">
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                                <Image
                                    src="/hero_advisor.png"
                                    alt="Expert Hospital Consultant"
                                    fill
                                    className="object-cover"
                                />
                                {/* Healthcare Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#6B8EBF]/30 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Rajgurunagar Trust Bar */}
                        <div className="absolute bottom-6 left-0 right-0 px-8">
                            <div className="bg-[#6B8EBF]/90 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center space-x-5 shadow-lg">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-black uppercase tracking-widest text-xs mb-1">Local Presence</p>
                                    <p className="text-[#EEF4FF] font-bold text-sm">Serving Rajgurunagar & Pune Region</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Trust Card - Redesigned */}
                    <div className="absolute top-10 -right-6 bg-white p-6 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 max-w-[220px] z-20">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <p className="font-black text-[#1E293B] text-xs uppercase tracking-wider">Verified Advisory</p>
                        </div>
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#2563EB] w-[98%]" />
                        </div>
                        <p className="text-[10px] text-[#64748B] mt-2 font-bold uppercase tracking-tighter">99% Customer Satisfaction in Pune</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
