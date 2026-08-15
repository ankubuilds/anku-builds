"use client";

import { ArrowDownRight } from "lucide-react";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-t border-border/50 py-24 sm:py-28 lg:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(253,173,4,0.08),transparent_32%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6 sm:mb-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FDAD04]" />
              <span className="font-mono text-xs font-medium tracking-[0.25em] text-[#FDAD04] uppercase">
                Selected Work
              </span>
            </div>

            <h2 className="font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Things I've built
              <br />
              <span className="text-muted-foreground">that solve problems.</span>
            </h2>
          </div>

          <ArrowDownRight className="hidden size-8 text-[#FDAD04] sm:block" />
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-[#FDAD04]" />
          More projects are currently in development
        </div>
      </div>
    </section>
  );
}
