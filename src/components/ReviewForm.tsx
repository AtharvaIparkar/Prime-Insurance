'use client';

import { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function ReviewForm() {
    const [formData, setFormData] = useState({
        name: '',
        hospitalName: '',
        location: '',
        rating: 5,
        serviceUsed: '',
        reviewTitle: '',
        reviewText: '',
        wouldRecommend: true,
        email: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to submit review');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit review');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-[2.5rem] p-12 text-center shadow-xl">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-green-600">✓</span>
                </div>
                <h3 className="text-[#1E293B] font-black text-3xl mb-4 uppercase tracking-tight">Thank You!</h3>
                <p className="text-slate-600 font-bold text-lg max-w-sm mx-auto">
                    Your feedback helps us maintain global standards. Your review will be published after verification.
                </p>
            </div>
        );
    }

    return (
        <ScrollReveal animation="slide-up">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-[#D1D9E6] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 blur-[80px] -z-0" />

                <div className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Ex: Dr. Amit Sharma"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-[#F9FAFB] border border-[#D1D9E6] p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#1E293B] font-bold placeholder:text-slate-300"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="amit@hospital.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-[#F9FAFB] border border-[#D1D9E6] p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#1E293B] font-bold placeholder:text-slate-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Hospital Name */}
                        <div>
                            <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                                Hospital / Clinic Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Ex: LifeCare Hospital"
                                value={formData.hospitalName}
                                onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                                className="w-full bg-[#F9FAFB] border border-[#D1D9E6] p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#1E293B] font-bold placeholder:text-slate-300"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                                City, State <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                placeholder="Pune, Maharashtra"
                                className="w-full bg-[#F9FAFB] border border-[#D1D9E6] p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#1E293B] font-bold placeholder:text-slate-300"
                            />
                        </div>
                    </div>

                    {/* Multi-column row for Rating and Service */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Rating */}
                        <div className="md:col-span-1">
                            <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                                Overall Rating <span className="text-red-500">*</span>
                            </label>
                            <div className="flex bg-[#F9FAFB] border border-[#D1D9E6] p-4 rounded-2xl justify-around h-[66px] items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                        className={`text-3xl transition-transform active:scale-90 ${star <= formData.rating ? 'text-yellow-400' : 'text-slate-200'}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Service Used */}
                        <div className="md:col-span-2">
                            <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                                Service Provided <span className="text-red-500">*</span>
                            </label>
                            <select
                                required
                                value={formData.serviceUsed}
                                onChange={(e) => setFormData({ ...formData, serviceUsed: e.target.value })}
                                className="w-full bg-[#F9FAFB] border border-[#D1D9E6] p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#1E293B] font-bold h-[66px]"
                            >
                                <option value="">Select Service</option>
                                <option value="Hospital Empanelment">Hospital Empanelment</option>
                                <option value="NABH/NABL Consultancy">NABH/NABL Consultancy</option>
                                <option value="Cashless Management">Cashless Management</option>
                                <option value="TPA & Insurance Support">TPA & Insurance Support</option>
                                <option value="IT Solutions">IT Solutions</option>
                            </select>
                        </div>
                    </div>

                    {/* Review Title */}
                    <div>
                        <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                            Review Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.reviewTitle}
                            onChange={(e) => setFormData({ ...formData, reviewTitle: e.target.value })}
                            placeholder="Summarize your experience..."
                            className="w-full bg-[#F9FAFB] border border-[#D1D9E6] p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#1E293B] font-bold placeholder:text-slate-300"
                        />
                    </div>

                    {/* Review Text */}
                    <div>
                        <label className="block text-[11px] font-black text-[#2563EB] uppercase tracking-widest mb-3">
                            Detailed Feedback <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            rows={5}
                            value={formData.reviewText}
                            onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                            placeholder="Tell us more about your transformation journey with Prime..."
                            className="w-full bg-[#F9FAFB] border border-[#D1D9E6] p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#1E293B] font-bold placeholder:text-slate-300 resize-none"
                        />
                    </div>

                    {/* Recommendation */}
                    <div className="flex items-center space-x-3 p-2">
                        <input
                            type="checkbox"
                            id="recommend"
                            checked={formData.wouldRecommend}
                            onChange={(e) => setFormData({ ...formData, wouldRecommend: e.target.checked })}
                            className="w-6 h-6 border-[#D1D9E6] rounded-md text-[#2563EB] focus:ring-[#2563EB]"
                        />
                        <label htmlFor="recommend" className="text-[#1E293B] font-bold text-sm">I would recommend Prime Insurance Services to other institutions</label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm disabled:opacity-50 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:scale-[1.01] active:scale-95 mt-4"
                    >
                        {isSubmitting ? 'Submitting Review...' : 'Submit Feedback'}
                    </button>
                </div>
            </form>
        </ScrollReveal>
    );
}
