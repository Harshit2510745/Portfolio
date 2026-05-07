"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAppState } from "@/components/providers/app-state-provider";

export function SpiderSenseOverlay() {
  const { spiderSense } = useAppState();

  return (
    <AnimatePresence>
      {spiderSense && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-[55]"
        >
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,40,40,0.2),transparent_65%)]"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3.2, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.2),transparent_60%)]"
          />
          <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-spider/60 bg-black/70 px-4 py-1 text-xs uppercase tracking-[0.28em] text-spider">
            Spider Sense Mode Activated
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
