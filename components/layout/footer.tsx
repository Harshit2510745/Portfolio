import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8 relative px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40 relative z-10">
        {/* Logo */}
        <p className="font-display text-base font-black italic tracking-tight">
          <span className="text-salmon">HARSHIT</span>{" "}
          <span className="text-white/30">{'//'}</span>{" "}
          <span className="text-white/60">DEV</span>
        </p>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors cursor-pointer">
            Systems
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors cursor-pointer">
            Encryption
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/25 hover:text-white/50 transition-colors cursor-pointer">
            Terminal
          </span>
        </div>

        {/* Copyright + Social */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-spider/80 tracking-[0.1em]">
            &copy; {new Date().getFullYear()} {'// EARTH-1610 PROTOCOL'}
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Harshit2510745"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-white/8 text-white/30 hover:text-spider hover:border-spider/30 transition-all"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/harshit-aggarwal-2a9044382"
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-white/8 text-white/30 hover:text-spider hover:border-spider/30 transition-all"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
