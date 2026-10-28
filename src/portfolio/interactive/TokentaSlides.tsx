import { useMemo, useState } from "react";
import "./tokenta-slides.css";

/**
 * Bespoke rebuilds of Tokenta deck slides, transcribed from the actual
 * image files in public/projects/ (Tokenta_06–15, Tokenta_21–30).
 * NOTE: the data-file titles/captions for these slots describe different
 * screens (see BUILD_NOTES §6) — everything below is built from the
 * images themselves: layout, headings, names and numbers as printed.
 */

const FOOT = ["Verifiable by design", "Decentralized attestation", "Enforceable deals", "Secure escrow", "Auditable by default"];

function Head({ n, kicker }: { n: string; kicker?: string }) {
  return <div className="tks-head"><span><b>{n}</b>{kicker ? <>&nbsp;&nbsp;|&nbsp;&nbsp;{kicker}</> : null}</span><span className="tks-brand">⌂ TOKENTA</span></div>;
}
function Foot() {
  return <div className="tks-foot">{FOOT.map((f) => <span key={f}>{f}</span>)}<span>tokenta.com</span></div>;
}

/* ---------------- Tokenta_06 — Thesis evolution (dark) ---------------- */

const THESIS_STAGES = [
  {
    n: 1, title: "API marketplace", sub: "Discover and connect.",
    bullets: ["Centralized catalog", "No verifiable guarantees", "Limited trust and liquidity"],
    tags: ["Discovery", "Connectivity", "Basic Listings"],
    detail: "As printed: a centralized marketplace table — four REST APIs (FinData, IDLabs, RiskCore, OpenBank), all Free.",
  },
  {
    n: 2, title: "Tokenized access", sub: "Gated by tokens.",
    bullets: ["Token-gated access", "Economic alignment", "Still limited without proof of quality"],
    tags: ["Tokenized", "Gated Access", "Payment Rail"],
    detail: "As printed: Credit Score API at 18,500 TKA, token balance 42,000 TKA, Purchase Access / Manage actions.",
  },
  {
    n: 3, title: "Evidence-first exchange", sub: "Verifiable, escrowed, and settled.",
    bullets: ["Verification — Proves origin, quality & integrity.", "Escrow — Secure execution with clear states.", "Settlement — Finality and on-chain audit.", "Reputation — Sustained trust and liquidity."],
    tags: ["Chosen Direction"],
    detail: "As printed: Buyer (NeuralWorks, Reputation 92) → Verification (pass) → Escrow (18,500 TKA, Locked) → Settlement (on-chain) → Reputation ↑, over an immutable audit trail.",
  },
];

export function TokentaThesisEvolution() {
  const [active, setActive] = useState(2);
  const [bought, setBought] = useState(false);
  const s = THESIS_STAGES[active];
  return <div className="tks tks--dark" role="region" aria-label="Tokenta thesis evolution — interactive rebuild of Tokenta_06">
    <Head n="06." />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <div><h3>Thesis evolution</h3>
      <p className="tks-lede" style={{ margin: 0 }}>From marketplace to evidence-first exchange.</p></div>
      <p style={{ maxWidth: 360, fontSize: 12, lineHeight: 1.5, color: "#b9b9be", margin: "18px 0 0" }}>Our thesis evolved in three steps. The evidence-first exchange is the end-state—where verification, escrow, settlement, and reputation make liquidity credible.</p>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr auto 0.88fr auto 1.35fr", alignItems: "stretch", marginTop: 14 }}>
      <button type="button" className={`tks-card${active === 0 ? " is-on" : ""}`} aria-pressed={active === 0} onClick={() => setActive(0)}>
        <span className="tks-num tks-num--light">1</span> <b>API marketplace</b><br /><span style={{ color: "#b9b9be" }}>Discover and connect.</span>
        <table className="tks-table tks-table--micro" style={{ marginTop: 8, fontSize: 10.5, whiteSpace: "nowrap" }}><thead><tr><th>Asset</th><th>Type</th><th>Creator</th><th>Price</th></tr></thead>
          <tbody>{[["Credit Score API", "FinData"], ["KYC Verification", "IDLabs"], ["Fraud Signals", "RiskCore"], ["Bank Statement", "OpenBank"]].map(([a, c]) => <tr key={a}><td>{a}</td><td>REST</td><td>{c}</td><td>Free</td></tr>)}</tbody></table>
        <ul style={{ margin: "10px 0 8px", paddingLeft: 16, color: "#c9c9ce", fontSize: 12.5 }}>{THESIS_STAGES[0].bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        <p style={{ margin: 0 }}>{THESIS_STAGES[0].tags.map((t) => <span key={t} className="tks-tag">{t}</span>)}</p>
      </button>
      <span className="tks-arrow">→</span>
      <button type="button" className={`tks-card${active === 1 ? " is-on" : ""}`} aria-pressed={active === 1} onClick={() => setActive(1)}>
        <span className="tks-num tks-num--light">2</span> <b>Tokenized access</b><br /><span style={{ color: "#b9b9be" }}>Gated by tokens.</span>
        <p style={{ margin: "10px 0 2px" }}>Asset<br /><b>Credit Score API</b> <span className="tks-tag">REST</span></p>
        <p style={{ margin: "6px 0" }}>Access Price<br /><b style={{ fontSize: 16 }}>18,500 TKA</b></p>
        <p style={{ margin: "6px 0" }}>Access Token — TKA · Balance <b>42,000 TKA</b></p>
        <span className="tks-btn" role="button" aria-pressed={bought} onClick={(e) => { e.stopPropagation(); setBought((b) => !b); }}>{bought ? "Access Purchased ✓" : "Purchase Access"}</span>
        <ul style={{ margin: "10px 0 8px", paddingLeft: 16, color: "#c9c9ce", fontSize: 12.5 }}>{THESIS_STAGES[1].bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        <p style={{ margin: 0 }}>{THESIS_STAGES[1].tags.map((t) => <span key={t} className="tks-tag">{t}</span>)}</p>
      </button>
      <span className="tks-arrow">→</span>
      <button type="button" className={`tks-card${active === 2 ? " is-on" : ""}`} aria-pressed={active === 2} onClick={() => setActive(2)}>
        <span className="tks-num" style={{ background: "#fff", color: "#111" }}>3</span> <b>Evidence-first exchange</b> <span className="tks-chip" style={{ float: "right" }}>✓ Chosen Direction</span><br />
        <span style={{ color: "#b9b9be" }}>Verifiable, escrowed, and settled.</span>
        <div className="tks-flow" style={{ marginTop: 8, flexWrap: "nowrap", gap: 4 }}>
          {["Buyer — NeuralWorks · Rep 92", "Verification — Pass ✓", "Escrow — 18,500 TKA · Locked", "Settlement — On-chain", "Reputation — ↑ On-chain"].map((t, i, arr) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow" style={{ fontSize: 13 }}>→</span>}<span className="tks-node" style={{ fontSize: 9.5, padding: 6, flex: "1 1 0" }}>{t}</span></span>)}
        </div>
        <p style={{ margin: "8px 0 0", border: "1px dashed #3a3b3f", borderRadius: 6, padding: "5px 8px", textAlign: "center" }}>Immutable audit trail</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 14px", marginTop: 10, fontSize: 11.5, color: "#c9c9ce" }}>{THESIS_STAGES[2].bullets.map((b) => <span key={b}>{b}</span>)}</div>
        <p style={{ margin: "10px 0 0", borderTop: "1px solid #2c2d30", paddingTop: 8, fontSize: 13 }}><b>Stronger together:</b> verification, escrow, settlement, and reputation make liquidity credible and networks compounding.</p>
      </button>
    </div>
    <div className="tks-detail" aria-live="polite">
      <b>{s.n}. {s.title}</b> — {s.detail}
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_07 — Product principles ---------------- */

const PRINCIPLES = [
  { n: 1, title: "Proof before liquidity", diagram: "CLAIM → VERIFIED (shield ✓) → LIQUIDITY", body: "No asset is listed or traded until cryptographic evidence is verified and attestations are in place." },
  { n: 2, title: "One wallet and one reputation layer", diagram: "WALLET → Verified ID · Attestations · History", body: "A single identity across the network with portable reputation built from verifiable actions and attestations." },
  { n: 3, title: "Machine-verifiable states", diagram: "Claim Submitted → Proofs Verified ✓ → Attestations Recorded ✓ → State Locked 🔒", body: "Every step is encoded, signed, and verifiable—enabling automation, composability, and auditability.", flow: ["Claim Submitted", "Proofs Verified", "Attestations Recorded", "State Locked"] },
  { n: 4, title: "Institutional legibility", diagram: "Policy · Evidence · Audit Trail", body: "Clear policies, immutable logs, and exportable records that meet the standards of regulated institutions." },
  { n: 5, title: "Non-custodial settlement", diagram: "BUYER ↔ Escrow (lock) ↔ SELLER → Settled On-Chain ✓", body: "Funds and assets settle on-chain via escrow. Tokenta never custodies—users always control their assets." },
];

export function TokentaProductPrinciples() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const box: React.CSSProperties = { border: "1px solid #55565a", borderRadius: 6, padding: "5px 4px", textAlign: "center", fontSize: 9.3, letterSpacing: ".04em", lineHeight: 1.35 };
  const diagrams: React.ReactNode[] = [
    <div key="d1">
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ ...box, flex: 1 }}>📄 {"{…}"}<br />CLAIM</span><span aria-hidden="true">→</span>
        <span style={{ ...box, flex: 1 }}>🛡 ✓<br />VERIFIED</span>
      </div>
      <p style={{ textAlign: "center", margin: "1px 0", color: "#9a9aa0" }}>↓</p>
      <div style={{ ...box, width: "52%", margin: "0 auto" }}>💧<br />LIQUIDITY</div>
    </div>,
    <div key="d2">
      <div style={{ ...box, width: "52%", margin: "0 auto" }}>💳<br />WALLET</div>
      <p style={{ textAlign: "center", margin: "1px 0", color: "#9a9aa0" }}>↓&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;↓</p>
      <div style={{ display: "flex", gap: 3 }}>
        <span style={{ ...box, flex: "1 1 0", minWidth: 0, fontSize: 7.4, letterSpacing: 0, padding: "4px 1px" }}>🛡<br />VERIFIED ID</span>
        <span style={{ ...box, flex: "1 1 0", minWidth: 0, fontSize: 7.4, letterSpacing: 0, padding: "4px 1px" }}>🎖<br />ATTESTATIONS</span>
        <span style={{ ...box, flex: "1 1 0", minWidth: 0, fontSize: 7.4, letterSpacing: 0, padding: "4px 1px" }}>📊<br />HISTORY</span>
      </div>
    </div>,
    <div key="d3">
      {PRINCIPLES[2].flow!.map((f, i) => <div key={f}>
        {i > 0 && <p style={{ textAlign: "center", margin: "1px 0", color: "#9a9aa0" }}>↓</p>}
        <div style={{ ...box, display: "flex", justifyContent: "space-between", padding: "5px 8px", borderColor: i <= step ? "#fff" : "#55565a", boxShadow: i <= step ? "0 0 0 1px #fff" : undefined }}>{f.toUpperCase()}<span>{i === 3 ? "🔒" : i > 0 && i <= step ? "✓" : ""}</span></div>
      </div>)}
      <button type="button" className="tks-btn" style={{ width: "100%", marginTop: 7, padding: "4px 8px", fontSize: 11 }} disabled={step >= 3} onClick={(e) => { e.stopPropagation(); setStep((s) => s + 1); }}>{step >= 3 ? "State locked 🔒" : "Advance state"}</button>
    </div>,
    <div key="d4">
      <p style={{ textAlign: "center", fontSize: 21, margin: "0 0 2px" }} aria-hidden="true">🏛</p>
      <p style={{ textAlign: "center", margin: "1px 0", color: "#9a9aa0" }}>↓&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;↓</p>
      <div style={{ display: "flex", gap: 4 }}>
        <span style={{ ...box, flex: 1 }}>📄<br />POLICY</span>
        <span style={{ ...box, flex: 1 }}>📄<br />EVIDENCE</span>
        <span style={{ ...box, flex: 1 }}>📄<br />AUDIT TRAIL</span>
      </div>
    </div>,
    <div key="d5">
      <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
        <span style={{ ...box, flex: "1 1 0", minWidth: 0, fontSize: 7.6, letterSpacing: 0, padding: "4px 1px" }}>👤<br />BUYER</span><span aria-hidden="true" style={{ fontSize: 8 }}>←→</span>
        <span style={{ ...box, flex: "0 0 30px", borderRadius: "50%", padding: "6px 0" }}>🔒</span><span aria-hidden="true" style={{ fontSize: 8 }}>←→</span>
        <span style={{ ...box, flex: "1 1 0", minWidth: 0, fontSize: 7.6, letterSpacing: 0, padding: "4px 1px" }}>👤<br />SELLER</span>
      </div>
      <p style={{ textAlign: "center", margin: "1px 0", color: "#9a9aa0" }}>↓</p>
      <p style={{ textAlign: "center", margin: 0 }}><span style={{ display: "inline-flex", border: "1px solid #fff", borderRadius: "50%", width: 22, height: 22, alignItems: "center", justifyContent: "center" }}>✓</span><br /><span style={{ fontSize: 9.3, letterSpacing: ".04em" }}>SETTLED ON-CHAIN</span></p>
    </div>,
  ];
  return <div className="tks" role="region" aria-label="Tokenta product principles — interactive rebuild of Tokenta_07">
    <Head n="07." />
    <h3>Product principles.</h3>
    <p className="tks-lede">Five design principles guide every decision at Tokenta—from verification to settlement.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", alignItems: "stretch" }}>
      {PRINCIPLES.map((pr, i) => <div key={pr.n} className={`tks-card${i === active ? " is-on" : ""}`} style={{ background: "#111", color: "#fff", borderColor: "#111", padding: "12px 11px", cursor: "pointer", display: "flex", flexDirection: "column" }} role="button" tabIndex={0} aria-pressed={i === active} onClick={() => setActive(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}>
        <p style={{ margin: 0 }}><span className="tks-num tks-num--light">{pr.n}</span></p>
        <p style={{ fontWeight: 700, fontSize: 13.5, margin: "8px 0 0", lineHeight: 1.3, minHeight: 36 }}>{pr.title}</p>
        <div style={{ borderTop: "1px solid #3a3b3f", marginTop: 9, paddingTop: 10 }}>{diagrams[i]}</div>
        <p style={{ color: "#c9c9ce", fontSize: 11, margin: "12px 0 0", lineHeight: 1.5 }}>{pr.body}</p>
      </div>)}
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_08 — Scope boundary ---------------- */

const SCOPE_LAYERS = [
  { n: "01", title: "Implemented public platform", sub: "LIVE TODAY", goal: "Goal: Educate, communicate, and establish trust.", intro: "Public facing platform and content system that communicates Tokenta and the problem it solves.", items: [["Public routes", "Home, about, docs, blog, and legal pages accessible to anyone."], ["Responsive site", "Adaptive layouts and accessible components across devices and breakpoints."], ["Product explanations", "Clear messaging, use cases, and visual explainers for AI asset exchange."], ["Content system", "CMS-driven content, reusable modules, and editorial workflows."]] },
  { n: "02", title: "Designed terminal", sub: "DESIGNED & PROTOTYPED", goal: "Goal: Enable professional operations and verification.", intro: "Professional terminal experience for institutions and operators working with AI asset markets.", items: [["Institutional trading views", "Markets, assets, orders, positions, and portfolio analytics in one workspace."], ["Verification workflow", "End-to-end asset verification with provenance, audit, and attestation steps."], ["Dense operator interfaces", "High-information layouts for power users and risk/compliance teams."], ["Role-based access", "Permissions, audit logging, and team collaboration tools."]] },
  { n: "03", title: "Proposed production services", sub: "PLANNED", goal: "Goal: Deliver secure, reliable, and scalable production.", intro: "Backend services and integrations required for production-grade operations at scale.", items: [["Live settlement integrations", "Escrow, release, arbitration, and on-chain settlement with counterparties."], ["Production data services", "Real-time market data, indexing, and historical data pipelines."], ["Advanced verification infrastructure", "Automated attestations, model evaluations, and continuous monitoring."], ["Reliability & scalability", "High availability, disaster recovery, and performance at scale."]] },
];

export function TokentaScopeBoundary() {
  const [active, setActive] = useState(0);
  const [item, setItem] = useState(0);
  const icons = [["🌐", "🖥", "📄", "🗄"], ["📊", "🛡", ">_", "👥"], ["🏛", "🗄", "🛡", "≋"]];
  return <div className="tks" role="region" aria-label="Tokenta scope boundary — interactive rebuild of Tokenta_08">
    <Head n="08." kicker="Scope boundary" />
    <h3>Scope boundary.</h3>
    <p className="tks-lede">Tokenta is being built in layers. Each layer has a distinct purpose, clear boundaries, and an evolving set of capabilities.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", alignItems: "stretch" }}>
      {SCOPE_LAYERS.map((l, li) => <div key={l.n} className="tks-card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ background: "#111", color: "#fff", padding: "10px 12px" }}><span className="tks-num tks-num--light">{l.n}</span> <b style={{ fontSize: 13.5 }}>{l.title}</b><br /><span className="tks-kicker" style={{ color: "#b9b9be" }}>{l.sub}</span></div>
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", flex: 1 }}>
          <p style={{ margin: "0 0 8px", fontSize: 12 }}>{l.intro}</p>
          <p className="tks-kicker" style={{ margin: "0 0 6px" }}>Representative examples</p>
          {l.items.map(([t, b], i) => <button key={t} type="button" aria-pressed={active === li && item === i} onClick={() => { setActive(li); setItem(i); }} style={{ display: "flex", gap: 9, alignItems: "flex-start", textAlign: "left", font: "inherit", background: active === li && item === i ? "#ececea" : "#fff", border: "1px solid #e2e2de", borderRadius: 7, padding: "7px 9px", marginBottom: 6, cursor: "pointer", width: "100%" }}>
            <span style={{ fontSize: 16, border: "1px solid #d9d9d4", borderRadius: 6, padding: "3px 5px", lineHeight: 1 }} aria-hidden="true">{icons[li][i]}</span>
            <span><b style={{ fontSize: 12 }}>{t}</b><br /><span style={{ color: "#555", fontSize: 11, lineHeight: 1.4 }}>{b}</span></span>
          </button>)}
          <p style={{ margin: "auto 0 0", background: "#111", color: "#fff", borderRadius: 6, padding: "7px 10px", fontSize: 11.5 }}>{li === 0 ? "✓ " : "○ "}{l.goal}</p>
        </div>
      </div>)}
    </div>
    <div className="tks-detail" style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
      <span className="tks-kicker">How to read</span>
      <span><b>01 Implemented</b> — Live and available to the public.</span><span aria-hidden="true">→</span>
      <span><b>02 Designed</b> — Designed, prototyped, and ready for build.</span><span aria-hidden="true">→</span>
      <span><b>03 Proposed</b> — Planned production services and integrations.</span>
      <span style={{ color: "#555" }}>Layers build on each other. Boundaries keep scope clear. Progress moves left to right.</span>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_09 — User roles ---------------- */

const ROLES = [
  { n: 1, title: "Institutional Buyer or Trading Desk", sub: "Sources, evaluates, and acquires verified AI assets to deploy or resell.", step: "5. Discover, Price & Transact", jobs: ["Discover high-quality, verified AI assets", "Compare provenance, performance, and risk", "Negotiate terms with confidence", "Execute secure deals with clear settlement", "Maintain portfolio of trusted assets"] },
  { n: 2, title: "AI Laboratory or Provider", sub: "Creates and publishes AI assets with verifiable lineage and usage rights.", step: "1. List & Register AI Assets", jobs: ["Register models, datasets, agents, or tools", "Attach licenses, terms, and usage policy", "Provide evidence for performance & safety", "Respond to verification requests", "Monetize and manage asset lifecycle"] },
  { n: 3, title: "Attestor or Verification Operator", sub: "Independently verifies and attests to claims with transparent evidence.", step: "2. Verify & Attest Trust Signals", jobs: ["Receive verification or attestation requests", "Review evidence and run evaluation probes", "Issue attestations with verifiable proof", "Maintain reputation and quality standards", "Earn from accurate, reliable attestations"] },
  { n: 4, title: "Compliance & Risk Operator", sub: "Ensures assets and deals meet regulatory, policy, and risk requirements.", step: "3. Escrow & Negotiate Deals", jobs: ["Review policies, jurisdictions, and restrictions", "Assess risk, safety, and model behavior", "Approve or flag deals and counterparties", "Maintain audit trails and reports", "Enforce controls across the platform"] },
  { n: 5, title: "Developer", sub: "Builds apps, integrations, and automations on top of the Tokenta protocol.", step: "4. Settle & Record On-Chain", jobs: ["Integrate APIs and SDKs", "Query assets, attestations, and deals", "Automate workflows and settlement", "Build analytics and user experiences", "Extend the ecosystem with new tools"] },
];
const CYCLE = ["1. List & Register AI Assets", "2. Verify & Attest Trust Signals", "3. Escrow & Negotiate Deals", "4. Settle & Record On-Chain", "5. Discover, Price & Transact"];

export function TokentaUserRoles() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];
  const glyphs = ["🧑‍💼", "👩‍💻", "🧑", "👩", "🧑‍💻"];
  const roleCard = (i: number, area: string) => {
    const r = ROLES[i];
    return <div key={r.n} style={{ gridArea: area }}><div className={`tks-card${i === active ? " is-on" : ""}`} style={{ height: "100%", cursor: "pointer", padding: "10px 12px" }} role="button" tabIndex={0} aria-pressed={i === active} onClick={() => setActive(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}>
      <p style={{ margin: 0 }}><span className="tks-num">{r.n}</span> <span style={{ fontSize: 19 }} aria-hidden="true">{glyphs[i]}</span></p>
      <p style={{ fontWeight: 700, margin: "5px 0 3px", fontSize: 13, lineHeight: 1.3 }}>{r.title}</p>
      <p style={{ color: "#555", margin: "0 0 7px", fontSize: 10.8, lineHeight: 1.45 }}>{r.sub}</p>
      <p className="tks-kicker" style={{ margin: "0 0 4px", fontSize: 9.5 }}>Job-to-be-done</p>
      {r.jobs.map((j) => <p key={j} style={{ margin: "2px 0", fontSize: 10.6, lineHeight: 1.4 }}>✓ {j}</p>)}
    </div></div>;
  };
  // Cycle node positions around the centre hub (percent of diagram box)
  const nodePos = [{ x: 50, y: 5 }, { x: 89.5, y: 36 }, { x: 72, y: 90 }, { x: 28, y: 90 }, { x: 10.5, y: 36 }];
  const nodeIcons = ["⬢", "🛡", "🔒", "📄", "📊"];
  return <div className="tks" role="region" aria-label="Tokenta user roles — interactive rebuild of Tokenta_09">
    <Head n="09." />
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <h3 style={{ margin: "10px 0 4px" }}>User roles.</h3>
      <p style={{ maxWidth: 330, fontSize: 12, lineHeight: 1.5, color: "#444", margin: "16px 0 0" }}>Tokenta was modeled around the real people who verify, trade, attest, and build with AI assets—before we designed a single interface.</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.02fr 1fr", gridTemplateAreas: '"r1 diag r2" "r3 diag r4" "why r5 objs"', gap: 10, marginTop: 8 }}>
      {roleCard(0, "r1")}{roleCard(1, "r2")}{roleCard(2, "r3")}{roleCard(3, "r4")}{roleCard(4, "r5")}
      <div style={{ gridArea: "diag", position: "relative", minHeight: 380 }} role="group" aria-label="Asset lifecycle cycle around the Tokenta hub">
        <svg viewBox="0 0 300 380" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
          <defs><marker id="tks-roles-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#8a8a84" /></marker></defs>
          <circle cx="150" cy="190" r="128" fill="none" stroke="#b9b9b2" strokeWidth="1.4" />
          <path d="M 205 84 A 128 128 0 0 1 262 140" fill="none" stroke="#8a8a84" strokeWidth="1.4" markerEnd="url(#tks-roles-arrow)" />
          <path d="M 272 232 A 128 128 0 0 1 214 322" fill="none" stroke="#8a8a84" strokeWidth="1.4" markerEnd="url(#tks-roles-arrow)" />
          <path d="M 152 318 A 128 128 0 0 1 88 324" fill="none" stroke="#8a8a84" strokeWidth="1.4" markerEnd="url(#tks-roles-arrow)" />
          <path d="M 40 236 A 128 128 0 0 1 36 146" fill="none" stroke="#8a8a84" strokeWidth="1.4" markerEnd="url(#tks-roles-arrow)" />
          <path d="M 88 76 A 128 128 0 0 1 140 64" fill="none" stroke="#8a8a84" strokeWidth="1.4" markerEnd="url(#tks-roles-arrow)" />
        </svg>
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "56%", background: "#111", color: "#fff", borderRadius: 9, padding: "12px 10px", textAlign: "center", zIndex: 2 }}>
          <p style={{ fontWeight: 800, letterSpacing: ".04em", margin: 0, fontSize: 15 }}>⌂ TOKENTA</p>
          <p style={{ fontWeight: 700, fontSize: 12.5, lineHeight: 1.35, margin: "6px 0 8px" }}>The Verifiable AI<br />Asset Exchange</p>
          <p style={{ margin: 0, display: "flex", gap: 4, justifyContent: "center" }}>{["Verify", "Attest", "Escrow", "Settle"].map((v) => <span key={v} style={{ border: "1px solid #3a3b3f", borderRadius: 5, padding: "2px 6px", fontSize: 9.5 }}>{v}</span>)}</p>
        </div>
        {CYCLE.map((c, i) => {
          const ri = ROLES.findIndex((r) => r.step === c);
          return <button key={c} type="button" aria-pressed={active === ri} onClick={() => setActive(ri)} style={{ position: "absolute", left: `${nodePos[i].x}%`, top: `${nodePos[i].y}%`, transform: "translate(-50%,-50%)", background: "none", border: "none", cursor: "pointer", font: "inherit", textAlign: "center", zIndex: 1, width: 80 }}>
            <span style={{ display: "inline-flex", width: 32, height: 32, borderRadius: "50%", background: "#111", color: "#fff", alignItems: "center", justifyContent: "center", fontSize: 14, boxShadow: active === ri ? "0 0 0 3px #f6f6f4, 0 0 0 5px #111" : "0 0 0 3px #f6f6f4" }} aria-hidden="true">{nodeIcons[i]}</span>
            <span style={{ display: "block", fontSize: 9.2, fontWeight: 700, lineHeight: 1.3, marginTop: 3 }}>{c}</span>
          </button>;
        })}
      </div>
      <div style={{ gridArea: "why" }} className="tks-card">
        <p style={{ margin: "0 0 5px" }}><b>Why roles first?</b></p>
        <p style={{ margin: 0, fontSize: 11, color: "#444", lineHeight: 1.5 }}>We started with the people, their goals, and their constraints. Every workflow, permission, and data model maps to a real responsibility in the AI asset economy—ensuring the platform is usable, trustworthy, and adoption-ready.</p>
      </div>
      <div style={{ gridArea: "objs" }} className="tks-card">
        <p className="tks-kicker" style={{ margin: "0 0 6px" }}>Platform objects</p>
        {[["⬢ Assets", "Models, datasets, agents, tools"], ["🛡 Trust Signals", "Attestations, evaluations, proofs"], ["🔒 Escrow", "Secure execution with clear states"], ["📄 Settlement", "On-chain records and receipts"], ["📊 Markets", "Discovery, pricing, liquidity"]].map(([t, b]) => <p key={t} style={{ margin: "3px 0", fontSize: 11 }}><b>{t}</b> — <span style={{ color: "#555" }}>{b}</span></p>)}
        <p style={{ margin: "8px 0 0", fontSize: 11 }} aria-live="polite">In focus: <b>{role.title}</b> · cycle step: {role.step}</p>
      </div>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_10 — Object model ---------------- */

const OBJECTS = [
  { n: 1, name: "Institution and Desk", body: "Trusted organizations operate desks and set policies, risk limits, and compliance rules.", fields: "Entity · Policy · Limit" },
  { n: 2, name: "Wallet and Account", body: "On-chain identity and accounts for signing, ownership, and balance management.", fields: "Address · Key · Balance" },
  { n: 3, name: "AI Asset", body: "A verifiable AI asset with metadata, model artifacts, and usage rights.", fields: "Asset ID · Version · Rights" },
  { n: 4, name: "Evidence Bundle", body: "Immutable evidence about the asset: data, training, evals, licenses, provenance.", fields: "Artifacts · Hashes · Links" },
  { n: 5, name: "Verification Job", body: "A verification job is created and executed by the network of attestors.", fields: "Job ID · Status · Rules" },
  { n: 6, name: "Listing", body: "After passing quorum, the asset is listed for discovery and consideration.", fields: "Listing ID · Price · Terms" },
  { n: 7, name: "Order or Order Room", body: "Interested buyers negotiate directly or in a private Order Room.", fields: "Offer · Counter · Intent" },
  { n: 8, name: "Term Sheet", body: "Negotiated economic and legal terms, published for execution.", fields: "Terms ID · Hash · Parties" },
  { n: 9, name: "Escrow Contract", body: "Funds and assets are locked in a secure escrow smart contract.", fields: "Escrow ID · Amount · State" },
  { n: 10, name: "Release Condition", body: "On-chain rules that define when funds or assets can be released.", fields: "Rule ID · Logic · Oracle" },
  { n: 11, name: "Settlement Receipt", body: "Conditions met. Escrow executes and an immutable receipt is issued.", fields: "Receipt ID · Tx Hash · Time" },
  { n: 12, name: "Reputation Event and Score", body: "Outcome contributes to reputation and risk scoring for all participants.", fields: "Event ID · Delta · Score" },
];
const CONNECTED = [
  ["Attestor", "Qualified verifiers that run checks and sign attestations.", "Attestor ID · Profile · Key"],
  ["Quorum", "Quorum rules define the minimum set and threshold of attestations required.", "Quorum ID · Threshold · Set"],
  ["Dispute", "Disputes can be raised against listings, attestations, or settlements.", "Dispute ID · Reason · State"],
  ["Analytics Event", "Key events are streamed for analytics, monitoring, and risk models.", "Event Type · Payload · Time"],
  ["API Credential", "Programmatic access for integrators and automation.", "Key ID · Scopes · Status"],
  ["Webhook Endpoint", "Real-time notifications for external systems and workflows.", "Endpoint ID · Events · URL"],
];
const PRINCIPLES_10 = [
  ["Verifiable", "Every object is cryptographically signed and can be verified independently."],
  ["Immutable", "All state changes are recorded on-chain and cannot be altered."],
  ["Compositional", "Objects are modular and interoperable across the platform."],
  ["Auditable", "Complete history and evidence for every action and outcome."],
  ["Enforceable", "On-chain rules and escrows ensure agreements are honored."],
];

export function TokentaObjectModel() {
  const [active, setActive] = useState(2);
  const objCard = (o: (typeof OBJECTS)[number], i: number) => <button key={o.n} type="button" className={`tks-card${i === active ? " is-on" : ""}`} style={{ padding: "7px 8px", flex: "1 1 0", minWidth: 0 }} aria-pressed={i === active} onClick={() => setActive(i)}>
    <span className="tks-num" style={{ width: 19, height: 19, fontSize: 10.5 }}>{o.n}</span>
    <p style={{ fontWeight: 700, margin: "4px 0 3px", fontSize: 10.8, lineHeight: 1.3 }}>{o.name}</p>
    <p style={{ color: "#555", margin: "0 0 5px", fontSize: 9.3, lineHeight: 1.4 }}>{o.body}</p>
    <p className="tks-kicker" style={{ margin: 0, fontSize: 8.3, letterSpacing: ".02em", textTransform: "none", borderTop: "1px solid #e8e8e4", paddingTop: 4 }}>{o.fields}</p>
  </button>;
  const arrow = <span className="tks-arrow" style={{ fontSize: 13, padding: "0 1px" }} aria-hidden="true">→</span>;
  const withArrows = (items: React.ReactNode[]) => items.flatMap((el, i) => (i === 0 ? [el] : [arrow, el]));
  const foundations: Array<[string, string]> = [
    ["Identity", "Decentralized identity and delegation for participants."],
    ["Access & Permissions", "Role-based access and granular permissions across objects."],
    ["Data Availability", "Evidence and metadata anchored for availability and integrity."],
    ["Smart Contracts", "Battle-tested contracts for escrow, rules, and settlement."],
    ["Audit Trail", "End-to-end traceability for compliance and assurance."],
    ["Security", "Defense in depth across infrastructure, contracts, and operations."],
  ];
  return <div className="tks" role="region" aria-label="Tokenta object model — interactive rebuild of Tokenta_10">
    <Head n="10." />
    <h3>Object model.</h3>
    <p className="tks-lede">How AI assets become tradable and trustworthy.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 168px", alignItems: "start" }}>
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "stretch" }}>{withArrows(OBJECTS.slice(0, 8).map((o, i) => objCard(o, i)))}</div>
        <div style={{ display: "flex", alignItems: "stretch", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "stretch", flex: "4.2 1 0" }}>{withArrows(OBJECTS.slice(8).map((o, i) => objCard(o, i + 8)))}</div>
          <div className="tks-card" style={{ flex: "1.9 1 0", padding: "8px 10px", display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 19 }} aria-hidden="true">🛡</span>
            <span><b style={{ fontSize: 11.5 }}>Trust at every step.</b><br /><span style={{ fontSize: 9.8, color: "#555", lineHeight: 1.45 }}>Every object is cryptographically signed, immutably recorded, and transparently auditable. Trust is built by design.</span></span>
          </div>
        </div>
      </div>
      <div className="tks-card" style={{ padding: "9px 11px" }}>
        <p style={{ fontWeight: 700, margin: "0 0 6px", fontSize: 12 }}>Object principles.</p>
        {PRINCIPLES_10.map(([n, b]) => <p key={n} style={{ margin: "0 0 7px", fontSize: 10, lineHeight: 1.45 }}><b>{n}</b><br /><span style={{ color: "#555" }}>{b}</span></p>)}
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "stretch", gap: 6, marginTop: 8 }}>
      <div className="tks-card" style={{ flex: "0 0 108px", padding: "8px 9px", borderStyle: "dashed" }}>
        <b style={{ fontSize: 11 }}>Connected objects.</b>
        <p style={{ fontSize: 9.5, color: "#555", margin: "4px 0 0", lineHeight: 1.45 }}>Supporting actors, services, and events that strengthen the core flow.</p>
      </div>
      {CONNECTED.map(([n, b, f]) => <div key={n} className="tks-card" style={{ flex: "1 1 0", padding: "8px 9px" }}>
        <p style={{ fontWeight: 700, margin: "0 0 3px", fontSize: 10.8 }}>{n}</p>
        <p style={{ color: "#555", margin: "0 0 5px", fontSize: 9.3, lineHeight: 1.4 }}>{b}</p>
        <p className="tks-kicker" style={{ margin: 0, fontSize: 8.3, letterSpacing: ".02em", textTransform: "none", borderTop: "1px solid #e8e8e4", paddingTop: 4 }}>{f}</p>
      </div>)}
    </div>
    <div style={{ display: "flex", alignItems: "stretch", gap: 6, marginTop: 8 }}>
      <div className="tks-card" style={{ flex: "0 0 108px", padding: "8px 9px", borderStyle: "dashed" }}>
        <b style={{ fontSize: 11 }}>Foundations.</b>
        <p style={{ fontSize: 9.5, color: "#555", margin: "4px 0 0", lineHeight: 1.45 }}>Cross-cutting capabilities that secure and scale the platform.</p>
      </div>
      {foundations.map(([n, b]) => <div key={n} style={{ flex: "1 1 0", padding: "2px 4px" }}>
        <p style={{ fontWeight: 700, margin: "0 0 2px", fontSize: 10.5 }}>{n}</p>
        <p style={{ color: "#555", margin: 0, fontSize: 9.3, lineHeight: 1.4 }}>{b}</p>
      </div>)}
      <div className="tks-card" style={{ flex: "0 0 128px", padding: "8px 9px" }}>
        <b style={{ fontSize: 11 }}>Legend.</b>
        <p style={{ fontSize: 9.5, margin: "4px 0 0" }}>⟶ Primary flow<br />┄⟶ Supporting connection<br />▭ Core object</p>
      </div>
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 11.5 }} aria-live="polite">Selected: <b>{OBJECTS[active].n}. {OBJECTS[active].name}</b> — fields: <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{OBJECTS[active].fields}</span></p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_11 — Trust architecture ---------------- */

