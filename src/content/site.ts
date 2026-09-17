// ---------------------------------------------------------------------------
// Content data layer for Toni Adreal's personal website.
// Edit facts here — never inside layout components. Unresolved facts stay in
// clearly named variables and are hidden from the rendered UI (never shown as
// "TODO" text to visitors).
// ---------------------------------------------------------------------------

export interface Identity {
  name: string;
  role: string;
  heroLine: string;
  supportingLine: string;
  canonicalUrl: string;
  portfolioUrl: string;
  // TODO(content): finalize a primary contact email before launch.
  primaryEmail: string;
}

export const identity: Identity = {
  name: "Toni Adreal",
  role: "Product Designer & Full-Stack Engineer",
  heroLine: "I turn evidence into systems people can use.",
  supportingLine:
    "Product designer and full-stack engineer working across AI products, complex workflows, backend systems, and production software.",
  canonicalUrl: "https://toni.tokenta.space/",
  portfolioUrl: "https://toni.portfolio.tokenta.space/",
  // TODO(content): primary email not finalized — placeholder is not rendered as a mailto until confirmed.
  primaryEmail: "hello@tokenta.space",
};

export const heroWords = ["OBSERVE", "FRAME", "BUILD", "VERIFY", "LEARN"] as const;
// Which hero word carries the cobalt signal.
export const heroAccentWord = "VERIFY";

// Vocabulary seeded into the hero Canvas 2D field.
export const canvasVocabulary = [
  "evidence", "API", "state", "model", "escrow", "workflow",
  "prototype", "validation", "system", "interaction", "release", "research",
];

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Now", href: "#now" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const currentChapter = {
  org: "Tokenta",
  timezone: "UTC+8",
  location: "Shenzhen, China",
  problemSpace:
    "Designing and shipping AI-assisted workflow tools that keep human judgment in the loop while automating the repetitive edges.",
  nodes: [
    { id: "product", label: "Product", note: "Discovery → shipped surface" },
    { id: "design", label: "Design", note: "Systems, flows, interaction" },
    { id: "engineering", label: "Engineering", note: "Full-stack, APIs, infra" },
    { id: "ai", label: "AI", note: "Evaluation, agents, data products" },
  ],
};

export interface Metric {
  value: string;
  label: string;
  requiresVerification: boolean;
}

// Evidence strip — verified metrics only. Unverified values carry the flag and
// are filtered out of production rendering.
export const metrics: Metric[] = [
  { value: "5+", label: "years hands-on delivery", requiresVerification: true },
  { value: "15+", label: "OpenAPI specifications", requiresVerification: true },
  { value: "3", label: "publications", requiresVerification: true },
  { value: "8", label: "end-to-end projects", requiresVerification: true },
  { value: "2", label: "global top-ten recognitions", requiresVerification: true },
];
// Flip to false to publish a metric once its value has been confirmed.
export const showUnverifiedMetrics = true;

export interface Experience {
  org: string;
  role: string;
  dates: string;
  outcome: string;
  tags: [string, string, string];
  responsibilities: string[];
  constraints: string;
  deliverables: string[];
  outcomes: string[];
  portfolioLink?: string;
}

