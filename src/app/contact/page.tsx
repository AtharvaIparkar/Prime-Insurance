"use client";

import React, { useState } from "react";
import { INDIAN_STATES, INDIAN_DISTRICTS } from "@/constants/states-districts";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ─── Form field types ───────────────────────────────────────────────────────
interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    hospitalName: string;
    state: string;
    district: string;
    pincode: string;
    preferredDate: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

// ─── Initial state ──────────────────────────────────────────────────────────
const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    hospitalName: "",
    state: "",
    district: "",
    pincode: "",
    preferredDate: "",
    message: "",
};

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    // ── Client-side validation ──────────────────────────────────────────────
    function validateForm(): FormErrors {
        const newErrors: FormErrors = {};

        if (!formData.name.trim() || formData.name.trim().length < 2) {
            newErrors.name = "Full name is required (min 2 characters).";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "A valid email address is required.";
        }

        const phoneRegex = /^[\d\s+\-()]{7,20}$/;
        if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "A valid phone number is required.";
        }

        if (!formData.service || formData.service === "Select Service Required") {
            newErrors.service = "Please select a service.";
        }

        if (!formData.hospitalName.trim() || formData.hospitalName.trim().length < 3) {
            newErrors.hospitalName = "Hospital name is required (min 3 characters).";
        }

        if (!formData.state) {
            newErrors.state = "Please select a state.";
        }

        if (!formData.district) {
            newErrors.district = "Please select a district.";
        }

        const pincodeRegex = /^[1-9]\d{5}$/;
        if (!formData.pincode.trim() || !pincodeRegex.test(formData.pincode)) {
            newErrors.pincode = "A valid 6-digit pincode is required (cannot start with 0).";
        }

        if (formData.message.length > 2000) {
            newErrors.message = "Message must be less than 2000 characters.";
        }

        return newErrors;
    }

    // ── Handle input changes ────────────────────────────────────────────────
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    }

    // ── Handle state change ─────────────────────────────────────────────────
    function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const stateCode = e.target.value;
        setFormData((prev) => ({
            ...prev,
            state: stateCode,
            district: "", // Reset district when state changes
        }));

        // Clear state and district errors
        if (errors.state || errors.district) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next.state;
                delete next.district;
                return next;
            });
        }
    }

    // ── Handle form submission ──────────────────────────────────────────────
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // Validate before submitting
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/consultation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus("success");
                setStatusMessage("Thank you! Your consultation request has been submitted. We will contact you soon.");
                setFormData(initialFormData); // Reset form
            } else if (response.status === 422 && data.details) {
                // Server-side validation errors
                setErrors(data.details);
                setSubmitStatus("error");
                setStatusMessage(data.error || "Please fix the errors below.");
            } else if (response.status === 429) {
                setSubmitStatus("error");
                setStatusMessage(data.error || "Too many requests. Please wait a moment.");
            } else {
                setSubmitStatus("error");
                setStatusMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch {
            setSubmitStatus("error");
            setStatusMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex flex-col">
            {/* Premium Header Section - Refined Dark Palette */}
            <section className="bg-[#1E293B] py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[100%] bg-primary blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[100%] bg-blue-400/20 blur-[150px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-10 space-y-6">
                        <ScrollReveal animation="fade">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase">
                                Let&apos;s <span className="text-primary italic">Talk</span> Healthcare
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal animation="slide-up" delay={200}>
                            <p className="text-lg sm:text-xl md:text-2xl text-white font-bold max-w-3xl mx-auto opacity-90 tracking-tight">
                                Partner with us for excellence in hospital planning and advisory services.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Light Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Contact Info */}
                            <div className="lg:col-span-1 space-y-8">
                                <ScrollReveal animation="slide-right">
                                    <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#3B82F6]/5 rounded-xl flex items-center justify-center text-[#3B82F6] text-xl border border-[#3B82F6]/10">📍</div>
                                            <div>
                                                <p className="font-black text-[#3B82F6] uppercase tracking-[0.2em] text-[10px] mb-1">Office Location</p>
                                                <p className="text-[#1E293B] font-bold text-sm">Rajgurunagar, Pune, Maharashtra 410505</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#3B82F6]/5 rounded-xl flex items-center justify-center text-[#3B82F6] text-xl border border-[#3B82F6]/10">📧</div>
                                            <div>
                                                <p className="font-black text-[#3B82F6] uppercase tracking-[0.2em] text-[10px] mb-1">Direct Mail</p>
                                                <p className="text-[#1E293B] font-bold text-sm break-all">primeinsuranceservicespune@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-xl font-bold">WA</div>
                                            <div>
                                                <p className="font-black text-[#3B82F6] uppercase tracking-[0.2em] text-[10px] mb-1">Social Chat</p>
                                                <p className="text-[#1E293B] font-bold text-sm">+91 74208 02527</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* Premium Consultation Form */}
                            <div className="lg:col-span-2">
                                <ScrollReveal animation="slide-left" delay={400}>
                                    <div className="bg-[#1E293B] p-10 md:p-16 rounded-[4rem] text-white shadow-xl relative overflow-hidden border border-white/10 h-full">
                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6] opacity-10 blur-[130px] -z-0" />
                                        <div className="relative z-10">
                                            <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">
                                                Request <span className="text-primary italic">Consultation</span>
                                            </h3>

                                            {/* Status Messages */}
                                            {submitStatus === "success" && (
                                                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-300 font-bold text-sm flex items-center gap-3">
                                                    <span className="text-xl">✅</span>
                                                    {statusMessage}
                                                </div>
                                            )}
                                            {submitStatus === "error" && !Object.keys(errors).length && (
                                                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-2xl text-red-300 font-bold text-sm flex items-center gap-3">
                                                    <span className="text-xl">⚠️</span>
                                                    {statusMessage}
                                                </div>
                                            )}

                                            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                                {/* Form Fields ... */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="Your Name"
                                                            className={`w-full bg-white/10 border ${errors.name || errors.email || errors.phone || errors.hospitalName || errors.message ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold placeholder:text-[#D1D9E6]/50`}
                                                        />
                                                        {errors.name && <p className="mt-2 text-red-400 text-xs font-bold">{errors.name}</p>}
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Email Address"
                                                            className={`w-full bg-white/10 border ${errors.email ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold placeholder:text-[#D1D9E6]/50`}
                                                        />
                                                        {errors.email && <p className="mt-2 text-red-400 text-xs font-bold">{errors.email}</p>}
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="Phone Number"
                                                            className={`w-full bg-white/10 border ${errors.phone ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold placeholder:text-[#D1D9E6]/50`}
                                                        />
                                                        {errors.phone && <p className="mt-2 text-red-400 text-xs font-bold">{errors.phone}</p>}
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="date"
                                                            name="preferredDate"
                                                            value={formData.preferredDate}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold placeholder:text-[#D1D9E6]/50"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    <div>
                                                        <select
                                                            name="state"
                                                            value={formData.state}
                                                            onChange={handleStateChange}
                                                            className={`w-full bg-white/10 border ${errors.state ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold`}
                                                        >
                                                            <option className="bg-[#1E293B]" value="">Select State</option>
                                                            {INDIAN_STATES.map((state) => (
                                                                <option key={state.code} className="bg-[#1E293B]" value={state.code}>
                                                                    {state.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {errors.state && <p className="mt-2 text-red-400 text-xs font-bold">{errors.state}</p>}
                                                    </div>
                                                    <div>
                                                        <select
                                                            name="district"
                                                            value={formData.district}
                                                            onChange={handleChange}
                                                            disabled={!formData.state}
                                                            className={`w-full bg-white/10 border ${errors.district ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed`}
                                                        >
                                                            <option className="bg-[#1E293B]" value="">
                                                                {!formData.state ? "Select State First" : "Select District"}
                                                            </option>
                                                            {formData.state && INDIAN_DISTRICTS[formData.state]?.map((district) => (
                                                                <option key={district} className="bg-[#1E293B]" value={district}>
                                                                    {district}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {errors.district && <p className="mt-2 text-red-400 text-xs font-bold">{errors.district}</p>}
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            name="pincode"
                                                            value={formData.pincode}
                                                            onChange={handleChange}
                                                            placeholder="6-digit Pincode"
                                                            maxLength={6}
                                                            className={`w-full bg-white/10 border ${errors.pincode ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold placeholder:text-[#D1D9E6]/50`}
                                                        />
                                                        {errors.pincode && <p className="mt-2 text-red-400 text-xs font-bold">{errors.pincode}</p>}
                                                    </div>
                                                </div>

                                                <div>
                                                    <input
                                                        type="text"
                                                        name="hospitalName"
                                                        value={formData.hospitalName}
                                                        onChange={handleChange}
                                                        placeholder="Hospital Name"
                                                        className={`w-full bg-white/10 border ${errors.hospitalName ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold placeholder:text-[#D1D9E6]/50`}
                                                    />
                                                    {errors.hospitalName && <p className="mt-2 text-red-400 text-xs font-bold">{errors.hospitalName}</p>}
                                                </div>

                                                <div>
                                                    <select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                        className={`w-full bg-white/5 border ${errors.service ? "border-red-400" : "border-white/10"} p-5 rounded-2xl focus:outline-none focus:border-[#3B82F6] transition-all text-white font-bold outline-none`}
                                                    >
                                                        <option className="bg-[#1E293B]" value="">Select Service Required</option>
                                                        <option className="bg-[#1E293B]" value="Insurance & TPA Cashless Empanelment">Insurance & TPA Cashless Empanelment</option>
                                                        <option className="bg-[#1E293B]" value="NABH and NABL Accreditation">NABH and NABL Accreditation</option>
                                                        <option className="bg-[#1E293B]" value="Cashless Management">Cashless Management</option>
                                                        <option className="bg-[#1E293B]" value="IT Solutions">IT Solutions</option>
                                                        <option className="bg-[#1E293B]" value="Hospital Marketing">Hospital Marketing</option>
                                                    </select>
                                                    {errors.service && <p className="mt-2 text-red-400 text-xs font-bold">{errors.service}</p>}
                                                </div>

                                                <div>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Describe your hospital's needs..."
                                                        rows={4}
                                                        className={`w-full bg-white/10 border ${errors.message ? "border-red-400" : "border-white/20"} p-5 rounded-2xl focus:outline-none focus:border-[#2563EB] transition-colors text-white font-bold placeholder:text-[#D1D9E6]/50`}
                                                    />
                                                    {errors.message && <p className="mt-2 text-red-400 text-xs font-bold">{errors.message}</p>}
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`w-full py-5 rounded-2xl font-black text-xl uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)] ${isSubmitting
                                                        ? "bg-[#2563EB]/50 cursor-not-allowed scale-100"
                                                        : "bg-[#2563EB] hover:scale-[1.02] cursor-pointer"
                                                        }`}
                                                >
                                                    {isSubmitting ? (
                                                        <span className="flex items-center justify-center gap-3">
                                                            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Submitting...
                                                        </span>
                                                    ) : (
                                                        "Book Consultation"
                                                    )}
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
