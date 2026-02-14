import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Premium Header Section - Refined Dark Palette */}
            <section className="bg-[#1E293B] py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[100%] bg-[#3B82F6] blur-[180px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[100%] bg-[#2563EB] blur-[180px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <ScrollReveal animation="fade" duration={800}>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter uppercase mb-4">Elite <span className="text-white italic">Consultancy</span></h1>
                        </ScrollReveal>
                        <ScrollReveal animation="slide-up" delay={200}>
                            <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold opacity-90 max-w-3xl mx-auto tracking-tight leading-relaxed">
                                Empowering healthcare institutions through global standards of empanelment and excellence.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Light Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">

                        <ScrollReveal animation="slide-up">
                            <div className="space-y-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                                <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] uppercase tracking-tighter">Strategic Partnerships <br /><span className="text-[#2563EB]">Nationwide</span></h2>
                                <p>
                                    We assist hospitals in obtaining empanelment with:
                                </p>
                                <ul className="list-disc pl-8 space-y-3">
                                    <li>Government health schemes</li>
                                    <li>Public sector insurance companies</li>
                                    <li>Private insurance companies</li>
                                    <li>Third Party Administrators (TPAs)</li>
                                </ul>
                                <p>
                                    Our team handles the complete empanelment process — from documentation, application submission, follow-ups, compliance requirements, agreement coordination, and final approval — ensuring a hassle-free experience for hospitals.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Mission/Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <ScrollReveal animation="slide-right">
                                <div className="bg-[#2563EB] p-12 rounded-[2.5rem] text-white space-y-4 shadow-xl shadow-blue-500/20 h-full">
                                    <h2 className="text-3xl font-black uppercase tracking-tight">Our Mission</h2>
                                    <p className="text-primary-50 leading-relaxed font-bold">
                                        To become world-class healthcare service facilitators and to provide quality healthcare solutions for our clients through innovation, dedication, and a customer-centric approach.
                                    </p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide-left" delay={200}>
                                <div className="bg-[#EEF4FF] p-16 rounded-[4rem] text-[#1E293B] space-y-6 shadow-xl border border-[#D1D9E6] relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 blur-[100px]" />
                                    <h2 className="text-4xl font-black uppercase tracking-tighter relative z-10">Our Vision</h2>
                                    <p className="text-slate-600 font-bold leading-relaxed tracking-tight text-xl relative z-10">
                                        To revolutionize healthcare infrastructure in India by making international standards of quality and safety accessible to every hospital and clinic.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal animation="fade" threshold={0.2}>
                            <div className="space-y-8 bg-[#EEF4FF] p-12 md:p-16 rounded-[3rem] border border-[#D1D9E6]">
                                <h2 className="text-3xl font-black text-[#1E293B] uppercase tracking-tighter">Why Choose Prime Insurance Consultancy?</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• Specialized in Insurance & TPA Empanelment</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• Enabling Cashless Services for Hospitals</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• Streamlining Claims & Ensuring Seamless Coordination</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• End-to-end documentation and process management</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• Strong coordination with insurers and TPAs</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• Dedicated support and professional service</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• Expert Guidance & Consulting Support</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-primary font-black text-xl uppercase tracking-tight">• Focused on hospital revenue growth and compliance</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
