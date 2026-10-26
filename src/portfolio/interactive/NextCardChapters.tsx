import { useState, type ReactNode } from "react";
import "./nextcard-app.css";
import { NextCardApplicationShowcase, NextCardApprovalShowcase, NextCardBenefitsShowcase, NextCardCampaignShowcase, NextCardComponentSystemShowcase, NextCardCreditBuilderShowcase, NextCardDashboardShowcase, NextCardFrictionShowcase, NextCardMissionsShowcase, NextCardPerksShowcase, NextCardRewardsShowcase, NextCardSquadShowcase, NextCardStateMatrixShowcase } from "./NextCardPhones";

/**
 * Next Card chapter rebuilds — transcribed from the ACTUAL image files
 * (public/projects/Next_Card_Image_NN.webp), not from the data file's
 * titles (several data titles describe different screens; see
 * BUILD_NOTES §6.1d). Black deck, Next Orange #FF4B1F accent, same
 * .nc kit as NextCardApp.
 */

const ORANGE = "#ff4b1f";

function Nc({ title, label, light, children }: { n: string; title: string; label: string; light?: boolean; children: ReactNode }) {
  return <div className={`nc${light ? " nc--light" : ""}`} role="region" aria-label={label}>
    <p style={{ margin: 0, letterSpacing: ".14em", fontWeight: 700 }}><span>NEXT <span className="nc-acc">CARD</span></span></p>
    <h3 style={{ fontSize: light ? 46 : 40 }}>{title}</h3>
    {children}
    <div className="nc-foot"><span>Next Card Project</span><span>Product Design Portfolio</span><span>Confidential · For portfolio use only</span></div>
  </div>;
}

/* ---------------- 02 — The Answer in 15 Seconds ---------------- */
const FUNNEL = [
  ["Awareness", "Reach & Engage", "3.2M", "People Reached"],
  ["Consideration", "Click & Learn More", "820K", "Engaged Users"],
  ["Acquisition", "Sign Up & Verify", "360K", "New Sign-ups"],
  ["Activation", "First Transaction", "270K", "Activated Users"],
  ["Advocacy", "Refer & Repeat", "300K", "6-Month Target"],
];
export function NextCardAnswer() {
  const [city, setCity] = useState(0);
  const [stage, setStage] = useState(0);
  return <Nc n="02" title="The Answer in 15 Seconds" light label="Next Card executive summary — interactive rebuild of Next_Card_Image_02">
    <div className="nc-cols" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
      <div><p className="nc-acc" style={{ margin: 0, fontWeight: 700, letterSpacing: ".1em", borderBottom: "3px solid #ff4b1f", paddingBottom: 4, display: "inline-block" }}>WHERE</p><p style={{ fontSize: 17, fontWeight: 700, margin: "4px 0" }}>Shenzhen and Guangzhou</p><p style={{ color: "#4a4a48", margin: 0 }}>High-density, digitally active adult Gen Z</p></div>
      <div><p className="nc-acc" style={{ margin: 0, fontWeight: 700, letterSpacing: ".1em", borderBottom: "3px solid #ff4b1f", paddingBottom: 4, display: "inline-block" }}>WHAT</p><p style={{ fontSize: 17, fontWeight: 700, margin: "4px 0" }}>Next Card</p><p style={{ color: "#4a4a48", margin: 0 }}>Daily rewards, city perks, referral and credit-building</p></div>
      <div><p className="nc-acc" style={{ margin: 0, fontWeight: 700, letterSpacing: ".1em", borderBottom: "3px solid #ff4b1f", paddingBottom: 4, display: "inline-block" }}>HOW</p><p style={{ fontSize: 17, fontWeight: 700, margin: "4px 0" }}>300K modeled six-month acquisition target</p><p style={{ color: "#4a4a48", margin: 0 }}>Digital, merchant and community activation funnel</p></div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
      <div className="nc-darkcard">
        <p style={{ margin: 0 }}><b>THE OPPORTUNITY</b><br /><span style={{ color: "#c9c9ce" }}>Two Power Cities. One Massive Opportunity.</span></p>
        <svg viewBox="0 0 260 150" style={{ width: "100%", display: "block", margin: "8px 0 2px" }} role="img" aria-label="Glowing population map of China with Guangzhou (18.7M) and Shenzhen (17.6M) hotspots">
          <path d="M52,26 L96,14 L138,22 L176,12 L214,30 L232,58 L218,84 L232,108 L196,124 L168,112 L142,132 L112,116 L82,128 L58,104 L38,76 L40,48 Z" fill="#101114" stroke="#3f4046" strokeWidth="1.2" />
          <circle cx="168" cy="86" r="30" fill="#ff4b1f" opacity="0.28" /><circle cx="188" cy="106" r="24" fill="#ff703d" opacity="0.32" />
          <circle cx="168" cy="86" r="6" fill="#ff9a66" /><circle cx="188" cy="106" r="5.5" fill="#ffc4a8" />
          <text x="168" y="70" fill="#ff8a66" fontSize="10.5" fontWeight="800" textAnchor="middle">GUANGZHOU 18.7M</text>
          <text x="188" y="126" fill="#ff8a66" fontSize="10.5" fontWeight="800" textAnchor="middle">SHENZHEN 17.6M</text>
        </svg>
        <p style={{ display: "flex", gap: 5, margin: "6px 0" }}>{["Guangzhou 18.7M", "Shenzhen 17.6M"].map((c, i) => <button key={c} type="button" className="nc-tab" aria-pressed={city === i} onClick={() => setCity(i)}>{c}</button>)}</p>
        {[["28.3M", "Total Population (Shenzhen + Guangzhou)"], ["94%", "Smartphone Penetration"], ["78%", "Digital Payment Adoption"], ["70%+", "Gen Z (18–28) Share in Active Users"]].map(([v, l]) => <p key={l} className="nc-row"><b className="nc-acc" style={{ fontSize: 15 }}>{v}</b><span style={{ color: "#c9c9ce" }}>{l}</span></p>)}
        <p style={{ color: "#9a9aa0", margin: "6px 0 0" }} aria-live="polite">Selected launch city: {city === 0 ? "Guangzhou — 18.7M" : "Shenzhen — 17.6M"}. Digital Activity Density: Low → High (map as printed).</p>
      </div>
      <div className="nc-darkcard">
        <p style={{ margin: 0 }}><b>NEXT CARD</b><br /><span style={{ color: "#c9c9ce" }}>Built for Everyday Wins.</span></p>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-end", margin: "10px 0" }}>
          <div style={{ width: 108, height: 148, flex: "none", background: "linear-gradient(150deg,#1b1c1f,#060607 70%)", border: "1px solid #3a2320", borderRadius: 10, transform: "rotate(-5deg)", padding: "10px 9px", boxShadow: "0 10px 22px rgba(0,0,0,.5)" }} role="img" aria-label="Physical Next Card render">
            <span style={{ display: "block", width: 22, height: 16, borderRadius: 3, background: "linear-gradient(135deg,#c9c9ce,#8a8d93)" }} />
            <span style={{ display: "block", marginTop: 58, fontWeight: 800, letterSpacing: ".1em", fontSize: 11.5 }}>NEXT<br />CARD</span>
          </div>
          <div style={{ flex: 1, background: "#101012", border: "1px solid #2e2f33", borderRadius: 16, padding: "9px 10px" }} role="img" aria-label="Next Card phone: balance ¥8,642.00">
            <p style={{ margin: 0, color: "#c9c9ce", fontSize: 11.5 }}>Good morning, <b style={{ color: "#fff" }}>Alex</b></p>
            <p style={{ margin: "3px 0", fontSize: 12.5 }}>Total Balance <b style={{ fontSize: 15.5 }}>¥8,642.00</b><br /><span style={{ color: "#c9c9ce" }}>Available Credit ¥21,358.00</span></p>
            <p style={{ margin: "5px 0", display: "flex", gap: 3, flexWrap: "wrap" }}>{["Rewards", "City Perks", "Refer Friends", "Build Credit"].map((a) => <span key={a} className="nc-tab" style={{ fontSize: 10, padding: "3px 7px" }}>{a}</span>)}</p>
            <p className="nc-row" style={{ padding: "4px 0" }}><span>Rewards Earned</span><b>¥96.00</b></p>
            <p className="nc-row" style={{ padding: "4px 0" }}><span>Perks Redeemed</span><b>3</b></p>
            <p className="nc-row" style={{ padding: "4px 0" }}><span>Credit Score</span><b className="nc-acc">+28 ↑</b></p>
          </div>
        </div>
        <p style={{ margin: "4px 0 0" }}><b>Today's Progress</b> <span style={{ color: "#c9c9ce" }}>— Keep going, you're doing great.</span></p>
        <p style={{ margin: "5px 0 0", color: "#c9c9ce", fontSize: 12.3 }}>Recent Activity — Coffee Project, Shenzhen +¥18.00 (3 min ago) · Metro Ride, Shenzhen −¥2.00 (1 hr ago)</p>
      </div>
      <div className="nc-darkcard">
        <p style={{ margin: 0 }}><b>ACQUISITION FUNNEL</b><br /><span style={{ color: "#c9c9ce" }}>Digital. Merchant. Community. Compounding Growth.</span></p>
        <div role="group" aria-label="Funnel stages" style={{ marginTop: 8 }}>{FUNNEL.map(([t, s, v, l], i) => <button key={t} type="button" onClick={() => setStage(i)} aria-pressed={stage === i} style={{ display: "block", width: `${100 - i * 11}%`, margin: "0 auto 3px", background: `linear-gradient(90deg, ${["#8f1d08", "#b02a0e", "#d63e12", "#f0521c", "#ff7a33"][i]}, ${["#a8260b", "#c23410", "#e84a15", "#ff6530", "#ff9a4d"][i]})`, clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 100%)", border: "none", color: "#fff", padding: stage === i ? "8px 20px" : "6px 20px", cursor: "pointer", font: "inherit", textAlign: "center", outline: stage === i ? "2px solid #fff" : "none" }}><b style={{ fontSize: 11.5, letterSpacing: ".05em" }}>{t.toUpperCase()}</b> <span style={{ color: "#ffd9c9", fontSize: 11 }}>{s}</span><br /><b style={{ fontSize: 14.5 }}>{v}</b> <span style={{ fontSize: 11 }}>{l}</span></button>)}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, margin: "9px 0 0" }} aria-live="polite">{[["CAC Target", "¥45"], ["Activation Rate", "75%"], ["Referral Rate", "28%"]].map(([l, v], i) => <span key={l} style={{ borderLeft: i ? "1px solid #2c2c2f" : undefined, paddingLeft: i ? 10 : 0 }}><span style={{ display: "block", fontSize: 11, color: "#9a9aa0", letterSpacing: "0.04em" }}>{l}</span><b className="nc-acc" style={{ fontSize: 16 }}>{v}</b></span>)}</div>
      </div>
    </div>
  </Nc>;
}

/* ---------------- 03 — Role, Scope and Timeline ---------------- */
const SCOPE_STEPS = ["Brief interpretation", "Market research", "City prioritization", "Product proposition", "UX architecture", "Interface design", "Design system", "Development", "QA and validation", "Portfolio documentation"];
export function NextCardRoleTimeline() {
  const [s, setS] = useState(0);
  return <Nc n="03" title="Role, Scope and Timeline" label="Next Card role scope timeline — interactive rebuild of Next_Card_Image_03">
    <p style={{ color: "#c9c9ce" }}>End-to-end ownership of the Next Card project — from strategy and research to product delivery and documentation. Brand line as printed: <b style={{ color: "#fff" }}>Financial Freedom Worldwide</b>.</p>
    <div style={{ position: "relative", marginTop: 18 }} role="group" aria-label="Project timeline — ten steps on a line">
      <div style={{ position: "absolute", left: "5%", right: "5%", top: 13, height: 3, background: `linear-gradient(90deg, ${ORANGE}, #7a2413)`, borderRadius: 2 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", gap: 4, position: "relative" }}>
        {SCOPE_STEPS.map((t, i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={s === i} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", font: "inherit", padding: 0, textAlign: "center" }}>
          <span style={{ display: "inline-flex", width: 27, height: 27, borderRadius: "50%", background: i === 9 ? "#e0230d" : s === i ? ORANGE : "#17181a", border: `2px solid ${i === 9 ? "#e0230d" : ORANGE}`, alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11.5 }}>{i + 1}</span>
          <span style={{ display: "block", marginTop: 7, fontSize: 11, lineHeight: 1.3, color: s === i ? "#fff" : "#c9c9ce", fontWeight: s === i ? 700 : 400 }}>{t}</span>
        </button>)}
      </div>
    </div>
    <div style={{ display: "flex", marginTop: 20, borderRadius: 8, overflow: "hidden", border: "1px solid #333438" }} role="img" aria-label="Discipline bar: Strategy, Research, UX, UI, Prototype, Front End, QA">
      {["Strategy", "Research", "UX", "UI", "Prototype", "Front End", "QA"].map((d, i) => <span key={d} style={{ flex: 1, textAlign: "center", padding: "9px 2px", background: i % 2 ? "#101012" : "#000", color: "#fff", fontWeight: 700, fontSize: 12, borderLeft: i ? "1px solid #2c2d30" : undefined, letterSpacing: ".05em" }}>{d.toUpperCase()}</span>)}
    </div>
    <p aria-live="polite" style={{ margin: "12px 0 0" }}>Step {s + 1} of 10 — <b>{SCOPE_STEPS[s]}</b>{s === 9 ? " (final step, marked red on the printed timeline)" : ""}. <span className="nc-tab" style={{ marginLeft: 6, borderColor: ORANGE }}>◉ Solo ownership</span></p>
  </Nc>;
}

/* ---------------- 04 — Sanitized Challenge Reconstruction ---------------- */
const QUESTIONS = [
  ["Where should the bank launch?", "Answered by the city prioritization: Shenzhen and Guangzhou, the two Pearl River Delta power cities."],
  ["What card proposition would attract Gen Z?", "Answered by the Next Card proposition: daily rewards, city perks, referral and credit-building."],
  ["How should the bank acquire and activate customers?", "Answered by the digital, merchant and community activation funnel — 300K modeled six-month target."],
];
const CONSTRAINTS = ["Three-page original submission", "China market", "Gen Z audience", "Six-month launch window", "Credit eligibility and responsible lending", "Bank, customer and merchant economics"];
export function NextCardChallenge() {
  const [q, setQ] = useState(0);
  return <Nc n="04" title="The Challenge — Gen Z Credit Card Growth in China" label="Next Card challenge — interactive rebuild of Next_Card_Image_04">
    <div style={{ display: "grid", gridTemplateColumns: "215px 1fr", gap: 0, border: "1px solid #333438", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ background: "#000", color: "#f5f5f5", padding: "16px 15px" }}>
        <p style={{ letterSpacing: ".16em", fontWeight: 800, margin: "0 0 14px", fontSize: 16 }}>NEXT <span className="nc-acc">CARD</span></p>
        <p style={{ margin: "0 0 4px", color: "#9a9aa0", letterSpacing: ".1em", fontSize: 10.5 }}>STRATEGY CHALLENGE</p>
        <p className="nc-acc" style={{ margin: "12px 0 3px", fontWeight: 700, fontSize: 11, letterSpacing: ".08em" }}>OBJECTIVE</p>
        <p style={{ margin: 0, fontSize: 12.8, lineHeight: 1.5 }}>Design a Gen Z credit card proposition and acquire as many eligible customers as possible within six months.</p>
        <p className="nc-acc" style={{ margin: "12px 0 3px", fontWeight: 700, fontSize: 11, letterSpacing: ".08em" }}>ROLE</p>
        <p style={{ margin: 0 }}><b>Strategy lead</b></p>
        <p className="nc-acc" style={{ margin: "12px 0 3px", fontWeight: 700, fontSize: 11, letterSpacing: ".08em" }}>TIMELINE</p>
        <p style={{ margin: 0 }}><b>6 months</b></p>
        <p className="nc-acc" style={{ margin: "12px 0 3px", fontWeight: 700, fontSize: 11, letterSpacing: ".08em" }}>DELIVERABLE</p>
        <p style={{ margin: 0 }}><b>Three-page original submission</b></p>
        <p style={{ color: "#9a9aa0", margin: "16px 0 0", letterSpacing: ".12em", fontSize: 10.5 }}>NEXT CARD. FOR WHAT'S NEXT.</p>
      </div>
      <div style={{ background: "#f6f5f2", color: "#141414", padding: "16px 18px" }}>
        <p style={{ fontSize: 17.5, fontWeight: 700, lineHeight: 1.4, margin: 0 }}>A leading Chinese bank had strong penetration among affluent customers but needed a new growth engine. The task was to design a Gen Z credit card proposition and acquire as many eligible customers as possible within <span style={{ color: "#c9330d" }}>six months</span>.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9, marginTop: 12 }} role="group" aria-label="The three challenge questions">{QUESTIONS.map(([t], i) => <button key={t} type="button" onClick={() => setQ(i)} aria-pressed={q === i} style={{ background: "#fff", border: `1.5px solid ${q === i ? ORANGE : "#e2ddd2"}`, borderRadius: 9, color: "#141414", padding: 11, cursor: "pointer", font: "inherit", textAlign: "left", boxShadow: "0 1px 3px rgba(0,0,0,.07)" }}><span style={{ color: "#c9330d", fontSize: 21, fontWeight: 800 }}>{i + 1}.</span><p style={{ fontWeight: 700, margin: "4px 0 0", lineHeight: 1.35 }}>{t}</p></button>)}</div>
        <p aria-live="polite" style={{ margin: "9px 0 0", color: "#4a4a48" }}>{QUESTIONS[q][1]}</p>
        <p style={{ color: "#c9330d", margin: "13px 0 5px", letterSpacing: ".1em", fontWeight: 700 }}>CONSTRAINTS</p>
        <p style={{ margin: 0, display: "flex", gap: 5, flexWrap: "wrap" }}>{CONSTRAINTS.map((c) => <span key={c} style={{ background: "#fff", border: "1px solid #d8d4c8", borderRadius: 999, padding: "5px 11px", fontSize: 12.3 }}>{c}</span>)}</p>
      </div>
    </div>
  </Nc>;
}

/* ---------------- 05 — Success Definition ---------------- */
const LENSES: Array<[string, string, string[]]> = [
  ["Customer desirability", "♡", ["Does this solve a real need for Gen Z?", "Is it simple, relevant and worth using?", "Will it drive advocacy and repeat usage?"]],
  ["Bank viability", "🏛", ["Does this create sustainable economic value?", "Does it strengthen relationships and lifetime value?", "Can we scale it with healthy unit economics?"]],
  ["Operational feasibility", "⚙", ["Can we build and run this reliably at scale?", "Does it integrate with our systems and partners?", "Can we deliver a seamless experience consistently?"]],
  ["Risk responsibility", "🛡", ["Is this compliant and aligned to regulations?", "Are the risks identified, measured and monitored?", "Does it promote financial well-being for Gen Z?"]],
];
export function NextCardSuccess() {
  const [l, setL] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false, false, false]);
  const toggle = (i: number) => setAnswers((a) => a.map((v, j) => (j === i ? !v : v)));
  const done = answers.filter(Boolean).length;
  return <Nc n="05" title="Success Definition" label="Next Card success definition — interactive rebuild of Next_Card_Image_05">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Attractive rewards alone are not enough. True success is where desirability, viability, feasibility and responsibility <span className="nc-acc">overlap</span>. We evaluate every decision through <span className="nc-acc">four equal lenses</span> — growth happens when they converge. All four lenses, as printed — select a lens to highlight it, answer each of its three questions:</p>
    <div style={{ background: "radial-gradient(ellipse 70% 90px at 50% 108%, rgba(255,75,31,.38), rgba(255,75,31,0) 70%)", paddingBottom: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }} role="group" aria-label="Success lenses — all four visible">
        {LENSES.map(([t, icon, qs], i) => <div key={t} onClick={() => setL(i)} style={{ border: `1px solid ${l === i ? ORANGE : "#333438"}`, borderRadius: 10, padding: 10, background: l === i ? "#2a1408" : "#101012", cursor: "pointer" }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 13.5 }}>{icon} {t}</p>
          {(qs as string[]).map((qq, j) => { const idx = i * 3 + j; return <p key={qq} style={{ margin: "8px 0 0", fontSize: 12, lineHeight: 1.4 }}>{qq}<br /><button type="button" className="nc-tab" aria-pressed={answers[idx]} onClick={(e) => { e.stopPropagation(); setL(i); toggle(idx); }} style={{ marginTop: 3, padding: "3px 10px", fontSize: 11.5 }}>{answers[idx] ? "Yes ✓" : "Evaluate"}</button></p>; })}
        </div>)}
      </div>
    </div>
    <p style={{ textAlign: "center", margin: "10px 0 0" }} aria-live="polite"><b style={{ fontSize: 16 }}>Sustainable Gen Z card growth</b> — {done}/12 questions answered yes.<br /><span className="nc-acc" style={{ letterSpacing: ".08em", fontSize: 10.5 }}>DESIRABLE FOR CUSTOMERS. VIABLE FOR THE BANK. FEASIBLE TO OPERATE. RESPONSIBLE BY DESIGN.</span></p>
  </Nc>;
}

/* ---------------- 06 — Original Submission Overview ---------------- */
export function NextCardOriginalSubmission() {
  const [page, setPage] = useState(0);
  return <Nc n="06" title="The Original Response: Three Questions Answered in Three Pages" label="Next Card original submission overview — interactive rebuild of Next_Card_Image_06">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Original submission overview · Right note as printed: “Next Card — Independent by design. Built for what's next.”</p>
    <div style={{ display: "flex", gap: 5 }} role="group" aria-label="Submission pages">{["01 City prioritization and market sizing", "02 Card proposition", "03 Six-month acquisition and activation plan"].map((t, i) => <button key={t} type="button" className="nc-tab" aria-pressed={page === i} onClick={() => setPage(i)}>{t}</button>)}</div>
    <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 12, marginTop: 10 }} aria-live="polite">
      {page === 0 && <div>
        <p style={{ margin: 0 }}>We evaluated 20 Tier-1 and high-growth Tier-2 cities across 6 dimensions to identify the best launch markets. <b>Top 5 launch cities</b> (India map as printed):</p>
        {[["1", "Bengaluru", "83/100"], ["2", "Mumbai", "78/100"], ["3", "Delhi NCR", "76/100"], ["4", "Hyderabad", "72/100"], ["5", "Pune", "68/100"]].map(([r, c, s]) => <p key={c} className="nc-row"><span>{r}. {c}</span><b>Score {s}</b></p>)}
        <p style={{ margin: "8px 0 0" }}>Evaluation framework (weighted): Addressable market size 25% · Affluence and spend potential 20% · Digital adoption 15% · Competitive intensity 15% · Operating efficiency 15% · Regulatory / ease of entry 10%.</p>
        <p style={{ margin: "6px 0 0" }}><b className="nc-acc" style={{ fontSize: 16 }}>18.7M</b> active credit card users · <b className="nc-acc" style={{ fontSize: 16 }}>₹620B</b> annual card spend potential (Total addressable market, Top 5 cities)</p>
        <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>Key takeaways: Bengaluru, Mumbai and Delhi NCR offer the best combination of scale, spend potential and digital readiness. Top 5 cities represent ~38% of India's active credit card users and ~42% of total card spends.</p>
      </div>}
      {page === 1 && <div>
        <p style={{ margin: 0 }}>A premium credit card experience that's simple, transparent and rewarding. Card as printed: Next Card · VISA.</p>
        {[["Rewarding by default", "Up to 5% value back across top spend categories."], ["Truly transparent", "No hidden fees. No joining fee. No forex markup."], ["Digital first, human when it matters", "Seamless app experience with 24/7 expert support."], ["Control in your hands", "Real-time controls, smart limits, and spend insights."]].map(([t, b]) => <p key={t} className="nc-row"><b>{t}</b><span style={{ color: "#c9c9ce" }}>{b}</span></p>)}
        <p style={{ margin: "8px 0 0", display: "flex", gap: 14, flexWrap: "wrap" }}><span><b className="nc-acc" style={{ fontSize: 16 }}>0</b> Joining fee — Forever</span><span><b className="nc-acc" style={{ fontSize: 16 }}>0%</b> Forex markup — On all spends</span><span><b className="nc-acc" style={{ fontSize: 16 }}>Up to 5%</b> Value back — Across categories</span><span><b className="nc-acc" style={{ fontSize: 16 }}>48 hrs</b> Turnaround — From application to card</span><span><b className="nc-acc" style={{ fontSize: 16 }}>100%</b> Digital — Paperless experience</span></p>
        <p style={{ color: "#c9c9ce", margin: "8px 0 0" }}>Target customer: Young, ambitious professionals who value time, transparency and intelligent rewards. Positioning: The independent card for independent minds.</p>
      </div>}
      {page === 2 && <div>
        <p style={{ margin: 0 }}>A phased approach to build awareness, acquire high-quality customers and drive activation and spend.</p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 6 }}><thead><tr>{["", "Month 1 · Foundation", "Month 2 · Awareness", "Month 3–4 · Acquisition", "Month 5–6 · Activation & Engagement"].map((h) => <th key={h} style={{ textAlign: "left", borderBottom: "1px solid #333438", padding: "4px 6px" }}>{h}</th>)}</tr></thead>
          <tbody>
            <tr><td style={{ padding: "4px 6px" }}><b>Objective</b></td><td style={{ padding: "4px 6px" }}>Build the base and key enablers</td><td style={{ padding: "4px 6px" }}>Create awareness and consideration</td><td style={{ padding: "4px 6px" }}>Drive high-quality acquisition</td><td style={{ padding: "4px 6px" }}>Activate, engage and drive primary usage</td></tr>
            <tr><td style={{ padding: "4px 6px" }}><b>Target (cumulative)</b></td><td style={{ padding: "4px 6px" }}><b className="nc-acc">25K</b> Waitlist signups</td><td style={{ padding: "4px 6px" }}><b className="nc-acc">150K</b> Qualified leads</td><td style={{ padding: "4px 6px" }}><b className="nc-acc">300K</b> Applications</td><td style={{ padding: "4px 6px" }}><b className="nc-acc">150K</b> Activated cards</td></tr>
            <tr><td style={{ padding: "4px 6px" }}><b>Success metrics</b></td><td style={{ padding: "4px 6px" }}>Waitlist signups · Cost per waitlist</td><td style={{ padding: "4px 6px" }}>Reach &amp; engagement · Cost per lead</td><td style={{ padding: "4px 6px" }}>Cost per acquisition · Approval rate</td><td style={{ padding: "4px 6px" }}>Activation rate · 30-day active rate · Spend per active card</td></tr>
          </tbody></table>
        <p style={{ margin: "8px 0 0" }}>Six-month funnel outlook: <b>150K</b> Leads → <b>300K</b> Applications → <b>225K</b> Approved → <b>150K</b> Activated · <b className="nc-acc">₹4.5B+</b> total spend potential from activated base (month 6 run-rate).</p>
      </div>}
    </div>
  </Nc>;
}

/* ---------------- 07 — Where to Launch ---------------- */
const SCORECARD: Array<[string, number[]]> = [
  ["Shenzhen", [4.8, 4.8, 4.9, 4.9, 4.7, 4.81]], ["Guangzhou", [4.6, 4.5, 4.6, 4.2, 4.6, 4.50]], ["Shanghai", [4.2, 4.9, 4.7, 4.7, 4.1, 4.43]],
  ["Beijing", [3.6, 4.7, 4.5, 4.3, 3.9, 4.15]], ["Chengdu", [4.0, 4.1, 4.2, 3.6, 3.6, 3.90]], ["Hangzhou", [3.3, 4.2, 4.4, 4.0, 3.5, 3.90]], ["Xi'an", [3.0, 3.6, 3.6, 3.1, 3.2, 3.26]],
];
const GENZ_BARS: Array<[string, number]> = [["Shenzhen", 5.3], ["Guangzhou", 4.8], ["Shanghai", 4.6], ["Chengdu", 3.9], ["Beijing", 3.6], ["Hangzhou", 2.7], ["Xi'an", 2.5]];

/* Pass 7: schematic Greater Bay Area SVG map — city positions and links
   transcribed from the printed maps (files 07/14); all labels are DOM text. */
const GBA_CITIES: Array<[string, number, number, boolean]> = [
  ["Zhaoqing", 52, 62, false], ["Foshan", 108, 76, false], ["Guangzhou", 148, 56, true], ["Dongguan", 198, 76, false], ["Huizhou", 252, 54, false],
  ["Jiangmen", 92, 118, false], ["Zhongshan", 138, 112, false], ["Zhuhai", 142, 150, false], ["Macau", 168, 154, false], ["Shenzhen", 216, 122, true], ["Hong Kong", 232, 150, false],
];
function GbaSvg({ h = 210 }: { h?: number }) {
  const pos = Object.fromEntries(GBA_CITIES.map(([n, x, y]) => [n, [x, y]]));
  const links: Array<[string, string]> = [["Guangzhou", "Foshan"], ["Guangzhou", "Dongguan"], ["Guangzhou", "Zhongshan"], ["Guangzhou", "Shenzhen"], ["Dongguan", "Shenzhen"], ["Shenzhen", "Hong Kong"], ["Zhongshan", "Zhuhai"], ["Foshan", "Jiangmen"], ["Huizhou", "Dongguan"]];
  return <svg viewBox="0 0 320 190" style={{ width: "100%", height: h, display: "block", background: "radial-gradient(circle at 62% 62%, #2a1408, #0a0a0c 72%)", borderRadius: 10, border: "1px solid #2c2d30" }} role="img" aria-label="Greater Bay Area map: Guangzhou and Shenzhen core launch cities linked to Foshan, Dongguan, Huizhou, Zhongshan, Jiangmen, Zhuhai, Macau, Zhaoqing and Hong Kong">
    {links.map(([a, b]) => <line key={a + b} x1={pos[a][0]} y1={pos[a][1]} x2={pos[b][0]} y2={pos[b][1]} stroke={a === "Guangzhou" && b === "Shenzhen" ? ORANGE : "#4a4b50"} strokeWidth={a === "Guangzhou" && b === "Shenzhen" ? 2 : 1} strokeDasharray={a === "Guangzhou" && b === "Shenzhen" ? undefined : "3 3"} />)}
    <path d="M216,122 Q182,84 148,56" fill="none" stroke={ORANGE} strokeWidth="1.6" />
    {GBA_CITIES.map(([n, x, y, core]) => <g key={n}><circle cx={x} cy={y} r={core ? 7 : 4} fill={core ? ORANGE : "#17181a"} stroke={core ? "#ffb59d" : "#8a8d93"} strokeWidth="1.4" />{core && <circle cx={x} cy={y} r="13" fill="none" stroke={ORANGE} opacity="0.5" />}<text x={x} y={y - 11} fill={core ? "#ff8a66" : "#c9c9ce"} fontSize={core ? 10.5 : 8.8} fontWeight={core ? 800 : 400} textAnchor="middle">{n}</text></g>)}
  </svg>;
}

export function NextCardWhereToLaunch() {
  const [city, setCity] = useState(0);
  const CRIT = ["Adult Gen Z Size (25%)", "Spending Power (20%)", "Digital Readiness (20%)", "Fintech Ecosystem (15%)", "Strategic Fit & Gateway (20%)"];
  return <Nc n="07" title="Where to Launch" label="Next Card where to launch — interactive rebuild of Next_Card_Image_07">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Individual Proposal · Page 1 — Launch Shenzhen + Guangzhou as one connected ecosystem to win the Greater Bay Area and build national optionality.</p>
    <p style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "4px 0 10px" }}><span>Addressable Adult Gen Z (18–27) in GBA <b className="nc-acc" style={{ fontSize: 17 }}>17.2M</b> Modeled · ~32% of GBA adult population</span><span>Shenzhen + Guangzhou Adult Gen Z <b className="nc-acc" style={{ fontSize: 17 }}>10.1M</b> Modeled · ~59% of GBA adult Gen Z</span><span>Total GBA GDP (2024) <b className="nc-acc" style={{ fontSize: 17 }}>¥14.0T</b> CNY Nominal · ~11% of China</span><span>Digital Payments Penetration (GBA) <b className="nc-acc" style={{ fontSize: 17 }}>96%+</b> eMarketer 2024</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1.25fr 1fr", gap: 12, alignItems: "start" }}>
      <div>
        <p className="nc-acc" style={{ margin: "0 0 4px", fontWeight: 700, letterSpacing: ".06em", fontSize: 12 }}>CITY PRIORITIZATION (WEIGHTED SCORECARD) — scored 1 (low) to 5 (high); click a city row</p>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.8 }}>
          <thead><tr><th style={{ textAlign: "left", padding: "3px 5px", borderBottom: "1px solid #333438" }}>City</th>{["GenZ", "Spend", "Digital", "Fintech", "Fit", "Total"].map((h) => <th key={h} style={{ padding: "3px 4px", borderBottom: "1px solid #333438", color: "#9a9aa0" }}>{h}</th>)}</tr></thead>
          <tbody>{SCORECARD.map(([c, sc], i) => <tr key={c} onClick={() => setCity(i)} style={{ cursor: "pointer", background: city === i ? "#2a1408" : i < 2 ? "#170c06" : "transparent" }}>{[c, ...sc].map((v, ci) => <td key={ci} style={{ padding: "4px 5px", borderBottom: "1px solid #232426", textAlign: ci ? "center" : "left", fontWeight: ci === 0 || ci === 6 ? 700 : 400, color: ci === 6 ? ORANGE : "#fff" }}>{typeof v === "number" ? (ci === 6 ? v.toFixed(2) : v) : v}</td>)}</tr>)}</tbody>
        </table>
        <p style={{ color: "#9a9aa0", margin: "6px 0 0", fontSize: 11.5 }}>Criteria: {CRIT.join(" · ")}. Note: Weights reflect strategic priorities for market entry and scaling. Scores are based on 2024 public data and internal assessment.</p>
        <p aria-live="polite" style={{ margin: "6px 0 0", fontSize: 12 }}>Selected: <b>{SCORECARD[city][0]}</b> → <b className="nc-acc">Weighted Score {SCORECARD[city][1][5].toFixed(2)} /5</b>{city < 2 ? " — highlighted as a launch city on the printed scorecard." : ""}</p>
      </div>
      <div>
        <p className="nc-acc" style={{ margin: "0 0 4px", fontWeight: 700, letterSpacing: ".06em", fontSize: 12 }}>GREATER BAY AREA (GBA) — ONE CONNECTED MARKET</p>
        <GbaSvg />
        <p style={{ margin: "6px 0 0", color: "#c9c9ce", fontSize: 12 }}>Population ~86M | GDP ¥14.0T (2024) | 9 Cities, 1 Economic Engine. Legend: High-speed Rail (&lt;1hr) · Expressway (&lt;1hr) · Core Launch Cities · Key GBA Cities.</p>
      </div>
      <div>
        <p className="nc-acc" style={{ margin: "0 0 4px", fontWeight: 700, letterSpacing: ".06em", fontSize: 12 }}>ADDRESSABLE ADULT GEN Z (18–27) — TOP CHINESE CITIES (MILLIONS, MODELED)</p>
        {GENZ_BARS.map(([c, v]) => <p key={c} style={{ margin: "4px 0", display: "flex", alignItems: "center", gap: 8, fontSize: 12.5 }}><span style={{ width: 70 }}>{c}</span><span style={{ flex: 1, background: "#232426", height: 10, borderRadius: 3 }}><span style={{ display: "block", width: `${(v / 5.3) * 100}%`, height: "100%", background: c === "Shenzhen" || c === "Guangzhou" ? ORANGE : "#6b6b70", borderRadius: 3 }} /></span><b>{v.toFixed(1)}M</b></p>)}
        <p style={{ margin: "6px 0 0", fontSize: 12 }}>Shenzhen + Guangzhou = <b className="nc-acc">10.1M — 59% of GBA Adult Gen Z (Modeled)</b> · GBA Total <b className="nc-acc">17.2M</b> Adult Gen Z (18–27), Modeled. Source: National Bureau of Statistics, local statistical bureaus, QuestMobile TRUTH 2024, iResearch 2024, internal modeling (Modeled).</p>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, marginTop: 12, background: "#f5f5f3", color: "#141414", borderRadius: 10, padding: "12px 14px" }}>
      <div style={{ paddingRight: 12 }}><p style={{ margin: 0, fontWeight: 800, color: "#c9330d" }}>◎ DECISION</p><p style={{ fontWeight: 700, margin: "4px 0" }}>Launch Shenzhen + Guangzhou as one connected ecosystem.</p><p style={{ color: "#4a4a48", margin: 0 }}>Build one product, one brand, one operations backbone across two engines to dominate the GBA.</p></div>
      <div style={{ borderLeft: "1px solid #d8d4c8", padding: "0 12px" }}><p style={{ margin: 0, fontWeight: 800, color: "#c9330d" }}>EVIDENCE</p><ul style={{ margin: "4px 0 0", paddingLeft: 16, color: "#33322e" }}><li>Shenzhen + Guangzhou score highest on weighted prioritization.</li><li>10.1M addressable Adult Gen Z — 59% of GBA total (Modeled).</li><li>Highest fintech density, merchant digitization, and capital access.</li><li>Strong intra-city and inter-city connectivity enables one ecosystem.</li></ul></div>
      <div style={{ borderLeft: "1px solid #d8d4c8", paddingLeft: 12 }}><p style={{ margin: 0, fontWeight: 800, color: "#c9330d" }}>BUSINESS IMPLICATION</p><ul style={{ margin: "4px 0 0", paddingLeft: 16, color: "#33322e" }}><li>Faster scale: dual-engine growth with network effects.</li><li>Lower CAC: leverage cross-city spillover and brand flywheel.</li><li>Strong unit economics: higher ARPU potential and LTV.</li><li>Platform optionality: expand to GBA cities, then nationwide.</li></ul></div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Note: All figures are 2024 unless stated otherwise. “Modeled” indicates internal estimates based on available data and assumptions. · Next Card Confidential · May 2025.</p>
  </Nc>;
}

