"use client";

import { useState } from "react";
import { MapPin, Phone, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<"idle" | "success" >("idle");

  const faqs = [
    {
      title: "Executive Consultation",
      content: "A private, high-level assessment of clinical requirements and residential preferences.",
    },
    {
      title: "On-Site Facility Protocol",
      content: "A guided walkthrough of our Buford HQ, focusing on safety systems and suite aesthetics.",
    },
    {
      title: "VA Benefit Integration",
      content: "Strategic navigation of Aid & Attendance (A&A) to optimize care coverage.",
    },
  ];

  return (
    <div className="bg-[#f4f4f2] min-h-screen text-[#1a1a1a] selection:bg-[#9A7A3C]/30 font-sans">
      
      {/* --- HERO SECTION: BOLD & ANCHORED --- */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="h-[2px] w-12 bg-[#8B6A2E]" />
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.06em] leading-[1] md:leading-[0.9] text-[#1a1a1a]">
                Begin the <br className="hidden sm:block" />
                <span className="font-light text-[#1a1a1a]/40">Transition.</span>
              </h1>
            </div>
            <div className="pb-0 md:pb-4">
              <p className="text-lg md:text-xl font-medium text-[#1a1a1a]/60 leading-relaxed max-w-md">
                Secure a placement in our high-fidelity veteran care environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE INTERFACE GRID --- */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* LEFT: THE UTILITY STACK (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* HQ Card */}
              <div className="bg-[#F6EFE6] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Globe size={80} />
                </div>
                <MapPin className="text-[#8B6A2E] mb-6 md:mb-8" size={24} />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/30 mb-2">Facility HQ</h3>
                <p className="text-base md:text-lg font-bold leading-tight">
                  115 E. Main Street, <br />Suite 13H, Buford, GA
                </p>
              </div>

              {/* Secure Line Card */}
              <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl text-white group">
                <Phone className="text-[#8B6A2E] mb-6 md:mb-8 group-hover:rotate-12 transition-transform" size={24} />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Secure Line</h3>
                <a href="tel:6789686164" className="text-xl md:text-2xl font-bold tracking-tighter hover:text-[#8B6A2E] transition-colors block">
                  (678) 968-6164
                </a>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Active Dispatch</span>
                </div>
              </div>

              {/* Process Accordion */}
              <div className="bg-white/50 backdrop-blur-md p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/50">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8 opacity-40">Admissions Protocol</h4>
                <div className="space-y-5 md:space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="group cursor-pointer border-b border-[#1a1a1a]/5 pb-4 last:border-0 last:pb-0" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <div className="flex justify-between items-center mb-2 gap-4">
                        <span className={`text-sm font-bold tracking-tight leading-snug ${openFaq === i ? 'text-[#8B6A2E]' : 'text-[#1a1a1a]'}`}>{faq.title}</span>
                        {openFaq === i ? <ChevronUp size={14} className="shrink-0"/> : <ChevronDown size={14} className="shrink-0"/>}
                      </div>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.p 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }}
                            className="text-xs font-medium text-[#1a1a1a]/50 leading-relaxed overflow-hidden"
                          >
                            {faq.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: THE INTAKE SLAB (8 Cols) */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-white h-full relative overflow-hidden">
                
                {/* Success Overlay */}
                {formStatus === "success" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center p-8 text-center">
                    <CheckCircle2 size={60} className="text-[#8B6A2E] mb-6" />
                    <h2 className="text-3xl font-bold tracking-tighter mb-2">Request Logged.</h2>
                    <p className="text-[#1a1a1a]/50 font-medium">An advisor will contact you shortly.</p>
                    <button onClick={() => setFormStatus("idle")} className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#8B6A2E] hover:underline">Send another request</button>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">Initial Intake <br />Form.</h2>
                  <div className="text-left sm:text-right">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/20">Est. Response Time</span>
                    <p className="text-xs md:text-sm font-bold text-[#8B6A2E]">{"<"} 24 Hours</p>
                  </div>
                </div>

                <form className="space-y-8 md:space-y-10" onSubmit={(e) => { e.preventDefault(); setFormStatus("success"); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-b-2 border-[#1a1a1a]/5 focus-within:border-[#8B6A2E] transition-colors pb-2">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/30 block mb-1">Full Name</label>
                      <input required type="text" className="w-full bg-transparent pt-1 pb-1 outline-none text-base md:text-lg font-bold placeholder:text-[#1a1a1a]/10" placeholder="John Doe" />
                    </div>
                    <div className="border-b-2 border-[#1a1a1a]/5 focus-within:border-[#8B6A2E] transition-colors pb-2">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/30 block mb-1">Contact Phone</label>
                      <input required type="tel" className="w-full bg-transparent pt-1 pb-1 outline-none text-base md:text-lg font-bold placeholder:text-[#1a1a1a]/10" placeholder="(000) 000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-b-2 border-[#1a1a1a]/5 focus-within:border-[#8B6A2E] transition-colors pb-2">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/30 block mb-1">Email Address</label>
                      <input required type="email" className="w-full bg-transparent pt-1 pb-1 outline-none text-base md:text-lg font-bold placeholder:text-[#1a1a1a]/10" placeholder="john@agency.com" />
                    </div>
                    <div className="border-b-2 border-[#1a1a1a]/5 focus-within:border-[#8B6A2E] transition-colors pb-2 relative">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/30 block mb-1">Relationship</label>
                      <select className="w-full bg-transparent pt-1 pb-1 outline-none text-base md:text-lg font-bold appearance-none cursor-pointer pr-8">
                        <option>Self</option>
                        <option>Spouse</option>
                        <option>Child</option>
                        <option>Professional Guardian</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 bottom-3 pointer-events-none opacity-20" />
                    </div>
                  </div>

                  <div className="border-b-2 border-[#1a1a1a]/5 focus-within:border-[#8B6A2E] transition-colors pb-2">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/30 block mb-1">Detailed Inquiry</label>
                    <textarea rows={3} className="w-full bg-transparent pt-1 pb-1 outline-none text-base md:text-lg font-bold placeholder:text-[#1a1a1a]/10 resize-none" placeholder="Describe clinical needs..."></textarea>
                  </div>

                  <button type="submit" className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 bg-[#1a1a1a] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-[#8B6A2E] transition-all duration-500 shadow-xl flex items-center justify-center gap-4 group">
                    Submit Intake <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER BADGE --- */}
      <section className="pb-12 text-center opacity-20">
      
      </section>
    </div>
  );
}
