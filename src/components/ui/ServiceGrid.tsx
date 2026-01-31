import React from 'react';
import { ServiceCard } from './ServiceCard';
import { hospitalServices } from '@/constants/services';

const featuredServices = hospitalServices.filter(s => !s.subService);

export const ServiceGrid = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.5em] mb-4">Our Services</h2>
                    <p className="text-4xl md:text-6xl font-black text-hospital-slate leading-[1.1]">Complete Medical <br /><span className="text-primary italic">Solution</span></p>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto font-bold leading-relaxed">
                        We provide expert consultancy aimed at improving hospital operations, patient care, and overall healthcare performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};
