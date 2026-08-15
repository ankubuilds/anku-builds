import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HeroBackground } from "./hero-background";
import { HeroTerminal } from "./hero-terminal";

export function Hero() {
  return (
    <section  id="home" className="relative isolate flex min-h-[calc(100svh-2rem)] items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left — Hero content */}
          <div className="hero-enter-up max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FDAD04]" />

              <span className="font-mono text-xs font-medium tracking-[0.25em] text-[#FDAD04] uppercase">
                ANKU BUILDS / FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl leading-[0.92] font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-8xl">
              Building Cool
              <br />
              Things{" "}
              <span className="text-[#FDAD04]">with Code.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I build modern web applications, SaaS products, and digital
              experiences with a focus on clean engineering, thoughtful
              interfaces, and real-world solutions.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#projects">
                <Button
                  size="lg"
                  className="w-full cursor-pointer bg-[#FDAD04] px-6 text-black hover:bg-[#FDAD04]/90 sm:w-auto"
                >
                  Explore Projects
                </Button>
              </Link>

              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full cursor-pointer px-6 sm:w-auto"
                >
                  Let's Talk
                </Button>
              </Link>
            </div>

            {/* Stack */}
            <div className="mt-8 border-t border-border/50 pt-4 sm:mt-9">
              <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Building with
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Right — Build terminal */}
          <div className="hero-enter-right flex justify-center lg:justify-end lg:-translate-y-4">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}