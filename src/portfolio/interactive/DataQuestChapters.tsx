import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";

/**
 * Bespoke rebuilds of DataQuest / CyberOrigin screens transcribed from
 * the actual image files CyberOrigin_01–14, 17–25, 27–40 (15, 16, 26
 * live in ProjectScreens.tsx, keyed by data title).
 *
 * CAPTION <-> IMAGE MISMATCHES (data titles in cyberorigin.ts vs what
 * the images actually show — captions/data were NOT rewritten):
 *  02 "Platform Ecosystem Map" -> Implemented prototype architecture
 *  03 "Core Value Propositions" -> The embodied-AI data loop
 *  04 "Cross-Platform Experience" -> CyberOrigin ecosystem diagram
 *  05 "The AI Training Pipeline" -> Initial responsive web prototype (V0)
 *  06 "User Demographics & Behaviors" -> What the first prototype resolved and exposed
 *  07 "Persona: The Gig Contributor" -> Contributor journey (9 steps; printed
 *     note: evidence-based hypotheses in the absence of formal user interviews)
 *  08 "Persona: The AI Researcher" -> Data lifecycle and quality model
 *  09 "Persona: The QA Specialist" -> Low-fidelity exploration (wireframe wall)
 *  10 "Journey Mapping: First Capture" -> Mobile home screen (phone)
 *  11 "Global Information Architecture" -> Solo ownership timeline (2025)
 *  12 "User Flow: Task Discovery & Acceptance" -> What the product must explain
 *     before capture (Trust contract)
 *  13 "User Flow: Guided Data Capture" -> Data bottleneck map
 *  14 "User Flow: The Review Process" -> Value exchange
 *  17 "Pre-flight Context Setup" -> Profile & Wallet (V0, Historical)
 *  18 "Augmented Reality Guidance" -> Evidence and claim map
 *  19 "Post-Capture Review & Trim" -> Naming and reward cleanup
 *  20 "Earnings & Reputation Wallet" -> Role and job map (5 roles)
 *  21 "Multi-Tier Role Hierarchy" -> Contributor journey (detailed, with
 *     drop-off risks and trust signals)
 *  22 "Job Map: Kitchen Interaction Tasks" -> From broad browsing to bounded
 *     task completion (Before / After)
 *  23 "Job Map: Locomotion & Navigation" -> Product principles
 *  24 "Job Map: Device & Appliance Usage" -> Scope map
 *  25 "Skill Verification Flows" -> Data lifecycle (9 stages + ownership lane)
 *  27 "Video Annotation & Scrubbing Tools" -> Quality score model
 *  28 "Feedback Construction Interface" -> Reward calculation (printed
 *     example $1.50 x 1.20 x 1.10 x 1.15 x 1.30 x 1.25 - 0% = $2.78 is
 *     transcribed verbatim; the printed factors multiply to $3.70, an
 *     internal inconsistency in the source — no live calculator built,
 *     following the Next Card file-17 precedent)
 *  29 "Marketplace Supply/Demand Analytics" -> Ledger and settlement flow
 *  30 "Dispute Resolution Center" -> Reward model options
 *  31 "Core Aesthetic Concept" -> DataQuest Information Architecture
 *  32 "Color Palette & Typography" -> DataQuest Task Taxonomy
 *  33 "Component Library: Mobile" -> Component Library (full board; closest match)
 *  34 "Component Library: Web Dashboard" -> Conceptual Object Model
 *  35 "Iconography & Feedback States" -> Low-fidelity exploration board
 *     (street-view variant of file 09's board)
 *  36 "High-Level System Architecture" -> Task card comparison (co-dq-30)
 *  37 "Real-Time Edge Processing" -> Contributor flow: Capture task (wireflow)
 *  38 "Data Privacy & Anonymization" -> Decision log (co-dq-32)
 *  39 "Performance Optimization Metrics" -> Evolution of a unified system
 *  40 "Future Roadmap & Vision" -> Visual Foundations (design system)
 * Deck language: white / pale-lavender paper, violet-to-blue gradient
 * accent (#6C3BFF -> #2563EB, from CyberOrigin_40), rounded cards.
 */

const ACC = "#5b3df5";

