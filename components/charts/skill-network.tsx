"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 20, y: 30, name: "React" },
  { x: 50, y: 18, name: "Next.js" },
  { x: 75, y: 35, name: "TypeScript" },
  { x: 32, y: 65, name: "Node" },
  { x: 64, y: 72, name: "AI" }
];

const links = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [2, 4]
];

export function SkillNetwork() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="mb-3 text-sm text-white/70">Skill Network</p>
      <svg viewBox="0 0 100 100" className="h-56 w-full">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.8"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={n.name}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={3.4}
              fill={i % 2 ? "#1D4ED8" : "#D62828"}
              animate={{ r: [3.4, 4.2, 3.4] }}
              transition={{ duration: 2 + i * 0.4, repeat: Infinity }}
            />
            <text x={n.x + 4} y={n.y - 3} fill="white" fontSize="3">
              {n.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
