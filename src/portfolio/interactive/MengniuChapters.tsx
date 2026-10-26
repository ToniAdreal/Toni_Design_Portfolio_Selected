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
 *  the same component as its source file AND passes the SOURCE file's
 *  number as `n`, so the shell counter always reads the screen's
 *  position in the 20-screen sequence (pass 2 fix).
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
 * Pass 2: every screen renders ALL printed content simultaneously in the
 * printed layout (selection = highlight only); centred titles where the
 * originals centre them; green fills restored; the shell counter reads
 * "N of 20" (the deduped sequence), never "of 34".
 */

const GREEN = "#009A4E";
const BLUE = "#2456C8";

function Mn({ n, title, sub, children, label, dark, center, cream, rule }: { n: string; title: ReactNode; sub?: ReactNode; children: React.ReactNode; label: string; dark?: boolean; center?: boolean; cream?: boolean; rule?: boolean }) {
  return <div className={`tks${dark ? " tks--dark" : ""}`} style={dark ? { background: "#0B0F0C" } : { background: cream ? "#FAF6EC" : "#FDFEFD" }} role="region" aria-label={label}>
    <div className="tks-head"><span><b style={{ color: GREEN }}>◆ MENGNIU</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 20</span><span className="tks-brand" style={{ fontSize: 12 }}>MENGNIU DIGITAL TWIN</span></div>
    {title ? <h3 style={{ fontSize: 42, textAlign: center ? "center" : undefined }}>{title}</h3> : null}
    {sub ? <p className="tks-lede" style={center ? { textAlign: "center", marginInline: "auto" } : undefined}>{sub}</p> : null}
    {rule ? <span aria-hidden="true" style={{ display: "block", width: 56, height: 3.5, background: GREEN, borderRadius: 2, margin: center ? "2px auto 12px" : "2px 0 12px" }} /> : null}
    {children}
    <div className="tks-foot"><span>Mengniu — Smart Dairy Farming Intelligence Platform</span><span>Transcribed from the printed slide</span></div>
  </div>;
}

/* ---------------- 01 — Sensor Taxonomy ---------------- */
const TAX01: Array<[string, string, Array<[string, string]>]> = [
  ["1", "Animal identity and location", [["RFID (Animal ID)", "PROTOTYPE"], ["Location (Barn/Zone)", "PROTOTYPE"]]],
  ["2", "Movement and behavior", [["Activity", "PROTOTYPE"], ["Acceleration", "PROTOTYPE"], ["Posture", "CONCEPTUAL"]]],
  ["3", "Environment and thermal condition", [["Barn Temperature", "PROTOTYPE"], ["Humidity", "PROTOTYPE"], ["Light", "PROTOTYPE"], ["Thermal Imaging", "CONCEPTUAL"]]],
  ["4", "Biological health", [["Respiration", "CONCEPTUAL"], ["Rumen Signals", "CONCEPTUAL"], ["Temperature (Core)", "CONCEPTUAL"], ["Immunity-related Indicators", "CONCEPTUAL"]]],
];
const pill01 = (t: string) => t === "PROTOTYPE"
  ? <span style={{ background: BLUE, color: "#fff", borderRadius: 999, padding: "0 7px", fontSize: 8.6, fontWeight: 800, flex: "none" }}>PROTOTYPE</span>
  : <span style={{ border: "1.5px dashed #8a93a0", color: "#5b6470", borderRadius: 999, padding: "0 7px", fontSize: 8.6, fontWeight: 800, flex: "none" }}>CONCEPTUAL</span>;