/* ---------------- 08 — What to Build ---------------- */
const NEEDS = [
  ["Daily Spend Rewards", "Users want real value on everyday spends without complex conditions."],
  ["Digital Lifestyle Privileges", "Users want access to premium digital entertainment and convenience."],
  ["Local City Perks", "Users seek exclusive offers that make their city life more rewarding."],
  ["Social and Referral Rewards", "Users value recognition and rewards when they share with friends."],
  ["Credit Growth Support", "Users want financial growth tools that help build a strong credit profile."],
  ["Responsible Lifestyle", "Users appreciate tools and nudges that promote mindful spending."],
];
export function NextCardWhatToBuild() {
  const [nIdx, setNIdx] = useState(0);
  const needBtn = ([t, b]: string[], i: number) => <button key={t} type="button" onClick={() => setNIdx(i)} aria-pressed={nIdx === i} style={{ display: "block", width: "100%", textAlign: "left", background: nIdx === i ? "#2a1408" : "#17181a", border: `1px solid ${nIdx === i ? ORANGE : "#333438"}`, borderRadius: 8, color: "#fff", padding: "9px 11px", marginBottom: 7, cursor: "pointer", font: "inherit" }}><span className="nc-acc">{String(i + 1).padStart(2, "0")}</span> <b>{t}</b><br /><span style={{ color: "#c9c9ce" }}>{b}</span></button>;
  return <Nc n="08" title="What to Build: Next Card" label="Next Card what to build — interactive rebuild of Next_Card_Image_08">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Individual Proposal · Page 2 — Next Card is a lifestyle credit card built for India's new-age consumers. It rewards everyday spending, fuels aspirations, and builds financial confidence. <span style={{ float: "right" }}>FROM <span className="nc-acc">USER NEEDS</span> ⟶ TO <span className="nc-acc">BANK OUTCOMES</span></span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 218px 1fr", gap: 14, alignItems: "center" }}>
      <div role="group" aria-label="User needs 1 to 3">{NEEDS.slice(0, 3).map((n, i) => needBtn(n, i))}</div>
      <div style={{ textAlign: "center", padding: "22px 14px", border: "1px solid #3a2320", borderRadius: 14, background: "radial-gradient(circle at 50% 40%, #571f0d, #101012 72%)", boxShadow: "0 0 44px rgba(255,75,31,.22)" }} aria-live="polite">
        <p style={{ letterSpacing: ".2em", margin: 0 }}>NEXT<br />CARD</p>
        <p style={{ fontSize: 27, margin: "12px 0" }}>▮▮▮▯</p>
        <p style={{ margin: 0 }}><b>VISA</b> <span style={{ color: "#c9c9ce" }}>Signature</span></p>
        <p style={{ color: "#c9c9ce", letterSpacing: ".14em", margin: "9px 0 0" }}>AARAV MEHTA</p>
        <p style={{ margin: "12px 0 0", fontSize: 12.3 }}>Selected need:<br /><b>{NEEDS[nIdx][0]}</b></p>
      </div>
      <div role="group" aria-label="User needs 4 to 6">{NEEDS.slice(3).map((n, i) => needBtn(n, i + 3))}</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 14, borderTop: "1px solid #2c2d30", paddingTop: 12 }}>
      <div><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>◎ Decision</p><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>Build Next Card as a lifestyle-first credit card that delivers real rewards, relevant privileges, and financial empowerment for young India.</p></div>
      <div><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>Evidence</p><ul style={{ margin: "4px 0 0", paddingLeft: 16, color: "#c9c9ce" }}><li>Lifestyle rewards drive higher card usage and retention.</li><li>Digital and local perks influence card preference.</li><li>Credit building tools increase engagement and loyalty.</li><li>Referral incentives lower acquisition cost significantly.</li></ul></div>
      <div><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>Business implication</p><ul style={{ margin: "4px 0 0", paddingLeft: 16, color: "#c9c9ce" }}><li>Stronger activation and daily usage.</li><li>Higher spend growth and wallet share.</li><li>Lower churn with engaged, loyal customers.</li><li>Efficient acquisition through advocacy and referrals.</li></ul></div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0", letterSpacing: ".1em" }}>NEXT CARD PROPOSAL | BUILDING INDIA'S MOST REWARDING LIFESTYLE CREDIT CARD</p>
  </Nc>;
}

