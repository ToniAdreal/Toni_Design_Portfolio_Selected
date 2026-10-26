import { useState } from "react";
import type { ReactNode } from "react";
import "./tokenta-slides.css";

/**
 * Bespoke rebuilds of the Mengniu deck, each transcribed from the ACTUAL
 * image file. CRITICAL FINDING (pass 5, sha256-verified): the deck has
 * only 20 unique images. Files 21–34 are BYTE-IDENTICAL duplicates:
 *  21=03 Cow Health Model · 22=15 Research Evidence · 23=17 System Map ·
 *  24=09 Health Control Explorations · 25=08 Wireframe Board ·
 *  26=06 Information Architecture · 27=16 Opportunity Statement ·
 *  28=13 Project Snapshot · 29=04 Research-to-Feature Matrix ·
 *  30=01 Sensor Taxonomy · 31=05 User and Task Model ·
 *  32=02 Visual Direction Board · 33=19 Scope Boundary ·
 *  34=11 Cow 0986 overlay. The dispatcher routes each duplicate file to
 *  the same component as its source file.
 * CAPTION <-> IMAGE MISMATCHES (data title -> actual image; captions/data
 * were NOT rewritten): near-total mismatch, like DeepVise §6.1i —
 *  01 Platform Hero View -> "Sensor Taxonomy" (four signal domains)
 *  02 Sensor Taxonomy Map -> "Visual Direction Board"
 *  03 Cow Health Signal Flow -> "Cow Health Model" (six dimensions)
 *  04 Barn Environmental Sensors -> "Research-to-Feature Matrix"
 *  05 Milk Yield Tracking -> "User and Task Model"
 *  06 Data Ingestion Architecture -> "Information Architecture"
 *  07 Executive Dashboard Prototype -> "Primary Interaction Flow"
 *  08 On-site Ethnographic Research -> "Wireframe Board"
 *  09 Farm Manager Persona -> "Health Control Explorations"
 *  10 Veterinarian User Model -> "Minimap and Selection Explorations"
 *  11 Task Analysis: Morning Rounds -> Cow 0986 barn photo with the
 *     hexagonal health overlay (Feed 88 / Water 92 / Space 85 / Rest 93 /
 *     Air 87 / Light 90, "Healthy")
 *  12 Pain Point Affinity Mapping -> "Constraints" (dark slide, 5 cards)
 *  13 Alert Fatigue Study -> "Project Snapshot" (solo ownership, 10 wks)
 *  14 Value Proposition Canvas -> "Why Dairy Cow Health Matters"
 *  15 Platform Sitemap -> "Research Evidence" (3 review articles)
 *  16 Navigation Schema -> "Opportunity Statement" (one HMW question)
 *  17 Barn View Wireframe -> "From Physical Farm to Digital Twin"
 *     end-to-end system map (6 layers)
 *  18 Individual Cow Profile Wireframe -> "Real Farm and Simulated Farm"
 *  19 Alert Triage Wireflow -> "Scope Boundary" (Built vs Proposed)
 *  20 Mobile Companion Layouts -> "Product Goals and Priorities"
 *  21 Design Principles -> duplicate of 03 · 22 Moodboard -> dup of 15 ·
 *  23 Color Palette -> dup of 17 · 24 Typography -> dup of 09 ·
 *  25 Iconography -> dup of 08 · 26 Data Viz Styles -> dup of 06 ·
 *  27 Component Library Preview -> dup of 16 ·
 *  28 Command Center Dashboard -> dup of 13 (Project Snapshot) ·
 *  29 Digital Twin Barn Interface -> dup of 04 ·
 *  30 Comprehensive Cow Diagnostics -> dup of 01 ·
 *  31 Intelligent Alert Center -> dup of 05 ·
 *  32 Mobile Field App -> dup of 02 · 33 System Architecture -> dup of 19 ·
 *  34 Platform Ecosystem Value -> dup of 11.
 *  Because files 28/29/31 do not show the screens their data titles claim,
 *  the file-keyed dispatcher is consulted BEFORE the older title-keyed
 *  ProjectScreens Mengniu components (data-derived Command Center / Barn
 *  Twin / Alert Center), which are therefore superseded for those slots —
 *  same precedent as AurionX file 32 in pass 3.
 * Printed internal inconsistency kept verbatim: file 08's Milking State
 * panel prints donut "128 (12.6%)" and breakdown "Milking 128 (12.8%)".
 * File 15 footer says exact citations "appear in the page caption" — the
 * caption carries none; transcribed as printed, flagged in §6.1k.
 * Design language as printed: white paper, Mengniu green #009A4E (the
 * deck's own printed palette hex, file 02), ink #111111, dark slides
 * near-black #0B0F0C with green #35D07F accents. Inter.
 */

const GREEN = "#009A4E";