export function MengniuTaxonomy({ n = "01" }: { n?: string }) {
  const [sel, setSel] = useState<[number, number]>([0, 0]);
  const illus = ["🐄📍", "🐄〰", "🏠🌡", "❤🛡"];
  return <Mn n={n} title="Sensor Taxonomy" sub="Grouping the signals that inform the digital twin." label="Mengniu sensor taxonomy — interactive rebuild" rule>
    <p style={{ margin: "0 0 10px auto", maxWidth: 430, fontSize: 11.3, lineHeight: 1.6, color: "#4a5462" }}>🧊 These sensor signals are organized into four domains to structure how real-world data is captured and interpreted by the Mengniu Digital Twin platform.</p>
    <div aria-hidden="true" style={{ borderTop: "2px dashed #b9cdc2", margin: "0 30px", position: "relative", height: 10 }}><span style={{ position: "absolute", left: "50%", top: -10, borderLeft: "2px dashed #b9cdc2", height: 10 }} /></div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, alignItems: "start" }}>
      {TAX01.map(([num, name, signals], di) => <div key={name} style={{ background: "#fff", border: "1px solid #e2e8e2", borderRadius: 12, padding: "10px 11px" }}>
        <span style={{ display: "flex", gap: 7, alignItems: "center" }}><span style={{ width: 23, height: 23, borderRadius: "50%", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 12, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{num}</span><b style={{ fontSize: 12.3, lineHeight: 1.3 }}>{name}</b></span>
        <p aria-hidden="true" style={{ fontSize: 21, textAlign: "center", margin: "8px 0 4px" }}>{illus[di]}</p>
        <div style={{ display: "grid", gap: 4 }}>
          {signals.map(([s, t], si) => <button key={s} type="button" onClick={() => setSel([di, si])} aria-pressed={sel[0] === di && sel[1] === si} style={{ display: "flex", justifyContent: "space-between", gap: 6, alignItems: "center", textAlign: "left", background: sel[0] === di && sel[1] === si ? "#eef7f1" : "#fafcfa", border: `1px solid ${sel[0] === di && sel[1] === si ? GREEN : "#e6ece6"}`, borderRadius: 8, padding: "5px 8px", cursor: "pointer", font: "inherit", fontSize: 10.6, color: "#141a21" }}>{s}{pill01(t)}</button>)}
        </div>
      </div>)}
    </div>
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", borderTop: "1px solid #e2e8e2", marginTop: 11, paddingTop: 9, fontSize: 10.6 }}>
      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>{pill01("PROTOTYPE")} Implemented in current prototype</span>
      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>{pill01("CONCEPTUAL")} Conceptual only (not yet implemented)</span>
      <span style={{ color: "#5b6470" }}>ⓘ Taxonomy evolves as new signals and technologies are validated.</span>
    </div>
    <p style={{ margin: "9px 0 0" }}><b>Why it matters:</b> A clear taxonomy ensures consistent data modeling, device selection, and insight generation across the entire dairy ecosystem.</p>
  </Mn>;
}

/* ---------------- 02 — Visual Direction Board ---------------- */
const VIS02: Array<[string, string, string, string[]]> = [
  ["01", "Material Realism", "Rooted in the textures of agriculture and production.", ["Natural materials and real-world textures build trust and connect users to the physical world.", "Subtle depth, soft lighting, and realistic surfaces create a premium, tactile experience.", "A calm, neutral base palette allows operational data and key information to stand out."]],
  ["02", "Industrial Clarity", "Informed by industrial HMI and SCADA interfaces. Production overview as printed: 2,450 t · 98.6% · 85.7% · 24.5 °C.", ["Clear hierarchy, modular layouts, and consistent grid systems support fast comprehension.", "Data-first design with strong typography and purposeful use of contrast.", "Standardized components and patterns improve learnability and reduce cognitive load."]],
  ["03", "Spatial Orientation", "Inspired by spatial software and 3D visualization tools. Printed panel: 牧场A区 · 存栏量 3,620.", ["3D perspective and spatial context help users understand complex environments quickly.", "Intuitive navigation, orientation cues, and mini-maps support seamless exploration.", "Scale hierarchy — from site to equipment — maintains clarity across levels."]],
  ["04", "Restrained Alerting", "Guided by best practices in monitoring and alert systems. Alert centre (告警中心, 12): 低温储奶罐液位低 10:24 · UHT 杀菌温度偏高 10:18 · 包装线 2 号设备过载 10:12. System status: 正常 128 · 警告 3 · 严重 1 · 132 设备总数. Cards: 严重告警 温度高于阈值 10:24 · 警告 设备维护提醒 10:18 · 信息 日常巡检完成 10:10.", ["Alerts are noticeable but not intrusive — prioritized by severity and relevance.", "Color is used sparingly and meaningfully to communicate urgency.", "Clear status summaries and trends help users stay informed and in control."]],
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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 9, alignItems: "start" }}>
      {VIS02.map(([num, name, strap, bullets], i) => <button key={name} type="button" onClick={() => setC(i)} aria-pressed={i === c} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === c ? GREEN : "#e2e8e2"}`, borderRadius: 12, padding: 0, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span aria-hidden="true" style={{ display: "block", height: 64, background: `linear-gradient(135deg, ${["#7a5c3d", "#33566b", "#4a6741", "#6b3333"][i]}, #141a21)`, color: "#ffffffcc", fontSize: 19, padding: "8px 10px" }}>{["🌾", "🏭", "🧭", "🔔"][i]}</span>
        <span style={{ display: "block", padding: "8px 11px" }}>
          <b style={{ display: "block", fontSize: 11.8, letterSpacing: "0.04em" }}><span style={{ color: GREEN }}>{num}</span> {name.toUpperCase()}</b>
          <span style={{ display: "block", fontSize: 10.2, lineHeight: 1.55, color: "#4a5462", margin: "4px 0 6px" }}>{strap}</span>
          <ul style={{ margin: 0, paddingLeft: 13, fontSize: 10.2, lineHeight: 1.55 }}>{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </span>
      </button>)}
    </div>
    <div style={{ display: "flex", marginTop: 10, border: "1px solid #e2e8e2", borderRadius: 11, overflow: "hidden" }}>
      <span style={{ background: GREEN, color: "#fff", padding: "9px 12px", fontSize: 10.5, fontWeight: 800, letterSpacing: "0.06em", display: "flex", alignItems: "center" }}>VISUAL DESIGN PRINCIPLES</span>
      {PRINC02.map(([t, b], i) => <span key={t} style={{ flex: 1, padding: "8px 10px", borderLeft: "1px solid #e2e8e2", background: "#fff" }}><b style={{ display: "block", fontSize: 10.8 }}>{["✦", "▤", "🌍", "◐", "▦"][i]} {t}</b><span style={{ fontSize: 9.6, lineHeight: 1.5, color: "#4a5462" }}>{b}</span></span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 10, marginTop: 10, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Color Palette (as printed)</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6 }}>
          {PAL02.map(([hex, name], i) => <button key={hex} type="button" onClick={() => setSw(i)} aria-pressed={i === sw} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit", textAlign: "left" }}>
            <span style={{ display: "block", height: 30, borderRadius: 6, background: hex, border: `2px solid ${i === sw ? GREEN : "#d8dcd8"}` }} />
            <span style={{ display: "block", fontSize: 9.6, marginTop: 3 }}><b>{hex}</b><br /><span style={{ color: "#5b6470" }}>{name}</span></span>
          </button>)}
        </div>
      </div>
      <div style={{ background: "#fff", border: "1px solid #e2e8e2", borderRadius: 11, padding: "9px 12px" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Typography — Inter</p>
        <p style={{ margin: 0, display: "flex", gap: 12, alignItems: "baseline" }}><span style={{ fontSize: 30, fontWeight: 800 }}>Aa</span><span style={{ fontWeight: 700 }}>Bold</span><span style={{ fontWeight: 500 }}>Medium</span><span>Regular</span></p>
        <p style={{ margin: "4px 0 0", fontSize: 10.6, fontStyle: "italic", color: "#4a5462" }}>“Clean, modern, and optimized for data-rich interfaces.”</p>
      </div>
    </div>
  </Mn>;
}

/* ---------------- 03 — Cow Health Model ---------------- */
const HEALTH03: Array<[string, string, string, string]> = [
  ["Feed", "Nutrition Intake", "Sufficient and balanced nutrition supports energy, immunity and production.", "🍽"],
  ["Water", "Hydration", "Clean, accessible water is essential for metabolism, rumen function and temperature regulation.", "💧"],
  ["Space", "Living Density", "Appropriate space reduces stress and supports natural behavior and comfort.", "▦"],
  ["Light", "Illumination", "Proper light intensity and duration help regulate circadian rhythm and hormonal balance.", "☀"],
  ["Rest", "Lying Behavior", "Adequate rest time promotes recovery, hoof health and milk production.", "☾"],
  ["Air", "Air Quality", "Fresh, clean air reduces respiratory risk and supports overall well-being.", "≋"],
];
const WHY03: Array<[string, string, string]> = [
  ["◉", "Why six dimensions?", "Operators don't need more data — they need clearer understanding and faster decisions."],
  ["◎", "Easy to Understand", "Six everyday concepts align with how farm teams think and work."],
  ["🎯", "Focused and Actionable", "Highlights what truly drives health, reducing noise from hundreds of raw variables."],
  ["⚙", "Model-Driven Insight", "Advanced algorithms convert complex data into reliable dimension scores and an overall state."],
  ["▤", "Consistent and Comparable", "Stable framework for herd, farm and region comparisons over time."],
  ["⚡", "Faster Decisions", "Operators can quickly see what matters most and take timely action."],
];
export function MengniuHealthModel({ n = "03" }: { n?: string }) {
  const [d, setD] = useState(0);
  const pos = [[150, 8], [238, 62], [238, 168], [150, 216], [62, 168], [62, 62]];
  return <Mn n={n} title="Cow Health Model" label="Mengniu cow health model — interactive rebuild" rule>
    <div style={{ display: "grid", gridTemplateColumns: "168px 1fr 196px", gap: 12, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Overview</p>
        <p style={{ margin: 0, fontSize: 11.2, lineHeight: 1.65, color: "#37424e" }}>A simplified state model for operator understanding. The model represents the {"cow's"} health as an overall state influenced by six key dimensions of the living environment. Each dimension is continuously monitored and scored, then combined to form a single, interpretable health state.</p>
        <p style={{ margin: "10px 0 0", fontSize: 10.6, color: "#5b6470" }}>蒙牛 · MENGNIU — sub-wordmark as printed on this slide.</p>
      </div>
      <div>
        <svg viewBox="0 0 330 268" style={{ width: "100%", maxWidth: 430, display: "block", margin: "0 auto" }} role="img" aria-label="Hexagonal cow health model with six dimensions around an overall health centre">
          {pos.map(([x, y], i) => <line key={i} x1="165" y1="134" x2={x + 15} y2={y + 26} stroke={i % 2 ? "#b9cdc2" : "#7fb894"} strokeWidth="1.6" strokeDasharray={i % 2 ? "4 3" : undefined} />)}
          <circle cx="165" cy="134" r="46" fill={GREEN} />
          <text x="165" y="124" fontSize="12.5" fill="#fff" fontWeight="800" textAnchor="middle">Overall Health</text>
          <text x="165" y="139" fontSize="8.6" fill="#dff2e6" textAnchor="middle">Integrated Health State</text>
          <rect x="143" y="148" width="44" height="15" rx="7.5" fill="#fff" /><text x="165" y="159" fontSize="9" fill={GREEN} fontWeight="800" textAnchor="middle">Good</text>
          {HEALTH03.map(([name, sub2, , icon], i) => <g key={name} onClick={() => setD(i)} style={{ cursor: "pointer" }}>
            <circle cx={pos[i][0] + 15} cy={pos[i][1] + 26} r="27" fill={i === d ? GREEN : "#fff"} stroke={GREEN} strokeWidth="2" />
            <text x={pos[i][0] + 15} y={pos[i][1] + 24} fontSize="13" textAnchor="middle">{icon}</text>
            <text x={pos[i][0] + 15} y={pos[i][1] + 40} fontSize="9.6" fontWeight="800" textAnchor="middle" fill={i === d ? "#fff" : "#141a21"}>{name}</text>
            <text x={pos[i][0] + 15} y={pos[i][1] + 64} fontSize="7.8" textAnchor="middle" fill="#5b6470">{sub2}</text>
          </g>)}
        </svg>
        <p aria-live="polite" style={{ margin: "4px 0 0", fontSize: 11.2, lineHeight: 1.6, textAlign: "center" }}><b>{HEALTH03[d][0]} — {HEALTH03[d][1]}:</b> {HEALTH03[d][2]}</p>
      </div>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Why six dimensions?</p>
        {WHY03.map(([icon, t, b]) => <p key={t} style={{ margin: 0, padding: "6px 0", borderBottom: "1px solid #e6ece6", fontSize: 10.6, lineHeight: 1.55 }}><b>{icon} {t}</b><br /><span style={{ color: "#4a5462" }}>{b}</span></p>)}
      </div>
    </div>
    <div style={{ background: "#eef7f1", borderRadius: 10, padding: "9px 13px", marginTop: 11, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", fontSize: 11.2 }}>
      <span>❤ <b>Health as a balance</b> — When all six dimensions are in balance, cows perform at their best. <b>Small imbalances, early; big impact, prevented.</b></span>
      <span style={{ marginLeft: "auto", display: "flex", gap: 12 }}><span><span style={{ color: GREEN }}>●</span> Good (Optimal)</span><span><span style={{ color: "#E8A33D" }}>●</span> Caution (Monitor)</span><span><span style={{ color: "#D95C5C" }}>●</span> Poor (Action Needed)</span></span>
    </div>
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
  return <Mn n={n} title="Research-to-Feature Matrix" sub="How domain research became product decisions." label="Mengniu research-to-feature matrix — interactive rebuild" rule>
    <table className="tks-table">
      <thead><tr>{[["🔍", "RESEARCH OBSERVATION"], ["💡", "PRODUCT IMPLICATION"], ["🖥", "INTERFACE OR SYSTEM RESPONSE"]].map(([icon, h]) => <th key={h} style={{ background: "#0B6B3A", color: "#fff", fontSize: 11.5, letterSpacing: "0.05em" }}>{icon} {h}</th>)}</tr></thead>
      <tbody>{MATRIX04.map(([obs, cite, impl, resp], i) => <tr key={obs} onClick={() => setR(i)} style={{ cursor: "pointer", background: i === r ? "#eef7f1" : undefined }}>
        <td style={{ width: "34%" }}><span aria-hidden="true" style={{ marginRight: 6 }}>📄</span><b>{obs}</b><br /><span style={{ color: "#5b6470", fontSize: 10.6 }}>{cite}</span></td>
        <td style={{ width: "33%" }}>▸ {impl}</td>
        <td>{resp} <span aria-hidden="true" style={{ float: "right", color: GREEN }}>▸</span></td>
      </tr>)}</tbody>
    </table>
    <p style={{ margin: "10px 0 0" }}>✓ Every product choice in the Mengniu Dairy Digital Twin is grounded in peer-reviewed research and validated on-farm.</p>
  </Mn>;
}

/* ---------------- 05 — User and Task Model ---------------- */
const TASKS05: Array<[string, string, string]> = [
  ["👁", "Understand Barn Status", "Get a real-time overview of the barn environment, equipment, and herd conditions to ensure animals are in a safe and comfortable state."],
  ["📍", "Locate an Animal", "Search and quickly find a specific animal within the barn using ID, tag, or visual search to support checks and interventions."],
  ["❤", "Inspect Health Conditions", "Review individual animal health data, alerts, and trends to assess wellbeing and identify issues early."],
  ["▶", "Observe a Workflow", "Visualize and understand operational workflows (e.g., feeding, milking, cleaning) and monitor execution in real time."],
  ["🔗", "Understand Data Provenance", "Trace where data comes from, how it is collected, and when it was recorded to ensure trust, transparency, and compliance."],
];
export function MengniuUserTaskModel({ n = "05" }: { n?: string }) {
  const [u, setU] = useState(0);
  const [t, setT] = useState(0);
  const persona = (idx: number, eyebrow: string, title: string, body: string, filled: boolean) => <button type="button" onClick={() => setU(idx)} aria-pressed={u === idx} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${u === idx ? GREEN : "#e2e8e2"}`, borderRadius: 12, padding: "12px 14px", cursor: "pointer", font: "inherit", color: "#141a21", display: "flex", gap: 12 }}>
    <span aria-hidden="true" style={{ width: 52, height: 52, borderRadius: "50%", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 22, background: filled ? GREEN : "#fff", border: filled ? "none" : `2px solid ${GREEN}`, color: filled ? "#fff" : GREEN }}>👤</span>
    <span><span style={{ display: "block", fontSize: 9.8, fontWeight: 800, letterSpacing: "0.1em", color: GREEN }}>{eyebrow}</span><b style={{ display: "block", fontSize: 13.5, margin: "2px 0" }}>{title}</b><span style={{ display: "block", fontSize: 11, lineHeight: 1.6, color: "#4a5462" }}>{body}</span><span aria-hidden="true" style={{ display: "block", width: 44, height: 3, background: GREEN, borderRadius: 2, marginTop: 7, position: "relative" }}><span style={{ position: "absolute", right: -2, top: -2.5, width: 8, height: 8, borderRadius: "50%", background: GREEN }} /></span></span>
  </button>;
  return <Mn n={n} title="User and Task Model" sub="Who the prototype supports and what they need to do." label="Mengniu user and task model — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      {persona(0, "PRIMARY USER", "Farm or Barn Operator", "On-site daily user responsible for animal care and barn operations. Uses the prototype to monitor conditions, locate animals, and take action.", true)}
      {persona(1, "SECONDARY VIEWER", "Technical Evaluator, Operations Manager, or Animal-Welfare Specialist", "Reviews insights, validates data quality and system performance, and supports decision-making across teams.", false)}
    </div>
    <p style={{ margin: "14px 0 8px" }}><span style={{ background: GREEN, color: "#fff", borderRadius: 999, padding: "3px 14px", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em" }}>CORE TASKS</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "start" }}>
      {TASKS05.map(([icon, title, body], i) => <button key={title} type="button" onClick={() => setT(i)} aria-pressed={i === t} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === t ? GREEN : "#e2e8e2"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span aria-hidden="true" style={{ width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${GREEN}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{icon}</span><span style={{ width: 19, height: 19, borderRadius: "50%", background: GREEN, color: "#fff", fontSize: 10.5, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span></span>
        <b style={{ display: "block", fontSize: 11.6, lineHeight: 1.35, margin: "6px 0 3px" }}>{title}</b>
        <span style={{ display: "block", fontSize: 9.9, lineHeight: 1.55, color: "#4a5462" }}>{body}</span>
      </button>)}
    </div>
    <p style={{ margin: "11px 0 0", background: "#eef7f1", borderRadius: 9, padding: "8px 13px", fontSize: 11.3 }}>All tasks are enabled by the Digital Twin to provide <b style={{ color: GREEN }}>accurate, timely, and trustworthy</b> insights for better animal care and operational excellence.</p>
  </Mn>;
}

/* ---------------- 06 — Information Architecture ---------------- */
const IA06: Array<[string, string, string, string[]]> = [
  ["1", "Barn Overview", "High-level summary of the entire barn and herd status.", ["Herd composition & count", "Key KPIs (health, yield, reproduction, activity)", "Alerts & exceptions", "Trend indicators"]],
  ["2", "Selected Cow", "Detailed profile and real-time status of the selected cow.", ["Cow profile (ID, age, parity)", "Production & lactation data", "Current status & alerts", "Historical trends"]],
  ["3", "Health Dimensions", "Multi-dimensional health assessment and trend analysis.", ["Vital signs & physiology", "Behavior & activity", "Rumination & feeding", "Reproduction & fertility", "Health score & risk prediction"]],
  ["4", "Spatial Overview (Minimap)", "Real-time spatial view of the barn and cow locations.", ["Barn layout & zones", "Cow positioning", "Movement & density", "Environmental conditions by zone"]],
  ["5", "Automated Milking Workflow", "End-to-end view of the automated milking process.", ["Queue & scheduling", "Milking in progress", "Milk yield & quality", "Post-milking checks", "Exceptions & re-routing"]],
  ["6", "Sensor & System Explanation", "Data sources, system logic, and metric explanations.", ["Sensor inventory & status", "Data update frequency", "Metric definitions", "Model logic & thresholds", "System integrations"]],
];
export function MengniuIA({ n = "06" }: { n?: string }) {
  const [s, setS] = useState(0);
  return <Mn n={n} title="Information Architecture" sub="The product structure behind the digital twin." label="Mengniu information architecture — interactive rebuild" rule>
    <div style={{ maxWidth: 430, margin: "0 auto", textAlign: "center", background: "#fff", border: `2px solid ${GREEN}`, borderRadius: 11, padding: "8px 13px" }}>
      <b style={{ fontSize: 13 }}>▦ Digital Twin Dashboard</b>
      <p style={{ margin: "2px 0 0", fontSize: 10.6, color: "#4a5462" }}>Unified entry point providing real-time insights, navigation, and intelligent alerts.</p>
    </div>
    <div aria-hidden="true" style={{ borderTop: `2.5px solid ${GREEN}`, margin: "10px 24px 0", position: "relative", height: 9 }}><span style={{ position: "absolute", left: "50%", top: -9, borderLeft: `2.5px solid ${GREEN}`, height: 9 }} /></div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8, alignItems: "start" }}>
      {IA06.map(([num, name, desc, bullets], i) => <button key={name} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? GREEN : "#e2e8e2"}`, borderRadius: 11, padding: "8px 9px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <span style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ width: 20, height: 20, borderRadius: "50%", background: GREEN, color: "#fff", fontSize: 11, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{num}</span><b style={{ fontSize: 11.2, lineHeight: 1.3 }}>{name}</b></span>
        <span style={{ display: "block", fontSize: 9.7, lineHeight: 1.5, color: "#4a5462", margin: "5px 0" }}>{desc}</span>
        <span style={{ display: "block", background: "#eef7f1", borderRadius: 7, padding: "6px 8px" }}><ul style={{ margin: 0, paddingLeft: 12, fontSize: 9.5, lineHeight: 1.55 }}>{bullets.map((b) => <li key={b}>{b}</li>)}</ul></span>
      </button>)}
    </div>
    <div aria-hidden="true" style={{ borderTop: "2px dashed #b9cdc2", margin: "10px 24px 0" }} />
    <div style={{ maxWidth: 520, margin: "8px auto 0", textAlign: "center", background: "#fff", border: "1.5px dashed #7fb894", borderRadius: 11, padding: "8px 13px" }}>
      <b style={{ fontSize: 12.5 }}>Unified Data Platform</b>
      <p style={{ margin: "2px 0 0", fontSize: 10.6, color: "#4a5462" }}>Aggregates data from all sensors and systems, ensuring consistency, quality, and real-time availability.</p>
    </div>
    <div style={{ display: "flex", marginTop: 11, border: "1px solid #e2e8e2", borderRadius: 11, overflow: "hidden", background: "#fff" }}>
      {[["⚡", "Real-time", "Live data streaming and instant updates"], ["🔔", "Intelligent Alerts", "Anomaly detection and proactive notifications"], ["👤", "Role-based Access", "Permissions tailored to users and responsibilities"], ["▦", "Cross-platform", "Responsive experience across web, tablet, and mobile"], ["🛡", "Secure & Reliable", "Enterprise-grade security and data governance"]].map(([icon, t, d], i) => <span key={t} style={{ flex: 1, padding: "8px 10px", borderLeft: i ? "1px solid #e2e8e2" : "none" }}><b style={{ display: "block", fontSize: 10.8 }}>{icon} {t}</b><span style={{ fontSize: 9.6, lineHeight: 1.5, color: "#4a5462" }}>{d}</span></span>)}
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.4, color: "#5b6470" }}>Legend as printed: — Primary Navigation · ⤴ Data Flow · ◆ Key Content.</p>
  </Mn>;
}

/* ---------------- 07 — Primary Interaction Flow ---------------- */
const FLOW07: Array<[string, string, string]> = [
  ["Enter barn", "Barn Overview — 25.4 °C · 60%. Cows 1,256 · In Milk 1,034 · Milking 48 · Alerts 7. Operator enters the 3D barn overview and sees real-time herd distribution and key KPIs.", "Overall herd status, activity at a glance, and any alerts that need attention."],
  ["Select a cow", "Cow 5247 highlighted in the barn. Operator clicks a cow to open its individual profile and focus the digital twin.", "Identity, location, and current status of the selected animal."],
  ["Review position and health dimensions", "Cow 5247 — Health Dimensions: Activity 78 · Rumination 55 · Feed Intake 62 · Milk Yield 31.5 L · Body Condition 3.25 · Heart Rate 64 bpm · Respiration 24 rpm · Temperature 38.6 °C. Location: Zone B · Pen 12. Last updated: 09:42:18.", "The animal's current condition and any deviations from normal ranges."],
  ["Trigger or observe a state", "Health Alert — Elevated Temperature 38.6 °C (↑ 1.2 °C). Suggested actions: Add to Monitoring · Schedule Vet Check · Add Note. Observed at 09:42.", "What the system detected and recommended next steps or interventions."],
  ["Follow the animal through the milking sequence", "Cow 5247 · Milking in Progress — stages: Approach · Identify · Attach · Milking · Complete. Milk Yield 12.4 L · Milking Time 4:32 · Flow Rate 2.6 L/min.", "Milking progress, yield, quality indicators, and process exceptions."],
  ["Return to barn overview", "Barn Overview — Cows 1,256 · In Milk 1,034 · Milking 48 · Alerts 7. Operator returns to the barn overview to continue monitoring the herd.", "Updated herd status and confirmation that the system is running smoothly."],
];
export function MengniuInteractionFlow({ n = "07" }: { n?: string }) {
  const [s, setS] = useState(0);
  return <Mn n={n} title="Primary Interaction Flow" sub="From entering the barn to returning to overview." label="Mengniu primary interaction flow — interactive rebuild" center>
    <p style={{ margin: "0 0 10px", fontSize: 10.4, letterSpacing: "0.12em", color: GREEN, fontWeight: 700, textAlign: "center" }}>GLOBAL DAIRY, NOURISHING LIFE — tagline as printed with the logo lockup on this slide</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8, alignItems: "start" }}>
      {FLOW07.map(([t, body, learns], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === s ? GREEN : "#e2e8e2"}`, borderRadius: 11, padding: "8px 9px", cursor: "pointer", font: "inherit", color: "#141a21", position: "relative" }}>
        {i < 5 ? <span aria-hidden="true" style={{ position: "absolute", right: -8, top: 18, color: GREEN, zIndex: 2, fontSize: 11 }}>→</span> : null}
        <span style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ width: 21, height: 21, borderRadius: "50%", background: GREEN, color: "#fff", fontSize: 11.5, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span><b style={{ fontSize: 11.3, lineHeight: 1.3 }}>{t}</b></span>
        <span style={{ display: "block", background: "#f4f8f5", border: "1px solid #e6ece6", borderRadius: 7, padding: "6px 7px", fontSize: 9.5, lineHeight: 1.55, color: "#37424e", marginTop: 7, minHeight: 118 }}>{body}</span>
        <span style={{ display: "block", marginTop: 7 }}><span style={{ display: "block", fontSize: 9.2, fontWeight: 800, letterSpacing: "0.07em", color: GREEN }}>OPERATOR LEARNS:</span><span style={{ fontSize: 9.6, lineHeight: 1.5, color: "#4a5462" }}>{learns}</span></span>
      </button>)}
    </div>
    <p style={{ margin: "12px auto 0", textAlign: "center" }}><span style={{ border: `1.5px solid ${GREEN}`, color: "#0B6B3A", borderRadius: 999, padding: "4px 16px", fontSize: 11 }}>↻ Continuous monitoring cycle for a healthier, more productive herd.</span></p>
  </Mn>;
}

/* ---------------- 08 — Wireframe Board ---------------- */
const WIRE08: Array<[string, string, string, string]> = [
  ["1", "Barn Overview / Primary Display", "5 KPI cards: Total Cows 1,024; Milking 128; Avg Activity 72%; Alerts 12; Avg Temp 24.6 °C. Environment: 23.5 °C · 68% · 12 m/s · Updated 30s ago.", "KPI Cards"],
  ["2", "Selected Cow Panel (Cow #0457)", "Cow #0457 highlighted on barn map with floating marker. Detail panel: #0457, Holstein, 3.2 yrs, Lactation 2. Health Score 82 (Good). Body Temp 38.7 °C (+0.4), Activity 78%, Rumination 42 min/hr. Environment: 23.5 °C, 68%, Small Map 1F. Quick Actions: View History, Inspect, Assign Task. Updated: 30 sec ago.", "Detail Panel"],
  ["3", "Health Dimensions (Cow #0457)", "Primary: Health Score 72 (Moderate) — moderate risk detected, monitor closely. Secondary scores: Activity 82, Rumination 68, Feed Intake 61, Milk Production 74, Body Condition 85, Heart Rate 70, Respiration 66, Temperature 59. Alert: 'Temperature above normal range (39.2 °C) for 2 hours.'", "Score Hierarchy"],
  ["4", "Automated Milking Status (Cow #0457)", "Current Status: In Progress. Progress 62% (In progress). Elapsed 04:18. Flow Rate 2.4 kg/min (Normal). Next Step Guidance: 'Monitor flow; expected completion in ~2 min.' Process: Entry → Attach → Milking → Release → Exit. Yield Expected 13.2 kg. History: S1 12.4 kg, S2 13.1 kg, S3 12.8 kg. Issues: None reported.", "Progress & Steps"],
  ["5", "Milking State (Barn Overview)", "State Distribution: Milking 128 (12.6% as printed in donut), Idle 498 (48.6%), Feeding 276 (26.9%), Resting 112 (10.9%), Queued 10 (1.0%). Breakdown: Total cows 1,024. Milking 128 (12.8% as printed in breakdown). Idle 498 (48.6%). Feeding 276 (26.9%). Resting 112 (10.9%). Queued 10 (1.0%). Detail table: ID / Status / Location / Duration — 0457 Milking Stall 3 12:24; 1023 Idle Zone A 45:10; 0789 Feeding Feed Line 2 08:37; 0345 Resting Rest Area 1 22:15. Time Range: Last 24 Hours.", "Donut & Table"],
];
const TABLE08: Array<[string, string, string, string, string, string]> = [
  ["0457", "82", "Normal", "38.3", "520", "10:28"],
  ["1023", "65", "Low Activity", "38.5", "410", "10:15"],
  ["0789", "91", "Normal", "38.2", "560", "10:32"],
  ["0345", "48", "Check", "39.1", "385", "09:58"],
  ["0562", "77", "Normal", "38.4", "495", "10:21"],
];
const pin08 = (text: string) => <p style={{ margin: 0, fontSize: 9.2, lineHeight: 1.5, color: "#5b6470", borderLeft: "2px dotted #b9cdc2", paddingLeft: 7 }}>{text}</p>;
export function MengniuWireframeBoard({ n = "08" }: { n?: string }) {
  const [p, setP] = useState(2);
  const panel = (idx: number, children: React.ReactNode) => <div onClick={() => setP(idx)} style={{ background: "#fff", border: `1.5px solid ${p === idx ? GREEN : "#dfe5df"}`, borderRadius: 11, padding: "9px 11px", cursor: "pointer" }}>
    <p style={{ margin: "0 0 6px", fontSize: 11.6 }}><b>{WIRE08[idx][0]}. {WIRE08[idx][1]}</b> <span style={{ float: "right", fontSize: 9.4, color: GREEN, fontWeight: 700 }}>◆ {WIRE08[idx][3]}</span></p>
    {children}
  </div>;
  return <Mn n={n} title="Wireframe Board" sub="Five interdependent panels define the core interface." label="Mengniu wireframe board — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 10, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Principles</p>
        {[["▤", "Hierarchy", "Primary information larger and higher contrast; secondary information muted and grouped."], ["⌨", "Input Behavior", "Click to select; hover to preview; keyboard arrows for navigation; double-click to drill down."], ["▦", "Information Grouping", "Related metrics grouped visually; alerts and status separated; history in collapsible sections."], ["◎", "Interaction Priorities", "1) Select, 2) Inspect, 3) Act, 4) Explore. Minimizes cognitive load." ]].map(([icon, t, b]) => <p key={t} style={{ margin: "0 0 8px", fontSize: 9.8, lineHeight: 1.55 }}><b>{icon} {t}</b><br /><span style={{ color: "#4a5462" }}>{b}</span></p>)}
        <p style={{ border: "1.5px dashed #7fb894", borderRadius: 9, padding: "7px 9px", fontSize: 9.8, lineHeight: 1.55, margin: 0 }}><b>Note:</b> Panels are interdependent. Selecting a cow in Panel 1 updates Panels 2, 3, and 4.</p>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {panel(0, <>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{[["Total Cows", "1,024"], ["Milking", "128"], ["Avg Activity", "72%"], ["Alerts", "12"], ["Avg Temp", "24.6 °C"]].map(([k, v]) => <span key={k} style={{ border: "1px solid #e2e8e2", borderRadius: 7, padding: "4px 8px", fontSize: 9.6 }}><span style={{ color: "#5b6470" }}>{k}</span> <b>{v}</b></span>)}</div>
            <p style={{ margin: "6px 0 0", fontSize: 9.8, color: "#4a5462" }}>Environment: 23.5 °C · 68% · 12 m/s · Updated 30s ago · Barn map with stall grid and cow markers.</p>
          </>)}
          {panel(1, <p style={{ margin: 0, fontSize: 9.8, lineHeight: 1.6, color: "#37424e" }}>{WIRE08[1][2]}</p>)}
        </div>
        {panel(2, <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginBottom: 6 }}>{[["Health Score", "72"], ["Activity", "82"], ["Temperature", "59 ⚠"], ["Rumination", "68"]].map(([k, v]) => <span key={k} style={{ border: "1px solid #e2e8e2", borderRadius: 7, padding: "4px 8px", fontSize: 9.6 }}><span style={{ color: "#5b6470" }}>{k}</span> <b>{v}</b></span>)}</div>
          <table className="tks-table tks-table--micro">
            <thead><tr><th>Cow ID ⇅</th><th>Health Score ⇅</th><th>Status ⇅</th><th>Body Temp (°C) ⇅</th><th>Activity (steps) ⇅</th><th>Last Updated ⇅</th></tr></thead>
            <tbody>{TABLE08.map((row) => <tr key={row[0]}>{row.map((cell, ci) => <td key={ci} style={ci === 2 && cell !== "Normal" ? { color: "#D99A2B", fontWeight: 700 } : undefined}>{cell}</td>)}</tr>)}</tbody>
          </table>
          <p style={{ margin: "5px 0 0", fontSize: 9.6, color: "#D95C5C" }}>⚠ Temperature above normal range (39.2 °C) for 2 hours.</p>
        </>)}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 8 }}>
          {panel(3, <>
            <p style={{ margin: "0 0 4px", fontSize: 9.8 }}>Progress <b>62%</b> · Elapsed 04:18 · Flow 2.4 kg/min</p>
            <div aria-hidden="true" style={{ height: 8, background: "#e6ece6", borderRadius: 4 }}><div style={{ width: "62%", height: "100%", background: GREEN, borderRadius: 4 }} /></div>
            <p style={{ margin: "5px 0 0", fontSize: 9.6, color: "#4a5462" }}>Entry → Attach → Milking → Release → Exit · Yield Expected 13.2 kg · History S1 12.4 / S2 13.1 / S3 12.8 kg · Issues: None reported.</p>
          </>)}
          {panel(4, <>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: 62, height: 62, borderRadius: "50%", flex: "none", background: `conic-gradient(${GREEN} 0 45deg, #9db8a7 45deg 220deg, #cfd8d1 220deg 317deg, #e3e9e4 317deg 356deg, #8a93a0 356deg 360deg)`, display: "inline-flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 38, height: 38, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9.4, fontWeight: 800 }}>128<br />12.6%</span></span>
              <ul style={{ margin: 0, paddingLeft: 13, fontSize: 9.6, lineHeight: 1.6 }}>
                <li>Milking 128 (12.8%)</li><li>Idle 498 (48.6%)</li><li>Feeding 276 (26.9%)</li><li>Resting 112 (10.9%)</li><li>Queued 10 (1.0%)</li>
              </ul>
            </div>
            <table className="tks-table tks-table--micro" style={{ marginTop: 6 }}>
              <thead><tr><th>ID</th><th>Status</th><th>Location</th><th>Duration</th></tr></thead>
              <tbody>{[["0457", "Milking", "Stall 3", "12:24"], ["1023", "Idle", "Zone A", "45:10"], ["0789", "Feeding", "Feed Line 2", "08:37"], ["0345", "Resting", "Rest Area 1", "22:15"]].map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
            <p style={{ margin: "4px 0 0", fontSize: 9.4, color: "#5b6470" }}>Total cows 1,024 · Time Range: Last 24 Hours.</p>
          </>)}
        </div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 9 }}>
      {pin08("Printed callouts: 'Ensures spatial orientation and selection accuracy.' (left of Panel 1) · 'Contextual details without leaving the spatial view.' (right of Panel 2)")}
      {pin08("'Primary score is the entry point; detail supports action.' (left of Panel 3) · 'Progress visibility reduces uncertainty.' (right of Panel 4) · 'Supports triage at a glance.' (right of Panel 5)")}
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.2, color: "#5b6470" }}>ⓘ Panels are live-linked in the prototype; selecting a cow updates detail, health, and milking panels together.</p>
  </Mn>;
}

