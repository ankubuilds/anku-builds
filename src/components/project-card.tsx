"use client";

import { ArrowUpRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stackIcons, type Project } from "@/data/projects";
import { ProjectPreview } from "./project-preview";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-2xl shadow-black/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#FDAD04]/40 hover:shadow-[#FDAD04]/10 dark:shadow-black/20">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[360px] overflow-hidden border-b border-border/60 bg-muted/20 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FDAD04]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          <ProjectPreview />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#FDAD04] uppercase">
              {project.status}
            </span>

            <span className="font-mono text-[10px] text-muted-foreground">
              01 / 01
            </span>
          </div>

          <h3 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-2 font-mono text-xs tracking-wide text-muted-foreground">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => {
              const Icon = stackIcons[technology as keyof typeof stackIcons];

              return (
                <span
                  key={technology}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
                >
                  {Icon && <Icon className="size-3 text-[#FDAD04]" />}
                  {technology}
                </span>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
  {project.github ? (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
    >
      <GitBranch className="size-4" />
      GitHub
    </a>
  ) : null}

  {project.demo ? (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FDAD04] px-3 text-sm font-medium text-black transition-colors hover:bg-[#FDAD04]/90"
    >
      Live Demo
      <ArrowUpRight className="size-4" />
    </a>
  ) : null}
</div>
        </div>
      </div>
    </article>
  );
}
