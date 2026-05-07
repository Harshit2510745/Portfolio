export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void">
      <div className="text-center">
        <svg
          viewBox="0 0 120 120"
          className="mx-auto mb-4 h-24 w-24 animate-pulse"
          aria-hidden
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />
          <path
            d="M20 70 L60 20 L100 70 L60 100 Z"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="2"
          />
          <path d="M35 65 L85 65" fill="none" stroke="#D62828" strokeWidth="2" />
        </svg>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/70">
          Building the web...
        </p>
      </div>
    </div>
  );
}
