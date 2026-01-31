import React from 'react';
import { ServiceDetailTemplate } from '@/components/ui/ServiceDetailTemplate';
import { hospitalServices } from '@/constants/services';

export default function CashlessManagementPage() {
    const service = hospitalServices.find(s => s.id === 'cashless-management');
    if (!service) return null;

    const fullService = {
        ...service,
        longDescription: 'Our cashless management solutions bridge the gap between healthcare providers and insurance companies. We streamline the billing process, manage TPAs, and ensure that patients experience a hassle-free financial journey during their treatment.',
        bulletPoints: [
            'TPA & Insurance Desk Setup',
            'Pre-authorization Management',
            'Query Handling & Documentation',
            'Bill Clearance Optimization',
            'Cashless Portal Training',
            'Daily Claim Status Monitoring'
        ]
    };

    return <ServiceDetailTemplate service={fullService} />;
}
