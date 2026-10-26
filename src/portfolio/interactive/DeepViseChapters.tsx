import { useState } from "react";
import type { ReactNode } from "react";
import "./tokenta-slides.css";
import { DeepViseBlueprint, DeepViseChallenge, DeepViseConcepts, DeepViseDashboardHero } from "./DeepViseRebuilds";

/**
 * Bespoke rebuilds of DeepVise files 02–12, 14, 16–23, 25–32, each
 * transcribed from the ACTUAL image file (files 01, 13, 15, 24 live in
 * ProjectScreens.tsx). CAPTION <-> IMAGE MISMATCHES (data title -> what
 * the image actually shows; captions/data were NOT rewritten):
 *  02 Macro Context -> four-panel product flow (Fleet overview / Asset
 *     diagnosis EXC-2091 / Federated learning job / Portfolio review)
 *  03 Dual-Port TOC -> project process board (Frame/Design/Model/Build/
 *     Validate, WeBank FinTech Competition, Solo Product Designer)
 *  04 Industrial Credit Demand -> "Machine health becomes a trust
 *     signal" 5-step boundary diagram (health score 83/100, v1.4.2)
 *  05 Policy Drivers -> 75-second demo-prototype video frame (Factory
 *     Command Center overview, 92.4% / 94.6%)
 *  06 Smart Manufacturing x FinTech Map -> annotated press photo
 *     ("A press does not fail as a dashboard event", 6 sensor points)
 *  07 Enterprise vs Lender Pain Points -> "07. Factory Pain System —
 *     The failure loop" (factory side only)
 *  08 Equipment Management Deep Dive -> "08. Lender Visibility Gap"
 *     dual timeline (periodic reviews vs continuous events)
 *  09 Credit Wind-Control -> "09. The Privacy Barrier" (central data
 *     lake rejected vs privacy-preserving federation)
 *  10 System Overview Dual-Loop -> "10. Stakeholder Ecosystem" (five
 *     accountable roles around governed derived signals)
 *  11 FATE Infrastructure -> "11. Decision-Focused User Profiles"
 *  12 Solution Module Map -> "12. Research and Evidence Synthesis"
 *  14 Role Selection & Identity Gateway -> Product North Star loop
 *     (Detect/Understand/Act/Learn/Review) — the actual role-selection
 *     screen is file 28 (printed "28. Role and Permission Selection")
 *  16 Dynamic Credit Adjustment -> "16 Information Architecture" sitemap
 *  17 3D Digital Twin -> "17. Factory Critical Task Flow" (MX-2471,
 *     eight states from signal to scheduled work)
 *  18 Health Science Cover -> Lender Critical Task Flow (Enterprise A,
 *     CNY 85M portfolio header — the ¥85M / 4.85% / 12 figures live here)
 *  19 ANSYS FEM & Vibration Ingest -> "19 Data-to-Credit Decision Flow"
 *  20 Feature Extraction Pipeline -> "20. Scope and Build Timeline"
 *  21 WNSES & Spectral Kurtosis Derivation -> ACT IV Risk Register
 *     (no formulas printed; spectral features appear on file 32)
 *  22 Adaptive Soft Thresholding -> "22 Early Sketches and Decision
 *     Models" (12 panels, 2 explicitly Rejected)
 *  23 Transient Impulse & Weight Optimization -> "23. Low-Fidelity
 *     Wireframe System" (4 domains x screens/states)
 *  25 Offline vs Online Training -> brand/visual system board ("From
 *     purple concept to product credibility", Compressor Train 7A)
 *  26 FedAvg vs FedMA -> full design-system board (foundations, app
 *     shell, data display, decision components, states/accessibility)
 *  27 BBP-MAP Cost Matrix -> marketing hero with dual workspace entry
 *     (Asset health 87/100, Press Line 1)
 *  28 Edge Node & IoT Topology -> "28. Role and Permission Selection"
 *  29 Multi-IoT I/O Pair Sharing -> Factory Command Center dashboard
 *     ("3 assets need attention", P-01-042 health 22, 15.7h exposure)
 *  30 Automated Maintenance Generator -> Multi-Factory Asset Overview
 *     (federation participation, Factories A–E)
 *  31 Data Collaboration & Privacy Cover -> Machine Health detail for
 *     P-01-042 (Health 72/100 Warning — same machine as file 01)
 *  32 Service Blueprint & ABS Architecture -> Sensor Diagnostics
 *     (5 normalized tracks, spectrogram, derived-feature thresholds:
 *     Spectral Kurtosis 2.76 > 2.00 etc.)
 * Design language as printed: ink #0B1726, navy #102A43, canvas
 * #F6F8FB, cyan #12C7D4, blue #2F80ED, violet #6C5CE7, warning
 * #D99A2B, critical #D95C5C. Inter + IBM Plex Mono.
 */

