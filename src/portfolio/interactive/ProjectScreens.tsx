import { useState } from "react";
import "./kit.css";

/**
 * Bespoke interactive rebuilds per project (V2).
 * Content is transcribed from the printed screens where they were
 * read directly (marked TRANSCRIBED in BUILD_NOTES), or built strictly
 * from the case-study data file's titles / captions / formulas /
 * metrics (marked DATA-DERIVED). No metrics are invented.
 */

function Head({ n, kicker, brand }: { n: string; kicker: string; brand: string }) {
  return <div className="ix-head"><span><b>{n}</b>&nbsp;&nbsp;|&nbsp;&nbsp;{kicker}</span><span className="ix-brand">{brand}</span></div>;
}
function Foot({ left }: { left: string }) {
  return <div className="ix-foot"><span>{left}</span><span>Interactive — real components, not an image</span></div>;
}

/* ============================ NEXT CARD ============================ */

const ENGINES = [
  { n: "01", name: "Daily Spend Rewards", need: "Feel good every day I spend", feature: "Tiered points on everyday categories", objective: "Drive primary card spend", metric: "Monthly active spenders" },
  { n: "02", name: "Digital Lifestyle Privileges", need: "Access the apps and content I love", feature: "Curated partner benefits and bundles", objective: "Increase engagement and retention", metric: "Benefit redemption rate" },
  { n: "03", name: "Local City Perks", need: "Enjoy more in my city", feature: "Local dining, transit, and lifestyle offers", objective: "Drive local wallet share", metric: "Local offer redemption rate" },
  { n: "04", name: "Social and Referral Rewards", need: "Share and earn with my squad", feature: "Referral rewards and group challenges", objective: "Acquire new-to-bank customers", metric: "Referral conversion rate" },
  { n: "05", name: "Credit Growth Support", need: "Build credit with confidence", feature: "Smart credit limit and usage insights", objective: "Improve credit health and loyalty", metric: "Credit active rate" },
  { n: "06", name: "Responsible Lifestyle", need: "Spend smart and stay in control", feature: "Budgeting tools and spend alerts", objective: "Reduce risk and delinquencies", metric: "On-time payment rate" },
];

