import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function HospitalEmpanelmentPage() {
    const service = hospitalServices.find(s => s.id === 'hospital-empanelment');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'Expanding your hospital\'s reach through strategic empanelments with government schemes, PSUs, and corporate entities is key to growth. We provide comprehensive consultancy to handle the administrative and technical requirements of the empanelment process.',
        bulletPoints: [
            'Government Scheme (CGHS, ECHS, PMJAY) Empanelment',
            'Public Sector Undertakings (PSU) Registration',
            'Corporate Tie-ups & Provider Network Entry',
            'Territory Matrix & Tariff Negotiation',
            'Compliance Audits for Panel Requirements',
            'Portal Management & Document Updation'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