/* ---------------- 09 — How to Acquire and Activate ---------------- */
const JOURNEY = [
  ["Reach", "Expose and attract the right audience.", "Impressions · Cost per reach"],
  ["Interest", "Spark interest and drive deeper engagement.", "Click-through rate · Engagement rate · Video completion rate · Follower growth"],
  ["Application", "Make it simple and trustworthy to apply.", "Application rate · Application start rate · Cost per application"],
  ["Approval", "Assess risk fast and communicate clearly.", "Approval rate · Time to decision"],
  ["Activation", "Activate the card and onboard digitally.", "Activation rate · Digital wallet add rate"],
  ["First spend", "Drive first transaction and build habit.", "First spend rate · Time to first spend · First 30-day spend"],
  ["Referral", "Turn satisfied users into growth advocates.", "Referral rate · Invites per user · Referral conversion rate"],
];
const CHANNELS: Array<[string, string, Array<[string, string]>]> = [
  ["Douyin", "Short video", [["Reach", "Mass reach ●●●●●"], ["Interest", "High engagement ●●●○○"], ["Application", "Direct redirect ●●●○○"], ["Approval", "— Not primary role"], ["Activation", "Wallet onboarding ●●●○○"], ["First spend", "Campaign push ●●●●○"], ["Referral", "Creator incentives ●●●●○"]]],
  ["Xiaohongshu", "Lifestyle", [["Reach", "Targeted reach ●●●●○"], ["Interest", "Trust building (UGC) ●●●●○"], ["Application", "In-app apply guide ●●●○○"], ["Approval", "— Not primary role"], ["Activation", "Lifestyle content ●●○○○"], ["First spend", "Shopping scenarios ●●●●○"], ["Referral", "UGC sharing ●●●●○"]]],
  ["Bilibili", "Youth community", [["Reach", "Community reach ●●●○○"], ["Interest", "Content education ●●●○○"], ["Application", "UP主 links & banner ●●●●○"], ["Approval", "— Not primary role"], ["Activation", "Fun onboarding ●●○○○"], ["First spend", "ACG & lifestyle ●●○○○"], ["Referral", "Community challenges ●●●●○"]]],
  ["Campus", "Students", [["Reach", "On-campus events ●●●●●"], ["Interest", "Peer influence ●●●○○"], ["Application", "On-site sign-up ●●●●○"], ["Approval", "Priority review ●●●●○"], ["Activation", "Student pack ●●○○○"], ["First spend", "Canteen, retail ●●●●○"], ["Referral", "Ambassador program ●●●●○"]]],
  ["Merchants", "Offline & Online", [["Reach", "In-store presence ●●●●●"], ["Interest", "Offers & signage ●●●●○"], ["Application", "QR apply ●●●○○"], ["Approval", "— Not primary role"], ["Activation", "Instant issuing ●●○○○"], ["First spend", "Merchant offers ●●●●○"], ["Referral", "Merchant + user dual rewards ●●●●○"]]],
  ["Bank App", "Distribution", [["Reach", "Existing user base ●●○○○"], ["Interest", "Product recommendation ●●●○○"], ["Application", "Pre-filled application ●●●●●"], ["Approval", "Risk pre-evaluation ●●●○○"], ["Activation", "In-app activation ●●●●○"], ["First spend", "Bank-card linkage ●●●○○"], ["Referral", "Cross-sell invitation ●●●○○"]]],
  ["Referrals", "Advocacy", [["Reach", "User network ●●●●○"], ["Interest", "Social proof ●●●●○"], ["Application", "Invite link ●●●●○"], ["Approval", "— Not primary role"], ["Activation", "Welcome bonus ●●○○○"], ["First spend", "Milestone reward ●●○○○"], ["Referral", "Cashback / points ●●●●○"]]],
];
const PHASES: Array<[string, string[]]> = [
  ["Month 1 · Foundation", ["Finalize positioning & offer", "Build landing pages & tracking", "Seed content & creator test", "Launch pilot on Douyin & bank app"]],
  ["Month 2 · Pilot & Learn", ["Scale top-performing channels", "Optimize creatives & funnel", "Launch campus pilot", "Improve approval efficiency"]],
  ["Month 3 · Expand", ["Add Xiaohongshu & Bilibili scale", "Expand merchant partnerships", "Launch student card pack", "Strengthen onboarding flow"]],
  ["Month 4 · Accelerate", ["Broader geo rollout", "Increase media investment", "Launch referral program", "First spend campaigns"]],
  ["Month 5 · Optimize", ["Data-driven optimization", "Improve activation & retention", "Deepen bank app integration", "Expand wallet partnerships"]],
  ["Month 6 · Scale & Sustain", ["Scale winning channels", "Enhance rewards & benefits", "Build habit & loyalty programs", "Plan next wave of growth"]],
];
export function NextCardAcquire() {
  const [j, setJ] = useState(0);
  return <Nc n="09" title="How to Acquire and Activate" label="Next Card acquire and activate — interactive rebuild of Next_Card_Image_09">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Page 3 / 3 — A full-funnel strategy to efficiently acquire, activate and grow high-value cardholders. Proposal contents as printed: 01 Executive summary · 02 Market opportunity · 03 Target customer · 04 Value proposition · 05 Product experience · <b style={{ color: "#fff" }}>06 Go-to-market</b> · 07 Financial projection · 08 Roadmap.</p>
    <p className="nc-acc" style={{ margin: "0 0 4px", fontWeight: 700, letterSpacing: ".08em" }}>FULL-FUNNEL CUSTOMER JOURNEY — the printed white table; select a stage column to highlight it</p>
    <div style={{ background: "#f6f5f2", color: "#141414", borderRadius: 10, padding: "10px 12px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead><tr>{JOURNEY.map(([t], i) => <th key={t} onClick={() => setJ(i)} style={{ textAlign: "left", padding: "5px 7px", borderBottom: "2px solid #141414", cursor: "pointer", background: j === i ? "#ffe3d9" : "transparent", color: "#c9330d" }}>{String(i + 1).padStart(2, "0")} {t.toUpperCase()}</th>)}</tr></thead>
        <tbody>
          <tr>{JOURNEY.map(([t, d], i) => <td key={t} onClick={() => setJ(i)} style={{ padding: "6px 7px", borderBottom: "1px solid #d8d4c8", cursor: "pointer", background: j === i ? "#fff1ea" : "transparent", verticalAlign: "top" }}>{d}</td>)}</tr>
          <tr>{JOURNEY.map(([t, , kpi], i) => <td key={t} onClick={() => setJ(i)} style={{ padding: "6px 7px", cursor: "pointer", background: j === i ? "#fff1ea" : "transparent", verticalAlign: "top", color: "#4a4a48" }}><span style={{ fontSize: 10, letterSpacing: ".06em", color: "#8a8578" }}>KPI</span><br />{kpi}</td>)}</tr>
        </tbody>
      </table>
    </div>
    <p className="nc-acc" style={{ margin: "12px 0 4px", fontWeight: 700, letterSpacing: ".08em" }}>CHANNEL STRATEGY (ROLE BY FUNNEL STAGE) — full matrix, as printed · role strength: ●●●●● Strong · ●●●○○ Medium · ●●○○○ Light · — Not primary role</p>
    <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.8, lineHeight: 1.35 }}>
      <thead><tr><th style={{ textAlign: "left", padding: "4px 6px", borderBottom: "1px solid #333438" }}>Channel</th>{JOURNEY.map(([t]) => <th key={t} style={{ textAlign: "left", padding: "4px 6px", borderBottom: "1px solid #333438", color: "#9a9aa0" }}>{t}</th>)}</tr></thead>
      <tbody>{CHANNELS.map(([name, sub, roles]) => <tr key={name}><td style={{ padding: "4px 6px", borderBottom: "1px solid #232426" }}><b>{name}</b><br /><span style={{ color: "#9a9aa0" }}>{sub}</span></td>{roles.map(([stage, role]) => <td key={stage} style={{ padding: "4px 6px", borderBottom: "1px solid #232426", color: "#d8d8dc" }}>{role}</td>)}</tr>)}</tbody>
    </table></div>
    <p className="nc-acc" style={{ margin: "12px 0 4px", fontWeight: 700, letterSpacing: ".08em" }}>SIX-MONTH PHASED PLAN — all six phases</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>{PHASES.map(([t, items]) => <div key={t} style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b style={{ fontSize: 12.5 }}>{t}</b><ul style={{ margin: "4px 0 0", paddingLeft: 15, color: "#c9c9ce", fontSize: 12.3 }}>{(items as string[]).map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
    <p style={{ margin: "10px 0 0", display: "flex", gap: 14, flexWrap: "wrap" }}><b>CORE KPIs</b> (Monthly Targets by Month 6): <span>Reach <b className="nc-acc">50M+</b></span><span>Applications <b className="nc-acc">300K+</b></span><span>Approval Rate <b className="nc-acc">35%+</b></span><span>Activation Rate <b className="nc-acc">70%+</b></span><span>First Spend Rate <b className="nc-acc">60%+</b></span><span>30-Day Active Rate <b className="nc-acc">45%+</b></span><span>CAC <b className="nc-acc">&lt; ¥120</b></span><span>Referral Rate <b className="nc-acc">25%+</b></span></p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, marginTop: 12, background: "#000", border: "1px solid #333438", borderRadius: 10, padding: "11px 13px" }}>
      <div style={{ paddingRight: 12 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>Decision</p><p style={{ color: "#e8e8ea", margin: "4px 0 0" }}>Approve the go-to-market strategy and budget to execute a data-driven, full-funnel plan across priority channels, with a focus on activation and first spend.</p></div>
      <div style={{ borderLeft: "1px solid #2c2d30", padding: "0 12px" }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>Evidence</p><ul style={{ margin: "4px 0 0", paddingLeft: 16, color: "#e8e8ea" }}><li>Short video and lifestyle platforms deliver the lowest CAC in fintech.</li><li>Students show higher approval and activation with tailored offers.</li><li>First spend within 7 days is the strongest predictor of 30-day retention.</li><li>Referrals reduce CAC by 30–50% and improve long-term value.</li></ul></div>
      <div style={{ borderLeft: "1px solid #2c2d30", paddingLeft: 12 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>Business implication</p><p style={{ color: "#e8e8ea", margin: "4px 0 0" }}>This strategy builds a scalable acquisition engine, improves activation quality, and drives sustainable growth in cardholder base, spend volume, and lifetime value.</p></div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Built for the next move. · nextcard.com</p>
  </Nc>;
}

/* ---------------- 10 — Research Source Map ---------------- */
const STREAMS: Array<[string, string[], string, string, string, string[]]> = [
  ["Population and demographics", ["National & city-level census data", "Birth cohort and Gen Z size", "Urbanization and migration"], "National Bureau of Statistics, 2020–2023", "Gen Z (≈1995–2010) is ~249M people, ~18% of population. Tier 1–2 cities concentrate ~46%. (Modeled)", "", ["Prioritize Tier 1–2 youth clusters", "Campus and tech hub focus", "Localized campaigns"]],
  ["Consumer spending", ["Household consumption by category", "Discretionary spend by age group", "Price sensitivity indicators"], "NBS, iResearch, 2023 (Estimated)", "Discretionary spend is rising in entertainment, dining, travel, and self-improvement. (Estimated)", "", ["Build rewards on lifestyle spend", "Dynamic offers for F&B, travel, entertainment", "Price fairness and transparency"]],
  ["Digital payments and app behavior", ["Mobile payment penetration", "App DAU/MAU and session time", "Feature usage and retention"], "QuestMobile, 2023 (Estimated)", "Mobile payments are default. Super app usage is high; short sessions, high frequency. (Estimated)", "", ["App-first experience", "One-tap pay, budget tools, real-time alerts", "Habit-forming product flows"]],
  ["University and employment density", ["University density by city", "Graduate supply by discipline", "Youth unemployment rate"], "Ministry of Education, 2023; Zhaopin, 2023 (Estimated)", "High university density in Tier 1–2 cities and strong graduate supply in new economy fields. (Modeled)", "", ["Campus ambassador program", "Graduate-onboarding offers", "Internships and early career benefits"]],
  ["Merchant ecosystem", ["Merchant count by category", "Acceptance of digital payments", "Top spend categories by city"], "Meituan, Dianping, 2023 (Estimated)", "Lifestyle merchants and F&B dominate spend; SMEs need affordable acceptance. (Estimated)", "", ["Deep partnerships with lifestyle merchants", "Co-marketing and in-app offers", "Simplify merchant onboarding"]],
  ["Banking and credit distribution", ["Credit card issuance by age", "Credit penetration by city tier", "Unsecured credit distribution"], "PBOC, 2023 (Modeled)", "Young adults are underbanked on credit; approvals tight in lower tiers and early career. (Modeled)", "", ["Build inclusive credit model", "Step-up credit line", "Clear terms and responsible credit tools"]],
  ["Media and acquisition channels", ["Channel reach and frequency", "Cost per acquisition by channel", "Content affinity and engagement"], "QuestMobile, CTR, 2023 (Estimated)", "Short video, social, and campus communities drive discovery and trust. (Estimated)", "", ["Short video + KOL seeding", "Community content and UGC", "Performance marketing blend"]],
  ["Competitor card propositions", ["Competitor features and fees", "Rewards and partnerships", "Positioning and target segments"], "Company filings, apps, websites, 2023", "Competitors lead on points and miles; gaps in personalization, transparency, and youth-first experience. (Estimated)", "", ["Differentiate on personalization", "Transparent value, no hidden fees", "Youth-first design and tone"]],
];
export function NextCardSourceMap() {
  const [r, setR] = useState(0);
  return <Nc n="10" title="Research Source Map" label="Next Card research source map — interactive rebuild of Next_Card_Image_10">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}><b style={{ color: "#fff" }}>Purpose</b> — Build Next Card on a robust evidence system. Eight research streams flow from Source to Insight to Decision. <b style={{ color: "#fff" }}>How to read</b> — each row shows one research category; arrows indicate the flow from evidence to insight to a concrete decision.</p>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "4px 0 10px" }} role="img" aria-label="Central hub: Evidence to Insight to Decision">
      {["Evidence", "Insight", "Decision"].map((h, i) => <span key={h} style={{ display: "contents" }}>{i > 0 && <span className="nc-acc" style={{ fontSize: 18 }}>→</span>}<span style={{ width: 86, height: 86, borderRadius: "50%", border: `2px solid ${ORANGE}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, letterSpacing: ".06em", background: "radial-gradient(circle, #2a1408, #101012 75%)", flex: "none" }}>{h.toUpperCase()}</span></span>)}
      <span style={{ color: "#c9c9ce", maxWidth: "34ch" }}>One evidence system, clear decisions — the hub at the centre of the printed map. All eight streams below feed it.</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr 1fr 1fr", gap: 0, fontSize: 11.8, lineHeight: 1.42 }}>
      {["RESEARCH STREAM", "SOURCE (EVIDENCE)", "INSIGHT (WHAT IT TELLS US)", "DECISION (HOW WE ACT)"].map((h) => <p key={h} className="nc-acc" style={{ margin: 0, fontWeight: 700, letterSpacing: ".05em", padding: "4px 7px", borderBottom: "1px solid #333438" }}>{h}</p>)}
      {STREAMS.map((row, i) => <div key={row[0]} style={{ display: "contents" }}>
        <div onClick={() => setR(i)} style={{ padding: "6px 7px", borderBottom: "1px solid #232426", background: r === i ? "#2a1408" : "transparent", cursor: "pointer" }}><b><span className="nc-acc">{String(i + 1).padStart(2, "0")}</span> {row[0]}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.8 }}>{row[2]}</span></div>
        <div style={{ padding: "6px 7px", borderBottom: "1px solid #232426", background: r === i ? "#1c0d06" : "transparent" }}><ul style={{ margin: 0, paddingLeft: 14 }}>{row[1].map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div style={{ padding: "6px 7px", borderBottom: "1px solid #232426", background: r === i ? "#1c0d06" : "transparent" }}>{row[3]}</div>
        <div style={{ padding: "6px 7px", borderBottom: "1px solid #232426", background: r === i ? "#1c0d06" : "transparent" }}><ul style={{ margin: 0, paddingLeft: 14 }}>{row[5].map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div>)}
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Evidence quality key — Strong evidence (Official data / Platform data) · Moderate evidence (Industry reports / Surveys / Modeled) · <span className="nc-acc">Modeled</span> Built from data and assumptions · <span className="nc-acc">Estimated</span> Directional, for planning use. Notes: all numbers are illustrative; marked as Modeled or Estimated; sources include public data, industry reports, platform data (partnered), surveys, and internal analysis. All numbers are illustrative and for internal planning only.</p>
  </Nc>;
}

/* ---------------- 11 — Key Research Findings ---------------- */
const FINDINGS = [
  ["Gen Z density is insufficient without credit eligibility.", "In campuses with high Gen Z density, modeled eligible-applicant rate is the strongest predictor of approved applications. (Modeled)", "Prioritize eligibility modeling and pre-qualification to focus acquisition on convertible demand."],
  ["High mobile-payment adoption reduces application friction.", "Users in high mobile-payment-penetration areas show higher digital application completion rates. (Estimated)", "Lead with fully digital journeys and one-tap verification to convert intent into approved applications."],
  ["Merchant density influences activation and repeat usage.", "Activation and 30-day repeat usage are higher in areas with greater next-gen merchant density. (Estimated)", "Expand partnerships in youth-concentrated commercial zones and digital-first merchants."],
  ["University and young-professional clusters enable efficient offline acquisition.", "Campus and nearby business districts deliver lower cost-per-approval and higher first-activation rates. (Estimated)", "Deploy targeted campus programs and employer partnerships to scale high-quality pipeline."],
  ["High-frequency daily categories are more useful than occasional luxury rewards.", "Spend concentration is highest in daily categories; users value practical savings over aspirational rewards. (Estimated)", "Design rewards and offers around daily life — food, beverage, transport, and study."],
  ["Responsible credit-building can differentiate the card beyond discounts.", "Users show strong interest in credit tracking, limit growth, and repayment tools. (Estimated)", "Build trust with transparent credit-building tools that support long-term financial health."],
];
export function NextCardFindings() {
  const [f, setF] = useState(0);
  return <Nc n="11" title="Key Research Findings" label="Next Card key research findings — interactive rebuild of Next_Card_Image_11">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Six insights that shape the Next Card strategy. Notes on data: all figures are illustrative and used for directional insight only; Modeled or Estimated where indicated. Deck contents as printed: 01 Overview · 02 Opportunity · 03 User Insight · 04 Proposition · 05 Experience · 06 Model · 07 Impact · <b style={{ color: "#fff" }}>11 Key Research Findings</b> · 12 Next Steps. Each card carries its own Evidence and Implication, as printed — select a card to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9 }} role="group" aria-label="Findings — six cards with evidence and implication">
      {FINDINGS.map(([t, ev, imp], i) => <div key={t} onClick={() => setF(i)} style={{ background: f === i ? "#2a1408" : "#121315", border: `1px solid ${f === i ? ORANGE : "#333438"}`, borderRadius: 10, padding: 11, cursor: "pointer", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", right: -14, top: -22, width: 52, height: 52, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,75,31,.35), transparent 70%)" }} />
        <p style={{ margin: 0 }}><span className="nc-acc" style={{ fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span></p>
        <p style={{ fontWeight: 700, margin: "4px 0 8px", lineHeight: 1.35 }}>{t}</p>
        <div style={{ borderTop: "1px solid #2c2d30", paddingTop: 7 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700, fontSize: 10.5, letterSpacing: ".07em" }}>EVIDENCE</p><p style={{ color: "#d8d8dc", margin: "3px 0 0", fontSize: 12.3, lineHeight: 1.45 }}>{ev}</p></div>
        <div style={{ borderTop: "1px solid #2c2d30", paddingTop: 7, marginTop: 8 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700, fontSize: 10.5, letterSpacing: ".07em" }}>IMPLICATION</p><p style={{ color: "#d8d8dc", margin: "3px 0 0", fontSize: 12.3, lineHeight: 1.45 }}>{imp}</p></div>
      </div>)}
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Source: Internal analysis, third-party industry data, user research · Note: All numbers are illustrative. Modeled or Estimated.</p>
  </Nc>;
}

/* ---------------- 12 — Assumptions Register ---------------- */
const ASSUMPTIONS: Array<[string, Array<[string, string, string, string, string, string]>]> = [
  ["Market & Demographics", [
    ["Gen Z population (aged 18–27) in Tier 1–3 cities", "~160 million (Modeled)", "National Bureau of Statistics (2023); iResearch (2023)", "Population aged 18–27 × % in Tier 1–3 cities", "Observed", "Medium"],
    ["Credit card penetration among Gen Z", "~32% (Estimated)", "PBOC (2023); Industry reports", "Cards held by Gen Z / Gen Z population", "Estimated", "High"],
    ["Addressable Gen Z market", "~51 million (Modeled)", "Derived", "160m × 32%", "Modeled", "High"],
  ]],
  ["Acquisition Funnel", [
    ["Ad impressions to app install rate", "~9.5% (Estimated)", "Digital marketing benchmarks (2023)", "Installs / Ad impressions", "Estimated", "Medium"],
    ["App install to sign-up rate", "~68% (Estimated)", "Fintech onboarding benchmarks (2023)", "Sign-ups / Installs", "Estimated", "Medium"],
    ["Sign-up to card approval rate", "~42% (Estimated)", "Industry benchmarks (2023)", "Approved / Sign-ups", "Estimated", "High"],
    ["Cost per approved card (CPA)", "¥88 (Estimated)", "Marketing plan & vendor quotes (2024)", "Total acquisition cost / Approved cards", "Estimated", "High"],
  ]],
  ["Usage & Behavior", [
    ["Active rate (monthly, at 3 months)", "~62% (Estimated)", "Industry benchmarks (2023)", "Active cards in month / Cards issued", "Estimated", "Medium"],
    ["Monthly transacting users – steady state", "~78% (Modeled)", "Cohort behavior model", "Modeled cohort retention & seasonality", "Modeled", "Medium"],
    ["Monthly spend per active user", "¥2,800 (Estimated)", "Industry reports (2023); Internal research", "Average monthly card spend", "Estimated", "High"],
    ["Take rate (interchange + fees)", "~1.6% (Estimated)", "Industry reports (2023)", "Total take rate on TPV", "Estimated", "High"],
  ]],
  ["Economics & Unit Costs", [
    ["Annual fee (standard card)", "¥0 (Proposed)", "Product strategy", "No annual fee", "Proposed", "Low"],
    ["Cost to serve per active user per month", "¥12.5 (Estimated)", "Internal cost model (2024)", "Total operating cost / Active users / 12", "Estimated", "Medium"],
    ["Contribution margin per active user per month", "¥28 (Modeled)", "Financial model", "(Take rate × Spend) − Cost to serve", "Modeled", "High"],
  ]],
  ["Credit & Risk", [
    ["90+ DPD (12M rolling)", "~1.8% (Estimated)", "Industry benchmarks (2023)", "90+ days delinquent / Outstanding balance", "Estimated", "High"],
    ["Charge-off rate (12M rolling)", "~1.2% (Estimated)", "Industry benchmarks (2023)", "Write-offs / Average outstanding balance", "Estimated", "High"],
    ["LGD (given default)", "~45% (Estimated)", "Internal recovery assumptions (2024)", "Expected loss / Defaulted balance", "Estimated", "High"],
  ]],
];
const CONF_COLOR: Record<string, string> = { Observed: "#7ac74f", Estimated: "#e8a33d", Modeled: "#ff4b1f", Proposed: "#9a9aa0" };
export function NextCardAssumptions() {
  const [conf, setConf] = useState<string | null>(null);
  return <Nc n="12" title="Assumptions Register" label="Next Card assumptions register — interactive rebuild of Next_Card_Image_12">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>China Gen Z Credit-Card Concept — key inputs, sources, calculations, confidence and sensitivity overview for the Next Card financial model. The full register, as printed — all five categories visible; the confidence filter only dims non-matching rows.</p>
    <p style={{ margin: "0 0 8px", display: "flex", gap: 5, flexWrap: "wrap" }}><span style={{ color: "#9a9aa0", alignSelf: "center" }}>CONFIDENCE LEGEND / FILTER:</span>{Object.entries(CONF_COLOR).map(([k, c]) => <button key={k} type="button" className="nc-tab" aria-pressed={conf === k} onClick={() => setConf(conf === k ? null : k)} style={{ borderColor: c }}>{k}</button>)}
      <span style={{ color: "#9a9aa0", alignSelf: "center" }}>Observed = credible third-party data · Estimated = industry benchmarks · Modeled = internal analysis/assumptions · Proposed = strategic choice for scenario testing</span></p>
    {ASSUMPTIONS.map(([group, rows]) => <div key={group} style={{ marginTop: 10 }}>
      <p className="nc-acc" style={{ margin: "0 0 3px", fontWeight: 700, letterSpacing: ".06em", fontSize: 12.5 }}>{group.toUpperCase()}</p>
      <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.3 }}><thead><tr>{["Variable", "Input", "Source", "Calculation", "Confidence level", "Sensitivity"].map((h) => <th key={h} style={{ textAlign: "left", borderBottom: "1px solid #333438", padding: "3px 6px", color: "#9a9aa0" }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]} style={{ opacity: conf && r[4] !== conf ? 0.32 : 1 }}>{r.map((c, ci) => <td key={ci} style={{ borderBottom: "1px solid #232426", padding: "4px 6px" }}>{ci === 4 ? <span style={{ background: CONF_COLOR[c], color: "#111", borderRadius: 999, padding: "1px 8px", fontWeight: 700, fontSize: 10.5 }}>{c}</span> : c}</td>)}</tr>)}</tbody></table></div>
    </div>)}
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Notes: 1) All monetary values in RMB unless otherwise stated. 2) Modeled/Estimated figures are illustrative for planning purposes only. 3) Actual results may vary based on market conditions, regulatory changes and execution. SENSITIVITY GUIDE — High = Material impact on key outcomes (±10% input change → ≥5% impact on NPAT) · Medium = Moderate impact (±10% input change → 1%–5% impact on NPAT) · Low = Limited impact (±10% input change → &lt;1% impact on NPAT).</p>
  </Nc>;
}

/* ---------------- 13 — City Evaluation Framework ---------------- */
const CRITERIA: Array<[string, number]> = [["Addressable audience", 25], ["Digital adoption", 20], ["Spending potential", 15], ["Distribution", 15], ["Merchant ecosystem", 10], ["Youth density", 10], ["Competition", 5]];
const CITY_SCORES: Record<string, number[]> = {
  Shenzhen: [9, 9, 8, 8, 8, 9, 7], Guangzhou: [8, 8, 7, 8, 8, 8, 7], Shanghai: [9, 9, 9, 7, 9, 7, 5],
  Beijing: [8, 8, 9, 7, 8, 7, 4], Chengdu: [7, 7, 6, 6, 6, 8, 6], Hangzhou: [6, 8, 7, 7, 7, 8, 6],
};
const CITY_TOTALS: Record<string, string> = { Shenzhen: "8.50", Guangzhou: "7.80", Shanghai: "7.30", Beijing: "6.90", Chengdu: "5.65", Hangzhou: "6.00" };
export function NextCardCityEvaluation() {
  const [scores, setScores] = useState<number[]>(CITY_SCORES.Shenzhen);
  const total = scores.reduce((acc, s, i) => acc + (s * CRITERIA[i][1]) / 100, 0);
  const bump = (i: number, d: number) => setScores((sc) => sc.map((v, j) => (j === i ? Math.min(10, Math.max(1, v + d)) : v)));
  return <Nc n="13" title="City Evaluation Framework" label="Next Card city evaluation framework — interactive rebuild of Next_Card_Image_13">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Credit Card for Gen Z in China — weighted scorecard to identify the optimal connected launch pair for Next Card. <b className="nc-acc">RECOMMENDED LAUNCH PAIR: SHENZHEN + GUANGZHOU</b> — high total score, complementary strengths, and strong execution feasibility. Deck contents as printed: 01 Opportunity · 02 User Insight · 03 Solution · 04 Go-to-Market · 05 Financials · <b style={{ color: "#fff" }}>13 City Evaluation</b>.</p>
    <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse" }}><thead><tr><th style={{ textAlign: "left", padding: "4px 6px", borderBottom: "1px solid #333438" }}>Evaluation criteria</th><th style={{ padding: "4px 6px", borderBottom: "1px solid #333438" }}>Weight</th>{Object.keys(CITY_SCORES).map((c) => <th key={c} style={{ padding: "4px 6px", borderBottom: "1px solid #333438", color: c === "Shenzhen" || c === "Guangzhou" ? ORANGE : "#fff" }}>{c.toUpperCase()}</th>)}</tr></thead>
      <tbody>{CRITERIA.map(([name, w], i) => <tr key={name}><td style={{ padding: "4px 6px", borderBottom: "1px solid #232426" }}>{name}</td><td style={{ textAlign: "center", borderBottom: "1px solid #232426" }}>{w}%</td>{Object.entries(CITY_SCORES).map(([c, sc]) => <td key={c} style={{ textAlign: "center", borderBottom: "1px solid #232426" }}><b style={{ color: c === "Shenzhen" || c === "Guangzhou" ? ORANGE : "#fff" }}>{sc[i]}</b> <span style={{ color: "#9a9aa0" }}>({((sc[i] * w) / 100).toFixed(2)})</span></td>)}</tr>)}
        <tr><td style={{ padding: "5px 6px", fontWeight: 700 }}>WEIGHTED TOTAL SCORE (OUT OF 10)</td><td /><td style={{ textAlign: "center" }}><b className="nc-acc" style={{ fontSize: 15 }}>8.50</b></td><td style={{ textAlign: "center" }}><b className="nc-acc" style={{ fontSize: 15 }}>7.80</b></td><td style={{ textAlign: "center" }}><b>7.30</b></td><td style={{ textAlign: "center" }}><b>6.90</b></td><td style={{ textAlign: "center" }}><b>5.65</b></td><td style={{ textAlign: "center" }}><b>6.00</b></td></tr></tbody></table></div>
    <div style={{ border: "1px solid #333438", borderRadius: 8, padding: 10, marginTop: 10 }} aria-live="polite">
      <p style={{ margin: 0 }}><b>Try the methodology on Shenzhen</b> — adjust a raw score and watch the weighted total move (printed total: {CITY_TOTALS.Shenzhen}):</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>{CRITERIA.map(([name, w], i) => <span key={name} style={{ border: "1px solid #2c2d30", borderRadius: 6, padding: "4px 7px" }}>{name} ({w}%) <button type="button" className="nc-tab" aria-label={`Decrease ${name}`} onClick={() => bump(i, -1)}>−</button> <b>{scores[i]}</b> <button type="button" className="nc-tab" aria-label={`Increase ${name}`} onClick={() => bump(i, 1)}>+</button></span>)}</div>
      <p style={{ margin: "8px 0 0" }}>Recomputed weighted total: <b className="nc-acc" style={{ fontSize: 16 }}>{total.toFixed(2)}</b> / 10</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 12, marginTop: 12 }}>
      <div style={{ border: "1px solid #333438", borderRadius: 8, padding: "12px 14px" }}>
        <p style={{ margin: "0 0 10px", fontWeight: 700, letterSpacing: ".04em" }}>WEIGHTED SCORE COMPARISON <span style={{ color: "#9a9aa0", fontWeight: 400 }}>(OUT OF 10)</span></p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 120 }} role="img" aria-label="Bar chart of weighted totals: Shenzhen 8.50, Guangzhou 7.80, Shanghai 7.30, Beijing 6.90, Chengdu 5.65, Hangzhou 6.00">
          {Object.entries(CITY_TOTALS).map(([c, t]) => <div key={c} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontWeight: 800, color: c === "Shenzhen" || c === "Guangzhou" ? ORANGE : "#fff", marginBottom: 4 }}>{t}</div>
            <div style={{ height: `${(Number(t) / 10) * 78}px`, background: c === "Shenzhen" || c === "Guangzhou" ? "linear-gradient(180deg,#ff6a3d,#e83a10)" : "linear-gradient(180deg,#9a9aa0,#55565a)", borderRadius: "3px 3px 0 0" }} />
            <div style={{ marginTop: 6, fontSize: 10.5, letterSpacing: ".05em", color: "#c9c9ce" }}>{c.toUpperCase()}</div>
          </div>)}
        </div>
      </div>
      <div style={{ border: "1px solid #333438", borderRadius: 8, padding: "12px 14px" }}>
        <p className="nc-acc" style={{ margin: "0 0 8px", fontWeight: 800, letterSpacing: ".06em" }}>METHODOLOGY</p>
        <ol style={{ margin: 0, paddingLeft: 18, color: "#e8e8ea", display: "grid", gap: 6 }}>
          <li>Each city is scored on a 1–10 scale for each criterion.</li>
          <li>Scores are multiplied by the respective weight to calculate weighted contribution.</li>
          <li>Weighted contributions are summed to derive the total score out of 10.</li>
          <li>Higher total score indicates stronger overall suitability for launch.</li>
        </ol>
        <p style={{ color: "#9a9aa0", fontSize: 11.5, margin: "10px 0 0" }}>Source: Public data, industry reports, partner inputs, and Next Card internal analysis. All scores are Estimated or Modeled for strategic evaluation only.</p>
        <p style={{ color: "#9a9aa0", fontSize: 11.5, fontStyle: "italic", margin: "4px 0 0" }}>Scores are Modelled. Methodology and weights are subject to refinement.</p>
      </div>
    </div>
  </Nc>;
}

/* ---------------- 14 — Geographic Opportunity Map ---------------- */
const MAP_NODES = [
  ["Guangzhou University Cluster", "Sun Yat-sen University · South China University of Technology · Jinan University · South China Normal University"],
  ["Baiyun International Airport", "Transport hub on the printed map, north of Guangzhou."],
  ["Huangpu Development Zone", "Tech & Advanced Manufacturing."],
  ["Shenzhen University Cluster", "Shenzhen University · Tsinghua University, Shenzhen · Peking University, Shenzhen · Harbin Institute of Technology, Shenzhen · Southern University of Science and Technology"],
  ["Shenzhen High-Tech Park & Nanshan Science Corridor", "Tech Innovation Hub."],
  ["Shenzhen Bao'an International Airport", "Transport hub on the printed map, west of Shenzhen."],
  ["Zhujiang New Town", "Young-Professional Hub (Guangzhou)."],
  ["Futian–Luohu", "Finance & Business Hub (Shenzhen)."],
];
export function NextCardOpportunityMap() {
  const [node, setNode] = useState(0);
  return <Nc n="14" title="One Ecosystem. Two Engines." label="Next Card geographic opportunity map — interactive rebuild of Next_Card_Image_14">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Geographic Opportunity Map — <b className="nc-acc">Shenzhen × Guangzhou, United to Launch Next Card.</b> Shenzhen leads in tech talent, innovation and early adoption. Guangzhou anchors scale, commerce and cultural depth. Together, they create a contiguous ecosystem for acquisition, activation and long-term network effects across the Greater Bay Area.</p>
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 12, alignItems: "start" }}>
      <div>
        {[["Active Gen Z Population", "18.7M", "of GBA total (Estimated)"], ["Addressable Annual Spend", "RMB 1.6T", "(Estimated)"], ["High-Density Merchants", ">270K", "(Estimated)"], ["Cross-City Network Effect", "1+1>2.3", "(Modeled Lift)"]].map(([l, v, n]) => <p key={l} style={{ margin: "0 0 10px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: 9 }}><span style={{ color: "#9a9aa0", fontSize: 11.5, display: "block" }}>{l}</span><b className="nc-acc" style={{ fontSize: 19 }}>{v}</b> <span style={{ color: "#9a9aa0", fontSize: 11 }}>{n}</span></p>)}
        <p style={{ margin: "4px 0 0", fontSize: 12.3 }}><b className="nc-acc">Why It Matters</b> — Dense talent, commerce and connectivity within 1-hour drive enable efficient acquisition, frequent engagement and durable retention.</p>
        <p style={{ color: "#9a9aa0", margin: "8px 0 0", fontSize: 11.5 }}>Legend: Activity Intensity (Merchant Density) Very High / High / Medium / Low · University Cluster · Young-Professional Employment Zone · High-Density Merchant Area · Transport Hub · Potential Launch Hub. Transport corridors: High-Speed Rail · Metro / Intercity Rail · Expressway · 1-Hour Circle.</p>
      </div>
      <div>
        <p className="nc-acc" style={{ margin: "0 0 4px", fontWeight: 700, letterSpacing: ".08em" }}>GREATER BAY AREA STRATEGIC MAP — LAUNCH ECOSYSTEM &amp; NETWORK EFFECTS · 30–40 MIN HIGH-SPEED LINK BETWEEN THE ENGINES</p>
        <GbaSvg h={300} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginTop: 8 }} role="group" aria-label="Map nodes — all visible">
          {MAP_NODES.map(([t, d], i) => <button key={t} type="button" onClick={() => setNode(i)} aria-pressed={node === i} style={{ background: node === i ? "#2a1408" : "#121315", border: `1px solid ${node === i ? ORANGE : "#2c2d30"}`, borderRadius: 7, color: "#fff", padding: "6px 7px", cursor: "pointer", font: "inherit", textAlign: "left", fontSize: 11, lineHeight: 1.4 }}><b>{t}</b><br /><span style={{ color: "#c9c9ce" }}>{d}</span></button>)}
        </div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
      <div style={{ border: "1px solid #4a1e10", borderRadius: 9, padding: 11, background: "#170c06" }}><p style={{ margin: 0, fontWeight: 800 }}><span className="nc-acc">Shenzhen — Innovation Engine</span></p><ul style={{ margin: "5px 0 0", paddingLeft: 16, color: "#e8e8ea" }}><li>Tech talent density, entrepreneurial culture and product innovation.</li><li>Ideal for product testing, rapid iteration and early adopter activation.</li><li>Drives brand pull and digital engagement.</li></ul><p style={{ color: "#c9c9ce", margin: "7px 0 0", fontSize: 12.3 }}>Potential launch hub as printed: Shenzhen (Innovation Lab) — product testbed, tech talent and early adopter base.</p></div>
      <div style={{ border: "1px solid #4a1e10", borderRadius: 9, padding: 11, background: "#170c06" }}><p style={{ margin: 0, fontWeight: 800 }}><span className="nc-acc">Guangzhou — Scale Engine</span></p><ul style={{ margin: "5px 0 0", paddingLeft: 16, color: "#e8e8ea" }}><li>Population scale, commercial depth and lifestyle diversity.</li><li>Efficient customer acquisition and merchant expansion.</li><li>Drives transaction scale and network liquidity.</li></ul><p style={{ color: "#c9c9ce", margin: "7px 0 0", fontSize: 12.3 }}>Potential launch hub as printed: Guangzhou (Scale Gateway) — mass market access, commerce scale and cultural resonance.</p></div>
    </div>
    <p style={{ margin: "10px 0 0" }}><b className="nc-acc">THE NETWORK EFFECT</b> — More Users × More Merchants = Stronger Ecosystem. Cross-city connectivity compresses distance, expands choice and compounds value. Centre of the printed panel: Data, Talent and Capital Circulate Freely. <span style={{ color: "#9a9aa0" }}>Note: All figures are Modeled or Estimated and for illustrative purposes only.</span></p>
  </Nc>;
}

/* ---------------- 15 — Why Shenzhen and Guangzhou Win ---------------- */
export function NextCardWhyCitiesWin() {
  const [city, setCity] = useState(0);
  const CITIES: Array<[string, string[], string]> = [
    ["SHENZHEN", ["Technology and young-professional concentration", "Higher digital adoption", "Premium merchant and workplace activation"], "/projects/crops/next-card/city15-shenzhen.jpg"],
    ["GUANGZHOU", ["Large student and young consumer base", "Broader lifestyle and retail ecosystem", "Campus and local merchant activation"], "/projects/crops/next-card/city15-guangzhou.jpg"],
  ];
  const cityPanel = (i: number) => <div onClick={() => setCity(i)} style={{ border: `1.5px solid ${city === i ? ORANGE : "#3a2320"}`, borderRadius: 12, overflow: "hidden", cursor: "pointer", background: "#0d0d0f" }}>
    <p className="nc-acc" style={{ fontSize: 25, fontWeight: 800, margin: 0, padding: "10px 14px 6px", letterSpacing: ".04em", color: i ? "#ff8a3d" : ORANGE }}>{CITIES[i][0]}</p>
    <img src={CITIES[i][2]} alt={`${CITIES[i][0]} skyline as printed`} style={{ width: "100%", height: 118, objectFit: "cover", display: "block" }} />
    {CITIES[i][1].map((s) => <p key={s} style={{ display: "flex", gap: 9, alignItems: "center", margin: 0, padding: "9px 13px", borderTop: "1px solid #232426", fontWeight: 600, lineHeight: 1.35 }}><span className="nc-acc" style={{ width: 24, height: 24, borderRadius: "50%", border: `1.5px solid ${ORANGE}`, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", fontSize: 11 }}>●</span>{s}</p>)}
  </div>;
  return <Nc n="15" title="Why Shenzhen and Guangzhou Win" label="Next Card why cities win — interactive rebuild of Next_Card_Image_15">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>The Credit Card Reimagined for China's Next Generation · <span className="nc-tab">Modeled</span> (badge as printed). Both printed skyline panels at rest, joined by the Complementary Strengths bridge — select a city to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 168px 1fr", gap: 10, alignItems: "stretch" }}>
      {cityPanel(0)}
      <div style={{ textAlign: "center", padding: "26px 4px 0" }}>
        <svg viewBox="0 0 160 52" style={{ width: "100%" }} role="img" aria-label="Bridge joining the two cities"><path d="M6,44 Q44,6 80,44 Q116,6 154,44" fill="none" stroke={ORANGE} strokeWidth="2.4" /><path d="M6,44 H154 M30,44 V22 M80,44 V14 M130,44 V22" stroke={ORANGE} strokeWidth="1.6" /><circle cx="2" cy="44" r="3.4" fill={ORANGE} /><circle cx="158" cy="44" r="3.4" fill={ORANGE} /></svg>
        <p style={{ fontWeight: 800, letterSpacing: ".05em", margin: "10px 0 0", lineHeight: 1.35 }}>COMPLEMENTARY<br />STRENGTHS</p>
        <p style={{ width: 34, height: 3, background: ORANGE, margin: "9px auto" }} />
        <p style={{ color: "#c9c9ce", margin: 0, lineHeight: 1.5 }}>Different strengths.<br />Stronger together.<br /><br />One card. Two engines.<br />Infinite possibilities.</p>
      </div>
      {cityPanel(1)}
    </div>
    <p style={{ fontSize: 14.5, fontWeight: 700, textAlign: "center", margin: "13px 0 0", border: "1px solid #2c2d30", borderRadius: 10, padding: "11px 12px" }}>Shenzhen provides digital and professional density; <span className="nc-acc">Guangzhou provides consumer scale and lifestyle reach.</span></p>
    <p style={{ color: "#9a9aa0", textAlign: "center", margin: "8px 0 0", letterSpacing: ".1em" }}>NEXT CARD | BUILT FOR GEN Z. DESIGNED FOR CHINA. READY FOR THE FUTURE.</p>
  </Nc>;
}

/* ---------------- 16 — TAM, SAM and SOM Funnel ---------------- */
const TAM = [
  ["Total Shenzhen and Guangzhou population", "25.4M", "55%"],
  ["Gen Z population (Born 1995–2010)", "14.0M", "72%"],
  ["Adult Gen Z population (Age 18 and above)", "10.1M", "60%"],
  ["Bankable or eligible audience", "6.1M", "65%"],
  ["Digitally active audience", "4.0M", "7.5%"],
  ["Six-month obtainable cardholders", "~300K", ""],
];
export function NextCardTamFunnel() {
  const [s, setS] = useState(5);
  return <Nc n="16" title="TAM, SAM and SOM Funnel" label="Next Card TAM SAM SOM funnel — interactive rebuild of Next_Card_Image_16">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>From population to obtainable cardholders in six months. <b style={{ color: "#fff" }}>A large and accessible opportunity in Shenzhen and Guangzhou</b> — Next Card targets Gen Z in Shenzhen and Guangzhou with a digital-first credit-card experience built for their lifestyle, behavior, and financial needs.</p>
    <div role="group" aria-label="Funnel stages">{TAM.map(([t, v, conv], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={s === i} style={{ display: "flex", justifyContent: "space-between", width: `${100 - i * 6}%`, margin: "0 auto 5px", background: `linear-gradient(90deg, ${["#2c2d30", "#3a3b3f", "#7a2413", "#b23c17", "#ff4b1f", "#f6c9b8"][i]}, #17181a)`, border: "1px solid #333438", borderRadius: 6, color: i === 5 ? "#111" : "#fff", padding: "8px 12px", cursor: "pointer", font: "inherit" }}><span>{t}</span><span><b style={{ fontSize: 15 }}>{v}</b> <span style={{ opacity: 0.75 }}>Modeled</span>{conv && <span style={{ marginLeft: 10 }}>→ {conv} conversion to next stage</span>}</span></button>)}</div>
    <p aria-live="polite" style={{ textAlign: "center", margin: "8px 0 0" }}>Stage {s + 1}: <b>{TAM[s][0]}</b> — {TAM[s][1]} (Modeled){TAM[s][2] ? `, converting at ${TAM[s][2]} to the next stage as printed.` : ". Modeled six-month obtainable target: approximately 300K approved cardholders."}</p>
    <div style={{ border: "1px solid #333438", borderRadius: 8, padding: 10, marginTop: 10 }}>
      <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>KEY MODEL ASSUMPTIONS</p>
      <ul style={{ margin: "5px 0 0", paddingLeft: 16, color: "#c9c9ce" }}><li>Source: Public data, industry reports, and internal research</li><li>Population as of 2024</li><li>Gen Z defined as born between 1995 and 2010</li><li>Adult Gen Z defined as age 18 and above</li><li>Bankable or eligible audience based on simplified credit criteria and risk policies</li><li>Digitally active defined as active on mobile internet and fintech apps</li><li>Six-month obtainable based on conservative ramp and operational capacity</li></ul>
      <p style={{ color: "#9a9aa0", margin: "6px 0 0" }}>All figures are Modeled — all population sizes, conversion rates, and outcomes are internal estimates and projections. These are illustrative and not guarantees of future performance. Note: All numbers are Modeled, not achieved.</p>
    </div>
  </Nc>;
}

/* ---------------- 17 — Acquisition Conversion Equation ---------------- */
const EQ_STAGES = [
  ["REACH", "15.0%", "Total addressable Gen Z audience in tier 1–3 cities", "200,000,000", "Unique Gen Z individuals exposed to Next Card marketing touchpoints."],
  ["ENGAGEMENT", "20.0%", "Reached audience who engaged with Next Card content", "30,000,000", "Reached individuals who meaningfully engaged (e.g., video view, click, content interaction)."],
  ["APPLICATION", "25.0%", "Users who submitted an application", "7,500,000", "Engaged individuals who started and submitted a credit-card application."],
  ["APPROVAL", "60.0%", "Applications approved", "4,500,000", "Applications that meet underwriting criteria and are approved."],
  ["ACTIVATION", "66.7%", "Approved users who activated their card", "≈ 300,000", "Approved users who activated their card (wording of the printed audience card)."],
];
export function NextCardConversionEquation() {
  const [s, setS] = useState(0);
  const cur = EQ_STAGES[s];
  return <Nc n="17" title="Acquisition Conversion Equation" label="Next Card conversion equation — interactive rebuild of Next_Card_Image_17">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Conversion Model — five-stage model from reach to activated cardholders. All rates and counts are <span className="nc-acc">Modeled</span>, transcribed exactly as printed (the printed stage counts and the printed rate chain are both reproduced verbatim below; the deck presents them side by side).</p>
    <div style={{ display: "flex", alignItems: "flex-start", gap: 5 }} role="group" aria-label="Conversion equation — big rates row">
      {EQ_STAGES.map(([t, rate], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="nc-acc" style={{ fontSize: 26, fontWeight: 800, paddingTop: 8 }}>×</span>}<button type="button" onClick={() => setS(i)} aria-pressed={s === i} style={{ flex: 1, background: "none", border: "none", cursor: "pointer", font: "inherit", color: "#fff", padding: 0, textAlign: "center" }}><span style={{ display: "block", fontSize: 11, letterSpacing: ".1em", color: "#9a9aa0" }}>{i + 1} · {t}</span><span className="nc-acc" style={{ display: "block", fontSize: 37, fontWeight: 800, lineHeight: 1.15, textDecoration: s === i ? "underline" : "none", textUnderlineOffset: 6 }}>{rate}</span></button></span>)}
      <span className="nc-acc" style={{ fontSize: 26, fontWeight: 800, paddingTop: 8 }}>=</span>
      <span style={{ flex: 1, textAlign: "center" }}><span style={{ display: "block", fontSize: 11, letterSpacing: ".1em", color: "#9a9aa0" }}>OVERALL CONVERSION (Modeled)</span><span style={{ display: "block", fontSize: 37, fontWeight: 800, lineHeight: 1.15 }}>0.300%</span></span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, marginTop: 14 }} role="group" aria-label="Audience count boxes">
      {EQ_STAGES.map(([t, , label, count], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={s === i} style={{ background: s === i ? "#2a1408" : "#101012", border: `1px solid ${s === i ? ORANGE : "#333438"}`, borderRadius: 9, color: "#fff", padding: "9px 10px", cursor: "pointer", font: "inherit", textAlign: "left" }}><span style={{ fontSize: 11, letterSpacing: ".07em", color: "#9a9aa0" }}>{t} — AUDIENCE (Modeled)</span><b style={{ display: "block", fontSize: 19, margin: "3px 0" }}>{count}</b><span style={{ color: "#c9c9ce", fontSize: 11.8, lineHeight: 1.4, display: "block" }}>{label}</span></button>)}
    </div>
    <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 12, marginTop: 10 }} aria-live="polite">
      <p style={{ margin: 0 }}><b style={{ fontSize: 15 }}>{s + 1} · {cur[0]}</b> <span className="nc-acc" style={{ fontWeight: 800 }}>{cur[1]}</span> <span style={{ color: "#9a9aa0" }}>Modeled</span></p>
      <p style={{ margin: "6px 0 0", color: "#c9c9ce" }}>Definition: {cur[4]}</p>
    </div>
    <p style={{ margin: "10px 0 0" }}>EQUATION SUMMARY (Modeled): <b>200,000,000 × 15.0% × 20.0% × 25.0% × 60.0% × 66.7% = ≈ 300,000</b> Approved &amp; Activated Cardholders — as printed.</p>
    <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>Conversion from previous (Modeled), formulas as printed under the stage columns: 15.0% = 30,000,000 / 200,000,000 · 20.0% = 7,500,000 / 30,000,000 · 25.0% = 4,500,000 / 7,500,000 · 66.7% = 300,000 / 4,500,000.</p>
    <p style={{ margin: "10px 0 0" }}><span className="nc-acc" style={{ fontWeight: 700 }}>SENSITIVITY NOTE</span> — Small shifts at early stages create large changes in outcomes. For example, a ±1pp change in engagement rate changes activated cardholders by ≈ ±15,000. <span style={{ color: "#9a9aa0" }}>All rates and counts are Modeled for planning purposes. Actual results will vary based on execution and market conditions.</span></p>
  </Nc>;
}

/* ---------------- 19 — Behavioral Segments ---------------- */
const SEGMENTS = [
  ["CAMPUS STARTER", "Learning, exploring, becoming.", "University student managing first credit experience and daily campus life.", "Dining, campus services, online shopping, entertainment, public transit.", "Build credit early, enjoy campus offers, stay within budget.", "Limited credit history, unpredictable income, fear of debt.", "Campus perks, low entry threshold, spend insights, budget guardrails."],
  ["EARLY-CAREER URBANIST", "Building momentum in the city.", "New to the workforce in a tier-1 city, balancing work, life, and financial independence.", "Dining out, rideshare, lifestyle, beauty, travel, home improvement.", "Elevate lifestyle, earn rewards, manage cash flow.", "High cost of living, irregular bonuses, complex financial decisions.", "Lifestyle rewards, flexible repayment, smart installments, cash flow planner."],
  ["DIGITAL CULTURE ENTHUSIAST", "Expressing identity through culture.", "Deeply engaged in digital communities, gaming, music, and content creation.", "Digital subscriptions, gaming, merchandise, events, tech gadgets.", "Access exclusive drops and experiences, express identity.", "Hard to track small transactions, limited exclusive access.", "Culture partnerships, drop access, virtual card controls, real-time alerts."],
  ["FINANCIAL PROGRESS SEEKER", "Planning today, thriving tomorrow.", "Focused on long-term goals like further education, travel, or owning a home.", "Education, travel, health, insurance, long-term investments.", "Build wealth, improve credit, achieve life milestones.", "Lack of long-term planning tools, complex products, low financial literacy.", "Goal-based savings, credit building tools, insights and progress tracking."],
];
const SEG_ROWS = ["Situation", "Primary spending categories", "Motivation", "Barrier", "Relevant feature"];
export function NextCardSegments() {
  const [sIdx, setSIdx] = useState(0);
  return <Nc n="19" title="Four Behaviors. Four Journeys. One Card That Adapts." label="Next Card behavioral segments — interactive rebuild of Next_Card_Image_19">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Behavioral Segments — Credit reimagined for China's next generation. <span className="nc-tab">Modeled</span> (badge as printed). Portrait photographs as printed, represented structurally. All four segment columns, as printed — select one to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }} role="group" aria-label="Segments — all four visible">
      {SEGMENTS.map((seg, i) => <div key={seg[0]} onClick={() => setSIdx(i)} style={{ background: sIdx === i ? "#2a1408" : "#121315", border: `1px solid ${sIdx === i ? ORANGE : "#333438"}`, borderRadius: 10, padding: 10, cursor: "pointer" }}>
        <p style={{ margin: 0 }}><span className="nc-acc" style={{ fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span></p>
        <p style={{ fontWeight: 800, margin: "4px 0 2px", fontSize: 13.5, lineHeight: 1.25 }}>{seg[0]}</p>
        <p style={{ color: "#c9c9ce", margin: "0 0 6px", fontStyle: "italic", fontSize: 12 }}>{seg[1]}</p>
        {SEG_ROWS.map((label, j) => <p key={label} style={{ margin: "7px 0 0", fontSize: 11.8, lineHeight: 1.42 }}><span className="nc-acc" style={{ display: "block", fontSize: 10, letterSpacing: ".07em", fontWeight: 700 }}>{label.toUpperCase()}</span>{seg[j + 2]}</p>)}
      </div>)}
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>NEXT CARD — For the next generation. By design. · Modeled projections for illustrative purposes only.</p>
  </Nc>;
}

/* ---------------- 20 — Jobs, Pains and Desired Outcomes ---------------- */
const JTBD: Array<[string, string[]]> = [
  ["Context", ["I am a Gen Z in China, starting to manage money on my own.", "I have limited credit history and want a simple way to get started.", "I live mobile-first and expect seamless digital experiences in my daily life.", "I want to build good money habits for my future."]],
  ["Functional jobs", ["Easy and fair application with clear requirements.", "Pay for everyday needs online and offline.", "Track spending and manage budget in real time.", "Set reminders and repay on time effortlessly.", "Stay in control with transparent limits and fees."]],
  ["Emotional jobs", ["Feel confident that I can handle credit responsibly.", "Feel reassured with clear, friendly guidance.", "Feel a sense of progress as I build my credit.", "Feel safe that I won't be penalized for small mistakes."]],
  ["Social jobs", ["Be seen as responsible and independent by family and peers.", "Enjoy exclusive offers that fit my lifestyle.", "Share achievements and benefits that reflect my choices."]],
  ["Pains", ["Hard to get approved with little credit history.", "Process feels complicated and time-consuming.", "Terms and fees are unclear or hard to understand.", "Worried about overspending and late fees.", "Credit feels intimidating and out of reach."]],
  ["Desired outcomes", ["Obtain the card easily and start right away.", "Use it frequently for daily life with real value.", "Build credit steadily with good habits.", "Feel confident and in control of my money.", "Look forward to more opportunities in the future."]],
];
const DESIGN_RESPONSE = [
  ["Simple & Fast Onboarding", "Streamlined application with clear status."],
  ["Everyday Utility", "Wide acceptance for daily scenarios, curated Gen Z benefits."],
  ["Smart Money Companion", "Real-time tracking, budget tools, and helpful nudges."],
  ["Build With Confidence", "Transparent terms, gentle reminders, and supportive credit building."],
];
export function NextCardJobsPains() {
  const [p, setP] = useState(4);
  const panel = (i: number) => <div key={JTBD[i][0]} onClick={() => setP(i)} style={{ border: `1px solid ${p === i ? ORANGE : "#333438"}`, borderRadius: 10, padding: 11, background: p === i ? "#1c0d06" : "#101012", cursor: "pointer" }}>
    <p className="nc-acc" style={{ margin: 0, fontWeight: 700, letterSpacing: ".07em", fontSize: 12 }}>{JTBD[i][0].toUpperCase()}</p>
    <ul style={{ margin: "5px 0 0", paddingLeft: 15, fontSize: 12.3, lineHeight: 1.45 }}>{JTBD[i][1].map((x) => <li key={x} style={{ margin: "2.5px 0" }}>{i === 4 ? "⊗ " : i === 5 ? "✓ " : ""}{x}</li>)}</ul>
  </div>;
  return <Nc n="20" title="Jobs, Pains and Desired Outcomes" label="Next Card jobs pains outcomes — interactive rebuild of Next_Card_Image_20">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>A credit card concept for China Gen Z. All panels at rest around the printed centre quote — select a panel to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr 1fr", gap: 10, alignItems: "stretch" }}>
      {panel(0)}
      <blockquote style={{ background: "#f3ede4", color: "#141414", borderRadius: 12, padding: "20px 22px", margin: 0, fontSize: 18.5, fontWeight: 700, lineHeight: 1.45, textAlign: "center", display: "flex", alignItems: "center", boxShadow: "0 0 40px rgba(255,75,31,.18)" }}>“When I begin managing money independently, I want a card that is easy to obtain, useful in my daily life and helps me build financial confidence without making credit feel intimidating.”</blockquote>
      <div style={{ display: "grid", gap: 10 }}>{panel(1)}{panel(2)}</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 10 }}>{panel(3)}{panel(4)}{panel(5)}</div>
    <p className="nc-acc" style={{ margin: "12px 0 4px", fontWeight: 700, letterSpacing: ".08em" }}>DESIGN RESPONSE</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>{DESIGN_RESPONSE.map(([t, b]) => <div key={t} style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>{t}</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>{b}</p></div>)}</div>
  </Nc>;
}

/* ---------------- 21 — End-to-End Customer Journey ---------------- */
const JOURNEY21: Array<[string, string, string, string, string, string, string]> = [
  ["Discover", "Curious", "Understand Next Card and see if it's right for me", "Too much info, not sure if I qualify", "Authentic content & creator stories built for Gen Z", "Reach Impressions", "Discover & Consider"],
  ["Compare", "Evaluating", "Compare features and find the best fit", "Hard to compare terms, fees, and benefits", "Clear comparison tool: benefits, fees, scenarios", "Consideration Rate", "Discover & Consider"],
  ["Apply", "Hopeful but cautious", "Apply quickly and easily", "Long forms, unclear requirements", "3-minute apply with minimal info", "Application Conversion Rate", "Get Started"],
  ["Receive decision", "Relieved & excited", "Know if I'm approved", "Waiting and uncertainty", "Real-time decision with transparent outcome", "Approval Rate", "Get Started"],
  ["Activate", "Motivated", "Start using my card", "Complex steps, confusing instructions", "One-tap activation in app", "Activation Rate", "Get Started"],
  ["Make first purchase", "Excited", "Make my first purchase with confidence", "Worry about being declined or over limit", "Tap to pay ready. First purchase guide & confidence tips", "First Purchase Rate", "Engage & Benefit"],
  ["Explore rewards", "Delighted", "Find rewards that fit my life", "Rewards hard to find or understand", "Personalized rewards hub & discovery", "Rewards Engagement Rate", "Engage & Benefit"],
  ["Join missions", "Engaged", "Get more value through fun challenges", "Don't know how to get started or earn more", "Missions center with simple tasks & perks", "Mission Participation Rate", "Engage & Benefit"],
  ["Refer friends", "Proud", "Share something great with my friends", "No good reason or easy way to refer", "Easy invite via social. Mutual welcome perks", "Referral Conversion Rate", "Engage & Benefit"],
  ["Build credit habits", "Confident", "Build strong credit habits for the future", "Hard to track spending and repayments", "Spending insights, payment reminders, credit education", "On-time Payment Rate", "Grow & Thrive"],
  ["Increase usage responsibly", "Empowered", "Use more, manage well, and grow my limit", "Fear of debt or overspending", "Limit increase pathway with responsible usage tips", "Active Usage Rate (Spend Growth)", "Grow & Thrive"],
];
const PHASE_SUB: Record<string, string> = { "Discover & Consider": "I'm exploring my options", "Get Started": "I'm ready to begin", "Engage & Benefit": "I'm enjoying value and building momentum", "Grow & Thrive": "I'm building a better financial future" };
export function NextCardJourney() {
  const [s, setS] = useState(0);
  const ROWS21: Array<[string, number]> = [["EMOTIONAL JOURNEY — How the user feels at each stage", 1], ["USER GOAL — What the user wants to achieve", 2], ["FRICTION — What gets in the way", 3], ["NEXT CARD FEATURE — How Next Card makes it easy and valuable", 4], ["BUSINESS METRIC — How we measure success", 5]];
  return <Nc n="21" title="End-to-End Customer Journey" label="Next Card customer journey — interactive rebuild of Next_Card_Image_21">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>A seamless journey designed for China Gen Z — simple to start, rewarding to use, and supportive of long-term financial growth. The full 11-stage × 5-row grid, as printed — select a stage column to highlight it:</p>
    <svg viewBox="0 0 920 64" style={{ width: "100%", display: "block" }} role="img" aria-label="Emotional journey curve rising from Curious to Empowered">
      <polyline points={JOURNEY21.map((_, i) => `${70 + i * 84},${54 - i * 4.4}`).join(" ")} fill="none" stroke={ORANGE} strokeWidth="2.5" />
      {JOURNEY21.map((st, i) => <g key={st[0]}><circle cx={70 + i * 84} cy={54 - i * 4.4} r={s === i ? 6 : 4} fill={ORANGE} /><text x={70 + i * 84} y={54 - i * 4.4 - 10} fill="#c9c9ce" fontSize="10.5" textAnchor="middle">{st[1]}</text></g>)}
    </svg>
    <div style={{ display: "grid", gridTemplateColumns: "104px repeat(11,1fr)", fontSize: 9.9, lineHeight: 1.38 }}>
      <p style={{ margin: 0, padding: "4px 5px", borderBottom: "1px solid #333438", color: "#9a9aa0" }}>STAGE</p>
      {JOURNEY21.map((st, i) => <p key={st[0]} onClick={() => setS(i)} style={{ margin: 0, padding: "4px 5px", borderBottom: "1px solid #333438", borderLeft: "1px solid #232426", fontWeight: 800, cursor: "pointer", background: s === i ? "#2a1408" : "transparent", color: s === i ? "#fff" : "#e8e8ea" }}><span className="nc-acc">{String(i + 1).padStart(2, "0")}</span> {st[0]}<br /><span style={{ color: "#9a9aa0", fontWeight: 400, fontSize: 9 }}>{st[6]}</span></p>)}
      {ROWS21.map(([label, ci]) => <div key={label} style={{ display: "contents" }}>
        <p style={{ margin: 0, padding: "5px", borderBottom: "1px solid #232426", color: ci === 4 ? ORANGE : "#9a9aa0", fontWeight: 700, fontSize: 9.2 }}>{label}</p>
        {JOURNEY21.map((st, i) => <p key={st[0]} onClick={() => setS(i)} style={{ margin: 0, padding: "5px", borderBottom: "1px solid #232426", borderLeft: "1px solid #1d1e20", cursor: "pointer", background: s === i ? "#1c0d06" : "transparent", fontWeight: ci === 5 ? 700 : 400 }}>{ci === 1 ? `☺ ${st[ci]}` : st[ci]}</p>)}
      </div>)}
    </div>
    <p style={{ margin: "6px 0 0", color: "#9a9aa0" }} aria-live="polite">Phases: Discover &amp; Consider — {PHASE_SUB["Discover & Consider"]} · Get Started — {PHASE_SUB["Get Started"]} · Engage &amp; Benefit — {PHASE_SUB["Engage & Benefit"]} · Grow &amp; Thrive — {PHASE_SUB["Grow & Thrive"]}</p>
    <p style={{ margin: "8px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b className="nc-acc">FOR USERS</b> — Simple to start, rewarding to use, built for real life.</span><span><b className="nc-acc">FOR NEXT CARD</b> — Drive engagement, loyalty, and sustainable growth.</span><span><b className="nc-acc">BUILT ON TRUST</b> — Transparent, supportive, and designed for responsible use.</span><span><b>NEXT CARD</b> — Designed for Gen Z. Built for the future.</span></p>
  </Nc>;
}

/* ---------------- 25 — Eligibility and Risk Experience ---------------- */
const ELIG_STEPS = [
  ["Age Eligibility", "Are you 18 years or older?", "Next Card is available for adults only. Note on the printed phone: “You must be at least 18 years old to apply.” Buttons: [Yes, I'm 18 or older] [No, I'm not 18 yet]"],
  ["Identity Verification", "Verify your identity", "We use bank-level security to protect your information. ID Card — scan the front and back of your ID · Face Verification — take a quick selfie for liveness check · Personal Information — confirm your name, date of birth, and contact details. “Your data is encrypted and used only for verification.” [Continue]"],
  ["Status Information", "Tell us about your current status", "This helps us understand your ability to manage credit. Options: I'm employed — Full-time or part-time (selected) · I'm a student — Full-time student · I'm self-employed — Business owner or freelancer · Other — Not listed above. [Continue]"],
  ["Review and Decision", "Application submitted", "We're reviewing your information. What happens next? Most decisions in seconds · Some applications may need manual review · We'll notify you of the result. [View application status]"],
  ["Account Activated", "Welcome to Next Card", "Your account is ready to use. Your initial limit ¥8,000 · Available to spend · Total limit: ¥8,000. “Use responsibly. Good habits can help increase your limit.” [Go to my account]"],
];
const OUTCOMES = [
  ["APPROVED", "Congrats! You're approved. Your initial limit ¥8,000. ✓"],
  ["PENDING REVIEW", "We're reviewing your application. We'll notify you within 24 hours."],
  ["MANUAL REVIEW", "We need a bit more time. Our team is reviewing your information carefully. We'll notify you within 3 business days."],
  ["DECLINED", "We're unable to approve your application. You can reapply in 90 days."],
];
export function NextCardEligibility() {
  const [step, setStep] = useState(0);
  const [oc, setOc] = useState(0);
  const [advances, setAdvances] = useState(true);
  const [intl, setIntl] = useState(false);
  return <Nc n="25" title="Eligibility and Risk Experience" label="Next Card eligibility and risk — interactive rebuild of Next_Card_Image_25">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}><span className="nc-acc" style={{ fontWeight: 700 }}>RESPONSIBLE. TRANSPARENT. DESIGNED FOR ADULTS.</span> Next Card uses a clear and responsible process to help adults apply with confidence, understand decisions, and manage their account wisely. Principles as printed: <b style={{ color: "#fff" }}>18+ Adult First</b> — only applicants 18+ can apply · <b style={{ color: "#fff" }}>Privacy by Design</b> — minimal data, encrypted, you're in control · <b style={{ color: "#fff" }}>Fair and Transparent</b> — we evaluate ability to repay, not just credit history · <b style={{ color: "#fff" }}>Behavior First</b> — good habits can lead to higher limits over time · <b style={{ color: "#fff" }}>You're in Control</b> — set controls, get reminders, avoid surprises. Push notification as printed: “NEXT CARD · now — Reminder: Your payment of ¥1,200.00 is due on May 28. Avoid late fees by paying on time.”</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7 }} role="group" aria-label="Eligibility phone wall — nine phones">
      {ELIG_STEPS.map(([t2, head, body], i) => <button key={t2} type="button" onClick={() => setStep(i)} aria-pressed={step === i} aria-label={`Phone ${i + 1}: ${t2}`} style={{ background: "#0a0a0c", border: `1.5px solid ${step === i ? ORANGE : "#34353b"}`, borderRadius: 16, padding: "6px 6px 8px", color: "#f5f5f5", fontSize: 8.8, lineHeight: 1.4, cursor: "pointer", fontFamily: "Inter, Arial, sans-serif", textAlign: "left" }}>
        <span style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa0", fontSize: 7.5, fontFamily: "\"IBM Plex Mono\", monospace" }}><span>9:41</span><span>▂▄▆</span></span>
        <b style={{ display: "block", fontSize: 9.6, margin: "3px 0" }}>{String(i + 1).padStart(2, "0")} {t2}</b>
        <span style={{ display: "block", color: "#fff", fontWeight: 700 }}>{head}</span>
        <span style={{ display: "block", color: "#c9c9ce", marginTop: 2 }}>{body}</span>
        <span className="ncp-cta" style={{ marginTop: 6, fontSize: 8.8, padding: "4px 6px" }}>{i === 0 ? "Yes, I'm 18 or older" : i === 3 ? "View application status" : i === 4 ? "Go to my account" : "Continue"}</span>
      </button>)}
      {OUTCOMES.map(([t2, body], i) => <button key={t2} type="button" onClick={() => setOc(i)} aria-pressed={oc === i} aria-label={`Outcome phone: ${t2}`} style={{ background: "#0a0a0c", border: `1.5px solid ${oc === i ? ORANGE : "#34353b"}`, borderRadius: 16, padding: "6px 6px 8px", color: "#f5f5f5", fontSize: 8.8, lineHeight: 1.4, cursor: "pointer", fontFamily: "Inter, Arial, sans-serif", textAlign: "left" }}>
        <span style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa0", fontSize: 7.5, fontFamily: "\"IBM Plex Mono\", monospace" }}><span>9:41</span><span>▂▄▆</span></span>
        <b className="nc-acc" style={{ display: "block", fontSize: 9.6, margin: "3px 0" }}>{String(i + 6).padStart(2, "0")} {t2}</b>
        <span style={{ display: "block", color: "#c9c9ce" }}>{body}</span>
      </button>)}
      <div style={{ border: "1px dashed #3a3b40", borderRadius: 16, padding: 9, fontSize: 10.5, color: "#c9c9ce", lineHeight: 1.5 }}><b style={{ color: "#fff" }}>Nine phones, as printed</b><br />Five journey phones (age check → activation) plus the four decision-outcome phones. Select any phone to highlight it.</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 12 }}>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>REPAYMENT REMINDERS</b><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>Repayment — Due in 3 days <b style={{ color: "#fff" }}>¥1,200.00</b> · Minimum due · Due date May 28, 2024 [Repay now]. Timely reminders help you stay on track and avoid late payments.</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>SPENDING CONTROLS</b><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>Daily spending limit ¥500.00 (Used ¥120.00) · Monthly spending limit ¥3,000.00 (Used ¥1,250.00)</p>
        <p style={{ margin: "6px 0 0", display: "flex", gap: 5, flexWrap: "wrap" }}><button type="button" className="nc-tab" aria-pressed={advances} onClick={() => setAdvances((v) => !v)}>Block cash advances {advances ? "ON" : "OFF"}</button><button type="button" className="nc-tab" aria-pressed={intl} onClick={() => setIntl((v) => !v)}>Block international transactions {intl ? "ON" : "OFF"}</button></p>
        <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>Set limits and controls that fit your lifestyle and goals.</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>BEHAVIOR-BASED LIMIT REVIEW</b><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>Increase review — “You're doing great! We've reviewed your account.” Recommended new limit <b style={{ color: "#fff" }}>¥12,000</b> · Current limit: ¥8,000 [Review and confirm]. Good payment behavior can lead to higher limits over time.</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>ACCOUNT HEALTH</b><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>Account health: <b style={{ color: "#fff" }}>Good — Keep it up!</b> ✓ Payments on time · ✓ Low credit utilization · ✓ Healthy account activity. Clear insights help you understand and improve your financial health.</p></div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}><b>WHAT WE CONSIDER</b><ul style={{ margin: "5px 0", paddingLeft: 16, color: "#c9c9ce" }}><li>Identity verification</li><li>Income or allowance stability</li><li>Existing credit obligations</li><li>Payment history with Next Card</li><li>Overall account activity</li></ul><p style={{ margin: 0 }}>We do not consider gender, nationality, religion, or other non-financial factors.</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}><b>OUTCOMES</b> <span style={{ color: "#9a9aa0" }}>— click each printed outcome</span>
        <p style={{ display: "flex", gap: 4, flexWrap: "wrap", margin: "6px 0" }}>{OUTCOMES.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={oc === i} onClick={() => setOc(i)}>{t}</button>)}</p>
        <p aria-live="polite" style={{ margin: 0 }}>{OUTCOMES[oc][1]}</p>
        <p style={{ color: "#c9c9ce", margin: "8px 0 0" }}><b className="nc-acc">ADULT ELIGIBILITY 18+</b> — Next Card is designed for adults. If you're under 18, you can explore our financial education resources and apply when you're eligible. Building smart habits starts early.</p></div>
    </div>
  </Nc>;
}