/* ---------------- 09 — Health Control Explorations ---------------- */
const DIMS09: Array<[string, number]> = [["Nutrition", 92], ["Activity", 88], ["Reproduction", 91], ["Environment", 85], ["Immune", 87], ["Digestion", 90]];
const OPT09: Array<[string, string, string, string[], string[]]> = [
  ["OPTION 1", "Radial Chart", "🎡", ["Intuitive at a glance", "Visually engaging"], ["Harder to compare values", "Less precise for multiple cows"]],
  ["OPTION 2", "Ring Chart", "⭕", ["Clear dimension separation", "Compact and scannable"], ["Similar readability challenges", "Value comparison still limited"]],
  ["OPTION 3", "Stacked Cluster", "▦", ["Grouped by dimension", "Better for herd-level view"], ["Less intuitive for individuals", "Visually dense"]],
];
export function MengniuHealthExplorations({ n = "09" }: { n?: string }) {
  const [o, setO] = useState(3);
  const optCol = (idx: number, children: React.ReactNode) => <button type="button" onClick={() => setO(idx)} aria-pressed={o === idx} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${o === idx ? GREEN : "#e2e8e2"}`, borderRadius: 12, padding: "10px 12px", cursor: "pointer", font: "inherit", color: "#141a21" }}>{children}</button>;
  return <Mn n={n} title="Health Control Explorations" sub="Comparing visualization approaches for complex indicators." label="Mengniu health control explorations — interactive rebuild" rule>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 12, alignItems: "start" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, alignItems: "start" }}>
        {OPT09.map(([tag, name, glyph, pros, cons], i) => optCol(i, <>
          <p style={{ margin: 0, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", color: GREEN }}>{tag}</p>
          <b style={{ display: "block", fontSize: 13.5, margin: "2px 0 4px" }}>{name}</b>
          <p aria-hidden="true" style={{ fontSize: 30, textAlign: "center", margin: "6px 0" }}>{glyph}</p>
          {pros.map((x) => <p key={x} style={{ margin: "0 0 2px", fontSize: 10, color: "#0B6B3A" }}>✓ {x}</p>)}
          {cons.map((x) => <p key={x} style={{ margin: "0 0 2px", fontSize: 10, color: "#D95C5C" }}>✕ {x}</p>)}
        </>))}
      </div>
      <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 13 }}>
        {optCol(3, <>
          <p style={{ margin: 0, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", color: GREEN }}>FINAL SOLUTION</p>
          <b style={{ display: "block", fontSize: 14.5, margin: "2px 0 4px" }}>Hexagonal Diagram</b>
          <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", gap: 3, justifyContent: "center", margin: "6px 0" }}>
            {DIMS09.map(([d, v]) => <span key={d} style={{ width: 62, height: 54, background: "#eef7f1", border: `1.5px solid ${GREEN}`, clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: 8.4 }}><b style={{ fontSize: 12 }}>{v}</b>{d}</span>)}
          </div>
          <span style={{ display: "block", background: "#eef7f1", borderRadius: 9, padding: "8px 10px", fontSize: 10.2, lineHeight: 1.6 }}>
            <b>WHY HEXAGONAL?</b><br />• Stable structure and intuitive shape language<br />• Balanced visual weight for multi-dimensional data<br />• Naturally aligns with the six-dimension health model<br />• Clear centre for overall score and status
          </span>
        </>)}
      </div>
    </div>
    <p style={{ margin: "11px 0 0", background: "#f4f8f5", border: "1px solid #e2e8e2", borderRadius: 10, padding: "8px 13px", fontSize: 10.8, display: "flex", gap: 10, flexWrap: "wrap" }}>
      <b>💡 EXPLORATION PRINCIPLES</b>
      {["Goal: compare health across six key dimensions quickly and clearly", "Emphasis on overview before detail", "Supports rapid scanning and identification of weak dimensions", "Must scale across devices from desktop to handheld", "Prioritizes interpretability over decorative complexity"].map((x) => <span key={x} style={{ borderLeft: "1px solid #cfd8d1", paddingLeft: 10 }}>{x}</span>)}
    </p>
    <p style={{ margin: "8px 0 0", fontSize: 11 }}>Goal (as printed, top-right column): Explore different ways to present the {"cow's"} health across six dimensions (nutrition, activity, reproduction, environment, immune, digestion) in a format that is intuitive, comparable, and actionable.</p>
  </Mn>;
}

/* ---------------- 10 — Minimap and Selection Explorations ---------------- */
const MAP10: Array<[string, string[]]> = [
  ["Option 1: Simplified Feed", ["✓ Simple and scannable", "− Too abstract, lacks precision"]],
  ["Option 2: Zoned Detail", ["✓ Clear spatial structure", "− Harder for precise selection"]],
  ["Option 3: Topographic Precision", ["✓ Precise pen-level positioning", "✓ Clear selection targets", "− Higher visual complexity"]],
];
export function MengniuMinimap({ n = "10" }: { n?: string }) {
  const [o, setO] = useState(2);
  const [f, setF] = useState("1F");
  const mapGlyph = (variant: number) => <span aria-hidden="true" style={{ display: "block", height: 74, borderRadius: 7, background: variant === 2 ? "repeating-linear-gradient(0deg,#eef7f1 0 12px,#dcebe1 12px 13px), repeating-linear-gradient(90deg,transparent 0 16px,#cfd8d1 16px 17px)" : variant === 1 ? "linear-gradient(90deg,#eef7f1 33%,#f7fbf8 33% 66%,#eef7f1 66%)" : "#f2f6f3", border: "1px solid #d8dcd8", position: "relative", marginBottom: 6 }}>
    <span style={{ position: "absolute", left: "38%", top: "40%", width: 9, height: 9, borderRadius: "50%", background: GREEN, border: "2px solid #fff" }} />
    <span style={{ position: "absolute", left: "62%", top: "22%", width: 6, height: 6, borderRadius: "50%", background: "#8a93a0" }} />
    <span style={{ position: "absolute", left: "20%", top: "62%", width: 6, height: 6, borderRadius: "50%", background: "#8a93a0" }} />
  </span>;
  return <Mn n={n} title="Minimap and Selection Explorations" sub="From broad barn layout to pen-level precision." label="Mengniu minimap explorations — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr) 1.35fr", gap: 9, alignItems: "start" }}>
      {MAP10.map(([name, verdicts], i) => <button key={name} type="button" onClick={() => setO(i)} aria-pressed={o === i} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${o === i ? GREEN : "#e2e8e2"}`, borderRadius: 11, padding: "9px 11px", cursor: "pointer", font: "inherit", color: "#141a21" }}>
        <b style={{ display: "block", fontSize: 11.6, marginBottom: 6 }}>{name}</b>
        {mapGlyph(i)}
        {verdicts.map((v) => <p key={v} style={{ margin: "0 0 2px", fontSize: 10, color: v.startsWith("✓") ? "#0B6B3A" : "#8a5a12" }}>{v}</p>)}
      </button>)}
      <div style={{ background: "#fff", border: `2px solid ${GREEN}`, borderRadius: 11, padding: "10px 12px" }}>
        <b style={{ fontSize: 12.5 }}>Final Minimap Treatment</b>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 92px 30px", gap: 8, marginTop: 7, alignItems: "start" }}>
          <span aria-hidden="true" style={{ display: "block", height: 120, borderRadius: 7, background: "repeating-linear-gradient(0deg,#eef7f1 0 14px,#dcebe1 14px 15px), repeating-linear-gradient(90deg,transparent 0 18px,#cfd8d1 18px 19px)", border: "1px solid #d8dcd8", position: "relative" }}>
            <span style={{ position: "absolute", left: "44%", top: "46%", width: 11, height: 11, borderRadius: "50%", background: GREEN, border: "2px solid #fff" }} />
          </span>
          <span style={{ background: "#f7fbf8", border: "1px solid #e2e8e2", borderRadius: 8, padding: "6px 8px", fontSize: 9.6, lineHeight: 1.6 }}><b>Cow #8127</b><br />Pen B-12 · Zone 3<br />Activity ✓ Normal<br />Last Feed 2h ago<br />Milking Due 1h</span>
          <span style={{ display: "grid", gap: 3 }}>{["3F", "2F", "1F", "B1"].map((fl) => <button key={fl} type="button" onClick={() => setF(fl)} aria-pressed={f === fl} style={{ background: f === fl ? GREEN : "#fff", color: f === fl ? "#fff" : "#37424e", border: "1px solid #d8dcd8", borderRadius: 5, fontSize: 9.6, padding: "3px 0", cursor: "pointer", fontWeight: 700 }}>{fl}</button>)}</span>
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 9.6, color: "#4a5462", display: "flex", gap: 10, flexWrap: "wrap" }}><span><span style={{ color: GREEN }}>●</span> Cow Position</span><span>▦ Pen Boundary</span><span>— Feeding Lane</span><span>✚ Milking Station</span><span style={{ marginLeft: "auto" }}>N ↑ · + / − zoom</span></p>
        <p style={{ margin: "4px 0 0", fontSize: 9.4, color: "#5b6470" }}>GLOBAL CONTEXT — operators keep whole-barn orientation · LOCAL CONTEXT — pen-level precision for the selected animal (floor {f}).</p>
      </div>
    </div>
    <div style={{ background: "#eef7f1", borderRadius: 10, padding: "9px 13px", marginTop: 10 }}>
      <p style={{ margin: "0 0 5px", fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", color: "#0B6B3A" }}>OPERATOR WORKFLOW</p>
      <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 10.8, flexWrap: "wrap" }}>
        <span aria-hidden="true" style={{ width: 44, height: 30, borderRadius: 5, background: "linear-gradient(135deg,#7a5c3d,#3d5a41)", display: "inline-block" }} />
        {[["1", "Locate", "Find your bearings in the full-barn view"], ["2", "Select", "Tap a pen or cow to zoom to precision"], ["3", "Act", "Open the profile and take the next action"]].map(([num, t, d], i) => <span key={t} style={{ display: "flex", gap: 7, alignItems: "center" }}>{i ? <span aria-hidden="true" style={{ color: GREEN }}>┄→</span> : null}<span style={{ width: 20, height: 20, borderRadius: "50%", background: GREEN, color: "#fff", fontSize: 11, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{num}</span><span><b>{t}</b> — {d}</span></span>)}
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 11.2 }}>💡 The minimap is the bridge between global context and individual care — high-level awareness with pen-level precision.</p>
  </Mn>;
}

