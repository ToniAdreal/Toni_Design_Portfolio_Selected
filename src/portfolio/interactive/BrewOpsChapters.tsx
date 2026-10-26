import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";
import { BoX, CTDash, HiFi, Side31, Spark, BrewOpsAnnotatedShell, BrewOpsCopilotFull, BrewOpsStoryboard } from "./BrewOpsRebuilds";

/**
 * Bespoke rebuilds of the 47 remaining BrewOps / Budweiser gallery
 * slots, transcribed from the actual image files Budweiser_01–15,
 * 17–22, 24–31, 33–50.webp in public/projects/ (files 16, 23, 32 are
 * already bespoke in ProjectScreens.tsx, keyed by data title).
 *
 * CAPTION <-> IMAGE MISMATCHES (data titles in src/content/real/
 * budweiser.ts vs what the images actually show — captions/data were
 * NOT rewritten; the shell figcaption stays as-is). Only file 01
 * roughly matches its data title; nearly every other slot differs:
 *  - 02 data "Executive Dashboard Preview" -> Before/After
 *    "From Fragmented to Focused" transformation diagram.
 *  - 03 data "Platform Value Proposition" -> "Project Timeline"
 *    (2023 blueprint -> 2026 reconstruction -> demonstrator).
 *  - 04 data "Mobile Experience Highlights" -> "Beverage Supply
 *    Chain Panorama" (6 stages, 6 risks; no mobile content).
 *  - 05 data "Ecosystem Integration Vision" -> "Decision Latency
 *    Map" (~24-48h decision lag across silos and role handoffs).
 *  - 06 data "Stakeholder Mapping" -> bw-08 "2023 Concept Evidence
 *    Audit" (4 strengths, 7 gaps).
 *  - 07 data "Brewmaster Workflow Analysis" -> "Ownership &
 *    Evidence Map" (2023 team / Toni 2023 / Toni 2026 solo).
 *  - 08 data "Logistics Coordinator Needs" -> "From Pain Points to
 *    Decisions That Move the Chain" data-to-decision matrix.
 *  - 09 data "Data Flow Taxonomy" -> "Opportunity Prioritization"
 *    scoring table (5 candidate areas x 5 criteria, /25).
 *  - 10 data "Role-Based Access Models" -> bw-13 "Role-to-Job Map"
 *    (6 hypothesis-based proto-roles).
 *  - 11 data "Platform Sitemap" -> "BW-05 Original Deck Contact
 *    Sheet" (the 10 slides of the 2023 historical deck).
 *  - 12 data "Global Navigation System" -> bw-20 "Object Model"
 *    (Alert -> Scenario -> ... -> Outcome entity chain).
 *  - 13 data "Contextual Sub-Navigation" -> 2023 historical
 *    "AI-Enabled Decision Support Framework" hub diagram (p.6).
 *  - 14 data "Search and Command Center" -> 2023 historical
 *    "Supply Chain Insights Chatbot - Early Concept" (p.07).
 *  - 15 data "Breadcrumbs & Wayfinding" -> "Research Synthesis"
 *    (seven supporting sources, 2020-2023).
 *  - 17 data "Real-Time Alert Feed" -> bw-15 "Hypothesis-Based
 *    Operational Handoff" (4 lanes x 5 stages, Scenario B).
 *  - 18 data "Risk Heatmap Visualization" -> "Product Principles"
 *    (4 principles; no heatmap on the slide).
 *  - 19 data "Facility Status Drill-Down" -> "Feature Scope Map"
 *    (11 modules in 3 tiers + 4 out-of-scope items).
 *  - 20 data "Incident Management Flow" -> bw-19 "Information
 *    Architecture" (9 sections, 36 child pages) - the deck's real
 *    IA, one chapter later than the data file places it.
 *  - 21 data "AI Demand Forecasting" -> case-study "From fragmented
 *    reaction to accountable decision flow" Before/After.
 *  - 22 data "Supply Allocation Matrix" -> "Design tokens: design
 *    and code alignment" (tokens.theme.ts) - a design-system
 *    slide inside the Demand/Supply chapter.
 *  - 24 data "Production Schedule Gantt" -> "Wireframe exploration
 *    wall" (17 low-fidelity wireframes, v1.0, May 2024).
 *  - 25 data "Cost Variance Analysis" -> bw-23 "Dashboard wireframe
 *    comparison" (executive summary vs operational queue).
 *  - 26 data "Fleet Tracking & Routing" -> "Scenario builder
 *    wireflow" (5 steps; glass constraint in Q3'24).
 *  - 27 data "Warehouse Inventory Overview" -> "Design decision
 *    log" for a different sub-project (Budweiser Trade Portal,
 *    May 20, 2025): 3 rejected patterns + chosen direction.
 *  - 28 data "Predictive Maintenance Alerts" -> "Visual
 *    foundations" design-system board (v1.0, May 2025).
 *  - 29 data "Cold Chain Monitoring" -> "Component library"
 *    (cards, alerts, filters, data table, confidence display).
 *  - 30 data "Carrier Performance Metrics" -> "Data visualization
 *    system" (6 chart patterns + accessible color rules).
 *  - 31 data "Batch Quality Assurance" -> the hi-fi "Control
 *    Tower" dashboard (May 10-17, 2024; 152 at-risk SKUs).
 *  - 33 data "Copilot Action Suggestions" -> "Control Tower
 *    Explained" (the file-31 dashboard annotated 1-5).
 *  - 34 data "Automated Insight Reports" -> investigation detail
 *    "Demand Risk: Elevated CO2 levels detected" EVT-2024-0517-002.
 *  - 35 data "Sustainability & Resource Tracking" -> "Logistics
 *    scenario comparison" (baseline / cost- / service-optimized).
 *  - 36 data "Core Chart Library" -> approval detail
 *    "Recommendation: Optimize Packaging Line 3 Schedule"
 *    REC-2024-0517-0892.
 *  - 37 data "Interactive Tooltips & Hover States" -> "Predictive
 *    Maintenance - Fleet View" (126 assets ranked by health).
 *  - 38 data "Complex Data Grids" -> asset detail "Filler 2"
 *    FLR-02 (health 82%, predicted failure Jun 4, 2024).
 *  - 39 data "Gauge and KPI Cards" -> "Quality Inspection Flow"
 *    (1,248 items; ITM-2024-0517-0001 cap seal damage).
 *  - 40 data "Accessibility in Data Viz" -> Control Tower with
 *    the BrewOps Copilot panel open (BETA, scoped to Columbus).
 *  - 41 data "Brand Tokens & Color Palette" -> "BrewOps Copilot
 *    State Gallery" [printed title spells it "Gailery"] - 3
 *    guardrail states (insufficient data / conflicting sources /
 *    approval required).
 *  - 42 data "Typography & Hierarchy" -> "Outcome scorecard"
 *    (6/6 verified outcomes as of May 17, 2024).
 *  - 43 data "Form Inputs & Controls" -> "BrewOps Intelligence
 *    System Architecture" (layered platform diagram).
 *  - 44 data "Modals & Overlays" -> "Data Flow Sequence" (8 steps
 *    from alert generation to audit & traceability).
 *  - 45 data "Iconography Set" -> bw-43 "BrewOps Intelligence in
 *    Action" (Control Tower beside its KpiCard.tsx source).
 *  - 46 data "Performance Optimization" -> "BW-44: Quality
 *    Evidence" (362 automated tests, axe-core 96, Lighthouse).
 *    NOTE internal inconsistency across the deck: file 42 prints
 *    "182/182 tests passed" and WCAG conformance with no known
 *    violations, while file 46 prints 344/362 passed (12 failed)
 *    and 2 serious + 7 moderate accessibility issues. Both are
 *    transcribed as printed.
 *  - 47 data "User Testing Insights" -> "Usability Test Plan"
 *    (a plan - 8-10 participants, 5 tasks, targets - not results).
 *  - 48 data "KPI Impact Visualization" -> "Findings Priority
 *    Matrix" (expert review, severity x frequency, 10 findings).
 *  - 49 data "Cross-Platform Consistency" -> "Iteration #47:
 *    Improve alert clarity and actionability" Before/After.
 *  - 50 data "Final Platform Showcase" -> "Technical results"
 *    (measured / observed / simulated outcome tables).
 * Further printed inconsistencies kept verbatim: file 09 ranks
 * Consumer Insight 4th (17) below Quality Intelligence 5th (18);
 * file 26's approval card prints S2 OTIF 95.6% where its compare
 * table prints 94.7%; file 39's item status is "Needs Review"
 * while its verification history prints "Approved by Jamie D.";
 * file 50 prints P95 baseline as both 5.94s and 5.12s; footers
 * alternate May 2024 / May 2025 across the hi-fi screens.
 * Deck language: dark navy dashboards with amber (#F5A800) and
 * Budweiser red (#C8102E) for the concept slides; warm off-white
 * paper with the same red/amber for the hi-fi product screens.
 * Per BUILD_NOTES section 6.2 the data captions carry almost no
 * hard numbers - every number below comes from the images; the
 * few user-driven explorers are labelled sandbox inputs.
 */

const AMBER = "#f5a800";
const RED = "#e0483e";

function Bo({ n, title, sub, children, label, dark = true, foot }: { n: string; title: ReactNode; sub?: string; children: ReactNode; label: string; dark?: boolean; foot?: string }) {
  return <div className={`tks${dark ? " tks--dark" : ""}`} style={dark ? { background: "#0a141f" } : undefined} role="region" aria-label={label}>
    <div className="tks-head"><span><b>BrewOps <span style={{ color: AMBER }}>Intelligence</span></b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 50</span><span className="tks-brand" style={{ fontSize: 12, color: "#c8102e", fontStyle: "italic" }}>Budweiser</span></div>
    <h3 style={{ fontSize: 44 }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
    <div className="tks-foot"><span>{foot ?? "BrewOps Intelligence - as printed on the slide"}</span><span>Data-informed. Human-led. Outcome-driven.</span></div>
  </div>;
}

function Chips({ items, value, onPick }: { items: string[]; value: number; onPick: (i: number) => void }) {
  return <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group">{items.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === value} onClick={() => onPick(i)}>{s}</button>)}</div>;
}

function Stats({ items }: { items: Array<[string, string, string?]> }) {
  return <div className="tks-grid" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 6)},1fr)` }}>{items.map(([k, v, d]) => <div key={k} className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>{k}</p><b style={{ fontSize: 16 }}>{v}</b>{d ? <p style={{ margin: "2px 0 0", fontSize: 10.5, opacity: 0.75 }}>{d}</p> : null}</div>)}</div>;
}

function Bar({ pct, label, color }: { pct: number; label: string; color?: string }) {
  return <div role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label} style={{ background: "rgba(127,127,127,.25)", height: 8, borderRadius: 4 }}><div style={{ width: `${Math.max(0, Math.min(100, pct))}%`, height: 8, borderRadius: 4, background: color ?? AMBER }} /></div>;
}

/* ---------------- 01 - Cover / Control Tower hero ---------------- */
const ALERTS01: Array<[string, string, string, string]> = [
  ["Critical shortage risk detected", "Fairfield Brewery - Jun 1 - Jun 5", "18m", "CRITICAL"],
  ["Inbound delay", "Western DC - ETA Jun 2", "45m", "CRITICAL"],
  ["Carrier capacity tight", "Tracey DC - Jun 3 - Jun 6", "2h", "WARNING"],
  ["High demand variance", "Midwest Region - Next 7 days", "3h", "WARNING"],
  ["Production plan change", "Fairfield Brewery - Jun 1", "5h", "INFO"],
];
const HEAT_COLORS = ["#1f9d66", "#57b25e", "#e8c33a", "#e07b1f", "#d93a2b"];
export function Heatmap5({ hot = 7 }: { hot?: number }) {
  return <div role="img" aria-label={`Risk heatmap, likelihood by impact; hottest cell carries ${hot} risks`} style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 2.5 }}>
    {[4, 3, 2, 1, 0].map((row) => [0, 1, 2, 3, 4].map((col) => {
      const sev = Math.min(4, Math.max(0, Math.round((row + col) / 1.7)));
      const isHot = row === 3 && col === 3;
      return <span key={`${row}-${col}`} style={{ aspectRatio: "1.5", borderRadius: 3, background: HEAT_COLORS[sev], display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 11, boxShadow: isHot ? "0 0 0 2px #fff" : undefined }}>{isHot ? hot : ""}</span>;
    }))}
  </div>;
}

export function BrewOpsCover() {
  const [a, setA] = useState(0);
  const [approved, setApproved] = useState(false);
  const riskRow: Array<[string, string, string, string]> = [["Overall Risk", "High", "↑ vs prior 7 days", "#e0483e"], ["Service Risk", "22%", "↑ 8pp vs prior 7 days", "#e0483e"], ["Supply Risk", "High", "↑ vs prior 7 days", "#e0483e"], ["Logistics Risk", "Medium", "— no change", "#f5a800"], ["Inventory Risk", "Low", "↓ vs prior 7 days", "#18a957"], ["At Risk SKUs", "128", "$2.7M revenue", "#e0483e"]];
  const sevC = (s: string) => s === "CRITICAL" ? "#e0483e" : s === "WARNING" ? "#f5a800" : "#2F80ED";
  return <Bo n="01" title="Designing a Beverage Supply-Chain Intelligence Copilot" sub="BrewOps Intelligence - Independent Budweiser Supply-Chain Intelligence Demonstrator. From a 2023 AI blueprint to an independently built operational demonstrator. The monitor shows the Control Tower for Fairfield Brewery, date range May 19 - Jun 1, 2024. Top nav as printed: Control Tower - Demand - Supply - Logistics - Inventory - Quality - Reports." label="BrewOps cover showcase - interactive rebuild of Budweiser_01">
    <div style={{ background: "#0e1c2c", border: "1px solid #22344d", borderRadius: 13, padding: "12px 14px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7 }}>
        {riskRow.map(([k, v, d, c]) => <div key={k} style={{ border: "1px solid #22344d", borderRadius: 9, padding: "6px 9px" }}><span style={{ color: "#8fa5bd", fontSize: 10 }}>{k}</span><div style={{ color: c, fontWeight: 800, fontSize: 17 }}>{v}</div><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{d}</span></div>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 0.85fr 1.1fr", gap: 9, marginTop: 9 }}>
        <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Demand vs Supply Forecast</p>
          <svg viewBox="0 0 300 108" width="100%" height="108" role="img" aria-label="Forecast demand versus supply plan with P10 P90 bands, May 19 to Jun 1; projected shortfall 12.4 KHL May 27 to Jun 1">
            <path d="M8,66 L60,60 L112,54 L164,44 L216,34 L292,22 L292,52 L216,58 L164,64 L112,70 L60,74 L8,78 Z" fill="#2F80ED" opacity="0.18" />
            <polyline points="8,44 60,42 112,40 164,34 216,28 292,20" fill="none" stroke="#7db3f5" strokeWidth="1.6" strokeDasharray="4 3" />
            <polyline points="8,72 60,67 112,62 164,54 216,45 292,37" fill="none" stroke="#f5a800" strokeWidth="2" />
            <rect x="216" y="8" width="80" height="16" rx="3" fill="#e0483e" opacity="0.9" />
            <text x="221" y="19" fontSize="8" fill="#fff">Projected Shortfall 12.4 KHL</text>
            <text x="8" y="104" fontSize="8" fill="#8fa5bd">May 19 — Jun 1 · KHL (0–200) · Forecast Demand vs Supply Plan with P10 / P90 supply bands · shortfall May 27 – Jun 1</text>
          </svg>
        </div>
        <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Risk Heatmap</p>
          <Heatmap5 hot={7} />
          <p style={{ margin: "5px 0 0", fontSize: 10, color: "#8fa5bd" }}>Likelihood (Very Low – Very High) × Impact (Very Low – Very High). Circled cell: <b style={{ color: "#fff" }}>7</b> risks.</p>
        </div>
        <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Alert Queue <span style={{ background: "#e0483e", color: "#fff", borderRadius: "50%", padding: "0 6px" }}>7</span></p>
          {ALERTS01.map(([t, w, when, sev], i) => <button key={t} type="button" onClick={() => setA(i)} aria-pressed={i === a} style={{ display: "flex", gap: 7, width: "100%", textAlign: "left", background: i === a ? "#132a42" : "transparent", border: `1px solid ${i === a ? "#2F80ED" : "transparent"}`, borderRadius: 7, padding: "4px 6px", cursor: "pointer", font: "inherit", color: "#dbe5f0", alignItems: "baseline" }}>
            <span style={{ color: sevC(sev) }}>⚠</span><span style={{ flex: 1, fontSize: 11 }}><b style={{ color: "#fff" }}>{t}</b><br /><span style={{ color: "#8fa5bd", fontSize: 9.8 }}>{w}</span></span><span style={{ color: "#8fa5bd", fontSize: 10 }}>{when}</span>
          </button>)}
        </div>
      </div>
      <div className="tks-grid" style={{ gridTemplateColumns: "1.4fr 1fr", marginTop: 9 }}>
        <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "9px 12px" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Recommended Actions — Scenario A — Optimize Service <span style={{ float: "right", border: "1px solid #2c4258", borderRadius: 5, padding: "0 7px" }}>Scenario A ▾</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, textAlign: "center" }}>
            {[["Service Level", "+6.2pp", "#18a957"], ["Shortfall Reduction", "12.4 KHL", "#fff"], ["Revenue Impact", "+$1.8M", "#18a957"], ["Cost Impact", "+$320K", "#e0483e"]].map(([k, v, c]) => <span key={k} style={{ border: "1px solid #22344d", borderRadius: 8, padding: "5px 3px" }}><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{k}</span><br /><b style={{ color: c, fontSize: 13.5 }}>{v}</b></span>)}
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 11.5, lineHeight: 1.6 }}>Top actions: <b style={{ color: "#fff" }}>1</b> Expedite inbound from Cartersville — Arrives May 29 — +4.1 KHL <span style={{ color: AMBER }}>Primary</span> · <b style={{ color: "#fff" }}>2</b> Reroute Midwest demand to Fairfield — May 27 – Jun 1 — +3.3 KHL <span style={{ color: "#8fa5bd" }}>Secondary</span> · <b style={{ color: "#fff" }}>3</b> Prioritize production: 12oz Cans — May 25 – Jun 1 — +2.2 KHL <span style={{ color: "#8fa5bd" }}>Tertiary</span></p>
          <p style={{ margin: "5px 0 0", fontSize: 11.5 }}>Rationale: Maximizes fill rate for at-risk SKUs in high-value markets while balancing freight and production constraints.</p>
          <p style={{ margin: "8px 0 0", display: "flex", gap: 6, alignItems: "center" }}><button type="button" className="tks-btn" aria-pressed={approved} onClick={() => setApproved((v) => !v)} style={{ background: AMBER, borderColor: AMBER, color: "#111" }}>{approved ? "Scenario Approved" : "Approve Scenario"}</button><span aria-live="polite">{approved ? "Approved — human approval before action, as the workflow intends." : "Compare Scenarios / View scenario model — as printed."}</span></p></div>
        <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "9px 12px" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Evidence &amp; Ownership</p>
          {[["Demand Forecast", "Statistical Forecast v5.2 — May 19, 2024 8:00 AM", "Demand Analytics"], ["Supply Plan", "IBP Plan v3.1 — May 18, 2024 2:15 PM", "Supply Planning"], ["Inventory Snapshot", "WMS Export v2.7 — May 19, 2024 7:30 AM", "Inventory Mgmt"]].map(([t, w, o]) => <p key={t} style={{ margin: "5px 0", display: "flex", gap: 7, fontSize: 11.3 }}><span>📄</span><span style={{ flex: 1 }}><b style={{ color: "#fff" }}>{t}</b><br /><span style={{ color: "#8fa5bd" }}>{w}</span></span><span style={{ color: "#8fa5bd", fontSize: 10 }}>Owner<br />{o}</span><span style={{ color: "#18a957" }}>✓</span></p>)}
          <p style={{ margin: "6px 0 0", color: "#8fa5bd", fontSize: 10.5 }}>Last updated: May 19, 2024 8:15 AM CDT — Data sources: All systems operational.</p></div>
      </div>
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 11, color: "#8fa5bd" }}>The hero photograph of the planner at the monitor is represented structurally; the monitor's dashboard is rebuilt above.</p>
  </Bo>;
}

/* ---------------- 02 - Before / After transformation ---------------- */
const AFTER02: Array<[string, string, string]> = [
  ["1. ALERT", "Real-time detection with context", "Alert Queue (7) - Critical shortage risk detected - Fairfield Brewery - Jun 1 - 18m"],
  ["2. EVIDENCE", "Centralized, trusted data and impact", "Evidence & Impact - Demand forecast vs. supply plan - Inventory at risk - Revenue impact: $2.7M"],
  ["3. SCENARIO COMPARISON", "Compare options, choose the best path", "Scenario A - Optimize Service (Recommended) +$1.8M - Scenario B - Expedited Inbound +$1.2M - Scenario C - Reroute Demand -$0.3M"],
  ["4. APPROVAL", "Collaborate and approve with confidence", "Approved by Supply Planning - May 19, 2024 - 3:15 PM"],
  ["5. ACTION LOG", "Track actions and results over time", "Expedite inbound from Cartersville - ETA: May 22 - Owner: Supply Planning - In Progress"],
];
export function BrewOpsBeforeAfter() {
  const [s, setS] = useState(0);
  return <Bo n="02" title="From Fragmented to Focused: Smarter Decisions, Faster" sub="BEFORE: Fragmented, Manual, and Slow. AFTER: Structured, Intelligent, and Actionable — shown side-by-side across the diagonal split, as printed." label="BrewOps before and after - interactive rebuild of Budweiser_02">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 0, position: "relative", borderRadius: 13, overflow: "hidden", border: "1px solid #22344d" }}>
      <div style={{ background: "#e9ebee", color: "#232a33", padding: "13px 15px" }}>
        <p style={{ margin: 0, fontWeight: 800, letterSpacing: "0.08em", fontSize: 12, color: "#5b6470" }}>BEFORE — FRAGMENTED</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginTop: 9 }}>
          {[["📊", "Dashboards", "Static reports, refreshed late"], ["📗", "Spreadsheets", "Manual consolidation in Excel"], ["💬", "Messages", "17 unread updates in chat"], ["✍", "Manual Synthesis", "Planner stitches it together"]].map(([ic, t, d]) => <div key={t} style={{ background: "#fff", border: "1px solid #cfd4da", borderRadius: 9, padding: "7px 9px", fontSize: 11 }}>
            <b>{ic} {t}</b>{t === "Messages" ? <span style={{ background: "#e0483e", color: "#fff", borderRadius: "50%", padding: "0 5px", fontSize: 9.5, marginLeft: 4 }}>17</span> : null}<br /><span style={{ color: "#5b6470" }}>{d}</span>
          </div>)}
        </div>
        <p style={{ textAlign: "center", margin: "8px 0 2px", color: "#8a8f98" }}>╲ ╱ connectors into a scribble — <b style={{ color: "#232a33" }}>Disconnected Data / Manual Effort</b></p>
        <div style={{ background: "#fff", border: "1px solid #cfd4da", borderRadius: 9, padding: "8px 11px", fontSize: 11.3 }}>
          <b>Delayed Decision-Making</b> — Slow insights. Higher risk. Missed opportunities.
        </div>
        <div style={{ background: "#fdf0ef", border: "1.5px solid #e0483e", borderRadius: 9, padding: "8px 11px", fontSize: 11.3, marginTop: 7 }}>
          <b style={{ color: "#b3352c" }}>Operational Risk</b> — Downtime · Lost Revenue
        </div>
      </div>
      <span aria-hidden="true" style={{ position: "absolute", left: "44%", top: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", background: "#0a141f", border: "2px solid #fff", color: "#fff", fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, zIndex: 2 }}>VS.</span>
      <div style={{ background: "#0e1c2c", padding: "13px 15px" }}>
        <p style={{ margin: 0, fontWeight: 800, letterSpacing: "0.08em", fontSize: 12, color: AMBER }}>AFTER — BREWOPS INTELLIGENCE</p>
        <div style={{ display: "grid", gap: 6, marginTop: 9 }}>
          {AFTER02.map(([t, lead, panel], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0a141f", border: `1.5px solid ${i === s ? AMBER : "#22344d"}`, borderRadius: 9, padding: "7px 10px", cursor: "pointer", font: "inherit", color: "#dbe5f0", display: "flex", gap: 9 }}>
            <span style={{ flex: 1 }}><b style={{ color: "#fff", fontSize: 11.8 }}>{t}</b> <span style={{ color: "#8fa5bd", fontSize: 10.5 }}>— {lead}</span><br /><span style={{ fontSize: 10.8, color: "#a9bccd" }}>{panel}</span></span>
            {i < 4 ? <span aria-hidden="true" style={{ color: AMBER, alignSelf: "center" }}>↓</span> : null}
          </button>)}
        </div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 0, marginTop: 9, borderRadius: 10, overflow: "hidden", fontSize: 12 }}>
      <span style={{ background: "#fdf0ef", color: "#b3352c", padding: "7px 13px" }}><b>Reactive. Disconnected. Delayed.</b> Higher risk. Higher cost. Slower to act.</span>
      <span style={{ background: "#e7f7ee", color: "#14713f", padding: "7px 13px" }}><b>Proactive. Connected. Accelerated.</b> Lower risk. Lower cost. Faster impact.</span>
    </div>
  </Bo>;
}

/* ---------------- 03 - Project Timeline ---------------- */
const TIMELINE03: Array<[string, string, string]> = [
  ["2023", "Challenge Research and Blueprint", "Defined the business challenge, researched solutions, and created the AI blueprint."],
  ["2026", "Independent Reconstruction", "Rebuilt the solution independently, validating approach, data, and technical architecture."],
  ["2026", "Demonstrator and Validation", "Built an operational demonstrator and validated performance in a real-world environment."],
];
export function BrewOpsTimeline() {
  const [s, setS] = useState(0);
  const cols03 = ["#f5a800", "#e0483e", "#a31621"];
  const icons03 = ["📄🔍", "🏗", "🖥"];
  return <Bo n="03" title="Project Timeline" sub="From concept to independently built demonstrator." dark={false} label="BrewOps project timeline - interactive rebuild of Budweiser_03">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
      {TIMELINE03.map(([y, t, d], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "center", background: "transparent", border: "none", cursor: "pointer", font: "inherit", color: "#141a21", padding: 0 }}>
        <span style={{ display: "inline-flex", width: 62, height: 62, borderRadius: "50%", border: `2px solid ${cols03[i]}`, alignItems: "center", justifyContent: "center", fontSize: 21, background: "#fff" }}>{icons03[i]}</span>
        <span style={{ display: "block", fontSize: 21, fontWeight: 800, color: cols03[i], marginTop: 6 }}>{y}</span>
        <span style={{ display: "block", borderTop: `2.5px solid ${cols03[i]}`, margin: "6px 12px", paddingTop: 7, fontWeight: 700, fontSize: 13.5 }}>{t}</span>
        <span style={{ display: "block", fontSize: 11.5, lineHeight: 1.55, color: "#4a5462", marginTop: 3 }}>{d}</span>
      </button>)}
    </div>
    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", margin: "12px 30px 0" }}><span style={{ flex: 1, height: 2.5, background: "#f5a800" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f5a800" }} /><span style={{ flex: 1, height: 2.5, background: "#e0483e" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e0483e" }} /><span style={{ flex: 1, height: 2.5, background: "#a31621" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#a31621" }} /></div>
    <p style={{ margin: "12px 0 0", background: "#141a21", color: "#f3ead2", borderRadius: 10, padding: "9px 14px", fontSize: 12.5 }}>🎯 <b>Outcome:</b> An independently built, AI-powered supply-chain intelligence demonstrator delivering measurable value.</p>
  </Bo>;
}

/* ---------------- 04 - Supply Chain Panorama ---------------- */
const PANORAMA04: Array<[string, string, string, string]> = [
  ["Ingredients & Raw Materials", "Sourced globally with quality and sustainability standards.", "Ingredient Variability", "Quality, yield, or supply variations impact consistency and production."],
  ["Production & Packaging", "Brewing, blending, canning and packaging at scale.", "Production Bottleneck", "Capacity constraints or equipment downtime cause output delays."],
  ["Warehouse & Inventory", "Inventory positioning and availability across the network.", "Inventory Imbalance", "Overstock, understock, or misplaced inventory impacts service level and cost."],
  ["Distribution & Transport", "Movement to markets through optimized routes and partners.", "Transport Delay", "Carrier delays, route disruptions, or capacity shortfalls affect delivery performance."],
  ["Retail & Point of Sale", "Products on shelves and in coolers, ready to sell.", "Shelf Stockout Risk", "Out-of-stocks or poor assortment reduce sales and shopper satisfaction."],
  ["Consumer Signal & Market Feedback", "Real-time consumer behavior and market signals inform decisions.", "Demand Signal Shift", "Changing preferences or unexpected demand shifts impact forecast accuracy and planning."],
];
export function BrewOpsPanorama() {
  const [s, setS] = useState(0);
  const icons04 = ["🌾", "🏭", "🏬", "🚚", "🛒", "📱"];
  const cols04 = ["#e8a13a", "#2F80ED", "#6C5CE7", "#0e7c86", "#e0483e", "#18a957"];
  return <Bo n="04" title="Beverage Supply Chain Panorama" sub="End-to-end visibility. Proactive risk detection. Smarter decisions. The isometric stage illustrations are represented by their icons; each stage's risk block sits beneath it, as printed." label="BrewOps supply chain panorama - interactive rebuild of Budweiser_04">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7 }}>
      {PANORAMA04.map(([t, d, risk, riskBody], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0e1c2c", border: `1.5px solid ${i === s ? cols04[i] : "#22344d"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 19 }}>{icons04[i]}</span>{i < 5 ? <span aria-hidden="true" style={{ color: "#5b7a99" }}>- -›</span> : null}</span>
        <b style={{ display: "block", color: "#fff", fontSize: 11.8, margin: "4px 0 3px", lineHeight: 1.35 }}>{t}</b>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#a9bccd" }}>{d}</span>
        <span style={{ display: "block", borderTop: "1px solid #22344d", marginTop: 8, paddingTop: 7 }}>
          <span style={{ display: "inline-flex", width: 17, height: 17, borderRadius: "50%", background: cols04[i], color: "#fff", fontWeight: 800, fontSize: 10, alignItems: "center", justifyContent: "center", marginRight: 5 }}>{i + 1}</span>
          <b style={{ fontSize: 10.8, color: "#ffb3ab" }}>⚠ RISK {i + 1} — {risk}</b>
          <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#a9bccd", marginTop: 3 }}>{riskBody}</span>
          {i === 5 ? <span style={{ display: "block", marginTop: 5, fontSize: 10.3 }}>📱 Consumer Sentiment <b style={{ color: "#4ade80" }}>+18%</b> vs prior 7 days · 12.4K signals</span> : null}
        </span>
      </button>)}
    </div>
    <p style={{ margin: "10px 0 0", background: "#132a42", border: "1px solid #22344d", borderRadius: 10, padding: "9px 14px", fontSize: 12.5 }}>BrewOps Intelligence unifies data across the supply chain to <b style={{ color: "#fff" }}>detect risks early, optimize operations</b>, and <b style={{ color: "#fff" }}>drive resilient growth</b>.</p>
  </Bo>;
}