function Mn({ n, title, sub, children, label, dark }: { n: string; title: string; sub?: string; children: React.ReactNode; label: string; dark?: boolean }) {
  return <div className={`tks${dark ? " tks--dark" : ""}`} style={dark ? { background: "#0B0F0C" } : { background: "#FDFEFD" }} role="region" aria-label={label}>
    <div className="tks-head"><span><b style={{ color: GREEN }}>◆ MENGNIU</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 34</span><span className="tks-brand" style={{ fontSize: 12 }}>MENGNIU DIGITAL TWIN</span></div>
    <h3 style={{ fontSize: 42 }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
    <div className="tks-foot"><span>Mengniu — Smart Dairy Farming Intelligence Platform</span><span>Transcribed from the printed slide</span></div>
  </div>;
}
function Chips({ items, value, onPick }: { items: string[]; value: number; onPick: (i: number) => void }) {
  return <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group">{items.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === value} onClick={() => onPick(i)}>{s}</button>)}</div>;
}

/* ---------------- 01 — Sensor Taxonomy ---------------- */
const TAX01: Array<[string, Array<[string, string]>]> = [
  ["1 · Animal identity and location", [["RFID (Animal ID)", "PROTOTYPE"], ["Location (Barn/Zone)", "PROTOTYPE"]]],
  ["2 · Movement and behavior", [["Activity", "PROTOTYPE"], ["Acceleration", "PROTOTYPE"], ["Posture", "CONCEPTUAL"]]],
  ["3 · Environment and thermal condition", [["Barn Temperature", "PROTOTYPE"], ["Humidity", "PROTOTYPE"], ["Light", "PROTOTYPE"], ["Thermal Imaging", "CONCEPTUAL"]]],
  ["4 · Biological health", [["Respiration", "CONCEPTUAL"], ["Rumen Signals", "CONCEPTUAL"], ["Temperature (Core)", "CONCEPTUAL"], ["Immunity-related Indicators", "CONCEPTUAL"]]],
];
export function MengniuTaxonomy({ n = "01" }: { n?: string }) {
  const [d, setD] = useState(0);
  return <Mn n={n} title="Sensor Taxonomy" sub="Grouping the signals that inform the digital twin. These sensor signals are organized into four domains to structure how real-world data is captured and interpreted by the Mengniu Digital Twin platform." label="Mengniu sensor taxonomy — interactive rebuild">
    <Chips items={TAX01.map((x) => x[0])} value={d} onPick={setD} />
    <div className="tks-detail" aria-live="polite"><b>{TAX01[d][0]}</b>{TAX01[d][1].map(([s, t]) => <p key={s} style={{ margin: "5px 0 0" }}>{s} — <span className="tks-tag">{t}</span></p>)}
      <p className="tks-kicker" style={{ margin: "8px 0 0" }}>PROTOTYPE = Implemented in current prototype · CONCEPTUAL = Conceptual only (not yet implemented). Taxonomy evolves as new signals and technologies are validated.</p></div>
    <p style={{ margin: "10px 0 0" }}><b>Why it matters:</b> A clear taxonomy ensures consistent data modeling, device selection, and insight generation across the entire dairy ecosystem.</p>
  </Mn>;
}

/* ---------------- 02 — Visual Direction Board ---------------- */
const VIS02: Array<[string, string, string]> = [
  ["01 · Material Realism", "Rooted in the textures of agriculture and production.", "Natural materials and real-world textures build trust and connect users to the physical world. · Subtle depth, soft lighting, and realistic surfaces create a premium, tactile experience. · A calm, neutral base palette allows operational data and key information to stand out."],
  ["02 · Industrial Clarity", "Informed by industrial HMI and SCADA interfaces. Production overview as printed: 2,450 t · 98.6% · 85.7% · 24.5 °C.", "Clear hierarchy, modular layouts, and consistent grid systems support fast comprehension. · Data-first design with strong typography and purposeful use of contrast. · Standardized components and patterns improve learnability and reduce cognitive load."],
  ["03 · Spatial Orientation", "Inspired by spatial software and 3D visualization tools. Printed panel: 牧场A区 · 存栏量 3,620.", "3D perspective and spatial context help users understand complex environments quickly. · Intuitive navigation, orientation cues, and mini-maps support seamless exploration. · Scale hierarchy — from site to equipment — maintains clarity across levels."],
  ["04 · Restrained Alerting", "Guided by best practices in monitoring and alert systems. Alert centre (告警中心, 12): 低温储奶罐液位低 10:24 · UHT 杀菌温度偏高 10:18 · 包装线 2 号设备过载 10:12. System status: 正常 128 · 警告 3 · 严重 1 · 132 设备总数. Cards: 严重告警 温度高于阈值 10:24 · 警告 设备维护提醒 10:18 · 信息 日常巡检完成 10:10.", "Alerts are noticeable but not intrusive — prioritized by severity and relevance. · Color is used sparingly and meaningfully to communicate urgency. · Clear status summaries and trends help users stay informed and in control."],
];
const PRINC02: Array<[string, string]> = [
  ["Clarity First", "Every element has a purpose. We remove noise to highlight what matters."],
  ["Contextual Hierarchy", "Information is organized by importance, location, and user tasks."],
  ["Real-World Connection", "Visuals reflect the physical world to build familiarity and trust for operators."],
  ["Calm & Confident", "A restrained palette and consistent design language create a sense of control."],
  ["Scalable & Consistent", "Modular components and design systems ensure consistency at every scale."],
];
const PAL02: Array<[string, string]> = [["#009A4E", "Green"], ["#111111", "Ink"], ["#333333", "Dark grey"], ["#666666", "Grey"], ["#E6E6E6", "Light grey"], ["#F6F7F5", "Paper"]];
export function MengniuVisualDirection({ n = "02" }: { n?: string }) {
  const [c, setC] = useState(0);
  const [sw, setSw] = useState(0);
  return <Mn n={n} title="Visual Direction Board" sub="The references that shaped the digital twin interface — a curated set of influences and design principles drawn from agriculture, industrial interfaces, spatial software, and monitoring systems, translated into a coherent visual language for clarity, trust, and operational efficiency." label="Mengniu visual direction board — interactive rebuild">
    <Chips items={VIS02.map((x) => x[0])} value={c} onPick={setC} />
    <div className="tks-detail" aria-live="polite"><b>{VIS02[c][1]}</b><p style={{ margin: "5px 0 0" }}>{VIS02[c][2]}</p></div>
    <div className="tks-grid" style={{ marginTop: 10 }}>{PRINC02.map(([t, b]) => <div key={t} className="tks-card"><b style={{ color: GREEN }}>{t}</b><p style={{ margin: "4px 0 0" }}>{b}</p></div>)}</div>
    <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>COLOR PALETTE (as printed) · TYPOGRAPHY — Inter (Bold / Medium / Regular): “Clean, modern, and optimized for data-rich interfaces.”</p>
    <Chips items={PAL02.map((x) => x[0])} value={sw} onPick={setSw} />
    <p aria-live="polite" style={{ margin: "6px 0 0" }}><span style={{ display: "inline-block", width: 14, height: 14, background: PAL02[sw][0], border: "1px solid #ccc", verticalAlign: -2, marginRight: 6 }} />{PAL02[sw][0]} — {PAL02[sw][1]}</p>
  </Mn>;
}

/* ---------------- 03 — Cow Health Model ---------------- */
const HEALTH03: Array<[string, string, string]> = [
  ["Feed", "Nutrition Intake", "Sufficient and balanced nutrition supports energy, immunity and production."],
  ["Water", "Hydration", "Clean, accessible water is essential for metabolism, rumen function and temperature regulation."],
  ["Space", "Living Density", "Appropriate space reduces stress and supports natural behavior and comfort."],
  ["Light", "Illumination", "Proper light intensity and duration help regulate circadian rhythm and hormonal balance."],
  ["Rest", "Lying Behavior", "Adequate rest time promotes recovery, hoof health and milk production."],
  ["Air", "Air Quality", "Fresh, clean air reduces respiratory risk and supports overall well-being."],
];
const WHY03: Array<[string, string]> = [
  ["Why six dimensions?", "Operators don't need more data — they need clearer understanding and faster decisions."],
  ["Easy to Understand", "Six everyday concepts align with how farm teams think and work."],
  ["Focused and Actionable", "Highlights what truly drives health, reducing noise from hundreds of raw variables."],
  ["Model-Driven Insight", "Advanced algorithms convert complex data into reliable dimension scores and an overall state."],
  ["Consistent and Comparable", "Stable framework for herd, farm and region comparisons over time."],
  ["Faster Decisions", "Operators can quickly see what matters most and take timely action."],
];
export function MengniuHealthModel({ n = "03" }: { n?: string }) {
  const [d, setD] = useState(0);
  return <Mn n={n} title="Cow Health Model" sub="A simplified state model for operator understanding. The model represents the cow's health as an overall state influenced by six key dimensions of the living environment. Each dimension is continuously monitored and scored, then combined to form a single, interpretable health state." label="Mengniu cow health model — interactive rebuild">
    <Chips items={HEALTH03.map((x) => x[0])} value={d} onPick={setD} />
    <div className="tks-detail" aria-live="polite"><b>{HEALTH03[d][0]} — {HEALTH03[d][1]}</b><p style={{ margin: "5px 0 0" }}>{HEALTH03[d][2]}</p><p className="tks-kicker" style={{ margin: "8px 0 0" }}>Centre of the printed model: Overall Health · Integrated Health State · <b>Good</b></p></div>
    <div className="tks-grid" style={{ marginTop: 10 }}>{WHY03.map(([t, b]) => <div key={t} className="tks-card"><b style={{ color: GREEN }}>{t}</b><p style={{ margin: "4px 0 0" }}>{b}</p></div>)}</div>
    <p style={{ margin: "10px 0 0" }}><b>Health as a balance</b> — When all six dimensions are in balance, cows perform at their best. <b>Small imbalances, early; big impact, prevented.</b> Legend as printed: Good (Optimal) · Caution (Monitor) · Poor (Action Needed).</p>
  </Mn>;
}

/* ---------------- 04 — Research-to-Feature Matrix ---------------- */
const MATRIX04: Array<[string, string, string, string]> = [
  ["Production dips begin 5–14 days before clinical signs.", "(J. Dairy Sci., 2017)", "Prioritize early detection over reactive alerts.", "Transition Risk Score with 7–14 day forecast and confidence band."],
  ["Negative energy balance and inflammation drive transition disorders.", "(J. Dairy Sci., 2019)", "Combine production, activity, rumination, and temperature signals.", "Health Composite Index blending multiple sensor streams."],
  ["Comfort (stall time, heat stress) improves milk yield and fertility.", "(J. Dairy Sci., 2020)", "Make welfare visible and actionable for daily routines.", "Comfort Dashboard: Stall Occupancy, THI, and Lying Time benchmarks."],
  ["Sensor accuracy varies by placement and animal factors.", "(Comput. Electron. Agric., 2021)", "Calibrate signals and surface data quality indicators.", "Sensor Quality Score and calibration status with placement checks."],
  ["Barn microclimate and ventilation impact productivity.", "(Biosyst. Eng., 2018)", "Link environment data to animal outcomes.", "Environment Panel: Temperature, Humidity, THI, and Ventilation Status."],
  ["Decision support increases adoption when actionable and simple.", "(Prev. Vet. Med., 2021)", "Deliver clear next-best actions with expected impact.", "Action Center with prioritized tasks, impact estimates, and follow-up."],
];
export function MengniuResearchMatrix({ n = "04" }: { n?: string }) {
  const [r, setR] = useState(0);
  return <Mn n={n} title="Research-to-Feature Matrix" sub="How domain research became product decisions." label="Mengniu research-to-feature matrix — interactive rebuild">
    <Chips items={MATRIX04.map((x, i) => `Row ${i + 1}`)} value={r} onPick={setR} />
    <div className="tks-detail" aria-live="polite"><p style={{ margin: 0 }}><span className="tks-kicker">RESEARCH OBSERVATION</span><br /><b>{MATRIX04[r][0]}</b> {MATRIX04[r][1]}</p>
      <p style={{ margin: "8px 0 0" }}><span className="tks-kicker">PRODUCT IMPLICATION</span><br />{MATRIX04[r][2]}</p>
      <p style={{ margin: "8px 0 0" }}><span className="tks-kicker">INTERFACE OR SYSTEM RESPONSE</span><br />{MATRIX04[r][3]}</p></div>
    <p style={{ margin: "10px 0 0" }}>✓ Every product choice in the Mengniu Dairy Digital Twin is grounded in peer-reviewed research and validated on-farm.</p>
  </Mn>;
}

/* ---------------- 05 — User and Task Model ---------------- */
const TASKS05: Array<[string, string]> = [
  ["1 · Understand Barn Status", "Get a real-time overview of the barn environment, equipment, and herd conditions to ensure animals are in a safe and comfortable state."],
  ["2 · Locate an Animal", "Search and quickly find a specific animal within the barn using ID, tag, or visual search to support checks and interventions."],
  ["3 · Inspect Health Conditions", "Review individual animal health data, alerts, and trends to assess wellbeing and identify issues early."],
  ["4 · Observe a Workflow", "Visualize and understand operational workflows (e.g., feeding, milking, cleaning) and monitor execution in real time."],
  ["5 · Understand Data Provenance", "Trace where data comes from, how it is collected, and when it was recorded to ensure trust, transparency, and compliance."],
];
export function MengniuUserTaskModel({ n = "05" }: { n?: string }) {
  const [u, setU] = useState(0);
  const [t, setT] = useState(0);
  return <Mn n={n} title="User and Task Model" sub="Who the prototype supports and what they need to do." label="Mengniu user and task model — interactive rebuild">
    <Chips items={["Primary user", "Secondary viewer"]} value={u} onPick={setU} />
    <div className="tks-detail" aria-live="polite">{u === 0
      ? <><b>Primary user — Farm or Barn Operator</b><p style={{ margin: "5px 0 0" }}>On-site daily user responsible for animal care and barn operations. Uses the prototype to monitor conditions, locate animals, and take action.</p></>
      : <><b>Secondary viewer — Technical Evaluator, Operations Manager, or Animal-Welfare Specialist</b><p style={{ margin: "5px 0 0" }}>Reviews insights, validates data quality and system performance, and supports decision-making across teams.</p></>}</div>
    <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>CORE TASKS</p>
    <Chips items={TASKS05.map((x) => x[0])} value={t} onPick={setT} />
    <div className="tks-detail" aria-live="polite" style={{ marginTop: 8 }}><b>{TASKS05[t][0]}</b><p style={{ margin: "5px 0 0" }}>{TASKS05[t][1]}</p></div>
    <p style={{ margin: "10px 0 0" }}>All tasks are enabled by the Digital Twin to provide <b>accurate, timely, and trustworthy</b> insights for better animal care and operational excellence.</p>
  </Mn>;
}

/* ---------------- 06 — Information Architecture ---------------- */
const IA06: Array<[string, string, string[]]> = [
  ["1 · Barn Overview", "High-level summary of the entire barn and herd status.", ["Herd composition & count", "Key KPIs (health, yield, reproduction, activity)", "Alerts & exceptions", "Trend indicators"]],
  ["2 · Selected Cow", "Detailed profile and real-time status of the selected cow.", ["Cow profile (ID, age, parity)", "Production & lactation data", "Current status & alerts", "Historical trends"]],
  ["3 · Health Dimensions", "Multi-dimensional health assessment and trend analysis.", ["Vital signs & physiology", "Behavior & activity", "Rumination & feeding", "Reproduction & fertility", "Health score & risk prediction"]],
  ["4 · Spatial Overview (Minimap)", "Real-time spatial view of the barn and cow locations.", ["Barn layout & zones", "Cow positioning", "Movement & density", "Environmental conditions by zone"]],
  ["5 · Automated Milking Workflow", "End-to-end view of the automated milking process.", ["Queue & scheduling", "Milking in progress", "Milk yield & quality", "Post-milking checks", "Exceptions & re-routing"]],
  ["6 · Sensor & System Explanation", "Data sources, system logic, and metric explanations.", ["Sensor inventory & status", "Data update frequency", "Metric definitions", "Model logic & thresholds", "System integrations"]],
];
export function MengniuIA({ n = "06" }: { n?: string }) {
  const [s, setS] = useState(0);
  return <Mn n={n} title="Information Architecture" sub="The product structure behind the digital twin. Root as printed: Digital Twin Dashboard — Unified entry point providing real-time insights, navigation, and intelligent alerts." label="Mengniu information architecture — interactive rebuild">
    <Chips items={IA06.map((x) => x[0])} value={s} onPick={setS} />
    <div className="tks-detail" aria-live="polite"><b>{IA06[s][0]}</b><p style={{ margin: "5px 0 0" }}>{IA06[s][1]}</p><ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>{IA06[s][2].map((b) => <li key={b}>{b}</li>)}</ul>
      <p className="tks-kicker" style={{ margin: "8px 0 0" }}>All sections rest on the Unified Data Platform — Aggregates data from all sensors and systems, ensuring consistency, quality, and real-time availability.</p></div>
    <p style={{ margin: "10px 0 0" }}>Real-time — Live data streaming and instant updates · Intelligent Alerts — Anomaly detection and proactive notifications · Role-based Access — Permissions tailored to users and responsibilities · Cross-platform — Responsive experience across web, tablet, and mobile · Secure &amp; Reliable — Enterprise-grade security and data governance.</p>
  </Mn>;
}

/* ---------------- 07 — Primary Interaction Flow ---------------- */
const FLOW07: Array<[string, string, string]> = [
  ["1 · Enter barn", "Barn Overview — 25.4 °C · 60%. Cows 1,256 · In Milk 1,034 · Milking 48 · Alerts 7. Operator enters the 3D barn overview and sees real-time herd distribution and key KPIs.", "Overall herd status, activity at a glance, and any alerts that need attention."],
  ["2 · Select a cow", "Cow 5247 highlighted in the barn. Operator clicks a cow to open its individual profile and focus the digital twin.", "Identity, location, and current status of the selected animal."],
  ["3 · Review position and health dimensions", "Cow 5247 — Health Dimensions: Activity 78 · Rumination 55 · Feed Intake 62 · Milk Yield 31.5 L · Body Condition 3.25 · Heart Rate 64 bpm · Respiration 24 rpm · Temperature 38.6 °C. Location: Zone B · Pen 12. Last updated: 09:42:18.", "The animal's current condition and any deviations from normal ranges."],
  ["4 · Trigger or observe a state", "Health Alert — Elevated Temperature 38.6 °C (↑ 1.2 °C). Suggested actions: Add to Monitoring · Schedule Vet Check · Add Note. Observed at 09:42.", "What the system detected and recommended next steps or interventions."],
  ["5 · Follow the animal through the milking sequence", "Cow 5247 · Milking in Progress — stages: Approach · Identify · Attach · Milking · Complete. Milk Yield 12.4 L · Milking Time 4:32 · Flow Rate 2.6 L/min.", "Milking progress, yield, quality indicators, and process exceptions."],
  ["6 · Return to barn overview", "Barn Overview — Cows 1,256 · In Milk 1,034 · Milking 48 · Alerts 7. Operator returns to the barn overview to continue monitoring the herd.", "Updated herd status and confirmation that the system is running smoothly."],
];
export function MengniuInteractionFlow({ n = "07" }: { n?: string }) {
  const [s, setS] = useState(0);
  return <Mn n={n} title="Primary Interaction Flow" sub="From entering the barn to returning to overview." label="Mengniu primary interaction flow — interactive rebuild">
    <div className="tks-flow" role="group">{FLOW07.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><p style={{ margin: 0 }}>{FLOW07[s][1]}</p><p style={{ margin: "8px 0 0" }}><b>Operator learns:</b> {FLOW07[s][2]}</p></div>
    <p style={{ margin: "10px 0 0" }}>↻ Continuous monitoring cycle for a healthier, more productive herd.</p>
  </Mn>;
}

/* ---------------- 08 — Wireframe Board ---------------- */
const WIRE08: Array<[string, string]> = [
  ["1 · Barn Overview", "Global Summary — KPI cards provide at-a-glance status for quick situational awareness. Total Cows 2,560 · In Milk 1,985 · Milking Now 128 · Health Alerts 23 · Avg. Yield (kg) 32.7. Date 2024-05-20. Environment: Temperature 22.1 °C · Humidity 58% · Ventilation Normal · Ammonia 12 ppm. Recent Alerts: High Temp in Barn 3 10:24 · Cow #0457 Health Alert 09:58 · Low Feed Stock 09:30. Last updated: 10:30:45. — 3D Barn Map (Low-fi): Digital twin layout as the central focus; color/3D details refined in final design. Contextual Panel: Environment and alerts grouped on the side to support monitoring without cluttering the main view."],
  ["2 · Selected-Cow View", "Identity & Status — Key identity and production status at the top for immediate recognition. Cow #0457 · In Milk. Ear Tag 0457 · Group Lactation 2 · Breed Holstein · Age 4.2 yrs · DIM 128 · Weight 650 kg. Health Score: Good. Information Tabs — Summary · Health · Production · Reproduction · History: tabbed grouping to organize multi-domain data without overwhelm. Today: Milk Yield 36.2 kg · Milking Times 2 · Activity Normal · Rumination 520 min · Feed Intake 18.6 kg. Trends (7 Days). Insight Cards — Alerts: Slight drop in rumination 05-20 08:15 · High temp exposure 05-19 14:20. Summary, trends, and alerts help users assess health and performance at a glance."],
  ["3 · Health Control", "Filter Bar — Multi-dimensional filters narrow the list efficiently (Barn · Health Status · Time · Search Cow ID · Export). Status Summary — Total Monitored 2,560 · Normal 2,316 · Attention 198 · Alert 46: health distribution at the top supports fast risk triage. Sortable Table — Cow ID · Health Score · Status · Body Temp (°C) · Rumination (min) · Last Update: 0457 · 82 · Normal · 38.3 · 520 · 10:28 — 0321 · 65 · Attention · 39.1 · 380 · 10:27 — 0189 · 45 · Alert · 40.2 · 210 · 10:26 — 0765 · 78 · Normal · 38.4 · 480 · 10:25 — 0992 · 60 · Attention · 39.0 · 350 · 10:24. Pagination 1–5 … 256. Quick Actions — Primary action (view details) is one click away."],
  ["4 · Minimap", "Barn Minimap — Barn 3 · Legend: Normal · Attention · Alert · Offline. Levels: 1F · 2F. Overlay: Temperature · Humidity · Ventilation · Ammonia. Spatial Orientation — Compact overview for spatial navigation and quick location of attention points."],
  ["5 · Milking State", "Progress Overview — Donut chart + breakdown show current milking status distribution: Milking Now 128 (12.6%) [donut, as printed]. Breakdown as printed: Waiting 42 (4.2%) · Milking 128 (12.8%) · Post-Milking 96 (9.6%) · Idle 734 (73.4%) — the 12.6% / 12.8% pair is inconsistent on the printed slide and is transcribed verbatim. Detail Table — Cow ID · Milking Point · Status · Milk Yield (kg) · Milking Time: 0457 · MP-12 · Milking · 18.6 · 07:24 — 0321 · MP-07 · Post-Milking · 17.2 · 06:58 — 0189 · MP-03 · Milking · 16.8 · 07:10 — 0765 · MP-15 · Waiting · – · –. Operational Focus — High-frequency information prioritized for quick decisions."],
];
export function MengniuWireframes({ n = "08" }: { n?: string }) {
  const [p, setP] = useState(0);
  return <Mn n={n} title="Wireframe Board" sub="Retrospective reconstruction from the working prototype. Low-fidelity wireframes capturing the core layout, information hierarchy, and interaction patterns of the Mengniu Dairy Digital Twin platform." label="Mengniu wireframe board — interactive rebuild">
    <Chips items={WIRE08.map((x) => x[0])} value={p} onPick={setP} />
    <div className="tks-detail" aria-live="polite"><b>{WIRE08[p][0]}</b><p style={{ margin: "5px 0 0" }}>{WIRE08[p][1]}</p></div>
    <p style={{ margin: "10px 0 0" }}><b>Hierarchy</b> — Clear visual hierarchy guides attention from summary → detail → action. · <b>Input Behavior</b> — Filters and controls are explicit and predictable; changes update views in context. · <b>Information Grouping</b> — Related data is grouped in cards or sections to reduce cognitive load. · <b>Interaction Priorities</b> — Primary actions are prominent; secondary actions are accessible but unobtrusive. · <b>Note</b> — This board reflects structure, hierarchy, and flow only. Visual style, color, and final components are refined in the high-fidelity design.</p>
  </Mn>;
}

/* ---------------- 09 — Health Control Explorations ---------------- */
const DIMS09: Array<[string, number]> = [["Nutrition", 92], ["Activity", 88], ["Reproduction", 91], ["Environment", 85], ["Immune", 87], ["Digestion", 90]];
const OPT09: Array<[string, string, string, string]> = [
  ["Option 1 · Radial Layout", "Six dimensions arranged radially around the cow.", "✓ Balanced and intuitive.", "✕ Labels at top/bottom are farther from focus; less ideal in 3D perspective."],
  ["Option 2 · Ring Layout", "Six dimensions placed on a continuous ring surrounding the cow.", "✓ Clean circular balance and good visibility.", "✕ Requires more circular space; ring can feel heavy in dense 3D scenes."],
  ["Option 3 · Stacked Cluster", "Six dimensions grouped in a vertical stack beside the cow.", "✓ Compact and information-dense.", "✕ Requires eye movement from cow to panels; less integrated with the central focus."],
  ["Final · Hexagonal Model (Selected)", "Six dimensions positioned on a hexagon around the cow.", "✓ Why hexagonal? The hexagonal model provides the best balance of clarity, symmetry, and spatial efficiency. It keeps all six dimensions equidistant from the cow, creates a stable visual structure, and fits naturally within a 3D environment — enabling quick interpretation at a glance.", ""],
];
export function MengniuHealthExplorations({ n = "09" }: { n?: string }) {
  const [o, setO] = useState(3);
  return <Mn n={n} title="Health Control Explorations" sub="Exploring how to present six health dimensions. Goal as printed: present the cow's overall health state and six key dimensions in a way that is clear, balanced, and instantly interpretable within a 3D digital twin environment." label="Mengniu health control explorations — interactive rebuild">
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} role="group" aria-label="Dimension scores as printed">{DIMS09.map(([t, v]) => <span key={t} className="tks-card" style={{ padding: "6px 10px" }}>{t} <b>{v}</b></span>)}</div>
    <div style={{ marginTop: 10 }}><Chips items={OPT09.map((x) => x[0])} value={o} onPick={setO} /></div>
    <div className="tks-detail" aria-live="polite"><b>{OPT09[o][0]}</b><p style={{ margin: "5px 0 0" }}>{OPT09[o][1]}</p><p style={{ margin: "5px 0 0" }}>{OPT09[o][2]}</p>{OPT09[o][3] ? <p style={{ margin: "5px 0 0" }}>{OPT09[o][3]}</p> : null}</div>
    <p className="tks-kicker" style={{ margin: "10px 0 0" }}>EXPLORATION PRINCIPLES — Cow at the Center · Six Dimensions · Instant Readability · 3D Spatial Fit · Visual Balance</p>
  </Mn>;
}

/* ---------------- 10 — Minimap and Selection Explorations ---------------- */
const MAP10: Array<[string, string, string, string]> = [
  ["1 · Simplified Top-Down Map", "A clean floorplan view of the barn with cow positions as dots.", "＋ Easy to scan, lightweight", "－ Limited spatial richness and context"],
  ["2 · Zone-Based Grid", "Barn divided into zones for quicker navigation and filtering. (Printed grid: zones A–I, zone E selected · 128.)", "＋ Scalable for very large barns", "－ Less precise location within zone"],
  ["3 · Thumbnail 3D Overview", "Small 3D isometric overview of the barn with cow markers.", "＋ Rich spatial context and orientation", "－ More visual complexity"],
];
export function MengniuMinimapExplorations({ n = "10" }: { n?: string }) {
  const [a, setA] = useState(0);
  const [step, setStep] = useState(0);
  const WF = [["1 · Scan Overview", "Use the minimap to scan the barn and identify the area."], ["2 · Select Cow", "Click a cow to view details and jump to the 3D camera."], ["3 · Focus in 3D", "The main view moves to the selected cow for action."]] as const;
  return <Mn n={n} title="Minimap and Selection Explorations" sub="Helping operators locate cows in a large 3D barn." label="Mengniu minimap explorations — interactive rebuild">
    <Chips items={MAP10.map((x) => x[0])} value={a} onPick={setA} />
    <div className="tks-detail" aria-live="polite"><b>{MAP10[a][0]}</b><p style={{ margin: "5px 0 0" }}>{MAP10[a][1]}</p><p style={{ margin: "5px 0 0" }}>{MAP10[a][2]} · {MAP10[a][3]}</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}><b>Final minimap treatment</b> — Cow <b>#8127</b> · Lactating · Pen E-2 · 15 min ago. Floors as printed: 3F · 2F · 1F · B1. Legend: Cow · Selected Cow · Structure · Selected Zone (E). <b>Global context</b> — The minimap shows the entire barn at a glance, helping operators understand overall distribution and quickly locate areas of interest. <b>Local context</b> — Selecting a cow reveals key details and links to the 3D camera view. The selected cow is clearly highlighted to maintain orientation within the barn.</div>
    <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>OPERATOR WORKFLOW — From overview to focus in three seamless steps</p>
    <Chips items={WF.map((x) => x[0])} value={step} onPick={setStep} />
    <div className="tks-detail" aria-live="polite" style={{ marginTop: 8 }}><b>{WF[step][0]}</b><p style={{ margin: "5px 0 0" }}>{WF[step][1]}</p></div>
    <p style={{ margin: "10px 0 0" }}>The final treatment balances clarity and context — empowering operators to locate any cow in seconds, even in the largest barns.</p>
  </Mn>;
}

