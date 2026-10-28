import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";
import "./allweb3-chapters.css";

/**
 * Pass 2 — ALLWEB3 show-all rebuilds. Pass 3 hid most of every slide
 * behind tabs/chips (and four slots rendered the wrong subject entirely
 * — the data-file title instead of the printed slide). These components
 * render the printed layouts with everything visible at rest, keeping
 * selection/highlight interactivity. Content transcribed from the
 * original image files 1–19.webp.
 */

const G = "#00ff00";

function AwR({ n, title, sub, children, label, foot, titleSize, titleAlign }: { n: string; title: ReactNode; sub?: string; children: ReactNode; label: string; foot?: string; titleSize?: number; titleAlign?: "left" | "right" }) {
  return <div className="tks tks--dark aw3" role="region" aria-label={label}>
    <div className="tks-head"><span><b>W ALLWEB3</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 19</span><span className="tks-brand" style={{ fontSize: 12, color: G }}>ALLWEB3</span></div>
    <h3 style={{ fontSize: titleSize ?? 44, textAlign: titleAlign ?? "left", ...(titleSize && titleSize <= 14 ? { letterSpacing: ".14em", color: "#8fbf8f", margin: "2px 0 8px" } : {}) }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
    <div className="tks-foot"><span>{foot ?? "ALLWEB3 — CMP-2026-042"}</span><span>Illustrative data — as printed</span></div>
  </div>;
}
const dim = { color: "#a9c9a9" } as const;
const card = { background: "#0a120a", border: "1px solid #223522", borderRadius: 10, padding: 10 } as const;

/* ================= 05 — The opaque campaign workflow (full rebuild) ================= */
const W05: Array<{ t: string; icon: ReactNode; drop: boolean }> = [
  { t: "Brief", icon: <span style={{ fontSize: 30 }}>▤</span>, drop: true },
  { t: "Agency", icon: <span style={{ fontSize: 30 }}>▦</span>, drop: true },
  { t: "Outreach", icon: <>{[1, 2, 3].map((i) => <p key={i} style={{ margin: "3px 0", background: "#2a2f2a", borderRadius: 5, padding: "3px 6px" }}>◉ ━━</p>)}</>, drop: true },
  { t: "Content", icon: <><p style={{ margin: "3px 0", background: "#2a2f2a", borderRadius: 5, padding: "5px 6px" }}>▶</p><p style={{ margin: "3px 0", background: "#2a2f2a", borderRadius: 5, padding: "5px 6px" }}>▨</p><p style={{ margin: "3px 0", background: "#2a2f2a", borderRadius: 5, padding: "5px 6px" }}>━━ ━━</p></>, drop: true },
  { t: "Screenshots", icon: <div style={{ border: "1.5px solid #6a706a", borderRadius: 7, padding: "5px 6px", background: "#222622" }}>○<p style={{ margin: "2px 0", fontSize: 15 }}>▨</p><span style={{ fontSize: 9 }}>♡ ⌕ ▽<br />━━ ━━</span></div>, drop: true },
  { t: "Spreadsheets", icon: <div style={{ border: "1.5px solid #6a706a", borderRadius: 5, padding: "4px", background: "#222622" }}><span style={{ fontSize: 9 }}>▦ ✕</span><div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1.5, marginTop: 3 }}>{Array.from({ length: 16 }, (_, i) => <span key={i} style={{ height: 6, background: "#3a403a" }} />)}</div></div>, drop: true },
  { t: "Disputed metrics", icon: <>{["⚠", "?", "⚠"].map((s, i) => <p key={i} style={{ margin: "3px 0", background: "#2a2f2a", borderRadius: 5, padding: "3px 6px" }}>◉ ━━ <span style={{ color: "#ff7a1a", float: "right" }}>{s === "?" ? "?" : "⚠"}</span></p>)}</>, drop: false },
  { t: "Manual payment", icon: <><p style={{ margin: "3px 0", fontSize: 24 }}>▭</p><p style={{ margin: "3px 0", background: "#2a2f2a", borderRadius: 5, padding: "4px 6px" }}>⌂ ━━</p></>, drop: true },
];
export function Allweb3OpaqueWorkflow() {
  const [sel, setSel] = useState(6);
  return <AwR n="05" title="The opaque campaign workflow" label="ALLWEB3 opaque campaign workflow — full rebuild of 5.webp" foot="ALLWEB3 — The legacy workflow">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 6 }}>
      {W05.map((p, i) => <div key={p.t}>
        <button type="button" onClick={() => setSel(i)} aria-pressed={sel === i} style={{ width: "100%", background: "#1c201c", border: p.t === "Disputed metrics" ? "1.5px dashed #8a908a" : "1px solid #3a403a", outline: sel === i ? `2px solid ${G}` : "none", borderRadius: 10, color: "#e8e8e8", padding: "8px 5px", cursor: "pointer", font: "inherit", minHeight: 148, verticalAlign: "top" }}>
          <b style={{ fontSize: 11.5, display: "block", marginBottom: 6 }}>{p.t}</b>{p.icon}
        </button>
        <p style={{ textAlign: "center", margin: "2px 0", color: "#8a908a" }}>{i < 7 ? "" : ""}</p>
        {p.drop ? <div style={{ textAlign: "center", opacity: 0.55 }}>
          <svg width="14" height="34" viewBox="0 0 14 34" style={{ display: "block", margin: "0 auto" }} aria-hidden="true"><line x1="7" y1="0" x2="7" y2="26" stroke="#8a908a" strokeWidth="1.6" strokeDasharray="3 4" /><path d="M2 24 L7 33 L12 24" fill="none" stroke="#8a908a" strokeWidth="1.6" /></svg>
          <div style={{ background: "#141714", border: "1px solid #2c302c", borderRadius: 7, padding: "8px 5px", fontSize: 20, minHeight: 118, color: "#c9c9ce" }}>
            <span style={{ display: "block", height: 6, background: "#2c302c", borderRadius: 3, margin: "34px 4px 0" }} />
            <span style={{ display: "block", height: 6, background: "#2c302c", borderRadius: 3, margin: "5px 10px 0" }} />
            <span style={{ display: "block", fontSize: 9.5, marginTop: 7 }}>{p.t}</span>{p.t === "Brief" ? "▤" : p.t === "Agency" ? "▦" : p.t === "Outreach" ? "◉" : p.t === "Content" ? "▶" : p.t === "Screenshots" ? "▨" : p.t === "Spreadsheets" ? "▦" : "⌂"}</div>
          <p style={{ margin: "3px 0 0", color: "#ff7a1a", fontSize: 19 }}>⚠</p>
        </div> : <p style={{ textAlign: "center", ...dim, fontSize: 10.5, margin: "6px 0 0" }}>Set apart as printed — dashed border, disputed at rest.</p>}
      </div>)}
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
      <div style={{ ...card, fontSize: 12 }}>
        <p style={{ margin: "2px 0" }}>╌╌ Disconnected handoffs</p>
        <p style={{ margin: "2px 0" }}>〽 Handoff gaps &amp; rework</p>
        <p style={{ margin: "2px 0" }}><span style={{ color: "#ff7a1a" }}>⚠</span> Risk of errors, delays &amp; disputes</p>
      </div>
      <div style={{ ...card, display: "flex", gap: 14, alignItems: "center" }} aria-live="polite">
        <p style={{ margin: 0 }}>Fragmented process.<br />No single source of truth.<br />Accountability is unclear.</p>
        <p style={{ margin: 0, borderLeft: "1px solid #223522", paddingLeft: 14 }}>The legacy way.<br /><b style={{ color: G }}>ALLWEB3 changes this.</b></p>
      </div>
    </div>
    <p style={{ ...dim, margin: "8px 0 0" }}>Selected stage: <b style={{ color: "#e8f5e8" }}>{W05[sel].t}</b> — every handoff in the printed chain drops to a faded duplicate and a warning: disconnected, reworked, disputed.</p>
  </AwR>;
}