/* ---------------- 11 — Cow 0986 overlay (barn photo slide) ---------------- */
const HEX11: Array<[string, number]> = [["Feed", 88], ["Water", 92], ["Space", 85], ["Rest", 93], ["Air", 87], ["Light", 90]];
export function MengniuCowOverlay({ n = "11" }: { n?: string }) {
  const [h, setH] = useState(-1);
  const hex = (label: string, value: number | string, big?: boolean): React.CSSProperties => ({ clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)", background: big ? GREEN : "#12241a", border: "none", color: "#fff", width: big ? 118 : 92, height: big ? 102 : 80, display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: big ? 15 : 12.5, fontWeight: 800, cursor: "pointer" });
  return <Mn n={n} title="" dark label="Mengniu cow 0986 health overlay — interactive rebuild">
    <div style={{ position: "relative", minHeight: 330, borderRadius: 12, overflow: "hidden", background: "linear-gradient(180deg,#241d16 0%,#171310 55%,#0d0b09 100%)", padding: "18px 14px" }}>
      <p aria-hidden="true" style={{ position: "absolute", inset: "auto 0 0 0", height: 90, background: "repeating-linear-gradient(90deg,transparent 0 46px,#ffffff10 46px 48px)", margin: 0 }} />
      <p style={{ margin: "0 0 4px", fontSize: 10.4, color: "#9db8a7", textAlign: "center" }}>Barn photograph as printed — ear tags, collar and lane signs in frame; represented structurally.</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, flexWrap: "wrap", position: "relative" }}>
        <div style={{ display: "grid", gap: 6 }}>
          {HEX11.slice(0, 3).map(([d, v], i) => <button key={d} type="button" onClick={() => setH(i)} aria-pressed={h === i} style={{ ...hex(d, v), outline: h === i ? `2px solid ${GREEN}` : "none", outlineOffset: 2 }}>{d}<span style={{ fontSize: 17 }}>{v}</span></button>)}
        </div>
        <button type="button" onClick={() => setH(-1)} aria-pressed={h === -1} style={{ ...hex("0986", "Healthy", true), outline: h === -1 ? "2px solid #fff" : "none", outlineOffset: 2 }}>0986<span style={{ fontSize: 12, fontWeight: 600 }}>Healthy</span></button>
        <div style={{ display: "grid", gap: 6 }}>
          {HEX11.slice(3).map(([d, v], i) => <button key={d} type="button" onClick={() => setH(i + 3)} aria-pressed={h === i + 3} style={{ ...hex(d, v), outline: h === i + 3 ? `2px solid ${GREEN}` : "none", outlineOffset: 2 }}>{d}<span style={{ fontSize: 17 }}>{v}</span></button>)}
        </div>
      </div>
      <p aria-live="polite" style={{ margin: "12px 0 0", textAlign: "center", fontSize: 11.4, color: "#cfe3d6" }}>{h === -1 ? "Cow 0986 — overall state Healthy. Select a hexagon to read a dimension." : `${HEX11[h][0]} ${HEX11[h][1]} — one of the six health dimensions overlaid on the animal in the barn.`}</p>
    </div>
  </Mn>;
}

