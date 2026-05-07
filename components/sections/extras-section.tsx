"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";

export function AchievementsSection() {
  const [counts, setCounts] = useState(() => achievements.map(() => 0));

  useEffect(() => {
    const id = window.setInterval(() => {
      setCounts((prev) => {
        const next = prev.map((value, idx) =>
          value < achievements[idx].metric ? value + 1 : value
        );
        if (next.every((value, idx) => value >= achievements[idx].metric)) {
          window.clearInterval(id);
        }
        return next;
      });
    }, 120);
    return () => window.clearInterval(id);
  }, []);

  const colors = ["spider", "lime", "salmon"] as const;
  const colorMap = {
    spider: { text: "text-spider", border: "border-spider/30", bg: "bg-spider/10" },
    lime: { text: "text-lime", border: "border-lime/30", bg: "bg-lime/10" },
    salmon: { text: "text-salmon", border: "border-salmon/30", bg: "bg-salmon/10" },
  };

  return (
    <section id="achievements" className="py-20 relative px-6">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-spider/30 bg-spider/10 px-4 py-2 mb-6"
          >
            <span className="text-spider text-xs">🏆</span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-spider">
              COMBAT_LOG
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-black italic uppercase tracking-tight text-white md:text-5xl"
          >
            BATTLE <span className="text-white/30">{'//'}</span>{" "}
            <span className="text-spider">HONORS</span>
          </motion.h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((item, index) => {
            const c = colorMap[colors[index % colors.length]];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`group border border-white/8 bg-[#0A0A0A] p-8 transition-all duration-500 hover:${c.border}`}
              >
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center border-2 ${c.border} ${c.bg}`}>
                  <span className={`text-2xl font-black ${c.text}`}>
                    {counts[index]}
                  </span>
                </div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">
                  {item.label}
                </p>
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-white/85">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