/* ================= 07 — Legacy Process vs ALLWEB3 (full rebuild) ================= */
const L07: Array<[string, string, string]> = [
  ["✉", "Emails", "Unknown Owner"], ["💬", "Chats", "Multiple People"], ["▦", "Spreadsheets", "Unknown Owner"],
  ["%", "Agency fees", "Unclear Recipient"], ["🖼", "Screenshots", "Manual Checking"], ["⇄", "Manual transfers", "Finance Team"],
];
const A07: Array<[string, string, string, string]> = [
  ["📄", "Structured brief", "Clear goals, deliverables, timeline & budget", "Project (Advertiser)"],
  ["👥", "Matching", "AI-assisted matching from verified creators", "ALLWEB3 Platform"],
  ["🛡", "Escrow", "Funds secured in escrow", "ALLWEB3 Escrow"],
  ["📊", "Verified performance", "Deliverables tracked and verified", "ALLWEB3 Verification"],
  ["🏅", "Reputation", "Performance recorded on-chain reputation", "ALLWEB3 Reputation"],
  ["👛", "Automatic settlement", "Conditions met, payments released", "ALLWEB3 Settlement"],
];
export function Allweb3LegacyVs() {
  const [sel, setSel] = useState(2);
  return <AwR n="07" titleSize={12} title="ALLWEB3 — LEGACY VS ALLWEB3" label="ALLWEB3 legacy process versus ALLWEB3 — full rebuild of 7.webp" foot="ALLWEB3 — Legacy vs ALLWEB3 · Illustrative data only. Outcomes vary by use case and execution.">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 44px 1.25fr", gap: 0, alignItems: "stretch" }}>
      <div>
        <p style={{ textAlign: "center", margin: "0 0 2px" }}><b style={{ fontSize: 17, letterSpacing: ".06em" }}>LEGACY PROCESS</b></p>
        <p style={{ textAlign: "center", ...dim, margin: "0 0 10px" }}>Fragmented. Manual. Unclear.</p>
        {L07.map(([ic, t, owner], i) => <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <button type="button" onClick={() => setSel(i)} aria-pressed={sel === i} style={{ flex: 1.2, display: "flex", gap: 9, alignItems: "center", background: "#141714", border: "1px solid #2c302c", outline: sel === i ? "2px solid #8a908a" : "none", borderRadius: 9, color: "#e8e8e8", padding: "5px 10px", cursor: "pointer", font: "inherit", textAlign: "left" }}><span style={{ background: "#222622", borderRadius: 6, padding: "4px 7px" }}>{ic}</span><b>{t}</b></button>
          <span style={{ flex: 1, borderTop: "2px dashed #4a504a", position: "relative", textAlign: "center", color: "#8a908a" }}><span style={{ background: "#050805", padding: "0 4px", position: "relative", top: -9 }}>?</span></span>
          <span style={{ flex: 1, background: "#141714", border: "1px solid #2c302c", borderRadius: 9, padding: "5px 10px", fontSize: 12 }}>👤 {owner}</span>
        </div>)}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", borderLeft: "1px solid #2c302c", marginLeft: 21 }}>
        <span style={{ width: 42, height: 42, borderRadius: "50%", border: `2px solid ${G}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, background: "#050805", marginLeft: -22 }}>VS</span>
      </div>
      <div>
        <p style={{ textAlign: "center", margin: "0 0 2px" }}><b style={{ fontSize: 17, letterSpacing: ".06em", color: G }}>ALLWEB3</b></p>
        <p style={{ textAlign: "center", ...dim, margin: "0 0 10px" }}>Structured. Transparent. Automated.</p>
        {A07.map(([ic, t, d, owner], i) => <button key={t} type="button" onClick={() => setSel(i)} aria-pressed={sel === i} style={{ width: "100%", display: "flex", gap: 9, alignItems: "center", background: "#0a1a0a", border: "1px solid #2c5a2c", outline: sel === i ? `2px solid ${G}` : "none", borderRadius: 9, color: "#e8f5e8", padding: "5px 10px", cursor: "pointer", font: "inherit", textAlign: "left", marginBottom: 5 }}>
          <span style={{ width: 21, height: 21, borderRadius: "50%", background: G, color: "#021202", fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span>
          <span style={{ border: `1.5px solid ${G}`, borderRadius: 7, padding: "4px 6px" }}>{ic}</span>
          <b style={{ minWidth: 118 }}>{t}</b><span style={{ color: G }}>→</span>
          <span style={{ flex: 1, fontSize: 12 }}>{d}</span>
          <span style={{ border: "1px solid #2c5a2c", borderRadius: 7, padding: "4px 8px", fontSize: 11.5, color: G }}>👤 {owner}</span>
        </button>)}
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 12, marginTop: 6 }}>
      <div style={{ ...card, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 26, color: "#ff7a1a" }}>⚠</span>
        <p style={{ margin: 0, flex: 1 }}><b>High friction. Low visibility. Higher risk.</b><br /><span {...{ style: dim }}>Miscommunication, delays, disputes, and payment uncertainty.</span></p>
        <p style={{ margin: 0, borderLeft: "1px solid #223522", paddingLeft: 12 }}><span {...{ style: dim }}>Illustrative data</span><br /><b style={{ fontSize: 18 }}>20–40%</b><br />value leakage</p>
      </div>
      <div style={{ ...card, borderColor: G, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 24, color: G }}>✓</span>
        <p style={{ margin: 0, flex: 1 }}><b style={{ color: G }}>Low friction. Full visibility. Lower risk.</b><br /><span {...{ style: dim }}>Structured flows, verified results, trusted payments.</span></p>
        <p style={{ margin: 0, borderLeft: "1px solid #223522", paddingLeft: 12 }}><span {...{ style: dim }}>Illustrative data</span><br /><b style={{ fontSize: 18, color: G }}>15–30%</b><br />efficiency gain</p>
      </div>
    </div>
  </AwR>;
}

/* ================= 08 — The trust gap (full rebuild) ================= */
const GAP_LABELS: Array<{ t: string; icon: string; area: string }> = [
  { t: "Attribution", icon: "◎", area: "1 / 2" }, { t: "Identity", icon: "👤", area: "1 / 3" }, { t: "Evidence", icon: "📄", area: "1 / 4" },
  { t: "Approval", icon: "🖐", area: "3 / 2" }, { t: "Settlement", icon: "🏛", area: "3 / 4" },
];
const GAP_RESULTS: Array<[string, string, string]> = [["👁", "Impressions?", "2,500,000"], ["👍", "Engagement?", "125,000"], ["📈", "Conversions?", "3,200"]];
export function Allweb3TrustGap() {
  const [sel, setSel] = useState(1);
  const names = ["Attribution", "Identity", "Evidence", "Approval", "Settlement"];
  const icons = ["◎", "👤", "📄", "🖐", "🏛"];
  const chip = (i: number, style: React.CSSProperties) => <button key={names[i]} type="button" onClick={() => setSel(i)} aria-pressed={sel === i} style={{ position: "absolute", zIndex: 3, background: "#050805", border: `1.5px dashed ${sel === i ? G : "#4a7a4a"}`, borderRadius: 999, color: "#e8f5e8", padding: "7px 14px", cursor: "pointer", font: "inherit", ...style }}><span style={{ color: G, marginRight: 6 }}>{icons[i]}</span>{names[i]}</button>;
  return <AwR n="08" title={<><span style={{ color: G }}>The</span> trust gap</>} label="ALLWEB3 the trust gap — full rebuild of 8.webp" foot="ALLWEB3 — The Trust Gap">
    <div style={{ position: "relative", height: 372 }}>
      <svg viewBox="0 0 900 372" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} aria-hidden="true">
        <defs><filter id="aw8glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <g stroke="#5a6a5a" strokeWidth="1.4" strokeDasharray="4 5">
          <line x1="330" y1="86" x2="352" y2="150" /><line x1="470" y1="52" x2="470" y2="112" /><line x1="612" y1="86" x2="590" y2="150" />
          <line x1="392" y1="292" x2="392" y2="330" /><line x1="560" y1="292" x2="560" y2="330" />
        </g>
        <g fill="#8a908a" fontSize="15" fontWeight="700"><text x="322" y="126">{"//"}</text><text x="452" y="92">{"//"}</text><text x="596" y="126">{"//"}</text><text x="378" y="318">{"//"}</text><text x="546" y="318">{"//"}</text></g>
        <path d="M188 196 C 240 178, 285 214, 338 196" fill="none" stroke={G} strokeWidth="4" filter="url(#aw8glow)" />
        <path d="M188 196 L 338 196" fill="none" stroke={G} strokeWidth="2" opacity=".65" />
        <polygon points="352,150 588,150 636,112 400,112" fill="#171917" stroke="#3a403a" />
        <rect x="352" y="150" width="284" height="142" fill="#030403" stroke="#3a403a" />
        <g fill="none" stroke={G} strokeWidth="3.5" filter="url(#aw8glow)">
          <path d="M636 168 C 720 160, 740 108, 806 104" />
          <path d="M636 205 L 806 205" />
          <path d="M636 244 C 720 254, 740 302, 806 306" />
        </g>
      </svg>
      <span style={{ position: "absolute", left: "44.5%", top: 168, zIndex: 2, width: 74, height: 74, borderRadius: "50%", background: "#101210", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, color: "#3a403a", fontWeight: 800 }}>?</span>
      {chip(0, { left: "27%", top: "13%" })}{chip(1, { left: "46.5%", top: "1%" })}{chip(2, { left: "63%", top: "13%" })}
      {chip(3, { left: "33%", top: "90%" })}{chip(4, { left: "56%", top: "90%" })}
      <div style={{ ...card, textAlign: "center", position: "absolute", left: 0, top: 118, width: 172, zIndex: 2 }}>
        <p style={{ margin: 0 }}><b>Campaign budget</b></p>
        <p style={{ fontSize: 28, margin: "6px 0 0", color: G }}>👛</p>
        <p style={{ margin: "4px 0 0" }}><b style={{ fontSize: 19, color: G }}>$100,000</b><br /><span {...{ style: dim }}>Illustrative data</span></p>
      </div>
      <div style={{ position: "absolute", right: 0, top: 52, width: 196, display: "grid", gap: 34, zIndex: 2 }}>
        {GAP_RESULTS.map(([ic, t, v]) => <div key={t} style={{ ...card, display: "flex", gap: 10, alignItems: "center", position: "relative" }}>
          <span style={{ position: "absolute", left: -13, top: "50%", width: 9, height: 9, borderRadius: "50%", background: G, boxShadow: `0 0 10px ${G}` }} />
          <span style={{ fontSize: 19, color: G }}>{ic}</span>
          <p style={{ margin: 0 }}><b>{t}</b><br /><b style={{ color: G, fontSize: 15 }}>{v}</b><br /><span {...{ style: dim }}>Illustrative data</span></p>
        </div>)}
      </div>
    </div>
    <p style={{ ...dim, margin: "10px 0 0" }} aria-live="polite">Money flows in on a thick glowing green stream; wavy green lines carry it out to the three result boxes, questioned at every dashed break — <b style={{ color: "#e8f5e8" }}>{names[sel]}</b> is one of the five broken links the platform closes.</p>
  </AwR>;
}

/* ================= 13 — Verifiable Trust Loop (full rebuild) ================= */
const LOOP13: Array<{ n: string; t: string; d: string; icon: string; pos: string; hot?: boolean }> = [
  { n: "01", t: "Identity", d: "Verifiable profile and credentials", icon: "👤", pos: "1 / 2 / 2 / 5" },
  { n: "02", t: "Participation", d: "Engage in projects, deliver work, contribute", icon: "👥", pos: "2 / 4 / 3 / 6" },
  { n: "03", t: "Verified evidence", d: "Completed milestones, reviews, and proofs", icon: "🛡", pos: "3 / 4 / 4 / 6", hot: true },
  { n: "06", t: "Settlement", d: "Successful settlement reinforces identity", icon: "✓", pos: "4 / 2 / 5 / 5" },
  { n: "04", t: "Reputation", d: "Evidence updates reputation over time", icon: "★", pos: "3 / 1 / 4 / 3" },
  { n: "05", t: "Matching and terms", d: "Better matches, better terms", icon: "🤝", pos: "2 / 1 / 3 / 3" },
];
export function Allweb3TrustLoop() {
  const [sel, setSel] = useState(2);
  const order = [0, 1, 2, 4, 5, 3]; // LOOP13 indexes in loop order 01..06
  const pos: React.CSSProperties[] = [
    { left: "38%", top: 0, width: "24%" },
    { right: 0, top: "24%", width: "27%" },
    { right: 0, bottom: "16%", width: "27%" },
    { left: "38%", bottom: 0, width: "24%" },
    { left: 0, bottom: "16%", width: "27%" },
    { left: 0, top: "24%", width: "27%" },
  ];
  return <AwR n="13" title="Verifiable Trust Loop" label="ALLWEB3 verifiable trust loop — full rebuild of 13.webp" foot="ALLWEB3 — Verifiable Trust Loop · Illustrative architecture">
    <div style={{ display: "grid", gridTemplateColumns: "215px 1fr", gap: 16 }}>
      <div>
        <div style={{ border: "1.5px dashed #4a7a4a", borderRadius: 8, padding: "8px 10px", textAlign: "center", ...dim, letterSpacing: ".08em", fontSize: 11 }}>ALLWEB3 LOGO<br />PLACEHOLDER</div>
        <p style={{ margin: "14px 0 0" }}>A reinforcing cycle where identity, activity, and outcomes compound into stronger reputation and better opportunities.</p>
        <span style={{ display: "block", width: 44, height: 3, background: G, margin: "12px 0" }} />
        <div style={{ ...card, fontSize: 12 }}>
          <p style={{ margin: "3px 0" }}><span style={{ color: "#fff" }}>━━</span> Reinforcing trust flow</p>
          <p style={{ margin: "3px 0" }}><span style={{ color: G }}>━━</span> Verified transition</p>
          <p style={{ margin: "3px 0" }}><span {...{ style: dim }}>┄┄</span> Reinforcement signal</p>
          <p style={{ margin: "3px 0" }}><span style={{ color: G }}>┄┄</span> Portable output</p>
        </div>
        <p style={{ ...dim, margin: "8px 0 0" }}>Illustrative architecture</p>
      </div>
      <div>
        <div style={{ position: "relative", height: 408 }}>
          <svg viewBox="0 0 620 408" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
            <defs><marker id="aw13arr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill={G} /></marker></defs>
            <ellipse cx="310" cy="204" rx="218" ry="152" fill="none" stroke="#3d6b3d" strokeWidth="2" strokeDasharray="7 6" />
            <path d="M 398 76 A 218 152 0 0 1 520 148" fill="none" stroke={G} strokeWidth="3" markerEnd="url(#aw13arr)" />
            <path d="M 528 236 A 218 152 0 0 1 442 338" fill="none" stroke={G} strokeWidth="3" markerEnd="url(#aw13arr)" />
            <path d="M 252 352 A 218 152 0 0 1 104 268" fill="none" stroke={G} strokeWidth="3" markerEnd="url(#aw13arr)" />
            <path d="M 96 158 A 218 152 0 0 1 200 66" fill="none" stroke={G} strokeWidth="3" markerEnd="url(#aw13arr)" />
          </svg>
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", textAlign: "center", width: 170 }}>
            <b style={{ fontSize: 20, lineHeight: 1.3 }}>Portable<br />proof of<br />performance</b>
          </div>
          {order.map((li, k) => { const st = LOOP13[li]; return <button key={st.n} type="button" onClick={() => setSel(li)} aria-pressed={sel === li} style={{ position: "absolute", ...pos[k], background: "#0d120d", border: st.hot ? `2px solid ${G}` : "1px solid #3a4a3a", outline: sel === li ? `2px solid ${G}` : "none", borderRadius: 11, color: "#e8f5e8", padding: "9px 10px", cursor: "pointer", font: "inherit", textAlign: "left" }}>
            <span style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", width: 25, height: 25, borderRadius: "50%", background: "#0d120d", border: `1.5px solid ${st.hot ? G : "#8a908a"}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{st.icon}</span>
            <p style={{ margin: "8px 0 0" }}><b style={{ color: G, marginRight: 6 }}>{st.n}</b><b>{st.t}</b></p>
            <p style={{ margin: "3px 0 0", ...dim, fontSize: 11.5 }}>{st.d}</p>
          </button>; })}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
          <div style={{ border: `2px solid ${G}`, borderRadius: 10, padding: "9px 12px", display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontSize: 20 }}>📜</span>
            <p style={{ margin: 0 }}><b>Portable proof</b><br /><span {...{ style: dim }}>(Verifiable certificate)</span></p>
          </div>
        </div>
        <p style={{ ...dim, margin: "8px 0 0" }} aria-live="polite">Selected: <b style={{ color: "#e8f5e8" }}>{LOOP13[sel].t}</b> — {LOOP13[sel].d}.</p>
      </div>
    </div>
  </AwR>;
}