/* ---------------- 26 — Product Ecosystem Map ---------------- */
const ECOSYSTEM: Array<[string, string, Array<[string, string]>]> = [
  ["Acquisition", "Attract and convert new users", [["Campaign Landing Page", "Phone as printed: “Next is yours — A credit card designed for how Gen Z lives.” [Apply Now]"], ["WeChat Mini Program", "Phone as printed (Chinese): 下一张更好的卡片 — 为年轻一代设计的信用卡 [立即申请] (The next, better card — a credit card designed for the younger generation [Apply now])."]]],
  ["Core Banking / Product", "Issue, manage and power the card", [["Application Service", "Application intake, verification, decisioning and account setup: Application Intake · Identity Verification · Risk & Policy Decision · Account Setup."], ["Virtual Card", "Instantly issued virtual card for online and in-app payments. Card as printed: 6259 1088 8888 8888 · CVV 888 · VALID THRU 08/28."], ["Mobile Card Dashboard", "Manage card, track spend, repay and control in one place. Phone as printed: Total Balance ¥3,258.00 · Available Credit ¥26,742.00 · Pay / Repay / Installment / More · Recent Transactions: RUI Coffee −¥38.00."], ["Bank App", "Full financial services hub with card as a core product. Tabs: Home · Card · Finance · Life · Me"]]],
  ["Engagement", "Drive usage, offers and loyalty", [["Rewards Platform", "Points, tiers and rewards that motivate and delight."], ["Merchant Offer System", "Personalized offers and discounts from partner merchants."], ["Referral System", "Invite friends and earn exclusive rewards."]]],
  ["Data & Intelligence", "Unify data and enable intelligence", [["Analytics and CRM", "Unify data, generate insights and drive personalized experiences. Customer 360 · Campaign Management · Behavior Analytics · Segmentation."], ["Customer Insights", "Listed module under Data & Intelligence on the printed map."], ["Personalization Engine", "Listed module under Data & Intelligence on the printed map."], ["Lifecycle Management", "Listed module under Data & Intelligence on the printed map."], ["Performance Analytics", "Listed module under Data & Intelligence on the printed map; the layer feeds back through the printed Insights / Feedback Loop."]]],
];
export function NextCardEcosystem() {
  const [sel, setSel] = useState<[number, number]>([1, 0]);
  return <Nc n="26" title="Product Ecosystem Map" label="Next Card product ecosystem map — interactive rebuild of Next_Card_Image_26">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>NEXT CARD — Credit Card for Gen Z in China. An integrated digital ecosystem that connects acquisition, product, engagement and data to deliver a seamless card experience for Gen Z. Legend as printed: → User Flow · ⇢ Data / Event Flow · ⇢ External Connection. Principles: Mobile First · Simple and Transparent · Rewarding and Personal · Trusted and Secure. The full four-column diagram, as printed — select a module to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 18px 1fr 18px 1fr 18px 1fr", gap: 0, alignItems: "stretch" }}>
      {ECOSYSTEM.map((L, li) => <div key={L[0]} style={{ display: "contents" }}>
        {li > 0 && <span style={{ alignSelf: "center", textAlign: "center", color: ORANGE, fontSize: 15 }}>→</span>}
        <div style={{ border: `1px solid ${sel[0] === li ? ORANGE : "#333438"}`, borderRadius: 10, padding: 9, background: "#101012" }}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: 13 }}><span className="nc-acc">{String(li + 1).padStart(2, "0")}</span> {L[0]}</p>
          <p style={{ color: "#9a9aa0", margin: "2px 0 8px", fontSize: 11.5 }}>{L[1]}</p>
          {L[2].map(([t, d], mi) => <button key={t} type="button" onClick={() => setSel([li, mi])} aria-pressed={sel[0] === li && sel[1] === mi} style={{ display: "block", width: "100%", textAlign: "left", background: sel[0] === li && sel[1] === mi ? "#2a1408" : "#17181a", border: "1px solid #2c2d30", borderRadius: 7, color: "#fff", padding: "6px 8px", marginBottom: 6, cursor: "pointer", font: "inherit", fontSize: 12 }}><b>{t}</b></button>)}
        </div>
      </div>)}
    </div>
    <div style={{ border: "1px solid #333438", borderRadius: 8, padding: 10, marginTop: 10 }} aria-live="polite"><b>{ECOSYSTEM[sel[0]][2][sel[1]][0]}</b> <span style={{ color: "#9a9aa0" }}>({ECOSYSTEM[sel[0]][0]})</span> — {ECOSYSTEM[sel[0]][2][sel[1]][1]}</div>
  </Nc>;
}

/* ---------------- 27 — Information Architecture ---------------- */
const IA: Array<[string, string[]]> = [
  ["Home", ["Overview", "Recent Activity", "Upcoming Bills", "Spending Insights", "Quick Actions"]],
  ["Card", ["Card Overview", "Card Settings", "Card Benefits", "Statements", "Manage Limits", "Security"]],
  ["Rewards", ["My Rewards", "Explore Rewards", "Points History", "Tasks & Offers", "Redemptions"]],
  ["City", ["City Guide", "Local Offers", "Events", "Lifestyle Picks", "Transit & Travel"]],
  ["Squad", ["My Squad", "Squad Feed", "Challenges", "Group Rewards", "Invite Friends"]],
  ["Credit", ["Credit Overview", "Credit Factors", "Credit Insights", "Build Credit", "Credit FAQ"]],
  ["Profile", ["Personal Info", "Account Settings", "Preferences", "Help & Support", "About Next Card"]],
];
export function NextCardIA() {
  const [tab, setTab] = useState(0);
  return <Nc n="27" title="Information Architecture" label="Next Card information architecture — interactive rebuild of Next_Card_Image_27">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Primary navigation sitemap — a clear, intuitive structure that helps Gen Z users manage their card, lifestyle, and community — all in one place. The full sitemap tree, as printed — select a section to highlight its column:</p>
    <p style={{ textAlign: "center", margin: "2px 0 0" }}><span style={{ display: "inline-block", border: `2px solid ${ORANGE}`, borderRadius: 999, padding: "6px 22px", fontWeight: 800, letterSpacing: ".08em" }}><span className="nc-acc">N</span> NEXT CARD — ROOT</span></p>
    <div style={{ width: 2, height: 14, background: "#3a3b40", margin: "0 auto" }} />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 7 }}>
      {IA.map(([t, subs], i) => <div key={t} style={{ borderTop: `3px solid ${tab === i ? ORANGE : "#3a3b40"}`, borderLeft: "1px solid #2c2d30", borderRight: "1px solid #2c2d30", borderBottom: "1px solid #2c2d30", borderRadius: "0 0 9px 9px", padding: "8px 8px 6px", background: tab === i ? "#1c0d06" : "#101012" }}>
        <button type="button" onClick={() => setTab(i)} aria-pressed={tab === i} style={{ background: "none", border: "none", color: "#fff", font: "inherit", fontWeight: 800, fontSize: 13.5, cursor: "pointer", padding: 0 }}><span className="nc-acc">{String(i + 1).padStart(2, "0")}</span> {t}</button>
        {subs.map((d) => <p key={d} style={{ margin: 0, padding: "5px 0 5px 8px", borderLeft: "2px solid #2c2d30", borderBottom: "1px solid #1d1e20", fontSize: 11.8, color: "#d8d8dc" }}>{d}</p>)}
      </div>)}
    </div>
    <div style={{ maxWidth: 560, margin: "14px auto 0", background: "#101012", border: "1px solid #2e2f33", borderRadius: 18, padding: "9px 10px" }}>
      <p style={{ margin: "0 0 6px", color: "#9a9aa0", letterSpacing: ".08em", fontSize: 10.5 }}>MOBILE NAVIGATION PREVIEW</p>
      <div style={{ display: "flex", justifyContent: "space-between" }} role="group" aria-label="Mobile bottom navigation">{IA.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={tab === i} onClick={() => setTab(i)} style={{ fontSize: 11.5, padding: "5px 9px" }}>{t}</button>)}</div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>The bottom navigation puts core sections within one-thumb reach, helping users move effortlessly across the app. LEGEND: Primary Navigation · Secondary Destinations.</p>
  </Nc>;
}

/* ---------------- 28 — Primary Acquisition Flow ---------------- */
const ACQ_FLOW = [
  ["Campaign content", "Poster as printed: “Next is yours. A credit card that fits your life. Apply in 3 minutes.” [Explore Next Card]", "", ""],
  ["Landing page", "“Design for real life.” No annual fee · Transparent benefits · Built for Gen Z. [Apply Now] · Learn more ⌄", "What is Next Card and why does it matter to me?", "Campaign CTR 2.45%"],
  ["Benefit comparison", "Why Next Card — Everyday rewards: earn points on your everyday spend · Lifestyle perks: exclusive offers on coffee, cinema, and more · Smart control: manage limits and spend in real time · No annual fee: keep more of what you earn. [View full comparison]", "What benefits will I actually get?", "Benefit page CVR 18.62%"],
  ["Eligibility check", "Check eligibility — it won't affect your credit profile. ID type [Select] · Name [Enter full name] · ID number [Enter ID number] · SMS code [Enter code] [Send code]. “Information is encrypted and securely protected.” [Check Now]", "Am I eligible without affecting my credit?", "Eligibility check CVR 61.37%"],
  ["Application", "Tell us about you — Step 1 of 4. Employment [Select] · Monthly income [Select range] · Education [Select] · Residential address [Enter address]. [Next]", "How simple and fast is the application?", "Application start CVR 74.18%"],
  ["Verification", "Verify your identity — Step 2 of 4. ID card: take a photo of your ID card · Face verification: take a selfie to verify. “We ensure your information is safe and secure.”", "Is my information secure during verification?", "Verification CVR 86.31%"],
  ["Decision", "✓ Good news! You're approved. Credit limit (RMB) 10,000.00. View details ⌄ [Activate Card]", "What's my credit limit and what's next?", "Approval rate 68.74%"],
  ["Virtual card", "My Card — NEXT CARD •••• •••• 8888 · Card details · CVV ••• · Valid thru 08/28 · Card management › · Set spending limit ⌄ · Lock card [toggle]", "How do I access and manage my card?", "Card activation rate 92.11%"],
  ["First-spend offer", "Your first reward — Spend your first RMB 99 or more and get 1,000 points. [Got it] · View all offers", "What's in it for me if I use my card now?", "First-spend trigger rate 31.28%"],
];
export function NextCardAcquisitionFlow() {
  const [s, setS] = useState(6);
  return <Nc n="28" title="Primary Acquisition Flow" label="Next Card primary acquisition flow — interactive rebuild of Next_Card_Image_28">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>End-to-end experience from awareness to first spend · NEXT CARD — Credit card made for Gen Z in China. Source: Next Card Product Design System. The wall of nine phones, as printed — select a phone to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }} role="group" aria-label="Acquisition flow — nine phones">
      {ACQ_FLOW.map(([t, body, q, metric], i) => <div key={t} style={{ display: "flex", flexDirection: "column" }}>
        <button type="button" onClick={() => setS(i)} aria-pressed={s === i} aria-label={`Phone ${i + 1}: ${t}`} style={{ width: "100%", background: "#0a0a0c", border: `1.5px solid ${s === i ? ORANGE : "#34353b"}`, borderRadius: 16, padding: "6px 6px 8px", color: "#f5f5f5", fontSize: 8.8, lineHeight: 1.38, cursor: "pointer", fontFamily: "Inter, Arial, sans-serif", textAlign: "left", flex: 1 }}>
          <span style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa0", fontSize: 7.5, fontFamily: "\"IBM Plex Mono\", monospace" }}><span>9:41</span><span>▂▄▆</span></span>
          <span style={{ display: "block", width: 34, height: 9, borderRadius: 5, background: "#000", border: "1px solid #232428", margin: "2px auto" }} />
          <b style={{ display: "block", fontSize: 9.6, margin: "3px 0" }}>{t}</b>
          <span style={{ display: "block", color: "#c9c9ce" }}>{body}</span>
        </button>
        <p style={{ fontSize: 9.3, lineHeight: 1.4, color: "#c9c9ce", margin: "5px 0 0" }}><b className="nc-acc">{String(i + 1).padStart(2, "0")} {t}</b>{q && <><br />{q}</>}{metric && <><br /><b style={{ color: "#fff" }}>{metric}</b></>}</p>
      </div>)}
    </div>
    <p style={{ textAlign: "center", margin: "10px 0 0" }} aria-live="polite">Selected: <b>{ACQ_FLOW[s][0]}</b>{ACQ_FLOW[s][2] && <> — <span style={{ color: "#9a9aa0" }}>Primary user question:</span> {ACQ_FLOW[s][2]}</>}{ACQ_FLOW[s][3] && <> · <span style={{ color: "#9a9aa0" }}>Conversion metric:</span> <b className="nc-acc">{ACQ_FLOW[s][3]}</b></>}</p>
  </Nc>;
}

/* ---------------- 29 — Retention Loop ---------------- */
const LOOP_STEPS = [
  ["SPEND", "Use Next Card anywhere. Everyday spend counts.", "Transactions — Today: Coffee Studio −¥28.00 · Metro −¥6.00 (as printed)."],
  ["EARN", "Earn points automatically. The more you use, the more you unlock.", "My Points 2,860 — Points balance. Points earned today +120, from 3 transactions."],
  ["DISCOVER OFFER", "Personalized offers picked for you. New drops, every week.", "Discover — Recommended: Urban Ride 15% back, valid for 3 days [View Offer]. For you row below."],
  ["COMPLETE MISSION", "Finish simple missions. Earn extra points and unlock more rewards.", "Mission — Weekend Challenge: Spend ¥88 on dining this weekend · 66 / 88 · +200 points · 2 days left."],
  ["SHARE OR REFER", "Share your link. You both get rewarded. Stronger together.", "Share & Refer — Invite friends. Get rewarded. You get 500 points · They get 800 points [Invite Now] · Share Link."],
  ["UNLOCK BENEFIT", "Redeem points for real benefits that upgrade your everyday.", "Your Benefit — Unlocked: Express Lane Airport Lounge · 1 Free Entry · Valid until Jun 30, 2025 [View Benefit]. More benefits below."],
  ["RETURN TO SPEND", "Use your benefits. Feel the value. Come back for what's next.", "The loop closes back to SPEND — printed footer nav: OVERVIEW · EXPERIENCE · LOOP · CARD · APP · IMPACT. Retention continues after approval."],
];
const SIGNALS = [
  ["DAILY CHECK-IN", "Open the app, earn bonus points."],
  ["WEEKLY SUMMARY", "See progress, earn more, stay motivated."],
  ["OFFER REFRESH", "New personalized offers every week."],
  ["MISSION UPDATES", "New missions to keep it fun and rewarding."],
  ["COMMUNITY VIBES", "See what friends unlock and get inspired."],
];
export function NextCardRetentionLoop() {
  const [s, setS] = useState(0);
  const [cycles, setCycles] = useState(1);
  const POS = [[50, 4], [82, 18], [90, 50], [72, 82], [38, 90], [10, 68], [8, 26]];
  return <Nc n="29" title="Retention Loop — Built for Gen Z" label="Next Card retention loop — interactive rebuild of Next_Card_Image_29">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Product Loop — a continuous cycle of value. Designed to keep improving every day. The phones arranged in the printed circular loop around the central guardrails — select a phone to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 190px", gap: 12, alignItems: "start" }}>
      <div style={{ position: "relative", height: 470 }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true"><circle cx="50" cy="50" r="37" fill="none" stroke={ORANGE} strokeWidth="0.7" strokeDasharray="2.5 1.8" opacity="0.85" /></svg>
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 218, border: "1px solid #4a1e10", borderRadius: 10, padding: 10, background: "#140a06", textAlign: "center" }}>
          <b className="nc-acc">Responsible by design.</b>
          <p style={{ color: "#c9c9ce", margin: "4px 0 0", fontSize: 11.3, lineHeight: 1.45 }}>Guardrails in every step. SPEND INSIGHTS · BUDGET CONTROLS · REAL-TIME ALERTS · TAKE A BREAK — pause or lock your card anytime.</p>
          {s === 6 ? <button type="button" className="nc-cta" style={{ marginTop: 8, padding: 7, fontSize: 12 }} onClick={() => { setCycles((c) => c + 1); setS(0); }}>Run the loop again — completed cycles: {cycles}</button> : <button type="button" className="nc-cta" style={{ marginTop: 8, padding: 7, fontSize: 12 }} onClick={() => setS((v) => v + 1)}>Next step →</button>}
        </div>
        {LOOP_STEPS.map(([t, sub, body], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={s === i} aria-label={`Loop phone ${i + 1}: ${t}`} style={{ position: "absolute", left: `${POS[i][0]}%`, top: `${POS[i][1]}%`, transform: "translate(-50%,0)", width: 118, background: "#0a0a0c", border: `1.5px solid ${s === i ? ORANGE : "#34353b"}`, borderRadius: 15, padding: "5px 6px 7px", color: "#f5f5f5", fontSize: 8.6, lineHeight: 1.36, cursor: "pointer", fontFamily: "Inter, Arial, sans-serif", textAlign: "left" }}>
          <span style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa0", fontSize: 7, fontFamily: "\"IBM Plex Mono\", monospace" }}><span>9:41</span><span>▂▄▆</span></span>
          <b style={{ display: "block", fontSize: 9.2, margin: "2px 0" }}>{i + 1} · {t}</b>
          <span style={{ display: "block", color: "#c9c9ce" }}>{sub}</span>
        </button>)}
      </div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}><b className="nc-acc">RETENTION SIGNALS</b>{SIGNALS.map(([t, b]) => <p key={t} className="nc-row"><b>{t}</b><span style={{ color: "#c9c9ce" }}>{b}</span></p>)}
        <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>The loop is designed to be useful, rewarding, and always moving forward with you.</p>
        <p aria-live="polite" style={{ margin: "10px 0 0", borderTop: "1px solid #2c2d30", paddingTop: 8 }}><b>{LOOP_STEPS[s][0]}</b> — {LOOP_STEPS[s][2]}</p>
      </div>
    </div>
    <p style={{ color: "#c9c9ce", margin: "8px 0 0", fontSize: 12 }}>STAY IN CONTROL — Smart limits, real-time alerts, and spend insights help you stay in control. BUILT-IN GUARDRAILS — Set budgets, lock categories, and take breaks. You're in charge. SPEND MINDFULLY — Tools and nudges that help you build healthy money habits, not debt.</p>
  </Nc>;
}

/* ---------------- 30 — Full-Funnel Growth Model ---------------- */
const GROWTH_STAGES = [
  ["Reach", "Be present where Gen Z spends time.", "Social feed phone as printed: “Next Card — Your first card. Your way.” (Follow / For you / Shanghai; 2,846 likes).", "Qualified Reach", "2.8M", "Users / month (Modeled)"],
  ["Interest", "Spark interest with content and tools.", "Card Explorer — Choose a style that fits you (Design / Benefits / Stories). Spending Simulator — See your potential rewards. Monthly spend ¥2,000 (slider as printed).", "Interest Rate", "11.2%", "Visitors → Interested (Modeled)"],
  ["Application", "Simple, mobile-first application.", "Apply in minutes — 1 Phone Verified ✓ · 2 ID Information Verified ✓ · 3 Basic Info Completed ✓ · 4 Submit →", "Application Rate", "28.6%", "Interested → Applied (Modeled)"],
  ["Approval", "Fast decision with transparent feedback.", "✓ Approved — Credit Limit ¥12,000 [View details].", "Approval Rate", "78.0%", "Applied → Approved (Modeled)"],
  ["Activation", "Activate and personalize instantly.", "Activate your card — Set card nickname “My Next Card” · Set payment PIN •••••• [Activate now].", "Activation Rate", "92.0%", "Approved → Activated (Modeled)"],
  ["First spend", "Deliver first value moment.", "First spend unlocked! Welcome Reward ¥18 credited to your account [View rewards].", "First Spend Rate", "68.0%", "Activated → First Spend (Modeled) · Avg. First Spend ¥156"],
  ["Referral", "Turn users into advocates.", "Invite friends — Share your code NEXTZ2024. They get rewards · You get rewards [Invite now].", "Referral Rate", "24.0%", "First Spenders → Referred (Modeled) · K-Factor 0.36"],
];
export function NextCardGrowthModel() {
  const [s, setS] = useState(0);
  return <Nc n="30" title="Full-Funnel Growth Model" label="Next Card growth model — interactive rebuild of Next_Card_Image_30">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Credit reimagined for China Gen Z — from awareness to advocacy. Compounding loops power sustainable growth. <b style={{ color: "#fff" }}>GROWTH ENGINE</b> — Product experience drives growth. Growth unlocks better product. All seven stage columns plus the Outcome rail, as printed — select a stage to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr) 1.25fr", gap: 7 }} role="group" aria-label="Growth stages — seven columns and outcome rail">
      {GROWTH_STAGES.map(([t, sub, surface, kpi, val, note], i) => <div key={t} onClick={() => setS(i)} style={{ border: `1px solid ${s === i ? ORANGE : "#333438"}`, borderRadius: 9, padding: 8, background: s === i ? "#1c0d06" : "#101012", cursor: "pointer" }}>
        <p style={{ margin: 0, fontWeight: 800, fontSize: 12.5 }}><span className="nc-acc">{String(i + 1).padStart(2, "0")}</span> {t}</p>
        <p style={{ color: "#c9c9ce", margin: "3px 0 7px", fontSize: 11.3, lineHeight: 1.4 }}>{sub}</p>
        <div style={{ background: "#0a0a0c", border: "1px solid #2e2f33", borderRadius: 13, padding: "6px 7px", fontSize: 10.3, lineHeight: 1.42, minHeight: 118 }}>
          <span style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa0", fontSize: 8, fontFamily: "\"IBM Plex Mono\", monospace" }}><span>9:41</span><span>▂▄▆</span></span>
          <span style={{ display: "block", color: "#d8d8dc", marginTop: 3 }}>{surface}</span>
        </div>
        <p style={{ margin: "7px 0 0", fontSize: 11.3 }}><span style={{ color: "#9a9aa0" }}>{kpi} (Modeled)</span><br /><b className="nc-acc" style={{ fontSize: 16 }}>{val}</b><br /><span style={{ color: "#c9c9ce", fontSize: 10.8 }}>{note}</span></p>
      </div>)}
      <div style={{ border: "1px solid #2e5a34", borderRadius: 9, padding: 9, background: "linear-gradient(180deg,#0d1a0e,#101012)" }}>
        <p className="nc-acc" style={{ margin: 0, fontWeight: 800, letterSpacing: ".07em" }}>OUTCOME</p>
        <p style={{ margin: "6px 0 0", fontSize: 11.8, lineHeight: 1.5 }}>Sustainable growth flywheel (Modeled):<br />Monthly New Activated Cards <b style={{ fontSize: 14.5 }}>46.3K</b><br />Monthly Active Users (MAU) <b style={{ fontSize: 14.5 }}>210K</b><br />Cost per Activated Card (CAC) <b style={{ fontSize: 14.5 }}>¥42</b><br />12-Month Retention Rate (Cohort) <b style={{ fontSize: 14.5 }}>54%</b></p>
        <p style={{ color: "#c9c9ce", margin: "7px 0 0", fontSize: 11.3 }}>Referral Loop — Referrals bring new users back to Reach. Spend Loop — More usage drives retention, more referrals, and higher limits.</p>
      </div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "8px 0 0" }}>Notes: All metrics are modeled for illustration purposes based on internal benchmarks and market research. Actual results may vary based on execution and market conditions. Model Date: May 2024 | Market: China | Target Audience: Gen Z (18–26).</p>
  </Nc>;
}

/* ---------------- 31 — Channel-to-Experience Map ---------------- */
const CHANNEL_MAP = [
  ["Douyin", "Explore trends and lifestyle inspiration", "lifestyle landing page", "Immersive feed-style page with card highlights, lifestyle stories, and quick actions. (Thumbnail as printed: LIVE NEXT LEVEL.)", "Start Application", "User taps “Apply Now” to begin."],
  ["Xiaohongshu", "Find authentic reviews and city recommendations", "city-perks collection", "Curated local perks, cafes, events, and exclusive Gen Z benefits in one place. (CITY PERKS COLLECTION.)", "Save Collection", "User saves a perk pack or clicks to apply."],
  ["Bilibili", "Learn and understand before deciding", "card education and creator explainers", "Short videos and explainers that make card knowledge easy and relatable.", "Watch & Apply", "User watches or interacts, then proceeds to apply."],
  ["Campus QR", "Apply quickly on campus", "simplified application", "Lightweight application with student-optimized requirements and fast-track flow. (Your campus. Your card. ✓ Simple requirements ✓ Student-friendly benefits ✓ Quick approval · Campus Exclusive.)", "Application Submitted", "User submits application in under 2 minutes."],
  ["Merchant QR", "Get a relevant offer at the moment of spend", "contextual offer", "Personalized offer tied to merchant, time, and user preferences. (Your Exclusive Offer — 8% OFF, Today Only, on your next order.)", "Offer Activated", "User activates offer and can apply."],
  ["Bank app", "Use trusted channel for a secure application", "prefilled application", "Secure prefill reduces friction with verified information and smart defaults. (Prefilled for you: Name · Student ID · School · Phone — all ✓.)", "Confirm & Submit", "User reviews, confirms, and submits."],
  ["Referral link", "Join with friends and get rewarded", "squad onboarding", "Group rewards and progress tracking make onboarding more fun together. (INVITE YOUR SQUAD, EARN TOGETHER — You get 100 pts · Your friend gets 100 pts.)", "Friend Joins & Applies", "Friend clicks link, starts application."],
];
export function NextCardChannelMap() {
  const [c, setC] = useState(0);
  const cur = CHANNEL_MAP[c];
  return <Nc n="31" title="Channel-to-Experience Map" label="Next Card channel map — interactive rebuild of Next_Card_Image_31">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Credit Card, Reimagined for China Gen Z — from discovery to conversion, designed for Gen Z journeys and behaviors. <b style={{ color: "#fff" }}>SEVEN CHANNELS. SEVEN SEAMLESS EXPERIENCES. ONE NEXT CARD.</b> We meet Gen Z where they are — on platforms they love and in moments that matter — then deliver a native experience built for speed, clarity, and self-expression.</p>
    <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse" }}><thead><tr>{["#", "Channel", "User intent", "Landing experience (destination)", "Conversion event"].map((h) => <th key={h} style={{ textAlign: "left", borderBottom: "1px solid #333438", padding: "4px 6px", color: "#9a9aa0" }}>{h}</th>)}</tr></thead>
      <tbody>{CHANNEL_MAP.map((r, i) => <tr key={r[0]} onClick={() => setC(i)} style={{ cursor: "pointer", background: c === i ? "#2a1408" : undefined }}><td style={{ padding: "5px 6px", borderBottom: "1px solid #232426" }} className="nc-acc"><b>{i + 1}</b></td><td style={{ padding: "5px 6px", borderBottom: "1px solid #232426" }}><b>{r[0]}</b></td><td style={{ padding: "5px 6px", borderBottom: "1px solid #232426" }}>{r[1]}</td><td style={{ padding: "5px 6px", borderBottom: "1px solid #232426" }}><span className="nc-acc">{r[2]}</span> — {r[3]}</td><td style={{ padding: "5px 6px", borderBottom: "1px solid #232426" }}><span className="nc-acc">{r[4]}</span> — {r[5]}</td></tr>)}</tbody></table></div>
    <p style={{ margin: "10px 0 0" }} aria-live="polite"><b>IMPACT AT A GLANCE (Modeled)</b> — <b className="nc-acc">+28%</b> Application Conversion Lift (Modeled) · <b className="nc-acc">+41%</b> Young User Acquisition Lift (Modeled) · <b className="nc-acc">−22%</b> Cost Per Approved Account (Modeled). <span style={{ color: "#9a9aa0" }}>Source: Next Card Digital Strategy Model · Period: 2025 Pilot Projection (Modeled). Note: All KPIs are Modeled based on internal pilot assumptions and market benchmarks. Selected channel: {cur[0]}.</span></p>
  </Nc>;
}

