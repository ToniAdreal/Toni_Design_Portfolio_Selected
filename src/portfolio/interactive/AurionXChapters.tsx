import { useState } from "react";
import "./tokenta-slides.css";

/**
 * Bespoke rebuilds of AurionX screens transcribed from the actual image
 * files AurionX_01–16, 19, 20, 22–41 (17, 18, 21, 26 live in
 * AurionXDesignSystem.tsx / ProjectScreens.tsx). Several files are
 * offset vs their filenames/data titles — see BUILD_NOTES §6:
 * file 23 = Error & Clarification States (printed 24), file 24 = Scene
 * Recall Technical Pipeline (printed 23), file 28 = Generated Output
 * Comparison (printed 29), file 29 = Progress & Control States
 * (printed 30), file 30 = Global Voice Before & After (printed 31),
 * file 31 = Language & Voice Setup (printed 32), file 32 = Five-Minute
 * Cut Technical Pipeline (printed 28).
 * Dark spectral language: Charcoal #0B0D12, Cyan #00E5FF, Azure
 * #2979FF, Violet #7B61FF (from AurionX_17).
 */

function Ax({ n, title, sub, children, label }: { n: string; title: string; sub?: string; children: React.ReactNode; label: string }) {
  return <div className="tks tks--dark" style={{ background: "#07080d" }} role="region" aria-label={label}>
    <div className="tks-head"><span><b>⋈ AurionX</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 41</span><span className="tks-brand" style={{ fontSize: 12 }}>AURIONX</span></div>
    <h3 style={{ fontSize: "clamp(20px,3vw,30px)" }}>{title}</h3>
    {sub ? <p className="tks-lede">{sub}</p> : null}
    {children}
  </div>;
}
const ACC = "#4cc9f0";
function Chips({ items, value, onPick, render }: { items: string[]; value: number; onPick: (i: number) => void; render?: (s: string) => string }) {
  return <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group">{items.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === value} onClick={() => onPick(i)}>{render ? render(s) : s}</button>)}</div>;
}

/* ---------------- 01 — Cinematic Hero ---------------- */
export function AurionXHero() {
  const [listening, setListening] = useState(true);
  const [pos, setPos] = useState(1457); // 24:17 of 58:21 (3501s)
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  return <Ax n="01" title="AurionX" sub="An AI-Native Viewing Layer for Global Entertainment — Solo Product Designer and Engineer, 2024." label="AurionX cinematic hero — interactive rebuild of AurionX_01">
    <div className="tks-card" style={{ background: "linear-gradient(180deg,#101623,#05070c)" }}>
      <p className="tks-kicker">Living-room TV · cinematic landscape still (represented structurally)</p>
      <p style={{ margin: "6px 0" }} aria-live="polite"><span style={{ color: listening ? ACC : "#9a9aa0" }}>● AurionX is {listening ? "listening" : "muted"}</span> <span aria-hidden="true" style={{ letterSpacing: 2, color: "#7B61FF" }}>∿∿∿∿∿</span></p>
      <label style={{ display: "block" }}>Episode 3 — The Last Light · {fmt(pos)} / 58:21
        <input type="range" min={0} max={3501} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Playback position, Episode 3 The Last Light" style={{ width: "100%" }} />
      </label>
      <p style={{ margin: "6px 0 0", display: "flex", gap: 6 }}>
        <button type="button" className="tks-btn" aria-pressed={listening} onClick={() => setListening((v) => !v)}>{listening ? "🎙 Listening — tap to mute" : "🎙 Muted — tap to listen"}</button>
        <span className="tks-chip">CC</span><span className="tks-chip">🔊</span><span className="tks-chip">⋮</span>
      </p>
    </div>
  </Ax>;
}

/* ---------------- 02 — Three-Feature Overview ---------------- */
const FEATURES = [
  { name: "Scene Recall", problem: "A remembered moment is difficult to locate.", result: "Describe a remembered moment and jump directly to the matching scene.", facts: "TV UI as printed: “Show me the moment they first see the castle.” Top Matches — 1 The Last Light · First view of the castle · 24:17 · 2 Approaching the castle · 37:42 · 3 Inside the castle · 1:08:11. The Last Light · 24:17 / 1:56:03." },
  { name: "Five-Minute Cut", problem: "A trailer cannot answer personal viewing preferences.", result: "Generate a personalized cut before committing to the full film.", facts: "TV UI as printed: Create your five-minute cut — Preferred Duration 3 min / 5 min / 7 min; Emphasis Story / Characters / Action / Emotion / World. Generating your five-minute preview… 00:18. Your Five-Minute Preview (6 frames, 5:00). Preview / Save to Watchlist." },
  { name: "Global Voice", problem: "Subtitles provide access but not a localized performance.", result: "Localize speech and subtitles while preserving viewing continuity.", facts: "TV UI as printed: Original (English) “This is our only chance to end the darkness.” ↔ Localized (Spanish) “Esta es nuestra única oportunidad para acabar con la oscuridad.” Language Español (Latinoamérica) · Audio AI Dubbing · Subtitles On." },
];
export function AurionXThreeFeatures() {
  const [f, setF] = useState(0);
  const [dur, setDur] = useState(1);
  const [emph, setEmph] = useState(0);
  const [lang, setLang] = useState<"en" | "es">("es");
  const cur = FEATURES[f];
  return <Ax n="02" title="Three features. Three moments." label="AurionX three-feature overview — interactive rebuild of AurionX_02">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
      {FEATURES.map((x, i) => <button key={x.name} type="button" className={`tks-card${i === f ? " is-on" : ""}`} aria-pressed={i === f} onClick={() => setF(i)}>
        <b style={{ fontSize: 15 }}>{x.name}</b><p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Problem</p><p style={{ color: "#c9c9ce", margin: 0 }}>{x.problem}</p>
        <p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Result</p><p style={{ margin: 0 }}>{x.result}</p></button>)}
    </div>
    <div className="tks-detail" aria-live="polite"><b>{cur.name}</b><p style={{ margin: "5px 0" }}>{cur.facts}</p>
      {f === 1 && <><p className="tks-kicker">Preferred duration</p><Chips items={["3 min", "5 min", "7 min"]} value={dur} onPick={setDur} /><p className="tks-kicker" style={{ marginTop: 8 }}>Emphasis</p><Chips items={["Story", "Characters", "Action", "Emotion", "World"]} value={emph} onPick={setEmph} /></>}
      {f === 2 && <><p className="tks-kicker">Preview language</p><div style={{ display: "flex", gap: 5 }}><button type="button" className="tks-chip" aria-pressed={lang === "en"} onClick={() => setLang("en")}>Original (English)</button><button type="button" className="tks-chip" aria-pressed={lang === "es"} onClick={() => setLang("es")}>Localized (Spanish)</button></div>
        <p style={{ margin: "6px 0 0" }}>{lang === "en" ? "“This is our only chance to end the darkness.”" : "“Esta es nuestra única oportunidad para acabar con la oscuridad.”"}</p></>}
    </div>
  </Ax>;
}

