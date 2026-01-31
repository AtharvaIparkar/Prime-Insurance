import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function AccreditationPage() {
    const service = hospitalServices.find(s => s.id === 'accreditation');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'Accreditation is a fundamental process that validates a healthcare facility\'s commitment to excellence. We specialize in preparing your hospital for various national and international certifications, focusing on patient safety, clinical quality, and organizational management.',
        bulletPoints: [
            'NABH Entry Level & Full Accreditation',
            'NABL (Laboratory) Certification',
            'JCI International Standards Preparation',
            'Quality Control Framework Design',
            'SOP Implementation & Monitoring',
            'Staff Training on Accreditation Compliance'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