/* ---------------- 32 — Six-Month Timeline ---------------- */
const TIMELINE32: Array<[string, string, string, Record<string, string[] | string>]> = [
  ["Prepare", "Lay the foundation.", "Define, build, and de-risk.", { Product: ["Finalize value proposition & product tiers", "Build core platform, account, and card", "Credit policy framework & risk strategy", "Design onboarding & KYC/AML flows"], Marketing: ["Brand identity & tone for Gen Z", "Build waitlist & landing page", "Content seeding on social platforms", "Creator partnerships (tease phase)"], Merchant: ["Define target merchant segments", "Onboard pilot partners (online & offline)", "Negotiate offers & data sharing", "Build merchant portal (MVP)"], Analytics: ["Define KPIs, events, and dashboards", "Set up data pipeline & attribution", "Build risk scorecards (v1)", "Establish experiment framework"], Gate: "Go / No-Go on product, risk model, and unit economics.", Experiment: "Credit line at first use: ¥3K vs ¥5K vs ¥8K", Milestone: "Tech & risk ready. Waitlist target: 100K sign-ups." }],
  ["Launch", "Launch with impact.", "Go live. Acquire. Activate.", { Product: ["Launch card issuance (digital-first)", "Instant virtual card + Apple/Pay rails", "Spend controls & smart alerts", "Customer support & self-serve center"], Marketing: ["Official launch campaign", "Influencer & KOL burst", "Referral program (early adopters)", "Campus & community activations"], Merchant: ["Launch partner offers & campaigns", "Co-marketing with top merchants", "In-store QR & wallet acceptance", "Track activation & redemptions"], Analytics: ["Real-time funnel & cohort dashboards", "Monitor activation & early spend", "Fraud monitoring & model tuning", "A/B testing always-on"], Gate: "Is activation ≥ target and credit performance within guardrails?", Experiment: "Onboarding flow: Social login vs Mobile OTP", Milestone: "100K+ cards issued. Activation rate ≥ 30%." }],
  ["Scale", "Expand reach efficiently.", "Increase acquisition and usage.", { Product: ["Raise credit line (behavior-based)", "Add Pay Later & installment options", "Savings pockets & auto-pay", "Enhance app performance"], Marketing: ["Performance marketing at scale", "Lookalike & interest-based targeting", "UGC campaign: #NextMove", "Expand campus ambassador program"], Merchant: ["Expand to key categories", "Tiered offer engine (personalized)", "Merchant funding solutions (pilot)", "Increase offline coverage"], Analytics: ["LTV cohort analysis & segmentation", "Propensity & offer uplift models", "Merchant ROI dashboard", "Risk policy optimization"], Gate: "Unit economics positive on incremental cohorts?", Experiment: "Personalized offers: AI-ranked vs Rule-based", Milestone: "300K active cardholders. Monthly spend / active ≥ ¥1,500." }],
  ["Engage", "Deepen relationships.", "Drive engagement and loyalty.", { Product: ["Launch loyalty program (points)", "Challenges & streaks gamification", "Card customization (designs)", "Add travel & lifestyle benefits"], Marketing: ["Loyalty & engagement campaigns", "Community-led content series", "User spotlight & stories", "Re-engagement for inactive users"], Merchant: ["Exclusive member offers", "Limited-time drops & events", "Co-branded experiences", "Measure incremental lift"], Analytics: ["Engagement scoring & triggers", "Churn risk detection & save actions", "Marketing mix modeling", "Cohort health monitoring"], Gate: "Is engagement driving retention and spend quality?", Experiment: "Gamified challenges: Points vs Badges", Milestone: "600K active cardholders. 30-day retention ≥ 65%." }],
  ["Optimize", "Improve efficiency.", "Optimize performance & ops.", { Product: ["Credit policy refinement (risk tiers)", "Automated limit & APR optimization", "Dispute automation & self-serve", "Cost-to-serve reduction initiatives"], Marketing: ["Creative & channel optimization", "CAC payback improvement", "Lifecycle campaigns by segment", "Partner & affiliate expansion"], Merchant: ["Optimize offer ROI & margins", "Data-driven merchant segmentation", "Expand high-ROI partnerships", "Streamline settlement & ops"], Analytics: ["Profitability by cohort & segment", "Early warning indicators", "A/B & multi-armed bandits at scale", "Forecasting & capacity planning"], Gate: "Are risk, cost, and return targets being met?", Experiment: "Credit limit strategy: Conservative vs Aggressive", Milestone: "800K active cardholders. 30+ DPD rate ≤ 1.8%." }],
  ["Maximize", "Maximize customer lifetime value.", "Maximize CLV and market position.", { Product: ["Premium tier & enhanced benefits", "Wealth & investing integrations", "Family / group accounts (pilot)", "International usage (beta markets)"], Marketing: ["Brand campaign: own the category", "Strategic partnerships (ecosystem)", "Event sponsorships & pop-ups", "Advocacy & referral flywheel"], Merchant: ["Category leadership programs", "Joint innovation & data products", "Enterprise & campus solutions", "International merchant expansion"], Analytics: ["CLV maximization models", "Incrementality & uplift measurement", "Risk-return optimization", "Strategic scenario planning"], Gate: "Are we #1 in target segments and markets?", Experiment: "Premium tier benefits: Travel vs Lifestyle", Milestone: "1.0M active cardholders. Monthly spend / active ≥ ¥2,200." }],
];
export function NextCardTimeline32() {
  const [m, setM] = useState(0);
  const LANES = ["Product", "Marketing", "Merchant", "Analytics"] as const;
  return <Nc n="32" title="Six-Month Timeline — From Launch to Leadership" label="Next Card six-month timeline — interactive rebuild of Next_Card_Image_32">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Credit for the Next Generation — a 6-month roadmap built for Gen Z. <b style={{ color: "#fff" }}>NORTH STAR</b> — Be Gen Z's primary card for everyday life · Active Cardholders <b className="nc-acc">1.0M</b> Modeled · Monthly Spend / Active <b className="nc-acc">¥2,200</b> Modeled · 30+ DPD Rate <b className="nc-acc">1.6%</b> Modeled. The full six-month × workstream grid, as printed — select a month column to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "86px repeat(6,1fr)", fontSize: 10.2, lineHeight: 1.4 }}>
      <p style={{ margin: 0, padding: "5px 6px", borderBottom: "1px solid #333438", color: "#9a9aa0" }}>WORKSTREAM</p>
      {TIMELINE32.map(([t, sub], i) => <p key={t} onClick={() => setM(i)} style={{ margin: 0, padding: "5px 6px", borderBottom: "1px solid #333438", borderLeft: "1px solid #232426", cursor: "pointer", background: m === i ? "#2a1408" : "transparent" }}><b style={{ fontSize: 11.5 }}>Month {i + 1} · {t}</b><br /><span style={{ color: "#9a9aa0" }}>{sub}</span></p>)}
      {LANES.map((lane) => <div key={lane} style={{ display: "contents" }}>
        <p className="nc-acc" style={{ margin: 0, padding: "5px 6px", borderBottom: "1px solid #232426", fontWeight: 700, fontSize: 10.5 }}>{lane.toUpperCase()}</p>
        {TIMELINE32.map((mo, i) => <div key={mo[0]} onClick={() => setM(i)} style={{ padding: "5px 6px", borderBottom: "1px solid #232426", borderLeft: "1px solid #1d1e20", cursor: "pointer", background: m === i ? "#1c0d06" : "transparent" }}>{(mo[3][lane] as string[]).map((x) => <p key={x} style={{ margin: "0 0 3px" }}>· {x}</p>)}</div>)}
      </div>)}
      {(["Gate", "Experiment", "Milestone"] as const).map((k) => <div key={k} style={{ display: "contents" }}>
        <p className="nc-acc" style={{ margin: 0, padding: "5px 6px", borderBottom: "1px solid #232426", fontWeight: 700, fontSize: 10.5 }}>{k === "Gate" ? "DECISION GATE" : k.toUpperCase()}</p>
        {TIMELINE32.map((mo, i) => <p key={mo[0]} onClick={() => setM(i)} style={{ margin: 0, padding: "5px 6px", borderBottom: "1px solid #232426", borderLeft: "1px solid #1d1e20", cursor: "pointer", background: m === i ? "#1c0d06" : "transparent", fontWeight: k === "Milestone" ? 700 : 400 }}>{mo[3][k] as string}</p>)}
      </div>)}
    </div>
    <p style={{ margin: "10px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b className="nc-acc">TARGET CUSTOMER</b> — Gen Z (18–26) in tier-1 to tier-3 cities. Digital-first, value-driven, experience-seeking.</span><span><b className="nc-acc">RISK PRINCIPLES</b> — Responsible credit. Transparent terms. Prevent risk early. Price for risk.</span><span><b className="nc-acc">DATA &amp; PRIVACY</b> — Privacy by design. Minimum necessary data. User control and clear consent.</span><span><b className="nc-acc">SUCCESS DEFINITION (BY MONTH 6)</b> — Sustainable unit economics, strong retention, and top-of-mind brand for Gen Z.</span><span className="nc-tab" style={{ background: ORANGE, borderColor: ORANGE, color: "#fff", fontWeight: 700 }}>Next Move. Every Day.</span></p>
  </Nc>;
}

/* ---------------- 33 — Campaign Content System ---------------- */
const CAMPAIGN_MODULES = [
  ["SOCIAL MEDIA MARKETING", "Short-form content, trends, challenges, and community conversations that stop the scroll and start the story.", "Awareness · Consideration"],
  ["INFLUENCER COLLABORATIONS", "Partner with trusted voices to co-create authentic content that inspires and informs.", "Awareness · Consideration · Conversion"],
  ["GAMIFIED REWARDS", "Quests, levels, and challenges that make smart financial habits fun and rewarding.", "Conversion · Engagement"],
  ["CAMPUS ACTIVATION", "On-ground experiences, pop-up events, and peer communities that bring Next Card to campus life.", "Awareness · Consideration · Conversion"],
  ["MOBILE-FIRST WEBSITE AND APP", "Seamless digital experience from discovery to application to everyday management.", "Conversion · Engagement"],
  ["SOCIAL-RESPONSIBILITY INITIATIVES", "Drive positive impact through sustainability and financial literacy programs with Gen Z.", "Engagement · Advocacy"],
];
const FUNNEL_STAGES33 = [["AWARENESS", "Get noticed. Spark curiosity."], ["CONSIDERATION", "Build interest. Show relevance."], ["CONVERSION", "Drive action. Make it easy."], ["ENGAGEMENT", "Deepen connection. Encourage usage."], ["ADVOCACY", "Turn fans into advocates."]];
export function NextCardCampaignSystem() {
  const [mod, setMod] = useState(0);
  const [stage, setStage] = useState(2);
  const AROUND = [[50, 0], [86, 22], [86, 68], [50, 88], [13, 68], [13, 22]];
  return <Nc n="33" title="Campaign Content System" label="Next Card campaign content system — interactive rebuild of Next_Card_Image_33">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Campaign Ecosystem — connected content. Consistent narrative. Continuous impact. NEXT CARD — Credit for the Next. The six connected module boxes around the central hub, the funnel-stages column at left and the metric row, as printed:</p>
    <div style={{ display: "grid", gridTemplateColumns: "168px 1fr", gap: 12, alignItems: "start" }}>
      <div role="group" aria-label="Funnel stages">
        <p className="nc-acc" style={{ margin: "0 0 5px", fontWeight: 700, letterSpacing: ".08em", fontSize: 12 }}>FUNNEL STAGES</p>
        {FUNNEL_STAGES33.map(([t, b], i) => <button key={t} type="button" onClick={() => setStage(i)} aria-pressed={stage === i} style={{ display: "block", width: "100%", textAlign: "left", background: stage === i ? "#2a1408" : "#101012", border: `1px solid ${stage === i ? ORANGE : "#2c2d30"}`, borderRadius: 8, color: "#fff", padding: "7px 9px", marginBottom: 6, cursor: "pointer", font: "inherit", fontSize: 11.8 }}><b>{t}</b><br /><span style={{ color: "#c9c9ce" }}>{b}</span></button>)}
      </div>
      <div style={{ position: "relative", height: 400 }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true"><circle cx="50" cy="46" r="30" fill="none" stroke="#3a3b40" strokeWidth="0.6" strokeDasharray="2 1.6" /></svg>
        <div style={{ position: "absolute", left: "50%", top: "46%", transform: "translate(-50%,-50%)", width: 205, textAlign: "center", border: `2px solid ${ORANGE}`, borderRadius: "50%", padding: "26px 16px", background: "radial-gradient(circle, #1c0d06, #101012 78%)" }}>
          <p className="nc-acc" style={{ margin: 0, letterSpacing: ".14em", fontSize: 9.5 }}>CAMPAIGN NARRATIVE</p>
          <p style={{ fontSize: 21, fontWeight: 800, margin: "5px 0", lineHeight: 1.15 }}>NEXT,<br />FOR WHAT'S NEXT.</p>
          <p style={{ color: "#c9c9ce", margin: 0, fontSize: 11.3 }}>A credit card that grows with Gen Z — empowering every next step.</p>
        </div>
        {CAMPAIGN_MODULES.map(([t, b, impact], i) => <button key={t} type="button" onClick={() => setMod(i)} aria-pressed={mod === i} style={{ position: "absolute", left: `${AROUND[i][0]}%`, top: `${AROUND[i][1]}%`, transform: "translate(-50%,0)", width: 168, background: mod === i ? "#2a1408" : "#101012", border: `1px solid ${mod === i ? ORANGE : "#333438"}`, borderRadius: 9, color: "#fff", padding: "7px 9px", cursor: "pointer", font: "inherit", textAlign: "left", fontSize: 11.3, lineHeight: 1.4 }}><b style={{ fontSize: 11.8 }}>{String(i + 1).padStart(2, "0")} {t}</b><br /><span style={{ color: "#9a9aa0" }}>{impact}</span></button>)}
      </div>
    </div>
    <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 10, marginTop: 8 }} aria-live="polite">
      <p style={{ margin: 0 }}><b>{CAMPAIGN_MODULES[mod][0]}</b> — <span style={{ color: "#c9c9ce" }}>{CAMPAIGN_MODULES[mod][1]}</span> <span style={{ color: "#9a9aa0" }}>Primary funnel impact: {CAMPAIGN_MODULES[mod][2]}.</span> <span className="nc-acc" style={{ fontWeight: 700 }}>TONE OF VOICE</span> — Real. Empowering. Forward-looking. Made for Gen Z. Made for Next.</p>
    </div>
    <p style={{ margin: "12px 0 0", display: "flex", gap: 14, flexWrap: "wrap" }}><b>SYSTEM STRENGTH (MODELED)</b><span><b className="nc-acc">+27%</b> Brand awareness lift</span><span><b className="nc-acc">+32%</b> Consideration lift</span><span><b className="nc-acc">+24%</b> Conversion uplift</span><span><b className="nc-acc">+28%</b> Engagement increase</span><span><b className="nc-acc">+18%</b> Advocacy growth</span><span style={{ color: "#9a9aa0" }}>(all Modeled)</span></p>
    <p style={{ color: "#9a9aa0", margin: "8px 0 0" }}>PRIMARY IMPACT KEY: 👁 Awareness · 🔍 Consideration · ♡ Conversion · ⟳ Engagement · 👥 Advocacy. Note: KPI uplift figures are modeled estimates based on benchmark data from similar youth-focused financial campaigns and are for illustrative purposes only. Selected funnel stage: {FUNNEL_STAGES33[stage][0]}.</p>
  </Nc>;
}

/* ---------------- 23 — Value Triangle ----------------
   Pass 7 integration: the registry previously routed this file to the
   tab-based ProjectScreens NextCardValueTriangle (only one party's list
   visible at rest). This chapter rebuild draws the printed triangle:
   three cream party boxes around the Shared Sustainable Value circle,
   labelled exchange arrows on every edge, all content at rest. */
const TRI_PARTIES: Array<{ name: string; icon: string; items: Array<[string, string]> }> = [
  { name: "CUSTOMER", icon: "👤", items: [["🎁", "Relevant benefits"], ["📱", "Simple digital onboarding"], ["🛡", "Financial confidence"], ["📍", "Social and local utility"]] },
  { name: "BANK", icon: "🏛", items: [["👤", "New customer acquisition"], ["📊", "Interchange and engagement"], ["🛡", "Responsible credit growth"], ["🔗", "Cross-selling potential"]] },
  { name: "MERCHANT", icon: "🏪", items: [["👥", "Qualified traffic"], ["🎯", "Campaign attribution"], ["🔄", "Repeat visits"], ["📍", "City-based audience targeting"]] },
];
export function NextCardValueTriangleChapter() {
  const [sel, setSel] = useState(0);
  const box = (i: number, style: React.CSSProperties) => {
    const p = TRI_PARTIES[i];
    return <button key={p.name} type="button" onClick={() => setSel(i)} aria-pressed={sel === i} style={{ position: "absolute", width: 238, background: "#f3ede4", color: "#161513", border: sel === i ? `2.5px solid ${ORANGE}` : "2.5px solid transparent", borderRadius: 10, padding: "8px 12px", cursor: "pointer", font: "inherit", textAlign: "left", boxShadow: "0 4px 18px rgba(0,0,0,.45)", ...style }}>
      {p.items.map(([ic, t], j) => <span key={t} style={{ display: "flex", gap: 9, alignItems: "center", padding: "5.5px 0", borderBottom: j < 3 ? "1px solid #d8d2c4" : undefined, fontSize: 12.3 }}><span style={{ color: ORANGE, fontSize: 14, width: 17, textAlign: "center" }}>{ic}</span>{t}</span>)}
    </button>;
  };
  const party = (i: number, style: React.CSSProperties) => <p key={i} style={{ position: "absolute", margin: 0, display: "flex", alignItems: "center", gap: 7, ...style }}><span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: "50%", border: "1.5px solid #8a8a90", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{TRI_PARTIES[i].icon}</span><b style={{ color: ORANGE, letterSpacing: ".1em", fontSize: 14.5 }}>{TRI_PARTIES[i].name}</b></p>;
  const flow = (txt: string, style: React.CSSProperties, orange?: boolean) => <span style={{ position: "absolute", width: 118, fontSize: 10.6, lineHeight: 1.35, color: orange ? "#ffb59d" : "#c9c9ce", ...style }}>{txt}</span>;
  return <Nc n="23" title="Customer, Bank and Merchant Value Triangle" label="Next Card value triangle — interactive rebuild of Next_Card_Image_23">
    <div style={{ display: "grid", gridTemplateColumns: "218px 1fr", gap: 16, alignItems: "stretch" }}>
      <div style={{ borderRight: "1px solid #2c2d30", paddingRight: 14, display: "flex", flexDirection: "column" }}>
        <p style={{ color: "#e8e8ea", margin: "2px 0 0", fontSize: 13.5, lineHeight: 1.55 }}>Next Card creates a positive value exchange between customers, banks and merchants—driving growth, engagement and sustainable outcomes for all.</p>
        <p style={{ margin: "auto 0 0", letterSpacing: ".1em", fontWeight: 800, fontSize: 15 }}>NEXT <span className="nc-acc">CARD</span><br /><span style={{ fontWeight: 400, fontSize: 9.5, color: "#9a9aa0", letterSpacing: ".22em" }}>CREDIT MADE RELEVANT</span></p>
      </div>
      <div style={{ position: "relative", height: 452 }} role="group" aria-label="Value triangle diagram">
        <svg viewBox="0 0 660 452" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
          <defs><marker id="tri-o" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#ff4b1f" /></marker><marker id="tri-w" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e8e8ea" /></marker></defs>
          <line x1="196" y1="330" x2="292" y2="128" stroke="#ff4b1f" strokeWidth="1.8" markerEnd="url(#tri-o)" />
          <line x1="306" y1="136" x2="210" y2="338" stroke="#e8e8ea" strokeWidth="1.4" markerEnd="url(#tri-w)" />
          <line x1="452" y1="128" x2="548" y2="330" stroke="#ff4b1f" strokeWidth="1.8" markerEnd="url(#tri-o)" />
          <line x1="538" y1="338" x2="466" y2="136" stroke="#e8e8ea" strokeWidth="1.4" markerEnd="url(#tri-w)" />
          <line x1="252" y1="392" x2="408" y2="392" stroke="#ff4b1f" strokeWidth="1.8" markerEnd="url(#tri-o)" />
          <line x1="408" y1="408" x2="252" y2="408" stroke="#e8e8ea" strokeWidth="1.4" markerEnd="url(#tri-w)" />
          <line x1="330" y1="196" x2="330" y2="222" stroke="#ff4b1f" strokeWidth="1.3" strokeDasharray="3 3" markerEnd="url(#tri-o)" />
          <line x1="238" y1="306" x2="262" y2="290" stroke="#ff4b1f" strokeWidth="1.3" strokeDasharray="3 3" markerEnd="url(#tri-o)" />
          <line x1="422" y1="306" x2="398" y2="290" stroke="#ff4b1f" strokeWidth="1.3" strokeDasharray="3 3" markerEnd="url(#tri-o)" />
        </svg>
        {party(0, { left: "50%", top: 0, transform: "translateX(-50%)" })}
        {box(0, { left: "50%", top: 36, transform: "translateX(-50%)" })}
        {box(1, { left: 0, bottom: 34 })}
        {box(2, { right: 0, bottom: 34 })}
        {party(1, { left: 0, bottom: 0 })}
        {party(2, { right: 0, bottom: 0, flexDirection: "row-reverse" })}
        <div style={{ position: "absolute", left: "50%", top: 226, transform: "translateX(-50%)", width: 168, height: 168, borderRadius: "50%", border: "1.5px solid rgba(255,75,31,.65)", background: "radial-gradient(circle, #160b06, #0b0b0d 75%)", textAlign: "center", padding: "30px 14px 0" }}>
          <p style={{ margin: 0, fontSize: 15 }}>👥</p>
          <p style={{ margin: "3px 0 5px", fontWeight: 800, fontSize: 13.5, letterSpacing: ".05em", lineHeight: 1.25 }}>SHARED SUSTAINABLE VALUE</p>
          <p style={{ margin: 0, color: "#c9c9ce", fontSize: 10.8, lineHeight: 1.5, borderTop: `2px solid ${ORANGE}`, paddingTop: 6, display: "inline-block" }}>Stronger relationships<br />Healthier growth<br />Better cities</p>
        </div>
        {flow("Better products and experiences", { left: 66, top: 168, textAlign: "right" }, true)}
        {flow("Trust and responsible credit access", { left: 128, top: 252, textAlign: "right" })}
        {flow("Relevant offers and experiences", { right: 62, top: 168 })}
        {flow("Spend and engagement in real life", { right: 128, top: 252 })}
        {flow("Business growth and loyalty", { left: "50%", top: 368, transform: "translateX(-50%)", width: 170, textAlign: "center" }, true)}
        {flow("Solutions, insights and support", { left: "50%", top: 416, transform: "translateX(-50%)", width: 180, textAlign: "center" })}
      </div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }} aria-live="polite">Selected: <b style={{ color: "#fff" }}>{TRI_PARTIES[sel].name}</b> — {TRI_PARTIES[sel].items.map(([, t]) => t).join(" · ")}. Every edge of the triangle is a two-way exchange into the shared value at the centre, as printed.</p>
  </Nc>;
}

/* ---------------- 35 — Iteration Board ---------------- */
const ITERATIONS: Array<[string, string, [string, string], [string, string], ...string[]]> = [
  ["Application Flow", "Long application vs. progressive application",
    ["Long application", "“Apply for Next Card” — one long form with a 5-step header (1 Personal Info · 2 Work Info · 3 Contact Info · 4 Financial Info · 5 Review) and fields Full Name / Mobile Number / Email. [Next]"],
    ["Progressive application", "“Apply in minutes — Step 1 of 3.” Mobile Number [Enter mobile number] [Continue]. 🛡 We'll verify your identity securely."],
    "Progressive application", "Lower entry barrier and reduce drop-off.", "Breaking the form into steps feels faster and easier for Gen Z users, especially on mobile.", "Higher completion rate", "Expected increase in application completion by 20–30%."],
  ["Rewards Logic", "Category-based vs. merchant-based rewards",
    ["Category-based rewards", "“Choose your top categories — Get more rewards in the categories you love.” Coffee 5% · Transit 5% · Food Delivery 5% · Online Shopping 5%. You can update anytime in settings."],
    ["Merchant-based rewards", "“Your favorite brands — Earn more rewards at the places you love.” Seesaw 5% · M Stand 5% · % Arabica 5% · CHA BAI DAO 5%. You can update anytime in settings."],
    "Category-based rewards", "More flexible and future-proof.", "Categories adapt to user behavior across merchants and evolve with new lifestyles.", "Greater user satisfaction and stickiness", "Users feel in control and see rewards that truly fit their lifestyle."],
  ["Referral Mechanism", "Individual referral vs. squad referral",
    ["Individual referral", "“Invite friends — You and your friend get rewarded.” You get 50 points · Friend gets 50 points. [Invite Now]"],
    ["Squad referral", "“Build your squad — More friends, bigger rewards.” 2 friends 100 pts · 5 friends 300 pts · 10 friends 800 pts · 20 friends 2000 pts. [Create Squad]"],
    "Squad referral", "Stronger viral growth and community feel.", "Squad-based mechanics motivate Gen Z to invite more and stay engaged together.", "Faster user acquisition and activation", "Expected increase in referral conversion by 30–50%."],
];
export function NextCardIterationBoard() {
  const [d, setD] = useState(0);
  const cellCard = (title: string, body: string, chosen: boolean) => <div style={{ background: "#f3ede4", color: "#141414", borderRadius: 8, padding: "7px 8px", border: chosen ? `2px solid ${ORANGE}` : "2px solid transparent" }}>
    <p style={{ margin: 0, fontWeight: 700, fontSize: 11 }}>{title}{chosen ? <span className="nc-acc"> ✓</span> : null}</p>
    <p style={{ margin: "3px 0 0", fontSize: 10.5, lineHeight: 1.45 }}>{body}</p>
  </div>;
  return <Nc n="35" title="Iteration Board" label="Next Card iteration board — full printed table rebuild of Next_Card_Image_35">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Credit Card Concept — evaluating key design directions through options. Each decision is made based on user value, clarity, and long-term impact. The full board, as printed — select a row to highlight it.</p>
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 11.5 }}>
        <thead><tr>{["Decision Area", "Option A", "Option B", "Final Decision ✓", "Reason", "Expected Effect"].map((h) => <th key={h} style={{ textAlign: "left", padding: "7px 8px", borderBottom: `2px solid ${ORANGE}`, color: h.startsWith("Final") ? ORANGE : "#f5f5f5", fontSize: 11, letterSpacing: ".04em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>)}</tr></thead>
        <tbody>{ITERATIONS.map((row, i) => {
          const finalIsA = row[4] === row[2][0];
          return <tr key={row[0]} onClick={() => setD(i)} aria-selected={d === i} style={{ cursor: "pointer", background: d === i ? "#17130f" : "transparent" }}>
            <td style={{ padding: "9px 8px", borderBottom: "1px solid #2c2d30", verticalAlign: "top", minWidth: 108 }}><b className="nc-acc">{String(i + 1).padStart(2, "0")}</b><br /><b>{row[0]}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>{row[1]}</span></td>
            <td style={{ padding: "9px 6px", borderBottom: "1px solid #2c2d30", verticalAlign: "top", minWidth: 168 }}>{cellCard(row[2][0], row[2][1], finalIsA)}</td>
            <td style={{ padding: "9px 6px", borderBottom: "1px solid #2c2d30", verticalAlign: "top", minWidth: 168 }}>{cellCard(row[3][0], row[3][1], !finalIsA)}</td>
            <td style={{ padding: "9px 8px", borderBottom: "1px solid #2c2d30", verticalAlign: "top", minWidth: 104 }}><b className="nc-acc">✓ {row[4]}</b></td>
            <td style={{ padding: "9px 8px", borderBottom: "1px solid #2c2d30", verticalAlign: "top", minWidth: 130 }}><b>{row[5]}</b><br /><span style={{ color: "#c9c9ce" }}>{row[6]}</span></td>
            <td style={{ padding: "9px 8px", borderBottom: "1px solid #2c2d30", verticalAlign: "top", minWidth: 130 }}><b>{row[7]}</b><br /><span style={{ color: "#c9c9ce" }}>{row[8]}</span></td>
          </tr>;
        })}</tbody>
      </table>
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>These decisions are based on user research, Gen Z behaviors, and product goals for Next Card.</p>
  </Nc>;
}

/* ---------------- 36 — Application Friction Reduction ---------------- */
export function NextCardFriction() {
  const [after, setAfter] = useState(true);
  const [astep, setAstep] = useState(0);
  const ASTEPS = ["Personal Info", "Employment", "Verification", "Review", "Submit"];
  return <Nc n="36" title="Application Friction Reduction" label="Next Card friction reduction — interactive rebuild of Next_Card_Image_36">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Simpler. Faster. Smarter. Designed for Gen Z. Respecting time. Reducing friction. · NEXT CARD — CREDIT CARD FOR NEXT GENERATION.</p>
    <div style={{ display: "flex", gap: 5 }} role="group" aria-label="Before after toggle">
      <button type="button" className="nc-tab" aria-pressed={!after} onClick={() => setAfter(false)}>BEFORE ⊗ — Long form. Too many fields. No progress. Benefits separated.</button>
      <button type="button" className="nc-tab" aria-pressed={after} onClick={() => setAfter(true)}>AFTER ✓ — Progressive steps. Prefilled. Clear progress.</button>
    </div>
    {!after ? <div style={{ background: "#f3ede4", color: "#141414", borderRadius: 10, padding: 14, marginTop: 10 }} aria-live="polite">
      <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>Application Form</p>
      <p style={{ margin: "6px 0 0" }}><b>Personal Information</b> — Full Name · ID Number · Date of Birth · Mobile Number · Email Address · Current Address (all “Please enter / Select date”)</p>
      <p style={{ margin: "5px 0 0" }}><b>Employment Information</b> — Employment Type · Company Name · Job Title · Work City · Monthly Income (CNY) · Work Phone</p>
      <p style={{ margin: "5px 0 0" }}><b>Additional Information</b> — Education · Marital Status · Existing Card (Y/N) · Emergency Contact · Relationship · Contact Number</p>
      <p style={{ margin: "5px 0 0" }}><b>Upload Documents</b> — ID Card - Front · ID Card - Back · Income Proof · Other (Optional)</p>
      <p style={{ margin: "5px 0 0" }}>☐ I have read and agree to the terms and conditions · [Submit Application]</p>
      <p style={{ margin: "8px 0 0" }}><b>Card Benefits</b> (separate panel) — Earn points on everyday spend · Exclusive youth privileges · Access lifestyle partners · Seasonal promotions · Travel and entertainment offers. <b>Representative Example</b> — Credit Limit Up to ¥50,000 · Annual Fee ¥199 · Interest Rate (APR) 18.00% · Learn more ›</p>
    </div> : <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 14, marginTop: 10 }} aria-live="polite">
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }} role="group" aria-label="Progress steps">{ASTEPS.map((t, i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span style={{ color: "#9a9aa0" }}>—</span>}<button type="button" className="nc-tab" aria-pressed={astep === i} onClick={() => setAstep(i)}>{i + 1} {t}</button></span>)}<span className="nc-tab" style={{ marginLeft: "auto" }}>🔖 Save and return</span></div>
      {astep === 0 ? <div>
        <p style={{ margin: "10px 0 0" }}><span className="nc-acc">Step 1 of 5</span> · <b style={{ fontSize: 15 }}>Personal Information</b> · <span style={{ color: "#7ac74f" }}>✓ Prefilled from bank records where available</span></p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 14px", marginTop: 6 }}>
          {[["Full Name", "Zhang Yihan"], ["ID Number", "1101 **** **** 1234"], ["Date of Birth", "2002-05-20 📅"], ["Mobile Number", "138 **** 8888"], ["Email Address", "yihan.zhang@example.com"], ["Current Address", "88 Chengdu Rd, Shanghai ⌄"]].map(([k, v]) => <p key={k} className="nc-row"><span style={{ color: "#9a9aa0" }}>{k}</span><b>{v}</b></p>)}
        </div>
        <p style={{ margin: "10px 0 0", display: "flex", gap: 10, alignItems: "center" }}><button type="button" className="nc-cta" style={{ width: "auto", padding: "9px 34px" }} onClick={() => setAstep(1)}>Continue</button><span style={{ color: "#9a9aa0" }}>Press Enter →</span></p>
        <p style={{ color: "#9a9aa0", margin: "6px 0 0" }}>Sample values exactly as printed on the slide (masked in the original). Right rail as printed: NEXT CARD visual · Why Next Card — ✓ Up to 8% back on everyday spend · ✓ Exclusive Gen Z lifestyle benefits · ✓ Curated partners and experiences · ✓ No annual fee for first year · Eligibility Check (Modeled) [Great fit] — You're likely to qualify for up to ¥50,000 credit limit. View details ›</p>
      </div> : <p style={{ margin: "10px 0 0" }}>Step {astep + 1} of 5 — {ASTEPS[astep]}: the printed slide shows Step 1 in full; the remaining steps appear as the progress rail above (Employment → Verification → Review → Submit). <button type="button" className="nc-tab" onClick={() => setAstep((s) => Math.max(0, s - 1))}>← Back</button>{astep < 4 && <button type="button" className="nc-tab" onClick={() => setAstep((s) => s + 1)}>Next →</button>}</p>}
    </div>}
    <p style={{ margin: "10px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b>Prefilled Information</b> — Faster with data you've already provided to your bank.</span><span><b>Save &amp; Return</b> — Save anytime and continue where you left off.</span><span><b>Clear Progress</b> — Know exactly how far you've come.</span><span><b>Transparent Eligibility</b> — See your eligibility range before you apply.</span></p>
    <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 12, marginTop: 10 }}>
      <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>TASK TIME &amp; FRICTION ANALYSIS (Modeled)</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginTop: 8 }}>
        <p style={{ margin: 0 }}>Time to Complete (Modeled)<br />BEFORE <b className="nc-acc" style={{ fontSize: 17 }}>9:15</b> minutes · AFTER <b style={{ color: "#7ac74f", fontSize: 17 }}>2:45</b> minutes<br /><b style={{ color: "#7ac74f" }}>Time Saved 70% reduction</b></p>
        <p style={{ margin: 0 }}>Fields to Complete (Modeled)<br />BEFORE <span style={{ display: "inline-block", width: "70%", height: 9, background: ORANGE, verticalAlign: "middle" }} /> <b>23</b><br />AFTER <span style={{ display: "inline-block", width: "24%", height: 9, background: "#7ac74f", verticalAlign: "middle" }} /> <b>8</b></p>
        <p style={{ margin: 0 }}>Perceived Effort (Modeled)<br />BEFORE <span className="nc-acc">★★★★☆</span><br />AFTER <span style={{ color: "#7ac74f" }}>★☆☆☆☆</span></p>
        <p style={{ margin: 0 }}>Drop-off Rate (Modeled)<br />BEFORE <b className="nc-acc" style={{ fontSize: 17 }}>62%</b> → AFTER <b style={{ fontSize: 17 }}>18%</b></p>
      </div>
    </div>
  </Nc>;
}

/* ---------------- 37 — Visual Inspiration Board ---------------- */
const MOOD_PANELS = [
  ["URBAN NIGHT MOVEMENT", "Photograph as printed: night expressway light trails through a city skyline, orange-red streams."],
  ["MOBILE PAYMENT BEHAVIOR", "Photograph as printed: phone completing a payment — ¥236.00 with a ✓ success mark, orange-edged card beneath."],
  ["CITY ENERGY: SHENZHEN + GUANGZHOU", "Photographs as printed: Shenzhen skyline, Canton Tower at dusk, and a motion-blurred train streak."],
  ["DIGITAL IDENTITY", "App visual as printed: NEXT CARD — Available Limit (¥) 18,600.00 · Used 6,400.00 · 72% Progress ring · This Month 12 Transactions · bar chart · +15% vs Last Month."],
  ["FINANCIAL PROGRESS", "Graphic as printed: ascending dark bars with orange top edges, rising left to right."],
  ["CARD MATERIAL EXPLORATION", "Photograph as printed: matte black physical card with chip and NEXT CARD wordmark, orange edge."],
  ["WARM RED-ORANGE LIGHT", "Three light-study frames as printed: interior neon lines, streaming light curves, architectural light."],
  ["LIGHT STUDIES", "Three frames as printed: dark form with orange edge light, red-orange arc, carbon texture."],
  ["MOTION FRAMES", "Four frames as printed: 01 START · 02 MOVE · 03 GROW · 04 NEXT."],
];
export function NextCardInspiration() {
  const [p, setP] = useState(3);
  const [sw, setSw] = useState(2);
  const SWATCHES: Array<[string, string]> = [["Next Black", "#060607"], ["Charcoal", "#17181a"], ["Next Orange", "#FF4B1F"], ["Off-White", "#F5F5F3"], ["Cool Gray", "#C9C9CE"]];
  const tile = (i: number, label: string, body: ReactNode, img?: string) => <div onClick={() => setP(i)} style={{ border: `1.5px solid ${p === i ? ORANGE : "#2c2d30"}`, borderRadius: 9, overflow: "hidden", cursor: "pointer", background: "#0d0d0f" }}>
    <p className="nc-acc" style={{ margin: 0, padding: "6px 9px 4px", fontWeight: 700, letterSpacing: ".07em", fontSize: 10.8 }}>{label}</p>
    {img && <img src={img} alt={`${label} — photograph as printed`} style={{ width: "100%", height: 96, objectFit: "cover", display: "block" }} />}
    {body}
  </div>;
  const txt = (s: string) => <p style={{ margin: 0, padding: "7px 9px", fontSize: 11.8, lineHeight: 1.45, color: "#d8d8dc" }}>{s}</p>;
  return <Nc n="37" title="Visual Inspiration Board" label="Next Card visual inspiration board — interactive rebuild of Next_Card_Image_37">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}><b style={{ color: "#fff", fontSize: 15 }}>NEXT CARD — Progress in your hands.</b> A credit card concept for China's Generation Z. Smart. Social. Forward. Designed for everyday progress and the next chapter. <span className="nc-acc" style={{ fontWeight: 700 }}>KEY WORDS</span> — Next Generation · Urban Energy · Digital Native · Financial Progress · Connected Lifestyle · Warmth in Motion · Simplicity with Edge. The photo moodboard, as printed — photographic tiles are text-free crops from the original slide; select a tile to highlight it:</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9 }}>
      {tile(0, "URBAN NIGHT MOVEMENT", null, "/projects/crops/next-card/mood37-trails.jpg")}
      {tile(1, "MOBILE PAYMENT BEHAVIOR", txt("Phone completing a payment — ¥236.00 with a ✓ success mark, orange-edged card beneath (photograph as printed)."))}
      {tile(2, "CITY ENERGY: SHENZHEN + GUANGZHOU", null, "/projects/crops/next-card/mood37-train.jpg")}
      {tile(3, "DIGITAL IDENTITY", <p style={{ margin: 0, padding: "7px 9px", fontSize: 11.8, lineHeight: 1.5 }}>NEXT CARD — Available Limit (¥) <b style={{ fontSize: 14.5 }}>18,600.00</b> · Used 6,400.00 · <span className="nc-acc"><b>72%</b> Progress ring</span> · This Month 12 Transactions · +15% vs Last Month</p>)}
      {tile(4, "FINANCIAL PROGRESS", null, "/projects/crops/next-card/mood37-progress.jpg")}
      {tile(5, "CARD MATERIAL EXPLORATION", <div style={{ margin: "2px 9px 9px", background: "linear-gradient(150deg,#1b1c1f,#060607 72%)", border: "1px solid #3a2320", borderRadius: 8, padding: "9px 10px" }} role="img" aria-label="Matte black Next Card render"><span style={{ display: "block", width: 20, height: 14, borderRadius: 3, background: "linear-gradient(135deg,#c9c9ce,#8a8d93)" }} /><b style={{ display: "block", marginTop: 14, letterSpacing: ".1em", fontSize: 11 }}>NEXT CARD</b><span style={{ color: "#c9c9ce", fontSize: 10.5 }}>Matte black physical card, orange edge (photograph as printed).</span></div>)}
      {tile(6, "WARM RED-ORANGE LIGHT", null, "/projects/crops/next-card/mood37-light.jpg")}
      {tile(7, "LIGHT STUDIES", null, "/projects/crops/next-card/mood37-lightstudies.jpg")}
      {tile(8, "MOTION FRAMES", txt("Four frames as printed: 01 START · 02 MOVE · 03 GROW · 04 NEXT."))}
    </div>
    <p aria-live="polite" style={{ margin: "9px 0 0", color: "#c9c9ce" }}>Selected tile: <b style={{ color: "#fff" }}>{MOOD_PANELS[p][0]}</b> — {MOOD_PANELS[p][1]}</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>COLOR PALETTE — click a swatch</p>
        <p style={{ display: "flex", gap: 6, margin: "8px 0 0" }}>{SWATCHES.map(([name, hex], i) => <button key={name} type="button" onClick={() => setSw(i)} aria-pressed={sw === i} aria-label={name} style={{ width: 40, height: 40, background: hex, border: sw === i ? "2px solid #fff" : "1px solid #3a3b3f", borderRadius: 5, cursor: "pointer" }} />)}</p>
        <p style={{ margin: "6px 0 0" }} aria-live="polite">{SWATCHES[sw][0]} — {SWATCHES[sw][1]} (palette as printed; exact hex values are specified on the Brand System slide, file 38).</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>MATERIAL PALETTE</p>
        <p style={{ margin: "6px 0 0", display: "flex", gap: 5, flexWrap: "wrap" }}>{["Matte Black", "Micro-textured Finish", "Laser Detail", "Brushed Metal"].map((mt) => <span key={mt} className="nc-tab">{mt}</span>)}</p></div>
    </div>
    <p style={{ margin: "12px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b className="nc-acc">DESIGN DIRECTION →</b></span><span>Empowering Gen Z to take control of their financial journey.</span><span>Blending digital intelligence with physical quality.</span><span>Creating a card that grows with every next step.</span></p>
  </Nc>;
}

/* ---------------- 38 — Brand System ---------------- */
const BRAND_COLORS: Array<[string, string]> = [["NEXT ORANGE", "#FF4B1F"], ["CHARCOAL", "#111214"], ["GRAPHITE", "#1E1F23"], ["OFF-WHITE", "#F5F5F3"], ["COOL GRAY", "#8A8D93"]];
const GRADIENT_STOPS: Array<[string, string]> = [["0%", "#B71C1C"], ["25%", "#E63A19"], ["50%", "#FF4B1F"], ["75%", "#FF703D"], ["100%", "#FF9A66"]];
const ICONS38 = ["Overview", "Payment", "Repayment", "Rewards", "Benefits", "Budget", "Transfer", "Security", "Lock Card", "Support", "Message", "More"];
const MOTION38 = [["APPEAR", "Slash animates in to initiate."], ["MOVE", "Elements move with speed and direction."], ["TRANSFORM", "Content transforms seamlessly with purpose."], ["SETTLE", "End in a clear, balanced state."]];
export function NextCardBrandSystem() {
  const [cIdx, setCIdx] = useState(0);
  const [mIdx, setMIdx] = useState(0);
  const GLYPHS: Record<string, string> = { Overview: "▦", Payment: "▭", Repayment: "⟳", Rewards: "✦", Benefits: "◎", Budget: "▤", Transfer: "⇄", Security: "🛡", "Lock Card": "🔒", Support: "◔", Message: "✉", More: "···" };
  const cardRender = (w: number, back?: boolean) => <div style={{ width: w, height: Math.round(w * 0.63), background: "linear-gradient(150deg,#1e1f23,#060607 72%)", border: "1px solid #3a2320", borderRadius: 9, padding: "8px 9px", position: "relative", boxShadow: "0 10px 20px rgba(0,0,0,.5)", flex: "none" }} role="img" aria-label="Matte black Next Card render">
    {!back && <span style={{ display: "block", width: 19, height: 13, borderRadius: 3, background: "linear-gradient(135deg,#c9c9ce,#8a8d93)" }} />}
    <span style={{ position: "absolute", right: 9, bottom: 7, fontSize: 15, color: ORANGE, fontWeight: 800 }}>/</span>
    <span style={{ position: "absolute", left: 9, bottom: 7, fontWeight: 800, fontSize: 10.5 }}><span style={{ color: ORANGE }}>/</span> Next</span>
    {back && <span style={{ position: "absolute", right: 9, top: 7, color: ORANGE, fontSize: 9 }}>/ Next step.</span>}
  </div>;
  return <Nc n="38" title="Brand System" label="Next Card brand system — interactive rebuild of Next_Card_Image_38">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2.8fr", gap: 14 }}>
      <div>
        <p style={{ fontSize: 30, fontWeight: 800, margin: 0 }}><span className="nc-acc">/</span> Next <span className="nc-acc" style={{ fontSize: 13, letterSpacing: ".2em" }}>CARD</span></p>
        <p className="nc-acc" style={{ margin: "12px 0 4px", fontWeight: 700 }}>BRAND ESSENCE</p>
        <p style={{ color: "#c9c9ce", margin: 0 }}>Next Card is a credit card concept designed for China Gen Z. Smart credit. Next step. It empowers forward thinkers to explore more, move faster, and live on their own terms.</p>
        <p className="nc-acc" style={{ margin: "12px 0 4px", fontWeight: 700 }}>BRAND IDEA</p>
        <p style={{ fontSize: 17, fontWeight: 700, margin: 0 }}><span className="nc-acc">/</span> Your next,<br />made possible.</p>
        <p className="nc-acc" style={{ margin: "14px 0 5px", fontWeight: 700 }}>CARD RENDERS — as printed</p>
        <div style={{ display: "flex" }}>{cardRender(128)}<span style={{ marginLeft: -26, marginTop: 14 }}>{cardRender(112, true)}</span></div>
        <p style={{ color: "#9a9aa0", margin: "7px 0 0", fontSize: 11.5 }}>Two matte-black cards with chip, orange slash, “/ Next step.” and contactless mark.</p>
      </div>
      <div>
        <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>COLOR PALETTE — click a swatch</p>
        <div style={{ display: "flex", gap: 6, marginTop: 6 }} role="group">{BRAND_COLORS.map(([name, hex], i) => <button key={name} type="button" onClick={() => setCIdx(i)} aria-pressed={cIdx === i} style={{ flex: 1, background: hex, color: i === 3 ? "#111" : "#fff", border: cIdx === i ? "2px solid #fff" : "1px solid #3a3b3f", borderRadius: 6, padding: "16px 6px 6px", cursor: "pointer", font: "inherit", textAlign: "left" }}><span style={{ fontSize: 10 }}>{name}<br />{hex}</span></button>)}</div>
        <p style={{ margin: "6px 0 0" }} aria-live="polite">Selected: <b>{BRAND_COLORS[cIdx][0]}</b> {BRAND_COLORS[cIdx][1]}</p>
        <p className="nc-acc" style={{ margin: "10px 0 4px", fontWeight: 700 }}>GRADIENT SYSTEM — NEXT ORANGE</p>
        <div style={{ height: 20, borderRadius: 4, background: "linear-gradient(90deg,#B71C1C,#E63A19,#FF4B1F,#FF703D,#FF9A66)" }} />
        <p style={{ display: "flex", justifyContent: "space-between", color: "#c9c9ce", margin: "3px 0 0" }}>{GRADIENT_STOPS.map(([p, hex]) => <span key={p}>{p}<br />{hex}</span>)}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
          <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>TYPOGRAPHY — NEXT SANS</b><p style={{ margin: "4px 0 0" }}><span style={{ fontSize: 21, fontWeight: 800 }}>NEXT SANS</span> <span className="nc-acc" style={{ fontWeight: 800 }}>/</span></p><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>Clean, modern and forward-looking. Built for clarity across all digital experiences. <b style={{ color: "#fff" }}>Aa</b> Next Sans Bold · <b style={{ color: "#fff" }}>Aa</b> Next Sans Medium · <b style={{ color: "#fff" }}>Aa</b> Next Sans Regular. USAGE: Bold for headlines / Medium for emphasis / Regular for body copy and UI text.</p></div>
          <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>GRID SYSTEM</b><svg viewBox="0 0 120 44" style={{ width: "100%", display: "block", margin: "5px 0" }} aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <line key={i} x1={6 + i * 10} y1="2" x2={6 + i * 10} y2="42" stroke="#3a3b40" strokeWidth="1" />)}<path d="M84,42 L104,2" stroke="#8a8d93" strokeWidth="7" opacity="0.55" /></svg><p style={{ color: "#c9c9ce", margin: 0 }}>12-column grid system. Flexible layout for digital and print. Slash module defines visual rhythm and directional momentum.</p></div>
          <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>ICONOGRAPHY</b>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 5, marginTop: 6 }}>{ICONS38.map((ic) => <span key={ic} style={{ textAlign: "center", border: "1px solid #232428", borderRadius: 6, padding: "5px 1px 4px", fontSize: 9.3, color: "#c9c9ce" }}><span style={{ display: "block", fontSize: 15, color: "#fff" }}>{GLYPHS[ic]}</span>{ic}</span>)}</div>
            <p style={{ color: "#c9c9ce", margin: "5px 0 0" }}>Simple. Geometric. Forward-moving. Each icon integrates the slash motif to express the spirit of “next step”.</p></div>
          <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>CARD TEXTURES</b><img src="/projects/crops/next-card/brand38-textures.jpg" alt="Card texture tiles as printed: matte black, carbon weave, micro line" style={{ width: "100%", height: 52, objectFit: "cover", display: "block", borderRadius: 5, margin: "5px 0" }} /><p style={{ color: "#c9c9ce", margin: 0 }}>MATTE BLACK · CARBON WEAVE · MICRO LINE — Premium materials. Subtle details. Textures reflect technology, movement and individuality.</p>
            <p style={{ margin: "6px 0 0" }}><b>GRADIENT RULES</b> — DIRECTION: gradients follow the slash angle to create a sense of forward momentum · CONTRAST: use on dark backgrounds to enhance energy and focus · BALANCE: combine with neutral tones to maintain clarity and premium feel.</p></div>
          <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>LOGO USAGE</b><div style={{ display: "flex", gap: 6, margin: "6px 0" }}><span style={{ flex: 1, background: "#060607", border: "1px solid #2c2d30", borderRadius: 5, padding: "7px 6px", fontWeight: 800, fontSize: 11 }}><span className="nc-acc">/</span> Next</span><span style={{ flex: 1, background: "#f5f5f3", color: "#111", borderRadius: 5, padding: "7px 6px", fontWeight: 800, fontSize: 11 }}><span style={{ color: "#c9330d" }}>/</span> Next</span><span style={{ width: 38, background: "#17181a", border: "1px solid #2c2d30", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: ORANGE, fontWeight: 800, fontSize: 16 }}>/</span><span style={{ flex: 1, padding: "7px 2px", color: ORANGE, fontWeight: 700, fontSize: 11.5 }}>Next step.</span></div><p style={{ color: "#c9c9ce", margin: 0 }}>PRIMARY DARK BACKGROUND · PRIMARY LIGHT BACKGROUND · ICON APP &amp; FAVICON · WORDMARK CAMPAIGN USAGE. Clear space is defined by the height of the slash. Do not alter the angle, proportion or spacing.</p></div>
          <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>PHOTOGRAPHY DIRECTION</b><img src="/projects/crops/next-card/brand38-photo.jpg" alt="Photography direction tiles as printed" style={{ width: "100%", height: 52, objectFit: "cover", display: "block", borderRadius: 5, margin: "5px 0" }} /><p style={{ color: "#c9c9ce", margin: 0 }}>Real, urban, forward-looking. Capture ambition, independence and the energy of a new generation. Use strong composition and the slash as a visual leading line.</p></div>
        </div>
        <p className="nc-acc" style={{ margin: "12px 0 4px", fontWeight: 700 }}>MOTION PRINCIPLES — Fast. Smooth. Purposeful. Motion expresses progress and confidence. Duration: 200–500ms. Ease: Out.</p>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }} role="group">{MOTION38.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={mIdx === i} onClick={() => setMIdx(i)}>{i + 1}. {t}</button>)}</div>
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{MOTION38[mIdx][0]} — {MOTION38[mIdx][1]}</p>
      </div>
    </div>
    <p className="nc-acc" style={{ margin: "14px 0 5px", fontWeight: 700, letterSpacing: ".07em" }}>APPLICATION EXAMPLES — as printed</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 7 }}>
      {[["MOBILE APP", "▭ Two phones: dashboard + card"], ["STATEMENT", "▤ / Next — statement document"], ["PACKAGING", "▪ Black box — / Next"], ["DIGITAL BANNER", "“Your next, made possible.” /"], ["SOCIAL MEDIA", "“Next step.” /"], ["ENVIRONMENTAL SIGNAGE", "/ Next — building signage"], ["WELCOME KIT", "/ Next step. — kit + cards"], ["APP ICON", "/"]].map(([t, b]) => <div key={t} style={{ border: "1px solid #2c2d30", borderRadius: 7, padding: "8px 7px", minHeight: 64, background: t === "APP ICON" ? "#17181a" : "#0d0d0f" }}><p style={{ margin: 0, fontWeight: t === "APP ICON" ? 800 : 600, fontSize: t === "APP ICON" ? 21 : 11.3, lineHeight: 1.4, color: t === "APP ICON" ? ORANGE : "#e8e8ea" }}>{b}</p><p style={{ margin: "5px 0 0", color: "#9a9aa0", fontSize: 9, letterSpacing: ".05em" }}>{t}</p></div>)}
    </div>
  </Nc>;
}

