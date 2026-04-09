"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 px-4 md:px-8 pb-12 bg-[#fdfcfb]">
      <div className="max-w-[90rem] mx-auto bg-[#1a1a1a] rounded-[3rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl border border-white/5">
        
        {/* Hardware-Grade Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
        />
        
        <div className="relative z-10 px-8 py-20 md:p-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
            
            {/* Brand & Mission */}
            <div className="sm:col-span-2 lg:col-span-5">
              <Link href="/" className="inline-flex items-center gap-4 mb-8 md:mb-10 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#9A7A3C] flex items-center justify-center text-white shadow-xl group-hover:rotate-[10deg] transition-all duration-500">
                  <span className="font-display font-bold text-2xl md:text-3xl leading-none">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl md:text-3xl tracking-tighter text-white uppercase">
                    ATM Pro
                  </span>
                  <span className="text-[#9A7A3C] text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase">Veteran Sanctuary</span>
                </div>
              </Link>

              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md mb-8 md:mb-10 font-medium">
                Redefining assisted living through the lens of architectural precision and medical excellence for our disabled veterans.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 md:px-5 py-2 md:py-2.5 rounded-xl">
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#8B6A2E]" />
                  <span className="text-[8px] md:text-[10px] font-black text-white/80 tracking-widest uppercase">ADA Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 md:px-5 py-2 md:py-2.5 rounded-xl">
                  <Award className="w-3 h-3 md:w-4 md:h-4 text-[#8B6A2E]" />
                  <span className="text-[8px] md:text-[10px] font-black text-white/80 tracking-widest uppercase">Tier 1 Clinical</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1 lg:col-span-3 lg:ml-auto">
              <h4 className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-[#8B6A2E] uppercase mb-8 md:mb-10">Navigation</h4>
              <ul className="space-y-4 md:space-y-5">
                {["Home", "About", "Services", "Admissions", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                      className="text-white/60 hover:text-white transition-all text-xs md:text-sm flex items-center gap-3 group font-bold uppercase tracking-widest"
                    >
                      <span className="w-0 h-[1px] bg-[#8B6A2E] group-hover:w-4 transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-1 lg:col-span-4 lg:ml-auto">
              <h4 className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-[#8B6A2E] uppercase mb-8 md:mb-10">Headquarters</h4>
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#8B6A2E]/50 transition-colors">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#8B6A2E]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed font-medium">
                      115 E. Main Street, Suite 13H<br/>Buford, Georgia 30518
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#8B6A2E]/50 transition-colors">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#8B6A2E]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">Direct Line</p>
                    <a href="tel:6789686164" className="text-white text-lg md:text-xl font-display tracking-tight hover:text-[#8B6A2E] transition-colors">
                      (678) 968-6164
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#8B6A2E]/50 transition-colors">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#8B6A2E]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@atmprollc.com" className="text-white/80 text-xs md:text-sm font-medium hover:text-[#8B6A2E] transition-colors">
                      info@atmprollc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>&copy; {currentYear} ATM Pro LLC. Built for Excellence.</p>
            
            <div className="flex gap-8 mt-8 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
