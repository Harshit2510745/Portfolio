"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      {children}
    </motion.main>
  );
}
