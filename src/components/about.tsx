import {
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Clean Engineering",
    description:
      "I care about readable code, sensible architecture, and building systems that are easy to maintain.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Thinking",
    description:
      "From interfaces and APIs to databases and deployment, I enjoy understanding the complete product.",
  },
  {
    icon: Rocket,
    title: "Build & Ship",
    description:
      "I prefer turning ideas into working products, iterating quickly, and solving problems along the way.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-border/50 py-24 sm:py-28 lg:py-24git ad"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[12%] top-[15%] h-72 w-72 rounded-full bg-[#FDAD04]/5 blur-3xl" />

        <div className="absolute bottom-[5%] left-[8%] h-64 w-64 rounded-full bg-[#FDAD04]/[0.025] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#FDAD04]" />

            <span className="font-mono text-xs font-medium tracking-[0.25em] text-[#FDAD04] uppercase">
              About
            </span>
          </div>

          <h2 className="max-w-4xl font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            I don't just write code.
            <br />
            <span className="text-muted-foreground">
              I build things people can use.
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Story */}
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-6 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FDAD04]/5 blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#FDAD04] uppercase">
                    Developer Profile
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground">
                    <span className="size-1.5 animate-pulse rounded-full bg-[#FDAD04]" />
                    BUILDING
                  </span>
                </div>

                <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  <p>
                    I'm a full-stack developer focused on building modern web
                    applications, SaaS products, and digital experiences.
                  </p>

                  <p>
                    I enjoy taking an idea from{" "}
                    <span className="text-foreground">concept → interface → backend → production</span>{" "}
                    and turning it into something useful.
                  </p>

                  <p>
                    My approach is simple: understand the problem first, keep
                    the engineering practical, and make the final product feel
                    polished.
                  </p>
                </div>

                {/* Terminal-style line */}
                <div className="mt-8 overflow-hidden rounded-xl border border-border/60 bg-muted/30">
                  <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                    <span className="size-1.5 rounded-full bg-red-400/70" />
                    <span className="size-1.5 rounded-full bg-yellow-400/70" />
                    <span className="size-1.5 rounded-full bg-green-400/70" />

                    <span className="ml-2 font-mono text-[8px] text-muted-foreground">
                      approach.txt
                    </span>
                  </div>

                  <div className="p-4 font-mono text-[10px] leading-6 sm:text-xs">
                    <div>
                      <span className="text-[#FDAD04]">$</span>{" "}
                      <span className="text-muted-foreground">
                        cat approach.txt
                      </span>
                    </div>

                    <div className="mt-2 text-muted-foreground">
                      solve the problem
                      <br />
                      build the system
                      <br />
                      polish the experience
                      <br />
                      ship it
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="flex flex-col gap-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-[#FDAD04]/30 hover:shadow-lg hover:shadow-[#FDAD04]/5 sm:p-7"
                >
                  <div className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-[#FDAD04] transition-transform duration-500 group-hover:scale-y-100" />

                  <div className="flex gap-5">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      <Icon className="size-5 text-[#FDAD04]" />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <h3 className="font-heading text-lg font-semibold">
                          {principle.title}
                        </h3>

                        <span className="font-mono text-[9px] text-muted-foreground">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="text-sm leading-6 text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Currently building */}
            <div className="mt-2 rounded-2xl border border-[#FDAD04]/20 bg-[#FDAD04]/[0.04] p-6 sm:p-7">
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-[#FDAD04] uppercase">
                <Sparkles className="size-3" />
                Currently building
              </div>

              <p className="mt-3 font-heading text-lg font-semibold">
                SaaS ideas, developer tools & useful products.
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Always experimenting with new ideas and looking for problems
                worth solving.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom link */}
        <div className="mt-12 flex items-center justify-between border-t border-border/50 pt-5 sm:mt-16">
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            More than code
          </span>

          <a
            href="#contact"
            className="group inline-flex cursor-pointer items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-[#FDAD04] uppercase"
          >
            Let's build something
            <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}