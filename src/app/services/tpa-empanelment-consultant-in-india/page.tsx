import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function TPAEmpanelmentPage() {
    const service = hospitalServices.find(s => s.id === 'tpa-empanelment');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'Navigating the complex landscape of Third-Party Administrators (TPAs) is crucial for any modern hospital. We provide expert consultancy to ensure your facility is empanelled with leading TPAs, facilitating seamless cashless treatment for your patients.',
        bulletPoints: [
            'End-to-end TPA Empanelment Assistance',
            'Documentation & Application Filing',
            'Site Inspection Preparation',
            'Negotiation for Competitive Tariffs',
            'TPA Relationship Management',
            'Annual Renewal Support'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