const TRUST_SYSTEMS = [
  { n: 1, name: "Verification", sub: "Proof that assets are real and trustworthy.", link: "Verified assets become eligible to list", items: ["Identity (entity & wallet)", "Provenance (origin & lineage)", "Evidence bundle (artifacts & hashes)", "Attestor quorum (independent verifiers)", "Behavioral probes (tests & signals)"] },
  { n: 2, name: "Marketplace", sub: "Discover, evaluate, and price assets.", link: "Buyer selects asset and opens deal", items: ["Verified listings (eligible & transparent)", "Discovery (search & recommendations)", "Filters (capabilities & attributes)", "Pricing (ask, offers, market signals)", "Buyer evaluation (reputation & intent)"] },
  { n: 3, name: "Escrow", sub: "Secure execution with clear terms.", link: "Settlement outcomes feed reputation", items: ["Order room (negotiate terms)", "Term sheet (rights, scope, obligations)", "Release conditions (on-chain rules)", "Settlement receipt (immutable proof)", "Dispute handling (mediation & arbitration)"] },
  { n: 4, name: "Reputation", sub: "Scores and signals drive trust and access.", link: "Reputation improves access and verification strength", items: ["Settlement outcomes (success & quality)", "Score updates (trust & risk models)", "Risk signals (flags & thresholds)", "History (on-chain activity & events)", "Permissions (access & capabilities)"] },
];
const TRUST_PRIMITIVES = [
  ["Wallets & Accounts", "On-chain identity and balances for fees, escrow, and payouts."],
  ["Policies & Rules", "Programmable policies governing verification, escrow, and releases."],
  ["Audit Trail", "Immutable, time-stamped records for every action and decision."],
  ["Compliance", "KYC/AML, sanctions, jurisdictional rules, and regulatory checks."],
  ["Analytics & Insights", "Risk scoring, market insights, and performance dashboards."],
];

export function TokentaTrustArchitecture() {
  const [active, setActive] = useState(0);
  const [prim, setPrim] = useState(0);
  const sys = TRUST_SYSTEMS[active];
  return <div className="tks" role="region" aria-label="Tokenta trust architecture — interactive rebuild of Tokenta_11">
    <Head n="11" kicker="Trust architecture" />
    <h3>Trust architecture.</h3>
    <p className="tks-lede">Four connected systems make AI asset trading verifiable, enforceable, and auditable.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 0.8fr" }}>
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", gridColumn: "span 2" }}>
        {TRUST_SYSTEMS.map((s, i) => <button key={s.n} type="button" className={`tks-card${i === active ? " is-on" : ""}`} aria-pressed={i === active} onClick={() => setActive(i)}>
          <span className="tks-num">{s.n}</span> <b style={{ fontSize: 14 }}>{s.name}</b>
          <p style={{ color: "#555", margin: "4px 0" }}>{s.sub}</p>
          <p className="tks-kicker" style={{ margin: 0 }}>→ {s.link}</p>
        </button>)}
      </div>
      <div className="tks-card">
        <b>Shared trust primitives</b>
        {TRUST_PRIMITIVES.map(([t], i) => <button key={t} type="button" className="tks-node" style={{ display: "block", width: "100%", marginTop: 6 }} aria-pressed={prim === i} onClick={() => setPrim(i)}><b>{t}</b></button>)}
      </div>
    </div>
    <div className="tks-detail" aria-live="polite">
      <b>{sys.n}. {sys.name}</b>
      <ul style={{ margin: "6px 0", columns: 2 }}>{sys.items.map((it) => <li key={it}>{it}</li>)}</ul>
      <p style={{ margin: 0 }}><b>Shared primitive — {TRUST_PRIMITIVES[prim][0]}:</b> {TRUST_PRIMITIVES[prim][1]}</p>
      <p style={{ margin: "6px 0 0", color: "#555" }}>Cycle as printed: Verification → Marketplace → Escrow → Reputation → back to Verification (reputation improves access and verification strength).</p>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_12 — Service blueprint ---------------- */

const BLUEPRINT_ACTIONS = ["Provider lists an asset", "Submits evidence", "Operator reviews and attests", "Buyer discovers and evaluates", "Negotiation in Order Room", "Escrow created", "Release conditions checked", "Settlement recorded", "Reputation updated", "Analytics and monitoring"];
const BLUEPRINT_ROWS: Array<{ label: string; cells: Array<[string, string[]]> }> = [
  { label: "Interface surfaces", cells: [["Marketplace", ["Asset listing form", "Pricing & terms", "Capabilities"]], ["Verification Console", ["Upload evidence", "Add metadata", "Select capabilities"]], ["Verification Console", ["Review evidence", "Run checks", "Issue attestation"]], ["Marketplace", ["Search & filters", "Asset profile", "Attestations"]], ["Order Room", ["Term sheet", "Chat & offers", "Counter / intent"]], ["Escrow Panel", ["Review terms", "Create escrow", "Fund escrow"]], ["Escrow Panel", ["Condition status", "Evidence checks", "Approvals"]], ["Receipt", ["Settlement receipt", "Tx hash", "Asset state"]], ["Reputation", ["Scores updated", "Trust signals", "History"]], ["Analytics", ["Dashboards", "Alerts", "Exports"]]] },
  { label: "Platform services", cells: [["Listing Service", ["Validate listing", "Capability mapping", "Policy checks"]], ["Evidence Service", ["Ingest & store", "Hash & timestamp", "Link to asset"]], ["Verification Service", ["Rule engine", "Risk & policy checks", "Attestation engine"]], ["Discovery Service", ["Index assets", "Relevance ranking", "Access control"]], ["Order Room Service", ["Match & notify", "Messaging", "Intent capture"]], ["Escrow Service", ["Create escrow", "Lock funds/assets", "State machine"]], ["Condition Engine", ["Evaluate conditions", "Orchestration", "Approvals"]], ["Settlement Service", ["Execute release", "Record outcome", "Update state"]], ["Reputation Service", ["Score calculation", "Risk scoring", "Signal publish"]], ["Analytics Service", ["Event streams", "Metrics & alerts", "Reports"]]] },
  { label: "On-chain events / records", cells: [["Listing Recorded", ["listing_created", "asset_id", "terms_hash"]], ["Evidence Anchored", ["evidence_hashed", "ipfs_cid", "asset_id"]], ["Attestation Issued", ["attestation_issued", "attestor_id", "attestation_hash"]], ["Asset Discovered", ["asset_viewed", "buyer_id", "listing_id"]], ["Offer Submitted", ["offer_submitted", "terms_hash", "order_room_id"]], ["Escrow Created", ["escrow_created", "escrow_id", "amount / assets"]], ["Condition Checked", ["condition_checked", "result", "timestamp"]], ["Settlement Recorded", ["settlement_recorded", "tx_hash", "receipt_id"]], ["Reputation Updated", ["reputation_updated", "entity_id", "score_delta"]], ["Analytics Event", ["event_emitted", "type", "payload"]]] },
  { label: "Support / operations", cells: [["Listing Review", ["Policy review", "Provider support", "Quality checks"]], ["Evidence Support", ["Upload guidance", "Format support", "Ingestion support"]], ["Operator Support", ["Review assistance", "Dispute intake", "Escalations"]], ["Buyer Support", ["Discovery help", "Due diligence", "Access requests"]], ["Order Room Support", ["Mediation", "Negotiation help", "Dispute intake"]], ["Escrow Support", ["Funding issues", "State inquiries", "Escalations"]], ["Compliance Review", ["Manual checks", "Exception handling", "Approvals"]], ["Settlement Support", ["Failure handling", "Reconciliation", "Dispute intake"]], ["Reputation Review", ["Appeals handling", "Score review", "Corrections"]], ["Ops & Monitoring", ["System monitoring", "Alert response", "Incident mgmt."]]] },
];

export function TokentaServiceBlueprint() {
  const [col, setCol] = useState(0);
  const labelCell: React.CSSProperties = { fontWeight: 700, fontSize: 9.8, lineHeight: 1.35, padding: "7px 6px", borderTop: "1px dashed #c9c9c2", display: "flex", alignItems: "flex-start", gap: 4 };
  const cell = (highlight: boolean): React.CSSProperties => ({ padding: "6px 6px", borderTop: "1px dashed #c9c9c2", fontSize: 9.2, lineHeight: 1.45, background: highlight ? "#ececea" : undefined, boxShadow: highlight ? "inset 0 0 0 1.4px #111" : undefined, borderRadius: highlight ? 5 : undefined });
  return <div className="tks" role="region" aria-label="Tokenta end-to-end service blueprint — interactive rebuild of Tokenta_12">
    <Head n="12" kicker="End-to-end service blueprint" />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <div><h3>End-to-end service blueprint.</h3>
      <p className="tks-lede" style={{ margin: 0 }}>From asset submission to settlement, each user action maps to services, records, and support operations.</p></div>
      <p style={{ maxWidth: 300, fontSize: 11.5, lineHeight: 1.5, color: "#444", margin: "16px 0 0" }}>◉◉ This blueprint spans provider, attestor, buyer, compliance, and developer roles.</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "86px repeat(10, 1fr)", gap: "3px 5px", marginTop: 14 }} role="group" aria-label="Full blueprint grid — 10 user actions by 4 layers">
      <span style={{ ...labelCell, borderTop: "none" }}>👤 User actions</span>
      {BLUEPRINT_ACTIONS.map((a, i) => <button key={a} type="button" aria-pressed={col === i} onClick={() => setCol(i)} style={{ ...cell(col === i), borderTop: "none", textAlign: "left", font: "inherit", cursor: "pointer", background: col === i ? "#111" : "#fff", color: col === i ? "#fff" : "#111", border: "1px solid #d0d0cb", borderRadius: 6 }}>
        <span className="tks-num" style={{ width: 18, height: 18, fontSize: 10, marginBottom: 3, background: col === i ? "#fff" : "#111", color: col === i ? "#111" : "#fff" }}>{i + 1}</span><br /><b style={{ fontSize: 9.6, lineHeight: 1.3 }}>{a}</b>
      </button>)}
      {BLUEPRINT_ROWS.map((row) => <span key={row.label} style={{ display: "contents" }}>
        <span style={labelCell}>{row.label === "Interface surfaces" ? "🖥" : row.label === "Platform services" ? "⬢" : row.label.startsWith("On-chain") ? "🔗" : "🎧"} {row.label}</span>
        {row.cells.map(([title, items], i) => <span key={title} style={cell(col === i)}>
          <b style={{ fontSize: 9.5, display: "block", marginBottom: 2 }}>{title}</b>
          {items.map((it) => <span key={it} style={{ display: "block", color: "#444" }}>• {it}</span>)}
        </span>)}
      </span>)}
    </div>
    <p style={{ color: "#555", margin: "9px 0 0", fontSize: 11 }}>Legend: ⟶ Primary flow · ┄⟶ Supporting connection · ▭ Touchpoint / service. Select a user action to highlight its full column across every layer.</p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_13 — Route map ---------------- */

