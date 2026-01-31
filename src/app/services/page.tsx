import { ServiceGrid } from "@/components/ui/ServiceGrid";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">Our Insurance <span className="text-primary italic">Solutions</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        From protecting your health to securing your assets, we provide a wide range of insurance products tailored for the residents of Rajgurunagar and Pune.
                    </p>
                </div>

                <ServiceGrid />

                {/* Call to Action */}
                <div className="mt-24 bg-insurance-slate rounded-[3rem] p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold">Unsure which plan is right for you?</h2>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            Our expert advisors are just a call away. We'll help you compare policies and find the best coverage at the most affordable premium.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg">
                                Book a Free Consultation
                            </Link>
                            <a href="https://wa.me/+917420802527" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold transition-all border border-white/10">
                                Chat with Advisor
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