/* ---------------- 12 — Constraints ---------------- */
const CONS12: Array<[string, string, string]> = [
  ["Sensor signals were virtual and simulated", "The prototype did not connect to live farm sensors; all values were simulated to demonstrate behavior and interaction.", "⬡"],
  ["Farm environment and layout were synthetic", "Barn maps were hand-modeled for clarity, not surveyed from a specific Mengniu facility.", "⬡"],
  ["AI and model logic were illustrative", "Health scores combined simple rules; the production model was out of prototype scope.", "⬡"],
  ["Single-operator, desktop-first scope", "The prototype targeted one operator role on desktop; roles and mobile were scoped out.", "⬡"],
  ["No live farm trial during the prototype", "Evaluation happened in a review setting; field validation was proposed future work (file 19).", "⬡"],
];
export function MengniuConstraints({ n = "12" }: { n?: string }) {
  const [c, setC] = useState(0);
  const card = (i: number, wide?: boolean) => <button key={CONS12[i][0]} type="button" onClick={() => setC(i)} aria-pressed={c === i} style={{ gridColumn: wide ? "1 / -1" : undefined, textAlign: "left", background: "#11161a", border: `1.5px solid ${c === i ? GREEN : "#232a2e"}`, borderRadius: 13, padding: "14px 16px", cursor: "pointer", font: "inherit", color: "#e8eef5" }}>
    <span aria-hidden="true" style={{ fontSize: 21, color: GREEN }}>{CONS12[i][2]}</span>
    <b style={{ display: "block", fontSize: 14.5, margin: "6px 0 4px" }}>{CONS12[i][0]}</b>
    <span aria-hidden="true" style={{ display: "block", width: 34, height: 3, background: GREEN, borderRadius: 2, marginBottom: 7 }} />
    <span style={{ display: "block", fontSize: 11.3, lineHeight: 1.65, color: "#aeb9c2" }}>{CONS12[i][1]}</span>
  </button>;
  return <Mn n={n} title="Constraints" sub="What shaped and bounded this body of work." dark center rule label="Mengniu constraints — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      {card(0)}{card(1)}{card(2)}{card(3)}{card(4, true)}
    </div>
  </Mn>;
}