/* ================= 19 — One Campaign Across Three Portals: full matrix ================= */
const SYNC_STEPS_R: Array<{ title: string; when: string; cells: Array<[string, string]> }> = [
  { title: "Campaign Active", when: "May 1, 2025 00:00 UTC", cells: [
    ["Campaigns", "Meridian Protocol Ambassador Program · Active · May 1 – May 31, 2025 (UTC) · Rewards Pool 50,000 USDC · View Details"],
    ["Campaigns", "Meridian Protocol Ambassador Program · Active · May 1 – May 31, 2025 (UTC) · Submissions 128 · View Dashboard"],
    ["Audit Log", "May 1, 2025 · 00:00:01 Campaign Created · Meridian Protocol"]] },
  { title: "Creator Submits Work", when: "May 8, 2025 14:32 UTC", cells: [
    ["My Submissions — New Submission", "SUB-2025-05-0987 · May 8, 2025 14:32 UTC · X Post Thread “Why Meridian is the Future of Onchain Identity” · Submitted"],
    ["Submissions", "SUB-2025-05-0987 · Maya Chen @maya.chen · X Post Thread · May 8, 2025 14:32 UTC · New"],
    ["Audit Log", "May 8, 2025 · 14:32:10 Submission Created · SUB-2025-05-0987 by Maya Chen"]] },
  { title: "Project Reviews", when: "May 12, 2025 09:41 UTC", cells: [
    ["Submission Details", "SUB-2025-05-0987 · Status Under Review · Submitted May 8, 2025 14:32 UTC · Content X Post Thread · View Content"],
    ["Review Queue", "SUB-2025-05-0987 · Maya Chen @maya.chen · X Post Thread · Score 92 / 100 · Review"],
    ["Audit Log", "May 12, 2025 · 09:41:22 Project Review · SUB-2025-05-0987 · Score: 92 / 100"]] },
  { title: "Verification Confirms Performance", when: "May 14, 2025 16:20 UTC", cells: [
    ["Performance", "Impressions 24,531 ✓ · Engagements 1,842 ✓ · Engagement Rate 7.51% ✓ · Verified May 14, 2025 16:20 UTC"],
    ["Verification", "Status Verified · Verified At May 14, 2025 16:20 UTC · Source Meridian Analytics · View Report"],
    ["Audit Log", "May 14, 2025 · 16:20:33 Verification Confirmed · SUB-2025-05-0987 · Source: Meridian Analytics"]] },
  { title: "Settlement Releases", when: "May 15, 2025 11:05 UTC", cells: [
    ["Earnings", "Reward 1,250 USDC · Status Released · Released May 15, 2025 11:05 UTC · View Payout"],
    ["Settlement", "Status Released · Amount 1,250 USDC · Released At May 15, 2025 11:05 UTC · View Payout"],
    ["Exception & Intervention", "May 15, 2025 · 10:52:18 Anomaly Detected — Engagement spike flagged · 10:54:03 Admin Review — Verified genuine · 11:05:02 Settlement Approved — 1,250 USDC released"]] },
  { title: "Certificate Issued", when: "May 15, 2025 11:07 UTC", cells: [
    ["Certificate", "MERIDIAN PROTOCOL AMBASSADOR · Presented to Maya Chen · Campaign: May 1 – May 31, 2025 · Credential ID CRT-2025-05-0987"],
    ["Certificates", "CRT-2025-05-0987 · Maya Chen @maya.chen · Issued May 15, 2025 11:07 UTC · Issued · View Certificate"],
    ["Audit Log", "May 15, 2025 · 11:07:45 Certificate Issued · CRT-2025-05-0987"]] },
];
const SYNC_PORTALS_R: Array<[string, string]> = [["CREATOR PORTAL", "Maya Chen · @maya.chen"], ["PROJECT PORTAL", "Meridian Protocol · @meridian"], ["ADMIN PORTAL", "ALLWEB3 Administrator · @allweb3.admin"]];
export function Allweb3ThreePortalsMatrix() {
  const [step, setStep] = useState(0);
  return <AwR n="19" title="One Campaign Across Three Portals" sub="Shared campaign. One source of truth. Synchronized updates." label="ALLWEB3 one campaign across three portals — full matrix rebuild of 19.webp" foot="System View · All timestamps in UTC · ✓ Synchronized · ⚠ Exception Handled · ○ Read-Only Reference — One campaign. One truth. Three perspectives.">
    <div style={{ ...card, display: "inline-block", float: "right", marginLeft: 12, fontSize: 12 }}>
      <p style={{ margin: 0 }}><span style={{ color: G }}>CAMPAIGN</span> — <b>Meridian Protocol Ambassador Program</b></p>
      <p style={{ margin: "2px 0 0", ...dim }}>CAMPAIGN ID CMP-2025-05-001 · TIME WINDOW May 1 – May 31, 2025 (UTC) · STATUS <span style={{ color: G }}>Active</span></p>
    </div>
    <div style={{ clear: "both" }} />
    <div style={{ display: "grid", gridTemplateColumns: "118px repeat(6, 1fr)", gap: 5, marginTop: 8 }}>
      <span />
      {SYNC_STEPS_R.map((s, i) => <button key={s.title} type="button" onClick={() => setStep(i)} aria-pressed={step === i} style={{ background: "transparent", border: "none", color: "#e8f5e8", cursor: "pointer", font: "inherit", textAlign: "left", padding: "2px 3px", outline: step === i ? `1.5px solid ${G}` : "none", borderRadius: 7 }}>
        <span style={{ display: "inline-flex", width: 19, height: 19, borderRadius: "50%", border: `2px solid ${G}`, color: G, alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10.5, marginBottom: 3 }}>{i + 1}</span>
        <b style={{ display: "block", fontSize: 11, lineHeight: 1.25 }}>{s.title}</b>
        <span style={{ ...dim, fontSize: 9.5 }}>{s.when}</span>
      </button>)}
      {SYNC_PORTALS_R.map(([portal, actor], r) => [
        <div key={portal} style={{ ...card, padding: 8 }}>
          <p style={{ margin: 0, color: G, fontWeight: 700, fontSize: 11 }}>{portal}</p>
          <p style={{ margin: "3px 0 0", ...dim, fontSize: 10.5 }}>{actor}</p>
          <p style={{ margin: "6px 0 0", color: G }}>✓</p>
        </div>,
        ...SYNC_STEPS_R.map((s, c) => { const [head, body] = s.cells[r]; const isException = head === "Exception & Intervention"; return <div key={`${portal}-${c}`} onClick={() => setStep(c)} style={{ ...card, padding: 8, cursor: "pointer", borderColor: isException ? "#ff7a1a" : step === c ? G : "#223522", fontSize: 10.5 }}>
          <b style={{ color: isException ? "#ff7a1a" : "#e8f5e8" }}>{head}</b>
          <p style={{ margin: "3px 0 0", lineHeight: 1.45 }}>{body}</p>
          <p style={{ margin: "5px 0 0", color: isException ? "#ff7a1a" : G }}>{isException ? "⚠ Exception Handled" : "✓ Synchronized"}</p>
        </div>; }),
      ])}
    </div>
  </AwR>;
}

/* ================= 12 — Three-layer architecture: stacked bands ================= */
const LAYERS_R: Array<{ name: string; sub: string; icon: string; modules: Array<[string, string]> }> = [
  { name: "Application layer", sub: "User-facing portals and experiences", icon: "🖥", modules: [
    ["Creator Portal", "Campaigns, content, earnings, reputation, and insights"], ["Project Portal", "Campaign management, budgets, results, and reporting"], ["Admin Portal", "Oversight, configuration, compliance, analytics, and dispute handling"]] },
  { name: "Verification layer", sub: "Trust, validation, and reputation services", icon: "🛡", modules: [
    ["Evidence collection", "Gather raw data and proofs"], ["Normalization", "Standardize formats and metrics"], ["Fraud checks", "Detect anomalies and policy violations"], ["Oracle validation", "Third-party and on-chain attestations"], ["KPI calculation", "Compute outcomes and performance"]] },
  { name: "Settlement layer", sub: "Escrow, on-chain records, and final settlement", icon: "⚖", modules: [
    ["Escrow", "Secure budget custody with release rules"], ["Base or Arbitrum record", "Immutable record of campaign results and attestations"], ["Payment release", "Automated payouts per rules and results"], ["Certificate reference", "Reference to on-chain certificate and proofs"]] },
];
export function Allweb3LayersBands() {
  const [sel, setSel] = useState<[number, number]>([1, 2]);
  return <AwR n="12" title="Three-Layer Architecture" sub="Company-stated architecture and illustrative implementation boundaries." label="ALLWEB3 three-layer architecture — stacked bands rebuild of 12.webp" foot="ALLWEB3 — Illustrative Architecture · ↓ Data, evidence & actions downward · ↑ Confirmations & attestations upward">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 150px", gap: 10 }}>
      <div>
        {LAYERS_R.map((l, li) => <div key={l.name}>
          {li > 0 && <p style={{ textAlign: "center", margin: "3px 0", color: G, fontSize: 15 }}>▼</p>}
          <div style={{ ...card, padding: 0, overflow: "hidden" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 168, flex: "none", background: "#0d2410", padding: "10px 12px", clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)" }}>
                <p style={{ margin: 0, fontSize: 16 }}>{l.icon}</p>
                <b style={{ fontSize: 13.5 }}>{l.name}</b>
                <p style={{ margin: "2px 0 0", ...dim, fontSize: 11 }}>{l.sub}</p>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: `repeat(${l.modules.length}, 1fr)` }}>
                {l.modules.map(([m, d], mi) => <button key={m} type="button" onClick={() => setSel([li, mi])} aria-pressed={sel[0] === li && sel[1] === mi} style={{ background: sel[0] === li && sel[1] === mi ? "#12240f" : "transparent", border: "none", borderLeft: "1px solid #223522", color: "#e8f5e8", padding: "9px 9px", cursor: "pointer", font: "inherit", textAlign: "left" }}>
                  <b style={{ fontSize: 12 }}>{m}</b>
                  <p style={{ margin: "3px 0 0", ...dim, fontSize: 11, lineHeight: 1.4 }}>{d}</p>
                </button>)}
              </div>
            </div>
          </div>
        </div>)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", fontSize: 11.5 }}>
        <p style={{ margin: 0 }}><span style={{ color: G }}>↑</span> <b>Confirmations &amp; attestations upward</b><br /><span {...{ style: dim }}>Solid green return path, as printed on the right edge.</span></p>
        <p style={{ margin: 0 }}><span style={{ color: G }}>↑</span> <b>Settlement confirmations upward</b><br /><span {...{ style: dim }}>Dashed return path, as printed on the right edge.</span></p>
        <p style={{ margin: 0, ...dim }} aria-live="polite">Selected: <b style={{ color: "#e8f5e8" }}>{LAYERS_R[sel[0]].modules[sel[1]][0]}</b> — {LAYERS_R[sel[0]].modules[sel[1]][1]}</p>
      </div>
    </div>
  </AwR>;
}

