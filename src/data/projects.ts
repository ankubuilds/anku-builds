import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  status: string;
  github: string;
  demo: string;
  preview: {
    stats: {
      label: string;
      value: string;
    }[];
  };
};

export const projects: Project[] = [
  {
    title: "SmartRide",
    subtitle: "Automated Bus Concession Card System",
    description:
      "A digital workflow for concession-card applications, document verification, approval, payments, and card processing.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    status: "Featured Project",
    github: "https://github.com/tm-web-dev/smartride",
    demo: "https://smartride-sand.vercel.app/",
    preview: {
      stats: [
        { label: "APPLICATIONS", value: "248" },
        { label: "PENDING", value: "18" },
        { label: "APPROVED", value: "201" },
      ],
    },
  },
];

export const stackIcons: Record<string, LucideIcon> = {};
