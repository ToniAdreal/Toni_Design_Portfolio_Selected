// ---------------------------------------------------------------------------
// Content data layer for Toni Adreal's portfolio. Shares identity + social with
// the personal site (src/content/site.ts). Edit facts here, never in layout.
// Distinguish shipped work / prototypes / proposals / research / concept.
// Use verified outcomes only; otherwise state honest status. Never invent data.
// ---------------------------------------------------------------------------

import tokentaCover from "../assets/portfolio/tokenta-workflow.svg";
import escrowCover from "../assets/portfolio/allweb3-escrow.svg";
import nextCardCover from "../assets/portfolio/next-card.svg";
import cyberSignalsCover from "../assets/portfolio/cyberorigin-signals.svg";
import evalHarnessCover from "../assets/portfolio/eval-harness.svg";
import typeFieldCover from "../assets/portfolio/type-field.svg";
import nextCardInterface from "../assets/portfolio/next-card-interface.svg";
import tokentaSystem from "../assets/portfolio/tokenta-system.svg";
import { adaptedCaseStudies, adaptedProjects } from "./realPortfolioAdapter";

export const portfolioIdentity = {
  thesis: "Evidence becomes a product when decisions survive contact with reality.",
  supporting:
    "Selected work across product design, design engineering, AI systems, commerce, and complex operational workflows.",
  personalSite: "https://toni.tokenta.space/",
  primaryEmail: "hello@tokenta.space",
  emailConfirmed: false,
};

export const heroWords = ["QUESTION", "EVIDENCE", "DECISION", "SYSTEM", "OUTCOME"] as const;

export const canvasVocabulary = [
  "question", "evidence", "constraint", "state", "decision",
  "system", "outcome", "audit", "prototype", "release",
  "validation", "recovery", "interface", "model"
];

export type EvidenceStage = "Question" | "Evidence" | "Decision" | "System" | "Outcome";
export type AccessState = "Public" | "Restricted";
export type ProjectState =
  | "Shipped"
  | "Prototype"
  | "Competition proposal"
  | "Research"
  | "Concept";
export type Domain =
  | "Product Design"
  | "Design Engineering"
  | "AI"
  | "Web3"
  | "Commerce"
  | "Research";

export interface Project {
  slug: string;
  title: string;
  tagline: string; // one-sentence problem
  domain: Domain[];
  role: string;
  team: string;
  year: string;
  duration: string;
  state: ProjectState;
  outcome: string;
  outcomeType: "Verified outcome" | "Honest status";
  accessState: AccessState;
  evidenceStage: EvidenceStage;
  coverImage: string;
  coverAlt: string;
  publicAbstract: string;
  relatedArtifacts: string[]; // artifact ids
  enabled: boolean;
  requiresVerification: boolean;
  hasCaseStudy: boolean;
}


