import { useState, type CSSProperties, type ReactNode } from "react";
import "./tokenta-slides.css";
import { DataQuestMarketplace, DataQuestStateMachine, DataQuestTaskDetailV0 } from "./DataQuestRebuilds";

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
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
      <span style={{ fontWeight: 800, fontSize: 13, color: "#191423" }}><span style={{ color: "#6C3BFF" }}>⬡</span> CyberOrigin</span>
      <span style={{ fontSize: 10.5, color: "#8a86a3", fontFamily: "ui-monospace,Menlo,monospace" }}>{n} / 40 · DataQuest</span>
    </div>
    <h3 style={{ fontSize: 40, background: "linear-gradient(92deg,#6C3BFF 10%,#2563EB 90%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{title}</h3>
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
const dqPhone: CSSProperties = { width: 138, flex: "none", background: "#fff", border: "2px solid #221d33", borderRadius: 20, padding: "7px 8px 9px", fontSize: 9.5, lineHeight: 1.4, color: "#33304a", boxShadow: "0 8px 20px rgba(60,40,160,0.13)" };
export function DataQuestHero() {
  const [s, setS] = useState(1);
  const [t, setT] = useState(0);
  return <Dq n="01" title="DataQuest" sub="by CyberOrigin — Human-action data marketplace for embodied AI." label="DataQuest hero — interactive rebuild of CyberOrigin_01">
    <div style={{ display: "grid", gridTemplateColumns: "296px 1fr", gap: 14, alignItems: "start" }}>
      <div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={dqPhone} aria-hidden="true">
            <div style={{ textAlign: "center", fontSize: 8.5, color: "#8a86a3" }}>9:41</div>
            <b style={{ fontSize: 11, color: "#14101f" }}>Discover</b>
            <div style={{ background: "linear-gradient(120deg,#6C3BFF,#2563EB)", color: "#fff", borderRadius: 9, padding: "6px 8px", margin: "5px 0" }}>Contributor balance<br /><b style={{ fontSize: 13 }}>$128.45 USD</b><br /><span style={{ opacity: 0.85 }}>Lifetime earnings $1,428.70</span></div>
            <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 5 }}>{["All", "Recommended", "Nearby", "Wearable"].map((f, i) => <span key={f} style={{ borderRadius: 999, padding: "1px 6px", background: i === 1 ? "#6C3BFF" : "#efeaff", color: i === 1 ? "#fff" : "#6C3BFF", fontWeight: 600 }}>{f}</span>)}</div>
            {HERO_TASKS.map(([n, , m]) => <div key={n} style={{ borderTop: "1px solid #eeeaf9", padding: "4px 0" }}><b>{n}</b><br /><span style={{ color: "#8a86a3" }}>{m}</span></div>)}
          </div>
          <div style={{ ...dqPhone, marginTop: 22 }} aria-hidden="true">
            <div style={{ textAlign: "center", fontSize: 8.5, color: "#8a86a3" }}>9:41</div>
            <b style={{ fontSize: 11, color: "#14101f" }}>Kitchen action capture</b><br /><span style={{ color: "#8a86a3" }}>Step 2 of 6</span>
            <div style={{ background: "linear-gradient(160deg,#3d3654,#191423)", color: "#fff", borderRadius: 9, padding: "8px", margin: "5px 0", minHeight: 74 }}>✋🔪<br /><b>“Chop the vegetable”</b><br /><span style={{ opacity: 0.85 }}>Use a clear cutting motion. Keep hands and tools in view.</span></div>
            <b>Quality hints</b><br />Lighting <span style={{ color: "#1d9e57", fontWeight: 700 }}>Good</span> · Stability <span style={{ color: "#1d9e57", fontWeight: 700 }}>Good</span> · View <span style={{ color: "#1d9e57", fontWeight: 700 }}>Good</span>
          </div>
        </div>
        <div style={{ display: "grid", gap: 5, marginTop: 10 }}>
          {[["👥", "Real people. Real actions."], ["🎯", "Guided capture. High quality data."], ["⚖", "Fair rewards. Transparent tracking."]].map(([i, x]) => <p key={x} style={{ margin: 0, fontSize: 12 }}><span style={{ marginRight: 7 }}>{i}</span><b>{x}</b></p>)}
        </div>
      </div>
      <div style={{ background: "#fff", border: "1px solid #ddd9f2", borderRadius: 13, overflow: "hidden", boxShadow: "0 10px 26px rgba(80,60,180,0.10)", fontSize: 11 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderBottom: "1px solid #eeeaf9" }}><span style={{ display: "flex", gap: 4 }}>{["#ff5f57", "#febc2e", "#28c840"].map((c) => <i key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "block" }} />)}</span><span style={{ flex: 1, textAlign: "center", background: "#f4f2fb", borderRadius: 5, padding: "2px 0", color: "#55506e" }}>🔒 app.dataquest.cyberorigin.ai</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", minHeight: 218 }}>
          <div style={{ borderRight: "1px solid #eeeaf9", padding: "9px 10px", display: "grid", gap: 5, alignContent: "start", color: "#55506e" }}>
            <b style={{ color: "#6C3BFF", fontSize: 12.5 }}>⬡ DataQuest</b>
            {["Overview", "Discover", "My Tasks", "Earnings", "Profile", "Wallet", "Settings"].map((x, i) => <span key={x} style={i === 0 ? { color: "#6C3BFF", fontWeight: 700, background: "#efeaff", borderRadius: 5, padding: "1px 5px" } : undefined}>{x}</span>)}
          </div>
          <div style={{ padding: "9px 12px" }}>
            <b style={{ fontSize: 13, color: "#14101f" }}>Overview</b> <span style={{ color: "#8a86a3" }}>· Welcome back, Alex Morgan</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, margin: "8px 0" }}>
              {[["Wallet balance", "$128.45", "USD"], ["Pending rewards", "$42.75", "In review"], ["Lifetime earnings", "$1,428.70", "All time"]].map(([k, v, s2]) => <div key={k} style={{ border: "1px solid #eeeaf9", borderRadius: 8, padding: "6px 8px" }}><span style={{ color: "#8a86a3" }}>{k}</span><br /><b style={{ fontSize: 15, color: "#14101f" }}>{v}</b> <span style={{ color: "#8a86a3" }}>{s2}</span></div>)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 10 }}>
              <div><b>Earnings overview</b><svg viewBox="0 0 160 44" style={{ width: "100%", height: 44, display: "block", marginTop: 3 }} aria-hidden="true"><polyline points="0,36 26,30 52,33 78,20 104,24 130,10 158,14" fill="none" stroke="#6C3BFF" strokeWidth="2.5" /><line x1="0" y1="42" x2="160" y2="42" stroke="#e3e0f5" /></svg><span style={{ color: "#8a86a3" }}>May 12 – May 18, 2025</span></div>
              <div style={{ textAlign: "center" }}><span style={{ display: "inline-flex", width: 52, height: 52, borderRadius: "50%", background: "conic-gradient(#6C3BFF 0 60%,#2563EB 60% 85%,#e3e0f5 85% 100%)", alignItems: "center", justifyContent: "center" }}><b style={{ background: "#fff", width: 34, height: 34, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>47</b></span><br /><span style={{ color: "#55506e" }}>Tasks completed<br />Approved 28 · In review 12 · Rejected 7</span></div>
            </div>
            <p style={{ margin: "7px 0 0", borderTop: "1px solid #eeeaf9", paddingTop: 6 }}>Recent activity — Kitchen action capture · <span style={{ color: "#1d9e57", fontWeight: 700 }}>Approved</span> · +$12.50 · Today, 9:41 AM<br />Outdoor walking · In review · +$10.00 · Yesterday, 6:21 PM<br />Wearable device tasks · In review · +$8.50 · May 16, 3:15 PM</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 14 }}>
      {HERO_STEPS.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)} style={{ textAlign: "left" }}><span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#6C3BFF,#2563EB)", color: "#fff", alignItems: "center", justifyContent: "center", fontWeight: 800, marginBottom: 5 }}>{i + 1}</span><br /><b>{t}</b><p style={{ color: "#555", margin: "4px 0 0", fontSize: 12 }}>{["Browse and filter tasks that match your interests and environment.", "Follow step-by-step instructions and real-time hints for high-quality data.", "Monitor your earnings, activity, and impact with full transparency."][i]}</p></button>)}
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }}>{HERO_TASKS.map(([name, body, meta], i) => <button key={name} type="button" className={`tks-card${i === t ? " is-on" : ""}`} aria-pressed={i === t} onClick={() => setT(i)}><b>{name}</b><p style={{ color: "#555", margin: "4px 0" }}>{body}</p><p className="tks-kicker" style={{ margin: 0 }}>{meta}</p></button>)}</div>
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
  const [row, setRow] = useState(0);
  const row2 = ({ name, body, tech, hot, onPick }: { name: string; body: string; tech: string; hot: boolean; onPick: () => void }) => (
    <button type="button" onClick={onPick} aria-pressed={hot} style={{ display: "flex", gap: 8, alignItems: "flex-start", width: "100%", textAlign: "left", background: hot ? "#f2efff" : "#fff", border: `1px solid ${hot ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 9, padding: "6px 9px", cursor: "pointer", font: "inherit", fontSize: 11.5 }}>
      <span style={{ flex: 1 }}><b style={{ color: "#14101f" }}>{name}</b><br /><span style={{ color: "#6d6884" }}>{body}</span></span>
      <span style={{ flex: "none", background: "#efeaff", color: "#6C3BFF", borderRadius: 5, padding: "1px 6px", fontWeight: 700, fontSize: 10.5 }}>{tech}</span>
    </button>);
  return <Dq n="02" title="Implemented prototype architecture" sub="Front-end prototype boundary — no production backend integration." label="DataQuest implemented prototype architecture — interactive rebuild of CyberOrigin_02" foot="Prototype boundary — No backend services or server-side logic">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 44px 1fr", gap: 8, alignItems: "start" }}>
      <div style={{ border: "1.5px dashed #b9b2dd", borderRadius: 12, padding: "9px 10px" }}>
        <p className="tks-kicker" style={{ margin: "0 0 7px" }}>Front-end stack — prototype boundary</p>
        <div style={{ display: "grid", gap: 5 }}>{STACK.map(([n, b, t], i) => <span key={n} style={{ display: "contents" }}>{row2({ name: n, body: b, tech: t, hot: i === row, onPick: () => setRow(i) })}</span>)}</div>
      </div>
      <div aria-hidden="true" style={{ display: "grid", gap: 5, paddingTop: 30 }}>
        {STACK.map((_, i) => <div key={i} style={{ height: 47, display: "flex", alignItems: "center", justifyContent: "center", color: i === row ? "#6C3BFF" : "#c9c3e8", fontWeight: 800, borderBottom: "1.5px dashed currentColor" }}>⇢</div>)}
        <p style={{ textAlign: "center", fontSize: 9.5, color: "#8a86a3", margin: 0 }}>POWERS</p>
      </div>
      <div style={{ border: "1px solid #e3e0f5", borderRadius: 12, padding: "9px 10px", background: "#fff" }}>
        <p className="tks-kicker" style={{ margin: "0 0 7px" }}>Product features &amp; pages — visible in prototype</p>
        <div style={{ display: "grid", gap: 5 }}>{FEATURES2.map(([n, b, t], i) => <span key={n} style={{ display: "contents" }}>{row2({ name: n, body: b, tech: t, hot: i === Math.min(row, FEATURES2.length - 1), onPick: () => setRow(i) })}</span>)}</div>
      </div>
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5, color: "#6d6884" }}><b>Legend</b> — Left: front-end building blocks (implemented). Right: product features (visible in prototype). Dashed arrows: a building block powers / enables a feature. Tech pills name the implementing technology per row.</p>
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
  return <Dq n="03" title="The embodied-AI data loop" sub="How real-world actions become usable robotics training data." label="DataQuest embodied-AI data loop — interactive rebuild of CyberOrigin_03">
    <div style={{ textAlign: "center", marginBottom: 12 }}><span style={{ display: "inline-block", background: "linear-gradient(92deg,#6C3BFF,#2563EB)", color: "#fff", borderRadius: 999, padding: "6px 18px", fontWeight: 700, fontSize: 13 }}>⬡ DataQuest is the contributor workflow layer</span></div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, padding: "12px", borderRadius: 18, background: "linear-gradient(135deg,rgba(108,59,255,0.07),rgba(37,99,235,0.07))", border: "1.5px solid #ddd6fb" }}>
      {LOOP.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)} style={{ textAlign: "left", background: "#fff" }}>
        <span style={{ fontSize: 20, fontWeight: 800, background: "linear-gradient(120deg,#6C3BFF,#2563EB)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{String(i + 1).padStart(2, "0")}</span>
        <br /><b style={{ fontSize: 13 }}>{t}</b>{i < 7 ? <span aria-hidden="true" style={{ float: "right", color: "#b9b2dd" }}>→</span> : <span aria-hidden="true" style={{ float: "right", color: "#b9b2dd" }}>↺</span>}
        <p style={{ color: "#555", margin: "4px 0 0", fontSize: 11.5 }}>{b}</p></button>)}
    </div>
    <p style={{ display: "flex", gap: 6, marginTop: 10 }}><button type="button" className="tks-btn tks-btn--ghost" disabled={s === 0} onClick={() => setS((v) => v - 1)}>← Previous step</button><button type="button" className="tks-btn" disabled={s >= LOOP.length - 1} onClick={() => setS((v) => v + 1)}>Next step →</button></p>
    <p style={{ background: "#efeaff", borderRadius: 999, padding: "7px 16px", color: "#4a3d8f", fontSize: 12.5, margin: "10px 0 0" }}>ⓘ <b>DataQuest enables every step inside the loop</b> — guiding capture, ensuring quality, and turning real-world actions into trusted training data.</p>
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
  const [sel, setSel] = useState("People");
  const mini = (name: string, body: string) => <button key={name} type="button" onClick={() => setSel(name)} aria-pressed={sel === name} style={{ display: "block", width: "100%", textAlign: "left", background: sel === name ? "#f2efff" : "#fff", border: `1px solid ${sel === name ? "#6C3BFF" : "#e7e4f6"}`, borderRadius: 8, padding: "5px 8px", cursor: "pointer", font: "inherit", fontSize: 11 }}><b style={{ color: "#14101f" }}>{name}</b><br /><span style={{ color: "#6d6884" }}>{body}</span></button>;
  return <Dq n="04" title="CyberOrigin ecosystem" sub="DataQuest is the contributor and workflow layer inside a broader robotics-data system." label="CyberOrigin ecosystem — interactive rebuild of CyberOrigin_04" foot="Security, privacy & compliance at every layer · Encryption in transit and at rest · Consent & data rights · SOC 2 Type II ready">
    <div style={{ display: "grid", gridTemplateColumns: "0.92fr 1.5fr 1fr", gap: 10, alignItems: "start" }}>
      <div style={{ border: "1px solid #e3e0f5", borderRadius: 12, padding: "9px 10px", background: "#fff" }}>
        <p className="tks-kicker" style={{ margin: "0 0 6px" }}>CyberGlove &amp; human capture</p>
        <div style={{ display: "grid", gap: 5 }}>{ECO_CAPTURE.map(([n, b]) => mini(n, b))}</div>
        <p style={{ fontSize: 10.5, color: "#8a86a3", margin: "7px 0 0" }}>Secure capture · Edge processing · Privacy by design</p>
      </div>
      <div style={{ border: "1.5px solid #c9bffb", borderRadius: 12, padding: "9px 10px", background: "#fbfaff" }}>
        <p className="tks-kicker" style={{ margin: "0 0 6px" }}>DataQuest — contributor marketplace</p>
        <div style={{ background: "#efeaff", borderRadius: 8, padding: "5px 8px", fontSize: 11, marginBottom: 7 }}><b>Discover &amp; match tasks</b> — Smart task discovery matches contributors to the right tasks.</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 6, alignItems: "center", marginBottom: 7 }}>
          <div style={{ display: "grid", gap: 5 }}>{mini("People", "Global contributors and experts")}{mini("Quality", "Standards, reviews and validation")}</div>
          <span style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#6C3BFF,#2563EB)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>⬡</span>
          <div style={{ display: "grid", gap: 5 }}>{mini("Tasks", "Human actions and interactions")}{mini("Rewards", "Earnings, bonuses and leaderboards")}</div>
        </div>
        <p className="tks-kicker" style={{ margin: "0 0 5px" }}>Contributor experience</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>{ECO_CORE.slice(4).map(([n, b]) => mini(n, b))}</div>
        <div style={{ marginTop: 8, borderTop: "1px dashed #c9bffb", paddingTop: 6, fontSize: 10.5, color: "#4a3d8f" }}><b>Workflow orchestration</b> — Task intake &amp; design → Task publishing &amp; routing → Execution &amp; capture → Quality review &amp; QA → Approval &amp; payout</div>
      </div>
      <div style={{ display: "grid", gap: 7 }}>
        {ECO_OUT.map(([n, b], i) => <div key={n} style={{ border: "1px solid #e3e0f5", borderRadius: 12, padding: "8px 10px", background: "#fff" }}><b style={{ fontSize: 12.5, color: ["#6C3BFF", "#2563EB", "#0d9488", "#2563EB"][i] }}>{n}</b><p style={{ color: "#6d6884", margin: "3px 0 0", fontSize: 11 }}>{b}</p></div>)}
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7, marginTop: 10 }}>
      {ECO_PIPE.map(([n, b]) => <div key={n} className="tks-card" style={{ padding: "7px 9px" }}><b style={{ fontSize: 11.5 }}>{n}</b><p style={{ color: "#6d6884", margin: "3px 0 0", fontSize: 10.5 }}>{b}</p></div>)}
    </div>
    <p aria-live="polite" style={{ margin: "8px 0 0", fontSize: 11.5, color: "#6d6884" }}>Selected node: <b>{sel}</b>.</p>
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
function V0Win({ cap, children }: { cap: string; children: ReactNode }) {
  return <figure style={{ margin: 0 }}>
    <div style={{ background: "#fff", border: "1px solid #ddd9f2", borderRadius: 11, overflow: "hidden", boxShadow: "0 8px 20px rgba(80,60,180,0.09)", fontSize: 10.5, lineHeight: 1.45 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderBottom: "1px solid #eeeaf9" }}><span style={{ display: "flex", gap: 3 }}>{["#ff5f57", "#febc2e", "#28c840"].map((c) => <i key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c, display: "block" }} />)}</span><span style={{ flex: 1, textAlign: "center", background: "#f4f2fb", borderRadius: 4, color: "#55506e", fontSize: 9.5 }}>app.dataquest.cyberorigin.ai</span></div>
      <div style={{ display: "flex", gap: 9, padding: "5px 9px", borderBottom: "1px solid #eeeaf9", color: "#55506e" }}><b style={{ color: "#6C3BFF" }}>DataQuest</b><span>Marketplace</span><span>My tasks</span><span>Earnings</span><span style={{ marginLeft: "auto" }}>AM</span></div>
      <div style={{ padding: "8px 10px" }}>{children}</div>
    </div>
    <figcaption style={{ textAlign: "center", fontSize: 11.5, fontWeight: 600, color: "#4a3d8f", marginTop: 6 }}>{cap}</figcaption>
  </figure>;
}
export function DataQuestInitialPrototype() {
  const [p, setP] = useState(0);
  const caps = ["Marketplace", "Task detail", "Profile & wallet", "Company context"];
  return <Dq n="05" title="Initial responsive web prototype" sub="Early prototype exploring core flows for data collection, task completion, contributor profiles, and platform context." label="DataQuest initial responsive web prototype — interactive rebuild of CyberOrigin_05">
    <div style={{ display: "flex", gap: 6, marginBottom: 10 }}><span style={{ border: "1.5px solid #6C3BFF", color: "#6C3BFF", borderRadius: 999, padding: "2px 12px", fontSize: 11.5, fontWeight: 600 }}>🕐 Historical</span><span style={{ border: "1.5px solid #6C3BFF", color: "#6C3BFF", borderRadius: 999, padding: "2px 12px", fontSize: 11.5, fontWeight: 600 }}>🗓 V0</span></div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} onClick={(e) => { const f = (e.target as HTMLElement).closest("figure"); if (f) setP([...f.parentElement!.children].indexOf(f)); }}>
      <V0Win cap={caps[0]}>
        <b style={{ fontSize: 13, color: "#14101f" }}>Marketplace</b><br /><span style={{ color: "#6d6884" }}>Browse data collection tasks and earn rewards.</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginTop: 6 }}>{V0_CATS.map(([n, b, price]) => <div key={n} style={{ border: "1px solid #eeeaf9", borderRadius: 7, padding: "5px 7px" }}><b>{n}</b><br /><span style={{ color: "#6d6884" }}>{b}</span><br /><span style={{ color: ACC, fontWeight: 700 }}>{price}</span></div>)}</div>
      </V0Win>
      <V0Win cap={caps[1]}>
        <b style={{ fontSize: 13, color: "#14101f" }}>Urban Street Scene</b> <span style={{ color: "#8a86a3" }}>Image Capture</span><br />
        Capture a street scene that includes storefronts, pedestrian activity, and vehicles.
        <p style={{ margin: "5px 0 2px" }}><b>Requirements</b></p>
        <p style={{ margin: 0, color: "#55506e" }}>✓ Take a clear, in-focus photo · ✓ Include at least 2 storefronts · ✓ Capture pedestrians or vehicles · ✓ No sensitive or private information · ✓ Good lighting and minimal blur</p>
        <p style={{ margin: "5px 0 0" }}>Reward <b style={{ color: "#6C3BFF", fontSize: 13 }}>$1.20</b> per approved task</p>
        <p style={{ margin: "4px 0 0", color: "#55506e" }}>Leaderboard — 1 Sarah J. $245.60 · 2 Mike T. $196.30 · 3 Alex M. $176.40 · 4 Priya K. $154.20 · 5 You $87.40<br />Recent: Jamie L. Approved · Tony R. In review · You Submitted<br />Upload: Drag and drop image here, or click to browse — JPG or PNG, up to 10MB.</p>
      </V0Win>
      <V0Win cap={caps[2]}>
        <b style={{ fontSize: 13, color: "#14101f" }}>Profile &amp; wallet</b> <span style={{ color: "#8a86a3" }}>Overview · Welcome back, Alex</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5, margin: "6px 0" }}>{[["Wallet balance", "$128.45 USD"], ["Pending rewards", "$42.75"], ["Lifetime earnings", "$1,428.70"]].map(([k, v]) => <div key={k} style={{ border: "1px solid #eeeaf9", borderRadius: 7, padding: "4px 6px" }}><span style={{ color: "#8a86a3" }}>{k}</span><br /><b style={{ fontSize: 12 }}>{v}</b></div>)}</div>
        <svg viewBox="0 0 200 30" style={{ width: "100%", height: 30, display: "block" }} aria-hidden="true"><polyline points="0,24 33,18 66,21 100,10 133,14 166,5 199,8" fill="none" stroke="#6C3BFF" strokeWidth="2" /></svg>
        <p style={{ margin: "3px 0 0", color: "#55506e" }}>Activity — Urban Street Scene · Approved · Today 9:41 AM<br />Storefront Capture · In review · Yesterday 4:22 PM<br />Receipt OCR · Approved · May 16, 2:15 PM<br />Park Environment · Rejected · May 15, 11:08 AM</p>
      </V0Win>
      <V0Win cap={caps[3]}>
        <b style={{ fontSize: 13, color: "#14101f" }}>“High-quality human data for AI that performs in the real world.”</b>
        <p style={{ margin: "4px 0", color: "#55506e" }}>DataQuest by CyberOrigin connects a global community of contributors with organizations building more accurate, ethical, and trustworthy AI.</p>
        <p style={{ margin: "3px 0", color: "#55506e" }}>🌍 World coverage map · Human accuracy — Real people, real insights · Diverse coverage — Global scale, local context · Quality first — Rigorous review and validation</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginTop: 5 }}>{[["10M+", "Tasks completed"], ["50K+", "Active contributors"], ["180+", "Countries"], ["98%", "Approval accuracy"]].map(([v, k]) => <div key={k} style={{ textAlign: "center", border: "1px solid #eeeaf9", borderRadius: 7, padding: "4px 2px" }}><b style={{ fontSize: 13, color: "#6C3BFF" }}>{v}</b><br /><span style={{ color: "#8a86a3" }}>{k}</span></div>)}</div>
      </V0Win>
    </div>
    <p aria-live="polite" style={{ margin: "10px 0 0", fontSize: 11.5, color: "#6d6884" }}>Four V0 windows shown together, as printed — focused: <b>{caps[p]}</b>.</p>
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
  const [sel, setSel] = useState("Category discovery");
  const panel = (title: string, color: string, bg: string, items: Array<[string, string]>, icon: string) => (
    <div style={{ border: `1.5px solid ${color}55`, borderRadius: 13, overflow: "hidden", background: "#fff" }}>
      <div style={{ background: bg, padding: "8px 13px", fontWeight: 800, color, fontSize: 14 }}>{icon} {title}</div>
      <div style={{ padding: "6px 13px 10px", display: "grid" }}>
        {items.map(([n, b]) => <button key={n} type="button" onClick={() => setSel(n)} aria-pressed={sel === n} style={{ textAlign: "left", background: sel === n ? bg : "transparent", border: "none", borderBottom: "1px solid #f0edfa", padding: "6px 4px", cursor: "pointer", font: "inherit" }}><b style={{ fontSize: 12.5 }}>{n}</b><p style={{ color: "#6d6884", margin: "2px 0 0", fontSize: 11.5 }}>{b}</p></button>)}
      </div>
    </div>);
  return <Dq n="06" title="What the first prototype resolved and exposed" sub="Audit summary of what's working, what's unclear, and what needs to be addressed next." label="DataQuest prototype audit — interactive rebuild of CyberOrigin_06">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "start" }}>
      {panel("Resolved", "#6C3BFF", "#f2efff", RESOLVED, "✓")}
      {panel("Exposed", "#d63a47", "#fdeef0", EXPOSED, "⚠")}
    </div>
    <div style={{ marginTop: 12, background: "linear-gradient(92deg,#6C3BFF,#2563EB)", color: "#fff", borderRadius: 11, padding: "10px 16px", fontSize: 13 }}><b>Next step</b> — Move from broad data categories to specific, completable, verifiable human-action tasks. <span aria-live="polite" style={{ opacity: 0.85 }}>· Focus: {sel}</span></div>
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
  const icons = ["🔍", "✅", "📋", "📸", "🛡", "⬆", "🔎", "💰", "🕘"];
  return <Dq n="07" title="Contributor journey" sub="Evidence-based product hypotheses in the absence of formal user interviews." label="DataQuest contributor journey — interactive rebuild of CyberOrigin_07">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 7 }}>
      {JOURNEY7.map(([t, b], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ position: "relative", textAlign: "center", background: "#fff", border: `1.5px solid ${i === s ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 11, padding: "16px 6px 9px", cursor: "pointer", font: "inherit", marginTop: 10 }}>
        <span style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#6C3BFF,#2563EB)", color: "#fff", borderRadius: 999, padding: "1px 8px", fontSize: 10, fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span>
        <span style={{ display: "inline-flex", width: 38, height: 38, borderRadius: "50%", background: "#fff", border: "1.5px solid #ddd6fb", alignItems: "center", justifyContent: "center", fontSize: 16, boxShadow: "0 3px 8px rgba(80,60,180,0.12)" }}>{icons[i]}</span>
        <b style={{ display: "block", fontSize: 11.5, margin: "6px 0 3px", lineHeight: 1.25 }}>{t}</b>
        <span style={{ display: "block", color: "#6d6884", fontSize: 10, lineHeight: 1.4 }}>{b}</span>
        {i < 8 ? <span aria-hidden="true" style={{ position: "absolute", right: -9, top: "42%", color: "#6C3BFF", fontWeight: 800, zIndex: 1 }}>›</span> : null}
      </button>)}
    </div>
    <div style={{ marginTop: 14, background: "#f2efff", borderRadius: 11, padding: "10px 16px", display: "flex", gap: 10, alignItems: "center" }}><span style={{ fontSize: 19 }}>🛡</span><p style={{ margin: 0, fontSize: 12.5 }}><b>Built on trust and transparency.</b> <span style={{ color: "#6d6884" }}>Clear guidelines, fair reviews, and secure data handling at every step.</span></p></div>
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
  const icons = ["📝", "🌐", "👥", "📸", "🤖", "🔎", "🏷", "🚀", "📈"];
  return <Dq n="08" title="Data lifecycle and quality model" sub="Connecting the interface to the actual data-delivery process." label="DataQuest data lifecycle and quality model — interactive rebuild of CyberOrigin_08" foot="Every state has an owner, a clear message, a next action, and a reward">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 6, marginBottom: 12 }}>
      {LIFECYCLE8.map(([t], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "center", background: "none", border: "none", cursor: "pointer", font: "inherit", padding: 0 }}>
        <span style={{ position: "relative", display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: i === s ? "linear-gradient(135deg,#6C3BFF,#2563EB)" : "#efeaff", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{icons[i]}<span style={{ position: "absolute", top: -5, right: -5, background: "#6C3BFF", color: "#fff", borderRadius: "50%", width: 15, height: 15, fontSize: 9, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span></span>
        <span style={{ display: "block", fontSize: 10, fontWeight: 700, marginTop: 4, lineHeight: 1.25, color: i === s ? "#6C3BFF" : "#33304a" }}>{t}</span>
      </button>)}
    </div>
    <table className="tks-table" style={{ fontSize: 11 }} aria-live="polite">
      <thead><tr><th style={{ width: "15%" }}>Step</th><th style={{ width: "11%" }}>Owner</th><th style={{ width: "30%" }}>User message</th><th style={{ width: "22%" }}>Next action</th><th>Reward consequence</th></tr></thead>
      <tbody>{LIFECYCLE8.map(([t, owner, msg, next, reward], i) => <tr key={t} onClick={() => setS(i)} style={i === s ? { background: "#f2efff", cursor: "pointer" } : { cursor: "pointer" }}><td><b>{i + 1} {t}</b></td><td>{owner}</td><td>“{msg}”</td><td>{next}</td><td>{reward}</td></tr>)}</tbody>
    </table>
    <div style={{ marginTop: 10, background: "#efeaff", borderRadius: 9, padding: "8px 14px", fontSize: 12.5, color: "#4a3d8f" }}>This ensures accountability, transparency, and continuous quality across the entire data lifecycle.</div>
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
const LOFI_STREET_NOTES: Record<number, string> = {
  1: "Task as printed on this board: Street view capture · $1.20 · 20–30 min — “Capture clear photos of urban streets, storefronts, pedestrian activity, and vehicles.” Requirements include (iOS 14+ / Android 10+) and “No car photos”. Categories: Street view · Storefront · Signage & text OCR · Audio recording.",
  2: "Capture tips as printed: Keep your camera steady · Avoid blocking the view · Capture storefronts clearly · Watch for pedestrians.",
  4: "Verification as printed: 5.3 Needs changes — “Some storefronts are not clearly visible.” · 5.5 Approved — You earned +$1.20.",
};
const LOFI_KITCHEN_NOTES: Record<number, string> = {
  2: "Capture screens as printed: 3.1 “Chop the vegetable — Use a clear cutting motion. Keep hands and tools in view.” · 3.4 Tips: Keep your workspace well lit · Show hands and tools clearly · Avoid blocking the view · Record in a quiet environment.",
  4: "Verification screens as printed: 5.3 Action needed — “The lighting was too low in part of the recording.” · 5.5 Approved! — You earned +$12.50.",
};
function WireGlyph({ label, hot, onPick }: { label: string; hot: boolean; onPick: () => void }) {
  return <button type="button" onClick={onPick} aria-pressed={hot} style={{ background: "#fff", border: `1.5px solid ${hot ? "#6C3BFF" : "#c9c9d4"}`, borderRadius: 7, padding: "5px 4px 4px", cursor: "pointer", font: "inherit", width: "100%" }}>
    <span aria-hidden="true" style={{ display: "block", border: "1px solid #d8d8e2", borderRadius: 4, padding: "4px 3px", background: "repeating-linear-gradient(180deg,#fff 0 7px,#f1f1f6 7px 8px)" }}>
      <span style={{ display: "block", height: 5, background: "#c9c9d4", borderRadius: 2, marginBottom: 3 }} />
      <span style={{ display: "block", height: 12, border: "1px solid #d8d8e2", borderRadius: 2, marginBottom: 3 }} />
      <span style={{ display: "block", height: 5, width: "70%", background: "#dcdce6", borderRadius: 2 }} />
    </span>
    <span style={{ display: "block", fontSize: 8.5, color: "#55506e", marginTop: 3, lineHeight: 1.3 }}>{label}</span>
  </button>;
}
function LoFiBoard({ n, variant }: { n: string; variant: "kitchen" | "street" }) {
  const [f, setF] = useState(0);
  const street = variant === "street";
  const notes = street ? LOFI_STREET_NOTES : LOFI_KITCHEN_NOTES;
  return <Dq n={n} title={street ? "Low-fidelity exploration board" : "Low-fidelity exploration"} sub="Exploring end-to-end flows across discovery, capture, verification, rewards, and account states." label={`DataQuest low-fidelity exploration — interactive rebuild of CyberOrigin_${n}`} foot="Notes: All screens are low-fidelity explorations · Final UI will follow the DataQuest design system">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 218px", gap: 12, alignItems: "start" }}>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {LOFI_FLOWS.map(([name, purpose, screens], fi) => <div key={name} style={{ gridColumn: fi < 4 ? "span 1" : undefined }}>
            <p style={{ margin: "0 0 5px", fontSize: 11, fontWeight: 800, color: fi === f ? "#6C3BFF" : "#33304a" }}>{fi + 1} {name}</p>
            <div style={{ display: "grid", gap: 5 }}>{screens.map((sc) => <WireGlyph key={sc} label={sc} hot={fi === f} onPick={() => setF(fi)} />)}</div>
            <p style={{ margin: "4px 0 8px", fontSize: 9.5, color: "#8a86a3", lineHeight: 1.35 }}>{purpose}</p>
          </div>)}
        </div>
        <p aria-live="polite" style={{ margin: "2px 0 0", fontSize: 11.5, color: "#55506e" }}><b>{LOFI_FLOWS[f][0]}</b> — {LOFI_FLOWS[f][1]}{notes[f] ? <> · {notes[f]}</> : null}</p>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ border: "1px solid #e3e0f5", borderRadius: 11, padding: "9px 11px", background: "#fff" }}>
          <p className="tks-kicker" style={{ margin: "0 0 6px" }}>Key questions resolved by wireframing</p>
          {LOFI_QUESTIONS.map(([q, a]) => <div key={q} style={{ marginBottom: 7 }}><b style={{ fontSize: 11.5 }}>{q}</b><p style={{ color: "#6d6884", margin: "2px 0 0", fontSize: 10.5, lineHeight: 1.45 }}>{a}</p></div>)}
        </div>
        <div style={{ border: "1px solid #e3e0f5", borderRadius: 11, padding: "9px 11px", background: "#fbfaff", fontSize: 10.5, color: "#6d6884" }}>
          <p className="tks-kicker" style={{ margin: "0 0 4px" }}>Notes</p>
          All screens are low-fidelity explorations. Final UI will follow the DataQuest design system.
          <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Flows covered</p>
          1 Discovery · 2 Task detail · 3 Capture · 4 Upload · 5 Verification · 6 Rewards · 7 Account
        </div>
      </div>
    </div>
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
  const [tab, setTab] = useState("Home");
  const [t, setT] = useState(0);
  return <Dq n="10" title="DataQuest — Mobile home" sub="The contributor home screen, as printed — one centred phone on the deck's white ground." label="DataQuest mobile home screen — interactive rebuild of CyberOrigin_10">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: 300, background: "#fff", border: "2.5px solid #221d33", borderRadius: 34, padding: "10px 13px 8px", fontSize: 11, lineHeight: 1.45, color: "#33304a", boxShadow: "0 16px 36px rgba(60,40,160,0.16)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontWeight: 700 }}>9:41</span><span style={{ width: 62, height: 15, background: "#221d33", borderRadius: 999 }} /><span>📶 🔋</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 7 }}><b style={{ color: "#6C3BFF", fontSize: 14 }}>⬡ DataQuest</b><span>🔔 <span style={{ border: "1.5px solid #6C3BFF", color: "#6C3BFF", borderRadius: "50%", padding: "1px 5px", fontWeight: 700, fontSize: 9.5 }}>AM</span></span></div>
        <div style={{ background: "linear-gradient(120deg,#6C3BFF,#2563EB)", color: "#fff", borderRadius: 13, padding: "10px 12px", marginTop: 8 }}>
          <span style={{ opacity: 0.85 }}>Contributor balance</span><br /><b style={{ fontSize: 21 }}>$128.45</b> <span style={{ opacity: 0.85 }}>USD</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}><span style={{ opacity: 0.9 }}>Lifetime earnings $1,428.70</span><button type="button" style={{ background: "#fff", color: "#6C3BFF", border: "none", borderRadius: 999, padding: "3px 12px", fontWeight: 800, cursor: "pointer", font: "inherit" }}>Withdraw</button></div>
        </div>
        <div style={{ display: "flex", gap: 7, alignItems: "center", marginTop: 9 }}><span style={{ width: 30, height: 30, borderRadius: "50%", background: "#efeaff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>💠</span><span><b>Contributor level: Silver</b><br /><span style={{ color: "#6d6884" }}>Quality score 92% — “Great work! Keep it up.”</span></span></div>
        <div style={{ background: "#f4f2fb", borderRadius: 9, padding: "6px 10px", marginTop: 8, color: "#8a86a3" }}>🔍 Search tasks…</div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 9 }}><b>Recommended for you</b><span style={{ color: "#6C3BFF", fontWeight: 600 }}>View all</span></div>
        <div style={{ display: "grid", gap: 6, marginTop: 5 }}>
          {HERO_TASKS.map(([name, body, meta], i) => <button key={name} type="button" onClick={() => setT(i)} aria-pressed={i === t} style={{ textAlign: "left", border: `1.5px solid ${i === t ? "#6C3BFF" : "#eeeaf9"}`, borderRadius: 10, padding: "6px 9px", background: "#fff", cursor: "pointer", font: "inherit" }}><b>{name}</b>{i === 0 ? <span style={{ background: "#efeaff", color: "#6C3BFF", borderRadius: 4, padding: "0 5px", fontWeight: 700, fontSize: 9, marginLeft: 5 }}>FEATURED</span> : null}<br /><span style={{ color: "#6d6884" }}>{body}</span><br /><span style={{ color: "#55506e" }}>{meta}</span> · <span style={{ color: i === 2 ? "#b97a0e" : "#1d9e57", fontWeight: 700 }}>{i === 2 ? "◐ Good match" : "● High match"}</span></button>)}
        </div>
        <b style={{ display: "block", marginTop: 9 }}>Active tasks</b>
        {ACTIVE10.map(([name, meta, pct]) => <div key={name} style={{ marginTop: 5 }}><b>{name}</b> <span style={{ color: "#6d6884" }}>· {meta}</span><div style={{ background: "#e9e6f8", height: 6, borderRadius: 3, marginTop: 3 }}><div style={{ width: `${pct}%`, height: 6, borderRadius: 3, background: "linear-gradient(90deg,#6C3BFF,#2563EB)" }} /></div><span style={{ color: "#8a86a3" }}>{pct}%</span></div>)}
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #eeeaf9", marginTop: 10, paddingTop: 6 }}>
          {["Home", "Discover", "My tasks", "Earnings", "Profile"].map((x) => <button key={x} type="button" onClick={() => setTab(x)} aria-pressed={tab === x} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", fontSize: 9.5, color: tab === x ? "#6C3BFF" : "#8a86a3", fontWeight: tab === x ? 800 : 400, padding: 0 }}>{x === "Home" ? "⌂" : x === "Discover" ? "🧭" : x === "My tasks" ? "▤" : x === "Earnings" ? "💰" : "👤"}<br />{x}</button>)}
        </div>
      </div>
    </div>
    <p aria-live="polite" style={{ textAlign: "center", margin: "10px 0 0", fontSize: 11.5, color: "#6d6884" }}>Tab: <b>{tab}</b> · Task focus: <b>{HERO_TASKS[t][0]}</b> · ⬡ CyberOrigin</p>
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
  const icons = ["🎯", "🖥", "📱", "💻", "🏗"];
  const statusC: Record<string, [string, string]> = { Designed: ["#efeaff", "#6C3BFF"], Implemented: ["#e7f7ee", "#1d9e57"], Proposed: ["#e3edff", "#2563EB"] };
  return <Dq n="11" title="DataQuest — Solo ownership timeline" sub="A chronological overview of end-to-end product ownership from strategy to proposed architecture." label="DataQuest solo ownership timeline — interactive rebuild of CyberOrigin_11">
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16, fontSize: 11.5, color: "#55506e" }}>
      {[["Company", "CyberOrigin"], ["Product", "DataQuest"], ["Period", "2025"], ["Role", "Solo Product Designer and Engineer"]].map(([k, v]) => <span key={k} style={{ border: "1px solid #e3e0f5", background: "#fff", borderRadius: 8, padding: "4px 10px" }}>{k} — <b style={{ color: "#14101f" }}>{v}</b></span>)}
    </div>
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 }}>
      <span aria-hidden="true" style={{ position: "absolute", left: "9%", right: "9%", top: 21, height: 2.5, background: "linear-gradient(90deg,#6C3BFF,#2563EB)", borderRadius: 2 }} />
      {TIMELINE11.map(([month, title, body, status], i) => <button key={month} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ position: "relative", textAlign: "center", background: "none", border: "none", cursor: "pointer", font: "inherit", padding: 0 }}>
        <span style={{ display: "inline-flex", width: 42, height: 42, borderRadius: "50%", background: "#fff", border: `2px solid ${i === s ? "#6C3BFF" : "#c9bffb"}`, alignItems: "center", justifyContent: "center", fontSize: 17, position: "relative", zIndex: 1 }}>{icons[i]}</span>
        <span style={{ display: "block", marginTop: 6 }}><span style={{ background: "#efeaff", color: "#6C3BFF", borderRadius: 999, padding: "1px 9px", fontWeight: 700, fontSize: 11 }}>{month}</span></span>
        <b style={{ display: "block", fontSize: 12.5, margin: "6px 0 3px", lineHeight: 1.3 }}>{title}</b>
        <span style={{ display: "block", color: "#6d6884", fontSize: 10.5, lineHeight: 1.45 }}>{body}</span>
        <span style={{ display: "inline-block", marginTop: 5, background: statusC[status][0], color: statusC[status][1], borderRadius: 999, padding: "1px 9px", fontWeight: 700, fontSize: 10.5 }}>{status}</span>
      </button>)}
    </div>
    <div style={{ marginTop: 16, background: "#efeaff", borderRadius: 10, padding: "9px 15px", fontSize: 12.5, color: "#4a3d8f" }}><b>Solo ownership</b> — End-to-end responsibility across product strategy, information architecture, UX/UI, visual design, responsive front-end prototype, and interaction logic.</div>
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
  return <Dq n="12" title="What the product must explain before capture" sub="A trust contract between contributor and platform." label="DataQuest trust contract — interactive rebuild of CyberOrigin_12" foot="Clear expectations before capture build trust and better data — They reduce confusion, low-quality submissions, and disputes">
    <div style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: 14, alignItems: "start" }}>
      <div style={{ borderRight: "1px solid #e3e0f5", paddingRight: 13 }}>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}><b>Clear terms.</b><br /><b>Fair process.</b><br /><b>Trusted outcomes.</b></p>
        <p style={{ color: "#6C3BFF", fontWeight: 700, margin: "10px 0 0" }}>Know before you capture.</p>
        <div aria-hidden="true" style={{ marginTop: 14, width: 74, height: 74, borderRadius: "50%", border: "2px dashed #c9bffb", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: 10, fontWeight: 800, color: "#6C3BFF", padding: 6 }}>TRUST CONTRACT</div>
      </div>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{TRUST12.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)}><span className="tks-num" style={{ background: ACC }}>{i + 1}</span> <b>{t}</b><p style={{ color: "#555", margin: "5px 0 0" }}>{b}</p></button>)}</div>
    </div>
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
  return <Dq n="13" title="Data bottleneck map" sub="From robotics research request to usable dataset — where failure happens and how DataQuest fixes it." label="DataQuest data bottleneck map — interactive rebuild of CyberOrigin_13">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 7 }}>
      {BOTTLENECK.map(([t, b], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 10, padding: "8px 9px", cursor: "pointer", font: "inherit" }}><span style={{ fontSize: 10, fontWeight: 800, color: "#6C3BFF" }}>{String(i + 1).padStart(2, "0")}</span><b style={{ display: "block", fontSize: 11.5, lineHeight: 1.3, margin: "2px 0 3px" }}>{t}</b><span style={{ display: "block", color: "#6d6884", fontSize: 10, lineHeight: 1.4 }}>{b}</span></button>)}
    </div>
    <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 7, margin: "4px 0" }}>{BOTTLENECK.map((x) => <span key={x[0]} style={{ textAlign: "center", color: "#d63a47" }}>┊▼</span>)}</div>
    <div style={{ textAlign: "center", marginBottom: 8 }}><span style={{ background: "#fdeef0", color: "#c22f3d", borderRadius: 999, padding: "4px 16px", fontWeight: 800, fontSize: 12.5 }}>⚠ Common failure points (data bottlenecks)</span></div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 7 }} aria-live="polite">
      {BOTTLENECK.map(([t, , fail, why], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff5f6", border: `1.5px solid ${i === s ? "#d63a47" : "#f3c2c8"}`, borderRadius: 10, padding: "8px 9px", cursor: "pointer", font: "inherit" }}><b style={{ display: "block", fontSize: 11.5, color: "#c22f3d", lineHeight: 1.3 }}>{fail}</b><span style={{ display: "block", color: "#6d6884", fontSize: 10, lineHeight: 1.4, marginTop: 3 }}>{why}</span></button>)}
    </div>
    <div style={{ marginTop: 12, background: "linear-gradient(92deg,#6C3BFF,#2563EB)", color: "#fff", borderRadius: 11, padding: "10px 16px", fontSize: 12.5 }}><b>DataQuest opportunity</b> — ✓ Clear instructions and examples · ✓ Built-in quality checks and guardrails · ✓ Real-time guidance and feedback · ✓ Rights and privacy by design · ✓ Higher quality data, less rework</div>
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
  const [r, setR] = useState(0);
  const col = (title: string, items: Array<[string, string]>) => (
    <div style={{ border: "1px solid #e3e0f5", borderRadius: 12, padding: "9px 11px", background: "#fff" }}>
      <p className="tks-kicker" style={{ margin: "0 0 6px" }}>{title}</p>
      <div style={{ display: "grid" }}>{items.map(([t, b]) => <div key={t} style={{ borderBottom: "1px solid #f0edfa", padding: "4px 0" }}><b style={{ fontSize: 12 }}>{t}</b><p style={{ color: "#6d6884", margin: "1px 0 0", fontSize: 10.5, lineHeight: 1.4 }}>{b}</p></div>)}</div>
    </div>);
  return <Dq n="14" title="Value exchange" sub="How contributors, researchers, and operations exchange value through verifiable tasks." label="DataQuest value exchange — interactive rebuild of CyberOrigin_14" foot="Outcome: High-quality, purpose-fit data · Fair, transparent compensation · Scalable, trustworthy workflows · Faster insights and better models">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 10, alignItems: "start" }}>
      {col("Contributors provide", CONTRIB14)}
      <div style={{ border: "1.5px solid #c9bffb", borderRadius: 12, padding: "9px 11px", background: "#fbfaff" }}>
        <p className="tks-kicker" style={{ margin: "0 0 2px" }}>DataQuest — Workflow &amp; Trust Layer</p>
        <p style={{ margin: "0 0 8px", fontSize: 11.5, color: "#55506e" }}>Match tasks, orchestrate work, ensure quality, and protect trust at every step.</p>
        <div style={{ textAlign: "center", marginBottom: 8 }}><span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg,#6C3BFF,#2563EB)", color: "#fff", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⬡</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>{LAYER14.map((m) => <span key={m} style={{ border: "1px solid #ddd6fb", borderRadius: 7, padding: "4px 7px", fontSize: 10.5, background: "#fff" }}>{m}</span>)}</div>
        <div style={{ marginTop: 9, background: "#efeaff", borderRadius: 8, padding: "6px 9px", fontSize: 10.5, color: "#4a3d8f" }}><b>Trust &amp; security by design</b> — Identity · Integrity · Privacy · Encryption · Auditability · Fairness</div>
        <p style={{ margin: "8px 0 0", fontSize: 10, color: "#8a86a3" }}>Legend — solid line: value provided · dashed line: specifications &amp; verification.</p>
      </div>
      {col("Researchers / Data buyers specify", RESEARCH14)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 10, marginTop: 10, alignItems: "start" }}>
      <div style={{ border: "1px solid #e3e0f5", borderRadius: 12, padding: "9px 11px", background: "#fff" }}>
        <p className="tks-kicker" style={{ margin: "0 0 6px" }}>Rewards lifecycle</p>
        <div style={{ display: "grid", gap: 5 }}>{REWARDS14.map(([t, b], i) => <button key={t} type="button" onClick={() => setR(i)} aria-pressed={i === r} style={{ textAlign: "left", background: i === r ? "#f2efff" : "#fff", border: `1px solid ${i === r ? "#6C3BFF" : "#e7e4f6"}`, borderRadius: 8, padding: "5px 8px", cursor: "pointer", font: "inherit", fontSize: 11 }}><b>{i + 1} {t}</b> — <span style={{ color: "#6d6884" }}>{b}</span></button>)}</div>
      </div>
      {col("Quality operations verifies", QUALITY14)}
    </div>
    <div style={{ marginTop: 10, border: "1.5px solid #c9bffb", borderRadius: 11, padding: "9px 15px", fontSize: 12.5, background: "#fbfaff" }}>🏆 <b>End-to-end trust</b> — Outcome: ✓ High-quality, purpose-fit data · ✓ Fair, transparent compensation · ✓ Scalable, trustworthy workflows · ✓ Faster insights and better models</div>
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
  const stPill = (st: string) => st === "Approved" ? <span style={{ background: "#e7f7ee", color: "#1d9e57", borderRadius: 999, padding: "1px 8px", fontWeight: 700, fontSize: 10.5 }}>{st}</span> : st === "In review" ? <span style={{ background: "#fdf3e0", color: "#b97a0e", borderRadius: 999, padding: "1px 8px", fontWeight: 700, fontSize: 10.5 }}>{st}</span> : <span style={{ background: "#efeaff", color: "#6C3BFF", borderRadius: 999, padding: "1px 8px", fontWeight: 700, fontSize: 10.5 }}>{st}</span>;
  return <Dq n="17" title="Profile & Wallet" sub="Early prototype account and reward dashboard for contributors. · Historical · V0" label="DataQuest profile and wallet V0 — interactive rebuild of CyberOrigin_17">
    <div style={{ background: "#fff", border: "1px solid #ddd9f2", borderRadius: 13, overflow: "hidden", boxShadow: "0 10px 26px rgba(80,60,180,0.10)", fontSize: 11.5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderBottom: "1px solid #eeeaf9" }}><span style={{ display: "flex", gap: 4 }}>{["#ff5f57", "#febc2e", "#28c840"].map((c) => <i key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "block" }} />)}</span><span style={{ flex: 1, textAlign: "center", background: "#f4f2fb", borderRadius: 5, padding: "2px 0", color: "#55506e" }}>🔒 app.dataquest.cyberorigin.ai</span></div>
      <div style={{ display: "grid", gridTemplateColumns: "128px 1fr" }}>
        <div style={{ borderRight: "1px solid #eeeaf9", padding: "10px", display: "grid", gap: 4, alignContent: "start", color: "#55506e" }}>
          <span style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}><span style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#6C3BFF,#2563EB)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10 }}>AM</span><span><b style={{ color: "#14101f" }}>Alex Morgan</b><br /><span style={{ fontSize: 10 }}>Contributor</span></span></span>
          {["Overview", "My Tasks", "Earnings", "Profile", "Wallet", "Settings"].map((x, i) => <span key={x} style={i === 3 ? { color: "#6C3BFF", fontWeight: 700, background: "#efeaff", borderRadius: 5, padding: "2px 6px" } : { padding: "2px 6px" }}>{x}</span>)}
        </div>
        <div style={{ padding: "10px 13px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
            {[["Wallet balance", "$128.45", "USD · Withdraw"], ["Pending rewards", "$42.75", "In review"], ["Lifetime earnings", "$1,428.70", "View breakdown →"]].map(([k, v, s2]) => <div key={k} style={{ border: "1px solid #eeeaf9", borderRadius: 9, padding: "7px 9px" }}><span style={{ color: "#8a86a3" }}>{k}</span><br /><b style={{ fontSize: 16, color: "#14101f" }}>{v}</b><br /><span style={{ color: "#6C3BFF", fontWeight: 600 }}>{s2}</span></div>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 10, marginTop: 10, alignItems: "start" }}>
            <div>
              <b>Earnings overview</b> <span style={{ color: "#8a86a3" }}>· 7D · $0–$150 · May 12 – May 18</span>
              <svg viewBox="0 0 220 52" style={{ width: "100%", height: 52, display: "block", marginTop: 3 }} aria-hidden="true"><path d="M0,44 L36,34 L73,39 L110,20 L146,27 L183,10 L219,16 L219,52 L0,52 Z" fill="rgba(108,59,255,0.13)" /><polyline points="0,44 36,34 73,39 110,20 146,27 183,10 219,16" fill="none" stroke="#6C3BFF" strokeWidth="2.5" /></svg>
              <div className="tks-card" style={{ marginTop: 6 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Settings (as printed)</p>
                <p style={{ margin: "4px 0" }}>Payout method — <b>USDC (Polygon)</b> · Minimum payout — <b>$25.00</b></p>
                <p style={{ margin: "6px 0", display: "flex", gap: 6, flexWrap: "wrap" }}><button type="button" className="tks-chip" aria-pressed={email} onClick={() => setEmail((v) => !v)}>Email notifications {email ? "On" : "Off"}</button><button type="button" className="tks-chip" aria-pressed={tfa} onClick={() => setTfa((v) => !v)}>Two-factor auth {tfa ? "Enabled" : "Disabled"}</button></p>
                <p className="tks-kicker" style={{ margin: "10px 0 3px" }}>Category stats</p>
                {CATS17.map(([n, c, pct], ci) => <div key={n} style={{ marginBottom: 5 }}><span>{n} · {c} · {pct}%</span><div style={{ background: "#e6e4f5", height: 6, borderRadius: 3 }}><div style={{ width: `${pct}%`, height: 6, borderRadius: 3, background: ["#6C3BFF", "#2563EB", "#0d9488", "#e07b16", "#e5484d"][ci] }} /></div></div>)}
              </div>
            </div>
            <div>
              <Chips items={filters} value={filter} onPick={setFilter} />
              <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Recent activity</p>
              <div style={{ display: "grid", gap: 5 }}>{rows.map(([t, c, st, rw, when]) => <div key={t} style={{ border: "1px solid #eeeaf9", borderRadius: 8, padding: "5px 8px" }}><b>{t}</b> <span style={{ color: "#8a86a3" }}>· {c}</span><br />{stPill(st)} <b>{rw}</b> <span style={{ color: "#8a86a3" }}>· {when}</span></div>)}</div>
              <p className="tks-kicker" aria-live="polite">{rows.length} of {ACTIVITY17.length} recent-activity rows shown · View all activity →</p>
            </div>
          </div>
        </div>
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
  const [sel, setSel] = useState("Marketplace navigation");
  const tierC = ["#1d9e57", "#6C3BFF", "#2563EB"];
  const tierBg = ["#e7f7ee", "#efeaff", "#e3edff"];
  return <Dq n="18" title="Evidence and claim map" sub="We distinguish what exists in code today, what's designed and validated in high-fidelity concepts, and what's proposed for production." label="DataQuest evidence and claim map — interactive rebuild of CyberOrigin_18" foot="Purpose: Align stakeholders on scope, communicate progress with clarity, and ensure a scalable path from prototype to production">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, alignItems: "start" }}>
      {CLAIMS.map(([tier, scope, items], ti) => <div key={tier} style={{ border: `1.5px solid ${tierC[ti]}44`, borderRadius: 12, overflow: "hidden", background: "#fff" }}>
        <div style={{ background: tierBg[ti], padding: "7px 11px" }}><b style={{ color: tierC[ti], fontSize: 13.5 }}>{ti === 0 ? "✓" : ti === 1 ? "✎" : "⬡"} {tier}</b><br /><span style={{ fontSize: 10.5, color: "#55506e" }}>{scope}</span></div>
        <div style={{ padding: "5px 11px 8px", display: "grid" }}>
          {items.map(([n, b]) => <button key={n} type="button" onClick={() => setSel(n)} aria-pressed={sel === n} style={{ textAlign: "left", background: sel === n ? tierBg[ti] : "transparent", border: "none", borderBottom: "1px solid #f0edfa", padding: "5px 3px", cursor: "pointer", font: "inherit" }}><b style={{ fontSize: 11.5 }}>{n}</b><p style={{ color: "#6d6884", margin: "1px 0 0", fontSize: 10.5, lineHeight: 1.4 }}>{b}</p></button>)}
        </div>
      </div>)}
    </div>
    <p aria-live="polite" style={{ margin: "9px 0 0", fontSize: 11.5, color: "#6d6884" }}>Selected claim: <b>{sel}</b> — colour = claim tier (Implemented green · Designed violet · Proposed blue), as printed.</p>
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
  const [s, setS] = useState(0);
  const stateC = [["#b97a0e", "#fdf3e0", "🕐"], ["#2563EB", "#e3edff", "🔍"], ["#1d9e57", "#e7f7ee", "✓"], ["#6C3BFF", "#efeaff", "👛"]] as const;
  const chipRow = (items: string[], c: string, bg: string) => <div style={{ display: "flex", gap: 4, flexWrap: "wrap", margin: "4px 0" }}>{items.map((x) => <span key={x} style={{ background: bg, color: c, borderRadius: 6, padding: "2px 8px", fontSize: 10.5, fontWeight: 600 }}>{x}</span>)}</div>;
  return <Dq n="19" title="Naming and reward cleanup" sub="From fragmented names and reward logic to a unified, clear, and consistent system." label="DataQuest naming and reward cleanup — interactive rebuild of CyberOrigin_19">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 34px 1fr", gap: 8, alignItems: "stretch" }}>
      <div style={{ border: "1.5px solid #f3c2c8", borderRadius: 13, padding: "11px 13px", background: "#fff7f8" }}>
        <p className="tks-kicker" style={{ margin: "0 0 4px", color: "#c22f3d" }}>Before</p>
        <b style={{ fontSize: 13.5 }}>Inconsistent naming. Fragmented rewards. Confusing experience.</b>
        <p style={{ margin: "8px 0 2px", fontSize: 11, color: "#8a5a5e", fontWeight: 700 }}>SCATTERED PRODUCT NAMES</p>
        {chipRow(["CyberGPT", "DataQuest", "MECKA", "Quest Hub", "AI Agent"], "#9c3d46", "#fdeef0")}
        <p style={{ margin: "6px 0 2px", fontSize: 11, color: "#8a5a5e", fontWeight: 700 }}>MULTIPLE REWARD UNITS</p>
        {chipRow(["Points", "Cash", "USDC", "MECKA Token", "Credits"], "#9c3d46", "#fdeef0")}
        <p style={{ margin: "6px 0 2px", fontSize: 11, color: "#8a5a5e", fontWeight: 700 }}>MIXED REWARD DISPLAYS</p>
        {chipRow(["+120 points", "+$1.25", "+2.4 USDC", "+15 MECKA"], "#9c3d46", "#fdeef0")}
        <p style={{ margin: "8px 0 2px", fontSize: 11.5 }}><b>✗ Unclear reward logic</b></p>
        <p style={{ margin: 0, fontSize: 11, color: "#6d6884", lineHeight: 1.5 }}>Different units for similar tasks · Cash and tokens shown together · No clear conversion or standard · Hard to compare or track value</p>
        <p style={{ margin: "8px 0 0", fontSize: 11, color: "#6d6884" }}>Fragmented user experience: Hard to understand · Hard to compare · Inconsistent across screens · Low trust and transparency</p>
      </div>
      <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12, alignItems: "center" }}>{[0, 1, 2].map((i) => <span key={i} style={{ fontSize: 20, fontWeight: 800, background: "linear-gradient(90deg,#e5484d,#6C3BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>➜</span>)}</div>
      <div style={{ border: "1.5px solid #b7e4c7", borderRadius: 13, padding: "11px 13px", background: "#f6fdf8" }}>
        <p className="tks-kicker" style={{ margin: "0 0 4px", color: "#1d9e57" }}>After</p>
        <b style={{ fontSize: 13.5 }}>One name. One reward model. Clear, consistent, trustworthy.</b>
        <p style={{ margin: "8px 0 0", fontSize: 11.5 }}>Unified product identity: <b style={{ color: ACC }}>DataQuest by CyberOrigin</b> — Human-action data marketplace for embodied AI.</p>
        <p style={{ margin: "5px 0 0", fontSize: 11.5 }}>One consistent reward model: <b>Earn DataQuest Rewards</b> — Rewards are earned for quality contributions and activities. All rewards use DataQuest Rewards.</p>
        <p style={{ margin: "5px 0 0", fontSize: 11, color: "#55506e", lineHeight: 1.5 }}>Consistent value and transparency: One reward unit — DataQuest Rewards across the platform · Clear earned value — Always shown in DataQuest Rewards · Consistent experience — Same language, all screens · Trust and transparency — Simple, predictable, and easy to track.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 5px" }}>Clear reward states</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5 }}>
          {REWARD_STATES.map(([t, b], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: stateC[i][1], border: `1.5px solid ${i === s ? stateC[i][0] : "transparent"}`, borderRadius: 9, padding: "6px 8px", cursor: "pointer", font: "inherit" }}><span style={{ fontSize: 13 }}>{stateC[i][2]}</span><b style={{ display: "block", color: stateC[i][0], fontSize: 11.5 }}>{t}</b><span style={{ fontSize: 9.5, color: "#55506e", lineHeight: 1.35, display: "block" }}>{b}</span></button>)}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 12, border: "1px solid #e3e0f5", borderRadius: 11, padding: "9px 15px", fontSize: 12, display: "flex", gap: 14, alignItems: "center", background: "#fff" }}><span style={{ fontSize: 17 }}>🧭</span><span><b>Outcome</b> — A unified identity and reward system that users understand, trust, and can easily track: · Stronger brand recognition · Easier to understand and use · Higher trust and transparency · Scalable for future growth</span></div>
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
  const heads = ["Recurring decisions", "Primary jobs-to-be-done", "Success conditions", "Understand with DataQuest"];
  const icons = ["👤", "🎓", "🔬", "🔎", "⚙"];
  return <Dq n="20" title="Role and job map" sub="Evidence-based product hypotheses derived from our workflow analysis and prototype behavior." label="DataQuest role and job map — interactive rebuild of CyberOrigin_20" foot="Built on trust and transparency — Clear guidelines, fair reviews, and secure data handling at every step">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "start" }}>
      {ROLES.map((role, ri) => <button key={role[0]} type="button" onClick={() => setR(ri)} aria-pressed={ri === r} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${ri === r ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit" }}>
        <span style={{ fontSize: 16 }}>{icons[ri]}</span>
        <b style={{ display: "block", fontSize: 12.5, margin: "3px 0 2px", lineHeight: 1.3 }}>{ri + 1} {role[0]}</b>
        <span style={{ display: "block", color: "#6d6884", fontSize: 10, lineHeight: 1.4 }}>{role[1]}</span>
        {[role[2], role[3], role[4], role[5]].map((items, si) => <span key={heads[si]} style={{ display: "block", marginTop: 7 }}>
          <span style={{ display: "block", fontSize: 9.5, fontWeight: 800, letterSpacing: "0.04em", color: si % 2 ? "#0d9488" : "#6C3BFF", textTransform: "uppercase" }}>{heads[si]}</span>
          {items.map((x) => <span key={x} style={{ display: "block", fontSize: 9.8, lineHeight: 1.42, color: "#44405c", paddingLeft: 8, textIndent: -7, marginTop: 2 }}>· {x}</span>)}
        </span>)}
      </button>)}
    </div>
    <p aria-live="polite" style={{ margin: "9px 0 0", fontSize: 11.5, color: "#6d6884" }}>All five roles shown side-by-side, as printed — focused: <b>{ROLES[r][0]}</b>.</p>
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
const TRUST21X: Array<[string, string]> = [...TRUST21.slice(0, 2), ["Security", "End-to-end encryption and secure handling protect every submission."], ...TRUST21.slice(2)];
export function DataQuestJourneyDetailed() {
  const [s, setS] = useState(0);
  const [t, setT] = useState(0);
  const riskAt = JOURNEY21.map((j) => j[3]).filter(Boolean) as string[];
  return <Dq n="21" title="Contributor journey" sub="Evidence-based product hypothesis of the end-to-end contributor workflow." label="DataQuest contributor journey detailed — interactive rebuild of CyberOrigin_21" foot="Good contributor products reduce uncertainty at every handoff — Clear expectations, fast feedback, and fair outcomes turn contributors into long-term partners">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 6 }}>
      {JOURNEY21.map(([title, body, q], i) => <button key={title} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 10, padding: "7px 7px 8px", cursor: "pointer", font: "inherit" }}>
        <span style={{ fontSize: 9.5, fontWeight: 800, color: "#6C3BFF" }}>{String(i + 1).padStart(2, "0")}</span>
        <b style={{ display: "block", fontSize: 10.8, lineHeight: 1.28, margin: "2px 0 3px" }}>{title}</b>
        <span style={{ display: "block", color: "#6d6884", fontSize: 9.3, lineHeight: 1.38 }}>{body}</span>
        <span style={{ display: "block", marginTop: 5, background: "#f7f5ff", border: "1px dashed #c9bffb", borderRadius: 6, padding: "3px 5px", fontSize: 8.8, lineHeight: 1.35, color: "#4a3d8f" }}>{q}</span>
      </button>)}
    </div>
    <div style={{ marginTop: 12, borderTop: "2px dashed #f3c2c8", paddingTop: 7 }}>
      <p className="tks-kicker" style={{ margin: "0 0 5px", color: "#c22f3d" }}>Greatest drop-off risks</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{riskAt.map((r) => <span key={r} style={{ background: "#fdeef0", color: "#c22f3d", borderRadius: 999, padding: "3px 11px", fontSize: 11, fontWeight: 700 }}>⚑ {r}</span>)}</div>
    </div>
    <div style={{ marginTop: 12, background: "#f2efff", borderRadius: 11, padding: "9px 13px" }}>
      <p className="tks-kicker" style={{ margin: "0 0 6px" }}>Trust signals across the journey — Built in. Always on.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
        {TRUST21X.map(([n, b], i) => <button key={n} type="button" onClick={() => setT(i)} aria-pressed={i === t} style={{ textAlign: "left", background: i === t ? "#fff" : "transparent", border: `1px solid ${i === t ? "#6C3BFF" : "transparent"}`, borderRadius: 8, padding: "5px 6px", cursor: "pointer", font: "inherit" }}><b style={{ fontSize: 10.8, color: "#4a3d8f" }}>{n}</b><span style={{ display: "block", color: "#6d6884", fontSize: 9.2, lineHeight: 1.38, marginTop: 2 }}>{b}</span></button>)}
      </div>
    </div>
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
  const [s, setS] = useState(0);
  const band = (label: string, color: string, bg: string, steps: Array<[string, string]>, notes: Array<[string, string]>, noteHead: string, offset: number) => (
    <div style={{ border: `1.5px solid ${color}55`, borderRadius: 13, padding: "10px 12px", background: bg }}>
      <p className="tks-kicker" style={{ margin: "0 0 7px", color }}>{label}</p>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length},1fr)`, gap: 6 }}>
        {steps.map(([t, b], i) => <button key={t} type="button" onClick={() => setS(offset + i)} aria-pressed={s === offset + i} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${s === offset + i ? color : "#e7e4f6"}`, borderRadius: 9, padding: "6px 8px", cursor: "pointer", font: "inherit" }}><span style={{ fontSize: 9.5, fontWeight: 800, color }}>{String(i + 1).padStart(2, "0")}</span><b style={{ display: "block", fontSize: 11, lineHeight: 1.3, margin: "2px 0" }}>{t}</b><span style={{ display: "block", color: "#6d6884", fontSize: 9.8, lineHeight: 1.38 }}>{b}</span></button>)}
      </div>
      <p style={{ margin: "9px 0 5px", fontSize: 11, fontWeight: 800, color }}>{noteHead}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6 }}>
        {notes.map(([t, b]) => <div key={t} style={{ background: "#fff", border: "1px solid #e7e4f6", borderRadius: 8, padding: "5px 8px" }}><b style={{ fontSize: 10.5 }}>{t}</b><p style={{ color: "#6d6884", margin: "2px 0 0", fontSize: 9.8, lineHeight: 1.38 }}>{b}</p></div>)}
      </div>
    </div>);
  return <Dq n="22" title="From broad browsing to bounded task completion" sub="How the product model shifted from category upload to verifiable human-action tasks." label="DataQuest bounded task completion — interactive rebuild of CyberOrigin_22" foot="The stronger product model centers verifiable task completion, not generic category browsing — Better data quality · Fewer disputes and rework · Faster insights for everyone · Sustainable value for the ecosystem">
    {band("Before — broad browsing", "#d63a47", "#fff7f8", BEFORE22, PROBLEMS22, "⚠ Common problems", 0)}
    <div aria-hidden="true" style={{ textAlign: "center", fontSize: 24, fontWeight: 800, color: "#6C3BFF", lineHeight: 1.1, margin: "2px 0" }}>↓</div>
    {band("After — bounded task completion", "#1d9e57", "#f6fdf8", AFTER22, OUTCOMES22, "✓ Better outcomes", 10)}
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
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{PRINCIPLES23.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)} style={{ textAlign: "center", padding: "16px 12px" }}><span style={{ position: "relative", display: "inline-flex", width: 46, height: 46, borderRadius: "50%", background: "#efeaff", alignItems: "center", justifyContent: "center", fontSize: 19 }}>{["🎯", "🎥", "✋", "🔍"][i]}<span style={{ position: "absolute", top: -4, right: -4, background: "#6C3BFF", color: "#fff", borderRadius: "50%", width: 16, height: 16, fontSize: 9.5, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span></span><b style={{ display: "block", marginTop: 8, background: "linear-gradient(92deg,#6C3BFF,#2563EB)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontSize: 13.5, lineHeight: 1.35 }}>{t}</b><p style={{ color: "#555", margin: "6px 0 0", fontSize: 11.5, lineHeight: 1.5 }}>{b}</p></button>)}</div>
    <div style={{ marginTop: 12, border: "1.5px solid #ddd6fb", borderRadius: 12, padding: "10px 14px", display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 12, alignItems: "center", background: "#fff" }}>
      <div><b>👥 Motivated contributors</b><p style={{ color: "#555", margin: "3px 0 0", fontSize: 11.5 }}>Clear tasks, fair treatment, and visible outcomes.</p></div>
      <span aria-hidden="true" style={{ color: "#c9bffb", fontSize: 18 }}>|</span>
      <div><b>🔬 Better research</b><p style={{ color: "#555", margin: "3px 0 0", fontSize: 11.5 }}>Higher-quality data that meets study requirements.</p></div>
      <span aria-hidden="true" style={{ color: "#c9bffb", fontSize: 18 }}>|</span>
      <div><b>🛡 Platform trust</b><p style={{ color: "#555", margin: "3px 0 0", fontSize: 11.5 }}>Consistent, transparent processes build confidence for everyone.</p></div>
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
  const colC = [["#6C3BFF", "#efeaff"], ["#2563EB", "#e3edff"], ["#0d9488", "#e0f5f1"]] as const;
  const colNote = ["Essential end-to-end flow for first credible launch.", "Strengthen usability, quality, and transparency.", "Future value unlocked with scale and governance."];
  return <Dq n="24" title="Scope map" sub="What belongs in the first credible launch, what supports it, and what stays future-facing." label="DataQuest scope map — interactive rebuild of CyberOrigin_24" foot="Scope discipline makes the product more believable and more buildable">
    <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr 1fr", gap: 10, alignItems: "start" }}>
      {SCOPE24.map(([name, tag, items], ci) => <button key={name} type="button" onClick={() => setTab(ci)} aria-pressed={tab === ci} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${tab === ci ? colC[ci][0] : "#e3e0f5"}`, borderRadius: 12, padding: "10px 12px", cursor: "pointer", font: "inherit" }}>
        <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: "50%", background: colC[ci][1], alignItems: "center", justifyContent: "center", fontSize: 15 }}>{["🚀", "🧩", "🔭"][ci]}</span>
        <b style={{ display: "block", fontSize: 13.5, margin: "5px 0 2px" }}>{name}</b>
        <span style={{ display: "inline-block", background: colC[ci][1], color: colC[ci][0], borderRadius: 999, padding: "1px 9px", fontSize: 10.5, fontWeight: 700 }}>{tag}</span>
        <span style={{ display: ci === 0 ? "grid" : "block", gridTemplateColumns: "1fr 1fr", gap: "0 10px", marginTop: 7 }}>
          {items.map((x) => <span key={x} style={{ display: "block", borderBottom: "1px solid #f0edfa", padding: "3.5px 0", fontSize: 11.5 }}>▸ {x}</span>)}
        </span>
        <span style={{ display: "block", color: "#8a86a3", fontSize: 10.5, marginTop: 7 }}>{colNote[ci]}</span>
      </button>)}
    </div>
    <div className="tks-card" style={{ marginTop: 10, borderColor: "#d9a441", background: "#fffaf0" }}><b>⚠ Caution</b> — Medical data and complex token mechanics stayy out of the first credible launch unless governance or implementation evidence exists. <span style={{ color: "#888" }}>(“stayy” as printed.)</span></div>
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
  const owners = ["Research", "Marketplace", "Contributor", "Automation", "Reviewer", "Annotation", "Delivery"];
  const ownerSeg = [0, 1, 1, 2, 3, 4, 5, 6, 6];
  const ownerC = ["#6C3BFF", "#2563EB", "#0d9488", "#e07b16", "#e5484d", "#9333ea", "#1d9e57"];
  return <Dq n="25" title="Data lifecycle" sub="From task request to model feedback." label="DataQuest data lifecycle — interactive rebuild of CyberOrigin_25" foot="High-quality datasets require operational clarity before they require scale — Clear tasks, verified quality, and continuous feedback create trustworthy data that powers better models">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 6 }}>
      {LIFECYCLE25.map(([t, b], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 10, padding: "7px 8px", cursor: "pointer", font: "inherit" }}><span style={{ fontSize: 9.5, fontWeight: 800, color: "#6C3BFF" }}>{String(i + 1).padStart(2, "0")}</span><b style={{ display: "block", fontSize: 11, lineHeight: 1.3, margin: "2px 0" }}>{t}</b><span style={{ display: "block", color: "#6d6884", fontSize: 9.8, lineHeight: 1.38 }}>{b}</span></button>)}
    </div>
    <div style={{ textAlign: "center", marginTop: 12 }}><span style={{ border: "1.5px dashed #b9b2dd", borderRadius: 999, padding: "4px 16px", fontSize: 11.5, color: "#4a3d8f", display: "inline-block" }}>↩ Continuous feedback improves tasks, instructions, and quality over time — dashed loop from Model feedback back to Task request</span></div>
    <div style={{ marginTop: 12 }}>
      <p className="tks-kicker" style={{ margin: "0 0 5px" }}>Primary ownership</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 5 }}>
        {owners.map((o, oi) => <div key={o} style={{ borderTop: `4px solid ${ownerC[oi]}`, background: ownerSeg[s] === oi ? "#f2efff" : "#fff", borderRadius: "0 0 8px 8px", padding: "5px 8px", border: "1px solid #e7e4f6", borderTopWidth: 4, borderTopColor: ownerC[oi] }}><b style={{ fontSize: 11.5 }}>{o}</b><p style={{ color: "#6d6884", margin: "2px 0 0", fontSize: 9.8, lineHeight: 1.35 }}>{LIFECYCLE25.find((l) => l[2].startsWith(o))?.[2].split(" — ")[1] ?? ""}</p></div>)}
      </div>
      <p aria-live="polite" style={{ margin: "7px 0 0", fontSize: 11.5, color: "#6d6884" }}>Step {s + 1} <b>{LIFECYCLE25[s][0]}</b> — owner: <b>{LIFECYCLE25[s][2]}</b></p>
    </div>
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
  const factorC = ["#6C3BFF", "#2563EB", "#0d9488", "#e07b16", "#e5484d", "#9333ea", "#1d9e57", "#b97a0e", "#0e7490"];
  const outcomeC = ["#1d9e57", "#b97a0e", "#2563EB", "#e5484d"];
  return <Dq n="27" title="Quality score model" sub="How a submission is judged before it becomes trustworthy data." label="DataQuest quality score model — interactive rebuild of CyberOrigin_27" foot="Quality scoring should explain outcomes, not behave like a black box — Clear reasons build trust, help contributors improve, and keep data reliable">
    <div style={{ textAlign: "center", marginBottom: 10 }}><span style={{ display: "inline-flex", width: 86, height: 86, borderRadius: "50%", border: "2.5px solid #6C3BFF", background: "#fff", alignItems: "center", justifyContent: "center", textAlign: "center", fontWeight: 800, fontSize: 12.5, color: "#4a3d8f", padding: 8, boxShadow: "0 6px 18px rgba(80,60,180,0.14)" }}>Submission quality</span><p style={{ margin: "5px 0 0", fontSize: 11, color: "#8a86a3" }}>Nine factors on dotted spokes — each factor also carries a Low / Medium / High influence marker on the original diagram.</p></div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{QUALITY27.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === f ? " is-on" : ""}`} aria-pressed={i === f} onClick={() => setF(i)}><span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: "50%", background: `${factorC[i]}1e`, color: factorC[i], alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, marginRight: 6 }}>{i + 1}</span><b>{t}</b><p style={{ color: "#555", margin: "5px 0 0" }}>{b}</p></button>)}</div>
    <div style={{ marginTop: 12, border: "1.5px dashed #b9b2dd", borderRadius: 12, padding: "9px 13px" }}>
      <p className="tks-kicker" style={{ margin: "0 0 6px" }}>Score outcomes</p>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{OUTCOMES27.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === o ? " is-on" : ""}`} aria-pressed={i === o} onClick={() => setO(i)} style={{ borderColor: i === o ? outcomeC[i] : undefined }}><b style={{ color: outcomeC[i] }}>{t}</b><p style={{ color: "#555", margin: "4px 0 0" }}>{b}</p></button>)}</div>
    </div>
    <p aria-live="polite" style={{ margin: "8px 0 0" }}>Factor <b>{QUALITY27[f][0]}</b> feeds the outcome: <b>{OUTCOMES27[o][0]}</b>.</p>
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
  const eqCard = (t: string, b: string, i: number, red = false) => <button type="button" onClick={() => setF(i)} aria-pressed={f === i} style={{ flex: 1, textAlign: "left", background: "#fff", border: `1.5px solid ${f === i ? (red ? "#e5484d" : "#6C3BFF") : red ? "#f3c2c8" : "#e3e0f5"}`, borderRadius: 10, padding: "8px 9px", cursor: "pointer", font: "inherit" }}><b style={{ color: red ? "#c22f3d" : ACC, fontSize: 12 }}>{t}</b><p style={{ color: "#555", margin: "3px 0 0", fontSize: 10.5, lineHeight: 1.4 }}>{b}</p></button>;
  return <Dq n="28" title="Reward calculation" sub="A reward should reflect task effort, operating constraints, and verified quality." label="DataQuest reward calculation — interactive rebuild of CyberOrigin_28" foot="Understandable — Clear factors and simple rules · Predictable — Consistent logic you can rely on · Fair — Rewards reflect effort, risks, and verified quality · Non-speculative — No random boosts or opaque adjustments">
    <div style={{ display: "flex", gap: 6, alignItems: "stretch" }}>
      {eqCard(REWARD28[0][0], REWARD28[0][1], 0)}
      <span aria-hidden="true" style={{ alignSelf: "center", fontWeight: 800, color: "#6C3BFF" }}>＝</span>
      <div style={{ flex: 3.4, border: "1.5px solid #c9bffb", borderRadius: 12, padding: "7px 8px", display: "flex", gap: 5, alignItems: "stretch", background: "#fbfaff" }}>
        {REWARD28.slice(1).map(([t, b], i) => <span key={t} style={{ display: "contents" }}>{i > 0 ? <span aria-hidden="true" style={{ alignSelf: "center", fontWeight: 800, color: "#6C3BFF" }}>×</span> : null}{eqCard(t, b, i + 1)}</span>)}
      </div>
    </div>
    <p style={{ margin: "6px 0 0", fontSize: 11.5, color: "#6d6884" }}>Bonuses are multiplicative. Minimum and maximum limits may apply.</p>
    <div style={{ display: "flex", gap: 6, alignItems: "stretch", marginTop: 10 }}>
      <span aria-hidden="true" style={{ alignSelf: "center", fontWeight: 800, color: "#c22f3d", fontSize: 16 }}>−</span>
      {eqCard("Rejection", "No reward for rejected submissions.", 6, true)}
      {eqCard("Partial acceptance", "Reward may be reduced for partial acceptance.", 7, true)}
    </div>
    <div className="tks-card" style={{ marginTop: 12 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Example — worked calculation (as printed, verbatim)</p>
      <p style={{ fontSize: 19, margin: 0, fontWeight: 600 }}>$1.50 <span style={{ color: "#8a86a3", fontSize: 12 }}>Base reward</span> × 1.20 <span style={{ color: "#8a86a3", fontSize: 12 }}>Difficulty</span> × 1.10 <span style={{ color: "#8a86a3", fontSize: 12 }}>Device</span> × 1.15 <span style={{ color: "#8a86a3", fontSize: 12 }}>Location</span> × 1.30 <span style={{ color: "#8a86a3", fontSize: 12 }}>Scarcity</span> × 1.25 <span style={{ color: "#8a86a3", fontSize: 12 }}>Quality</span> − 0% <span style={{ color: "#8a86a3", fontSize: 12 }}>Rejection</span> = <b style={{ color: "#6C3BFF" }}>$2.78 Final reward</b></p>
      <p style={{ color: "#888", margin: "5px 0 0" }}>Printed example reproduced exactly as shown on the slide.</p></div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>How a reward is settled</p>
    <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 170px", gap: 10, alignItems: "start" }}>
      <div style={{ border: "1.5px dotted #b9b2dd", borderRadius: 10, padding: "8px 10px", fontSize: 11, color: "#4a3d8f" }}>“We quote an estimated reward upfront so you know what to expect.”</div>
      <Flow steps={REWARD_FLOW28} s={s} setS={setS} />
      <div style={{ border: "1.5px dotted #b9b2dd", borderRadius: 10, padding: "8px 10px", fontSize: 11, color: "#4a3d8f" }}>“Quality directly impacts your final reward — higher quality earns more.”</div>
    </div>
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
  const icons = ["💬", "🔒", "✓", "👛", "📤", "🏦"];
  return <Dq n="29" title="Ledger and settlement flow" sub="How an estimated reward becomes an available payout." label="DataQuest ledger and settlement flow — interactive rebuild of CyberOrigin_29" foot="Settlement clarity is a trust feature, not only a finance feature — Clear states. Transparent transitions. Confident contributors">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7 }}>
      {LEDGER29.map(([t, b], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: i === 3 || i === 5 ? "#f2fbf5" : "#fff", border: `1.5px solid ${i === s ? "#6C3BFF" : i === 3 || i === 5 ? "#b7e4c7" : "#e3e0f5"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit" }}>
        <span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: "50%", background: i === 3 || i === 5 ? "#e7f7ee" : "#efeaff", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{icons[i]}</span>
        <b style={{ display: "block", fontSize: 12, margin: "5px 0 2px", lineHeight: 1.3 }}>{i + 1} {t}</b>
        <span style={{ display: "block", color: "#6d6884", fontSize: 10.5, lineHeight: 1.4 }}>{b}</span>
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 10, marginTop: 12, alignItems: "stretch" }}>
      <div style={{ border: "1.5px solid #f0d48a", background: "#fffaf0", borderRadius: 11, padding: "9px 12px" }}><b style={{ color: "#b97a0e" }}>Pending (reserved)</b><p style={{ color: "#55506e", margin: "3px 0 0", fontSize: 11.5 }}>Budget is locked for the task. Not spendable or withdrawable.</p></div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ border: "1.5px solid #b7e4c7", background: "#f2fbf5", borderRadius: 11, padding: "9px 12px" }}><b style={{ color: "#1d9e57" }}>Available</b><p style={{ color: "#55506e", margin: "3px 0 0", fontSize: 11.5 }}>Released after approval. Ready to be paid out.</p></div>
        <div style={{ border: "1px solid #e3e0f5", borderRadius: 11, padding: "9px 12px", background: "#fff", fontSize: 11.5, color: "#55506e" }}>Every step is recorded on the ledger for transparency, auditability, and contributor confidence.</div>
      </div>
    </div>
    <p aria-live="polite" style={{ margin: "9px 0 0", fontSize: 11.5, color: "#6d6884" }}>Current step: <b>{LEDGER29[s][0]}</b> — {LEDGER29[s][1]}</p>
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
  const rate = (r: string) => r === "High" ? <b style={{ color: "#1d9e57" }}>✓ High</b> : r === "Medium" ? <b style={{ color: "#b97a0e" }}>− Medium</b> : <b style={{ color: "#e5484d" }}>✗ Low</b>;
  return <Dq n="30" title="Reward model options" sub="Compare public launch options for contributor rewards." label="DataQuest reward model options — interactive rebuild of CyberOrigin_30" foot="Editorial note: Do not present $MECKA as a live public asset without deployed contract and settlement evidence — Start with a clear, simple reward promise. You can evolve the model as the platform matures">
    <div style={{ display: "flex", gap: 10, alignItems: "stretch", marginBottom: 10 }}>
      <div style={{ flex: 1, border: "1.5px solid #c9bffb", background: "#f7f5ff", borderRadius: 11, padding: "9px 13px", fontSize: 12 }}><b style={{ color: "#6C3BFF" }}>★ Recommended for public launch</b> — USDC-equivalent reward estimate. Strongest on trust, clarity, and settlement realism. Easy to understand. Easy to deliver.</div>
    </div>
    <table className="tks-table" style={{ fontSize: 10.8 }} aria-live="polite">
      <thead><tr><th style={{ width: "17%" }}>Criterion</th>{MODELS30.map(([n, sub], ci) => <th key={n} style={ci === m ? { background: "#f2efff" } : undefined}><button type="button" onClick={() => setM(ci)} aria-pressed={ci === m} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", fontWeight: 800, padding: 0, textAlign: "left" }}>{n}</button><br /><span style={{ fontWeight: 400, color: "#777" }}>{sub}</span></th>)}</tr></thead>
      <tbody>
        {CRITERIA30.map(([c, q], ri) => <tr key={c}><td><b>{c}</b><br /><span style={{ color: "#777" }}>{q}</span></td>{MODELS30.map((model, ci) => <td key={model[0]} style={ci === m ? { background: "#faf9ff" } : undefined}>{rate(model[2][ri][0])}<br /><span style={{ color: "#55506e" }}>{model[2][ri][1]}</span></td>)}</tr>)}
        <tr><td></td>{MODELS30.map(([n], ci) => <td key={n}>{ci === 1 ? <span style={{ background: "#efeaff", color: "#6C3BFF", borderRadius: 6, padding: "2px 8px", fontWeight: 800 }}>★ RECOMMENDED</span> : ci === 3 ? <span style={{ background: "#fdeef0", color: "#c22f3d", borderRadius: 6, padding: "2px 8px", fontWeight: 800 }}>⊘ NOT RECOMMENDED</span> : null}</td>)}</tr>
      </tbody>
    </table>
    <p style={{ margin: "8px 0 0", fontSize: 11, color: "#8a86a3" }}>Note: the ★ RECOMMENDED footer sits under the Fiat-equivalent credits column on the printed slide, while the callout above recommends the USDC-equivalent estimate — reproduced as printed. Token column note: High complexity, weak evidence unless deployed settlement proof exists.</p>
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
  return <Dq n="31" title="DataQuest Information Architecture" sub="First-launch information architecture for the DataQuest contributor product." label="DataQuest information architecture — interactive rebuild of CyberOrigin_31" foot="Cross-cutting elements: Notifications — System alerts and updates · Quality Standards — Guidelines that ensure data quality · Feedback — In-product feedback and improvements · Onboarding — New contributor journey · Learning Center — Tips, best practices, and tutorials · Leaderboards — Community rankings and recognition">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
      <div style={{ fontSize: 11, color: "#55506e", border: "1px solid #e3e0f5", borderRadius: 9, padding: "6px 10px", background: "#fff" }}><b>Key</b> — solid card: primary section · chips: subsections · dashed card: utility / modal</div>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>{["10 Primary sections", "34+ Screens", "Contributor Product", "Human-in-the-loop At the core"].map((x) => <span key={x} style={{ background: "#efeaff", color: "#6C3BFF", borderRadius: 999, padding: "2px 10px", fontSize: 10.5, fontWeight: 700 }}>{x}</span>)}</div>
    </div>
    <div style={{ textAlign: "center", marginBottom: 4 }}><span style={{ display: "inline-block", background: "linear-gradient(92deg,#6C3BFF,#2563EB)", color: "#fff", borderRadius: 11, padding: "8px 22px" }}><b style={{ fontSize: 14.5 }}>⌂ Home</b><br /><span style={{ fontSize: 10.5, opacity: 0.9 }}>Dashboard overview and key actions</span></span></div>
    <div aria-hidden="true" style={{ textAlign: "center", color: "#b9b2dd", fontSize: 12, letterSpacing: 6 }}>│ ├ ├ ├ ├ ├ ├ ├ ├ ┤</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
      {IA31.map(([name, desc, subs, util], i) => <div key={name}>
        <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ width: "100%", textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#6C3BFF" : "#c9bffb"}`, borderRadius: 10, padding: "7px 9px", cursor: "pointer", font: "inherit" }}>
          <b style={{ fontSize: 11.5 }}><span style={{ color: "#6C3BFF" }}>{i + 1}</span> {name}</b>
          <span style={{ display: "block", color: "#6d6884", fontSize: 9.5, lineHeight: 1.38, margin: "2px 0 5px" }}>{desc}</span>
          <span style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>{subs.map((x) => <span key={x} style={{ background: "#f4f2fb", borderRadius: 4, padding: "1px 5px", fontSize: 8.8, color: "#55506e" }}>{x}</span>)}</span>
        </button>
        <div style={{ border: "1.5px dashed #b9b2dd", borderRadius: 8, padding: "4px 8px", marginTop: 4, fontSize: 9.5, color: "#4a3d8f", background: "#fbfaff" }}>{util}</div>
      </div>)}
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
      <div style={{ fontSize: 10.5, color: "#55506e", border: "1px solid #e3e0f5", borderRadius: 9, padding: "6px 10px", background: "#fff", maxWidth: 330 }}><b>Diagram guide</b> — Read top-down: Home fans out to the ten primary sections; each section lists its subsections and the utility / modal it can open. Focused: <b aria-live="polite">{IA31[s][0]}</b>.</div>
    </div>
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
  const dimIcons = ["🌍", "🎬", "📱", "📡", "⏱", "🧩", "⚠", "📍", "🔒", "💰"];
  return <Dq n="32" title="DataQuest Task Taxonomy" sub="A multidimensional framework for classifying verifiable human-action tasks across real-world contexts." label="DataQuest task taxonomy — interactive rebuild of CyberOrigin_32">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "start" }}>
      {TAXONOMY.map(([name, def, vals], di) => <div key={name} style={{ border: "1px solid #e3e0f5", borderRadius: 11, padding: "8px 9px", background: "#fff" }}>
        <b style={{ fontSize: 12 }}>{dimIcons[di]} {name}</b>
        <p style={{ color: "#6d6884", margin: "2px 0 6px", fontSize: 9.8, lineHeight: 1.38 }}>{def}</p>
        <div style={{ display: "grid" }}>{vals.map((v, vi) => <button key={v} type="button" onClick={() => setPick((p) => ({ ...p, [di]: vi }))} aria-pressed={pick[di] === vi} style={{ textAlign: "left", background: pick[di] === vi ? "#f2efff" : "transparent", border: "none", borderBottom: "1px solid #f0edfa", padding: "3px 2px", cursor: "pointer", font: "inherit", fontSize: 10.3, color: pick[di] === vi ? "#4a3d8f" : "#44405c", fontWeight: pick[di] === vi ? 700 : 400 }}>{pick[di] === vi ? "●" : "○"} {v}</button>)}</div>
      </div>)}
      <div style={{ border: "1.5px solid #c9bffb", borderRadius: 11, padding: "9px 11px", background: "#f7f5ff", fontSize: 11, color: "#4a3d8f", lineHeight: 1.5, gridColumn: "span 2" }}>This taxonomy ensures every task is well-scoped, verifiable, safe, and valuable — enabling scalable quality data and trusted rewards.</div>
    </div>
    <div style={{ marginTop: 11, border: "1.5px solid #ddd6fb", borderRadius: 11, padding: "8px 14px", display: "flex", gap: 12, alignItems: "center", background: "#fff", fontSize: 11.5 }}>
      <span style={{ fontSize: 17 }}>⭐</span>
      <span><b>A structured taxonomy enables consistent task design, better matching, and higher quality outcomes</b> — · Clear task scoping · Safer execution · Higher quality data · Fair rewards and trust</span>
      <span aria-live="polite" style={{ marginLeft: "auto", flex: "none", color: "#6d6884" }}>{Object.keys(pick).length} / 10 dimensions set</span>
    </div>
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
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 12, alignItems: "start" }}>
      <div style={{ borderRight: "1px solid #e3e0f5", paddingRight: 10 }}>
        <b style={{ fontSize: 15, background: "linear-gradient(92deg,#6C3BFF,#2563EB)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Component Library</b>
        <div style={{ display: "grid", gap: 2, marginTop: 8 }}>
          {LIB33.map(([n], i) => <button key={n} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: i === s ? "#efeaff" : "transparent", color: i === s ? "#6C3BFF" : "#55506e", border: "none", borderRadius: 6, padding: "4px 8px", cursor: "pointer", font: "inherit", fontSize: 11.5, fontWeight: i === s ? 700 : 400 }}>{n}</button>)}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
        {LIB33.slice(1).map(([n, body], i) => <div key={n} style={{ border: `1.5px solid ${s === i + 1 ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 11, padding: "9px 11px", background: "#fff" }}>
          <b style={{ fontSize: 12.5 }}>{n}</b>
          {n === "Task cards" ? <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginTop: 6 }}>{[["Urban Street Scene", "Capture a street scene that includes storefronts, pedestrian activity, and vehicles.", "$0.20–$2.50 / task · ≈ 3 min"], ["Receipt OCR", "Transcribe text, totals, date, and store information.", "$0.10–$0.60 / task · 2 min"], ["Audio Recording", "Record clear audio of the requested environment or spoken content.", "$0.20–$1.20 / task · 3 min"], ["Product Shelf Image", "Capture products on shelf with clear labels and pricing visible.", "$0.15–$0.75 / task · 2 min"]].map(([t, b, m]) => <div key={t} style={{ border: "1px solid #eeeaf9", borderRadius: 8, padding: "5px 7px", fontSize: 10 }}><b>{t}</b><br /><span style={{ color: "#6d6884" }}>{b}</span><br /><span style={{ color: "#6C3BFF", fontWeight: 700 }}>{m}</span></div>)}<div style={{ border: "1.5px dashed #b9b2dd", borderRadius: 8, padding: "5px 7px", fontSize: 10, color: "#6C3BFF", fontWeight: 700, display: "flex", alignItems: "center" }}>+ Add new task</div></div>
          : n === "Rewards & Ledger" ? <p style={{ margin: "5px 0 0", fontSize: 10.8, color: "#44405c", lineHeight: 1.55 }}>{body}</p>
          : n === "Verification" ? <p style={{ margin: "5px 0 0", fontSize: 10.8, color: "#44405c", lineHeight: 1.55 }}>{body}</p>
          : <p style={{ margin: "5px 0 0", fontSize: 10.8, color: "#44405c", lineHeight: 1.55 }}>{body}</p>}
        </div>)}
      </div>
    </div>
    <p aria-live="polite" style={{ margin: "9px 0 0", fontSize: 11.5, color: "#6d6884" }}>All component groups on the board at once, as printed — rail focus: <b>{LIB33[s][0]}</b>. Overview (as printed): {LIB33[0][1]}</p>
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
  const accent: Record<string, string> = { Campaign: "#6C3BFF", Dataset: "#0d9488", Requirement: "#e07b16", Review: "#e07b16", Reward: "#1d9e57" };
  const tiers: Array<[string, number[]]> = [["Tier 1 — programme & source", [0, 1]], ["Tier 2 — work definition & execution", [2, 3, 4, 5]], ["Tier 3 — people, evaluation & incentive", [6, 7, 8]]];
  const card = (i: number) => { const [t, b, foot] = OBJECTS34[i]; const c = accent[t] ?? ACC; return <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)} style={{ textAlign: "left", padding: 0, overflow: "hidden" }}><span style={{ display: "block", padding: "8px 11px 6px" }}><b style={{ color: c }}>{t}</b><p style={{ color: "#555", margin: "3px 0 0", fontSize: 11.3, lineHeight: 1.45 }}>{b}</p></span><span style={{ display: "block", background: `${c}14`, color: c, fontSize: 10.3, padding: "4px 11px", fontWeight: 600 }}>{foot}</span></button>; };
  return <Dq n="34" title="Conceptual Object Model" sub="The core entities and relationships that power verifiable human-action tasks." label="DataQuest conceptual object model — interactive rebuild of CyberOrigin_34">
    <div style={{ display: "grid", gap: 10 }}>
      {tiers.map(([label, idx]) => <div key={label}>
        <p className="tks-kicker" style={{ margin: "0 0 5px" }}>{label}</p>
        <div className="tks-grid" style={{ gridTemplateColumns: `repeat(${idx.length},1fr)` }}>{idx.map(card)}</div>
      </div>)}
    </div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> — {cur[2]}<br />Relationships (labelled arrows on the original): {cur[3]}</div>
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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, alignItems: "start" }}>
      {CARDS36.map(([l, t, d, body, pros, cons], i) => <div key={l}>
        <button type="button" onClick={() => { setS(i); setStarted(false); }} aria-pressed={i === s} style={{ width: "100%", textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#6C3BFF" : "#e3e0f5"}`, borderRadius: 12, padding: "10px 12px", cursor: "pointer", font: "inherit" }}>
          <span className="tks-num" style={{ background: ACC }}>{l}</span> <b>{t}</b>{i === 1 ? <span style={{ background: "#efeaff", color: "#6C3BFF", borderRadius: 5, padding: "1px 6px", fontWeight: 800, fontSize: 9.5, marginLeft: 5 }}>★ RECOMMENDED</span> : null}
          <p className="tks-kicker" style={{ margin: "4px 0 7px" }}>{d}</p>
          <span style={{ display: "block", border: "1px solid #eeeaf9", borderRadius: 9, padding: "7px 9px", fontSize: 10.8, lineHeight: 1.5 }}>
            <b>Image Capture — Urban Street Scene</b><br /><span style={{ color: "#6d6884" }}>Capture a street scene that includes storefronts, pedestrian activity, and vehicles.</span><br />
            Reward <b style={{ color: ACC }}>$1.20</b> per approved task · Est. time 20–30 min · Location Downtown area
            {body.map((x) => <span key={x} style={{ display: "block", marginTop: 4 }}>{x}</span>)}
            <span style={{ display: "block", marginTop: 7, background: "#6C3BFF", color: "#fff", textAlign: "center", borderRadius: 7, padding: "4px 0", fontWeight: 700 }}>Start task →</span>
          </span>
        </button>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 6 }}>
          <div style={{ border: "1px solid #b7e4c7", borderRadius: 9, padding: "6px 8px", background: "#f6fdf8" }}><p className="tks-kicker" style={{ margin: "0 0 3px", color: "#1d9e57" }}>✓ Pros</p>{pros.map((x) => <p key={x} style={{ margin: "2px 0", fontSize: 10, lineHeight: 1.4 }}>✓ {x}</p>)}</div>
          <div style={{ border: "1px solid #f3c2c8", borderRadius: 9, padding: "6px 8px", background: "#fff7f8" }}><p className="tks-kicker" style={{ margin: "0 0 3px", color: "#c22f3d" }}>✕ Cons</p>{cons.map((x) => <p key={x} style={{ margin: "2px 0", fontSize: 10, lineHeight: 1.4 }}>✕ {x}</p>)}</div>
        </div>
      </div>)}
    </div>
    <div style={{ marginTop: 11, background: "#efeaff", borderRadius: 10, padding: "9px 14px", fontSize: 12.5, color: "#4a3d8f" }} aria-live="polite"><b>Recommendation — Direction B · Balanced &amp; informative:</b> Provides the best balance of scannability, context, and clarity. It surfaces key requirements and eligibility without overwhelming the user, while keeping the primary action and reward visible and accessible. Focused direction: <b>{cur[0]}</b>{started ? " · Start task pressed on the focused card." : ""}</div>
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
  return <Dq n="37" title="Contributor flow: Capture task" sub="End-to-end wireflow from accepting a task to confirmation." label="DataQuest capture task wireflow — interactive rebuild of CyberOrigin_37" foot="How guidance stays visible during capture: Requirements always accessible · In-context tips · Pre-check feedback · Clear next steps">
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
      <div style={{ border: "1px solid #e3e0f5", borderRadius: 9, padding: "6px 10px", fontSize: 10.5, color: "#55506e", background: "#fff", maxWidth: 330 }}><b>About this wireflow</b> — This wireflow shows the core contributor experience for completing a capture task on the DataQuest mobile web app.</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 6, alignItems: "start" }}>
      {WIREFLOW37.map(([t, body, cap], i) => <div key={t}>
        <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ width: "100%", textAlign: "left", background: "#fbfbfd", border: `1.5px solid ${i === s ? "#6C3BFF" : "#c9c9d4"}`, borderRadius: 12, padding: "6px 6px 7px", cursor: "pointer", font: "inherit", minHeight: 168 }}>
          <span style={{ display: "block", textAlign: "center", fontSize: 8, color: "#8a86a3" }}>9:41</span>
          <b style={{ display: "block", fontSize: 10, margin: "2px 0", lineHeight: 1.3 }}>{i + 1} {t}</b>
          <span style={{ display: "block", color: "#55506e", fontSize: 8.6, lineHeight: 1.45, whiteSpace: "pre-line" }}>{body.replace(/ · /g, "\n")}</span>
        </button>
        <p style={{ margin: "4px 0 0", fontSize: 8.8, color: "#6d6884", lineHeight: 1.4 }}>{cap}</p>
      </div>)}
    </div>
    <div style={{ marginTop: 11, background: "#efeaff", borderRadius: 10, padding: "8px 14px", fontSize: 12, color: "#4a3d8f", display: "flex", gap: 14, flexWrap: "wrap" }}><b>Guidance band</b><span>Requirements always accessible</span><span>In-context tips</span><span>Pre-check feedback</span><span>Clear next steps</span><span aria-live="polite">· Step: <b>{WIREFLOW37[s][0]}</b></span></div>
    <p style={{ margin: "7px 0 0", fontSize: 10.5, color: "#8a86a3" }}>Wireflow for illustrative purposes only. Final UI may vary. Guidance is persistent throughout the flow — before, during, and after capture — to help contributors meet requirements and reduce rework.</p>
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
const MOCK38 = ["Image Capture $2.50 per task · Location Verification $1.50 per task · Text & OCR $0.60 per task — reward amounts lead the cards.", "Task cards show price and Start only; instructions appear after capture begins.", "“Connect your wallet — Connect wallet / Maybe later · Secure · Non-custodial · You're in control.”"];
export function DataQuestDecisionLog() {
  const [d, setD] = useState(0);
  return <Dq n="38" title="Decision log" sub="Evaluating alternative patterns for task completion and rewards to ensure DataQuest feels clear, trustworthy, and motivating — without friction or confusion." label="DataQuest decision log — interactive rebuild of CyberOrigin_38" foot="Our chosen direction: Lead with clarity and purpose. Present requirements up front, guide users step-by-step, and introduce wallet connection after value is experienced">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
      <span style={{ fontSize: 11, letterSpacing: "0.08em", fontWeight: 800, color: "#8a86a3" }}>⚖ CASE STUDY • DESIGN DECISION LOG</span>
      <span style={{ border: "1.5px solid #6C3BFF", color: "#6C3BFF", borderRadius: 999, padding: "2px 11px", fontSize: 11, fontWeight: 700 }}>co-dq-32</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, alignItems: "start" }}>
      {DECISIONS38.map(([t, b, reasons], i) => <button key={t} type="button" onClick={() => setD(i)} aria-pressed={i === d} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === d ? "#c22f3d" : "#e3e0f5"}`, borderRadius: 12, padding: "10px 12px", cursor: "pointer", font: "inherit" }}>
        <span className="tks-num" style={{ background: "#c22f3d" }}>{i + 1}</span> <b>{t}</b> <span style={{ background: "#fdeef0", color: "#c22f3d", borderRadius: 5, padding: "1px 6px", fontWeight: 800, fontSize: 9.5 }}>✕ REJECTED</span>
        <p style={{ color: "#555", margin: "5px 0 0", fontSize: 11.5 }}>{b}</p>
        <span aria-hidden="true" style={{ display: "block", background: "repeating-linear-gradient(180deg,#f4f4f8 0 9px,#eceaf2 9px 10px)", border: "1px solid #dcdce6", borderRadius: 7, padding: "6px 8px", margin: "8px 0", fontSize: 9.8, color: "#55506e", lineHeight: 1.45 }}>{MOCK38[i]}</span>
        <span style={{ display: "block", fontSize: 10, fontWeight: 800, letterSpacing: "0.05em", color: "#c22f3d" }}>WHY WE REJECTED IT</span>
        {reasons.map(([rt, rb, ev]) => <span key={rt} style={{ display: "block", marginTop: 5 }}><b style={{ fontSize: 11.3 }}>{rt}</b><span style={{ display: "block", color: "#6d6884", fontSize: 10.3, lineHeight: 1.42 }}>{rb}</span><span style={{ display: "block", color: "#8a86a3", fontSize: 10, fontStyle: "italic" }}>{ev}</span></span>)}
      </button>)}
    </div>
    <p aria-live="polite" style={{ margin: "9px 0 0", fontSize: 11.5, color: "#6d6884" }}>Rejected alternative in focus: <b>{DECISIONS38[d][0]}</b>.</p>
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
  const stageC = ["#0d9488", "#6C3BFF", "#d6336c"];
  const stageIcons = ["🖥", "📱", "⬡"];
  const stageCaps = ["Functional layouts and task flows validated early user needs.", "Validated flows and interactions before moving into visual design.", "A unified, trustworthy system that scales with clarity and confidence."];
  return <Dq n="39" title="The evolution of a unified data collection and rewards system" sub="From early exploration to a cohesive product experience built for clarity, trust, and scale." label="DataQuest evolution — interactive rebuild of CyberOrigin_39">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 26px 1fr 26px 1fr", gap: 6, alignItems: "stretch" }}>
      {EVOLUTION39.map(([t, b, d], i) => <span key={t} style={{ display: "contents" }}>
        {i > 0 ? <span aria-hidden="true" style={{ alignSelf: "center", textAlign: "center", fontSize: 19, fontWeight: 800, background: "linear-gradient(90deg,#6C3BFF,#d6336c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>➜</span> : null}
        <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? stageC[i] : "#e3e0f5"}`, borderTop: `4px solid ${stageC[i]}`, borderRadius: 12, padding: "10px 12px", cursor: "pointer", font: "inherit" }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: stageC[i], letterSpacing: "0.06em" }}>STAGE {i + 1}</span>
          <b style={{ display: "block", fontSize: 13.5, margin: "3px 0" }}>{t}</b>
          <span style={{ display: "block", color: "#55506e", fontSize: 11, lineHeight: 1.45 }}>{b}</span>
          <span style={{ display: "block", background: "#f7f5ff", border: "1px solid #e7e4f6", borderRadius: 8, padding: "6px 8px", marginTop: 7, fontSize: 10.3, lineHeight: 1.5, color: "#44405c" }}>{d}</span>
          <span style={{ display: "block", marginTop: 7, fontSize: 10.5, color: stageC[i], fontWeight: 700 }}>{stageIcons[i]} {stageCaps[i]}</span>
        </button>
      </span>)}
    </div>
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
  const [type, setType] = useState(0);
  const [col, setCol] = useState(0);
  const [dur, setDur] = useState(1);
  const panel = (num: string, title: string, children: ReactNode) => (
    <div style={{ border: "1px solid #e3e0f5", borderRadius: 12, padding: "9px 11px", background: "#fff" }}>
      <p style={{ margin: "0 0 6px", fontSize: 11, fontWeight: 800, letterSpacing: "0.05em", color: "#4a3d8f" }}><span style={{ color: "#6C3BFF" }}>{num}</span> {title}</p>
      {children}
    </div>);
  const spacing = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 96];
  return <Dq n="40" title="Visual Foundations" sub="The design system behind a clear, consistent, and trustworthy experience." label="DataQuest visual foundations — interactive rebuild of CyberOrigin_40" foot="DataQuest Design System · Version 1.0 · Built with clarity. Designed for trust. Scaled for impact. · © 2025 CyberOrigin">
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 9 }}>
      <div style={{ border: "1.5px solid #c9bffb", background: "#f7f5ff", borderRadius: 10, padding: "6px 13px", fontSize: 12, color: "#4a3d8f" }}><b>One system. Every experience. Always DataQuest.</b></div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      {panel("01", "Typography", <>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}><span style={{ fontSize: 44, fontWeight: 800, lineHeight: 1 }}>Aa</span><span><b style={{ fontSize: 15 }}>Geist</b><br /><span style={{ fontSize: 10.5, color: "#6d6884" }}>Clean. Modern. Human. Built for clarity at every scale.</span></span></div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 9.8, marginTop: 6 }}>
          <thead><tr style={{ color: "#8a86a3", textAlign: "left" }}><th>Style</th><th>Example</th><th>Size · LH</th><th>Weight</th></tr></thead>
          <tbody>{TYPE40.map(([st, ex, sz, w], i) => <tr key={st} onClick={() => setType(i)} style={{ borderTop: "1px solid #f0edfa", cursor: "pointer", background: i === type ? "#f7f5ff" : "transparent" }}><td><b>{st}</b></td><td style={{ maxWidth: 110, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ex}</td><td>{sz}</td><td>{w}</td></tr>)}</tbody>
        </table>
        <p aria-live="polite" style={{ fontSize: [22, 19, 16.5, 14.5, 12.5, 11.5, 10.5][type], fontWeight: type <= 1 ? 800 : type <= 3 ? 600 : 400, margin: "6px 0 0" }}>{TYPE40[type][1]}</p>
      </>)}
      {panel("02", "Spacing Scale", <>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 54 }}>{spacing.map((v) => <span key={v} style={{ flex: 1, background: "linear-gradient(180deg,#8b6cff,#6C3BFF)", borderRadius: "2px 2px 0 0", height: Math.max(3, v * 0.52) }} title={`${v}px`} />)}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8.8, color: "#8a86a3" }}><span>0</span><span>8</span><span>24</span><span>48</span><span>96</span></div>
        <p style={{ fontSize: 9.8, color: "#55506e", lineHeight: 1.55, margin: "5px 0 0" }}>8pt base — 0 · 2 · 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 96<br />Tokens: --space-0 0px · --space-1 4px · --space-2 8px · --space-3 12px · --space-4 16px · --space-6 24px · --space-8 32px · --space-10 40px · --space-12 48px · --space-16 64px</p>
      </>)}
      {panel("03", "Grid System", <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 2 }}>{Array.from({ length: 12 }).map((_, i) => <span key={i} style={{ height: 40, background: "rgba(108,59,255,0.16)", borderRadius: 2 }} />)}</div>
        <p style={{ fontSize: 10.5, color: "#55506e", lineHeight: 1.55, margin: "6px 0 0" }}>12 Column Grid<br />Max width: 1440px · Gutter: 24px · Margin: 24px</p>
      </>)}
      {panel("04", "Color System", <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 4 }}>{COLORS40.map(([n, hex], i) => <button key={n} type="button" onClick={() => setCol(i)} aria-pressed={i === col} title={`${n} ${hex}`} style={{ height: 24, borderRadius: 5, background: hex, border: i === col ? "2px solid #14101f" : "1px solid #ddd", cursor: "pointer", padding: 0 }} />)}</div>
        <p aria-live="polite" style={{ fontSize: 10.5, margin: "6px 0 0" }}><b>{COLORS40[col][0]}</b> — {COLORS40[col][1]} · Usage: {COLORS40[col][2]}</p>
        <p style={{ fontSize: 9.8, color: "#8a86a3", margin: "3px 0 0" }}>Primary #6C3BFF / #4F46FF / #2563EB · Semantic Success #16A34A · Warning #F59E0B · Error #EF4444 · Info #3B82F6 · Neutral 50–900</p>
      </>)}
      {panel("05", "Border Radius", <>
        <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>{[["sm", 4], ["md", 8], ["lg", 12], ["xl", 16], ["2xl", 24], ["full", 999]].map(([n, r]) => <span key={n as string} style={{ textAlign: "center", fontSize: 9.3, color: "#55506e" }}><span style={{ display: "block", width: 30, height: 30, border: "2px solid #6C3BFF", borderRadius: r as number, marginBottom: 2 }} />{n}</span>)}</div>
        <p style={{ fontSize: 9.8, color: "#55506e", margin: "5px 0 0" }}>--radius-sm 4px · --radius-md 8px · --radius-lg 12px · --radius-xl 16px · --radius-2xl 24px · --radius-full 9999px</p>
      </>)}
      {panel("06", "Elevation", <>
        <div style={{ display: "flex", gap: 6 }}>{[0, 1, 2, 3, 4].map((i) => <span key={i} style={{ flex: 1, height: 30, background: "#fff", borderRadius: 6, boxShadow: ["0 1px 2px rgba(16,24,40,0.04)", "0 2px 4px rgba(16,24,40,0.06)", "0 8px 16px rgba(16,24,40,0.08)", "0 16px 32px rgba(16,24,40,0.12)", "0 24px 48px rgba(16,24,40,0.16)"][i], border: "1px solid #f0edfa", fontSize: 9.3, display: "flex", alignItems: "center", justifyContent: "center", color: "#55506e" }}>e-{i}</span>)}</div>
        <p style={{ fontSize: 9.8, color: "#55506e", margin: "5px 0 0", lineHeight: 1.5 }}>--elevation-0: 0 1px 2px rgba(16,24,40,0.04) · -1: 0 2px 4px 0.06 · -2: 0 8px 16px 0.08 · -3: 0 16px 32px 0.12 · -4: 0 24px 48px 0.16</p>
      </>)}
      {panel("07", "Iconography", <>
        <div style={{ fontSize: 17, letterSpacing: 5 }}>⌂ ◈ ⬆ ✓ ⚠ 👛 🔍 ⏱</div>
        <p style={{ fontSize: 10.5, color: "#55506e", margin: "5px 0 0", lineHeight: 1.55 }}>Line icons with consistent stroke, corner, and optical balance.<br />2px stroke · 24px grid · Rounded caps &amp; joins</p>
      </>)}
      {panel("08", "Motion Principles", <>
        <p style={{ fontSize: 10.5, color: "#55506e", margin: 0, lineHeight: 1.55 }}><b>Purposeful</b> — Motion supports understanding and feedback. <b>Subtle</b> — Gentle easing feels natural. <b>Responsive</b> — Immediate feedback builds confidence. <b>Consistent</b> — Shared timing and patterns.</p>
        <div style={{ display: "flex", gap: 4, marginTop: 6 }}>{["Fast 150ms ease-out", "Base 250ms ease-out", "Slow 350ms ease-out"].map((x, i) => <button key={x} type="button" className="tks-chip" aria-pressed={i === dur} onClick={() => setDur(i)} style={{ fontSize: 9.8, padding: "2px 8px" }}>{x}</button>)}</div>
        <p style={{ fontSize: 10, color: "#8a86a3", margin: "5px 0 0" }}>Common Patterns: Fade · Slide · Scale — selected: {["150ms", "250ms", "350ms"][dur]}.</p>
      </>)}
      {panel("09", "Accessibility", <>
        <p style={{ fontSize: 10.5, color: "#55506e", margin: 0, lineHeight: 1.55 }}><b>Accessible by design. Usable by everyone. Trusted by all.</b><br />Color Contrast: AA 4.5:1 normal · AAA 7:1 large · accessible token pairs. Text: min 12px · line height ≥ 1.4 · ~70ch. Focus: visible on all interactive elements · --focus-ring. Keyboard: all actions · logical tab order. Motion: respect prefers-reduced-motion · no auto-play. Screen Reader: semantic HTML · ARIA labels · announce changes.</p>
      </>)}
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
  if (file.startsWith("CyberOrigin_15")) return <DataQuestMarketplace />;
  if (file.startsWith("CyberOrigin_16")) return <DataQuestTaskDetailV0 />;
  if (file.startsWith("CyberOrigin_17")) return <DataQuestProfileWallet />;
  if (file.startsWith("CyberOrigin_18")) return <DataQuestEvidenceMap />;
  if (file.startsWith("CyberOrigin_19")) return <DataQuestNamingCleanup />;
  if (file.startsWith("CyberOrigin_20")) return <DataQuestRoleMap />;
  if (file.startsWith("CyberOrigin_21")) return <DataQuestJourneyDetailed />;
  if (file.startsWith("CyberOrigin_22")) return <DataQuestBoundedTasks />;
  if (file.startsWith("CyberOrigin_23")) return <DataQuestPrinciples />;
  if (file.startsWith("CyberOrigin_24")) return <DataQuestScopeMap />;
  if (file.startsWith("CyberOrigin_25")) return <DataQuestLifecycle />;
  if (file.startsWith("CyberOrigin_26")) return <DataQuestStateMachine />;
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
