import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-[#1E293B] text-white pt-20 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[100%] bg-primary blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] bg-secondary blur-[120px] rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                {/* Company Bio */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.png"
                                alt="Prime Insurance Services Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-white font-black text-xl leading-none tracking-tighter uppercase">Prime <br />Insurance Services</h2>
                    </div>
                    <p className="text-white font-bold leading-relaxed opacity-90">
                        Empowering healthcare through expert empanelment and accreditation services. We bridge the gap between hospitals and world-class standards.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link href="/" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Home</Link></li>
                        <li><Link href="/about" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">About Us</Link></li>
                        <li><Link href="/services" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Services</Link></li>
                        <li><Link href="/contact" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Contact Us</Link></li>
                        <li><Link href="/feedback" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Give Feedback</Link></li>
                        <li><Link href="/reviews" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Success Stories</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Specialized Services</h4>
                    <ul className="space-y-4">
                        <li><Link href="/services/accreditation" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Accreditation</Link></li>
                        <li><Link href="/services/cashless-management" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Cashless Management</Link></li>
                        <li><Link href="/services/empanelments" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">Hospital Empanelment</Link></li>
                        <li><Link href="/services/it-solution" className="text-white hover:text-[#EEF4FF] transition-colors font-bold opacity-80 hover:opacity-100">IT Solutions</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Connect With Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                            <span className="text-[#EEF4FF]">📍</span>
                            <span className="text-white font-bold text-sm">Pune/Rajgurunagar Region</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="text-[#EEF4FF]">📧</span>
                            <span className="text-white font-bold text-sm break-all">primeinsuranceservicespune@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="text-[#EEF4FF]">📞</span>
                            <span className="text-white font-bold text-sm">+91 74208 02527</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
                <p>© {new Date().getFullYear()} Prime Insurance Services. All Rights Reserved.</p>
                <div className="flex space-x-6">
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};
