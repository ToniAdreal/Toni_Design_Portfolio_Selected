import { useState } from "react";
import "./tokenta-slides.css";

/**
 * Bespoke rebuilds of Tokenta files 18–20, transcribed from the actual
 * images. Printed slide numbers are offset −1 here (file 18 = printed
 * 17 "Brand foundations", file 19 = printed 18 "Data as decoration",
 * file 20 = printed 19 "Design tokens") — see BUILD_NOTES §6.
 */

const FOOT = ["Verifiable by design", "Decentralized attestation", "Enforceable deals", "Secure escrow", "Auditable by default"];
function Head({ n, kicker, dark }: { n: string; kicker?: string; dark?: boolean }) {
  return <div className="tks-head"><span><b>{n}</b>{kicker ? <>&nbsp;&nbsp;|&nbsp;&nbsp;{kicker}</> : null}</span><span className="tks-brand">⌂ TOKENTA</span></div>;
}
function Foot() { return <div className="tks-foot">{FOOT.map((f) => <span key={f}>{f}</span>)}<span>tokenta.com</span></div>; }

/* ---------------- File 18 / printed 17 — Brand foundations (dark) ---------------- */

const PALETTE = [
  { name: "Black", hex: "#0A0A0A" }, { name: "White", hex: "#FFFFFF" }, { name: "Charcoal", hex: "#161616" },
  { name: "Neutral Gray", hex: "#3B3B3B" }, { name: "Muted Gray", hex: "#7A7A7A" },
];
const TYPE_SCALE = [
  ["H1", "Inter Bold", "40 / 48"], ["H2", "Inter SemiBold", "28 / 36"], ["H3", "Inter SemiBold", "20 / 28"],
  ["Body", "Inter Regular", "14 / 20"], ["Small", "Inter Regular", "12 / 16"], ["Caption", "Inter Regular", "11 / 14"],
];
const CHIP_STATES = ["Default", "Hover", "Active", "Success", "Warning", "Error", "Info", "Disabled"];
const CHIP_COLORS: Record<string, string> = { Success: "#3ecf7a", Warning: "#e8a33d", Error: "#e5484d", Info: "#4c8bff" };

