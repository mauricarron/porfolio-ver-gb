import type { Project } from "@/types/projects";

export const projectData: Project[] = [
  {
    title: "Noichigo",
    isWip: true,
    description:
      "An experiment in using LLMs to help find product ideas in the wild. It analyzes user sentiment from subreddits and comment sections to surface small tools people might actually want.",
    techStack: [
      "Monorepo",
      "Bun.js",
      "Typescript",
      "SQLite",
      "Prisma",
      "Next.js",
      "Mantine UI",
    ],
    links: {
      design: "#",
    },
  },
  {
    title: "Fitnologym",
    isWip: false,
    description:
      "Client project focused on visual clarity and advanced fitness tracking. It uses bioimpedance scans to measure 35 body metrics, all through a sleek, data-driven interface.",
    techStack: [
      "Next.js",
      "Typescript",
      "Mantine UI",
      "Mongo DB",
      "Mongoose",
      "Vercel",
    ],
    links: {
      live: "#",
      design: "#",
    },
  },
  {
    title: "Wasabi Alert",
    isWip: false,
    description:
      "Tiny utility written in TypeScript for sending Telegram messages. It's for those moments when email is too much, but silence is too risky.",
    techStack: ["Bun.js", "Typescript", "Telegram", "NPM"],
    links: {
      npm: "#",
      code: "#",
    },
  },
  {
    title: "Kobuta Expenses",
    isWip: false,
    description:
      "Home expense tracker I built to fit my own budget habits and fiscal situation. Nothing fancy — just what I needed, done right.",
    techStack: [
      "Next.js",
      "Typescript",
      "Shadcn/ui",
      "Tailwind",
      "Mongo DB",
      "Mongoose",
      "Vercel",
    ],
    links: {
      design: "#",
    },
  },
];
