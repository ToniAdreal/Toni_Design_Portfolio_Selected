import { useState, type ReactNode } from "react";
import "./nextcard-app.css";

/**
 * Next Card bespoke rebuilds transcribed from the actual images:
 * - Next_Card_Image_01: hero + hi-fi phone suite. The printed phones are
 *   where the Home Dashboard (Available Credit ¥14,520 / ¥20,000, 72%,
 *   Recent Transactions), Rewards hub (2,850 pts = ¥28.50, Earn More,
 *   Points Booster) and Local Perks screens actually live — the data
 *   file's standalone titles for those screens do not exist as separate
 *   images (see BUILD_NOTES §6).
 * - Next_Card_Image_34: low-fidelity wireframe wall, 9 journey phones
 *   (Dashboard ¥12,000 / ¥15,000 with Due ¥860 · May 20 = the printed
 *   repayment surface; Credit Builder 720 Good = account health).
 */

const TXNS = [
  { merchant: "HEYTEA", when: "Today", amount: "− ¥ 32.00" },
  { merchant: "ZARA", when: "May 18", amount: "− ¥ 299.00" },
  { merchant: "Metro (Shenzhen)", when: "May 18", amount: "− ¥ 6.00" },
  { merchant: "Sephora", when: "May 17", amount: "− ¥ 320.00" },
];
const EARN = [
  ["Online Shopping", "Up to 20%"], ["Food & Drinks", "Up to 18%"],
  ["Ride Hailing", "Up to 10%"], ["Entertainment", "Up to 18%"],
];
const PERKS = [
  { name: "Arabica", area: "Nanshan", off: "10% off", cat: "Dining" },
  { name: "HAYDON", area: "MixC World", off: "15% off", cat: "Lifestyle" },
  { name: "OCT Loft", area: "Nanshan", off: "10% off", cat: "Lifestyle" },
  { name: "Shenzhen Bay", area: "Shenzhen Bay", off: "20% off", cat: "Transport" },
];
const PHONES = ["Landing", "Verify Identity", "Your Info", "Instant Decision", "Home Dashboard", "Rewards", "Local Perks"] as const;
const GROWTH = [
  ["Market Selection", "Focus on high-potential Gen Z hubs."],
  ["Card Proposition", "No annual fee, high rewards, local perks."],
  ["Acquisition", "Digital-first, instant approval experience."],
  ["Activation", "Simple onboarding and first transaction rewards."],
  ["Engagement", "Personalized offers and lifestyle ecosystem."],
  ["Retention & Growth", "Drive usage, loyalty and referrals."],
];

