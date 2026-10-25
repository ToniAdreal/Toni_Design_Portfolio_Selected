import { useState } from "react";
import "./kit.css";

/**
 * Hackathon & Engineering Works — interactive exhibits (V2).
 * Only verified facts from AUDIT_AND_PLAN.md are shown. The
 * VerifyGate demo computes a real (local, demo-grade) hash chain
 * in the browser; it does not claim to be the production harness.
 */

function Head({ n, kicker }: { n: string; kicker: string }) {
  return <div className="ix-head"><span><b>{n}</b>&nbsp;&nbsp;|&nbsp;&nbsp;{kicker}</span><span className="ix-brand">HACKATHON &amp; ENGINEERING</span></div>;
}
function Evidence({ links }: { links: Array<[string, string]> }) {
  return <div className="ix-evidence"><span>Evidence</span>{links.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>;
}

/** Small deterministic FNV-1a hash for the in-browser demo chain. */
function fnv(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) { h ^= input.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, "0");
}

const VG_CHECKS = [
  { name: "Build compiles", detail: "The proposed change builds cleanly." },
  { name: "Test suite passes", detail: "Deterministic checks, not model judgement." },
  { name: "Diff within declared scope", detail: "Only the files the agent declared are touched." },
  { name: "Evidence record appended", detail: "Verdict + hashes written to the chain before delivery." },
];

export function VerifyGateDemo() {
  const [run, setRun] = useState(0);
  const records = VG_CHECKS.slice(0, run).map((c, i) => {
    const prev = i === 0 ? "genesis" : fnv(VG_CHECKS[i - 1].name + i);
    return { ...c, hash: fnv(c.name + prev), prev };
  });
  return <div className="ix" role="region" aria-label="VerifyGate — interactive verification demo">
    <Head n="01" kicker="VerifyGate — Verification Harness" />
    <div className="ix-title"><h3>AI proposes. Deterministic checks dispose.<span>Pre-delivery verification harness for coding agents, with a hash-chained evidence record. NVIDIA Nemotron via Nebius Token Factory. Run the gate:</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <ul className="ix-list">{VG_CHECKS.map((c, i) => <li key={c.name} className="ix-row" style={{ cursor: "default" }}>
        <b>{i < run ? "✓ PASS" : "· PENDING"}</b> — {c.name}<br /><span style={{ color: "#a1a1aa", fontSize: 11 }}>{c.detail}</span>
        {i < run && <><br /><span className="ix-mono" style={{ fontSize: 9, color: "#8fb7ff" }}>hash {records[i].hash} · prev {records[i].prev}</span></>}
      </li>)}</ul>
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button type="button" className="ix-btn" disabled={run >= VG_CHECKS.length} onClick={() => setRun(run + 1)}>{run >= VG_CHECKS.length ? "Gate passed — evidence chained" : "Run Next Check"}</button>
        <button type="button" className="ix-btn ghost" onClick={() => setRun(0)}>Reset</button>
      </div>
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96", marginTop: 10 }}>Demo chain computed locally in your browser (FNV-1a) to show the record structure — the production harness is the linked repository.</p>
    </div></div>
    <Evidence links={[["Repository — ToniAdreal/verifygate", "https://github.com/ToniAdreal/verifygate"], ["Live demo — toniadreal.github.io/verifygate", "https://toniadreal.github.io/verifygate/"]]} />
    <div className="ix-foot"><span>VerifyGate · v1.208.0</span><span>Interactive demo</span></div>
  </div>;
}

