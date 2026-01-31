import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function NABHConsultantPage() {
    const service = hospitalServices.find(s => s.id === 'nabh-consultant');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'As leading NABH consultants in India, we guide healthcare organizations through the rigorous standards set by the National Accreditation Board for Hospitals & Healthcare Providers. Our goal is to institutionalize quality and patient safety in your facility.',
        bulletPoints: [
            'Gap Analysis & Infrastructure Audits',
            'NABH Standard Operating Procedures (SOPs)',
            'Statutory Compliance Assistance',
            'Staff Training on Patient Safety Goals',
            'Mock Audits & Post-Audit Support',
            'Continuous Quality Improvement Frameworks'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
