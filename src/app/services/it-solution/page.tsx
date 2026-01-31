import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function ITSolutionPage() {
    const service = hospitalServices.find(s => s.id === 'it-solution');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'Harness the power of technology to transform your hospital operations. Our IT solutions focus on enhancing patient data security, improving clinical workflows, and ensuring real-time management of hospital resources.',
        bulletPoints: [
            'Hospital Information System (HIS) Selection',
            'Electronic Health Records (EHR) Implementation',
            'Telemedicine Platform Integration',
            'Data Analytics for Clinical Insights',
            'Cybersecurity for Patient Data',
            'Cloud Migration & Infrastructure Support'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
