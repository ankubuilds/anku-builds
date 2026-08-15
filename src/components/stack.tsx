"use client";

import {
  Braces,
  Database,
  Globe,
  Layers3,
  Server,
  Settings2,
  Terminal,
  Workflow,
} from "lucide-react";

const stackGroups = [
  {
    title: "Frontend",
    label: "INTERFACE",
    icon: Globe,
    description: "Building fast, responsive and polished user experiences.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    label: "ENGINE",
    icon: Server,
    description: "Designing reliable APIs and application architecture.",
    technologies: ["Node.js", "Next.js API", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    label: "DATA",
    icon: Database,
    description: "Structuring application data for real-world products.",
    technologies: ["MongoDB", "Mongoose", "Database Design"],
  },
  {
    title: "Tools",
    label: "WORKFLOW",
    icon: Workflow,
    description: "The tools I use to build, test and ship products.",
    technologies: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

const featuredStack = [
  {
    name: "Next.js",
    description: "Full-stack React framework",
    icon: Braces,
  },
  {
    name: "TypeScript",
    description: "Type-safe development",
    icon: Terminal,
  },
  {
    name: "Node.js",
    description: "Backend runtime",
    icon: Server,
  },
  {
    name: "MongoDB",
    description: "Application database",
    icon: Database,
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative isolate overflow-hidden border-t border-border/50 py-24 sm:py-28 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-[#FDAD04]/5 blur-3xl" />

        <div className="absolute right-[10%] bottom-[10%] h-80 w-80 rounded-full bg-[#FDAD04]/[0.035] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FDAD04]" />

              <span className="font-mono text-xs font-medium tracking-[0.25em] text-[#FDAD04] uppercase">
                Tech Stack
              </span>
            </div>

            <h2 className="font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Stacks I use to
              <br />
              <span className="text-muted-foreground">
                build real products.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base lg:justify-self-end">
            A practical stack focused on building modern web applications,
            scalable APIs, and interfaces that feel as good as they work.
          </p>
        </div>

        {/* Featured stack */}
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStack.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#FDAD04]/40 hover:shadow-lg hover:shadow-[#FDAD04]/5"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FDAD04]/5 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-muted/40">
                      <Icon className="size-5 text-[#FDAD04]" />
                    </div>

                    <span className="font-mono text-[9px] text-muted-foreground">
                      0{featuredStack.indexOf(technology) + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold">
                    {technology.name}
                  </h3>

                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                    {technology.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Categories */}
        <div className="grid gap-4 md:grid-cols-2">
          {stackGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#FDAD04]/30 sm:p-7"
              >
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#FDAD04] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      <Icon className="size-5 text-[#FDAD04]" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-[#FDAD04]">
                        {group.label}
                      </p>

                      <h3 className="mt-1 font-heading text-xl font-semibold">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <Settings2 className="size-4 text-muted-foreground/40 transition-colors group-hover:text-[#FDAD04]" />
                </div>

                <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-[#FDAD04]/20 group-hover:text-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom status */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-5">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-[#FDAD04]" />
            Always learning. Always building.
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <Layers3 className="size-3" />
            Modern web stack
          </div>
        </div>
      </div>
    </section>
  );
}