/* ---------------- 13 — Project Snapshot ---------------- */
const JOURNEY13: Array<[string, string]> = [
  ["Research", "🔍"], ["Synthesis", "🧩"], ["Concepts", "💡"], ["Wireframes", "▦"], ["Visual Design", "🎨"], ["Prototype", "🖥"], ["Interaction", "👆"], ["System Story", "📖"], ["Review", "✔"], ["Handoff", "📦"],
];
export function MengniuSnapshot({ n = "13" }: { n?: string }) {
  const [j, setJ] = useState(9);
  const card = (title: string, body: React.ReactNode) => <div style={{ background: "#fff", border: "1px solid #e6e0cf", borderRadius: 11, padding: "10px 13px" }}><p className="tks-kicker" style={{ marginTop: 0 }}>{title}</p>{body}</div>;
  const p = (t: string) => <p style={{ margin: 0, fontSize: 11.2, lineHeight: 1.65 }}>{t}</p>;
  return <Mn n={n} title="Project Snapshot" sub="One designer, one prototype, ten weeks." cream label="Mengniu project snapshot — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 250px", gap: 9, alignItems: "start" }}>
      {card("The Challenge", p("Dairy operations generate complex, high-volume data that is difficult for operators to interpret quickly. The challenge was to design a system prototype that translates farm and animal data into clear, actionable insight for everyday decision-making."))}
      {card("The Outcome", p("Delivered a comprehensive high-fidelity prototype including dashboards, spatial navigation (minimap), individual animal profiles, and an end-to-end interaction and system story — ready for review and next-step development."))}
      <div style={{ display: "grid", gap: 9 }}>
        {card("Timeline", p("10 weeks — Research and discovery to high-fidelity prototype and handoff. Timeline visuals and detailed case study available separately."))}
        {card("Product Status", p("Prototype — for evaluation and concept communication; not a production system."))}
      </div>
    </div>
    <div style={{ background: "#fff", border: "1px solid #e6e0cf", borderRadius: 11, padding: "10px 13px", marginTop: 9 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Solo Ownership Journey — 10 stops, each personally owned</p>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {JOURNEY13.map(([name, icon], i) => <button key={name} type="button" onClick={() => setJ(i)} aria-pressed={j === i} style={{ flex: 1, background: "transparent", border: "none", cursor: "pointer", font: "inherit", textAlign: "center", padding: "2px 1px", position: "relative", color: "#141a21" }}>
          {i < 9 ? <span aria-hidden="true" style={{ position: "absolute", top: 21, left: "58%", width: "84%", borderTop: `2.5px solid ${GREEN}` }} /> : null}
          <span style={{ display: "block", fontSize: 10.5, fontWeight: 800, color: GREEN }}>{String(i + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" style={{ display: "inline-flex", width: 30, height: 30, borderRadius: "50%", background: j === i ? GREEN : "#eef7f1", border: `1.5px solid ${GREEN}`, alignItems: "center", justifyContent: "center", fontSize: 13, position: "relative", zIndex: 1 }}>{icon}</span>
          <span style={{ display: "block", fontSize: 9.8, fontWeight: 700, lineHeight: 1.3, marginTop: 3 }}>{name}</span>
          <span style={{ display: "block", fontSize: 8.8, color: "#5b6470" }}>Personally owned ✓</span>
        </button>)}
      </div>
    </div>
    <div style={{ display: "flex", marginTop: 9, background: "#fff", border: "1px solid #e6e0cf", borderRadius: 11, overflow: "hidden" }}>
      {[["◉", "User Experience", "Conceptualization of user journeys and interaction flows."], ["▤", "Interface Design", "Layout, components, dashboards, and data visualization."], ["⬡", "Design System", "Typography, color, iconography, and spacing standards."], ["⚙", "Prototyping", "Interactive high-fidelity prototypes for review and testing."]].map(([icon, t, b], i) => <span key={t} style={{ flex: 1, padding: "9px 12px", borderLeft: i ? "1px solid #e6e0cf" : "none" }}><b style={{ display: "block", fontSize: 11.2, color: "#0B6B3A" }}>{icon} {t}</b><span style={{ fontSize: 10.2, lineHeight: 1.55, color: "#4a5462" }}>{b}</span></span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 22px", marginTop: 10, fontSize: 11.2, lineHeight: 1.6 }}>
      {[["⬡", "End-to-end ownership of the full product design process."], ["🎯", "Translated complex operational data into intuitive visuals."], ["🔗", "Connected spatial, animal, and system-level perspectives."], ["▤", "Created scalable foundations for future product development."], ["👆", "Designed interactions optimized for speed and clarity."], ["✔", "Delivered presentation-ready artifacts and a clear system story."]].map(([icon, t]) => <p key={t} style={{ margin: 0 }}><span aria-hidden="true" style={{ color: GREEN, marginRight: 7 }}>{icon}</span>{t}</p>)}
    </div>
  </Mn>;
}

/* ---------------- 14 — Why Dairy Cow Health Matters ---------------- */
const WHY14: Array<[string, string, string]> = [
  ["Healthy Cows, Healthy Foundation", "Healthy cows produce better milk, reproduce more reliably, and live longer, more productive lives.", "🐄🛡"],
  ["From Reactive Care to Proactive Health", "Early detection and prevention reduce disease, stress, and losses — improving welfare and operational outcomes.", "🏠📈"],
  ["Data That Drives Better Decisions", "Continuous monitoring and clear insights enable timely action, optimized resources, and sustainable farming.", "🥛✔"],
];
export function MengniuWhyHealth({ n = "14" }: { n?: string }) {
  const [w, setW] = useState(0);
  return <Mn n={n} title={<span style={{ color: "#0B6B3A" }}>Why Dairy Cow Health Matters</span>} center label="Mengniu why health matters — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 8, alignItems: "start" }}>
      {WHY14.map(([t, b, icon], i) => <span key={t} style={{ display: "contents" }}>
        <button type="button" onClick={() => setW(i)} aria-pressed={w === i} style={{ background: "transparent", border: "none", cursor: "pointer", font: "inherit", textAlign: "center", color: "#141a21", padding: "4px 6px" }}>
          <span aria-hidden="true" style={{ width: 96, height: 96, borderRadius: "50%", border: `2.5px solid ${w === i ? GREEN : "#9db8a7"}`, background: "#eef7f1", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 27 }}>{icon}</span>
          <b style={{ display: "block", fontSize: 13.5, lineHeight: 1.4, marginTop: 10 }}>{t}</b>
          <span aria-hidden="true" style={{ display: "block", width: 40, height: 3, background: GREEN, borderRadius: 2, margin: "7px auto" }} />
          <span style={{ display: "block", fontSize: 11.2, lineHeight: 1.65, color: "#4a5462" }}>{b}</span>
        </button>
        {i < 2 ? <span aria-hidden="true" style={{ fontSize: 24, color: GREEN, alignSelf: "center" }}>→</span> : null}
      </span>)}
    </div>
    <p aria-hidden="true" style={{ margin: "16px 0 0", height: 16, borderRadius: "50%", background: "linear-gradient(180deg,transparent,#d9eadd)" }} />
    <p style={{ margin: "4px 0 0", fontSize: 10.4, color: "#5b6470", textAlign: "center" }}>Pale wave bands run along the bottom edge of the printed slide.</p>
  </Mn>;
}

/* ---------------- 15 — Research Evidence ---------------- */
const HL = ({ children }: { children: React.ReactNode }) => <span style={{ background: "#CDEEDB", borderRadius: 2, padding: "0 2px" }}>{children}</span>;
const RES15: Array<[string, string, string]> = [
  ["Journal of Dairy Science — Review Article", "Transition Period Management and Early Lactation Performance in Dairy Cows", "Focus: Transition health, metabolic balance, and early-lactation performance."],
  ["Journal of Dairy Science — Review Article", "Management and Welfare of Dairy Cows in Automated Milking Systems", "Focus: Automation, cow traffic, and welfare outcomes."],
  ["Applied Animal Behaviour Science — Review", "Housing, Comfort and Lying Behaviour in Dairy Cattle", "Focus: Housing design, comfort, and lying behaviour."],
];
const TAKE15: Array<[string, string, string]> = [
  ["📈", "Production Impact", "Transition management strongly influences milk yield and lactation performance."],
  ["❤", "Health & Welfare", "Comfort and housing design directly affect health outcomes and longevity."],
  ["🤖", "Automation Value", "AMS improves consistency but requires careful traffic and system management."],
];
export function MengniuResearchEvidence({ n = "15" }: { n?: string }) {
  const [a, setA] = useState(0);
  const article = (idx: number, big?: boolean) => <button key={RES15[idx][1]} type="button" onClick={() => setA(idx)} aria-pressed={a === idx} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${a === idx ? GREEN : "#e2e8e2"}`, borderRadius: 12, padding: "11px 13px", cursor: "pointer", font: "inherit", color: "#141a21", width: "100%" }}>
    <span style={{ display: "block", fontSize: 9.8, fontWeight: 800, letterSpacing: "0.07em", color: "#0B6B3A" }}>{RES15[idx][0]}</span>
    <b style={{ display: "block", fontSize: big ? 14.5 : 12.6, lineHeight: 1.4, margin: "3px 0" }}>{RES15[idx][1]}</b>
    <span style={{ display: "block", fontSize: 10.6, lineHeight: 1.6, color: "#4a5462" }}>{RES15[idx][2]}</span>
    {big ? <span style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 9 }}>
      {TAKE15.map(([icon, t, b]) => <span key={t} style={{ borderTop: `2px solid ${GREEN}`, paddingTop: 6 }}><b style={{ display: "block", fontSize: 10.6 }}>{icon} {t}</b><span style={{ fontSize: 9.8, lineHeight: 1.55, color: "#4a5462" }}>{b}</span></span>)}
    </span> : null}
  </button>;
  return <Mn n={n} title="Research Evidence" sub={<>Peer-reviewed findings behind the prototype decisions — on <HL>dairy productivity:</HL> <HL>transition health</HL>, welfare, and <HL>cow longevity:</HL> as the printed slide highlights them.</>} label="Mengniu research evidence — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 9, alignItems: "start" }}>
      {article(0, true)}
      <div style={{ display: "grid", gap: 9 }}>{article(1)}{article(2)}</div>
    </div>
    <p style={{ margin: "11px 0 0", background: "#0B6B3A", color: "#fff", borderRadius: 9, padding: "9px 14px", fontSize: 11.4, lineHeight: 1.6 }}>Peer-reviewed research provides the scientific foundation — the printed footer, transcribed as printed: "This collage summarizes archived research themes related to dairy productivity, transition health, animal welfare, and cow longevity. Exact citations and full references appear in the page caption."</p>
  </Mn>;
}

/* ---------------- 16 — Opportunity Statement ---------------- */
const OPP16 = "How might a farm operator understand the condition of an animal and the state of the barn without reading disconnected sensor systems?";
export function MengniuOpportunity({ n = "16" }: { n?: string }) {
  const [lit, setLit] = useState(false);
  return <Mn n={n} title={<span style={{ fontSize: 15, letterSpacing: "0.14em", color: GREEN, fontWeight: 800 }}>OPPORTUNITY STATEMENT</span>} cream label="Mengniu opportunity statement — interactive rebuild">
    <div style={{ borderTop: "1px solid #d8d2bd", position: "relative", margin: "6px 0 26px" }}><span aria-hidden="true" style={{ position: "absolute", right: 0, top: -9, fontSize: 15 }}>🍃</span></div>
    <button type="button" onClick={() => setLit(!lit)} aria-pressed={lit} style={{ display: "block", width: "100%", textAlign: "left", background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit" }}>
      <span style={{ display: "block", fontSize: 33, lineHeight: 1.45, fontWeight: 650, color: "#12241a", maxWidth: 800 }}>{OPP16.split(" ").map((w, i) => <span key={i} style={{ background: lit && (w === "condition" || w === "state" || w === "disconnected") ? "#CDEEDB" : "transparent", borderRadius: 3 }}>{w} </span>)}</span>
    </button>
    <p style={{ margin: "22px 0 0", fontSize: 11, color: "#5b6470" }}>{lit ? "Key phrases highlighted — the printed slide carries the statement alone, in one uniform colour, on a cream page." : "Select the statement to highlight its three key phrases."}</p>
  </Mn>;
}

/* ---------------- 17 — From Physical Farm to Digital Twin ---------------- */
const LAYERS17: Array<[string, string, string, string[]]> = [
  ["🏠", "Physical Farm Layer", "The real-world foundation", ["Cow", "Barn", "Environment", "Equipment", "Weather"]],
  ["📡", "Sensing & Data Collection Layer", "Continuous capture from the physical world", ["RFID Collars", "Activity Sensors", "Environmental Sensors", "Milking Systems", "Cameras"]],
  ["⚙", "Data Processing Layer", "Turning raw signals into trusted state", ["Ingestion", "Validation", "Normalization", "State Estimation"]],
  ["🖥", "Product Application Layer", "Where operators see, understand, and act", ["Barn Overview", "Selected Cow Profile", "Health Dimensions", "Minimap", "Milking Workflow", "Health Alerts"]],
  ["🧠", "Intelligence & Learning Layer", "Models that improve with data", ["Health Scoring Models", "Anomaly Detection", "Pattern Recognition", "Predictive Insights"]],
  ["⚡", "Action & Feedback Layer", "Closing the loop back to the farm", ["Alerts", "Recommendations", "Interventions", "Outcome Tracking", "Model Refinement"]],
];
const ALERTS17 = ["High Temp. Alert — Cow 0986 · 10:24", "Low Rumination — Cow 0741 · 09:58", "High Respiration — Cow 1125 · 09:41"];
export function MengniuSystemMap({ n = "17" }: { n?: string }) {
  const [l, setL] = useState(3);
  return <Mn n={n} title="From Physical Farm to Digital Twin" sub="End-to-end system story" center rule label="Mengniu system map — interactive rebuild">
    <div style={{ display: "grid", gap: 0 }}>
      {LAYERS17.map(([icon, name, strap, items], i) => <span key={name} style={{ display: "contents" }}>
        <button type="button" onClick={() => setL(i)} aria-pressed={l === i} style={{ display: "grid", gridTemplateColumns: "196px 1fr", gap: 0, textAlign: "left", background: "#fff", border: `1.5px solid ${l === i ? GREEN : "#e2e8e2"}`, borderRadius: 11, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#141a21", padding: 0 }}>
          <span style={{ background: GREEN, color: "#fff", padding: "9px 12px" }}><span aria-hidden="true" style={{ fontSize: 16 }}>{icon}</span><b style={{ display: "block", fontSize: 12.3, lineHeight: 1.3, marginTop: 2 }}>{name}</b><span style={{ display: "block", fontSize: 9.6, color: "#dff2e6", marginTop: 2 }}>{strap}</span></span>
          <span style={{ padding: "8px 11px", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
            {items.map((it) => <span key={it} style={{ border: "1px solid #e2e8e2", background: "#fafcfa", borderRadius: 7, padding: "4px 9px", fontSize: 10.4 }}>{it}{i === 2 ? " →" : ""}</span>)}
            {i === 3 ? <span style={{ flexBasis: "100%", borderTop: "1px dashed #b9cdc2", paddingTop: 5, fontSize: 9.8, color: "#4a5462" }}>Health Alerts: {ALERTS17.join(" · ")}</span> : null}
            {i === 2 || i === 3 ? <span style={{ fontSize: 9.4, color: "#0B6B3A", border: "1px dashed #7fb894", borderRadius: 6, padding: "2px 7px" }}>⇢ feedback loop {i === 2 ? "to Sensing" : "from Action"}</span> : null}
          </span>
        </button>
        {i < 5 ? <span aria-hidden="true" style={{ display: "block", textAlign: "center", color: GREEN, fontSize: 13, lineHeight: 1.2 }}>↓</span> : null}
      </span>)}
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.4, color: "#5b6470", textAlign: "center" }}>Dashed loops as printed: Action & Feedback returns outcomes to the Intelligence layer and to the Physical Farm.</p>
  </Mn>;
}

/* ---------------- 18 — Real Farm and Simulated Farm ---------------- */
export function MengniuRealVsSim({ n = "18" }: { n?: string }) {
  const [side, setSide] = useState(0);
  const barnArt = (sim: boolean) => <span aria-hidden="true" style={{ display: "block", height: 190, borderRadius: 9, position: "relative", overflow: "hidden", background: sim ? "linear-gradient(180deg,#2c3e33 0%,#1d2a22 60%,#141d17 100%)" : "linear-gradient(180deg,#4a3b2a 0%,#33291d 60%,#241d15 100%)" }}>
    <span style={{ position: "absolute", inset: "18% 12% 8%", border: "2px solid #ffffff2e", borderRadius: 6, background: "repeating-linear-gradient(90deg,transparent 0 34px,#ffffff14 34px 36px)" }} />
    <span style={{ position: "absolute", left: "47%", top: 0, bottom: 0, width: 14, background: "#ffffff1c" }} />
    <span style={{ position: "absolute", left: "30%", top: "38%", fontSize: 20 }}>{sim ? "🐄" : "🐄"}</span>
    <span style={{ position: "absolute", left: "58%", top: "55%", fontSize: 20 }}>🐄</span>
    {sim ? <span style={{ position: "absolute", right: 10, top: 8, fontSize: 9.5, color: "#9fe8bb", border: "1px solid #35D07F", borderRadius: 999, padding: "1px 8px" }}>3D TWIN</span> : null}
  </span>;
  const panelBtn = (idx: number, badge: string, caption: string, sim: boolean) => <button type="button" onClick={() => setSide(idx)} aria-pressed={side === idx} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit", textAlign: "left", color: "#e8eef5" }}>
    <span style={{ display: "block", position: "relative", outline: side === idx ? `2px solid ${GREEN}` : "2px solid transparent", outlineOffset: 3, borderRadius: 9 }}>
      {barnArt(sim)}
      <span aria-hidden="true" style={{ position: "absolute", left: 10, top: 8, width: 26, height: 26, borderRadius: "50%", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 14, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{badge}</span>
    </span>
    <span style={{ display: "block", textAlign: "center", marginTop: 10 }}><span style={{ border: "1px solid #3a4540", borderRadius: 999, padding: "3px 14px", fontSize: 11, color: "#cfe3d6" }}>{caption}</span></span>
  </button>;
  return <Mn n={n} title={<span style={{ color: "#fff" }}>Real Farm and Simulated Farm</span>} dark center label="Mengniu real vs simulated farm — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      {panelBtn(0, "A", "Real environment reference", false)}
      {panelBtn(1, "B", "Simulated digital twin", true)}
    </div>
    <p style={{ margin: "16px auto 0", textAlign: "center", fontSize: 11.6, color: "#aeb9c2", maxWidth: 640 }}>The simulated digital twin preserves the spatial logic and workflow of the real barn while abstracting detail for interaction and simulation.</p>
  </Mn>;
}

/* ---------------- 19 — Scope Boundary ---------------- */
const BUILT19: Array<[string, string]> = [
  ["🖥", "Interactive dashboard and spatial barn views"],
  ["🐄", "Individual cow profile with health dimensions"],
  ["▦", "Minimap with pen-level selection"],
  ["🥛", "Automated milking workflow visualization"],
  ["⬡", "Simulated sensor data and state logic"],
  ["📖", "End-to-end interaction and system story"],
];
const PROPOSED19: Array<[string, string]> = [
  ["📡", "Live sensor and RFID integration"],
  ["☁", "Production data platform and APIs"],
  ["🧠", "Trained health models on farm data"],
  ["👥", "Multi-role access and farm management"],
  ["🔔", "Real alerting, tasks, and escalation"],
];
export function MengniuScope({ n = "19" }: { n?: string }) {
  const [s, setS] = useState(-1);
  const panelList = (items: Array<[string, string]>, color: string, offset: number) => <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
    {items.map(([icon, t], i) => <li key={t}><button type="button" onClick={() => setS(offset + i)} aria-pressed={s === offset + i} style={{ width: "100%", textAlign: "left", background: s === offset + i ? "#f4f8f5" : "transparent", border: "none", borderBottom: "1px solid #e6ece6", padding: "8px 6px", cursor: "pointer", font: "inherit", fontSize: 11.8, color: "#141a21", display: "flex", gap: 9, alignItems: "center" }}><span aria-hidden="true" style={{ color, fontSize: 14 }}>{icon}</span>{t}</button></li>)}
  </ul>;
  return <Mn n={n} title="Scope Boundary" center label="Mengniu scope boundary — interactive rebuild">
    <span aria-hidden="true" style={{ display: "block", height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${GREEN}, ${BLUE})`, boxShadow: `0 0 10px ${GREEN}66`, margin: "0 auto 12px", maxWidth: 420 }} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignItems: "start" }}>
      <div style={{ background: "#fff", border: `1.5px solid ${GREEN}`, borderRadius: 12, padding: "12px 14px" }}>
        <b style={{ display: "block", fontSize: 14, color: GREEN, marginBottom: 6 }}>Built in the Prototype</b>
        {panelList(BUILT19, GREEN, 0)}
      </div>
      <div style={{ background: "#fff", border: `1.5px solid ${BLUE}`, borderRadius: 12, padding: "12px 14px" }}>
        <b style={{ display: "block", fontSize: 14, color: BLUE, marginBottom: 6 }}>Proposed Integration</b>
        {panelList(PROPOSED19, BLUE, 10)}
      </div>
    </div>
  </Mn>;
}

/* ---------------- 20 — Product Goals and Priorities ---------------- */
const GOALS20: Array<[string, string, string]> = [
  ["⬡", "Clarity at a Glance", "Operators should understand barn and herd status within seconds of opening the product."],
  ["🐄", "Animal-Centred Insight", "Every view connects data back to an individual animal and its wellbeing."],
  ["⚡", "Fast, Confident Action", "Prioritized alerts and clear next steps reduce hesitation and error."],
  ["🔗", "Trusted Data", "Provenance and freshness are always visible, so decisions rest on evidence."],
  ["▦", "Spatial Understanding", "The barn's layout is the interface — location is never abstract."],
  ["🌱", "Scalable Foundation", "Structures and systems that grow from one barn to a whole operation."],
];
export function MengniuGoals({ n = "20" }: { n?: string }) {
  const [g, setG] = useState(-1);
  return <Mn n={n} title={<>Product Goals<br /><span style={{ color: "#35D07F" }}>and Priorities</span></>} dark rule label="Mengniu product goals — interactive rebuild">
    <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.35fr", gap: 14, alignItems: "start" }}>
      <p style={{ margin: 0, fontSize: 11.4, lineHeight: 1.7, color: "#aeb9c2" }}>The left half of the printed slide is a barn photograph (represented structurally across this deck). Six goals, in priority order, framed every design decision in the prototype.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 9 }}>
        {GOALS20.map(([icon, t, b], i) => <button key={t} type="button" onClick={() => setG(i)} aria-pressed={g === i} style={{ textAlign: "center", background: "#11161a", border: `1.5px solid ${g === i ? "#35D07F" : "#232a2e"}`, borderRadius: 12, padding: "12px 13px", cursor: "pointer", font: "inherit", color: "#e8eef5" }}>
          <span aria-hidden="true" style={{ width: 44, height: 38, background: "#12241a", border: "1.5px solid #35D07F", clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#35D07F" }}>{icon}</span>
          <b style={{ display: "block", fontSize: 12.8, margin: "7px 0 3px" }}>{t}</b>
          <span style={{ display: "block", fontSize: 10.4, lineHeight: 1.6, color: "#aeb9c2" }}>{b}</span>
        </button>)}
      </div>
    </div>
  </Mn>;
}

/* ---------------- dispatcher ---------------- */
/** Source-screen number for each of the 34 files (duplicates map to their
 *  source screen's position in the 20-screen sequence). */
const SRC20: Record<string, string> = {
  "1": "01", "2": "02", "3": "03", "4": "04", "5": "05", "6": "06", "7": "07", "8": "08", "9": "09", "10": "10",
  "11": "11", "12": "12", "13": "13", "14": "14", "15": "15", "16": "16", "17": "17", "18": "18", "19": "19", "20": "20",
  "21": "03", "22": "15", "23": "17", "24": "09", "25": "08", "26": "06", "27": "16", "28": "13", "29": "04", "30": "01",
  "31": "05", "32": "02", "33": "19", "34": "11",
};
export function mengniuChapterFor(fileName: string): React.ReactNode {
  const m = fileName.match(/(\d+)\.webp$/);
  if (!m) return null;
  const key = String(parseInt(m[1], 10));
  const n = SRC20[key];
  if (!n) return null;
  switch (n) {
    case "01": return <MengniuTaxonomy n={n} />;
    case "02": return <MengniuVisualDirection n={n} />;
    case "03": return <MengniuHealthModel n={n} />;
    case "04": return <MengniuResearchMatrix n={n} />;
    case "05": return <MengniuUserTaskModel n={n} />;
    case "06": return <MengniuIA n={n} />;
    case "07": return <MengniuInteractionFlow n={n} />;
    case "08": return <MengniuWireframeBoard n={n} />;
    case "09": return <MengniuHealthExplorations n={n} />;
    case "10": return <MengniuMinimap n={n} />;
    case "11": return <MengniuCowOverlay n={n} />;
    case "12": return <MengniuConstraints n={n} />;
    case "13": return <MengniuSnapshot n={n} />;
    case "14": return <MengniuWhyHealth n={n} />;
    case "15": return <MengniuResearchEvidence n={n} />;
    case "16": return <MengniuOpportunity n={n} />;
    case "17": return <MengniuSystemMap n={n} />;
    case "18": return <MengniuRealVsSim n={n} />;
    case "19": return <MengniuScope n={n} />;
    case "20": return <MengniuGoals n={n} />;
    default: return null;
  }
}