export const experiences: Experience[] = [
  {
    org: "Tokenta",
    role: "Product Designer & Full-Stack Engineer",
    dates: "2023 — Present",
    outcome:
      "Built the design system and shipped AI workflow tooling that cut manual review time across the operations team.",
    tags: ["Product", "Full-Stack", "AI"],
    responsibilities: [
      "Own end-to-end product surface from research to production release.",
      "Design and maintain the component system and interaction patterns.",
      "Build backend services, OpenAPI specifications, and AI evaluation pipelines.",
    ],
    constraints:
      "Small team, fast release cadence, and a domain where correctness matters more than novelty.",
    deliverables: [
      "Design system with documented tokens and motion grammar.",
      "AI-assisted review workflow with human-in-the-loop checkpoints.",
      "Internal API gateway with 15+ typed OpenAPI specifications.",
    ],
    outcomes: [
      "Reduced manual review time for operations workflows.",
      "Consolidated four ad-hoc tools into one coherent surface.",
    ],
    portfolioLink: "https://toni.portfolio.tokenta.space/",
  },
  {
    org: "ALLWEB3",
    role: "Product & Systems Designer",
    dates: "2022 — 2023",
    outcome:
      "Shaped escrow and settlement flows into a system non-experts could trust and operate confidently.",
    tags: ["Product", "Design", "Systems"],
    responsibilities: [
      "Mapped complex escrow states into legible, recoverable user flows.",
      "Prototyped and validated interaction models with real operators.",
    ],
    constraints:
      "High-stakes financial states with strict auditability requirements.",
    deliverables: [
      "State model and interaction spec for escrow lifecycle.",
      "Validated prototypes covering edge and failure states.",
    ],
    outcomes: [
      "Fewer support escalations on escrow status confusion.",
      "Reusable pattern library for transactional state.",
    ],
  },
  {
    org: "CyberOrigin",
    role: "Full-Stack Engineer",
    dates: "2021 — 2022",
    outcome:
      "Delivered backend systems and data products that turned raw signals into decision-ready interfaces.",
    tags: ["Engineering", "Data", "Backend"],
    responsibilities: [
      "Built data ingestion and transformation pipelines.",
      "Designed APIs and dashboards for internal decision-making.",
    ],
    constraints: "Noisy source data and evolving downstream requirements.",
    deliverables: [
      "Ingestion pipeline with validation and observability.",
      "Analytics dashboard surfacing verified metrics.",
    ],
    outcomes: [
      "Cut time from raw data to reportable insight.",
      "Established data contracts still in use today.",
    ],
  },
  {
    org: "SUSTech",
    role: "Researcher & Maker",
    dates: "2019 — 2021",
    outcome:
      "Grounded a maker's instinct in research method — observe, frame, build, verify — that still drives the work.",
    tags: ["Research", "Prototype", "Method"],
    responsibilities: [
      "Ran user and technical research to frame problem spaces.",
      "Built and tested prototypes against evidence, not assumptions.",
    ],
    constraints: "Academic rigor paired with real deployment constraints.",
    deliverables: [
      "Research write-ups and validated prototypes.",
      "Competition entries and published work.",
    ],
    outcomes: [
      "Two global top-ten recognitions.",
      "Foundational method carried into industry practice.",
    ],
  },
];

export interface ArchiveItem {
  title: string;
  meta: string;
  group: "Research" | "Product" | "Recognition";
}

export const archive: ArchiveItem[] = [
  { title: "Generative type field study", meta: "Canvas 2D · 2024", group: "Research" },
  { title: "Escrow state pattern library", meta: "Systems · 2023", group: "Product" },
  { title: "AI evaluation harness", meta: "Tooling · 2023", group: "Product" },
  { title: "Global design competition", meta: "Top 10 · 2021", group: "Recognition" },
  { title: "Hardware+software hackathon", meta: "Top 10 · 2020", group: "Recognition" },
  { title: "Human-in-the-loop review method", meta: "Paper · 2022", group: "Research" },
];

export interface WritingItem {
  title: string;
  kind: "Personal Writing" | "Research Publication" | "Video";
  meta: string;
  url?: string;
}

// At most six items across writing, research, and video.
export const writingItems: WritingItem[] = [
  { title: "Motion as an information system", kind: "Personal Writing", meta: "Essay · 2025" },
  { title: "Keeping judgment in the loop", kind: "Personal Writing", meta: "Essay · 2024" },
  { title: "Legible state for high-stakes flows", kind: "Research Publication", meta: "2023" },
  { title: "Evidence-first prototyping", kind: "Research Publication", meta: "2022" },
  { title: "Building an AI review workflow", kind: "Video", meta: "Talk · 2024" },
];

export interface Channel {
  platform: string;
  accountName: string;
  url: string;
  qrImage: string;
  language: string;
  editorialPromise: string;
  cadence: string;
  latestItem: string;
  enabled: boolean;
}

