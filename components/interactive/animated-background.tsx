"use client";

import { memo } from "react";

export const AnimatedBackground = memo(function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[#0a0f1c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(214,40,40,0.15),rgba(10,15,28,1)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.2),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(5,5,5,0.95),transparent)]" />
      
      {/* CSS-based subtle glowing particles instead of heavy Framer Motion particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 animate-pulseGlow" />

      {/* Rain streaks */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_35%,transparent_65%,rgba(255,255,255,0.08)_100%)] opacity-20 bg-[length:240px_240px] animate-rain" />

      {/* Fog */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] opacity-30 blur-3xl" />

      {/* Web-inspired graphic */}
      <svg
        className="absolute inset-0 h-full w-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="webline" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D62828" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Web center at top center */}
        <g stroke="url(#webline)" strokeWidth="1" fill="none">
          {/* Radial Lines */}
          <path d="M50% 10% L0% 100%" />
          <path d="M50% 10% L20% 100%" />
          <path d="M50% 10% L40% 100%" />
          <path d="M50% 10% L60% 100%" />
          <path d="M50% 10% L80% 100%" />
          <path d="M50% 10% L100% 100%" />
          <path d="M50% 10% L0% 60%" />
          <path d="M50% 10% L100% 60%" />
          
          {/* Connecting Web Rings */}
          <path d="M10% 40% Q 30% 30% 50% 35% Q 70% 30% 90% 40%" />
          <path d="M0% 60% Q 25% 50% 50% 60% Q 75% 50% 100% 60%" />
          <path d="M15% 85% Q 35% 75% 50% 80% Q 65% 75% 85% 85%" />
        </g>
      </svg>
    </div>
  );
});
