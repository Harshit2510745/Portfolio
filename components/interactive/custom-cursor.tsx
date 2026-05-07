"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppState } from "@/components/providers/app-state-provider";

export function CustomCursor() {
  const { spiderSense } = useAppState();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const cursorX = useSpring(x, { damping: 25, stiffness: 450 });
  const cursorY = useSpring(y, { damping: 25, stiffness: 450 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer:fine)");
    setEnabled(mq.matches);
    const update = () => setEnabled(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ insetInlineStart: cursorX, insetBlockStart: cursorY }}
        className="pointer-events-none fixed z-[60] -ml-3 -mt-3 h-6 w-6 border border-spider/80"
      >
        <div className="absolute inset-[6px] bg-spider/70" />
      </motion.div>
      <motion.div
        style={{ insetInlineStart: cursorX, insetBlockStart: cursorY }}
        animate={{ scale: spiderSense ? [1, 2.5, 1] : 1, opacity: spiderSense ? [0.4, 0, 0.4] : 0 }}
        transition={{ duration: 0.9, repeat: spiderSense ? Infinity : 0 }}
        className="pointer-events-none fixed z-[59] -ml-6 -mt-6 h-12 w-12 rounded-full border-2 border-spider/50 bg-spider/10"
      />
    </>
  );
}