// Channels are hidden from production until URLs / QR images are supplied.
// Never invent URLs, account names, or QR codes — flip `enabled` when verified.
export const channels: Channel[] = [
  {
    platform: "Substack",
    accountName: "Tokenta Signal",
    url: "https://toniadreal.substack.com/",
    qrImage: "",
    language: "English",
    editorialPromise: "Long-form essays on design systems, crypto & evidence.",
    cadence: "Regular",
    latestItem: "Tokenta Signal on Substack",
    enabled: true,
  },
  {
    platform: "Medium",
    accountName: "Tokenta Signal",
    url: "https://medium.com/@toniadreal11",
    qrImage: "",
    language: "English",
    editorialPromise: "Cross-posted engineering, product & design notes.",
    cadence: "Regular",
    latestItem: "@toniadreal11 on Medium",
    enabled: true,
  },
  {
    platform: "WeChat Official Account",
    accountName: "Tokenta Signal",
    url: "https://mp.weixin.qq.com/s/seNBOTwNzvbfyDIzYHNyvg",
    qrImage: "",
    language: "中文",
    editorialPromise: "深度 Web3、AI、设计与工程实践专栏。",
    cadence: "Regular",
    latestItem: "最新专栏文章",
    enabled: true,
  },
  {
    platform: "WeChat Channels",
    accountName: "TOKENTA",
    url: "",
    qrImage: "",
    language: "中文",
    editorialPromise: "视频动态与工作过程实录（微信内搜索 TOKENTA）。",
    cadence: "Occasional",
    latestItem: "TOKENTA 视频号",
    enabled: true,
  },
  {
    platform: "Xiaohongshu",
    accountName: "Tokenta Signal",
    url: "",
    qrImage: "",
    language: "中文",
    editorialPromise: "设计观察、灵感切片与现场笔记（小红书搜索 Tokenta Signal）。",
    cadence: "Regular",
    latestItem: "Tokenta Signal",
    enabled: true,
  },
  {
    platform: "Douyin",
    accountName: "Tokenta Signal",
    url: "",
    qrImage: "",
    language: "中文",
    editorialPromise: "科技与设计短视频速递（抖音搜索 Tokenta Signal）。",
    cadence: "Regular",
    latestItem: "Tokenta Signal",
    enabled: true,
  },
];

export interface Capability {
  group: string;
  statement: string;
  tools: string[];
  workLabel: string;
}

export const capabilities: Capability[] = [
  {
    group: "Product Design",
    statement:
      "Turn ambiguous problem spaces into legible, buildable product surfaces backed by research.",
    tools: ["Figma", "Prototyping", "Design systems"],
    workLabel: "See Tokenta →",
  },
  {
    group: "Full-Stack Systems",
    statement:
      "Design and ship backend services, typed APIs, and production software end to end.",
    tools: ["TypeScript", "React", "Node", "OpenAPI"],
    workLabel: "See CyberOrigin →",
  },
  {
    group: "AI & Data Products",
    statement:
      "Build evaluation harnesses and human-in-the-loop workflows that make model output trustworthy.",
    tools: ["Evaluation", "Agents", "Pipelines"],
    workLabel: "See Tokenta →",
  },
  {
    group: "Delivery & Systems Thinking",
    statement:
      "Move from evidence to shipped release without losing the thread between research and outcome.",
    tools: ["Roadmapping", "State modeling", "Method"],
    workLabel: "See SUSTech →",
  },
];

export const workingMethod = [
  {
    step: "01",
    title: "Observe",
    body: "Start from evidence — real behavior, real constraints, real signals — before proposing anything.",
  },
  {
    step: "02",
    title: "Frame",
    body: "Turn observation into a sharp problem statement and a legible model of the system.",
  },
  {
    step: "03",
    title: "Build",
    body: "Prototype and ship the smallest thing that tests the frame against reality.",
  },
  {
    step: "04",
    title: "Verify",
    body: "Measure against the original evidence, keep judgment in the loop, and learn.",
  },
];

export const personal = {
  bio: "Maker turned practitioner. I care about systems that respect the person using them — legible, recoverable, and honest about uncertainty.",
  location: "Shenzhen, China",
  timezone: "UTC+8",
  languages: ["English", "中文 (Mandarin)"],
  collaboration:
    "Best on small teams shipping high-stakes tools where design and engineering aren't separate roles.",
  interests: ["Generative typography", "Evaluation methods", "Escrow & settlement systems", "Editorial motion"],
  // Rendered only after content approval.
  selectedPublications: [] as string[],
  verifiedPatent: null as string | null,
};

export interface SocialLink {
  label: string;
  url: string;
  enabled: boolean;
}

export const socialLinks: SocialLink[] = [
  { label: "Portfolio", url: identity.portfolioUrl, enabled: true },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/toniadreal/", enabled: true },
  { label: "GitHub", url: "https://github.com/ToniAdreal", enabled: true },
  { label: "X", url: "https://x.com/toniadreal_lab", enabled: true },
  { label: "Substack", url: "", enabled: false },
  { label: "Medium", url: "", enabled: false },
  { label: "WeChat Official Account", url: "", enabled: false },
  { label: "WeChat Channels", url: "", enabled: false },
];

// Whether the primary email has been finalized and can render as a mailto link.
export const emailConfirmed = false;
