"use client";

import { useEffect, useState } from "react";

const nodes = [
  { left: "12%", top: "24%", delay: "0s" },
  { left: "26%", top: "68%", delay: "1.2s" },
  { left: "74%", top: "22%", delay: "0.7s" },
  { left: "87%", top: "64%", delay: "1.8s" },
  { left: "61%", top: "78%", delay: "2.4s" },
  { left: "40%", top: "18%", delay: "1.5s" },
];

export function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Engineering grid */}
      <div className="hero-grid absolute inset-0 opacity-[0.055] dark:opacity-[0.08]" />

      {/* Main ambient glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FDAD04]/10 blur-[140px] dark:bg-[#FDAD04]/12" />

      {/* Secondary glow */}
      <div className="absolute -right-32 top-1/4 h-[350px] w-[350px] rounded-full bg-[#FDAD04]/5 blur-[120px]" />

      {/* Technical connection lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20 dark:opacity-30"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <path
          d="M80 170 L260 310 L430 190 L620 330 L820 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-[#FDAD04]"
        />

        <path
          d="M180 570 L360 420 L520 520 L700 390 L920 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-muted-foreground"
        />

        <path
          d="M430 190 L520 520"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="4 8"
          className="text-[#FDAD04]"
        />
      </svg>

      {/* Animated nodes */}
      {nodes.map((node, index) => (
        <span
          key={index}
          className="absolute size-1 rounded-full bg-[#FDAD04] shadow-[0_0_12px_rgba(253,173,4,0.8)] animate-pulse"
          style={{
            left: node.left,
            top: node.top,
            animationDelay: node.delay,
          }}
        />
      ))}

      {/* Moving scan line */}
      <div className="hero-scan absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FDAD04]/30 to-transparent" />

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_100%)]" />
    </div>
  );
}