function Dv({ n, title, sub, children, label, dark }: { n: string; title: string; sub?: string; children: React.ReactNode; label: string; dark?: boolean }) {
  return <div className={`tks${dark ? " tks--dark" : ""}`} style={dark ? { background: "#0B1726" } : { background: "#F6F8FB" }} role="region" aria-label={label}>
    <div className="tks-head"><span><b>◆ DeepVise</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 32</span><span className="tks-brand" style={{ fontSize: 12 }}>DEEPVISE</span></div>
    <h3 style={{ fontSize: 42 }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
    <div className="tks-foot"><span>DeepVise — Federated Enterprise Health Intelligence</span><span>Transcribed from the printed slide</span></div>
  </div>;
}
function Chips({ items, value, onPick }: { items: string[]; value: number; onPick: (i: number) => void }) {
  return <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group">{items.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === value} onClick={() => onPick(i)}>{s}</button>)}</div>;
}
const TEAL = "#0e7c86";

/* ---------------- 02 — Four-panel product flow ---------------- */
const FLOW02 = [
  { name: "Fleet overview", foot: "Maintain overview", body: "All assets · Live. Assets 1,248 · Operating 1,102 (88%) · Attention 37 (3%) · Critical 9 (1%). Asset health by category — Trucks 612 · Excavators 328 · Loaders 210 · Generators 98. Attention queue (37): TRK-1047 Truck Engine misfire High 2m ago · EXC-2091 Excavator Hydraulic pressure drop High 4m ago · LD-3083 Loader Brake wear high Medium 6m ago · GEN-4022 Generator High exhaust temp High 8m ago · TRK-1120 Truck Battery voltage low Medium 10m ago." },
  { name: "Diagnose anomalies", foot: "Diagnose anomalies", body: "Asset diagnosis — EXC-2091 · Excavator. Anomaly detected since 14:32 today. Hydraulic pressure (bar) rising out of the expected range toward 15:20 · Pump vibration (mm/s) crossing its threshold to ~13 · Oil temperature (°C) climbing past 90. Evidence (4 items): Vibration spike 14:56:12 · 2.1 MB · High — Pressure above range 14:55:48 · 1.8 MB · High — Oil temp rising 14:54:31 · 1.2 MB · Medium — Maintenance history, last 30 days · PDF · Info." },
  { name: "Learn without pooling raw data", foot: "Learn without pooling raw data", body: "Federated learning job — Running. Remaining 01:42 · Round 12 of 30. Global model progress 40% — Rounds 12/30 · Participants 3/3 · Convergence 0.62 ↓ (0.08) · Updates 36. Participant progress: P1 Party A — Auto Parts Co. · 2.1M records · Synced 2m ago · Contribution 34% · P2 Party B — Industrial Motors Ltd. · 1.7M records · Synced 3m ago · 33% · P3 Party C — Equip Finance Inc. · 1.9M records · Synced 2m ago · 33%. Model performance (validation): global model rises above the dashed baseline across rounds 0–30. No raw data shared. Only model updates are exchanged." },
  { name: "Review credit conditions with evidence", foot: "Review credit conditions with evidence", body: "Portfolio review — as of May 15, 2025. TRK-1047 Truck · Exposure 125,000 · PD (12M) 2.35% · Change ↓ 0.28pp · Approve (High confidence, 3 evidences) — EXC-2091 Excavator · 240,000 · 4.12% · ↑ 0.85pp · Review (Medium confidence, 2 evidences) — LD-3083 Loader · 180,000 · 2.08% · ↓ 0.12pp · Approve — GEN-4022 Generator · 95,000 · 3.01% · ↑ 0.30pp · Review — TRK-1120 Truck · 110,000 · 1.76% · ↓ 0.15pp · Approve. EXC-2091 — Review explained: Key drivers — Payment behavior +0.60pp · Utilization trend +0.35pp · Maintenance risk +0.28pp · Model mean 1.20% · Total 4.12%. Evidences (2): Maintenance anomaly May 15, 2025 14:56 · High — Utilization spike May 15, 2025 14:32 · Medium. Model Fleet Risk v2.3 · Method SHAP · Run ID R-20250515-07." },
];
export function DeepViseProductFlow() {
  const [p, setP] = useState(1);
  const icons = ["🛰", "🔍", "🧠", "📋"];
  return <Dv n="02" title="Four connected panels — one product flow" sub="Fleet overview → asset diagnosis → federated learning → portfolio review, linked left to right on the printed slide." label="DeepVise product flow — interactive rebuild of DeepVise_02" dark>
    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", margin: "0 30px 8px" }}><span style={{ flex: 1, height: 2, background: "#12C7D4" }} />{FLOW02.map((x, i) => <span key={x.name} style={{ display: "contents" }}><span style={{ width: 9, height: 9, borderRadius: "50%", background: "#12C7D4", flex: "none", boxShadow: "0 0 0 3px rgba(18,199,212,0.25)" }} />{i < 3 ? <span style={{ flex: 1, height: 2, background: "#12C7D4" }} /> : null}</span>)}</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, alignItems: "start" }}>
      {FLOW02.map((x, i) => <button key={x.name} type="button" onClick={() => setP(i)} aria-pressed={i === p} style={{ textAlign: "left", background: "#0e1c2e", border: `1.5px solid ${i === p ? "#12C7D4" : "#22344d"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
        <b style={{ fontSize: 12, color: "#fff" }}>{x.name}</b>
        <span style={{ display: "block", fontSize: 10, lineHeight: 1.55, color: "#a9bccd", marginTop: 5 }}>{x.body}</span>
        <span style={{ display: "block", borderTop: "1px solid #22344d", marginTop: 7, paddingTop: 5, fontSize: 10, color: "#12C7D4" }}>{icons[i]} {x.foot}</span>
      </button>)}
    </div>
    <p aria-live="polite" style={{ margin: "8px 0 0", fontSize: 11, color: "#8fa5bd" }}>Panel in focus: <b style={{ color: "#fff" }}>{FLOW02[p].name}</b> — all four panels shown together, as printed.</p>
  </Dv>;
}

/* ---------------- 03 — Process board ---------------- */
const STAGES03: Array<[string, string, string, string]> = [
  ["01 Frame", "Define the challenge, directions, market and pain synthesis.", "01 Challenge & Direction — Enable data-driven lending without sharing raw data. Market Context: SME lending is underserved due to limited, siloed data · Lenders face high risk and operational costs · Privacy and compliance limit data sharing. User Pain Points: Incomplete visibility across multiple sources · Manual review is slow and inconsistent · Hard to quantify risk and monitor changes. Challenge Direction: Design a privacy-preserving solution that enables continuous, explainable enterprise health assessment at scale.", "Challenge directions · Market and pain synthesis · Problem statement — Evidence: Original (Deck pp. 2–6)"],
  ["02 Design", "Shape information architecture, two-sided workflows and UI.", "Information Architecture: Home → Assessment → Analytics → Portfolio → Settings. Two-sided Workflows: Enterprise Side ↔ Federated Assessment ↔ Lender Side. Original UI (Deck) beside Reconstructed UI (Prototype).", "Information architecture · Two-sided workflows · Original and reconstructed UI — Evidence: Original (Deck pp. 7–16), Reconstructed (Figma & Prototype)"],
  ["03 Model", "Design health-index logic and federated learning approach.", "Health Index Logic: HI = w₁·S + w₂·P + w₃·B + w₄·C + w₅·E — S Structure · P Performance · B Behavior · C Compliance · E External. FedAvg vs FedMA Research: FedAvg — Medium heterogeneity · Accuracy 0.78 · Slower · Lower comm. cost | FedMA — High heterogeneity · 0.86 · Faster · Slightly higher. FATE Workflow (Reconstructed): Data Holder A → FATE Party A ⇄ FATE Party B ← Data Holder B, over Model Training (Federated) and Secure Aggregation (No Raw Data). Plus ANSYS Simulation (Structural Reliability), scale 0 Min – 1,000 Max.", "Health-index design · FedAvg/FedMA research · FATE workflow & ANSYS evidence — Evidence: Original (Deck pp. 17–25), Reconstructed (ANSYS & Workflow)"],
  ["04 Build", "Implement the web prototype with key screens and flows.", "Prototype Overview as printed: Overall Health Index 68.4 · Medium · Trend (30 Days) +6.7 Better · Enterprises 128 · Assessments 256. Health Index Trend May 1 – May 29. Recent Assessments: Global Tech Co. 72.1 +8.2 May 29 Completed · Sunrise Manufacturing 65.3 +3.1 May 29 Completed · Green Energy Ltd. 58.7 −1.3 May 28 Completed · Pacific Retail Inc. 41.2 −4.7 May 28 Completed. Nav: Overview · Assessment · Analytics · Portfolio · Alerts · Reports · Settings.", "Web prototype (React) · Navigation and key screens · Role entry: Enterprise & Lender — Evidence: Reconstructed (Prototype)"],
  ["05 Validate", "Validate with demo, document limits and audit publications.", "Demo Video (Reconstructed) 0:00 / 2:48. Technical Limitations: POC with simulated and sample data · Model accuracy depends on data quality · Not a production ML system · Performance not benchmarked at scale. Publication Evidence Audit: Deck (pp. 1–36) Original Slide deck Verified · Prototype Reconstructed Screens & flows Verified · ANSYS Reconstructed Simulation result Verified · FATE Workflow Reconstructed Workflow diagram Verified · Code Snippets Original Key implementation Verified.", "Demo video · Technical limitations · Publication evidence audit — Evidence: Original & Reconstructed (pp. 26–36)"],
];
export function DeepViseProcessBoard() {
  const [s, setS] = useState(0);
  return <Dv n="03" title="DeepVise — Federated Enterprise Health Intelligence" sub="Solo Product Designer and Developer. Product strategy | UX and UI | front-end prototype | simulation and model workflow | technical storytelling. An end-to-end proof-of-concept that helps lenders assess enterprise health without accessing raw data." label="DeepVise process board — interactive rebuild of DeepVise_03">
    <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg,#12C7D4,#2F80ED,#6C5CE7)", marginBottom: 10 }} aria-hidden="true" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 218px", gap: 12, alignItems: "start" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7 }}>
        {STAGES03.map(([t, brief, detail, deliv], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "8px 9px", cursor: "pointer", font: "inherit" }}>
          <b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}</b>
          <span style={{ display: "block", color: "#55606e", fontSize: 9.8, lineHeight: 1.45, margin: "3px 0 6px" }}>{brief}</span>
          <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#33465e" }}>{detail}</span>
          <span style={{ display: "block", borderTop: "1px solid #e6ecf2", marginTop: 6, paddingTop: 4, fontSize: 8.8, color: "#2F80ED", fontWeight: 700 }}>Deliverables + Evidence — {deliv}</span>
        </button>)}
      </div>
      <div style={{ background: "#102A43", color: "#dbe5f0", borderRadius: 11, padding: "11px 13px" }}>
        <p style={{ margin: 0, fontSize: 10.5, fontWeight: 800, letterSpacing: "0.1em", color: "#12C7D4" }}>🛡 SCOPE &amp; VERIFIED OUTCOME</p>
        <p style={{ fontSize: 11, lineHeight: 1.55, margin: "7px 0 0" }}><b style={{ color: "#fff" }}>✓ Verified Outcome</b> — A fully functional front-end prototype with model workflow evidence and publication audit.</p>
        <p style={{ fontSize: 11, lineHeight: 1.55, margin: "6px 0 0" }}><b style={{ color: "#fff" }}>Scope Boundary:</b> This project is a competition submission. It is a proof-of-concept and not a production system.</p>
        <p style={{ fontSize: 11, lineHeight: 1.55, margin: "6px 0 0" }}><b style={{ color: "#fff" }}>Out of Scope:</b> No access to real lender systems · No production deployment · No claims of autonomous lending.</p>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, marginTop: 11, background: "#0B1726", color: "#c6d2e0", borderRadius: 10, padding: "8px 13px", fontSize: 9.8 }}>
      {[["Context", "WeBank FinTech Competition"], ["Role", "Solo Product Designer and Developer"], ["Date", "2024"], ["Competition", "WeBank FinTech Competition (Competition Entry)"], ["Evidence status", "All claims supported by original deck pages 1–36 or reconstructed artifacts"]].map(([k, v]) => <span key={k}><b style={{ color: "#fff", display: "block", fontSize: 10.5 }}>{k}</b>{v}</span>)}
    </div>
  </Dv>;
}

/* ---------------- 04 — Trust signal ---------------- */
const TRUST04: Array<[string, string, string]> = [
  ["1 · Machine", "Local signals (raw telemetry)", "vibration · motor and bearing temperature · load · cycle count · spectral indicators."],
  ["2 · Local boundary", "Raw data stays inside", "Operational outputs — health score 83 / 100 · fault risk Moderate · evidence window 2025-05-08 to 2025-05-14 · maintenance recommendation: Inspect bearing. Raw telemetry is contained within the factory boundary."],
  ["3 · Federated model", "Aggregated at coordinator", "Federated result — Versioned global health model returned to participants. Model version v1.4.2 · Trained on 2025-05-07 · Participants 23 factories."],
  ["4 · Permissioned evidence", "PROPOSED", "Finance result — consent Granted · freshness 14 hours · confidence High · reason codes MAINT, TEMP, LOAD. Minimal, derived signal only. No raw telemetry is shared."],
  ["5 · Human review", "Credit reviewer", "Decision result — approve: Policy recommendation approved · modify: Policy recommendation modified · reject: Policy recommendation rejected. Action is logged — 2025-05-08 11:42 · Reviewer ID: CR-1027."],
];
export function DeepViseTrustSignal() {
  const [s, setS] = useState(1);
  const [decision, setDecision] = useState<string | null>(null);
  const icons = ["🏭", "🔒", "🧠", "📤", "👤"];
  return <Dv n="04" title="Machine health becomes a trust signal." sub="Raw telemetry stays inside the factory. Protected model updates improve a shared health model. Only permissioned, minimal evidence reaches credit review." label="DeepVise trust signal — interactive rebuild of DeepVise_04">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "stretch" }}>
      {TRUST04.map(([t, sub, body], i) => <div key={t} style={i === 1 ? { border: "2px dashed #0e7c86", borderRadius: 13, padding: 5, background: "rgba(14,124,134,0.05)" } : { padding: 5 }}>
        <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ width: "100%", height: "100%", textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit" }}>
          <span style={{ fontSize: 17 }}>{icons[i]}</span>
          <b style={{ display: "block", fontSize: 12, margin: "4px 0 2px", color: "#0B1726" }}>{t}</b>
          <span style={{ display: "block", color: "#0e7c86", fontWeight: 700, fontSize: 10.5 }}>{sub}</span>
          <span style={{ display: "block", color: "#44536a", fontSize: 10.3, lineHeight: 1.5, marginTop: 4 }}>{body}</span>
          {i === 1 ? <span style={{ display: "block", marginTop: 5, fontSize: 9.5, fontWeight: 800, color: "#0e7c86" }}>LOCAL BOUNDARY — raw data stays inside</span> : null}
          {i === 3 ? <span style={{ display: "inline-block", marginTop: 5, background: "#efeaff", color: "#6C5CE7", borderRadius: 5, padding: "0 7px", fontWeight: 800, fontSize: 9.5 }}>PROPOSED</span> : null}
          {i < 4 ? <span aria-hidden="true" style={{ float: "right", color: "#7c93ad" }}>{i === 1 || i === 2 ? "🔒 →" : "→"}</span> : null}
        </button>
      </div>)}
    </div>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", marginTop: 10 }} aria-live="polite">
      <span style={{ fontSize: 11.5, color: "#55606e" }}>Human review decision (panel 5):</span>
      {["approve", "modify", "reject"].map((d) => <button key={d} type="button" className="tks-chip" aria-pressed={decision === d} onClick={() => setDecision(d)}>{d}</button>)}
      <span style={{ fontSize: 11.5 }}>{decision ? `Logged: Policy recommendation ${decision === "approve" ? "approved" : decision === "modify" ? "modified" : "rejected"} — 2025-05-08 11:42 · Reviewer ID: CR-1027.` : "Dashed return arrow along the bottom of the original returns the decision & feedback log to the machine."}</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
      <p style={{ color: "#555", margin: 0, fontSize: 11.3, lineHeight: 1.55 }}><b>Source and evidence boundary:</b> Original deck pages 11 and 32–34 support the two-sided loop and privacy claim. Official FATE documentation supports protected multi-party training concepts; the finance signal layer is a product reconstruction and <b>partly proposed</b>.</p>
      <div style={{ border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 11px", fontSize: 11, background: "#fff" }}>
        <b>Legend</b> — <span style={{ color: "#0e7c86", fontWeight: 700 }}>teal</span> Local operational outputs, stay inside boundary · <span style={{ color: "#2F80ED", fontWeight: 700 }}>dashed blue</span> Protected model updates, encrypted and aggregated · <span style={{ color: "#6C5CE7", fontWeight: 700 }}>purple</span> Permissioned derived signal, minimal evidence with consent · <span style={{ fontWeight: 700 }}>dotted</span> Decision &amp; feedback log, governance record.
        <p style={{ margin: "5px 0 0", color: "#7c8798" }}>This diagram shows a conceptual architecture for illustration. No autonomous credit decisions or rate adjustments are made by any model.</p>
      </div>
    </div>
  </Dv>;
}

/* ---------------- 05 — Demo prototype video frame ---------------- */
const CHAPTERS05: Array<[string, string, string]> = [
  ["Monitor", "00:00 – 00:18", "Overview — Real-time operational and portfolio overview. Operations: Equipment online 92.4% · Target ≥ 90%."],
  ["Train", "00:18 – 00:36", "Federated jobs in progress 2 · Total 8. Global_Model_042 — In progress · Round 3 of 10 · 60% · Updated 2 min ago. Anomaly_Model_11 — In progress · Round 1 of 5 · 20% · Updated 5 min ago. Quality_Model_08 — ✓ Completed · Yesterday 14:32."],
  ["Investigate", "00:36 – 00:53", "Anomalies: Active 1 · Total 7. Recent anomalies — Press_03 High severity · Vibration spike 09:42 · Conveyor_07 Warning · Temp. deviation 08:11 · Pump_02 Info · Pressure fluctuation 07:52. Machine health panel: Press_03 · Anomaly · Severity High · Score 87 · Investigate →. Legend: Normal · Warning · Anomaly · Offline."],
  ["Review", "00:53 – 01:15", "Lender reviews pending 3 · Overdue 1. Lender review pipeline — Riverton Expansion · Serial RVT-EXP-2024-07 · Pending · Due May 21, 2024 · Equipment Upgrade · Serial EQUIP-UP-2024-15 · Pending · Due May 22, 2024 · Working Capital · Serial WC-2024-226 · Overdue · Due May 18, 2024. Model accuracy (global average) 94.6% · Target ≥ 90%."],
];
export function DeepViseDemoVideo() {
  const [sec, setSec] = useState(0);
  const idx = sec < 18 ? 0 : sec < 36 ? 1 : sec < 53 ? 2 : 3;
  const fmt = (v: number) => `0:${String(v).padStart(2, "0")}`;
  const chIcons = ["🖥", "🧠", "🔍", "📋"];
  return <Dv n="05" title="Watch the 75-second prototype walkthrough" sub="DeepVise | Demo prototype — Evidence: Competition prototype with reconstructed portfolio UI; demo data. Duration: 01:15." label="DeepVise demo prototype walkthrough — interactive rebuild of DeepVise_05" dark>
    <div style={{ border: "1px solid #22344d", borderRadius: 13, overflow: "hidden", background: "#0e1c2e" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 13px", borderBottom: "1px solid #22344d", fontSize: 11, color: "#c6d2e0" }}><span><b style={{ color: "#fff" }}>DeepVise</b> | Demo prototype</span><span style={{ color: "#8fa5bd" }}>Duration 01:15</span></div>
      <div style={{ display: "grid", gridTemplateColumns: "128px 1fr", minHeight: 168 }}>
        <div style={{ borderRight: "1px solid #22344d", padding: "9px 10px", fontSize: 10.5, color: "#9fb2c8", display: "grid", gap: 5, alignContent: "start" }}>
          <b style={{ color: "#fff", fontSize: 11 }}>Factory Command Center</b>
          {["Overview", "Assets", "Monitoring", "Alerts", "Diagnostics", "Forecasting", "Workflows", "Reports", "Settings"].map((x, i) => <span key={x} style={i === 0 ? { color: "#12C7D4", fontWeight: 700 } : undefined}>{x}</span>)}
          <span style={{ borderTop: "1px solid #22344d", paddingTop: 6, marginTop: 2 }}>Signed in<br /><b style={{ color: "#e8eef5" }}>Plant Manager</b><br />Riverton Plant</span>
        </div>
        <div style={{ padding: "10px 13px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6 }}>
            {[["Equipment online", "92.4%", "Target ≥ 90%"], ["Federated jobs", "2 running", "of 8 total"], ["Anomalies", "1 active", "of 7 total"], ["Lender reviews", "3 pending", "1 overdue"], ["Model accuracy", "94.6%", "Target ≥ 90%"]].map(([k, v, s2]) => <div key={k} style={{ border: "1px solid #22344d", borderRadius: 8, padding: "5px 7px" }}><span style={{ color: "#8fa5bd", fontSize: 9.3 }}>{k}</span><br /><b style={{ color: "#fff", fontSize: 13 }}>{v}</b><br /><span style={{ color: "#8fa5bd", fontSize: 9.3 }}>{s2}</span></div>)}
          </div>
          <p aria-live="polite" style={{ margin: "9px 0 0", fontSize: 11.3, lineHeight: 1.55, color: "#dbe5f0" }}><b style={{ color: "#12C7D4" }}>{CHAPTERS05[idx][0]} {CHAPTERS05[idx][1]}</b> — {CHAPTERS05[idx][2]}</p>
          <span aria-hidden="true" style={{ position: "absolute", right: 14, bottom: 10, width: 42, height: 42, borderRadius: "50%", background: "rgba(18,199,212,0.16)", border: "1.5px solid #12C7D4", color: "#12C7D4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>▶</span>
          <span style={{ position: "absolute", right: 62, bottom: 18, background: "#102A43", border: "1px solid #2c4258", borderRadius: 5, padding: "1px 7px", fontSize: 10, color: "#e8eef5" }}>{fmt(sec)} / 01:15</span>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #22344d", padding: "8px 13px" }}>
        <label style={{ display: "block", fontSize: 11, color: "#9fb2c8" }}>Playhead {fmt(sec)} / 1:15 — scrub to a chapter
          <input type="range" min={0} max={75} value={sec} onChange={(e) => setSec(Number(e.target.value))} aria-label="Demo video playhead in seconds" style={{ width: "100%" }} /></label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, marginTop: 6 }}>
          {CHAPTERS05.map(([t, r], i) => <button key={t} type="button" onClick={() => setSec([0, 18, 36, 53][i])} aria-pressed={i === idx} style={{ textAlign: "left", background: i === idx ? "#132a42" : "transparent", border: `1px solid ${i === idx ? "#12C7D4" : "#22344d"}`, borderRadius: 8, padding: "6px 9px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}><b style={{ fontSize: 11.5 }}>{chIcons[i]} {t}</b><br /><span style={{ color: "#8fa5bd", fontSize: 10 }}>{r}</span></button>)}
        </div>
      </div>
    </div>
  </Dv>;
}

/* ---------------- 06 — Press failure ---------------- */
const PRESS06: Array<[string, string]> = [
  ["1 · Motor", "Motor temperature · Vibration or acceleration"],
  ["2 · Bearing", "Bearing temperature · Vibration or acceleration"],
  ["3 · Ram", "Load or pressure · Vibration or acceleration"],
  ["4 · Die", "Load or pressure · Cycle count"],
  ["5 · Control cabinet", "Cycle count · Frequency-domain features"],
  ["6 · Line output", "Cycle count · Frequency-domain features"],
];
const CHAIN06: Array<[string, string, string]> = [
  ["Anomaly", "Sensor detects abnormal vibration or temperature outside expected range.", "Evidence: sensor signal"],
  ["Degraded condition", "Component wear or misalignment increases stress and variability.", "Evidence: trending signals"],
  ["Unplanned stop", "Press stops to prevent damage or after fault occurs.", "Evidence: event logs"],
  ["Production impact", "Missed targets, rework, overtime and delivery risk increase.", "Evidence: downtime & output"],
];
export function DeepVisePressFailure() {
  const [pt, setPt] = useState(1);
  return <Dv n="06" title="A press does not fail as a dashboard event." sub="It fails inside a production system with people, schedules and physical consequences. Sensors on this press: Vibration or acceleration · Motor temperature · Bearing temperature · Load or pressure · Cycle count · Frequency-domain features. Operational actors: Line operator · Maintenance engineer · Local edge node." label="DeepVise press failure — interactive rebuild of DeepVise_06">
    <p className="tks-kicker" style={{ marginTop: 0 }}>One industrial press, six sensor callouts (the photograph itself is represented structurally)</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
      {PRESS06.map(([t, signals], i) => <button key={t} type="button" onClick={() => setPt(i)} aria-pressed={i === pt} style={{ textAlign: "left", background: "#fff7f0", border: `1.5px solid ${i === pt ? "#D99A2B" : "#e8d9c4"}`, borderRadius: 10, padding: "8px 11px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 12, color: "#0B1726" }}>⌖ {t}</b>
        <span style={{ display: "block", fontSize: 11, color: "#44536a", marginTop: 2 }}>{signals}</span>
      </button>)}
    </div>
    <p style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 9, padding: "7px 12px", margin: "8px 0 0", fontSize: 11.5 }} aria-live="polite"><b style={{ color: "#fff" }}>Local edge node</b> — Collects and processes signals on-site. Data path stops here. <span style={{ color: "#8fa5bd" }}>All six points feed the edge node on the press bed.</span></p>
    <p className="tks-kicker" style={{ marginTop: 12 }}>What happened next — consequence chain</p>
    <div style={{ display: "flex", gap: 7, flexWrap: "nowrap", alignItems: "stretch" }}>{CHAIN06.map(([t, b, e], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow" style={{ alignSelf: "center" }}>→</span>}<div className="tks-card" style={{ flex: "1 1 0" }}><b style={{ fontSize: 12.5 }}>{t}</b><p style={{ color: "#555", margin: "4px 0 0", fontSize: 11.5, lineHeight: 1.5 }}>{b}</p><p className="tks-kicker" style={{ margin: "6px 0 0" }}>{e}</p></div></span>)}</div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source and evidence boundary: Challenge-direction text explicitly supports temperature, acceleration, velocity and frequency-domain signals. Original deck pages 19, 28–30 support the equipment, edge-node and maintenance context.</p>
  </Dv>;
}

/* ---------------- 07 — Failure loop ---------------- */
const LOOP07: Array<[string, string, string]> = [
  ["1 · Siloed data", "Data silos across lines and sites", "Data silos"],
  ["2 · Weak generalization", "Models don't generalize across assets and contexts", "Subjective or inconsistent assessment"],
  ["3 · Late anomaly discovery", "Delayed fault warning; signs are found too late", "Delayed fault warning"],
  ["4 · Rushed response", "Limited time to validate; fixes are reactive", ""],
  ["5 · Unplanned downtime", "Unexpected stops disrupt production and delivery", "High maintenance cost"],
  ["6 · Incomplete learning", "Lessons stay local; causes are not captured", "Subjective or inconsistent assessment"],
];
const IMPL07: Array<[string, string]> = [
  ["Cross-factory learning without raw-data pooling", "Share insights and model improvements securely while keeping factory data local and compliant."],
  ["Evidence-led anomaly review", "Surface early, explainable signals with context and confidence to reduce subjectivity."],
  ["Actionable maintenance and feedback after work completion", "Guide the right action, capture outcomes, and feed results back to improve future decisions."],
];
export function DeepViseFailureLoop() {
  const [s, setS] = useState(0);
  return <Dv n="07" title="07. Factory Pain System — The failure loop" sub="When evidence stays fragmented, warnings arrive late and every incident teaches only one factory. Centre of the loop: Reactive maintenance, ringed by Operational loss and Learning loss." label="DeepVise failure loop — interactive rebuild of DeepVise_07">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 258px", gap: 11, alignItems: "start" }}>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, alignItems: "stretch" }}>
          {LOOP07.map(([t, body, tag], j) => <button key={t} type="button" onClick={() => setS(j)} aria-pressed={j === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${j === s ? "#D95C5C" : "#dde4ec"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 4 }}><b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}</b><span aria-hidden="true" style={{ color: "#D95C5C" }}>↻</span></span>
            <span style={{ display: "block", fontSize: 10.5, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{body}</span>
            {tag ? <span style={{ display: "block", marginTop: 5, fontSize: 9.5, fontWeight: 800, color: "#b03a3a" }}>⚠ {tag}</span> : null}
          </button>)}
        </div>
        <div style={{ textAlign: "center", marginTop: 9 }}>
          <span style={{ display: "inline-block", background: "#0B1726", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 12 }}><b>Reactive maintenance</b> <span style={{ color: "#f0a3a3" }}>· Operational loss + Learning loss</span></span>
          <p style={{ margin: "7px 0 0" }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setS((v) => (v + 1) % 6)}>Advance the loop → (after node 6 it returns to Siloed data)</button></p>
        </div>
      </div>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Implications for design</p>
        <div style={{ display: "grid", gap: 7 }}>{IMPL07.map(([t, b]) => <div key={t} className="tks-card"><b style={{ fontSize: 12 }}>{t}</b><p style={{ color: "#555", margin: "4px 0 0", fontSize: 11, lineHeight: 1.5 }}>{b}</p></div>)}</div>
      </div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source: Original deck pages 7–8. Evidence boundary: This pain system reflects qualitative insights from the original deck. No quantitative claims are made. What this means: Reactive maintenance is a system problem. Solving it requires connected data, better evidence, and continuous learning.</p>
  </Dv>;
}

/* ---------------- 08 — Lender visibility gap ---------------- */
const PERIODIC08: Array<[string, string, string]> = [
  ["APR 01, 2024 · Illustrative", "Financial statement", "Q1 2024"],
  ["JUN 30, 2024 · Illustrative", "Collateral record", "Mid-year update"],
  ["SEP 30, 2024 · Illustrative", "Covenant review", "Q3 2024"],
  ["DEC 31, 2024 · Illustrative", "Credit committee", "Q4 2024"],
];
const CONTINUOUS08: Array<[string, string, string]> = [
  ["JUL 10, 2024 · Illustrative", "Health-score decline", "Score 82 → 68 (14% decline)"],
  ["AUG 18, 2024 · Illustrative", "Vibration anomaly", "Severity: Medium · Reason: IMBALANCE"],
  ["OCT 22, 2024 · Illustrative", "Maintenance action", "Bearing replacement · Work order: WO-87421"],
  ["NOV 03, 2024 · Illustrative", "Post-maintenance validation", "Health score 82 · Status: Normal"],
];
export function DeepViseVisibilityGap() {
  const [lane, setLane] = useState(1);
  const [ev, setEv] = useState(1);
  const laneCard = (rows: Array<[string, string, string]>, L: number) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }}>
      {rows.map(([d, t, detail], i) => <button key={d} type="button" onClick={() => { setLane(L); setEv(i); }} aria-pressed={lane === L && i === ev} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${lane === L && i === ev ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 12, color: "#0B1726" }}>{t}</b>
        <span style={{ display: "block", color: "#7c8798", fontSize: 9.8, margin: "2px 0" }}>{d}</span>
        <span style={{ display: "block", fontSize: 10.8, lineHeight: 1.45, color: "#44536a" }}>{detail}</span>
      </button>)}
    </div>
  );
  return <Dv n="08" title="08. Lender Visibility Gap — Financial reviews are periodic. Productive assets change continuously." sub="DeepVise proposes a fresher evidence layer, not a substitute for underwriting." label="DeepVise lender visibility gap — interactive rebuild of DeepVise_08">
    <p className="tks-kicker" style={{ marginTop: 0 }}>Top: Financial reporting &amp; credit reviews (periodic)</p>
    {laneCard(PERIODIC08, 0)}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.3fr 1fr", gap: 7, marginTop: 6 }}>
      <span /><span />
      <span style={{ background: "repeating-linear-gradient(45deg,#fdf3e3,#fdf3e3 9px,#fbeed2 9px,#fbeed2 18px)", border: "1.5px dashed #D99A2B", borderRadius: 8, padding: "5px 9px", fontSize: 10.3, color: "#7a5410" }}><b>Blind interval</b> — between the Q3 covenant review and the Dec 31 credit committee, events between reviews may not be visible in time.</span>
      <span />
    </div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Bottom: Machine condition &amp; maintenance events (continuous)</p>
    {laneCard(CONTINUOUS08, 1)}
    <p style={{ background: "#eef6ff", border: "1px solid #b9d4f2", borderRadius: 10, padding: "8px 12px", margin: "9px 0 0", fontSize: 12 }} aria-live="polite"><b>Bridge signal: Permissioned summary</b> — Timestamp (UTC) 2024-10-22 14:32 · Confidence 0.76 · Trend Improving ↗ · Reason Codes IMBALANCE, WEAR. <span style={{ color: "#55606e" }}>Selected: {lane === 0 ? PERIODIC08[ev][1] : CONTINUOUS08[ev][1]} — {lane === 0 ? PERIODIC08[ev][2] : CONTINUOUS08[ev][2]}.</span></p>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Policy note</p><b>Asset health is one input, not a credit decision.</b>
      <p style={{ margin: "5px 0 0" }}>Credit decisions require full underwriting, including financials, cash flow, collateral, management, and industry context. Operational signals provide timelier insight to inform monitoring, dialogue, and risk assessment. Permissioned summaries share only what is authorized, when authorized.</p></div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source &amp; evidence boundary: Original deck pages 4, 7, 9 and 32–34 support the manufacturing-credit visibility problem. The exact timeline is an explanatory reconstruction; it is not a measured borrower history. All dates are illustrative (not borrower specific).</p>
  </Dv>;
}

/* ---------------- 09 — Privacy barrier ---------------- */
const STEPS09: Array<[string, string, string]> = [
  ["1 · Raw data stays local.", "All machine telemetry and feature stores remain inside each factory boundary.", "Evidence: Data never leaves the local namespace."],
  ["2 · Protected updates travel.", "Only protected model updates (no raw data) cross the boundary to the aggregation service.", "Evidence: Updates are generated from local training."],
  ["3 · Global model returns.", "The aggregated global model is returned to every factory for local use.", "Evidence: No raw data is returned."],
  ["4 · Access is logged.", "All federation actions are authenticated and logged with verifiable records.", "Evidence: Audit trails support accountability."],
];
export function DeepVisePrivacyBarrier() {
  const [s, setS] = useState(0);
  const factoryCol = (name: string, codes: string) => (
    <div style={{ background: "#fff", border: "1px solid #b9d4f2", borderRadius: 9, padding: "6px 9px", fontSize: 10.5 }}>
      <b>{name}</b><br />
      <span style={{ color: "#7c8798" }}>feature schema f1 f2 f3 … fn</span><br />
      🛢 Local feature store<br /><span style={{ color: "#7c8798" }}>{codes}</span><br />
      ⚙ Local training → 🔒 Protected update
    </div>
  );
  return <Dv n="09" title="09. The Privacy Barrier" sub="The product could not depend on a new central data lake. Evidence (top-right, as printed): Original deck pages 25–29 explain local training and aggregation. Official FATE documentation supports multi-party training without sharing actual data." label="DeepVise privacy barrier — interactive rebuild of DeepVise_09">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: 11, alignItems: "stretch" }}>
      <div style={{ background: "#fdf1f1", border: "1.5px solid #e3b3b3", borderRadius: 12, padding: "11px 13px" }}>
        <p style={{ margin: 0, fontWeight: 800, fontSize: 12.5, color: "#b3352c" }}>✕ Invalid approach: Centralized Data Lake</p>
        <p style={{ margin: "6px 0 0", fontSize: 11.3, lineHeight: 1.55, color: "#5a4a4a" }}><b>This path was rejected. Raw data cannot leave each factory.</b> Factory A, Factory B and Factory C — each with an identical feature schema (f1 f2 f3 … fn) and a local feature store (A-001… / B-001… / C-001…) — would all feed one Central Data Lake of raw machine telemetry. <b>Not allowed</b> — a red lock marks raw data wherever it appears.</p>
      </div>
      <div style={{ background: "#eef6ff", border: "1.5px solid #b9d4f2", borderRadius: 12, padding: "11px 13px" }}>
        <p style={{ margin: 0, fontWeight: 800, fontSize: 12.5, color: TEAL }}>✓ Proposed approach: Privacy-Preserving Federation — only protected updates travel</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, margin: "8px 0" }}>
          {factoryCol("Factory A", "A-001 A-002 … A-N")}
          {factoryCol("Factory B", "B-001 B-002 … B-N")}
          {factoryCol("Factory C", "C-001 C-002 … C-N")}
        </div>
        <p style={{ margin: 0, fontSize: 11.3, lineHeight: 1.55, color: "#44536a" }}>Protected updates (no raw data) → <b>Aggregation Service</b> (secure aggregation of updates) → <b>Global Model</b>, returned to all factories — model return carries no raw data on either flank.</p>
      </div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>How it works</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
      {STEPS09.map(([t, body, ev2], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 11.8 }}>{t}</b>
        <span style={{ display: "block", fontSize: 10.5, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{body}</span>
        <span style={{ display: "block", marginTop: 5, fontSize: 9.5, fontWeight: 700, color: "#0e7c86" }}>{ev2}</span>
      </button>)}
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Legend (does not rely on color alone): dashed = Boundary · cylinder = Local feature store · gear = Local training · lock = Protected content (encrypted/secured) · red lock = Raw data (not allowed to leave) · teal dashed = Protected update flow (to aggregation) · blue dashed = Model return flow (to factories).</p>
  </Dv>;
}

/* ---------------- 10 — Stakeholder ecosystem ---------------- */
const ROLES10: Array<[string, string, string, string, string]> = [
  ["01 · Operations", "Fleet condition -> prioritize production risk", "Derived asset health, utilization, alerts, production impact", "Prioritize production actions and allocate capacity", "Protect production plans · Protect asset locations · Limit visibility to need-to-know"],
  ["02 · Maintenance", "Anomaly evidence -> inspect, schedule and close work", "Anomaly details, asset context, recommendations", "Create work orders, schedule resources, close and report", "Protect technician identities · Protect detailed failure notes · Retain only as needed"],
  ["03 · Lender risk", "Signal plus financial context -> review terms under policy", "Derived signals, financial statements, transaction summary, policy context", "Approve, decline or change terms and conditions under policy", "Never receive raw sensor data · Limit to derived signals and financial context · Protect borrower confidentiality"],
  ["04 · Enterprise finance", "Permission and context -> release or revoke a derived signal", "Business context, contracts, covenants, policy, permissions", "Release or revoke derived signals, update permissions", "Protect financial data and terms · Control signal release scope · Protect covenant details"],
  ["05 · Data steward", "Membership, consent and provenance -> approve access and audit", "Membership status, consent records, lineage and provenance access requests", "Approve or deny access, define scopes, enforce policies, audit usage", "Protect membership data · Enforce consent and purpose · Ensure lineage and auditability"],
];
const SUCCESS10: Array<[string, string]> = [
  ["Clear accountability", "Each role has defined inputs, a unique decision and measurable outcomes."],
  ["Right evidence, right time", "Roles receive relevant, high-quality evidence they are authorized to use."],
  ["Governed by design", "Permission, consent and provenance control every flow and decision."],
  ["Policy-aligned outcomes", "Decisions are made within policy and recorded for oversight."],
  ["Measurable impact", "Improved uptime, lower risk, faster terms and stronger compliance."],
];
export function DeepViseStakeholders() {
  const [r, setR] = useState(2);
  return <Dv n="10" title="10. Stakeholder Ecosystem — One system, two operating realities, five accountable roles." sub="DeepVise turns trusted industrial data into governed derived signals used by operations and finance inside the factory and by lenders under policy. Operating realities: Factory (internal) — Run operations and maintain assets · Lender (external) — Assess risk and set terms under policy." label="DeepVise stakeholder ecosystem — interactive rebuild of DeepVise_10">
    <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 11, padding: "9px 14px", textAlign: "center", marginBottom: 10 }}>
      <b style={{ color: "#fff", fontSize: 13.5 }}>DeepVise</b> <span style={{ color: "#12C7D4", fontWeight: 700 }}>— Governed derived signals and context</span>
      <span style={{ display: "block", fontSize: 11, color: "#9fb2c8", marginTop: 2 }}>Ingest &amp; Normalize · Derive &amp; Validate · Govern &amp; Audit — every role below connects to this hub.</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
      {ROLES10.map(([t, flow, evIn, dec, priv], i) => <button key={t} type="button" onClick={() => setR(i)} aria-pressed={i === r} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === r ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "9px 11px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 12.3, color: "#0B1726" }}>{t}</b>
        <span style={{ display: "block", fontSize: 10.8, color: "#0e7c86", fontWeight: 700, margin: "2px 0 5px" }}>{flow}</span>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#44536a" }}><b>Evidence in:</b> {evIn}</span>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}><b>Decision out:</b> {dec}</span>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#7a4a12", marginTop: 3 }}><b>Privacy:</b> {priv}</span>
      </button>)}
      <div style={{ background: "#eef6ff", border: "1px solid #b9d4f2", borderRadius: 11, padding: "9px 11px" }}>
        <b style={{ fontSize: 12.3 }}>How to read this</b>
        <p style={{ margin: "4px 0 0", fontSize: 10.8, lineHeight: 1.55, color: "#44536a" }}>One system serves two operating realities — the factory (internal) and the lender (external) — through five accountable roles, each with defined evidence in, a unique decision out, and privacy duties. The privacy strip under each card is that role's protection row from the original.</p>
      </div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Success criteria</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>{SUCCESS10.map(([t, b]) => <div key={t} className="tks-card"><b>✓ {t}</b><p style={{ margin: "4px 0 0", color: "#555" }}>{b}</p></div>)}</div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source &amp; evidence boundary: Original deck pages 11–12 and 32 support the factory/lender split. The role decomposition is a portfolio reconstruction. Production method: Role decomposition based on portfolio experience across industrial operations and financial risk workflows. Last updated May 12, 2024.</p>
  </Dv>;
}

/* ---------------- 11 — Decision-focused profiles ---------------- */
const PROFILES11: Array<{ name: string; color: string; panel: string; trigger: string; q: string; evidence: string; estatus: string; cost: string }> = [
  { name: "Operations manager", color: "#0e7c86", panel: "Line 3 — Production Board (06:00–18:00): Assembly · Welding · Paint · Packaging, with a warning marker at 12:00 on Assembly.", trigger: "Schedule risk detected on critical line.", q: "Which assets threaten today's production plan?", evidence: "Real-time asset status, event logs, utilization and dependencies.", estatus: "Verified", cost: "Unplanned downtime, missed orders and expedited logistics." },
  { name: "Maintenance engineer", color: "#2F80ED", panel: "Handheld vibration meter as printed: VIBRATION 7.8 mm/s · TRENDING UP, over a motor line drawing.", trigger: "Alert from predictive model or anomaly detection.", q: "What changed, why does it matter and what should I inspect first?", evidence: "Condition data, change history, maintenance records, manuals.", estatus: "Verified", cost: "Unnecessary work or missed failure, safety incident and higher repair cost." },
  { name: "Enterprise finance manager", color: "#6C5CE7", panel: "Consent Record — Purpose: Working capital review · Shared with: Bank – Relationship Team · Data categories: Transactions, invoices, payments · Start May 15, 2025 09:00 · End May 22, 2025 09:00 · Status: Active. Time-bound and revocable.", trigger: "Request received to share financial information.", q: "What evidence can be shared, with whom and for how long?", evidence: "Consent records, data lineage, access logs, retention policy.", estatus: "Verified", cost: "Policy breach, regulatory exposure and loss of stakeholder trust." },
  { name: "Credit-risk manager", color: "#D95C5C", panel: "Credit Memo — Obligor ID C-104857 · Observation date May 15, 2025 08:45 · Signal: DSO deterioration · Change (30d) +18 days · Materiality High · Model version v2.4.1 · Signal trend (30d) rising · Current signal: High.", trigger: "Risk signal crosses review threshold.", q: "Is the signal current, explainable and material enough to justify review?", evidence: "Source data freshness, model rationale, peer comparison, materiality test.", estatus: "Verified", cost: "Increased loss, capital impact and missed early action." },
];
export function DeepViseProfiles() {
  const [p, setP] = useState(1);
  return <Dv n="11" title="11. Decision-Focused User Profiles — The right evidence for the decision at hand" sub="Four decision contexts across operations, maintenance, finance and risk. Each tied to a specific trigger, decision question, required evidence and the cost of getting it wrong." label="DeepVise decision profiles — interactive rebuild of DeepVise_11">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, alignItems: "start" }}>
      {PROFILES11.map((x, i) => <button key={x.name} type="button" onClick={() => setP(i)} aria-pressed={i === p} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === p ? x.color : "#dde4ec"}`, borderTop: `5px solid ${x.color}`, borderBottom: `5px solid ${x.color}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 12.5, color: "#0B1726" }}>{x.name}</b>
        <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#44536a", background: "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 7, padding: "5px 7px", margin: "6px 0" }}>{x.panel}</span>
        <span style={{ display: "block", fontSize: 10.3, color: "#55606e" }}><b>Trigger:</b> {x.trigger}</span>
        <span style={{ display: "block", fontSize: 12.5, fontWeight: 800, lineHeight: 1.35, color: "#0B1726", margin: "6px 0" }}>{x.q}</span>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#44536a" }}><b>Required evidence:</b> {x.evidence} <span style={{ color: "#0e7c86", fontWeight: 700 }}>Evidence status: {x.estatus}</span></span>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#7a3a12", marginTop: 5 }}><b>⚠ Cost of a wrong decision:</b> {x.cost} <span style={{ color: "#b3352c", fontWeight: 700 }}>Evidence status: High</span></span>
      </button>)}
    </div>
  </Dv>;
}

/* ---------------- 12 — Research & evidence synthesis ---------------- */
const SYNTH12: Array<[string, string, string, string, string, string]> = [
  ["Monitoring", "Challenge direction: “Systems must ingest high-frequency, multi-source industrial signals (time-series, events, logs) and surface timely health indicators.”", "Challenge direction (Text)", "Users need synchronized, unit-aware diagnostics across heterogeneous signals to detect issues early and consistently.", "Real-time, unit-aware monitoring with synchronized multi-source timelines and health indicators.", "Align sampling, time zones and units; support drill-down from aggregated KPIs to raw signal views."],
  ["Prediction", "Deck p.7: “Cross-factory federated learning improves generalization to unseen factories while keeping data local.”", "Original deck · p.7", "Users need cross-factory learning that improves model generalization without moving raw data.", "Federated learning workflow across factories.", "Train models collaboratively via FATE; keep data local and exchange parameters/gradients only."],
  ["Maintenance", "Deck p.12: “Alerts are actionable only when they lead to a safe time window and a recommended work action.”", "Original deck · p.12", "Users need alerts that translate directly into a safe maintenance window and a clear work action.", "Actionable alerts with safe window and work action.", "Provide recommended maintenance window, risk if delayed, and step-by-step work instructions."],
  ["Privacy", "FATE doc: “Fine-grained permission control, data provenance tracking, and access expiry are supported.”", "Official FATE documentation · v1.11 §4.3, §4.5, §4.6", "Users need visibility into permissions, data provenance and access expiry within the product UI.", "Visible permissions, provenance and access expiry.", "Show who can access what, data lineage, and expiry dates; support least-privilege and audit logs."],
  ["Explainability", "Deck p.21: “Recommendations must include model confidence, evidence window and reason codes.”", "Original deck · p.21", "Users need transparency on confidence, evidence window and reason codes to trust and act on recommendations.", "Display confidence, evidence window and reason codes.", "Accompany each recommendation with confidence score, time window of evidence and standardized reason codes."],
  ["Credit governance", "Deck pp.29–30: “Health insights inform credit reviews; decisions remain with credit officers.”", "Original deck · pp.29–30", "Users need health evidence to trigger review workflows, not automatic underwriting decisions.", "Health evidence triggers review, not underwriting.", "Route flagged entities to credit review queues with evidence packs; final decision remains with credit officers. [Policy by design]"],
];
export function DeepViseSynthesis() {
  const [r, setR] = useState(3);
  const cur = SYNTH12[r];
  return <Dv n="12" title="12. Research and Evidence Synthesis" sub="From challenge direction, deck research, technical study and prototype constraints to product requirements. Source fact -> inferred user need -> product requirement. Source and evidence boundary: Original deck pages 3–12 and 19–34, challenge-direction text and official FATE documentation." label="DeepVise research synthesis — interactive rebuild of DeepVise_12">
    <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th></th><th>Source fact (what we found) · 28%</th><th>Inferred user need (what this means) · 30%</th><th>Design implication (what we will build) · 42%</th></tr></thead>
      <tbody>{SYNTH12.map((row, i) => <tr key={row[0]} onClick={() => setR(i)} style={{ cursor: "pointer", background: i === r ? "#eef1f6" : undefined }}><td style={{ borderLeft: "4px solid #102A43" }}><b>{row[0]}</b></td><td>{row[1]}</td><td>{row[3]}</td><td><b>{row[4]}</b></td></tr>)}</tbody></table></div>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 10, marginTop: 10 }}>
      <div className="tks-detail" aria-live="polite" style={{ margin: 0 }}><b>{cur[0]}</b> — source: {cur[2]}. <p style={{ margin: "5px 0 0" }}>{cur[5]}</p></div>
      <div style={{ border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 11px", fontSize: 11, background: "#fff" }}>
        <b>Source legend</b>
        <p style={{ margin: "4px 0 0" }}><b>Challenge direction:</b> Problem framing and requirements from challenge-direction text · <b>Original deck:</b> Requirements and insights from deck pages 3–12 and 19–34</p>
        <p style={{ margin: "4px 0 0" }}><b>Official FATE documentation:</b> Capabilities and specifications from official FATE documentation (v1.11) · <b>Retrospective inference:</b> Inferred from context, prototype constraints or implementation experience</p>
        <p style={{ margin: "4px 0 0" }}><b>Evidence labeling:</b> All design implications above are traceable to a source fact or are explicitly labeled as an inference [Reconstructed]</p>
      </div>
    </div>
  </Dv>;
}

/* ---------------- 14 — Product North Star loop ---------------- */
const NORTH14: Array<[string, string, string]> = [
  ["01 · Detect", "Surface a meaningful change, not every deviation.", "Feeds Understand: only meaningful changes are surfaced."],
  ["02 · Understand", "Expose evidence, confidence, freshness and comparison baseline.", "Evidence shown — Evidence 12 items · Confidence 0.78 · Freshness 2h ago · Baseline 30-day avg."],
  ["03 · Act", "Turn a recommendation into a work or review decision.", "Action output — Create work → Work order · Escalate for review → Review task."],
  ["04 · Learn", "Capture post-maintenance feedback and model version.", "Learning capture — Outcome Resolved · Feedback quality High · Model version v1.4.2 · Captured Today, 09:41."],
  ["05 · Review", "Keep accountable people in the loop for operational and lending actions.", "Human review — Accountable role Reliability Lead · Stakeholders 3 · Decision Approve / Reject · Audit trail Recorded."],
];
const PRINCIPLES14: Array<[string, string, string]> = [
  ["Useful before autonomous", "The system surfaces actionable recommendations with clear next steps and never executes actions without human confirmation.", "INTERFACE IMPACT: Actions require explicit human confirmation; no auto-approve or auto-execute."],
  ["Private by default", "Customer and factory data stay within the customer's environment with least-privilege access and data minimization.", "SYSTEM BEHAVIOR: Data isolation by tenant, role-based access, and local processing first."],
  ["Explainable at the moment of action", "Context, evidence and reasoning are visible when the decision is made, not buried in another place.", "INTERFACE IMPACT: Evidence panel and reasoning are shown inline at the point of decision."],
];
export function DeepViseNorthStar() {
  const [s, setS] = useState(1);
  return <Dv n="14" title="Product North Star — reduce uncertainty at the moment of action without taking control away from the people accountable for the outcome." sub="Centre of the printed loop: Product North Star — Reduce uncertainty at the moment of action while keeping humans accountable." label="DeepVise product north star — interactive rebuild of DeepVise_14">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "stretch" }}>
      {NORTH14.map(([t, brief, detail], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 12.3, color: "#0B1726" }}>{t} {i < 4 ? <span aria-hidden="true" style={{ color: "#2F80ED", float: "right" }}>→</span> : <span aria-hidden="true" style={{ color: "#2F80ED", float: "right" }}>↻</span>}</b>
        <span style={{ display: "block", fontSize: 10.5, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{brief}</span>
        <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#0e7c86", borderTop: "1px solid #e6ecf2", marginTop: 6, paddingTop: 5 }}>{detail}</span>
      </button>)}
    </div>
    <p style={{ textAlign: "center", margin: "8px 0 0" }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setS((v) => (v + 1) % 5)}>Next stage → (the loop returns from Review to Detect)</button></p>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Three principles</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
      {PRINCIPLES14.map(([t, body, impact]) => <div key={t} className="tks-card">
        <b style={{ fontSize: 12.5 }}>{t}</b>
        <p style={{ margin: "4px 0 0", fontSize: 11, lineHeight: 1.55, color: "#44536a" }}>{body}</p>
        <p style={{ margin: "6px 0 0", fontSize: 10, fontWeight: 700, color: "#2F80ED" }}>{impact}</p>
      </div>)}
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source and evidence boundary: The loop synthesizes original deck pages 11, 30 and 32–34. It is a retrospective product model, not an original deck artifact.</p>
  </Dv>;
}

/* ---------------- 16 — Information architecture ---------------- */
const IA16: Array<{ area: string; badge: string; items: string[] }> = [
  { area: "Shared Platform", badge: "All Roles", items: ["Home", "Notifications", "Search", "Model Freshness", "Data Freshness", "Organization Context"] },
  { area: "Factory Workspace", badge: "Factory", items: ["Fleet Overview", "Machine Detail", "Sensor Diagnostics", "Anomaly Investigation", "Maintenance Planner", "Work Orders"] },
  { area: "Lender Workspace", badge: "Lender", items: ["Portfolio", "Borrower and Asset Evidence", "Review Queue", "Condition Review", "Decision History"] },
  { area: "Administration", badge: "Admin", items: ["Organizations", "Schemas", "Permissions", "Consent", "Audit", "Integrations and Policy"] },
];
const V1_16 = ["Home", "Collection and Monitoring", "Federated Learning", "Bidirectional Finance", "Visualization", "Data Security"];
export function DeepViseIA() {
  const [badge, setBadge] = useState(0);
  const [sel, setSel] = useState("Sensor Diagnostics");
  const badges = ["All badges", "All Roles", "Factory", "Lender", "Admin"];
  const colColors = ["#637083", "#2F80ED", "#6C5CE7", "#0B1726"];
  return <Dv n="16" title="16 Information Architecture — One platform shell; role-specific decisions; shared evidence and governance." sub="Global Navigation (Platform Shell) is drawn as the dark bar below. Motion and responsive behavior (as printed): Role badges may filter the map in the website lightbox — try it here." label="DeepVise information architecture — interactive rebuild of DeepVise_16">
    <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 10, padding: "8px 13px", display: "flex", gap: 13, flexWrap: "wrap", alignItems: "center", fontSize: 11.5 }}>
      <b style={{ color: "#fff" }}>DeepVise</b><span>Home</span><span>Notifications</span><span>Search</span>
      <span style={{ color: "#12C7D4" }}>Model Freshness [2h ago]</span><span style={{ color: "#12C7D4" }}>Data Freshness [15m ago]</span>
      <span style={{ marginLeft: "auto", color: "#9fb2c8" }}>Organization: Acme Manufacturing · Alex Doe, Platform Admin</span>
    </div>
    <div style={{ marginTop: 10 }}><Chips items={badges} value={badge} onPick={setBadge} /></div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", marginTop: 10 }}>
      <div className="tks-card" style={{ borderStyle: "dashed" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Version 1 — Original prototype navigation</p>{V1_16.map((x) => <p key={x} style={{ margin: "4px 0" }}>{x}</p>)}<p className="tks-kicker" style={{ margin: "8px 0 0" }}>Source: Prototype deck pages 13–17. Shown for reference only.</p></div>
      {IA16.map((g, gi) => { const dim = badge !== 0 && badges[badge] !== g.badge; return <div key={g.area} className="tks-card" style={{ opacity: dim ? 0.35 : 1, borderTop: `4px solid ${colColors[gi]}` }}><p style={{ marginTop: 0 }}><b>{g.area}</b> <span className="tks-tag">{g.badge}</span></p>
        {g.items.map((x) => <p key={x} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={sel === x} onClick={() => setSel(x)}>{x}</button></p>)}</div>; })}
    </div>
    <div className="tks-detail" aria-live="polite">Selected page: <b>{sel}</b>. Role Access Legend — All Roles: Shared by all platform users · Factory: Factory and operations team members · Lender: Lending and credit team members · Admin: Platform administrators and governance team. Role badges indicate required access to each page. Access is enforced through permissions and governance.
      <p className="tks-kicker" style={{ margin: "8px 0 0" }}>Source and evidence boundary: Original prototype navigation is visible on deck pages 13–17 · Production method: A top-down vector sitemap, derived from product modules · Acceptance criteria: All final UI screens are located. Prototype and reconstructed structures are clearly separated.</p></div>
  </Dv>;
}

/* ---------------- 17 — Factory critical task flow ---------------- */
const FLOW17: Array<[string, string]> = [
  ["1 · Fleet attention queue", "Fleet · Attention Required (8). P1 MX-2471 High vibration · May 12, 08:41 · Alex Chen — P2 MX-1310 Temp rise · May 12, 08:28 · Priya Nair — P2 MX-0987 Pressure drop · May 12, 07:55 · Alex Chen — P3 MX-2044 Oil level low · May 12, 07:31 · Jordan Lee — P3 MX-1502 Current imbalance · May 12, 06:48 · Priya Nair. 8 items · Last updated: May 12, 08:42."],
  ["2 · Machine health detail", "MX-2471 · Online — CNC Machining Center · Model MX-2471 · Owner: Alex Chen. ⚠ High vibration detected since May 12, 08:41 (1 min) · P1. Health signals (compared to baseline, 30 days): Vibration (mm/s RMS) 7.8 High · Spindle temp (°C) 62 Slightly high · Motor current (A) 18.4 Normal · Hydraulic pressure (bar) 123 Normal."],
  ["3 · Sensor evidence (decision point)", "MX-2471 · CNC Machining Center · Alert since: May 12, 08:41 · Owner: Alex Chen. Time range: Last 30 min · ● Live · Baseline: 30-day baseline · Overlay on. Signals: ☑ Vibration (mm/s RMS) 7.8 High · ☑ Spindle temp (°C) 62 Normal · ☑ Motor current (A) 18.4 · ☑ Hydraulic pressure (bar) 123 · ☐ Coolant flow (L/min) No data · ☐ Ambient temp (°C) 24 Low. Evidence completeness 80% — 4 of 5 key signals available. Decision prompt: Do we have enough evidence to diagnose? [Yes, continue] [Review data gaps]."],
  ["4 · Probable cause and confidence", "MX-2471 · CNC Machining Center. Most probable cause: Spindle bearing wear — Confidence 0.78 High. Supporting evidence: Vibration elevated above normal range · Vibration pattern matches bearing defect frequency · Spindle temperature slightly elevated · No abnormalities in motor current or pressure. Other possible causes: Tool imbalance 0.42 Medium · Loose fixture 0.28 Low. Recommendation: Inspect spindle bearings at next available window."],
  ["5 · Recommended maintenance window (decision point)", "Recommendation: Inspect spindle bearings · Estimated duration: 2.5 h · Skills required: Mechanical Tech L2. Risk if not addressed: Potential spindle failure · Unplanned downtime (6–12 h) · Secondary damage risk: Medium. Recommended windows (based on production schedule and risk): May 12, 15:00 – 17:30 · Best · Lowest risk, minimal production impact — May 13, 07:00 – 09:30 · Good · Low risk, minor production impact — May 13, 15:00 – 17:30 · Fair · Higher risk, moderate production impact. Decision: [Schedule work] [Defer] [False positive]."],
  ["6 · Work-order confirmation", "Review work order — Work type Inspection · Asset MX-2471 · Task Inspect spindle bearings · Window May 12, 15:00 – 17:30 · Duration 2.5 h · Owner Alex Chen · Assignee Maintenance Team A · Priority P1. Checklist (4): Lockout / tagout · Remove spindle cover · Inspect bearings · Reassemble and test. No work order created until confirmed. [Back] [Confirm]."],
  ["7 · In-progress state", "Work in progress — Work order WO-58321 · Status ● In progress · Assignee Maintenance Team A · Started May 12, 15:02. Progress: 2 of 4 tasks complete — ✓ Lockout / tagout Done 15:02 · ✓ Remove spindle cover Done 15:16 · ◐ Inspect bearings In progress · ○ Reassemble and test Pending. [Update progress]."],
  ["8 · Post-maintenance validation", "Validation results: Resolved. Completed May 12, 17:18 · Performed by Maintenance Team A. Post-maintenance sensor check (compared to baseline, 30 days): Vibration (mm/s RMS) 1.9 Normal · Spindle temp (°C) 48 Normal · Motor current (A) 16.2 Normal · Hydraulic pressure (bar) 121 Normal. Outcome: Issue resolved. System back to normal. [Close] [Add notes]."],
];
export function DeepViseFactoryFlow() {
  const [s, setS] = useState(2);
  const [win, setWin] = useState(0);
  return <Dv n="17" title="17. Factory Critical Task Flow — From signal to scheduled work" sub="The system explains why attention is needed, proposes a safe action and records whether the action resolved the condition. Context carried across all screens: Machine ID MX-2471 · Model CNC Machining Center · Alert since May 12, 08:41 · Owner Alex Chen. Evidence status: Partially from source (p.30), partially reconstructed." label="DeepVise factory task flow — interactive rebuild of DeepVise_17">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, alignItems: "start" }}>
      {FLOW17.map(([t, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}{i < 7 ? <span aria-hidden="true" style={{ color: "#2F80ED", float: "right" }}>→</span> : null}</b>
        <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{body}</span>
        {i === 4 ? <span style={{ display: "block", marginTop: 5 }} onClick={(e) => e.stopPropagation()}><Chips items={["May 12 · Best", "May 13 AM · Good", "May 13 PM · Fair"]} value={win} onPick={setWin} /></span> : null}
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 9 }}>
      <div style={{ border: "1.5px dashed #D95C5C", borderRadius: 11, padding: "8px 11px", background: "#fdf6f6" }}>
        <b style={{ fontSize: 11.8 }}>3a Low confidence (exception, from screen 3)</b>
        <p style={{ margin: "3px 0 0", fontSize: 10.5, lineHeight: 1.55, color: "#44536a" }}>Confidence below threshold (0.40). Why: Evidence is insufficient to determine a cause · Multiple causes remain plausible · Additional inspection recommended. What you can do: Collect more data (run diagnostic capture) · Inspect on-site (add inspection findings) · Consult expert (request engineering review). [Return to sensor evidence]</p>
        <b style={{ fontSize: 11.8 }}>3b Missing sensor data (exception)</b>
        <p style={{ margin: "3px 0 0", fontSize: 10.5, lineHeight: 1.55, color: "#44536a" }}>Data gap detected: 1 of 5 key signals missing. Missing: Coolant flow (L/min). Impact: Reduced confidence in diagnosis. What you can do: Check sensor (verify connection) · Impute temporarily (use model estimate) · Proceed cautiously (lower confidence). [Return to sensor evidence]</p>
      </div>
      <div style={{ border: "1.5px dashed #6C5CE7", borderRadius: 11, padding: "8px 11px", background: "#f7f5ff" }}>
        <b style={{ fontSize: 11.8 }}>5a Deferred work (from screen 5)</b>
        <p style={{ margin: "3px 0 0", fontSize: 10.5, lineHeight: 1.55, color: "#44536a" }}>Deferred to May 13, 07:00 – 09:30 · Reason: Production commitment.</p>
        <b style={{ fontSize: 11.8 }}>5b False positive (feedback path)</b>
        <p style={{ margin: "3px 0 0", fontSize: 10.5, lineHeight: 1.55, color: "#44536a" }}>Marked as false positive · Reason: Vibration caused by heavy roughing cut · “Thank you. This feedback improves accuracy.”</p>
        <p style={{ margin: "5px 0 0", fontSize: 10.5, color: "#44536a" }} aria-live="polite">Screen in focus: <b>{FLOW17[s][0]}</b>{s === 4 ? ` — window selected: ${["May 12, 15:00 – 17:30 · Best", "May 13, 07:00 – 09:30 · Good", "May 13, 15:00 – 17:30 · Fair"][win]}` : ""}</p>
      </div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Legend: solid — Primary path · red dashed — Exception: Low confidence · orange dashed — Exception: Missing data · purple dashed — Deferred path · blue dashed — Feedback path. Source and evidence boundary: Original deck page 30 supports diagnosis, warning and maintenance advice. The complete eight-state interaction is reconstructed.</p>
  </Dv>;
}

/* ---------------- 18 — Lender critical task flow ---------------- */
const FLOW18: Array<[string, string]> = [
  ["1 · Portfolio attention queue", "Attention queue · 3 items · Sort by: Signal change. Enterprise A · High · Asset signal changed Today 09:12 · CNY 25M · 4.60% — Enterprise B · Medium · Asset signal changed Today 08:47 · CNY 18M · 5.10% — Enterprise C · Low · Covenant due in 15 days May 12, 2025 · CNY 12M · 4.30%."],
  ["2 · Borrower summary", "Enterprise A (Demo data) — Industry Industrial Equipment · Exposure CNY 25M · % of portfolio 29.4% · Current rate 4.60% · Maturity 2026-08-31 · Relationship since 2021-06 · Internal rating BBB- · Watch status Watch. Recent highlights: ✓ Timely payments, last 6 months · DSCR (LTM) 1.45x · Utilization 62%."],
  ["3 · Asset-health evidence", "Evidence before adjustment — A changed signal opens a review. It does not change a contract. ⚠ Asset signal changed Today 09:12. Key indicators: Days Sales Outstanding Latest 72 · Prior 54 · Change ▲ 18 — Inventory Turnover (12M) 3.1x · 3.8x · ▼ −0.7x — Overdue Payables > 90 days CNY 3.2M · CNY 1.6M · ▲ 1.6M — Machine Uptime 87% · 93% · ▼ −6pp. Evidence summary: Adverse changes 3 · Stable 2 · Improved 0."],
  ["4 · Signal provenance", "Source and evidence boundary: Original deck pages 15–17 support the lender portfolio and Adjust loan conditions action. Signal details: Signal ID SIG-2025-0513-A1 · Detected May 13, 2025 09:12 · Source system EWS Connector · Data as of May 12, 2025. Reason codes: RC-DSO-02 · 18 — RC-INV-01 · 12 — RC-AP-03 · 7. Boundary: Operational data from approved systems. No external news or social signals used."],
  ["5 · Scenario comparison", "Compare outcomes. Judgment remains with the reviewer. Current terms (No change): Impact on PD (12M) +0.6pp · Impact on Expected Loss +0.18pp · Qualitative assessment Weakens. Proposed terms (Modify): +0.1pp · +0.03pp · Manageable. Tighter terms (Alternative): −0.2pp · −0.07pp · Stronger. Assumptions (demo): Macro outlook: Base case · Recovery rate: 40% · LGD floors and policy overlays apply · Not a prediction. For decision support only."],
  ["6 · Proposed condition review", "Policy status: ✓ Compliant — Within delegated authority. Current terms (Demo data): Facility Term Loan · Exposure CNY 25M · Rate 4.60% · Maturity 2026-08-31 · Covenants DSCR ≥ 1.20x, ICR ≥ 1.50x. Proposed terms (Demo data): Rate 4.85% · Pricing change +0.25pp · Covenants DSCR ≥ 1.30x, ICR ≥ 1.70x · Reporting Monthly · Collateral No change · Maturity No change."],
  ["7 · Human decision", "Reviewer: Jane Liu — Credit Risk Manager. Reviewer note: “DSO increase tied to two large project delays. Customer provided updates and partial receipts. Modified terms appropriate with enhanced monitoring.” Decision options: Approve (No change) · Modify (Apply proposed terms) · Reject (Return or decline). Second approval required: Yes — Prudential Policy § 2.4.3. [Submit decision]."],
  ["8 · Audit confirmation", "✓ Decision logged — Decision ID DEC-2025-0513-A1 · Decision Modify · Status Pending second approval · Logged by Jane Liu · Time May 13, 2025 09:28. Next step: Awaiting second approval by Credit Head. Outcomes rail: Approve (No change) — Terms unchanged, outcome logged, audit trail complete · Modify (Apply proposed terms) — New terms applied after second approval · Reject (Return or decline) — Request returned or declined."],
];
export function DeepViseLenderFlow() {
  const [s, setS] = useState(4);
  const [scenario, setScenario] = useState(1);
  const [decision, setDecision] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const SCEN = ["Current terms (No change)", "Proposed terms (Modify)", "Tighter terms (Alternative)"];
  return <Dv n="18" title="Lender Critical Task Flow — Review a changing asset signal without surrendering judgment to the model." sub="Portfolio overview (Demo data) and the persistent evidence rail are the strips below the title, as printed." label="DeepVise lender task flow — interactive rebuild of DeepVise_18">
    <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 7 }}>
      {[["Total exposure", "CNY 85M"], ["Average rate", "4.85%"], ["Borrowers", "12"]].map(([k, v]) => <span key={k} style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 9, padding: "6px 12px", fontSize: 11.5 }}><span style={{ color: "#9fb2c8" }}>{k} </span><b style={{ color: "#fff" }}>{v}</b></span>)}
    </div>
    <div style={{ background: "#eef6ff", border: "1px solid #b9d4f2", borderRadius: 9, padding: "6px 12px", fontSize: 11, color: "#33465e", marginBottom: 10 }}>Evidence rail (persistent across all steps): Data as of May 12, 2025, updated May 13, 2025 09:12 · Overall confidence Medium (68%) · Permission: Data usage Permitted, Purpose Credit risk management · Model version: Risk model RMX Credit v2.1.3, deployed May 01, 2025 · Session: Reviewer Jane Liu, Session ID SES-2025-0513-08.</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, alignItems: "start" }}>
      {FLOW18.map(([t, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}{i < 7 ? <span aria-hidden="true" style={{ color: "#2F80ED", float: "right" }}>→</span> : null}</b>
        <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{body}</span>
      </button>)}
    </div>
    <div className="tks-detail" aria-live="polite" style={{ marginTop: 10 }}>
      <b>{FLOW18[s][0]}</b> in focus.
      {s === 4 && <><p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Compare a scenario (screen 5)</p><Chips items={SCEN} value={scenario} onPick={setScenario} /></>}
      {s === 6 && <><p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Decision (screen 7)</p><Chips items={["Approve (No change)", "Modify (Apply proposed terms)", "Reject (Return or decline)"]} value={decision} onPick={setDecision} />
        <p style={{ margin: "8px 0 0" }}><button type="button" className="tks-btn" onClick={() => { setSubmitted(true); setS(7); }}>Submit decision</button> {submitted ? "Submitted — see Audit confirmation (screen 8)." : ""}</p></>}
      <p style={{ margin: "8px 0 0" }}><b>Outcome branches (from screen 8):</b> <span style={{ color: "#0e7c86", fontWeight: 700 }}>Approve (No change)</span> — Terms unchanged, outcome logged, audit trail complete · <span style={{ color: "#2F80ED", fontWeight: 700 }}>Modify (Apply proposed terms)</span> — New terms applied after second approval · <span style={{ color: "#b3352c", fontWeight: 700 }}>Reject (Return or decline)</span> — Request returned or declined.</p>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Production method: Built with real UI components and a fixed demo dataset. All financial values are Demo data. Motion &amp; responsive behavior (optional): Optional motion demonstrates opening a review, inspecting reason codes and choosing Modify. Never animate a rate changing automatically. Do not include: No claim of regulatory approval, deployed underwriting model or automatic adverse action · No automatic decisions.</p>
  </Dv>;
}

/* ---------------- 19 — Data-to-credit decision flow ---------------- */
const LAYERS19: Array<[string, string, string, string]> = [
  ["1 · Raw signals", "Temperature — °C time series · Vibration / acceleration — m/s² time series · Load — % of capacity time series · Cycles — Start/stop counts, duration · Spectral indicators — FFT spectra, orders, harmonics", "Built", "Factory purpose: Turn machine behavior into trustworthy evidence."],
  ["2 · Local features", "Windowed statistics — Mean, std, min, max, RMS · Spectral kurtosis — Peakedness of spectrum · Negative entropy — Complexity / predictability · Smoothness — Signal variation measures · Gini-related indicators — Distribution inequality", "Built", ""],
  ["3 · Health model", "Anomaly probability 0.13 (0 to 1) · Condition trend Degrading (Improving / Stable / Degrading) · Likely fault class Bearing wear (Top probable class) · Confidence 0.72 (0 to 1)", "Built", "Boundary after this layer: MODEL INFERENCE ENDS (EVIDENCE CREATED)."],
  ["4 · Derived signal", "Minimal score band 520 – 640 (Scale: 300 – 850) · Trend Slightly worsening (Improving / Stable / Worsening) · Freshness 18 hours ago (Max freshness: 48h) · Reason codes R1, R3, R7 (Code set v2.1) · Consent reference CONS-7G8H-2K9M (Signed, time-stamped)", "Reconstructed", ""],
  ["5 · Credit policy (Proposed)", "Exposure Up to $2,000,000 (Requested facility) · Covenants DSCR ≥ 1.25, Days cash ≥ 30, Capex limits · Borrower context Industry: Manufacturing, Revenue: $12.4M, Leverage: 2.1x · Thresholds Score band ≥ 520, No critical reason codes, Freshness ≤ 48h · Review rules Auto-approve if all green, Else refer to analyst, Override requires reason", "Proposed", ""],
  ["6 · Human decision", "Approve — Accept as recommended · Modify — Adjust terms or limits · Reject — Decline the request · Request evidence — Ask for additional information · Defer — Decide later / place on hold. Human review is mandatory. A person owns the decision and records the rationale.", "Built", "Boundary before this layer: POLICY ENDS (HUMAN DECISION BEGINS). Lender purpose: Convert evidence into sound credit decisions."],
];
export function DeepViseDataToCredit() {
  const [s, setS] = useState(3);
  const [choice, setChoice] = useState<string | null>(null);
  return <Dv n="19" title="19 Data-to-Credit Decision Flow" sub="Clarify which transformations are model outputs, which are product rules and which require accountable human judgment." label="DeepVise data-to-credit flow — interactive rebuild of DeepVise_19">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7, alignItems: "stretch" }}>
      {LAYERS19.map(([t, body, status, note], i) => {
        const head = ["#102A43", "#102A43", "#2F80ED", "#12C7D4", "#6C5CE7", "#0B1726"][i];
        return <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? head : "#dde4ec"}`, borderRadius: 11, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit" }}>
          <span style={{ display: "block", background: head, color: "#fff", padding: "6px 9px", fontSize: 11.3, fontWeight: 800 }}>{t}<br /><span style={{ fontWeight: 600, fontSize: 9.3, opacity: 0.85 }}>{status}</span></span>
          <span style={{ display: "block", fontSize: 9.5, lineHeight: 1.5, color: "#44536a", padding: "7px 9px" }}>{body}</span>
          {note ? <span style={{ display: "block", fontSize: 9.3, fontWeight: 700, color: "#0B1726", borderTop: "1px dashed #b9c6d4", padding: "5px 9px" }}>{note}</span> : null}
        </button>;
      })}
    </div>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", marginTop: 10 }} aria-live="polite">
      <span style={{ fontSize: 11.5, color: "#55606e" }}>Human decision (layer 6) — evidence status key: Built = implemented and operational · Reconstructed = derived for decision use · Proposed = concept / not implemented.</span>
      {["Approve", "Modify", "Reject", "Request evidence", "Defer"].map((d) => <button key={d} type="button" className="tks-chip" aria-pressed={choice === d} onClick={() => setChoice(d)}>{d}</button>)}
      <span style={{ fontSize: 11.5 }}>{choice ? `Recorded: ${choice} — rationale required; every decision, data version and rationale must be auditable and retained.` : ""}</span>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", marginTop: 10 }}>
      <div className="tks-card"><b>Model output is evidence.</b><p style={{ margin: "4px 0 0", color: "#555" }}>The model measures machine health and produces evidence.</p></div>
      <div className="tks-card"><b>Policy converts evidence into a recommendation.</b><p style={{ margin: "4px 0 0", color: "#555" }}>Policy applies rules and context to produce options, not a decision.</p></div>
      <div className="tks-card"><b>A person owns the decision.</b><p style={{ margin: "4px 0 0", color: "#555" }}>Accountable human judgment is required and recorded.</p></div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source and evidence boundary: Original deck pages 19–30 support the signal and model path (signals → features → model). Original deck pages 32–34 support the finance concept (policy and context). The separation between derived signal, policy and human decision is a portfolio governance improvement. Permission &amp; consent are mandatory steps: No decision is made without valid consent and human review.</p>
  </Dv>;
}

/* ---------------- 20 — Scope and build timeline ---------------- */
const TIMELINE20: Array<[string, string, string]> = [
  ["1 · Frame", "Select cross-factory health plus finance extension.", "In scope — Confirmed as the competition focus."],
  ["2 · Research", "Synthesize manufacturing, lending and privacy pain points.", "In scope — Insights shaped use cases and constraints."],
  ["3 · Simulate", "Use ANSYS model to generate synthetic behavior evidence.", "In scope — Simulation results informed indicators."],
  ["4 · Model", "Define health indicators and study federated aggregation.", "In scope — Model validated with synthetic data."],
  ["5 · Design", "Design platform navigation, role selection and two-sided flows.", "In scope — Model validated with end users."],
  ["6 · Build", "Build web prototype and produce demo video.", "Prototype fidelity — Interactive prototype and demo created."],
  ["7 · Present", "Submit 36-page competition deck on 08 Dec 2024.", "Submitted — Deck accepted for evaluation."],
];
const DELIV20: Array<[string, string, string[]]> = [
  ["Built (2024 prototype)", "Created for the competition to prove the product direction.", ["Web prototype (interactive)", "Demo video (2:45)", "Simulation models and results", "36-page competition submission (08 Dec 2024)"]],
  ["Reconstructed (2026 portfolio)", "Reconstructed from evidence to make decisions, states and governance legible.", ["Decision timeline and evidence map", "Indicator model and data dictionary", "Federated aggregation study", "Governance, privacy and risk controls", "Portfolio narrative and diagrams"]],
  ["Proposed (post-competition)", "Concepts not built in the competition prototype.", ["Advanced lender workflows", "Automated risk decisioning", "API marketplace", "Mobile applications", "Production deployment model"]],
];
export function DeepViseScopeTimeline() {
  const [s, setS] = useState(2);
  return <Dv n="20" title="20. Scope and Build Timeline — The competition prototype proved the product direction. The portfolio reconstruction makes the decisions, states and governance legible." label="DeepVise scope timeline — interactive rebuild of DeepVise_20">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr) 74px", gap: 7, alignItems: "stretch" }}>
      {TIMELINE20.slice(0, 6).map(([t, dec, status], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 9px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}</b>
        <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{dec}</span>
        <span style={{ display: "block", fontSize: 9.5, fontWeight: 700, color: "#0e7c86", marginTop: 4 }}>✓ {status}</span>
      </button>)}
      <div style={{ border: "1.5px dashed #D99A2B", borderRadius: 11, padding: "8px 7px", background: "#fffaf0", textAlign: "center" }}>
        <b style={{ fontSize: 10.5, color: "#7a5410" }}>⬢ Evidence gate</b>
        <p style={{ margin: "3px 0 0", fontSize: 9.3, lineHeight: 1.45, color: "#7a5410" }}>Evidence reviewed and accepted — prototype meets competition requirements. ✓ Approved — Ready for presentation.</p>
      </div>
      <button type="button" onClick={() => setS(6)} aria-pressed={s === 6} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${s === 6 ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 9px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 11.8, color: "#0B1726" }}>{TIMELINE20[6][0]}</b>
        <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{TIMELINE20[6][1]}</span>
        <span style={{ display: "block", fontSize: 9.5, fontWeight: 700, color: "#0e7c86", marginTop: 4 }}>✓ {TIMELINE20[6][2]}</span>
      </button>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Deliverables by scope</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
      {DELIV20.map(([t, intro, items]) => <div key={t} className="tks-card">
        <b style={{ fontSize: 12.5 }}>{t}</b>
        <p style={{ margin: "4px 0 0", fontSize: 11, lineHeight: 1.5, color: "#44536a" }}>{intro}</p>
        <ul style={{ margin: "5px 0 0", paddingLeft: 16, fontSize: 11, lineHeight: 1.55 }}>{items.map((x) => <li key={x}>{x}</li>)}</ul>
      </div>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 9 }}>
      <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 10, padding: "8px 12px", fontSize: 11 }}><b style={{ color: "#fff" }}>2024 Competition Prototype</b> — Purpose: Prove product direction · Artifacts: Prototype, demo, models, submission · Status: Submitted on 08 Dec 2024.</div>
      <div style={{ background: "#102A43", color: "#dbe5f0", borderRadius: 10, padding: "8px 12px", fontSize: 11 }}><b style={{ color: "#fff" }}>2026 Portfolio Reconstruction</b> — Purpose: Make decisions, states and governance legible · Artifacts: Reconstruction deliverables · Status: In progress.</div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source and evidence boundary — Verified: Competition submission date (08 Dec 2024) and 36-page deck. Evidence: Artifacts shown above are from the 2024 competition prototype. Boundary: Any durations, team capacity or delivery schedule are omitted until supported.</p>
  </Dv>;
}