/* ---------------- 05 - Decision Latency Map ---------------- */
const LATENCY05: Array<[string, string, string]> = [
  ["1. Disruption Occurs", "T+0", "DISRUPTION DETECTED - Inbound Delay, Western DC - ETA pushed to June 2 (US map, west-coast hotspot)."],
  ["2. Fragmented Signals", "+0 - 30 min", "Disconnected Systems - signals exist, but live in silos: TMS (Inbound delay update) - WMS (Receipt reschedule not synced) - Demand Planning (Forecast unchanged) - Inventory (On-hand data stale by 24h)."],
  ["3. Manual Handoffs", "+30 min - 4 hrs", "Manual & Fragmented Handoffs: Planner builds impact list (Excel) 45m - Sends update in Teams channel (Message) 30m - Logistics builds recovery plan (Excel) 90m - Email to supply chain lead (Email) 20m."],
  ["4. Role Silos", "+4 - 24 hrs", "Handoffs require reviews, clarifications, and rework: Demand Planner - Reviews impact - 2-4h - Logistics Planner - Checks capacity & options - 4-6h - Supply Planner - Validates inventory - 3-5h - Finance Manager - Assesses cost impact - 2-4h - DC Manager - Confirms execution - 2-4h."],
  ["5. Decision Lag", "+24 - 48 hrs", "Cumulative delays create slow, reactive decisions. Total Decision Latency ~24-48 HOURS. Why so long? Data not connected - Manual consolidation - Context switching - Queueing & approvals - Rework & validation."],
  ["6. Delayed / Lower Quality Decision", "+48 hrs+", "DECISION MADE (DELAYED) - Plan Adjusted - June 2 (Was May 31) - Confidence 2 of 5 stars. Business Impact: Expedite spend +$132K - Service risk High - Fill rate impact -4.2 pts - Inventory imbalance +8.7% - Customer impact Elevated."],
];
export function BrewOpsLatency() {
  const [s, setS] = useState(0);
  return <Bo n="05" title="Decision Latency Map" sub="How one disruption becomes a delayed decision across disconnected systems and teams. Data across systems as of May 19 - Jun 1, 2024. Dashed red flow arrows join the six stages on the original." label="BrewOps decision latency map - interactive rebuild of Budweiser_05">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7, alignItems: "start" }}>
      {LATENCY05.map(([t, w, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0e1c2c", border: `1.5px solid ${i === s ? "#e0483e" : "#22344d"}`, borderRadius: 11, padding: "8px 9px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
        <b style={{ display: "block", color: "#fff", fontSize: 11.3, lineHeight: 1.35 }}>{t} {i < 5 ? <span aria-hidden="true" style={{ color: "#e0483e", float: "right" }}>⇢</span> : null}</b>
        <span style={{ display: "inline-block", background: "rgba(224,72,62,0.16)", color: "#ffb3ab", borderRadius: 5, padding: "0 6px", fontSize: 9.8, fontWeight: 700, margin: "4px 0" }}>{w}</span>
        <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.5, color: "#a9bccd" }}>{body}</span>
        {i === 4 ? <span style={{ display: "flex", justifyContent: "center", marginTop: 7 }}><span style={{ width: 62, height: 62, borderRadius: "50%", border: "6px solid #e0483e", display: "inline-flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontWeight: 800, fontSize: 9.5, color: "#fff", lineHeight: 1.25 }}>~24–48<br />HOURS</span></span> : null}
        {i === 5 ? <span style={{ display: "block", marginTop: 5, color: "#f5c542", fontSize: 11 }}>★★<span style={{ color: "#3d5878" }}>★★★</span> <span style={{ color: "#8fa5bd", fontSize: 9.5 }}>confidence 2 of 5</span></span> : null}
      </button>)}
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>The Cost of Latency — every hour of delay compounds impact across the supply chain</p>
    <Stats items={[["Average decision lag", "24-48 hrs", "across disruptions"], ["Average expedite & adjustment cost", "$132K+"], ["Average fill rate degradation", "4.2 pts"], ["Average increase in inventory imbalance", "8.7%"], ["Teams impacted", "Multiple", "across the chain"]]} />
    <p style={{ margin: "8px 0 0", fontSize: 11, color: "#8fa5bd" }}>Legend (as printed): stage cards carry the disruption, the four systems (TMS / WMS / Demand Planning / Inventory), the timed handoffs (45m / 30m / 90m / 20m), the five role cards (DP / LP / SP / FM / DC) and the impact table. <b style={{ color: "#fff" }}>BrewOps Intelligence Impact:</b> Connected data. Automated insights. Faster decisions. Better outcomes.</p>
  </Bo>;
}

/* ---------------- 06 - 2023 Concept Evidence Audit (bw-08) ---------------- */
const STRENGTHS06: Array<[string, string]> = [
  ["Broad Opportunity Mapping", "Identified meaningful use cases and value opportunities across the U.S. Budweiser supply chain."],
  ["Awareness of Relevant AI Technologies", "Recognized key AI/ML approaches including forecasting, optimization, NLP, and anomaly detection."],
  ["End-to-End Supply Chain Coverage", "Spanned demand, inventory, logistics, maintenance, and quality across the control tower."],
  ["Decision-Support Framing", "Positioned AI as a decision-support copilot to enhance planning, resilience, and performance."],
];
const GAPS06: Array<[string, string]> = [
  ["No Defined Users", "No identified personas, roles, or user journeys to guide design or adoption."],
  ["No Data Provenance", "No visibility into data sources, lineage, quality, or trust framework."],
  ["No System Boundaries", "Scope, dependencies, integrations, and ownership boundaries are undefined."],
  ["No Failure States", "No consideration of model failure, data drift, or operational exception handling."],
  ["No Working Application", "The concept remains a blueprint with no functional prototype or MVP."],
  ["No Validation Evidence", "No documented testing, backtesting, or performance validation of proposed solutions."],
  ["No Proof of Deployment", "No piloting, production use, or measurable business impact demonstrated."],
];
export function BrewOpsAudit() {
  const [row, setRow] = useState<string | null>(null);
  const icons06 = ["🗺", "🧠", "🔗", "🧭"];
  const gapIcons = ["👤", "🗃", "🧱", "⚠", "🖥", "🧪", "🚀"];
  const rowBtn = (t: string, d: string, ic: string, c: string) => (
    <button key={t} type="button" onClick={() => setRow(t)} aria-pressed={row === t} style={{ display: "flex", gap: 9, width: "100%", textAlign: "left", background: row === t ? "rgba(255,255,255,0.07)" : "transparent", border: `1px solid ${row === t ? c : "transparent"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
      <span style={{ fontSize: 17, color: c }} aria-hidden="true">{ic}</span>
      <span><b style={{ color: "#fff", fontSize: 12 }}>{t}</b><br /><span style={{ fontSize: 10.8, lineHeight: 1.5, color: "#a9bccd" }}>{d}</span></span>
    </button>
  );
  return <Bo n="06" title="2023 Concept Evidence Audit" sub="bw-08 - BLUEPRINT AUDIT. Assessing the blueprint concept against an operationally ready standard." label="BrewOps 2023 concept evidence audit - interactive rebuild of Budweiser_06">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: 10 }}>
      <div style={{ border: "1.5px solid #2F80ED", borderRadius: 12, padding: "10px 12px", background: "rgba(47,128,237,0.06)" }}>
        <p style={{ margin: 0, fontWeight: 800, color: "#7db3f5", letterSpacing: "0.06em", fontSize: 12.5 }}>✓ STRENGTHS</p>
        <div style={{ display: "grid", gap: 4, marginTop: 7 }}>{STRENGTHS06.map(([t, d], i) => rowBtn(t, d, icons06[i], "#2F80ED"))}</div>
      </div>
      <div style={{ border: "1.5px solid #e0483e", borderRadius: 12, padding: "10px 12px", background: "rgba(224,72,62,0.05)" }}>
        <p style={{ margin: 0, fontWeight: 800, color: "#ff9d94", letterSpacing: "0.06em", fontSize: 12.5 }}>✕ GAPS</p>
        <div style={{ display: "grid", gap: 4, marginTop: 7 }}>{GAPS06.map(([t, d], i) => rowBtn(t, d, gapIcons[i], "#e0483e"))}</div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: 10, borderRadius: 10, overflow: "hidden", fontSize: 12 }}>
      <span style={{ background: "rgba(47,128,237,0.16)", padding: "8px 13px" }}><b style={{ color: "#7db3f5" }}>Outcome:</b> Strong strategic foundation with clear opportunities.</span>
      <span style={{ background: "rgba(224,72,62,0.14)", padding: "8px 13px" }}><b style={{ color: "#ff9d94" }}>Next Step:</b> Validate, build, and operationalize with governance, data, and user-centric design.</span>
    </div>
  </Bo>;
}

/* ---------------- 07 - Ownership & Evidence Map ---------------- */
const OWN07: Array<{ head: string; who: string; items: Array<[string, string, string]>; evidence: string[] }> = [
  { head: "1 - Original Team Artifact (2023)", who: "Developed by Enterprise Team", items: [["2023 Platform Artifacts", "Early data models, pipelines, and infrastructure foundations.", "Historical artifact"], ["Initial Analytics & Dashboards", "Foundational dashboards and KPI monitoring for supply chain.", "Historical artifact"], ["Team Documentation", "Architecture notes, technical docs, and operational runbooks.", "Historical artifact"], ["Original Team Contributions", "Cross-functional team deliverables and iterative improvements.", "Historical artifact"]], evidence: ["Internal repositories and documentation (2023)", "Commit history and team records", "Screenshots and archived dashboards", "Meeting notes and design discussions"] },
  { head: "2 - Toni's Documented Contribution (2023)", who: "Documented Historical Contribution (Scenario Analysis & AI Product Blueprint)", items: [["Scenario Analysis Leadership", "Designed scenario frameworks, demand forecasting, and supply risk modeling.", "Historical artifact"], ["AI Product Blueprint", "Authored AI/ML approach, system design, and product vision for BrewOps Intelligence.", "Historical artifact"], ["Strategy & Design Documents", "Product requirements, decision logs, and technical design artifacts.", "Historical artifact"], ["Stakeholder Alignment", "Workshops, presentations, and alignment with business and technology teams.", "Historical artifact"]], evidence: ["Dated documents and design artifacts (2023)", "Slide decks, whitepapers, and planning docs", "Email threads and decision records", "Stakeholder meeting notes and approvals"] },
  { head: "3 - Independently Reconstructed Work (2026)", who: "Rebuilt Solo by Toni (Demonstrator, Redesign & Engineering Artifacts)", items: [["BrewOps Intelligence Demonstrator", "Independent end-to-end demonstrator showcasing full scenario capabilities.", "Demonstrator"], ["Interface Redesign (2026)", "Modern UX/UI redesign for clarity, insight, and executive decision-making.", "Reconstruction"], ["Engineering Artifacts", "Rebuilt models, services, and data pipelines independently.", "Reconstruction"], ["Validated Results", "Demonstrated accuracy, performance, and business impact.", "Validated result"]], evidence: ["2026 demonstrator and live screenshots", "Code repositories and technical documentation", "Test results and validation reports", "Performance benchmarks and impact metrics"] },
];
export function BrewOpsOwnership() {
  const [c, setC] = useState(1);
  const cols07 = ["#2563eb", "#7c4dff", "#18a957"];
  const icons07 = ["🗄", "📊", "📄", "👥"];
  return <Bo n="07" title="Ownership & Evidence Map" sub="Distinguishing Original Team Work, Toni's Documented Contribution, and Independent Reconstruction." dark={false} label="BrewOps ownership and evidence map - interactive rebuild of Budweiser_07">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
      {OWN07.map((col, ci) => <button key={col.head} type="button" onClick={() => setC(ci)} aria-pressed={ci === c} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${ci === c ? cols07[ci] : "#ddd6c9"}`, borderRadius: 12, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: cols07[ci], color: "#fff", padding: "8px 12px" }}><b style={{ fontSize: 12.5 }}>{col.head}</b><br /><span style={{ fontSize: 10.3, opacity: 0.9 }}>{col.who}</span>{ci < 2 ? <span aria-hidden="true" style={{ float: "right" }}>→</span> : null}</span>
        <span style={{ display: "block", padding: "9px 12px" }}>
          {col.items.map(([t, d, tag], ii) => <span key={t} style={{ display: "flex", gap: 8, margin: "7px 0" }}><span aria-hidden="true" style={{ color: cols07[ci], fontSize: 15 }}>{icons07[ii]}</span><span><b style={{ fontSize: 11.8 }}>{t}</b><br /><span style={{ fontSize: 10.5, lineHeight: 1.5, color: "#4a5462" }}>{d}</span> <span className="tks-tag">{tag}</span></span></span>)}
          <span style={{ display: "block", background: "#faf8f5", border: "1px solid #e7e2d9", borderRadius: 8, padding: "7px 10px", marginTop: 8 }}>
            <b style={{ fontSize: 11 }}>Evidence</b>
            <ul style={{ margin: "3px 0 0", paddingLeft: 15, fontSize: 10.5, lineHeight: 1.55, color: "#4a5462" }}>{col.evidence.map((e) => <li key={e}>{e}</li>)}</ul>
          </span>
        </span>
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1.3fr 1fr", gap: 10, marginTop: 10, fontSize: 11.3 }}>
      <p style={{ margin: 0 }}><b>Purpose:</b> This map clarifies ownership and evidence across the lifecycle of BrewOps Intelligence, ensuring transparency of contributions and independent reconstruction.</p>
      <p style={{ margin: 0 }}><b>Evidence Legend:</b> <span style={{ color: "#2563eb" }}>■</span> Historical artifact · <span style={{ color: "#7c4dff" }}>■</span> Documented contribution · <span style={{ color: "#18a957" }}>■</span> Demonstrator / Reconstruction / Validated result. <b>Key Takeaway:</b> {"Toni's 2026 work is an independent reconstruction and enhancement, built upon foundational ideas and contributions from 2023."}</p>
      <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 6 }}><b>Timeline:</b> <span style={{ background: "#2563eb", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 10 }}>2023 Team</span>→<span style={{ background: "#7c4dff", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 10 }}>2023 Toni</span>→<span style={{ background: "#18a957", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 10 }}>2026 Solo</span></p>
    </div>
  </Bo>;
}

/* ---------------- 08 - Pain Points to Decisions matrix ---------------- */
const PAIN08: Array<[string, string, string[], string, string[], string[]]> = [
  ["Demand Variance", "Forecasts miss actual demand across markets.", ["POS sales (SKU x location)", "Market events & promotions", "Price & elasticity signals", "Weather & calendar data"], "Adjust forecast and reallocate supply to balance service and inventory.", ["Rebalance production plan", "Adjust DC allocations", "Trigger expedite if needed"], ["Forecast Accuracy (MAPE) up", "Service Level (%) up", "Stockouts down"]],
  ["Inventory Exposure", "Rising inventory or excess aging across the network.", ["On-hand & in-transit inventory", "Aging by SKU & location", "Inventory targets & policies", "Demand outlook"], "Optimize inventory targets and reposition to reduce exposure.", ["Transfer inventory", "Adjust safety stock", "Promote or markdown"], ["Days of Supply down", "Inventory Value at Risk down", "Aging > 90 days down"]],
  ["Inbound Transport Delay", "Supplier or carrier delays impact receipt & plan.", ["Carrier ETA & location (GPS)", "Supplier ASN & commit", "Port / customs data", "Historical lane performance"], "Re-sequence receipts and adjust production or allocation plans.", ["Reroute or expedite", "Adjust dock appointments", "Update plan & stakeholders"], ["On-Time In-Full (OTIF) up", "Inbound Delay (hrs) down", "Expedite Spend down"]],
  ["Line Anomaly", "Equipment or quality issues disrupt production.", ["Equipment IoT & sensor data", "OEE & downtime logs", "Quality test results", "Work orders & maintenance logs"], "Determine root cause and prioritize fix to minimize impact.", ["Schedule maintenance", "Adjust speed / recipe", "Re-allocate production"], ["OEE (%) up", "Unplanned Downtime (hrs) down", "Reject Rate (%) down"]],
  ["Cold-Chain Risk", "Temperature excursions threaten product quality.", ["Temperature sensor data", "Location & dwell time", "Equipment status", "Ambient conditions"], "Mitigate risk and protect product quality in transit.", ["Alert & escalate", "Adjust setpoints / route", "Intervene at destination"], ["Excursions (#) down", "Time in Range (%) up", "Quality Claims down"]],
];
export function BrewOpsPainMatrix() {
  const [r, setR] = useState(0);
  const rowIcons = ["📉", "📦", "🚚", "⚙", "🌡"];
  const rowCols = ["#e0483e", "#f5a800", "#e8c33a", "#18a957", "#2563eb"];
  const heads = ["⚠ Pain Point", "🗃 Required Data", "🧭 Decision", "🛠 Intervention", "📈 Measurable Signal"];
  return <Bo n="08" title="From Pain Points to Decisions That Move the Chain" sub="Control Tower - Data to Decision Matrix. Linking operational friction to the data, decisions, and actions that drive measurable outcomes." label="BrewOps pain point decision matrix - interactive rebuild of Budweiser_08">
    <div style={{ overflowX: "auto" }}><table className="tks-table tks-table--micro" style={{ minWidth: 860 }}>
      <thead><tr>{heads.map((h) => <th key={h} style={{ background: "#102A43", color: "#fff", fontSize: 10.5 }}>{h}</th>)}</tr></thead>
      <tbody>{PAIN08.map((row, i) => <tr key={row[0]} onClick={() => setR(i)} style={{ cursor: "pointer", background: i === r ? "rgba(245,168,0,0.16)" : undefined }}>
        <td style={{ borderLeft: `4px solid ${rowCols[i]}`, width: "19%" }}><span style={{ fontSize: 15, color: rowCols[i] }}>{rowIcons[i]}</span> <b>{row[0]}</b><br /><span style={{ color: "#55606e" }}>{row[1]}</span></td>
        <td style={{ width: "22%" }}><ul style={{ margin: 0, paddingLeft: 13 }}>{row[2].map((x) => <li key={x}>{x}</li>)}</ul></td>
        <td style={{ width: "21%" }}>{row[3]}</td>
        <td style={{ width: "19%" }}><ul style={{ margin: 0, paddingLeft: 13 }}>{row[4].map((x) => <li key={x}>{x}</li>)}</ul></td>
        <td style={{ width: "19%" }}><ul style={{ margin: 0, paddingLeft: 13 }}>{row[5].map((x) => <li key={x}>{x}</li>)}</ul></td>
      </tr>)}</tbody></table></div>
    <p style={{ margin: "10px 0 0", display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}><span><b>Better data. Smarter decisions.</b> Operational actions that move service, cost, and capital.</span><span style={{ marginLeft: "auto", color: "#8fa5bd" }}>Flow as printed: <b style={{ color: "#fff" }}>Data In → Decision → Action → Outcome</b></span></p>
  </Bo>;
}

/* ---------------- 09 - Opportunity Prioritization ---------------- */
const CRITERIA09 = ["Decision Frequency", "Business Criticality", "Data Availability", "Human-Review Need", "Demonstrator Feasibility"];
const OPPS09: Array<[string, string, number[], number, string]> = [
  ["Control-Tower Risk", "Proactive risk detection & alerts", [5, 5, 4, 3, 5], 22, "HIGH PRIORITY"],
  ["Logistics Scenarios", "What-if modeling & scenario planning", [4, 5, 4, 3, 4], 20, "HIGH PRIORITY"],
  ["Predictive Maintenance", "Equipment failure prediction", [4, 4, 4, 2, 5], 19, "HIGH PRIORITY"],
  ["Consumer Insight", "Demand sensing & consumer trends", [3, 4, 3, 4, 3], 17, "SECONDARY"],
  ["Quality Intelligence", "Quality prediction & root cause analysis", [3, 4, 4, 4, 3], 18, "SECONDARY"],
];
export function BrewOpsOpportunities() {
  const [r, setR] = useState(0);
  const [scores, setScores] = useState<number[]>([...OPPS09[0][2]]);
  const pick = (i: number) => { setR(i); setScores([...OPPS09[i][2]]); };
  const sandboxTotal = scores.reduce((x, y) => x + y, 0);
  return <Bo n="09" title="Prioritizing the Highest-Impact AI Demonstrator Opportunities" sub="Opportunity Prioritization - each candidate product area scored 1-5 across five decision criteria (Total out of 25). Criteria: Decision Frequency (how often the decision is made) - Business Criticality (impact on cost, service, risk or revenue) - Data Availability (quality, accessibility and recency) - Human-Review Need (degree of judgment required) - Demonstrator Feasibility (speed and ease to build a compelling demo)." label="BrewOps opportunity prioritization - interactive rebuild of Budweiser_09">
    <table className="tks-table"><thead><tr><th>#</th><th>Candidate Product Area</th>{CRITERIA09.map((c, j) => <th key={c} style={{ color: ["#18a957", "#e07b1f", "#2563eb", "#7c4dff", "#0e7c86"][j] }}>{["📅", "⚠", "🗃", "👤", "🛠"][j]} {c}</th>)}<th>Total</th><th>Band</th></tr></thead>
      <tbody>{OPPS09.map(([name, d, sc, total, band], i) => <tr key={name} onClick={() => pick(i)} style={{ cursor: "pointer", background: i === r ? "rgba(245,168,0,.14)" : undefined, boxShadow: i < 3 ? "inset 0 0 0 1.5px #d4af37" : undefined }}><td>{i + 1}{i < 3 ? " ★" : ""}</td><td><b>{name}</b><br />{d}</td>{sc.map((v, j) => <td key={j} style={{ color: ["#18a957", "#e07b1f", "#2563eb", "#7c4dff", "#0e7c86"][j], fontWeight: 800, fontSize: 14 }}>{v}</td>)}<td><b>{total}</b></td><td>{band}</td></tr>)}</tbody></table>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.2fr", gap: 9, marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>🎯 Why these three?</p><p style={{ margin: 0 }}>These opportunities combine high business impact with strong data foundation and demonstrator feasibility — driving early wins and stakeholder confidence.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Scoring Guide</p><span style={{ display: "flex", gap: 3 }}>{[1, 2, 3, 4, 5].map((v) => <span key={v} style={{ flex: 1, textAlign: "center", background: `linear-gradient(90deg,#e0483e,#f5a800,#18a957)`, opacity: 0.35 + v * 0.13, borderRadius: 4, padding: "2px 0", fontWeight: 800, color: "#fff" }}>{v}</span>)}</span><p style={{ margin: "5px 0 0", fontSize: 11 }}>1 = Low · 5 = High, per criterion.</p></div>
      <div className="tks-card" style={{ borderColor: "#d4af37" }}><p className="tks-kicker" style={{ marginTop: 0 }}>🏆 Recommended Prioritized Scope</p><p style={{ margin: 0 }}><b>Control-Tower Risk · Logistics Scenarios · Predictive Maintenance</b></p></div>
    </div>
    <div className="tks-detail" aria-live="polite"><b>{OPPS09[r][0]}</b> - printed total <b>{OPPS09[r][3]} / 25 - {OPPS09[r][4]}</b>. Note as printed: rank 4 Consumer Insight totals 17, below rank 5 Quality Intelligence at 18.
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Sandbox - adjust this row's scores (your inputs only; printed scores stay in the table)</p>
      {CRITERIA09.map((c, j) => <label key={c} style={{ display: "flex", gap: 8, alignItems: "center", margin: "3px 0" }}><span style={{ minWidth: 170 }}>{c}: {scores[j]}</span><input type="range" min={1} max={5} value={scores[j]} aria-label={`Sandbox score for ${c}`} onChange={(e) => setScores((v) => v.map((x, k) => (k === j ? Number(e.target.value) : x)))} /></label>)}
      <p style={{ margin: "6px 0 0" }}>Sandbox total: <b>{sandboxTotal} / 25</b> (printed: {OPPS09[r][3]}).</p></div>
  </Bo>;
}

/* ---------------- 10 - Role-to-Job Map (bw-13) ---------------- */
const ROLES10: Array<[string, string, string[], string[], string[]]> = [
  ["Supply Planner", "Balance supply and demand across time and constraints.", ["Set demand plan & forecast overrides", "Create supply plan & production plan", "Rebalance inventory across locations", "Resolve supply-demand gaps"], ["Forecast vs. actual demand", "Inventory on-hand & projections", "Production capacity & constraints", "Supplier lead times & reliability", "Promotions & event calendar"], ["Approve supply plan", "Reallocate inventory", "Exception overrides within policy guardrails"]],
  ["Logistics Manager", "Ensure product moves efficiently and on time to the right place.", ["Plan distribution & transportation", "Optimize load, route & mode", "Manage carrier performance", "Resolve service and delivery exceptions"], ["Customer demand & priorities", "Inventory & ATP by location", "Carrier rates, capacity & SLA", "Traffic, weather & disruptions", "Dock & yard capacity"], ["Approve shipment plans", "Select carriers & service levels", "Expedite or reroute within budget"]],
  ["Maintenance Engineer", "Maximize asset reliability and minimize unplanned downtime.", ["Prioritize and schedule work orders", "Plan preventive maintenance", "Manage spare parts & inventory", "Investigate failures & root causes"], ["Asset health & sensor data", "Work order backlog & aging", "MTBF/MTTR & downtime history", "Spare parts availability", "Production schedule impact"], ["Approve maintenance plans", "Allocate maintenance resources", "Expedite repairs / emergency spend"]],
  ["Quality Lead", "Protect quality, ensure compliance, and drive continuous improvement.", ["Review quality results & trends", "Release or hold product", "Approve deviations & CAPA", "Update specs and controls"], ["Lab results & in-line quality data", "Deviation, CAPA & audit findings", "Customer complaints & returns", "Regulatory changes & alerts", "Supplier quality performance"], ["Release / hold decisions", "Approve deviations & CAPA", "Change control for quality specs"]],
  ["R&D / Consumer Insight Lead", "Translate consumer & market insights into winning innovations.", ["Prioritize innovation pipeline", "Approve concept & prototype", "Define & test consumer concepts", "Recommend portfolio actions"], ["Consumer trends & sentiment", "Market & category performance", "Concept test & sensory results", "Competitive launches & pricing", "Brand health & elasticity"], ["Approve concepts to advance", "Allocate innovation budget", "Recommend portfolio changes"]],
  ["Operations Executive", "Oversee end-to-end performance and drive enterprise outcomes.", ["Set priorities & performance targets", "Allocate resources & capital", "Manage risk & business continuity", "Review performance & take action"], ["Financial performance (P&L)", "Service, quality & sustainability KPIs", "Capacity utilization & constraints", "Risk, compliance & incidents", "Market & macro indicators"], ["Approve budgets & investments", "Set policy & risk appetite", "Escalate & resolve cross-functional issues"]],
];
export function BrewOpsRoleMap() {
  const [r, setR] = useState(0);
  const cols10 = ["#2563eb", "#18a957", "#f5a800", "#7c4dff", "#0e7c86", "#e0483e"];
  const icons10 = ["📋", "🚚", "🔧", "🛡", "🔬", "👔"];
  return <Bo n="10" title="Role-to-Job Map" sub="Hypothesis-Based Role Framework - primary users, the decisions they make, signals they act on, and the authority they hold. Built for Brewing. Backed by Intelligence. (bw-13-role-job-map)" label="BrewOps role to job map - interactive rebuild of Budweiser_10">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7, alignItems: "start" }}>
      {ROLES10.map(([t, mission, dec, sig, auth], i) => <button key={t} type="button" onClick={() => setR(i)} aria-pressed={i === r} style={{ textAlign: "left", background: "#0e1c2c", border: `1.5px solid ${i === r ? cols10[i] : "#22344d"}`, borderTop: `5px solid ${cols10[i]}`, borderRadius: 11, padding: "8px 9px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
        <span style={{ display: "inline-flex", width: 26, height: 26, borderRadius: "50%", border: `1.5px solid ${cols10[i]}`, alignItems: "center", justifyContent: "center", fontSize: 13 }}>{icons10[i]}</span>
        <b style={{ display: "block", color: "#fff", fontSize: 11.8, margin: "4px 0 2px", lineHeight: 1.3 }}>{t}</b>
        <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.45, color: "#a9bccd", fontStyle: "italic" }}>{mission}</span>
        {[["Recurring Decisions", dec], ["Key Input Signals", sig], ["Approval Authority", auth]].map(([h, list]) => <span key={h as string} style={{ display: "block", marginTop: 7 }}>
          <span style={{ display: "block", fontSize: 8.8, fontWeight: 800, letterSpacing: "0.08em", color: cols10[i] }}>{(h as string).toUpperCase()}</span>
          <ul style={{ margin: "2px 0 0", paddingLeft: 12, fontSize: 9.4, lineHeight: 1.5, color: "#c6d2e0" }}>{(list as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
        </span>)}
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 10, marginTop: 10, fontSize: 11.3, background: "#0e1c2c", border: "1px solid #22344d", borderRadius: 10, padding: "8px 12px" }}>
      <p style={{ margin: 0 }}><b style={{ color: "#fff" }}>How to read:</b> This is a hypothesis-based proto-role framework derived from desk research of brewing supply chains and common planning/operations practices. It will be refined through user interviews and validation workshops.</p>
      <p style={{ margin: 0 }}><b style={{ color: "#fff" }}>Notes &amp; Assumptions:</b> Roles are enterprise-wide and may exist at multiple sites/regions — Decision rights vary by organization; approvals reflect typical authority boundaries — Signals represent common data sources; actual availability may vary — The framework is intent-focused, not a system permission model — Future iterations will add role sub-types, JTBD statements, and success metrics — Validated with BrewOps and Budweiser stakeholders (as printed).</p>
    </div>
  </Bo>;
}

/* ---------------- 11 - BW-05 Original Deck Contact Sheet ---------------- */
const DECK11: Array<[string, string]> = [
  ["1. Title Slide", "GENERATIVE AI APPLICATION OF LOGISTICS AND SUPPLY CHAIN IN BEVERAGE INDUSTRY - Business Challenge Deck - Driving efficiency, resilience and growth across the Budweiser supply chain - June 2023."],
  ["2. Challenge Overview", "A complex, volatile environment demands smarter, faster, more connected decisions: Demand volatility and shifting consumer preferences - Inflation, cost pressures and margin erosion - Supply disruptions and extended lead times - Capacity constraints and labor availability - Sustainability and regulatory expectations - Data silos and manual decision processes. OUR GOAL: Leverage Generative AI to augment human decision-making, unlock operational excellence and build a more resilient, agile supply chain."],
  ["3. Beverage Supply Chain Panorama", "From barley to bar - a global, interconnected value chain: Raw Materials (Suppliers & Farms) - Manufacturing (Breweries & Co-packers) - Packaging (Cans, Bottles, Kegs) - Distribution (DCs & Warehouses) - Customers (Retail & On-Premise) - Consumers (Moments of Choice). Map legend: Breweries - Distribution Centers - Major Markets - Ports & Gateways - Key Trade Lanes."],
  ["4. AI Technology Landscape", "Where Generative AI creates impact across the stack. EXPERIENCE LAYER: Conversational Interfaces - Decision Support Assistants - Knowledge Copilots - Natural Language Reporting. APPLICATION LAYER: Demand Intelligence - Supply & Inventory Optimization - Logistics & Network Planning - Procurement Intelligence. MODEL LAYER: LLMs (Foundation Models) - Fine-tuned Domain Models - Time Series & ML Models - Optimization Engines. DATA FOUNDATION: Internal Data (ERP, WMS, TMS) - Partner & Market Data - Unstructured Data (Docs, Email, PDFs) - Real-time Data (IoT, Sensors)."],
  ["5. Opportunity Map", "High-impact use cases aligned to business value and feasibility. TRANSFORM (Strategic Bets): Autonomous Supply Chain Orchestration - End-to-End Network Reinvention. SCALE (Priority Plays): Demand Sensing & Forecasting Copilot - Inventory & Replenishment Optimization - Logistics Planning Copilot. EXPLORE (Emerging Bets): Generative Design for Packaging & Promos - Scenario Simulation Lab. QUICK WINS (Fast Value): Document Intelligence (POs, Invoices, BOLs) - Chat-based Data Q&A."],
  ["6. Decision-Support Framework", "Human + AI collaboration for better, faster decisions: 1 INFORM (Ingest & unify data from across the ecosystem) - 2 INSIGHT (Generate insights, explanations and what-if options) - 3 RECOMMEND (AI proposes actions with confidence) - 4 DECIDE (Humans review, refine and approve) - 5 ACT & LEARN (Execute, measure outcomes and continuously learn). Base: Governance, Security, Responsible AI."],
  ["7. Generative AI Chatbot Concept", "Your supply chain copilot - ask anything, act with confidence. Example as printed: Q: What is the forecast for Budweiser in Brazil next quarter? A: The forecast for Budweiser in Brazil for Q3 2023 is 2,450K hL, up 4.2% vs Q2... Q: What are the risks to our aluminum can supply? A: Risks include supplier capacity constraints in Asia and port congestion. Probability: High. Recommended action: secure alternate and increase safety stock. CAPABILITIES: Natural language Q&A - Insights & explanations - What-if analysis - Document summarization - Action recommendations - Seamless data access."],
  ["8. Scenario Analysis Example", "Plan for multiple futures. Choose the best path. BASE CASE (Status Quo): Demand Growth 4% - Service Level 94% - Total Cost Impact - - EBIT Impact - - Optimize working capital. HIGH DEMAND GROWTH: 10% - 93% - +2.8% - +1.2% - Increase capacity & inventory readiness. SUPPLY DISRUPTION (Aluminum): 4% - 90% - +4.6% - -1.8% - Dual-source cans, increase safety stock. FREIGHT COST SPIKE: 4% - 95% - +3.1% - -1.1% - Re-route & renegotiate long-term contracts. Generative AI accelerates scenario creation, insights and action planning."],
  ["9. Our Team", "Cross-functional team with deep domain and AI expertise (as printed): Maria Fernandez, VP Supply Chain - David Liu, Director, Data & AI - Claire Dubois, Director, Logistics - Carlos Lima, Director, Planning - Anita Patel, Head of Analytics - James Walker, Procurement Lead - Priya Nair, AI/ML Lead - Rafael Santos, Data Engineering Lead - Lucas Moreira, Solution Architect - Sophie Martin, Change & Comms Lead. (Headshots represented structurally.)"],
  ["10. Conclusion", "Generative AI is a force multiplier for our supply chain. Better decisions with real-time insights and AI copilots - Stronger resilience by anticipating risks and simulating scenarios - Higher efficiency through automation and smarter planning - Sustainable growth by unlocking capacity and improving service. OUR COMMITMENT: We will partner with our people, use AI responsibly and deliver measurable value - one use case at a time. Brewing a smarter supply chain. Cheers to the future."],
];
export function BrewOpsContactSheet() {
  const [s, setS] = useState(7);
  return <Bo n="11" title="BW-05 Original Deck Contact Sheet" sub="Generative AI Application of Logistics and Supply Chain in Beverage Industry - Historical artifact, 2023. Budweiser Business Challenge Deck - June 2023." dark={false} label="BrewOps original deck contact sheet - interactive rebuild of Budweiser_11">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
      {DECK11.map(([t, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#c8102e" : "#ddd6c9"}`, borderRadius: 8, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: "#102A43", color: "#fff", fontSize: 9.8, fontWeight: 700, padding: "5px 8px", lineHeight: 1.35 }}>{t}</span>
        <span style={{ display: "block", padding: "6px 8px", fontSize: 8.8, lineHeight: 1.5, color: "#4a5462" }}>{body.length > 210 ? `${body.slice(0, 210)}…` : body}</span>
        <span style={{ display: "block", borderTop: "2.5px solid #c8102e", margin: "0 8px 6px" }} />
      </button>)}
    </div>
    <div className="tks-detail" aria-live="polite" style={{ marginTop: 10 }}><b>{DECK11[s][0]}</b><p style={{ margin: "5px 0 0" }}>{DECK11[s][1]}</p></div>
    <p style={{ margin: "9px 0 0", fontSize: 11, color: "#5b6470" }}>CONFIDENTIAL &amp; PROPRIETARY — as printed on the original sheet's footer.</p>
  </Bo>;
}

/* ---------------- 12 - Object Model (bw-20) ---------------- */
const OBJECTS12: Array<[string, string, string[], string]> = [
  ["Alert", "Operational Signal", ["Alert ID", "Severity (Critical, High, Med, Low)", "Status (New, Acknowledged, Closed)", "Alert Type (Shortage, Delay, Risk, etc.)", "Detected At (timestamp)", "Affected Facility", "Affected SKU(s)", "Description", "Source System", "Confidence Score", "Tags"], "Triggers (1 - N)"],
  ["Scenario", "What Could Happen", ["Scenario ID", "Scenario Type (Risk, Disruption, etc.)", "Status (Active, Draft, Closed)", "Version", "Created At (timestamp)", "Affected Facility", "Affected SKU(s)", "Time Horizon", "Impact (Low, Med, High, Very High)", "Likelihood / Confidence", "Assumptions", "Tags"], "Generates (1 - N)"],
  ["Recommendation", "What We Suggest", ["Recommendation ID", "Type (Preventive, Corrective, etc.)", "Status (Proposed, Approved, Rejected, Implemented)", "Priority (P1, P2, P3)", "Version", "Created At (timestamp)", "Confidence Score", "Estimated Impact", "Rationale", "Tags"], "Supported By (N - N)"],
  ["Evidence Source", "Why We Believe It", ["Evidence ID", "Source Type (System, Model, Doc, User)", "Source Name", "Description / Summary", "Captured At (timestamp)", "Data Range", "Confidence Score", "Estimated Score (as printed)", "Link / Reference", "Tags"], "Made By (N - N)"],
  ["Decision", "What We Decide", ["Decision ID", "Decision (Approve, Reject, Modify, Defer)", "Status (Proposed, Approved, Rejected, Executed)", "Decision Date (timestamp)", "Rationale", "Expected Outcome", "Risk Accepted", "Version", "Audit Trail ID"], "Creates (1 - 1)"],
  ["Owner", "Who Decides", ["Owner ID", "Name", "Role (Planner, Manager, Ops, etc.)", "Team / Department", "Contact", "Authority Level", "Decision Scope", "Active (Y/N)"], "Creates (1 - 1)"],
  ["Action", "What We Do", ["Action ID", "Action Type (Order, Adjust, Notify, etc.)", "Status (Planned, In Progress, Completed, Cancelled)", "Created At (timestamp)", "Due Date", "Priority", "Assigned To (Team / Role)", "Related Recommendation ID", "Notes"], "Leads To (N - N)"],
  ["Outcome", "What Happens", ["Outcome ID", "Status (Success, Partial, Failed)", "Measured At (timestamp)", "Impact Achieved", "KPIs Affected", "Actual vs. Expected", "Learnings", "Tags"], "End of chain"],
];
export function BrewOpsObjectModel() {
  const [s, setS] = useState(0);
  const cols12 = ["#e0483e", "#e07b1f", "#f5a800", "#18a957", "#0e7c86", "#2563eb", "#7c4dff", "#a31621"];
  const icons12 = ["⚠", "🔮", "💡", "🗃", "⚖", "👤", "🛠", "🎯"];
  return <Bo n="12" title="BrewOps Intelligence Object Model" sub="Core entities and relationships that power intelligent decisions across the beverage supply chain. (bw-20-object-model)" label="BrewOps object model - interactive rebuild of Budweiser_12">
    <div style={{ border: "1px dashed #5b7a99", borderRadius: 10, padding: "7px 12px", fontSize: 11, marginBottom: 10 }}>
      <b>Relationship Key:</b> {"Triggers → · Generates → · Supported By ⤴ · Made By ⤴ · Creates → · Leads To → · References ⤴"} — six arrow styles as printed (solid = creates/triggers, dashed = generates, dotted = supported-by/made-by/references).
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 6, alignItems: "start" }}>
      {OBJECTS12.map(([t, sub2, attrs, rel], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0e1c2c", border: `1.5px solid ${i === s ? cols12[i] : "#22344d"}`, borderRadius: 10, padding: "7px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0", position: "relative" }}>
        {i < 7 ? <span aria-hidden="true" style={{ position: "absolute", right: -8, top: 16, color: "#8fa5bd", zIndex: 2, fontSize: 10 }}>→</span> : null}
        <span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: "50%", background: cols12[i], alignItems: "center", justifyContent: "center", fontSize: 12 }}>{icons12[i]}</span>
        <b style={{ display: "block", color: "#fff", fontSize: 11.5, margin: "3px 0 0", lineHeight: 1.3 }}>{t}</b>
        <span style={{ display: "block", fontSize: 9.3, color: "#8fa5bd", fontStyle: "italic" }}>{sub2}</span>
        <ul style={{ margin: "5px 0 0", paddingLeft: 11, fontSize: 8.9, lineHeight: 1.5, color: "#c6d2e0" }}>{attrs.map((f) => <li key={f}>{f}</li>)}</ul>
        <span style={{ display: "block", marginTop: 6, fontSize: 9, fontWeight: 800, color: cols12[i] }}>{rel}</span>
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: 9, marginTop: 10, fontSize: 10.8 }}>
      <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px" }}><b style={{ color: "#fff" }}>Cross-Cutting Attributes (All Core Objects)</b><p style={{ margin: "4px 0 0", color: "#a9bccd", lineHeight: 1.6 }}>Status · Created At · Updated At · Created By · Updated By · Affected Facility · Affected SKU(s) · Version · Confidence Score · Tags · Audit Trail ID</p></div>
      <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px" }}><b style={{ color: "#fff" }}>Audit Trail (All Changes &amp; Events)</b><p style={{ margin: "4px 0 0", color: "#a9bccd", lineHeight: 1.6 }}>Audit Trail ID · Entity Type · Entity ID · Event Type (Create, Update, Delete, etc.) · Changed By · Changed At · Change Summary · Old Value · New Value · Source System</p></div>
      <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px" }}><b style={{ color: "#fff" }}>Model Notes</b><p style={{ margin: "4px 0 0", color: "#a9bccd", lineHeight: 1.6 }}>Cardinality shown as 1 (one) or N (many) — Evidence can support multiple recommendations and may come from multiple systems — Decisions are made by an owner and are fully auditable — Every action leads to a measurable outcome that closes the loop and drives learning.</p></div>
    </div>
  </Bo>;
}

/* ---------------- 13 - AI-Enabled Decision Support Framework (2023) ---------------- */
const MODULES13: Array<[string, string]> = [
  ["Demand Planning", "Forecast demand by SKU, region & channel"],
  ["Inventory", "Optimize stocks & reduce working capital"],
  ["Logistics", "Optimize distribution, routes & service levels"],
  ["Predictive Maintenance", "Predict equipment issues & minimize downtime"],
  ["Quality Control", "Detect quality risks early & ensure consistency"],
  ["Pricing", "Optimize pricing & promotions by segment"],
  ["Customer Service", "Improve response, resolution & satisfaction"],
  ["R&D / Innovation", "Discover insights to drive new products & packaging"],
];
export function BrewOpsFramework2023() {
  const [m, setM] = useState(0);
  const HOW = ["Data flows from consumers and operations into the system", "AI analyzes patterns and predicts outcomes", "Insights drive decisions across functions", "Actions improve outcomes and create a learning loop"];
  const modBox = (i: number) => <button key={i} type="button" onClick={() => setM(i)} aria-pressed={i === m} style={{ background: "#7a1f1f", color: "#fff", border: `1.5px solid ${i === m ? "#102A43" : "#7a1f1f"}`, borderRadius: 8, padding: "7px 9px", cursor: "pointer", font: "inherit", textAlign: "left" }}><b style={{ fontSize: 11.5 }}>{MODULES13[i][0]}</b><br /><span style={{ fontSize: 9.8, opacity: 0.85, lineHeight: 1.4 }}>{MODULES13[i][1]}</span></button>;
  return <Bo n="13" title={<span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>AI-Enabled Decision Support Framework</span>} sub="Connecting Consumers, Operations & Intelligence - Historical artifact, 2023 (Busch Futures 2023 - AI for a Smarter Supply Chain, p.6)." dark={false} label="BrewOps decision support framework 2023 - interactive rebuild of Budweiser_13">
    <div style={{ background: "#f4ead8", border: "1px solid #d9c9a8", borderRadius: 10, padding: "8px 13px", fontSize: 11.5, marginBottom: 10 }}>
      <b>OUR VISION:</b> Leverage data and AI to create an interconnected system that enables smarter decisions across the value chain and delivers value to consumers, customers, and the business.
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr 150px", gap: 10, alignItems: "stretch" }}>
      <div style={{ background: "#2e7d32", color: "#fff", borderRadius: 10, padding: "10px 12px" }}>
        <b style={{ fontSize: 12.5 }}>Consumer Preferences</b>
        <ul style={{ margin: "6px 0 0", paddingLeft: 14, fontSize: 10.8, lineHeight: 1.6 }}><li>Taste &amp; flavor trends</li><li>Brand perception</li><li>Occasions &amp; moments</li><li>Price sensitivity</li><li>Channel preferences</li><li>Social &amp; digital signals</li></ul>
        <p style={{ fontSize: 10, opacity: 0.85, margin: "7px 0 0" }}>Signals flow in from the market →</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7 }}>
        {modBox(0)}{modBox(1)}{modBox(2)}
        {modBox(3)}
        <div style={{ background: "#102A43", color: "#fff", borderRadius: 9, padding: "9px 11px", textAlign: "center" }}>
          <b style={{ fontSize: 12.5 }}>AI Analysis &amp; Insights</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.3, opacity: 0.9 }}>Predictive · Prescriptive · Descriptive</p>
          <p aria-live="polite" style={{ margin: "4px 0 0", fontSize: 10.3, color: "#f5c86b" }}>{MODULES13[m][0]} — {MODULES13[m][1]}</p>
        </div>
        {modBox(4)}
        {modBox(5)}{modBox(6)}{modBox(7)}
      </div>
      <div style={{ background: "#c9a227", color: "#231d05", borderRadius: 10, padding: "10px 12px" }}>
        <b style={{ fontSize: 12.5 }}>Production Process</b>
        <ul style={{ margin: "6px 0 0", paddingLeft: 14, fontSize: 10.8, lineHeight: 1.6 }}><li>Brewing &amp; fermentation</li><li>Packaging</li><li>Line performance</li><li>Yield &amp; waste</li><li>Energy &amp; utilities</li><li>Supplier performance</li></ul>
        <p style={{ fontSize: 10, opacity: 0.85, margin: "7px 0 0" }}>← Operations data feeds the hub</p>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 10, marginTop: 10 }}>
      <div style={{ border: "1.5px dashed #7a1f1f", borderRadius: 10, padding: "8px 12px" }}>
        <b style={{ fontSize: 12 }}>Expected Outcomes</b>
        <p style={{ margin: "4px 0 0", fontSize: 11, lineHeight: 1.6 }}>Improve forecast accuracy · Reduce costs &amp; waste · Increase service levels · Improve asset uptime · Enhance quality · Drive growth &amp; profitability</p>
      </div>
      <div style={{ border: "1px solid #ddd6c9", borderRadius: 10, padding: "8px 12px" }}>
        <b style={{ fontSize: 12 }}>How It Works</b>
        <ol style={{ margin: "4px 0 0", paddingLeft: 17, fontSize: 11, lineHeight: 1.6 }}>{HOW.map((h) => <li key={h}>{h}</li>)}</ol>
      </div>
    </div>
    <div style={{ background: "#102A43", color: "#fff", borderRadius: 9, padding: "8px 13px", marginTop: 10, fontSize: 11.3 }}>
      <b>Operational Data Foundation:</b> ERP · MES · WMS · TMS · CRM · IoT Sensors · Quality Systems · External Data
    </div>
    <p style={{ margin: "9px 0 0", background: "#a31621", color: "#fff", borderRadius: 8, padding: "7px 13px", fontSize: 11.3 }}>Busch Futures 2023 — AI for a Smarter Supply Chain · p.6 (footer band as printed).</p>
  </Bo>;
}

