"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Admissions", href: "/admissions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 pointer-events-none"
    >
      <div 
        className={`max-w-[90rem] mx-auto rounded-full pointer-events-auto transition-all duration-500 
        ${scrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 px-6 border border-[#1a1a1a]/5" 
          : "bg-transparent py-5 px-8"
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo - Minimalist & Clean */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white shadow-sm group-hover:bg-[#8B6A2E] transition-colors duration-500">
              <span className="font-display font-bold text-xl leading-none">A</span>
            </div>
            <span className="font-display font-black text-xl tracking-tighter text-[#1a1a1a] uppercase">
              ATM Pro
            </span>
          </Link>

          {/* Desktop Nav - High Contrast on Light */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative group
                    ${isActive ? "text-[#8B6A2E]" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]"}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1.5px] rounded-full bg-[#8B6A2E]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA - Soft Gold Accent */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 hover:scale-105 bg-[#8B6A2E] text-white hover:shadow-[0_10px_20px_rgba(139,106,46,0.25)]"
            >
              Book a Tour
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2.5 rounded-full transition-all bg-white shadow-sm border border-[#1a1a1a]/5 text-[#1a1a1a]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Pure Light Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 10 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="absolute top-full left-4 right-4 md:hidden pointer-events-auto"
          >
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#1a1a1a]/5">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl font-display font-bold tracking-tighter transition-colors block
                        ${pathname === link.href ? "text-[#8B6A2E]" : "text-[#1a1a1a] hover:text-[#8B6A2E]"}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-8 border-t border-[#1a1a1a]/5">
                  <Link
                    href="/contact"
                    className="flex items-center justify-between bg-[#1a1a1a] text-white px-8 py-5 rounded-2xl text-lg font-bold w-full active:scale-95 transition-transform"
                  >
                    Book a Tour
                    <ArrowRight className="w-5 h-5 text-[#8B6A2E]" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
