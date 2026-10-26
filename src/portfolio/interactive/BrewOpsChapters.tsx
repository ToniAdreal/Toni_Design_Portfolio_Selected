import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";
import { BoX, BO3_CSS, CTDash, HiFi, Side31, Spark, BrewOpsAnnotatedShell, BrewOpsCopilotFull, BrewOpsStoryboard } from "./BrewOpsRebuilds";

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

function Bo({ n, title, sub, children, label, dark = true, foot, serif = false, center = false, bare = false }: { n: string; title: ReactNode; sub?: string; children: ReactNode; label: string; dark?: boolean; foot?: string; serif?: boolean; center?: boolean; bare?: boolean }) {
  // Pass 4: `bare` renders the slide body only (file 01's printed
  // composition is a full-bleed photograph that carries its own
  // title zone; the shell head/foot would duplicate it).
  if (bare) return <div className={`tks bo3${dark ? " tks--dark" : ""}`} style={{ ...(dark ? { background: "#0a141f" } : {}), padding: "10px 12px", fontSize: 12.6, lineHeight: 1.45 }} role="region" aria-label={label}><style>{BO3_CSS}</style>{children}</div>;
  return <div className={`tks bo3${dark ? " tks--dark" : ""}`} style={{ ...(dark ? { background: "#0a141f" } : {}), padding: "16px 20px 10px", fontSize: 12.6, lineHeight: 1.45 }} role="region" aria-label={label}>
    <style>{BO3_CSS}</style>
    <div className="tks-head"><span><b>BrewOps <span style={{ color: AMBER }}>Intelligence</span></b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 50</span><span className="tks-brand" style={{ fontSize: 12, color: "#c8102e", fontStyle: "italic" }}>Budweiser</span></div>
    <h3 style={{ fontSize: 30, ...(serif ? { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 600 } : {}), ...(center ? { textAlign: "center" } : {}) }}>{title}</h3>
    {sub ? <p className="tks-lede" style={center ? { textAlign: "center", marginLeft: "auto", marginRight: "auto" } : undefined}>{sub}</p> : null}
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

/* Pass 7: simplified US map outline for the wireframe/flow panels
   (files 05, 25, 26) — a drawn landmass in the print's grey register,
   with optional hotspot dots. Stylised, not geographic data. */
export function USMapMini({ w = 120, tone = "#c9ccd1", hot = false, dark = false }: { w?: number; tone?: string; hot?: boolean; dark?: boolean }) {
  return <svg viewBox="0 0 100 62" width={w} role="img" aria-label="United States map (stylised wireframe)" style={{ display: "block" }}>
    <path d="M7,20 L14,13 L26,9 L40,7 L55,9 L70,7 L84,9 L93,15 L95,23 L91,29 L92,36 L87,43 L81,41 L79,49 L73,55 L65,51 L58,53 L50,49 L43,51 L35,47 L27,49 L19,45 L12,39 L5,33 L3,25 Z" fill={tone} opacity={dark ? 0.5 : 0.85} />
    <rect x="8" y="52" width="9" height="5" rx="1" fill={tone} opacity={dark ? 0.5 : 0.85} />
    <rect x="44" y="56" width="4" height="3" rx="1" fill={tone} opacity={dark ? 0.5 : 0.85} /><rect x="50" y="56" width="4" height="3" rx="1" fill={tone} opacity={dark ? 0.5 : 0.85} />
    {hot ? <><circle cx="13" cy="30" r="3.4" fill="#e0483e" opacity="0.35" /><circle cx="13" cy="30" r="1.7" fill="#e0483e" /></> : null}
    <circle cx="30" cy="24" r="1.3" fill={dark ? "#7db3f5" : "#8a93a0"} /><circle cx="52" cy="20" r="1.3" fill={dark ? "#7db3f5" : "#8a93a0"} /><circle cx="70" cy="28" r="1.3" fill={dark ? "#7db3f5" : "#8a93a0"} /><circle cx="84" cy="20" r="1.3" fill={dark ? "#7db3f5" : "#8a93a0"} />
  </svg>;
}

export function BrewOpsCover() {
  const [a, setA] = useState(0);
  const [approved, setApproved] = useState(false);
  const riskRow: Array<[string, string, string, string]> = [["Overall Risk", "High", "↑ vs prior 7 days", "#e0483e"], ["Service Risk", "22%", "↑ 8pp vs prior 7 days", "#e0483e"], ["Supply Risk", "High", "↑ vs prior 7 days", "#e0483e"], ["Logistics Risk", "Medium", "— no change", "#f5a800"], ["Inventory Risk", "Low", "↓ vs prior 7 days", "#18a957"], ["At Risk SKUs", "128", "$2.7M revenue", "#e0483e"]];
  const sevC = (s: string) => s === "CRITICAL" ? "#e0483e" : s === "WARNING" ? "#f5a800" : "#2F80ED";
  // Pass 4: printed composition restored — the stage is the original
  // warehouse photograph; the baked title zone (left) is covered by a
  // DOM title veil, and the photographed monitor is covered by the
  // live DOM dashboard in a monitor frame at the printed position
  // (slight perspective as photographed). All dashboard content
  // below stays real DOM inside the monitor.
  return <Bo n="01" bare title="" label="BrewOps cover showcase - interactive rebuild of Budweiser_01">
    <div role="img" aria-label="Warehouse with Budweiser crates and a desktop monitor showing the BrewOps Control Tower, as printed" style={{ position: "relative", aspectRatio: "1672 / 941", borderRadius: 12, overflow: "hidden", border: "1px solid #22344d", background: "#06090f" }}>
      <img src="/projects/crops/brewops/room-monitor.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {/* Pass 7 (01): the veil must be fully opaque across the whole
          baked title zone — the pass-4 0.97 alpha + early fade let a
          ghost of the photographed headline ("…ce Copilot") bleed
          through beside the DOM title. Solid to 94% of the veil, with
          the fade only in the last sliver before the monitor edge. */}
      <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, width: "35%", height: "68%", background: "linear-gradient(90deg, #05070b 0%, #05070b 90%, rgba(5,7,11,0) 100%)", maskImage: "linear-gradient(180deg, #000 84%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, #000 84%, transparent 100%)" }} />
      <div style={{ position: "absolute", left: 0, top: 0, width: "33%", height: "100%", padding: "3.2% 3.5% 0 2.6%" }}>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 800 }}>BrewOps <span style={{ color: AMBER }}>Intelligence</span></p>
        <p style={{ margin: "3px 0 0", fontSize: 10.3, lineHeight: 1.5, color: "#a9bccd" }}>Independent Budweiser Supply-Chain<br />Intelligence Demonstrator</p>
        <span aria-hidden="true" style={{ display: "block", width: 26, height: 3, background: AMBER, borderRadius: 2, margin: "9% 0 7%" }} />
        <h3 style={{ margin: 0, fontSize: 29, lineHeight: 1.16, fontWeight: 800 }}>Designing a Beverage Supply-Chain Intelligence Copilot</h3>
        <p style={{ margin: "7% 0 0", fontSize: 12, lineHeight: 1.55, color: "#dbe5f0" }}>From a 2023 AI blueprint to an <b style={{ color: AMBER }}>independently built operational demonstrator</b>.</p>
      </div>
      <div role="region" aria-label="Monitor — BrewOps Control Tower dashboard for Fairfield Brewery" style={{ position: "absolute", left: "29%", top: "3.2%", width: "68.5%", height: "89.8%", transform: "perspective(1300px) rotateY(-2.1deg)", transformOrigin: "center", background: "#0e1c2c", border: "3px solid #14171c", borderRadius: 10, padding: "8px 10px", overflow: "hidden", boxShadow: "0 18px 44px rgba(0,0,0,0.55)" }}>
      <div style={{ width: "126%", transform: "scale(0.794)", transformOrigin: "top left" }}>
      <p style={{ margin: "0 0 7px", display: "flex", gap: 10, alignItems: "baseline", fontSize: 8.8, color: "#8fa5bd", borderBottom: "1px solid #22344d", paddingBottom: 5, whiteSpace: "nowrap", overflow: "hidden" }}><b style={{ color: "#fff", fontSize: 9.6 }}>BrewOps Intelligence</b><span style={{ color: "#fff", borderBottom: `2px solid ${AMBER}`, paddingBottom: 2 }}>Control Tower</span><span>Demand</span><span>Supply</span><span>Logistics</span><span>Inventory</span><span>Quality</span><span>Reports</span><span style={{ marginLeft: "auto" }}>Facility: <b style={{ color: "#fff" }}>Fairfield Brewery</b> · Date Range: May 19 – Jun 1, 2024 · Filters · <span style={{ color: "#e0483e", fontStyle: "italic", fontWeight: 700 }}>Budweiser</span></span></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7 }}>
        {riskRow.map(([k, v, d, c]) => <div key={k} style={{ border: "1px solid #22344d", borderRadius: 9, padding: "6px 9px" }}><span style={{ color: "#8fa5bd", fontSize: 10 }}>{k}</span><div style={{ color: c, fontWeight: 800, fontSize: 17 }}>{v}</div><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{d}</span></div>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 0.85fr 1.1fr", gap: 9, marginTop: 9 }}>
        <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Demand vs Supply Forecast</p>
          <svg viewBox="0 0 300 108" width="100%" height="88" role="img" aria-label="Forecast demand versus supply plan with P10 P90 bands, May 19 to Jun 1; projected shortfall 12.4 KHL May 27 to Jun 1">
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
    </div>
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
  const [s, setS] = useState(0);
  /* Pass 7 (02): print composition restored — a thin top bar instead
     of the large shell title; the Before side is the printed flow
     diagram (four tool tiles → scribble knot → delayed-decision and
     risk boxes) and the split is diagonal. */
  return <Bo n="02" bare title="" label="BrewOps before and after - interactive rebuild of Budweiser_02">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0a141f", borderRadius: "10px 10px 0 0", padding: "7px 14px", border: "1px solid #22344d", borderBottom: "none" }}>
      <span style={{ fontSize: 11.5 }}><b>BrewOps <span style={{ color: AMBER }}>Intelligence</span></b><span style={{ color: "#5b7a99" }}> &nbsp;|&nbsp; From Fragmented to Focused: Smarter Decisions, Faster</span></span>
      <span style={{ color: "#e0483e", fontStyle: "italic", fontWeight: 700, fontSize: 12 }}>Budweiser</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 0, position: "relative", borderRadius: "0 0 13px 13px", overflow: "hidden", border: "1px solid #22344d", borderTop: "none" }}>
      <div style={{ background: "#e9ebee", color: "#232a33", padding: "12px 14px" }}>
        <p style={{ margin: 0, fontWeight: 800, letterSpacing: "0.08em", fontSize: 12, color: "#232a33", textAlign: "center" }}>BEFORE</p>
        <p style={{ margin: "1px 0 0", fontSize: 10, color: "#5b6470", textAlign: "center" }}>Fragmented, Manual, and Slow</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginTop: 9 }}>
          {[["📊", "Dashboards"], ["📗", "Spreadsheets"], ["💬", "Messages"], ["✍", "Manual Synthesis"]].map(([ic, t]) => <div key={t} style={{ background: "#fff", border: "1px solid #cfd4da", borderRadius: 8, padding: "6px 5px", fontSize: 9.8, textAlign: "center", lineHeight: 1.35 }}>
            <span style={{ fontSize: 15, display: "block" }}>{ic}{t === "Messages" ? <span style={{ background: "#e0483e", color: "#fff", borderRadius: "50%", padding: "0 4px", fontSize: 8.5, marginLeft: 2 }}>17</span> : null}</span><b>{t}</b>
          </div>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "4px 6px 2px" }}>
          <svg viewBox="0 0 120 44" style={{ width: 120, flex: "none" }} role="img" aria-label="Tangled scribble of disconnected data and manual effort">
            <path d="M8,6 C30,20 44,2 60,12 C76,22 84,4 104,10 M14,20 C34,8 52,26 70,16 C88,6 96,20 112,14 M20,32 C40,22 58,36 78,26 C92,19 100,28 110,24 M46,2 C50,14 44,26 54,40 M74,4 C70,16 80,28 72,40" fill="none" stroke="#8a8f98" strokeWidth="1.4" />
            <path d="M10,8 L26,24 M110,8 L92,24 M60,40 L60,44" stroke="#8a8f98" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
          </svg>
          <p style={{ margin: 0, fontSize: 9.8, color: "#5b6470", lineHeight: 1.5 }}>Disconnected Data<br />Manual Effort</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #cfd4da", borderRadius: 9, padding: "7px 11px", fontSize: 11, display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 15 }}>🕐</span><span><b>Delayed Decision-Making</b><br /><span style={{ color: "#5b6470", fontSize: 10 }}>Slow insights. Higher risk. Missed opportunities.</span></span>
        </div>
        <div style={{ background: "#fdf0ef", border: "1.5px solid #e0483e", borderRadius: 9, padding: "7px 11px", fontSize: 11, marginTop: 6, display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 15 }}>⚠</span><span><b style={{ color: "#b3352c" }}>Operational Risk, Downtime, Lost Revenue</b></span>
        </div>
      </div>
      <span aria-hidden="true" style={{ position: "absolute", left: "44%", top: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", background: "#0a141f", border: "2px solid #fff", color: "#fff", fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, zIndex: 2 }}>VS.</span>
      <div style={{ background: "#0e1c2c", padding: "12px 15px 13px 34px", clipPath: "polygon(22px 0, 100% 0, 100% 100%, 0 100%)", marginLeft: -14 }}>
        <p style={{ margin: 0, fontWeight: 800, letterSpacing: "0.08em", fontSize: 12, color: AMBER, textAlign: "center" }}>AFTER</p>
        <p style={{ margin: "1px 0 0", fontSize: 10, color: "#8fa5bd", textAlign: "center" }}>Structured, Intelligent, and Actionable</p>
        <div style={{ display: "grid", gap: 6, marginTop: 9 }}>
          {AFTER02.map(([t, lead, panel], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0a141f", border: `1.5px solid ${i === s ? AMBER : "#22344d"}`, borderRadius: 9, padding: "7px 10px", cursor: "pointer", font: "inherit", color: "#dbe5f0", display: "flex", gap: 9 }}>
            {/* Pass 4: each After row pairs its printed icon tile with
                the detail panel (the pass-3 residual pairing). */}
            <span aria-hidden="true" style={{ width: 34, height: 34, flex: "none", borderRadius: 8, background: "#132a42", border: "1px solid #2c4258", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>{["🔔", "🗂", "⚖", "✓", "📜"][i]}</span>
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
        <span style={{ display: "inline-flex", width: 54, height: 54, borderRadius: "50%", border: `2px solid ${cols03[i]}`, alignItems: "center", justifyContent: "center", fontSize: 19, background: "#fff" }}>{icons03[i]}</span>
        <span style={{ display: "block", fontSize: 19, fontWeight: 800, color: cols03[i], marginTop: 6 }}>{y}</span>
        <span style={{ display: "block", borderTop: `2.5px solid ${cols03[i]}`, margin: "6px 12px", paddingTop: 7, fontWeight: 700, fontSize: 13.5 }}>{t}</span>
        <span style={{ display: "block", fontSize: 11.5, lineHeight: 1.55, color: "#4a5462", marginTop: 3 }}>{d}</span>
      </button>)}
    </div>
    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", margin: "12px 30px 0" }}><span style={{ flex: 1, height: 2.5, background: "#f5a800" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f5a800" }} /><span style={{ flex: 1, height: 2.5, background: "#e0483e" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e0483e" }} /><span style={{ flex: 1, height: 2.5, background: "#a31621" }} /><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#a31621" }} /></div>
    <p style={{ margin: "12px 0 0", background: "#fff", color: "#141a21", border: "1.5px solid #a31621", borderRadius: 10, padding: "8px 14px", fontSize: 12.5 }}>🎯 <b>Outcome:</b> An independently built, AI-powered supply-chain intelligence demonstrator delivering measurable value.</p>
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
/* Pass 7 (04): drawn isometric-ish stage scenes (SVG) in place of
   flat icon boxes — plant/tanks, warehouse, truck, store, phone. */
function Scene04({ i, c }: { i: number; c: string }) {
  const base = <polygon points="6,44 32,34 58,44 32,54" fill="#1b3049" stroke="#2c4258" strokeWidth="0.8" />;
  const scenes: ReactNode[] = [
    <g key="s0">{base}<path d="M22,36 C20,28 18,24 14,18 M26,35 C26,27 24,22 22,15 M30,35 C32,27 34,22 38,17" stroke="#e8a13a" strokeWidth="1.6" fill="none" /><circle cx="14" cy="17" r="2.4" fill="#e8a13a" /><circle cx="22" cy="14" r="2.4" fill="#e8a13a" /><circle cx="38" cy="16" r="2.4" fill="#e8a13a" /><ellipse cx="42" cy="38" rx="7" ry="4" fill="#8a6d3b" /><ellipse cx="42" cy="35.5" rx="7" ry="3" fill="#b98d4f" /></g>,
    <g key="s1">{base}<rect x="14" y="18" width="11" height="20" rx="5" fill="#33506e" stroke="#7db3f5" strokeWidth="0.8" /><rect x="29" y="14" width="12" height="24" rx="6" fill="#3c5a7d" stroke="#7db3f5" strokeWidth="0.8" /><path d="M25,24 L29,24 M36,38 L36,44 M18,38 L18,44" stroke="#7db3f5" strokeWidth="1.4" /><rect x="44" y="26" width="8" height="12" fill="#33506e" stroke="#7db3f5" strokeWidth="0.8" /></g>,
    <g key="s2">{base}<polygon points="16,26 38,18 54,26 38,32" fill="#4a3f78" /><polygon points="16,26 38,32 38,46 16,38" fill="#37305e" /><polygon points="38,32 54,26 54,40 38,46" fill="#2c2650" /><rect x="24" y="36" width="8" height="9" fill="#141126" /><rect x="42" y="35" width="6" height="6" fill="#6C5CE7" opacity="0.7" /></g>,
    <g key="s3">{base}<polygon points="8,24 34,24 34,38 8,38" fill="#0e7c86" /><polygon points="34,24 42,24 48,31 48,38 34,38" fill="#0a5a62" /><polygon points="42,24 48,31 42,31" fill="#9fd8dc" /><circle cx="16" cy="40" r="3" fill="#141a21" stroke="#9fd8dc" /><circle cx="28" cy="40" r="3" fill="#141a21" stroke="#9fd8dc" /><circle cx="42" cy="40" r="3" fill="#141a21" stroke="#9fd8dc" /><text x="11" y="33" fontSize="6" fill="#fff" fontStyle="italic">Bud</text></g>,
    <g key="s4">{base}<rect x="14" y="22" width="36" height="20" fill="#4a2320" /><polygon points="12,22 52,22 47,16 17,16" fill="#e0483e" /><rect x="28" y="30" width="9" height="12" fill="#141a21" /><rect x="17" y="27" width="8" height="7" fill="#f5c86b" opacity="0.85" /><rect x="40" y="27" width="8" height="7" fill="#f5c86b" opacity="0.85" /><text x="20" y="13" fontSize="6.5" fill="#ffb3ab" fontStyle="italic">Budweiser</text></g>,
    <g key="s5">{base}<rect x="24" y="10" width="17" height="32" rx="3" fill="#12291c" stroke="#4ade80" strokeWidth="1" /><polyline points="27,32 31,26 34,29 39,20" fill="none" stroke="#4ade80" strokeWidth="1.5" /><text x="27" y="17" fontSize="6" fill="#4ade80">+18%</text><path d="M46,16 a6,6 0 0 1 4,4 M49,12 a10,10 0 0 1 6,7" stroke="#4ade80" fill="none" strokeWidth="1.3" /></g>,
  ];
  return <svg viewBox="0 0 64 56" style={{ width: "100%", maxWidth: 76, display: "block" }} role="img" aria-label={`${["Ingredients and raw materials", "Production and packaging", "Warehouse and inventory", "Distribution and transport", "Retail and point of sale", "Consumer signal"][i]} stage illustration`}>{scenes[i]}<span style={{ display: "none" }}>{c}</span></svg>;
}

export function BrewOpsPanorama() {
  const [s, setS] = useState(0);
  const icons04 = ["🌾", "🏭", "🏬", "🚚", "🛒", "📱"];
  const cols04 = ["#e8a13a", "#2F80ED", "#6C5CE7", "#0e7c86", "#e0483e", "#18a957"];
  return <Bo n="04" title="Beverage Supply Chain Panorama" sub="End-to-end visibility. Proactive risk detection. Smarter decisions." label="BrewOps supply chain panorama - interactive rebuild of Budweiser_04">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7 }}>
      {PANORAMA04.map(([t, d], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "transparent", border: `1.5px solid ${i === s ? cols04[i] : "transparent"}`, borderRadius: 11, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}><Scene04 i={i} c={cols04[i]} />{i < 5 ? <span aria-hidden="true" style={{ color: "#5b7a99" }}>- -›</span> : null}</span>
        <span style={{ display: "none" }}>{icons04[i]}</span>
        <b style={{ display: "block", color: "#fff", fontSize: 11.8, margin: "4px 0 3px", lineHeight: 1.35 }}>{t}</b>
        <span style={{ display: "block", fontSize: 10.3, lineHeight: 1.5, color: "#a9bccd" }}>{d}</span>
        {i === 5 ? <span style={{ display: "block", marginTop: 5, fontSize: 10.3 }}>📱 Consumer Sentiment <b style={{ color: "#4ade80" }}>+18%</b> vs prior 7 days · 12.4K signals</span> : null}
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 7, marginTop: 4 }}>
      {PANORAMA04.map(([, , risk, riskBody], i) => <div key={risk} style={{ borderTop: `2px solid ${cols04[i]}`, padding: "7px 8px 0" }}>
        <span style={{ display: "inline-flex", width: 17, height: 17, borderRadius: "50%", background: cols04[i], color: "#fff", fontWeight: 800, fontSize: 10, alignItems: "center", justifyContent: "center", marginRight: 5 }}>{i + 1}</span>
        <b style={{ fontSize: 10.8, color: "#ffb3ab" }}>⚠ RISK {i + 1} — {risk}</b>
        <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#a9bccd", marginTop: 3 }}>{riskBody}</span>
      </div>)}
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
        {/* Pass 7 (05): stage 1 carries the printed US-map callout
            (west-coast hotspot); stage 4 renders its role silos as
            lane rows; stage 5's decision-lag donut is print-scale. */}
        {i === 0 ? <span style={{ display: "block", background: "#0a141f", border: "1px solid #5a2320", borderRadius: 7, padding: "5px 6px", margin: "2px 0 5px" }}><span style={{ display: "block", fontSize: 8.3, fontWeight: 800, color: "#ff8d84", letterSpacing: "0.05em" }}>⚠ DISRUPTION DETECTED</span><USMapMini w={104} tone="#33506e" hot dark /><span style={{ display: "block", fontSize: 8.3, color: "#a9bccd" }}>Inbound Delay, Western DC — ETA pushed to June 2 · US map, west-coast hotspot</span></span> : null}
        <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.5, color: "#a9bccd" }}>{body}</span>
        {i === 3 ? <span style={{ display: "grid", gap: 3, marginTop: 5 }}>{[["DP", "Demand Planner", "2–4h"], ["LP", "Logistics Planner", "4–6h"], ["SP", "Supply Planner", "3–5h"], ["FM", "Finance Manager", "2–4h"], ["DC", "DC Manager", "2–4h"]].map(([ini, rn, hrs]) => <span key={rn} style={{ display: "flex", gap: 5, alignItems: "center", background: "#0a141f", border: "1px solid #22344d", borderRadius: 6, padding: "2.5px 6px", fontSize: 8.6 }}><span style={{ width: 15, height: 15, borderRadius: "50%", background: "#7c4dff", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 7.5, fontWeight: 800, flex: "none" }}>{ini}</span><span style={{ flex: 1, color: "#dbe5f0" }}>{rn}</span><span style={{ color: "#f5c542" }}>{hrs}</span></span>)}</span> : null}
        {i === 4 ? <span style={{ display: "flex", justifyContent: "center", marginTop: 7 }}><span style={{ width: 86, height: 86, borderRadius: "50%", border: "8px solid #e0483e", display: "inline-flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontWeight: 800, fontSize: 11, color: "#fff", lineHeight: 1.25 }}>~24–48<br />HOURS<br /><span style={{ fontSize: 8, fontWeight: 600, color: "#ffb3ab" }}>Total Decision Latency</span></span></span> : null}
        {i === 5 ? <span style={{ display: "block", marginTop: 5, color: "#f5c542", fontSize: 11 }}>★★<span style={{ color: "#3d5878" }}>★★★</span> <span style={{ color: "#8fa5bd", fontSize: 9.5 }}>confidence 2 of 5</span></span> : null}
      </button>)}
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>The Cost of Latency — every hour of delay compounds impact across the supply chain</p>
    <Stats items={[["Average decision lag", "24-48 hrs", "across disruptions"], ["Average expedite & adjustment cost", "$132K+"], ["Average fill rate degradation", "4.2 pts"], ["Average increase in inventory imbalance", "8.7%"], ["Teams impacted", "Multiple", "across the chain"]]} />
    <p style={{ margin: "9px 0 0", background: "rgba(24,169,87,0.13)", border: "1px solid #18a957", borderRadius: 9, padding: "7px 13px", fontSize: 12 }}><b style={{ color: "#4ade80" }}>BrewOps Intelligence Impact:</b> Connected data. Automated insights. Faster decisions. Better outcomes.</p>
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
    <button key={t} type="button" onClick={() => setRow(t)} aria-pressed={row === t} style={{ display: "flex", gap: 9, width: "100%", textAlign: "left", background: row === t ? "rgba(255,255,255,0.07)" : "transparent", border: `1px solid ${row === t ? c : "transparent"}`, borderRadius: 8, padding: "4px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
      <span style={{ fontSize: 17, color: c }} aria-hidden="true">{ic}</span>
      <span><b style={{ color: "#fff", fontSize: 12 }}>{t}</b><br /><span style={{ fontSize: 10.8, lineHeight: 1.5, color: "#a9bccd" }}>{d}</span></span>
    </button>
  );
  return <Bo n="06" title="2023 Concept Evidence Audit" sub="bw-08 - BLUEPRINT AUDIT. Assessing the blueprint concept against an operationally ready standard." label="BrewOps 2023 concept evidence audit - interactive rebuild of Budweiser_06">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: 10 }}>
      <div style={{ border: "1.5px solid #2F80ED", borderRadius: 12, padding: "10px 12px", background: "rgba(47,128,237,0.06)" }}>
        <p style={{ margin: 0, fontWeight: 800, color: "#7db3f5", letterSpacing: "0.06em", fontSize: 12.5 }}>✓ STRENGTHS</p>
        <div style={{ display: "grid", gap: 3, marginTop: 7 }}>{STRENGTHS06.map(([t, d], i) => rowBtn(t, d, icons06[i], "#2F80ED"))}</div>
      </div>
      <div style={{ border: "1.5px solid #e0483e", borderRadius: 12, padding: "10px 12px", background: "rgba(224,72,62,0.05)" }}>
        <p style={{ margin: 0, fontWeight: 800, color: "#ff9d94", letterSpacing: "0.06em", fontSize: 12.5 }}>✕ GAPS</p>
        <div style={{ display: "grid", gap: 3, marginTop: 7 }}>{GAPS06.map(([t, d], i) => rowBtn(t, d, gapIcons[i], "#e0483e"))}</div>
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
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.25fr 1.25fr 0.95fr", gap: 9, marginTop: 10, fontSize: 11 }}>
      <p style={{ margin: 0, border: "1px solid #e7e2d9", borderRadius: 9, padding: "7px 10px" }}><b>Purpose:</b> This map clarifies ownership and evidence across the lifecycle of BrewOps Intelligence, ensuring transparency of contributions and independent reconstruction.</p>
      <p style={{ margin: 0, border: "1px solid #e7e2d9", borderRadius: 9, padding: "7px 10px" }}><b>Evidence Legend:</b> <span style={{ color: "#2563eb" }}>■</span> Historical artifact · <span style={{ color: "#7c4dff" }}>■</span> Documented contribution · <span style={{ color: "#18a957" }}>■</span> Demonstrator / Reconstruction / Validated result.</p>
      <p style={{ margin: 0, border: "1px solid #e7e2d9", borderRadius: 9, padding: "7px 10px" }}><b>Key Takeaway:</b> {"Toni's 2026 work is an independent reconstruction and enhancement, built upon foundational ideas and contributions from 2023."}</p>
      <p style={{ margin: 0, border: "1px solid #e7e2d9", borderRadius: 9, padding: "7px 10px", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}><b>Timeline:</b> <span style={{ background: "#2563eb", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 10 }}>2023 Team</span>→<span style={{ background: "#7c4dff", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 10 }}>2023 Toni</span>→<span style={{ background: "#18a957", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 10 }}>2026 Solo</span></p>
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
        <td style={{ borderLeft: `4px solid ${rowCols[i]}`, width: "19%" }}><span style={{ fontSize: 15, color: rowCols[i] }}>{rowIcons[i]}</span> <b>{row[0]}</b><br /><span style={{ color: "#8fa5bd" }}>{row[1]}</span></td>
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
const CRIT_EXP09 = ["How often the decision is made", "Impact on cost, service, risk or revenue", "Quality, accessibility and recency of data", "Degree of judgment required", "Speed and ease to build a compelling demo"];
export function BrewOpsOpportunities() {
  const [r, setR] = useState(0);
  const pick = (i: number) => { setR(i); };
  return <Bo n="09" title="Prioritizing the Highest-Impact AI Demonstrator Opportunities" sub="Opportunity Prioritization — each candidate product area scored 1–5 across five decision criteria (Total out of 25)." label="BrewOps opportunity prioritization - interactive rebuild of Budweiser_09">
    <table className="tks-table"><thead><tr><th>#</th><th>Candidate Product Area</th>{CRITERIA09.map((c, j) => <th key={c} style={{ color: ["#18a957", "#e07b1f", "#2563eb", "#7c4dff", "#0e7c86"][j] }}>{["📅", "⚠", "🗃", "👤", "🛠"][j]} {c}<span style={{ display: "block", fontFamily: "Inter, Arial, sans-serif", fontSize: 8.8, fontWeight: 500, letterSpacing: 0, textTransform: "none", color: "#8fa5bd", lineHeight: 1.4, marginTop: 2 }}>{CRIT_EXP09[j]} (Score 1–5)</span></th>)}<th>Total</th><th>Band</th></tr></thead>
      <tbody>{OPPS09.map(([name, d, sc, total, band], i) => <tr key={name} onClick={() => pick(i)} style={{ cursor: "pointer", background: i === r ? "rgba(245,168,0,.14)" : undefined, boxShadow: i < 3 ? "inset 0 0 0 1.5px #d4af37" : undefined }}><td>{i + 1}{i < 3 ? " ★" : ""}</td><td style={{ whiteSpace: "nowrap" }}><b>{name}</b><br />{d}</td>{sc.map((v, j) => <td key={j} style={{ color: ["#18a957", "#e07b1f", "#2563eb", "#7c4dff", "#0e7c86"][j], fontWeight: 800, fontSize: 14 }}>{v}</td>)}<td><b>{total}</b></td><td>{band}</td></tr>)}</tbody></table>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.2fr", gap: 9, marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>🎯 Why these three?</p><p style={{ margin: 0 }}>These opportunities combine high business impact with strong data foundation and demonstrator feasibility — driving early wins and stakeholder confidence.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Scoring Guide</p><span style={{ display: "flex", gap: 3 }}>{[1, 2, 3, 4, 5].map((v) => <span key={v} style={{ flex: 1, textAlign: "center", background: `linear-gradient(90deg,#e0483e,#f5a800,#18a957)`, opacity: 0.35 + v * 0.13, borderRadius: 4, padding: "2px 0", fontWeight: 800, color: "#fff" }}>{v}</span>)}</span><p style={{ margin: "5px 0 0", fontSize: 11 }}>1 = Low · 5 = High, per criterion.</p></div>
      <div className="tks-card" style={{ borderColor: "#d4af37" }}><p className="tks-kicker" style={{ marginTop: 0 }}>🏆 Recommended Prioritized Scope</p><p style={{ margin: 0 }}><b>Control-Tower Risk · Logistics Scenarios · Predictive Maintenance</b></p></div>
    </div>
    <p className="tks-detail" aria-live="polite" style={{ marginTop: 8 }}><b>{OPPS09[r][0]}</b> — printed total <b>{OPPS09[r][3]} / 25 · {OPPS09[r][4]}</b>. Note as printed: rank 4 Consumer Insight totals 17, below rank 5 Quality Intelligence at 18.</p>
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
        <b style={{ display: "block", color: "#fff", fontSize: 11, margin: "4px 0 2px", lineHeight: 1.3 }}>{t}</b>
        <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.45, color: "#a9bccd", fontStyle: "italic" }}>{mission}</span>
        {[["Recurring Decisions", dec], ["Key Input Signals", sig], ["Approval Authority", auth]].map(([h, list]) => <span key={h as string} style={{ display: "block", marginTop: 6 }}>
          <span style={{ display: "block", fontSize: 8.8, fontWeight: 800, letterSpacing: "0.08em", color: cols10[i] }}>{(h as string).toUpperCase()}</span>
          <ul style={{ margin: "2px 0 0", paddingLeft: 12, fontSize: 8.8, lineHeight: 1.42, color: "#c6d2e0" }}>{(list as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
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
  /* Pass 7 (11): true contact sheet — each thumbnail is a miniature
     DOM rendering of its slide (title slide, panorama map, landscape
     layers, quadrant, framework steps, chat window, scenario table,
     team headshot grid, conclusion), not a text excerpt. */
  const ml = (wd = "100%") => <span style={{ display: "block", width: wd, height: 3, background: "#e3ded2", borderRadius: 2 }} />;
  const logo11 = <span style={{ color: "#c8102e", fontStyle: "italic", fontWeight: 800, fontSize: 7.5 }}>Budweiser</span>;
  const mini11 = (i: number): ReactNode => {
    switch (i) {
      case 0: return <span style={{ display: "flex", height: "100%" }}><span style={{ flex: 1, padding: "5px 6px" }}>{logo11}<b style={{ display: "block", fontSize: 7.6, lineHeight: 1.45, marginTop: 3, textTransform: "uppercase" }}>Generative AI Application of Logistics and Supply Chain in Beverage Industry</b><span style={{ display: "block", color: "#c8102e", fontSize: 6.8, marginTop: 3 }}>Business Challenge Deck</span><span style={{ display: "block", marginTop: 4 }}>{ml("80%")}</span><span style={{ display: "block", marginTop: 2 }}>{ml("60%")}</span><span style={{ display: "block", fontSize: 6.4, color: "#8a93a0", marginTop: 5 }}>June 2023</span></span><span style={{ width: 26, flex: "none", background: "linear-gradient(115deg, transparent 38%, #c8102e 39%, #c8102e 62%, #7a1f1f 63%)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 15 }}>🍺</span></span></span>;
      case 1: return <span style={{ display: "block", padding: "5px 6px" }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>The Challenge Overview</b><span style={{ float: "right" }}>{logo11}</span><span style={{ display: "flex", gap: 5, marginTop: 4 }}><span style={{ flex: 1, display: "grid", gap: 3 }}>{["Demand volatility", "Inflation & margin erosion", "Supply disruptions", "Capacity constraints", "Sustainability expectations", "Data silos"].map((x) => <span key={x} style={{ fontSize: 6.6, color: "#4a5462" }}>◉ {x}</span>)}</span><span style={{ width: 44, flex: "none", background: "#102A43", color: "#fff", borderRadius: 3, padding: "4px 5px", fontSize: 6.4, lineHeight: 1.5 }}><b>OUR GOAL</b><br />Leverage Generative AI to augment human decision-making…</span></span></span>;
      case 2: return <span style={{ display: "block", padding: "5px 6px" }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>Beverage Supply Chain Panorama</b><span style={{ float: "right" }}>{logo11}</span><span style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 9 }}>{["🌾", "🏭", "📦", "🚚", "🏬", "🛒", "👥"].map((g, k) => <span key={k}>{g}</span>)}</span><span style={{ display: "flex", justifyContent: "center", marginTop: 2 }}><USMapMini w={104} tone="#d8cfb8" /></span><span style={{ display: "block", fontSize: 6.4, color: "#8a93a0" }}>● Breweries · ● Distribution Centers · ● Major Markets · ● Ports &amp; Gateways</span></span>;
      case 3: return <span style={{ display: "block", padding: "5px 6px" }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>AI Technology Landscape</b><span style={{ float: "right" }}>{logo11}</span><span style={{ display: "grid", gap: 3, marginTop: 4 }}>{["Experience Layer", "Application Layer", "Model Layer", "Data Foundation"].map((l2) => <span key={l2} style={{ display: "flex", gap: 3 }}><span style={{ width: 40, flex: "none", background: "#102A43", color: "#fff", fontSize: 5.8, borderRadius: 2, padding: "2px 3px", lineHeight: 1.3 }}>{l2}</span>{[0, 1, 2, 3].map((k) => <span key={k} style={{ flex: 1, border: "1px solid #e3ded2", borderRadius: 2, height: 11 }} />)}</span>)}</span></span>;
      case 4: return <span style={{ display: "block", padding: "5px 6px" }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>Opportunity Map</b><span style={{ float: "right" }}>{logo11}</span><span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: 4, border: "1px solid #e3ded2" }}>{[["TRANSFORM", "#c8102e"], ["SCALE", "#8a6d1f"], ["EXPLORE", "#102A43"], ["QUICK WINS", "#2e7d32"]].map(([q2, c]) => <span key={q2} style={{ padding: "3px 4px", fontSize: 6.2, color: "#4a5462", border: "0.5px solid #eee9dc", lineHeight: 1.5 }}><b style={{ color: c }}>{q2}</b><br />● ●</span>)}</span><span style={{ display: "block", fontSize: 6.2, color: "#8a93a0", marginTop: 2 }}>Business Impact ↑ · Feasibility →</span></span>;
      case 5: return <span style={{ display: "block", padding: "5px 6px" }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>Decision-Support Framework</b><span style={{ float: "right" }}>{logo11}</span><span style={{ display: "flex", gap: 3, marginTop: 5 }}>{["1. INFORM", "2. INSIGHT", "3. RECOMMEND", "4. DECIDE", "5. ACT & LEARN"].map((x) => <span key={x} style={{ flex: 1, background: "#102A43", color: "#fff", fontSize: 5.6, borderRadius: 2, padding: "3px 2px", lineHeight: 1.4 }}>{x}<br /><span style={{ opacity: 0.75 }}>····</span></span>)}</span><span style={{ display: "block", background: "#102A43", color: "#fff", fontSize: 6.2, textAlign: "center", borderRadius: 2, padding: "2px 0", marginTop: 3 }}>Governance, Security, Responsible AI</span></span>;
      case 6: return <span style={{ display: "flex", gap: 5, padding: "5px 6px" }}><span style={{ flex: 1.35, border: "1px solid #e3ded2", borderRadius: 3, overflow: "hidden" }}><span style={{ display: "block", background: "#c8102e", color: "#fff", fontSize: 6.2, padding: "2px 4px" }}>Budweiser Supply Chain Copilot</span><span style={{ display: "block", padding: "3px 4px" }}><span style={{ display: "inline-block", background: "#f1f2f4", borderRadius: 4, fontSize: 6.2, padding: "2px 4px" }}>What is the forecast for Budweiser in Brazil next quarter?</span><span style={{ display: "block", fontSize: 6.2, color: "#4a5462", marginTop: 3, lineHeight: 1.5 }}>The forecast for Q3 2023 is 2,450K hL, up 4.2% vs Q2…</span><span style={{ display: "inline-block", background: "#f1f2f4", borderRadius: 4, fontSize: 6.2, padding: "2px 4px", marginTop: 3 }}>What are the risks to our aluminum can supply?</span></span></span><span style={{ flex: 1 }}><b style={{ fontSize: 6.6 }}>CAPABILITIES</b>{["Natural language Q&A", "Insights & explanations", "What-if analysis", "Document summarization", "Action recommendations", "Seamless data access"].map((x) => <span key={x} style={{ display: "block", fontSize: 6.2, color: "#4a5462", marginTop: 2.5 }}>◉ {x}</span>)}</span></span>;
      case 7: return <span style={{ display: "block", padding: "5px 6px" }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>Scenario Analysis Example</b><span style={{ float: "right" }}>{logo11}</span><span style={{ display: "grid", gridTemplateColumns: "1.3fr repeat(4,1fr)", gap: 1.5, marginTop: 4, fontSize: 6 }}> {["SCENARIO", "BASE CASE", "HIGH DEMAND", "SUPPLY DISRUPTION", "FREIGHT SPIKE", "Demand Growth", "4%", "10%", "4%", "4%", "Service Level", "94%", "93%", "90%", "95%", "Total Cost Impact", "—", "+2.8%", "+4.6%", "+3.1%", "EBIT Impact", "—", "+1.2%", "−1.8%", "−1.1%"].map((c, k) => <span key={k} style={{ background: k % 5 === 0 || k < 5 ? "#f4f1ea" : "#fff", border: "0.5px solid #eee9dc", padding: "1.5px 2px", fontWeight: k < 5 ? 700 : 400 }}>{c}</span>)}</span><span style={{ display: "block", background: "#102A43", color: "#fff", fontSize: 6.2, textAlign: "center", borderRadius: 2, padding: "2px 0", marginTop: 3 }}>Generative AI accelerates scenario creation, insights and action planning.</span></span>;
      case 8: return <span style={{ display: "block", padding: "5px 6px" }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>Our Team</b><span style={{ float: "right" }}>{logo11}</span><span style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 3.5, marginTop: 4 }}>{["Maria Fernandez", "David Liu", "Claire Dubois", "Carlos Lima", "Anita Patel", "James Walker", "Priya Nair", "Rafael Santos", "Lucas Moreira", "Sophie Martin"].map((n2) => <span key={n2} style={{ textAlign: "center" }}><span style={{ display: "inline-flex", width: 17, height: 17, borderRadius: "50%", background: "linear-gradient(160deg,#d9c9a8,#8a93a0)", color: "#fff", fontSize: 6.5, fontWeight: 800, alignItems: "center", justifyContent: "center" }}>{n2.split(" ").map((p) => p[0]).join("")}</span><span style={{ display: "block", fontSize: 5.6, lineHeight: 1.3, marginTop: 1 }}>{n2}</span></span>)}</span></span>;
      default: return <span style={{ display: "flex", gap: 5, padding: "5px 6px" }}><span style={{ flex: 1.3 }}><b style={{ fontSize: 7.4, textTransform: "uppercase" }}>Conclusion</b><span style={{ display: "block", marginTop: 3 }}>{["Better decisions", "Stronger resilience", "Higher efficiency", "Sustainable growth"].map((x) => <span key={x} style={{ display: "flex", gap: 3, alignItems: "center", fontSize: 6.4, color: "#4a5462", marginTop: 2.5 }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: "#c8102e", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 6 }}>✓</span>{x}</span>)}</span></span><span style={{ width: 46, flex: "none", background: "#102A43", color: "#fff", borderRadius: 3, padding: "4px 5px", fontSize: 6.2, lineHeight: 1.55 }}><b>OUR COMMITMENT</b><br />We will partner with our people, use AI responsibly…<br /><b>Brewing a smarter supply chain. Cheers to the future.</b></span></span>;
    }
  };
  return <Bo n="11" center title="BW-05 Original Deck Contact Sheet" sub="Generative AI Application of Logistics and Supply Chain in Beverage Industry - Historical artifact, 2023. Budweiser Business Challenge Deck - June 2023." dark={false} label="BrewOps original deck contact sheet - interactive rebuild of Budweiser_11">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
      {DECK11.map(([t, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: "#fff", border: `1.5px solid ${i === s ? "#c8102e" : "#ddd6c9"}`, borderRadius: 7, overflow: "hidden", height: 96 }}>{mini11(i)}</span>
        <span style={{ display: "none" }}>{body}</span>
        <span style={{ display: "block", fontSize: 9.8, fontWeight: 700, marginTop: 4, lineHeight: 1.35 }}><span style={{ color: "#c8102e" }}>{i + 1}.</span> {t.replace(/^\d+\.\s*/, "")}</span>
      </button>)}
    </div>
    <div className="tks-detail" aria-live="polite" style={{ marginTop: 9, fontSize: 11.3, lineHeight: 1.5 }}><b>{DECK11[s][0]}</b><p style={{ margin: "4px 0 0" }}>{DECK11[s][1]}</p></div>
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
    <div style={{ border: "1px dashed #5b7a99", borderRadius: 10, padding: "5px 10px", fontSize: 10.3, marginBottom: 8 }}>
      <b>Relationship Key:</b> {"Triggers → · Generates → · Supported By ⤴ · Made By ⤴ · Creates → · Leads To → · References ⤴"} — six arrow styles as printed (solid = creates/triggers, dashed = generates, dotted = supported-by/made-by/references).
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 6, alignItems: "start" }}>
      {OBJECTS12.map(([t, sub2, attrs, rel], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0e1c2c", border: `1.5px solid ${i === s ? cols12[i] : "#22344d"}`, borderRadius: 10, padding: "7px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0", position: "relative" }}>
        {i < 7 ? <span aria-hidden="true" style={{ position: "absolute", right: -8, top: 16, color: "#8fa5bd", zIndex: 2, fontSize: 10 }}>→</span> : null}
        <span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: "50%", background: cols12[i], alignItems: "center", justifyContent: "center", fontSize: 12 }}>{icons12[i]}</span>
        <b style={{ display: "block", color: "#fff", fontSize: 11.5, margin: "3px 0 0", lineHeight: 1.3 }}>{t}</b>
        <span style={{ display: "block", fontSize: 9.3, color: "#8fa5bd", fontStyle: "italic" }}>{sub2}</span>
        <ul style={{ margin: "5px 0 0", paddingLeft: 11, fontSize: 8.5, lineHeight: 1.45, color: "#c6d2e0" }}>{attrs.map((f) => <li key={f}>{f}</li>)}</ul>
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
  const modBox = (i: number) => <button key={i} type="button" onClick={() => setM(i)} aria-pressed={i === m} style={{ background: "#fff", color: "#141a21", border: `1.5px solid ${i === m ? "#102A43" : "#7a1f1f"}`, borderRadius: 8, padding: "7px 9px", cursor: "pointer", font: "inherit", textAlign: "left" }}><b style={{ fontSize: 11.5, color: "#7a1f1f" }}>{MODULES13[i][0]}</b><br /><span style={{ fontSize: 9.8, color: "#4a5462", lineHeight: 1.4 }}>{MODULES13[i][1]}</span></button>;
  return <Bo n="13" title={<span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>AI-Enabled Decision Support Framework</span>} sub="Connecting Consumers, Operations & Intelligence - Historical artifact, 2023 (Busch Futures 2023 - AI for a Smarter Supply Chain, p.6)." dark={false} label="BrewOps decision support framework 2023 - interactive rebuild of Budweiser_13">
    <div style={{ background: "#f4ead8", border: "1px solid #d9c9a8", borderRadius: 10, padding: "8px 13px", fontSize: 11.5, marginBottom: 10 }}>
      <b>OUR VISION:</b> Leverage data and AI to create an interconnected system that enables smarter decisions across the value chain and delivers value to consumers, customers, and the business.
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr 150px", gap: 10, alignItems: "stretch" }}>
      <div style={{ background: "#fff", color: "#141a21", border: "1.5px solid #2e7d32", borderRadius: 10, padding: "10px 12px" }}>
        <b style={{ fontSize: 12.5, color: "#2e7d32" }}>Consumer Preferences</b>
        <ul style={{ margin: "6px 0 0", paddingLeft: 14, fontSize: 10.8, lineHeight: 1.6 }}><li>Taste &amp; flavor trends</li><li>Brand perception</li><li>Occasions &amp; moments</li><li>Price sensitivity</li><li>Channel preferences</li><li>Social &amp; digital signals</li></ul>
        <p style={{ fontSize: 10, color: "#5b6470", margin: "7px 0 0" }}>Signals flow in from the market →</p>
      </div>
      {/* Pass 7 (13): true hub-and-spoke — modules sit in the print's
          radial positions (Demand top, R&D bottom) around the hub,
          with a dashed orbit ring and bidirectional arrows drawn
          from the hub to every module. */}
      <div style={{ position: "relative" }}>
        <svg viewBox="0 0 300 216" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <ellipse cx="150" cy="108" rx="118" ry="86" fill="none" stroke="#b9a06a" strokeWidth="1" strokeDasharray="4 4" opacity="0.8" />
          <defs><marker id="ah13" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#102A43" /></marker></defs>
          {[[150, 16], [52, 34], [248, 34], [30, 108], [270, 108], [52, 182], [150, 200], [248, 182]].map(([x, y]) => <line key={`${x}-${y}`} x1="150" y1="108" x2={x} y2={y} stroke="#102A43" strokeWidth="1.6" markerEnd="url(#ah13)" opacity="0.75" />)}
        </svg>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 26, position: "relative" }}>
          {modBox(1)}{modBox(0)}{modBox(2)}
          {modBox(3)}
          <div style={{ background: "#102A43", color: "#fff", borderRadius: 9, padding: "9px 11px", textAlign: "center", boxShadow: "0 0 0 5px #f7f2e7" }}>
            <b style={{ fontSize: 12.5 }}>⬢ AI Analysis &amp; Insights</b>
            <p style={{ margin: "3px 0 0", fontSize: 10.3, opacity: 0.9 }}>Predictive · Prescriptive · Descriptive</p>
            <p aria-live="polite" style={{ margin: "4px 0 0", fontSize: 10.3, color: "#f5c86b" }}>{MODULES13[m][0]} — {MODULES13[m][1]}</p>
          </div>
          {modBox(4)}
          {modBox(5)}{modBox(7)}{modBox(6)}
        </div>
      </div>
      <div style={{ background: "#fff", color: "#141a21", border: "1.5px solid #c9a227", borderRadius: 10, padding: "10px 12px" }}>
        <b style={{ fontSize: 12.5, color: "#8a6d1f" }}>Production Process</b>
        <ul style={{ margin: "6px 0 0", paddingLeft: 14, fontSize: 10.8, lineHeight: 1.6 }}><li>Brewing &amp; fermentation</li><li>Packaging</li><li>Line performance</li><li>Yield &amp; waste</li><li>Energy &amp; utilities</li><li>Supplier performance</li></ul>
        <p style={{ fontSize: 10, color: "#5b6470", margin: "7px 0 0" }}>← Operations data feeds the hub</p>
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
    <p aria-hidden="true" style={{ margin: "8px 0 0", display: "flex", justifyContent: "space-around", color: "#5b7a99", fontSize: 13 }}><span>▲</span><span>▲</span><span>▲</span></p>
    <div style={{ background: "#102A43", color: "#fff", borderRadius: 9, padding: "8px 13px", marginTop: 2, fontSize: 11.3 }}>
      <b>🗄 Operational Data Foundation:</b> ERP · MES · WMS · TMS · CRM · IoT Sensors · Quality Systems · External Data
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
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 262px", gap: 12, alignItems: "start" }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ background: "#fdf3e0", border: "1px solid #e8d9ae", borderRadius: 9, padding: "8px 11px", marginBottom: 9 }}>
          <b style={{ fontSize: 11.5 }}>INITIAL IDEA: CHAT AS THE PRODUCT ENTRY POINT</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.8, lineHeight: 1.55 }}>Internal teams ask questions about our supply chain and get instant, actionable insights.</p>
        </div>
        <div style={{ border: "1px solid #d8d2c4", borderRadius: 12, overflow: "hidden", background: "#f7f4ec" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", background: "#7a1f1f", padding: "7px 12px", fontSize: 11.5, color: "#fff" }}>
            <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#c8102e", border: "1.5px solid #fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, flex: "none" }}>B</span>
            <b>Budweiser Supply Chain Assistant</b> <span style={{ opacity: 0.85, fontSize: 10.5 }}>(Early Concept)</span>
            <span style={{ marginLeft: "auto" }} aria-hidden="true">ⓘ</span>
          </div>
          <div style={{ padding: "10px 12px" }}>
            {answered.map(([question, answer, time], i) => <div key={question} style={{ marginBottom: 9, opacity: q < 4 && CHAT14[q][0] !== question ? 0.55 : 1 }}>
              <p style={{ margin: 0, textAlign: "right" }}><span style={{ display: "inline-block", background: "#e8ebef", color: "#141a21", borderRadius: "12px 12px 3px 12px", padding: "6px 11px", fontSize: 11, maxWidth: "78%", textAlign: "left" }}>{question} <span style={{ color: "#8a93a0", fontSize: 9.5 }}>· {time}</span></span></p>
              <p style={{ margin: "5px 0 0", display: "flex", gap: 7, alignItems: "flex-start" }}><span aria-hidden="true" style={{ width: 19, height: 19, borderRadius: "50%", background: "#c8102e", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10, flex: "none", marginTop: 2 }}>B</span><span style={{ display: "inline-block", background: "#fff", border: "1px solid #e2ddd0", borderRadius: "12px 12px 12px 3px", padding: "6px 11px", fontSize: 11, lineHeight: 1.55, maxWidth: "86%" }}>{answer}</span></p>
              <span style={{ display: "none" }}>{i}</span>
            </div>)}
            <div style={{ display: "flex", gap: 7, alignItems: "center", background: "#fff", border: "1px solid #ddd6c9", borderRadius: 999, padding: "6px 12px", fontSize: 11, color: "#8a93a0" }}>
              <span style={{ flex: 1 }}>Ask a question about your supply chain…</span><span aria-hidden="true">➤</span>
            </div>
            <p style={{ margin: "7px 0 0", fontSize: 10, color: "#8a93a0" }}>Mock interface for concept exploration only. Not a final product design.</p>
          </div>
        </div>
      </div>
      <div>
        <p style={{ margin: 0, color: "#c8102e", fontStyle: "italic", fontWeight: 800, fontSize: 15 }}>Budweiser</p>
        <p style={{ margin: "2px 0 0", fontSize: 10, letterSpacing: "0.14em", color: "#b97a0c", fontWeight: 700 }}>SUPPLY CHAIN CHALLENGE</p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Example prompts we imagined</p>
        <div style={{ display: "grid", gap: 4 }}>
          {CHAT14.map(([t], i) => <button key={t} type="button" onClick={() => setQ(i)} aria-pressed={i === q} style={{ textAlign: "left", background: i === q ? "#102A43" : "#fff", color: i === q ? "#fff" : "#141a21", border: `1px solid ${i === q ? "#102A43" : "#ddd6c9"}`, borderRadius: 8, padding: "5px 9px", cursor: "pointer", font: "inherit", fontSize: 10.8, lineHeight: 1.45 }}><b style={{ color: "#c8102e" }}>{i + 1}.</b> {t}</button>)}
        </div>
        <div style={{ background: "#fdf0f3", border: "1px solid #f0c6d4", borderRadius: 9, padding: "8px 11px", marginTop: 9 }}>
          <b style={{ fontSize: 11.5 }}>Early Concept Note</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.8, lineHeight: 1.55 }}>We proposed treating chat as the primary entry point — making it easy for users to ask natural questions and get data-driven answers in real time.</p>
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
  /* Pass 7 (15): each source is a drawn portrait book/report cover in
     the print's varied colours, carrying the printed cover title,
     subtitle and cover motif; the card text sits beside the cover. */
  const covers15: Array<{ bg: string; fg: string; sub: string; motif: ReactNode }> = [
    { bg: "#14555a", fg: "#ffffff", sub: "Applications, Challenges, and Future Research Directions", motif: <span style={{ fontSize: 21 }}>💬</span> },
    { bg: "#dbe7f3", fg: "#102A43", sub: "A Systematic Literature Review", motif: <span style={{ fontSize: 21 }}>🚚</span> },
    { bg: "#fdf6ec", fg: "#a31621", sub: "Trends, Challenges, and Best Practices", motif: <span style={{ fontSize: 21 }}>🍾</span> },
    { bg: "#eef1f4", fg: "#263238", sub: "A Review and Research Agenda", motif: <span style={{ fontSize: 21 }}>🦾</span> },
    { bg: "#e6f2e4", fg: "#14532d", sub: "Current State and Future Direction", motif: <svg viewBox="0 0 40 18" width="40" aria-hidden="true"><polyline points="2,15 10,11 18,12 26,6 38,3" fill="none" stroke="#2e7d32" strokeWidth="1.8" /><circle cx="26" cy="6" r="1.8" fill="#2e7d32" /><circle cx="38" cy="3" r="1.8" fill="#2e7d32" /></svg> },
    { bg: "#e9e4f2", fg: "#3d2b63", sub: "A Data-Driven Approach", motif: <span style={{ fontSize: 21 }}>🔍</span> },
    { bg: "#dfeef7", fg: "#0d3b5c", sub: "A Systematic Review", motif: <span style={{ fontSize: 21 }}>🧠</span> },
  ];
  const coverTitle15 = (t: string) => t.replace(/:.*$/, "");
  return <Bo n="15" title={<span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Research Synthesis</span>} sub="Seven Supporting Sources — a curated set of academic and industry sources that inform our understanding of AI and automation opportunities across beverage supply chains." dark={false} label="BrewOps research synthesis - interactive rebuild of Budweiser_15">
    <p style={{ margin: "0 0 9px", fontSize: 10.5, letterSpacing: "0.16em", color: "#b97a0c", fontWeight: 700 }}>RESEARCH SYNTHESIS · EVIDENCE. INSIGHT. IMPACT.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9 }}>
      {SOURCES15.map(([t, y, insight], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#c8102e" : "#ddd6c9"}`, borderRadius: 10, padding: "8px 9px", overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21", display: "flex", gap: 9, position: "relative" }}>
        <span style={{ position: "absolute", top: -7, left: -7, width: 19, height: 19, borderRadius: "50%", background: "#c8102e", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10.5, zIndex: 1 }}>{i + 1}</span>
        <span style={{ display: "flex", flexDirection: "column", background: covers15[i].bg, color: covers15[i].fg, borderRadius: 3, padding: "7px 7px 6px", width: 74, flex: "none", minHeight: 118, boxShadow: "2px 2px 5px rgba(20,26,33,0.18)", borderBottom: "3px solid rgba(20,26,33,0.25)" }}>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 9.6, lineHeight: 1.35 }}>{coverTitle15(t)}</span>
          <span style={{ display: "block", fontSize: 7.6, lineHeight: 1.45, opacity: 0.85, marginTop: 3 }}>{covers15[i].sub}</span>
          <span style={{ marginTop: "auto", display: "flex", justifyContent: "center", paddingTop: 5 }}>{covers15[i].motif}</span>
        </span>
        <span style={{ display: "block", flex: 1, minWidth: 0 }}>
          <b style={{ display: "block", fontSize: 11, lineHeight: 1.4 }}>{t}</b>
          <span style={{ display: "block", fontSize: 9.6, color: "#c8102e", fontWeight: 700, marginTop: 2 }}>{y}</span>
          <span style={{ display: "block", fontSize: 9.9, lineHeight: 1.5, color: "#4a5462", marginTop: 4 }}><b style={{ color: "#b97a0c", fontSize: 9, letterSpacing: "0.1em" }}>INSIGHT</b><br />{insight}</span>
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
      {STAGES17.map((st, si) => <span key={st} style={{ background: "#102A43", color: "#fff", borderRadius: 8, padding: "5px 7px", fontSize: 9.6, lineHeight: 1.4 }}><b>{st.split(" - ")[0]}</b><br /><span style={{ opacity: 0.8 }}>{st.split(" - ")[1]}</span>{si < 4 ? <span aria-hidden="true" style={{ float: "right" }}>→</span> : null}</span>)}
      {LANES17.map(([role, focus, cells], li) => [
        <span key={`${role}-h`} style={{ background: "#102A43", borderLeft: `4px solid ${laneCols[li]}`, color: "#fff", borderRadius: 8, padding: "7px 8px", fontSize: 10.3, lineHeight: 1.4 }}><b>{role}</b><br /><span style={{ opacity: 0.85, fontSize: 9.3 }}>{focus}</span></span>,
        ...cells.map((txt, si) => { const f = flag(txt); return <button key={`${role}-${si}`} type="button" onClick={() => setSel([li, si])} aria-pressed={sel[0] === li && sel[1] === si} style={{ textAlign: "left", background: sel[0] === li && sel[1] === si ? "#16324f" : "#0e1c2c", border: `1.5px solid ${sel[0] === li && sel[1] === si ? laneCols[li] : "#22344d"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0", fontSize: 9.6, lineHeight: 1.5 }}>{txt.replace(/ (HANDOFF|APPROVED|APPROVAL)$/, "")}{f ? <span style={{ display: "inline-block", marginLeft: 4, background: f === "✓ COMPLETE" ? "#18a957" : "#d4af37", color: "#fff", borderRadius: 4, padding: "0 5px", fontSize: 8.3, fontWeight: 800 }}>{f}</span> : null}</button>; }),
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
  return <Bo n="18" center title="Our principles guide every experience we design." sub="Product Principles - Built for trust. Designed for impact. Proven in operations." label="BrewOps product principles - interactive rebuild of Budweiser_18">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
      {PRINCIPLES18.map(([t, d], i) => <button key={t} type="button" onClick={() => setP(i)} aria-pressed={i === p} style={{ textAlign: "center", background: "#0e1c2c", border: `1.5px solid ${i === p ? AMBER : "#22344d"}`, borderRadius: 13, padding: "16px 12px 13px", cursor: "pointer", font: "inherit", color: "#dbe5f0", minHeight: 168 }}>
        <span style={{ display: "inline-flex", width: 52, height: 52, borderRadius: "50%", border: `1.5px solid ${AMBER}`, alignItems: "center", justifyContent: "center", fontSize: 22 }}>{icons18[i]}</span>
        <span style={{ display: "block", color: AMBER, fontWeight: 800, fontSize: 19, marginTop: 9 }}>{String(i + 1).padStart(2, "0")}</span>
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
  const tierCols = ["#f5a800", "#18a957", "#2563eb", "#e0483e"];
  const tierIcons = ["●", "◐", "○", "⊘"];
  const tierBox = (ti: number) => { const [tier, tag, mods] = SCOPE19[ti]; return <div key={tier} style={{ background: "#0e1c2c", border: "1px solid #22344d", borderTop: `5px solid ${tierCols[ti]}`, borderRadius: 11, padding: "9px 10px" }}>
    <b style={{ color: "#fff", fontSize: 12.8 }}>{tierIcons[ti]} {tier}</b>
    <p style={{ margin: "3px 0 8px", fontSize: 10.3, lineHeight: 1.5, color: "#a9bccd" }}>{tag}</p>
    <div style={{ display: "grid", gap: 6 }}>
      {mods.map(([name, desc], mi) => <button key={name} type="button" onClick={() => setSel([ti, mi])} aria-pressed={sel[0] === ti && sel[1] === mi} style={{ textAlign: "left", background: sel[0] === ti && sel[1] === mi ? "rgba(255,255,255,0.08)" : "transparent", border: `1px solid ${sel[0] === ti && sel[1] === mi ? tierCols[ti] : "#2c4258"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
        <b style={{ display: "block", fontSize: 11.3, lineHeight: 1.35, color: "#fff" }}>{name}</b>
        <span style={{ display: "block", fontSize: 9.9, lineHeight: 1.5, color: "#a9bccd", marginTop: 2 }}>{desc}</span>
      </button>)}
    </div>
  </div>; };
  return <Bo n="19" title="Feature Scope Map" sub="Delivering focused intelligence where it matters today - and expanding tomorrow. Focused. Integrated. Actionable." label="BrewOps feature scope map - interactive rebuild of Budweiser_19">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      {tierBox(0)}{tierBox(1)}{tierBox(2)}
    </div>
    <div style={{ background: "#0e1c2c", border: "1px solid #22344d", borderTop: "5px solid #e0483e", borderRadius: 11, padding: "9px 12px", marginTop: 9 }}>
      <p style={{ margin: 0, display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}><b style={{ color: "#fff", fontSize: 12.8 }}>⊘ {SCOPE19[3][0]}</b><span style={{ fontSize: 10.3, color: "#a9bccd" }}>{SCOPE19[3][1]}</span></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginTop: 7 }}>
        {SCOPE19[3][2].map(([name, desc], mi) => <button key={name} type="button" onClick={() => setSel([3, mi])} aria-pressed={sel[0] === 3 && sel[1] === mi} style={{ textAlign: "left", background: sel[0] === 3 && sel[1] === mi ? "rgba(255,255,255,0.08)" : "transparent", border: `1px solid ${sel[0] === 3 && sel[1] === mi ? "#e0483e" : "#2c4258"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#dbe5f0" }}>
          <b style={{ display: "block", fontSize: 11, lineHeight: 1.35, color: "#fff" }}>{name}</b>
          <span style={{ display: "block", fontSize: 9.7, lineHeight: 1.5, color: "#a9bccd", marginTop: 2 }}>{desc}</span>
        </button>)}
      </div>
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
    <div style={{ background: "#102A43", color: "#fff", borderRadius: 10, padding: "7px 22px", display: "flex", gap: 12, alignItems: "center", width: "fit-content", margin: "0 auto" }}>
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
    <p style={{ margin: "10px 0 0", textAlign: "center" }}><span style={{ display: "inline-block", border: "1.5px solid #2F80ED", borderRadius: 999, padding: "5px 18px", background: "#0e1c2c" }}><b>Role-Based Experience</b> — Tailored views and actions for every role across the organization.</span></p>
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
    {/* Pass 7 (21): Before is the printed messy collage at ~46% width —
        source tiles down the left, scattered rotated sticky notes,
        email fragment and the Q2 table colliding in the middle, with
        dashed connector arrows — against the wider After flow. */}
    <div style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#f4f1ea", border: "1px solid #ddd6c9", borderRadius: 12, padding: "11px 13px" }}>
        <b style={{ fontSize: 13, color: "#a31621" }}>✕ BEFORE — Fragmented &amp; Reactive</b>
        <p style={{ margin: "3px 0 8px", fontSize: 11, color: "#5b6470" }}>Disconnected sources. Manual synthesis. Unclear ownership. Slower decisions.</p>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: 8 }}>
          <div style={{ display: "grid", gap: 5 }}>
            {sources21.map(([t, d], si) => <span key={t} style={{ background: "#fff", border: "1px solid #e2ddd0", borderRadius: 7, padding: "5px 7px", transform: si % 2 ? "rotate(0.4deg)" : "rotate(-0.4deg)" }}><b style={{ display: "block", fontSize: 10.3 }}>{["📊", "📗", "💬", "✉", "📝"][si]} {t}</b><span style={{ fontSize: 9.2, color: "#5b6470", lineHeight: 1.4 }}>{d}</span></span>)}
          </div>
          <div style={{ position: "relative", minHeight: 196 }}>
            <span style={{ position: "absolute", top: 0, left: "4%", width: "44%", background: "#fff8c9", border: "1px solid #e8d98a", boxShadow: "1px 2px 4px rgba(20,26,33,0.12)", padding: "5px 7px", transform: "rotate(-2deg)", fontSize: 9.3, lineHeight: 1.45 }}>📌 {stickies21[0]}</span>
            <span style={{ position: "absolute", top: 6, right: 0, width: "40%", background: "#fdf3d8", border: "1px solid #e8d98a", boxShadow: "1px 2px 4px rgba(20,26,33,0.12)", padding: "5px 7px", transform: "rotate(1.8deg)", fontSize: 9.3, lineHeight: 1.45 }}>📌 {stickies21[2]}</span>
            <span style={{ position: "absolute", top: 62, left: "16%", width: "42%", background: "#e8f1fd", border: "1px solid #bcd3f5", boxShadow: "1px 2px 4px rgba(20,26,33,0.12)", padding: "5px 7px", transform: "rotate(1.2deg)", fontSize: 9.3, lineHeight: 1.45 }}>📌 {stickies21[1]}</span>
            <span style={{ position: "absolute", top: 118, right: "6%", width: "44%", background: "#fde8f3", border: "1px solid #f0c6d4", boxShadow: "1px 2px 4px rgba(20,26,33,0.12)", padding: "5px 7px", transform: "rotate(-1.6deg)", fontSize: 9.3, lineHeight: 1.45 }}>📌 {stickies21[3]}</span>
            <span aria-hidden="true" style={{ position: "absolute", bottom: 2, left: "8%", color: "#b9a06a", fontSize: 10 }}>- - ⇢ scattered, unowned, unlinked</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
          <div style={{ background: "#fff", border: "1px solid #e2ddd0", borderRadius: 8, padding: "7px 10px", fontSize: 10.3 }}>
            <b>✉ From: Regional Director</b><br /><span style={{ color: "#5b6470" }}>Subject: Re: Promo Update</span><p style={{ margin: "2px 0 0", color: "#5b6470" }}>{"\"Do we pull back spend or shift to digital?\""}</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e2ddd0", borderRadius: 8, padding: "7px 10px", fontSize: 10.3 }}>
            <b>👤 Manual Synthesis</b><p style={{ margin: "2px 0 0", color: "#5b6470", lineHeight: 1.55 }}>Gather → Reconcile → Interpret → Summarize → Decide</p>
          </div>
        </div>
        <table className="tks-table tks-table--micro" style={{ marginTop: 8 }}><thead><tr><th>Q2 Performance (Var.)</th><th>Sales</th><th>Volume</th><th>Revenue</th></tr></thead><tbody>
          <tr><td>Total</td><td>-2%</td><td>-3%</td><td>-1%</td></tr><tr><td>South</td><td>-5%</td><td>-6%</td><td>-4%</td></tr><tr><td>West</td><td>+1%</td><td>+0%</td><td>+2%</td></tr><tr><td>Midwest</td><td>-3%</td><td>-2%</td><td>-1%</td></tr></tbody></table>
        <p style={{ margin: "7px 0 0", background: "#a31621", color: "#fff", borderRadius: 7, padding: "6px 10px", fontSize: 10.8 }}><b>OUTCOME: SLOWER DECISIONS, HIGHER RISK, MISSED OPPORTUNITIES</b> — Delayed insights · Version confusion · Unclear ownership · Inconsistent follow-through</p>
      </div>
      <div style={{ background: "#fff", border: "1.5px solid #102A43", borderRadius: 12, padding: "11px 13px" }}>
        <b style={{ fontSize: 13, color: "#102A43" }}>AFTER — Accountable Decision Flow</b>
        <p style={{ margin: "3px 0 8px", fontSize: 11, color: "#5b6470" }}>Structured workflow. Clear ownership. Faster, higher-confidence decisions.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 5, alignItems: "stretch" }}>
          {FLOW21.map(([t, d, cap, owner], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: i === s ? "#eef4fb" : "#faf8f5", border: `1.5px solid ${i === s ? "#2563eb" : "#e2ddd0"}`, borderRadius: 8, padding: "6px 7px", cursor: "pointer", font: "inherit", color: "#141a21", display: "flex", flexDirection: "column" }}>
            <b style={{ fontSize: 10.4, lineHeight: 1.3 }}>{t}</b>
            <span style={{ fontSize: 9.3, color: "#5b6470", lineHeight: 1.45, marginTop: 3 }}>{d}</span>
            <span style={{ display: "block", fontSize: 8.9, color: "#5b6470", lineHeight: 1.45, marginTop: 4, flex: 1 }}>{cap}</span>
            <span style={{ display: "block", borderTop: "1px solid #e2ddd0", marginTop: 5, paddingTop: 4, fontSize: 8.9 }}><b>Owner: {owner}</b></span>
          </button>)}
        </div>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Measurable Outcomes (as printed)</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
          {[["Faster decision cycle time", "30–50%"], ["Higher forecast accuracy", "+15%"], ["Reduction in decision risk", "−20%"], ["Annualized impact (example)", "+$5–10M"]].map(([l, v]) => <span key={l} style={{ background: "#eef7f0", border: "1px solid #bfe3cc", color: "#141a21", borderRadius: 8, padding: "6px 9px" }}><b style={{ fontSize: 14.5, color: "#137a3f" }}>{v}</b><br /><span style={{ fontSize: 9.6, color: "#4a5462" }}>{l}</span></span>)}
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
    <div style={{ display: "grid", gridTemplateColumns: "148px minmax(0,1fr) 262px", gap: 10, alignItems: "start" }}>
      <div style={{ background: "#fff", border: "1px solid #e2ddd0", borderRadius: 10, padding: "9px 11px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Collection</p>
        <p style={{ margin: "0 0 8px", fontSize: 11.5 }}><b>Budweiser Core</b></p>
        <p className="tks-kicker" style={{ margin: "0 0 3px" }}>Groups</p>
        <ul style={{ margin: 0, paddingLeft: 15, fontSize: 10.6, lineHeight: 1.7, color: "#4a5462" }}>
          <li>Color — brand / neutral</li><li>Spacing — scale 0–8</li><li>Typography — heading / body / caption</li><li>Radius — xs–full</li><li>Shadow — sm / md / lg</li><li>Status — success / warning / error / info</li>
        </ul>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
          {groupTable(0)}{groupTable(1)}{groupTable(2)}{groupTable(3)}{groupTable(4)}{groupTable(5)}
        </div>
        <p style={{ margin: "10px 0 0", fontSize: 11.5 }}><b>Shared language. Fewer handoffs. Stronger brand.</b> Consistent by design. Built in code. This is Bud.</p>
      </div>
      <div style={{ background: "#0d1117", borderRadius: 10, padding: "0 0 10px", overflow: "hidden" }}>
        <p style={{ margin: "0 0 7px", background: "#f5a800", color: "#141a21", fontSize: 10.5, fontWeight: 700, fontFamily: "ui-monospace, monospace", padding: "5px 12px" }}>tokens.theme.ts — TypeScript</p>
        <ol style={{ margin: 0, padding: "0 12px 0 34px", fontFamily: "ui-monospace, monospace", fontSize: 9.2, lineHeight: 1.65, color: "#c9d1d9" }}>
          {code22.map((ln, i) => <li key={i} style={{ whiteSpace: "pre" }}>{ln}</li>)}
        </ol>
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
  /* Pass 7 (24): each card is now a drawn grey wireframe thumbnail —
     title bar, KPI/table/chart skeletons in the print's monochrome
     register — instead of a text summary card. The text summary moves
     to the detail line under the wall. */
  const G = "#c9ccd1"; const G2 = "#e3e6ea"; const INK9 = "#9aa1ab";
  const ln = (wd = "100%", h = 4) => <span style={{ display: "block", width: wd, height: h, background: G2, borderRadius: 2 }} />;
  const kpis = (n: number) => <span style={{ display: "grid", gridTemplateColumns: `repeat(${n},1fr)`, gap: 3 }}>{Array.from({ length: n }, (_, k) => <span key={k} style={{ border: `1px solid ${G}`, borderRadius: 3, padding: "2px 3px" }}>{ln("60%", 3)}<span style={{ display: "block", fontSize: 8, fontWeight: 800, color: "#5b6470", marginTop: 1 }}>{["128.4K", "78%", "96.2%", "12.4"][k % 4]}</span></span>)}</span>;
  const rows = (n: number, cols = 3) => <span style={{ display: "grid", gap: 2.5 }}>{Array.from({ length: n }, (_, r) => <span key={r} style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 3, borderBottom: `1px solid ${G2}`, paddingBottom: 2 }}>{Array.from({ length: cols }, (_, c) => ln(c === 0 ? "85%" : "65%", 3))}</span>)}</span>;
  const chart = (bars = false) => bars
    ? <span style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 26, borderBottom: `1px solid ${G}` }}>{[40, 65, 50, 80, 58, 92].map((h, k) => <span key={k} style={{ flex: 1, height: `${h}%`, background: k % 2 ? G : INK9, borderRadius: "2px 2px 0 0" }} />)}</span>
    : <svg viewBox="0 0 100 26" style={{ width: "100%", display: "block" }} aria-hidden="true"><polyline points="2,20 18,14 34,17 50,8 66,12 82,6 98,9" fill="none" stroke={INK9} strokeWidth="1.6" /><line x1="2" y1="24" x2="98" y2="24" stroke={G} /></svg>;
  const steps = () => <span style={{ display: "flex", gap: 3, alignItems: "center" }}>{["Review", "Collaborate", "Approve", "Implement"].map((s2, k) => <span key={s2} style={{ flex: 1, textAlign: "center", fontSize: 6.8, color: "#5b6470", border: `1px solid ${k === 0 ? "#5b6470" : G}`, borderRadius: 3, padding: "1.5px 0", background: k === 0 ? G2 : "#fff" }}>{k + 1} {s2}</span>)}</span>;
  const wire24 = (i: number): ReactNode => {
    switch (i) {
      case 0: return <>{kpis(4)}<span style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 4, marginTop: 4 }}><span>{chart()}</span><span>{rows(3, 1)}</span></span><span style={{ marginTop: 3, display: "block" }}>{chart(true)}</span></>;
      case 1: return <>{ln("70%", 4)}<span style={{ display: "block", marginTop: 4 }}>{rows(5, 4)}</span><span style={{ display: "block", marginTop: 4, border: `1px solid ${G}`, borderRadius: 3, padding: 3 }}>{ln("55%", 3)}<span style={{ display: "block", marginTop: 2 }}>{chart()}</span></span></>;
      case 2: return <>{ln("65%", 4)}<span style={{ display: "block", marginTop: 4 }}>{rows(6, 3)}</span><span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 4 }}><span>{chart(true)}</span><span>{ln("80%", 3)}<span style={{ display: "block", marginTop: 3 }}><span style={{ display: "block", height: 5, background: G, borderRadius: 2, width: "70%" }} /></span></span></span></>;
      case 3: return <span style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 4 }}><span>{rows(5, 2)}</span><span style={{ border: `1px solid ${G}`, borderRadius: 3, padding: 3, textAlign: "center" }}><span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: "50%", border: `2px solid ${INK9}`, alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#5b6470" }}>92</span><span style={{ display: "block", marginTop: 3 }}>{ln("90%", 3)}</span><span style={{ display: "block", marginTop: 2 }}>{ln("70%", 3)}</span></span></span>;
      case 4: return <>{ln("60%", 4)}<span style={{ display: "grid", gap: 3, marginTop: 4 }}>{["Why is fermentation temp high?", "Show energy optimization ideas", "What alerts need attention?"].map((q2) => <span key={q2} style={{ border: `1px solid ${G}`, borderRadius: 6, padding: "2px 5px", fontSize: 7.2, color: "#5b6470" }}>{q2}</span>)}</span><span style={{ display: "block", marginTop: 4 }}>{ln("100%", 3)}</span><span style={{ display: "block", marginTop: 2 }}>{ln("82%", 3)}</span><span style={{ display: "block", border: `1px solid ${G}`, borderRadius: 6, padding: "2px 5px", fontSize: 7.2, color: INK9, marginTop: 4 }}>Ask a question…</span></>;
      case 5: return <>{steps()}<span style={{ display: "block", marginTop: 5 }}>{ln("50%", 3)}</span><span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 3 }}><span>{ln("90%", 3)}<span style={{ display: "block", marginTop: 2 }}>{ln("75%", 3)}</span></span><span>{rows(4, 2)}</span></span><span style={{ display: "flex", gap: 3, justifyContent: "flex-end", marginTop: 4 }}><span style={{ border: `1px solid ${G}`, borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#5b6470" }}>Cancel</span><span style={{ background: "#5b6470", borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#fff" }}>Next</span></span></>;
      case 6: return <>{steps()}<span style={{ display: "block", marginTop: 5 }}>{rows(3, 3)}</span><span style={{ display: "block", border: `1px solid ${G}`, borderRadius: 3, height: 16, marginTop: 4 }} /><span style={{ display: "flex", gap: 3, justifyContent: "flex-end", marginTop: 4 }}><span style={{ border: `1px solid ${G}`, borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#5b6470" }}>Back</span><span style={{ background: "#5b6470", borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#fff" }}>Approve</span></span></>;
      case 7: return <>{ln("55%", 4)}<span style={{ display: "block", marginTop: 4 }}>{rows(6, 4)}</span></>;
      case 8: return <span style={{ display: "block", textAlign: "center", padding: "8px 0 4px" }}><span style={{ fontSize: 17, color: INK9 }}>⌕</span><span style={{ display: "block", fontSize: 8, fontWeight: 700, color: "#5b6470", marginTop: 2 }}>No alerts found</span><span style={{ display: "block", fontSize: 7, color: INK9 }}>{"You're all caught up."}</span><span style={{ display: "inline-block", border: `1px solid ${G}`, borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#5b6470", marginTop: 4 }}>Clear filters</span></span>;
      case 9: return <>{kpis(3)}<span style={{ display: "grid", gap: 3, marginTop: 4 }}>{ln("100%", 7)}{ln("88%", 7)}{ln("94%", 7)}</span><span style={{ display: "block", textAlign: "center", fontSize: 13, color: INK9, marginTop: 3 }}>◌</span></>;
      case 10: return <span style={{ display: "block", textAlign: "center", padding: "8px 0 4px" }}><span style={{ fontSize: 16, color: "#5b6470" }}>⚠</span><span style={{ display: "block", fontSize: 8, fontWeight: 700, color: "#5b6470", marginTop: 2 }}>Something went wrong</span><span style={{ display: "block", fontSize: 7, color: INK9 }}>{"We couldn't load the data right now."}</span><span style={{ display: "inline-block", background: "#5b6470", borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#fff", marginTop: 4 }}>Try again</span></span>;
      case 11: return <><span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#5b6470" }}>OEE 78% <span style={{ fontSize: 7, color: INK9 }}>+4pp</span></span><span style={{ display: "block", marginTop: 3 }}>{chart()}</span>{[["Availability", 85], ["Performance", 70], ["Quality", 90]].map(([l2, v]) => <span key={l2 as string} style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 7, color: "#5b6470", marginTop: 2.5 }}><span style={{ width: 42 }}>{l2}</span><span style={{ flex: 1, height: 4.5, background: G2, borderRadius: 2 }}><span style={{ display: "block", height: 4.5, width: `${v}%`, background: INK9, borderRadius: 2 }} /></span><span>{v}%</span></span>)}</>;
      case 12: return <>{ln("60%", 4)}<span style={{ display: "flex", gap: 3, marginTop: 3 }}>{["Overview", "Trends", "Alerts", "Work orders"].map((t2, k) => <span key={t2} style={{ fontSize: 6.8, color: k === 1 ? "#141a21" : INK9, borderBottom: k === 1 ? "1.5px solid #5b6470" : "none", paddingBottom: 1 }}>{t2}</span>)}</span><span style={{ display: "block", marginTop: 4 }}>{chart()}</span><span style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3, marginTop: 3 }}>{["36.2 C", "34.8 C", "31.1 C", "38.6 C"].map((v) => <span key={v} style={{ fontSize: 7, color: "#5b6470", border: `1px solid ${G2}`, borderRadius: 3, padding: "1px 2px", textAlign: "center" }}>{v}</span>)}</span></>;
      case 13: return <>{ln("55%", 4)}<span style={{ display: "block", fontSize: 8.4, fontWeight: 700, color: "#5b6470", marginTop: 3 }}>Optimize glycol flow</span><span style={{ display: "block", marginTop: 2 }}>{ln("95%", 3)}</span><span style={{ display: "block", marginTop: 2 }}>{ln("80%", 3)}</span><span style={{ display: "flex", gap: 4, marginTop: 3, fontSize: 7, color: "#5b6470" }}><span>Temp ↓ 1.8 C</span><span>Energy ↓ 2.1 MWh/day</span></span><span style={{ display: "flex", gap: 3, justifyContent: "flex-end", marginTop: 4 }}><span style={{ border: `1px solid ${G}`, borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#5b6470" }}>View details</span><span style={{ background: "#5b6470", borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#fff" }}>Add to plan</span></span></>;
      case 14: return <>{ln("50%", 4)}<span style={{ display: "block", marginTop: 4 }}>{rows(3, 2)}</span><span style={{ display: "block", textAlign: "center", fontSize: 7, color: INK9, marginTop: 3 }}>View all notifications</span></>;
      case 15: return <>{ln("45%", 4)}<span style={{ display: "grid", gap: 4, marginTop: 4 }}>{["Site — All Sites", "Time range — Last 7 days", "Area — All", "Severity — All"].map((f2) => <span key={f2} style={{ display: "flex", justifyContent: "space-between", border: `1px solid ${G}`, borderRadius: 3, fontSize: 7, color: "#5b6470", padding: "2px 5px" }}><span>{f2}</span><span>▾</span></span>)}</span><span style={{ display: "flex", gap: 3, justifyContent: "flex-end", marginTop: 4 }}><span style={{ border: `1px solid ${G}`, borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#5b6470" }}>Reset</span><span style={{ background: "#5b6470", borderRadius: 3, fontSize: 7, padding: "1px 6px", color: "#fff" }}>Apply</span></span></>;
      default: return <span style={{ display: "block", border: `1.5px solid ${G}`, borderRadius: 8, padding: "4px 6px", maxWidth: 92, margin: "0 auto" }}>{ln("55%", 3)}<span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, marginTop: 3 }}><span style={{ fontSize: 8, fontWeight: 800, color: "#5b6470" }}>128.4K</span><span style={{ fontSize: 8, fontWeight: 800, color: "#5b6470" }}>78%</span><span style={{ fontSize: 8, fontWeight: 800, color: "#5b6470" }}>96.2%</span><span style={{ fontSize: 8, fontWeight: 800, color: "#5b6470" }}>12.4</span></span><span style={{ display: "block", marginTop: 3 }}>{chart()}</span></span>;
    }
  };
  return <Bo n="24" title="Wireframe exploration wall" sub="BrewOps Intelligence - Low-fidelity exploration. v1.0 - May 2024." dark={false} label="BrewOps wireframe exploration wall - interactive rebuild of Budweiser_24">
    <p style={{ margin: "0 0 9px", display: "flex", gap: 12, flexWrap: "wrap", fontSize: 10.8 }}>{cats24.map(([n, c]) => <span key={n}><span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, background: c, marginRight: 4 }} />{n}</span>)}</p>
    {(() => { const card24 = (t: string, body: string, i: number) => <button key={t} type="button" onClick={() => setW(i)} aria-pressed={i === w} aria-label={`${t} — wireframe thumbnail`} style={{ textAlign: "left", background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <b style={{ display: "block", fontSize: 10.4, lineHeight: 1.3, marginBottom: 4 }}>{t}</b>
        <span style={{ display: "block", background: "#fff", border: `1.5px solid ${i === w ? "#5b6470" : "#d5d8dc"}`, borderRadius: 7, padding: "6px 7px", minHeight: 96 }}>{wire24(i)}</span>
        <span style={{ display: "none" }}>{body}</span>
      </button>;
      return <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 9 }}>{WIREFRAMES24.slice(0, 5).map(([t, body], i) => card24(t, body, i))}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 9, marginTop: 10 }}>{WIREFRAMES24.slice(5).map(([t, body], j) => card24(t, body, j + 5))}</div>
        <p aria-live="polite" style={{ margin: "10px 0 0", fontSize: 10.6, lineHeight: 1.55, background: "#f4f1ea", border: "1px solid #e2ddd0", borderRadius: 8, padding: "7px 10px" }}><b>{WIREFRAMES24[w][0]}</b> — {WIREFRAMES24[w][1]}</p>
      </>; })()}
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
  /* Pass 7 (25): monochrome wireframe register restored — all chart
     ink is grey, deltas are neutral, and the left dashboard carries
     the printed US map (Volume by Region) again. */
  const kpiRow = (items: Array<[string, string, string]>) => <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 5 }}>{items.map(([l, v, d]) => <span key={l} style={{ background: "#fafafa", border: "1px solid #e2e4e8", borderRadius: 8, padding: "5px 7px" }}><span style={{ display: "block", fontSize: 8.8, color: "#8a93a0" }}>{l}</span><b style={{ fontSize: 13.5 }}>{v}</b><span style={{ display: "block", fontSize: 8.6, color: "#5b6470" }}>{d.startsWith("down") ? "▼ " : "▲ "}{d.replace(/^(up|down) /, "")}</span></span>)}</div>;
  const panel: React.CSSProperties = { background: "#fff", border: "1px solid #ddd6c9", borderRadius: 12, padding: "10px 11px" };
  return <Bo n="25" title="Dashboard wireframe comparison" sub="Two approaches for different user needs and moments." dark={false} label="BrewOps dashboard wireframe comparison - interactive rebuild of Budweiser_25">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 128px 1fr", gap: 10, alignItems: "start" }}>
      <div style={panel}>
        <b style={{ fontSize: 12.5 }}>LEFT — Executive Summary Dashboard</b>
        <p style={{ margin: "2px 0 8px", fontSize: 9.8, color: "#8a93a0" }}>Nav: Overview · Performance · Sales · Supply Chain · Markets · Finance · Alerts · Reports · Settings</p>
        {kpiRow([["Total Volume", "2.45M", "up 8.6%"], ["Net Revenue", "$186.7M", "up 6.3%"], ["Gross Margin", "31.4%", "up 1.2pp"], ["Cases Shipped", "2.31M", "up 7.4%"], ["On-Time Delivery", "92.1%", "down 1.6pp"]])}
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 7, marginTop: 8 }}>
          <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 8px" }}>
            <p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Volume Over Time — May 8–14</p>
            <svg viewBox="0 0 260 54" style={{ width: "100%", display: "block" }} role="img" aria-label="Volume over time, May 8 to 14, wireframe register">
              <polyline points="6,38 44,32 82,34 120,26 158,28 196,20 234,16 254,18" fill="none" stroke="#5b6470" strokeWidth="1.8" />
              <polyline points="6,44 44,40 82,42 120,36 158,38 196,32 234,30 254,28" fill="none" stroke="#9aa1ab" strokeWidth="1.5" />
              <polyline points="6,48 44,46 82,47 120,44 158,45 196,42 234,40 254,41" fill="none" stroke="#c9ccd1" strokeWidth="1.3" strokeDasharray="3 2" />
            </svg>
            <p style={{ margin: "2px 0 0", fontSize: 9, color: "#8a93a0" }}>0 · 100K · 200K · 300K · 400K — May 8 → May 14</p>
          </div>
          <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 8px" }}>
            <p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Volume by Region</p>
            <span style={{ display: "flex", gap: 6, alignItems: "center" }}><USMapMini w={104} /><span style={{ fontSize: 8.8, color: "#5b6470", lineHeight: 1.7 }}>■ West<br />■ Central<br />■ South<br />■ Northeast</span></span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 0.9fr", gap: 7, marginTop: 7 }}>
          <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 8px" }}>
            <p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Top Markets by Volume</p>
            {[["California", 100], ["Texas", 84], ["Florida", 66], ["New York", 52], ["Illinois", 38]].map(([m, v]) => <p key={m as string} style={{ margin: "2.5px 0", fontSize: 9.3, display: "flex", gap: 5, alignItems: "center" }}><span style={{ width: 52 }}>{m}</span><span style={{ flex: 1, height: 6, background: "#eef0f3", borderRadius: 3 }}><span style={{ display: "block", height: 6, width: `${v}%`, background: "#9aa1ab", borderRadius: 3 }} /></span></p>)}
          </div>
          <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 8px" }}>
            <p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Channel Mix</p>
            <span style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ display: "block", width: 44, height: 44, flex: "none", borderRadius: "50%", background: "conic-gradient(#6b7280 0 62%, #9aa1ab 62% 90%, #d5d8dc 90% 100%)" }}><span style={{ display: "block", width: 22, height: 22, borderRadius: "50%", background: "#fff", margin: "11px auto" }} /></span><span style={{ fontSize: 8.8, color: "#5b6470", lineHeight: 1.6 }}>Off Premise 62%<br />On Premise 28%<br />Other 10%</span></span>
          </div>
          <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 8px" }}>
            <p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Alerts Summary</p>
            <p style={{ margin: 0, fontSize: 9.3, lineHeight: 1.7 }}>⚠ 3 Critical Alerts<br />ⓘ 7 High Priority<br />ⓘ 12 Informational</p>
            <p style={{ margin: "3px 0 0", fontSize: 9, color: "#5b6470" }}>View all alerts →</p>
          </div>
        </div>
        <p style={{ margin: "7px 0 0", fontSize: 9.8, background: "#f7f8f9", border: "1px solid #e2e4e8", borderRadius: 6, padding: "5px 8px" }}>💡 <b>Insight highlight:</b> Off Premise volume is up 8.6% driven by growth in Texas and Florida markets. <span style={{ float: "right" }}>View full report →</span></p>
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
        <table className="tks-table tks-table--micro" style={{ fontSize: 10 }}><thead><tr><th></th><th>Priority</th><th>Order / PO</th><th>Customer</th><th>Status</th><th>Due</th><th>Age</th></tr></thead>
          <tbody>{QUEUE25.map(([p, po, cust, st, due, age], i) => <tr key={po} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#f3ead2" : undefined }}><td><input type="checkbox" checked={checked[i]} aria-label={`Select order ${po}`} onChange={() => setChecked((v) => v.map((x, j) => (j === i ? !x : x)))} onClick={(e) => e.stopPropagation()} /></td><td style={{ color: p === "High" ? "#c8102e" : p === "Medium" ? "#b97a0c" : "#5b6470", fontWeight: 700 }}>{p}</td><td style={{ whiteSpace: "nowrap" }}>{po}</td><td>{cust}</td><td style={{ whiteSpace: "nowrap" }}>{st}</td><td style={{ whiteSpace: "nowrap" }}>{due.replace(", 2025", "")}</td><td>{age}</td></tr>)}</tbody></table>
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
  const colHeads = ["Home", "Scenario Builder", "Compare Scenarios", "Inspect Evidence", "Request Approval"];
  /* Pass 7 (26): each wireflow panel now carries a drawn DOM miniature
     of the printed UI (chat home, builder form, compare table + chart,
     driver bars + US map, approval card) instead of text-only copy. */
  const miniBar: React.CSSProperties = { display: "flex", alignItems: "center", gap: 5, fontSize: 8.8, color: "#5b6470", borderBottom: "1px solid #eee9dc", paddingBottom: 4, marginBottom: 5 };
  const colBody: React.ReactNode[] = [
    <div key="c0">
      <p style={miniBar}><span style={{ color: "#141a21" }}>☰</span> Home</p>
      <p style={{ margin: 0, fontSize: 10.3 }}><b>Good morning, Alex</b><br /><span style={{ color: "#5b6470", fontSize: 9.3 }}>How can I help you today?</span></p>
      <p style={{ margin: "6px 0 0", border: "1px solid #e8d9ae", background: "#fdf8ec", borderRadius: 7, padding: "5px 7px", fontSize: 9.3, lineHeight: 1.5 }}>⚠ <b>Supply signal</b><br />Glass capacity constraint forecasted in {"Q3'24"}<br /><span style={{ color: "#5b6470" }}>Impact: High · Confidence: 72%</span></p>
      <p style={{ margin: "6px 0 2px", fontSize: 9.3, fontWeight: 700 }}>Start a scenario</p>
      {["Explore impact of glass constraint", "Assess alternative suppliers"].map((x) => <p key={x} style={{ margin: "3px 0", border: "1px solid #e2ddd0", borderRadius: 6, padding: "3px 7px", fontSize: 9.2, display: "flex", justifyContent: "space-between" }}><span>{x}</span><span>→</span></p>)}
      <p style={{ margin: "4px 0 0", fontSize: 9.2, color: "#5b6470" }}>View all signals (8)</p>
    </div>,
    <div key="c1">
      <p style={miniBar}><span>←</span> Scenario builder</p>
      <p style={{ margin: "0 0 5px", border: "1px solid #e2ddd0", borderRadius: 6, padding: "3px 7px", fontSize: 9.3 }}>Glass constraint in {"Q3'24"}</p>
      {[["Glass capacity", "−20%"], ["Constraint window", "Jul – Sep 2024"], ["Supplier allocation rule", "Cost priority"], ["Freight rate change", "+8%"], ["Service level target", "95%"]].map(([l2, v]) => <p key={l2} style={{ margin: "3px 0", display: "flex", justifyContent: "space-between", fontSize: 9.2 }}><span style={{ color: "#5b6470" }}>{l2}</span><span style={{ border: "1px solid #e2ddd0", borderRadius: 5, padding: "0 6px", fontWeight: 700 }}>{v} ▾</span></p>)}
      <p style={{ margin: "6px 0 2px", fontSize: 9.3, fontWeight: 700 }}>Constraints</p>
      {["Do not exceed OTIF < 95%", "Keep inventory turns > 6"].map((x) => <p key={x} style={{ margin: "3px 0", border: "1px solid #e2ddd0", borderRadius: 6, padding: "3px 7px", fontSize: 9.2, display: "flex", justifyContent: "space-between" }}><span>{x}</span><span style={{ color: "#8a93a0" }}>✕</span></p>)}
      <p style={{ margin: "6px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.2 }}><span style={{ color: "#5b6470" }}>Copilot estimate<br />Simulation ready ✓</span><span style={{ background: "#141a21", color: "#fff", borderRadius: 6, padding: "3px 9px", fontWeight: 700 }}>Run scenarios</span></p>
    </div>,
    <div key="c2">
      <p style={miniBar}><span>←</span> Compare scenarios <span style={{ marginLeft: "auto" }}>3 scenarios</span></p>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 8.6 }}><thead><tr>{["Scenario", "Cost Δ", "OTIF", "Risk"].map((h) => <th key={h} style={{ textAlign: "left", padding: "2px 3px", color: "#5b6470", borderBottom: "1px solid #e2ddd0", whiteSpace: "nowrap" }}>{h}</th>)}</tr></thead><tbody>{SCEN26.map(([name, , cells], i) => <tr key={name} onClick={() => setSc(i)} style={{ cursor: "pointer", background: i === sc ? "#f3ead2" : undefined }}>{[<b key="n">{name}</b>, cells[0], cells[1], cells[5]].map((c, j) => <td key={j} style={{ padding: "2px 3px", borderBottom: "1px solid #f0ead9", whiteSpace: "nowrap" }}>{c}</td>)}</tr>)}</tbody></table>
      <svg viewBox="0 0 120 34" style={{ width: "100%", display: "block", marginTop: 5 }} role="img" aria-label="Total landed cost over time for the four scenarios">
        <polyline points="2,24 24,20 46,22 68,16 90,18 116,12" fill="none" stroke="#141a21" strokeWidth="1.4" />
        <polyline points="2,26 24,23 46,24 68,20 90,21 116,17" fill="none" stroke="#8a93a0" strokeWidth="1.2" strokeDasharray="3 2" />
        <polyline points="2,25 24,24 46,21 68,22 90,19 116,20" fill="none" stroke="#b9bec7" strokeWidth="1.2" />
        <text x="2" y="33" fontSize="5.5" fill="#8a93a0">Total landed cost over time — Baseline · S1 · S2 · S3</text>
      </svg>
      <p style={{ margin: "4px 0 0", display: "flex", gap: 5 }}><span style={{ flex: 1, textAlign: "center", border: "1px solid #e2ddd0", borderRadius: 6, padding: "3px 0", fontSize: 9.2 }}>Save scenario set</span><span style={{ flex: 1, textAlign: "center", background: "#141a21", color: "#fff", borderRadius: 6, padding: "3px 0", fontSize: 9.2, fontWeight: 700 }}>Inspect evidence →</span></p>
    </div>,
    <div key="c3">
      <p style={miniBar}><span>←</span> Inspect evidence <span style={{ marginLeft: "auto" }}>S2 Alt. supplier ▾</span></p>
      <p style={{ margin: "0 0 4px", display: "flex", gap: 8, fontSize: 9.2 }}><b style={{ borderBottom: "2px solid #141a21" }}>Drivers</b><span style={{ color: "#5b6470" }}>Risks · Impact map · Assumptions</span></p>
      <p style={{ margin: "0 0 3px", fontSize: 9.3, fontWeight: 700 }}>Top cost drivers (Δ vs baseline)</p>
      {[["Freight", 100, "+$0.8M"], ["Raw materials", 76, "+$0.6M"], ["Packaging", 50, "−$0.4M"], ["Production", 38, "−$0.3M"], ["Inventory carrying", 24, "+$0.2M"]].map(([l2, v, d]) => <p key={l2 as string} style={{ margin: "2.5px 0", display: "flex", gap: 5, alignItems: "center", fontSize: 8.8 }}><span style={{ width: 62 }}>{l2}</span><span style={{ flex: 1, height: 6, background: "#f0ead9", borderRadius: 3 }}><span style={{ display: "block", height: 6, width: `${v}%`, background: "#8a93a0", borderRadius: 3 }} /></span><b>{d}</b></p>)}
      <p style={{ margin: "6px 0 2px", fontSize: 9.3, fontWeight: 700 }}>Geographic impact</p>
      <span style={{ display: "flex", gap: 7, alignItems: "center" }}><USMapMini w={86} /><span style={{ fontSize: 8.6, color: "#5b6470", lineHeight: 1.6 }}>● Increase<br />● Decrease<br />● No change</span></span>
      <p style={{ margin: "4px 0 0", borderTop: "1px solid #eee9dc", paddingTop: 4, fontSize: 9.2, display: "flex", justifyContent: "space-between" }}><span>Evidence sources (12)</span><span>›</span></p>
    </div>,
    <div key="c4">
      <p style={miniBar}><span>←</span> Request approval <span style={{ marginLeft: "auto" }}>S2 Alt. supplier ▾</span></p>
      <p style={{ margin: 0, fontSize: 9.3, fontWeight: 700 }}>Recommendation summary</p>
      <p style={{ margin: "4px 0 0", border: "1.5px solid #b97a0c", borderRadius: 7, padding: "5px 8px", fontSize: 9.3, display: "flex", justifyContent: "space-between", alignItems: "center" }}><span>🛡 <b>Recommended</b><br />S2 Alt. supplier</span><span style={{ textAlign: "right" }}><b>+1.4%</b> Δ Cost<br /><b>95.6%</b> OTIF</span></p>
      <p style={{ margin: "5px 0 0", fontSize: 9.2, lineHeight: 1.5, color: "#4a5462" }}>Rationale: Improves service level while keeping cost impact within target. Lower risk exposure vs. baseline.</p>
      <p style={{ margin: "6px 0 2px", fontSize: 9.3, fontWeight: 700 }}>Approvers</p>
      {[["Maria Gomez", "Supply Chain Director"], ["James Lee", "Finance Director"], ["Aaron Chen", "Commercial Director"]].map(([n2, r2]) => <p key={n2} style={{ margin: "3px 0", display: "flex", gap: 6, alignItems: "center", fontSize: 9.2 }}><span style={{ width: 16, height: 16, borderRadius: "50%", background: "#e8ebef", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>👤</span><span style={{ flex: 1 }}><b>{n2}</b><br /><span style={{ color: "#5b6470", fontSize: 8.6 }}>{r2}</span></span><span style={{ border: "1px solid #e2ddd0", borderRadius: 5, padding: "0 6px" }}>Pending ▾</span></p>)}
      <p style={{ margin: "6px 0 0", textAlign: "right" }}><span style={{ background: "#141a21", color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 9.2, fontWeight: 700 }}>Send for approval ➤</span></p>
      <p style={{ margin: "4px 0 0", fontSize: 8.6, color: "#8a93a0" }}>Approval card prints 95.6% OTIF; the compare table prints 94.7% — both as printed.</p>
    </div>,
  ];
  return <Bo n="26" title="Scenario builder wireflow" sub="Supply-chain intelligence copilot - Model changes. Understand impact. Make confident decisions. Governed and auditable: All scenarios, assumptions, and approvals are tracked for transparency and accountability. Secure - Role-based access - Audit trail." dark={false} label="BrewOps scenario builder wireflow - interactive rebuild of Budweiser_26">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, marginBottom: 7 }}>
      {STEPS26.map(([t, tag], i) => <p key={t} style={{ margin: 0, display: "flex", gap: 6, alignItems: "flex-start" }}>
        <span style={{ width: 19, height: 19, borderRadius: "50%", background: "#b97a0c", color: "#fff", fontWeight: 800, fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span>
        <span style={{ flex: 1 }}><b style={{ fontSize: 11.8, lineHeight: 1.3, display: "block" }}>{t.replace(/^\d+\.\s*/, "")}</b><span style={{ fontSize: 9.4, color: "#5b6470", lineHeight: 1.4, display: "block" }}>{tag}</span></span>
        {i < 4 ? <span aria-hidden="true" style={{ color: "#b97a0c", alignSelf: "center" }}>→</span> : null}
      </p>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "start" }}>
      {STEPS26.map(([t, , youDo, copilot], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#b97a0c" : "#ddd6c9"}`, borderRadius: 10, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: "#faf8f5", borderBottom: "1px solid #eee9dc", color: "#141a21", padding: "5px 9px", fontSize: 10.3 }}><b>{colHeads[i]}</b></span>
        <span style={{ display: "block", padding: "7px 9px", fontSize: 9.9, lineHeight: 1.55 }}>{colBody[i]}</span>
        <span style={{ display: "block", background: "#fdf8ec", borderTop: "1px solid #eee9dc", padding: "6px 9px", fontSize: 9.3, lineHeight: 1.55, color: "#4a5462" }}><b style={{ color: "#b97a0c" }}>You do</b> — {youDo}<br /><b style={{ color: "#b97a0c" }}>Copilot supports</b> — {copilot}</span>
      </button>)}
    </div>
    <p style={{ margin: "10px 0 0", background: "#102A43", color: "#fff", borderRadius: 9, padding: "7px 13px", fontSize: 11, display: "flex", gap: 16, flexWrap: "wrap" }}><span>🔒 <b>Secure</b></span><span>👤 <b>Role-based access</b></span><span>🧾 <b>Audit trail</b></span><span style={{ opacity: 0.85 }}>Governed and auditable — all scenarios, assumptions, and approvals are tracked for transparency and accountability.</span></p>
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
  /* Pass 7 (27): the three rejected patterns are shown as drawn mock
     UI screenshots (chat screen, KPI dashboard with donut, requests
     table + drawer) — the screenshots are the subject of the log. */
  const mockMini = (i: number): ReactNode => {
    if (i === 0) return <span style={{ display: "grid", gridTemplateColumns: "86px 1fr", border: "1px solid #e2e4e8", borderRadius: 7, overflow: "hidden", minHeight: 118 }}>
      <span style={{ background: "#f7f8f9", borderRight: "1px solid #e2e4e8", padding: "5px 6px" }}>
        <b style={{ fontSize: 8.8, display: "block", marginBottom: 3 }}>Chats</b>
        {[["North Coast Distributors", "2m"], ["Premium Beverage Group", "15m"], ["Mike Reynolds", "1h"], ["South Star Retail", "2h"], ["Western Markets", "1d"]].map(([n2, w2], k) => <span key={n2} style={{ display: "flex", gap: 4, alignItems: "center", padding: "2.5px 2px", borderRadius: 4, background: k === 0 ? "#eef0f3" : "transparent" }}><span style={{ width: 11, height: 11, borderRadius: "50%", background: "#c9ccd1", flex: "none" }} /><span style={{ flex: 1, fontSize: 7.4, lineHeight: 1.3 }}>{n2}</span><span style={{ fontSize: 6.8, color: "#8a93a0" }}>{w2}</span></span>)}
      </span>
      <span style={{ padding: "5px 7px", background: "#fff" }}>
        <b style={{ fontSize: 8.8, display: "block", borderBottom: "1px solid #eef0f3", paddingBottom: 3 }}>North Coast Distributors <span style={{ color: "#18a957", fontSize: 7.4 }}>● Online</span></b>
        <span style={{ display: "inline-block", background: "#f1f2f4", borderRadius: "8px 8px 8px 2px", padding: "3px 6px", fontSize: 7.8, marginTop: 5, maxWidth: "88%" }}>Can you confirm the display guidelines for Q3?</span>
        <span style={{ display: "block", textAlign: "right" }}><span style={{ display: "inline-block", background: "#e8f0fe", borderRadius: "8px 8px 2px 8px", padding: "3px 6px", fontSize: 7.8, marginTop: 4 }}>{"I'll check and get back to you."}</span></span>
        <span style={{ display: "inline-block", background: "#f1f2f4", borderRadius: "8px 8px 8px 2px", padding: "3px 6px", fontSize: 7.8, marginTop: 4, maxWidth: "88%" }}>Also, can you approve the promo layout?</span>
        <span style={{ display: "block", border: "1px solid #e2e4e8", borderRadius: 999, padding: "2.5px 8px", fontSize: 7.4, color: "#8a93a0", marginTop: 6 }}>Type a message…</span>
      </span>
    </span>;
    if (i === 1) return <span style={{ display: "grid", gridTemplateColumns: "16px 1fr", border: "1px solid #e2e4e8", borderRadius: 7, overflow: "hidden", minHeight: 118 }}>
      <span style={{ background: "#3a3f47", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, paddingTop: 5 }}>{["⌂", "▦", "☰", "👥", "⬡", "⚙"].map((g) => <span key={g} style={{ color: "#cfd6de", fontSize: 7.5 }}>{g}</span>)}</span>
      <span style={{ padding: "5px 6px", background: "#fff" }}>
        <b style={{ fontSize: 8.8, display: "block", marginBottom: 3 }}>Dashboard <span style={{ float: "right", fontWeight: 400, color: "#8a93a0", fontSize: 7.2 }}>Filters · This Month ▾</span></b>
        <span style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>
          {[["Total Requests", "1,248", "↑ 12%"], ["Approved", "842", "↑ 8%"], ["Rejected", "203", "↑ 5%"], ["Pending", "203", "↓ 2%"], ["Avg. Approval Time", "2.4 days", "↓ 10%"], ["SLA Met", "91%", "↑ 4%"], ["Overdue", "48", "↑ 14%"], ["Escalated", "27", "↑ 8%"], ["Impressions", "3.2M", "↑ 15%"], ["Engagement Rate", "4.7%", "↑ 6%"], ["Spend", "$2.1M", "↑ 9%"], ["ROI", "3.6x", "↑ 7%"]].map(([l2, v, d]) => <span key={l2} style={{ border: "1px solid #eef0f3", borderRadius: 4, padding: "2.5px 4px" }}><span style={{ display: "block", fontSize: 6.6, color: "#8a93a0", lineHeight: 1.3 }}>{l2}</span><b style={{ fontSize: 9.2 }}>{v}</b> <span style={{ fontSize: 6.6, color: "#8a93a0" }}>{d}</span></span>)}
        </span>
        <span style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr 1fr", gap: 4, marginTop: 4, alignItems: "center" }}>
          <span><span style={{ fontSize: 6.8, color: "#8a93a0", display: "block" }}>Requests Over Time</span><svg viewBox="0 0 60 16" style={{ width: "100%", display: "block" }} aria-hidden="true"><polyline points="1,12 12,7 23,10 34,5 45,8 59,4" fill="none" stroke="#9aa1ab" strokeWidth="1.3" /></svg></span>
          <span style={{ textAlign: "center" }}><span style={{ display: "inline-block", width: 20, height: 20, borderRadius: "50%", background: "conic-gradient(#6b7280 0 40%, #9aa1ab 40% 65%, #c9ccd1 65% 85%, #e3e6ea 85% 100%)" }}><span style={{ display: "block", width: 9, height: 9, borderRadius: "50%", background: "#fff", margin: "5.5px auto" }} /></span><span style={{ fontSize: 6.8, color: "#8a93a0", display: "block" }}>By Region</span></span>
          <span><span style={{ fontSize: 6.8, color: "#8a93a0", display: "block" }}>Top Programs</span>{[88, 64, 46].map((v, k) => <span key={k} style={{ display: "block", height: 3.5, background: "#eef0f3", borderRadius: 2, marginTop: 2.5 }}><span style={{ display: "block", height: 3.5, width: `${v}%`, background: "#9aa1ab", borderRadius: 2 }} /></span>)}</span>
        </span>
      </span>
    </span>;
    return <span style={{ display: "grid", gridTemplateColumns: "1fr 74px", border: "1px solid #e2e4e8", borderRadius: 7, overflow: "hidden", minHeight: 118 }}>
      <span style={{ padding: "5px 6px", background: "#fff" }}>
        <b style={{ fontSize: 8.8, display: "block", marginBottom: 2 }}>Requests</b>
        <span style={{ display: "flex", gap: 5, fontSize: 6.8, color: "#8a93a0", marginBottom: 3 }}><b style={{ color: "#141a21", borderBottom: "1.5px solid #141a21" }}>All</b><span>Pending</span><span>In Review</span><span>Approved</span><span>Rejected</span></span>
        {[["Q3 Display Program", "North Coast Distributors", "Pending", "2m ago"], ["Holiday Endcap", "Premium Beverage Group", "In Review", "15m ago"], ["Summer Promo", "South Star Retail", "Pending", "1h ago"], ["Back to School", "Western Markets", "Approved", "2h ago"], ["Octoberfest POS", "Highland Beverage", "In Review", "1d ago"], ["NFL Kickoff Display", "All Star Liquors", "Pending", "1d ago"]].map(([a, b, c2, d], k) => <span key={a} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 0.62fr 0.5fr", gap: 3, fontSize: 6.9, padding: "2px 1px", borderTop: "1px solid #f1f2f4", background: k === 0 ? "#f7f8f9" : "transparent" }}><span>{a}</span><span style={{ color: "#5b6470" }}>{b}</span><span>{c2}</span><span style={{ color: "#8a93a0" }}>{d}</span></span>)}
      </span>
      <span style={{ borderLeft: "1px solid #e2e4e8", background: "#fcfcfd", padding: "5px 6px" }}>
        <b style={{ fontSize: 7.8, display: "block" }}>Q3 Display Program <span style={{ float: "right", color: "#8a93a0" }}>✕</span></b>
        <span style={{ display: "block", fontSize: 6.9, color: "#5b6470", lineHeight: 1.55, marginTop: 3 }}>Customer<br /><b style={{ color: "#141a21" }}>North Coast Distributors</b><br />Submitted<br /><b style={{ color: "#141a21" }}>May 20, 2025 10:21 AM</b><br />Attachments<br />Planogram_Q3.pdf<br />Render_Q3.jpg</span>
        <span style={{ display: "block", border: "1px solid #d5d8dc", borderRadius: 4, fontSize: 7.2, padding: "2px 5px", marginTop: 4, background: "#eef0f3" }}>Actions ▾</span>
        <span style={{ display: "block", border: "1px solid #e2e4e8", borderRadius: 4, fontSize: 7.2, padding: "2px 5px", background: "#fff", lineHeight: 1.7 }}>✓ Approve<br />✎ Request Changes<br />⊗ Reject</span>
      </span>
    </span>;
  };
  return <Bo n="27" title="Design decision log" sub="Evaluating key patterns for the Budweiser trade marketing & approvals experience. PROJECT: Budweiser Trade Portal - DATE: May 20, 2025." dark={false} label="BrewOps design decision log - interactive rebuild of Budweiser_27">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      {REJECTED27.map(([t, mock, fails], i) => <button key={t} type="button" onClick={() => setR(i)} aria-pressed={i === r} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === r ? "#c8102e" : "#ddd6c9"}`, borderRadius: 11, padding: "10px 12px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "flex", justifyContent: "space-between", gap: 6, alignItems: "center" }}><b style={{ fontSize: 12.3, lineHeight: 1.35 }}>{i + 1}. {t}</b><span style={{ background: "#c8102e", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 9.3, fontWeight: 800, flex: "none" }}>✕ REJECTED</span></span>
        <span style={{ display: "block", marginTop: 7 }}>{mockMini(i)}</span>
        <span style={{ display: "none" }}>{mock}</span>
        <span style={{ display: "block", marginTop: 8 }}>
          <span style={{ display: "block", fontSize: 9.3, fontWeight: 800, letterSpacing: "0.09em", color: "#c8102e" }}>WHY IT FAILED</span>
          <ul style={{ margin: "3px 0 0", paddingLeft: 14, fontSize: 10.3, lineHeight: 1.55 }}>{fails.map((x) => <li key={x}>{x}</li>)}</ul>
        </span>
      </button>)}
    </div>
    <div style={{ border: "1.5px solid #c8102e", background: "#fff", borderRadius: 11, padding: "11px 13px", marginTop: 10 }}>
      <p style={{ margin: 0, display: "flex", gap: 8, alignItems: "center" }}><span style={{ background: "#c8102e", color: "#fff", borderRadius: "50%", width: 19, height: 19, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flex: "none" }}>✓</span><span style={{ background: "#c8102e", color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 9.3, fontWeight: 800 }}>CHOSEN DIRECTION</span><b style={{ fontSize: 14.5 }}>Action-first, focused workspace</b></p>
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
    </div>
    {/* Pass 7 (28): compact 4-column board; the Foundations-in-Use
        panel runs the full height of the board at right, with the
        printed Production Trend chart and Asset Performance table. */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 0.92fr 1.08fr", gap: 9, alignItems: "stretch" }}>
      <div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Typography Scale</p>
          {TYPE28.map(([a, b, c], i) => <p key={a} style={{ margin: "5px 0", borderBottom: "1px dashed #eee9dc", paddingBottom: 4 }}>
            <span style={{ fontSize: specSize[i], fontWeight: i < 4 ? 800 : 500, lineHeight: 1.15 }}>{a.split(" ").slice(1).join(" ") || a}</span>
            <span style={{ display: "block", fontSize: 9.3, color: "#8a93a0" }}>{a} · {b} · tracking {c}</span>
          </p>)}
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px", marginTop: 9 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Grid System</p>
          <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 3, height: 44 }}>{Array.from({ length: 12 }, (_, i) => <span key={i} style={{ background: "#f9d7de", borderRadius: 2 }} />)}</div>
          <p style={{ margin: "5px 0 0", fontSize: 9.6, color: "#5b6470", lineHeight: 1.55 }}>12-column grid · 24px gutter · 1280px max width · 16px page margin (mobile)</p>
        </div>
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
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Spacing Scale</p>
        {[4, 8, 16, 24, 32, 48, 64, 96, 128].map((v) => <p key={v} style={{ margin: "2.5px 0", display: "flex", gap: 6, alignItems: "center", fontSize: 9.3 }}><span style={{ width: 34, color: "#5b6470" }}>{v}px</span><span style={{ display: "block", height: 7, width: `${Math.max(3, v / 1.6)}%`, background: "#f5a800", borderRadius: 2 }} /></p>)}
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Elevation</p>
        <div style={{ display: "flex", gap: 5 }}>{["L0", "L1", "L2", "L3", "L4"].map((l, i) => <span key={l} style={{ flex: 1, textAlign: "center", background: "#fff", border: "1px solid #e7e2d9", borderRadius: 6, padding: "5px 0", fontSize: 9.3, boxShadow: ["none", "0 1px 2px rgba(17,17,17,.08)", "0 4px 12px rgba(17,17,17,.12)", "0 8px 20px rgba(17,17,17,.14)", "0 12px 24px rgba(17,17,17,.16)"][i] }}>{l}</span>)}</div>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Radius</p>
        <div style={{ display: "flex", gap: 5 }}>{[4, 8, 12, 16, 24].map((v) => <span key={v} style={{ flex: 1, textAlign: "center", background: "#faf8f5", border: "1px solid #111419", borderRadius: v, padding: "5px 0", fontSize: 9.3 }}>{v}</span>)}</div>
      </div>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", color: "#141a21", borderRadius: 11, padding: "10px 12px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Foundations in Use — Brewery Overview</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 6 }}>
          {[["Production HL", "24,560", "▲ 8.4%"], ["OEE", "87.3%", "▲ 3.1%"], ["Energy / HL", "3.21 kWh", "▼ 2.7%"], ["Critical Alerts", "3", "▲ 2"]].map(([l, v, d]) => <span key={l} style={{ background: "#faf8f5", border: "1px solid #e7e2d9", borderRadius: 8, padding: "6px 8px" }}><span style={{ display: "block", fontSize: 9, color: "#6b7280" }}>{l}</span><b style={{ fontSize: 15 }}>{v}</b> <span style={{ fontSize: 9, color: "#137a3f" }}>{d}</span></span>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 8, marginTop: 8 }}>
          <div>
            <p style={{ margin: "0 0 2px", fontSize: 10.3, fontWeight: 700 }}>Production Trend</p>
            <svg viewBox="0 0 120 44" style={{ width: "100%", display: "block" }} role="img" aria-label="Production trend over 24 hours, actual above target">
              <polyline points="2,36 16,30 30,32 44,24 58,27 72,19 86,22 100,14 116,10" fill="none" stroke="#f5a800" strokeWidth="1.8" />
              <polyline points="2,39 16,35 30,36 44,30 58,32 72,26 86,28 100,21 116,18" fill="none" stroke="#9aa1ab" strokeWidth="1.3" strokeDasharray="3 2" />
              <text x="2" y="43" fontSize="5.5" fill="#8a93a0">00:00 — 24:00 · HL vs Target</text>
            </svg>
          </div>
          <div>
            <p style={{ margin: "0 0 2px", fontSize: 10.3, fontWeight: 700 }}>Top Alerts</p>
            <p style={{ margin: 0, fontSize: 9.3, lineHeight: 1.55, color: "#4a5462" }}>🔴 Fill level high on Brite Tank 4 — Brite Area — 2 min ago — CRITICAL<br />🟠 CO2 usage above target — Utility — 15 min ago — WARNING<br />🔵 CIP cycle over target time — Brew House — 45 min ago — INFO</p>
          </div>
        </div>
        <p style={{ margin: "8px 0 3px", fontSize: 10.3, fontWeight: 700 }}>Asset Performance</p>
        <table className="tks-table tks-table--micro" style={{ width: "100%" }}><thead><tr><th>Asset</th><th>Status</th><th>OEE</th><th>Alerts</th></tr></thead>
          <tbody>{ASSETS28.map(([n, st, oee, al], i) => <tr key={n} onClick={() => setAsset(i)} style={{ cursor: "pointer", background: i === asset ? "#f3ead2" : undefined }}><td>{n}</td><td><span style={{ background: st === "Healthy" ? "#e7f7ee" : st === "Warning" ? "#fdf3e0" : "#fdecec", color: st === "Healthy" ? "#137a3f" : st === "Warning" ? "#b97a0c" : "#c8102e", borderRadius: 999, padding: "0 7px", fontSize: 9, fontWeight: 700 }}>{st}</span></td><td>{oee}</td><td>{al}</td></tr>)}</tbody></table>
        <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 10 }}><b>{ASSETS28[asset][0]}</b> — <span style={{ color: ASSETS28[asset][1] === "Healthy" ? "#137a3f" : ASSETS28[asset][1] === "Warning" ? "#b97a0c" : "#c8102e" }}>{ASSETS28[asset][1]}</span> — OEE {ASSETS28[asset][2]} — Alerts {ASSETS28[asset][3]}</p>
        <p style={{ margin: "auto 0 0", paddingTop: 8, fontSize: 9.3, color: "#8a93a0" }}>Filters: All Sites · Brew House · Fermentation · Packaging — Buttons: Primary · Secondary · Tertiary · Healthy · Warning · Critical · Info</p>
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
    <div style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr)", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 8px", display: "grid", gap: 2 }}>
        {["Overview", "Insights", "Investigations", "Data", "Approvals", "Settings"].map((nv, i) => <span key={nv} style={{ color: i === 2 ? "#8a5c00" : "#3c4652", background: i === 2 ? "#fdf3e0" : "transparent", borderRadius: 7, padding: "5px 9px", fontSize: 10.8, fontWeight: i === 2 ? 700 : 500 }}>{nv}</span>)}
        <p style={{ margin: "8px 4px 0", fontSize: 8.8, color: "#8a8f98", lineHeight: 1.5 }}>© 2024 Anheuser-Busch (as printed)</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 9, alignItems: "start", minWidth: 0 }}>
        <div style={{ ...sec, marginBottom: 0, gridColumn: "span 5" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Cards</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 7 }}>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Fermentation Temp — Bright Beer Tank 12</p><b style={{ fontSize: 18 }}>33.8 °F</b><p style={{ margin: "2px 0 0", fontSize: 9.8 }}>Target: 34.0 °F · Within Range · Updated 5m ago</p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Investigation — O2 Spike — Line 3</p><span className="tks-tag" style={{ color: "#c8102e" }}>High Priority</span><p style={{ margin: "3px 0 0", fontSize: 9.8 }}>Opened May 17, 2024 8:42 AM · Owner Alex R.</p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>Insight</p><p style={{ margin: 0, fontSize: 9.8 }}>Elevated O2 levels detected during packaging run. Likely Cause: Seal Failure — Confidence <b>78%</b></p></div>
            <div style={{ border: "1px solid #eee9dc", borderRadius: 9, padding: "7px 9px" }}><p className="tks-kicker" style={{ marginTop: 0, fontSize: 9 }}>KPI — Line Yield (7D)</p><b style={{ fontSize: 18 }}>97.6%</b><p style={{ margin: "2px 0 0", fontSize: 9.8 }}>vs prior 7D up 2.1% · Updated 1h ago</p></div>
          </div>
        </div>
        <div style={{ ...sec, marginBottom: 0, gridColumn: "span 4" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Alerts</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
            {[["High Priority", "O2 levels above control limit on Line 3.", "#c8102e"], ["Investigation Needed", "Unusual CO2 usage detected.", "#b97a0c"], ["FYI", "New data available for Packaging Line 2.", "#2563eb"], ["Resolved", "Seal failure investigation closed.", "#18a957"]].map(([t, d, col], i) => !dismissed[i] ? <div key={t} style={{ border: `1px solid ${col}`, borderRadius: 8, padding: "6px 9px", display: "flex", justifyContent: "space-between", gap: 6, fontSize: 10.3 }}><span><b style={{ color: col }}>{t}</b> — {d}</span><button type="button" className="tks-chip" aria-label={`Dismiss alert: ${t}`} onClick={() => setDismissed((v) => v.map((x, j) => (j === i ? true : x)))}>✕</button></div> : <p key={t} style={{ margin: 0, fontSize: 10.3, color: "#8a93a0" }}>{t} dismissed.</p>)}
          </div>
        </div>
        <div style={{ ...sec, marginBottom: 0, gridColumn: "span 3" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Filters</p>
          <p style={{ margin: 0, fontSize: 10.5 }}>Date range: May 10 – May 17, 2024 · Brewery: All Breweries · Area: Packaging · Line: Line 3 · Event type: All · Status: All — <b>Clear filters / <span style={{ background: "#c8102e", color: "#fff", borderRadius: 5, padding: "1px 8px" }}>Apply filters</span></b></p>
        </div>
        <div style={{ ...sec, marginBottom: 0, gridColumn: "span 8" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Data Table</p>
          <table className="tks-table tks-table--micro"><thead><tr><th>Event ID</th><th>Title</th><th>Area</th><th>Line</th><th>Detected</th><th>Status</th><th>Priority</th><th>Confidence</th><th>Owner</th></tr></thead>
            <tbody>{EVENTS29.map((r2, i) => <tr key={r2[0]} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#f3ead2" : undefined }}>{r2.map((cell2, j) => <td key={j}>{cell2}</td>)}</tr>)}</tbody></table>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>Selected: <b>{EVENTS29[row][1]}</b> ({EVENTS29[row][0]}) — Showing 1 to 5 of 24 results · 5 per page · pages 1–5 as printed.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 9, gridColumn: "span 4" }}>
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
        <div style={{ ...sec, marginBottom: 0, gridColumn: "span 12" }}><p className="tks-kicker" style={{ marginTop: 0 }}>States &amp; Approvals</p>
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
  const [tank] = useState(28);
  const [fall, setFall] = useState(6);
  const tankState = tank < 15 ? "LOW (< 15%)" : tank <= 30 ? "CAUTION (15% – 30%)" : tank <= 70 ? "HEALTHY (30% – 70%)" : "HIGH (> 70%)";
  const panel30: React.CSSProperties = { background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" };
  const head30 = (n: string, t: string, use: string) => <p style={{ margin: "0 0 6px" }}><b style={{ fontSize: 11.8 }}><span style={{ color: "#c8102e" }}>{n}</span> {t}</b><br /><span style={{ fontSize: 9.6, color: "#8a93a0" }}>When to use: {use}</span></p>;
  const cum: number[] = []; { let run = 0; FALLS30.forEach(([, v], i) => { run = i === 0 ? v : run + v; cum.push(run); }); }
  /* Pass 7 (30): print composition restored — a left title column
     (Budweiser red script + stacked display title) beside a 3x2 grid
     of large chart specimens and the narrow rules rail at right. */
  return <Bo n="30" bare title="" dark={false} label="BrewOps data visualization system - interactive rebuild of Budweiser_30">
    <div style={{ display: "grid", gridTemplateColumns: "146px minmax(0,1fr) 148px", gap: 10, alignItems: "start" }}>
      <div>
        <p style={{ margin: 0, color: "#c8102e", fontStyle: "italic", fontWeight: 800, fontSize: 17 }}>Budweiser</p>
        <p style={{ margin: "1px 0 0", fontSize: 8.8, letterSpacing: "0.18em", color: "#b97a0c", fontWeight: 700 }}>KING OF BEERS®</p>
        <h3 style={{ margin: "10px 0 0", fontSize: 27, lineHeight: 1.14, fontWeight: 800, color: "#141a21" }}>Data visualization system</h3>
        <p style={{ margin: "8px 0 0", fontSize: 9.5, letterSpacing: "0.14em", color: "#c8102e", fontWeight: 800 }}>BREWOPS INTELLIGENCE</p>
        <p style={{ margin: "6px 0 0", fontSize: 10.4, lineHeight: 1.6, color: "#4a5462" }}>Our visual system turns complex brewing and supply chain data into clear, actionable insight. Consistent patterns, accessible colors, and purposeful emphasis help every user make confident decisions.</p>
        <div style={{ border: "1px solid #e7e2d9", borderRadius: 9, padding: "8px 10px", marginTop: 10 }}>
          <p style={{ margin: 0, fontSize: 10.6 }}><b>BUILT FOR EVERY BREWER</b></p>
          <p style={{ margin: "3px 0 0", fontSize: 9.8, lineHeight: 1.55, color: "#4a5462" }}>Accessible. Consistent. Actionable.<br />From brewhouse to boardroom.</p>
        </div>
        <div style={{ display: "grid", gap: 6, marginTop: 10, fontSize: 9.4, lineHeight: 1.5 }}>
          {[["CLARITY", "Highlight what matters most."], ["CONSISTENCY", "Patterns scale across products."], ["INCLUSIVITY", "Accessible for every user."], ["ACTIONABILITY", "Insight that drives better decisions."]].map(([t, d]) => <p key={t} style={{ margin: 0 }}><b style={{ color: "#c8102e", letterSpacing: "0.08em" }}>{t}</b><br /><span style={{ color: "#5b6470" }}>{d}</span></p>)}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        <div style={panel30}>{head30("1", "Forecast Bands", "Show expected future range and uncertainty.")}
          <svg viewBox="0 0 260 108" style={{ width: "100%", height: 132, display: "block" }} role="img" aria-label="Demand forecast with 80 and 95 percent prediction bands">
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
          <svg viewBox="0 0 260 108" style={{ width: "100%", height: 132, display: "block" }} role="img" aria-label="Fermentation yield with anomaly markers against target">
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
            {HEAT30.map(([rowName, cells], ri) => cells.map((v, ci) => <button key={`${rowName}-${ci}`} type="button" aria-pressed={cell[0] === ri && cell[1] === ci} aria-label={`${rowName} ${["NW", "SW", "MW", "SE", "NE"][ci]}: ${v}`} onClick={() => setCell([ri, ci])} style={{ padding: "8px 2px", borderRadius: 5, border: cell[0] === ri && cell[1] === ci ? "2px solid #102A43" : "1px solid transparent", cursor: "pointer", font: "inherit", background: v === "High" ? "#e0483e" : v === "Elevated" ? "#f08c1a" : v === "Caution" ? "#f5c542" : "#efe6cf", color: v === "High" ? "#fff" : "#111", fontSize: 8.2, lineHeight: 1.35 }}><b>{rowName.split(" ")[0]}</b><br />{v}</button>))}
          </div>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 9.4 }}>{HEAT30[cell[0]][0]} × {["NW", "SW", "MW", "SE", "NE"][cell[1]]}: <b>{HEAT30[cell[0]][1][cell[1]]}</b> — Supply risk, next 30 days. High = Severe · Elevated = At risk · Caution = Monitor · Low = On track.</p>
        </div>
        <div style={panel30}>{head30("4", "Scenario Delta Charts", "Compare the impact of different scenarios.")}
          {DELTA30.map(([n, v]) => { const neg = v.startsWith("-"); const w = Math.min(100, Math.abs(parseFloat(v)) / 6.2 * 100); return <p key={n} style={{ margin: "3.5px 0", fontSize: 9.6, display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 104 }}>{n}</span><span style={{ flex: 1, position: "relative", height: 10, background: "#f4f1ea", borderRadius: 3 }}><span style={{ position: "absolute", top: 0, height: 10, borderRadius: 3, background: neg ? "#e0483e" : "#18a957", [neg ? "right" : "left"]: "50%", width: `${w / 2}%` } as React.CSSProperties} /><span style={{ position: "absolute", left: "50%", top: -1, width: 1.5, height: 12, background: "#8a93a0" }} /></span><b style={{ width: 38, textAlign: "right", color: neg ? "#e0483e" : "#18a957" }}>{v}</b></p>; })}
          <p style={{ margin: "4px 0 0", fontSize: 9.4, color: "#5b6470" }}>Service level impact vs. Base case (Week of Jul 7).</p>
        </div>
        <div style={panel30}>{head30("5", "Threshold States", "Communicate status against clear thresholds.")}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ width: 58, height: 96, border: "2px solid #8a93a0", borderRadius: "8px 8px 12px 12px", position: "relative", overflow: "hidden", flex: "none" }}><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${tank}%`, background: tank <= 30 ? "#f5a800" : "#18a957" }} /><span style={{ position: "absolute", left: 0, right: 0, top: "30%", borderTop: "1.5px dashed #e0483e" }} /></span>
            <span style={{ fontSize: 10, lineHeight: 1.55 }}><b style={{ fontSize: 16 }}>{tank}%</b> — Tank inventory, total network (printed example: 28% · 52 kHL)<br /><b>{tankState}</b><br /><span style={{ color: "#5b6470" }}>Caution: inventory below healthy range; projected to reach healthy range in 6 days.</span></span>
          </div>
        </div>
        <div style={panel30}>{head30("6", "Composition & Contribution", "Show how parts build to a total.")}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 118, borderBottom: "1.5px solid #c9cfd8", padding: "0 2px" }}>
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
        <div style={{ background: "#102A43", color: "#fff", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0, color: "#f5c86b" }}>Built for Every Brewer</p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}><b>Accessible. Consistent. Actionable.</b><br />From brewhouse to boardroom.<br /><b>ONE SYSTEM. EVERY DECISION.</b></p>
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
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 184px", gap: 8, alignItems: "start" }}>
        {/* Pass 7 integration correction: Budweiser_31's print DOES carry
            the Next Actions + Drill Into Details row as the dashboard's
            bottom band — full CTDash restores it inside the dashboard
            composition (the pass-6 height complaint was about the old
            rebuild's stacking, not the row's existence). */}
        <div style={{ minWidth: 0 }}><CTDash /></div>
        <div style={{ display: "grid", gap: 8, fontSize: 10.4, color: "#141a21" }}>
          <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "8px 10px" }}>
            <p className="tks-kicker" style={{ marginTop: 0 }}>Alert / Risk Queue</p>
            <p style={{ margin: "3px 0", lineHeight: 1.55 }}>🔴 <b>High Priority</b> — CO2 levels (CRITICAL, 2 min ago)</p>
            <p style={{ margin: "3px 0", lineHeight: 1.55 }}>🟠 <b>Investigation Needed</b> — CO2 usage (WARNING, 15 min ago)</p>
            <p style={{ margin: "3px 0", lineHeight: 1.55 }}>🔵 <b>FYI</b> — Packaging Line 2 data (INFO, 45 min ago)</p>
            <p style={{ margin: "3px 0", lineHeight: 1.55 }}>🟢 <b>Resolved</b> — seal failure (1 hr ago) · View all (7)</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "8px 10px" }}>
            <p className="tks-kicker" style={{ marginTop: 0 }}>Evidence &amp; Insights</p>
            <p style={{ margin: "3px 0", lineHeight: 1.55 }}><b>Insight:</b> Elevated CO2 levels detected during packaging run. May 17, 8:42 AM — Confidence 78%.</p>
            <p style={{ margin: "3px 0", lineHeight: 1.55 }}><b>Work Order:</b> WO-2024-0517-0892 — Seal replacement — Line 3 — May 17, 8:50 AM — Completed.</p>
            <p style={{ margin: "3px 0", lineHeight: 1.55 }}><b>Historian Trend:</b> O2 Sensor — Line 3 — May 17, 8:35–8:45 AM.</p>
          </div>
        </div>
      </div>
    </HiFi>
  </BoX>;
}

