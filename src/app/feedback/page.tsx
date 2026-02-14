'use client';

import ReviewForm from '@/components/ReviewForm';

export default function FeedbackPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB] py-24 px-4 mt-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-[#2563EB] font-black uppercase tracking-[0.4em] text-xs">Share Excellence</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-[#1E293B] tracking-tighter uppercase leading-[1.1]">
                        How was your <span className="text-[#2563EB] italic">Journey with Prime?</span>
                    </h1>
                    <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg">
                        Your review helps us improve our consultancy services and empowers other healthcare institutions to achieve global standards of excellence.
                    </p>
                </div>

                <ReviewForm />
            </div>
        </main>
    );
}
