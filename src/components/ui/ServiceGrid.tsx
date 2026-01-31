import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Service } from '@/types';

const featuredServices: Service[] = [
    {
        id: '1',
        title: 'Life Insurance',
        description: 'Secure your family\'s future with Term plans, Endowment policies, and ULIPs.',
        slug: 'life-insurance',
        icon: '👨‍👩‍👧‍👦',
    },
    {
        id: '2',
        title: 'Health Insurance',
        description: 'Comprehensive medical coverage for individuals, families, and senior citizens.',
        slug: 'health-insurance',
        icon: '❤️',
    },
    {
        id: '3',
        title: 'Vehicle Insurance',
        description: 'Quick insurance for cars, two-wheelers, and commercial vehicles with fast claims.',
        slug: 'vehicle-insurance',
        icon: '🚗',
    },
    {
        id: '4',
        title: 'Property & Business',
        description: 'Protect your home, office, or shop against fire, burglary, and liabilities.',
        slug: 'property-insurance',
        icon: '🏢',
    },
];

export const ServiceGrid = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                    <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.5em] mb-4">Our Expertise</h2>
                    <p className="text-4xl md:text-6xl font-black text-insurance-slate leading-[1.1]">Comprehensive Protection <br /><span className="text-primary italic">For Every Need</span></p>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        We partner with top insurers to bring you the most reliable coverage at competitive premiums in Rajgurunagar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};
