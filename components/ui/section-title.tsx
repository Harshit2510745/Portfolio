import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-400 font-mono">
        <span className="h-[2px] w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm text-white/50 md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