/* ---------------- 14 - Supply Chain Insights Chatbot, early concept (2023) ---------------- */
const CHAT14: Array<[string, string | null, string]> = [
  ["What are the current beer demand trends?", "Overall beer demand is up 4.7% year-over-year. Strong growth in premium & super-premium segments (+8.2%). Seasonal uplift expected in late spring and summer.", "10:15 AM"],
  ["How did sales trend by region last quarter?", "Q1 regional sales (YoY): Midwest: +6.1% - South: +5.3% - West: +3.2% - Northeast: +2.8%. Midwest and South led growth due to distribution expansion and events.", "10:16 AM"],
  ["What's the consumer sentiment around Budweiser right now?", "Sentiment is overall positive (78% positive vs. 22% neutral/negative). Customers appreciate our quality and heritage. Top themes: Taste, Price Value, Sports Partnerships.", "10:17 AM"],
  ["What is our current inventory status for Budweiser Lager?", "Current inventory is 18 days of supply. Supply is healthy across all major regions. Replenishment on track for upcoming demand increase.", "10:18 AM"],
  ["Are there any upcoming supply chain risks we should know about?", null, ""],
  ["Which SKUs are overstocked or understocked?", null, ""],
  ["What are the logistics costs by region?", null, ""],
  ["How is on-time delivery performing?", null, ""],
];
export function BrewOpsChatbot2023() {
  const [q, setQ] = useState(0);
  const answered = CHAT14.filter(([, a]) => a !== null);
  return <Bo n="14" title="Supply Chain Insights Chatbot - Early Concept" sub="Conversational interface as the primary way users explore data and get answers. Historical artifact, 2023 (p.07)." dark={false} label="BrewOps insights chatbot early concept - interactive rebuild of Budweiser_14">
    <div style={{ display: "grid", gridTemplateColumns: "262px 1fr", gap: 12, alignItems: "start" }}>
      <div>
        <p style={{ margin: 0, color: "#c8102e", fontStyle: "italic", fontWeight: 800, fontSize: 15 }}>Budweiser</p>
        <p style={{ margin: "2px 0 0", fontSize: 10, letterSpacing: "0.14em", color: "#b97a0c", fontWeight: 700 }}>SUPPLY CHAIN CHALLENGE</p>
        <div style={{ background: "#fdf3e0", border: "1px solid #e8d9ae", borderRadius: 9, padding: "8px 11px", marginTop: 9 }}>
          <b style={{ fontSize: 11.5 }}>INITIAL IDEA: CHAT AS THE PRODUCT ENTRY POINT</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.8, lineHeight: 1.55 }}>Internal teams ask questions about our supply chain and get instant, actionable insights.</p>
        </div>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Example prompts we imagined</p>
        <div style={{ display: "grid", gap: 4 }}>
          {CHAT14.map(([t], i) => <button key={t} type="button" onClick={() => setQ(i)} aria-pressed={i === q} style={{ textAlign: "left", background: i === q ? "#102A43" : "#fff", color: i === q ? "#fff" : "#141a21", border: `1px solid ${i === q ? "#102A43" : "#ddd6c9"}`, borderRadius: 8, padding: "5px 9px", cursor: "pointer", font: "inherit", fontSize: 10.8, lineHeight: 1.45 }}><b style={{ color: "#c8102e" }}>{i + 1}.</b> {t}</button>)}
        </div>
        <div style={{ border: "1px solid #ddd6c9", borderRadius: 9, padding: "8px 11px", marginTop: 9 }}>
          <b style={{ fontSize: 11.5 }}>Early Concept Note</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.8, lineHeight: 1.55 }}>We proposed treating chat as the primary entry point — making it easy for users to ask natural questions and get data-driven answers in real time.</p>
        </div>
      </div>
      <div style={{ border: "1px solid #d8d2c4", borderRadius: 12, overflow: "hidden", background: "#f7f4ec" }}>
        <div style={{ display: "flex", gap: 5, alignItems: "center", background: "#ece7da", padding: "6px 10px", fontSize: 10.5, color: "#5b6470" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e0483e" }} /><span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5a800" }} /><span style={{ width: 8, height: 8, borderRadius: "50%", background: "#18a957" }} />
          <span style={{ marginLeft: 6 }}>budweiser.supplychain.assistant — mock</span>
        </div>
        <div style={{ padding: "10px 12px" }}>
          <p style={{ margin: "0 0 8px", fontWeight: 800, fontSize: 12.5 }}>🤖 Budweiser Supply Chain Assistant <span style={{ fontWeight: 500, color: "#5b6470", fontSize: 10.5 }}>(Early Concept)</span></p>
          {answered.map(([question, answer, time], i) => <div key={question} style={{ marginBottom: 9, opacity: q < 4 && CHAT14[q][0] !== question ? 0.55 : 1 }}>
            <p style={{ margin: 0, textAlign: "right" }}><span style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: "12px 12px 3px 12px", padding: "6px 11px", fontSize: 11, maxWidth: "78%", textAlign: "left" }}>{question} <span style={{ opacity: 0.75, fontSize: 9.5 }}>· {time}</span></span></p>
            <p style={{ margin: "5px 0 0" }}><span style={{ display: "inline-block", background: "#fff", border: "1px solid #e2ddd0", borderRadius: "12px 12px 12px 3px", padding: "6px 11px", fontSize: 11, lineHeight: 1.55, maxWidth: "86%" }}>{answer}</span></p>
            <span style={{ display: "none" }}>{i}</span>
          </div>)}
          <div style={{ display: "flex", gap: 7, alignItems: "center", background: "#fff", border: "1px solid #ddd6c9", borderRadius: 999, padding: "6px 12px", fontSize: 11, color: "#8a93a0" }}>
            <span style={{ flex: 1 }}>Ask a question about your supply chain…</span><span aria-hidden="true">➤</span>
          </div>
          <p style={{ margin: "7px 0 0", fontSize: 10, color: "#8a93a0" }}>Mock interface for concept exploration only. Not a final product design.</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.3 }}>Budweiser Supply Chain Challenge — Student Team Submission (as printed). Prompts 5–8 appear in the {"slide's"} example list only; no answers are shown for them in the mock conversation.</p>
  </Bo>;
}

/* ---------------- 15 - Research Synthesis ---------------- */
const SOURCES15: Array<[string, string, string]> = [
  ["ChatGPT in Supply Chains: Applications, Challenges, and Future Research Directions", "2023", "ChatGPT can enhance decision support, knowledge retrieval, and cross-functional communication in supply chains."],
  ["AI Applications in Logistics and Supply Chain Management: A Systematic Literature Review", "2022", "AI improves forecasting, optimization, and visibility across logistics and supply chain operations."],
  ["Beverage Supply Chain Operations: Trends, Challenges, and Best Practices", "2021", "Volatility in demand and complex distribution networks require agility, collaboration, and real-time visibility."],
  ["Robotic Process Automation in Supply Chains: A Review and Research Agenda", "2020", "RPA streamlines repetitive processes, reduces errors, and frees teams to focus on higher-value activities."],
  ["Predictive Analytics in Supply Chain Management: Current State and Future Direction", "2021", "Predictive analytics enables better demand forecasting, risk mitigation, and inventory optimization."],
  ["Consumer Insights and Demand Planning in the Beverage Industry: A Data-Driven Approach", "2022", "Deep consumer understanding and demand sensing improve service levels and portfolio performance."],
  ["Explainable AI in Supply Chain Decision-Making: A Systematic Review", "2021", "Explainable AI builds trust, supports adoption, and ensures transparency in critical decisions."],
];
export function BrewOpsResearch() {
  const [s, setS] = useState(0);
  const coverCols = ["#102A43", "#7a1f1f", "#0e4d4a", "#3d2b63", "#14532d", "#8a5a00", "#263238"];
  return <Bo n="15" title={<span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Research Synthesis</span>} sub="Seven Supporting Sources — a curated set of academic and industry sources that inform our understanding of AI and automation opportunities across beverage supply chains." dark={false} label="BrewOps research synthesis - interactive rebuild of Budweiser_15">
    <p style={{ margin: "0 0 9px", fontSize: 10.5, letterSpacing: "0.16em", color: "#b97a0c", fontWeight: 700 }}>RESEARCH SYNTHESIS · EVIDENCE. INSIGHT. IMPACT.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9 }}>
      {SOURCES15.map(([t, y, insight], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#c8102e" : "#ddd6c9"}`, borderRadius: 10, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: `linear-gradient(135deg, ${coverCols[i]}, #141a21)`, borderTop: "4px solid #c8102e", color: "#fff", padding: "10px 11px", minHeight: 58 }}>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 21, opacity: 0.9 }}>{t.charAt(0)}</span>
          <span style={{ display: "block", fontSize: 8.8, letterSpacing: "0.12em", opacity: 0.8, marginTop: 2 }}>SOURCE {String(i + 1).padStart(2, "0")} · {y}</span>
        </span>
        <span style={{ display: "block", padding: "8px 11px" }}>
          <b style={{ display: "block", fontSize: 11.3, lineHeight: 1.4 }}>{t}</b>
          <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.55, color: "#4a5462", marginTop: 5 }}><b style={{ color: "#b97a0c", fontSize: 9, letterSpacing: "0.1em" }}>INSIGHT</b><br />{insight}</span>
        </span>
      </button>)}
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.3, display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}><span><b>EVIDENCE. INSIGHT. IMPACT.</b> — the synthesis line as printed.</span><span style={{ color: "#5b6470" }}>Sources: academic &amp; industry literature, 2020–2023, as cited on the slide.</span></p>
  </Bo>;
}

