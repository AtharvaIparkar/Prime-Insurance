'use client';

import ReviewsDisplay from '@/components/ReviewsDisplay';
import Link from 'next/link';

export default function ReviewsPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB] py-24 px-4 mt-20">
            <div className="container mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left space-y-4">
                        <h2 className="text-[#2563EB] font-black uppercase tracking-[0.4em] text-xs">Community Proof</h2>
                        <h1 className="text-4xl md:text-6xl font-black text-[#1E293B] tracking-tighter uppercase">Verified <span className="text-[#2563EB] italic">Experiences</span></h1>
                    </div>
                    <Link
                        href="/feedback"
                        className="bg-[#2563EB] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl"
                    >
                        Share Your Feedback
                    </Link>
                </div>

                <ReviewsDisplay />
            </div>
        </main>
    );
}