const legacyProjects: Project[] = [
  {
    slug: "tokenta-workflow",
    title: "Tokenta Workflow OS",
    tagline: "Operations teams drowned in ad-hoc tools with no shared source of truth.",
    domain: ["Product Design", "Design Engineering", "AI"],
    role: "Product Designer & Full-Stack Engineer (individual ownership of design system + AI review surface)",
    team: "4-person product team; I owned design system and the AI review workflow end to end.",
    year: "2024",
    duration: "10 months, ongoing",
    state: "Shipped",
    outcome: "Consolidated four ad-hoc tools into one reviewed workflow; manual review time reduced.",
    outcomeType: "Verified outcome",
    accessState: "Public",
    evidenceStage: "Outcome",
    coverImage: tokentaCover,
    coverAlt: "Abstract network of connected nodes representing an operations workflow system",
    publicAbstract:
      "Tokenta's operations ran across four disconnected tools. I researched the real review path, framed a single workflow model with human-in-the-loop checkpoints, built the design system and the AI-assisted review surface, and validated it against the original manual process. Confidential operator data is redacted; flows shown are synthetic.",
    relatedArtifacts: ["art-flow-1", "art-sys-1", "art-val-1"],
    enabled: true,
    requiresVerification: true,
    hasCaseStudy: true,
  },
  {
    slug: "allweb3-escrow",
    title: "ALLWEB3 Escrow",
    tagline: "Non-experts couldn't trust or operate high-stakes escrow states.",
    domain: ["Product Design", "Web3"],
    role: "Product & Systems Designer",
    team: "Cross-functional; I owned state modeling and interaction spec.",
    year: "2023",
    duration: "6 months",
    state: "Shipped",
    outcome: "Fewer support escalations on escrow status confusion; reusable transactional state library.",
    outcomeType: "Verified outcome",
    accessState: "Public",
    evidenceStage: "System",
    coverImage: escrowCover,
    coverAlt: "Layered geometric planes suggesting settlement and escrow states",
    publicAbstract:
      "Escrow lifecycles are unforgiving and hard to read. I mapped every state into a recoverable, legible flow, prototyped against real operators, and shipped a pattern library still in use. Financial specifics are confidential and shown as synthetic examples.",
    relatedArtifacts: ["art-flow-2", "art-sys-2"],
    enabled: true,
    requiresVerification: false,
    hasCaseStudy: false,
  },
  {
    slug: "next-card",
    title: "Next Card",
    tagline: "Commerce onboarding lost users at identity and funding steps.",
    domain: ["Product Design", "Commerce"],
    role: "Product Designer",
    team: "Small product squad; I owned the onboarding flow.",
    year: "2023",
    duration: "4 months",
    state: "Prototype",
    outcome: "Validated a shorter funding path in usability testing; awaiting production rollout.",
    outcomeType: "Honest status",
    accessState: "Public",
    evidenceStage: "Decision",
    coverImage: nextCardCover,
    coverAlt: "Minimal card-like planes on a dark surface representing a commerce product",
    publicAbstract:
      "Next Card's onboarding leaked users at identity verification and funding. I framed the drop-off with analytics and session evidence, decided on a restructured funding-first path, and validated it in testing. Prototype status — not yet shipped to production.",
    relatedArtifacts: ["art-research-1", "art-if-1"],
    enabled: true,
    requiresVerification: true,
    hasCaseStudy: false,
  },
  {
    slug: "cyberorigin-signals",
    title: "CyberOrigin Signals",
    tagline: "Raw noisy data never became decision-ready.",
    domain: ["Design Engineering", "AI"],
    role: "Full-Stack Engineer",
    team: "Engineering-led; I owned pipeline + dashboard.",
    year: "2022",
    duration: "8 months",
    state: "Shipped",
    outcome: "Cut time from raw data to reportable insight; data contracts still in use.",
    outcomeType: "Verified outcome",
    accessState: "Public",
    evidenceStage: "System",
    coverImage: cyberSignalsCover,
    coverAlt: "Fine grid of data points forming a signal field",
    publicAbstract:
      "CyberOrigin's raw signals were noisy and untrusted. I built ingestion with validation and observability, then an analytics surface exposing only verified metrics. Source data is confidential; screens use synthetic values.",
    relatedArtifacts: ["art-sys-3", "art-val-2"],
    enabled: true,
    requiresVerification: false,
    hasCaseStudy: false,
  },
  {
    slug: "eval-harness",
    title: "AI Evaluation Harness",
    tagline: "Model output shipped without a trustworthy way to judge it.",
    domain: ["AI", "Research"],
    role: "Design Engineer",
    team: "Individual, with review from ML leads.",
    year: "2023",
    duration: "3 months",
    state: "Research",
    outcome: "Reusable evaluation method with human-in-the-loop scoring; adopted internally.",
    outcomeType: "Verified outcome",
    accessState: "Restricted",
    evidenceStage: "Evidence",
    coverImage: evalHarnessCover,
    coverAlt: "Abstract measurement grid representing evaluation scoring",
    publicAbstract:
      "A method for evaluating AI output where humans own the consequential judgments and the tool handles synthesis and edge-case generation. Restricted: implementation details and internal results are confidential — request access for a supervised review.",
    relatedArtifacts: ["art-research-2"],
    enabled: true,
    requiresVerification: false,
    hasCaseStudy: false,
  },
  {
    slug: "type-field",
    title: "Generative Type Field",
    tagline: "How can motion carry information instead of decoration?",
    domain: ["Research", "Design Engineering"],
    role: "Maker / Researcher",
    team: "Individual.",
    year: "2024",
    duration: "Ongoing study",
    state: "Concept",
    outcome: "Design study exploring motion-as-information; informs the personal site.",
    outcomeType: "Honest status",
    accessState: "Public",
    evidenceStage: "Question",
    coverImage: typeFieldCover,
    coverAlt: "Scattered typographic marks drifting across a dark field",
    publicAbstract:
      "An open study of procedural typography and scroll choreography as an information system. Concept status — a research thread, not a shipped product.",
    relatedArtifacts: ["art-if-2"],
    enabled: true,
    requiresVerification: false,
    hasCaseStudy: false,
  },
];

