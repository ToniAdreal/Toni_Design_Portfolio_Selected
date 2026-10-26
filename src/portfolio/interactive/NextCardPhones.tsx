import { useState, type ReactNode } from "react";
import "./nextcard-app.css";

/**
 * Pass 2 — phone-frame showcases for the Next Card app-screen slides
 * (files 34, 40–51). The pass-3 components rendered ONE phone with the
 * printed screens as prose; the originals are showcase walls: a feature
 * rail + a row of real phone frames with the printed app UI inside them
 * + annotation strips. These components rebuild that treatment, keeping
 * the earlier interactivity (selectable phones/screens, working CTAs,
 * toggles, calculators stay in their chapter components where printed).
 * Transcribed from the actual image files, again.
 */

const ORANGE = "#ff4b1f";

export function NcShell({ title, label, children }: { n: string; title: string; label: string; children: ReactNode }) {
  return <div className="nc" role="region" aria-label={label}>
    <p style={{ margin: 0, letterSpacing: ".14em", fontWeight: 700 }}><span>NEXT <span className="nc-acc">CARD</span></span></p>
    <h3 style={{ fontSize: 40 }}>{title}</h3>
    {children}
    <div className="nc-foot"><span>Next Card Project</span><span>Product Design Portfolio</span><span>Confidential · For portfolio use only</span></div>
  </div>;
}

export function Ph({ w = 168, light, wire, sel, onClick, label, children }: { w?: number; light?: boolean; wire?: boolean; sel?: boolean; onClick?: () => void; label?: string; children: ReactNode }) {
  const cls = `ncp-phone${light ? " light" : ""}${wire ? " wire" : ""}${sel ? " sel" : ""}`;
  const inner = <>
    <div className="ncp-status"><span>9:41</span><span className="ncp-notch" /><span>▂▄▆ ⌁</span></div>
    {children}
  </>;
  if (onClick) return <button type="button" className={cls} style={{ width: w }} aria-pressed={!!sel} aria-label={label} onClick={onClick}>{inner}</button>;
  return <div className={cls} style={{ width: w }} role={label ? "group" : undefined} aria-label={label}>{inner}</div>;
}

export const PhHead = ({ t, back = true }: { t: string; back?: boolean }) => <p className="ncp-head"><span>{back ? "‹ " : ""}{t}</span><span className="ncp-dim">⋮</span></p>;
export const Bar = ({ pct, color }: { pct: number; color?: string }) => <div className="ncp-bar"><span style={{ width: `${pct}%`, ...(color ? { background: color } : {}) }} /></div>;
export const Cap = ({ n, t }: { n: string; t: string }) => <p className="ncp-cap"><b>{n}</b>{t}</p>;

export function Rail({ items, foot }: { items: Array<[string, string]>; foot?: ReactNode }) {
  return <div className="ncp-rail">{items.map(([t, d]) => <div key={t} className="ncp-railitem"><p style={{ margin: 0, fontWeight: 700, fontSize: 12.5 }}><span className="nc-acc" style={{ marginRight: 5 }}>◆</span>{t}</p><p className="ncp-mut" style={{ margin: "2px 0 0", fontSize: 12 }}>{d}</p></div>)}{foot}</div>;
}