export function NextCardHeroApp() {
  const [phone, setPhone] = useState<(typeof PHONES)[number]>("Home Dashboard");
  const pi = PHONES.indexOf(phone);
  const mini = (label: string, body: ReactNode) => (
    <button type="button" onClick={() => setPhone(label as (typeof PHONES)[number])} aria-pressed={phone === label} aria-label={`Phone: ${label}`} style={{ background: "#0a0a0c", border: `1.5px solid ${phone === label ? "#ff4b1f" : "#34353b"}`, borderRadius: 17, padding: "6px 6px 8px", color: "#f5f5f5", fontSize: 8.8, lineHeight: 1.4, cursor: "pointer", fontFamily: "Inter, Arial, sans-serif", textAlign: "left", width: "100%", height: "100%" }}>
      <span style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa0", fontSize: 7.5, fontFamily: "\"IBM Plex Mono\", monospace" }}><span>9:41</span><span>▂▄▆</span></span>
      <span style={{ display: "block", letterSpacing: ".08em", fontSize: 7.8, color: "#9a9aa0", margin: "2px 0 4px" }}>NEXT CARD</span>
      {body}
    </button>
  );
  return <div className="nc" role="region" aria-label="Next Card hero and app suite — interactive rebuild of Next_Card_Image_01">
    <p style={{ margin: 0, letterSpacing: ".14em", fontWeight: 700 }}>NEXT <span className="nc-acc">CARD</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1.25fr 150px 1fr", gap: 14, alignItems: "start", marginTop: 6 }}>
      <div>
        <h3 style={{ marginTop: 2 }}>Designing a<br />Gen Z Credit Card<br />Growth System for <span className="nc-acc">China</span></h3>
        <p style={{ color: "#c9c9ce", margin: 0 }}>A solo strategy, product design and engineering project connecting market selection, card proposition, acquisition and long-term engagement.</p>
      </div>
      <div style={{ background: "linear-gradient(155deg,#1e1f23,#060607 68%)", border: "1px solid #4a1e10", borderRadius: 13, height: 218, padding: "13px 12px", transform: "rotate(2.5deg)", boxShadow: "0 16px 30px rgba(0,0,0,.55), 0 0 34px rgba(255,75,31,.16)", position: "relative", overflow: "hidden" }} role="img" aria-label="Physical Next Card: black metal, chip, orange dot-matrix edge">
        <span style={{ display: "block", width: 27, height: 20, borderRadius: 4, background: "linear-gradient(135deg,#e8e8ea,#8a8d93)" }} />
        <span style={{ display: "block", marginTop: 66, letterSpacing: ".18em", fontWeight: 700, fontSize: 13 }}>NEXT CARD</span>
        <span style={{ position: "absolute", right: 10, top: "46%", color: "#ff4b1f", fontSize: 17 }}>›</span>
        <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 52, backgroundImage: "radial-gradient(rgba(255,90,31,.85) 1.4px, transparent 1.8px)", backgroundSize: "7px 7px", opacity: 0.75 }} />
      </div>
      <div>
        <svg viewBox="0 0 260 168" style={{ width: "100%", display: "block" }} role="img" aria-label="China map with the Shenzhen to Guangzhou route — Pearl River Delta Connected Opportunity">
          <path d="M52,30 L96,16 L138,24 L176,13 L214,32 L233,60 L219,86 L233,110 L196,127 L168,114 L142,136 L112,118 L82,131 L58,106 L38,78 L40,50 Z" fill="#0c0c0e" stroke="#3f4046" strokeWidth="1.2" />
          <path d="M196,96 Q168,64 128,66" fill="none" stroke="#ff4b1f" strokeWidth="2" />
          <circle cx="196" cy="96" r="6" fill="#fff" stroke="#ff4b1f" strokeWidth="3" />
          <circle cx="128" cy="66" r="6" fill="#fff" stroke="#ff9a66" strokeWidth="3" />
          <text x="196" y="82" fill="#ff4b1f" fontSize="11.5" fontWeight="800" textAnchor="middle">SHENZHEN</text>
          <text x="128" y="50" fill="#ff9a66" fontSize="11.5" fontWeight="800" textAnchor="middle">GUANGZHOU</text>
        </svg>
        <p style={{ color: "#c9c9ce", margin: "2px 0 0", fontSize: 12.3, lineHeight: 1.5 }}><b style={{ color: "#ff4b1f" }}>SHENZHEN</b> — Tech Innovation Hub · Young Population · High Consumption · Strong Fintech Adoption<br /><b style={{ color: "#ff9a66" }}>GUANGZHOU</b> — Commercial Capital · Large Student Base · Retail &amp; Lifestyle · High Growth Potential<br /><span style={{ color: "#9a9aa0" }}>Pearl River Delta Connected Opportunity.</span></p>
      </div>
    </div>
    <p style={{ margin: "14px 0 6px", letterSpacing: ".1em", color: "#9a9aa0", fontSize: 11 }}>APPLICATION FLOW — SEVEN PHONES, AS PRINTED · SELECTED: <b style={{ color: "#fff" }}>{phone.toUpperCase()}</b> ({pi + 1} OF 7)</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 7 }} role="group" aria-label="Application flow and app screens — seven phones">
      <div>{mini("Landing", <><b style={{ display: "block", fontSize: 11.5, lineHeight: 1.3 }}>The credit card built for what <span className="nc-acc">matters now.</span></b><span style={{ display: "block", color: "#b9b9be", margin: "4px 0" }}>Smart rewards, local perks and financial freedom for Gen Z.</span><span className="ncp-cta" style={{ fontSize: 9, padding: "5px 6px" }}>Apply Now ›</span><span style={{ display: "flex", justifyContent: "space-between", marginTop: 7, color: "#b9b9be", fontSize: 8 }}><span><b style={{ color: "#fff", fontSize: 10 }}>0</b> Fee</span><span><b style={{ color: "#fff", fontSize: 10 }}>20%</b> Rewards</span><span><b style={{ color: "#fff", fontSize: 10 }}>60s</b> Decision</span></span></>)}</div>
      <div>{mini("Verify Identity", <><b style={{ display: "block" }}><span className="nc-acc">1.</span> Verify Identity</b><span style={{ display: "block", color: "#b9b9be" }}>Secure and fast.</span>{["ID Card", "Face Recognition", "Basic Information"].map((s) => <span key={s} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #232426", padding: "3.5px 0" }}><span>◉ {s}</span><span className="nc-acc">✓</span></span>)}<span className="ncp-cta" style={{ marginTop: 6, fontSize: 9, padding: "5px 6px" }}>Continue</span></>)}</div>
      <div>{mini("Your Info", <><b style={{ display: "block" }}><span className="nc-acc">2.</span> Your Info</b><span style={{ display: "block", color: "#b9b9be" }}>Tell us a bit about you.</span>{[["Education", "University Student"], ["Monthly Income", "3,000 – 8,000 CNY"], ["Employment", "Part-time"], ["City", "Shenzhen"]].map(([k, v]) => <span key={k} style={{ display: "block", borderBottom: "1px solid #232426", padding: "3.5px 0" }}><span style={{ color: "#9a9aa0" }}>{k}</span><br /><b>{v} ›</b></span>)}<span className="ncp-cta" style={{ marginTop: 6, fontSize: 9, padding: "5px 6px" }}>Continue</span></>)}</div>
      <div>{mini("Instant Decision", <><b style={{ display: "block" }}><span className="nc-acc">3.</span> Instant Decision</b><span style={{ display: "block", color: "#b9b9be" }}>Congratulations!</span><span style={{ display: "block", textAlign: "center", fontSize: 27, color: "#ff4b1f", margin: "5px 0 0" }}>✓</span><span style={{ display: "block", textAlign: "center" }}>You're approved for NEXT CARD.</span><span style={{ display: "block", textAlign: "center", color: "#b9b9be", marginTop: 5 }}>Credit Limit<br /><b style={{ color: "#fff", fontSize: 13 }}>¥ 20,000</b></span><span className="ncp-cta" style={{ marginTop: 6, fontSize: 9, padding: "5px 6px" }}>Activate Now</span></>)}</div>
      <div>{mini("Home Dashboard", <><span style={{ color: "#9a9aa0" }}>Available Credit</span><b style={{ display: "block", fontSize: 13.5 }}>¥ 14,520.00 <span className="nc-acc" style={{ float: "right" }}>72%</span></b><span style={{ color: "#9a9aa0" }}>Credit Limit ¥ 20,000.00</span><b style={{ display: "block", margin: "5px 0 2px" }}>Recent Transactions</b>{TXNS.map((t) => <span key={t.merchant} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #232426", padding: "3px 0" }}><span><b>{t.merchant}</b><br /><span style={{ color: "#9a9aa0", fontSize: 7.8 }}>{t.when}</span></span><span>{t.amount}</span></span>)}<span style={{ display: "flex", justifyContent: "space-around", color: "#9a9aa0", marginTop: 6 }}><span className="nc-acc">⌂ Home</span><span>♡ Rewards</span><span>▣ Pay</span><span>◉ Profile</span></span></>)}</div>
      <div>{mini("Rewards", <><b style={{ display: "block", fontSize: 11 }}>Rewards</b><span style={{ color: "#9a9aa0" }}>Your points</span><b style={{ display: "block", fontSize: 14.5 }}><span className="nc-acc">⬢</span> 2,850 <span style={{ color: "#9a9aa0", fontSize: 9 }}>= ¥ 28.50</span></b><b style={{ display: "block", margin: "4px 0" }}>Earn More</b><span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>{EARN.map(([n, v]) => <span key={n} style={{ background: "#1a1214", border: "1px solid #33202a", borderRadius: 7, padding: "4px 5px" }}><b>{n}</b><br /><span style={{ color: "#b9b9be" }}>{v}</span></span>)}</span><span style={{ display: "block", background: "#1a1214", border: "1px solid #33202a", borderRadius: 7, padding: "5px", marginTop: 5 }}><b>Points Booster</b><br /><span style={{ color: "#b9b9be" }}>Double points this weekend!</span></span></>)}</div>
      <div>{mini("Local Perks", <><b style={{ display: "block", fontSize: 11 }}>Local Perks</b><span style={{ color: "#9a9aa0" }}>Shenzhen ▾</span><span style={{ display: "block", background: "linear-gradient(120deg,#3d0f0a,#7a1d10)", borderRadius: 8, padding: "6px", margin: "4px 0" }}><b>Shenzhen Exclusive</b><br />Up to 50% off</span>{PERKS.map((p) => <span key={p.name} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #232426", padding: "3.5px 0" }}><span><b>{p.name}</b><br /><span style={{ color: "#9a9aa0", fontSize: 7.8 }}>{p.area}</span></span><span className="nc-acc">{p.off}</span></span>)}<span className="nc-acc" style={{ display: "block", marginTop: 5 }}>View All Perks</span></>)}</div>
    </div>
    <div style={{ marginTop: 14, background: "#f6f5f2", color: "#141414", borderRadius: 10, padding: "10px 13px", display: "grid", gridTemplateColumns: "118px repeat(6,1fr)", gap: 10, alignItems: "start" }}>
      <p style={{ margin: 0, fontWeight: 800, letterSpacing: ".06em", fontSize: 11.5 }}>GROWTH SYSTEM STRATEGY</p>
      {GROWTH.map(([n, d], i) => <p key={n} style={{ margin: 0, fontSize: 11.3, lineHeight: 1.45 }}><b>{n}</b>{i < 5 && <span style={{ color: "#c9330d", float: "right" }}>→</span>}<br /><span style={{ color: "#4a4a48" }}>{d}</span></p>)}
    </div>
    <div className="nc-foot"><span>Next Card Project</span><span>Product Design Portfolio</span><span>Confidential · For portfolio use only</span></div>
  </div>;
}

/* ---------------- Image 34 — Wireframe wall ---------------- */

const WALL_STEPS = [
  { n: 1, name: "Landing Page", caption: "Hero value prop + primary CTA.", title: "Next is your move.", body: "A credit card built for how you live. · No annual fee · Transparent · Built for Gen Z", cta: "Get Started" },
  { n: 2, name: "Benefit Detail", caption: "Benefit storytelling builds trust and intent.", title: "Why Next Card?", body: "Earn more — Get rewards that fit your lifestyle. · Use anywhere — Online and offline, everyday. · Build credit — Grow your score with smart tools.", cta: "Apply Now" },
  { n: 3, name: "Application", caption: "Minimal fields. Progress indicator on top.", title: "Let's get started", body: "It takes about 3 minutes. Fields: Full name · ID number · Phone number · City. ☐ I agree to the terms.", cta: "Continue" },
  { n: 4, name: "Approval", caption: "Real-time progress reduces anxiety.", title: "Almost there", body: "We're reviewing your information. 80% — Usually done in under 2 minutes.", cta: "" },
  { n: 5, name: "Dashboard", caption: "At-a-glance financial control center.", title: "Hi, Alex", body: "Available Credit ¥ 12,000.00 · Total Credit ¥ 15,000. This Month — Spent ¥ 1,230.00 · Due ¥ 860.00 · Due Date May 20. Quick Actions: Repay · Bill · Rewards · More.", cta: "" },
  { n: 6, name: "Rewards", caption: "Points balance + easy redemption.", title: "My Rewards", body: "Points Balance 2,560. Tabs: All · Vouchers · Events. ¥20 Coffee Voucher — 2,000 pts · ¥50 Movie Voucher — 4,000 pts · ¥30 Ride Voucher — 2,500 pts.", cta: "See All Rewards" },
  { n: 7, name: "Local Perks", caption: "Nearby perks drive everyday value.", title: "Local Perks", body: "Shenzhen ▾ · Tabs: All · Food · Coffee · Life. % Arabica — 10% off · 200m · HEYTEA — Buy 1 Get 1 · 350m · POP MART — 5% off · 500m.", cta: "View Map" },
  { n: 8, name: "Referral", caption: "Social currency + shared benefits.", title: "Invite Friends", body: "You get ¥30 — They get ¥30. Your Referral Code: NEXTPALS. Referral Rules.", cta: "Invite Now" },
  { n: 9, name: "Credit Builder", caption: "Actionable steps improve credit.", title: "Build Your Credit", body: "720 — Good. Next Goal 750. Pay on time 100% · Keep low usage 30% · Use longer 6 months.", cta: "View Tips" },
];
const WALL_DECISIONS = [
  ["Information complete?", "If users drop fields, guide them back with inline prompts and save progress automatically. (Step 3 — NO loops back to Benefit Detail, YES continues)"],
  ["Approved?", "If not approved, transparently explain reason and offer credit builder path to requalify. (Not Approved — We're unable to approve your application now. [Learn More] · Reapply Later)"],
  ["First-time user?", "Offer guided tour to accelerate activation and discovery. (Take a quick tour to learn key features. [Start Tour] · Skip)"],
];

export function NextCardWireframeWall() {
  const [step, setStep] = useState(4);
  const [decision, setDecision] = useState(0);
  const s = WALL_STEPS[step];
  return <div className="nc" role="region" aria-label="Next Card low-fidelity wireframe wall — interactive rebuild of Next_Card_Image_34">
    <p style={{ margin: 0, color: "#ff4b1f", letterSpacing: ".1em" }}>END-TO-END USER JOURNEY</p>
    <h3>Low-Fidelity Wireframe Wall</h3>
    <p style={{ color: "#c9c9ce" }}>Next Card · China Gen Z credit-card concept. Journey-first. Mobile-first. Simple, transparent, empowering.</p>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }} role="group" aria-label="Journey steps">
      {WALL_STEPS.map((w, i) => <button key={w.n} type="button" className="nc-tab" aria-pressed={step === i} onClick={() => setStep(i)}>{w.n} {w.name}</button>)}
    </div>
    <div className="nc-phone" style={{ background: "#f4f4f2", color: "#111", borderColor: "#ddd", marginTop: 12 }} aria-live="polite">
      <p style={{ margin: "0 0 6px", color: "#888", fontSize: 10.5 }}>9:41 · NEXT CARD</p>
      <p style={{ fontSize: 16, fontWeight: 800, margin: "4px 0" }}>{s.title}</p>
      <p style={{ color: "#444" }}>{s.body}</p>
      {s.cta && <p style={{ background: "#ff5a1f", color: "#fff", textAlign: "center", borderRadius: 8, padding: "8px", fontWeight: 700, margin: "10px 0 0" }}>{s.cta}</p>}
      {step === 4 && <p style={{ display: "flex", justifyContent: "space-around", color: "#888", margin: "10px 0 0" }}><span style={{ color: "#111" }}>⌂ Home</span><span>▣ Cards</span><span>⌕ Discover</span><span>◉ Me</span></p>}
    </div>
    <p style={{ margin: "10px 0 0" }} aria-live="polite"><b>{s.n}. {s.name}</b> — {s.caption}</p>
    <div style={{ marginTop: 10 }}>
      <p style={{ margin: "0 0 6px", color: "#9a9aa0", letterSpacing: ".1em" }}>KEY JOURNEY DECISIONS</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{WALL_DECISIONS.map(([n], i) => <button key={n} type="button" className="nc-tab" aria-pressed={decision === i} onClick={() => setDecision(i)}>◆ {n}</button>)}</div>
      <p style={{ margin: "8px 0 0", color: "#e8e8ea" }}>{WALL_DECISIONS[decision][1]}</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8, marginTop: 12 }}>
      <div style={{ border: "1px solid #3a2320", borderRadius: 8, padding: "9px" }}><b className="nc-acc">KPIs (Modeled)</b><p style={{ margin: "5px 0 0", color: "#c9c9ce" }}>Activation Rate 28.4%<br />Application Completion Rate 61.2%<br />Approval Rate 72.0%<br />90-Day Retention 46.8%<br />Monthly Active Rate 38.7%<br /><span style={{ color: "#9a9aa0" }}>Modeled metrics for concept evaluation.</span></p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: "9px" }}><b>Design Principles</b><p style={{ margin: "5px 0 0", color: "#c9c9ce" }}>Clarity over complexity — One primary action per screen.<br />Progressive disclosure — Show what matters, when it matters.<br />Trust by design — Transparent terms, real-time feedback.<br />Gen Z expression — Personal, social, and rewarding.</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: "9px" }}><b>Journey Legend</b><p style={{ margin: "5px 0 0", color: "#c9c9ce" }}>→ Primary flow<br />- - Alternative flow<br />◆ Decision point<br />◉ Key interaction</p></div>
    </div>
    <div className="nc-foot"><span>Next Card Project</span><span>Product Design Portfolio</span><span>Confidential · For portfolio use only</span></div>
  </div>;
}