export function TokentaBrandFoundations() {
  const [color, setColor] = useState(0);
  const [chip, setChip] = useState("Active");
  const c = PALETTE[color];
  return <div className="tks tks--dark" role="region" aria-label="Brand foundations — interactive rebuild of Tokenta_18 (printed slide 17)">
    <Head n="17" kicker="Brand foundations" dark />
    <h3>Brand foundations.</h3>
    <p className="tks-lede">A restrained identity system reinforces the evidence-first thesis.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>01 | Color palette</p>
        <div style={{ display: "flex", gap: 6 }} role="group" aria-label="Palette swatches">
          {PALETTE.map((p, i) => <button key={p.hex} type="button" aria-pressed={i === color} aria-label={`${p.name} ${p.hex}`} onClick={() => setColor(i)} style={{ flex: 1, height: 64, borderRadius: 6, background: p.hex, border: i === color ? "2px solid #4c8bff" : "1px solid #3a3b3f", cursor: "pointer" }} />)}
        </div>
        <p style={{ margin: "8px 0 0" }} aria-live="polite"><b>{c.name}</b> · <span style={{ fontFamily: '"IBM Plex Mono",monospace' }}>{c.hex}</span></p>
        <p style={{ color: "#b9b9be", margin: "6px 0 0" }}>A monochrome palette reduces noise and puts data and evidence in focus.</p>
      </div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>02 | Typography</p>
        <p style={{ margin: "0 0 2px", color: "#b9b9be" }}>Primary typeface</p><p style={{ fontSize: 26, fontWeight: 700, margin: 0 }}>Inter</p>
        <p style={{ color: "#b9b9be", margin: "2px 0 8px" }}>Clean, neutral, and optimized for clarity at every scale.</p>
        <table className="tks-table"><tbody>{TYPE_SCALE.map(([a, b, d]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{d}</td></tr>)}</tbody></table>
        <p style={{ margin: "8px 0 2px", color: "#b9b9be" }}>Data / code typeface</p><p style={{ fontFamily: '"IBM Plex Mono",monospace', margin: 0 }}>IBM Plex Mono — 0x9f2b...a1c7<br />Tx: 0x01H82...7Q9P1 · Block: 2025-05-13 10:35:12Z</p>
      </div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>03 | Spacing &amp; borders</p>
        <p style={{ margin: "0 0 4px" }}>Spacing scale (8px base): <span style={{ fontFamily: '"IBM Plex Mono",monospace' }}>8 · 16 · 24 · 32 · 40 · 64</span></p>
        <p style={{ margin: "4px 0" }}>Border rules — 1px hairline #2A2A2A · 1px dashed #555555</p>
        <p style={{ margin: "8px 0 4px" }}><b>Design principles</b></p>
        <p style={{ margin: 0 }}>{["Square corners", "Thin rules", "Data-led hierarchy", "Consistent rhythm"].map((t) => <span key={t} className="tks-tag">{t}</span>)}</p>
        <p style={{ color: "#b9b9be", margin: "6px 0 0" }}>Square corners, thin rules, and data-led hierarchy create a system that feels precise, durable, and evidence-first.</p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>04 | Icon style</p>
        <p style={{ fontSize: 16, margin: 0 }} aria-hidden="true">📦 🛡 📄 🏷 🛒 🔒 🛢 📊 &lt;/&gt; 🔑</p>
        <p style={{ color: "#b9b9be", margin: "4px 0 0" }}>Linear, 1.5px stroke, square geometry, no fills. Built for clarity at small sizes and dense interfaces.</p>
      </div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>05 | State chips (examples) — click one</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }} role="group" aria-label="State chips">
          {CHIP_STATES.map((s) => <button key={s} type="button" className="tks-chip" aria-pressed={chip === s} disabled={s === "Disabled"} onClick={() => setChip(s)} style={CHIP_COLORS[s] ? { color: CHIP_COLORS[s], borderColor: CHIP_COLORS[s] } : undefined}>{s}</button>)}
        </div>
        <p style={{ color: "#b9b9be", margin: "8px 0 0" }} aria-live="polite">Selected state: <b style={{ color: "#fff" }}>{chip}</b>. Subtle states communicate status without competing with data.</p>
      </div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>06 | Application examples</p>
        <p style={{ margin: "0 0 6px" }}><span className="tks-btn">Primary action →</span></p>
        <label style={{ display: "block", margin: "0 0 6px" }}>Input field <input aria-label="Search assets, ID, or tx hash" placeholder="Search assets, ID, or tx hash..." style={{ display: "block", width: "100%", marginTop: 3, background: "#17181a", border: "1px solid #3a3b3f", borderRadius: 6, color: "#eee", padding: "6px 8px" }} /></label>
        <p style={{ margin: 0 }}>Data chip <span className="tks-tag" style={{ fontFamily: '"IBM Plex Mono",monospace' }}>0x9f2b...a1c7 ⧉</span></p>
        <p style={{ color: "#b9b9be", margin: "6px 0 0" }}>Components are minimal and consistent across surfaces.</p>
      </div>
    </div>
    <Foot />
  </div>;
}

/* ---------------- File 19 / printed 18 — Data as decoration ---------------- */

const MARKET = [
  { name: "Llama-3.1-70B-Instruct", path: "tok://asset/llama-3.1-70b", type: "Model", creator: "Meta AI", caps: "Reasoning, Code", price: "125,000 TKA", vol: "2.41M TKA", listed: "2d ago" },
  { name: "CodeTrove-22M", path: "tok://asset/codetrove-22m", type: "Dataset", creator: "AI Collective", caps: "Code, Text", price: "18,500 TKA", vol: "892K TKA", listed: "3d ago" },
  { name: "VisionPro-Agent", path: "tok://asset/visionpro-agent", type: "Agent", creator: "VisionLabs", caps: "Vision, Tools", price: "42,000 TKA", vol: "1.12M TKA", listed: "5d ago" },
  { name: "MathEval-1.0", path: "tok://asset/matheval-1.0", type: "Eval Suite", creator: "OpenEval", caps: "Math, Reasoning", price: "7,250 TKA", vol: "312K TKA", listed: "6d ago" },
  { name: "SQLCoder-33B", path: "tok://asset/sqlcoder-33b", type: "Model", creator: "DataSynth", caps: "Code, SQL", price: "64,000 TKA", vol: "1.05M TKA", listed: "6d ago" },
];
const ESCROW_STATES = ["LOCKED", "PENDING RELEASE", "RELEASED", "DISPUTE", "SETTLED"];
const FAILED = [["Weak trust signal", "Looks like every other crypto product."], ["Low information density", "Vague claims with minimal substance."], ["Generic brand language", "Could belong to any platform, any category."]];
const WORKED = [["Auditable", "Every action is recorded and traceable."], ["Legible", "High information density with clear hierarchy."], ["Institutional", "Designed for professional buyers and compliance."], ["Evidence-first", "Structure, state, and proof build trust."]];
const TOP_ASSETS = [["AI Model v2", "$8,740.00", "+8.1%"], ["DataSet Pro", "$6,210.00", "+6.3%"], ["VisionNet", "$4,980.00", "+5.7%"], ["CodeMind", "$4,420.00", "+4.2%"]];