// The previous synthetic project set is retained above only as migration
// context. The public portfolio now uses Toni's real, image-backed case work.
void legacyProjects;
export const projects: Project[] = adaptedProjects;

// Featured selection is editable — slugs of the flagship chapters.
export const featuredSlugs = ["next-card", "aurionx", "cyberorigin", "deepvise"];

export const domainFilters: Array<Domain | AccessState> = [
  "Product Design",
  "Design Engineering",
  "AI",
  "Web3",
  "Commerce",
  "Research",
  "Public",
  "Restricted",
];

export type ArtifactType = "image" | "diagram" | "text" | "link" | "redacted";
export type ArtifactGroup =
  | "Research"
  | "Flows"
  | "Interface"
  | "Systems"
  | "Validation"
  | "Writing";

export interface Artifact {
  id: string;
  project: string;
  group: ArtifactGroup;
  type: ArtifactType;
  year: string;
  caption: string;
  confidentiality: "Public" | "Redacted" | "Synthetic";
  image?: string;
  imageAlt?: string;
  url?: string;
}

export const artifacts: Artifact[] = [
  { id: "art-research-1", project: "Next Card", group: "Research", type: "text", year: "2023", caption: "Drop-off analysis across identity and funding steps.", confidentiality: "Public" },
  { id: "art-research-2", project: "AI Evaluation Harness", group: "Research", type: "redacted", year: "2023", caption: "Scoring rubric and edge-case taxonomy (details redacted).", confidentiality: "Redacted" },
  { id: "art-flow-1", project: "Tokenta Workflow OS", group: "Flows", type: "diagram", year: "2024", caption: "Review workflow with human-in-the-loop checkpoints (synthetic).", confidentiality: "Synthetic" },
  { id: "art-flow-2", project: "ALLWEB3 Escrow", group: "Flows", type: "diagram", year: "2023", caption: "Escrow lifecycle states and recovery paths (synthetic).", confidentiality: "Synthetic" },
  { id: "art-if-1", project: "Next Card", group: "Interface", type: "image", year: "2023", caption: "Funding-first onboarding surface.", confidentiality: "Synthetic", image: nextCardInterface, imageAlt: "Clean interface layout on a dark surface" },
  { id: "art-if-2", project: "Generative Type Field", group: "Interface", type: "image", year: "2024", caption: "Procedural typographic field, static frame.", confidentiality: "Public", image: typeFieldCover, imageAlt: "Typographic marks on a dark field" },
  { id: "art-sys-1", project: "Tokenta Workflow OS", group: "Systems", type: "diagram", year: "2024", caption: "Service map and API boundaries (synthetic).", confidentiality: "Synthetic" },
  { id: "art-sys-2", project: "ALLWEB3 Escrow", group: "Systems", type: "text", year: "2023", caption: "Transactional state pattern library.", confidentiality: "Public" },
  { id: "art-sys-3", project: "CyberOrigin Signals", group: "Systems", type: "diagram", year: "2022", caption: "Ingestion pipeline with validation + observability (synthetic).", confidentiality: "Synthetic" },
  { id: "art-val-1", project: "Tokenta Workflow OS", group: "Validation", type: "text", year: "2024", caption: "Usability checks and failure-path coverage.", confidentiality: "Public" },
  { id: "art-val-2", project: "CyberOrigin Signals", group: "Validation", type: "text", year: "2022", caption: "Data-contract tests and observability checks.", confidentiality: "Public" },
  { id: "art-writing-1", project: "Personal site", group: "Writing", type: "link", year: "2025", caption: "Motion as an information system — essay.", confidentiality: "Public", url: "https://toni.tokenta.space/#writing" },
];

