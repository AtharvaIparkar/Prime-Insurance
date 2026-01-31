import { Hero } from "@/components/ui/Hero";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import Link from "next/link";
import { StatCounter } from "@/components/ui/StatCounter";
import { FAQSection } from "@/components/ui/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-insurance-slate text-center mb-16 tracking-tight">Why to choose us</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <p className="text-5xl md:text-6xl font-black text-primary">
                <StatCounter end={98} suffix="%" />
              </p>
              <p className="text-[10px] md:text-xs font-black text-insurance-slate uppercase tracking-[0.2em]">Claim Settlement Ratio</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl md:text-6xl font-black text-primary">
                <StatCounter end={15} suffix="+" />
              </p>
              <p className="text-[10px] md:text-xs font-black text-insurance-slate uppercase tracking-[0.2em]">Insurance Partners</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl md:text-6xl font-black text-primary">
                <StatCounter end={5000} suffix="+" />
              </p>
              <p className="text-[10px] md:text-xs font-black text-insurance-slate uppercase tracking-[0.2em]">Happy Families</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl md:text-6xl font-black text-primary">
                <StatCounter end={24} suffix="/7" />
              </p>
              <p className="text-[10px] md:text-xs font-black text-insurance-slate uppercase tracking-[0.2em]">Dedicated Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
      <section className="py-24 bg-insurance-slate relative overflow-hidden">
        {/* Abstract Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[100%] bg-primary blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[100%] bg-secondary blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.5em]">Ready to Secure Your Future?</h2>
            <p className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              Get Your Personalized <br />Insurance Quote in <span className="text-primary italic">Minutes</span>
            </p>
            <p className="text-gray-400 text-lg font-medium max-w-xl mx-auto leading-relaxed">
              Experience the premium advisory service for Rajgurunagar. Our experts are ready to help you choose the perfect plan.
            </p>
            <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto bg-primary text-secondary px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.3)] inline-block">
                Request Quote Now
              </Link>
              <Link href="/services" className="w-full sm:w-auto border-2 border-white/20 text-white hover:bg-white/10 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all inline-block">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