/* ---------------- 11 — Cow 0986 hexagonal overlay (photographic slide, represented structurally) ---------------- */
const HEX11: Array<[string, string]> = [["Feed", "88%"], ["Water", "92%"], ["Space", "85%"], ["Rest", "93%"], ["Air", "87%"], ["Light", "90%"]];
export function MengniuCowOverlay({ n = "11" }: { n?: string }) {
  const [d, setD] = useState(0);
  return <Mn n={n} title="Cow 0986 — Hexagonal Health Overlay" sub="Photographic barn slide, represented structurally (no photo is reproduced): cow 0986 in the barn aisle, ear tags and collar tag printed “0986 · Healthy”, barn lane signs 03 · 04 · 05 Feed Lane. The hexagonal overlay from the selected health model (file 09) is applied live over the animal." label="Mengniu cow 0986 overlay — interactive rebuild" dark>
    <Chips items={HEX11.map((x) => x[0])} value={d} onPick={setD} />
    <div className="tks-detail" aria-live="polite"><b>{HEX11[d][0]} — {HEX11[d][1]}</b><p style={{ margin: "5px 0 0" }}>Centre of the printed overlay: <b>0986 · Healthy</b>. All six printed scores: Feed 88% · Water 92% · Space 85% · Rest 93% · Air 87% · Light 90%.</p></div>
  </Mn>;
}

