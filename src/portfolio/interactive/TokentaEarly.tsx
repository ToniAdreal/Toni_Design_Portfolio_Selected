import { useState } from "react";
import "./tokenta-slides.css";

/**
 * Bespoke rebuilds of Tokenta deck slides 02–05, transcribed from the
 * actual image files in public/projects/ (Tokenta_02–05.webp).
 * NOTE: the data-file titles/captions for these slots describe other
 * screens (see BUILD_NOTES §6.1) — everything below is from the images.
 */

const FOOT = ["Verifiable by design", "Decentralized attestation", "Enforceable deals", "Secure escrow", "Auditable by default"];
function Head({ n, kicker }: { n: string; kicker?: string }) {
  return <div className="tks-head"><span><b>{n}</b>{kicker ? <>&nbsp;&nbsp;|&nbsp;&nbsp;{kicker}</> : null}</span><span className="tks-brand">⌂ TOKENTA</span></div>;
}
function Foot() { return <div className="tks-foot">{FOOT.map((f) => <span key={f}>{f}</span>)}<span>tokenta.com</span></div>; }

/* ---------------- Tokenta_02 — Solo ownership ---------------- */

const ROLES = [
  { n: "01", icon: "💡", title: "Product thesis", body: "Define the problem, user, and value.", tags: "why this, why now, why us" },
  { n: "02", icon: "◎", title: "Product strategy", body: "Market analysis, positioning, and success metrics.", tags: "goals, KPIs, roadmap" },
  { n: "03", icon: "⑆", title: "Information architecture", body: "Structure content, flows, and data for clarity and scale.", tags: "models, flows, navigation" },
  { n: "04", icon: "✒", title: "UX / UI design", body: "Craft intuitive experiences that deliver real outcomes.", tags: "wireframes, prototypes, UI" },
  { n: "05", icon: "T", title: "Visual identity", body: "Create a timeless, credible brand presence.", tags: "logo, typography, voice" },
  { n: "06", icon: "▦", title: "Design system", body: "Build reusable components and patterns for velocity.", tags: "tokens, components, patterns" },
  { n: "07", icon: "</>", title: "Front-end engineering", body: "Develop responsive, accessible, performant interfaces.", tags: "react, typescript, tailwind" },
  { n: "08", icon: "▤", title: "Technical documentation", body: "Write clear docs for users, developers, and operators.", tags: "guides, references, runbooks" },
  { n: "09", icon: "🛡", title: "Quality assurance", body: "Test thoroughly across devices, browsers, and edge cases.", tags: "tests, validation, a11y" },
  { n: "10", icon: "☁", title: "Deployment", body: "Ship confidently with secure, repeatable deployments.", tags: "CI/CD, monitoring, metrics" },
];

export function TokentaSoloOwnership() {
  const [active, setActive] = useState(0);
  const r = ROLES[active];
  return <div className="tks" role="region" aria-label="Solo ownership — interactive rebuild of Tokenta_02">
    <Head n="02" kicker="Solo ownership" />
    <h3>Solo ownership</h3>
    <p className="tks-lede">End-to-end ownership across strategy, design, and engineering—from first principles to production.</p>
    <div className="tks-card" style={{ background: "#111", color: "#fff", textAlign: "center", marginBottom: 10 }}>
      <div style={{ fontSize: 22 }} aria-hidden="true">👤</div>
      <p style={{ fontSize: 18, fontWeight: 800, margin: "4px 0 0" }}>Independent<br />product builder</p>
      <p className="tks-kicker" style={{ color: "#b9b9be" }}>end-to-end owner</p>
      <p style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 11, margin: "8px 0 2px" }}>$&nbsp; I define, design, build, document, test, and ship secure products end-to-end.</p>
      <p style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 11, margin: 0 }}>&gt;&nbsp; One owner. Full accountability.</p>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }} role="group" aria-label="Ownership disciplines">
      {ROLES.map((role, i) => <button key={role.n} type="button" className={`tks-card${i === active ? " is-on" : ""}`} style={{ background: "#111", color: "#fff", borderColor: "#111" }} aria-pressed={i === active} onClick={() => setActive(i)}>
        <span aria-hidden="true">{role.icon}</span> <span className="tks-num tks-num--light">{role.n}</span>
        <p style={{ fontWeight: 700, margin: "6px 0 4px", fontSize: 12 }}>{role.title}</p>
        <p style={{ color: "#c9c9ce", fontSize: 10.5, margin: 0 }}>$ {role.tags}</p>
      </button>)}
    </div>
    <div className="tks-detail" aria-live="polite"><b>{r.n} · {r.title}</b><p style={{ margin: "5px 0 0" }}>{r.body}</p><p style={{ margin: "4px 0 0" }} className="tks-kicker">$ {r.tags}</p></div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_03 — The fragmented market ---------------- */