export function TokentaDataAsDecoration() {
  const [mode, setMode] = useState<"before" | "after">("after");
  const [row, setRow] = useState(0);
  const [escrow, setEscrow] = useState(2);
  const a = MARKET[row];
  return <div className="tks" role="region" aria-label="Data as decoration — interactive rebuild of Tokenta_19 (printed slide 18)">
    <Head n="18" kicker="Data as decoration" />
    <h3>Data as decoration.</h3>
    <p className="tks-lede">The strongest visual material came from structure, state, and evidence—not decorative effects.</p>
    <div className="tks-flow" role="group" aria-label="Direction toggle" style={{ marginBottom: 10 }}>
      <button type="button" className="tks-node" aria-pressed={mode === "before"} onClick={() => setMode("before")}><b>Before</b> — Decorative, generic crypto direction</button>
      <span className="tks-arrow">→</span>
      <button type="button" className="tks-node" aria-pressed={mode === "after"} onClick={() => setMode("after")}><b>Selected direction</b> — Structure, state, and evidence</button>
    </div>
    {mode === "before" ? <div className="tks--dark" style={{ background: "#0d0a1a", borderRadius: 8, padding: 14 }} aria-live="polite">
      <div className="tks-grid" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
        <div><p style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Next-gen<br />asset exchange</p>
          <p style={{ color: "#b9b9be" }}>The future of AI assets.<br />Powered by blockchain.</p>
          <p><span className="tks-btn" style={{ background: "#7c4dff", borderColor: "#7c4dff", color: "#fff" }}>Explore assets</span> <span className="tks-btn tks-btn--ghost">Learn more</span></p>
          <div className="tks-flow">{[["Decentralized", "Built on the blockchain for trust and transparency."], ["AI-Powered", "Intelligent models creating real value."], ["Secure", "Your assets, always protected."]].map(([t, b]) => <span key={t} className="tks-node"><b>{t}</b><br />{b}</span>)}</div>
        </div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Portfolio value</p>
          <p style={{ margin: 0 }}><b style={{ fontSize: 17 }}>$24,350.00</b> <span className="tks-ver">+12.4%</span></p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Top assets</p>
          <table className="tks-table"><tbody>{TOP_ASSETS.map(([n, v, d]) => <tr key={n}><td>{n}</td><td>{v}</td><td className="tks-ver">{d}</td></tr>)}</tbody></table>
          <p style={{ color: "#b9b9be", margin: "8px 0 0" }}>Live transactions — 0x8a7f...3c21 · Purchased · AI Model v2 · 2.45 TKA · 2m ago</p>
        </div>
      </div>
      <div className="tks-detail" style={{ background: "transparent" }}><b>Why it failed</b><div className="tks-flow" style={{ marginTop: 6 }}>{FAILED.map(([t, b]) => <span key={t} className="tks-node">✕ <b>{t}</b><br />{b}</span>)}</div></div>
    </div> : <div aria-live="polite">
      <div className="tks--dark" style={{ background: "#0b0b0c", borderRadius: 8, padding: 12 }}>
        <p style={{ margin: "0 0 4px" }}><span className="tks-num tks-num--light">1</span> <b>Marketplace</b> <span style={{ color: "#b9b9be" }}>· Discover verified AI assets.</span> <span style={{ float: "right", color: "#b9b9be" }}>Sort: Recently Listed</span></p>
        <p className="tks-kicker">Filters — Asset Type: Model 129 · Dataset 84 · Agent 56 · Tool 42 · Eval Suite 31 | Capabilities: Text Generation 102 · Code Generation 72 · Vision 64 · Reasoning 53 · Multimodal 41 | Verification: Verified 341 · In Verification 18</p>
        <table className="tks-table"><thead><tr><th>Asset</th><th>Type</th><th>Creator</th><th>Verified</th><th>Capabilities</th><th>Price</th><th>Txn. Vol.</th><th>Listed</th></tr></thead>
          <tbody>{MARKET.map((m, i) => <tr key={m.name} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#1d1e20" : undefined }}><td><b>{m.name}</b><br /><span style={{ color: "#9a9aa0", fontFamily: '"IBM Plex Mono",monospace', fontSize: 10 }}>{m.path}</span></td><td>{m.type}</td><td>{m.creator}</td><td className="tks-ver">✓</td><td>{m.caps}</td><td>{m.price}</td><td>{m.vol}</td><td>{m.listed}</td></tr>)}</tbody></table>
        <p style={{ color: "#9a9aa0", margin: "6px 0 10px" }}>Showing 1–5 of 359 assets · pages 1 2 3 … 72</p>
        <div className="tks-grid" style={{ gridTemplateColumns: "1.3fr 1fr" }}>
          <div className="tks-card"><p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">4</span> <b>Escrow &amp; Settlement</b> <span style={{ color: "#b9b9be" }}>· Secure execution with clear states.</span></p>
            <div className="tks-flow" role="group" aria-label="Escrow states">{ESCROW_STATES.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === escrow} onClick={() => setEscrow(i)}>{s}</button>)}</div>
            <p style={{ margin: "8px 0 0" }}>STATE: <b>{ESCROW_STATES[escrow]}</b>{escrow === 2 ? " — Funds and assets have been released." : ""}</p>
            <p style={{ margin: "4px 0 0", color: "#b9b9be" }}>Buyer NeuralWorks · did:tok:nw_7h8x2 · 18,500 TKA Released → Tokenta Escrow dea1_01H82...7Q9P1 → Seller AI Collective · did:tok:coll_9k31q · Released</p>
          </div>
          <div className="tks-card"><p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">5</span> <b>Evidence Bundle</b> <span style={{ color: "#b9b9be" }}>· Immutably recorded for verification.</span></p>
            <p style={{ margin: "0 0 4px" }}>Asset<br /><b>{a.name}</b><br /><span style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 10.5 }}>{a.path}</span></p>
            {row === 0 ? <p style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 10.5, margin: 0 }}>Evidence Hash (SHA-256) 3f2a9c6b...e7d91a2c<br />Block Height 19,845,672<br />Recorded May 13, 2025 09:41 UTC<br />Tx Hash 0x9f2b...a1c7</p> : <p style={{ margin: 0, color: "#b9b9be" }}>{a.type} · {a.creator} · {a.price} · Vol. {a.vol} · Listed {a.listed}. (Printed evidence bundle shows the Llama-3.1 asset — select row 1.)</p>}
          </div>
        </div>
      </div>
      <div className="tks-detail"><b>Why it worked</b><div className="tks-flow" style={{ marginTop: 6 }}>{WORKED.map(([t, b]) => <span key={t} className="tks-node">✓ <b>{t}</b><br />{b}</span>)}</div></div>
    </div>}
    <Foot />
  </div>;
}