const ROUTE_FAMILIES = [
  { name: "Home & conversion", count: 2, audience: "New visitors — Discover and convert", routes: [["Home", 1], ["Early Access", 1]] as Array<[string, number]> },
  { name: "Product", count: 6, audience: "Product users — Explore core flows", routes: [["Marketplace", 1], ["Verification", 2], ["Order Room", 3], ["Escrow", 4], ["Reputation", 5], ["Analytics", 6]] as Array<[string, number]> },
  { name: "Documentation", count: 1, audience: "Learners — Understand concepts", routes: [["Docs", 1]] as Array<[string, number]> },
  { name: "Developers", count: 5, audience: "Builders — Integrate and build", routes: [["API Reference", 1], ["SDKs", 2], ["Webhooks", 3], ["Status", 4], ["Changelog", 5]] as Array<[string, number]> },
  { name: "Institution", count: 6, audience: "Institutions — Evaluate and engage", routes: [["Pricing", 1], ["Compliance", 2], ["Security", 3], ["Disclosures", 4], ["Contact", 5], ["Careers", 6]] as Array<[string, number]>, careers: ["Staff Engineer Matching", "Protocol Researcher", "Institutional Sales", "Compliance Analyst", "Fullstack Engineer Terminal", "Developer Relations"] },
  { name: "Legal", count: 4, audience: "Legal & risk — Review and assess", routes: [["Terms", 1], ["Privacy", 2], ["Risk", 3], ["Licensing", 4]] as Array<[string, number]> },
];

export function TokentaRouteMap() {
  const [active, setActive] = useState(1);
  const famCard = (f: (typeof ROUTE_FAMILIES)[number], i: number) => <div key={f.name} className="tks-card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
    <button type="button" aria-pressed={i === active} onClick={() => setActive(i)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: i === active ? "#000" : "#111", color: "#fff", padding: "8px 9px", border: "none", cursor: "pointer", font: "inherit", textAlign: "left", boxShadow: i === active ? "inset 0 0 0 2px #fff" : undefined }}>
      <b style={{ fontSize: 11.3, lineHeight: 1.25 }}>{f.name}</b><span style={{ fontWeight: 800 }}>{f.count}</span>
    </button>
    <div style={{ padding: "7px 8px", display: "grid", gap: 5, alignContent: "start", flex: 1 }}>
      {f.routes.map(([r, n]) => <span key={r} style={{ display: "flex", justifyContent: "space-between", border: "1px solid #e2e2de", borderRadius: 5, padding: "4px 7px", fontSize: 10.8, background: "#fff" }}><span>{r}</span><span style={{ color: "#888" }}>{n}</span></span>)}
    </div>
    <p style={{ margin: 0, padding: "0 9px 9px", fontSize: 10.3, color: "#444", lineHeight: 1.4 }}><b>{f.audience.split(" — ")[0]}</b><br />{f.audience.split(" — ")[1]}</p>
  </div>;
  const careers = ROUTE_FAMILIES[4].careers!;
  return <div className="tks" role="region" aria-label="Tokenta route map — interactive rebuild of Tokenta_13">
    <Head n="13" kicker="Route map" />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <div><h3>Route map.</h3>
      <p className="tks-lede" style={{ margin: 0 }}>Thirty public routes were organized into clear families so different audiences could find the right depth quickly.</p></div>
      <p style={{ maxWidth: 320, fontSize: 11.5, lineHeight: 1.5, color: "#444", margin: "16px 0 0", border: "1px solid #d9d9d4", borderRadius: 7, padding: "8px 11px" }}>ⓘ This public case study emphasizes the core product flows while summarizing the broader site system.</p>
    </div>
    <p style={{ textAlign: "center", margin: "12px 0 8px" }}><span className="tks-chip" style={{ borderColor: "#111", fontWeight: 700 }}>30 public routes</span></p>
    <div style={{ borderTop: "1.4px solid #111", margin: "0 6px 10px", position: "relative" }} aria-hidden="true">
      {[8, 22, 36, 50, 64, 92].map((x) => <span key={x} style={{ position: "absolute", left: `${x}%`, top: -1, width: 1.4, height: 8, background: "#111" }} />)}
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(7, 1fr)", alignItems: "stretch", gap: 8 }}>
      {famCard(ROUTE_FAMILIES[0], 0)}
      {famCard(ROUTE_FAMILIES[1], 1)}
      {famCard(ROUTE_FAMILIES[2], 2)}
      {famCard(ROUTE_FAMILIES[3], 3)}
      {famCard(ROUTE_FAMILIES[4], 4)}
      <div className="tks-card" style={{ borderStyle: "dashed", padding: "9px 10px" }}>
        <p style={{ fontWeight: 700, margin: "0 0 6px", fontSize: 12 }}>Careers detail</p>
        {careers.map((c) => <p key={c} style={{ margin: "4px 0", fontSize: 10.6, lineHeight: 1.35 }}>◉ {c}</p>)}
        <p style={{ color: "#777", fontSize: 9.8, margin: "7px 0 0" }}>Detail expansion of Institution → Careers.</p>
      </div>
      {famCard(ROUTE_FAMILIES[5], 5)}
    </div>
    <p style={{ margin: "9px 0 0", color: "#555", fontSize: 11 }}>Legend: ⟶ Primary grouping · ┄⟶ Supporting connection · dashed box = Detail expansion. <span aria-live="polite">Selected family: <b>{ROUTE_FAMILIES[active].name}</b> — {ROUTE_FAMILIES[active].audience}.</span></p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_14 — Navigation priorities (dark) ---------------- */

const NAV_PRIORITIES = [
  { n: 1, name: "Orientation", body: "Users immediately understand where they are and how the system is organized.", panel: "Desktop global header" },
  { n: 2, name: "Progressive disclosure", body: "We reveal depth and detail only when users need it, reducing cognitive load.", panel: "Mobile menu (collapsed)" },
  { n: 3, name: "Route depth", body: "Clear hierarchy shows users how deep they are and how to get back.", panel: "Breadcrumb pattern (deep routes)" },
  { n: 4, name: "Consistency", body: "Consistent patterns across products, docs, and legal build trust and speed.", panel: "Local table of contents · Footer taxonomy" },
];
const NAV_GROUPS: Record<string, string[]> = {
  Product: ["Overview", "Features", "Security", "Pricing", "Status"],
  Developers: ["API Overview", "SDKs & Libraries", "Guides", "Reference", "Status"],
  Institution: ["For Institutions", "Risk & Compliance", "Data & Reports", "Case Studies", "Contact Sales"],
  Docs: ["Getting Started", "Guides", "Reference", "Support"],
  Legal: ["Terms of Use", "Privacy Policy", "Security", "Disclosures", "Legal Notices"],
};

export function TokentaNavigationPriorities() {
  const [active, setActive] = useState(0);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>("Developers");
  const [crumb, setCrumb] = useState("Dispute resolution");
  const [toc, setToc] = useState("Overview");
  const crumbs = ["Docs", "Guides", "Escrow", "Lifecycle", "Dispute resolution"];
  const panel: React.CSSProperties = { background: "#141416", border: "1px solid #2c2d30", borderRadius: 8, padding: "9px 12px" };
  const cap: React.CSSProperties = { color: "#9a9aa0", fontSize: 10.3, lineHeight: 1.5, margin: 0 };
  return <div className="tks tks--dark" role="region" aria-label="Tokenta navigation priorities — interactive rebuild of Tokenta_14">
    <Head n="14." kicker="Navigation priorities" />
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.25fr", alignItems: "start" }}>
      <div><h3 style={{ marginTop: 8 }}>Navigation priorities.</h3>
      <p className="tks-lede" style={{ margin: 0 }}>The navigation system had to serve both broad public exploration and deep institutional reading.</p></div>
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 14 }}>
        <div style={panel}><b style={{ fontSize: 12 }}>📌 Sticky by design.</b><p style={{ ...cap, marginTop: 4 }}>Primary (global) navigation is sticky across scroll and routes. Local navigation (TOC) is sticky within content containers.</p></div>
        <div style={panel}><b style={{ fontSize: 12 }}>▯ Responsive behavior.</b><p style={{ ...cap, marginTop: 4 }}>Desktop ≥ 1024px shows the full global header. Mobile &lt; 1024px collapses to a menu.</p></div>
      </div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "178px 1fr", marginTop: 12 }}>
      <div style={{ display: "grid", gap: 8, alignContent: "space-between" }}>
        {NAV_PRIORITIES.map((p, i) => <button key={p.n} type="button" className={`tks-card${i === active ? " is-on" : ""}`} style={{ padding: "9px 11px" }} aria-pressed={i === active} onClick={() => setActive(i)}>
          <span className="tks-num tks-num--light" style={{ width: 20, height: 20, fontSize: 11 }}>{p.n}</span> <b style={{ fontSize: 12.5 }}>{p.name}</b>
          <p style={{ color: "#b9b9be", margin: "5px 0 0", fontSize: 10.3, lineHeight: 1.45 }}>{p.body}</p>
        </button>)}
      </div>
      <div style={{ display: "grid", gap: 8, alignContent: "start" }}>
        <div style={panel} aria-label="Desktop global header demo">
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 12.5 }}>Desktop global header</p>
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", border: "1px solid #333438", borderRadius: 7, padding: "6px 11px" }}>
                <b>⌂ TOKENTA</b>
                {Object.keys(NAV_GROUPS).map((g) => <button key={g} type="button" className="tks-chip" style={{ padding: "2px 8px", fontSize: 11 }} aria-pressed={openGroup === g} onClick={() => setOpenGroup(openGroup === g ? null : g)}>{g} ▾</button>)}
                <span style={{ marginLeft: "auto" }}>⌕ <span className="tks-btn" style={{ padding: "2px 9px", fontSize: 11 }}>Launch app ↗</span></span>
              </div>
              {openGroup && <p style={{ margin: "6px 0 0", color: "#c9c9ce", fontSize: 11 }}>{openGroup}: {NAV_GROUPS[openGroup].join(" · ")}</p>}
            </div>
            <p style={{ ...cap, flex: "0 0 168px" }}>Primary entry to all major sections. Persistent across the platform for context and continuity.</p>
          </div>
        </div>
        <div style={panel} aria-label="Mobile menu demo">
          <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 12.5 }}>Mobile menu (collapsed)</p>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ border: "1px solid #333438", borderRadius: 7, padding: "6px 10px", display: "flex", gap: 26, alignItems: "center" }}><b>⌂ TOKENTA</b><span aria-hidden="true">☰</span></div>
            <div style={{ border: "1px solid #333438", borderRadius: 7, padding: "6px 10px", minWidth: 168 }}>
              {Object.keys(NAV_GROUPS).map((g) => <button key={g} type="button" className="tks-node" style={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 3, padding: "3px 7px", fontSize: 11 }} aria-pressed={mobileGroup === g} onClick={() => setMobileGroup(g)}><span>{g}</span><span>›</span></button>)}
              <p style={{ margin: "3px 0 0", fontSize: 11 }}>Launch app ↗</p>
            </div>
            <p style={{ ...cap, flex: "1 1 130px" }}>Stacked route groups with expandable sections. Deep links appear within groups to guide discovery without overwhelming the user.</p>
            {mobileGroup && <div style={{ border: "1px solid #333438", borderRadius: 7, padding: "6px 10px", minWidth: 168 }}>
              <p style={{ margin: "0 0 4px", fontSize: 11 }}>‹ <b>Example: {mobileGroup} group</b></p>
              {NAV_GROUPS[mobileGroup].map((r) => <p key={r} style={{ margin: "2px 0", color: "#c9c9ce", fontSize: 11 }}>{r}</p>)}
            </div>}
            <p style={{ ...cap, flex: "1 1 130px" }}>Users drill into groups for contextual sub-routes. Back button preserves mental model and location.</p>
          </div>
        </div>
        <div style={panel} aria-label="Breadcrumb pattern demo">
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 12.5 }}>Breadcrumb pattern (deep routes)</p>
              <p style={{ margin: 0, border: "1px solid #333438", borderRadius: 7, padding: "5px 10px", fontSize: 11.5 }}>⌂ {crumbs.map((c) => <span key={c}> › <button type="button" className="tks-chip" style={{ padding: "1px 7px", fontSize: 11 }} aria-pressed={crumb === c} onClick={() => setCrumb(c)}>{c}</button></span>)}</p>
            </div>
            <p style={{ ...cap, flex: "0 0 190px" }}>Shows location within the information architecture and provides quick paths back to higher levels. Current: <b style={{ color: "#fff" }}>{crumb}</b></p>
          </div>
        </div>
        <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.25fr" }}>
          <div style={panel} aria-label="Local table of contents demo">
            <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 12.5 }}>Local table of contents (long-form docs &amp; legal)</p>
            <div style={{ display: "flex", gap: 12 }}>
              <div>
                <p className="tks-kicker" style={{ fontSize: 9, margin: "0 0 4px" }}>On this page</p>
                {["Overview", "How it works", "Requirements", "Process", "Examples", "Related references"].map((t) => <button key={t} type="button" className="tks-chip" style={{ display: "block", marginBottom: 3, padding: "1px 7px", fontSize: 10.5 }} aria-pressed={toc === t} onClick={() => setToc(t)}>{t}</button>)}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: "0 0 5px", fontWeight: 700, fontSize: 12 }}>{toc}</p>
                {[92, 100, 78, 96, 60].map((w, i) => <span key={i} style={{ display: "block", height: 4, background: "#333438", borderRadius: 2, marginBottom: 5, width: `${w}%` }} />)}
                <p style={{ ...cap, marginTop: 7 }}>Sticky local TOC helps users scan, jump, and maintain context in long-form content.</p>
              </div>
            </div>
          </div>
          <div style={panel} aria-label="Footer taxonomy">
            <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 12.5 }}>Footer taxonomy</p>
            <div className="tks-grid" style={{ gridTemplateColumns: "repeat(5, 1fr) 0.9fr" }}>
              {Object.entries(NAV_GROUPS).map(([g, items]) => <div key={g}><b style={{ fontSize: 11 }}>{g}</b>{items.map((it) => <p key={it} style={{ margin: "2px 0", color: "#b9b9be", fontSize: 9.8, lineHeight: 1.4 }}>{it}</p>)}</div>)}
              <div><b style={{ fontSize: 11 }}>⌂ TOKENTA</b><p style={{ color: "#9a9aa0", fontSize: 9.5, margin: "4px 0 0", lineHeight: 1.5 }}>© 2025 Tokenta, Inc. All rights reserved.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p style={{ color: "#9a9aa0", margin: "9px 0 0", fontSize: 11.5 }} aria-live="polite">Priority in focus: <b style={{ color: "#fff" }}>{NAV_PRIORITIES[active].n}. {NAV_PRIORITIES[active].name}</b> — demonstrated by: {NAV_PRIORITIES[active].panel}.</p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_15 — Content template system ---------------- */

const TEMPLATES = [
  { n: 1, name: "Product detail", sub: "Showcase a tokenized product, its structure, terms, and how to access it.", toc: true, varies: "Product metadata, key stats, risk highlights, documents, and actions.", blocks: ["Page hero", "Summary", "Body grid + Data panel (sticky)", "CTA / Actions", "Footer"] },
  { n: 2, name: "Developer detail", sub: "Document an API, guide integration, and provide technical references.", toc: true, varies: "Endpoint schemas, code samples, integration guides, and changelogs.", blocks: ["Page hero", "Summary", "Body grid (docs/content) + Data panel (endpoints, params)", "CTA / Actions", "Footer"] },
  { n: 3, name: "Institutional detail", sub: "Build trust with transparency, governance, and on-chain verification.", toc: false, varies: "Governance, attestations, reserves, audits, and verification artifacts.", blocks: ["Page hero", "Summary (key facts)", "Body grid + Data panel (verification, metrics)", "CTA / Actions", "Footer"] },
  { n: 4, name: "Career detail", sub: "Attract talent with role clarity, mission, and benefits.", toc: false, varies: "Role responsibilities, qualifications, benefits, and locations.", blocks: ["Page hero", "Summary (role snapshot)", "Body grid (role details) + Data panel (role facts)", "CTA / Actions (Apply / Refer)", "Footer"] },
  { n: 5, name: "Legal detail", sub: "Publish legal terms, policies, and compliance information.", toc: true, varies: "Legal document sections, jurisdiction, applicability, and references.", blocks: ["Page hero", "Summary", "Body grid (legal content)", "CTA / Actions (Download / Contact)", "Footer"] },
];
const SHARED_LAYER = [
  ["Header", "Persistent global navigation with logo, primary links, and key actions."],
  ["Spacing system", "8px base unit. Scales: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px."],
  ["Content grid", "12-column responsive grid with 24px gutters and max content width."],
  ["Typography", "Inter variable font. Scale: 12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 48."],
  ["CTA logic", "Primary action is always visible. Contextual secondary actions."],
  ["Footer", "Standardized footer with links, resources, and legal shortcuts."],
];

export function TokentaContentTemplates() {
  const [active, setActive] = useState(0);
  const [block, setBlock] = useState<string | null>(null);
  const t = TEMPLATES[active];
  const lines = (n: number, w: number[] = [100, 92, 96, 70]) => <span>{Array.from({ length: n }, (_, i) => <span key={i} style={{ display: "block", height: 3.5, background: "#d8d8d2", borderRadius: 2, marginBottom: 3.5, width: `${w[i % w.length]}%` }} />)}</span>;
  const blk = (label: string, children?: React.ReactNode, flex?: string) => <button type="button" aria-pressed={block === label} onClick={() => setBlock(label)} style={{ flex: flex ?? undefined, width: flex ? undefined : "100%", border: block === label ? "1.4px solid #111" : "1px solid #d8d8d2", borderRadius: 4, background: block === label ? "#ececea" : "#fbfbf9", padding: "4px 5px", font: "inherit", fontSize: 8.8, color: "#555", cursor: "pointer", textAlign: "center", minWidth: 0 }}>{label}{children}</button>;
  const wireframe = (tp: (typeof TEMPLATES)[number]) => <div style={{ display: "grid", gap: 4 }}>
    {blk("Page hero")}
    {blk(tp.n === 3 ? "Summary (key facts)" : tp.n === 4 ? "Summary (role snapshot)" : "Summary")}
    <span style={{ display: "flex", gap: 4, alignItems: "stretch" }}>
      {tp.toc && <span style={{ flex: "0 0 21%", border: "1px solid #e2e2de", borderRadius: 4, padding: "3px 4px", fontSize: 8, color: "#777", textAlign: "left" }}>Local TOC<br />(on this page){lines(4, [90, 75, 85, 60])}</span>}
      <span style={{ flex: 1, border: "1px solid #e2e2de", borderRadius: 4, padding: "4px 5px", minWidth: 0 }}>
        <span style={{ display: "block", fontSize: 8.8, color: "#555", textAlign: "center", marginBottom: 3 }}>{tp.n === 2 ? "Body grid (docs/content)" : tp.n === 4 ? "Body grid (role details)" : tp.n === 5 ? "Body grid (legal content)" : "Body grid"}</span>
        {tp.n === 3 ? <span style={{ display: "flex", gap: 3 }}>{["🛡", "🔒", "🏛"].map((g) => <span key={g} style={{ flex: 1, border: "1px solid #e2e2de", borderRadius: 3, padding: "2px 0", textAlign: "center", fontSize: 10 }}>{g}</span>)}</span> : tp.n === 4 ? <span style={{ textAlign: "left" }}>{"• • • •".split(" ").map((d, i) => <span key={i} style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 3 }}><span>•</span><span style={{ flex: 1, height: 3.5, background: "#d8d8d2", borderRadius: 2 }} /></span>)}</span> : lines(3)}
      </span>
      {tp.n !== 5 && <span style={{ flex: "0 0 27%", border: "1px solid #e2e2de", borderRadius: 4, padding: "3px 4px", fontSize: 8, color: "#777", textAlign: "left" }}>Data panel<br />{tp.n === 1 ? "(sticky)" : tp.n === 2 ? "(endpoints, params)" : tp.n === 3 ? "(verification, metrics)" : "(role facts)"}{lines(3, [85, 70, 80])}</span>}
    </span>
    {blk(tp.n === 4 ? "CTA / Actions (Apply / Refer)" : tp.n === 5 ? "CTA / Actions (Download / Contact)" : "CTA / Actions")}
    {blk("Footer")}
  </div>;
  return <div className="tks" role="region" aria-label="Tokenta content template system — interactive rebuild of Tokenta_15">
    <Head n="15" kicker="Content template system" />
    <h3>Content template system.</h3>
    <p className="tks-lede">Five reusable page templates created breadth without turning the site into one-off pages.</p>
    <p className="tks-kicker">Five content template archetypes</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", alignItems: "start" }}>
      {TEMPLATES.map((tp, i) => <div key={tp.n} className={`tks-card${i === active ? " is-on" : ""}`} style={{ padding: "9px 9px", cursor: "pointer" }} role="button" tabIndex={0} aria-pressed={i === active} onClick={() => setActive(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}>
        <p style={{ margin: "0 0 3px" }}><span className="tks-num" style={{ width: 20, height: 20, fontSize: 11 }}>{tp.n}</span> <b style={{ fontSize: 12.3 }}>{tp.name}</b></p>
        <p style={{ color: "#555", fontSize: 9.8, margin: "0 0 7px", lineHeight: 1.4 }}>{tp.sub}</p>
        {wireframe(tp)}
        <p style={{ fontSize: 9.5, color: "#666", margin: "7px 0 0", lineHeight: 1.45 }}><b>Varies:</b> {tp.varies}</p>
      </div>)}
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Shared layer (consistent across all templates)</p>
    <div className="tks-card" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, padding: "10px 12px" }}>
      {SHARED_LAYER.map(([n, b], i) => <div key={n} style={{ borderLeft: i === 0 ? undefined : "1px solid #e8e8e4", paddingLeft: i === 0 ? 0 : 10 }}>
        <p style={{ fontSize: 15, margin: "0 0 3px" }} aria-hidden="true">{["☰", "▦", "⊞", "Aa", "➤", "☰"][i]}</p>
        <p style={{ margin: 0, fontSize: 11 }}><b>{n}</b></p>
        <p style={{ margin: "2px 0 0", fontSize: 9.8, color: "#555", lineHeight: 1.45 }}>{b}</p>
      </div>)}
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 9 }}>
      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}><b>What varies by template</b> — Content structure, data modules, terminology, and actions tailored to the page's purpose and audience.</p>
      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}><b>What stays shared</b> — Navigation, layout system, components, tone, and trust signals ensure consistency and clarity across the platform.</p>
      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}><b>Built for scale</b> — Reusable templates speed up content creation while preserving a coherent experience across every page.</p>
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 11.5 }} aria-live="polite">Template in focus: <b>{t.n}. {t.name}</b>{t.toc ? " — includes Local TOC (on this page)" : ""}{block ? <> · Block: <b>{block}</b></> : ""}</p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_21 — Density study ---------------- */