function Dq({ n, title, sub, children, label, foot }: { n: string; title: string; sub?: string; children: ReactNode; label: string; foot?: string }) {
  return <div className="tks" role="region" aria-label={label} style={{ background: "#f8f7ff" }}>
    <div className="tks-head"><span><b>⬡ CyberOrigin</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 40</span><span className="tks-brand" style={{ fontSize: 12, color: ACC }}>DataQuest</span></div>
    <h3 style={{ fontSize: 44 }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
    <div className="tks-foot"><span>DataQuest by CyberOrigin</span><span>{foot ?? "Human-action data marketplace for embodied AI"}</span></div>
  </div>;
}

function Chips({ items, value, onPick }: { items: string[]; value: number; onPick: (i: number) => void }) {
  return <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group">{items.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === value} onClick={() => onPick(i)}>{s}</button>)}</div>;
}

function Flow({ steps, s, setS }: { steps: Array<[string, string]>; s: number; setS: (i: number) => void }) {
  return <>
    <div className="tks-flow" role="group">{steps.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{i + 1} {t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite">{steps[s][1]}</div>
  </>;
}

/* ---------------- 01 — Hero ---------------- */
const HERO_STEPS: Array<[string, string]> = [
  ["Discover tasks", "Browse and filter tasks that match your interests and environment. Mobile Discover feed as printed: Contributor balance $128.45 USD · Lifetime earnings $1,428.70 · filters All / Recommended / Nearby / Wearable."],
  ["Capture with guidance", "Follow step-by-step instructions and real-time hints for high-quality data. Capture screen as printed: Kitchen action capture · Step 2 of 6 · “Chop the vegetable — Use a clear cutting motion. Keep hands and tools in view.” · Quality hints: Lighting Good · Stability Good · View Good."],
  ["Track rewards", "Monitor your earnings, activity, and impact with full transparency. Web Overview (app.dataquest.cyberorigin.ai) as printed: Wallet balance $128.45 · Pending rewards $42.75 (In review) · Lifetime earnings $1,428.70 · Tasks completed 47 total — Approved 28 · In review 12 · Rejected 7."],
];
const HERO_TASKS: Array<[string, string, string]> = [
  ["Kitchen action capture", "Record cooking actions and interactions.", "20–30 min · $12.50 · FEATURED"],
  ["Outdoor walking", "Capture walking in different environments.", "30–45 min · $10.00"],
  ["Wearable device tasks", "Record gestures and device interactions.", "15–20 min · $8.50"],
];
export function DataQuestHero() {
  const [s, setS] = useState(1);
  const [t, setT] = useState(0);
  return <Dq n="01" title="DataQuest" sub="Human-action data marketplace for embodied AI. — Real people. Real actions. · Guided capture. High quality data. · Fair rewards. Transparent tracking." label="DataQuest hero — interactive rebuild of CyberOrigin_01">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{HERO_TASKS.map(([name, body, meta], i) => <button key={name} type="button" className={`tks-card${i === t ? " is-on" : ""}`} aria-pressed={i === t} onClick={() => setT(i)}><b>{name}</b><p style={{ color: "#555", margin: "4px 0" }}>{body}</p><p className="tks-kicker" style={{ margin: 0 }}>{meta}</p></button>)}</div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>How it works — step through</p>
    <Flow steps={HERO_STEPS} s={s} setS={setS} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Recent activity (web overview, as printed)</p>
      <p style={{ margin: 0 }}>Kitchen action capture — Task completed · <span className="tks-ver">Approved</span> · +$12.50 · Today, 9:41 AM<br />Outdoor walking — Task completed · In review · +$10.00 · Yesterday, 6:21 PM<br />Wearable device tasks — Task submitted · In review · +$8.50 · May 16, 3:15 PM · Alex Morgan, Contributor</p></div>
  </Dq>;
}

/* ---------------- 02 — Implemented prototype architecture ---------------- */
const STACK: Array<[string, string, string]> = [
  ["HTML pages", "Semantic, accessible markup for all screens and components.", "HTML5"],
  ["Shared CSS", "Design system tokens, components, layout utilities, and global styles.", "CSS3"],
  ["Page-specific CSS", "Scoped styles for individual pages and unique components.", "CSS3"],
  ["Shared script", "Common behaviors, UI components, state helpers, and utilities.", "Vanilla JS"],
  ["Upload simulation", "Client-side file selection, progress, validation, and success states.", "JS + File API"],
  ["Profile interactions", "Profile form handling, preferences, activity list, and settings.", "Vanilla JS"],
  ["Browser APIs", "Local storage, device info, media queries, and file APIs.", "Web APIs"],
  ["Media assets", "Images, illustrations, icons, and fonts.", "Assets"],
];
const FEATURES2: Array<[string, string, string]> = [
  ["Marketplace (Discover tasks)", "Browse, filter, and search tasks. Task cards and category chips.", "HTML + CSS + JS"],
  ["Task detail", "Task overview, requirements, steps, and reward breakdown.", "HTML + CSS + JS"],
  ["Profile", "Edit profile, preferences, and view activity history.", "HTML + CSS + JS"],
  ["Upload simulation", "File selection, progress bar, and completion feedback.", "JS + File API"],
  ["Earnings chart", "Interactive line chart with time range selector.", "JS + Canvas API"],
  ["Responsive styling", "Fluid layouts and breakpoints for all screen sizes.", "CSS + Media Queries"],
  ["Mobile design artifacts", "Mobile-first layouts and touch-optimized interactions.", "HTML + CSS + JS"],
];
export function DataQuestPrototypeArchitecture() {
  const [tab, setTab] = useState(0);
  const [row, setRow] = useState(0);
  const list = tab === 0 ? STACK : FEATURES2;
  const cur = list[Math.min(row, list.length - 1)];
  return <Dq n="02" title="Implemented prototype architecture" sub="Front-end prototype boundary — no production backend integration." label="DataQuest implemented prototype architecture — interactive rebuild of CyberOrigin_02" foot="Prototype boundary — No backend services or server-side logic">
    <Chips items={["Front-end stack (prototype)", "Product features & pages (visible in prototype)"]} value={tab} onPick={(i) => { setTab(i); setRow(0); }} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div>{list.map(([name], i) => <p key={name} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{name}</button></p>)}</div>
      <div className="tks-card" aria-live="polite"><b>{cur[0]}</b><p style={{ color: "#555", margin: "5px 0" }}>{cur[1]}</p><span className="tks-tag">{cur[2]}</span>
        <p className="tks-kicker" style={{ margin: "8px 0 0" }}>{tab === 0 ? "Front-end building block (implemented) — powers / enables →" : "Product feature (visible in prototype)"}</p></div>
    </div>
  </Dq>;
}

/* ---------------- 03 — The embodied-AI data loop ---------------- */
const LOOP: Array<[string, string]> = [
  ["Task specification", "Define objectives, success criteria, and constraints."],
  ["Human action", "Experts perform tasks in real environments."],
  ["Multimodal capture", "Record video, audio, sensor and robot state data."],
  ["Validation", "Check data quality, safety, and completeness."],
  ["Annotation", "Add structured labels, segments, and metadata."],
  ["Training", "Train models on curated, high-quality data."],
  ["Model evaluation", "Measure performance and identify gaps."],
  ["Revised task", "Refine objectives and iterate for continuous improvement."],
];
export function DataQuestDataLoop() {
  const [s, setS] = useState(0);
  return <Dq n="03" title="The embodied-AI data loop" sub="How real-world actions become usable robotics training data. DataQuest is the contributor workflow layer." label="DataQuest embodied-AI data loop — interactive rebuild of CyberOrigin_03">
    <Flow steps={LOOP} s={s} setS={setS} />
    <p style={{ display: "flex", gap: 6, marginTop: 10 }}><button type="button" className="tks-btn tks-btn--ghost" disabled={s === 0} onClick={() => setS((v) => v - 1)}>← Previous step</button><button type="button" className="tks-btn" disabled={s >= LOOP.length - 1} onClick={() => setS((v) => v + 1)}>Next step →</button></p>
    <p style={{ color: "#555", margin: "8px 0 0" }}>DataQuest enables every step inside the loop — guiding capture, ensuring quality, and turning real-world actions into trusted training data.</p>
  </Dq>;
}

/* ---------------- 04 — CyberOrigin ecosystem ---------------- */
const ECO_CAPTURE: Array<[string, string]> = [
  ["Motion & gestures", "Hand, finger and wrist kinematics at high fidelity."],
  ["Eye & head tracking", "Gaze, head pose and attention signals."],
  ["Voice & audio", "Natural language, intent and audio context."],
  ["Environment context", "Scene, objects, tools and interactions."],
  ["Body & movement", "Full-body motion and pose when needed."],
];
const ECO_CORE: Array<[string, string]> = [
  ["People", "Global contributors and experts"], ["Tasks", "Human actions and interactions"],
  ["Quality", "Standards, reviews and validation"], ["Rewards", "Earnings, bonuses and leaderboards"],
  ["Smart task discovery", "Match contributors to the right tasks."], ["Guided capture", "Step-by-step instructions and real-time hints."],
  ["Fair rewards", "Transparent payouts and performance incentives."], ["Real-time guidance", "In-app hints and visual feedback."],
  ["Performance insights", "Quality scores and progress tracking."], ["Community & trust", "Reputation, badges and trust signals."],
];
const ECO_OUT: Array<[string, string]> = [
  ["Datasets", "High-quality, structured, multi-modal datasets. · Ready for training · Versioned & traceable"],
  ["Annotation", "Accurate labels, segments and metadata. · 2D/3D, video, sensor · Consistent & scalable"],
  ["Robotics training", "Data for imitation learning, reinforcement learning and simulation. · Behavior cloning · Policy optimization"],
  ["Enterprise delivery", "Secure, compliant data and integrations. · API & SDK access · On-prem or cloud"],
];
const ECO_PIPE: Array<[string, string]> = [
  ["Teleoperation & remote assist", "Experts can guide or perform tasks in real time for complex scenarios."],
  ["Quality assessment", "Automated checks · Peer review · Expert validation · Anomaly detection"],
  ["Data refinement", "Clean, deduplicate and enrich data for consistency and relevance."],
  ["Model training & evaluation", "Train, evaluate and benchmark models on high-quality data."],
  ["Feedback loop", "Model and performance feedback improves tasks, guidance and future captures."],
];
export function DataQuestEcosystem() {
  const [g, setG] = useState(0);
  const [row, setRow] = useState(0);
  const groups: Array<[string, Array<[string, string]>]> = [["CyberGlove & human capture", ECO_CAPTURE], ["DataQuest contributor marketplace", ECO_CORE], ["Outputs", ECO_OUT], ["Supporting pipeline", ECO_PIPE]];
  const list = groups[g][1];
  const cur = list[Math.min(row, list.length - 1)];
  return <Dq n="04" title="CyberOrigin ecosystem" sub="DataQuest is the contributor and workflow layer inside a broader robotics-data system. Workflow orchestration: Task intake & design → Task publishing & routing → Execution & capture → Quality review & QA → Approval & payout." label="CyberOrigin ecosystem — interactive rebuild of CyberOrigin_04" foot="Security, privacy & compliance at every layer · Encryption in transit and at rest · Consent & data rights · SOC 2 Type II ready">
    <Chips items={groups.map(([n]) => n)} value={g} onPick={(i) => { setG(i); setRow(0); }} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div>{list.map(([name], i) => <p key={name} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{name}</button></p>)}</div>
      <div className="tks-card" aria-live="polite"><b>{cur[0]}</b><p style={{ color: "#555", margin: "5px 0 0" }}>{cur[1]}</p><p className="tks-kicker" style={{ margin: "8px 0 0" }}>Secure capture · Edge processing · Privacy by design</p></div>
    </div>
  </Dq>;
}

/* ---------------- 05 — Initial responsive web prototype ---------------- */
const V0_CATS: Array<[string, string, string]> = [
  ["Image Capture", "Capture real-world images based on specific guidelines.", "$0.20–$2.50 / task"],
  ["Location Verification", "Verify places, addresses, and points of interest.", "$0.30–$1.50 / task"],
  ["Text & OCR", "Transcribe text, signage, and documents.", "$0.10–$0.60 / task"],
  ["Audio Recording", "Record ambient audio or spoken content.", "$0.20–$1.20 / task"],
  ["Video Capture", "Record short videos from specified scenarios.", "$0.50–$3.00 / task"],
  ["Survey & Annotation", "Answer surveys and annotate data.", "$0.05–$0.40 / task"],
];
export function DataQuestInitialPrototype() {
  const [p, setP] = useState(0);
  const panels = ["Marketplace", "Task detail", "Profile & wallet", "Company context"];
  return <Dq n="05" title="Initial responsive web prototype" sub="Early prototype exploring core flows for data collection, task completion, contributor profiles, and platform context. · Historical · V0" label="DataQuest initial responsive web prototype — interactive rebuild of CyberOrigin_05">
    <Chips items={panels} value={p} onPick={setP} />
    <div className="tks-detail" aria-live="polite">
      {p === 0 && <><b>Marketplace</b> — Browse data collection tasks and earn rewards.<div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 8 }}>{V0_CATS.map(([n, b, price]) => <div key={n} className="tks-card"><b>{n}</b><p style={{ color: "#555", margin: "3px 0" }}>{b}</p><span style={{ color: ACC, fontWeight: 700 }}>{price}</span></div>)}</div></>}
      {p === 1 && <><b>Task detail — Urban Street Scene</b> (Image Capture). Capture a street scene that includes storefronts, pedestrian activity, and vehicles. Requirements: Take a clear, in-focus photo · Include at least 2 storefronts · Capture pedestrians or vehicles · No sensitive or private information · Good lighting and minimal blur. Reward <b>$1.20</b> per approved task. Leaderboard (This week): 1 Sarah J. $245.60 · 2 Mike T. $198.30 · 3 Alex M. $176.30 · 4 Priya K. $154.20 · 5 You $87.40. Recent submissions: Jamie L. Approved 2m ago · Tony R. In review 15m ago · You Submitted Just now. Upload: Drag and drop image here, or click to browse — JPG or PNG, up to 10MB.</>}
      {p === 2 && <><b>Profile & wallet</b> — Overview · Welcome back, Alex. Wallet balance $128.45 USD (Withdraw) · Pending rewards $42.75 (In review) · Lifetime earnings $1,428.70 (View breakdown →). Activity: Urban Street Scene Approved Today 9:41 AM · Storefront Capture In review Yesterday 4:22 PM · Receipt OCR Approved May 16, 2:15 PM · Park Environment Rejected May 15, 11:08 AM.</>}
      {p === 3 && <><b>Company context</b> — “High-quality human data for AI that performs in the real world.” DataQuest by CyberOrigin connects a global community of contributors with organizations building more accurate, ethical, and trustworthy AI. Human accuracy — Real people, real insights. · Diverse coverage — Global scale, local context. · Quality first — Rigorous review and validation. Stats as printed: <b>10M+</b> Tasks completed · <b>50K+</b> Active contributors · <b>180+</b> Countries · <b>98%</b> Approval accuracy.</>}
    </div>
  </Dq>;
}

/* ---------------- 06 — What the first prototype resolved and exposed ---------------- */
const RESOLVED: Array<[string, string]> = [
  ["Category discovery", "Users can browse and filter categories that match their interests and environment."],
  ["Task requirements", "Tasks include clear instructions, examples, and acceptance criteria."],
  ["Upload entry", "Contributors can capture, review, and submit entries with media and basic metadata."],
  ["Contributor account", "Profile setup, identity, and activity history provide a foundation for participation."],
  ["Reward visibility", "Wallet balance, pending rewards, and earnings overview are visible and easy to access."],
];
const EXPOSED: Array<[string, string]> = [
  ["Inconsistent reward units", "USD and token-based values appear together without clear conversion or standard."],
  ["Broad task definitions", "Many tasks are too broad, making it hard to define quality and completion."],
  ["Missing verification states", "No clear visibility into review progress, approval, or rejection rationale."],
  ["Mixed branding", "Inconsistent use of color, typography, and icons across screens and components."],
  ["Incomplete routes", "Several flows lack defined end states, empty states, and error handling."],
  ["No persistent service", "No background capture, sync, or offline support for real-world conditions."],
];
export function DataQuestResolvedExposed() {
  const [tab, setTab] = useState(0);
  const [row, setRow] = useState(0);
  const list = tab === 0 ? RESOLVED : EXPOSED;
  const cur = list[Math.min(row, list.length - 1)];
  return <Dq n="06" title="What the first prototype resolved and exposed" sub="Audit summary of what's working, what's unclear, and what needs to be addressed next." label="DataQuest prototype audit — interactive rebuild of CyberOrigin_06" foot="Next step: move from broad data categories to specific, completable, verifiable human-action tasks">
    <Chips items={["✓ Resolved (5)", "⚠ Exposed (6)"]} value={tab} onPick={(i) => { setTab(i); setRow(0); }} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div>{list.map(([name], i) => <p key={name} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{name}</button></p>)}</div>
      <div className="tks-card" aria-live="polite" style={tab === 1 ? { borderColor: "#e05260" } : undefined}><b>{cur[0]}</b><p style={{ color: "#555", margin: "5px 0 0" }}>{cur[1]}</p></div>
    </div>
  </Dq>;
}

/* ---------------- 07 — Contributor journey ---------------- */
const JOURNEY7: Array<[string, string]> = [
  ["Discover", "Find tasks that match your interests and environment."],
  ["Assess eligibility", "Confirm your eligibility and review basic requirements."],
  ["Understand requirements", "Review task details, instructions, and quality standards."],
  ["Capture", "Capture the required data following step-by-step guidance."],
  ["Pre-check", "Review your capture against automated quality checks."],
  ["Upload", "Upload your data securely for processing."],
  ["Verification", "Our team verifies your submission for accuracy and quality."],
  ["Reward", "Earn rewards and track your impact and performance."],
  ["History / appeal", "View your history and appeal any decisions if needed."],
];
export function DataQuestJourneySimple() {
  const [s, setS] = useState(0);
  return <Dq n="07" title="Contributor journey" sub="Evidence-based product hypotheses in the absence of formal user interviews." label="DataQuest contributor journey — interactive rebuild of CyberOrigin_07" foot="Built on trust and transparency — Clear guidelines, fair reviews, and secure data handling at every step">
    <Flow steps={JOURNEY7} s={s} setS={setS} />
  </Dq>;
}

/* ---------------- 08 — Data lifecycle and quality model ---------------- */
const LIFECYCLE8: Array<[string, string, string, string, string]> = [
  ["Task request", "Requester", "Your task request has been received.", "Define requirements and submit", "Request logged (+0 points)"],
  ["Requirement translation", "DataOps", "Requirements translated into clear task guidelines.", "Review and approve guidelines", "Quality setup bonus (+5 pts)"],
  ["Contributor assignment", "System / PM", "You've been assigned a task that matches your skills.", "Accept or decline the task", "Match bonus (+2–10 pts)"],
  ["Capture", "Contributor", "Follow the capture guidance and submit high-quality data.", "Capture and submit data", "Submission reward (+$)"],
  ["Automated checks", "System", "Automated checks are running to verify your data.", "Fix issues and resubmit if needed", "Pass bonus (+$)"],
  ["Human review", "Reviewer", "A reviewer is validating your submission.", "Address reviewer feedback", "Review bonus (+$)"],
  ["Annotation", "Annotator", "Annotate the data following the guidelines.", "Complete annotation", "Annotation reward (+$)"],
  ["Dataset release", "DataOps", "Dataset approved and released to the marketplace.", "View dataset and earnings", "Release bonus (+$)"],
  ["Model feedback", "AI / Model", "Model performance feedback is collected.", "Improve future submissions", "Impact bonus (+$)"],
];
export function DataQuestLifecycleModel() {
  const [s, setS] = useState(0);
  const cur = LIFECYCLE8[s];
  return <Dq n="08" title="Data lifecycle and quality model" sub="Connecting the interface to the actual data-delivery process." label="DataQuest data lifecycle and quality model — interactive rebuild of CyberOrigin_08" foot="Every state has an owner, a clear message, a next action, and a reward">
    <div className="tks-flow" role="group">{LIFECYCLE8.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{String(i + 1).padStart(2, "0")} {t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><table className="tks-table"><tbody>
      <tr><td><b>Owner</b></td><td>{cur[1]}</td></tr>
      <tr><td><b>User message</b></td><td>“{cur[2]}”</td></tr>
      <tr><td><b>Next action</b></td><td>{cur[3]}</td></tr>
      <tr><td><b>Reward consequence</b></td><td>{cur[4]}</td></tr>
    </tbody></table>
    <p style={{ margin: "6px 0 0", color: "#555" }}>This ensures accountability, transparency, and continuous quality across the entire data lifecycle.</p></div>
  </Dq>;
}

/* ---------------- 09 / 35 — Low-fidelity exploration boards ---------------- */
const LOFI_FLOWS: Array<[string, string, string[]]> = [
  ["Discovery", "Finding and selecting the right task.", ["1.1 Discover – home", "1.2 Browse categories", "1.3 Task list (filtered)", "1.4 Task card options"]],
  ["Task detail", "Understanding requirements and eligibility.", ["2.1 Task detail – overview", "2.2 Requirements", "2.3 Eligibility", "2.4 Start task"]],
  ["Capture", "Capturing high-quality data with guidance.", ["3.1 Capture – guidance", "3.2 Capture – recording", "3.3 Capture – review", "3.4 Capture – tips"]],
  ["Upload", "Uploading and checking quality before submission.", ["4.1 Uploading", "4.2 Processing", "4.3 Quality check"]],
  ["Verification", "Reviewing results and resolving issues.", ["5.1 Submitted", "5.2 In review", "5.3 Needs changes", "5.4 Feedback & resubmit", "5.5 Approved"]],
  ["Rewards", "Tracking earnings and payout options.", ["6.1 Earnings overview", "6.2 Activity", "6.3 Payouts"]],
  ["Account", "Managing profile and account states.", ["7.1 Profile", "7.2 Offline state"]],
];
const LOFI_QUESTIONS: Array<[string, string]> = [
  ["How much information belongs on a task card?", "Tested different densities to show key details (price, time, category) without overwhelming the user."],
  ["When is eligibility checked?", "Explored checking early (on detail) vs. just before starting to reduce drop-off and avoid wasted effort."],
  ["How does guidance stay visible?", "Iterated on always-on step indicator, persistent tips, and clear next actions during capture."],
  ["How do users recover from failed validation?", "Designed clear feedback, actionable reasons, and straightforward paths to fix and resubmit."],
];
function LoFiBoard({ n, variant }: { n: string; variant: "kitchen" | "street" }) {
  const [f, setF] = useState(0);
  const [q, setQ] = useState(0);
  const street = variant === "street";
  return <Dq n={n} title="Low-fidelity exploration" sub="Exploring end-to-end flows across discovery, capture, verification, rewards, and account states." label={`DataQuest low-fidelity exploration — interactive rebuild of CyberOrigin_${n}`} foot="Notes: All screens are low-fidelity explorations · Final UI will follow the DataQuest design system">
    <p className="tks-kicker" style={{ marginTop: 0 }}>Flows covered — 1 Discovery · 2 Task detail · 3 Capture · 4 Upload · 5 Verification · 6 Rewards · 7 Account</p>
    <Chips items={LOFI_FLOWS.map(([t]) => t)} value={f} onPick={setF} />
    <div className="tks-detail" aria-live="polite"><b>{LOFI_FLOWS[f][0]}</b> — {LOFI_FLOWS[f][1]}
      <p style={{ margin: "6px 0 0" }}>{LOFI_FLOWS[f][2].join(" · ")}</p>
      {street && f === 1 && <p style={{ margin: "6px 0 0", color: "#555" }}>Task as printed on this board: Street view capture · $1.20 · 20–30 min — “Capture clear photos of urban streets, storefronts, pedestrian activity, and vehicles.” Requirements include (iOS 14+ / Android 10+) and “No car photos”.</p>}
      {street && f === 4 && <p style={{ margin: "6px 0 0", color: "#555" }}>Verification screens as printed: 5.3 Needs changes — Reason: “Some storefronts are not clearly visible.” · 5.5 Approved — You earned +$1.20.</p>}
      {!street && f === 2 && <p style={{ margin: "6px 0 0", color: "#555" }}>Capture screens as printed: 3.1 “Chop the vegetable — Use a clear cutting motion. Keep hands and tools in view.” · 3.4 Tips: Keep your workspace well lit · Show hands and tools clearly · Avoid blocking the view · Record in a quiet environment.</p>}
      {!street && f === 4 && <p style={{ margin: "6px 0 0", color: "#555" }}>Verification screens as printed: 5.3 Action needed — “The lighting was too low in part of the recording.” · 5.5 Approved! — You earned +$12.50.</p>}
    </div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Key questions resolved by wireframing</p>
    <Chips items={LOFI_QUESTIONS.map(([t]) => t)} value={q} onPick={setQ} />
    <div className="tks-card" style={{ marginTop: 8 }} aria-live="polite"><b>{LOFI_QUESTIONS[q][0]}</b><p style={{ color: "#555", margin: "4px 0 0" }}>{LOFI_QUESTIONS[q][1]}</p></div>
  </Dq>;
}
export function DataQuestLoFiKitchen() { return <LoFiBoard n="09" variant="kitchen" />; }
export function DataQuestLoFiStreet() { return <LoFiBoard n="35" variant="street" />; }

/* ---------------- 10 — Mobile home screen ---------------- */
const ACTIVE10: Array<[string, string, number]> = [
  ["Kitchen action capture", "Step 2 of 6 · Chop the vegetable · In progress", 33],
  ["Wearable device tasks", "Step 1 of 4 · Record tap gestures · In progress", 25],
];
export function DataQuestMobileHome() {
  const [tab, setTab] = useState(0);
  const [t, setT] = useState(0);
  return <Dq n="10" title="DataQuest — Mobile home" sub="Contributor balance $128.45 USD · Lifetime earnings $1,428.70 · Contributor level: Silver · Quality score 92% — “Great work! Keep it up.”" label="DataQuest mobile home screen — interactive rebuild of CyberOrigin_10">
    <p className="tks-kicker" style={{ marginTop: 0 }}>Recommended for you · View all</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{HERO_TASKS.map(([name, body, meta], i) => <button key={name} type="button" className={`tks-card${i === t ? " is-on" : ""}`} aria-pressed={i === t} onClick={() => setT(i)}><b>{name}</b>{i === 0 ? <span className="tks-tag">FEATURED</span> : null}<p style={{ color: "#555", margin: "4px 0" }}>{body}</p><p className="tks-kicker" style={{ margin: 0 }}>{meta} · {i === 2 ? "Good match" : "High match"}</p></button>)}</div>
    <div style={{ marginTop: 10 }}><Chips items={["Active tasks (2)", "Completed"]} value={tab} onPick={setTab} /></div>
    <div className="tks-detail" aria-live="polite">{tab === 0 ? ACTIVE10.map(([name, meta, pct]) => <div key={name} style={{ marginBottom: 8 }}><b>{name}</b> — {meta}<div style={{ background: "#e6e4f5", height: 7, borderRadius: 4, marginTop: 4 }}><div style={{ width: `${pct}%`, height: 7, borderRadius: 4, background: ACC }} /></div><span className="tks-kicker">{pct}%</span></div>) : <p style={{ margin: 0 }}>Completed tasks appear here (tab as printed). Bottom navigation as printed: Home · Discover · My tasks · Earnings · Profile.</p>}</div>
  </Dq>;
}

/* ---------------- 11 — Solo ownership timeline ---------------- */
const TIMELINE11: Array<[string, string, string, string]> = [
  ["Jan 2025", "CyberOrigin robotics-data strategy", "Defined vision, goals, and data ecosystem for robotics at scale.", "Designed"],
  ["Feb 2025", "Desktop prototype", "Designed information architecture and core workflows.", "Implemented"],
  ["Mar 2025", "Mobile task exploration", "Explored task discovery, capture, and guidance experiences.", "Designed"],
  ["Apr 2025", "Front-end implementation", "Built responsive front-end prototype with interaction logic.", "Implemented"],
  ["May 2025", "Proposed production architecture", "Designed scalable, secure, and observable system architecture.", "Proposed"],
];
export function DataQuestOwnershipTimeline() {
  const [s, setS] = useState(0);
  const cur = TIMELINE11[s];
  return <Dq n="11" title="DataQuest — Solo ownership timeline" sub="A chronological overview of end-to-end product ownership from strategy to proposed architecture. Company CyberOrigin · Product DataQuest · Period 2025 · Role Solo Product Designer and Engineer." label="DataQuest solo ownership timeline — interactive rebuild of CyberOrigin_11">
    <Flow steps={TIMELINE11.map(([m, t]) => [`${m} — ${t}`, ""])} s={s} setS={setS} />
    <div className="tks-card" aria-live="polite"><span className="tks-tag">{cur[0]}</span> <b>{cur[1]}</b> <span className="tks-tag">{cur[3]}</span><p style={{ color: "#555", margin: "5px 0 0" }}>{cur[2]}</p>
      <p style={{ margin: "8px 0 0" }}><b>Solo ownership</b> — End-to-end responsibility across product strategy, information architecture, UX/UI, visual design, responsive front-end prototype, and interaction logic.</p></div>
  </Dq>;
}

/* ---------------- 12 — Trust contract ---------------- */
const TRUST12: Array<[string, string]> = [
  ["Data purpose", "Why this data is collected and how it will be used."],
  ["Allowed subjects", "What can be captured, and what is off-limits."],
  ["Privacy protection", "How personal data is protected and kept private."],
  ["Licensing & rights", "Your rights, our license, and how data may be used."],
  ["Expected effort", "Estimated time and difficulty to complete the task."],
  ["Quality conditions", "What makes a high-quality submission acceptable."],
  ["Review time", "How long review takes and when you'll hear back."],
  ["Reward amount", "How much you'll earn for an approved submission."],
  ["Rejection & appeal", "Why submissions may be rejected and how to appeal."],
];
export function DataQuestTrustContract() {
  const [s, setS] = useState(0);
  return <Dq n="12" title="What the product must explain before capture" sub="A trust contract between contributor and platform. Clear terms. Fair process. Trusted outcomes. — Know before you capture." label="DataQuest trust contract — interactive rebuild of CyberOrigin_12" foot="Clear expectations before capture build trust and better data — They reduce confusion, low-quality submissions, and disputes">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{TRUST12.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)}><span className="tks-num" style={{ background: ACC }}>{i + 1}</span> <b>{t}</b><p style={{ color: "#555", margin: "5px 0 0" }}>{b}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>Trust contract</b> — Clear expectations. Fair process. Trusted outcomes. Selected: {TRUST12[s][0]}.</div>
  </Dq>;
}

/* ---------------- 13 — Data bottleneck map ---------------- */
const BOTTLENECK: Array<[string, string, string, string]> = [
  ["Research request", "A team defines a robotics data need and success criteria.", "Vague instructions", "Unclear goals or acceptance criteria lead to off-target captures and rework."],
  ["Task translation", "Requirements are broken down into clear, scoped contributor tasks.", "Inconsistent angles", "Missing coverage or poor view variety reduces dataset reliability."],
  ["Contributor capture", "Contributors capture data in real environments using guided instructions.", "Incomplete sequences", "Gaps in actions or events break context and limit model performance."],
  ["Upload", "Files and metadata are uploaded to DataQuest securely.", "Privacy issues", "PII or sensitive content risks cause takedowns and compliance delays."],
  ["Validation", "Automated and human checks verify quality, completeness, and safety.", "Upload failure", "File errors, network issues, or unsupported formats block progress."],
  ["Annotation", "Data is annotated and structured for ML/robotics consumption.", "Duplicate data", "Redundant captures waste budget and skew dataset diversity."],
  ["Dataset release", "A high-quality, rights-cleared dataset is ready for training and deployment.", "Unclear rights", "Missing consent or license clarity prevents legal use and distribution."],
];
export function DataQuestBottleneckMap() {
  const [s, setS] = useState(0);
  const cur = BOTTLENECK[s];
  return <Dq n="13" title="Data bottleneck map" sub="From robotics research request to usable dataset — where failure happens and how DataQuest fixes it." label="DataQuest data bottleneck map — interactive rebuild of CyberOrigin_13" foot="DataQuest opportunity: Clear instructions and examples · Built-in quality checks and guardrails · Real-time guidance and feedback · Rights and privacy by design · Higher quality data, less rework">
    <Flow steps={BOTTLENECK.map(([t, b]) => [t, b])} s={s} setS={setS} />
    <div className="tks-card" aria-live="polite" style={{ borderColor: "#e05260", marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0, color: "#c22f3d" }}>⚠ Common failure point (data bottleneck) at this stage</p><b>{cur[2]}</b><p style={{ color: "#555", margin: "4px 0 0" }}>{cur[3]}</p></div>
  </Dq>;
}

/* ---------------- 14 — Value exchange ---------------- */
const CONTRIB14: Array<[string, string]> = [
  ["Real-world actions", "Perform tasks and interactions in the physical world."],
  ["Multimodal capture", "Capture motion, video, audio, gesture, and other signals."],
  ["Context", "Environment, objects, intent, conditions, and scenarios."],
  ["Time", "Timestamps, sequences, duration, and recency."],
  ["Compliance", "Follow guidelines, consent, privacy, and safety rules."],
];
const RESEARCH14: Array<[string, string]> = [
  ["Task requirements", "Define objectives, instructions, and success criteria."],
  ["Sensor needs", "Specify device types, modalities, settings, and placements."],
  ["Environments", "Define locations, conditions, and scenario diversity."],
  ["Quality thresholds", "Set accuracy, completeness, consistency, and latency targets."],
  ["Annotation goals", "Define labels, segments, attributes, and taxonomies."],
  ["Reward budgets", "Set budgets, rates, and incentive structures."],
];
const LAYER14 = ["Task discovery & match", "Guided workflows", "Capture guidance", "Real-time feedback", "Task design & specs", "Sensor & environment needs", "Quality & acceptance rules", "Rewards & payments"];
const REWARDS14: Array<[string, string]> = [
  ["Quoted", "Estimated reward based on task specs and effort."],
  ["Reserved", "Budget set aside when task is accepted."],
  ["Approved", "Quality verified against requirements and thresholds."],
  ["Payable", "Rewards unlocked and ready for payout."],
];
const QUALITY14: Array<[string, string]> = [
  ["Requirements check", "Validate task specs, policies, and feasibility."],
  ["Automated checks", "Run AI/ML and rule-based checks for signal quality, coverage, and safety."],
  ["Review decisions", "Human-in-the-loop review for edge cases and final decisions."],
  ["Annotation readiness", "Data meets standards and is ready for labeling or consumption."],
  ["Payout release", "Approved rewards paid to contributors securely and fairly."],
];
export function DataQuestValueExchange() {
  const [tab, setTab] = useState(0);
  const [r, setR] = useState(0);
  return <Dq n="14" title="Value exchange" sub="How contributors, researchers, and operations exchange value through verifiable tasks. DataQuest — Workflow & Trust Layer: Match tasks, orchestrate work, ensure quality, and protect trust at every step." label="DataQuest value exchange — interactive rebuild of CyberOrigin_14" foot="Outcome: High-quality, purpose-fit data · Fair, transparent compensation · Scalable, trustworthy workflows · Faster insights and better models">
    <Chips items={["Contributors provide", "Researchers / Data buyers specify", "Quality operations verifies"]} value={tab} onPick={setTab} />
    <div className="tks-detail" aria-live="polite">
      {tab === 0 && CONTRIB14.map(([t, b]) => <p key={t} style={{ margin: "4px 0" }}><b>{t}</b> — {b}</p>)}
      {tab === 1 && RESEARCH14.map(([t, b]) => <p key={t} style={{ margin: "4px 0" }}><b>{t}</b> — {b}</p>)}
      {tab === 2 && QUALITY14.map(([t, b]) => <p key={t} style={{ margin: "4px 0" }}><b>{t}</b> — {b}</p>)}
      <p style={{ margin: "8px 0 0", color: "#555" }}>Trust & security by design: Identity · Integrity · Privacy · Encryption · Auditability · Fairness. Layer modules: {LAYER14.join(" · ")}.</p>
    </div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Rewards lifecycle</p>
    <Flow steps={REWARDS14} s={r} setS={setR} />
  </Dq>;
}

/* ---------------- 17 — Profile & Wallet (V0) ---------------- */
const ACTIVITY17: Array<[string, string, string, string, string]> = [
  ["Urban Street Scene", "Image Capture", "Approved", "+ $1.20", "Today, 9:41 AM"],
  ["Downtown Intersection", "Location Verification", "In review", "+ $0.90", "Yesterday, 6:21 PM"],
  ["Storefront Sign Text", "Text & OCR", "Approved", "+ $0.60", "May 16, 3:15 PM"],
  ["Ambient Street Audio", "Audio Recording", "In review", "+ $1.00", "May 16, 11:02 AM"],
  ["Pedestrian Flow", "Video Capture", "Submitted", "—", "May 16, 9:08 AM"],
];
const CATS17: Array<[string, string, number]> = [
  ["Image Capture", "128 tasks", 42], ["Location Verification", "96 tasks", 28], ["Text & OCR", "64 tasks", 18], ["Audio Recording", "32 tasks", 8], ["Video Capture", "28 tasks", 4],
];
export function DataQuestProfileWallet() {
  const [filter, setFilter] = useState(0);
  const [email, setEmail] = useState(true);
  const [tfa, setTfa] = useState(true);
  const filters = ["All", "Approved", "In review", "Submitted"];
  const rows = ACTIVITY17.filter((r) => filter === 0 || r[2] === filters[filter]);
  return <Dq n="17" title="Profile & Wallet" sub="Early prototype account and reward dashboard for contributors. · Historical · V0 · Alex Morgan, Contributor · May 12 – May 18, 2025 · Wallet balance $128.45 USD · Pending rewards $42.75 (In review) · Lifetime earnings $1,428.70" label="DataQuest profile and wallet V0 — interactive rebuild of CyberOrigin_17">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Settings (as printed)</p>
        <p style={{ margin: "4px 0" }}>Payout method — <b>USDC (Polygon)</b> · Minimum payout — <b>$25.00</b></p>
        <p style={{ margin: "6px 0", display: "flex", gap: 6, flexWrap: "wrap" }}><button type="button" className="tks-chip" aria-pressed={email} onClick={() => setEmail((v) => !v)}>Email notifications {email ? "On" : "Off"}</button><button type="button" className="tks-chip" aria-pressed={tfa} onClick={() => setTfa((v) => !v)}>Two-factor auth {tfa ? "Enabled" : "Disabled"}</button></p>
        <p className="tks-kicker" style={{ margin: "10px 0 3px" }}>Category stats</p>
        {CATS17.map(([n, c, pct]) => <div key={n} style={{ marginBottom: 5 }}><span>{n} · {c} · {pct}%</span><div style={{ background: "#e6e4f5", height: 6, borderRadius: 3 }}><div style={{ width: `${pct}%`, height: 6, borderRadius: 3, background: ACC }} /></div></div>)}
      </div>
      <div>
        <Chips items={filters} value={filter} onPick={setFilter} />
        <table className="tks-table" style={{ marginTop: 8 }}><thead><tr><th>Task</th><th>Status</th><th>Reward</th><th>Submitted</th></tr></thead>
          <tbody>{rows.map(([t, c, st, rw, when]) => <tr key={t}><td><b>{t}</b><br />{c}</td><td>{st}</td><td>{rw}</td><td>{when}</td></tr>)}</tbody></table>
        <p className="tks-kicker" aria-live="polite">{rows.length} of {ACTIVITY17.length} recent-activity rows shown · View all activity →</p>
      </div>
    </div>
  </Dq>;
}

/* ---------------- 18 — Evidence and claim map ---------------- */
const CLAIMS: Array<[string, string, Array<[string, string]>]> = [
  ["Implemented", "Visible in the reviewed prototype", [
    ["Marketplace navigation", "Browse and filter categories, discover tasks, and explore environments."],
    ["Task detail", "View clear instructions, requirements, and acceptance criteria."],
    ["Simulated upload progress", "Capture uploads with real-time progress and basic metadata."],
    ["Account interactions", "Profile setup, activity history, and contributor actions."],
    ["Earnings chart", "Wallet balance and earnings trends with interactive charts."],
    ["Responsive behavior", "Adaptive layouts across mobile, tablet, and desktop breakpoints."],
  ]],
  ["Designed", "High-fidelity concepts and flows", [
    ["High-fidelity mobile concepts", "Pixel-accurate screens for capture, review, and earnings experiences."],
    ["Contributor flow states", "End-to-end states: new user, onboarding, active contributor, and re-engagement."],
    ["Reward logic", "Rules and scenarios for task rewards, bonuses, and quality incentives."],
    ["Quality workflows", "Review queues, guidance, feedback, and escalation paths."],
    ["Earnings and analytics views", "Detailed breakdowns, filters, and trend insights."],
    ["Localization and theming", "Multi-language support and accessible design system."],
  ]],
  ["Proposed", "Future architecture and services", [
    ["Authentication service", "Secure sign-in, MFA, and role-based access control."],
    ["Persistent upload service", "Reliable storage, resume, chunking, and deduplication."],
    ["Validation workers", "Automated checks for format, metadata, and content quality."],
    ["Review tooling service", "Advanced review tools, audit logs, and decision tracking."],
    ["Payout service", "Earnings calculation, payout orchestration, and tax reporting."],
    ["Dataset export service", "Curated dataset packaging, APIs, and partner delivery."],
  ]],
];
export function DataQuestEvidenceMap() {
  const [tab, setTab] = useState(0);
  const [row, setRow] = useState(0);
  const cur = CLAIMS[tab][2][row];
  return <Dq n="18" title="Evidence and claim map" sub="We distinguish what exists in code today, what's designed and validated in high-fidelity concepts, and what's proposed for production." label="DataQuest evidence and claim map — interactive rebuild of CyberOrigin_18" foot="Purpose: Align stakeholders on scope, communicate progress with clarity, and ensure a scalable path from prototype to production">
    <Chips items={CLAIMS.map(([n, s]) => `${n} — ${s}`)} value={tab} onPick={(i) => { setTab(i); setRow(0); }} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div>{CLAIMS[tab][2].map(([name], i) => <p key={name} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{name}</button></p>)}</div>
      <div className="tks-card" aria-live="polite"><b>{cur[0]}</b><p style={{ color: "#555", margin: "5px 0 0" }}>{cur[1]}</p><p className="tks-kicker" style={{ margin: "8px 0 0" }}>Claim tier: {CLAIMS[tab][0]} — {CLAIMS[tab][1]}</p></div>
    </div>
  </Dq>;
}

/* ---------------- 19 — Naming and reward cleanup ---------------- */
const REWARD_STATES: Array<[string, string]> = [
  ["Pending", "Under review · Estimated 1–3 days"],
  ["In review", "Quality check · In progress"],
  ["Approved", "Reward granted · Added to balance"],
  ["Paid out", "Claimed · Available to use"],
];
export function DataQuestNamingCleanup() {
  const [after, setAfter] = useState(true);
  const [s, setS] = useState(0);
  return <Dq n="19" title="Naming and reward cleanup" sub="From fragmented names and reward logic to a unified, clear, and consistent system." label="DataQuest naming and reward cleanup — interactive rebuild of CyberOrigin_19" foot="Outcome: A unified identity and reward system that users understand, trust, and can easily track — Stronger brand recognition · Easier to understand and use · Higher trust and transparency · Scalable for future growth">
    <div style={{ display: "flex", gap: 6 }} role="group" aria-label="Before or after">
      <button type="button" className="tks-chip" aria-pressed={!after} onClick={() => setAfter(false)}>⚠ Before</button>
      <button type="button" className="tks-chip" aria-pressed={after} onClick={() => setAfter(true)}>✓ After</button>
    </div>
    <div className="tks-detail" aria-live="polite">
      {!after ? <><b>Inconsistent naming. Fragmented rewards. Confusing experience.</b>
        <p style={{ margin: "6px 0" }}>Scattered product names: CyberGPT · DataQuest · MECKA · Quest Hub · AI Agent. Multiple reward units: Points · Cash · USDC · MECKA Token · Credits. Mixed reward displays: +120 points · +$1.25 · +2.4 USDC · +15 MECKA.</p>
        <p style={{ margin: 0 }}>Unclear reward logic: Different units for similar tasks · Cash and tokens shown together · No clear conversion or standard · Hard to compare or track value. Fragmented user experience: Hard to understand · Hard to compare · Inconsistent across screens · Low trust and transparency.</p></>
      : <><b>One name. One reward model. Clear, consistent, trustworthy.</b>
        <p style={{ margin: "6px 0" }}>Unified product identity: <b style={{ color: ACC }}>DataQuest by CyberOrigin</b> — Human-action data marketplace for embodied AI. One consistent reward model: <b>Earn DataQuest Rewards</b> — Rewards are earned for quality contributions and activities. All rewards use DataQuest Rewards.</p>
        <p style={{ margin: 0 }}>Consistent value and transparency: One reward unit — DataQuest Rewards across the platform · Clear earned value — Always shown in DataQuest Rewards · Consistent experience — Same language, all screens · Trust and transparency — Simple, predictable, and easy to track.</p></>}
    </div>
    {after && <><p className="tks-kicker" style={{ marginTop: 10 }}>Clear reward states</p><Flow steps={REWARD_STATES} s={s} setS={setS} /></>}
  </Dq>;
}

/* ---------------- 20 — Role and job map ---------------- */
const ROLES: Array<[string, string, string[], string[], string[], string[]]> = [
  ["Contributor", "Provide high-quality human action data.",
    ["Which tasks match my skills and availability?", "How should I complete this task for maximum quality?", "When should I submit for review?"],
    ["Find and claim suitable tasks", "Capture accurate, high-quality data", "Submit work and receive feedback", "Improve performance and reliability"],
    ["Tasks completed with high accuracy", "Approved submissions and ratings", "Fair rewards paid on time", "Clear feedback to improve"],
    ["What is expected of me", "How well I'm performing", "How my work impacts outcomes", "How I can earn more and grow"]],
  ["Trained operator", "Execute complex tasks with consistency and quality.",
    ["Which advanced tasks should I take on?", "How do I apply guidelines accurately?", "When should I escalate or ask for help?"],
    ["Complete complex data capture tasks", "Follow domain-specific instructions", "Maintain quality across all work", "Build expertise and reliability"],
    ["High accuracy on complex tasks", "Fewer rejections and escalations", "Strong reliability and timeliness", "Access to higher-value tasks"],
    ["Advanced task requirements", "Quality standards and edge cases", "My performance trends", "Pathways to higher tiers"]],
  ["Researcher", "Design, validate, and refine tasks and data requirements.",
    ["What questions need to be answered?", "How should tasks be structured?", "How do we measure data quality?"],
    ["Define research objectives", "Design tasks and guidelines", "Run pilots and analyze results", "Iterate and improve task models"],
    ["High-quality data that answers questions", "Validated tasks and clear guidelines", "Reliable metrics and insights", "Continuous improvement"],
    ["Data quality and task performance", "Pilot results and insights", "What to refine and why", "Impact on downstream outcomes"]],
  ["Reviewer", "Ensure accuracy, consistency, and policy compliance.",
    ["Does this submission meet standards?", "Should I approve, request changes, or reject?", "What feedback will help the most?"],
    ["Review submissions against guidelines", "Verify accuracy and completeness", "Provide clear, actionable feedback", "Monitor quality and flag issues"],
    ["Accurate and consistent reviews", "Clear feedback and low dispute rate", "High approval quality", "Timely reviews and decisions"],
    ["Review guidelines and policies", "Quality benchmarks", "Reviewer performance", "Impact of my decisions"]],
  ["Marketplace operator", "Oversee supply, demand, quality, and ecosystem health.",
    ["Are supply and demand balanced?", "Which tasks need adjustments?", "Where are quality or policy risks?"],
    ["Monitor marketplace health", "Balance task supply and demand", "Set rewards, SLAs, and policies", "Manage escalations and risks"],
    ["Healthy supply and demand", "High data quality at scale", "Fair, sustainable rewards", "Low risk and dispute rates"],
    ["Marketplace health and trends", "Task performance and quality", "Policy compliance and risks", "Impact of operational decisions"]],
];
export function DataQuestRoleMap() {
  const [r, setR] = useState(0);
  const cur = ROLES[r];
  const sections: Array<[string, string[]]> = [["Recurring decisions", cur[2]], ["Primary jobs-to-be-done", cur[3]], ["Success conditions", cur[4]], ["Understand with DataQuest", cur[5]]];
  return <Dq n="20" title="Role and job map" sub="Evidence-based product hypotheses derived from our workflow analysis and prototype behavior." label="DataQuest role and job map — interactive rebuild of CyberOrigin_20" foot="Built on trust and transparency — Clear guidelines, fair reviews, and secure data handling at every step">
    <Chips items={ROLES.map(([n], i) => `${i + 1} ${n}`)} value={r} onPick={setR} />
    <div className="tks-detail" aria-live="polite"><b style={{ fontSize: 14 }}>{cur[0]}</b> — {cur[1]}
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 8 }}>{sections.map(([h, items]) => <div key={h} className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>{h}</p><ul style={{ margin: 0, paddingLeft: 16 }}>{items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
    </div>
  </Dq>;
}

/* ---------------- 21 — Contributor journey (detailed) ---------------- */
const JOURNEY21: Array<[string, string, string, string | null]> = [
  ["Discover", "Explore tasks and opportunities that match your skills and interests.", "You: What tasks are available and worth my time?", null],
  ["Assess eligibility", "Confirm you meet the requirements to contribute to this task.", "You: Am I eligible to contribute?", "Eligibility uncertainty"],
  ["Understand requirements", "Review task goals, specs, instructions, and quality criteria.", "You: What exactly needs to be done and how will it be judged?", null],
  ["Capture", "Collect accurate, complete, and policy-compliant data.", "You: Am I capturing the right data the right way?", "Capture mistakes"],
  ["Pre-check", "Run automated checks to catch common issues early.", "System: Are the data and metadata complete and valid?", null],
  ["Upload", "Submit your files and metadata securely.", "System: Was the upload successful and complete?", "Upload failure"],
  ["Verification", "Experts and systems verify quality, compliance, and acceptance rules.", "System: Does the submission meet quality and policy standards?", "Pending review ambiguity"],
  ["Reward", "Earn confirmed rewards for accepted contributions.", "You: What did I earn and why was it accepted?", null],
  ["History or appeal", "View history and status, or appeal decisions if needed.", "You: What happened and how can I appeal if needed?", "Rejected submission"],
];
const TRUST21: Array<[string, string]> = [
  ["Clarity", "Clear goals, instructions, and examples reduce confusion and rework."],
  ["Privacy", "Your data is protected with encryption, least access, and purpose limitation."],
  ["Quality guidance", "Real-time tips, previews, and checks help you capture high-quality data."],
  ["Recovery", "Save progress, resume easily, and recover from interruptions or issues."],
  ["Fairness", "Consistent scoring, review, and appeals ensure equal treatment for all."],
  ["Transparency", "Visible status, reasons, and timelines keep you informed at every step."],
];
export function DataQuestJourneyDetailed() {
  const [s, setS] = useState(0);
  const [t, setT] = useState(0);
  const cur = JOURNEY21[s];
  return <Dq n="21" title="Contributor journey" sub="Evidence-based product hypothesis of the end-to-end contributor workflow." label="DataQuest contributor journey detailed — interactive rebuild of CyberOrigin_21" foot="Good contributor products reduce uncertainty at every handoff — Clear expectations, fast feedback, and fair outcomes turn contributors into long-term partners">
    <Flow steps={JOURNEY21.map(([t, b]) => [t, b])} s={s} setS={setS} />
    <div className="tks-card" aria-live="polite" style={{ marginTop: 10 }}><b>{cur[2]}</b>
      {cur[3] ? <p style={{ margin: "5px 0 0", color: "#c22f3d" }}>⚠ Greatest drop-off risk at this step: <b>{cur[3]}</b></p> : <p style={{ margin: "5px 0 0", color: "#555" }}>No drop-off risk flag printed for this step.</p>}
    </div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Trust signals across the journey — Built in. Always on.</p>
    <Chips items={TRUST21.map(([n]) => n)} value={t} onPick={setT} />
    <p aria-live="polite" style={{ margin: "6px 0 0" }}><b>{TRUST21[t][0]}</b> — {TRUST21[t][1]}</p>
  </Dq>;
}

/* ---------------- 22 — From broad browsing to bounded task completion ---------------- */
const BEFORE22: Array<[string, string]> = [
  ["Browse broad categories", "Explore categories without clear task context."],
  ["Open page", "Open a category page with minimal guidance."],
  ["Upload files", "Upload whatever seems relevant or available."],
  ["Wait for reward", "Hope the upload is accepted and rewarded."],
];
const AFTER22: Array<[string, string]> = [
  ["Accept bounded task", "Choose a specific task with a clear scope and goal."],
  ["View purpose & requirements", "Understand why it's needed and what's required."],
  ["Guided capture", "Follow step-by-step guidance to capture the right data."],
  ["Pre-checks", "Run automated checks to meet quality standards."],
  ["Submit", "Submit with confidence that it's task-ready."],
  ["Track verification", "Transparent review with status and feedback."],
  ["Receive accountable reward", "Earn rewards for verified, valuable contributions."],
];
const PROBLEMS22: Array<[string, string]> = [
  ["Vague tasks", "Unclear purpose and requirements."], ["Weak guidance", "No help on what to capture or how."],
  ["Unclear quality", "No visibility into quality standards."], ["Unclear review", "Black-box review and decisions."],
  ["Reward-first mental model", "Focus on payout, not contribution."],
];
const OUTCOMES22: Array<[string, string]> = [
  ["Task clarity before reward", "Clear purpose and requirements drive the work."], ["Quality before upload", "Pre-checks ensure high standards upfront."],
  ["Transparent verification", "Status, feedback, and rules are visible at every step."], ["Trust through predictability", "Clear process builds confidence and reduces rework."],
  ["Accountable payout", "Rewards tied to verified value and fair rules."],
];
export function DataQuestBoundedTasks() {
  const [after, setAfter] = useState(true);
  const [s, setS] = useState(0);
  const steps = after ? AFTER22 : BEFORE22;
  const notes = after ? OUTCOMES22 : PROBLEMS22;
  return <Dq n="22" title="From broad browsing to bounded task completion" sub="How the product model shifted from category upload to verifiable human-action tasks." label="DataQuest bounded task completion — interactive rebuild of CyberOrigin_22" foot="The stronger product model centers verifiable task completion, not generic category browsing — Better data quality · Fewer disputes and rework · Faster insights for everyone · Sustainable value for the ecosystem">
    <div style={{ display: "flex", gap: 6 }} role="group" aria-label="Before or after">
      <button type="button" className="tks-chip" aria-pressed={!after} onClick={() => { setAfter(false); setS(0); }}>Before</button>
      <button type="button" className="tks-chip" aria-pressed={after} onClick={() => { setAfter(true); setS(0); }}>After</button>
    </div>
    <div style={{ marginTop: 10 }}><Flow steps={steps} s={s} setS={setS} /></div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>{after ? "✓ Better outcomes" : "⚠ Common problems"}</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{notes.map(([t, b]) => <div key={t} className="tks-card"><b>{t}</b><p style={{ color: "#555", margin: "3px 0 0" }}>{b}</p></div>)}</div>
  </Dq>;
}

/* ---------------- 23 — Product principles ---------------- */
const PRINCIPLES23: Array<[string, string]> = [
  ["Task clarity before reward", "Contributors need a bounded task, purpose, requirements, and expected effort before deciding to participate."],
  ["Quality guidance before upload", "The product should coach capture quality during recording, not only after submission."],
  ["Consent before capture", "Privacy, licensing, allowed subjects, and data rights must be clear before work begins."],
  ["Verification transparency before payout", "Submission state, review outcome, quality result, and reward consequence must always be visible."],
];
export function DataQuestPrinciples() {
  const [s, setS] = useState(0);
  return <Dq n="23" title="Product principles" sub="The design rules that turn contributor effort into trustworthy data." label="DataQuest product principles — interactive rebuild of CyberOrigin_23" foot="These principles align contributor motivation, research needs, and platform trust — at every step">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>{PRINCIPLES23.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)}><span className="tks-num" style={{ background: ACC }}>{i + 1}</span> <b style={{ color: ACC }}>{t}</b><p style={{ color: "#555", margin: "6px 0 0" }}>{b}</p></button>)}</div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }}>
      <div className="tks-card"><b>Motivated contributors</b><p style={{ color: "#555", margin: "3px 0 0" }}>Clear tasks, fair treatment, and visible outcomes.</p></div>
      <div className="tks-card"><b>Better research</b><p style={{ color: "#555", margin: "3px 0 0" }}>Higher-quality data that meets study requirements.</p></div>
      <div className="tks-card"><b>Platform trust</b><p style={{ color: "#555", margin: "3px 0 0" }}>Consistent, transparent processes build confidence for everyone.</p></div>
    </div>
  </Dq>;
}

