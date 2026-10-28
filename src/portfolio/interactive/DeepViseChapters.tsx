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
  return <div className={`tks${dark ? " tks--dark" : ""}`} style={dark ? { background: "#0B1726", padding: "22px 26px" } : { background: "#F6F8FB", padding: "22px 26px" }} role="region" aria-label={label}>
    <div className="tks-head"><span><b>◆ DeepVise</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 32</span><span className="tks-brand" style={{ fontSize: 12 }}>DEEPVISE</span></div>
    {title ? <h3 style={{ fontSize: 29, lineHeight: 1.18, margin: "2px 0 6px" }}>{title}</h3> : null}
    {sub ? <p className="tks-lede" style={{ fontSize: 13.5, lineHeight: 1.5, margin: "0 0 12px" }}>{sub}</p> : null}
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
  const miniChart = (pts: string, color: string, dash?: string) => <svg viewBox="0 0 120 30" style={{ width: "100%", height: 26, display: "block" }} aria-hidden="true"><polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" />{dash ? <line x1="0" y1={dash} x2="120" y2={dash} stroke="#D95C5C" strokeWidth="1" strokeDasharray="3 3" /> : null}</svg>;
  const panelBox: React.CSSProperties = { background: "#0e1c2e", borderRadius: 11, padding: "9px 10px", color: "#dbe5f0" };
  const seg = (vals: number[]) => <span style={{ display: "flex", height: 6, borderRadius: 3, overflow: "hidden", flex: 1 }}><span style={{ width: `${vals[0]}%`, background: "#2fbf9b" }} /><span style={{ width: `${vals[1]}%`, background: "#D99A2B" }} /><span style={{ width: `${vals[2]}%`, background: "#D95C5C" }} /></span>;
  const panels: ReactNode[] = [
    <div key="p1">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4 }}>
        {[["Assets", "1,248", "#fff"], ["Operating", "1,102", "#fff"], ["Attention", "37", "#D99A2B"], ["Critical", "9", "#D95C5C"]].map(([k, v, c]) => <span key={k} style={{ background: "#132a42", borderRadius: 6, padding: "4px 6px" }}><span style={{ fontSize: 8.5, color: "#8fa5bd", display: "block" }}>{k}</span><b style={{ fontSize: 13, color: c }}>{v}</b></span>)}
      </div>
      <p style={{ margin: "7px 0 3px", fontSize: 9.5, color: "#8fa5bd" }}>Asset health by category</p>
      {[["Trucks", 612, [78, 13, 9]], ["Excavators", 328, [72, 16, 12]], ["Loaders", 210, [64, 20, 16]], ["Generators", 98, [58, 22, 20]]].map(([k, v, s]) => <span key={k as string} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9.5, marginTop: 3 }}><span style={{ width: 52, flex: "none" }}>{k}</span>{seg(s as number[])}<span style={{ width: 24, textAlign: "right" }}>{v}</span></span>)}
      <p style={{ margin: "7px 0 3px", fontSize: 9.5, color: "#8fa5bd" }}>Attention queue (37)</p>
      {[["TRK-1047", "Engine misfire", "High", "2m"], ["EXC-2091", "Hydraulic pressure drop", "High", "4m"], ["LD-3083", "Brake wear high", "Med", "6m"], ["GEN-4022", "High exhaust temp", "High", "8m"], ["TRK-1120", "Battery voltage low", "Med", "10m"]].map(([a, b, s2, t]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", fontSize: 9.3, padding: "2.5px 0", borderTop: "1px solid #1b2c44" }}><span><b style={{ color: "#fff" }}>{a}</b> · {b}</span><span style={{ color: s2 === "High" ? "#f0a3a3" : "#e8c98a" }}>{s2} · {t}</span></span>)}
    </div>,
    <div key="p2">
      <p style={{ margin: 0, fontSize: 9.5 }}><b style={{ color: "#fff" }}>EXC-2091 · Excavator</b> <span style={{ float: "right", background: "#5a2320", color: "#f0a3a3", borderRadius: 4, padding: "0 5px", fontSize: 8.5 }}>Anomaly detected · 14:32</span></p>
      <p style={{ margin: "6px 0 1px", fontSize: 9.3, color: "#8fa5bd" }}>Hydraulic pressure (bar)</p>{miniChart("0,24 20,20 40,21 60,16 80,14 100,7 120,4", "#12C7D4", "22")}
      <p style={{ margin: "3px 0 1px", fontSize: 9.3, color: "#8fa5bd" }}>Pump vibration (mm/s)</p>{miniChart("0,24 30,23 60,22 90,16 120,3", "#12C7D4", "10")}
      <p style={{ margin: "3px 0 1px", fontSize: 9.3, color: "#8fa5bd" }}>Oil temperature (°C)</p>{miniChart("0,24 30,22 60,18 90,12 120,6", "#2F80ED")}
      <p style={{ margin: "6px 0 2px", fontSize: 9.5, color: "#8fa5bd" }}>Evidence (4 items)</p>
      {[["Vibration spike", "14:56:12 · 2.1 MB", "High"], ["Pressure above range", "14:55:48 · 1.8 MB", "High"], ["Oil temp rising", "14:54:31 · 1.2 MB", "Medium"], ["Maintenance history", "Last 30 days · PDF", "Info"]].map(([a, b, s2]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", fontSize: 9.3, padding: "2.5px 0", borderTop: "1px solid #1b2c44" }}><span>{a}<br /><span style={{ color: "#8fa5bd" }}>{b}</span></span><span style={{ color: s2 === "High" ? "#f0a3a3" : "#e8c98a" }}>{s2}</span></span>)}
    </div>,
    <div key="p3">
      <p style={{ margin: 0, fontSize: 9.5 }}><b style={{ color: "#fff" }}>Remaining 01:42 · Round 12 of 30</b> <span style={{ float: "right", background: "#3d2f6e", color: "#c9bdf5", borderRadius: 4, padding: "0 5px", fontSize: 8.5 }}>Running</span></p>
      <p style={{ margin: "6px 0 2px", fontSize: 9.3, color: "#8fa5bd" }}>Global model progress — 40%</p>
      <span style={{ display: "block", height: 7, borderRadius: 4, background: "#1b2c44" }}><span style={{ display: "block", height: 7, borderRadius: 4, background: "#6C5CE7", width: "40%" }} /></span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, marginTop: 6, fontSize: 9.3 }}>
        <span>Rounds<br /><b style={{ color: "#fff" }}>12/30</b></span><span>Participants<br /><b style={{ color: "#fff" }}>3/3</b></span><span>Convergence<br /><b style={{ color: "#fff" }}>0.62 ↓</b></span><span>Updates<br /><b style={{ color: "#fff" }}>36</b></span>
      </div>
      <p style={{ margin: "7px 0 2px", fontSize: 9.5, color: "#8fa5bd" }}>Participant progress</p>
      {[["P1", "Party A · Auto Parts Co.", "2.1M", "34%"], ["P2", "Party B · Industrial Motors", "1.7M", "33%"], ["P3", "Party C · Equip Finance", "1.9M", "33%"]].map(([a, b, c2, d]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", fontSize: 9.3, padding: "2.5px 0", borderTop: "1px solid #1b2c44" }}><span><b style={{ color: "#b3a6f5" }}>{a}</b> {b}</span><span>{c2} · <span style={{ color: "#2fbf9b" }}>Synced</span> · {d}</span></span>)}
      <p style={{ margin: "6px 0 1px", fontSize: 9.3, color: "#8fa5bd" }}>Model performance (validation)</p>
      <svg viewBox="0 0 120 30" style={{ width: "100%", height: 26, display: "block" }} aria-hidden="true"><polyline points="0,24 30,16 60,11 90,7 120,5" fill="none" stroke="#6C5CE7" strokeWidth="1.8" /><polyline points="0,26 30,22 60,19 90,16 120,14" fill="none" stroke="#637083" strokeWidth="1.4" strokeDasharray="3 3" /></svg>
      <p style={{ margin: "3px 0 0", fontSize: 9.3, color: "#8fa5bd" }}>🔒 No raw data shared. Only model updates are exchanged.</p>
    </div>,
    <div key="p4" style={{ background: "#f4f7fa", margin: "-9px -10px", padding: "9px 10px", borderRadius: 11, color: "#33465e" }}>
      <p style={{ margin: 0, fontSize: 9.5, color: "#7c8798" }}>As of May 15, 2025</p>
      {[["TRK-1047 Truck", "125,000", "2.35%", "↓ 0.28pp", "Approve"], ["EXC-2091 Excavator", "240,000", "4.12%", "↑ 0.85pp", "Review"], ["LD-3083 Loader", "180,000", "2.08%", "↓ 0.12pp", "Approve"], ["GEN-4022 Generator", "95,000", "3.01%", "↑ 0.30pp", "Review"], ["TRK-1120 Truck", "110,000", "1.76%", "↓ 0.15pp", "Approve"]].map(([a, b, c2, d, e]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", fontSize: 9.3, padding: "3px 0", borderTop: "1px solid #dde4ec" }}><span><b style={{ color: "#0B1726" }}>{a}</b></span><span>{b} · {c2} · {d} <b style={{ color: e === "Approve" ? "#1d9e57" : "#b97f16" }}>{e}</b></span></span>)}
      <div style={{ background: "#fff", border: "1px solid #dde4ec", borderRadius: 8, padding: "6px 8px", marginTop: 7, fontSize: 9.3 }}>
        <b style={{ color: "#0B1726" }}>EXC-2091 — Review explained</b>
        <span style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}><span>Payment behavior</span><b style={{ color: "#b3352c" }}>+0.60pp</b></span>
        <span style={{ display: "flex", justifyContent: "space-between" }}><span>Utilization trend</span><b style={{ color: "#b3352c" }}>+0.35pp</b></span>
        <span style={{ display: "flex", justifyContent: "space-between" }}><span>Maintenance risk</span><b style={{ color: "#b3352c" }}>+0.28pp</b></span>
        <span style={{ display: "flex", justifyContent: "space-between" }}><span>Model mean 1.20% · Total</span><b>4.12%</b></span>
        <p style={{ margin: "4px 0 0", color: "#7c8798" }}>Evidences (2): Maintenance anomaly May 15, 14:56 · High — Utilization spike May 15, 14:32 · Medium. Model Fleet Risk v2.3 · SHAP · Run R-20250515-07</p>
      </div>
    </div>,
  ];
  return <Dv n="02" title="" label="DeepVise product flow — interactive rebuild of DeepVise_02" dark>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, alignItems: "stretch" }}>
      {FLOW02.map((x, i) => <div key={x.name} onClick={() => setP(i)} style={{ ...panelBox, border: `1.5px solid ${i === p ? "#12C7D4" : "#22344d"}`, cursor: "pointer" }}>
        <b style={{ fontSize: 12, color: "#fff" }}>{x.name}</b>
        <div style={{ marginTop: 6 }}>{panels[i]}</div>
        <span style={{ display: "block", borderTop: "1px solid #22344d", marginTop: 7, paddingTop: 5, fontSize: 10, color: "#12C7D4" }}>{icons[i]} {x.foot}</span>
      </div>)}
    </div>
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
      <div>
      <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7, margin: "0 0 8px" }}>
        {STAGES03.map(([t], i) => <span key={t} style={{ display: "flex", alignItems: "center" }}>
          <span style={{ flex: 1, borderTop: i ? "2.5px solid #2F80ED" : "2.5px solid transparent" }} />
          <span style={{ width: 21, height: 21, borderRadius: "50%", background: i === s ? "#2F80ED" : "#fff", border: "2px solid #2F80ED", color: i === s ? "#fff" : "#2F80ED", fontSize: 11, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span>
          <span style={{ flex: 1, borderTop: i < 4 ? "2.5px solid #2F80ED" : "2.5px solid transparent" }} />
        </span>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7 }}>
        {STAGES03.map(([t, brief, , deliv], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "8px 9px", cursor: "pointer", font: "inherit" }}>
          <b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}</b>
          <span style={{ display: "block", color: "#55606e", fontSize: 9.8, lineHeight: 1.45, margin: "3px 0 6px" }}>{brief}</span>
          {i === 0 ? <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#33465e" }}>
            <span style={{ display: "block", background: "#0B1726", color: "#fff", borderRadius: 6, padding: "5px 7px" }}><b>01 Challenge &amp; Direction</b><br />Enable data-driven lending without sharing raw data.</span>
            <span style={{ display: "block", marginTop: 5 }}><b>Market Context</b> — SME lending is underserved due to limited, siloed data · Lenders face high risk and operational costs · Privacy and compliance limit data sharing.</span>
            <span style={{ display: "block", marginTop: 4 }}><b>User Pain Points</b> — Incomplete visibility across multiple sources · Manual review is slow and inconsistent · Hard to quantify risk and monitor changes.</span>
            <span style={{ display: "block", background: "#0B1726", color: "#fff", borderRadius: 6, padding: "5px 7px", marginTop: 5 }}><b>Challenge Direction</b><br />Design a privacy-preserving solution that enables continuous, explainable enterprise health assessment at scale.</span>
          </span> : i === 1 ? <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#33465e" }}>
            <span style={{ display: "block" }}><b>Information Architecture</b></span>
            {["Home", "Assessment", "Analytics", "Portfolio", "Settings"].map((x) => <span key={x} style={{ display: "inline-block", background: "#eef1f6", border: "1px solid #d5dde8", borderRadius: 4, padding: "0 5px", margin: "2px 2px 0 0" }}>{x}</span>)}
            <span style={{ display: "block", marginTop: 5, border: "1px solid #d5dde8", borderRadius: 6, padding: "5px 7px", textAlign: "center" }}>Enterprise Side ⇄ <b>Federated Assessment</b> ⇄ Lender Side</span>
            <span style={{ display: "block", marginTop: 4 }}>Original UI (Deck) beside Reconstructed UI (Prototype) — two framed thumbnails as printed.</span>
          </span> : i === 2 ? <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#33465e" }}>
            <span style={{ display: "block", background: "#0B1726", color: "#fff", borderRadius: 6, padding: "5px 7px", textAlign: "center", fontFamily: "ui-monospace,monospace" }}>HI = w₁·S + w₂·P + w₃·B + w₄·C + w₅·E</span>
            {["S Structure", "P Performance", "B Behavior", "C Compliance", "E External"].map((x) => <span key={x} style={{ display: "inline-block", background: "#eef1f6", border: "1px solid #d5dde8", borderRadius: 4, padding: "0 5px", margin: "2px 2px 0 0" }}>{x}</span>)}
            <span style={{ display: "block", marginTop: 5 }}><b>FedAvg vs FedMA</b> — FedAvg: Medium heterogeneity · Accuracy 0.78 · Slower · Lower comm. cost | FedMA: High · 0.86 · Faster · Slightly higher.</span>
            <span style={{ display: "block", marginTop: 4, border: "1px solid #d5dde8", borderRadius: 6, padding: "5px 7px" }}><b>FATE Workflow (Reconstructed)</b> — Data Holder A → FATE Party A ⇄ FATE Party B ← Data Holder B · Model Training (Federated) · Secure Aggregation (No Raw Data).</span>
            <span style={{ display: "block", marginTop: 5 }}>
              <svg viewBox="0 0 120 44" style={{ width: "100%", height: 40, display: "block" }} role="img" aria-label="ANSYS structural simulation thumbnail, rainbow stress model"><defs><radialGradient id="dv03ansys" cx="38%" cy="42%" r="75%"><stop offset="0%" stopColor="#e33" /><stop offset="28%" stopColor="#f90" /><stop offset="52%" stopColor="#3c6" /><stop offset="78%" stopColor="#26c" /><stop offset="100%" stopColor="#124" /></radialGradient></defs><path d="M8 34 C14 14 34 6 58 8 C88 10 108 18 112 30 C100 38 30 40 8 34 Z" fill="url(#dv03ansys)" /><path d="M20 30 C40 22 78 20 100 28" stroke="#0B1726" strokeWidth="1" fill="none" opacity="0.35" /></svg>
              <b>ANSYS Simulation (Structural Reliability)</b>, scale 0 Min – 1,000 Max.
            </span>
          </span> : i === 3 ? <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#33465e" }}>
            <span style={{ display: "block", border: "1px solid #d5dde8", borderRadius: 6, padding: "5px 7px" }}>
              <b>Prototype Overview</b><br />Overall Health Index <b style={{ fontSize: 13 }}>68.4</b> · Medium · Trend (30 Days) +6.7 Better · Enterprises 128 · Assessments 256
              <svg viewBox="0 0 100 18" style={{ width: "100%", height: 15, display: "block", marginTop: 2 }} aria-hidden="true"><polyline points="0,14 25,12 50,9 75,6 100,3" fill="none" stroke="#2F80ED" strokeWidth="1.6" /></svg>
              <span style={{ color: "#7c8798" }}>Health Index Trend May 1 – May 29</span>
              {[["Global Tech Co.", "72.1", "+8.2", "May 29"], ["Sunrise Manufacturing", "65.3", "+3.1", "May 29"], ["Green Energy Ltd.", "58.7", "−1.3", "May 28"], ["Pacific Retail Inc.", "41.2", "−4.7", "May 28"]].map(([a, b, c2, d]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "1.5px 0" }}><span>{a}</span><span>{b} · {c2} · {d} · Completed</span></span>)}
            </span>
            <span style={{ display: "block", marginTop: 4 }}>Nav: Overview · Assessment · Analytics · Portfolio · Alerts · Reports · Settings.</span>
          </span> : <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#33465e" }}>
            <span style={{ display: "block", background: "#0B1726", color: "#fff", borderRadius: 6, padding: "6px 7px", textAlign: "center" }}>▶ Demo Video (Reconstructed)<br /><span style={{ color: "#8fa5bd" }}>0:00 / 2:48</span></span>
            <span style={{ display: "block", marginTop: 5 }}><b>Technical Limitations</b> — POC with simulated and sample data · Model accuracy depends on data quality · Not a production ML system · Performance not benchmarked at scale.</span>
            <span style={{ display: "block", marginTop: 4 }}><b>Publication Evidence Audit</b> — Deck (pp. 1–36) Original Slide deck Verified · Prototype Reconstructed Screens &amp; flows Verified · ANSYS Reconstructed Simulation result Verified · FATE Workflow Reconstructed Workflow diagram Verified · Code Snippets Original Key implementation Verified.</span>
          </span>}
          <span style={{ display: "block", borderTop: "1px solid #e6ecf2", marginTop: 6, paddingTop: 4, fontSize: 8.8, color: "#2F80ED", fontWeight: 700 }}>Deliverables + Evidence — {deliv}</span>
        </button>)}
      </div>
      </div>
      <div style={{ background: "#fff", color: "#33465e", border: "1px solid #dde4ec", borderRadius: 11, padding: "11px 13px" }}>
        <p style={{ margin: 0, fontSize: 10.5, fontWeight: 800, letterSpacing: "0.1em", color: "#0e7c86" }}>🛡 SCOPE &amp; VERIFIED OUTCOME</p>
        <p style={{ fontSize: 11, lineHeight: 1.55, margin: "7px 0 0" }}><b style={{ color: "#0e7c86" }}>✓ Verified Outcome</b> — A fully functional front-end prototype with model workflow evidence and publication audit.</p>
        <p style={{ fontSize: 11, lineHeight: 1.55, margin: "6px 0 0" }}><b style={{ color: "#0e7c86" }}>Scope Boundary:</b> This project is a competition submission. It is a proof-of-concept and not a production system.</p>
        <p style={{ fontSize: 11, lineHeight: 1.55, margin: "6px 0 0" }}><b style={{ color: "#0e7c86" }}>Out of Scope:</b> No access to real lender systems · No production deployment · No claims of autonomous lending.</p>
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
const art04 = (i: number) => <svg viewBox="0 0 120 52" style={{ width: "100%", height: 50, display: "block", margin: "2px 0 4px" }} aria-hidden="true">
  <g fill="none" stroke="#33465e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {i === 0 ? <><path d="M14 42 L14 22 L34 12 L34 42" /><path d="M34 26 L58 18 L58 42 L14 42" /><rect x="40" y="24" width="10" height="8" /><path d="M66 42 L66 20 C66 14 78 12 84 18 L104 26 L104 42 Z" /><circle cx="84" cy="34" r="5" /><path d="M8 42 L112 42" stroke="#12C7D4" /></>
      : i === 1 ? <><path d="M16 44 L16 26 L38 14 L60 26 L104 26 L104 44 Z" /><path d="M28 44 L28 32 L44 32 L44 44 M28 32 L44 44 M44 32 L28 44" /><rect x="58" y="32" width="30" height="9" /><path d="M96 8 a8 8 0 1 1 -0.1 0 M96 12 L96 18" stroke="#0e7c86" /></>
      : i === 2 ? <><circle cx="60" cy="26" r="17" /><path d="M43 26 a17 12 0 0 1 34 0 a17 12 0 0 1 -34 0" /><path d="M60 9 C52 16 52 36 60 43 C68 36 68 16 60 9 Z" /><circle cx="26" cy="14" r="4" /><circle cx="94" cy="14" r="4" /><circle cx="26" cy="40" r="4" /><circle cx="94" cy="40" r="4" /><path d="M29 16 L46 21 M91 16 L74 21 M29 38 L46 31 M91 38 L74 31" stroke="#2F80ED" /></>
      : i === 3 ? <><path d="M38 6 L78 12 L78 28 C78 40 68 46 58 49 C48 46 38 40 38 28 Z" /><path d="M47 26 L55 34 L70 19" stroke="#6C5CE7" strokeWidth="2.6" /><path d="M86 16 L104 16 L104 44 L86 44 Z" /><path d="M90 23 L100 23 M90 29 L100 29 M90 35 L97 35" stroke="#6C5CE7" /></>
      : <><circle cx="52" cy="16" r="8" /><path d="M34 44 C36 32 42 28 52 28 C62 28 68 32 70 44" /><path d="M78 20 L104 20 M78 28 L104 28 M78 36 L96 36" stroke="#2F80ED" /><path d="M100 12 l6 6 M106 12 l-6 6" stroke="#D99A2B" /></>}
  </g>
</svg>;
export function DeepViseTrustSignal() {
  const [s, setS] = useState(1);
  const [decision, setDecision] = useState<string | null>(null);
  const icons = ["🏭", "🔒", "🧠", "📤", "👤"];
  return <Dv n="04" title="Machine health becomes a trust signal." sub="Raw telemetry stays inside the factory. Protected model updates improve a shared health model. Only permissioned, minimal evidence reaches credit review." label="DeepVise trust signal — interactive rebuild of DeepVise_04">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "stretch" }}>
      {TRUST04.map(([t, sub, body], i) => <div key={t} style={i === 1 ? { border: "2px dashed #0e7c86", borderRadius: 13, padding: 5, background: "rgba(14,124,134,0.05)" } : { padding: 5 }}>
        <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ width: "100%", height: "100%", textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit" }}>
          <span style={{ fontSize: 15 }}>{icons[i]}</span>
          {art04(i)}
          <b style={{ display: "block", fontSize: 12, margin: "4px 0 2px", color: "#0B1726" }}>{t}</b>
          <span style={{ display: "block", color: "#0e7c86", fontWeight: 700, fontSize: 10.5 }}>{sub}</span>
          <span style={{ display: "block", color: "#44536a", fontSize: 10.3, lineHeight: 1.5, marginTop: 4 }}>{body}</span>
          {i === 1 ? <span style={{ display: "block", marginTop: 5, fontSize: 9.5, fontWeight: 800, color: "#0e7c86" }}>LOCAL BOUNDARY — raw data stays inside</span> : null}
          {i === 3 ? <span style={{ display: "inline-block", marginTop: 5, background: "#efeaff", color: "#6C5CE7", borderRadius: 5, padding: "0 7px", fontWeight: 800, fontSize: 9.5 }}>PROPOSED</span> : null}
          {i === 4 ? <span style={{ display: "flex", gap: 4, marginTop: 7 }} onClick={(e) => e.stopPropagation()}>
            {["approve", "modify", "reject"].map((d) => <span key={d} role="button" tabIndex={0} aria-pressed={decision === d} onClick={() => setDecision(d)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setDecision(d); } }} style={{ border: `1.5px solid ${decision === d ? "#2F80ED" : "#c3cedb"}`, background: decision === d ? "#eef4fa" : "#fff", borderRadius: 999, padding: "1px 9px", fontSize: 9.8, fontWeight: 700, cursor: "pointer", color: "#0B1726" }}>{d}</span>)}
          </span> : null}
          {i === 4 && decision ? <span style={{ display: "block", marginTop: 5, fontSize: 9.5, color: "#0e7c86", fontWeight: 700 }}>Logged: {decision} — 2025-05-08 11:42 · CR-1027</span> : null}
          {i < 4 ? <span aria-hidden="true" style={{ float: "right", color: "#7c93ad" }}>{i === 1 || i === 2 ? "🔒 →" : "→"}</span> : null}
        </button>
      </div>)}
    </div>
    <svg viewBox="0 0 900 34" style={{ width: "100%", height: 30, display: "block", marginTop: 8 }} role="img" aria-label="Dashed return arrow: the decision and feedback log returns from human review to the machine">
      <path d="M812 6 L812 20 L96 20 L96 8" fill="none" stroke="#2F80ED" strokeWidth="2" strokeDasharray="7 5" />
      <path d="M88 14 L96 4 L104 14 Z" fill="#2F80ED" />
      <text x="454" y="31" fontSize="10.5" fill="#44536a" textAnchor="middle">Decision &amp; feedback log — returns to the machine</text>
    </svg>
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
          {[["Overview", ""], ["Machines", ""], ["Anomalies", "1"], ["Training", "2"], ["Federated Jobs", ""], ["Lender Reviews", "3"], ["Reports", ""], ["Settings", ""]].map(([x, b]) => <span key={x} style={x === "Overview" ? { color: "#12C7D4", fontWeight: 700 } : undefined}>{x}{b ? <span style={{ float: "right", background: b === "1" ? "#D95C5C" : b === "2" ? "#6C5CE7" : "#D99A2B", color: "#fff", borderRadius: 999, fontSize: 8.5, padding: "0 5px" }}>{b}</span> : null}</span>)}
          <span style={{ borderTop: "1px solid #22344d", paddingTop: 6, marginTop: 2 }}>Signed in as<br /><b style={{ color: "#e8eef5" }}>Plant Manager</b><br />Riverton Plant</span>
        </div>
        <div style={{ padding: "10px 12px", position: "relative", background: "#f4f7fa", color: "#33465e" }}>
          <p style={{ margin: 0, fontSize: 12 }}><b style={{ color: "#0B1726", fontSize: 13.5 }}>Overview</b> <span style={{ color: "#7c8798" }}>Real-time operational and portfolio overview</span><span style={{ float: "right", fontSize: 10, color: "#7c8798" }}>Last 24 hours ▾ · All plants ▾ · PM</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginTop: 7 }}>
            {[["Operations · Equipment online", "92.4%", "Target ≥ 90%", "#0e7c86", "0,14 20,11 40,13 60,9 80,12 100,8"], ["Anomalies · Active", "1", "Total 7", "#D95C5C", "0,12 20,7 40,13 60,8 80,12 100,10"], ["Model accuracy · Global average", "94.6%", "Target ≥ 90%", "#2F80ED", "0,13 20,10 40,12 60,7 80,11 100,9"], ["Federated jobs · In progress", "2", "Total 8", "#6C5CE7", "0,12 20,8 40,11 60,9 80,13 100,10"], ["Lender reviews · Pending", "3", "Overdue 1", "#D99A2B", "0,13 20,11 40,12 60,9 80,10 100,7"]].map(([k, v, s2, c, pts]) => <div key={k} style={{ background: "#fff", border: "1px solid #dde4ec", borderRadius: 8, padding: "5px 7px" }}><span style={{ color: "#7c8798", fontSize: 8.8 }}>{k}</span><br /><b style={{ color: "#0B1726", fontSize: 15 }}>{v}</b><svg viewBox="0 0 100 16" style={{ width: "100%", height: 13, display: "block" }} aria-hidden="true"><polyline points={pts} fill="none" stroke={c} strokeWidth="1.6" /></svg><span style={{ color: "#7c8798", fontSize: 8.8 }}>{s2}</span></div>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr 1fr 1fr", gap: 6, marginTop: 7, fontSize: 9.3 }}>
            <div style={{ background: "#fff", border: "1px solid #dde4ec", borderRadius: 8, padding: "6px 8px" }}>
              <b style={{ color: "#0B1726" }}>Machine health</b>
              <img src="/projects/crops/deepvise/machine-render.jpg" alt="Machine diagram from the original frame (crop, no text)" style={{ width: "100%", height: 62, objectFit: "cover", borderRadius: 5, display: "block", marginTop: 4 }} />
              <p style={{ margin: "4px 0 0" }}><b>Press_03</b> <span style={{ color: "#b3352c", fontWeight: 700 }}>Anomaly</span> · Severity High · Score 87 · <span style={{ color: "#2F80ED" }}>Investigate →</span></p>
              <p style={{ margin: "2px 0 0", color: "#7c8798" }}>● Normal · ● Warning · ● Anomaly · ● Offline</p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde4ec", borderRadius: 8, padding: "6px 8px" }}>
              <b style={{ color: "#0B1726" }}>Recent anomalies</b>
              <p style={{ margin: "4px 0 0", borderLeft: "3px solid #D95C5C", paddingLeft: 6 }}><b>Press_03</b> · 09:42<br />High severity · Vibration spike</p>
              <p style={{ margin: "4px 0 0", borderLeft: "3px solid #D99A2B", paddingLeft: 6 }}><b>Conveyor_07</b> · 08:11<br />Warning · Temp. deviation</p>
              <p style={{ margin: "4px 0 0", borderLeft: "3px solid #2F80ED", paddingLeft: 6 }}><b>Pump_02</b> · 07:52<br />Info · Pressure fluctuation</p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde4ec", borderRadius: 8, padding: "6px 8px" }}>
              <b style={{ color: "#0B1726" }}>Federated job status</b>
              {[["Global_Model_042", "Round 3 of 10", 60, "Updated 2 min ago"], ["Anomaly_Model_11", "Round 1 of 5", 20, "Updated 5 min ago"]].map(([a, b, v, u]) => <div key={a} style={{ marginTop: 5 }}><b>{a}</b><br /><span style={{ color: "#2F80ED" }}>In progress</span> · {b}<span style={{ display: "block", height: 5, borderRadius: 3, background: "#e6ecf2", marginTop: 2 }}><span style={{ display: "block", height: 5, borderRadius: 3, background: "#6C5CE7", width: `${v}%` }} /></span><span style={{ color: "#7c8798" }}>{u}</span></div>)}
              <p style={{ margin: "5px 0 0" }}><b>Quality_Model_08</b><br /><span style={{ color: "#1d9e57" }}>✓ Completed</span> · Yesterday 14:32</p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #dde4ec", borderRadius: 8, padding: "6px 8px" }}>
              <b style={{ color: "#0B1726" }}>Lender review pipeline</b>
              {[["Riverton Expansion", "RVT-EXP-2024-07", "Pending", "Due May 21, 2024", "#b97f16"], ["Equipment Upgrade", "EQUIP-UP-2024-15", "Pending", "Due May 22, 2024", "#b97f16"], ["Working Capital", "WC-2024-226", "Overdue", "Due May 18, 2024", "#b3352c"]].map(([a, s2, st, d, c]) => <p key={a} style={{ margin: "5px 0 0" }}><b>{a}</b> <span style={{ float: "right", color: c, fontWeight: 700 }}>{st}</span><br /><span style={{ color: "#7c8798" }}>Serial {s2} · {d}</span></p>)}
            </div>
          </div>
          <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "46%", transform: "translate(-50%,-50%)", width: 46, height: 46, borderRadius: "50%", background: "rgba(11,23,38,0.82)", border: "2px solid #fff", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>▶</span>
          <span style={{ position: "absolute", left: "50%", top: "calc(46% + 30px)", transform: "translateX(-50%)", background: "#0B1726", borderRadius: 5, padding: "1px 7px", fontSize: 10, color: "#fff" }}>01:15</span>
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
  return <Dv n="06" title="A press does not fail as a dashboard event." sub="It fails inside a production system with people, schedules and physical consequences." label="DeepVise press failure — interactive rebuild of DeepVise_06">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 190px", gap: 10 }}>
      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.6 }}><b>SENSORS ON THIS PRESS</b><br />〰 Vibration or acceleration · 🌡 Motor temperature · ⚙ Bearing temperature · ◔ Load or pressure · 123 Cycle count · 📊 Frequency-domain features</p>
      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.6 }}><b>OPERATIONAL ACTORS</b><br />👤 Line operator<br />🔧 Maintenance engineer<br />🖥 Local edge node</p>
    </div>
    <div style={{ position: "relative", height: 300, borderRadius: 12, overflow: "hidden", marginTop: 10, background: "#22262c" }}>
      <img src="/projects/crops/deepvise/press-wide.jpg" alt="Press photograph from the original slide — motor and bearing end of the press line (crop, no text)" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 42%" }} />
      <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,14,18,0.30), transparent 30%, transparent 72%, rgba(10,14,18,0.30))" }} />
      <span aria-hidden="true" style={{ position: "absolute", inset: 0, border: "2px dashed rgba(18,199,212,0.55)", borderRadius: 12, margin: 26, pointerEvents: "none" }} />
      {PRESS06.map(([t, signals], i) => {
        const pos: React.CSSProperties[] = [
          { left: "1.5%", bottom: "16%" }, { left: "19%", top: "30%" }, { left: "37%", top: "5%" },
          { left: "38%", bottom: "4%" }, { right: "15%", top: "34%" }, { right: "1%", top: "36%" },
        ];
        return <button key={t} type="button" onClick={() => setPt(i)} aria-pressed={i === pt} style={{ position: "absolute", ...pos[i], textAlign: "left", background: "#fff", border: `2px solid ${i === pt ? "#2F80ED" : "#fff"}`, borderRadius: 9, padding: "5px 9px 5px 20px", cursor: "pointer", font: "inherit", boxShadow: "0 3px 10px rgba(0,0,0,0.35)", maxWidth: 168 }}>
          <span style={{ position: "absolute", left: -9, top: -9, width: 21, height: 21, borderRadius: "50%", background: "#2F80ED", color: "#fff", fontWeight: 800, fontSize: 11.5, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
          <b style={{ fontSize: 11.5, color: "#0B1726" }}>{t.replace(/^\d · /, "")}</b>
          <span style={{ display: "block", fontSize: 9.8, color: "#44536a", marginTop: 1 }}>{signals}</span>
        </button>;
      })}
      <div style={{ position: "absolute", right: "2%", top: "3%", background: "#0B1726", color: "#dbe5f0", border: "1.5px solid #12C7D4", borderRadius: 9, padding: "7px 11px", fontSize: 11, maxWidth: 190 }}><b style={{ color: "#fff" }}>🖥 Local edge node</b><br />Collects and processes signals on-site. Data path stops here.</div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>What happened next — consequence chain</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 218px", gap: 8, alignItems: "stretch" }}>
      {CHAIN06.map(([t, b, e], i) => <div key={t} className="tks-card"><b style={{ fontSize: 12.5, color: ["#b3352c", "#b97f16", "#b3352c", "#b3352c"][i] }}>{["⚠", "⚙", "✋", "📉"][i]} {t}</b><p style={{ color: "#555", margin: "4px 0 0", fontSize: 11.5, lineHeight: 1.5 }}>{b}</p><p className="tks-kicker" style={{ margin: "6px 0 0" }}>{e}</p></div>)}
      <div style={{ border: "1.5px solid #b9c6d4", borderRadius: 11, padding: "9px 11px", background: "#fff" }}><b style={{ fontSize: 11 }}>SOURCE AND EVIDENCE BOUNDARY</b><p style={{ margin: "4px 0 0", fontSize: 10.5, lineHeight: 1.55, color: "#44536a" }}>Challenge-direction text explicitly supports temperature, acceleration, velocity and frequency-domain signals. Original deck pages 19, 28–30 support the equipment, edge-node and maintenance context.</p></div>
    </div>
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
  return <Dv n="07" title="07. Factory Pain System — The failure loop" sub="When evidence stays fragmented, warnings arrive late and every incident teaches only one factory." label="DeepVise failure loop — interactive rebuild of DeepVise_07">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 258px", gap: 11, alignItems: "start" }}>
      <div style={{ position: "relative", height: 430 }}>
        <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: 330, height: 330, transform: "translate(-50%,-50%)", borderRadius: "50%", border: "1.5px solid #c3cedb" }} />
        <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "31%", transform: "translateX(-50%)", border: "1.5px dashed #D99A2B", color: "#9a6b12", borderRadius: 999, padding: "1px 10px", fontSize: 10, background: "#fffaf0" }}>Operational loss</span>
        <span aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "27%", transform: "translateX(-50%)", border: "1.5px dashed #6C5CE7", color: "#6C5CE7", borderRadius: 999, padding: "1px 10px", fontSize: 10, background: "#f7f5ff" }}>Learning loss</span>
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 128, height: 128, borderRadius: "50%", background: "#fff", border: "1.5px solid #e3b3b3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 8 }}>
          <span style={{ fontSize: 19 }}>🏭⚠</span><b style={{ fontSize: 12.5, color: "#b3352c", lineHeight: 1.25 }}>Reactive maintenance</b>
        </div>
        {LOOP07.map(([t, body, tag], j) => {
          const pos: React.CSSProperties[] = [
            { left: "50%", top: 0, transform: "translateX(-50%)" }, { right: 0, top: "18%" }, { right: 0, bottom: "14%" },
            { left: "50%", bottom: 0, transform: "translateX(-50%)" }, { left: 0, bottom: "14%" }, { left: 0, top: "18%" },
          ];
          const icons = ["🗄🔒", "📊", "🕐⚠", "🔧", "🏭✕", "📄?"];
          return <button key={t} type="button" onClick={() => setS(j)} aria-pressed={j === s} style={{ position: "absolute", ...pos[j], width: 148, textAlign: "center", background: "transparent", border: "none", cursor: "pointer", font: "inherit" }}>
            <span style={{ display: "inline-flex", width: 86, height: 86, borderRadius: "50%", background: "#fff", border: `2px solid ${j === s ? "#D95C5C" : "#44536a"}`, flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 6, position: "relative" }}>
              <span style={{ position: "absolute", top: -4, left: -4, width: 19, height: 19, borderRadius: "50%", background: "#0B1726", color: "#fff", fontSize: 10.5, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{j + 1}</span>
              <span style={{ fontSize: 15 }}>{icons[j]}</span><b style={{ fontSize: 9.8, color: "#0B1726", lineHeight: 1.2 }}>{t.replace(/^\d · /, "")}</b>
            </span>
            <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.4, color: "#44536a", marginTop: 4 }}>{body}</span>
            {tag ? <span style={{ display: "block", fontSize: 9, fontWeight: 800, color: "#b97f16" }}>⚠ {tag}</span> : null}
          </button>;
        })}
      </div>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Design implications</p>
        <div style={{ display: "grid", gap: 7 }}>{IMPL07.map(([t, b]) => <div key={t} className="tks-card"><b style={{ fontSize: 12, color: "#0e7c86" }}>{t}</b><p style={{ color: "#555", margin: "4px 0 0", fontSize: 11, lineHeight: 1.5 }}>{b}</p></div>)}</div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, borderTop: "1px solid #dde4ec", paddingTop: 8, marginTop: 6, fontSize: 11, lineHeight: 1.55, color: "#44536a" }}>
      <span>📖 <b style={{ color: "#0B1726" }}>Source</b><br />Original deck pages 7–8.</span>
      <span>🛡 <b style={{ color: "#0B1726" }}>Evidence boundary</b><br />This pain system reflects qualitative insights from the original deck. No quantitative claims are made.</span>
      <span>ℹ <b style={{ color: "#0B1726" }}>What this means</b><br />Reactive maintenance is a system problem. Solving it requires connected data, better evidence, and continuous learning.</span>
    </div>
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
  const nodeLane = (rows: Array<[string, string, string]>, L: number, color: string, icons: string[], xs: number[], blind?: boolean) => (
    <div style={{ position: "relative", height: 118, marginTop: 4 }}>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 40, height: 2.5, background: color }} />
      {blind ? <span aria-hidden="true" style={{ position: "absolute", left: "56%", width: "27%", top: 6, height: 74, background: "repeating-linear-gradient(45deg,#fdf3e3,#fdf3e3 8px,#fbeed2 8px,#fbeed2 16px)", borderRadius: 6 }}><span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#7a5410", textAlign: "center", padding: 4 }}><b>BLIND INTERVAL</b>Events between reviews may not be visible in time.</span></span> : null}
      {rows.map(([d, t, detail], i) => <button key={d} type="button" onClick={() => { setLane(L); setEv(i); }} aria-pressed={lane === L && i === ev} style={{ position: "absolute", left: `calc(${xs[i]}% - 55px)`, width: 110, top: 0, background: "transparent", border: "none", cursor: "pointer", font: "inherit", textAlign: "center", padding: 0 }}>
        <span style={{ display: "block", fontSize: 8.8, color: "#7c8798" }}>{d}</span>
        <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: "50%", background: "#fff", border: `2px solid ${lane === L && i === ev ? "#2F80ED" : color}`, alignItems: "center", justifyContent: "center", fontSize: 14, margin: "2px 0" }}>{icons[i]}</span>
        <b style={{ display: "block", fontSize: 10.5, color: "#0B1726", lineHeight: 1.25 }}>{t}</b>
        <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.35, color: "#44536a" }}>{detail}</span>
      </button>)}
    </div>
  );
  return <Dv n="08" title="08. Lender Visibility Gap — Financial reviews are periodic. Productive assets change continuously." sub="DeepVise proposes a fresher evidence layer, not a substitute for underwriting." label="DeepVise lender visibility gap — interactive rebuild of DeepVise_08">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 196px", gap: 14, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Top: Financial reporting &amp; credit reviews (periodic)</p>
        {nodeLane(PERIODIC08, 0, "#637083", ["📄", "🏦", "📋", "👥"], [8, 33, 58, 92], true)}
        <p className="tks-kicker" style={{ marginTop: 6 }}>Bottom: Machine condition &amp; maintenance events <span style={{ color: "#0e7c86" }}>(continuous)</span></p>
        {nodeLane(CONTINUOUS08, 1, "#D99A2B", ["〰", "📳", "🔧", "🛡"], [10, 36, 66, 88])}
        <div style={{ border: "1.5px solid #2F80ED", borderRadius: 10, padding: "7px 12px", fontSize: 11.5, display: "flex", gap: 12, alignItems: "center", background: "#fbfdff" }}>
          <span style={{ width: 32, height: 32, flex: "none", borderRadius: "50%", background: "#0B1726", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🔒</span>
          <b>BRIDGE SIGNAL:<br />PERMISSIONED SUMMARY</b>
          <span>Timestamp (UTC)<br /><b>2024-10-22 14:32</b></span><span>Confidence<br /><b>0.76</b></span><span>Trend<br /><b>Improving ↗</b></span><span>Reason Codes<br /><b>IMBALANCE, WEAR</b></span>
        </div>
      </div>
      <div style={{ borderLeft: "1px solid #dde4ec", paddingLeft: 13 }}>
        <span style={{ display: "inline-flex", width: 52, height: 52, borderRadius: "50%", border: "1.5px solid #6C5CE7", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📋</span>
        <p className="tks-kicker" style={{ margin: "8px 0 4px", color: "#2F80ED" }}>Policy note</p>
        <b style={{ fontSize: 15.5, lineHeight: 1.3, display: "block" }}>Asset health is one input, not a credit decision.</b>
        <p style={{ margin: "9px 0 0", fontSize: 10.8, lineHeight: 1.55 }}>👥 Credit decisions require full underwriting, including financials, cash flow, collateral, management, and industry context.</p>
        <p style={{ margin: "8px 0 0", fontSize: 10.8, lineHeight: 1.55, borderTop: "1px solid #e6ecf2", paddingTop: 8 }}>⚖ Operational signals provide timelier insight to inform monitoring, dialogue, and risk assessment.</p>
        <p style={{ margin: "8px 0 0", fontSize: 10.8, lineHeight: 1.55, borderTop: "1px solid #e6ecf2", paddingTop: 8 }}>🔒 Permissioned summaries share only what is authorized, when authorized.</p>
      </div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}><b>DeepVise</b> · Source &amp; evidence boundary: Original deck pages 4, 7, 9 and 32–34 support the manufacturing-credit visibility problem. The exact timeline is an explanatory reconstruction; it is not a measured borrower history. All dates are illustrative (not borrower specific).</p>
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
        <p style={{ margin: "6px 0 0", fontSize: 11.3, lineHeight: 1.55, color: "#5a4a4a" }}><b>This path was rejected. Raw data cannot leave each factory.</b></p>
        <div style={{ position: "relative", margin: "8px 0 4px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, fontSize: 10.5 }}>
            {[["Factory A", "A-001 A-002 … A-N"], ["Factory B", "B-001 B-002 … B-N"], ["Factory C", "C-001 C-002 … C-N"]].map(([nm, codes]) => <div key={nm} style={{ background: "#fff", border: "1px solid #e3b3b3", borderRadius: 9, padding: "6px 9px" }}><b>{nm}</b><br /><span style={{ color: "#7c8798" }}>feature schema f1 f2 f3 … fn</span><br />🛢 Local feature store<br /><span style={{ color: "#7c8798" }}>{codes}</span></div>)}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", fontSize: 15, color: "#b3352c", margin: "2px 0 0" }} aria-hidden="true"><span>↓</span><span>↓</span><span>↓</span></div>
          <div style={{ textAlign: "center", marginTop: 2 }}>
            <svg viewBox="0 0 200 62" style={{ width: 190, height: 59, display: "inline-block" }} role="img" aria-label="Central data lake cylinder">
              <path d="M8 12 L8 44 C8 55 192 55 192 44 L192 12" fill="#102A43" />
              <ellipse cx="100" cy="12" rx="92" ry="11" fill="#1d3d5f" stroke="#3d5a7a" />
              <text x="100" y="34" fontSize="11.5" fill="#fff" textAnchor="middle" fontWeight="700">Central Data Lake</text>
              <text x="100" y="49" fontSize="9.5" fill="#f0a3a3" textAnchor="middle">🔒 Raw data</text>
            </svg>
          </div>
          <svg aria-hidden="true" viewBox="0 0 300 150" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            <line x1="4" y1="6" x2="296" y2="144" stroke="rgba(200,40,40,0.75)" strokeWidth="5" />
            <line x1="296" y1="6" x2="4" y2="144" stroke="rgba(200,40,40,0.75)" strokeWidth="5" />
          </svg>
        </div>
        <p style={{ margin: "4px 0 0", fontSize: 11.3, lineHeight: 1.55, color: "#5a4a4a" }}><b>Not allowed</b> — a red lock marks raw data wherever it appears.</p>
      </div>
      <div style={{ background: "#eef6ff", border: "1.5px solid #b9d4f2", borderRadius: 12, padding: "11px 13px" }}>
        <p style={{ margin: 0, fontWeight: 800, fontSize: 12.5, color: TEAL }}>✓ Proposed approach: Privacy-Preserving Federation — only protected updates travel</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, margin: "8px 0" }}>
          {factoryCol("Factory A", "A-001 A-002 … A-N")}
          {factoryCol("Factory B", "B-001 B-002 … B-N")}
          {factoryCol("Factory C", "C-001 C-002 … C-N")}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", fontSize: 14, color: TEAL, margin: "0 0 2px" }} aria-hidden="true"><span>↓</span><span>↓</span><span>↓</span></div>
        <p style={{ margin: "0 0 5px", fontSize: 9.8, fontWeight: 700, color: TEAL, textAlign: "center" }}>Protected updates travel (no raw data)</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, alignItems: "stretch" }}>
          <div style={{ background: "#102A43", color: "#dbe5f0", borderRadius: 10, padding: "8px 11px", textAlign: "center" }}>
            <b style={{ color: "#fff", fontSize: 12.3 }}>Aggregation Service</b>
            <span style={{ display: "block", fontSize: 10.3, color: "#9fc6dd", marginTop: 2 }}>Secure aggregation of protected updates only</span>
          </div>
          <span aria-hidden="true" style={{ alignSelf: "center", color: TEAL, fontSize: 16 }}>→</span>
          <div style={{ background: "#0e7c86", color: "#e6f7f5", borderRadius: 10, padding: "8px 11px", textAlign: "center" }}>
            <b style={{ color: "#fff", fontSize: 12.3 }}>Global Model</b>
            <span style={{ display: "block", fontSize: 10.3, color: "#cdeee9", marginTop: 2 }}>Aggregated model — contains no raw data</span>
          </div>
        </div>
        <svg viewBox="0 0 600 26" style={{ width: "100%", height: 24, display: "block", marginTop: 3 }} aria-hidden="true">
          <path d="M470 4 L470 14 L130 14 L130 22" fill="none" stroke="#2F80ED" strokeWidth="1.8" strokeDasharray="6 4" />
          <path d="M124 16 L130 24 L136 16 Z" fill="#2F80ED" />
          <text x="300" y="11" fontSize="9.5" fill="#2F80ED" textAnchor="middle">Global model returns to every factory (model return flow)</text>
        </svg>
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
    <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 190px", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ background: "#f4f7fa", border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 10px" }}><b style={{ fontSize: 11.3 }}>HOW TO READ THIS</b><p style={{ margin: "4px 0 0", fontSize: 10.5, lineHeight: 1.55, color: "#44536a" }}>Each role has a different decision. Same data, different lens.</p></div>
        <div style={{ background: "#f4f7fa", border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 10px" }}><b style={{ fontSize: 11.3 }}>OPERATING REALITIES</b>{["Tasks happen on the floor, in motion", "Connectivity is intermittent", "Alerts must be brief and actionable", "Lenders need traceable, consented evidence", "Data stewards police scope, not content"].map((x) => <p key={x} style={{ margin: "4px 0 0", fontSize: 10.5, lineHeight: 1.5, color: "#44536a" }}>• {x}</p>)}</div>
      </div>
      <div>
        {(() => {
          const card = (i: number, width?: number) => {
            const [t, flow, evIn, dec, priv] = ROLES10[i];
            return <button key={t} type="button" onClick={() => setR(i)} aria-pressed={i === r} style={{ width, textAlign: "left", background: "#fff", border: `1.5px solid ${i === r ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 11px", cursor: "pointer", font: "inherit" }}>
              <b style={{ fontSize: 12.3, color: "#0B1726" }}>{t}</b>
              <span style={{ display: "block", fontSize: 10.8, color: "#0e7c86", fontWeight: 700, margin: "2px 0 5px" }}>{flow}</span>
              <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#44536a" }}><b>Evidence in:</b> {evIn}</span>
              <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}><b>Decision out:</b> {dec}</span>
              <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#7a4a12", marginTop: 3 }}><b>Privacy:</b> {priv}</span>
            </button>;
          };
          const flowChip = (txt: string, style: React.CSSProperties) => <span aria-hidden="true" style={{ position: "absolute", zIndex: 2, background: "#eef6ff", border: "1.5px solid #2F80ED", color: "#1c5cb8", borderRadius: 999, padding: "1px 8px", fontSize: 9.3, fontWeight: 800, whiteSpace: "nowrap", ...style }}>{txt}</span>;
          return <div style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>{card(0, 292)}</div>
            {flowChip("Evidence in ↓", { left: "50%", top: 118, transform: "translateX(-50%)" })}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr 1fr", gap: 8, alignItems: "center", marginTop: 26 }}>
              {card(4)}
              <div style={{ position: "relative", background: "#0B1726", color: "#dbe5f0", borderRadius: 12, padding: "14px 12px", textAlign: "center", minHeight: 128 }}>
                <b style={{ color: "#fff", fontSize: 15 }}>DeepVise</b>
                <p style={{ margin: "2px 0 0", fontSize: 10.3, color: "#12C7D4", fontWeight: 700 }}>Governed derived signals and context</p>
                <div style={{ display: "grid", gap: 4, marginTop: 7 }}>{[["Ingest & Normalize", "#12C7D4"], ["Derive & Validate", "#2F80ED"], ["Govern & Audit", "#6C5CE7"]].map(([x, c]) => <span key={x} style={{ background: "#132a42", borderLeft: `3px solid ${c}`, borderRadius: 5, padding: "2px 7px", fontSize: 10, color: "#dbe5f0" }}>{x}</span>)}</div>
                {flowChip("← Evidence in", { left: -64, top: "46%" })}
                {flowChip("Decision out →", { right: -70, top: "46%" })}
              </div>
              {card(1)}
            </div>
            {flowChip("Decision out ↓", { left: "27%", top: "auto", bottom: 118 })}
            {flowChip("Decision out ↓", { right: "27%", bottom: 118 })}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 26 }}>{card(3, 292)}{card(2, 292)}</div>
          </div>;
        })()}
      </div>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Success criteria</p>
        <div style={{ display: "grid", gap: 6 }}>{SUCCESS10.map(([t, b]) => <div key={t} className="tks-card" style={{ padding: "7px 10px" }}><b style={{ fontSize: 11.8 }}>✓ {t}</b><p style={{ color: "#555", margin: "3px 0 0", fontSize: 10.8, lineHeight: 1.5 }}>{b}</p></div>)}</div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7, marginTop: 10 }}>
      {ROLES10.map(([t, , , , priv]) => <span key={t} style={{ fontSize: 10.3, lineHeight: 1.5, color: "#44536a", borderTop: "3px solid #D95C5C", paddingTop: 5 }}><b style={{ color: "#0B1726" }}>🔒 Privacy concern — {t.replace(/^\d+ · /, "")}</b><br />{priv}</span>)}
    </div>
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
        {i === 0 ? <span style={{ display: "block", background: "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 7, padding: "5px 7px", margin: "6px 0", fontSize: 9.3 }}>
          <b style={{ color: "#0B1726" }}>Line 3 — Production Board · 06:00–18:00</b>
          {[["Assembly", 8, 62, "#0e7c86"], ["Welding", 22, 45, "#2F80ED"], ["Paint", 40, 38, "#6C5CE7"], ["Packaging", 60, 30, "#637083"]].map(([nm, off, w, c]) => <span key={nm as string} style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}><span style={{ width: 52, flex: "none" }}>{nm}</span><span style={{ flex: 1, height: 8, position: "relative", background: "#e6ecf2", borderRadius: 4 }}><span style={{ position: "absolute", left: `${off}%`, width: `${w}%`, top: 0, height: 8, background: c as string, borderRadius: 4 }} /></span></span>)}
          <span style={{ display: "block", color: "#b3352c", marginTop: 3 }}>⚠ Warning marker at 12:00 on Assembly</span>
        </span> : i === 1 ? <span style={{ display: "block", background: "#0B1726", borderRadius: 7, padding: "6px 8px", margin: "6px 0", color: "#dbe5f0", fontSize: 9.3 }}>
          <b style={{ color: "#fff" }}>Handheld vibration meter</b>
          <span style={{ display: "block", fontFamily: "ui-monospace,monospace", fontSize: 13, color: "#12C7D4", margin: "3px 0" }}>VIBRATION 7.8 mm/s</span>
          <span style={{ color: "#D99A2B", fontWeight: 700 }}>TRENDING UP ↗</span> <span style={{ color: "#8fa5bd" }}>· over a motor line drawing</span>
        </span> : i === 2 ? <span style={{ display: "block", background: "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 7, padding: "5px 7px", margin: "6px 0", fontSize: 9.3, position: "relative" }}>
          <b style={{ color: "#0B1726" }}>Consent Record</b> <span style={{ float: "right", fontSize: 13 }}>🔒</span>
          {[["Purpose", "Working capital review"], ["Shared with", "Bank – Relationship Team"], ["Data categories", "Transactions, invoices, payments"], ["Start", "May 15, 2025 09:00"], ["End", "May 22, 2025 09:00"], ["Status", "Active"]].map(([k, v]) => <span key={k} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "1.5px 0" }}><span style={{ color: "#7c8798" }}>{k}</span><b style={{ color: "#33465e" }}>{v}</b></span>)}
          <span style={{ display: "block", color: "#7c8798", marginTop: 2 }}>Time-bound and revocable.</span>
        </span> : <span style={{ display: "block", background: "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 7, padding: "5px 7px", margin: "6px 0", fontSize: 9.3 }}>
          <b style={{ color: "#0B1726" }}>Credit Memo</b>
          {[["Obligor ID", "C-104857"], ["Observation date", "May 15, 2025 08:45"], ["Signal", "DSO deterioration"], ["Change (30d)", "+18 days"], ["Materiality", "High"], ["Model version", "v2.4.1"]].map(([k, v]) => <span key={k} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "1.5px 0" }}><span style={{ color: "#7c8798" }}>{k}</span><b style={{ color: "#33465e" }}>{v}</b></span>)}
          <svg viewBox="0 0 100 16" style={{ width: "100%", height: 13, display: "block", marginTop: 3 }} aria-hidden="true"><polyline points="0,13 25,11 50,9 75,5 100,2" fill="none" stroke="#D95C5C" strokeWidth="1.8" /></svg>
          <span style={{ color: "#b3352c" }}>Signal trend (30d) rising · Current signal: High</span>
        </span>}
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
  return <Dv n="12" title="12. Research and Evidence Synthesis" sub="From challenge direction, deck research, technical study and prototype constraints to product requirements. Source fact -> inferred user need -> product requirement. Source and evidence boundary: Original deck pages 3–12 and 19–34, challenge-direction text and official FATE documentation." label="DeepVise research synthesis — interactive rebuild of DeepVise_12">
    <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th></th><th>Source fact (what we found) · 28%</th><th>Inferred user need (what this means) · 30%</th><th>Design implication (what we will build) · 42%</th></tr></thead>
      <tbody>{SYNTH12.map((row, i) => <tr key={row[0]} onClick={() => setR(i)} style={{ cursor: "pointer", background: i === r ? "#eef1f6" : undefined }}><td style={{ background: "#102A43", color: "#fff", textAlign: "center", width: 86 }}><span style={{ fontSize: 15 }}>{["⌁", "🧠", "🔧", "🔒", "🔍", "🏦"][i]}</span><br /><b style={{ fontSize: 10.5 }}>{row[0]}</b></td><td>{row[1]}<span style={{ display: "block", marginTop: 4, fontSize: 9.8, color: "#7c8798" }}>Source: {row[2]} · Evidence: Available</span></td><td>{row[3]}</td><td><b>{row[4]}</b><span style={{ display: "block", marginTop: 4, fontWeight: 400, color: "#44536a" }}>{row[5]}</span></td></tr>)}</tbody></table></div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7, marginTop: 10 }}>
      {[["Challenge direction", "Problem framing and requirements from challenge-direction text"], ["Original deck", "Requirements and insights from deck pages 3–12 and 19–34"], ["Official FATE documentation", "Capabilities and specifications from official FATE documentation (v1.11)"], ["Retrospective inference", "Inferred from context, prototype constraints or implementation experience"], ["Evidence labeling", "All design implications are traceable to a source fact or explicitly labeled as an inference [Reconstructed]"]].map(([t, b]) => <div key={t} style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", fontSize: 10.3, lineHeight: 1.5, background: "#fff" }}><b>{t}</b><br />{b}</div>)}
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
    <div style={{ display: "grid", gridTemplateColumns: "196px 1fr 196px", gap: 10, alignItems: "center" }}>
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 10px", background: "#fff", fontSize: 10.5, lineHeight: 1.55 }}><b style={{ color: "#0B1726" }}>Human review</b><br />{NORTH14[4][2].replace("Human review — ", "")}</div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 10px", background: "#fff", fontSize: 10.5, lineHeight: 1.55 }}><b style={{ color: "#0B1726" }}>Learning capture</b><br />{NORTH14[3][2].replace("Learning capture — ", "")}</div>
      </div>
      <div style={{ position: "relative", height: 330 }}>
        <svg viewBox="0 0 330 330" style={{ position: "absolute", left: "50%", top: "50%", width: 316, height: 316, transform: "translate(-50%,-50%)" }} aria-hidden="true">
          <circle cx="165" cy="165" r="146" fill="none" stroke="#b9c6d4" strokeWidth="1.6" />
          <circle cx="165" cy="165" r="118" fill="none" stroke="#e2e9f0" strokeWidth="1" />
          {[0, 1, 2, 3, 4].map((k) => { const a = (-90 + k * 72) * Math.PI / 180; return <g key={k}><line x1={165 + 118 * Math.cos(a)} y1={165 + 118 * Math.sin(a)} x2={165 + 146 * Math.cos(a)} y2={165 + 146 * Math.sin(a)} stroke="#b9c6d4" strokeWidth="1.2" /><circle cx={165 + 146 * Math.cos(a)} cy={165 + 146 * Math.sin(a)} r="5" fill="#fff" stroke="#2F80ED" strokeWidth="2" /></g>; })}
          <path d="M165 19 A146 146 0 0 1 304 210" fill="none" stroke="#2F80ED" strokeWidth="1.6" markerEnd="url(#dv14arr)" />
          <defs><marker id="dv14arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 Z" fill="#2F80ED" /></marker></defs>
        </svg>
        <span style={{ position: "absolute", left: "50%", top: "50%", width: 158, height: 158, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 12 }}>
          <b style={{ fontSize: 11.5, color: "#0B1726" }}>Product North Star</b>
          <span style={{ fontSize: 10, lineHeight: 1.45, color: "#44536a", marginTop: 3 }}>Reduce uncertainty at the moment of action while keeping humans accountable.</span>
        </span>
        {NORTH14.map(([t, desc], i) => {
          const pos: React.CSSProperties[] = [
            { left: "50%", top: -6, transform: "translateX(-50%)" }, { right: "1%", top: "24%" }, { right: "9%", bottom: "-4%" },
            { left: "9%", bottom: "-4%" }, { left: "1%", top: "24%" },
          ];
          const align: React.CSSProperties[] = [
            { left: "50%", top: 44, transform: "translateX(-50%)", textAlign: "center" }, { right: "13%", top: "33%", textAlign: "left" }, { right: "20%", bottom: 52, textAlign: "center" },
            { left: "20%", bottom: 52, textAlign: "center" }, { left: "13%", top: "33%", textAlign: "right" },
          ];
          return <span key={t} style={{ display: "contents" }}>
            <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ position: "absolute", ...pos[i], background: i === s ? "#0B1726" : "#fff", color: i === s ? "#fff" : "#0B1726", border: `1.5px solid ${i === s ? "#0B1726" : "#2F80ED"}`, borderRadius: 999, padding: "4px 12px", cursor: "pointer", font: "inherit", fontWeight: 700, fontSize: 11.5, boxShadow: "0 2px 6px rgba(11,23,38,0.12)", zIndex: 2 }}>{t}</button>
            <span aria-hidden="true" style={{ position: "absolute", ...align[i], width: 128, fontSize: 9.3, lineHeight: 1.4, color: "#55606e" }}>{desc}</span>
          </span>;
        })}
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 10px", background: "#fff", fontSize: 10.5, lineHeight: 1.55 }}><b style={{ color: "#0B1726" }}>Evidence shown</b><br />{NORTH14[1][2].replace("Evidence shown — ", "")}</div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 10px", background: "#fff", fontSize: 10.5, lineHeight: 1.55 }}><b style={{ color: "#0B1726" }}>Action output</b><br />{NORTH14[2][2].replace("Action output — ", "")}</div>
      </div>
    </div>
    <p style={{ textAlign: "center", margin: "6px 0 0", fontSize: 11, color: "#44536a" }} aria-live="polite"><b>{NORTH14[s][0]}</b> — {NORTH14[s][1]}</p>
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
      {IA16.map((g, gi) => { const dim = badge !== 0 && badges[badge] !== g.badge; const badgeColor = ["#0e7c86", "#2F80ED", "#6C5CE7", "#0B1726"][gi]; return <div key={g.area} className="tks-card" style={{ opacity: dim ? 0.35 : 1, borderTop: `4px solid ${colColors[gi]}` }}><p style={{ marginTop: 0 }}><b>{g.area}</b></p>
        <div style={{ display: "grid", gap: 5 }}>{g.items.map((x) => <button key={x} type="button" aria-pressed={sel === x} onClick={() => setSel(x)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6, textAlign: "left", background: sel === x ? "#eef6ff" : "#fff", border: `1.5px solid ${sel === x ? "#2F80ED" : "#dde4ec"}`, borderRadius: 8, padding: "5px 8px", cursor: "pointer", font: "inherit", fontSize: 11 }}><span>▦ {x}</span><span style={{ background: badgeColor, color: "#fff", borderRadius: 4, padding: "0 5px", fontSize: 8.8, fontWeight: 700, flex: "none" }}>{g.badge}</span></button>)}</div></div>; })}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 10 }}>
      {[["Source and evidence boundary", "Original prototype navigation is visible on deck pages 13–17"], ["Production method", "A top-down vector sitemap, derived from product modules"], ["Motion and responsive behavior", "Role badges may filter the map in the website lightbox; on narrow screens the map stacks by workspace"], ["Acceptance criteria", "All final UI screens are located. Prototype and reconstructed structures are clearly separated."]].map(([t, b]) => <div key={t} style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", fontSize: 10.3, lineHeight: 1.5, background: "#fff" }}><b>{t}</b><br />{b}</div>)}
    </div>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginTop: 9, fontSize: 10.8 }}>
      <b>Role Access Legend</b>
      {[["All Roles", "Shared by all platform users", "#0e7c86"], ["Factory", "Factory and operations team members", "#2F80ED"], ["Lender", "Lending and credit team members", "#6C5CE7"], ["Admin", "Platform administrators and governance team", "#0B1726"]].map(([t, b, c]) => <span key={t} style={{ border: "1px solid #dde4ec", borderRadius: 8, padding: "4px 9px", background: "#fff" }}><span style={{ background: c, color: "#fff", borderRadius: 4, padding: "0 5px", fontSize: 9, fontWeight: 700 }}>{t}</span> {b}</span>)}
      <span style={{ color: "#7c8798" }}>Role badges indicate required access to each page. Access is enforced through permissions and governance. Selected page: <b style={{ color: "#0B1726" }}>{sel}</b>.</span>
    </div>
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
    {(() => {
      const panelBody = (i: number, body: string) => {
        if (i === 0) return <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>
          <span style={{ color: "#7c8798" }}>Fleet · Attention Required (8) · Last updated May 12, 08:42</span>
          {[["P1", "MX-2471", "High vibration", "May 12, 08:41", "Alex Chen", "#b3352c"], ["P2", "MX-1310", "Temp rise", "May 12, 08:28", "Priya Nair", "#b97f16"], ["P2", "MX-0987", "Pressure drop", "May 12, 07:55", "Alex Chen", "#b97f16"], ["P3", "MX-2044", "Oil level low", "May 12, 07:31", "Jordan Lee", "#637083"], ["P3", "MX-1502", "Current imbalance", "May 12, 06:48", "Priya Nair", "#637083"]].map(([p2, id, issue, when, who, c]) => <span key={id} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "2px 0" }}><span><b style={{ color: c }}>{p2}</b> <b style={{ color: "#0B1726" }}>{id}</b> {issue}</span><span style={{ color: "#7c8798" }}>{when} · {who}</span></span>)}
        </span>;
        if (i === 1) return <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>
          <span><b style={{ color: "#0B1726" }}>MX-2471 · Online</b> — CNC Machining Center · Owner: Alex Chen</span>
          <span style={{ display: "block", background: "#fdf3e3", borderRadius: 5, padding: "3px 6px", margin: "4px 0" }}>⚠ High vibration detected since May 12, 08:41 (1 min) · P1</span>
          <span style={{ color: "#7c8798" }}>Health signals (vs baseline, 30 days)</span>
          {[["Vibration (mm/s RMS)", "7.8", "High", "#b3352c"], ["Spindle temp (°C)", "62", "Slightly high", "#b97f16"], ["Motor current (A)", "18.4", "Normal", "#1d9e57"], ["Hydraulic pressure (bar)", "123", "Normal", "#1d9e57"]].map(([a, b, st, c]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "2px 0" }}><span>{a}</span><span><b>{b}</b> <span style={{ color: c }}>{st}</span></span></span>)}
        </span>;
        if (i === 2) return <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>
          <span>Time range: Last 30 min · ● Live · Baseline: 30-day · Overlay on</span>
          <svg viewBox="0 0 200 44" style={{ width: "100%", height: 40, display: "block", margin: "4px 0" }} aria-hidden="true"><polyline points="0,30 40,29 80,30 120,26 160,16 200,12" fill="none" stroke="#12C7D4" strokeWidth="1.8" /><polyline points="0,36 50,35 100,36 150,35 200,36" fill="none" stroke="#637083" strokeWidth="1.2" strokeDasharray="3 3" /><polyline points="0,34 60,33 120,32 200,28" fill="none" stroke="#2F80ED" strokeWidth="1.4" /></svg>
          {[["☑ Vibration (mm/s RMS)", "7.8 High"], ["☑ Spindle temp (°C)", "62 Normal"], ["☑ Motor current (A)", "18.4"], ["☑ Hydraulic pressure (bar)", "123"], ["☐ Coolant flow (L/min)", "No data"], ["☐ Ambient temp (°C)", "24 Low"]].map(([a, b]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "1.5px 0" }}><span>{a}</span><span>{b}</span></span>)}
          <span style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}><span style={{ flex: 1, height: 6, borderRadius: 3, background: "#e6ecf2" }}><span style={{ display: "block", height: 6, borderRadius: 3, background: "#2F80ED", width: "80%" }} /></span><b>Evidence completeness 80% — 4 of 5</b></span>
          <span style={{ display: "block", marginTop: 3 }}>Decision prompt: Do we have enough evidence to diagnose? <b>[Yes, continue]</b> [Review data gaps]</span>
        </span>;
        if (i === 3) return <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>
          <span>Most probable cause: <b style={{ color: "#0B1726" }}>Spindle bearing wear</b></span>
          {[["Spindle bearing wear", "0.78", "High", 78, "#1d9e57"], ["Tool imbalance", "0.42", "Medium", 42, "#b97f16"], ["Loose fixture", "0.28", "Low", 28, "#637083"]].map(([a, v, st, w, c]) => <span key={a as string} style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}><span style={{ width: 108, flex: "none" }}>{a}</span><span style={{ flex: 1, height: 6, borderRadius: 3, background: "#e6ecf2" }}><span style={{ display: "block", height: 6, borderRadius: 3, background: c as string, width: `${w}%` }} /></span><b>{v}</b><span style={{ color: c as string }}>{st}</span></span>)}
          <span style={{ display: "block", marginTop: 4 }}>Supporting evidence: Vibration elevated above normal range · Pattern matches bearing defect frequency · Spindle temperature slightly elevated · No abnormalities in motor current or pressure.</span>
          <span style={{ display: "block", marginTop: 3 }}><b>Recommendation:</b> Inspect spindle bearings at next available window.</span>
        </span>;
        return <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{body}</span>;
      };
      const renderPanel = ([t, body]: [string, string], i: number) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
        <b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}{i < 7 ? <span aria-hidden="true" style={{ color: "#2F80ED", float: "right" }}>→</span> : null}</b>
        {panelBody(i, body)}
        {i === 4 ? <span style={{ display: "block", marginTop: 5 }} onClick={(e) => e.stopPropagation()}><Chips items={["May 12 · Best", "May 13 AM · Good", "May 13 PM · Fair"]} value={win} onPick={setWin} /></span> : null}
      </button>;
      return <>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.3fr 1fr", gap: 8, alignItems: "start" }}>{FLOW17.slice(0, 4).map((x, i) => renderPanel(x, i))}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, alignItems: "start", marginTop: 8 }}>{FLOW17.slice(4).map((x, j) => renderPanel(x, j + 4))}</div>
      </>;
    })()}
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
        <p style={{ margin: "5px 0 0", fontSize: 10.5, color: "#44536a" }} aria-live="polite">{s === 4 ? `Window selected in panel 5: ${["May 12, 15:00 – 17:30 · Best", "May 13, 07:00 – 09:30 · Good", "May 13, 15:00 – 17:30 · Fair"][win]}` : ""}</p>
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
    {(() => {
      const rows = (items: Array<[string, string]>) => <span style={{ display: "block", marginTop: 3 }}>{items.map(([a, b]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "2px 0", fontSize: 9.6, color: "#44536a" }}><span>{a}</span><b style={{ color: "#33465e" }}>{b}</b></span>)}</span>;
      const bodyFor = (i: number, body: string) => {
        if (i === 0) return <span style={{ display: "block", marginTop: 3 }}>
          <span style={{ fontSize: 9.6, color: "#7c8798" }}>Attention queue · 3 items · Sort by: Signal change</span>
          {[["Enterprise A", "High", "Asset signal changed · Today 09:12", "CNY 25M · 4.60%", "#b3352c"], ["Enterprise B", "Medium", "Asset signal changed · Today 08:47", "CNY 18M · 5.10%", "#b97f16"], ["Enterprise C", "Low", "Covenant due in 15 days · May 12, 2025", "CNY 12M · 4.30%", "#637083"]].map(([a, sev, d, v, c]) => <span key={a} style={{ display: "block", borderTop: "1px solid #e6ecf2", padding: "3px 0", fontSize: 9.6, color: "#44536a" }}><b style={{ color: "#0B1726" }}>{a}</b> <b style={{ color: c }}>{sev}</b><br />{d}<br /><b>{v}</b></span>)}
        </span>;
        if (i === 2) return <span style={{ display: "block", marginTop: 3, fontSize: 9.6, color: "#44536a" }}>
          <span>Evidence before adjustment — a changed signal opens a review. It does not change a contract. ⚠ Asset signal changed Today 09:12.</span>
          <span style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#7c8798", marginTop: 3 }}><span>Key indicators</span><span>Latest · Prior · Change</span></span>
          {[["Days Sales Outstanding", "72", "54", "▲ 18", "#b3352c"], ["Inventory Turnover (12M)", "3.1x", "3.8x", "▼ −0.7x", "#b3352c"], ["Overdue Payables > 90 days", "CNY 3.2M", "CNY 1.6M", "▲ 1.6M", "#b3352c"], ["Machine Uptime", "87%", "93%", "▼ −6pp", "#b3352c"]].map(([a, l, pr, ch, c]) => <span key={a} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "2px 0" }}><span>{a}</span><span>{l} · {pr} · <b style={{ color: c }}>{ch}</b></span></span>)}
          <span style={{ display: "block", marginTop: 3 }}>Evidence summary: Adverse changes 3 · Stable 2 · Improved 0.</span>
        </span>;
        if (i === 4) return <span style={{ display: "block", marginTop: 3, fontSize: 9.6, color: "#44536a" }}>
          <span>Compare outcomes. Judgment remains with the reviewer.</span>
          {[["Current terms (No change)", "+0.6pp", "+0.18pp", "Weakens"], ["Proposed terms (Modify)", "+0.1pp", "+0.03pp", "Manageable"], ["Tighter terms (Alternative)", "−0.2pp", "−0.07pp", "Stronger"]].map(([a, pd, el, qa], j) => <span key={a} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e6ecf2", padding: "2px 0", background: j === scenario ? "#eef6ff" : undefined }}><span><b style={{ color: "#0B1726" }}>{a}</b></span><span>PD {pd} · EL {el} · {qa}</span></span>)}
          <span style={{ display: "block", marginTop: 3 }}>Assumptions (demo): Macro outlook: Base case · Recovery rate: 40% · LGD floors and policy overlays apply · Not a prediction. For decision support only.</span>
        </span>;
        if (i === 5) return <span style={{ display: "block", marginTop: 3, fontSize: 9.6, color: "#44536a" }}>
          <span style={{ color: "#1d9e57", fontWeight: 700 }}>Policy status: ✓ Compliant — Within delegated authority.</span>
          <span style={{ display: "block", marginTop: 3 }}><b style={{ color: "#0B1726" }}>Current terms (Demo data)</b></span>
          {rows([["Facility", "Term Loan"], ["Exposure", "CNY 25M"], ["Rate", "4.60%"], ["Maturity", "2026-08-31"], ["Covenants", "DSCR ≥ 1.20x, ICR ≥ 1.50x"]])}
          <span style={{ display: "block", marginTop: 4 }}><b style={{ color: "#0B1726" }}>Proposed terms (Demo data)</b></span>
          {rows([["Rate", "4.85% · Pricing change +0.25pp"], ["Covenants", "DSCR ≥ 1.30x, ICR ≥ 1.70x"], ["Reporting", "Monthly"], ["Collateral", "No change"], ["Maturity", "No change"]])}
        </span>;
        if (i === 6) return <span style={{ display: "block", marginTop: 3, fontSize: 9.6, color: "#44536a" }}>
          <span>Reviewer: <b style={{ color: "#0B1726" }}>Jane Liu</b> — Credit Risk Manager.</span>
          <span style={{ display: "block", background: "#F6F8FB", borderRadius: 6, padding: "4px 7px", margin: "4px 0" }}>Reviewer note: “DSO increase tied to two large project delays. Customer provided updates and partial receipts. Modified terms appropriate with enhanced monitoring.”</span>
          {["Approve (No change)", "Modify (Apply proposed terms)", "Reject (Return or decline)"].map((o, j) => <span key={o} style={{ display: "block", padding: "1.5px 0" }}><span style={{ color: j === decision ? "#2F80ED" : "#637083" }}>{j === decision ? "◉" : "○"}</span> {o}</span>)}
          <span style={{ display: "block", marginTop: 3 }}>Second approval required: Yes — Prudential Policy § 2.4.3. <b>[Submit decision]</b></span>
        </span>;
        if (i === 7) return <span style={{ display: "block", marginTop: 3, fontSize: 9.6, color: "#44536a" }}>
          <span style={{ color: "#1d9e57", fontWeight: 700 }}>✓ Decision logged</span>
          {rows([["Decision ID", "DEC-2025-0513-A1"], ["Decision", "Modify"], ["Status", "Pending second approval"], ["Logged by", "Jane Liu"], ["Time", "May 13, 2025 09:28"]])}
          <span style={{ display: "block", marginTop: 3 }}>Next step: Awaiting second approval by Credit Head.</span>
        </span>;
        return <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 3 }}>{body}</span>;
      };
      return <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, alignItems: "start" }}>
        {FLOW18.map(([t, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
          <b style={{ fontSize: 11.8, color: "#0B1726" }}>{t}{i < 7 ? <span aria-hidden="true" style={{ color: "#2F80ED", float: "right" }}>→</span> : null}</b>
          {bodyFor(i, body)}
        </button>)}
      </div>;
    })()}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 10 }}>
      {[["✓ Approve (No change)", "Terms unchanged, outcome logged, audit trail complete.", "#0e7c86", "#e5f4ee"], ["Modify (Apply proposed terms)", "New terms applied after second approval.", "#2F80ED", "#eef6ff"], ["✕ Reject (Return or decline)", "Request returned or declined.", "#b3352c", "#fdf1f1"]].map(([t, b, c, bg]) => <div key={t} style={{ background: bg, border: `1.5px solid ${c}`, borderRadius: 10, padding: "7px 11px", fontSize: 11 }}><b style={{ color: c }}>{t}</b><br />{b} <span style={{ color: "#7c8798" }}>Outcome logged.</span></div>)}
    </div>
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginTop: 9 }} aria-live="polite">
      <span style={{ fontSize: 11 }}><b>Scenario (screen 5):</b> <Chips items={SCEN} value={scenario} onPick={setScenario} /></span>
      <span style={{ fontSize: 11 }}><b>Decision (screen 7):</b> <Chips items={["Approve (No change)", "Modify (Apply proposed terms)", "Reject (Return or decline)"]} value={decision} onPick={setDecision} /></span>
      <button type="button" className="tks-btn" onClick={() => { setSubmitted(true); setS(7); }}>Submit decision</button>
      {submitted ? <span style={{ fontSize: 11 }}>Submitted — see Audit confirmation (screen 8).</span> : null}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 10 }}>
      {[["On-image copy", "Lender Critical Task Flow · Review a changing asset signal without surrendering judgment to the model. Portfolio overview (Demo data)."], ["Production method", "Built with real UI components and a fixed demo dataset. All financial values are Demo data."], ["Motion & responsive behavior (optional)", "Optional motion demonstrates opening a review, inspecting reason codes and choosing Modify. Never animate a rate changing automatically."], ["Do not include", "No claim of regulatory approval, deployed underwriting model or automatic adverse action · No automatic decisions."]].map(([t, b]) => <div key={t} style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", fontSize: 10.3, lineHeight: 1.5, background: "#fff" }}><b>{t}</b><br />{b}</div>)}
    </div>
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
  return <Dv n="19" title="19 Data-to-Credit Decision Flow" sub="Clarify which transformations are model outputs, which are product rules and which require accountable human judgment." label="DeepVise data-to-credit flow — interactive rebuild of DeepVise_19">
    {/* Pass 4: the printed header carries both purpose blocks at
        the top right (the pass-3 residual showed only the Lender
        purpose, on layer 6). Texts transcribed from the print. */}
    <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 9 }}>
      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5, color: "#44536a" }}>🏭 <b style={{ color: "#0B1726" }}>Factory purpose</b><br />Turn machine behavior into trustworthy evidence.</p>
      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5, color: "#44536a", borderLeft: "1px solid #dde4ec", paddingLeft: 18 }}>🏛 <b style={{ color: "#0B1726" }}>Lender purpose</b><br />Convert evidence into sound credit decisions.</p>
    </div>
    <div style={{ position: "relative", marginTop: 20 }}>
      <span aria-hidden="true" style={{ position: "absolute", top: -19, left: "calc(50% + 5px)", fontSize: 9.3, fontWeight: 800, letterSpacing: "0.05em", color: "#2F80ED" }}>MODEL INFERENCE ENDS</span>
      <span aria-hidden="true" style={{ position: "absolute", top: -19, left: "calc(83.33% + 5px)", fontSize: 9.3, fontWeight: 800, letterSpacing: "0.05em", color: "#6C5CE7" }}>POLICY ENDS</span>
      <span aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: "calc(50% - 3.5px)", borderLeft: "2px dashed #2F80ED", opacity: 0.65 }} />
      <span aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: "calc(83.33% - 3.5px)", borderLeft: "2px dashed #6C5CE7", opacity: 0.65 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7, alignItems: "stretch" }}>
      {LAYERS19.map(([t, body, status], i) => {
        const head = ["#102A43", "#102A43", "#2F80ED", "#12C7D4", "#6C5CE7", "#0B1726"][i];
        return <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? head : "#dde4ec"}`, borderRadius: 11, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", height: "100%" }}>
          <span style={{ display: "block", background: head, color: "#fff", padding: "6px 9px", fontSize: 11.3, fontWeight: 800 }}>{t}<br /><span style={{ fontWeight: 600, fontSize: 9.3, opacity: 0.85 }}>{status}</span></span>
          <span style={{ display: "block", padding: "6px 7px" }}>
            {body.split(" · ").map((seg2) => { const m = seg2.match(/^(.*?)\s([0-9$(≥≤].*)$/); return <span key={seg2} style={{ display: "block", background: "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 6, padding: "3px 6px", marginBottom: 4, fontSize: 9.3, lineHeight: 1.45, color: "#44536a" }}>{m ? <><span style={{ color: "#7c8798" }}>{m[1]}</span><br /><b style={{ color: "#0B1726" }}>{m[2]}</b></> : seg2}</span>; })}
          </span>
        </button>;
      })}
      </div>
    </div>
    <p style={{ fontSize: 10.5, color: "#55606e", margin: "7px 0 0" }}>Boundary markers as printed: <b>MODEL INFERENCE ENDS</b> after the Health model layer (evidence created) · <b>POLICY ENDS</b> before the Human decision layer (human decision begins).</p>
    <p style={{ fontSize: 11, color: "#55606e", margin: "9px 0 0" }}>Evidence status key: <b>Built</b> = implemented and operational · <b>Reconstructed</b> = derived for decision use · <b>Proposed</b> = concept / not implemented. Human review is mandatory — a person owns the decision and records the rationale; every decision, data version and rationale must be auditable and retained.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", marginTop: 10 }}>
      <div className="tks-card"><b>Model output is evidence.</b><p style={{ margin: "4px 0 0", color: "#555" }}>The model measures machine health and produces evidence.</p></div>
      <div className="tks-card"><b>Policy converts evidence into a recommendation.</b><p style={{ margin: "4px 0 0", color: "#555" }}>Policy applies rules and context to produce options, not a decision.</p></div>
      <div className="tks-card"><b>A person owns the decision.</b><p style={{ margin: "4px 0 0", color: "#555" }}>Accountable human judgment is required and recorded.</p></div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 8, marginTop: 10 }}>
      <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 10px", fontSize: 10.5, lineHeight: 1.55, background: "#fff" }}><b>Source and evidence boundary</b><br />Original deck pages 19–30 support the signal and model path (signals → features → model). Original deck pages 32–34 support the finance concept (policy and context). The separation between derived signal, policy and human decision is a portfolio governance improvement.</div>
      <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 10px", fontSize: 10.5, lineHeight: 1.55, background: "#fff" }}><b>Production method</b><br />Layered flow diagram built from the deck's signal, model and finance pages; boundary markers show where inference ends and where policy ends.</div>
      <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 10px", fontSize: 10.5, lineHeight: 1.55, background: "#fff" }}><b>Legend</b><br />Built — implemented and operational · Reconstructed — derived for decision use · Proposed — concept / not implemented.</div>
    </div>
    <p style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 9, padding: "7px 12px", margin: "8px 0 0", fontSize: 11 }}><b style={{ color: "#fff" }}>Motion – Permission – Audit:</b> Permission &amp; consent are mandatory steps — no decision is made without valid consent and human review. Every decision, data version and rationale is auditable and retained.</p>
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
    <div style={{ display: "grid", gridTemplateColumns: "1fr 224px", gap: 12, alignItems: "start" }}>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr) 74px", gap: 6, alignItems: "stretch" }}>
          {TIMELINE20.slice(0, 6).map(([t, dec, status], i) => {
            const thumbs = [
              <span key="th" style={{ display: "block", height: 58, borderRadius: 5, background: "#0B1726", padding: "5px 6px", boxSizing: "border-box" }}>
                <svg viewBox="0 0 100 46" style={{ width: "100%", height: "100%", display: "block" }} aria-hidden="true"><rect x="1" y="1" width="30" height="12" rx="2" fill="#132a42" /><rect x="35" y="1" width="30" height="12" rx="2" fill="#132a42" /><rect x="69" y="1" width="30" height="12" rx="2" fill="#132a42" /><text x="5" y="10" fontSize="7" fill="#12C7D4">68.4</text><text x="39" y="10" fontSize="7" fill="#dbe5f0">128</text><text x="73" y="10" fontSize="7" fill="#dbe5f0">256</text><polyline points="3,40 24,34 45,36 66,26 97,20" fill="none" stroke="#2F80ED" strokeWidth="2" /><line x1="3" y1="42" x2="97" y2="42" stroke="#22344d" /></svg>
              </span>,
              <span key="th" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, height: 58 }}><span style={{ background: "#fde9a8", borderRadius: 2 }} /><span style={{ background: "#cfe3fb", borderRadius: 2 }} /><span style={{ background: "#e5ddfb", borderRadius: 2 }} /><span style={{ background: "#d8f0e4", borderRadius: 2 }} /><span style={{ background: "#fbd3d3", borderRadius: 2 }} /><span style={{ background: "#fde9a8", borderRadius: 2 }} /></span>,
              <span key="th" style={{ display: "block", height: 58, borderRadius: 5, background: "radial-gradient(circle at 35% 40%, #e33, #f90 30%, #3c6 55%, #26c 80%, #124)" }} />,
              <span key="th" style={{ display: "block", height: 58, borderRadius: 5, background: "#eef4fa", padding: "4px 5px", boxSizing: "border-box" }}>
                <svg viewBox="0 0 100 50" style={{ width: "100%", height: "100%", display: "block" }} aria-hidden="true"><circle cx="50" cy="25" r="9" fill="#fff" stroke="#2F80ED" strokeWidth="1.8" /><circle cx="14" cy="10" r="5" fill="#fff" stroke="#12C7D4" strokeWidth="1.6" /><circle cx="86" cy="10" r="5" fill="#fff" stroke="#12C7D4" strokeWidth="1.6" /><circle cx="14" cy="41" r="5" fill="#fff" stroke="#6C5CE7" strokeWidth="1.6" /><circle cx="86" cy="41" r="5" fill="#fff" stroke="#6C5CE7" strokeWidth="1.6" /><path d="M18 13 L42 21 M82 13 L58 21 M18 38 L42 29 M82 38 L58 29" stroke="#7c93ad" strokeWidth="1.4" /></svg>
              </span>,
              <span key="th" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 2, height: 58 }}><span style={{ background: "#102A43", borderRadius: 2, padding: 3 }}><span style={{ display: "block", height: 5, background: "#12C7D4", borderRadius: 1, marginBottom: 3 }} /><span style={{ display: "block", height: 5, background: "#2F80ED", borderRadius: 1, marginBottom: 3 }} /><span style={{ display: "block", height: 5, background: "#22344d", borderRadius: 1 }} /></span><span style={{ background: "#eef1f6", border: "1px solid #d5dde8", borderRadius: 2, padding: 3 }}><span style={{ display: "block", height: 6, background: "#c3cedb", borderRadius: 1, marginBottom: 3 }} /><span style={{ display: "block", height: 6, background: "#dde4ec", borderRadius: 1, marginBottom: 3, width: "72%" }} /><span style={{ display: "block", height: 6, background: "#dde4ec", borderRadius: 1, width: "85%" }} /></span></span>,
              <span key="th" style={{ display: "block", height: 58, background: "#0B1726", borderRadius: 5, color: "#fff", textAlign: "center", lineHeight: "58px", fontSize: 16 }}>▶</span>,
            ];
            return <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "7px 8px", cursor: "pointer", font: "inherit" }}>
              <b style={{ fontSize: 11.3, color: "#0B1726" }}>{t}</b>
              <span style={{ display: "block", margin: "5px 0" }}>{thumbs[i]}</span>
              <span style={{ display: "block", fontSize: 9.5, fontWeight: 700, color: "#7c8798" }}>Decision</span>
              <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.45, color: "#44536a", marginTop: 1 }}>{dec}</span>
              <span style={{ display: "block", fontSize: 9.3, fontWeight: 700, color: "#0e7c86", marginTop: 4 }}>✓ {status}</span>
            </button>;
          })}
          <div style={{ border: "1.5px dashed #D99A2B", borderRadius: 11, padding: "8px 7px", background: "#fffaf0", textAlign: "center" }}>
            <b style={{ fontSize: 10.5, color: "#7a5410" }}>⬢ Evidence gate</b>
            <p style={{ margin: "3px 0 0", fontSize: 9.3, lineHeight: 1.45, color: "#7a5410" }}>Evidence reviewed and accepted — prototype meets competition requirements. ✓ Approved — Ready for presentation.</p>
          </div>
          <button type="button" onClick={() => setS(6)} aria-pressed={s === 6} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${s === 6 ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "7px 8px", cursor: "pointer", font: "inherit" }}>
            <b style={{ fontSize: 11.3, color: "#0B1726" }}>{TIMELINE20[6][0]}</b>
            <span style={{ display: "block", margin: "5px 0", height: 58, background: "linear-gradient(120deg,#102A43,#2F80ED)", borderRadius: 5, color: "#fff", fontSize: 9.5, padding: "5px 6px", boxSizing: "border-box" }}>DeepVise<br /><b style={{ fontSize: 11 }}>36-page deck</b><br /><span style={{ color: "#bcd6f7" }}>Competition submission · 08 Dec 2024</span></span>
            <span style={{ display: "block", fontSize: 9.5, fontWeight: 700, color: "#7c8798" }}>Decision</span>
            <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.45, color: "#44536a", marginTop: 1 }}>{TIMELINE20[6][1]}</span>
            <span style={{ display: "block", fontSize: 9.3, fontWeight: 700, color: "#0e7c86", marginTop: 4 }}>✓ {TIMELINE20[6][2]}</span>
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 8, marginTop: 10 }}>
          <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 10px", fontSize: 10.5, lineHeight: 1.55, background: "#fff" }}><b>Source and evidence boundary</b><br />Verified: Competition submission date (08 Dec 2024) and 36-page deck. Evidence: Artifacts shown above are from the 2024 competition prototype. Boundary: Any durations, team capacity or delivery schedule are omitted until supported.</div>
          <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 9, padding: "7px 10px", fontSize: 10.5, lineHeight: 1.55 }}><b style={{ color: "#fff" }}>2024 Competition Prototype</b><br />Purpose: Prove product direction · Artifacts: Prototype, demo, models, submission · Status: Submitted on 08 Dec 2024.</div>
          <div style={{ background: "#102A43", color: "#dbe5f0", borderRadius: 9, padding: "7px 10px", fontSize: 10.5, lineHeight: 1.55 }}><b style={{ color: "#fff" }}>2026 Portfolio Reconstruction</b><br />Purpose: Make decisions, states and governance legible · Artifacts: Reconstruction deliverables · Status: In progress.</div>
        </div>
      </div>
      <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 11, padding: "11px 13px" }}>
        <p style={{ margin: 0, fontSize: 10.5, fontWeight: 800, letterSpacing: "0.08em", color: "#12C7D4" }}>DELIVERABLES BY SCOPE</p>
        {DELIV20.map(([t, intro, items], di) => <div key={t} style={{ marginTop: 10, borderTop: di > 0 ? "1px solid #22344d" : undefined, paddingTop: di > 0 ? 9 : 0 }}>
          <b style={{ color: ["#2fbf9b", "#7db4f2", "#c9bdf5"][di], fontSize: 12.5 }}>{t}</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.5, lineHeight: 1.5, color: "#9fb2c8" }}>{intro}</p>
          <ul style={{ margin: "5px 0 0", paddingLeft: 15, fontSize: 10.8, lineHeight: 1.6 }}>{items.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>)}
      </div>
    </div>
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
  return <Dv n="21" title="ACT IV · Assumptions, Risks and Guardrails — Risk register for federated credit intelligence" sub="A federated system reduces one class of privacy risk. It does not remove data quality, security, governance or fairness risk. Severity legend (as printed): Critical (high impact, urgent) · High (significant impact) · Medium (moderate impact) · Low (low impact)." label="DeepVise risk register — interactive rebuild of DeepVise_21">
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 11, marginBottom: 7 }}>
      <span><span style={{ color: "#D95C5C" }}>●</span> Critical (high impact, urgent)</span><span><span style={{ color: "#D99A2B" }}>●</span> High (significant impact)</span><span><span style={{ color: "#2F80ED" }}>●</span> Medium (moderate impact)</span><span><span style={{ color: "#637083" }}>●</span> Low (low impact)</span>
      <span style={{ marginLeft: "auto", color: "#55606e" }}>Groups: <b style={{ color: "#2F80ED" }}>Data</b> · <b style={{ color: "#6C5CE7" }}>Model</b> · <b style={{ color: "#0e7c86" }}>Operations</b> · <b style={{ color: "#b03a3a" }}>Finance</b></span>
    </div>
    <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr>{["Group", "Assumption", "Failure mode", "Product guardrail", "Evidence or owner"].map((h) => <th key={h} style={{ background: "#102A43", color: "#fff" }}>{h}</th>)}</tr></thead>
      <tbody>{RISKS21.map((row, i) => <tr key={row.n} onClick={() => setR(i)} style={{ cursor: "pointer", background: i === r ? "#eef1f6" : undefined }}><td><span style={{ display: "inline-block", background: row.group === "Data" ? "#e3edfb" : row.group === "Model" ? "#efeaff" : row.group === "Operations" ? "#e2f2f0" : "#fbeaea", borderRadius: 6, padding: "1px 8px", fontWeight: 700 }}>{row.group}</span></td><td><b>{row.n} · {row.assumption}</b></td><td>{row.failure}</td><td>✓ {row.guardrail}<span style={{ display: "block", color: "#55606e", fontSize: 10.5, marginTop: 2 }}>{row.detail}</span></td><td>{row.owner}<span style={{ display: "block", color: "#55606e", fontSize: 10.5, marginTop: 2 }}>{row.evidence}</span><span style={{ display: "block", color: "#0e7c86", fontWeight: 700, fontSize: 10.5, marginTop: 2 }}>Evidence: Available</span>{row.sev ? <span style={{ display: "block", fontSize: 10.5, marginTop: 2 }}>Severity: <b>{row.sev}</b></span> : null}</td></tr>)}</tbody></table></div>
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
const sketch22 = (n: number) => <svg viewBox="0 0 200 64" style={{ width: "100%", height: 62, display: "block" }} aria-hidden="true">
  <rect x="1" y="1" width="198" height="62" rx="5" fill="#fbfcfe" stroke="#d5dde8" />
  <g stroke="#637083" fill="none" strokeWidth="1.5">
    {n === 1 ? <><rect x="70" y="6" width="60" height="12" /><rect x="34" y="28" width="44" height="11" /><rect x="122" y="28" width="44" height="11" /><rect x="16" y="48" width="30" height="10" /><rect x="58" y="48" width="30" height="10" /><rect x="112" y="48" width="30" height="10" /><rect x="154" y="48" width="30" height="10" /><path d="M100 18 L100 23 M56 28 L56 23 L144 23 L144 28 M31 39 L31 48 M73 39 L73 48 M127 39 L127 48 M169 39 L169 48" /></>
      : n === 2 ? <><polyline points="12,48 50,38 88,42 126,26 188,18" stroke="#2F80ED" strokeWidth="2" /><line x1="12" y1="54" x2="188" y2="54" />{[0, 1, 2].map((r) => <g key={r}><rect x="12" y={6 + r * 0} width="0" height="0" /></g>)}<rect x="140" y="34" width="48" height="18" /><path d="M146 43 L182 43 M146 48 L170 48" stroke="#b9c6d4" /></>
      : n === 3 ? <>{[10, 22, 34, 46].map((y) => <line key={y} x1="12" y1={y} x2="188" y2={y} stroke="#dde4ec" strokeWidth="3" />)}<line x1="60" y1="5" x2="60" y2="58" stroke="#eef1f6" /><line x1="120" y1="5" x2="120" y2="58" stroke="#eef1f6" /></>
      : n === 4 ? <>{[0, 1, 2, 3].map((k) => <g key={k}><rect x={10 + k * 47} y="22" width="38" height="18" rx="3" />{k < 3 ? <path d={`M${48 + k * 47} 31 L${57 + k * 47} 31`} stroke="#2F80ED" /> : null}</g>)}</>
      : n === 5 ? <>{[0, 1, 2, 3].map((c) => [0, 1, 2, 3].map((r) => <rect key={`${c}${r}`} x={52 + c * 25} y={8 + r * 13} width="21" height="9" fill={(c + r) % 3 === 0 ? "#cfe3fb" : "#fff"} />))}</>
      : n === 6 ? <><circle cx="100" cy="32" r="10" />{[36, 164, 36, 164].map((x, k) => <g key={k}><circle cx={x} cy={k % 2 ? 50 : 14} r="7" /><path d={`M${x} ${k % 2 ? 43 : 21} L${100 + (x < 100 ? -8 : 8)} ${32 + (k % 2 ? 5 : -5)}`} /></g>)}</>
      : n === 7 ? <><rect x="12" y="10" width="70" height="44" /><path d="M20 20 L74 20 M20 28 L64 28 M20 36 L70 36" stroke="#b9c6d4" />{[0, 1, 2, 3].map((r) => <g key={r}><rect x="104" y={10 + r * 12} width="84" height="9" fill={r === 0 ? "#eef6ff" : "#fff"} /><path d={`M110 ${15 + r * 12} L140 ${15 + r * 12}`} stroke="#b9c6d4" /></g>)}</>
      : n === 8 ? <><rect x="12" y="12" width="82" height="40" /><path d="M22 24 l6 6 l10 -12" stroke="#1d9e57" strokeWidth="2.2" /><path d="M22 36 L84 36 M22 44 L70 44" stroke="#b9c6d4" /><rect x="106" y="12" width="82" height="40" /><path d="M116 24 l10 10 M126 24 l-10 10" stroke="#D95C5C" strokeWidth="2.2" /><path d="M116 44 L178 44" stroke="#b9c6d4" /></>
      : n === 9 ? <>{[0, 1, 2].map((c) => <g key={c}><rect x={16 + c * 58} y="10" width="50" height="44" fill={c === 0 ? "#eef6ff" : "#fff"} />{[0, 1, 2].map((r) => <line key={r} x1={22 + c * 58} y1={22 + r * 11} x2={60 + c * 58} y2={22 + r * 11} stroke="#b9c6d4" />)}</g>)}</>
      : n === 10 ? <><rect x="46" y="8" width="108" height="48" rx="5" /><path d="M58 20 L142 20 M58 29 L120 29" stroke="#b9c6d4" /><rect x="58" y="38" width="34" height="11" /><rect x="100" y="38" width="42" height="11" fill="#2F80ED" stroke="none" /></>
      : n === 11 ? <><rect x="12" y="10" width="82" height="44" /><path d="M20 20 L86 20 M20 29 L86 29 M20 38 L70 38" stroke="#1d9e57" /><rect x="106" y="10" width="82" height="44" /><path d="M114 20 L180 20 M114 29 L180 29" stroke="#D95C5C" strokeDasharray="4 3" /></>
      : <>{[0, 1, 2, 3].map((r) => <g key={r}><line x1="12" y1={14 + r * 12} x2="188" y2={14 + r * 12} stroke="#dde4ec" strokeWidth="3" /><circle cx="18" cy={14 + r * 12} r="2.4" fill="#2F80ED" stroke="none" /></g>)}</>}
  </g>
