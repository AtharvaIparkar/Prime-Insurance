import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function ConsultancySolutionsPage() {
    const service = hospitalServices.find(s => s.id === 'consultancy-solutions');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'Specialized consultancy designed to transform your hospital into a high-performance healthcare facility. From operational audits to strategic growth planning, we provide the roadmap for your hospital\'s success.',
        bulletPoints: [
            'Operational Efficiency Audits',
            'Strategic Growth & Expansion Planning',
            'Facility Resource Optimization',
            'Healthcare Policy & SOP Design',
            'Financial Sustainability Strategies',
            'Stakeholder Management Systems'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
