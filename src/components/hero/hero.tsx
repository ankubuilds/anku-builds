import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#FDAD04]" />

            <span className="font-mono text-xs font-medium tracking-[0.25em] text-[#FDAD04] uppercase">
              ANKU BUILDS / FULL-STACK DEVELOPER
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-5xl leading-[0.95] font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            Building Cool
            <br />
            Things{" "}
            <span className="text-[#FDAD04]">with Code.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I build modern web applications, SaaS products, and digital
            experiences with a focus on clean engineering, thoughtful
            interfaces, and real-world solutions.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              
              size="lg"
              className="cursor-pointer bg-[#FDAD04] px-6 text-black hover:bg-[#FDAD04]/90"
            >
              <Link href="#projects">Explore Projects</Link>
            </Button>

            <Button
             
              size="lg"
              variant="outline"
              className="cursor-pointer px-6"
            >
              <Link href="#contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Technical stack */}
          <div className="mt-14 border-t border-border/50 pt-5">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Building with
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground">
              <span>Next.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}