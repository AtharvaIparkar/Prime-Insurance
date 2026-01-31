'use client';

import React, { useState } from 'react';

const faqs = [
    {
        question: "What types of insurance plans do you offer?",
        answer: "We offer a comprehensive range of plans including Life Insurance (Term, Endowment), Health Insurance (Individual, Family), Vehicle Insurance (Car, Two-wheeler), and Property/Business Insurance."
    },
    {
        question: "How can I get a quick quote for my vehicle?",
        answer: "You can get a quick quote by clicking the 'Get a Free Quote' button on our Home page or by calling us directly at +91 74208 02527. Just provide your vehicle details and existing policy info."
    },
    {
        question: "Do you provide cashless hospitalization support?",
        answer: "Yes, we partner with top insurers who offer vast networks of hospitals in Rajgurunagar and Pune for seamless cashless hospitalization and claim support."
    },
    {
        question: "How do I choose the best health insurance for my family?",
        answer: "Our expert advisors analyze your family's medical history, age, and budget to recommend the most suitable plan with the best coverage and premium."
    },
    {
        question: "What documents are needed for a life insurance claim?",
        answer: "Typically, you'll need the original policy document, death certificate, claim form, and identity proof of the nominee. We provide full assistance during the claim process."
    },
    {
        question: "Can I renew my existing policy through Prime Insurance?",
        answer: "Absolutely! We specialize in policy renewals and can often find you better coverage or lower premiums during the renewal process."
    }
];

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#0a1628] relative overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h3 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-4">FAQ</h3>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16">Frequently Asked Questions</h2>

                <div className="max-w-3xl mx-auto space-y-4 text-left">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
                            <button
                                onClick={() => toggleAccordion(i)}
                                className={`w-full p-6 flex justify-between items-center text-left transition-colors ${activeIndex === i ? 'bg-primary text-white' : 'hover:bg-gray-50 text-insurance-slate'}`}
                            >
                                <span className={`font-bold ${activeIndex === i ? 'text-white' : 'text-insurance-slate'}`}>{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === i ? 'bg-white/20 rotate-45' : 'bg-gray-100'}`}>
                                    <span className={`font-black ${activeIndex === i ? 'text-white' : 'text-insurance-slate'}`}>+</span>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === i ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed bg-white">
                                    <div className="pt-4 border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
