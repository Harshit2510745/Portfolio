"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/portfolio";

const timelineIcons: Record<string, string> = {
  "2023": "⚡",
  "2024": "🔗",
  "2025": "🕷️",
  "2026": "🚀"
};

export function ExperienceSection() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="relative mb-20 border border-white/5 p-8 md:p-12 bg-[rgba(10,10,10,0.6)]">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-salmon" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-black italic uppercase tracking-tight text-white md:text-6xl"
          >
            ORIGIN <span className="text-white/30">{'//'}</span>{" "}
            <span className="text-salmon">TIMELINE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 text-base max-w-2xl"
          >
            Dimensional coordinates of key events across the multiverse timeline. Each node marks a critical transformation.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 hidden md:block bg-gradient-to-b from-spider via-white/15 to-spider/20" />

          <div className="space-y-16">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const icon = timelineIcons[item.year] || "◆";

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Desktop layout */}
                  <div className={`hidden md:grid grid-cols-[1fr_60px_1fr] items-center gap-4`}>
                    {/* Left content or spacer */}
                    <div className={isLeft ? "" : "order-3"}>
                      <div className={`border border-white/8 bg-[#0A0A0A] p-8 transition-all duration-500 hover:border-spider/30 ${isLeft ? "text-right" : ""}`}>
                        {/* Year badge */}
                        <span className="font-mono text-sm font-bold text-spider tracking-[0.1em]">
                          {item.year}
                        </span>
                        
                        <h3 className="font-display text-xl font-black uppercase tracking-tight text-white mt-2">
                          {item.title}
                        </h3>
                        
                        <p className="mt-3 text-sm text-white/45 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className={`mt-5 flex flex-wrap gap-2 ${isLeft ? "justify-end" : ""}`}>
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 border border-white/10 text-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="flex items-center justify-center order-2">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="relative z-10 h-12 w-12 flex items-center justify-center border-2 border-spider bg-[#0A0A0A]"
                      >
                        <span className="text-lg">{icon}</span>
                      </motion.div>
                    </div>

                    {/* Right content or spacer */}
                    <div className={isLeft ? "order-3" : ""} />
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden border border-white/8 bg-[#0A0A0A] p-6 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-spider" />
                    <span className="font-mono text-sm font-bold text-spider tracking-[0.1em]">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-black uppercase tracking-tight text-white mt-2">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/45 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 border border-white/10 text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
