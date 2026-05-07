import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