const STAGES = [
  { n: 1, title: "Discovery", sub: "Scattered & opaque", note: "Opportunities are hidden across fragmented channels with no single source of truth.", risk: "High friction", riskBody: "Hard to find the right counterparties.",
    artifact: <table className="tks-table"><tbody>{[["Discord", "#model-market", "12"], ["Telegram", "ai-marketplace", "8"], ["X (Twitter)", "#llm-access", "24"], ["Reddit", "r/LocalLlama", "5"], ["Private Network", "Members only", "🔒"]].map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody></table> },
  { n: 2, title: "Outreach", sub: "Private & untracked", note: "Conversations happen in DMs and group chats—easy to lose, hard to verify.", risk: "No audit trail", riskBody: "Critical context lives in ephemeral chats.",
    artifact: <div><p style={{ margin: "0 0 6px" }}><b>@provider_xyz</b> · online</p><p style={{ margin: "3px 0" }}>“Hi, we're interested in Llama-3.1 access.” <span className="tks-kicker">10:21 AM</span></p><p style={{ margin: "3px 0" }}>“Sure, what's your use case and scale?”</p><p style={{ margin: "3px 0" }}>“~500M tokens/month across prod workloads.” <span className="tks-kicker">10:23 AM</span></p><p style={{ margin: "3px 0" }}>“Okay, I'll send details.”</p></div> },
  { n: 3, title: "Terms & Pricing", sub: "Spreadsheets & files", note: "Terms are exchanged as spreadsheets or docs—versioned manually, often inconsistently.", risk: "Version drift", riskBody: "Conflicting terms create risk and confusion.",
    artifact: <div><p style={{ margin: "0 0 6px" }}>📄 <b>Pricing_Terms_v3.xlsx</b> · 23 KB</p><table className="tks-table"><tbody>{[["Model", "Llama-3.1-70B-Instruct"], ["Price (Input)", "$0.18 / 1M tokens"], ["Price (Output)", "$0.36 / 1M tokens"], ["Min. Commit", "$18,000 / month"], ["Rate Limit", "500 RPS"], ["Data Retention", "7 days"], ["Jurisdiction", "Cayman Islands"], ["SLA", "Best Effort"]].map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody></table></div> },
  { n: 4, title: "Access Setup", sub: "Keys & credentials", note: "Access is provisioned via API keys and endpoints—hard to rotate, easy to leak.", risk: "Key risk", riskBody: "Keys are static, over-privileged, hard to revoke.",
    artifact: <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 11 }}><p style={{ margin: "0 0 6px" }}>📄 provider_keys.txt · 1 KB</p><p style={{ margin: "2px 0" }}>sk_live_51H8Z...7Q9P1</p><p style={{ margin: "2px 0" }}>sk_live_83c7K...3L2B8</p><p style={{ margin: "2px 0" }}>sk_live_d9F3a...6M7N2</p><p style={{ margin: "8px 0 2px", fontFamily: "Inter,sans-serif" }}><b>Endpoint</b><br />https://api.provider.xyz/v1</p><p style={{ margin: "4px 0 0", fontFamily: "Inter,sans-serif" }}><b>Rate Limits</b> — 500 RPM / 10M TPM</p></div> },
  { n: 5, title: "Payment", sub: "Invoices & wires", note: "Invoices and off-chain or on-chain payments happen outside the product.", risk: "Settlement risk", riskBody: "Payments are manual, slow, and hard to reconcile.",
    artifact: <div><p style={{ margin: "0 0 4px" }}><b>Invoice #INV-2025-0412</b></p><p style={{ margin: "2px 0" }}>Provider: 0x9f2b...a1c7 · Date: May 12, 2025</p><p style={{ margin: "6px 0 2px" }}>Amount Due<br /><b style={{ fontSize: 16 }}>18,500 TKA</b> ($18,500 USD)</p><p style={{ margin: "2px 0" }}>Due Date: May 19, 2025</p><p style={{ margin: "6px 0 2px" }}><b>Wire Instructions</b> — Bank: Example Bank · Account: 9876 5432 · SWIFT: EXAMPLUS33</p></div> },
  { n: 6, title: "Compliance", sub: "Manual trust checks", note: "Trust is established through manual, duplicative checks without auditability.", risk: "Trust is manual", riskBody: "Slow, subjective, and not reproducible.",
    artifact: <table className="tks-table"><tbody>{[["Company Verification", "Pending"], ["KYB / KYC", "Pending"], ["Sanctions Screening", "Manual"], ["Jurisdiction Check", "Pending"], ["Security Review", "Pending"], ["Reference Check", "Manual"], ["Legal Review", "Pending"]].map(([a, b]) => <tr key={a}><td>☑ {a}</td><td>{b}</td></tr>)}</tbody></table> },
  { n: 7, title: "Ongoing Ops", sub: "Siloed & brittle", note: "Day-to-day operations live in scattered threads and tools with limited visibility.", risk: "Operational drag", riskBody: "Silos and handoffs don't scale.",
    artifact: <div><table className="tks-table"><tbody>{[["Rate limit increase", "May 20"], ["Key rotation request", "May 21"], ["Billing question", "May 22"], ["Model update?", "May 24"], ["Outage follow-up", "May 26"]].map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody></table><p style={{ margin: "6px 0 0" }}><b>Monitoring (DIY)</b> — a hand-drawn chart, no shared source of truth.</p></div> },
];
const RESULT_METRICS = [["5–14", "days", "Average time to first token"], ["6–12", "", "Touchpoints across tools"], ["3–7", "", "Versions of terms per deal"], ["2–5", "", "Manual approvals on average"], ["1–3%+", "", "Revenue lost to leakage & errors"], ["0", "", "Single source of truth"]];

export function TokentaFragmentedMarket() {
  const [active, setActive] = useState(0);
  const s = STAGES[active];
  return <div className="tks" role="region" aria-label="The fragmented market — interactive rebuild of Tokenta_03">
    <Head n="03" kicker="The market trust problem" />
    <h3>The fragmented market.</h3>
    <p className="tks-lede">Today, AI access rights are traded in pieces. Access to AI assets moves across private channels, spreadsheets, email threads, API keys, invoices, and bank wires. Every step is manual, disconnected, and hard to trust.</p>
    <div className="tks-flow" role="group" aria-label="Fragmented deal stages">
      {STAGES.map((st, i) => <span key={st.n} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">⇢</span>}<button type="button" className="tks-node" style={{ background: "#111", color: "#fff" }} aria-pressed={i === active} onClick={() => setActive(i)}><span className="tks-num tks-num--light">{st.n}</span> <b>{st.title}</b><br /><span style={{ color: "#b9b9be", fontSize: 10.5 }}>{st.sub}</span></button></span>)}
    </div>
    <div className="tks-detail" aria-live="polite">
      <div className="tks-grid" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
        <div>{s.artifact}</div>
        <div><p style={{ margin: "0 0 8px" }}>{s.note}</p><div className="tks-note"><span aria-hidden="true">⚠</span><span><b>{s.risk}</b><br />{s.riskBody}</span></div></div>
      </div>
    </div>
    <div className="tks-card" style={{ marginTop: 10 }}>
      <p style={{ fontWeight: 700, margin: "0 0 8px" }}>The result: fragmented, slow, and hard to trust.</p>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        {RESULT_METRICS.map(([v, u, l]) => <div key={l}><b style={{ fontSize: 17 }}>{v}</b>{u ? <span> {u}</span> : null}<p className="tks-kicker" style={{ margin: "2px 0 0", textTransform: "none", letterSpacing: 0 }}>{l}</p></div>)}
      </div>
      <p style={{ margin: "10px 0 0" }}>A complex, manual process creates unnecessary risk for buyers and sellers—and blocks the development of a transparent, verifiable market for AI assets. <b style={{ background: "#111", color: "#fff", padding: "6px 10px", borderRadius: 6, display: "inline-block" }}>Tokenta fixes this. One verifiable path for discovery, attestation, access, and settlement. →</b></p>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_04 — Risk map ---------------- */

const RISKS = [
  { n: 1, icon: "🫆", risk: "Authenticity", wrong: "Assets may be forged, altered, or misrepresented.", response: "Provenance verification", points: ["Multi-source provenance checks", "Model + dataset verification", "Immutable lineage on-chain"], outcome: "Only authentic, verifiable assets enter the market." },
  { n: 2, icon: "🗐", risk: "Double-selling", wrong: "The same asset is sold or pledged multiple times.", response: "Attestation & listing controls", points: ["Unique asset attestation", "Listing eligibility checks", "Real-time duplicate detection"], outcome: "Each asset is unique, listed once, and protected." },
  { n: 3, icon: "🚚", risk: "Delivery", wrong: "Assets aren't delivered as promised or on time.", response: "Order Room & term-sheet controls", points: ["Negotiated terms & obligations", "Milestone tracking", "Delivery confirmations"], outcome: "Clear obligations. Tracked milestones. Reliable delivery." },
  { n: 4, icon: "👤", risk: "Counterparty", wrong: "Parties may be unknown, unverified, or act in bad faith.", response: "Escrow & identity controls", points: ["Verified identities & credentials", "Escrowed execution", "Policy & behavior monitoring"], outcome: "Trusted counterparties. Aligned incentives. Reduced default risk." },
  { n: 5, icon: "🔒", risk: "Settlement", wrong: "Settlement can be delayed, disputed, or irreversible without proof of performance.", response: "Machine-verifiable settlement with reputation effects", points: ["On-chain proofs & finality", "Automated releases", "Reputation & arbitration records"], outcome: "Secure settlement. Audit trails. Reputation compounds." },
];

export function TokentaRiskMap() {
  const [active, setActive] = useState(0);
  const [applied, setApplied] = useState<boolean[]>(RISKS.map(() => false));
  const r = RISKS[active];
  return <div className="tks" role="region" aria-label="Risk map — interactive rebuild of Tokenta_04">
    <Head n="04." kicker="RISK MAP" />
    <h3>Risk map.</h3>
    <p className="tks-lede">Five core market risks—and how Tokenta neutralizes them with verifiable infrastructure.</p>
    <table className="tks-table">
      <thead><tr><th>Market risk</th><th>What can go wrong</th><th>Tokenta response</th><th>Outcome</th></tr></thead>
      <tbody>
        {RISKS.map((row, i) => <tr key={row.n} onClick={() => setActive(i)} style={{ cursor: "pointer", background: i === active ? "#ececea" : undefined }} aria-selected={i === active}>
          <td><span className="tks-num">{row.n}</span> <span aria-hidden="true">{row.icon}</span> <b>{row.risk}</b></td>
          <td>{row.wrong}</td>
          <td><b>{row.response}</b><br />{row.points.map((p) => <span key={p}>• {p}<br /></span>)}</td>
          <td>{applied[i] ? <span className="tks-ver">✓ </span> : null}{row.outcome}</td>
        </tr>)}
      </tbody>
    </table>
    <div className="tks-detail" aria-live="polite">
      <b>{r.n}. {r.risk}</b> — {r.wrong}
      <p style={{ margin: "6px 0 0" }}><button type="button" className="tks-btn" aria-pressed={applied[active]} onClick={() => setApplied((a) => a.map((v, i) => (i === active ? !v : v)))}>{applied[active] ? `✓ Response applied — ${r.response}` : `Apply response: ${r.response}`}</button> <span className="tks-kicker">{RISKS.filter((_, i) => applied[i]).length} / 5 risks neutralized</span></p>
    </div>
    <Foot />
  </div>;
}

/* ---------------- Tokenta_05 — The closed trust loop ---------------- */

const LOOP = [
  { n: 1, icon: "🛡", title: "Proof", body: "Assets are verified through rigorous attestation, provenance, and policy checks." },
  { n: 2, icon: "💧", title: "Liquidity", body: "Verified assets are listed in the marketplace, unlocking initial liquidity and trading activity." },
  { n: 3, icon: "▤", title: "Settlement", body: "Escrow-enforced settlement ensures secure, auditable delivery and fair execution." },
  { n: 4, icon: "👤", title: "Reputation", body: "Successful deals and dispute-free settlements build verifiable reputation for assets and parties." },
  { n: 5, icon: "📈", title: "Better Liquidity", body: "Stronger reputation attracts more participants and capital—deepening markets and improving liquidity." },
];

export function TokentaTrustLoop() {
  const [step, setStep] = useState(0);
  const [cycles, setCycles] = useState(0);
  const advance = () => { if (step >= LOOP.length - 1) { setStep(0); setCycles((c) => c + 1); } else setStep((s) => s + 1); };
  const cur = LOOP[step];
  return <div className="tks" role="region" aria-label="The closed trust loop — interactive rebuild of Tokenta_05">
    <Head n="05" kicker="Opportunity loop" />
    <h3>The closed trust loop.</h3>
    <p className="tks-lede">Better reputation creates better liquidity. Tokenta aligns verification, liquidity, settlement, and reputation in a self-reinforcing loop—unlocking more capital for verified AI assets.</p>
    <div className="tks-flow" role="group" aria-label="Trust loop stages">
      {LOOP.map((node, i) => <span key={node.n} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" style={{ textAlign: "center", borderRadius: 999, aspectRatio: "1", maxWidth: 130, margin: "0 auto" }} aria-pressed={i === step} onClick={() => setStep(i)}><span className="tks-num">{node.n}</span><br /><span style={{ fontSize: 18 }} aria-hidden="true">{node.icon}</span><br /><b style={{ fontSize: 11 }}>{node.title}</b></button></span>)}
    </div>
    <div className="tks-detail" aria-live="polite" style={{ textAlign: "center" }}>
      <p style={{ margin: "0 0 4px" }}><b>⌂ TOKENTA</b></p>
      <p style={{ margin: "0 0 8px" }}>A virtuous cycle of trust that compounds value across the ecosystem.</p>
      <p style={{ margin: "0 0 8px" }}><b>{cur.n}. {cur.title}</b> — {cur.body}</p>
      <button type="button" className="tks-btn" onClick={advance}>{step >= LOOP.length - 1 ? "Complete the loop ↺" : `Advance to ${LOOP[step + 1].title} →`}</button>
      {cycles > 0 && <span className="tks-kicker" style={{ marginLeft: 10 }}>Loops completed: {cycles} — reputation compounds each cycle</span>}
    </div>
    <Foot />
  </div>;
}

export function tokentaEarlyFor(file: string) {
  if (file.startsWith("Tokenta_02")) return <TokentaSoloOwnership />;
  if (file.startsWith("Tokenta_03")) return <TokentaFragmentedMarket />;
  if (file.startsWith("Tokenta_04")) return <TokentaRiskMap />;
  if (file.startsWith("Tokenta_05")) return <TokentaTrustLoop />;
  return null;
}