/* ================= 42 — Benefit Exploration: 5 compare phones ================= */
const B42: Array<{ cap: string; head: string; hero: string; sub: string; tiers: Array<[string, string]>; label: string; rows: ReactNode; elig: string }> = [
  { cap: "Daily rewards", head: "Daily Rewards", hero: "Get rewarded, every day", sub: "Earn points and cashback on everyday spends.", tiers: [["Next Card Plus", "¥128"], ["Next Card Lite", "¥68"], ["Basic", "¥28"]], label: "Monthly value (est.)", elig: "Age 18+, stable income",
    rows: <>{[["Earn up to 5x points", "5x"], ["Up to 1% cashback", "1%"], ["Bonus points", "✓"], ["Points never expire", "✓"]].map(([t, v]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span>✓ {t}</span><b className="nc-acc">{v}</b></p>)}</> },
  { cap: "Digital lifestyle offers", head: "Digital Lifestyle", hero: "More of what you love", sub: "Exclusive offers on apps, entertainment, and more.", tiers: [["Next Card Plus", "¥96"], ["Next Card Lite", "¥48"], ["Basic", "¥18"]], label: "Monthly value (est.)", elig: "Age 18+, completed real-name verification",
    rows: <>{[["Video Membership · Youku VIP", "Free"], ["Music Membership · NetEase", "Free"], ["Cloud Storage · Baidu Netdisk", "Free"], ["E-book Membership", "20% off"]].map(([t, v]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span>{t}</span><b className="nc-acc">{v}</b></p>)}<p className="ncp-dim" style={{ margin: "3px 0" }}>Plus column: 50% off · 50% off · — · —</p></> },
  { cap: "Local city perks", head: "Local City Perks", hero: "Benefits that move with you", sub: "Enjoy local offers on dining, transit, and experiences.", tiers: [["Next Card Plus", "¥72"], ["Next Card Lite", "¥36"], ["Basic", "¥12"]], label: "Monthly value (est.)", elig: "Available in 30+ cities",
    rows: <>{[["Dining Discounts", "Up to 30%"], ["Transit Benefits", "Up to 10%"], ["Cinema Offers", "Up to 2 tickets"], ["Local Experiences", "✓"]].map(([t, v]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span>{t}</span><b className="nc-acc">{v}</b></p>)}</> },
  { cap: "Referral benefits", head: "Refer & Earn", hero: "More friends, more rewards", sub: "Invite friends and get rewarded together.", tiers: [["Next Card Plus", "¥60"], ["Next Card Lite", "¥30"], ["Basic", "¥10"]], label: "Earnings (per successful referral)", elig: "No referral cap",
    rows: <>{["Share your link — Invite friends to apply", "Friend gets approved — They activate their card", "You both earn rewards — Redeem for statement credit or points"].map((t, i) => <p key={t} style={{ margin: "3px 0" }}><b className="nc-acc">{i + 1}.</b> {t}</p>)}</> },
  { cap: "Credit-building tools", head: "Credit Building", hero: "Build credit, build future", sub: "Smart tools to help you build and track your credit.", tiers: [], label: "Key features", elig: "Age 18+, valid ID",
    rows: <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 9.5 }}><thead><tr><th /><th className="nc-acc" style={{ padding: "2px 3px", textAlign: "center" }}>Plus</th><th style={{ padding: "2px 3px", textAlign: "center" }}>Lite</th><th style={{ padding: "2px 3px", textAlign: "center" }}>Basic</th></tr></thead><tbody>{[["Credit Score Tracker", "Free", "✓", "—"], ["Multi-Bureau Insights", "✓", "—", "—"], ["On-time Payment Boost", "✓", "✓", "—"], ["Credit Report Summary", "✓", "✓", "—"], ["Credit Tips & Guidance", "✓", "✓", "✓"]].map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ padding: "2.5px 2px", borderBottom: "1px solid #232428", ...(i ? { textAlign: "center" as const } : {}) }}>{c}</td>)}</tr>)}</tbody></table> },
];
export function NextCardBenefitsShowcase() {
  const [sel, setSel] = useState(0);
  const [compare, setCompare] = useState<string[]>(["Next Card Plus"]);
  const [saved, setSaved] = useState<number | null>(null);
  const [mode, setMode] = useState("Monthly Value");
  const toggle = (t: string) => setCompare((v) => v.includes(t) ? v.filter((x) => x !== t) : [...v, t]);
  return <NcShell n="42" title="Benefit Exploration" label="Next Card benefit exploration — phone showcase rebuild of Next_Card_Image_42">
    <p className="ncp-mut" style={{ marginTop: 0 }}>CREDIT CARD FOR CHINA GEN Z — compare and customize benefits across categories. See what you get, what it takes, and save what matters.</p>
    <div style={{ display: "flex", gap: 5, alignItems: "center", flexWrap: "wrap", marginBottom: 12 }} role="group" aria-label="Compare controls">
      <span className="ncp-dim">Compare by</span>
      {["Monthly Value", "Category", "Lifestyle"].map((m) => <button key={m} type="button" className="nc-tab" aria-pressed={mode === m} onClick={() => setMode(m)}>{m}</button>)}
      <span className="nc-tab" style={{ borderColor: ORANGE }} aria-live="polite">Compare ({compare.length})</span>
      <span className="ncp-dim">— tap a phone to select it, tap a tier inside to compare</span>
    </div>
    <div className="ncp-row" style={{ flexWrap: "wrap" }}>
      {B42.map((p, i) => <div key={p.cap}>
        <Cap n={String(i + 1).padStart(2, "0")} t={p.cap} />
        <Ph w={172} sel={sel === i} onClick={() => setSel(i)} label={`${p.cap} phone`}>
          <PhHead t={p.head} />
          <p style={{ fontWeight: 800, fontSize: 12.5, margin: "2px 0" }}>{p.hero}</p>
          <p className="ncp-mut" style={{ margin: "0 0 6px" }}>{p.sub}</p>
          <p style={{ display: "flex", gap: 4, margin: "0 0 6px" }}><span style={{ flex: 1, textAlign: "center", background: "#1d1e22", borderRadius: 6, padding: "3px 0" }}>Compare</span><span style={{ flex: 1, textAlign: "center", color: "#9a9aa0", padding: "3px 0" }}>Details</span></p>
          <p className="ncp-dim" style={{ margin: "0 0 4px" }}>{p.label}</p>
          {p.tiers.length > 0 && <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>{p.tiers.map(([t, v]) => <button key={t} type="button" onClick={(e) => { e.stopPropagation(); toggle(t); }} aria-pressed={compare.includes(t)} style={{ flex: 1, background: t === "Next Card Plus" ? "#2a1408" : "#141518", border: `1px solid ${compare.includes(t) ? ORANGE : "#2c2d30"}`, borderRadius: 7, color: "#fff", padding: "5px 2px", cursor: "pointer", font: "inherit", fontSize: 9 }}><span className="ncp-dim" style={{ display: "block", fontSize: 8 }}>{t.replace("Next Card ", "")}</span><b className="nc-acc" style={{ display: "block", fontSize: 11.5, whiteSpace: "nowrap" }}>{v}</b><span className="ncp-dim" style={{ display: "block", fontSize: 8 }}>{i === 3 ? "per friend" : "per month"}</span></button>)}</div>}
          {p.rows}
          <p className="ncp-dim" style={{ margin: "6px 0" }}>Eligibility<br />{p.elig}</p>
          <button type="button" className="ncp-cta" onClick={(e) => { e.stopPropagation(); setSaved(i); }}>{saved === i ? "✓ Saved" : "Save My Choice"}</button>
        </Ph>
      </div>)}
    </div>
    <p style={{ margin: "14px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b>COMPARE YOUR WAY</b> — Switch view by Monthly Value, Category, or Lifestyle to find what fits you best.</span><span><b>CLEAR &amp; TRANSPARENT</b> — See eligibility and conditions upfront. No surprises, just smarter choices.</span><span><b>SAVE &amp; APPLY LATER</b> — Save your favorite benefits and apply when you&apos;re ready.</span></p>
  </NcShell>;
}

/* ================= 43 — Application Sequence: 6 light phones ================= */
const A43: Array<{ cap: string; title: string; sub: string; body: ReactNode; cta: string; foot?: string }> = [
  { cap: "Eligibility", title: "Let's check your eligibility", sub: "This won't affect your credit profile", cta: "Check eligibility", foot: "Already started? Log in",
    body: <>{[["18–28 years old", "Mainland China resident"], ["Have a valid ID", "Second-generation ID card"], ["Basic info required", "For identity verification only"]].map(([t, d]) => <p key={t} style={{ margin: "5px 0" }}><b>◎ {t}</b><br /><span className="ncp-dim">{d}</span></p>)}<p className="ncp-dim" style={{ marginTop: 8 }}>🔒 Your information is secure and used only for this application.</p></> },
  { cap: "Personal information", title: "Personal information", sub: "Please enter your real information", cta: "Next",
    body: <>{[["Full name", "Enter your full name"], ["ID card number", "Enter your 18-digit ID number"], ["Date of birth", "Select date 📅"], ["Mobile number", "Enter mobile number"]].map(([l, ph]) => <div key={l}><p style={{ margin: "4px 0 2px", fontWeight: 600 }}>{l}</p><div className="ncp-field">{ph}</div></div>)}<p className="ncp-dim">🔒 We use encryption to protect your data.</p></> },
  { cap: "Identity verification", title: "Identity verification", sub: "Choose a way to verify your identity", cta: "Start verification",
    body: <><div className="ncp-card flat" style={{ borderColor: ORANGE }}><p style={{ margin: 0 }}><b>▦ Upload ID card</b> <span className="nc-acc">Recommended</span> <span style={{ float: "right" }} className="nc-acc">✓</span></p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Upload photos of your ID card to verify</p></div><div className="ncp-card flat"><p style={{ margin: 0 }}><b>◉ Liveness detection</b><span style={{ float: "right" }}>○</span></p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Take a short video to verify your face</p></div><p className="ncp-dim">🔒 Your photos and video are encrypted and used only for verification.</p></> },
  { cap: "Student or employment information", title: "Student or employment information", sub: "Choose one and fill in the details", cta: "Next",
    body: <>{[["Student", "Provide your school information", true], ["Employed", "Provide your work information", false], ["Other", "Provide other information", false]].map(([t, d, on]) => <div key={t as string} className="ncp-card flat" style={on ? { borderColor: ORANGE } : {}}><p style={{ margin: 0 }}><b>{t as string}</b>{on ? <span style={{ float: "right" }} className="nc-acc">✓</span> : null}</p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>{d as string}</p></div>)}<p style={{ margin: "6px 0 2px", fontWeight: 600 }}>School information</p><div className="ncp-field">School name — Select your school ›</div><div className="ncp-field">Expected graduation — Select date 📅</div></> },
  { cap: "Card preference", title: "Card preference", sub: "Choose a design that fits your style", cta: "Next",
    body: <><div style={{ background: "linear-gradient(135deg,#17181a,#26221e)", color: ORANGE, borderRadius: 10, padding: "12px 10px", fontWeight: 800, letterSpacing: ".06em", marginBottom: 7 }}>NEXT<br />CARD<p style={{ textAlign: "right", margin: "8px 0 0", color: "#c9c9ce" }}>▦</p></div><p style={{ textAlign: "center", margin: "0 0 6px" }}><span className="nc-acc">●</span> <span className="ncp-dim">○ ○ ○ ○</span></p><div className="ncp-field">● Card color — Obsidian Black ›</div><div className="ncp-field">Card nickname (optional) — Give your card a nickname</div></> },
  { cap: "Review and consent", title: "Review and consent", sub: "Please review and confirm your application", cta: "Submit application",
    body: <>{["Personal information", "Identity verification", "School information", "Card preference"].map((t) => <p key={t} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e3ded2", padding: "5px 0", margin: 0 }}><span>{t}</span><span className="nc-acc">Edit</span></p>)}<p style={{ margin: "8px 0 0" }}><span className="nc-acc">☑</span> I have read and agree to the <span className="nc-acc">User Agreement</span> and <span className="nc-acc">Privacy Policy</span> and authorize the use of my information for this application.</p></> },
];
export function NextCardApplicationShowcase() {
  const [step, setStep] = useState(0);
  return <NcShell n="43" title="Application Sequence" label="Next Card application sequence — phone showcase rebuild of Next_Card_Image_43">
    <p className="ncp-mut" style={{ marginTop: 0 }}>A credit card designed for China Gen Z. <b style={{ color: "#fff" }}>🛡 Private by design</b> — your data is encrypted and protected · <b style={{ color: "#fff" }}>🔒 You&apos;re in control</b> — save and return anytime at every step · <b style={{ color: "#fff" }}>◷ Takes minutes</b> — simple steps, mobile-first.</p>
    <div className="ncp-row eq" style={{ flexWrap: "wrap" }}>
      {A43.map((p, i) => <div key={p.cap} style={{ width: 142, flex: "none" }}>
        <Cap n={String(i + 1).padStart(2, "0")} t={p.cap} />
        <Ph w={142} light sel={step === i} onClick={() => setStep(i)} label={`Application step ${i + 1}: ${p.cap}`}>
          <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 4px" }}><span style={{ letterSpacing: ".08em", fontWeight: 700 }}>NEXT CARD</span><span className="nc-acc">Save &amp; return</span></p>
          <p style={{ margin: "0 0 8px", display: "flex", gap: 4, alignItems: "center" }}>{A43.map((_, j) => <span key={j} style={{ width: 14, height: 14, borderRadius: "50%", background: j === i ? ORANGE : "#e7e2d6", color: j === i ? "#fff" : "#8a8578", fontSize: 8.5, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{j + 1}</span>)}</p>
          <p style={{ fontWeight: 800, fontSize: 12, margin: "2px 0" }}>{p.title}</p>
          <p className="ncp-dim" style={{ margin: "0 0 6px" }}>{p.sub}</p>
          {p.body}
          <button type="button" className="ncp-cta" style={{ marginTop: 8 }} onClick={(e) => { e.stopPropagation(); setStep(Math.min(5, i + 1)); }}>{p.cta}</button>
          {i > 0 && <p style={{ margin: "6px 0 0" }} className="ncp-dim">‹ Back</p>}
          {p.foot && <p style={{ textAlign: "center", color: "#b3540f", margin: "7px 0 0" }}>{p.foot}</p>}
        </Ph>
      </div>)}
    </div>
    <p style={{ margin: "14px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b>Progress you can see</b> — Clear steps help you know where you are.</span><span><b>Save and return</b> — Pick up where you left off, anytime.</span><span><b>Privacy first</b> — Your data is encrypted and never shared.</span><span><b>Simple and fast</b> — Only the info we need, nothing more.</span></p>
  </NcShell>;
}

/* ================= 44 — Approval & Virtual Card ================= */
const S44 = [
  { key: "PENDING", icon: "◷", title: "Application received", sub: "We're reviewing your application.", body: "We're reviewing your information. This usually takes 1–2 business days." },
  { key: "DECLINED", icon: "✕", title: "Not approved", sub: "Not approved this time. You can reapply later.", body: "We couldn't approve your application based on our current criteria." },
  { key: "MANUAL REVIEW", icon: "🔍", title: "Additional review", sub: "We need a bit more information.", body: "We're reviewing your application and may contact you for more information." },
];
export function NextCardApprovalShowcase() {
  const [d, setD] = useState(0); // 0 approved, 1..3 = S44 index+1
  const [reveal, setReveal] = useState(false);
  const [mission, setMission] = useState(false);
  const mini = (s: typeof S44[number]) => <>
    <p style={{ textAlign: "center", fontSize: 22, margin: "4px 0 0", color: ORANGE }}>{s.icon}</p>
    <p style={{ textAlign: "center", fontWeight: 700, margin: "2px 0 0" }}>{s.title}</p>
    <p className="ncp-mut" style={{ textAlign: "center", margin: "2px 0 6px" }}>{s.body}</p>
    <div className="ncp-card"><p style={{ margin: 0 }}><b>{s.key === "PENDING" ? "What happens next" : s.key === "DECLINED" ? "Possible reasons" : "What you can do"}</b></p><p className="ncp-mut" style={{ margin: "3px 0 0" }}>{s.key === "PENDING" ? "We'll notify you when there's an update · You can check your status anytime in the app." : s.key === "DECLINED" ? "Information didn't match our records · Credit profile didn't meet our criteria · Recent credit applications may affect approval." : "Keep your phone nearby in case we contact you · Check your email for any requests."}</p></div>
    <span className="ncp-cta ghost">View application details</span>
    <div className="ncp-card"><p style={{ margin: 0 }}><b>{s.key === "DECLINED" ? "What you can do" : "While you wait"}</b></p><p className="ncp-mut" style={{ margin: "3px 0 0" }}>{s.key === "DECLINED" ? "You can reapply after 30 days. Learn how to improve your profile ›." : "Explore Next Card and learn how to manage your account ›."}</p></div>
  </>;
  return <NcShell n="44" title="Approval and Virtual Card" label="Next Card approval — phone showcase rebuild of Next_Card_Image_44">
    <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 12 }} role="group" aria-label="Decision outcomes">
      {["APPROVED", ...S44.map((s) => s.key)].map((t, i) => <button key={t} type="button" className="nc-tab" aria-pressed={d === i} onClick={() => setD(i)}>{t}</button>)}
    </div>
    <div className="ncp-row">
      <Rail items={[["Transparent status", "Know exactly where your application stands."], ["Virtual Next Card", "Instantly view your card details when approved."], ["Security first", "Set up security to keep your account protected."], ["First spend mission", "Simple mission to help you get started responsibly."]]} />
      <Ph w={238} label="Decision phone">
        <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 4px" }}><span className="ncp-dim">✕</span><span>Application</span><span /></p>
        {d === 0 ? <>
          <p style={{ textAlign: "center", fontSize: 26, margin: "4px 0 0", color: ORANGE }}>✓</p>
          <p style={{ textAlign: "center", fontWeight: 800, fontSize: 14, margin: "2px 0 0" }}>You&apos;re approved</p>
          <p className="ncp-mut" style={{ textAlign: "center", margin: "2px 0 7px" }}>Welcome to Next Card.</p>
          <div className="ncp-card"><p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span className="ncp-dim">Initial credit limit</span><span>›</span></p><p style={{ fontSize: 15, fontWeight: 800, margin: "2px 0" }}>¥8,000.00</p><p className="ncp-dim" style={{ margin: 0 }}>Review your limit anytime in the app.</p></div>
          <div className="ncp-card">
            <p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span>Virtual Next Card</span><span className="nc-acc">Active</span></p>
            <div style={{ background: "linear-gradient(120deg,#191a1e 55%,#7a2410)", borderRadius: 9, padding: "9px", margin: "6px 0" }}>
              <p style={{ margin: 0, fontWeight: 700 }}>Next Card</p>
              <p style={{ margin: "8px 0 4px", letterSpacing: ".08em" }}>•••• •••• •••• 1234</p>
              <p style={{ display: "flex", gap: 14, margin: 0 }}><span>Valid Thru<br /><b>12/28</b></span><span>CVV<br /><b>{reveal ? "345" : "•••"}</b></span><button type="button" onClick={() => setReveal((v) => !v)} aria-pressed={reveal} style={{ marginLeft: "auto", background: "none", border: "none", color: "#fff", cursor: "pointer", font: "inherit" }}>👁</button></p>
            </div>
            <button type="button" className="ncp-cta white">▣ Add to wallet</button>
            <span className="ncp-cta ghost" style={{ marginTop: 5 }}>View card details</span>
          </div>
          <div className="ncp-card"><p style={{ margin: 0 }}><b>🛡 Security setup</b> <span style={{ float: "right" }}>›</span></p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Protect your account in a few steps.</p></div>
          <div className="ncp-card" style={{ borderColor: "#5a2c17" }}><p style={{ margin: 0 }}><b>⚑ First spend mission</b></p><p className="ncp-mut" style={{ margin: "2px 0 6px" }}>Make your first transaction to activate more features.</p><button type="button" className="ncp-cta" aria-pressed={mission} onClick={() => setMission(true)}>{mission ? "Mission started ✓" : "Start mission"}</button></div>
        </> : mini(S44[d - 1])}
      </Ph>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: "1 1 auto", minWidth: 0 }}>
        {S44.map((s, i) => <div key={s.key} style={{ width: 146, flex: "none" }}>
          <Cap n={s.key} t={s.sub} />
          <Ph w={146} sel={d === i + 1} onClick={() => setD(i + 1)} label={`${s.key} phone`}>
            <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 4px" }}><span className="ncp-dim">‹</span><span>Application</span><span /></p>
            {mini(s)}
          </Ph>
        </div>)}
      </div>
    </div>
    <p style={{ margin: "14px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b>🔒 You&apos;re in control</b> — Manage your card, limit, and settings anytime.</span><span><b>👁 Real-time updates</b> — Get notified at every step of the process.</span><span><b>🛡 Secure by design</b> — We protect your data and your account.</span><span><b>💬 Help when you need it</b> — Support is available in the app.</span></p>
  </NcShell>;
}

/* ================= 45 — Home Dashboard: exploded annotated dashboard ================= */
const D45: Array<[string, string]> = [
  ["Credit Overview", "Quick view of available credit, current balance, and usage ratio — without any jargon."],
  ["Upcoming Repayment", "Shows the amount and due date of your next repayment — so you stay prepared and in control."],
  ["Rewards Earned", "Track your earned points and easily access exclusive rewards curated for you."],
  ["Next Responsible Mission", "A small step toward a better habit. Complete missions, earn points, make an impact."],
  ["Recommended for You", "Local offers you'll love — handpicked to match your lifestyle and preferences."],
  ["Spending Insight", "Understand where your money goes with clear categories and simple visuals."],
];
export function NextCardDashboardShowcase() {
  const [sel, setSel] = useState(0);
  const [trips, setTrips] = useState(1);
  const sec = (i: number, content: ReactNode) => <div onClick={() => setSel(i)} style={{ cursor: "pointer", outline: sel === i ? `1.5px solid ${ORANGE}` : "none", borderRadius: 12, marginBottom: 7 }}>{content}</div>;
  return <NcShell n="45" title="Home Dashboard" label="Next Card home dashboard — exploded annotated phone rebuild of Next_Card_Image_45">
    <div className="ncp-row">
      <div className="ncp-rail" style={{ width: 148 }}>
        <p style={{ fontWeight: 800, fontSize: 15, margin: "0 0 2px" }}>HOME<br /><span className="nc-acc">DASHBOARD</span></p>
        <p className="ncp-mut" style={{ margin: "0 0 10px" }}>Everything you need. Designed for clear control, built for real life.</p>
        {[["▦", "Overview", true], ["☰", "Activity", false], ["▣", "Pay & Manage", false], ["🎁", "Rewards", false], ["◉", "Profile", false]].map(([ic, t, on]) => <p key={t as string} style={{ margin: "7px 0", color: on ? ORANGE : "#9a9aa0", fontWeight: on ? 700 : 400 }}>{ic as string} {t as string}</p>)}
        <div style={{ background: "linear-gradient(135deg,#141416,#1e1410)", border: "1px solid #2c2d30", borderRadius: 12, padding: 10, marginTop: 12, transform: "rotate(-4deg)" }}>
          <p style={{ margin: 0, fontSize: 9, letterSpacing: ".1em", textAlign: "right" }}>NEXT CARD</p>
          <p style={{ fontSize: 16, margin: "12px 0 2px" }}>▦</p>
          <p className="nc-acc" style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>N</p>
        </div>
        <p className="nc-acc" style={{ fontWeight: 700, marginTop: 14 }}>Next is yours.</p>
      </div>
      <Ph w={252} label="Home dashboard phone">
        <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 6px" }}><b style={{ fontSize: 12 }}>Hey, Alex</b><span>🔔</span></p>
        {sec(0, <div className="ncp-card white" style={{ marginBottom: 0 }}>
          <p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span className="ncp-dim">CREDIT OVERVIEW</span><span>👁</span></p>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}><p className="ncp-dim" style={{ margin: "3px 0 0" }}>Available Credit</p><p style={{ fontSize: 14.5, fontWeight: 800, margin: 0 }}>¥ 18,600.00</p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Total Credit ¥ 30,000.00</p></div>
            <div style={{ flex: 1, borderLeft: "1px solid #e8e8e8", paddingLeft: 9 }}><p className="ncp-dim" style={{ margin: "3px 0 0" }}>Current Balance</p><p style={{ fontSize: 14.5, fontWeight: 800, margin: 0 }}>¥ 11,400.00</p><Bar pct={38} /><p className="ncp-dim" style={{ margin: "2px 0 0" }}>38% of total credit</p></div>
          </div>
        </div>)}
        {sec(1, <div className="ncp-card" style={{ marginBottom: 0, display: "flex", justifyContent: "space-between" }}><span>Upcoming Repayment<br /><span className="nc-acc">May 25</span></span><b>¥ 1,200.00 ›</b></div>)}
        {sec(2, <div className="ncp-card" style={{ marginBottom: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}><span>★ Rewards Earned<br /><b style={{ fontSize: 13.5 }}>2,860</b> <span className="ncp-dim">Points</span></span><span className="nc-acc">View Rewards ›</span></div>)}
        {sec(3, <div className="ncp-card white" style={{ marginBottom: 0 }}>
          <p className="ncp-dim" style={{ margin: 0 }}>Next Mission</p>
          <p style={{ fontWeight: 800, margin: "2px 0 0" }}>Use public transit 3 times</p>
          <p className="ncp-dim" style={{ margin: "1px 0 4px" }}>Make every trip count. <span style={{ float: "right" }}>🚇</span></p>
          <Bar pct={trips * 33.4} /><p style={{ margin: "3px 0 0" }}><span className="nc-acc">{trips} / 3</span>{trips < 3 && <button type="button" onClick={(e) => { e.stopPropagation(); setSel(3); setTrips((v) => Math.min(3, v + 1)); }} style={{ float: "right", background: "none", border: `1px solid ${ORANGE}`, color: ORANGE, borderRadius: 999, cursor: "pointer", font: "inherit", fontSize: 9, padding: "2px 8px" }}>Log a trip</button>}{trips >= 3 && <span style={{ float: "right" }} className="nc-acc">Complete ✓</span>}</p>
        </div>)}
        {sec(4, <div>
          <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 4px" }}><span>Recommended for You</span><span className="nc-acc">See all</span></p>
          <div className="ncp-card white" style={{ marginBottom: 0, display: "flex", gap: 8 }}>
            <div style={{ width: 52, height: 44, borderRadius: 8, background: "radial-gradient(circle at 50% 55%, #e8d9c0 18%, #8a5a34 45%, #4a2f1c)", flex: "none" }} />
            <div><p style={{ margin: 0 }}><b>Neighborhood Coffee</b></p><p className="nc-acc" style={{ fontWeight: 800, margin: "1px 0" }}>10% off</p><p className="ncp-dim" style={{ margin: 0 }}>Valid until May 31 · 📍 800m</p></div>
          </div>
        </div>)}
        {sec(5, <div className="ncp-card" style={{ marginBottom: 0 }}>
          <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 5px" }}><span>Spending Insight</span><span className="ncp-dim">This Month ⌄</span></p>
          {[["☕", "Food & Drinks", "¥ 1,620.00", "28%", 28], ["🚌", "Transport", "¥ 980.00", "17%", 17]].map(([ic, t, v, pc, w]) => <div key={t as string} style={{ marginBottom: 5 }}><p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span>{ic as string} {t as string}</span><span>{v as string} <b>{pc as string}</b></span></p><Bar pct={w as number} /></div>)}
        </div>)}
        <div className="ncp-nav"><span><b>Home</b></span><span>Activity</span><span style={{ background: ORANGE, color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>N</span><span>Pay</span><span>Profile</span></div>
      </Ph>
      <div style={{ flex: 1, minWidth: 0 }} aria-live="polite">
        <p style={{ margin: 0 }}><b className="nc-acc" style={{ fontSize: 14.5 }}>At-a-glance clarity.</b></p>
        <p className="ncp-mut" style={{ margin: "2px 0 10px" }}>Key financials, smart guidance, and everyday value—organized for Gen Z.</p>
        <div className="ncp-card white" style={{ maxWidth: 330 }}>
          <p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span className="ncp-dim">CREDIT OVERVIEW</span><span>👁</span></p>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}><p className="ncp-dim" style={{ margin: "3px 0 0" }}>Available Credit</p><p style={{ fontSize: 14.5, fontWeight: 800, margin: 0 }}>¥ 18,600.00</p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Total Credit ¥ 30,000.00</p></div>
            <div style={{ flex: 1, borderLeft: "1px solid #e8e8e8", paddingLeft: 9 }}><p className="ncp-dim" style={{ margin: "3px 0 0" }}>Current Balance</p><p style={{ fontSize: 14.5, fontWeight: 800, margin: 0 }}>¥ 11,400.00</p><Bar pct={38} /><p className="ncp-dim" style={{ margin: "2px 0 0" }}>38% of total credit</p></div>
          </div>
        </div>
        {D45.map(([t, d], i) => <p key={t} onClick={() => setSel(i)} style={{ margin: "0 0 9px", cursor: "pointer", opacity: sel === i ? 1 : 0.72 }}>
          <span className="ncp-marker" style={{ marginRight: 7 }}>{i + 1}</span><b style={{ fontSize: 13 }}>{t}</b>
          <span className="ncp-mut" style={{ display: "block", marginLeft: 22 }}>{d}</span>
        </p>)}
      </div>
    </div>
  </NcShell>;
}

/* ================= 46 — Rewards Hub: 5 + 6 phone wall ================= */
const R46: Array<[string, string]> = [
  ["Rewards", "Points Balance 6,350 ≈ ¥63.50. Expiring on Dec 31, 2025: 1,200 pts. Your Progress — Silver | Spend ¥4,000 more to reach Gold · ¥6,000 / ¥10,000 (bar). Earn More: Dining 5X · Beverages 3X · Shopping 2X · Transportation 1X · Others 1X. Bottom nav: Home · Card · Rewards · Profile."],
  ["Categories", "“Choose what you love, earn more.” Dining 5X · Beverages 3X · Shopping 2X · Transportation 1X · Entertainment 1X · Others 1X. Base earning is 1 pt / ¥10 for all eligible spend."],
  ["How You Earn", "Tabs: Earn Points | Bonus Rules. Base Earning — 1 pt for every ¥10 spent (1X). Category Earning (Monthly): Dining 5X · Beverages 3X · Shopping 2X · Transportation 1X · Others 1X. Category updates on the 1st of each month. Points will be credited after the transaction settles."],
  ["Offer Detail", "Dining Bonus — Earn 10X Points on Weekend Dining. Validity: May 1 – Jun 30, 2025. Eligible: In-store & Online dining spend. Earn 10 pts for every ¥10 spent on dining during weekends. Conditions: Register before Jun 30, 2025 · Each account can earn up to 5,000 pts during the campaign."],
  ["Redeem", "Available Points 6,350 ≈ ¥63.50. Tabs: All | Lifestyle | Digital | Merchandise. Lifestyle Vouchers — From 2,000 pts · Partner Offers — From 1,500 pts · Digital Subscriptions — From 1,000 pts · Merchandise — From 3,000 pts · Experiences — From 2,500 pts. Redemption rules ›."],
  ["History", "Tabs: All | Earned | Redeemed. May 2025 — Earned · Dining Spend · May 18, 2025 · 250 pts · Redeemed · Lifestyle Voucher · May 17, 2025 · −2,000 pts · Earned · Shopping Spend · May 12, 2025 · 480 pts · Earned · Bonus Points · May 10, 2025 · 300 pts. “That's all for now.”"],
  ["Redemption Detail", "Lifestyle Voucher — ¥20 Café Voucher. 2,000 pts. Order Number R25051800123 · Redeemed On May 18, 2025 14:30 · Status Completed. [View Voucher]"],
  ["No Rewards Yet", "Empty state — “You don't have any rewards yet. Start earning points and come back!” [Explore Ways to Earn]"],
  ["No Available Offers", "Empty state — “There are no available offers now. Check back later for exciting rewards.” [View All Offers]"],
  ["Not Enough Points", "Empty state — “You need 2,000 pts to redeem this reward. Keep earning and try again!” [Explore Ways to Earn]"],
  ["Offer Unavailable", "Empty state — “This offer is no longer available. Explore other offers you might like.” [View Other Offers]"],
];
const EARN46: Array<[string, string, string]> = [["Dining", "Earn 5 pts / ¥10", "5X"], ["Beverages", "Earn 3 pts / ¥10", "3X"], ["Shopping", "Earn 2 pts / ¥10", "2X"], ["Transportation", "Earn 1 pt / ¥10", "1X"], ["Others", "Earn 1 pt / ¥10", "1X"]];
const CAT46: Array<[string, string, string]> = [["🍽", "Dining", "5X"], ["🧋", "Beverages", "3X"], ["🛍", "Shopping", "2X"], ["🚌", "Transportation", "1X"], ["🎬", "Entertainment", "1X"], ["◎", "Others", "1X"]];
export function NextCardRewardsShowcase() {
  const [scr, setScr] = useState(0);
  const [reg, setReg] = useState(false);
  const catRows = CAT46.map(([ic, t, m]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "4.5px 0" }}><span>{ic} {t}</span><b className="nc-acc">{m}</b></p>);
  const phone = (i: number, w: number, body: ReactNode) => <Ph key={i} w={w} sel={scr === i} onClick={() => setScr(i)} label={`Rewards screen: ${R46[i][0]}`}><PhHead t={R46[i][0]} back={i > 0 && i !== 4} />{body}</Ph>;
  return <NcShell n="46" title="Rewards Hub" label="Next Card rewards hub — phone wall rebuild of Next_Card_Image_46">
    <div className="ncp-row">
      <Rail items={[["Clear Points Balance", "Real-time balance with upcoming expiry."], ["Category Rewards", "Earn more in what you love."], ["Progress Tracking", "See how close you are to your next reward."], ["Earning Rules", "Simple and transparent."], ["Flexible Redemption", "Multiple ways to use your points."], ["Reward History", "Track every earning and redemption."], ["Empty & Unavailable States", "Helpful guidance in every situation."]]}
        foot={<p style={{ marginTop: 12 }}><span className="nc-acc" style={{ fontWeight: 700 }}>Use Freely. Reward Yourself.</span><br /><span className="ncp-mut">Next Card, For Your Next.</span></p>} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="ncp-row" style={{ flexWrap: "wrap", marginBottom: 10 }}>
          {phone(0, 134, <><div className="ncp-card" style={{ backgroundImage: "url(/projects/crops/next-card/rewards-cardart.jpg)", backgroundSize: "auto 78%", backgroundPosition: "right center", backgroundRepeat: "no-repeat" }}><p className="ncp-dim" style={{ margin: 0 }}>Points Balance</p><p style={{ fontSize: 16, fontWeight: 800, margin: "1px 0" }}>6,350</p><p className="ncp-dim" style={{ margin: 0 }}>≈ ¥63.50</p><p style={{ display: "flex", justifyContent: "space-between", margin: "5px 0 0" }}><span className="ncp-dim">Expiring on Dec 31, 2025</span><span className="nc-acc">1,200 pts</span></p></div>
            <div className="ncp-card"><p style={{ margin: 0 }}><b>Your Progress</b></p><p className="ncp-dim" style={{ margin: "2px 0 4px" }}>Silver | Spend ¥4,000 more to reach Gold</p><Bar pct={60} /><p className="ncp-dim" style={{ margin: "3px 0 0", textAlign: "right" }}>¥6,000 / ¥10,000</p></div>
            <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 2px" }}><b>Earn More</b><span className="ncp-dim">All Categories ›</span></p>
            {EARN46.map(([t, d, m]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "3.5px 0" }}><span>{t}<br /><span className="ncp-dim">{d}</span></span><b className="nc-acc">{m}</b></p>)}
            <div className="ncp-nav"><span>Home</span><span>Card</span><span><b>Rewards</b></span><span>Profile</span></div></>)}
          {phone(1, 134, <><p style={{ fontWeight: 800, fontSize: 12, margin: "2px 0 6px" }}>Choose what you love, earn more.</p>{catRows}<p className="ncp-dim" style={{ marginTop: 6 }}>Base earning is 1 pt / ¥10 for all eligible spend. Rules ›</p></>)}
          {phone(2, 134, <><p style={{ display: "flex", gap: 10, margin: "0 0 6px" }}><b style={{ borderBottom: `2px solid ${ORANGE}`, paddingBottom: 2 }}>Earn Points</b><span className="ncp-dim">Bonus Rules</span></p>
            <div className="ncp-card"><p style={{ margin: 0 }}><b>Base Earning</b><span style={{ float: "right" }} className="nc-acc"><b>1X</b></span></p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>1 pt for every ¥10 spent</p></div>
            <p style={{ margin: "0 0 2px" }}><b>Category Earning (Monthly)</b></p><p className="ncp-dim" style={{ margin: "0 0 4px" }}>Earn more in your favorite categories.</p>{catRows}
            <p className="ncp-dim">Category updates on the 1st of each month. Points will be credited after the transaction settles.</p></>)}
          {phone(3, 134, <><img src="/projects/crops/next-card/rewards-coffee.jpg" alt="" style={{ width: "100%", height: 46, objectFit: "cover", borderRadius: 8, display: "block", marginBottom: 6 }} />
            <p className="ncp-kick" style={{ margin: 0 }}>Dining Bonus</p>
            <p style={{ fontWeight: 800, fontSize: 12, margin: "2px 0" }}>Earn 10X Points on Weekend Dining <span className="nc-acc">10X</span></p>
            <p className="ncp-mut" style={{ margin: "3px 0" }}>Validity<br />May 1 – Jun 30, 2025</p>
            <p className="ncp-mut" style={{ margin: "3px 0" }}>Eligible Transactions<br />In-store &amp; Online dining spend</p>
            <p className="ncp-mut" style={{ margin: "3px 0" }}>How to Earn<br />Earn 10 pts for every ¥10 spent on dining during weekends.</p>
            <p className="ncp-dim" style={{ margin: "3px 0" }}>Offer Conditions<br />• Register before Jun 30, 2025<br />• Each account can earn up to 5,000 pts during the campaign</p>
            <button type="button" className="ncp-cta" aria-pressed={reg} onClick={(e) => { e.stopPropagation(); setReg(true); }}>{reg ? "✓ Registered" : "Register Now"}</button>
            <p style={{ textAlign: "center", margin: "5px 0 0" }} className="ncp-dim">Terms &amp; Conditions</p></>)}
          {phone(4, 134, <><p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 4px" }}><span className="ncp-dim">Available Points</span><span className="ncp-dim">History</span></p>
            <img src="/projects/crops/next-card/rewards-coins.jpg" alt="" style={{ width: 42, height: 30, objectFit: "cover", borderRadius: 6, float: "right" }} />
            <p style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>6,350</p><p className="ncp-dim" style={{ margin: "0 0 6px" }}>≈ ¥63.50</p>
            <p style={{ display: "flex", gap: 7, margin: "0 0 6px" }}><b style={{ borderBottom: `2px solid ${ORANGE}` }}>All</b><span className="ncp-dim">Lifestyle</span><span className="ncp-dim">Digital</span><span className="ncp-dim">Merchandise</span></p>
            {[["Lifestyle Vouchers", "From 2,000 pts"], ["Partner Offers", "From 1,500 pts"], ["Digital Subscriptions", "From 1,000 pts"], ["Merchandise", "From 3,000 pts"], ["Experiences", "From 2,500 pts"]].map(([t, d]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}><span>{t}<br /><span className="ncp-dim">{d}</span></span><span className="ncp-dim">›</span></p>)}
            <p className="ncp-dim" style={{ marginTop: 6 }}>Redemption rules ›</p></>)}
        </div>
        <div className="ncp-row" style={{ flexWrap: "wrap" }}>
          {phone(5, 112, <><p style={{ display: "flex", gap: 8, margin: "0 0 5px" }}><b style={{ borderBottom: `2px solid ${ORANGE}` }}>All</b><span className="ncp-dim">Earned</span><span className="ncp-dim">Redeemed</span></p>
            <p className="ncp-dim" style={{ margin: "0 0 3px" }}>May 2025</p>
            {[["Dining Spend", "Earned · May 18, 2025", "250 pts"], ["Lifestyle Voucher", "Redeemed · May 17, 2025", "−2,000 pts"], ["Shopping Spend", "Earned · May 12, 2025", "480 pts"], ["Bonus Points", "Earned · May 10, 2025", "300 pts"]].map(([t, d, v]) => <p key={t} style={{ margin: "5px 0" }}><span style={{ display: "flex", justifyContent: "space-between", gap: 5 }}><b>{t}</b><b style={{ whiteSpace: "nowrap" }}>{v}</b></span><span className="ncp-dim">{d}</span></p>)}
            <p className="ncp-dim" style={{ textAlign: "center", marginTop: 6 }}>That&apos;s all for now</p></>)}
          {phone(6, 112, <><p className="ncp-dim" style={{ margin: 0 }}>Lifestyle Voucher</p><p style={{ fontWeight: 800, margin: "2px 0 5px" }}>¥20 Café Voucher</p>
            <img src="/projects/crops/next-card/rewards-cafe.jpg" alt="" style={{ width: "100%", height: 40, objectFit: "cover", borderRadius: 8, display: "block", marginBottom: 5 }} />
            <p style={{ margin: 0 }}><b className="nc-acc" style={{ fontSize: 13 }}>2,000 pts</b></p>
            {[["Order Number", "R25051800123"], ["Redeemed On", "May 18, 2025 14:30"], ["Status", "Completed"]].map(([k, v]) => <p key={k} style={{ margin: "5px 0" }}><span className="ncp-dim" style={{ display: "block", fontSize: 8.5 }}>{k}</span><span style={{ whiteSpace: "nowrap" }}>{v}</span></p>)}
            <span className="ncp-cta ghost">View Voucher</span></>)}
          {[7, 8, 9, 10].map((i) => phone(i, 112, <div style={{ textAlign: "center", paddingTop: 16 }}>
            <p style={{ fontSize: 24, margin: 0 }}>{["🎁", "🏷", "🪙", "🔒"][i - 7]}</p>
            <p style={{ fontWeight: 800, margin: "6px 0 3px" }}>{R46[i][0]}</p>
            <p className="ncp-mut" style={{ margin: "0 0 8px" }}>{R46[i][1].replace(/^Empty state — /, "").split("[")[0].replace(/“|”/g, "")}</p>
            <span className="ncp-cta">{["Explore Ways to Earn", "View All Offers", "Explore Ways to Earn", "View Other Offers"][i - 7]}</span>
          </div>))}
        </div>
      </div>
    </div>
  </NcShell>;
}

/* ================= 47 — Local City Perks: map / list / detail phones ================= */
const P47: Array<[string, string, string, string, string]> = [
  ["Morton's Bar", "Cocktail Bar · COCO Park", "280 m", "15% off cocktails", "Mon–Thu, before 11PM"],
  ["% Arabica Shenzhen Bay", "Café · Shenzhen Bay MixC", "450 m", "Free extra shot", "Daily"],
  ["Shenzhen Metro Day Pass", "Transit · All Lines", "1.2 km", "10% off", "Mon–Sun"],
  ["CGV IMAX COCO Park", "Entertainment · COCO Park", "1.3 km", "Buy 1 get 1 50% off", "Mon–Sun"],
  ["Commune Restaurant", "Fusion · OCT Loft", "1.6 km", "10% off food", "Mon–Fri"],
];
const QR47 = Array.from({ length: 81 }, (_, i) => ((i * 2654435761) >>> 8) % 3 !== 0 || [0, 1, 2, 8, 9, 10, 72, 73, 74, 80, 79, 78].includes(i));
export function NextCardPerksShowcase() {
  const [city, setCity] = useState(0);
  const [p1view, setP1view] = useState(0); // 0 map, 1 list
  const [perk, setPerk] = useState(0);
  const cur = P47[perk];
  const listBody = (compact?: boolean) => P47.map(([n2, meta, dist, offer, when], i) => <button key={n2} type="button" onClick={() => setPerk(i)} aria-pressed={perk === i} style={{ display: "flex", gap: 7, width: "100%", background: perk === i ? "#1d1e22" : "#101114", border: "1px solid #26272c", borderRadius: 10, color: "#fff", padding: "6px 7px", marginBottom: 5, cursor: "pointer", font: "inherit", textAlign: "left" }}>
    <span style={{ width: 34, height: 34, borderRadius: 7, background: ["radial-gradient(circle at 60% 40%, #b3540f, #2a1408)", "radial-gradient(circle at 50% 55%, #e8d9c0 15%, #8a5a34 50%, #3a2415)", "linear-gradient(135deg,#3a3f47,#141518)", "linear-gradient(135deg,#1d2f5a,#0c1226)", "radial-gradient(circle at 40% 40%, #7a4a22, #241305)"][i], flex: "none" }} />
    <span style={{ flex: 1 }}><b>{n2}</b> <span className="ncp-dim" style={{ float: "right" }}>{dist}</span><br /><span className="ncp-dim">{meta}</span><br /><span className="nc-acc">{offer}</span> <span className="ncp-dim">{when}</span></span><span className="ncp-dim">›</span>
  </button>);
  const head47 = (toggle?: boolean) => <>
    <p className="ncp-head"><span>📍 Local Perks</span><span className="ncp-dim">⌕ ⟳</span></p>
    <p style={{ display: "flex", gap: 12, margin: "0 0 6px" }}>{["Shenzhen", "Guangzhou"].map((c, i) => <button key={c} type="button" onClick={() => setCity(i)} aria-pressed={city === i} style={{ background: "none", border: "none", borderBottom: city === i ? `2px solid ${ORANGE}` : "2px solid transparent", color: city === i ? "#fff" : "#9a9aa0", cursor: "pointer", font: "inherit", padding: "0 0 2px" }}>{c}</button>)}</p>
    {toggle !== undefined && <p style={{ display: "flex", background: "#17181c", borderRadius: 8, padding: 2, margin: "0 0 7px" }}>{["Map", "List"].map((v, i) => <button key={v} type="button" onClick={() => setP1view(i)} aria-pressed={p1view === i} style={{ flex: 1, background: p1view === i ? ORANGE : "transparent", color: "#fff", border: "none", borderRadius: 6, padding: "4px 0", cursor: "pointer", font: "inherit" }}>{v}</button>)}</p>}
  </>;
  return <NcShell n="47" title="Local City Perks" label="Next Card local city perks — phone showcase rebuild of Next_Card_Image_47">
    <div className="ncp-row">
      <Rail items={[["CITY TAB", "Shenzhen or Guangzhou. Tailored local picks."], ["LIVE MAP & LIST", "Explore nearby perks in map or list view."], ["MERCHANT DETAIL", "Offer conditions, distance, and merchant info."], ["EASY REDEEM", "Show QR code in-store and enjoy the offer."]]}
        foot={<>
          <div style={{ background: "linear-gradient(135deg,#141416,#1e1410)", border: "1px solid #2c2d30", borderRadius: 12, padding: 10, marginTop: 12 }}><p style={{ margin: 0 }}>Next Card</p><p style={{ fontSize: 15, margin: "10px 0 2px" }}>▦</p></div>
          <p className="ncp-dim" style={{ marginTop: 10 }}>Curated offers around you. From late nights to daily commutes, enjoy more of your city.</p>
          <p className="ncp-dim">NEXT CARD · DESIGNED FOR GENERATION NEXT</p>
        </>} />
      <Ph w={216} label="Local Perks map phone">
        {head47(true)}
        {p1view === 0 ? <>
          <div style={{ position: "relative", height: 218, borderRadius: 10, background: "linear-gradient(115deg, transparent 49.6%, #23262c 49.6%, #23262c 50.4%, transparent 50.4%), linear-gradient(25deg, transparent 49.7%, #1e2025 49.7%, #1e2025 50.3%, transparent 50.3%), linear-gradient(160deg, transparent 49.7%, #23262c 49.7%, #23262c 50.3%, transparent 50.3%), #101216", overflow: "hidden" }}>
            <span className="ncp-dim" style={{ position: "absolute", left: 8, top: 26, fontSize: 8 }}>COCO Park<br />Shopping Mall</span>
            <span className="ncp-dim" style={{ position: "absolute", left: 62, top: 78, fontSize: 8 }}>Futian CBD</span>
            <span className="ncp-dim" style={{ position: "absolute", right: 8, top: 62, fontSize: 8, textAlign: "right" }}>Shenzhen Convention &amp;<br />Exhibition Center</span>
            <span className="ncp-dim" style={{ position: "absolute", right: 26, top: 118, fontSize: 8 }}>Gangxia</span>
            <span className="ncp-dim" style={{ position: "absolute", left: 12, bottom: 44, fontSize: 8 }}>Ping An<br />Finance Center</span>
            <span className="ncp-dim" style={{ position: "absolute", right: 14, bottom: 40, fontSize: 8 }}>Shenzhen<br />Central Park</span>
            {[["12%", "18%", "☕"], ["52%", "32%", "🍸"], ["18%", "58%", "✈"], ["58%", "66%", "🎵"], ["76%", "52%", "🏢"]].map(([l, t, g]) => <span key={g} style={{ position: "absolute", left: l, top: t, width: 19, height: 19, borderRadius: "50% 50% 50% 4px", transform: "rotate(-45deg)", background: ORANGE, display: "inline-flex", alignItems: "center", justifyContent: "center" }}><span style={{ transform: "rotate(45deg)", fontSize: 9 }}>{g}</span></span>)}
            <span style={{ position: "absolute", left: "47%", top: "47%", width: 11, height: 11, borderRadius: "50%", background: "#3b82f6", border: "2px solid #bfdbfe", boxShadow: "0 0 0 9px rgba(59,130,246,.25)" }} />
          </div>
          <div className="ncp-card" style={{ marginTop: 7, marginBottom: 0 }}>
            <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 5px" }}><b>Near you</b><span className="ncp-dim">See all</span></p>
            <p style={{ display: "flex", justifyContent: "space-between", textAlign: "center", margin: 0 }}>{[["▦", "All"], ["🍽", "Food & Drink"], ["☕", "Café"], ["🍸", "Nightlife"], ["🚇", "Transit"], ["🎵", "Entertain…"]].map(([g, t], i) => <span key={t}><span style={{ display: "inline-flex", width: 21, height: 21, borderRadius: "50%", background: i === 0 ? ORANGE : "#232428", alignItems: "center", justifyContent: "center" }}>{g}</span><br /><span className="ncp-dim" style={{ fontSize: 7.5 }}>{t}</span></span>)}</p>
          </div>
        </> : listBody()}
      </Ph>
      <Ph w={216} label="Local Perks list phone">
        {head47(false)}
        <p style={{ display: "flex", background: "#17181c", borderRadius: 8, padding: 2, margin: "0 0 7px" }}><span style={{ flex: 1, textAlign: "center", color: "#9a9aa0", padding: "4px 0" }}>▦ Map</span><span style={{ flex: 1, textAlign: "center", background: ORANGE, borderRadius: 6, padding: "4px 0" }}>☰ List</span></p>
        {city === 1 ? <p className="ncp-mut" aria-live="polite">Guangzhou tab selected. The printed slide shows the Shenzhen list; the Guangzhou list is not printed — the same five-row pattern applies with Guangzhou merchants.</p> : listBody()}
      </Ph>
      <Ph w={216} label="Merchant detail phone">
        <div style={{ height: 74, borderRadius: 10, background: "linear-gradient(180deg, rgba(20,10,6,.1), rgba(10,8,8,.55)), radial-gradient(circle at 30% 30%, #b3540f, #472108 55%, #160b04)", margin: "0 -2px 7px", position: "relative" }}>
          <p style={{ position: "absolute", left: 8, top: 6, margin: 0 }}><span style={{ background: "rgba(0,0,0,.5)", borderRadius: "50%", padding: "2px 6px" }}>‹</span></p>
          <p style={{ position: "absolute", right: 8, top: 6, margin: 0 }}><span style={{ background: "rgba(0,0,0,.5)", borderRadius: 6, padding: "2px 6px" }}>⤴</span></p>
        </div>
        <div className="ncp-card">
          <p style={{ margin: 0 }}><span style={{ background: "#2a1408", border: `1px solid ${ORANGE}`, borderRadius: 6, padding: "2px 5px", marginRight: 6 }}>M</span><b style={{ fontSize: 12 }}>{cur[0]}</b><span className="ncp-dim" style={{ float: "right" }}>{cur[2]}</span></p>
          <p className="ncp-dim" style={{ margin: "3px 0 0" }}>{cur[1]}</p>
        </div>
        {perk === 0 ? <>
          <div className="ncp-card">
            <p style={{ margin: 0 }}><b className="nc-acc" style={{ fontSize: 12 }}>15% off cocktails</b><span className="ncp-dim" style={{ float: "right" }}>In-store only</span></p>
            <p className="ncp-dim" style={{ margin: "2px 0 7px" }}>Mon–Thu, before 11PM</p>
            <p style={{ textAlign: "center", margin: "0 0 5px" }} className="ncp-dim">▦ Show this QR code to staff to redeem</p>
            <div style={{ background: "#fff", borderRadius: 8, padding: 8, width: 108, margin: "0 auto" }} aria-label="QR code as printed">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: 1.5 }}>{QR47.map((on, i) => <span key={i} style={{ aspectRatio: "1", background: on ? "#111" : "#fff" }} />)}</div>
            </div>
            <p style={{ textAlign: "center", margin: "6px 0 0" }}>Valid until Jun 30, 2025</p>
            <p className="ncp-dim" style={{ textAlign: "center", margin: 0 }}>One use per transaction</p>
          </div>
          <div className="ncp-card" style={{ marginBottom: 0 }}>
            <p style={{ margin: 0 }}><b>About the merchant</b></p>
            <p className="ncp-mut" style={{ margin: "3px 0" }}>A hidden gem in COCO Park. Creative cocktails, great music, and good vibes.</p>
            <p style={{ margin: 0 }}>📍 COCO Park, Futian District, Shenzhen, Guangdong <span style={{ float: "right" }}>›</span></p>
          </div>
        </> : <div className="ncp-card" style={{ marginBottom: 0 }} aria-live="polite">
          <p style={{ margin: 0 }}><b className="nc-acc" style={{ fontSize: 12 }}>{cur[3]}</b></p>
          <p className="ncp-dim" style={{ margin: "2px 0 0" }}>{cur[4]}</p>
          <p className="ncp-mut" style={{ margin: "6px 0 0" }}>Detail page follows the printed Morton&apos;s Bar pattern: offer terms, QR redeem block, about the merchant, address.</p>
        </div>}
      </Ph>
    </div>
  </NcShell>;
}

/* ================= 48 (printed "IMAGE 49") — Credit Builder ================= */
export function NextCardCreditBuilderShowcase() {
  const [scr, setScr] = useState(0);
  const [autopay, setAutopay] = useState(true);
  const [rem, setRem] = useState<Array<[string, boolean]>>([["Payment due reminder", true], ["Auto-pay result", true], ["Bill available", true], ["Spending alert", false], ["Limit usage alert", true]]);
  const sel = (i: number, w: number, body: ReactNode, label: string) => <Ph key={i} w={w} sel={scr === i} onClick={() => setScr(i)} label={label}><PhHead t={label} />{body}</Ph>;
  return <NcShell n="49" title="Credit Builder" label="Next Card credit builder — phone showcase rebuild of Next_Card_Image_48 (printed IMAGE 49)">
    <div className="ncp-row">
      <Rail items={[["Start small. Build steady.", "Begin with a manageable limit and grow as you build a track record."], ["Understand. Improve.", "See your utilization and spending at a glance — and get clear tips to improve."], ["Progress that matters.", "Healthy habits unlock more opportunities over time."]]}
        foot={<div className="ncp-card" style={{ marginTop: 12 }}><p style={{ margin: 0 }}><b>Healthy behavior guide</b></p>{["Repay on time, every time", "Keep utilization low", "Avoid maxing out your limit", "Build good spending habits"].map((t) => <p key={t} style={{ margin: "4px 0 0" }}><span className="nc-acc">✓</span> {t}</p>)}</div>} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="ncp-row" style={{ flexWrap: "wrap" }}>
          {sel(0, 178, <>
            <div className="ncp-card"><p style={{ margin: 0 }}><b>Next payment due</b><span style={{ float: "right" }} className="ncp-dim">Auto-pay <span style={{ color: autopay ? ORANGE : "#9a9aa0" }}>{autopay ? "On" : "Off"}</span></span></p>
              <p className="nc-acc" style={{ fontSize: 13, fontWeight: 800, margin: "2px 0" }}>May 25, 2025</p>
              <button type="button" className="ncp-cta ghost" style={{ width: "auto", padding: "4px 10px" }} aria-pressed={autopay} onClick={() => setAutopay((v) => !v)}>Manage</button></div>
            <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 3px" }}><b>May 2025</b><span className="ncp-dim">‹ ›</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, textAlign: "center", fontSize: 9 }}>
              {["S", "M", "T", "W", "T", "F", "S"].map((d2, i) => <span key={i} className="ncp-dim">{d2}</span>)}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d2) => <span key={d2} style={d2 === 25 ? { background: ORANGE, color: "#fff", borderRadius: "50%", fontWeight: 800, padding: "2px 0" } : { padding: "2px 0" }}>{d2}</span>)}
            </div>
            <p style={{ margin: "8px 0 2px" }}><b>This month&apos;s plan</b></p>
            <p style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span className="ncp-dim">Total due</span><b>¥1,240.00</b></p>
            <p style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span className="ncp-dim">Minimum due</span><b>¥1,240.00</b></p>
            <p className="ncp-dim" style={{ margin: "3px 0 6px" }}>You&apos;re on track to pay on time</p>
            <span className="ncp-cta">Repay now</span>
            <p style={{ margin: "6px 0 0" }} className="ncp-dim">Set or modify auto-pay ›</p>
          </>, "Repayment")}
          {sel(1, 178, <>
            <p style={{ display: "flex", gap: 8, margin: "0 0 6px", flexWrap: "wrap" }}><b style={{ borderBottom: `2px solid ${ORANGE}` }}>Overview</b><span className="ncp-dim">Spending</span><span className="ncp-dim">Utilization</span><span className="ncp-dim">Payments</span></p>
            <div className="ncp-card" style={{ textAlign: "center" }}>
              <div style={{ width: 84, height: 84, margin: "2px auto", borderRadius: "50%", background: `conic-gradient(${ORANGE} 0 38%, #2c2d30 38% 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 60, height: 60, borderRadius: "50%", background: "#16171b", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}><b style={{ fontSize: 13 }}>38%</b><span className="ncp-dim" style={{ fontSize: 8 }}>Utilization</span></div></div>
              <p style={{ margin: "4px 0 0" }}><b>Credit utilization</b></p><p className="ncp-dim" style={{ margin: 0 }}>Keep it low, build it strong. · On track ✓</p>
            </div>
            <p style={{ margin: "0 0 3px" }}><b>Spending insights</b></p>
            {[["Daily life", 40], ["Food & drink", 24], ["Shopping", 18], ["Transport", 10], ["Other", 8]].map(([t, pct]) => <div key={t as string} style={{ marginBottom: 4 }}><p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span>{t as string}</span><b>{pct as number}%</b></p><Bar pct={pct as number} /></div>)}
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Insight</b></p><p className="ncp-mut" style={{ margin: "2px 0 0" }}>Your utilization is in a healthy range.</p><p className="nc-acc" style={{ margin: "3px 0 0" }}>View all insights ›</p></div>
            <div className="ncp-nav"><span>Home</span><span>Card</span><span><b>Build</b></span><span>Learn</span><span>Me</span></div>
          </>, "Insights")}
          {sel(2, 178, <>
            <p style={{ display: "flex", alignItems: "center", gap: 4, margin: "2px 0 8px" }}>{[["Start", true], ["Good habits", false], ["More opportunities", false]].map(([t, done], i) => <span key={t as string} style={{ display: "flex", alignItems: "center", gap: 4, flex: i < 2 ? 1 : undefined }}><span style={{ textAlign: "center" }}><span style={{ display: "inline-flex", width: 17, height: 17, borderRadius: "50%", background: done ? ORANGE : "#232428", color: "#fff", alignItems: "center", justifyContent: "center", fontSize: 9 }}>{done ? "✓" : i + 1}</span><br /><span style={{ fontSize: 8 }}>{t as string}</span></span>{i < 2 && <span style={{ flex: 1, height: 2, background: i === 0 ? ORANGE : "#2c2d30", marginBottom: 12 }} />}</span>)}</p>
            <div className="ncp-card"><p style={{ margin: 0 }}><b>Limit growth</b></p><p className="ncp-mut" style={{ margin: "2px 0 0" }}>Your limit grows as you build good habits.</p><span className="nc-acc">Learn more ›</span></div>
            <p style={{ margin: "0 0 3px" }}><b>What you can do next</b></p>
            {[["Keep your utilization below 30%", "This month: 38%"], ["Continue on-time repayments", "6 payments on time"], ["Review your limit in 30 days", "Next review: Jun 24, 2025"]].map(([t, d2]) => <div key={t} className="ncp-card"><p style={{ margin: 0 }}><b>{t}</b><span style={{ float: "right" }}>›</span></p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>{d2}</p></div>)}
          </>, "Limit growth")}
        </div>
        <div className="ncp-row" style={{ flexWrap: "wrap", marginTop: 10 }}>
          {sel(3, 178, <>{[["How utilization works", "Credit Builder · 3 min read"], ["5 habits of healthy credit users", "Credit Basics · 4 min read"], ["Understanding your credit limit", "Guide · 5 min read"]].map(([t, d2]) => <div key={t} className="ncp-card"><p style={{ margin: 0 }}><b>{t}</b><span style={{ float: "right" }}>›</span></p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>{d2}</p></div>)}</>, "Learn")}
          {sel(4, 178, <>{rem.map(([t, on], i) => <p key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "5px 0" }}><span>{t}</span><button type="button" className="ncp-toggle" role="switch" aria-checked={on} aria-label={t} onClick={(e) => { e.stopPropagation(); setRem((v) => v.map((r, j) => j === i ? [r[0], !r[1]] : r)); }} /></p>)}<p className="ncp-dim">You can change these settings anytime.</p></>, "Reminders")}
        </div>
      </div>
    </div>
  </NcShell>;
}

/* ================= 49 (printed "EXPERIENCE 48") — Squad & Referral ================= */
export function NextCardSquadShowcase() {
  const [created, setCreated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState(0);
  const [priv, setPriv] = useState<Array<[string, boolean]>>([["Show my squad activity", true], ["Show my name to squad members", true], ["Allow direct messages", false]]);
  const heads = ["Create Squad", "Invite Friends", "My Squad", "Squad Rewards", "Privacy & Safety"];
  return <NcShell n="48" title="Squad and Referral Experience" label="Next Card squad and referral — phone showcase rebuild of Next_Card_Image_49 (printed EXPERIENCE 48)">
    <p style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", margin: "0 0 12px" }}><span className="ncp-dim">JOURNEY OVERVIEW —</span>
      {["Create Squad", "Invite Friends", "Track Progress", "Squad Rewards", "Privacy & Safety"].map((t, i) => <span key={t} style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><span><b className="nc-acc">{String(i + 1).padStart(2, "0")}</b> {t}</span>{i < 4 && <span className="ncp-dim">→</span>}</span>)}
    </p>
    <div className="ncp-row">
      <Rail items={[["Build Your Squad", "Create your own squad and invite friends to join."], ["Track Progress", "See who's joined, who's activated, and your milestones."], ["Shared Rewards", "Earn rewards as a team, not alone."], ["Fair and Safe", "Clear rules that protect everyone."], ["Privacy First", "You control what you share."]]} />
      <div className="ncp-row" style={{ flexWrap: "wrap", flex: 1 }}>
        <div><Cap n="01" t="Create Squad" />
          <Ph w={136} label="Create Squad phone">
            <PhHead t={heads[0]} />
            <p className="ncp-mut" style={{ margin: "2px 0 6px" }}>Team up with friends and earn rewards together.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginBottom: 7 }}>{[0, 1, 2, 3].map((i) => <div key={i} style={{ background: "#16171b", border: "1px solid #26272c", borderRadius: 9, padding: 7, textAlign: "center" }}><span style={{ fontSize: 15 }}>{["◉", "▦", "◎", "✦"][i]}</span><p className="ncp-dim" style={{ margin: "2px 0 0", fontSize: 8.5 }}>{["Build", "Grow", "Reward", "Achieve"][i]}</p></div>)}</div>
            <button type="button" className="ncp-cta" aria-pressed={created} onClick={() => setCreated(true)}>{created ? "✓ Squad created" : "Create Squad"}</button>
            <p className="ncp-dim" style={{ marginTop: 6 }}>You can invite up to 10 friends</p>
          </Ph></div>
        <div><Cap n="02" t="Invite Friends" />
          <Ph w={136} label="Invite Friends phone">
            <PhHead t={heads[1]} />
            <p className="ncp-mut" style={{ margin: "2px 0 6px" }}>Share your invite link with friends.</p>
            <p style={{ margin: "0 0 2px" }}><b>Your Invite Link</b></p>
            <div className="ncp-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 8.5, overflowWrap: "anywhere" }}>nextcard.cn/join/AB12CD</span><button type="button" style={{ background: "none", border: "none", color: ORANGE, cursor: "pointer", font: "inherit", fontSize: 9.5 }} onClick={() => setCopied(true)}>{copied ? "✓ Copied" : "Copy"}</button></div>
            <p style={{ margin: "0 0 4px" }}><b>Share via</b></p>
            <p style={{ display: "flex", justifyContent: "space-between", textAlign: "center", margin: 0 }}>{[["💬", "WeChat"], ["◎", "Moments"], ["✉", "SMS"], ["•••", "More"]].map(([g, t]) => <span key={t}><span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: "50%", background: "#1d1e22", alignItems: "center", justifyContent: "center" }}>{g}</span><br /><span className="ncp-dim">{t}</span></span>)}</p>
            <div className="ncp-card" style={{ marginTop: 7, marginBottom: 0 }}><p style={{ margin: 0 }}><b>Invite Tips</b></p>{["Friends must apply and activate to count", "Rewards arrive within 3 business days"].map((t) => <p key={t} className="ncp-mut" style={{ margin: "3px 0 0" }}>• {t}</p>)}</div>
          </Ph></div>
        <div><Cap n="03" t="My Squad" />
          <Ph w={136} label="My Squad phone">
            <PhHead t={heads[2]} />
            <div style={{ textAlign: "center", marginBottom: 6 }}>
              <div style={{ width: 76, height: 76, margin: "0 auto", borderRadius: "50%", background: `conic-gradient(${ORANGE} 0 30%, #2c2d30 30% 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0a0a0c", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}><b style={{ fontSize: 13.5 }}>3/10</b><span className="ncp-dim" style={{ fontSize: 8 }}>Friends joined</span></div></div>
            </div>
            <p style={{ display: "flex", gap: 9, margin: "0 0 6px" }}>{["All (3)", "Joined (3)", "Activated (2)"].map((t, i) => <button key={t} type="button" onClick={() => setTab(i)} aria-pressed={tab === i} style={{ background: "none", border: "none", borderBottom: tab === i ? `2px solid ${ORANGE}` : "2px solid transparent", color: tab === i ? "#fff" : "#9a9aa0", cursor: "pointer", font: "inherit", padding: "0 0 2px" }}>{t}</button>)}</p>
            {[["A", "Alex", "Joined · May 12, 2025"], ["C", "Chris", "Activated · May 13, 2025"], ["J", "Jamie", "Joined · May 14, 2025"]].filter((m) => tab !== 2 || m[2].startsWith("Activated")).map(([ic, n2, st]) => <p key={n2} style={{ display: "flex", gap: 7, alignItems: "center", margin: "5px 0" }}><span style={{ width: 21, height: 21, borderRadius: "50%", background: "#2a1408", color: ORANGE, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{ic}</span><span><b>{n2}</b><br /><span className="ncp-dim">{st}</span></span><span style={{ marginLeft: "auto" }}>›</span></p>)}
            <span className="ncp-cta">Invite More Friends</span>
          </Ph></div>
        <div><Cap n="04" t="Squad Rewards" />
          <Ph w={136} label="Squad Rewards phone">
            <PhHead t={heads[3]} />
            <div className="ncp-card" style={{ background: "linear-gradient(135deg,#ff4b1f,#b32f0d)", borderColor: "#ff4b1f", color: "#fff" }}>
              <p style={{ margin: 0 }}><b>Milestone Reached</b><span style={{ float: "right", fontSize: 14 }}>✦</span></p>
              <p style={{ margin: "2px 0 0" }}>5 Friends Joined!<br />You&apos;ve unlocked a shared reward.</p>
            </div>
            <div className="ncp-card"><p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span>Shared Reward</span><b className="nc-acc">¥30</b></p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Everyone in your squad gets it</p></div>
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ display: "flex", justifyContent: "space-between", margin: 0 }}><span>Upcoming Milestone</span><b className="nc-acc">¥80</b></p><p className="ncp-dim" style={{ margin: "2px 0 4px" }}>10 Friends Joined</p><Bar pct={30} /><p className="ncp-dim" style={{ margin: "3px 0 0", textAlign: "right" }}>3 / 10</p></div>
          </Ph></div>
        <div><Cap n="05" t="Privacy & Safety" />
          <Ph w={136} label="Privacy and Safety phone">
            <PhHead t={heads[4]} />
            <p style={{ margin: "0 0 3px" }}><b>Privacy Settings</b></p>
            {priv.map(([t, on], i) => <p key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "5px 0" }}><span>{t}</span><button type="button" className="ncp-toggle" role="switch" aria-checked={on} aria-label={t} onClick={() => setPriv((v) => v.map((r, j) => j === i ? [r[0], !r[1]] : r))} /></p>)}
            <p style={{ margin: "8px 0 3px" }}><b>Safety &amp; Limitations</b></p>
            {[["Fair Use Policy", "Prevent fraud and abuse"], ["Squad Limit", "Up to 10 friends per squad"], ["Activity Rules", "View complete terms"]].map(([t, d2]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}><span>{t}<br /><span className="ncp-dim">{d2}</span></span><span>›</span></p>)}
          </Ph></div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10, marginTop: 14 }}>
      <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: "0 0 6px" }}><b>SHARED REWARDS</b></p>
        <p style={{ display: "flex", gap: 4, alignItems: "center", margin: 0 }}>{[["1 Joined", "¥10", true], ["3 Joined", "¥20", true], ["5 Joined", "¥30", false], ["10 Joined", "¥80", false]].map(([t, v, done], i) => <span key={t as string} style={{ display: "flex", gap: 4, alignItems: "center", flex: i < 3 ? 1 : undefined }}><span style={{ textAlign: "center" }}><span style={{ display: "inline-flex", width: 18, height: 18, borderRadius: "50%", background: done ? ORANGE : "#232428", alignItems: "center", justifyContent: "center", fontSize: 9 }}>{done ? "✓" : i + 1}</span><br /><span style={{ fontSize: 8.5 }}>{t as string}<br /><b className="nc-acc">{v as string}</b></span></span>{i < 3 && <span style={{ flex: 1, height: 2, background: i < 1 ? ORANGE : "#2c2d30", marginBottom: 16 }} />}</span>)}</p></div>
      <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: "0 0 4px" }}><b>FAIR AND SAFE</b></p>{["No spam or harassment", "One account per person", "Rewards may be revoked for fraud"].map((t) => <p key={t} style={{ margin: "3px 0" }}><span className="nc-acc">✓</span> {t}</p>)}</div>
      <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: "0 0 4px" }}><b>PRIVACY FIRST</b></p>{[["Your info stays private", "We never share your personal data"], ["Control your visibility", "Choose what squad members see"], ["Secure by design", "Your data is encrypted and protected"]].map(([t, d2]) => <p key={t} style={{ margin: "3px 0" }}><b>{t}</b> <span className="ncp-dim">— {d2}</span></p>)}</div>
    </div>
  </NcShell>;
}

