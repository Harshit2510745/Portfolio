import { cn } from "@/lib/utils";

export function Tag({ text, className }: { text: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90",
        className
      )}
    >
      {text}
    </span>
  );
}
