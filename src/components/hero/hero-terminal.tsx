"use client";

import { useEffect, useState } from "react";

const buildSteps = [
  {
    command: "$ npm run build",
    output: "Building production application...",
  },
  {
    command: "$ next build",
    output: "Compiled successfully",
  },
  {
    command: "$ type-check",
    output: "TypeScript ✓",
  },
  {
    command: "$ deploy",
    output: "Deployment ready ✓",
  },
];

export function HeroTerminal() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((current) => (current + 1) % buildSteps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const currentStep = buildSteps[step];

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Ambient glow */}
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-[#FDAD04]/5 blur-3xl dark:bg-[#FDAD04]/10" />

      {/* Terminal */}
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#080808]/95 dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
        {/* Terminal header */}
        <div className="flex h-11 items-center justify-between border-b border-black/10 bg-black/[0.02] px-4 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-yellow-400/80" />
            <span className="size-2.5 rounded-full bg-green-400/80" />
          </div>

          <div className="font-mono text-[10px] tracking-[0.18em] text-black/35 uppercase dark:text-white/35">
            anku-builds
          </div>

          <div className="w-12" />
        </div>

        {/* Terminal content */}
        <div className="p-5 sm:p-6">
          {/* Path */}
          <div className="mb-6 flex items-center gap-2 font-mono text-xs">
            <span className="text-[#FDAD04]">~/anku-builds</span>
            <span className="text-black/25 dark:text-white/25">/</span>
            <span className="text-black/45 dark:text-white/40">
              production
            </span>
          </div>

          {/* Main command */}
          <div className="min-h-[92px]">
            <div
              key={step}
              className="hero-terminal-line font-mono text-sm leading-7"
            >
              <span className="text-[#FDAD04]">
                {currentStep.command}
              </span>

              <span className="ml-1 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-[#FDAD04]" />
            </div>

            <div
              key={`output-${step}`}
              className="hero-terminal-output mt-2 font-mono text-xs leading-6 text-black/50 dark:text-white/45"
            >
              {currentStep.output}
            </div>
          </div>

          {/* Status */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            <Status label="BUILD" value="PASS" />
            <Status label="TYPE" value="PASS" />
            <Status label="DEPLOY" value="READY" />
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-black/40 dark:text-white/35">
              <span>BUILD PROCESS</span>

              <span>
                {Math.round(((step + 1) / buildSteps.length) * 100)}%
              </span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
              <div
                className="h-full bg-[#FDAD04] transition-all duration-700"
                style={{
                  width: `${((step + 1) / buildSteps.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 font-mono text-[10px] text-black/35 dark:border-white/10 dark:text-white/30">
            <span>production-ready</span>

            <span className="flex items-center gap-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-[#FDAD04]" />
              SYSTEM ONLINE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Status({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-black/10 bg-black/[0.02] px-3 py-3 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="font-mono text-[9px] tracking-wider text-black/35 dark:text-white/30">
        {label}
      </div>

      <div className="mt-1 font-mono text-xs font-medium text-[#FDAD04]">
        {value}
      </div>
    </div>
  );
}