/* ================= 50 — Monthly Missions ================= */
const M50 = [
  { title: "Make the first eligible purchase", detail: "Make any eligible purchase of ¥10 or more to complete this mission.", prog: "1/1", pct: 100, reward: null as string | null, cta: "View eligible purchases", note: "Completed ✓" },
  { title: "Complete repayment setup", detail: "Set up auto-pay or make an on-time repayment to complete this mission.", prog: "1/1", pct: 100, reward: null, cta: null, note: "Completed ✓" },
  { title: "Use three everyday categories", detail: "Make at least one eligible purchase in each of three categories: transport, food & drink, shopping.", prog: "2/3", pct: 66, reward: "¥18 Account Credit", cta: null, note: "Transport ✓ · Food & Drink ✓ · Shopping ○" },
  { title: "Explore one local merchant", detail: "Visit a featured local merchant page or redeem a local perk to complete this mission.", prog: "0/1", pct: 0, reward: "¥12 Account Credit", cta: "Find local merchants", note: null },
  { title: "Complete a financial-learning module", detail: "Finish one module in the Learning Center to complete this mission.", prog: "0/1", pct: 0, reward: "¥10 Account Credit", cta: "Go to Learning Center", note: null },
];
export function NextCardMissionsShowcase() {
  const [sel, setSel] = useState(2);
  const detail = (m: typeof M50[number], big?: boolean) => <>
    <div style={{ height: big ? 62 : 44, borderRadius: 9, background: "linear-gradient(120deg,#2a1408,#17130f 60%)", marginBottom: 6, display: "flex", alignItems: "flex-end", padding: 7 }}><span style={{ fontSize: big ? 20 : 15 }}>▦</span></div>
    <p style={{ fontWeight: 800, fontSize: big ? 12.5 : 11.5, margin: "2px 0" }}>{m.title}</p>
    <p className="ncp-mut" style={{ margin: "2px 0 5px" }}>{m.detail}</p>
    <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 3px" }}><span>Progress</span><b>{m.prog}</b></p><Bar pct={m.pct} />
    {m.reward && <p style={{ margin: "6px 0 0" }}>Reward — <b className="nc-acc">{m.reward}</b></p>}
    <p style={{ margin: "6px 0 2px" }}><b>Rules</b></p>
    {["Mission period: August 1 – August 31, 2025", "Only eligible purchases count toward completion"].map((t) => <p key={t} className="ncp-mut" style={{ margin: "2px 0" }}>• {t}</p>)}
    {m.note && <p className="ncp-mut" style={{ margin: "4px 0 0" }}>{m.note}</p>}
    {m.cta && <span className="ncp-cta" style={{ marginTop: 7 }}>{m.cta}</span>}
  </>;
  return <NcShell n="50" title="Monthly Missions" label="Next Card monthly missions — phone showcase rebuild of Next_Card_Image_50">
    <div className="ncp-row">
      <Rail items={[["Small steps, real rewards.", "Complete simple missions each month and earn account credit or points."], ["Clear progress, no surprises.", "See exactly what to do, how far you've come, and what you'll earn."], ["Designed for good habits.", "Missions encourage responsible use — like on-time repayment and learning."]]}
        foot={<div className="ncp-card" style={{ marginTop: 12 }}><p style={{ margin: 0 }}><b>DESIGN PRINCIPLES</b></p>{["Clear and achievable goals", "Transparent rules and rewards", "Progress you can always see", "Encourages responsible habits"].map((t) => <p key={t} style={{ margin: "4px 0 0" }}><span className="nc-acc">✓</span> {t}</p>)}</div>} />
      <div className="ncp-row" style={{ flexWrap: "wrap", flex: 1, gap: 8 }}>
        <Ph w={150} sel={sel === -1} onClick={() => setSel(-1)} label="Missions list phone">
          <PhHead t="Missions" back={false} />
          <div className="ncp-card" style={{ background: "linear-gradient(135deg,#ff4b1f,#b32f0d)", borderColor: "#ff4b1f", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span><b style={{ fontSize: 12 }}>August Missions</b><br /><span style={{ opacity: .85 }}>Reset in 18 days</span></span>
            <span style={{ textAlign: "center" }}><span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", border: "3px solid rgba(255,255,255,.85)", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>60%</span><br /><span style={{ fontSize: 8.5 }}>3/5 completed</span></span>
          </div>
          {M50.map((m, i) => <button key={m.title} type="button" onClick={(e) => { e.stopPropagation(); setSel(i); }} aria-pressed={sel === i} style={{ display: "flex", justifyContent: "space-between", gap: 6, width: "100%", background: sel === i ? "#1d1e22" : "#101114", border: "1px solid #26272c", borderRadius: 10, color: "#fff", padding: "6px 7px", marginBottom: 5, cursor: "pointer", font: "inherit", textAlign: "left" }}>
            <span><b>{m.title}</b><br /><span className="ncp-dim">Progress {m.prog}</span></span><span>{m.pct === 100 ? <span className="nc-acc">✓</span> : <><Bar pct={m.pct} /><span className="ncp-dim">{m.pct}%</span></>}</span>
          </button>)}
          <div className="ncp-nav"><span>Home</span><span>Card</span><span><b>Missions</b></span><span>Learn</span><span>Me</span></div>
        </Ph>
        {M50.map((m, i) => <Ph key={m.title} w={105} sel={sel === i} onClick={() => setSel(i)} label={`Mission detail: ${m.title}`}>
          <PhHead t="Mission Detail" />
          {detail(m)}
        </Ph>)}
      </div>
    </div>
    <div className="ncp-card" style={{ marginTop: 14, marginBottom: 0 }}>
      <p style={{ margin: "0 0 4px" }}><b>ABOUT MONTHLY MISSIONS</b></p>
      <p style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px 14px", margin: 0 }}>
        <span><b>Who can join</b> — All Next Card holders with an active account.</span>
        <span><b>How it works</b> — Complete missions during the month to earn rewards.</span>
        <span><b>Rewards</b> — Account credit or points, as shown on each mission.</span>
        <span><b>When rewards arrive</b> — Within 3 business days after completion.</span>
        <span><b>Need help?</b> — Visit Help Center or contact support in the app.</span>
      </p>
    </div>
    <p style={{ margin: "10px 0 0", display: "flex", gap: 14, flexWrap: "wrap" }}><span><b>ACCESSIBILITY</b></span>{["Screen reader friendly", "High contrast", "Scalable text up to 200%", "Clear focus indicators", "Color not the only way", "Simple language"].map((t) => <span key={t} className="ncp-mut"><span className="nc-acc">✓</span> {t}</span>)}</p>
    <p className="ncp-dim" style={{ margin: "6px 0 0" }}>Tip: Missions are designed to encourage responsible habits. Never spend just to complete a mission.</p>
  </NcShell>;
}

/* ================= 51 — Responsive & State Matrix ================= */
const ROWS51 = [
  ["Loading", "Shimmer skeletons indicate loading progress. Non-blocking and perceived as fast.", "Larger shimmer blocks for tablet layout.", "Full-width skeleton sections for desktop."],
  ["Empty", "No transactions yet — Start using your card to see activity here. [Explore rewards]", "Illustration centered with more breathing room.", "Empty state panel centered in content area."],
  ["Error", "Something went wrong — Please try again. [Retry]", "Error message with retry action centered.", "Inline error banner with retry action."],
  ["Pending approval", "Application under review — We're reviewing your application. You'll be notified once it's complete. [View status]", "Status card centered with progress indicator.", "Status panel with timeline in main content."],
  ["Reward unavailable", "This reward is not available — The reward you're looking for is currently unavailable. [Browse other rewards]", "Message centered with alternative suggestions.", "Panel with suggested alternatives."],
  ["Offline or slow network", "You're offline — Check your connection and try again. [Retry]", "Offline banner with retry.", "Top banner with retry action."],
];
const MINI51: ReactNode[] = [
  <><span className="ncp-skel" style={{ display: "block", width: "80%", marginBottom: 5 }} /><span className="ncp-skel" style={{ display: "block", width: "95%", marginBottom: 5 }} /><span className="ncp-skel" style={{ display: "block", width: "60%" }} /></>,
  <><p style={{ fontSize: 15, margin: "2px 0" }}>▤</p><p style={{ margin: "1px 0" }}>No transactions yet</p><span className="ncp-cta" style={{ padding: "3px 6px", fontSize: 8.5 }}>Explore rewards</span></>,
  <><p style={{ fontSize: 15, margin: "2px 0", color: ORANGE }}>⚠</p><p style={{ margin: "1px 0" }}>Something went wrong</p><span className="ncp-cta" style={{ padding: "3px 6px", fontSize: 8.5 }}>Retry</span></>,
  <><p style={{ fontSize: 15, margin: "2px 0", color: ORANGE }}>◷</p><p style={{ margin: "1px 0" }}>Application under review</p><span className="ncp-cta ghost" style={{ padding: "3px 6px", fontSize: 8.5 }}>View status</span></>,
  <><p style={{ fontSize: 15, margin: "2px 0" }}>🎁</p><p style={{ margin: "1px 0" }}>Reward unavailable</p><span className="ncp-cta ghost" style={{ padding: "3px 6px", fontSize: 8.5 }}>Browse others</span></>,
  <><p style={{ fontSize: 15, margin: "2px 0" }}>📶✕</p><p style={{ margin: "1px 0" }}>You&apos;re offline</p><span className="ncp-cta" style={{ padding: "3px 6px", fontSize: 8.5 }}>Retry</span></>,
];
export function NextCardStateMatrixShowcase() {
  const [row, setRow] = useState(2);
  const [col, setCol] = useState(0);
  return <NcShell n="51" title="Responsive and State Matrix" label="Next Card responsive and state matrix — rebuild of Next_Card_Image_51">
    <div className="ncp-row">
      <Rail items={[["BREAKPOINTS", "Mobile 390×844 · Tablet 820×1180 · Desktop 1440×1024"], ["STATE CATEGORIES", "Loading · Empty · Error · Pending approval · Reward unavailable · Offline or slow network"], ["GLOBAL BEHAVIORS", "Consistent across all breakpoints and states."]]}
        foot={<>{["Clear and human language", "Always provide a next step", "Never show technical errors", "Preserve user input"].map((t) => <p key={t} className="ncp-mut" style={{ margin: "4px 0 0" }}><span className="nc-acc">✓</span> {t}</p>)}<p className="ncp-mut" style={{ marginTop: 8 }}>Accessibility-focused — Every state respects focus order, contrast, and reduced motion.</p></>} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "104px 1fr 1fr 1.25fr", gap: 6, alignItems: "start" }}>
          <span /><span className="ncp-dim" style={{ textAlign: "center" }}>Mobile 390×844</span><span className="ncp-dim" style={{ textAlign: "center" }}>Tablet 820×1180</span><span className="ncp-dim" style={{ textAlign: "center" }}>Desktop 1440×1024</span>
          {ROWS51.map(([name], ri) => [
            <button key={`h${ri}`} type="button" onClick={() => setRow(ri)} aria-pressed={row === ri} style={{ background: row === ri ? "#1d1e22" : "transparent", border: `1px solid ${row === ri ? ORANGE : "#2c2d30"}`, borderRadius: 8, color: "#fff", padding: "6px 7px", cursor: "pointer", font: "inherit", fontSize: 11.5, textAlign: "left" }}>{name}</button>,
            ...[0, 1, 2].map((ci) => <button key={`${ri}-${ci}`} type="button" onClick={() => { setRow(ri); setCol(ci); }} aria-pressed={row === ri && col === ci} aria-label={`${name} — ${["Mobile", "Tablet", "Desktop"][ci]}`} style={{ background: "#101114", border: `1px solid ${row === ri && col === ci ? ORANGE : "#26272c"}`, borderRadius: 10, color: "#c9c9ce", padding: "7px 8px", cursor: "pointer", font: "inherit", fontSize: 9.5, textAlign: "center", ...(ci === 1 ? { maxWidth: 130, justifySelf: "center", width: "100%" } : {}), ...(ci === 2 ? { textAlign: "left" as const } : {}) }}>
              {MINI51[ri]}
              <span style={{ display: "block", marginTop: 5, textAlign: ci === 2 ? "left" : "center" }} className="ncp-dim">{ROWS51[ri][ci + 1]}</span>
            </button>),
          ])}
        </div>
        <div className="ncp-card" style={{ marginTop: 10, marginBottom: 0 }}>
          <p style={{ margin: "0 0 5px" }}><b>ACCESSIBILITY-FOCUSED VIEWS</b></p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8 }}>
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Focus Indicators</b></p><p className="ncp-mut" style={{ margin: "3px 0" }}>Visible focus on all interactive elements <span style={{ outline: `2px solid ${ORANGE}`, padding: "0 4px", borderRadius: 3 }}>Retry</span></p></div>
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Large Text Example</b></p><p style={{ margin: "3px 0", fontSize: 14 }}>Next Card<br />Balance ¥8,888.00<br /><span className="ncp-dim" style={{ fontSize: 10 }}>Available credit ¥21,112.00</span></p></div>
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Reduced Motion</b></p><p className="ncp-mut" style={{ margin: "3px 0" }}>Respects system settings; animations are minimized when enabled.</p></div>
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Contrast Check</b> <span style={{ background: ORANGE, borderRadius: 4, padding: "1px 5px", fontWeight: 800, fontSize: 9 }}>AA</span></p><p style={{ margin: "3px 0", fontSize: 14 }}>¥8,888.00</p></div>
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Retry &amp; Recovery Actions</b></p><p className="ncp-mut" style={{ margin: "3px 0" }}>Clear actions to recover from errors.</p><span className="ncp-cta" style={{ padding: "4px 8px", fontSize: 9.5 }}>Retry</span></div>
          </div>
        </div>
        <p className="ncp-dim" style={{ margin: "8px 0 0" }}>NOTES — States are consistent in tone and action across breakpoints. Layout adapts, content and behavior stay the same.</p>
      </div>
    </div>
  </NcShell>;
}