/* ---------------- 17 - Hypothesis-Based Operational Handoff (bw-15) ---------------- */
const STAGES17 = ["1. Alert - Operational issue detected", "2. Assessment - Cross-functional triage and hypothesis framing", "3. Scenario Planning - Evaluate options and project outcomes", "4. Decision Review - Executive review and decision approval", "5. Execution Handoff - Approved plan handed off for execution"];
const LANES17: Array<[string, string, string[]]> = [
  ["Supply Planner", "Demand & Supply Intelligence", ["Demand Anomaly Detected - Forecast deviation identified for Fairfield Brewery. Potential risk to service levels.", "Hypothesis Framed - Supply shortfall likely due to upcoming demand spike and inventory constraints. Confidence: Medium. HANDOFF", "Scenario Inputs Provided - Demand forecast, inventory position, and supply options modeled. 3 scenarios developed.", "Recommendation Prepared - Recommend Scenario B: Expedite inbound + reallocate inventory. Expected impact: +8.2K HL", "Execution Package - Final plan, assumptions, and expected outcomes documented for handoff. Task Complete"]],
  ["Logistics Manager", "Distribution & Transportation", ["Capacity Risk Flagged - Carrier capacity tight on key lanes next 5 days. Risk to inbound schedule.", "Logistics Impact Assessed - Inbound delay risk high. Expedited carrier capacity available at premium. Confidence: High. HANDOFF", "Logistics Scenarios Modeled - Evaluated transit times, carrier options, and costs across 3 scenarios.", "Logistics Recommendation - Support Scenario B. Expedite via dedicated carrier to mitigate delay.", "Logistics Handoff - Carrier booked. Updated ETA shared. Shipment tracking initiated. Task Complete"]],
  ["Maintenance Engineer", "Asset Reliability & Operational Health", ["Equipment Degradation Alert - Filler line #2 showing elevated vibration. Risk of unplanned downtime.", "Maintenance Impact Assessed - Probability of failure: Medium - Impact if failed: High - Recommend proactive intervention. Confidence: Medium. HANDOFF", "Maintenance Scenarios - Compare run-to-failure vs. proactive maintenance windows. Downtime vs. output impact modeled.", "Maintenance Recommendation - Support proactive maintenance during next available window (Jun 3 - Jun 4). Aligns with Scenario B.", "Maintenance Handoff - Work order created. Parts confirmed. Maintenance window scheduled. Task Complete"]],
  ["Executive Review", "Governance & Decision Authority", ["Executive Notified - Critical operational issue escalated for awareness.", "Cross-Functional Summary - Hypothesis and initial impacts presented across Supply, Logistics, and Maintenance.", "Scenario Comparison - Scenario B maximizes service level while managing cost and operational risk. Preferred scenario identified.", "Decision Approved - Scenario B approved. Authorizing execution and resource allocation. Approval by: Executive Team. APPROVED", "Executive Handoff - Approved plan handed off to operations for execution and monitoring. APPROVAL"]],
];
export function BrewOpsHandoff() {
  const [sel, setSel] = useState<[number, number]>([0, 1]);
  const laneCols = ["#2563eb", "#e07b1f", "#7c4dff", "#a31621"];
  const flag = (txt: string) => txt.includes("HANDOFF") ? "HANDOFF" : txt.includes("APPROVED") ? "APPROVED" : txt.includes("Task Complete") ? "✓ COMPLETE" : txt.includes("APPROVAL") ? "APPROVAL" : null;
  return <Bo n="17" title="Hypothesis-Based Operational Handoff" sub="bw-15 - CROSS-FUNCTIONAL HANDOFF. From alert to execution - aligned, evaluated, and ready for impact. Hypothesis-Driven Approach: We operate on informed hypotheses, continuously validated with data and outcomes." label="BrewOps operational handoff - interactive rebuild of Budweiser_17">
    <div style={{ display: "grid", gridTemplateColumns: "118px repeat(5,1fr)", gap: 5 }}>
      <span />
      {STAGES17.map((st, si) => <span key={st} style={{ background: "#102A43", color: "#fff", borderRadius: 8, padding: "6px 8px", fontSize: 10, lineHeight: 1.4 }}><b>{st.split(" - ")[0]}</b><br /><span style={{ opacity: 0.8 }}>{st.split(" - ")[1]}</span>{si < 4 ? <span aria-hidden="true" style={{ float: "right" }}>→</span> : null}</span>)}
      {LANES17.map(([role, focus, cells], li) => [
        <span key={`${role}-h`} style={{ background: laneCols[li], color: "#fff", borderRadius: 8, padding: "7px 8px", fontSize: 10.3, lineHeight: 1.4 }}><b>{role}</b><br /><span style={{ opacity: 0.85, fontSize: 9.3 }}>{focus}</span></span>,
        ...cells.map((txt, si) => { const f = flag(txt); return <button key={`${role}-${si}`} type="button" onClick={() => setSel([li, si])} aria-pressed={sel[0] === li && sel[1] === si} style={{ textAlign: "left", background: sel[0] === li && sel[1] === si ? "#fdf3e0" : "#fff", border: `1.5px solid ${sel[0] === li && sel[1] === si ? laneCols[li] : "#e3ddcf"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#141a21", fontSize: 9.6, lineHeight: 1.5 }}>{txt.replace(/ (HANDOFF|APPROVED|APPROVAL)$/, "")}{f ? <span style={{ display: "inline-block", marginLeft: 4, background: f === "✓ COMPLETE" ? "#18a957" : "#d4af37", color: "#fff", borderRadius: 4, padding: "0 5px", fontSize: 8.3, fontWeight: 800 }}>{f}</span> : null}</button>; }),
      ])}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 10, fontSize: 10.8 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Supporting Notes</p><p style={{ margin: 0 }}>All recommendations are hypothesis-based and validated with data and cross-functional input — Confidence levels reflect current data quality and certainty.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Outcome</p><p style={{ margin: 0 }}>Aligned decision. Clear handoffs. Confident execution. Measurable impact.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>KPIs Impacted</p><p style={{ margin: 0 }}>Service Level · On-Time In-Full (OTIF) · Inventory Turns · Cost to Serve · Equipment Reliability</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Legend</p><p style={{ margin: 0 }}>→ Process Flow · ◆ Handoff Point · ● Approval Point · ✓ Task Complete · ▲ Critical Issue</p></div>
    </div>
  </Bo>;
}

/* ---------------- 18 - Product Principles ---------------- */
const PRINCIPLES18: Array<[string, string]> = [
  ["Evidence before confidence.", "Decisions are grounded in real data, context, and measurable impact."],
  ["Structured workflows before open chat.", "Guided processes, data, and automation first. Conversational support where it adds value."],
  ["Human approval before action.", "Critical decisions stay in human hands, with transparency and accountability."],
  ["Role relevance before feature breadth.", "Relevant tools, insights, and actions - tailored to the job that gets it done."],
];
export function BrewOpsPrinciples() {
  const [p, setP] = useState(0);
  const icons18 = ["🎯", "🧭", "✋", "👤"];
  return <Bo n="18" title="Our principles guide every experience we design." sub="Product Principles - Built for trust. Designed for impact. Proven in operations." label="BrewOps product principles - interactive rebuild of Budweiser_18">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
      {PRINCIPLES18.map(([t, d], i) => <button key={t} type="button" onClick={() => setP(i)} aria-pressed={i === p} style={{ textAlign: "center", background: "#0e1c2c", border: `1.5px solid ${i === p ? AMBER : "#22344d"}`, borderRadius: 13, padding: "20px 14px 16px", cursor: "pointer", font: "inherit", color: "#dbe5f0", minHeight: 190 }}>
        <span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: "50%", border: `1.5px solid ${AMBER}`, alignItems: "center", justifyContent: "center", fontSize: 20 }}>{icons18[i]}</span>
        <span style={{ display: "block", color: AMBER, fontWeight: 800, fontSize: 15, marginTop: 10 }}>{String(i + 1).padStart(2, "0")}</span>
        <span style={{ display: "block", width: 34, height: 2, background: AMBER, margin: "6px auto" }} />
        <b style={{ display: "block", color: "#fff", fontSize: 13.5, lineHeight: 1.4 }}>{t}</b>
        <span style={{ display: "block", fontSize: 11, lineHeight: 1.55, color: "#a9bccd", marginTop: 5 }}>{d}</span>
      </button>)}
    </div>
    <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 12 }}>Principles that power smarter decisions — and better outcomes.</p>
  </Bo>;
}

/* ---------------- 19 - Feature Scope Map ---------------- */
const SCOPE19: Array<[string, string, Array<[string, string]>]> = [
  ["Core Modules", "Mission-critical capabilities delivered today", [["Operations Control Tower", "Real-time visibility across demand, supply, inventory, risk, and performance in one integrated view."], ["Logistics Scenario Studio", "Compare scenarios, evaluate trade-offs, and recommend the best path forward."], ["Predictive Maintenance", "AI-powered detection of equipment risk and recommended maintenance actions."], ["Demand & Inventory Planning", "AI-driven demand forecasts and inventory optimizer to balance service and cost."]]],
  ["Supporting Modules", "Extend intelligence and trust across the value chain", [["Quality & Traceability", "End-to-end quality visibility and traceability from source to shelf."], ["Consumer & R&D Insights", "Unify market, consumer, and innovation data to drive growth."], ["Source-Backed AI Copilot", "Contextual AI assistant grounded in trusted data and enterprise knowledge."], ["Data Sources / Administration", "Secure data connectivity, governance, user management, and system configuration."]]],
  ["Future Modules", "Planned innovations to accelerate outcomes", [["Collaboration & Workflow", "Cross-functional collaboration, tasks, and decision workflows."], ["Mobile Approvals", "Approve, review, and act on insights from anywhere."], ["Deeper Optimization", "Advanced optimization across multi-echelon network, capacity, and sustainability."]]],
  ["Out-of-Scope", "Not included in BrewOps Intelligence to maintain focus and deliver impact.", [["ERP Replacement", "We do not replace ERP systems. BrewOps Intelligence integrates with your existing systems."], ["Fully Autonomous Decision Execution", "Human-in-the-loop decisions are always required."], ["Generic, Open-Ended Chatbot", "Our copilot is source-backed, domain-specific, and built for beverage supply chains."], ["Real-Time Plant Automation", "We do not control or automate plant equipment or PLCs."]]],
];
export function BrewOpsScopeMap() {
  const [sel, setSel] = useState<[number, number]>([0, 0]);
  const tierCols = ["#18a957", "#2563eb", "#f5a800", "#8a93a0"];
  const tierIcons = ["●", "◐", "○", "⊘"];
  return <Bo n="19" title="Feature Scope Map" sub="Delivering focused intelligence where it matters today - and expanding tomorrow. Focused. Integrated. Actionable." label="BrewOps feature scope map - interactive rebuild of Budweiser_19">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, alignItems: "start" }}>
      {SCOPE19.map(([tier, tag, mods], ti) => <div key={tier} style={{ background: "#0e1c2c", border: "1px solid #22344d", borderTop: `5px solid ${tierCols[ti]}`, borderRadius: 11, padding: "9px 10px" }}>
        <b style={{ color: "#fff", fontSize: 12.8 }}>{tierIcons[ti]} {tier}</b>
        <p style={{ margin: "3px 0 8px", fontSize: 10.3, lineHeight: 1.5, color: "#a9bccd" }}>{tag}</p>
        <div style={{ display: "grid", gap: 6 }}>
          {mods.map(([name, desc], mi) => <button key={name} type="button" onClick={() => setSel([ti, mi])} aria-pressed={sel[0] === ti && sel[1] === mi} style={{ textAlign: "left", background: sel[0] === ti && sel[1] === mi ? "rgba(255,255,255,0.08)" : "transparent", border: `1px solid ${sel[0] === ti && sel[1] === mi ? tierCols[ti] : "#2c4258"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
            <b style={{ display: "block", fontSize: 11.3, lineHeight: 1.35, color: "#fff" }}>{name}</b>
            <span style={{ display: "block", fontSize: 9.9, lineHeight: 1.5, color: "#a9bccd", marginTop: 2 }}>{desc}</span>
          </button>)}
        </div>
      </div>)}
    </div>
    <p style={{ margin: "10px 0 0" }}>BrewOps Intelligence delivers the right capabilities today — with a clear path to tomorrow.</p>
  </Bo>;
}

/* ---------------- 20 - Information Architecture (bw-19) ---------------- */
const IA20: Array<[string, string, Array<[string, string]>]> = [
  ["Overview", "Real-time snapshot of supply chain health and performance.", [["Control Tower", "Holistic view of risks, alerts, and KPIs"], ["Risk Heatmap", "Visualize risk across dimensions"], ["KPI Dashboard", "Track key performance indicators"], ["Recent Activity", "Latest alerts, decisions, and updates"]]],
  ["Decisions", "Manage alerts, evaluate scenarios, and drive actionable outcomes.", [["Alert Queue", "Triage and prioritize incoming alerts"], ["Scenario Compare", "Compare scenarios and outcomes"], ["Recommended Actions", "AI-suggested actions and rationale"], ["Decision History", "Track past decisions and results"]]],
  ["Demand", "Forecast demand and analyze drivers and uncertainty.", [["Demand Forecast", "Forecast by horizon, SKU, and location"], ["Demand Risk Detail", "Deep dive into demand risk drivers"], ["Sensitivity Analysis", "Analyze what-if scenarios"], ["Forecast Accuracy", "Track accuracy and forecast performance"]]],
  ["Logistics", "Optimize distribution, inventory, and carrier performance.", [["Fleet View", "Track fleet status, routes, and capacity"], ["Inventory View", "Real-time inventory by location"], ["Carrier Performance", "On-time, fill rate, and service levels"], ["Network Map", "Lane coverage and congestion insights"]]],
  ["Maintenance", "Maximize asset reliability and minimize unplanned downtime.", [["Asset Overview", "Health and utilization summary"], ["Asset Detail", "Detailed asset health, history, and performance"], ["Work Orders", "Plan, prioritize, and track work"], ["Predictive Insights", "Failure risk and maintenance needs"]]],
  ["Quality", "Ensure quality, compliance, and continuous improvement.", [["Quality Overview", "Quality KPIs and trend analysis"], ["Quality Traceability", "Trace products and events end-to-end"], ["Deviations & CAPA", "Manage deviations and corrective actions"], ["Lab & Test Results", "Results, trends, and spec compliance"]]],
  ["Insights", "Explore insights, trends, and AI-driven recommendations.", [["Copilot", "AI assistant for Q&A, insights, and guidance"], ["Insight Explorer", "Discover trends and key drivers"], ["Benchmarking", "Compare against peers and history"], ["Reports", "Pre-built and custom reports"]]],
  ["Data Sources", "Understand data lineage, quality, and integration status.", [["Evidence Sources", "View source data and supporting evidence"], ["Data Lineage", "Trace data from source to insight"], ["Data Quality", "Completeness, freshness, and issues"], ["Integrations", "Connected systems and sync status"]]],
  ["Administration", "Configure platform, manage users, and govern access.", [["Access & Roles", "Manage users, roles, and permissions"], ["Settings", "Platform and user preferences"], ["Audit Logs", "Track access and system activity"], ["Notifications", "Manage alerts and delivery preferences"]]],
];
export function BrewOpsIA() {
  const [sel, setSel] = useState<[number, number]>([0, 0]);
  const secCols = ["#2563eb", "#e07b1f", "#18a957", "#0e7c86", "#7c4dff", "#c2185b", "#5b7a1e", "#8a5a00", "#455a64"];
  const secIcons = ["🏠", "⚖", "📈", "🚚", "🔧", "🛡", "💡", "🗃", "⚙"];
  return <Bo n="20" title="BrewOps Intelligence - Information Architecture" sub="A role-based intelligence platform that connects data, decisions, and actions across the beverage supply chain. Intelligence. Outcomes. Impact. (bw-19-information-architecture)" label="BrewOps information architecture - interactive rebuild of Budweiser_20">
    <div style={{ background: "#102A43", color: "#fff", borderRadius: 10, padding: "8px 13px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <b style={{ fontSize: 13 }}>🌾 BrewOps Intelligence</b><span style={{ fontSize: 10.8, opacity: 0.85 }}>Root — 9 sections · 36 child pages, as printed</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 6, marginTop: 8, alignItems: "start" }}>
      {IA20.map(([name, desc, kids], si) => <div key={name} style={{ background: "#0e1c2c", border: "1px solid #22344d", borderTop: `4px solid ${secCols[si]}`, borderRadius: 9, padding: "7px 7px" }}>
        <span style={{ fontSize: 14 }}>{secIcons[si]}</span>
        <b style={{ display: "block", color: "#fff", fontSize: 10.8, lineHeight: 1.3, margin: "2px 0" }}>{name}</b>
        <span style={{ display: "block", fontSize: 8.9, lineHeight: 1.45, color: "#8fa5bd" }}>{desc}</span>
        <div style={{ display: "grid", gap: 4, marginTop: 6 }}>
          {kids.map(([kn, kd], ki) => <button key={kn} type="button" onClick={() => setSel([si, ki])} aria-pressed={sel[0] === si && sel[1] === ki} style={{ textAlign: "left", background: sel[0] === si && sel[1] === ki ? "rgba(255,255,255,0.09)" : "transparent", border: `1px solid ${sel[0] === si && sel[1] === ki ? secCols[si] : "#2c4258"}`, borderRadius: 6, padding: "4px 6px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
            <b style={{ display: "block", fontSize: 9.6, lineHeight: 1.3 }}>{kn}</b>
            <span style={{ display: "block", fontSize: 8.6, lineHeight: 1.4, color: "#8fa5bd", marginTop: 1 }}>{kd}</span>
          </button>)}
        </div>
      </div>)}
    </div>
    <p style={{ margin: "10px 0 0" }}><b>Role-Based Experience</b> — Tailored views and actions for every role across the organization.</p>
  </Bo>;
}

/* ---------------- 21 - Accountable decision flow (case study) ---------------- */
const FLOW21: Array<[string, string, string, string]> = [
  ["1. ALERT", "Anomaly or opportunity detected.", "What changed - Where - Magnitude - Impact", "System"],
  ["2. EVIDENCE", "Curated facts with context.", "Trends - Drivers - Segments - External signals", "Analyst"],
  ["3. SCENARIO COMPARE", "Options modeled side-by-side.", "Scenario A - Scenario B - Scenario C - Impact ranges", "Analyst"],
  ["4. RECOMMENDATION", "Best option with rationale and trade-offs.", "Why this option - Expected impact - Confidence - Risks", "Analyst"],
  ["5. APPROVAL", "Decision reviewed and approved.", "Approver - Comments - Decision time", "Leader"],
  ["6. ACTION LOG", "Actions tracked to completion.", "What - Who - When - Status", "Ops / Owner"],
  ["7. OUTCOME", "Measure results. Close the loop.", "Impact vs. plan - Learnings - Next steps", "System"],
];
export function BrewOpsDecisionFlow() {
  const [s, setS] = useState(0);
  const sources21: Array<[string, string]> = [["Dashboards", "Multiple views, different metrics"], ["Spreadsheets", "Ad hoc exports, manual updates"], ["Chat Messages", "Decisions in threads, hard to track"], ["Email", "Information buried, no single source"], ["Manual Notes", "Scratchpads, personal notes"]];
  const stickies21 = ["Promo spike in Texas? Not sure why.", "Saw a dip in conversion yesterday.", "Need latest competitor pricing.", "Can't get later read. Need more time.."];
  return <Bo n="21" title={<span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>From fragmented reaction to accountable decision flow</span>} sub="Budweiser Case Study — BETTER INSIGHT. BETTER DECISIONS. BETTER RESULTS." dark={false} label="BrewOps accountable decision flow - interactive rebuild of Budweiser_21">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#f4f1ea", border: "1px solid #ddd6c9", borderRadius: 12, padding: "11px 13px" }}>
        <b style={{ fontSize: 13, color: "#a31621" }}>BEFORE — Fragmented &amp; Reactive</b>
        <p style={{ margin: "3px 0 8px", fontSize: 11, color: "#5b6470" }}>Disconnected sources. Manual synthesis. Unclear ownership. Slower decisions.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
          {sources21.map(([t, d]) => <span key={t} style={{ background: "#fff", border: "1px solid #e2ddd0", borderRadius: 8, padding: "6px 8px" }}><b style={{ display: "block", fontSize: 10.8 }}>{t}</b><span style={{ fontSize: 9.6, color: "#5b6470", lineHeight: 1.45 }}>{d}</span></span>)}
          <span style={{ background: "#fff8c9", border: "1px solid #e8d98a", borderRadius: 2, padding: "6px 8px", transform: "rotate(-1.2deg)", fontSize: 9.6, lineHeight: 1.5 }}>📌 {stickies21.join(" · ")}</span>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e2ddd0", borderRadius: 8, padding: "7px 10px", marginTop: 8, fontSize: 10.5 }}>
          <b>✉ From: Regional Director — Re: Promo Update</b><p style={{ margin: "2px 0 0", color: "#5b6470" }}>{"\"Do we pull back spend or shift to digital?\""}</p>
        </div>
        <table className="tks-table tks-table--micro" style={{ marginTop: 8 }}><thead><tr><th>Q2 Performance (Var.)</th><th>Sales</th><th>Volume</th><th>Revenue</th></tr></thead><tbody>
          <tr><td>Total</td><td>-2%</td><td>-3%</td><td>-1%</td></tr><tr><td>South</td><td>-5%</td><td>-6%</td><td>-4%</td></tr><tr><td>West</td><td>+1%</td><td>+0%</td><td>+2%</td></tr><tr><td>Midwest</td><td>-3%</td><td>-2%</td><td>-1%</td></tr></tbody></table>
        <p style={{ margin: "8px 0 0", fontSize: 10.8 }}><b>Manual Synthesis:</b> Gather → Reconcile → Interpret → Summarize → Decide</p>
        <p style={{ margin: "7px 0 0", background: "#a31621", color: "#fff", borderRadius: 7, padding: "6px 10px", fontSize: 10.8 }}><b>OUTCOME: SLOWER DECISIONS, HIGHER RISK, MISSED OPPORTUNITIES</b> — Delayed insights · Version confusion · Unclear ownership · Inconsistent follow-through</p>
      </div>
      <div style={{ background: "#fff", border: "1.5px solid #102A43", borderRadius: 12, padding: "11px 13px" }}>
        <b style={{ fontSize: 13, color: "#102A43" }}>AFTER — Accountable Decision Flow</b>
        <p style={{ margin: "3px 0 8px", fontSize: 11, color: "#5b6470" }}>Structured workflow. Clear ownership. Faster, higher-confidence decisions.</p>
        <div style={{ display: "grid", gap: 5 }}>
          {FLOW21.map(([t, d, cap, owner], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: i === s ? "#eef4fb" : "#faf8f5", border: `1.5px solid ${i === s ? "#2563eb" : "#e2ddd0"}`, borderRadius: 8, padding: "6px 10px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
            <b style={{ fontSize: 11.5 }}>{t}</b> <span style={{ fontSize: 10.3, color: "#5b6470" }}>{d}</span>
            <span style={{ display: "block", fontSize: 9.8, color: "#5b6470", marginTop: 2 }}>Captured: {cap} · <b>Owner: {owner}</b></span>
          </button>)}
        </div>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Measurable Outcomes (as printed)</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 6 }}>
          {[["Faster decision cycle time", "30–50%"], ["Higher forecast accuracy", "+15%"], ["Reduction in decision risk", "−20%"], ["Annualized impact (example)", "+$5–10M"]].map(([l, v]) => <span key={l} style={{ background: "#102A43", color: "#fff", borderRadius: 8, padding: "6px 10px" }}><b style={{ fontSize: 15 }}>{v}</b><br /><span style={{ fontSize: 9.8, opacity: 0.85 }}>{l}</span></span>)}
        </div>
      </div>
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.3 }}><b>Workflow legend:</b> Observation (facts, events, detected changes) · Inference (analysis and insight derived from evidence) · Recommendation (proposed actions with rationale and impact) · Approval (human validation and decision) · Action (execution and tracking to drive outcomes).</p>
  </Bo>;
}

/* ---------------- 22 - Design tokens ---------------- */
const TOKENS22: Array<[string, Array<[string, string]>]> = [
  ["Color", [["color.brand.500", "#C8102E"], ["color.brand.amber.500", "#D4AF37"], ["color.neutral.0", "#FFFFFF"], ["color.neutral.100", "#F5F5F5"], ["color.neutral.900", "#111111"]]],
  ["Spacing", [["space.0", "0px"], ["space.1", "4px"], ["space.2", "8px"], ["space.3", "12px"], ["space.4", "16px"], ["space.5", "24px"], ["space.6", "32px"], ["space.8", "48px"]]],
  ["Typography", [["type.heading.xl", "29px / 36px - 700 / -0.5px"], ["type.heading.lg", "23px / 32px - 700 / -0.3px"], ["type.body.md", "16px / 24px - 400 / 0px"], ["type.body.sm", "14px / 20px - 400 / 0px"], ["type.caption", "12px / 16px - 400 / 0.2px"]]],
  ["Radius", [["radius.xs", "2px"], ["radius.sm", "4px"], ["radius.md", "8px"], ["radius.lg", "12px"], ["radius.full", "9999px"]]],
  ["Shadow", [["shadow.sm", "0px 1px 2px rgba(17,17,17,0.08)"], ["shadow.md", "0px 4px 12px rgba(17,17,17,0.12)"], ["shadow.lg", "0px 12px 24px rgba(17,17,17,0.16)"]]],
  ["Status", [["status.success", "#1E8E3E"], ["status.warning", "#D4AF37"], ["status.error", "#C8102E"], ["status.info", "#0F62FE"]]],
];
export function BrewOpsTokens() {
  const [g, setG] = useState(0);
  const cell: React.CSSProperties = { background: "#fff", border: "1px solid #e2ddd0", borderRadius: 10, padding: "8px 11px" };
  const tbl: React.CSSProperties = { width: "100%", borderCollapse: "collapse", fontSize: 10.3 };
  const groupTable = (gi: number) => <div key={TOKENS22[gi][0]} style={cell}>
    <p className="tks-kicker" style={{ marginTop: 0 }}>{TOKENS22[gi][0]}</p>
    <table style={tbl}><tbody>{TOKENS22[gi][1].map(([name, val]) => <tr key={name} onClick={() => setG(gi)} style={{ cursor: "pointer", background: g === gi ? "#fdf6e3" : undefined }}>
      <td style={{ padding: "2.5px 4px 2.5px 0", fontFamily: "ui-monospace, monospace", fontSize: 9.8 }}>{name}</td>
      <td style={{ padding: "2.5px 0", textAlign: "right" }}>{gi === 0 || gi === 5 ? <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}><span style={{ width: 13, height: 13, borderRadius: 3, background: val, border: "1px solid #ccc", display: "inline-block" }} />{val}</span> : gi === 1 ? <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}><span style={{ display: "inline-block", height: 7, background: "#c8102e", width: Math.max(4, Number(val.replace("px", ""))) }} />{val}</span> : gi === 3 ? <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}><span style={{ display: "inline-block", width: 18, height: 12, background: "#111", borderRadius: val === "9999px" ? 999 : val }} />{val}</span> : gi === 4 ? <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><span style={{ display: "inline-block", width: 30, height: 13, background: "#fff", border: "1px solid #e5e2d9", boxShadow: val }} /><span style={{ fontSize: 9.3 }}>{val}</span></span> : val}</td>
    </tr>)}</tbody></table>
  </div>;
  const code22 = [
    "// tokens.theme.ts",
    "export const budweiserTheme = {",
    "  color: {",
    "    brand: {",
    "      500: 'var(--color-brand-500)', /* #C8102E */",
    "      amber: { 500: 'var(--color-brand-amber-500)' /* #D4AF37 */ }",
    "    },",
    "    neutral: { 0: '#FFFFFF', 100: '#F5F5F5', 900: '#111111' }",
    "  },",
    "  space: { 0: '0px', 1: '4px', 2: '8px', 3: '12px',",
    "           4: '16px', 5: '24px', 6: '32px', 8: '48px' },",
    "  type: { heading: { xl: '29px/36px', lg: '23px/32px' },",
    "          body: { md: '16px/24px', sm: '14px/20px' } }",
    "};",
  ];
  return <Bo n="22" title="Design tokens: design and code alignment" sub="One source of truth. Consistent experiences across every touchpoint. Collection: Budweiser Core. All tokens are platform agnostic and available to design and code." dark={false} label="BrewOps design tokens - interactive rebuild of Budweiser_22">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 268px", gap: 11, alignItems: "start" }}>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
          {groupTable(0)}{groupTable(1)}{groupTable(2)}{groupTable(3)}{groupTable(4)}{groupTable(5)}
        </div>
        <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Shared language. Fewer handoffs. Stronger brand.</b> Consistent by design. Built in code. This is Bud.</p>
      </div>
      <div>
        <div style={{ background: "#fff", border: "1px solid #e2ddd0", borderRadius: 10, padding: "9px 11px", marginBottom: 9 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Variables — Budweiser Core</p>
          <ul style={{ margin: 0, paddingLeft: 15, fontSize: 10.8, lineHeight: 1.7, color: "#4a5462" }}>
            <li>color.brand / color.neutral</li><li>space scale 0–8</li><li>type.heading / type.body / caption</li><li>radius xs–full</li><li>shadow sm / md / lg</li><li>status success / warning / error / info</li>
          </ul>
          <p style={{ margin: "6px 0 0", fontSize: 10.3, color: "#8a93a0" }}>Select a table row to mark its group.</p>
        </div>
        <div style={{ background: "#0d1117", borderRadius: 10, padding: "10px 0", overflow: "hidden" }}>
          <p style={{ margin: "0 12px 6px", fontSize: 10.3, color: "#8b949e", fontFamily: "ui-monospace, monospace" }}>tokens.theme.ts — TypeScript</p>
          <ol style={{ margin: 0, padding: "0 12px 0 34px", fontFamily: "ui-monospace, monospace", fontSize: 9.6, lineHeight: 1.65, color: "#c9d1d9" }}>
            {code22.map((ln, i) => <li key={i} style={{ whiteSpace: "pre" }}>{ln}</li>)}
          </ol>
        </div>
      </div>
    </div>
  </Bo>;
}

/* ---------------- 24 - Wireframe exploration wall ---------------- */
const WIREFRAMES24: Array<[string, string]> = [
  ["01. Overview - Executive", "Production (bbl) 128.4K +8.4% - OEE 78% +4pp - Quality 96.2% +1.3pp - Energy (kWh/bbl) 12.4 -4%. Production trend chart, Top alerts (High fermentation temp, Low CO2 level, Packaging line slow), Site performance bars."],
  ["02. Alert queue", "Tabs: Open 13 - Acknowledged 3 - Closed. Filters: All severity, All sites, Sort: Newest. Rows: High fermentation temp - Fermenter 12 - Critical - 10m - Low CO2 level - CO2 Tank 3 - High - 25m - Packaging line slow - Line 2 - Medium - 45m - Pump vibration high - Transfer Pump 1 - High - 1h - Yeast slurry level low - Yeast Tank 5 - Medium - 2h. Detail panel: High fermentation temp, Fermenter 12 - Site, with Acknowledge."],
  ["03. Scenario comparison", "Compare scenarios: Baseline (Current) vs Optimize Energy - Add scenario - Share. KPIs Baseline -> Asset: Production (bbl) 128.4K -> 131.2K +2.2% - OEE 78% -> 81% +3pp - Energy (kWh/bbl) 12.4 -> 10.8 -13% - Water (bbl/bbl) 4.2 -> 3.6 -14% - CO2 (kg/bbl) 18.7 -> 16.1 -14% - Cost ($) $1.24M -> $1.12M -9%. Projected impact bar chart - Confidence: High."],
  ["04. Maintenance view", "Tabs: Assets - Work orders - Schedule. Assets: Fermenter 12 (92, Running), Transfer Pump 1 (72, Warning), Heat Exchanger 2 (88, Good), CIP System (85, Good), Packaging Line 2 (65, Warning). Fermenter 12 detail: Health score 92 - Good - Trending up - Temperature 36.2 C - Pressure 1.2 bar - Vibration 2.1 mm/s - Level 72% - View asset."],
  ["05. Copilot panel", "BrewOps Copilot - How can I help you today? Suggested: Why is fermentation temp high? - Show energy optimization ideas - What alerts need attention? Answer as printed: Fermentation temp is high on Fermenter 12. Likely causes: Cooling valve partially closed - High ambient temp - Recent recipe change. View recommended actions. Ask a question..."],
  ["06. Approval flow - Scenario", "Steps: 1 Review - 2 Collaborate - 3 Approve - 4 Implement. Scenario: Optimize Energy. Impact summary: Production +2.2% - OEE +3pp - Energy -13% - Cost -9%. Cancel / Next."],
  ["07. Approval flow - Approve", "Steps: 1 Review - 2 Collaborate - 3 Approve - 4 Implement. Approvers: Plant Manager - Pending - Operations Director - Pending - Sustainability Lead - Approved. Add a comment (optional). Back / Approve."],
  ["08. Data sources", "Add source. Historian (PI) - Time series - Connected - 2m ago - MES - Operational - Connected - 5m ago - LIMS - Quality - Connected - 10m ago - CMMS - Maintenance - Connected - 15m ago - Weather API - External - Connected - 1h ago - Energy Meters - IoT - Warning - 2h ago."],
  ["09. Empty state", "No alerts found - You're all caught up. New alerts will appear here. Clear filters."],
  ["09. Loading state", "Overview skeleton with loading spinner (the wall prints two panels numbered 09 - Empty state and Loading state - as printed)."],
  ["11. Error state", "Something went wrong - We couldn't load the data right now. Try again / Contact support."],
  ["12. KPI drilldown", "OEE drilldown - Site: All Sites - Time range: Last 7 days. OEE 78% +4pp. Breakdown: Availability 85% +3pp - Performance 70% +2pp - Quality 90% +5pp."],
  ["13. Asset detail", "Assets / Fermenter 12 - Tabs: Overview - Trends - Alerts - Work orders - Documents. Temperature - Last 24 hours: Current 36.2 C - Average 34.8 C - Min 31.1 C - Max 38.6 C."],
  ["14. Recommendation card", "Recommendation: Optimize glycol flow - Increasing glycol flow by 8% can reduce fermentation temp and save ~2.1 MWh/day. Expected impact: Temp -1.8 C - Energy -2.1 MWh/day. Confidence: High. View details / Add to plan."],
  ["15. Notifications panel", "Scenario approved - Optimize Energy has been approved - 5m ago. Work order created - Work order #WO-12345 created for Pump 1 - 20m ago. Data source warning - Energy Meters is delayed - 1h ago. View all notifications."],
  ["16. Filter panel", "Filters: Site - All Sites - Time range - Last 7 days - Area - All - Severity - All. Reset / Apply."],
  ["17. Mobile - Overview (wireframe)", "BrewOps mobile Overview - Last 7 days: Production (bbl) 128.4K +8.4% - OEE 78% +4pp - Quality 96.2% +1.3pp - Energy (kWh/bbl) 12.4 -4% - Production trend sparkline."],
];
export function BrewOpsWireframeWall() {
  const [w, setW] = useState(2);
  const cats24: Array<[string, string]> = [["Dashboard", "#2563eb"], ["Alerts", "#e0483e"], ["Workflow", "#18a957"], ["Maintenance", "#e07b1f"], ["AI / Copilot", "#7c4dff"], ["Data", "#0e7c86"], ["System states", "#8a93a0"], ["Mobile", "#c2185b"]];
  const catOf = [0, 1, 2, 3, 4, 2, 2, 5, 6, 6, 6, 0, 3, 4, 6, 5, 7];
  return <Bo n="24" title="Wireframe exploration wall" sub="BrewOps Intelligence - Low-fidelity exploration. v1.0 - May 2024." dark={false} label="BrewOps wireframe exploration wall - interactive rebuild of Budweiser_24">
    <p style={{ margin: "0 0 9px", display: "flex", gap: 12, flexWrap: "wrap", fontSize: 10.8 }}>{cats24.map(([n, c]) => <span key={n}><span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, background: c, marginRight: 4 }} />{n}</span>)}</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
      {WIREFRAMES24.map(([t, body], i) => <button key={t} type="button" onClick={() => setW(i)} aria-pressed={i === w} style={{ textAlign: "left", background: "#fdfcf9", border: `1.5px solid ${i === w ? "#102A43" : "#ddd8cc"}`, borderTop: `4px solid ${cats24[catOf[i]][1]}`, borderRadius: 8, padding: "7px 9px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <b style={{ display: "block", fontSize: 10.6, lineHeight: 1.35 }}>{t}</b>
        <span aria-hidden="true" style={{ display: "block", margin: "6px 0" }}><span style={{ display: "block", height: 5, background: "#e3ded2", borderRadius: 3, marginBottom: 3 }} /><span style={{ display: "block", height: 5, background: "#e3ded2", borderRadius: 3, width: "72%", marginBottom: 3 }} /><span style={{ display: "block", height: 5, background: "#e3ded2", borderRadius: 3, width: "55%" }} /></span>
        <span style={{ display: "block", fontSize: 9.2, lineHeight: 1.5, color: "#5b6470" }}>{body.length > 168 ? `${body.slice(0, 168)}…` : body}</span>
      </button>)}
    </div>
    <div className="tks-detail" aria-live="polite" style={{ marginTop: 10 }}><b>{WIREFRAMES24[w][0]}</b><p style={{ margin: "5px 0 0" }}>{WIREFRAMES24[w][1]}</p></div>
  </Bo>;
}

/* ---------------- 25 - Dashboard wireframe comparison (bw-23) ---------------- */
const QUEUE25: Array<[string, string, string, string, string, string]> = [
  ["High", "PO-78291", "Walmart DC 6050", "Past Due", "May 12, 2025", "2d"],
  ["High", "PO-78292", "Kroger #480", "Past Due", "May 13, 2025", "1d"],
  ["High", "PO-78301", "Total Wine #112", "At Risk", "May 14, 2025", "Today"],
  ["Medium", "PO-78305", "Albertsons DC", "Ready to Ship", "May 15, 2025", "-"],
  ["Medium", "PO-78307", "BevMo #45", "In Process", "May 16, 2025", "-"],
  ["Low", "PO-78312", "Costco DC 102", "Scheduled", "May 17, 2025", "-"],
];
const QUESTIONS25: Array<[string, string]> = [
  ["Overview density", "How much information is shown up front?"],
  ["Prioritization clarity", "How clearly are what matters most surfaced?"],
  ["Speed of action", "How quickly can users act on what they see?"],
  ["Navigation emphasis", "Where is navigation focused?"],
];
export function BrewOpsDashboardComparison() {
  const [q, setQ] = useState(0);
  const [row, setRow] = useState(0);
  const [checked, setChecked] = useState<boolean[]>(QUEUE25.map(() => false));
  const kpiRow = (items: Array<[string, string, string]>) => <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 5 }}>{items.map(([l, v, d]) => <span key={l} style={{ background: "#faf8f5", border: "1px solid #e7e2d9", borderRadius: 8, padding: "5px 7px" }}><span style={{ display: "block", fontSize: 8.8, color: "#8a93a0" }}>{l}</span><b style={{ fontSize: 13.5 }}>{v}</b><span style={{ display: "block", fontSize: 8.6, color: d.startsWith("down") ? "#c0392b" : "#18a957" }}>{d}</span></span>)}</div>;
  const panel: React.CSSProperties = { background: "#fff", border: "1px solid #ddd6c9", borderRadius: 12, padding: "10px 11px" };
  return <Bo n="25" title="Dashboard wireframe comparison" sub="Two approaches for different user needs and moments. Image ID: bw-23-dashboard-wireframe-comparison." dark={false} label="BrewOps dashboard wireframe comparison - interactive rebuild of Budweiser_25">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 128px 1fr", gap: 10, alignItems: "start" }}>
      <div style={panel}>
        <b style={{ fontSize: 12.5 }}>LEFT — Executive Summary Dashboard</b>
        <p style={{ margin: "2px 0 8px", fontSize: 9.8, color: "#8a93a0" }}>Nav: Overview · Performance · Sales · Supply Chain · Markets · Finance · Alerts · Reports · Settings</p>
        {kpiRow([["Total Volume", "2.45M", "up 8.6%"], ["Net Revenue", "$186.7M", "up 6.3%"], ["Gross Margin", "31.4%", "up 1.2pp"], ["Cases Shipped", "2.31M", "up 7.4%"], ["On-Time Delivery", "92.1%", "down 1.6pp"]])}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginTop: 8 }}>
          <div style={{ border: "1px solid #eee9dc", borderRadius: 8, padding: "6px 8px" }}>
            <p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Top Markets by Volume</p>
            {[["California", 100], ["Texas", 84], ["Florida", 66], ["New York", 52], ["Illinois", 38]].map(([m, v]) => <p key={m as string} style={{ margin: "2.5px 0", fontSize: 9.3, display: "flex", gap: 5, alignItems: "center" }}><span style={{ width: 52 }}>{m}</span><span style={{ flex: 1, height: 6, background: "#eee9dc", borderRadius: 3 }}><span style={{ display: "block", height: 6, width: `${v}%`, background: "#2563eb", borderRadius: 3 }} /></span></p>)}
            <p style={{ margin: "4px 0 0", fontSize: 9, color: "#8a93a0" }}>Volume Over Time May 8–14 · by Region: West · Central · South · Northeast</p>
          </div>
          <div style={{ border: "1px solid #eee9dc", borderRadius: 8, padding: "6px 8px" }}>
            <p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Channel Mix</p>
            <span style={{ display: "block", width: 62, height: 62, borderRadius: "50%", margin: "2px auto", background: "conic-gradient(#2563eb 0 62%, #f5a800 62% 90%, #c9cfd8 90% 100%)" }} />
            <p style={{ margin: "3px 0 0", fontSize: 9.3, textAlign: "center" }}>Off Premise 62% · On Premise 28% · Other 10%</p>
            <p style={{ margin: "3px 0 0", fontSize: 9.3, background: "#fdf3e0", borderRadius: 6, padding: "4px 6px" }}>💡 Off Premise volume is up 8.6% driven by growth in Texas and Florida markets.</p>
          </div>
        </div>
        <p style={{ margin: "7px 0 0", fontSize: 9.8 }}><b>Alerts Summary:</b> 3 Critical Alerts · 7 High Priority · 12 Informational</p>
        <p style={{ margin: "6px 0 0", fontSize: 9.8, lineHeight: 1.55 }}><b>Strengths:</b> Broad overview with key KPIs at a glance · Trend and context to support decision making · Great for spotting opportunities and risks · Supports strategic conversations. <b>Tradeoffs:</b> Higher information density may feel busy · Less immediate path to action · Drill-down required for details · Not optimal for task execution.</p>
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        <p className="tks-kicker" style={{ margin: 0, textAlign: "center" }}>Design Questions</p>
        {QUESTIONS25.map(([t, qq], i) => <button key={t} type="button" onClick={() => setQ(i)} aria-pressed={i === q} style={{ background: i === q ? "#102A43" : "#fff", color: i === q ? "#fff" : "#141a21", border: `1px solid ${i === q ? "#102A43" : "#ddd6c9"}`, borderRadius: 9, padding: "7px 9px", cursor: "pointer", font: "inherit", textAlign: "left" }}><b style={{ fontSize: 10.6 }}>{i + 1}. {t}</b><br /><span style={{ fontSize: 9.4, opacity: 0.8, lineHeight: 1.45 }}>{qq}</span></button>)}
      </div>
      <div style={panel}>
        <b style={{ fontSize: 12.5 }}>RIGHT — Operational Queue Dashboard</b>
        <p style={{ margin: "2px 0 8px", fontSize: 9.8, color: "#8a93a0" }}>Nav: Queue · Orders · Shipments · Exceptions · Tasks (12) · Messages (5) · Reports</p>
        {kpiRow([["Total in Queue", "128", "up 18"], ["High Priority", "27", "up 6"], ["Past Due", "14", "up 3"], ["At Risk", "22", "down 5"], ["Ready to Ship", "65", "down 4"]])}
        <p style={{ margin: "7px 0 4px", fontSize: 9.6, color: "#5b6470" }}>Tabs: All (128) · High Priority (27) · Past Due (14) · At Risk (22) · Ready to Ship (65)</p>
        <table className="tks-table tks-table--micro"><thead><tr><th></th><th>Priority</th><th>Order / PO</th><th>Customer</th><th>Status</th><th>Due</th><th>Age</th></tr></thead>
          <tbody>{QUEUE25.map(([p, po, cust, st, due, age], i) => <tr key={po} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#f3ead2" : undefined }}><td><input type="checkbox" checked={checked[i]} aria-label={`Select order ${po}`} onChange={() => setChecked((v) => v.map((x, j) => (j === i ? !x : x)))} onClick={(e) => e.stopPropagation()} /></td><td style={{ color: p === "High" ? "#c8102e" : p === "Medium" ? "#b97a0c" : "#5b6470", fontWeight: 700 }}>{p}</td><td>{po}</td><td>{cust}</td><td>{st}</td><td>{due.replace(", 2025", "")}</td><td>{age}</td></tr>)}</tbody></table>
        <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 9.8 }}>{checked.filter(Boolean).length} items selected — Bulk actions: Assign Task · Send Message · Escalate · Update Status</p>
        <p style={{ margin: "6px 0 0", fontSize: 9.8, lineHeight: 1.55 }}><b>Strengths:</b> Clear prioritization of urgent work · Actionable list with quick status cues · Designed for speed and throughput · Short path from insight to action. <b>Tradeoffs:</b> Narrower view, less strategic context · Focused on execution, not analysis · May hide broader trends · Context switching for big-picture needs.</p>
      </div>
    </div>
    <p style={{ margin: "10px 0 0", background: "#102A43", color: "#fff", borderRadius: 9, padding: "8px 13px", fontSize: 11.5 }}><b>Takeaway:</b> The executive summary informs what to focus on. The operational queue enables how to act. Both are valuable — designed for different users, goals, and moments.</p>
  </Bo>;
}

