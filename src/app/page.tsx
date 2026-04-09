"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Star, HeartPulse, 
  Activity, Clock, Phone, Check, Plus, Minus, MapPin, Trophy
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div ref={containerRef} className="overflow-x-hidden bg-[#fafafa]">
      
      {/* 1. HERO SECTION - Updated with your requested Image */}
      <section className="relative min-h-[90vh] md:min-h-screen h-auto mx-0 md:mx-8 mt-0 md:mt-4 rounded-none md:rounded-[4rem] overflow-hidden shadow-2xl flex items-center">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
          <Image
            src="https://images.unsplash.com/photo-1763359838431-955ed0108992?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Premium Care Facility"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Improved Gradient Overlay for better readability and responsiveness */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 z-10 md:hidden" /> {/* Extra dark overlay for mobile */}

        <div className="relative z-20 flex flex-1 flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[90rem] mx-auto w-full py-20 md:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="glass p-2 rounded-full flex items-center gap-3 mb-6 md:mb-8 border-white/40 pr-5 shadow-sm w-fit">
              <div className="flex gap-1 text-accent bg-white p-1.5 rounded-full shadow-sm">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-white text-[10px] md:text-sm font-semibold tracking-wide uppercase">ATM Pro LLC | Premium Veteran Care</span>
            </div>

            <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-white tracking-tighter leading-[1.1] md:leading-[1.05] mb-6 sm:mb-8 text-balance">
              Redefining <span className="text-[#8B6A2E] font-semibold">Care</span> <br className="hidden sm:block" />with Dignity
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-xl leading-relaxed">
              An exclusive 20-bed community in Buford, Georgia, combining expert medical support with the brotherhood our veterans deserve.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8">
              <Link href="/contact" className="w-full sm:w-auto bg-primary text-white px-8 py-4 md:py-5 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group">
                Schedule a Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 text-white self-center sm:self-auto">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/60 shadow-sm shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/80">Call Directly</span>
                  <a href="tel:6789686164" className="font-display font-medium text-lg text-white hover:text-accent transition-colors">(678) 968-6164</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. REDESIGNED: THE GOLD STANDARD (Bento Style) */}