/* ---------------- 24 — Scope map ---------------- */
const SCOPE24: Array<[string, string, string[]]> = [
  ["Core launch scope", "Ship first. Prove value.", ["Discover tasks", "Task detail", "Eligibility", "Guided capture", "Pre-checks", "Upload", "Review states", "Reward confirmation", "Contributor profile basics", "Wallet ledger basics"]],
  ["Supporting features", "Enhance trust and efficiency.", ["Search and filters", "Coaching recommendations", "Appeals", "Help center", "Reviewer tooling hooks", "Privacy notices", "Analytics views"]],
  ["Future platform capabilities", "Strategic roadmap, not launch scope.", ["Complex medical workflows", "Advanced token mechanics", "Enterprise dataset delivery", "Large-scale quality automation", "Payout integrations", "Localization", "Reviewer console", "Persistent upload services"]],
];
export function DataQuestScopeMap() {
  const [tab, setTab] = useState(0);
  const cur = SCOPE24[tab];
  return <Dq n="24" title="Scope map" sub="What belongs in the first credible launch, what supports it, and what stays future-facing." label="DataQuest scope map — interactive rebuild of CyberOrigin_24" foot="Scope discipline makes the product more believable and more buildable">
    <Chips items={SCOPE24.map(([n]) => n)} value={tab} onPick={setTab} />
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> — {cur[1]}
      <p style={{ margin: "6px 0 0" }}>{cur[2].join(" · ")}</p>
      <p style={{ margin: "6px 0 0", color: "#555" }}>{tab === 0 ? "Essential end-to-end flow for first credible launch." : tab === 1 ? "Strengthen usability, quality, and transparency." : "Future value unlocked with scale and governance."}</p></div>
    <div className="tks-card" style={{ marginTop: 10, borderColor: "#d9a441" }}><b>⚠ Caution</b> — Medical data and complex token mechanics stayy out of the first credible launch unless governance or implementation evidence exists. <span style={{ color: "#888" }}>(“stayy” as printed.)</span></div>
  </Dq>;
}

