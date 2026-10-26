import { useState, type CSSProperties, type ReactNode } from "react";
import "./tokenta-slides.css";

/**
 * Pass-2 rebuilds for the four DeepVise files that previously fell back
 * to title-matched ProjectScreens components (01 executive dashboard —
 * also duplicated at slot 24; 13/15 both showed an unrelated dual-port
 * selector). Transcribed from the original images:
 *  01 — dark machine-health dashboard hero for P-01-042
 *  13 — ACT III Challenge Statement and Success Criteria
 *  15 — Two-Sided Service Blueprint (6 lanes × 8 stages, E1–E32)
 *  24 — Concept alternatives and tradeoff (3 directions)
 * Deck language: ink #0B1726, navy #102A43, canvas #F6F8FB, cyan #12C7D4,
 * blue #2F80ED, violet #6C5CE7, warning #D99A2B, critical #D95C5C.
 */

const CYAN = "#12C7D4";
const BLUE = "#2F80ED";
const AMBER = "#D99A2B";
const RED = "#D95C5C";
const INK = "#0B1726";
const NAVY = "#102A43";

function Shell({ n, label, children, dark, foot }: { n: string; label: string; children: ReactNode; dark?: boolean; foot?: string }) {
  return <div className="tks" role="region" aria-label={label} style={dark ? { background: INK, color: "#e8eef5" } : { background: "#F6F8FB" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
      <span style={{ fontWeight: 800, fontSize: 13 }}><span style={{ color: CYAN }}>◆</span> DeepVise</span>
      <span style={{ fontSize: 10.5, color: dark ? "#8fa5bd" : "#7c8798", fontFamily: "ui-monospace,Menlo,monospace" }}>{n} / 32 · DEEPVISE</span>
    </div>
    {children}
    <div style={{ marginTop: 12, borderTop: `1px solid ${dark ? "#22344d" : "#dde4ec"}`, paddingTop: 7, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: dark ? "#8fa5bd" : "#7c8798", display: "flex", justifyContent: "space-between" }}>
      <span>DeepVise — Federated Enterprise Health Intelligence</span><span>{foot ?? "Transcribed from the printed slide"}</span>
    </div>
  </div>;
}

/* ---------------- 01 — P-01-042 dashboard hero ---------------- */
export function DeepViseDashboardHero() {
  const [tab, setTab] = useState(0);
  const tabs = ["Overview", "Health", "Vibration", "Events", "Maintenance", "Data", "Credit Review", "Audit"];
  const [decision, setDecision] = useState<string | null>(null);
  return <Shell n="01" label="DeepVise executive platform dashboard — rebuild of DeepVise_01" dark foot="Reconstructed · Demo data">
    <div style={{ display: "grid", gridTemplateColumns: "212px 1fr", gap: 14, alignItems: "stretch" }}>
      <div style={{ background: "linear-gradient(160deg,#132030,#0B1726)", border: "1px solid #22344d", borderRadius: 13, padding: "16px 15px", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 21, fontWeight: 800 }}>DeepVise</div>
        <span style={{ width: 34, height: 3, background: CYAN, borderRadius: 2, margin: "7px 0 14px" }} />
        <p style={{ fontSize: 16.5, fontWeight: 700, lineHeight: 1.45, margin: 0 }}>Private machine intelligence for predictive maintenance and explainable credit review.</p>
        <img src="/projects/crops/deepvise/press-hero.jpg" alt="Servo press photograph from the original slide (crop, no text)" style={{ marginTop: "auto", paddingTop: 14, width: "100%", height: 148, objectFit: "cover", borderRadius: 9, display: "block" }} />
      </div>
      <div style={{ background: "#0e1c2e", border: "1px solid #22344d", borderRadius: 13, overflow: "hidden", fontSize: 11 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 13px", borderBottom: "1px solid #22344d", color: "#c6d2e0" }}>
          <span>Machines &nbsp;›&nbsp; <b style={{ color: "#fff" }}>P-01-042</b></span>
          <span style={{ color: "#8fa5bd" }}>Reconstructed · Demo data ⓘ</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "40px 1fr" }}>
          <div style={{ borderRight: "1px solid #22344d", display: "flex", flexDirection: "column", alignItems: "center", gap: 13, padding: "12px 0", fontSize: 13 }}>
            {["⌂", "📈", "〰", "🔧", "📄", "🛡", "👥"].map((g, i) => <span key={g} style={{ color: i === 0 ? CYAN : "#7d93ad", borderLeft: i === 0 ? `2.5px solid ${CYAN}` : "2.5px solid transparent", paddingLeft: 3 }}>{g}</span>)}
            <span style={{ marginTop: "auto", color: "#7d93ad" }}>⚙</span>
          </div>
          <div style={{ padding: "10px 13px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span><b style={{ fontSize: 21, color: "#fff" }}>P-01-042</b><br /><span style={{ color: "#9fb2c8" }}>Servo Press Line &nbsp;•&nbsp; Plant A</span></span>
              <span style={{ color: "#9fb2c8" }}><span style={{ color: CYAN }}>DV-HM-0.9.3</span> · Updated 08 Dec 2024</span>
            </div>
            <div style={{ display: "flex", gap: 13, borderBottom: "1px solid #22344d", margin: "8px 0 10px" }}>
              {tabs.map((t, i) => <button key={t} type="button" onClick={() => setTab(i)} aria-pressed={i === tab} style={{ background: "none", border: "none", borderBottom: i === tab ? `2.5px solid ${CYAN}` : "2.5px solid transparent", color: i === tab ? "#fff" : "#9fb2c8", padding: "3px 1px", cursor: "pointer", font: "inherit", fontSize: 11 }}>{t}</button>)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.65fr 1fr", gap: 11 }}>
              <div>
                <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "9px 11px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><b style={{ color: "#fff" }}>Health score trend</b><span style={{ color: "#8fa5bd" }}>Last 30 days ▾</span></div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "3px 0" }}>
                    <span style={{ fontSize: 27, fontWeight: 800, color: AMBER }}>72</span><span style={{ color: "#9fb2c8" }}>/100</span>
                    <span style={{ color: AMBER, fontWeight: 700 }}>Warning ↝</span>
                    <span style={{ marginLeft: "auto", fontSize: 9.8, color: "#9fb2c8", textAlign: "right" }}>✓ Healthy 80–100<br />⚠ Warning 50–79<br />◉ Critical 0–49</span>
                  </div>
                  <svg viewBox="0 0 300 74" style={{ width: "100%", height: 62, display: "block" }} aria-hidden="true">
                    <line x1="24" y1="8" x2="296" y2="8" stroke="#12C7D4" strokeDasharray="3 3" strokeWidth="1" />
                    <line x1="24" y1="26" x2="296" y2="26" stroke="#D99A2B" strokeDasharray="2 3" strokeWidth="1" />
                    <line x1="24" y1="56" x2="296" y2="56" stroke="#D95C5C" strokeDasharray="2 3" strokeWidth="1" />
                    <polyline points="24,30 60,26 96,29 132,25 168,28 204,26 240,28 262,34 282,44 296,52" fill="none" stroke="#D99A2B" strokeWidth="2" strokeDasharray="0" />
                    <polyline points="262,34 282,44 296,52" fill="none" stroke="#D95C5C" strokeWidth="2" strokeDasharray="3 2" />
                    {[100, 80, 60, 40, 20, 0].map((v, i) => <text key={v} x="2" y={12 + i * 11} fontSize="7.5" fill="#7d93ad">{v}</text>)}
                    {["Nov 10", "Nov 17", "Nov 24", "Dec 1", "Dec 8"].map((d, i) => <text key={d} x={24 + i * 66} y="72" fontSize="7.5" fill="#7d93ad">{d}</text>)}
                  </svg>
                </div>
                <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "8px 11px", marginTop: 9, display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ color: "#8b7cf0", fontSize: 17 }}>〰</span>
                  <span style={{ flex: 1 }}><span style={{ color: "#8fa5bd", fontSize: 9.8 }}>Latest anomaly</span><br /><b style={{ color: "#fff" }}>Vibration anomaly detected</b><br /><span style={{ color: "#9fb2c8" }}>08 Dec 2024, 02:14</span> <span style={{ border: "1px solid #6C5CE7", color: "#b3a6f5", borderRadius: 5, padding: "0 6px", fontSize: 9.5 }}>Under review</span></span>
                  <span style={{ color: "#7d93ad" }}>›</span>
                </div>
              </div>
              <div style={{ border: "1px solid #22344d", borderRadius: 10, padding: "9px 11px" }}>
                <b style={{ color: "#fff" }}>Credit review <span style={{ color: "#8fa5bd", fontWeight: 400 }}>(P-01-042)</span></b>
                <p style={{ color: AMBER, fontWeight: 800, fontSize: 13.5, margin: "7px 0" }}>⚠ Review recommended</p>
                <div style={{ display: "grid", gap: 5, color: "#9fb2c8" }}>
                  <span style={{ display: "flex", justifyContent: "space-between" }}>Confidence <b style={{ color: AMBER }}>Medium</b></span>
                  <span style={{ display: "flex", justifyContent: "space-between" }}>Signal freshness <b style={{ color: "#2fbf9b" }}>Fresh (0–24h)</b></span>
                  <span style={{ display: "flex", justifyContent: "space-between" }}>Model <b style={{ color: CYAN }}>DV-HM-0.9.3</b></span>
                  <span style={{ display: "flex", justifyContent: "space-between" }}>Updated <b style={{ color: "#e8eef5" }}>08 Dec 2024</b></span>
                </div>
                <div style={{ border: "1px solid #2c4258", borderRadius: 8, padding: "7px 9px", marginTop: 9, display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 15 }}>👤</span><span><b style={{ color: "#fff" }}>Human approval required</b><br /><span style={{ color: "#9fb2c8" }}>No automated decision</span></span>
                </div>
                <div style={{ display: "flex", gap: 5, marginTop: 9 }}>
                  {["Approve", "Modify", "Reject"].map((d) => <button key={d} type="button" onClick={() => setDecision(d)} aria-pressed={decision === d} style={{ flex: 1, background: decision === d ? CYAN : "transparent", color: decision === d ? INK : "#c6d2e0", border: `1px solid ${CYAN}`, borderRadius: 6, padding: "3px 0", cursor: "pointer", font: "inherit", fontSize: 10.5, fontWeight: 700 }}>{d}</button>)}
                </div>
                {decision ? <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 10, color: "#9fb2c8" }}>{decision} recorded for human review — no automated decision is made.</p> : null}
              </div>
            </div>
            <p style={{ margin: "9px 0 0", color: "#8fa5bd", fontSize: 10 }}>🛡 Privacy first &nbsp;·&nbsp; Data stays with you &nbsp;·&nbsp; Access controlled &nbsp;·&nbsp; Fully auditable <span style={{ float: "right" }}>All times UTC</span></p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, marginTop: 13, background: "#0d1a2b", border: "1px solid #22344d", borderRadius: 11 }}>
      {[["👤", "Solo Product Designer and Developer"], ["📅", "2024 FinTechathon competition prototype"], ["</>", "Built with FATE"]].map(([i, t], ix) => <div key={t} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 16px", borderLeft: ix ? "1px solid #22344d" : "none" }}><span style={{ width: 30, height: 30, flex: "none", borderRadius: "50%", border: `1.5px solid ${ix === 2 ? "#6C5CE7" : CYAN}`, color: ix === 2 ? "#b3a6f5" : CYAN, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>{i}</span><b style={{ fontSize: 12.5 }}>{t}</b></div>)}
    </div>
  </Shell>;
}

/* ---------------- 13 — ACT III Challenge Statement ---------------- */
const CRITERIA13: Array<[string, string, string]> = [
  ["Warn earlier using multi-source evidence.", "DEMONSTRATED", "#2F80ED"],
  ["Improve cross-factory model learning without centralizing raw data.", "DEMONSTRATED", "#2F80ED"],
  ["Keep factory control over data, participation and permissions.", "DESIGNED", "#6C5CE7"],
  ["Turn prediction into an actionable maintenance decision.", "DEMONSTRATED", "#2F80ED"],
  ["Provide current, explainable asset evidence for human credit review.", "TARGET", "#D99A2B"],
];
export function DeepViseChallenge() {
  const [sel, setSel] = useState(0);
  return <Shell n="13" label="DeepVise challenge statement and success criteria — rebuild of DeepVise_13">
    <p style={{ margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: BLUE }}>ACT III</p>
    <h3 style={{ fontSize: 30, margin: "4px 0 3px", color: INK }}>Challenge Statement and Success Criteria</h3>
    <p style={{ margin: "0 0 13px", color: "#55606e" }}>Turn a broad competition direction into a focused product mandate and make later design decisions auditable.</p>
    <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 16, alignItems: "start" }}>
      <div style={{ background: "linear-gradient(165deg,#102A43,#0B1726)", color: "#e8eef5", borderRadius: 14, padding: "18px 20px" }}>
        <p style={{ margin: 0, color: CYAN, fontSize: 11, fontWeight: 800, letterSpacing: "0.14em" }}>CHALLENGE STATEMENT</p>
        <p style={{ fontSize: 21.5, fontWeight: 700, lineHeight: 1.42, margin: "10px 0 16px" }}>How might one privacy-preserving system help factories act on machine risk earlier and help lenders review productive-asset risk with fresher evidence?</p>
        <div style={{ borderTop: "1px solid #2c4258", paddingTop: 12, display: "flex", gap: 12 }}>
          <span style={{ width: 40, height: 40, flex: "none", borderRadius: "50%", border: `1.5px solid ${CYAN}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🛡</span>
          <div><p style={{ margin: 0, color: CYAN, fontSize: 10.5, fontWeight: 800, letterSpacing: "0.12em" }}>SOURCE AND EVIDENCE BOUNDARY</p>
            <p style={{ margin: "5px 0 0", fontSize: 11.5, lineHeight: 1.55, color: "#c6d2e0" }}>Challenge-direction items 1, 2 and 4 support cross-factory prediction, maintenance optimization and multimodal health scoring.</p>
            <p style={{ margin: "5px 0 0", fontSize: 11.5, lineHeight: 1.55, color: "#c6d2e0" }}>The finance criterion is supported by the original deck but is not part of the core challenge text; label it as the team's added product layer.</p></div>
        </div>
        <div style={{ borderTop: "1px solid #2c4258", paddingTop: 12, marginTop: 12, display: "flex", gap: 12 }}>
          <span style={{ width: 40, height: 40, flex: "none", borderRadius: "50%", border: "1.5px solid #6C5CE7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📋</span>
          <div><p style={{ margin: 0, color: "#b3a6f5", fontSize: 10.5, fontWeight: 800, letterSpacing: "0.12em" }}>PRODUCTION METHOD</p>
            <p style={{ margin: "5px 0 0", fontSize: 11.5, lineHeight: 1.6, color: "#c6d2e0" }}>• Build as a vector editorial board.<br />• Add numerical targets only after a real evaluation baseline is available.<br />• No motion is required. A gentle criterion highlight may follow the reader's scroll position.</p></div>
        </div>
      </div>
      <div>
        {CRITERIA13.map(([text, status, c], i) => <button key={text} type="button" onClick={() => setSel(i)} aria-pressed={i === sel} style={{ display: "flex", gap: 14, width: "100%", textAlign: "left", background: i === sel ? "#eef4fa" : "transparent", border: "none", borderBottom: "1px solid #dde4ec", padding: "10px 6px", cursor: "pointer", font: "inherit" }}>
          <span style={{ fontSize: 30, fontWeight: 300, color: "#12a5b4", lineHeight: 1, width: 44, flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
          <span><b style={{ fontSize: 13.5, color: INK, lineHeight: 1.4 }}>{text}</b><br /><span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", color: c }}>EVIDENCE STATUS: {status}</span></span>
        </button>)}
        <div style={{ border: "1.5px dashed #b9c6d4", borderRadius: 9, padding: "8px 12px", marginTop: 10, fontSize: 11, color: "#55606e" }}><b style={{ color: INK }}>TEAM'S ADDED PRODUCT LAYER:</b> This finance criterion supports lender workflows and is not part of the core challenge text.</div>
      </div>
    </div>
    <p style={{ margin: "12px 0 0", fontSize: 11.5, color: "#55606e" }}>ⓘ Acceptance criteria: The statement includes user, problem and constraint in one sentence. <span style={{ color: "#b9c6d4" }}>|</span> Every criterion can be revisited in the final evidence section.</p>
  </Shell>;
}

/* ---------------- 15 — Two-Sided Service Blueprint ---------------- */
const STAGES15 = ["Normal monitoring", "Change detected", "Investigation", "Maintenance action", "Local validation", "Signal permission", "Credit review", "Audit close"];
type Lane15 = { name: string; icon: string; cells: string[]; back?: string[]; ev: Array<[string, string, string]>; evColor: string };
const LANES15: Lane15[] = [
  { name: "Machine and sensors", icon: "📡", evColor: "#2F80ED", ev: [], cells: ["Telemetry and health metrics within normal range", "Anomaly detected by edge analytics", "Diagnostic data captured locally (no raw export)", "Maintenance performed and issue addressed", "Post-maintenance checks pass locally", "Consent granted to release derived signal", "Credit decision implemented (if approved)", "Case closed and evidence archived for audit"] },
  { name: "Factory user", icon: "👤", evColor: "#2F80ED", ev: [], cells: ["Monitor assets and operations", "Alert received and acknowledged", "Review insights and root cause candidates", "Create work order and perform maintenance", "Confirm resolution and results", "Provide consent with purpose and scope", "Respond to lender questions as requested", "Review summary and close case"] },
  { name: "DeepVise application", icon: "⬡", evColor: "#2F80ED", cells: ["Ingest and visualize operational data (dashboards)", "Detect and score anomaly (model v3.2), notify user", "Correlate signals and suggest next steps", "Track maintenance workflow and evidence capture", "Validate outcome and prepare update package", "Evaluate data use request and save consent", "Share derived signal and context (no raw data)", "Archive case pack and link evidence"],
    back: ["Edge gateway policy enforcement and buffering", "Local preprocessing and feature extraction", "Event aggregation and feature store (write)", "Workflow orchestration and task management", "Outcome scoring and data quality checks", "Data sharing service with consent controls", "Composite signal assembly and lineage tagging", "Case repository and retention management"],
    ev: [["E1", "Model distribution record", "Owner: FATE · Expiry: 180 days"], ["E2", "Training audit log", "Owner: Factory IT · Expiry: 180 days"], ["E3", "Local training report", "Owner: Factory Data Scientist · Expiry: 180 days"], ["E4", "Protected update transfer log", "Owner: FATE · Expiry: 180 days"], ["E5", "Aggregation report", "Owner: FATE · Expiry: 180 days"], ["E6", "Global model package", "Owner: FATE · Expiry: 180 days"], ["E7", "Model performance report", "Owner: FATE · Expiry: 180 days"], ["E8", "Model registry entry (v3.3)", "Owner: FATE · Expiry: 7 years"]] },
  { name: "Enterprise finance", icon: "🏦", evColor: "#0e7c86", cells: ["Budget and policy setup", "Threshold and alerting alignment", "Impact assessment (operations and features)", "Cost tracking for maintenance action", "Validate costs and savings (if any)", "Approve data release per consent and policy", "Review credit implications and recommendation", "Reconcile loan records and conditions"],
    ev: [["E9", "Policy record", "Owner: Finance · Expiry: 2 years"], ["E10", "Threshold config record", "Owner: Finance · Expiry: 3 years"], ["E11", "Impact assessment", "Owner: Finance · Expiry: 3 years"], ["E12", "Maintenance cost record", "Owner: Finance · Expiry: 3 years"], ["E13", "Outcome validation", "Owner: Finance · Expiry: 3 years"], ["E14", "Consent record", "Owner: Finance · Expiry: 24 months"], ["E15", "Finance review memo", "Owner: Finance · Expiry: 3 years"], ["E16", "Loan record update", "Owner: Finance · Expiry: 7 years"]] },
  { name: "Lender risk", icon: "🛡", evColor: "#D99A2B", cells: ["Risk appetite and policy setup", "Portfolio monitoring (no raw telemetry)", "Significance assessment", "Request clarification (if needed)", "Policy and eligibility checks", "Derived signal received with lineage", "Reviewer decision (approve / decline / refer)", "Implement decision and notify finance"],
    ev: [["E17", "Risk policy record", "Owner: Lender Risk · Expiry: 2 years"], ["E18", "Monitoring summary", "Owner: Lender Risk · Expiry: 2 years"], ["E19", "Assessment note", "Owner: Lender Risk · Expiry: 3 years"], ["E20", "Query log", "Owner: Lender Risk · Expiry: 3 years"], ["E21", "Policy check result", "Owner: Lender Risk · Expiry: 3 years"], ["E22", "Derived signal log", "Owner: Lender Risk · Expiry: 24 months"], ["E23", "Decision record", "Owner: Lender Risk · Expiry: 7 years"], ["E24", "Decision notification", "Owner: Lender Risk · Expiry: 7 years"]] },
  { name: "Governance and audit", icon: "⚖", evColor: "#D95C5C", cells: ["Control framework and data classification", "Anomaly alert control check", "Investigation oversight", "Change management and approvals", "Validation evidence review", "Consent verification and data sharing approval", "Second approval (where required)", "Formal audit closure"],
    ev: [["E25", "Control framework", "Owner: Governance · Expiry: 7 years"], ["E26", "Alert review log", "Owner: Governance · Expiry: 7 years"], ["E27", "Investigation log", "Owner: Governance · Expiry: 7 years"], ["E28", "Change approval record", "Owner: Governance · Expiry: 7 years"], ["E29", "Validation review record", "Owner: Governance · Expiry: 7 years"], ["E30", "Consent & sharing approval", "Owner: Governance · Expiry: 7 years"], ["E31", "Second approval record", "Owner: Governance · Expiry: 7 years"], ["E32", "Audit close report", "Owner: Governance · Expiry: 7 years"]] },
];
export function DeepViseBlueprint() {
  const [stage, setStage] = useState(5);
  const cell: CSSProperties = { border: "1px solid #c8d4e2", borderRadius: 6, padding: "4px 5px", fontSize: 8.6, lineHeight: 1.35, background: "#fff", color: "#22344d" };
  return <Shell n="15" label="DeepVise two-sided service blueprint — rebuild of DeepVise_15">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14 }}>
      <div><h3 style={{ fontSize: 27, margin: 0, color: INK }}>Two-Sided Service Blueprint</h3>
        <p style={{ margin: "3px 0 0", color: "#55606e", fontSize: 12 }}>The service is complete only when an anomaly becomes a documented action and every data crossing has an owner, purpose and expiry.</p></div>
      <div style={{ flex: "none", fontSize: 10, color: "#55606e", display: "grid", gap: 3 }}>
        <span><i style={{ display: "inline-block", width: 11, height: 11, background: BLUE, borderRadius: 2, marginRight: 5 }} />Built (frontstage)</span>
        <span><i style={{ display: "inline-block", width: 11, height: 11, border: "1.5px dashed #7c93ad", borderRadius: 2, marginRight: 5 }} />Proposed (frontstage)</span>
        <span><i style={{ display: "inline-block", width: 11, height: 11, border: "1px solid #c8d4e2", borderRadius: 2, marginRight: 5 }} />Backstage process</span>
        <span>📄 Evidence (object)</span>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "86px repeat(8,1fr)", gap: 4, marginTop: 11 }}>
      <span style={{ fontSize: 9.5, color: "#7c8798", alignSelf: "end" }}>Lane / Stage</span>
      {STAGES15.map((s, i) => <button key={s} type="button" onClick={() => setStage(i)} aria-pressed={i === stage} style={{ background: NAVY, color: "#fff", border: "none", borderRadius: 6, padding: "5px 4px", cursor: "pointer", font: "inherit", fontSize: 9.3, fontWeight: 700, outline: i === stage ? `2.5px solid ${CYAN}` : "none" }}><span style={{ display: "inline-flex", width: 14, height: 14, borderRadius: "50%", background: BLUE, alignItems: "center", justifyContent: "center", fontSize: 8.5, marginRight: 3 }}>{i + 1}</span>{s}</button>)}
      {LANES15.map((lane) => <span key={lane.name} style={{ display: "contents" }}>
        <span style={{ ...cell, background: "#eef2f7", fontWeight: 700, display: "flex", gap: 4, alignItems: "center" }}>{lane.icon} {lane.name}</span>
        {lane.cells.map((c, ci) => <span key={ci} style={{ ...cell, background: ci === stage ? "#e8f1fd" : "#fff", borderStyle: lane.name === "DeepVise application" ? "solid" : "solid" }}>{ci === 1 && lane.name === "Machine and sensors" ? "⚠ " : ""}{c}{lane.name === "Governance and audit" && ci === 6 ? <b style={{ display: "block", color: RED, marginTop: 2 }}>SECOND APPROVAL REQUIRED</b> : null}</span>)}
        {lane.back ? <><span style={{ ...cell, background: "transparent", border: "none", fontSize: 8.3, color: "#7c8798" }}>backstage ↓</span>{lane.back.map((b, bi) => <span key={bi} style={{ ...cell, background: "#f4f7fa", color: "#55606e" }}>{b}</span>)}</> : null}
        {lane.ev.length ? <><span style={{ ...cell, background: "transparent", border: "none", fontSize: 8.3, color: "#7c8798" }}>evidence ↓</span>{lane.ev.map(([id, name, meta]) => <span key={id} style={{ ...cell, borderColor: lane.evColor, background: "#fff" }}><b style={{ color: lane.evColor }}>{id}</b> {name}<br /><span style={{ color: "#7c8798" }}>{meta}</span></span>)}</> : null}
      </span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr 1.1fr 1.6fr", gap: 10, marginTop: 11, borderTop: "1px solid #dde4ec", paddingTop: 8, fontSize: 9.8, color: "#55606e" }}>
      <span><b style={{ color: INK }}>Legend</b> — → Frontstage interaction · - - - Backstage flow · 📄 Evidence object</span>
      <span><b style={{ color: INK }}>Owners (examples):</b> Factory User, Factory Data Scientist/IT, DeepVise Data Steward, FATE Admin, Finance Manager, Lender Risk Analyst, Governance Officer</span>
      <span><b style={{ color: INK }}>Purpose (examples):</b> Operate assets, improve reliability, update models securely, assess risk, support credit decision, ensure compliance and accountability</span>
      <span><b style={{ color: INK }}>Expiry (examples):</b> 24 months, 180 days, 2 years, 3 years, 7 years (see evidence objects for specifics)</span>
      <span style={{ border: "1px solid #c8d4e2", borderRadius: 7, padding: "5px 8px" }}><b style={{ color: INK }}>Source and evidence boundary</b> — Original deck pages 28–30 support the operational sequence; pages 32–34 support the enterprise–lender sequence. Built, reconstructed and proposed steps are visually distinct.</span>
    </div>
  </Shell>;
}

/* ---------------- 24 — Concept alternatives ---------------- */
type Concept24 = { title: string; head: string; lede: string; ui: ReactNode; rows: Array<[string, string]>; risk: string; riskC: string; ribbon?: boolean };
const CONCEPTS24: Concept24[] = [
  { title: "Maintenance only", head: NAVY, lede: "Operationally useful but leaves the finance insight disconnected.", riskC: RED,
    ui: <><b>Asset overview</b> <span style={{ float: "right", color: "#7c8798" }}>7D · 30D · 90D · YTD</span><br /><b style={{ fontSize: 17 }}>182</b> Assets online <span style={{ display: "inline-block", width: 26, height: 26, borderRadius: "50%", background: "conic-gradient(#2fbf9b 0 61%,#D99A2B 61% 89%,#D95C5C 89% 100%)", verticalAlign: "middle", marginLeft: 6 }} /><br /><span style={{ color: "#55606e" }}>Work orders — Open 46 · In progress 18 · <span style={{ color: RED }}>Overdue 7</span></span><br />Asset status <span style={{ display: "flex", height: 7, borderRadius: 4, overflow: "hidden", margin: "3px 0" }}><i style={{ flex: 61, background: "#2fbf9b" }} /><i style={{ flex: 28, background: "#D99A2B" }} /><i style={{ flex: 11, background: "#D95C5C" }} /></span><span style={{ color: "#55606e" }}>● Good 61% · ● Warning 28% · ● Critical 11%</span><br />Recent work orders — WO-4581 Pump-12 · Seal leak · High · In progress / WO-4579 Motor-07 · Vibration · Medium · Open / WO-4574 Compressor-03 · Temp high · High · Open</>,
    rows: [["User value", "Moderate — improves uptime but not finance insight."], ["Privacy risk", "Low — operational data only."], ["Explainability", "Low — no link to financial decisions."], ["Implementation complexity", "Low — builds on existing systems."], ["Differentiation", "Low — widely available capabilities."]],
    risk: "Leaves finance insight disconnected; no bridge between maintenance events and credit decisions." },
  { title: "Opaque score-to-lending", head: NAVY, lede: "Differentiated but unacceptable because it hides evidence, permission and policy.", riskC: RED,
    ui: <><b>Applicant overview</b> <span style={{ float: "right", background: BLUE, color: "#fff", borderRadius: 5, padding: "1px 9px", fontWeight: 700 }}>Approve</span><br /><span style={{ color: "#55606e" }}>Asset health score</span><br /><b style={{ fontSize: 19 }}>742</b> <span style={{ color: "#7c8798" }}>of 850</span><span style={{ display: "block", height: 7, borderRadius: 4, background: "linear-gradient(90deg,#D95C5C,#D99A2B,#2fbf9b)", margin: "4px 0 2px" }} /><span style={{ float: "right", color: "#2fbf9b", fontWeight: 700 }}>Low risk</span><br /><span style={{ color: "#55606e" }}>Credit decision — Recommended limit</span> <b>$2,500,000</b> · <span style={{ color: "#55606e" }}>Interest rate</span> <b>9.25%</b><br /><span style={{ color: "#55606e" }}>Score factors (hidden)</span>{["Utilization", "Reliability", "Maintenance behavior", "Operational efficiency"].map((f) => <span key={f} style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>{f}<span style={{ color: "#aab6c4" }}>▬▬▬▬ 🔒</span></span>)}</>,
    rows: [["User value", "High — streamlined decisioning for lenders."], ["Privacy risk", "High — broad data access without visibility."], ["Explainability", "Low — score factors and evidence are hidden."], ["Implementation complexity", "High — requires proprietary models and data pipelines."], ["Differentiation", "Medium — replicable by others with similar data."]],
    risk: "Unacceptable governance risk: hides evidence, permission and policy; difficult to justify or audit." },
  { title: "Explainable permissioned evidence", head: "#0e7c86", lede: "Connects the two sides while keeping derived signal, policy and human decision separate.", riskC: AMBER, ribbon: true,
    ui: <><b>Application</b> <span style={{ color: "#7c8798" }}>APP-2025-0187</span> <span style={{ background: "#e7f7ee", color: "#1d9e57", borderRadius: 999, padding: "0 7px", fontWeight: 700 }}>Under review</span> <span style={{ float: "right", background: BLUE, color: "#fff", borderRadius: 5, padding: "1px 8px", fontWeight: 700 }}>Request more evidence ▾</span><br /><span style={{ color: "#55606e" }}>Overview · Evidence · Permissions · Policy checks · Decision</span><br /><b>Asset-health evidence</b>{[["Vibration reading", "Compressor-03 · 2025-05-10 08:15"], ["Oil analysis", "Compressor-03 · 2025-05-09"], ["Work order", "WO-4574 · 2025-05-08"], ["Runtime hours", "Compressor-03 · 2025-05-07"]].map(([t, m]) => <span key={t} style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>{t} <span style={{ color: "#7c8798" }}>{m}</span> <span style={{ color: "#1d9e57", fontWeight: 700 }}>✓ Verified</span></span>)}<span style={{ color: BLUE }}>View all evidence ›</span><br /><b>Policy and decision</b> — Collateral policy ✓ Pass · Concentration limit ✓ Pass · Industry exposure ⚠ Warning · Covenant history ✓ Pass<br />Human decision <b>Pending</b> · Reviewer Jamie Lee · <span style={{ color: "#7c8798" }}>🔒 Decision is separate from score and evidence.</span></>,
    rows: [["User value", "High — links maintenance evidence to credit insight."], ["Privacy risk", "Low to moderate — permissioned, purpose-limited access."], ["Explainability", "High — evidence and policy checks are visible."], ["Implementation complexity", "Medium to high — requires integration and governance framework."], ["Differentiation", "High — permissioned evidence and transparent governance."]],
    risk: "Requires disciplined data governance and partner alignment; slower to operationalize." },
];
export function DeepViseConcepts() {
  const [sel, setSel] = useState(2);
  return <Shell n="24" label="DeepVise concept alternatives and tradeoff — rebuild of DeepVise_24">
    <p style={{ margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", color: "#55606e" }}>24. | CONCEPT ALTERNATIVES AND TRADEOFF</p>
    <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "flex-start" }}>
      <div><h3 style={{ fontSize: 29, margin: "4px 0 3px", color: INK }}>Why this direction is more credible</h3>
        <p style={{ margin: 0, color: "#55606e", fontSize: 12.5 }}>Selected direction: make asset-health evidence reviewable, permissioned and subordinate to policy and human judgment.</p></div>
      <div style={{ flex: "none", width: 300, border: "1px solid #c8d4e2", borderRadius: 9, padding: "8px 11px", fontSize: 10.8, color: "#55606e", background: "#fff" }}>ⓘ <b style={{ color: INK }}>Source and evidence boundary</b><br />The three concepts are a retrospective articulation of tradeoffs. Do not imply that all three were fully designed during the competition.</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 11, marginTop: 12, alignItems: "start" }}>
      {CONCEPTS24.map((c, i) => <button key={c.title} type="button" onClick={() => setSel(i)} aria-pressed={i === sel} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === sel ? "#0e7c86" : "#d5dde6"}`, borderRadius: 12, overflow: "hidden", cursor: "pointer", font: "inherit", padding: 0, position: "relative" }}>
        {c.ribbon ? <span style={{ position: "absolute", top: 0, right: 0, background: "#0e7c86", color: "#fff", fontSize: 8.8, fontWeight: 800, letterSpacing: "0.06em", padding: "2px 9px", borderRadius: "0 0 0 8px" }}>SELECTED DIRECTION</span> : null}
        <span style={{ display: "block", background: c.head, color: "#fff", fontWeight: 800, fontSize: 12.5, padding: c.ribbon ? "7px 122px 7px 11px" : "7px 11px" }}><span style={{ display: "inline-flex", width: 17, height: 17, borderRadius: "50%", border: "1.5px solid #fff", alignItems: "center", justifyContent: "center", fontSize: 10, marginRight: 6 }}>{i + 1}</span>{c.title}</span>
        <span style={{ display: "block", padding: "8px 11px" }}>
          <span style={{ display: "block", color: "#55606e", fontSize: 11, lineHeight: 1.45 }}>{c.lede}</span>
          <span style={{ display: "block", border: "1px solid #e2e8f0", borderRadius: 8, padding: "7px 9px", margin: "8px 0", fontSize: 10.3, lineHeight: 1.5 }}>{c.ui}</span>
          {c.rows.map(([k, v]) => <span key={k} style={{ display: "flex", gap: 8, borderBottom: "1px solid #eef2f7", padding: "4px 0" }}><b style={{ width: 108, flex: "none", fontSize: 10.8 }}>{k}</b><span style={{ fontSize: 10.8, color: "#44536a" }}>{v}</span></span>)}
          <span style={{ display: "block", background: c.riskC === RED ? "#fdf0f0" : "#fdf6e9", borderRadius: 8, padding: "7px 9px", marginTop: 8, fontSize: 10.8, lineHeight: 1.45 }}><b style={{ color: c.riskC }}>⚠ Critical risk</b><br />{c.risk}</span>
        </span>
      </button>)}
    </div>
    <div style={{ marginTop: 12, border: "1.5px solid #bfe3ea", background: "#f2fbfc", borderRadius: 11, padding: "9px 15px", fontSize: 12.5, display: "flex", gap: 10, alignItems: "center" }}>
      <span style={{ width: 24, height: 24, flex: "none", borderRadius: "50%", background: "#0e7c86", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>✓</span>
      <span><b>Why this direction wins:</b> It delivers lender value while making the path to the decision transparent, permissioned and auditable — building trust with regulators, partners and customers.</span>
    </div>
  </Shell>;
}
