"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type Props = Omit<HTMLMotionProps<"button">, "children"> & {
  variant?: Variant;
  magnetic?: boolean;
  children?: ReactNode;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-spider text-white shadow-redneon hover:brightness-110 border border-spider/70",
  secondary:
    "bg-electric text-white shadow-neon hover:brightness-110 border border-electric/70",
  ghost:
    "border border-white/25 text-white hover:bg-white/10"
};

export function Button({
  className,
  variant = "primary",
  magnetic = true,
  onMouseMove,
  onMouseLeave,
  ...props
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.04, y: -1 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      onMouseMove={(event) => {
        if (!magnetic) {
          onMouseMove?.(event);
          return;
        }

        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        target.style.transform = `translate(${x}px, ${y}px)`;
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translate(0px, 0px)";
        onMouseLeave?.(event);
      }}
      className={cn(
        "rounded-xl px-6 py-3 font-semibold tracking-wide transition-all duration-300",
        "backdrop-blur-xl",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