/* ================= 10 — Success criteria: seven columns ================= */
const CRITERIA_R: Array<[string, string, string[]]> = [
  ["Clear campaign terms", "▤", ["All key terms defined", "Roles and responsibilities mapped", "Approval captured"]],
  ["Reduced workflow fragmentation", "⛓", ["Fewer tool handoffs", "Standardized workflow steps", "Rework minimized"]],
  ["Visible status ownership", "👤", ["Single owner per stage", "Status updated in real time", "Clear next action"]],
  ["Traceable evidence", "📁", ["Required evidence attached", "Time-stamped records", "Source verifiable"]],
  ["Safe payment release", "🛡", ["Conditions met", "Approvals recorded", "Release authorized"]],
  ["Actionable analytics", "📊", ["Timely, reliable data", "KPI definitions in place", "Insights drive decisions"]],
  ["Auditable exceptions", "⚠", ["Exceptions logged", "Reviewed and resolved", "Lessons captured"]],
];
export function Allweb3CriteriaColumns() {
  const [stage, setStage] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  return <AwR n="10" title="Success criteria" label="ALLWEB3 success criteria — seven-column rebuild of 10.webp" foot="ALLWEB3 — Success Criteria · CMP-2026-042">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
      <span style={{ border: "1px dashed #4a7a4a", padding: "5px 9px", fontSize: 10.5, ...dim }}>BRAND AREA — Reserved for ALLWEB3 logo</span>
      <span style={{ border: "1px solid #2c5a2c", borderRadius: 999, padding: "4px 10px", fontSize: 11 }}>CAMPAIGN ID · CMP-2026-042</span>
      <span style={{ ...dim, fontSize: 11.5 }}>○ Not yet measured</span>
    </div>
    <div style={{ position: "relative", marginTop: 14 }}>
      <span style={{ position: "absolute", left: 0, right: 0, top: 21, height: 2, background: G }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, position: "relative" }}>
        {CRITERIA_R.map(([t, icon, signals], i) => <div key={t} style={{ ...card, padding: 8, borderColor: stage === i ? G : "#223522" }}>
          <span style={{ display: "flex", width: 27, height: 27, borderRadius: "50%", background: "#050805", border: `1.5px solid ${G}`, alignItems: "center", justifyContent: "center", margin: "0 auto", fontSize: 12.5 }}>{icon}</span>
          <button type="button" onClick={() => setStage(i)} aria-pressed={stage === i} style={{ width: "100%", background: "none", border: "none", color: "#e8f5e8", cursor: "pointer", font: "inherit", padding: "5px 0 0" }}>
            <span style={{ color: G, fontWeight: 800, fontSize: 10.5 }}>{String(i + 1).padStart(2, "0")}</span>
            <b style={{ display: "block", fontSize: 11.5, lineHeight: 1.3 }}>{t}</b>
          </button>
          <p style={{ ...dim, fontSize: 10, margin: "6px 0 3px", letterSpacing: ".06em" }}>EVIDENCE SIGNALS</p>
          {signals.map((s, si) => { const key = `${i}-${si}`; return <p key={s} style={{ margin: "3px 0" }}><button type="button" aria-pressed={!!checked[key]} onClick={() => setChecked((c) => ({ ...c, [key]: !c[key] }))} style={{ background: "none", border: "none", color: "#e8f5e8", cursor: "pointer", font: "inherit", fontSize: 10.5, textAlign: "left", padding: 0 }}>{checked[key] ? "✓" : "○"} {s}</button></p>; })}
          <div style={{ borderTop: "1px solid #223522", marginTop: 6, paddingTop: 5 }}>
            <p style={{ margin: 0, fontSize: 10.5 }}><span style={{ color: G }}>○</span> Not yet measured</p>
            <p style={{ margin: "2px 0 0", ...dim, fontSize: 10 }}>Baseline not established<br />Awaiting campaign completion</p>
          </div>
        </div>)}
      </div>
    </div>
    <div style={{ borderTop: `2px solid ${G}`, marginTop: 12, paddingTop: 8, display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
      <span>ⓘ Design quality is judged by operational clarity and traceability.</span>
      <span style={{ ...dim }}>Illustrative data</span>
    </div>
  </AwR>;
}

/* ================= 15 — Top-Level IA: portals + domain tray ================= */
const IA_PORTALS_R: Array<{ name: string; motto: string; actor: string; items: string[] }> = [
  { name: "Creator Portal", motto: "Discover. Apply. Deliver. Earn.", actor: "CREATOR", items: ["Discover campaigns", "Apply and submit work", "Upload evidence", "Track verification & status", "Earn payouts and grow reputation"] },
  { name: "Project Portal", motto: "Define. Review. Verify. Grow.", actor: "PROJECT OWNER", items: ["Create and manage campaigns", "Review applications & submissions", "Verify work and approve payouts", "Monitor KPIs and performance", "Build community and reputation"] },
  { name: "Admin Portal", motto: "Oversee. Govern. Protect.", actor: "PLATFORM ADMIN", items: ["Platform oversight and governance", "Audit and ensure compliance", "Manage disputes and resolutions", "Monitor system health & KPIs", "Ensure trust, safety & quality"] },
];
const DOMAIN_R: Array<[string, string]> = [
  ["USER", "Identity and profile, roles and access."], ["WALLET", "Payment methods and balances."],
  ["CAMPAIGN", "Campaign details, rules, timeline, KPIs."], ["APPLICATION", "Creator application to a campaign."],
  ["SUBMISSION", "Submitted work and evidence."], ["KPI", "Metrics and performance targets."],
  ["EVIDENCE", "Supporting files and proof."], ["VERIFICATION", "Review and verification records."],
  ["ESCROW", "Escrow setup and fund management."], ["PAYOUT", "Payouts, settlements and status."],
  ["REPUTATION", "Reputation score and history."], ["CERTIFICATE", "Achievement and completion certificates."],
  ["DISPUTE", "Disputes, resolutions and appeals."],
];
export function Allweb3IATray() {
  const [obj, setObj] = useState(2);
  return <AwR n="15" title="Top-Level Information Architecture" sub="Three purpose-built portals connected by a shared domain layer for identity, campaigns, verification, reputation, escrow, settlement, and trust." label="ALLWEB3 top-level IA — portals and domain tray rebuild of 15.webp" foot="ALLWEB3 Platform — Top-Level IA">
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 12 }}>
      <div>
        <p style={{ ...dim, margin: 0, fontSize: 11.5 }}>LEGEND</p>
        {[["CREATE (C)", G], ["READ (R)", "#6db3ff"], ["APPROVE (A)", "#ffb84d"], ["AUDIT (U)", "#c39bff"]].map(([t, c]) => <p key={t} style={{ margin: "5px 0", fontSize: 11.5 }}><span style={{ display: "inline-block", width: 22, height: 3, background: c, verticalAlign: "middle", marginRight: 6 }} />{t}</p>)}
        <p style={{ margin: "5px 0", fontSize: 11.5 }}><span style={{ display: "inline-block", width: 22, borderTop: "2px dashed #8a908a", verticalAlign: "middle", marginRight: 6 }} />OWNERSHIP</p>
      </div>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {IA_PORTALS_R.map((p) => <div key={p.name} style={{ ...card }}>
            <b style={{ fontSize: 13.5 }}>{p.name}</b>
            <p style={{ margin: "2px 0 0", color: G, fontSize: 11.5 }}>{p.motto}</p>
            <hr style={{ border: "none", borderTop: "1px solid #223522", margin: "7px 0" }} />
            {p.items.map((it) => <p key={it} style={{ margin: "3.5px 0", fontSize: 11.5 }}>• {it}</p>)}
            <p style={{ textAlign: "center", margin: "8px 0 0" }}><span style={{ border: `1.5px solid ${G}`, color: G, borderRadius: 999, padding: "3px 10px", fontSize: 10.5, fontWeight: 700 }}>{p.actor}</span></p>
          </div>)}
        </div>
        <p style={{ textAlign: "center", ...dim, margin: "6px 0", fontSize: 11 }}>┄ dashed ownership lines rise from the tray to each portal, as printed ┄</p>
        <div style={{ ...card, padding: 8 }}>
          <p style={{ margin: "0 0 6px" }}><b style={{ fontSize: 12 }}>SHARED DOMAIN OBJECTS</b> <span {...{ style: dim }}>— select an object</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: 4 }}>
            {DOMAIN_R.map(([name, d], i) => <button key={name} type="button" onClick={() => setObj(i)} aria-pressed={obj === i} style={{ background: obj === i ? "#12240f" : "#0d140d", border: `1px solid ${obj === i ? G : "#223522"}`, borderRadius: 7, color: "#e8f5e8", padding: "6px 3px", cursor: "pointer", font: "inherit" }}>
              <b style={{ fontSize: 8.5, display: "block", lineHeight: 1.25 }}>{name}</b>
              <span style={{ ...dim, fontSize: 8, display: "block", marginTop: 3, lineHeight: 1.3 }}>{d}</span>
            </button>)}
          </div>
          <p style={{ margin: "7px 0 0", fontSize: 11 }} aria-live="polite"><span style={{ color: G }}>━ CREATE</span> · <span style={{ color: "#6db3ff" }}>━ READ</span> · <span style={{ color: "#ffb84d" }}>━ APPROVE</span> · <span style={{ color: "#c39bff" }}>━ AUDIT</span> — connector lines link the objects under the tray, as printed. Selected: <b>{DOMAIN_R[obj][0]}</b>.</p>
        </div>
      </div>
    </div>
  </AwR>;
}