/* ---------------- 40 — Component System ---------------- */
const OFFERS40 = [["Xiaomi Store", "10% Off", "Up to ¥50", "2 Days Left", "Limited"], ["HEYTEA", "Buy 1 Get 1", "Only on Next Card", "5 Days Left", "Online"], ["POP MART", "10% Off", "Up to ¥50", "2 Days Left", "Hot"], ["Trip.com", "8% Off", "Up to ¥50", "2 Days Left", "Error"]];
const MERCHANTS40 = [["Seesaw Coffee", "500m"], ["% Arabica", "1.2km"], ["Nike Store", "1.5km"], ["HARMAY", "1.8km"]];
const MISSIONS40 = [["Pay with Next Card 3 times", "+200 Points", "1 / 3", 33], ["Spend over ¥1,000 this week", "+300 Points", "¥850 / ¥1,000", 85], ["Invite 1 friend to apply", "+500 Points", "0 / 1", 0]];
export function NextCardComponentSystem() {
  const [btn, setBtn] = useState("Default");
  const [inp, setInp] = useState("Default");
  const [state, setState] = useState("Loading");
  const [pay, setPay] = useState(false);
  const [missionDone, setMissionDone] = useState(false);
  return <Nc n="40" title="Component System" label="Next Card component system — interactive rebuild of Next_Card_Image_40">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>China Gen Z Credit Card Concept — an implemented component system built for clarity, flexibility, and speed. CODED UI RENDERS + Responsive · Real States · Interactive. Deck rail as printed: OVERVIEW · USER FLOW · UI SYSTEM · VISUALS · MOTION · ACCESSIBILITY · 40 / 56.</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr", gap: 10 }}>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}>
        <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>COMPONENT ANATOMY &amp; VARIANTS</p>
        <p style={{ margin: "8px 0 3px" }}><b>BUTTONS</b> — Primary / Secondary / Tertiary / Text × states:</p>
        <div style={{ display: "flex", gap: 4 }} role="group">{["Default", "Hover", "Pressed", "Disabled"].map((st) => <button key={st} type="button" className="nc-tab" aria-pressed={btn === st} onClick={() => setBtn(st)}>{st}</button>)}</div>
        <p style={{ margin: "8px 0 0" }} aria-live="polite"><button type="button" className="nc-cta" disabled={btn === "Disabled"} style={{ width: "auto", padding: "7px 22px", opacity: btn === "Disabled" ? 0.4 : btn === "Pressed" ? 0.75 : 1, transform: btn === "Hover" ? "translateY(-1px)" : undefined }}>Action</button> <span style={{ color: "#9a9aa0" }}>Primary · {btn}</span></p>
        <p style={{ margin: "10px 0 3px" }}><b>INPUTS</b>:</p>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }} role="group">{["Default", "Focus", "Filled", "Error", "Disabled"].map((st) => <button key={st} type="button" className="nc-tab" aria-pressed={inp === st} onClick={() => setInp(st)}>{st}</button>)}</div>
        <p style={{ margin: "8px 0 0" }} aria-live="polite"><span style={{ display: "inline-block", border: `1px solid ${inp === "Error" ? "#ff4b1f" : inp === "Focus" ? "#ff9a66" : "#3a3b3f"}`, borderRadius: 6, padding: "5px 10px", color: inp === "Disabled" ? "#6b6b70" : "#c9c9ce", background: "#17181a" }}>{inp === "Filled" ? "Input text ✓" : "Input text"}</span>{inp === "Error" && <span className="nc-acc" style={{ marginLeft: 6 }}>Error message</span>}</p>
        <p style={{ margin: "10px 0 3px" }}><b>PROGRESS</b> — Steps: 1 Apply · 2 Review · 3 Activate · Linear 65%:</p>
        <div style={{ height: 8, background: "#232426", borderRadius: 4 }}><div style={{ width: "65%", height: "100%", background: ORANGE, borderRadius: 4 }} /></div>
        <p style={{ margin: "10px 0 3px" }}><b>TAGS / BADGES</b>:</p>
        <p style={{ margin: 0, display: "flex", gap: 4, flexWrap: "wrap" }}>{["New", "Hot", "Limited", "Online", "Nearby", "Earn 2x"].map((tg) => <span key={tg} className="nc-tab">{tg}</span>)}</p>
        <p style={{ margin: "10px 0 3px" }}><b>NAVIGATION</b> — Tab Bar: Home · Benefits · Pay · Mission · Profile · Bottom Sheet Nav (as printed).</p>
      </div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}>
        <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>CODED UI RENDER — DESKTOP / WEB + MOBILE / APP</p>
        <p style={{ margin: "8px 0 0" }}>Total Rewards <b style={{ fontSize: 15 }}>2,860</b> Points ≈ ¥28.60 Reward Value [Details] · Credit Progress <b>65%</b> ¥13,000 / ¥20,000 [Increase Limit] · This Month Missions <b>2 / 5</b> — complete missions to earn more rewards [View All]</p>
        <p style={{ margin: "8px 0 3px" }}><b>Exclusive Offers</b> [View All]</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>{OFFERS40.map(([name, deal, cap, left, tag]) => <div key={name} style={{ border: "1px solid #2c2d30", borderRadius: 6, padding: 7 }}><span className="nc-tab" style={{ fontSize: 9.5 }}>{tag}</span><p style={{ margin: "5px 0 0" }}><b>{name}</b><br />{deal}<br /><span style={{ color: "#c9c9ce" }}>{cap}</span><br /><span className="nc-acc">◷ {left}</span></p></div>)}</div>
        <p style={{ margin: "8px 0 3px" }}><b>Nearby Merchants</b> [View Map]</p>
        <p style={{ margin: 0, display: "flex", gap: 5, flexWrap: "wrap" }}>{MERCHANTS40.map(([n2, dist]) => <span key={n2} className="nc-tab">{n2} · {dist}</span>)}</p>
        <p style={{ margin: "8px 0 3px" }}><b>Recommended Missions</b> [View All]</p>
        {MISSIONS40.map(([t, pts, prog, pct]) => <div key={t} style={{ margin: "5px 0" }}><p style={{ margin: 0, display: "flex", justifyContent: "space-between" }}><span>{t} <span style={{ color: "#9a9aa0" }}>{pts}</span></span><span>{prog}</span></p><div style={{ height: 6, background: "#232426", borderRadius: 3 }}><div style={{ width: `${pct}%`, height: "100%", background: ORANGE, borderRadius: 3 }} /></div></div>)}
        <p style={{ margin: "8px 0 0" }}><b>Refer a friend</b> — You get 500 pts · Friend gets 200 pts <button type="button" className="nc-tab" style={{ background: ORANGE, borderColor: ORANGE, color: "#fff" }}>Invite Now</button></p>
        <p style={{ color: "#9a9aa0", margin: "6px 0 0" }}>Mobile render mirrors the same content in one column with bottom nav Home · Benefits · (+) · Mission · Profile (as printed).</p>
      </div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}>
        <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>STATES — try them</p>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 6 }} role="group">{["Loading", "Error", "Empty"].map((st) => <button key={st} type="button" className="nc-tab" aria-pressed={state === st} onClick={() => setState(st)}>{st.toUpperCase()}</button>)}</div>
        <div style={{ border: "1px solid #2c2d30", borderRadius: 6, padding: 9, marginTop: 8, minHeight: 74 }} aria-live="polite">
          {state === "Loading" && <p style={{ margin: 0, color: "#9a9aa0" }}>▬▬▬▬▬▬ skeleton<br />▬▬▬▬ ▬▬▬▬<br />▬▬▬▬▬ ▬▬▬</p>}
          {state === "Error" && <p style={{ margin: 0 }}>Something went wrong. Please try again later.<br /><button type="button" className="nc-cta" style={{ width: "auto", padding: "6px 18px", marginTop: 6 }} onClick={() => setState("Loading")}>Retry</button></p>}
          {state === "Empty" && <p style={{ margin: 0 }}>✉ <b>No offers yet</b><br /><span style={{ color: "#c9c9ce" }}>Check back soon for new offers.</span><br /><span className="nc-tab" style={{ display: "inline-block", marginTop: 6 }}>Explore Merchants</span></p>}
        </div>
        <p style={{ margin: "10px 0 3px" }}><b>DIALOGS — CONFIRMATION</b></p>
        <div style={{ border: "1px solid #2c2d30", borderRadius: 6, padding: 9 }} aria-live="polite">
          <p style={{ margin: 0 }}>Confirm Payment<br /><b style={{ fontSize: 15 }}>¥128.00</b><br /><span style={{ color: "#c9c9ce" }}>Confirm to pay with Next Card?</span></p>
          <p style={{ margin: "8px 0 0", display: "flex", gap: 6 }}><button type="button" className="nc-tab" onClick={() => setPay(false)}>Cancel</button><button type="button" className="nc-cta" style={{ width: "auto", padding: "6px 18px" }} onClick={() => setPay(true)}>Confirm</button></p>
          {pay && <p style={{ margin: "6px 0 0", color: "#7ac74f" }}>Payment confirmed (demo state).</p>}
        </div>
        <p style={{ margin: "10px 0 3px" }}><b>DIALOGS — INFO</b></p>
        <div style={{ border: "1px solid #2c2d30", borderRadius: 6, padding: 9, textAlign: "center" }} aria-live="polite">
          {missionDone ? <p style={{ margin: 0 }}>Dismissed — reopen below.</p> : <><p style={{ margin: 0, fontSize: 20, color: "#7ac74f" }}>✓</p><p style={{ margin: "2px 0" }}><b>Mission Completed!</b><br />You earned <b>+200 Points</b></p></>}
          <button type="button" className="nc-tab" style={{ marginTop: 6 }} onClick={() => setMissionDone((v) => !v)}>{missionDone ? "Show dialog" : "Got It"}</button>
        </div>
      </div>
    </div>
    <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10, marginTop: 10 }}>
      <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>TOKENS REFERENCE</p>
      <p style={{ margin: "6px 0 0" }}><b>Colors</b> — Bg / 900 #0E0E10 · Surface / 800 #17181C · Border / 700 #2A2D31 · Text / 100 #F2F2F5 · Text / 300 #A1A1AA · Primary / 500 #FF4B1F · Primary / 600 #E63A19 · Success / 500 #22C55E · Warning / 500 #F59E0B</p>
      <p style={{ margin: "4px 0 0" }}><b>Radius</b> — 0 · 8 · 12 · 16 · 20 · 24 · Full · <b>Spacing (8pt Grid)</b> — 4 · 12 · 16 · 24 · 32 · 48 · 64</p>
      <p style={{ margin: "4px 0 0" }}><b>Elevation (Dark)</b> — 01: 0 1px 2px rgba(0,0,0,.20) · 02: 0 4px 12px rgba(0,0,0,.30) · 03: 0 8px 24px rgba(0,0,0,.35) · 04: 0 16px 40px rgba(0,0,0,.40)</p>
      <p style={{ margin: "4px 0 0" }}><b>Typography</b> — Display 32/40 Semibold · H1 24/32 Semibold · H2 20/28 Semibold · Body 1 16/24 Regular · Body 2 14/20 Regular · Caption 12/16 Regular</p>
      <p style={{ color: "#9a9aa0", margin: "6px 0 0" }}>COMPONENT SHOWCASE (VARIANTS &amp; STATES) — the printed footer strip repeats Buttons / Inputs / Progress (0% · 50% · 100%) / Badges (New · Limited · Hot · Online · Nearby · Earn 2x) / Navigation at small size.</p>
    </div>
  </Nc>;
}

/* ---------------- 41 — Campaign Landing Page ---------------- */
const SIX_WAYS = [
  ["Real rewards, not complicated", "Earn points on everyday spendings. Redeem for lifestyle, travel, and more."],
  ["Flexible & fair", "Up to 20 days interest-free*. Transparent and easy to understand."],
  ["Control in your hands", "Set limits, track spending, manage card — all in the Next Card app."],
  ["Perks in your city", "Exclusive offers on dining, entertainment, and experiences near you."],
  ["Designed for digital natives", "Instant application, digital-first experience, physical card optional."],
  ["Security that protects you", "Advanced security and real-time alerts to keep you safe."],
];
const CITY_OFFERS = [["10% off weekend brunch", "Selected restaurants"], ["Buy 1 Get 1 Free Coffee", "Popular cafés"], ["¥30 off taxi rides", "On Didi, weekends only"], ["Up to ¥50 off live shows", "Selected venues"], ["7-day free trial", "Partner gyms"]];
const EXAMPLES41 = [
  ["Tian, 23", "Designer, Shanghai", "Spends on dining, coffee, and entertainment every week.", "¥3,200", "~480", "~¥48"],
  ["Ming, 27", "Product Manager, Shenzhen", "Frequent traveler and loves tech & lifestyle.", "¥8,500", "~1,360", "~¥136"],
  ["Jia, 25", "Marketing, Chengdu", "Enjoys shopping and weekend getaways.", "¥5,000", "~800", "~¥80"],
];
export function NextCardLandingPage() {
  const [device, setDevice] = useState(0);
  const [applied, setApplied] = useState(false);
  const [ex, setEx] = useState(0);
  return <Nc n="41" title="Campaign Landing Page — Desktop & Mobile" label="Next Card landing page — interactive rebuild of Next_Card_Image_41">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>The printed slide shows the campaign landing page at two sizes; the {device === 0 ? "desktop" : "mobile"} render is described below — content is identical, layout adapts. Nav as printed: Next Card | Benefits · City Offers · Eligibility · Examples · FAQ | Sign in [Apply Now].</p>
    <div style={{ display: "flex", gap: 5 }} role="group" aria-label="Device toggle">{["Desktop / Web", "Mobile / App"].map((t, i) => <button key={t} type="button" className="nc-tab" aria-pressed={device === i} onClick={() => setDevice(i)}>{t}</button>)}</div>
    <div style={{ border: "1px solid #333438", borderRadius: 12, padding: 16, marginTop: 10, maxWidth: device === 1 ? 380 : undefined, marginLeft: device === 1 ? "auto" : undefined, marginRight: device === 1 ? "auto" : undefined }} aria-live="polite">
      <span className="nc-tab" style={{ borderColor: ORANGE, color: "#ff9a66" }}>Designed for Gen Z. Built for real life in China.</span>
      <p style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.15, margin: "10px 0 4px" }}>Next Card.<br /><span className="nc-acc">Your life. Your way.</span></p>
      <p style={{ color: "#c9c9ce", margin: 0 }}>A credit card that rewards how you live, help you manage with confidence, and unlocks the best of your city.</p>
      <p style={{ display: "flex", gap: 8, margin: "12px 0 0", alignItems: "center" }}><button type="button" className="nc-cta" style={{ width: "auto", padding: "9px 26px" }} onClick={() => setApplied(true)}>Apply Now</button><span>Explore benefits →</span>{applied && <span style={{ color: "#7ac74f" }}>Application started (demo state).</span>}</p>
      <p style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "14px 0 0", color: "#c9c9ce" }}><span>◎ <b style={{ color: "#fff" }}>No annual fee</b> — Keep it simple</span><span>◷ <b style={{ color: "#fff" }}>Up to 20 days</b> interest-free*</span><span>▤ <b style={{ color: "#fff" }}>Smart control</b> in the app</span><span>☆ <b style={{ color: "#fff" }}>Earn rewards</b> your way</span><span>⌂ <b style={{ color: "#fff" }}>City perks</b> made for you</span><span>🛡 <b style={{ color: "#fff" }}>Secure by design</b> — peace of mind</span></p>
    </div>
    <p className="nc-acc" style={{ margin: "14px 0 6px", fontWeight: 700 }}>6 WAYS NEXT CARD MAKES LIFE BETTER</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>{SIX_WAYS.map(([t, b]) => <div key={t} style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>{t}</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>{b}</p></div>)}</div>
    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 10, marginTop: 12 }}>
      <div style={{ background: "#f3ede4", color: "#141414", borderRadius: 10, padding: 12 }}>
        <p style={{ margin: 0 }}><b style={{ fontSize: 14.5 }}>Offers made for your city</b> · <span style={{ float: "right" }}>Change city: Shanghai ⌄</span></p>
        <p style={{ color: "#55565a", margin: "2px 0 8px" }}>Handpicked deals and privileges in the places you love. All five printed cards are tagged Shanghai:</p>
        {CITY_OFFERS.map(([t, b]) => <p key={t} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ddd5c8", padding: "4px 0", margin: 0 }}><b>{t}</b><span style={{ color: "#55565a" }}>{b}</span></p>)}
        <p style={{ color: "#55565a", margin: "8px 0 0" }}>Offers rotate regularly. Check the Next Card app for the latest.</p>
      </div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 10, padding: 12 }}>
        <p style={{ margin: 0 }}><b style={{ fontSize: 14.5 }}>Who can apply</b></p>
        <p style={{ color: "#c9c9ce", margin: "4px 0" }}>Next Card is available to adults who:</p>
        <ul style={{ margin: 0, paddingLeft: 16 }}>{["Are 18–60 years old", "Have a valid ID and Mainland China residence", "Have a stable source of income or regular earnings", "Pass our credit assessment"].map((x) => <li key={x} style={{ margin: "3px 0" }}><span style={{ color: "#7ac74f" }}>✓</span> {x}</li>)}</ul>
        <p style={{ color: "#c9c9ce", margin: "8px 0 0" }}>Applying won't affect your credit score. <span className="nc-acc">Learn more about eligibility →</span></p>
      </div>
    </div>
    <p className="nc-acc" style={{ margin: "14px 0 6px", fontWeight: 700 }}>MODELED EXAMPLES — Illustrative examples to help you see how Next Card fits your life.</p>
    <div style={{ display: "flex", gap: 5 }} role="group">{EXAMPLES41.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={ex === i} onClick={() => setEx(i)}>{t}</button>)}</div>
    <p aria-live="polite" style={{ margin: "8px 0 0" }}><b>{EXAMPLES41[ex][0]}</b> — {EXAMPLES41[ex][1]}. {EXAMPLES41[ex][2]} Monthly spend <b>{EXAMPLES41[ex][3]}</b> · Points earned <b>{EXAMPLES41[ex][4]}</b> · Value back <b className="nc-acc">{EXAMPLES41[ex][5]}</b></p>
    <p style={{ color: "#9a9aa0", margin: "12px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b style={{ color: "#c9c9ce" }}>Responsible credit</b> — Use credit wisely. Plan and spend within your means.</span><span><b style={{ color: "#c9c9ce" }}>Pay on time</b> — Repay on time to build and maintain your credit.</span><span><b style={{ color: "#c9c9ce" }}>Need help?</b> — Our support team is here when you need us.</span><span><b style={{ color: "#c9c9ce" }}>More information</b> — Read our responsible credit guidelines →</span></p>
    <p style={{ color: "#6b6b70", margin: "6px 0 0" }}>*Interest-free period up to 20 days may vary by statement date and billing cycle. Fees, terms and conditions apply.</p>
  </Nc>;
}

/* ---------------- 42 — Benefit Exploration ---------------- */
const BENEFIT_CATS: Array<[string, string, string, string, Array<[string, string]>, ...string[]]> = [
  ["Daily rewards", "Get rewarded, every day", "Earn points and cashback on everyday spends.", "Monthly value (est.)", [["Next Card Plus", "¥128 /month"], ["Next Card Lite", "¥68 /month"], ["Basic", "¥28 /month"]], "✓ Earn up to 5x points — on dining, ride-hailing, and more (5x) · ✓ Up to 1% cashback — on all eligible spends (1%) · ✓ Bonus points — on streaks and challenges · ✓ Points never expire", "Age 18+, stable income"],
  ["Digital lifestyle offers", "More of what you love", "Exclusive offers on apps, entertainment, and more.", "Monthly value (est.)", [["Next Card Plus", "¥96 /month"], ["Next Card Lite", "¥48 /month"], ["Basic", "¥18 /month"]], "Popular offers — Video Membership (Youku VIP): Free /month · 50% off · — · Music Membership (NetEase Cloud): Free /month · 50% off · — · Cloud Storage (Baidu Netdisk): Free /month · — · — · E-book Membership: 20% off · — · — (Plus · Lite · Basic)", "Age 18+, completed real-name verification"],
  ["Local city perks", "Benefits that move with you", "Enjoy local offers on dining, transit, and experiences.", "Monthly value (est.)", [["Next Card Plus", "¥72 /month"], ["Next Card Lite", "¥36 /month"], ["Basic", "¥12 /month"]], "Featured perks — Dining Discounts (selected restaurants): Up to 30% · Up to 20% · — · Transit Benefits (Metro & bus): Up to 10% · Up to 5% · — · Cinema Offers (weekend deals): Up to 2 tickets · 1 ticket · — · Local Experiences (events & attractions): ✓ · ✓ · — (Plus · Lite · Basic)", "Available in 30+ cities"],
  ["Referral benefits", "More friends, more rewards", "Invite friends and get rewarded together.", "Earnings (per successful referral)", [["Next Card Plus", "¥60 /friend"], ["Next Card Lite", "¥30 /friend"], ["Basic", "¥10 /friend"]], "How it works — 1. Share your link: invite friends to apply · 2. Friend gets approved: they activate their card · 3. You both earn rewards: redeem for statement credit or points", "No referral cap"],
  ["Credit-building tools", "Build credit, build future", "Smart tools to help you build and track your credit.", "Key features", [["Plus", ""], ["Lite", ""], ["Basic", ""]], "Credit Score Tracker: Free · ✓ · — · Multi-Bureau Insights: ✓ · — · — · On-time Payment Boost: ✓ · ✓ · — · Credit Report Summary: ✓ · ✓ · — · Credit Tips & Guidance: ✓ · ✓ · ✓ (Plus · Lite · Basic)", "Age 18+, valid ID"],
];
export function NextCardBenefits() {
  const [cat, setCat] = useState(0);
  const [mode, setMode] = useState("Monthly Value");
  const [compare, setCompare] = useState<string[]>(["Next Card Plus", "Next Card Lite"]);
  const [saved, setSaved] = useState(false);
  const cur = BENEFIT_CATS[cat];
  const toggleCompare = (t: string) => setCompare((c) => (c.includes(t) ? c.filter((x) => x !== t) : [...c, t]));
  return <Nc n="42" title="Benefit Exploration" label="Next Card benefit exploration — interactive rebuild of Next_Card_Image_42">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>CREDIT CARD FOR CHINA GEN Z — compare and customize benefits across categories. See what you get, what it takes, and save what matters.</p>
    <div style={{ display: "flex", gap: 5, alignItems: "center", flexWrap: "wrap" }} role="group" aria-label="Compare controls">
      <span style={{ color: "#9a9aa0" }}>Compare by</span>
      {["Monthly Value", "Category", "Lifestyle"].map((m) => <button key={m} type="button" className="nc-tab" aria-pressed={mode === m} onClick={() => setMode(m)}>{m}</button>)}
      <span className="nc-tab" style={{ borderColor: ORANGE }} aria-live="polite">Compare ({compare.length})</span>
    </div>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 10 }} role="group" aria-label="Benefit categories">{BENEFIT_CATS.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={cat === i} onClick={() => setCat(i)}>{String(i + 1).padStart(2, "0")} {t}</button>)}</div>
    <div className="nc-phone" style={{ maxWidth: 400, marginTop: 12 }} aria-live="polite">
      <p style={{ margin: "0 0 6px", display: "flex", justifyContent: "space-between" }}><span>← {cur[0]}</span><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>9:41</span></p>
      <p style={{ fontWeight: 700, fontSize: 15, margin: "2px 0" }}>{cur[1]}</p>
      <p style={{ color: "#c9c9ce", margin: "0 0 8px" }}>{cur[2]}</p>
      <p style={{ color: "#9a9aa0", margin: "0 0 4px" }}>{cur[3]} — tap a tier to add/remove it from Compare ({compare.length}):</p>
      <div style={{ display: "flex", gap: 5 }}>{(cur[4] as Array<[string, string]>).map(([tier, val]) => <button key={tier} type="button" onClick={() => toggleCompare(tier)} aria-pressed={compare.includes(tier)} style={{ flex: 1, background: tier === "Next Card Plus" ? "#2a1408" : "#17181a", border: `1px solid ${compare.includes(tier) ? ORANGE : "#333438"}`, borderRadius: 8, color: "#fff", padding: 8, cursor: "pointer", font: "inherit" }}><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>{tier}{tier === "Next Card Plus" && cat === 0 ? " · Recommended" : ""}</span><br /><b className="nc-acc" style={{ fontSize: 14 }}>{val || "—"}</b></button>)}</div>
      <p style={{ color: "#c9c9ce", margin: "10px 0 0" }}>{cur[5]}</p>
      <p style={{ color: "#9a9aa0", margin: "8px 0 0" }}>Eligibility — {cur[6]}</p>
      <button type="button" className="nc-cta" style={{ marginTop: 10 }} onClick={() => setSaved(true)}>{saved ? "✓ Saved — apply when you're ready" : "Save My Choice"}</button>
    </div>
    <p style={{ margin: "12px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b>COMPARE YOUR WAY</b> — Switch view by Monthly Value, Category, or Lifestyle to find what fits you best.</span><span><b>CLEAR &amp; TRANSPARENT</b> — See eligibility and conditions upfront. No surprises, just smarter choices.</span><span><b>SAVE &amp; APPLY LATER</b> — Save your favorite benefits and apply when you're ready.</span></p>
  </Nc>;
}

/* ---------------- 43 — Application Sequence ---------------- */
const APP_SEQUENCE = [
  ["Eligibility", "Let's check your eligibility", "This won't affect your credit profile. ✓ 18–28 years old — Mainland China resident · ✓ Have a valid ID — Second-generation ID card · ✓ Basic info required — For identity verification only. 🔒 Your information is secure and used only for this application.", "Check eligibility", "Already started? Log in"],
  ["Personal information", "Personal information", "Please enter your real information. Full name [Enter your full name] · ID card number [Enter your 18-digit ID number] · Date of birth [Select date 📅] · Mobile number [Enter mobile number]. 🔒 We use encryption to protect your data.", "Next", ""],
  ["Identity verification", "Identity verification", "Choose a way to verify your identity. Upload ID card [Recommended] — Upload photos of your ID card to verify (selected ✓) · Liveness detection — Take a short video to verify your face. 🔒 Your photos and video are encrypted and used only for verification.", "Start verification", ""],
  ["Student or employment information", "Student or employment information", "Choose one and fill in the details. Student — Provide your school information (selected ✓) · Employed — Provide your work information · Other — Provide other information. School information: School name [Select your school ›] · Expected graduation [Select date 📅].", "Next", ""],
  ["Card preference", "Card preference", "Choose a design that fits your style. Card carousel as printed (NEXT CARD design, selector dots). Card color: Obsidian Black › · Card nickname (optional): Give your card a nickname.", "Next", ""],
  ["Review and consent", "Review and consent", "Please review and confirm your application. Personal information [Edit] · Identity verification [Edit] · School information [Edit] · Card preference [Edit]. ☑ I have read and agree to the User Agreement and Privacy Policy and authorize the use of my information for this application.", "Submit application", ""],
];
export function NextCardApplicationSequence() {
  const [s, setS] = useState(0);
  const cur = APP_SEQUENCE[s];
  return <Nc n="43" title="Application Sequence" label="Next Card application sequence — interactive rebuild of Next_Card_Image_43">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>A credit card designed for China Gen Z. Top assurances as printed: <b style={{ color: "#fff" }}>🛡 Private by design</b> — your data is encrypted and protected · <b style={{ color: "#fff" }}>🔒 You're in control</b> — save and return anytime at every step · <b style={{ color: "#fff" }}>◷ Takes minutes</b> — simple steps, mobile-first. Every printed phone carries “Save &amp; return” and a 1–6 progress rail.</p>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }} role="group" aria-label="Sequence steps">{APP_SEQUENCE.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span style={{ color: "#9a9aa0" }}>→</span>}<button type="button" className="nc-tab" aria-pressed={s === i} onClick={() => setS(i)}>{i + 1} {t}</button></span>)}</div>
    <div style={{ background: "#f3ede4", color: "#141414", borderRadius: 18, padding: 16, maxWidth: 400, margin: "12px auto 0" }} aria-live="polite">
      <p style={{ margin: "0 0 4px", display: "flex", justifyContent: "space-between" }}><span style={{ letterSpacing: ".08em", fontSize: 10.5 }}>NEXT CARD</span><span style={{ color: "#b3540f", fontSize: 10.5 }}>Save &amp; return</span></p>
      <p style={{ margin: "0 0 8px", letterSpacing: ".35em" }}>{APP_SEQUENCE.map((_, i) => <span key={i} style={{ color: i === s ? "#ff4b1f" : "#c9c2b4" }}>●</span>)}</p>
      <p style={{ fontWeight: 700, fontSize: 15, margin: "2px 0" }}>{cur[1]}</p>
      <p style={{ color: "#3c3c40", margin: 0 }}>{cur[2]}</p>
      <p style={{ display: "flex", gap: 10, alignItems: "center", margin: "12px 0 0" }}>{s > 0 && <button type="button" style={{ background: "none", border: "none", cursor: "pointer", font: "inherit" }} onClick={() => setS((v) => v - 1)}>‹ Back</button>}<button type="button" className="nc-cta" style={{ flex: 1 }} onClick={() => setS((v) => Math.min(5, v + 1))}>{cur[3]}</button></p>
      {cur[4] && <p style={{ textAlign: "center", color: "#b3540f", margin: "8px 0 0" }}>{cur[4]}</p>}
    </div>
    <p style={{ margin: "12px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b>Progress you can see</b> — Clear steps help you know where you are.</span><span><b>Save and return</b> — Pick up where you left off, anytime.</span><span><b>Privacy first</b> — Your data is encrypted and never shared.</span><span><b>Simple and fast</b> — Only the info we need, nothing more.</span></p>
  </Nc>;
}

/* ---------------- 44 — Approval and Virtual Card ---------------- */
const DECISIONS44 = [
  ["APPROVED", "You're approved", "Welcome to Next Card.", "Main phone as printed: Initial credit limit ¥8,000.00 › — Review your limit anytime in the app. Virtual Next Card [Active]: Next Card •••• •••• •••• 1234 · Valid Thru 12/28 · CVV 345 · 👁 [Add to wallet] [View card details]. Security setup — Protect your account in a few steps ›. First spend mission — Make your first transaction to activate more features. [Start mission]"],
  ["PENDING", "Application received", "We're reviewing your application.", "We're reviewing your information. This usually takes 1–2 business days. What happens next: We'll notify you when there's an update · You can check your status anytime in the app. [View application details]. While you wait: Explore Next Card and learn how to manage your account ›."],
  ["DECLINED", "Not approved", "Not approved this time. You can reapply later.", "We couldn't approve your application based on our current criteria. Possible reasons: Information didn't match our records · Credit profile didn't meet our criteria · Recent credit applications may affect approval. [View application details]. What you can do: You can reapply after 30 days. Learn how to improve your profile ›."],
  ["MANUAL REVIEW", "Additional review", "We need a bit more information.", "We're reviewing your application and may contact you for more information. What you can do: Keep your phone nearby in case we contact you · Check your email for any requests. [View application details]. While you wait: Explore Next Card and get ready for what's next ›."],
];
export function NextCardApproval() {
  const [dIdx, setDIdx] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [mission, setMission] = useState(false);
  const cur = DECISIONS44[dIdx];
  return <Nc n="44" title="Approval and Virtual Card" label="Next Card approval and virtual card — interactive rebuild of Next_Card_Image_44">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Clear outcomes. Next steps that put you in control. Left rail as printed: <b style={{ color: "#fff" }}>Transparent status</b> — know exactly where your application stands · <b style={{ color: "#fff" }}>Virtual Next Card</b> — instantly view your card details when approved · <b style={{ color: "#fff" }}>Security first</b> — set up security to keep your account protected · <b style={{ color: "#fff" }}>First spend mission</b> — simple mission to help you get started responsibly.</p>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }} role="group" aria-label="Decision outcomes">{DECISIONS44.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={dIdx === i} onClick={() => setDIdx(i)}>{t}</button>)}</div>
    <div className="nc-phone" style={{ marginTop: 12 }} aria-live="polite">
      <p style={{ margin: "0 0 6px", display: "flex", justifyContent: "space-between" }}><span style={{ color: "#9a9aa0" }}>✕</span><span style={{ fontSize: 11 }}>Application</span><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>9:41</span></p>
      <p style={{ textAlign: "center", fontSize: 30, margin: "6px 0 0", color: dIdx === 0 ? "#7ac74f" : dIdx === 2 ? "#ff4b1f" : "#ff9a66" }}>{dIdx === 0 ? "✓" : dIdx === 1 ? "◷" : dIdx === 2 ? "✕" : "🔍"}</p>
      <p style={{ textAlign: "center", fontWeight: 700, fontSize: 15, margin: "4px 0 0" }}>{cur[1]}</p>
      <p style={{ textAlign: "center", color: "#c9c9ce", margin: "2px 0 8px" }}>{cur[2]}</p>
      <p style={{ color: "#c9c9ce", margin: 0 }}>{cur[3]}</p>
      {dIdx === 0 && <><p style={{ margin: "10px 0 0", display: "flex", gap: 6 }}><button type="button" className="nc-tab" aria-pressed={reveal} onClick={() => setReveal((v) => !v)}>{reveal ? "Hide CVV (345)" : "👁 Reveal card details"}</button><button type="button" className="nc-tab" aria-pressed={mission} onClick={() => setMission(true)}>{mission ? "Mission started ✓" : "Start mission"}</button></p>{reveal && <p style={{ margin: "6px 0 0" }}>Valid Thru 12/28 · CVV 345 — as printed on the slide.</p>}</>}
    </div>
    <p style={{ margin: "12px 0 0", display: "flex", gap: 16, flexWrap: "wrap" }}><span><b>🔒 You're in control</b> — Manage your card, limit, and settings anytime.</span><span><b>👁 Real-time updates</b> — Get notified at every step of the process.</span><span><b>🛡 Secure by design</b> — We protect your data and your account.</span><span><b>💬 Help when you need it</b> — Support is available in the app.</span></p>
  </Nc>;
}