/* ---------------- 26 - Scenario builder wireflow ---------------- */
const SCEN26: Array<[string, string, string[]]> = [
  ["Baseline", "Current plan", ["-", "95.1%", "97.2%", "28", "12,450", "Medium"]],
  ["S1 Internal shift", "", ["+2.1%", "95.3%", "97.2%", "31", "12,980", "Medium"]],
  ["S2 Alt. supplier", "", ["+1.4%", "94.7%", "96.8%", "26", "11,420", "High"]],
  ["S3 Demand flex", "", ["-0.6%", "95.6%", "97.9%", "23", "11,950", "Low"]],
];
const STEPS26: Array<[string, string, string, string]> = [
  ["1. Trigger", "Start from a signal or question", "Select a signal or ask a question to start exploring.", "Surfaces relevant signals, context, and recommended starting points."],
  ["2. Configure assumptions", "Set the levers and constraints", "Adjust assumptions, set levers and constraints.", "Validates inputs, suggests ranges, and estimates simulation readiness."],
  ["3. Compare scenarios", "Evaluate trade-offs and outcomes", "Compare scenarios side-by-side to evaluate trade-offs.", "Runs simulations and highlights best-fit options and deltas."],
  ["4. Inspect evidence", "Understand drivers and risks", "Drill into drivers, risks, and evidence to build confidence.", "Explains what's driving outcomes and where risk is concentrated."],
  ["5. Request approval", "Share, justify, and move forward", "Share recommendation and request approvals.", "Prepares summary, rationale, and evidence for stakeholders."],
];
export function BrewOpsScenarioWireflow() {
  const [s, setS] = useState(2);
  const [sc, setSc] = useState(2);
  const [sent, setSent] = useState(false);
  const colHeads = ["1 · Home / Trigger", "2 · Scenario Builder", "3 · Compare Scenarios", "4 · Inspect Evidence", "5 · Request Approval"];
  const colBody: React.ReactNode[] = [
    <p key="c0" style={{ margin: 0 }}>Good morning, Alex. How can I help you today?<br /><b>Supply signal: Glass capacity constraint forecasted in {"Q3'24"}</b> — Impact: High · Confidence: 72%.<br />Start a scenario: Explore impact of glass constraint · Assess alternative suppliers · View all signals (8)</p>,
    <p key="c1" style={{ margin: 0 }}><b>Levers:</b> Glass capacity −20% · Window Jul–Sep 2024 · Allocation: Cost priority · Freight +8% · Service target 95%.<br /><b>Constraints:</b> Do not exceed OTIF &lt; 95% · Inventory turns &gt; 6.<br />Copilot: Simulation ready. Run scenarios.</p>,
    <table key="c2" className="tks-table tks-table--micro" style={{ fontSize: 9 }}><thead><tr><th>Scenario</th><th>Cost Δ</th><th>OTIF</th><th>Risk</th></tr></thead><tbody>{SCEN26.map(([name, , cells], i) => <tr key={name} onClick={() => setSc(i)} style={{ cursor: "pointer", background: i === sc ? "#f3ead2" : undefined }}><td><b>{name}</b></td><td>{cells[0]}</td><td>{cells[1]}</td><td>{cells[5]}</td></tr>)}</tbody></table>,
    <p key="c3" style={{ margin: 0 }}><b>S2 Alt. supplier</b> — Tabs: Drivers · Risks · Impact map · Assumptions.<br /><b>Top cost drivers:</b> Freight +$0.8M · Raw materials +$0.6M · Packaging −$0.4M · Production −$0.3M · Inventory carrying +$0.2M.<br />Impact map (US): Increase / Decrease / No change. Evidence sources (12).</p>,
    <p key="c4" style={{ margin: 0 }}><b>Recommended: S2 Alt. supplier — +1.4% cost · 95.6% OTIF</b> (approval card figure; the compare table prints 94.7% — both as printed).<br />Approvers: Maria Gomez, Supply Chain Director — Pending · James Lee, Finance Director — Pending · Aaron Chen, Commercial Director — Pending.</p>,
  ];
  return <Bo n="26" title="Scenario builder wireflow" sub="Supply-chain intelligence copilot - Model changes. Understand impact. Make confident decisions. Governed and auditable: All scenarios, assumptions, and approvals are tracked for transparency and accountability. Secure - Role-based access - Audit trail." dark={false} label="BrewOps scenario builder wireflow - interactive rebuild of Budweiser_26">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "start" }}>
      {STEPS26.map(([t, tag, youDo, copilot], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#2563eb" : "#ddd6c9"}`, borderRadius: 10, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: "#102A43", color: "#fff", padding: "6px 9px", fontSize: 10.8 }}><b>{colHeads[i]}</b></span>
        <span style={{ display: "block", padding: "7px 9px", fontSize: 9.9, lineHeight: 1.55 }}>{colBody[i]}
          <span style={{ display: "block", marginTop: 6, fontSize: 9.4, color: "#5b6470" }}><b>You do:</b> {youDo}<br /><b>Copilot:</b> {copilot}</span>
          <span style={{ display: "none" }}>{t}{tag}</span>
        </span>
      </button>)}
    </div>
    <div style={{ marginTop: 10 }}>
      <table className="tks-table"><thead><tr><th>Scenario</th><th>Total landed cost (delta vs baseline)</th><th>Service level (OTIF)</th><th>Fill rate</th><th>Inventory (days)</th><th>CO2e (tons)</th><th>Risk score</th></tr></thead>
        <tbody>{SCEN26.map(([name, tag, cells], i) => <tr key={name} onClick={() => setSc(i)} style={{ cursor: "pointer", background: i === sc ? "#f3ead2" : undefined }}><td><b>{name}</b>{tag ? ` (${tag})` : ""}</td>{cells.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table>
      <p aria-live="polite" style={{ margin: "6px 0 0", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}><span>Selected: <b>{SCEN26[sc][0]}</b> — Total landed cost over time chart as printed (Baseline / S1 / S2 / S3 lines). Save scenario set · Inspect evidence.</span>
      <button type="button" className="tks-btn" aria-pressed={sent} onClick={() => setSent((v) => !v)}>{sent ? "✓ Sent for approval" : "Send S2 for approval"}</button></p>
    </div>
  </Bo>;
}

/* ---------------- 27 - Design decision log (Trade Portal) ---------------- */
const REJECTED27: Array<[string, string, string[]]> = [
  ["Generic open chat home screen", "Chat list (North Coast Distributors - Premium Beverage Group - Mike Reynolds - South Star Retail - Western Markets) with a conversation: \"Can you confirm the display guidelines for Q3?\" / \"I'll check and get back to you.\" / \"Also, can you approve the promo layout?\"", ["Prioritizes conversation over action and decisions.", "No visibility into priorities, pending approvals, or status.", "Feels like a generic chat app, not purpose-built.", "Does not reflect Budweiser's premium, focused experience."]],
  ["Overloaded dashboard with too many KPIs", "Total Requests 1,248 (+12%) - Approved 842 (+8%) - Rejected 203 (+5%) - Pending 203 (-2%) - Avg. Approval Time 2.4 days (-10%) - SLA Met 91% (+4%) - Overdue 48 (+14%) - Escalated 27 (+8%) - Impressions 3.2M (+15%) - Engagement Rate 4.7% (+6%) - Spend $2.1M (+9%) - ROI 3.6x (+7%), plus Requests Over Time, By Region and Top Programs panels.", ["Too much information competes for attention.", "Hard to scan, slows down decision-making.", "KPIs are not the primary job-to-be-done.", "Creates cognitive load instead of driving action."]],
  ["Hidden approval control inside a details drawer", "Requests table: Q3 Display Program - North Coast Distributors - Pending - 2m ago - Holiday Endcap - Premium Beverage Group - In Review - 15m ago - Summer Promo - South Star Retail - Pending - 1h ago - Back to School - Western Markets - Approved - 2h ago - Octoberfest POS - Highland Beverage - In Review - 1d ago - NFL Kickoff Display - All Star Liquors - Pending - 1d ago. Drawer: Q3 Display Program - Customer North Coast Distributors - Submitted May 20, 2025 10:21 AM - Attachments Planogram_Q3.pdf, Render_Q3.jpg - Actions menu: Approve / Request Changes / Reject.", ["Critical action is buried in a drawer.", "Extra clicks increase friction and delay.", "Easy to miss; not discoverable at a glance.", "Slows down approvers and hurts efficiency."]],
];
export function BrewOpsDecisionLog() {
  const [r, setR] = useState(0);
  return <Bo n="27" title="Design decision log" sub="Evaluating key patterns for the Budweiser trade marketing & approvals experience. PROJECT: Budweiser Trade Portal - DATE: May 20, 2025." dark={false} label="BrewOps design decision log - interactive rebuild of Budweiser_27">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      {REJECTED27.map(([t, mock, fails], i) => <button key={t} type="button" onClick={() => setR(i)} aria-pressed={i === r} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === r ? "#c8102e" : "#ddd6c9"}`, borderRadius: 11, padding: "10px 12px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "flex", justifyContent: "space-between", gap: 6, alignItems: "center" }}><b style={{ fontSize: 12.3, lineHeight: 1.35 }}>{i + 1}. {t}</b><span style={{ background: "#c8102e", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 9.3, fontWeight: 800, flex: "none" }}>✕ REJECTED</span></span>
        <span style={{ display: "block", background: "#faf8f5", border: "1px solid #eee9dc", borderRadius: 8, padding: "7px 9px", fontSize: 9.9, lineHeight: 1.55, color: "#4a5462", marginTop: 7 }}>{mock}</span>
        <span style={{ display: "block", marginTop: 8 }}>
          <span style={{ display: "block", fontSize: 9.3, fontWeight: 800, letterSpacing: "0.09em", color: "#c8102e" }}>WHY IT FAILED</span>
          <ul style={{ margin: "3px 0 0", paddingLeft: 14, fontSize: 10.3, lineHeight: 1.55 }}>{fails.map((x) => <li key={x}>{x}</li>)}</ul>
        </span>
      </button>)}
    </div>
    <div style={{ border: "1.5px solid #18a957", background: "#f2faf4", borderRadius: 11, padding: "11px 13px", marginTop: 10 }}>
      <p style={{ margin: 0, display: "flex", gap: 8, alignItems: "center" }}><span style={{ background: "#18a957", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 9.3, fontWeight: 800 }}>✓ CHOSEN DIRECTION</span><b style={{ fontSize: 14.5 }}>Action-first, focused workspace</b></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, marginTop: 8, fontSize: 10.8, lineHeight: 1.55 }}>
        <p style={{ margin: 0 }}><b>Built for the job</b> — Centers on approvals and decisions, not conversations or vanity metrics.</p>
        <p style={{ margin: 0 }}><b>Clear priorities</b> — Highlights what needs attention so users can act without hunting.</p>
        <p style={{ margin: 0 }}><b>Fast, efficient actions</b> — Key actions are visible, one click away, and easy to complete.</p>
        <p style={{ margin: 0 }}><b>Premium, on-brand experience</b> — Clean, confident, and unmistakably Budweiser — designed to reflect our standards.</p>
      </div>
    </div>
  </Bo>;
}

/* ---------------- 28 - Visual foundations ---------------- */
const TYPE28: Array<[string, string, string]> = [["H1 Display", "56 / 64", "-0.02em"], ["H2 Section title", "32 / 40", "-0.01em"], ["H3 Card title", "24 / 32", "0em"], ["H4 Subheading", "18 / 24", "0em"], ["Body 1 Primary text", "16 / 24", "0em"], ["Body 2 Secondary text", "14 / 20", "0em"], ["Caption Label / Overline", "12 / 16", "0.02em"]];
const COLOR28: Array<[string, string, string]> = [["Ink", "#111419", "Base"], ["Graphite", "#2B2F36", "Base"], ["Stone", "#6B7280", "Base"], ["Pebble", "#E5E7EB", "Base"], ["Porcelain", "#F7F7F8", "Base"], ["Warm White", "#FAF8F5", "Base"], ["Amber", "#FFB000", "Decision / Alert"], ["Critical Red", "#E31E24", "Critical Risk"], ["Success Green", "#18A957", "Healthy"], ["Warning Orange", "#F59E0B", "Attention"], ["Info Blue", "#2563EB", "Informational"]];
const SEMANTIC28: Array<[string, string, string, string]> = [
  ["color.background.page", "#FAF8F5", "#0F1114", "Page background"], ["color.background.card", "#FFFFFF", "#171A1F", "Card / Surface"],
  ["color.text.primary", "#111419", "#F2F4F7", "Primary text"], ["color.text.secondary", "#6B7280", "#A1A7B3", "Secondary text"],
  ["color.border.subtle", "#E5E7EB", "#2A2F36", "Dividers / Borders"], ["color.border.strong", "#D1D5DB", "#3A4048", "Strong dividers"],
  ["color.interactive.primary", "#FFB000", "#FFB000", "Primary actions"], ["color.interactive.hover", "#FFA200", "#FFA200", "Hover state"],
  ["color.status.success", "#18A957", "#2DC16E", "Success states"], ["color.status.warning", "#F59E0B", "#FFB224", "Warning states"],
  ["color.status.critical", "#E31E24", "#F87171", "Critical states"], ["color.status.info", "#2563EB", "#60A5FA", "Info states"],
];
const ASSETS28: Array<[string, string, string, number]> = [["Brew Kettle 1", "Healthy", "92.1%", 0], ["Fermenter 12", "Healthy", "89.4%", 0], ["Brite Tank 4", "Warning", "72.3%", 1], ["Packaging Line 2", "Critical", "48.7%", 2]];
export function BrewOpsVisualFoundations() {
  const [asset, setAsset] = useState(3);
  const specSize = [30, 21, 17, 14, 12.5, 11.5, 10];
  return <Bo n="28" title={<span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Visual foundations</span>} sub="BrewOps Intelligence Design System v1.0 - May 2025. A consistent visual language that drives clarity, speed, and confident decisions." dark={false} label="BrewOps visual foundations - interactive rebuild of Budweiser_28">
    <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 9 }}>
      {[["CLARITY", "Insights at a glance"], ["FOCUS", "Designed for what matters"], ["TRUST", "Governed, secure and reliable"], ["SPEED", "Faster decisions, better outcomes"]].map(([t, d]) => <span key={t} style={{ border: "1px solid #ddd6c9", borderRadius: 999, padding: "3px 11px", fontSize: 10.5 }}><b>{t}</b> · {d}</span>)}
      <span style={{ fontSize: 10.5, color: "#5b6470", alignSelf: "center" }}>Grid: 12-col · 24px gutter · 1280px max · Spacing 4–128px · Elevation L0–L4 · Radius 4/8/12/16/24px</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr 1.15fr", gap: 10, alignItems: "start" }}>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Typography Scale</p>
        {TYPE28.map(([a, b, c], i) => <p key={a} style={{ margin: "5px 0", borderBottom: "1px dashed #eee9dc", paddingBottom: 4 }}>
          <span style={{ fontSize: specSize[i], fontWeight: i < 4 ? 800 : 500, lineHeight: 1.15 }}>{a.split(" ").slice(1).join(" ") || a}</span>
          <span style={{ display: "block", fontSize: 9.3, color: "#8a93a0" }}>{a} · {b} · tracking {c}</span>
        </p>)}
      </div>
      <div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Color Palette</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
            {COLOR28.map(([n, hex, use]) => <span key={n} style={{ fontSize: 9.3, lineHeight: 1.4 }}><span style={{ display: "block", height: 20, borderRadius: 5, background: hex, border: "1px solid #ddd" }} /><b>{n}</b><br />{hex}<br /><span style={{ color: "#8a93a0" }}>{use}</span></span>)}
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px", marginTop: 9 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Semantic Color Tokens</p>
          <table className="tks-table tks-table--micro"><thead><tr><th>Token</th><th>Light</th><th>Dark</th><th>Usage</th></tr></thead><tbody>{SEMANTIC28.map(([a, b, c, d]) => <tr key={a}><td style={{ fontFamily: "ui-monospace, monospace", fontSize: 9.3 }}>{a}</td><td>{b}</td><td>{c}</td><td>{d}</td></tr>)}</tbody></table>
        </div>
      </div>
      <div style={{ background: "#0F1114", color: "#F2F4F7", borderRadius: 11, padding: "10px 12px" }}>
        <p className="tks-kicker" style={{ marginTop: 0, color: "#FFB000" }}>Foundations in Use — Brewery Overview</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 6 }}>
          {[["Production HL", "24,560", "▲ 8.4%"], ["OEE", "87.3%", "▲ 3.1%"], ["Energy / HL", "3.21 kWh", "▼ 2.7%"], ["Critical Alerts", "3", "▲ 2"]].map(([l, v, d]) => <span key={l} style={{ background: "#171A1F", border: "1px solid #2A2F36", borderRadius: 8, padding: "6px 8px" }}><span style={{ display: "block", fontSize: 9, color: "#A1A7B3" }}>{l}</span><b style={{ fontSize: 15 }}>{v}</b> <span style={{ fontSize: 9, color: "#2DC16E" }}>{d}</span></span>)}
        </div>
        <p style={{ margin: "8px 0 3px", fontSize: 10.3, fontWeight: 700 }}>Top Alerts</p>
        <p style={{ margin: 0, fontSize: 9.8, lineHeight: 1.6, color: "#c6cdd6" }}>🔴 Fill level high on Brite Tank 4 — Brite Area — 2 min ago — CRITICAL<br />🟠 CO2 usage above target — Utility — 15 min ago — WARNING<br />🔵 CIP cycle over target time — Brew House — 45 min ago — INFO</p>
        <p style={{ margin: "8px 0 3px", fontSize: 10.3, fontWeight: 700 }}>Asset Performance</p>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>{ASSETS28.map(([n], i) => <button key={n} type="button" onClick={() => setAsset(i)} aria-pressed={i === asset} style={{ background: i === asset ? "#FFB000" : "#171A1F", color: i === asset ? "#111" : "#F2F4F7", border: "1px solid #2A2F36", borderRadius: 999, padding: "2px 9px", fontSize: 9.5, cursor: "pointer", font: "inherit" }}>{n}</button>)}</div>
        <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 10 }}><b>{ASSETS28[asset][0]}</b> — <span style={{ color: ASSETS28[asset][1] === "Healthy" ? "#2DC16E" : ASSETS28[asset][1] === "Warning" ? "#FFB224" : "#F87171" }}>{ASSETS28[asset][1]}</span> — OEE {ASSETS28[asset][2]} — Alerts {ASSETS28[asset][3]}</p>
        <p style={{ margin: "6px 0 0", fontSize: 9.3, color: "#A1A7B3" }}>Filters: All Sites · Brew House · Fermentation · Packaging — Buttons: Primary · Secondary · Tertiary · Healthy · Warning · Critical · Info</p>
      </div>
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}>Consistent by design. Built for performance. — BrewOps Intelligence Design System — v1.0 — May 2025.</p>
  </Bo>;
}

/* ---------------- 29 - Component library ---------------- */
const EVENTS29: Array<[string, string, string, string, string, string, string, string, string]> = [
  ["EVT-2024-0517-001", "O2 Spike - Line 3", "Packaging", "Line 3", "May 17, 8:42 AM", "Open", "High", "78%", "Alex R."],
  ["EVT-2024-0516-004", "Low Fill - Line 1", "Packaging", "Line 1", "May 16, 6:15 PM", "Investigating", "Medium", "62%", "Jamie T."],
  ["EVT-2024-0516-002", "CO2 Usage High", "Brew House", "-", "May 16, 2:07 PM", "Open", "High", "81%", "Morgan S."],
  ["EVT-2024-0515-007", "pH Out of Range", "Fermentation", "FV-12", "May 15, 11:32 AM", "Monitoring", "Low", "45%", "Taylor K."],
  ["EVT-2024-0515-003", "Seal Failure", "Packaging", "Line 2", "May 15, 9:18 AM", "Closed", "Low", "92%", "Alex R."],
];
const CONF29: Array<[string, string, string]> = [["92%", "Very High", "Strong evidence and consistency"], ["78%", "High", "Good evidence alignment"], ["45%", "Medium", "Some supporting evidence"], ["18%", "Low", "Limited or conflicting evidence"]];
export function BrewOpsComponentLibrary() {
  const [row, setRow] = useState(0);
  const [conf, setConf] = useState(1);
  const [step, setStep] = useState(0);
  const [dismissed, setDismissed] = useState<boolean[]>([false, false, false, false]);
  const sec: React.CSSProperties = { background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px", marginBottom: 9 };
  return <Bo n="29" title="Component library" sub="Reusable components for BrewOps Intelligence. BrewOps Intelligence Design System v1.0." dark={false} label="BrewOps component library - interactive rebuild of Budweiser_29">
    <div style={{ display: "grid", gridTemplateColumns: "118px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#102A43", borderRadius: 11, padding: "10px 8px", display: "grid", gap: 2 }}>
        {["Overview", "Insights", "Investigations", "Data", "Approvals", "Settings"].map((nv, i) => <span key={nv} style={{ color: i === 2 ? "#fff" : "#a9bccd", background: i === 2 ? "rgba(255,255,255,0.12)" : "transparent", borderRadius: 7, padding: "5px 9px", fontSize: 10.8, fontWeight: i === 2 ? 700 : 500 }}>{nv}</span>)}
        <p style={{ margin: "8px 4px 0", fontSize: 8.8, color: "#7e93ab", lineHeight: 1.5 }}>© 2024 Anheuser-Busch (as printed)</p>
      </div>
      <div>
        <div style={sec}><p className="tks-kicker" style={{ marginTop: 0 }}>Cards</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }}>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Fermentation Temp — Bright Beer Tank 12</p><b style={{ fontSize: 18 }}>33.8 °F</b><p style={{ margin: "2px 0 0", fontSize: 9.8 }}>Target: 34.0 °F · Within Range · Updated 5m ago</p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Investigation — O2 Spike — Line 3</p><span className="tks-tag" style={{ color: "#c8102e" }}>High Priority</span><p style={{ margin: "3px 0 0", fontSize: 9.8 }}>Opened May 17, 2024 8:42 AM · Owner Alex R.</p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Insight</p><p style={{ margin: 0, fontSize: 9.8 }}>Elevated O2 levels detected during packaging run. Likely Cause: Seal Failure — Confidence <b>78%</b></p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>KPI — Line Yield (7D)</p><b style={{ fontSize: 18 }}>97.6%</b><p style={{ margin: "2px 0 0", fontSize: 9.8 }}>vs prior 7D up 2.1% · Updated 1h ago</p></div>
          </div>
        </div>
        <div style={sec}><p className="tks-kicker" style={{ marginTop: 0 }}>Alerts</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[["High Priority", "O2 levels above control limit on Line 3.", "#c8102e"], ["Investigation Needed", "Unusual CO2 usage detected.", "#b97a0c"], ["FYI", "New data available for Packaging Line 2.", "#2563eb"], ["Resolved", "Seal failure investigation closed.", "#18a957"]].map(([t, d, col], i) => !dismissed[i] ? <div key={t} style={{ border: `1px solid ${col}`, borderRadius: 8, padding: "6px 9px", display: "flex", justifyContent: "space-between", gap: 6, fontSize: 10.3 }}><span><b style={{ color: col }}>{t}</b> — {d}</span><button type="button" className="tks-chip" aria-label={`Dismiss alert: ${t}`} onClick={() => setDismissed((v) => v.map((x, j) => (j === i ? true : x)))}>✕</button></div> : <p key={t} style={{ margin: 0, fontSize: 10.3, color: "#8a93a0" }}>{t} dismissed.</p>)}
          </div>
        </div>
        <div style={sec}><p className="tks-kicker" style={{ marginTop: 0 }}>Filters</p>
          <p style={{ margin: 0, fontSize: 10.5 }}>Date range: May 10 – May 17, 2024 · Brewery: All Breweries · Area: Packaging · Line: Line 3 · Event type: All · Status: All — <b>Clear filters / Apply filters</b></p>
        </div>
        <div style={sec}><p className="tks-kicker" style={{ marginTop: 0 }}>Data Table</p>
          <table className="tks-table tks-table--micro"><thead><tr><th>Event ID</th><th>Title</th><th>Area</th><th>Line</th><th>Detected</th><th>Status</th><th>Priority</th><th>Confidence</th><th>Owner</th></tr></thead>
            <tbody>{EVENTS29.map((r2, i) => <tr key={r2[0]} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#f3ead2" : undefined }}>{r2.map((cell2, j) => <td key={j}>{cell2}</td>)}</tr>)}</tbody></table>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>Selected: <b>{EVENTS29[row][1]}</b> ({EVENTS29[row][0]}) — Showing 1 to 5 of 24 results · 5 per page · pages 1–5 as printed.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
          <div style={{ ...sec, marginBottom: 0 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Evidence Citations</p>
            <p style={{ margin: "3px 0", fontSize: 10.5 }}><b>Historian Trend</b> — O2 Sensor — Line 3 — May 17, 8:35–8:45 AM</p>
            <p style={{ margin: "3px 0", fontSize: 10.5 }}><b>Work Order</b> — WO-2024-0517-0892 — Seal replacement — Line 3</p>
            <p style={{ margin: "3px 0", fontSize: 10.5 }}><b>Lab Result</b> — Dissolved O2 Sample — May 17, 8:50 AM</p>
            <p style={{ margin: "4px 0 0", fontSize: 10.5 }}>View all evidence (7)</p>
          </div>
          <div style={{ ...sec, marginBottom: 0 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Confidence Display</p>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>{CONF29.map(([v], i) => <button key={v} type="button" className="tks-chip" aria-pressed={i === conf} onClick={() => setConf(i)}>{v}</button>)}</div>
            <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 10.5 }}><b style={{ fontSize: 16 }}>{CONF29[conf][0]}</b> — {CONF29[conf][1]} — {CONF29[conf][2]}</p>
            <Bar pct={Number(CONF29[conf][0].replace("%", ""))} label={`Confidence ${CONF29[conf][0]}`} />
          </div>
        </div>
        <div style={{ ...sec, marginTop: 9, marginBottom: 0 }}><p className="tks-kicker" style={{ marginTop: 0 }}>States &amp; Approvals</p>
          <div className="tks-flow" role="group">{["Request", "Review", "Approve", "Complete"].map((t2, i) => <span key={t2} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === step} onClick={() => setStep(i)}><b>{t2}</b></button></span>)}</div>
          <p style={{ margin: "6px 0 0", fontSize: 10.5 }}>Buttons as printed: Approve · Request changes · Reject · Add a comment (optional)…</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, marginTop: 7 }}>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Empty State</p><b style={{ fontSize: 11 }}>No investigations found</b><p style={{ margin: "2px 0 0", fontSize: 9.8 }}>Try adjusting your filters or create a new investigation. + New investigation</p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Loading State</p><p style={{ margin: 0, fontSize: 9.8 }}>Skeleton rows — Loading investigations…</p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Error State</p><b style={{ fontSize: 11 }}>Something went wrong</b><p style={{ margin: "2px 0 0", fontSize: 9.8 }}>{"We couldn't load the data. Please try again."} Retry · Contact support</p></div>
          </div>
        </div>
      </div>
    </div>
  </Bo>;
}

/* ---------------- 30 - Data visualization system ---------------- */
const HEAT30: Array<[string, string[]]> = [
  ["Raw materials", ["Low", "Low", "Caution", "High", "High"]],
  ["Packaging", ["Low", "Caution", "Elevated", "High", "High"]],
  ["Logistics", ["Low", "Caution", "Caution", "Elevated", "High"]],
  ["Labor", ["Caution", "Caution", "Caution", "Caution", "Elevated"]],
  ["Utilities", ["Low", "Low", "Low", "Caution", "Caution"]],
  ["Quality", ["Low", "Low", "Low", "Low", "Caution"]],
];
const DELTA30: Array<[string, string]> = [["High demand", "-6.2pp"], ["Ingredient shortage", "-3.1pp"], ["Logistics disruption", "-1.4pp"], ["Labor constraint", "-0.6pp"], ["Pricing pressure", "+1.8pp"]];
const FALLS30: Array<[string, number]> = [["Base forecast", 180], ["Price", 18], ["Promo", 24], ["Weather", -15], ["Mix shift", -7], ["Other", 6], ["Actual", 206]];
export function BrewOpsDataViz() {
  const [cell, setCell] = useState<[number, number]>([0, 4]);
  const [tank, setTank] = useState(28);
  const [fall, setFall] = useState(6);
  const tankState = tank < 15 ? "LOW (< 15%)" : tank <= 30 ? "CAUTION (15% – 30%)" : tank <= 70 ? "HEALTHY (30% – 70%)" : "HIGH (> 70%)";
  const panel30: React.CSSProperties = { background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" };
  const head30 = (n: string, t: string, use: string) => <p style={{ margin: "0 0 6px" }}><b style={{ fontSize: 11.8 }}><span style={{ color: "#c8102e" }}>{n}</span> {t}</b><br /><span style={{ fontSize: 9.6, color: "#8a93a0" }}>When to use: {use}</span></p>;
  const cum: number[] = []; { let run = 0; FALLS30.forEach(([, v], i) => { run = i === 0 ? v : run + v; cum.push(run); }); }
  return <Bo n="30" title="Data visualization system" sub="BrewOps Intelligence - Our visual system turns complex brewing and supply chain data into clear, actionable insight. Consistent patterns, accessible colors, and purposeful emphasis help every user make confident decisions." dark={false} label="BrewOps data visualization system - interactive rebuild of Budweiser_30">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 196px", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
        <div style={panel30}>{head30("1", "Forecast Bands", "Show expected future range and uncertainty.")}
          <svg viewBox="0 0 260 108" style={{ width: "100%", display: "block" }} role="img" aria-label="Demand forecast with 80 and 95 percent prediction bands">
            <polygon points="60,44 95,38 130,33 165,28 200,24 230,20 230,48 200,52 165,56 130,61 95,66 60,72" fill="#2563eb" opacity="0.13" />
            <polygon points="60,51 95,45 130,40 165,35 200,31 230,27 230,41 200,45 165,49 130,54 95,59 60,65" fill="#2563eb" opacity="0.22" />
            <polyline points="4,74 30,68 60,58" fill="none" stroke="#102A43" strokeWidth="2" />
            <polyline points="60,58 95,52 130,47 165,42 200,38 230,34" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="5 3" />
            <line x1="60" y1="8" x2="60" y2="96" stroke="#c9cfd8" strokeDasharray="2 3" />
            <text x="4" y="106" fontSize="7.5" fill="#8a93a0">Demand forecast — Next 12 weeks (All SKUs) · kHL 0–250</text>
            <text x="196" y="106" fontSize="7.5" fill="#8a93a0">Jun 23 → Aug 4</text>
          </svg>
          <p style={{ margin: "3px 0 0", fontSize: 9.4, color: "#5b6470" }}>Actual (solid) to Jun 23, then Forecast (dashed) with 80% / 95% prediction bands.</p>
        </div>
        <div style={panel30}>{head30("2", "Anomaly Markers", "Call out unusual events that need attention.")}
          <svg viewBox="0 0 260 108" style={{ width: "100%", display: "block" }} role="img" aria-label="Fermentation yield with anomaly markers against target">
            <line x1="4" y1="34" x2="252" y2="34" stroke="#8a93a0" strokeDasharray="5 3" />
            <polyline points="4,44 36,40 68,46 100,30 132,42 164,58 196,44 228,38 252,41" fill="none" stroke="#102A43" strokeWidth="2" />
            <polygon points="100,22 106,30 94,30" fill="#18a957" />
            <polygon points="164,66 170,58 158,58" fill="#e0483e" />
            <polygon points="36,52 42,44 30,44" fill="#e0483e" />
            <text x="176" y="30" fontSize="7.5" fill="#8a93a0">Target (dashed)</text>
            <text x="4" y="106" fontSize="7.5" fill="#8a93a0">Fermentation yield % (All Brewhouses) · May 12 – Aug 4 · ▲ Positive · ▼ Negative</text>
          </svg>
          <p style={{ margin: "3px 0 0", fontSize: 9.4, color: "#5b6470" }}>Up triangles mark positive anomalies, down triangles negative — colour is never the only cue.</p>
        </div>
        <div style={panel30}>{head30("3", "Risk Heatmaps", "Show risk concentration across two dimensions.")}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 3 }}>
            {HEAT30.map(([rowName, cells], ri) => cells.map((v, ci) => <button key={`${rowName}-${ci}`} type="button" aria-pressed={cell[0] === ri && cell[1] === ci} aria-label={`${rowName} ${["NW", "SW", "MW", "SE", "NE"][ci]}: ${v}`} onClick={() => setCell([ri, ci])} style={{ padding: "4px 2px", borderRadius: 5, border: cell[0] === ri && cell[1] === ci ? "2px solid #102A43" : "1px solid transparent", cursor: "pointer", font: "inherit", background: v === "High" ? "#e0483e" : v === "Elevated" ? "#f08c1a" : v === "Caution" ? "#f5c542" : "#efe6cf", color: v === "High" ? "#fff" : "#111", fontSize: 8.2, lineHeight: 1.35 }}><b>{rowName.split(" ")[0]}</b><br />{v}</button>))}
          </div>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 9.4 }}>{HEAT30[cell[0]][0]} × {["NW", "SW", "MW", "SE", "NE"][cell[1]]}: <b>{HEAT30[cell[0]][1][cell[1]]}</b> — Supply risk, next 30 days. High = Severe · Elevated = At risk · Caution = Monitor · Low = On track.</p>
        </div>
        <div style={panel30}>{head30("4", "Scenario Delta Charts", "Compare the impact of different scenarios.")}
          {DELTA30.map(([n, v]) => { const neg = v.startsWith("-"); const w = Math.min(100, Math.abs(parseFloat(v)) / 6.2 * 100); return <p key={n} style={{ margin: "3.5px 0", fontSize: 9.6, display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 104 }}>{n}</span><span style={{ flex: 1, position: "relative", height: 10, background: "#f4f1ea", borderRadius: 3 }}><span style={{ position: "absolute", top: 0, height: 10, borderRadius: 3, background: neg ? "#e0483e" : "#18a957", [neg ? "right" : "left"]: "50%", width: `${w / 2}%` } as React.CSSProperties} /><span style={{ position: "absolute", left: "50%", top: -1, width: 1.5, height: 12, background: "#8a93a0" }} /></span><b style={{ width: 38, textAlign: "right", color: neg ? "#e0483e" : "#18a957" }}>{v}</b></p>; })}
          <p style={{ margin: "4px 0 0", fontSize: 9.4, color: "#5b6470" }}>Service level impact vs. Base case (Week of Jul 7).</p>
        </div>
        <div style={panel30}>{head30("5", "Threshold States", "Communicate status against clear thresholds.")}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ width: 52, height: 74, border: "2px solid #8a93a0", borderRadius: "8px 8px 12px 12px", position: "relative", overflow: "hidden", flex: "none" }}><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${tank}%`, background: tank <= 30 ? "#f5a800" : "#18a957" }} /><span style={{ position: "absolute", left: 0, right: 0, top: "30%", borderTop: "1.5px dashed #e0483e" }} /></span>
            <span style={{ fontSize: 10, lineHeight: 1.55 }}><b style={{ fontSize: 16 }}>{tank}%</b> — Tank inventory, total network (printed example: 28% · 52 kHL)<br /><b>{tankState}</b><br /><span style={{ color: "#5b6470" }}>Caution: inventory below healthy range; projected to reach healthy range in 6 days.</span></span>
          </div>
          <label style={{ display: "block", marginTop: 7, fontSize: 9.6 }}>Sandbox — drag to test the printed thresholds<input type="range" min={0} max={100} value={tank} onChange={(e) => setTank(Number(e.target.value))} aria-label="Sandbox tank inventory percent" style={{ width: "100%" }} /></label>
        </div>
        <div style={panel30}>{head30("6", "Composition & Contribution", "Show how parts build to a total.")}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 86, borderBottom: "1.5px solid #c9cfd8", padding: "0 2px" }}>
            {FALLS30.map(([n, v], i) => { const top = i === 0 || i === FALLS30.length - 1 ? 0 : Math.min(cum[i - 1], cum[i]); const hgt = Math.abs(v); return <button key={n} type="button" onClick={() => setFall(i)} aria-pressed={i === fall} aria-label={`${n}: ${v > 0 && i > 0 ? "+" : ""}${v} kHL`} style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer", padding: 0, height: "100%", position: "relative", font: "inherit" }}>
              <span style={{ position: "absolute", left: 1, right: 1, bottom: `${(top / 240) * 100}%`, height: `${(hgt / 240) * 100}%`, background: i === 0 || i === FALLS30.length - 1 ? "#102A43" : v > 0 ? "#18a957" : "#e0483e", borderRadius: 3, outline: i === fall ? "2px solid #f5a800" : "none" }} />
              <span style={{ position: "absolute", left: 0, right: 0, bottom: `${((top + hgt) / 240) * 100 + 2}%`, fontSize: 8, color: "#5b6470" }}>{i === 0 || i === FALLS30.length - 1 ? cum[i] : `${v > 0 ? "+" : ""}${v}`}</span>
            </button>; })}
          </div>
          <p style={{ display: "flex", justifyContent: "space-between", fontSize: 8.4, color: "#8a93a0", margin: "3px 0 0" }}>{FALLS30.map(([n]) => <span key={n} style={{ flex: 1, textAlign: "center" }}>{n.replace(" forecast", "").replace(" shift", "")}</span>)}</p>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 9.4 }}><b>{FALLS30[fall][0]}</b>: {fall === 0 || fall === FALLS30.length - 1 ? `${FALLS30[fall][1]} kHL total` : `${FALLS30[fall][1] > 0 ? "+" : ""}${FALLS30[fall][1]} kHL`} — Demand variance, week of Jul 7: 180 +18 +24 −15 −7 +6 = 206 kHL.</p>
        </div>
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#102A43", color: "#fff", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0, color: "#f5c86b" }}>Built for Every Brewer</p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}><b>Accessible. Consistent. Actionable.</b><br />From brewhouse to boardroom.<br /><b>ONE SYSTEM. EVERY DECISION.</b></p>
        </div>
        <div style={panel30}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Accessible Color Rules</p>
          <p style={{ margin: 0, fontSize: 10.3, lineHeight: 1.6 }}>Purposeful color with redundant cues. Semantic palette: <b>Critical</b> (Action needed) · <b>Elevated</b> (At risk) · <b>Caution</b> (Monitor) · <b>Healthy</b> (On track) · <b>Informational</b> (For context) · <b>Neutral</b> (Structure &amp; text). WCAG 2.1 AA compliant — color is not the only means of communication.</p>
        </div>
        <div style={panel30}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Pattern &amp; Shape Key</p>
          <p style={{ margin: 0, fontSize: 10.3, lineHeight: 1.7 }}>▼ Negative / Decrease<br />▲ Positive / Increase<br />! Attention / Caution<br />- - Dashed: Target / Threshold<br />▓ Band: Range / Uncertainty</p>
        </div>
        <div style={panel30}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Typography &amp; Principles</p>
          <p style={{ margin: 0, fontSize: 10.3, lineHeight: 1.6 }}><b>Inter UI</b> — for clarity at every size.<br />Principles: <b>Clarity · Consistency · Inclusivity · Actionability</b></p>
        </div>
      </div>
    </div>
  </Bo>;
}

/* ---------------- Shared Control Tower data (files 31 / 33 / 40) ---------------- */
function ControlTowerStats() {
  return <Stats items={[["Total Production (HL)", "24,560", "up 8.4% vs prior 7D"], ["OEE", "87.3%", "up 3.1% vs prior 7D"], ["On-Time Delivery", "92.1%", "up 2.8% vs prior 7D"], ["Inventory Health", "78%", "down 5% vs prior 7D"], ["Critical Alerts", "3", "up 2 vs prior 7D"]]} />;
}

/* ---------------- 31 - Control Tower (hi-fi) ---------------- */
export function BrewOpsControlTower() {
  return <BoX n="31" title="Control Tower" sub="Real-time operational overview across the brewing supply chain — the flagship hi-fi dashboard, with the design-system sidebar as printed." dark={false} label="BrewOps control tower hi-fi - interactive rebuild of Budweiser_31">
    <HiFi active="Control Tower">
      <CTDash />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8, fontSize: 11, color: "#141a21" }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Alert / Risk Queue (right rail, as printed)</p>
          <p style={{ margin: "3px 0" }}>🔴 <b>High Priority</b> — CO2 levels (CRITICAL, 2 min ago) · 🟠 <b>Investigation Needed</b> — CO2 usage (WARNING, 15 min ago) · 🔵 <b>FYI</b> — Packaging Line 2 data (INFO, 45 min ago) · 🟢 <b>Resolved</b> — seal failure (1 hr ago) · View all (7)</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Evidence &amp; Insights</p>
          <p style={{ margin: "3px 0" }}><b>Insight:</b> Elevated CO2 levels detected during packaging run. May 17, 8:42 AM — Confidence 78%.</p>
          <p style={{ margin: "3px 0" }}><b>Work Order:</b> WO-2024-0517-0892 — Seal replacement — Line 3 — May 17, 8:50 AM — Completed.</p>
          <p style={{ margin: "3px 0" }}><b>Historian Trend:</b> O2 Sensor — Line 3 — May 17, 8:35–8:45 AM.</p>
        </div>
      </div>
    </HiFi>
  </BoX>;
}