/* ---------------- 33 - Control Tower Explained ---------------- */
const EXPLAIN33: Array<[string, string, string]> = [
  ["Decision priority", "Instantly see what needs your attention first.", "Operational KPIs (marker 1): 24,560 HL · OEE 87.3% · On-Time Delivery 92.1% · Inventory Health 78% · Critical Alerts 3."],
  ["Risk exposure", "Understand where risk is concentrated and what's at stake.", "Inventory Risk Summary (marker 2): 152 At Risk SKUs — High 18 (12%) · Medium 46 (30%) · Low 88 (58%)."],
  ["Evidence", "Explore the data and insights that back every alert.", "Alert / Risk Queue + Evidence rail (marker 3): Insight, Confidence 78% · WO-2024-0517-0892 · O2 Sensor Line 3 trend."],
  ["Ownership", "Know who owns it and how it's progressing.", "Facility Overview + Next Actions owners (marker 4): Jamie D. · Morgan S. · Taylor R."],
  ["Action", "Take the right action, right from the dashboard.", "Next Actions (marker 5): Address CO2 levels on Line 3 — Take Action, due in 45m."],
];
export function BrewOpsControlTowerExplained() {
  const [s, setS] = useState(0);
  const cols = ["#f5a800", "#e07b1f", "#2563eb", "#18a957", "#7c4dff"];
  return <BoX n="33" title="Control Tower Explained" sub="Five ways the Control Tower turns data into confident, timely decisions — the numbered points sit in the left column and their markers 1–5 sit on the dashboard itself, as printed." dark={false} label="BrewOps control tower explained - interactive rebuild of Budweiser_33">
    {/* Pass 7 (33): the explainer is restored to the print's narrow
        numbered rail (~126px, number + title + one-line lead; the
        detail line sits under the selected item only) and the
        dashboard runs compact, without the added bottom row. */}
    <div style={{ display: "grid", gridTemplateColumns: "126px minmax(0,1fr)", gap: 10, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 5 }}>
        <p style={{ margin: 0, fontSize: 10, color: "#5b6470", lineHeight: 1.4 }}><span style={{ color: "#c8102e", fontStyle: "italic", fontWeight: 800 }}>Budweiser</span><br /><b style={{ letterSpacing: "0.08em", color: "#141a21", fontSize: 9.3 }}>BREWOPS INTELLIGENCE</b></p>
        {EXPLAIN33.map(([t, lead, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: i === s ? "#fff" : "transparent", border: `1.5px solid ${i === s ? cols[i] : "#e0d9c8"}`, borderRadius: 9, padding: "6px 7px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
          <span style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ width: 17, height: 17, borderRadius: "50%", background: cols[i], color: "#fff", fontWeight: 800, fontSize: 10.5, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span><b style={{ fontSize: 11.3, lineHeight: 1.25 }}>{t}</b></span>
          <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.45, marginTop: 3 }}>{lead}</span>
          {i === s ? <span style={{ display: "block", fontSize: 9.2, lineHeight: 1.5, color: "#5b6470", marginTop: 3 }}>{body}</span> : null}
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
            <polygon points="10,28 60,26 110,25 160,24 210,23 260,22 290,21 290,50 260,52 210,53 160,54 110,55 60,57 10,59" fill="#f5a800" opacity="0.16" />
            <polyline points="10,40 45,37 80,39 115,36 150,38 185,35 220,37 255,34 290,33" fill="none" stroke="#8a93a0" strokeWidth="1.8" strokeDasharray="5 3" />
            <polyline points="10,41 40,37 70,42 100,38 130,47 160,57 190,52 220,63 250,58 290,65" fill="none" stroke="#f5a800" strokeWidth="2.4" />
            <line x1="110" y1="10" x2="110" y2="88" stroke="#c8102e" strokeDasharray="2 3" />
            <text x="114" y="18" fontSize="7.5" fill="#c8102e">Investigation opened May 13, 8:42 AM</text>
            <text x="10" y="100" fontSize="7.5" fill="#8a93a0">— Actual Demand (amber) · - - Forecast · band Confidence Range (78%)</text>
          </svg>
          <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>Affected SKUs (8) — showing 1 to 5 of 8 · pages 1–2</p>
          <table className="tks-table tks-table--micro"><thead><tr><th>SKU</th><th>Package</th><th>Actual (7D)</th><th>Forecast (7D)</th><th>Variance</th><th>%</th><th>Severity</th><th>Conf.</th></tr></thead>
            <tbody>{SKUS34.map((r2, i) => <tr key={r2[0]} onClick={() => setSku(i)} style={{ cursor: "pointer", background: i === sku ? "#f3ead2" : undefined }}><td>{r2[0]}</td><td style={{ whiteSpace: "nowrap" }}>{r2[1]}</td><td>{r2[2]}</td><td>{r2[3]}</td><td style={{ color: "#c8102e" }}>{r2[4]}</td><td>{r2[5]}</td><td style={{ color: r2[6] === "High" ? "#c8102e" : "#b97a0c", fontWeight: 700 }}>{r2[6]}</td><td>{r2[7]}</td></tr>)}</tbody></table>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>Selected SKU {SKUS34[sku][0]} ({SKUS34[sku][1]}): variance {SKUS34[sku][4]} HL ({SKUS34[sku][5]}), confidence {SKUS34[sku][7]}. Product: Budweiser.</p>
        </div>
        <div style={{ display: "grid", gap: 9, alignContent: "start" }}>
          <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 12px" }}>
            <p className="tks-kicker" style={{ marginTop: 0 }}>Evidence &amp; Contributing Signals — View all (7)</p>
            {SIGNALS34.map(([t, d, sev], si) => <p key={t} style={{ margin: "6px 0", fontSize: 10.6, lineHeight: 1.5, borderLeft: `3.5px solid ${sevCol(sev)}`, paddingLeft: 8 }}><b>{t}</b> <span style={{ color: sevCol(sev), fontWeight: 800, fontSize: 9 }}>{sev}</span><br /><span style={{ color: "#5b6470" }}>{d}</span><Spark points={["0,4 12,6 24,5 36,9 48,12 60,15 72,17", "0,6 12,5 24,8 36,7 48,11 60,10 72,13", "0,8 12,7 24,9 36,8 48,10 60,9 72,11", "0,14 12,12 24,13 36,10 48,9 60,7 72,6"][si]} color={sevCol(sev)} w={72} h={18} /></p>)}
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
    <HiFi active="Logistics">
    <div style={{ display: "grid", gridTemplateColumns: "138px repeat(3,minmax(0,1fr)) 162px", gap: 8, alignItems: "start" }}>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Scenario Inputs</p>
        <p style={{ margin: 0, fontSize: 10.5, lineHeight: 1.65 }}>Time horizon: May 10 – May 17, 2024 (7D)<br />Facilities: All (12)<br />Products: All (24 SKUs)<br />Lanes: All (42)<br />Demand forecast: Latest forecast v3<br />Starting inventory: As of May 10, 2024<br /><b>Edit assumptions</b></p>
      </div>
      {SCEN35.map(([name, tag, desc, metrics, drivers], i) => <button key={name} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? scenCols[i] : "#e7e2d9"}`, borderTop: `5px solid ${scenCols[i]}`, borderRadius: 11, padding: "9px 11px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "flex", justifyContent: "space-between", gap: 5, alignItems: "center" }}><b style={{ fontSize: 12.5 }}>{name}</b><span style={{ background: scenCols[i], color: "#fff", borderRadius: 5, padding: "1px 7px", fontSize: 9, fontWeight: 800 }}>{tag}</span></span>
        <span style={{ display: "block", fontSize: 10.4, color: "#5b6470", lineHeight: 1.5, margin: "4px 0 7px" }}>{desc}</span>
        <table className="tks-table tks-table--micro"><tbody>{metrics.map(([k, v, d]) => <tr key={k}><td>{k}</td><td><b>{v}</b></td><td style={{ fontSize: 9.3 }}>{d}</td></tr>)}</tbody></table>
        <span style={{ display: "block", marginTop: 7 }}>
          <span style={{ display: "block", fontSize: 9, fontWeight: 800, letterSpacing: "0.09em", color: "#8a93a0" }}>TOP DRIVERS</span>
          <ul style={{ margin: "3px 0 0", paddingLeft: 13, fontSize: 10.2, lineHeight: 1.55 }}>{drivers.map((x) => <li key={x}>{x}</li>)}</ul>
        </span>
        <span style={{ display: "block", marginTop: 7 }}>
          <span style={{ display: "block", fontSize: 9, fontWeight: 800, letterSpacing: "0.09em", color: "#8a93a0", marginBottom: 3 }}>METRIC TRENDS (7D)</span>
          <Spark points={["0,15 12,11 24,13 36,9 48,11 60,7 74,8", "0,9 12,12 24,10 36,13 48,11 60,14 74,13", "0,16 12,13 24,14 36,10 48,8 60,9 74,5"][i]} color={scenCols[i]} />
        </span>
      </button>)}
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ border: "1.5px solid #18a957", background: "#f2faf4", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Recommendation</p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}><b>Service-optimized scenario</b> — Best balance of service and risk with manageable cost increase. Meets 95%+ service target · Minimizes supply risk · Acceptable cost increase (+6%).</p>
          <p style={{ margin: "7px 0 0" }}><button type="button" className="tks-btn" aria-pressed={adopted} onClick={() => setAdopted((v) => !v)} style={{ background: "#18a957", borderColor: "#18a957", fontSize: 11.5 }}>{adopted ? "✓ Adopted" : "Adopt recommended scenario"}</button></p>
          <p style={{ margin: "5px 0 0", fontSize: 10.3 }}>Export comparison</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Scenario Assumptions</p>
          <p style={{ margin: 0, fontSize: 10.4, lineHeight: 1.65 }}>Fuel price $3.85 / gal (+0.05)<br />Carrier capacity: Constrained<br />Demand volatility: Medium<br />Transit time variance: Normal<br />Inventory policy: Service-focused</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "9px 11px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Comparison — Best / Range</p>
          <p style={{ margin: 0, fontSize: 10.4, lineHeight: 1.65 }}>Service level <b>96.3%</b> / 89.1–96.3%<br />Landed cost <b>$2.21M</b> / $2.21–2.63M<br />Delayed deliveries <b>9</b> / 9–38<br />Inventory impact <b>+2.6%</b> / −0.8–+2.6%<br />Risk score <b>Low</b> / Low–High</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 10.6, lineHeight: 1.6, background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, padding: "7px 12px" }}><b>{"What's included in each scenario:"}</b> Transportation plan (Carrier assignments) · Inventory plan (Allocation &amp; positioning) · Capacity plan (Facility &amp; carrier capacity) · Service plan (SLAs &amp; priorities) · Risk evaluation (Disruption &amp; constraints). <span style={{ color: "#5b6470" }}>About scenario modeling: Scenarios are generated using AI optimization and historical performance.</span></p>
    </HiFi>
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
    <HiFi active="Approvals">
    <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr 0.95fr", gap: 9, alignItems: "start" }}>
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
        <p className="tks-kicker" style={{ marginTop: 0 }}>Expected Impact</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
          {[["CO2 Usage", "-2,360 kg", "down 7.8%", "#18a957", "0,5 12,8 24,7 36,11 48,13 60,16 74,18"], ["Total Production (HL)", "+1,250 HL", "up 5.4%", "#18a957", "0,17 12,14 24,15 36,11 48,9 60,7 74,4"], ["Changeover Time", "-15 min", "down 20%", "#18a957", "0,4 12,7 24,6 36,10 48,12 60,15 74,17"], ["OEE", "+2.3 pts", "up 2.6%", "#18a957", "0,16 12,13 24,14 36,10 48,11 60,7 74,5"]].map(([k, v, d, c, pts]) => <div key={k as string} className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>{k}</p><b style={{ fontSize: 15, whiteSpace: "nowrap" }}>{v}</b><p style={{ margin: "2px 0 3px", fontSize: 10.3, color: "#137a3f" }}>{d}</p><Spark points={pts as string} color={c as string} /></div>)}
        </div>
        <div className="tks-card" style={{ marginTop: 9 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Confidence Level — 78% High</p><Bar pct={78} label="Recommendation confidence 78 percent" />
          <p style={{ margin: "4px 0 0", fontSize: 11 }}>Based on historical performance and similar runs (as printed).</p>
          <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Risks &amp; Considerations</p>
          <p style={{ margin: 0, lineHeight: 1.6 }}><b style={{ color: "#c8102e" }}>High</b> — Changeover delay could impact downstream schedule<br /><b style={{ color: "#b97a0c" }}>Medium</b> — CO2 savings dependent on equipment efficiency<br /><b style={{ color: "#5b6470" }}>Low</b> — Minor quality variation possible during first hour<br />Mitigations are in place. Monitoring recommended during execution.</p></div>
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
    <div className="tks-card" style={{ marginTop: 9 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Activity Log — View full audit trail</p>
      <table className="tks-table tks-table--micro"><thead><tr><th>Time</th><th>Event</th><th>Who</th><th>Role</th><th>Note</th></tr></thead>
        <tbody>{LOG36.map(([t, ev, who, role, note], i) => <tr key={t} onClick={() => setLogRow(i)} style={{ cursor: "pointer", background: i === logRow ? "#f3ead2" : undefined }}><td style={{ whiteSpace: "nowrap" }}>{t}</td><td><b>{ev}</b></td><td style={{ whiteSpace: "nowrap" }}>{who}</td><td>{role}</td><td>{note}</td></tr>)}</tbody></table>
    </div>
    </HiFi>
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
    <HiFi active="Maintenance">
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
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Maintenance Risk Summary</p>
          <p style={{ margin: "3px 0", display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ display: "inline-flex", width: 62, height: 62, borderRadius: "50%", flex: "none", background: "conic-gradient(#e0483e 0deg 58deg, #f59e0b 58deg 177deg, #f7c948 177deg 360deg)", alignItems: "center", justifyContent: "center" }}><span style={{ width: 42, height: 42, borderRadius: "50%", background: "#fff", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><b style={{ fontSize: 14, lineHeight: 1 }}>45</b><span style={{ fontSize: 7, color: "#6b7280" }}>At Risk Assets</span></span></span>
            <span style={{ fontSize: 10.8, lineHeight: 1.6 }}><b style={{ color: "#c8102e" }}>Critical 7 (16%)</b><br /><b style={{ color: "#b97a0c" }}>High 15 (33%)</b><br /><b>Medium 23 (51%)</b></span>
          </p>
          <p style={{ margin: "3px 0 0", fontSize: 10.8, lineHeight: 1.6 }}>Top Risk Drivers: Vibration anomalies · Rising temperature · Pressure variance · Runtime exceeded.</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Open Maintenance Risks — View all (7)</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>🔴 <b>Compressor 1 (CP-01)</b> vibration above threshold — Fort Collins, Utilities — CRITICAL — 10 min ago<br />🔴 <b>Boiler 2 (BLR-02)</b> tube temperature rising — Cartersville, Utilities — CRITICAL — 25 min ago<br />🟠 <b>Pump P-12</b> pressure variance detected — Los Angeles, Line 3 — WARNING — 45 min ago<br />🔵 <b>CIP Skid 2</b> maintenance window approaching — Newark, Utilities — INFO — 1 hr ago</p></div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: 9, marginTop: 9, alignItems: "start" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Upcoming Maintenance</p>
        <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>CIP Skid 2 — Preventive Maintenance — May 18, 8:00 AM — Newark<br />Miller 3 — Vibration Analysis — May 18, 10:00 AM — Cartersville<br />Brite Tank 8 — Inspection — May 19, 9:00 AM — Columbus</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recommended Actions</p>
        <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>Inspect Compressor 1 bearings (High, Open) · Check Boiler 2 heat exchanger tubes (High, Open) · Replace Pump P-12 seals (Medium, Open)</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Health Distribution</p>
        {[["Healthy (90–100%)", 22, "#18a957"], ["Good (70–89%)", 36, "#5da85f"], ["Fair (50–69%)", 28, "#f5a800"], ["Poor (30–49%)", 10, "#e07b1f"], ["Critical (0–29%)", 4, "#e0483e"]].map(([l, v, c]) => <p key={l as string} style={{ margin: "3px 0", display: "flex", gap: 7, alignItems: "center", fontSize: 10.5 }}><span style={{ width: 128 }}>{l}</span><span style={{ flex: 1, height: 8, background: "#eee9dc", borderRadius: 4 }}><span style={{ display: "block", height: 8, width: `${v}%`, background: c as string, borderRadius: 4 }} /></span><b>{v}%</b></p>)}
      </div>
    </div>
    </HiFi>
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
    <HiFi active="Production">
      <div style={{ display: "flex", gap: 14, fontSize: 11, borderBottom: "1.5px solid #e7e2d9", paddingBottom: 6, marginBottom: 9 }}>
        {["Overview", "History", "Alerts (3)", "Work Orders (2)", "Documents"].map((t, i) => <span key={t} style={{ fontWeight: i === 0 ? 800 : 500, color: i === 0 ? "#c8102e" : "#5b6470", borderBottom: i === 0 ? "2.5px solid #c8102e" : "none", paddingBottom: 5 }}>{t}</span>)}
      </div>
      <Stats items={[["Health Score", "82% Healthy", "up 7% vs prior 7D"], ["RUL Estimate", "18 days", "Moderate risk — down 6 days"], ["Predicted Failure", "Jun 4, 2024", "± 3 days"], ["Utilization (7D)", "87.3%", "up 3.1% vs prior 7D"], ["OEE Impact (Est.)", "4.2%", "down 0.6% vs prior 7D"]]} />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.95fr 1.05fr", gap: 9, marginTop: 9, alignItems: "start" }}>
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
            <tbody>{SENSORS38.map((r2, i) => <tr key={r2[0]} onClick={() => setSensor(i)} style={{ cursor: "pointer", background: i === sensor ? "#f3ead2" : undefined }}><td style={{ whiteSpace: "nowrap" }}><b>{r2[0]}</b></td><td style={{ whiteSpace: "nowrap" }}>{r2[1]}</td><td style={{ whiteSpace: "nowrap" }}><b>{r2[2]}</b></td><td style={{ whiteSpace: "nowrap" }}>{r2[3]}</td><td>{r2[4]}</td><td style={{ color: stCol(r2[5]), fontWeight: 700 }}>{r2[5]}</td></tr>)}</tbody></table>
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
    <HiFi active="Quality">
    {/* Pass 7 (39): the workflow is the print's thin 4-step strip —
        small white cells with icon discs and counts, arrows between —
        not four chunky dark blocks. */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, padding: "7px 10px" }}>
      {WF.map(([t, d, n], i) => <button key={t} type="button" onClick={() => setWf(i)} aria-pressed={i === wf} style={{ textAlign: "left", background: i === wf ? "#fdf6ec" : "transparent", color: "#141a21", border: `1px solid ${i === wf ? "#e3c878" : "transparent"}`, borderRadius: 8, padding: "4px 7px", cursor: "pointer", font: "inherit", position: "relative", display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ width: 26, height: 26, borderRadius: "50%", background: ["#f1f2f4", "#fdf3e0", "#e7f7ee", "#fdecec"][i], display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, flex: "none" }}>{["📷", "👤", "✓", "🔧"][i]}</span>
        <span><span style={{ display: "block", fontSize: 9, color: "#8a93a0", fontWeight: 700 }}>{i + 1}</span><b style={{ fontSize: 11 }}>{t.replace(/^\d+\.\s*/, "")}</b><br /><span style={{ fontSize: 9.3, color: "#5b6470" }}>{d}</span><br /><span style={{ fontSize: 9.3 }}><span style={{ color: ["#8a93a0", "#b97a0c", "#137a3f", "#c8102e"][i] }}>●</span> <b>{n}</b></span></span>
        {i < 3 ? <span aria-hidden="true" style={{ position: "absolute", right: -13, top: "50%", transform: "translateY(-50%)", zIndex: 1, color: "#8a93a0", fontSize: 12 }}>→</span> : null}
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr 0.95fr", gap: 9, marginTop: 9, alignItems: "start" }}>
      <div style={{ minWidth: 0 }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Inspection Queue (86) · Reviewed 76 · Escalated 10 · All Items 1,248</p>
        <table className="tks-table tks-table--micro"><thead><tr><th>Item ID</th><th>Line</th><th>Defect Type</th><th>Detected</th><th>AI Conf.</th><th>Status</th><th>Priority</th></tr></thead>
          <tbody>{QUEUE39.map((r2, i) => <tr key={r2[0]} onClick={() => { setItem(i); setVerdict(null); }} style={{ cursor: "pointer", background: i === item ? "#f3ead2" : undefined }}><td style={{ whiteSpace: "nowrap" }}>{r2[0]}</td><td>{r2[1]}</td><td>{r2[2]}</td><td style={{ whiteSpace: "nowrap" }}>{r2[3]}</td><td><b>{r2[4]}</b></td><td><span style={{ background: stPill(r2[5]), color: "#fff", borderRadius: 999, padding: "0 7px", fontSize: 9.3, fontWeight: 700 }}>{r2[5]}</span></td><td style={{ color: r2[6] === "High" ? "#c8102e" : "#b97a0c", fontWeight: 700 }}>{r2[6]}</td></tr>)}</tbody></table>
        <p style={{ margin: "4px 0 0", fontSize: 10.3 }}>Showing 1 to 8 of 86 items · 10 per page · pages 1–5 … 9 as printed.</p>
      </div>
      <div className="tks-card" aria-live="polite" style={{ borderColor: "#c8102e" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Defect Overview — {cur[0]} — {cur[5]} — 1 of 86</p>
        <p style={{ margin: "4px 0", fontSize: 11, lineHeight: 1.6 }}>Defect Type: <b>{cur[2]}</b><br />Line / Area: {cur[1]} · Detected: {cur[3]}<br />AI Confidence: <b>{cur[4]}</b> · Priority: {cur[6]}<br />Rule / Model: CapSeal_v2.3 (as printed for item 0001)</p>
        {/* Pass 7 (39): large photographic defect evidence — text-free
            crops from the printed slide (bottle-cap inspection
            photos, incl. the printed red detection box). */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 6, margin: "7px 0 4px" }}>
          <img src="/projects/crops/brewops/q39-evidence-1.webp" alt="Defect evidence photo: bottle cap with the printed red detection box" style={{ width: "100%", height: 118, objectFit: "cover", borderRadius: 7, display: "block" }} />
          <img src="/projects/crops/brewops/q39-evidence-2.webp" alt="Defect evidence photo: close-up of the damaged bottle cap seal" style={{ width: "100%", height: 118, objectFit: "cover", borderRadius: 7, display: "block" }} />
        </div>
        <p className="tks-kicker" style={{ margin: "6px 0 3px" }}>Evidence Captures</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 4 }}>
          {[1, 2, 3, 4, 5].map((cn) => <span key={cn} style={{ textAlign: "center" }}><img src={`/projects/crops/brewops/q39-cap-${cn}.webp`} alt={`Evidence capture frame ${cn}`} style={{ width: "100%", height: 44, objectFit: "cover", borderRadius: 5, display: "block", border: cn === 1 ? "1.5px solid #c8102e" : "1px solid #e2ddd0" }} /><span style={{ fontSize: 8, color: "#8a93a0" }}>{["8:42:11 AM", "8:42:10 AM", "8:42:09 AM", "8:42:08 AM", "8:42:07 AM"][cn - 1]}</span></span>)}
          <span style={{ border: "1px solid #e2ddd0", borderRadius: 5, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, color: "#5b6470", fontWeight: 700 }}>+3 more</span>
        </div>
        <p className="tks-kicker" style={{ margin: "9px 0 2px" }}>Verification — Assign to: Jamie D.</p>
        <p style={{ margin: "3px 0", fontSize: 10.6, lineHeight: 1.6 }}>✓ Approved by Jamie D. — May 17, 8:45 AM<br />· Pending review — Assigned to Jamie D. — May 17, 8:42 AM<br />· Detected by AI — May 17, 8:42 AM<br /><span style={{ color: "#8a93a0" }}>(Item status prints as Needs Review while the history prints an approval — both as printed.)</span></p>
        <p style={{ display: "flex", gap: 5, margin: "8px 0 0", flexWrap: "wrap" }}>
          <button type="button" className="tks-btn" aria-pressed={verdict === "approve"} onClick={() => setVerdict("approve")} style={{ background: "#c8102e", borderColor: "#c8102e" }}>Approve</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={verdict === "escalate"} onClick={() => setVerdict("escalate")}>Escalate</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={verdict === "reject"} onClick={() => setVerdict("reject")}>Reject</button></p>
        <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>{verdict ? `Verification staged: ${verdict} for ${cur[0]} (explorer state; printed status: ${cur[5]}).` : ""}</p>
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Traceability (item 0001 panel as printed)</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>Batch ID: BRW-0517-L3-0842 · Production Time: May 17, 2024 08:00–09:00 AM · Line / Equipment: Line 3 — Filler · Material Lot: CAP-ALU-0517-A · Downstream Impact: 2,340 units. View full traceability.</p>
        </div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Corrective Action</p>
          <p style={{ margin: "3px 0", fontSize: 10.6, lineHeight: 1.6 }}>Action Type: Select action type · Description: Describe the corrective action… · Assign to: Select owner · Target Date: Select date · <b>Create Action</b></p>
          <p className="tks-kicker" style={{ margin: "9px 0 2px" }}>Recent Corrective Actions</p>
          <p style={{ margin: "3px 0", fontSize: 10.8, lineHeight: 1.6 }}>Capper Torque Adjustment — Line 3 — May 16 — <b>Open</b> — Due in 2d · Seal Temperature Check — Line 2 — May 15 — <b>In Progress</b> — Due in 1d · Vision Sensor Cleaning — Line 1 — May 14 — <b>Resolved</b> — Completed</p>
        </div>
      </div>
    </div>
    </HiFi>
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
    <div style={{ display: "grid", gridTemplateColumns: open ? "118px minmax(0,1fr) 232px" : "118px minmax(0,1fr)", gap: 9, alignItems: "start" }}>
      <Side31 active="Control Tower" />
      <div style={{ minWidth: 0 }}><CTDash compact /></div>
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
  /* Pass 7 (41): print register — each state is a muted mini Copilot
     panel (AI header, grey question bubble, pale tinted state banner),
     not saturated solid banners. */
  const bannerCols = ["#b97a0c", "#e07b1f", "#18a957"];
  const bannerBg = ["#fdf6e0", "#fdf0e2", "#e9f7ee"];
  return <Bo n="41" title="BrewOps Copilot State Gailery" sub={"The Copilot responds with appropriate transparency and guardrails based on data confidence and decision context. Legend: Observation (What was detected) · Inference (What it likely means) · Recommendation (What we suggest) · Action (What was taken)."} dark={false} label="BrewOps copilot state gallery - interactive rebuild of Budweiser_41">
    <HiFi active="Insights">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      {STATES41.map((cur, i) => <button key={cur.name} type="button" onClick={() => { setS(i); setApproved(false); }} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? "#7c4dff" : "#ddd6c9"}`, borderRadius: 12, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "block", background: "#f6f2ff", borderBottom: "1px solid #e4dcff", padding: "7px 11px" }}>
          <b style={{ fontSize: 11.8 }}>{cur.name}</b><br /><span style={{ fontSize: 9.9, color: "#5b6470", lineHeight: 1.45 }}>{cur.desc}</span>
        </span>
        <span style={{ display: "block", padding: "9px 11px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9.3, color: "#5b6470", marginBottom: 7 }}><span style={{ width: 15, height: 15, borderRadius: 4, background: "#c8102e", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 800 }}>AI</span><b style={{ color: "#232a33" }}>BrewOps Copilot</b> BETA<span style={{ marginLeft: "auto", letterSpacing: "0.2em" }}>··· ✕</span></span>
          <span style={{ display: "block", textAlign: "right" }}><span style={{ display: "inline-block", background: "#eef0f3", color: "#232a33", borderRadius: "11px 11px 3px 11px", padding: "5px 9px", fontSize: 10.3, maxWidth: "92%", textAlign: "left" }}>{cur.q}</span></span>
          <span style={{ display: "block", background: bannerBg[i], color: "#232a33", border: `1px solid ${bannerCols[i]}44`, borderRadius: 7, padding: "6px 9px", fontSize: 10.4, fontWeight: 700, lineHeight: 1.5, margin: "8px 0" }}><span style={{ color: bannerCols[i] }}>●</span> {cur.banner}</span>
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
    </HiFi>
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
          <p className="tks-kicker" style={{ marginTop: 0 }}>Budweiser Case Study</p>
          <b style={{ fontSize: 14.5, lineHeight: 1.35 }}>BrewOps Intelligence Demonstrator</b>
          <p style={{ margin: "4px 0 0", fontSize: 10.6, lineHeight: 1.6 }}>A design-led demonstrator summarizing verified outcomes across deployability, expert review, accessibility, testing, usability, and scenario coverage.</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px", fontSize: 10.6, lineHeight: 1.6 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Legend</p>
          <p style={{ margin: 0 }}><span style={{ color: "#137a3f" }}>●</span> <b>Verified evidence</b> — backed by documented proof or system data<br /><span style={{ color: "#b97a0c" }}>●</span> <b>Projected value</b> — estimated based on early signals and industry benchmarks</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px", fontSize: 10.8, lineHeight: 1.6 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>About This Scorecard</p>
          <p style={{ margin: 0 }}>Measures reflect the current state of the BrewOps Intelligence demonstrator as of May 17, 2024. Future value will be tracked post-launch.</p>
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
        <div style={{ background: "#f2faf4", border: "1px solid #bfe3cc", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Outcome Summary — Verified</p>
          <b style={{ fontSize: 26, color: "#137a3f" }}>6 / 6</b>
          <p style={{ margin: "3px 0 0", fontSize: 10.6, lineHeight: 1.55 }}>Verified outcomes — all outcome measures have verified evidence.</p>
        </div>
        <div style={{ background: "#fff8ec", border: "1px solid #ecd9ac", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Projected Impact — Tracking Post-Launch</p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}>Business impact and adoption metrics will be reported after pilot deployment.</p>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Next Update</p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}><b>June 14, 2024</b> — Post-pilot outcomes and business impact will be published.</p>
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
    {/* Pass 7 (43): one dense architecture diagram — external sources
        feed in from the left, cross-cutting services connect from the
        right, and every layer band sits inside the dashed platform
        boundary with down-flow arrows between bands. */}
    <div style={{ display: "grid", gridTemplateColumns: "138px minmax(0,1fr) 138px", gap: 8, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 6 }}>
        <p className="tks-kicker" style={{ margin: 0 }}>External Data Sources</p>
        {[["🗄", "Brewery Systems", "DCS, PLC, Historian, MES, SCADA"], ["⚗", "Lab Systems", "LIMS, Quality Results, Microbiology"], ["🏢", "Enterprise Systems", "ERP, CMMS, Work Orders, Inventory, HR"], ["📡", "IoT & Edge Devices", "Sensors, Gateways, Edge Collectors"], ["🌤", "External Data", "Weather, Utility Rates, Market Data"], ["📄", "Files & Documents", "SOPs, Batch Records, Manual Logs"]].map(([ic, t, d]) => <p key={t} style={{ margin: 0, background: "#fff", border: "1px solid #e7e2d9", borderRadius: 8, padding: "6px 8px", fontSize: 9.6, lineHeight: 1.45, position: "relative" }}><b style={{ fontSize: 10.2 }}>{ic} {t}</b><br /><span style={{ color: "#5b6470" }}>{d}</span><span aria-hidden="true" style={{ position: "absolute", right: -9, top: "50%", transform: "translateY(-50%)", color: "#b9a06a", fontSize: 9 }}>- -›</span></p>)}
      </div>
      <div>
        <div style={{ border: "1.5px dashed #d8a7a0", borderRadius: 11, padding: "8px 10px", background: "#fffdfb" }}>
          <p style={{ margin: "0 0 6px", fontSize: 9.8, fontWeight: 800, letterSpacing: "0.12em", color: "#b3352c" }}>BREWOPS INTELLIGENCE PLATFORM</p>
          <div style={{ display: "grid", gap: 3 }}>
            {LAYERS43.slice(0, 5).map(([name, tag, items], i) => <div key={name}>
              <button type="button" onClick={() => setL(i)} aria-pressed={i === l} style={{ display: "grid", gridTemplateColumns: "118px 1fr", gap: 8, width: "100%", textAlign: "left", background: i === l ? "#fdf6ec" : "#faf8f5", border: `1.5px solid ${i === l ? bandCols[i] : "#e7e2d9"}`, borderRadius: 8, padding: "5px 8px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
                <span><b style={{ fontSize: 10.3, letterSpacing: "0.04em", textTransform: "uppercase" }}>{name}</b><br /><span style={{ fontSize: 8.8, color: bandCols[i], fontWeight: 700 }}>{tag}</span></span>
                <span style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>{items.map((x) => { const [bt, bd] = x.split(" - "); return <span key={x} style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 6, padding: "3px 6px", fontSize: 8.8, lineHeight: 1.35 }}><b>{bt}</b>{bd ? <><br /><span style={{ color: "#5b6470" }}>{bd}</span></> : null}</span>; })}</span>
              </button>
              <p aria-hidden="true" style={{ margin: 0, textAlign: "center", color: "#8a93a0", fontSize: 9, lineHeight: 1 }}>↓</p>
            </div>)}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.3fr", gap: 6 }}>
              <div style={{ background: "#fdf3f1", border: "1px solid #f0d4cf", borderRadius: 8, padding: "6px 8px" }}>
                <p style={{ margin: 0, fontSize: 9.6 }}><b style={{ color: "#b3352c" }}>🛡 AUTHORIZATION &amp; SECURITY</b></p>
                <p style={{ margin: "3px 0 0", fontSize: 8.8, lineHeight: 1.55 }}>Identity Provider (OIDC / SAML) · RBAC / ABAC · MFA &amp; SSO · Secrets Management · Row &amp; Field Level Security</p>
              </div>
              <div style={{ background: "#eef4fd", border: "1px solid #cfdef5", borderRadius: 8, padding: "6px 8px" }}>
                <p style={{ margin: 0, fontSize: 9.6 }}><b style={{ color: "#2563eb" }}>∿ OBSERVABILITY &amp; OPERATIONS</b></p>
                <p style={{ margin: "3px 0 0", fontSize: 8.8, lineHeight: 1.55 }}>Logging (ELK / OpenSearch) · Metrics (Prometheus / Grafana) · Tracing (OpenTelemetry) · Alerting &amp; Incident Management · Audit Logs</p>
              </div>
              <button type="button" onClick={() => setL(5)} aria-pressed={l === 5} style={{ textAlign: "left", background: l === 5 ? "#eef7f0" : "#f4faf5", border: `1.5px solid ${l === 5 ? bandCols[5] : "#cfe3d2"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
                <p style={{ margin: 0, fontSize: 9.6 }}><b style={{ color: "#2e7d32" }}>🗄 STORAGE LAYER</b></p>
                <span style={{ display: "flex", gap: 3.5, flexWrap: "wrap", marginTop: 3 }}>{LAYERS43[5][2].map((x) => { const [bt, bd] = x.split(" - "); return <span key={x} style={{ background: "#fff", border: "1px solid #d8e6da", borderRadius: 5, padding: "2px 5px", fontSize: 8.6, lineHeight: 1.35 }}><b>{bt}</b>{bd ? <><br /><span style={{ color: "#5b6470" }}>{bd}</span></> : null}</span>; })}</span>
              </button>
            </div>
          </div>
        </div>
        <div style={{ border: "1.5px dashed #d8a7a0", borderRadius: 11, padding: "7px 10px", marginTop: 8, background: "#fff7f5", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <p style={{ margin: 0, fontSize: 9.8 }}><b style={{ color: "#b3352c" }}>☁ DEPLOYMENT &amp; INFRASTRUCTURE</b><br /><span style={{ fontSize: 8.8, color: "#5b6470" }}>Deployed on AWS (Multi-AZ)</span></p>
          {[["VPC & Networking", "Isolated, Secure"], ["EKS (Kubernetes)", "Container Orchestration"], ["Auto Scaling", "High Availability"], ["CI/CD Pipeline", "GitHub Actions"], ["IaC (Terraform)", "Infrastructure as Code"], ["Monitoring", "CloudWatch"], ["WAF & Security", "DDoS, Firewall, Shield"]].map(([t, d]) => <span key={t} style={{ fontSize: 8.8, lineHeight: 1.4 }}><b>{t}</b><br /><span style={{ color: "#5b6470" }}>{d}</span></span>)}
        </div>
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        <p className="tks-kicker" style={{ margin: 0 }}>Cross-Cutting Services</p>
        {[["🔔", "Notification Service", "Email, SMS, In-App, Webhooks"], ["⚑", "Feature Flags", "Rollout & Experimentation"], ["⚙", "Configuration Service", "Centralized Config Management"], ["🛡", "Data Quality Service", "Monitoring & Rules"], ["📅", "Job Scheduler", "Airflow / Temporal"], ["☁", "Backup & DR", "Backup, Restore, Disaster Recovery"]].map(([ic, t, d]) => <p key={t} style={{ margin: 0, background: "#fff", border: "1px solid #e7e2d9", borderRadius: 8, padding: "6px 8px", fontSize: 9.6, lineHeight: 1.45, position: "relative" }}><span aria-hidden="true" style={{ position: "absolute", left: -9, top: "50%", transform: "translateY(-50%)", color: "#b9a06a", fontSize: 9 }}>‹- -</span><b style={{ fontSize: 10.2 }}>{ic} {t}</b><br /><span style={{ color: "#5b6470" }}>{d}</span></p>)}
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
  /* Pass 7 (44): print organisation restored — the 8 step columns
     carry icon, description and the worked example only; Systems
     Involved, Data Flow and Outcomes run as three horizontal bands
     beneath the flow, as printed. */
  const icons44 = ["⚠", "⤨", "🗄", "💡", "👤", "▶", "🗄", "🛡"];
  const sysOf = (systems: string) => systems.split(". Data flow:")[0];
  const flowOf = (systems: string) => (systems.split(". Data flow:")[1] ?? "").replace(/\.$/, "");
  const bandRow = (label: string, cells: ReactNode[], tint = "#fff") => <div style={{ display: "grid", gridTemplateColumns: "86px repeat(8,1fr)", gap: 6, marginTop: 7, alignItems: "stretch" }}>
    <p style={{ margin: 0, fontSize: 9.3, fontWeight: 800, letterSpacing: "0.08em", color: "#5b6470", display: "flex", alignItems: "center" }}>{label} <span aria-hidden="true" style={{ marginLeft: 4 }}>▸</span></p>
    {cells}
  </div>;
  return <BoX n="44" serif title="Data Flow Sequence" sub="From alert to action: End-to-end operational flow — the CO2 Line 3 alert is threaded through all 8 steps as the worked example." dark={false} label="BrewOps data flow sequence - interactive rebuild of Budweiser_44">
    <div style={{ display: "grid", gridTemplateColumns: "86px repeat(8,1fr)", gap: 6, alignItems: "stretch" }}>
      <p style={{ margin: 0, fontSize: 9.3, fontWeight: 800, letterSpacing: "0.08em", color: "#5b6470", display: "flex", alignItems: "center" }}>FLOW STEPS <span aria-hidden="true" style={{ marginLeft: 4 }}>▸</span></p>
      {FLOW44.map(([t, desc, example], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? stepCols[i] : "#e7e2d9"}`, borderRadius: 10, padding: "7px 8px", cursor: "pointer", font: "inherit", color: "#141a21", position: "relative" }}>
        {i < 7 ? <span aria-hidden="true" style={{ position: "absolute", right: -8, top: 26, color: "#8a93a0", zIndex: 2, fontSize: 10 }}>→</span> : null}
        <span style={{ display: "flex", gap: 5, alignItems: "center" }}><span style={{ width: 16, height: 16, borderRadius: "50%", background: stepCols[i], color: "#fff", fontWeight: 800, fontSize: 9.5, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span><b style={{ fontSize: 9.6, lineHeight: 1.3, textTransform: "uppercase" }}>{t.replace(/^\d+\.\s*/, "")}</b></span>
        <span style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}><span style={{ width: 34, height: 34, borderRadius: "50%", background: `${stepCols[i]}1f`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>{icons44[i]}</span></span>
        <span style={{ display: "block", fontSize: 8.9, lineHeight: 1.5, color: "#4a5462" }}>{desc}</span>
        <span style={{ display: "block", background: "#faf8f5", border: "1px solid #eee9dc", borderRadius: 6, padding: "5px 6px", fontSize: 8.6, lineHeight: 1.5, marginTop: 6 }}><b style={{ color: stepCols[i] }}>EXAMPLE</b><br />{example}</span>
      </button>)}
    </div>
    {bandRow("SYSTEMS INVOLVED", FLOW44.map(([, , , systems], i) => <div key={i} style={{ background: "#fff", border: `1px solid ${i === s ? stepCols[i] : "#e7e2d9"}`, borderRadius: 8, padding: "5px 7px", fontSize: 8.7, lineHeight: 1.5 }}><b style={{ display: "block", fontSize: 9.2 }}>{sysOf(systems).split(" - ")[0]}</b><span style={{ color: "#5b6470" }}>{sysOf(systems).split(" - ").slice(1).join(" - ")}</span></div>))}
    {bandRow("DATA FLOW", FLOW44.map(([, , , systems], i) => <div key={i} style={{ position: "relative", fontSize: 8.7, lineHeight: 1.5, padding: "2px 1px" }}>{i < 7 ? <span aria-hidden="true" style={{ position: "absolute", right: -7, top: 8, color: "#8a93a0", zIndex: 2, fontSize: 9 }}>→</span> : null}<b style={{ display: "block", fontSize: 9.2 }}>{flowOf(systems).split(" (")[0]}</b><span style={{ color: "#5b6470" }}>{flowOf(systems).includes("(") ? flowOf(systems).split(" (")[1].replace(")", "") : ""}</span></div>))}
    {bandRow("OUTCOMES", FLOW44.map(([, , , , outcome], i) => <p key={i} style={{ margin: 0, fontSize: 8.8, lineHeight: 1.5, display: "flex", gap: 4 }}><span style={{ color: "#18a957", fontWeight: 800 }}>✓</span><span>{outcome}</span></p>))}
    <div style={{ background: "#fff", border: "1px solid #ddd6c9", color: "#141a21", borderRadius: 10, padding: "9px 13px", marginTop: 10 }}>
      <b style={{ fontSize: 11.5 }}>Flow Principles</b>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr) 0.8fr", gap: 9, marginTop: 5, fontSize: 10.2, lineHeight: 1.55 }}>
        <p style={{ margin: 0 }}><b>End-to-end visibility</b> — Track every step from signal to resolution</p>
        <p style={{ margin: 0 }}><b>Right information, right time</b> — Surface the most relevant context automatically</p>
        <p style={{ margin: 0 }}><b>Human-in-the-loop</b> — Keep operators in control with clear recommendations</p>
        <p style={{ margin: 0 }}><b>Trusted &amp; traceable</b> — Every action is logged, auditable, and compliant</p>
        <p style={{ margin: 0 }}><b>Continuous improvement</b> — Capture outcomes to improve models and processes</p>
        <p style={{ margin: 0, color: "#5b6470" }}><b style={{ color: "#141a21" }}>Legend</b> — Detect · Route · Retrieve · Recommend · Act · Audit</p>
      </div>
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.5, color: "#5b6470" }}>CLARITY · FOCUS · TRUST · SPEED, as across the foundations boards. v1.0 — May 2025 (footer as printed).</p>
  </BoX>;
}

/* ---------------- 45 - BrewOps in Action (bw-43) ---------------- */
export function BrewOpsInAction() {
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
  return <Bo n="45" serif title="BrewOps Intelligence in Action" sub="From real-time insights to real results. Built with reusable components, consistent patterns, and production-ready code. Case Study — bw-43-code-and-ui-proof." dark={false} label="BrewOps in action code proof - interactive rebuild of Budweiser_45">
    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 9, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Live dashboard — the file-31 Control Tower, rendered by the component</p>
        <div style={{ border: "1px solid #e0d9c8", borderRadius: 12, padding: 7, background: "#faf8f5" }}>
          <div style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr)", gap: 9, alignItems: "start" }}>
            <Side31 active="Control Tower" />
            <div style={{ minWidth: 0 }}><CTDash /></div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ background: "#0d1520", borderRadius: 12, padding: "9px 0 18px", overflow: "hidden" }}>
          <p style={{ margin: "0 13px 7px", fontSize: 10.3, color: "#9fb4c8", fontFamily: "ui-monospace, monospace" }}>KpiCard.tsx — TSX (as printed, abridged)</p>
          <ol style={{ margin: 0, padding: "0 10px 0 36px", fontFamily: "ui-monospace, monospace", fontSize: 8.8, lineHeight: 1.5, color: "#d7e3ee" }}>
            {code45.map((ln, i) => <li key={i} style={{ whiteSpace: "pre" }}>{ln || " "}</li>)}
          </ol>
        </div>
        <div style={{ position: "absolute", right: 10, bottom: 10, background: "#fff", border: "1.5px solid #18a957", borderRadius: 11, boxShadow: "0 10px 24px rgba(17,17,17,0.18)", padding: "8px 11px", width: 168 }}>
          <p style={{ margin: 0, display: "flex", gap: 6, alignItems: "center" }}><span style={{ background: "#18a957", color: "#fff", borderRadius: "50%", width: 17, height: 17, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, flex: "none" }}>✓</span><b style={{ fontSize: 11.5 }}>Production Ready</b></p>
          <p style={{ display: "flex", gap: 4, flexWrap: "wrap", margin: "7px 0 0" }}>{CHECKS.map((c2, i) => <button key={c2} type="button" className="tks-chip" aria-pressed={checks[i]} onClick={() => setChecks((v) => v.map((x, j) => (j === i ? !x : x)))} style={{ fontSize: 9.2, padding: "2px 7px" }}>{checks[i] ? "✓ " : ""}{c2}</button>)}</p>
          <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 9.5, color: "#5b6470" }}>{checks.filter(Boolean).length} / 4 qualities checked on the printed panel. Built with BrewOps UI.</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.8 }}>BrewOps Intelligence Design System v1.0 — May 2024 (as printed).</p>
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
  return <Bo n="46" serif title="BW-44: Quality Evidence" sub="Proof of quality across testing, accessibility, performance, contracts, and deployment. DATE: May 17, 2024 8:42 AM CDT — ENVIRONMENT: Staging (Preview) — BUILD: #20240517.42, Commit 7f3a9c1 — TRIGGERED BY: alex.r@abbev.com, CI Pipeline (all as printed)." dark={false} label="BrewOps BW-44 quality evidence - interactive rebuild of Budweiser_46">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, alignItems: "start" }}>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>1 · Automated Tests</p>
        <p style={{ margin: "0 0 2px", display: "flex", gap: 9, alignItems: "center" }}>
          <span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: "50%", flex: "none", background: "conic-gradient(#18a957 342deg, #e8e4da 342deg)", alignItems: "center", justifyContent: "center" }}><span style={{ width: 35, height: 35, borderRadius: "50%", background: "#fff", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><b style={{ fontSize: 11.5, lineHeight: 1 }}>362</b><span style={{ fontSize: 6.8, color: "#6b7280" }}>95% passed</span></span></span>
          <span style={{ fontSize: 10.4, lineHeight: 1.65 }}>Passed <b>344 · 95.0%</b><br />Failed <b style={{ color: "#c8102e" }}>12 · 3.3%</b> · Skipped <b>6 · 1.7%</b><br />Duration <b>17m 13s</b></span>
        </p>
        <table className="tks-table tks-table--micro" style={{ marginTop: 8 }}><thead><tr><th>Suite</th><th>Tests</th><th>Passed</th><th>Failed</th><th>Skipped</th><th>Duration</th></tr></thead>
          <tbody>{SUITES46.map(([n, t, p2, f, sk, d], i) => <tr key={n} onClick={() => setSuite(i)} style={{ cursor: "pointer", background: i === suite ? "#f3ead2" : undefined }}><td>{n}</td><td>{t}</td><td>{p2}</td><td style={{ color: f > 0 ? "#c8102e" : undefined }}>{f}</td><td>{sk}</td><td>{d}</td></tr>)}<tr><td><b>TOTAL</b></td><td><b>362</b></td><td><b>344</b></td><td><b>12</b></td><td><b>6</b></td><td><b>17m 13s</b></td></tr></tbody></table>
        <p aria-live="polite" style={{ margin: "5px 0 0", fontSize: 10.3 }}>Selected: <b>{SUITES46[suite][0]}</b> — {SUITES46[suite][2]} of {SUITES46[suite][1]} passed. The CI log prints per-suite counts differently (e.g. Unit tests — Passed (142/142)) — both as printed.</p>
      </div>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>2 · Accessibility (axe-core)</p>
        <p style={{ margin: 0, display: "flex", gap: 10, alignItems: "center" }}>{scoreRing(96)}<span style={{ fontSize: 11, lineHeight: 1.6 }}><b>Overall Score 96 / 100 — Good — AA</b><br />WCAG 2.1 AA · Last scan: May 17, 2024 8:35 AM<br />Issues: <b>0 Critical · 2 Serious · 7 Moderate · 12 Minor</b></span></p>
        <p style={{ margin: "7px 0 0", fontSize: 10.8, lineHeight: 1.65 }}><b>Top issues:</b> Buttons must have discernible text (2, Serious) · Color contrast ratio is insufficient (4, Moderate) · Form elements must have labels (3, Moderate) · Links should have discernible text (2, Minor). View full accessibility report.</p>
      </div>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>3 · Performance (Lighthouse)</p>
        <p style={{ margin: 0, display: "flex", gap: 7 }}>{[["Performance", 98], ["Accessibility", 97], ["Best Practices", 100], ["SEO", 93]].map(([l, v]) => <span key={l as string} style={{ textAlign: "center" }}>{scoreRing(v as number)}<span style={{ display: "block", fontSize: 8.8, color: "#5b6470", marginTop: 2 }}>{l}</span></span>)}</p>
        <table className="tks-table tks-table--micro" style={{ marginTop: 8 }}><thead><tr><th>Metric</th><th>This Run</th><th>Previous</th><th>Change</th></tr></thead><tbody>
          <tr><td>First Contentful Paint</td><td>0.8 s</td><td>1.1 s</td><td>↓ 27%</td></tr><tr><td>Largest Contentful Paint</td><td>1.2 s</td><td>1.6 s</td><td>↓ 25%</td></tr><tr><td>Total Blocking Time</td><td>40 ms</td><td>90 ms</td><td>↓ 56%</td></tr><tr><td>Cumulative Layout Shift</td><td>0.03</td><td>0.07</td><td>↓ 57%</td></tr><tr><td>Speed Index</td><td>1.3 s</td><td>1.8 s</td><td>↓ 28%</td></tr></tbody></table>
        <p style={{ margin: "5px 0 0", fontSize: 10.3 }}>Device: Mobile · Network: 4G · Throttling: Moderate (as printed).</p>
      </div>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>4 · API Contracts (Pact)</p>
        <p style={{ margin: "0 0 2px", fontSize: 10.4, lineHeight: 1.65 }}>Pacts Verified <b style={{ color: "#137a3f" }}>100%</b> · Total Pacts <b>38</b> · Verified <b>38</b> · Failed <b>0</b> · Pending <b>0</b></p>
        <table className="tks-table tks-table--micro" style={{ marginTop: 6 }}><thead><tr><th>Provider</th><th>Consumer</th><th>Pact</th><th>Result</th><th>Duration</th></tr></thead>
          <tbody>{PACTS46.map(([p2, c2, pact, d]) => <tr key={pact}><td>{p2}</td><td>{c2}</td><td>{pact}</td><td style={{ color: "#137a3f", fontWeight: 700 }}>✓ Verified</td><td>{d}</td></tr>)}</tbody></table>
        <p style={{ margin: "5px 0 0", fontSize: 10.3 }}>View all pact results (as printed).</p>
      </div>
      {/* Pass 7 (46): the print's CI log is a light panel of single-line
          mono rows — the dark block + wrapped lines doubled the slide
          height. Light panel, nowrap rows, compact 3x2 grid rhythm. */}
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px", overflow: "hidden" }}>
        <p style={{ margin: "0 0 7px", fontSize: 10.3, color: "#5b6470", fontFamily: "ui-monospace, monospace" }}>5 · CI / Deployment Log (excerpt) — <span style={{ color: "#137a3f", fontWeight: 700 }}>Pipeline: Success</span></p>
        <ol style={{ margin: 0, padding: "0 0 0 26px", fontFamily: "ui-monospace, monospace", fontSize: 7.4, lineHeight: 1.65, color: "#33393f" }}>{CILOG46.map((line) => <li key={line} style={{ whiteSpace: "nowrap" }}>{line}</li>)}</ol>
        <p style={{ margin: "7px 0 2px", fontSize: 10, color: "#5b6470" }}>Artifacts: test-report.html · coverage/lcov.info · pact/ · lighthouse.json</p>
      </div>
      <div style={panel46}><p className="tks-kicker" style={{ marginTop: 0 }}>6 · Environment &amp; Deployment</p>
        <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.65 }}>Commit 7f3a9c1 (View diff) · Image abbev/bw-44:20240517.42 · Deployed May 17, 8:52 AM (CDT) · By CI Pipeline (GitHub Actions)<br /><b>Progression:</b> ✓ Build → ✓ Test → ✓ Security Scan → ✓ Deploy Staging → ✓ Smoke Tests → ✓ Complete<br /><b>Health checks:</b> /health 200 OK 98 ms · /ready 200 OK 102 ms · /metrics 200 OK 110 ms — <b>Staging Healthy</b>, all systems operational.</p>
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
    <div style={{ display: "grid", gridTemplateColumns: "104px minmax(0,1fr)", gap: 10, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 2, fontSize: 10.3 }}>
        <p className="tks-kicker" style={{ margin: "0 0 5px" }}>Case Study</p>
        {["Overview", "The Challenge", "Our Approach", "The Demonstrator", "Impact", "Usability Test Plan"].map((nv, i) => <span key={nv} style={{ padding: "4px 8px", borderRadius: 6, borderLeft: i === 5 ? "3px solid #c8102e" : "3px solid transparent", background: i === 5 ? "#fdf0f3" : "transparent", fontWeight: i === 5 ? 800 : 500, color: i === 5 ? "#c8102e" : "#4a5462" }}>{nv}</span>)}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: "0 0 8px", display: "flex", gap: 16, justifyContent: "flex-end", fontSize: 9.5, letterSpacing: "0.14em", fontWeight: 800, color: "#8a93a0" }}><span>CLARITY</span><span>FOCUS</span><span>TRUST</span><span>SPEED</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "196px minmax(0,1fr)", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Participants</p>
          <p style={{ margin: "0 0 4px" }}><b style={{ fontSize: 24, color: "#c8102e", lineHeight: 1 }}>8–10</b> <span style={{ fontSize: 10.6, color: "#5b6470" }}>Total participants</span></p>
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
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) 190px", gap: 11, alignItems: "start" }}>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}>
        <svg viewBox="0 0 330 224" style={{ width: "100%", display: "block" }} role="img" aria-label="Severity by frequency scatter plot of ten findings">
          <rect x="44" y="28" width="126" height="84" fill="#f5a800" opacity="0.05" />
          <rect x="170" y="28" width="126" height="84" fill="#e0483e" opacity="0.06" />
          <rect x="44" y="112" width="126" height="84" fill="#8a93a0" opacity="0.04" />
          <rect x="170" y="112" width="126" height="84" fill="#18a957" opacity="0.04" />
          <text x="172" y="40" fontSize="7.5" fill="#c8102e" fontWeight="700">HIGH PRIORITY</text>
          <text x="50" y="40" fontSize="7.5" fill="#8a6d1f" fontWeight="700">MONITOR</text>
          <text x="176" y="190" fontSize="7.5" fill="#4a7a58" fontWeight="700">MEDIUM PRIORITY</text>
          <text x="50" y="124" fontSize="7.5" fill="#5b6470" fontWeight="700">LOW PRIORITY</text>
          {[1, 2, 3, 4, 5].map((v) => <g key={v}><line x1={px(v)} y1="28" x2={px(v)} y2="196" stroke="#e3ded2" /><line x1="44" y1={py(v)} x2="296" y2={py(v)} stroke="#e3ded2" /><text x={px(v) - 2} y="210" fontSize="7.5" fill="#8a93a0">{v}</text><text x="34" y={py(v) + 3} fontSize="7.5" fill="#8a93a0">{v}</text></g>)}
          <line x1="44" y1="196" x2="296" y2="196" stroke="#8a93a0" /><line x1="44" y1="28" x2="44" y2="196" stroke="#8a93a0" />
          <text x="120" y="222" fontSize="8.5" fill="#5b6470">Frequency (Occurrence) →</text>
          <text x="12" y="120" fontSize="8.5" fill="#5b6470" transform="rotate(-90 12 120)">Severity (Impact) →</text>
          {FINDINGS48.map(([name, sev, fr], i) => { const cx = px(fr), cy = py(sev), rightSide = cx < 235; const stagger = i === 2 ? 9 : i === 0 ? -7 : 0; return <g key={name} onClick={() => setF(i)} style={{ cursor: "pointer" }}>
            <circle cx={cx} cy={cy} r={i === f ? 8.4 : 7.2} fill={dotCol(i)} stroke={i === f ? "#102A43" : "#fff"} strokeWidth={i === f ? 2 : 1.2} />
            <text x={cx} y={cy + 2.6} fontSize="7.5" fill="#fff" fontWeight="800" textAnchor="middle">{i + 1}</text>
            <text x={rightSide ? cx + 10 : cx - 10} y={cy + 2 + stagger} fontSize="6.6" fill="#4a5462" fontWeight="600" textAnchor={rightSide ? "start" : "end"}>{name.length > 27 ? `${name.slice(0, 27)}…` : name}</text>
          </g>; })}
        </svg>
        <p aria-live="polite" style={{ margin: "7px 0 0", fontSize: 10.8 }}><b>Finding {f + 1}: {cur[0]}</b> — Severity {cur[1]} / 5 · Frequency {cur[2]} / 5 · Printed band: <b>{printedBand}</b> · Quadrant by position: {quadrant48(cur[1], cur[2])}.</p>
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        {/* Pass 4: the printed Top-3 rail is three separate cards,
            each with its red number circle — split from the pass-3
            combined box. */}
        <p className="tks-kicker" style={{ margin: 0 }}>Top 3 Changes to Prioritize</p>
        {[["Surface critical alerts prominently", "Move critical alerts above the fold on Overview with clear visual hierarchy."], ["Improve filter discoverability", "Make filters more visible and accessible across all key views."], ["Simplify investigation flow", "Streamline steps to find root cause and recommended actions."]].map(([t, d], i) => <div key={t} style={{ background: "#fff", border: "1.5px solid #c8102e", borderRadius: 11, padding: "8px 11px", display: "flex", gap: 9 }}>
          <span aria-hidden="true" style={{ width: 21, height: 21, flex: "none", borderRadius: "50%", background: "#c8102e", color: "#fff", fontWeight: 800, fontSize: 11.5, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.55 }}><b>{t}</b> — {d} <b style={{ color: "#c8102e" }}>High Priority</b></p>
        </div>)}
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
    <div style={{ position: "relative" }}>
    <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 2, width: 34, height: 34, borderRadius: "50%", background: "#102A43", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, fontWeight: 800, boxShadow: "0 4px 12px rgba(17,17,17,0.25)" }}>›</span>
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
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "11px 9px", display: "grid", gap: 2 }}>
        {["Overview", "Visual Foundations", "Component Library", "Technical Results", "Evaluation Summary", "Learnings"].map((nv) => <span key={nv} style={{ color: nv === "Technical Results" ? "#8a5c00" : "#3c4652", background: nv === "Technical Results" ? "#fdf3e0" : "transparent", borderRadius: 7, padding: "5px 9px", fontSize: 10.6, fontWeight: nv === "Technical Results" ? 700 : 500 }}>{nv}</span>)}
        <p style={{ margin: "9px 4px 0", fontSize: 9.6, color: "#6b7280", lineHeight: 1.6 }}><b style={{ color: "#141a21" }}>Legend</b><br />Measured — collected from system or users<br />Observed — validated in demo or pilot sessions<br />Simulated — modeled or estimated for comparison<br /><br />© 2024 Anheuser-Busch (as printed)</p>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9 }}>
          {[TECH50[0], TECH50[2], TECH50[3], TECH50[1], TECH50[4], TECH50[5]].map(([title, summary, metrics], pi) => <button key={title} type="button" onClick={() => setS(pi)} aria-pressed={pi === s} style={{ ...panel50, textAlign: "left", cursor: "pointer", font: "inherit", color: "#141a21", border: pi === s ? "1.5px solid #102A43" : panel50.border }}>
            <b style={{ fontSize: 12.3 }}>{title}</b>
            {(title.startsWith("Accessibility") || title.startsWith("Test Coverage")) ? <span style={{ display: "flex", marginTop: 6 }}><span style={{ display: "inline-flex", width: 44, height: 44, borderRadius: "50%", background: `conic-gradient(#18a957 ${title.startsWith("Accessibility") ? 96 : 82}%, #e8e4da ${title.startsWith("Accessibility") ? 96 : 82}%)`, alignItems: "center", justifyContent: "center" }}><span style={{ width: 33, height: 33, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11.5 }}>{title.startsWith("Accessibility") ? "96%" : "82%"}</span></span></span> : null}
            <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginTop: 7 }}>
              {metrics.map(([k, v, d]) => <span key={k} style={{ background: "#faf8f5", border: "1px solid #eee9dc", borderRadius: 7, padding: "5px 8px" }}><span style={{ display: "block", fontSize: 9.2, color: "#8a93a0" }}>{k}</span><b style={{ fontSize: 13.5 }}>{v}</b>{d ? <span style={{ display: "block", fontSize: 9, color: "#137a3f" }}>{d}</span> : null}</span>)}
            </span>
            <span style={{ display: "block", fontSize: 9.9, lineHeight: 1.55, color: "#5b6470", marginTop: 7 }}>{summary}</span>
            {title.startsWith("Performance") ? <svg viewBox="0 0 260 40" style={{ width: "100%", display: "block", marginTop: 6 }} role="img" aria-label="Response time over time P95, baseline versus demonstrator"><polyline points="4,8 40,10 76,9 112,11 148,9 184,10 220,9 252,10" fill="none" stroke="#e0483e" strokeWidth="1.8" /><polyline points="4,26 40,28 76,25 112,29 148,26 184,28 220,26 252,27" fill="none" stroke="#18a957" strokeWidth="1.8" /><text x="196" y="7" fontSize="7" fill="#e0483e">Baseline P95</text><text x="182" y="38" fontSize="7" fill="#18a957">Demonstrator P95 · 00:00–24:00</text></svg> : null}
            {title.startsWith("Reliability") ? <span style={{ display: "flex", gap: 3, marginTop: 6 }}>{["May 11", "May 12", "May 13", "May 14", "May 15", "May 16", "May 17"].map((d) => <span key={d} style={{ flex: 1, background: "#18a957", color: "#fff", borderRadius: 5, padding: "3px 0", textAlign: "center", fontSize: 8.6 }}>{d.replace("May ", "5/")} ✓</span>)}</span> : null}
          </button>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginTop: 9, alignItems: "start" }}>
          <div style={panel50}>
            <b style={{ fontSize: 12.3 }}>{TECH50[6][0]}</b>
            <p style={{ margin: "4px 0 0", fontSize: 10.6, lineHeight: 1.65 }}>{TECH50[6][1]}</p>
            <p style={{ margin: "5px 0 0", display: "flex", gap: 12, fontSize: 10.8 }}>{TECH50[6][2].map(([k, v]) => <span key={k}>{k}: <b>{v}</b></span>)}</p>
          </div>
          <p style={{ margin: 0, fontSize: 10.6, lineHeight: 1.6, background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "10px 12px" }}><b>Notes &amp; Methodology:</b> Measured metrics collected from the demonstrator in a controlled pilot environment. Observed metrics gathered from user sessions and expert reviews. Simulated metrics modeled using historical baselines and capacity planning. View methodology details (as printed). Note: the Performance panel prints the P95 baseline as both 5.94s and 5.12s — transcribed as printed.</p>
        </div>
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
