export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  preview?: {
    hero?: string; // image or video URL
    gallery?: string[]; // extra images
    longDescription?: string;
    tags?: string[];
  };
};

export type Experience = {
  title: string;
  org: string;
  period: string;
  highlights: string[];
};

export type SkillCategory = {
  name: "Frontend" | "Backend" | "Tools" | "Core Expertise";
  items: string[];
};

export type Achievement = {
  id: string;
  title: string;
  metric: number;
  label: string;
};
