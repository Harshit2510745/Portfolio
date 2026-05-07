"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="py-28 relative overflow-hidden px-6">
      <div className="mx-auto max-w-[1400px] relative z-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Left - Origin Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 border border-spider/40 bg-spider/10 px-4 py-2 mb-6">
              <span className="text-spider text-xs">◈</span>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-spider">
                ORIGIN_STORY
              </span>
            </div>

            <h2 className="font-display text-4xl font-black italic uppercase tracking-tight text-white md:text-5xl mb-8">
              Breaking <span className="text-salmon">Frames</span> &{" "}
              <span className="text-lime">Dimensions</span>
            </h2>

            <div className="accent-bar-left space-y-5 text-sm text-white/55 leading-relaxed">
              {profile.summary.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right — System Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="border border-white/8 bg-[#0A0A0A] relative overflow-hidden">
              {/* Top accent bar */}
              <div className="h-[2px] bg-gradient-to-r from-spider via-spider/50 to-transparent" />

              <div className="p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-spider mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 bg-spider animate-pulse" />
                  IDENTITY_CARD
                </p>

                <div className="space-y-2 font-mono text-sm">
                  {[
                    { label: "DESIGNATION", value: profile.name, color: "text-white/80" },
                    { label: "COORDINATES", value: profile.location, color: "text-white/80" },
                    { label: "CLASSIFICATION", value: "FULL_STACK_DEV", color: "text-lime" },
                    { label: "DIMENSION", value: "EARTH-1610", color: "text-spider" },
                    { label: "STATUS", value: "ACTIVE // BUILDING", color: "text-salmon" }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-white/10"
                    >
                      <span className="text-white/30 text-xs tracking-[0.15em]">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