/* ---------------- 21 — Risk register ---------------- */
const RISKS21: Array<{ group: string; n: string; assumption: string; failure: string; guardrail: string; detail: string; owner: string; evidence: string; sev: string }> = [
  { group: "Data", n: "1", assumption: "Sensor quality", failure: "Missing or miscalibrated inputs", guardrail: "Freshness, completeness and sensor-health indicators.", detail: "Real-time data freshness SLAs, completeness thresholds, calibration checks and alerting on sensor anomalies.", owner: "Data platform owner", evidence: "Data quality dashboard; sensor health logs; threshold breaches with remediation tickets.", sev: "" },
  { group: "Data", n: "2", assumption: "Schema compatibility", failure: "Incompatible party data", guardrail: "Preflight validation and versioned schema.", detail: "Automated schema compatibility checks, version registry, and migration policy before data acceptance.", owner: "Data governance lead", evidence: "Schema registry; preflight validation reports; change log.", sev: "" },
  { group: "Model", n: "3", assumption: "Model drift", failure: "Degrading performance", guardrail: "Monitoring, approval state and rollback.", detail: "Continuous performance and drift monitoring, model approval state management, and defined rollback procedure.", owner: "Model risk manager", evidence: "Performance dashboards; drift reports; approval records; rollback runbooks.", sev: "" },
  { group: "Model", n: "4", assumption: "Participant trust", failure: "Poisoning or unreliable updates", guardrail: "Membership control, anomaly review and audit.", detail: "Participant allowlisting, update quality scoring, anomaly detection, and full audit trail of contributions and actions.", owner: "Federated learning lead", evidence: "Membership list; anomaly alerts; audit logs; investigation records.", sev: "" },
  { group: "Operations", n: "5", assumption: "Explainability", failure: "Opaque recommendation", guardrail: "Evidence window, confidence and reason codes.", detail: "Present top evidence window, model confidence score, and standardized reason codes with every recommendation.", owner: "Explainability owner", evidence: "Explanation samples; reason code catalog; user acceptance testing.", sev: "Medium (moderate impact)" },
  { group: "Finance", n: "6", assumption: "Lending fairness and permission", failure: "Overreliance or unauthorized use", guardrail: "Data minimization, consent, policy checks, human review and appeal path.", detail: "Collect only necessary data with documented consent, enforce policy checks, require human review for adverse actions, and provide an appeal path for participants.", owner: "Credit policy owner", evidence: "Policy rules; consent records; review logs; appeal case tracker.", sev: "High (significant impact)" },
];
export function DeepViseRiskRegister() {
  const [r, setR] = useState(5);
  const cur = RISKS21[r];
  return <Dv n="21" title="ACT IV · Assumptions, Risks and Guardrails — Risk register for federated credit intelligence" sub="A federated system reduces one class of privacy risk. It does not remove data quality, security, governance or fairness risk. Severity legend (as printed): Critical (high impact, urgent) · High (significant impact) · Medium (moderate impact) · Low (low impact)." label="DeepVise risk register — interactive rebuild of DeepVise_21">
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 11, marginBottom: 7 }}>
      <span><span style={{ color: "#D95C5C" }}>●</span> Critical (high impact, urgent)</span><span><span style={{ color: "#D99A2B" }}>●</span> High (significant impact)</span><span><span style={{ color: "#2F80ED" }}>●</span> Medium (moderate impact)</span><span><span style={{ color: "#637083" }}>●</span> Low (low impact)</span>
      <span style={{ marginLeft: "auto", color: "#55606e" }}>Groups: <b style={{ color: "#2F80ED" }}>Data</b> · <b style={{ color: "#6C5CE7" }}>Model</b> · <b style={{ color: "#0e7c86" }}>Operations</b> · <b style={{ color: "#b03a3a" }}>Finance</b></span>
    </div>
    <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr>{["Group", "Assumption", "Failure mode", "Product guardrail", "Evidence or owner"].map((h) => <th key={h} style={{ background: "#102A43", color: "#fff" }}>{h}</th>)}</tr></thead>
      <tbody>{RISKS21.map((row, i) => <tr key={row.n} onClick={() => setR(i)} style={{ cursor: "pointer", background: i === r ? "#eef1f6" : undefined }}><td><span style={{ display: "inline-block", background: row.group === "Data" ? "#e3edfb" : row.group === "Model" ? "#efeaff" : row.group === "Operations" ? "#e2f2f0" : "#fbeaea", borderRadius: 6, padding: "1px 8px", fontWeight: 700 }}>{row.group}</span></td><td><b>{row.n} · {row.assumption}</b></td><td>{row.failure}</td><td>✓ {row.guardrail}<span style={{ display: "block", color: "#55606e", fontSize: 10.5, marginTop: 2 }}>{row.detail}</span></td><td>{row.owner}<span style={{ display: "block", color: "#0e7c86", fontWeight: 700, fontSize: 10.5, marginTop: 2 }}>Evidence: Available</span></td></tr>)}</tbody></table></div>
    <div className="tks-detail" aria-live="polite"><b>{cur.n} · {cur.assumption}</b> ({cur.group}){cur.sev ? <> — severity marker as printed: <b>{cur.sev}</b></> : null}
      <p style={{ margin: "5px 0 0" }}><span className="tks-kicker">Guardrail</span> {cur.guardrail} {cur.detail}</p>
      <p style={{ margin: "5px 0 0" }}><span className="tks-kicker">Evidence or owner</span> {cur.owner} — {cur.evidence} <span className="tks-ver">Evidence: Available</span></p></div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source and evidence boundary: Original deck pages 9 and 34 discuss privacy and dynamic credit risk. The detailed guardrails are production-oriented proposed requirements. This is a design risk register to support product and governance decisions. It is not legal advice and does not represent a statement of compliance.</p>
  </Dv>;
}