/* ================= 40 — Component System & Page States ================= */
export function NextCardComponentSystemShowcase() {
  const [state, setState] = useState(0); // 0 loading 1 error 2 empty
  const [confirm, setConfirm] = useState(false);
  const [pay, setPay] = useState(false);
  const sideBtn = { display: "block", width: "100%", background: "none", border: "none", color: "#f5f5f5", textAlign: "left" as const, padding: "3px 4px", cursor: "pointer", font: "inherit", fontSize: 10 };
  return <NcShell n="40" title="Component System" label="Next Card component system — rebuild of Next_Card_Image_40">
    <p className="ncp-mut" style={{ marginTop: 0 }}>A scalable design language for consistent, accessible, and efficient product development.</p>
    <div className="ncp-row">
      <div style={{ width: 236, flex: "none" }}>
        <p style={{ margin: "0 0 4px" }}><b>Buttons</b></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4, marginBottom: 8 }}>
          {["Primary", "Secondary", "Tertiary", "Text"].map((t) => <span key={t}><span className="ncp-dim" style={{ fontSize: 8 }}>{t}</span><br /><span style={{ display: "inline-block", background: t === "Primary" ? ORANGE : t === "Secondary" ? "#2c2d30" : "transparent", border: t === "Tertiary" ? "1px solid #3a3b40" : "none", borderRadius: 6, padding: "3px 6px", marginTop: 2, color: t === "Text" ? ORANGE : "#fff", fontSize: 9.5 }}>Button</span></span>)}
          <span className="ncp-dim" style={{ fontSize: 8 }}>Default<br />Hover<br />Pressed<br />Disabled</span>
        </div>
        <p style={{ margin: "0 0 3px" }}><b>Inputs</b></p>
        {["Text input", "Select ∨", "○ Radio ◉ ● Checkbox ☑ Toggle"].map((t) => <div key={t} className="ncp-card" style={{ padding: "5px 8px", marginBottom: 4 }}>{t}</div>)}
        <div className="ncp-card" style={{ padding: "5px 8px", marginBottom: 8 }}><p style={{ margin: "0 0 3px" }}>Steps ●—●—○—○</p><Bar pct={65} /><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Linear progress 65%</p></div>
        <p style={{ margin: "0 0 3px" }}><b>Tags / Badges</b></p>
        <p style={{ margin: "0 0 8px", display: "flex", gap: 4, flexWrap: "wrap" }}><span className="nc-tab" style={{ borderColor: ORANGE }}>New</span><span className="nc-tab">Limited</span><span style={{ background: ORANGE, borderRadius: 999, padding: "2px 8px", fontWeight: 700 }}>5</span></p>
        <p style={{ margin: "0 0 3px" }}><b>Navigation</b></p>
        <div className="ncp-nav" style={{ marginTop: 0, marginBottom: 8 }}><span><b>Home</b></span><span>Card</span><span>Benefits</span><span>Profile</span></div>
        <p style={{ margin: "0 0 3px" }}><b>Design Tokens</b></p>
        <div style={{ display: "flex", gap: 4, marginBottom: 5 }}>{[["#FF4B1F", "#ff4b1f"], ["#111113", "#111113"], ["#F5F5F5", "#f5f5f5"], ["#C7C9CC", "#c7c9cc"], ["#2FBF71", "#2fbf71"], ["#FFB020", "#ffb020"], ["#FF4D4F", "#ff4d4f"]].map(([hex, c]) => <span key={hex} style={{ textAlign: "center", width: 29, flex: "none" }}><span style={{ display: "block", width: 22, height: 22, borderRadius: 5, background: c, border: "1px solid #34353b", margin: "0 auto" }} /><span style={{ fontSize: 6.5, display: "block" }} className="ncp-dim">{hex}</span></span>)}</div>
        {[["Radius", "S 8 · M 12 · L 16 · XL 24"], ["Spacing (8pt)", "4 · 8 · 12 · 16 · 24 · 32"], ["Elevation", "Level 1 · Level 2 · Level 3"], ["Color", "Background · Surface · Text Primary · Text Secondary · Border"], ["Typography", "Display 32/40 · H1 24/32 · H2 20/28 · Body 1 16/24 · Body 2 14/20 · Caption 12/16"]].map(([t, d2]) => <p key={t} style={{ margin: "3px 0" }}><b>{t}</b> <span className="ncp-dim">— {d2}</span></p>)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="ncp-row">
          <div className="ncp-browser" style={{ width: 330, fontSize: 10.5, lineHeight: 1.45 }}>
            <div className="ncp-browserbar"><i /><i /><i /><span className="ncp-dim" style={{ marginLeft: 6 }}>nextcard.cn/dashboard</span></div>
            <div style={{ display: "flex" }}>
              <div style={{ width: 76, flex: "none", borderRight: "1px solid #26272c", padding: 8 }}>
                <p style={{ fontWeight: 800, fontSize: 10.5, margin: "0 0 7px" }}>NEXT CARD</p>
                {[["Home", true], ["Benefits", false], ["Pay", false], ["Mission", false], ["Profile", false]].map(([t, on]) => <p key={t as string} style={{ margin: "5px 0", color: on ? ORANGE : "#9a9aa0", fontWeight: on ? 700 : 400 }}>{t as string}</p>)}
              </div>
              <div style={{ flex: 1, padding: 9 }}>
                <p style={{ fontWeight: 800, fontSize: 12, margin: "0 0 6px" }}>Welcome back, Alex</p>
                <div style={{ display: "flex", gap: 6 }}>
                  <div className="ncp-card" style={{ flex: 1, marginBottom: 0, minWidth: 0 }}><p className="ncp-dim" style={{ margin: 0 }}>Total Rewards</p><p style={{ fontSize: 14, fontWeight: 800, margin: "1px 0" }}>2,860 pts</p><p className="ncp-dim" style={{ margin: 0 }}>≈ ¥28.60</p></div>
                  <div className="ncp-card" style={{ flex: 1, marginBottom: 0, minWidth: 0 }}><p style={{ margin: 0 }}>Credit Progress <b style={{ float: "right" }}>65%</b></p><Bar pct={65} /><p className="ncp-dim" style={{ margin: "3px 0 0", fontSize: 9 }}>¥13,000 / ¥20,000</p></div>
                  <div className="ncp-card" style={{ flex: 1, marginBottom: 0, minWidth: 0 }}><p style={{ margin: 0 }}>Missions</p><p style={{ fontSize: 14, fontWeight: 800, margin: "1px 0" }}>2 / 5</p><p className="ncp-dim" style={{ margin: 0 }}>Completed</p></div>
                </div>
                <p style={{ fontWeight: 700, margin: "8px 0 4px" }}>Exclusive Offers</p>
                <div style={{ display: "flex", gap: 6 }}>{[["Coffee", "20% Off"], ["Cinema", "Buy 1 Get 1"], ["Transit", "10% Off"]].map(([t, d2]) => <div key={t} className="ncp-card" style={{ flex: 1, marginBottom: 0, textAlign: "center", minWidth: 0, fontSize: 9.5 }}><div style={{ height: 26, borderRadius: 6, background: "linear-gradient(135deg,#2a1408,#17130f)", marginBottom: 4 }} /><b>{t}</b><br /><span className="nc-acc">{d2}</span></div>)}</div>
                <p style={{ fontWeight: 700, margin: "8px 0 4px" }}>Nearby Merchants</p>
                <div style={{ display: "flex", gap: 6 }}>{[["Coffee Shop", "0.5 km"], ["Bakery", "0.8 km"], ["Bookstore", "1.2 km"]].map(([t, d2]) => <div key={t} className="ncp-card" style={{ flex: 1, marginBottom: 0, textAlign: "center", minWidth: 0, fontSize: 9.5 }}><div style={{ height: 26, borderRadius: 6, background: "linear-gradient(135deg,#1d1e22,#101114)", marginBottom: 4 }} /><b>{t}</b><br /><span className="ncp-dim">{d2}</span></div>)}</div>
              </div>
            </div>
          </div>
          <Ph w={168} label="Component system mobile frame">
            <p style={{ fontWeight: 800, fontSize: 11.5, margin: "2px 0 5px" }}>Welcome back, Alex</p>
            <div className="ncp-card"><p className="ncp-dim" style={{ margin: 0 }}>Total Rewards</p><p style={{ fontSize: 13.5, fontWeight: 800, margin: "1px 0" }}>2,860 pts</p><p className="ncp-dim" style={{ margin: 0 }}>≈ ¥28.60</p></div>
            <div className="ncp-card"><p style={{ margin: 0 }}>Credit Progress <b style={{ float: "right" }}>65%</b></p><Bar pct={65} /><p className="ncp-dim" style={{ margin: "3px 0 0" }}>¥13,000 / ¥20,000</p></div>
            <div className="ncp-card"><p style={{ margin: 0 }}>Missions <b style={{ float: "right" }}>2 / 5</b></p></div>
            <p style={{ fontWeight: 700, margin: "0 0 4px" }}>Exclusive Offers</p>
            <div style={{ display: "flex", gap: 5 }}>{[["Coffee", "20% Off"], ["Cinema", "B1G1"]].map(([t, d2]) => <div key={t} className="ncp-card" style={{ flex: 1, marginBottom: 0, textAlign: "center", minWidth: 0, fontSize: 9.5 }}><div style={{ height: 22, borderRadius: 6, background: "linear-gradient(135deg,#2a1408,#17130f)", marginBottom: 3 }} /><b>{t}</b><br /><span className="nc-acc">{d2}</span></div>)}</div>
            <div className="ncp-nav"><span><b>Home</b></span><span>Card</span><span>Benefits</span><span>Profile</span></div>
          </Ph>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 8, marginTop: 10 }}>
          <div className="ncp-card" style={{ marginBottom: 0 }}>
            <p style={{ margin: "0 0 5px" }}><b>PAGE STATES</b></p>
            <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>{["Loading", "Error", "Empty State"].map((t, i) => <button key={t} type="button" onClick={() => setState(i)} aria-pressed={state === i} style={{ background: state === i ? "#232428" : "transparent", border: `1px solid ${state === i ? ORANGE : "#3a3b40"}`, color: "#fff", borderRadius: 999, padding: "3px 8px", cursor: "pointer", font: "inherit", fontSize: 9.5 }}>{t}</button>)}</div>
            {state === 0 && <div aria-live="polite"><span className="ncp-skel" style={{ display: "block", width: "70%", marginBottom: 5 }} /><span className="ncp-skel" style={{ display: "block", width: "95%", marginBottom: 5 }} /><span className="ncp-skel" style={{ display: "block", width: "50%" }} /><p className="ncp-dim" style={{ margin: "5px 0 0" }}>Skeleton indicates loading</p></div>}
            {state === 1 && <div aria-live="polite"><p style={{ margin: "2px 0" }}><span style={{ color: ORANGE }}>⚠</span> Something went wrong</p><p className="ncp-dim" style={{ margin: "2px 0 5px" }}>Please check your connection and try again.</p><button type="button" className="ncp-cta" style={{ width: "auto", padding: "4px 12px" }} onClick={() => setState(0)}>Retry</button></div>}
            {state === 2 && <div aria-live="polite"><p style={{ fontSize: 16, margin: "2px 0" }}>▤</p><p style={{ margin: "1px 0" }}>No results found</p><p className="ncp-dim" style={{ margin: "2px 0 0" }}>Try adjusting your filters or search.</p></div>}
          </div>
          <div className="ncp-card" style={{ marginBottom: 0 }}>
            <p style={{ margin: "0 0 5px" }}><b>DIALOGS</b></p>
            <div className="ncp-card"><p style={{ margin: 0 }}><b>Confirmation</b></p><p className="ncp-mut" style={{ margin: "2px 0 6px" }}>Confirm Payment ¥128.00</p><p style={{ display: "flex", gap: 5, margin: 0 }}><button type="button" className="ncp-cta ghost" onClick={() => setConfirm(false)}>Cancel</button><button type="button" className="ncp-cta" aria-pressed={confirm} onClick={() => { setConfirm(true); setPay(true); }}>{pay ? "✓ Paid" : "Confirm"}</button></p></div>
            <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Info</b></p><p className="ncp-mut" style={{ margin: "2px 0 0" }}>Mission Completed! +200 Points</p></div>
          </div>
          <div className="ncp-card" style={{ marginBottom: 0 }}>
            <p style={{ margin: "0 0 5px" }}><b>COMPONENT SHOWCASE</b></p>
            <p style={{ margin: "0 0 4px" }}><span className="ncp-cta" style={{ display: "inline-block", width: "auto", padding: "4px 12px" }}>Primary</span> <span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "4px 12px" }}>Secondary</span></p>
            <div className="ncp-field" style={{ background: "#101114", borderColor: "#2c2d30", color: "#9a9aa0" }}>Text input</div>
            <Bar pct={65} /><p style={{ margin: "4px 0 0" }}><span className="nc-tab" style={{ borderColor: ORANGE }}>New</span> <span className="nc-tab">Limited</span></p>
            <div className="ncp-nav" style={{ marginBottom: 0 }}><span><b>Home</b></span><span>Card</span><span>Benefits</span><span>Profile</span></div>
          </div>
        </div>
      </div>
    </div>
  </NcShell>;
}