/* ---------------- 25 — Data lifecycle ---------------- */
const LIFECYCLE25: Array<[string, string, string]> = [
  ["Task request", "Define the task objectives and requirements.", "Research — Define the need and goals."],
  ["Requirement translation", "Convert goals into clear instructions, labels, and criteria.", "Marketplace — Translate requirements and source talent."],
  ["Contributor assignment", "Match the task to qualified contributors in the marketplace.", "Marketplace — Translate requirements and source talent."],
  ["Capture", "Contributors collect and annotate data as instructed.", "Contributor — Collect and annotate the data."],
  ["Automated checks", "Run AI and rule-based checks for quality, compliance, and safety.", "Automation — Run checks and enforce quality and safety."],
  ["Human review", "Reviewers validate edge cases and ensure quality standards.", "Reviewer — Validate quality and handle edge cases."],
  ["Annotation", "Finalize annotations with consistent labels and metadata.", "Annotation — Finalize labels and ensure consistency."],
  ["Dataset release", "Approve and deliver the dataset for consumption.", "Delivery — Release datasets and capture feedback."],
  ["Model feedback", "Models provide performance signals to improve data.", "Delivery — Release datasets and capture feedback."],
];
export function DataQuestLifecycle() {
  const [s, setS] = useState(0);
  return <Dq n="25" title="Data lifecycle" sub="From task request to model feedback. Continuous feedback improves tasks, instructions, and quality over time." label="DataQuest data lifecycle — interactive rebuild of CyberOrigin_25" foot="High-quality datasets require operational clarity before they require scale — Clear tasks, verified quality, and continuous feedback create trustworthy data that powers better models">
    <Flow steps={LIFECYCLE25.map(([t, b]) => [t, b])} s={s} setS={setS} />
    <p aria-live="polite" style={{ margin: "8px 0 0" }}><span className="tks-kicker">Primary ownership</span><br /><b>{LIFECYCLE25[s][2]}</b></p>
  </Dq>;
}

