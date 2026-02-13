import { Hero } from "@/components/ui/Hero";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import Link from "next/link";
import { StatCounter } from "@/components/ui/StatCounter";
import Image from "next/image";
import { FAQSection } from "@/components/ui/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-4">Who We Are</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-hospital-slate uppercase tracking-tighter mb-8">Why Choose Us</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
              At Prime Insurance Consultancy, we specialize in Insurance & TPA Cashless Empanelment services for hospitals across India. Our mission is to help healthcare institutions build strong associations with both government and private insurance providers, enabling smooth and efficient cashless treatment facilities for patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="text-4xl mb-6">🕐</div>
              <h4 className="text-xl font-black text-hospital-slate mb-4 uppercase tracking-tight">24*7 Support</h4>
              <p className="text-gray-700 font-bold leading-relaxed italic">
                &quot;We understand the importance of a hospital to be available round the clock hence we make sure to remain proactively available 24 x 7 for our clients.&quot;
              </p>
            </div>
            <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10 hover:shadow-xl transition-all duration-500">
              <div className="text-4xl mb-6">🎯</div>
              <h4 className="text-xl font-black text-hospital-slate mb-4 uppercase tracking-tight">Aims & Objective</h4>
              <p className="text-gray-700 font-bold leading-relaxed italic">
                &quot;Our aim is to become world-class healthcare service facilitators and to provide quality healthcare solutions for our clients through innovation, dedication, and a customer-centric approach.&quot;
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="text-4xl mb-6">⭐</div>
              <h4 className="text-xl font-black text-hospital-slate mb-4 uppercase tracking-tight">Experienced</h4>
              <p className="text-gray-700 font-bold leading-relaxed italic">
                &quot;Our consultants have an appropriate experience in various domains of hospital management. We bring out our experience of years to help you build the hospital of your dreams.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Healthcare Section */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-white relative">
                <Image
                  src="/hero_advisor.png"
                  alt="Expert Hospital Consulting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-[2.5rem] shadow-2xl max-w-[240px]">
                <p className="text-4xl font-black mb-2">7+</p>
                <p className="text-sm font-black uppercase tracking-widest opacity-90">Years of Operational Excellence</p>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-primary font-black uppercase tracking-[0.4em] text-sm">Empowering Healthcare</h3>
              <h2 className="text-4xl md:text-6xl font-black text-hospital-slate leading-[1.1] tracking-tighter">
                Expert Solutions for <br /><span className="text-primary italic">Optimal Care</span> Outcomes
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-bold">
                Accreditations such as Full NABH, Entry Level NABH, NABL, and JCI are highly esteemed acknowledgements in the healthcare industry, signifying substantial improvements in the safety and quality of care.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                With approximately 10 years of experience, our quality assessors bring a wealth of knowledge to the accreditation process. Our team is adept at guiding hospitals, dental clinics, and laboratories through the rigorous requirements needed to secure prestigious certifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-black text-primary mb-2">
                <StatCounter end={99} suffix="%" />
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Excellence Research</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-black text-primary mb-2">
                <StatCounter end={98} suffix="%" />
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Strategy Consulting</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-black text-primary mb-2">
                <StatCounter end={95} suffix="%" />
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Delightful Candidates</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-black text-primary mb-2">
                <StatCounter end={100} suffix="%" />
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Best Treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 bg-hospital-slate relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[100%] bg-primary blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.5em]">Ready to Elevate Your Healthcare Facility?</h2>
            <p className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              Get Expert <span className="text-primary italic">Consultation</span> For Your Hospital Today
            </p>
            <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_20px_40px_rgba(59,130,246,0.3)] inline-block">
                Book Consultation Now
              </Link>
              <Link href="/services" className="w-full sm:w-auto border-2 border-white/20 text-white hover:bg-white/10 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all inline-block">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
