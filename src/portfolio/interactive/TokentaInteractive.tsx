import { useMemo, useState } from "react";
import "./tokenta-interactive.css";

/**
 * Interactive rebuilds of Tokenta case-study screens (V2, Phase 1).
 *
 * Every label, name, price and identifier below is transcribed from the
 * printed screens in public/projects/Tokenta_01.webp (the 2x2 product
 * composite) and the Order Room wireframe panel. Nothing is invented:
 * no new metrics, no new assets.
 */

const FOOT = ["Verifiable by design", "Decentralized attestation", "Enforceable deals", "Secure escrow", "Auditable by default"];

function FootStrip() {
  return <div className="tkx-footstrip">{FOOT.map((item) => <span key={item}>{item}</span>)}<span>tokenta.com</span></div>;
}

function EvidenceLinks() {
  return <div className="tkx-evidence">
    <span>Working evidence</span>
    <a href="https://github.com/ToniAdreal/rfc9421-signing-demo" target="_blank" rel="noreferrer">RFC 9421 sign / verify demo ↗</a>
    <a href="https://github.com/ToniAdreal/escrow-state-machine-ts" target="_blank" rel="noreferrer">Escrow state machine (TypeScript) ↗</a>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Marketplace (Tokenta_01, panel 1)                                   */
/* ------------------------------------------------------------------ */

type Asset = { name: string; id: string; type: string; creator: string; caps: string; price: string; vol: string; listed: string };
const ASSETS: Asset[] = [
  { name: "Llama-3.1-70B-Instruct", id: "tok://asset/llama-3.1-70b", type: "Model", creator: "Meta AI", caps: "Reasoning, Code", price: "125,000", vol: "2.41M", listed: "2d ago" },
  { name: "CodeTrove-22M", id: "tok://asset/codetrove-22m", type: "Dataset", creator: "AI Collective", caps: "Code, Text", price: "18,500", vol: "892K", listed: "3d ago" },
  { name: "VisionPro-Agent", id: "tok://asset/visionpro-agent", type: "Agent", creator: "VisionLabs", caps: "Vision, Tools", price: "42,000", vol: "1.12M", listed: "5d ago" },
  { name: "MathEval-1.0", id: "tok://asset/matheval-1.0", type: "Eval Suite", creator: "OpenEval", caps: "Math, Reasoning", price: "7,250", vol: "312K", listed: "6d ago" },
  { name: "SQLCoder-33B", id: "tok://asset/sqlcoder-33b", type: "Model", creator: "DataSynth", caps: "Code, SQL", price: "64,000", vol: "1.05M", listed: "6d ago" },
];
const TYPE_FILTERS: Array<{ label: string; count: number }> = [
  { label: "Model", count: 129 }, { label: "Dataset", count: 84 }, { label: "Agent", count: 56 },
  { label: "Tool", count: 42 }, { label: "Eval Suite", count: 31 },
];

function Marketplace() {
  const [query, setQuery] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [sort, setSort] = useState("Recently Listed");
  const [page, setPage] = useState(1);

  const rows = useMemo(() => {
    let list = ASSETS.filter((a) =>
      (types.length === 0 || types.includes(a.type)) &&
      (query.trim() === "" || `${a.name} ${a.creator} ${a.caps}`.toLowerCase().includes(query.toLowerCase())));
    if (sort === "Price: High to Low") list = [...list].sort((a, b) => Number(b.price.replace(/,/g, "")) - Number(a.price.replace(/,/g, "")));
    if (sort === "Price: Low to High") list = [...list].sort((a, b) => Number(a.price.replace(/,/g, "")) - Number(b.price.replace(/,/g, "")));
    return list;
  }, [query, types, sort]);

  const toggle = (label: string) => { setTypes((prev) => prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]); setPage(1); };

  return <div>
    <div className="tkx-searchbar">
      <input className="tkx-input" aria-label="Search assets by name, capability, or creator" placeholder="Search assets by name, capability, or creator…" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
      <select className="tkx-select" aria-label="Sort assets" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option>Recently Listed</option><option>Price: High to Low</option><option>Price: Low to High</option>
      </select>
    </div>
    <div className="tkx-market">
      <div className="tkx-filters">
        <h5>Filters <button type="button" onClick={() => { setTypes([]); setQuery(""); }}>Clear all</button></h5>
        <p className="tkx-colhead" style={{ margin: "4px 0 2px" }}>Asset Type</p>
        {TYPE_FILTERS.map((f) => <label className="tkx-check" key={f.label}>
          <input type="checkbox" checked={types.includes(f.label)} onChange={() => toggle(f.label)} />{f.label}<em>{f.count}</em>
        </label>)}
        <p className="tkx-colhead" style={{ margin: "10px 0 2px" }}>Verification Status</p>
        <label className="tkx-check"><input type="checkbox" defaultChecked readOnly />Verified<em>341</em></label>
        <label className="tkx-check"><input type="checkbox" readOnly />In Verification<em>18</em></label>
      </div>
      <div style={{ minWidth: 0, overflowX: "auto" }}>
        <table className="tkx-table">
          <thead><tr><th>Asset</th><th>Type</th><th>Creator</th><th>Verified</th><th>Capabilities</th><th>Price</th><th>Txn. Vol.</th><th>Listed</th></tr></thead>
          <tbody>{rows.map((a) => <tr key={a.id}>
            <td className="tkx-asset"><b>{a.name}</b><span>{a.id}</span></td>
            <td><span className="tkx-chip">{a.type}</span></td><td>{a.creator}</td>
            <td className="tkx-verified" aria-label="Verified">✓</td><td>{a.caps}</td>
            <td>{a.price}<br /><span className="tkx-sub">TKA</span></td>
            <td>{a.vol}<br /><span className="tkx-sub">TKA</span></td>
            <td style={{ whiteSpace: "nowrap" }}>{a.listed} ›</td>
          </tr>)}{rows.length === 0 && <tr><td colSpan={8} style={{ color: "#a1a1aa" }}>No assets match the current filters.</td></tr>}</tbody>
        </table>
        <div className="tkx-pager">
          <span className="tkx-count">Showing 1–5 of 359 assets</span>
          <button type="button" className="tkx-pagebtn" aria-label="Previous page" onClick={() => setPage((p) => Math.max(1, p - 1))}>‹</button>
          {[1, 2, 3].map((n) => <button type="button" key={n} className="tkx-pagebtn" aria-current={page === n ? "page" : undefined} onClick={() => setPage(n)}>{n}</button>)}
          <span>…</span>
          <button type="button" className="tkx-pagebtn" aria-current={page === 72 ? "page" : undefined} onClick={() => setPage(72)}>72</button>
          <button type="button" className="tkx-pagebtn" aria-label="Next page" onClick={() => setPage((p) => Math.min(72, p + 1))}>›</button>
        </div>
      </div>
    </div>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Verification pipeline (Tokenta_01, panel 2)                         */
/* ------------------------------------------------------------------ */

const STAGES = [
  { n: "1. Provenance", sub: "Origin & lineage", cmd: "$ tok verify provenance", checks: ["Source checked", "Licenses valid", "Lineage traced"], status: "pass" },
  { n: "2. Audit", sub: "Compliance & integrity", cmd: "$ tok verify audit", checks: ["Policy scan", "PII scan", "Safety scan"], status: "pass" },
  { n: "3. Probe", sub: "Behavioral evaluation", cmd: "$ tok verify probe", checks: ["Capability test", "Robustness test", "Red-team probe"], status: "pass" },
  { n: "4. Attestor Quorum", sub: "Decentralized attestation", cmd: "$ tok verify quorum", checks: ["5/7 attestors", "Slashing bonded", "Threshold met"], status: "pass" },
  { n: "5. Listing", sub: "Eligible for marketplace", cmd: "$ tok verify listing", checks: ["Ledger recorded", "Asset minted", "Listed"], status: "listed" },
];

function VerificationPipeline() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];
  return <div>
    <div className="tkx-steps" role="group" aria-label="Verification stages">
      {STAGES.map((s, i) => <button type="button" key={s.n} className="tkx-step" aria-pressed={i === active} onClick={() => setActive(i)}>
        <i>✓</i><b>{s.n}</b><span>{s.sub}</span>
      </button>)}
    </div>
    <div className="tkx-cmd" aria-live="polite">
      <div>{stage.cmd}</div>
      <ul>{stage.checks.map((c) => <li key={c}>{c}</li>)}</ul>
      <footer><span>status: {stage.status}</span><span className="tkx-pass">{stage.status === "listed" ? "◎" : "✓"}</span></footer>
    </div>
    <dl className="tkx-assetstrip">
      <div><dt>Asset</dt><dd>Llama-3.1-70B-Instruct<br /><span className="tkx-sub">tok://asset/llama-3.1-70b</span></dd></div>
      <div><dt>Asset ID</dt><dd className="tkx-mono">a_01H8Z…9K3TQ</dd></div>
      <div><dt>Submitted</dt><dd>May 12, 2025 14:32 UTC</dd></div>
      <div><dt>Verified</dt><dd>May 13, 2025 09:41 UTC</dd></div>
      <div><dt>Attestors</dt><dd>5 of 7</dd></div>
      <div><dt>Proof</dt><dd className="tkx-mono">0x9f2b…a1c7 ⧉</dd></div>
    </dl>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Order room — shared transcript / term sheet (Tokenta_01, panel 3)   */
