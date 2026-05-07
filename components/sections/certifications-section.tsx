"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative px-6">
      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-lime/30 bg-lime/10 px-4 py-2 mb-6"
          >
            <span className="text-lime text-xs">📜</span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
              CREDENTIALS_LOG
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-black italic uppercase tracking-tight text-white md:text-5xl"
          >
            VERIFIED <span className="text-white/30">{'//'}</span>{" "}
            <span className="text-lime">PROTOCOLS</span>
          </motion.h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/8 bg-[#0A0A0A] p-6 transition-all duration-500 hover:border-lime/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 flex items-center justify-center border-2 border-lime/40 bg-lime/10 text-lime text-xs font-mono font-bold">
                  ✓
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
                  CERT_{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-sm font-display font-bold text-white/80 uppercase tracking-tight leading-snug">
                {cert}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