/* ---------------- 45 — Home Dashboard ---------------- */
const DASH45 = [
  ["Credit Overview", "Available Credit ¥18,600.00 · Total Credit ¥30,000.00 | Current Balance ¥11,400.00 — 38% of total credit (bar as printed) · 👁", "Quick view of available credit, current balance, and usage ratio — without any jargon."],
  ["Upcoming Repayment", "May 25 · ¥1,200.00 ›", "Shows the amount and due date of your next repayment — so you stay prepared and in control."],
  ["Rewards Earned", "★ 2,860 Points · View Rewards ›", "Track your earned points and easily access exclusive rewards curated for you."],
  ["Next Responsible Mission", "Next Mission — Use public transit 3 times. Make every trip count. Progress 1 / 3 (train photograph as printed).", "A small step toward a better habit. Complete missions, earn points, make an impact."],
  ["Recommended for You", "Neighborhood Coffee — 10% off · Valid until May 31 · 📍 800m [See all] (latte-art photograph as printed).", "Local offers you'll love — handpicked to match your lifestyle and preferences."],
  ["Spending Insight", "This Month ⌄ — Food & Drinks ¥1,620.00 · 28% (bar) · Transport ¥980.00 · 17% (bar).", "Understand where your money goes with clear categories and simple visuals."],
];
export function NextCardHomeDashboard() {
  const [sel, setSel] = useState(0);
  const [mission, setMission] = useState(1);
  const cur = DASH45[sel];
  return <Nc n="45" title="Home Dashboard" label="Next Card home dashboard — interactive rebuild of Next_Card_Image_45">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Everything you need. Designed for clear control, built for real life. App rail as printed: Overview · Activity · Pay &amp; Manage · Rewards · Profile. <b className="nc-acc">At-a-glance clarity.</b> Key financials, smart guidance, and everyday value — organized for Gen Z. Tap a numbered section — the annotations on the right of the printed slide explain each one:</p>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 12 }}>
      <div className="nc-phone" style={{ margin: 0 }}>
        <p style={{ margin: "0 0 8px", display: "flex", justifyContent: "space-between" }}><b>Hey, Alex</b><span>🔔</span></p>
        {DASH45.map(([t, body], i) => <button key={t} type="button" onClick={() => setSel(i)} aria-pressed={sel === i} style={{ display: "block", width: "100%", textAlign: "left", background: sel === i ? "#1e2126" : "#17181a", border: "1px solid #2c2d30", borderRadius: 10, color: "#fff", padding: "8px 10px", marginBottom: 6, cursor: "pointer", font: "inherit" }}><span className="nc-acc" style={{ fontWeight: 800 }}>{i + 1}</span> <b>{t}</b><br /><span style={{ color: "#c9c9ce" }}>{i === 3 ? `Next Mission — Use public transit 3 times. Make every trip count. Progress ${mission} / 3.` : body}</span></button>)}
        {sel === 3 && <button type="button" className="nc-cta" onClick={() => setMission((v) => Math.min(3, v + 1))}>{mission >= 3 ? "Mission complete ✓ +points" : "Log a transit trip"}</button>}
        <p style={{ display: "flex", justifyContent: "space-around", margin: "10px 0 0", color: "#9a9aa0" }}><span className="nc-acc">Home</span><span>Activity</span><span className="nc-acc" style={{ fontSize: 16 }}>N</span><span>Pay</span><span>Profile</span></p>
      </div>
      <div aria-live="polite">
        <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>{sel + 1} · {cur[0].toUpperCase()}</p>
        <p style={{ margin: "6px 0 0" }}>{cur[2]}</p>
        <p style={{ color: "#c9c9ce", margin: "8px 0 0" }}>Printed phone content: {cur[1]}</p>
        <p style={{ color: "#9a9aa0", margin: "12px 0 0" }}>Card render and “Next is yours.” tagline as printed on the left of the slide.</p>
      </div>
    </div>
  </Nc>;
}

/* ---------------- 46 — Rewards Hub ---------------- */
const REWARD_SCREENS = [
  ["Rewards", "Points Balance 6,350 ≈ ¥63.50. Expiring on Dec 31, 2025: 1,200 pts. Your Progress — Silver | Spend ¥4,000 more to reach Gold · ¥6,000 / ¥10,000 (bar). Earn More [All Categories ›]: Dining — Earn 5 pts / ¥10 — 5X · Beverages — Earn 3 pts / ¥10 — 3X · Shopping — Earn 2 pts / ¥10 — 2X · Transportation — Earn 1 pt / ¥10 — 1X · Others — Earn 1 pt / ¥10 — 1X. Bottom nav: Home · Card · Rewards · Profile."],
  ["Categories", "“Choose what you love, earn more.” Dining 5X (Earn 5 pts / ¥10) · Beverages 3X · Shopping 2X · Transportation 1X · Entertainment 1X · Others 1X."],
  ["How You Earn", "Tabs: Earn Points | Bonus Rules. Base Earning — 1 pt for every ¥10 spent (1X). Category Earning (Monthly) — earn more in your favorite categories: Dining 5 pts for every ¥10 spent (5X) · Beverages 3 pts (3X) · Shopping 2 pts (2X) · Transportation 1 pt (1X) · Others 1 pt (1X). Category updates on the 1st of each month. Points will be credited after the transaction settles."],
  ["Offer Detail", "Dining Bonus — Earn 10X Points on Weekend Dining (10X). Validity: May 1 – Jun 30, 2025. Eligible Transactions: In-store & Online dining spend. How to Earn: Earn 10 pts for every ¥10 spent on dining during weekends. Offer Conditions: • Register before Jun 30, 2025 • Each account can earn up to 5,000 pts during the campaign. [Register Now] · Terms & Conditions."],
  ["Redeem", "Available Points 6,350 ≈ ¥63.50. Tabs: All | Lifestyle | Digital | Merchandise. Lifestyle Vouchers — From 2,000 pts › · Partner Offers — From 1,500 pts › · Digital Subscriptions — From 1,000 pts › · Merchandise — From 3,000 pts › · Experiences — From 2,500 pts ›. Redemption rules ›."],
  ["History", "Tabs: All | Earned | Redeemed. May 2025 — Earned · Dining Spend · May 18, 2025 · 250 pts · Redeemed · Lifestyle Voucher · May 17, 2025 · −2,000 pts. May 2025 — Earned · Shopping Spend · May 12, 2025 · 480 pts · Earned · Bonus Points · May 10, 2025 · 300 pts. “That's all for now.” (Month header repeats in the original, as printed.)"],
  ["Redemption Detail", "Lifestyle Voucher — ¥20 Café Voucher (café photograph as printed). 2,000 pts. Order Number R25051800123 · Redeemed On May 18, 2025 14:30 · Status Completed. [View Voucher]"],
  ["Empty: No Rewards Yet", "“You don't have any rewards yet. Start earning points and come back!” [Explore Ways to Earn]"],
  ["Empty: No Available Offers", "“There are no available offers now. Check back later for exciting rewards.” [View All Offers]"],
  ["Empty: Not Enough Points", "“You need 2,000 pts to redeem this reward. Keep earning and try again!” [Explore Ways to Earn]"],
  ["Empty: Offer Unavailable", "“This offer is no longer available. Explore other offers you might like.” [View Other Offers]"],
];
 export function NextCardRewardsHub() {
  const [scr, setScr] = useState(0);
  const [registered, setRegistered] = useState(false);
  return <Nc n="46" title="Rewards Hub" label="Next Card rewards hub — interactive rebuild of Next_Card_Image_46">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>A transparent and engaging rewards experience built for China Gen Z. Design points as printed: Clear Points Balance — real-time balance with upcoming expiry · Category Rewards — earn more in what you love · Progress Tracking — see how close you are to your next reward · Earning Rules — simple and transparent · Flexible Redemption — multiple ways to use your points · Reward History — track every earning and redemption · Empty &amp; Unavailable States — helpful guidance in every situation.</p>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }} role="group" aria-label="Rewards screens">{REWARD_SCREENS.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={scr === i} onClick={() => setScr(i)}>{t}</button>)}</div>
    <div className="nc-phone" style={{ marginTop: 12 }} aria-live="polite">
      <p style={{ margin: "0 0 6px", display: "flex", justifyContent: "space-between" }}><span style={{ fontWeight: 700 }}>{REWARD_SCREENS[scr][0]}</span><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>9:41</span></p>
      <p style={{ color: "#c9c9ce", margin: 0 }}>{REWARD_SCREENS[scr][1]}</p>
      {scr === 0 && <div style={{ marginTop: 10 }}><div style={{ height: 7, background: "#232426", borderRadius: 4 }}><div style={{ width: "60%", height: "100%", background: ORANGE, borderRadius: 4 }} /></div><p style={{ color: "#9a9aa0", margin: "4px 0 0" }}>Silver progress — ¥6,000 / ¥10,000 toward Gold.</p></div>}
      {scr === 3 && <button type="button" className="nc-cta" style={{ marginTop: 10 }} aria-pressed={registered} onClick={() => setRegistered(true)}>{registered ? "✓ Registered for the 10X weekend dining offer" : "Register Now"}</button>}
      {scr === 4 && <p style={{ margin: "10px 0 0" }}>With 6,350 pts you can afford every listed redemption except Merchandise at the top end — the printed “Not Enough Points” state (screen 10) uses a 2,000-pt example threshold.</p>}
    </div>
    <p style={{ color: "#9a9aa0", margin: "12px 0 0" }}><span className="nc-acc">Use Freely. Reward Yourself.</span> Next Card, For Your Next.</p>
  </Nc>;
}

/* ---------------- 47 — Local City Perks ---------------- */
const PERKS47 = [
  ["Morton's Bar", "Cocktail Bar · COCO Park", "280 m", "15% off cocktails", "Mon–Thu, before 11PM"],
  ["% Arabica Shenzhen Bay", "Café · Shenzhen Bay MixC", "450 m", "Free extra shot", "Daily"],
  ["Shenzhen Metro Day Pass", "Transit · All Lines", "1.2 km", "10% off", "Mon–Sun"],
  ["CGV IMAX COCO Park", "Entertainment · COCO Park", "1.3 km", "Buy 1 get 1 50% off", "Mon–Sun"],
  ["Commune Restaurant", "Fusion · OCT Loft", "1.6 km", "10% off food", "Mon–Fri"],
];
export function NextCardLocalPerks() {
  const [city, setCity] = useState(0);
  const [view, setView] = useState(1);
  const [perk, setPerk] = useState(0);
  const cur = PERKS47[perk];
  return <Nc n="47" title="Local City Perks" label="Next Card local city perks — interactive rebuild of Next_Card_Image_47">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Curated offers around you. From late nights to daily commutes, enjoy more of your city. CITY TAB — Shenzhen or Guangzhou, tailored local picks · LIVE MAP &amp; LIST — explore nearby perks in map or list view · MERCHANT DETAIL — offer conditions, distance, and merchant info · EASY REDEEM — show QR code in-store and enjoy the offer.</p>
    <div style={{ display: "flex", gap: 5, alignItems: "center", flexWrap: "wrap" }} role="group">
      <span>📍 Local Perks</span>
      {["Shenzhen", "Guangzhou"].map((c, i) => <button key={c} type="button" className="nc-tab" aria-pressed={city === i} onClick={() => setCity(i)}>{c}</button>)}
      {["Map", "List"].map((v, i) => <button key={v} type="button" className="nc-tab" aria-pressed={view === i} onClick={() => setView(i)}>{v}</button>)}
      <span style={{ color: "#9a9aa0" }}>Near you [See all] — All · Food &amp; Drink · Café · Nightlife · Transit · Entertainment</span>
    </div>
    {city === 1 ? <p style={{ margin: "12px 0 0" }} aria-live="polite">The printed phones show the Shenzhen tab active; Guangzhou is the second city tab (its list is not shown on the slide). Map labels as printed around the active pins: COCO Park Shopping Mall · Futian CBD · Gangxia · Ping An Finance Center · Shenzhen Convention &amp; Exhibition Center · Shenzhen Central Park.</p>
    : view === 0 ? <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 12, marginTop: 12, background: "radial-gradient(circle at 55% 45%, #23262b, #101012 70%)" }} aria-live="polite">
        <p style={{ margin: 0, color: "#c9c9ce" }}>Printed map: dark street map of Futian with orange category pins and a blue “you are here” dot. Labels: COCO Park Shopping Mall · Futian CBD · Gangxia · Ping An Finance Center · Shenzhen Convention &amp; Exhibition Center · Shenzhen Central Park. Tap a perk to open its detail:</p>
        <p style={{ display: "flex", gap: 5, flexWrap: "wrap", margin: "8px 0 0" }}>{PERKS47.map(([n2], i) => <button key={n2} type="button" className="nc-tab" aria-pressed={perk === i} onClick={() => { setPerk(i); setView(1); }}>📍 {n2}</button>)}</p>
      </div>
    : <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 12, marginTop: 12 }}>
        <div role="group" aria-label="Perk list">{PERKS47.map(([n2, meta, dist, offer, when], i) => <button key={n2} type="button" onClick={() => setPerk(i)} aria-pressed={perk === i} style={{ display: "flex", justifyContent: "space-between", width: "100%", background: perk === i ? "#1e2126" : "#17181a", border: "1px solid #2c2d30", borderRadius: 10, color: "#fff", padding: "9px 11px", marginBottom: 6, cursor: "pointer", font: "inherit", textAlign: "left" }}><span><b>{n2}</b><br /><span style={{ color: "#c9c9ce" }}>{meta}</span><br /><span className="nc-acc">{offer}</span> <span style={{ color: "#9a9aa0" }}>{when}</span></span><span style={{ color: "#9a9aa0" }}>{dist} ›</span></button>)}</div>
        <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 12 }} aria-live="polite">
          <p style={{ margin: 0 }}><b style={{ fontSize: 14.5 }}>{cur[0]}</b> <span style={{ float: "right", color: "#9a9aa0" }}>{cur[2]}</span></p>
          <p style={{ color: "#c9c9ce", margin: "2px 0 0" }}>{cur[1]}</p>
          {perk === 0 ? <><p style={{ margin: "10px 0 0" }}><b className="nc-acc">15% off cocktails</b> <span className="nc-tab" style={{ float: "right" }}>In-store only</span><br /><span style={{ color: "#c9c9ce" }}>Mon–Thu, before 11PM</span></p>
            <div style={{ background: "#f5f5f3", color: "#111", borderRadius: 8, padding: "10px", textAlign: "center", marginTop: 10 }}><p style={{ margin: 0, fontSize: 10.5, color: "#55565a" }}>▦ Show this QR code to staff to redeem (QR graphic as printed)</p><p style={{ fontSize: 34, margin: "4px 0", letterSpacing: 2 }}>▦▦▦</p><p style={{ margin: 0 }}>Valid until Jun 30, 2025<br /><span style={{ color: "#55565a" }}>One use per transaction</span></p></div>
            <p style={{ margin: "10px 0 0" }}><b>About the merchant</b><br /><span style={{ color: "#c9c9ce" }}>A hidden gem in COCO Park. Creative cocktails, great music, and good vibes.</span><br />📍 COCO Park, Futian District, Shenzhen, Guangdong ›</p></>
          : <p style={{ margin: "10px 0 0" }}><b className="nc-acc">{cur[3]}</b><br /><span style={{ color: "#c9c9ce" }}>{cur[4]} — detail page follows the same pattern as Morton's Bar on the printed slide (offer, QR redeem, about).</span></p>}
        </div>
      </div>}
    <p style={{ color: "#9a9aa0", margin: "12px 0 0" }}>NEXT CARD · DESIGNED FOR GENERATION NEXT</p>
  </Nc>;
}

/* ---------------- File 48 (printed 49) — Credit Builder ---------------- */
const REMINDERS48 = [["Payment due", "1 day before", true], ["Auto-pay result", "On payment day", true], ["Bill available", "When statement is ready", true], ["Spending alert", "When over budget", false], ["Limit usage alert", "When over 80%", true]];
export function NextCardCreditBuilder() {
  const [tab, setTab] = useState(0);
  const [rem, setRem] = useState<boolean[]>(REMINDERS48.map((r) => r[2] as boolean));
  const [paid, setPaid] = useState(false);
  const TABS = ["Repayment", "Insights", "Limit growth", "Learn", "Reminders"];
  return <Nc n="49" title="Credit Builder" label="Next Card credit builder — interactive rebuild of Next_Card_Image_48 (printed 49)">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Designed for Gen Z in China — build credit through smart habits, not shortcuts.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
      {[["Start small. Build steady.", "Use responsibly, repay on time, and grow your limit."], ["Understand. Improve.", "Insights and tools that help you make smarter choices."], ["Progress that matters.", "Healthy habits today, better opportunities tomorrow."], ["Healthy behavior guide", "✓ Spend within your means · ✓ Repay on time, every time · ✓ Keep credit utilization low · ✓ Review regularly and adjust"]].map(([t, b]) => <div key={t} style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>{t}</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>{b}</p></div>)}
    </div>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 12 }} role="group" aria-label="Credit builder phones">{TABS.map((t, i) => <button key={t} type="button" className="nc-tab" aria-pressed={tab === i} onClick={() => setTab(i)}>{t}</button>)}</div>
    <div className="nc-phone" style={{ marginTop: 12 }} aria-live="polite">
      <p style={{ margin: "0 0 6px", display: "flex", justifyContent: "space-between" }}><b>{TABS[tab]}</b><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>9:41</span></p>
      {tab === 0 && <><p style={{ margin: 0 }}>Next payment due<br /><b style={{ fontSize: 17 }}>May 25</b> <span className="nc-tab" style={{ float: "right" }}>Manage</span><br /><span style={{ color: "#c9c9ce" }}>Auto-pay on</span></p>
        <p style={{ color: "#c9c9ce", margin: "8px 0 0" }}>Calendar May 2025 as printed, with the 25th circled as the due date (legend: ● Due date · ● Scheduled).</p>
        <p className="nc-row"><span>This month's plan — Total due</span><b>¥1,240.00</b></p>
        <p className="nc-row"><span>Minimum due</span><b>¥1,240.00</b></p>
        <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>Keep it up! On-time payments build strong credit.</p>
        <button type="button" className="nc-cta" style={{ marginTop: 10 }} aria-pressed={paid} onClick={() => setPaid(true)}>{paid ? "✓ Repaid — on time, as the guide prescribes" : "Repay now"}</button>
        <p style={{ textAlign: "center", margin: "8px 0 0" }}><span className="nc-acc">Set or modify auto-pay</span></p></>}
      {tab === 1 && <><p style={{ margin: 0, color: "#9a9aa0" }}>Tabs: Overview · Spending · Utilization · Payments</p>
        <p style={{ margin: "8px 0 0" }}>Credit utilization <span style={{ color: "#7ac74f", float: "right" }}>On track</span></p>
        <p style={{ margin: "4px 0 0" }}><b>Keep it low, build it strong.</b><br /><span style={{ color: "#7ac74f" }}>● Good habit</span> <span style={{ color: "#c9c9ce" }}>— Using a low portion of your limit helps your credit health.</span></p>
        <p style={{ margin: "10px 0 4px" }}><b>Spending insights</b> <span style={{ color: "#9a9aa0" }}>This month ⌄</span></p>
        {[["Daily life", 40], ["Food & drink", 24], ["Shopping", 18], ["Transport", 10], ["Other", 8]].map(([c, v]) => <p key={c as string} style={{ margin: "3px 0", display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 78 }}>{c}</span><span style={{ flex: 1, background: "#232426", height: 8, borderRadius: 3 }}><span style={{ display: "block", width: `${v}%`, height: "100%", background: ORANGE, borderRadius: 3 }} /></span><b>{v}%</b></p>)}
        <p style={{ margin: "8px 0 0" }}><b>Insight</b> — <span style={{ color: "#c9c9ce" }}>Your spending is well balanced. Keep prioritizing needs over wants.</span></p>
        <p style={{ color: "#9a9aa0", margin: "6px 0 0" }}>Bottom nav on this phone: Home · Card · Build (active) · Learn · Me.</p></>}
      {tab === 2 && <><p style={{ margin: 0 }}>Limit growth progress <span style={{ color: "#7ac74f", float: "right" }}>On track</span></p>
        <p style={{ margin: "8px 0 0" }}>✓ Start — 🔒 Good habits — 🔒 More opportunities <span style={{ color: "#9a9aa0" }}>(lock badges as printed)</span></p>
        <p style={{ margin: "10px 0 4px" }}><b>What you can do next</b></p>
        {[["Use your card regularly", "Small, steady usage builds trust."], ["Repay on time", "On-time payments strengthen your profile."], ["Keep utilization low", "Stay under 30% of your limit."]].map(([t, b]) => <p key={t} className="nc-row"><b>{t}</b><span style={{ color: "#c9c9ce" }}>{b}</span></p>)}
        <p style={{ color: "#c9c9ce", margin: "8px 0 0" }}>Continue building good habits to unlock limit increases and more opportunities.</p></>}
      {tab === 3 && <><p style={{ margin: 0 }}><b>Learn</b> — Credit knowledge for real life.</p>
        <p style={{ color: "#9a9aa0", margin: "4px 0" }}>Tabs: All | Basics | Manage | Grow</p>
        {[["What is credit utilization", "2 min read"], ["Why payments on time matter", "2 min read"], ["How to build credit", "3 min read"]].map(([t, b]) => <p key={t} className="nc-row"><span>{t}</span><span style={{ color: "#c9c9ce" }}>{b}</span></p>)}</>}
      {tab === 4 && <><p style={{ margin: 0 }}><b>Reminders</b> — Stay on track, effortlessly. Toggle them as printed:</p>
        {REMINDERS48.map(([t, b], i) => <p key={t as string} className="nc-row"><span>{t}<br /><span style={{ color: "#9a9aa0" }}>{b}</span></span><button type="button" className="nc-tab" aria-pressed={rem[i]} onClick={() => setRem((rs) => rs.map((v, j) => (j === i ? !v : v)))}>{rem[i] ? "ON" : "OFF"}</button></p>)}
        <p style={{ color: "#c9c9ce", margin: "8px 0 0" }}>🔔 Smart reminders help you never miss an important moment.</p></>}
    </div>
  </Nc>;
}

/* ---------------- File 49 (printed Experience 48) — Squad and Referral Experience ---------------- */
const SQUAD_STEPS = [
  ["Create Squad", "Set up your squad and get your unique invite link.", "Create Your Squad — Invite friends to join Next Card. Grow your squad and unlock shared rewards together. [Create Squad] By continuing, you agree to the Squad Rules."],
  ["Invite Friends", "Share the link through your preferred channel.", "Your Invite Link — Share your link with friends. They get benefits. You both earn when they join and activate. [nextcard.cn/join/AB12CD] [Copy] · Share via: WeChat · Moments · SMS · More. Invite Tips: • Share with friends who may like Next Card. • Rewards are better with real connections. • You can track your squad anytime."],
  ["Track Progress", "Monitor invites and see who has joined.", "My Squad — Squad Progress 3/10 (arc) · 3 Joined · 7 Remaining · Next Milestone: 5 Joined. Tabs: All (3) | Joined (3) | Activated (2). Alex — Joined — May 12, 10:30 · Chris — Activated — May 13, 09:15 · Jamie — Joined — May 14, 14:20. [Invite More Friends]"],
  ["Squad Rewards", "Unlock shared rewards when milestones are met.", "Milestone Reached — 5 Joined (gift visual as printed). Shared Reward — Everyone Gets ¥30. Reward Balance — Reward will be credited within 24 hours. Upcoming Milestone: 10 Joined — ¥80 (progress bar)."],
  ["Privacy & Safety", "Manage privacy settings and stay protected.", "Privacy Controls (toggles on the printed phone): Show my squad activity — Allow friends to see your squad progress [ON] · Show my name — Allow friends to see your name in the squad [ON] · Allow direct messages — Allow friends to message you about Next Card [OFF]. Safety & Limitations: One reward per user — Rewards are limited to one account per user · No self-referrals — Invites must come from real connections · Suspicious activity — We may review or remove ineligible activity. Learn more about our Squad Rules."],
];
const MILESTONES: Array<[string, string, boolean]> = [["1 Joined", "¥10", true], ["3 Joined", "¥20", true], ["5 Joined", "¥30", true], ["10 Joined", "¥80", false]];
export function NextCardSquad() {
  const [s, setS] = useState(2);
  const [joined, setJoined] = useState(3);
  const [copied, setCopied] = useState(false);
  const [toggles, setToggles] = useState([true, true, false]);
  const milestone = MILESTONES.filter(([t]) => parseInt(t) <= joined).pop();
  return <Nc n="48" title="Squad and Referral Experience" label="Next Card squad referral — interactive rebuild of Next_Card_Image_49 (printed Experience 48)">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>Printed label: “EXPERIENCE 48” (this file's printed number runs one behind its file name). Invite friends to build your squad. Track progress, enjoy shared rewards, and stay in control with clear limitations and privacy settings. Left rail as printed: Build Your Squad — create your squad and invite friends with an invite link · Track Progress — see squad growth and referral status in real time · Shared Rewards — everyone earns when the squad achieves milestones · Fair and Safe — clear rules to prevent abuse and ensure a positive experience · Privacy First — you control what's shared and who can see your activity.</p>
    <p className="nc-acc" style={{ margin: "0 0 4px", fontWeight: 700, letterSpacing: ".08em" }}>JOURNEY OVERVIEW</p>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }} role="group" aria-label="Squad journey">{SQUAD_STEPS.map(([t, sub], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span style={{ color: "#9a9aa0" }}>→</span>}<button type="button" className="nc-tab" aria-pressed={s === i} onClick={() => setS(i)}>{String(i + 1).padStart(2, "0")} {t}</button></span>)}</div>
    <div className="nc-phone" style={{ marginTop: 12 }} aria-live="polite">
      <p style={{ margin: "0 0 6px", fontWeight: 700 }}>{SQUAD_STEPS[s][0]}</p>
      <p style={{ color: "#c9c9ce", margin: 0 }}>{SQUAD_STEPS[s][1]}</p>
      <p style={{ margin: "8px 0 0" }}>{SQUAD_STEPS[s][2]}</p>
      {s === 2 && <p style={{ margin: "10px 0 0", display: "flex", gap: 6, alignItems: "center" }}><button type="button" className="nc-tab" onClick={() => setJoined((j) => Math.min(10, j + 1))}>Simulate a friend joining ({joined}/10)</button>{joined >= 10 && <span style={{ color: "#7ac74f" }}>All milestones reached — top reward ¥80.</span>}</p>}
      {s === 1 && <button type="button" className="nc-cta" style={{ marginTop: 10 }} aria-pressed={copied} onClick={() => setCopied(true)}>{copied ? "✓ Link copied: nextcard.cn/join/AB12CD" : "Copy invite link"}</button>}
      {s === 4 && <p style={{ margin: "10px 0 0", display: "flex", gap: 5, flexWrap: "wrap" }}>{["Show my squad activity", "Show my name", "Allow direct messages"].map((t, i) => <button key={t} type="button" className="nc-tab" aria-pressed={toggles[i]} onClick={() => setToggles((tg) => tg.map((v, j) => (j === i ? !v : v)))}>{t} {toggles[i] ? "ON" : "OFF"}</button>)}</p>}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 12 }}>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }} aria-live="polite"><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>SHARED REWARDS</p><p style={{ color: "#c9c9ce", margin: "4px 0" }}>Rewards are shared when your squad reaches a milestone.</p>
        {MILESTONES.map(([t, v, reached]) => <p key={t} className="nc-row"><span>{parseInt(t) <= joined ? "✓" : "🎁"} {t}</span><b className="nc-acc">{v}</b></p>)}
        <p style={{ margin: "6px 0 0" }}>At {joined} joined, the unlocked shared reward is <b className="nc-acc">{milestone ? milestone[1] : "—"}</b> for everyone (printed track: 1→¥10 · 3→¥20 · 5→¥30 · 10→¥80).</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>FAIR AND SAFE</p><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>We take measures to keep the experience fair and enjoyable for everyone.</p><ul style={{ margin: "5px 0 0", paddingLeft: 16, color: "#c9c9ce" }}><li>One reward per user — Only eligible for one account.</li><li>No self-referrals — Invites must be from real friends.</li><li>Security monitoring — We detect and prevent abuse.</li></ul></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10 }}><p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>PRIVACY FIRST</p><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>You're in control of your information and activity.</p><ul style={{ margin: "5px 0 0", paddingLeft: 16, color: "#c9c9ce" }}><li>Choose what to share — Control your visibility.</li><li>Secure by design — Your data is protected.</li><li>You can change settings anytime.</li></ul></div>
    </div>
  </Nc>;
}

/* ---------------- 50 — Monthly Missions ---------------- */
const MISSIONS50 = [
  ["Make the first eligible purchase", "Make 1 eligible purchase with your Next Card.", 1, 1, "¥18 Account Credit — ✓ Claimed", "• Minimum transaction: ¥18 • Excludes cash advances and fees • Posted transactions only • May take up to 24 hours to update", "View eligible purchases"],
  ["Complete repayment setup", "Set up repayment for your Next Card (mission row as printed on the list phone).", 1, 1, "", "", ""],
  ["Use three everyday categories", "Spend in any 3 different everyday categories.", 2, 3, "", "• Categories: Transport, Food & Drink, Shopping, Lifestyle, Entertainment • Must be 3 different categories • Posted transactions only", ""],
  ["Explore one local merchant", "Make 1 purchase at a local merchant near you.", 0, 1, "¥12 Account Credit", "• Local merchant defined by transaction location • Minimum transaction: ¥12 • Excludes cash advances and fees • Posted transactions only", "Find local merchants"],
  ["Complete a financial-learning module", "Complete 1 financial-learning module in the Next Card Learning Center.", 0, 1, "¥10 Account Credit", "• Modules take ~5–10 minutes • Must complete all lessons • Progress may take up to 24 hours to update", "Go to Learning Center"],
];
export function NextCardMissions() {
  const [mIdx, setMIdx] = useState(0);
  const [cats, setCats] = useState([true, true, false]);
  const cur = MISSIONS50[mIdx];
  const catCount = cats.filter(Boolean).length;
  return <Nc n="50" title="Monthly Missions" label="Next Card monthly missions — interactive rebuild of Next_Card_Image_50">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>China Gen Z Credit Card Concept — complete missions that build smart money habits. Earn rewards for everyday actions that keep you in control. Build better habits — practical actions for everyday financial wellness · Earn meaningful rewards — useful credits and benefits, not more borrowing · Stay in control — clear progress, helpful tips, and full transparency.</p>
    <p style={{ margin: "0 0 8px" }}><span className="nc-tab" style={{ borderColor: ORANGE }}>DESIGN PRINCIPLES: ☑ Encourage responsible actions · ☑ Transparent progress and rules · ☑ Accessible and easy to use · ☑ Rewards that add real value</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 12 }}>
      <div className="nc-phone" style={{ margin: 0 }}>
        <p style={{ margin: "0 0 6px" }}><b>Missions</b></p>
        <div style={{ background: "linear-gradient(120deg,#b23c17,#ff4b1f)", borderRadius: 10, padding: 10 }}>
          <p style={{ margin: 0 }}><b>August Missions</b> · Reset in 18 days <span style={{ float: "right", fontWeight: 800 }}>60%</span></p>
          <p style={{ margin: "2px 0 0" }}>3 / 5 completed</p>
        </div>
        <div role="group" aria-label="Mission list" style={{ marginTop: 8 }}>{MISSIONS50.map(([t, , done, total], i) => <button key={t} type="button" onClick={() => setMIdx(i)} aria-pressed={mIdx === i} style={{ display: "flex", justifyContent: "space-between", width: "100%", background: mIdx === i ? "#1e2126" : "transparent", border: "none", borderBottom: "1px solid #232426", color: "#fff", padding: "7px 2px", cursor: "pointer", font: "inherit", textAlign: "left" }}><span>{t}</span><span>{done} / {total} {done === total ? <span style={{ color: "#7ac74f" }}>✓</span> : ""}</span></button>)}</div>
        <p style={{ color: "#9a9aa0", margin: "8px 0 0" }}>Missions refresh monthly. Some actions may take up to 24 hours to update. Bottom nav: Home · Activity · Pay · Missions (active) · Me.</p>
      </div>
      <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 12 }} aria-live="polite">
        <p style={{ margin: 0 }}><b style={{ fontSize: 14.5 }}>{cur[0]}</b></p>
        <p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>{cur[1]}</p>
        <p style={{ margin: "8px 0 0" }}>Progress <b>{mIdx === 2 ? `${catCount} / 3` : `${cur[2]} / ${cur[3]}`}</b></p>
        <div style={{ height: 7, background: "#232426", borderRadius: 4 }}><div style={{ width: `${((mIdx === 2 ? catCount : (cur[2] as number)) / (cur[3] as number)) * 100}%`, height: "100%", background: ORANGE, borderRadius: 4 }} /></div>
        {mIdx === 2 && <><p style={{ margin: "10px 0 4px" }}><b>Your categories</b> — tap to log a category spend:</p><p style={{ display: "flex", gap: 5 }}>{["Transport", "Food & Drink", "Shopping"].map((c, i) => <button key={c} type="button" className="nc-tab" aria-pressed={cats[i]} onClick={() => setCats((cs) => cs.map((v, j) => (j === i ? !v : v)))}>{c} {cats[i] ? "✓" : "○"}</button>)}</p><p style={{ color: "#9a9aa0", margin: "4px 0 0" }}>Show suggestions ⌄ (as printed).</p></>}
        {cur[4] && <p style={{ margin: "10px 0 0" }}><b>Reward</b> — {cur[4]}</p>}
        {cur[5] && <p style={{ margin: "8px 0 0" }}><b>Rules</b><br /><span style={{ color: "#c9c9ce" }}>{cur[5]}</span></p>}
        {cur[6] && <button type="button" className="nc-cta" style={{ marginTop: 12 }}>{cur[6]}</button>}
      </div>
    </div>
    <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 10, marginTop: 12 }}>
      <p className="nc-acc" style={{ margin: 0, fontWeight: 700 }}>ABOUT MONTHLY MISSIONS</p>
      <p style={{ color: "#c9c9ce", margin: "5px 0 0" }}>Monthly Missions help you build smart financial habits with small, meaningful actions. Complete all missions to earn bonus rewards. Who can join — all Next Card cardholders in good standing · How it works — complete missions within the month; track progress in real time · Rewards — earn account credits and exclusive benefits · When rewards arrive — rewards are credited within 3 business days · Need help? — visit Help Center in the Next Card app.</p>
    </div>
    <p style={{ margin: "10px 0 0", display: "flex", gap: 14, flexWrap: "wrap", color: "#c9c9ce" }}><span className="nc-acc" style={{ fontWeight: 700 }}>ACCESSIBILITY</span><span>🔊 Screen reader friendly</span><span>◐ High contrast mode support</span><span><b>At</b> Scalable text up to 200%</span><span>▣ Clear focus indicators</span><span>☀ Color not the only way to understand</span><span>Simple language and icons</span><span style={{ marginLeft: "auto" }}>Responsibility tip: Spend within your means and pay on time. Good habits today, more freedom tomorrow.</span></p>
    <p style={{ color: "#9a9aa0", margin: "6px 0 0", letterSpacing: ".1em" }}>NEXT CARD PRODUCT DESIGN PORTFOLIO</p>
  </Nc>;
}