/* ------------------------------------------------------------------ */

type Msg = { who: string; time: string; text: string };
const TRANSCRIPT: Msg[] = [
  { who: "AI Collective", time: "18:21", text: "Proposing initial terms for CodeTrove-22M." },
  { who: "NeuralWorks", time: "18:22", text: "Can we adjust the usage cap to 500M tokens/month?" },
  { who: "AI Collective", time: "18:23", text: "Yes, and we can include a performance guarantee." },
  { who: "NeuralWorks", time: "18:24", text: "Agreed. Please send the updated term sheet." },
];

const TERM_ROWS: Array<[string, string]> = [
  ["Asset", "CodeTrove-22M"], ["Asset ID", "tok://asset/codetrove-22m"], ["License", "Commercial"],
  ["Usage Cap", "500M tokens / month"], ["Territory", "Worldwide"], ["Exclusivity", "Non-exclusive"],
  ["Performance", "≥ 92% pass on HumanEval"], ["Price", "18,500 TKA"], ["Payment", "Upon release"],
  ["Representations", "Standard AI Asset Representations"], ["Governing Law", "Singapore"], ["Dispute Resolution", "Tokenta Arbitration"],
];

function OrderRoomBody({ full }: { full?: boolean }) {
  const [messages, setMessages] = useState<Msg[]>(TRANSCRIPT);
  const [draft, setDraft] = useState("");
  const [dealStatus, setDealStatus] = useState("Pending Escrow");
  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { who: "NeuralWorks", time: "18:25", text }]);
    setDraft("");
  };
  return <div>
    {dealStatus !== "Pending Escrow" && <p className="tkx-statusline" role="status">Escrow created — deal_01H8Z…7Q9P1 · 18,500 TKA locked in Tokenta Escrow.</p>}
    <div className="tkx-room">
      <div>
        <p className="tkx-colhead">Participants</p>
        <div className="tkx-party"><span className="tkx-sub">Seller</span><b>AI Collective</b><span className="tkx-mono tkx-sub">did:tok:coll_9k3tq</span><span className="tkx-dot" aria-hidden="true" /></div>
        <div className="tkx-party"><span className="tkx-sub">Buyer</span><b>NeuralWorks</b><span className="tkx-mono tkx-sub">did:tok:nw_7h8x2</span><span className="tkx-dot" aria-hidden="true" /></div>
        <button type="button" className="tkx-ghostbtn">Invite Observer</button>
      </div>
      <div>
        <p className="tkx-colhead">Negotiation Transcript</p>
        <div className="tkx-transcript" aria-live="polite">
          {messages.map((m, i) => <div className="tkx-msg" key={`${m.time}-${i}`}><b>{m.who}</b><time>{m.time}</time><p>{m.text}</p></div>)}
        </div>
        <div className="tkx-composer">
          <input className="tkx-input" aria-label="Message participants" placeholder="Message participants…" value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") send(); }} />
          <button type="button" className="tkx-send" onClick={send}>Send</button>
        </div>
      </div>
      <div>
        <p className="tkx-colhead">Term Sheet (v1.2)</p>
        <dl className="tkx-kv">{TERM_ROWS.slice(0, full ? TERM_ROWS.length : 8).map(([k, v]) => <div key={k} style={{ display: "contents" }}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        <p className="tkx-colhead" style={{ marginTop: 12 }}>Deal Summary</p>
        <dl className="tkx-kv">
          <div style={{ display: "contents" }}><dt>Deal ID</dt><dd>deal_01H8Z…7Q9P1</dd></div>
          <div style={{ display: "contents" }}><dt>Status</dt><dd>{dealStatus}</dd></div>
          <div style={{ display: "contents" }}><dt>Created</dt><dd>May 13, 2025 18:31 UTC</dd></div>
          <div style={{ display: "contents" }}><dt>Expires</dt><dd>May 20, 2025 18:31 UTC</dd></div>
          <div style={{ display: "contents" }}><dt>Chain</dt><dd>Tokenta L1</dd></div>
          <div style={{ display: "contents" }}><dt>Escrow</dt><dd>Required</dd></div>
          <div style={{ display: "contents" }}><dt>Artifacts</dt><dd>3</dd></div>
        </dl>
        <button type="button" className="tkx-primary" disabled={dealStatus !== "Pending Escrow"} onClick={() => setDealStatus("Escrow Created")}>
          {dealStatus === "Pending Escrow" ? "Create Escrow" : "Escrow Created ✓"}
        </button>
      </div>
    </div>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Escrow & settlement (Tokenta_01, panel 4)                           */
/* ------------------------------------------------------------------ */

const ESCROW_STATES = ["Locked", "Pending Release", "Released", "Dispute", "Settled"] as const;
const STATE_DEFS: Record<string, string> = {
  "Locked": "Funds and assets are locked in escrow.",
  "Pending Release": "Buyer has confirmed conditions. Awaiting final release.",
  "Released": "Assets released to buyer. Funds released to seller.",
  "Dispute": "Dispute raised. Escrow held pending resolution.",
  "Settled": "Dispute resolved. Funds and/or assets allocated.",
};

function EscrowPanel() {
  const [state, setState] = useState<(typeof ESCROW_STATES)[number]>("Locked");
  return <div>
    <div className="tkx-escrow-flow" role="group" aria-label="Escrow states">
      {ESCROW_STATES.map((s, i) => <span key={s} style={{ display: "contents" }}>
        {i > 0 && <i aria-hidden="true">→</i>}
        <button type="button" className="tkx-state" aria-pressed={state === s} onClick={() => setState(s)}>{s.toUpperCase()}</button>
      </span>)}
    </div>
    <p className="tkx-colhead" style={{ marginBottom: 0 }}>State: {state}</p>
    <p style={{ margin: "2px 0 0", fontSize: 11, color: "#c9c9ce" }}>{STATE_DEFS[state]}</p>
    <div className="tkx-lockrow">
      <div className="tkx-lockbox"><span className="tkx-sub">Buyer</span><b>NeuralWorks</b><span className="tkx-mono tkx-sub">did:tok:nw_7h8x2</span><p style={{ margin: "6px 0 0" }}>18,500 TKA<br /><span className="tkx-sub">{state === "Released" || state === "Settled" ? "Released" : "Locked"}</span></p></div>
      <div><div className="tkx-lockcore" aria-hidden="true">{state === "Released" || state === "Settled" ? "✓" : "🔒"}</div><p className="tkx-locklabel">Tokenta Escrow<br />deal_01H8Z…7Q9P1</p></div>
      <div className="tkx-lockbox"><span className="tkx-sub">Seller</span><b>AI Collective</b><span className="tkx-mono tkx-sub">did:tok:coll_9k3tq</span><p style={{ margin: "6px 0 0" }}>CodeTrove-22M<br /><span className="tkx-sub">{state === "Released" || state === "Settled" ? "Released" : "Locked"}</span></p></div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      <div>
        <p className="tkx-colhead">State Definitions</p>
        <ol className="tkx-defs" style={{ margin: 0, paddingLeft: 16 }}>
          {ESCROW_STATES.map((s) => <li key={s} className={state === s ? "is-on" : undefined}><b>{s}</b> — {STATE_DEFS[s]}</li>)}
        </ol>
      </div>
      <div>
        <p className="tkx-colhead">Escrow Details</p>
        <dl className="tkx-kv">
          <div style={{ display: "contents" }}><dt>Escrow ID</dt><dd>esc_01H8Z…8X2F</dd></div>
          <div style={{ display: "contents" }}><dt>Deal ID</dt><dd>deal_01H8Z…7Q9P1</dd></div>
          <div style={{ display: "contents" }}><dt>Amount</dt><dd>18,500 TKA</dd></div>
          <div style={{ display: "contents" }}><dt>Asset</dt><dd>CodeTrove-22M</dd></div>
          <div style={{ display: "contents" }}><dt>Locked</dt><dd>May 13, 2025 18:35 UTC</dd></div>
          <div style={{ display: "contents" }}><dt>Release Conditions</dt><dd>1</dd></div>
          <div style={{ display: "contents" }}><dt>Dispute Window</dt><dd>7 days</dd></div>
          <div style={{ display: "contents" }}><dt>Arbitration</dt><dd>Tokenta Arbitration</dd></div>
          <div style={{ display: "contents" }}><dt>Current State</dt><dd>{state}</dd></div>
        </dl>
      </div>
    </div>
    <p className="tkx-colhead" style={{ marginTop: 12 }}>On-Chain Proof</p>
    <pre className="tkx-proof">{`{\n  "escrow_id": "esc_01H8Z...8X2F",\n  "state": "${state.toLowerCase().replace(/ /g, "_")}",\n  "tx_hash": "0x9f2b...a1c7",\n  "block_time": "2025-05-13T18:35:12Z"\n}`}</pre>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Exported screens                                                    */
/* ------------------------------------------------------------------ */

export function TokentaSystemOverview() {
  return <div className="tkx" role="region" aria-label="Tokenta system overview — interactive rebuild of the printed screen">
    <div className="tkx-slide-head"><span><b>01</b>&nbsp;&nbsp;|&nbsp;&nbsp;Hero and system overview</span><span className="tkx-brand">⌂ TOKENTA</span></div>
    <div className="tkx-titleblock">
      <h3>Building Tokenta<span>A Verifiable AI Asset Exchange.</span></h3>
      <p>Tokenta is the exchange layer for AI assets. Every asset is verified, every transfer is escrowed, and every deal is enforceable.</p>
    </div>
    <div className="tkx-grid">
      <section className="tkx-panel" aria-label="Marketplace">
        <div className="tkx-panel-head"><span className="tkx-num">1</span><div><h4>Marketplace</h4><p>Discover verified AI assets.</p></div></div>
        <Marketplace />
      </section>
      <section className="tkx-panel" aria-label="Verification Pipeline">
        <div className="tkx-panel-head"><span className="tkx-num">2</span><div><h4>Verification Pipeline</h4><p>Every asset passes a rigorous, transparent process.</p></div></div>
        <VerificationPipeline />
      </section>
      <section className="tkx-panel" aria-label="Order Room summary">
        <div className="tkx-panel-head"><span className="tkx-num">3</span><div><h4>Order Room</h4><p>Negotiate terms. Create enforceable deals.</p></div></div>
        <OrderRoomBody />
      </section>
      <section className="tkx-panel" aria-label="Escrow and Settlement">
        <div className="tkx-panel-head"><span className="tkx-num">4</span><div><h4>Escrow &amp; Settlement</h4><p>Secure execution with clear states.</p></div></div>
        <EscrowPanel />
      </section>
    </div>
    <EvidenceLinks />
    <FootStrip />
  </div>;
}

export function TokentaOrderRoom() {
  const [tab, setTab] = useState("Open Offers");
  return <div className="tkx" role="region" aria-label="Tokenta Order Room — interactive rebuild">
    <div className="tkx-slide-head"><span><b>04</b>&nbsp;&nbsp;|&nbsp;&nbsp;Order Room &amp; Negotiation</span><span className="tkx-brand">⌂ TOKENTA</span></div>
    <div className="tkx-titleblock">
      <h3>Order Room.<span>Negotiate terms, compare offers, and finalize deals.</span></h3>
      <p>Structured deal terms sit beside the conversation, so nothing agreed in chat is lost when the term sheet is written.</p>
    </div>
    <div style={{ padding: "0 10px 10px" }}>
      <section className="tkx-panel" aria-label="Active Order Room">
        <div className="tkx-tabs" role="tablist" aria-label="Order Room views">
          {["Open Offers", "My Offers", "Counterparties", "History"].map((t) => <button type="button" role="tab" key={t} className="tkx-tab" aria-selected={tab === t} onClick={() => setTab(t)}>{t}</button>)}
          <span className="tkx-spacer" style={{ flex: 1 }} />
        </div>
        {tab === "Open Offers" ? <OrderRoomBody full /> : <p style={{ color: "#a1a1aa", fontSize: 12, margin: "8px 0" }}>{tab} — the printed case study shows the Open Offers conversation; this view is part of the next conversion slice.</p>}
      </section>
    </div>
    <EvidenceLinks />
    <FootStrip />
  </div>;
}

export function TokentaTermSheet() {
  const [license, setLicense] = useState("Commercial");
  const [cap, setCap] = useState(500);
  const [price, setPrice] = useState("18,500");
  const [exclusivity, setExclusivity] = useState("Non-exclusive");
  const [status, setStatus] = useState<string | null>(null);
  return <div className="tkx" role="region" aria-label="Tokenta Term Sheet Builder — interactive rebuild">
    <div className="tkx-slide-head"><span><b>04</b>&nbsp;&nbsp;|&nbsp;&nbsp;Term Sheet Builder</span><span className="tkx-brand">⌂ TOKENTA</span></div>
    <div className="tkx-titleblock">
      <h3>Term Sheet Builder.<span>Legal intent, translated into smart-contract parameters.</span></h3>
      <p>Term sheet (v1.2) for CodeTrove-22M — tok://asset/codetrove-22m. Changes against v1.1 are shown as a diff below, the same paradigm the counter-offer screen uses.</p>
    </div>
    <div style={{ padding: "0 10px 10px" }}>
      <section className="tkx-panel" aria-label="Term Sheet Builder form">
        {status && <p className="tkx-statusline" role="status">{status}</p>}
        <div className="tkx-form">
          <div className="tkx-field"><label htmlFor="tkx-license">License</label>
            <select id="tkx-license" className="tkx-select" value={license} onChange={(e) => setLicense(e.target.value)}><option>Commercial</option><option>Research</option><option>Internal Use</option></select></div>
          <div className="tkx-field"><label htmlFor="tkx-cap">Usage Cap (tokens / month)</label>
            <div className="tkx-stepper">
              <button type="button" className="tkx-stepbtn" aria-label="Decrease usage cap" onClick={() => setCap((c) => Math.max(100, c - 100))}>−</button>
              <input id="tkx-cap" className="tkx-input" value={`${cap}M`} readOnly aria-live="polite" />
              <button type="button" className="tkx-stepbtn" aria-label="Increase usage cap" onClick={() => setCap((c) => Math.min(1000, c + 100))}>+</button>
            </div></div>
          <div className="tkx-field"><label htmlFor="tkx-price">Price (TKA)</label>
            <input id="tkx-price" className="tkx-input" value={price} onChange={(e) => setPrice(e.target.value)} inputMode="numeric" /></div>
          <div className="tkx-field"><label htmlFor="tkx-excl">Exclusivity</label>
            <select id="tkx-excl" className="tkx-select" value={exclusivity} onChange={(e) => setExclusivity(e.target.value)}><option>Non-exclusive</option><option>Exclusive</option></select></div>
          <div className="tkx-field"><label>Territory</label><input className="tkx-input" value="Worldwide" readOnly /></div>
          <div className="tkx-field"><label>Performance</label><input className="tkx-input" value="≥ 92% pass on HumanEval" readOnly /></div>
          <div className="tkx-field"><label>Payment</label><input className="tkx-input" value="Upon release" readOnly /></div>
          <div className="tkx-field"><label>Governing Law / Dispute Resolution</label><input className="tkx-input" value="Singapore / Tokenta Arbitration" readOnly /></div>
        </div>

        <div className="tkx-diff" aria-label="Changes from term sheet v1.1 to v1.2">
          <table>
            <thead><tr><th>Term</th><th>v1.1</th><th>v1.2 (current)</th></tr></thead>
            <tbody>
              <tr className="is-changed"><td>Usage Cap</td><td className="was">300M tokens / month</td><td className="now">{cap}M tokens / month</td></tr>
              <tr className="is-changed"><td>Performance</td><td className="was">—</td><td className="now">≥ 92% pass on HumanEval (guarantee added)</td></tr>
              <tr><td>License</td><td>{license}</td><td>{license}</td></tr>
              <tr><td>Price</td><td>18,500 TKA</td><td>{price} TKA</td></tr>
              <tr><td>Exclusivity</td><td>{exclusivity}</td><td>{exclusivity}</td></tr>
            </tbody>
          </table>
        </div>

        <p className="tkx-colhead" style={{ marginTop: 14 }}>Contract Parameters (preview)</p>
        <pre className="tkx-proof">{`{\n  "asset": "tok://asset/codetrove-22m",\n  "license": "${license.toLowerCase()}",\n  "usage_cap_tokens_month": ${cap}000000,\n  "price_tka": "${price}",\n  "exclusivity": "${exclusivity.toLowerCase()}",\n  "performance": ">= 92% pass on HumanEval",\n  "governing_law": "Singapore",\n  "dispute_resolution": "Tokenta Arbitration"\n}`}</pre>

        <div className="tkx-actions">
          <button type="button" className="tkx-primary" onClick={() => setStatus("Terms accepted — term sheet v1.2 locked for multi-party signing.")}>Accept Terms</button>
          <button type="button" className="tkx-ghostbtn" onClick={() => setStatus("Counter-offer sent with the current values — diff above is what the counterparty sees.")}>Send Counter-Offer</button>
        </div>
      </section>
    </div>
    <EvidenceLinks />
    <FootStrip />
  </div>;
}

/**
 * Registry used by CaseStudy.tsx. Keyed by the case-study data itself
 * (chapter id + image title from src/content/real/tokenta.ts), so the
 * shell, captions and rationale stay exactly as they are today.
 */
export function tokentaInteractiveFor(chapterId: string, imageTitle: string) {
  if (chapterId === "hero-system-overview" && imageTitle === "Platform Landing Experience") return <TokentaSystemOverview />;
  if (chapterId === "order-room-negotiation" && imageTitle === "Active Order Room") return <TokentaOrderRoom />;
  if (chapterId === "order-room-negotiation" && imageTitle === "Term Sheet Builder") return <TokentaTermSheet />;
  return null;
}
