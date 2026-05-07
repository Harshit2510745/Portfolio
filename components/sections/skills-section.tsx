"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";

const categoryMeta: Record<string, { label: string; color: string }> = {
  Frontend: { label: "RENDER_ENGINE", color: "#DC2626" },
  Backend: { label: "SERVER_NODE", color: "#CDFF00" },
  Tools: { label: "UTILITY_BELT", color: "#FFB4A2" },
  "Core Expertise": { label: "CORE_PROTOCOLS", color: "#FF6B9D" }
};

export function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="relative mb-16 border border-white/5 p-8 md:p-12 bg-[rgba(10,10,10,0.6)]">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-lime" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-black italic uppercase tracking-tight text-white md:text-6xl"
          >
            SYSTEM <span className="text-white/30">{'//'}</span>{" "}
            <span className="text-lime">INTEL</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 text-base max-w-2xl"
          >
            Dimensional analysis of acquired skill modules. All systems operational across multiple tech paradigms.
          </motion.p>
        </div>

        {/* Category Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((cat, idx) => {
            const meta = categoryMeta[cat.name] || { label: cat.name.toUpperCase(), color: "#DC2626" };
            const isExpanded = expandedCategory === cat.name;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-white/8 bg-[#0A0A0A] transition-all duration-500 hover:border-white/15"
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : cat.name)}
                  className="flex w-full items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-3 h-3 border-2"
                      style={{ borderColor: meta.color, background: isExpanded ? meta.color : "transparent" }}
                    />
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] block" style={{ color: meta.color }}>
                        {meta.label}
                      </span>
                      <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em]">
                        {cat.items.length} modules loaded
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/20">
                      [{isExpanded ? "−" : "+"}]
                    </span>
                  </div>
                </button>

                {/* Expanded Skills */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-6 flex flex-wrap gap-2">
                        {cat.items.map((skillName, sIdx) => (
                          <motion.div
                            key={skillName}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: sIdx * 0.04 }}
                          >
                            <div
                              className="font-mono text-xs font-bold uppercase tracking-[0.1em] px-4 py-2 border transition-all duration-300 hover:scale-105"
                              style={{
                                borderColor: `${meta.color}40`,
                                color: meta.color,
                                background: `${meta.color}08`
                              }}
                            >
                              {skillName}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 border border-white/5 p-6 flex flex-wrap gap-8 items-center justify-between bg-[#0A0A0A]"
        >
          <div className="font-mono text-xs text-white/30 uppercase tracking-[0.2em]">
            TOTAL_MODULES: <span className="text-lime font-bold">{skills.reduce((sum, c) => sum + c.items.length, 0)}</span>
          </div>
          <div className="font-mono text-xs text-white/30 uppercase tracking-[0.2em]">
            CATEGORIES: <span className="text-spider font-bold">{skills.length}</span>
          </div>
          <div className="font-mono text-xs text-white/30 uppercase tracking-[0.2em]">
            STATUS: <span className="text-lime font-bold">ALL SYSTEMS GO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
