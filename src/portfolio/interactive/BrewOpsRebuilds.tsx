import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";

/**
 * BrewOps pass-2 rebuilds: the shared hi-fi chrome (sidebar + Control
 * Tower dashboard, transcribed from Budweiser_31/32) and the three
 * slots whose pass-1 components rendered unrelated content
 * (16 storyboard, 23 annotated wireframe, 32 Control Tower + Copilot).
 */

const RED = "#c8102e";
const AMBER = "#f5a800";
const PAPER = "#faf8f5";
const INK = "#141a21";

/* Pass-3 density retune: the printed slides are tight 16:9 boards, so
   the shared kit's type/padding is scaled down inside BrewOps slides
   only (scoped under .bo3; the shared stylesheet is untouched). */
export const BO3_CSS = `
.bo3 .tks-head{padding-bottom:5px;font-size:11.5px}
.bo3 .tks-head b{font-size:14px}
.bo3 h3{margin:9px 0 4px}
.bo3 .tks-lede{font-size:13.2px;margin:0 0 10px;line-height:1.4;max-width:none}
.bo3 .tks-foot{margin-top:10px;padding-top:6px;font-size:9.5px}
.bo3 .tks-card{padding:9px 11px}
.bo3 .tks-grid{gap:8px}
.bo3 .tks-table{font-size:11.8px}
.bo3 .tks-table th{font-size:10.5px;padding:5px 7px}
.bo3 .tks-table td{padding:4px 7px}
.bo3 .tks-table--micro{font-size:11px}
.bo3 .tks-table--micro th{font-size:9px;padding:4px 5px}
.bo3 .tks-table--micro td{padding:4px 5px}
.bo3 .tks-chip{padding:3px 9px;font-size:11.5px}
.bo3 .tks-tag{font-size:11px;padding:1px 6px}
.bo3 .tks-btn{padding:5px 12px;font-size:12.5px}
.bo3 .tks-note{padding:8px 10px}
.bo3 .tks-node{padding:7px 9px;font-size:11.5px}
.bo3 .tks-detail{margin-top:8px;padding:6px 2px 0;font-size:11.8px}
.bo3 .tks-kicker{font-size:10.5px}
.bo3 .tks-table td{border-right:1px solid rgba(127,127,127,0.16)}
.bo3 .tks-table td:last-child{border-right:none}
`;
const BO3_ROOT: React.CSSProperties = { padding: "16px 20px 10px", fontSize: 12.6, lineHeight: 1.45 };

export function BoX({ n, title, sub, children, label, dark = true, serif = false }: { n: string; title: ReactNode; sub?: string; children: ReactNode; label: string; dark?: boolean; serif?: boolean }) {
  return <div className={`tks bo3${dark ? " tks--dark" : ""}`} style={dark ? { background: "#0a141f", ...BO3_ROOT } : { background: PAPER, color: INK, ...BO3_ROOT }} role="region" aria-label={label}>
    <style>{BO3_CSS}</style>
    <div className="tks-head"><span><b>BrewOps <span style={{ color: AMBER }}>Intelligence</span></b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 50</span><span className="tks-brand" style={{ fontSize: 12, color: RED, fontStyle: "italic" }}>Budweiser</span></div>
    <h3 style={{ fontSize: 26, ...(serif ? { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 600 } : {}) }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
    <div className="tks-foot"><span>BrewOps Intelligence — as printed on the slide</span><span>Data-informed. Human-led. Outcome-driven.</span></div>
  </div>;
}

export function Spark({ points, color, w = 74, h = 22 }: { points: string; color: string; w?: number; h?: number }) {
  return <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true" style={{ display: "block" }}>
    <polyline points={points} fill="none" stroke={color} strokeWidth="1.8" />
  </svg>;
}

/* ---------------- Shared hi-fi sidebar (files 31-50) ---------------- */
const NAV31: Array<[string, string]> = [["⌂", "Control Tower"], ["⌂", "Overview"], ["📈", "Insights"], ["📋", "Investigations"], ["🗄", "Production"], ["📦", "Inventory"], ["⬡", "Logistics"], ["🛡", "Quality"], ["✓", "Approvals"], ["📄", "Reports"], ["⚙", "Settings"]];
export function Side31({ active = "Control Tower" }: { active?: string }) {
  // Pass 4: file 37 prints "Maintenance" as the active nav item, in
  // the slot the shared list gives to Production — swap just that
  // entry for this slide instead of forking the whole nav.
  const nav = active === "Maintenance" ? NAV31.map(([ic, t]) => t === "Production" ? ["🔧", "Maintenance"] as [string, string] : [ic, t] as [string, string]) : NAV31;
  return <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 12, padding: "8px 7px", display: "flex", flexDirection: "column", gap: 1, fontSize: 9.8, color: "#3c4652" }}>
    <div style={{ padding: "0 2px 6px" }}>
      <div style={{ background: RED, color: "#fff", fontStyle: "italic", fontWeight: 800, fontSize: 11, borderRadius: 3, padding: "2px 6px", transform: "skewX(-6deg)", display: "inline-block" }}>Budweiser</div>
      <div style={{ fontWeight: 800, letterSpacing: "0.13em", fontSize: 9.5, color: INK, marginTop: 5, lineHeight: 1.3 }}>BREWOPS<br />INTELLIGENCE 🌾</div>
    </div>
    {nav.map(([ic, t]) => <span key={t} style={{ display: "flex", gap: 6, alignItems: "center", padding: "3px 6px", borderRadius: 7, background: t === active ? "#fdf3e0" : "transparent", color: t === active ? "#8a5c00" : "#3c4652", fontWeight: t === active ? 700 : 400, whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ width: 12, textAlign: "center" }}>{ic}</span>{t}</span>)}
    <div style={{ border: "1px solid #e7e2d9", borderRadius: 8, padding: "5px 7px", marginTop: 6, lineHeight: 1.45 }}>
      <span style={{ color: "#18a957" }}>●</span> <b style={{ color: INK }}>System Status</b><br /><span style={{ color: "#6b7280" }}>All systems operational</span>
    </div>
    <div style={{ display: "flex", gap: 6, alignItems: "center", border: "1px solid #e7e2d9", borderRadius: 8, padding: "5px 7px", marginTop: 4 }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#2b2f36", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8.5, fontWeight: 700, flex: "none" }}>AR</span>
      <span style={{ lineHeight: 1.35 }}><b style={{ color: INK }}>Alex R.</b><br /><span style={{ color: "#6b7280" }}>Supply Chain Ops</span></span><span style={{ marginLeft: "auto" }}>▾</span>
    </div>
    <span style={{ color: "#6b7280", marginTop: 5 }}>‹ Collapse</span>
    <span style={{ borderTop: "1px solid #e7e2d9", marginTop: 6, paddingTop: 5, color: "#8a8f98", fontSize: 8.5, lineHeight: 1.45 }}>BrewOps Intelligence Design System | v1.0 · May 2024</span>
  </div>;
}

