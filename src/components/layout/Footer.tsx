import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-[#2872A1] text-white pt-20 pb-12 relative overflow-hidden">
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
                        <li className="flex items-center space-x-3 group">
                            <span className="text-[#EEF4FF]">📧</span>
                            <a href="mailto:primeinsuranceservicespune@gmail.com" className="text-white font-bold text-sm break-all hover:text-primary transition-colors">
                                primeinsuranceservicespune@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-3 group">
                            <span className="text-[#EEF4FF]">📞</span>
                            <a href="tel:7420802527" className="text-white font-bold text-sm hover:text-primary transition-colors">
                                +91 74208 02527
                            </a>
                        </li>
                        <li className="flex items-center space-x-3 group">
                            <span className="text-[#EEF4FF]">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </span>
                            <a href="https://www.instagram.com/primehealthcare.services" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm hover:text-primary transition-colors">
                                @primehealthcare.services
                            </a>
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
