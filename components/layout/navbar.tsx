"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  ["ORIGIN", "#home"],
  ["ARCHIVE", "#projects"],
  ["INTEL", "#skills"],
  ["SIGNAL", "#contact"]
];

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sectionIds = ["contact", "skills", "projects", "home"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 250) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex w-full items-center justify-between px-6 py-4 transition-all duration-500 border-b ${
          scrolled
            ? "border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 flex items-center justify-center border border-spider/60">
            <motion.div
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-spider/30 m-[2px]"
            />
            <span className="text-spider text-xs font-bold">⚡</span>
          </div>
          <span className="font-display text-lg font-black italic tracking-tight text-white">
            HARSHIT <span className="text-white/40">{'//'}</span>{" "}
            <span className="text-salmon">DEV</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className={`relative px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                active === href
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {label}
              {active === href && (
                <motion.div
                  layoutId="moralesNav"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-spider"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* COLLAB Button */}
        <Link
          href="#contact"
          className="hidden md:block bg-spider px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white border border-spider transition-all duration-300 hover:bg-spider/80 hover:shadow-redneon"
        >
          COLLAB
        </Link>
      </div>
    </motion.header>
  );
}
