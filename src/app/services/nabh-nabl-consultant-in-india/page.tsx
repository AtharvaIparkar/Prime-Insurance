import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function NABHNABLConsultantPage() {
    const service = hospitalServices.find(s => s.id === 'nabh-nabl-consultant');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'As leading NABH and NABL consultants in India, we guide healthcare organizations through the rigorous standards set by the National Accreditation Board for Hospitals & Healthcare Providers (NABH) and the National Accreditation Board for Testing and Calibration Laboratories (NABL). Our comprehensive consultancy ensures your facility achieves the highest standards of quality, patient safety, and technical competence.',
        bulletPoints: [
            'Gap Analysis & Infrastructure Audits for NABH & NABL',
            'NABH Standard Operating Procedures (SOPs)',
            'NABL ISO 15189 Standard Implementation',
            'Quality Manual & Documentation Design',
            'Statutory Compliance Assistance',
            'Staff Training on Patient Safety Goals',
            'Internal Audit & Management Reviews',
            'Equipment Calibration & Validation Guidance',
            'Mock Audits & Post-Audit Support',
            'Continuous Quality Improvement Frameworks',
            'Proficiency Testing (PT) Program Management',
            'Expert Preparation for On-site Assessment'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
