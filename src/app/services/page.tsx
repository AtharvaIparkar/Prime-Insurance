import { ServiceGrid } from "@/components/ui/ServiceGrid";
import Link from "next/link";
import React from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { hospitalServices } from '@/constants/services';

export default function ServicesPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">Our Insurance <span className="text-primary italic">Solutions</span></h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                        From protecting your health to securing your assets, we provide a wide range of insurance products tailored for the residents of Rajgurunagar and Pune.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hospitalServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <div className="mt-24 bg-gray-50 p-12 md:p-20 rounded-[4rem] text-center border border-gray-100">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h3 className="text-3xl font-black text-hospital-slate">Need a Customized Solution?</h3>
                        <p className="text-lg text-gray-700 font-bold leading-relaxed">
                            Every healthcare facility has unique challenges. Our consultants are experts at tailoring solutions that fit your specific infrastructure and operational needs.
                        </p>
                        <div className="pt-6">
                            <a
                                href="/contact"
                                className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_20px_40px_rgba(59,130,246,0.3)] inline-block"
                            >
                                Book Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
