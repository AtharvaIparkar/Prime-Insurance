import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function EmpanelmentsPage() {
    const service = hospitalServices.find(s => s.id === 'empanelments');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'At Prime Insurance Consultancy, we specialize in Insurance & TPA Cashless Empanelment services for hospitals across India. Our mission is to help healthcare institutions build strong associations with both government and private insurance providers, enabling smooth and efficient cashless treatment facilities for patients. We assist hospitals in obtaining empanelment with Government health schemes, Public sector insurance companies, Private insurance companies, and Third Party Administrators (TPAs). Our team handles the complete empanelment process — from documentation, application submission, follow-ups, compliance requirements, agreement coordination, and final approval — ensuring a hassle-free experience for hospitals.',
        bulletPoints: [
            'Specialized in Insurance & TPA Empanelment',
            'Enabling Cashless Services for Hospitals',
            'Streamlining Claims & Ensuring Seamless Coordination',
            'End-to-end documentation and process management',
            'Strong coordination with insurers and TPAs',
            'Dedicated support and professional service',
            'Expert Guidance & Consulting Support',
            'Focused on hospital revenue growth and compliance'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
