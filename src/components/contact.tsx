import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

import {
  siGithub,
  siYoutube,
  siFacebook,
  siInstagram,
} from "simple-icons";

function BrandIcon({
  icon,
  className = "size-4",
}: {
  icon: { path: string };
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ankubuilds",
    icon: siGithub,
  },
  
  {
    label: "Facebook",
    href: "https://facebook.com/ankubuilds",
    icon: siFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ankubuilds.dev",
    icon: siInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@AnkuBuilds",
    icon: siYoutube,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border/50 py-24 sm:py-28 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FDAD04]/5 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-4xl sm:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#FDAD04]" />

            <span className="font-mono text-xs font-medium tracking-[0.25em] text-[#FDAD04] uppercase">
              Contact
            </span>
          </div>

          <h2 className="font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Have an idea?
            <br />
            <span className="text-muted-foreground">
              Let's build it.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Whether you're building a product, need a developer, or simply
            want to talk about an interesting idea, my inbox is open.
          </p>
        </div>

        {/* Contact panel */}
        <div className="grid overflow-hidden rounded-3xl border border-border/60 bg-card/50 shadow-2xl shadow-black/5 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main CTA */}
          <div className="relative overflow-hidden border-b border-border/60 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FDAD04]/10 blur-3xl" />

            <div className="relative">
              {/* Status */}
              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#FDAD04]/20 bg-[#FDAD04]/5 px-3 py-1.5">
                <span className="size-1.5 animate-pulse rounded-full bg-[#FDAD04]" />

                <span className="font-mono text-[9px] tracking-[0.15em] text-[#FDAD04] uppercase">
                  Available for opportunities
                </span>
              </div>

              <div className="max-w-xl">
                <div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  <Mail className="size-3" />
                  Start a conversation
                </div>

                <a
                  href="mailto:ankubuilds@gmail.com"
                  className="group inline-flex cursor-pointer items-center gap-3 break-all font-heading text-2xl font-semibold tracking-tight transition-colors hover:text-[#FDAD04] sm:text-3xl lg:text-4xl"
                >
                  ankubuilds@gmail.com

                  <ArrowUpRight className="size-5 shrink-0 text-[#FDAD04] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Terminal */}
              <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-background/60">
                <div className="flex h-9 items-center gap-2 border-b border-border/60 px-4">
                  <span className="size-1.5 rounded-full bg-red-400/70" />
                  <span className="size-1.5 rounded-full bg-yellow-400/70" />
                  <span className="size-1.5 rounded-full bg-green-400/70" />

                  <span className="ml-2 font-mono text-[8px] text-muted-foreground">
                    connection.sh
                  </span>
                </div>

                <div className="p-4 font-mono text-[10px] leading-6 sm:text-xs">
                  <div>
                    <span className="text-[#FDAD04]">$</span>{" "}
                    <span className="text-muted-foreground">
                      ./start-project
                    </span>
                  </div>

                  <div className="mt-2 text-muted-foreground">
                    initializing conversation...
                    <br />
                    checking availability...
                    <br />
                    <span className="text-[#FDAD04]">
                      ready for your idea ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social / details */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12">
            <div>
              <div className="mb-6 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Find me online
              </div>

              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex cursor-pointer items-center justify-between rounded-xl border border-border/60 bg-muted/20 px-4 py-4 transition-all duration-300 hover:border-[#FDAD04]/30 hover:bg-[#FDAD04]/5"
                    >
                      <div className="flex items-center gap-3">
                        <BrandIcon
  icon={Icon}
  className="size-4 text-muted-foreground transition-colors group-hover:text-[#FDAD04]"
/>

                        <span className="font-mono text-xs">
                          {link.label}
                        </span>
                      </div>

                      <ArrowUpRight className="size-3 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FDAD04]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-12 border-t border-border/60 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                  Response time
                </span>

                <span className="font-mono text-[10px] text-[#FDAD04]">
                  Usually &lt; 24h
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Send className="size-3 text-[#FDAD04]" />

                <span className="text-xs text-muted-foreground">
                  Looking forward to hearing from you.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex items-center justify-between border-t border-border/50 pt-5">
          <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
            Let's make something useful
          </span>

          <span className="hidden font-mono text-[9px] text-muted-foreground sm:block">
            127.0.0.1 → production
          </span>
        </div>
      </div>
    </section>
  );
}