/* ================= 01 — Multi-portal hero: three panels at once ================= */
export function Allweb3MultiPortalWall() {
  const [sel, setSel] = useState(1);
  const win = (i: number, url: string, body: ReactNode) => <div style={{ ...card, padding: 0, overflow: "hidden", outline: sel === i ? `2px solid ${G}` : "none", transform: i === 0 ? "perspective(700px) rotateY(13deg) scale(.96)" : i === 2 ? "perspective(700px) rotateY(-13deg) scale(.96)" : "perspective(700px) scale(1.03)", transformOrigin: i === 0 ? "right center" : i === 2 ? "left center" : "center", boxShadow: "0 18px 34px rgba(0,0,0,.55)", zIndex: i === 1 ? 2 : 1, position: "relative" }}>
    <button type="button" onClick={() => setSel(i)} aria-pressed={sel === i} style={{ width: "100%", background: "#0d1a0d", border: "none", borderBottom: "1px solid #223522", color: "#8fbf8f", padding: "5px 9px", cursor: "pointer", font: "inherit", fontSize: 10.5, textAlign: "left" }}>← → ↻ 🔒 {url}</button>
    <div style={{ padding: 9, fontSize: 11.5 }}>{body}</div>
  </div>;
  return <AwR n="01" titleSize={25} titleAlign="right" title={<>Verifiable growth, from brief <span style={{ color: G }}>to settlement.</span></>} label="ALLWEB3 multi-portal overview — three-panel wall rebuild of 1.webp" foot="ALLWEB3 — CMP-2026-042 · ACTIVE">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr 128px", gap: 9, alignItems: "start", perspective: "900px", padding: "6px 2px 2px" }}>
      {win(0, "creator.allweb3.xyz", <>
        <p style={{ margin: 0 }}><b>@cryptomatt</b> — Web3 Creator · <span style={{ color: G }}>VERIFIED</span></p>
        <p style={{ ...dim, margin: "3px 0" }}>Campaigns · Submissions · Earnings · Reputation · Profile · Settings</p>
        <p style={{ margin: "6px 0 2px" }}><b>Brief</b></p>
        <p style={{ margin: 0 }}>Create 1-2 short-form videos about our new DeFi product.</p>
        <p style={{ margin: "6px 0 2px" }}><b>Your Progress — 3 / 5</b> <b style={{ color: G }}>60%</b></p>
        <div className="aw3-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} aria-label="Creator progress 60 percent"><div style={{ width: "60%" }} /></div>
        <p style={{ margin: "6px 0 0" }}>Submit Content — drag &amp; drop, MP4/MOV up to 2GB</p>
      </>)}
      {win(1, "project.allweb3.xyz", <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 4 }}>
          {[["Total Budget", "$250,000.00"], ["Spent (Escrow)", "$82,430.00"], ["Verified Results", "112"], ["Engagement", "3.7M"], ["Cost / Result", "$735.09"]].map(([k, v]) => <div key={k} style={{ border: "1px solid #223522", borderRadius: 7, padding: "5px 5px", minWidth: 0 }}><span style={{ ...dim, fontSize: 8.5, display: "block", whiteSpace: "nowrap", overflow: "hidden" }}>{k}</span><b style={{ fontSize: 10.5, whiteSpace: "nowrap" }}>{v}</b></div>)}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 7 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: `conic-gradient(${G} 0 92%, #1a2b1a 92% 100%)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}><span style={{ width: 38, height: 38, borderRadius: "50%", background: "#0a120a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10 }}>92/100</span></div>
            <p style={{ margin: "3px 0 0", fontSize: 10 }}>Campaign Health</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: "0 0 3px" }}><b>Top Creators</b></p>
            {[["@cryptomatt", 24], ["@defi.diana", 18], ["@chain_guru", 15], ["@web3_wendy", 11]].map(([n2, c]) => <p key={n2 as string} style={{ margin: "2px 0" }}>{n2 as string} <span style={{ color: G }}>{c as number}</span></p>)}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: "0 0 3px" }}><b>Verified Results</b></p>
            <svg viewBox="0 0 120 30" style={{ width: "100%", height: 30, display: "block" }} aria-hidden="true"><polyline points="0,24 18,16 36,19 54,8 72,12 90,5 118,9" fill="none" stroke={G} strokeWidth="2" />{[0,18,36,54,72,90,118].map((x,i)=><circle key={i} cx={x} cy={[24,16,19,8,12,5,9][i]} r="2" fill={G} />)}</svg>
            <p style={{ margin: "4px 0 0" }}><b>Escrow</b> — Locked $82,430.00 · Available $167,570.00 · Pending $21,340.00 · Released $61,090.00</p>
          </div>
        </div>
        <p style={{ margin: "7px 0 2px" }}><b>Recent Content</b></p>
        {[["Crypto Market Update Q2", "@cryptomatt", "VERIFIED"], ["5 Ways to Stake Smarter", "@defi.diana", "PENDING"], ["Mainnet Momentum", "@chain_guru", "VERIFIED"]].map(([t, by, st]) => <p key={t} style={{ margin: "2px 0" }}>{t} <span {...{ style: dim }}>{by}</span> <span style={{ color: st === "VERIFIED" ? G : "#ffb84d" }}>{st}</span></p>)}
        <p style={{ margin: "6px 0 0", ...dim }}>Activity: ✓ Result verified — @cryptomatt · 2m · ✓ Payment released $2,450.00 · 15m · ✓ New submission — @defi.diana · 32m</p>
      </>)}
      {win(2, "admin.allweb3.xyz", <>
        <p style={{ margin: 0 }}><b>Escrow Health</b> — <span style={{ color: G }}>Healthy</span></p>
        <p style={{ margin: "4px 0" }}>Total Escrow $82,430.00 · Available $167,570.00 · Pending $21,340.00 · Released $61,090.00</p>
        <div className="aw3-bar" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} aria-label="Escrow released share"><div style={{ width: "33%" }} /></div>
        <p style={{ margin: "6px 0 0" }}>Disputes <b>0</b> open · Payouts <b>24</b> this campaign · Compliance <b style={{ color: G }}>100%</b> pass rate</p>
        <p style={{ margin: "6px 0 0" }}><b>System Health</b> — API · Oracle · Indexers · Notifications <span style={{ color: G }}>Operational</span></p>
        <p style={{ margin: "6px 0 0", ...dim }}>Activity Log — May 12, 2026: Escrow funded · Creator verified — @cryptomatt · Campaign activated</p>
      </>)}
      <div style={{ borderLeft: "2px dashed #2c5a2c", paddingLeft: 9 }}>
        {["Campaign data", "Results & proofs", "Escrow & settlement", "Reputation signals", "System health"].map((t, i) => <p key={t} style={{ margin: "0 0 12px", fontSize: 11.5 }}><span style={{ color: G, marginRight: 5 }}>●</span>{t}{i < 4 ? <span style={{ display: "block", borderLeft: "2px dashed #2c5a2c", height: 8, marginLeft: 4 }} /> : null}</p>)}
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: 4 }}>
      <svg width="420" height="26" viewBox="0 0 420 26" style={{ display: "block", margin: "0 auto" }} aria-hidden="true"><g stroke="#2c5a2c" strokeWidth="1.5" strokeDasharray="3 4"><line x1="60" y1="0" x2="190" y2="24" /><line x1="210" y1="0" x2="210" y2="24" /><line x1="360" y1="0" x2="230" y2="24" /></g><g fill={G}><circle cx="190" cy="24" r="2.5" /><circle cx="210" cy="24" r="2.5" /><circle cx="230" cy="24" r="2.5" /></g></svg>
      <span style={{ display: "inline-block", border: `1.5px solid ${G}`, borderRadius: 999, padding: "6px 18px", background: "#0a1a0a" }}><b>CMP-2026-042 · <span style={{ color: G }}>ACTIVE</span></b></span>
      <p style={{ margin: "5px auto 0", ...dim, maxWidth: 560, fontSize: 11 }}>Creator submissions · Results &amp; proofs · Reputation updates ⇄ Escrow &amp; payouts · Compliance signals · System health. Campaign runs May 12 – Jun 30, 2026 · 49 days left.</p>
    </div>
  </AwR>;
}

/* ================= 02 — One campaign object: four columns ================= */
export function Allweb3SharedObjectWall() {
  const [step, setStep] = useState(1);
  const chrome = (url: string) => <p style={{ background: "#0d1a0d", borderBottom: "1px solid #223522", color: "#8fbf8f", padding: "5px 9px", margin: 0, fontSize: 10.5 }}>← → ↻ 🔒 {url}</p>;
  const head = (t: string, s: string) => <p style={{ margin: "0 0 6px", textAlign: "center" }}><b style={{ color: G, letterSpacing: ".05em", fontSize: 11.5 }}>{t}</b><br /><span style={{ ...dim, fontSize: 11 }}>{s}</span></p>;
  return <AwR n="02" title="One campaign object. Three role-specific experiences." label="ALLWEB3 shared campaign object — four-column wall rebuild of 2.webp" foot="ALLWEB3 — One Campaign Object">
    <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.9fr 1.25fr 1.1fr", gap: 8, alignItems: "start" }}>
      <div>{head("CREATOR VIEW", "Opportunity & Application")}
        <div style={{ ...card, padding: 0, overflow: "hidden" }}>{chrome("creator.allweb3.xyz")}
          <div style={{ padding: 9, fontSize: 11.5 }}>
            <p style={{ margin: 0 }}>Content · DeFi · Education · X · YouTube</p>
            <p style={{ margin: "7px 0 3px" }}><b>Why this fits you</b></p>
            <p style={{ margin: "2px 0" }}>✓ Strong audience overlap — 78%</p>
            <p style={{ margin: "2px 0" }}>✓ Content alignment score — 92/100</p>
            <p style={{ margin: "2px 0" }}>✓ Audience quality match — High</p>
            <p style={{ margin: "7px 0 3px" }}><b>Deliverables</b></p>
            <p style={{ margin: 0 }}>2 × Explainer Videos — 6–10 min each · 4 × Short-form Clips — 30–90 sec each · 1 × X Thread — 8–12 tweets · 1 × Live AMA — 60 min</p>
            <p style={{ margin: "7px 0 3px" }}><b>Compensation</b></p>
            <p style={{ margin: 0 }}>Total Reward <b style={{ color: G }}>12,500 USDC</b> · 50% upfront / 50% on completion</p>
            <p style={{ margin: "7px 0 3px" }}><b>Application</b> — Submitted May 18, 2026 · 10:24 AM UTC</p>
            <p style={{ display: "flex", gap: 3, flexWrap: "wrap", margin: 0 }}>{["Applied", "Under Review", "Shortlisted", "Selected"].map((s, i) => <button key={s} type="button" onClick={() => setStep(i)} aria-pressed={step === i} style={{ background: step === i ? G : "#0d140d", color: step === i ? "#021202" : "#e8f5e8", border: "1px solid #2c4a2c", borderRadius: 999, padding: "2px 7px", cursor: "pointer", font: "inherit", fontSize: 10 }}>{i === 0 ? "✓ " : `${i + 1} `}{s}</button>)}</p>
          </div>
        </div></div>
      <div>{head("SHARED CAMPAIGN OBJECT", "Single source of truth")}
        <div style={{ ...card, borderColor: G, fontSize: 11.5 }}>
          <b>Meridian Protocol: Creator Growth Sprint</b>
          {[["Campaign ID", "CMP-2026-042 · ACTIVE"], ["Status", "ACTIVE"], ["Settlement Asset", "USDC"], ["Budget", "100,000 USDC"], ["Timeline", "May 1 – Jun 30, 2026"], ["Created", "May 1, 2026"]].map(([k, v]) => <p key={k} style={{ display: "flex", justifyContent: "space-between", gap: 6, margin: "4px 0", borderBottom: "1px solid #182818", paddingBottom: 3 }}><span {...{ style: dim }}>{k}</span><span style={{ textAlign: "right", color: k === "Status" ? G : undefined }}>{v}</span></p>)}
        </div></div>
      <div>{head("PROJECT VIEW", "Campaign Management")}
        <div style={{ ...card, padding: 0, overflow: "hidden" }}>{chrome("project.allweb3.xyz")}
          <div style={{ padding: 9, fontSize: 11.5 }}>
            <p style={{ margin: "0 0 3px" }}><b>Creator Pipeline</b></p>
            <p style={{ margin: 0 }}>Applications <b>128</b> › Shortlisted <b>24</b> › In Progress <b>8</b> › Completed <b style={{ color: G }}>3</b></p>
            <p style={{ margin: "7px 0 3px" }}><b>Budget Overview</b> — 100,000 USDC · Committed 62,500</p>
            <div className="aw3-bar" role="progressbar" aria-valuenow={62.5} aria-valuemin={0} aria-valuemax={100} aria-label="Budget committed 62.5 percent"><div style={{ width: "62.5%" }} /></div>
            <p style={{ margin: "3px 0 0" }}><span style={{ color: G }}>62.5% Committed</span> · 37,500 USDC Remaining</p>
            <p style={{ margin: "7px 0 3px" }}><b>Approvals</b></p>
            <p style={{ margin: 0 }}>✓ Campaign Brief Approved — May 1 · ✓ Budget Approved — May 2 · ✓ Creator Shortlist Approved — May 10 · ✓ Content Guidelines Approved — May 10</p>
            <p style={{ margin: "7px 0 3px" }}><b>KPI Progress</b></p>
            {[["Reach", "1.2M of 2.0M", 60], ["Engagement", "86K of 120K", 72], ["Video Views", "420K of 600K", 70], ["Completions", "3 of 8", 38]].map(([k, v, p]) => <p key={k as string} style={{ margin: "3px 0" }}>{k as string} — {v as string} <b>{p as number}%</b></p>)}
          </div>
        </div></div>
      <div>{head("ADMIN VIEW", "Oversight & Governance")}
        <div style={{ ...card, padding: 0, overflow: "hidden" }}>{chrome("admin.allweb3.xyz")}
          <div style={{ padding: 9, fontSize: 11.5 }}>
            <p style={{ margin: "0 0 3px" }}><b>Escrow Status</b></p>
            <p style={{ margin: 0 }}>Escrow Balance 62,500 USDC · Held 62.5% of Budget · Disbursed 37,500 USDC · Reserved 25,000 USDC</p>
            <p style={{ margin: "7px 0 3px" }}><b>Verification — 92%</b></p>
            <div className="aw3-bar" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} aria-label="Verification 92 percent"><div style={{ width: "92%" }} /></div>
            <p style={{ margin: "3px 0 0" }}>✓ KYC Verified Creators — 24 / 24 · ✓ Deliverables Verified — 11 / 12 · ✓ Compliance Checks — Passed</p>
            <p style={{ margin: "7px 0 3px" }}><b>Disputes · Audit Trail</b></p>
            <p style={{ margin: 0 }}>Open 0 · Under Review 1 · Resolved 3 · Rejected 0 — Audit Status: <b style={{ color: G }}>Compliant</b>, Last Audit May 18, 2026 · 10:30 AM UTC.</p>
          </div>
        </div></div>
    </div>
    <p style={{ textAlign: "center", margin: "12px 0 0" }}><span style={{ border: `1.5px solid ${G}`, borderRadius: 999, padding: "5px 14px" }}>🔒 <b>Single Source of Truth</b> — one campaign object across all roles.</span></p>
  </AwR>;
}

/* ================= 04 — One platform. Every role: mosaic ================= */
export function Allweb3EveryRoleMosaic() {
  const [aud, setAud] = useState(0);
  const mini = (name: string, url: string, body: ReactNode) => <div style={{ ...card, padding: 0, overflow: "hidden" }}>
    <p style={{ background: "#0d1a0d", borderBottom: "1px solid #223522", padding: "5px 9px", margin: 0, fontSize: 11 }}><b>{name}</b> · <span style={{ color: G }}>{url}</span></p>
    <div style={{ padding: 9, fontSize: 11.5 }}>{body}</div></div>;
  return <AwR n="04" titleSize={12} title="ALLWEB3 — ONE PLATFORM · EVERY ROLE" label="ALLWEB3 one platform every role — mosaic rebuild of 4.webp" foot="ALLWEB3 — alpha.creator / alpha.project / admin / allweb3.io">
    <div style={{ display: "grid", gridTemplateColumns: "196px 1fr", gap: 12, alignItems: "start" }}>
      <div>
        <p style={{ margin: 0, color: G, fontWeight: 800, letterSpacing: ".18em", fontSize: 12 }}>W ALLWEB3</p>
        <p style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.18, margin: "10px 0 8px" }}>One<br />platform.<br />Every role.<br /><span style={{ color: G }}>Total<br />alignment.</span></p>
        <span style={{ display: "block", width: 44, height: 3, background: G, margin: "8px 0" }} />
        <p style={{ ...dim, margin: 0, lineHeight: 1.55 }}>ALLWEB3 unifies marketing, product, and operations in a single system built for Web3 growth.</p>
      </div>
      <div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
      {mini("Creator Portal", "alpha.creator.allweb3.io", <>
        <p style={{ margin: 0 }}><b>Meridian Protocol: Creator Growth Sprint</b> <span style={{ color: G }}>ACTIVE</span></p>
        <p style={{ margin: "4px 0 0" }}>Total Earnings <b style={{ color: G }}>12,450.75 USDC</b> · Pending Payout 1,240.00</p>
        <p style={{ margin: "4px 0 0" }}>Clicks 45,231 (+24.6%) · Conversions 1,245 (+18.7%) · Engagements 8,932 (+31.2%) · Earnings 12,450.75 (+15.4%)</p>
        <p style={{ margin: "6px 0 1px", ...dim }}>Performance Over Time — Last 30 days</p>
        <svg viewBox="0 0 120 26" style={{ width: "100%", height: 26, display: "block" }} aria-hidden="true"><polyline points="0,20 20,15 40,17 60,9 80,12 100,5 118,8" fill="none" stroke={G} strokeWidth="2" /></svg>
      </>)}
      {mini("Project Portal", "alpha.project.allweb3.io", <>
        <p style={{ margin: 0 }}><b>Meridian Protocol: Creator Growth Sprint</b> <span style={{ color: G }}>ACTIVE</span></p>
        <p style={{ margin: "4px 0 0" }}>Total Budget 50,000.00 USDC · Spent 18,750.25 · <span style={{ color: G }}>37.5% spent</span></p>
        <p style={{ margin: "4px 0 0" }}>Applications 152 · Approved Creators 28 · Published Content 56 · Total Reach 2.4M</p>
        <p style={{ margin: "4px 0 0" }}>Impressions 2,424,532 (+22.1%) · Engagements 245,631 (+19.8%) · Clicks 312,456 (+27.3%) · Conversions 12,456 (+18.5%)</p>
      </>)}
      {mini("Admin Portal", "Operations Console", <>
        <p style={{ margin: 0 }}>Total Campaigns <b>128</b> (+12.4%) · Total Creators <b>4,752</b> (+8.7%)</p>
        <p style={{ margin: "4px 0 0" }}>Total Volume 1,245,750.50 USDC (+15.3%) · Platform Fees 124,575.05 (+15.3%)</p>
        <p style={{ margin: "4px 0 0" }}>Recent: Meridian CMP-2026-042 ACTIVE · Zentry CMP-2026-041 ACTIVE · Nexus CMP-2026-040 COMPLETED</p>
        <p style={{ margin: "6px 0 1px", ...dim }}>Platform Activity — Last 30 days · System Health: Operational</p>
        <svg viewBox="0 0 120 26" style={{ width: "100%", height: 26, display: "block" }} aria-hidden="true">{[8, 13, 10, 17, 14, 21, 18, 24].map((h, i) => <rect key={i} x={i * 15 + 2} y={26 - h} width="9" height={h} fill={G} opacity={0.45 + i * 0.07} />)}</svg>
      </>)}
    </div>
    </div>
    <div style={{ ...card, marginTop: 8, gridColumn: "1 / -1" }}>
      <p style={{ margin: 0, ...dim, fontSize: 11 }}>PUBLIC WEBSITE — allweb3.io · Built for Web3 Growth · Nav: For Creators · For Projects · Resources · About · Log in · [Get Started]</p>
      <b style={{ fontSize: 18, display: "block", margin: "5px 0 3px" }}>Where creators and projects grow together.</b>
      <p style={{ margin: 0, ...dim }}>ALLWEB3 is the growth engine that connects creators, projects, and communities to drive real impact onchain.</p>
      <p style={{ display: "flex", gap: 6, margin: "8px 0", alignItems: "center", flexWrap: "wrap" }}>
        <button type="button" onClick={() => setAud(0)} aria-pressed={aud === 0} style={{ background: aud === 0 ? G : "transparent", color: aud === 0 ? "#021202" : "#d9f7d9", border: `1.5px solid ${G}`, borderRadius: 999, padding: "5px 13px", cursor: "pointer", font: "inherit", fontWeight: 700 }}>I&apos;m a Creator</button>
        <button type="button" onClick={() => setAud(1)} aria-pressed={aud === 1} style={{ background: aud === 1 ? G : "transparent", color: aud === 1 ? "#021202" : "#d9f7d9", border: `1.5px solid ${G}`, borderRadius: 999, padding: "5px 13px", cursor: "pointer", font: "inherit", fontWeight: 700 }}>I&apos;m a Project</button>
        <span aria-live="polite">{aud === 0 ? "Creator entry — alpha.creator.allweb3.io" : "Project entry — alpha.project.allweb3.io"}</span>
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 8 }}>
        <div style={{ border: "1px solid #223522", borderRadius: 8, padding: 8 }}>
          <b>Active Campaign</b> — Meridian Protocol: Creator Growth Sprint <span style={{ color: G }}>ACTIVE</span>
          <p style={{ margin: "3px 0 0", ...dim }}>CMP-2026-042 · Total Budget 50,000.00 USDC · 37.5% Spent</p>
        </div>
        <div style={{ border: "1px solid #223522", borderRadius: 8, padding: 8 }}>
          <b>Platform Impact</b>
          <p style={{ margin: "3px 0 0" }}><b>2.4M</b> Total Reach · <b>245K</b> Engagements · <b>12.4K</b> Conversions · <b>$1.24M</b> Volume</p>
        </div>
      </div>
      <p style={{ margin: "8px 0 0", ...dim }}>Trusted by leading teams and communities — Meridian · Zentry · Nexus · Fleet · arcade · 4,752+ Verified Creators</p>
    </div>
    </div>
  </AwR>;
}

/* ================= 09 — Legible: pillar loop around the headline ================= */
const PILLARS_R: Array<[string, string, string, string]> = [
  ["Verified identity", "Authentic participants.", "Accountable actions.", "top"],
  ["Explicit success criteria", "Clear goals.", "Measurable outcomes.", "left"],
  ["Traceable performance", "Verifiable data.", "Audit-ready trail.", "right"],
  ["Programmable settlement", "Escrow by design.", "Settlement on proof.", "bottom"],
];
export function Allweb3LegibleLoop() {
  const [p, setP] = useState(0);
  const pcard = (i: number) => { const [t, d1, d2] = PILLARS_R[i]; return <button key={t} type="button" onClick={() => setP(i)} aria-pressed={p === i} style={{ ...card, cursor: "pointer", font: "inherit", color: "#e8f5e8", textAlign: "left", borderColor: p === i ? G : "#223522", display: "flex", gap: 10, alignItems: "center", width: "100%" }}>
    <span style={{ width: 34, height: 34, flex: "none", borderRadius: "50%", border: `1.5px solid ${G}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>{["🛡", "🎯", "🔗", "⚙"][i]}</span>
    <span><b style={{ fontSize: 13.5 }}>{t}</b> <span style={{ color: G }}>✓</span><br /><span style={{ ...dim, fontSize: 11.5 }}>{d1} {d2}</span></span>
  </button>; };
  return <AwR n="09" titleSize={12} title="ALLWEB3 — LEGIBLE PERFORMANCE" label="ALLWEB3 legible performance — pillar loop rebuild of 9.webp" foot="ALLWEB3 — Legible Performance">
    <div style={{ position: "relative" }}>
    <svg viewBox="0 0 900 330" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} aria-hidden="true">
      <rect x="150" y="42" width="600" height="246" rx="26" fill="none" stroke={G} strokeWidth="3" />
      <g fill={G}><circle cx="450" cy="42" r="6" /><circle cx="750" cy="165" r="6" /><circle cx="450" cy="288" r="6" /><circle cx="150" cy="165" r="6" /></g>
      <g fill={G} fontSize="20"><text x="742" y="60">{"›"}</text><text x="742" y="292">{"›"}</text><text x="140" y="292" transform="rotate(180 147 285)">{"›"}</text><text x="140" y="60" transform="rotate(180 147 53)">{"›"}</text></g>
    </svg>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1fr", gridTemplateRows: "auto auto auto", gap: 10, alignItems: "center", position: "relative", zIndex: 1, padding: "6px 10px" }}>
      <span />{pcard(0)}<span />
      {pcard(1)}
      <div style={{ textAlign: "center", padding: "8px 4px" }}>
        <b style={{ fontSize: 21, lineHeight: 1.3, display: "block" }}>Make marketing performance <span style={{ color: G }}>legible</span> before money moves<span style={{ color: G }}>.</span></b>
        <p style={{ ...dim, margin: "8px 0 0", fontSize: 11.5 }} aria-live="polite">The four pillars form a closed loop — selected: <b style={{ color: "#e8f5e8" }}>{PILLARS_R[p][0]}</b> ({p + 1} of 4).</p>
      </div>
      {pcard(2)}
      <span />{pcard(3)}<span />
    </div>
    </div>
  </AwR>;
}

