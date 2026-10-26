import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";

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
export function BrewOpsCover() {
  const [a, setA] = useState(0);
  const [approved, setApproved] = useState(false);
  return <Bo n="01" title="Designing a Beverage Supply-Chain Intelligence Copilot" sub="BrewOps Intelligence - Independent Budweiser Supply-Chain Intelligence Demonstrator. From a 2023 AI blueprint to an independently built operational demonstrator. The monitor shows the Control Tower for Fairfield Brewery, date range May 19 - Jun 1, 2024." label="BrewOps cover showcase - interactive rebuild of Budweiser_01">
    <Stats items={[["Overall Risk", "High", "up vs prior 7 days"], ["Service Risk", "22%", "up 8pp vs prior 7 days"], ["Supply Risk", "High", "up vs prior 7 days"], ["Logistics Risk", "Medium", "no change"], ["Inventory Risk", "Low", "down vs prior 7 days"], ["At Risk SKUs", "128", "$2.7M revenue"]]} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1.3fr 1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Demand vs Supply Forecast</p>
        <p style={{ margin: 0 }}>Forecast Demand vs Supply Plan with P10 / P90 supply bands, May 19 - Jun 1 (KHL, 0-200). <b>Projected Shortfall 12.4 KHL - May 27 - Jun 1.</b></p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Risk Heatmap</p>
        <p style={{ margin: 0 }}>Likelihood (Very Low - Very High) x Impact (Very Low - Very High). Hottest cell (High likelihood x High impact) carries <b>7</b> risks.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Alert Queue - 7 (select)</p>
        {ALERTS01.map(([t], i) => <p key={t} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === a} onClick={() => setA(i)}>{t}</button></p>)}
        <p aria-live="polite" style={{ margin: "6px 0 0" }}><b>{ALERTS01[a][0]}</b> - {ALERTS01[a][1]} - {ALERTS01[a][2]} ago - {ALERTS01[a][3]}</p></div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1.4fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recommended Actions - Scenario A - Optimize Service</p>
        <Stats items={[["Service Level", "+6.2pp"], ["Shortfall Reduction", "12.4 KHL"], ["Revenue Impact", "+$1.8M"], ["Cost Impact", "+$320K"]]} />
        <p style={{ margin: "8px 0 0" }}>Top actions: 1 (Primary) Expedite inbound from Cartersville - Arrives May 29 - +4.1 KHL. 2 (Secondary) Reroute Midwest demand to Fairfield - May 27 - Jun 1 - +3.3 KHL. 3 (Tertiary) Prioritize production: 12oz Cans - May 25 - Jun 1 - +2.2 KHL.</p>
        <p style={{ margin: "6px 0 0" }}>Rationale: Maximizes fill rate for at-risk SKUs in high-value markets while balancing freight and production constraints.</p>
        <p style={{ margin: "8px 0 0", display: "flex", gap: 6, alignItems: "center" }}><button type="button" className="tks-btn" aria-pressed={approved} onClick={() => setApproved((v) => !v)} style={{ background: AMBER, borderColor: AMBER, color: "#111" }}>{approved ? "Scenario Approved" : "Approve Scenario"}</button><span aria-live="polite">{approved ? "Approved - as the slide's workflow intends (human approval before action)." : "Compare Scenarios / View scenario model - as printed."}</span></p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Evidence &amp; Ownership</p>
        <p style={{ margin: "4px 0" }}>Demand Forecast - Statistical Forecast v5.2 - May 19, 2024 8:00 AM - Owner: Demand Analytics</p>
        <p style={{ margin: "4px 0" }}>Supply Plan - IBP Plan v3.1 - May 18, 2024 2:15 PM - Owner: Supply Planning</p>
        <p style={{ margin: "4px 0" }}>Inventory Snapshot - WMS Export v2.7 - May 19, 2024 7:30 AM - Owner: Inventory Mgmt</p>
        <p style={{ margin: "6px 0 0", opacity: 0.75 }}>Last updated: May 19, 2024 8:15 AM CDT - Data sources: All systems operational. Top nav as printed: Control Tower - Demand - Supply - Logistics - Inventory - Quality - Reports.</p></div>
    </div>
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
  const [side, setSide] = useState(1);
  const [s, setS] = useState(0);
  return <Bo n="02" title="From Fragmented to Focused: Smarter Decisions, Faster" sub="BEFORE: Fragmented, Manual, and Slow. AFTER: Structured, Intelligent, and Actionable." label="BrewOps before and after - interactive rebuild of Budweiser_02">
    <Chips items={["Before - fragmented", "After - BrewOps Intelligence"]} value={side} onPick={setSide} />
    {side === 0 && <div className="tks-detail" aria-live="polite">
      <p style={{ margin: 0 }}>Inputs: <b>Dashboards</b> - <b>Spreadsheets</b> - <b>Messages</b> (17 unread) - <b>Manual Synthesis</b> - all feeding <b>Disconnected Data / Manual Effort</b>.</p>
      <p style={{ margin: "6px 0 0" }}><b>Delayed Decision-Making</b> - Slow insights. Higher risk. Missed opportunities. -&gt; <b style={{ color: RED }}>Operational Risk, Downtime, Lost Revenue</b>.</p>
      <p style={{ margin: "6px 0 0" }}><b>Reactive. Disconnected. Delayed.</b> Higher risk. Higher cost. Slower to act.</p></div>}
    {side === 1 && <div style={{ marginTop: 10 }}>
      <div className="tks-flow" role="group">{AFTER02.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b><br />{AFTER02[i][1]}</button></span>)}</div>
      <div className="tks-detail" aria-live="polite">{AFTER02[s][2]}</div>
      <p style={{ margin: "8px 0 0" }}><b>Proactive. Connected. Accelerated.</b> Lower risk. Lower cost. Faster impact.</p></div>}
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
  return <Bo n="03" title="Project Timeline" sub="From concept to independently built demonstrator." dark={false} label="BrewOps project timeline - interactive rebuild of Budweiser_03">
    <div className="tks-flow" role="group">{TIMELINE03.map(([y, t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{y}</b><br />{t}</button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{TIMELINE03[s][1]}</b> - {TIMELINE03[s][2]}</div>
    <p style={{ margin: "10px 0 0" }}><b>Outcome:</b> An independently built, AI-powered supply-chain intelligence demonstrator delivering measurable value.</p>
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
  return <Bo n="04" title="Beverage Supply Chain Panorama" sub="End-to-end visibility. Proactive risk detection. Smarter decisions." label="BrewOps supply chain panorama - interactive rebuild of Budweiser_04">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{PANORAMA04.map(([t, d], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)}><span className="tks-num">{i + 1}</span> <b>{t}</b><p style={{ margin: "5px 0 0", opacity: 0.8 }}>{d}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>RISK {s + 1} - {PANORAMA04[s][2]}:</b> {PANORAMA04[s][3]}
      {s === 5 && <p style={{ margin: "6px 0 0" }}>Phone panel as printed: Consumer Sentiment <b>+18%</b> vs prior 7 days - 12.4K signals.</p>}</div>
    <p style={{ margin: "10px 0 0" }}>BrewOps Intelligence unifies data across the supply chain to <b>detect risks early, optimize operations</b>, and <b>drive resilient growth</b>.</p>
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
  return <Bo n="05" title="Decision Latency Map" sub="How one disruption becomes a delayed decision across disconnected systems and teams. Data across systems as of May 19 - Jun 1, 2024." label="BrewOps decision latency map - interactive rebuild of Budweiser_05">
    <div className="tks-flow" role="group">{LATENCY05.map(([t, w], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b><br />{w}</button></span>)}</div>
    <div className="tks-detail" aria-live="polite">{LATENCY05[s][2]}</div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>The Cost of Latency - every hour of delay compounds impact across the supply chain</p>
    <Stats items={[["Average decision lag", "24-48 hrs", "across disruptions"], ["Average expedite & adjustment cost", "$132K+"], ["Average fill rate degradation", "4.2 pts"], ["Average increase in inventory imbalance", "8.7%"], ["Teams impacted", "Multiple", "across the chain"]]} />
    <p style={{ margin: "8px 0 0" }}><b>BrewOps Intelligence Impact:</b> Connected data. Automated insights. Faster decisions. Better outcomes.</p>
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
  const [tab, setTab] = useState(1);
  const [row, setRow] = useState(0);
  const list = tab === 0 ? STRENGTHS06 : GAPS06;
  return <Bo n="06" title="2023 Concept Evidence Audit" sub="bw-08 - BLUEPRINT AUDIT. Assessing the blueprint concept against an operationally ready standard." label="BrewOps 2023 concept evidence audit - interactive rebuild of Budweiser_06">
    <Chips items={[`Strengths (${STRENGTHS06.length})`, `Gaps (${GAPS06.length})`]} value={tab} onPick={(i) => { setTab(i); setRow(0); }} />
    <div style={{ marginTop: 8 }}><Chips items={list.map(([t]) => t)} value={row} onPick={setRow} /></div>
    <div className="tks-detail" aria-live="polite"><b>{list[row][0]}</b> - {list[row][1]}</div>
    <p style={{ margin: "10px 0 0" }}><b>Outcome:</b> Strong strategic foundation with clear opportunities. <b>Next Step:</b> Validate, build, and operationalize with governance, data, and user-centric design.</p>
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
  const col = OWN07[c];
  return <Bo n="07" title="Ownership & Evidence Map" sub="Distinguishing Original Team Work, Toni's Documented Contribution, and Independent Reconstruction." dark={false} label="BrewOps ownership and evidence map - interactive rebuild of Budweiser_07">
    <Chips items={OWN07.map((x) => x.head)} value={c} onPick={setC} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>{col.who}</p>
      {col.items.map(([t, d, tag]) => <p key={t} style={{ margin: "6px 0" }}><b>{t}</b> - {d} <span className="tks-tag">{tag}</span></p>)}
      <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Evidence</p>
      <ul style={{ margin: 0 }}>{col.evidence.map((e) => <li key={e}>{e}</li>)}</ul></div>
    <p style={{ margin: "10px 0 0" }}><b>Purpose:</b> This map clarifies ownership and evidence across the lifecycle of BrewOps Intelligence, ensuring transparency of contributions and independent reconstruction. <b>Key Takeaway:</b> {"Toni's 2026 work is an independent reconstruction and enhancement, built upon foundational ideas and contributions from 2023."} Timeline: 2023 Original Team Work - 2023 {"Toni's Documented Contribution"} - 2026 Independent Reconstruction.</p>
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
  const cur = PAIN08[r];
  return <Bo n="08" title="From Pain Points to Decisions That Move the Chain" sub="Control Tower - Data to Decision Matrix. Linking operational friction to the data, decisions, and actions that drive measurable outcomes." label="BrewOps pain point decision matrix - interactive rebuild of Budweiser_08">
    <Chips items={PAIN08.map(([t]) => t)} value={r} onPick={setR} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }} aria-live="polite">
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Pain Point</p><b>{cur[0]}</b><p style={{ margin: "4px 0 0" }}>{cur[1]}</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Required Data</p><ul style={{ margin: 0 }}>{cur[2].map((x) => <li key={x}>{x}</li>)}</ul></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Decision</p><p style={{ margin: 0 }}>{cur[3]}</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Intervention</p><ul style={{ margin: 0 }}>{cur[4].map((x) => <li key={x}>{x}</li>)}</ul>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Measurable Signal</p><ul style={{ margin: 0 }}>{cur[5].map((x) => <li key={x}>{x}</li>)}</ul></div>
    </div>
    <p style={{ margin: "10px 0 0" }}><b>Better data. Smarter decisions.</b> Operational actions that move service, cost, and capital. Flow as printed: Data In - Decision - Action - Outcome.</p>
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
    <table className="tks-table"><thead><tr><th>#</th><th>Candidate Product Area</th>{CRITERIA09.map((c) => <th key={c}>{c}</th>)}<th>Total</th><th>Band</th></tr></thead>
      <tbody>{OPPS09.map(([name, d, sc, total, band], i) => <tr key={name} onClick={() => pick(i)} style={{ cursor: "pointer", background: i === r ? "rgba(245,168,0,.14)" : undefined }}><td>{i + 1}{i < 3 ? " *" : ""}</td><td><b>{name}</b><br />{d}</td>{sc.map((v, j) => <td key={j}>{v}</td>)}<td><b>{total}</b></td><td>{band}</td></tr>)}</tbody></table>
    <div className="tks-detail" aria-live="polite"><b>{OPPS09[r][0]}</b> - printed total <b>{OPPS09[r][3]} / 25 - {OPPS09[r][4]}</b>. Note as printed: rank 4 Consumer Insight totals 17, below rank 5 Quality Intelligence at 18.
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Sandbox - adjust this row's scores (your inputs only; printed scores stay in the table)</p>
      {CRITERIA09.map((c, j) => <label key={c} style={{ display: "flex", gap: 8, alignItems: "center", margin: "3px 0" }}><span style={{ minWidth: 170 }}>{c}: {scores[j]}</span><input type="range" min={1} max={5} value={scores[j]} aria-label={`Sandbox score for ${c}`} onChange={(e) => setScores((v) => v.map((x, k) => (k === j ? Number(e.target.value) : x)))} /></label>)}
      <p style={{ margin: "6px 0 0" }}>Sandbox total: <b>{sandboxTotal} / 25</b> (printed: {OPPS09[r][3]}).</p></div>
    <p style={{ margin: "10px 0 0" }}><b>Why these three?</b> These opportunities combine high business impact with strong data foundation and demonstrator feasibility - driving early wins and stakeholder confidence. <b>Recommended Prioritized Scope:</b> Control-Tower Risk - Logistics Scenarios - Predictive Maintenance. Scoring guide: 1 = Low, 5 = High.</p>
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
  const cur = ROLES10[r];
  return <Bo n="10" title="Role-to-Job Map" sub="Hypothesis-Based Role Framework - primary users, the decisions they make, signals they act on, and the authority they hold. Built for Brewing. Backed by Intelligence. (bw-13-role-job-map)" label="BrewOps role to job map - interactive rebuild of Budweiser_10">
    <Chips items={ROLES10.map(([t]) => t)} value={r} onPick={setR} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><b style={{ fontSize: 15 }}>{cur[0]}</b><p style={{ margin: "4px 0 0" }}>{cur[1]}</p>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 8 }}>
        <div><p className="tks-kicker" style={{ marginTop: 0 }}>Recurring Decisions</p><ul style={{ margin: 0 }}>{cur[2].map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div><p className="tks-kicker" style={{ marginTop: 0 }}>Key Input Signals</p><ul style={{ margin: 0 }}>{cur[3].map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div><p className="tks-kicker" style={{ marginTop: 0 }}>Approval Authority</p><ul style={{ margin: 0 }}>{cur[4].map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div></div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>How to read:</b> This is a hypothesis-based proto-role framework derived from desk research of brewing supply chains and common planning/operations practices. It will be refined through user interviews and validation workshops. <b>Notes &amp; Assumptions:</b> Roles are enterprise-wide and may exist at multiple sites/regions - Decision rights vary by organization; approvals reflect typical authority boundaries - Signals represent common data sources; actual availability may vary - The framework is intent-focused, not a system permission model - Future iterations will add role sub-types, JTBD statements, and success metrics - Validated with BrewOps and Budweiser stakeholders (as printed).</p>
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
  return <Bo n="11" title="BW-05 Original Deck Contact Sheet" sub="Generative AI Application of Logistics and Supply Chain in Beverage Industry - Historical artifact, 2023. Budweiser Business Challenge Deck - June 2023 - CONFIDENTIAL & PROPRIETARY (as printed)." dark={false} label="BrewOps original deck contact sheet - interactive rebuild of Budweiser_11">
    <Chips items={DECK11.map(([t]) => t)} value={s} onPick={setS} />
    <div className="tks-detail" aria-live="polite"><b>{DECK11[s][0]}</b><p style={{ margin: "5px 0 0" }}>{DECK11[s][1]}</p></div>
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
  const cur = OBJECTS12[s];
  return <Bo n="12" title="BrewOps Intelligence Object Model" sub="Core entities and relationships that power intelligent decisions across the beverage supply chain. Relationship key: Triggers - Generates - Supported By - Made By - Creates - Leads To - References. (bw-20-object-model)" label="BrewOps object model - interactive rebuild of Budweiser_12">
    <div className="tks-flow" role="group">{OBJECTS12.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b><br />{OBJECTS12[i][1]}</button></span>)}</div>
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>{cur[0]} - {cur[1]} - relationship out: {cur[3]}</p>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>{cur[2].map((f) => <span key={f} className="tks-tag">{f}</span>)}</div></div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Cross-Cutting Attributes (All Core Objects):</b> Status - Created At - Updated At - Created By - Updated By - Affected Facility - Affected SKU(s) - Version - Confidence Score - Tags - Audit Trail ID. <b>Audit Trail (All Changes &amp; Events):</b> Audit Trail ID - Entity Type - Entity ID - Event Type (Create, Update, Delete, etc.) - Changed By - Changed At - Change Summary - Old Value - New Value - Source System. <b>Model Notes:</b> Cardinality shown as 1 (one) or N (many) - Evidence can support multiple recommendations and may come from multiple systems - Decisions are made by an owner and are fully auditable - Every action leads to a measurable outcome that closes the loop and drives learning.</p>
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
  const [step, setStep] = useState(0);
  const HOW = ["Data flows from consumers and operations into the system", "AI analyzes patterns and predicts outcomes", "Insights drive decisions across functions", "Actions improve outcomes and create a learning loop"];
  return <Bo n="13" title="AI-Enabled Decision Support Framework" sub="Connecting Consumers, Operations & Intelligence - Historical artifact, 2023 (Busch Futures 2023 - AI for a Smarter Supply Chain, p.6). OUR VISION: Leverage data and AI to create an interconnected system that enables smarter decisions across the value chain and delivers value to consumers, customers, and the business." dark={false} label="BrewOps decision support framework 2023 - interactive rebuild of Budweiser_13">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.4fr 1fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Consumer Preferences (input)</p><ul style={{ margin: 0 }}><li>Taste &amp; flavor trends</li><li>Brand perception</li><li>Occasions &amp; moments</li><li>Price sensitivity</li><li>Channel preferences</li><li>Social &amp; digital signals</li></ul></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>AI Analysis &amp; Insights - Predictive - Prescriptive - Descriptive (select a module)</p>
        <Chips items={MODULES13.map(([t]) => t)} value={m} onPick={setM} />
        <p aria-live="polite" style={{ margin: "8px 0 0" }}><b>{MODULES13[m][0]}</b> - {MODULES13[m][1]}</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Production Process (input)</p><ul style={{ margin: 0 }}><li>Brewing &amp; fermentation</li><li>Packaging</li><li>Line performance</li><li>Yield &amp; waste</li><li>Energy &amp; utilities</li><li>Supplier performance</li></ul></div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.4fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Expected Outcomes</p><p style={{ margin: 0 }}>Improve forecast accuracy - Reduce costs &amp; waste - Increase service levels - Improve asset uptime - Enhance quality - Drive growth &amp; profitability</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Operational Data Foundation</p><p style={{ margin: 0 }}>ERP - MES - WMS - TMS - CRM - IoT Sensors - Quality Systems - External Data</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>How It Works (step)</p>
        <div style={{ display: "flex", gap: 5 }}>{HOW.map((_, i) => <button key={i} type="button" className="tks-chip" aria-pressed={i === step} onClick={() => setStep(i)}>{i + 1}</button>)}</div>
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{HOW[step]}</p></div>
    </div>
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
  const cur = CHAT14[q];
  return <Bo n="14" title="Supply Chain Insights Chatbot - Early Concept" sub="Conversational interface as the primary way users explore data and get answers. Historical artifact, 2023 (p.07). INITIAL IDEA: CHAT AS THE PRODUCT ENTRY POINT - internal teams ask questions about our supply chain and get instant, actionable insights." dark={false} label="BrewOps insights chatbot early concept - interactive rebuild of Budweiser_14">
    <p className="tks-kicker">Example prompts we imagined (select - the first four carry printed answers)</p>
    <Chips items={CHAT14.map(([t]) => t)} value={q} onPick={setQ} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Budweiser Supply Chain Assistant (Early Concept)</p>
      <p style={{ margin: "4px 0", textAlign: "right" }}><span className="tks-tag">{cur[0]}{cur[2] ? ` - ${cur[2]}` : ""}</span></p>
      {cur[1] ? <p style={{ margin: "4px 0 0" }}>{cur[1]}</p> : <p style={{ margin: "4px 0 0" }}>As printed, this prompt appears in the {"slide's"} example list only - no answer is shown for it in the mock conversation.</p>}</div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Early Concept Note:</b> We proposed treating chat as the primary entry point - making it easy for users to ask natural questions and get data-driven answers in real time. Note as printed: Mock interface for concept exploration only. Not a final product design. (Budweiser Supply Chain Challenge - Student Team Submission.)</p>
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
  const cur = SOURCES15[s];
  return <Bo n="15" title="Research Synthesis" sub="Seven Supporting Sources - a curated set of academic and industry sources that inform our understanding of AI and automation opportunities across beverage supply chains. EVIDENCE. INSIGHT. IMPACT." dark={false} label="BrewOps research synthesis - interactive rebuild of Budweiser_15">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{SOURCES15.map(([t, y], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)}><span className="tks-num" style={{ background: "#c8102e" }}>{i + 1}</span><p style={{ fontWeight: 700, margin: "6px 0 2px", fontSize: 11.5 }}>{t}</p><p className="tks-kicker" style={{ margin: 0 }}>{y}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>Insight ({cur[1]}):</b> {cur[2]}</div>
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
  const [lane, setLane] = useState(0);
  const [stage, setStage] = useState(0);
  return <Bo n="17" title="Hypothesis-Based Operational Handoff" sub="bw-15 - CROSS-FUNCTIONAL HANDOFF. From alert to execution - aligned, evaluated, and ready for impact. Hypothesis-Driven Approach: We operate on informed hypotheses, continuously validated with data and outcomes." label="BrewOps operational handoff - interactive rebuild of Budweiser_17">
    <Chips items={LANES17.map(([t]) => t)} value={lane} onPick={setLane} />
    <div style={{ marginTop: 8 }}><Chips items={STAGES17.map((t) => t.split(" - ")[0] + " - " + t.split(" - ")[1].split(" ").slice(0, 2).join(" "))} value={stage} onPick={setStage} /></div>
    <div className="tks-detail" aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>{LANES17[lane][0]} - {LANES17[lane][1]} - Stage: {STAGES17[stage]}</p>{LANES17[lane][2][stage]}</div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Supporting Notes:</b> All recommendations are hypothesis-based and validated with data and cross-functional input - Confidence levels reflect current data quality and certainty. <b>Outcome:</b> Aligned decision. Clear handoffs. Confident execution. Measurable impact. <b>KPIs Impacted:</b> Service Level - On-Time In-Full (OTIF) - Inventory Turns - Cost to Serve - Equipment Reliability. Legend as printed: Process Flow - Handoff Point - Approval Point - Task Complete - Critical Issue.</p>
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
  return <Bo n="18" title="Our principles guide every experience we design." sub="Product Principles - Built for trust. Designed for impact. Proven in operations." label="BrewOps product principles - interactive rebuild of Budweiser_18">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{PRINCIPLES18.map(([t, d], i) => <button key={t} type="button" className={`tks-card${i === p ? " is-on" : ""}`} aria-pressed={i === p} onClick={() => setP(i)}><span style={{ color: AMBER, fontWeight: 800, fontSize: 16 }}>{String(i + 1).padStart(2, "0")}</span><p style={{ fontWeight: 700, margin: "6px 0 4px" }}>{t}</p><p style={{ margin: 0, opacity: 0.8 }}>{d}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">Principle {p + 1} of 4 selected: <b>{PRINCIPLES18[p][0]}</b></div>
    <p style={{ margin: "10px 0 0" }}>Principles that power smarter decisions - and better outcomes.</p>
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
  const [t, setT] = useState(0);
  const [m, setM] = useState(0);
  const tier = SCOPE19[t];
  return <Bo n="19" title="Feature Scope Map" sub="Delivering focused intelligence where it matters today - and expanding tomorrow. Focused. Integrated. Actionable." label="BrewOps feature scope map - interactive rebuild of Budweiser_19">
    <Chips items={SCOPE19.map(([t2]) => t2)} value={t} onPick={(i) => { setT(i); setM(0); }} />
    <p className="tks-kicker" style={{ marginTop: 10 }}>{tier[0]} - {tier[1]}</p>
    <Chips items={tier[2].map(([n]) => n)} value={m} onPick={setM} />
    <div className="tks-detail" aria-live="polite"><b>{tier[2][m][0]}</b> - {tier[2][m][1]}</div>
    <p style={{ margin: "10px 0 0" }}>BrewOps Intelligence delivers the right capabilities today - with a clear path to tomorrow.</p>
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
  const [s, setS] = useState(0);
  const [c, setC] = useState(0);
  const sec = IA20[s];
  return <Bo n="20" title="BrewOps Intelligence - Information Architecture" sub="A role-based intelligence platform that connects data, decisions, and actions across the beverage supply chain. Intelligence. Outcomes. Impact. (bw-19-information-architecture)" label="BrewOps information architecture - interactive rebuild of Budweiser_20">
    <Chips items={IA20.map(([t]) => t)} value={s} onPick={(i) => { setS(i); setC(0); }} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>{sec[0]}</p><p style={{ margin: "4px 0 8px" }}>{sec[1]}</p>
      <Chips items={sec[2].map(([n]) => n)} value={c} onPick={setC} />
      <p style={{ margin: "8px 0 0" }}><b>{sec[2][c][0]}</b> - {sec[2][c][1]}</p></div>
    <p style={{ margin: "10px 0 0" }}><b>Role-Based Experience</b> - Tailored views and actions for every role across the organization. 9 sections - 36 child pages as printed.</p>
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
  const [side, setSide] = useState(1);
  const [s, setS] = useState(0);
  return <Bo n="21" title="From fragmented reaction to accountable decision flow" sub="Budweiser Case Study - Before: disconnected tools and manual synthesis. After: structured alert, evidence, scenario, approval, and action log. BETTER INSIGHT. BETTER DECISIONS. BETTER RESULTS." dark={false} label="BrewOps accountable decision flow - interactive rebuild of Budweiser_21">
    <Chips items={["Before - Fragmented & Reactive", "After - Accountable Decision Flow"]} value={side} onPick={setSide} />
    {side === 0 && <div className="tks-detail" aria-live="polite">
      <p style={{ margin: 0 }}>Disconnected sources. Manual synthesis. Unclear ownership. Slower decisions. Sources: <b>Dashboards</b> (Multiple views, different metrics) - <b>Spreadsheets</b> (Ad hoc exports, manual updates) - <b>Chat Messages</b> (Decisions in threads, hard to track) - <b>Email</b> (Information buried, no single source) - <b>Manual Notes</b> (Scratchpads, personal notes).</p>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Q2 Performance (Var.) as printed - sticky notes: {"\"Promo spike in Texas? Not sure why.\" - \"Saw a dip in conversion yesterday.\" - \"Need latest competitor pricing.\" - \"Can't get later read. Need more time..\""}; email: From Regional Director, Subject Re: Promo Update - {"\"Do we pull back spend or shift to digital?\""}</p>
      <table className="tks-table"><thead><tr><th>Region</th><th>Sales</th><th>Volume</th><th>Revenue</th></tr></thead><tbody>
        <tr><td>Total</td><td>-2%</td><td>-3%</td><td>-1%</td></tr><tr><td>South</td><td>-5%</td><td>-6%</td><td>-4%</td></tr><tr><td>West</td><td>+1%</td><td>+0%</td><td>+2%</td></tr><tr><td>Midwest</td><td>-3%</td><td>-2%</td><td>-1%</td></tr></tbody></table>
      <p style={{ margin: "8px 0 0" }}>Manual Synthesis: Gather - Reconcile - Interpret - Summarize - Decide. <b>OUTCOME: SLOWER DECISIONS, HIGHER RISK, MISSED OPPORTUNITIES</b> - Delayed insights - Version confusion - Unclear ownership - Inconsistent follow-through.</p></div>}
    {side === 1 && <div style={{ marginTop: 10 }}>
      <p style={{ margin: 0 }}>Structured workflow. Clear ownership. Faster, higher-confidence decisions.</p>
      <div className="tks-flow" role="group" style={{ marginTop: 8 }}>{FLOW21.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b></button></span>)}</div>
      <div className="tks-detail" aria-live="polite"><b>{FLOW21[s][0]}</b> - {FLOW21[s][1]}<br />Captured: {FLOW21[s][2]} - <b>Owner: {FLOW21[s][3]}</b></div>
      <p className="tks-kicker" style={{ marginTop: 10 }}>Measurable Outcomes (as printed)</p>
      <Stats items={[["Faster decision cycle time", "30-50%"], ["Higher forecast accuracy", "+15%"], ["Reduction in decision risk", "-20%"], ["Annualized impact (example)", "+$5-10M"]]} />
      <p style={{ margin: "8px 0 0", fontSize: 11.5 }}>Workflow legend: Observation (facts, events, detected changes) - Inference (analysis and insight derived from evidence) - Recommendation (proposed actions with rationale and impact) - Approval (human validation and decision) - Action (execution and tracking to drive outcomes).</p></div>}
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
  const [tok, setTok] = useState(0);
  const group = TOKENS22[g];
  const cur = group[1][Math.min(tok, group[1].length - 1)];
  return <Bo n="22" title="Design tokens: design and code alignment" sub="One source of truth. Consistent experiences across every touchpoint. Collection: Budweiser Core. All tokens are platform agnostic and available to design and code. Consistent by design. Built in code." dark={false} label="BrewOps design tokens - interactive rebuild of Budweiser_22">
    <Chips items={TOKENS22.map(([t]) => t)} value={g} onPick={(i) => { setG(i); setTok(0); }} />
    <div style={{ marginTop: 8 }}><Chips items={group[1].map(([n]) => n)} value={Math.min(tok, group[1].length - 1)} onPick={setTok} /></div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> - {cur[1]}
      {g === 0 && <span style={{ display: "inline-block", width: 18, height: 18, borderRadius: 4, background: cur[1], border: "1px solid #bbb", marginLeft: 8, verticalAlign: "middle" }} aria-hidden="true" />}
      {g === 2 && <p style={{ margin: "8px 0 0", fontSize: cur[1].startsWith("29") ? 29 : cur[1].startsWith("23") ? 23 : cur[1].startsWith("16") ? 16 : cur[1].startsWith("14") ? 14 : 12, lineHeight: 1.2 }}>Ag - BrewOps Intelligence sample at {cur[0]}</p>}
      {g === 1 && <div style={{ marginTop: 8, background: "#c8102e", height: 14, width: cur[1] }} aria-hidden="true" />}
      {g === 3 && <div style={{ marginTop: 8, background: "#111", height: 28, width: 120, borderRadius: cur[1] }} aria-hidden="true" />}
      {g === 4 && <div style={{ marginTop: 8, background: "#fff", height: 28, width: 120, border: "1px solid #ddd", boxShadow: cur[1].replace(/^[^ ]+ [^ ]+ [^ ]+ /, "") ? undefined : undefined }} aria-hidden="true" />}</div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}>Code panel as printed: <b>tokens.theme.ts</b> (TypeScript) - export const budweiserTheme = {"{ color: { brand: { 500: 'var(--color-brand-500)' /* #C8102E */, amber: { 500: 'var(--color-brand-amber-500)' /* #D4AF37 */ } }, neutral: {...} }, space: {...}, type: { heading: {...}, body: {...} } }"}. Shared language. Fewer handoffs. Stronger brand. This is Bud.</p>
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
  return <Bo n="24" title="Wireframe exploration wall" sub="BrewOps Intelligence - Low-fidelity exploration. Legend: Dashboard - Alerts - Maintenance - AI / Copilot - Data - Workflow - System states - Mobile. v1.0 - May 2024." dark={false} label="BrewOps wireframe exploration wall - interactive rebuild of Budweiser_24">
    <Chips items={WIREFRAMES24.map(([t]) => t)} value={w} onPick={setW} />
    <div className="tks-detail" aria-live="polite"><b>{WIREFRAMES24[w][0]}</b><p style={{ margin: "5px 0 0" }}>{WIREFRAMES24[w][1]}</p></div>
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
  const [side, setSide] = useState(0);
  const [q, setQ] = useState(0);
  const [row, setRow] = useState(0);
  const [checked, setChecked] = useState<boolean[]>(QUEUE25.map(() => false));
  return <Bo n="25" title="Dashboard wireframe comparison" sub="Two approaches for different user needs and moments. Image ID: bw-23-dashboard-wireframe-comparison. Takeaway: The executive summary informs what to focus on. The operational queue enables how to act. Both are valuable - designed for different users, goals, and moments." dark={false} label="BrewOps dashboard wireframe comparison - interactive rebuild of Budweiser_25">
    <Chips items={["LEFT - Executive summary dashboard", "RIGHT - Operational queue dashboard"]} value={side} onPick={setSide} />
    <div style={{ marginTop: 8 }}><Chips items={QUESTIONS25.map(([t]) => t)} value={q} onPick={setQ} /></div>
    <p aria-live="polite" style={{ margin: "8px 0 0" }}><b>Design question - {QUESTIONS25[q][0]}:</b> {QUESTIONS25[q][1]}</p>
    {side === 0 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Total Volume", "2.45M", "up 8.6% vs prior 7 days"], ["Net Revenue", "$186.7M", "up 6.3% vs prior 7 days"], ["Gross Margin", "31.4%", "up 1.2pp vs prior 7 days"], ["Cases Shipped", "2.31M", "up 7.4% vs prior 7 days"], ["On-Time Delivery", "92.1%", "down 1.6pp vs prior 7 days"]]} />
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 10 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Top Markets by Volume</p><p style={{ margin: 0 }}>California - Texas - Florida - New York - Illinois (bars to 400K). Volume Over Time May 8 - May 14; Volume by Region: West - Central - South - Northeast.</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Channel Mix</p><p style={{ margin: 0 }}>Off Premise 62% - On Premise 28% - Other 10%. Insight highlight: Off Premise volume is up 8.6% driven by growth in Texas and Florida markets.</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Alerts Summary</p><p style={{ margin: 0 }}>3 Critical Alerts - 7 High Priority - 12 Informational. Nav as printed: Overview - Performance - Sales - Supply Chain - Markets - Finance - Alerts - Reports - Settings.</p></div>
      </div>
      <p style={{ margin: "8px 0 0" }}><b>Strengths:</b> Broad overview with key KPIs at a glance - Trend and context to support decision making - Great for spotting opportunities and risks - Supports strategic conversations. <b>Tradeoffs:</b> Higher information density may feel busy - Less immediate path to action - Drill-down required for details - Not optimal for task execution.</p></div>}
    {side === 1 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Total in Queue", "128", "up 18 vs yesterday"], ["High Priority", "27", "up 6 vs yesterday"], ["Past Due", "14", "up 3 vs yesterday"], ["At Risk", "22", "down 5 vs yesterday"], ["Ready to Ship", "65", "down 4 vs yesterday"]]} />
      <table className="tks-table" style={{ marginTop: 10 }}><thead><tr><th>Select</th><th>Priority</th><th>Order / PO</th><th>Customer</th><th>Status</th><th>Due Date</th><th>Age</th></tr></thead>
        <tbody>{QUEUE25.map(([p, po, cust, st, due, age], i) => <tr key={po} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#f3ead2" : undefined }}><td><input type="checkbox" checked={checked[i]} aria-label={`Select order ${po}`} onChange={() => setChecked((v) => v.map((x, j) => (j === i ? !x : x)))} onClick={(e) => e.stopPropagation()} /></td><td>{p}</td><td>{po}</td><td>{cust}</td><td>{st}</td><td>{due}</td><td>{age}</td></tr>)}</tbody></table>
      <p aria-live="polite" style={{ margin: "6px 0 0" }}>{checked.filter(Boolean).length} items selected - tabs as printed: All (128) - High Priority (27) - Past Due (14) - At Risk (22) - Ready to Ship (65). Bulk actions: Assign Task - Send Message - Escalate - Update Status. Nav: Queue - Orders - Shipments - Exceptions - Tasks (12) - Messages (5) - Reports.</p>
      <p style={{ margin: "6px 0 0" }}><b>Strengths:</b> Clear prioritization of urgent work - Actionable list with quick status cues - Designed for speed and throughput - Short path from insight to action. <b>Tradeoffs:</b> Narrower view, less strategic context - Focused on execution, not analysis - May hide broader trends - Context switching for big-picture needs.</p></div>}
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
  return <Bo n="26" title="Scenario builder wireflow" sub="Supply-chain intelligence copilot - Model changes. Understand impact. Make confident decisions. Governed and auditable: All scenarios, assumptions, and approvals are tracked for transparency and accountability. Secure - Role-based access - Audit trail." dark={false} label="BrewOps scenario builder wireflow - interactive rebuild of Budweiser_26">
    <div className="tks-flow" role="group">{STEPS26.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b><br />{STEPS26[i][1]}</button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>You do:</b> {STEPS26[s][2]}<br /><b>Copilot supports:</b> {STEPS26[s][3]}</div>
    {s === 0 && <div className="tks-card" style={{ marginTop: 10 }}><p style={{ margin: 0 }}>Home - Good morning, Alex. How can I help you today? <b>Supply signal: Glass capacity constraint forecasted in {"Q3'24"}</b> - Impact: High - Confidence: 72%. Start a scenario: Explore impact of glass constraint - Assess alternative suppliers - View all signals (8).</p></div>}
    {s === 1 && <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Scenario builder - Glass constraint in {"Q3'24"} - Levers</p>
      <p style={{ margin: "4px 0" }}>Glass capacity: -20% - Constraint window: Jul - Sep 2024 - Supplier allocation rule: Cost priority - Freight rate change: +8% - Service level target: 95%.</p>
      <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Constraints</p><p style={{ margin: 0 }}>Do not exceed OTIF &lt; 95% - Keep inventory turns &gt; 6. Copilot estimate: Simulation ready. Run scenarios.</p></div>}
    {s === 2 && <div style={{ marginTop: 10 }}>
      <table className="tks-table"><thead><tr><th>Scenario</th><th>Total landed cost (delta vs baseline)</th><th>Service level (OTIF)</th><th>Fill rate</th><th>Inventory (days)</th><th>CO2e (tons)</th><th>Risk score</th></tr></thead>
        <tbody>{SCEN26.map(([name, tag, cells], i) => <tr key={name} onClick={() => setSc(i)} style={{ cursor: "pointer", background: i === sc ? "#f3ead2" : undefined }}><td><b>{name}</b>{tag ? ` (${tag})` : ""}</td>{cells.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table>
      <p aria-live="polite" style={{ margin: "6px 0 0" }}>Selected: <b>{SCEN26[sc][0]}</b> - Total landed cost over time chart as printed (Baseline / S1 / S2 / S3 lines). Save scenario set - Inspect evidence.</p></div>}
    {s === 3 && <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Inspect evidence - Scenario: S2 Alt. supplier - Tabs: Drivers - Risks - Impact map - Assumptions</p>
      <p style={{ margin: "4px 0" }}><b>Top cost drivers (delta vs baseline):</b> Freight +$0.8M - Raw materials +$0.6M - Packaging -$0.4M - Production -$0.3M - Inventory carrying +$0.2M.</p>
      <p style={{ margin: "4px 0" }}>Geographic impact map as printed (US: Increase / Decrease / No change). Evidence sources (12).</p></div>}
    {s === 4 && <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Request approval - Scenario: S2 Alt. supplier</p>
      <p style={{ margin: "4px 0" }}><b>Recommended: S2 Alt. supplier - +1.4% cost - 95.6% OTIF</b> (the approval card prints 95.6%; the compare table on the same slide prints S2 OTIF as 94.7% - both transcribed as printed). Rationale: Improves service level while keeping cost impact within target. Lower risk exposure vs. baseline.</p>
      <p style={{ margin: "4px 0" }}>Approvers: Maria Gomez, Supply Chain Director - Pending - James Lee, Finance Director - Pending - Aaron Chen, Commercial Director - Pending.</p>
      <p style={{ margin: "8px 0 0" }}><button type="button" className="tks-btn" aria-pressed={sent} onClick={() => setSent((v) => !v)}>{sent ? "Sent for approval" : "Send for approval"}</button></p></div>}
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
    <Chips items={REJECTED27.map(([t], i) => `${i + 1}. ${t} - REJECTED`)} value={r} onPick={setR} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p style={{ margin: 0 }}>{REJECTED27[r][1]}</p>
      <p className="tks-kicker" style={{ margin: "10px 0 2px", color: "#c8102e" }}>Why it failed</p>
      <ul style={{ margin: 0 }}>{REJECTED27[r][2].map((x) => <li key={x}>{x}</li>)}</ul></div>
    <div className="tks-card" style={{ marginTop: 10, borderColor: "#c8102e" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Chosen Direction</p><b style={{ fontSize: 15 }}>Action-first, focused workspace</b>
      <p style={{ margin: "6px 0 0" }}><b>Built for the job</b> - Centers on approvals and decisions, not conversations or vanity metrics. <b>Clear priorities</b> - Highlights what needs attention so users can act without hunting. <b>Fast, efficient actions</b> - Key actions are visible, one click away, and easy to complete. <b>Premium, on-brand experience</b> - Clean, confident, and unmistakably Budweiser - designed to reflect our standards.</p></div>
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
  const [tab, setTab] = useState(0);
  const [asset, setAsset] = useState(3);
  return <Bo n="28" title="Visual foundations" sub="BrewOps Intelligence Design System v1.0 - May 2025. A consistent visual language that drives clarity, speed, and confident decisions. CLARITY (Insights at a glance) - FOCUS (Designed for what matters) - TRUST (Governed, secure and reliable) - SPEED (Faster decisions, better outcomes). Grid system: 12 Column grid - 24px gutter - 1280px max width. Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 px. Elevation: Level 0 Flat - 1 Subtle - 2 Raised - 3 Prominent - 4 Overlay. Corner radius: 4px Slight - 8px Small - 12px Medium - 16px Large - 24px X-Large." dark={false} label="BrewOps visual foundations - interactive rebuild of Budweiser_28">
    <Chips items={["Typography Scale", "Color Palette", "Semantic Color Tokens", "Foundations in Use"]} value={tab} onPick={setTab} />
    {tab === 0 && <table className="tks-table" style={{ marginTop: 10 }}><thead><tr><th>Style</th><th>Size / Line height</th><th>Tracking</th></tr></thead><tbody>{TYPE28.map(([a, b, c]) => <tr key={a}><td><b>{a}</b></td><td>{b}</td><td>{c}</td></tr>)}</tbody></table>}
    {tab === 1 && <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: 10 }}>{COLOR28.map(([n, hex, use]) => <div key={n} className="tks-card"><span style={{ display: "block", height: 26, borderRadius: 5, background: hex, border: "1px solid #ccc" }} aria-hidden="true" /><b>{n}</b><br />{hex}<br /><span style={{ opacity: 0.7 }}>{use}</span></div>)}</div>}
    {tab === 2 && <table className="tks-table" style={{ marginTop: 10 }}><thead><tr><th>Token</th><th>Light Mode</th><th>Dark Mode</th><th>Usage</th></tr></thead><tbody>{SEMANTIC28.map(([a, b, c, d]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td><td>{d}</td></tr>)}</tbody></table>}
    {tab === 3 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Production HL", "24,560", "up 8.4% vs yesterday"], ["OEE", "87.3%", "up 3.1% vs yesterday"], ["Energy / HL", "3.21 kWh", "down 2.7% vs yesterday"], ["Critical Alerts", "3", "up 2 vs yesterday"]]} />
      <p className="tks-kicker" style={{ marginTop: 10 }}>Brewery Overview - Top Alerts</p>
      <p style={{ margin: "4px 0" }}>Fill level high on Brite Tank 4 - Brite Area - 2 min ago - CRITICAL - CO2 usage above target - Utility - 15 min ago - WARNING - CIP cycle over target time - Brew House - 45 min ago - INFO</p>
      <p className="tks-kicker" style={{ marginTop: 8 }}>Asset Performance (select)</p>
      <Chips items={ASSETS28.map(([n]) => n)} value={asset} onPick={setAsset} />
      <p aria-live="polite" style={{ margin: "6px 0 0" }}><b>{ASSETS28[asset][0]}</b> - {ASSETS28[asset][1]} - OEE {ASSETS28[asset][2]} - Alerts {ASSETS28[asset][3]}. Filters as printed: All Sites - Brew House - Fermentation - Packaging. Buttons: Primary - Secondary - Tertiary - Healthy - Warning - Critical - Info.</p></div>}
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}>Consistent by design. Built for performance. - BrewOps Intelligence Design System - v1.0 - May 2025.</p>
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
  const [tab, setTab] = useState(3);
  const [row, setRow] = useState(0);
  const [conf, setConf] = useState(1);
  const [step, setStep] = useState(0);
  const [dismissed, setDismissed] = useState<boolean[]>([false, false, false, false]);
  const TABS = ["Cards", "Alerts", "Filters", "Data Table", "Evidence Citations", "Confidence Display", "States & Approvals"];
  return <Bo n="29" title="Component library" sub="Reusable components for BrewOps Intelligence. BrewOps Intelligence Design System v1.0. Left nav as printed: Overview - Insights - Investigations - Data - Approvals - Settings. (c) 2024 Anheuser-Busch (as printed)." dark={false} label="BrewOps component library - interactive rebuild of Budweiser_29">
    <Chips items={TABS} value={tab} onPick={setTab} />
    {tab === 0 && <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Fermentation Temp - Bright Beer Tank 12</p><b style={{ fontSize: 20 }}>33.8 °F</b><p style={{ margin: "4px 0 0" }}>Target: 34.0 °F - Within Range - Updated 5m ago</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Investigation - O2 Spike - Line 3</p><span className="tks-tag" style={{ color: "#c8102e" }}>High Priority</span><p style={{ margin: "4px 0 0" }}>Opened May 17, 2024 8:42 AM - Owner Alex R.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Insight</p><p style={{ margin: 0 }}>Elevated O2 levels detected during packaging run. Likely Cause: Seal Failure - Confidence <b>78%</b></p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>KPI - Line Yield (7D)</p><b style={{ fontSize: 20 }}>97.6%</b><p style={{ margin: "4px 0 0" }}>vs prior 7D up 2.1% - Updated 1h ago</p></div></div>}
    {tab === 1 && <div style={{ marginTop: 10 }}>{[["High Priority", "O2 levels above control limit on Line 3.", "#c8102e"], ["Investigation Needed", "Unusual CO2 usage detected.", "#b97a0c"], ["FYI", "New data available for Packaging Line 2.", "#2563eb"], ["Resolved", "Seal failure investigation closed.", "#18a957"]].map(([t, d, col], i) => !dismissed[i] && <div key={t} className="tks-card" style={{ marginBottom: 6, display: "flex", justifyContent: "space-between", gap: 8 }}><span><b style={{ color: col }}>{t}</b> - {d}</span><button type="button" className="tks-chip" aria-label={`Dismiss alert: ${t}`} onClick={() => setDismissed((v) => v.map((x, j) => (j === i ? true : x)))}>x Dismiss</button></div>)}
      {dismissed.every(Boolean) && <p aria-live="polite">All four printed alert variants dismissed in this explorer - reload the slot to see them again.</p>}</div>}
    {tab === 2 && <div className="tks-card" style={{ marginTop: 10 }}><p style={{ margin: 0 }}>Date range: May 10 - May 17, 2024 - Brewery: All Breweries - Area: Packaging - Line: Line 3 - Event type: All - Status: All. Clear filters / Apply filters (as printed).</p></div>}
    {tab === 3 && <div style={{ marginTop: 10 }}>
      <table className="tks-table"><thead><tr><th>Event ID</th><th>Title</th><th>Area</th><th>Line</th><th>Detected</th><th>Status</th><th>Priority</th><th>Confidence</th><th>Owner</th></tr></thead>
        <tbody>{EVENTS29.map((r2, i) => <tr key={r2[0]} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#f3ead2" : undefined }}>{r2.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table>
      <p aria-live="polite" style={{ margin: "6px 0 0" }}>Selected: <b>{EVENTS29[row][1]}</b> ({EVENTS29[row][0]}) - Showing 1 to 5 of 24 results - 5 per page - pages 1-5 as printed.</p></div>}
    {tab === 4 && <div className="tks-card" style={{ marginTop: 10 }}><p style={{ margin: "4px 0" }}><b>Historian Trend</b> - O2 Sensor - Line 3 - May 17, 8:35 - 8:45 AM</p><p style={{ margin: "4px 0" }}><b>Work Order</b> - WO-2024-0517-0892 - Seal replacement - Line 3</p><p style={{ margin: "4px 0" }}><b>Lab Result</b> - Dissolved O2 Sample - May 17, 8:50 AM</p><p style={{ margin: "6px 0 0" }}>View all evidence (7)</p></div>}
    {tab === 5 && <div style={{ marginTop: 10 }}><Chips items={CONF29.map(([v]) => v)} value={conf} onPick={setConf} />
      <div className="tks-detail" aria-live="polite"><b style={{ fontSize: 18 }}>{CONF29[conf][0]}</b> - {CONF29[conf][1]} - {CONF29[conf][2]}<Bar pct={Number(CONF29[conf][0].replace("%", ""))} label={`Confidence ${CONF29[conf][0]}`} /></div></div>}
    {tab === 6 && <div style={{ marginTop: 10 }}>
      <p className="tks-kicker">Approval Controls (step)</p>
      <div className="tks-flow" role="group">{["Request", "Review", "Approve", "Complete"].map((t2, i) => <button key={t2} type="button" className="tks-node" aria-pressed={i === step} onClick={() => setStep(i)}><b>{t2}</b></button>)}</div>
      <p style={{ margin: "8px 0 0" }}>Buttons as printed: Approve - Request changes - Reject - Add a comment (optional)...</p>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Empty State</p><b>No investigations found</b><p style={{ margin: "4px 0 0" }}>Try adjusting your filters or create a new investigation. + New investigation</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Loading State</p><p style={{ margin: 0 }}>Skeleton rows - Loading investigations...</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Error State</p><b>Something went wrong</b><p style={{ margin: "4px 0 0" }}>{"We couldn't load the data. Please try again."} Retry - Contact support</p></div>
      </div></div>}
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
  const [p, setP] = useState(2);
  const [cell, setCell] = useState<[number, number]>([0, 4]);
  const [tank, setTank] = useState(28);
  const [fall, setFall] = useState(6);
  const PATTERNS = ["1. Forecast Bands", "2. Anomaly Markers", "3. Risk Heatmaps", "4. Scenario Delta Charts", "5. Threshold States", "6. Composition & Contribution"];
  const tankState = tank < 15 ? "LOW (< 15%)" : tank <= 30 ? "CAUTION (15% - 30%)" : tank <= 70 ? "HEALTHY (30% - 70%)" : "HIGH (> 70%)";
  return <Bo n="30" title="Data visualization system" sub="BrewOps Intelligence - Our visual system turns complex brewing and supply chain data into clear, actionable insight. Consistent patterns, accessible colors, and purposeful emphasis help every user make confident decisions. BUILT FOR EVERY BREWER: Accessible. Consistent. Actionable. From brewhouse to boardroom. ONE SYSTEM. EVERY DECISION." dark={false} label="BrewOps data visualization system - interactive rebuild of Budweiser_30">
    <Chips items={PATTERNS} value={p} onPick={setP} />
    {p === 0 && <div className="tks-detail" aria-live="polite"><b>Forecast Bands</b> - When to use: Show expected future range and uncertainty. Demand forecast - Next 12 weeks (All SKUs): Actual to Jun 23, then Forecast with 80% and 95% prediction bands to Aug 4 (kHL 0-250).</div>}
    {p === 1 && <div className="tks-detail" aria-live="polite"><b>Anomaly Markers</b> - When to use: Call out unusual events that need attention. Fermentation yield % (All Brewhouses), May 12 - Aug 4 vs Target (dashed): Negative anomaly markers (down triangles) and Positive anomaly markers (up triangles) as printed.</div>}
    {p === 2 && <div style={{ marginTop: 10 }}>
      <p className="tks-kicker">Supply risk heatmap - Next 30 days (columns NW - SW - MW - SE - NE; select a cell)</p>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>{HEAT30.map(([rowName, cells], ri) => cells.map((v, ci) => <button key={`${rowName}-${ci}`} type="button" className="tks-card" aria-pressed={cell[0] === ri && cell[1] === ci} onClick={() => setCell([ri, ci])} style={{ padding: 6, background: v === "High" ? "#e0483e" : v === "Elevated" ? "#f08c1a" : v === "Caution" ? "#f5c542" : "#efe6cf", color: v === "High" ? "#fff" : "#111" }}><b style={{ fontSize: 10 }}>{rowName}</b><br />{v}</button>))}</div>
      <p aria-live="polite" style={{ margin: "6px 0 0" }}>{HEAT30[cell[0]][0]} x {["NW", "SW", "MW", "SE", "NE"][cell[1]]}: <b>{HEAT30[cell[0]][1][cell[1]]}</b>. Legend as printed: High = Severe risk - Elevated = At risk - Caution = Monitor - Low = On track.</p></div>}
    {p === 3 && <div className="tks-detail" aria-live="polite"><b>Scenario Delta Charts</b> - When to use: Compare the impact of different scenarios. Service level impact vs. Base case (Week of Jul 7): {DELTA30.map(([n, v]) => `${n} ${v}`).join(" - ")}.</div>}
    {p === 4 && <div className="tks-detail" aria-live="polite"><b>Threshold States</b> - When to use: Communicate status against clear thresholds. Printed example: Tank inventory - Total network: <b>28% - 52 kHL - Caution: Inventory below healthy range. Projected to reach healthy range in 6 days.</b>
      <label style={{ display: "block", marginTop: 10 }}>Sandbox - tank inventory % (your input, classified by the printed thresholds): {tank}% - <b>{tankState}</b>
        <input type="range" min={0} max={100} value={tank} onChange={(e) => setTank(Number(e.target.value))} aria-label="Sandbox tank inventory percent" style={{ width: "100%" }} /></label></div>}
    {p === 5 && <div style={{ marginTop: 10 }}>
      <p className="tks-kicker">Demand variance - Week of Jul 7 (kHL; select a step)</p>
      <Chips items={FALLS30.map(([n]) => n)} value={fall} onPick={setFall} />
      <p aria-live="polite" style={{ margin: "6px 0 0" }}><b>{FALLS30[fall][0]}</b>: {FALLS30[fall][0] === "Base forecast" || FALLS30[fall][0] === "Actual" ? `${FALLS30[fall][1]} kHL total` : `${FALLS30[fall][1] > 0 ? "+" : ""}${FALLS30[fall][1]} kHL`} - waterfall as printed: 180 +18 +24 -15 -7 +6 = 206.</p></div>}
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Accessible Color Rules:</b> Purposeful color with redundant cues. Semantic palette: Critical (Action needed) - Elevated (At risk) - Caution (Monitor) - Healthy (On track) - Informational (For context) - Neutral (Structure &amp; text). Color accessibility: WCAG 2.1 AA compliant - Color not the only means of communication. Pattern &amp; shape key: down triangle Negative / Decrease - up triangle Positive / Increase - ! Attention / Caution - dashed Target / Threshold - band Range / Uncertainty. Typography: Inter UI - For clarity at every size. Principles: Clarity - Consistency - Inclusivity - Actionability.</p>
  </Bo>;
}

/* ---------------- Shared Control Tower data (files 31 / 33 / 40) ---------------- */
const FACILITIES_CT: Array<[string, string, string, string]> = [
  ["Brewery Columbus", "89.2%", "8,560", "Healthy"], ["Brewery Cartersville", "85.7%", "6,420", "Healthy"], ["Brewery Fort Collins", "91.3%", "4,980", "Healthy"], ["Brewery Newark", "72.1%", "2,860", "Warning"], ["Brewery Los Angeles", "65.4%", "1,740", "Critical"],
];
const ALERTS_CT: Array<[string, string, string, string]> = [
  ["2m", "CO2 levels above control limit on Line 3.", "Brew House - Line 3", "CRITICAL"], ["15m", "Unusual CO2 usage detected.", "Brew House - Utilities", "WARNING"], ["45m", "High vibration detected on Pump P-12.", "Fermentation - Pump P-12", "INFO"], ["1h", "Predicted delay: Raw materials inbound.", "Logistics - Inbound", "WARNING"], ["2h", "Seal failure investigation closed.", "Fermentation - Tank 12", "RESOLVED"],
];
function ControlTowerStats() {
  return <Stats items={[["Total Production (HL)", "24,560", "up 8.4% vs prior 7D"], ["OEE", "87.3%", "up 3.1% vs prior 7D"], ["On-Time Delivery", "92.1%", "up 2.8% vs prior 7D"], ["Inventory Health", "78%", "down 5% vs prior 7D"], ["Critical Alerts", "3", "up 2 vs prior 7D"]]} />;
}

/* ---------------- 31 - Control Tower (hi-fi) ---------------- */
export function BrewOpsControlTower() {
  const [f, setF] = useState(4);
  const [a, setA] = useState(0);
  const [gran, setGran] = useState(0);
  return <Bo n="31" title="Control Tower" sub="Real-time operational overview across the brewing supply chain. May 10 - May 17, 2024 (7D) - All Facilities. User as printed: Alex R., Supply Chain Ops. System Status: All systems operational. BrewOps Intelligence Design System v1.0 - May 2024." dark={false} label="BrewOps control tower hi-fi - interactive rebuild of Budweiser_31">
    <ControlTowerStats />
    <div className="tks-grid" style={{ gridTemplateColumns: "1.3fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Production Trend - Actual (HL) vs Target (HL), May 10 - May 17</p>
        <Chips items={["Daily", "Weekly (as printed: Daily)"]} value={gran} onPick={setGran} />
        <p style={{ margin: "6px 0 0" }}>Actual rises from ~8K to ~37K HL across the week, above the dashed target line throughout (chart represented structurally).</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Logistics Status</p>
        <p style={{ margin: 0 }}>Shipments In Transit 62 (up 6 vs prior 7D) - On-Time Delivery 92.1% (up 2.8%) - Delayed Shipments 7 (down 2 vs prior 7D) - Pending Transfers 14 (-)</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Inventory Risk Summary</p>
        <p style={{ margin: 0 }}><b style={{ fontSize: 18 }}>152 At Risk SKUs</b><br />High Risk 18 (12%) - Medium Risk 46 (30%) - Low Risk 88 (58%)</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Top drivers</p><p style={{ margin: 0 }}>Elevated demand vs forecast - Supply delay risk - Packaging constraints</p></div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Facility Overview (select)</p>
    <table className="tks-table"><thead><tr><th>Facility</th><th>OEE</th><th>Production (HL)</th><th>Status</th></tr></thead>
      <tbody>{FACILITIES_CT.map(([n, oee, prod, st], i) => <tr key={n} onClick={() => setF(i)} style={{ cursor: "pointer", background: i === f ? "#f3ead2" : undefined }}><td>{n}</td><td>{oee}</td><td>{prod}</td><td>{st}</td></tr>)}</tbody></table>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recent Alerts - View all (24) (select)</p>
        <Chips items={ALERTS_CT.map(([t, title]) => `${t} - ${title}`)} value={a} onPick={setA} />
        <p aria-live="polite" style={{ margin: "6px 0 0" }}><b>{ALERTS_CT[a][3]}</b> - {ALERTS_CT[a][1]} {ALERTS_CT[a][2]} - {ALERTS_CT[a][0]} ago. Alert / Risk Queue (right rail as printed): High Priority CO2 (CRITICAL, 2 min ago) - Investigation Needed CO2 usage (WARNING, 15 min ago) - FYI Packaging Line 2 data (INFO, 45 min ago) - Resolved seal failure (1 hr ago) - View all (7).</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Evidence &amp; Insights - Next Actions</p>
        <p style={{ margin: "4px 0" }}><b>Insight:</b> Elevated CO2 levels detected during packaging run. May 17, 8:42 AM - Confidence 78%.</p>
        <p style={{ margin: "4px 0" }}><b>Work Order:</b> WO-2024-0517-0892 - Seal replacement - Line 3 - May 17, 8:50 AM - Completed.</p>
        <p style={{ margin: "4px 0" }}><b>Historian Trend:</b> O2 Sensor - Line 3 - May 17, 8:35 - 8:45 AM.</p>
        <p style={{ margin: "6px 0 0" }}>Next Actions: CRITICAL Address CO2 levels on Line 3 (Owner Jamie D., Due in 45m) - Take Action - WARNING Review delayed raw materials (Owner Morgan S., Due in 2h) - Review - INFO Validate packaging data update (Owner Taylor R., Due in 6h) - Review. Drill into details: Production - Inventory - Quality - Logs.</p></div>
    </div>
  </Bo>;
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
  return <Bo n="33" title="Control Tower Explained" sub="Five ways the Control Tower turns data into confident, timely decisions across the brewing supply chain. Same dashboard as file 31 (May 10 - May 17, 2024), annotated 1-5." dark={false} label="BrewOps control tower explained - interactive rebuild of Budweiser_33">
    <div className="tks-flow" role="group">{EXPLAIN33.map(([t], i) => <button key={t} type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><span className="tks-num" style={{ background: ["#f5a800", "#e07b1f", "#2563eb", "#18a957", "#7c4dff"][i] }}>{i + 1}</span> <b>{t}</b><br />{EXPLAIN33[i][1]}</button>)}</div>
    <div className="tks-detail" aria-live="polite">{EXPLAIN33[s][2]}</div>
    <div style={{ marginTop: 10 }}><ControlTowerStats /></div>
  </Bo>;
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
  const [tab, setTab] = useState(0);
  const [sku, setSku] = useState(0);
  const [sig, setSig] = useState(0);
  const TABS = ["Overview", "Contributing Signals", "Affected SKUs", "Recommendations", "History"];
  return <Bo n="34" title="Demand Risk: Elevated CO2 levels detected" sub="Investigations - Demand Risk - EVT-2024-0517-002 - High Priority - Brew House - Line 3 - May 17, 2024 8:42 AM - 78% Confidence. Filters: May 10 - May 17, 2024 (7D) - Brew House - Line 3. Share / Create Investigation. Footer as printed: BrewOps Intelligence Design System v1.0 - May 2025." dark={false} label="BrewOps demand risk investigation - interactive rebuild of Budweiser_34">
    <Chips items={TABS} value={tab} onPick={setTab} />
    {tab === 0 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Total Impact (7D)", "-12,450 HL"], ["% vs Forecast", "-11.3%"], ["Peak Variance", "-2,180 HL", "May 15"]]} />
      <p style={{ margin: "8px 0 0" }}>Forecast vs Actual Demand chart as printed: Actual Demand (amber) vs Forecast (dashed) with Confidence Range (78%), May 10 - May 17 - Investigation opened May 13, 8:42 AM (chart represented structurally).</p></div>}
    {tab === 1 && <div style={{ marginTop: 10 }}><Chips items={SIGNALS34.map(([t]) => t)} value={sig} onPick={setSig} />
      <div className="tks-detail" aria-live="polite"><b>{SIGNALS34[sig][2]}</b> - {SIGNALS34[sig][1]} - Evidence &amp; Contributing Signals: View all (7).</div></div>}
    {tab === 2 && <div style={{ marginTop: 10 }}>
      <table className="tks-table"><thead><tr><th>SKU</th><th>Package (Product: Budweiser)</th><th>Actual (7D)</th><th>Forecast (7D)</th><th>Variance (HL)</th><th>Variance (%)</th><th>Severity</th><th>Confidence</th></tr></thead>
        <tbody>{SKUS34.map((r2, i) => <tr key={r2[0]} onClick={() => setSku(i)} style={{ cursor: "pointer", background: i === sku ? "#f3ead2" : undefined }}>{r2.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table>
      <p aria-live="polite" style={{ margin: "6px 0 0" }}>Affected SKUs (8) - Showing 1 to 5 of 8 SKUs - 5 per page - pages 1-2. Selected SKU {SKUS34[sku][0]}: variance {SKUS34[sku][4]} HL ({SKUS34[sku][5]}).</p></div>}
    {tab === 3 && <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Recommended Next Steps</p>
      <p style={{ margin: "4px 0" }}><b>Investigate CO2 injection system on Line 3</b> - Check regulator pressure and valve performance. - High Impact</p>
      <p style={{ margin: "4px 0" }}><b>Review CO2 supply and storage levels</b> - Validate availability and delivery schedule. - Medium Impact</p>
      <p style={{ margin: "4px 0" }}><b>Monitor demand and system metrics</b> - Continue close monitoring over next 48 hours. - Low Impact</p>
      <p style={{ margin: "6px 0 0" }}>View all recommendations.</p></div>}
    {tab === 4 && <div className="tks-detail" aria-live="polite">The History tab is printed in the tab row; the slide shows the Overview tab content, so no history rows are printed - none are invented here.</div>}
  </Bo>;
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
  const cur = SCEN35[s];
  return <Bo n="35" title="Logistics scenario comparison" sub="Control Tower - Logistics - Scenario Compare. Compare tradeoffs across logistics scenarios to make the best end-to-end decision. Scenarios last updated May 17, 2024 8:45 AM. May 10 - May 17, 2024 (7D) - All Facilities." dark={false} label="BrewOps logistics scenario comparison - interactive rebuild of Budweiser_35">
    <Chips items={SCEN35.map(([t, tag]) => `${t} (${tag})`)} value={s} onPick={setS} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.3fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Scenario Inputs</p>
        <p style={{ margin: 0 }}>Time horizon: May 10 - May 17, 2024 (7D) - Facilities: All (12) - Products: All (24 SKUs) - Lanes: All (42) - Demand forecast: Latest forecast v3 - Starting inventory: As of May 10, 2024. Edit assumptions.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Scenario Assumptions</p>
        <p style={{ margin: 0 }}>Fuel price $3.85 / gal (+0.05) - Carrier capacity Constrained - Demand volatility Medium - Transit time variance Normal - Inventory policy Service-focused.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Scenario Comparison (vs baseline) - Best / Range</p>
        <p style={{ margin: 0 }}>Service level 96.3% / 89.1% - 96.3% - Landed cost $2.21M / $2.21M - $2.63M - Delayed deliveries 9 / 9 - 38 - Inventory impact +2.6% / -0.8% - +2.6% - Risk score Low / Low - High.</p></div>
      <div className="tks-card" aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>{cur[0]} - {cur[1]}</p><p style={{ margin: "4px 0" }}>{cur[2]}</p>
        <table className="tks-table"><tbody>{cur[3].map(([k, v, d]) => <tr key={k}><td>{k}</td><td><b>{v}</b></td><td>{d}</td></tr>)}</tbody></table>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Top Drivers</p><ul style={{ margin: 0 }}>{cur[4].map((x) => <li key={x}>{x}</li>)}</ul>
        <p style={{ margin: "6px 0 0", fontSize: 11 }}>Metric trends (7D) as printed per scenario: Service level - Landed cost - Delayed deliveries - Inventory impact - Risk score sparklines.</p></div>
    </div>
    <div className="tks-card" style={{ marginTop: 10, borderColor: "#18a957" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Recommendation</p>
      <p style={{ margin: 0 }}><b>Service-optimized scenario</b> - Best balance of service and risk with manageable cost increase. Meets 95%+ service target - Minimizes supply risk - Acceptable cost increase (+6%).</p>
      <p style={{ margin: "8px 0 0" }}><button type="button" className="tks-btn" aria-pressed={adopted} onClick={() => setAdopted((v) => !v)} style={{ background: "#18a957", borderColor: "#18a957" }}>{adopted ? "Recommended scenario adopted" : "Adopt recommended scenario"}</button> <span>Export comparison - as printed. {"What's included in each scenario:"} Transportation plan (Carrier assignments) - Inventory plan (Allocation &amp; positioning) - Capacity plan (Facility &amp; carrier capacity) - Service plan (SLAs &amp; priorities) - Risk evaluation (Disruption &amp; constraints). About scenario modeling: Scenarios are generated using AI optimization and historical performance.</span></p></div>
  </Bo>;
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
  const [plan, setPlan] = useState(1);
  return <Bo n="36" title="Recommendation: Optimize Packaging Line 3 Schedule" sub="Back to Approvals - REC-2024-0517-0892 - Packaging - Line 3 - Brew House - May 17, 2024 - 9:15 AM - High Priority - Status as printed: Pending Approval. Adjust sequence and changeover window to reduce CO2 usage and improve throughput." dark={false} label="BrewOps recommendation approval - interactive rebuild of Budweiser_36">
    <div className="tks-grid" style={{ gridTemplateColumns: "1.2fr 1fr", marginTop: 4 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recommendation Summary</p>
        <p style={{ margin: 0 }}>Reschedule Packaging Line 3 to run Brew House - Tank 12 first, followed by Fermentation - Tank 12. Tags: Reduces CO2 usage - Improves throughput - Minimal changeover impact - No quality impact.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Why this recommendation? (plan toggle)</p>
        <Chips items={["Current Plan (Today)", "Recommended Plan"]} value={plan} onPick={setPlan} />
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{plan === 0 ? "Fermentation Tank 12, 6:00 AM - 11:00 AM (Production Run) - Changeover 60 min - Brew House Tank 12, 12:00 PM - 5:00 PM (Production Run)." : "Brew House Tank 12, 6:00 AM - 11:00 AM (Production Run) - Changeover 45 min - Fermentation Tank 12, 11:45 AM - 4:45 PM (Production Run)."}</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Assumptions</p>
        <ul style={{ margin: 0 }}><li>Demand forecast remains within ±5% for next 24 hours</li><li>No unplanned maintenance on Line 3</li><li>Raw material availability is as planned</li><li>Changeover teams available at scheduled times</li></ul>
        <p style={{ margin: "4px 0 0", fontSize: 11 }}>Assumptions are conditions not guaranteed. Monitor and adjust as needed.</p></div>
      <div>
        <Stats items={[["CO2 Usage", "-2,360 kg", "down 7.8%"], ["Total Production (HL)", "+1,250 HL", "up 5.4%"], ["Changeover Time", "-15 min", "down 20%"], ["OEE", "+2.3 pts", "up 2.6%"]]} />
        <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Confidence Level - 78% High</p><Bar pct={78} label="Recommendation confidence 78 percent" />
          <p style={{ margin: "4px 0 0", fontSize: 11 }}>Based on historical performance and similar runs (as printed).</p>
          <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Risks &amp; Considerations</p>
          <p style={{ margin: 0 }}>High - Changeover delay could impact downstream schedule - Medium - CO2 savings dependent on equipment efficiency - Low - Minor quality variation possible during first hour. Mitigations are in place. Monitoring recommended during execution.</p></div>
      </div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1.2fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Activity Log (select) - View full audit trail</p>
        <Chips items={LOG36.map(([t, a]) => `${t} - ${a}`)} value={logRow} onPick={setLogRow} />
        <p aria-live="polite" style={{ margin: "6px 0 0" }}><b>{LOG36[logRow][1]}</b> by {LOG36[logRow][2]}, {LOG36[logRow][3]}: {LOG36[logRow][4]}</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Ownership &amp; Approval</p>
        <p style={{ margin: "4px 0" }}>Recommendation Owner: Jamie D., Process Engineer, Brew House - Business Owner: Morgan S., Operations Manager, Brew House.</p>
        <p style={{ margin: "4px 0" }}>Approvers: Taylor R., Production Director - Pending - Alex R., Supply Chain Ops - Pending - Jamie T., Quality Manager - Pending.</p>
        <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Approval Actions (interactive - mirrors the printed controls)</p>
        <p style={{ display: "flex", gap: 5, flexWrap: "wrap", margin: 0 }}>
          <button type="button" className="tks-btn" aria-pressed={decision === "approve"} onClick={() => setDecision("approve")} style={{ background: "#18a957", borderColor: "#18a957" }}>Approve</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={decision === "changes"} onClick={() => setDecision("changes")}>Request Changes</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={decision === "reject"} onClick={() => setDecision("reject")} style={{ color: "#c8102e", borderColor: "#c8102e" }}>Reject</button></p>
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{decision === "approve" ? "Decision staged: Approve - Submit Decision (with Notify stakeholders on decision checked, as printed) records it in the audit trail." : decision === "changes" ? "Decision staged: Request Changes - a comment is required for changes or rejection, as printed." : decision === "reject" ? "Decision staged: Reject - a comment is required for changes or rejection, as printed." : "No decision staged yet - the slide's status is Pending Approval."}</p></div>
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
  const [worstFirst, setWorstFirst] = useState(false);
  const rows = worstFirst ? [...FLEET37].reverse() : FLEET37;
  return <Bo n="37" title="Predictive Maintenance - Fleet View" sub="Rank and monitor equipment health across all breweries, sites, and production lines. May 10 - May 17, 2024 (7D) - All Facilities. User as printed: Alex R., Maintenance Lead. Footer as printed: v1.0 - May 2025." dark={false} label="BrewOps predictive maintenance fleet view - interactive rebuild of Budweiser_37">
    <Stats items={[["Overall Fleet Health", "78%", "up 5% vs prior 7D"], ["Healthy Assets", "142", "up 12 vs prior 7D"], ["At Risk Assets", "38", "up 4 vs prior 7D"], ["Critical Assets", "7", "down 2 vs prior 7D"], ["MTBF (Hours)", "412", "up 18 vs prior 7D"], ["Open Work Orders", "52", "up 6 vs prior 7D"]]} />
    <p style={{ margin: "10px 0 0" }}><button type="button" className="tks-chip" aria-pressed={worstFirst} onClick={() => setWorstFirst((v) => !v)}>{worstFirst ? "Order: worst health first (explorer)" : "Order: as printed, rank 1-10 (healthiest first)"}</button></p>
    <table className="tks-table" style={{ marginTop: 8 }}><thead><tr><th>Rank</th><th>Asset</th><th>Type</th><th>Facility / Line</th><th>Health Score</th><th>MTBF (hrs)</th><th>Last Inspection</th><th>Anomalies</th></tr></thead>
      <tbody>{rows.map((r2, i) => { const orig = FLEET37.indexOf(r2); return <tr key={r2[0]} onClick={() => setRow(orig)} style={{ cursor: "pointer", background: orig === row ? "#f3ead2" : undefined }}><td>{orig + 1} ({r2[6]})</td><td><b>{r2[0]}</b></td><td>{r2[1]}</td><td>{r2[2]}</td><td>{r2[3]}</td><td>{r2[4]}</td><td>{r2[5]}</td><td>{r2[7]}</td></tr>; })}</tbody></table>
    <p aria-live="polite" style={{ margin: "6px 0 0" }}>Selected: <b>{FLEET37[row][0]}</b> - health {FLEET37[row][3]} - Showing 1 to 10 of 126 assets - 10 per page - pages 1-5 ... 13 as printed.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Maintenance Risk Summary - 45 At Risk Assets</p><p style={{ margin: 0 }}>Critical 7 (16%) - High 15 (33%) - Medium 23 (51%). Top Risk Drivers: Vibration anomalies - Rising temperature - Pressure variance - Runtime exceeded.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Open Maintenance Risks - View all (7)</p><p style={{ margin: 0 }}>Compressor 1 (CP-01) vibration above threshold - Brewery Fort Collins - Utilities - CRITICAL - 10 min ago. Boiler 2 (BLR-02) tube temperature rising - Brewery Cartersville - Utilities - CRITICAL - 25 min ago. Pump P-12 pressure variance detected - Brewery Los Angeles - Line 3 - WARNING - 45 min ago. CIP Skid 2 maintenance window approaching - Brewery Newark - Utilities - INFO - 1 hr ago.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Upcoming Maintenance - Recommended Actions - Health Distribution</p><p style={{ margin: 0 }}>CIP Skid 2 - Preventive Maintenance - May 18, 8:00 AM - Brewery Newark. Miller 3 - Vibration Analysis - May 18, 10:00 AM - Brewery Cartersville. Brite Tank 8 - Inspection - May 19, 9:00 AM - Brewery Columbus. Actions: Inspect Compressor 1 bearings (High, Open) - Check Boiler 2 heat exchanger tubes (High, Open) - Replace Pump P-12 seals (Medium, Open). Distribution: Healthy (90-100%) 22% - Good (70-89%) 36% - Fair (50-69%) 28% - Poor (30-49%) 10% - Critical (0-29%) 4%.</p></div>
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
  const [tab, setTab] = useState(0);
  const [sensor, setSensor] = useState(0);
  const [alt, setAlt] = useState(0);
  const ALTS = [["Schedule maintenance within 7 days (Next Best Action)", "Replace drive-end bearing on Filler 2 - Est. downtime: 2.5 hours - Create Work Order"], ["Monitor closely", "Increase monitoring for 7 days - Medium risk"], ["Plan during next PM window", "Schedule during next planned maintenance - Higher risk"], ["No action", "Risk of unplanned failure increases - Not recommended"]];
  return <Bo n="38" title="Filler 2 - Online" sub="Control Tower - Packaging Line 2 - Filler 2. Packaging Line 2 - Brew House Columbus - Asset ID: FLR-02. Last data received May 17, 2024 8:42 AM - Live. Tabs as printed: Overview - History - Alerts (3) - Work Orders (2) - Documents. User as printed: Alex R., Reliability Engineer." dark={false} label="BrewOps Filler 2 asset detail - interactive rebuild of Budweiser_38">
    <Chips items={["Overview", "History", "Alerts (3)", "Work Orders (2)", "Documents"]} value={tab} onPick={setTab} />
    <Stats items={[["Health Score", "82% Healthy", "up 7% vs prior 7D"], ["RUL Estimate", "18 days", "Moderate risk - down 6 days vs prior 7D"], ["Predicted Failure", "Jun 4, 2024", "± 3 days"], ["Utilization (7D)", "87.3%", "up 3.1% vs prior 7D"], ["OEE Impact (Est.)", "4.2%", "down 0.6% vs prior 7D"]]} />
    {tab === 0 && <div className="tks-grid" style={{ gridTemplateColumns: "1.2fr 1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Sensor Trends - 7D (Vibration RMS - Temperature - Pressure - Baseline)</p>
        <p style={{ margin: 0 }}><b>Anomaly detected - May 16, 10:15 AM - Present:</b> Vibration RMS is 164% above baseline - Bearing defect pattern detected - Possible cause: Bearing wear. (Anomaly Window highlighted on the printed chart, May 15-16.)</p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Sensor Summary (select)</p>
        <Chips items={SENSORS38.map(([id]) => id)} value={sensor} onPick={setSensor} />
        <p aria-live="polite" style={{ margin: "6px 0 0" }}><b>{SENSORS38[sensor][0]}</b> - {SENSORS38[sensor][1]}: Latest {SENSORS38[sensor][2]} vs Baseline {SENSORS38[sensor][3]} - Deviation {SENSORS38[sensor][4]} - Status {SENSORS38[sensor][5]}.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Asset Health Breakdown</p>
        {HEALTH38.map(([n, v]) => <p key={n} style={{ margin: "4px 0" }}>{n} - {v}% <Bar pct={v} label={`${n} health ${v} percent`} /></p>)}</div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Maintenance History - View all</p>
        <p style={{ margin: "4px 0" }}><b>Apr 18, 2024</b> - Preventive Maintenance - Lubrication and inspection - Technician: Jamie D.</p>
        <p style={{ margin: "4px 0" }}><b>Mar 12, 2024</b> - Work Order WO-2024-0312-0045 - Bearing replacement (Drive-end) - Technician: Morgan S.</p>
        <p style={{ margin: "4px 0" }}><b>Feb 28, 2024</b> - Work Order WO-2024-0228-0021 - Vibration investigation - Technician: Taylor K.</p>
        <p style={{ margin: "4px 0" }}><b>Feb 15, 2024</b> - Preventive Maintenance - Routine inspection - Technician: Alex R.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Evidence Sources - View all (7)</p>
        <p style={{ margin: 0 }}>Vibration Analysis - Bearing defect pattern detected - May 17, 8:35 AM - High confidence - Temperature Trend - Elevated temperature trend - May 17, 8:30 AM - Medium confidence - Oil Analysis - Increased wear metals detected - May 16, 4:20 PM - High confidence.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recommendation - Generated 15 min ago</p>
        <p style={{ margin: 0 }}><b>Address bearing wear risk</b> - High confidence - Reduces risk of unplanned downtime.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Actions (select)</p>
        <Chips items={ALTS.map(([t]) => t)} value={alt} onPick={setAlt} />
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{ALTS[alt][1]}</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>AI Insight - Based on similar assets</p>
        <p style={{ margin: 0 }}>23% of similar fillers experienced failure within 21 days when vibration exceeded current levels. View similar cases.</p></div>
    </div>}
    {tab !== 0 && <div className="tks-detail" aria-live="polite">Tab {["Overview", "History", "Alerts (3)", "Work Orders (2)", "Documents"][tab]} is printed in the tab row; the slide shows the Overview tab, so no separate rows for this tab are printed - none are invented here. Printed counts: Alerts 3 - Work Orders 2.</div>}
  </Bo>;
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
  return <Bo n="39" title="Quality Inspection Flow" sub="Optional Quality Module - End-to-end defect detection, human verification, traceability, and corrective action. May 10 - May 17, 2024 (7D) - Brewery Columbus. User as printed: Alex R., Quality Manager." dark={false} label="BrewOps quality inspection flow - interactive rebuild of Budweiser_39">
    <div className="tks-flow" role="group">{WF.map(([t, d, n], i) => <button key={t} type="button" className="tks-node" aria-pressed={i === wf} onClick={() => setWf(i)}><b>{t}</b><br />{d} - {n}</button>)}</div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Inspection Queue (86) - Reviewed 76 - Escalated 10 - All Items 1,248 (select an item)</p>
    <table className="tks-table"><thead><tr><th>Item ID</th><th>Line / Area</th><th>Defect Type</th><th>Detected</th><th>AI Confidence</th><th>Status</th><th>Priority</th></tr></thead>
      <tbody>{QUEUE39.map((r2, i) => <tr key={r2[0]} onClick={() => { setItem(i); setVerdict(null); }} style={{ cursor: "pointer", background: i === item ? "#f3ead2" : undefined }}>{r2.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table>
    <p style={{ margin: "4px 0 0", fontSize: 11 }}>Showing 1 to 8 of 86 items - 10 per page - pages 1-5 ... 9 as printed.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1.3fr 1fr", marginTop: 10 }}>
      <div className="tks-card" aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Defect Overview - {cur[0]} - {cur[5]} - 1 of 86</p>
        <p style={{ margin: "4px 0" }}>Defect Type: <b>{cur[2]}</b> - Line / Area: {cur[1]} - Detected: {cur[3]} - AI Confidence: <b>{cur[4]}</b> - Priority: {cur[6]} - Rule / Model: CapSeal_v2.3 (as printed for item 0001).</p>
        <p style={{ margin: "4px 0" }}>Evidence captures as printed for item 0001: 5 bottle-cap photos at 8:42:11 / 8:42:10 / 8:42:09 / 8:42:08 / 8:42:07 AM + 3 more (represented structurally).</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Verification - Assign to: Jamie D.</p>
        <p style={{ margin: "4px 0", fontSize: 11.5 }}>Verification history as printed for item 0001: Approved by Jamie D. - May 17, 8:45 AM - Pending review - Assigned to Jamie D. - May 17, 8:42 AM - Detected by AI - May 17, 8:42 AM. (The item status prints as Needs Review while the history prints an approval - both transcribed as printed.)</p>
        <p style={{ display: "flex", gap: 5, margin: "8px 0 0" }}>
          <button type="button" className="tks-btn" aria-pressed={verdict === "approve"} onClick={() => setVerdict("approve")} style={{ background: "#c8102e", borderColor: "#c8102e" }}>Approve</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={verdict === "escalate"} onClick={() => setVerdict("escalate")}>Escalate</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={verdict === "reject"} onClick={() => setVerdict("reject")}>Reject</button>
          <span>{verdict ? `Verification staged: ${verdict} for ${cur[0]} (explorer state; printed status: ${cur[5]}).` : ""}</span></p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Traceability (item 0001 panel as printed)</p>
        <p style={{ margin: "4px 0" }}>Batch ID: BRW-0517-L3-0842 - Production Time: May 17, 2024 08:00 - 09:00 AM - Line / Equipment: Line 3 - Filler - Material Lot: CAP-ALU-0517-A - Downstream Impact: 2,340 units. View full traceability.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Corrective Action</p>
        <p style={{ margin: "4px 0" }}>Action Type: Select action type - Description: Describe the corrective action... - Assign to: Select owner - Target Date: Select date - Create Action.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Recent Corrective Actions</p>
        <p style={{ margin: "4px 0" }}>Capper Torque Adjustment - Line 3 - May 16, 2024 - Open - Due in 2d - Seal Temperature Check - Line 2 - May 15, 2024 - In Progress - Due in 1d - Vision Sensor Cleaning - Line 1 - May 14, 2024 - Resolved - Completed.</p></div>
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
  return <Bo n="40" title="Control Tower - with BrewOps Copilot panel" sub="The file-31 Control Tower (Brewery Columbus selected, May 10 - May 17, 2024) with the Copilot panel open at right. Copilot is scoped to your current context: Facility Brewery Columbus - Time range May 10 - May 17, 2024 (7D)." dark={false} label="BrewOps control tower with copilot - interactive rebuild of Budweiser_40">
    <ControlTowerStats />
    <div className="tks-card" style={{ marginTop: 10 }}>
      <p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span className="tks-kicker" style={{ margin: 0 }}>AI - BrewOps Copilot - BETA</span><button type="button" className="tks-chip" aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? "Close panel (x)" : "Open Copilot panel"}</button></p>
      {open && <div aria-live="polite">
        <p style={{ margin: "8px 0" }}>{"Hi Alex! I'm your BrewOps Copilot. I can help you explore your operations, investigate issues, and uncover insights. What would you like to know?"}</p>
        <p className="tks-kicker">Suggested prompts (select)</p>
        <Chips items={PROMPTS40.map(([t]) => t)} value={q} onPick={setQ} />
        <p style={{ margin: "8px 0 0" }}>{q === 4 ? "As printed, this question sits composed in the Copilot input box - no answer is shown on the slide, and none is invented here." : "As printed, this is a suggested prompt chip - no answer is shown on the slide for it."}</p>
        <p style={{ margin: "6px 0 0", fontSize: 11 }}>Copilot can make mistakes. Verify important information. (as printed)</p></div>}
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}>Dashboard behind the panel, as printed: Production Trend - Inventory Risk Summary 152 At Risk SKUs (High 18 / Medium 46 / Low 88) - Logistics Status (62 in transit, 92.1% on-time, 7 delayed, 14 pending) - Facility Overview (Columbus 89.2% / Cartersville 85.7% / Fort Collins 91.3% / Newark 72.1% Warning / Los Angeles 65.4% Critical) - Recent Alerts - Next Actions - Drill into Details.</p>
  </Bo>;
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
  const cur = STATES41[s];
  return <Bo n="41" title="BrewOps Copilot State Gallery" sub={"The printed title spells it \"State Gailery\" - transcribed as printed. The Copilot responds with appropriate transparency and guardrails based on data confidence and decision context. Legend: Observation (What was detected) - Inference (What it likely means) - Recommendation (What we suggest) - Action (What was taken)."} dark={false} label="BrewOps copilot state gallery - interactive rebuild of Budweiser_41">
    <Chips items={STATES41.map((x) => x.name)} value={s} onPick={(i) => { setS(i); setApproved(false); }} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite">
      <p className="tks-kicker" style={{ marginTop: 0 }}>AI - BrewOps Copilot - BETA - {cur.name}: {cur.desc}</p>
      <p style={{ margin: "6px 0", textAlign: "right" }}><span className="tks-tag">{cur.q}</span></p>
      <p style={{ margin: "6px 0" }}><b>{cur.banner}</b></p>
      <p style={{ margin: "4px 0" }}><b>Observation</b> - {cur.obs}</p>
      <p style={{ margin: "4px 0" }}><b>Inference</b> - {cur.inf} - Confidence: {cur.infConf}</p>
      <p style={{ margin: "4px 0" }}><b>Recommendation</b> - {cur.rec} - Confidence: {cur.recConf}</p>
      {cur.extra}
      <p style={{ margin: "8px 0 0" }}><b>Copilot guardrails:</b> {cur.guard}</p>
      {s === 2 && <p style={{ margin: "8px 0 0", display: "flex", gap: 5 }}><button type="button" className="tks-btn tks-btn--ghost">Review details</button><button type="button" className="tks-btn" aria-pressed={approved} onClick={() => setApproved((v) => !v)} style={{ background: "#5b3df0", borderColor: "#5b3df0" }}>{approved ? "Action approved" : "Approve action"}</button></p>}
      <p style={{ margin: "8px 0 0", fontSize: 11 }}>Ask a follow-up question or adjust your request... (as printed)</p></div>
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
  const cur = OUTCOMES42[o];
  return <Bo n="42" title="Outcome scorecard" sub="Verified evidence of impact from the BrewOps Intelligence demonstrator. Verified by evidence. Not estimated. All measures below are backed by documented evidence or system-derived data. As of May 17, 2024. Footer as printed: v1.0 - May 2025." dark={false} label="BrewOps outcome scorecard - interactive rebuild of Budweiser_42">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{OUTCOMES42.map(([name, val], i) => <button key={name} type="button" className={`tks-card${i === o ? " is-on" : ""}`} aria-pressed={i === o} onClick={() => setO(i)}><p className="tks-kicker" style={{ marginTop: 0 }}>{name} - Verified evidence</p><b style={{ fontSize: 16, color: "#137a3f" }}>{val}</b></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]} - {cur[1]}</b><p style={{ margin: "5px 0 0" }}>{cur[2]}</p><p style={{ margin: "5px 0 0" }}>Source: {cur[3]} - Date: {cur[4]}</p></div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Outcome Summary - Verified outcomes</p><b style={{ fontSize: 20, color: "#137a3f" }}>6 / 6</b><p style={{ margin: "4px 0 0" }}>All outcome measures have verified evidence. Legend: Verified evidence (backed by documented proof or system data) - Projected value (estimated based on early signals and industry benchmarks).</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Projected impact - Tracking post-launch</p><p style={{ margin: 0 }}>Business impact and adoption metrics will be reported after pilot deployment. <b>Next Update: June 14, 2024</b> - Post-pilot outcomes and business impact will be published. About this scorecard: Measures reflect the current state of the BrewOps Intelligence demonstrator as of May 17, 2024. Future value will be tracked post-launch.</p></div>
    </div>
  </Bo>;
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
  const cur = LAYERS43[l];
  return <Bo n="43" title="BrewOps Intelligence System Architecture" sub="Secure, scalable, and observable architecture for real-time brewing intelligence. SECURE (Zero trust by default) - SCALABLE (Built for growth and resilience) - REAL-TIME (Stream, analyze, act) - INTELLIGENT (AI-powered insights and automation). Footer as printed: v1.0 - May 2025." dark={false} label="BrewOps system architecture - interactive rebuild of Budweiser_43">
    <Chips items={LAYERS43.map(([t]) => t)} value={l} onPick={setL} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>{cur[0]}{cur[1] ? ` - ${cur[1]}` : ""}</p>
      <ul style={{ margin: 0 }}>{cur[2].map((x) => <li key={x}>{x}</li>)}</ul></div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>External Data Sources</p><p style={{ margin: 0 }}>Brewery Systems (DCS, PLC, Historian, MES, SCADA) - Lab Systems (LIMS, Quality Results, Microbiology) - Enterprise Systems (ERP, CMMS, Work Orders, Inventory, HR) - IoT &amp; Edge Devices (Sensors, Gateways, Edge Collectors) - External Data (Weather, Utility Rates, Market Data) - Files &amp; Documents (SOPs, Batch Records, Manual Logs).</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Cross-Cutting Services</p><p style={{ margin: 0 }}>Notification Service (Email, SMS, In-App, Webhooks) - Feature Flags (Rollout &amp; Experimentation) - Configuration Service (Centralized Config Management) - Data Quality Service (Monitoring &amp; Rules) - Job Scheduler (Airflow / Temporal) - Backup &amp; DR (Backup, Restore, Disaster Recovery).</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Platform Foundations</p><p style={{ margin: 0 }}><b>Authorization &amp; Security:</b> Identity Provider (OIDC / SAML) - RBAC / ABAC - MFA &amp; SSO - Secrets Management - Row &amp; Field Level Security. <b>Observability &amp; Operations:</b> Logging (ELK / OpenSearch) - Metrics (Prometheus / Grafana) - Tracing (OpenTelemetry) - Alerting &amp; Incident Management - Audit Logs. <b>Deployment &amp; Infrastructure:</b> Deployed on AWS (Multi-AZ) - VPC &amp; Networking - EKS (Kubernetes) - Auto Scaling - CI/CD Pipeline (GitHub Actions) - IaC (Terraform) - Monitoring (CloudWatch) - WAF &amp; Security (DDoS, Firewall, Shield).</p></div>
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}>Legend as printed: Data Flow - Control / Config Flow - Observability / Logs.</p>
  </Bo>;
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
  const cur = FLOW44[s];
  return <Bo n="44" title="Data Flow Sequence" sub="From alert to action: End-to-end operational flow. CLARITY - FOCUS - TRUST - SPEED (as across the foundations boards). Footer as printed: v1.0 - May 2025." dark={false} label="BrewOps data flow sequence - interactive rebuild of Budweiser_44">
    <div className="tks-flow" role="group">{FLOW44.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">-&gt;</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><p style={{ margin: 0 }}>{cur[1]}</p>
      <p style={{ margin: "6px 0 0" }}><b>Worked example (the CO2 Line 3 alert, threaded through all 8 steps):</b> {cur[2]}</p>
      <p style={{ margin: "6px 0 0" }}><b>Systems involved / data flow:</b> {cur[3]}</p>
      <p style={{ margin: "6px 0 0" }}><b>Outcome:</b> {cur[4]}</p></div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Flow Principles:</b> End-to-end visibility (Track every step from signal to resolution) - Right information, right time (Surface the most relevant context automatically) - Human-in-the-loop (Keep operators in control with clear recommendations) - Trusted &amp; traceable (Every action is logged, auditable, and compliant) - Continuous improvement (Capture outcomes to improve models and processes). Legend: Detect - Route - Retrieve - Recommend - Act - Audit.</p>
  </Bo>;
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
  return <Bo n="45" title="BrewOps Intelligence in Action" sub="From real-time insights to real results. Built with reusable components, consistent patterns, and production-ready code. Case Study - bw-43-code-and-ui-proof. Built with BrewOps UI - Production Ready." dark={false} label="BrewOps in action code proof - interactive rebuild of Budweiser_45">
    <p className="tks-kicker">The printed Control Tower KPI cards (select) - rendered by the component at right</p>
    <Chips items={KPIS45.map(([t]) => t)} value={k} onPick={setK} />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.2fr", marginTop: 10 }}>
      <div className="tks-card" aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>{KPIS45[k][0]}</p><b style={{ fontSize: 22 }}>{KPIS45[k][1]}</b><p style={{ margin: "4px 0 0" }}>{KPIS45[k][2]}</p>
        <p style={{ margin: "8px 0 0", fontSize: 11.5 }}>Live explorer card rendered with the printed props: title, value, delta, deltaLabel, trend, icon and chart slots - exactly the KpiCardProps contract printed in the code panel.</p></div>
      <div className="tks-card" style={{ background: "#0d1520", color: "#d7e3ee" }}><p className="tks-kicker" style={{ marginTop: 0, color: "#9fb4c8" }}>Kpi Card.tsx - TSX (as printed, abridged)</p>
        <pre style={{ whiteSpace: "pre-wrap", fontSize: 10.5, margin: 0, fontFamily: "IBM Plex Mono, monospace" }}>{`import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendUp, TrendDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type KpiCardProps = {
  title: string;
  value: string | number;
  delta: number;
  deltaLabel: string;
  trend: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  chart?: React.ReactNode;
  className?: string;
};

export const KpiCard: React.FC<KpiCardProps> = ({ title, value, delta, deltaLabel, trend, icon, chart, className }) => {
  const isUp = trend === 'up';
  const isDown = trend === 'down';
  return (
    <Card className={cn('relative overflow-hidden', className)}>
      <CardContent className="p-4"> ... </CardContent>
    </Card>
  );
};`}</pre>
        <p className="tks-kicker" style={{ margin: "10px 0 4px", color: "#9fb4c8" }}>Production Ready checklist (toggle)</p>
        <p style={{ display: "flex", gap: 5, flexWrap: "wrap", margin: 0 }}>{CHECKS.map((c2, i) => <button key={c2} type="button" className="tks-chip" aria-pressed={checks[i]} onClick={() => setChecks((v) => v.map((x, j) => (j === i ? !x : x)))}>{checks[i] ? "✓ " : ""}{c2}</button>)}</p>
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{checks.filter(Boolean).length} / 4 production-ready qualities checked on the printed panel.</p></div>
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}>The dashboard beside the code is the file-31 Control Tower (May 10 - May 17, 2024): Production Trend, Inventory Risk Summary (152), Logistics Status, Facility Overview, Recent Alerts, Next Actions. BrewOps Intelligence Design System v1.0 - May 2024.</p>
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
  const [tab, setTab] = useState(0);
  const [suite, setSuite] = useState(4);
  const TABS = ["Automated Tests", "Accessibility (axe-core)", "Performance (Lighthouse)", "API Contracts (Pact)", "CI / Deployment"];
  return <Bo n="46" title="BW-44: Quality Evidence" sub="Proof of quality across testing, accessibility, performance, contracts, and deployment. DATE: May 17, 2024 8:42 AM CDT - ENVIRONMENT: Staging (Preview) - BUILD: #20240517.42, Commit 7f3a9c1 - TRIGGERED BY: alex.r@abbev.com, CI Pipeline (all as printed). Footer as printed: v1.0 - May 2025." dark={false} label="BrewOps BW-44 quality evidence - interactive rebuild of Budweiser_46">
    <Chips items={TABS} value={tab} onPick={setTab} />
    {tab === 0 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Total", "362"], ["Passed", "344 - 95.0%"], ["Failed", "12 - 3.3%"], ["Skipped", "6 - 1.7%"], ["Total duration", "17m 13s"]]} />
      <table className="tks-table" style={{ marginTop: 10 }}><thead><tr><th>Suite</th><th>Tests</th><th>Passed</th><th>Failed</th><th>Skipped</th><th>Duration</th></tr></thead>
        <tbody>{SUITES46.map(([n, t, p2, f, sk, d], i) => <tr key={n} onClick={() => setSuite(i)} style={{ cursor: "pointer", background: i === suite ? "#f3ead2" : undefined }}><td>{n}</td><td>{t}</td><td>{p2}</td><td>{f}</td><td>{sk}</td><td>{d}</td></tr>)}<tr><td><b>TOTAL</b></td><td><b>362</b></td><td><b>344</b></td><td><b>12</b></td><td><b>6</b></td><td><b>17m 13s</b></td></tr></tbody></table>
      <p aria-live="polite" style={{ margin: "6px 0 0" }}>Selected: <b>{SUITES46[suite][0]}</b> - {SUITES46[suite][2]} of {SUITES46[suite][1]} passed. Note: the CI log panel prints per-suite pass counts differently (e.g. Unit tests - Passed (142/142)) - both panels transcribed as printed.</p></div>}
    {tab === 1 && <div className="tks-detail" aria-live="polite"><b>Overall Score 96 / 100 - Good - AA.</b> WCAG 2.1 AA - Last scan: May 17, 2024 8:35 AM. Issues: <b>0 Critical - 2 Serious - 7 Moderate - 12 Minor</b>. Top issues: Buttons must have discernible text (2 occurrences, Serious) - Color contrast ratio is insufficient (4 occurrences, Moderate) - Form elements must have labels (3 occurrences, Moderate) - Links should have discernible text (2 occurrences, Minor). View full accessibility report.</div>}
    {tab === 2 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Performance", "98"], ["Accessibility", "97"], ["Best Practices", "100"], ["SEO", "93"]]} />
      <table className="tks-table" style={{ marginTop: 10 }}><thead><tr><th>Metric</th><th>This Run</th><th>Previous Build</th><th>Change</th></tr></thead><tbody>
        <tr><td>First Contentful Paint</td><td>0.8 s</td><td>1.1 s</td><td>down 27%</td></tr><tr><td>Largest Contentful Paint</td><td>1.2 s</td><td>1.6 s</td><td>down 25%</td></tr><tr><td>Total Blocking Time</td><td>40 ms</td><td>90 ms</td><td>down 56%</td></tr><tr><td>Cumulative Layout Shift</td><td>0.03</td><td>0.07</td><td>down 57%</td></tr><tr><td>Speed Index</td><td>1.3 s</td><td>1.8 s</td><td>down 28%</td></tr></tbody></table>
      <p style={{ margin: "6px 0 0" }}>Device: Mobile - Network: 4G - Throttling: Moderate (as printed).</p></div>}
    {tab === 3 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Pacts Verified", "100%"], ["Total Pacts", "38"], ["Verified", "38"], ["Failed", "0"], ["Pending", "0"]]} />
      <table className="tks-table" style={{ marginTop: 10 }}><thead><tr><th>Provider</th><th>Consumer</th><th>Pact</th><th>Result</th><th>Duration</th></tr></thead>
        <tbody>{PACTS46.map(([p2, c2, pact, d]) => <tr key={pact}><td>{p2}</td><td>{c2}</td><td>{pact}</td><td>Verified</td><td>{d}</td></tr>)}</tbody></table>
      <p style={{ margin: "6px 0 0" }}>View all pact results (as printed).</p></div>}
    {tab === 4 && <div className="tks-grid" style={{ gridTemplateColumns: "1.3fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>CI / Deployment Log (excerpt) - Pipeline: Success</p>
        <ol style={{ margin: 0, paddingLeft: 18, fontSize: 10.5, fontFamily: "IBM Plex Mono, monospace" }}>{CILOG46.map((line) => <li key={line}>{line}</li>)}</ol>
        <p style={{ margin: "6px 0 0", fontSize: 11 }}>Artifacts: test-report.html - coverage/lcov.info - pact/ - lighthouse.json.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Environment &amp; Deployment</p>
        <p style={{ margin: "4px 0" }}>Commit 7f3a9c1 (View diff) - Image abbev/bw-44:20240517.42 - Deployed May 17, 8:52 AM (CDT) - By CI Pipeline (GitHub Actions).</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Deployment Progression</p>
        <p style={{ margin: "4px 0" }}>Build - Test - Security Scan - Deploy Staging - Smoke Tests - Complete (all checked as printed).</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Health Checks (Staging)</p>
        <p style={{ margin: "4px 0" }}>/health - 200 OK - 98 ms - /ready - 200 OK - 102 ms - /metrics - 200 OK - 110 ms. <b>Staging Healthy</b> - All systems operational.</p></div>
    </div>}
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
  return <Bo n="47" title="Evaluating the BrewOps demonstrator" sub="USABILITY TEST PLAN - This plan outlines how we will evaluate the usability of the BrewOps Intelligence demonstrator with real users in realistic contexts. Footer as printed: v1.0 - May 2025. This is a plan with targets - not test results." dark={false} label="BrewOps usability test plan - interactive rebuild of Budweiser_47">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 4 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Participants - 8-10 total</p>
        <p style={{ margin: "4px 0" }}>Brewery Operators 4-5 - Quality Analysts 2-3 - Shift Leads / Supervisors 2-2 (range as printed) - Data / Reliability Engineers 1-2.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Method - Moderated remote sessions - 45-60 minutes per session</p>
        <ul style={{ margin: 0 }}><li>One-on-one, moderated usability sessions using the BrewOps demonstrator</li><li>Think-aloud protocol and structured tasks</li><li>Sessions recorded for analysis</li><li>Post-task System Usability Scale (SUS) and open feedback</li></ul></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Test Tasks (select)</p>
        <Chips items={TASKS47.map(([n], i) => `${i + 1}. ${n}`)} value={t} onPick={setT} />
        <p aria-live="polite" style={{ margin: "8px 0 0" }}><b>{TASKS47[t][0]}</b> - Scenario: {TASKS47[t][1]} - Primary Flow: {TASKS47[t][2]}</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Success Criteria (targets as printed)</p>
        <table className="tks-table"><tbody>{TARGETS47.map(([m, tg]) => <tr key={m}><td>{m}</td><td><b>{tg}</b></td></tr>)}</tbody></table></div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Success Criteria Details</p>
    <table className="tks-table"><thead><tr><th>Criteria</th><th>Definition</th><th>How We Measure</th></tr></thead><tbody>{CRITERIA47.map(([a, b, c2]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c2}</td></tr>)}</tbody></table>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Limitations (as printed)</p>
      <ul style={{ margin: 0 }}><li>Demonstrator data is synthetic and may not reflect all real-world scenarios.</li><li>Short sessions limit long-term workflow observation.</li><li>Small sample size may not represent all user groups.</li><li>Remote sessions may affect how users interact compared to on-site use.</li><li>Findings will inform iterative improvements, not final product validation.</li></ul></div>
  </Bo>;
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
  return <Bo n="48" title="Findings Priority Matrix" sub="Expert review of BrewOps Intelligence v1.0 - May 17, 2024. Focus on what matters most: prioritize improvements based on user impact (severity) and how often the issue occurs (frequency). Plot represents average severity and frequency scores from expert review (1-5 scale). Footer as printed: v1.0 - May 2025." dark={false} label="BrewOps findings priority matrix - interactive rebuild of Budweiser_48">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>{FINDINGS48.map(([name, sev, fr], i) => <button key={name} type="button" className={`tks-card${i === f ? " is-on" : ""}`} aria-pressed={i === f} onClick={() => setF(i)}><span className="tks-num" style={{ background: i < 3 ? "#c8102e" : i < 6 ? "#e07b1f" : i < 8 ? "#888" : "#18a957" }}>{i + 1}</span><p style={{ fontWeight: 700, margin: "6px 0 2px", fontSize: 11.5 }}>{name}</p><p className="tks-kicker" style={{ margin: 0 }}>{sev} severity - {fr} frequency</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>Finding {f + 1}: {cur[0]}</b> - Severity (Impact) {cur[1]} / 5 - Frequency (Occurrence) {cur[2]} / 5 - Printed band: <b>{printedBand}</b> - Quadrant by position: {quadrant48(cur[1], cur[2])}.
      <p style={{ margin: "6px 0 0" }}>Severity scale as printed: 5 Very High (Critical impact) - 4 High (Major) - 3 Medium (Moderate) - 2 Low (Minor) - 1 Very Low (Negligible). Frequency scale: 1 Rare (&lt; 5% of users) - 2 Uncommon (5-20%) - 3 Occasional (20-50%) - 4 Frequent (50-80%) - 5 Very Frequent (&gt; 80%).</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Top 3 Changes to Prioritize</p>
      <p style={{ margin: "4px 0" }}><b>1. Surface critical alerts prominently</b> - Move critical alerts above the fold on Overview with clear visual hierarchy. - High Priority</p>
      <p style={{ margin: "4px 0" }}><b>2. Improve filter discoverability</b> - Make filters more visible and accessible across all key views. - High Priority</p>
      <p style={{ margin: "4px 0" }}><b>3. Simplify investigation flow</b> - Streamline steps to find root cause and recommended actions. - High Priority</p>
      <p style={{ margin: "6px 0 0" }}>Legend: High Priority (Address immediately) - Medium Priority (Plan and address) - Monitor (Evaluate and monitor) - Low Priority (Address if time permits). Focus resources on high-priority items first.</p></div>
  </Bo>;
}

/* ---------------- 49 - Iteration #47 ---------------- */
const ALERTS49: Array<[string, string, string, string, string]> = [
  ["CO2 levels above control limit on Line 3.", "Brew House - Line 3", "CRITICAL", "2 min ago - Detected by: CO2 Sensor - Line 3", "Take action"],
  ["Unusual CO2 usage detected.", "Brew House - Utilities", "WARNING", "15 min ago - Detected by: CO2 Monitor", "Investigate"],
  ["New data available for Packaging Line 2.", "Packaging - Line 2", "INFO", "45 min ago - Data source: Historian", "View data"],
  ["Seal failure investigation closed.", "Fermentation - Tank 12", "RESOLVED", "1 hr ago - Closed by: Jamie D.", "View report"],
];
export function BrewOpsIteration47() {
  const [after, setAfter] = useState(true);
  const [a, setA] = useState(0);
  return <Bo n="49" title="Iteration #47: Improve alert clarity and actionability" sub="Refining the Alert / Risk Queue to reduce cognitive load and drive faster, confident action. BrewOps Intelligence Design System v1.0 - May 2024." dark={false} label="BrewOps iteration 47 alert clarity - interactive rebuild of Budweiser_49">
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <button type="button" className="tks-chip" aria-pressed={!after} onClick={() => setAfter(false)}>Before</button>
      <label style={{ display: "flex", gap: 6, alignItems: "center" }}>Before <input type="range" min={0} max={1} step={1} value={after ? 1 : 0} aria-label="Toggle between before and after alert queue designs" onChange={(e) => setAfter(Number(e.target.value) === 1)} /> After</label>
      <button type="button" className="tks-chip" aria-pressed={after} onClick={() => setAfter(true)}>After</button>
      <span aria-live="polite"><b>{after ? "AFTER - Clear hierarchy, status, and actions enable faster response." : "BEFORE - Information is harder to scan and prioritize."}</b></span></div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Alert / Risk Queue - View all (7) (select)</p>
    <Chips items={ALERTS49.map(([t]) => t)} value={a} onPick={setA} />
    <div className="tks-detail" aria-live="polite">
      {!after && <p style={{ margin: 0 }}><b>{a === 0 ? "High Priority" : a === 1 ? "Investigation Needed" : a === 2 ? "FYI" : "Resolved"}</b> - {ALERTS49[a][0]} - {ALERTS49[a][1]} - {ALERTS49[a][2]} - {ALERTS49[a][3].split(" - ")[0]}. (Before design: status label separated from the message, no inline source or next step.)</p>}
      {after && <p style={{ margin: 0 }}><b>{ALERTS49[a][0]}</b> - {ALERTS49[a][1]} - {ALERTS49[a][2]} - {ALERTS49[a][3]} - Action button: <b>{ALERTS49[a][4]}</b>. (After design: left accent bar, status and key context inline.)</p>}</div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: "#c8102e" }}>What was challenging (Before)</p>
        <ul style={{ margin: 0 }}><li>{"No consistent hierarchy - hard to find what's most important"}</li><li>Status is separated from the main message</li><li>No clear next step - users must open items to act</li></ul></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>What improved (After) - Impact</p>
        <ul style={{ margin: 0 }}><li>Clear priority indicators and left accent bars for instant scanning</li><li>Status and key context inline with the alert for faster understanding</li><li>Action-oriented buttons make the next step obvious</li></ul>
        <p style={{ margin: "6px 0 0" }}><b>Faster triage:</b> ~32% reduction in time to acknowledge - <b>Better focus:</b> Alerts addressed in priority order - <b>Higher confidence:</b> Clear actions reduce ambiguity.</p></div>
    </div>
  </Bo>;
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
  const cur = TECH50[s];
  return <Bo n="50" title="Technical results" sub="Measurable outcomes from the BrewOps Intelligence demonstrator. Legend: Measured (Collected from system or users) - Observed (Validated in demo or pilot sessions) - Simulated (Modeled or estimated for comparison). Left nav as printed: Overview - Visual Foundations - Component Library - Technical Results - Evaluation Summary - Learnings. (c) 2024 Anheuser-Busch (as printed)." dark={false} label="BrewOps technical results - interactive rebuild of Budweiser_50" foot="BrewOps Intelligence - Design System v1.0">
    <Chips items={TECH50.map(([t]) => t)} value={s} onPick={setS} />
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }}>{cur[2].map(([k, v, d]) => <div key={k} className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>{k}</p><b style={{ fontSize: 17 }}>{v}</b>{d ? <p style={{ margin: "2px 0 0", fontSize: 11 }}>{d}</p> : null}</div>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b><p style={{ margin: "5px 0 0" }}>{cur[1]}</p></div>
    <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Notes &amp; Methodology:</b> Measured metrics collected from the demonstrator in a controlled pilot environment. Observed metrics gathered from user sessions and expert reviews. Simulated metrics modeled using historical baselines and capacity planning. View methodology details (as printed). Response time over time (P95) chart as printed: Baseline vs Demonstrator across 00:00 - 24:00.</p>
  </Bo>;
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
  if (file.startsWith("Budweiser_17")) return <BrewOpsHandoff />;
  if (file.startsWith("Budweiser_18")) return <BrewOpsPrinciples />;
  if (file.startsWith("Budweiser_19")) return <BrewOpsScopeMap />;
  if (file.startsWith("Budweiser_20")) return <BrewOpsIA />;
  if (file.startsWith("Budweiser_21")) return <BrewOpsDecisionFlow />;
  if (file.startsWith("Budweiser_22")) return <BrewOpsTokens />;
  if (file.startsWith("Budweiser_24")) return <BrewOpsWireframeWall />;
  if (file.startsWith("Budweiser_25")) return <BrewOpsDashboardComparison />;
  if (file.startsWith("Budweiser_26")) return <BrewOpsScenarioWireflow />;
  if (file.startsWith("Budweiser_27")) return <BrewOpsDecisionLog />;
  if (file.startsWith("Budweiser_28")) return <BrewOpsVisualFoundations />;
  if (file.startsWith("Budweiser_29")) return <BrewOpsComponentLibrary />;
  if (file.startsWith("Budweiser_30")) return <BrewOpsDataViz />;
  if (file.startsWith("Budweiser_31")) return <BrewOpsControlTower />;
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