export function HiFi({ active, children }: { active?: string; children: ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr)", gap: 10, alignItems: "start" }}>
    <Side31 active={active} />
    <div style={{ minWidth: 0 }}>{children}</div>
  </div>;
}

/* ---------------- Shared Control Tower dashboard (31 / 32 / 33 / 40) ---------------- */
const KPIS_CT: Array<[string, string, string, string, string, boolean]> = [
  ["Total Production (HL)", "24,560", "↑ 8.4%", "vs prior 7D", "#f5a800", true],
  ["OEE", "87.3%", "↑ 3.1%", "vs prior 7D", "#18a957", true],
  ["On-Time Delivery", "92.1%", "↑ 2.8%", "vs prior 7D", "#18a957", true],
  ["Inventory Health", "78%", "↓ 5%", "vs prior 7D", "#f5a800", false],
  ["Critical Alerts", "3", "↑ 2", "vs prior 7D", "#e0483e", false],
];
const FAC_CT: Array<[string, string, string, string, string]> = [
  ["Brewery Columbus", "89.2%", "8,560", "Healthy", "#18a957"], ["Brewery Cartersville", "85.7%", "6,420", "Healthy", "#18a957"], ["Brewery Fort Collins", "91.3%", "4,980", "Healthy", "#18a957"], ["Brewery Newark", "72.1%", "2,860", "Warning", "#f59e0b"], ["Brewery Los Angeles", "65.4%", "1,740", "Critical", "#e0483e"],
];
const ALERTS_CT2: Array<[string, string, string, string, string]> = [
  ["2m", "CO2 levels above control limit on Line 3.", "Brew House · Line 3", "CRITICAL", "#e0483e"], ["15m", "Unusual CO2 usage detected.", "Brew House · Utilities", "WARNING", "#f59e0b"], ["45m", "High vibration detected on Pump P-12.", "Fermentation · Pump P-12", "INFO", "#2563eb"], ["1h", "Predicted delay: Raw materials inbound.", "Logistics · Inbound", "WARNING", "#f59e0b"], ["2h", "Seal failure investigation closed.", "Fermentation · Tank 12", "RESOLVED", "#18a957"],
];
const MARKC = ["#f5a800", "#e07b1f", "#2563eb", "#18a957", "#7c4dff"];
function Marker({ i }: { i: number }) {
  return <span style={{ position: "absolute", top: -8, left: -8, width: 19, height: 19, borderRadius: "50%", background: MARKC[i], color: "#fff", fontWeight: 800, fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.3)", zIndex: 2 }}>{i + 1}</span>;
}
const panel: React.CSSProperties = { background: "#fff", border: "1px solid #e7e2d9", borderRadius: 11, padding: "7px 9px", position: "relative" };
const kick: React.CSSProperties = { fontSize: 9.5, fontWeight: 800, letterSpacing: "0.11em", color: "#6b7280", margin: "0 0 6px" };

export function CTDash({ markers = false, compact = false }: { markers?: boolean; compact?: boolean }) {
  const [fac, setFac] = useState(4);
  return <div style={{ fontSize: 11, color: INK }}>
    <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 9, flexWrap: "wrap" }}>
      <span style={{ border: "1px solid #ddd6c9", borderRadius: 8, padding: "4px 10px", background: "#fff" }}>📅 May 10 – May 17, 2024 · 7D ▾</span>
      <span style={{ border: "1px solid #ddd6c9", borderRadius: 8, padding: "4px 10px", background: "#fff" }}>All Facilities ▾</span>
      <span style={{ border: "1px solid #ddd6c9", borderRadius: 8, padding: "4px 10px", background: "#fff" }}>≡ Filters</span>
      <span style={{ marginLeft: "auto", color: "#6b7280", fontSize: 10 }}>Real-time operational overview across the brewing supply chain.</span>
    </div>
    <p style={kick}>OPERATIONAL KPIS</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7, position: "relative" }}>
      {markers ? <Marker i={0} /> : null}
      {KPIS_CT.map(([k, v, d, s, c, up], i) => <div key={k} style={panel}>
        <span style={{ color: "#6b7280", fontSize: 9.8 }}>{k}</span>
        <div style={{ fontSize: 17, fontWeight: 800, margin: "1px 0" }}>{v}</div>
        <span style={{ color: up ? "#18a957" : "#e0483e", fontWeight: 700, fontSize: 10 }}>{d}</span> <span style={{ color: "#8a8f98", fontSize: 9.5 }}>{s}</span>
        <Spark points={["0,16 12,13 24,15 36,10 48,12 60,7 74,5", "0,14 12,16 24,11 36,13 48,9 60,11 74,6", "0,15 12,12 24,14 36,10 48,12 60,8 74,6", "0,8 12,11 24,9 36,13 48,11 60,15 74,14", "0,12 12,8 24,14 36,9 48,13 60,10 74,12"][i]} color={c} />
      </div>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 8, marginTop: 8 }}>
      <div style={panel}>
        <p style={kick}>PRODUCTION TREND <span style={{ float: "right", border: "1px solid #ddd6c9", borderRadius: 5, padding: "0 6px" }}>Daily ▾</span></p>
        <span style={{ fontSize: 9.5, color: "#8a8f98" }}><span style={{ color: "#f5a800" }}>—</span> Actual (HL) · <span style={{ color: "#9aa1ab" }}>- -</span> Target (HL)</span>
        <svg viewBox="0 0 300 96" width="100%" height="78" role="img" aria-label="Production trend May 10 to 17, actual above target throughout">
          {[16, 40, 64, 88].map((y) => <line key={y} x1="22" y1={y} x2="298" y2={y} stroke="#eee7da" />)}
          <text x="0" y="19" fontSize="7.5" fill="#8a8f98">40K</text><text x="0" y="43" fontSize="7.5" fill="#8a8f98">30K</text><text x="0" y="67" fontSize="7.5" fill="#8a8f98">20K</text><text x="0" y="91" fontSize="7.5" fill="#8a8f98">10K</text>
          <polyline points="26,86 62,76 98,70 134,58 170,62 206,50 242,54 278,38 296,34" fill="none" stroke="#9aa1ab" strokeWidth="1.4" strokeDasharray="4 3" />
          <polyline points="26,80 62,66 98,58 134,44 170,50 206,38 242,42 278,26 296,20" fill="none" stroke="#f5a800" strokeWidth="2" />
          {["May 10", "May 11", "May 12", "May 13", "May 14", "May 15", "May 16", "May 17"].map((d, i) => <text key={d} x={24 + i * 36} y="96" fontSize="7" fill="#8a8f98">{d}</text>)}
        </svg>
      </div>
      <div style={panel}>
        {markers ? <Marker i={1} /> : null}
        <p style={kick}>INVENTORY RISK SUMMARY</p>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ display: "inline-flex", width: 64, height: 64, borderRadius: "50%", flex: "none", background: "conic-gradient(#e0483e 0deg 43deg, #f59e0b 43deg 151deg, #f7c948 151deg 360deg)", alignItems: "center", justifyContent: "center" }}>
            <span style={{ width: 43, height: 43, borderRadius: "50%", background: "#fff", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><b style={{ fontSize: 13, lineHeight: 1 }}>152</b><span style={{ fontSize: 7, color: "#6b7280" }}>At Risk SKUs</span></span>
          </span>
          <div style={{ fontSize: 10.3, lineHeight: 1.7 }}>
            <span style={{ color: "#e0483e" }}>■</span> High Risk <b>18 (12%)</b><br />
            <span style={{ color: "#f59e0b" }}>■</span> Medium Risk <b>46 (30%)</b><br />
            <span style={{ color: "#f7c948" }}>■</span> Low Risk <b>88 (58%)</b>
          </div>
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 10.3 }}><b>Top drivers</b> — Elevated demand vs forecast · Supply delay risk · Packaging constraints</p>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.25fr 1.15fr", gap: 8, marginTop: 8 }}>
      <div style={panel}>
        <p style={kick}>LOGISTICS STATUS <span style={{ float: "right", color: RED }}>View map</span></p>
        {[["🚚", "Shipments In Transit", "62", "↑ 6 vs prior 7D", "#18a957"], ["📦", "On-Time Delivery", "92.1%", "↑ 2.8%", "#18a957"], ["⏱", "Delayed Shipments", "7", "↓ 2 vs prior 7D", "#e0483e"], ["🔁", "Pending Transfers", "14", "—", "#8a8f98"]].map(([ic, k, v, d, c]) => <p key={k} style={{ margin: "5px 0", display: "flex", gap: 6, alignItems: "baseline" }}><span aria-hidden="true">{ic}</span><span style={{ flex: 1, color: "#3c4652" }}>{k}</span><b>{v}</b><span style={{ color: c, fontSize: 9, whiteSpace: "nowrap" }}>{d}</span></p>)}
      </div>
      <div style={panel}>
        {markers ? <Marker i={3} /> : null}
        <p style={kick}>FACILITY OVERVIEW <span style={{ float: "right", color: RED }}>View all facilities</span></p>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.3 }}>
          <thead><tr style={{ color: "#8a8f98", textAlign: "left" }}><th style={{ padding: "2px 3px" }}>Facility</th><th style={{ padding: "2px 3px" }}>OEE</th><th style={{ padding: "2px 3px" }}>Production (HL)</th><th style={{ padding: "2px 3px" }}>Status</th></tr></thead>
          <tbody>{FAC_CT.map(([n2, oee, prod, st, c], i) => <tr key={n2} onClick={() => setFac(i)} style={{ cursor: "pointer", background: i === fac ? "#fdf3e0" : "transparent", borderTop: "1px solid #f0ead9" }}><td style={{ padding: "3px" }}>{n2}</td><td style={{ padding: "3px" }}>{oee}</td><td style={{ padding: "3px" }}>{prod}</td><td style={{ padding: "3px" }}><span style={{ color: c }}>●</span> {st}</td></tr>)}</tbody>
        </table>
      </div>
      <div style={panel}>
        {markers ? <Marker i={2} /> : null}
        <p style={kick}>RECENT ALERTS <span style={{ float: "right", color: RED }}>View all (24)</span></p>
        {ALERTS_CT2.map(([t, title, where, sev, c]) => <p key={title} style={{ margin: "5px 0", display: "flex", gap: 6, alignItems: "baseline" }}><span style={{ color: "#8a8f98", width: 20, flex: "none" }}>{t}</span><span style={{ color: c }}>▲</span><span style={{ flex: 1 }}>{title}<br /><span style={{ color: "#8a8f98", fontSize: 9.5 }}>{where}</span></span><span style={{ background: `${c}1f`, color: c, borderRadius: 4, padding: "0 5px", fontSize: 8.5, fontWeight: 800 }}>{sev}</span></p>)}
      </div>
    </div>
    {compact ? null : <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 8, marginTop: 8 }}>
      <div style={panel}>
        {markers ? <Marker i={4} /> : null}
        <p style={kick}>NEXT ACTIONS</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7 }}>
          {[["CRITICAL", "#e0483e", "Address CO2 levels on Line 3", "Brew House · Line 3", "JD", "Jamie D.", "Due in 45m", "Take Action"], ["WARNING", "#f59e0b", "Review delayed raw materials", "Logistics · Inbound", "MS", "Morgan S.", "Due in 2h", "Review"], ["INFO", "#2563eb", "Validate packaging data update", "Packaging · Line 2", "TR", "Taylor R.", "Due in 6h", "Review"]].map(([sev, c, t, w2, ini, own, due, cta]) => <div key={t} style={{ border: "1px solid #e7e2d9", borderRadius: 9, padding: "7px 9px" }}>
            <span style={{ background: `${c}1f`, color: c, borderRadius: 4, padding: "0 5px", fontSize: 8.5, fontWeight: 800 }}>{sev}</span>
            <p style={{ margin: "4px 0 2px", fontWeight: 700, fontSize: 10.8 }}>{t}</p>
            <p style={{ margin: 0, color: "#8a8f98", fontSize: 9.5 }}>{w2}</p>
            <p style={{ margin: "5px 0", fontSize: 9.8, color: "#6b7280" }}>Owner<br /><span style={{ display: "inline-flex", width: 17, height: 17, borderRadius: "50%", background: "#2b2f36", color: "#fff", alignItems: "center", justifyContent: "center", fontSize: 8, marginRight: 4 }}>{ini}</span><b style={{ color: INK }}>{own}</b> · {due}</p>
            <span style={{ display: "inline-block", background: sev === "CRITICAL" ? RED : "#fff", color: sev === "CRITICAL" ? "#fff" : "#8a5c00", border: sev === "CRITICAL" ? "none" : "1px solid #e3c878", borderRadius: 6, padding: "2px 10px", fontWeight: 700, fontSize: 10 }}>{cta}</span>
          </div>)}
        </div>
      </div>
      <div style={panel}>
        <p style={kick}>DRILL INTO DETAILS</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
          {[["📊", "Production", "View production"], ["📦", "Inventory", "View inventory"], ["📋", "Quality", "View quality"], ["📄", "Logs", "View audit logs"]].map(([ic, t, s]) => <div key={t} style={{ border: "1px solid #e7e2d9", borderRadius: 9, padding: "7px 6px", textAlign: "center" }}><span style={{ fontSize: 15 }}>{ic}</span><br /><b style={{ fontSize: 10.3 }}>{t}</b><br /><span style={{ color: "#8a8f98", fontSize: 8.8 }}>{s} ›</span></div>)}
        </div>
        <p style={{ margin: "7px 0 0", color: "#8a8f98", fontSize: 9.5 }}>🛡 Consistent by design. Built for performance.</p>
      </div>
    </div>}
  </div>;
}