/* ---------------- File 20 / printed 19 — Design tokens (dark) ---------------- */

const COLOR_TOKENS = [
  ["bg/default", "#0B0B0C", "Page background, base surfaces"], ["bg/subtle", "#151618", "Elevated surfaces, secondary panels"],
  ["text/primary", "#F5F5F5", "Primary text, high emphasis"], ["text/secondary", "#A1A1AA", "Secondary text, helper content"],
  ["border/subtle", "#2A2B2E", "Dividers, subtle separators"], ["border/strong", "#3B3C40", "Component outlines, strong separators"],
  ["accent/brand", "#4C8BFF", "Links, focus, brand indicators"],
];
const TYPE_TOKENS = [
  ["type/display", "42 / 48", "700", "Page titles"], ["type/h1", "28 / 36", "600", "Section headings"], ["type/h2", "20 / 28", "600", "Subsection headings"],
  ["type/body-lg", "16 / 24", "400", "Body (large), long form"], ["type/body", "14 / 20", "400", "Body (default)"],
  ["type/caption", "12 / 16", "400", "Captions, labels"], ["type/mono-sm", "12 / 16", "400", "Code (inline), small"], ["type/mono", "13 / 18", "400", "Code blocks, data"],
];
const SPACING = [["space/0", 0], ["space/4", 4], ["space/8", 8], ["space/12", 12], ["space/16", 16], ["space/24", 24], ["space/32", 32], ["space/48", 48], ["space/64", 64]] as const;
const RADII = [["radius/0", "0px", "Square corners"], ["radius/sm", "4px", "Small components"], ["radius/md", "8px", "Default components"], ["radius/lg", "12px", "Cards, modals, sheets"], ["radius/full", "9999px", "Pills, circles"]] as const;
const MOTIONS = [["duration/0", "0ms", "—", "Instant changes, disable motion"], ["duration/150", "150ms", "ease-out", "Micro interactions, hovers"], ["duration/250", "250ms", "ease-out", "UI transitions, state changes"], ["duration/400", "400ms", "cubic-bezier(0.2, 0, 0, 1)", "Panel enter/exit, modals"], ["duration/700", "700ms", "cubic-bezier(0.2, 0, 0, 1)", "Page transitions, complex motion"]];
const STATES = [
  ["state/pass", "#3ecf7a", "PASS", "Verified, successful, checks passed"], ["state/wait", "#e8c33d", "WAIT", "Pending, in progress, awaiting confirmation"],
  ["state/fail", "#e5484d", "FAIL", "Failed, invalid, requires action"], ["state/info", "#4c8bff", "INFO", "Informational, neutral updates"],
  ["state/disabled", "#9a9aa0", "DISABLED", "Unavailable, non-interactive"],
];