export function NextCardValueEngines() {
  const [active, setActive] = useState(0);
  const e = ENGINES[active];
  return <div className="ix" role="region" aria-label="Next Card — One Card, Six Value Engines (interactive)" style={{ background: "#0a0a0b", color: "#f5f5f5" }}>
    <Head n="22" kicker="Proposition Architecture" brand="NEXT CARD" />
    <div className="ix-title"><h3 style={{ color: "#fff" }}>One Card. Six Value Engines.<span style={{ color: "#a1a1aa" }}>A connected proposition that fits Gen Z lifestyles and drives sustainable value for the bank. Select an engine.</span></h3></div>
    <div className="ix-body">
      <div className="ix-grid2" style={{ gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>
        <div style={{ display: "grid", gap: 8 }}>
          {ENGINES.slice(0, 3).map((x, i) => <button key={x.n} type="button" className="ix-row" aria-pressed={active === i} onClick={() => setActive(i)}><span style={{ color: "#e4572e" }} className="ix-mono">{x.n}</span> {x.name}</button>)}
        </div>
        <div aria-hidden="true" style={{ width: 168, height: 104, background: "#111", border: "1px solid #2a2b2e", borderRadius: 10, display: "grid", placeItems: "center", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}><div className="ix-mono" style={{ fontSize: 9, letterSpacing: ".3em", color: "#d6d6d6" }}>NEXT CARD</div><div style={{ fontSize: 34, fontWeight: 700, color: "#e4572e" }}>N</div><div className="ix-mono" style={{ fontSize: 7, letterSpacing: ".25em", color: "#8e8e96" }}>FOR WHAT’S NEXT</div></div>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          {ENGINES.slice(3).map((x, i) => <button key={x.n} type="button" className="ix-row" aria-pressed={active === i + 3} onClick={() => setActive(i + 3)}><span style={{ color: "#e4572e" }} className="ix-mono">{x.n}</span> {x.name}</button>)}
        </div>
      </div>
      <div className="ix-panel" style={{ marginTop: 10 }} aria-live="polite">
        <h4><span style={{ color: "#e4572e" }} className="ix-mono">{e.n}</span> {e.name}</h4>
        <dl className="ix-kv">
          <div style={{ display: "contents" }}><dt>User need</dt><dd style={{ fontFamily: "inherit" }}>{e.need}</dd></div>
          <div style={{ display: "contents" }}><dt>Product feature</dt><dd style={{ fontFamily: "inherit" }}>{e.feature}</dd></div>
          <div style={{ display: "contents" }}><dt>Bank objective</dt><dd style={{ fontFamily: "inherit" }}>{e.objective}</dd></div>
          <div style={{ display: "contents" }}><dt>Primary metric</dt><dd style={{ fontFamily: "inherit" }}>{e.metric}</dd></div>
        </dl>
      </div>
      <p style={{ fontSize: 11, color: "#a1a1aa", margin: "10px 0 2px" }}>The Architecture in Action — Understand Gen Z needs → Design six value engines → Connect to one card experience → Drive sustainable value.</p>
    </div>
    <Foot left="Next Card — For what’s next" />
  </div>;
}

const TRIANGLE = [
  { party: "Customer", items: ["Relevant benefits", "Simple digital onboarding", "Financial confidence", "Social and local utility"] },
  { party: "Bank", items: ["New customer acquisition", "Interchange and engagement", "Responsible credit growth", "Cross-selling potential"] },
  { party: "Merchant", items: ["Qualified traffic", "Campaign attribution", "Repeat visits", "City-based audience targeting"] },
];

export function NextCardValueTriangle() {
  const [active, setActive] = useState(0);
  return <div className="ix" role="region" aria-label="Next Card — Value Triangle (interactive)" style={{ background: "#0a0a0b", color: "#f5f5f5" }}>
    <Head n="23" kicker="Value Triangle" brand="NEXT CARD" />
    <div className="ix-title"><h3 style={{ color: "#fff" }}>Customer, Bank and Merchant <span style={{ color: "#e4572e" }}>Value Triangle</span></h3>
      <p style={{ color: "#a1a1aa" }}>Next Card creates a positive value exchange between customers, banks and merchants — driving growth, engagement and sustainable outcomes for all. Select a party.</p></div>
    <div className="ix-body">
      <div className="ix-tabs" role="tablist" aria-label="Parties">
        {TRIANGLE.map((t, i) => <button key={t.party} type="button" role="tab" className="ix-tab" aria-selected={active === i} onClick={() => setActive(i)}>{t.party}</button>)}
      </div>
      <div className="ix-panel" aria-live="polite">
        <ul className="ix-list">{TRIANGLE[active].items.map((item) => <li key={item} className="ix-row" style={{ cursor: "default" }}>{item}</li>)}</ul>
        <p style={{ fontSize: 11, color: "#a1a1aa", margin: "10px 0 0" }}>Shared sustainable value — stronger relationships, healthier growth, better cities.</p>
      </div>
    </div>
    <Foot left="Next Card — Credit made relevant" />
  </div>;
}

const NC_STEPS = [
  { name: "ID OCR & Biometric Liveness", line: "Step 1 — identity captured and verified live." },
  { name: "Eligibility & Risk Assessment", line: "Eligibility checked against the risk model before any promise is made." },
  { name: "Income & Employment Input", line: "Step 2 — income and employment details for the step-up limit model." },
  { name: "Instant Virtual Card Activation", line: "Step 3 — the virtual card is issued instantly; spending starts before the physical card ships." },
  { name: "Physical Card Shipping & Customization", line: "The physical card follows, with customization chosen in-app." },
  { name: "PIN Setup & Security Preferences", line: "PIN and security preferences set by the user, not by mail." },
  { name: "First Transaction Onboarding Tour", line: "A guided first transaction closes the 60-second application journey." },
];

export function NextCardApplicationFlow() {
  const [step, setStep] = useState(0);
  return <div className="ix" role="region" aria-label="Next Card — Application Flow, 60-Second Approval (interactive)">
    <Head n="04" kicker="Frictionless Onboarding & Verification" brand="NEXT CARD" />
    <div className="ix-title"><h3>Application Flow.<span>60-second approval, step by step — advance through the flow.</span></h3></div>
    <div className="ix-body">
      <div className="ix-panel">
        <div className="ix-stepper" role="group" aria-label="Application steps">
          {NC_STEPS.map((s, i) => <button key={s.name} type="button" className="ix-step" aria-pressed={step === i} onClick={() => setStep(i)}><i>{i + 1}</i>{s.name.split(" & ")[0]}</button>)}
        </div>
        <div aria-live="polite">
          <h4>{NC_STEPS[step].name}</h4>
          <p className="ix-sub2" style={{ fontSize: 12 }}>{NC_STEPS[step].line}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="ix-btn ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>
            <button type="button" className="ix-btn" disabled={step === NC_STEPS.length - 1} onClick={() => setStep(step + 1)}>{step === NC_STEPS.length - 1 ? "Flow complete" : "Continue →"}</button>
          </div>
          <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96", marginTop: 10 }}>Step {step + 1} of {NC_STEPS.length} · Designed approval target: 60 seconds · Activation rate target 75%</p>
        </div>
      </div>
    </div>
    <Foot left="Mastercard China Advisors Case Competition 2024" />
  </div>;
}

const NC_CATEGORIES = ["Dining", "Entertainment", "Travel", "Self-improvement"];

export function NextCardRewardEngine() {
  const [cat, setCat] = useState(0);
  return <div className="ix" role="region" aria-label="Next Card — Reward Engine Logic (interactive)">
    <Head n="03" kicker="Product Architecture & Card Proposition" brand="NEXT CARD" />
    <div className="ix-title"><h3>Reward Engine Logic.<span>Tiered points on everyday categories — the categories come from the spending research map: dining, entertainment, travel, and self-improvement.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <p className="ix-label">Spend category</p>
      <div className="ix-stepper">{NC_CATEGORIES.map((c, i) => <button key={c} type="button" className="ix-step" aria-pressed={cat === i} onClick={() => setCat(i)}>{c}</button>)}</div>
      <div aria-live="polite" style={{ display: "grid", gap: 6, fontSize: 12 }}>
        <p style={{ margin: 0 }}>1 · Spend in <b>{NC_CATEGORIES[cat]}</b> is categorized automatically (Transaction Details &amp; Categorization).</p>
        <p style={{ margin: 0 }}>2 · The category rule applies <b>tiered points</b> — the Daily Spend Rewards engine.</p>
        <p style={{ margin: 0 }}>3 · Points and perks surface in the <b>Benefits &amp; Rewards Hub</b> and the <b>City Perks Marketplace</b>.</p>
        <p style={{ margin: 0, color: "#a1a1aa" }}>Primary metric for the engine: monthly active spenders. Point rates are set by the issuing bank’s program rules and are not claimed here.</p>
      </div>
    </div></div>
    <Foot left="Next Card — Reward engine" />
  </div>;
}

/* ============================ AURIONX ============================ */

const AX_STATES = [
  { n: "1", name: "Normal playback", line: "Watching continues without interruption.", tv: "32:14 ━━━━━━●────────── 84:07" },
  { n: "2", name: "AurionX activation", line: "Hold the AurionX button to speak.", tv: "◉ AurionX — listening" },
  { n: "3", name: "Live transcription", line: "Your words appear on screen in real time.", tv: "“Find the scene where the hero confronts his brother in the kitchen.”" },
  { n: "4", name: "Interpreted request", line: "AurionX confirms understanding with confidence.", tv: "Interpreted request — Find the scene where the hero confronts his brother in the kitchen. · Confidence: High" },
  { n: "5", name: "Three scene candidates", line: "AurionX surfaces the top matches with confidence.", tv: "Top scene candidates — select one below" },
  { n: "6", name: "Selected scene and timeline jump", line: "AurionX jumps to the scene and resumes playback.", tv: "Jumping to scene — Kitchen confrontation · 43:02 ━━━━━━━━━●───── 84:07" },
];
const AX_CANDIDATES = [
  { name: "Kitchen confrontation", dur: "0:43", conf: "Confidence 91%" },
  { name: "Brotherly argument", dur: "1:17", conf: "Confidence 71%" },
  { name: "Tense exchange", dur: "0:58", conf: "Confidence —" },
];

export function AurionXSceneRecall() {
  const [state, setState] = useState(0);
  const [picked, setPicked] = useState(0);
  return <div className="ix" role="region" aria-label="AurionX — Scene Recall interaction sequence (interactive)" style={{ background: "#060607", color: "#f5f5f5" }}>
    <Head n="21" kicker="Scene Recall — High-Fidelity Interaction Sequence" brand="AURIONX" />
    <div className="ix-title"><h3 style={{ color: "#fff" }}>One continuous moment. Six distinct states.<span style={{ color: "#a1a1aa" }}>Step through the sequence, then pick a scene candidate.</span></h3></div>
    <div className="ix-body">
      <div className="ix-stepper" role="group" aria-label="Sequence states">
        {AX_STATES.map((s, i) => <button key={s.n} type="button" className="ix-step" aria-pressed={state === i} onClick={() => setState(i)}><i>{s.n}</i>{s.name}</button>)}
      </div>
      <div className="ix-tv" aria-live="polite">
        <p className="ix-mono" style={{ fontSize: 12, color: "#e8e8ec", margin: 0 }}>{state === 5 ? `Jumping to scene — ${AX_CANDIDATES[picked].name} · 43:02 ━━━━━━━━━●───── 84:07` : AX_STATES[state].tv}</p>
        {state === 4 && <div style={{ display: "grid", gap: 6, marginTop: 12 }}>
          {AX_CANDIDATES.map((c, i) => <button key={c.name} type="button" className="ix-row" aria-pressed={picked === i} onClick={() => { setPicked(i); setState(5); }}>
            <b>{c.name}</b> <span style={{ float: "right" }} className="ix-mono">{c.dur}</span><br /><span style={{ color: "#8fb7ff", fontSize: 10 }}>{c.conf}</span>
          </button>)}
        </div>}
      </div>
      <p style={{ fontSize: 12, color: "#c9c9ce", margin: "10px 0 0" }} aria-live="polite"><b>{AX_STATES[state].name}.</b> {AX_STATES[state].line}</p>
    </div>
    <Foot left="AurionX — Sony TV · 10-foot UI" />
  </div>;
}

const AX_HL_STEPS = [
  { title: "Choose highlight type", q: "What would you like to create?", options: ["Five-Minute Cut — A smart highlight in about five minutes.", "Scene Selection — Pick the scenes you want.", "Full Recap — A complete recap of the entire title."], voice: "“Create a five-minute cut”" },
  { title: "Set the duration", q: "How long would you like your highlight?", options: ["3 minutes — Quick highlight", "5 minutes — Recommended", "10 minutes — More to explore"], voice: "“Make it five minutes”" },
  { title: "Choose the emphasis", q: "What should we focus on?", options: ["Action — High energy moments", "Story — Plot and narrative", "Characters — Character moments", "Balanced — A mix of all elements"], voice: "“Focus on action”" },
  { title: "Set spoiler protection", q: "How much should we reveal?", options: ["Strict — Avoid major plot reveals", "Moderate — Some story context ok", "Open — No restrictions"], voice: "“Generate preview”" },
];

export function AurionXHighlightConfig() {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<number[]>([0, 1, 3, 0]);
  const [done, setDone] = useState(false);
  const s = AX_HL_STEPS[step];
  return <div className="ix" role="region" aria-label="AurionX — Highlight Configuration wizard (interactive)" style={{ background: "#060607", color: "#f5f5f5" }}>
    <Head n="26" kicker="5-Minute Intelligent Cut — Highlight Configuration" brand="AURIONX" />
    <div className="ix-title"><h3 style={{ color: "#fff" }}>Create a personalized highlight.<span style={{ color: "#a1a1aa" }}>Focus moves with directional input — Use Up, Down, Left, Right to navigate · Press Select to confirm · Press Back to return. Voice shortcuts available at any time.</span></h3></div>
    <div className="ix-body"><div className="ix-tv" style={{ aspectRatio: "auto", minHeight: 260, justifyContent: "flex-start" }}>
      {!done ? <>
        <p className="ix-mono" style={{ fontSize: 10, color: "#8fb7ff", margin: "0 0 4px" }}>Step {step + 1} of 4</p>
        <h4 style={{ margin: "0 0 2px", fontSize: 18 }}>{s.title}</h4>
        <p style={{ margin: "0 0 12px", color: "#a1a1aa", fontSize: 12 }}>{s.q}</p>
        <div style={{ display: "grid", gap: 7 }}>
          {s.options.map((o, i) => <button key={o} type="button" className="ix-row" aria-pressed={choices[step] === i} onClick={() => { const next = [...choices]; next[step] = i; setChoices(next); }}>{o}</button>)}
        </div>
        <p className="ix-mono" style={{ fontSize: 10, color: "#8e8e96", marginTop: 12 }}>🎙 Voice shortcut: {s.voice}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
          <button type="button" className="ix-btn ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>
          {step < 3
            ? <button type="button" className="ix-btn" onClick={() => setStep(step + 1)}>Select →</button>
            : <button type="button" className="ix-btn" onClick={() => setDone(true)}>Generate preview</button>}
        </div>
      </> : <div aria-live="polite">
        <h4 style={{ margin: "0 0 8px", fontSize: 18 }}>Preview ready</h4>
        <ul className="ix-list">{AX_HL_STEPS.map((x, i) => <li key={x.title} className="ix-row" style={{ cursor: "default" }}><span className="ix-mono" style={{ fontSize: 9, color: "#8fb7ff" }}>{x.title.toUpperCase()}</span><br />{x.options[choices[i]]}</li>)}</ul>
        <button type="button" className="ix-btn ghost" style={{ marginTop: 10 }} onClick={() => { setDone(false); setStep(0); }}>Start over</button>
      </div>}
    </div></div>
    <Foot left="AurionX — 5-Minute Cut" />
  </div>;
}

export function AurionXGlobalVoice() {
  const [mode, setMode] = useState<"Subtitles" | "AI Voice Dubbing">("AI Voice Dubbing");
  const [sync, setSync] = useState(80);
  return <div className="ix" role="region" aria-label="AurionX — Global Voice setup (interactive)" style={{ background: "#060607", color: "#f5f5f5" }}>
    <Head n="32" kicker="Global Voice Dubbing — Language and Voice Setup" brand="AURIONX" />
    <div className="ix-title"><h3 style={{ color: "#fff" }}>Language &amp; Voice Setup.<span style={{ color: "#a1a1aa" }}>Dialect &amp; voice sync controls — subtitles vs. AI voice dubbing.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <p className="ix-label">Mode</p>
      <div className="ix-stepper" role="group" aria-label="Voice mode">
        {(["Subtitles", "AI Voice Dubbing"] as const).map((m) => <button key={m} type="button" className="ix-step" aria-pressed={mode === m} onClick={() => setMode(m)}>{m}</button>)}
      </div>
      <div className="ix-grid2">
        <div><label className="ix-label" htmlFor="ax-lang">Target language</label>
          <select id="ax-lang" className="ix-select"><option>English</option><option>中文 (Chinese)</option><option>日本語 (Japanese)</option><option>Español</option><option>Français</option><option>Deutsch</option></select></div>
        <div><label className="ix-label" htmlFor="ax-dialect">Dialect</label>
          <select id="ax-dialect" className="ix-select"><option>Neutral</option><option>Regional — formal</option><option>Regional — conversational</option></select></div>
      </div>
      <div style={{ marginTop: 12 }}>
        <label className="ix-label" htmlFor="ax-sync">Voice sync — lip &amp; timing alignment: {sync}%</label>
        <input id="ax-sync" type="range" min={0} max={100} value={sync} onChange={(e) => setSync(Number(e.target.value))} className="ix-range" />
      </div>
      <p style={{ fontSize: 12, color: "#c9c9ce" }} aria-live="polite">{mode === "Subtitles" ? "Before: dialogue is read as subtitles in the target language." : "After: dialogue is re-voiced in the target language with sync applied — the Global Voice speech-to-speech pipeline."}</p>
    </div></div>
    <Foot left="AurionX — Global Voice" />
  </div>;
}

/* ============================ DEEPVISE ============================ */

export function DeepViseDashboard() {
  const [level, setLevel] = useState("Warning");
  return <div className="ix" role="region" aria-label="DeepVise — Executive Platform Dashboard (interactive)">
    <Head n="01" kicker="Platform Overview" brand="DEEPVISE" />
    <div className="ix-title"><h3>Executive Platform Dashboard.<span>Dual-domain monitoring: equipment health feeding credit review, on the FATE federated infrastructure.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-stats">
        <div className="ix-stat"><span>Machine</span><b>P-01-042</b></div>
        <div className="ix-stat"><span>Health Score</span><b>72 / 100</b></div>
        <div className="ix-stat"><span>Alert Level</span><b>{level}</b></div>
        <div className="ix-stat"><span>Infrastructure</span><b>FATE</b></div>
      </div>
      <p className="ix-label">Alert thresholds — Notice → Warning → Critical</p>
      <div className="ix-stepper" role="group" aria-label="Alert level">
        {["Notice", "Warning", "Critical"].map((l) => <button key={l} type="button" className="ix-step" aria-pressed={level === l} onClick={() => setLevel(l)}>{l}</button>)}
      </div>
      <p style={{ fontSize: 12, margin: "4px 0" }} aria-live="polite">Vibration anomaly alert on P-01-042 at <b>{level}</b> level. Recommendation: credit-review — health telemetry feeds the lender port’s dynamic credit adjustment.</p>
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96" }}>Context: ¥33.0T manufacturing GDP · ¥24.23T industrial long-term loans (+15.1% YoY)</p>
    </div></div>
    <Foot left="DeepVise — Smart Manufacturing × FinTech" />
  </div>;
}

export function DeepVisePortSelector() {
  const [port, setPort] = useState<"enterprise" | "lender">("enterprise");
  return <div className="ix" role="region" aria-label="DeepVise — Dual Financial Port Selector (interactive)">
    <Head n="04" kicker="Dual-Port Product UI" brand="DEEPVISE" />
    <div className="ix-title"><h3>deepvise.online<span>Two audiences, one platform — choose a port.</span></h3></div>
    <div className="ix-body">
      <div className="ix-grid2">
        <button type="button" className="ix-panel" aria-pressed={port === "enterprise"} onClick={() => setPort("enterprise")} style={{ textAlign: "left", cursor: "pointer", outline: port === "enterprise" ? "2px solid #4c8bff" : "none" }}>
          <h4>Enterprise — Need Loan</h4><p className="ix-sub2">Telemetry → health → RUL inner loop.</p>
          <p style={{ fontSize: 12, margin: 0 }}>Machine P-01-042 · Health Score 72/100 (Warning) · vibration anomaly alert · credit-review recommendation.</p>
        </button>
        <button type="button" className="ix-panel" aria-pressed={port === "lender"} onClick={() => setPort("lender")} style={{ textAlign: "left", cursor: "pointer", outline: port === "lender" ? "2px solid #4c8bff" : "none" }}>
          <h4>Institution — Manage Assets</h4><p className="ix-sub2">Aggregation → credit → ABS outer loop.</p>
          <p style={{ fontSize: 12, margin: 0 }}>Portfolio ¥85M · avg rate 4.85% · 12 active enterprises · risk breakdown by equipment health.</p>
        </button>
      </div>
      <p style={{ fontSize: 12, margin: "10px 0 0" }} aria-live="polite">{port === "enterprise"
        ? "Enterprise port: delayed warnings, data silos and repair costs are answered with automated telemetry ingest and the fault diagnostics & alert engine."
        : "Lender port: static data and no post-loan tracking are answered with real-time telemetry-driven credit scoring and dynamic credit adjustment."}</p>
    </div>
    <Foot left="DeepVise — Dual-Port UI" />
  </div>;
}

/* ============================ ALLWEB3 ============================ */

export function Allweb3FeeCalculator() {
  const [pool, setPool] = useState(10000);
  const [rate, setRate] = useState(6);
  const [complexity, setComplexity] = useState(1.0);
  const [loyalty, setLoyalty] = useState(5);
  const [oracle, setOracle] = useState(60);
  const baseFee = Math.round((pool * rate) / 100);
  const adjusted = Math.round(baseFee * complexity);
  const discount = Math.round((adjusted * loyalty) / 100);
  const deposit = pool + adjusted - discount + oracle;
  const money = (n: number) => `$${n.toLocaleString("en-US")}`;
  return <div className="ix" role="region" aria-label="ALLWEB3 — Deterministic Fee Calculator and Escrow Preview (interactive)">
    <Head n="02" kicker="Creator & Project Portals · CMP-2026-042" brand="ALLWEB3" />
    <div className="ix-title"><h3>Deterministic Fee Calculator.<span>Deposit = Creator Pool + (Adjusted Service Fee − Loyalty Discount) + Total Oracle Fee. Defaults reproduce the printed example exactly: $10,630.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-grid2">
        <div><label className="ix-label" htmlFor="aw-pool">Creator Pool (USD)</label><input id="aw-pool" className="ix-input" type="number" value={pool} onChange={(e) => setPool(Number(e.target.value) || 0)} /></div>
        <div><label className="ix-label" htmlFor="aw-oracle">Total Oracle Fee (USD)</label><input id="aw-oracle" className="ix-input" type="number" value={oracle} onChange={(e) => setOracle(Number(e.target.value) || 0)} /></div>
        <div><label className="ix-label" htmlFor="aw-rate">Service fee tier: {rate}% (tiers 10% → 4.5%)</label><input id="aw-rate" type="range" min={4.5} max={10} step={0.5} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="ix-range" /></div>
        <div><label className="ix-label" htmlFor="aw-cx">Complexity: {complexity.toFixed(1)}x (0.8x → 1.5x)</label><input id="aw-cx" type="range" min={0.8} max={1.5} step={0.1} value={complexity} onChange={(e) => setComplexity(Number(e.target.value))} className="ix-range" /></div>
        <div><label className="ix-label" htmlFor="aw-loy">Loyalty discount: {loyalty}% of fee (5% → 15%)</label><input id="aw-loy" type="range" min={5} max={15} step={1} value={loyalty} onChange={(e) => setLoyalty(Number(e.target.value))} className="ix-range" /></div>
      </div>
      <dl className="ix-kv" style={{ marginTop: 12 }} aria-live="polite">
        <div style={{ display: "contents" }}><dt>Base Fee</dt><dd>{money(baseFee)}</dd></div>
        <div style={{ display: "contents" }}><dt>Adjusted Service Fee</dt><dd>{money(adjusted)}</dd></div>
        <div style={{ display: "contents" }}><dt>Loyalty Discount</dt><dd>−{money(discount)}</dd></div>
        <div style={{ display: "contents" }}><dt>Escrow Deposit</dt><dd style={{ fontSize: 13, color: "#7dd87d" }}>{money(deposit)}</dd></div>
      </dl>
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96", marginTop: 10 }}>Working code: github.com/ToniAdreal/escrow-state-machine-ts — deterministic fee calculator + escrow state machine.</p>
    </div></div>
    <Foot left="ALLWEB3 — Base / Arbitrum" />
  </div>;
}

export function Allweb3Reputation() {
  const [score, setScore] = useState(845);
  const [pro, setPro] = useState(true);
  const tier = score >= 800 ? "S" : score >= 600 ? "A" : score >= 400 ? "B" : "C";
  return <div className="ix" role="region" aria-label="ALLWEB3 — Creator Reputation Scorecard (interactive)">
    <Head n="02" kicker="Creator & Project Portals" brand="ALLWEB3" />
    <div className="ix-title"><h3>Reputation Scorecard (CVPI).<span>Score = Σ (Behavior_Type_i × Weight_i × e^−λΔt) · Scale 0–1,000 · Tier C &lt;400, B 400–599, A 600–799, S 800+.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-stats">
        <div className="ix-stat"><span>Reputation</span><b>{score} (Tier {tier})</b></div>
        <div className="ix-stat"><span>Completion</span><b>98%</b></div>
        <div className="ix-stat"><span>Past ROI</span><b>3.2x</b></div>
        <div className="ix-stat"><span>Match Boost</span><b>{pro ? "+10% (Pro)" : "—"}</b></div>
      </div>
      <label className="ix-label" htmlFor="aw-score">CVPI score: {score}</label>
      <input id="aw-score" type="range" min={0} max={1000} step={5} value={score} onChange={(e) => setScore(Number(e.target.value))} className="ix-range" />
      <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, marginTop: 8 }}>
        <input type="checkbox" checked={pro} onChange={(e) => setPro(e.target.checked)} /> Pro plan — +10% match boost
      </label>
      <p style={{ fontSize: 12, color: "#c9c9ce" }}>Specialization NFTs and minted SPCs anchor the score on-chain — an immutable creator resume, matched with AI match badges (&gt;70%) in campaign discovery.</p>
    </div></div>
    <Foot left="ALLWEB3 — Reputation 0–1,000" />
  </div>;
}

export function Allweb3Settlement() {
  const [gross, setGross] = useState(10000);
  const [plan, setPlan] = useState<"Standard" | "Pro">("Pro");
  const planRate = plan === "Pro" ? 5 : 10;
  const credit = gross - (gross * planRate) / 100 - gross * 0.02;
  const money = (n: number) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  return <div className="ix" role="region" aria-label="ALLWEB3 — Escrow Release and Settlement calculator (interactive)">
    <Head n="03" kicker="Verification & Settlement" brand="ALLWEB3" />
    <div className="ix-title"><h3>Automated Escrow Release &amp; Settlement.<span>Credit = Gross Award − (Gross × Plan Rate) − (Gross × 2% referral). Plan rate: 10% Standard, 5% Pro ($49/mo). Gas reconciled only on manual withdrawal.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-grid2">
        <div><label className="ix-label" htmlFor="aw-gross">Gross Award (USD)</label><input id="aw-gross" className="ix-input" type="number" value={gross} onChange={(e) => setGross(Number(e.target.value) || 0)} /></div>
        <div><label className="ix-label" htmlFor="aw-plan">Plan</label>
          <select id="aw-plan" className="ix-select" value={plan} onChange={(e) => setPlan(e.target.value as "Standard" | "Pro")}><option>Standard</option><option>Pro</option></select></div>
      </div>
      <dl className="ix-kv" style={{ marginTop: 12 }} aria-live="polite">
        <div style={{ display: "contents" }}><dt>Gross Award</dt><dd>{money(gross)}</dd></div>
        <div style={{ display: "contents" }}><dt>Plan Fee ({planRate}%)</dt><dd>−{money((gross * planRate) / 100)}</dd></div>
        <div style={{ display: "contents" }}><dt>Referral (2%)</dt><dd>−{money(gross * 0.02)}</dd></div>
        <div style={{ display: "contents" }}><dt>Creator Credit</dt><dd style={{ fontSize: 13, color: "#7dd87d" }}>{money(credit)}</dd></div>
      </dl>
      <p style={{ fontSize: 12, color: "#c9c9ce" }}>On KPI validation the contract also mints an ERC-721 SPC with campaign ID, metrics and timestamp — cryptographic proof of work.</p>
    </div></div>
    <Foot left="ALLWEB3 — Settlement" />
  </div>;
}

export function Allweb3Milestones() {
  const stages = ["Draft", "Distribution", "30-Day KPI"];
  const [done, setDone] = useState(1);
  return <div className="ix" role="region" aria-label="ALLWEB3 — Task Workspace and Milestone Tracker (interactive)">
    <Head n="02" kicker="Creator & Project Portals" brand="ALLWEB3" />
    <div className="ix-title"><h3>Task Workspace &amp; Milestone Tracker.<span>Milestones (Draft → Distribution → 30-Day KPI), progress bar, escrow lock.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-stepper" role="group" aria-label="Milestones">
        {stages.map((s, i) => <button key={s} type="button" className="ix-step" aria-pressed={done > i} onClick={() => setDone(i + 1)}><i>{done > i ? "✓" : i + 1}</i>{s}</button>)}
      </div>
      <div style={{ background: "#2a2b2e", height: 8, marginBottom: 10 }} role="progressbar" aria-valuenow={Math.round((done / 3) * 100)} aria-valuemin={0} aria-valuemax={100}>
        <div style={{ background: "#7dd87d", height: "100%", width: `${(done / 3) * 100}%`, transition: "width .3s" }} />
      </div>
      <p style={{ fontSize: 12, margin: 0 }} aria-live="polite">{done >= 3 ? "All milestones complete — evidence submitted with content URLs, wallet-signed tracking links and IPFS metadata hashes; escrow ready for release." : `Milestone ${done} of 3 complete. Escrow remains locked until the 30-Day KPI milestone verifies.`}</p>
    </div></div>
    <Foot left="ALLWEB3 — Milestones" />
  </div>;
}

/* ============================ BREWOPS (Budweiser) ============================ */

const BREW_ROLES = [
  { role: "Executive", focus: "Executive Dashboard Preview — overall yield and global distribution status front and center." },
  { role: "Brewmaster", focus: "Brewmaster Workflow Analysis — pain points in quality control and yield tracking; opportunities for AI intervention." },
  { role: "Logistics Coordinator", focus: "Logistics Coordinator Needs — dispatch and routing challenges, real-time fleet tracking and bottleneck alerts." },
  { role: "Floor Manager", focus: "Mobile Experience Highlights — critical alerts and simplified data views optimized for on-the-go consumption." },
];
const BREW_MODULES = ["Control Tower", "Demand Forecasting", "Supply Allocation", "Fleet & Routing", "Warehouse Inventory", "Predictive Maintenance", "Cold Chain", "Batch Quality", "Sustainability"];

export function BrewOpsControlTower() {
  const [role, setRole] = useState(0);
  const [severity, setSeverity] = useState<number[]>([2, 1, 0, 1, 2, 0, 1, 0, 1]);
  const sevName = ["Low", "Watch", "High"];
  const sevColor = ["#2f5230", "#8a6d1d", "#8a2f24"];
  return <div className="ix" role="region" aria-label="BrewOps — Global Control Tower (interactive)">
    <Head n="04" kicker="Control Tower & Risk Dashboards" brand="BREWOPS" />
    <div className="ix-title"><h3>Global Control Tower.<span>The central hub for monitoring worldwide brewing operations — live status for facilities and transit routes. Dashboards adapt to the authenticated role.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <p className="ix-label">Role-Based Access — 6 enterprise roles served</p>
      <div className="ix-tabs" role="tablist" aria-label="Roles">
        {BREW_ROLES.map((r, i) => <button key={r.role} type="button" role="tab" className="ix-tab" aria-selected={role === i} onClick={() => setRole(i)}>{r.role}</button>)}
      </div>
      <p style={{ fontSize: 12, margin: "0 0 12px" }} aria-live="polite">{BREW_ROLES[role].focus}</p>
      <p className="ix-label">Risk Heatmap — select a cell to cycle severity (pattern demo of the printed heatmap screen)</p>
      <div className="ix-grid3" role="group" aria-label="Risk heatmap">
        {BREW_MODULES.map((m, i) => <button key={m} type="button" className="ix-row" style={{ background: sevColor[severity[i]], color: "#fff", borderColor: "transparent" }}
          onClick={() => { const next = [...severity]; next[i] = (next[i] + 1) % 3; setSeverity(next); }}>
          {m}<br /><span className="ix-mono" style={{ fontSize: 9 }}>{sevName[severity[i]].toUpperCase()}</span>
        </button>)}
      </div>
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96", marginTop: 10 }}>9 operational areas · 6 chart types · WCAG 2.1 AA</p>
    </div></div>
    <Foot left="BrewOps Intelligence — Budweiser" />
  </div>;
}

export function BrewOpsScenario() {
  const [demand, setDemand] = useState(10);
  const [allocation, setAllocation] = useState(50);
  const coverage = Math.max(0, Math.min(100, allocation + demand / 2));
  return <div className="ix" role="region" aria-label="BrewOps — Scenario Planning Sandbox (interactive)">
    <Head n="05" kicker="Demand, Supply & Scenario Planning" brand="BREWOPS" />
    <div className="ix-title"><h3>Scenario Planning Sandbox.<span>A simulation surface next to AI demand forecasting and the supply allocation matrix. Move the planning inputs — the indices below are computed from your inputs only.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <label className="ix-label" htmlFor="bw-demand">Demand change: {demand > 0 ? "+" : ""}{demand}%</label>
      <input id="bw-demand" type="range" min={-30} max={30} value={demand} onChange={(e) => setDemand(Number(e.target.value))} className="ix-range" />
      <label className="ix-label" htmlFor="bw-alloc" style={{ marginTop: 10 }}>Supply allocation to this scenario: {allocation}%</label>
      <input id="bw-alloc" type="range" min={0} max={100} value={allocation} onChange={(e) => setAllocation(Number(e.target.value))} className="ix-range" />
      <p className="ix-label" style={{ marginTop: 12 }}>Scenario coverage index (from your inputs): {Math.round(coverage)} / 100</p>
      <div style={{ background: "#2a2b2e", height: 10 }}><div style={{ background: "#4c8bff", height: "100%", width: `${coverage}%`, transition: "width .2s" }} /></div>
      <p style={{ fontSize: 12, color: "#c9c9ce" }}>Pairs with the Production Schedule Gantt and Cost Variance Analysis screens in this chapter.</p>
    </div></div>
    <Foot left="BrewOps — Scenario planning" />
  </div>;
}

export function BrewOpsCopilot() {
  const suggestions = [
    { action: "Review raw-material shortage risks", detail: "From the Real-Time Alert Feed: risks such as raw material shortages are aggregated and categorized in the notification center." },
    { action: "Re-route deliveries affected by extreme weather", detail: "From the Real-Time Alert Feed: extreme weather impacting delivery routes is surfaced alongside fleet tracking." },
    { action: "Open the facility drill-down", detail: "Facility Status Drill-Down: a single brewing facility, its active batches and equipment status." },
  ];
  const [open, setOpen] = useState(0);
  return <div className="ix" role="region" aria-label="BrewOps — AI Copilot (interactive)">
    <Head n="07" kicker="Quality, Insights & AI Copilot" brand="BREWOPS" />
    <div className="ix-title"><h3>BrewOps AI Copilot.<span>Proactive action suggestions on top of batch quality assurance and automated insight reports. Select a suggestion.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <ul className="ix-list">{suggestions.map((s, i) => <li key={s.action}>
        <button type="button" className="ix-row" aria-pressed={open === i} onClick={() => setOpen(i)}>{s.action}</button>
      </li>)}</ul>
      <p style={{ fontSize: 12, margin: "10px 0 0" }} aria-live="polite">{suggestions[open].detail}</p>
    </div></div>
    <Foot left="BrewOps — AI Copilot" />
  </div>;
}

/* ============================ DATAQUEST (CyberOrigin) ============================ */

const DQ_STATES = [
  { name: "Discovery", line: "User Flow: Task Discovery & Acceptance — contributors find tasks matched to their tier." },
  { name: "Acceptance", line: "Accepting a task locks its brief, pre-flight context and quality bar." },
  { name: "Guided Capture", line: "User Flow: Guided Data Capture — real-time guided capture with AR guidance in the camera interface." },
  { name: "Review", line: "User Flow: The Review Process — reviewers scrub, annotate and construct feedback." },
  { name: "Complete", line: "Approved captures enter the AI training pipeline; earnings and reputation update in the wallet." },
  { name: "Disputed", line: "Dispute Resolution Center — moderation and trust & safety handle exceptions." },
];

export function DataQuestLifecycle() {
  const [state, setState] = useState(0);
  return <div className="ix" role="region" aria-label="DataQuest — Task Lifecycle state machine (interactive)">
    <Head n="03" kicker="Information Architecture & Task Flows" brand="DATAQUEST" />
    <div className="ix-title"><h3>State Machine: Task Lifecycle.<span>The same lifecycle implemented in code — select a state. Working code: github.com/ToniAdreal/dataquest-task-lifecycle.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-stepper" role="group" aria-label="Lifecycle states">
        {DQ_STATES.map((s, i) => <button key={s.name} type="button" className="ix-step" aria-pressed={state === i} onClick={() => setState(i)}><i>{i + 1}</i>{s.name}</button>)}
      </div>
      <p style={{ fontSize: 12.5, margin: 0 }} aria-live="polite"><b>{DQ_STATES[state].name}.</b> {DQ_STATES[state].line}</p>
    </div></div>
    <Foot left="DataQuest (CyberOrigin) — Task lifecycle" />
  </div>;
}

const DQ_TASKS = [
  { type: "Kitchen", title: "Kitchen Interaction Tasks", map: "Job Map: Kitchen Interaction Tasks" },
  { type: "Walking", title: "Locomotion & Navigation", map: "Job Map: Locomotion & Navigation" },
  { type: "Device", title: "Device & Appliance Usage", map: "Job Map: Device & Appliance Usage" },
];

export function DataQuestTaskFeed() {
  const [accepted, setAccepted] = useState<number | null>(null);
  return <div className="ix" role="region" aria-label="DataQuest — Mobile dashboard and task feed (interactive)">
    <Head n="04" kicker="Mobile Capture Experience" brand="DATAQUEST" />
    <div className="ix-title"><h3>Dashboard &amp; Task Feed.<span>Task types: Kitchen / Walking / Device — accept a task to start the capture flow.</span></h3></div>
    <div className="ix-body"><div className="ix-phone">
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96", margin: "0 0 8px" }}>DATAQUEST · IOS + WEB DASHBOARD</p>
      {DQ_TASKS.map((t, i) => <div key={t.title} style={{ border: "1px solid #2a2b2e", padding: 10, marginBottom: 8, color: "#f5f5f5" }}>
        <span className="ix-chip">{t.type}</span>
        <p style={{ margin: "7px 0 2px", fontSize: 12.5, fontWeight: 600 }}>{t.title}</p>
        <p style={{ margin: "0 0 8px", fontSize: 10, color: "#a1a1aa" }}>{t.map}</p>
        {accepted === i
          ? <p className="ix-mono" style={{ fontSize: 10, color: "#7dd87d", margin: 0 }}>ACCEPTED → PRE-FLIGHT CONTEXT SETUP → GUIDED CAPTURE</p>
          : <button type="button" className="ix-btn" style={{ width: "100%", padding: 6 }} onClick={() => setAccepted(i)}>Accept Task</button>}
      </div>)}
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96" }}>Earnings &amp; reputation land in the Earnings &amp; Reputation Wallet.</p>
    </div></div>
    <Foot left="DataQuest — Mobile capture" />
  </div>;
}

export function DataQuestReviewer() {
  const [pos, setPos] = useState(35);
  const [verdict, setVerdict] = useState<string | null>(null);
  return <div className="ix" role="region" aria-label="DataQuest — Reviewer Workspace (interactive)">
    <Head n="06" kicker="Reviewer & Marketplace Operations" brand="DATAQUEST" />
    <div className="ix-title"><h3>Reviewer Workspace.<span>Video annotation &amp; scrubbing tools with a feedback construction interface — scrub the capture, then decide.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div style={{ background: "#000", border: "1px solid #2a2b2e", padding: 14, marginBottom: 10 }}>
        <p className="ix-mono" style={{ fontSize: 11, margin: 0, color: "#e8e8ec" }}>Capture playback — frame at {pos}%</p>
        <p style={{ fontSize: 11, color: "#a1a1aa", margin: "6px 0 0" }}>{pos < 33 ? "Segment: task setup and pre-flight context." : pos < 66 ? "Segment: guided capture in progress." : "Segment: post-capture review & trim."}</p>
      </div>
      <label className="ix-label" htmlFor="dq-scrub">Scrub timeline: {pos}%</label>
      <input id="dq-scrub" type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} className="ix-range" />
      <label className="ix-label" htmlFor="dq-feedback" style={{ marginTop: 10 }}>Feedback</label>
      <input id="dq-feedback" className="ix-input" placeholder="Construct feedback for the contributor…" />
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button type="button" className="ix-btn" onClick={() => setVerdict("Approved — capture enters the AI training pipeline.")}>Approve</button>
        <button type="button" className="ix-btn ghost" onClick={() => setVerdict("Changes requested — feedback sent to the contributor.")}>Request Changes</button>
      </div>
      {verdict && <p className="ix-status" style={{ marginTop: 10, marginBottom: 0 }} role="status">{verdict}</p>}
    </div></div>
    <Foot left="DataQuest — Reviewer operations" />
  </div>;
}

