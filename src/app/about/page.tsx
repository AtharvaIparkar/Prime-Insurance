import React from 'react';

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Dark Header Section */}
            <section className="bg-black py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[100%] bg-primary blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] bg-secondary blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter uppercase">Who We <span className="text-primary italic">Are</span></h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-bold tracking-tight">
                            At Prime Insurance Consultancy, we specialize in Insurance & TPA Cashless Empanelment services for hospitals across India. Our mission is to help healthcare institutions build strong associations with both government and private insurance providers, enabling smooth and efficient cashless treatment facilities for patients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Light Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">

                        <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-bold">
                            <h2 className="text-2xl sm:text-3xl font-black text-hospital-slate uppercase tracking-tight">Hospital Empanelment with Government & Private Insurance Providers</h2>
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

                        {/* Mission/Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-primary p-12 rounded-[2.5rem] text-white space-y-4 shadow-xl shadow-primary/20">
                                <h2 className="text-3xl font-black uppercase tracking-tight">Our Mission</h2>
                                <p className="text-primary-50 leading-relaxed font-bold">
                                    To become world-class healthcare service facilitators and to provide quality healthcare solutions for our clients through innovation, dedication, and a customer-centric approach.
                                </p>
                            </div>
                            <div className="bg-hospital-slate p-12 rounded-[2.5rem] text-white space-y-4 shadow-xl">
                                <h2 className="text-3xl font-black uppercase tracking-tight">Our Vision</h2>
                                <p className="text-white/90 leading-relaxed font-black tracking-tight">
                                    To revolutionize healthcare infrastructure in India by making international standards of quality and safety accessible to every hospital and clinic.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8 bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-100">
                            <h2 className="text-3xl font-black text-hospital-slate uppercase tracking-tighter">Why Choose Prime Insurance Consultancy?</h2>
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
                    </div>
                </div>
            </section>
        </div>
    );
}
