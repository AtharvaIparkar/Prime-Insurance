import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function EmpanelmentsPage() {
    const service = hospitalServices.find(s => s.id === 'empanelments');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'Strategic staffing solutions that place expert healthcare professionals directly into your hospital workforce. Our empanelment services ensure that your facility is equipped with highly trained specialists to drive clinical excellence.',
        bulletPoints: [
            'Staffing Needs Assessment & Gap Analysis',
            'Specialist Doctor Empanelment',
            'Nursing & Paramedical Workforce Solutions',
            'Administrative Leadership Search',
            'Credentialing & Privilege Management',
            'Performance Review Frameworks'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