<section className="py-24 px-4 md:px-8 bg-[#fdfcfb]">
  <div className="max-w-[85rem] mx-auto">
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 h-[1px] bg-[#8B6A2E]" />
        </div>
        <h3 className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-display text-[#1a1a1a] tracking-tighter leading-[0.95] md:leading-[0.9]">
          The Gold <span className="text-[#8B6A2E] font-light">Standard.</span>
        </h3>
      </div>
      <p className="text-[#1a1a1a]/60 max-w-xs md:max-w-[320px] md:text-right text-xs sm:text-sm leading-relaxed font-medium uppercase tracking-tight">
        A clinical sanctuary engineered for those who served, defined by architectural precision and absolute dignity.
      </p>
    </div>

    {/* Modular Mosaic Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 auto-rows-[minmax(180px,_auto)]">
      
      {/* 1. VA Benefits Card - The "Gold Standard" Messaging */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 sm:col-span-2 md:col-span-8 relative bg-[#1a1a1a] rounded-[2rem] p-8 md:p-14 overflow-hidden shadow-2xl group"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#8B6A2E 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} 
        />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-12 items-center h-full">
          <div className="shrink-0 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-12 w-full md:w-auto">
            <Trophy className="text-[#8B6A2E] w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 mx-auto md:mx-0" />
            <h4 className="text-white text-2xl md:text-3xl font-display leading-tight">Benefit<br/>Mastery</h4>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 flex-1 w-full">
            {[
              { label: "Our Focus", val: "The Gold Standard" },
              { label: "VA Compliance", val: "Full Advocacy" },
              { label: "Veteran Status", val: "Priority Care" }
            ].map((item, i) => (
              <div key={i} className="group/stat">
                <p className="text-[#8B6A2E] text-[10px] uppercase tracking-widest font-black mb-2 md:mb-3">{item.label}</p>
                <p className="text-white font-display text-lg md:text-xl border-b border-white/10 pb-2 md:pb-3 group-hover/stat:border-[#8B6A2E] transition-all duration-500">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 2. ADA COMPLIANCE - Improved with your specific content */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 sm:col-span-2 md:col-span-4 bg-[#F6EFE6] rounded-[2rem] p-8 md:p-10 border border-[#1a1a1a]/5 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-6 opacity-20">

        </div>
        
        <h4 className="text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 flex items-center gap-2">
           <Activity className="w-4 h-4 text-[#8B6A2E]" /> Mobility
        </h4>
        
        <div className="space-y-4 md:space-y-6 relative z-10">
          <div className="flex items-baseline gap-2">
            <h5 className="text-4xl md:text-5xl font-display text-[#1a1a1a] tracking-tighter">100%</h5>
            <span className="text-[#8B6A2E] font-bold text-xs md:text-sm tracking-widest uppercase">ADA</span>
          </div>
          <p className="text-[#1a1a1a] font-bold text-base md:text-lg leading-tight">
            ADA Compliant facility designed for zero-barrier mobility.
          </p>
          <div className="pt-2 md:pt-4 flex gap-2">
             <div className="w-full h-[1.5px] bg-[#8B6A2E]" />
             <div className="w-1/4 h-[1.5px] bg-[#1a1a1a]/10" />
          </div>
        </div>
      </motion.div>

      {/* 3. Care Quality */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 sm:col-span-1 md:col-span-4 bg-[#8B6A2E] rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl min-h-[220px] md:min-h-0"
      >
        <div className="flex justify-between items-start">
          <HeartPulse className="text-white w-8 h-8" />
          <div className="text-[10px] font-black uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full text-white">Live_Support</div>
        </div>
        <div>
          <h5 className="font-display font-bold text-2xl md:text-3xl mb-2 md:mb-3 tracking-tighter text-white">24/7 RN Supervision.</h5>
          <p className="text-white/80 text-[10px] md:text-xs font-medium uppercase tracking-tight">Continuous monitoring for peace of mind.</p>
        </div>
      </motion.div>

      {/* 4. Culinary */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 sm:col-span-1 md:col-span-8 bg-[#f4f1ee] rounded-[2rem] p-8 md:p-12 text-[#1a1a1a] flex flex-col md:flex-row items-center gap-8 md:gap-10 shadow-sm border border-[#1a1a1a]/5 relative min-h-[220px] md:min-h-0"
      >
        <div className="relative z-10 flex-1 w-full text-center md:text-left">
          <h5 className="font-display font-bold text-3xl md:text-4xl mb-3 md:mb-4 tracking-tighter">Gourmet Nutrition.</h5>
          <p className="text-[#1a1a1a]/60 text-xs sm:text-sm max-w-sm mx-auto md:mx-0 font-medium leading-relaxed">
            Nutritional Excellence: Specialized Medical Diets, Five-Star Flavor.
          </p>
        </div>
        
        <div className="relative z-10 grid grid-cols-2 gap-3 shrink-0 w-full md:w-auto">
          {['Low-Sodium', 'Diabetic-Safe'].map((diet) => (
            <div key={diet} className="bg-white px-4 md:px-5 py-3 rounded-xl border border-[#1a1a1a]/10 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center shadow-sm">
              {diet}
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* 3. CARE TIERS */}
      <section className="py-20 md:py-24 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-4xl md:text-6xl font-display text-primary mb-4 tracking-tighter">Care Levels</h2>
            <p className="text-secondary max-w-xl mx-auto text-sm md:text-base">Customized medical attention designed for the unique needs of our heroes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Standard Care",
                desc: "RN-supervised medical assistance.",
                features: ["Semi-private Suite", "Daily ADL Support", "VA Benefit Assistance", "Medication Management"],
                highlight: false
              },
              {
                name: "Enhanced Support",
                desc: "Higher-level psychological & physical care.",
                features: ["Private Luxury Suite", "Specialized PTSD Care", "Custom Nutritional Plan", "Physical Therapy Access"],
                highlight: true
              }
            ].map((tier, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-500 ${tier.highlight ? 'bg-primary text-white border-primary shadow-2xl' : 'bg-[#F6EFE6] border-primary/10 text-primary shadow-sm'}`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-display font-bold ${tier.highlight ? 'text-accent' : 'text-primary'}`}>{tier.name}</h3>
                    <p className={`text-sm ${tier.highlight ? 'text-white/60' : 'text-secondary'}`}>{tier.desc}</p>
                  </div>
                  {tier.highlight && <span className="bg-accent text-white text-[9px] md:text-[10px] uppercase tracking-widest px-3 md:px-4 py-1.5 rounded-full font-bold self-start">Recommended</span>}
                </div>
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier.highlight ? 'bg-white/10 text-accent' : 'bg-primary/5 text-primary'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs md:text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-xl md:rounded-2xl font-bold transition-all text-sm md:text-base ${tier.highlight ? 'bg-accent text-white hover:bg-white hover:text-primary' : 'bg-primary text-white hover:bg-accent'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-20 md:py-24 px-6 md:px-8 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-accent font-bold tracking-widest text-[10px] md:text-sm uppercase">Quick Guide</span>
            <h2 className="text-4xl md:text-5xl font-display text-primary mt-4 mb-6 md:mb-8 tracking-tight">Questions <br className="hidden md:block"/>& Answers.</h2>
            <p className="text-secondary text-base md:text-lg max-w-md leading-relaxed">Everything you need to know about transitioning your loved one to a higher standard of living.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How do VA benefits apply?", a: "We specialize in 'Aid and Attendance' benefits. Our team handles the documentation to help offset costs for eligible veterans." },
              { q: "What is the staff-to-resident ratio?", a: "We maintain one of the highest ratios in Georgia to ensure every resident receives personalized 24/7 attention." },
              { q: "Can we tour the facility?", a: "Absolutely. We encourage families to schedule a visit to experience our environment and meet our medical team." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-primary/10 pb-2">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex justify-between items-center py-4 text-left group gap-4"
                >
                  <span className="text-lg md:text-xl font-display font-medium text-primary group-hover:text-accent transition-colors">{faq.q}</span>
                  {openFaq === i ? <Minus className="text-accent w-5 h-5 flex-shrink-0" /> : <Plus className="text-primary/40 w-5 h-5 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm md:text-base text-secondary leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT & LOCATION */}
    <section className="mx-0 md:mx-8 mb-20 md:mb-24">
  <div className="bg-[#1a1a1a] rounded-none md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-[600px] relative border border-white/5">
    
    {/* Left Content Side */}
    <div className="p-8 md:p-16 lg:p-20 lg:w-1/2 flex flex-col justify-center relative z-10">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="w-8 h-[1px] bg-[#8B6A2E]" />
        <span className="text-[#8B6A2E] font-display text-[10px] uppercase tracking-[0.5em] font-bold">Visit Us</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-8 md:mb-10 tracking-tighter leading-tight">
        Buford <br className="hidden sm:block"/>
        <span className="text-[#8B6A2E] font-light">Sanctuary.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {/* Location Block */}
        <div className="group">
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8B6A2E] group-hover:bg-[#8B6A2E] group-hover:text-white transition-all duration-500">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="text-white font-display text-base md:text-lg">Location</h4>
          </div>
          <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-[200px]">
            115 E. Main Street, Suite 13H,<br /> Buford, Georgia 30518
          </p>
        </div>

        {/* Hours Block */}
        <div className="group">
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8B6A2E] group-hover:bg-[#8B6A2E] group-hover:text-white transition-all duration-500">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-white font-display text-base md:text-lg">Tour Hours</h4>
          </div>
          <p className="text-white/50 text-xs md:text-sm leading-relaxed">
            Mon — Sat<br />
            <span className="text-white">9:00 AM — 6:00 PM</span>
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
        <Link 
          href="tel:6789686164" 
          className="group flex items-center gap-4 md:gap-5 text-white hover:text-[#8B6A2E] transition-colors"
        >
          <div className="flex flex-col">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#8B6A2E] font-bold mb-1">Direct Line</span>
            <span className="text-2xl md:text-3xl font-display tracking-tighter">(678) 968-6164</span>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8B6A2E] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#8B6A2E]/20 flex-shrink-0">
            <ArrowRight className="text-white w-5 h-5" />
          </div>
        </Link>
      </div>
    </div>

    {/* Right Image Side - Now with Architectural Framing */}
    <div className="lg:w-1/2 relative min-h-[350px] md:min-h-[450px] p-4 md:p-8 lg:p-10">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1611444993136-ba1fc91f6402?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Facility Exterior" 
          fill 
          className="object-cover transition-transform duration-[2s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent pointer-events-none" />
        
        {/* Floating Quote Badge */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl">
            <div className="flex gap-1 mb-2 md:mb-3">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#8B6A2E] text-[#8B6A2E]" />)}
            </div>
            <p className="text-white font-display text-sm md:text-lg leading-snug">
              A quiet retreat just minutes from the VA clinic, designed for peace and brotherhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
