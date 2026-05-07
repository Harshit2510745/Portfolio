"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center"
        >
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.0, 0.01, 0.0, 1.0] }}
            role="dialog"
            aria-modal="true"
            className="relative mx-4 w-[min(1100px,96vw)] rounded-3xl bg-black/70 p-6 shadow-neon backdrop-blur-2xl border border-white/10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/3 mix-blend-overlay" />

            <button
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
            >
              Close
            </button>

            <div className="max-h-[80vh] overflow-auto">{children}</div>
          </motion.div>

          <div className="fixed inset-0 bg-black/64" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
