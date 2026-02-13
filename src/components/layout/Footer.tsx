import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-hospital-slate text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
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
                            <h3 className="text-base sm:text-lg md:text-xl font-black text-white uppercase tracking-tight">Prime Insurance Services</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 font-bold leading-relaxed">
                            Your trusted partner in healthcare excellence. Specializing in hospital planning, accreditation, and operational advisory services in Rajgurunagar, Pune.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors font-medium">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors font-medium">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors font-medium">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors font-medium">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[13px] font-black mb-8 border-b-2 border-primary pb-2 inline-block uppercase tracking-[0.2em]">Our Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services/accreditation" className="text-gray-300 hover:text-white transition-colors font-medium">Accreditation</Link></li>
                            <li><Link href="/services/cashless-management" className="text-gray-300 hover:text-white transition-colors font-medium">Cashless Management</Link></li>
                            <li><Link href="/services/empanelments" className="text-gray-300 hover:text-white transition-colors font-medium">Hospital Empanelment</Link></li>
                            <li><Link href="/services/it-solution" className="text-gray-300 hover:text-white transition-colors font-medium">IT Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 border-b border-primary/30 pb-2 inline-block">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <span className="text-primary-light mt-1">📍</span>
                                <span className="text-gray-400">Rajgurunagar, Pune, Maharashtra</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-primary-light">📧</span>
                                <span className="text-gray-400 text-sm">primeinsuranceservicespune@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Prime Insurance Services. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