/* ---------------- 22 — Early sketches & decision models ---------------- */
const SKETCH22: Array<{ group: string; n: number; title: string; status: string; q: string; note: string }> = [
  { group: "Factory", n: 1, title: "Command-centre hierarchy", status: "Original", q: "What level of summary drives action without exposing sensitive detail?", note: "Hierarchy as printed: Enterprise → Sites → Lines → Machines. Enterprise overview: Sites 12 · Lines 84 · Machines 1,302 · Alerts 7. Site performance rows at 50–90." },
  { group: "Factory", n: 2, title: "Machine-detail evidence layout", status: "Original", q: "What is the minimum machine evidence needed to support a financing decision?", note: "Machine A23 · CNC Turning Center · Status ● Running · OEE (24h) 78% · Availability 92% · Quality 96% · Last update 10:15. Events: 10:15 Cycle time 1.2 min · 10:10 Output 45 pcs · 10:05 Downtime 3 min · 10:00 Cycle time 1.1 min. Tabs: Timeline · Metrics · Events · Files." },
  { group: "Factory", n: 3, title: "Rejected: single flat list", status: "Rejected", q: "Would a flat list scale for thousands of assets and multiple user roles?", note: "Table as printed: M-1001 Press A Machine Site 1 Running OEE — Alerts 1 · M-1002 Press B Machine Site 1 Idle 0% 2 · M-1003 Line 3 Line Site 2 Running 76% 0 · M-1004 Welder 7 Machine Site 3 Down 0% 3. Why rejected? Poor scalability, weak hierarchy and hard to secure by role." },
  { group: "Federation", n: 4, title: "Federation job stages", status: "Original", q: "Which stages and handoffs reduce cycle time and ensure accountability?", note: "Request (Define need · Constraints · Evidence scope) → Assemble (Select members · Share terms · Risk check) → Execute (Monitor · Exceptions · Updates) → Settle (Reconcile · Distribute · Close)." },
  { group: "Federation", n: 5, title: "Member selection and roles", status: "Original", q: "Which roles are essential and what permissions are required for each?", note: "Permission matrix as printed — Invite: Originator ✓ Investor ✓ Servicer ✓ Guarantor ✓ · View full data: Originator ✓ Investor ✓ Servicer — Guarantor — · Approve terms: Originator — Investor ✓ Servicer ✓ Guarantor — · Receive updates: all ✓." },
  { group: "Federation", n: 6, title: "Rejected: hub-and-spoke control", status: "Rejected", q: "Is a central owner model flexible enough for multi-lender collaboration?", note: "Diagram as printed: a central Originator node linked to four Investor nodes. Why rejected? Creates bottleneck and single point of failure." },
  { group: "Finance", n: 7, title: "Lender review layout (evidence first)", status: "Original", q: "Should lenders see structured evidence before decisions or summary first?", note: "Application summary (Applicant · Requested · Purpose · Risk rating Medium) beside Evidence package: Production performance 12 files · Equipment status 8 files · Maintenance records 6 files · Financial statements 4 files." },
  { group: "Finance", n: 8, title: "Decision outcome and next steps", status: "Original", q: "How should outcomes and reasons be communicated to support trust and next steps?", note: "Approved: ✓ Evidence verified · ✓ Risk acceptable · ✓ Terms agreed · Facility amount $5,000,000 · Next step Documentation. Declined: Reasons — Insufficient track record · Maintenance gaps · Leverage too high · Next step: Resubmit with additional evidence." },
  { group: "Finance", n: 9, title: "Term sheet comparison", status: "Retrospective", q: "How can lenders compare terms consistently without exposing confidential pricing?", note: "As printed — Amount: Lender A $5.0M · Lender B $4.5M · Lender C $5.0M · Tenor: 12 / 9 / 12 months · Rate: 7.2% / 6.8% / 7.0% · Fees: 0.6% / 0.8% / 0.5% · Covenants: Standard / Standard / Enhanced." },
  { group: "Governance", n: 10, title: "Consent and audit concept", status: "Original", q: "How can consent be explicit, granular and verifiable without slowing users?", note: "Consent request — Share with: Global Bank · Data to share: Production performance, Maintenance records · Purpose: Working capital facility · [Deny] [Approve]. Audit trail: Requested by Enterprise User 10:24 · Approved by Site Admin 10:27 · Shared with Global Bank 10:28 · Accessed by Global Bank 10:31." },
  { group: "Governance", n: 11, title: "Data boundary and redaction", status: "Original", q: "What must remain private by default while still proving creditworthiness?", note: "Shareable evidence: Production performance 12 files · Equipment status 8 files · Maintenance records 6 files. Redacted / Private: Unit cost — · Supplier contracts — · Employee details —." },
  { group: "Governance", n: 12, title: "Audit log view", status: "Retrospective", q: "How can every access and action be traceable and tamper-evident?", note: "As printed — 10:24 Enterprise User · Requested consent · Production data · Success · 10:27 Site Admin · Approved consent · Production data · Success · 10:28 Platform · Shared data · Global Bank · Success · 10:31 Global Bank · Accessed data · Production data · Success." },
];
export function DeepViseEarlySketches() {
  const [g, setG] = useState(0);
  const [sel, setSel] = useState(2);
  const groups = ["All", "Factory", "Federation", "Finance", "Governance"];
  const shown = SKETCH22.filter((x) => g === 0 || x.group === groups[g]);
  return <Dv n="22" title="22 Early Sketches and Decision Models" sub="Retrospective reconstruction. The early work focused on decisions and evidence: what changed, why it mattered, who could act and what had to remain private." label="DeepVise early sketches — interactive rebuild of DeepVise_22">
    <Chips items={groups} value={g} onPick={setG} />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 10 }}>
      {shown.map((x) => <button key={x.n} type="button" onClick={() => setSel(x.n - 1)} aria-pressed={sel === x.n - 1} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${sel === x.n - 1 ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="tks-kicker">{x.group}</span><span className="tks-tag" style={x.status === "Rejected" ? { color: "#b3352c", borderColor: "#b3352c" } : undefined}>{x.status}</span></span>
        <b style={{ display: "block", fontSize: 12, margin: "3px 0", color: "#0B1726" }}>{x.n} · {x.title}</b>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#55606e" }}><i>{x.q}</i></span>
        <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.5, color: "#44536a", marginTop: 4, background: "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 6, padding: "4px 6px" }}>{x.note}</span>
      </button>)}
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source and evidence boundary: This board is a retrospective reconstruction of early decisions and models. Final UI in production reflects decisions validated through testing and stakeholder feedback. ✓ Decision carried forward to final UI: Evidence-first lender review, explicit consent, role-based access and auditability.</p>
  </Dv>;
}