/* ---------------- 03 — Project at a Glance ---------------- */
const GLANCE: Array<[string, string]> = [
  ["Context", "2024 Sony Global University Innovation Competition"], ["Challenge", "Big Screen for Young Gen's Lifestyle"],
  ["Role", "Solo Product Designer and Engineer"],
  ["Ownership", "Strategy, research synthesis, product architecture, interaction design, visual design, AI workflow design, prototype implementation, technical validation and final presentation"],
  ["Deliverables", "Product strategy, television UX, design system, three feature prototypes, engineering architecture and competition submission"],
  ["Prototype status", "Designed and technically prototyped as an independent competition concept"],
  ["Core features", "Scene Recall, Five-Minute Cut, Global Voice"], ["Outcome", "Competition submission completed"], ["Year", "2024"],
];
export function AurionXAtAGlance() {
  const [row, setRow] = useState(0);
  return <Ax n="03" title="Project at a Glance" sub="A focused AI viewing assistant built around three high-value moments: finding a remembered scene, deciding what to watch, and crossing language barriers." label="AurionX project at a glance — interactive rebuild of AurionX_03">
    <table className="tks-table"><tbody>{GLANCE.map(([k, v], i) => <tr key={k} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#1d1e20" : undefined }}><td style={{ color: "#8f9bff", textTransform: "uppercase", letterSpacing: ".08em", fontSize: 10.5 }}>{k}</td><td>{v}</td></tr>)}</tbody></table>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>TV UI as printed</p>
      <p style={{ margin: 0 }}>AurionX is listening ∿∿ · “Show me the moment they first see the castle.” · Top Matches — 1 First view of the castle 24:17 · 2 Approaching the castle 37:42 · 3 Inside the castle 1:08:11 · The Last Light · 24:17 / 1:56:03</p></div>
  </Ax>;
}

/* ---------------- 04 — Solo Ownership Timeline ---------------- */
const TIMELINE: Array<[string, string, string]> = [
  ["Brief analysis", "Project Brief — Big Screen for Young Gen's Lifestyle", "Interpreted the brief, extracted objectives and success criteria."],
  ["Market and technology research", "Industry Reports · Technology Trends · Competitor Analysis · Design Inspiration", "Researched user behavior, AI trends, competitors and adjacent TV experiences."],
  ["Opportunity definition", "Opportunity Matrix", "Mapped opportunities at the intersection of user value and technical feasibility."],
  ["Product architecture", "Product Architecture — AI Services / Experience / Application / Platform / Data layers", "Designed layered architecture for scale, maintainability and performance."],
  ["Wireframes", "Home — Wireframe", "Structured information architecture and created grayscale television wireframes."],
  ["UI system", "Component System — Typography · Color · Buttons · Cards · Navigation", "Built a consistent UI system with type, color, components and navigation patterns."],
  ["AI prototype", "AI Prototype — Test Flow (Top Matches 24:17 / 37:42 / 1:08:11)", "Prototyped AI experience with scene search, ranking and conversational feedback loop."],
  ["Front-end implementation", "Implementation — HomeScreen.tsx / SceneCard", "Built the TV app experience with clean components and performant code."],
  ["Testing", "Test Matrix — AI Search · Voice · Playback · Performance · Compatibility · Usability (all ✓)", "Validated across functional, performance, compatibility and usability scenarios."],
  ["Competition submission", "Project at a Glance — 2024 Sony Global University Innovation Competition", "Prepared and delivered the final presentation and competition submission."],
];
export function AurionXTimeline() {
  const [s, setS] = useState(0);
  const cur = TIMELINE[s];
  return <Ax n="04" title="Solo Ownership, End to End" sub="One project carried from brief interpretation through product design, technical prototyping and final submission." label="AurionX solo ownership timeline — interactive rebuild of AurionX_04">
    <div className="tks-flow" role="group" aria-label="Ownership steps">{TIMELINE.map(([t], i) => <button key={t} type="button" className="tks-chip" aria-pressed={i === s} onClick={() => setS(i)}>{String(i + 1).padStart(2, "0")} {t}</button>)}</div>
    <div className="tks-detail" aria-live="polite"><p className="tks-kicker" style={{ marginTop: 0 }}>Evidence</p><b>{cur[1]}</b><p style={{ margin: "5px 0 0" }}>{cur[2]}</p></div>
  </Ax>;
}

/* ---------------- 05 — Reframing the Brief ---------------- */
export function AurionXBrief() {
  const [dims, setDims] = useState<boolean[]>([true, false, false, false, false]);
  const DIMS = ["Innovation", "Feasibility", "Logicality", "Market fit", "Topic alignment"];
  return <Ax n="05" title="Reframing the Brief" sub="A reconstructed view of the competition brief." label="AurionX competition brief reconstruction — interactive rebuild of AurionX_05">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr 1.2fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Topic</p><p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Big Screen for Young Gen's Lifestyle</p>
        <p className="tks-kicker" style={{ margin: "12px 0 2px" }}>Core question</p><p style={{ margin: 0 }}>How might AI make television more useful, intuitive and globally accessible for a new generation of viewers?</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Submission constraints</p><p style={{ margin: 0 }}>Design for a TV app experience with clean components and performant code.</p>
        <p className="tks-kicker" style={{ margin: "12px 0 4px" }}>Evaluation dimensions — toggle</p>
        {DIMS.map((d, i) => <p key={d} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={dims[i]} onClick={() => setDims((v) => v.map((x, j) => (j === i ? !x : x)))}>{dims[i] ? "— " : "+ "}{d}</button></p>)}
        <p className="tks-kicker" aria-live="polite">{dims.filter(Boolean).length} / 5 dimensions in focus</p></div>
      <div className="tks-card" style={{ borderColor: "#7B61FF" }}><p className="tks-kicker" style={{ marginTop: 0 }}>✦ My interpretation</p>
        <p style={{ fontSize: 15, margin: 0 }}>Treat the television as an intelligent viewing layer, then focus the concept on three high-value moments rather than a broad feature catalogue.</p></div>
    </div>
  </Ax>;
}

/* ---------------- 06 — Television Interaction Problem ---------------- */
const PROBLEM_PANELS = [
  { n: 1, label: "Watching", body: "TV: Episode 3 · The Last Light — voice wave under playback, 24:17 / 58:21. The viewer tries to recall a moment while the film plays." },
  { n: 2, label: "Scrubbing by remote", body: "TV: thumbnail scrub strip over the timeline, playhead at 34:06 — hunting frame by frame with a remote." },
  { n: 3, label: "Paused, phone in hand", body: "TV paused (24:17 / 58:21); the viewer leaves the TV and searches on a phone instead." },
  { n: 4, label: "Browsing by title", body: "TV home: Continue Watching — Edge of Silence · The Method · Cobalt Horizon · Beyond the Ridge. Recommended For You — Nightfall · The Cartographer · Echoes · Falling Earth. Nav: Home · Search · Movies · TV Shows · My List · Settings." },
];
export function AurionXTVProblem() {
  const [p, setP] = useState(0);
  return <Ax n="06" title="The Television Interaction Problem" label="AurionX television interaction problem — interactive rebuild of AurionX_06">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{PROBLEM_PANELS.map((x, i) => <button key={x.n} type="button" className={`tks-card${i === p ? " is-on" : ""}`} aria-pressed={i === p} onClick={() => setP(i)}><span className="tks-num tks-num--light">{x.n}</span><p style={{ fontWeight: 700, margin: "6px 0 0" }}>{x.label}</p><p style={{ color: "#c9c9ce", margin: "4px 0 0", fontSize: 11 }}>(Photographic living-room panel — represented structurally.)</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">{PROBLEM_PANELS[p].body}</div>
    <p style={{ textAlign: "center", fontSize: 15, margin: "12px 0 0" }}>Television content is searchable by title, but rarely by remembered meaning.</p>
  </Ax>;
}

/* ---------------- 07 — Movie Discovery Friction ---------------- */
const CURRENT = [
  ["Browse poster", "Decision fatigue", "Poster grid as printed: Dune · The Batman · Arrival · John Wick · Parasite · Mad Max: Fury Road."],
  ["Open details", "Unreliable trailers", "DUNE — 2021 · PG-13 · 2h 35m · Sci-Fi. “A mythic journey of Paul Atreides as he navigates political intrigue and survival on the desert planet Arrakis.” Play / + Watchlist."],
  ["Watch trailer", "Context switching", "Trailer player at 01:47 / 02:29 — the viewer leaves the decision flow to judge a promotional asset."],
  ["Search reviews", "High time commitment", "“dune 2021 review” — Film Focus 8.6/10 “A sweeping sci-fi epic…” · Cinema Debate 6.5/10 “Ambitious but uneven…” · Viewer Views Mixed “It's good, but confusing…”."],
  ["Decide", "Spoiler risk", "The viewer weighs a 2h 35m commitment with partial, spoiler-prone information."],
  ["Start movie", "", "Playback finally starts — after five friction steps."],
];
export function AurionXDiscoveryFriction() {
  const [s, setS] = useState(0);
  const [decided, setDecided] = useState<string | null>(null);
  return <Ax n="07" title="Movie Discovery Friction" label="AurionX movie discovery friction — interactive rebuild of AurionX_07">
    <p className="tks-kicker">Current movie-selection journey</p>
    <div className="tks-flow" role="group">{CURRENT.map(([t, f], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{i + 1} {t}</b>{f ? <><br /><span style={{ color: "#e8a33d" }}>{f}</span></> : null}</button></span>)}</div>
    <div className="tks-detail" aria-live="polite">{CURRENT[s][2]}</div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>AurionX journey — 3 steps</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.4fr 1fr" }}>
      <div className="tks-card"><b>1 · Describe preference</b><p style={{ color: "#c9c9ce" }}>“I want something thought-provoking, visually stunning, and emotionally resonant.” ∿∿ voice waveform</p></div>
      <div className="tks-card"><b>2 · Generate five-minute cut</b><p style={{ color: "#c9c9ce" }}>Your five-minute cut — 5 preview frames over a progress bar; a personal, spoiler-protected sample of the actual film.</p></div>
      <div className="tks-card"><b>3 · Decide</b><p style={{ display: "flex", gap: 5, marginTop: 6 }}><button type="button" className="tks-btn" style={{ background: "linear-gradient(90deg,#2979FF,#7B61FF)", border: "none", color: "#fff" }} onClick={() => setDecided("start")}>Start movie</button><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setDecided("no")}>Not for me</button></p>
        <p aria-live="polite" style={{ margin: "6px 0 0" }}>{decided === "start" ? "Decision made in 3 steps — no trailer detour." : decided === "no" ? "Rejected without a 2-hour commitment — describe a new preference." : ""}</p></div>
    </div>
  </Ax>;
}

/* ---------------- 08 — Language Access Problem ---------------- */
const LANG_STAGES = [
  ["Desired title", "ECHOES IN THE WILDS — 00:18:42. The title the viewer wants to watch."],
  ["Unavailable in selected language", "🔒 “This title is not available in your selected language.” — 00:18:42."],
  ["Subtitle-only", "Subtitle line: “I kept the truth to protect you.” — access without performance. 00:18:42."],
  ["Performance nuance", "Close-up performance; subtitle line: “I kept the truth to protect you.” — nuance lives in delivery, not text. 00:18:42."],
];
const LANG_TIERS: Array<[string, string[]]> = [
  ["Subtitles", ["Accurate words", "Reading required", "Split attention"]],
  ["Standard dubbing", ["Natural delivery", "Some nuance retained", "Performance partially preserved"]],
  ["Higher-fidelity localized performance", ["Cultural adaptation", "Emotional fidelity", "Fully immersive experience"]],
];
export function AurionXLanguageProblem() {
  const [s, setS] = useState(0);
  const [t, setT] = useState(0);
  return <Ax n="08" title="Language Access Problem" sub="World map as printed: blue = available in original language; outlined = unavailable in selected language (US, Brazil, parts of Europe and India lit; Australia in violet)." label="AurionX language access problem — interactive rebuild of AurionX_08">
    <div className="tks-flow" role="group">{LANG_STAGES.map(([title, body], i) => <span key={title} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">›</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{title}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite">{LANG_STAGES[s][1]}</div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Localization quality</p>
    <Chips items={LANG_TIERS.map(([n]) => n)} value={t} onPick={setT} />
    <div className="tks-card" style={{ marginTop: 8 }} aria-live="polite"><b>{LANG_TIERS[t][0]}</b><ul style={{ margin: "5px 0 0" }}>{(LANG_TIERS[t][1] as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
      <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>Subtitle shown in all three tiers, as printed: “I kept the truth to protect you.”</p></div>
  </Ax>;
}

/* ---------------- 09 — Research Method and Evidence ---------------- */
const METHODS = ["Desk research", "Competitor analysis", "User interviews", "Survey", "Prototype testing", "Technical feasibility experiments"];
export function AurionXResearchMethod() {
  const [m, setM] = useState(0);
  return <Ax n="09" title="Research Method and Evidence" sub="Publish only verified sources, sample sizes and outputs." label="AurionX research method and evidence — interactive rebuild of AurionX_09">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{METHODS.map((x, i) => <button key={x} type="button" className={`tks-card${i === m ? " is-on" : ""}`} aria-pressed={i === m} onClick={() => setM(i)}><span style={{ color: "#8f9bff" }}>{String(i + 1).padStart(2, "0")}</span> <b>{x}</b><p style={{ color: "#9a9aa0", margin: "6px 0 0", fontSize: 11 }}>(Evidence-board photograph — represented structurally.)</p></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{METHODS[m]}</b>
      <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 6 }}><div className="tks-card">Question investigated<br /><span style={{ color: "#8f9bff" }}>Evidence to insert</span></div><div className="tks-card">Concrete output<br /><span style={{ color: "#8f9bff" }}>Evidence to insert</span></div></div>
      <p style={{ margin: "6px 0 0", color: "#c9c9ce" }}>As printed, both fields are placeholders — no sources, sample sizes or outputs were supplied for this slide.</p></div>
  </Ax>;
}

/* ---------------- 10 — Insight Synthesis ---------------- */
const INSIGHTS = [
  ["Viewers remember scenes semantically, not temporally.", "Semantic scene index.", "Scene thumbnails as printed: Arrival · The Discovery · The Confrontation · The Escape · Aftermath."],
  ["Large-screen text input creates disproportionate friction.", "Voice-first input.", "On-screen keyboard as printed: “Search for a movie, actor, or genre” — A–Z grid, SPACE / CLEAR / SEARCH, operated by remote."],
  ["Trailers are promotional assets, not personalized decision tools.", "Personalized preview.", "ORIGIN — Official Trailer · ▶ Play Trailer · + Add to Watchlist."],
  ["Content discovery often leaves the television and moves to a phone.", "Keep discovery on TV.", "Phone UI as printed: Best sci-fi series — Silo, Severance, Dark — discovery happening off the TV."],
  ["Subtitles provide access but do not reproduce a spoken performance.", "Optional localized voice.", "Original: “I need you to trust me.” · Localized: “Necesito que confíes en mí.”"],
  ["AI features need visible confidence and reversible actions.", "Explain, cancel and correct.", "AI Recommendation card as printed: “Because you watched Arrival and Ex Machina, you might like Annihilation.” Confidence: Medium. Explain why / Not Interested / Report Issue."],
];
export function AurionXInsights() {
  const [i, setI] = useState(0);
  const [rec, setRec] = useState<string | null>(null);
  const cur = INSIGHTS[i];
  return <Ax n="10" title="Insight Synthesis" label="AurionX insight synthesis — interactive rebuild of AurionX_10">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{INSIGHTS.map(([ev], j) => <button key={ev} type="button" className={`tks-card${j === i ? " is-on" : ""}`} aria-pressed={j === i} onClick={() => setI(j)}><span style={{ color: "#8f9bff" }}>{String(j + 1).padStart(2, "0")}</span><p className="tks-kicker" style={{ margin: "6px 0 2px" }}>Evidence</p><p style={{ margin: 0 }}>{ev}</p><p className="tks-kicker" style={{ margin: "8px 0 2px" }}>Design implication →</p><p style={{ margin: 0, fontWeight: 700 }}>{INSIGHTS[j][1]}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">{cur[2]}
      {i === 5 && <p style={{ margin: "8px 0 0", display: "flex", gap: 5 }}><button type="button" className="tks-btn" style={{ background: "linear-gradient(90deg,#2979FF,#7B61FF)", border: "none", color: "#fff" }} onClick={() => setRec("explained")}>Explain why</button><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setRec("dismissed")}>Not Interested</button><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setRec("reported")}>Report Issue</button>
        <span>{rec === "explained" ? "Because you watched Arrival and Ex Machina — Confidence: Medium." : rec === "dismissed" ? "Recommendation dismissed — action reversible." : rec === "reported" ? "Issue reported — recommendation kept visible for correction." : ""}</span></p>}
    </div>
  </Ax>;
}

/* ---------------- 11 — Opportunity Prioritization Matrix ---------------- */
const OPPS = [
  { name: "Scene Recall", x: "High feasibility", y: "High value", status: "Selected — Prioritize for development" },
  { name: "Five-Minute Cut", x: "High feasibility", y: "High value", status: "Selected — Prioritize for development" },
  { name: "Global Voice", x: "High feasibility", y: "High value", status: "Selected — Prioritize for development" },
  { name: "Virtual celebrity companion", x: "Low feasibility", y: "High value", status: "Defer — Revisit with future capabilities" },
  { name: "Emotional digital twin", x: "Low feasibility", y: "High value", status: "Defer — Revisit with future capabilities" },
  { name: "Humour recognition", x: "Low feasibility", y: "Low value", status: "Research — Explore and validate" },
  { name: "Live expression translation", x: "Low feasibility", y: "Low value", status: "Research — Explore and validate" },
  { name: "Audience synchronization", x: "High feasibility", y: "Low value", status: "Defer — Revisit with future capabilities" },
  { name: "Fan creation tools", x: "High feasibility", y: "Low value", status: "Defer — Revisit with future capabilities" },
];
export function AurionXOpportunityMatrix() {
  const [o, setO] = useState(0);
  const cur = OPPS[o];
  return <Ax n="11" title="Opportunity Prioritization Matrix" sub="We focus where high viewer value meets technical feasibility. Selected concepts in the high-value, achievable zone receive priority investment." label="AurionX opportunity matrix — interactive rebuild of AurionX_11">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>High viewer value · Low feasibility</p>{OPPS.filter((x) => x.y === "High value" && x.x === "Low feasibility").map((x) => <p key={x.name} style={{ margin: "4px 0" }}>◌ {x.name}</p>)}
        <p className="tks-kicker">Low value · Low feasibility</p>{OPPS.filter((x) => x.y === "Low value" && x.x === "Low feasibility").map((x) => <p key={x.name} style={{ margin: "4px 0" }}>◌ {x.name}</p>)}</div>
      <div className="tks-card" style={{ borderColor: "#7B61FF" }}><p className="tks-kicker" style={{ marginTop: 0 }}>High viewer value · High feasibility — the achievable zone</p>{OPPS.filter((x) => x.y === "High value" && x.x === "High feasibility").map((x) => <p key={x.name} style={{ margin: "4px 0" }}>◉ {x.name}</p>)}
        <p className="tks-kicker">Low value · High feasibility</p>{OPPS.filter((x) => x.y === "Low value" && x.x === "High feasibility").map((x) => <p key={x.name} style={{ margin: "4px 0" }}>◌ {x.name}</p>)}</div>
    </div>
    <div style={{ marginTop: 10 }}><Chips items={OPPS.map((x) => x.name)} value={o} onPick={setO} /></div>
    <div className="tks-detail" aria-live="polite"><b>{cur.name}</b> — Viewer value: {cur.y} · Technical feasibility: {cur.x} · <b>{cur.status}</b>
      <p style={{ margin: "5px 0 0" }}>Prioritize opportunities that deliver meaningful viewer value and are achievable with current or near-term technology.</p></div>
  </Ax>;
}

/* ---------------- 12 — Product Principles ---------------- */
const PRINCIPLES_AX = [
  ["Speak naturally", "The viewer should describe an intention, not learn commands.", "TV as printed: “Find something inspiring for tonight” over a voice waveform."],
  ["Stay inside the story", "AurionX should not feel like opening a separate app.", "TV overlay as printed: ◯ “Finding something inspiring… Matching to your mood” · Press ◯ to cancel."],
  ["Explain AI actions", "Recognition, confidence and progress should remain visible.", "Panel as printed: Understanding ✓ “Find something inspiring for tonight” · Interpreted as Mood: Inspiring · Type: Movie or Series · High confidence · Searching 72% — “This may take a few seconds.”"],
  ["Make every action reversible", "Viewers must be able to cancel, correct and return instantly.", "“Here are some picks for you” — Arrival · The Night House · Life of Pi · Her · ↩ Undo / Refine / ✕ Cancel."],
];
export function AurionXPrinciples() {
  const [p, setP] = useState(2);
  const [undone, setUndone] = useState(false);
  const cur = PRINCIPLES_AX[p];
  return <Ax n="12" title="Product Principles" label="AurionX product principles — interactive rebuild of AurionX_12">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>{PRINCIPLES_AX.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === p ? " is-on" : ""}`} aria-pressed={i === p} onClick={() => setP(i)}><b style={{ fontSize: 15 }}>{t}</b><p style={{ color: "#c9c9ce", margin: "5px 0 0" }}>{b}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">{cur[2]}
      {p === 2 && <div style={{ marginTop: 8 }}><div style={{ background: "#1d1e20", height: 8, borderRadius: 4 }}><div style={{ width: "72%", height: 8, borderRadius: 4, background: "linear-gradient(90deg,#00E5FF,#7B61FF)" }} /></div><p className="tks-kicker" style={{ margin: "4px 0 0" }}>Searching — 72% · High confidence</p></div>}
      {p === 3 && <p style={{ margin: "8px 0 0", display: "flex", gap: 5 }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setUndone(true)}>↩ Undo</button><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setUndone(false)}>Refine</button><span>{undone ? "Action undone — returned to playback instantly." : ""}</span></p>}
    </div>
  </Ax>;
}

/* ---------------- 13 — Product Scope ---------------- */
const SCOPE_TIERS = [
  ["Built or prototyped", "Add verified module or prototype"],
  ["Designed but not fully implemented", "Add interaction-complete feature"],
  ["Future exploration", "Speculative extension"],
];
export function AurionXScope() {
  const [confirmed, setConfirmed] = useState<Record<string, boolean>>({});
  return <Ax n="13" title="Product Scope" sub="Three-tier view of the AurionX portfolio. Status reflects verified evidence only." label="AurionX product scope — interactive rebuild of AurionX_13">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{SCOPE_TIERS.map(([tier, slot], ti) => <div key={tier} className="tks-card">
      <p style={{ marginTop: 0 }}><span className="tks-num tks-num--light">{ti + 1}</span> <b>{tier}</b></p>
      <div style={{ border: "1px dashed #3a3b3f", borderRadius: 6, padding: 10, textAlign: "center", color: "#c9c9ce" }}>{slot}</div>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Candidate features (awaiting verification)</p>
      {["Scene Recall", "Five-Minute Cut", "Global Voice"].map((f) => { const key = `${ti}-${f}`; return <p key={f} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "5px 0" }}><span>{f}</span><button type="button" className="tks-chip" aria-pressed={!!confirmed[key]} onClick={() => setConfirmed((c) => ({ ...c, [key]: !c[key] }))}>{confirmed[key] ? "Status: unconfirmed" : "Confirm status"}</button></p>; })}
    </div>)}</div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Scope reflects verified evidence only — as printed, no candidate feature carries a confirmed status in any tier.</p>
  </Ax>;
}

/* ---------------- 14 — Product Architecture ---------------- */
const LAYERS: Array<[string, string[]]> = [
  ["Viewer layer", ["Voice", "Remote", "Playback overlay"]],
  ["Interaction layer", ["Wake word", "Command interpretation", "Clarification", "Progress states"]],
  ["Intelligence layer", ["Scene retrieval", "Highlight generation", "Translation and dubbing"]],
  ["Media layer", ["Video", "Audio", "Subtitles", "Metadata", "Timecodes"]],
  ["Platform layer", ["Processing", "Storage", "Permissions", "Privacy", "Model services"]],
];
export function AurionXArchitecture() {
  const [l, setL] = useState(2);
  return <Ax n="14" title="AurionX Product Architecture" sub="↑ Data flow (up) · ↓ Control flow (down)" label="AurionX product architecture — interactive rebuild of AurionX_14">
    {LAYERS.map(([name, mods], i) => <button key={name} type="button" className={`tks-card`} aria-pressed={i === l} onClick={() => setL(i)} style={{ display: "block", width: "100%", marginBottom: 6, borderColor: i === l ? "#7B61FF" : undefined, boxShadow: i === l ? "0 0 0 1px #7B61FF" : undefined }}>
      <b style={{ color: ["#00E5FF", "#4cc9f0", "#b18cff", "#ff8fb2", "#8f9bff"][i] }}>{name}</b> — {(mods as string[]).join(" · ")}</button>)}
    <div className="tks-detail" aria-live="polite"><b>{LAYERS[l][0]}</b> contains {(LAYERS[l][1] as string[]).length} modules as printed: {(LAYERS[l][1] as string[]).join(", ")}.</div>
  </Ax>;
}

/* ---------------- 15 — Information Architecture ---------------- */
const NAV_NODES = [
  ["Home", "Browse, continue watching, picks for you"], ["Search", "Find movies, shows, people and more"],
  ["Playback", "Watch content. Contextual anchor."], ["History", "View watch history and activity"],
  ["Language settings", "Audio, subtitles and UI preferences"], ["Privacy and data controls", "Privacy, data usage and permissions"],
];
const OVERLAY_NODES = [
  ["Scene results", "Discover scenes, moments and matches related to what you're watching."],
  ["Highlight setup", "Choose highlight types, preferences and personalization."],
  ["Processing", "View AI processing status, progress and completed results."],
];
export function AurionXIA() {
  const [sel, setSel] = useState("Playback");
  const all = [...NAV_NODES, ["AurionX overlay", "AI-powered insights and controls available during playback."], ...OVERLAY_NODES];
  const cur = all.find(([n]) => n === sel) ?? all[2];
  return <Ax n="15" title="Information Architecture" sub="AurionX TV OS Sitemap — Playback is the contextual anchor. AurionX overlay provides intelligent controls that branch to feature destinations." label="AurionX information architecture — interactive rebuild of AurionX_15">
    <p className="tks-kicker">Global navigation</p>
    <Chips items={NAV_NODES.map(([n]) => n)} value={NAV_NODES.findIndex(([n]) => n === sel)} onPick={(i) => setSel(NAV_NODES[i][0])} />
    <p className="tks-kicker" style={{ marginTop: 10 }}>AurionX overlay (during playback)</p>
    <Chips items={OVERLAY_NODES.map(([n]) => n)} value={OVERLAY_NODES.findIndex(([n]) => n === sel)} onPick={(i) => setSel(OVERLAY_NODES[i][0])} />
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> — {cur[1]}
      <p style={{ margin: "6px 0 0", color: "#c9c9ce" }}>Two layers: Content Navigation (core TV browsing and settings) · AurionX Features (AI-powered scene understanding and personalization). Remote guide — Navigate: Left/Right between items, Up/Down within lists · Select: open item or set a preference · Back: return to previous screen or close overlay.</p></div>
  </Ax>;
}

/* ---------------- 16 — End-to-End Experience Map ---------------- */
const MAP_STEPS = [
  ["Discover", "Browse or search for something to watch."], ["Play", "Start playback on any device."],
  ["Invoke AurionX", "Summon the assistant in context. — “How can I help?”"], ["Describe request", "Speak or type what you want. — “Show me the scene where Hari Seldon makes the deal with the Mule.”"],
  ["Confirm interpretation", "AurionX clarifies the understanding. — “You're asking for the scene where Hari Seldon makes the deal with the Mule. Is that right?” Yes / No"],
  ["Process", "AurionX finds and prepares the answer. — Searching across episodes, transcripts, and metadata."],
  ["Review result", "View the response in context."], ["Continue watching", "Stay in the flow seamlessly."],
];
const LANES = [
  ["Scene Recall", "Find a specific scene or moment.", "Scene identified — 14:27", "Jump to scene — 14:27 · Scene found: Foundation S1 · E8 · 14:27"],
  ["Five-Minute Cut", "Get a quick recap or highlight reel.", "Creating a 5-minute cut from this episode…", "Your 5-minute cut — 5:00"],
  ["Global Voice", "Ask across your entire library.", "Searching your library for matches… (+12 more)", "Top matches — Foundation · Dune · Silo"],
];
export function AurionXExperienceMap() {
  const [s, setS] = useState(4);
  const [lane, setLane] = useState(0);
  return <Ax n="16" title="End-to-End Experience Map" sub="One assistant. Multiple ways to watch." label="AurionX experience map — interactive rebuild of AurionX_16">
    <div className="tks-flow" role="group">{MAP_STEPS.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">›</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{i + 1}. {t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite">{MAP_STEPS[s][1]}</div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Feature lanes (branch at steps 5 and 7)</p>
    <Chips items={LANES.map(([n]) => n)} value={lane} onPick={setLane} />
    <div className="tks-card" style={{ marginTop: 8 }} aria-live="polite"><b>{LANES[lane][0]}</b> — {LANES[lane][1]}<br />Step 5: {LANES[lane][2]} · Step 7: {LANES[lane][3]}</div>
  </Ax>;
}

/* ---------------- 19 — Scene Recall Scenario ---------------- */
const SCENARIO = [
  ["Viewer invokes AurionX while a fictional drama plays.", "TV: ECHOES OF BLOOD · S1 E6 · Reckonings — 24:18 / 54:27 · “Listening...” overlay at the foot of the screen."],
  ["The request appears as accurate live transcription in a subtle playback overlay.", "TV overlay: “Take me back to the scene where the hero confronts his brother in the kitchen.” — same frame, 24:18 / 54:27."],
  ["Playback jumps to the selected kitchen confrontation and shows a restrained timecode seek confirmation.", "TV: kitchen confrontation frame — 42:31 / 54:27 · “Moved to requested scene ✓”."],
];
export function AurionXScenario() {
  const [p, setP] = useState(0);
  return <Ax n="19" title="Scene Recall Scenario" label="AurionX scene recall scenario — interactive rebuild of AurionX_19">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{SCENARIO.map(([cap], i) => <button key={cap} type="button" className={`tks-card${i === p ? " is-on" : ""}`} aria-pressed={i === p} onClick={() => setP(i)}><span className="tks-num tks-num--light">{String(i + 1).padStart(2, "0")}</span><p style={{ margin: "6px 0 0", textTransform: "uppercase", letterSpacing: ".04em", fontSize: 11 }}>{cap}</p><p style={{ color: "#9a9aa0", fontSize: 11 }}>(Photographic panel — represented structurally.)</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">{SCENARIO[p][1]}
      <p style={{ margin: "8px 0 0", display: "flex", gap: 5 }}><button type="button" className="tks-btn" disabled={p === 0} onClick={() => setP((v) => v - 1)}>← Panel</button><button type="button" className="tks-btn" disabled={p >= 2} onClick={() => setP((v) => v + 1)}>{p === 1 ? "Jump to scene →" : "Next panel →"}</button></p></div>
  </Ax>;
}

/* ---------------- 20 — Scene Recall User Flow ---------------- */
const FLOW_STEPS = [
  ["Wake", "System detects wake word or button press."], ["Listen", "Capture audio until user stops speaking."],
  ["Transcribe", "Convert speech to text."], ["Extract meaning", "Identify entities, actions, and context."],
  ["Search scene index", "Query indexed scenes and metadata."], ["Rank candidates", "Score and rank most relevant scenes."],
  ["Confirm or clarify", "Show top match and ask for confirmation."], ["Seek to timecode", "Jump to the selected scene at the exact timecode."],
];
const FLOW_FALLBACKS = [
  ["Multiple matches", "Clarify details", "Ask for more context (e.g., character, action, line, or visual detail)."],
  ["No match", "Refine or expand", "Suggest alternatives or broaden the search."],
  ["Incorrect character", "Correct character", "Confirm or select the right character from suggestions."],
  ["Ambiguous episode", "Specify episode", "Ask for season, episode, or edition to narrow results."],
  ["Unsupported content source", "Change source", "Invite user to switch sources or import supported content."],
];
export function AurionXUserFlow() {
  const [s, setS] = useState(0);
  const [fb, setFb] = useState<number | null>(null);
  return <Ax n="20" title="Scene Recall User Flow" sub="From spoken intent to precise playback. Input modes: Voice — speak naturally to recall a scene · Remote — press and hold voice button." label="AurionX scene recall user flow — interactive rebuild of AurionX_20">
    <div className="tks-flow" role="group">{FLOW_STEPS.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{i + 1} {t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{FLOW_STEPS[s][0]}</b> — {FLOW_STEPS[s][1]}</div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>Decision points (low-confidence paths) → clarification / fallback</p>
    <Chips items={FLOW_FALLBACKS.map(([n]) => n)} value={fb ?? -1} onPick={setFb} />
    {fb !== null && <div className="tks-card" style={{ marginTop: 8 }} aria-live="polite"><b>{FLOW_FALLBACKS[fb][1]}</b> — {FLOW_FALLBACKS[fb][2]}</div>}
    <p style={{ color: "#c9c9ce", margin: "10px 0 0" }}>Designed for natural conversation — the system guides, clarifies, and gets you to the right scene. <b>Privacy first:</b> voice and text are processed securely on-device whenever possible.</p>
  </Ax>;
}

/* ---------------- 22 — Scene Index Anatomy ---------------- */
const RECORD: Array<[string, string, string?]> = [
  ["Start time", "00:37:42:18"], ["End time", "00:40:58:07"],
  ["Transcript", "Hero: “You crossed a line.” · Brother: “You never tried to understand.”"],
  ["Characters", "Hero, Brother", "hero"], ["Location", "Kitchen", "kitchen"],
  ["Objects", "Kitchen island, Coffee mugs, Knife block, Phone"],
  ["Actions", "The hero confronts his brother; they argue across the island.", "confronts"],
  ["Emotional tone", "Tense, hurt, unresolved"], ["Audio events", "Raised voices, Chair scrape, Mug set down"],
  ["Episode and title", "Episode 6 — Fractures"], ["Embedding reference", "aurx_s6e6_00374218_a1b2c3d4"], ["Confidence", "—"],
];
const ENTITIES: Array<[string, string]> = [["hero", "Characters"], ["confronts", "Actions"], ["brother", "Characters"], ["kitchen", "Location"]];
export function AurionXSceneIndex() {
  const [ent, setEnt] = useState<string | null>("hero");
  const target = ENTITIES.find(([w]) => w === ent)?.[1];
  return <Ax n="22" title="Scene Index Anatomy" label="AurionX scene index anatomy — interactive rebuild of AurionX_22">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.6fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Natural-language request — click an entity</p>
        <p style={{ fontSize: 20, lineHeight: 1.5, margin: 0 }}>the scene where the {ENTITIES.map(([w]) => <button key={w} type="button" onClick={() => setEnt(w)} aria-pressed={ent === w} style={{ background: "none", border: "none", font: "inherit", cursor: "pointer", color: ent === w ? "#00E5FF" : "#8f9bff", textDecoration: ent === w ? "underline" : "none", padding: 0 }}>{w} </button>)}</p>
        <p style={{ color: "#c9c9ce" }} aria-live="polite">{ent ? `“${ent}” maps to the record field: ${target}.` : ""}</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Scene record</p>
        <table className="tks-table"><tbody>{RECORD.map(([k, v, link]) => <tr key={k} style={target === k ? { background: "#1d2432" } : undefined}><td>{k}</td><td>{v}</td></tr>)}</tbody></table></div>
    </div>
  </Ax>;
}

/* ---------------- File 23 (printed 24) — Error and Clarification States ---------------- */
const ERROR_STATES = [
  { n: 1, name: "Multiple Matches", title: "I found two possible scenes.", sub: "Which one did you mean?", actions: ["Select a scene", "Say “first” or “final”", "Refine request", "Cancel"] },
  { n: 2, name: "Clarification Needed", title: "Did you mean the first confrontation or the final one?", sub: "You can say “first” or “final”.", actions: ["Say “first”", "Say “final”", "Choose on screen", "Cancel"] },
  { n: 3, name: "Source Limitation", title: "This title does not expose scene-level playback.", sub: "You can continue from the current time or switch to a supported source. · AURION RISING · Episode 5 · 33:12 remaining", actions: ["Return to playback — Continue watching", "Switch source — Find supported titles", "Cancel"] },
  { n: 4, name: "No Match", title: "I could not identify the requested moment.", sub: "Try rephrasing with more detail, or choose a different moment.", actions: ["Refine your request — Try more detail", "Browse moments — Explore key scenes", "Cancel"] },
];
export function AurionXErrorStates() {
  const [st, setSt] = useState(0);
  const [pick, setPick] = useState<"first" | "final" | null>("first");
  const cur = ERROR_STATES[st];
  return <Ax n="24" title="Error and Clarification States" sub="Clear feedback. Helpful next steps. · Voice or remote. You're in control." label="AurionX error and clarification states — interactive rebuild of AurionX_23 (printed 24)">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>{ERROR_STATES.map((x, i) => <button key={x.n} type="button" className={`tks-card${i === st ? " is-on" : ""}`} aria-pressed={i === st} onClick={() => setSt(i)}><span style={{ color: "#8f9bff" }}>{x.n} · {x.name}</span><p style={{ fontWeight: 700, fontSize: 14, margin: "6px 0 3px" }}>{x.title}</p><p style={{ color: "#c9c9ce", margin: 0 }}>{x.sub}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">
      {(st === 0 || st === 1) && <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 8 }}>
        <button type="button" className="tks-card" aria-pressed={pick === "first"} onClick={() => setPick("first")} style={pick === "first" ? { borderColor: "#2979FF", boxShadow: "0 0 0 1px #2979FF" } : undefined}><b>First Confrontation</b><br />Episode 4 · 18:47 · Confidence <span style={{ color: ACC }}>92%</span>{pick === "first" ? " ✓" : ""}</button>
        <button type="button" className="tks-card" aria-pressed={pick === "final"} onClick={() => setPick("final")} style={pick === "final" ? { borderColor: "#7B61FF", boxShadow: "0 0 0 1px #7B61FF" } : undefined}><b>Final Confrontation</b><br />Episode 8 · 41:02 · Confidence <span style={{ color: ACC }}>87%</span>{pick === "final" ? " ✓" : ""}</button>
      </div>}
      <p className="tks-kicker" style={{ margin: "0 0 4px" }}>You can:</p>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{cur.actions.map((a) => <span key={a} className="tks-chip">{a}</span>)}</div>
      {(st === 0 || st === 1) && pick && <p style={{ margin: "8px 0 0" }}>Selected: <b>{pick === "first" ? "First Confrontation — Episode 4 · 18:47" : "Final Confrontation — Episode 8 · 41:02"}</b></p>}
    </div>
  </Ax>;
}

/* ---------------- File 24 (printed 23) — Scene Recall Technical Pipeline ---------------- */
const PIPELINE = [
  ["Video ingestion", "Input video — AurionX_S01E04_1080p.mov · 01:02:17 · 2.1 GB"],
  ["Shot segmentation", "Shots at 00:00:00 · 00:00:02 · 00:00:05 · … · 01:02:15 — Shot boundaries detected"],
  ["Transcript extraction", "00:00:02 ARIA “We're approaching the relay station.” · 00:00:05 KIAN “Systems look stable.” · 00:00:07 ARIA “Until they're not.” · 00:00:10 KIAN “Copy that.” — Speech recognized and transcribed"],
  ["Scene metadata", "Scene ID SCN_000245 · Start 00:18:24:07 · End 00:20:11:03 · Duration 00:01:46:20 · Location Relay Station · Characters Aria, Kian · Summary: Aria and Kian discuss the instability of the relay station. · Keywords: relay station, instability, approach, systems"],
  ["Semantic embeddings", "SCN_000245 – SCN_000249 encoded as semantic vectors — Scenes converted to semantic vectors"],
  ["Vector search", "High-dimensional vector index — queried by the natural-language request: “Find the scene where Aria and Kian discuss the instability of the relay station.”"],
  ["Reranking", "Ranked results — 00:18:24:07 Best match · 00:42:11:12 2nd best · 00:07:33:21 3rd best · 00:55:09:18 4th best — Results reranked by relevance"],
  ["Timecode seek", "Playback result — 00:18:24:07 · Scene start — Precise timecode seek and playback"],
];
export function AurionXTechnicalPipeline() {
  const [s, setS] = useState(3);
  return <Ax n="23" title="Scene Recall Technical Pipeline" sub="Proposed pipeline — replace with verified implementation stages (as printed)." label="AurionX scene recall technical pipeline — interactive rebuild of AurionX_24 (printed 23)">
    <div className="tks-flow" role="group">{PIPELINE.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{i + 1} {t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite">{PIPELINE[s][1]}</div>
    <p style={{ color: "#c9c9ce", margin: "10px 0 0" }}>Stores: Structured metadata store — scene and transcript metadata · Vector index store — semantic vectors for all scenes.</p>
  </Ax>;
}

/* ---------------- 25 — Five-Minute Cut Scenario ---------------- */
const CUT_SEGMENTS = [["A World in Balance", "00:45"], ["The Jump", "01:05"], ["Into the Unknown", "01:10"], ["The Choice", "01:00"], ["What's at Stake", "01:00"]];
export function AurionXCutScenario() {
  const [watch, setWatch] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [seg, setSeg] = useState(0);
  return <Ax n="25" title="Five-Minute Cut Scenario" sub="“Two hours is a big commitment.” · “Will I like it?” — A trailer sells the movie. A highlight cut helps the viewer decide." label="AurionX five-minute cut scenario — interactive rebuild of AurionX_25">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.3fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Movie page as printed</p>
        <p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>ECLIPSE HORIZON</p>
        <p style={{ color: "#c9c9ce", margin: "3px 0" }}>Sci-Fi · Adventure · Drama · PG-13 · 2h 04m</p>
        <p style={{ margin: "5px 0" }}>When a routine jump goes wrong, a crew finds themselves on the edge of the unknown — and a choice that could reset everything.</p>
        <p style={{ display: "flex", gap: 5, margin: "8px 0 0" }}><span className="tks-btn">▶ Play</span><button type="button" className="tks-btn tks-btn--ghost" aria-pressed={watch} onClick={() => setWatch((v) => !v)}>{watch ? "✓ Watchlisted" : "+ Watchlist"}</button></p>
        <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>You might also like</p><p style={{ margin: 0 }}>Beyond Orbit · Errant Signal · The Long Awake · Silent Frontier</p></div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>AurionX · Your Five-Minute Cut</p>
        <p style={{ margin: 0 }}>A personal highlight reel crafted from key moments and themes to help you decide.</p>
        <p style={{ margin: "8px 0" }}><button type="button" className="tks-btn" aria-pressed={playing} onClick={() => setPlaying((v) => !v)}>{playing ? "⏸ Playing cut…" : "▶ Play Cut"}</button> <span className="tks-chip">🛡 Spoilers are protected</span></p>
        <div className="tks-flow" role="group" aria-label="Cut segments">{CUT_SEGMENTS.map(([t, d], i) => <button key={t} type="button" className="tks-node" aria-pressed={i === seg} onClick={() => setSeg(i)}><b>{String(i + 1).padStart(2, "0")} {t}</b><br />{d} 🛡</button>)}</div>
        <p style={{ margin: "8px 0 0" }} aria-live="polite">Total 05:00 — selected segment: {CUT_SEGMENTS[seg][0]} ({CUT_SEGMENTS[seg][1]}). Spoiler protection is on: story-critical endings and key twists are hidden.</p></div>
    </div>
  </Ax>;
}

/* ---------------- 27 — Highlight Selection Storyboard ---------------- */
const SIGNALS = ["Narrative importance", "Dialogue relevance", "Audio intensity", "Character introduction", "Visual novelty", "Emotional peaks"];
const SOURCE_SCENES = ["00:00", "02:15", "04:30", "06:45", "09:10", "11:40", "14:05", "16:20", "18:35", "20:50", "23:15", "25:30", "27:45", "30:05", "32:20", "34:40", "39:15", "41:30", "43:30"];
const PRINTED_SELECTED = ["00:00", "04:30", "09:10", "14:05", "16:20", "20:50", "25:30", "32:20", "34:40", "39:15", "41:30"];
export function AurionXStoryboard() {
  const [selected, setSelected] = useState<string[]>(PRINTED_SELECTED);
  const toggle = (t: string) => setSelected((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t].sort((a, b) => SOURCE_SCENES.indexOf(a) - SOURCE_SCENES.indexOf(b))));
  return <Ax n="27" title="Highlight Selection Storyboard" sub="From one complete film, the system evaluates every scene using multiple signals. Positive signals lift scenes; constraints remove or suppress others. The result is a focused preview." label="AurionX highlight storyboard — interactive rebuild of AurionX_27">
    <p className="tks-kicker">1 · Input — the full movie is split into scenes. Click a scene to select / suppress it.</p>
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }} role="group" aria-label="Source scenes">{SOURCE_SCENES.map((t, i) => <button key={t} type="button" className="tks-chip" aria-pressed={selected.includes(t)} onClick={() => toggle(t)}>{String(i + 1).padStart(2, "0")} · {t} {selected.includes(t) ? "↓" : "✕"}</button>)}</div>
    <p className="tks-kicker" style={{ marginTop: 10 }}>2 · AI evaluation — each scene is evaluated across multiple signals</p>
    <p style={{ margin: 0 }}>{SIGNALS.map((s) => <span key={s} className="tks-tag">{s} ↑</span>)} <span className="tks-tag" style={{ color: "#b18cff" }}>Redundancy reduction ↓</span> <span className="tks-tag" style={{ color: "#b18cff" }}>Spoiler penalty ↓</span></p>
    <p className="tks-kicker" style={{ marginTop: 10 }}>3 · Selection — remaining scenes are chosen in story order · 4 · Preview output</p>
    <div className="tks-card" aria-live="polite"><b>Preview (output)</b> — selected highlights in story order: {selected.length ? selected.join(" · ") : "none"}<br /><span style={{ color: "#c9c9ce" }}>Preview runtime (example) 02:18 as printed for the original selection of {PRINTED_SELECTED.length} scenes. How to read: ↑ positive signal increases selection likelihood · ↓ negative signal decreases it · ↓ scene selected · ✕ scene removed or suppressed.</span></div>
  </Ax>;
}

/* ---------------- File 28 (printed 29) — Generated Output Comparison ---------------- */
const CHAPTERS = ["Prologue", "Inciting Incident", "Rising Stakes", "Midpoint", "Complications", "Crisis", "Resolution"];
const OPERATIONS = [
  ["Selected scenes", "High-value moments that move the story forward."],
  ["Removed repetition", "Eliminated redundant scenes and reiterated dialogue."],
  ["Narrative ordering", "Rearranged for causality and emotional flow."],
  ["Transition points", "Added concise transitions for coherence."],
];
export function AurionXOutputComparison() {
  const [op, setOp] = useState(0);
  const [ch, setCh] = useState(3);
  return <Ax n="29" title="Generated Output Comparison" sub="Long-form source distilled into a focused, coherent cut." label="AurionX generated output comparison — interactive rebuild of AurionX_28 (printed 29)">
    <p className="tks-kicker">Original — 118 minutes · Full length with multiple repetitions and subplots · 0:00 → 118:00 · Many scenes · Multiple repetitions · Parallel subplots</p>
    <Chips items={CHAPTERS.map((c, i) => `Chapter ${i + 1} · ${c}`)} value={ch} onPick={setCh} />
    <p className="tks-kicker" style={{ marginTop: 10 }}>Operations</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{OPERATIONS.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === op ? " is-on" : ""}`} aria-pressed={i === op} onClick={() => setOp(i)}><b>{t}</b><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>{b}</p></button>)}</div>
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite"><b>Generated cut — 5 minutes</b> · AI-selected scenes, reordered for clarity and narrative impact · 0:00 → 5:00 · Distilled · Coherent · Impactful
      <p style={{ margin: "6px 0 0", color: "#c9c9ce" }}>Measured render duration: <span style={{ color: ACC }}>add verified result</span> · Playable demo: <span style={{ color: "#b18cff" }}>add verified link or QR</span> — placeholders as printed; nothing was supplied.</p></div>
  </Ax>;
}

/* ---------------- File 29 (printed 30) — Progress and Control States ---------------- */
const PROGRESS = [
  ["Request accepted", "Your request has been received and queued."],
  ["Analyzing scenes", "AurionX is understanding your film's structure and key moments."],
  ["Selecting highlights", "We're identifying the strongest scenes to include in your preview."],
  ["Rendering preview", "Crafting your preview with color, sound, and motion."],
  ["Preview ready", "Your preview is ready to watch."],
];
export function AurionXProgressStates() {
  const [s, setS] = useState(1);
  const [bg, setBg] = useState(false);
  const advance = () => setS((v) => Math.min(PROGRESS.length - 1, v + 1));
  return <Ax n="30" title="Progress and Control States" sub="Every long-running action is transparent, reversible, and under your control. Design principles: Always clear — see what's happening and why · Always reversible — you're never locked in · Always in control — pause, cancel, or continue on your terms." label="AurionX progress and control states — interactive rebuild of AurionX_29 (printed 30)">
    <div className="tks-card"><p style={{ marginTop: 0, display: "flex", justifyContent: "space-between" }}><span><b>Processing</b> · AurionX is preparing your preview.</span><button type="button" className="tks-btn tks-btn--ghost" onClick={() => { setS(0); setBg(false); }}>Cancel</button></p>
      <div className="tks-grid" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>{PROGRESS.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === s ? " is-on" : ""}`} aria-pressed={i === s} onClick={() => setS(i)} style={{ textAlign: "center" }}><span style={{ fontSize: 22, color: i <= s ? "#7B61FF" : "#55565a" }}>{i === 0 ? "✓" : i === 4 ? "▶" : "◯"}</span><p style={{ fontWeight: 700, margin: "5px 0 3px" }}>{String(i + 1).padStart(2, "0")} {t}</p><p style={{ color: "#c9c9ce", margin: 0, fontSize: 11 }}>{b}</p></button>)}</div>
      <p style={{ margin: "10px 0 0", display: "flex", gap: 5, flexWrap: "wrap" }} aria-live="polite">
        {s < 4 ? <><button type="button" className="tks-btn" onClick={advance}>Advance state →</button><button type="button" className="tks-btn tks-btn--ghost" aria-pressed={bg} onClick={() => setBg((v) => !v)}>Continue in background</button><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setS(0)}>Retry</button>{bg && <span>Running in background — you can keep watching.</span>}</>
          : <button type="button" className="tks-btn" style={{ background: "linear-gradient(90deg,#00E5FF,#7B61FF)", border: "none", color: "#fff" }}>▶ Play preview</button>}
      </p></div>
  </Ax>;
}

/* ---------------- File 30 (printed 31) — Global Voice Before and After ---------------- */
export function AurionXVoiceBeforeAfter() {
  const [pos, setPos] = useState(50);
  return <Ax n="31" title="Global Voice Before and After" sub="Same scene. Same timecode. Different experience. · Target language: English" label="AurionX global voice before and after — interactive rebuild of AurionX_30 (printed 31)">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="tks-card"><p style={{ marginTop: 0 }}><b>Original</b> <span style={{ color: "#c9c9ce" }}>Indonesian speech</span></p>
        <p style={{ background: "#000", padding: "26px 10px", textAlign: "center", margin: 0 }}>(Scene still — represented structurally.)<br /><span style={{ background: "#111", padding: "2px 8px" }}>Kamu pergi tanpa pamit?</span></p>
        <p style={{ textAlign: "center", fontFamily: '"IBM Plex Mono",monospace' }}>00:12:47:09</p>
        <p style={{ margin: 0 }}>Original transcript (Indonesian)<br />Kamu pergi tanpa pamit?</p></div>
      <div className="tks-card"><p style={{ marginTop: 0 }}><b>Localized</b> <span style={{ color: "#c9c9ce" }}>English (dubbed)</span></p>
        <p style={{ background: "#000", padding: "26px 10px", textAlign: "center", margin: 0 }}>(Same scene still — represented structurally.)<br /><span style={{ background: "#111", padding: "2px 8px" }}>You left without saying goodbye?</span></p>
        <p style={{ textAlign: "center", fontFamily: '"IBM Plex Mono",monospace' }}>00:12:47:09</p>
        <p style={{ margin: 0 }}>Translated transcript (English)<br />You left without saying goodbye?</p>
        <p style={{ margin: "8px 0 0" }}>Lip-sync status<br /><b style={{ color: "#8f9bff", fontSize: 14 }}>Preview quality</b><br /><span style={{ color: "#c9c9ce" }}>Lip-sync optimized for timing and naturalness. Not a final representation of performance.</span></p></div>
    </div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>Waveform comparison — ● Original (Indonesian) · ● Localized (English)</p>
      <label>Playhead <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Waveform playhead" style={{ width: "60%" }} /> 00:12:47:09</label>
      <p style={{ margin: "6px 0 0", color: "#c9c9ce" }}>Identical timecode. Different language. Clear context. Supporting creators in reaching more audiences with clarity, empathy, and precision.</p></div>
  </Ax>;
}

/* ---------------- File 31 (printed 32) — Language and Voice Setup ---------------- */
const SETUP_LANGS = ["Bahasa Indonesia", "English", "日本語", "한국어", "中文 (简体)"];
const SETUP_MODES = [["Subtitles", "Read the dialogue in your language."], ["Dubbing", "Hear the dialogue in your language."], ["Both", "Subtitles and dubbing."]];
const SETUP_VOICES = [["Speaker-preserving voice", "AI-generated voices that reflect the original speakers. · Available only with permission"], ["Standard localized voice", "Natural-sounding voices in the target language."]];
const SETUP_SHORTCUTS = [
  ["Navigate", "Select", "Back", "Play / Pause", "More options"],
  ["“Change language”", "“Turn on subtitles”", "“Choose dubbing”", "“Use speaker-preserving voice”"],
  ["“Speaker-preserving voice”", "“Standard localized voice”", "“What's the difference?”", "“Learn more about permissions”"],
  ["“Review permissions”", "“What will be processed?”", "“Start processing”", "“Cancel”"],
];
export function AurionXLanguageSetup() {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState(0);
  const [mode, setMode] = useState(0);
  const [voice, setVoice] = useState(0);
  const [done, setDone] = useState(false);
  return <Ax n="32" title="Language and Voice Setup" sub="Choose how your story is understood and heard. You stay in control of language, voice, and permissions." label="AurionX language and voice setup — interactive rebuild of AurionX_31 (printed 32)">
    <Chips items={["1 Select target language", "2 Choose delivery mode", "3 Choose voice experience", "4 Confirm and review"]} value={step} onPick={(i) => { setStep(i); setDone(false); }} />
    <div className="tks-card" style={{ marginTop: 10 }} aria-live="polite">
      {step === 0 && <><p style={{ marginTop: 0 }}><b>Select target language</b> · Choose the language you want to watch in. · 42:18</p>{SETUP_LANGS.map((l, i) => <p key={l} style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={lang === i} onClick={() => setLang(i)}>{l}{lang === i ? " ✓" : ""}</button></p>)}</>}
      {step === 1 && <><p style={{ marginTop: 0 }}><b>Choose how you want this in your language</b> · You can change this anytime.</p>{SETUP_MODES.map(([t, b], i) => <p key={t} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={mode === i} onClick={() => setMode(i)}><b>{t}</b>&nbsp;— {b}</button></p>)}</>}
      {step === 2 && <><p style={{ marginTop: 0 }}><b>Choose voice experience</b> · How the voices should sound.</p>{SETUP_VOICES.map(([t, b], i) => <p key={t} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={voice === i} onClick={() => setVoice(i)}><b>{t}</b>&nbsp;— {b}</button></p>)}</>}
      {step === 3 && <><p style={{ marginTop: 0 }}><b>Review and confirm</b> · Almost there. Please review before we process.</p>
        <ul style={{ margin: "5px 0" }}><li>This will include AI-generated audio — New voices will be created for this content.</li><li>We respect permissions — Voices are used only with permission.</li><li>You're in control — You can review or remove permissions anytime.</li></ul>
        <p style={{ display: "flex", gap: 5 }}><button type="button" className="tks-btn" style={{ background: "linear-gradient(90deg,#2979FF,#7B61FF)", border: "none", color: "#fff" }} onClick={() => setDone(true)}>Process</button><span className="tks-chip">Review permissions</span><span className="tks-chip">Cancel</span></p>
        {done && <p>Processing with: {SETUP_LANGS[lang]} · {SETUP_MODES[mode][0]} · {SETUP_VOICES[voice][0]}.</p>}</>}
      <p className="tks-kicker" style={{ margin: "10px 0 3px" }}>{step === 0 ? "Remote focus" : "Voice shortcuts"}</p>
      <p style={{ margin: 0 }}>{SETUP_SHORTCUTS[step].join(" · ")}</p>
      {step < 3 && <p style={{ margin: "10px 0 0" }}><button type="button" className="tks-btn" onClick={() => setStep((s) => s + 1)}>Continue →</button></p>}
    </div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Availability may vary by region and title. Voice options depend on permissions from rights holders.</p>
  </Ax>;
}

/* ---------------- File 32 (printed 28) — Five-Minute Cut Technical Pipeline ---------------- */
const CUT_PIPELINE = ["Media ingestion", "Scene segmentation", "Multimodal feature extraction", "Highlight scoring", "Spoiler constraints", "Duration optimization", "Sequence assembly", "Audio normalization", "Video render"];
export function AurionXCutPipeline() {
  const [s, setS] = useState(5);
  return <Ax n="28" title="Five-Minute Cut Technical Pipeline" sub="Proposed architecture — verify against implementation (as printed)." label="AurionX five-minute cut technical pipeline — interactive rebuild of AurionX_32 (printed 28)">
    <div className="tks-flow" role="group">{CUT_PIPELINE.map((t, i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === s} onClick={() => setS(i)}><b>{i + 1} {t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite">
      {s === 2 && "Inputs merge here: Visual signal · Audio signal · Transcript signal · Metadata signal → multimodal feature matrix."}
      {s === 3 && "Highlight scoring — per-scene signal bars are scored and stacked for ranking."}
      {s === 4 && "Spoiler constraints — scenes pass (✓) or are suppressed (✕) against spoiler rules before assembly."}
      {s === 5 && "Duration optimization — Target duration 05:00, shown as a progress ring on the printed slide."}
      {s === 6 && "Sequence assembly — 01 · 00:32 · 02 · 00:41 · 03 · 00:28 · … · n · 00:37 — segments ordered into the cut."}
      {s === 7 && "Audio normalization — two waveform tracks are levelled before render."}
      {(s === 0 || s === 1 || s === 8) && `${CUT_PIPELINE[s]} — stage ${s + 1} of 9 in the printed pipeline.`}
      <p style={{ margin: "8px 0 0" }}>AurionX assembles and renders the selected segments through a programmable media pipeline.</p></div>
  </Ax>;
}

/* ---------------- 33 — Global Voice Technical Pipeline ---------------- */
const GV_GROUPS: Array<[string, string[]]> = [
  ["SOURCE", ["Audio separation"]],
  ["UNDERSTANDING", ["Speech recognition", "Speaker diarization"]],
  ["LOCALIZATION", ["Translation", "Target-language adaptation", "Speech synthesis"]],
  ["DELIVERY", ["Duration alignment", "Audio mixing", "Optional lip synchronization", "Subtitle output"]],
];
const GV_TRACKS = ["Original audio", "Background audio", "Localized speech", "Remixed output", "Subtitles"];
export function AurionXVoicePipeline() {
  const [stage, setStage] = useState(0);
  const flat = GV_GROUPS.flatMap(([g, items]) => (items as string[]).map((t) => ({ g, t })));
  return <Ax n="33" title="Global Voice Technical Pipeline" sub="Proposed pipeline — implementation status requires source verification. Status legend: VERIFY · SIMULATED · FUTURE (as printed, no stage carries a filled status)." label="AurionX global voice technical pipeline — interactive rebuild of AurionX_33">
    <div className="tks-flow" role="group">{flat.map((x, i) => <span key={x.t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">→</span>}<button type="button" className="tks-node" aria-pressed={i === stage} onClick={() => setStage(i)}><span className="tks-kicker">{x.g}</span><br /><b>{i + 1} {x.t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{flat[stage].t}</b> — group {flat[stage].g}, stage {stage + 1} of 10.
      <p style={{ margin: "6px 0 0" }}>Signal tracks under the pipeline, as printed: {GV_TRACKS.join(" · ")}. Original audio feeds separation and subtitle output; background audio is preserved into mixing; localized speech is synthesized in LOCALIZATION and remixed for delivery.</p></div>
  </Ax>;
}

/* ---------------- 34 — Quality, Ethics and Failure States ---------------- */
const FAILURE_STATES = [
  ["Low translation confidence", "Ask for confirmation", "Keep playback available"],
  ["Unsupported language", "Offer subtitles", "“Let's continue with subtitles.”"],
  ["Overlapping speakers", "Separate or simplify", "Separated tracks — Alex · Maya"],
  ["Music and speech collision", "Preserve original mix", "Original audio preserved"],
  ["Voice-replication permission", "Consent required", "Use standard localized voice"],
  ["Protected speaker", "Use standard localized voice", "Standard localized voice output"],
  ["Lip-sync below threshold", "Disable lip sync", "Lip sync disabled"],
  ["Fallback to subtitles", "Keep playback available", "“Let's continue with subtitles.”"],
  ["AI-generated audio", "Persistent disclosure", "“Audio translated with AI” — shown persistently over playback"],
];
export function AurionXFailureStates() {
  const [f, setF] = useState(0);
  const cur = FAILURE_STATES[f];
  return <Ax n="34" title="Quality, Ethics and Failure States" sub="Risk control: Detect → Explain → Fall back safely." label="AurionX quality ethics failure states — interactive rebuild of AurionX_34">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{FAILURE_STATES.map(([t], i) => <button key={t} type="button" className={`tks-card${i === f ? " is-on" : ""}`} aria-pressed={i === f} onClick={() => setF(i)}><span style={{ color: "#8f9bff" }}>{i + 1}</span> <b>{t}</b></button>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{cur[0]}</b> — response: {cur[1]} → outcome: {cur[2]}.</div>
    <div className="tks-card" style={{ marginTop: 10, textAlign: "center" }}><b style={{ color: ACC }}>⟳ Reversible</b> · <b style={{ color: "#8f9bff" }}>👤 Permission-aware</b> · <b style={{ color: "#b18cff" }}>👁 Transparent</b>
      <p style={{ color: "#c9c9ce", margin: "6px 0 0" }}>✦ Audio translated with AI — the persistent disclosure printed across the bottom of the slide.</p></div>
  </Ax>;
}

/* ---------------- 35 — Complete System Architecture ---------------- */
const SYS_LAYERS: Array<[string, string[]]> = [
  ["CLIENT", ["Television interface", "Playback controller", "Voice capture", "Result renderer"]],
  ["APPLICATION SERVICES", ["Request orchestrator", "Content metadata service", "Job-status service", "Permissions service"]],
  ["AI AND MEDIA SERVICES", ["Speech recognition", "Scene retrieval", "Highlight engine", "Translation", "Speech synthesis", "Lip synchronization", "Media rendering"]],
  ["INFRASTRUCTURE", ["Metadata database", "Vector index", "Object storage", "Background task queue", "Logging and evaluation"]],
];
export function AurionXSystemArchitecture() {
  const [l, setL] = useState(2);
  return <Ax n="35" title="Complete System Architecture" sub="Engineering · Proposed architecture — technology stack requires repository verification · STACK: VERIFY (as printed)." label="AurionX complete system architecture — interactive rebuild of AurionX_35">
    {SYS_LAYERS.map(([name, mods], i) => <button key={name} type="button" className="tks-card" aria-pressed={i === l} onClick={() => setL(i)} style={{ display: "block", width: "100%", marginBottom: 6, borderColor: i === l ? "#7B61FF" : undefined, boxShadow: i === l ? "0 0 0 1px #7B61FF" : undefined }}>
      <b style={{ color: ACC }}>{name}</b> — {(mods as string[]).join(" · ")}</button>)}
    <div className="tks-detail" aria-live="polite">The AI AND MEDIA SERVICES layer feeds the three product features, as printed at the right of the diagram: <b>Scene Recall · Five-Minute Cut · Global Voice</b>.
      <p style={{ margin: "6px 0 0", color: "#c9c9ce" }}>Legend: → Request · ⇢ Media · ⇢ Metadata · ⇢ Permission. Layer selected: {SYS_LAYERS[l][0]} ({(SYS_LAYERS[l][1] as string[]).length} modules).</p></div>
  </Ax>;
}

/* ---------------- 36 — Implementation Evidence ---------------- */
const EVIDENCE = [
  ["Repository structure", "Proves system boundaries"], ["Selected code", "Proves product logic"], ["Component tree", "Proves interface architecture"],
  ["API request and response", "Proves service contract"], ["Example JSON", "Proves data model"], ["Commit history", "Proves iteration"],
  ["Deployed prototype", "Proves runnable state"], ["Real output files", "Proves generated media"], ["Local or cloud setup", "Proves operating environment"],
];
export function AurionXEvidence() {
  const [sel, setSel] = useState(6);
  return <Ax n="36" title="Implementation Evidence" sub="Engineering · Evidence capture required — no repository or deployment evidence was supplied. ⚠ Insert verified capture." label="AurionX implementation evidence — interactive rebuild of AurionX_36">
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{EVIDENCE.map(([t, proves], i) => <button key={t} type="button" className={`tks-card${i === sel ? " is-on" : ""}`} aria-pressed={i === sel} onClick={() => setSel(i)}><span style={{ color: "#8f9bff" }}>{String(i + 1).padStart(2, "0")}</span> <b>{t}</b><p style={{ border: "1px dashed #3a3b3f", padding: 8, textAlign: "center", color: "#9a9aa0", margin: "8px 0 4px" }}>INSERT VERIFIED CAPTURE</p><p style={{ color: "#c9c9ce", margin: 0 }}>{proves}</p></button>)}</div>
    <div className="tks-detail" aria-live="polite">Flow as printed: <b>Product decision</b> → evidence slots 01–06 → <b>Implementation</b> (07 Deployed prototype) → slots 08–09 → <b>Output</b>. Selected: {EVIDENCE[sel][0]} — {EVIDENCE[sel][1].toLowerCase()}.
      <p style={{ margin: "6px 0 0" }}>⚠ Do not publish placeholders as final evidence.</p></div>
  </Ax>;
}

/* ---------------- 37 — Testing and Evaluation ---------------- */
const TESTS: Array<[string, string[]]> = [
  ["Scene Recall", ["Scene retrieval precision", "Timecode accuracy"]],
  ["Five-Minute Cut", ["Processing latency", "Highlight coherence"]],
  ["Global Voice", ["Subtitle timing", "Translation quality", "Voice similarity"]],
  ["Shared interaction", ["Remote-control usability"]],
];
const TEST_LOOP = [["TEST", "Execute the test case under defined conditions."], ["OBSERVE", "Capture behavior and any deviations."], ["RECORD", "Document results and observations objectively."], ["RESOLVE", "Investigate issues and determine corrective action."]];
export function AurionXTesting() {
  const [loop, setLoop] = useState(0);
  return <Ax n="37" title="Testing and Evaluation" sub="Engineering · Evaluation plan — results and measurements were not supplied." label="AurionX testing and evaluation — interactive rebuild of AurionX_37">
    <div style={{ overflowX: "auto" }}><table className="tks-table"><thead><tr><th>Feature</th><th>Test case</th><th>Input</th><th>Expected</th><th>Actual</th><th>Latency</th><th>Confidence</th><th>Failure mode</th><th>Resolution</th></tr></thead>
      <tbody>{TESTS.flatMap(([feature, cases]) => (cases as string[]).map((c) => <tr key={c}><td style={{ color: ACC }}>{feature}</td><td>{c}</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td><td style={{ color: "#e8a33d" }}>MEASUREMENT REQUIRED</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td></tr>))}</tbody></table></div>
    <div className="tks-flow" style={{ marginTop: 10 }} role="group" aria-label="Evaluation loop">{TEST_LOOP.map(([t], i) => <span key={t} style={{ display: "contents" }}>{i > 0 && <span className="tks-arrow">↓</span>}<button type="button" className="tks-node" aria-pressed={i === loop} onClick={() => setLoop(i)}><b>{t}</b></button></span>)}</div>
    <div className="tks-detail" aria-live="polite"><b>{TEST_LOOP[loop][0]}</b> — {TEST_LOOP[loop][1]}
      <p style={{ margin: "6px 0 0", color: "#c9c9ce" }}>Legend: DEFINED — test case is defined and ready to execute · NOT SUPPLIED — information or result was not supplied · MEASUREMENT REQUIRED — measurement or observation required to complete evaluation. 🛡 Publish only measured results.</p></div>
  </Ax>;
}

/* ---------------- 38 — Design Iteration ---------------- */
const ITERATION: Array<[string, string, string]> = [
  ["Navigation density", "Dense sidebar with many options competing for attention", "Quiet playback overlay keeps focus on the story"],
  ["Focus hierarchy", "Flat lists with no clear focus or selection state", "Large, clear focus ring shows remote selection"],
  ["Naming", "Fragmented, technical feature names", "Plain, familiar feature naming"],
  ["Voice feedback", "No voice state indicator or response confirmation", "Listening state and clear spoken response"],
  ["Progress visibility", "No visibility into search progress; feels opaque", "Live transcription and progress with completion %"],
  ["Result ranking", "Unranked results in a long, flat list", "Ranked top 3 with thumbnails and context"],
  ["Error recovery", "No clear way to cancel or go back", "Cancel search or return to playback instantly"],
  ["Subtitle legibility", "Small, low-contrast subtitles", "Larger, high-contrast subtitles for easy reading"],
  ["Visual consistency", "Inconsistent surfaces, borders, and text treatments", "One consistent visual language across all elements"],
];
export function AurionXIteration() {
  const [mode, setMode] = useState<"v1" | "v2">("v2");
  const [dim, setDim] = useState(0);
  return <Ax n="38" title="Design Iteration" sub="From destination screens → to complete state transitions." label="AurionX design iteration — interactive rebuild of AurionX_38">
    <div style={{ display: "flex", gap: 5, marginBottom: 10 }} role="group" aria-label="Version toggle">
      <button type="button" className="tks-chip" aria-pressed={mode === "v1"} onClick={() => setMode("v1")}>Version 1 — Reconstructed</button>
      <button type="button" className="tks-chip" aria-pressed={mode === "v2"} onClick={() => setMode("v2")}>Version 2 — AurionX System</button>
    </div>
    {mode === "v1" ? <div className="tks-card" aria-live="polite"><b>Search &amp; Find</b> — “Search for scenes · Describe a moment...” Categories: Action · Dialogue · Objects · Locations · People · Themes · Emotions. Tools: Scene Recall · Five-Minute Cut · Global Voice · Shared Interaction. Settings: Subtitles · Audio &amp; Language.
      <p style={{ color: "#c9c9ce" }}>Results (7 items): 00:15:22 Lighthouse wide shot · 00:22:10 Waves crash on rocks · 00:42:18 Character on cliff · 01:03:55 Storm clouds build · 01:17:33 Flashback by the sea · 01:28:09 Conversation at night · 01:35:41 Boat in the distance. Subtitle: “The wind never stops out here.” · 00:42:18. Source mockup capture was not supplied.</p></div>
    : <div className="tks-card" aria-live="polite"><b>◯ Listening</b> — “I found three possible scenes”: 1 · 00:42:18 Character on cliff [Selected scene] · 2 · 00:22:10 Waves crash on rocks · 3 · 01:03:55 Storm clouds build. ↩ Back to playback · Cancel. Scene search — Analyzing… 65%. Subtitle: “The wind never stops out here.” · 00:42:18.</div>}
    <table className="tks-table" style={{ marginTop: 10 }}><thead><tr><th>Version 1</th><th>Dimension</th><th>Version 2</th></tr></thead>
      <tbody>{ITERATION.map(([dimName, v1, v2], i) => <tr key={dimName} onClick={() => setDim(i)} style={{ cursor: "pointer", background: i === dim ? "#1d1e20" : undefined }}><td style={mode === "v1" ? { color: "#fff" } : { color: "#9a9aa0" }}>{v1}</td><td><b>{dimName}</b></td><td style={mode === "v2" ? { color: "#fff" } : { color: "#9a9aa0" }}>{v2}</td></tr>)}</tbody></table>
  </Ax>;
}

/* ---------------- 39 — Final Product Ecosystem ---------------- */
export function AurionXEcosystem() {
  const [spoiler, setSpoiler] = useState(true);
  const [aiAudio, setAiAudio] = useState(true);
  const [balance, setBalance] = useState(55);
  const [scene, setScene] = useState(0);
  const SCENES = [["00:42:18", "Character on cliff"], ["00:22:10", "Waves crash on rocks"], ["01:03:55", "Storm clouds build"]];
  return <Ax n="39" title="Final Product Ecosystem" sub="Outcome — AurionX: An AI-Native Viewing Layer for Global Entertainment." label="AurionX final product ecosystem — interactive rebuild of AurionX_39">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.6fr 1fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Scene Recall (panel)</p>
        {SCENES.map(([tc, t], i) => <p key={tc} style={{ margin: "5px 0" }}><button type="button" className="tks-chip" aria-pressed={scene === i} onClick={() => setScene(i)}>{i + 1} · {tc} {t}{scene === i ? " · Selected scene" : ""}</button></p>)}
        <p style={{ margin: "8px 0 0", display: "flex", gap: 5 }}><span className="tks-chip">↩ Back to playback</span><span className="tks-chip">Cancel</span></p>
        <p className="tks-kicker" style={{ margin: "12px 0 3px" }}>Companion — Home</p><p style={{ margin: 0, color: "#c9c9ce" }}>Continue Watching · Recommended For You · Recently Added (poster rows as printed).</p></div>
      <div className="tks-card" style={{ background: "linear-gradient(180deg,#131a26,#05070c)" }}><p style={{ marginTop: 0 }}>◯ <b style={{ color: ACC }}>Listening</b> <span style={{ float: "right" }}>00:42:18</span></p>
        <p style={{ color: "#c9c9ce" }}>“I found three possible scenes”</p>
        <p style={{ margin: 0 }}>{SCENES.map(([tc, t], i) => <span key={tc} style={{ display: "block", padding: "3px 0", color: i === scene ? "#fff" : "#9a9aa0" }}>{i + 1} · {tc} {t}</span>)}</p>
        <p style={{ textAlign: "center", background: "#111", padding: "3px 0" }}>The wind never stops out here.</p>
        <p className="tks-kicker">(Lighthouse film still — represented structurally.)</p></div>
      <div>
        <div className="tks-card"><p style={{ marginTop: 0, display: "flex", justifyContent: "space-between" }}><b>Five-Minute Cut</b><span>5 MIN</span></p>
          <label>Configuration — Balanced <input type="range" min={0} max={100} value={balance} onChange={(e) => setBalance(Number(e.target.value))} aria-label="Five-minute cut balance" style={{ width: "100%" }} /></label>
          <p style={{ margin: "6px 0" }}><button type="button" className="tks-chip" aria-pressed={spoiler} onClick={() => setSpoiler((v) => !v)}>Spoiler protection {spoiler ? "ON" : "OFF"}</button></p>
          <p className="tks-kicker">Generated timeline · 5:00</p><p style={{ margin: 0, display: "flex", gap: 5 }}><span className="tks-chip">Export cut</span></p></div>
        <div className="tks-card" style={{ marginTop: 10 }}><p style={{ marginTop: 0 }}>◯ <b style={{ color: ACC }}>Global Voice</b></p>
          <p style={{ color: "#c9c9ce", margin: "3px 0" }}>“I found three possible scenes” ∿∿</p>
          <p style={{ margin: "4px 0" }}>English ⌄ · Subtitles + dubbing ⌄</p>
          <p style={{ margin: "4px 0" }}><button type="button" className="tks-chip" aria-pressed={aiAudio} onClick={() => setAiAudio((v) => !v)}>AI-generated audio {aiAudio ? "ON" : "OFF"}</button></p>
          <p className="tks-kicker" style={{ margin: 0 }}>00:42:18 · Tablet companion as printed: “Intelligent. Immersive. Yours.” + Featured row.</p></div>
      </div>
    </div>
  </Ax>;
}

/* ---------------- 40 — Project Outcome ---------------- */
const OUTCOME_EVIDENCE = ["Competition placement", "Prototype completion", "Designed states", "Implemented modules", "Usability participants", "Measured performance", "Repository and deployment"];
export function AurionXOutcome() {
  const [f, setF] = useState(0);
  const FEATS = [["Scene Recall", "AI-native scene discovery and recall across global entertainment."], ["Five-Minute Cut", "AI-assisted highlight edits that distill stories into shareable moments."], ["Global Voice", "AI-generated dubbing and voice experiences for global audiences."]];
  return <Ax n="40" title="Project Outcome" label="AurionX project outcome — interactive rebuild of AurionX_40">
    <p className="tks-kicker">Verified from supplied project context</p>
    <p style={{ fontSize: 24, fontWeight: 600, margin: "4px 0 2px" }}>Independent 2024 competition concept</p>
    <p style={{ color: "#c9c9ce", margin: "0 0 10px" }}>Solo Product Designer and Engineer</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>{FEATS.map(([t, b], i) => <button key={t} type="button" className={`tks-card${i === f ? " is-on" : ""}`} aria-pressed={i === f} onClick={() => setF(i)}><b>{t}</b><p style={{ color: "#c9c9ce", margin: "4px 0 0" }}>{b}</p></button>)}</div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0 }}>End-to-end ownership</p>
      <p style={{ margin: 0 }}>◎ Product strategy · 👤 UX and interface design · ⬡ AI workflow design · ▤ Technical architecture · ⌁ Prototype planning</p>
      <p style={{ margin: "8px 0 0" }}><b style={{ color: ACC }}>INDEPENDENT CONCEPT</b> — Not released or commissioned as an official commercial product.</p></div>
    <div className="tks-card" style={{ marginTop: 10 }}><p className="tks-kicker" style={{ marginTop: 0, color: "#e8a33d" }}>Not supplied — add only with evidence</p>
      {OUTCOME_EVIDENCE.map((e) => <p key={e} style={{ display: "flex", justifyContent: "space-between", margin: "4px 0" }}><span>{e}</span><span style={{ color: "#e8a33d", fontFamily: '"IBM Plex Mono",monospace', fontSize: 10.5 }}>EVIDENCE REQUIRED</span></p>)}</div>
  </Ax>;
}

/* ---------------- 41 — Reflection and Next Release ---------------- */
const WORKED = ["Voice reduced large-screen navigation friction.", "The three features shared one underlying media-intelligence layer.", "Building the prototype exposed constraints that visual design alone did not reveal."];
const IMPROVE = ["Test with a larger and more diverse sample.", "Separate local and cloud-processing expectations.", "Strengthen rights and consent handling.", "Validate use on real television hardware.", "Improve low-confidence recovery.", "Reduce model latency."];
const ROADMAP = [["V1", "Scene Recall"], ["V1.5", "Five-Minute Cut"], ["V2", "Global Voice"], ["RESEARCH", "Live broadcasting and expression-aware localization"]];
export function AurionXReflection() {
  const [checked, setChecked] = useState<boolean[]>(IMPROVE.map(() => false));
  const [rm, setRm] = useState(0);
  return <Ax n="41" title="Reflection and Next Release" label="AurionX reflection and next release — interactive rebuild of AurionX_41">
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: ACC }}>What worked</p>
        {WORKED.map((w, i) => <p key={w} style={{ margin: "8px 0" }}><span style={{ color: ACC, fontSize: 18 }}>{String(i + 1).padStart(2, "0")}</span> {w}</p>)}</div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0, color: ACC }}>What I would improve — check off as addressed</p>
        {IMPROVE.map((w, i) => <p key={w} style={{ margin: "6px 0" }}><button type="button" className="tks-chip" aria-pressed={checked[i]} onClick={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}>{String(i + 1).padStart(2, "0")} {w} {checked[i] ? "✓" : ""}</button></p>)}
        <p className="tks-kicker" aria-live="polite">{checked.filter(Boolean).length} / 6 improvements addressed</p></div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 12 }}>Roadmap</p>
    <Chips items={ROADMAP.map(([v, t]) => `${v} · ${t}`)} value={rm} onPick={setRm} />
    <p style={{ textAlign: "center", color: "#c9c9ce", margin: "12px 0 0" }}>From a focused retrieval tool to a responsible global viewing layer.</p>
  </Ax>;
}

/* ---------------- Routing ---------------- */
export function aurionXChapterFor(file: string) {
  if (file.startsWith("AurionX_01_")) return <AurionXHero />;
  if (file.startsWith("AurionX_02_")) return <AurionXThreeFeatures />;
  if (file.startsWith("AurionX_03_")) return <AurionXAtAGlance />;
  if (file.startsWith("AurionX_04_")) return <AurionXTimeline />;
  if (file.startsWith("AurionX_05_")) return <AurionXBrief />;
  if (file.startsWith("AurionX_06_")) return <AurionXTVProblem />;
  if (file.startsWith("AurionX_07_")) return <AurionXDiscoveryFriction />;
  if (file.startsWith("AurionX_08_")) return <AurionXLanguageProblem />;
  if (file.startsWith("AurionX_09_")) return <AurionXResearchMethod />;
  if (file.startsWith("AurionX_10_")) return <AurionXInsights />;
  if (file.startsWith("AurionX_11_")) return <AurionXOpportunityMatrix />;
  if (file.startsWith("AurionX_12_")) return <AurionXPrinciples />;
  if (file.startsWith("AurionX_13_")) return <AurionXScope />;
  if (file.startsWith("AurionX_14_")) return <AurionXArchitecture />;
  if (file.startsWith("AurionX_15_")) return <AurionXIA />;
  if (file.startsWith("AurionX_16_")) return <AurionXExperienceMap />;
  if (file.startsWith("AurionX_19_")) return <AurionXScenario />;
  if (file.startsWith("AurionX_20_")) return <AurionXUserFlow />;
  if (file.startsWith("AurionX_22_")) return <AurionXSceneIndex />;
  if (file.startsWith("AurionX_23_")) return <AurionXErrorStates />;
  if (file.startsWith("AurionX_24_")) return <AurionXTechnicalPipeline />;
  if (file.startsWith("AurionX_25_")) return <AurionXCutScenario />;
  if (file.startsWith("AurionX_27_")) return <AurionXStoryboard />;
  if (file.startsWith("AurionX_28_")) return <AurionXOutputComparison />;
  if (file.startsWith("AurionX_29_")) return <AurionXProgressStates />;
  if (file.startsWith("AurionX_30_")) return <AurionXVoiceBeforeAfter />;
  if (file.startsWith("AurionX_31_")) return <AurionXLanguageSetup />;
  if (file.startsWith("AurionX_32_")) return <AurionXCutPipeline />;
  if (file.startsWith("AurionX_33_")) return <AurionXVoicePipeline />;
  if (file.startsWith("AurionX_34_")) return <AurionXFailureStates />;
  if (file.startsWith("AurionX_35_")) return <AurionXSystemArchitecture />;
  if (file.startsWith("AurionX_36_")) return <AurionXEvidence />;
  if (file.startsWith("AurionX_37_")) return <AurionXTesting />;
  if (file.startsWith("AurionX_38_")) return <AurionXIteration />;
  if (file.startsWith("AurionX_39_")) return <AurionXEcosystem />;
  if (file.startsWith("AurionX_40_")) return <AurionXOutcome />;
  if (file.startsWith("AurionX_41_")) return <AurionXReflection />;
  return null;
}
