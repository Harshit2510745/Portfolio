"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, roles } from "@/data/portfolio";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Role rotation
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  // Typing effect
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const role = roles[roleIndex];
    const id = setInterval(() => {
      if (i <= role.length) {
        setDisplayedText(role.slice(0, i));
        i++;
      } else {
        clearInterval(id);
      }
    }, 55);
    return () => clearInterval(id);
  }, [roleIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {[300, 450, 600, 750].map((size, i) => (
            <motion.div
              key={size}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 1 }}
              className="absolute rounded-full border"
              style={{
                width: size,
                height: size,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`,
                borderColor: `rgba(220, 38, 38, ${0.12 - i * 0.02})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Red scanline glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-spider/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-spider/20 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Left Content */}
        <div>
          {/* Protocol Active Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 border border-lime/40 bg-lime px-4 py-1.5"
          >
            <span className="text-[#0A0A0A] text-xs">⚡</span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0A0A0A]">
              Protocol Active
            </span>
          </motion.div>

          {/* Name — Brutalist Bold Italic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <h1 className="font-display text-6xl font-black italic leading-[0.95] text-white uppercase md:text-8xl lg:text-[120px] tracking-tight">
              <span className="relative inline-block">
                <span className="text-salmon">{profile.name.split(" ")[0]}</span>
                {/* Glitch layers */}
                <span className="absolute inset-0 text-spider opacity-0 animate-[glitch-1_4s_infinite]" aria-hidden="true">
                  {profile.name.split(" ")[0]}
                </span>
              </span>
              <br />
              <span className="text-white/30">{'// '}</span>
              <span className="text-white">{profile.name.split(" ").slice(1).join(" ").toUpperCase()}</span>
            </h1>
          </motion.div>

          {/* Description with red accent bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 accent-bar-left max-w-xl"
          >
            <p className="text-base text-white/60 leading-relaxed md:text-lg">
              {profile.heroDescription}
            </p>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 font-mono text-sm text-white/40 uppercase tracking-[0.15em]"
          >
            &gt; MODE: <span className="text-lime">{displayedText}</span>
            <span className="animate-pulse text-spider">█</span>
          </motion.div>

          {/* CTA Buttons — Brutalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="#projects">
              <button className="group bg-lime px-8 py-4 font-mono text-sm font-black uppercase tracking-[0.15em] text-[#0A0A0A] transition-all duration-300 hover:shadow-limeneon hover:bg-lime-dark flex items-center gap-3">
                Launch Protocol
                <span className="transition-transform group-hover:translate-x-1">🔗</span>
              </button>
            </Link>
            <Link href="#projects">
              <button className="border border-white/20 px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white flex items-center gap-3">
                View Archive
                <span>📁</span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right — Spider-Verse Visual Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden md:block"
        >
          {/* Multi-layered frame effect */}
          <div className="relative">
            {/* Yellow outer frame */}
            <div className="absolute -inset-3 border border-lime/30" />
            {/* Red inner frame */}
            <div className="absolute -inset-0 border-2 border-spider/60" />
            
            {/* Content area — circuit board pattern */}
            <div className="relative bg-[#0A0A0A] aspect-square overflow-hidden">
              {/* Grid overlay inside frame */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(220,38,38,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(220,38,38,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }} />
              
              {/* Circuit paths */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                <path d="M200 0 L200 150 L300 150 L300 250 L200 250 L200 400" fill="none" stroke="#DC2626" strokeWidth="1" />
                <path d="M0 200 L100 200 L100 100 L250 100" fill="none" stroke="#DC2626" strokeWidth="1" />
                <path d="M150 300 L300 300 L300 350 L400 350" fill="none" stroke="#CDFF00" strokeWidth="0.5" />
                <circle cx="200" cy="150" r="4" fill="#DC2626" />
                <circle cx="300" cy="250" r="4" fill="#DC2626" />
                <circle cx="100" cy="200" r="3" fill="#CDFF00" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(220,38,38,0.1)" strokeWidth="1" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(220,38,38,0.06)" strokeWidth="1" />
              </svg>

              {/* Spider emblem center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    🕷️
                  </motion.div>
                  <p className="font-mono text-xs text-spider/50 uppercase tracking-[0.4em]">
                    Earth-1610
                  </p>
                </div>
              </div>

              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </div>
          </div>

          {/* Corner markers */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-lime" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-lime" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-spider" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-spider" />
        </motion.div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
