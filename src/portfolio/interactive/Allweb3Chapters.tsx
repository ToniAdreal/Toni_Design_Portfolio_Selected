import { useState, type ReactNode } from "react";
import "./tokenta-slides.css";
import "./allweb3-chapters.css";
import { Allweb3AdminWall, Allweb3CriteriaColumns, Allweb3EcosystemTriangle, Allweb3EveryRoleMosaic, Allweb3IATray, Allweb3LayersBands, Allweb3LegacyVs, Allweb3LegibleLoop, Allweb3MultiPortalWall, Allweb3OpaqueWorkflow, Allweb3PainMapFull, Allweb3PermissionsGlyphs, Allweb3RoleScopeTree, Allweb3SharedObjectWall, Allweb3ThreePortalsMatrix, Allweb3TrustGap, Allweb3TrustLoop } from "./Allweb3Rebuilds";

/**
 * Bespoke rebuilds of the 15 remaining ALLWEB3 gallery slots,
 * transcribed from the actual image files 1, 2, 3, 4, 6, 9, 10, 11,
 * 12, 14, 15, 16, 17, 18, 19.webp in public/projects/ (files 5, 7, 8,
 * 13 are already bespoke in ProjectScreens.tsx, keyed by data title).
 *
 * CAPTION <-> IMAGE MISMATCHES (data titles in src/content/real/
 * allweb3.ts vs what the images actually show — captions/data were
 * NOT rewritten; the shell figcaption stays as-is):
 *  - 3.webp  data "Campaign Discovery & Creator Matching"
 *            image "IMAGE 03 — ROLE AND SCOPE CARD": Solo Product
 *            Designer and Full-Stack Builder.
 *  - 4.webp  data "Campaign Creation Wizard (Brief)"
 *            image "One platform. Every role. Total alignment." —
 *            Creator / Project / Admin portals + public website.
 *  - 6.webp  data "KOL Evaluation & Selection Drawer"
 *            image "Stakeholder Pain Map" (Creators / Projects /
 *            Platform operators -> No shared source of truth).
 *  - 9.webp  data "Deliverable Evidence Submission"
 *            image "Make marketing performance legible before money
 *            moves." — four-pillar loop diagram.
 *  - 11.webp data "Oracle Verification & Metric Indexer"
 *            image three-sided ecosystem diagram (Creators / Project
 *            teams / Platform operators + wallets, social platforms,
 *            oracle providers, blockchain networks, payment assets).
 *  - 12.webp data "SPC NFT Minting Screen"
 *            image three-layer architecture (Application /
 *            Verification / Settlement layers).
 *  - 14.webp data "Creator Earnings Dashboard & Ledger"
 *            image "Role and Permission Matrix".
 *  - 15.webp data "Multi-KOL Attribution Funnel"
 *            image "Top-Level Information Architecture" (the deck's
 *            actual IA map, with 13 shared domain objects).
 *  - 16.webp data "DAO Arbitration Portal & Timeline"
 *            image "Creator and Project Management" admin console
 *            (creator/project table, profiles, suspension action).
 *  - 17.webp data "Admin Governance Terminal"
 *            image "Admin Portal" operational overview for Meridian
 *            Protocol (health, disputes, settlements, flagged
 *            verifications, audit events) — related, but no fee /
 *            CVPI-weight terminal is shown.
 *  - 18.webp data "Immutable Operational Audit Log"
 *            image "Dispute Resolution" case DR-2025-0518 (the
 *            arbitration-style screen; audit is only its footer
 *            principle — topics of 16/18 are effectively swapped).
 *  - 19.webp data "Production Design System Tokens"
 *            image "One Campaign Across Three Portals" — a 6-step
 *            synchronized campaign timeline for Maya Chen.
 * Roughly matching their data titles: 1, 2, 10.
 * Deck language as printed: near-black surfaces, cyber-green
 * (#00FF00) actions. Slides repeatedly stamp figures "Illustrative
 * data" — kept as printed wherever the slide prints it.
 */

const G = "#00ff00";

