import React from 'react';
import { notFound } from 'next/navigation';
import { Service } from '@/types';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { Metadata } from 'next';

const servicesData: Record<string, Service & { content: string; bulletPoints: string[] }> = {
    'life-insurance': {
        id: '1',
        title: 'Life Insurance',
        description: 'Comprehensive financial protection for your family in your absence.',
        slug: 'life-insurance',
        icon: '👨‍👩‍👧‍👦',
        content: 'Life insurance is a contract between you and an insurance company. In exchange for your premium payments, the insurance company provides a lump-sum payment, known as a death benefit, to beneficiaries upon your death.',
        bulletPoints: [
            'Term Life Insurance (Pure Protection)',
            'Endowment Plans (Savings + Protection)',
            'ULIP (Unit Linked Insurance Plans)',
            'Whole Life Insurance Coverage',
            'Flexible Premium Payment Options'
        ]
    },
    'health-insurance': {
        id: '2',
        title: 'Health Insurance',
        description: 'Protect your savings from rising medical costs with comprehensive health cover.',
        slug: 'health-insurance',
        icon: '❤️',
        content: 'Health insurance covers the cost of an insured individual\'s medical and surgical expenses. Depending on the type of health insurance coverage, either the insured pays costs out-of-pocket and is then reimbursed, or the insurer makes payments directly to the provider.',
        bulletPoints: [
            'Individual & Family Floater Plans',
            'Cashless Hospitalization at 5000+ Hospitals',
            'Critical Illness & Cancer Cover',
            'Pre & Post Hospitalization Expenses',
            'No Claim Bonus Benefits'
        ]
    },
    'vehicle-insurance': {
        id: '3',
        title: 'Vehicle Insurance',
        description: 'Reliable protection for your cars and bikes against accidents and theft.',
        slug: 'vehicle-insurance',
        icon: '🚗',
        content: 'Vehicle insurance is required for all vehicles in India. It provides financial protection against physical damage or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle.',
        bulletPoints: [
            'Comprehensive Car Insurance',
            'Third-Party Liability Cover',
            'Zero Depreciation Add-ons',
            'Roadside Assistance (RSA)',
            'Personal Accident Cover for Owners'
        ]
    },
    'property-insurance': {
        id: '4',
        title: 'Property & Business',
        description: 'Secure your assets against fire, theft, and natural calamities.',
        slug: 'property-insurance',
        icon: '🏢',
        content: 'Property insurance provides protection against most risks to property, such as fire, theft and some weather damage. This includes specialized forms of insurance such as fire insurance, flood insurance, earthquake insurance, home insurance, or boiler insurance.',
        bulletPoints: [
            'Home Structure & Content Insurance',
            'Shop & Office Package Policies',
            'Fire & Special Perils Coverage',
            'Burglary & Housebreaking Protection',
            'Public Liability for Businesses'
        ]
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) return {};

    return constructMetadata({
        title: service.title,
        description: service.description,
    });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="py-24 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <Link href="/services" className="text-primary font-semibold mb-8 inline-block hover:underline">
                    ← Back to All Services
                </Link>

                <div className="flex items-center space-x-6 mb-12">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl">
                        {service.icon}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-hospital-slate">{service.title}</h1>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 mb-16">
                    <p className="text-2xl leading-relaxed text-hospital-slate/80 font-medium mb-8">
                        {service.description}
                    </p>
                    <p>{service.content}</p>
                </div>

                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 mb-16">
                    <h2 className="text-2xl font-bold text-hospital-slate mb-8">Key Deliverables</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <span className="text-primary font-bold mt-1 text-xl">✓</span>
                                <span className="text-gray-700 font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-primary text-white p-12 rounded-[2.5rem] text-center space-y-6 shadow-2xl">
                    <h3 className="text-3xl font-bold">Get {service.title} Quote Today</h3>
                    <p className="text-primary-50 text-lg max-w-xl mx-auto">
                        Our expert advisors are ready to help you choose the best coverage for your needs in Rajgurunagar.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all inline-block"
                        >
                            Request a Free Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
