import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-void p-6 text-center">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0_2px,transparent_2px_4px)] opacity-20" />
      <div className="relative z-10 max-w-xl rounded-2xl border border-white/15 bg-black/60 p-10 backdrop-blur-xl">
        <p className="font-mono text-sm uppercase tracking-[0.35em] text-spider">404 Signal Lost</p>
        <h1 className="mt-3 font-display text-5xl text-white">Page Glitched Out</h1>
        <p className="mt-4 text-white/75">
          The route you requested is outside the current city grid.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl border border-electric/50 bg-electric/20 px-5 py-3 text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
