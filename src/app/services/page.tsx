import { ServiceGrid } from "@/components/ui/ServiceGrid";
import Link from "next/link";
import React from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { hospitalServices } from '@/constants/services';

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-[#6B8EBF] py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[100%] bg-primary blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[100%] bg-secondary blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase">Our <span className="text-white italic">Services</span></h1>
                        <p className="text-xl text-white font-bold opacity-90 max-w-2xl mx-auto">
                            Comprehensive healthcare consultancy solutions tailored for hospitals, clinics, and medical practitioners.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hospitalServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="mt-24 bg-[#EEF4FF] p-12 md:p-20 rounded-[4rem] text-center border border-[#D1D9E6]">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h3 className="text-3xl font-black text-[#1E293B]">Need a Customized Solution?</h3>
                            <p className="text-lg text-[#334155] font-bold leading-relaxed">
                                Every healthcare facility has unique challenges. Our consultants are experts at tailoring solutions that fit your specific infrastructure and operational needs.
                            </p>
                            <div className="pt-6">
                                <a
                                    href="/contact"
                                    className="bg-[#2563EB] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] inline-block"
                                >
                                    Book Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