/* ================= 11 — Ecosystem: triangle diagram ================= */
const ECO_R: Array<[string, string, string]> = [
  ["Creators", "Core actor", "Create content, build audience, earn rewards"],
  ["Project teams", "Core actor", "Run campaigns, provide briefs, fund and evaluate"],
  ["Platform operators", "Core actor", "Match, verify, manage escrow, ensure fairness"],
  ["Wallets", "External service", "Identity, holdings, signatures"],
  ["Social platforms", "External service", "Distribution, engagement, social signals"],
  ["Oracle providers", "External service", "Off-chain data, proofs, analytics, market signals"],
  ["Blockchain networks", "External service", "Immutability, transparency, smart contracts"],
  ["Payment assets", "External service", "Stablecoins, tokens, fiat rails"],
];
export function Allweb3EcosystemTriangle() {
  const [node, setNode] = useState(0);
  const circ = (i: number, style: React.CSSProperties) => <button key={ECO_R[i][0]} type="button" onClick={() => setNode(i)} aria-pressed={node === i} style={{ position: "absolute", zIndex: 2, width: 112, height: 112, borderRadius: "50%", background: "#0d1a0d", border: `2px solid ${node === i ? G : "#3d6b3d"}`, color: "#e8f5e8", cursor: "pointer", font: "inherit", padding: 8, textAlign: "center", ...style }}>
    <b style={{ fontSize: 12, display: "block", lineHeight: 1.25 }}>{ECO_R[i][0]}</b>
    <span style={{ ...dim, fontSize: 9 }}>{ECO_R[i][1]}</span>
  </button>;
  const sat = (i: number, style: React.CSSProperties) => <button key={ECO_R[i][0]} type="button" onClick={() => setNode(i)} aria-pressed={node === i} style={{ ...card, position: "absolute", zIndex: 2, cursor: "pointer", font: "inherit", color: "#e8f5e8", textAlign: "center", borderColor: node === i ? G : "#223522", padding: "7px 6px", width: 118, ...style }}>
    <b style={{ fontSize: 11, display: "block" }}>{ECO_R[i][0]}</b><span style={{ ...dim, fontSize: 9.5 }}>{ECO_R[i][1]}</span>
  </button>;
  const lbl = (t: ReactNode, style: React.CSSProperties) => <span style={{ position: "absolute", zIndex: 1, ...dim, fontSize: 9.5, textAlign: "center", lineHeight: 1.35, ...style }}>{t}</span>;
  return <AwR n="11" titleSize={12} title="ALLWEB3 — THREE-SIDED ECOSYSTEM" label="ALLWEB3 ecosystem — triangle diagram rebuild of 11.webp" foot="ALLWEB3 — Ecosystem · CMP-2026-042">
    <div style={{ display: "grid", gridTemplateColumns: "168px 1fr", gap: 14 }}>
      <div>
        <p style={{ margin: 0 }}>Connecting creators, project teams, and platform operators through identity, matching, verification, reputation, escrow, settlement, and disputes.</p>
        <div style={{ ...card, marginTop: 10, fontSize: 11.5 }}>
          <p style={{ margin: "0 0 5px" }}><b>LEGEND</b></p>
          <p style={{ margin: "3px 0" }}><span style={{ color: G }}>━━</span> Core interactions</p>
          <p style={{ margin: "3px 0" }}><span style={{ color: "#fff" }}>━━</span> Content &amp; evidence flows</p>
          <p style={{ margin: "3px 0" }}><span {...{ style: dim }}>┄┄</span> External service flows</p>
        </div>
        <div style={{ ...card, marginTop: 8, fontSize: 11.5 }}>
          <p style={{ margin: "0 0 5px" }}><b>KEY METRICS</b> <span {...{ style: dim }}>(Illustrative data)</span></p>
          {[["Active Creators", "12,450"], ["Campaigns (30d)", "320"], ["Content Delivered", "5,680"], ["Completion Rate", "96%"], ["Dispute Rate", "1.2%"]].map(([k, v]) => <p key={k} style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span {...{ style: dim }}>{k}</span><b>{v}</b></p>)}
        </div>
      </div>
      <div>
        <div style={{ position: "relative", height: 428 }}>
          <svg viewBox="0 0 640 428" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
            <defs><marker id="aw11arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={G} /></marker>
            <marker id="aw11arrw" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#e8f5e8" /></marker></defs>
            <g stroke={G} strokeWidth="2.5" fill="none">
              <path d="M 268 118 L 168 268" markerEnd="url(#aw11arr)" /><path d="M 158 258 L 258 108" markerEnd="url(#aw11arr)" />
              <path d="M 218 322 L 428 322" markerEnd="url(#aw11arr)" /><path d="M 438 312 L 228 312" markerEnd="url(#aw11arr)" />
              <path d="M 392 268 L 292 118" markerEnd="url(#aw11arr)" /><path d="M 282 108 L 382 258" markerEnd="url(#aw11arr)" />
            </g>
            <g stroke="#9a9aa0" strokeWidth="1.6" strokeDasharray="5 5" fill="none">
              <path d="M 376 84 L 492 60" markerEnd="url(#aw11arrw)" />
              <path d="M 120 268 L 62 210" markerEnd="url(#aw11arrw)" />
              <path d="M 96 96 L 196 84" markerEnd="url(#aw11arrw)" />
              <path d="M 210 356 L 240 402" markerEnd="url(#aw11arrw)" />
              <path d="M 452 356 L 520 396" markerEnd="url(#aw11arrw)" /><path d="M 520 382 L 452 342" markerEnd="url(#aw11arrw)" />
            </g>
          </svg>
          {circ(0, { left: "50%", top: 6, transform: "translateX(-50%)" })}
          {circ(1, { left: "16%", bottom: 52 })}
          {circ(2, { right: "16%", bottom: 52 })}
          <span style={{ position: "absolute", left: "50%", top: 178, transform: "translateX(-50%)", border: "2px dashed #3d6b3d", borderRadius: "50%", padding: "12px 10px", textAlign: "center", fontSize: 10, width: 162, zIndex: 1 }}>
            CAMPAIGN ID <b>CMP-2026-042</b><br />End-to-end flow:<br /><b>Brief → Content → Verification → Settlement</b>
          </span>
          {sat(5, { left: 0, top: 30 })}{sat(3, { right: 0, top: 30 })}{sat(4, { left: 0, top: 196 })}
          {sat(6, { left: "36%", bottom: 0 })}{sat(7, { right: 0, bottom: 6 })}
          {lbl(<>BRIEF / CONTENT ⇄</>, { left: "24%", top: 168, width: 90 })}
          {lbl(<>VERIFICATION /<br />REPUTATION ⇄</>, { right: "23%", top: 168, width: 96 })}
          {lbl(<>ESCROW / SETTLEMENT ⇄</>, { left: "41%", bottom: 128, width: 130 })}
          {lbl(<>EVIDENCE<br />(Off-chain data)</>, { left: "1%", top: 128, width: 96 })}
          {lbl(<>PAYMENT (Payouts)<br />ESCROW (Hold &amp; release)</>, { right: "0%", top: 128, width: 118 })}
          {lbl(<>AUDIT DATA<br />(Proofs &amp; logs)</>, { left: "21%", bottom: 2, width: 100 })}
          {lbl(<>SETTLEMENT<br />(On-chain finality)</>, { right: "1%", bottom: 66, width: 110 })}
        </div>
        <div style={{ ...card, marginTop: 10 }} aria-live="polite">
          <b>{ECO_R[node][0]}</b> — {ECO_R[node][2]}
        </div>
      </div>
    </div>
  </AwR>;
}