export const artifactGroups: ArtifactGroup[] = [
  "Research", "Flows", "Interface", "Systems", "Validation", "Writing",
];

export interface MethodStage {
  stage: EvidenceStage;
  definition: string;
  aiRole: string;
  relatedSlug: string;
}

export const methodStages: MethodStage[] = [
  { stage: "Question", definition: "Name the real problem before proposing anything.", aiRole: "AI helps surface adjacent framings; I own the question.", relatedSlug: "type-field" },
  { stage: "Evidence", definition: "Gather behavior, constraints, and contradictions.", aiRole: "AI accelerates synthesis; humans judge what counts.", relatedSlug: "eval-harness" },
  { stage: "Decision", definition: "Choose what changes and record the rejected alternatives.", aiRole: "AI generates edge cases; consequential calls stay human.", relatedSlug: "next-card" },
  { stage: "System", definition: "Design flows, states, services, and interfaces that hold up.", aiRole: "AI calibrates prototypes; I own the architecture.", relatedSlug: "tokenta-workflow" },
  { stage: "Outcome", definition: "Ship, measure against the evidence, and state honest status.", aiRole: "AI assists analysis; conclusions are mine to defend.", relatedSlug: "tokenta-workflow" },
];

export interface Capability {
  name: string;
  definition: string;
  tools: string[];
  relatedSlugs: string[];
}

export const capabilities: Capability[] = [
  { name: "Product Design", definition: "Turn ambiguous problems into legible, buildable product surfaces backed by research.", tools: ["Figma", "Prototyping", "Design systems"], relatedSlugs: ["tokenta-workflow", "next-card"] },
  { name: "Design Engineering", definition: "Ship the design in real code — typed components, motion, and production interfaces.", tools: ["TypeScript", "React", "Motion"], relatedSlugs: ["tokenta-workflow", "type-field"] },
  { name: "AI Product Systems", definition: "Build evaluation and human-in-the-loop workflows that make model output trustworthy.", tools: ["Evaluation", "Agents", "Pipelines"], relatedSlugs: ["eval-harness", "cyberorigin-signals"] },
  { name: "Systems Thinking & Delivery", definition: "Move from evidence to shipped release without losing the thread.", tools: ["State modeling", "OpenAPI", "Roadmapping"], relatedSlugs: ["allweb3-escrow", "cyberorigin-signals"] },
];

export const portfolioSocial = [
  { label: "Personal Site", url: "https://toni.tokenta.space/", enabled: true },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/toniadreal/", enabled: true },
  { label: "GitHub", url: "https://github.com/ToniAdreal", enabled: true },
  { label: "X", url: "https://x.com/toniadreal_lab", enabled: true },
];

// ---------------------------------------------------------------------------
// Case studies. Keyed by slug so the route can fetch only the active study.
// One fully populated example (tokenta-workflow) using safe public content.
// Restricted studies expose a public abstract + request-access state only;
// no secrets, private images, or full restricted data ship to the client.
// ---------------------------------------------------------------------------