/* ---------------- 12 — Constraints ---------------- */
const CONS12: Array<[string, string]> = [
  ["Limited access to production users and live farm systems", "Restricted access for observation, testing, and user validation."],
  ["Complex biological and operational domain", "High domain complexity requires careful research and validation."],
  ["Need to communicate to both technical and non-technical reviewers", "Deliver clear, relevant insights across diverse audiences."],
  ["Solo ownership across design and engineering", "End-to-end responsibility from discovery to delivery."],
  ["Need to produce a working prototype and a final presentation within the project period", "Tight timeline requires strong prioritization and execution."],
];
export function MengniuConstraints({ n = "12" }: { n?: string }) {
  const [c, setC] = useState(0);
  return <Mn n={n} title="Constraints" label="Mengniu constraints — interactive rebuild" dark>
    <Chips items={CONS12.map((_, i) => `Constraint ${i + 1}`)} value={c} onPick={setC} />
    <div className="tks-detail" aria-live="polite"><b>{CONS12[c][0]}</b><p style={{ margin: "5px 0 0" }}>{CONS12[c][1]}</p></div>
  </Mn>;
}

/* ---------------- 13 — Project Snapshot ---------------- */
const JOURNEY13 = ["01 Research", "02 Product Definition", "03 UX", "04 UI", "05 3D World", "06 Interaction Logic", "07 Technical Architecture", "08 Prototype Build", "09 Motion", "10 Final Presentation"];
export function MengniuSnapshot({ n = "13" }: { n?: string }) {
  const [s, setS] = useState(0);
  return <Mn n={n} title="Project Snapshot" sub="End-to-end solo ownership of a dairy farm digital twin prototype." label="Mengniu project snapshot — interactive rebuild">
    <p className="tks-kicker" style={{ margin: "0 0 4px" }}>SOLO OWNERSHIP JOURNEY — every stage printed “Personally owned”</p>
    <Chips items={JOURNEY13} value={s} onPick={setS} />
    <div className="tks-detail" aria-live="polite"><b>{JOURNEY13[s]}</b> — Personally owned ✓</div>
    <div className="tks-grid" style={{ marginTop: 10 }}>
      <div className="tks-card"><b>The Challenge</b><p style={{ margin: "4px 0 0" }}>Design and build a realistic, interactive digital twin of a modern dairy farm to visualize operations, monitor animal well-being, and support data-driven decision-making.</p></div>
      <div className="tks-card"><b>The Outcome</b><p style={{ margin: "4px 0 0" }}>An immersive prototype that unifies real-time data, 3D visualization, and intelligent interactions — helping stakeholders explore insights and improve farm efficiency.</p></div>
      <div className="tks-card"><b>Role</b><p style={{ margin: "4px 0 0" }}>Product Designer &amp; Developer (End-to-end). Solo-owned across research, design, development and delivery.</p></div>
      <div className="tks-card"><b>Timeline</b><p style={{ margin: "4px 0 0" }}>10 Weeks — Jan 2024 – Mar 2024.</p><b>Product Status</b><p style={{ margin: "4px 0 0" }}>Prototype Phase. Presented to leadership and operations teams.</p></div>
      <div className="tks-card"><b>Technical Stack Summary</b><p style={{ margin: "4px 0 0" }}>Unity · C# · Blazor · .NET · SQL Server · InfluxDB · WebGL · Three.js · Figma · Adobe After Effects.</p></div>
      <div className="tks-card"><b>Separate research or business contributions, if any</b><p style={{ margin: "4px 0 0" }}>Dairy operations team — Provided domain insights · Data engineering team — Supplied data samples · Infrastructure team — Provided edge devices · Stakeholders — Reviewed &amp; validated.</p></div>
    </div>
  </Mn>;
}

