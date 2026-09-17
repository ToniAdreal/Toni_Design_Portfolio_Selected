import { projects as sourceProjects } from "./real";
import type { Project as SourceProject } from "./real/types";
import type { CaseStudy, Domain, EvidenceStage, Project, ProjectState } from "./portfolio";

const domains: Record<string, Domain[]> = {
  "next-card": ["Product Design", "Commerce"],
  aurionx: ["Product Design", "AI"],
  cyberorigin: ["Product Design", "AI"],
  deepvise: ["Product Design", "AI", "Research"],
  allweb3: ["Product Design", "Web3"],
  budweiser: ["Product Design", "AI", "Design Engineering"],
  mengniu: ["Product Design", "AI", "Design Engineering"],
  tokenta: ["Product Design", "AI", "Web3"],
};

const stages: Record<string, EvidenceStage> = {
  "next-card": "Decision",
  aurionx: "System",
  cyberorigin: "System",
  deepvise: "Evidence",
  allweb3: "System",
  budweiser: "Outcome",
  mengniu: "System",
  tokenta: "System",
};

function stateFor(project: SourceProject): ProjectState {
  switch (project.meta?.status) {
    case "Shipped Product": return "Shipped";
    case "Working Prototype": return "Prototype";
    case "Competition Concept": return "Competition proposal";
    case "Personal Project": return "Concept";
    default: return "Concept";
  }
}

function coverFor(project: SourceProject) {
  return project.chapters.flatMap((chapter) => chapter.images)[0];
}

function toWebpPath(filename: string | undefined): string {
  if (!filename) return "";
  return `/projects/${filename.replace(/\.(png|jpg|jpeg)$/i, ".webp")}`;
}

export const adaptedProjects: Project[] = sourceProjects.map((source) => {
  const cover = coverFor(source);
  const state = stateFor(source);
  return {
    slug: source.slug,
    title: source.name,
    tagline: source.tagline,
    domain: domains[source.slug] ?? ["Product Design"],
    role: source.meta?.role ?? "Product Designer",
    team: source.meta?.team ?? "Independent portfolio case study",
    year: `Project ${source.index}`,
    duration: source.meta?.duration ?? "End-to-end study",
    state,
    outcome: source.context,
    outcomeType: state === "Shipped" ? "Verified outcome" : "Honest status",
    accessState: "Public",
    evidenceStage: stages[source.slug] ?? "System",
    coverImage: toWebpPath(cover?.file),
    coverAlt: cover?.title ?? `${source.name} project cover`,
    publicAbstract: source.overview ?? source.summary,
    relatedArtifacts: [],
    enabled: true,
    requiresVerification: false,
    hasCaseStudy: true,
  };
});

export const adaptedCaseStudies: Record<string, CaseStudy> = Object.fromEntries(sourceProjects.map((source) => [
  source.slug,
  {
    slug: source.slug,
    chapters: source.chapters.map((chapter) => ({
      id: chapter.id,
      title: chapter.title,
      body: chapter.summary ? [chapter.summary] : [],
      images: chapter.images.map((image) => ({
        src: toWebpPath(image.file),
        alt: image.title,
        caption: image.caption,
        rationale: image.rationale,
      })),
    })),
    credits: {
      ownership: source.meta?.ownership ?? "Independent product-design case study and end-to-end visual documentation.",
      collaborators: source.meta?.team ?? "Independent portfolio project.",
      tools: source.meta?.tools ?? ["Research", "Product Design", "Prototyping", "Systems Thinking"],
      confidentiality: "Only portfolio-safe project material supplied by Toni is shown.",
    },
  },
]));