</svg>;
export function DeepViseEarlySketches() {
  const [sel, setSel] = useState(2);
  const colHeads: Array<[string, string]> = [["FACTORY", "#0e7c86"], ["FEDERATION", "#2F80ED"], ["FINANCE", "#6C5CE7"], ["GOVERNANCE", "#102A43"]];
  return <Dv n="22" title="22 Early Sketches and Decision Models" sub="Retrospective reconstruction. The early work focused on decisions and evidence: what changed, why it mattered, who could act and what had to remain private." label="DeepVise early sketches — interactive rebuild of DeepVise_22">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, alignItems: "start" }}>
      {colHeads.map(([head, color], ci) => <div key={head}>
        <p style={{ margin: "0 0 6px", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color, borderBottom: `2.5px solid ${color}`, paddingBottom: 4 }}>{head}</p>
        <div style={{ display: "grid", gap: 7 }}>
          {SKETCH22.filter((x) => x.n >= ci * 3 + 1 && x.n <= ci * 3 + 3).map((x) => <button key={x.n} type="button" onClick={() => setSel(x.n - 1)} aria-pressed={sel === x.n - 1} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${sel === x.n - 1 ? "#2F80ED" : "#dde4ec"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 11.8, color: "#0B1726" }}>{x.n} · {x.title}</b><span className="tks-tag" style={x.status === "Rejected" ? { color: "#b3352c", borderColor: "#b3352c" } : undefined}>{x.status}</span></span>
            <span style={{ display: "block", marginTop: 5 }}>{sketch22(x.n)}</span>
            <span style={{ display: "block", fontSize: 9.6, lineHeight: 1.5, color: "#44536a", marginTop: 4, background: "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 6, padding: "4px 6px" }}>{x.note}</span>
            <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#55606e", marginTop: 5 }}><b>What question was this testing?</b><br /><i>{x.q}</i></span>
          </button>)}
        </div>
      </div>)}
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
  return <Dv n="23" title="23. Low-Fidelity Wireframe System" sub="Wireframes tested the information order and decision paths before color, photography or motion. Portfolio reconstruction: The original deck contains final prototype captures but not a complete wireframe set." label="DeepVise wireframe system — interactive rebuild of DeepVise_23">
    <div style={{ display: "grid", gridTemplateColumns: "168px 1fr", gap: 9, alignItems: "start" }}>
    <div style={{ display: "grid", gap: 7 }}>
      {[["1 — How does the system maintain persistent context?", "Global context (party, workspace, user, time) stays visible across all tasks and states."], ["2 — How is evidence organized and prioritized?", "Evidence is grouped by source and type, with status and recency clearly indicated."], ["3 — How can users recover from exceptions?", "Clear states, messages and next actions help users detect issues and recover quickly."]].map(([q, a], qi) => <div key={q} style={{ border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 10px", background: "#fff", fontSize: 10.6, lineHeight: 1.55 }}><span style={{ display: "inline-flex", width: 20, height: 20, borderRadius: "50%", background: "#2F80ED", color: "#fff", fontWeight: 800, fontSize: 11, alignItems: "center", justifyContent: "center", marginBottom: 4 }}>{qi + 1}</span><br /><b>{q.replace(/^\d — /, "")}</b><br /><span style={{ color: "#44536a" }}>{a}</span></div>)}
    </div>
    <div style={{ display: "grid", gap: 7 }}>
      {WIREFRAMES23.map((dom2, di) => (
        <div key={dom2.domain} style={{ display: "grid", gridTemplateColumns: "92px repeat(4,1fr)", gap: 6, alignItems: "stretch" }}>
          <div style={{ background: "#eef2f7", color: "#33465e", border: "1px solid #d5dde8", borderRadius: 10, padding: "7px 8px" }}>
            <b style={{ color: "#0B1726", fontSize: 11.8 }}>{["🏭", "⬡", "🏛", "⚖"][di]} {dom2.domain}</b>
            <p style={{ margin: "3px 0 0", fontSize: 9.3, lineHeight: 1.45, color: "#55606e" }}>{dom2.blurb}</p>
          </div>
          {dom2.screens.map(([t, st, body], si) => {
            const key = `${di}-${si}`;
            return <button key={t} type="button" onClick={() => setSel(key)} aria-pressed={sel === key} style={{ textAlign: "left", background: "#fbfcfe", border: `1.5px solid ${sel === key ? "#2F80ED" : "#cfd9e4"}`, borderRadius: 9, padding: "7px 9px", cursor: "pointer", font: "inherit", opacity: stateFilter && st !== stateFilter ? 0.35 : 1 }}>
              <b style={{ fontSize: 11.3, color: "#0B1726" }}>{t}</b> <span className="tks-tag">{st}</span>
              <span aria-hidden="true" style={{ display: "block", border: `1.5px ${st === "Normal State" ? "solid" : "dashed"} #8fa5bd`, borderRadius: 5, margin: "5px 0", padding: 4, background: "#fff" }}>
                <span style={{ display: "flex", gap: 3 }}>
                  <span style={{ width: 14, height: 34, background: "#dde4ec", borderRadius: 2, flex: "none" }} />
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", height: 6, background: "#c3cedb", borderRadius: 2 }} />
                    {st.includes("State") && st !== "Normal State" ? <span style={{ display: "block", marginTop: 4, textAlign: "center", fontSize: 8.5, color: "#b3352c", fontWeight: 700 }}>{st === "Loading State" ? "◌ Loading…" : st}</span> : <>
                      <span style={{ display: "block", height: 5, background: "#e6ecf2", borderRadius: 2, marginTop: 3 }} />
                      <span style={{ display: "block", height: 5, background: "#e6ecf2", borderRadius: 2, marginTop: 2, width: "70%" }} />
                      <span style={{ display: "block", height: 5, background: "#e6ecf2", borderRadius: 2, marginTop: 2, width: "85%" }} />
                    </>}
                  </span>
                </span>
              </span>
              <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#44536a", marginTop: 4 }}>{body}</span>
            </button>;
          })}
        </div>
      ))}
    </div>
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
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr 168px", gap: 11, alignItems: "start" }}>
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
        <div style={{ background: "#fff", color: "#33465e", border: "1px solid #dde4ec", borderRadius: 12, padding: "11px 14px" }}>
          <p style={{ margin: 0, fontSize: 11, color: "#7c8798" }}>Overview · Assets · Monitoring · Diagnostics · Forecasting · Workflows · Reports · Data Explorer · Settings</p>
          <p style={{ margin: "7px 0 0", fontSize: 14, color: "#0B1726" }}><b>Compressor Train 7A</b> · ✓ Validated · Site A · <span style={{ fontFamily: "ui-monospace, monospace" }}>UTC 2025-05-20 14:32:18</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, marginTop: 8 }}>
            {[["Health Index", "92 /100 · Validated"], ["Remaining Life", "239 days · Review"], ["Vibration (RMS)", "2.18 mm/s · Validated"], ["Temperature", "71.4 °C · Review"], ["Anomaly Score", "0.18 /1.00 · Review"], ["Spectral Density", "10¹–10⁴ Hz · Current vs Baseline"]].map(([k, v]) => <div key={k} style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 8px", background: "#F6F8FB" }}><span style={{ color: "#7c8798", fontSize: 9.5 }}>{k}</span><br /><b style={{ color: "#0B1726", fontSize: 12 }}>{v}</b></div>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 8px" }}>
              <span style={{ color: "#7c8798", fontSize: 9.5 }}>Vibration (RMS) over time · May 13–20 · vs Baseline 1.75 mm/s</span>
              <svg viewBox="0 0 150 56" width="100%" height="54" role="img" aria-label="Vibration RMS over time, May 13 to 20, against baseline" style={{ display: "block", marginTop: 3 }}>
                <line x1="0" y1="34" x2="150" y2="34" stroke="#b9c6d4" strokeDasharray="4 3" />
                <polyline points="0,32 20,31 40,32 60,30 80,29 100,26 120,23 140,20 150,19" fill="none" stroke="#0e7c86" strokeWidth="1.8" />
                <circle cx="136" cy="21" r="3" fill="#0e7c86" />
                <text x="52" y="10" fontSize="7.5" fill="#44536a">May 20 14:00 — RMS 2.18</text>
                <text x="2" y="52" fontSize="7.5" fill="#7c8798">May 13</text><text x="128" y="52" fontSize="7.5" fill="#7c8798">May 20</text>
              </svg>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 8px" }}>
              <span style={{ color: "#7c8798", fontSize: 9.5 }}>Spectral Density — Current vs Baseline · 10¹–10⁴ Hz</span>
              <svg viewBox="0 0 150 56" width="100%" height="54" role="img" aria-label="Spectral density chart, current against baseline" style={{ display: "block", marginTop: 3 }}>
                <path d="M4,48 L20,44 L36,30 L52,38 L68,18 L84,34 L100,26 L116,36 L132,30 L146,40 L146,50 L4,50 Z" fill="rgba(47,128,237,0.18)" />
                <polyline points="4,48 20,44 36,30 52,38 68,18 84,34 100,26 116,36 132,30 146,40" fill="none" stroke="#2F80ED" strokeWidth="1.7" />
                <polyline points="4,46 36,42 68,38 100,40 146,44" fill="none" stroke="#637083" strokeWidth="1.2" strokeDasharray="3 3" />
                <text x="58" y="12" fontSize="7.5" fill="#44536a">Peak ≈ 320 Hz</text>
                <text x="2" y="55" fontSize="7.5" fill="#7c8798">10¹</text><text x="132" y="55" fontSize="7.5" fill="#7c8798">10⁴ Hz</text>
              </svg>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 8px" }}>
              <span style={{ color: "#7c8798", fontSize: 9.5 }}>Remaining Life Forecast — Median with 80% Confidence band · May ’25 – May ’26</span>
              <svg viewBox="0 0 150 56" width="100%" height="52" role="img" aria-label="Remaining life forecast with confidence band" style={{ display: "block", marginTop: 3 }}>
                <path d="M0,10 L150,34 L150,50 L0,26 Z" fill="rgba(14,124,134,0.16)" />
                <polyline points="0,18 50,26 100,32 150,42" fill="none" stroke="#0e7c86" strokeWidth="1.8" />
                <line x1="0" y1="46" x2="150" y2="46" stroke="#D95C5C" strokeWidth="1.2" strokeDasharray="4 3" />
                <text x="4" y="54" fill="#D95C5C" fontSize="7.5">Maintenance threshold</text>
              </svg>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 8px" }}>
              <span style={{ color: "#7c8798", fontSize: 9.5 }}>Anomaly Score — 0.18 / 1.00 · Review · threshold 0.50</span>
              <svg viewBox="0 0 150 56" width="100%" height="52" role="img" aria-label="Anomaly score over time with threshold" style={{ display: "block", marginTop: 3 }}>
                <line x1="0" y1="14" x2="150" y2="14" stroke="#D95C5C" strokeWidth="1.2" strokeDasharray="4 3" />
                <text x="118" y="11" fontSize="7.5" fill="#D95C5C">0.50</text>
                <polyline points="0,44 18,42 36,45 54,40 72,43 90,38 108,41 126,36 150,38" fill="none" stroke="#D99A2B" strokeWidth="1.8" />
                {[36, 90, 126].map((x, k) => <circle key={k} cx={x} cy={[45, 38, 36][k]} r="2.4" fill="#D99A2B" />)}
                <text x="2" y="54" fontSize="7.5" fill="#7c8798">Score 0.18 · within normal band</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Pass 4: the printed right-hand photo column — machine,
          sensor and control-room photographs are pure imagery in
          the original and are reproduced as real crops (the pass-3
          note that no clean crop exists was wrong: the photos sit
          in their own column, clear of slide furniture). */}
      <div style={{ display: "grid", gap: 8 }}>
        <img src="/projects/crops/deepvise/dv25-machine.jpg" alt="Industrial compressor machinery, as printed in the slide's photo column" style={{ width: "100%", height: 116, objectFit: "cover", borderRadius: 9, display: "block" }} />
        <img src="/projects/crops/deepvise/dv25-sensor.jpg" alt="Vibration sensor mounted on a pipe, as printed in the slide's photo column" style={{ width: "100%", height: 117, objectFit: "cover", borderRadius: 9, display: "block" }} />
        <img src="/projects/crops/deepvise/dv25-controlroom.jpg" alt="Control room monitoring wall, as printed in the slide's photo column" style={{ width: "100%", height: 88, objectFit: "cover", borderRadius: 9, display: "block" }} />
      </div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Color usage</p><b>DO</b> Use color with semantic meaning and text labels.<br /><b style={{ color: "#b3352c" }}>DON’T</b> Rely on color alone without context.</div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Data visualization</p><b>DO</b> Show context: units, baselines and confidence.<br /><b style={{ color: "#b3352c" }}>DON’T</b> Show charts without scales or context.</div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Typography &amp; numbers</p><b>DO</b> Use clear hierarchy and monospaced numbers for alignment — ASSET ID CT-7A-00023 · 14:32:18 · 92 /100.<br /><b style={{ color: "#b3352c" }}>DON’T</b> Use decorative fonts or misaligned numbers.</div>
    </div>
    <p style={{ color: "#555", margin: "10px 0 0" }}>Source: Original DeepVise deck (pages 1–36) established the name and purple identity. This image: portfolio reconstruction of the new visual system.</p>
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
    {/* Pass 5: the §15 trade-off (rail would compress every specimen
        ~8%) is revisited with the wider canvas — this screen now
        renders on a 1470px design canvas (registry), so the printed
        dark rail fits at 150px while the specimen column is WIDER at
        design size (≈1290px) than the whole pass-4 slide (980px).
        Rail block proportions follow the print's row heights
        (20/12/29/16/23). */}
    <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: 10, alignItems: "stretch" }}>
      <div style={{ background: "#0B1726", borderRadius: 10, color: "#dbe6f2", padding: "12px 12px 10px", display: "flex", flexDirection: "column" }}>
        <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 800, color: "#fff" }}>⬢ DeepVise</p>
        {([
          ["1", "Foundations", "The visual and structural building blocks of the DeepVise system.", "Evidence: Prototype pages 13–14", 20],
          ["2", "Navigation and Actions", "Consistent navigation, primary actions and utility controls.", "Evidence: Prototype pages 13–15", 12],
          ["3", "Data Display", "Present information clearly with scannable patterns and meaningful context.", "Evidence: Prototype pages 13–16", 29],
          ["4", "Decision Components", "Guide decisions with clear comparisons, thresholds and context.", "Evidence: Prototype pages 15–16", 16],
          ["5", "States and Accessibility", "Every interaction state is designed for clarity, recovery and access.", "Evidence: Prototype pages 16–17", 23],
        ] as Array<[string, string, string, string, number]>).map(([num, t, d, ev, grow], i) => <div key={num} style={{ flexGrow: grow, borderTop: i ? "1px solid #22344d" : undefined, paddingTop: i ? 8 : 0, marginTop: i ? 8 : 0 }}>
          <span style={{ fontSize: 19, fontWeight: 800, color: "#12C7D4", lineHeight: 1 }}>{num}</span>
          <b style={{ display: "block", fontSize: 12.5, textTransform: "uppercase", letterSpacing: "0.04em", margin: "4px 0 3px", lineHeight: 1.3 }}>{t}</b>
          <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#a9bcd2" }}>{d}</span>
          <span style={{ display: "block", fontSize: 9.5, lineHeight: 1.45, color: "#7e93ab", marginTop: 4 }}>{ev}</span>
        </div>)}
      </div>
      <div style={{ display: "grid", gap: 8, minWidth: 0, alignContent: "start" }}>
    <p style={{ margin: "0 0 2px", color: "#555" }}>All five printed sections are shown stacked, as on the board, beside the board's dark section rail.</p>
    <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>1 · Foundations</p><p className="tks-kicker" style={{ marginTop: 0 }}>The visual and structural building blocks of the DeepVise system · Color tokens</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 5 }}>
        {TOKENS26.map(([t, role], i) => { const hex = t.split(" ")[1]; return <button key={t} type="button" onClick={() => setTok(i)} aria-pressed={i === tok} style={{ textAlign: "left", background: "transparent", border: i === tok ? "2px solid #2F80ED" : "1px solid #dde4ec", borderRadius: 8, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit" }}>
          <span style={{ display: "block", height: 24, background: hex }} />
          <span style={{ display: "block", padding: "3px 5px", fontSize: 8.8, lineHeight: 1.35 }}><b>{hex}</b><br />{role}</span>
        </button>; })}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.85fr 1.15fr 1fr", gap: 9, marginTop: 9, fontSize: 10.3, lineHeight: 1.5 }}>
        <span><b>Type scale (Inter)</b>{TYPE26.map(([t, s, w], i) => <span key={t} style={{ display: "flex", justifyContent: "space-between", gap: 6, borderTop: "1px solid #eef1f6", padding: "1.5px 0" }}><span style={{ fontSize: [15, 13.5, 12.5, 11.5, 11, 10, 9.5][i], fontWeight: i < 3 ? 600 : 400 }}>{t} — Ag</span><span style={{ color: "#7c8798" }}>{s} · {w}</span></span>)}</span>
        <span><b>Spacing scale (4px)</b><br />{["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"].map((x, i) => <span key={x} style={{ display: "flex", alignItems: "center", gap: 5 }}>{x}<span style={{ height: 5, background: "#2F80ED", width: 4 + i * 5, borderRadius: 2 }} /></span>)}<br /><b>Radius</b><br />xs 2px · sm 4px · md 8px · lg 12px · xl 16px · 2xl 20px</span>
        <span><b>Border &amp; Elevation</b><br />border-default 1px · border-strong 1px #CBD5E1 · border-focus 2px #2F80ED · elevation-0 none · elevation-1 0 1px 2px rgba(11,23,38,.06) · elevation-2 0 4px 8px rgba(11,23,38,.08) · elevation-3 0 12px 24px rgba(11,23,38,.12)</span>
        <span><b>Grid series</b><br />Series 1 #2F80ED · Series 2 #12C7D4 · Series 3 #6C5CE7 · Series 4 #D99A2B · Series 5 #637083 · Baseline #102A43 · Threshold +/− #D95C5C</span>
      </div></div>
    <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>2 · Navigation & Actions</p><p className="tks-kicker" style={{ marginTop: 0 }}>Consistent navigation, primary actions and utility controls</p>
      <div style={{ display: "flex", gap: 12, alignItems: "center", background: "#fff", border: "1px solid #dde4ec", borderRadius: 9, padding: "6px 12px", fontSize: 11.5, flexWrap: "wrap" }}>
        <b style={{ color: "#0B1726" }}>DeepVise</b><span>Home</span><span>Monitor</span><span style={{ color: "#2F80ED", fontWeight: 700, borderBottom: "2.5px solid #2F80ED", paddingBottom: 2 }}>Finance</span><span>Risk</span><span>Reports</span><span>Admin</span>
        <span style={{ marginLeft: "auto", display: "flex", gap: 9, alignItems: "center" }}><span style={{ border: "1px solid #dde4ec", borderRadius: 6, padding: "2px 9px", color: "#7c8798" }}>Search entities, accounts, reports…</span><span>🔔<sup>3</sup></span><span>?</span><span style={{ width: 22, height: 22, borderRadius: "50%", background: "#102A43", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9.5, fontWeight: 700 }}>AL</span></span>
      </div>
      <p style={{ margin: "5px 0 0", fontSize: 11, color: "#44536a" }}>Sub-nav: Overview · Cash &amp; Liquidity · Profitability · Forecasts · Commitments · Covenants</p>
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
        <span style={{ fontSize: 11, color: "#7c8798" }}>Actions</span>
        <button type="button" className="tks-btn">+ Create report ▾</button>
        <button type="button" className="tks-btn tks-btn--ghost">Export ▾</button>
        <button type="button" className="tks-btn tks-btn--ghost">Share ▾</button>
        <button type="button" className="tks-btn tks-btn--ghost" aria-label="More actions">⋮</button>
        <button type="button" style={{ background: "#D95C5C", color: "#fff", border: "none", borderRadius: 8, padding: "7px 13px", cursor: "pointer", font: "inherit", fontWeight: 700 }}>Delete ▾</button>
        <span style={{ fontSize: 10.5, color: "#7c8798" }}>Primary · Secondary · Tertiary · Destructive</span>
      </div></div>
    <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>3 · Data Display</p><p className="tks-kicker" style={{ marginTop: 0 }}>Present information clearly with scannable patterns and meaningful context</p>
      <p style={{ margin: 0, fontSize: 11.5 }}>Filters: <b>Date range</b> Apr 1 – May 31, 2024 · <b>Entity:</b> All entities · <b>Currency:</b> USD · More filters ⌄</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, marginTop: 7 }}>
        {[["Cash Balance", "USD 128.4M", "↑ 8.7%", "#1d9e57", "Bank stmt."], ["EBITDA", "USD 42.7M", "↓ −4.3%", "#b3352c", "GL"], ["Covenant Headroom · Total Leverage", "1.35x", "↑ 0.12x", "#1d9e57", "Covenant calc."]].map(([k, v, d, c, ev2]) => <div key={k} style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 10px", background: "#fff" }}><span style={{ fontSize: 10.3, color: "#7c8798" }}>{k}</span><br /><b style={{ fontSize: 16, color: "#0B1726" }}>{v}</b> <b style={{ color: c, fontSize: 11.5 }}>{d}</b><br /><span style={{ fontSize: 9.8, color: "#7c8798" }}>vs Apr 1 – Mar 31 · Evidence: {ev2}</span></div>)}
      </div>
      <table className="tks-table" style={{ marginTop: 8 }}><thead><tr><th>Entity</th><th>Cash Balance (USD)</th><th>Change (%)</th><th>As of</th><th>Evidence</th><th>Updated</th></tr></thead><tbody>
        <tr><td>Northwind Ltd.</td><td>128,400,000</td><td>+8.7%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>2h ago ●</td></tr>
        <tr><td>BluePeak LLC</td><td>74,210,000</td><td>−1.2%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>4h ago ●</td></tr>
        <tr><td>Summit Ops Inc.</td><td>32,880,000</td><td>+3.4%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>6h ago ●</td></tr>
        <tr><td>Frontier Co.</td><td>16,640,000</td><td>−7.6%</td><td>May 31, 2024</td><td>Bank stmt.</td><td>1d ago ●</td></tr></tbody></table>
      <p style={{ margin: "8px 0 0", fontSize: 11 }}>1–4 of 4 · page 1 · 20 / page. Tabs: Overview · Trends · Breakdown · Benchmarks (EBITDA (USD) Jan–May).</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, marginTop: 7, fontSize: 10.5, lineHeight: 1.55 }}>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}><b>Side panel — Entity details</b><br />Northwind Ltd. · Entity ID NW-1001 · Industry Manufacturing · Region North America · Relationship Borrower · <span style={{ color: "#2F80ED" }}>[View full profile]</span></div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}><b>Dialog (Confirm)</b><br />⚠ Delete forecast? This action cannot be undone.<br /><span style={{ display: "inline-block", border: "1px solid #c3cedb", borderRadius: 6, padding: "1px 8px", marginTop: 3 }}>Cancel</span> <span style={{ display: "inline-block", background: "#D95C5C", color: "#fff", borderRadius: 6, padding: "1px 8px", marginTop: 3 }}>Delete</span></div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}><b>Form (Edit)</b><br />Report name* Monthly Liquidity Report · Frequency* Monthly · Owner* Alex Lee<br /><span style={{ display: "inline-block", background: "#2F80ED", color: "#fff", borderRadius: 6, padding: "1px 8px", marginTop: 3 }}>Save changes</span> <span style={{ display: "inline-block", border: "1px solid #c3cedb", borderRadius: 6, padding: "1px 8px", marginTop: 3 }}>Cancel</span></div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}><b>Alert banners &amp; evidence chips</b><br />ℹ Data import completed successfully · ⚠ 3 accounts need attention due to unusual activity · ⚠ Covenant breach detected for 2 entities<br />Bank stmt. May 31, 2024 ✓ Verified · GL May 31, 2024 ✓ Verified · Covenant calc. Calculated · Manual input Unverified</div>
      </div>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Permission badges — select</p>
      <Chips items={PERMS.map(([t]) => t)} value={perm} onPick={setPerm} />
      <p style={{ margin: "6px 0 0" }} aria-live="polite">{PERMS[perm][0]}: {PERMS[perm][1]}</p></div>
    <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>4 · Decision Components</p><p className="tks-kicker" style={{ marginTop: 0 }}>Guide decisions with clear comparisons, thresholds and context</p>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr 1fr 1fr", gap: 7, fontSize: 10.5, lineHeight: 1.55 }}>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}>
          <b>KPI with threshold — Total Leverage</b><br /><b style={{ fontSize: 17, color: "#0B1726" }}>3.25x</b> <span style={{ color: "#1d9e57", fontWeight: 700 }}>✓ Within limit</span><br />Threshold ≤ 3.50x
          <span style={{ display: "block", height: 8, borderRadius: 4, background: "linear-gradient(90deg,#2fbf9b 0 62%,#D99A2B 62% 75%,#D95C5C 75% 100%)", marginTop: 4, position: "relative" }}><span style={{ position: "absolute", left: "62%", top: -3, width: 2.5, height: 14, background: "#0B1726" }} /></span>
          <span style={{ display: "flex", justifyContent: "space-between", color: "#7c8798" }}><span>2.0x</span><span>4.0x</span></span>
        </div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}>
          <b>Variance table</b>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 3 }}>
            <thead><tr style={{ color: "#7c8798", textAlign: "left" }}><th></th><th>Actual</th><th>Plan</th><th>Variance</th><th>%</th></tr></thead>
            <tbody>{[["Revenue", "142.3M", "135.0M", "+7.3M", "+5.4%"], ["EBITDA", "42.7M", "45.0M", "−2.3M", "−5.1%"], ["Op. Cash Flow", "31.6M", "28.0M", "+3.6M", "+12.9%"]].map(([a, b, c2, d, e]) => <tr key={a} style={{ borderTop: "1px solid #e6ecf2" }}><td>{a}</td><td>{b}</td><td>{c2}</td><td>{d}</td><td>{e}</td></tr>)}</tbody>
          </table>
        </div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}>
          <b>Forecast range chart</b><br /><span style={{ color: "#7c8798" }}>Cash Balance (USD) Actual vs Forecast (P50), Jan–Jul</span>
          <svg viewBox="0 0 120 40" style={{ width: "100%", height: 38, display: "block", marginTop: 3 }} aria-hidden="true"><path d="M0,26 L40,22 L80,16 L120,10 L120,22 L80,26 L40,30 L0,32 Z" fill="rgba(47,128,237,0.18)" /><polyline points="0,29 40,26 80,21 120,16" fill="none" stroke="#2F80ED" strokeWidth="1.8" /></svg>
          <b>Decision list</b><br />☐ Review covenant headroom · ☑ Approve cash sweep · ☐ Adjust forecast assumptions · ☐ Escalate to credit committee
        </div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}>
          <b>Risk heatmap (inherent)</b><br /><span style={{ color: "#7c8798" }}>Impact × Likelihood</span>
          <span style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginTop: 4 }}>
            {["#f6d9a8", "#f0b429", "#D95C5C", "#d8f0e4", "#f6d9a8", "#f0b429", "#d8f0e4", "#d8f0e4", "#f6d9a8"].map((c, i) => <span key={i} style={{ height: 15, background: c, borderRadius: 2 }} />)}
          </span>
          <span style={{ display: "flex", justifyContent: "space-between", color: "#7c8798" }}><span>Low</span><span>Likelihood</span><span>High</span></span>
        </div>
      </div>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>What-if input (as printed: Revenue −5%, Cost +3%)</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <label style={{ display: "block" }}>Revenue change {rev}%
          <input type="range" min={-20} max={20} value={rev} onChange={(e) => setRev(Number(e.target.value))} aria-label="What-if revenue change percent" style={{ width: "100%" }} /></label>
        <label style={{ display: "block" }}>Cost change {cost}%
          <input type="range" min={-20} max={20} value={cost} onChange={(e) => setCost(Number(e.target.value))} aria-label="What-if cost change percent" style={{ width: "100%" }} /></label>
      </div>
      <p style={{ margin: "6px 0 0" }} aria-live="polite">Inputs set to Revenue {rev}% · Cost {cost}% — [Recalculate impact]. (The printed board shows the inputs only; no recalculated result is printed, so none is invented here.)</p></div>
    <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: "#2F80ED" }}>5 · States & Accessibility</p><p className="tks-kicker" style={{ marginTop: 0 }}>Every interaction state is designed for clarity, recovery and access</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, fontSize: 10.5, lineHeight: 1.55 }}>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}>
          <b>Button states</b>
          <span style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 4 }}>
            <span style={{ background: "#2F80ED", color: "#fff", borderRadius: 6, padding: "2px 9px", fontWeight: 700 }}>Primary</span>
            <span style={{ background: "#2F80ED", color: "#fff", borderRadius: 6, padding: "2px 9px", fontWeight: 700, outline: "2px solid #102A43", outlineOffset: 1 }}>Focus</span>
            <span style={{ background: "#102A43", color: "#fff", borderRadius: 6, padding: "2px 9px", fontWeight: 700 }}>✓ Selected</span>
            <span style={{ background: "#e6ecf2", color: "#9fb0c3", borderRadius: 6, padding: "2px 9px", fontWeight: 700 }}>Disabled</span>
            <span style={{ background: "#2F80ED", color: "#fff", borderRadius: 6, padding: "2px 9px", fontWeight: 700 }}>◌ Loading</span>
          </span>
          <span style={{ color: "#7c8798" }}>Normal · Hover · Focus · Selected/Active · Disabled · Loading (spinner)</span>
        </div>
        <div style={{ border: "1px solid #dde4ec", borderRadius: 9, padding: "7px 9px", background: "#fff" }}>
          <b>Table row &amp; data states</b><br />
          Normal · Hover · Selected (☑ Northwind Ltd. 128,400,000) · Disabled<br />
          Loading (skeleton) · Empty: No data found — Adjust filters or check permissions · Stale Data: Data is 2 days old, May 29, 2024 · Missing Data: Not reported · Confidence Interval band
        </div>
        <div style={{ display: "grid", gap: 5 }}>
          <span style={{ background: "#fdf3e3", border: "1px solid #D99A2B", borderRadius: 7, padding: "4px 9px" }}>⚠ <b>Warning</b> — Coverage below 95%, 6 items affected</span>
          <span style={{ background: "#fdf1f1", border: "1px solid #D95C5C", borderRadius: 7, padding: "4px 9px" }}>⚠ <b>Critical</b> — Covenant breach, 2 entities affected</span>
          <span style={{ background: "#F6F8FB", border: "1px solid #dde4ec", borderRadius: 7, padding: "4px 9px" }}>Disconnected — You’re offline, Reconnecting…, Retry now · Permission Denied — Access denied · Restricted View — Some data hidden due to your role</span>
        </div>
      </div>
      <p style={{ margin: "8px 0 0" }}>Accessibility indicators and examples: Focus Visible — Example, Meets 3:1 focus indicator contrast · Color Contrast — Aa Contrast ratio 7.31 AA · Non-Color Markers (Chart) — Series A / Series B, Pattern + marker · Crosshair (Chart) — Crosshair shows values on hover or focus, Apr · Screen Reader Label — &lt;button aria-label=”Export report as CSV”&gt;Export&lt;/button&gt;, Labels provide context for assistive tech · Keyboard Support — Tab, All interactions reachable via keyboard · Text Resize — 100% 150% 200%, UI remains usable at 200% zoom.</p></div>
      </div>
    </div>
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
    <div style={{ display: "flex", gap: 13, flexWrap: "wrap", alignItems: "center", background: "#fff", color: "#33465e", border: "1px solid #dde4ec", borderRadius: 10, padding: "8px 13px", fontSize: 11.5, marginBottom: 10 }}>
      <b style={{ color: "#0B1726", fontSize: 13 }}>DeepVise</b><span>Product</span><span>How it works</span><span>Security &amp; privacy</span><span>Resources</span><span>About</span>
      <span style={{ marginLeft: "auto", border: "1.5px solid #2F80ED", color: "#2F80ED", borderRadius: 7, padding: "2px 9px", fontWeight: 700 }}>Role selection</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 12, alignItems: "start" }}>
      <div>
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: "#44536a" }}>Monitor industrial assets. Improve a shared health model without pooling raw telemetry. Release only permissioned evidence.</p>
        <div style={{ display: "grid", gap: 8, marginTop: 12 }} role="group" aria-label="Workspace entry">
          <button type="button" aria-pressed={ws === 0} onClick={() => setWs(0)} style={{ background: "#2F80ED", color: "#fff", border: "none", borderRadius: 9, padding: "11px 14px", cursor: "pointer", font: "inherit", fontWeight: 700, fontSize: 13, textAlign: "left" }}>🏭 Enter Factory Workspace →</button>
          <button type="button" aria-pressed={ws === 1} onClick={() => setWs(1)} style={{ background: "#fff", color: "#2F80ED", border: "1.5px solid #2F80ED", borderRadius: 9, padding: "11px 14px", cursor: "pointer", font: "inherit", fontWeight: 700, fontSize: 13, textAlign: "left" }}>🏛 Enter Lender Workspace →</button>
        </div>
        <p style={{ margin: "12px 0 0", fontSize: 11, lineHeight: 1.6, color: "#44536a" }}>🛡 Raw telemetry remains inside participating factory environments. Data stays local. Evidence is permissioned. You stay in control.</p>
      </div>
    {/* Pass 4: overlay method — the right zone is the original
        factory photograph; the live DOM dashboard sits over the
        photographed dashboard at its printed position, so the
        factory ceiling, machine and floor stay photographic while
        every dashboard element stays real DOM. */}
    <div aria-live="polite" role="img" aria-label="Factory floor with the DeepVise dashboard floating over it, as printed" style={{ position: "relative", aspectRatio: "881 / 657", borderRadius: 12, overflow: "hidden", background: "#0B1726" }}>
      <img src="/projects/crops/deepvise/dv27-factory.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {ws === 0 ? <div style={{ position: "absolute", left: "5%", top: "20.5%", width: "85.5%", height: "74.5%", background: "#0B1726", color: "#dbe5f0", borderRadius: 10, overflow: "hidden", boxShadow: "0 14px 34px rgba(0,0,0,0.5)" }}>
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
            <p style={{ margin: "9px 0 0", fontSize: 11, borderTop: "1px solid #22344d", paddingTop: 7 }}>Evidence status, All connections: <b style={{ color: "#fff" }}>Verified 328 · Pending 54 · Needs review 12</b> · View evidence log →<br />🛡 Raw telemetry remains inside participating factory environments. Data stays local. Evidence is permissioned. You stay in control.</p>
          </div>
        </div>
      </div> :
      <div className="tks-detail" style={{ position: "absolute", left: "5%", right: "9.5%", bottom: "5%" }}><b>Lender Workspace entry</b> — as printed on this slide, the lender path releases only permissioned evidence: Evidence status — Verified, pending, or needs review—always traceable and auditable (the same ledger counts as the factory panel: Verified 328 · Pending 54 · Needs review 12). No lender dashboard is pictured on this slide, so none is reconstructed here.</div>}
    </div>
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
    <div style={{ display: "grid", gridTemplateColumns: "196px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 11, padding: "12px 13px" }}>
        <b style={{ color: "#fff", fontSize: 14 }}>DeepVise</b>
        <p style={{ margin: "8px 0 0", fontSize: 9.5, letterSpacing: "0.12em", color: "#12C7D4", fontWeight: 800 }}>CASE STUDY</p>
        <p style={{ margin: "8px 0 0", fontSize: 11, lineHeight: 1.55 }}><b style={{ color: "#fff" }}>Narrative:</b> Clarify the product's dual-sided entry and communicate access scope before authentication or workspace loading.</p>
        <p style={{ margin: "6px 0 0", fontSize: 11, lineHeight: 1.55 }}><b style={{ color: "#fff" }}>Solution:</b> The role selection screen makes data boundaries explicit so users choose the workspace that matches their responsibilities—and only see what they're permitted to access.</p>
        <p style={{ margin: "6px 0 0", fontSize: 11, lineHeight: 1.55 }}><b style={{ color: "#fff" }}>Outcome:</b> Reduces onboarding confusion · Sets accurate expectations up front · Prevents access to out-of-scope data · Establishes trust through transparency.</p>
        <p style={{ margin: "10px 0 0", fontSize: 9.5, letterSpacing: "0.1em", color: "#9fb2c8", fontWeight: 800 }}>VERSION HISTORY</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginTop: 5 }}>
          <span style={{ background: "#132a42", borderRadius: 6, padding: "5px 6px", fontSize: 8.8, lineHeight: 1.4 }}><b style={{ color: "#fff" }}>Version 1</b><br />Early concept, minimal detail, less explicit data boundaries.</span>
          <span style={{ background: "#132a42", border: "1.5px solid #12C7D4", borderRadius: 6, padding: "5px 6px", fontSize: 8.8, lineHeight: 1.4 }}><b style={{ color: "#fff" }}>Version 2</b><br />Current — explicit data boundaries and permission states.</span>
        </div>
      </div>
      <div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, background: "#fff", border: "1px solid #dde4ec", borderRadius: 11, padding: "8px 12px", marginBottom: 10 }}>
      {[["🏢", "Organization", "Acme Manufacturing Ltd.", "✓ Verified", "#1d9e57"], ["🔑", "Authentication", "SSO (SAML 2.0)", "Not signed in", "#b97f16"], ["🌐", "Region", "North America", "Data residency: US", "#44536a"], ["❓", "Need help?", "View access guide", "", "#2F80ED"]].map(([ic, k, v, s2, c]) => <span key={k} style={{ fontSize: 11, display: "flex", gap: 8, alignItems: "flex-start" }}><span style={{ fontSize: 15 }}>{ic}</span><span><span style={{ color: "#7c8798", fontSize: 9.8 }}>{k}</span><br /><b style={{ color: "#0B1726" }}>{v}</b>{s2 ? <><br /><span style={{ color: c }}>{s2}</span></> : null}</span></span>)}
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      {ROLE28.map((r, i) => <button key={r.name} type="button" className={`tks-card${i === role ? " is-on" : ""}`} aria-pressed={i === role} onClick={() => setRole(i)}>
        <b style={{ fontSize: 14 }}>{r.name}</b><p style={{ color: "#555", margin: "4px 0" }}>{r.tagline}</p>
        <p style={{ margin: "4px 0" }}>✓ <b>Accessible data:</b> {r.yes}</p>
        <p style={{ margin: "4px 0" }}>✕ <b>Unavailable data:</b> {r.no}</p>
        <span style={{ display: "inline-block", marginTop: 4, borderRadius: 8, padding: "7px 13px", fontWeight: 700, ...(i === 0 ? { border: "1.5px solid #2F80ED", color: "#2F80ED", background: "#fff" } : { background: "#2F80ED", color: "#fff" }) }}>{r.cta} →</span></button>)}
    </div>
    <div className="tks-detail" aria-live="polite"><b>{cur.name}</b> selected. Below the cards, as printed: 👤 <b>Administrator access</b> — Manage parties, schemas, consent, audit and policies.
      <p style={{ margin: "8px 0 0" }}><button type="button" className="tks-btn tks-btn--ghost" aria-expanded={perm} onClick={() => setPerm((v) => !v)}>🛡 Permission details and evidence boundaries {perm ? "▴" : "▾"}</button></p>
      {perm && <p style={{ margin: "6px 0 0" }}>Understand how data access is scoped for each workspace and why certain data is unavailable. Factory sees {ROLE28[0].yes} Lender sees {ROLE28[1].yes}</p>}
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Other states (as printed)</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7 }}>
      {STATES28.map((label, i) => <button key={label} type="button" onClick={() => setSt(i)} aria-pressed={st === i} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${st === i ? "#2F80ED" : "#dde4ec"}`, borderRadius: 9, padding: "6px 8px", cursor: "pointer", font: "inherit" }}>
        <span aria-hidden="true" style={{ display: "block", border: "1px solid #c3cedb", borderRadius: 4, padding: 4, opacity: i >= 3 ? 0.55 : 1 }}>
          <span style={{ display: "block", height: 5, background: "#dde4ec", borderRadius: 2 }} />
          <span style={{ display: "flex", gap: 3, marginTop: 3 }}>
            <span style={{ flex: 1, height: 18, borderRadius: 3, border: `1.5px solid ${i === 1 ? "#2F80ED" : "#c3cedb"}`, background: i === 1 ? "#eef6ff" : "#fff" }} />
            <span style={{ flex: 1, height: 18, borderRadius: 3, border: `1.5px solid ${i === 2 ? "#2F80ED" : "#c3cedb"}`, outline: i === 2 ? "2px solid #102A43" : undefined, outlineOffset: 1 }} />
          </span>
          {i === 3 ? <span style={{ display: "block", fontSize: 7.8, color: "#b97f16", marginTop: 3 }}>⚠ Contact your system administrator</span> : i === 4 ? <span style={{ display: "block", fontSize: 7.8, color: "#b3352c", marginTop: 3 }}>✕ Access denied</span> : null}
        </span>
        <b style={{ display: "block", fontSize: 9.8, marginTop: 4, color: "#0B1726" }}>{label}</b>
      </button>)}
    </div>
    <p style={{ margin: "7px 0 0", fontSize: 11, color: "#44536a" }} aria-live="polite">{st === 3 ? "Organization unavailable — ⚠ Please contact your system administrator. Both workspace cards and Continue buttons are disabled." : st === 4 ? "Permission denied — ✕ Access denied: You do not have permission to access any workspace. Both workspace cards are disabled." : `${STATES28[st]} — the two workspace cards are shown in this state.`}</p>
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
const PANEL29: React.CSSProperties = { background: "#fff", border: "1px solid #dde4ec", borderRadius: 11, padding: "10px 12px" };
export function DeepViseCommandCenter() {
  const [row, setRow] = useState(0);
  return <Dv n="29" title="Factory Command Center — 3 assets need attention before the next production window." sub="All times shown in local time (UTC-05:00) · Demo data." label="DeepVise factory command center — interactive rebuild of DeepVise_29">
    <div style={{ display: "grid", gridTemplateColumns: "116px minmax(0,1fr)", gap: 0, border: "1px solid #dde4ec", borderRadius: 13, overflow: "hidden", background: "#F6F8FB" }}>
      <div style={{ background: "#0B1726", color: "#9fb2c8", padding: "12px 11px", fontSize: 10.8, display: "grid", gap: 7, alignContent: "start" }}>
        <b style={{ color: "#fff", fontSize: 12.5 }}>DeepVise</b>
        {[["Overview", ""], ["Assets", ""], ["Work Orders", ""], ["Alerts", "3"], ["Analytics", ""], ["Reports", ""], ["Models", ""], ["Data", ""], ["Settings", ""]].map(([x, b]) => <span key={x} style={x === "Overview" ? { color: "#12C7D4", fontWeight: 700 } : undefined}>{x}{b ? <span style={{ float: "right", background: "#D95C5C", color: "#fff", borderRadius: 999, fontSize: 8.5, padding: "0 5px" }}>{b}</span> : null}</span>)}
        <span style={{ borderTop: "1px solid #22344d", paddingTop: 7, marginTop: 3, fontSize: 9.8 }}>Filters persistent<br /><b style={{ color: "#e8eef5" }}>5 active</b></span>
      </div>
      <div style={{ padding: "11px 13px", color: "#33465e", minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: 11.5, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}><b style={{ color: "#0B1726", fontSize: 13 }}>Overview</b><span style={{ marginLeft: "auto", color: "#7c8798" }}>10:24 AM · May 16, 2025</span><span style={{ width: 24, height: 24, borderRadius: "50%", background: "#102A43", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9.5, fontWeight: 700 }}>OM</span></p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "8px 0 10px", fontSize: 10.5 }}>
          {[["Organization", "DeepVise Industries"], ["Plant", "P-01 North Plant"], ["Line", "All Lines"], ["Shift", "Day Shift (06:00 – 14:00)"], ["Time window", "May 10 – May 16, 2025"]].map(([k, v]) => <span key={k} style={{ background: "#fff", border: "1px solid #dde4ec", borderRadius: 7, padding: "3px 9px" }}><span style={{ color: "#7c8798" }}>{k} </span><b style={{ color: "#0B1726" }}>{v}</b></span>)}
          <span style={{ color: "#2F80ED", fontWeight: 700, padding: "3px 2px" }}>Reset filters</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.42fr minmax(0,1fr)", gap: 10, alignItems: "start" }}>
          <div style={{ display: "grid", gap: 10 }}>
            <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Fleet health trend · May 10 – May 16, 2025 · 1 hr granularity · Drill down →</p>
              <svg viewBox="0 0 300 92" width="100%" height="92" role="img" aria-label="Average health score easing gently from about 82 on May 10 to about 76 on May 16; the May 16 segment is incomplete">
                <defs><pattern id="dv29hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="transparent" /><line x1="0" y1="0" x2="0" y2="6" stroke="#D99A2B" strokeWidth="1.6" /></pattern></defs>
                <line x1="0" y1="14" x2="300" y2="14" stroke="#e6ecf2" /><line x1="0" y1="42" x2="300" y2="42" stroke="#e6ecf2" /><line x1="0" y1="70" x2="300" y2="70" stroke="#e6ecf2" />
                <text x="2" y="11" fill="#7c8798" fontSize="7.5">90</text><text x="2" y="39" fill="#7c8798" fontSize="7.5">80</text><text x="2" y="67" fill="#7c8798" fontSize="7.5">70</text>
                <polyline points="24,26 58,24 92,29 126,27 160,32 194,30 228,35 244,37" fill="none" stroke="#0e7c86" strokeWidth="2" />
                <rect x="244" y="8" width="54" height="66" fill="url(#dv29hatch)" opacity="0.5" />
                <polyline points="244,37 268,39 296,41" fill="none" stroke="#D99A2B" strokeWidth="2" strokeDasharray="4 3" />
                <text x="24" y="88" fill="#7c8798" fontSize="8">May 10 · ~82</text><text x="238" y="88" fill="#D99A2B" fontSize="8">May 16 · ~76 · Incomplete</text>
              </svg>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 3, fontSize: 10.3, marginTop: 4 }}>
                {[["Healthy (80–100)", "42 · 56%", "#1d9e57"], ["Watch (60–79)", "18 · 24%", "#2F80ED"], ["Warning (40–59)", "9 · 12%", "#b97f16"], ["Critical (0–39)", "3 · 4%", "#b3352c"], ["No data", "3 · 4%", "#637083"], ["Total assets", "75", "#0B1726"]].map(([k, v, c]) => <span key={k}><span style={{ color: c }}>●</span> {k}<br /><b style={{ color: "#0B1726" }}>{v}</b></span>)}
              </div>
              <p style={{ margin: "4px 0 0", fontSize: 10.3, color: "#7c8798" }}>Fleet distribution by asset count. The hatched May 16 segment is excluded from trend.</p></div>
            <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Critical assets — Showing 7 of 7 · Drill down → (select a row)</p>
              <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th>Machine ID</th><th>Health score (0–100)</th><th>Change vs 24h ago</th><th>Likely issue</th><th>Confidence</th><th>Production impact (next 72h)</th><th>Owner</th><th>Next action</th></tr></thead>
                <tbody>{CRITICAL29.map((r, i) => <tr key={r[0]} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#eef6ff" : undefined }}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2] === 0 ? "—" : `↓ ${Math.abs(r[2])}`}</td><td>{r[3]}</td><td>{r[4].toFixed(2)} · {r[5]}</td><td>{r[6]}</td><td>{r[7]}</td><td>{r[8]}</td></tr>)}</tbody></table></div>
              <p style={{ margin: "5px 0 0", fontSize: 10.8, color: "#7c8798" }}>View all alerts (3) →</p></div>
            <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Active maintenance work — Showing 4 of 4 · View all work orders →</p>
              <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th>Work order</th><th>Asset</th><th>Task</th><th>Priority</th><th>Owner</th><th>Status</th><th>ETA</th></tr></thead>
                <tbody>{WORK29.map((w) => <tr key={w[0]}><td>{w[0]}</td><td>{w[1]}</td><td>{w[2]}</td><td>{w[3]}</td><td>{w[4]}</td><td>{w[5]}</td><td>{w[6]}</td></tr>)}</tbody></table></div>
              <p className="tks-kicker" style={{ margin: "6px 0 0" }}>Active maintenance work excludes completed and cancelled orders. Demo data.</p></div>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Attention required (3) — assets at critical risk of impacting production</p>
              <div style={{ display: "grid", gap: 7 }}>
                {[["P-01-042", "Hydraulic Press #2 · Line 2 · Est. downtime 6.2 h · Impact High · Owner: Alex Rivera · Open work order W-5621 →"], ["P-01-017", "CNC Mill #3 · Line 1 · Est. downtime 4.5 h · Impact High · Owner: Jamie Lee · Open work order W-5617 →"], ["P-02-006", "Conveyor Drive #1 · Line 3 · Est. downtime 2.1 h · Impact Medium · Owner: Morgan Patel · Open work order W-5624 →"]].map(([id, body]) => <div key={id} style={{ borderLeft: "3.5px solid #D95C5C", background: "#fdf6f6", borderRadius: 7, padding: "6px 9px" }}><b style={{ color: "#0B1726" }}>{id}</b><p style={{ margin: "2px 0 0", fontSize: 10.8, lineHeight: 1.5 }}>{body}</p></div>)}
              </div></div>
            <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>Predicted downtime exposure (next 72h) · Drill down →</p>
              <p style={{ margin: 0, fontSize: 20 }}><b style={{ color: "#0B1726" }}>15.7 h</b> <span style={{ fontSize: 12 }}>Total predicted downtime across 3 assets</span></p>
              <div style={{ display: "grid", gap: 5, marginTop: 7 }}>
                {[["Critical", 10.7, 68, "#D95C5C"], ["Warning", 3.1, 20, "#D99A2B"], ["Watch", 1.3, 8, "#2F80ED"], ["No data", 0.6, 4, "#637083"]].map(([k, h, pc, c]) => <div key={k as string} style={{ display: "grid", gridTemplateColumns: "58px 1fr 74px", gap: 8, alignItems: "center", fontSize: 11 }}>
                  <span>{k}</span><span style={{ height: 8, borderRadius: 4, background: "#e6ecf2" }}><span style={{ display: "block", height: 8, borderRadius: 4, background: c as string, width: `${pc as number}%` }} /></span><span>{h} h ({pc}%)</span>
                </div>)}
              </div>
              <svg viewBox="0 0 200 34" width="100%" height="32" role="img" aria-label="Cumulative predicted downtime curve rising to 15.7 hours at 72 hours" style={{ marginTop: 5 }}>
                <polyline points="0,30 50,24 100,16 150,9 200,4" fill="none" stroke="#D95C5C" strokeWidth="1.8" />
                <text x="150" y="32" fill="#7c8798" fontSize="7.5">72h · 15.7 h</text>
              </svg>
              <p style={{ margin: "4px 0 0", fontSize: 10.8, lineHeight: 1.55, color: "#7c8798" }}>Definition: Predicted downtime is the sum of expected asset downtime that may impact production in the next 72 hours.</p></div>
            <div style={PANEL29}><p className="tks-kicker" style={{ marginTop: 0 }}>System context · View data quality →</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, fontSize: 10.8, lineHeight: 1.55 }}>
                <span>Last sensor update<br /><b style={{ color: "#0B1726" }}>10:23 AM</b> · May 16, 2025</span>
                <span>Data completeness<br /><b style={{ color: "#0B1726" }}>96.2%</b> past 24 hours</span>
                <span>Model<br /><b style={{ color: "#0B1726" }}>DV-HM-0.9.3</b>, deployed May 15, 2025, 09:00</span>
                <span>Active maintenance work<br /><b style={{ color: "#0B1726" }}>4</b> work orders in progress</span>
              </div></div>
          </div>
        </div>
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
    ["Fault-class mix (top 4) — Share of recent detections by fault class", (x) => { const top = parseFloat((x.faults.match(/(\d+)%/) ?? ["0", "0"])[1]); return <span style={{ display: "flex", gap: 8, alignItems: "center" }}><span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: "50%", flex: "none", background: `conic-gradient(#2F80ED 0% ${top}%, #12C7D4 ${top}% ${top + 24}%, #6C5CE7 ${top + 24}% ${top + 42}%, #D99A2B ${top + 42}% ${top + 54}%, #c3cedb ${top + 54}% 100%)`, display: "inline-flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 24, height: 24, borderRadius: "50%", background: "#fff" }} /></span><span>{x.faults}</span></span>; }],
    ["Update recency — Time since last model or data update", (x) => x.recency],
    ["Evaluation status — Model performance on local holdout (aggregated)", (x) => x.evaluation],
    ["Current model version — Deployed model for inference", (x) => x.model],
    ["Participation status — Contribution to federation", (x) => x.status === "Active" ? "✓ Contributing — Actively training and sharing model updates" : x.status],
  ];
  return <Dv n="30" title="Multi-Factory Asset Overview — Federation participation summary" sub="Same feature schema, different machine samples. Demo data — synthetic and aggregated." label="DeepVise multi-factory overview — interactive rebuild of DeepVise_30">
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr 1fr", gap: 7, marginBottom: 10 }}>
      <span style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 9, padding: "7px 12px", fontSize: 11.5, display: "flex", alignItems: "center" }}><b style={{ color: "#fff" }}>Federation participation summary</b></span>
      {[["3", "Active parties (All contributing)"], ["1", "Feature schema v2.1 (shared)"], ["3", "Participating datasets (Different machine samples)"], ["< 24h", "Average data freshness (Across all parties)"]].map(([v, k]) => <span key={k} style={{ background: "#0B1726", color: "#dbe5f0", borderRadius: 9, padding: "6px 12px", fontSize: 11 }}><b style={{ color: "#fff", fontSize: 14 }}>{v}</b><br />{k}</span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "172px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 6 }}>
        {FACTORIES30.map((x, i) => <button key={x.name} type="button" onClick={() => setF(i)} aria-pressed={i === f} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === f ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "7px 10px", cursor: "pointer", font: "inherit" }}>
          <b style={{ fontSize: 12 }}><span aria-hidden="true" style={{ color: i === f ? "#2F80ED" : "#b9c6d4" }}>{i === f ? "◉" : "○"}</span> {x.name}</b> <span className="tks-tag">{x.status}</span>
          <span style={{ display: "block", fontSize: 10, color: "#55606e", marginTop: 2 }}>{x.detail}</span>
        </button>)}
      </div>
      <div>
        <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th style={{ width: "30%" }}>Cross-factory comparison (normalized)</th>{FACTORIES30.slice(0, 3).map((x) => <th key={x.name}>{x.name}</th>)}</tr></thead>
          <tbody>{rows.map(([label, get]) => <tr key={label}><td style={{ fontSize: 10.8 }}>{label}</td>{FACTORIES30.slice(0, 3).map((x) => <td key={x.name} style={{ fontSize: 11 }}>{get(x)}</td>)}</tr>)}</tbody></table></div>
        <div style={{ display: "flex", gap: 8, alignItems: "stretch", marginTop: 8 }}>
          <p style={{ margin: 0, flex: 1, fontSize: 11, color: "#44536a" }}>Compare participation and model coverage without exposing local telemetry. Normalized bands — Not raw counts · Privacy by design — No raw telemetry shared.</p>
          <div style={{ borderRadius: 10, padding: "8px 12px", fontSize: 11, maxWidth: 300, background: "#0B1726", color: "#dbe5f0" }}>🔒 <b style={{ color: "#fff" }}>Field not available</b> — Raw telemetry, exact counts and identifiers are not available by design. This protects partner privacy and complies with data agreements.</div>
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
  return <Dv n="31" title="Machine Health — P-01-042" sub="Condition has declined since the last validated maintenance event." label="DeepVise machine health P-01-042 — interactive rebuild of DeepVise_31">
    <div style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr) 236px", gap: 10, alignItems: "start" }}>
    <nav aria-label="Machine health navigation" style={{ background: "#0B1726", color: "#9fb2c8", borderRadius: 11, padding: "12px 11px", fontSize: 11.3, display: "grid", gap: 8, alignContent: "start" }}>
      <b style={{ color: "#fff", fontSize: 13 }}>DeepVise</b>
      {["Overview", "Fleet", "Machines", "Alerts", "Work Orders", "Analytics", "Diagnostics", "Reports", "Settings"].map((x) => <span key={x} style={x === "Machines" ? { color: "#12C7D4", fontWeight: 700 } : undefined}>{x}</span>)}
      <span style={{ borderTop: "1px solid #22344d", paddingTop: 8, marginTop: 2, fontSize: 10, lineHeight: 1.6 }}>Machine ID <b style={{ color: "#e8eef5" }}>P-01-042</b><br />Plant / Line <b style={{ color: "#e8eef5" }}>North Plant / Line 3</b><br />Status <b style={{ color: "#D99A2B" }}>⚠ Warning</b><br />Owner <b style={{ color: "#e8eef5" }}>Alex Johnson</b><br />Last Update <b style={{ color: "#e8eef5" }}>May 9, 2025 09:41</b><br />Date range <b style={{ color: "#e8eef5" }}>May 2 – May 9, 2025</b> · Auto-refresh: On</span>
    </nav>
    <div style={{ minWidth: 0 }}>
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
        <polyline points="40,39 209,38 378,39 632,38" fill="none" stroke="#637083" strokeWidth="1.4" strokeDasharray="5 3" />
        <polyline points="40,62 209,64 378,66 632,68" fill="none" stroke="#12C7D4" strokeWidth="1.5" />
        <polyline points="40,66 124,68 209,70 293,72 378,71 462,73 547,72 632,74" fill="none" stroke="#2F80ED" strokeWidth="2.2" />
        <text x="470" y="34" fontSize="8.5" fill="#637083">Baseline ~86 (Apr 4 – May 1)</text>
        <text x="470" y="58" fontSize="8.5" fill="#0e7c86">7-day moving average</text>
        <g>
          <rect x="392" y="80" width="150" height="40" rx="5" fill="#0B1726" />
          <text x="400" y="94" fontSize="8.5" fill="#fff">May 7, 2025 10:00</text>
          <text x="400" y="106" fontSize="8.5" fill="#dbe5f0">Health Score 74 · Confidence 0.76</text>
          <text x="400" y="117" fontSize="8.5" fill="#dbe5f0">Data Completeness 95%</text>
        </g>
        {[[124, "May 3"], [293, "May 5"], [462, "May 7"], [547, "May 8"]].map(([x, d], i) => <g key={d as string} onClick={() => setEv(i)} style={{ cursor: "pointer" }}>
          <circle cx={x as number} cy={[68, 72, 73, 72][i]} r={ev === i ? 6 : 4.5} fill={ev === i ? "#D99A2B" : "#fff"} stroke="#2F80ED" strokeWidth="2" />
          <text x={(x as number) - 14} y="166" fontSize="9" fill="#55606e">{d}</text>
        </g>)}
        <text x="40" y="166" fontSize="9" fill="#55606e">May 2</text><text x="606" y="166" fontSize="9" fill="#55606e">May 9</text>
      </svg>
      <p style={{ margin: "0 0 6px", fontSize: 11 }} aria-live="polite"><b>{EVENTS31[ev][0]}</b> — {EVENTS31[ev][1]}{ev === 2 ? " (chart tooltip, as printed)" : ""}</p>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Subsystem status — select a row</p>
    <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th>Subsystem</th><th>Status</th><th>Score /100</th><th>Trend (7 days)</th></tr></thead>
      <tbody>{SUBSYS31.map((r, i) => <tr key={r[0]} onClick={() => setSub(i)} style={{ cursor: "pointer", background: i === sub ? "#eef1f6" : undefined }}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>)}</tbody></table></div>
    </div>
    <div style={{ display: "grid", gap: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Sensor Coverage</p>
        <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 10 }}><span style={{ display: "inline-flex", width: 54, height: 54, borderRadius: "50%", background: "conic-gradient(#0e7c86 0deg 346deg, #e3e9f0 346deg 360deg)", alignItems: "center", justifyContent: "center", flex: "none" }}><span style={{ width: 38, height: 38, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12 }}>96%</span></span><span><b>96% Complete</b> — 48 / 50 sensors reporting: 48 Complete · 2 Missing · 0 Stale. View sensor map.</span></p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Signal Freshness</p><p style={{ margin: 0 }}>Vibration 1 min ago ✓ · Temperature 1 min ago ✓ · Lubrication 2 min ago ✓ · Electrical 1 min ago ✓ · Pressure 1 min ago ✓</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Likely Fault</p><p style={{ margin: 0 }}><b>Bearing-related impulse pattern</b> — Impacting drive-end bearing (DE).</p>
        <p style={{ margin: "8px 0 0" }}>Confidence <b>0.78</b></p>
        <span style={{ display: "block", height: 8, borderRadius: 4, background: "#e6ecf2", position: "relative" }}><span style={{ display: "block", height: 8, borderRadius: 4, background: "#2F80ED", width: "78%" }} /><span style={{ position: "absolute", left: "80%", top: -3, width: 2, height: 14, background: "#b3352c" }} /></span>
        <p style={{ margin: "4px 0 0" }}>Evidence level: Moderate. ℹ RUL is not shown because confidence is below the 0.80 threshold for this model.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Next Maintenance</p><p style={{ margin: 0 }}><b>May 16, 2025</b> · Planned — Type Preventive maintenance · Scope Inspect drive-end bearing.</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Recommended Actions</p><p style={{ margin: 0 }}>Open sensor diagnostics ↗ · Review recommendation ↗ · Create work order ↗</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Model Card</p><p style={{ margin: 0 }}>Model DV-HM-0.9.3 · Model type Health Index · Trained on Mar 12, 2025 · Input signals Vib, Temp, Lub, Elec, Press · Update cadence Weekly · View model documentation ↗</p></div>
    </div>
    </div>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
      {["✓ All critical sensors Reporting", "✓ No stale data (All < 5 min old)", "✓ Missing sensors 2 of 50 (4%)", "⚠ Confidence 0.78 (Moderate)", "ℹ Evidence boundary: See notes"].map((x) => <span key={x} style={{ border: "1px solid #dde4ec", borderRadius: 999, padding: "3px 10px", fontSize: 10.8, background: "#fff" }}>{x}</span>)}
    </div>
    <p style={{ color: "#555", margin: "8px 0 0" }}>Data &amp; Evidence Status (as printed above). Source and evidence boundary: Original deck pages 19–24 support health-index construction and signal indicators. The page structure and demo values are reconstructed.</p>
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
const wave32 = (seed: number, mode: "burst" | "flat" | "bump" | "ripple") => {
  let rng = seed; const rnd = () => { rng = (rng * 37 + 11) % 97; return rng / 97; };
  let p = "M0,26";
  for (let x = 4; x <= 300; x += 4) {
    const inWin = x >= 145 && x <= 175;
    const amp = mode === "burst" ? (inWin ? 23 : 3) : mode === "flat" ? 1.1 : mode === "bump" ? (inWin ? 4 : 1.4) : (inWin ? 7 : 2.2);
    let y = 26 + (rnd() - 0.5) * 2 * amp;
    if (mode === "bump" && inWin) y -= 7;
    p += ` L${x},${Math.max(1.5, Math.min(50.5, y)).toFixed(1)}`;
  }
  return p;
};
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
  return <Dv n="32" title="Sensor Diagnostics" sub="The alert was triggered by a repeated impulsive pattern, not by temperature alone." label="DeepVise sensor diagnostics — interactive rebuild of DeepVise_32">
    <div style={{ display: "grid", gridTemplateColumns: "46px 1fr", gap: 10, alignItems: "start" }}>
      <div style={{ background: "#0B1726", borderRadius: 10, padding: "9px 0", display: "grid", gap: 10, justifyItems: "center", color: "#9fb2c8", fontSize: 13 }} aria-label="Left nav as printed: Explorer, Alerts, Assets, Signals, Baselines, Reports, Settings, Help">
        <span title="Explorer" style={{ color: "#12C7D4" }}>🧭</span><span title="Alerts">🔔</span><span title="Assets">🏭</span><span title="Signals">〰</span><span title="Baselines">📏</span><span title="Reports">📄</span><span title="Settings">⚙</span><span title="Help">?</span>
      </div>
      <div style={{ minWidth: 0 }}>
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", fontSize: 11.5 }}>
      <Chips items={views.map((v) => `View: ${v}`)} value={view} onPick={setView} />
      <span>Mode: <b>Overlay</b> ▾</span><span>Window: <b>30 min</b> ▾</span><span>Permissions: <b>Viewer</b></span><span>Dataset: <b>Synthetic demonstration</b></span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginTop: 9 }}>
      {[["Unit normalization", "Each signal normalized by robust baseline (MAD)"], ["Sampling window", "30 min ending 2025-05-15 10:00"], ["Missing data", "Motor temp: 2.0% · Bearing temp: 1.5%"], ["Current operating condition", "Speed: 1,780 rpm · Load: 72% · Pressure: 5.6 bar · Ambient: 24 °C"], ["Baseline period", "2025-05-08 09:00 to 2025-05-08 09:30"], ["Selected anomaly window", "09:24:30 – 09:27:30 (3.0 min)"], ["Missing data treatment", "Gaps shown, not imputed"]].map(([k, v]) => <span key={k} style={{ border: "1px solid #dde4ec", borderRadius: 8, padding: "5px 8px", fontSize: 9.8, lineHeight: 1.45, background: "#fff" }}><span style={{ color: "#7c8798", display: "block" }}>{k}</span><b style={{ color: "#33465e" }}>{v}</b></span>)}
    </div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Signal tracks ({views[view]} view) — shared axis 09:10–09:40, shaded band = selected anomaly window 09:24:30–09:27:30, line = cursor</p>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 248px", gap: 10, alignItems: "start" }}>
    <div style={{ display: "grid", gap: 6, minWidth: 0 }}>
      {TRACKS32.slice(0, 4).map(([t, unit, desc], i) => {
        const cx = (cursor / 30) * 300;
        const modes = ["burst", "flat", "bump", "ripple"] as const;
        return <button key={t} type="button" onClick={() => setTrack(i)} aria-pressed={i === track} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === track ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "6px 10px", cursor: "pointer", font: "inherit" }}>
          <span style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}><b>{t}</b><span style={{ color: "#7c8798" }}>{unit}</span></span>
          <svg viewBox="0 0 300 52" width="100%" height="52" role="img" aria-label={desc} style={{ display: "block", marginTop: 3 }}>
            <rect x="145" y="0" width="30" height="52" fill="#D99A2B" opacity="0.16" />
            <line x1="0" y1="26" x2="300" y2="26" stroke="#eef1f6" />
            <path d={wave32(13 + i * 29, modes[i])} fill="none" stroke={i === 0 ? "#D95C5C" : "#2F80ED"} strokeWidth="1.3" />
            <line x1={cx} y1="0" x2={cx} y2="52" stroke="#0B1726" strokeWidth="1" strokeDasharray="3 2" />
          </svg>
          <span style={{ display: "block", fontSize: 10, lineHeight: 1.45, color: "#55606e", marginTop: 3 }}>{desc}</span>
        </button>;
      })}
      <button type="button" onClick={() => setTrack(4)} aria-pressed={track === 4} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${track === 4 ? "#2F80ED" : "#dde4ec"}`, borderRadius: 10, padding: "6px 10px", cursor: "pointer", font: "inherit" }}>
        <span style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}><b>{TRACKS32[4][0]}</b><span style={{ color: "#7c8798" }}>{TRACKS32[4][1]}</span></span>
        <span style={{ display: "flex", gap: 6, marginTop: 3 }}>
          <span style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: 8.5, color: "#7c8798", padding: "2px 0" }}><span>5k Hz</span><span>1k</span><span>100</span></span>
          <span style={{ display: "block", flex: 1, height: 104, borderRadius: 5, position: "relative", background: "linear-gradient(180deg,#1d3a6e 0%,#274b8f 30%,#3a6bc2 55%,#274b8f 78%,#1d3a6e 100%)", overflow: "hidden" }}>
            <span style={{ position: "absolute", left: "46%", top: "38%", width: "13%", height: "46%", borderRadius: "45%", background: "radial-gradient(closest-side,#fdf6c8,#f6d743 35%,#e2543a 72%,transparent)", opacity: 0.97 }} />
            <span style={{ position: "absolute", left: "30%", top: "60%", width: "40%", height: "16%", borderRadius: "50%", background: "radial-gradient(closest-side,rgba(120,190,255,0.55),transparent)", opacity: 0.8 }} />
            <span style={{ position: "absolute", left: `${(cursor / 30) * 100}%`, top: 0, bottom: 0, width: 1.5, background: "#0B1726" }} />
            <span style={{ position: "absolute", right: 5, top: 3, fontSize: 8.5, color: "#cfe0ff" }}>dB −40 … 10</span>
            <span style={{ position: "absolute", left: 5, bottom: 3, fontSize: 8.5, color: "#cfe0ff" }}>09:10</span>
            <span style={{ position: "absolute", right: 5, bottom: 3, fontSize: 8.5, color: "#cfe0ff" }}>09:40</span>
          </span>
        </span>
        <span style={{ display: "block", fontSize: 10, lineHeight: 1.45, color: "#55606e", marginTop: 3 }}>{TRACKS32[4][2]}</span>
      </button>
    </div>
      <div style={{ display: "grid", gap: 8, minWidth: 0 }}>
        <div className="tks-card" style={{ padding: "9px 11px", minWidth: 0, overflow: "hidden" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Selected Event — Probable Bearing Issue</p>
          <p style={{ margin: 0, fontSize: 11.3, lineHeight: 1.55 }}>Time (local) 2025-05-15 09:24:30 – 09:27:30 (3.0 min) · Alert ID ALT-2025-05-15-0924.</p>
          <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Threshold Source</p>
          <p style={{ margin: 0, fontSize: 11.3, lineHeight: 1.55 }}>Rule Set: Bearing Health Monitor v2.3 · Threshold Type: Dynamic (Baseline + Adaptive) · Trigger Condition: Weighted normalized score &gt; 1.80 for ≥ 2 of 3 consecutive windows.</p>
          <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Derived Features (Normalized z-score)</p>
          <div style={{ display: "grid", gap: 4 }}>
            {FEATURES32.map(([t, v, th], i) => <div key={t} role="button" tabIndex={0} onClick={() => setFeat(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFeat(i); } }} style={{ cursor: "pointer", background: i === feat ? "#eef1f6" : "#F6F8FB", border: "1px solid #e6ecf2", borderRadius: 7, padding: "4px 7px", fontSize: 10.6, lineHeight: 1.45 }}>
              <span style={{ display: "flex", justifyContent: "space-between", gap: 6 }}><b style={{ color: "#0B1726" }}>{t}</b><span style={{ background: "#D95C5C", color: "#fff", borderRadius: 4, padding: "0 5px", fontSize: 8.8, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "start" }}>Exceeded</span></span>
              <span style={{ color: "#55606e" }}>Value <b style={{ color: "#0B1726" }}>{v.toFixed(2)}</b> · Threshold {th}</span>
            </div>)}
          </div></div>
        <div className="tks-card" style={{ padding: "9px 11px" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Data Quality</p>
          <p style={{ margin: 0, fontSize: 11.3, lineHeight: 1.6 }}>Signal Completeness (window) <b>97.9%</b> <span style={{ background: "#e2f2f0", color: "#0e7c4a", borderRadius: 4, padding: "0 5px", fontSize: 9.5, fontWeight: 700 }}>Good</span><br />Sensor Health: All sensors OK <span style={{ background: "#e2f2f0", color: "#0e7c4a", borderRadius: 4, padding: "0 5px", fontSize: 9.5, fontWeight: 700 }}>Good</span><br />Outlier Ratio (window) <b>1.8%</b> <span style={{ background: "#e2f2f0", color: "#0e7c4a", borderRadius: 4, padding: "0 5px", fontSize: 9.5, fontWeight: 700 }}>Good</span><br />Data Gaps: See missing indicators.</p>
          <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Comparison Baseline</p>
          <p style={{ margin: 0, fontSize: 11.3, lineHeight: 1.55 }}>Baseline Period 2025-05-08 09:00 to 09:30 · Operating Condition Match: Speed ±5% · Load ±10% · ✓ Matched · Baseline Window Length 30 min · Baseline Data Quality 98.6% · Good.</p></div>
      </div>
    </div>
    <div style={{ display: "flex", gap: 12, alignItems: "center", background: "#0B1726", color: "#dbe5f0", borderRadius: 10, padding: "7px 13px", marginTop: 10, fontSize: 11.5 }}>
      <span aria-hidden="true" style={{ fontSize: 14 }}>▶ ⏮ ⏭</span><span>1×</span>
      <span aria-live="polite">Cursor {timeLabel} / 09:40:00{cursor >= 14 && cursor <= 18 ? " — inside the selected anomaly window (09:24:30 – 09:27:30)" : ""} · printed cursor at 09:26:00</span>
      <input type="range" min={0} max={30} value={cursor} onChange={(e) => setCursor(Number(e.target.value))} aria-label="Diagnostics cursor position in minutes after 09:10" style={{ flex: 1 }} />
      <span>Cursor toggle on</span><span>Zoom</span><span>Reset</span>
    </div>
      </div>
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
