'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { hospitalServices, subServicesData } from '@/constants/services';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services', hasDropdown: true },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const isDarkHeaderPage = pathname === '/about' || pathname === '/contact';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text color logic
    const themeColorClass = isScrolled ? 'text-white' : 'text-hospital-slate';
    const secondaryColorClass = isScrolled ? 'text-white/70 hover:text-white' : 'text-hospital-slate/70 hover:text-hospital-slate';
    const ringColorClass = isScrolled ? 'ring-white/10 bg-white/5' : 'ring-hospital-slate/10 bg-hospital-slate/5';
    const barColorClass = isScrolled ? 'bg-white' : 'bg-hospital-slate';

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out px-4 flex justify-center ${isScrolled ? 'pt-4' : 'pt-0'}`}>
            <div className={`transition-all duration-500 ease-in-out flex items-center justify-between px-6 md:px-10 h-20 
                ${isScrolled
                    ? 'container max-w-6xl bg-black/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                    : 'w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'}`}>

                <Link href="/" className="flex items-center space-x-3 group outline-none">
                    <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                        <Image
                            src="/brand-logo.png"
                            alt="Prime Insurance Services"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className={`text-2xl font-black uppercase tracking-[0.4em] transition-colors duration-500 ${themeColorClass}`}>Prime</span>
                        <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">Insurance Services</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.label}
                            className="relative group py-4"
                            onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
                            onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
                        >
                            <Link
                                href={link.href}
                                className={`text-xs font-black uppercase tracking-[0.3em] transition-all relative inline-flex items-center ${secondaryColorClass}`}
                            >
                                {link.label}
                                {link.hasDropdown && (
                                    <svg className={`w-3 h-3 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'group-hover:w-full'}`} />
                            </Link>

                            {/* Dropdown Menu */}
                            {link.hasDropdown && (
                                <div className={`absolute top-full left-0 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-4">Main Services</p>
                                            <div className="grid grid-cols-1 gap-3">
                                                {hospitalServices.filter(s => !s.subService).map(service => (
                                                    <Link
                                                        key={service.id}
                                                        href={service.link}
                                                        className="text-sm font-bold text-hospital-slate hover:text-primary transition-colors flex items-center space-x-3"
                                                    >
                                                        <span className="opacity-50">{service.icon}</span>
                                                        <span>{service.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-gray-100">
                                            <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-4">Specialized Consulting</p>
                                            <div className="grid grid-cols-1 gap-3">
                                                {subServicesData.map(sub => (
                                                    <Link
                                                        key={sub.title}
                                                        href={sub.href}
                                                        className="text-xs font-bold text-gray-500 hover:text-primary transition-colors"
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all shadow-[0_10px_20px_rgba(59,130,246,0.3)] active:scale-95 ${isScrolled ? 'bg-primary text-white hover:bg-white hover:text-primary' : 'bg-primary text-white hover:bg-hospital-slate'}`}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-2 group outline-none transition-colors duration-500 ${themeColorClass}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={`flex flex-col space-y-1.5 ring-1 p-3 rounded-2xl backdrop-blur-md transition-all duration-500 ${ringColorClass}`}>
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${barColorClass} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${barColorClass} ${isScrolled && !isMenuOpen ? 'w-4' : 'w-6'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${barColorClass} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[60] lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-full container mx-auto px-8 pt-24 overflow-y-auto pb-12">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-10 right-8 text-white/50 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-black"
                    >
                        Close [×]
                    </button>
                    <div className="space-y-8">
                        {navLinks.map((link, i) => (
                            <div key={link.label} className="space-y-4">
                                <Link
                                    href={link.href}
                                    className={`text-4xl font-black text-white transition-all duration-500 block ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                    onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
                                >
                                    <span className="text-primary italic mr-4">0{i + 1}</span>
                                    {link.label}
                                </Link>

                                {link.hasDropdown && (
                                    <div className={`grid grid-cols-1 gap-4 pl-12 transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: `${(i * 100) + 100}ms` }}>
                                        {hospitalServices.filter(s => !s.subService).map(service => (
                                            <Link
                                                key={service.id}
                                                href={service.link}
                                                className="text-lg font-bold text-gray-400 hover:text-primary transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/contact"
                        className={`mt-12 bg-primary text-white text-center py-6 rounded-3xl font-black uppercase tracking-[0.3em] transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '600ms' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
};
