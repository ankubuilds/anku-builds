import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[10%] top-0 h-[320px] w-[320px] rounded-full bg-[#FDAD04]/5 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:gap-20 lg:py-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex cursor-pointer items-center"
            >
              <Image
  src="/anku-builds-footer.svg"
  alt="Anku Builds"
  width={200}
  height={44}
    loading="eager"
  className="h-10 w-auto"
/>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              Full-stack developer building modern web applications, SaaS
              products, and useful digital experiences.
            </p>

            {/* Small terminal-style line */}
            <div className="mt-8 flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-[#FDAD04]" />
              Available for opportunities
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:min-w-[280px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-[#FDAD04]" />

              <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-[#FDAD04] uppercase">
                Navigation
              </span>
            </div>

            <nav className="grid grid-cols-2 gap-x-12 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4 lg:grid lg:grid-cols-2 lg:gap-x-12">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex w-fit cursor-pointer items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}

                  <ArrowUpRight className="size-3 text-[#FDAD04] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border/50 py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase">
            Building useful things with code.
          </span>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[9px] text-muted-foreground">
              © {new Date().getFullYear()} Anku Builds
            </span>

            <a
              href="/"
              className="group inline-flex cursor-pointer items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-[#FDAD04]"
            >
              Back to top

              <ArrowUpRight className="size-3 rotate-[-45deg] transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}