/* ---------------- 33 - Control Tower Explained ---------------- */
const EXPLAIN33: Array<[string, string, string]> = [
  ["Decision priority", "Instantly see what needs your attention first.", "The Operational KPIs row (marker 1 points at Total Production): 24,560 HL - OEE 87.3% - On-Time Delivery 92.1% - Inventory Health 78% - Critical Alerts 3."],
  ["Risk exposure", "Understand where risk is concentrated and what's at stake.", "The Inventory Risk Summary (marker 2): 152 At Risk SKUs - High 18 (12%) - Medium 46 (30%) - Low 88 (58%) - drivers: elevated demand vs forecast, supply delay risk, packaging constraints."],
  ["Evidence", "Explore the data and insights that back every alert.", "The Alert / Risk Queue and Evidence & Insights rail (marker 3): Insight with Confidence 78% - Work Order WO-2024-0517-0892 - Historian Trend O2 Sensor Line 3."],
  ["Ownership", "Know who owns it and how it's progressing.", "The Facility Overview and Next Actions owners (marker 4): facilities Columbus / Cartersville / Fort Collins / Newark / Los Angeles with OEE and status; action owners Jamie D., Morgan S., Taylor R."],
  ["Action", "Take the right action, right from the dashboard.", "The Next Actions strip (marker 5): CRITICAL Address CO2 levels on Line 3 - Take Action (Due in 45m) - WARNING Review delayed raw materials - INFO Validate packaging data update."],
];
export function BrewOpsControlTowerExplained() {
  const [s, setS] = useState(0);
  const cols = ["#f5a800", "#e07b1f", "#2563eb", "#18a957", "#7c4dff"];
  return <BoX n="33" title="Control Tower Explained" sub="Five ways the Control Tower turns data into confident, timely decisions — the numbered points sit in the left column and their markers 1–5 sit on the dashboard itself, as printed." dark={false} label="BrewOps control tower explained - interactive rebuild of Budweiser_33">
    <div style={{ display: "grid", gridTemplateColumns: "196px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 7 }}>
        <p style={{ margin: 0, fontSize: 11, color: "#5b6470" }}><span style={{ color: "#c8102e", fontStyle: "italic", fontWeight: 800 }}>Budweiser</span> · <b style={{ letterSpacing: "0.1em", color: "#141a21" }}>BREWOPS INTELLIGENCE</b></p>
        {EXPLAIN33.map(([t, lead, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: i === s ? "#fff" : "transparent", border: `1.5px solid ${i === s ? cols[i] : "#e0d9c8"}`, borderRadius: 10, padding: "8px 10px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
          <span style={{ display: "flex", gap: 7, alignItems: "center" }}><span style={{ width: 19, height: 19, borderRadius: "50%", background: cols[i], color: "#fff", fontWeight: 800, fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span><b style={{ fontSize: 12.3 }}>{t}</b></span>
          <span style={{ display: "block", fontSize: 10.8, lineHeight: 1.5, marginTop: 4 }}>{lead}</span>
          <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#5b6470", marginTop: 3 }}>{body}</span>
        </button>)}
      </div>
      <CTDash markers />
    </div>
  </BoX>;
}

/* ---------------- 34 - Demand Risk investigation ---------------- */
const SKUS34: Array<[string, string, string, string, string, string, string, string]> = [
  ["2100003", "12oz Can 24pk", "28,560", "32,100", "-3,540", "-11.0%", "High", "78%"],
  ["2100001", "12oz Can 18pk", "18,420", "20,540", "-2,120", "-10.3%", "High", "80%"],
  ["2100004", "16oz Can 4pk", "9,860", "11,220", "-1,360", "-12.1%", "Medium", "76%"],
  ["2100002", "12oz Bottle 24pk", "7,510", "8,640", "-1,130", "-13.1%", "Medium", "74%"],
  ["2100005", "16oz Can 6pk", "4,210", "4,890", "-680", "-13.9%", "Medium", "72%"],
];
const SIGNALS34: Array<[string, string, string]> = [
  ["Elevated CO2 Levels", "Brew House - Line 3 - CO2 levels above control limit on Line 3. 2 min ago", "CRITICAL"],
  ["Unusual CO2 Usage", "Brew House - Utilities - CO2 usage 18% higher than normal. 15 min ago", "WARNING"],
  ["Line Slowdown Detected", "Brew House - Line 3 - Avg. line speed 8% below baseline. 25 min ago", "INFO"],
  ["Seal Failure Investigation Closed", "Fermentation - Tank 12 - Seal failure investigation closed. 1 hr ago", "RESOLVED"],
];
export function BrewOpsDemandRisk() {
  const [sku, setSku] = useState(0);
  const sevCol = (s: string) => s === "CRITICAL" ? "#c8102e" : s === "WARNING" ? "#b97a0c" : s === "RESOLVED" ? "#18a957" : "#2563eb";
  return <BoX n="34" title="Demand Risk: Elevated CO2 levels detected" sub="Investigations — Demand Risk — EVT-2024-0517-002 — High Priority — Brew House — Line 3 — May 17, 2024 8:42 AM — 78% Confidence." dark={false} label="BrewOps demand risk investigation - interactive rebuild of Budweiser_34">
    <HiFi active="Investigations">
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", fontSize: 10.5, color: "#5b6470", marginBottom: 8 }}>
        <span style={{ border: "1px solid #e0d9c8", borderRadius: 999, padding: "2px 10px", background: "#fff" }}>May 10 – May 17, 2024 (7D)</span>
        <span style={{ border: "1px solid #e0d9c8", borderRadius: 999, padding: "2px 10px", background: "#fff" }}>Brew House</span>
        <span style={{ border: "1px solid #e0d9c8", borderRadius: 999, padding: "2px 10px", background: "#fff" }}>Line 3</span>
        <span style={{ marginLeft: "auto" }}>Share · <b style={{ color: "#c8102e" }}>+ Create Investigation</b></span>
      </div>
      <div style={{ display: "flex", gap: 14, fontSize: 11, borderBottom: "1.5px solid #e7e2d9", paddingBottom: 6, marginBottom: 9 }}>
        {["Overview", "Contributing Signals", "Affected SKUs", "Recommendations", "History"].map((t, i) => <span key={t} style={{ fontWeight: i === 0 ? 800 : 500, color: i === 0 ? "#c8102e" : "#5b6470", borderBottom: i === 0 ? "2.5px solid #c8102e" : "none", paddingBottom: 5 }}>{t}</span>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {[["Total Impact (7D)", "-12,450 HL"], ["% vs Forecast", "-11.3%"], ["Peak Variance", "-2,180 HL · May 15"]].map(([l, v]) => <span key={l} style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, padding: "7px 11px" }}><span style={{ display: "block", fontSize: 9.8, color: "#8a93a0" }}>{l}</span><b style={{ fontSize: 16, color: "#c8102e" }}>{v}</b></span>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 9, marginTop: 9 }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Forecast vs Actual Demand — May 10 – May 17</p>
          <svg viewBox="0 0 300 104" style={{ width: "100%", display: "block" }} role="img" aria-label="Forecast versus actual demand chart with confidence range">
            <polygon points="10,30 60,28 110,26 160,25 210,24 260,23 290,22 290,44 260,45 210,46 160,47 110,48 60,50 10,52" fill="#f5a800" opacity="0.16" />
            <polyline points="10,41 60,39 110,37 160,36 210,35 260,34 290,33" fill="none" stroke="#8a93a0" strokeWidth="1.8" strokeDasharray="5 3" />
            <polyline points="10,42 60,40 110,44 160,58 210,66 260,62 290,64" fill="none" stroke="#f5a800" strokeWidth="2.4" />
            <line x1="110" y1="10" x2="110" y2="88" stroke="#c8102e" strokeDasharray="2 3" />
            <text x="114" y="18" fontSize="7.5" fill="#c8102e">Investigation opened May 13, 8:42 AM</text>
            <text x="10" y="100" fontSize="7.5" fill="#8a93a0">— Actual Demand (amber) · - - Forecast · band Confidence Range (78%)</text>
          </svg>
          <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Affected SKUs (8) — showing 1 to 5 of 8 · pages 1–2</p>
          <table className="tks-table tks-table--micro"><thead><tr><th>SKU</th><th>Package</th><th>Actual (7D)</th><th>Forecast (7D)</th><th>Variance</th><th>%</th><th>Severity</th><th>Conf.</th></tr></thead>
            <tbody>{SKUS34.map((r2, i) => <tr key={r2[0]} onClick={() => setSku(i)} style={{ cursor: "pointer", background: i === sku ? "#f3ead2" : undefined }}><td>{r2[0]}</td><td>{r2[1]}</td><td>{r2[2]}</td><td>{r2[3]}</td><td style={{ color: "#c8102e" }}>{r2[4]}</td><td>{r2[5]}</td><td style={{ color: r2[6] === "High" ? "#c8102e" : "#b97a0c", fontWeight: 700 }}>{r2[6]}</td><td>{r2[7]}</td></tr>)}</tbody></table>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>Selected SKU {SKUS34[sku][0]} ({SKUS34[sku][1]}): variance {SKUS34[sku][4]} HL ({SKUS34[sku][5]}), confidence {SKUS34[sku][7]}. Product: Budweiser.</p>
        </div>
        <div style={{ display: "grid", gap: 9, alignContent: "start" }}>
          <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
            <p className="tks-kicker" style={{ marginTop: 0 }}>Evidence &amp; Contributing Signals — View all (7)</p>
            {SIGNALS34.map(([t, d, sev]) => <p key={t} style={{ margin: "6px 0", fontSize: 10.6, lineHeight: 1.5, borderLeft: `3.5px solid ${sevCol(sev)}`, paddingLeft: 8 }}><b>{t}</b> <span style={{ color: sevCol(sev), fontWeight: 800, fontSize: 9 }}>{sev}</span><br /><span style={{ color: "#5b6470" }}>{d}</span></p>)}
          </div>
          <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
            <p className="tks-kicker" style={{ marginTop: 0 }}>Recommended Next Steps</p>
            <p style={{ margin: "5px 0", fontSize: 10.8, lineHeight: 1.55 }}><b>1. Investigate CO2 injection system on Line 3</b> — Check regulator pressure and valve performance. <span style={{ color: "#c8102e", fontWeight: 700 }}>High Impact</span></p>
            <p style={{ margin: "5px 0", fontSize: 10.8, lineHeight: 1.55 }}><b>2. Review CO2 supply and storage levels</b> — Validate availability and delivery schedule. <span style={{ color: "#b97a0c", fontWeight: 700 }}>Medium Impact</span></p>
            <p style={{ margin: "5px 0", fontSize: 10.8, lineHeight: 1.55 }}><b>3. Monitor demand and system metrics</b> — Continue close monitoring over next 48 hours. <span style={{ color: "#5b6470", fontWeight: 700 }}>Low Impact</span></p>
            <p style={{ margin: "5px 0 0", fontSize: 10.5 }}>View all recommendations.</p>
          </div>
        </div>
      </div>
      <p style={{ margin: "8px 0 0", fontSize: 10, color: "#8a93a0" }}>BrewOps Intelligence Design System v1.0 — May 2025 (footer as printed). The History tab is printed in the tab row; the slide shows Overview content, so no history rows are printed and none are invented here.</p>
    </HiFi>
  </BoX>;
}

/* ---------------- 35 - Logistics scenario comparison ---------------- */
const SCEN35: Array<[string, string, string, Array<[string, string, string]>, string[]]> = [
  ["Baseline scenario", "Current plan", "Represents current committed plan and policies.", [["Service level (fill rate)", "91.2%", "- vs baseline"], ["Landed cost", "$2.48M", "- vs baseline"], ["Delayed deliveries", "24", "- vs baseline"], ["Inventory impact", "+1.2%", "- vs baseline"], ["Risk score", "Medium", "- vs baseline"]], ["18 delayed loads due to capacity constraints", "High fuel surcharge on 6 lanes", "Inventory build expected at 3 facilities"]],
  ["Cost-optimized", "Save cost", "Minimize landed cost while meeting service targets.", [["Service level (fill rate)", "89.1%", "down 2.1pp vs baseline"], ["Landed cost", "$2.21M", "down $270K (-10.9%)"], ["Delayed deliveries", "38", "up 14 vs baseline"], ["Inventory impact", "-0.8%", "down 2.0pp vs baseline"], ["Risk score", "High", "up vs baseline"]], ["Shifted volume to lower-cost carriers", "Extended transit time on 9 lanes", "Higher risk of stockouts at 2 facilities"]],
  ["Service-optimized", "Recommended", "Maximize service level while managing cost.", [["Service level (fill rate)", "96.3%", "up 5.1pp vs baseline"], ["Landed cost", "$2.63M", "up $150K (+6.0%)"], ["Delayed deliveries", "9", "down 15 vs baseline"], ["Inventory impact", "+2.6%", "up 1.4pp vs baseline"], ["Risk score", "Low", "down vs baseline"]], ["Prioritized capacity on critical lanes", "Added expedite on 3 high-impact lanes", "Balanced inventory at all critical facilities"]],
];
export function BrewOpsLogisticsScenarios() {
  const [s, setS] = useState(2);
  const [adopted, setAdopted] = useState(false);
  const scenCols = ["#5b6470", "#b97a0c", "#18a957"];
  return <BoX n="35" serif title="Logistics scenario comparison" sub="Control Tower — Logistics — Scenario Compare. Compare tradeoffs across logistics scenarios to make the best end-to-end decision. Scenarios last updated May 17, 2024 8:45 AM." dark={false} label="BrewOps logistics scenario comparison - interactive rebuild of Budweiser_35">
    <div style={{ display: "grid", gridTemplateColumns: "178px repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Scenario Inputs</p>
          <p style={{ margin: 0, fontSize: 10.5, lineHeight: 1.65 }}>Time horizon: May 10 – May 17, 2024 (7D)<br />Facilities: All (12)<br />Products: All (24 SKUs)<br />Lanes: All (42)<br />Demand forecast: Latest forecast v3<br />Starting inventory: As of May 10, 2024<br /><b>Edit assumptions</b></p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Scenario Assumptions</p>
          <p style={{ margin: 0, fontSize: 10.5, lineHeight: 1.65 }}>Fuel price $3.85 / gal (+0.05)<br />Carrier capacity: Constrained<br />Demand volatility: Medium<br />Transit time variance: Normal<br />Inventory policy: Service-focused</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Comparison — Best / Range</p>
          <p style={{ margin: 0, fontSize: 10.5, lineHeight: 1.65 }}>Service level <b>96.3%</b> / 89.1–96.3%<br />Landed cost <b>$2.21M</b> / $2.21–2.63M<br />Delayed deliveries <b>9</b> / 9–38<br />Inventory impact <b>+2.6%</b> / −0.8–+2.6%<br />Risk score <b>Low</b> / Low–High</p>
        </div>
      </div>
      {SCEN35.map(([name, tag, desc, metrics, drivers], i) => <button key={name} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? scenCols[i] : "#e7e2d9"}`, borderTop: `5px solid ${scenCols[i]}`, borderRadius: 11, padding: "9px 11px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "flex", justifyContent: "space-between", gap: 5, alignItems: "center" }}><b style={{ fontSize: 12.5 }}>{name}</b><span style={{ background: scenCols[i], color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 9, fontWeight: 800 }}>{tag}</span></span>
        <span style={{ display: "block", fontSize: 10.4, color: "#5b6470", lineHeight: 1.5, margin: "4px 0 7px" }}>{desc}</span>
        <table className="tks-table tks-table--micro"><tbody>{metrics.map(([k, v, d]) => <tr key={k}><td>{k}</td><td><b>{v}</b></td><td style={{ fontSize: 9.3 }}>{d}</td></tr>)}</tbody></table>
        <span style={{ display: "block", marginTop: 7 }}>
          <span style={{ display: "block", fontSize: 9, fontWeight: 800, letterSpacing: "0.09em", color: "#8a93a0" }}>TOP DRIVERS</span>
          <ul style={{ margin: "3px 0 0", paddingLeft: 13, fontSize: 10.2, lineHeight: 1.55 }}>{drivers.map((x) => <li key={x}>{x}</li>)}</ul>
        </span>
        <span style={{ display: "block", fontSize: 9.3, color: "#8a93a0", marginTop: 6 }}>Metric trends (7D) printed as sparklines per scenario.</span>
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 9, marginTop: 9 }}>
      <div style={{ border: "1.5px solid #18a957", background: "#f2faf4", borderRadius: 11, padding: "10px 13px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Recommendation</p>
        <p style={{ margin: 0, fontSize: 11.3, lineHeight: 1.6 }}><b>Service-optimized scenario</b> — Best balance of service and risk with manageable cost increase. Meets 95%+ service target · Minimizes supply risk · Acceptable cost increase (+6%).</p>
        <p style={{ margin: "8px 0 0", display: "flex", gap: 8, alignItems: "center" }}><button type="button" className="tks-btn" aria-pressed={adopted} onClick={() => setAdopted((v) => !v)} style={{ background: "#18a957", borderColor: "#18a957" }}>{adopted ? "✓ Recommended scenario adopted" : "Adopt recommended scenario"}</button><span style={{ fontSize: 10.5 }}>Export comparison</span></p>
      </div>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 13px", fontSize: 10.6, lineHeight: 1.6 }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>{"What's included in each scenario"}</p>
        <p style={{ margin: 0 }}>Transportation plan (Carrier assignments) · Inventory plan (Allocation &amp; positioning) · Capacity plan (Facility &amp; carrier capacity) · Service plan (SLAs &amp; priorities) · Risk evaluation (Disruption &amp; constraints).<br /><span style={{ color: "#5b6470" }}>About scenario modeling: Scenarios are generated using AI optimization and historical performance.</span></p>
      </div>
    </div>
  </BoX>;
}

/* ---------------- 36 - Recommendation approval detail ---------------- */
const LOG36: Array<[string, string, string, string, string]> = [
  ["May 17, 9:15 AM", "Recommendation created", "Jamie D.", "Process Engineer", "Initial recommendation generated based on CO2 usage alert and line optimization analysis."],
  ["May 17, 9:42 AM", "Reviewed", "Morgan S.", "Operations Manager", "Verified line availability and resource allocation."],
  ["May 17, 10:05 AM", "Reviewed", "Taylor R.", "Production Director", "Confirmed production impact and downstream schedule."],
  ["May 17, 10:32 AM", "Reviewed", "Jamie T.", "Quality Manager", "Assessed quality impact and monitoring plan."],
];
export function BrewOpsRecommendation() {
  const [decision, setDecision] = useState<string | null>(null);
  const [logRow, setLogRow] = useState(0);
  const strip = (label: string, blocks: Array<[string, number, string]>) => <div style={{ marginTop: 7 }}>
    <p style={{ margin: "0 0 3px", fontSize: 10.3 }}><b>{label}</b></p>
    <div style={{ display: "flex", gap: 3 }}>{blocks.map(([t, flex, col]) => <span key={t} style={{ flex, background: col, borderRadius: 6, padding: "5px 8px", fontSize: 9.4, lineHeight: 1.45, color: col === "#f5a800" ? "#231d05" : "#fff" }}>{t}</span>)}</div>
  </div>;
  return <Bo n="36" title="Recommendation: Optimize Packaging Line 3 Schedule" sub="Back to Approvals — REC-2024-0517-0892 — Packaging — Line 3 — Brew House — May 17, 2024, 9:15 AM — High Priority — Status: Pending Approval. Adjust sequence and changeover window to reduce CO2 usage and improve throughput." dark={false} label="BrewOps recommendation approval - interactive rebuild of Budweiser_36">
    <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 10, alignItems: "start" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recommendation Summary</p>
        <p style={{ margin: 0 }}>Reschedule Packaging Line 3 to run Brew House — Tank 12 first, followed by Fermentation — Tank 12.</p>
        <p style={{ margin: "6px 0 0", display: "flex", gap: 5, flexWrap: "wrap" }}>{["Reduces CO2 usage", "Improves throughput", "Minimal changeover impact", "No quality impact"].map((t) => <span key={t} className="tks-tag">{t}</span>)}</p>
        <p className="tks-kicker" style={{ margin: "12px 0 2px" }}>Why this recommendation? — Plan timelines</p>
        {strip("Current Plan (Today)", [["Fermentation Tank 12 — 6:00 AM – 11:00 AM (Production Run)", 5, "#5b6470"], ["Changeover 60 min", 1, "#e0483e"], ["Brew House Tank 12 — 12:00 PM – 5:00 PM (Production Run)", 5, "#5b6470"]])}
        {strip("Recommended Plan", [["Brew House Tank 12 — 6:00 AM – 11:00 AM (Production Run)", 5, "#2563eb"], ["Changeover 45 min", 0.75, "#f5a800"], ["Fermentation Tank 12 — 11:45 AM – 4:45 PM (Production Run)", 5, "#2563eb"]])}
        <p className="tks-kicker" style={{ margin: "12px 0 2px" }}>Assumptions</p>
        <ul style={{ margin: 0 }}><li>Demand forecast remains within ±5% for next 24 hours</li><li>No unplanned maintenance on Line 3</li><li>Raw material availability is as planned</li><li>Changeover teams available at scheduled times</li></ul>
        <p style={{ margin: "4px 0 0", fontSize: 11 }}>Assumptions are conditions not guaranteed. Monitor and adjust as needed.</p></div>
      <div>
        <Stats items={[["CO2 Usage", "-2,360 kg", "down 7.8%"], ["Total Production (HL)", "+1,250 HL", "up 5.4%"], ["Changeover Time", "-15 min", "down 20%"], ["OEE", "+2.3 pts", "up 2.6%"]]} />
        <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Confidence Level — 78% High</p><Bar pct={78} label="Recommendation confidence 78 percent" />
          <p style={{ margin: "4px 0 0", fontSize: 11 }}>Based on historical performance and similar runs (as printed).</p>
          <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Risks &amp; Considerations</p>
          <p style={{ margin: 0, lineHeight: 1.6 }}><b style={{ color: "#c8102e" }}>High</b> — Changeover delay could impact downstream schedule<br /><b style={{ color: "#b97a0c" }}>Medium</b> — CO2 savings dependent on equipment efficiency<br /><b style={{ color: "#5b6470" }}>Low</b> — Minor quality variation possible during first hour<br />Mitigations are in place. Monitoring recommended during execution.</p></div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 10, marginTop: 10, alignItems: "start" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Activity Log — View full audit trail</p>
        <table className="tks-table tks-table--micro"><thead><tr><th>Time</th><th>Event</th><th>Who</th><th>Role</th><th>Note</th></tr></thead>
          <tbody>{LOG36.map(([t, ev, who, role, note], i) => <tr key={t} onClick={() => setLogRow(i)} style={{ cursor: "pointer", background: i === logRow ? "#f3ead2" : undefined }}><td>{t}</td><td><b>{ev}</b></td><td>{who}</td><td>{role}</td><td>{note}</td></tr>)}</tbody></table>
      </div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Ownership &amp; Approval</p>
        <p style={{ margin: "4px 0" }}>Recommendation Owner: <b>Jamie D.</b>, Process Engineer, Brew House<br />Business Owner: <b>Morgan S.</b>, Operations Manager, Brew House</p>
        <p style={{ margin: "4px 0" }}>Approvers: Taylor R., Production Director — <b>Pending</b> · Alex R., Supply Chain Ops — <b>Pending</b> · Jamie T., Quality Manager — <b>Pending</b></p>
        <p style={{ display: "flex", gap: 5, flexWrap: "wrap", margin: "8px 0 0" }}>
          <button type="button" className="tks-btn" aria-pressed={decision === "approve"} onClick={() => setDecision("approve")} style={{ background: "#18a957", borderColor: "#18a957" }}>Approve</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={decision === "changes"} onClick={() => setDecision("changes")}>Request Changes</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={decision === "reject"} onClick={() => setDecision("reject")} style={{ color: "#c8102e", borderColor: "#c8102e" }}>Reject</button></p>
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{decision === "approve" ? "Decision staged: Approve — Submit Decision (with Notify stakeholders on decision checked, as printed) records it in the audit trail." : decision === "changes" ? "Decision staged: Request Changes — a comment is required for changes or rejection, as printed." : decision === "reject" ? "Decision staged: Reject — a comment is required for changes or rejection, as printed." : "No decision staged yet — the slide's status is Pending Approval."}</p></div>
    </div>
  </Bo>;
}

/* ---------------- 37 - Predictive Maintenance Fleet View ---------------- */
const FLEET37: Array<[string, string, string, string, string, string, string, string]> = [
  ["Brite Tank 12 (BT-12)", "Brite Tank", "Brewery Columbus - Line 3", "96%", "1,240", "May 17, 6:15 AM", "up 2", "None"],
  ["Fermenter 7 (FV-07)", "Fermenter", "Brewery Fort Collins - Line 1", "92%", "980", "May 17, 5:40 AM", "up 1", "None"],
  ["CIP Skid 2 (CIP-02)", "CIP System", "Brewery Newark - Utilities", "88%", "760", "May 17, 4:30 AM", "up 4", "None"],
  ["Miller 3 (ML-03)", "Miller", "Brewery Cartersville - Line 2", "72%", "420", "May 17, 3:10 AM", "down 2", "Anomaly flagged"],
  ["Pump P-12 (PMP-12)", "Pump", "Brewery Los Angeles - Line 3", "68%", "380", "May 17, 2:05 AM", "-", "Anomaly flagged"],
  ["Heat Exchanger 4 (HEX-04)", "Heat Exchanger", "Brewery Columbus - Utilities", "61%", "310", "May 17, 1:20 AM", "down 1", "Anomaly flagged"],
  ["Compressor 1 (CP-01)", "Compressor", "Brewery Fort Collins - Utilities", "48%", "210", "May 17, 12:15 AM", "-", "Anomalies flagged"],
  ["Boiler 2 (BLR-02)", "Boiler", "Brewery Cartersville - Utilities", "38%", "160", "May 16, 11:40 PM", "-", "Anomalies flagged"],
  ["Conveyor Line 1 (CV-01)", "Conveyor", "Brewery Newark - Packaging", "35%", "120", "May 16, 10:05 PM", "-", "Anomalies flagged"],
  ["Filler 6 (FL-06)", "Filler", "Brewery Los Angeles - Packaging Line 2", "22%", "85", "May 16, 9:10 PM", "-", "Anomalies flagged"],
];
export function BrewOpsMaintenanceFleet() {
  const [row, setRow] = useState(9);
  const pill37 = (h: number) => h >= 90 ? "#18a957" : h >= 70 ? "#5da85f" : h >= 50 ? "#f5a800" : h >= 30 ? "#e07b1f" : "#e0483e";
  return <Bo n="37" title="Predictive Maintenance - Fleet View" sub="Rank and monitor equipment health across all breweries, sites, and production lines. May 10 - May 17, 2024 (7D) - All Facilities. User as printed: Alex R., Maintenance Lead. Footer as printed: v1.0 - May 2025." dark={false} label="BrewOps predictive maintenance fleet view - interactive rebuild of Budweiser_37">
    <Stats items={[["Overall Fleet Health", "78%", "up 5% vs prior 7D"], ["Healthy Assets", "142", "up 12 vs prior 7D"], ["At Risk Assets", "38", "up 4 vs prior 7D"], ["Critical Assets", "7", "down 2 vs prior 7D"], ["MTBF (Hours)", "412", "up 18 vs prior 7D"], ["Open Work Orders", "52", "up 6 vs prior 7D"]]} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 218px", gap: 10, marginTop: 10, alignItems: "start" }}>
      <div>
        <table className="tks-table tks-table--micro"><thead><tr><th>Rank</th><th>Asset</th><th>Type</th><th>Facility / Line</th><th>Health</th><th>Trend (7D)</th><th>MTBF</th><th>Last Inspection</th><th>Anomalies</th></tr></thead>
          <tbody>{FLEET37.map((r2, i) => { const h = Number(r2[3].replace("%", "")); return <tr key={r2[0]} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#f3ead2" : undefined }}>
            <td>{i + 1}</td><td><b>{r2[0]}</b></td><td>{r2[1]}</td><td>{r2[2]}</td>
            <td><span style={{ background: pill37(h), color: "#fff", borderRadius: 999, padding: "1px 8px", fontWeight: 800, fontSize: 10 }}>{r2[3]}</span></td>
            <td><svg viewBox="0 0 44 14" style={{ width: 44, display: "block" }} aria-hidden="true"><polyline points={r2[6].includes("down") ? "1,3 12,5 22,6 32,9 43,12" : r2[6].includes("up") ? "1,11 12,9 22,8 32,5 43,2" : "1,7 12,7 22,6 32,7 43,7"} fill="none" stroke={pill37(h)} strokeWidth="1.8" /></svg><span style={{ fontSize: 8.8, color: "#8a93a0" }}>{r2[6]}</span></td>
            <td>{r2[4]}</td><td>{r2[5]}</td><td style={{ color: r2[7] === "None" ? "#8a93a0" : "#c8102e", fontWeight: r2[7] === "None" ? 400 : 700 }}>{r2[7]}</td></tr>; })}</tbody></table>
        <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 10.8 }}>Selected: <b>{FLEET37[row][0]}</b> — health {FLEET37[row][3]} — Showing 1 to 10 of 126 assets · 10 per page · pages 1–5 … 13 as printed.</p>
        <div className="tks-card" style={{ marginTop: 8 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Health Distribution</p>
          {[["Healthy (90–100%)", 22, "#18a957"], ["Good (70–89%)", 36, "#5da85f"], ["Fair (50–69%)", 28, "#f5a800"], ["Poor (30–49%)", 10, "#e07b1f"], ["Critical (0–29%)", 4, "#e0483e"]].map(([l, v, c]) => <p key={l as string} style={{ margin: "3px 0", display: "flex", gap: 7, alignItems: "center", fontSize: 10.5 }}><span style={{ width: 128 }}>{l}</span><span style={{ flex: 1, height: 8, background: "#eee9dc", borderRadius: 4 }}><span style={{ display: "block", height: 8, width: `${v}%`, background: c as string, borderRadius: 4 }} /></span><b>{v}%</b></p>)}
        </div>
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Maintenance Risk Summary — 45 At Risk Assets</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}><b style={{ color: "#c8102e" }}>Critical 7 (16%)</b> · <b style={{ color: "#b97a0c" }}>High 15 (33%)</b> · <b>Medium 23 (51%)</b></p>
          <p style={{ margin: "3px 0 0", fontSize: 10.8, lineHeight: 1.6 }}>Top Risk Drivers: Vibration anomalies · Rising temperature · Pressure variance · Runtime exceeded.</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Open Maintenance Risks — View all (7)</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>🔴 <b>Compressor 1 (CP-01)</b> vibration above threshold — Fort Collins, Utilities — CRITICAL — 10 min ago<br />🔴 <b>Boiler 2 (BLR-02)</b> tube temperature rising — Cartersville, Utilities — CRITICAL — 25 min ago<br />🟠 <b>Pump P-12</b> pressure variance detected — Los Angeles, Line 3 — WARNING — 45 min ago<br />🔵 <b>CIP Skid 2</b> maintenance window approaching — Newark, Utilities — INFO — 1 hr ago</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Upcoming Maintenance &amp; Recommended Actions</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>CIP Skid 2 — Preventive Maintenance — May 18, 8:00 AM — Newark<br />Miller 3 — Vibration Analysis — May 18, 10:00 AM — Cartersville<br />Brite Tank 8 — Inspection — May 19, 9:00 AM — Columbus</p>
          <p style={{ margin: "5px 0 0", fontSize: 10.8, lineHeight: 1.6 }}><b>Actions:</b> Inspect Compressor 1 bearings (High, Open) · Check Boiler 2 heat exchanger tubes (High, Open) · Replace Pump P-12 seals (Medium, Open)</p></div>
      </div>
    </div>
  </Bo>;
}

/* ---------------- 38 - Filler 2 asset detail ---------------- */
const SENSORS38: Array<[string, string, string, string, string, string]> = [
  ["VIB-02-DE", "Vibration RMS", "6.8 mm/s", "2.6 mm/s", "+161%", "High"],
  ["TEMP-02-DE", "Temperature", "78.2 °C", "72.1 °C", "+8.5%", "Medium"],
  ["PRES-02-DE", "Pressure", "2.1 bar", "2.0 bar", "+5.0%", "Normal"],
  ["MTR-02-AMP", "Motor Current", "12.4 A", "11.8 A", "+5.1%", "Normal"],
  ["SPEED-02", "Speed", "1,200 rpm", "1,200 rpm", "0%", "Normal"],
];
const HEALTH38: Array<[string, number]> = [["Mechanical", 68], ["Electrical", 90], ["Process", 85], ["Utilization", 87], ["Environment", 75]];
export function BrewOpsFiller2() {
  const [sensor, setSensor] = useState(0);
  const [alt, setAlt] = useState(0);
  const ALTS = [["Schedule maintenance within 7 days", "Next Best Action — Replace drive-end bearing on Filler 2 — Est. downtime: 2.5 hours — Create Work Order"], ["Monitor closely", "Increase monitoring for 7 days — Medium risk"], ["Plan during next PM window", "Schedule during next planned maintenance — Higher risk"], ["No action", "Risk of unplanned failure increases — Not recommended"]];
  const stCol = (s: string) => s === "High" ? "#c8102e" : s === "Medium" ? "#b97a0c" : "#18a957";
  return <BoX n="38" title="Filler 2 — Online" sub="Control Tower — Packaging Line 2 — Filler 2. Brew House Columbus — Asset ID: FLR-02. Last data received May 17, 2024 8:42 AM — Live. User as printed: Alex R., Reliability Engineer." dark={false} label="BrewOps Filler 2 asset detail - interactive rebuild of Budweiser_38">
    <HiFi active="Investigations">
      <div style={{ display: "flex", gap: 14, fontSize: 11, borderBottom: "1.5px solid #e7e2d9", paddingBottom: 6, marginBottom: 9 }}>
        {["Overview", "History", "Alerts (3)", "Work Orders (2)", "Documents"].map((t, i) => <span key={t} style={{ fontWeight: i === 0 ? 800 : 500, color: i === 0 ? "#c8102e" : "#5b6470", borderBottom: i === 0 ? "2.5px solid #c8102e" : "none", paddingBottom: 5 }}>{t}</span>)}
      </div>
      <Stats items={[["Health Score", "82% Healthy", "up 7% vs prior 7D"], ["RUL Estimate", "18 days", "Moderate risk — down 6 days"], ["Predicted Failure", "Jun 4, 2024", "± 3 days"], ["Utilization (7D)", "87.3%", "up 3.1% vs prior 7D"], ["OEE Impact (Est.)", "4.2%", "down 0.6% vs prior 7D"]]} />
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr 1fr", gap: 9, marginTop: 9, alignItems: "start" }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Sensor Trends — 7D</p>
          <svg viewBox="0 0 300 118" style={{ width: "100%", display: "block" }} role="img" aria-label="Sensor trends chart with anomaly window May 15 to 16">
            <rect x="150" y="8" width="62" height="86" fill="#e0483e" opacity="0.1" />
            <text x="152" y="17" fontSize="7.5" fill="#c8102e">Anomaly Window</text>
            <polyline points="8,66 50,64 92,65 134,63 160,44 182,30 204,22 236,26 268,20 292,24" fill="none" stroke="#e0483e" strokeWidth="2.2" />
            <polyline points="8,74 50,73 92,72 134,71 176,68 218,66 260,65 292,64" fill="none" stroke="#f5a800" strokeWidth="1.8" />
            <polyline points="8,82 50,81 92,82 134,80 176,81 218,80 260,81 292,80" fill="none" stroke="#2563eb" strokeWidth="1.8" />
            <line x1="8" y1="68" x2="292" y2="68" stroke="#8a93a0" strokeDasharray="4 3" />
            <text x="8" y="106" fontSize="7.5" fill="#8a93a0">May 11</text><text x="140" y="106" fontSize="7.5" fill="#8a93a0">May 15–16</text><text x="262" y="106" fontSize="7.5" fill="#8a93a0">May 17</text>
            <text x="8" y="116" fontSize="7.5" fill="#5b6470">— Vibration RMS · — Temperature · — Pressure · - - Baseline</text>
          </svg>
          <div style={{ background: "#fdf0ef", border: "1px solid #f0c6c2", borderRadius: 8, padding: "7px 10px", fontSize: 10.6, lineHeight: 1.55, marginTop: 4 }}>
            <b>⚠ Anomaly detected — May 16, 10:15 AM – Present:</b> Vibration RMS is 164% above baseline — Bearing defect pattern detected — Possible cause: Bearing wear.
          </div>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Sensor Summary</p>
          <table className="tks-table tks-table--micro"><thead><tr><th>Sensor</th><th>Measure</th><th>Latest</th><th>Baseline</th><th>Deviation</th><th>Status</th></tr></thead>
            <tbody>{SENSORS38.map((r2, i) => <tr key={r2[0]} onClick={() => setSensor(i)} style={{ cursor: "pointer", background: i === sensor ? "#f3ead2" : undefined }}><td>{r2[0]}</td><td>{r2[1]}</td><td><b>{r2[2]}</b></td><td>{r2[3]}</td><td>{r2[4]}</td><td style={{ color: stCol(r2[5]), fontWeight: 700 }}>{r2[5]}</td></tr>)}</tbody></table>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Asset Health Breakdown</p>
          {HEALTH38.map(([n, v]) => <p key={n} style={{ margin: "3px 0", display: "flex", gap: 7, alignItems: "center", fontSize: 10.6 }}><span style={{ width: 82 }}>{n}</span><span style={{ flex: 1 }}><Bar pct={v} label={`${n} health ${v} percent`} /></span><b>{v}%</b></p>)}
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Maintenance History — View all</p>
          <p style={{ margin: "5px 0", fontSize: 10.7, lineHeight: 1.55 }}><b>Apr 18, 2024</b> — Preventive Maintenance — Lubrication and inspection — Technician: Jamie D.</p>
          <p style={{ margin: "5px 0", fontSize: 10.7, lineHeight: 1.55 }}><b>Mar 12, 2024</b> — Work Order WO-2024-0312-0045 — Bearing replacement (Drive-end) — Technician: Morgan S.</p>
          <p style={{ margin: "5px 0", fontSize: 10.7, lineHeight: 1.55 }}><b>Feb 28, 2024</b> — Work Order WO-2024-0228-0021 — Vibration investigation — Technician: Taylor K.</p>
          <p style={{ margin: "5px 0", fontSize: 10.7, lineHeight: 1.55 }}><b>Feb 15, 2024</b> — Preventive Maintenance — Routine inspection — Technician: Alex R.</p>
          <p className="tks-kicker" style={{ margin: "10px 0 3px" }}>Evidence Sources — View all (7)</p>
          <p style={{ margin: "4px 0", fontSize: 10.7, lineHeight: 1.55 }}><b>Vibration Analysis</b> — Bearing defect pattern detected — May 17, 8:35 AM — High confidence</p>
          <p style={{ margin: "4px 0", fontSize: 10.7, lineHeight: 1.55 }}><b>Temperature Trend</b> — Elevated temperature trend — May 17, 8:30 AM — Medium confidence</p>
          <p style={{ margin: "4px 0", fontSize: 10.7, lineHeight: 1.55 }}><b>Oil Analysis</b> — Increased wear metals detected — May 16, 4:20 PM — High confidence</p>
        </div>
        <div style={{ background: "#fff", border: "1.5px solid #7c4dff", borderRadius: 11, padding: "9px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Recommendation — Generated 15 min ago</p>
          <p style={{ margin: "3px 0", fontSize: 11.3, lineHeight: 1.55 }}><b>Address bearing wear risk</b> — High confidence — Reduces risk of unplanned downtime.</p>
          <div style={{ display: "grid", gap: 5, marginTop: 7 }}>
            {ALTS.map(([t, d], i) => <button key={t} type="button" onClick={() => setAlt(i)} aria-pressed={i === alt} style={{ textAlign: "left", background: i === alt ? "#f3efff" : "#faf8f5", border: `1.5px solid ${i === alt ? "#7c4dff" : "#e7e2d9"}`, borderRadius: 8, padding: "6px 9px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
              <b style={{ fontSize: 10.8 }}>{i + 1}. {t}</b>{i === 0 ? <span style={{ background: "#7c4dff", color: "#fff", borderRadius: 4, padding: "0 6px", fontSize: 8.6, fontWeight: 800, marginLeft: 5 }}>NEXT BEST ACTION</span> : null}
              <span style={{ display: "block", fontSize: 9.9, color: "#5b6470", lineHeight: 1.5, marginTop: 2 }}>{d}</span>
            </button>)}
          </div>
          <p className="tks-kicker" style={{ margin: "10px 0 3px" }}>AI Insight — Based on similar assets</p>
          <p style={{ margin: 0, fontSize: 10.7, lineHeight: 1.55 }}>23% of similar fillers experienced failure within 21 days when vibration exceeded current levels. View similar cases.</p>
        </div>
      </div>
    </HiFi>
  </BoX>;
}

/* ---------------- 39 - Quality Inspection Flow ---------------- */
const QUEUE39: Array<[string, string, string, string, string, string, string]> = [
  ["ITM-2024-0517-0001", "Line 3", "Cap Seal Damage", "May 17, 8:42 AM", "92%", "Needs Review", "High"],
  ["ITM-2024-0517-0002", "Line 3", "Label Skew", "May 17, 8:41 AM", "87%", "Needs Review", "Medium"],
  ["ITM-2024-0517-0003", "Line 2", "Fill Level Low", "May 17, 8:40 AM", "79%", "Reviewed", "High"],
  ["ITM-2024-0517-0004", "Line 1", "Cap Missing", "May 17, 8:39 AM", "95%", "Escalated", "High"],
  ["ITM-2024-0517-0005", "Line 3", "Label Tear", "May 17, 8:38 AM", "81%", "Needs Review", "Medium"],
  ["ITM-2024-0517-0006", "Line 2", "Foreign Object", "May 17, 8:37 AM", "91%", "Reviewed", "High"],
  ["ITM-2024-0517-0007", "Line 3", "Cap Seal Damage", "May 17, 8:36 AM", "93%", "Needs Review", "High"],
  ["ITM-2024-0517-0008", "Line 1", "Fill Level Low", "May 17, 8:35 AM", "76%", "Reviewed", "Medium"],
];
export function BrewOpsQualityFlow() {
  const [item, setItem] = useState(0);
  const [verdict, setVerdict] = useState<string | null>(null);
  const [wf, setWf] = useState(1);
  const cur = QUEUE39[item];
  const WF = [["1. Detect", "AI inspection", "1,248 items"], ["2. Review", "Human verification", "86 items"], ["3. Resolved", "Approved / Escalated", "76 items"], ["4. Corrective Action", "CAPA / Prevent Recurrence", "5 actions"]];
  const stPill = (s: string) => s === "Needs Review" ? "#b97a0c" : s === "Escalated" ? "#c8102e" : "#2563eb";
  return <Bo n="39" title="Quality Inspection Flow" sub="Optional Quality Module - End-to-end defect detection, human verification, traceability, and corrective action. May 10 - May 17, 2024 (7D) - Brewery Columbus. User as printed: Alex R., Quality Manager." dark={false} label="BrewOps quality inspection flow - interactive rebuild of Budweiser_39">
    <div style={{ display: "grid", gridTemplateColumns: "132px 1fr 252px", gap: 10, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 6 }}>
        {WF.map(([t, d, n], i) => <button key={t} type="button" onClick={() => setWf(i)} aria-pressed={i === wf} style={{ textAlign: "left", background: i === wf ? "#102A43" : "#fff", color: i === wf ? "#fff" : "#141a21", border: `1.5px solid ${i === wf ? "#102A43" : "#ddd6c9"}`, borderRadius: 10, padding: "8px 10px", cursor: "pointer", font: "inherit" }}>
          <b style={{ fontSize: 11.5 }}>{t}</b><br /><span style={{ fontSize: 9.8, opacity: 0.85 }}>{d}</span><br /><b style={{ fontSize: 13 }}>{n}</b>{i < 3 ? <span aria-hidden="true" style={{ display: "block", textAlign: "center", opacity: 0.6 }}>↓</span> : null}
        </button>)}
      </div>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Inspection Queue (86) · Reviewed 76 · Escalated 10 · All Items 1,248</p>
        <table className="tks-table tks-table--micro"><thead><tr><th>Item ID</th><th>Line</th><th>Defect Type</th><th>Detected</th><th>AI Conf.</th><th>Status</th><th>Priority</th></tr></thead>
          <tbody>{QUEUE39.map((r2, i) => <tr key={r2[0]} onClick={() => { setItem(i); setVerdict(null); }} style={{ cursor: "pointer", background: i === item ? "#f3ead2" : undefined }}><td>{r2[0].replace("ITM-2024-", "")}</td><td>{r2[1]}</td><td>{r2[2]}</td><td>{r2[3]}</td><td><b>{r2[4]}</b></td><td><span style={{ background: stPill(r2[5]), color: "#fff", borderRadius: 999, padding: "0 7px", fontSize: 9.3, fontWeight: 700 }}>{r2[5]}</span></td><td style={{ color: r2[6] === "High" ? "#c8102e" : "#b97a0c", fontWeight: 700 }}>{r2[6]}</td></tr>)}</tbody></table>
        <p style={{ margin: "4px 0 0", fontSize: 10.3 }}>Showing 1 to 8 of 86 items · 10 per page · pages 1–5 … 9 as printed.</p>
        <div className="tks-card" style={{ marginTop: 8 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Traceability (item 0001 panel as printed)</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>Batch ID: BRW-0517-L3-0842 · Production Time: May 17, 2024 08:00–09:00 AM · Line / Equipment: Line 3 — Filler · Material Lot: CAP-ALU-0517-A · Downstream Impact: 2,340 units. View full traceability.</p>
          <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Recent Corrective Actions</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>Capper Torque Adjustment — Line 3 — May 16 — <b>Open</b> — Due in 2d · Seal Temperature Check — Line 2 — May 15 — <b>In Progress</b> — Due in 1d · Vision Sensor Cleaning — Line 1 — May 14 — <b>Resolved</b> — Completed</p>
        </div>
      </div>
      <div className="tks-card" aria-live="polite" style={{ borderColor: "#c8102e" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Defect Overview — {cur[0]} — {cur[5]} — 1 of 86</p>
        <p style={{ margin: "4px 0", fontSize: 11, lineHeight: 1.6 }}>Defect Type: <b>{cur[2]}</b><br />Line / Area: {cur[1]} · Detected: {cur[3]}<br />AI Confidence: <b>{cur[4]}</b> · Priority: {cur[6]}<br />Rule / Model: CapSeal_v2.3 (as printed for item 0001)</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, margin: "7px 0" }}>
          {["8:42:11", "8:42:10", "8:42:09", "8:42:08", "8:42:07", "+ 3 more", "", ""].slice(0, 6).map((t, i) => <span key={i} style={{ background: "linear-gradient(135deg,#3a3f47,#141a21)", color: "#cfd6de", borderRadius: 6, height: 40, display: "flex", alignItems: "flex-end", padding: 4, fontSize: 8.3 }}>🍾 {t}</span>)}
        </div>
        <p style={{ margin: 0, fontSize: 9.6, color: "#8a93a0" }}>Evidence captures for item 0001 (photographic — represented structurally).</p>
        <p className="tks-kicker" style={{ margin: "9px 0 2px" }}>Verification — Assign to: Jamie D.</p>
        <p style={{ margin: "3px 0", fontSize: 10.6, lineHeight: 1.6 }}>✓ Approved by Jamie D. — May 17, 8:45 AM<br />· Pending review — Assigned to Jamie D. — May 17, 8:42 AM<br />· Detected by AI — May 17, 8:42 AM<br /><span style={{ color: "#8a93a0" }}>(Item status prints as Needs Review while the history prints an approval — both as printed.)</span></p>
        <p style={{ display: "flex", gap: 5, margin: "8px 0 0", flexWrap: "wrap" }}>
          <button type="button" className="tks-btn" aria-pressed={verdict === "approve"} onClick={() => setVerdict("approve")} style={{ background: "#c8102e", borderColor: "#c8102e" }}>Approve</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={verdict === "escalate"} onClick={() => setVerdict("escalate")}>Escalate</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={verdict === "reject"} onClick={() => setVerdict("reject")}>Reject</button></p>
        <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>{verdict ? `Verification staged: ${verdict} for ${cur[0]} (explorer state; printed status: ${cur[5]}).` : ""}</p>
        <p className="tks-kicker" style={{ margin: "9px 0 2px" }}>Corrective Action</p>
        <p style={{ margin: "3px 0", fontSize: 10.6, lineHeight: 1.6 }}>Action Type: Select action type · Description: Describe the corrective action… · Assign to: Select owner · Target Date: Select date · <b>Create Action</b></p>
      </div>
    </div>
  </Bo>;
}

/* ---------------- 40 - Control Tower with Copilot panel ---------------- */
const PROMPTS40: Array<[string, string | null]> = [
  ["Why did OEE drop yesterday?", null],
  ["Show me the top causes of lost production", null],
  ["What's driving inventory risk this week?", null],
  ["Are we at risk of missing any deliveries?", null],
  ["Why did CO2 usage increase by 18% on Line 3 compared to last week?", null],
];
export function BrewOpsCopilotPanel() {
  const [q, setQ] = useState(4);
  const [open, setOpen] = useState(true);
  return <BoX n="40" title="Control Tower — with BrewOps Copilot panel" sub="The file-31 Control Tower (Brewery Columbus selected, May 10 – May 17, 2024) with the Copilot panel open at right." dark={false} label="BrewOps control tower with copilot - interactive rebuild of Budweiser_40">
    <div style={{ display: "grid", gridTemplateColumns: open ? "150px 1fr 250px" : "150px 1fr", gap: 10, alignItems: "start" }}>
      <Side31 active="Control Tower" />
      <CTDash compact />
      {open && <div style={{ background: "#fff", border: "1.5px solid #7c4dff", borderRadius: 13, padding: "10px 12px", color: "#141a21", fontSize: 11 }}>
        <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: 0 }}><b>✦ BrewOps Copilot</b><span style={{ display: "flex", gap: 5, alignItems: "center" }}><span style={{ background: "#7c4dff", color: "#fff", borderRadius: 4, padding: "0 6px", fontSize: 8.8, fontWeight: 800 }}>BETA</span><button type="button" className="tks-chip" aria-expanded={open} onClick={() => setOpen(false)}>✕</button></span></p>
        <p style={{ margin: "8px 0", lineHeight: 1.6 }}>{"Hi Alex! I'm your BrewOps Copilot. I can help you explore your operations, investigate issues, and uncover insights. What would you like to know?"}</p>
        <p style={{ margin: "6px 0", fontSize: 10, color: "#5b6470", background: "#f6f2ff", borderRadius: 7, padding: "5px 8px" }}>Scoped to your current context: Facility <b>Brewery Columbus</b> · Time range <b>May 10 – May 17, 2024 (7D)</b></p>
        <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Suggested prompts</p>
        <div style={{ display: "grid", gap: 4 }}>
          {PROMPTS40.slice(0, 4).map(([t], i) => <button key={t} type="button" onClick={() => setQ(i)} aria-pressed={i === q} style={{ textAlign: "left", background: i === q ? "#f3efff" : "#faf8f5", border: `1px solid ${i === q ? "#7c4dff" : "#e7e2d9"}`, borderRadius: 8, padding: "5px 8px", cursor: "pointer", font: "inherit", fontSize: 10.5, color: "#141a21" }}>{t}</button>)}
        </div>
        <div style={{ border: "1.5px solid #7c4dff", borderRadius: 10, padding: "7px 10px", marginTop: 9, fontSize: 10.8, lineHeight: 1.55 }}>{PROMPTS40[4][0]}</div>
        <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 9.8, color: "#5b6470" }}>{q === 4 ? "As printed, this question sits composed in the Copilot input box — no answer is shown on the slide, and none is invented here." : "As printed, this is a suggested prompt chip — no answer is shown on the slide for it."}</p>
        <p style={{ margin: "5px 0 0", fontSize: 9.6, color: "#8a93a0" }}>Copilot can make mistakes. Verify important information. (as printed)</p>
      </div>}
      {!open && <p style={{ margin: 0 }}><button type="button" className="tks-chip" aria-expanded={open} onClick={() => setOpen(true)}>Open Copilot panel</button></p>}
    </div>
  </BoX>;
}

/* ---------------- 41 - Copilot State Gallery ---------------- */
const STATES41: Array<{ name: string; desc: string; q: string; banner: string; obs: string; inf: string; infConf: string; rec: string; recConf: string; extra: ReactNode; guard: string }> = [
  { name: "1. Insufficient Data", desc: "Not enough reliable data to generate a confident answer.", q: "Why did OEE drop yesterday at Brewery Columbus?", banner: "Insufficient data to answer this question confidently. Key signals are missing or delayed.", obs: "OEE dropped to 78.3% on May 16, a 6.7% decrease vs prior day. Evidence (2)", inf: "Cannot determine root cause due to missing sensor data from Line 2 between 6:00 AM - 10:00 AM.", infConf: "Low - 28%", rec: "Wait for complete equipment and quality data.", recConf: "Low - 28%", extra: <p style={{ margin: 0 }}><b>{"Why I can't be sure:"}</b> 38% of Line 2 sensor data is missing during the event window - Quality lab results are delayed by 6+ hours - Maintenance logs are not yet updated for this period.</p>, guard: "I don't guess. I wait for reliable data to ensure accurate, safe decisions." },
  { name: "2. Conflicting Sources", desc: "Data sources disagree. Copilot surfaces conflicts and uncertainty.", q: "Is CO2 usage above target on Brew House Line 3?", banner: "Conflicting data detected across trusted sources. Interpret with caution.", obs: "CO2 usage yesterday was 3.21 kWh. Evidence (3)", inf: "CO2 usage may be within normal range.", infConf: "Medium - 62%", rec: "Validate flow meter calibration and re-check usage.", recConf: "Medium - 62%", extra: <p style={{ margin: 0 }}><b>Source conflict:</b> BrewOps Metering - Above target - 3.21 kWh (+2.7% vs target) - Utility Provider Feed - Within target - 2.98 kWh (-1.1% vs target). Conflict impact: Medium - Drivers: Meter variance (±7.4%), reporting lag (15 min).</p>, guard: "I show conflicts clearly so you can make informed decisions." },
  { name: "3. Approval Required", desc: "Recommended action has risk or cost - your approval is required.", q: "Should we reduce wort inlet temp on Line 3?", banner: "Recommended action identified. Your approval is required before taking action.", obs: "Wort inlet temp averaged 19.2 °C, above target of 18.0 °C. Evidence (4)", inf: "Elevated temperature may increase CO2 and impact yield.", infConf: "High - 86%", rec: "Reduce wort inlet temperature to 18.5 °C.", recConf: "High - 86%", extra: <p style={{ margin: 0 }}><b>Action:</b> Adjust setpoint on Line 3 wort inlet controller. Potential impact: -15% glycol flow, stabilize CO2 below 1.2%. <b>Approval required:</b> Action will be applied to Brew House - Line 3 - Est. impact: Lower CO2 usage -2.1%, ~ $1,240/day.</p>, guard: "Actions are taken only with your approval and clear accountability." },
];
export function BrewOpsCopilotStates() {
  const [s, setS] = useState(0);
  const [approved, setApproved] = useState(false);
  const bannerCols = ["#b97a0c", "#e07b1f", "#18a957"];
  return <Bo n="41" title="BrewOps Copilot State Gallery" sub={"The printed title spells it \"State Gailery\" — transcribed as printed. The Copilot responds with appropriate transparency and guardrails based on data confidence and decision context. Legend: Observation (What was detected) · Inference (What it likely means) · Recommendation (What we suggest) · Action (What was taken)."} dark={false} label="BrewOps copilot state gallery - interactive rebuild of Budweiser_41">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      {STATES41.map((cur, i) => <button key={cur.name} type="button" onClick={() => { setS(i); setApproved(false); }} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#7c4dff" : "#ddd6c9"}`, borderRadius: 12, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: "#f6f2ff", borderBottom: "1px solid #e4dcff", padding: "7px 11px" }}>
          <b style={{ fontSize: 11.8 }}>{cur.name}</b><br /><span style={{ fontSize: 9.9, color: "#5b6470", lineHeight: 1.45 }}>{cur.desc}</span>
        </span>
        <span style={{ display: "block", padding: "9px 11px" }}>
          <span style={{ display: "block", textAlign: "right" }}><span style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: "11px 11px 3px 11px", padding: "5px 9px", fontSize: 10.3, maxWidth: "92%", textAlign: "left" }}>{cur.q}</span></span>
          <span style={{ display: "block", background: bannerCols[i], color: "#fff", borderRadius: 7, padding: "6px 9px", fontSize: 10.4, fontWeight: 700, lineHeight: 1.5, margin: "8px 0" }}>{cur.banner}</span>
          <span style={{ display: "block", border: "1px solid #eee9dc", borderRadius: 8, padding: "6px 9px", fontSize: 10.2, lineHeight: 1.55, marginBottom: 5 }}><b>◉ Observation</b> — {cur.obs}</span>
          <span style={{ display: "block", border: "1px solid #eee9dc", borderRadius: 8, padding: "6px 9px", fontSize: 10.2, lineHeight: 1.55, marginBottom: 5 }}><b>◎ Inference</b> — {cur.inf}<br /><span style={{ color: "#5b6470" }}>Confidence: {cur.infConf}</span></span>
          <span style={{ display: "block", border: "1px solid #eee9dc", borderRadius: 8, padding: "6px 9px", fontSize: 10.2, lineHeight: 1.55, marginBottom: 5 }}><b>➤ Recommendation</b> — {cur.rec}<br /><span style={{ color: "#5b6470" }}>Confidence: {cur.recConf}</span></span>
          <span style={{ display: "block", fontSize: 10.2, lineHeight: 1.55 }}>{cur.extra}</span>
          <span style={{ display: "block", background: "#faf8f5", borderRadius: 7, padding: "6px 9px", fontSize: 10, lineHeight: 1.55, marginTop: 7 }}><b>Copilot guardrails:</b> {cur.guard}</span>
          {i === 2 ? <span style={{ display: "flex", gap: 5, marginTop: 8 }}><span className="tks-btn tks-btn--ghost" style={{ fontSize: 10.5 }}>Review details</span><span role="button" tabIndex={0} aria-pressed={approved} onClick={(e) => { e.stopPropagation(); setApproved((v) => !v); }} onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); setApproved((v) => !v); } }} className="tks-btn" style={{ background: "#5b3df0", borderColor: "#5b3df0", fontSize: 10.5 }}>{approved ? "✓ Action approved" : "Approve action"}</span></span> : null}
          <span style={{ display: "block", fontSize: 9.6, color: "#8a93a0", marginTop: 8 }}>Ask a follow-up question or adjust your request… (as printed)</span>
        </span>
      </button>)}
    </div>
  </Bo>;
}

