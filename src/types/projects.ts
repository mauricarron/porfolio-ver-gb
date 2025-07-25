export type Link = "live" | "design" | "code" | "npm";

export interface Project {
  title: string;
  isWip: boolean;
  description: string;
  techStack: string[];
  links: {
    [key in Link]?: string;
  };
}
