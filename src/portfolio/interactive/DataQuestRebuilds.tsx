import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";

/**
 * Pass-2 rebuilds for the three DataQuest files whose registry fallback
 * rendered the WRONG SUBJECT (data-title matches from ProjectScreens):
 *  15 — Marketplace browser window (V0) — transcribed from CyberOrigin_15
 *  16 — Urban Street Scene task detail (V0) — transcribed from CyberOrigin_16
 *  26 — Submission state machine — transcribed from CyberOrigin_26
 * White deck: pale lavender paper, violet-to-blue gradient titles,
 * per-card semantic colour, browser chrome where the print is a window.
 */

const VIOLET = "#6C3BFF";
const GRAD = "linear-gradient(92deg,#6C3BFF 10%,#2563EB 90%)";

function Shell({ n, label, children, foot }: { n: string; label: string; children: ReactNode; foot?: string }) {
  return <div className="tks" role="region" aria-label={label} style={{ background: "#f7f6ff", padding: "20px 24px 12px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
      <span style={{ fontWeight: 800, fontSize: 13, color: "#191423" }}><span style={{ color: VIOLET }}>⬡</span> CyberOrigin</span>
      <span style={{ fontSize: 10.5, color: "#8a86a3", fontFamily: "ui-monospace,Menlo,monospace" }}>{n} / 40 · DataQuest</span>
    </div>
    {children}
    {foot ? <div style={{ marginTop: 12, borderTop: "1px solid #e3e0f5", paddingTop: 8, fontSize: 11, color: "#6d6884" }}>{foot}</div> : null}
  </div>;
}

function GradTitle({ children, size = 30 }: { children: ReactNode; size?: number }) {
  return <h3 style={{ margin: 0, fontSize: size, fontWeight: 800, letterSpacing: "-0.02em", background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{children}</h3>;
}

function Browser({ children, pills }: { children: ReactNode; pills?: boolean }) {
  return <div style={{ background: "#fff", border: "1px solid #ddd9f2", borderRadius: 14, overflow: "hidden", boxShadow: "0 10px 30px rgba(80,60,180,0.10)", fontSize: 12 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderBottom: "1px solid #eeeaf9" }}>
      <span style={{ display: "flex", gap: 5 }}>
        <i style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "block" }} /><i style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "block" }} /><i style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "block" }} />
      </span>
      <span style={{ flex: 1, textAlign: "center", background: "#f4f2fb", borderRadius: 6, padding: "3px 0", color: "#55506e", fontSize: 11 }}>🔒 app.dataquest.cyberorigin.ai</span>
      <span style={{ color: "#8a86a3" }}>↻</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "9px 14px", borderBottom: "1px solid #eeeaf9" }}>
      <b style={{ color: VIOLET, fontSize: 15 }}>DataQuest</b>
      <span style={{ color: VIOLET, fontWeight: 700, borderBottom: `2px solid ${VIOLET}`, paddingBottom: 2 }}>Marketplace</span>
      <span>My tasks</span><span>Earnings</span><span>Leaderboard</span><span>Help</span>
      <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}><span>🔔</span><span style={{ width: 24, height: 24, borderRadius: "50%", border: `1.5px solid ${VIOLET}`, color: VIOLET, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9.5, fontWeight: 700 }}>AM</span></span>
    </div>
    <div style={{ padding: "14px 16px 16px" }}>{children}</div>
    {pills ? null : null}
  </div>;
}

const pill = (t: string) => <span key={t} style={{ border: `1.5px solid ${VIOLET}`, color: VIOLET, borderRadius: 999, padding: "3px 12px", fontSize: 11.5, fontWeight: 600 }}>{t === "V0" ? "🗓 V0" : "🕐 Historical"}</span>;

