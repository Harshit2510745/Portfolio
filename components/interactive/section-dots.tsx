"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "ORIGIN" },
  { id: "projects", label: "ARCHIVE" },
  { id: "skills", label: "INTEL" },
  { id: "about", label: "TIMELINE" },
  { id: "contact", label: "SIGNAL" },
];

export function SectionDots() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 300) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-5">
      {/* Vertical line */}
      <div className="absolute inset-y-0 right-1/2 translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-spider/30 to-transparent" />

      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative group flex items-center"
          >
            {/* Label on hover */}
            <span className="absolute right-8 whitespace-nowrap border border-white/10 bg-[#0A0A0A] px-3 py-1 text-[10px] text-white/50 font-mono font-bold tracking-[0.15em] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-10 pointer-events-none uppercase">
              {section.label}
            </span>

            {/* Dot — square for Miles Morales theme */}
            <motion.div
              className={`relative h-2.5 w-2.5 transition-all duration-300 ${
                isActive
                  ? "bg-spider border border-spider shadow-[0_0_12px_rgba(220,38,38,0.5)]"
                  : "bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/20"
              }`}
              animate={isActive ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </a>
        );
      })}
    </div>
  );
}