/* ---------------- 16 — A Planner's Shift storyboard (bw-14) ---------------- */
const PANELS16: Array<{ t: string; time: string; cap: string; body: ReactNode }> = [
  { t: "MORNING ALERT ARRIVES", time: "7:15 AM", cap: "The planner starts the day with an AI-generated alert flagging a critical supply risk at Fairfield Brewery.", body: <>
    <p style={{ margin: "0 0 5px", fontWeight: 700 }}>Alert Queue <span style={{ background: "#e0483e", color: "#fff", borderRadius: "50%", padding: "0 5px", fontSize: 9 }}>3</span></p>
    {[["Critical shortage risk detected", "Fairfield Brewery · Jun 1 – Jun 5", "18m", true], ["Inbound delay", "Western DC → ETA Jun 2", "45m", false], ["Carrier capacity tight", "Tracey DC · Jun 3 – Jun 6", "2h", false]].map(([a, b, w, hot]) => <p key={a as string} style={{ margin: "4px 0", border: hot ? "1px solid #e0483e" : "1px solid #2a3a4d", borderRadius: 7, padding: "5px 8px", display: "flex", gap: 6 }}><span style={{ color: "#e0483e" }}>⚠</span><span style={{ flex: 1 }}><b style={{ color: "#fff" }}>{a}</b><br /><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{b}</span></span><span style={{ color: "#8fa5bd" }}>{w}</span></p>)}
  </> },
  { t: "REVIEW RISK & AFFECTED SKUS", time: "7:25 AM", cap: "She reviews overall risk, demand vs. supply forecast, and sees 128 SKUs at risk with $2.7M in revenue exposure.", body: <>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
      {[["Overall Risk", "High", "#e0483e"], ["Service Risk", "22%", "#e0483e"], ["Supply Risk", "High", "#e0483e"], ["Logistics Risk", "Medium", "#f5a800"], ["Inventory Risk", "Low", "#18a957"], ["At Risk SKUs", "128", "#e0483e"]].map(([k, v, c]) => <span key={k} style={{ border: "1px solid #2a3a4d", borderRadius: 7, padding: "4px 7px" }}><span style={{ color: "#8fa5bd", fontSize: 9 }}>{k}</span><br /><b style={{ color: c, fontSize: 13 }}>{v}</b></span>)}
    </div>
    <p style={{ margin: "5px 0 1px", color: "#8fa5bd", fontSize: 9.3 }}>Demand vs Supply Forecast</p>
    <svg viewBox="0 0 200 40" style={{ width: "100%", display: "block" }} role="img" aria-label="Demand versus supply forecast mini chart with projected shortfall">
      <path d="M4,26 L44,23 L84,19 L124,14 L164,10 L196,8 L196,20 L164,22 L124,25 L84,28 L44,30 L4,32 Z" fill="#2F80ED" opacity="0.2" />
      <polyline points="4,20 44,18 84,16 124,12 164,9 196,7" fill="none" stroke="#7db3f5" strokeWidth="1.4" strokeDasharray="3 2" />
      <polyline points="4,29 44,27 84,25 124,21 164,18 196,16" fill="none" stroke="#f5a800" strokeWidth="1.6" />
      <text x="128" y="36" fontSize="6.5" fill="#ff8d84">Projected Shortfall 12.4 KHL</text>
    </svg>
    <p style={{ margin: "3px 0 1px", color: "#8fa5bd", fontSize: 9.3 }}>Risk Heatmap — $2.7M revenue exposure · 128 SKUs at risk</p>
    <span style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 2 }}>
      {[4, 3, 2, 1, 0].map((row) => [0, 1, 2, 3, 4].map((col) => { const sev = Math.min(4, Math.max(0, Math.round((row + col) / 1.7))); const hotCell = row === 3 && col === 3; return <span key={`${row}-${col}`} style={{ height: 11, borderRadius: 2, background: ["#1f9d66", "#57b25e", "#e8c33a", "#e07b1f", "#d93a2b"][sev], display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 7.5, fontWeight: 800, boxShadow: hotCell ? "0 0 0 1.5px #fff" : undefined }}>{hotCell ? "7" : ""}</span>; }))}
    </span>
  </> },
  { t: "COMPARE MITIGATION SCENARIOS", time: "7:45 AM", cap: "She compares AI-recommended mitigation scenarios across service level, shortfall reduction, revenue, and cost.", body: <>
    <p style={{ margin: "0 0 4px" }}><b style={{ color: "#fff" }}>Recommended Actions</b> — Scenario A – Optimize Service</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, textAlign: "center" }}>
      {[["Service Level", "+6.2pp", "#18a957"], ["Shortfall Reduction", "12.4 KHL", "#fff"], ["Revenue Impact", "+$1.8M", "#18a957"], ["Cost Impact", "+$320K", "#e0483e"]].map(([k, v, c]) => <span key={k} style={{ border: "1px solid #2a3a4d", borderRadius: 7, padding: "4px 3px" }}><span style={{ color: "#8fa5bd", fontSize: 8.8 }}>{k}</span><br /><b style={{ color: c, fontSize: 11.5 }}>{v}</b></span>)}
    </div>
    <p style={{ margin: "5px 0 0", fontSize: 10.3, lineHeight: 1.6 }}>Top Actions — 1 Expedite inbound from Cartersville <span style={{ color: "#f5a800" }}>Primary</span> · 2 Reroute Midwest demand to Fairfield <span style={{ color: "#8fa5bd" }}>Secondary</span> · 3 Prioritize production: 12oz Cans <span style={{ color: "#8fa5bd" }}>Tertiary</span></p>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 8.4, marginTop: 5, tableLayout: "fixed" }}>
      <colgroup><col style={{ width: "27%" }} /><col style={{ width: "18%" }} /><col style={{ width: "19%" }} /><col style={{ width: "18%" }} /><col style={{ width: "18%" }} /></colgroup>
      <thead><tr style={{ color: "#8fa5bd", textAlign: "left" }}>{["Scenario", "Service Level", "Shortfall Reduction", "Revenue Impact", "Cost Impact"].map((h) => <th key={h} style={{ padding: "2px 3px", borderBottom: "1px solid #2a3a4d", fontSize: 7.9, lineHeight: 1.3 }}>{h}</th>)}</tr></thead>
      <tbody>{[["A – Optimize Service", "+6.2pp", "12.4 KHL", "+$1.8M", "+$320K"], ["B – Max Production", "+3.1pp", "8.7 KHL", "+$1.1M", "+$510K"], ["C – Demand Rebalance", "+4.0pp", "9.6 KHL", "+$1.3M", "+$210K"]].map((r2, ri) => <tr key={r2[0]} style={{ background: ri === 0 ? "rgba(47,128,237,0.16)" : "transparent" }}>{r2.map((c, ci) => <td key={ci} style={{ padding: "2.5px 3px", borderBottom: "1px solid #22344d", color: ci === 0 ? "#fff" : "#c6d2e0", fontWeight: ci === 0 ? 700 : 400, wordBreak: "break-word" }}>{c}</td>)}</tr>)}</tbody>
    </table>
  </> },
  { t: "INSPECT EVIDENCE & ASSUMPTIONS", time: "8:05 AM", cap: "She drills into the evidence and assumptions behind the recommended scenario to validate confidence.", body: <>
    <p style={{ margin: "0 0 3px" }}><b style={{ color: "#fff" }}>Evidence &amp; Ownership</b></p>
    {[["Demand Forecast", "Statistical Forecast · v5.2 · May 19, 2024 8:00 AM", "Demand Analytics"], ["Supply Plan", "ERP Plan · v3.1 · May 18, 2024 2:15 PM", "Supply Planning"], ["Inventory Snapshot", "WMS Export · v2.7 · May 19, 2024 7:30 AM", "Inventory Mgmt"]].map(([a, b, o]) => <p key={a} style={{ margin: "3px 0", display: "flex", gap: 6 }}><span>📄</span><span style={{ flex: 1 }}><b style={{ color: "#fff" }}>{a}</b><br /><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{b}</span></span><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>Owner<br />{o}</span><span style={{ color: "#18a957" }}>✓</span></p>)}
    <p style={{ margin: "5px 0 0", fontSize: 10.3, lineHeight: 1.55 }}><b style={{ color: "#fff" }}>Scenario A – Key Assumptions:</b> ✓ Inbound from Cartersville arrives on May 29 (On-time probability: 87%) · ✓ Reroute capacity available from Midwest DCs (Utilization &lt; 85%) · ✓ Production uplift of 12oz Cans achievable (Line availability confirmed).<br /><b style={{ color: "#fff" }}>Model Rationale:</b> Maximizes fill rate for at-risk SKUs in high-value markets while balancing freight and production constraints.</p>
  </> },
  { t: "REQUEST & RECEIVE APPROVAL", time: "8:25 AM", cap: "She submits the plan with context. Leadership reviews and approves the recommended mitigation.", body: <>
    <p style={{ margin: "0 0 4px" }}><b style={{ color: "#fff" }}>Approval Request</b> — Requesting approval to execute Scenario A – Optimize Service for Fairfield Brewery risk mitigation. Adding expedited inbound and production prioritization.</p>
    {[["8:26 AM", "Request submitted", "Supply Planning"], ["8:31 AM", "Reviewed by", "Director of Supply Chain"], ["8:34 AM", "Approved", "VP of Operations"]].map(([w, a, o]) => <p key={w} style={{ margin: "3px 0", display: "flex", gap: 7 }}><span style={{ color: "#8fa5bd", width: 44 }}>{w}</span><span style={{ color: "#18a957" }}>●</span><span style={{ flex: 1 }}><b style={{ color: "#fff" }}>{a}</b><br /><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{o}</span></span></p>)}
    <p style={{ margin: "5px 0 0", background: "rgba(24,169,87,0.14)", border: "1px solid #18a957", borderRadius: 7, padding: "5px 8px" }}>✓ <b style={{ color: "#4ade80" }}>Status: Approved</b> — Approved by VP of Operations · 8:34 AM</p>
  </> },
  { t: "HANDOFF TO LOGISTICS & EXECUTION LOG", time: "8:45 AM", cap: "The plan is handed off to logistics and operations, and an execution log confirms actions are in motion.", body: <>
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
      <div>
        <p style={{ margin: "0 0 3px" }}><b style={{ color: "#fff" }}>Handoff to Logistics</b></p>
        {[["1", "Expedite inbound from Cartersville", "Arrives May 29 · +4.1 KHL"], ["2", "Reroute Midwest demand to Fairfield", "May 27 – Jun 1 · +3.3 KHL"], ["3", "Prioritize production: 12oz Cans", "May 25 – Jun 1 · +2.2 KHL"]].map(([n2, a, b]) => <p key={n2} style={{ margin: "3px 0", fontSize: 10.3 }}><b style={{ color: "#fff" }}>{n2}. {a}</b><br /><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{b}</span> <span style={{ color: "#18a957" }}>✓</span></p>)}
        <p style={{ margin: "4px 0 3px", fontSize: 10.3 }}>Notify Teams — Logistics ✓ · Production ✓ · Sales ✓ · Finance ✓</p>
        <span style={{ display: "block", background: "#2563eb", color: "#fff", textAlign: "center", borderRadius: 7, padding: "5px 0", fontWeight: 700 }}>Execute Plan</span>
      </div>
      <div>
        <p style={{ margin: "0 0 3px" }}><b style={{ color: "#fff" }}>Execution Log</b></p>
        {[["8:45 AM", "Plan approved", "VP of Operations"], ["8:46 AM", "Plan shared with Logistics", "Supply Planning"], ["8:47 AM", "Purchase orders updated", "Logistics"], ["8:48 AM", "Production schedule updated", "Production Planning"], ["8:49 AM", "Stakeholders notified", "System"]].map(([w, a, o]) => <p key={w} style={{ margin: "3px 0", fontSize: 10.3, display: "flex", gap: 6 }}><span style={{ color: "#8fa5bd", width: 44, flex: "none" }}>{w}</span><span style={{ flex: 1 }}><b style={{ color: "#fff" }}>{a}</b><br /><span style={{ color: "#8fa5bd", fontSize: 9.5 }}>{o}</span></span><span style={{ color: "#18a957" }}>✓</span></p>)}
      </div>
    </div>
  </> },
];
export function BrewOpsStoryboard() {
  const [sel, setSel] = useState(0);
  return <BoX n="16" title="A Planner's Shift: From Alert to Execution" sub="bw-14-shift-storyboard · Hypothesis-Based Proto-Role Storyboard for the BrewOps Supply Planner. Hypothesis: An AI copilot empowers planners to anticipate, decide, and act—faster and with confidence." label="BrewOps planner storyboard — rebuild of Budweiser_16">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 9 }}>
      {PANELS16.map((p, i) => <button key={p.t} type="button" onClick={() => setSel(i)} aria-pressed={i === sel} style={{ textAlign: "left", background: "#0e1c2c", border: `1.5px solid ${i === sel ? AMBER : "#22344d"}`, borderRadius: 11, padding: "8px 10px", cursor: "pointer", font: "inherit", color: "#c6d2e0", minWidth: 0, overflow: "hidden" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ width: 19, height: 19, borderRadius: "50%", border: "1.5px solid #2F80ED", color: "#7db3f5", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, flex: "none" }}>{i + 1}</span>
          <b style={{ color: "#fff", fontSize: 11, letterSpacing: "0.02em", flex: 1 }}>{p.t}</b>
          <span style={{ color: "#8fa5bd", fontSize: 10.5 }}>{p.time}</span>
        </span>
        <span style={{ display: "flex", gap: 7, margin: "7px 0", alignItems: "stretch" }}>
          <img src={`/projects/crops/brewops/panel-${i + 1}.webp`} alt="" style={{ width: 54, flex: "none", objectFit: "cover", borderRadius: 7, border: "1px solid #22344d" }} />
          {/* Pass 7 (16): the dashboard half of each panel reads as a
              miniature screenshot — dark chrome bar over the DOM mini
              (alert queue, forecast + heatmap, scenario table…). */}
          <span style={{ flex: 1, minWidth: 0, display: "block", background: "#0a141f", border: "1px solid #22344d", borderRadius: 8, overflow: "hidden" }}>
            <span style={{ display: "flex", gap: 6, alignItems: "center", background: "#0e1c2c", borderBottom: "1px solid #22344d", padding: "3px 8px", fontSize: 8.3, color: "#8fa5bd", whiteSpace: "nowrap", overflow: "hidden" }}><b style={{ color: "#fff" }}>BrewOps Intelligence</b><span>Control Tower</span><span>Demand</span><span>Supply</span><span style={{ marginLeft: "auto", color: "#e0483e", fontStyle: "italic" }}>Budweiser</span></span>
            <span style={{ display: "block", padding: "7px 9px", fontSize: 10.5, lineHeight: 1.5 }}>{p.body}</span>
          </span>
        </span>
        <span style={{ display: "block", fontSize: 10.8, lineHeight: 1.5, color: "#a9bccd" }}>{p.cap}</span>
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.2fr 1.6fr 0.9fr", gap: 10, border: "1px solid #22344d", borderRadius: 10, padding: "7px 11px", marginTop: 9, fontSize: 10.4 }}>
      <span><b style={{ color: "#2F80ED" }}>Proto-Role: Supply Planner</b><br />Mission: Prevent service risk and protect revenue.</span>
      <span><b style={{ color: "#2F80ED" }}>Key Outcome</b><br />Faster decisions, aligned execution, and measurable impact.</span>
      <span><b style={{ color: "#2F80ED" }}>Success Metrics</b><br />Shortfall reduction · Service level lift · Revenue protected · Decision cycle time</span>
      <span><span style={{ color: "#2F80ED" }}>⬢</span> AI-Powered Insight<br /><span style={{ color: AMBER }}>⬢</span> Human Decision</span>
    </div>
  </BoX>;
}

/* ---------------- 23 — Annotated navigation shell wireframe ---------------- */
const CALLOUTS_L: Array<[string, string]> = [
  ["Persistent left navigation", "Always-visible primary navigation for core areas of BrewOps Intelligence."],
  ["Context selector (top)", "Switch between organizational levels (Global, Region, Brewery) to set the scope of insights and data."],
  ["Global controls", "Date range and facility selector set the default context for the workspace."],
  ["Alert area", "High-priority alerts and notifications surface important issues and updates."],
  ["Central workspace", "Primary content area where insights, charts, tables, and visualizations are displayed based on the selected context."],
];
const CALLOUTS_R: Array<[string, string]> = [
  ["Contextual panel", "Dynamic panel that surfaces details, insights, and actions relevant to the current selection or view."],
  ["Insight summary", "Key metrics and top factors related to the current context for quick scanning."],
  ["Contextual actions", "Take notes, add annotations, or perform actions specific to the current context."],
  ["Copilot entry point", "Launch BrewOps Copilot to ask questions, get insights, and take action with conversational AI."],
];
export function BrewOpsAnnotatedShell() {
  const [hot, setHot] = useState(0);
  const callout = (n2: number, t: string, body: string, side: "l" | "r") => (
    <button key={t} type="button" onClick={() => setHot(n2)} aria-pressed={hot === n2} style={{ textAlign: "left", background: hot === n2 ? "#f3f0ea" : "transparent", border: "1px solid transparent", borderRadius: 8, padding: "5px 7px", cursor: "pointer", font: "inherit", color: INK, display: "block", width: "100%" }}>
      <span style={{ display: "flex", gap: 6, alignItems: "baseline" }}><span style={{ width: 17, height: 17, borderRadius: "50%", background: "#141a21", color: "#fff", fontSize: 10, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{n2}</span><b style={{ fontSize: 11.3 }}>{t}</b>{side === "l" ? <span aria-hidden="true" style={{ marginLeft: "auto", color: "#9aa1ab" }}>→</span> : null}</span>
      <span style={{ display: "block", fontSize: 10, lineHeight: 1.5, color: "#5b6470", marginTop: 2 }}>{body}</span>
    </button>
  );
  const wf: React.CSSProperties = { border: "1.5px solid #c9ccd1", borderRadius: 10, background: "#fff" };
  return <BoX n="23" title="Annotated navigation shell wireframe" sub="BrewOps Intelligence – Application shell with key global and contextual elements. Low-fidelity structural exploration – not final design." dark={false} label="BrewOps annotated shell wireframe — rebuild of Budweiser_23">
    <div style={{ display: "grid", gridTemplateColumns: "158px 1fr 158px", gap: 9, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 5, paddingTop: 26 }}>
        {CALLOUTS_L.map(([t, b], i) => callout(i + 1, t, b, "l"))}
      </div>
      <div style={{ ...wf, padding: 0, overflow: "hidden", color: INK }}>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr", minHeight: 330 }}>
          <div style={{ borderRight: "1px solid #e2e4e8", padding: "8px 9px", fontSize: 10 }}>
            <b style={{ fontSize: 10.5 }}>BrewOps<br />Intelligence</b>
            <div style={{ display: "grid", gap: 2, marginTop: 7 }}>
              {["Overview", "Performance", "Production", "Quality", "Sustainability", "Maintenance", "Supply Chain", "Alerts", "Reports", "Administration"].map((x, i) => <span key={x} style={{ padding: "3px 6px", borderRadius: 5, background: i === 0 ? "#eef0f3" : "transparent", fontWeight: i === 0 ? 700 : 400 }}>{x}</span>)}
            </div>
          </div>
          <div style={{ padding: "8px 10px", minWidth: 0 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", fontSize: 10 }}>
              <span style={{ border: "1px solid #c9ccd1", borderRadius: 6, padding: "3px 8px" }}>🌐 Global · Organization ▾</span>
              <span style={{ border: "1px solid #c9ccd1", borderRadius: 6, padding: "3px 8px" }}>📅 May 12 – May 18, 2025 ▾</span>
              <span style={{ border: "1px solid #c9ccd1", borderRadius: 6, padding: "3px 8px" }}>🏭 All Facilities ▾</span>
              <span style={{ border: "1.5px solid #141a21", borderRadius: 6, padding: "3px 9px", fontWeight: 700 }}>✦ Copilot</span>
              <span>🔔</span><span style={{ border: "1px solid #c9ccd1", borderRadius: "50%", padding: "2px 5px" }}>AB</span>
            </div>
            <div style={{ border: "1px solid #c9ccd1", borderRadius: 8, padding: "6px 10px", marginTop: 7, fontSize: 10.3, display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 14 }}>⚠</span><span style={{ flex: 1 }}><b>3 critical alerts require attention</b><br /><span style={{ color: "#5b6470" }}>Fermentation variance detected • Packaging line 2 downtime • Water usage above target</span></span><span>View all alerts ›</span><span>✕</span>
            </div>
            <p style={{ margin: "8px 0 5px", fontWeight: 800, fontSize: 12.5 }}>Overview</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
              {[["Total Production (bbl)", "1.52M", "↑ 8.4% vs prior 7 days", "0,14 10,10 20,12 30,7 40,9 50,5"], ["OEE", "78%", "↓ 3.1pp vs prior 7 days", "0,8 10,13 20,7 30,12 40,8 50,11"], ["Quality Yield", "96.2%", "↑ 1.4pp vs prior 7 days", "0,12 10,9 20,11 30,8 40,10 50,7"], ["Water Usage (bbl)", "3.21M", "↑ 5.7% vs prior 7 days", "0,13 10,10 20,12 30,9 40,11 50,8"]].map(([k, v, d, pts]) => <div key={k} style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 8px" }}>
                <span style={{ fontSize: 9.3, color: "#5b6470" }}>{k}</span><div style={{ fontSize: 15, fontWeight: 800 }}>{v}</div>
                <span style={{ fontSize: 8.8, color: "#5b6470", whiteSpace: "nowrap" }}>{d}</span><Spark points={pts} color="#6b7280" w={50} h={16} />
              </div>)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 6, marginTop: 6 }}>
              <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 9px" }}>
                <span style={{ fontSize: 10, fontWeight: 700 }}>Production Over Time</span>
                <svg viewBox="0 0 200 62" width="100%" height="62" role="img" aria-label="Production over time, May 12 to 18">
                  <polyline points="8,44 36,34 64,40 92,26 120,38 148,28 176,32 194,20" fill="none" stroke="#6b7280" strokeWidth="1.6" />
                  {[44, 34, 40, 26, 38, 28, 32, 20].map((y, i) => <circle key={i} cx={8 + i * 26.5} cy={y} r="2.2" fill="#141a21" />)}
                  {["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"].map((d, i) => <text key={d} x={2 + i * 27} y="61" fontSize="6" fill="#8a8f98">{d}</text>)}
                </svg>
              </div>
              <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 9px" }}>
                <span style={{ fontSize: 10, fontWeight: 700 }}>Production by Facility</span>
                <div aria-hidden="true" style={{ height: 44, margin: "4px 0", borderRadius: 5, background: "radial-gradient(circle at 22% 38%, #c9ccd1 0 5px, transparent 6px), radial-gradient(circle at 55% 30%, #c9ccd1 0 5px, transparent 6px), radial-gradient(circle at 78% 45%, #c9ccd1 0 5px, transparent 6px), radial-gradient(circle at 40% 62%, #c9ccd1 0 4px, transparent 5px), #f1f2f4", position: "relative" }}>
                  <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#9aa1ab", fontSize: 9 }}>world map (wireframe)</span>
                </div>
                <span style={{ fontSize: 9, color: "#5b6470" }}>Facility rows with skeleton bars, as drawn.</span>
              </div>
            </div>
            <div style={{ border: "1px solid #e2e4e8", borderRadius: 8, padding: "6px 9px", marginTop: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 700 }}>Recent Alerts</span>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 9.6, marginTop: 3 }}>
                <thead><tr style={{ color: "#8a8f98", textAlign: "left" }}><th>Severity</th><th>Alert</th><th>Facility</th><th>Triggered</th><th>Status</th></tr></thead>
                <tbody>
                  {[["⚠", "Fermentation variance detected", "Budweiser Fort Collins", "May 18, 2025 08:32 AM", "New"], ["⚠", "Packaging line 2 downtime", "Budweiser St. Louis", "May 18, 2025 07:45 AM", "In Progress"], ["ⓘ", "Water usage above target", "Budweiser Cartersville", "May 18, 2025 06:15 AM", "Investigating"]].map((r) => <tr key={r[1]} style={{ borderTop: "1px solid #eef0f3" }}>{r.map((c, j) => <td key={j} style={{ padding: "3px 2px" }}>{j === 4 ? <span style={{ border: "1px solid #c9ccd1", borderRadius: 4, padding: "0 5px" }}>{c}</span> : c}</td>)}</tr>)}
                </tbody>
              </table>
              <p style={{ margin: "3px 0 0", textAlign: "right", fontSize: 9.6 }}>View all alerts ›</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gap: 5 }}>
        {callout(9, CALLOUTS_R[3][0], CALLOUTS_R[3][1], "r")}
        <div style={{ border: "1.5px solid #c9ccd1", borderRadius: 10, background: "#fff", padding: "8px 10px", fontSize: 10.3, color: INK }}>
          <p style={{ margin: 0, fontWeight: 700 }}>Contextual panel <span style={{ float: "right" }}>✕</span></p>
          <p style={{ margin: "6px 0 3px", color: "#5b6470" }}>Facility snapshot</p>
          <div aria-hidden="true" style={{ display: "flex", gap: 7, alignItems: "center" }}><span style={{ width: 30, height: 30, background: "#eef0f3", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>🏭</span><span style={{ flex: 1, display: "grid", gap: 3 }}><span style={{ height: 5, background: "#dfe2e6", borderRadius: 3 }} /><span style={{ height: 5, width: "70%", background: "#e7eaed", borderRadius: 3 }} /></span></div>
          {[["Status", "Normal"], ["OEE", "78%"], ["Quality Yield", "96.2%"], ["Water Usage (bbl)", "3.21M"]].map(([k, v]) => <p key={k} style={{ margin: "4px 0", display: "flex", justifyContent: "space-between" }}><span style={{ color: "#5b6470" }}>{k}</span><b>{v}</b></p>)}
          <p style={{ margin: "4px 0", fontWeight: 600 }}>View facility dashboard ›</p>
          <p style={{ margin: "7px 0 3px", fontWeight: 700 }}>Top contributing factors</p>
          {[92, 74, 52, 66].map((w2, i) => <span key={i} style={{ display: "block", height: 6, background: "#e7eaed", borderRadius: 3, margin: "3px 0" }}><span style={{ display: "block", height: 6, width: `${w2}%`, background: "#9aa1ab", borderRadius: 3 }} /></span>)}
          <p style={{ margin: "4px 0", fontWeight: 600 }}>View all insights ›</p>
          <p style={{ margin: "7px 0 3px", fontWeight: 700 }}>Notes</p>
          <div style={{ border: "1px solid #e2e4e8", borderRadius: 6, padding: "5px 8px", color: "#9aa1ab" }}>Add a note…</div>
          <span style={{ display: "inline-block", float: "right", background: "#e7eaed", borderRadius: 5, padding: "2px 12px", marginTop: 5, color: "#5b6470" }}>Save</span>
        </div>
        {callout(6, CALLOUTS_R[0][0], CALLOUTS_R[0][1], "r")}
        {callout(7, CALLOUTS_R[1][0], CALLOUTS_R[1][1], "r")}
        {callout(8, CALLOUTS_R[2][0], CALLOUTS_R[2][1], "r")}
      </div>
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.5, color: "#5b6470" }}><span style={{ color: RED, fontStyle: "italic", fontWeight: 800 }}>Budweiser</span> · KING OF BEERS — printed bottom-left.</p>
  </BoX>;
}

