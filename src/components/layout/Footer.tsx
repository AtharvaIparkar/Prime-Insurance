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
                            <h2 className="text-white font-black text-xl leading-none tracking-tighter uppercase italic">Prime <br />Consultancy</h2>
                        </div>
                        <p className="text-gray-400 font-bold leading-relaxed">
                            Empowering healthcare through expert empanelment and accrediation services. We bridge the gap between hospitals and quality standards.
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
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Specialized Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services/accreditation" className="text-gray-400 hover:text-primary transition-colors font-medium">Accreditation</Link></li>
                            <li><Link href="/services/cashless-management" className="text-gray-400 hover:text-primary transition-colors font-medium">Cashless Management</Link></li>
                            <li><Link href="/services/empanelments" className="text-gray-400 hover:text-primary transition-colors font-medium">Hospital Empanelment</Link></li>
                            <li><Link href="/services/it-solution" className="text-gray-400 hover:text-primary transition-colors font-medium">IT Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400 font-bold text-sm">Pune/Rajgurunagar Region</li>
                            <li className="text-gray-400 font-bold text-sm break-all">primeinsuranceservicespune@gmail.com</li>
                            <li className="text-gray-400 font-bold text-sm">+91 74208 02527 / 77092 00527</li>
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
            </div>
        </footer>
    );
};
