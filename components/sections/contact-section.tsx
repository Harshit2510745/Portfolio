"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          {/* Left — Signal Header */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl font-black italic uppercase tracking-tight text-white md:text-7xl"
            >
              <span className="text-salmon">SIGNAL</span>{" "}
              <span className="text-white/30">{'//'}</span>{" "}
              <span className="text-white">INTERCEPT</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 accent-bar-left text-white/45 text-sm leading-relaxed max-w-md"
            >
              Establish secure connection. Transmit data packets directly to the central node.
              Expected response time: Unknown.
            </motion.p>

            {/* Decorative corner frame */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 relative w-48 h-48 hidden md:block"
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-spider" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lime" />
              
              {/* Inner pattern */}
              <div className="absolute inset-6" style={{
                backgroundImage: `
                  linear-gradient(rgba(220,38,38,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(220,38,38,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '12px 12px'
              }} />
            </motion.div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* IDENTIFIER [NAME] */}
              <div>
                <label className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-spider mb-3 block">
                  IDENTIFIER [NAME]
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your designation..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-spider transition-colors font-mono"
                />
              </div>

              {/* COMM_LINK [EMAIL] */}
              <div>
                <label className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-spider mb-3 block">
                  COMM_LINK [EMAIL]
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Secure frequency..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-spider transition-colors font-mono"
                />
              </div>

              {/* PAYLOAD [MESSAGE] */}
              <div>
                <label className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-spider mb-3 block">
                  PAYLOAD [MESSAGE]
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Input data stream..."
                  className="w-full bg-white/[0.02] border border-white/10 p-4 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-spider transition-colors font-mono resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`px-12 py-4 font-mono text-sm font-black italic uppercase tracking-[0.15em] transition-all duration-300 ${
                    submitted
                      ? "bg-lime text-[#0A0A0A] border border-lime"
                      : "bg-spider text-white border border-spider hover:shadow-redneon hover:bg-spider/80"
                  }`}
                >
                  {submitted ? "✓ SIGNAL TRANSMITTED" : "TRANSMIT SIGNAL"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
