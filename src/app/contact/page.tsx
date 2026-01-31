import React from 'react';

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            {/* Dark Header Section */}
            <section className="bg-black py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[100%] bg-primary blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[100%] bg-secondary blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-10 space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Let's <span className="text-primary italic">Talk</span> Insurance</h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto">Your security is our priority. Reach out for expert advice or a free quote today.</p>
                    </div>
                </div>
            </section>

            {/* Light Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Contact Info */}
                            <div className="lg:col-span-1 space-y-8">
                                <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl">📍</div>
                                        <div>
                                            <p className="font-bold text-insurance-slate uppercase tracking-wider text-xs mb-1">Our Location</p>
                                            <p className="text-gray-600 font-medium">Rajgurunagar, Pune, Maharashtra 410505</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary text-xl">📧</div>
                                        <div>
                                            <p className="font-bold text-insurance-slate uppercase tracking-wider text-xs mb-1">Email Us</p>
                                            <p className="text-gray-600 font-medium text-sm break-all">primeinsuranceservicespune@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-xl font-bold">WA</div>
                                        <div>
                                            <p className="font-bold text-insurance-slate uppercase tracking-wider text-xs mb-1">WhatsApp</p>
                                            <p className="text-gray-600 font-medium text-sm">+91 74208 02527</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Placeholder */}
                            <div className="lg:col-span-2 bg-insurance-slate p-8 md:p-12 rounded-3xl text-white">
                                <h3 className="text-2xl font-bold mb-8">Request a Free Quote</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white" />
                                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white" />
                                    </div>
                                    <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-gray-400">
                                        <option>Select Insurance Type</option>
                                        <option>Life Insurance</option>
                                        <option>Health Insurance</option>
                                        <option>Vehicle Insurance</option>
                                        <option>Property Insurance</option>
                                    </select>
                                    <textarea placeholder="Tell us about your requirements" rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"></textarea>
                                    <button className="w-full bg-primary py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg" type="button">Get Free Quote</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