export function VerifyPayEscrow() {
  const states = ["Funded", "Locked", "Delivered", "Verifier Review", "Released"];
  const [state, setState] = useState(1);
  return <div className="ix" role="region" aria-label="VerifyPay — verifier-gated escrow flow (interactive)">
    <Head n="02" kicker="VerifyPay (Arc) & PassGate" />
    <div className="ix-title"><h3>Verifier-gated USDC escrow.<span>For AI-agent work on Arc — the verifier, not the payer’s mood, gates release. Advance the flow. Submitted to Arc Microgrants.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-stepper" role="group" aria-label="VerifyPay escrow states">
        {states.map((s, i) => <button key={s} type="button" className="ix-step" aria-pressed={state === i} onClick={() => setState(i)}><i>{i + 1}</i>{s}</button>)}
      </div>
      <p style={{ fontSize: 12.5, margin: "0 0 10px" }} aria-live="polite">{[
        "Buyer funds the escrow in USDC on Arc.",
        "Funds are locked; the agent starts work against a defined deliverable.",
        "The agent delivers the work product for verification.",
        "A verifier checks the delivery against the agreed criteria — the VerifyGate pattern.",
        "On a pass verdict, escrow releases to the agent. The verdict stays on the evidence record.",
      ][state]}</p>
      <p className="ix-mono" style={{ fontSize: 9, color: "#8e8e96" }}>PASSGATE — Airwallex Agentic Banking (HackerEarth): registration email-confirmed, idea shortlisted. Concept/workflow only — no public repo, no link claimed.</p>
    </div></div>
    <Evidence links={[["Repository — ToniAdreal/verifypay-arc", "https://github.com/ToniAdreal/verifypay-arc"]]} />
    <div className="ix-foot"><span>VerifyPay — Arc Microgrants submitted</span><span>PassGate — shortlisted idea</span></div>
  </div>;
}

export function ChatPackCard() {
  const [tier, setTier] = useState<"Free" | "Premium">("Premium");
  return <div className="ix" role="region" aria-label="ChatPack — product card (interactive)">
    <Head n="03" kicker="ChatPack & Open Source" />
    <div className="ix-title"><h3>ChatPack — shipped &amp; monetised.<span>Browser extension, Chrome Web Store v0.6.2 live. Paid tier is a ¥12.90 one-time purchase via Afdian with auto-delivered activation codes.</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-tabs" role="tablist" aria-label="ChatPack tiers">
        {(["Free", "Premium"] as const).map((t) => <button key={t} type="button" role="tab" className="ix-tab" aria-selected={tier === t} onClick={() => setTier(t)}>{t}</button>)}
      </div>
      {tier === "Free"
        ? <p style={{ fontSize: 12.5, margin: 0 }}>Free tier — 5 trials, so users can verify the workflow before paying.</p>
        : <p style={{ fontSize: 12.5, margin: 0 }}>Premium — <b>¥12.90 one-time</b>. Sold via Afdian; activation codes are delivered automatically. No subscription, no inflated claims.</p>}
    </div></div>
    <div className="ix-foot"><span>ChatPack · Chrome Web Store v0.6.2</span><span>¥12.90 one-time</span></div>
  </div>;
}

export function OpenTelemetryPR() {
  const [show, setShow] = useState<"bug" | "fix">("bug");
  return <div className="ix" role="region" aria-label="OpenTelemetry PR #9238 — bug and fix explorer (interactive)">
    <Head n="03" kicker="ChatPack & Open Source" />
    <div className="ix-title"><h3>OpenTelemetry PR #9238 — merged.<span>CNCF open-telemetry/opentelemetry-go. Merged by maintainers after two approvals, with a regression test. Toggle the fix:</span></h3></div>
    <div className="ix-body"><div className="ix-panel">
      <div className="ix-stepper" role="group" aria-label="Bug or fix view">
        <button type="button" className="ix-step" aria-pressed={show === "bug"} onClick={() => setShow("bug")}>The Bug</button>
        <button type="button" className="ix-step" aria-pressed={show === "fix"} onClick={() => setShow("fix")}>The Fix</button>
      </div>
      {show === "bug"
        ? <p style={{ fontSize: 12.5, margin: 0 }}>In <span className="ix-mono">recordingSpan.snapshot()</span>, the dropped-events / dropped-links counts were only assigned inside a <span className="ix-mono">len &gt; 0</span> gate — so when SpanLimits set EventCountLimit / LinkCountLimit to <b>0</b>, snapshots reported <b>zero</b> dropped events and links even though items had been dropped.</p>
        : <p style={{ fontSize: 12.5, margin: 0 }}>The fix moves the dropped-count assignment <b>out of</b> the <span className="ix-mono">len &gt; 0</span> gate, and adds a regression test that fails precisely on the unfixed main and passes after the change — the full sdk module test suite stayed green.</p>}
    </div></div>
    <Evidence links={[["PR #9238 — open-telemetry/opentelemetry-go", "https://github.com/open-telemetry/opentelemetry-go/pull/9238"]]} />
    <div className="ix-foot"><span>OpenTelemetry — Go</span><span>Merged upstream</span></div>
  </div>;
}
