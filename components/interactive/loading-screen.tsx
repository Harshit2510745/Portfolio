"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const ticker = window.setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 4 : prev));
    }, 120);
    return () => {
      clearTimeout(timer);
      window.clearInterval(ticker);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] text-white"
        >
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(220,38,38,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220,38,38,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />

          {/* Glitch Text — HARSHIT // DEV */}
          <div className="relative overflow-hidden z-10">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-7xl font-black italic uppercase tracking-tight"
            >
              <span className="text-salmon">HARSHIT</span>{" "}
              <span className="text-white/30">{'//'}</span>{" "}
              <span className="text-white">DEV</span>
            </motion.h1>
            {/* Red Glitch Layer */}
            <motion.h1
              animate={{ x: [-2, 2, -1, 0], opacity: [0, 0.8, 0, 0.5] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
              className="absolute inset-0 font-display text-4xl md:text-7xl font-black italic uppercase tracking-tight text-spider mix-blend-screen"
            >
              {'HARSHIT // DEV'}
            </motion.h1>
          </div>

          {/* Loading bars */}
          <div className="mt-10 grid w-64 gap-2 z-10">
            {[0, 1, 2].map((idx) => (
              <motion.div
                key={idx}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0.2] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.2 }}
                className="h-[2px] origin-left bg-gradient-to-r from-spider to-lime"
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 h-[2px] w-64 overflow-hidden bg-white/10 relative z-10">
            <motion.div
              initial={{ inlineSize: "0%" }}
              animate={{ inlineSize: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 bg-spider"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/40 z-10"
          >
            DIMENSION_SYNC: {progress}% {'// EARTH-1610'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
