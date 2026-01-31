import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function NABLConsultantPage() {
    const service = hospitalServices.find(s => s.id === 'nabl-consultant');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'NABL accreditation is the gold standard for medical laboratories. We provide expert consultancy to help your laboratory achieve ISO 15189 compliance, ensuring the highest level of technical competence and reliable testing results.',
        bulletPoints: [
            'ISO 15189 Standard Implementation',
            'Quality Manual & Documentation Design',
            'Internal Audit & Management Reviews',
            'Equipment Calibration & Validation Guidance',
            'Proficiency Testing (PT) Program Management',
            'Expert Preparation for NABL On-site Assessment'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
