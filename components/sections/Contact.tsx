"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, contactLinks } from "@/data/portfolio";
import { iconMap } from "@/lib/icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // Honeypot: a field real visitors never see or fill, but bots that
  // auto-fill every input on the page will. Not needed for the mailto
  // flow below, but keep this check when a real backend replaces it.
  const [honeypot, setHoneypot] = useState("");

  // No backend wired up — this opens the visitor's email client with the
  // message pre-filled, so it works immediately without any server setup.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // silently drop likely-bot submissions
    const emailLink = contactLinks.find((l) => l.icon === "Mail");
    const to = emailLink ? emailLink.value : "";
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative px-6 py-16 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Get in touch"
          description={`Based in ${personalInfo.location}. Open to new opportunities.`}
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:border-gold-400/30"
                >
                  {Icon && <Icon size={18} className="text-gold-400" />} {link.value}
                </a>
              );
            })}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card relative flex flex-col gap-4 p-6"
          >
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold-400/50 focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold-400/50 focus:outline-none"
            />
            <textarea
              required
              rows={4}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold-400/50 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
            >
              Send message <Send size={15} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