/* ---------------- 23 — Low-fidelity wireframe system ---------------- */
const WIREFRAMES23: Array<{ domain: string; blurb: string; screens: Array<[string, string, string]> }> = [
  { domain: "Factory", blurb: "Monitor and manage machines, sensors and operations.", screens: [
    ["1. Command Centre", "Normal State", "Factory A · All Lines · Last 24h — Machines 128 (Online 112 · Offline 16) · Alerts 3 (Warning 2 · Critical 1) · OEE 78.4%. Recent Alerts: M-23 Vibration above threshold 09:14 · M-07 Temperature warning 08:47 · M-12 Sensor offline 08:21. Top Machines by OEE: M-23 92.1% · M-07 85.3% · M-12 80.2%."],
    ["2. Machine Detail", "Normal State", "Factory A › Line 2 › M-23 · Live — M-23 CNC Milling Machine · Status Online · OEE 92.1% · Runtime 7h 32m. Key Sensors (Live): Vibration 2.3 mm/s Normal · Temperature 61 °C Normal · Spindle Speed 1,250 rpm Normal. Tabs: Overview · Sensors · Events · Maintenance."],
    ["3. Diagnostics", "Warning State", "Factory A › Diagnostics › M-23 — Anomaly Detected: Vibration above threshold on Bearing 2 · First seen 09:14 · Severity Warning · Likely Cause Bearing wear · Confidence Medium. Evidence: ☑ Vibration Sensor (Bearing 2) 2.3 mm/s 09:14 · ☑ Vibration Trend (24h) View chart · ☐ Maintenance History 2 open items. Confidence: Medium · Evidence: 3 of 5. [Create Work Order]."],
    ["4. Empty Sensor State", "Empty State", "Factory A › Line 3 › M-18 › Sensors › Temp-04 — No Data Received: No data from Temp-04 in the selected time range. Check sensor connection or configuration. Last received — · Expected interval 60s. [View Diagnostics]."],
  ] },
  { domain: "Federation", blurb: "Coordinate data exchange and jobs across parties.", screens: [
    ["1. Workspace", "Normal State", "Federation Hub · Workspace Lending-02 — Active Jobs: J-8451 Data Exchange · 4 participants · In Progress · 09:33 · J-8447 Evidence Sync · 3 · Completed · 09:12 · J-8432 Policy Update · 2 · Completed · 08:55. Participants: Factory A Connected · Logistics Co. Connected · Lender X Connected · Insurer Y Connected."],
    ["2. Job Configuration", "Normal State", "New Job › Data Exchange — Steps: 1. Parties 2. Data 3. Policies 4. Review. Select Data: ☐ Machine Telemetry Real-time Required · ☐ Maintenance Records Daily Optional · ☐ Quality Reports Daily Optional · ☐ Energy Consumption Daily Optional. [Back] [Next]."],
    ["3. Progress", "Loading State", "Job J-8451 › Progress — Overall Progress 62% · Started 09:20 · ETA 09:45. Party Progress: Factory A 100% · Logistics Co. 98% · Lender X 62% · Insurer Y 0%."],
    ["4. Party Disconnected State", "Disconnected State", "Job J-8451 › Progress — Party Disconnected: Logistics Co. is disconnected. Data transfer paused. Last received 09:25. [Retry Connection]."],
  ] },
  { domain: "Lender", blurb: "Review borrower evidence and assess conditions.", screens: [
    ["1. Portfolio", "Normal State", "Lender X › Portfolio · All Borrowers · All Facilities — Acme Manufacturing · Term Loan A · $12.4M · Active · Medium · Bright Foods Ltd. · Revolver · $8.6M · Active · Low · Core Components · Term Loan B · $15.0M · Watch · High · Delta Packaging · Invoice Disc. · $4.2M · Active · Low."],
    ["2. Borrower Evidence", "Normal State", "Acme Manufacturing › Term Loan A — Evidence Summary: 16 Total Items · 12 Verified · 2 Pending · 2 Missing. Recent Evidence: Machine Telemetry (May 12) Verified 09:16 · Maintenance Records (May) Verified 09:10 · Financial Statement (Apr) Pending 09:05. Tabs: Evidence · Financials · Covenants · Notes."],
    ["3. Condition Review", "Warning State", "Acme Manufacturing › Covenant: OEE — Condition: Minimum OEE · Threshold 75% · Frequency Monthly · Current (May) 78.4% ✓ Compliant. Evidence: OEE Report (May) · Source Factory A (Federation) · Verified 09:15 · Confidence High. [Approve]."],
    ["4. Insufficient Evidence State", "Insufficient Evidence State", "Acme Manufacturing › Covenant: Debt/EBITDA — Insufficient Evidence: Not enough valid evidence to assess this condition. Upload additional documents or request data. Required 2 · Available 0. [Request Evidence]."],
  ] },
  { domain: "Governance", blurb: "Manage consent, permissions and audit trails.", screens: [
    ["1. Consent", "Normal State", "Governance › Consents · [+ New Consent] — C-10021 Lending Assessment · Telemetry, Maint. · 4 parties · Active · C-10018 Insurance Underwriting · Telemetry · 3 · Active · C-10012 Quality Certification · Quality Reports · 2 · Expired."],
    ["2. Permissions", "Normal State", "Governance › Permissions › Lending-02 — Lender X / Analyst: Read · Telemetry, Maint. · Active · Insurer Y / Underwriter: Read · Telemetry · Active · Auditor Z / Auditor: Read · All Evidence · Active · Visitor / Viewer: Read · None · Inactive."],
    ["3. Audit", "Normal State", "Governance › Audit · All Actions · All Parties · Last 7 Days — May 12, 09:33 Lender X / Analyst View OEE Report (May) Success · May 12, 09:28 Insurer Y / Underwriter Download Telemetry (May) Success · May 12, 09:15 Auditor Z / Auditor View Covenant Report Success · May 12, 08:57 System Consent Updated C-10021 Success."],
    ["4. Permission Denied State", "Permission Denied State", "Governance › Audit › Details — Permission Denied: You do not have permission to access this evidence or action. Contact your administrator for access."],
  ] },
];
const STATES23 = ["Normal State", "Loading State", "Warning State", "Disconnected State", "Empty State", "Insufficient Evidence State", "Permission Denied State"];
export function DeepViseWireframes() {
  const [sel, setSel] = useState("0-2");
  const [stateFilter, setStateFilter] = useState<string | null>(null);
  return <Dv n="23" title="23. Low-Fidelity Wireframe System" sub="Wireframes tested the information order and decision paths before color, photography or motion. Portfolio reconstruction: The original deck contains final prototype captures but not a complete wireframe set. Three framing questions, as printed: 1 — How does the system maintain persistent context? Global context (party, workspace, user, time) stays visible across all tasks and states. 2 — How is evidence organized and prioritized? Evidence is grouped by source and type, with status and recency clearly indicated. 3 — How can users recover from exceptions? Clear states, messages and next actions help users detect issues and recover quickly." label="DeepVise wireframe system — interactive rebuild of DeepVise_23">
    <div style={{ display: "grid", gap: 8 }}>
      {WIREFRAMES23.map((dom2, di) => (
        <div key={dom2.domain} style={{ display: "grid", gridTemplateColumns: "96px repeat(4,1fr)", gap: 7, alignItems: "stretch" }}>
          <div style={{ background: "#102A43", color: "#dbe5f0", borderRadius: 10, padding: "8px 9px" }}>
            <b style={{ color: "#fff", fontSize: 12 }}>{dom2.domain}</b>
            <p style={{ margin: "3px 0 0", fontSize: 9.5, lineHeight: 1.45, color: "#9fb2c8" }}>{dom2.blurb}</p>
          </div>
          {dom2.screens.map(([t, st, body], si) => {
            const key = `${di}-${si}`;
            return <button key={t} type="button" onClick={() => setSel(key)} aria-pressed={sel === key} style={{ textAlign: "left", background: "#fbfcfe", border: `1.5px solid ${sel === key ? "#2F80ED" : "#cfd9e4"}`, borderRadius: 9, padding: "7px 9px", cursor: "pointer", font: "inherit", opacity: stateFilter && st !== stateFilter ? 0.35 : 1 }}>
              <b style={{ fontSize: 11.3, color: "#0B1726" }}>{t}</b> <span className="tks-tag">{st}</span>
              <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#44536a", marginTop: 4 }}>{body}</span>
            </button>;
          })}
        </div>
      ))}
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>State legend — select to highlight matching screens</p>
    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{STATES23.map((st) => <button key={st} type="button" className="tks-chip" aria-pressed={stateFilter === st} onClick={() => setStateFilter((v) => (v === st ? null : st))}>{st}</button>)}</div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Note: Labels describe visible states tested in wireframes.</p>
  </Dv>;
}

