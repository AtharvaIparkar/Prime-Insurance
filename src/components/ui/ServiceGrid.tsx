import React from 'react';
import { ServiceCard } from './ServiceCard';
import { hospitalServices } from '@/constants/services';
import ScrollReveal from './ScrollReveal';

const featuredServices = hospitalServices.filter(s => !s.subService);

export const ServiceGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="fade" threshold={0.2}>
                    <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                        <h2 className="text-[13px] font-black text-[#2563EB] uppercase tracking-[0.5em] mb-4">Core Expertise</h2>
                        <p className="text-4xl md:text-6xl font-black text-[#1E293B] leading-[1.1]">Hospital <br /><span className="text-[#2563EB] italic">Empanelment</span></p>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                            We provide expert consultancy aimed at improving hospital operations, patient care, and overall healthcare performance.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredServices.map((service, index) => (
                        <ScrollReveal
                            key={service.id}
                            animation="slide-up"
                            delay={index * 100}
                            threshold={0.1}
                        >
                            <ServiceCard service={service} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