/* ---------------- 14 — Why Dairy Cow Health Matters ---------------- */
const WHY14: Array<[string, string]> = [
  ["Cow Health", "Healthy animals are the foundation of stable farm performance."],
  ["Farm Operations", "Operator decisions depend on timely, interpretable barn signals."],
  ["Milk Quality", "Consistent welfare and process control support more reliable milk outcomes."],
];
export function MengniuWhyHealth({ n = "14" }: { n?: string }) {
  const [s, setS] = useState(0);
  return <Mn n={n} title="Why Dairy Cow Health Matters" sub="Welfare, operations, and milk quality are tightly connected." label="Mengniu why cow health matters — interactive rebuild">
    <div className="tks-flow" role="group">{WHY14.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{WHY14[s][0]}</b><p style={{ margin: "5px 0 0" }}>{WHY14[s][1]}</p></div>
  </Mn>;
}

/* ---------------- 15 — Research Evidence ---------------- */
const RES15: Array<[string, string]> = [
  ["Advances in dairy productivity: nutrition, management, and precision approaches", "Dairy productivity is influenced by an integrated combination of genetics, nutrition, housing, health management, and data-driven decision systems. Precision technologies and targeted interventions can support more efficient and sustainable milk production. KEY TAKEAWAYS — Nutritional strategies and precise feeding improve output and resource efficiency. · Monitoring and data analytics enable timely decisions to enhance herd performance. · Health management and biosecurity reduce losses and support consistent productivity. (Archived research excerpt, as printed.)"],
  ["Improving transition health in dairy cows: insights and interventions", "The transition period is critical for cow health and performance. Evidence-based management of nutrition, environment, and monitoring can reduce disease risk and support a smoother transition. (Archived research excerpt, as printed.)"],
  ["Animal welfare and cow longevity: foundations for sustainable dairying", "Positive animal welfare is closely linked to lower stress, better health outcomes, and greater cow longevity. Management practices that prioritize comfort, behavior, and health contribute to long-term herd sustainability. (Archived research excerpt, as printed.)"],
];
export function MengniuResearchEvidence({ n = "15" }: { n?: string }) {
  const [a, setA] = useState(0);
  return <Mn n={n} title="Research Evidence" label="Mengniu research evidence — interactive rebuild" dark>
    <Chips items={["Review article 1", "Review article 2", "Review article 3"]} value={a} onPick={setA} />
    <div className="tks-detail" aria-live="polite"><span className="tks-kicker">RESEARCH SOURCE · REVIEW ARTICLE</span><b style={{ display: "block", marginTop: 4 }}>{RES15[a][0]}</b><p style={{ margin: "5px 0 0" }}>{RES15[a][1]}</p></div>
    <p style={{ margin: "10px 0 0" }}>This collage summarizes archived research themes related to dairy productivity, transition health, animal welfare, and cow longevity. Exact citations and full references appear in the page caption. <span className="tks-kicker">(Printed footer, transcribed as printed — the shell caption for this slot carries no citations; see BUILD_NOTES §6.1k.)</span></p>
  </Mn>;
}

/* ---------------- 16 — Opportunity Statement ---------------- */
export function MengniuOpportunity({ n = "16" }: { n?: string }) {
  const CLAUSES = ["the condition of an animal", "the state of the barn", "disconnected sensor systems"] as const;
  const [c, setC] = useState(0);
  return <Mn n={n} title="Opportunity Statement" label="Mengniu opportunity statement — interactive rebuild">
    <p style={{ fontSize: "clamp(20px,3.2vw,32px)", lineHeight: 1.25, margin: "6px 0" }}>How might a farm operator understand <b style={{ color: c === 0 ? GREEN : undefined }}>{CLAUSES[0]}</b> and <b style={{ color: c === 1 ? GREEN : undefined }}>{CLAUSES[1]}</b> without reading <b style={{ color: c === 2 ? GREEN : undefined }}>{CLAUSES[2]}</b>?</p>
    <Chips items={[...CLAUSES]} value={c} onPick={setC} />
    <p className="tks-kicker" style={{ margin: "10px 0 0" }}>The printed slide is this single statement on a cream page — nothing else is printed on it.</p>
  </Mn>;
}

/* ---------------- 17 — From Physical Farm to Digital Twin (system map) ---------------- */
const LAYERS17: Array<[string, string, string]> = [
  ["Physical Layer — The real farm", "Cow · Barn · Feeding Area · Milking Equipment · Environmental Conditions.", ""],
  ["Sensing Layer — Collect real-time signals", "Wearables · Thermal Imaging · RFID · Acceleration · Respiration · Rumen / Biological Signals.", ""],
  ["Data Layer — Turn signals into trusted data", "Ingestion — Secure data collection from all sources → Validation — Quality checks & anomaly detection → Normalization — Standardize & align multi-source data → State Estimation — Estimate animal & environment states in real time.", ""],
  ["Product Layer — Digital twin applications", "Barn Overview — Real-time overview of herd, environment & operations · Selected-Cow Detail — Individual health, behavior, production & history · Health Alerts — Early warnings & risk notifications (printed panel: High Temp. Alert · Cow 0986 · 10:24 — Low Rumination · Cow 0741 · 09:58 — High Respiration · Cow 1125 · 09:41) · Workflow Simulation — Test scenarios & optimize operations.", ""],
  ["Learning Layer — Models that continuously improve", "Local Farm Models — Learn from local data, preserve data privacy · Privacy-Preserving Model Updates · Federated Aggregation — Improve global models across farms.", ""],
  ["Action Layer — Intelligent decisions that drive outcomes", "Nutrition — Optimize rations & feeding strategies · Welfare — Improve comfort, reduce stress · Maintenance — Predict issues, reduce downtime · Operational Decisions — Data-driven planning & continuous improvement.", ""],
];
export function MengniuSystemMap({ n = "17" }: { n?: string }) {
  const [l, setL] = useState(0);
  return <Mn n={n} title="From Physical Farm to Digital Twin" sub="End-to-end system map." label="Mengniu system map — interactive rebuild">
    <Chips items={LAYERS17.map((x) => x[0].split(" — ")[0])} value={l} onPick={setL} />
    <div className="tks-detail" aria-live="polite"><b>{LAYERS17[l][0]}</b><p style={{ margin: "5px 0 0" }}>{LAYERS17[l][1]}</p></div>
  </Mn>;
}

/* ---------------- 18 — Real Farm and Simulated Farm ---------------- */
export function MengniuRealVsSim({ n = "18" }: { n?: string }) {
  const [v, setV] = useState(0);
  return <Mn n={n} title="Real Farm and Simulated Farm" label="Mengniu real vs simulated farm — interactive rebuild" dark>
    <Chips items={["A · Real environment reference", "B · Simulated digital twin"]} value={v} onPick={setV} />
    <div className="tks-detail" aria-live="polite"><b>{v === 0 ? "A — Real environment reference" : "B — Simulated digital twin"}</b><p style={{ margin: "5px 0 0" }}>Photographic barn panel, represented structurally (no photo is reproduced): the same barn aisle, lanes 03 · 04 · 05 Feed Lane and the Mengniu milking installation at the far end.</p></div>
    <p style={{ margin: "10px 0 0" }}>The simulated digital twin preserves the spatial logic and workflow of the real barn while abstracting detail for interaction and simulation.</p>
  </Mn>;
}

/* ---------------- 19 — Scope Boundary ---------------- */
const BUILT19 = ["Simulated 3D barn environment", "Cow-level selection and focus", "Six-dimension health interface", "Minimap or barn overview", "Multi-stage milking workflow", "Demonstrative interaction logic"];
const PROPOSED19 = ["Live sensor ingestion", "Cross-farm data integration", "Federated-learning deployment", "Production validation", "Operator rollout"];
export function MengniuScope({ n = "19" }: { n?: string }) {
  const [s, setS] = useState(0);
  const list = s === 0 ? BUILT19 : PROPOSED19;
  return <Mn n={n} title="Scope Boundary" label="Mengniu scope boundary — interactive rebuild" dark>
    <Chips items={["Built in the Prototype", "Proposed Integration"]} value={s} onPick={setS} />
    <div className="tks-detail" aria-live="polite"><b>{s === 0 ? "Built in the Prototype" : "Proposed Integration"}</b><ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>{list.map((x) => <li key={x}>{x}</li>)}</ul></div>
  </Mn>;
}

/* ---------------- 20 — Product Goals and Priorities ---------------- */
const GOALS20 = ["Immediate spatial understanding", "Cow-level selection", "Visible health-state changes", "End-to-end milking demonstration", "A path from sensor input to interpretable action", "Clear separation between local data and shared learning"];
export function MengniuGoals({ n = "20" }: { n?: string }) {
  const [g, setG] = useState(0);
  return <Mn n={n} title="Product Goals and Priorities" label="Mengniu product goals — interactive rebuild" dark>
    <div className="tks-grid" role="group">{GOALS20.map((t, i) => <button key={t} type="button" className="tks-card" aria-pressed={i === g} onClick={() => setG(i)} style={{ textAlign: "left", cursor: "pointer" }}><b style={{ color: "#35D07F" }}>{String(i + 1).padStart(2, "0")}</b><p style={{ margin: "4px 0 0" }}>{t}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite" style={{ marginTop: 10 }}><b>Selected goal {g + 1} of 6</b><p style={{ margin: "5px 0 0" }}>{GOALS20[g]} — printed as a goal card over the barn photograph (represented structurally; no photo is reproduced).</p></div>
  </Mn>;
}

/* ---------------- Dispatcher (file-keyed; duplicates route to their source slide) ---------------- */
export function mengniuChapterFor(file: string): ReactNode | null {
  const m = file.match(/Mengniu_(\d+)/);
  if (!m) return null;
  const num = m[1];
  const n = num;
  switch (num) {
    case "01": return <MengniuTaxonomy n={n} />;
    case "02": return <MengniuVisualDirection n={n} />;
    case "03": case "21": return <MengniuHealthModel n={n} />;
    case "04": case "29": return <MengniuResearchMatrix n={n} />;
    case "05": case "31": return <MengniuUserTaskModel n={n} />;
    case "06": case "26": return <MengniuIA n={n} />;
    case "07": return <MengniuInteractionFlow n={n} />;
    case "08": case "25": return <MengniuWireframes n={n} />;
    case "09": case "24": return <MengniuHealthExplorations n={n} />;
    case "10": return <MengniuMinimapExplorations n={n} />;
    case "11": case "34": return <MengniuCowOverlay n={n} />;
    case "12": return <MengniuConstraints n={n} />;
    case "13": case "28": return <MengniuSnapshot n={n} />;
    case "14": return <MengniuWhyHealth n={n} />;
    case "15": case "22": return <MengniuResearchEvidence n={n} />;
    case "16": case "27": return <MengniuOpportunity n={n} />;
    case "17": case "23": return <MengniuSystemMap n={n} />;
    case "18": return <MengniuRealVsSim n={n} />;
    case "19": case "33": return <MengniuScope n={n} />;
    case "20": return <MengniuGoals n={n} />;
    case "30": return <MengniuTaxonomy n={n} />;
    case "32": return <MengniuVisualDirection n={n} />;
    default: return null;
  }
}
