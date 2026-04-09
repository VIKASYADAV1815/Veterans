"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, ArrowUpRight, Activity, Globe, Scale } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen selection:bg-[#9A7A3C]/30">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1a1a1a]/5 pb-10 md:pb-12">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-[#1a1a1a] leading-[1.1]">
                Architecting Dignity <br className="hidden sm:block" />
                <span className="text-[#1a1a1a]/30 font-light">for American Veterans.</span>
              </h1>
            </div>
            <div className="max-w-xs">
              <p className="text-xs md:text-sm text-[#1a1a1a]/50 font-medium leading-relaxed">
                ATM Pro operates at the intersection of clinical precision and residential comfort, establishing a new benchmark for veteran care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMAGE & STATS SECTION (High Density) --- */}
      <section className="px-6 md:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Visual */}
          <div className="lg:col-span-8 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-[2rem] overflow-hidden border border-[#1a1a1a]/5 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1637594439849-40ef084de32f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Facility Interior"
              fill
              className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Quick Metrics (Content Density) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-[#1a1a1a]/5 flex flex-col justify-between min-h-[140px] md:min-h-0">
              <Activity className="text-[#8B6A2E]" size={20} />
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-[#1a1a1a] tracking-tighter">24/7</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Clinical Surveillance</span>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-2xl md:rounded-[2rem] text-white flex flex-col justify-between min-h-[140px] md:min-h-0">
              <Users className="text-[#8B6A2E]" size={20} />
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold tracking-tighter text-[#8B6A2E]">1:4</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40">Staff-to-Resident Ratio</span>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-[#1a1a1a]/5 flex flex-col justify-between min-h-[140px] md:min-h-0">
              <Globe className="text-[#8B6A2E]" size={20} />
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-[#1a1a1a] tracking-tighter text-[1.2rem] sm:text-2xl md:text-3xl">GA-30518</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Buford HQ Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE "WHY" (More Content) --- */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1: Context */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold tracking-tight text-[#1a1a1a]">The Heart of the Sanctuary</h3>
              <p className="text-sm text-[#1a1a1a]/60 leading-relaxed font-medium mt-2">
                While our facility is built with <span className="font-bold text-[#1a1a1a]">Architectural Precision</span> and <span className="font-bold text-[#1a1a1a]">Tier 1 Clinical</span> standards, the foundation of <span className="font-bold text-[#1a1a1a]">ATM Pro LLC</span> is something much simpler: <span className="font-bold text-[#1a1a1a]">Brotherhood.</span> We understand that for a veteran, a &quot;home&quot; isn&apos;t just about a room or a meal&mdash;it&apos;s about being surrounded by people who speak the same language of service and sacrifice. Our <span className="font-bold text-[#1a1a1a]">20-bed community</span> in <span className="font-bold text-[#1a1a1a]">Buford</span> was intentionally designed to be small, ensuring that every resident isn&apos;t just a &quot;patient&quot;, but a member of a tight-knit squad.
              </p>

              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1a1a1a]/60 mt-6">
                Our Promise to Families:
              </h4>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3 text-sm text-[#1a1a1a]/70 leading-relaxed font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A2E] mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-bold text-[#1a1a1a]">Dignity First:</span> We provide <span className="font-bold text-[#1a1a1a]">24/7 RN Supervision</span> not just for safety, but to ensure our heroes never have to struggle for basic needs.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#1a1a1a]/70 leading-relaxed font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A2E] mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-bold text-[#1a1a1a]">Zero Barriers:</span> From <span className="font-bold text-[#1a1a1a]">100% ADA Compliance</span> to specialized <span className="font-bold text-[#1a1a1a]">PTSD Care</span>, we remove the physical and mental obstacles that hinder quality of life.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#1a1a1a]/70 leading-relaxed font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A2E] mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-bold text-[#1a1a1a]">Total Advocacy:</span> You shouldn&apos;t have to fight the system after a lifetime of fighting for us. Our <span className="font-bold text-[#1a1a1a]">Benefit Mastery</span> team handles the VA paperwork so you can focus on being a family again.
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2: Clinical Care */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold tracking-tight text-[#1a1a1a]">Clinical Precision</h3>
              <p className="text-sm text-[#1a1a1a]/60 leading-relaxed font-medium">
                Our staff is trained specifically in veteran-centric healthcare needs, ranging from mobility support to emotional wellness. We don&apos;t just &quot;watch&quot; our residents; we actively manage their health trajectories.
              </p>
              <div className="p-6 bg-[#f9f8f6] rounded-2xl border border-[#1a1a1a]/5">
                <span className="text-[9px] font-mono text-[#8B6A2E] uppercase mb-2 block">Status Report</span>
                <p className="text-[11px] font-bold text-[#1a1a1a]/80 leading-snug">
                  The environment here isn&apos;t just a home; it&apos;s a calibrated system designed to reduce stress and
                  promote longevity.
                </p>
              </div>
            </div>

            {/* Column 3: The Call to Action */}
            <div className="relative group overflow-hidden border border-[#1a1a1a]/10 p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] flex flex-col justify-between items-start min-h-[300px] md:col-span-2 lg:col-span-1">
              <Image 
                src="https://images.unsplash.com/photo-1682464311258-495f156eb09b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Admissions"
                fill
                className="object-cover opacity-10 transition-transform duration-700"
              />
              <div className="relative z-10 w-full h-full flex flex-col justify-between items-start">
                <Scale className="text-[#8B6A2E] mb-6" />
                <div>
                  <h4 className="text-lg md:text-xl font-display font-bold text-[#1a1a1a] mb-4">Admissions is now open for Q3 2026.</h4>
                  <Link href="/contact" className="group/link flex items-center gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#1a1a1a] hover:text-[#8B6A2E] transition-colors">
                    Start the Process <ArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CORE VALUES (Subtle & Professional) --- */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] rounded-3xl md:rounded-[4rem] mx-4 mb-12 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#8B6A2E 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} 
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter mb-6">Our Fundamental <br className="hidden md:block" />Tenets.</h2>
              <p className="text-white/40 text-xs md:text-sm max-w-sm leading-relaxed">Governing every interaction, from administration to bedside care. These principles are the bedrock of our commitment to veteran well-being.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {[
                { t: "Integrity", d: "Upholding the standard of the uniform, we operate with unwavering honesty and transparency in all our services and interactions. Our word is our bond." },
                { t: "Excellence", d: "Through continuous clinical improvement and a relentless pursuit of best practices, we ensure the highest quality of care and support for every veteran." },
                { t: "Camaraderie", d: "Fostering veteran-to-veteran bonds is paramount. We cultivate a supportive community where shared experiences build strength and mutual respect." },
                { t: "Dignity", d: "Respecting the individual's legacy, we provide care that honors their service and preserves their self-worth, ensuring comfort and respect at every turn." }
              ].map((v, i) => (
                <div key={i} className="space-y-3 md:space-y-4">
                <h5 className="text-[#8B6A2E] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">{v.t}</h5>
                  <p className="text-white/60 text-[10px] md:text-xs font-medium leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