/* ================= 41 — Campaign Landing Page ================= */
const EX41: Array<[string, string, string, string, string]> = [
  ["Tian, 23", "Designer · Shanghai", "¥3,200", "~480 pts", "~¥48"],
  ["Ming, 27", "Product Manager · Shenzhen", "¥8,500", "~1,360 pts", "~¥136"],
  ["Jia, 25", "Marketing · Chengdu", "¥5,000", "~800 pts", "~¥80"],
];
export function NextCardCampaignShowcase() {
  const [city, setCity] = useState("Shanghai");
  return <NcShell n="41" title="Campaign Landing Page" label="Next Card campaign landing — rebuild of Next_Card_Image_41">
    <div className="ncp-row">
      <div className="ncp-browser" style={{ flex: 1, minWidth: 0, fontSize: 12.5, lineHeight: 1.5 }}>
        <div className="ncp-browserbar"><i /><i /><i /><span className="ncp-dim" style={{ marginLeft: 6 }}>nextcard.cn</span></div>
        <div style={{ padding: "10px 12px" }}>
          <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 0 10px" }}><b>NEXT CARD</b><span className="ncp-dim">Benefits · City Offers · Eligibility · Examples · FAQ</span><span><span style={{ marginRight: 8 }}>Sign in</span><span style={{ background: ORANGE, borderRadius: 999, padding: "4px 10px", fontWeight: 700, color: "#fff" }}>Apply Now</span></span></p>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.15, margin: "4px 0" }}>Next Card.<br />Your life. Your way.</p>
              <p className="ncp-mut" style={{ margin: "0 0 8px" }}>A credit card designed for your generation. Simple, rewarding, and built around your city life.</p>
              <p style={{ margin: 0, display: "flex", gap: 6 }}><span style={{ background: ORANGE, borderRadius: 999, padding: "5px 12px", fontWeight: 700, color: "#fff" }}>Check eligibility</span><span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "5px 12px" }}>Explore benefits</span></p>
              <p className="ncp-dim" style={{ margin: "8px 0 0" }}>No impact on your credit score to check.</p>
            </div>
            <div style={{ width: 150, flex: "none", height: 96, borderRadius: 12, background: "linear-gradient(120deg,#0c1226 30%,#3a2415 70%,#7a3a12)", position: "relative" }}>
              <div style={{ position: "absolute", left: 12, top: 22, width: 104, height: 62, borderRadius: 8, background: "linear-gradient(135deg,#17181a,#26221e)", transform: "rotate(-6deg)", padding: 7 }}><span style={{ fontSize: 8.5, letterSpacing: ".08em" }}>NEXT CARD</span><span className="nc-acc" style={{ position: "absolute", right: 8, bottom: 6, fontWeight: 800, fontSize: 13 }}>▦</span></div>
            </div>
          </div>
          <p style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "10px 0 0" }} className="ncp-mut">{["No annual fee first year", "Instant virtual card", "Real-time notifications", "Fraud protection", "24/7 in-app support", "Flexible repayment"].map((t) => <span key={t}>✓ {t}</span>)}</p>
          <p style={{ fontWeight: 800, fontSize: 13.5, margin: "12px 0 5px" }}>6 ways Next Card fits your life</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 5 }}>
            {[["Daily Rewards", "Earn on every spend"], ["Digital Life", "Streaming, gaming & more"], ["City Perks", "Local offers near you"], ["Refer & Earn", "Rewards with friends"], ["Credit Builder", "Build your future"], ["Missions", "Fun challenges, real rewards"]].map(([t, d2]) => <div key={t} className="ncp-card" style={{ marginBottom: 0, textAlign: "center" }}><b style={{ fontSize: 9.5 }}>{t}</b><br /><span className="ncp-dim" style={{ fontSize: 8.5 }}>{d2}</span></div>)}
          </div>
        </div>
        <div style={{ background: "#f4f0e7", color: "#17181a", padding: "10px 12px" }}>
          <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 6px" }}><b style={{ fontSize: 13.5 }}>Offers in your city</b><span>Change city: <b>{city}</b> — {["Shanghai", "Shenzhen", "Chengdu", "Beijing", "Guangzhou"].filter((c) => c !== city).map((c) => <button key={c} type="button" onClick={() => setCity(c)} style={{ background: "none", border: "none", color: "#b3540f", cursor: "pointer", font: "inherit", padding: "0 2px" }}>{c}</button>)}</span></p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 5 }}>
            {[["Coffee", "20% Off", "Selected cafés"], ["Cinema", "Buy 1 Get 1", "Weekends"], ["Transit", "10% Off", "Metro & bus"], ["Dining", "15% Off", "Partner restaurants"], ["Fitness", "Free Trial", "7 days"]].map(([t, o, d2]) => <div key={t} style={{ background: "#fff", border: "1px solid #e3ded2", borderRadius: 9, padding: 7, textAlign: "center" }}><div style={{ height: 24, borderRadius: 6, background: "linear-gradient(135deg,#e8d9c0,#8a5a34)", marginBottom: 4 }} /><b style={{ fontSize: 9.5 }}>{t}</b><br /><span style={{ color: "#b3540f", fontWeight: 700, fontSize: 9.5 }}>{o}</span><br /><span style={{ color: "#6f6a5e", fontSize: 8.5 }}>{d2}</span></div>)}
          </div>
          <p style={{ display: "flex", justifyContent: "space-between", gap: 12, margin: "10px 0 0", flexWrap: "wrap" }}>
            <span style={{ flex: 1, minWidth: 200 }}>Who can apply? ✓ Aged 18–35 · ✓ Mainland China resident with valid ID · ✓ Stable income or student status · Quick eligibility check — no impact on your credit score.</span>
            <span style={{ flex: 1.4, minWidth: 260 }}>Real examples (modeled) — {EX41.map(([n2, meta, spend, pts, back]) => <span key={n2} style={{ display: "inline-block", background: "#fff", border: "1px solid #e3ded2", borderRadius: 8, padding: "4px 7px", marginRight: 5 }}><b>{n2}</b> {meta}<br />Monthly spend {spend} · ~{pts} · ~{back} back</span>)}</span>
          </p>
        </div>
      </div>
      <Ph w={168} label="Campaign landing mobile frame">
        <p style={{ display: "flex", justifyContent: "space-between", margin: "0 0 6px" }}><b>NEXT CARD</b><span className="ncp-dim">☰</span></p>
        <p style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.2, margin: "2px 0" }}>Next Card.<br />Your life. Your way.</p>
        <p className="ncp-mut" style={{ margin: "0 0 7px" }}>A credit card designed for your generation.</p>
        <div style={{ height: 74, borderRadius: 10, background: "linear-gradient(120deg,#0c1226 30%,#3a2415 70%,#7a3a12)", position: "relative", marginBottom: 7 }}>
          <div style={{ position: "absolute", left: 10, top: 14, width: 88, height: 52, borderRadius: 7, background: "linear-gradient(135deg,#17181a,#26221e)", transform: "rotate(-6deg)", padding: 6 }}><span style={{ fontSize: 8 }}>NEXT CARD</span></div>
        </div>
        <span className="ncp-cta">Check eligibility</span>
        <span className="ncp-cta ghost" style={{ marginTop: 5 }}>Explore benefits</span>
        <p className="ncp-dim" style={{ margin: "6px 0" }}>No impact on your credit score to check.</p>
        {[["No annual fee first year", ""], ["Instant virtual card", ""], ["Real-time notifications", ""]].map(([t]) => <p key={t} style={{ margin: "3px 0" }}>✓ {t}</p>)}
        <p style={{ fontWeight: 700, margin: "7px 0 4px" }}>6 ways Next Card fits your life</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>{["Daily Rewards", "Digital Life", "City Perks", "Refer & Earn", "Credit Builder", "Missions"].map((t) => <div key={t} className="ncp-card" style={{ marginBottom: 0, textAlign: "center", fontSize: 9.5 }}>{t}</div>)}</div>
        <p style={{ fontWeight: 700, margin: "7px 0 4px" }}>Offers in your city — {city}</p>
        {[["Coffee", "20% Off"], ["Cinema", "Buy 1 Get 1"], ["Transit", "10% Off"]].map(([t, o]) => <div key={t} className="ncp-card" style={{ display: "flex", justifyContent: "space-between" }}><span>{t}</span><b className="nc-acc">{o}</b></div>)}
      </Ph>
    </div>
  </NcShell>;
}