/* ---------------- 32 — Control Tower + Copilot answer panel ---------------- */
export function BrewOpsCopilotFull() {
  const [evOpen, setEvOpen] = useState(true);
  return <BoX n="32" title="Control Tower" sub="The file-31 Control Tower with the BrewOps Copilot panel open at right — question, observation, inference, recommendation and the action taken." dark={false} label="BrewOps control tower with copilot — rebuild of Budweiser_32">
    <div style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr) 238px", gap: 9, alignItems: "start" }}>
      <Side31 active="Control Tower" />
      <div style={{ minWidth: 0 }}><CTDash compact /></div>
      <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 12, padding: "10px 12px", fontSize: 10.8, color: INK }}>
        <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 19, height: 19, borderRadius: "50%", background: RED, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>✦</span><b>BrewOps Copilot</b><span style={{ background: "#e8f0fe", color: "#2563eb", borderRadius: 4, padding: "0 5px", fontSize: 8.5, fontWeight: 800 }}>BETA</span><span style={{ marginLeft: "auto", color: "#8a8f98" }}>··· ✕</span></p>
        <p style={{ background: "#f1f2f4", borderRadius: "4px 12px 12px 12px", padding: "7px 10px", margin: "9px 0 6px", lineHeight: 1.5 }}>Why are CO2 levels spiking on Line 3 and what should we do?</p>
        <p style={{ margin: "0 0 6px", color: "#5b6470" }}>Here's what I found.</p>
        <div style={{ border: "1px solid #e7e2d9", borderRadius: 10, padding: "8px 10px", marginBottom: 7 }}>
          <p style={{ margin: 0, fontWeight: 700 }}><span style={{ color: "#2563eb" }}>⬢</span> Observation</p>
          <p style={{ margin: "4px 0", lineHeight: 1.55 }}>CO2 levels on Brew House Line 3 exceeded the control limit 3 times in the last 2 hours, peaking at 1.42%.</p>
          <button type="button" onClick={() => setEvOpen((v) => !v)} aria-expanded={evOpen} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", padding: 0, color: "#5b6470", fontWeight: 600 }}>Evidence (3) {evOpen ? "▴" : "▾"}</button>
          {evOpen ? <p style={{ margin: "3px 0 0", color: "#5b6470", fontSize: 10 }}>Sensor trend, control-limit log and historian extract attached to this answer in the full product.</p> : null}
        </div>
        <div style={{ border: "1px solid #e7e2d9", borderRadius: 10, padding: "8px 10px", marginBottom: 7 }}>
          <p style={{ margin: 0, fontWeight: 700 }}><span style={{ color: "#f5a800" }}>⬢</span> Inference</p>
          <p style={{ margin: "4px 0", lineHeight: 1.55 }}>The spike correlates with a rise in fermentation temperature and increased yeast activity, likely driven by a warmer wort inlet and a delay in cooling response.</p>
          <span style={{ color: "#5b6470", fontWeight: 600 }}>Evidence (4) ▾</span>
        </div>
        <div style={{ border: "1px solid #e7e2d9", borderRadius: 10, padding: "8px 10px", marginBottom: 7 }}>
          <p style={{ margin: 0, fontWeight: 700 }}><span style={{ color: "#18a957" }}>⬢</span> Recommendation</p>
          <p style={{ margin: "4px 0", lineHeight: 1.55 }}>Reduce wort inlet temperature to 18.5 °C and increase glycol flow by 15% to stabilize CO2 levels below 1.2%. Re-evaluate in 30 minutes.</p>
          <p style={{ margin: "4px 0" }}>Confidence <span style={{ background: "#e7f7ee", color: "#1d9e57", borderRadius: 4, padding: "0 6px", fontWeight: 800 }}>High · 86%</span></p>
          <span style={{ color: "#5b6470", fontWeight: 600 }}>Assumptions (2) ▾</span>
        </div>
        <div style={{ border: "1px solid #d9c8f5", background: "#faf7ff", borderRadius: 10, padding: "8px 10px", marginBottom: 7 }}>
          <p style={{ margin: 0, fontWeight: 700 }}><span style={{ color: "#7c4dff" }}>⬢</span> Action taken by you <span style={{ float: "right", background: "#e7f7ee", color: "#1d9e57", borderRadius: 4, padding: "0 6px", fontSize: 9, fontWeight: 800 }}>Approved</span></p>
          <p style={{ margin: "4px 0", lineHeight: 1.55 }}>Adjusted wort inlet target to 18.5 °C and increased glycol flow by 15% on Line 3.</p>
          <p style={{ margin: "3px 0", color: "#5b6470", fontSize: 10 }}>Approved by Alex R. · May 17, 8:47 AM</p>
          <span style={{ border: "1px solid #ddd6c9", borderRadius: 6, padding: "2px 9px", fontWeight: 600 }}>View in Investigations ⧉</span>
        </div>
        <p style={{ margin: "0 0 3px", fontWeight: 700 }}>Affected</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{["🏭 Brewery Columbus", "⬡ Brew House · Line 3", "🍺 SKU Group: Core Lager"].map((c) => <span key={c} style={{ border: "1px solid #ddd6c9", borderRadius: 6, padding: "2px 8px", fontSize: 10 }}>{c}</span>)}</div>
        <p style={{ margin: "8px 0 4px", color: "#8a8f98", fontSize: 9.8 }}>AI-generated insights. Please verify before taking action.</p>
        <div style={{ border: "1px solid #ddd6c9", borderRadius: 9, padding: "6px 10px", color: "#8a8f98", display: "flex" }}><span style={{ flex: 1 }}>Ask a question or request an analysis…</span><span style={{ color: RED }}>➤</span></div>
        <p style={{ margin: "4px 0 0", color: "#8a8f98", fontSize: 9.3 }}>Copilot can make mistakes. Check important info.</p>
      </div>
    </div>
  </BoX>;
}
