'use client';

import React, { useState } from 'react';

import { hospitalFAQs as faqs } from '@/constants/services';

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#2872A1] relative overflow-hidden">
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
                                className={`w-full p-6 flex justify-between items-center text-left transition-all duration-300 ${activeIndex === i ? 'bg-[#3B82F6] text-white shadow-[0_15px_40px_rgba(59,130,246,0.3)]' : 'bg-white hover:bg-slate-50 text-[#2872A1]'}`}
                            >
                                <span className={`font-bold ${activeIndex === i ? 'text-white' : 'text-[#2872A1]'}`}>{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === i ? 'bg-white/20 rotate-45' : 'bg-slate-100'}`}>
                                    <span className={`font-black ${activeIndex === i ? 'text-white' : 'text-[#2872A1]'}`}>+</span>
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