/* ---------------- 27 — Quality score model ---------------- */
const QUALITY27: Array<[string, string]> = [
  ["Completeness", "All required fields, metadata, and context are provided."],
  ["Visibility", "The data and its context are clear and easy to understand."],
  ["Stability", "Signals and measurements are consistent and reliable."],
  ["Duration", "Submission covers a meaningful time span for analysis."],
  ["Sensor coverage", "Uses the right sensors and captures what's needed."],
  ["Environment compliance", "Meets environmental and scenario requirements for the task."],
  ["Privacy compliance", "Protects personal data and follows privacy guidelines."],
  ["Uniqueness", "Data is distinct, non-duplicative, and adds new value."],
  ["Annotation readiness", "Well-labeled or easy to label with high confidence."],
];
const OUTCOMES27: Array<[string, string]> = [
  ["Pass", "High-quality submission. Ready for acceptance and rewards."],
  ["Needs action", "Missing or weak elements. Contributor should improve and resubmit."],
  ["Partial accept", "Usable for some purposes. Accepted with limitations or adjustments."],
  ["Reject", "Does not meet requirements. Not accepted for this task."],
];
export function DataQuestQualityModel() {
  const [f, setF] = useState(0);
  const [o, setO] = useState(0);
  const [inf, setInf] = useState(1);
  return <Dq n="27" title="Quality score model" sub="How a submission is judged before it becomes trustworthy data. Center: Submission quality — Low · Medium · High influence." label="DataQuest quality score model — interactive rebuild of CyberOrigin_27" foot="Quality scoring should explain outcomes, not behave like a black box — Clear reasons build trust, help contributors improve, and keep data reliable">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{QUALITY27.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === f ? " is-on" : ""}`} aria-pressed={i === f} onClick={() => setF(i)}><span className="tks-num" style={{ background: ACC }}>{i + 1}</span> <b>{t}</b><p style={{ color: "#555", margin: "5px 0 0" }}>{b}</p></button>)}</div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Influence of the selected factor</p>
    <Chips items={["Low influence", "Medium influence", "High influence"]} value={inf} onPick={setInf} />
    <p className="tks-kicker" style={{ marginTop: 10 }}>Score outcomes</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{OUTCOMES27.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === o ? " is-on" : ""}`} aria-pressed={i === o} onClick={() => setO(i)}><b>{t}</b><p style={{ color: "#555", margin: "4px 0 0" }}>{b}</p></button>)}</div>
    <p aria-live="polite" style={{ margin: "8px 0 0" }}>Factor <b>{QUALITY27[f][0]}</b> ({["Low", "Medium", "High"][inf]} influence) feeds the outcome: <b>{OUTCOMES27[o][0]}</b>.</p>
  </Dq>;
}