const DENSITY = [
  { n: 1, name: "Low density", sub: "Too sparse and marketing-like.", stats: [["Total assets", "18.50B TKA"], ["Active assets", "359"], ["Datasets", "241"], ["Verified assets", "92%"]], scores: [["Scan speed", "Slow — too much white space."], ["Trust signal", "Low — feels promotional."], ["Mobile risk", "Weak — limited context."]], hero: "Institutional data infrastructure. Trusted data. Clear access. Built for institutions. [Explore platform]" },
  { n: 2, name: "Balanced density", sub: "Scannable, trustworthy, and decision-ready.", selected: true, stats: [["Total assets", "18.50B TKA ↑ 12.4%"], ["Active assets", "359 ↑ 8.1%"], ["Unique buyers", "241 ↑ 15.7%"], ["Escrow volume", "18.50B TKA ↑ 9.6%"], ["Dispute rate", "0.42% ↓ 1.2%"]], scores: [["Scan speed", "Fast — clear hierarchy."], ["Trust signal", "High — evidence up front."], ["Decision support", "Moderate — collapsible sections handle well."]], hero: "Activity feed · Volume over time (7D 30D 90D 1Y) · Top asset types: Models 49%, Datasets 22%, Agents 15%, Tools 8%, Eval Suites 6% · Trading volume 2.41M TKA ↑ 12.4% · Recent assets table (Llama-3.1-70B-Instruct 125,000 · CodeTrove-22M 18,500 · VisionPro-Agent 42,000 · MathEval-1.0 7,250)" },
  { n: 3, name: "High density", sub: "Powerful but overwhelming.", stats: [["Total assets", "18.50B TKA"], ["Active assets", "359"], ["Unique buyers", "241"], ["Escrow volume", "18.50B TKA"], ["Dispute rate", "0.42%"], ["Arbitrations", "127"], ["Attestations", "5,317"]], scores: [["Scan speed", "Slow — cognitive overload."], ["Trust signal", "High — rich data."], ["Decision support", "Mixed — hard to find focus."], ["Mobile risk", "High — not suitable."]], hero: "Markets snapshot: Floor price (TKA) 65,200 ↑ 2.2% · Median price (TKA) 18,750 ↑ 1.7% · Daily volume (TKA) 2.41M ↑ 12.4% · Sales (T/D) 1,642 ↑ 9.1% · Buyers (T/D) 241 ↑ 11.3% · Verification: Verified 1,642 · Verified by Tokenta Verifiers 982 · Verified on May 13, 2025 · Attestations 5 of 7" },
];

