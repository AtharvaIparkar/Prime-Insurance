'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/types';

const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const isDarkHeaderPage = pathname === '/about' || pathname === '/contact';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text color logic: 
    // If scrolled: always white (pill is dark)
    // If at top: always insurance-slate (since we're adding a light background)
    const themeColorClass = isScrolled ? 'text-white' : 'text-insurance-slate';
    const secondaryColorClass = isScrolled ? 'text-white/70 hover:text-white' : 'text-insurance-slate/70 hover:text-insurance-slate';
    const ringColorClass = isScrolled ? 'ring-white/10 bg-white/5 group-hover:bg-white/10' : 'ring-insurance-slate/10 bg-insurance-slate/5 group-hover:bg-insurance-slate/10';
    const barColorClass = isScrolled ? 'bg-white' : 'bg-insurance-slate';

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out px-4 flex justify-center ${isScrolled ? 'pt-4' : 'pt-0'}`}>
            <div className={`transition-all duration-500 ease-in-out flex items-center justify-between px-6 md:px-10 h-20 
                ${isScrolled
                    ? 'container max-w-5xl bg-black/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                    : 'w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'}`}>

                <Link href="/" className="flex items-center space-x-3 group outline-none">
                    <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                        <Image
                            src="/brand-logo.png"
                            alt="Prime Insurance Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className={`text-xl font-black uppercase tracking-tighter transition-colors duration-500 ${themeColorClass}`}>Prime</span>
                        <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em] opacity-80">Insurance Services</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all relative group ${secondaryColorClass}`}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all shadow-[0_10px_20px_rgba(6,182,212,0.3)] active:scale-95 ${isScrolled ? 'bg-primary text-secondary hover:bg-white hover:text-primary' : 'bg-primary text-white hover:bg-insurance-slate'}`}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 group outline-none transition-colors duration-500 ${themeColorClass}`}
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
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[60] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-full container mx-auto px-8 pt-32 space-y-8">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-10 right-8 text-white/50 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-black"
                    >
                        Close [×]
                    </button>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-4xl font-black text-white transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="text-primary italic mr-4">0{i + 1}</span>
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`bg-primary text-secondary text-center py-6 rounded-3xl font-black uppercase tracking-[0.3em] transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '400ms' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Start Your Quote
                    </Link>
                </div>
            </div>
        </header>
    );
};
