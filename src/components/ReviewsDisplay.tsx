'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from './ui/ScrollReveal';

interface Review {
    _id: string;
    name: string;
    reviewTitle: string;
    reviewText: string;
    rating: number;
    location: string;
    hospitalName: string;
}

export default function ReviewsDisplay() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [displayReviews, setDisplayReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            const fetchedReviews = data.reviews || [];
            setReviews(fetchedReviews);

            // Triple the reviews for infinite loop
            if (fetchedReviews.length > 0) {
                setDisplayReviews([...fetchedReviews, ...fetchedReviews, ...fetchedReviews]);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    // Initialize scroll position to the middle set
    useEffect(() => {
        if (!loading && displayReviews.length > 0 && sliderRef.current) {
            const originalWidth = (sliderRef.current.scrollWidth / 3);
            sliderRef.current.scrollLeft = originalWidth;
        }
    }, [loading, displayReviews]);

    const handleInfiniteScroll = () => {
        const container = sliderRef.current;
        if (!container) return;

        const maxScroll = container.scrollWidth;
        const currentScroll = container.scrollLeft;
        const originalWidth = maxScroll / 3;

        // If we reach the end of the 3rd set, jump to the start of the 2nd set
        if (currentScroll >= originalWidth * 2) {
            container.scrollTo({ left: currentScroll - originalWidth, behavior: 'auto' });
        }
        // If we reach the start of the 1st set, jump to the end of the 2nd set
        else if (currentScroll <= 0) {
            container.scrollTo({ left: originalWidth, behavior: 'auto' });
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="w-12 h-12 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[#2872A1] font-black uppercase tracking-widest text-xs">Fetching Excellence...</p>
            </div>
        );
    }

    return (
        <div id="reviews" className="max-w-[1600px] mx-auto px-4 lg:px-24 scroll-mt-32 overflow-x-clip">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12">
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-[#2563EB] font-black uppercase tracking-[0.4em] text-xs">Community Proof</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-[#2872A1] tracking-tighter uppercase leading-none">Experiences</h3>
                </div>
                <Link
                    href="/feedback"
                    className="group bg-[#2563EB] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center space-x-3"
                >
                    <span>Share Your Feedback</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            {/* Reviews Slider */}
            {reviews.length > 0 ? (
                <div className="relative group max-w-[1204px] mx-auto overflow-visible">
                    {/* Navigation Buttons - LEFT */}
                    <button
                        onClick={() => {
                            if (sliderRef.current) {
                                sliderRef.current.scrollTo({
                                    left: sliderRef.current.scrollLeft - 412,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                        className="hidden md:flex absolute -left-12 lg:-left-28 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-md hover:bg-white text-[#2872A1] rounded-full p-4 shadow-2xl border border-slate-100 transition-all opacity-0 group-hover:opacity-100 active:scale-95"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Reviews Container - SLIDER */}
                    <div
                        id="reviews-slider"
                        ref={sliderRef}
                        onScroll={handleInfiniteScroll}
                        className="flex gap-8 overflow-x-auto overflow-y-visible pb-24 pt-10 h-full list-none select-none snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            #reviews-slider::-webkit-scrollbar {
                                display: none;
                            }
                        `}} />

                        {displayReviews.map((review: any, index: number) => (
                            <div
                                key={`${review._id}-${index}`}
                                className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-[#D1D9E6] hover:scale-[1.02] transition-all duration-500 flex flex-col group/card h-full flex-shrink-0 w-[300px] sm:w-[380px] snap-start"
                            >
                                <div className="flex gap-1 mb-6 text-yellow-400">
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </div>

                                <div className="flex-grow space-y-4">
                                    <h3 className="text-[#2872A1] font-black text-xl uppercase tracking-tight group-hover/card:text-[#2563EB] transition-colors">
                                        "{review.reviewTitle}"
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed italic">
                                        {review.reviewText}
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center text-[#2563EB] font-black uppercase text-xl">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-[#2872A1] font-black uppercase tracking-tight text-sm">{review.name}</p>
                                        <p className="text-[#2563EB] font-bold text-[10px] uppercase tracking-widest">{review.hospitalName}</p>
                                        <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest mt-0.5">{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons - RIGHT */}
                    <button
                        onClick={() => {
                            if (sliderRef.current) {
                                sliderRef.current.scrollTo({
                                    left: sliderRef.current.scrollLeft + 412,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                        className="hidden md:flex absolute -right-12 lg:-right-28 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-md hover:bg-white text-[#2872A1] rounded-full p-4 shadow-2xl border border-slate-100 transition-all opacity-0 group-hover:opacity-100 active:scale-95"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className="text-center py-20 bg-[#F9FAFB] rounded-[3rem] border-2 border-dashed border-[#D1D9E6]">
                    <p className="text-slate-400 font-black uppercase tracking-[0.3em]">No verified reviews yet</p>
                    <p className="text-slate-300 text-sm font-bold mt-2">Become our first partner to share excellence!</p>
                </div>
            )}
        </div>
    );
}