/* ---------------- 28 — Reward calculation ---------------- */
const REWARD28: Array<[string, string]> = [
  ["Base reward", "Platform sets a base reward for the task upfront."],
  ["Difficulty bonus", "Higher for more complex or challenging tasks."],
  ["Device bonus", "Accounts for device capabilities and sensors used."],
  ["Location bonus", "Reflects location diversity, accessibility, or risk level."],
  ["Scarcity bonus", "Higher when data is scarce or in high demand."],
  ["Quality bonus", "Rewards verified accuracy, completeness, and consistency."],
];
const REWARD_FLOW28: Array<[string, string]> = [
  ["Quoted estimate", "Platform provides an estimated reward before you start. — “We quote an estimated reward upfront so you know what to expect.”"],
  ["Contribution performed", "You complete the task and submit your contribution."],
  ["Review outcome", "Your submission is reviewed for quality and policy compliance."],
  ["Final reward", "Final reward is calculated based on outcome and applicable factors. — “Quality directly impacts your final reward — higher quality earns more.”"],
];
export function DataQuestRewardCalculation() {
  const [f, setF] = useState(0);
  const [s, setS] = useState(0);
  const [outcome, setOutcome] = useState(0);
  return <Dq n="28" title="Reward calculation" sub="A reward should reflect task effort, operating constraints, and verified quality. Bonuses are multiplicative. Minimum and maximum limits may apply." label="DataQuest reward calculation — interactive rebuild of CyberOrigin_28" foot="Understandable — Clear factors and simple rules · Predictable — Consistent logic you can rely on · Fair — Rewards reflect effort, risks, and verified quality · Non-speculative — No random boosts or opaque adjustments">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{REWARD28.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === f ? " is-on" : ""}`} aria-pressed={i === f} onClick={() => setF(i)}><b style={{ color: ACC }}>{t}</b><p style={{ color: "#555", margin: "4px 0 0" }}>{b}</p></button>)}</div>
    <div style={{ marginTop: 10 }}><Chips items={["Full acceptance", "Rejection — No reward for rejected submissions", "Partial acceptance — Reward may be reduced for partial acceptance"]} value={outcome} onPick={setOutcome} /></div>
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Example (as printed, verbatim)</p>
      <p style={{ fontSize: 14, margin: 0 }}>$1.50 Base reward × 1.20 Difficulty × 1.10 Device × 1.15 Location × 1.30 Scarcity × 1.25 Quality − 0% Rejection = <b>$2.78 Final reward</b></p>
      <p style={{ color: "#888", margin: "5px 0 0" }}>Printed example reproduced exactly as shown on the slide{outcome > 0 ? ` · Outcome selected: ${outcome === 1 ? "Rejection" : "Partial acceptance"}` : ""}.</p></div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>How a reward is settled</p>
    <Flow steps={REWARD_FLOW28} s={s} setS={setS} />
  </Dq>;
}

/* ---------------- 29 — Ledger and settlement flow ---------------- */
const LEDGER29: Array<[string, string]> = [
  ["Quoted reward", "Estimated at acceptance."],
  ["Reserved amount", "Budget set aside and task reserved."],
  ["Approved amount", "Quality verified and amount confirmed."],
  ["Available balance", "Funds released and available to contributor."],
  ["Payout request", "Payment requested by contributor."],
  ["Settled transaction", "Transaction processed and payout completed."],
];
export function DataQuestLedger() {
  const [s, setS] = useState(0);
  const [avail, setAvail] = useState(false);
  return <Dq n="29" title="Ledger and settlement flow" sub="How an estimated reward becomes an available payout. DataQuest — Workflow & Trust Layer." label="DataQuest ledger and settlement flow — interactive rebuild of CyberOrigin_29" foot="Settlement clarity is a trust feature, not only a finance feature — Clear states. Transparent transitions. Confident contributors">
    <Flow steps={LEDGER29} s={s} setS={setS} />
    <p className="tks-kicker" style={{ marginTop: 10 }}>Pending vs. available</p>
    <div style={{ display: "flex", gap: 6 }} role="group" aria-label="Pending or available balance">
      <button type="button" className="tks-chip" aria-pressed={!avail} onClick={() => setAvail(false)}>Pending (reserved)</button>
      <button type="button" className="tks-chip" aria-pressed={avail} onClick={() => setAvail(true)}>Available</button>
    </div>
    <div className="tks-card" style={{ marginTop: 8 }} aria-live="polite">{avail ? <><b>Available</b> — Released after approval. Ready to be paid out.</> : <><b>Pending (reserved)</b> — Budget is locked for the task. Not spendable or withdrawable.</>}
      <p style={{ color: "#555", margin: "5px 0 0" }}>Pending (reserved) funds are held to secure the task. Available funds are released after approval and ready to be paid out. Every step is recorded on the ledger for transparency, auditability, and contributor confidence.</p></div>
  </Dq>;
}

/* ---------------- 30 — Reward model options ---------------- */
const MODELS30: Array<[string, string, Array<[string, string]>]> = [
  ["Points", "Non-monetary points", [["Medium", "Abstract value; harder to interpret."], ["Medium", "Requires points system, rules, and UX."], ["Medium", "Seen as internal scoring, not real value."], ["Medium", "Indirect link to value; conversion is unclear."], ["Low", "Generally not treated as a financial instrument."]]],
  ["Fiat-equivalent credits", "USD reward credits", [["High", "Easy to understand: “$X in rewards.”"], ["Low", "Leverages existing systems; simple to launch."], ["High", "Clear, familiar, and transparent."], ["High", "Directly tied to USD value of contributions."], ["Low", "Positioned as a reward/credit, not an investment."]]],
  ["USDC", "Stablecoin (USDC)", [["High", "Well-known, on-chain USD value."], ["Medium", "Requires wallet, KYC/AML considerations."], ["High", "Backed by regulated reserves."], ["High", "Direct, liquid, and settlement-ready."], ["Medium", "May be viewed as a digital asset in some jurisdictions."]]],
  ["Proprietary token", "e.g., $MECKA (hypothetical)", [["Low", "Unfamiliar asset; requires education."], ["High", "Smart contracts, tokenomics, liquidity, compliance."], ["Low", "Low trust without deployed contract and history."], ["Low", "Value is speculative until real utility and liquidity."], ["High", "High risk of being viewed as a security/investment."]]],
];
const CRITERIA30: Array<[string, string]> = [
  ["User clarity", "How easy is it for contributors to understand?"],
  ["Implementation complexity", "How hard is it to build and operate?"],
  ["Trust", "How much confidence will contributors have?"],
  ["Settlement realism", "How closely does the reward reflect real value delivered?"],
  ["Portfolio claim risk", "Risk of being perceived as an investment/security?"],
];
export function DataQuestRewardModels() {
  const [m, setM] = useState(1);
  const cur = MODELS30[m];
  return <Dq n="30" title="Reward model options" sub="Compare public launch options for contributor rewards. Recommended for public launch: USDC-equivalent reward estimate — Strongest on trust, clarity, and settlement realism. Easy to understand. Easy to deliver." label="DataQuest reward model options — interactive rebuild of CyberOrigin_30" foot="Editorial note: Do not present $MECKA as a live public asset without deployed contract and settlement evidence — Start with a clear, simple reward promise. You can evolve the model as the platform matures">
    <Chips items={MODELS30.map(([n]) => n)} value={m} onPick={setM} />
    <div className="tks-detail" aria-live="polite"><b style={{ fontSize: 14 }}>{cur[0]}</b> — {cur[1]}{m === 1 ? <span className="tks-tag" style={{ marginLeft: 6 }}>★ RECOMMENDED</span> : null}{m === 3 ? <span className="tks-tag" style={{ marginLeft: 6 }}>⊘ NOT RECOMMENDED — High complexity, weak evidence unless deployed settlement proof exists</span> : null}
      <table className="tks-table" style={{ marginTop: 8 }}><tbody>{CRITERIA30.map(([c, q], i) => <tr key={c}><td><b>{c}</b><br /><span style={{ color: "#777" }}>{q}</span></td><td><b>{cur[2][i][0]}</b> — {cur[2][i][1]}</td></tr>)}</tbody></table>
    </div>
  </Dq>;
}

/* ---------------- 31 — Information Architecture ---------------- */
const IA31: Array<[string, string, string[], string]> = [
  ["Discover", "Find and explore tasks to work on", ["Browse categories", "Search & filters", "Recommended", "Task cards"], "Preview task (Quick view)"],
  ["Task Detail", "Understand task requirements and eligibility", ["Requirements", "Eligibility", "Task overview", "Tips & examples"], "Check eligibility"],
  ["Capture", "Capture high-quality data with guidance", ["Guided capture", "Real-time tips", "Quality guidance", "Capture review"], "Retake / Discard"],
  ["Uploads", "Upload and manage captured data", ["Uploading", "Processing status", "Upload history", "Retry failed"], "Upload details"],
  ["Verification", "Check status and track verification progress", ["In review", "Needs changes", "Approved", "Quality feedback"], "Review details"],
  ["Rewards", "Track earnings and payout history", ["Earnings overview", "Payouts", "Bonuses", "Payout method"], "Payout details"],
  ["Wallet", "Manage balance and transactions", ["Balance overview", "Transactions", "Payment methods", "Withdrawal"], "Withdraw funds"],
  ["Profile", "Manage account and preferences", ["Personal info", "Performance", "Activity history", "Preferences"], "Edit profile"],
  ["Help", "Get help and learn the ropes", ["Help center", "Guides & tips", "FAQs", "Contact support"], "Submit request"],
  ["Settings", "App settings and configuration", ["Notifications", "Privacy & data", "Security", "App preferences"], "Confirm action"],
];
export function DataQuestIA() {
  const [s, setS] = useState(0);
  const cur = IA31[s];
  return <Dq n="31" title="DataQuest Information Architecture" sub="First-launch information architecture for the DataQuest contributor product. Home — Dashboard overview and key actions. · 10 Primary sections · 34+ Screens · Contributor Product · Human-in-the-loop At the core" label="DataQuest information architecture — interactive rebuild of CyberOrigin_31" foot="Cross-cutting elements: Notifications — System alerts and updates · Quality Standards — Guidelines that ensure data quality · Feedback — In-product feedback and improvements · Onboarding — New contributor journey · Learning Center — Tips, best practices, and tutorials · Leaderboards — Community rankings and recognition">
    <div className="tks-flow" role="group">{IA31.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">⇢</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{i + 1} {t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> — {cur[1]}<p style={{ margin: "6px 0 0" }}>Subsections: {cur[2].join(" · ")}</p><p style={{ margin: "4px 0 0" }}>Utility / modal: {cur[3]}</p></div>
  </Dq>;
}

/* ---------------- 32 — Task Taxonomy ---------------- */
const TAXONOMY: Array<[string, string, string[]]> = [
  ["Environment", "Where the task takes place.", ["Indoor (e.g., kitchen, office)", "Outdoor (e.g., street, park)", "Urban (e.g., city, traffic)", "Rural (e.g., farmland, village)", "Digital/Virtual (e.g., app, web)"]],
  ["Action Type", "What the contributor is asked to do.", ["Capture / Record", "Verify / Validate", "Identify / Classify", "Transcribe / Describe", "Measure / Count", "Compare / Evaluate"]],
  ["Device", "The primary device used to complete the task.", ["Smartphone", "Web Browser (Desktop)", "Wearable (e.g., smartwatch)", "Camera / DSLR", "IoT Device / Sensor"]],
  ["Sensor Modality", "The type of data captured or used.", ["Image / Photo", "Video", "Audio", "Text / OCR", "Location (GPS)", "Motion / IMU"]],
  ["Duration", "Expected time to complete the task.", ["Micro (< 1 min)", "Short (1–5 min)", "Medium (5–15 min)", "Long (15–30 min)", "Extended (30+ min)"]],
  ["Difficulty", "Cognitive effort and complexity required.", ["Very Easy", "Easy", "Moderate", "Hard", "Expert"]],
  ["Safety", "Risk level associated with task execution.", ["Low Risk", "Medium Risk", "High Risk", "Hazardous / Restricted"]],
  ["Location", "Geographic scope or specificity.", ["Global", "Country", "Region / State", "City", "Specific Venue / Address"]],
  ["Privacy Level", "Sensitivity of data captured or shared.", ["Public", "Low Privacy", "Medium Privacy", "High Privacy", "Restricted / Confidential"]],
  ["Reward", "Incentive structure for completion.", ["Fixed Payout", "Tiered Bonus", "Quality Bonus", "Streak Bonus", "Referral / Community Bonus"]],
];
export function DataQuestTaxonomy() {
  const [pick, setPick] = useState<Record<number, number>>({ 0: 0, 1: 0, 2: 0, 3: 1, 4: 2 });
  const [dim, setDim] = useState(0);
  const chosen = TAXONOMY.map(([, , vals], i) => (pick[i] !== undefined ? vals[pick[i]] : null)).filter(Boolean) as string[];
  return <Dq n="32" title="DataQuest Task Taxonomy" sub="A multidimensional framework for classifying verifiable human-action tasks across real-world contexts. This taxonomy ensures every task is well-scoped, verifiable, safe, and valuable — enabling scalable quality data and trusted rewards." label="DataQuest task taxonomy — interactive rebuild of CyberOrigin_32" foot="A structured taxonomy enables consistent task design, better matching, and higher quality outcomes — Clear task scoping · Safer execution for everyone · Higher quality data · Fair rewards and trust">
    <Chips items={TAXONOMY.map(([n]) => n)} value={dim} onPick={setDim} />
    <div className="tks-detail" aria-live="polite"><b>{TAXONOMY[dim][0]}</b> — {TAXONOMY[dim][1]}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 8 }}>{TAXONOMY[dim][2].map((v, i) => <button key={v} type="button" className="tks-chip" aria-pressed={pick[dim] === i} onClick={() => setPick((p) => ({ ...p, [dim]: i }))}>{v}</button>)}</div>
    </div>
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Your task classification ({chosen.length} / {TAXONOMY.length} dimensions set)</p><p style={{ margin: 0 }}>{chosen.length ? chosen.join(" · ") : "Select a value in each dimension to classify a task."}</p></div>
  </Dq>;
}

/* ---------------- 33 — Component Library ---------------- */
const LIB33: Array<[string, string]> = [
  ["Overview", "Sidebar as printed: Overview · Tasks · Capture & Upload · Verification · Rewards & Ledger · Alerts & Feedback · Navigation · Foundation."],
  ["Task cards", "Urban Street Scene — Capture a street scene that includes storefronts, pedestrian activity, and vehicles. $0.20–$2.50 / task · ≈3 min · Receipt OCR — Transcribe text, totals, date, and store information. $0.10–$0.60 / task · 2 min · Audio Recording — Record clear audio of the requested environment or spoken content. $0.20–$1.20 / task · 3 min · Product Shelf Image — Capture products on shelf with clear labels and pricing visible. $0.15–$0.75 / task · 2 min · + Add new task."],
  ["Capture & Upload", "Capture controls: Image Capture — Upload high-quality photos. · Video Capture — Record short videos (up to 60s). · Audio Recording — Record clear audio (up to 2 min). · Location Verification — Verify place, address, and coordinates. · Text & OCR — Extract and transcribe text accurately. · Survey & Annotation — Answer questions or annotate data. Upload items: Drag and drop files here or click to browse — JPG, PNG, MP4, MP3, PDF up to 20MB."],
  ["Verification", "Requirements rows (Required / Recommended / Not allowed): Take a clear, in-focus photo — Required · Include at least 2 storefronts — Required · Capture pedestrians or vehicles — Recommended · No sensitive or private information — Not allowed · Good lighting and minimal blur — Not allowed (as printed). Review statuses: Pending — Under review · In review — Quality check in progress · Approved — Reward granted, Added to balance · Paid out — Claimed, Available to use · Rejected — Does not meet requirements."],
  ["Rewards & Ledger", "Reward quotes: $0.20–$2.50 per task · $0.10–$0.60 per task · $1.00–$5.00 per task · $87.40 estimated total. Ledger entries: May 19, 2025 2:15 PM Urban Street Scene Approved $1.20 +$1.20 · May 19, 2025 9:41 AM Receipt OCR Approved $0.35 +$0.35 · May 18, 2025 6:22 PM Audio Recording In review $1.00 — · May 18, 2025 3:10 PM Product Shelf Image Rejected $0.00 — · May 17, 2025 11:05 AM Survey Response Approved $0.50 +$0.50. Eligibility chips: All tasks · Beginner · Featured · Audio · Image · OCR · Location required · 18+ only · USDC only."],
  ["Alerts & Feedback", "Great job! Your task was approved. · Your submission is under review. · Please check the requirements and try again. · This task was not approved. See details. Buttons: Primary Submit task · Secondary Save draft · Tertiary View details → · Sizes Large / Medium / Small."],
  ["Navigation", "Top navigation: DataQuest — Marketplace · My tasks · Earnings · Leaderboard · Help · AM. Tabs: Overview · My tasks · Earnings · Wallet · Leaderboard · More. Pagination: ← 1 2 3 … 10 →. Breadcrumb: Marketplace > Tasks > Urban Street Scene."],
  ["Foundation", "Built for clarity. Designed for trust. Made to scale. Consistent components. Better experiences. Stronger data. — Consistency across screens · Faster design and development · Better user understanding · Stronger trust and transparency · Scalable for future growth."],
];
export function DataQuestComponentLibrary() {
  const [s, setS] = useState(1);
  return <Dq n="33" title="Component Library" sub="A unified set of components for building clear, consistent, and trustworthy task experiences." label="DataQuest component library — interactive rebuild of CyberOrigin_33">
    <Chips items={LIB33.map(([n]) => n)} value={s} onPick={setS} />
    <div className="tks-detail" aria-live="polite"><b>{LIB33[s][0]}</b><p style={{ margin: "5px 0 0" }}>{LIB33[s][1]}</p></div>
  </Dq>;
}

/* ---------------- 34 — Conceptual Object Model ---------------- */
const OBJECTS34: Array<[string, string, string, string]> = [
  ["Campaign", "A collection of tasks with a goal and reward pool.", "One campaign has many task templates.", "defines → Task Template, Task Instance, Requirement"],
  ["Dataset", "Source data used to create tasks and validate submissions.", "Datasets power task templates and validation.", "used by → Task Template, Requirement"],
  ["Task Template", "A reusable blueprint defining the work, instructions, and requirements.", "One template can generate many task instances.", "generates → Task Instance"],
  ["Task Instance", "A specific, unique task created from a template for a contributor.", "Each instance must be completed.", "has → Requirement · results in → Submission"],
  ["Requirement", "The criteria and guidance that define a high-quality completion.", "Instances have multiple requirements.", "defines quality for → Task Instance, Submission"],
  ["Submission", "The contributor's completed work submitted for review.", "A submission is made for one task instance.", "undergoes → Review"],
  ["Review", "Quality evaluation of a submission against requirements.", "Approved submissions lead to rewards.", "approved earns → Reward"],
  ["Reward", "The incentive granted for approved, quality work.", "Rewards motivate and recognize contributors.", "earns ← Contributor"],
  ["Contributor", "A person who discovers, completes, and earns rewards.", "Contributors complete tasks and earn rewards.", "claims & works on → Task Instance"],
];
export function DataQuestObjectModel() {
  const [s, setS] = useState(2);
  const cur = OBJECTS34[s];
  return <Dq n="34" title="Conceptual Object Model" sub="The core entities and relationships that power verifiable human-action tasks." label="DataQuest conceptual object model — interactive rebuild of CyberOrigin_34">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{OBJECTS34.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)}><b style={{ color: ACC }}>{t}</b><p style={{ color: "#555", margin: "4px 0 0" }}>{b}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> — {cur[2]}<br />Relationships: {cur[3]}</div>
  </Dq>;
}

/* ---------------- 36 — Task card comparison (co-dq-30) ---------------- */
const CARDS36: Array<[string, string, string, string[], string[], string[]]> = [
  ["A", "Compact & action-first", "Low density", ["Highlights the primary action and reward with essential details up front.", "Location — 20–30 min · Eligibility — Be 18+"], ["Strong action visibility and clear reward prominence", "Quick to scan; minimal cognitive load"], ["Less upfront detail about requirements", "Eligibility shown but not deeply explained"]],
  ["B", "Balanced & informative", "Medium density", ["Balances context, requirements, eligibility, and reward.", "Requirements: Include at least 2 storefronts · Capture pedestrians or vehicles · +2 more · Eligibility: Be 18+ · Have a smartphone · Good lighting · View all (3)"], ["Balanced visibility across all key elements", "Requirements and eligibility easily accessible", "Good scannability with structure"], ["Slightly taller card increases scroll", "Reward less dominant than option A"]],
  ["C", "Detail-rich & assurance-first", "High density", ["Maximizes clarity on eligibility and requirements for confidence.", "Requirements: Include at least 2 storefronts · Capture pedestrians or vehicles · No sensitive or private information · Good lighting and minimal blur · View all requirements (4) · ✓ Eligible"], ["Highest clarity on requirements & eligibility", "Builds confidence and reduces ambiguity", "Great for complex task types"], ["Most dense; heavier to scan", "Primary action less prominent"]],
];
export function DataQuestTaskCardComparison() {
  const [s, setS] = useState(1);
  const [started, setStarted] = useState(false);
  const cur = CARDS36[s];
  return <Dq n="36" title="Task card comparison" sub="Exploring different balances of information density, eligibility visibility, reward prominence, and primary action emphasis. · co-dq-30" label="DataQuest task card comparison — interactive rebuild of CyberOrigin_36" foot="Next steps: Validate with user testing on task discovery and selection · Refine hierarchy and microcopy based on feedback">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{CARDS36.map(([l, t, d], i) => <button key={l} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => { setS(i); setStarted(false); }}><span className="tks-num" style={{ background: ACC }}>{l}</span> <b>{t}</b><p className="tks-kicker" style={{ margin: "4px 0 0" }}>{d}{i === 1 ? " · ★ Recommended direction" : ""}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">
      <p style={{ marginTop: 0 }}><b>Image Capture — Urban Street Scene</b> · Capture a street scene that includes storefronts, pedestrians, and vehicles. · Reward <b style={{ color: ACC }}>$1.20</b> per approved task · Est. time 20–30 min · Location Downtown area</p>
      {cur[3].map((x) => <p key={x} style={{ margin: "4px 0" }}>{x}</p>)}
      <p style={{ margin: "8px 0 0" }}><button type="button" className="tks-btn" style={{ background: ACC, borderColor: ACC }} onClick={() => setStarted(true)}>Start task →</button> {started ? <span>Direction {cur[0]} card action — as printed, every variant keeps “Start task” as the primary action.</span> : null}</p>
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 8 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>✓ Pros</p><ul style={{ margin: 0, paddingLeft: 16 }}>{cur[4].map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>✕ Cons</p><ul style={{ margin: 0, paddingLeft: 16 }}>{cur[5].map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div>
      <p style={{ margin: "8px 0 0" }}><b>Recommendation — Direction B · Balanced & informative:</b> Provides the best balance of scannability, context, and clarity. It surfaces key requirements and eligibility without overwhelming the user, while keeping the primary action and reward visible and accessible.</p>
    </div>
  </Dq>;
}

/* ---------------- 37 — Contributor flow: Capture task ---------------- */
const WIREFLOW37: Array<[string, string, string]> = [
  ["Accept task", "Marketplace — Urban Street Scene · Image Capture · $1.20 · Task overview: Capture a street with storefronts, pedestrians, and vehicles. · Reward $1.20 per approved task · [Accept task] / Not now", "Review task overview, requirements, and reward. Accept when ready to begin."],
  ["Permissions", "Allow camera access — DataQuest needs access to your camera to capture photos. Camera Required ✓ · Location Recommended ✓ · Storage Required ✓ · [Continue] · Why we ask", "Grant required and recommended permissions to enable capture and location tagging."],
  ["Setup check", "Let's make sure you're set — We'll check your device and settings before you start. Camera Ready ✓ · Location services On ✓ · Internet connection Good ✓ · Storage 2.4 GB available ✓ · [Continue]", "Quick system check verifies camera, location, connection, and storage are ready."],
  ["Record", "Capture — Step 1 of 6 · 00:30 · Capture the scene as described in the requirements.", "Capture the required scene. Use guidance, timer, and tips to get the right shot."],
  ["Review", "Review your capture — Make sure it meets the requirements. Quick checklist: Scene includes storefronts ✓ · Pedestrians visible ✓ · Vehicles visible ✓ · Image is clear and in focus ✓ · [Looks good] / Retake", "Review the photo and confirm it meets the requirements before continuing."],
  ["Pre-check", "Checking your capture — We're running a quick pre-check to help ensure quality. Image quality Checking… · Scene content Checking… · Focus Checking… · Exposure Checking… — “This helps you fix issues before uploading.”", "Automated pre-check validates quality and content to reduce rejections."],
  ["Upload", "Uploading your capture — Please wait while we securely upload your photo. Upload progress 65% — “Stay on this screen until upload completes.”", "Secure upload in progress. Stay on this screen until the upload is complete."],
  ["Confirmation", "Capture submitted! — Thank you for your contribution. Task Urban Street Scene · Reward $1.20 · Status Submitted · [Return to task] · View my tasks", "Capture submitted successfully with status and reward confirmation."],
];
export function DataQuestCaptureWireflow() {
  const [s, setS] = useState(0);
  const cur = WIREFLOW37[s];
  return <Dq n="37" title="Contributor flow: Capture task" sub="End-to-end wireflow from accepting a task to confirmation. About this wireflow: This wireflow shows the core contributor experience for completing a capture task on the DataQuest mobile web app." label="DataQuest capture task wireflow — interactive rebuild of CyberOrigin_37" foot="Wireflow for illustrative purposes only. Final UI may vary — How guidance stays visible during capture: Requirements always accessible · In-context tips · Pre-check feedback · Clear next steps">
    <Flow steps={WIREFLOW37.map(([t, b]): [string, string] => [t, b])} s={s} setS={setS} />
    <p aria-live="polite" style={{ margin: "8px 0 0", color: "#555" }}>{cur[2]} Guidance is persistent throughout the flow — before, during, and after capture — to help contributors meet requirements and reduce rework.</p>
    <p style={{ display: "flex", gap: 6, marginTop: 8 }}><button type="button" className="tks-btn tks-btn--ghost" disabled={s === 0} onClick={() => setS((v) => v - 1)}>← Previous</button><button type="button" className="tks-btn" disabled={s >= WIREFLOW37.length - 1} onClick={() => setS((v) => v + 1)}>Next step →</button></p>
  </Dq>;
}

/* ---------------- 38 — Decision log (co-dq-32) ---------------- */
const DECISIONS38: Array<[string, string, Array<[string, string, string]>]> = [
  ["Reward-first task cards", "Highlighting reward amounts on task cards to drive clicks.", [
    ["Degrades data quality", "Reward salience attracts low-intent users and increases spam.", "Evidence: Pilot tests showed 37% higher invalid submission rate."],
    ["Wrong motivation", "Users optimized for payout, not contribution. This misaligned with our mission.", "Evidence: Interviews revealed users skipped task details."],
    ["Hurts trust", "Feels transactional and increases skepticism about task intent.", "Evidence: 22% less trust in “why this matters” (usability study)."],
  ]],
  ["Hidden capture requirements", "Showing instructions only after starting the capture flow.", [
    ["Higher failure rate", "Users captured incorrect data, leading to rejections.", "Evidence: 28% of submissions failed due to unclear requirements."],
    ["Wasted effort", "Users invested time before discovering they missed something.", "Evidence: Session replays showed frustration and drop-offs."],
    ["Lower confidence", "Late instructions created doubt about what “good” looks like.", "Evidence: 19% of users reported confusion in feedback surveys."],
  ]],
  ["Immediate wallet prompts", "Asking users to connect a wallet before exploring or starting tasks.", [
    ["Early friction", "Creates a barrier before users experience value.", "Evidence: 41% of new users dropped off at wallet prompt."],
    ["Reduces exploration", "Users skip learning about tasks and rewards.", "Evidence: 35% lower task discovery before wallet connect."],
    ["Signals the wrong priority", "Feels finance-first, not mission-first.", "Evidence: Users expected tasks first, wallet later."],
  ]],
];
export function DataQuestDecisionLog() {
  const [d, setD] = useState(0);
  const cur = DECISIONS38[d];
  return <Dq n="38" title="Decision log" sub="Evaluating alternative patterns for task completion and rewards to ensure DataQuest feels clear, trustworthy, and motivating — without friction or confusion. · Case study · Design decision log · co-dq-32" label="DataQuest decision log — interactive rebuild of CyberOrigin_38" foot="Our chosen direction: Lead with clarity and purpose. Present requirements up front, guide users step-by-step, and introduce wallet connection after value is experienced">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{DECISIONS38.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === d ? " is-on" : ""}`} aria-pressed={i === d} onClick={() => setD(i)}><span className="tks-num" style={{ background: "#c22f3d" }}>{i + 1}</span> <b>{t}</b> <span className="tks-tag">✕ REJECTED</span><p style={{ color: "#555", margin: "5px 0 0" }}>{b}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Why we rejected it</p>
      {cur[2].map(([t, b, ev]) => <p key={t} style={{ margin: "6px 0" }}><b>{t}</b> — {b}<br /><span style={{ color: "#777" }}>{ev}</span></p>)}
      <p style={{ margin: "8px 0 0" }}>Marketplace cards as printed in this alternative: Image Capture $2.50 per task · Location Verification $1.50 per task · Text & OCR $0.60 per task · “Connect your wallet — Connect wallet / Maybe later · Secure · Non-custodial · You're in control.”</p></div>
  </Dq>;
}