/* ---------------- 15 — Marketplace (V0) ---------------- */
const CATS15: Array<[string, string, string, string, string]> = [
  ["🏙", "Street Scenes", "Capture urban environments, roads, and public spaces.", "$0.20–$2.50 / task", "#6C3BFF"],
  ["🌲", "Nature", "Capture landscapes, flora, and natural elements.", "$0.25–$2.00 / task", "#1d9e57"],
  ["🏭", "Industrial Operations", "Capture equipment, facilities, and industrial workflows.", "$0.30–$3.00 / task", "#2470d8"],
  ["✚", "Medical Imagery", "Capture medical equipment, facilities, and health data.", "$0.40–$3.50 / task", "#e5484d"],
  ["🏃", "Sports", "Capture athletes, events, and sporting activities.", "$0.20–$1.80 / task", "#e07b16"],
  ["🌱", "Agriculture", "Capture crops, livestock, and farming operations.", "$0.20–$1.50 / task", "#0d9488"],
];
export function DataQuestMarketplace() {
  const [pick, setPick] = useState(0);
  return <Shell n="15" label="DataQuest marketplace V0 — rebuild of CyberOrigin_15">
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 8 }}>{pill("Historical")}{pill("V0")}</div>
    <Browser>
      <div style={{ fontSize: 24, fontWeight: 800, color: "#14101f" }}>Marketplace</div>
      <p style={{ margin: "3px 0 12px", color: "#55506e" }}>Browse data collection tasks and earn rewards.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {CATS15.map(([icon, name, body, price, c], i) => <button key={name} type="button" onClick={() => setPick(i)} aria-pressed={i === pick} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${i === pick ? c : "#e7e4f6"}`, borderRadius: 12, padding: "15px 14px", cursor: "pointer", font: "inherit" }}>
          <span style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ width: 48, height: 48, flex: "none", borderRadius: "50%", background: `${c}1f`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 21 }}>{icon}</span>
            <span><b style={{ fontSize: 13.5, color: "#14101f" }}>{name}</b><br /><span style={{ color: "#55506e", fontSize: 11.5, lineHeight: 1.45, display: "inline-block", marginTop: 2 }}>{body}</span></span>
          </span>
          <span style={{ display: "block", marginTop: 13, fontWeight: 800, color: c, fontSize: 13 }}>{price}</span>
        </button>)}
      </div>
    </Browser>
  </Shell>;
}

/* ---------------- 16 — Urban Street Scene task detail (V0) ---------------- */
const REQ16 = ["Take a clear, in-focus photo", "Include at least 2 storefronts", "Capture pedestrians or vehicles", "No sensitive or private information", "Good lighting and minimal blur"];
const BOARD16: Array<[string, string, string, boolean]> = [["1", "Sarah J.", "$245.60", false], ["2", "Mike T.", "$196.30", false], ["3", "Alex M.", "$176.40", false], ["4", "Priya K.", "$154.20", false], ["5", "You", "$87.40", true]];
const RECENT16: Array<[string, string, string, string, string]> = [["Jamie L.", "Approved", "#e7f7ee", "#1d9e57", "2m ago"], ["Tony R.", "In review", "#fdf3e0", "#b97a0e", "15m ago"], ["You", "Submitted", "#efeaff", "#6C3BFF", "Just now"]];
export function DataQuestTaskDetailV0() {
  const [done, setDone] = useState<number[]>([0, 1, 2, 3, 4]);
  const [file, setFile] = useState(false);
  return <Shell n="16" label="DataQuest Urban Street Scene task detail V0 — rebuild of CyberOrigin_16">
    <Browser>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <span style={{ color: VIOLET, fontWeight: 600 }}>← Back to marketplace</span>{pill("Historical")}{pill("V0")}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.9fr 1fr", gap: 12 }}>
        <div>
          <div style={{ border: "1px solid #e7e4f6", borderRadius: 12, padding: "13px 15px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "#14101f" }}>Urban Street Scene</div>
                <p style={{ margin: "5px 0 12px", color: "#55506e", lineHeight: 1.5 }}>Capture a street scene that includes storefronts, pedestrian activity, and vehicles.</p>
                <b style={{ color: "#14101f" }}>Requirements</b>
                <div style={{ marginTop: 6, display: "grid", gap: 5 }}>
                  {REQ16.map((r, i) => <button key={r} type="button" onClick={() => setDone((d) => d.includes(i) ? d.filter((x) => x !== i) : [...d, i])} aria-pressed={done.includes(i)} style={{ textAlign: "left", background: "none", border: "none", cursor: "pointer", font: "inherit", padding: 0, color: "#33304a" }}><span style={{ color: VIOLET, marginRight: 6 }}>{done.includes(i) ? "☑" : "☐"}</span>{r}</button>)}
                </div>
              </div>
              <img src="/projects/crops/dataquest/street-scene.jpg" alt="Street photo from the original slide (crop, no text)" style={{ width: "100%", height: 196, objectFit: "cover", borderRadius: 10, display: "block" }} />
            </div>
          </div>
          <div style={{ border: "1px solid #e7e4f6", borderRadius: 12, padding: "12px 15px", marginTop: 12 }}>
            <b style={{ color: "#14101f" }}>Upload your photo</b>
            <button type="button" onClick={() => setFile((v) => !v)} aria-pressed={file} style={{ display: "block", width: "100%", marginTop: 9, border: "1.5px dashed #b9b2dd", borderRadius: 10, background: file ? "#f2efff" : "#fff", padding: "16px 0", cursor: "pointer", font: "inherit", textAlign: "center" }}>
              <span style={{ fontSize: 20, display: "block" }}>☁️⬆</span>
              <b>{file ? "street-scene.jpg selected" : "Drag and drop image here"}</b><br />
              <span style={{ color: VIOLET, fontWeight: 600 }}>{file ? "Click to clear" : "or click to browse"}</span><br />
              <span style={{ color: "#8a86a3", fontSize: 11 }}>JPG or PNG, up to 10MB</span>
            </button>
          </div>
        </div>
        <div style={{ display: "grid", gap: 12, alignContent: "start" }}>
          <div style={{ border: "1px solid #e7e4f6", borderRadius: 12, padding: "12px 14px" }}>
            <b style={{ color: "#14101f" }}>Reward</b>
            <div style={{ fontSize: 26, fontWeight: 800, color: VIOLET, marginTop: 2 }}>$1.20</div>
            <span style={{ color: "#55506e" }}>per approved task</span>
          </div>
          <div style={{ border: "1px solid #e7e4f6", borderRadius: 12, padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ color: "#14101f" }}>Leaderboard</b><span style={{ border: "1px solid #ddd9f2", borderRadius: 6, padding: "2px 8px", fontSize: 11, color: "#55506e" }}>This week ▾</span></div>
            <div style={{ marginTop: 8, display: "grid", gap: 2 }}>
              {BOARD16.map(([rank, name, amt, you]) => <div key={rank} style={{ display: "flex", gap: 8, padding: "4px 8px", borderRadius: 7, background: you ? "#efeaff" : "transparent", color: you ? VIOLET : "#33304a", fontWeight: you ? 700 : 400 }}><span style={{ width: 14 }}>{rank}</span><span style={{ flex: 1 }}>{name}</span><b>{amt}</b></div>)}
            </div>
          </div>
          <div style={{ border: "1px solid #e7e4f6", borderRadius: 12, padding: "12px 14px" }}>
            <b style={{ color: "#14101f" }}>Recent submissions</b>
            <div style={{ marginTop: 8, display: "grid", gap: 7 }}>
              {RECENT16.map(([name, st, bg, c, when]) => <div key={name} style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 20, height: 20, borderRadius: "50%", background: "#e7e4f6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>👤</span><span style={{ flex: 1 }}>{name}</span><span style={{ background: bg, color: c, borderRadius: 999, padding: "1px 8px", fontSize: 10.5, fontWeight: 700 }}>{st}</span><span style={{ color: "#8a86a3", fontSize: 11 }}>{when}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </Browser>
  </Shell>;
}

/* ---------------- 26 — Submission state machine ---------------- */
type St = [string, string, string, string, string, string];
const ROW26A: St[] = [
  ["1", "Draft", "not yet submitted", "Continue recording", "None", "#6C3BFF"],
  ["2", "Recording", "capturing evidence", "Run pre-check", "None", "#6C3BFF"],
  ["3", "Local pre-check", "fix before send", "Upload", "None", "#6C3BFF"],
  ["4", "Uploading", "sending your data", "Wait for receipt", "None", "#2563EB"],
  ["5", "Received", "stored safely", "System processes", "None", "#2563EB"],
  ["6", "Processing", "quality checks running", "Await review", "In progress", "#2563EB"],
];
const ROW26B: St[] = [
  ["11", "Appealed", "case re-opened", "Update & re-submit", "Re-evaluated", "#6C3BFF"],
  ["10", "Rejected", "not accepted", "Review reason", "None", "#e5484d"],
  ["8", "Under review", "review in progress", "Await decision", "In review", "#0d9488"],
  ["9", "Approved", "reward granted", "Prepare payout", "Earned", "#1d9e57"],
  ["12", "Paid", "available for payout", "Withdraw funds", "Paid", "#1d9e57"],
];
const NEEDS26: St = ["7", "Needs action", "contributor must act", "Fix and re-submit", "Paused", "#e07b16"];
function StateCard({ s, hot, onPick }: { s: St; hot: boolean; onPick: () => void }) {
  const [num, name, msg, next, reward, c] = s;
  return <button type="button" onClick={onPick} aria-pressed={hot} style={{ textAlign: "left", background: "#fff", border: `1.5px solid ${hot ? c : "#e0dcf3"}`, borderRadius: 11, padding: "9px 10px", cursor: "pointer", font: "inherit", boxShadow: hot ? `0 0 0 3px ${c}22` : "none" }}>
    <span style={{ display: "flex", gap: 7, alignItems: "center" }}><span style={{ width: 26, height: 26, flex: "none", borderRadius: "50%", background: c, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>{num}</span><b style={{ color: c, fontSize: 12.5 }}>{name}</b></span>
    <span style={{ display: "block", color: "#6d6884", fontSize: 10.5, margin: "4px 0 7px" }}>{msg}</span>
    <span style={{ display: "flex", gap: 6, borderTop: "1px solid #eeeaf9", paddingTop: 5, fontSize: 10, lineHeight: 1.35 }}><span style={{ color: c, fontWeight: 700, flex: "none" }}>Next action</span><span>{next}</span></span>
    <span style={{ display: "flex", gap: 6, fontSize: 10, marginTop: 2, lineHeight: 1.35 }}><span style={{ color: c, fontWeight: 700, flex: "none" }}>Reward</span><span>{reward}</span></span>
  </button>;
}
const OWNERS26: Array<[string, string, string]> = [
  ["Contributor", "Creates and acts on submissions.", "#6C3BFF"],
  ["System", "Automated checks, storage, and routing.", "#2563EB"],
  ["Reviewer", "Reviews, decides, and manages outcomes.", "#0d9488"],
  ["Ledger", "Manages rewards and payouts.", "#1d9e57"],
];
export function DataQuestStateMachine() {
  const [sel, setSel] = useState("7");
  return <Shell n="26" label="DataQuest submission state machine — rebuild of CyberOrigin_26">
    <GradTitle>Submission state machine</GradTitle>
    <p style={{ margin: "5px 0 14px", color: "#33304a" }}>Every visible state should have an owner, a message, a next action, and a reward consequence.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8, alignItems: "stretch" }}>
      {ROW26A.map((s) => <StateCard key={s[0]} s={s} hot={sel === s[0]} onPick={() => setSel(s[0])} />)}
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14, margin: "10px 0" }}>
      <span aria-hidden="true" style={{ fontSize: 13, color: "#e07b16", letterSpacing: 2 }}>◀ ┄┄┄</span>
      <div style={{ width: 210 }}><StateCard s={NEEDS26} hot={sel === "7"} onPick={() => setSel("7")} /></div>
      <span aria-hidden="true" style={{ fontSize: 13, color: "#e07b16", letterSpacing: 2 }}>┄┄┄ ▶</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
      {ROW26B.map((s) => <StateCard key={s[0]} s={s} hot={sel === s[0]} onPick={() => setSel(s[0])} />)}
    </div>
    <div style={{ marginTop: 12, border: "1px solid #e0dcf3", borderRadius: 12, padding: "10px 14px", display: "grid", gridTemplateColumns: "1.1fr 1.3fr 1.3fr 1.3fr 1.2fr 1.2fr", gap: 12, background: "#fff" }}>
      <div><b style={{ fontSize: 12 }}>Owner legend</b><br /><span style={{ fontSize: 10.5, color: "#6d6884" }}>Each state has a clear owner.</span></div>
      {OWNERS26.map(([n, b, c], oi) => <div key={n} style={{ borderLeft: "1px solid #eeeaf9", paddingLeft: 10, display: "flex", gap: 8 }}><span style={{ flex: "none", width: 26, height: 26, borderRadius: "50%", background: `${c}1f`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{["👤", "🗄", "👤", "💲"][oi]}</span><span><b style={{ color: c, fontSize: 12 }}>{n}</b><br /><span style={{ fontSize: 10.5, color: "#6d6884" }}>{b}</span></span></div>)}
      <div style={{ borderLeft: "1px solid #eeeaf9", paddingLeft: 10, fontSize: 10.5, color: "#6d6884" }}>
        <span style={{ color: "#6C3BFF" }}>━━▶</span> Forward progress<br />
        <span style={{ color: "#e07b16" }}>┄┄▶</span> Contributor rework<br />
        <span style={{ color: "#6C3BFF" }}>┄┄▶</span> Appeal path
      </div>
    </div>
  </Shell>;
}
