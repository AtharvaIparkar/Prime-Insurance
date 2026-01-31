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
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase">Who We <span className="text-primary italic">Are</span></h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-bold tracking-tight">
                            Prime Insurance Services is a team of professionals specializing in comprehensive hospital planning and advisory services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Light Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">

                        <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-bold">
                            <p>
                                Based in Rajgurunagar, Pune, we deliver cost-effective and tailored solutions to healthcare providers. As a comprehensive facilitator, we are committed to providing end-to-end operational support.
                            </p>
                            <p>
                                We understand the challenges that hospitals face with increasing management complexities and evolving healthcare needs. Our experts bridge the gap by providing strategic consulting, accreditation support, and IT solutions.
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

                        {/* Core Values */}
                        <div className="space-y-8 bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-100">
                            <h2 className="text-3xl font-black text-hospital-slate uppercase tracking-tighter">Our Core Values</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                                <div className="space-y-4">
                                    <div className="text-3xl">🚀</div>
                                    <p className="text-primary font-black text-xl uppercase tracking-tight">Innovation</p>
                                    <p className="text-gray-700 font-bold leading-snug">Bringing cutting-edge IT and operational strategies to modern medicine.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-3xl">🤝</div>
                                    <p className="text-primary font-black text-xl uppercase tracking-tight">Dedication</p>
                                    <p className="text-gray-700 font-bold leading-snug">Proactive 24/7 support for hospitals and their critical needs.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-3xl">🎯</div>
                                    <p className="text-primary font-black text-xl uppercase tracking-tight">Excellence</p>
                                    <p className="text-gray-700 font-bold leading-snug">Ensuring the highest standards of safety and care for patient success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
