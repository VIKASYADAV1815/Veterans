"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Activity } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const services = [
    {
      title: "Assisted Daily Living",
      subtitle: "Personalized Support",
      description:
        "Compassionate, respectful help with bathing, grooming, dressing, and mobility. We empower residents to maintain as much independence as possible while providing a safety net of 24/7 care.",
      image: "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Bathing & Grooming Support", "Dressing Assistance", "Mobility & Transfers"],
    },
    {
      title: "Health Management",
      subtitle: "Expert Medical Oversight",
      description:
        "RN-supervised care plans, precise medication administration, and seamless coordination with VA hospitals and primary care physicians.",
      image: "https://images.unsplash.com/photo-1769443649955-510e86ca9f75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["RN-Supervised Care", "Medication Administration", "VA Coordination"],
    },
    {
      title: "Physical Accessibility",
      subtitle: "100% ADA Compliant",
      description:
        "A fully ADA-compliant facility designed specifically for disabled veterans. Wide corridors, accessible suites, and roll-in showers.",
      image: "https://images.unsplash.com/photo-1615506313305-e61daaa8cdcb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Roll-in Showers", "Physical Therapy Spaces", "Accessible Suites"],
    },
    {
      title: "Mental Wellness",
      subtitle: "Trauma-Informed Environment",
      description:
        "We understand the unseen wounds of service. Our staff is trained to support residents with PTSD, anxiety, and service-related trauma.",
      image: "https://images.unsplash.com/photo-1620147512372-9e00421556bb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Trauma-Informed Staff", "PTSD & Anxiety Support", "Trigger-Free Environment"],
    },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 md:px-8 mb-24 pt-12">
        <div className="max-w-[90rem] mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-6"
          >
            <Activity className="w-4 h-4" />
            Care & Services
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter font-display font-medium text-primary leading-[1.05]"
          >
            Comprehensive <span className="font-semibold text-primary/80">Support</span><br />
            Tailored for Veterans.
          </motion.h1>
        </div>

        <div className="max-w-[90rem] mx-auto relative h-[55vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-xl">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
            <Image
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dining area"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </section>

      {/* Detailed Care Offerings (Premium Grid/Bento Style) */}
      <section className="px-4 md:px-8 mb-24">
        <div className="max-w-[90rem] mx-auto space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/2 relative h-[380px] md:h-[450px] rounded-3xl overflow-hidden group shadow-lg"
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                
                {/* Floating Glass Element */}
                <div className={`absolute bottom-8 ${index % 2 === 1 ? "left-8" : "right-8"} hidden lg:block z-20`}>
                  <div className="glass-panel p-5 rounded-2xl shadow-lg border-white/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white shadow-sm">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-primary text-sm">Premium Quality</p>
                        <p className="text-xs text-secondary">Verified Care Standard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/2"
              >
                <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="mb-4 text-accent font-semibold tracking-widest uppercase text-xs">
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tighter font-medium text-primary mb-5 leading-[1.1]">
                    {service.title}
                  </h2>
                  <p className="text-base text-secondary leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-primary font-medium text-base">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[90rem] mx-auto glass p-12 md:p-24 rounded-3xl md:rounded-[3rem] text-center relative overflow-hidden shadow-lg border border-white/60"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-primary mb-6 leading-tight">
              Discuss Your <span className="font-semibold opacity-80">Care Needs</span> With Us.
            </h2>
            <p className="text-lg text-secondary mb-10 leading-relaxed">
              Every veteran&apos;s journey is different. Let&apos;s talk about how our community can provide the right level of support for you or your loved one.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-accent hover:shadow-xl transition-all duration-300 items-center justify-center gap-2 group"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