/* ============================ MENGNIU ============================ */

const MN_SIGNALS = [
  { name: "Cow Health Signals", line: "Cow Health Signal Flow — biometrics tracked at individual cow level." },
  { name: "Barn Environment", line: "Barn Environmental Sensors — barn-wide IoT mesh for climate and conditions." },
  { name: "Milk Yield", line: "Milk Yield Tracking Integration — production analytics per cow and per barn." },
  { name: "Data Ingestion", line: "Data Ingestion Architecture — sensor data flowing into the command center." },
];

export function MengniuCommandCenter() {
  const [active, setActive] = useState(0);
  return <div className="ix" role="region" aria-label="Mengniu — Command Center Dashboard (interactive)">
    <Head n="05" kicker="High-Fidelity UI & System Architecture" brand="MENGNIU" />
    <div className="ix-title"><h3>Command Center Dashboard.<span>4 signal categories, monitored at individual cow level across a barn-wide IoT mesh. Select a signal domain.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-stats">
        <div className="ix-stat"><span>Sensor Domains</span><b>4 Signal Categories</b></div>
        <div className="ix-stat"><span>Monitoring</span><b>Individual Cow Level</b></div>
        <div className="ix-stat"><span>Environment</span><b>Barn-wide IoT Mesh</b></div>
        <div className="ix-stat"><span>Scope</span><b>Prototype → Integration</b></div>
      </div>
      <div className="ix-stepper" role="group" aria-label="Signal domains">
        {MN_SIGNALS.map((s, i) => <button key={s.name} type="button" className="ix-step" aria-pressed={active === i} onClick={() => setActive(i)}>{s.name}</button>)}
      </div>
      <p style={{ fontSize: 12.5, margin: 0 }} aria-live="polite">{MN_SIGNALS[active].line}</p>
    </div></div>
    <Foot left="Mengniu — Digital Twin" />
  </div>;
}