/* ---------------- 25 — Brand / visual system ---------------- */
const COLORS25: Array<[string, string]> = [
  ["#0B1726", "Trust & Structure"], ["#102A43", "Surfaces & Panels"], ["#F6F8FB", "Canvas / Background"],
  ["#12C7D4", "Live Sensing / Real-time"], ["#2F80ED", "Information / Actions"], ["#6C5CE7", "Transformation / Finance"],
  ["#D99A2B", "Warning / Attention"], ["#D95C5C", "Critical / Risk"], ["#637083", "Muted / Secondary Text"],
];
const EVID25: Array<[string, string, string, number]> = [
  ["Validated", "Evidence meets acceptance criteria.", "Traceable and reviewed.", 128],
  ["Review", "Evidence under review.", "Additional checks in progress.", 23],
  ["Anomaly", "Evidence shows deviation.", "Investigate and assess impact.", 4],
  ["Critical", "Evidence indicates critical risk.", "Immediate action required.", 1],
];
export function DeepViseBrandSystem() {
  const [col, setCol] = useState(3);
  return <Dv n="25" title="From purple concept to product credibility" sub="DeepVise — Industrial AI for Real-World Decisions. Evolving our identity to reflect trust, precision and evidence—built for engineers and risk teams." label="DeepVise brand system — interactive rebuild of DeepVise_25">
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 9 }}>
        <div className="tks-card">
          <p className="tks-kicker" style={{ marginTop: 0 }}>Mark construction</p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ border: "1.5px dashed #637083", borderRadius: 8, padding: "8px 10px", fontWeight: 800, color: "#637083", fontSize: 15 }}>DV</span><span aria-hidden="true">→</span>
            <span style={{ border: "1.5px solid #102A43", borderRadius: 8, padding: "8px 10px", fontWeight: 800, fontSize: 15 }}><span style={{ color: "#102A43" }}>D</span><span style={{ color: "#12C7D4" }}>V</span></span><span aria-hidden="true">→</span>
            <span style={{ background: "#102A43", borderRadius: 9, padding: "8px 11px", fontWeight: 800, fontSize: 15 }}><span style={{ color: "#fff" }}>D</span><span style={{ color: "#12C7D4" }}>V</span></span>
          </div>
          <p style={{ margin: "6px 0 0", fontSize: 10.5, color: "#55606e" }}>Wireframe DV monogram → two-tone mark → app tile.</p>
        </div>
        <div className="tks-card">
          <p className="tks-kicker" style={{ marginTop: 0 }}>Typography</p>
          <p style={{ margin: 0, fontSize: 26, fontWeight: 700, lineHeight: 1 }}>Aa <span style={{ fontSize: 13, fontWeight: 600 }}>Inter</span></p>
          <p style={{ margin: "4px 0 0", fontSize: 11, color: "#44536a" }}>Neutral. Clear. Technical. For UI, headings and body. Numerals: 0 1 2 3 4 5 6 7 8 9</p>
          <p style={{ margin: "5px 0 0", fontFamily: "ui-monospace, monospace", fontSize: 11 }}>IBM Plex Mono — ASSET ID CT-7A-00023 · 14:32:18</p>
          <p style={{ margin: "3px 0 0", fontSize: 10.5, color: "#55606e" }}>For IDs, time, metrics and logs. Monospaced for alignment.</p>
        </div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 11, padding: "9px 11px", background: "#fff" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Color system &amp; roles — select a token</p>
          <div style={{ display: "grid", gap: 3 }}>
            {COLORS25.map(([hex, role], i) => <button key={hex} type="button" onClick={() => setCol(i)} aria-pressed={i === col} style={{ display: "flex", alignItems: "center", gap: 8, textAlign: "left", background: i === col ? "#eef1f6" : "transparent", border: "1px solid transparent", borderRadius: 7, padding: "3px 6px", cursor: "pointer", font: "inherit", fontSize: 11 }}>
              <span style={{ width: 16, height: 16, borderRadius: 4, background: hex, border: "1px solid #c3cedb", flex: "none" }} /><b>{hex}</b><span style={{ color: "#55606e" }}>{role}</span>
            </button>)}
          </div>
        </div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 11, padding: "9px 11px", background: "#fff" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Evidence status (text, not color alone)</p>
          <table className="tks-table"><tbody>{EVID25.map(([t, d1, d2, c]) => <tr key={t}><td><b>{t}</b></td><td style={{ fontSize: 10.5 }}>{d1} {d2}</td><td><b>{c}</b></td></tr>)}</tbody></table>
        </div>
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "linear-gradient(120deg,#3b2a7a,#6C5CE7)", color: "#e6e1ff", borderRadius: 11, padding: "9px 13px", fontSize: 11.5 }}>
          <b style={{ color: "#fff" }}>Before</b> — Original deck cover as printed: “DeepVise · Industrial AI for Real-World Decisions · Predict. Monitor. Optimize.” over a high-saturation purple wave (page 01). Caption: High-saturation purple, heavy effects, limited information hierarchy.
        </div>
        <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 12, padding: "11px 14px" }}>
          <p style={{ margin: 0, fontSize: 11, color: "#9fb2c8" }}>Overview · Assets · Monitoring · Diagnostics · Forecasting · Workflows · Reports · Data Explorer · Settings</p>
          <p style={{ margin: "7px 0 0", fontSize: 14 }}><b style={{ color: "#fff" }}>Compressor Train 7A</b> · ✓ Validated · Site A · <span style={{ fontFamily: "ui-monospace, monospace" }}>UTC 2025-05-20 14:32:18</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, marginTop: 8 }}>
            {[["Health Index", "92 /100 · Validated"], ["Remaining Life", "239 days · Review"], ["Vibration (RMS)", "2.18 mm/s · Validated"], ["Temperature", "71.4 °C · Review"], ["Anomaly Score", "0.18 /1.00 · Review"], ["Spectral Density", "10¹–10⁴ Hz · Current vs Baseline"]].map(([k, v]) => <div key={k} style={{ border: "1px solid #22344d", borderRadius: 8, padding: "6px 8px" }}><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{k}</span><br /><b style={{ color: "#fff", fontSize: 12 }}>{v}</b></div>)}
          </div>
          <svg viewBox="0 0 300 74" width="100%" height="74" role="img" aria-label="Vibration RMS over time, May 13 to 20, against baseline" style={{ marginTop: 8 }}>
            <line x1="0" y1="46" x2="300" y2="46" stroke="#3d5878" strokeDasharray="4 3" />
            <polyline points="0,44 40,42 80,43 120,40 160,38 200,34 240,30 280,26 300,24" fill="none" stroke="#12C7D4" strokeWidth="2" />
            <circle cx="272" cy="27" r="3.5" fill="#12C7D4" />
            <text x="196" y="16" fill="#dbe5f0" fontSize="8.5">2025-05-20 14:00 — RMS 2.18 · Baseline 1.75 mm/s</text>
            <text x="0" y="70" fill="#8fa5bd" fontSize="8.5">Vibration (RMS) over time · May 13–20</text>
          </svg>
          <p style={{ margin: "4px 0 0", fontSize: 10.5, color: "#9fb2c8" }}>Remaining Life Forecast: Median with 80% Confidence band, May ’25 – May ’26, Maintenance threshold marked. Live Waveform (Time Domain): Acceleration (g) −1.0 to 1.0 over 0–1.0 s.</p>
        </div>
      </div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Color usage</p><b>DO</b> Use color with semantic meaning and text labels.<br /><b style={{ color: "#b3352c" }}>DON’T</b> Rely on color alone without context.</div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Data visualization</p><b>DO</b> Show context: units, baselines and confidence.<br /><b style={{ color: "#b3352c" }}>DON’T</b> Show charts without scales or context.</div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Typography &amp; numbers</p><b>DO</b> Use clear hierarchy and monospaced numbers for alignment — ASSET ID CT-7A-00023 · 14:32:18 · 92 /100.<br /><b style={{ color: "#b3352c" }}>DON’T</b> Use decorative fonts or misaligned numbers.</div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source: Original DeepVise deck (pages 1–36) established the name and purple identity. This image: portfolio reconstruction of the new visual system. Photographic panels on the printed slide (machine, sensor, control room) are represented structurally.</p>
  </Dv>;
}

/* ---------------- 26 — Design system board ---------------- */
const TOKENS26: Array<[string, string]> = [
  ["ink #0B1726", "Ink"], ["navy #102A43", "Navy"], ["surface #F6F8FB", "Surface"], ["cyan #12C7D4", "Cyan"],
  ["blue #2F80ED", "Blue"], ["violet #6C5CE7", "Violet"], ["warning #D99A2B", "Warning"], ["critical #D95C5C", "Critical"], ["muted #637083", "Muted"],
];
const TYPE26: Array<[string, string, string]> = [
  ["Display 1", "32/40", "Semibold"], ["Heading 1", "24/32", "Semibold"], ["Heading 2", "20/28", "Semibold"],
  ["Body 1", "16/24", "Regular"], ["Body 2", "14/20", "Regular"], ["Caption", "12/16", "Regular"], ["Overline", "10/12", "Medium"],
];
export function DeepViseDesignSystem() {
  const [tok, setTok] = useState(4);
  const [rev, setRev] = useState(-5);
  const [cost, setCost] = useState(3);
  const [perm, setPerm] = useState(0);
  const PERMS = [["Full access", "Can view, edit and share."], ["View only", "Can view and export."], ["Restricted", "Limited data due to policy."], ["No access", "Insufficient permissions."]];
  return <Dv n="26" title="DeepVise Design System" sub="Five printed sections: Foundations (Evidence: Prototype pages 13–14) · Navigation & Actions (13–15) · Data Display (13–16) · Decision Components (15–16) · States & Accessibility (16–17)." label="DeepVise design system — interactive rebuild of DeepVise_26">
    <p style={{ margin: "0 0 2px", color: "#555" }}>All five printed sections are shown stacked, as on the board — the dark rail at left of the original carries the DeepVise wordmark and the section list.</p>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>1 · Foundations</p><p className="tks-kicker" style={{ marginTop: 0 }}>The visual and structural building blocks of the DeepVise system · Color tokens</p>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{TOKENS26.map(([t], i) => <button key={t} type="button" className="tks-chip" aria-pressed={i === tok} onClick={() => setTok(i)}>{t}</button>)}</div>
      <p style={{ margin: "8px 0 0" }}>Selected: <b>{TOKENS26[tok][0]}</b> ({TOKENS26[tok][1]}).</p>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Type scale (Inter)</p>
      <table className="tks-table"><tbody>{TYPE26.map(([t, s, w]) => <tr key={t}><td>{t}</td><td>{s}</td><td>{w}</td></tr>)}</tbody></table>
      <p style={{ margin: "8px 0 0" }}>Spacing scale (4px): xs · sm · md · lg · xl · 2xl · 3xl · 4xl (growing bars as printed). Radius: radius-xs 2px · radius-sm 4px · radius-md 8px · radius-lg 12px · radius-xl 16px · radius-2xl 20px. Border: border-default 1px · border-strong 1px #CBD5E1 · border-focus 2px #2F80ED. Elevation (light theme): elevation-0 none · elevation-1 0 1px 2px rgba(11,23,38,.06) · elevation-2 0 4px 8px rgba(11,23,38,.08) · elevation-3 0 12px 24px rgba(11,23,38,.12). Grid series: Series 1 #2F80ED · Series 2 #12C7D4 · Series 3 #6C5CE7 · Series 4 #D99A2B · Series 5 #637083 · Baseline #102A43 · Threshold + #D95C5C · Threshold − #D95C5C.</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>2 · Navigation & Actions</p><p className="tks-kicker" style={{ marginTop: 0 }}>Consistent navigation, primary actions and utility controls</p>
      <p style={{ margin: 0 }}>App shell as printed: DeepVise — Home · Monitor · Finance (active) · Risk · Reports · Admin · Search entities, accounts, reports… · 🔔 3 · ? · AL. Sub-nav: Overview · Cash &amp; Liquidity · Profitability · Forecasts · Commitments · Covenants.</p>
      <p style={{ margin: "8px 0 0" }}>Actions — Primary: [+ Create report ▾] · Secondary: [Export ▾] · Tertiary: [Share ▾] [⋮] · Destructive: [Delete ▾].</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>3 · Data Display</p><p className="tks-kicker" style={{ marginTop: 0 }}>Present information clearly with scannable patterns and meaningful context</p>
      <p style={{ margin: 0 }}>Filters: Date range Apr 1 – May 31, 2024 · Entity: All entities · Currency: USD · More filters ⌄. Metric cards — Cash Balance USD 128.4M ↑ 8.7% vs Apr 1 – Mar 31 · Evidence: Bank stmt. — EBITDA USD 42.7M ↓ −4.3% vs Apr 1 – Mar 31 · Evidence: GL — Covenant Headroom Total Leverage 1.35x ↑ 0.12x vs Apr 1 – Mar 31 · Evidence: Covenant calc.</p>
      <table className="tks-table" style={{ marginTop: 8 }}><thead><tr><th>Entity</th><th>Cash Balance (USD)</th><th>Change (%)</th><th>As of</th><th>Evidence</th><th>Updated</th></tr></thead><tbody>
        <tr><td>Northwind Ltd.</td><td>128,400,000</td><td>+8.7%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>2h ago ●</td></tr>
        <tr><td>BluePeak LLC</td><td>74,210,000</td><td>−1.2%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>4h ago ●</td></tr>
        <tr><td>Summit Ops Inc.</td><td>32,880,000</td><td>+3.4%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>6h ago ●</td></tr>
        <tr><td>Frontier Co.</td><td>16,640,000</td><td>−7.6%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>1d ago ●</td></tr></tbody></table>
      <p style={{ margin: "8px 0 0" }}>1–4 of 4 · page 1 · 20 / page. Tabs: Overview · Trends · Breakdown · Benchmarks (EBITDA (USD) Jan–May line as printed). Side panel — Entity details: Northwind Ltd. · Entity ID NW-1001 · Industry Manufacturing · Region North America · Relationship Borrower · [View full profile]. Dialog (Confirm): ⚠ Delete forecast? This action cannot be undone. [Cancel] [Delete]. Form (Edit): Report name* Monthly Liquidity Report · Frequency* Monthly · Owner* Alex Lee · [Save changes] [Cancel]. Alert banners: ℹ Data import completed successfully · ⚠ 3 accounts need attention due to unusual activity · ⚠ Covenant breach detected for 2 entities. Evidence chips: Bank stmt. May 31, 2024 ✓ Verified · GL May 31, 2024 ✓ Verified · Covenant calc. May 31, 2024 Calculated · Manual input May 31, 2024 Unverified.</p>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Permission badges — select</p>
      <Chips items={PERMS.map(([t]) => t)} value={perm} onPick={setPerm} />
      <p style={{ margin: "6px 0 0" }} aria-live="polite">{PERMS[perm][0]}: {PERMS[perm][1]}</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>4 · Decision Components</p><p className="tks-kicker" style={{ marginTop: 0 }}>Guide decisions with clear comparisons, thresholds and context</p>
      <p style={{ margin: 0 }}>KPI with threshold — Total Leverage <b>3.25x</b> · Threshold ≤ 3.50x · scale 2.0x – 4.0x · ✓ Within limit. Variance table: Revenue Actual 142.3M · Plan 135.0M · Variance +7.3M · +5.4% — EBITDA 42.7M · 45.0M · −2.3M · −5.1% — Op. Cash Flow 31.6M · 28.0M · +3.6M · +12.9%. Forecast range chart: Cash Balance (USD) Actual vs Forecast (P50), Jan–Jul. Risk heatmap (inherent): Impact High/Medium/Low × Likelihood Low/Medium/High, highest cell top-right. Decision list: ☐ Review covenant headroom · ☑ Approve cash sweep · ☐ Adjust forecast assumptions · ☐ Escalate to credit committee.</p>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>What-if input (as printed: Revenue −5%, Cost +3%)</p>
      <label style={{ display: "block" }}>Revenue change {rev}%
        <input type="range" min={-20} max={20} value={rev} onChange={(e) => setRev(Number(e.target.value))} aria-label="What-if revenue change percent" style={{ width: "100%" }} /></label>
      <label style={{ display: "block" }}>Cost change {cost}%
        <input type="range" min={-20} max={20} value={cost} onChange={(e) => setCost(Number(e.target.value))} aria-label="What-if cost change percent" style={{ width: "100%" }} /></label>
      <p style={{ margin: "6px 0 0" }} aria-live="polite">Inputs set to Revenue {rev}% · Cost {cost}% — [Recalculate impact]. (The printed board shows the inputs only; no recalculated result is printed, so none is invented here.)</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>5 · States & Accessibility</p><p className="tks-kicker" style={{ marginTop: 0 }}>Every interaction state is designed for clarity, recovery and access</p>
      <p style={{ margin: 0 }}>Button states: Normal · Hover · Focus · Selected/Active ✓ Primary · Disabled · Loading (spinner) Primary. Table row states: Normal · Hover · Selected (☑ Northwind Ltd. 128,400,000) · Disabled. Data and content states: Loading (skeleton) · Empty: No data found — Adjust filters or check permissions · Stale Data: Data is 2 days old, May 29, 2024 2d old, Refresh data · Missing Data: Data not available, Reason: Not reported · Confidence Interval: Actual vs out-of-range band.</p>
      <p style={{ margin: "8px 0 0" }}>Alert states: ⚠ Warning — Coverage below 95%, 6 items affected · ⚠ Critical — Covenant breach, 2 entities affected. Permission and connection states: Disconnected — You’re offline, Reconnecting…, Retry now · Permission Denied — Access denied, You don’t have permission to view this data · Restricted View — Some data hidden due to your role.</p>
      <p style={{ margin: "8px 0 0" }}>Accessibility indicators and examples: Focus Visible — Example, Meets 3:1 focus indicator contrast · Color Contrast — Aa Contrast ratio 7.31 AA · Non-Color Markers (Chart) — Series A / Series B, Pattern + marker · Crosshair (Chart) — Crosshair shows values on hover or focus, Apr · Screen Reader Label — &lt;button aria-label=”Export report as CSV”&gt;Export&lt;/button&gt;, Labels provide context for assistive tech · Keyboard Support — Tab, All interactions reachable via keyboard · Text Resize — 100% 150% 200%, UI remains usable at 200% zoom.</p></div>
  </Dv>;
}

