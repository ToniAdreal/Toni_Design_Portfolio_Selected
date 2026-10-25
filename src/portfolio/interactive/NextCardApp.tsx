import { useState } from "react";
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
  const [txn, setTxn] = useState(0);
  const [rewardTab, setRewardTab] = useState("All");
  const [perkTab, setPerkTab] = useState("All");
  const [growth, setGrowth] = useState(0);
  const perks = PERKS.filter((p) => perkTab === "All" || p.cat === perkTab);
  return <div className="nc" role="region" aria-label="Next Card hero and app suite — interactive rebuild of Next_Card_Image_01">
    <p style={{ margin: 0, letterSpacing: ".14em", fontWeight: 700 }}>NEXT <span className="nc-acc">CARD</span></p>
    <h3>Designing a<br />Gen Z Credit Card<br />Growth System for <span className="nc-acc">China</span></h3>
    <p style={{ color: "#c9c9ce", maxWidth: "58ch" }}>A solo strategy, product design and engineering project connecting market selection, card proposition, acquisition and long-term engagement.</p>
    <p style={{ color: "#c9c9ce" }}><b style={{ color: "#ff4b1f" }}>SHENZHEN</b> — Tech Innovation Hub · Young Population · High Consumption · Strong Fintech Adoption &nbsp;→&nbsp; <b style={{ color: "#ff9a66" }}>GUANGZHOU</b> — Commercial Capital · Large Student Base · Retail &amp; Lifestyle · High Growth Potential. <span style={{ color: "#9a9aa0" }}>Pearl River Delta Connected Opportunity. The physical card as printed: black metal, chip, NEXT CARD, orange dot-matrix edge.</span></p>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "10px 0" }} role="group" aria-label="Application flow and app screens">
      {PHONES.map((p) => <button key={p} type="button" className="nc-tab" aria-pressed={phone === p} onClick={() => setPhone(p)}>{p}</button>)}
    </div>
    <div className="nc-phone" aria-live="polite">
      <p style={{ margin: "0 0 8px", display: "flex", justifyContent: "space-between" }}><span style={{ letterSpacing: ".1em", fontSize: 10.5 }}>NEXT CARD</span><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>9:41</span></p>
      {phone === "Landing" && <div>
        <p style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.25, margin: "6px 0" }}>The credit card<br />built for what<br /><span className="nc-acc">matters now.</span></p>
        <p style={{ color: "#b9b9be" }}>Smart rewards, local perks and financial freedom for Gen Z.</p>
        <button type="button" className="nc-cta" onClick={() => setPhone("Verify Identity")}>Apply Now ›</button>
        <p style={{ display: "flex", justifyContent: "space-between", margin: "12px 0 0", color: "#b9b9be" }}><span><b style={{ color: "#fff", fontSize: 14 }}>0</b><br />Annual Fee</span><span><b style={{ color: "#fff", fontSize: 14 }}>Up to 20%</b><br />Rewards</span><span><b style={{ color: "#fff", fontSize: 14 }}>60s</b><br />Instant Decision</span></p>
      </div>}
      {phone === "Verify Identity" && <div>
        <p style={{ margin: "4px 0" }}><b className="nc-acc">1.</b> <b>Verify Identity</b><br /><span style={{ color: "#b9b9be" }}>Secure and fast.</span></p>
        {["ID Card", "Face Recognition", "Basic Information"].map((s) => <p key={s} className="nc-row"><span>◉ {s}</span><span className="nc-acc">✓</span></p>)}
        <button type="button" className="nc-cta" style={{ marginTop: 10 }} onClick={() => setPhone("Your Info")}>Continue</button>
      </div>}
      {phone === "Your Info" && <div>
        <p style={{ margin: "4px 0" }}><b className="nc-acc">2.</b> <b>Your Info</b><br /><span style={{ color: "#b9b9be" }}>Tell us a bit about you.</span></p>
        {[["Education", "University Student"], ["Monthly Income", "3,000 – 8,000 CNY"], ["Employment", "Part-time"], ["City", "Shenzhen"]].map(([k, v]) => <p key={k} className="nc-row"><span style={{ color: "#9a9aa0" }}>{k}</span><b>{v} ›</b></p>)}
        <button type="button" className="nc-cta" style={{ marginTop: 10 }} onClick={() => setPhone("Instant Decision")}>Continue</button>
      </div>}
      {phone === "Instant Decision" && <div style={{ textAlign: "center" }}>
        <p style={{ margin: "4px 0", textAlign: "left" }}><b className="nc-acc">3.</b> <b>Instant Decision</b><br /><span style={{ color: "#b9b9be" }}>Congratulations!</span></p>
        <p style={{ fontSize: 34, color: "#ff4b1f", margin: "10px 0 2px" }}>✓</p>
        <p style={{ margin: "2px 0" }}>You're approved for<br />NEXT CARD.</p>
        <p style={{ color: "#b9b9be", margin: "8px 0" }}>Credit Limit<br /><b style={{ color: "#fff", fontSize: 16 }}>¥ 20,000</b></p>
        <button type="button" className="nc-cta" onClick={() => setPhone("Home Dashboard")}>Activate Now</button>
      </div>}
      {phone === "Home Dashboard" && <div>
        <p style={{ color: "#9a9aa0", margin: "4px 0 0" }}>Available Credit</p>
        <p style={{ margin: "0", display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 19 }}>¥ 14,520.00</b><span className="nc-acc" style={{ fontWeight: 800 }}>72%</span></p>
        <p style={{ color: "#9a9aa0", margin: "0 0 6px" }}>Credit Limit ¥ 20,000.00</p>
        <p style={{ margin: "6px 0 2px", display: "flex", justifyContent: "space-between" }}><b>Recent Transactions</b><span className="nc-acc">View All</span></p>
        {TXNS.map((t, i) => <button key={t.merchant} type="button" onClick={() => setTxn(i)} aria-pressed={txn === i} style={{ display: "flex", justifyContent: "space-between", width: "100%", background: txn === i ? "#1d1e20" : "transparent", color: "#eee", border: "none", borderBottom: "1px solid #232426", padding: "6px 2px", cursor: "pointer", font: "inherit", textAlign: "left" }}><span><b>{t.merchant}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>{t.when}</span></span><span>{t.amount}</span></button>)}
        <p style={{ color: "#b9b9be", margin: "8px 0 0" }} aria-live="polite">Selected: {TXNS[txn].merchant} · {TXNS[txn].when} · {TXNS[txn].amount}</p>
        <p style={{ display: "flex", justifyContent: "space-around", color: "#9a9aa0", margin: "10px 0 0" }}><span className="nc-acc">⌂ Home</span><span>♡ Rewards</span><span>▣ Pay</span><span>◉ Profile</span></p>
      </div>}
      {phone === "Rewards" && <div>
        <p style={{ margin: "4px 0" }}><b style={{ fontSize: 15 }}>Rewards</b></p>
        <p style={{ color: "#9a9aa0", margin: 0 }}>Your points</p>
        <p style={{ margin: "0 0 8px" }}><span className="nc-acc">⬢</span> <b style={{ fontSize: 19 }}>2,850</b> <span style={{ color: "#9a9aa0" }}>= ¥ 28.50</span></p>
        <p style={{ display: "flex", gap: 6 }}>{["All", "Earn", "Redeem"].map((t) => <button key={t} type="button" className="nc-tab" aria-pressed={rewardTab === t} onClick={() => setRewardTab(t)}>{t}</button>)}</p>
        {rewardTab !== "Redeem" && <div>
          <p style={{ margin: "8px 0 4px" }}><b>Earn More</b></p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>{EARN.map(([n, v]) => <span key={n} style={{ background: "#1a1214", border: "1px solid #33202a", borderRadius: 10, padding: "8px" }}><b>{n}</b><br /><span style={{ color: "#b9b9be" }}>{v}</span></span>)}</div>
        </div>}
        {rewardTab !== "Earn" && <p style={{ background: "#1a1214", border: "1px solid #33202a", borderRadius: 10, padding: "8px", margin: "8px 0 0" }}><b>Points Booster</b><br /><span style={{ color: "#b9b9be" }}>Double points this weekend!</span></p>}
        <p style={{ display: "flex", justifyContent: "space-around", color: "#9a9aa0", margin: "10px 0 0" }}><span>⌂ Home</span><span className="nc-acc">♡ Rewards</span><span>▣ Pay</span><span>◉ Profile</span></p>
      </div>}
      {phone === "Local Perks" && <div>
        <p style={{ margin: "4px 0" }}><b style={{ fontSize: 15 }}>Local Perks</b><br /><span style={{ color: "#9a9aa0" }}>Shenzhen ▾</span></p>
        <p style={{ background: "linear-gradient(120deg,#3d0f0a,#7a1d10)", borderRadius: 10, padding: "9px" }}><b>Shenzhen Exclusive</b><br />Up to 50% off</p>
        <p style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{["All", "Dining", "Lifestyle", "Transport"].map((t) => <button key={t} type="button" className="nc-tab" aria-pressed={perkTab === t} onClick={() => setPerkTab(t)}>{t}</button>)}</p>
        {perks.map((p) => <p key={p.name} className="nc-row"><span><b>{p.name}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>{p.area}</span></span><span className="nc-acc">{p.off}</span></p>)}
        {perks.length === 0 && <p style={{ color: "#9a9aa0" }}>No perks in this category on the printed screen.</p>}
        <p className="nc-acc" style={{ margin: "8px 0 0" }}>View All Perks</p>
      </div>}
    </div>
    <div style={{ marginTop: 12 }}>
      <p style={{ margin: "0 0 6px", letterSpacing: ".1em", color: "#9a9aa0" }}>GROWTH SYSTEM STRATEGY</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }} role="group" aria-label="Growth system strategy">
        {GROWTH.map(([n], i) => <button key={n} type="button" className="nc-tab" aria-pressed={growth === i} onClick={() => setGrowth(i)}>{n}</button>)}
      </div>
      <p style={{ margin: "8px 0 0" }} aria-live="polite"><b>{GROWTH[growth][0]}</b> — {GROWTH[growth][1]}</p>
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
    <h3>Image 34 — Low-Fidelity Wireframe Wall</h3>
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
