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

export type MetricType = 'measured' | 'target' | 'forecast';

export interface Metric {
  label: string;
  value: string;
  type?: MetricType;
}

export interface Formula {
  name: string;
  expr: string;
  note?: string;
}

export interface ProjectMeta {
  role: string;
  team: string;
  duration: string;
  ownership: string;
  status: 'Competition Concept' | 'Working Prototype' | 'Shipped Product' | 'Personal Project';
  tools: string[];
}

export interface Decision {
  id: string;
  question: string;
  evidence: string;
  alternatives: string[];
  decision: string;
  why: string;
  afterTesting?: string;
}

export interface WorkflowStep {
  stage: string;
  artifact: string;
  tool: string;
  judgment: string;
}

export interface Project {
  slug: string;
  index: string; // "01"
  name: string;
  tagline: string;
  context: string;
  accent: string; // css var name
  summary: string;
  overview?: string; // 30-second Layer 1 summary
  metrics: Metric[];
  formulas?: Formula[];
  meta?: ProjectMeta;
  decisions?: Decision[];
  workflow?: WorkflowStep[];
  chapters: Chapter[];
}
