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
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">Who We <span className="text-primary italic">Are</span></h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
                            Prime Insurance Services is a premier insurance advisory firm based in Rajgurunagar, Pune, specializing in tailored solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Light Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">

                        {/* Mission/Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-primary p-12 rounded-[2.5rem] text-white space-y-4">
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                                <p className="text-primary-50 leading-relaxed">
                                    To empower individuals and businesses with the information and tools they need to secure their financial future through reliable insurance products.
                                </p>
                            </div>
                            <div className="bg-secondary p-12 rounded-[2.5rem] text-white space-y-4">
                                <h2 className="text-3xl font-bold">Our Vision</h2>
                                <p className="text-secondary-50 leading-relaxed">
                                    To be the most trusted and customer-centric insurance partner in Pune, recognized for our transparency and claim-settlement expertise.
                                </p>
                            </div>
                        </div>

                        {/* The Story */}
                        <div className="space-y-8 bg-gray-50 p-12 rounded-[2.5rem]">
                            <h2 className="text-3xl font-bold text-insurance-slate">Our Core Values</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="space-y-2">
                                    <p className="text-primary font-bold text-xl">Integrity</p>
                                    <p className="text-gray-600 text-sm">Always doing what's right for our clients, first.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary font-bold text-xl">Transparency</p>
                                    <p className="text-gray-600 text-sm">Clear communications on policy terms and conditions.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary font-bold text-xl">Excellence</p>
                                    <p className="text-gray-600 text-sm">Striving for prompt service and claim settlement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
