"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },

  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            closeMenu();
            setActiveSection("");
          }}
          aria-label="Anku Builds"
          className="group shrink-0"
        >
          <Image
  src="/anku-builds-navbar.svg"
  alt="Anku Builds"
  width={200}
  height={44}
  priority
  className="h-10 w-auto"
/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1 rounded-xl border border-border/60 bg-muted/20 p-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    closeMenu();
                  }}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-lg bg-[#FDAD04]/10" />
                  )}

                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#FDAD04]" />
                  )}

                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          <Link href="#contact">
            <Button
              size="sm"
              className="group cursor-pointer bg-[#FDAD04] font-medium text-black hover:bg-[#FDAD04]/90"
            >
              Let's Talk
              <ArrowUpRight className="ml-1 size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    closeMenu();
                  }}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#FDAD04]/10 text-[#FDAD04]"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link href="#contact" onClick={closeMenu} className="mt-3">
              <Button className="w-full bg-[#FDAD04] text-black hover:bg-[#FDAD04]/90">
                Let's Talk
                <ArrowUpRight className="ml-1 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}