/* ---------------- 39 — Evolution of a unified system ---------------- */
const EVOLUTION39: Array<[string, string, string]> = [
  ["Initial desktop prototype", "Explored core flows and layout patterns for tasks, earnings, and contributor profiles.", "Marketplace categories and Urban Street Scene task detail ($1.20, leaderboard Sarah J. $245.60 / Mike T. $198.30 / Alex M. $176.30 / Priya K. $154.20 / You $87.40) as printed. Functional layouts and task flows validated early user needs."],
  ["Low-fidelity mobile exploration", "Mapped end-to-end mobile flows to validate structure and user journey.", "Wireframe flows as printed: Discover · Task detail · Capture · Upload · Rewards · Eligibility · Quality check · Submitted · Payouts · Profile. Validated flows and interactions before moving into visual design."],
  ["Unified DataQuest system", "A cohesive identity and reward experience that's clear, consistent, and trustworthy.", "Unified product identity (DataQuest by CyberOrigin) · Clear reward states Pending → In review → Approved → Paid out · Consistent value and transparency · Overview: Wallet balance $128.45 · Pending rewards $42.75 · Lifetime earnings $1,428.70. A unified, trustworthy system that scales with clarity and confidence."],
];
export function DataQuestEvolution() {
  const [s, setS] = useState(0);
  return <Dq n="39" title="The evolution of a unified data collection and rewards system" sub="From early exploration to a cohesive product experience built for clarity, trust, and scale." label="DataQuest evolution — interactive rebuild of CyberOrigin_39">
    <Flow steps={EVOLUTION39.map(([t, b, d]): [string, string] => [t, `${b} ${d}`])} s={s} setS={setS} />
    <p style={{ display: "flex", gap: 6, marginTop: 10 }}><button type="button" className="tks-btn tks-btn--ghost" disabled={s === 0} onClick={() => setS((v) => v - 1)}>← Earlier stage</button><button type="button" className="tks-btn" disabled={s >= 2} onClick={() => setS((v) => v + 1)}>Later stage →</button></p>
  </Dq>;
}

