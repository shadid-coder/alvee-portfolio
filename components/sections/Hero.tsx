"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Send, MapPin } from "lucide-react";
import AvatarImage from "@/components/ui/AvatarImage";
import { personalInfo, contactLinks } from "@/data/portfolio";
import { iconMap } from "@/lib/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pt-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr]"
      >
        {/* Text column — order-2 on mobile (below avatar), order-1 on desktop (left) */}
        <motion.div
          variants={item}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <h1 className="font-display text-4xl font-semibold leading-tight text-ivory md:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gold-400 md:text-base">
            {personalInfo.tagline}
          </p>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-400 md:justify-start">
            <MapPin size={14} /> {personalInfo.location}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-slate-400 md:mx-0">
            Banking professional with 6+ years across customer service,
            operations, and business development — currently at Bank Asia PLC,Kutubzom DPO Agent Banking Outlet .
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Get in touch <Send size={15} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-gold-400/40 hover:text-gold-400"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 md:justify-start">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-400 transition-colors hover:text-gold-400"
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Avatar column — order-1 on mobile (top), order-2 on desktop (right) */}
        <motion.div
          variants={item}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold-400/20 blur-3xl" />
            <AvatarImage
              src={personalInfo.avatarUrl}
              name={personalInfo.name}
              size={isMobile ? 240 : 360}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}