/* ---------------- 42 - Outcome scorecard ---------------- */
const OUTCOMES42: Array<[string, string, string, string, string]> = [
  ["Deployable status", "Ready for pilot", "The BrewOps Intelligence demonstrator is deployable to the pilot environment.", "Release checklist", "May 17, 2024"],
  ["Expert review completion", "100% (6 / 6)", "All planned SME reviews completed across design, data, and domain validation.", "Review log", "May 16, 2024"],
  ["Accessibility conformance", "WCAG 2.1 AA Conformant", "All critical and serious issues resolved. No known violations at AA level.", "Accessibility audit", "May 15, 2024"],
  ["Technical test completion", "182 / 182 tests passed", "All automated and manual tests passed across functional, integration, and regression suites.", "Test report", "May 16, 2024"],
  ["Task-level usability score", "92% Success rate", "Users successfully completed key analytical tasks with high confidence.", "Usability study", "May 15, 2024"],
  ["Scenario-evaluation coverage", "24 / 24 Scenarios covered", "All targeted operational scenarios executed and validated successfully.", "Evaluation report", "May 17, 2024"],
];
export function BrewOpsScorecard() {
  const [o, setO] = useState(3);
  return <BoX n="42" serif title="Outcome scorecard" sub="Verified evidence of impact from the BrewOps Intelligence demonstrator. Verified by evidence. Not estimated. All measures below are backed by documented evidence or system-derived data. As of May 17, 2024." dark={false} label="BrewOps outcome scorecard - interactive rebuild of Budweiser_42">
    <div style={{ display: "grid", gridTemplateColumns: "168px 1fr 190px", gap: 10, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Outcome Summary</p>
          <b style={{ fontSize: 26, color: "#137a3f" }}>6 / 6</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.6, lineHeight: 1.55 }}>Verified outcomes — all outcome measures have verified evidence.</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px", fontSize: 10.6, lineHeight: 1.6 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Legend</p>
          <p style={{ margin: 0 }}><span style={{ color: "#137a3f" }}>●</span> <b>Verified evidence</b> — backed by documented proof or system data<br /><span style={{ color: "#b97a0c" }}>●</span> <b>Projected value</b> — estimated based on early signals and industry benchmarks</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
        {OUTCOMES42.map(([name, val, desc, src, date], i) => <button key={name} type="button" onClick={() => setO(i)} aria-pressed={i === o} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === o ? "#137a3f" : "#e7e2d9"}`, borderRadius: 11, padding: "10px 12px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 5 }}><b style={{ fontSize: 11.8 }}>{name}</b><span style={{ color: "#137a3f", fontSize: 10 }}>✓ Verified</span></span>
          <b style={{ display: "block", fontSize: 17, color: "#137a3f", margin: "4px 0" }}>{val}</b>
          <span style={{ display: "block", fontSize: 10.5, lineHeight: 1.55, color: "#4a5462" }}>{desc}</span>
          <span style={{ display: "block", borderTop: "1px solid #eee9dc", marginTop: 7, paddingTop: 5, fontSize: 9.6, color: "#8a93a0" }}>Source: {src} · Date: {date}</span>
        </button>)}
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#fff8ec", border: "1px solid #ecd9ac", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Projected Impact — Tracking Post-Launch</p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}>Business impact and adoption metrics will be reported after pilot deployment.</p>
          <p style={{ margin: "6px 0 0", fontSize: 10.8 }}><b>Next Update: June 14, 2024</b> — Post-pilot outcomes and business impact will be published.</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px", fontSize: 10.8, lineHeight: 1.6 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>About This Scorecard</p>
          <p style={{ margin: 0 }}>Measures reflect the current state of the BrewOps Intelligence demonstrator as of May 17, 2024. Future value will be tracked post-launch.</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 10.3, color: "#8a93a0" }}>BrewOps Intelligence Design System — v1.0 — May 2025 (footer as printed).</p>
  </BoX>;
}

/* ---------------- 43 - System Architecture ---------------- */
const LAYERS43: Array<[string, string, string[]]> = [
  ["Frontend Layer", "Web Applications", ["Control Tower - Operational overview & real-time alerts", "Investigations - Root cause analysis & workflow", "Insights - AI-driven insights & recommendations", "Reports - Operational & compliance reports", "Admin Console - User, role & system administration"]],
  ["API Layer", "Secure & Versioned", ["API Gateway - Authentication, rate limiting, routing, request validation", "GraphQL / REST APIs - Unified access to platform capabilities"]],
  ["Data Adapter Layer", "Ingestion & Orchestration", ["Streaming Ingestion - Kafka / Event Hub", "Batch Ingestion - Scheduled / On-demand", "File Ingestion - SFTP / Object Upload", "API Connectors - Enterprise Connectors", "Data Validation - Schema, Quality, Rules"]],
  ["Analytics & Model Services", "Intelligence Engine", ["Real-time Analytics - Streaming KPIs & Alerts", "AI / ML Models - Anomaly Detection, Prediction, NLP", "Business Logic - Rules, Scoring, Calculations", "Recommendation Service - AI-driven Next Best Actions", "Workflow Engine - Automations & Approvals"]],
  ["Retrieval & Context Layer", "Knowledge & Search", ["Semantic Search - Vector Search (Embeddings)", "Context Service - User, Asset, Time, Process Context", "Knowledge Graph - Entities, Relationships, Lineage", "RAG Orchestrator - Retrieve, Augment, Generate", "Cache Layer - Redis / In-Memory Cache"]],
  ["Storage Layer", "", ["Data Lake - S3 / ADLS", "Time Series DB - InfluxDB / Timestream", "Operational DB - PostgreSQL", "Vector DB - Pinecone / pgvector", "File Storage - S3 / Blob Storage"]],
];
export function BrewOpsArchitecture() {
  const [l, setL] = useState(3);
  const bandCols = ["#2563eb", "#0e7c86", "#e07b1f", "#7c4dff", "#18a957", "#455a64"];
  return <BoX n="43" serif title="BrewOps Intelligence System Architecture" sub="Secure, scalable, and observable architecture for real-time brewing intelligence." dark={false} label="BrewOps system architecture - interactive rebuild of Budweiser_43">
    <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 9 }}>
      {[["SECURE", "Zero trust by default"], ["SCALABLE", "Built for growth and resilience"], ["REAL-TIME", "Stream, analyze, act"], ["INTELLIGENT", "AI-powered insights and automation"]].map(([t, d]) => <span key={t} style={{ border: "1px solid #ddd6c9", background: "#fff", borderRadius: 999, padding: "3px 11px", fontSize: 10.5 }}><b>{t}</b> · {d}</span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "172px 1fr 196px", gap: 10, alignItems: "start" }}>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>External Data Sources</p>
        <ul style={{ margin: 0, paddingLeft: 14, fontSize: 10.5, lineHeight: 1.65 }}>
          <li><b>Brewery Systems</b> (DCS, PLC, Historian, MES, SCADA)</li><li><b>Lab Systems</b> (LIMS, Quality Results, Microbiology)</li><li><b>Enterprise Systems</b> (ERP, CMMS, Work Orders, Inventory, HR)</li><li><b>IoT &amp; Edge Devices</b> (Sensors, Gateways, Edge Collectors)</li><li><b>External Data</b> (Weather, Utility Rates, Market Data)</li><li><b>Files &amp; Documents</b> (SOPs, Batch Records, Manual Logs)</li>
        </ul>
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        {LAYERS43.map(([name, tag, items], i) => <button key={name} type="button" onClick={() => setL(i)} aria-pressed={i === l} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === l ? bandCols[i] : "#e7e2d9"}`, borderLeft: `6px solid ${bandCols[i]}`, borderRadius: 10, padding: "7px 11px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
          <span style={{ display: "flex", justifyContent: "space-between", gap: 6 }}><b style={{ fontSize: 12 }}>{name}</b>{tag ? <span style={{ fontSize: 9.8, color: bandCols[i], fontWeight: 700 }}>{tag}</span> : null}</span>
          <span style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 5 }}>{items.map((x) => <span key={x} style={{ background: "#faf8f5", border: "1px solid #eee9dc", borderRadius: 6, padding: "3px 7px", fontSize: 9.6, lineHeight: 1.45 }}>{x}</span>)}</span>
        </button>)}
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Cross-Cutting Services</p>
          <p style={{ margin: 0, fontSize: 10.5, lineHeight: 1.65 }}>Notification Service (Email, SMS, In-App, Webhooks) · Feature Flags (Rollout &amp; Experimentation) · Configuration Service (Centralized Config) · Data Quality Service (Monitoring &amp; Rules) · Job Scheduler (Airflow / Temporal) · Backup &amp; DR (Backup, Restore, Disaster Recovery)</p>
        </div>
        <div style={{ background: "#102A43", color: "#dbe5f0", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0, color: "#f5c86b" }}>Platform Foundations</p>
          <p style={{ margin: 0, fontSize: 10.4, lineHeight: 1.65 }}><b style={{ color: "#fff" }}>Authorization &amp; Security:</b> Identity Provider (OIDC / SAML) · RBAC / ABAC · MFA &amp; SSO · Secrets Management · Row &amp; Field Level Security<br /><b style={{ color: "#fff" }}>Observability &amp; Operations:</b> Logging (ELK / OpenSearch) · Metrics (Prometheus / Grafana) · Tracing (OpenTelemetry) · Alerting &amp; Incident Management · Audit Logs<br /><b style={{ color: "#fff" }}>Deployment &amp; Infrastructure:</b> Deployed on AWS (Multi-AZ) · VPC &amp; Networking · EKS (Kubernetes) · Auto Scaling · CI/CD (GitHub Actions) · IaC (Terraform) · Monitoring (CloudWatch) · WAF &amp; Security (DDoS, Firewall, Shield)</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 10.8, display: "flex", gap: 14, flexWrap: "wrap" }}><span><b>Legend:</b> → Data Flow · - -&gt; Control / Config Flow · ┄ Observability / Logs</span><span style={{ marginLeft: "auto", color: "#8a93a0" }}>v1.0 — May 2025 (footer as printed)</span></p>
  </BoX>;
}

/* ---------------- 44 - Data Flow Sequence ---------------- */
const FLOW44: Array<[string, string, string, string, string]> = [
  ["1. Alert Generation", "Anomaly or condition detected by monitoring rules or ML models in real time.", "Example (CRITICAL): CO2 levels above control limit on Line 3. Brew House - Line 3 - 2 min ago.", "Monitoring & Detection - Sensors, Historian, Rules Engine, ML Models. Data flow: Telemetry & Events (Real-time sensor data and system events).", "Anomaly detected and alert triggered"],
  ["2. Alert Routing", "Alert is enriched, prioritized, and routed to the right queue and stakeholders.", "Routing: Priority Critical - Queue Line 3 Ops - Stakeholders JD / MS / TR.", "Alert Management - Alert Router, Prioritization Engine, Notification Service. Data flow: Enriched Alert (Alert payload with context, priority, and routing info).", "Alert delivered to the right people, on time"],
  ["3. Evidence Retrieval", "System automatically collects relevant context, telemetry, and historical evidence.", "Evidence Retrieved: Sensor Trends - Work Orders - Lab Results - Historian Data. 7 items retrieved.", "Data & Context Services - Historian, CMMS, LIMS, Work Orders, IoT, MES. Data flow: Evidence Bundle (Structured data + trends + historical context).", "Complete context assembled automatically"],
  ["4. Recommendation Creation", "AI/Rules engine analyzes evidence and generates recommended actions with confidence.", "Top Recommendation: Check CO2 sensor calibration and seal integrity. Confidence 78%.", "AI & Rules Engine - Analytics Models, Rules Engine, Knowledge Base. Data flow: Recommendation (Suggested actions with rationale and confidence).", "Actionable recommendation with confidence"],
  ["5. User Review & Approval", "Operator reviews evidence and recommendation, adds notes, and approves or requests changes.", "Decision: Reviewed by Jamie D. (JD) - Decision: Approved - Notes: Proceed with calibration check.", "Web / Mobile UI - Operator Portal, Review Workspace, Notifications. Data flow: Decision Payload (Approval, notes, actions, and assignments).", "Informed decision by operator"],
  ["6. Action Execution", "Approved action is assigned or executed. Tasks are created and status is tracked.", "Action Created: WO-2024-0517-0892 - Seal replacement - Line 3 - Assignee: Taylor R. (TR) - Status: In Progress.", "Task & Execution - Work Management, Task Engine, Execution Service. Data flow: Action Record (Task/work order created, status in progress).", "Action initiated and tracked"],
  ["7. Data Persistence & State Update", "All decision data, actions, and outcomes are persisted across systems and states are updated.", "Persisted: Action Log - Alert State - Work Order - Audit Record. All systems updated.", "Data Platform - Operational DB, Data Lake, State Store, Integration Layer. Data flow: Persisted State (Updated records and system state).", "Systems synchronized and state updated"],
  ["8. Audit & Traceability", "Immutable audit trail captured for compliance, traceability, and continuous improvement.", "Audit Logged: Event ID AUD-2024-0517-1201 - User Jamie D. - Time May 17, 12:01 PM - View audit log.", "Audit & Compliance - Audit Service, Immutable Log, Compliance Reporting. Data flow: Audit Record (Immutable log of all actions and decisions).", "Full traceability and compliance"],
];
export function BrewOpsDataFlow() {
  const [s, setS] = useState(0);
  const stepCols = ["#e0483e", "#e07b1f", "#f5a800", "#18a957", "#0e7c86", "#2563eb", "#7c4dff", "#455a64"];
  return <BoX n="44" serif title="Data Flow Sequence" sub="From alert to action: End-to-end operational flow — the CO2 Line 3 alert is threaded through all 8 steps as the worked example." dark={false} label="BrewOps data flow sequence - interactive rebuild of Budweiser_44">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 6, alignItems: "start" }}>
      {FLOW44.map(([t, desc, example, systems, outcome], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? stepCols[i] : "#e7e2d9"}`, borderTop: `5px solid ${stepCols[i]}`, borderRadius: 10, padding: "7px 8px", cursor: "pointer", font: "inherit", color: "#141a21", position: "relative" }}>
        {i < 7 ? <span aria-hidden="true" style={{ position: "absolute", right: -8, top: 12, color: "#8a93a0", zIndex: 2, fontSize: 10 }}>→</span> : null}
        <b style={{ display: "block", fontSize: 10.8, lineHeight: 1.35 }}>{t}</b>
        <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.5, color: "#4a5462", marginTop: 4 }}>{desc}</span>
        <span style={{ display: "block", background: "#faf8f5", border: "1px solid #eee9dc", borderRadius: 6, padding: "5px 6px", fontSize: 9, lineHeight: 1.5, marginTop: 6 }}><b style={{ color: stepCols[i] }}>EXAMPLE</b><br />{example}</span>
        <span style={{ display: "block", fontSize: 8.9, lineHeight: 1.5, color: "#5b6470", marginTop: 6 }}>{systems}</span>
        <span style={{ display: "block", borderTop: `2px solid ${stepCols[i]}`, marginTop: 6, paddingTop: 4, fontSize: 9.2, fontWeight: 700, lineHeight: 1.45 }}>✓ {outcome}</span>
      </button>)}
    </div>
    <div style={{ background: "#102A43", color: "#fff", borderRadius: 10, padding: "9px 13px", marginTop: 10 }}>
      <b style={{ fontSize: 11.5 }}>Flow Principles</b>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 9, marginTop: 5, fontSize: 10.2, lineHeight: 1.55 }}>
        <p style={{ margin: 0 }}><b>End-to-end visibility</b> — Track every step from signal to resolution</p>
        <p style={{ margin: 0 }}><b>Right information, right time</b> — Surface the most relevant context automatically</p>
        <p style={{ margin: 0 }}><b>Human-in-the-loop</b> — Keep operators in control with clear recommendations</p>
        <p style={{ margin: 0 }}><b>Trusted &amp; traceable</b> — Every action is logged, auditable, and compliant</p>
        <p style={{ margin: 0 }}><b>Continuous improvement</b> — Capture outcomes to improve models and processes</p>
      </div>
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.5, color: "#5b6470" }}>Legend: Detect · Route · Retrieve · Recommend · Act · Audit — CLARITY · FOCUS · TRUST · SPEED, as across the foundations boards. v1.0 — May 2025 (footer as printed).</p>
  </BoX>;
}

/* ---------------- 45 - BrewOps in Action (bw-43) ---------------- */
const KPIS45: Array<[string, string, string]> = [
  ["Total Production (HL)", "24,560", "up 8.4% vs prior 7D"],
  ["OEE", "87.3%", "up 3.1% vs prior 7D"],
  ["On-Time Delivery", "92.1%", "up 2.8% vs prior 7D"],
  ["Inventory Health", "78%", "down 5% vs prior 7D"],
  ["Critical Alerts", "3", "up 2 vs prior 7D"],
];
export function BrewOpsInAction() {
  const [k, setK] = useState(0);
  const [checks, setChecks] = useState<boolean[]>([true, true, true, true]);
  const CHECKS = ["Type Safe", "Accessible", "Themed", "Tested"];
  const code45 = [
    "import React from 'react';",
    "import { Card, CardContent } from '@/components/ui/card';",
    "import { TrendUp, TrendDown } from 'lucide-react';",
    "import { cn } from '@/lib/utils';",
    "",
    "export type KpiCardProps = {",
    "  title: string;",
    "  value: string | number;",
    "  delta: number;",
    "  deltaLabel: string;",
    "  trend: 'up' | 'down' | 'neutral';",
    "  icon?: React.ReactNode;",
    "  chart?: React.ReactNode;",
    "  className?: string;",
    "};",
    "",
    "export const KpiCard: React.FC<KpiCardProps> = ({",
    "  title, value, delta, deltaLabel,",
    "  trend, icon, chart, className }) => {",
    "  const isUp = trend === 'up';",
    "  const isDown = trend === 'down';",
    "  return (",
    "    <Card className={cn('relative overflow-hidden', className)}>",
    "      <CardContent className=\"p-4\"> … </CardContent>",
    "    </Card>",
    "  );",
    "};",
  ];
  return <Bo n="45" title="BrewOps Intelligence in Action" sub="From real-time insights to real results. Built with reusable components, consistent patterns, and production-ready code. Case Study — bw-43-code-and-ui-proof." dark={false} label="BrewOps in action code proof - interactive rebuild of Budweiser_45">
    <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 11, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Live dashboard — the file-31 Control Tower, rendered by the component</p>
        <div style={{ border: "1px solid #e0d9c8", borderRadius: 12, padding: 9, background: "#faf8f5" }}>
          <CTDash compact />
        </div>
        <p style={{ margin: "8px 0 0", fontSize: 10.8 }}>The printed KPI cards (select to inspect the rendered card):</p>
        <Chips items={KPIS45.map(([t]) => t)} value={k} onPick={setK} />
        <div className="tks-card" aria-live="polite" style={{ marginTop: 7 }}><p className="tks-kicker" style={{ marginTop: 0 }}>{KPIS45[k][0]}</p><b style={{ fontSize: 21 }}>{KPIS45[k][1]}</b><p style={{ margin: "3px 0 0", fontSize: 10.8 }}>{KPIS45[k][2]} — rendered with the printed props: title, value, delta, deltaLabel, trend, icon and chart slots — exactly the KpiCardProps contract in the code panel.</p></div>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ background: "#0d1520", borderRadius: 12, padding: "11px 0 26px", overflow: "hidden" }}>
          <p style={{ margin: "0 13px 7px", fontSize: 10.3, color: "#9fb4c8", fontFamily: "ui-monospace, monospace" }}>KpiCard.tsx — TSX (as printed, abridged)</p>
          <ol style={{ margin: 0, padding: "0 10px 0 36px", fontFamily: "ui-monospace, monospace", fontSize: 9.4, lineHeight: 1.6, color: "#d7e3ee" }}>
            {code45.map((ln, i) => <li key={i} style={{ whiteSpace: "pre" }}>{ln || " "}</li>)}
          </ol>
        </div>
        <div style={{ position: "absolute", right: 12, bottom: -14, background: "#fff", border: "1.5px solid #18a957", borderRadius: 11, boxShadow: "0 10px 24px rgba(17,17,17,0.18)", padding: "9px 13px", width: 218 }}>
          <p style={{ margin: 0, display: "flex", gap: 6, alignItems: "center" }}><span style={{ background: "#18a957", color: "#fff", borderRadius: "50%", width: 19, height: 19, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>✓</span><b style={{ fontSize: 12.5 }}>Production Ready</b></p>
          <p style={{ display: "flex", gap: 4, flexWrap: "wrap", margin: "7px 0 0" }}>{CHECKS.map((c2, i) => <button key={c2} type="button" className="tks-chip" aria-pressed={checks[i]} onClick={() => setChecks((v) => v.map((x, j) => (j === i ? !x : x)))} style={{ fontSize: 9.8 }}>{checks[i] ? "✓ " : ""}{c2}</button>)}</p>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 9.8, color: "#5b6470" }}>{checks.filter(Boolean).length} / 4 qualities checked on the printed panel. Built with BrewOps UI.</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "22px 0 0", fontSize: 10.8 }}>BrewOps Intelligence Design System v1.0 — May 2024 (as printed).</p>
  </Bo>;
}

/* ---------------- 46 - BW-44 Quality Evidence ---------------- */
const SUITES46: Array<[string, number, number, number, number, string]> = [
  ["Unit Tests", 142, 139, 2, 1, "1m 42s"], ["Component Tests", 86, 82, 1, 3, "2m 18s"], ["Integration Tests", 76, 72, 3, 1, "4m 21s"], ["API Contract Tests", 38, 37, 0, 1, "2m 05s"], ["E2E Tests", 20, 14, 6, 0, "6m 47s"],
];
const PACTS46: Array<[string, string, string, string]> = [
  ["bi-ingestion-svc", "bi-web", "Ingestion API v1", "412 ms"], ["bi-ingestion-svc", "data-quality-svc", "Quality Events v1", "356 ms"], ["bi-notification-svc", "bi-web", "Alerts API v1", "289 ms"], ["bi-auth-svc", "bi-web", "Auth API v2", "301 ms"], ["bi-config-svc", "bi-web", "Config API v1", "276 ms"],
];
const CILOG46: string[] = [
  "2024-05-17T08:41:02Z [INFO] Pipeline started for bw-44-quality-evidence",
  "2024-05-17T08:41:05Z [INFO] Checkout commit 7f3a9c1",
  "2024-05-17T08:41:09Z [INFO] Node 20.11.1 - npm ci",
  "2024-05-17T08:41:32Z [INFO] Lint & static analysis - Passed",
  "2024-05-17T08:41:58Z [INFO] Unit tests - Passed (142/142)",
  "2024-05-17T08:43:40Z [INFO] Component tests - Passed (82/86)",
  "2024-05-17T08:45:58Z [INFO] Integration tests - Passed (72/76)",
  "2024-05-17T08:48:03Z [INFO] API contract tests - Passed (38/38)",
  "2024-05-17T08:50:50Z [INFO] E2E tests - Completed (14 passed, 6 failed)",
  "2024-05-17T08:50:50Z [WARN] E2E: 6 tests flaky - quarantined and non-blocking",
  "2024-05-17T08:51:12Z [INFO] Build application - Success",
  "2024-05-17T08:51:48Z [INFO] Docker image built: abbev/bw-44:20240517.42",
  "2024-05-17T08:52:21Z [INFO] Deploy to STAGING - Success",
  "2024-05-17T08:52:45Z [INFO] Smoke tests - Passed",
  "2024-05-17T08:52:47Z [INFO] Pipeline completed successfully",
];
export function BrewOpsQualityEvidence() {
  const [suite, setSuite] = useState(4);
  const panel46: React.CSSProperties = { background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" };
  const scoreRing = (v: number) => <span style={{ display: "inline-flex", width: 44, height: 44, borderRadius: "50%", background: `conic-gradient(#18a957 ${v}%, #e8e4da ${v}%)`, alignItems: "center", justifyContent: "center" }}><span style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>{v}</span></span>;
  return <Bo n="46" title="BW-44: Quality Evidence" sub="Proof of quality across testing, accessibility, performance, contracts, and deployment. DATE: May 17, 2024 8:42 AM CDT — ENVIRONMENT: Staging (Preview) — BUILD: #20240517.42, Commit 7f3a9c1 — TRIGGERED BY: alex.r@abbev.com, CI Pipeline (all as printed)." dark={false} label="BrewOps BW-44 quality evidence - interactive rebuild of Budweiser_46">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignItems: "start" }}>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>1 · Automated Tests</p>
        <Stats items={[["Total", "362"], ["Passed", "344 · 95.0%"], ["Failed", "12 · 3.3%"], ["Skipped", "6 · 1.7%"], ["Duration", "17m 13s"]]} />
        <table className="tks-table tks-table--micro" style={{ marginTop: 8 }}><thead><tr><th>Suite</th><th>Tests</th><th>Passed</th><th>Failed</th><th>Skipped</th><th>Duration</th></tr></thead>
          <tbody>{SUITES46.map(([n, t, p2, f, sk, d], i) => <tr key={n} onClick={() => setSuite(i)} style={{ cursor: "pointer", background: i === suite ? "#f3ead2" : undefined }}><td>{n}</td><td>{t}</td><td>{p2}</td><td style={{ color: f > 0 ? "#c8102e" : undefined }}>{f}</td><td>{sk}</td><td>{d}</td></tr>)}<tr><td><b>TOTAL</b></td><td><b>362</b></td><td><b>344</b></td><td><b>12</b></td><td><b>6</b></td><td><b>17m 13s</b></td></tr></tbody></table>
        <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>Selected: <b>{SUITES46[suite][0]}</b> — {SUITES46[suite][2]} of {SUITES46[suite][1]} passed. The CI log prints per-suite counts differently (e.g. Unit tests — Passed (142/142)) — both as printed.</p>
      </div>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>2 · Accessibility (axe-core)</p>
        <p style={{ margin: 0, display: "flex", gap: 10, alignItems: "center" }}>{scoreRing(96)}<span style={{ fontSize: 11, lineHeight: 1.6 }}><b>Overall Score 96 / 100 — Good — AA</b><br />WCAG 2.1 AA · Last scan: May 17, 2024 8:35 AM<br />Issues: <b>0 Critical · 2 Serious · 7 Moderate · 12 Minor</b></span></p>
        <p style={{ margin: "7px 0 0", fontSize: 10.8, lineHeight: 1.65 }}><b>Top issues:</b> Buttons must have discernible text (2, Serious) · Color contrast ratio is insufficient (4, Moderate) · Form elements must have labels (3, Moderate) · Links should have discernible text (2, Minor). View full accessibility report.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>3 · Performance (Lighthouse)</p>
        <p style={{ margin: 0, display: "flex", gap: 12 }}>{[["Performance", 98], ["Accessibility", 97], ["Best Practices", 100], ["SEO", 93]].map(([l, v]) => <span key={l as string} style={{ textAlign: "center" }}>{scoreRing(v as number)}<span style={{ display: "block", fontSize: 9.3, color: "#5b6470", marginTop: 2 }}>{l}</span></span>)}</p>
        <table className="tks-table tks-table--micro" style={{ marginTop: 8 }}><thead><tr><th>Metric</th><th>This Run</th><th>Previous</th><th>Change</th></tr></thead><tbody>
          <tr><td>First Contentful Paint</td><td>0.8 s</td><td>1.1 s</td><td>↓ 27%</td></tr><tr><td>Largest Contentful Paint</td><td>1.2 s</td><td>1.6 s</td><td>↓ 25%</td></tr><tr><td>Total Blocking Time</td><td>40 ms</td><td>90 ms</td><td>↓ 56%</td></tr><tr><td>Cumulative Layout Shift</td><td>0.03</td><td>0.07</td><td>↓ 57%</td></tr><tr><td>Speed Index</td><td>1.3 s</td><td>1.8 s</td><td>↓ 28%</td></tr></tbody></table>
        <p style={{ margin: "5px 0 0", fontSize: 10.3 }}>Device: Mobile · Network: 4G · Throttling: Moderate (as printed).</p>
      </div>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>4 · API Contracts (Pact)</p>
        <Stats items={[["Pacts Verified", "100%"], ["Total Pacts", "38"], ["Verified", "38"], ["Failed", "0"], ["Pending", "0"]]} />
        <table className="tks-table tks-table--micro" style={{ marginTop: 8 }}><thead><tr><th>Provider</th><th>Consumer</th><th>Pact</th><th>Result</th><th>Duration</th></tr></thead>
          <tbody>{PACTS46.map(([p2, c2, pact, d]) => <tr key={pact}><td>{p2}</td><td>{c2}</td><td>{pact}</td><td style={{ color: "#137a3f", fontWeight: 700 }}>✓ Verified</td><td>{d}</td></tr>)}</tbody></table>
        <p style={{ margin: "5px 0 0", fontSize: 10.3 }}>View all pact results (as printed).</p>
        <p className="tks-kicker" style={{ margin: "10px 0 3px" }}>Environment &amp; Deployment</p>
        <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.65 }}>Commit 7f3a9c1 (View diff) · Image abbev/bw-44:20240517.42 · Deployed May 17, 8:52 AM (CDT) · By CI Pipeline (GitHub Actions)<br /><b>Progression:</b> ✓ Build → ✓ Test → ✓ Security Scan → ✓ Deploy Staging → ✓ Smoke Tests → ✓ Complete<br /><b>Health checks:</b> /health 200 OK 98 ms · /ready 200 OK 102 ms · /metrics 200 OK 110 ms — <b>Staging Healthy</b>, all systems operational.</p>
      </div>
      <div style={{ background: "#0d1117", borderRadius: 11, padding: "10px 0", overflow: "hidden" }}>
        <p style={{ margin: "0 13px 7px", fontSize: 10.3, color: "#8b949e", fontFamily: "ui-monospace, monospace" }}>5 · CI / Deployment Log (excerpt) — Pipeline: Success</p>
        <ol style={{ margin: 0, padding: "0 10px 0 36px", fontFamily: "ui-monospace, monospace", fontSize: 9.2, lineHeight: 1.65, color: "#c9d1d9" }}>{CILOG46.map((line) => <li key={line} style={{ whiteSpace: "pre-wrap" }}>{line}</li>)}</ol>
        <p style={{ margin: "7px 13px 2px", fontSize: 10, color: "#8b949e" }}>Artifacts: test-report.html · coverage/lcov.info · pact/ · lighthouse.json</p>
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 10.3, color: "#8a93a0" }}>v1.0 — May 2025 (footer as printed).</p>
  </Bo>;
}

