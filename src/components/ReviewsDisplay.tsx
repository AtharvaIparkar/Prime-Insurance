'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function ReviewsDisplay() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [averageRating, setAverageRating] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviews(data.reviews || []);
            setAverageRating(data.averageRating || 0);
            setTotal(data.total || 0);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
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
        <div className="max-w-7xl mx-auto px-4">
            {/* Reviews Grid */}
            {reviews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review: any, index: number) => (
                        <ScrollReveal
                            key={review._id}
                            animation="slide-up"
                            delay={index * 100}
                        >
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-[#D1D9E6] hover:scale-[1.02] transition-all duration-500 flex flex-col group h-full">
                                <div className="flex gap-1 mb-6 text-yellow-400">
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </div>

                                <div className="flex-grow space-y-4">
                                    <h3 className="text-[#2872A1] font-black text-xl uppercase tracking-tight group-hover:text-[#2563EB] transition-colors">
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
                        </ScrollReveal>
                    ))}
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