function Aw({ n, title, sub, children, label, foot }: { n: string; title: ReactNode; sub?: string; children: ReactNode; label: string; foot?: string }) {
  return <div className="tks tks--dark aw3" role="region" aria-label={label}>
    <div className="tks-head"><span><b>W ALLWEB3</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 19</span><span className="tks-brand" style={{ fontSize: 12, color: G }}>ALLWEB3</span></div>
    <h3 style={{ fontSize: 44 }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
    <div className="tks-foot"><span>{foot ?? "ALLWEB3 — CMP-2026-042"}</span><span>Illustrative data — as printed</span></div>
  </div>;
}

function Chips({ items, value, onPick }: { items: string[]; value: number; onPick: (i: number) => void }) {
  return <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group">{items.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === value} onClick={() => onPick(i)}>{s}</button>)}</div>;
}

function Bar({ pct, label }: { pct: number; label: string }) {
  return <div className="aw3-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label}><div style={{ width: `${pct}%` }} /></div>;
}

function Stats({ items }: { items: Array<[string, string, string?]> }) {
  return <div className="tks-grid" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 5)},1fr)` }}>{items.map(([k, v, d]) => <div key={k} className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>{k}</p><b style={{ fontSize: 16 }}>{v}</b>{d ? <p className="aw3-dim" style={{ margin: "2px 0 0", fontSize: 10.5 }}>{d}</p> : null}</div>)}</div>;
}

/* ---------------- 01 — Marketplace Multi-Portal Overview ---------------- */
const TOP_CREATORS: Array<[string, number]> = [["@cryptomatt", 24], ["@defi.diana", 18], ["@chain_guru", 15], ["@web3_wendy", 11]];
const RECENT_CONTENT: Array<[string, string, string]> = [
  ["Crypto Market Update Q2", "@cryptomatt", "VERIFIED"], ["5 Ways to Stake Smarter", "@defi.diana", "PENDING"], ["Mainnet Momentum", "@chain_guru", "VERIFIED"],
];
export function Allweb3MultiPortal() {
  const [portal, setPortal] = useState(1);
  const [creator, setCreator] = useState(0);
  return <Aw n="01" title={<>Verifiable growth, from brief <span style={{ color: G }}>to settlement.</span></>} sub="Creator, Project and Admin portals around one central campaign node — CMP-2026-042, ACTIVE. Campaign runs May 12 – Jun 30, 2026 · 49 days left." label="ALLWEB3 multi-portal overview — interactive rebuild of 1.webp">
    <Chips items={["Creator Portal", "Project Portal", "Admin Portal"]} value={portal} onPick={setPortal} />
    {portal === 1 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Total Budget", "$250,000.00"], ["Spent (Escrow)", "$82,430.00"], ["Verified Results", "112"], ["Engagement", "3.7M"], ["Cost per Verified Result", "$735.09"]]} />
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.4fr 1fr", marginTop: 10 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Campaign Health</p><b style={{ fontSize: 22, color: G }}>92<span style={{ fontSize: 12 }}>/100</span></b>
          <p style={{ margin: "6px 0 0" }}>On Track · Budget · Timeline · Content · Compliance — all green as printed</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Top Creators — by verified results (select)</p>
          {TOP_CREATORS.map(([name, count], i) => <p key={name} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === creator} onClick={() => setCreator(i)}>{name} — {count}</button></p>)}
          <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>{TOP_CREATORS[creator][0]}: {TOP_CREATORS[creator][1]} verified results on CMP-2026-042.</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Escrow — secure, on-chain escrow</p>
          <p style={{ margin: 0 }}>Locked in escrow <b style={{ color: G }}>$82,430.00</b><br />Available $167,570.00<br />Pending release $21,340.00<br />Released $61,090.00</p></div>
      </div>
      <div className="tks-grid" style={{ gridTemplateColumns: "1.4fr 1fr", marginTop: 10 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recent Content — latest creator submissions</p>
          {RECENT_CONTENT.map(([t, by, st]) => <p key={t} style={{ margin: "4px 0" }}>{t} <span className="aw3-dim">{by}</span> <span className="tks-tag" style={st === "VERIFIED" ? { color: G, borderColor: G } : undefined}>{st}</span></p>)}</div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Activity Feed</p>
          <p style={{ margin: "4px 0" }}>✓ Result verified — @cryptomatt · 2m ago</p>
          <p style={{ margin: "4px 0" }}>✓ Payment released — $2,450.00 to @cryptomatt · 15m ago</p>
          <p style={{ margin: "4px 0" }}>✓ New submission — @defi.diana submitted content · 32m ago</p></div>
      </div>
    </div>}
    {portal === 0 && <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>@cryptomatt — Web3 Creator · VERIFIED</p>
        <p style={{ margin: 0 }}>Nav as printed: Campaigns · Submissions · Earnings · Reputation · Profile · Settings</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Brief</p><p style={{ margin: 0 }}>Create 1-2 short-form videos about our new DeFi product. <span className="aw3-dim">[View brief]</span></p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Your Progress — 3 / 5 deliverables completed</p>
        <b style={{ fontSize: 20, color: G }}>60%</b><Bar pct={60} label="Creator progress, 3 of 5 deliverables" />
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Upcoming Deadlines</p><p style={{ margin: 0 }}>Video #2 — May 28, 2026<br />Video #3 — Jun 4, 2026</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Submit Content</p>
        <div style={{ border: "1px dashed #3d6b3d", borderRadius: 6, padding: 10, textAlign: "center" }}>↑<br />Drag and drop your file or click to upload<br /><span className="aw3-dim">MP4, MOV up to 2GB</span></div>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Recent Submissions</p>
        {RECENT_CONTENT.map(([t, , st]) => <p key={t} style={{ margin: "3px 0" }}>{t} <span className="tks-tag">{st}</span></p>)}</div>
    </div>}
    {portal === 2 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Escrow Health", "Healthy"], ["Dispute Status", "0", "Open disputes"], ["Payouts", "24", "This campaign"], ["Compliance", "100%", "Pass rate"]]} />
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 10 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Escrow Overview — Total Escrow $82,430.00</p>
          <Bar pct={33} label="Escrow released share as printed" />
          <p style={{ margin: "6px 0 0" }}>Available $167,570.00 · Pending $21,340.00 · Released $61,090.00</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>System Health — all systems operational</p>
          <p style={{ margin: 0 }}>API · Oracle · Indexers · Notifications — <span style={{ color: G }}>Operational</span></p>
          <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Recent Disputes</p><p style={{ margin: 0, color: G }}>No open disputes</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Activity Log — May 12, 2026</p>
          <p style={{ margin: 0 }}>Escrow funded<br />Creator verified — @cryptomatt<br />Campaign activated</p></div>
      </div>
    </div>}
    <div className="tks-detail" style={{ textAlign: "center" }}>
      <span className="tks-kicker">Central campaign node</span><br /><b style={{ fontSize: 15 }}>CMP-2026-042 · <span style={{ color: G }}>ACTIVE</span></b>
      <p style={{ margin: "6px 0 0" }}>Flows as printed: Creator submissions · Results &amp; proofs · Reputation updates ⇄ Escrow &amp; payouts · Compliance signals · System health — checked against Campaign data, Results &amp; proofs, Escrow &amp; settlement, Reputation signals, System health.</p>
    </div>
  </Aw>;
}

/* ---------------- 02 — One Campaign Object, Three Role Experiences ---------------- */
const KPIS: Array<[string, string, number]> = [["Reach", "1.2M of 2.0M", 60], ["Engagement", "86K of 120K", 72], ["Video Views", "420K of 600K", 70], ["Completions", "3 of 8", 38]];
const APP_STEPS = ["Applied", "Under Review", "Shortlisted", "Selected"];
export function Allweb3SharedObject() {
  const [role, setRole] = useState(0);
  const [step, setStep] = useState(1);
  const [kpi, setKpi] = useState(0);
  return <Aw n="02" title="One campaign object. Three role-specific experiences." sub="ALLWEB3 — creator.allweb3.xyz · project.allweb3.xyz · admin.allweb3.xyz" label="ALLWEB3 shared campaign object — interactive rebuild of 2.webp">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.6fr" }}>
      <div className="tks-card" style={{ borderColor: G }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>▦ Shared Campaign Object</p>
        <b style={{ fontSize: 15 }}>Meridian Protocol: Creator Growth Sprint</b>
        <table className="tks-table" style={{ marginTop: 8 }}><tbody>
          <tr><td>Campaign ID</td><td>CMP-2026-042 <span className="tks-tag" style={{ color: G, borderColor: G }}>ACTIVE</span></td></tr>
          <tr><td>Status</td><td style={{ color: G }}>ACTIVE</td></tr>
          <tr><td>Settlement Asset</td><td>USDC</td></tr>
          <tr><td>Budget</td><td>100,000 USDC</td></tr>
          <tr><td>Timeline</td><td>May 1 – Jun 30, 2026</td></tr>
          <tr><td>Created</td><td>May 1, 2026</td></tr>
        </tbody></table>
        <p style={{ margin: "10px 0 0" }}>🔒 <b>Single Source of Truth</b> — one campaign object across all roles.</p>
      </div>
      <div>
        <Chips items={["Creator View — Opportunity & Application", "Project View — Campaign Management", "Admin View — Oversight & Governance"]} value={role} onPick={setRole} />
        {role === 0 && <div className="tks-card" style={{ marginTop: 8 }}>
          <p style={{ margin: 0 }}><span className="tks-tag">Content</span><span className="tks-tag">DeFi</span><span className="tks-tag">Education</span><span className="tks-tag">X</span><span className="tks-tag">YouTube</span></p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Why this fits you</p>
          <p style={{ margin: "3px 0" }}>✓ Strong audience overlap — 78%</p>
          <p style={{ margin: "3px 0" }}>✓ Content alignment score — 92/100</p>
          <p style={{ margin: "3px 0" }}>✓ Audience quality match — High</p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Deliverables</p>
          <p style={{ margin: "3px 0" }}>2 × Explainer Videos — 6–10 min each · 4 × Short-form Clips — 30–90 sec each<br />1 × X Thread — 8–12 tweets · 1 × Live AMA — 60 min</p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Compensation</p>
          <p style={{ margin: 0 }}>Total Reward <b style={{ color: G }}>12,500 USDC</b> · Payment Structure: 50% upfront / 50% on completion</p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Application — Submitted May 18, 2026 · 10:24 AM UTC (step through)</p>
          <div className="tks-flow" role="group" aria-label="Application stages">{APP_STEPS.map((s, i) => <span key={s} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === step} onClick={() => setStep(i)}><b>{i === 0 ? "✓ " : `${i + 1} `}{s}</b></button></span>)}</div>
          <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>{step === 0 ? "Application Submitted — May 18, 2026 · 10:24 AM UTC." : step === 1 ? "Under Review — the stage the printed screen shows (stage 2 of 4)." : `${APP_STEPS[step]} — stage ${step + 1} of 4 in the printed application stepper.`}</p>
        </div>}
        {role === 1 && <div className="tks-card" style={{ marginTop: 8 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Creator Pipeline</p>
          <div className="tks-flow">{[["Applications", "128"], ["Shortlisted", "24"], ["In Progress", "8"], ["Completed", "3"]].map(([k, v], i) => <span key={k} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">›</span>}<span className="tks-node"><span className="tks-kicker">{k}</span><br /><b style={{ fontSize: 15, color: i === 3 ? G : undefined }}>{v}</b></span></span>)}</div>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Budget Overview — Total Budget 100,000 USDC · Committed 62,500 USDC</p>
          <Bar pct={62.5} label="Budget committed, 62.5 percent" />
          <p style={{ margin: "4px 0 0" }}><span style={{ color: G }}>62.5% Committed</span> · 37,500 USDC Remaining</p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Approvals</p>
          <p style={{ margin: "3px 0" }}>✓ Campaign Brief Approved — May 1, 2026 · ✓ Budget Approved — May 2, 2026<br />✓ Creator Shortlist Approved — May 10, 2026 · ✓ Content Guidelines Approved — May 10, 2026</p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>KPI Progress (select)</p>
          <Chips items={KPIS.map(([k]) => k)} value={kpi} onPick={setKpi} />
          <div style={{ marginTop: 6 }} aria-live="polite"><Bar pct={KPIS[kpi][2]} label={`KPI progress, ${KPIS[kpi][0]}`} /><p style={{ margin: "4px 0 0" }}>{KPIS[kpi][0]}: <b>{KPIS[kpi][1]}</b> — {KPIS[kpi][2]}%</p></div>
        </div>}
        {role === 2 && <div className="tks-card" style={{ marginTop: 8 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Escrow Status</p>
          <Stats items={[["Escrow Balance", "62,500 USDC"], ["Held in Escrow", "62.5%", "of Budget"], ["Disbursed to Creators", "37,500 USDC"], ["Reserved for Milestones", "25,000 USDC"]]} />
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Verification — 92%</p>
          <Bar pct={92} label="Verification, 92 percent" />
          <p style={{ margin: "4px 0" }}>✓ KYC Verified Creators — 24 / 24 · ✓ Deliverables Verified — 11 / 12 · ✓ Compliance Checks — Passed</p>
          <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Disputes · Audit Trail</p>
          <p style={{ margin: 0 }}>Open 0 · Under Review 1 · Resolved 3 · Rejected 0 — Audit Status: <b style={{ color: G }}>Compliant</b>, Last Audit May 18, 2026 · 10:30 AM UTC. [View Audit Log]</p>
        </div>}
      </div>
    </div>
  </Aw>;
}

/* ---------------- 03 — Role and Scope Card (data title: Campaign Discovery) ---------------- */
const ORG_NODES: Array<[string, string]> = [
  ["Strategy", "Product strategy — the first responsibility on the printed responsibilities list."],
  ["UX Architecture", "UX architecture — strategy flows down into the portal architecture."],
  ["Creator Portal", "Surface as printed: Content management, audience insights, and growth tools."],
  ["Project Portal", "Surface as printed: Project tracking, milestone management, and collaboration."],
  ["Admin Portal", "Surface as printed: Platform oversight, user management, and analytics."],
  ["Front-End", "Front-end implementation — the three portals converge into build."],
  ["Back-End", "Back-end integration — alongside front-end, above deployment."],
  ["Deployment", "Deployment — the base of the printed delivery diagram."],
];
const RESPONSIBILITIES = ["Product strategy", "UX architecture", "UI design", "Prototyping", "Design system", "Front-end implementation", "Back-end integration", "Deployment"];
export function Allweb3RoleScope() {
  const [node, setNode] = useState(0);
  const [resp, setResp] = useState<boolean[]>(RESPONSIBILITIES.map(() => true));
  return <Aw n="03" title="Solo Product Designer and Full-Stack Builder" sub="ROLE AND SCOPE CARD · Campaign ID CMP-2026-042 · Campaign Name: Meridian Protocol: Creator Growth Sprint · Status ACTIVE · Settlement Asset USDC" label="ALLWEB3 role and scope card — interactive rebuild of 3.webp" foot="ALLWEB3 — Role and Scope">
    <div className="tks-flow" role="group" aria-label="Delivery diagram, strategy to deployment">{ORG_NODES.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === node} onClick={() => setNode(i)}><b>{t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{ORG_NODES[node][0]}</b> — {ORG_NODES[node][1]}</div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1.4fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Role</p><b>Solo Product Designer and Full-Stack Builder</b>
        <p className="aw3-dim" style={{ margin: "6px 0 0" }}>End-to-end ownership across strategy, design, development, and deployment — delivering cohesive products that scale.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Ownership</p><b style={{ color: G }}>SINGLE CONTRIBUTOR</b>
        <p className="aw3-dim" style={{ margin: "6px 0 0" }}>Full ownership of product vision, execution, and delivery.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Responsibilities — toggle scope ({resp.filter(Boolean).length} / 8 in scope)</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{RESPONSIBILITIES.map((r, i) => <button key={r} type="button" className="tks-chip" aria-pressed={resp[i]} onClick={() => setResp((v) => v.map((x, j) => (j === i ? !x : x)))}>{resp[i] ? "■ " : "□ "}{r}</button>)}</div></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Timeline</p><b>APR 2026 — JUN 2026</b>
        <p className="aw3-dim" style={{ margin: "6px 0 0" }}>(3 MONTHS)</p>
        <p className="tks-kicker" style={{ margin: "10px 0 2px" }}>Status</p><b style={{ color: G }}>● ACTIVE</b></div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }}>
      {[["Creator Portal", "Content management, audience insights, and growth tools."], ["Project Portal", "Project tracking, milestone management, and collaboration."], ["Admin Portal", "Platform oversight, user management, and analytics."]].map(([t, d]) => <div key={t} className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Surfaces</p><b>{t}</b><p className="aw3-dim" style={{ margin: "4px 0 0" }}>{d}</p></div>)}
    </div>
  </Aw>;
}

/* ---------------- 04 — One Platform. Every Role. (data title: Campaign Creation Wizard) ---------------- */
const RECENT_CAMPAIGNS: Array<[string, string, string]> = [
  ["Meridian Protocol: Creator Growth Sprint", "CMP-2026-042", "ACTIVE"], ["Zentry: Quest Expedition", "CMP-2026-041", "ACTIVE"], ["Nexus Finance: Liquidity Push", "CMP-2026-040", "COMPLETED"],
];
export function Allweb3EveryRole() {
  const [surface, setSurface] = useState(0);
  const [camp, setCamp] = useState(0);
  const [audience, setAudience] = useState<"creator" | "project">("creator");
  return <Aw n="04" title="One platform. Every role. Total alignment." sub="ALLWEB3 unifies marketing, product, and operations in a single system built for Web3 growth." label="ALLWEB3 one platform every role — interactive rebuild of 4.webp" foot="ALLWEB3 — alpha.creator / alpha.project / admin / allweb3.io">
    <Chips items={["Creator Portal — alpha.creator.allweb3.io", "Project Portal — alpha.project.allweb3.io", "Admin Portal — Operations Console", "Public Website — allweb3.io"]} value={surface} onPick={setSurface} />
    {surface === 0 && <div style={{ marginTop: 10 }}>
      <div className="tks-card"><b>Meridian Protocol: Creator Growth Sprint</b> <span className="tks-tag" style={{ color: G, borderColor: G }}>ACTIVE</span> <span className="aw3-dim">CMP-2026-042 — Promote Meridian Protocol and drive ecosystem growth through high-quality creator content.</span>
        <p style={{ margin: "6px 0 0" }}>Total Earnings (USDC) <b style={{ color: G }}>12,450.75</b> · Pending Payout (USDC) <b>1,240.00</b> · Tabs: Overview · Content Brief · Deliverables · Performance · Payouts</p></div>
      <div style={{ marginTop: 10 }}><Stats items={[["Clicks", "45,231", "+24.6%"], ["Conversions", "1,245", "+18.7%"], ["Engagements", "8,932", "+31.2%"], ["Earnings (USDC)", "12,450.75", "+15.4%"]]} /></div>
      <p className="aw3-dim" style={{ margin: "8px 0 0" }}>Your Performance · Performance Over Time — Last 30 days (line chart as printed).</p>
    </div>}
    {surface === 1 && <div style={{ marginTop: 10 }}>
      <div className="tks-card"><b>Meridian Protocol: Creator Growth Sprint</b> <span className="tks-tag" style={{ color: G, borderColor: G }}>ACTIVE</span> <span className="aw3-dim">CMP-2026-042 — Accelerate awareness and adoption of Meridian Protocol through creator-led content and community activation.</span>
        <p style={{ margin: "6px 0 0" }}>Total Budget (USDC) <b>50,000.00</b> · Spent (USDC) <b>18,750.25</b></p>
        <Bar pct={37.5} label="Budget spent, 37.5 percent" /><p style={{ margin: "4px 0 0" }}>37.5% of budget spent</p></div>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Campaign Overview</p>
      <Stats items={[["Applications", "152"], ["Approved Creators", "28"], ["Published Content", "56"], ["Total Reach", "2.4M"]]} />
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Performance Overview</p>
      <Stats items={[["Impressions", "2,424,532", "+22.1%"], ["Engagements", "245,631", "+19.8%"], ["Clicks", "312,456", "+27.3%"], ["Conversions", "12,456", "+18.5%"]]} />
    </div>}
    {surface === 2 && <div style={{ marginTop: 10 }}>
      <Stats items={[["Total Campaigns", "128", "+12.4%"], ["Total Creators", "4,752", "+8.7%"], ["Total Volume (USDC)", "1,245,750.50", "+15.3%"], ["Platform Fees (USDC)", "124,575.05", "+15.3%"]]} />
      <div className="tks-grid" style={{ gridTemplateColumns: "1.4fr 1fr", marginTop: 10 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Recent Campaigns — select (Platform Activity: bar chart, Last 30 days, as printed)</p>
          {RECENT_CAMPAIGNS.map(([t, id, st], i) => <p key={id} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={i === camp} onClick={() => setCamp(i)}>{t}</button> <span className="aw3-dim">{id}</span> <span className="tks-tag" style={st === "ACTIVE" ? { color: G, borderColor: G } : undefined}>{st}</span></p>)}
          <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>{RECENT_CAMPAIGNS[camp][0]} — {RECENT_CAMPAIGNS[camp][1]} · {RECENT_CAMPAIGNS[camp][2]}.</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>System Health — all systems operational</p>
          <p style={{ margin: 0 }}>Platform · Payments · Integrations · Data Pipeline — <span style={{ color: G }}>Operational</span></p></div>
      </div>
    </div>}
    {surface === 3 && <div style={{ marginTop: 10 }}>
      <div className="tks-card">
        <p className="tks-kicker" style={{ marginTop: 0 }}>Built for Web3 Growth · Nav: For Creators · For Projects · Resources · About · Log in · [Get Started]</p>
        <b style={{ fontSize: 19 }}>Where creators and projects grow together.</b>
        <p className="aw3-dim" style={{ margin: "6px 0" }}>ALLWEB3 is the growth engine that connects creators, projects, and communities to drive real impact onchain.</p>
        <p style={{ display: "flex", gap: 6, margin: "8px 0" }}>
          <button type="button" className="tks-btn" aria-pressed={audience === "creator"} onClick={() => setAudience("creator")}>I&apos;m a Creator</button>
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={audience === "project"} onClick={() => setAudience("project")}>I&apos;m a Project</button>
          <span aria-live="polite">{audience === "creator" ? "Creator entry — alpha.creator.allweb3.io, as printed on this slide." : "Project entry — alpha.project.allweb3.io, as printed on this slide."}</span>
        </p>
        <p className="aw3-dim" style={{ margin: 0 }}>Trusted by leading teams and communities — Meridian · Zentry · Nexus · Fleet · arcade · 4,752+ Verified Creators</p>
      </div>
      <div className="tks-grid" style={{ gridTemplateColumns: "1.2fr 1fr", marginTop: 10 }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Active Campaign</p><b>Meridian Protocol: Creator Growth Sprint</b> <span className="tks-tag" style={{ color: G, borderColor: G }}>ACTIVE</span>
          <p style={{ margin: "6px 0 0" }}>CMP-2026-042 · Total Budget (USDC) 50,000.00 · <span style={{ color: G }}>37.5% Spent</span></p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Platform Impact</p>
          <p style={{ margin: 0 }}><b>2.4M</b> Total Reach · <b>245K</b> Engagements · <b>12.4K</b> Conversions · <b>$1.24M</b> Volume (USDC)</p></div>
      </div>
    </div>}
  </Aw>;
}

/* ---------------- 06 — Stakeholder Pain Map (data title: KOL Evaluation & Selection Drawer) ---------------- */
const PAIN_GROUPS: Array<{ name: string; pains: string[]; consequence: string }> = [
  { name: "Creators", pains: ["Unclear briefs", "Unreliable payment", "Weak portable reputation", "Difficult opportunity discovery"], consequence: "Creators lose time, income, and trust." },
  { name: "Projects", pains: ["Fake metrics", "Fragmented creator sourcing", "Manual approvals", "Unclear ROI"], consequence: "Projects waste budget and miss outcomes." },
  { name: "Platform operators", pains: ["Disputes", "Inconsistent evidence", "Privileged actions", "Audit requirements"], consequence: "Operators face risk, overhead, and compliance burden." },
];
export function Allweb3PainMap() {
  const [grp, setGrp] = useState(0);
  const [pain, setPain] = useState(0);
  const cur = PAIN_GROUPS[grp];
  return <Aw n="06" title="Stakeholder Pain Map" sub="ALLWEB3 — three stakeholder groups, twelve pains, one root cause as printed." label="ALLWEB3 stakeholder pain map — interactive rebuild of 6.webp" foot="ALLWEB3 — Stakeholder Pain Map">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
      {PAIN_GROUPS.map((g, gi) => <div key={g.name} className={`tks-card${gi === grp ? " is-on" : ""}`}>
        <button type="button" className="tks-chip" aria-pressed={gi === grp} onClick={() => { setGrp(gi); setPain(0); }} style={{ fontWeight: 700 }}>{g.name}</button>
        {g.pains.map((p, pi) => <p key={p} style={{ margin: "7px 0" }}><button type="button" className="tks-chip" aria-pressed={gi === grp && pi === pain} onClick={() => { setGrp(gi); setPain(pi); }}>{p}</button></p>)}
        <p style={{ margin: "10px 0 0", borderTop: "1px solid #223522", paddingTop: 8 }}><span style={{ color: G }}>›</span> {g.consequence}</p>
      </div>)}
    </div>
    <div className="tks-detail" aria-live="polite"><b>{cur.name} — {cur.pains[pain]}</b>
      <p style={{ margin: "5px 0 0" }}>Consequence as printed: {cur.consequence}</p></div>
    <div className="tks-card" style={{ marginTop: 10, textAlign: "center", borderColor: G }}>
      <span className="aw3-dim">All three columns converge on the printed root cause:</span><br />
      <b style={{ fontSize: 19, color: G }}>No shared source of truth</b>
    </div>
  </Aw>;
}

/* ---------------- 09 — Make Marketing Performance Legible (data title: Deliverable Evidence Submission) ---------------- */
const PILLARS: Array<[string, string, string]> = [
  ["Explicit success criteria", "Clear goals.", "Measurable outcomes."],
  ["Verified identity", "Authentic participants.", "Accountable actions."],
  ["Traceable performance", "Verifiable data.", "Audit-ready trail."],
  ["Programmable settlement", "Escrow by design.", "Settlement on proof."],
];
export function Allweb3Legible() {
  const [p, setP] = useState(0);
  const cur = PILLARS[p];
  return <Aw n="09" title={<>Make marketing performance <span style={{ color: G }}>legible</span> before money moves.</>} sub="A four-pillar loop as printed — step through it; the loop closes back on itself." label="ALLWEB3 legible performance loop — interactive rebuild of 9.webp" foot="ALLWEB3 — Legible Performance">
    <div className="tks-flow" role="group" aria-label="Four pillars, in loop order">{PILLARS.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === p} onClick={() => setP(i)}><span className="tks-num tks-num--light">{i + 1}</span> <b>{t}</b> <span style={{ color: G }}>✓</span></button></span>)}</div>
    <div className="tks-detail" aria-live="polite">
      <b style={{ fontSize: 15 }}>{cur[0]}</b>
      <p style={{ margin: "5px 0 0", fontSize: 13 }}>{cur[1]} {cur[2]}</p>
      <p style={{ display: "flex", gap: 6, margin: "10px 0 0", alignItems: "center" }}>
        <button type="button" className="tks-btn tks-btn--ghost" disabled={p === 0} onClick={() => setP((v) => v - 1)}>← Pillar</button>
        <button type="button" className="tks-btn" onClick={() => setP((v) => (v + 1) % PILLARS.length)}>{p === PILLARS.length - 1 ? "Close the loop ↺" : "Next pillar →"}</button>
        <span className="tks-kicker">Pillar {p + 1} of 4</span>
      </p>
    </div>
  </Aw>;
}

/* ---------------- 10 — Success Criteria ---------------- */
const CRITERIA: Array<[string, string[]]> = [
  ["Clear campaign terms", ["All key terms defined", "Roles and responsibilities mapped", "Approval captured"]],
  ["Reduced workflow fragmentation", ["Fewer tool handoffs", "Standardized workflow steps", "Rework minimized"]],
  ["Visible status ownership", ["Single owner per stage", "Status updated in real time", "Clear next action"]],
  ["Traceable evidence", ["Required evidence attached", "Time-stamped records", "Source verifiable"]],
  ["Safe payment release", ["Conditions met", "Approvals recorded", "Release authorized"]],
  ["Actionable analytics", ["Timely, reliable data", "KPI definitions in place", "Insights drive decisions"]],
  ["Auditable exceptions", ["Exceptions logged", "Reviewed and resolved", "Lessons captured"]],
];
export function Allweb3SuccessCriteria() {
  const [stage, setStage] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const cur = CRITERIA[stage];
  const doneCount = cur[1].filter((_, i) => checked[`${stage}-${i}`]).length;
  return <Aw n="10" title="Success criteria" sub="CAMPAIGN ID CMP-2026-042 · Brand area: Reserved for ALLWEB3 logo (as printed) · Design quality is judged by operational clarity and traceability." label="ALLWEB3 success criteria — interactive rebuild of 10.webp" foot="ALLWEB3 — Success Criteria · CMP-2026-042">
    <div className="tks-flow" role="group" aria-label="Seven success criteria">{CRITERIA.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === stage} onClick={() => setStage(i)}><span style={{ color: G, fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span><br /><b>{t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite">
      <p className="tks-kicker" style={{ marginTop: 0 }}>Evidence signals — tick to review ({doneCount} / {cur[1].length} reviewed in this rebuild)</p>
      {cur[1].map((s, i) => { const key = `${stage}-${i}`; return <p key={s} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={!!checked[key]} onClick={() => setChecked((c) => ({ ...c, [key]: !c[key] }))}>{checked[key] ? "✓ " : "○ "}{s}</button></p>; })}
      <div className="tks-card" style={{ marginTop: 8 }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>○ Not yet measured — status as printed for every criterion</p>
        <p style={{ margin: 0 }}>• Baseline not established<br />• Awaiting campaign completion</p>
      </div>
    </div>
  </Aw>;
}

/* ---------------- 11 — Three-Sided Ecosystem Diagram (data title: Oracle Verification & Metric Indexer) ---------------- */
const ECO_NODES: Array<[string, string, string, string]> = [
  ["Creators", "Core actor", "Create content, build audience, earn rewards", "BRIEF / CONTENT ⇄ Project teams · VERIFICATION / REPUTATION ⇄ Platform operators · PAYMENT (Payouts) and ESCROW (Hold & release) ⇄ Wallets · CONTENT → Social platforms"],
  ["Project teams", "Core actor", "Run campaigns, provide briefs, fund and evaluate", "BRIEF / CONTENT ⇄ Creators · ESCROW → Platform operators · SETTLEMENT (Up on completion) ← Platform operators · AUDIT DATA (Proofs & logs) → Blockchain networks"],
  ["Platform operators", "Core actor", "Match, verify, manage escrow, ensure fairness", "VERIFICATION / REPUTATION ⇄ Creators · ESCROW / SETTLEMENT ⇄ Project teams · EVIDENCE (Off-chain data) ← Oracle providers · PAYMENT (Payouts) → Payment assets"],
  ["Wallets", "External service", "Identity, holdings, signatures", "PAYMENT (Payouts) → Creators · ESCROW (Hold & release) ← Creators"],
  ["Social platforms", "External service", "Distribution, engagement, social signals", "CONTENT (Distribution) → Project teams"],
  ["Oracle providers", "External service", "Off-chain data, proofs, analytics, market signals", "EVIDENCE (Off-chain data) → Platform operators"],
  ["Blockchain networks", "External service", "Immutability, transparency, smart contracts", "AUDIT DATA (Proofs & logs) ← Project teams · SETTLEMENT (On-chain finality) ⇄ Payment assets"],
  ["Payment assets", "External service", "Stablecoins, tokens, fiat rails", "PAYMENT (Payouts) ← Platform operators · SETTLEMENT (On-chain finality) ⇄ Blockchain networks"],
];
const ECO_FLOW = ["Brief", "Content", "Verification", "Settlement"];
export function Allweb3Ecosystem() {
  const [node, setNode] = useState(0);
  const [flow, setFlow] = useState(0);
  const cur = ECO_NODES[node];
  return <Aw n="11" title="Three-sided creator-marketing platform" sub="Connecting creators, project teams, and platform operators through identity, matching, verification, reputation, escrow, settlement, and disputes." label="ALLWEB3 ecosystem diagram — interactive rebuild of 11.webp" foot="ALLWEB3 — Ecosystem · CMP-2026-042">
    <Stats items={[["Active Creators", "12,450"], ["Campaigns (30d)", "320"], ["Content Delivered", "5,680"], ["Completion Rate", "96%"], ["Dispute Rate", "1.2%"]]} />
    <p className="tks-kicker" style={{ margin: "12px 0 4px" }}>Key metrics (labelled Illustrative data on the slide) · Legend: green — Core interactions · white — Content &amp; evidence flows · dashed — External service flows</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{ECO_NODES.map(([name, kind], i) => <button key={name} type="button" className={`tks-card${i === node ? " is-on" : ""}`} aria-pressed={i === node} onClick={() => setNode(i)}><b>{name}</b><p className="tks-kicker" style={{ margin: "4px 0 0" }}>{kind}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> — {cur[2]}
      <p style={{ margin: "5px 0 0" }}><span className="tks-kicker">Flows as printed: </span>{cur[3]}</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Campaign ID CMP-2026-042 — End-to-end flow (step through)</p>
      <div className="tks-flow" role="group">{ECO_FLOW.map((s, i) => <span key={s} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === flow} onClick={() => setFlow(i)}><b>{s}</b></button></span>)}</div>
      <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>Stage {flow + 1} of 4 — {ECO_FLOW[flow]}, in the printed end-to-end flow Brief → Content → Verification → Settlement.</p>
    </div>
  </Aw>;
}

/* ---------------- 12 — Three-Layer Architecture (data title: SPC NFT Minting Screen) ---------------- */
const LAYERS: Array<{ name: string; sub: string; modules: Array<[string, string]> }> = [
  { name: "Application layer", sub: "User-facing portals and experiences", modules: [
    ["Creator Portal", "Campaigns, content, earnings, reputation, and insights"],
    ["Project Portal", "Campaign management, budgets, results, and reporting"],
    ["Admin Portal", "Oversight, configuration, compliance, analytics, and dispute handling"],
  ] },
  { name: "Verification layer", sub: "Trust, validation, and reputation services", modules: [
    ["Evidence collection", "Gather raw data and proofs"],
    ["Normalization", "Standardize formats and metrics"],
    ["Fraud checks", "Detect anomalies and policy violations"],
    ["Oracle validation", "Third-party and on-chain attestations"],
    ["KPI calculation", "Compute outcomes and performance"],
  ] },
  { name: "Settlement layer", sub: "Escrow, on-chain records, and final settlement", modules: [
    ["Escrow", "Secure budget custody with release rules"],
    ["Base or Arbitrum record", "Immutable record of campaign results and attestations"],
    ["Payment release", "Automated payouts per rules and results"],
    ["Certificate reference", "Reference to on-chain certificate and proofs"],
  ] },
];
export function Allweb3Layers() {
  const [layer, setLayer] = useState(0);
  const [mod, setMod] = useState(0);
  const [up, setUp] = useState(false);
  const cur = LAYERS[layer];
  const curMod = cur.modules[Math.min(mod, cur.modules.length - 1)];
  return <Aw n="12" title="Company-stated architecture" sub="Illustrative implementation boundaries — three layers, as printed. Data, evidence, and actions flow downward; confirmations and attestations flow upward." label="ALLWEB3 three-layer architecture — interactive rebuild of 12.webp" foot="ALLWEB3 — Illustrative Architecture">
    <Chips items={LAYERS.map((l) => l.name)} value={layer} onPick={(i) => { setLayer(i); setMod(0); }} />
    <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>{cur.name} — {cur.sub}</p>
      <Chips items={cur.modules.map(([m]) => m)} value={Math.min(mod, cur.modules.length - 1)} onPick={setMod} />
      <div className="tks-detail" aria-live="polite"><b>{curMod[0]}</b> — {curMod[1]}</div>
    </div>
    <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Flow direction</p>
      <p style={{ display: "flex", gap: 6, margin: 0, alignItems: "center", flexWrap: "wrap" }}>
        <button type="button" className="tks-chip" aria-pressed={!up} onClick={() => setUp(false)}>↓ Data, evidence, and actions flow downward</button>
        <button type="button" className="tks-chip" aria-pressed={up} onClick={() => setUp(true)}>↑ Confirmations and attestations flow upward</button>
        <span aria-live="polite">{up ? "Upward as printed: Confirmations & attestations (from Verification) · Settlement confirmations (from Settlement) — both return to the Application layer." : "Downward as printed: Application layer → Verification layer → Settlement layer."}</span>
      </p>
    </div>
  </Aw>;
}

/* ---------------- 14 — Role and Permission Matrix (data title: Creator Earnings Dashboard & Ledger) ---------------- */
const PERM_DEFS: Record<string, string> = {
  View: "Read-only access to data and settings.",
  Create: "Create new records and initiate actions.",
  Approve: "Approve, verify, or advance records.",
  Override: "Override decisions or parameters. Privileged.",
  Audit: "Full visibility for audit, compliance, and forensics.",
};
const PERM_AREAS = ["Campaign", "Creator", "Submission", "Payment", "Reputation", "Dispute", "Configuration"];
const PERM_ROLES = ["Creator", "Project member", "Reviewer", "Operator", "Admin"];
const PERM_MATRIX: Record<string, string[][]> = {
  Campaign: [["View"], ["View"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Creator: [["View"], ["View"], ["View"], ["Create"], ["Override", "Audit"]],
  Submission: [["Create"], ["Create"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Payment: [["View"], ["View"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Reputation: [["View"], ["View"], ["Approve"], ["View"], ["Override", "Audit"]],
  Dispute: [["View"], ["View"], ["Approve"], ["Create"], ["Override", "Audit"]],
  Configuration: [["View"], ["View"], ["View"], ["Override"], ["Override", "Audit"]],
};
export function Allweb3Permissions() {
  const [area, setArea] = useState(0);
  const [role, setRole] = useState(4);
  const [legend, setLegend] = useState<string | null>(null);
  const areaName = PERM_AREAS[area];
  const cell = PERM_MATRIX[areaName][role];
  return <Aw n="14" title="Role and Permission Matrix" sub="Access control across the ALLWEB3 platform. Permissions are granted on a need-to-know basis across the campaign lifecycle. (Illustrative architecture · v1.0)" label="ALLWEB3 role and permission matrix — interactive rebuild of 14.webp" foot="ALLWEB3 Platform — Permission Matrix v1.0">
    <p className="tks-kicker" style={{ margin: "0 0 4px" }}>Permission legend — select to highlight every cell granting it</p>
    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{Object.keys(PERM_DEFS).map((p) => <button key={p} type="button" className="tks-chip" aria-pressed={legend === p} onClick={() => setLegend(legend === p ? null : p)}>{p}</button>)}</div>
    {legend && <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}><b style={{ color: G }}>{legend}</b> — {PERM_DEFS[legend]}</p>}
    <div style={{ overflowX: "auto", marginTop: 10 }}>
      <table className="tks-table">
        <thead><tr><th>Area — what is being accessed</th>{PERM_ROLES.map((r, ri) => <th key={r}><button type="button" className="tks-chip" aria-pressed={ri === role} onClick={() => setRole(ri)}>{r}</button></th>)}</tr></thead>
        <tbody>{PERM_AREAS.map((a, ai) => <tr key={a} style={ai === area ? { background: "#12240f" } : undefined}>
          <td><button type="button" className="tks-chip" aria-pressed={ai === area} onClick={() => setArea(ai)}>{a}</button></td>
          {PERM_MATRIX[a].map((perms, ri) => <td key={ri} style={legend && perms.includes(legend) ? { color: G, fontWeight: 700 } : undefined}>{perms.join(" + ")}</td>)}
        </tr>)}</tbody>
      </table>
    </div>
    <div className="tks-detail" aria-live="polite"><b>{PERM_ROLES[role]} · {areaName}</b> — {cell.map((p) => `${p}: ${PERM_DEFS[p]}`).join(" ")}
      <p style={{ margin: "6px 0 0" }}>As printed: <b>Override and Configuration are privileged actions and are fully audited</b> — all Override and Configuration actions are captured in the audit log with actor, context, before/after state, and reason.</p></div>
  </Aw>;
}

/* ---------------- 15 — Top-Level Information Architecture (data title: Multi-KOL Attribution Funnel) ---------------- */
const IA_PORTALS: Array<{ name: string; motto: string; actor: string; items: string[] }> = [
  { name: "Creator Portal", motto: "Discover. Apply. Deliver. Earn.", actor: "CREATOR", items: ["Discover campaigns", "Apply and submit work", "Upload evidence", "Track verification & status", "Earn payouts and grow reputation"] },
  { name: "Project Portal", motto: "Define. Review. Verify. Grow.", actor: "PROJECT OWNER", items: ["Create and manage campaigns", "Review applications & submissions", "Verify work and approve payouts", "Monitor KPIs and performance", "Build community and reputation"] },
  { name: "Admin Portal", motto: "Oversee. Govern. Protect.", actor: "PLATFORM ADMIN", items: ["Platform oversight and governance", "Audit and ensure compliance", "Manage disputes and resolutions", "Monitor system health & KPIs", "Ensure trust, safety & quality"] },
];
const DOMAIN_OBJECTS: Array<[string, string]> = [
  ["USER", "Identity and profile, roles and access."], ["WALLET", "Payment methods and balances."],
  ["CAMPAIGN", "Campaign details, rules, timeline, KPIs."], ["APPLICATION", "Creator application to a campaign."],
  ["SUBMISSION", "Submitted work and evidence."], ["KPI", "Metrics and performance targets."],
  ["EVIDENCE", "Supporting files and proof."], ["VERIFICATION", "Review and verification records."],
  ["ESCROW", "Escrow setup and fund management."], ["PAYOUT", "Payouts, settlements and status."],
  ["REPUTATION", "Reputation score and history."], ["CERTIFICATE", "Achievement and completion certificates."],
  ["DISPUTE", "Disputes, resolutions and appeals."],
];
export function Allweb3TopLevelIA() {
  const [portal, setPortal] = useState(0);
  const [obj, setObj] = useState(2);
  const cur = IA_PORTALS[portal];
  return <Aw n="15" title="Top-Level Information Architecture" sub="Three purpose-built portals connected by a shared domain layer for identity, campaigns, verification, reputation, escrow, settlement, and trust." label="ALLWEB3 top-level information architecture — interactive rebuild of 15.webp" foot="ALLWEB3 Platform — Top-Level IA">
    <Chips items={IA_PORTALS.map((p) => p.name)} value={portal} onPick={setPortal} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite">
      <b style={{ fontSize: 15 }}>{cur.name}</b> <span className="aw3-dim">— {cur.motto}</span>
      <ul style={{ margin: "8px 0" }}>{cur.items.map((it) => <li key={it}>{it}</li>)}</ul>
      <span className="tks-tag" style={{ color: G, borderColor: G }}>{cur.actor}</span>
    </div>
    <p className="tks-kicker" style={{ margin: "12px 0 4px" }}>Shared Domain Objects — select (13, as printed)</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{DOMAIN_OBJECTS.map(([name], i) => <button key={name} type="button" className={`tks-card${i === obj ? " is-on" : ""}`} aria-pressed={i === obj} onClick={() => setObj(i)}><b style={{ fontSize: 11 }}>{name}</b></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{DOMAIN_OBJECTS[obj][0]}</b> — {DOMAIN_OBJECTS[obj][1]}
      <p style={{ margin: "6px 0 0" }}><span className="tks-kicker">Legend as printed: </span><span style={{ color: G }}>CREATE (C)</span> · <span style={{ color: "#6db3ff" }}>READ (R)</span> · <span style={{ color: "#ffb84d" }}>APPROVE (A)</span> · <span style={{ color: "#c39bff" }}>AUDIT (U)</span> · dashed — OWNERSHIP. Dashed ownership lines connect every portal to the shared domain layer.</p></div>
  </Aw>;
}

/* ---------------- 16 — Creator and Project Management (data title: DAO Arbitration Portal & Timeline) ---------------- */
const MGMT_ROWS: Array<[string, string, string, string, string, string, string, string, string, string]> = [
  ["Maya Chen", "@mayachen", "0x7a3b…c9d1", "maya.eth", "4.82", "S Elite", "Active", "$184,750.32", "+12.4% (30d)", "Low"],
  ["Liam Patel", "@lipatel", "0x2f91…a7b2", "liampatel.eth", "4.15", "A Pro", "Active", "$67,320.18", "+8.7% (30d)", "Low"],
  ["Zoe Nguyen", "@zoenguyen", "0x9c11…e6f8", "zoe.nguyen.eth", "3.40", "B Verified", "Review", "$18,942.66", "−2.1% (30d)", "Medium"],
  ["Alex Kim", "@alexkim", "0x8d21…b3e9", "alexkim.eth", "2.10", "C New", "Active", "$2,310.40", "+1.3% (30d)", "Low"],
  ["Meridian Protocol", "@meridian", "0x3e6a…19f7", "meridianprotocol.eth", "4.91", "S Elite", "Active", "$1,248,560.75", "+15.6% (30d)", "Low"],
  ["Nova Labs", "@novalabs", "0xa7b2…9c11", "novalabs.eth", "3.75", "A Pro", "Active", "$312,442.18", "+6.2% (30d)", "Low"],
  ["Orbit Collective", "@orbit", "0xb4c3…d8e2", "orbit.eth", "2.85", "B Verified", "Review", "$82,114.33", "−4.8% (30d)", "Medium"],
  ["Echo Labs", "@echolabs", "0x5f66…a1b8", "echolabs.eth", "1.90", "C New", "Warning", "$12,640.80", "−12.3% (30d)", "High"],
];
const AUDIT_TRAIL: Array<[string, string, string]> = [
  ["May 12, 2025 14:32:10", "Admin (you) — Initiated suspension for Maya Chen", "IP: 203.0.113.45"],
  ["May 12, 2025 14:32:11", "Admin (you) — Submitted reason and duration", "IP: 203.0.113.45"],
  ["May 12, 2025 14:32:14", "System — Suspension confirmed", "ID: ACT-987654321"],
];
export function Allweb3Management() {
  const [row, setRow] = useState(0);
  const [stage, setStage] = useState<"drawer" | "confirm" | "done">("drawer");
  const [reason, setReason] = useState("Repeated violation of campaign guidelines and community conduct policy.");
  const r = MGMT_ROWS[row];
  return <Aw n="16" title="Creator and Project Management" sub="Role-based oversight with verifiable identity, performance, risk signals, and full administrative audit trail. Admin Console — Super Admin." label="ALLWEB3 creator and project management — interactive rebuild of 16.webp" foot="ALLWEB3 — Admin Console · Creators & Projects">
    <div style={{ display: "flex", gap: 12 }}>
      <div style={{ width: 132, flex: "none", fontSize: 11 }}>
        <p style={{ margin: "0 0 4px", color: G, fontWeight: 700, letterSpacing: ".06em" }}>ADMIN CONSOLE</p>
        {["Overview", "Analytics"].map((t) => <p key={t} style={{ margin: "3.5px 0" }}>{t}</p>)}
        <p style={{ margin: "8px 0 4px", color: G, fontWeight: 700, letterSpacing: ".06em" }}>MANAGEMENT</p>
        <p style={{ margin: "3.5px 0", background: "#12240f", border: "1px solid #2c5a2c", borderRadius: 6, padding: "3px 6px" }}>Creators &amp; Projects</p>
        {["Campaigns", "Applications", "Disputes", "Payouts"].map((t) => <p key={t} style={{ margin: "3.5px 0" }}>{t}</p>)}
        <p style={{ margin: "8px 0 4px", color: G, fontWeight: 700, letterSpacing: ".06em" }}>RISK &amp; SAFETY</p>
        {["Risk Dashboard", "Watchlist", "Alerts"].map((t) => <p key={t} style={{ margin: "3.5px 0" }}>{t}</p>)}
        <p style={{ margin: "8px 0 4px", color: G, fontWeight: 700, letterSpacing: ".06em" }}>SYSTEM</p>
        {["Roles & Permissions", "Audit Log", "Settings"].map((t) => <p key={t} style={{ margin: "3.5px 0" }}>{t}</p>)}
        <div style={{ borderTop: "1px solid #223522", marginTop: 10, paddingTop: 7 }}><b>Admin</b><br /><span className="aw3-dim">Super Admin</span></div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
      {[["Role-Based Access", "Granular permissions for safe administration."], ["Wallet-Verified Identity", "On-chain verification ensures accountability."], ["Action with Evidence", "No admin action without confirmation and reason."], ["Full Audit Trail", "Immutable, chronological record of every action."]].map(([t, d]) => <div key={t} className="tks-card"><b style={{ color: G, fontSize: 11.5 }}>{t}</b><p className="aw3-dim" style={{ margin: "3px 0 0" }}>{d}</p></div>)}
    </div>
    <p className="tks-kicker" style={{ margin: "12px 0 4px" }}>Creators &amp; Projects — search by name, wallet, or ENS · Filters: All Status / All Risk / All Tiers · Showing 1 to 8 of 128 results (select a row)</p>
    <div style={{ overflowX: "auto" }}>
      <table className="tks-table">
        <thead><tr><th>Creator</th><th>Wallet / ENS</th><th>Reputation</th><th>Tier</th><th>Status</th><th>Total Earnings</th><th>Risk</th></tr></thead>
        <tbody>{MGMT_ROWS.map(([name, handle, wallet, ens, rep, tier, status, earn, delta, risk], i) => <tr key={name} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#12240f" : undefined }}>
          <td><b>{name}</b><br /><span className="aw3-dim">{handle}</span></td>
          <td>{wallet}<br /><span className="aw3-dim">{ens} ✓</span></td>
          <td>{rep}</td><td>{tier}</td>
          <td><span className="tks-tag" style={status === "Active" ? { color: G, borderColor: G } : undefined}>{status}</span></td>
          <td>{earn}<br /><span style={{ color: delta.startsWith("−") ? "#ff8a8a" : G }}>{delta}</span></td><td>{risk}</td>
        </tr>)}</tbody>
      </table>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1.15fr", marginTop: 10, alignItems: "start" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>1 · Creator Profile: Maya Chen</p>
        <p style={{ margin: 0 }}>MC · Maya Chen ● Active · @mayachen ✓ maya.eth · Tier S Elite · Wallet 0x7a3b…c9d1 · Joined Feb 14, 2024 · Country Singapore</p>
        <Stats items={[["Reputation Score", "4.82 / 5", "↑ 12.4% (30d)"], ["Campaigns", "23", "Completed"], ["Success Rate", "95.7%", "22 / 23"], ["Total Earnings", "$184,750.32", "↑ 12.4% (30d)"]]} />
        <p style={{ margin: "8px 0 0" }}>Campaign History (Recent): Meridian Protocol – Q2 Growth Campaign · Apr 28, 2025 · $24,500 · Meridian Protocol – DevNet Launch · Mar 15, 2025 · $18,000 · Meridian Protocol – Staking Campaign · Feb 02, 2025 · $15,750</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>2 · Project Profile: Meridian Protocol</p>
        <p style={{ margin: 0 }}>Meridian Protocol ● Active · @meridian ✓ meridianprotocol.eth · Tier S Elite · Wallet 0x3e6a…19f7 · Joined Jan 10, 2024 · Category DeFi Infrastructure</p>
        <Stats items={[["Total Spend", "$1,248,560.75", "↑ 15.6% (30d)"], ["Campaigns", "41", "Completed"], ["Avg. ROI", "3.21x", "Across campaigns"], ["Risk Score", "18 / 100", "Low Risk"]]} />
        <p style={{ margin: "8px 0 0" }}>Recent Campaigns: Q2 Growth Campaign · Apr 28, 2025 · $125,000 · DevNet Incentive Program · Mar 15, 2025 · $200,000 · Staking Season Campaign · Feb 02, 2025 · $150,000</p></div>
<div className="tks-card">
      <p className="tks-kicker" style={{ marginTop: 0 }}>3 · Administrative Action — Role check, action drawer, and reason requirement → 4 · Confirmation &amp; Audit Trail</p>
      {stage === "drawer" && <div aria-live="polite">
        <p style={{ margin: 0 }}>Target <b>Maya Chen (@mayachen)</b> · Wallet 0x7a3b…c9d1 · Current Status ● Active · Reputation 4.82 · Risk Level Low</p>
        <label style={{ display: "block", marginTop: 8 }}>Action
          <select className="aw3-select" value="Suspend Creator" aria-label="Administrative action" onChange={() => undefined}><option>Suspend Creator</option></select></label>
        <p style={{ color: "#ffb84d", margin: "6px 0 0" }}>⚠ Suspending will prevent the creator from applying to or managing campaigns.</p>
        <label style={{ display: "block", marginTop: 8 }}>Reason (required) — {reason.length} / 500
          <textarea className="aw3-area" rows={2} value={reason} onChange={(e) => setReason(e.target.value)} aria-label="Suspension reason, required" /></label>
        <label style={{ display: "block", marginTop: 8 }}>Duration
          <select className="aw3-select" value="7 days" aria-label="Suspension duration" onChange={() => undefined}><option>7 days</option></select></label>
        <p style={{ margin: "8px 0" }}><span style={{ color: G }}>✓</span> Permissions Required — You have permission to suspend creators.</p>
        <p style={{ display: "flex", gap: 6, margin: 0 }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setReason("")}>Cancel</button>
          <button type="button" className="tks-btn" disabled={reason.trim().length === 0} onClick={() => setStage("confirm")}>Review Action</button></p>
      </div>}
      {stage === "confirm" && <div aria-live="polite">
        <p style={{ margin: 0, color: "#ffb84d" }}>⚠ <b>Confirm Suspension</b> — You are about to suspend this creator.</p>
        <p style={{ margin: "6px 0" }}>Creator Maya Chen (@mayachen) · Wallet 0x7a3b…c9d1 · Action Suspend Creator · Duration 7 days<br />Reason: {reason}</p>
        <p style={{ display: "flex", gap: 6, margin: 0 }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setStage("drawer")}>Cancel</button>
          <button type="button" className="tks-btn" style={{ background: "#ff7a1a", borderColor: "#ff7a1a" }} onClick={() => setStage("done")}>Confirm Suspension</button></p>
      </div>}
      {stage === "done" && <div aria-live="polite">
        <p style={{ margin: 0 }}><span style={{ color: G }}>✓ Suspension confirmed</span> — as recorded in the printed audit trail (ID: ACT-987654321).</p>
        <button type="button" className="tks-btn tks-btn--ghost" style={{ marginTop: 8 }} onClick={() => setStage("drawer")}>Back to action drawer</button>
      </div>}
    </div>
        </div>
    <p className="aw3-dim" aria-live="polite" style={{ margin: "8px 0 0" }}>Selected table row: <b style={{ color: "#e8f5e8" }}>{r[0]}</b> {r[1]} · Wallet {r[2]} · {r[3]} ✓ · Reputation {r[4]} · Tier {r[5]} · Status {r[6]} · Total Earnings {r[7]} ({r[8]}) · Risk {r[9]}. Full profile panels are printed on this slide for Maya Chen and Meridian Protocol.</p>
<div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>4 · Confirmation &amp; Audit Trail — always on record (View Full Log)</p>
      {AUDIT_TRAIL.map(([when, what, meta]) => <p key={when} style={{ margin: "4px 0" }}><span className="aw3-dim">{when}</span> · {what} · <span className="aw3-dim">{meta}</span></p>)}
    </div>
      </div>
    </div>
  </Aw>;
}

/* ---------------- 17 — Admin Portal Overview
} (data title: Admin Governance Terminal) ---------------- */
const PRINCIPLES: Array<[string, string]> = [
  ["Protect Integrity", "Tools to detect, review, and resolve issues."],
  ["Ensure Fairness", "Consistent outcomes across campaigns and participants."],
  ["Maintain Trust", "Audit everything. Explain every action."],
  ["Operate Safely", "Granular access, real-time visibility, complete control."],
];
const DISPUTES: Array<[string, string, string, string]> = [
  ["DP-8421", "Invalid Traffic Allegation", "High", "23m"], ["DP-8420", "Undelivered Impressions", "High", "1h"],
  ["DP-8418", "Ineligible Publisher", "Medium", "2h"], ["DP-8417", "Fraudulent Clicks", "Medium", "3h"], ["DP-8415", "Payout Mismatch", "Low", "5h"],
];
const SETTLEMENTS: Array<[string, string, string]> = [
  ["ST-77318", "May 18, 2025", "$187,320.00"], ["ST-77317", "May 18, 2025", "$98,540.75"], ["ST-77316", "May 17, 2025", "$143,210.50"],
  ["ST-77315", "May 17, 2025", "$220,600.00"], ["ST-77314", "May 16, 2025", "$75,430.25"],
];
const FLAGGED: Array<[string, string, string, string]> = [
  ["VER-99231", "Anomalous Traffic Pattern", "High", "15m"], ["VER-99230", "Device Farm Detected", "High", "42m"],
  ["VER-99228", "Geo Mismatch", "Medium", "1h"], ["VER-99227", "Low Quality Signal", "Medium", "2h"], ["VER-99225", "Bot Behavior Suspected", "Low", "3h"],
];
const AUDIT_EVENTS: Array<[string, string, string, string, string]> = [
  ["Admin override on payout", "ADM-3812", "May 18, 2025 14:32:11", "st_77318", "by ops_admin"],
  ["Campaign paused", "CMP-1287", "May 18, 2025 13:47:02", "cmp_1287", "by system"],
  ["Dispute escalated", "DP-8419", "May 18, 2025 12:21:33", "dp_8419", "by trust_lead"],
  ["Verification rule updated", "VR-554", "May 18, 2025 11:08:45", "rule_554", "by risk_admin"],
  ["User permission changed", "USR-778", "May 18, 2025 10:15:18", "user_778", "by security"],
];
const ADMIN_TABS = ["Overview", "Dispute Queue 7", "Settlement Activity", "Flagged Verifications 12", "Audit Events", "Quick Actions"];
export function Allweb3AdminPortal() {
  const [tab, setTab] = useState(0);
  const [row, setRow] = useState(0);
  const [principle, setPrinciple] = useState(0);
  return <Aw n="17" title="Admin Portal" sub="MERIDIAN PROTOCOL — Designing for the cases where the normal flow fails. Overview: real-time operational overview across the Meridian ecosystem · May 12 – May 18, 2025 · ● Operational" label="ALLWEB3 admin portal overview — interactive rebuild of 17.webp" foot="ALLWEB3 — Meridian Protocol Admin Portal">
    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group" aria-label="Admin design principles">{PRINCIPLES.map(([t], i) => <button key={t} type="button" className="tks-chip" aria-pressed={i === principle} onClick={() => setPrinciple(i)}>{t}</button>)}</div>
    <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}><b style={{ color: "#e8f5e8" }}>{PRINCIPLES[principle][0]}</b> — {PRINCIPLES[principle][1]}</p>
    <div style={{ marginTop: 10 }}><Chips items={ADMIN_TABS} value={tab} onPick={(i) => { setTab(i); setRow(0); }} /></div>
    {tab === 0 && <div style={{ marginTop: 10 }}>
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Marketplace Health</p><b style={{ fontSize: 24, color: G }}>98%</b> <span style={{ color: G }}>Healthy</span>
          <p style={{ margin: "6px 0 0" }}>Infrastructure · Services · Data Integrity · Integrations — <span style={{ color: G }}>● Operational</span></p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Active Campaigns</p><b style={{ fontSize: 24 }}>128</b> <span style={{ color: G }}>↑ 12 vs last 7 days</span>
          <p style={{ margin: "6px 0 0" }}>Running 96 · Review 18 · Paused 8 · Completed 6</p></div>
        <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>System Status</p>
          <p style={{ margin: 0 }}>API Gateway · Matching Engine · Verification Service · Settlement Service · Notification Service · Data Warehouse — <span style={{ color: G }}>Operational</span></p></div>
      </div>
    </div>}
    {tab === 1 && <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Dispute Queue — 7 (select a row)</p>
      {DISPUTES.map(([id, name, sev, age], i) => <p key={id} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{id} — {name}</button> <span style={{ color: sev === "High" ? "#ff8a8a" : sev === "Medium" ? "#ffb84d" : G }}>{sev}</span> <span className="aw3-dim">{age}</span></p>)}
      <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>{DISPUTES[row][0]} — {DISPUTES[row][1]} · Severity {DISPUTES[row][2]} · {DISPUTES[row][3]} ago, as printed. [Open dispute queue]</p>
    </div>}
    {tab === 2 && <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Settlement Activity — Settled (7D)</p>
      <b style={{ fontSize: 20 }}>$2,842,719.48</b> <span style={{ color: G }}>↑ 18%</span>
      {SETTLEMENTS.map(([id, date, amt], i) => <p key={id} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{id}</button> {date} · {amt} · <span style={{ color: G }}>Completed</span></p>)}
      <p className="aw3-dim" style={{ margin: "6px 0 0" }}>[View settlement ledger]</p>
    </div>}
    {tab === 3 && <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Flagged Verifications — 12 (select a row)</p>
      {FLAGGED.map(([id, name, sev, age], i) => <p key={id} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{id} — {name}</button> <span style={{ color: sev === "High" ? "#ff8a8a" : sev === "Medium" ? "#ffb84d" : G }}>{sev}</span> <span className="aw3-dim">{age}</span></p>)}
      <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>{FLAGGED[row][0]} — {FLAGGED[row][1]} · {FLAGGED[row][2]} · flagged {FLAGGED[row][3]} ago, as printed. [Open verification queue]</p>
    </div>}
    {tab === 4 && <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Audit Events — View audit log</p>
      {AUDIT_EVENTS.map(([what, id, when, ref, by], i) => <p key={id} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={i === row} onClick={() => setRow(i)}>{what}</button> <span className="aw3-dim">{id} · {when} · {ref} · {by}</span></p>)}
      <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>{AUDIT_EVENTS[row][0]} — {AUDIT_EVENTS[row][1]} · {AUDIT_EVENTS[row][2]} · {AUDIT_EVENTS[row][3]} · {AUDIT_EVENTS[row][4]}.</p>
    </div>}
    {tab === 5 && <div className="tks-card" style={{ marginTop: 10 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Quick Actions</p>
      <p style={{ margin: "5px 0" }}>Review Disputes — <b>7 pending</b></p>
      <p style={{ margin: "5px 0" }}>Review Verifications — <b>12 flagged</b></p>
      <p style={{ margin: "5px 0" }}>Manual Payout — Initiate</p>
      <p style={{ margin: "5px 0" }}>User Management — Manage access</p>
      <p style={{ margin: "5px 0" }}>System Alerts — <span style={{ color: G }}>✓ No critical alerts</span></p>
    </div>}
  </Aw>;
}

/* ---------------- 18 — Dispute Resolution (data title: Immutable Operational Audit Log) ---------------- */
const EVIDENCE_TIMELINE: Array<[string, string, string, string]> = [
  ["May 18 14:32", "Case Submitted", "Project initiated dispute by Orion Labs", ""],
  ["May 18 16:05", "Content Submission", "Creator submitted 3 videos and assets", "Verified"],
  ["May 19 09:14", "Performance Evidence", "Analytics screenshot (Reach & Engagement)", "Verified"],
  ["May 19 11:47", "Platform Policy Update", "Creator provided proof of algorithm changes", "Verified"],
  ["May 20 08:22", "Engagement Report", "Project submitted report from third-party tool", "Rejected"],
  ["May 21 09:10", "Additional Evidence", "Creator to submit raw insights export", "Pending"],
];
const VOTES: Array<[string, number, string]> = [["Uphold Creator Claim", 4, "57%"], ["Partial Settlement", 2, "29%"], ["Refund Project", 1, "14%"], ["Request More Evidence", 0, "0%"]];
const DECISIONS: Array<[string, string]> = [
  ["Uphold Creator Claim", "Release full amount to creator"], ["Partial Settlement", "Approve partial payment to creator"],
  ["Refund Project", "Return full amount to project"], ["Request More Evidence", "Extend review, require more evidence"],
];
export function Allweb3DisputeResolution() {
  const [ev, setEv] = useState(0);
  const [vote, setVote] = useState(0);
  const [decision, setDecision] = useState<number | null>(null);
  const [rationale, setRationale] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  return <Aw n="18" title="Dispute Resolution" sub="← Back to All Cases · All Cases 12 · Open 5 · In Review 4 · Escalated 1 · Resolved 2 · Closed 0 · Workspace: My Queue 3 · Assigned to Me 2 · SLA Watch 1" label="ALLWEB3 dispute resolution — interactive rebuild of 18.webp" foot="All decisions are recorded on-chain for transparency and auditability · Policy Ref: DRP-2.3 · Evidence Standards v1.4 · Last Updated: May 10, 2025">
    <Stats items={[["Case ID", "DR-2025-0518"], ["Campaign", "Nebula AI – Beta Launch"], ["Amount in Dispute", "$6,250.00 USDC"], ["Initiated", "May 18, 2025 14:32 UTC"], ["Last Updated", "May 21, 2025 09:41 UTC"]]} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 292px", gap: 12, alignItems: "start" }}>
    <div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Project Position — <span style={{ color: "#ffb84d" }}>Disputing</span></p>
        <p style={{ margin: 0 }}>“Deliverables incomplete and KPIs not met per campaign brief.”</p>
        <ul style={{ margin: "6px 0" }}><li>2 of 3 videos not delivered</li><li>Engagement below agreed KPI</li><li>Posting on non-approved platform</li></ul>
        <p style={{ margin: 0 }}>Evidence Submitted — <b>3 items ›</b></p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Creator Position — <span style={{ color: G }}>Claiming</span></p>
        <p style={{ margin: 0 }}>“All required deliverables submitted on time. Performance impacted by external factors.”</p>
        <ul style={{ margin: "6px 0" }}><li>3 videos delivered on time</li><li>Content published as per brief</li><li>Underperformance due to algorithm changes</li></ul>
        <p style={{ margin: 0 }}>Evidence Submitted — <b>5 items ›</b></p></div>
    </div>
    <p className="tks-kicker" style={{ margin: "12px 0 4px" }}>Evidence Timeline — Sort: Oldest First (select an entry)</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }} role="group" aria-label="Evidence timeline">
      {EVIDENCE_TIMELINE.map(([when, t, desc, st], i) => <button key={t} type="button" aria-pressed={i === ev} onClick={() => setEv(i)} style={{ background: "#0a120a", border: `1.5px solid ${st === "Verified" ? "#2fbf71" : st === "Rejected" ? "#ff4d4f" : st === "Pending" ? "#8a908a" : "#223522"}`, borderStyle: st === "Pending" ? "dashed" : "solid", outline: i === ev ? `2px solid ${G}` : "none", borderRadius: 9, color: "#e8f5e8", padding: "7px 8px", cursor: "pointer", font: "inherit", textAlign: "left" }}>
        <span className="tks-kicker" style={{ display: "block" }}>{when}</span><b style={{ fontSize: 11.5, display: "block", margin: "2px 0" }}>{t}</b>
        <span className="aw3-dim" style={{ fontSize: 10.5, display: "block" }}>{desc}</span>
        {st ? <span style={{ display: "block", marginTop: 4, fontWeight: 700, color: st === "Verified" ? "#2fbf71" : st === "Rejected" ? "#ff8a8a" : "#c9c9ce" }}>{st === "Verified" ? "✓ Verified" : st === "Rejected" ? "✗ Rejected" : "◌ Pending"}</span> : null}
      </button>)}
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Validator Vote Distribution — 7 of 9 validators submitted · 7 Votes</p>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ width: 74, height: 74, flex: "none", borderRadius: "50%", background: "conic-gradient(#2fbf71 0 57%, #ffb020 57% 86%, #ff4d4f 86% 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 48, height: 48, borderRadius: "50%", background: "#0a120a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10.5, textAlign: "center" }}>7 Votes</span></div>
          <div>{VOTES.map(([name, count, pct], i) => { const col = ["#2fbf71", "#ffb020", "#ff4d4f", "#8a908a"][i]; return <p key={name} style={{ margin: "3px 0" }}><button type="button" className="tks-chip" aria-pressed={i === vote} onClick={() => setVote(i)} style={{ borderColor: col }}><span style={{ color: col }}>●</span> {name}</button> <b>{count} ({pct})</b></p>; })}</div>
        </div>
        <p className="aw3-dim" aria-live="polite" style={{ margin: "6px 0 0" }}>{VOTES[vote][0]}: {VOTES[vote][1]} of 7 votes ({VOTES[vote][2]}).</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Internal Notes</p>
        <p style={{ margin: "5px 0" }}><b>Admin Analyst</b> <span className="tks-tag">Note</span> <span className="aw3-dim">May 21, 09:15 UTC</span><br />Content deliverables verified. Performance dip aligns with platform-wide reach decline (May 10–18).</p>
        <p style={{ margin: "5px 0" }}><b>Risk Reviewer</b> <span className="tks-tag">Note</span> <span className="aw3-dim">May 21, 09:28 UTC</span><br />{"Project's KPI metrics not adjusted for external factors. Recommend partial settlement."}</p>
        <p style={{ margin: "5px 0" }}><b>Legal Advisor</b> <span className="tks-tag">Note</span> <span className="aw3-dim">May 21, 09:35 UTC</span><br />Terms allow for adjustment when external factors are proven. Partial settlement supported.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Escalation Path</p>
        <p style={{ margin: "5px 0" }}><b>Tier 1: Case Review Team</b> <span className="tks-tag" style={{ color: "#ffb84d" }}>Current Level</span><br /><span className="aw3-dim">Review and issue decision within SLA</span></p>
        <p style={{ margin: "5px 0" }}><b>Tier 2: Senior Review Panel</b> <span className="tks-tag" style={{ color: "#ffb84d" }}>Escalates in 1d 14h</span><br /><span className="aw3-dim">Re-review and decision override</span></p>
        <p style={{ margin: "5px 0" }}><b>Tier 3: Arbitration Committee</b> <span className="tks-tag">Final escalation</span><br /><span className="aw3-dim">Final and binding decision</span></p></div>
    </div>
        </div>
    <div style={{ display: "grid", gap: 10 }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Case Status — In Review · Submitted ✓ → Under Review → Decision Pending → Resolved</p>
        <p className="tks-kicker" style={{ margin: "8px 0 4px" }}>SLA Summary — 71%</p>
        <Bar pct={71} label="SLA elapsed, 71 percent" />
        <p style={{ margin: "6px 0 0" }}>Time Elapsed <b>2d 10h 27m</b> · Time Remaining <b style={{ color: G }}>1d 14h 32m</b></p>
        <p style={{ color: "#ffb84d", margin: "6px 0 0" }}>⚠ Escalation Eligible in 1d 14h — If no decision is issued by the SLA deadline.</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Final Settlement Decision — Select a decision and add rationale</p>
        <div style={{ display: "grid", gap: 6 }}>{DECISIONS.map(([t, d], i) => { const tint = ["rgba(47,191,113,.13)", "rgba(255,176,32,.13)", "rgba(255,77,79,.13)", "rgba(138,144,138,.13)"][i]; const bc = ["#2fbf71", "#ffb020", "#ff4d4f", "#8a908a"][i]; return <button key={t} type="button" aria-pressed={decision === i} onClick={() => { setDecision(i); setConfirmed(false); }} style={{ background: tint, border: `1.5px solid ${decision === i ? bc : "#223522"}`, borderRadius: 9, color: "#e8f5e8", padding: "8px 10px", cursor: "pointer", font: "inherit", textAlign: "left" }}><span style={{ color: bc, marginRight: 7 }}>{decision === i ? "◉" : "○"}</span><b>{t}</b><p className="aw3-dim" style={{ margin: "3px 0 0 19px" }}>{d}</p></button>; })}</div>
        <label style={{ display: "block", marginTop: 8 }}>Rationale (required)
          <textarea className="aw3-area" rows={2} value={rationale} onChange={(e) => { setRationale(e.target.value); setConfirmed(false); }} placeholder="Add rationale for the decision…" aria-label="Decision rationale, required" /></label>
        <p style={{ display: "flex", gap: 6, margin: "8px 0 0", alignItems: "center" }}>
          <button type="button" className="tks-btn" style={decision === null || rationale.trim().length === 0 ? { background: "#3a403a", borderColor: "#3a403a", color: "#9a9aa0" } : undefined} disabled={decision === null || rationale.trim().length === 0} onClick={() => setConfirmed(true)}>🔒 Confirm Decision</button>
          <span aria-live="polite">{confirmed && decision !== null ? `Decision staged in this rebuild: ${DECISIONS[decision][0]} — as printed, all decisions are recorded on-chain for transparency and auditability.` : "The printed Confirm Decision stays locked until a decision and a rationale are both present."}</span>
        </p></div>
    
    </div>
    </div>
  </Aw>;
}

/* ---------------- 19 — One Campaign Across Three Portals (data title: Production Design System Tokens) ---------------- */
const SYNC_STEPS: Array<{ title: string; when: string; cells: Array<[string, string]> }> = [
  { title: "Campaign Active", when: "May 1, 2025 00:00 UTC", cells: [
    ["Campaigns", "Meridian Protocol Ambassador Program · Active · May 1 – May 31, 2025 (UTC) · Rewards Pool 50,000 USDC · View Details"],
    ["Campaigns", "Meridian Protocol Ambassador Program · Active · May 1 – May 31, 2025 (UTC) · Submissions 128 · View Dashboard"],
    ["Audit Log", "May 1, 2025 · 00:00:01 Campaign Created · Meridian Protocol"],
  ] },
  { title: "Creator Submits Work", when: "May 8, 2025 14:32 UTC", cells: [
    ["My Submissions — New Submission", "SUB-2025-05-0987 · May 8, 2025 14:32 UTC · X Post Thread “Why Meridian is the Future of Onchain Identity” · Submitted"],
    ["Submissions", "SUB-2025-05-0987 · Maya Chen @maya.chen · X Post Thread · May 8, 2025 14:32 UTC · New"],
    ["Audit Log", "May 8, 2025 · 14:32:10 Submission Created · SUB-2025-05-0987 by Maya Chen"],
  ] },
  { title: "Project Reviews", when: "May 12, 2025 09:41 UTC", cells: [
    ["Submission Details", "SUB-2025-05-0987 · Status Under Review · Submitted May 8, 2025 14:32 UTC · Content X Post Thread · View Content"],
    ["Review Queue", "SUB-2025-05-0987 · Maya Chen @maya.chen · X Post Thread · Score 92 / 100 · Review"],
    ["Audit Log", "May 12, 2025 · 09:41:22 Project Review · SUB-2025-05-0987 · Score: 92 / 100"],
  ] },
  { title: "Verification Confirms Performance", when: "May 14, 2025 16:20 UTC", cells: [
    ["Performance", "Impressions 24,531 ✓ · Engagements 1,842 ✓ · Engagement Rate 7.51% ✓ · Verified May 14, 2025 16:20 UTC"],
    ["Verification", "Status Verified · Verified At May 14, 2025 16:20 UTC · Source Meridian Analytics · View Report"],
    ["Audit Log", "May 14, 2025 · 16:20:33 Verification Confirmed · SUB-2025-05-0987 · Source: Meridian Analytics"],
  ] },
  { title: "Settlement Releases", when: "May 15, 2025 11:05 UTC", cells: [
    ["Earnings", "Reward 1,250 USDC · Status Released · Released May 15, 2025 11:05 UTC · View Payout"],
    ["Settlement", "Status Released · Amount 1,250 USDC · Released At May 15, 2025 11:05 UTC · View Payout"],
    ["Exception & Intervention", "May 15, 2025 · 10:52:18 Anomaly Detected — Engagement spike flagged · 10:54:03 Admin Review — Verified genuine · 11:05:02 Settlement Approved — 1,250 USDC released"],
  ] },
  { title: "Certificate Issued", when: "May 15, 2025 11:07 UTC", cells: [
    ["Certificate", "MERIDIAN PROTOCOL AMBASSADOR · Presented to Maya Chen · Campaign: May 1 – May 31, 2025 · Credential ID CRT-2025-05-0987"],
    ["Certificates", "CRT-2025-05-0987 · Maya Chen @maya.chen · Issued May 15, 2025 11:07 UTC · Issued · View Certificate"],
    ["Audit Log", "May 15, 2025 · 11:07:45 Certificate Issued · CRT-2025-05-0987"],
  ] },
];
const SYNC_PORTALS: Array<[string, string]> = [["CREATOR PORTAL", "Maya Chen · @maya.chen"], ["PROJECT PORTAL", "Meridian Protocol · @meridian"], ["ADMIN PORTAL", "ALLWEB3 Administrator · @allweb3.admin"]];
export function Allweb3ThreePortals() {
  const [step, setStep] = useState(0);
  const cur = SYNC_STEPS[step];
  return <Aw n="19" title="One Campaign Across Three Portals" sub="Shared campaign. One source of truth. Synchronized updates. · Campaign: Meridian Protocol Ambassador Program · Campaign ID CMP-2025-05-001 · Time Window May 1 – May 31, 2025 (UTC) · Status Active · Reserved area for official ALLWEB3 logo (as printed)" label="ALLWEB3 one campaign across three portals — interactive rebuild of 19.webp" foot="System View · All timestamps in UTC · ✓ Synchronized · ⚠ Exception Handled · ○ Read-Only Reference — One campaign. One truth. Three perspectives.">
    <div className="tks-flow" role="group" aria-label="Six synchronized campaign steps">{SYNC_STEPS.map((s, i) => <span key={s.title} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === step} onClick={() => setStep(i)}><span className="tks-num tks-num--light">{i + 1}</span> <b>{s.title}</b><br /><span className="aw3-dim">{s.when}</span></button></span>)}</div>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 10 }} aria-live="polite">
      {cur.cells.map(([head, body], i) => <div key={head} className="tks-card">
        <p className="tks-kicker" style={{ marginTop: 0, color: G }}>{SYNC_PORTALS[i][0]}</p>
        <p className="aw3-dim" style={{ margin: "0 0 6px" }}>{SYNC_PORTALS[i][1]}</p>
        <b>{head}</b>
        <p style={{ margin: "5px 0 0" }}>{body}</p>
        <p style={{ margin: "8px 0 0", color: G }}>✓ Synchronized</p>
      </div>)}
    </div>
    <p style={{ display: "flex", gap: 6, margin: "12px 0 0" }}>
      <button type="button" className="tks-btn tks-btn--ghost" disabled={step === 0} onClick={() => setStep((v) => v - 1)}>← Step</button>
      <button type="button" className="tks-btn" disabled={step >= SYNC_STEPS.length - 1} onClick={() => setStep((v) => v + 1)}>Next step →</button>
      <span className="tks-kicker" aria-live="polite">Step {step + 1} of 6 — {cur.title} · {cur.when}</span>
    </p>
  </Aw>;
}

/* ---------------- Dispatcher ---------------- */
export function allweb3ChapterFor(file: string): ReactNode | null {
  if (file === "1.webp") return <Allweb3MultiPortalWall />;
  if (file === "2.webp") return <Allweb3SharedObjectWall />;
  if (file === "3.webp") return <Allweb3RoleScopeTree />;
  if (file === "4.webp") return <Allweb3EveryRoleMosaic />;
  if (file === "5.webp") return <Allweb3OpaqueWorkflow />;
  if (file === "6.webp") return <Allweb3PainMapFull />;
  if (file === "7.webp") return <Allweb3LegacyVs />;
  if (file === "8.webp") return <Allweb3TrustGap />;
  if (file === "9.webp") return <Allweb3LegibleLoop />;
  if (file === "10.webp") return <Allweb3CriteriaColumns />;
  if (file === "11.webp") return <Allweb3EcosystemTriangle />;
  if (file === "12.webp") return <Allweb3LayersBands />;
  if (file === "13.webp") return <Allweb3TrustLoop />;
  if (file === "14.webp") return <Allweb3PermissionsGlyphs />;
  if (file === "15.webp") return <Allweb3IATray />;
  if (file === "16.webp") return <Allweb3Management />;
  if (file === "17.webp") return <Allweb3AdminWall />;
  if (file === "18.webp") return <Allweb3DisputeResolution />;
  if (file === "19.webp") return <Allweb3ThreePortalsMatrix />;
  return null;
}