/* ---------------- 47 - Usability Test Plan ---------------- */
const TASKS47: Array<[string, string, string]> = [
  ["Detect an issue", "Identify a brewing issue from alerts", "Alerts -> Investigation -> Insight"],
  ["Investigate root cause", "Drill into evidence and validate root cause", "Investigation -> Evidence -> Confidence"],
  ["Take action", "Create and approve a corrective action", "Actions -> Approvals -> Implementation"],
  ["Monitor outcome", "Confirm the issue is resolved", "Data -> Trend -> Resolved"],
  ["Share findings", "Add a comment and share an update", "Comments -> Notifications"],
];
const CRITERIA47: Array<[string, string, string]> = [
  ["Task success rate", "Participants complete the task as intended", "Percentage of participants completing each task"],
  ["Time on task", "Efficiency of completing key tasks", "Average time compared to benchmark"],
  ["Critical errors", "Major missteps that prevent task completion", "Count of critical errors per task"],
  ["SUS score", "Overall usability perception", "System Usability Scale (0-100)"],
  ["Participant satisfaction", "Overall experience with the demonstrator", "Post-session rating (1-5)"],
  ["Learnability", "How easy it is to learn and use", "Qualitative feedback and observations"],
];
const TARGETS47: Array<[string, string]> = [["Task success rate", ">= 80%"], ["Time on task (avg.)", "Within benchmark"], ["Critical errors", "<= 1 per task"], ["SUS score (avg.)", ">= 70 (Good)"], ["Participant satisfaction", ">= 4 of 5"], ["Learnability", "Positive qualitative feedback"]];
export function BrewOpsUsabilityPlan() {
  const [t, setT] = useState(0);
  return <BoX n="47" serif title="Evaluating the BrewOps demonstrator" sub="USABILITY TEST PLAN — This plan outlines how we will evaluate the usability of the BrewOps Intelligence demonstrator with real users in realistic contexts. This is a plan with targets — not test results." dark={false} label="BrewOps usability test plan - interactive rebuild of Budweiser_47">
    <div style={{ display: "grid", gridTemplateColumns: "196px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Participants — 8–10 total</p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.7 }}>Brewery Operators <b>4–5</b><br />Quality Analysts <b>2–3</b><br />Shift Leads / Supervisors <b>2–2</b> (range as printed)<br />Data / Reliability Engineers <b>1–2</b></p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Method</p>
          <p style={{ margin: 0, fontSize: 10.8, fontWeight: 700 }}>Moderated remote sessions — 45–60 minutes per session</p>
          <ul style={{ margin: "5px 0 0", paddingLeft: 14, fontSize: 10.6, lineHeight: 1.6 }}><li>One-on-one, moderated usability sessions using the BrewOps demonstrator</li><li>Think-aloud protocol and structured tasks</li><li>Sessions recorded for analysis</li><li>Post-task System Usability Scale (SUS) and open feedback</li></ul>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Limitations (as printed)</p>
          <ul style={{ margin: 0, paddingLeft: 14, fontSize: 10.6, lineHeight: 1.6 }}><li>Demonstrator data is synthetic and may not reflect all real-world scenarios.</li><li>Short sessions limit long-term workflow observation.</li><li>Small sample size may not represent all user groups.</li><li>Remote sessions may affect how users interact compared to on-site use.</li><li>Findings will inform iterative improvements, not final product validation.</li></ul>
        </div>
      </div>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Test Tasks</p>
        <table className="tks-table"><thead><tr><th>#</th><th>Task</th><th>Scenario</th><th>Primary Flow</th></tr></thead>
          <tbody>{TASKS47.map(([n, sc, fl], i) => <tr key={n} onClick={() => setT(i)} style={{ cursor: "pointer", background: i === t ? "#f3ead2" : undefined }}><td>{i + 1}</td><td><b>{n}</b></td><td>{sc}</td><td>{fl}</td></tr>)}</tbody></table>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 10, marginTop: 10, alignItems: "start" }}>
          <div>
            <p className="tks-kicker" style={{ marginTop: 0 }}>Success Criteria Details</p>
            <table className="tks-table tks-table--micro"><thead><tr><th>Criteria</th><th>Definition</th><th>How We Measure</th></tr></thead><tbody>{CRITERIA47.map(([a, b, c2]) => <tr key={a}><td><b>{a}</b></td><td>{b}</td><td>{c2}</td></tr>)}</tbody></table>
          </div>
          <div style={{ background: "#f2faf4", border: "1px solid #bfe3cc", borderRadius: 11, padding: "10px 12px" }}>
            <p className="tks-kicker" style={{ marginTop: 0 }}>Targets (as printed)</p>
            {TARGETS47.map(([m, tg]) => <p key={m} style={{ margin: "4px 0", fontSize: 10.8, display: "flex", gap: 6 }}><span style={{ color: "#137a3f", fontWeight: 800 }}>✓</span><span style={{ flex: 1 }}>{m}</span><b>{tg}</b></p>)}
          </div>
        </div>
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 10.3, color: "#8a93a0" }}>v1.0 — May 2025 (footer as printed).</p>
  </BoX>;
}

/* ---------------- 48 - Findings Priority Matrix ---------------- */
const FINDINGS48: Array<[string, number, number]> = [
  ["Critical alerts not visible on Overview", 4.7, 4.6],
  ["Filters hard to find and apply", 4.1, 4.2],
  ["Investigation flow not intuitive", 4.0, 3.8],
  ["KPI context unclear", 3.6, 2.6],
  ["Evidence citations hard to scan", 2.9, 3.6],
  ["Mobile experience needs work", 2.4, 4.1],
  ["Terminology inconsistency", 2.7, 2.2],
  ["Trend charts lack comparison", 3.8, 1.8],
  ["Empty states lack guidance", 1.6, 1.9],
  ["Export options not obvious", 1.8, 2.8],
];
function quadrant48(sev: number, freq: number): string {
  if (sev >= 3 && freq >= 3) return "High Priority - High frequency, high severity - Address first";
  if (sev >= 3 && freq < 3) return "Monitor - Low frequency, high severity - Monitor and evaluate";
  if (sev < 3 && freq >= 3) return "Medium Priority - High frequency, low severity - Plan and address";
  return "Low Priority - Low frequency, low severity - Consider if time permits";
}
export function BrewOpsFindingsMatrix() {
  const [f, setF] = useState(0);
  const cur = FINDINGS48[f];
  const printedBand = f < 3 ? "High Priority" : f < 6 ? "Medium Priority" : f < 8 ? "Monitor" : "Low Priority";
  const px = (fr: number) => 44 + ((fr - 1) / 4) * 252;
  const py = (sev: number) => 196 - ((sev - 1) / 4) * 168;
  const dotCol = (i: number) => i < 3 ? "#c8102e" : i < 6 ? "#e07b1f" : i < 8 ? "#8a93a0" : "#18a957";
  return <BoX n="48" serif title="Findings Priority Matrix" sub="Expert review of BrewOps Intelligence v1.0 — May 17, 2024. Focus on what matters most: prioritize improvements based on user impact (severity) and how often the issue occurs (frequency). Plot represents average severity and frequency scores from expert review (1–5 scale)." dark={false} label="BrewOps findings priority matrix - interactive rebuild of Budweiser_48">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 218px", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
        <svg viewBox="0 0 330 224" style={{ width: "100%", display: "block" }} role="img" aria-label="Severity by frequency scatter plot of ten findings">
          <rect x="44" y="28" width="126" height="84" fill="#f5a800" opacity="0.1" />
          <rect x="170" y="28" width="126" height="84" fill="#e0483e" opacity="0.13" />
          <rect x="44" y="112" width="126" height="84" fill="#8a93a0" opacity="0.08" />
          <rect x="170" y="112" width="126" height="84" fill="#18a957" opacity="0.08" />
          <text x="176" y="40" fontSize="8" fill="#c8102e" fontWeight="700">HIGH PRIORITY</text>
          <text x="50" y="40" fontSize="8" fill="#8a6d1f" fontWeight="700">MONITOR</text>
          <text x="176" y="190" fontSize="8" fill="#4a7a58" fontWeight="700">MEDIUM PRIORITY</text>
          <text x="50" y="124" fontSize="8" fill="#5b6470" fontWeight="700">LOW PRIORITY</text>
          {[1, 2, 3, 4, 5].map((v) => <g key={v}><line x1={px(v)} y1="28" x2={px(v)} y2="196" stroke="#e3ded2" /><line x1="44" y1={py(v)} x2="296" y2={py(v)} stroke="#e3ded2" /><text x={px(v) - 2} y="210" fontSize="8" fill="#8a93a0">{v}</text><text x="34" y={py(v) + 3} fontSize="8" fill="#8a93a0">{v}</text></g>)}
          <line x1="44" y1="196" x2="296" y2="196" stroke="#8a93a0" /><line x1="44" y1="28" x2="44" y2="196" stroke="#8a93a0" />
          <text x="120" y="222" fontSize="8.5" fill="#5b6470">Frequency (Occurrence) →</text>
          <text x="12" y="120" fontSize="8.5" fill="#5b6470" transform="rotate(-90 12 120)">Severity (Impact) →</text>
          {FINDINGS48.map(([name, sev, fr], i) => <g key={name} onClick={() => setF(i)} style={{ cursor: "pointer" }}>
            <circle cx={px(fr)} cy={py(sev)} r={i === f ? 11 : 9.5} fill={dotCol(i)} stroke={i === f ? "#102A43" : "#fff"} strokeWidth={i === f ? 2.4 : 1.6} />
            <text x={px(fr)} y={py(sev) + 3.4} fontSize="9" fill="#fff" fontWeight="800" textAnchor="middle">{i + 1}</text>
          </g>)}
        </svg>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 12px", marginTop: 7 }}>
          {FINDINGS48.map(([name, sev, fr], i) => <button key={name} type="button" onClick={() => setF(i)} aria-pressed={i === f} style={{ textAlign: "left", background: i === f ? "#fdf3e0" : "transparent", border: "none", borderRadius: 6, padding: "3px 6px", cursor: "pointer", font: "inherit", fontSize: 10.2, color: "#141a21" }}><span style={{ display: "inline-flex", width: 15, height: 15, borderRadius: "50%", background: dotCol(i), color: "#fff", fontSize: 9, fontWeight: 800, alignItems: "center", justifyContent: "center", marginRight: 5 }}>{i + 1}</span>{name} <span style={{ color: "#8a93a0" }}>({sev} / {fr})</span></button>)}
        </div>
        <p aria-live="polite" style={{ margin: "7px 0 0", fontSize: 10.8 }}><b>Finding {f + 1}: {cur[0]}</b> — Severity {cur[1]} / 5 · Frequency {cur[2]} / 5 · Printed band: <b>{printedBand}</b> · Quadrant by position: {quadrant48(cur[1], cur[2])}.</p>
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#fff", border: "1.5px solid #c8102e", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Top 3 Changes to Prioritize</p>
          <p style={{ margin: "4px 0", fontSize: 10.8, lineHeight: 1.6 }}><b>1. Surface critical alerts prominently</b> — Move critical alerts above the fold on Overview with clear visual hierarchy. <b style={{ color: "#c8102e" }}>High Priority</b></p>
          <p style={{ margin: "4px 0", fontSize: 10.8, lineHeight: 1.6 }}><b>2. Improve filter discoverability</b> — Make filters more visible and accessible across all key views. <b style={{ color: "#c8102e" }}>High Priority</b></p>
          <p style={{ margin: "4px 0", fontSize: 10.8, lineHeight: 1.6 }}><b>3. Simplify investigation flow</b> — Streamline steps to find root cause and recommended actions. <b style={{ color: "#c8102e" }}>High Priority</b></p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px", fontSize: 10.4, lineHeight: 1.65 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Scales (as printed)</p>
          <p style={{ margin: 0 }}><b>Severity:</b> 5 Very High (Critical) · 4 High (Major) · 3 Medium (Moderate) · 2 Low (Minor) · 1 Very Low (Negligible)<br /><b>Frequency:</b> 1 Rare (&lt; 5% of users) · 2 Uncommon (5–20%) · 3 Occasional (20–50%) · 4 Frequent (50–80%) · 5 Very Frequent (&gt; 80%)</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px", fontSize: 10.4, lineHeight: 1.65 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Legend</p>
          <p style={{ margin: 0 }}><span style={{ color: "#c8102e" }}>●</span> High Priority (Address immediately)<br /><span style={{ color: "#e07b1f" }}>●</span> Medium Priority (Plan and address)<br /><span style={{ color: "#8a93a0" }}>●</span> Monitor (Evaluate and monitor)<br /><span style={{ color: "#18a957" }}>●</span> Low Priority (Address if time permits)<br />Focus resources on high-priority items first.</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 10.3, color: "#8a93a0" }}>v1.0 — May 2025 (footer as printed).</p>
  </BoX>;
}

/* ---------------- 49 - Iteration #47 ---------------- */
const ALERTS49: Array<[string, string, string, string, string]> = [
  ["CO2 levels above control limit on Line 3.", "Brew House - Line 3", "CRITICAL", "2 min ago - Detected by: CO2 Sensor - Line 3", "Take action"],
  ["Unusual CO2 usage detected.", "Brew House - Utilities", "WARNING", "15 min ago - Detected by: CO2 Monitor", "Investigate"],
  ["New data available for Packaging Line 2.", "Packaging - Line 2", "INFO", "45 min ago - Data source: Historian", "View data"],
  ["Seal failure investigation closed.", "Fermentation - Tank 12", "RESOLVED", "1 hr ago - Closed by: Jamie D.", "View report"],
];
export function BrewOpsIteration47() {
  const [a, setA] = useState(0);
  const labels49 = ["High Priority", "Investigation Needed", "FYI", "Resolved"];
  const sev49 = ["#c8102e", "#b97a0c", "#2563eb", "#18a957"];
  return <BoX n="49" serif title="Iteration #47: Improve alert clarity and actionability" sub="Refining the Alert / Risk Queue to reduce cognitive load and drive faster, confident action. BrewOps Intelligence Design System v1.0 - May 2024." dark={false} label="BrewOps iteration 47 alert clarity - interactive rebuild of Budweiser_49">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#f4f1ea", border: "1px solid #ddd6c9", borderRadius: 12, padding: "11px 13px" }}>
        <b style={{ fontSize: 13, color: "#a31621" }}>BEFORE — Alert / Risk Queue · View all (7)</b>
        <p style={{ margin: "2px 0 8px", fontSize: 10.6, color: "#5b6470" }}>Information is harder to scan and prioritize.</p>
        <div style={{ display: "grid", gap: 7 }}>
          {ALERTS49.map(([msg, loc, sev, meta], i) => <button key={msg} type="button" onClick={() => setA(i)} aria-pressed={i === a} style={{ textAlign: "left", background: "#fff", border: `1px solid ${i === a ? "#a31621" : "#e2ddd0"}`, borderRadius: 8, padding: "8px 10px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
            <span style={{ display: "block", fontSize: 9.6, fontWeight: 800, letterSpacing: "0.07em", color: sev49[i], marginBottom: 4 }}>{labels49[i].toUpperCase()}</span>
            <b style={{ display: "block", fontSize: 11.3, lineHeight: 1.45 }}>{msg}</b>
            <span style={{ display: "block", fontSize: 9.8, color: "#5b6470", marginTop: 3 }}>{loc} · {sev} · {meta.split(" - ")[0]}</span>
          </button>)}
        </div>
        <p className="tks-kicker" style={{ margin: "11px 0 3px", color: "#c8102e" }}>What was challenging</p>
        <ul style={{ margin: 0, paddingLeft: 15, fontSize: 10.8, lineHeight: 1.6 }}><li>{"No consistent hierarchy — hard to find what's most important"}</li><li>Status is separated from the main message</li><li>No clear next step — users must open items to act</li></ul>
      </div>
      <div style={{ background: "#fff", border: "1.5px solid #102A43", borderRadius: 12, padding: "11px 13px" }}>
        <b style={{ fontSize: 13, color: "#102A43" }}>AFTER — Alert / Risk Queue · View all (7)</b>
        <p style={{ margin: "2px 0 8px", fontSize: 10.6, color: "#5b6470" }}>Clear hierarchy, status, and actions enable faster response.</p>
        <div style={{ display: "grid", gap: 7 }}>
          {ALERTS49.map(([msg, loc, sev, meta, action], i) => <button key={msg} type="button" onClick={() => setA(i)} aria-pressed={i === a} style={{ textAlign: "left", background: "#fff", border: `1px solid ${i === a ? "#102A43" : "#e2ddd0"}`, borderLeft: `5px solid ${sev49[i]}`, borderRadius: 8, padding: "8px 10px", cursor: "pointer", font: "inherit", color: "#141a21", display: "flex", gap: 9, alignItems: "center" }}>
            <span style={{ flex: 1 }}>
              <b style={{ display: "block", fontSize: 11.3, lineHeight: 1.45 }}>{msg}</b>
              <span style={{ display: "block", fontSize: 9.8, color: "#5b6470", marginTop: 3 }}><span style={{ background: sev49[i], color: "#fff", borderRadius: 4, padding: "0 6px", fontWeight: 800, fontSize: 8.8 }}>{sev}</span> {loc} · {meta}</span>
            </span>
            <span style={{ background: "#102A43", color: "#fff", borderRadius: 7, padding: "5px 10px", fontSize: 10, fontWeight: 700, flex: "none" }}>{action}</span>
          </button>)}
        </div>
        <p className="tks-kicker" style={{ margin: "11px 0 3px" }}>What improved — Impact</p>
        <ul style={{ margin: 0, paddingLeft: 15, fontSize: 10.8, lineHeight: 1.6 }}><li>Clear priority indicators and left accent bars for instant scanning</li><li>Status and key context inline with the alert for faster understanding</li><li>Action-oriented buttons make the next step obvious</li></ul>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginTop: 8 }}>
          {[["Faster triage", "~32% reduction in time to acknowledge"], ["Better focus", "Alerts addressed in priority order"], ["Higher confidence", "Clear actions reduce ambiguity"]].map(([l, v]) => <span key={l} style={{ background: "#102A43", color: "#fff", borderRadius: 8, padding: "6px 9px" }}><b style={{ display: "block", fontSize: 10.6 }}>{l}</b><span style={{ fontSize: 9.4, opacity: 0.85, lineHeight: 1.45 }}>{v}</span></span>)}
        </div>
      </div>
    </div>
  </BoX>;
}

/* ---------------- 50 - Technical results ---------------- */
const TECH50: Array<[string, string, Array<[string, string, string]>]> = [
  ["Performance (Measured)", "Avg. response time 1.28s (down 68% vs baseline - Baseline: 4.02s) - P95 response time 2.31s (down 61% - Baseline: 5.94s) - Throughput 248 req/min (up 3.2x - Baseline: 78 req/min) - Data freshness 2.7 min (down 85% - Baseline: 18.4 min). Day average (P95): Baseline 5.12s - Demonstrator 2.31s - 61% improvement (the panel prints the P95 baseline as both 5.94s and 5.12s - as printed).", [["Avg. response time", "1.28s", "Baseline 4.02s"], ["P95 response time", "2.31s", "Baseline 5.94s"], ["Throughput", "248 req/min", "Baseline 78 req/min"], ["Data freshness", "2.7 min", "Baseline 18.4 min"]]],
  ["Reliability (Measured)", "Uptime over 7 days chart (May 11 - May 17) and incident summary as printed.", [["Uptime (7d)", "99.92%", "up 0.27pp vs target - Target: 99.65%"], ["Error rate", "0.16%", "down 72% vs baseline - Baseline: 0.56%"], ["MTTR", "18.6 min", "down 58% vs baseline - Baseline: 44.2 min"], ["Incident rate", "0.22 /day", "down 60% vs baseline - Baseline: 0.55 /day"], ["Incidents (7d)", "Total 16", "P0 (Critical) 0 - P1 (High) 2 - P2 (Medium) 5 - P3 (Low) 9"]]],
  ["Accessibility (Measured)", "WCAG 2.1 AA Conformance - 96% Pass rate - up 16pp vs baseline - Baseline: 80%. View full audit report.", [["Perceivable", "98%", ""], ["Operable", "95%", ""], ["Understandable", "97%", ""], ["Robust", "94%", ""]]],
  ["Test Coverage (Measured)", "Coverage trend May 11 - May 17 as printed.", [["Total coverage", "82%", "Baseline: 68%"], ["Unit tests", "88%", ""], ["Integration tests", "76%", ""], ["E2E tests", "71%", ""], ["Visual regression", "85%", ""]]],
  ["Model & Heuristic Evaluation (Observed)", "Scored by domain experts and pilot users across 50+ scenarios.", [["Insight relevance (LLM)", "0.86", "Benchmark > 0.70"], ["Explanation helpfulness", "0.81", "Benchmark > 0.70"], ["Recommendation quality", "0.79", "Benchmark > 0.70"], ["Alert precision", "0.91", "Benchmark > 0.80"], ["Alert recall", "0.82", "Benchmark > 0.75"], ["Overall usefulness (SUS)", "84 /100", "Benchmark > 68"]]],
  ["User & Adoption Signals (Observed)", "Quote as printed: \"The demonstrator significantly reduces time to insight and helps our teams act with greater confidence.\" - Packaging Line Manager.", [["Pilot users", "24", ""], ["Avg. weekly use", "36.5 hrs", ""], ["Tasks completed in UI", "87%", ""], ["User satisfaction (Avg. rating)", "4.6 / 5", ""]]],
  ["Environment, Scale & Load", "Environment & Setup (Observed): Cloud AWS (us-east-1) - Services 23 microservices - Data sources 12 - Time range May 11 - May 17, 2024 - Build v0.9.0-demo.17. Scale & Load (Simulated) as printed.", [["Concurrent users (Simulated)", "150", ""], ["Peak load (Simulated)", "600 req/min", ""]]],
];
export function BrewOpsTechnicalResults() {
  const [s, setS] = useState(0);
  const panel50: React.CSSProperties = { background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" };
  return <BoX n="50" serif title="Technical results" sub="Measurable outcomes from the BrewOps Intelligence demonstrator." dark={false} label="BrewOps technical results - interactive rebuild of Budweiser_50">
    <div style={{ display: "grid", gridTemplateColumns: "148px 1fr", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#102A43", borderRadius: 11, padding: "11px 9px", display: "grid", gap: 2 }}>
        {["Overview", "Visual Foundations", "Component Library", "Technical Results", "Evaluation Summary", "Learnings"].map((nv) => <span key={nv} style={{ color: nv === "Technical Results" ? "#fff" : "#a9bccd", background: nv === "Technical Results" ? "rgba(255,255,255,0.13)" : "transparent", borderRadius: 7, padding: "5px 9px", fontSize: 10.6, fontWeight: nv === "Technical Results" ? 700 : 500 }}>{nv}</span>)}
        <p style={{ margin: "9px 4px 0", fontSize: 9.6, color: "#7e93ab", lineHeight: 1.6 }}><b style={{ color: "#dbe5f0" }}>Legend</b><br />Measured — collected from system or users<br />Observed — validated in demo or pilot sessions<br />Simulated — modeled or estimated for comparison<br /><br />© 2024 Anheuser-Busch (as printed)</p>
      </div>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
          {TECH50.slice(0, 6).map(([title, summary, metrics], pi) => <button key={title} type="button" onClick={() => setS(pi)} aria-pressed={pi === s} style={{ ...panel50, textAlign: "left", cursor: "pointer", font: "inherit", color: "#141a21", border: pi === s ? "1.5px solid #102A43" : panel50.border }}>
            <b style={{ fontSize: 12.3 }}>{title}</b>
            <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginTop: 7 }}>
              {metrics.map(([k, v, d]) => <span key={k} style={{ background: "#faf8f5", border: "1px solid #eee9dc", borderRadius: 7, padding: "5px 8px" }}><span style={{ display: "block", fontSize: 9.2, color: "#8a93a0" }}>{k}</span><b style={{ fontSize: 14.5 }}>{v}</b>{d ? <span style={{ display: "block", fontSize: 9, color: "#137a3f" }}>{d}</span> : null}</span>)}
            </span>
            <span style={{ display: "block", fontSize: 9.9, lineHeight: 1.55, color: "#5b6470", marginTop: 7 }}>{summary}</span>
            {pi === 0 ? <svg viewBox="0 0 260 40" style={{ width: "100%", display: "block", marginTop: 6 }} role="img" aria-label="Response time over time P95, baseline versus demonstrator"><polyline points="4,8 40,10 76,9 112,11 148,9 184,10 220,9 252,10" fill="none" stroke="#e0483e" strokeWidth="1.8" /><polyline points="4,26 40,28 76,25 112,29 148,26 184,28 220,26 252,27" fill="none" stroke="#18a957" strokeWidth="1.8" /><text x="196" y="7" fontSize="7" fill="#e0483e">Baseline P95</text><text x="182" y="38" fontSize="7" fill="#18a957">Demonstrator P95 · 00:00–24:00</text></svg> : null}
            {pi === 1 ? <span style={{ display: "flex", gap: 3, marginTop: 6 }}>{["May 11", "May 12", "May 13", "May 14", "May 15", "May 16", "May 17"].map((d) => <span key={d} style={{ flex: 1, background: "#18a957", color: "#fff", borderRadius: 5, padding: "3px 0", textAlign: "center", fontSize: 8.6 }}>{d.replace("May ", "5/")} ✓</span>)}</span> : null}
          </button>)}
        </div>
        <div style={{ ...panel50, marginTop: 9 }}>
          <b style={{ fontSize: 12.3 }}>{TECH50[6][0]}</b>
          <p style={{ margin: "4px 0 0", fontSize: 10.6, lineHeight: 1.65 }}>{TECH50[6][1]}</p>
          <p style={{ margin: "5px 0 0", display: "flex", gap: 12, fontSize: 10.8 }}>{TECH50[6][2].map(([k, v]) => <span key={k}>{k}: <b>{v}</b></span>)}</p>
        </div>
        <p style={{ margin: "9px 0 0", fontSize: 10.6, lineHeight: 1.6 }}><b>Notes &amp; Methodology:</b> Measured metrics collected from the demonstrator in a controlled pilot environment. Observed metrics gathered from user sessions and expert reviews. Simulated metrics modeled using historical baselines and capacity planning. View methodology details (as printed). Note: the Performance panel prints the P95 baseline as both 5.94s and 5.12s — transcribed as printed.</p>
        <p style={{ margin: "7px 0 0", fontSize: 10, color: "#8a93a0" }}>BrewOps Intelligence — Design System v1.0 (footer as printed).</p>
      </div>
    </div>
  </BoX>;
}

/* ---------------- Dispatcher ---------------- */
export function brewOpsChapterFor(file: string): ReactNode | null {
  if (file.startsWith("Budweiser_01")) return <BrewOpsCover />;
  if (file.startsWith("Budweiser_02")) return <BrewOpsBeforeAfter />;
  if (file.startsWith("Budweiser_03")) return <BrewOpsTimeline />;
  if (file.startsWith("Budweiser_04")) return <BrewOpsPanorama />;
  if (file.startsWith("Budweiser_05")) return <BrewOpsLatency />;
  if (file.startsWith("Budweiser_06")) return <BrewOpsAudit />;
  if (file.startsWith("Budweiser_07")) return <BrewOpsOwnership />;
  if (file.startsWith("Budweiser_08")) return <BrewOpsPainMatrix />;
  if (file.startsWith("Budweiser_09")) return <BrewOpsOpportunities />;
  if (file.startsWith("Budweiser_10")) return <BrewOpsRoleMap />;
  if (file.startsWith("Budweiser_11")) return <BrewOpsContactSheet />;
  if (file.startsWith("Budweiser_12")) return <BrewOpsObjectModel />;
  if (file.startsWith("Budweiser_13")) return <BrewOpsFramework2023 />;
  if (file.startsWith("Budweiser_14")) return <BrewOpsChatbot2023 />;
  if (file.startsWith("Budweiser_15")) return <BrewOpsResearch />;
  if (file.startsWith("Budweiser_16")) return <BrewOpsStoryboard />;
  if (file.startsWith("Budweiser_17")) return <BrewOpsHandoff />;
  if (file.startsWith("Budweiser_18")) return <BrewOpsPrinciples />;
  if (file.startsWith("Budweiser_19")) return <BrewOpsScopeMap />;
  if (file.startsWith("Budweiser_20")) return <BrewOpsIA />;
  if (file.startsWith("Budweiser_21")) return <BrewOpsDecisionFlow />;
  if (file.startsWith("Budweiser_22")) return <BrewOpsTokens />;
  if (file.startsWith("Budweiser_23")) return <BrewOpsAnnotatedShell />;
  if (file.startsWith("Budweiser_24")) return <BrewOpsWireframeWall />;
  if (file.startsWith("Budweiser_25")) return <BrewOpsDashboardComparison />;
  if (file.startsWith("Budweiser_26")) return <BrewOpsScenarioWireflow />;
  if (file.startsWith("Budweiser_27")) return <BrewOpsDecisionLog />;
  if (file.startsWith("Budweiser_28")) return <BrewOpsVisualFoundations />;
  if (file.startsWith("Budweiser_29")) return <BrewOpsComponentLibrary />;
  if (file.startsWith("Budweiser_30")) return <BrewOpsDataViz />;
  if (file.startsWith("Budweiser_31")) return <BrewOpsControlTower />;
  if (file.startsWith("Budweiser_32")) return <BrewOpsCopilotFull />;
  if (file.startsWith("Budweiser_33")) return <BrewOpsControlTowerExplained />;
  if (file.startsWith("Budweiser_34")) return <BrewOpsDemandRisk />;
  if (file.startsWith("Budweiser_35")) return <BrewOpsLogisticsScenarios />;
  if (file.startsWith("Budweiser_36")) return <BrewOpsRecommendation />;
  if (file.startsWith("Budweiser_37")) return <BrewOpsMaintenanceFleet />;
  if (file.startsWith("Budweiser_38")) return <BrewOpsFiller2 />;
  if (file.startsWith("Budweiser_39")) return <BrewOpsQualityFlow />;
  if (file.startsWith("Budweiser_40")) return <BrewOpsCopilotPanel />;
  if (file.startsWith("Budweiser_41")) return <BrewOpsCopilotStates />;
  if (file.startsWith("Budweiser_42")) return <BrewOpsScorecard />;
  if (file.startsWith("Budweiser_43")) return <BrewOpsArchitecture />;
  if (file.startsWith("Budweiser_44")) return <BrewOpsDataFlow />;
  if (file.startsWith("Budweiser_45")) return <BrewOpsInAction />;
  if (file.startsWith("Budweiser_46")) return <BrewOpsQualityEvidence />;
  if (file.startsWith("Budweiser_47")) return <BrewOpsUsabilityPlan />;
  if (file.startsWith("Budweiser_48")) return <BrewOpsFindingsMatrix />;
  if (file.startsWith("Budweiser_49")) return <BrewOpsIteration47 />;
  if (file.startsWith("Budweiser_50")) return <BrewOpsTechnicalResults />;
  return null;
}