/* ---------------- 40 — Visual Foundations ---------------- */
const TYPE40: Array<[string, string, string, string]> = [
  ["Display", "Unified AI for real results", "48 / 56", "Bold"],
  ["H1", "High-quality human data", "32 / 40", "Bold"],
  ["H2", "Marketplace overview", "24 / 32", "Semibold"],
  ["H3", "Task performance", "20 / 28", "Semibold"],
  ["Body (Base)", "DataQuest connects data and people", "16 / 24", "Regular"],
  ["Small", "Supporting information and helper text", "14 / 20", "Regular"],
  ["Caption", "Labels, hints, and metadata", "12 / 16", "Regular"],
];
const COLORS40: Array<[string, string, string]> = [
  ["Primary 500", "#6C3BFF", "Brand, key actions, links"], ["Primary 600", "#4F46FF", "Brand, key actions, links"], ["Primary 700", "#2563EB", "Brand, key actions, links"],
  ["Success", "#16A34A", "Status, feedback, alerts"], ["Warning", "#F59E0B", "Status, feedback, alerts"], ["Error", "#EF4444", "Status, feedback, alerts"], ["Info", "#3B82F6", "Status, feedback, alerts"],
  ["Neutral 50", "#FAFAFC", "Surfaces, text, borders"], ["Neutral 100", "#F4F5F8", "Surfaces, text, borders"], ["Neutral 200", "#E5E7EB", "Surfaces, text, borders"], ["Neutral 300", "#D1D5DB", "Surfaces, text, borders"], ["Neutral 400", "#9CA3AF", "Surfaces, text, borders"], ["Neutral 500", "#6B7280", "Surfaces, text, borders"], ["Neutral 600", "#4B5563", "Surfaces, text, borders"], ["Neutral 700", "#374151", "Surfaces, text, borders"], ["Neutral 800", "#1F2937", "Surfaces, text, borders"], ["Neutral 900", "#111827", "Surfaces, text, borders"],
];
const FOUND40 = ["Typography", "Spacing & Grid", "Color System", "Radius & Elevation", "Iconography", "Motion Principles", "Accessibility"];
export function DataQuestVisualFoundations() {
  const [tab, setTab] = useState(0);
  const [type, setType] = useState(0);
  const [col, setCol] = useState(0);
  const [dur, setDur] = useState(1);
  return <Dq n="40" title="Visual Foundations" sub="The design system behind a clear, consistent, and trustworthy experience. One system. Every experience. Always DataQuest. · DataQuest Design System · Version 1.0 · © 2025 CyberOrigin" label="DataQuest visual foundations — interactive rebuild of CyberOrigin_40" foot="Built with clarity. Designed for trust. Scaled for impact">
    <Chips items={FOUND40} value={tab} onPick={setTab} />
    <div className="tks-detail" aria-live="polite">
      {tab === 0 && <><b>Geist</b> — Clean. Modern. Human. Built for clarity at every scale.
        <div style={{ marginTop: 8 }}>{TYPE40.map(([style, ex, size, w], i) => <p key={style} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === type} onClick={() => setType(i)}>{style} · {size} · {w}</button></p>)}
        <p style={{ fontSize: [30, 26, 22, 19, 16, 14, 12][type], fontWeight: type <= 1 ? 800 : type <= 3 ? 600 : 400, margin: "8px 0 0" }}>{TYPE40[type][1]}</p></div></>}
      {tab === 1 && <><b>Spacing Scale (8pt base)</b> — 0 · 2 · 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 96. Layout Spacing Tokens: --space-0 0px · --space-1 4px · --space-2 8px · --space-3 12px · --space-4 16px · --space-6 24px · --space-8 32px · --space-10 40px · --space-12 48px · --space-16 64px.<br /><b>Grid System</b> — 12 Column Grid · Max width: 1440px · Gutter: 24px | Margin: 24px.</>}
      {tab === 2 && <><div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{COLORS40.map(([n, hex], i) => <button key={n} type="button" className="tks-chip" aria-pressed={i === col} onClick={() => setCol(i)}><span style={{ display: "inline-block", width: 12, height: 12, borderRadius: 3, background: hex, border: "1px solid #ccc" }} /> {n}</button>)}</div>
        <p style={{ margin: "8px 0 0" }}><b>{COLORS40[col][0]}</b> — {COLORS40[col][1]} · Usage: {COLORS40[col][2]}</p></>}
      {tab === 3 && <><b>Border Radius</b> — --radius-sm 4px · --radius-md 8px · --radius-lg 12px · --radius-xl 16px · --radius-2xl 24px · --radius-full 9999px.<br /><b>Elevation (Shadows)</b> — --elevation-0: 0 1px 2px 0 rgba(16,24,40,0.04) · --elevation-1: 0 2px 4px 0 rgba(16,24,40,0.06) · --elevation-2: 0 8px 16px 0 rgba(16,24,40,0.08) · --elevation-3: 0 16px 32px 0 rgba(16,24,40,0.12) · --elevation-4: 0 24px 48px 0 rgba(16,24,40,0.16).</>}
      {tab === 4 && <><b>Iconography</b> — Line icons with consistent stroke, corner, and optical balance. 2px stroke · 24px grid · Rounded caps & joins.</>}
      {tab === 5 && <><b>Motion Principles</b> — Purposeful: Motion supports understanding and feedback. · Subtle: Gentle easing and soft transitions feel natural. · Responsive: Immediate feedback builds confidence and trust. · Consistent: Shared timing and patterns across surfaces.
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Duration & Easing</p>
        <Chips items={["Fast 150ms ease-out", "Base 250ms ease-out", "Slow 350ms ease-out"]} value={dur} onPick={setDur} />
        <p style={{ margin: "6px 0 0" }}>Common Patterns: Fade · Slide · Scale — preview duration selected: {["150ms", "250ms", "350ms"][dur]}.</p></>}
      {tab === 6 && <><b>Accessibility — Accessible by design. Usable by everyone. Trusted by all.</b>
        <p style={{ margin: "6px 0 0" }}>Color Contrast: AA 4.5:1 for normal text · AAA 7:1 for large text · Use accessible token pairs. Text & Readability: Minimum size 12px · Line height ≥ 1.4 · Max line length ~70ch. Focus States: Visible focus on all interactive elements · Use --focus-ring. Keyboard Navigation: All actions available via keyboard · Logical tab order. Motion & Animation: Respect prefers-reduced-motion settings · Avoid auto-play. Screen Reader: Semantic HTML · ARIA labels · Announce changes.</p></>}
    </div>
  </Dq>;
}

/* ---------------- Routing ---------------- */
export function dataQuestChapterFor(file: string): ReactNode | null {
  if (file.startsWith("CyberOrigin_01")) return <DataQuestHero />;
  if (file.startsWith("CyberOrigin_02")) return <DataQuestPrototypeArchitecture />;
  if (file.startsWith("CyberOrigin_03")) return <DataQuestDataLoop />;
  if (file.startsWith("CyberOrigin_04")) return <DataQuestEcosystem />;
  if (file.startsWith("CyberOrigin_05")) return <DataQuestInitialPrototype />;
  if (file.startsWith("CyberOrigin_06")) return <DataQuestResolvedExposed />;
  if (file.startsWith("CyberOrigin_07")) return <DataQuestJourneySimple />;
  if (file.startsWith("CyberOrigin_08")) return <DataQuestLifecycleModel />;
  if (file.startsWith("CyberOrigin_09")) return <DataQuestLoFiKitchen />;
  if (file.startsWith("CyberOrigin_10")) return <DataQuestMobileHome />;
  if (file.startsWith("CyberOrigin_11")) return <DataQuestOwnershipTimeline />;
  if (file.startsWith("CyberOrigin_12")) return <DataQuestTrustContract />;
  if (file.startsWith("CyberOrigin_13")) return <DataQuestBottleneckMap />;
  if (file.startsWith("CyberOrigin_14")) return <DataQuestValueExchange />;
  if (file.startsWith("CyberOrigin_17")) return <DataQuestProfileWallet />;
  if (file.startsWith("CyberOrigin_18")) return <DataQuestEvidenceMap />;
  if (file.startsWith("CyberOrigin_19")) return <DataQuestNamingCleanup />;
  if (file.startsWith("CyberOrigin_20")) return <DataQuestRoleMap />;
  if (file.startsWith("CyberOrigin_21")) return <DataQuestJourneyDetailed />;
  if (file.startsWith("CyberOrigin_22")) return <DataQuestBoundedTasks />;
  if (file.startsWith("CyberOrigin_23")) return <DataQuestPrinciples />;
  if (file.startsWith("CyberOrigin_24")) return <DataQuestScopeMap />;
  if (file.startsWith("CyberOrigin_25")) return <DataQuestLifecycle />;
  if (file.startsWith("CyberOrigin_27")) return <DataQuestQualityModel />;
  if (file.startsWith("CyberOrigin_28")) return <DataQuestRewardCalculation />;
  if (file.startsWith("CyberOrigin_29")) return <DataQuestLedger />;
  if (file.startsWith("CyberOrigin_30")) return <DataQuestRewardModels />;
  if (file.startsWith("CyberOrigin_31")) return <DataQuestIA />;
  if (file.startsWith("CyberOrigin_32")) return <DataQuestTaxonomy />;
  if (file.startsWith("CyberOrigin_33")) return <DataQuestComponentLibrary />;
  if (file.startsWith("CyberOrigin_34")) return <DataQuestObjectModel />;
  if (file.startsWith("CyberOrigin_35")) return <DataQuestLoFiStreet />;
  if (file.startsWith("CyberOrigin_36")) return <DataQuestTaskCardComparison />;
  if (file.startsWith("CyberOrigin_37")) return <DataQuestCaptureWireflow />;
  if (file.startsWith("CyberOrigin_38")) return <DataQuestDecisionLog />;
  if (file.startsWith("CyberOrigin_39")) return <DataQuestEvolution />;
  if (file.startsWith("CyberOrigin_40")) return <DataQuestVisualFoundations />;
  return null;
}
