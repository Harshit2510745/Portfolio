import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0A",
        spider: "#DC2626",
        "spider-dark": "#991B1B",
        electric: "#1D4ED8",
        lime: "#CDFF00",
        "lime-dark": "#A3CC00",
        salmon: "#FFB4A2",
        "morales-pink": "#FF6B9D",
        "morales-red": "#FF1744",
        "grid-line": "rgba(255,255,255,0.06)"
      },
      boxShadow: {
        neon: "0 0 24px rgba(29, 78, 216, 0.35)",
        redneon: "0 0 28px rgba(220, 38, 38, 0.4)",
        limeneon: "0 0 20px rgba(205, 255, 0, 0.3)",
        glass: "0 12px 42px rgba(0, 0, 0, 0.42)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        glitchShift: "glitchShift 4s ease-in-out infinite",
        gridPulse: "gridPulse 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(220,38,38,0)" },
          "50%": { boxShadow: "0 0 30px rgba(220,38,38,0.4)" }
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" }
        },
        glitchShift: {
          "0%, 90%, 100%": { transform: "translate(0,0) skewX(0)" },
          "92%": { transform: "translate(-3px, 1px) skewX(-1deg)" },
          "94%": { transform: "translate(2px, -1px) skewX(0.5deg)" },
          "96%": { transform: "translate(-1px, 0) skewX(-0.5deg)" },
          "98%": { transform: "translate(0, 0) skewX(0)" }
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.04" },
          "50%": { opacity: "0.08" }
        }
      },
      backgroundImage: {
        "web-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "hero-gradient":
          "radial-gradient(80% 80% at 50% 20%, rgba(220,38,38,0.12), rgba(10,10,10,0.95)), linear-gradient(135deg, rgba(220,38,38,0.06), rgba(205,255,0,0.04))"
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jet)", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