export function TokentaDensityStudy() {
  const [active, setActive] = useState(1);
  const recent: Array<[string, string, string]> = [["Llama-3.1-70B-Instruct", "Model", "125,000"], ["CodeTrove-22M", "Dataset", "18,500"], ["VisionPro-Agent", "Agent", "42,000"], ["MathEval-1.0", "Eval Suite", "7,250"]];
  const chart = (pts: string, h: number = 44) => <svg viewBox={`0 0 200 ${h}`} style={{ width: "100%", height: h, display: "block" }} aria-hidden="true"><polyline points={pts} fill="none" stroke="#555" strokeWidth="1.3" /></svg>;
  const miniHead = <p style={{ margin: "0 0 6px", display: "flex", gap: 8, alignItems: "center", fontSize: 8.6, color: "#666", borderBottom: "1px solid #e8e8e4", paddingBottom: 5 }}><b style={{ color: "#111", fontSize: 9.5 }}>⌂ TOKENTA</b><span>Product · Developers · Institution ▾ · Docs ▾ · Legal ▾</span><span style={{ marginLeft: "auto", border: "1px solid #c9c9c4", borderRadius: 4, padding: "1px 6px" }}>Launch app ▾</span></p>;
  const tiles = (dd: (typeof DENSITY)[number], max: number) => <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(dd.stats.length, max)}, 1fr)`, gap: 4 }}>
    {dd.stats.slice(0, max).map(([k, v]) => <span key={k} style={{ border: "1px solid #e8e8e4", borderRadius: 4, padding: "3px 5px" }}><span style={{ display: "block", fontSize: 7.8, color: "#888", textTransform: "uppercase", letterSpacing: ".03em" }}>{k}</span><b style={{ fontSize: 10.5 }}>{v}</b></span>)}
  </div>;
  const recentTable = (dense: boolean) => <table className="tks-table tks-table--micro" style={{ fontSize: dense ? 8.4 : 9 }}>
    <thead><tr><th>Asset</th><th>Type</th><th>Price (TKA)</th><th>Verified</th></tr></thead>
    <tbody>{recent.map(([a, ty, p]) => <tr key={a}><td style={{ whiteSpace: "nowrap", overflow: "hidden" }}>{a}</td><td>{ty}</td><td>{p}</td><td>◎</td></tr>)}</tbody></table>;
  const bodies: React.ReactNode[] = [
    <div key="low">
      <p style={{ fontSize: 15.5, fontWeight: 800, lineHeight: 1.25, margin: "8px 0 4px" }}>Institutional<br />data infrastructure.</p>
      <p style={{ fontSize: 9.8, color: "#555", margin: "0 0 6px" }}>Trusted data. Clear access.<br />Built for institutions.</p>
      <span className="tks-btn" style={{ padding: "3px 10px", fontSize: 10 }}>Explore platform</span>
      <div style={{ marginTop: 8 }}>{chart("0,38 30,30 60,34 90,18 120,24 150,8 199,14", 42)}</div>
      <div style={{ marginTop: 7 }}>{tiles(DENSITY[0], 4)}</div>
      <p style={{ fontSize: 9, color: "#666", margin: "7px 0 0" }}><b style={{ color: "#111" }}>Recent activity</b> — Asset “Llama-3.1-70B-Instruct” listed · 2m ago · Escrow deal_01H8Z…7G9P1 locked · 5m ago · Attestation created for CodeTrove-22M · 18m ago</p>
    </div>,
    <div key="bal">
      <div style={{ marginTop: 2 }}>{tiles(DENSITY[1], 5)}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr 0.85fr", gap: 6, marginTop: 7 }}>
        <span><b style={{ fontSize: 9 }}>Activity feed</b>{["Asset “Llama-3.1-70B-Instruct” listed · 2m ago", "Escrow deal_01H8Z…7G9P1 locked · 5m ago", "Quorum completed · 12m ago", "Dispute opened · 18m ago", "Attestation created for CodeTrove-22M · 22m ago"].map((a) => <span key={a} style={{ display: "block", fontSize: 8.4, color: "#555", marginTop: 2.5 }}>○ {a}</span>)}</span>
        <span><b style={{ fontSize: 9 }}>Volume over time</b> <span style={{ fontSize: 7.8, color: "#888" }}>7D 30D 90D 1Y</span>{chart("0,36 25,30 50,33 75,22 100,26 125,14 150,18 175,8 199,11", 40)}<span style={{ fontSize: 8.4, color: "#555" }}>Trading volume <b style={{ color: "#111" }}>2.41M TKA</b> ↑ 12.4% · Escrow volume <b style={{ color: "#111" }}>18.50B TKA</b> ↑ 9.6%</span></span>
        <span style={{ textAlign: "center" }}><b style={{ fontSize: 9 }}>Top asset types</b><svg viewBox="0 0 40 40" style={{ width: 52, height: 52, display: "block", margin: "3px auto" }} aria-hidden="true"><circle cx="20" cy="20" r="14" fill="none" stroke="#d8d8d2" strokeWidth="6" /><circle cx="20" cy="20" r="14" fill="none" stroke="#555" strokeWidth="6" strokeDasharray="43 88" transform="rotate(-90 20 20)" /></svg><span style={{ fontSize: 8.2, color: "#555" }}>Models 49% · Datasets 22% · Agents 15% · Tools 8% · Eval Suites 6%</span></span>
      </div>
      <p style={{ fontSize: 9, margin: "7px 0 3px" }}><b>Recent assets</b></p>
      {recentTable(false)}
    </div>,
    <div key="high">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4, marginTop: 2 }}>
        {DENSITY[2].stats.map(([k, v]) => <span key={k} style={{ border: "1px solid #e8e8e4", borderRadius: 4, padding: "3px 5px", minWidth: 0 }}><span style={{ display: "block", fontSize: 7.4, color: "#888", textTransform: "uppercase", letterSpacing: ".02em" }}>{k}</span><b style={{ fontSize: 10 }}>{v}</b></span>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginTop: 7 }}>
        <span><b style={{ fontSize: 8.8 }}>Activity feed</b>{["Asset listed · 2m", "Escrow locked · 5m", "Quorum completed · 12m", "Dispute opened · 18m", "Attestation created · 22m"].map((a) => <span key={a} style={{ display: "block", fontSize: 8.2, color: "#555", marginTop: 2 }}>○ {a}</span>)}<b style={{ fontSize: 8.8, display: "block", marginTop: 5 }}>Top asset types</b><span style={{ fontSize: 8.2, color: "#555" }}>Models 49% · Datasets 22% · Agents 15% · Tools 8% · Eval Suites 6%</span></span>
        <span><b style={{ fontSize: 8.8 }}>Volume over time</b>{chart("0,34 20,28 40,31 60,20 80,24 100,15 120,19 140,10 160,13 180,7 199,9", 38)}<b style={{ fontSize: 8.8, display: "block", marginTop: 4 }}>Geography (buyers)</b><span style={{ fontSize: 8.2, color: "#555" }}>US 32% · SG 18% · GB 11% · DE 7% · Other 32%</span></span>
        <span><b style={{ fontSize: 8.8 }}>Markets snapshot</b>{[["Floor price (TKA)", "65,200 ↑ 2.2%"], ["Median price (TKA)", "18,750 ↑ 1.7%"], ["Daily volume (TKA)", "2.41M ↑ 12.4%"], ["Sales (T/D)", "1,642 ↑ 9.1%"], ["Buyers (T/D)", "241 ↑ 11.3%"]].map(([k, v]) => <span key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 8.2, color: "#555", marginTop: 2 }}><span>{k}</span><b style={{ color: "#111" }}>{v}</b></span>)}<b style={{ fontSize: 8.8, display: "block", marginTop: 5 }}>Verification</b><span style={{ fontSize: 8.2, color: "#555" }}>Verified 1,642 · Verified by Tokenta Verifiers 982 · Verified on May 13, 2025 · Attestations 5 of 7</span></span>
      </div>
      <p style={{ fontSize: 8.8, margin: "7px 0 3px" }}><b>Recent assets</b> <span style={{ color: "#888" }}>Showing 1–5 of 359 assets</span></p>
      {recentTable(true)}
    </div>,
  ];
  return <div className="tks" role="region" aria-label="Tokenta density study — interactive rebuild of Tokenta_21">
    <Head n="21" kicker="Density study" />
    <h3>Density study.</h3>
    <p className="tks-lede">Three information-density directions were tested before selecting the institutional balance.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", alignItems: "start" }}>
      {DENSITY.map((dd, i) => <div key={dd.n} className={`tks-card${i === active ? " is-on" : ""}`} style={{ padding: "10px 11px", cursor: "pointer" }} role="button" tabIndex={0} aria-pressed={i === active} onClick={() => setActive(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}>
        <p style={{ margin: 0 }}><span className="tks-num" style={{ width: 20, height: 20, fontSize: 11 }}>{dd.n}</span> <b style={{ fontSize: 13 }}>{dd.name}</b>{dd.selected ? <span className="tks-tag" style={{ marginLeft: 6, fontSize: 9.5 }}>Selected direction</span> : null}</p>
        <p style={{ color: "#555", margin: "3px 0 8px", fontSize: 10.8 }}>{dd.sub}</p>
        <div style={{ border: "1px solid #e2e2de", borderRadius: 6, padding: "7px 8px" }}>{miniHead}{bodies[i]}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 10px", marginTop: 8 }}>
          {dd.scores.map(([k, v]) => <p key={k} style={{ margin: 0, fontSize: 9.6, lineHeight: 1.45 }}><b>{k}</b><br /><span style={{ color: "#555" }}>{v}</span></p>)}
        </div>
      </div>)}
    </div>
    <div className="tks-detail" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
      <span><b>Data first</b> — Lead with verified metrics and activity, not marketing statements.</span>
      <span><b>Legible hierarchy</b> — Every screen has a clear reading order and visual weight.</span>
      <span><b>Evidence visible</b> — Trust signals and provenance are always one glance away.</span>
      <span><b>Density changes by context</b> — Desktop, mobile, and task depth dictate the right level of density.</span>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_22 — Verification six stages (printed № 30) ---------------- */

const SIX_STAGES = [
  { n: 1, name: "Submission", sub: "Contributor submits a product for verification.", panel: "Upload package — Drag & drop files or choose folder. Files: specs.pdf 2.4 MB · bom.json 18 KB · tests.zip 1.1 MB · readme.md 6 KB. [Submit for verification]", output: "Files uploaded and submission recorded." },
  { n: 2, name: "Provenance hash", sub: "Files are normalized and hashed for integrity.", panel: "Provenance record — Submission ID SUB-8F7A2C · Timestamp May 12, 2025 10:42 UTC · Root hash (SHA-256) 9b6e1d3f0a2c8e4b7f6d9a1c 2e8b5f9c0d7a3e1b5c9d2f6a · Merkle tree over the four files.", output: "Hashes recorded on-chain with timestamp." },
  { n: 3, name: "Static audit", sub: "Automated policy and code checks run at the edge.", panel: "Policy checks — License compliance ✓ · Vulnerability scan ✓ · Dependency integrity ✓ · Secret scanning ✓ · SBOM validity ✓ · Spec conformance ⚠. Result: Passed — 6 / 7 checks passed.", output: "Policy and code checks with pass/fail results." },
  { n: 4, name: "Behavioral probe", sub: "System under test is probed in a controlled environment.", panel: "Probe results — Test suite 42 / 42 passed ✓ · Performance Within SLO ✓ · Security posture No critical issues ✓ · Resilience Degraded graceful ✓ · Uptime (24h) 99.98% ✓ · Latency p95 (ms) chart 00:00–24:00.", output: "Probe evidence and runtime measurements." },
  { n: 5, name: "Attestor quorum", sub: "Independent attestors review and sign the evidence.", panel: "Attestor signatures 3 / 3 — A1 Attestor One, May 12, 2025 11:15 UTC ✓ · A2 Attestor Two, May 12, 2025 11:18 UTC ✓ · A3 Attestor Three, May 12, 2025 11:22 UTC ✓. Threshold 3 of 3.", output: "Quorum signatures anchored on-chain." },
  { n: 6, name: "Listing", sub: "Verified artifact is eligible for trusted listing.", panel: "Verification summary — Status: Verified · Verification ID VER-3C9E7B · Submitted May 12, 2025 10:42 UTC · Attested May 12, 2025 11:22 UTC · Valid until May 12, 2026. [Ready for listing ✓]", output: "Verified and listing-ready with trust context." },
];
const MACHINE_VERIFIABLE = [
  ["Immutable inputs", "Files normalized and hashed at submission."],
  ["Deterministic checks", "Policies and scanners produce consistent results."],
  ["Observable evidence", "Probes generate measurable, time-stamped data."],
  ["Cryptographic attestations", "Independent attestors sign over the full evidence bundle."],
  ["On-chain anchoring", "Hashes and signatures anchored for tamper evidence."],
];

export function TokentaVerificationSixStages() {
  const [active, setActive] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  return <div className="tks" role="region" aria-label="Tokenta verification six stages — interactive rebuild of Tokenta_22">
    <Head n="30" kicker="Verification six stages" />
    <h3>Verification six stages.</h3>
    <p className="tks-lede">The moat becomes legible when verification is visualized as a structured pipeline.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(6, 1fr) 0.92fr", gap: 7, alignItems: "stretch" }} role="group" aria-label="All six verification stage panels">
      {SIX_STAGES.map((st, i) => <div key={st.n} className={`tks-card${i === active ? " is-on" : ""}`} style={{ padding: "9px 9px", cursor: "pointer", display: "flex", flexDirection: "column" }} role="button" tabIndex={0} aria-pressed={i === active} onClick={() => setActive(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}>
        <p style={{ margin: 0 }}><span className="tks-num" style={{ width: 20, height: 20, fontSize: 11 }}>{st.n}</span> <b style={{ fontSize: 11.8, lineHeight: 1.3 }}>{st.name}</b></p>
        <p style={{ color: "#555", fontSize: 9.6, margin: "4px 0 7px", lineHeight: 1.45 }}>{st.sub}</p>
        <div style={{ border: "1px solid #e2e2de", borderRadius: 6, padding: "6px 7px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 8.6, lineHeight: 1.55, whiteSpace: "pre-wrap", flex: 1 }}>{st.panel}</div>
        {i === 0 && <button type="button" className="tks-btn" style={{ marginTop: 6, padding: "3px 8px", fontSize: 10.5 }} aria-pressed={submitted} onClick={(e) => { e.stopPropagation(); setSubmitted((v) => !v); }}>{submitted ? "Submitted ✓" : "Submit for verification"}</button>}
        <p style={{ margin: "7px 0 0", fontSize: 9.6, lineHeight: 1.45, borderTop: "1px solid #e8e8e4", paddingTop: 6 }}><b>Output</b> — {st.output}</p>
      </div>)}
      <div className="tks-card" style={{ padding: "9px 10px", borderStyle: "dashed" }}>
        <p style={{ fontWeight: 700, margin: "0 0 7px", fontSize: 12, lineHeight: 1.35 }}>What makes each stage machine-verifiable.</p>
        {MACHINE_VERIFIABLE.map(([n, b]) => <p key={n} style={{ margin: "0 0 8px", fontSize: 10, lineHeight: 1.45 }}><b>{n}</b><br /><span style={{ color: "#555" }}>{b}</span></p>)}
      </div>
    </div>
    <div className="tks-note" style={{ marginTop: 10 }}>
      <span style={{ fontWeight: 800, fontSize: 14 }}>Why this<br />matters</span>
      <span><b>Verification is reproducible</b> — Anyone can re-run checks and confirm the same outcome from the same inputs.</span>
      <span><b>Evidence persists across the trade</b> — Proof, results, and signatures stay with the artifact wherever it goes.</span>
      <span><b>Listings inherit trust context</b> — Buyers and integrators see verified facts, not marketing claims.</span>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_23 — Component library (printed № 22) ---------------- */

const TERMINAL_LOG = ["12:42:18  ▶ Verify asset Llama-3.1-70B-Instruct", "12:42:19  ✓ Signature valid", "12:42:19  ✓ On-chain attestation found", "12:42:20  ✓ Provenance verified", "12:42:20  ✓ Status set to Verified"];
const BADGES = ["Verified", "Pending", "Disputed", "Draft", "Locked", "Released", "Settled", "Archived"];
const EVIDENCE_ROWS = [["Model card", "PDF · 1.2 MB", "Verified"], ["Dataset schema", "JSON · 48 KB", "Verified"], ["Training log", "LOG · 320 KB", "Pending"], ["License", "PDF · 210 KB", "Verified"]];
const TIMELINE = [["Verified", "May 13, 2025 14:32 UTC", "Asset verified on-chain."], ["Attested", "May 12, 2025 09:18 UTC", "Attestation recorded."], ["Pending", "May 11, 2025 16:41 UTC", "Awaiting data validation."], ["Created", "May 10, 2025 11:03 UTC", "Asset submitted."]];
const TABLE_ROWS = [["Llama-3.1-70B-Instruct", "Model", "125,000", "2.41M", "Verified"], ["CodeTrove-22M", "Dataset", "18,500", "892K", "Verified"], ["VisionPro-Agent", "Agent", "42,000", "1.12M", "Pending"], ["MathEval-1.0", "Eval Suite", "7,250", "312K", "Disputed"]];

export function TokentaComponentLibrary() {
  const [badge, setBadge] = useState("Verified");
  const [applied, setApplied] = useState(false);
  const [logLive, setLogLive] = useState(true);
  const [cta, setCta] = useState<string | null>(null);
  return <div className="tks" role="region" aria-label="Tokenta component library — interactive rebuild of Tokenta_23">
    <Head n="22" kicker="Component library" />
    <h3>Component library.</h3>
    <p className="tks-lede">A small reusable set of interface primitives made dense financial screens consistent and scalable.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <div className="tks-card"><b>Metric tile</b>
        <p style={{ margin: "8px 0 2px" }}>Total Assets<br /><b style={{ fontSize: 17 }}>359</b><br /><span style={{ color: "#137a3f" }}>vs last 30d ↑ 8.1%</span></p>
        <p style={{ margin: "2px 0" }}>Escrow volume<br /><b style={{ fontSize: 17 }}>18.50B TKA</b><br /><span style={{ color: "#137a3f" }}>vs last 30d ↑ 9.6%</span></p>
        <p style={{ margin: "2px 0" }}>Dispute rate<br /><b style={{ fontSize: 17 }}>0.42%</b><br /><span style={{ color: "#b3261e" }}>vs last 30d ↓ 1.2%</span></p>
        <p className="tks-kicker">Specs: Padding 16px · Radius 0px · Border 1px #E5E7EB — Display key quantitative metrics with trend or delta.</p></div>
      <div className="tks-card"><b>Data table</b>
        <table className="tks-table" style={{ marginTop: 6 }}><thead><tr><th>Asset</th><th>Type</th><th>Price (TKA)</th><th>TVL</th><th>Status</th></tr></thead>
          <tbody>{TABLE_ROWS.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{i === 4 ? <span className={c === "Verified" ? "tks-ver" : undefined}>{c === "Verified" ? "● " : c === "Pending" ? "● " : "● "}{c}</span> : c}</td>)}</tr>)}</tbody></table>
        <p className="tks-kicker">Specs: Row height 44px · Header 600 12px · Border 1px #E5E7EB — Scan, compare, and act on structured records.</p></div>
      <div className="tks-card"><b>State badge</b>
        <p style={{ margin: "8px 0" }}>{BADGES.map((b) => <button key={b} type="button" className="tks-chip" style={{ margin: "0 4px 5px 0" }} aria-pressed={badge === b} onClick={() => setBadge(b)}>{b}</button>)}</p>
        <p style={{ margin: 0 }} aria-live="polite">Selected state: <b>{badge}</b></p>
        <p className="tks-kicker">Specs: Height 24px · Padding 0 8px · Radius 0px · Icon + label — Convey record or workflow state at-a-glance clarity.</p></div>
      <div className="tks-card"><b>Terminal panel</b>
        <div style={{ background: "#0b0b0c", color: "#d7f5d7", borderRadius: 6, padding: "8px 10px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, marginTop: 8 }}>
          <p style={{ margin: "0 0 5px", color: "#fff" }}>Logs&nbsp;&nbsp;Events&nbsp;&nbsp;Trace <span style={{ float: "right", color: "#7ee787" }}>● {logLive ? "Live" : "Paused"}</span></p>
          {(logLive ? TERMINAL_LOG : TERMINAL_LOG.slice(0, 2)).map((l) => <p key={l} style={{ margin: "2px 0" }}>{l}</p>)}
        </div>
        <p style={{ margin: "6px 0 0" }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setLogLive((v) => !v)}>{logLive ? "Pause stream" : "Resume stream"}</button></p>
        <p className="tks-kicker">Specs: Padding 12px · Radius 0px · Border 1px #E5E7EB — Surface system truth, logs, and machine-readable events.</p></div>
      <div className="tks-card"><b>Filter control</b>
        <p style={{ margin: "8px 0 4px" }}><input aria-label="Search assets, creators" placeholder="Search assets, creators…" style={{ width: "100%", padding: "5px 8px", border: "1px solid #c9c9c4", borderRadius: 5 }} /></p>
        <p style={{ margin: "4px 0" }}>{["Asset type", "Status", "Verified", "Date range", "Custom"].map((f) => <span key={f} className="tks-tag">{f} ▾</span>)}</p>
        <p style={{ margin: "6px 0 0" }}><span style={{ color: "#555" }}>Clear all</span> <button type="button" className="tks-btn" style={{ float: "right" }} aria-pressed={applied} onClick={() => setApplied((v) => !v)}>{applied ? "Filters applied ✓" : "Apply filters"}</button></p>
        <p className="tks-kicker" style={{ clear: "both", paddingTop: 6 }}>Specs: Height 36px · Radius 0px · Border 1px #E5E7EB — Narrow datasets with composable, predictable controls.</p></div>
      <div className="tks-card"><b>Timeline</b>
        {TIMELINE.map(([s, t, b]) => <p key={s} style={{ margin: "6px 0" }}><span className={s === "Verified" ? "tks-ver" : undefined}>●</span> <b>{s}</b> <span style={{ color: "#777", fontSize: 10.5 }}>{t}</span><br /><span style={{ color: "#555" }}>{b}</span></p>)}
        <p className="tks-kicker">Specs: Dot 10px · Spacing 16px · Line 1px #E5E7EB — Show lifecycle progression with time and context.</p></div>
      <div className="tks-card"><b>Evidence row</b>
        {EVIDENCE_ROWS.map(([n, m, s]) => <p key={n} style={{ margin: "6px 0", borderBottom: "1px solid #eee", paddingBottom: 4 }}><b>{n}</b> <span style={{ color: "#777" }}>{m}</span> <span className={s === "Verified" ? "tks-ver" : undefined} style={{ float: "right" }}>{s}</span></p>)}
        <p className="tks-kicker">Specs: Row height 44px · Icon 20px · Border 1px #E5E7EB — List and access supporting files and attestations.</p></div>
      <div className="tks-card"><b>CTA button</b>
        <p className="tks-kicker">Primary · Secondary · Tertiary · Danger</p>
        <p style={{ margin: "6px 0" }}>
          <button type="button" className="tks-btn" onClick={() => setCta("Launch app")}>Launch app</button>{" "}
          <button type="button" className="tks-btn tks-btn--ghost" onClick={() => setCta("Compare")}>Compare</button>{" "}
          <button type="button" className="tks-btn tks-btn--ghost" style={{ border: "none" }} onClick={() => setCta("View details")}>View details</button>{" "}
          <button type="button" className="tks-btn tks-btn--ghost" style={{ color: "#b3261e", borderColor: "#e5b4b0" }} onClick={() => setCta("Dispute")}>Dispute</button>
        </p>
        <p style={{ margin: "4px 0" }} aria-live="polite">{cta ? `Last action: ${cta} (hover and disabled states are printed beneath each variant on the original).` : "Hover and Disabled rows are printed on the original for every variant."}</p>
        <p className="tks-kicker">Specs: Height 36px · Radius 0px · Padding 0 14px · Font 600 13px — Drive primary actions and secondary navigation.</p></div>
    </div>
    <div className="tks-note" style={{ marginTop: 10 }}>
      <span><b>Shared rules</b></span>
      <span><b>Square corners</b> — No rounding on components. Radius = 0px for consistency.</span>
      <span><b>Thin rules</b> — Use 1px borders (#E5E7EB) to create subtle structure.</span>
      <span><b>Monospace for machine truth</b> — Use monospace (e.g., IBM Plex Mono) for logs, hashes, and code.</span>
      <span><b>Semantic color only for status</b> — Use color to communicate meaning, not to decorate.</span>
      <span><b>Consistent spacing</b> — Base unit: 8px. Use multiples for padding and layout.</span>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_24 — Responsive grid (printed № 23) ---------------- */

const TERMINAL_ROWS = [["TX-9F82", "Transfer", "Completed", "$18,240.00", "May 14, 2025", "API"], ["TX-7A11", "Transfer", "Pending", "$6,540.00", "May 14, 2025", "Web"], ["DP-3C21", "Dispute", "Under review", "$2,120.00", "May 13, 2025", "Portal"], ["TX-1D44", "Transfer", "Completed", "$9,875.00", "May 13, 2025", "API"], ["DP-8B91", "Dispute", "Escalated", "$1,305.00", "May 12, 2025", "Portal"], ["TX-4E23", "Transfer", "Completed", "$3,440.00", "May 12, 2025", "API"]];
const GRID_METRICS = [["Total volume", "$12,842,610", "+12.4%"], ["Disputes open", "128", "−4.7%"], ["SLA compliance", "98.6%", "+2.1%"], ["New accounts", "2,341", "+8.3%"]];
const GRID_RULES = [
  ["Preserve primary action", "Keep the main task and launch points visible and one tap/click away."],
  ["Collapse navigation intentionally", "Reduce chrome, not context. Use icons and patterns, not guesswork."],
  ["Protect table legibility", "Use horizontal scroll, sticky headers, and column prioritization."],
  ["Keep context visible", "Surface key metrics, filters, and state so users never lose their place."],
];

export function TokentaResponsiveGrid() {
  const [bp, setBp] = useState<"Desktop" | "Tablet" | "Mobile">("Desktop");
  const shown = bp === "Mobile" ? TERMINAL_ROWS.slice(0, 3) : TERMINAL_ROWS;
  const deviceLabel = (label: string, cols: string) => <p className="tks-kicker" style={{ margin: "0 0 4px", fontSize: 9 }}><b style={{ color: "#111" }}>{label}</b> · {cols}</p>;
  const termPanel = (kind: "Desktop" | "Tablet" | "Mobile") => <div className={`tks-card${bp === kind ? " is-on" : ""}`} style={{ padding: "7px 8px", cursor: "pointer", minWidth: 0 }} role="button" tabIndex={0} aria-pressed={bp === kind} onClick={() => setBp(kind)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setBp(kind); } }}>
    {deviceLabel(kind.toUpperCase(), kind === "Desktop" ? "≥ 1280px · 12-COL" : kind === "Tablet" ? "768–1279px · 8-COL" : "< 768px · 4-COL")}
    <p style={{ margin: "0 0 5px", fontSize: 9.5, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><b>⌂ TOKENTA</b>{kind !== "Mobile" && <span style={{ color: "#777" }}>{kind === "Desktop" ? "Product ▾ · Developers ▾ · Institution ▾ · Docs ▾ · Legal ▾ · ⌕" : "⌕"} · Launch app ↗</span>}{kind === "Mobile" && <span style={{ color: "#777" }}>☰ · Launch app ↗</span>}</p>
    {kind === "Desktop" && <p style={{ margin: "0 0 5px", fontSize: 8.8, color: "#555" }}>Sidebar: Overview / Accounts / Transfers / Disputes / Reports / Settings</p>}
    <div className="tks-grid" style={{ gridTemplateColumns: kind === "Desktop" ? "repeat(4, 1fr)" : "1fr 1fr", gap: 4, margin: "5px 0" }}>
      {GRID_METRICS.map(([k, v, d]) => <span key={k} style={{ border: "1px solid #e8e8e4", borderRadius: 4, padding: "3px 5px", minWidth: 0, overflow: "hidden" }}><span style={{ display: "block", fontSize: 7.8, color: "#888", textTransform: "uppercase" }}>{k}</span><b style={{ fontSize: 9.6 }}>{v}</b> <span style={{ color: "#137a3f", fontSize: 8.6 }}>{d}</span></span>)}
    </div>
    {kind === "Mobile" ? <div>
      {TERMINAL_ROWS.slice(0, 3).map((r) => <p key={r[0]} style={{ margin: "0 0 4px", fontSize: 8.6, lineHeight: 1.45, borderTop: "1px solid #e8e8e4", paddingTop: 3 }}><b>{r[0]}</b> · {r[2]}<br /><b>{r[3]}</b> · {r[4]}</p>)}
      <p style={{ margin: "2px 0 0", fontSize: 8.4, color: "#777", textAlign: "center" }}>View more</p>
    </div> : <div style={{ overflowX: "auto" }}><table className="tks-table tks-table--micro" style={{ fontSize: 8.4 }}>
      <thead><tr><th>ID</th><th>Type</th><th>Status</th><th>Amount</th>{kind === "Desktop" && <th>Channel</th>}</tr></thead>
      <tbody>{TERMINAL_ROWS.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>{kind === "Desktop" && <td>{r[5]}</td>}</tr>)}</tbody>
    </table></div>}
    {kind === "Desktop" && <p style={{ color: "#555", margin: "5px 0 0", fontSize: 8.8 }}>Activity by channel: API 52%, Web 28%, Portal 20% · Quick actions: New transfer · Search disputes · Download report</p>}
  </div>;
  const longPanel = (kind: "Desktop" | "Tablet" | "Mobile") => <div className={`tks-card${bp === kind ? " is-on" : ""}`} style={{ padding: "7px 8px", cursor: "pointer", minWidth: 0 }} role="button" tabIndex={0} aria-pressed={bp === kind} onClick={() => setBp(kind)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setBp(kind); } }}>
    {deviceLabel(kind.toUpperCase(), kind === "Desktop" ? "≥ 1280px · 12-COL" : kind === "Tablet" ? "768–1279px · 8-COL" : "< 768px · 4-COL")}
    <p style={{ margin: "0 0 4px", fontSize: 9.5 }}><b>⌂ TOKENTA</b> <span style={{ color: "#777" }}>{kind === "Mobile" ? "☰" : "Product ▾ · Developers ▾ · Institution ▾ · Docs ▾ · Legal ▾ · ⌕ · Launch app ↗"}</span></p>
    {kind === "Desktop" && <p style={{ margin: "0 0 4px", fontSize: 8.6, color: "#555" }}>On this page: 1. Introduction · 2. Scope · 3. Definitions · 4. Responsibilities · 5. Acceptable use · 6. Data handling · 7. Enforcement · 8. Contact</p>}
    {kind === "Tablet" && <p style={{ margin: "0 0 4px", fontSize: 8.6, color: "#555" }}>On this page ▾</p>}
    {kind === "Mobile" && <p style={{ margin: "0 0 4px", fontSize: 8.6, color: "#555" }}>Contents ▾</p>}
    <p style={{ margin: "2px 0", fontSize: 11.5 }}><b>Terms of Use</b></p>
    <p style={{ margin: "0 0 4px", fontSize: 8.6, color: "#777" }}>Last updated May 10, 2025</p>
    <p style={{ margin: "3px 0", fontSize: 9, lineHeight: 1.5 }}><b>1. Introduction</b> — These Terms of Use govern your access to and use of the Tokenta platform and related services.</p>
    <p style={{ margin: "3px 0", fontSize: 9, lineHeight: 1.5 }}><b>2. Scope</b> — These Terms apply to all users, including developers, institutions, and their end users.</p>
    {kind === "Desktop" && <p style={{ color: "#555", margin: "4px 0 0", fontSize: 8.6 }}>Related: Privacy Policy, Security Overview, Data Handling Guide, Legal Notices · Need help? Contact our legal team. [Contact us]</p>}
    <p style={{ color: "#777", margin: "5px 0 0", fontSize: 8.4, borderTop: "1px solid #e8e8e4", paddingTop: 4 }}>© 2025 Tokenta, Inc. · Terms of Use · Privacy Policy · Security{kind === "Desktop" ? " · Disclosures · Legal Notices" : ""}</p>
  </div>;
  const sectionLabel = (title: string, body: string, points: string[]) => <div>
    <p style={{ fontWeight: 800, fontSize: 11.5, margin: "0 0 5px", textTransform: "uppercase", letterSpacing: ".03em" }}>{title}</p>
    <p style={{ fontSize: 10.3, color: "#444", lineHeight: 1.5, margin: "0 0 8px" }}>{body}</p>
    {points.map((p, i) => <p key={p} style={{ fontSize: 10.3, margin: "5px 0" }}><span className="tks-num" style={{ width: 17, height: 17, fontSize: 9.5, marginRight: 5 }}>{i + 1}</span>{p}</p>)}
  </div>;
  return <div className="tks" role="region" aria-label="Tokenta responsive grid — interactive rebuild of Tokenta_24">
    <Head n="23" kicker="Responsive grid" />
    <h3>Responsive grid.</h3>
    <p className="tks-lede">The same public system had to support dense terminal layouts and long-form institutional pages across desktop, tablet, and mobile.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "138px 1fr 168px", alignItems: "start" }}>
      <div style={{ display: "grid", gap: 26 }}>
        {sectionLabel("1. Terminal shell", "Data-heavy workspace needs to scale without losing clarity or control.", ["Sidebar collapse", "Table overflow handling", "Panel reprioritization"])}
        {sectionLabel("2. Long-form pages", "Content-first pages adapt reading width, TOC behavior, and footer density.", ["TOC behavior", "Content width", "Footer changes"])}
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        <div className="tks-grid" style={{ gridTemplateColumns: "1.9fr 1.35fr 0.85fr" }}>{termPanel("Desktop")}{termPanel("Tablet")}{termPanel("Mobile")}</div>
        <div className="tks-grid" style={{ gridTemplateColumns: "1.9fr 1.35fr 0.85fr" }}>{longPanel("Desktop")}{longPanel("Tablet")}{longPanel("Mobile")}</div>
      </div>
      <div className="tks-card" style={{ padding: "10px 12px" }} aria-label="Design rules rail">
        <p className="tks-kicker" style={{ margin: "0 0 8px", color: "#111" }}>Design rules</p>
        {GRID_RULES.map(([n, b]) => <div key={n} style={{ marginBottom: 12 }}>
          <p style={{ margin: 0 }}><span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: "50%", background: "#111", color: "#fff", alignItems: "center", justifyContent: "center", fontSize: 12, marginRight: 6 }} aria-hidden="true">◎</span><b style={{ fontSize: 11.5 }}>{n}</b></p>
          <p style={{ margin: "4px 0 0", fontSize: 10.3, color: "#555", lineHeight: 1.5 }}>{b}</p>
        </div>)}
        <p style={{ margin: 0, fontSize: 10, color: "#777" }} aria-live="polite">Breakpoint in focus: <b style={{ color: "#111" }}>{bp}</b> — {bp === "Desktop" ? "≥ 1280px · 12-COL" : bp === "Tablet" ? "768–1279px · 8-COL" : "< 768px · 4-COL"}. Terminal rows shown at this breakpoint: {shown.length}.</p>
      </div>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_25 — Homepage hero (printed № 24) ---------------- */

const HERO_ASSETS = [
  ["Llama 3.1 70B Instruct", "Model", "Meta", "$2.41M", "$1,240", "3m ago"],
  ["Vision-R1 32B", "Model", "Vision Labs", "$1.78M", "$890", "5m ago"],
  ["Tokenta Embed v2", "Embedding", "Tokenta", "$980K", "$420", "7m ago"],
  ["LegalSum 7B", "Model", "LexFoundry", "$612K", "$315", "10m ago"],
  ["WhisperX Large v3", "Model", "OpenSourceAI", "$521K", "$280", "12m ago"],
];

export function TokentaHomepageHero() {
  const [tab, setTab] = useState("Terminal");
  const [verified, setVerified] = useState(false);
  return <div className="tks" role="region" aria-label="Tokenta homepage hero — interactive rebuild of Tokenta_25">
    <Head n="24" kicker="Homepage hero" />
    <h3>Homepage hero.</h3>
    <p className="tks-lede">The homepage introduces Tokenta as a verifiable AI asset exchange through product UI rather than lifestyle marketing.</p>
    <div style={{ background: "#0b0b0c", color: "#f5f5f5", borderRadius: 10, padding: "14px 16px" }}>
      <p style={{ margin: "0 0 10px", display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}><b>⌂ TOKENTA</b><span style={{ color: "#b9b9be" }}>Products ▾ · Developers ▾ · Institution ▾ · Docs ▾ · Legal ▾</span><span style={{ marginLeft: "auto", color: "#7ee787" }}>● Mainnet Live</span><span className="tks-btn" style={{ background: "#fff", color: "#111", borderColor: "#fff", padding: "4px 12px" }}>Launch app ↗</span></p>
      <div className="tks-grid" style={{ gridTemplateColumns: "0.9fr 1.4fr" }}>
        <div>
          <p className="tks-kicker" style={{ color: "#9a9aa0" }}>Verifiable AI Asset Exchange</p>
          <p style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.2, margin: "6px 0" }}>Discover, verify,<br />and trade AI assets<br />with on-chain trust.</p>
          <p style={{ color: "#b9b9be", margin: "6px 0" }}>Tokenta brings transparency, provenance, and enforceable rights to the AI economy.</p>
          <p style={{ margin: "10px 0" }}><span className="tks-btn" style={{ background: "#fff", color: "#111", borderColor: "#fff" }}>Explore assets ↗</span> <span className="tks-btn tks-btn--ghost" style={{ background: "transparent", color: "#fff", borderColor: "#55565a" }}>View on-chain activity</span></p>
          <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[["12,842", "AI assets"], ["3,721", "Creators"], ["$24.6M", "Volume (7d)"], ["98.7%", "Verified assets"]].map(([v, k]) => <span key={k}><b style={{ fontSize: 15 }}>{v}</b><br /><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>{k}</span></span>)}
          </div>
        </div>
        <div style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: "10px 12px" }}>
          <p style={{ margin: "0 0 8px" }}>{["Terminal", "Activity", "Proofs"].map((t) => <button key={t} type="button" className="tks-chip" style={{ marginRight: 6, background: tab === t ? "#fff" : "#141416", color: tab === t ? "#111" : "#eee", borderColor: "#3a3b3f" }} aria-pressed={tab === t} onClick={() => setTab(t)}>{t}</button>)}<span style={{ float: "right", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: "#9a9aa0" }}>● Mainnet · 0x7f3a...9c1d ⧉</span></p>
          {tab === "Terminal" && <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}>
            <p style={{ color: "#7ee787", margin: "4px 0" }}>tokenta:~$ search assets --verified --type model --sort liquidity</p>
            <table className="tks-table" style={{ background: "transparent", color: "#eee" }}><thead><tr><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Asset</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Type</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Creator</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Verified</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Liquidity</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Floor</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Updated</th></tr></thead>
              <tbody>{HERO_ASSETS.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ borderBottomColor: "#232426" }}>{i === 3 ? <span className="tks-ver">◎</span> : c}</td>)}</tr>)}</tbody></table>
            <p style={{ color: "#7ee787", margin: "6px 0 2px" }}>tokenta:~$ verify 0x1a2b...c9f0</p>
            <p style={{ margin: "2px 0" }} aria-live="polite">{verified ? "✓ Verified on-chain. Provenance, licensing, and usage rights intact." : "Press Verify to run the printed check."} <button type="button" className="tks-btn" style={{ padding: "2px 10px", marginLeft: 8 }} onClick={() => setVerified((v) => !v)}>{verified ? "Reset" : "Verify"}</button></p>
            <p style={{ color: "#7ee787", margin: "2px 0" }}>tokenta:~$ _</p>
          </div>}
          {tab !== "Terminal" && <p style={{ color: "#b9b9be", margin: "6px 0" }}>{tab} — the printed hero shows the Terminal tab; the four proof points below it are: On-chain verification — Every asset is cryptographically verified and attested. · Transparent provenance — Source, training data, and lineage you can audit. · Enforceable rights — On-chain terms enable compliance and royalties. · Network — Mainnet.</p>}
        </div>
      </div>
    </div>
    <div className="tks-note" style={{ marginTop: 10 }}>
      <span><b>1 · Category framing</b> — Clears the context immediately—Tokenta is a verifiable AI asset exchange, not a marketplace.</span>
      <span><b>2 · Verifiable product thesis</b> — Lead copy states the promise: transparency, provenance, and enforceable rights.</span>
      <span><b>3 · Terminal as proof</b> — Live terminal preview surfaces real system data—verifiable assets, activity, and on-chain evidence.</span>
      <span><b>4 · Live/mainnet trust signal</b> — Mainnet status, wallet context, and real-time activity establish legitimacy and system trust.</span>
    </div>
    <p style={{ margin: "10px 0 0" }}><b>Why this hero works</b> — We lead with system evidence—not AI illustration. The terminal and real metrics prove the product exists, is live, and protects users—building instant trust with technical and institutional audiences.</p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_26 — Terminal overview (printed № 25) ---------------- */

const TERMINAL_MARKETS = [
  ["USDT / USDC", "1.0001", "+0.01%", "$128.4M"],
  ["TBILL / USDC", "98.72", "+0.18%", "$46.7M"],
  ["GOV.BOND / USDC", "101.35", "+0.32%", "$32.1M"],
  ["CORP.CREDIT / USDC", "99.21", "−0.07%", "$18.6M"],
  ["GOLD / USDC", "2,336.42", "+0.45%", "$76.3M"],
];
const ORDER_BOOK_ASKS = [["1.0008", "2,345,123", "9,812,556"], ["1.0006", "1,876,540", "7,467,433"], ["1.0004", "3,102,332", "5,590,893"], ["1.0002", "1,245,667", "2,488,561"]];
const ORDER_BOOK_BIDS = [["1.0000", "2,134,445", "2,134,445"], ["0.9999", "3,489,220", "5,623,665"], ["0.9998", "2,876,331", "8,499,996"], ["0.9996", "1,982,114", "10,482,110"]];
const EXEC_LOG = [
  ["12:45:32", "USDT / USDC", "Buy", "1.0001", "750,000.00", "BlueHarbor Capital", "0x9f3a...7c1e"],
  ["12:45:28", "TBILL / USDC", "Sell", "98.72", "250,000.00", "Northline Markets", "0x6b2d...a91f"],
  ["12:45:21", "GOV.BOND / USDC", "Buy", "101.35", "500,000.00", "Crestview Treasury", "0x5a77...d442"],
  ["12:45:18", "USDT / USDC", "Sell", "1.0000", "1,200,000.00", "Vertex Liquidity", "0x3e11...9db7"],
  ["12:45:12", "CORP.CREDIT / USDC", "Buy", "99.21", "300,000.00", "HarborRock Credit", "0x8c91...f2b0"],
];
const TERMINAL_CALLOUTS = [
  ["Balance", "Real-time portfolio balance with available and locked funds for immediate liquidity clarity."],
  ["Capacity", "Total credit and balance sheet capacity with live utilization to signal headroom."],
  ["Counterparties", "Active trading relationships, top exposure, and concentration to show diversification health."],
  ["Settlements", "Settlement volume, count, and success rate to prove operational reliability at scale."],
  ["Marketplace", "Curated markets with live prices, 24H change, and volume for fast opportunity discovery."],
  ["Market chart", "Live price action with key metrics and time ranges for continuous context and conviction."],
  ["Order book", "Live bids and asks with spread and depth to validate liquidity and execution quality."],
  ["Execution log", "Live trade and settlement feed with counterparties and on-chain proof for auditability."],
];

export function TokentaTerminalOverview() {
  const [callout, setCallout] = useState(0);
  const [range, setRange] = useState("1M");
  const [marketTab, setMarketTab] = useState("All markets");
  const markets = marketTab === "All markets" ? TERMINAL_MARKETS : TERMINAL_MARKETS.filter(([m]) => (marketTab === "Stablecoin" && m.includes("USDT")) || (marketTab === "RWAs" && (m.includes("TBILL") || m.includes("BOND"))) || (marketTab === "Credit" && m.includes("CREDIT")) || (marketTab === "FX" && m.includes("GOLD")));
  return <div className="tks" role="region" aria-label="Tokenta terminal overview — interactive rebuild of Tokenta_26">
    <Head n="25" kicker="Terminal overview" />
    <h3>Terminal overview.</h3>
    <p className="tks-lede">The public terminal compresses the exchange thesis into one information-dense demonstration surface.</p>
    <div style={{ display: "grid", gridTemplateColumns: "138px minmax(0,1fr) 138px", gap: 11, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 16, paddingTop: 92 }} role="group" aria-label="Terminal callouts 1 to 4">
        {TERMINAL_CALLOUTS.slice(0, 4).map(([n, b], i) => <button key={n} type="button" aria-pressed={callout === i} onClick={() => setCallout(i)} style={{ background: "none", border: "none", borderTop: "1px dashed #b9b9b2", padding: "7px 0 0", textAlign: "left", font: "inherit", cursor: "pointer", width: "100%" }}>
            <span className="tks-num" style={{ width: 21, height: 21, fontSize: 11.5, marginBottom: 4 }}>{i + 1}</span>
            <b style={{ display: "block", fontSize: 12.5 }}>{n}</b>
            <span style={{ display: "block", color: "#555", fontSize: 10.3, lineHeight: 1.5, marginTop: 2 }}>{b}</span>
          </button>)}
      </div>
      <div style={{ minWidth: 0 }} className="tks-terminal-slim">
      <div style={{ background: "#0b0b0c", color: "#f5f5f5", borderRadius: 10, padding: "12px 14px", zoom: 0.88 }}>
      <p style={{ margin: "0 0 10px", display: "flex", gap: 13, flexWrap: "wrap", alignItems: "center" }}><b>⌂ TOKENTA</b><span style={{ color: "#b9b9be" }}>Market · <u>Terminal</u> · Docs · Developers ▾ · Institution ▾ · Legal ▾</span><span style={{ marginLeft: "auto", color: "#7ee787" }}>● Mainnet</span><span className="tks-btn" style={{ padding: "3px 11px" }}>Connect</span></p>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee" }}><span className="tks-kicker">Balance · Total balance (USD)</span><p style={{ fontSize: 16, fontWeight: 800, margin: "4px 0" }}>$24,812,430.21</p><p style={{ margin: 0, color: "#b9b9be" }}>Available $18,642,113.77 · Locked $6,170,316.44</p></div>
        <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee" }}><span className="tks-kicker">Capacity · Total capacity (USD)</span><p style={{ fontSize: 16, fontWeight: 800, margin: "4px 0" }}>$150,000,000.00</p><p style={{ margin: 0, color: "#b9b9be" }}>Utilization 42.7% · $64,050,000.00 used</p><div style={{ height: 5, background: "#2c2d30", borderRadius: 3, marginTop: 5 }}><div style={{ width: "42.7%", height: 5, background: "#4ade80", borderRadius: 3 }} /></div></div>
        <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee" }}><span className="tks-kicker">Counterparties · Active counterparties</span><p style={{ fontSize: 16, fontWeight: 800, margin: "4px 0" }}>34</p><p style={{ margin: 0, color: "#b9b9be" }}>Top exposure $6.12M · Concentration 12.4%</p></div>
        <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee" }}><span className="tks-kicker">Settlements · Settled (30D)</span><p style={{ fontSize: 16, fontWeight: 800, margin: "4px 0" }}>$312,845,993.11</p><p style={{ margin: 0, color: "#b9b9be" }}>Tx count 4,782 · Success rate 99.82%</p></div>
      </div>
      <div className="tks-grid" style={{ gridTemplateColumns: "1.25fr 1.15fr 1fr", marginTop: 10 }}>
        <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee" }}>
          <b>Marketplace</b>
          <p style={{ margin: "6px 0" }}>{["All markets", "Stablecoin", "RWAs", "Credit", "FX"].map((t) => <button key={t} type="button" className="tks-chip" style={{ marginRight: 4, background: marketTab === t ? "#fff" : "#1d1e20", color: marketTab === t ? "#111" : "#ddd", borderColor: "#333438" }} aria-pressed={marketTab === t} onClick={() => setMarketTab(t)}>{t}</button>)}</p>
          <table className="tks-table tks-table--micro" style={{ background: "transparent", color: "#eee" }}><thead><tr><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Market</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Price</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>24H Change</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Volume (24H)</th></tr></thead>
            <tbody>{markets.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ borderBottomColor: "#232426", color: i === 2 ? (c.startsWith("+") ? "#4ade80" : "#f87171") : undefined }}>{c}</td>)}</tr>)}{markets.length === 0 && <tr><td colSpan={4} style={{ color: "#9a9aa0" }}>No markets in this tab on the printed terminal.</td></tr>}</tbody></table>
          <p style={{ color: "#9a9aa0", margin: "6px 0 0" }}>View all markets →</p>
        </div>
        <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee" }}>
          <p style={{ margin: 0 }}><b>USDT / USDC</b> <span style={{ color: "#4ade80" }}>● Live ▾</span> <span style={{ float: "right" }}>{["1M", "6M", "1Y", "ALL"].map((r) => <button key={r} type="button" className="tks-chip" style={{ marginLeft: 4, background: range === r ? "#fff" : "#1d1e20", color: range === r ? "#111" : "#ddd", borderColor: "#333438" }} aria-pressed={range === r} onClick={() => setRange(r)}>{r}</button>)}</span></p>
          <p style={{ fontSize: 17, fontWeight: 800, margin: "6px 0 2px" }}>1.0001 <span style={{ color: "#4ade80", fontSize: 11 }}>+0.01% (24H)</span></p>
          <svg viewBox="0 0 300 70" width="100%" height="70" role="img" aria-label={`Price chart, range ${range}: oscillating around 1.0000 between 0.9980 and 1.0020, May 21 to Jun 18`}><polyline fill="none" stroke="#4ade80" strokeWidth="1.5" points="0,52 25,44 50,56 75,34 100,44 125,26 150,40 175,30 200,46 225,24 250,38 275,28 300,36" /><line x1="0" y1="42" x2="300" y2="42" stroke="#333438" strokeDasharray="3 3" /></svg>
          <p style={{ color: "#9a9aa0", margin: "2px 0" }}>May 21 · May 28 · Jun 4 · Jun 11 · Jun 18</p>
          <p style={{ margin: 0, color: "#c9c9ce" }}>24H High 1.0023 · 24H Low 0.9982 · 24H Volume $128.4M · TVL $256.7M · Trades (24H) 3,842</p>
        </div>
        <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee" }}>
          <b>Order book</b> <span style={{ float: "right", color: "#9a9aa0" }}>0.0001 ▾</span>
          <table className="tks-table tks-table--micro" style={{ background: "transparent", color: "#eee" }}><thead><tr><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Price (USDC)</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Size (USDT)</th><th style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>Total (USDT)</th></tr></thead>
            <tbody>{ORDER_BOOK_ASKS.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ borderBottomColor: "#232426", color: i === 0 ? "#f87171" : undefined }}>{c}</td>)}</tr>)}
              <tr><td colSpan={3} style={{ textAlign: "center", color: "#9a9aa0" }}>1.0001 — Spread 0.0001</td></tr>
              {ORDER_BOOK_BIDS.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ borderBottomColor: "#232426", color: i === 0 ? "#4ade80" : undefined }}>{c}</td>)}</tr>)}</tbody></table>
        </div>
      </div>
      <div className="tks-card" style={{ background: "#141416", borderColor: "#2c2d30", color: "#eee", marginTop: 10 }}>
        <b>Execution log (live)</b> <span style={{ float: "right", color: "#9a9aa0" }}>View all →</span>
        <div style={{ overflowX: "auto" }}><table className="tks-table tks-table--micro" style={{ background: "transparent", color: "#eee" }}><thead><tr>{["Time (UTC)", "Market", "Side", "Price (USDC)", "Size (USDT)", "Counterparty", "Tx ID", "Status"].map((h) => <th key={h} style={{ color: "#9a9aa0", borderBottomColor: "#2c2d30" }}>{h}</th>)}</tr></thead>
          <tbody>{EXEC_LOG.map((r) => <tr key={r[0] + r[1]}><td style={{ borderBottomColor: "#232426" }}>{r[0]}</td><td style={{ borderBottomColor: "#232426" }}>{r[1]}</td><td style={{ borderBottomColor: "#232426", color: r[2] === "Buy" ? "#4ade80" : "#f87171" }}>{r[2]}</td><td style={{ borderBottomColor: "#232426" }}>{r[3]}</td><td style={{ borderBottomColor: "#232426" }}>{r[4]}</td><td style={{ borderBottomColor: "#232426" }}>{r[5]}</td><td style={{ borderBottomColor: "#232426" }}>{r[6]}</td><td style={{ borderBottomColor: "#232426" }}><span className="tks-ver">● Settled</span></td></tr>)}</tbody></table></div>
      </div>
    </div>
      </div>
      <div style={{ display: "grid", gap: 16, paddingTop: 92 }} role="group" aria-label="Terminal callouts 5 to 8">
        {TERMINAL_CALLOUTS.slice(4).map(([n, b], i) => <button key={n} type="button" aria-pressed={callout === i + 4} onClick={() => setCallout(i + 4)} style={{ background: "none", border: "none", borderTop: "1px dashed #b9b9b2", padding: "7px 0 0", textAlign: "left", font: "inherit", cursor: "pointer", width: "100%" }}>
            <span className="tks-num" style={{ width: 21, height: 21, fontSize: 11.5, marginBottom: 4 }}>{i + 5}</span>
            <b style={{ display: "block", fontSize: 12.5 }}>{n}</b>
            <span style={{ display: "block", color: "#555", fontSize: 10.3, lineHeight: 1.5, marginTop: 2 }}>{b}</span>
          </button>)}
      </div>
    </div>
    <div className="tks-note" style={{ marginTop: 10 }}>
      <span><b>Evidence replaces illustration</b> — Every metric is live, verifiable, and tied to on-chain and operational sources—not static claims.</span>
      <span><b>Multiple trust surfaces in one view</b> — Liquidity, counterparty, pricing, and settlement data coexist to build confidence across stakeholders.</span>
      <span><b>Dense but scannable hierarchy</b> — Information is structured for speed: summaries first, detail on demand, proof always visible.</span>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 11.5 }} aria-live="polite">Callout in focus: <b>{callout + 1}. {TERMINAL_CALLOUTS[callout][0]}</b> — {TERMINAL_CALLOUTS[callout][1]}</p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_27 — Homepage storyline (printed № 26) ---------------- */

const STORYLINE = [
  ["Why Tokenta", "Establish the problem worth solving and Tokenta's category approach."],
  ["Verification", "Show how identity, entities, and data are verified on-chain and off-chain."],
  ["Order Room", "Enter a curated marketplace of verified opportunities and counterparties."],
  ["Escrow", "Execute with programmable escrow that enforces terms automatically."],
  ["Reputation", "Build and leverage reputation through on-chain attestations and history."],
  ["Analytics", "Surface transparent metrics, performance, and market insights in real time."],
  ["Security", "Enterprise-grade security, monitoring, and risk controls by design."],
  ["Access", "Seamless onboarding to connect, transact, and grow with confidence."],
];
const STORY_PHASES = [["Understand", "Category, value proposition, and need."], ["Verify", "Identity, data, and counterparties."], ["Execute", "Programmatic escrow and enforcement."], ["Measure", "Reputation, analytics, and outcomes."], ["Operate", "Secure access and growth."]];

export function TokentaHomepageStoryline() {
  const [active, setActive] = useState(0);
  return <div className="tks" role="region" aria-label="Tokenta homepage storyline — interactive rebuild of Tokenta_27">
    <Head n="26" kicker="Homepage storyline" />
    <h3>Homepage storyline.</h3>
    <p className="tks-lede">The homepage unfolds as a trust narrative rather than a conventional marketing scroll.</p>
    <div className="tks-flow" role="group" aria-label="Storyline sections">
      {STORYLINE.map(([n, b], i) => <span key={n} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" style={{ flex: "1 1 10%" }} aria-pressed={active === i} onClick={() => setActive(i)}><span className="tks-num" style={{ marginBottom: 5 }}>{i + 1}</span><br /><b>{n}</b><br /><span style={{ color: "#555", fontSize: 10.5 }}>{b}</span></button></span>)}
    </div>
    <p style={{ textAlign: "center", margin: "10px 0" }} aria-live="polite"><span className="tks-chip">Section {active + 1} of 8 — <b>{STORYLINE[active][0]}</b>: {STORYLINE[active][1]} · A single, cohesive journey from category explanation to machine-verifiable execution.</span></p>
    <div className="tks-note">
      <span><b>Storyline summary</b> — Each section builds trust and context in sequence—educating, proving, executing, and measuring—so users understand the "why" before they take action.</span>
      {STORY_PHASES.map(([n, b], i) => <span key={n}>{i > 0 ? "→ " : ""}<b>{n}</b> — {b}</span>)}
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_28 — Marketplace grid (printed № 27) ---------------- */

type GridAsset = { name: string; sub: string; creator: string; type: string; score: number; proofs: number; caps: string[]; price: string; per: string; vol: string; txns: string; listed: string };
const GRID_ASSETS: GridAsset[] = [
  { name: "VisionLM-Pro 1.3", sub: "Multimodal model", creator: "Synthora Labs", type: "Model", score: 98, proofs: 12, caps: ["Vision", "NLP", "Reasoning"], price: "$24.80", per: "per 1K requests", vol: "$412,340", txns: "16,724 txns", listed: "May 21, 2025" },
  { name: "LegalDoc-Set v2", sub: "Contract dataset", creator: "LexiData", type: "Dataset", score: 96, proofs: 9, caps: ["NLP", "Legal", "Extraction"], price: "$1.90", per: "per 1K docs", vol: "$186,920", txns: "8,431 txns", listed: "May 19, 2025" },
  { name: "FinQA Agent", sub: "Financial analyst agent", creator: "QuantForge", type: "Agent", score: 93, proofs: 10, caps: ["NLP", "Reasoning", "Tools"], price: "$0.42", per: "per task", vol: "$154,680", txns: "6,218 txns", listed: "May 18, 2025" },
  { name: "Whispered-XL", sub: "Speech recognition model", creator: "Voxal AI", type: "Model", score: 91, proofs: 8, caps: ["Speech", "NLP"], price: "$16.00", per: "per 1M seconds", vol: "$98,210", txns: "4,912 txns", listed: "May 16, 2025" },
  { name: "CodeAssist 3.2", sub: "Code completion model", creator: "BuildAI", type: "Model", score: 89, proofs: 7, caps: ["Code", "NLP", "Reasoning"], price: "$18.50", per: "per 1K requests", vol: "$76,540", txns: "3,887 txns", listed: "May 15, 2025" },
  { name: "EarthTiles 2024Q4", sub: "Satellite imagery dataset", creator: "GeoPulse", type: "Dataset", score: 88, proofs: 11, caps: ["Vision", "Geospatial"], price: "$2.40", per: "per 1K tiles", vol: "$62,300", txns: "2,743 txns", listed: "May 14, 2025" },
  { name: "Compute Spot GPU", sub: "NVIDIA H100 (80GB)", creator: "NodeStack", type: "Compute", score: 87, proofs: 6, caps: ["GPU", "H100", "80GB"], price: "$2.10", per: "per GPU-hour", vol: "$41,120", txns: "1,952 txns", listed: "May 12, 2025" },
  { name: "RiskEval Bench", sub: "Model evaluation suite", creator: "TrustMetric", type: "Service", score: 86, proofs: 8, caps: ["Evaluation", "Benchmark"], price: "$0.12", per: "per run", vol: "$29,880", txns: "2,104 txns", listed: "May 11, 2025" },
];
const GRID_TYPE_COUNTS: Array<[string, number]> = [["Model", 342], ["Dataset", 286], ["Agent", 197], ["Compute", 128], ["Service", 94]];
const GRID_CAP_COUNTS: Array<[string, number]> = [["Vision", 312], ["NLP", 287], ["Speech", 156], ["Reasoning", 204], ["Multimodal", 173]];

export function TokentaMarketplaceGrid() {
  const [types, setTypes] = useState<string[]>([]);
  const [caps, setCaps] = useState<string[]>([]);
  const [sort, setSort] = useState("Verified score (high → low)");
  const [view, setView] = useState<"grid" | "list">("list");
  const rows = useMemo(() => {
    let list = GRID_ASSETS.filter((a) => (types.length === 0 || types.includes(a.type)) && (caps.length === 0 || caps.some((c) => a.caps.includes(c))));
    if (sort === "Verified score (high → low)") list = [...list].sort((a, b) => b.score - a.score);
    if (sort === "Volume (30d) high → low") list = [...list].sort((a, b) => Number(b.vol.replace(/[$,]/g, "")) - Number(a.vol.replace(/[$,]/g, "")));
    return list;
  }, [types, caps, sort]);
  const toggle = (list: string[], v: string, set: (x: string[]) => void) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  return <div className="tks" role="region" aria-label="Tokenta marketplace grid — interactive rebuild of Tokenta_28">
    <Head n="27" kicker="Marketplace grid" />
    <h3>Marketplace grid.</h3>
    <p className="tks-lede">Discovery was designed so buyers can compare unfamiliar AI assets without losing verification context.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "185px 1fr" }}>
      <div className="tks-card">
        <p style={{ margin: "0 0 6px", display: "flex", justifyContent: "space-between" }}><b>Filters</b><button type="button" className="tks-chip" onClick={() => { setTypes([]); setCaps([]); }}>Reset all ⟳</button></p>
        <p className="tks-kicker">Asset type</p>
        {GRID_TYPE_COUNTS.map(([t, c]) => <label key={t} style={{ display: "flex", gap: 6, alignItems: "center", margin: "3px 0" }}><input type="checkbox" checked={types.includes(t)} onChange={() => toggle(types, t, setTypes)} />{t}<span style={{ marginLeft: "auto", color: "#888" }}>{c}</span></label>)}
        <p className="tks-kicker" style={{ marginTop: 10 }}>Capabilities</p>
        {GRID_CAP_COUNTS.map(([t, c]) => <label key={t} style={{ display: "flex", gap: 6, alignItems: "center", margin: "3px 0" }}><input type="checkbox" checked={caps.includes(t)} onChange={() => toggle(caps, t, setCaps)} />{t}<span style={{ marginLeft: "auto", color: "#888" }}>{c}</span></label>)}
        <p className="tks-kicker" style={{ marginTop: 10 }}>Verification status</p>
        <p style={{ margin: "3px 0" }}>◎ Verified <span style={{ float: "right", color: "#888" }}>612</span></p>
        <p style={{ margin: "3px 0" }}>◐ Partially verified <span style={{ float: "right", color: "#888" }}>134</span></p>
        <p style={{ margin: "3px 0" }}>○ Unverified <span style={{ float: "right", color: "#888" }}>78</span></p>
        <p className="tks-kicker" style={{ marginTop: 10 }}>Region — All regions ▾ · Settlement compatibility — All methods ▾</p>
        <p style={{ color: "#555", margin: "8px 0 0" }}><b>Filter depth</b> — Multi-dimensional filters let buyers narrow by technical capabilities, trust signals, geography, and settlement rail.</p>
      </div>
      <div className="tks-card">
        <p style={{ margin: "0 0 8px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}><b style={{ fontSize: 14.5 }}>🛡 Verified listings</b><span style={{ color: "#777" }}>612 assets match your filters</span>
          <span style={{ marginLeft: "auto" }}>Sort by <select aria-label="Sort listings" value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: "4px 6px", border: "1px solid #c9c9c4", borderRadius: 5 }}><option>Verified score (high → low)</option><option>Volume (30d) high → low</option></select></span>
          <button type="button" className="tks-chip" aria-pressed={view === "grid"} onClick={() => setView("grid")}>▦ Grid</button>
          <button type="button" className="tks-chip" aria-pressed={view === "list"} onClick={() => setView("list")}>☰ List</button></p>
        <p style={{ color: "#555", margin: "0 0 6px" }}><b>Verified ranking</b> — Assets are ranked by verified score, reflecting the depth and quality of attested evidence. <b>Evidence visibility</b> — Proof counts and capability tags surface verification context before a buyer opens the details.</p>
        {view === "list" ? <div style={{ overflowX: "auto" }}><table className="tks-table tks-table--micro"><thead><tr><th>Asset</th><th>Creator</th><th>Type</th><th>Verified</th><th>Capabilities</th><th>Price</th><th>Volume (30d)</th><th>Listed</th></tr></thead>
          <tbody>{rows.map((a) => <tr key={a.name}><td style={{ whiteSpace: "nowrap" }}><b>{a.name}</b><br /><span style={{ color: "#777" }}>{a.sub}</span></td><td style={{ whiteSpace: "nowrap" }}>{a.creator} <span className="tks-ver">✓</span></td><td>{a.type}</td><td><span className="tks-ver">🛡 {a.score}</span><br /><span style={{ color: "#777" }}>{a.proofs} proofs</span></td><td>{a.caps.map((c) => <span key={c} className="tks-tag">{c}</span>)}</td><td><b>{a.price}</b><br /><span style={{ color: "#777" }}>{a.per}</span></td><td><b>{a.vol}</b><br /><span style={{ color: "#777" }}>{a.txns}</span></td><td style={{ whiteSpace: "nowrap" }}>{a.listed}</td></tr>)}{rows.length === 0 && <tr><td colSpan={8} style={{ color: "#777" }}>No printed listings match those filters.</td></tr>}</tbody></table></div>
        : <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>{rows.map((a) => <div key={a.name} className="tks-card"><b>{a.name}</b><p style={{ color: "#777", margin: "2px 0" }}>{a.sub} · {a.creator} ✓</p><p style={{ margin: "3px 0" }}><span className="tks-ver">🛡 {a.score}</span> · {a.proofs} proofs</p><p style={{ margin: "3px 0" }}>{a.caps.map((c) => <span key={c} className="tks-tag">{c}</span>)}</p><p style={{ margin: "3px 0" }}><b>{a.price}</b> {a.per} · {a.vol}</p></div>)}</div>}
        <p style={{ margin: "8px 0 0", color: "#777" }} aria-live="polite">Showing {rows.length} of the 8 listings printed on the original slide (612 assets match in the printed UI).</p>
      </div>
    </div>
    <div className="tks-note" style={{ marginTop: 10 }}><span style={{ fontSize: 16 }}>✓</span><span><b>Key decision</b> — Verification is not a badge added after discovery. It is part of ranking, filtering, and every trade decision.</span></div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_29 — Buyer and seller views (printed № 28) ---------------- */

const WATCHLIST = [
  { name: "Life Sciences Tower", loc: "Boston, MA", tag: "Core Office", price: "$124.5M", noi: "$6.2M", cap: "5.0%", year: "2019", ver: 92, status: "Verified", checks: "24 / 26 checks", compare: ["vs. market +120 bps", "vs. comp set +80 bps", "vs. watchlist avg. +65 bps"], updated: "May 12, 2025 9:41 AM" },
  { name: "Industrial Park East", loc: "Atlanta, GA", tag: "Industrial", price: "$68.0M", noi: "$3.6M", cap: "5.3%", year: "2016", ver: 78, status: "In progress", checks: "18 / 23 checks", compare: ["vs. market +90 bps", "vs. comp set +40 bps", "vs. watchlist avg. +35 bps"], updated: "May 11, 2025 4:15 PM" },
  { name: "Riverside Retail Center", loc: "Nashville, TN", tag: "Retail", price: "$42.0M", noi: "$2.2M", cap: "5.2%", year: "2014", ver: 54, status: "In progress", checks: "12 / 22 checks", compare: ["vs. market −10 bps", "vs. comp set −20 bps", "vs. watchlist avg. −5 bps"], updated: "May 10, 2025 10:02 AM" },
];
const INVENTORY = [
  { name: "Highland Apartments", loc: "Austin, TX", tag: "Multifamily", state: "Live", listed: "Listed Apr 28, 2025", ver: 88, status: "Verified", checks: "22 / 25 checks", views: "1,248", engaged: "86", inquiries: "12", watch: "32", time: "3m 24s", saves: "18", updated: "May 12, 2025 9:20 AM" },
  { name: "Downtown Office Building", loc: "Chicago, IL", tag: "Core Office", state: "Live", listed: "Listed May 2, 2025", ver: 72, status: "In progress", checks: "18 / 25 checks", views: "892", engaged: "54", inquiries: "7", watch: "21", time: "2m 11s", saves: "9", updated: "May 12, 2025 8:55 AM" },
  { name: "Gateway Logistics Center", loc: "Dallas, TX", tag: "Industrial", state: "Draft", listed: "Last edited May 9, 2025", ver: 45, status: "In progress", checks: "10 / 22 checks", views: "—", engaged: "—", inquiries: "—", watch: "—", time: "—", saves: "—", updated: "May 9, 2025 2:31 PM" },
  { name: "Sunset Retail Plaza", loc: "Phoenix, AZ", tag: "Retail", state: "Paused", listed: "Paused May 4, 2025", ver: 100, status: "Verified", checks: "26 / 26 checks", views: "1,102", engaged: "61", inquiries: "9", watch: "28", time: "2m 48s", saves: "14", updated: "May 4, 2025 11:07 AM" },
];

export function TokentaBuyerSellerViews() {
  const [view, setView] = useState<"buyer" | "seller">("buyer");
  const [added, setAdded] = useState(false);
  const tableStyle: React.CSSProperties = { fontSize: 9.2 };
  const buyerPanel = <div className={`tks-card${view === "buyer" ? " is-on" : ""}`} style={{ padding: "9px 10px", minWidth: 0, cursor: "pointer" }} role="button" tabIndex={0} aria-pressed={view === "buyer"} onClick={() => setView("buyer")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setView("buyer"); } }}>
    <p style={{ margin: "0 0 7px", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><b style={{ fontSize: 13 }}>👁 Buyer watchlist</b><span style={{ marginLeft: "auto", border: "1px solid #c9c9c4", borderRadius: 5, padding: "2px 8px", fontSize: 9.5, color: "#777" }}>Search assets ⌕</span><span style={{ border: "1px solid #c9c9c4", borderRadius: 5, padding: "2px 8px", fontSize: 9.5 }}>Filters ≣</span></p>
    <p style={{ margin: "0 0 7px", fontSize: 10, color: "#555" }}>Saved assets, insights, and decisions at a glance.</p>
    <div style={{ overflowX: "auto" }}><table className="tks-table tks-table--micro tks-table--tight" style={tableStyle}><thead><tr><th>Asset</th><th>Key facts</th><th>Verification</th><th>Compare</th><th>Decision aids</th><th>Last updated</th></tr></thead>
      <tbody>{WATCHLIST.map((a) => <tr key={a.name}><td><b>{a.name}</b><br />{a.loc}<br /><span className="tks-tag">{a.tag}</span></td>
        <td style={{ whiteSpace: "nowrap" }}>Price {a.price}<br />NOI {a.noi}<br />Cap rate {a.cap}<br />Year built {a.year}</td>
        <td><b style={{ fontSize: 13 }}>{a.ver}%</b><br /><span className={a.status === "Verified" ? "tks-ver" : undefined}>{a.status}</span><br />{a.checks}<br />See details →</td>
        <td>{a.compare.map((c) => <span key={c} style={{ display: "block" }}>{c}</span>)}</td>
        <td style={{ whiteSpace: "nowrap" }}>Cash flow model<br />Comp set<br />Risk summary</td><td style={{ whiteSpace: "nowrap" }}>{a.updated}</td></tr>)}</tbody></table></div>
    <p style={{ margin: "8px 0 0", fontSize: 10.3 }}><b>Watchlist summary</b> — 3 Assets · $234.5M Total price · 5.2% Avg. cap rate · 85% Avg. verification <span style={{ float: "right" }} className="tks-btn tks-btn--ghost">⭳ Export watchlist</span></p>
  </div>;
  const sellerPanel = <div className={`tks-card${view === "seller" ? " is-on" : ""}`} style={{ padding: "9px 10px", minWidth: 0, cursor: "pointer" }} role="button" tabIndex={0} aria-pressed={view === "seller"} onClick={() => setView("seller")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setView("seller"); } }}>
    <p style={{ margin: "0 0 7px", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><b style={{ fontSize: 13 }}>⬢ Seller inventory</b><button type="button" className="tks-btn" style={{ marginLeft: "auto", padding: "2px 9px", fontSize: 10 }} aria-pressed={added} onClick={(e) => { e.stopPropagation(); setAdded((v) => !v); }}>{added ? "Asset draft added ✓" : "+ Add asset"}</button><span style={{ border: "1px solid #c9c9c4", borderRadius: 5, padding: "2px 8px", fontSize: 9.5, color: "#777" }}>Search inventory ⌕</span><span style={{ border: "1px solid #c9c9c4", borderRadius: 5, padding: "2px 8px", fontSize: 9.5 }}>Filters ≣</span></p>
    <p style={{ margin: "0 0 7px", fontSize: 10, color: "#555" }}>Listed assets, verification, and performance overview.</p>
    <div style={{ overflowX: "auto" }}><table className="tks-table tks-table--micro tks-table--tight" style={{ fontSize: 8 }}><thead><tr><th>Asset</th><th>Status</th><th>Verification</th><th>Volume</th><th>Performance (30D)</th><th>Last updated</th></tr></thead>
      <tbody>{INVENTORY.map((a) => <tr key={a.name}><td><b>{a.name}</b><br />{a.loc}<br /><span className="tks-tag">{a.tag}</span></td>
        <td style={{ whiteSpace: "nowrap" }}><b>{a.state === "Live" ? "● Live" : a.state === "Draft" ? "● Draft" : "● Paused"}</b><br />{a.listed}</td>
        <td><b style={{ fontSize: 13 }}>{a.ver}%</b><br /><span className={a.status === "Verified" ? "tks-ver" : undefined}>{a.status}</span><br />{a.checks}<br />See details →</td>
        <td style={{ whiteSpace: "nowrap" }}>Views {a.views}<br />Engaged {a.engaged}<br />Inquiries {a.inquiries}</td>
        <td>Watch adds {a.watch}<br />Avg. time on page {a.time}<br />Saves {a.saves}</td><td style={{ whiteSpace: "nowrap" }}>{a.updated}</td></tr>)}</tbody></table></div>
  </div>;
  return <div className="tks" role="region" aria-label="Tokenta buyer and seller views — interactive rebuild of Tokenta_29">
    <Head n="28" kicker="Buyer and seller views" />
    <h3>Buyer and seller views.</h3>
    <p className="tks-lede">The same marketplace system serves asset discovery for buyers and inventory management for sellers.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
      {buyerPanel}
      {sellerPanel}
    </div>
    <div className="tks-note" style={{ marginTop: 10 }}>
      <span><b>What stays consistent across both views</b> — A unified marketplace experience ensures clarity, trust, and comparability for every stakeholder.</span>
      <span><b>Shared table language</b> — Common columns and metrics make it easy to interpret and compare across roles.</span>
      <span><b>Evidence at your fingertips</b> — Verification status and proof links provide transparency and speed up due diligence.</span>
      <span><b>Consistent status states</b> — Live, in progress, draft, paused, and archived keep workflows clear and predictable.</span>
      <span><b>Pricing context included</b> — Price, NOI, cap rate, and comps stay front and center for faster, better decisions.</span>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_30 — Search query builder (printed № 29) ---------------- */

type Rule = { field: string; op: string; value: string };
const INITIAL_RULES: Rule[] = [
  { field: "Verification tier", op: "is greater than or equal to", value: "Tier 2" },
  { field: "Attestor quorum", op: "is greater than or equal to", value: "3 of 5" },
  { field: "Attestor spread", op: "is greater than or equal to", value: "3 organizations" },
  { field: "Region", op: "is any of", value: "North America" },
  { field: "Settlement method", op: "is", value: "Escrow" },
  { field: "Release conditions", op: "includes", value: "Dual control" },
  { field: "Dispute history", op: "has", value: "No open disputes" },
];
const FILTER_LIBRARY = ["Verification tier", "Attestor quorum", "Attestor spread", "Region / Jurisdiction", "Settlement method", "Release conditions", "Dispute history", "Document type", "Date / Time", "Custom fields"];
const QUERY_RESULTS = [
  ["Q2 2024 Revenue Attestation", "Verity Labs ✓", "Tier 3", "4 of 6", "4 organizations", "North America", "Escrow", "Dual control", "No open disputes", "2h ago"],
  ["SOC 2 Type II Report", "SecureTrust", "Tier 2", "3 of 5", "3 organizations", "North America", "Escrow", "Dual control", "No open disputes", "5h ago"],
  ["Q1 2024 Financials", "AuditLink", "Tier 2", "3 of 5", "3 organizations", "North America", "Escrow", "Dual control", "No open disputes", "1d ago"],
];

export function TokentaSearchQueryBuilder() {
  const [rules, setRules] = useState<Rule[]>(INITIAL_RULES);
  const [mode, setMode] = useState("All conditions (AND)");
  const [ran, setRan] = useState(false);
  const [saved, setSaved] = useState(false);
  const removeRule = (i: number) => { setRules((r) => r.filter((_, j) => j !== i)); setRan(false); };
  const addRule = () => {
    const unused = FILTER_LIBRARY.find((f) => !rules.some((r) => r.field === f));
    if (unused) setRules((r) => [...r, { field: unused, op: "is", value: "—" }]);
    setRan(false);
  };
  return <div className="tks" role="region" aria-label="Tokenta search query builder — interactive rebuild of Tokenta_30">
    <Head n="29" kicker="Search query builder" />
    <h3>Search query builder.</h3>
    <p className="tks-lede">Advanced filtering turns abstract trust requirements into structured search criteria.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 230px" }}>
      <div className="tks-card">
        <p style={{ margin: "0 0 8px", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><b style={{ fontSize: 14 }}>Query builder</b><span style={{ color: "#777" }}>Build advanced search criteria to find trusted attestations and providers.</span>
          <span style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            <span className="tks-chip">Load saved query ▾</span>
            <button type="button" className="tks-chip" aria-pressed={saved} onClick={() => setSaved((v) => !v)}>{saved ? "Query saved ✓" : "Save query"}</button>
            <button type="button" className="tks-btn" onClick={() => setRan(true)}>⌕ Run search</button>
          </span></p>
        <p className="tks-kicker">Active filters</p>
        <p style={{ margin: "4px 0 10px" }}>{rules.map((r, i) => <span key={r.field} className="tks-chip" style={{ margin: "0 5px 5px 0" }}>{r.field} — {r.value} <button type="button" aria-label={`Remove filter ${r.field}`} style={{ background: "none", border: "none", cursor: "pointer", font: "inherit" }} onClick={() => removeRule(i)}>✕</button></span>)}{rules.length === 0 && <span style={{ color: "#777" }}>No active filters.</span>}</p>
        <div className="tks-grid" style={{ gridTemplateColumns: "170px 1fr" }}>
          <div>
            <p className="tks-kicker">Filter library</p>
            <input aria-label="Search filters" placeholder="Search filters…" style={{ width: "100%", padding: "5px 8px", border: "1px solid #c9c9c4", borderRadius: 5, marginBottom: 6 }} />
            {FILTER_LIBRARY.map((f) => <p key={f} style={{ margin: "4px 0", color: rules.some((r) => r.field === f) ? "#111" : "#555" }}>{rules.some((r) => r.field === f) ? "● " : "○ "}{f} ▾</p>)}
            <button type="button" className="tks-btn tks-btn--ghost" style={{ borderStyle: "dashed", width: "100%" }} onClick={addRule}>+ Add custom rule</button>
          </div>
          <div>
            <p style={{ margin: "0 0 6px", display: "flex", justifyContent: "space-between" }}><b>Build logic</b><span>Logic mode <select aria-label="Logic mode" value={mode} onChange={(e) => setMode(e.target.value)} style={{ padding: "3px 6px", border: "1px solid #c9c9c4", borderRadius: 5 }}><option>All conditions (AND)</option><option>Any condition (OR)</option></select></span></p>
            {rules.map((r, i) => <p key={r.field} style={{ margin: "0 0 5px", display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
              <span className="tks-tag">{mode === "All conditions (AND)" ? "AND" : "OR"}</span>
              <span className="tks-chip" style={{ minWidth: 130 }}>{r.field}</span>
              <span className="tks-chip">{r.op} ▾</span>
              <span className="tks-chip" style={{ minWidth: 110 }}>{r.value} ▾</span>
              <button type="button" aria-label={`Delete rule ${r.field}`} style={{ background: "none", border: "none", cursor: "pointer" }} onClick={() => removeRule(i)}>🗑</button>
            </p>)}
            <p style={{ margin: "8px 0 0" }}><button type="button" className="tks-btn tks-btn--ghost" onClick={addRule}>+ Add rule</button> <span className="tks-btn tks-btn--ghost" style={{ display: "inline-block" }}>+ Add group</span> <button type="button" className="tks-btn tks-btn--ghost" style={{ border: "none" }} onClick={() => { setRules([]); setRan(false); }}>⟳ Clear all</button></p>
          </div>
        </div>
        <p style={{ margin: "12px 0 6px" }}><b>Results preview</b> <span className="tks-tag">{ran ? "24 results" : "24 results (printed)"}</span> <span style={{ float: "right" }}><span className="tks-chip">Columns ▾</span> <span className="tks-chip">⭳ Export</span></span></p>
        <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr>{["Attestation / Document", "Provider", "Verification tier", "Attestor quorum", "Attestor spread", "Region", "Settlement method", "Release conditions", "Dispute status", "Last updated"].map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>{QUERY_RESULTS.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{i === 8 ? <span className="tks-ver">● {c}</span> : c}</td>)}</tr>)}</tbody></table></div>
        <p style={{ color: "#777", margin: "6px 0 0" }} aria-live="polite">{rules.length} active rule{rules.length === 1 ? "" : "s"} · logic: {mode}.{ran ? " Search run — the 3 printed preview rows all satisfy the printed criteria." : ""}</p>
      </div>
      <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
        <div className="tks-card"><b>Structured search.</b><p style={{ color: "#555", margin: "4px 0 0" }}>Compose precise filters using pre-built rules and logic controls.</p></div>
        <div className="tks-card"><b>Institutional due diligence.</b><p style={{ color: "#555", margin: "4px 0 0" }}>Filter by quorum, spread, region, settlement, and dispute history to match policies.</p></div>
        <div className="tks-card"><b>Explainable filtering.</b><p style={{ color: "#555", margin: "4px 0 0" }}>Every result is tied to clear, auditable criteria for transparency and trust.</p></div>
      </div>
    </div>
    <Foot />
  </div>;
}

/** File-keyed bespoke Tokenta slides (printed deck). Returns null for
 *  files handled by the earlier title-keyed screens (01, 16, 17). */
/* ---------------- Tokenta_16 — Visual inspiration (pass 6 rebuild) ----------------
 * Pass 6 audit found this slot rendering the Order Room product screen
 * (the data title's subject). The printed Tokenta_16 is the visual-
 * inspiration slide: five dark reference panels with captions + tags. */

const INSP_PANELS: Array<{ n: number; title: string; tag: string; caption: string }> = [
  { n: 1, title: "Institutional terminals", tag: "DENSITY", caption: "Dense information architecture with clear sections, compact data, and operational clarity." },
  { n: 2, title: "Audit logs", tag: "PRECISION", caption: "Immutable, time-ordered records with explicit actors, actions, and outcomes." },
  { n: 3, title: "Code consoles", tag: "EXPLICIT STATES", caption: "Developer-grade interfaces that expose logic, states, and verifiable execution." },
  { n: 4, title: "Market-data grids", tag: "TRACEABILITY", caption: "High-information tables and charts that enable fast scanning and informed decisions." },
  { n: 5, title: "Regulatory documents", tag: "LEGIBILITY", caption: "Clear structure, numbered sections, and verifiable evidence for compliance and trust." },
];

export function TokentaVisualInspiration() {
  const [sel, setSel] = useState(0);
  const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
  const panel: React.CSSProperties = { background: "#101012", color: "#d7d7db", borderRadius: 8, padding: "10px 10px 12px", fontSize: 9.3, lineHeight: 1.5, minHeight: 252, outline: "none" };
  const hrow: React.CSSProperties = { display: "flex", justifyContent: "space-between", color: "#8b8b91", fontSize: 8.3, letterSpacing: ".08em", margin: "7px 0 3px" };
  const trow: React.CSSProperties = { display: "flex", justifyContent: "space-between", gap: 4, whiteSpace: "nowrap" };
  const bodies: React.ReactNode[] = [
    <div key="p1">
      <p style={hrow}><span>SESSION</span><span style={{ color: "#7ee2a0" }}>● LIVE</span></p>
      {[["User", "obsrv_7h8x2"], ["Role", "Risk Analyst"], ["Env", "prod"], ["Region", "us-east-1"], ["Time", "2025-05-13 09:41:22 UTC"]].map(([k, v]) => <p key={k} style={trow}><span style={{ color: "#8b8b91" }}>{k}</span><span>{v}</span></p>)}
      <p style={hrow}><span>ACTIONS</span><span>STATUS · TIME</span></p>
      {[["create", "esc_01H8Z", "✓ success", "09:41:22"], ["update", "term_sheet_22M", "✓ success", "09:41:58"], ["verify", "asset_7b3e", "✓ success", "09:42:10"], ["approve", "deal_7G9P1", "○ pending", "09:43:05"]].map(([a, o, s, t]) => <p key={a + o} style={trow}><span>{a}</span><span>{o}</span><span>{s}</span><span>{t}</span></p>)}
      <p style={hrow}><span>SYSTEM HEALTH</span><span>THROUGHPUT 1,240 req/min</span></p>
      {[["API", "99.98%", "86%"], ["DB", "99.95%", "78%"], ["Queue", "99.90%", "70%"], ["Indexer", "99.93%", "80%"]].map(([k, v, w]) => <p key={k} style={{ ...trow, alignItems: "center" }}><span style={{ color: "#8b8b91", flex: "0 0 42px" }}>{k}</span><span>{v}</span><span style={{ flex: 1, height: 3, background: "#26262a", marginLeft: 5 }}><span style={{ display: "block", height: 3, width: w, background: "#9a9aa0" }} /></span></p>)}
    </div>,
    <div key="p2">
      <p style={hrow}><span>AUDIT LOG</span><span>Filter ▤</span></p>
      {[["09:41:22", "obsrv_7h8x2", "create", "esc_01H8Z", "success"], ["09:41:58", "obsrv_7h8x2", "update", "term_22M", "success"], ["09:42:10", "svc_verifier", "verify", "asset_7b3e", "success"], ["09:43:05", "compliance_bot", "review", "deal_7G9P1", "pending"], ["09:44:11", "obsrv_7h8x2", "approve", "deal_7G9P1", "success"], ["09:45:02", "orcl_price", "publish", "price_eth", "success"], ["09:45:33", "risk_engine", "score", "asset_7b3e", "success"], ["09:46:01", "treasury_svc", "settle", "esc_01H8Z", "success"]].map((r) => <p key={r[0]} style={{ ...trow, fontSize: 8.6 }}><span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span><span style={{ color: r[4] === "success" ? "#7ee2a0" : "#e8c26a" }}>{r[4]}</span></p>)}
      <p style={hrow}><span>DETAILS</span></p>
      <pre style={{ ...mono, margin: 0, fontSize: 8.4, lineHeight: 1.55, color: "#b9b9be", whiteSpace: "pre-wrap" }}>{"{\n  \"event_id\": \"evt_0132K...9A7F\",\n  \"actor\": \"obsrv_7h8x2\",\n  \"action\": \"update\",\n  \"object\": \"term_22M\",\n  \"status\": \"success\",\n  \"ip\": \"10.0.4.21\",\n  \"tx_hash\": \"0x9f2b...a1c7\",\n  \"timestamp\": \"2025-05-13T09:41:58Z\"\n}"}</pre>
    </div>,
    <div key="p3">
      <p style={{ ...hrow, marginTop: 0 }}><span>escrow.sol</span><span>verifier.py</span><span>risk.ts</span></p>
      <pre style={{ ...mono, margin: 0, fontSize: 8.3, lineHeight: 1.5, color: "#c9c9ce", whiteSpace: "pre-wrap" }}>{"pragma solidity ^0.8.20;\ncontract Escrow {\n  enum State {\n    Locked,\n    PendingRelease,\n    Released,\n    Disputed,\n    Settled\n  }\n  State public state;\n  address public buyer;\n  address public seller;\n  uint256 public amount;\n  event StateChanged(State indexed newState);\n  event Released(bytes32 indexed proof);\n  function release(bytes32 proof) external {\n    require(state == State.PendingRelease);\n    state = State.Released;\n    emit StateChanged(state);\n    emit Released(proof);\n  }\n}"}</pre>
      <p style={{ ...hrow, marginBottom: 0 }}><span>Ln 1, Col 1 · Spaces: 2 · UTF-8 · Solidity</span><span style={{ color: "#7ee2a0" }}>✓ Verified</span></p>
    </div>,
    <div key="p4">
      <p style={hrow}><span>MARKET OVERVIEW</span><span style={{ color: "#7ee2a0" }}>● LIVE</span></p>
      {[["ETH", "2,518.43", "+1.23%", "$8.71B", "$2.14B"], ["BTC", "66,104.21", "+0.72%", "$12.34B", "$3.81B"], ["SOL", "162.77", "−0.31%", "$1.93B", "$0.89B"], ["USDC", "1.0001", "+0.01%", "$4.21B", "$1.75B"], ["LINK", "14.32", "+2.11%", "$0.64B", "$0.32B"]].map((r) => <p key={r[0]} style={trow}><b style={{ width: 30 }}>{r[0]}</b><span>{r[1]}</span><span style={{ color: r[2].startsWith("−") ? "#e88" : "#7ee2a0" }}>{r[2]}</span><span>{r[3]}</span><span>{r[4]}</span></p>)}
      <p style={hrow}><span>DEPTH (ETH / USDC)</span><span>SPREAD 0.06%</span></p>
      <svg viewBox="0 0 160 44" style={{ width: "100%", height: 44, display: "block" }} aria-hidden="true"><path d="M2,6 L30,10 L55,16 L78,26 L84,34 L90,26 L115,16 L140,10 L158,6 L158,42 L2,42 Z" fill="#3a3f4a" opacity="0.85" /><line x1="84" y1="2" x2="84" y2="42" stroke="#8b8b91" strokeDasharray="2 2" /></svg>
      <p style={hrow}><span>RECENT TRADES</span><span>PRICE · SIZE · SIDE</span></p>
      {[["09:41:22", "2,518.43", "12.45", "B"], ["09:41:19", "2,518.20", "3.11", "S"], ["09:41:18", "2,518.35", "8.00", "B"], ["09:41:17", "2,517.98", "1.25", "S"]].map((r) => <p key={r[0]} style={trow}><span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span></p>)}
    </div>,
    <div key="p5">
      <p style={hrow}><span>POLICY</span><span>v2.1 · May 12, 2025</span></p>
      <p style={{ margin: "2px 0 5px", fontSize: 11.5, color: "#fff" }}><b>Asset Verification Policy</b></p>
      <p style={{ margin: "0 0 4px" }}><b style={{ color: "#fff" }}>1. Purpose</b><br />Define requirements for verifying AI assets prior to listing, including provenance, model integrity, and usage rights.</p>
      <p style={{ margin: "0 0 4px" }}><b style={{ color: "#fff" }}>2. Scope</b><br />Applies to all AI assets submitted to the Tokenta marketplace.</p>
      <p style={{ margin: "0 0 3px" }}><b style={{ color: "#fff" }}>3. Requirements</b></p>
      {[["R1", "Provenance", "Source check", "Yes"], ["R2", "Model Integrity", "Hash + signature", "Yes"], ["R3", "License Validity", "License file", "Yes"], ["R4", "Data Rights", "Terms + proof", "Yes"], ["R5", "Safety Scan", "Scan report", "No"], ["R6", "Attribution", "Attribution info", "No"]].map((r) => <p key={r[0]} style={{ ...trow, borderTop: "1px solid #26262a", padding: "1.5px 0" }}><span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span></p>)}
      <p style={{ margin: "4px 0 0" }}><b style={{ color: "#fff" }}>4. Approval</b><br />Assets must meet all mandatory requirements. Approvals are recorded on-chain and immutable.<br /><b style={{ color: "#fff" }}>5. References</b> — See Policy Library for related documents.</p>
    </div>,
  ];
  return <div className="tks" role="region" aria-label="Tokenta visual inspiration — interactive rebuild of Tokenta_16">
    <Head n="16" kicker="Visual inspiration" />
    <h3>Visual inspiration.</h3>
    <p className="tks-lede">The design language borrows the rigor of institutional systems rather than the spectacle of typical crypto marketing.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginTop: 12 }}>
      {INSP_PANELS.map((p, i) => <div key={p.n}>
        <button type="button" aria-pressed={sel === i} onClick={() => setSel(i)} style={{ ...panel, width: "100%", textAlign: "left", cursor: "pointer", font: "inherit", boxShadow: sel === i ? "0 0 0 2px #141416" : "none" }}>
          <p style={{ margin: "0 0 6px", fontSize: 11.5, color: "#fff" }}><span style={{ border: "1.5px solid #d7d7db", borderRadius: 3, padding: "0 4px", marginRight: 6, fontWeight: 700 }}>{p.n}</span><b>{p.title}</b></p>
          {bodies[i]}
        </button>
        <p style={{ fontSize: 10.6, lineHeight: 1.5, color: "#3c3c41", margin: "8px 0 7px", minHeight: 48 }}>{p.caption}</p>
        <span style={{ border: "1.5px solid #141416", padding: "2px 8px", fontSize: 9.6, fontWeight: 700, letterSpacing: ".1em" }}>{p.tag}</span>
      </div>)}
    </div>
    <p style={{ fontSize: 10.6, color: "#3c3c41", margin: "14px 0 0" }}>ⓘ References are directional, not copied.</p>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_17 — Wireframe wall (pass 6 rebuild) ----------------
 * Printed header number is 20. The printed slide is a wall of six light
 * wireframe screens + five design questions; the slot previously
 * rendered the hi-fi Term Sheet Builder product screen instead. */

export function TokentaWireframeWall() {
  const [sel, setSel] = useState(0);
  const wf: React.CSSProperties = { border: "1.5px solid #c9c9ce", borderRadius: 8, background: "#f4f4f2", padding: "8px 8px", fontSize: 9.0, lineHeight: 1.5, color: "#3c3c41", minHeight: 218, textAlign: "left", width: "100%", cursor: "pointer", font: "inherit", minWidth: 0, overflow: "hidden" };
  const wh: React.CSSProperties = { margin: "0 0 6px", fontSize: 11, color: "#141416" };
  const num: React.CSSProperties = { background: "#141416", color: "#fff", borderRadius: 3, padding: "0 5px", marginRight: 6, fontWeight: 700 };
  const row: React.CSSProperties = { display: "flex", justifyContent: "space-between", gap: 4 };
  const screens: React.ReactNode[] = [
    <div key="w1">
      <p style={wh}><span style={num}>1</span><b>Dashboard</b> <span style={{ color: "#8b8b91" }}>At-a-glance overview of activity, assets, and system health.</span></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4 }}>{[["Total Assets", "359"], ["TVL", "18.50B TKA"], ["Active Orders", "102"], ["Escrows", "24"], ["Disputes", "3"]].map(([k, v]) => <span key={k} style={{ border: "1px solid #d8d8dc", borderRadius: 5, padding: "3px 4px" }}>{k}<br /><b style={{ color: "#141416", fontSize: 10.5 }}>{v}</b></span>)}</div>
      <p style={{ margin: "6px 0 2px" }}><b style={{ color: "#141416" }}>Activity feed</b></p>
      {["Asset \"Llama-3.1-70B-Instruct\" listed · 2m ago", "Escrow deal_01H8Z...7G9P1 locked · 5m ago", "Quorum completed for deal_01H8Z... · 12m ago", "Dispute opened: deal_01H8Z...7G9P1 · 18m ago", "Attestation created for CodeTrove-22M · 22m ago"].map((t) => <p key={t} style={{ ...row, margin: "1.5px 0" }}><span>○ {t}</span></p>)}
      <svg viewBox="0 0 160 30" style={{ width: "100%", height: 30, display: "block", marginTop: 4 }} aria-hidden="true"><polyline points="0,22 20,18 40,20 60,12 80,15 100,8 120,11 140,5 159,7" fill="none" stroke="#8b8b91" strokeWidth="1.5" /></svg>
      <p style={row}><span>Trading volume<br /><b style={{ color: "#141416" }}>2.41M TKA</b></span><span>Escrow volume<br /><b style={{ color: "#141416" }}>18.50B TKA</b></span><span style={{ color: "#8b8b91" }}>View all activity →</span></p>
    </div>,
    <div key="w2">
      <p style={wh}><span style={num}>2</span><b>Marketplace</b> <span style={{ color: "#8b8b91" }}>Browse, search, and filter verifiable AI assets.</span></p>
      <p style={{ ...row, border: "1px solid #d8d8dc", borderRadius: 5, padding: "2px 6px", margin: "0 0 5px" }}><span>⌕ Search assets by name, capability, or creator…</span><span>Filters · Sort: Recently listed</span></p>
      <p style={{ margin: "0 0 2px", color: "#8b8b91" }}>Filters — Asset type: ☐ Model ☐ Dataset ☐ Agent ☐ Tool ☐ Eval Suite · Capabilities: Reasoning, Vision, Code, Math, Multimodal · Verification status: ☐ Verified ☐ In verification</p>
      {[["Llama-3.1-70B-Instruct", "Model", "Meta AI", "125,000", "2.41M", "2d ago"], ["CodeTrove-22M", "Dataset", "AI Collective", "18,500", "892K", "3d ago"], ["VisionPro-Agent", "Agent", "VisionLabs", "42,000", "1.12M", "5d ago"], ["MathEval-1.0", "Eval Suite", "OpenEval", "7,250", "312K", "6d ago"], ["SQLCoder-33B", "Model", "DataSynth", "64,000", "1.05M", "6d ago"]].map((r) => <p key={r[0]} style={{ ...row, margin: "2px 0", borderTop: "1px solid #e4e4e8", paddingTop: 2 }}><span><b style={{ color: "#141416" }}>{r[0]}</b></span><span>{r[1]}</span><span>{r[2]}</span><span>✓</span><span>{r[3]}</span><span>{r[4]}</span><span>{r[5]}</span></p>)}
      <p style={{ ...row, margin: "4px 0 0", color: "#8b8b91" }}><span>Showing 1–5 of 359 assets</span><span>‹ 1 2 3 … 72 ›</span></p>
    </div>,
    <div key="w3">
      <p style={wh}><span style={num}>3</span><b>Asset detail</b> <span style={{ color: "#8b8b91" }}>Deep dive into an asset with evidence, stats, and provenance.</span></p>
      <p style={{ ...row, flexWrap: "wrap", gap: "2px 8px" }}><span><b style={{ color: "#141416", fontSize: 11.5 }}>Llama-3.1-70B-Instruct</b> ✓ Verified<br /><span style={{ color: "#8b8b91" }}>Model · Meta AI · Listed 2d ago</span></span><span style={{ textAlign: "right" }}><b style={{ color: "#141416" }}>125,000 TKA</b><br /><span style={{ background: "#141416", color: "#fff", borderRadius: 4, padding: "1px 6px", fontSize: 8.6, whiteSpace: "nowrap" }}>Buy or Make Offer</span></span></p>
      <p style={{ margin: "5px 0", color: "#8b8b91" }}>Overview · Evidence · Attestations · Provenance · Usage · Activity</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        <p style={{ margin: 0 }}><b style={{ color: "#141416" }}>Key metrics</b><br />Parameters 70B · Context length 128K<br />Training data 15T tokens · Creator Meta Llama 3 Community<br />Usage (30D) 2.41M TKA · TVL 2.41M TKA</p>
        <p style={{ margin: 0 }}><b style={{ color: "#141416" }}>Verification</b><br />Status Verified · Verified by Tokenta Verifiers<br />Verified on May 13, 2025 · Attestations 5 of 7</p>
      </div>
      <p style={{ margin: "6px 0 0" }}><b style={{ color: "#141416" }}>Provenance summary</b><br />Created Apr 12, 2025 → Trained Apr 15, 2025 → Evaluated Apr 28, 2025 → Verified May 13, 2025</p>
    </div>,
    <div key="w4">
      <p style={wh}><span style={num}>4</span><b>Order Room</b> <span style={{ color: "#8b8b91" }}>Negotiate terms, compare offers, and finalize deals.</span></p>
      <p style={{ margin: "0 0 4px", color: "#8b8b91" }}>Open Offers · My Offers · Counterparties · History · Create Offer</p>
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.2fr 1fr", gap: 6 }}>
        <p style={{ margin: 0 }}><b style={{ color: "#141416" }}>Active conversation</b><br />AI Collective did:tok:…9h3tq ●<br />NeuralWorks did:tok:…7h8x2 ●<br /><span style={{ border: "1px solid #c9c9ce", borderRadius: 4, padding: "0 5px" }}>Invite Counterparty</span></p>
        <p style={{ margin: 0 }}><b style={{ color: "#141416" }}>Conversation</b><br />AI Collective 10:21 — Proposing initial terms for CodeTrove-22M.<br />NeuralWorks 10:22 — Can we adjust the usage cap to 500M tokens/month?<br />AI Collective 10:23 — Yes, and we can include a performance guarantee.<br />NeuralWorks 10:24 — Agreed. Please send the updated term sheet.</p>
        <p style={{ margin: 0 }}><b style={{ color: "#141416" }}>Term sheet (v1.2)</b><br />Asset CodeTrove-22M · License Commercial<br />Usage cap 500M tokens / month · Territory Worldwide<br />Exclusivity Non-exclusive · Performance ≥ 92% pass on HumanEval<br />Price 18,500 TKA · Payment Upon release<br />Governing law Singapore · Dispute resolution Tokenta Arbitration</p>
      </div>
    </div>,
    <div key="w5">
      <p style={wh}><span style={num}>5</span><b>Escrow</b> <span style={{ color: "#8b8b91" }}>Secure execution with clear states and full transparency.</span></p>
      <p style={{ margin: "0 0 5px" }}>{["LOCKED", "PENDING RELEASE", "RELEASED", "DISPUTE", "SETTLED"].map((s, i) => <span key={s} style={{ border: "1px solid #c9c9ce", borderRadius: 999, padding: "0 6px", marginRight: 3, background: i === 0 ? "#e8e8ea" : undefined }}>{s}{i < 4 ? " →" : ""}</span>)}</p>
      <p style={row}><span>Buyer <b style={{ color: "#141416" }}>NeuralWorks</b> did:tok:…7h8x2</span><span>🔒 <b style={{ color: "#141416" }}>18,500 TKA Locked</b></span><span>Seller <b style={{ color: "#141416" }}>AI Collective</b> did:tok:…9h3tq</span></p>
      <p style={{ margin: "4px 0" }}>Escrow ID deal_01H8Z…7G9P1 · Locked May 12, 2025</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        <p style={{ margin: 0 }}><b style={{ color: "#141416" }}>Escrow details</b><br />Asset CodeTrove-22M · Amount 18,500 TKA<br />Created May 12, 2025 14:32 UTC · Release conditions 1<br />Dispute window 7 days · Arbitration Tokenta Arbitration<br />Current state Locked</p>
        <p style={{ margin: 0 }}><b style={{ color: "#141416" }}>State timeline</b><br />◉ Locked — May 12, 2025 14:32 UTC — Funds and assets are locked in escrow.<br />○ Pending Release — Buyer has confirmed conditions. Awaiting final release.<br />○ Released — Assets released to buyer. Funds released to seller.<br />○ Dispute — Dispute raised. Escrow hold pending resolution.<br />○ Settled — Dispute resolved. Funds and/or assets allocated.</p>
      </div>
    </div>,
    <div key="w6">
      <p style={wh}><span style={num}>6</span><b>Analytics</b> <span style={{ color: "#8b8b91" }}>Monitor performance, risk, and ecosystem health.</span></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4 }}>{[["Trading volume", "2.41M TKA", "↑ 12.4%"], ["Active assets", "359", "↑ 8.1%"], ["Unique buyers", "241", "↑ 15.7%"], ["Escrow volume", "18.50B TKA", "↑ 9.6%"], ["Dispute rate", "0.42%", "↓ 1.2%"]].map(([k, v, d]) => <span key={k} style={{ border: "1px solid #d8d8dc", borderRadius: 5, padding: "3px 4px" }}>{k}<br /><b style={{ color: "#141416", fontSize: 10.5 }}>{v}</b> {d}</span>)}</div>
      <p style={{ margin: "5px 0 2px" }}>Top asset types — Models 48% · Datasets 22% · Agents 15% · Tools 9% · Eval Suites 6%<br />Geography (buyers) — US 32% · SG 18% · GB 11% · DE 7% · Other 32%</p>
      {[["Llama-3.1-70B-Instruct", "Model", "2.41M", "↑ 12.4%", "142"], ["CodeTrove-22M", "Dataset", "1.12M", "↑ 9.1%", "98"], ["VisionPro-Agent", "Agent", "892K", "↑ 14.3%", "76"]].map((r) => <p key={r[0]} style={{ ...row, margin: "2px 0", borderTop: "1px solid #e4e4e8", paddingTop: 2 }}><span><b style={{ color: "#141416" }}>{r[0]}</b></span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span><span>{r[4]}</span></p>)}
      <p style={{ margin: "3px 0 0", color: "#8b8b91" }}>Top assets by volume · View full analytics →</p>
    </div>,
  ];
  const questions: Array<[string, string]> = [
    ["1. Density", "How much information can we show without sacrificing clarity?"],
    ["2. Navigation", "How do users move between tasks and maintain context?"],
    ["3. Comparison", "How do we enable side-by-side comparison and evaluation?"],
    ["4. State legibility", "Are system states, progress, and statuses immediately clear?"],
    ["5. Responsive prioritization", "What's essential at each breakpoint and how should it adapt?"],
  ];
  return <div className="tks" role="region" aria-label="Tokenta wireframe wall — interactive rebuild of Tokenta_17">
    <Head n="20." kicker="Wireframe wall" />
    <h3>Wireframe wall.</h3>
    <p className="tks-lede">Dense institutional screens were resolved through hierarchy before final styling.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 12 }}>
      {screens.map((s, i) => <button key={i} type="button" aria-pressed={sel === i} onClick={() => setSel(i)} style={{ ...wf, boxShadow: sel === i ? "0 0 0 2px #141416" : "none" }}>{s}</button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "0.8fr repeat(5, 1fr)", gap: 12, marginTop: 14, borderTop: "1.5px solid #141416", paddingTop: 10 }}>
      <p style={{ margin: 0, fontSize: 12.5, fontWeight: 600, lineHeight: 1.45 }}>Design questions solved at the wireframe stage.</p>
      {questions.map(([t, q]) => <p key={t} style={{ margin: 0, fontSize: 10.4, lineHeight: 1.5, color: "#3c3c41" }}><b style={{ color: "#141416" }}>{t}</b><br />{q}</p>)}
    </div>
    <Foot />
  </div>;
}

export function tokentaSlideFor(file: string) {
  if (file.startsWith("Tokenta_06")) return <TokentaThesisEvolution />;
  if (file.startsWith("Tokenta_07")) return <TokentaProductPrinciples />;
  if (file.startsWith("Tokenta_08")) return <TokentaScopeBoundary />;
  if (file.startsWith("Tokenta_09")) return <TokentaUserRoles />;
  if (file.startsWith("Tokenta_10")) return <TokentaObjectModel />;
  if (file.startsWith("Tokenta_11")) return <TokentaTrustArchitecture />;
  if (file.startsWith("Tokenta_12")) return <TokentaServiceBlueprint />;
  if (file.startsWith("Tokenta_13")) return <TokentaRouteMap />;
  if (file.startsWith("Tokenta_14")) return <TokentaNavigationPriorities />;
  if (file.startsWith("Tokenta_15")) return <TokentaContentTemplates />;
  if (file.startsWith("Tokenta_16")) return <TokentaVisualInspiration />;
  if (file.startsWith("Tokenta_17")) return <TokentaWireframeWall />;
  if (file.startsWith("Tokenta_21")) return <TokentaDensityStudy />;
  if (file.startsWith("Tokenta_22")) return <TokentaVerificationSixStages />;
  if (file.startsWith("Tokenta_23")) return <TokentaComponentLibrary />;
  if (file.startsWith("Tokenta_24")) return <TokentaResponsiveGrid />;
  if (file.startsWith("Tokenta_25")) return <TokentaHomepageHero />;
  if (file.startsWith("Tokenta_26")) return <TokentaTerminalOverview />;
  if (file.startsWith("Tokenta_27")) return <TokentaHomepageStoryline />;
  if (file.startsWith("Tokenta_28")) return <TokentaMarketplaceGrid />;
  if (file.startsWith("Tokenta_29")) return <TokentaBuyerSellerViews />;
  if (file.startsWith("Tokenta_30")) return <TokentaSearchQueryBuilder />;
  return null;
}