/* ================= 17 — Admin Portal: dashboard wall ================= */
const DISPUTES_R: Array<[string, string, string, string]> = [
  ["DP-8421", "Invalid Traffic Allegation", "High", "23m"], ["DP-8420", "Undelivered Impressions", "High", "1h"],
  ["DP-8418", "Ineligible Publisher", "Medium", "2h"], ["DP-8417", "Fraudulent Clicks", "Medium", "3h"], ["DP-8415", "Payout Mismatch", "Low", "5h"]];
const SETTLE_R: Array<[string, string, string]> = [["ST-77318", "May 18, 2025", "$187,320.00"], ["ST-77317", "May 18, 2025", "$98,540.75"], ["ST-77316", "May 17, 2025", "$143,210.50"], ["ST-77315", "May 17, 2025", "$220,600.00"], ["ST-77314", "May 16, 2025", "$75,430.25"]];
const FLAGGED_R: Array<[string, string, string, string]> = [
  ["VER-99231", "Anomalous Traffic Pattern", "High", "15m"], ["VER-99230", "Device Farm Detected", "High", "42m"],
  ["VER-99228", "Geo Mismatch", "Medium", "1h"], ["VER-99227", "Low Quality Signal", "Medium", "2h"], ["VER-99225", "Bot Behavior Suspected", "Low", "3h"]];
const AUDIT_R: Array<[string, string, string, string, string]> = [
  ["Admin override on payout", "ADM-3812", "May 18, 2025 14:32:11", "st_77318", "by ops_admin"],
  ["Campaign paused", "CMP-1287", "May 18, 2025 13:47:02", "cmp_1287", "by system"],
  ["Dispute escalated", "DP-8419", "May 18, 2025 12:21:33", "dp_8419", "by trust_lead"],
  ["Verification rule updated", "VR-554", "May 18, 2025 11:08:45", "rule_554", "by risk_admin"],
  ["User permission changed", "USR-778", "May 18, 2025 10:15:18", "user_778", "by security"]];
export function Allweb3AdminWall() {
  const [pr, setPr] = useState(0);
  const sev = (x: string) => ({ color: x === "High" ? "#ff8a8a" : x === "Medium" ? "#ffb84d" : G });
  const mini = (title: string, body: ReactNode) => <div style={{ border: "1px solid #223522", borderRadius: 6, padding: "6px 8px", minWidth: 0 }}><p style={{ margin: "0 0 3px" }}><b style={{ fontSize: 9.5, letterSpacing: ".05em" }}>{title}</b></p>{body}</div>;
  const rows = (items: ReactNode[]) => <div>{items.map((r, i) => <p key={i} style={{ display: "flex", justifyContent: "space-between", gap: 6, margin: "2px 0", fontSize: 8.4, lineHeight: 1.32 }}>{r}</p>)}</div>;
  return <AwR n="17" titleSize={12} title="ALLWEB3 — ADMIN PORTAL · MERIDIAN PROTOCOL" label="ALLWEB3 admin portal — dashboard wall rebuild of 17.webp" foot="ALLWEB3 — Meridian Protocol Admin Portal">
    <div style={{ display: "grid", gridTemplateColumns: "192px 1fr", gap: 12 }}>
      <div>
        <p style={{ margin: 0, color: G, letterSpacing: ".22em", fontSize: 11 }}>MERIDIAN PROTOCOL</p>
        <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 36, lineHeight: 1.1, margin: "6px 0" }}>Admin<br />Portal</p>
        <span style={{ display: "block", width: 52, height: 3, background: G, margin: "8px 0" }} />
        <p style={{ ...dim, margin: 0 }}>Designing for the cases where the normal flow fails.</p>
        <div style={{ marginTop: 12 }}>
          {[["🛡", "Protect Integrity", "Tools to detect, review, and resolve issues."], ["⚖", "Ensure Fairness", "Consistent outcomes across campaigns and participants."], ["🔍", "Maintain Trust", "Audit everything. Explain every action."], ["🔒", "Operate Safely", "Granular access, real-time visibility, complete control."]].map(([ic, t, d], i) => <button key={t} type="button" onClick={() => setPr(i)} aria-pressed={pr === i} style={{ display: "flex", gap: 9, width: "100%", background: "none", border: "none", borderTop: "1px solid #223522", color: "#e8f5e8", padding: "8px 2px", cursor: "pointer", font: "inherit", textAlign: "left" }}>
            <span style={{ fontSize: 16, color: G }}>{ic}</span>
            <span><b style={{ color: pr === i ? G : "#e8f5e8", fontSize: 12.5 }}>{t}</b><br /><span style={{ ...dim, fontSize: 11 }}>{d}</span></span>
          </button>)}
        </div>
      </div>
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: "#000", minHeight: 472 }}>
        <img src="/projects/crops/allweb3/admin-room.jpg" alt="Dark room with the admin dashboard on a desk monitor, keyboard and mug (photo from the original slide)" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", left: "4.2%", top: "4.6%", width: "91.5%", height: "78%", transform: "perspective(1000px) rotateY(-3.5deg)", transformOrigin: "left center", background: "#070a07", borderRadius: 4, padding: "7px 8px", boxSizing: "border-box", overflow: "hidden", fontSize: 9.2, color: "#dfe9df" }}>
          <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 6px", alignItems: "center" }}>
            <span><b style={{ fontSize: 11 }}>Overview</b> <span style={{ ...dim, fontSize: 8.5 }}>— real-time operational overview across the Meridian ecosystem</span></span>
            <span><span style={{ border: "1px solid #2c4a2c", borderRadius: 5, padding: "2px 6px", fontSize: 8.5 }}>May 12 – May 18, 2025</span> <span style={{ color: G, fontWeight: 700, fontSize: 8.5 }}>● Operational</span></span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginBottom: 6 }}>
            {mini("MARKETPLACE HEALTH", <p style={{ margin: 0, display: "flex", gap: 7, alignItems: "center" }}><span style={{ width: 34, height: 34, flex: "none", borderRadius: "50%", background: `conic-gradient(${G} 0 98%, #1a2b1a 98% 100%)`, display: "inline-flex", alignItems: "center", justifyContent: "center" }}><b style={{ width: 25, height: 25, borderRadius: "50%", background: "#070a07", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8.5, color: G }}>98%</b></span><span style={{ fontSize: 8.5, lineHeight: 1.5 }}>Infrastructure · Services<br />Data Integrity · Integrations<br /><span style={{ color: G }}>● Operational</span></span></p>)}
            {mini("ACTIVE CAMPAIGNS", <p style={{ margin: 0 }}><b style={{ fontSize: 17 }}>128</b> <span style={{ color: G, fontSize: 8.5 }}>↑ 12 vs last 7 days</span><br /><span style={{ fontSize: 8.5 }}>Running 96 · Review 18 · Paused 8 · Completed 6</span></p>)}
            {mini("SYSTEM STATUS", <p style={{ margin: 0, fontSize: 8.5, lineHeight: 1.55 }}>API Gateway · Matching Engine · Verification Service · Settlement Service · Notification Service · Data Warehouse — <span style={{ color: G }}>Operational</span></p>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginBottom: 6 }}>
            {mini("DISPUTE QUEUE — 7", rows(DISPUTES_R.map(([id, n2, x, age]) => <><span>{id} — {n2}</span><span><b {...{ style: sev(x) }}>{x}</b> <span {...{ style: dim }}>{age}</span></span></>)))}
            {mini("SETTLEMENT ACTIVITY — $2,842,719.48 ↑ 18%", rows(SETTLE_R.map(([id, d2, amt]) => <><span>{id} · {d2}</span><span>{amt} <span style={{ color: G }}>Completed</span></span></>)))}
            {mini("FLAGGED VERIFICATIONS — 12", rows(FLAGGED_R.map(([id, n2, x, age]) => <><span>{id} — {n2}</span><span><b {...{ style: sev(x) }}>{x}</b> <span {...{ style: dim }}>{age}</span></span></>)))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.9fr 1fr", gap: 6 }}>
            {mini("AUDIT EVENTS — View audit log", rows(AUDIT_R.map(([what, id, when]) => <><span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{what}</span><span style={{ ...dim, whiteSpace: "nowrap" }}>{id} · {when}</span></>)))}
            {mini("QUICK ACTIONS", <p style={{ margin: 0, fontSize: 8.8, lineHeight: 1.6 }}>Review Disputes — <b>7 pending</b><br />Review Verifications — <b>12 flagged</b><br />Manual Payout — Initiate · User Management<br />System Alerts — <span style={{ color: G }}>✓ No critical alerts</span></p>)}
          </div>
        </div>
      </div>
    </div>
  </AwR>;
}

