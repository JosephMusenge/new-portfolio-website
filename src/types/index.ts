// src/types/index.ts
export type Section = 'home' | 'experiences' | 'projects' | 'contact';

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  current: boolean;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured: boolean;
}