export interface CaseChapter {
  id: string;
  title: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  fullBleed?: boolean;
  images?: Array<{
    src: string;
    alt: string;
    caption: string;
    rationale: string;
  }>;
}

export interface CaseStudy {
  slug: string;
  chapters: CaseChapter[];
  credits: {
    ownership: string;
    collaborators: string;
    tools: string[];
    confidentiality: string;
  };
}

const legacyCaseStudies: Record<string, CaseStudy> = {
  "tokenta-workflow": {
    slug: "tokenta-workflow",
    chapters: [
      {
        id: "summary",
        title: "Summary",
        body: [
          "Problem: Tokenta's operations ran across four disconnected tools with no shared source of truth, so reviews were slow and error-prone.",
          "Role: Product Designer & Full-Stack Engineer — individual ownership of the design system and the AI-assisted review surface. Duration: 10 months, ongoing. Team: 4-person product team. State: Shipped. Outcome: four tools consolidated into one reviewed workflow with reduced manual review time.",
        ],
      },
      {
        id: "context",
        title: "Context",
        body: [
          "Operators moved between a spreadsheet, a ticket queue, a chat channel, and a legacy admin panel. Each held part of the truth; none held all of it. The business needed faster, auditable reviews without sacrificing the human judgment the domain requires.",
          "Technically, the constraint was a fast release cadence on a small team, in a domain where correctness matters more than novelty.",
        ],
        image: tokentaCover,
        imageAlt: "Network of connected operational nodes",
        fullBleed: true,
      },
      {
        id: "evidence",
        title: "Evidence",
        body: [
          "I shadowed the real review path and mapped where information was re-entered, lost, or contradicted between tools. Analytics confirmed the slowest steps were hand-offs, not the reviews themselves.",
          "A contradiction surfaced: operators distrusted automation not because it was wrong, but because it was opaque. That reframed the problem from 'automate reviews' to 'make automated suggestions inspectable.'",
        ],
      },
      {
        id: "decision",
        title: "Decision",
        body: [
          "We decided on a single workflow surface with AI-assisted suggestions behind explicit human-in-the-loop checkpoints — every suggestion shows its basis and is accepted or rejected by a person.",
          "Rejected alternatives: a fully automated pipeline (failed the trust test) and a thin dashboard over the existing four tools (kept the hand-off cost).",
        ],
      },
      {
        id: "system",
        title: "System",
        body: [
          "I built the design system, the review surface, and the backing services with typed OpenAPI specifications. The information architecture centers on a single reviewable record with a clear state model and recoverable transitions.",
          "Diagrams shown here are synthetic; confidential operator data is redacted.",
        ],
        image: tokentaSystem,
        imageAlt: "Fine grid of data points representing the system architecture",
      },
      {
        id: "validation",
        title: "Validation",
        body: [
          "Usability checks covered the primary review path and its failure states. I tested accessibility (keyboard paths, focus, contrast) and technical failure paths — what happens when a suggestion service is unavailable or a record is mid-transition.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: [
          "Shipped and in daily use. Four ad-hoc tools consolidated into one reviewed workflow; manual review time reduced (exact figures require verification before publication). The work continues to evolve.",
        ],
      },
      {
        id: "reflection",
        title: "Reflection",
        body: [
          "I would invest earlier in the observability of the AI suggestions — the trust win came from inspectability, and we found that late. The work reinforced that in operational domains, legibility beats automation.",
        ],
      },
    ],
    credits: {
      ownership: "Individual ownership of the design system and the AI review surface. Product strategy and operations input were collaborative.",
      collaborators: "4-person product team (product lead, two engineers).",
      tools: ["Figma", "TypeScript", "React", "OpenAPI", "Motion"],
      confidentiality: "Operator data and internal metrics are confidential; all flows and figures shown are synthetic or pending verification.",
    },
  },
};

void legacyCaseStudies;
export const caseStudies: Record<string, CaseStudy> = adaptedCaseStudies;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.enabled);
}
