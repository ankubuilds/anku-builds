"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "APPLICATIONS", value: "248" },
  { label: "PENDING", value: "18" },
  { label: "APPROVED", value: "201" },
];

const bars = [35, 52, 42, 68, 57, 78, 64, 88, 72, 94];

export function ProjectPreview() {
  const [activeBar, setActiveBar] = useState(bars.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar((current) => (current + 1) % bars.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xl">
      {/* Window header */}
      <div className="flex h-10 items-center justify-between border-b border-border/60 px-4">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-red-400/80" />
          <span className="size-2 rounded-full bg-yellow-400/80" />
          <span className="size-2 rounded-full bg-green-400/80" />
        </div>

        <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
          smartride / dashboard
        </span>

        <span className="w-8" />
      </div>

      <div className="grid h-[calc(100%-40px)] grid-cols-[76px_1fr] sm:grid-cols-[88px_1fr]">
        {/* Sidebar */}
        <aside className="border-r border-border/60 bg-muted/20 p-3">
          <div className="mb-7 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#FDAD04]" />
            <span className="hidden font-mono text-[8px] font-semibold tracking-wider text-foreground sm:block">
              SMART
            </span>
          </div>

          <div className="space-y-2.5">
            <SidebarItem active label="Dashboard" />
            <SidebarItem label="Applications" />
            <SidebarItem label="Verification" />
            <SidebarItem label="Cards" />
            <SidebarItem label="Settings" />
          </div>

          <div className="mt-8 border-t border-border/60 pt-4">
            <div className="hidden font-mono text-[7px] text-muted-foreground sm:block">
              SYSTEM
            </div>

            <div className="mt-2 flex items-center gap-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-[#FDAD04]" />
              <span className="hidden font-mono text-[7px] text-[#FDAD04] sm:block">
                ONLINE
              </span>
            </div>
          </div>
        </aside>

        {/* Dashboard */}
        <div className="min-w-0 p-3 sm:p-5">
          <div className="mb-4 flex items-center justify-between sm:mb-5">
            <div>
              <div className="font-heading text-sm font-semibold">
                Applications
              </div>

              <div className="mt-1 font-mono text-[8px] tracking-wider text-muted-foreground">
                SYSTEM OVERVIEW
              </div>
            </div>

            <span className="rounded-full border border-[#FDAD04]/30 bg-[#FDAD04]/10 px-2 py-1 font-mono text-[7px] text-[#FDAD04]">
              LIVE
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border/60 bg-muted/20 p-2 transition-all duration-500 hover:border-[#FDAD04]/30"
              >
                <div className="truncate font-mono text-[6px] tracking-wider text-muted-foreground sm:text-[7px]">
                  {stat.label}
                </div>

                <div className="mt-1 font-heading text-base font-bold sm:text-lg">
                  {stat.value}
                </div>

                <div className="mt-1 flex items-center gap-1">
                  <span className="text-[7px] text-[#FDAD04]">↑</span>
                  <span className="font-mono text-[6px] text-muted-foreground">
                    {index === 0 ? "12%" : index === 1 ? "4%" : "18%"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Activity chart */}
          <div className="mt-3 rounded-xl border border-border/60 p-3 sm:mt-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[7px] tracking-wider text-muted-foreground">
                APPLICATION ACTIVITY
              </span>

              <span className="font-mono text-[7px] text-[#FDAD04]">
                LAST 30 DAYS
              </span>
            </div>

            <div className="flex h-20 items-end gap-1 sm:h-24 sm:gap-2">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className="relative flex h-full flex-1 items-end"
                >
                  <div
                    className={`w-full rounded-t-sm transition-all duration-700 ${
                      index === activeBar
                        ? "bg-[#FDAD04]"
                        : "bg-[#FDAD04]/35"
                    }`}
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recent application */}
          <div className="mt-3 hidden rounded-xl border border-border/60 p-3 sm:block">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[7px] tracking-wider text-muted-foreground">
                RECENT APPLICATION
              </span>

              <span className="rounded-full bg-[#FDAD04]/10 px-2 py-0.5 font-mono text-[6px] text-[#FDAD04]">
                VERIFIED
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading text-[10px] font-medium">
                  Concession Application
                </div>
                <div className="mt-1 font-mono text-[7px] text-muted-foreground">
                  APPLICATION #SR-0248
                </div>
              </div>

              <div className="text-right">
                <div className="font-mono text-[8px] text-muted-foreground">
                  TODAY
                </div>
                <div className="mt-1 font-mono text-[7px] text-[#FDAD04]">
                  APPROVED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-md px-2 py-1.5 font-mono text-[7px] transition-colors sm:text-[8px] ${
        active
          ? "bg-[#FDAD04]/10 text-[#FDAD04]"
          : "text-muted-foreground"
      }`}
    >
      {label}
    </div>
  );
}