/* ---------------- 27 — Dual-entry hero ---------------- */
const FACTORS27: Array<[string, number]> = [
  ["Die cushion pressure variation", 38], ["Hydraulic system temperature", 24], ["Cycle time variability", 17],
  ["Vibration – drive side", 12], ["Lubrication system pressure", 9],
];
export function DeepViseHeroEntry() {
  const [ws, setWs] = useState(0);
  return <Dv n="27" title="Private machine intelligence for earlier maintenance and more explainable risk review." sub="Monitor industrial assets. Improve a shared health model without pooling raw telemetry. Release only permissioned evidence." label="DeepVise dual entry hero — interactive rebuild of DeepVise_27">
    <div style={{ display: "flex", gap: 13, flexWrap: "wrap", alignItems: "center", background: "#0B1726", color: "#dbe5f0", borderRadius: 10, padding: "8px 13px", fontSize: 11.5, marginBottom: 10 }}>
      <b style={{ color: "#fff" }}>DeepVise</b><span>Product</span><span>How it works</span><span>Security &amp; privacy</span><span>Resources</span><span>About</span>
      <span style={{ marginLeft: "auto", border: "1px solid #12C7D4", color: "#12C7D4", borderRadius: 7, padding: "2px 9px", fontWeight: 700 }}>Role selection</span>
    </div>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }} role="group" aria-label="Workspace entry">
      <button type="button" className="tks-btn" aria-pressed={ws === 0} onClick={() => setWs(0)}>🏭 Enter Factory Workspace →</button>
      <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={ws === 1} onClick={() => setWs(1)}>🏛 Enter Lender Workspace →</button>
    </div>
    <div style={{ marginTop: 10 }} aria-live="polite">
      {ws === 0 ? <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "7px 13px", borderBottom: "1px solid #22344d", fontSize: 11, color: "#9fb2c8" }}>Overview — Factory A · Press Line 1 <span style={{ float: "right" }}>Signed in: Alex Morgan, Factory admin</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "118px 1fr", minHeight: 150 }}>
          <div style={{ borderRight: "1px solid #22344d", padding: "9px 10px", fontSize: 10.5, color: "#9fb2c8", display: "grid", gap: 5, alignContent: "start" }}>
            {["Overview", "Assets", "Health", "Evidence", "Insights", "Connections", "Workspaces", "Audit log", "Settings"].map((x, i) => <span key={x} style={i === 0 ? { color: "#12C7D4", fontWeight: 700 } : undefined}>{x}</span>)}
          </div>
          <div style={{ padding: "10px 13px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 10, alignItems: "start" }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ display: "inline-flex", width: 86, height: 86, borderRadius: "50%", background: "conic-gradient(#12C7D4 0deg 313deg, #22344d 313deg 360deg)", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ width: 64, height: 64, borderRadius: "50%", background: "#0B1726", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><b style={{ color: "#fff", fontSize: 19, lineHeight: 1 }}>87</b><span style={{ fontSize: 8.5, color: "#9fb2c8" }}>of 100 · Good</span></span>
                </span>
                <p style={{ margin: "4px 0 0", fontSize: 10, color: "#9fb2c8" }}>Asset health — Press Line 1</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 10.5, color: "#9fb2c8" }}>Anomaly trend · Last 7 days</p>
                <svg viewBox="0 0 150 52" width="100%" height="52" role="img" aria-label="Anomaly trend rising from low to high, May 7 to May 13">
                  <polyline points="4,42 28,38 52,36 76,28 100,24 124,14 146,8" fill="none" stroke="#D99A2B" strokeWidth="2" />
                  <text x="4" y="51" fill="#8fa5bd" fontSize="7.5">May 7 · Low</text><text x="112" y="51" fill="#8fa5bd" fontSize="7.5">May 13 · High</text>
                </svg>
                <p style={{ margin: "2px 0 0", fontSize: 11 }}>Next maintenance window: <b style={{ color: "#fff" }}>May 20 – May 24</b> · In 7 days · View recommendations →</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 10.5, color: "#9fb2c8" }}>Top contributing factors · Last 7 days</p>
                {FACTORS27.map(([t, v]) => <div key={t} style={{ marginTop: 4 }}>
                  <span style={{ fontSize: 10, color: "#dbe5f0" }}>{t} — {v}%</span>
                  <span style={{ display: "block", height: 5, borderRadius: 3, background: "#22344d", marginTop: 2 }}><span style={{ display: "block", height: 5, borderRadius: 3, background: "#2F80ED", width: `${v * 2.4}%` }} /></span>
                </div>)}
              </div>
            </div>
            <p style={{ margin: "9px 0 0", fontSize: 11, borderTop: "1px solid #22344d", paddingTop: 7 }}>Evidence status, All connections: <b style={{ color: "#fff" }}>Verified 328 · Pending 54 · Needs review 12</b> · View evidence log →<br />🛡 Raw telemetry remains inside participating factory environments. Data stays local. Evidence is permissioned. You stay in control. <span style={{ color: "#8fa5bd" }}>(The dashboard sits over a factory photograph on the original — represented structurally.)</span></p>
          </div>
        </div>
      </div> :
      <div className="tks-detail"><b>Lender Workspace entry</b> — as printed on this slide, the lender path releases only permissioned evidence: Evidence status — Verified, pending, or needs review—always traceable and auditable (the same ledger counts as the factory panel: Verified 328 · Pending 54 · Needs review 12). No lender dashboard is pictured on this slide, so none is reconstructed here.</div>}
    </div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>01 · Capability</p><b>Monitor industrial assets.</b>
      <p style={{ margin: "4px 0 0", color: "#555" }}>Continuously track equipment health with local models and real-time anomaly detection—no raw data leaves your environment. Evidence status: Verified, pending, or needs review—always traceable and auditable. Explore capability →</p></div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>DeepVise is a 2024 FinTechathon competition prototype. This site and its screens are demos and reconstructions. © 2024 DeepVise.</p>
  </Dv>;
}

/* ---------------- 28 — Role & permission selection ---------------- */
const ROLE28: Array<{ name: string; tagline: string; yes: string; no: string; cta: string }> = [
  { name: "Factory Workspace", tagline: "Operate assets and contribute evidence.", yes: "local asset telemetry, machine-health evidence, maintenance and federation participation.", no: "derived lender signals, borrower context, policy review and decision history.", cta: "Continue as Factory" },
  { name: "Lender Workspace", tagline: "Assess risk and make lending decisions.", yes: "permissioned derived signals, borrower context, policy review and decision history.", no: "raw asset telemetry, machine-health streams, maintenance events.", cta: "Continue as Lender" },
];
const STATES28 = ["Default (no selection)", "Hover (Factory card)", "Keyboard Focus (Lender card)", "Organization Unavailable", "Permission Denied"];
export function DeepViseRoleSelection() {
  const [role, setRole] = useState(1);
  const [perm, setPerm] = useState(false);
  const [st, setSt] = useState(0);
  const cur = ROLE28[role];
  return <Dv n="28" title="28. Role and Permission Selection — Choose a workspace" sub="Your role changes the decisions you can make and the evidence you are permitted to see." label="DeepVise role selection — interactive rebuild of DeepVise_28">
    <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 10 }}>
      {[["Organization", "Acme Manufacturing Ltd. ✓ Verified"], ["Authentication", "SSO (SAML 2.0) · Not signed in"], ["Region", "North America · Data residency: US"], ["Need help?", "View access guide"]].map(([k, v]) => <span key={k} style={{ background: "#102A43", color: "#dbe5f0", borderRadius: 9, padding: "6px 12px", fontSize: 11.5 }}><span style={{ color: "#9fb2c8" }}>{k} </span><b style={{ color: "#fff" }}>{v}</b></span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "196px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#F6F8FB", border: "1px solid #dde4ec", borderRadius: 11, padding: "10px 12px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Case study — left rail</p>
        <p style={{ margin: 0, fontSize: 11, lineHeight: 1.55 }}><b>Narrative:</b> Clarify the product's dual-sided entry and communicate access scope before authentication or workspace loading.</p>
        <p style={{ margin: "6px 0 0", fontSize: 11, lineHeight: 1.55 }}><b>Solution:</b> The role selection screen makes data boundaries explicit so users choose the workspace that matches their responsibilities—and only see what they're permitted to access.</p>
        <p style={{ margin: "6px 0 0", fontSize: 11, lineHeight: 1.55 }}><b>Outcome:</b> Reduces onboarding confusion · Sets accurate expectations up front · Prevents access to out-of-scope data · Establishes trust through transparency.</p>
      </div>
      <div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      {ROLE28.map((r, i) => <button key={r.name} type="button" className={`tks-card${i === role ? " is-on" : ""}`} aria-pressed={i === role} onClick={() => setRole(i)}>
        <b style={{ fontSize: 14 }}>{r.name}</b><p style={{ color: "#555", margin: "4px 0" }}>{r.tagline}</p>
        <p style={{ margin: "4px 0" }}>✓ <b>Accessible data:</b> {r.yes}</p>
        <p style={{ margin: "4px 0" }}>✕ <b>Unavailable data:</b> {r.no}</p>
        <span className="tks-btn" style={{ display: "inline-block", marginTop: 4 }}>{r.cta} →</span></button>)}
    </div>
    <div className="tks-detail" aria-live="polite">Selected: <b>{cur.name}</b>. Below the cards, as printed: 👤 <b>Administrator access</b> — Manage parties, schemas, consent, audit and policies.
      <p style={{ margin: "8px 0 0" }}><button type="button" className="tks-btn tks-btn--ghost" aria-expanded={perm} onClick={() => setPerm((v) => !v)}>🛡 Permission details and evidence boundaries {perm ? "▴" : "▾"}</button></p>
      {perm && <p style={{ margin: "6px 0 0" }}>Understand how data access is scoped for each workspace and why certain data is unavailable. Factory sees {ROLE28[0].yes} Lender sees {ROLE28[1].yes}</p>}
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Other states (as printed)</p>
    <Chips items={STATES28} value={st} onPick={setSt} />
    <div className="tks-detail" aria-live="polite">{st === 3 ? "Organization unavailable — ⚠ Please contact your system administrator. Both workspace cards and Continue buttons are disabled." : st === 4 ? "Permission denied — ✕ Access denied: You do not have permission to access any workspace. Both workspace cards are disabled." : `${STATES28[st]} — the two workspace cards are shown in this state; Version 1 (left rail): Early concept with minimal detail and less explicit data boundaries.`}</div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>♿ Keyboard order: Factory, Lender, Administrator, Permission details. Screen-reader labels are descriptive for each control.</p>
      </div>
    </div>
  </Dv>;
}

/* ---------------- 29 — Factory command center ---------------- */
const CRITICAL29: Array<[string, number, number, string, number, string, string, string, string]> = [
  ["P-01-042", 22, -18, "Hydraulic leak", 0.86, "High", "6.2 h · High", "Alex Rivera", "Inspect hydraulic pump and seals"],
  ["P-01-017", 27, -14, "Spindle vibration", 0.78, "High", "4.5 h · High", "Jamie Lee", "Check spindle bearings"],
  ["P-02-006", 38, -9, "Gearbox wear", 0.71, "High", "2.1 h · Medium", "Morgan Patel", "Replace output bearing"],
  ["P-01-058", 54, -6, "Motor overheating", 0.62, "Medium", "1.4 h · Medium", "Taylor Brooks", "Clean cooling vents"],
  ["P-02-011", 61, -3, "Belt misalignment", 0.58, "Medium", "0.9 h · Low", "Jordan Kim", "Align drive belt"],
  ["P-01-033", 66, -2, "Lubrication degradation", 0.55, "Medium", "0.6 h · Low", "Casey Nguyen", "Lubricate guides"],
  ["P-02-019", 70, 0, "Minor vibration", 0.41, "Low", "0.3 h · Low", "Riley Chen", "Monitor"],
];
const WORK29: Array<[string, string, string, string, string, string, string]> = [
  ["W-5621", "P-01-042", "Repair hydraulic leak", "High", "Alex Rivera", "In progress", "May 16, 13:00"],
  ["W-5617", "P-01-017", "Inspect spindle bearings", "High", "Jamie Lee", "In progress", "May 16, 12:30"],
  ["W-5624", "P-02-006", "Replace output bearing", "Medium", "Morgan Patel", "Scheduled", "May 16, 16:00"],
  ["W-5602", "P-01-058", "Clean motor cooling vents", "Medium", "Taylor Brooks", "Scheduled", "May 16, 17:00"],
];
const PANEL29: React.CSSProperties = { background: "#0e1c2e", border: "1px solid #22344d", borderRadius: 11, padding: "10px 12px" };
export function DeepViseCommandCenter() {
  const [row, setRow] = useState(0);
  const cur = CRITICAL29[row];
  return <Dv n="29" title="Factory Command Center — 3 assets need attention before the next production window." sub="All times shown in local time (UTC-05:00) · Demo data. Filters (persistent, 5 active): Organization DeepVise Industries · Plant P-01 North Plant · Line All Lines · Shift Day Shift (06:00 – 14:00) · Time window May 10 – May 16, 2025 · Reset filters. Header: 10:24 AM · May 16, 2025 · OM. Left nav: Overview · Assets · Work Orders · Alerts (3) · Analytics · Reports · Models · Data · Settings." label="DeepVise factory command center — interactive rebuild of DeepVise_29">
    <div style={{ background: "#0B1726", borderRadius: 13, padding: "13px 15px", color: "#dbe5f0" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Fleet health trend · May 10 – May 16, 2025 · 1 hr granularity · Drill down →</p>
        <svg viewBox="0 0 300 92" width="100%" height="92" role="img" aria-label="Average health score declining from about 80 on May 10 to about 58 on May 16; the May 16 segment is incomplete">
          <defs><pattern id="dv29hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="transparent" /><line x1="0" y1="0" x2="0" y2="6" stroke="#D99A2B" strokeWidth="1.6" /></pattern></defs>
          <line x1="0" y1="18" x2="300" y2="18" stroke="#22344d" /><line x1="0" y1="48" x2="300" y2="48" stroke="#22344d" /><line x1="0" y1="76" x2="300" y2="76" stroke="#22344d" />
          <polyline points="4,20 44,24 84,28 124,36 164,44 204,52 244,60" fill="none" stroke="#12C7D4" strokeWidth="2" />
          <rect x="244" y="8" width="54" height="66" fill="url(#dv29hatch)" opacity="0.5" />
          <polyline points="244,60 268,64 296,68" fill="none" stroke="#D99A2B" strokeWidth="2" strokeDasharray="4 3" />
          <text x="4" y="90" fill="#8fa5bd" fontSize="8">May 10 · ~80</text><text x="238" y="90" fill="#D99A2B" fontSize="8">May 16 · ~58 · Incomplete</text>
        </svg>
        <p style={{ margin: "4px 0 0", fontSize: 11, lineHeight: 1.55 }}>Fleet distribution (by asset count): Healthy (80–100) 42 · 56% · Watch (60–79) 18 · 24% · Warning (40–59) 9 · 12% · Critical (0–39) 3 · 4% · No data 3 · 4% · <b style={{ color: "#fff" }}>Total assets 75</b>. The hatched May 16 segment is excluded from trend.</p></div>
      <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Predicted downtime exposure (next 72h) · Drill down →</p>
        <p style={{ margin: 0, fontSize: 20 }}><b style={{ color: "#fff" }}>15.7 h</b> <span style={{ fontSize: 12 }}>Total predicted downtime across 3 assets</span></p>
        <div style={{ display: "grid", gap: 5, marginTop: 7 }}>
          {[["Critical", 10.7, 68, "#D95C5C"], ["Warning", 3.1, 20, "#D99A2B"], ["Watch", 1.3, 8, "#2F80ED"], ["No data", 0.6, 4, "#637083"]].map(([k, h, pc, c]) => <div key={k as string} style={{ display: "grid", gridTemplateColumns: "58px 1fr 74px", gap: 8, alignItems: "center", fontSize: 11 }}>
            <span>{k}</span><span style={{ height: 8, borderRadius: 4, background: "#22344d" }}><span style={{ display: "block", height: 8, borderRadius: 4, background: c as string, width: `${pc as number}%` }} /></span><span>{h} h ({pc}%)</span>
          </div>)}
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 11, lineHeight: 1.55, color: "#9fb2c8" }}>Cumulative curve rises to 15.7 h at 72h. Definition: Predicted downtime is the sum of expected asset downtime that may impact production in the next 72 hours.</p></div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Attention required (3) — assets at critical risk of impacting production</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
      {[["P-01-042", "Hydraulic Press #2 · Line 2 · Est. downtime 6.2 h · Impact High · Owner: Alex Rivera · Open work order W-5621 →"], ["P-01-017", "CNC Mill #3 · Line 1 · Est. downtime 4.5 h · Impact High · Owner: Jamie Lee · Open work order W-5617 →"], ["P-02-006", "Conveyor Drive #1 · Line 3 · Est. downtime 2.1 h · Impact Medium · Owner: Morgan Patel · Open work order W-5624 →"]].map(([id, body]) => <div key={id} style={PANEL29}><b style={{ color: "#fff" }}>{id}</b><p style={{ margin: "3px 0 0", fontSize: 11, lineHeight: 1.5 }}>{body}</p></div>)}
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Critical assets — Showing 7 of 7 · Drill down → (select a row)</p>
    <div style={{ overflowX: "auto", borderRadius: 10 }}><table className="tks-table" style={{ color: "#22303f" }}><thead><tr><th>Machine ID</th><th>Health score (0–100)</th><th>Change vs 24h ago</th><th>Likely issue</th><th>Confidence</th><th>Production impact (next 72h)</th><th>Owner</th><th>Next action</th></tr></thead>
      <tbody>{CRITICAL29.map((r, i) => <tr key={r[0]} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#1d2f47" : undefined, color: i === row ? "#e8eef5" : undefined }}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2] === 0 ? "—" : `↓ ${Math.abs(r[2])}`}</td><td>{r[3]}</td><td>{r[4].toFixed(2)} · {r[5]}</td><td>{r[6]}</td><td>{r[7]}</td><td>{r[8]}</td></tr>)}</tbody></table></div>
    <p style={{ margin: "8px 0 0", fontSize: 11.5 }} aria-live="polite">Selected row: <b style={{ color: "#fff" }}>{cur[0]}</b> — {cur[3]} · Production impact {cur[6]} · Owner: {cur[7]} · Next action: {cur[8]}. View all alerts (3) →</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
      <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Active maintenance work — Showing 4 of 4 · View all work orders →</p>
        {WORK29.map((w) => <p key={w[0]} style={{ margin: "4px 0", fontSize: 11.5 }}><b style={{ color: "#fff" }}>{w[0]}</b> · {w[1]} · {w[2]} · {w[3]} · {w[4]} · {w[5]} · ETA {w[6]}</p>)}
        <p className="tks-kicker" style={{ margin: "6px 0 0" }}>Active maintenance work excludes completed and cancelled orders. Demo data.</p></div>
      <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>System context · View data quality →</p>
        <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.55 }}>Last sensor update <b style={{ color: "#fff" }}>10:23 AM</b> · May 16, 2025 (most recent time any asset reported sensor data) · Data completeness <b style={{ color: "#fff" }}>96.2%</b> past 24 hours (percent of expected sensor data received) · Model <b style={{ color: "#fff" }}>DV-HM-0.9.3</b>, deployed May 15, 2025, 09:00 (current health model version in production) · Active maintenance work <b style={{ color: "#fff" }}>4</b> work orders in progress.</p></div>
    </div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Definitions: Health score, Change, Confidence, Production impact. 7 rows · Demo data. Source and evidence boundary: Original deck pages 11–12 support monitoring, prediction and risk-warning capabilities. This screen is reconstructed. Production method: Chart data generated deterministically. Figma: Units: hours (h). Missing-data treatment: Incomplete data excluded from trend and completeness calculation.</p>
  </Dv>;
}

/* ---------------- 30 — Multi-factory asset overview ---------------- */
const FACTORIES30: Array<{ name: string; status: string; detail: string; health: string; faults: string; recency: string; evaluation: string; model: string }> = [
  { name: "Factory A", status: "Active", detail: "Contributing to federation · v2.1 · 1k–5k · < 24h · v3.2.1 · ● Good", health: "72% Good · 21% Fair · 5% Poor · 2% Critical", faults: "Bearing 34% · Misalignment 24% · Lubrication 18% · Balance 12% · Other 12%", recency: "< 24h · Fresh", evaluation: "✓ Verified — Metrics within expected range", model: "v3.2.1 · Deployed" },
  { name: "Factory B", status: "Active", detail: "Contributing to federation · v2.1 · 5k–10k · < 24h · v3.2.0 · ● Fair", health: "58% Good · 28% Fair · 9% Poor · 5% Critical", faults: "Bearing 31% · Misalignment 26% · Lubrication 16% · Electrical 14% · Other 13%", recency: "< 24h · Fresh", evaluation: "✓ Verified — Metrics within expected range", model: "v3.2.0 · Deployed" },
  { name: "Factory C", status: "Active", detail: "Contributing to federation · v2.1 · 1k–5k · < 48h · v3.1.4 · ● Good", health: "68% Good · 22% Fair · 7% Poor · 3% Critical", faults: "Bearing 38% · Lubrication 20% · Misalignment 17% · Balance 13% · Other 12%", recency: "< 48h · Slightly stale", evaluation: "⚠ Warning — Some metrics below threshold", model: "v3.1.4 · Deployed" },
  { name: "Factory D", status: "Invited", detail: "Not yet participating · — · — · — · — · No data", health: "No data — not yet participating.", faults: "No data.", recency: "No data", evaluation: "No data", model: "—" },
  { name: "Factory E", status: "Pending", detail: "Setup in progress · — · — · — · — · No data", health: "No data — setup in progress.", faults: "No data.", recency: "No data", evaluation: "No data", model: "—" },
];
export function DeepViseMultiFactory() {
  const [f, setF] = useState(0);
  const segBar = (health: string) => {
    const parts = health.split("·").map((x) => x.trim());
    const cols: Record<string, string> = { Good: "#12C7D4", Fair: "#2F80ED", Poor: "#D99A2B", Critical: "#D95C5C" };
    return <span style={{ display: "flex", height: 9, borderRadius: 5, overflow: "hidden", gap: 1 }}>{parts.map((pt) => {
      const m = pt.match(/(\d+)%\s*(\w+)/);
      if (!m) return null;
      return <span key={pt} style={{ width: `${m[1]}%`, background: cols[m[2]] ?? "#637083" }} title={pt} />;
    })}</span>;
  };
  const rows: Array<[string, (x: (typeof FACTORIES30)[number]) => ReactNode]> = [
    ["Normalized health distribution — Share of assets in each condition band", (x) => <>{segBar(x.health)}<span style={{ display: "block", marginTop: 3 }}>{x.health}</span></>],
    ["Fault-class mix (top 4) — Share of recent detections by fault class", (x) => x.faults],
    ["Update recency — Time since last model or data update", (x) => x.recency],
    ["Evaluation status — Model performance on local holdout (aggregated)", (x) => x.evaluation],
    ["Current model version — Deployed model for inference", (x) => x.model],
    ["Participation status — Contribution to federation", (x) => x.status === "Active" ? "✓ Contributing — Actively training and sharing model updates" : x.status],
  ];
  return <Dv n="30" title="Multi-Factory Asset Overview — Federation participation summary" sub="Same feature schema, different machine samples. Demo data — synthetic and aggregated." label="DeepVise multi-factory overview — interactive rebuild of DeepVise_30">
    <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 10 }}>
      {[["3", "Active parties (All contributing)"], ["1", "Feature schema v2.1 (shared)"], ["3", "Participating datasets (Different machine samples)"], ["< 24h", "Average data freshness (Across all parties)"]].map(([v, k]) => <span key={k} style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 9, padding: "6px 12px", fontSize: 11.5 }}><b style={{ color: "#fff", fontSize: 14 }}>{v}</b> {k}</span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "172px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 6 }}>
        {FACTORIES30.map((x, i) => <button key={x.name} type="button" onClick={() => setF(i)} aria-pressed={i === f} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === f ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "7px 10px", cursor: "pointer", font: "inherit" }}>
          <b style={{ fontSize: 12 }}>{x.name}</b> <span className="tks-tag">{x.status}</span>
          <span style={{ display: "block", fontSize: 10, color: "#55606e", marginTop: 2 }}>{x.detail}</span>
        </button>)}
      </div>
      <div>
        <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th style={{ width: "30%" }}>Cross-factory comparison (normalized)</th>{FACTORIES30.slice(0, 3).map((x) => <th key={x.name}>{x.name}</th>)}</tr></thead>
          <tbody>{rows.map(([label, get]) => <tr key={label}><td style={{ fontSize: 10.8 }}>{label}</td>{FACTORIES30.slice(0, 3).map((x) => <td key={x.name} style={{ fontSize: 11 }}>{get(x)}</td>)}</tr>)}</tbody></table></div>
        <div style={{ display: "flex", gap: 8, alignItems: "stretch", marginTop: 8 }}>
          <p style={{ margin: 0, flex: 1, fontSize: 11, color: "#44536a" }}>Compare participation and model coverage without exposing local telemetry. Normalized bands — Not raw counts · Privacy by design — No raw telemetry shared. Selected: <b>{FACTORIES30[f].name}</b> ({FACTORIES30[f].status}).</p>
          <div style={{ border: "1.5px dashed #637083", borderRadius: 10, padding: "7px 11px", fontSize: 11, maxWidth: 300, background: "#F6F8FB" }}>🔒 <b>Field not available</b> — Raw telemetry, exact counts and identifiers are not available by design. This protects partner privacy and complies with data agreements.</div>
        </div>
      </div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>🔒 Aggregated condition only; raw telemetry remains local. No raw machine data or telemetry is shared across parties. [Learn more]</p>
  </Dv>;
}