export function MengniuAlertCenter() {
  const initial = [
    { id: 1, source: "Cow Health Signals", text: "Health signal needs review — Comprehensive Cow Diagnostics", sev: "Warning" },
    { id: 2, source: "Barn Environment", text: "Environmental sensor drift in one barn zone — Barn Environmental Sensors", sev: "Notice" },
    { id: 3, source: "Milk Yield", text: "Yield change flagged for follow-up — Milk Yield Tracking Integration", sev: "Notice" },
  ];
  const [alerts, setAlerts] = useState(initial.map((a) => ({ ...a, state: "Open" })));
  const act = (id: number, state: string) => setAlerts((prev) => prev.map((a) => a.id === id ? { ...a, state } : a));
  return <div className="ix" role="region" aria-label="Mengniu — Intelligent Alert Center (interactive)">
    <Head n="05" kicker="High-Fidelity UI & System Architecture" brand="MENGNIU" />
    <div className="ix-title"><h3>Intelligent Alert Center.<span>Alert triage designed against the alert-fatigue findings in the research chapter — acknowledge or resolve each alert. (Alert rows are interface samples built from the case study’s signal domains.)</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <ul className="ix-list">{alerts.map((a) => <li key={a.id} className="ix-row" style={{ cursor: "default" }}>
        <span className="ix-chip">{a.sev}</span> <span className="ix-chip">{a.source}</span>
        <p style={{ margin: "6px 0", fontSize: 12 }}>{a.text}</p>
        {a.state === "Open"
          ? <span style={{ display: "flex", gap: 6 }}><button type="button" className="ix-btn" style={{ padding: "4px 10px" }} onClick={() => act(a.id, "Acknowledged")}>Acknowledge</button><button type="button" className="ix-btn ghost" style={{ padding: "4px 10px" }} onClick={() => act(a.id, "Resolved")}>Resolve</button></span>
          : <span className="ix-mono" style={{ fontSize: 10, color: "#7dd87d" }}>{a.state.toUpperCase()}</span>}
      </li>)}</ul>
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96", marginTop: 10 }}>{alerts.filter((a) => a.state === "Open").length} OPEN · {alerts.filter((a) => a.state !== "Open").length} HANDLED</p>
    </div></div>
    <Foot left="Mengniu — Alert triage" />
  </div>;
}

export function MengniuBarnTwin() {
  const zones = MN_SIGNALS.map((s) => s.name);
  const [zone, setZone] = useState(0);
  return <div className="ix" role="region" aria-label="Mengniu — Digital Twin Barn Interface (interactive)">
    <Head n="05" kicker="High-Fidelity UI & System Architecture" brand="MENGNIU" />
    <div className="ix-title"><h3>Digital Twin Barn Interface.<span>Spatial view of the barn, layered by signal domain — select a layer.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-grid2" role="group" aria-label="Barn signal layers">
        {zones.map((z, i) => <button key={z} type="button" className="ix-row" aria-pressed={zone === i} onClick={() => setZone(i)} style={{ minHeight: 74 }}>
          <span className="ix-mono" style={{ fontSize: 9, color: "#8e8e96" }}>LAYER {i + 1}</span><br /><b>{z}</b>
        </button>)}
      </div>
      <p style={{ fontSize: 12.5, margin: "10px 0 0" }} aria-live="polite">{MN_SIGNALS[zone].line} The individual cow profile and barn view wireframes in this case study resolve into this twin.</p>
    </div></div>
    <Foot left="Mengniu — Digital twin barn" />
  </div>;
}
