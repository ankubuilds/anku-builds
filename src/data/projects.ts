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
    type: "dashboard" | "story";
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
      type: "dashboard",
      stats: [
        { label: "APPLICATIONS", value: "248" },
        { label: "PENDING", value: "18" },
        { label: "APPROVED", value: "201" },
      ],
    },
  },

  {
    title: "Still You",
    subtitle: "A 10-Year Story",
    description:
      "An interactive storytelling experience that turns ten years of memories into a cinematic and emotional web journey.",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    status: "Featured Project",
    github: "https://github.com/ankubuilds/still-you",
    demo: "https://still-you.ankubuilds.com", // Add your live URL when deployed
    preview: {
      type: "story",
      stats: [],
    },
  },
];

export const stackIcons: Record<string, LucideIcon> = {};