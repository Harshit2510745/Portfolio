"use client";

import { skills } from "@/data/portfolio";

export function SkillRadar() {
  const category = skills[0].items;
  const values = category.map((_, idx) => 70 + (idx % 4) * 7);
  const size = 220;
  const center = size / 2;
  const radius = 80;

  const points = category
    .map((item, idx) => {
      const angle = (Math.PI * 2 * idx) / category.length - Math.PI / 2;
      const pointRadius = (values[idx] / 100) * radius;
      const x = center + Math.cos(angle) * pointRadius;
      const y = center + Math.sin(angle) * pointRadius;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="mb-2 text-sm text-white/70">Frontend Radar</p>
      <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto h-[220px] w-[220px]">
        <circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(255,255,255,0.2)" />
        <circle cx={center} cy={center} r={radius * 0.66} fill="none" stroke="rgba(255,255,255,0.15)" />
        <circle cx={center} cy={center} r={radius * 0.33} fill="none" stroke="rgba(255,255,255,0.1)" />
        <polygon points={points} fill="rgba(29,78,216,0.35)" stroke="#1D4ED8" strokeWidth="2" />
      </svg>
    </div>
  );
}
