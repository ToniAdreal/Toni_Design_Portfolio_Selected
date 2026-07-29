export interface ImageSlot {
  /** file name as it will appear in src/imports (used to resolve the real upload) */
  file: string;
  title: string;
  caption: string;
  rationale: string;
  tags?: string[];
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  summary?: string;
  images: ImageSlot[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface Formula {
  name: string;
  expr: string;
  note?: string;
}

export interface Project {
  slug: string;
  index: string; // "01"
  name: string;
  tagline: string;
  context: string;
  accent: string; // css var name
  summary: string;
  metrics: Metric[];
  formulas?: Formula[];
  chapters: Chapter[];
}