export function TokentaDesignTokensSlide() {
  const [color, setColor] = useState(6);
  const [space, setSpace] = useState(4);
  const [radius, setRadius] = useState(2);
  const [motion, setMotion] = useState(1);
  const [moved, setMoved] = useState(false);
  const ct = COLOR_TOKENS[color];
  return <div className="tks tks--dark" role="region" aria-label="Design tokens — interactive rebuild of Tokenta_20 (printed slide 19)">
    <Head n="19" kicker="Design tokens" dark />
    <h3>Design tokens.</h3>
    <p className="tks-lede">The visual system was translated into reusable rules for code and content.</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
      <div className="tks-card"><p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">1</span> <b>Color tokens</b></p>
        <p style={{ color: "#b9b9be", margin: "0 0 6px" }}>Consistent color primitives for UI and data states. Click a token:</p>
        <table className="tks-table"><tbody>{COLOR_TOKENS.map(([n, v], i) => <tr key={n} onClick={() => setColor(i)} style={{ cursor: "pointer", background: i === color ? "#1d1e20" : undefined }}><td><span style={{ display: "inline-block", width: 12, height: 12, background: v, border: "1px solid #3a3b3f", verticalAlign: -2 }} /> {n}</td><td style={{ fontFamily: '"IBM Plex Mono",monospace' }}>{v}</td></tr>)}</tbody></table>
        <p style={{ margin: "6px 0 0" }} aria-live="polite">{ct[2]}</p>
      </div>
      <div className="tks-card"><p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">2</span> <b>Type scale</b></p>
        <p style={{ color: "#b9b9be", margin: "0 0 6px" }}>A modular scale for hierarchy and readability.</p>
        <table className="tks-table"><thead><tr><th>Token</th><th>Size / LH</th><th>W</th><th>Usage</th></tr></thead><tbody>{TYPE_TOKENS.map(([n, s, w, u]) => <tr key={n}><td>{n}</td><td>{s}</td><td>{w}</td><td>{u}</td></tr>)}</tbody></table>
        <p style={{ margin: "8px 0 2px", fontSize: 15, fontWeight: 600 }}>Heading (h1) · Subheading (h2)</p>
        <p style={{ color: "#b9b9be", margin: 0 }}>Body text is set in the body token for clarity and comfort over long content.</p>
        <p style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 10.5, margin: "6px 0 0" }}>const asset = {"{"} id: "tok:asset:1a3f-708b", status: "verified", updatedAt: "2025-05-13T09:41:32Z" {"}"};</p>
      </div>
      <div className="tks-card"><p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">3</span> <b>Spacing scale</b></p>
        <p style={{ color: "#b9b9be", margin: "0 0 6px" }}>Base 8px grid for rhythm and layout. Click a step:</p>
        <div className="tks-flow" role="group" aria-label="Spacing steps">{SPACING.map(([n, v], i) => <button key={n} type="button" className="tks-chip" aria-pressed={i === space} onClick={() => setSpace(i)}>{v}</button>)}</div>
        <div style={{ background: "#17181a", border: "1px solid #2c2d30", marginTop: 8, padding: SPACING[space][1] }} aria-live="polite"><div style={{ background: "#4c8bff", height: 14 }} /></div>
        <p style={{ color: "#b9b9be", margin: "6px 0 0" }}>{SPACING[space][0]} = {SPACING[space][1]}px. Use multiples of 8 for margins, padding, gaps, and offsets. Prefer space/16 for default component padding; space/24–space/32 for section spacing.</p>
        <p style={{ margin: "10px 0 4px" }}><b>Border and stroke tokens</b></p>
        <p style={{ margin: 0, color: "#b9b9be" }}>border/subtle — 1px solid #2A2B2E · border/strong — 1px solid #3B3C40 · border/focus — 1px solid #4C8BFF (focus ring, keyboard navigation)</p>
        <div className="tks-flow" style={{ marginTop: 6 }} role="group" aria-label="Radius tokens">{RADII.map(([n, v], i) => <button key={n} type="button" className="tks-chip" aria-pressed={i === radius} onClick={() => setRadius(i)}>{n} {v}</button>)}</div>
        <div style={{ width: 54, height: 34, background: "#1d1e20", border: "1px solid #4c8bff", borderRadius: RADII[radius][1], marginTop: 8 }} aria-hidden="true" />
      </div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">5</span> <b>Motion tokens</b></p>
        <table className="tks-table"><tbody>{MOTIONS.map(([n, v, e, u], i) => <tr key={n} onClick={() => { setMotion(i); setMoved((m) => !m); }} style={{ cursor: "pointer", background: i === motion ? "#1d1e20" : undefined }}><td>{n}</td><td>{v}</td><td>{e}</td><td>{u}</td></tr>)}</tbody></table>
        <div style={{ marginTop: 8, height: 18, background: "#17181a", border: "1px solid #2c2d30", position: "relative" }} aria-hidden="true"><div style={{ position: "absolute", top: 2, bottom: 2, width: 40, background: "#4c8bff", left: moved ? "calc(100% - 42px)" : 2, transition: `left ${MOTIONS[motion][1]} ${MOTIONS[motion][2] === "—" ? "linear" : MOTIONS[motion][2]}` }} /></div>
        <p style={{ color: "#b9b9be", margin: "6px 0 0" }}>Use the shortest duration that communicates the change. Respect prefers-reduced-motion and use duration/0 where appropriate.</p>
      </div>
      <div className="tks-card"><p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">6</span> <b>Semantic states</b></p>
        <table className="tks-table"><tbody>{STATES.map(([n, col, label, u]) => <tr key={n}><td>{n}</td><td><span style={{ color: col }}>●</span> <span className="tks-tag" style={{ color: col, borderColor: col }}>{label}</span></td><td>{u}</td></tr>)}</tbody></table>
      </div>
    </div>
    <Foot />
  </div>;
}

export function tokentaBrandFor(file: string) {
  if (file.startsWith("Tokenta_18")) return <TokentaBrandFoundations />;
  if (file.startsWith("Tokenta_19")) return <TokentaDataAsDecoration />;
  if (file.startsWith("Tokenta_20")) return <TokentaDesignTokensSlide />;
  return null;
}
