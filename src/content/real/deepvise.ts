import type { Project } from './types';

export const deepvise: Project = {
  slug: 'deepvise',
  index: '03',
  name: 'DeepVise',
  tagline: 'Private Machine Intelligence & Explainable Credit Review',
  context: 'FinTechathon — FATE Federated Learning',
  accent: '--acc-deepvise',
  summary:
    'DeepVise bridges industrial press-equipment health monitoring with manufacturing credit evaluation. Using the FATE federated-learning framework, multiple enterprises train shared models without exposing raw telemetry, while advanced signal processing (WNSES) predicts remaining useful life and drives dynamic, privacy-preserving credit adjustment and asset securitization.',
  overview: 'A federated learning platform bridging industrial IoT telemetry with manufacturing credit evaluation. By processing high-frequency press-equipment vibration data locally and sharing only model weights via FATE, DeepVise enables banks to dynamically adjust credit lines based on real-time machine health while preserving enterprise data privacy.',
  metrics: [
    { label: 'Manufacturing GDP', value: '¥33.0T', type: 'measured' },
    { label: 'Industrial loan balance', value: '¥24.23T', type: 'measured' },
    { label: 'Portfolio volume', value: '¥85M', type: 'measured' },
    { label: 'Ports', value: 'Enterprise + Lender', type: 'target' },
  ],
  meta: {
    role: 'Lead Product Designer',
    team: '1 Designer, 2 Data Scientists, 1 ML Engineer',
    duration: '8 weeks',
    ownership: 'Research > Product Strategy > UX > UI Design',
    status: 'Competition Concept',
    tools: ['Figma', 'Python (FATE)', 'Data Visualization'],
  },
  decisions: [
    {
      id: 'dv-dec-01',
      question: 'How should raw machine health data be presented to financial officers?',
      evidence: 'Lenders lacked the domain expertise to interpret raw vibration data or spectral kurtosis charts.',
      alternatives: ['A. Show raw data', 'B. Abstract into a 0-100 score', 'C. Show binary healthy/unhealthy'],
      decision: 'Abstract into a 0-100 score with traffic light indicators.',
      why: 'Translates complex ML to an actionable financial risk metric that fits existing credit evaluation workflows.',
    },
    {
      id: 'dv-dec-02',
      question: 'Who initiates dynamic credit limit adjustments?',
      evidence: 'Enterprises feared that automated ML could suddenly reduce their credit lines without human oversight.',
      alternatives: ['A. Fully automatic adjustments', 'B. Bank proposes, enterprise approves', 'C. Enterprise requests based on health'],
      decision: 'Bank proposes, enterprise approves for reductions; automatic for increases.',
      why: 'Preserves trust by giving the enterprise agency over negative adjustments while automating positive ones.',
    },
  ],
  workflow: [
    { stage: 'Research', artifact: 'Financial and IoT domain research', tool: 'Literature review', judgment: 'Identified the gap between equipment depreciation and credit limits' },
    { stage: 'Architecture', artifact: 'Federated learning system map', tool: 'Diagramming', judgment: 'Selected FATE framework to ensure raw telemetry never leaves the factory' },
    { stage: 'System Design', artifact: 'Dual-port interface design', tool: 'Figma', judgment: 'Separated the industrial monitoring view from the financial portfolio view' },
    { stage: 'Prototype', artifact: 'High-fidelity dashboard', tool: 'Figma', judgment: 'Tested visualization of WNSES health indices with sample telemetry data' },
  ],
  formulas: [
    { name: 'WNSES', expr: 'κ_{l,h}(x̄_{l,h}[n]) = Σ_{n=1}^{N} NSE_{l,h}[n] × ω₁[n]^{-2}', note: 'Weighted Normalized Squared Envelope Sum. NSE is the normalized squared envelope; ω₁[n] = N · NSE_{l,h}[n] adaptively weights subtle transient bearing/motor anomalies.' },
    { name: 'FedMA', expr: 'W_q = (1/J) Σ_{j=1}^{J} W_{j,q} · Π_jᵀ', note: 'Federated Matched Averaging. A probability BBP-MAP cost matrix builds permutation matrix Π_j to align neurons, overcoming FedAvg misalignment.' },
  ],
  chapters: [
    {
      id: 'overview',
      number: '01',
      title: 'Platform Overview & Macro Context',
      images: [
        { file: 'DeepVise_01.png', title: 'Executive Platform Dashboard', caption: 'Machine P-01-042: Health Score 72/100 (Warning), vibration anomaly alert, credit-review recommendation, FATE tag.', rationale: 'Establishing the dual-domain monitoring value proposition.', tags: ['Overview'] },
        { file: 'DeepVise_02.png', title: 'Four-Panel Product Flow', caption: 'Four panels of the product flow: fleet overview, asset diagnosis (EXC-2091), a federated learning job, and portfolio review.', rationale: 'Opening with the working product instead of the market story.', tags: ['Research'] },
        { file: 'DeepVise_03.png', title: 'Project Process Board', caption: 'The project process board: Frame / Design / Model / Build / Validate — WeBank FinTech Competition, solo product designer.', rationale: 'Process made visible as a board, not a claim.', tags: ['Structure'] },
        { file: 'DeepVise_04.png', title: 'Machine Health Becomes a Trust Signal', caption: 'A five-step boundary diagram: machine health (score 83/100, v1.4.2) turned into a trust signal a lender can use.', rationale: 'The core idea of DeepVise in one diagram.', tags: ['Research'] },
        { file: 'DeepVise_05.png', title: 'Demo Prototype — 75-Second Video Frame', caption: 'A frame from the 75-second demo-prototype video: Factory Command Center overview (92.4% / 94.6%).', rationale: 'A running prototype carries more weight than a mockup.', tags: ['Compliance'] },
        { file: 'DeepVise_06.png', title: 'A Press Does Not Fail as a Dashboard Event', caption: 'An annotated press photograph with six sensor points and the consequence chain of a failure.', rationale: 'Failure starts in the physical world, not the dashboard.', tags: ['Strategy'] },
      ],
    },
    {
      id: 'pain-points',
      number: '02',
      title: 'Dual Pain-Point Analysis',
      images: [
        { file: 'DeepVise_07.png', title: 'Factory Pain System — The Failure Loop', caption: 'The factory side of the pain system: the failure loop as printed (slide 07).', rationale: 'Mapping the loop before proposing the break in it.', tags: ['Research'] },
        { file: 'DeepVise_08.png', title: 'Lender Visibility Gap', caption: 'Dual timeline: periodic lender reviews versus the continuous events they miss.', rationale: 'The gap is temporal — reviews are snapshots, failures are streams.', tags: ['Research'] },
        { file: 'DeepVise_09.png', title: 'The Privacy Barrier', caption: 'Central data lake rejected versus privacy-preserving federation — the barrier and the way around it.', rationale: 'Privacy is the constraint that shaped the architecture.', tags: ['Research'] },
      ],
    },
    {
      id: 'architecture',
      number: '03',
      title: 'System & FATE Architecture',
      images: [
        { file: 'DeepVise_10.png', title: 'Stakeholder Ecosystem', caption: 'Five accountable roles arranged around governed, derived signals.', rationale: 'Ecosystem first: every role sees only what it is accountable for.', tags: ['Architecture'] },
        { file: 'DeepVise_11.png', title: 'Decision-Focused User Profiles', caption: 'User profiles organised by the decisions each role must make, with evidence-in and privacy boundaries.', rationale: 'Profiles written around decisions, not demographics.', tags: ['Architecture'] },
        { file: 'DeepVise_12.png', title: 'Research and Evidence Synthesis', caption: 'The research and evidence synthesis behind the reconstruction.', rationale: 'Synthesis before screens.', tags: ['Architecture'] },
      ],
    },
    {
      id: 'dual-port',
      number: '04',
      title: 'Dual-Port Product UI',
      images: [
        { file: 'DeepVise_13.png', title: 'Challenge Statement and Success Criteria', caption: 'Act III as printed: the challenge statement — "How might one privacy-preserving system help factories act on machine risk earlier and help lenders review productive-asset risk with fresher evidence?" — with five success criteria and their evidence statuses; the finance criterion is labelled on the slide as a product layer added by the team, outside the core challenge text.', rationale: 'A broad competition direction turned into a focused, auditable product mandate.', tags: ['Strategy'] },
        { file: 'DeepVise_14.png', title: 'Product North Star Loop', caption: 'The North Star loop: Detect / Understand / Act / Learn / Review. (The role-selection screen itself is slide 28.)', rationale: 'A loop as the product’s north star, not a funnel.', tags: ['Security'] },
        { file: 'DeepVise_15.png', title: 'Lending Institution Overview', caption: 'Portfolio ¥85M, avg rate 4.85%, 12 active enterprises, risk breakdown.', rationale: 'Multi-company portfolio monitoring.', tags: ['UI'] },
        { file: 'DeepVise_16.png', title: 'Information Architecture', caption: 'The DeepVise information architecture sitemap (slide 16).', rationale: 'The sitemap is where the dual-port structure becomes concrete.', tags: ['Product'] },
        { file: 'DeepVise_17.png', title: 'Factory Critical Task Flow', caption: 'Eight states from signal to scheduled work for machine MX-2471.', rationale: 'The factory’s critical path, state by state.', tags: ['UI'] },
      ],
    },
    {
      id: 'health-science',
      number: '05',
      title: 'Equipment Health Science & Math',
      images: [
        { file: 'DeepVise_18.png', title: 'Lender Critical Task Flow', caption: 'The lender’s critical task flow; its header carries the CNY 85M portfolio figures (85M / 4.85% / 12 enterprises).', rationale: 'The lender flow is a monitoring loop, not an application form.', tags: ['Section'] },
        { file: 'DeepVise_19.png', title: 'Data-to-Credit Decision Flow', caption: 'How machine data becomes a credit decision, step by step.', rationale: 'The decision flow is the product’s real interface.', tags: ['Engineering'] },
        { file: 'DeepVise_20.png', title: 'Scope and Build Timeline', caption: 'Scope and build timeline for the reconstruction.', rationale: 'Scope stated as a timeline, with the cuts visible.', tags: ['Engineering'] },
        { file: 'DeepVise_21.png', title: 'Act IV — Risk Register', caption: 'The Act IV risk register. No formulas are printed on this slide; the spectral features appear on slide 32.', rationale: 'Risks registered in the open, in the deck’s final act.', tags: ['Math'] },
        { file: 'DeepVise_22.png', title: 'Early Sketches and Decision Models', caption: 'Twelve panels of early sketches and decision models — two explicitly marked Rejected.', rationale: 'Rejected directions kept in the record.', tags: ['Math'] },
        { file: 'DeepVise_23.png', title: 'Low-Fidelity Wireframe System', caption: 'The low-fidelity wireframe system: four domains across screens and states.', rationale: 'Wireframes as a system, not a pile of screens.', tags: ['Math'] },
      ],
    },
    {
      id: 'training',
      number: '06',
      title: 'Diagnostics & Federated Training',
      images: [
        { file: 'DeepVise_24.png', title: 'Fault Diagnostics & Alert Engine', caption: 'Multi-level thresholds (Notice → Warning → Critical) with recommendations.', rationale: 'Actionable maintenance UX.', tags: ['UI'] },
        { file: 'DeepVise_25.png', title: 'Brand & Visual System', caption: 'The brand and visual system board — “From purple concept to product credibility” (Compressor Train 7A).', rationale: 'The visual system had to make an industrial product credible.', tags: ['Engineering'] },
        { file: 'DeepVise_26.png', title: 'Design System Board', caption: 'The full design-system board: foundations, app shell, data display, decision components, states and accessibility. Its what-if sliders print inputs only — no result is claimed.', rationale: 'A design system board that refuses to invent its outcomes.', tags: ['Math'] },
        { file: 'DeepVise_27.png', title: 'Marketing Hero — Dual Workspace Entry', caption: 'The marketing hero with dual workspace entry (Asset health 87/100, Press Line 1).', rationale: 'Two audiences, two doors, one product.', tags: ['Math'] },
        { file: 'DeepVise_28.png', title: 'Role and Permission Selection', caption: 'The actual role and permission selection screen (printed slide 28).', rationale: 'Role selection is the security model made visible.', tags: ['Architecture'] },
        { file: 'DeepVise_29.png', title: 'Factory Command Center', caption: 'Factory Command Center dashboard: “3 assets need attention”, P-01-042 health 22, 15.7h exposure.', rationale: 'The command center is the factory’s daily front page.', tags: ['Architecture'] },
        { file: 'DeepVise_30.png', title: 'Multi-Factory Asset Overview', caption: 'Multi-factory asset overview with federation participation across Factories A–E.', rationale: 'Federation visible at portfolio altitude.', tags: ['Product'] },
      ],
    },
    {
      id: 'governance',
      number: '07',
      title: 'Governance, Privacy & ABS',
      images: [
        { file: 'DeepVise_31.png', title: 'Machine Health — P-01-042', caption: 'Machine health detail for P-01-042: Health 72/100, Warning — the same machine as the opening dashboard.', rationale: 'One machine followed through the whole story.', tags: ['Section'] },
        { file: 'DeepVise_32.png', title: 'Sensor Diagnostics', caption: 'Sensor diagnostics: five normalized tracks, a spectrogram, and derived-feature thresholds (Spectral Kurtosis 2.76 > 2.00, as printed).', rationale: 'Diagnostics close the loop back to the signal.', tags: ['Architecture'] },
      ],
    },
  ],
};