/* ================= 34 — Wireframe Wall: all 9 wireframe phones ================= */
const WALL34: Array<{ cap: string; sub: string; body: ReactNode }> = [
  { cap: "Landing Page", sub: "Hero value prop + primary CTA", body: <><p style={{ fontWeight: 800, fontSize: 11, margin: "2px 0" }}>Next Card.<br />Your life. Your way.</p><p className="ncp-dim" style={{ margin: "0 0 5px" }}>A credit card for Gen Z</p><div style={{ height: 34, background: "linear-gradient(135deg,#d8d4cc,#b9b3a6)", borderRadius: 7, marginBottom: 5 }} /><span className="ncp-cta" style={{ padding: "4px 0", fontSize: 9.5 }}>Check Eligibility</span><span className="ncp-cta ghost" style={{ padding: "4px 0", fontSize: 9.5, marginTop: 4, color: "#17181a", borderColor: "#c9c2b2" }}>Explore Benefits</span></> },
  { cap: "Benefit Detail", sub: "Key benefits + eligibility note", body: <><p style={{ fontWeight: 700, margin: "2px 0 4px" }}>Benefits</p>{["Daily Rewards", "Digital Life", "City Perks"].map((t) => <div key={t} className="ncp-card flat" style={{ padding: "4px 7px", marginBottom: 4 }}><b>{t}</b><br /><span className="ncp-dim">Earn more every day</span></div>)}<p className="ncp-dim">Eligibility: 18+ · Terms apply</p></> },
  { cap: "Application", sub: "Step-by-step form + progress", body: <><p style={{ fontWeight: 700, margin: "2px 0 3px" }}>Application</p><Bar pct={40} /><p className="ncp-dim" style={{ margin: "3px 0" }}>Step 2 of 5</p>{["Full name", "ID number", "Mobile"].map((t) => <div key={t} className="ncp-field">{t}</div>)}<span className="ncp-cta" style={{ padding: "4px 0", fontSize: 9.5 }}>Continue</span></> },
  { cap: "Approval", sub: "Decision result + next steps", body: <><p style={{ textAlign: "center", fontSize: 18, margin: "4px 0 0", color: ORANGE }}>✓</p><p style={{ textAlign: "center", fontWeight: 800, margin: "1px 0" }}>Approved</p><p className="ncp-dim" style={{ textAlign: "center", margin: "0 0 5px" }}>Your virtual card is ready</p><div className="ncp-card flat" style={{ textAlign: "center" }}>Credit Limit<br /><b style={{ fontSize: 12.5 }}>¥8,000</b></div><span className="ncp-cta" style={{ padding: "4px 0", fontSize: 9.5 }}>View Card</span></> },
  { cap: "Dashboard", sub: "Credit overview + quick actions", body: <><p style={{ fontWeight: 700, margin: "2px 0 4px" }}>Hi, Alex</p><div className="ncp-card flat"><p className="ncp-dim" style={{ margin: 0 }}>Available Credit</p><p style={{ fontWeight: 800, fontSize: 12.5, margin: "1px 0" }}>¥12,000.00</p><p className="ncp-dim" style={{ margin: 0 }}>Total Credit ¥15,000 · Spent ¥1,230.00</p></div><p style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span>Due Amount</span><b>¥860.00</b></p><p className="ncp-dim" style={{ margin: 0 }}>Due Date May 20</p></> },
  { cap: "Rewards", sub: "Points balance + redeem options", body: <><p style={{ fontWeight: 700, margin: "2px 0 4px" }}>Rewards</p><div className="ncp-card flat"><p className="ncp-dim" style={{ margin: 0 }}>Points Balance</p><p style={{ fontWeight: 800, fontSize: 12.5, margin: "1px 0" }}>2,560</p></div>{[["¥20 Coffee Voucher", "2,000 pts"], ["¥50 Movie Voucher", "4,000 pts"], ["¥30 Ride Voucher", "2,500 pts"]].map(([t, v]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "4px 0" }}><span>{t}</span><b>{v}</b></p>)}<span className="ncp-cta" style={{ padding: "4px 0", fontSize: 9.5 }}>Redeem</span></> },
  { cap: "Local Perks", sub: "Nearby offers + map entry", body: <><p style={{ fontWeight: 700, margin: "2px 0 4px" }}>Local Perks</p><div style={{ height: 40, borderRadius: 7, background: "linear-gradient(115deg, transparent 49.6%, #c9c2b2 49.6%, #c9c2b2 50.4%, transparent 50.4%), #e9e5da", position: "relative", marginBottom: 5 }}><span style={{ position: "absolute", left: "40%", top: "35%", color: ORANGE, fontSize: 12 }}>📍</span></div>{[["Coffee Shop", "20% Off"], ["Cinema", "Buy 1 Get 1"]].map(([t, v]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "4px 0" }}><span>{t}</span><b className="nc-acc">{v}</b></p>)}</> },
  { cap: "Referral", sub: "Invite code + share actions", body: <><p style={{ fontWeight: 700, margin: "2px 0 4px" }}>Refer &amp; Earn</p><div className="ncp-card flat" style={{ textAlign: "center" }}><b>You get ¥30</b><br /><b>They get ¥30</b></div><p className="ncp-dim" style={{ margin: "0 0 2px" }}>Your Code</p><div className="ncp-field" style={{ textAlign: "center", letterSpacing: ".1em", fontWeight: 700, color: "#17181a" }}>NEXTPALS</div><span className="ncp-cta" style={{ padding: "4px 0", fontSize: 9.5 }}>Invite Now</span></> },
  { cap: "Credit Builder", sub: "Score progress + tips", body: <><p style={{ fontWeight: 700, margin: "2px 0 4px" }}>Credit Builder</p><div style={{ textAlign: "center", marginBottom: 4 }}><div style={{ width: 56, height: 56, margin: "0 auto", borderRadius: "50%", background: `conic-gradient(${ORANGE} 0 72%, #e2ddd2 72% 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f4f4f2", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}><b>720</b><span className="ncp-dim" style={{ fontSize: 7.5 }}>Good</span></div></div></div><p className="ncp-dim" style={{ textAlign: "center", margin: "0 0 4px" }}>Next Goal 750</p>{[["Pay on time", "100%"], ["Keep low usage", "30%"], ["Use longer", "6 months"]].map(([t, v]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", margin: "3px 0" }}><span>{t}</span><b>{v}</b></p>)}</> },
];
export function NextCardWireframeWallShowcase() {
  const [stage, setStage] = useState(4);
  return <NcShell n="34" title="Wireframe Wall" label="Next Card wireframe wall — all nine wireframe phones, rebuild of Next_Card_Image_34">
    <div className="ncp-row">
      <Rail items={[["Journey Legend", "START → Landing → Benefits → Application → Approval → Dashboard → Rewards → Perks → Referral → Builder. ◆ = decision point. Tap a phone to select its stage."], ["Design Principles", "Clarity first · Mobile-first layout · One primary action per screen · Consistent components · Accessible by default."], ["KPIs (Modeled)", "Activation Rate 28.4% · Application Completion 61.2% · Approval Rate 72.0% · 90-Day Retention 46.8% · Monthly Active Rate 38.7%."]]} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ display: "flex", gap: 5, alignItems: "center", flexWrap: "wrap", margin: "0 0 10px" }} className="ncp-dim">
          {WALL34.map((s, i) => <span key={s.cap} style={{ display: "inline-flex", gap: 5, alignItems: "center" }}><span style={{ color: stage === i ? ORANGE : "#c9c9ce", fontWeight: stage === i ? 800 : 400 }}>{i + 1} {s.cap}</span>{i < 8 && <span>→</span>}</span>)}
        </p>
        <div className="ncp-row" style={{ flexWrap: "wrap" }}>
          {WALL34.map((s, i) => <div key={s.cap}>
            <Ph w={118} wire sel={stage === i} onClick={() => setStage(i)} label={`Wireframe ${i + 1}: ${s.cap}`}>{s.body}</Ph>
            <p className="ncp-cap" style={{ marginTop: 5, maxWidth: 118 }}><b>{String(i + 1).padStart(2, "0")}</b>{s.cap}<br /><span className="ncp-dim" style={{ fontSize: 9.5 }}>{s.sub}</span></p>
          </div>)}
        </div>
        <div className="ncp-card" style={{ marginTop: 8, marginBottom: 0 }}>
          <p style={{ margin: 0, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ border: "1px solid #3a3b40", borderRadius: 6, padding: "4px 8px" }}>START</span><span>→</span><b>{WALL34[stage].cap}</b>
            {stage === 2 && <><span>◆ Information complete?</span><span className="ncp-dim">No → Save &amp; Exit · Yes → Continue</span></>}
            {stage === 3 && <><span>◆ Approved?</span><span className="ncp-dim">No → Not Approved · Yes → Virtual Card Issued</span></>}
            {stage === 4 && <><span>◆ First-time user?</span><span className="ncp-dim">Yes → Start Tour · No → Dashboard</span></>}
            <span style={{ marginLeft: "auto" }} className="ncp-dim">◆ Decision — every branch returns to the journey; no dead ends.</span>
          </p>
        </div>
      </div>
    </div>
  </NcShell>;
}

/* ================= 36 — Application Friction Reduction: before/after panels ================= */
const F36_BEFORE: Array<[string, Array<[string, string]>]> = [
  ["Personal Information", [["Full Name", "Please enter"], ["ID Number", "Please enter"], ["Date of Birth", "Select date 📅"], ["Mobile Number", "Please enter"], ["Email Address", "Please enter"], ["Current Address", "Please enter"]]],
  ["Employment Information", [["Employment Type", "Please select ⌄"], ["Company Name", "Please enter"], ["Job Title", "Please enter"], ["Work City", "Please select ⌄"], ["Monthly Income (CNY)", "Please enter"], ["Work Phone", "Please enter"]]],
  ["Additional Information", [["Education", "Please select ⌄"], ["Marital Status", "Please select ⌄"], ["Existing Card (Y/N)", "Please select ⌄"], ["Emergency Contact", "Please enter"], ["Relationship", "Please enter"], ["Contact Number", "Please enter"]]],
];
const F36_STEPS = ["Personal Info", "Employment", "Verification", "Review", "Submit"];
const F36_AFTER_FIELDS: Array<[string, string]> = [["Full Name", "Zhang Yihan"], ["ID Number", "1101 **** **** 1234"], ["Date of Birth", "2002-05-20 📅"], ["Mobile Number", "138 **** 8888"], ["Email Address", "yihan.zhang@example.com"], ["Current Address", "88 Chengdu Rd, Shanghai ⌄"]];
export function NextCardFrictionShowcase() {
  const [step, setStep] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const fld = (l: string, v: string) => <div key={l}><p style={{ margin: "0 0 2px", color: "#6f6a5e", fontSize: 8.5 }}>{l}</p><div style={{ border: "1px solid #ddd6c8", background: "#fff", borderRadius: 6, padding: "4px 6px", color: "#a39c8b", fontSize: 9 }}>{v}</div></div>;
  return <NcShell n="36" title="Application Friction Reduction" label="Next Card application friction reduction — before/after rebuild of Next_Card_Image_36">
    <p className="ncp-mut" style={{ marginTop: 0 }}><b style={{ color: "#fff", fontSize: 15 }}>Simpler. Faster. Smarter.</b><br />Designed for Gen Z. Respecting time. Reducing friction.</p>
    <div style={{ display: "flex", gap: 10, alignItems: "stretch" }}>
      <div style={{ flex: 1.02, minWidth: 0 }}>
        <p style={{ margin: "0 0 6px" }}><b style={{ fontSize: 13.5 }}>BEFORE</b> <span style={{ color: "#ff4d4f" }}>⊗</span> <span className="ncp-mut">Long form. Too many fields. No progress. Benefits separated.</span></p>
        <div style={{ background: "#f7f4ec", color: "#17181a", borderRadius: 14, padding: 13, fontSize: 9.5, height: "calc(100% - 26px)", boxSizing: "border-box" }}>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: 800, fontSize: 12.5, margin: "0 0 6px" }}>Application Form</p>
              {F36_BEFORE.map(([sec, fields]) => <div key={sec}>
                <p style={{ fontWeight: 700, margin: "7px 0 3px" }}>{sec}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>{fields.map(([l, v]) => fld(l, v))}</div>
              </div>)}
              <p style={{ fontWeight: 700, margin: "7px 0 3px" }}>Upload Documents</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5 }}>{["ID Card - Front", "ID Card - Back", "Income Proof", "Other (Optional)"].map((t) => <div key={t} style={{ border: "1px solid #ddd6c8", background: "#fff", borderRadius: 6, padding: "4px 5px", color: "#6f6a5e" }}>{t}<br /><span style={{ color: "#a39c8b" }}>⤒ Upload</span></div>)}</div>
              <p style={{ margin: "8px 0 6px" }}><button type="button" role="checkbox" aria-checked={agreed} onClick={() => setAgreed((v) => !v)} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", color: "#17181a", padding: 0 }}>{agreed ? "☑" : "☐"} I have read and agree to the terms and conditions</button></p>
              <span style={{ display: "block", background: "#17181a", color: "#fff", textAlign: "center", borderRadius: 7, padding: "6px 0", fontWeight: 700 }}>Submit Application</span>
            </div>
            <div style={{ width: 118, flex: "none" }}>
              <div style={{ background: "#fff", border: "1px solid #e3ded2", borderRadius: 9, padding: 8, marginBottom: 7 }}>
                <p style={{ fontWeight: 700, margin: "0 0 4px" }}>Card Benefits</p>
                {["Earn points on everyday spend", "Exclusive youth privileges", "Access lifestyle partners", "Seasonal promotions", "Travel and entertainment offers"].map((t) => <p key={t} style={{ margin: "3px 0", color: "#3c3c40" }}>▣ {t}</p>)}
              </div>
              <div style={{ background: "#fff", border: "1px solid #e3ded2", borderRadius: 9, padding: 8 }}>
                <p style={{ fontWeight: 700, margin: "0 0 4px" }}>Representative Example</p>
                <p style={{ margin: "3px 0", color: "#3c3c40" }}>Credit Limit<br /><b style={{ color: "#17181a" }}>Up to ¥50,000</b></p>
                <p style={{ margin: "3px 0", color: "#3c3c40" }}>Annual Fee<br /><b style={{ color: "#17181a" }}>¥199</b></p>
                <p style={{ margin: "3px 0", color: "#3c3c40" }}>Interest Rate (APR)<br /><b style={{ color: "#17181a" }}>18.00%</b></p>
                <p style={{ margin: "4px 0 0", color: "#b3540f" }}>Learn more ›</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "center", fontSize: 22, color: "#9a9aa0", flex: "none" }}>➜</div>
      <div style={{ flex: 1.3, minWidth: 0 }}>
        <p style={{ margin: "0 0 6px" }}><b style={{ fontSize: 13.5 }}>AFTER</b> <span className="nc-acc">⊙</span> <span className="ncp-mut">Progressive steps. Prefilled where available. Clear progress. Benefit reminder. Save and return. Transparent eligibility.</span></p>
        <div style={{ background: "#101114", border: "1px solid #26272c", borderRadius: 14, padding: 13, fontSize: 10.5 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
            <div style={{ display: "flex", gap: 0, flex: 1, alignItems: "flex-start" }}>
              {F36_STEPS.map((t, i) => <span key={t} style={{ display: "flex", alignItems: "center", flex: i < 4 ? 1 : undefined }}>
                <button type="button" onClick={() => setStep(i)} aria-pressed={step === i} style={{ background: "none", border: "none", color: step === i ? "#fff" : "#9a9aa0", cursor: "pointer", font: "inherit", textAlign: "center", padding: 0 }}>
                  <span style={{ display: "inline-flex", width: 19, height: 19, borderRadius: "50%", background: step === i ? ORANGE : "#232428", color: "#fff", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10 }}>{i + 1}</span>
                  <span style={{ display: "block", fontSize: 8.5, marginTop: 2, whiteSpace: "nowrap" }}>{t}</span>
                </button>
                {i < 4 && <span style={{ flex: 1, height: 2, background: i < step ? ORANGE : "#2c2d30", margin: "9px 3px 0" }} />}
              </span>)}
            </div>
            <span style={{ border: "1px solid #3a3b40", borderRadius: 7, padding: "4px 8px", flex: "none" }}>🔖 Save and return</span>
          </div>
          <div style={{ background: "#17181c", border: "1px solid #26272c", borderRadius: 11, padding: 11, marginTop: 10 }}>
            {step === 0 ? <>
              <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>Step 1 of 5</p>
              <p style={{ fontWeight: 800, fontSize: 14.5, margin: "2px 0 6px" }}>Personal Information</p>
              <p style={{ margin: "0 0 8px" }}><span style={{ background: "#1d2b1d", color: "#7bc47f", borderRadius: 999, padding: "2px 8px", fontSize: 9 }}>✓ Prefilled from bank records where available</span></p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {F36_AFTER_FIELDS.map(([l, v]) => <div key={l} style={{ background: "#101114", border: "1px solid #26272c", borderRadius: 8, padding: "6px 8px" }}><span className="ncp-dim" style={{ display: "block", fontSize: 8.5 }}>{l}</span>{v}</div>)}
              </div>
              <p style={{ display: "flex", gap: 10, alignItems: "center", margin: "10px 0 0" }}><button type="button" className="ncp-cta" style={{ width: 190 }} onClick={() => setStep(1)}>Continue</button><span className="ncp-dim">Press Enter →</span></p>
            </> : <div aria-live="polite">
              <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>Step {step + 1} of 5</p>
              <p style={{ fontWeight: 800, fontSize: 14.5, margin: "2px 0 6px" }}>{["", "Employment", "Verification", "Review", "Submit"][step]}</p>
              <p className="ncp-mut" style={{ margin: 0 }}>Same pattern as the printed Step 1: only the fields this step needs, prefilled where available, progress always visible, save and return at any point. {step === 4 ? "The final step confirms and submits — no separate benefits hunt, no repeated data." : ""}</p>
              <p style={{ display: "flex", gap: 10, alignItems: "center", margin: "10px 0 0" }}><button type="button" className="ncp-cta" style={{ width: 190 }} onClick={() => setStep(Math.min(4, step + 1))}>{step === 4 ? "Submit" : "Continue"}</button><button type="button" style={{ background: "none", border: "none", color: "#9a9aa0", cursor: "pointer", font: "inherit" }} onClick={() => setStep(Math.max(0, step - 1))}>‹ Back</button></p>
            </div>}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <div style={{ width: 150, flex: "none" }}>
              <div style={{ background: "linear-gradient(120deg,#191a1e 55%,#7a2410)", borderRadius: 9, padding: 8, marginBottom: 7 }}><p style={{ margin: 0, fontSize: 9, letterSpacing: ".08em" }}>NEXT CARD</p><p style={{ margin: "10px 0 0", fontSize: 13 }}>▦</p></div>
              <div className="ncp-card" style={{ marginBottom: 7 }}><p style={{ margin: "0 0 3px" }}><b>Why Next Card</b></p>{["Up to 8% back on everyday spend", "Exclusive Gen Z lifestyle benefits", "Curated partners and experiences", "No annual fee for first year"].map((t) => <p key={t} style={{ margin: "3px 0" }}><span className="nc-acc">⊙</span> {t}</p>)}</div>
              <div className="ncp-card" style={{ marginBottom: 0 }}><p style={{ margin: 0 }}><b>Eligibility Check</b> <span className="ncp-dim">(Modeled)</span><span style={{ float: "right", background: "#1d2b1d", color: "#7bc47f", borderRadius: 5, padding: "1px 6px", fontSize: 9 }}>Great fit</span></p><p className="ncp-mut" style={{ margin: "3px 0" }}>You&apos;re likely to qualify for up to ¥50,000 credit limit.</p><p className="nc-acc" style={{ margin: 0 }}>View details ›</p></div>
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, alignContent: "start" }}>
              {[["Prefilled Information", "Faster with data you've already provided to your bank."], ["Save & Return", "Save anytime and continue where you left off."], ["Clear Progress", "Know exactly how far you've come."], ["Transparent Eligibility", "See your eligibility range before you apply."]].map(([t, d2]) => <div key={t}><p style={{ margin: 0 }}><span className="nc-acc" style={{ marginRight: 5 }}>◎</span><b>{t}</b></p><p className="ncp-mut" style={{ margin: "2px 0 0" }}>{d2}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ncp-card" style={{ marginTop: 12, marginBottom: 0 }}>
      <p style={{ margin: "0 0 8px" }}><b>TASK TIME &amp; FRICTION ANALYSIS</b> <span className="ncp-dim">(Modeled)</span></p>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.3fr 1fr 1fr", gap: 14 }}>
        <div><p style={{ margin: "0 0 4px" }}><b>Time to Complete</b> <span className="ncp-dim">(Modeled)</span></p>
          <p style={{ display: "flex", gap: 14, alignItems: "center", margin: 0 }}><span>BEFORE<br /><b className="nc-acc" style={{ fontSize: 19 }}>9:15</b><br /><span className="ncp-dim">minutes</span></span><span>AFTER<br /><b style={{ color: "#2fbf71", fontSize: 19 }}>2:45</b><br /><span className="ncp-dim">minutes</span></span><span style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: "4px 8px", textAlign: "center" }}>Time Saved<br /><b style={{ color: "#2fbf71", fontSize: 16 }}>70%</b><br /><span className="ncp-dim">reduction</span></span></p></div>
        <div><p style={{ margin: "0 0 4px" }}><b>Fields to Complete</b> <span className="ncp-dim">(Modeled)</span></p>
          <p style={{ display: "flex", alignItems: "center", gap: 7, margin: "3px 0" }}><span style={{ width: 46 }}>BEFORE</span><span style={{ flex: 1 }}><Bar pct={100} /></span><b>23</b></p>
          <p style={{ display: "flex", alignItems: "center", gap: 7, margin: "3px 0" }}><span style={{ width: 46 }}>AFTER</span><span style={{ flex: 1 }}><Bar pct={35} color="#2fbf71" /></span><b>8</b></p></div>
        <div><p style={{ margin: "0 0 4px" }}><b>Perceived Effort</b> <span className="ncp-dim">(Modeled)</span></p>
          <p style={{ margin: "3px 0" }}>BEFORE <span className="nc-acc" style={{ letterSpacing: 2 }}>★★★★☆</span></p>
          <p style={{ margin: "3px 0" }}>AFTER <span style={{ color: "#2fbf71", letterSpacing: 2 }}>★☆☆☆☆</span></p></div>
        <div><p style={{ margin: "0 0 4px" }}><b>Drop-off Rate</b> <span className="ncp-dim">(Modeled)</span></p>
          <p style={{ display: "flex", gap: 12, alignItems: "center", margin: 0 }}>
            <span style={{ textAlign: "center" }}><span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: `conic-gradient(${ORANGE} 0 62%, #2c2d30 62% 100%)`, alignItems: "center", justifyContent: "center" }}><span style={{ width: 28, height: 28, borderRadius: "50%", background: "#16171b", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 9.5 }}>62%</span></span><br /><span className="ncp-dim">BEFORE</span></span>
            <span>→</span>
            <span style={{ textAlign: "center" }}><span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: "conic-gradient(#2fbf71 0 18%, #2c2d30 18% 100%)", alignItems: "center", justifyContent: "center" }}><span style={{ width: 28, height: 28, borderRadius: "50%", background: "#16171b", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 9.5 }}>18%</span></span><br /><span className="ncp-dim">AFTER</span></span>
          </p></div>
      </div>
    </div>
  </NcShell>;
}
