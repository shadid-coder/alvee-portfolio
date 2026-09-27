"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/data/portfolio";

export default function TimelineItem({
  item,
  isLast,
}: {
  item: ExperienceItem;
  isLast?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-gold-400 bg-ink-950" />
      {!isLast && (
        <span className="absolute left-[5px] top-5 h-full w-px bg-white/10" />
      )}

      <p className="text-sm text-slate-500">
        {item.startDate} — {item.endDate}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ivory">{item.role}</h3>
      <p className="text-sm text-gold-400">
        {item.company}
        {item.location ? ` · ${item.location}` : ""}
      </p>

      <ul className="mt-3 space-y-1.5">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-400" />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