/* ================= 03 — Role and Scope: tree + metadata table ================= */
export function Allweb3RoleScopeTree() {
  const [node, setNode] = useState(2);
  const nodes: Array<[string, string]> = [
    ["Strategy", "Product strategy — the first responsibility on the printed responsibilities list."],
    ["UX Architecture", "UX architecture — strategy flows down into the portal architecture."],
    ["Creator Portal", "Content management, audience insights, and growth tools."],
    ["Project Portal", "Project tracking, milestone management, and collaboration."],
    ["Admin Portal", "Platform oversight, user management, and analytics."],
    ["Front-End", "Front-end implementation — the three portals converge into build."],
    ["Back-End", "Back-end integration — alongside front-end, above deployment."],
    ["Deployment", "Deployment — the base of the printed delivery diagram."],
  ];
  const treeBtn = (i: number, extra?: React.CSSProperties) => <button key={nodes[i][0]} type="button" onClick={() => setNode(i)} aria-pressed={node === i} style={{ background: node === i ? G : "#0d140d", color: node === i ? "#021202" : "#e8f5e8", border: `1.5px solid ${G}`, borderRadius: 8, padding: "5px 10px", cursor: "pointer", font: "inherit", fontWeight: 700, fontSize: 11.5, ...extra }}>{nodes[i][0]}</button>;
  return <AwR n="03" title="Solo Product Designer and Full-Stack Builder" sub="ROLE AND SCOPE CARD" label="ALLWEB3 role and scope — tree rebuild of 3.webp" foot="ALLWEB3 — Role and Scope">
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 14 }}>
      <div>
        <p style={{ margin: 0 }}><b style={{ color: G }}>Role</b> — Solo Product Designer and Full-Stack Builder. End-to-end ownership across strategy, design, development, and deployment — delivering cohesive products that scale.</p>
        <p style={{ margin: "8px 0 3px" }}><b>Responsibilities</b></p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 14px" }}>
          {["Product strategy", "UX architecture", "UI design", "Prototyping", "Design system", "Front-end implementation", "Back-end integration", "Deployment"].map((r) => <p key={r} style={{ margin: 0, padding: "5px 0", borderBottom: "1px solid #223522", fontSize: 12.5 }}><span style={{ color: G, marginRight: 6 }}>■</span>{r}</p>)}
        </div>
      </div>
      <div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <tbody>{[["CAMPAIGN ID", "CMP-2026-042"], ["CAMPAIGN NAME", "Meridian Protocol: Creator Growth Sprint"], ["STATUS", "ACTIVE"], ["SETTLEMENT ASSET", "USDC"]].map(([k, v]) => <tr key={k}><td style={{ padding: "5px 6px", borderBottom: "1px solid #223522", ...dim, fontSize: 10.5, letterSpacing: ".06em" }}>■ {k}</td><td style={{ padding: "5px 6px", borderBottom: "1px solid #223522", color: v === "ACTIVE" ? G : "#e8f5e8" }}>{v}</td></tr>)}</tbody>
        </table>
        <div style={{ marginTop: 12, backgroundImage: "radial-gradient(#223522 1px, transparent 1px)", backgroundSize: "12px 12px", padding: "10px 6px", textAlign: "center" }}>
          {treeBtn(0)}<p style={{ margin: "2px 0", color: G }}>↓</p>
          {treeBtn(1)}<p style={{ margin: "2px 0", color: G }}>↓</p>
          <p style={{ display: "flex", gap: 6, justifyContent: "center", margin: 0 }}>{treeBtn(2)}{treeBtn(3)}{treeBtn(4)}</p>
          <p style={{ margin: "2px 0", color: G }}>↓</p>
          <p style={{ display: "flex", gap: 6, justifyContent: "center", margin: 0 }}>{treeBtn(5)}{treeBtn(6)}</p>
          <p style={{ margin: "2px 0", color: G }}>↓</p>
          {treeBtn(7)}
        </div>
        <p style={{ ...dim, margin: "6px 0 0", fontSize: 11.5 }} aria-live="polite"><b style={{ color: "#e8f5e8" }}>{nodes[node][0]}</b> — {nodes[node][1]}</p>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 12, border: "1px solid #2c5a2c", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ padding: "9px 11px", borderRight: "1px solid #223522" }}><p style={{ margin: "0 0 3px", color: G, fontSize: 10.5, letterSpacing: ".08em" }}>ROLE</p><b style={{ fontSize: 12.5 }}>Solo Product Designer and Full-Stack Builder</b></div>
      <div style={{ padding: "9px 11px", borderRight: "1px solid #223522" }}><p style={{ margin: "0 0 3px", color: G, fontSize: 10.5, letterSpacing: ".08em" }}>OWNERSHIP</p><b style={{ color: G, fontSize: 12.5 }}>SINGLE CONTRIBUTOR</b><p style={{ margin: "2px 0 0", ...dim, fontSize: 11 }}>Full ownership of product vision, execution, and delivery.</p></div>
      <div style={{ padding: "9px 11px", borderRight: "1px solid #223522" }}><p style={{ margin: "0 0 3px", color: G, fontSize: 10.5, letterSpacing: ".08em" }}>RESPONSIBILITIES</p><p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.5 }}>Product strategy · UX architecture · UI design · Prototyping · Design system · Front-end · Back-end · Deployment</p></div>
      <div style={{ padding: "9px 11px" }}><p style={{ margin: "0 0 3px", color: G, fontSize: 10.5, letterSpacing: ".08em" }}>TIMELINE</p><b style={{ fontSize: 12.5 }}>APR 2026 — JUN 2026</b><p style={{ margin: "2px 0 0", ...dim, fontSize: 11 }}>(3 MONTHS) · Status <b style={{ color: G }}>● ACTIVE</b></p></div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 8 }}>
      {[["Creator Portal", "Content management, audience insights, and growth tools.", "🖥"], ["Project Portal", "Project tracking, milestone management, and collaboration.", "📁"], ["Admin Portal", "Platform oversight, user management, and analytics.", "🛡"]].map(([t, d, ic]) => <div key={t as string} style={{ background: "#0d2410", border: "1px solid #2c5a2c", borderRadius: 10, padding: 10 }}>
        <p style={{ margin: 0, fontSize: 15 }}>{ic as string}</p><b>{t as string}</b><p style={{ margin: "3px 0 0", ...dim }}>{d as string}</p>
      </div>)}
    </div>
  </AwR>;
}

/* ================= 06 — Pain Map: medallions + centred root cause ================= */
const PAINS_R: Array<{ name: string; icon: string; pains: Array<[string, string]>; consequence: string }> = [
  { name: "Creators", icon: "👥", consequence: "Creators lose time, income, and trust.", pains: [["📄", "Unclear briefs"], ["💸", "Unreliable payment"], ["★", "Weak portable reputation"], ["🔍", "Difficult opportunity discovery"]] },
  { name: "Projects", icon: "💼", consequence: "Projects waste budget and miss outcomes.", pains: [["📊", "Fake metrics"], ["🧩", "Fragmented creator sourcing"], ["✋", "Manual approvals"], ["◎", "Unclear ROI"]] },
  { name: "Platform operators", icon: "🛡", consequence: "Operators face risk, overhead, and compliance burden.", pains: [["⚖", "Disputes"], ["📁", "Inconsistent evidence"], ["🔑", "Privileged actions"], ["▤", "Audit requirements"]] },
];
export function Allweb3PainMapFull() {
  const [sel, setSel] = useState<[number, number]>([0, 0]);
  return <AwR n="06" titleSize={12} title="W ALLWEB3 — STAKEHOLDER PAIN MAP" label="ALLWEB3 stakeholder pain map — full rebuild of 6.webp" foot="ALLWEB3 — Stakeholder Pain Map · Illustrative data">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
      {PAINS_R.map((g, gi) => <div key={g.name} style={{ ...card, padding: 0, overflow: "hidden" }}>
        <div style={{ background: "#0d2410", padding: "10px 10px 9px", textAlign: "center" }}>
          <span style={{ width: 38, height: 38, borderRadius: "50%", background: "#050805", border: `2px solid ${G}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16, boxShadow: `0 0 0 3px #0d2410, 0 0 0 5px ${G}` }}>{g.icon}</span>
          <b style={{ fontSize: 14.5, display: "block", marginTop: 7 }}>{g.name}</b>
        </div>
        <div style={{ padding: "8px 10px" }}>
          {g.pains.map(([ic, p], pi) => <button key={p} type="button" onClick={() => setSel([gi, pi])} aria-pressed={sel[0] === gi && sel[1] === pi} style={{ display: "flex", gap: 8, alignItems: "center", width: "100%", background: sel[0] === gi && sel[1] === pi ? "#12240f" : "transparent", border: "none", borderLeft: `3px solid ${G}`, color: "#e8f5e8", padding: "5px 7px", cursor: "pointer", font: "inherit", textAlign: "left", marginBottom: 3 }}>
            <span style={{ background: "#0d2410", border: "1px solid #2c5a2c", borderRadius: 6, width: 23, height: 23, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, flex: "none" }}>{ic}</span>{p}
          </button>)}
        </div>
        <p style={{ margin: 0, background: "#0d2410", borderTop: `1.5px solid ${G}`, padding: "10px 12px", fontSize: 13, lineHeight: 1.45 }}><span style={{ color: G, fontSize: 21, fontWeight: 800, marginRight: 6, verticalAlign: -2 }}>›</span>{g.consequence}</p>
      </div>)}
    </div>
    <div style={{ textAlign: "center", marginTop: 14 }}>
      <span style={{ display: "inline-block", border: `2px solid ${G}`, borderRadius: 999, padding: "10px 26px", background: "#0a1a0a" }}>
        <span style={{ marginRight: 8 }}>🗄</span><b style={{ fontSize: 17, color: G }}>No shared source of truth</b>
      </span>
      <p style={{ ...dim, margin: "8px 0 0" }} aria-live="polite">Selected pain: <b style={{ color: "#e8f5e8" }}>{PAINS_R[sel[0]].name} — {PAINS_R[sel[0]].pains[sel[1]][1]}</b></p>
    </div>
  </AwR>;
}

/* ================= 14 — Permission matrix: glyph cells + legend rail ================= */
const PERM_GLYPH: Record<string, [string, string]> = {
  View: ["👁", "Read-only access to data and settings."],
  Create: ["●", "Create new records and initiate actions."],
  Approve: ["✅", "Approve, verify, or advance records."],
  Override: ["◆", "Override decisions or parameters. Privileged."],
  Audit: ["🛡", "Full visibility for audit, compliance, and forensics."],
};
const PERM_AREAS_R = ["Campaign", "Creator", "Submission", "Payment", "Reputation", "Dispute", "Configuration"];
const PERM_ROLES_R: Array<[string, string]> = [["Creator", "👤"], ["Project member", "👥"], ["Reviewer", "🛡"], ["Operator", "⚙"], ["Admin", "👑"]];
const PERM_MATRIX_R: Record<string, string[][]> = {
  Campaign: [["View"], ["View"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Creator: [["View"], ["View"], ["View"], ["Create"], ["Override", "Audit"]],
  Submission: [["Create"], ["Create"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Payment: [["View"], ["View"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Reputation: [["View"], ["View"], ["Approve"], ["View"], ["Override", "Audit"]],
  Dispute: [["View"], ["View"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Configuration: [["View"], ["View"], ["View"], ["Override"], ["Override", "Audit"]],
};
const AREA_ICONS_R = ["📣", "👤", "📄", "💳", "★", "⚖", "🎛"];
export function Allweb3PermissionsGlyphs() {
  const [legend, setLegend] = useState<string | null>(null);
  const [cellSel, setCellSel] = useState<[number, number]>([0, 4]);
  return <AwR n="14" title="Role and Permission Matrix" label="ALLWEB3 role and permission matrix — glyph rebuild of 14.webp" foot="ALLWEB3 Platform — Permission Matrix v1.0">
    <div style={{ display: "grid", gridTemplateColumns: "195px 1fr", gap: 12 }}>
      <div>
        <p style={{ ...dim, margin: 0 }}>Access control across the ALLWEB3 platform. Permissions are granted on a need-to-know basis across the campaign lifecycle. (Illustrative architecture · v1.0)</p>
        <p style={{ margin: "12px 0 5px" }}><b>PERMISSION LEGEND</b></p>
        {Object.entries(PERM_GLYPH).map(([p, [glyph, d]]) => <button key={p} type="button" onClick={() => setLegend(legend === p ? null : p)} aria-pressed={legend === p} style={{ display: "block", width: "100%", background: legend === p ? "#12240f" : "transparent", border: "none", borderBottom: "1px solid #223522", color: "#e8f5e8", padding: "6px 2px", cursor: "pointer", font: "inherit", textAlign: "left" }}>
          <span style={{ fontSize: 14, marginRight: 7 }}>{glyph}</span><b>{p}</b><br /><span style={{ ...dim, fontSize: 11 }}>{d}</span>
        </button>)}
        <div style={{ border: `1.5px solid ${G}`, borderRadius: 9, padding: 9, marginTop: 10, fontSize: 11.5 }}>
          <b>Override and Configuration are privileged actions and are fully audited.</b>
          <p style={{ margin: "3px 0 0", ...dim }}>All Override and Configuration actions are captured in the audit log with actor, context, before/after state, and reason.</p>
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead><tr>
            <th style={{ background: "#0d2410", padding: "8px", textAlign: "left" }}>Area</th>
            {PERM_ROLES_R.map(([r, ic]) => <th key={r} style={{ background: "#0d2410", padding: "8px", textAlign: "center" }}><span style={{ display: "block", fontSize: 15 }}>{ic}</span>{r}</th>)}
          </tr></thead>
          <tbody>{PERM_AREAS_R.map((a, ai) => <tr key={a}>
            <td style={{ background: "#0d2410", padding: "7px 8px", borderBottom: "1px solid #182818" }}><span style={{ marginRight: 6 }}>{AREA_ICONS_R[ai]}</span><b>{a}</b></td>
            {PERM_MATRIX_R[a].map((perms, ri) => <td key={ri} onClick={() => setCellSel([ai, ri])} style={{ textAlign: "center", padding: "10px 4px", borderBottom: "1px solid #182818", cursor: "pointer", background: cellSel[0] === ai && cellSel[1] === ri ? "#12240f" : undefined }}>
              <span style={{ fontSize: 30, letterSpacing: 6, color: G, lineHeight: 1.15, display: "block" }}>{perms.map((p) => PERM_GLYPH[p][0]).join(" ")}</span>
              {legend && perms.includes(legend) ? <span style={{ display: "block", color: G, fontSize: 9.5, fontWeight: 700 }}>{legend.toUpperCase()}</span> : null}
            </td>)}
          </tr>)}</tbody>
        </table>
        <p style={{ ...dim, margin: "8px 0 0", fontSize: 11.5 }} aria-live="polite">
          <b style={{ color: "#e8f5e8" }}>{PERM_ROLES_R[cellSel[1]][0]} · {PERM_AREAS_R[cellSel[0]]}</b> — {PERM_MATRIX_R[PERM_AREAS_R[cellSel[0]]][cellSel[1]].map((p) => `${p}: ${PERM_GLYPH[p][1]}`).join(" ")}
          {legend ? <> · Legend highlight: <b style={{ color: G }}>{legend}</b> cells are labelled.</> : null}
        </p>
        <p style={{ textAlign: "center", background: "#0d2410", border: `1.5px solid ${G}`, borderRadius: 9, marginTop: 10, padding: "10px 14px", fontSize: 13, color: "#e8f5e8" }}>🛡 <b>All decisions and overrides are captured in the audit log</b> — with actor, context, before/after state, and reason.</p>
      </div>
    </div>
  </AwR>;
}
