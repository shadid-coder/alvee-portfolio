"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import type { Highlight } from "@/data/portfolio";

export default function StatCard({ stat }: { stat: Highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col items-center justify-center p-6 text-center">
        <p className="font-display text-3xl font-semibold text-gold-400">
          {stat.value}
        </p>
        <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
      </Card>
    </motion.div>
  );
}