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
      design:
        "https://www.figma.com/design/6ZO0JNou1cq1vvbfcw1JO0/noichigo?node-id=1-6506&t=5JLWbLfbHBRhAWY1-1",
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
      live: "https://www.fitnologym.com.ar/",
      design:
        "https://www.figma.com/design/X4SDnt973oTz39VcxwFbnU/Fitnologym?node-id=1-11669&t=fffqDrF68ypQo8Kd-1",
    },
  },
  {
    title: "Wasabi Alert",
    isWip: false,
    description:
      "Tiny utility written in TypeScript for sending Telegram messages. It's for those moments when email is too much, but silence is too risky.",
    techStack: ["Bun.js", "Typescript", "Telegram", "NPM"],
    links: {
      npm: "https://www.npmjs.com/package/wasabi-alert",
    },
  },
  {
    title: "Kobuta Expenses",
    isWip: false,
    description:
      "Home expense tracker I built to fit my own budget habits and fiscal situation. Nothing fancy — just what I needed.",
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
      design:
        "https://www.figma.com/design/pf3aOY8nbEPCT4hzfOmurE/kobuta-expenses?node-id=1-801&t=3SFVq8T5dhgkdf27-1",
    },
  },
];

export const personalLinks = {
  projectSource: "https://github.com/mauricarron/porfolio-ver-gb",
  github: "https://github.com/mauricarron",
  linkedin: "https://www.linkedin.com/in/mauricarron/",
};