/* ---------------- 31 — Machine health P-01-042 ---------------- */
const SUBSYS31: Array<[string, string, number, string]> = [
  ["Vibration", "⚠ Critical", 58, "↓ −15"], ["Temperature", "⚠ Warning", 72, "↓ −6"], ["Lubrication", "✓ Good", 85, "↑ +2"],
  ["Electrical", "✓ Good", 82, "↑ +1"], ["Pressure", "✓ Good", 78, "→ 0"],
];
const EVENTS31: Array<[string, string]> = [
  ["May 3 14:20", "Vibration anomaly detected"],
  ["May 5 09:15", "Investigation opened"],
  ["May 7, 2025 10:00 (chart tooltip)", "Health Score 74 · Confidence 0.76 · Data Completeness 95%"],
  ["May 8 08:00", "Planned maintenance"],
];
export function DeepViseMachineHealth() {
  const [ev, setEv] = useState(2);
  const [sub, setSub] = useState(0);
  const [conf, setConf] = useState(0.78);
  return <Dv n="31" title="Machine Health — P-01-042" sub="Condition has declined since the last validated maintenance event. Machine ID P-01-042 · Plant / Line North Plant / Line 3 · Status ⚠ Warning · Owner Alex Johnson · Last Update May 9, 2025 09:41 · Date range May 2 – May 9, 2025 · Auto-refresh: On · Updated: May 9, 2025 09:41. Left nav: Overview · Fleet · Machines · Alerts · Work Orders · Analytics · Diagnostics · Reports · Settings." label="DeepVise machine health P-01-042 — interactive rebuild of DeepVise_31">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Health Score</p><p style={{ margin: 0, fontSize: 22 }}><b style={{ color: "#D99A2B" }}>72</b> /100</p><p style={{ margin: "2px 0 0" }}>Trend (7 days) ↓ −8</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Data Completeness</p><p style={{ margin: 0, fontSize: 22 }}><b style={{ color: TEAL }}>96%</b></p><p style={{ margin: "2px 0 0" }}>Complete sensors 48 / 50</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Model</p><p style={{ margin: 0, fontSize: 16 }}><b>DV-HM-0.9.3</b></p><p style={{ margin: "2px 0 0" }}>Model updated May 6, 2025</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Score Definition</p><p style={{ margin: 0 }}>Health Score is a weighted index (0–100) across 5 subsystems: vibration, temperature, lubrication, electrical, pressure. Higher score = better condition. Learn more ↗</p></div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Health chart, May 2 – May 9 — Health Score (0–100) · 7-Day Moving Average · Baseline (Apr 4 – May 1, 2025) · Thresholds (source: DV standard v2.1): Good (80–100) · Warning (60–80) · Critical (0–60). Select an event</p>
    <div style={{ border: "1px solid #dde4ec", borderRadius: 11, padding: "8px 10px 2px", background: "#fff" }}>
      <svg viewBox="0 0 640 168" width="100%" height="168" role="img" aria-label="Health score chart May 2 to May 9 with threshold bands and event markers">
        <rect x="40" y="8" width="592" height="44" fill="#e7f6ee" /><rect x="40" y="52" width="592" height="44" fill="#fdf3e0" /><rect x="40" y="96" width="592" height="64" fill="#fbeaea" />
        <text x="4" y="34" fontSize="9" fill="#0e7c4a">Good 80–100</text><text x="4" y="78" fontSize="9" fill="#9a6b12">Warning 60–80</text><text x="4" y="124" fontSize="9" fill="#b03a3a">Critical 0–60</text>
        <line x1="40" y1="52" x2="632" y2="52" stroke="#b9c6d4" strokeDasharray="4 3" /><line x1="40" y1="96" x2="632" y2="96" stroke="#b9c6d4" strokeDasharray="4 3" />
        <polyline points="40,40 124,42 209,44 293,46 378,47 462,48 547,49 632,50" fill="none" stroke="#637083" strokeWidth="1.4" strokeDasharray="5 3" />
        <polyline points="40,34 124,36 209,52 293,63 378,72 462,80 547,84 632,86" fill="none" stroke="#2F80ED" strokeWidth="2.2" />
        {[[124, "May 3"], [293, "May 5"], [462, "May 7"], [547, "May 8"]].map(([x, d], i) => <g key={d as string} onClick={() => setEv(i)} style={{ cursor: "pointer" }}>
          <circle cx={x as number} cy={[36, 63, 80, 84][i]} r={ev === i ? 6 : 4.5} fill={ev === i ? "#D99A2B" : "#fff"} stroke="#2F80ED" strokeWidth="2" />
          <text x={(x as number) - 14} y="166" fontSize="9" fill="#55606e">{d}</text>
        </g>)}
        <text x="40" y="166" fontSize="9" fill="#55606e">May 2</text><text x="606" y="166" fontSize="9" fill="#55606e">May 9</text>
      </svg>
      <p style={{ margin: "0 0 6px", fontSize: 11 }} aria-live="polite"><b>{EVENTS31[ev][0]}</b> — {EVENTS31[ev][1]}{ev === 2 ? " (chart tooltip, as printed)" : ""}</p>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Subsystem status — select a row</p>
    <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th>Subsystem</th><th>Status</th><th>Score /100</th><th>Trend (7 days)</th></tr></thead>
      <tbody>{SUBSYS31.map((r, i) => <tr key={r[0]} onClick={() => setSub(i)} style={{ cursor: "pointer", background: i === sub ? "#eef1f6" : undefined }}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>)}</tbody></table></div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Sensor Coverage</p>
        <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 10 }}><span style={{ display: "inline-flex", width: 54, height: 54, borderRadius: "50%", background: "conic-gradient(#0e7c86 0deg 346deg, #e3e9f0 346deg 360deg)", alignItems: "center", justifyContent: "center", flex: "none" }}><span style={{ width: 38, height: 38, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12 }}>96%</span></span><span><b>96% Complete</b> — 48 / 50 sensors reporting: 48 Complete · 2 Missing · 0 Stale. View sensor map.</span></p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Signal Freshness</p><p style={{ margin: 0 }}>Vibration 1 min ago ✓ · Temperature 1 min ago ✓ · Lubrication 2 min ago ✓ · Electrical 1 min ago ✓ · Pressure 1 min ago ✓</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Likely Fault</p><p style={{ margin: 0 }}><b>Bearing-related impulse pattern</b> — Impacting drive-end bearing (DE).</p>
        <label style={{ display: "block", marginTop: 8 }}>Confidence {conf.toFixed(2)} — drag across the printed 0.80 RUL threshold
          <input type="range" min={0} max={1} step={0.01} value={conf} onChange={(e) => setConf(Number(e.target.value))} aria-label="Model confidence, printed value 0.78" style={{ width: "100%" }} /></label>
        <p style={{ margin: "4px 0 0" }} aria-live="polite">Evidence level: Moderate. {conf < 0.8 ? "ℹ RUL is not shown because confidence is below the 0.80 threshold for this model. (Printed at the printed confidence of 0.78.)" : "At or above 0.80 the printed rule would permit an RUL display — no RUL value is printed on the slide, so none is shown here either."}</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Next Maintenance</p><p style={{ margin: 0 }}><b>May 16, 2025</b> · Planned — Type Preventive maintenance · Scope Inspect drive-end bearing.</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Recommended Actions</p><p style={{ margin: 0 }}>Open sensor diagnostics ↗ · Review recommendation ↗ · Create work order ↗</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Model Card</p><p style={{ margin: 0 }}>Model DV-HM-0.9.3 · Model type Health Index · Trained on Mar 12, 2025 · Input signals Vib, Temp, Lub, Elec, Press · Update cadence Weekly · View model documentation ↗</p></div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Data &amp; Evidence Status: ✓ All critical sensors Reporting · ✓ No stale data (All &lt; 5 min old) · ✓ Missing sensors 2 of 50 (4%) · ⚠ Confidence 0.78 (Moderate) · ℹ Evidence boundary: See notes. Source and evidence boundary: Original deck pages 19–24 support health-index construction and signal indicators. The page structure and demo values are reconstructed. Selected subsystem: {SUBSYS31[sub][0]} — {SUBSYS31[sub][1]}, score {SUBSYS31[sub][2]}, trend {SUBSYS31[sub][3]}.</p>
  </Dv>;
}

/* ---------------- 32 — Sensor diagnostics ---------------- */
const TRACKS32: Array<[string, string, string]> = [
  ["1 · Vibration RMS (Acc.)", "m/s² (RMS) · Normalized (MAD)", "Missing: 0.0% — flat near 0 until ~09:21, then a dense impulsive burst inside the selected anomaly window, settling after ~09:28; a dashed missing-data gap follows."],
  ["2 · Motor Temperature", "°C · Normalized (MAD)", "Missing: 2.0% — stays near 0 across the whole window; the alert was not driven by temperature."],
  ["3 · Bearing Temperature", "°C · Normalized (MAD)", "Missing: 1.5% — mild elevation inside the anomaly window only."],
  ["4 · Load / Pressure", "bar · Normalized (MAD)", "Missing: 0.0% — small ripple inside the anomaly window."],
  ["5 · Vibration Envelope Spectrum (Spectrogram)", "Normalized (dB) · 1–5,000 Hz", "Frequency 100–5k Hz over 09:10–09:40 (dB scale −40 to 10): quiet blue field, then a bright yellow/red band concentrated ~09:22–09:28 at low-to-mid frequencies — the impulsive pattern."],
];
const FEATURES32: Array<[string, number, string, boolean]> = [
  ["Spectral Kurtosis", 2.76, "> 2.00", true],
  ["Negative Entropy", 2.31, "> 2.00", true],
  ["Smoothness (1 − R90/R10)", -2.05, "< −1.80", true],
  ["Gini Impurity", 1.92, "> 1.80", true],
];
export function DeepViseSensorDiagnostics() {
  const [view, setView] = useState(1);
  const [track, setTrack] = useState(0);
  const [feat, setFeat] = useState(0);
  const [cursor, setCursor] = useState(16);
  const views = ["Raw", "Normalized", "Baseline"];
  const timeLabel = `09:${String(10 + cursor).padStart(2, "0")}:00`;
  return <Dv n="32" title="Sensor Diagnostics" sub="The alert was triggered by a repeated impulsive pattern, not by temperature alone. Mode: Overlay · Window: 30 min · Permissions: Viewer · Dataset: Synthetic demonstration." label="DeepVise sensor diagnostics — interactive rebuild of DeepVise_32">
    <Chips items={views.map((v) => `View: ${v}`)} value={view} onPick={setView} />
    <div className="tks-card" style={{ marginTop: 10 }}><p style={{ margin: 0 }}>Unit normalization: Each signal normalized by robust baseline (MAD) · Sampling window: 30 min ending 2025-05-15 10:00 · Missing data: Motor temp: 2.0%, Bearing temp: 1.5% · Current operating condition: Speed: 1,780 rpm · Load: 72% · Pressure: 5.6 bar · Ambient: 24 °C · Baseline period: 2025-05-08 09:00 to 2025-05-08 09:30 · Selected anomaly window: 09:24:30 – 09:27:30 (3.0 min) · Missing data: Gaps shown, not imputed.</p></div>
    <label style={{ display: "block", marginTop: 10 }}>Cursor {timeLabel} / 09:40:00 — playback cursor over the 09:10–09:40 window (printed cursor at 09:26:00)
      <input type="range" min={0} max={30} value={cursor} onChange={(e) => setCursor(Number(e.target.value))} aria-label="Diagnostics cursor position in minutes after 09:10" style={{ width: "100%" }} /></label>
    <p style={{ margin: "4px 0 0" }} aria-live="polite">Cursor at {timeLabel}{cursor >= 14 && cursor <= 18 ? " — inside the selected anomaly window (09:24:30 – 09:27:30)." : "."} Transport as printed: ▶ ⏮ ⏭ · 1× · Cursor toggle on · Reset.</p>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Signal tracks ({views[view]} view) — shared axis 09:10–09:40, shaded band = selected anomaly window 09:24:30–09:27:30, line = cursor</p>
    <div style={{ display: "grid", gap: 6 }}>
      {TRACKS32.map(([t, unit, desc], i) => {
        const cx = (cursor / 30) * 300;
        const paths = [
          "M0,19 L108,19 L146,19 L150,6 L154,30 L158,4 L162,28 L166,8 L170,24 L174,18 L196,17 L228,17 M236,17 L262,17",
          "M0,18 L60,17.5 L120,18.5 L180,18 L240,18.5 L300,18",
          "M0,18 L140,18 L152,13 L164,11 L176,18 L300,18",
          "M0,18 L142,18 L150,15 L158,21 L166,15 L174,19 L300,18",
          "",
        ];
        return <button key={t} type="button" onClick={() => setTrack(i)} aria-pressed={i === track} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === track ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "6px 10px", cursor: "pointer", font: "inherit" }}>
          <span style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}><b>{t}</b><span style={{ color: "#7c8798" }}>{unit}</span></span>
          {i < 4 ? <svg viewBox="0 0 300 36" width="100%" height="36" role="img" aria-label={desc} style={{ display: "block", marginTop: 3 }}>
            <rect x="145" y="0" width="30" height="36" fill="#D99A2B" opacity="0.16" />
            <path d={paths[i]} fill="none" stroke={i === 0 ? "#D95C5C" : "#2F80ED"} strokeWidth="1.6" />
            <line x1={cx} y1="0" x2={cx} y2="36" stroke="#0B1726" strokeWidth="1" strokeDasharray="3 2" />
          </svg> : <span style={{ display: "block", height: 36, borderRadius: 5, marginTop: 3, position: "relative", background: "linear-gradient(180deg,#274b8f,#3a6bc2 45%,#274b8f)", overflow: "hidden" }}>
            <span style={{ position: "absolute", left: "48%", top: 7, width: "10%", height: 22, borderRadius: "50%", background: "radial-gradient(closest-side,#f6d743,#e2543a 70%,transparent)", opacity: 0.95 }} />
            <span style={{ position: "absolute", left: `${(cursor / 30) * 100}%`, top: 0, bottom: 0, width: 1, background: "#0B1726" }} />
            <span style={{ position: "absolute", right: 4, top: 2, fontSize: 8.5, color: "#cfe0ff" }}>dB −40 … 10 · 100–5k Hz</span>
          </span>}
          <span style={{ display: "block", fontSize: 10, lineHeight: 1.45, color: "#55606e", marginTop: 3 }}>{desc}</span>
        </button>;
      })}
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Selected Event — Probable Bearing Issue</p>
        <p style={{ margin: 0 }}>Time (local) 2025-05-15 09:24:30 – 09:27:30 (3.0 min) · Alert ID ALT-2025-05-15-0924.</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Threshold Source</p>
        <p style={{ margin: 0 }}>Rule Set: Bearing Health Monitor v2.3 · Threshold Type: Dynamic (Baseline + Adaptive) · Trigger Condition: Weighted normalized score &gt; 1.80 for ≥ 2 of 3 consecutive windows.</p>
        <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Derived Features (Normalized z-score) — select</p>
        <Chips items={FEATURES32.map(([t]) => t)} value={feat} onPick={setFeat} />
        <p style={{ margin: "6px 0 0" }} aria-live="polite"><b>{FEATURES32[feat][0]}</b>: value {FEATURES32[feat][1].toFixed(2)} · threshold {FEATURES32[feat][2]} · <span style={{ color: "#b3352c", fontWeight: 700 }}>Exceeded</span></p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Data Quality</p>
        <p style={{ margin: 0 }}>Signal Completeness (window) 97.9% · Good — Sensor Health: All sensors OK · Good — Outlier Ratio (window) 1.8% · Good — Data Gaps: See missing indicators.</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Comparison Baseline</p>
        <p style={{ margin: 0 }}>Baseline Period 2025-05-08 09:00 to 09:30 · Operating Condition Match: Speed ±5% · Load ±10% · ✓ Matched · Baseline Window Length 30 min · Baseline Data Quality 98.6% · Good.</p>
        <p style={{ margin: "8px 0 0", color: "#555" }}>Left nav as printed: Explorer · Alerts · Assets · Signals · Baselines · Reports · Settings · Help.</p></div>
    </div>
  </Dv>;
}

/* ---------------- Dispatcher ---------------- */
export function deepViseChapterFor(file: string): ReactNode | null {
  if (file.startsWith("DeepVise_01")) return <DeepViseDashboardHero />;
  if (file.startsWith("DeepVise_02")) return <DeepViseProductFlow />;
  if (file.startsWith("DeepVise_13")) return <DeepViseChallenge />;
  if (file.startsWith("DeepVise_15")) return <DeepViseBlueprint />;
  if (file.startsWith("DeepVise_24")) return <DeepViseConcepts />;
  if (file.startsWith("DeepVise_03")) return <DeepViseProcessBoard />;
  if (file.startsWith("DeepVise_04")) return <DeepViseTrustSignal />;
  if (file.startsWith("DeepVise_05")) return <DeepViseDemoVideo />;
  if (file.startsWith("DeepVise_06")) return <DeepVisePressFailure />;
  if (file.startsWith("DeepVise_07")) return <DeepViseFailureLoop />;
  if (file.startsWith("DeepVise_08")) return <DeepViseVisibilityGap />;
  if (file.startsWith("DeepVise_09")) return <DeepVisePrivacyBarrier />;
  if (file.startsWith("DeepVise_10")) return <DeepViseStakeholders />;
  if (file.startsWith("DeepVise_11")) return <DeepViseProfiles />;
  if (file.startsWith("DeepVise_12")) return <DeepViseSynthesis />;
  if (file.startsWith("DeepVise_14")) return <DeepViseNorthStar />;
  if (file.startsWith("DeepVise_16")) return <DeepViseIA />;
  if (file.startsWith("DeepVise_17")) return <DeepViseFactoryFlow />;
  if (file.startsWith("DeepVise_18")) return <DeepViseLenderFlow />;
  if (file.startsWith("DeepVise_19")) return <DeepViseDataToCredit />;
  if (file.startsWith("DeepVise_20")) return <DeepViseScopeTimeline />;
  if (file.startsWith("DeepVise_21")) return <DeepViseRiskRegister />;
  if (file.startsWith("DeepVise_22")) return <DeepViseEarlySketches />;
  if (file.startsWith("DeepVise_23")) return <DeepViseWireframes />;
  if (file.startsWith("DeepVise_25")) return <DeepViseBrandSystem />;
  if (file.startsWith("DeepVise_26")) return <DeepViseDesignSystem />;
  if (file.startsWith("DeepVise_27")) return <DeepViseHeroEntry />;
  if (file.startsWith("DeepVise_28")) return <DeepViseRoleSelection />;
  if (file.startsWith("DeepVise_29")) return <DeepViseCommandCenter />;
  if (file.startsWith("DeepVise_30")) return <DeepViseMultiFactory />;
  if (file.startsWith("DeepVise_31")) return <DeepViseMachineHealth />;
  if (file.startsWith("DeepVise_32")) return <DeepViseSensorDiagnostics />;
  return null;
}
