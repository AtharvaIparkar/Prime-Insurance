import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function HospitalMarketingPage() {
    const service = hospitalServices.find(s => s.id === 'hospital-marketing');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'In a competitive healthcare market, standing out is essential. We develop comprehensive marketing strategies that build trust, increase patient footfall, and establish your hospital as a leader in medical care.',
        bulletPoints: [
            'Digital Presence & SEO for Hospitals',
            'Local Community Engagement Strategies',
            'Public Relations & Reputation Management',
            'Brand Identity & Communication Design',
            'Patient Referral Network Development',
            'Performance Marketing for Medical Services'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