/* ---------------- 51 — Responsive and State Matrix ---------------- */
const MATRIX51: Array<[string, string, string, string, string, string, string]> = [
  ["Loading", "Shimmer skeletons indicate loading progress. Non-blocking and perceived as fast.", "", "Skeleton layout adapts to content structure. Smooth, minimal motion.", "", "Progressive skeletons prioritize key information. Maintains layout stability.", ""],
  ["Empty", "Friendly empty state with clear guidance. Encourages next action.", "“No transactions yet — Start spending to see your activity here.”", "Illustration and CTA guide users to get started. Action-oriented and optimistic.", "[Explore rewards]", "Spacious layout clarifies the next best step. Reduces cognitive load.", ""],
  ["Error", "Clear error message with primary recovery option. Keeps users in control.", "“Something went wrong — Please try again.” [Retry]", "Context-aware error with safe recovery. Maintains trust.", "", "Error context explained with actionable step. Easy to recover.", ""],
  ["Pending approval", "Reassures user with timeline expectation. Sets clear expectations.", "“Application under review — We'll notify you soon.” [View status]", "Status visibility with option to check progress. Transparent and reliable.", "", "Persistent status with easy access to details. Builds confidence.", ""],
  ["Reward unavailable", "Explains limitation and suggests alternatives. Keeps engagement high.", "“Reward unavailable — This reward is not available at the moment.” [Browse other rewards]", "Alternative path keeps the journey moving forward. Positive framing.", "", "Consistent tone and helpful alternative. Reduces friction.", ""],
  ["Offline or slow network", "Detects offline status and offers quick retry. Works in poor connectivity.", "“You're offline — Check your connection and try again.” [Retry]", "Supports network recovery with minimal steps. Resilient by design.", "", "Guides user to restore connection and continue. Leaves no one behind.", ""],
];
export function NextCardStateMatrix() {
  const [st, setSt] = useState(1);
  const [bp, setBp] = useState(0);
  const [large, setLarge] = useState(false);
  const [rm, setRm] = useState(true);
  const cur = MATRIX51[st];
  const note = bp === 0 ? cur[1] : bp === 1 ? cur[3] : cur[5];
  const screen = bp === 0 ? cur[2] : bp === 1 ? cur[4] : cur[6];
  return <Nc n="51" title="Responsive and State Matrix" label="Next Card state matrix — interactive rebuild of Next_Card_Image_51">
    <p style={{ color: "#c9c9ce", marginTop: 0 }}>China Gen Z Credit Card Concept — a comprehensive QA matrix of Next Card across breakpoints, states, and accessibility scenarios to ensure a consistent, reliable experience for every user.</p>
    <p style={{ margin: "0 0 6px" }}><b className="nc-acc">BREAKPOINTS</b> — <button type="button" className="nc-tab" aria-pressed={bp === 0} onClick={() => setBp(0)}>📱 Mobile 390 × 844</button> <button type="button" className="nc-tab" aria-pressed={bp === 1} onClick={() => setBp(1)}>▭ Tablet 820 × 1180</button> <button type="button" className="nc-tab" aria-pressed={bp === 2} onClick={() => setBp(2)}>🖥 Desktop 1440 × 1024</button></p>
    <p style={{ margin: "0 0 6px" }}><b className="nc-acc">STATE CATEGORIES</b> — Loading · Empty · Error · Pending approval · Reward unavailable · Offline or slow network · Accessibility-focused</p>
    <p style={{ margin: "0 0 10px", color: "#c9c9ce" }}><b style={{ color: "#fff" }}>GLOBAL BEHAVIORS</b> — ✓ Consistent navigation and hierarchy · ✓ Clear feedback for every state · ✓ Accessible, inclusive, and usable · ✓ Resilient to network and device changes</p>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }} role="group" aria-label="States">{MATRIX51.map(([t], i) => <button key={t} type="button" className="nc-tab" aria-pressed={st === i} onClick={() => setSt(i)}>{t}</button>)}</div>
    <div style={{ border: "1px solid #333438", borderRadius: 10, padding: 12, marginTop: 10 }} aria-live="polite">
      <p style={{ margin: 0 }}><b>{cur[0]}</b> — {bp === 0 ? "Mobile" : bp === 1 ? "Tablet" : "Desktop"} note as printed: {note}</p>
      {screen && <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>Printed screen text: {screen}</p>}
      {bp > 0 && !screen && <p style={{ color: "#9a9aa0", margin: "6px 0 0" }}>The printed {bp === 1 ? "tablet" : "desktop"} cell shows the same state screen pattern as mobile (desktop adds the left nav rail: Home · Transactions · Rewards · Card · Profile · Support).</p>}
    </div>
    <p className="nc-acc" style={{ margin: "14px 0 6px", fontWeight: 700 }}>ACCESSIBILITY-FOCUSED VIEWS — Ensuring Next Card is inclusive, readable, and usable for all.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>FOCUS INDICATORS</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>Visible focus states for all interactive elements. Keyboard navigable. (Printed list: Home — focused · Transactions · Rewards.)</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>LARGE TEXT EXAMPLE</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>Text scales up without loss of content or function. Up to 200% supported.</p>
        <button type="button" className="nc-tab" aria-pressed={large} onClick={() => setLarge((v) => !v)} style={{ marginTop: 6 }}>Toggle 200% text</button>
        <p style={{ margin: "6px 0 0", fontSize: large ? 19 : undefined }} aria-live="polite">Next Card — Balance <b>¥8,888.00</b> · Available credit ¥21,112.00</p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>REDUCED MOTION</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>Reduces motion for comfort and accessibility. Respects user setting.</p>
        <p style={{ margin: "6px 0 0" }}>Motion ⌄ · Reduce motion — Minimize animations <button type="button" className="nc-tab" aria-pressed={rm} onClick={() => setRm((v) => !v)}>{rm ? "ON" : "OFF"}</button></p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>CONTRAST CHECK</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>Meets WCAG AA standards for contrast and clarity. Readable in all conditions.</p><p style={{ margin: "6px 0 0", background: "#17181a", borderRadius: 6, padding: 7 }}>Good morning <b>Li Wei</b><br />Balance <b>¥8,888.00</b> <span style={{ background: "#22c55e", color: "#06130a", borderRadius: 999, padding: "0 6px", fontWeight: 700 }}>AA</span></p></div>
      <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: 9 }}><b>RETRY / RECOVERY ACTIONS</b><p style={{ color: "#c9c9ce", margin: "3px 0 0" }}>Primary actions are prominent and easy to understand. Recovery is always possible.</p><p style={{ margin: "6px 0 0", background: "#17181a", borderRadius: 6, padding: 7, textAlign: "center" }}>Something went wrong<br /><span style={{ color: "#9a9aa0" }}>Please try again.</span><br /><button type="button" className="nc-cta" style={{ marginTop: 6 }} onClick={() => setSt(2)}>Retry</button></p></div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "12px 0 0" }}>ⓘ NOTES — All states are tested across iOS, Android, and major browsers. · Layouts adapt fluidly within breakpoints. · Content and components follow accessibility best practices.</p>
  </Nc>;
}

/* ---------------- Routing ---------------- */
/* ---------------- 18 — Sensitivity Analysis (pass 6 rebuild) ----------------
 * Pass 6 audit: this slot rendered the Reward Engine screen (the data
 * title's subject). Printed Image 18 is the sensitivity analysis:
 * scenario matrix + tornado chart, all figures Modeled. */
const SENS_SCENARIOS = [
  { name: "CONSERVATIVE", sub: "Lower assumptions", app: "2.0M", appr: "18%", act: "40%", cards: "~144K" },
  { name: "BASE", sub: "Base assumptions", app: "2.5M", appr: "20%", act: "60%", cards: "300K" },
  { name: "UPSIDE", sub: "Higher assumptions", app: "3.0M", appr: "22%", act: "70%", cards: "~462K" },
];
const SENS_TORNADO = [
  { label: "APPLICATION VOLUME", sub: "(Unique applicants) ±20% vs. base", lo: 20, hi: 20, loT: "-60K", hiT: "+60K", range: "240K – 360K" },
  { label: "APPROVAL RATE", sub: "(Approval rate) ±2pp vs. base", lo: 10, hi: 10, loT: "-30K", hiT: "+30K", range: "270K – 330K" },
  { label: "ACTIVATION RATE", sub: "(Activation rate) ±10pp vs. base", lo: 8.3, hi: 8.3, loT: "-25K", hiT: "+25K", range: "275K – 325K" },
];
export function NextCardSensitivity() {
  const [sc, setSc] = useState(1);
  const cell: React.CSSProperties = { padding: "9px 10px", borderTop: "1px solid #2c2c2f", fontSize: 12.5 };
  return <Nc n="18" title="Sensitivity Analysis" label="Next Card sensitivity analysis — interactive rebuild of Next_Card_Image_18">
    <p style={{ color: "#c9c9ce", margin: "0 0 4px" }}>Assessing the impact of conversion assumptions on approved cards <span style={{ border: "1.5px solid #ff4b1f", color: "#ff4b1f", borderRadius: 6, padding: "1px 9px", fontWeight: 700, fontSize: 11, marginLeft: 8 }}>MODELED</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 18, marginTop: 10 }}>
      <div>
        <p className="nc-acc" style={{ margin: 0, fontWeight: 700, letterSpacing: ".06em" }}>SCENARIO MATRIX</p>
        <p style={{ color: "#c9c9ce", margin: "2px 0 8px", fontSize: 12 }}>Conversion assumptions and resulting approved cards</p>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr 1fr 1.1fr", border: "1px solid #2c2c2f" }}>
          <span style={cell} /><span style={cell}><b>APPLICATION</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>(Unique applicants)</span></span><span style={cell}><b>APPROVAL</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>(Approval rate)</span></span><span style={cell}><b>ACTIVATION</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>(Activation rate)</span></span><span style={cell}><b>APPROVED CARDS</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>(Result)</span></span>
          {SENS_SCENARIOS.map((s, i) => <div key={s.name} style={{ display: "contents" }}>
            <button type="button" aria-pressed={sc === i} onClick={() => setSc(i)} style={{ ...cell, background: i === 1 ? "#c9330d" : sc === i ? "#2a1408" : "transparent", color: "#fff", border: "none", borderTop: "1px solid #2c2c2f", textAlign: "left", cursor: "pointer", font: "inherit" }}><b>{s.name}</b><br /><span style={{ fontSize: 10.5, color: "#e8e8ea" }}>{s.sub}</span></button>
            {[s.app, s.appr, s.act].map((v, j) => <span key={j} style={{ ...cell, background: i === 1 ? "#8f2407" : undefined }}><b style={{ fontSize: 15 }}>{v}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>{["Lower", "Base", "Higher"][i]}</span></span>)}
            <span style={{ ...cell, background: i === 1 ? "#ff4b1f" : undefined }}>{i === 1 ? <><span style={{ fontSize: 10.5 }}>Approximately</span><br /><b style={{ fontSize: 19 }}>300K</b><br /><span style={{ fontSize: 10.5 }}>Modeled</span></> : <><b style={{ fontSize: 15 }}>{s.cards}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>Modeled</span></>}</span>
          </div>)}
        </div>
        <p style={{ margin: "10px 0 0", fontSize: 12 }} aria-live="polite">Selected scenario: <b>{SENS_SCENARIOS[sc].name}</b> — {SENS_SCENARIOS[sc].app} applicants · {SENS_SCENARIOS[sc].appr} approval · {SENS_SCENARIOS[sc].act} activation → <b className="nc-acc">{SENS_SCENARIOS[sc].cards}</b> approved cards (Modeled).</p>
      </div>
      <div>
        <p className="nc-acc" style={{ margin: 0, fontWeight: 700, letterSpacing: ".06em" }}>SENSITIVITY (TORNADO) ANALYSIS</p>
        <p style={{ color: "#c9c9ce", margin: "2px 0 8px", fontSize: 12 }}>Impact of changing each conversion assumption on approved cards (Change applied independently while others held at base)</p>
        <p style={{ margin: "0 0 6px", fontSize: 11, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}><span><span style={{ background: "#ff4b1f", padding: "0 7px", marginRight: 5 }}>&nbsp;</span>Lower (Impact to Approved Cards) <span style={{ background: "#8a8a90", padding: "0 7px", margin: "0 5px 0 12px" }}>&nbsp;</span>Higher (Impact to Approved Cards)</span> <span style={{ color: "#9a9aa0", textAlign: "right" }}>IMPACT RANGE (Approved Cards) Modeled</span></p>
        {SENS_TORNADO.map((t) => <div key={t.label} style={{ display: "grid", gridTemplateColumns: "128px 1fr 74px", gap: 8, alignItems: "center", borderTop: "1px solid #2c2c2f", padding: "7px 0" }}>
          <span style={{ fontSize: 11 }}><b>{t.label}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10 }}>{t.sub}</span></span>
          <span style={{ position: "relative", height: 22, display: "block" }}>
            <span style={{ position: "absolute", top: 0, height: 22, right: "50%", width: `${t.lo}%`, background: "#ff4b1f", display: "flex", alignItems: "center", paddingLeft: 6, boxSizing: "border-box" }}><span style={{ fontSize: 10.5, fontWeight: 700, whiteSpace: "nowrap" }}>{t.loT}</span></span>
            <span style={{ position: "absolute", top: 0, height: 22, left: "50%", width: `${t.hi}%`, background: "#8a8a90", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 6, boxSizing: "border-box" }}><span style={{ fontSize: 10.5, fontWeight: 700, whiteSpace: "nowrap" }}>{t.hiT}</span></span>
            <span style={{ position: "absolute", left: "50%", top: -4, height: 30, borderLeft: "1.5px dashed #c9c9ce" }} />
          </span>
          <span style={{ fontSize: 11.5, textAlign: "right" }}>{t.range}</span>
        </div>)}
        <p style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa0", fontSize: 10.5, margin: "4px 74px 0 136px" }}><span>150K</span><span>200K</span><span>250K</span><span><b style={{ color: "#ff4b1f", fontSize: 12 }}>300K</b></span><span>350K</span><span>400K</span><span>450K</span></p>
        <p style={{ textAlign: "center", color: "#ff4b1f", fontWeight: 700, fontSize: 11, margin: "1px 0 0" }}>BASE OUTCOME <span style={{ color: "#9a9aa0", fontWeight: 400 }}>(Modeled)</span></p>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 14, border: "1px solid #2c2c2f", borderRadius: 8, padding: "9px 12px" }}>
      <p style={{ margin: 0, fontSize: 12.5 }}><b className="nc-acc">💡 KEY TAKEAWAY</b>&nbsp;&nbsp; Application volume is the most influential driver of approved cards, followed by approval rate, then activation rate.</p>
      <p style={{ margin: 0, color: "#9a9aa0", fontSize: 10.5, whiteSpace: "nowrap" }}>pp = percentage points &nbsp;|&nbsp; All results are Modeled &nbsp;|&nbsp; Figures may not sum due to rounding</p>
    </div>
  </Nc>;
}

/* ---------------- 22 — Proposition Architecture (pass 6 rebuild) ----------------
 * Pass 6 audit: slot rendered a Unit Economics Scorecard. Printed
 * Image 22 is "One Card. Six Value Engines." around the central card. */
const ENGINES = [
  { n: "01", name: "Daily Spend Rewards", need: "Feel good every day I spend", feat: "Tiered points on everyday categories", obj: "Drive primary card spend", metric: "Monthly active spenders" },
  { n: "02", name: "Digital Lifestyle Privileges", need: "Access the apps and content I love", feat: "Curated partner benefits and bundles", obj: "Increase engagement and retention", metric: "Benefit redemption rate" },
  { n: "03", name: "Local City Perks", need: "Enjoy more in my city", feat: "Local dining, transit, and lifestyle offers", obj: "Drive local wallet share", metric: "Local offer redemption rate" },
  { n: "04", name: "Social and Referral Rewards", need: "Share and earn with my squad", feat: "Referral rewards and group challenges", obj: "Acquire new-to-bank customers", metric: "Referral conversion rate" },
  { n: "05", name: "Credit Growth Support", need: "Build credit with confidence", feat: "Smart credit limit and usage insights", obj: "Improve credit health and loyalty", metric: "Credit active rate" },
  { n: "06", name: "Responsible Lifestyle", need: "Spend smart and stay in control", feat: "Budgeting tools and spend alerts", obj: "Reduce risk and delinquencies", metric: "On-time payment rate" },
];
export function NextCardProposition() {
  const [e, setE] = useState(0);
  const card = (en: typeof ENGINES[number], i: number) => <button key={en.n} type="button" aria-pressed={e === i} onClick={() => setE(i)} style={{ display: "block", width: "100%", textAlign: "left", background: e === i ? "#1d0d06" : "#101012", border: `1px solid ${e === i ? "#ff4b1f" : "#2c2c2f"}`, borderRadius: 8, overflow: "hidden", color: "#fff", cursor: "pointer", font: "inherit", padding: 0 }}>
    <span style={{ display: "block", background: "#e9e2d8", color: "#141416", padding: "4px 10px", fontWeight: 700, fontSize: 12.5 }}><span className="nc-acc" style={{ marginRight: 7 }}>{en.n}</span>{en.name}</span>
    {[["User need", en.need], ["Product feature", en.feat], ["Bank objective", en.obj], ["Primary metric", en.metric]].map(([k, v]) => <span key={k} style={{ display: "grid", gridTemplateColumns: "86px 1fr", gap: 6, padding: "3.5px 10px", borderTop: "1px solid #232426", fontSize: 11 }}><span style={{ color: "#9a9aa0" }}>{k}</span><span>{v}</span></span>)}
  </button>;
  return <Nc n="22" title="One Card. Six Value Engines." label="Next Card proposition architecture — interactive rebuild of Next_Card_Image_22">
    <p style={{ color: "#c9c9ce", margin: "0 0 10px" }}>A connected proposition that fits Gen Z lifestyles and drives sustainable value for the bank. <span style={{ color: "#9a9aa0" }}>Proposition Architecture · For what's next.</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 0.92fr 1fr", gap: 12, alignItems: "center" }}>
      <div style={{ display: "grid", gap: 10 }}>{ENGINES.slice(0, 3).map((en, i) => card(en, i))}</div>
      <div style={{ background: "linear-gradient(150deg,#1b1b1e,#0a0a0b)", border: "1px solid #2c2c2f", borderRadius: 14, padding: "18px 16px", minHeight: 218, position: "relative" }}>
        <p style={{ margin: 0, letterSpacing: ".3em", fontSize: 12 }}>NEXT CARD</p>
        <p style={{ margin: "26px 0 4px", fontSize: 64, fontWeight: 800, lineHeight: 1, background: "linear-gradient(120deg,#ff4b1f,#ff8a3d)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>N</p>
        <p style={{ margin: 0, color: "#9a9aa0", fontSize: 17 }}>▦</p>
        <p style={{ position: "absolute", right: 16, bottom: 12, margin: 0, letterSpacing: ".24em", fontSize: 9.5, color: "#c9c9ce" }}>FOR WHAT'S NEXT</p>
      </div>
      <div style={{ display: "grid", gap: 10 }}>{ENGINES.slice(3).map((en, i) => card(en, i + 3))}</div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 12 }} aria-live="polite">Engine {ENGINES[e].n} — <b>{ENGINES[e].name}</b>: primary metric <b className="nc-acc">{ENGINES[e].metric}</b>.</p>
    <div style={{ display: "grid", gridTemplateColumns: "0.62fr 1fr 1fr 1fr 1fr", gap: 10, marginTop: 10, border: "1px solid #57200f", borderRadius: 8, padding: "9px 12px", alignItems: "center" }}>
      <p className="nc-acc" style={{ margin: 0, fontWeight: 700, lineHeight: 1.35 }}>The Architecture in Action</p>
      {[["Understand Gen Z needs", "Deep insight into lifestyles, behaviors, and aspirations."], ["Design six value engines", "Each engine solves a need and creates measurable outcomes."], ["Connect to one card experience", "Seamless, digital-first journey across all touchpoints."], ["Drive sustainable value", "Stronger engagement, healthier customers, better bank results."]].map(([t, d], i) => <p key={t} style={{ margin: 0, fontSize: 11.5 }}><b>{t}</b><br /><span style={{ color: "#c9c9ce" }}>{d}</span>{i < 3 ? <span className="nc-acc" style={{ float: "right" }}>›</span> : null}</p>)}
    </div>
  </Nc>;
}

/* ---------------- 24 — Product Principles (pass 6 rebuild) ----------------
 * Pass 6 audit: slot rendered the ID-OCR application flow. Printed
 * Image 24 is the five product principles under the card hero. Card
 * artwork + example thumbs are text-free crops from the original. */
export function NextCardPrinciples() {
  const [paid, setPaid] = useState(false);
  const col: React.CSSProperties = { borderLeft: "1px solid #d8d2c6", padding: "0 12px" };
  const num: React.CSSProperties = { fontSize: 30, fontWeight: 800, color: "#ff4b1f", margin: 0, lineHeight: 1 };
  const ex: React.CSSProperties = { display: "flex", gap: 8, margin: "7px 0", fontSize: 11, lineHeight: 1.45 };
  const ic: React.CSSProperties = { flex: "0 0 auto", width: 30, height: 30, background: "#141416", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 };
  return <Nc n="24" title="Product Principles" light label="Next Card product principles — interactive rebuild of Next_Card_Image_24">
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 14, alignItems: "center", background: "#0a0a0b", margin: "-6px -6px 12px", padding: "12px 14px", borderRadius: 8 }}>
      <div>
        <p style={{ color: "#fff", fontSize: 21, fontWeight: 800, margin: 0, lineHeight: 1.15 }}>Five principles guide every decision we make.</p>
        <p style={{ color: "#c9c9ce", margin: "5px 0 0", fontSize: 12 }}>Designed for China's Gen Z. Built for real life. <span style={{ color: "#9a9aa0" }}>Credit card, reimagined.</span></p>
      </div>
      <img src="/projects/crops/nextcard/principles-card.jpg" alt="Next Card physical card artwork from the original slide" style={{ width: "100%", borderRadius: 8, display: "block" }} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
      <div style={{ padding: "0 12px 0 0" }}>
        <p style={num}>1.</p><p style={{ fontSize: 15.5, fontWeight: 700, margin: "3px 0" }}>Useful every week, not once a year</p>
        <p style={{ fontSize: 11.5, color: "#4a4a48", margin: 0 }}>Real, frequent value in daily life—so Next Card stays in your wallet.</p>
        <p style={{ fontSize: 9.5, letterSpacing: ".1em", color: "#8a8578", margin: "10px 0 2px" }}>EXAMPLES</p>
        <div style={ex}><span style={ic}>☕</span><span><b>Daily essentials</b><br />Coffee, transit, groceries</span></div>
        <div style={ex}><span style={ic}>🎟</span><span><b>Weekly treats</b><br />Movies, concerts, gaming</span></div>
        <div style={ex}><span style={ic}>🏷</span><span><b>Member perks</b><br />Early access, special pricing</span></div>
      </div>
      <div style={col}>
        <p style={num}>2.</p><p style={{ fontSize: 15.5, fontWeight: 700, margin: "3px 0" }}>Digital by default</p>
        <p style={{ fontSize: 11.5, color: "#4a4a48", margin: 0 }}>Seamless mobile-first experience from apply to manage.</p>
        <div style={{ border: "1.5px solid #141416", borderRadius: 16, padding: "8px 9px", marginTop: 10, fontSize: 10.5, background: "#fff" }}>
          <p style={{ margin: 0, fontWeight: 700, letterSpacing: ".06em" }}>NEXT CARD</p>
          <div style={{ background: "#141416", color: "#fff", borderRadius: 8, padding: "7px 8px", margin: "6px 0" }}>Available credit<br /><b style={{ fontSize: 15 }}>¥18,600.00</b><div style={{ height: 4, background: "#3a3a3e", borderRadius: 2, margin: "5px 0 3px" }}><div style={{ height: 4, width: "93%", background: "#ff4b1f", borderRadius: 2 }} /></div><span style={{ color: "#c9c9ce", fontSize: 9.5 }}>Total credit ¥20,000.00</span></div>
          <p style={{ display: "flex", justifyContent: "space-between", margin: "4px 0", color: "#4a4a48" }}><span>Transactions</span><span>Statement</span><span>Repay</span><span>More</span></p>
          <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "4px 0 0" }}><span>Due in 6 days<br /><b>¥2,350.00</b></span><button type="button" onClick={() => setPaid(!paid)} style={{ background: paid ? "#1d9e57" : "#ff4b1f", color: "#fff", border: "none", borderRadius: 6, padding: "3px 12px", font: "inherit", fontWeight: 700, cursor: "pointer" }}>{paid ? "Paid ✓" : "Repay"}</button></p>
        </div>
      </div>
      <div style={col}>
        <p style={num}>3.</p><p style={{ fontSize: 15.5, fontWeight: 700, margin: "3px 0" }}>Local before national</p>
        <p style={{ fontSize: 11.5, color: "#4a4a48", margin: 0 }}>Deep partnerships in cities and campuses before expanding wider.</p>
        <p style={{ fontSize: 9.5, letterSpacing: ".1em", color: "#8a8578", margin: "10px 0 2px" }}>EXAMPLES</p>
        {[["principles-city.jpg", "City favorites", "Local dining, nightlife, and lifestyle"], ["principles-campus.jpg", "Campus first", "Student events, dining, study spaces"], ["principles-lantern.jpg", "Local brands", "Support emerging local businesses"]].map(([img, t, d]) => <div key={t} style={ex}><img src={`/projects/crops/nextcard/${img}`} alt="" style={{ width: 34, height: 34, borderRadius: 6, objectFit: "cover" }} /><span><b>{t}</b><br />{d}</span></div>)}
      </div>
      <div style={col}>
        <p style={num}>4.</p><p style={{ fontSize: 15.5, fontWeight: 700, margin: "3px 0" }}>Social without encouraging irresponsible spending</p>
        <p style={{ fontSize: 11.5, color: "#4a4a48", margin: 0 }}>Share experiences and rewards, with guardrails that put well-being first.</p>
        <p style={{ fontSize: 9.5, letterSpacing: ".1em", color: "#8a8578", margin: "10px 0 2px" }}>EXAMPLES</p>
        <div style={ex}><span style={ic}>👥</span><span><b>Shared moments</b><br />Split bills, group treats, shared rewards</span></div>
        <div style={ex}><span style={ic}>🛡</span><span><b>Smart guardrails</b><br />Budget alerts, spend limits, cool-off reminders</span></div>
        <div style={ex}><span style={ic}>📊</span><span><b>Positive rewards</b><br />Earn for on-time payments and healthy habits</span></div>
      </div>
      <div style={col}>
        <p style={num}>5.</p><p style={{ fontSize: 15.5, fontWeight: 700, margin: "3px 0" }}>Credit growth through transparent behavior</p>
        <p style={{ fontSize: 11.5, color: "#4a4a48", margin: 0 }}>Clear actions. Visible progress. Better habits. Stronger future.</p>
        <p style={{ fontSize: 9.5, letterSpacing: ".1em", color: "#8a8578", margin: "10px 0 2px" }}>EXAMPLES</p>
        <div style={{ border: "1px solid #d8d2c6", borderRadius: 8, padding: "8px 9px", background: "#fff" }}>
          <p style={{ margin: "0 0 5px", fontWeight: 700, fontSize: 11.5 }}>Your progress</p>
          <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
            <svg viewBox="0 0 44 44" style={{ width: 52, height: 52 }} aria-hidden="true"><circle cx="22" cy="22" r="18" fill="none" stroke="#e8e2d6" strokeWidth="4.5" /><circle cx="22" cy="22" r="18" fill="none" stroke="#ff4b1f" strokeWidth="4.5" strokeDasharray={`${2 * Math.PI * 18 * (720 / 850)} ${2 * Math.PI * 18}`} transform="rotate(-90 22 22)" strokeLinecap="round" /><text x="22" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#141416">720</text><text x="22" y="31" textAnchor="middle" fontSize="5.4" fill="#8a8578">out of 850</text></svg>
            <p style={{ margin: 0, fontSize: 10, lineHeight: 1.6 }}>On-time payments <b>Excellent</b><br />Credit usage <b>Good</b><br />Account age <b>Good</b><br />Credit mix <b>Building</b></p>
          </div>
          <p style={{ margin: "6px 0 0", fontSize: 10.5, borderTop: "1px solid #eee9df", paddingTop: 5 }}>▤ See what helps improve <span style={{ float: "right" }}>›</span></p>
        </div>
      </div>
    </div>
  </Nc>;
}

/* ---------------- 34 — Low-Fidelity Wireframe Wall (pass 6 rebuild) ----------------
 * Pass 6 audit: slot rendered the light Iteration Board. Printed
 * Image 34 is the dark end-to-end journey wireframe wall: left rail
 * (legend, principles, modeled KPIs), nine wireframe phones, decision
 * diamonds and the Key Journey Decisions box. */
const WF_PHONES: Array<{ t: string; note: string; body: React.ReactNode }> = [
  { t: "LANDING PAGE", note: "Hero value prop + primary CTA.", body: <><b style={{ fontSize: 12.5 }}>Next is your move.</b><br />A credit card built for how you live.<br />✓ No annual fee<br />✓ Transparent<br />✓ Built for Gen Z</> },
  { t: "BENEFIT DETAIL", note: "Benefit storytelling builds trust and intent.", body: <><b>Why Next Card?</b><br />★ Earn more — Get rewards that fit your lifestyle.<br />▣ Use anywhere — Online and offline, everyday.<br />☑ Build credit — Grow your score with smart tools.</> },
  { t: "APPLICATION", note: "Minimal fields. Progress indicator on top.", body: <><b>Let's get started</b><br />It takes about 3 minutes.<br />Full name / ID number / Phone number / City (fields)<br />☐ I agree to the terms</> },
  { t: "APPROVAL", note: "Real-time progress reduces anxiety.", body: <><b>Almost there</b><br />We're reviewing your information.<br /><span style={{ fontSize: 17, fontWeight: 800 }}>80%</span><br />Usually done in under 2 minutes.</> },
  { t: "DASHBOARD", note: "At-a-glance financial control center.", body: <><b>Hi, Alex</b><br />Available Credit<br /><b style={{ fontSize: 12.5 }}>¥ 12,000.00</b><br />Total Credit ¥ 15,000<br />Spent ¥ 1,230.00 · Due ¥ 860.00 · Due Date May 20</> },
  { t: "REWARDS", note: "Points balance + easy redemption.", body: <><b>My Rewards</b><br />Points Balance <b>2,560</b><br />¥20 Coffee Voucher 2,000 pts<br />¥50 Movie Voucher 4,000 pts<br />¥30 Ride Voucher 2,500 pts</> },
  { t: "LOCAL PERKS", note: "Nearby perks drive everyday value.", body: <><b>Local Perks</b> · 📍 Shenzhen<br />% Arabica 10% off 200m<br />HEYTEA Buy 1 Get 1 350m<br />POP MART 5% off 500m</> },
  { t: "REFERRAL", note: "Social currency + shared benefits.", body: <><b>Invite Friends</b><br />You get ¥30 · They get ¥30<br />Your Referral Code<br /><b>NEXTPALS</b></> },
  { t: "CREDIT BUILDER", note: "Actionable steps improve credit.", body: <><b>Build Your Credit</b><br /><span style={{ fontSize: 15, fontWeight: 800 }}>720</span> Good<br />Next Goal 750<br />☑ Pay on time 100%<br />○ Keep low usage 30%<br />○ Use longer 6 months</> },
];
const WF_CTA = ["Get Started", "Apply Now", "Continue", "", "", "See All Rewards", "View Map", "Invite Now", "View Tips"];
export function NextCardWireframeWall() {
  const [p, setP] = useState(4);
  const rail: React.CSSProperties = { border: "1px solid #2c2c2f", borderRadius: 8, padding: "8px 10px", marginBottom: 9, fontSize: 10.8, lineHeight: 1.55 };
  return <Nc n="34" title="Low-Fidelity Wireframe Wall" label="Next Card low-fidelity wireframe wall — interactive rebuild of Next_Card_Image_34">
    <div style={{ display: "grid", gridTemplateColumns: "168px 1fr", gap: 14 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 10.8, color: "#c9c9ce" }}><span className="nc-acc" style={{ fontWeight: 700 }}>NEXT CARD</span><br />CHINA GEN Z CREDIT-CARD CONCEPT<br /><span style={{ color: "#9a9aa0" }}>Journey-first. Mobile-first. Simple, transparent, empowering.</span></p>
        <div style={rail}><b className="nc-acc">JOURNEY LEGEND</b><br />→ Primary flow<br />┄ Alternative flow<br />◆ Decision point<br />◎ Key interaction</div>
        <div style={rail}><b className="nc-acc">DESIGN PRINCIPLES</b><br /><b>Clarity over complexity</b> — One primary action per screen.<br /><b>Progressive disclosure</b> — Show what matters, when it matters.<br /><b>Trust by design</b> — Transparent terms, real-time feedback.<br /><b>Gen Z expression</b> — Personal, social, and rewarding.</div>
        <div style={{ ...rail, borderColor: "#57200f" }}><b className="nc-acc">KPIs (Modeled)</b>{[["Activation Rate", "28.4%"], ["Application Completion Rate", "61.2%"], ["Approval Rate", "72.0%"], ["90-Day Retention", "46.8%"], ["Monthly Active Rate", "38.7%"]].map(([k, v]) => <p key={k} style={{ display: "flex", justifyContent: "space-between", margin: "2px 0" }}><span>• {k}</span><b>{v}</b></p>)}<span style={{ color: "#9a9aa0" }}>Modeled metrics for concept evaluation.</span></div>
      </div>
      <div>
        <p className="nc-acc" style={{ margin: "0 0 6px", fontWeight: 700, letterSpacing: ".08em", fontSize: 11.5 }}>END-TO-END USER JOURNEY</p>
        {/* The print runs all nine phones in one row at full slide width;
            on the fixed 980px canvas that leaves ~82px per phone and the
            microcopy wraps word-by-word, so the wall renders 5 + 4 — the
            same nine phones, notes and order as printed. */}
        {[WF_PHONES.slice(0, 5), WF_PHONES.slice(5)].map((rowPhones, ri) => <div key={ri} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: ri === 0 ? 8 : 0 }}>
          {rowPhones.map((ph, j) => { const i = ri * 5 + j; return <div key={ph.t}>
            <p style={{ textAlign: "center", margin: "0 0 4px", fontSize: 8.8, color: "#c9c9ce" }}><span style={{ display: "inline-flex", width: 15, height: 15, borderRadius: "50%", background: "#fff", color: "#141416", fontWeight: 800, alignItems: "center", justifyContent: "center", fontSize: 9.5, marginBottom: 2 }}>{i + 1}</span><br />{ph.t}</p>
            <button type="button" aria-pressed={p === i} onClick={() => setP(i)} style={{ width: "100%", background: "#f2f0eb", color: "#33322f", border: p === i ? "2px solid #ff4b1f" : "2px solid transparent", borderRadius: 10, padding: "6px 7px 7px", fontSize: 9.3, lineHeight: 1.55, textAlign: "left", cursor: "pointer", font: "inherit", minHeight: 132 }}>
              {ph.body}
              {WF_CTA[i] ? <span style={{ display: "block", background: "#ff4b1f", color: "#fff", borderRadius: 5, textAlign: "center", fontWeight: 700, padding: "2px 0", marginTop: 5, fontSize: 9.3 }}>{WF_CTA[i]}</span> : null}
            </button>
            <p style={{ fontSize: 8.6, color: "#9a9aa0", margin: "4px 0 0", lineHeight: 1.45 }}>{ph.note}</p>
          </div>; })}
        </div>)}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.35fr", gap: 10, marginTop: 12, alignItems: "start" }}>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}><span style={{ color: "#ff4b1f" }}>◆</span> <b>Information complete?</b><br /><span style={{ color: "#9a9aa0" }}>NO → back to Landing · YES ↓</span></p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}><span style={{ color: "#ff4b1f" }}>◆</span> <b>Approved?</b><br /><span style={{ color: "#9a9aa0" }}>NO → <b style={{ color: "#fff" }}>Not Approved</b> — We're unable to approve your application now. [Learn More] · Reapply Later<br />YES ↓</span></p>
          <p style={{ margin: 0, fontSize: 10.8, lineHeight: 1.6 }}><span style={{ color: "#ff4b1f" }}>◎</span> <b>First-time user?</b><br /><span style={{ color: "#9a9aa0" }}>Take a quick tour to learn key features. [Start Tour] · Skip</span></p>
          <div style={{ border: "1px solid #57200f", borderRadius: 8, padding: "8px 10px", fontSize: 10.6, lineHeight: 1.55 }}>
            <b className="nc-acc">KEY JOURNEY DECISIONS</b><br />
            <span style={{ color: "#ff4b1f" }}>◆</span> <b>Information complete?</b> If users drop fields, guide them back with inline prompts and save progress automatically.<br />
            <span style={{ color: "#ff4b1f" }}>◆</span> <b>Approved?</b> If not approved, transparently explain reason and offer credit builder path to requalify.<br />
            <span style={{ color: "#ff4b1f" }}>◎</span> <b>First-time user?</b> Offer guided tour to accelerate activation and discovery.
          </div>
        </div>
        <p style={{ margin: "9px 0 0", fontSize: 11.5 }} aria-live="polite">Step {p + 1} of 9 — <b>{WF_PHONES[p].t}</b>: {WF_PHONES[p].note}</p>
      </div>
    </div>
  </Nc>;
}

export function nextCardChapterFor(file: string) {
  if (file.startsWith("Next_Card_Image_02")) return <NextCardAnswer />;
  if (file.startsWith("Next_Card_Image_03")) return <NextCardRoleTimeline />;
  if (file.startsWith("Next_Card_Image_04")) return <NextCardChallenge />;
  if (file.startsWith("Next_Card_Image_05")) return <NextCardSuccess />;
  if (file.startsWith("Next_Card_Image_06")) return <NextCardOriginalSubmission />;
  if (file.startsWith("Next_Card_Image_07")) return <NextCardWhereToLaunch />;
  if (file.startsWith("Next_Card_Image_08")) return <NextCardWhatToBuild />;
  if (file.startsWith("Next_Card_Image_09")) return <NextCardAcquire />;
  if (file.startsWith("Next_Card_Image_10")) return <NextCardSourceMap />;
  if (file.startsWith("Next_Card_Image_11")) return <NextCardFindings />;
  if (file.startsWith("Next_Card_Image_12")) return <NextCardAssumptions />;
  if (file.startsWith("Next_Card_Image_13")) return <NextCardCityEvaluation />;
  if (file.startsWith("Next_Card_Image_14")) return <NextCardOpportunityMap />;
  if (file.startsWith("Next_Card_Image_15")) return <NextCardWhyCitiesWin />;
  if (file.startsWith("Next_Card_Image_16")) return <NextCardTamFunnel />;
  if (file.startsWith("Next_Card_Image_17")) return <NextCardConversionEquation />;
  if (file.startsWith("Next_Card_Image_18")) return <NextCardSensitivity />;
  if (file.startsWith("Next_Card_Image_22")) return <NextCardProposition />;
  if (file.startsWith("Next_Card_Image_23")) return <NextCardValueTriangleChapter />;
  if (file.startsWith("Next_Card_Image_24")) return <NextCardPrinciples />;
  if (file.startsWith("Next_Card_Image_34")) return <NextCardWireframeWall />;
  if (file.startsWith("Next_Card_Image_19")) return <NextCardSegments />;
  if (file.startsWith("Next_Card_Image_20")) return <NextCardJobsPains />;
  if (file.startsWith("Next_Card_Image_21")) return <NextCardJourney />;
  if (file.startsWith("Next_Card_Image_25")) return <NextCardEligibility />;
  if (file.startsWith("Next_Card_Image_26")) return <NextCardEcosystem />;
  if (file.startsWith("Next_Card_Image_27")) return <NextCardIA />;
  if (file.startsWith("Next_Card_Image_28")) return <NextCardAcquisitionFlow />;
  if (file.startsWith("Next_Card_Image_29")) return <NextCardRetentionLoop />;
  if (file.startsWith("Next_Card_Image_30")) return <NextCardGrowthModel />;
  if (file.startsWith("Next_Card_Image_31")) return <NextCardChannelMap />;
  if (file.startsWith("Next_Card_Image_32")) return <NextCardTimeline32 />;
  if (file.startsWith("Next_Card_Image_33")) return <NextCardCampaignSystem />;
  if (file.startsWith("Next_Card_Image_35")) return <NextCardIterationBoard />;
  if (file.startsWith("Next_Card_Image_36")) return <NextCardFrictionShowcase />;
  if (file.startsWith("Next_Card_Image_37")) return <NextCardInspiration />;
  if (file.startsWith("Next_Card_Image_38")) return <NextCardBrandSystem />;
  if (file.startsWith("Next_Card_Image_40")) return <NextCardComponentSystemShowcase />;
  if (file.startsWith("Next_Card_Image_41")) return <NextCardCampaignShowcase />;
  if (file.startsWith("Next_Card_Image_42")) return <NextCardBenefitsShowcase />;
  if (file.startsWith("Next_Card_Image_43")) return <NextCardApplicationShowcase />;
  if (file.startsWith("Next_Card_Image_44")) return <NextCardApprovalShowcase />;
  if (file.startsWith("Next_Card_Image_45")) return <NextCardDashboardShowcase />;
  if (file.startsWith("Next_Card_Image_46")) return <NextCardRewardsShowcase />;
  if (file.startsWith("Next_Card_Image_47")) return <NextCardPerksShowcase />;
  if (file.startsWith("Next_Card_Image_48")) return <NextCardCreditBuilderShowcase />;
  if (file.startsWith("Next_Card_Image_49")) return <NextCardSquadShowcase />;
  if (file.startsWith("Next_Card_Image_50")) return <NextCardMissionsShowcase />;
  if (file.startsWith("Next_Card_Image_51")) return <NextCardStateMatrixShowcase />;
  return null;
}
