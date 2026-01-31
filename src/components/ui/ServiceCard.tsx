import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCardProps {
    service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon || '🛡️'}
            </div>
            <h3 className="text-xl font-bold text-insurance-slate mb-3 tracking-tight">{service.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                {service.description}
            </p>
            <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center font-semibold text-primary group-hover:translate-x-1 transition-transform"
            >
                View Plans <span className="ml-2">→</span>
            </Link>
        </div>
    );
};
