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
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Let's <span className="text-primary italic">Talk</span> Healthcare</h1>
                        <p className="text-xl md:text-2xl text-white font-bold max-w-3xl mx-auto opacity-90 tracking-tight">Partner with us for excellence in hospital planning and advisory services.</p>
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
                                            <p className="font-black text-hospital-slate uppercase tracking-wider text-[10px] mb-1">Our Location</p>
                                            <p className="text-gray-700 font-bold text-sm">Rajgurunagar, Pune, Maharashtra 410505</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary text-xl">📧</div>
                                        <div>
                                            <p className="font-black text-hospital-slate uppercase tracking-wider text-[10px] mb-1">Email Us</p>
                                            <p className="text-gray-700 font-bold text-sm break-all">primeinsuranceservicespune@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-xl font-bold">WA</div>
                                        <div>
                                            <p className="font-black text-hospital-slate uppercase tracking-wider text-[10px] mb-1">WhatsApp</p>
                                            <p className="text-gray-700 font-bold text-sm">+91 74208 02527</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Placeholder */}
                            <div className="lg:col-span-2 bg-hospital-slate p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-0" />
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">Request <span className="text-primary italic">Consultation</span></h3>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white font-bold placeholder:text-gray-400" />
                                            <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white font-bold placeholder:text-gray-400" />
                                        </div>
                                        <select className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white font-bold">
                                            <option className="bg-hospital-slate">Select Service Required</option>
                                            <option className="bg-hospital-slate">Accreditation Support</option>
                                            <option className="bg-hospital-slate">Cashless Management</option>
                                            <option className="bg-hospital-slate">IT Solutions</option>
                                            <option className="bg-hospital-slate">Hospital Marketing</option>
                                            <option className="bg-hospital-slate">Empanelment Services</option>
                                        </select>
                                        <textarea placeholder="Describe your hospital's needs..." rows={4} className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white font-bold placeholder:text-gray-400"></textarea>
                                        <button className="w-full bg-primary py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_20px_40px_rgba(59,130,246,0.2)]" type="button">Book Consultation</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
