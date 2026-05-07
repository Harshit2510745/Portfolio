"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

const filterCategories = ["ALL_DATA", "FRONTEND", "FULL_STACK", "BACKEND"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("ALL_DATA");

  const filtered =
    activeFilter === "ALL_DATA"
      ? projects
      : projects.filter((p) =>
          p.tech.some((t) =>
            activeFilter === "FRONTEND"
              ? ["React.js", "Next.js", "React", "CSS", "Tailwind CSS", "Responsive UI"].includes(t)
              : activeFilter === "FULL_STACK"
              ? ["Node.js", "MongoDB", "Socket.io", "Express", "MySQL"].includes(t)
              : ["JavaScript", "REST APIs", "Firebase"].includes(t)
          )
        );

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="relative mb-16 border border-white/5 p-8 md:p-12 bg-[rgba(10,10,10,0.6)]">
          {/* Red accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-spider" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-black italic uppercase tracking-tight text-white md:text-6xl"
          >
            DATABASE <span className="text-white/30">{'//'}</span>{" "}
            <span className="text-salmon">ARCHIVE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 text-base max-w-2xl"
          >
            Accessing restricted files. High-fidelity visual records of past projects and structural experiments. Decryption complete.
          </motion.p>
        </div>

        {/* QUERY_PARAMS Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-center gap-3"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            QUERY_PARAMS:
          </span>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs font-bold uppercase tracking-[0.1em] px-4 py-1.5 border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-lime text-[#0A0A0A] border-lime"
                  : "bg-transparent text-white/70 border-white/20 hover:border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {(filtered.length ? filtered : projects).map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="group relative border border-white/8 bg-[#0A0A0A] transition-all duration-500 hover:border-spider/40"
              >
                {/* Project Image Area */}
                <div className="relative h-48 overflow-hidden bg-[#111111] border-b border-white/5">
                  {/* Grid pattern inside */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                  
                  {/* Red accent border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-spider/30 transition-all duration-500 z-10" />
                  
                  {/* Project number */}
                  <div className="absolute top-4 right-4 font-mono text-[60px] font-black text-white/5 leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Status indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <div className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-lime/80">
                      Active
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-white group-hover:text-salmon transition-colors duration-300">
                    {proj.title.replace(/\s+/g, "_").toUpperCase()}
                  </h3>
                  <p className="mt-3 text-sm text-white/45 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.tech.slice(0, 3).map((tech, tIdx) => {
                      const isHighlighted = tIdx === 0;
                      return (
                        <span
                          key={tech}
                          className={`font-mono text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 border ${
                            isHighlighted
                              ? "border-spider bg-spider/10 text-spider"
                              : "border-white/15 text-white/50"
                          }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-5 border-t border-white/5 pt-4">
                    {proj.live && proj.live !== "#" && proj.live !== "https://example.com" && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-spider transition-colors hover:text-morales-pink"
                      >
                        <ExternalLink size={12} />
                        Deploy
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-white/70"
                      >
                        <Github size={12} />
                        Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-spider group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
