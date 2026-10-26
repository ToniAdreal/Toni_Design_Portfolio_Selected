import { useState } from "react";
import type { ReactNode } from "react";
import "./tokenta-slides.css";

/**
 * Bespoke rebuilds of AurionX screens transcribed from the actual image
 * files AurionX_01–16, 19, 20, 22–41 (17, 18 live in
 * AurionXDesignSystem.tsx; 21, 26 in ProjectScreens.tsx). Several files
 * are offset vs their filenames/data titles — see BUILD_NOTES §6:
 * file 23 = Error & Clarification States (printed 24), file 24 = Scene
 * Recall Technical Pipeline (printed 23), file 28 = Generated Output
 * Comparison (printed 29), file 29 = Progress & Control States
 * (printed 30), file 30 = Global Voice Before & After (printed 31),
 * file 31 = Language & Voice Setup (printed 32), file 32 = Five-Minute
 * Cut Technical Pipeline (printed 28). The components below follow the
 * IMAGE in each file; the printed number is passed as `n` where the
 * shell prints one, so headers agree with the image, not the filename.
 * Dark spectral language: Charcoal #0B0D12, Cyan #00E5FF, Azure
 * #2979FF, Violet #7B61FF (from AurionX_17).
 * Pass 2: every screen renders ALL printed content simultaneously in
 * the printed layout (selection = highlight only); the cyan→violet
 * gradient title rule is restored deck-wide; diagram slides (11, 14,
 * 15, 16, 20, 24, 27, 32, 33, 35) are drawn as diagrams; boxed-number +
 * section-eyebrow furniture is restored on 33–41.
 */

const CY = "#00E5FF";
const AZ = "#2979FF";
const VI = "#7B61FF";
const ACC = "#4cc9f0";
const GRAD = "linear-gradient(90deg,#00E5FF,#2979FF,#7B61FF)";

function Ax({ n, title, sub, children, label, serif, eyebrow, center, light }: { n: string; title: ReactNode; sub?: ReactNode; children: React.ReactNode; label: string; serif?: boolean; eyebrow?: string; center?: boolean; light?: boolean }) {
  // Pass 3 compaction: the shared .tks shell (34/38px padding, 50px
  // headline, 24px title margin) made every AurionX slide 15–60%
  // taller than the tight 16:9 originals at the 980px canvas. Inline
  // overrides here (this file only) restore the printed density:
  // 20/24px padding, 36px titles, 14.5px ledes, tighter head/rule.
  return <div className="tks tks--dark" style={{ background: "#07080d", padding: "20px 24px 14px" }} role="region" aria-label={label}>
    <div className="tks-head" style={{ paddingBottom: 6 }}><span><b>⋈ AurionX</b>&nbsp;&nbsp;|&nbsp;&nbsp;{n} of 41</span><span className="tks-brand" style={{ fontSize: 12 }}>AURIONX</span></div>
    {eyebrow ? <p style={{ margin: "6px 0 2px", display: "flex", gap: 9, alignItems: "center" }}><span style={{ border: `1.5px solid ${VI}`, borderRadius: 5, padding: "1px 8px", fontWeight: 800, fontSize: 13 }}>{n}</span><span style={{ fontSize: 10.5, letterSpacing: "0.16em", color: ACC, fontWeight: 700 }}>{eyebrow}</span></p> : null}
    {title ? <><h3 style={{ fontSize: 36, margin: "12px 0 6px", textAlign: center ? "center" : undefined, fontFamily: serif ? "Georgia, 'Times New Roman', serif" : undefined, fontWeight: light ? 300 : undefined }}>{title}</h3>
    <span aria-hidden="true" style={{ display: "block", width: 190, height: 3, background: GRAD, borderRadius: 2, margin: center ? "0 auto 8px" : "0 0 8px" }} /></> : null}
    {sub ? <p className="tks-lede" style={{ fontSize: 14.5, margin: "0 0 14px", ...(center ? { textAlign: "center", marginInline: "auto" } : {}) }}>{sub}</p> : null}
    {children}
  </div>;
}
function Chips({ items, value, onPick, render }: { items: string[]; value: number; onPick: (i: number) => void; render?: (s: string) => string }) {
  return <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }} role="group">{items.map((s, i) => <button key={s} type="button" className="tks-chip" aria-pressed={i === value} onClick={() => onPick(i)}>{render ? render(s) : s}</button>)}</div>;
}
/** Structural film-still block (photographic content, represented structurally). */
const Still = ({ h = 54, children, tone = "#1a2334" }: { h?: number; children?: ReactNode; tone?: string }) => <span style={{ display: "block", height: h, borderRadius: 7, background: `linear-gradient(135deg, ${tone}, #05070c)`, border: "1px solid #26272c", position: "relative", overflow: "hidden", padding: "5px 7px", fontSize: 9.3, color: "#c9c9ce" }}>{children}</span>;
/**
 * Pass 3: real imagery crop from the original slide (photographic /
 * artwork regions only — no UI text is baked into any crop; every
 * label, subtitle and control stays live DOM beside/over the image).
 * Crops live in public/projects/crops/aurionx/.
 */
const Img = ({ src, h, alt = "", children, darken }: { src: string; h: number; alt?: string; children?: ReactNode; darken?: boolean }) => <span style={{ display: "block", height: h, borderRadius: 7, border: "1px solid #26272c", position: "relative", overflow: "hidden" }}>
  <img src={src} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
  {darken ? <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(3,4,8,0.72))" }} /> : null}
  {children ? <span style={{ position: "absolute", inset: 0, padding: "5px 7px", fontSize: 9.3, color: "#e8e8ea" }}>{children}</span> : null}
</span>;
const CROP = "/projects/crops/aurionx/";
/**
 * Pass 4 — photographic stage with live DOM overlays. The stage
 * background is a crop of the original slide's room/scene photograph
 * (which necessarily contains the photographed screen's baked UI);
 * every baked-UI region is covered by an absolutely-positioned live
 * DOM element (the TV screen, floating panels, title veil), so all
 * text and controls the reader sees are real DOM. Positions are
 * percentages of the original 1672×941 slide, measured on the print.
 */
const Stage = ({ bg, ratio = "1672 / 941", label, children }: { bg: string; ratio?: string; label: string; children?: ReactNode }) => <div role="img" aria-label={label} style={{ position: "relative", aspectRatio: ratio, borderRadius: 10, overflow: "hidden", border: "1px solid #26272c", background: "#000" }}>
  <img src={bg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
  {children}
</div>;
/** A live DOM television screen positioned over a photographed one. */
const TvBox = ({ l, t, w, h, children, label }: { l: number; t: number; w: number; h: number; children?: ReactNode; label: string }) => <div role="region" aria-label={label} style={{ position: "absolute", left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%`, background: "#04060a", borderRadius: 4, overflow: "hidden", boxShadow: "0 0 0 2px #0a0a0c, 0 6px 24px rgba(0,0,0,0.55)" }}>{children}</div>;
/** Spectral voice wave (SVG polyline). */
const Wave = ({ color = VI, w = 120, h = 22 }: { color?: string; w?: number; h?: number }) => <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" style={{ display: "inline-block", verticalAlign: "middle" }}><polyline fill="none" stroke={color} strokeWidth="1.8" points={Array.from({ length: 30 }, (_, i) => `${(i * w) / 29},${h / 2 + Math.sin(i * 1.3) * (h / 2 - 3) * (0.4 + 0.6 * Math.abs(Math.sin(i * 0.55)))}`).join(" ")} /></svg>;

/* ---------------- 01 — Cinematic Hero ---------------- */
export function AurionXHero() {
  const [listening, setListening] = useState(true);
  const [pos, setPos] = useState(1457); // 24:17 of 58:21 (3501s)
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  // Pass 4: overlay method — the stage is the original living-room
  // photograph. The baked slide title (left) is covered by an opaque
  // DOM title veil carrying the live title; the photographed TV is
  // covered by a live DOM television (castle artwork + listening
  // line, wave, scrubber, controls), so no baked UI text remains
  // visible. Room, sofa, console and shelving stay photographic.
  return <Ax n="01" title="" label="AurionX cinematic hero — interactive rebuild of AurionX_01">
    <Stage bg={`${CROP}room-hero.jpg`} label="Living room with a wall-mounted television playing the castle film still, as printed">
      <div style={{ position: "absolute", left: 0, top: 0, width: "37%", height: "100%", background: "linear-gradient(90deg, rgba(5,5,7,0.97) 0%, rgba(5,5,7,0.97) 74%, rgba(5,5,7,0) 100%)", padding: "15% 4% 0 3.2%" }}>
        <h3 style={{ fontSize: 56, margin: "0 0 10px", lineHeight: 1.02, fontWeight: 500 }}>AurionX</h3>
        <p style={{ fontSize: 16.5, lineHeight: 1.45, margin: "0 0 14px", color: "#e8e8ea" }}>An AI-Native Viewing Layer<br />for Global Entertainment</p>
        <p style={{ margin: 0, color: "#c9c9ce", fontSize: 12, lineHeight: 1.6 }}>Solo Product Designer and Engineer<br />2024</p>
      </div>
      <TvBox l={40.1} t={11.6} w={50.1} h={58.9} label="Television — Episode 3, The Last Light, with the AurionX listening overlay">
        <img src={`${CROP}hero-castle.jpg`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 52%, rgba(2,3,6,0.88) 82%)" }} aria-hidden="true" />
        <span style={{ position: "absolute", left: "3.5%", right: "3.5%", bottom: "4%" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 7 }} aria-live="polite"><span style={{ color: listening ? ACC : "#9a9aa0", fontSize: 9.6, textShadow: "0 1px 4px #000" }}>● AurionX is {listening ? "listening" : "muted"}</span><Wave color={CY} w={110} h={13} /><Wave color={VI} w={110} h={13} /></span>
          <span style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 5, fontSize: 9.6, color: "#e8e8ea" }}>
            <span>Episode 3<br /><span style={{ color: "#9a9aa0" }}>The Last Light</span></span>
            <span style={{ fontFamily: '"IBM Plex Mono",monospace' }}>{fmt(pos)}</span>
            <input type="range" min={0} max={3501} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Playback position, Episode 3 The Last Light" style={{ flex: 1, accentColor: AZ, height: 3 }} />
            <span style={{ fontFamily: '"IBM Plex Mono",monospace' }}>58:21</span>
            <button type="button" aria-pressed={listening} onClick={() => setListening((v) => !v)} style={{ background: "transparent", border: "1px solid #3a3b40", borderRadius: 5, color: "#e8e8ea", fontSize: 9.4, padding: "2px 7px", cursor: "pointer", font: "inherit" }}>{listening ? "🎙 Listening" : "🎙 Muted"}</button>
            <span aria-hidden="true">CC&nbsp; 🔊&nbsp; ⋮</span>
          </span>
        </span>
      </TvBox>
    </Stage>
  </Ax>;
}

/* ---------------- 02 — Three-Feature Overview (pass 1 flagship — kept) ---------------- */
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
    <div className="tks-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
      {FEATURES.map((x, i) => <button key={x.name} type="button" aria-pressed={i === f} onClick={() => setF(i)} style={{ background: "transparent", border: "none", borderLeft: i ? "1px solid #26272a" : "none", borderRadius: 0, padding: "2px 14px", textAlign: "left", color: "inherit", cursor: "pointer" }}>
        <b style={{ fontSize: 23, fontWeight: 700, color: i === f ? "#fff" : "#e8e8ea" }}>{x.name}</b>
        <p className="tks-kicker" style={{ margin: "10px 0 3px" }}>Problem</p><p style={{ color: "#d8d8dc", margin: 0, fontSize: 13.5, lineHeight: 1.5 }}>{x.problem}</p>
        {/* Pass 3: the printed TV panel per feature — original artwork
            crop as the visual, every printed TV fact kept as DOM. */}
        <div style={{ margin: "10px 0" }}>
          {i === 0 ? <><Img src={`${CROP}f02-castle.jpg`} h={98} alt="Castle film still behind the Scene Recall panel" />
            <div style={{ fontSize: 10.6, color: "#b9b9be", lineHeight: 1.55, marginTop: 6 }}>
              <p style={{ margin: 0, color: "#e8e8ea" }}>“Show me the moment they first see the castle.”</p>
              <p style={{ margin: "3px 0 0" }}>Top Matches — 1 The Last Light · First view of the castle · 24:17 · 2 Approaching the castle · 37:42 · 3 Inside the castle · 1:08:11. The Last Light · 24:17 / 1:56:03.</p>
            </div></> : null}
          {i === 1 ? <><Img src={`${CROP}f02-frames.jpg`} h={34} alt="The six printed preview frames of the five-minute cut" />
            <div style={{ fontSize: 10.6, color: "#b9b9be", lineHeight: 1.55, marginTop: 6 }}>
              <p style={{ margin: 0, color: "#e8e8ea" }}>Create your five-minute cut</p>
              <p style={{ margin: "3px 0 0" }}>Preferred Duration 3 min / 5 min / 7 min; Emphasis Story / Characters / Action / Emotion / World. Generating your five-minute preview… 00:18. Your Five-Minute Preview (6 frames, 5:00). Preview / Save to Watchlist.</p>
            </div></> : null}
          {i === 2 ? <><Img src={`${CROP}f02-portrait.jpg`} h={98} alt="Split-screen portrait still behind the Global Voice panel" />
            <div style={{ fontSize: 10.6, color: "#b9b9be", lineHeight: 1.55, marginTop: 6 }}>
              <p style={{ margin: 0 }}>Original (English) “This is our only chance to end the darkness.” ↔ Localized (Spanish) “Esta es nuestra única oportunidad para acabar con la oscuridad.”</p>
              <p style={{ margin: "3px 0 0" }}>Language Español (Latinoamérica) · Audio AI Dubbing · Subtitles On.</p>
            </div></> : null}
        </div>
        <p className="tks-kicker" style={{ margin: "6px 0 3px" }}>Result</p><p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5 }}>{x.result}</p></button>)}
    </div>
    <div className="tks-detail" aria-live="polite"><b>{cur.name}</b> — try the printed controls:
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
  return <Ax n="03" title={<>Project at<br />a Glance</>} label="AurionX project at a glance — interactive rebuild of AurionX_03">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 22, alignItems: "start" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 15 }}><b>Aurion<span style={{ color: CY }}>X</span></b></p>
        <p className="tks-lede" style={{ margin: 0 }}>A focused AI viewing assistant built around three high-value moments: finding a remembered scene, deciding what to watch, and crossing language barriers.</p>
        <div style={{ marginTop: 12, border: "1px solid #26272c", borderRadius: 10, overflow: "hidden" }}>
          <Img src={`${CROP}hero-castle.jpg`} h={104} alt="Castle film still on the television panel" darken><span style={{ position: "absolute", left: 7, bottom: 5, textShadow: "0 1px 4px #000" }}><span style={{ color: ACC }}>● AurionX is listening</span> <Wave color={CY} w={90} h={14} /><br />“Show me the moment they first see the castle.”</span></Img>
          <div style={{ padding: "8px 11px", fontSize: 10.6 }}>
            <p style={{ margin: "0 0 5px" }}><b>Top Matches</b></p>
            {[["1", "First view of the castle", "24:17"], ["2", "Approaching the castle", "37:42"], ["3", "Inside the castle", "1:08:11"]].map(([n, t, tc]) => <p key={n} style={{ margin: "3px 0", display: "flex", gap: 8 }}><span style={{ color: CY }}>{n}</span><span style={{ flex: 1 }}>{t}</span><span style={{ color: "#9a9aa0" }}>{tc}</span></p>)}
            <p style={{ margin: "7px 0 0", color: "#9a9aa0" }}>The Last Light · 24:17 / 1:56:03 <span aria-hidden="true" style={{ display: "inline-block", width: "55%", height: 3, background: "#26272c", borderRadius: 2, verticalAlign: "middle", marginLeft: 6 }}><span style={{ display: "block", width: "21%", height: "100%", background: GRAD, borderRadius: 2 }} /></span></p>
          </div>
        </div>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.8 }}>
        <tbody>{GLANCE.map(([k, v], i) => <tr key={k} onClick={() => setRow(i)} style={{ cursor: "pointer", background: i === row ? "#12141c" : undefined }}>
          <td style={{ color: "#b18cff", textTransform: "uppercase", letterSpacing: ".09em", fontSize: 10, padding: "6px 10px 6px 0", borderBottom: "1px solid #23242a", whiteSpace: "nowrap", verticalAlign: "top" }}>{k}</td>
          <td style={{ padding: "6px 0 6px 14px", borderBottom: "1px solid #23242a", borderLeft: "1px solid #23242a", lineHeight: 1.5 }}>{v}</td>
        </tr>)}</tbody>
      </table>
    </div>
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
  return <Ax n="04" title="Solo Ownership, End to End" sub="One project carried from brief interpretation through product design, technical prototyping and final submission." label="AurionX solo ownership timeline — interactive rebuild of AurionX_04">
    <div style={{ position: "relative", margin: "14px 4px 4px" }}>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 13, height: 2, background: "#2c2d33" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", position: "relative" }}>
        {TIMELINE.map(([t], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ background: "transparent", border: "none", cursor: "pointer", font: "inherit", color: "#e8e8ea", padding: 0, textAlign: "center" }}>
          <span style={{ width: 27, height: 27, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 800, background: i === s ? GRAD : "#12141c", border: `2px solid ${i === s ? VI : "#3a3b40"}`, color: "#fff", position: "relative", zIndex: 1 }}>{String(i + 1).padStart(2, "0")}</span>
          <span style={{ display: "block", fontSize: 9.3, lineHeight: 1.35, marginTop: 5, padding: "0 2px", color: i === s ? "#fff" : "#b9b9be" }}>{t}</span>
        </button>)}
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", gap: 5, marginTop: 12 }}>
      {TIMELINE.map(([t, ev, cap], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === s ? VI : "#23242a"}`, borderRadius: 8, padding: "6px 7px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
        <Still h={30} tone={["#233148", "#2a2438", "#183038", "#26262e", "#1d1d24", "#233148", "#2a2438", "#183038", "#26262e", "#1d1d24"][i]} />
        <span style={{ display: "block", fontSize: 8.8, fontWeight: 700, lineHeight: 1.4, marginTop: 5 }}>{ev}</span>
        <span style={{ display: "block", fontSize: 8.4, lineHeight: 1.45, color: "#9a9aa0", marginTop: 3 }}>{cap}</span>
      </button>)}
    </div>
  </Ax>;
}

/* ---------------- 05 — Reframing the Brief ---------------- */
export function AurionXBrief() {
  const [dims, setDims] = useState<boolean[]>([true, false, false, false, false]);
  const DIMS = ["Innovation", "Feasibility", "Logicality", "Market fit", "Topic alignment"];
  return <Ax n="05" title="Reframing the Brief" sub="A reconstructed view of the competition brief." label="AurionX competition brief reconstruction — interactive rebuild of AurionX_05">
    <div style={{ border: "1px solid #2c2d33", borderRadius: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", background: "#0a0c12" }}>
      <div style={{ padding: "14px 16px" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Topic</p><p style={{ fontSize: 19, fontWeight: 700, margin: 0, lineHeight: 1.35 }}>Big Screen for Young Gen's Lifestyle</p>
        <p className="tks-kicker" style={{ margin: "14px 0 2px" }}>Core question</p><p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6 }}>How might AI make television more useful, intuitive and globally accessible for a new generation of viewers?</p></div>
      <div style={{ padding: "14px 16px", borderLeft: "1px solid #23242a" }}><p className="tks-kicker" style={{ marginTop: 0 }}>Submission constraints</p><p style={{ margin: 0 }}>Design for a TV app experience with clean components and performant code.</p>
        <p className="tks-kicker" style={{ margin: "14px 0 5px" }}>Evaluation dimensions</p>
        {DIMS.map((d, i) => <p key={d} style={{ margin: "6px 0", display: "flex", gap: 8, alignItems: "center" }}><button type="button" onClick={() => setDims((v) => v.map((x, j) => (j === i ? !x : x)))} aria-pressed={dims[i]} style={{ width: 21, height: 21, borderRadius: "50%", border: "none", padding: 0, background: dims[i] ? GRAD : "#2c2d33", color: "#fff", cursor: "pointer", fontSize: 12, flex: "none" }}>—</button><span style={{ color: dims[i] ? "#fff" : "#9a9aa0" }}>{d}</span></p>)}</div>
      <div style={{ padding: "14px 16px", borderLeft: "1px solid #23242a" }}>
        <p style={{ margin: 0, fontSize: 22, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontWeight: 800 }}>✦ My Interpretation</p>
        <div style={{ border: "1.5px solid transparent", background: "linear-gradient(#0d0f16,#0d0f16) padding-box, linear-gradient(120deg,#00E5FF,#7B61FF) border-box", borderRadius: 10, padding: "11px 13px", marginTop: 10 }}>
          <p style={{ fontSize: 15.5, margin: 0, lineHeight: 1.65 }}>Treat the television as an intelligent viewing layer, then focus the concept on three high-value moments rather than a broad feature catalogue.</p>
        </div>
      </div>
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
const F06_TV: Array<[number, number, number, number]> = [
  [43.7, 11.2, 46.7, 61], [44.2, 9.6, 46.7, 62], [43.7, 11.5, 46.7, 65.5], [41.4, 9.8, 49.9, 67.8],
];
export function AurionXTVProblem() {
  const [p, setP] = useState(0);
  // Pass 4: overlay method per panel — each quadrant is the original
  // room photograph (viewer, sofa, console); the photographed TV is
  // covered by a live DOM screen (castle artwork + the panel's own
  // playback UI; panel 4 a DOM browse UI), and the baked panel number
  // is covered by the live number chip. Panel text lives in the
  // readout under the grid, as the print carries no panel captions.
  const tvInner = (i: number) => i === 0 ? <>
      <img src={`${CROP}f06-castle.jpg`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <span style={{ position: "absolute", left: "4%", right: "4%", bottom: "5%", fontSize: 8.6, color: "#e8e8ea" }}><span style={{ display: "block", marginBottom: 3 }}>Episode 3 · The Last Light</span><Wave color={CY} w={150} h={10} /><span style={{ display: "flex", justifyContent: "space-between", fontFamily: '"IBM Plex Mono",monospace', marginTop: 2 }}><span>24:17</span><span>58:21&nbsp; CC&nbsp; 🔊&nbsp; ⋮</span></span></span>
    </> : i === 1 ? <>
      <img src={`${CROP}f06-castle.jpg`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <span style={{ position: "absolute", left: "4%", right: "4%", bottom: "5%" }}><span style={{ display: "flex", gap: 2, marginBottom: 3 }}>{[0, 1, 2, 3, 4, 5].map((k) => <span key={k} style={{ flex: 1, height: 14, borderRadius: 2, overflow: "hidden", border: k === 3 ? "1.5px solid #fff" : "1px solid #3a3b40" }}><img src={`${CROP}f06-castle.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></span>)}</span><span style={{ display: "block", height: 3, background: "linear-gradient(90deg,#2DD4BF,#2979FF,#7B61FF)", borderRadius: 2 }} /><span style={{ display: "flex", justifyContent: "space-between", fontFamily: '"IBM Plex Mono",monospace', fontSize: 8.6, color: "#e8e8ea", marginTop: 2 }}><span>24:17</span><span>34:06</span><span>58:21&nbsp; ⋮</span></span></span>
    </> : i === 2 ? <>
      <img src={`${CROP}f06-castle.jpg`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <span style={{ position: "absolute", left: "50%", top: "42%", transform: "translate(-50%,-50%)", border: "1.5px solid #e8e8ea", borderRadius: "50%", width: 25, height: 25, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", background: "#00000055" }}>❚❚</span>
      <span style={{ position: "absolute", left: "4%", right: "4%", bottom: "5%", fontFamily: '"IBM Plex Mono",monospace', fontSize: 8.6, color: "#e8e8ea" }}><span style={{ display: "block", height: 3, background: "#2DD4BF", borderRadius: 2, width: "42%", marginBottom: 3 }} /><span style={{ display: "flex", justifyContent: "space-between" }}><span>24:17</span><span>58:21&nbsp; ⋮</span></span></span>
    </> : <span style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "26% 1fr", gap: 5, padding: "5% 5%", background: "#0a0d14", fontSize: 8.2, color: "#c9c9ce" }}>
      <span>{["⌂ Home", "⌕ Search", "▤ Movies", "▤ TV Shows", "+ My List", "⚙ Settings"].map((s) => <span key={s} style={{ display: "block", padding: "1.5px 0" }}>{s}</span>)}<span style={{ display: "block", marginTop: 4, color: "#77787e" }}>Continue Watching</span></span>
      <span><span style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>{["hero-castle.jpg", "f39-lighthouse.jpg", "f25-eclipse.jpg", "f25-ship.jpg"].map((s) => <img key={s} src={`${CROP}${s}`} alt="" style={{ width: "100%", height: 20, objectFit: "cover", borderRadius: 2, display: "block" }} />)}</span><span style={{ display: "block", margin: "2px 0 3px", fontSize: 7.6 }}>Edge of Silence · The Method · Cobalt Horizon · Beyond the Ridge</span><span style={{ color: "#77787e" }}>Recommended For You</span><span style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3, marginTop: 2 }}>{["f19-face.jpg", "f19-kitchen.jpg", "f02-castle.jpg", "f30-still-a.jpg"].map((s) => <img key={s} src={`${CROP}${s}`} alt="" style={{ width: "100%", height: 20, objectFit: "cover", borderRadius: 2, display: "block" }} />)}</span><span style={{ display: "block", marginTop: 2, fontSize: 7.6 }}>Nightfall · The Cartographer · Echoes · Falling Earth</span></span>
    </span>;
  return <Ax n="06" title="" label="AurionX television interaction problem — interactive rebuild of AurionX_06">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
      {PROBLEM_PANELS.map((x, i) => <button key={x.n} type="button" onClick={() => setP(i)} aria-pressed={i === p} style={{ padding: 0, border: `1.5px solid ${i === p ? VI : "#23242a"}`, borderRadius: 9, overflow: "hidden", cursor: "pointer", font: "inherit", background: "#000", display: "block", width: "100%" }}>
        <Stage bg={`${CROP}f06-room${i + 1}.jpg`} ratio="840 / 432" label={`Printed panel ${x.n}: viewer in the living room, ${x.label}`}>
          <span style={{ position: "absolute", left: "1.6%", top: "3%", border: "1.5px solid #e8e8ea", borderRadius: 3, padding: "0 6px", fontWeight: 800, color: "#fff", background: "#000", fontSize: 12 }}>{x.n}</span>
          <TvBox l={F06_TV[i][0]} t={F06_TV[i][1]} w={F06_TV[i][2]} h={F06_TV[i][3]} label={`Television in panel ${x.n}`}>{tvInner(i)}</TvBox>
        </Stage>
      </button>)}
    </div>
    <p aria-live="polite" style={{ margin: "10px 0 0", fontSize: 11.8, lineHeight: 1.6 }}><b>{p + 1} · {PROBLEM_PANELS[p].label}</b> — <span style={{ color: "#c9c9ce" }}>{PROBLEM_PANELS[p].body}</span></p>
    <p style={{ textAlign: "center", fontSize: 16.5, margin: "10px 0 0" }}>Television content is searchable by title, but rarely by remembered meaning.</p>
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
    <p className="tks-kicker" style={{ letterSpacing: "0.14em" }}>CURRENT MOVIE-SELECTION JOURNEY</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6 }}>
      {CURRENT.map(([t, f, body], i) => <div key={t}>
        <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ width: "100%", textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === s ? VI : "#23242a"}`, borderRadius: 9, padding: "8px 9px", cursor: "pointer", font: "inherit", color: "#e8e8ea", minHeight: 118 }}>
          <span style={{ fontSize: 19, color: "#c9a877", fontWeight: 700 }}>{i + 1}</span>
          <b style={{ display: "block", fontSize: 11.8, margin: "3px 0" }}>{t}</b>
          {/* Pass 4: the printed card interiors that are pure film
              stills / poster artwork now use the real crops (poster
              titles are part of the artwork). The reviews card (4) is
              a text UI and stays DOM. */}
          {["f07-poster.jpg", "f07-details.jpg", "f07-trailer.jpg", "", "f07-decide.jpg", "f07-start.jpg"][i] ? <span style={{ display: "block", margin: "0 0 5px" }}><Img src={`${CROP}${["f07-poster.jpg", "f07-details.jpg", "f07-trailer.jpg", "", "f07-decide.jpg", "f07-start.jpg"][i]}`} h={36} alt={`Printed still for journey step ${i + 1}`} /></span> : null}
          <span style={{ display: "block", fontSize: 9.4, lineHeight: 1.5, color: "#b9b9be" }}>{body}</span>
        </button>
        {f ? <p style={{ margin: "5px 0 0", fontSize: 10, color: "#e8a33d", borderTop: "2px solid #3a3b40", paddingTop: 4, position: "relative" }}><span aria-hidden="true" style={{ position: "absolute", top: -5, left: 12, width: 7, height: 7, background: "#e8a33d", borderRadius: "50%" }} />{f}</p> : null}
      </div>)}
    </div>
    <hr style={{ border: "none", borderTop: "1px solid #23242a", margin: "14px 0" }} />
    <p style={{ margin: "0 0 8px", fontSize: 11, letterSpacing: "0.14em", fontWeight: 800, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>AURIONX JOURNEY</p>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.4fr 1fr" }}>
      <div className="tks-card"><b>1 · Describe preference</b><p style={{ color: "#c9c9ce" }}>“I want something thought-provoking, visually stunning, and emotionally resonant.”</p><Wave color={CY} w={130} /></div>
      <div className="tks-card"><b>2 · Generate five-minute cut</b><p style={{ color: "#c9c9ce" }}>Your five-minute cut — a personal, spoiler-protected sample of the actual film.</p>{/* Pass 4: printed desert still + thumbnail strip as real crops. */}<Img src={`${CROP}f07-cut.jpg`} h={44} alt="Desert film still heading the printed five-minute cut" /><div style={{ display: "flex", gap: 4, marginTop: 4 }}>{[1, 2, 3, 4, 5].map((k) => <span key={k} style={{ flex: 1 }}><Img src={`${CROP}f07-thumb${k}.jpg`} h={22} alt="" /></span>)}</div><span aria-hidden="true" style={{ display: "block", height: 4, background: GRAD, borderRadius: 2, marginTop: 6 }} /></div>
      <div className="tks-card"><b>3 · Decide</b><p style={{ display: "flex", gap: 5, marginTop: 6 }}><button type="button" className="tks-btn" style={{ background: GRAD, border: "none", color: "#fff" }} onClick={() => setDecided("start")}>Start movie</button><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setDecided("no")}>Not for me</button></p>
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
const LANG_TIERS: Array<[string, string, string[]]> = [
  ["Subtitles", "▤", ["Accurate words", "Reading required", "Split attention"]],
  ["Standard dubbing", "🎙", ["Natural delivery", "Some nuance retained", "Performance partially preserved"]],
  ["Higher-fidelity localized performance", "✦", ["Cultural adaptation", "Emotional fidelity", "Fully immersive experience"]],
];
export function AurionXLanguageProblem() {
  const [s, setS] = useState(0);
  const [t, setT] = useState(2);
  return <Ax n="08" title="Language Access Problem" label="AurionX language access problem — interactive rebuild of AurionX_08">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 16, alignItems: "start" }}>
      <div>
        <p style={{ margin: "2px 0 6px", fontSize: 11.3, display: "flex", gap: 16, flexWrap: "wrap" }}><span><span aria-hidden="true" style={{ display: "inline-block", width: 11, height: 11, background: AZ, borderRadius: 2, marginRight: 5 }} />Available in original language</span><span><span aria-hidden="true" style={{ display: "inline-block", width: 11, height: 11, border: "1.5px solid #9a9aa0", borderRadius: 2, marginRight: 5 }} />Unavailable in selected language</span></p>
        <p style={{ margin: 0, fontSize: 12.6, lineHeight: 1.65, color: "#d8d8dc" }}>The viewer's language decides what can be watched at all — before quality is even a question.</p>
      </div>
      <div aria-hidden="true" style={{ position: "relative", height: 102, background: "#0a0e18", border: "1px solid #23242a", borderRadius: 10, overflow: "hidden" }}>
        <span style={{ position: "absolute", left: "6%", top: "16%", width: "24%", height: "34%", background: AZ, opacity: 0.75, borderRadius: "46% 54% 60% 40%/50%" }} /><span style={{ position: "absolute", left: "13%", top: "52%", textAlign: "center", fontSize: 9.5, color: "#cfe6ff" }}>US</span>
        <span style={{ position: "absolute", left: "31%", top: "58%", width: "11%", height: "26%", background: AZ, opacity: 0.75, borderRadius: "50% 50% 46% 54%/60%" }} /><span style={{ position: "absolute", left: "32%", top: "86%", fontSize: 9.5, color: "#cfe6ff" }}>Brazil</span>
        <span style={{ position: "absolute", left: "47%", top: "14%", width: "13%", height: "20%", background: AZ, opacity: 0.75, borderRadius: "50%" }} /><span style={{ position: "absolute", left: "48%", top: "36%", fontSize: 9.5, color: "#cfe6ff" }}>Europe</span>
        <span style={{ position: "absolute", left: "63%", top: "30%", width: "12%", height: "24%", background: AZ, opacity: 0.75, borderRadius: "50% 46% 54% 50%/56%" }} /><span style={{ position: "absolute", left: "65%", top: "56%", fontSize: 9.5, color: "#cfe6ff" }}>India</span>
        <span style={{ position: "absolute", left: "80%", top: "66%", width: "13%", height: "20%", background: VI, opacity: 0.8, borderRadius: "54% 46% 50% 50%/50%" }} /><span style={{ position: "absolute", left: "81%", top: "88%", fontSize: 9.5, color: "#ddd2ff" }}>Australia</span>
        <span style={{ position: "absolute", left: "58%", top: "12%", width: "30%", height: "40%", border: "1.5px solid #3a3b40", borderRadius: "50%", opacity: 0.7 }} />
        <span style={{ position: "absolute", left: "2%", bottom: 4, fontSize: 8.8, color: "#77787e" }}>World map as printed — regions stylised.</span>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, marginTop: 14 }}>
      {LANG_STAGES.map(([title, body], i) => <div key={title}>
        <p style={{ margin: "0 0 5px", fontSize: 11.6 }}><b>{title}</b>{i < 3 ? <span aria-hidden="true" style={{ float: "right", color: ACC }}>›</span> : null}</p>
        <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ width: "100%", textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === s ? VI : "#23242a"}`, borderRadius: 9, padding: "7px 9px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
          <Still h={42} tone={["#233148", "#2a2438", "#183038", "#33241a"][i]}>{i === 1 ? "🔒" : i >= 2 ? <span style={{ background: "#111", padding: "1px 6px", fontSize: 8.8 }}>I kept the truth to protect you.</span> : null}</Still>
          <span style={{ display: "block", fontSize: 9.5, lineHeight: 1.55, color: "#b9b9be", marginTop: 5 }}>{body}</span>
          <span aria-hidden="true" style={{ display: "block", marginTop: 5 }}><span style={{ fontSize: 9, color: "#9a9aa0" }}>00:18:42</span><span style={{ display: "block", height: 3, background: "#26272c", borderRadius: 2, marginTop: 2 }}><span style={{ display: "block", width: "38%", height: "100%", background: GRAD, borderRadius: 2 }} /></span></span>
        </button>
      </div>)}
    </div>
    <p className="tks-kicker" style={{ marginTop: 14 }}>Localization quality</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7 }}>
      {LANG_TIERS.map(([name, icon, bullets], i) => <button key={name} type="button" onClick={() => setT(i)} aria-pressed={i === t} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === t ? VI : "#23242a"}`, borderRadius: 10, padding: "10px 12px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
        <span aria-hidden="true" style={{ fontSize: 19, color: ACC }}>{icon}</span> <b style={{ fontSize: 12.8 }}>{name}</b>
        <Still h={22} tone="#1d2739" />
        <ul style={{ margin: "7px 0 0", paddingLeft: 15, fontSize: 10.8, lineHeight: 1.6 }}>{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      </button>)}
    </div>
  </Ax>;
}

/* ---------------- 09 — Research Method and Evidence ---------------- */
const METHODS = ["Desk research", "Competitor analysis", "User interviews", "Survey", "Prototype testing", "Technical feasibility experiments"];
export function AurionXResearchMethod() {
  const [m, setM] = useState(0);
  return <Ax n="09" title="Research Method and Evidence" sub="Publish only verified sources, sample sizes and outputs." label="AurionX research method and evidence — interactive rebuild of AurionX_09">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
      {METHODS.map((x, i) => <button key={x} type="button" onClick={() => setM(i)} aria-pressed={i === m} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === m ? VI : "#23242a"}`, borderRadius: 10, padding: "9px 11px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
        <span style={{ color: "#8f9bff", fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span> <b style={{ fontSize: 12.6 }}>{x}</b>
        {/* Pass 3: the two evidence boards whose printed visual is a pure
            photograph (interview room, feasibility hardware) use the real
            crops. Pass 4: boards 01/02/04/05 now use real collage crops
            too — their documents carry only illegible scribble-texture
            in the original itself (handwriting strokes, blurred micro-
            print), verified visually; no readable content is baked. */}
        {i === 2 ? <Img src={`${CROP}f09-room.jpg`} h={52} alt="Interview room photograph from the printed evidence board" />
          : i === 5 ? <Img src={`${CROP}f09-hardware.jpg`} h={52} alt="Feasibility-experiment hardware photograph from the printed evidence board" />
          : <Img src={`${CROP}f09-board${[1, 2, 0, 4, 5, 0][i]}.jpg`} h={52} alt="Evidence-board collage from the printed slide (documents and screens as photographic texture)" />}
        <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8, fontSize: 10 }}>
          <span style={{ borderTop: "1px solid #2c2d33", paddingTop: 5 }}>Question investigated<br /><span style={{ color: "#8f9bff" }}>Evidence to insert</span></span>
          <span style={{ borderTop: "1px solid #2c2d33", paddingTop: 5 }}>Concrete output<br /><span style={{ color: "#8f9bff" }}>Evidence to insert</span></span>
        </span>
      </button>)}
    </div>
    <p style={{ margin: "10px 0 0", color: "#9a9aa0", fontSize: 11.5 }}>As printed, both fields on every card are placeholders — no sources, sample sizes or outputs were supplied for this slide.</p>
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
  const [i2, setI2] = useState(5);
  const [rec, setRec] = useState<string | null>(null);
  return <Ax n="10" title="Insight Synthesis" serif label="AurionX insight synthesis — interactive rebuild of AurionX_10">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
      {INSIGHTS.map(([ev, impl, visual], j) => <button key={ev} type="button" onClick={() => setI2(j)} aria-pressed={j === i2} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${j === i2 ? VI : "#23242a"}`, borderRadius: 10, padding: "10px 12px", cursor: "pointer", font: "inherit", color: "#e8e8ea", display: "grid", gridTemplateColumns: "86px 1fr", gap: 10 }}>
        <Still h={66} tone={["#233148", "#2a2438", "#183038", "#26262e", "#33241a", "#1d2739"][j]}><span style={{ fontSize: 8.2, lineHeight: 1.45 }}>{visual}</span></Still>
        <span>
          <span style={{ display: "block", fontSize: 9.6, fontWeight: 800, letterSpacing: "0.1em", color: ACC }}>EVIDENCE</span>
          <span style={{ display: "block", fontSize: 11.6, lineHeight: 1.5, margin: "3px 0" }}>{ev}</span>
          <span aria-hidden="true" style={{ display: "block", borderTop: "1px solid #2c2d33", position: "relative", margin: "6px 0" }}><span style={{ position: "absolute", right: 0, top: -8, color: ACC, fontSize: 11 }}>→</span></span>
          <span style={{ display: "block", fontSize: 9.6, fontWeight: 800, letterSpacing: "0.1em", color: "#b18cff" }}>DESIGN IMPLICATION</span>
          <span style={{ display: "block", fontSize: 11.6, marginTop: 3 }}>{impl}</span>
        </span>
      </button>)}
    </div>
    {i2 === 5 ? <div className="tks-card" style={{ marginTop: 9 }} aria-live="polite"><b>AI Recommendation</b> — “Because you watched Arrival and Ex Machina, you might like Annihilation.” Confidence: Medium.
      <span style={{ display: "inline-block", width: 130, height: 6, background: "#26272c", borderRadius: 3, verticalAlign: "middle", margin: "0 10px" }}><span style={{ display: "block", width: "55%", height: "100%", background: GRAD, borderRadius: 3 }} /></span>
      <button type="button" className="tks-btn" style={{ background: GRAD, border: "none", color: "#fff" }} onClick={() => setRec("explained")}>Explain why</button> <button type="button" className="tks-btn tks-btn--ghost" onClick={() => setRec("dismissed")}>Not Interested</button> <button type="button" className="tks-btn tks-btn--ghost" onClick={() => setRec("reported")}>Report Issue</button>
      <span style={{ marginLeft: 8 }}>{rec === "explained" ? "Explained — reversible at any time." : rec === "dismissed" ? "Dismissed — action reversible." : rec === "reported" ? "Reported — recommendation kept visible for correction." : ""}</span></div> : null}
  </Ax>;
}

/* ---------------- 11 — Opportunity Prioritization Matrix ---------------- */
const OPPS: Array<{ name: string; fx: number; vy: number; kind: "sel" | "defer" | "research" }> = [
  { name: "Scene Recall", fx: 0.82, vy: 0.86, kind: "sel" },
  { name: "Five-Minute Cut", fx: 0.68, vy: 0.78, kind: "sel" },
  { name: "Global Voice", fx: 0.9, vy: 0.7, kind: "sel" },
  { name: "Virtual celebrity companion", fx: 0.2, vy: 0.84, kind: "defer" },
  { name: "Emotional digital twin", fx: 0.32, vy: 0.72, kind: "defer" },
  { name: "Humour recognition", fx: 0.24, vy: 0.3, kind: "research" },
  { name: "Live expression translation", fx: 0.38, vy: 0.2, kind: "research" },
  { name: "Audience synchronization", fx: 0.74, vy: 0.28, kind: "defer" },
  { name: "Fan creation tools", fx: 0.86, vy: 0.18, kind: "defer" },
];
const OPP_STATUS: Record<string, string> = { sel: "Selected — Prioritize for development", defer: "Defer — Revisit with future capabilities", research: "Research — Explore and validate" };
export function AurionXOpportunityMatrix() {
  const [o, setO] = useState(0);
  const cur = OPPS[o];
  const W = 470, H = 300, PX = 34, PY = 26;
  const pt = (fx: number, vy: number): [number, number] => [PX + fx * (W - PX - 8), H - PY - vy * (H - PY - 10)];
  return <Ax n="11" title="" label="AurionX opportunity matrix — interactive rebuild of AurionX_11">
    <div style={{ display: "grid", gridTemplateColumns: "218px 1fr", gap: 18, alignItems: "start" }}>
      <div>
        <h3 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 27, lineHeight: 1.3, margin: "0 0 6px", fontWeight: 600 }}>Opportunity<br />Prioritization<br />Matrix</h3>
        <span aria-hidden="true" style={{ display: "block", width: 120, height: 3, background: GRAD, borderRadius: 2, marginBottom: 10 }} />
        <p style={{ fontSize: 11.8, lineHeight: 1.65, color: "#d8d8dc", margin: "0 0 8px" }}>We focus where high viewer value meets technical feasibility. Selected concepts in the high-value, achievable zone receive priority investment.</p>
        <p style={{ fontSize: 11.8, lineHeight: 1.65, color: "#d8d8dc", margin: "0 0 12px" }}>Prioritize opportunities that deliver meaningful viewer value and are achievable with current or near-term technology.</p>
        <p style={{ margin: "0 0 4px", fontSize: 10.6, display: "flex", gap: 7, alignItems: "center" }}><span aria-hidden="true" style={{ width: 13, height: 13, borderRadius: "50%", background: GRAD, flex: "none" }} />Selected</p>
        <p style={{ margin: "0 0 4px", fontSize: 10.6, display: "flex", gap: 7, alignItems: "center" }}><span aria-hidden="true" style={{ width: 13, height: 13, borderRadius: "50%", border: `2px dashed ${VI}`, flex: "none" }} />Defer</p>
        <p style={{ margin: "0 0 14px", fontSize: 10.6, display: "flex", gap: 7, alignItems: "center" }}><span aria-hidden="true" style={{ width: 13, height: 13, borderRadius: "50%", border: `2px dashed ${CY}`, flex: "none" }} />Research</p>
        <p style={{ margin: 0, letterSpacing: "0.34em", fontSize: 12, color: "#9a9aa0" }}>A U R I O N X</p>
      </div>
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", display: "block" }} role="img" aria-label="Quadrant chart: viewer value against technical feasibility with nine plotted opportunities">
          <rect x={PX} y={8} width={(W - PX - 8) / 2} height={(H - PY - 10) / 2} fill="#7B61FF14" />
          <rect x={PX + (W - PX - 8) / 2} y={8} width={(W - PX - 8) / 2} height={(H - PY - 10) / 2} fill="#00E5FF17" />
          <rect x={PX} y={8 + (H - PY - 10) / 2} width={(W - PX - 8) / 2} height={(H - PY - 10) / 2} fill="#ffffff06" />
          <rect x={PX + (W - PX - 8) / 2} y={8 + (H - PY - 10) / 2} width={(W - PX - 8) / 2} height={(H - PY - 10) / 2} fill="#2979FF10" />
          <line x1={PX + (W - PX - 8) / 2} y1={8} x2={PX + (W - PX - 8) / 2} y2={H - PY} stroke="#3a3b40" strokeDasharray="4 4" />
          <line x1={PX} y1={8 + (H - PY - 10) / 2} x2={W - 8} y2={8 + (H - PY - 10) / 2} stroke="#3a3b40" strokeDasharray="4 4" />
          <line x1={PX} y1={H - PY} x2={PX} y2={4} stroke="#8f9bff" strokeWidth="1.6" /><polygon points={`${PX},2 ${PX - 3.5},10 ${PX + 3.5},10`} fill="#8f9bff" />
          <line x1={PX} y1={H - PY} x2={W - 4} y2={H - PY} stroke="#8f9bff" strokeWidth="1.6" /><polygon points={`${W - 2},${H - PY} ${W - 10},${H - PY - 3.5} ${W - 10},${H - PY + 3.5}`} fill="#8f9bff" />
          <text x={10} y={20} fontSize="10" fill="#c9c9ce" fontWeight="700">Viewer value</text>
          <text x={12} y={44} fontSize="8.6" fill="#9a9aa0">High ↑</text><text x={12} y={H - PY - 4} fontSize="8.6" fill="#9a9aa0">Low</text>
          <text x={PX + 4} y={H - 8} fontSize="9.5" fill="#c9c9ce" fontWeight="700">Technical feasibility</text>
          <text x={PX + 150} y={H - 8} fontSize="8.6" fill="#9a9aa0">Low → High</text>
          {OPPS.map((x, i) => { const [cx, cy] = pt(x.fx, x.vy); return <g key={x.name} onClick={() => setO(i)} style={{ cursor: "pointer" }}>
            <circle cx={cx} cy={cy} r={i === o ? 10 : 8} fill={x.kind === "sel" ? "url(#axg11)" : "transparent"} stroke={x.kind === "sel" ? "none" : x.kind === "defer" ? VI : CY} strokeWidth="1.8" strokeDasharray={x.kind === "sel" ? undefined : "3.5 2.5"} />
            <text x={cx} y={cy - 13} fontSize="8.8" fill={i === o ? "#fff" : "#c9c9ce"} textAnchor="middle" fontWeight={i === o ? 800 : 400}>{x.name}</text>
          </g>; })}
          <defs><linearGradient id="axg11" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={CY} /><stop offset="1" stopColor={VI} /></linearGradient></defs>
        </svg>
        <div style={{ borderLeft: `3px solid transparent`, borderImage: `${GRAD} 1`, background: "#0d0f16", padding: "9px 13px", marginTop: 8 }} aria-live="polite">
          <b>{cur.name}</b> — Viewer value: {cur.vy >= 0.5 ? "High" : "Low"} · Technical feasibility: {cur.fx >= 0.5 ? "High" : "Low"} · <b style={{ color: ACC }}>{OPP_STATUS[cur.kind]}</b>
        </div>
      </div>
    </div>
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
  return <Ax n="12" title="Product Principles" label="AurionX product principles — interactive rebuild of AurionX_12">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
      {PRINCIPLES_AX.map(([t, b, visual], i) => <button key={t} type="button" onClick={() => setP(i)} aria-pressed={i === p} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === p ? VI : "#23242a"}`, borderRadius: 11, padding: "11px 13px", cursor: "pointer", font: "inherit", color: "#e8e8ea", display: "grid", gridTemplateColumns: "1fr 128px", gap: 12 }}>
        <span><b style={{ fontSize: 15.5 }}>{t}</b><span style={{ display: "block", color: "#c9c9ce", marginTop: 4, fontSize: 12, lineHeight: 1.6 }}>{b}</span></span>
        <span>
          {i === 0 ? <Still h={64} tone="#233148"><span style={{ fontSize: 9 }}>“Find something inspiring for tonight”</span><br /><Wave color={CY} w={104} h={16} /></Still> : null}
          {i === 1 ? <Still h={64} tone="#2a2438"><span style={{ fontSize: 9 }}>◯ “Finding something inspiring… Matching to your mood”</span><br /><span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "1px 7px", fontSize: 8.6 }}>Press ◯ to cancel</span></Still> : null}
          {i === 2 ? <span style={{ display: "block", background: "#101623", border: "1px solid #26272c", borderRadius: 7, padding: "7px 9px", fontSize: 9.3, lineHeight: 1.6 }}>Understanding ✓<br />Mood: Inspiring · Type: Movie or Series<br />High confidence<br /><span style={{ display: "block", height: 5, background: "#26272c", borderRadius: 3, marginTop: 4 }}><span style={{ display: "block", width: "72%", height: "100%", background: GRAD, borderRadius: 3 }} /></span>Searching 72%</span> : null}
          {i === 3 ? <span style={{ display: "block", fontSize: 9.3 }}><span style={{ display: "flex", gap: 3, marginBottom: 5 }}>{["Arrival", "Night House", "Life of Pi", "Her"].map((x, k) => <span key={x} style={{ flex: 1, height: 40, borderRadius: 5, background: ["#233148", "#33241a", "#183038", "#2a2438"][k], border: "1px solid #26272c", padding: 3, fontSize: 7.6 }}>{x}</span>)}</span><span style={{ display: "flex", gap: 4 }}><span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "1px 7px" }}>↩ Undo</span><span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "1px 7px" }}>Refine</span><span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "1px 7px" }}>✕ Cancel</span></span></span> : null}
        </span>
      </button>)}
    </div>
    <div className="tks-detail" aria-live="polite">{PRINCIPLES_AX[p][2]}
      {p === 3 ? <span style={{ marginLeft: 10 }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setUndone(true)}>↩ Undo</button> {undone ? "Action undone — returned to playback instantly." : ""}</span> : null}
    </div>
  </Ax>;
}

/* ---------------- 13 — Product Scope ---------------- */
const SCOPE_TIERS = [
  ["Built or prototyped", "Add verified module or prototype", "⬡", CY],
  ["Designed but not fully implemented", "Add interaction-complete feature", "🧩", AZ],
  ["Future exploration", "Speculative extension", "🔭", VI],
];
export function AurionXScope() {
  const [confirmed, setConfirmed] = useState<Record<string, boolean>>({});
  return <Ax n="13" title="Product Scope" sub="Three-tier view of the AurionX portfolio. Status reflects verified evidence only." label="AurionX product scope — interactive rebuild of AurionX_13">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9 }}>{SCOPE_TIERS.map(([tier, slot, icon, color], ti) => <div key={tier as string} className="tks-card" style={{ borderTop: `3px solid ${color as string}` }}>
      <p style={{ marginTop: 0, display: "flex", gap: 9, alignItems: "center" }}><span aria-hidden="true" style={{ width: 27, height: 27, borderRadius: "50%", border: `2px solid ${color as string}`, color: color as string, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flex: "none" }}>{ti + 1}</span><b>{tier as string}</b></p>
      <span aria-hidden="true" style={{ display: "block", height: 2.5, background: color as string, borderRadius: 2, marginBottom: 9 }} />
      <div style={{ border: "1px dashed #3a3b3f", borderRadius: 8, padding: "12px 10px", textAlign: "center", color: "#c9c9ce" }}><span aria-hidden="true" style={{ display: "block", fontSize: 30, color: color as string, marginBottom: 5 }}>{icon as string}</span>{slot as string}</div>
      <p className="tks-kicker" style={{ margin: "10px 0 4px" }}>Candidate features (awaiting verification)</p>
      {["Scene Recall", "Five-Minute Cut", "Global Voice"].map((f) => { const key = `${ti}-${f}`; return <p key={f} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "5px 0", background: "#10131b", borderRadius: 7, padding: "4px 8px" }}><span>{f}</span><button type="button" className="tks-chip" aria-pressed={!!confirmed[key]} onClick={() => setConfirmed((c) => ({ ...c, [key]: !c[key] }))}>{confirmed[key] ? "Status: unconfirmed" : "Confirm status"}</button></p>; })}
    </div>)}</div>
    <p style={{ color: "#9a9aa0", margin: "10px 0 0" }}>Scope reflects verified evidence only — as printed, no candidate feature carries a confirmed status in any tier.</p>
  </Ax>;
}

/* ---------------- 14 — Product Architecture ---------------- */
const LAYERS: Array<[string, string, string[]]> = [
  ["Viewer layer", "#00E5FF", ["Voice", "Remote", "Playback overlay"]],
  ["Interaction layer", "#2979FF", ["Wake word", "Command interpretation", "Clarification", "Progress states"]],
  ["Intelligence layer", "#7B61FF", ["Scene retrieval", "Highlight generation", "Translation and dubbing"]],
  ["Media layer", "#FF8FB2", ["Video", "Audio", "Subtitles", "Metadata", "Timecodes"]],
  ["Platform layer", "#8F9BFF", ["Processing", "Storage", "Permissions", "Privacy", "Model services"]],
];
const LAYER_ICONS = ["👁", "🎙", "🧠", "🎬", "⬡"];
export function AurionXArchitecture() {
  const [l, setL] = useState(2);
  return <Ax n="14" title="AurionX Product Architecture" label="AurionX product architecture — interactive rebuild of AurionX_14">
    <div style={{ display: "grid", gap: 0 }}>
      {LAYERS.map(([name, color, mods], i) => <span key={name} style={{ display: "contents" }}>
        <button type="button" onClick={() => setL(i)} aria-pressed={i === l} style={{ display: "grid", gridTemplateColumns: "168px 1fr", textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === l ? color : "#23242a"}`, borderRadius: 10, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#e8e8ea", padding: 0 }}>
          <span style={{ padding: "10px 12px", borderRight: "1px solid #23242a", display: "flex", gap: 9, alignItems: "center" }}><span aria-hidden="true" style={{ fontSize: 18 }}>{LAYER_ICONS[i]}</span><b style={{ color, fontSize: 13 }}>{name}</b></span>
          <span style={{ padding: "8px 10px", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>{(mods as string[]).map((mod) => <span key={mod} style={{ border: "1px solid #2c2d33", background: "#10131b", borderRadius: 7, padding: "4px 9px", fontSize: 10.6 }}>◈ {mod}</span>)}</span>
        </button>
        {i < 4 ? <span aria-hidden="true" style={{ display: "flex", justifyContent: i % 2 ? "flex-start" : "flex-end", padding: "1px 60px", color: "#8f9bff", fontSize: 11 }}><span>↑</span><span style={{ marginLeft: 26 }}>↓</span></span> : null}
      </span>)}
    </div>
    <p style={{ margin: "8px 0 0", fontSize: 10.6, color: "#9a9aa0" }}>Legend as printed: ↑ Data flow (solid) · ↓ Control flow (dashed).</p>
  </Ax>;
}

/* ---------------- 15 — Information Architecture ---------------- */
const NAV_NODES = [
  ["Home", "Browse, continue watching, picks for you", "⌂"], ["Search", "Find movies, shows, people and more", "⌕"],
  ["Playback", "Watch content. Contextual anchor.", "▶"], ["History", "View watch history and activity", "↺"],
  ["Language settings", "Audio, subtitles and UI preferences", "🌐"], ["Privacy and data controls", "Privacy, data usage and permissions", "🛡"],
];
const OVERLAY_NODES = [
  ["Scene results", "Discover scenes, moments and matches related to what you're watching.", "🎬"],
  ["Highlight setup", "Choose highlight types, preferences and personalization.", "✦"],
  ["Processing", "View AI processing status, progress and completed results.", "⚙"],
];
export function AurionXIA() {
  const [sel, setSel] = useState("Playback");
  return <Ax n="15" title="Information Architecture" sub="AurionX TV OS Sitemap" label="AurionX information architecture — interactive rebuild of AurionX_15">
    <div style={{ display: "grid", gridTemplateColumns: "172px 1fr", gap: 14, alignItems: "start" }}>
      <div style={{ fontSize: 11.3, lineHeight: 1.65 }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Purpose</p>
        <p style={{ margin: "0 0 10px", color: "#d8d8dc" }}>Playback is the contextual anchor; the AurionX overlay provides intelligent controls that branch to feature destinations.</p>
        <p className="tks-kicker">Two layers</p>
        <p style={{ margin: "0 0 10px", color: "#d8d8dc" }}><span style={{ color: CY }}>●</span> Content Navigation — core TV browsing and settings<br /><span style={{ color: VI }}>●</span> AurionX Features — AI-powered scene understanding and personalization</p>
        <p className="tks-kicker">Navigation model</p>
        <p style={{ margin: 0, color: "#d8d8dc" }}>Global navigation is always one press away; the overlay never takes the viewer out of playback.</p>
      </div>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0, textAlign: "center" }}>GLOBAL NAVIGATION</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6 }}>
          {NAV_NODES.map(([name, desc, icon]) => <button key={name} type="button" onClick={() => setSel(name)} aria-pressed={sel === name} style={{ textAlign: "center", background: "#0d0f16", border: sel === name ? "1.5px solid transparent" : "1.5px solid #23242a", backgroundImage: sel === name ? `linear-gradient(#0d0f16,#0d0f16), ${GRAD}` : undefined, backgroundOrigin: "border-box", backgroundClip: sel === name ? "padding-box, border-box" : undefined, borderRadius: 9, padding: "6px 5px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
            <span aria-hidden="true" style={{ fontSize: 15, color: ACC }}>{icon}</span>
            <b style={{ display: "block", fontSize: 10.6, margin: "4px 0 2px" }}>{name}</b>
            <span style={{ display: "block", fontSize: 8.8, lineHeight: 1.45, color: "#9a9aa0" }}>{desc}</span>
          </button>)}
        </div>
        <p aria-hidden="true" style={{ textAlign: "center", color: ACC, margin: "4px 0", fontSize: 13 }}>↓&nbsp;&nbsp;↓&nbsp;&nbsp;↓</p>
        <div style={{ maxWidth: 340, margin: "0 auto", textAlign: "center", border: "1.5px solid transparent", background: `linear-gradient(#10131f,#10131f) padding-box, ${GRAD} border-box`, borderRadius: 10, padding: "7px 13px" }}>
          <b style={{ fontSize: 13.5 }}>AurionX overlay</b>
          <p style={{ margin: "2px 0 0", fontSize: 10.6, color: "#c9c9ce" }}>AI-powered insights and controls available during playback.</p>
        </div>
        <p aria-hidden="true" style={{ textAlign: "center", color: VI, margin: "4px 0", fontSize: 13 }}>↓&nbsp;&nbsp;↓&nbsp;&nbsp;↓</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
          {OVERLAY_NODES.map(([name, desc, icon]) => <button key={name} type="button" onClick={() => setSel(name)} aria-pressed={sel === name} style={{ textAlign: "center", background: "#171126", border: `1.5px solid ${sel === name ? VI : "#2c2344"}`, borderRadius: 9, padding: "8px 8px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
            <span aria-hidden="true" style={{ fontSize: 16, color: "#b18cff" }}>{icon}</span>
            <b style={{ display: "block", fontSize: 11.4, margin: "4px 0 2px" }}>{name}</b>
            <span style={{ display: "block", fontSize: 9.2, lineHeight: 1.5, color: "#b9b9be" }}>{desc}</span>
          </button>)}
        </div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid #23242a", borderRadius: 10, marginTop: 12, background: "#0a0c12", fontSize: 10.8 }}>
      <p style={{ margin: 0, padding: "9px 13px" }}><b>LEGEND</b> — solid line: primary navigation path · dotted line: overlay branch to a feature destination.</p>
      <p style={{ margin: 0, padding: "9px 13px", borderLeft: "1px solid #23242a" }}><b>REMOTE CONTROL GUIDE</b> — Navigate: Left/Right between items, Up/Down within lists · Select: open item or set a preference · Back: return to previous screen or close overlay. <span aria-hidden="true" style={{ color: ACC }}>✥ D-pad</span></p>
    </div>
  </Ax>;
}

/* ---------------- 16 — End-to-End Experience Map ---------------- */
const MAP_STEPS = [
  ["Discover", "Browse or search for something to watch.", "Foundation browse screen"],
  ["Play", "Start playback on any device.", "Film still — playback begins"],
  ["Invoke AurionX", "Summon the assistant in context.", "AurionX orb — “How can I help?”"],
  ["Describe request", "Speak or type what you want.", "“Show me the scene where Hari Seldon makes the deal with the Mule.” ∿∿"],
  ["Confirm interpretation", "AurionX clarifies the understanding.", "“You're asking for that scene. Is that right?” Yes / No"],
  ["Process", "AurionX finds and prepares the answer.", "Processing ring — searching episodes, transcripts, metadata"],
  ["Review result", "View the response in context.", "Scene found — Foundation S1 · E8 · 14:27"],
  ["Continue watching", "Stay in the flow seamlessly.", "Playback still — the story continues"],
];
const LANES: Array<[string, string, string, string, string]> = [
  ["Scene Recall", "#00E5FF", "Find a specific scene or moment.", "Scene identified — 14:27", "Jump to scene — 14:27 · Scene found: Foundation S1 · E8 · 14:27"],
  ["Five-Minute Cut", "#7B61FF", "Get a quick recap or highlight reel.", "Creating a 5-minute cut from this episode…", "Your 5-minute cut — 5:00"],
  ["Global Voice", "#B18CFF", "Ask across your entire library.", "Searching your library for matches… (+12 more)", "Top matches — Foundation · Dune · Silo"],
];
export function AurionXExperienceMap() {
  const [s, setS] = useState(4);
  const [lane, setLane] = useState(0);
  return <Ax n="16" title="End-to-End Experience Map" sub="One assistant. Multiple ways to watch." eyebrow="AURIONX EXPERIENCE MAP" label="AurionX experience map — interactive rebuild of AurionX_16">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 5 }}>
      {MAP_STEPS.map(([t, desc, card], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#e8e8ea", position: "relative" }}>
        {i < 7 ? <span aria-hidden="true" style={{ position: "absolute", right: -6, top: 26, color: ACC, zIndex: 2, fontSize: 11 }}>›</span> : null}
        <b style={{ display: "block", fontSize: 11.3 }}><span style={{ color: ACC }}>{i + 1}</span> {t}</b>
        <span style={{ display: "block", fontSize: 9.2, lineHeight: 1.5, color: "#9a9aa0", margin: "3px 0 5px", minHeight: 40 }}>{desc}</span>
        <Still h={46} tone={["#233148", "#2a2438", "#183038", "#26262e", "#33241a", "#1d2739", "#233148", "#2a2438"][i]}><span style={{ fontSize: 8.4, lineHeight: 1.45 }}>{card}</span></Still>
      </button>)}
    </div>
    <div style={{ display: "grid", gap: 7, marginTop: 13 }}>
      {LANES.map(([name, color, gloss, at5, at7], li) => <button key={name} type="button" onClick={() => setLane(li)} aria-pressed={lane === li} style={{ display: "grid", gridTemplateColumns: "138px 1fr 1fr", gap: 10, alignItems: "center", textAlign: "left", background: "#0d0f16", border: `1.5px solid ${lane === li ? color : "#23242a"}`, borderRadius: 10, padding: "8px 12px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
        <span><b style={{ color, fontSize: 12.6 }}>{name}</b><span style={{ display: "block", fontSize: 9.4, color: "#9a9aa0", marginTop: 2 }}>{gloss}</span></span>
        <span style={{ borderLeft: `2.5px solid ${color}`, paddingLeft: 10, fontSize: 10.8 }}><span style={{ color: "#9a9aa0", fontSize: 9.2 }}>STEP 5 · CONFIRM</span><br />{at5}</span>
        <span style={{ borderLeft: `2.5px solid ${color}`, paddingLeft: 10, fontSize: 10.8 }}><span style={{ color: "#9a9aa0", fontSize: 9.2 }}>STEP 7 · RESULT</span><br />{at7}</span>
      </button>)}
    </div>
  </Ax>;
}

/* ---------------- 19 — Scene Recall Scenario ---------------- */
const SCENARIO = [
  ["Viewer invokes AurionX while a fictional drama plays.", "TV: ECHOES OF BLOOD · S1 E6 · Reckonings — 24:18 / 54:27 · “Listening...” overlay at the foot of the screen."],
  ["The request appears as accurate live transcription in a subtle playback overlay.", "TV overlay: “Take me back to the scene where the hero confronts his brother in the kitchen.” — same frame, 24:18 / 54:27."],
  ["Playback jumps to the selected kitchen confrontation and shows a restrained timecode seek confirmation.", "TV: kitchen confrontation frame — 42:31 / 54:27 · “Moved to requested scene ✓”."],
];
export function AurionXScenario() {
  const [p, setP] = useState(2);
  // Pass 4: overlay method — each row's right side is the original
  // room photograph (viewer, lamp, console); the photographed TV is
  // covered by a live DOM television whose artwork is the printed
  // still and whose title/progress/overlay lines are DOM. Row 2 adds
  // the transcription bubble as DOM over the room, as printed.
  const tvArt = ["f19-face.jpg", "f19-face2.jpg", "f19-kitchen.jpg"];
  return <Ax n="19" title="" label="AurionX scene recall scenario — interactive rebuild of AurionX_19">
    <div style={{ display: "grid", gap: 8 }}>
      {SCENARIO.map(([cap, tv], i) => <button key={cap} type="button" onClick={() => setP(i)} aria-pressed={i === p} style={{ display: "grid", gridTemplateColumns: "178px 1fr", textAlign: "left", background: "#000", border: `1.5px solid ${i === p ? VI : "#23242a"}`, borderRadius: 10, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#e8e8ea", padding: 0 }}>
        <span style={{ padding: "12px 14px", background: "#000" }}>
          <span style={{ fontSize: 25, fontWeight: 800, color: ACC }}>{String(i + 1).padStart(2, "0")}</span>
          <span style={{ display: "block", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: 10.6, lineHeight: 1.55, marginTop: 5 }}>{cap}</span>
          <span aria-hidden="true" style={{ display: "block", width: 42, height: 3, background: GRAD, borderRadius: 2, marginTop: 8 }} />
        </span>
        <Stage bg={`${CROP}f19-room${i + 1}.jpg`} ratio="1432 / 313" label={`Printed scenario row ${i + 1}: viewer facing the television in the living room`}>
          <TvBox l={43.2} t={3} w={32.6} h={90.5} label={`Television in scenario row ${i + 1}`}>
            <img src={`${CROP}${tvArt[i]}`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,3,6,0.25), transparent 34%, transparent 68%, rgba(2,3,6,0.82))" }} aria-hidden="true" />
            <span style={{ position: "absolute", left: "4%", top: "6%", fontSize: 9.2, letterSpacing: "0.14em", textShadow: "0 1px 4px #000" }}>ECHOES<br />OF BLOOD</span>
            <span style={{ position: "absolute", left: "4%", top: "30%", fontSize: 8.2, color: "#c9c9ce" }}>S1 E6 · Reckonings</span>
            <span style={{ position: "absolute", left: "4%", right: "4%", bottom: "5%", fontFamily: '"IBM Plex Mono",monospace', fontSize: 8.4 }}>{i === 2 ? "42:31" : "24:18"}<span style={{ display: "inline-block", verticalAlign: "middle", height: 3, background: "#e8e8ea", borderRadius: 2, width: "58%", margin: "0 6px" }} />54:27</span>
            {i === 2 ? <span style={{ position: "absolute", left: "50%", bottom: "17%", transform: "translateX(-50%)", background: "#111d", borderRadius: 4, padding: "1px 8px", fontSize: 8.6, whiteSpace: "nowrap" }}>42:31 · Moved to requested scene ✓</span> : null}
          </TvBox>
          {i === 0 ? <span style={{ position: "absolute", right: "16%", bottom: "4%", background: "#111111ee", border: "1px solid #3a3b40", borderRadius: 6, padding: "2px 9px", fontSize: 8.8 }}>Listening…</span> : null}
          {i === 1 ? <span style={{ position: "absolute", left: "19%", bottom: "5%", maxWidth: "36%", background: "#111111f2", border: "1px solid #3a3b40", borderRadius: 7, padding: "4px 9px", fontSize: 8.8, lineHeight: 1.45 }}>🎙 “Take me back to the scene where the hero confronts his brother in the kitchen.”</span> : null}
        </Stage>
      </button>)}
    </div>
    <p aria-live="polite" style={{ margin: "9px 0 0", fontSize: 11.4, color: "#c9c9ce" }}>{SCENARIO[p][1]}</p>
  </Ax>;
}

/* ---------------- 20 — Scene Recall User Flow ---------------- */
const FLOW_STEPS = [
  ["Wake", "System detects wake word or button press.", "🎙"], ["Listen", "Capture audio until user stops speaking.", "👂"],
  ["Transcribe", "Convert speech to text.", "▤"], ["Extract meaning", "Identify entities, actions, and context.", "⬡"],
  ["Search scene index", "Query indexed scenes and metadata.", "⌕"], ["Rank candidates", "Score and rank most relevant scenes.", "↕"],
  ["Confirm or clarify", "Show top match and ask for confirmation.", "✓"], ["Seek to timecode", "Jump to the selected scene at the exact timecode.", "⏱"],
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
  const [fb, setFb] = useState(0);
  return <Ax n="20" title="Scene Recall User Flow" sub="From spoken intent to precise playback." serif label="AurionX scene recall user flow — interactive rebuild of AurionX_20">
    <div style={{ display: "grid", gridTemplateColumns: "168px 1fr", gap: 14, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 9 }}>
        <div style={{ border: "1px solid #23242a", borderRadius: 10, padding: "10px 12px", background: "#0d0f16" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Input modes</p>
          <p style={{ margin: "0 0 6px", fontSize: 11.3, lineHeight: 1.55 }}>🎙 <b>Voice</b> — speak naturally to recall a scene.</p>
          <p style={{ margin: 0, fontSize: 11.3, lineHeight: 1.55 }}>🎮 <b>Remote</b> — press and hold the voice button.</p>
        </div>
        <div style={{ border: "1px solid #23242a", borderRadius: 10, padding: "10px 12px", background: "#0d0f16", fontSize: 10.6, lineHeight: 1.7 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Legend</p>
          <p style={{ margin: 0 }}>▭ Process step<br />◆ Decision point<br />┄ Low-confidence path<br />→ Primary path<br />↩ Clarification–fallback loop</p>
        </div>
        <div style={{ border: "1px solid #23242a", borderRadius: 10, padding: "10px 12px", background: "#0d0f16", fontSize: 11, lineHeight: 1.6 }}>
          <b>Privacy first</b> — voice and text are processed securely on-device whenever possible.
        </div>
      </div>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 5 }}>
          {FLOW_STEPS.map(([t, desc, icon], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "center", background: "#0d0f16", border: `1.5px solid ${i === s ? VI : "#23242a"}`, borderRadius: 9, padding: "7px 5px", cursor: "pointer", font: "inherit", color: "#e8e8ea", position: "relative" }}>
            <span style={{ position: "absolute", top: -9, left: "50%", transform: "translateX(-50%)", width: 17, height: 17, borderRadius: "50%", background: i === s ? GRAD : "#23242a", color: "#fff", fontSize: 9.5, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
            <span aria-hidden="true" style={{ display: "block", fontSize: 15, marginTop: 6 }}>{icon}</span>
            <b style={{ display: "block", fontSize: 10, lineHeight: 1.3, margin: "3px 0" }}>{t}</b>
            <span style={{ display: "block", fontSize: 8.4, lineHeight: 1.45, color: "#9a9aa0" }}>{desc}</span>
            {i < 7 ? <span aria-hidden="true" style={{ position: "absolute", right: -7, top: "45%", color: AZ, zIndex: 2, fontSize: 11 }}>→</span> : null}
          </button>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginTop: 16 }}>
          {FLOW_FALLBACKS.map(([d], i) => <button key={d} type="button" onClick={() => setFb(i)} aria-pressed={i === fb} style={{ background: "transparent", border: "none", cursor: "pointer", font: "inherit", color: "#e8e8ea", padding: 0 }}>
            <span aria-hidden="true" style={{ display: "block", width: 34, height: 34, margin: "0 auto", transform: "rotate(45deg)", borderRadius: 6, background: i === fb ? VI : "#241a3d", border: `1.5px solid ${VI}` }} />
            <span style={{ display: "block", fontSize: 9.8, fontWeight: 700, marginTop: 6, lineHeight: 1.35 }}>{d}</span>
          </button>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginTop: 8 }}>
          {FLOW_FALLBACKS.map(([d, action, prompt], i) => <button key={d} type="button" onClick={() => setFb(i)} aria-pressed={i === fb} style={{ textAlign: "left", background: "#171126", border: `1.5px solid ${i === fb ? VI : "#2c2344"}`, borderRadius: 9, padding: "8px 9px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
            <b style={{ display: "block", fontSize: 10.6, color: "#b18cff" }}>{action}</b>
            <span style={{ display: "block", fontSize: 9, lineHeight: 1.5, color: "#c9c9ce", marginTop: 3 }}>{prompt}</span>
          </button>)}
        </div>
        <p style={{ margin: "10px 0 0", fontSize: 10.6, color: "#9a9aa0", borderTop: "1.5px dashed #3a3b40", paddingTop: 7 }}>↩ Dashed return loop as printed: every clarification returns to the flow — Designed for natural conversation: the system guides, clarifies, and gets you to the right scene.</p>
      </div>
    </div>
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
const ENTITIES: Array<[string, string, string]> = [["hero", "Characters", CY], ["confronts", "Actions", AZ], ["brother", "Characters", VI], ["kitchen", "Location", "#E8A33D"]];
export function AurionXSceneIndex() {
  const [ent, setEnt] = useState<string | null>("hero");
  const target = ENTITIES.find(([w]) => w === ent)?.[1];
  const entColor = ENTITIES.find(([w]) => w === ent)?.[2];
  return <Ax n="22" title="" label="AurionX scene index anatomy — interactive rebuild of AurionX_22">
    <p style={{ margin: "0 0 12px", display: "flex", justifyContent: "space-between", fontSize: 11.5, color: "#9a9aa0" }}><span style={{ letterSpacing: "0.3em" }}>A U R I O N X&nbsp;&nbsp;|&nbsp;&nbsp;SCENE INDEX ANATOMY</span><span>22 OF 41</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.55fr", gap: 14, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Natural-language request — click an entity</p>
        <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 27, lineHeight: 1.5, margin: 0 }}>the scene where the {ENTITIES.map(([w, , c], i) => <span key={w}>{i > 0 && i < 3 ? "" : ""}<button type="button" onClick={() => setEnt(w)} aria-pressed={ent === w} style={{ background: "none", border: "none", font: "inherit", cursor: "pointer", color: c, textDecoration: ent === w ? "underline" : "none", padding: 0 }}>{w}</button>{i === 1 ? " his " : i === 2 ? " in the " : " "}</span>)}</p>
        <div style={{ marginTop: 12, display: "grid", gap: 5 }} aria-live="polite">
          {ENTITIES.map(([w, field, c]) => <p key={w} style={{ margin: 0, fontSize: 11, opacity: ent === w ? 1 : 0.45 }}><span aria-hidden="true" style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: c, marginRight: 7 }} /><span style={{ color: c, fontWeight: 700 }}>{w}</span><span aria-hidden="true" style={{ color: "#55565a" }}> ———→ </span>{field}</p>)}
        </div>
      </div>
      <div className="tks-card"><p className="tks-kicker" style={{ marginTop: 0 }}>Scene record</p>
        <table className="tks-table"><tbody>{RECORD.map(([k, v, link]) => <tr key={k} style={target === k ? { background: "#1d2432" } : undefined}>
          <td style={{ whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: link ? (ENTITIES.find(([w]) => w === link)?.[2] ?? ACC) : "#3a3b40", marginRight: 7 }} />{k}</td>
          <td style={link ? { color: ENTITIES.find(([w]) => w === link)?.[2] } : undefined}>{v}</td></tr>)}</tbody></table></div>
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
  const rail = <span aria-hidden="true" style={{ display: "flex", flexDirection: "column", gap: 9, alignItems: "center", borderRight: "1px solid #23242a", paddingRight: 8, fontSize: 12, color: "#9a9aa0" }}><span>⌕</span><span>⌂</span><span>🎬</span><span>📺</span><span>⚙</span></span>;
  const tvCard = (x: (typeof ERROR_STATES)[number], i: number, extra: ReactNode) => <button key={x.n} type="button" onClick={() => setSt(i)} aria-pressed={i === st} style={{ textAlign: "left", background: "#0a0e18", border: `1.5px solid ${i === st ? VI : "#23242a"}`, borderRadius: 11, padding: "11px 12px", cursor: "pointer", font: "inherit", color: "#e8e8ea", display: "grid", gridTemplateColumns: "24px 1fr", gap: 10 }}>
    {rail}
    <span>
      <span style={{ color: "#8f9bff", fontSize: 11 }}>{x.n} · {x.name}</span>
      <b style={{ display: "block", fontWeight: 700, fontSize: 15.5, lineHeight: 1.35, margin: "5px 0 3px" }}>{x.title}</b>
      <span style={{ display: "block", color: "#c9c9ce", fontSize: 11.3, lineHeight: 1.55 }}>{x.sub}</span>
      {extra}
      <span style={{ display: "block", marginTop: 9 }}><span className="tks-kicker" style={{ display: "block", margin: "0 0 4px" }}>You can:</span><span style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>{x.actions.map((a, ai) => <span key={a} style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "2.5px 9px", fontSize: 9.8, background: ai === 0 ? GRAD : "transparent", color: ai === 0 ? "#fff" : "#e8e8ea", fontWeight: ai === 0 ? 700 : 400 }}>{a}</span>)}</span></span>
    </span>
  </button>;
  const candidates = <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginTop: 8 }}>
    <span style={{ border: `1.5px solid ${pick === "first" ? AZ : "#2c2d33"}`, borderRadius: 8, padding: "6px 8px", fontSize: 10.3 }}><b>First Confrontation</b><br />Episode 4 · 18:47 · Confidence <span style={{ color: ACC }}>92%</span>{pick === "first" ? " ✓" : ""}</span>
    <span style={{ border: `1.5px solid ${pick === "final" ? VI : "#2c2d33"}`, borderRadius: 8, padding: "6px 8px", fontSize: 10.3 }}><b>Final Confrontation</b><br />Episode 8 · 41:02 · Confidence <span style={{ color: ACC }}>87%</span>{pick === "final" ? " ✓" : ""}</span>
  </span>;
  return <Ax n="24" title="Error and Clarification States" sub="Clear feedback. Helpful next steps." label="AurionX error and clarification states — interactive rebuild of AurionX_23 (printed 24)">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
      {tvCard(ERROR_STATES[0], 0, candidates)}
      {tvCard(ERROR_STATES[1], 1, <span style={{ display: "block", marginTop: 8 }}><Wave color={CY} w={170} /></span>)}
      {tvCard(ERROR_STATES[2], 2, <span style={{ display: "block", marginTop: 8 }}><Still h={36} tone="#33241a"><b>AURION RISING</b> · Episode 5 · 33:12 remaining</Still></span>)}
      {tvCard(ERROR_STATES[3], 3, <span style={{ display: "block", marginTop: 8, fontSize: 20, color: ACC }}>⌕</span>)}
    </div>
    <div style={{ display: "flex", gap: 6, marginTop: 10, alignItems: "center" }} role="group" aria-label="Choose confrontation">
      <span style={{ fontSize: 11, color: "#9a9aa0" }}>Candidate choice (states 1–2):</span>
      <button type="button" className="tks-chip" aria-pressed={pick === "first"} onClick={() => setPick("first")}>First Confrontation · 92%</button>
      <button type="button" className="tks-chip" aria-pressed={pick === "final"} onClick={() => setPick("final")}>Final Confrontation · 87%</button>
      <span style={{ marginLeft: "auto", fontSize: 11, color: "#9a9aa0" }}><span style={{ letterSpacing: "0.3em" }}>A U R I O N X</span> · Voice or remote. You're in control.</span>
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
const PIPE_FILL: ReactNode[] = [
  <span key="f1"><Still h={32} tone="#233148">🎬 poster</Still><span style={{ display: "block", marginTop: 4, wordBreak: "break-all" }}>AurionX_S01E04_1080p.mov · 01:02:17 · 2.1 GB</span></span>,
  <span key="f2">{["00:00:00", "00:00:02", "00:00:05", "01:02:15"].map((t) => <span key={t} style={{ display: "block" }}><Still h={16} tone="#2a2438" />{t}</span>)}</span>,
  <span key="f3"><span style={{ display: "block" }}>00:00:02 <b>ARIA</b> “We're approaching the relay station.”</span><span style={{ display: "block" }}>00:00:05 <b>KIAN</b> “Systems look stable.”</span><span style={{ display: "block" }}>00:00:07 <b>ARIA</b> “Until they're not.”</span><span style={{ display: "block" }}>00:00:10 <b>KIAN</b> “Copy that.”</span></span>,
  <span key="f4">{[["Scene ID", "SCN_000245"], ["Start / End", "00:18:24:07 → 00:20:11:03"], ["Duration", "00:01:46:20"], ["Location", "Relay Station"], ["Characters", "Aria, Kian"], ["Keywords", "relay station, instability, approach, systems"]].map(([k, v]) => <span key={k} style={{ display: "block" }}><span style={{ color: "#9a9aa0" }}>{k}</span> {v}</span>)}</span>,
  <span key="f5">{[245, 246, 247, 248, 249].map((id, r) => <span key={id} style={{ display: "flex", gap: 3, alignItems: "center", marginBottom: 3 }}><span style={{ color: "#9a9aa0" }}>SCN_000{id}</span>{[0, 1, 2, 3, 4, 5].map((c) => <span key={c} style={{ width: 9, height: 9, borderRadius: 2, background: [CY, AZ, VI, "#FF8FB2", "#8F9BFF", ACC][(r + c) % 6], opacity: 0.55 + ((r * 7 + c * 13) % 45) / 100 }} />)}</span>)}</span>,
  <span key="f6"><svg viewBox="0 0 100 62" style={{ width: "100%" }} aria-hidden="true">{Array.from({ length: 26 }, (_, i) => <circle key={i} cx={8 + ((i * 37) % 84)} cy={6 + ((i * 23) % 50)} r={i === 7 ? 3.4 : 1.7} fill={i === 7 ? CY : i % 3 ? AZ : VI} opacity={i === 7 ? 1 : 0.65} />)}<circle cx={8 + ((7 * 37) % 84)} cy={6 + ((7 * 23) % 50)} r={7} fill="none" stroke={CY} strokeDasharray="2.5 2" /></svg><span style={{ display: "block" }}>3-D vector index</span></span>,
  <span key="f7">{[["00:18:24:07", "Best match"], ["00:42:11:12", "2nd best"], ["00:07:33:21", "3rd best"], ["00:55:09:18", "4th best"]].map(([t, r], k) => <span key={t} style={{ display: "block", marginBottom: 3 }}><Still h={15} tone={k === 0 ? "#183038" : "#1d1d24"} />{t} · <b style={{ color: k === 0 ? ACC : "#9a9aa0" }}>{r}</b></span>)}</span>,
  <span key="f8"><Still h={32} tone="#183038">▶ scene still</Still><span style={{ display: "block", marginTop: 4 }}>00:18:24:07 · Scene start</span><span aria-hidden="true" style={{ display: "block", height: 3.5, background: "#26272c", borderRadius: 2, marginTop: 3 }}><span style={{ display: "block", width: "30%", height: "100%", background: GRAD, borderRadius: 2 }} /></span><span style={{ display: "block", marginTop: 3 }}>⏮ ▶ ⏭ transport</span></span>,
];
export function AurionXTechnicalPipeline() {
  const [s, setS] = useState(3);
  return <Ax n="23" title="Scene Recall Technical Pipeline" sub="Proposed pipeline — replace with verified implementation stages (as printed)." label="AurionX scene recall technical pipeline — interactive rebuild of AurionX_24 (printed 23)">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 5 }}>
      {PIPELINE.map(([t], i) => <span key={t} style={{ textAlign: "center" }}>
        <span aria-hidden="true" style={{ width: 24, height: 24, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, background: i === s ? GRAD : "#1d1e24", border: `1.5px solid ${i === s ? VI : "#3a3b40"}`, color: "#fff" }}>{i + 1}</span>
        <span aria-hidden="true" style={{ display: "block", borderTop: "2px solid #2c2d33", marginTop: -12, marginBottom: 12 }} />
      </span>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 5, marginTop: 2 }}>
      {PIPELINE.map(([t], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === s ? VI : "#23242a"}`, borderRadius: 9, padding: "7px 8px", cursor: "pointer", font: "inherit", color: "#e8e8ea", fontSize: 8.9, lineHeight: 1.55 }}>
        <b style={{ display: "block", fontSize: 10.3, lineHeight: 1.3, marginBottom: 4 }}>{t}</b>
        {PIPE_FILL[i]}
      </button>)}
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 12.6 }} aria-live="polite"><b>{PIPELINE[s][0]}</b> — {PIPELINE[s][1]}</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: 7, marginTop: 9 }}>
      <p style={{ margin: 0, border: "1.5px dashed #3a3b40", borderRadius: 9, padding: "8px 11px", fontSize: 10.8 }}><b>Structured metadata store</b> — scene and transcript metadata</p>
      <p style={{ margin: 0, border: "1.5px dashed #3a3b40", borderRadius: 9, padding: "8px 11px", fontSize: 10.8 }}><b>Vector index store</b> — semantic vectors for all scenes</p>
      <p style={{ margin: 0, border: `1.5px solid ${AZ}`, borderRadius: 9, padding: "8px 11px", fontSize: 10.8 }}>↑ <b>Natural-language request</b> — “Find the scene where Aria and Kian discuss the instability of the relay station.”</p>
    </div>
  </Ax>;
}

/* ---------------- 25 — Five-Minute Cut Scenario ---------------- */
const CUT_SEGMENTS = [["A World in Balance", "00:45"], ["The Jump", "01:05"], ["Into the Unknown", "01:10"], ["The Choice", "01:00"], ["What's at Stake", "01:00"]];
export function AurionXCutScenario() {
  const [watch, setWatch] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [seg, setSeg] = useState(0);
  // Pass 4: overlay method — both halves are the original room
  // photographs (viewer watching each screen); the photographed TVs
  // are covered by live DOM screens (movie page left, five-minute-cut
  // UI right) and the printed thought bubbles are live DOM bubbles
  // positioned over the photographed ones.
  return <Ax n="25" title="Five-Minute Cut Scenario" label="AurionX five-minute cut scenario — interactive rebuild of AurionX_25">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
      <Stage bg={`${CROP}f25-roomL.jpg`} ratio="840 / 806" label="Viewer facing the Eclipse Horizon movie page on the television">
        <span style={{ position: "absolute", left: "63%", top: "6.5%", width: "31%", background: "#101014", border: "1.5px solid #55565e", borderRadius: "50%", padding: "4.5% 3%", textAlign: "center", fontSize: 9.6, lineHeight: 1.4 }}>Two hours is a big commitment.</span>
        <span style={{ position: "absolute", left: "72%", top: "21%", width: "22%", background: "#101014", border: "1.5px solid #55565e", borderRadius: "50%", padding: "3.5% 2%", textAlign: "center", fontSize: 9.6 }}>Will I like it?</span>
        <TvBox l={6.5} t={11.8} w={58.6} h={49.8} label="Television — Eclipse Horizon movie page">
          <span style={{ position: "absolute", inset: 0, padding: "4%", display: "block", background: "#07090f" }}>
            <span style={{ display: "grid", gridTemplateColumns: "34% 1fr", gap: 7 }}>
              <img src={`${CROP}f25-eclipse.jpg`} alt="" style={{ width: "100%", height: 62, objectFit: "cover", borderRadius: 3, display: "block" }} />
              <span><b style={{ fontSize: 11.5, letterSpacing: "0.04em" }}>ECLIPSE HORIZON</b><span style={{ display: "block", fontSize: 8.4, color: "#c9c9ce", marginTop: 2 }}>Sci-Fi · Adventure · Drama<br />PG-13 · 2h 04m</span><span style={{ display: "block", fontSize: 8.4, lineHeight: 1.45, color: "#c9c9ce", marginTop: 3 }}>When a routine jump goes wrong, a crew finds themselves on the edge of the unknown — and a choice that could reset everything.</span>
              <span style={{ display: "flex", gap: 4, marginTop: 5 }}><span className="tks-btn" style={{ fontSize: 8.8, padding: "2px 8px" }}>▶ Play</span><button type="button" className="tks-btn tks-btn--ghost" style={{ fontSize: 8.8, padding: "2px 8px" }} aria-pressed={watch} onClick={() => setWatch((v) => !v)}>{watch ? "✓ Watchlisted" : "+ Watchlist"}</button></span></span>
            </span>
            <span style={{ display: "block", fontSize: 8.4, color: "#9a9aa0", margin: "6px 0 3px" }}>You might also like</span>
            <img src={`${CROP}f25-posters.jpg`} alt="" style={{ width: "100%", height: 26, objectFit: "cover", borderRadius: 3, display: "block" }} />
            <span style={{ display: "block", fontSize: 7.8, color: "#c9c9ce", marginTop: 2 }}>Beyond Orbit · Errant Signal · The Long Awake · Silent Frontier</span>
          </span>
        </TvBox>
      </Stage>
      <Stage bg={`${CROP}f25-roomR.jpg`} ratio="840 / 806" label="Viewer facing the AurionX five-minute-cut screen on the television">
        <TvBox l={6.8} t={11.8} w={62.3} h={64.2} label="Television — Your Five-Minute Cut">
          <span style={{ position: "absolute", inset: 0, padding: "4%", display: "block", background: "#07090f" }}>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <span><span style={{ fontWeight: 800, fontSize: 11, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>AurionX</span><b style={{ display: "block", fontSize: 11.5, marginTop: 4 }}>Your Five-Minute Cut</b><span style={{ display: "block", fontSize: 8.4, lineHeight: 1.45, color: "#c9c9ce", marginTop: 2, maxWidth: 150 }}>A personal highlight reel crafted from key moments and themes to help you decide.</span>
              <span style={{ display: "flex", gap: 4, marginTop: 5, alignItems: "center" }}><button type="button" className="tks-btn" style={{ fontSize: 8.8, padding: "2px 8px" }} aria-pressed={playing} onClick={() => setPlaying((v) => !v)}>{playing ? "⏸ Playing…" : "▶ Play Cut"}</button><span style={{ fontSize: 8.2, color: "#c9c9ce" }}>🛡 Spoilers are protected</span></span></span>
              <img src={`${CROP}f25-ship.jpg`} alt="" style={{ width: "42%", height: 74, objectFit: "cover", borderRadius: 3, display: "block" }} />
            </span>
            <img src={`${CROP}f25-segments.jpg`} alt="" style={{ width: "100%", height: 30, objectFit: "cover", borderRadius: 3, display: "block", marginTop: 6 }} />
            <span style={{ display: "flex", gap: 3, marginTop: 4 }} role="group" aria-label="Cut segments">{CUT_SEGMENTS.map(([t, d], i) => <button key={t} type="button" aria-pressed={i === seg} onClick={() => setSeg(i)} style={{ flex: 1, background: i === seg ? "#1b2030" : "transparent", border: `1px solid ${i === seg ? VI : "#2c2e35"}`, borderRadius: 4, color: "#e8e8ea", font: "inherit", fontSize: 7.8, padding: "2px 3px", cursor: "pointer", textAlign: "left" }}><b>{String(i + 1).padStart(2, "0")} {t}</b><br />{d} 🛡</button>)}</span>
            <span style={{ display: "block", fontSize: 8.2, color: "#9a9aa0", marginTop: 4 }}>🛡 Spoiler protection is on. Story-critical endings and key twists are hidden.</span>
          </span>
        </TvBox>
      </Stage>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 11.4 }} aria-live="polite">Total 05:00 — selected segment: {CUT_SEGMENTS[seg][0]} ({CUT_SEGMENTS[seg][1]}).{watch ? " Eclipse Horizon is on the watchlist." : ""}</p>
    <p style={{ margin: "10px 0 0", background: "#0d0f16", border: "1px solid #23242a", borderRadius: 9, padding: "9px 14px", textAlign: "center", fontSize: 13.5 }}>A trailer sells the movie. A highlight cut helps the viewer decide.</p>
  </Ax>;
}

/* ---------------- 27 — Highlight Selection Storyboard ---------------- */
const SIGNALS = ["Narrative importance", "Dialogue relevance", "Audio intensity", "Character introduction", "Visual novelty", "Emotional peaks"];
const NEG_SIGNALS = ["Redundancy reduction", "Spoiler penalty"];
const SOURCE_SCENES = ["00:00", "02:15", "04:30", "06:45", "09:10", "11:40", "14:05", "16:20", "18:35", "20:50", "23:15", "25:30", "27:45", "30:05", "32:20", "34:40", "39:15", "41:30", "43:30"];
const PRINTED_SELECTED = ["00:00", "04:30", "09:10", "14:05", "16:20", "20:50", "25:30", "32:20", "34:40", "39:15", "41:30"];
const barH = (r: number, c: number) => 22 + ((r * 31 + c * 17 + ((r + c) % 3) * 11) % 68); // deterministic printed-style bar heights
export function AurionXStoryboard() {
  const [selected, setSelected] = useState<string[]>(PRINTED_SELECTED);
  const toggle = (t: string) => setSelected((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t].sort((a, b) => SOURCE_SCENES.indexOf(a) - SOURCE_SCENES.indexOf(b))));
  const cols = `92px repeat(${SOURCE_SCENES.length}, 1fr)`;
  return <Ax n="27" title="Highlight Selection Storyboard" sub="From one complete film, the system evaluates every scene using multiple signals. Positive signals lift scenes; constraints remove or suppress others. The result is a focused preview." label="AurionX highlight storyboard — interactive rebuild of AurionX_27">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 118px", gap: 12, alignItems: "start" }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Source filmstrip — click a scene to select / suppress it</p>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 2.5, alignItems: "end" }}>
          <span />
          {SOURCE_SCENES.map((t, c) => <button key={t} type="button" onClick={() => toggle(t)} aria-pressed={selected.includes(t)} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
            <Still h={20} tone={selected.includes(t) ? "#233148" : "#14161c"} />
            <span style={{ display: "block", fontSize: 7.6, marginTop: 2, color: selected.includes(t) ? "#fff" : "#77787e" }}>{String(c + 1).padStart(2, "0")}<br />{t}</span>
          </button>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 2.5, marginTop: 7 }}>
          {[...SIGNALS, ...NEG_SIGNALS].map((sig, r) => <span key={sig} style={{ display: "contents" }}>
            <span style={{ fontSize: 8.8, lineHeight: 1.3, alignSelf: "center", color: r >= 6 ? "#b18cff" : ACC }}>{r >= 6 ? "▽" : "△"} {sig}</span>
            {SOURCE_SCENES.map((t, c) => <span key={t} style={{ display: "flex", alignItems: r >= 6 ? "flex-start" : "flex-end", height: 30, borderBottom: r >= 6 ? "none" : "1px solid #1d1e24", borderTop: r >= 6 ? "1px solid #1d1e24" : "none" }}>
              <span style={{ display: "block", width: "100%", height: `${r >= 6 ? 100 - barH(r, c) + 30 : barH(r, c)}%`, maxHeight: "100%", background: r >= 6 ? VI : AZ, opacity: selected.includes(t) ? 0.95 : 0.4, borderRadius: 1.5 }} />
            </span>)}
          </span>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 2.5, marginTop: 5, alignItems: "center" }}>
          <span style={{ fontSize: 8.8, color: "#9a9aa0" }}>Selection result</span>
          {SOURCE_SCENES.map((t) => <span key={t} style={{ textAlign: "center", fontSize: 11.5, color: selected.includes(t) ? "#2FBF71" : "#55565a" }}>{selected.includes(t) ? "↓" : "✕"}</span>)}
        </div>
        <p className="tks-kicker" style={{ marginTop: 10 }}>Preview filmstrip — selected highlights in story order</p>
        <div style={{ display: "flex", gap: 3, alignItems: "center", flexWrap: "wrap" }}>
          {selected.map((t) => <span key={t} style={{ textAlign: "center" }}><Still h={22} tone="#233148" /><span style={{ display: "block", fontSize: 7.8, marginTop: 2 }}>{t}</span></span>)}
          <span style={{ fontSize: 10.6, color: "#c9c9ce", marginLeft: 6 }}>⟵ Preview runtime (example) 02:18 ⟶ (as printed for the original selection of {PRINTED_SELECTED.length} scenes)</span>
        </div>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {[["① INPUT", "The full movie is split into scenes."], ["② AI EVALUATION", "Each scene is evaluated across multiple signals."], ["③ SELECTION", "Remaining scenes are chosen in story order."], ["④ PREVIEW OUTPUT", "A focused preview is assembled."]].map(([t, b]) => <p key={t} style={{ margin: 0, borderLeft: `3px solid ${ACC}`, paddingLeft: 9, fontSize: 10.4, lineHeight: 1.55 }}><b style={{ color: ACC }}>{t}</b><br />{b}</p>)}
        <div style={{ border: "1px solid #23242a", borderRadius: 9, padding: "8px 10px", fontSize: 9.6, lineHeight: 1.65, background: "#0d0f16" }}><b>HOW TO READ</b><br />↑ positive signal increases selection likelihood<br />↓ negative signal decreases it<br /><span style={{ color: "#2FBF71" }}>↓</span> scene selected · ✕ scene removed or suppressed</div>
      </div>
    </div>
  </Ax>;
}

/* ---------------- File 28 (printed 29) — Generated Output Comparison ---------------- */
const CHAPTERS = ["Prologue", "Inciting Incident", "Rising Stakes", "Midpoint", "Complications", "Crisis", "Resolution"];
const OPERATIONS = [
  ["Selected scenes", "High-value moments that move the story forward.", "✓"],
  ["Removed repetition", "Eliminated redundant scenes and reiterated dialogue.", "⊖"],
  ["Narrative ordering", "Rearranged for causality and emotional flow.", "↕"],
  ["Transition points", "Added concise transitions for coherence.", "◆"],
];
export function AurionXOutputComparison() {
  const [op, setOp] = useState(0);
  const [ch, setCh] = useState(3);
  const segNames = ["Prologue", "Inciting Incident", "Midpoint", "Crisis", "Resolution"];
  return <Ax n="29" title="Generated Output Comparison" sub="Long-form source distilled into a focused, coherent cut." light center label="AurionX generated output comparison — interactive rebuild of AurionX_28 (printed 29)">
    <p style={{ margin: "0 0 5px", display: "flex", justifyContent: "space-between", fontSize: 12 }}><span><b>Original — 118 minutes</b> · Full length with multiple repetitions and subplots</span><span style={{ color: "#9a9aa0" }}>AURIONX | FILM INTELLIGENCE</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 3 }}>
      {CHAPTERS.map((c, i) => <button key={c} type="button" onClick={() => setCh(i)} aria-pressed={i === ch} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", font: "inherit", color: "#e8e8ea", textAlign: "left" }}>
        <span style={{ display: "block", fontSize: 9.6, color: i === ch ? "#fff" : "#9a9aa0", marginBottom: 3 }}>Chapter {i + 1} · {c}</span>
        {/* Pass 4: chapter strips are the printed film stills (pure
            imagery crops from the original's strip). */}
        <Img src={`${CROP}f29-ch${i + 1}.jpg`} h={30} alt={`Printed still strip for chapter ${i + 1}`} />
      </button>)}
    </div>
    <div aria-hidden="true" style={{ display: "flex", gap: 1.5, marginTop: 4, height: 13 }}>{Array.from({ length: 72 }, (_, i) => <span key={i} style={{ flex: 1, background: (i * 7) % 5 < 2 ? "#3d4b66" : "#232a3a", height: `${4 + ((i * 13) % 9)}px`, alignSelf: "flex-end" }} />)}</div>
    <p style={{ margin: "3px 0 0", display: "flex", justifyContent: "space-between", fontSize: 10, color: "#9a9aa0" }}><span>0:00</span><span style={{ letterSpacing: "0.1em" }}>MANY SCENES • MULTIPLE REPETITIONS • PARALLEL SUBPLOTS</span><span>118:00</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, margin: "13px 0" }}>
      {OPERATIONS.map(([t, b, icon], i) => <button key={t} type="button" onClick={() => setOp(i)} aria-pressed={i === op} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === op ? VI : "#23242a"}`, borderRadius: 10, padding: "9px 11px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
        <span aria-hidden="true" style={{ fontSize: 16, color: ACC }}>{icon}</span> <b style={{ fontSize: 12.4 }}>{t}</b>
        <span style={{ display: "block", fontSize: 10.4, lineHeight: 1.55, color: "#b9b9be", marginTop: 3 }}>{b}</span>
      </button>)}
    </div>
    <p style={{ margin: "0 0 5px", fontSize: 12 }}><b>Generated cut — 5 minutes</b> · AI-selected scenes, reordered for clarity and narrative impact</p>
    <div style={{ display: "flex", gap: 0, alignItems: "stretch" }}>
      {segNames.map((nm, i) => <span key={nm} style={{ display: "contents" }}>
        <span style={{ flex: [1.2, 1, 1.1, 0.9, 1][i] }}><Img src={`${CROP}f29-seg${i + 1}.jpg`} h={30} alt={`Printed still for generated-cut segment ${nm}`} /><span style={{ display: "block", fontSize: 9.2, marginTop: 2, color: "#c9c9ce" }}>{nm}</span></span>
        {i < 4 ? <span aria-hidden="true" style={{ alignSelf: "center", color: VI, fontSize: 13, padding: "0 2px" }}>◆</span> : null}
      </span>)}
    </div>
    <p style={{ margin: "3px 0 0", display: "flex", justifyContent: "space-between", fontSize: 10, color: "#9a9aa0" }}><span>0:00</span><span style={{ letterSpacing: "0.1em" }}>DISTILLED • COHERENT • IMPACTFUL</span><span>5:00</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 13, border: "1px solid #23242a", borderRadius: 10, padding: "9px 12px", background: "#0a0c12" }}>
      <p style={{ margin: 0, border: "1.5px dashed #3a3b40", borderRadius: 8, padding: "8px 11px", fontSize: 11 }}>🕐 Measured render duration: <span style={{ color: ACC }}>add verified result</span></p>
      <p style={{ margin: 0, border: "1.5px dashed #3a3b40", borderRadius: 8, padding: "8px 11px", fontSize: 11 }}>▶ Playable demo: <span style={{ color: "#b18cff" }}>add verified link or QR</span></p>
    </div>
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
const PRINCIPLES30: Array<[string, string, string]> = [
  ["👁", "Always clear", "See what's happening and why."],
  ["↩", "Always reversible", "You're never locked in."],
  ["🎮", "Always in control", "Pause, cancel, or continue on your terms."],
];
export function AurionXProgressStates() {
  const [s, setS] = useState(1);
  const [bg, setBg] = useState(false);
  const ring = (i: number) => <span aria-hidden="true" style={{ width: 54, height: 54, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: "#fff", background: `conic-gradient(from -90deg, ${CY}, ${VI} ${i === 4 ? 100 : 25 + i * 20}%, #1d1e24 ${i === 4 ? 100 : 25 + i * 20}%)`, boxShadow: i === s ? `0 0 14px ${VI}66` : undefined }}>
    <span style={{ width: 42, height: 42, borderRadius: "50%", background: "#0d0f16", display: "flex", alignItems: "center", justifyContent: "center" }}>{i === 0 ? "✓" : i === 4 ? "▶" : "◯"}</span></span>;
  return <Ax n="30" title="" label="AurionX progress and control states — interactive rebuild of AurionX_29 (printed 30)">
    <div style={{ display: "grid", gridTemplateColumns: "216px 1fr", gap: 16, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 29, lineHeight: 1.3, margin: "0 0 6px" }}>Progress and<br />Control States</h3>
        <span aria-hidden="true" style={{ display: "block", width: 110, height: 3, background: GRAD, borderRadius: 2, marginBottom: 9 }} />
        <p style={{ fontSize: 12.2, lineHeight: 1.65, color: "#d8d8dc", margin: "0 0 13px" }}>Every long-running action is transparent, reversible, and under your control.</p>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Design principles</p>
        {PRINCIPLES30.map(([icon, h, g]) => <p key={h} style={{ margin: 0, padding: "8px 0", borderTop: "1px solid #23242a", fontSize: 11.6, lineHeight: 1.55 }}><span aria-hidden="true" style={{ marginRight: 7 }}>{icon}</span><b>{h}</b><br /><span style={{ color: "#9a9aa0" }}>{g}</span></p>)}
      </div>
      <div className="tks-card">
        <p style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}><span><b>Processing</b> · AurionX is preparing your preview.</span><button type="button" className="tks-btn tks-btn--ghost" onClick={() => { setS(0); setBg(false); }}>Cancel</button></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6 }}>
          {PROGRESS.map(([t, b], i) => <div key={t} style={{ textAlign: "center", position: "relative" }}>
            {i < 4 ? <span aria-hidden="true" style={{ position: "absolute", right: -6, top: 22, color: ACC, zIndex: 2 }}>›</span> : null}
            <button type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ width: "100%", background: i === s ? "#12141f" : "transparent", border: `1.5px solid ${i === s ? VI : "#23242a"}`, borderRadius: 10, padding: "9px 7px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
              {ring(i)}
              <b style={{ display: "block", fontSize: 11, margin: "7px 0 3px" }}>{String(i + 1).padStart(2, "0")} {t}</b>
              <span style={{ display: "block", color: "#c9c9ce", fontSize: 9.6, lineHeight: 1.5 }}>{b}</span>
              {i < 4 ? <span style={{ display: "inline-block", marginTop: 7, border: "1px solid #3a3b40", borderRadius: 999, padding: "2px 10px", fontSize: 9.6 }}>Cancel</span> : <span style={{ display: "inline-block", marginTop: 7, background: GRAD, borderRadius: 999, padding: "2.5px 12px", fontSize: 9.6, fontWeight: 700, color: "#fff" }}>▶ Play preview</span>}
            </button>
          </div>)}
        </div>
        <p style={{ textAlign: "center", color: "#9a9aa0", margin: "11px 0 7px" }}>— or —</p>
        <p style={{ margin: 0, display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }} aria-live="polite">
          {s < 4 ? <button type="button" className="tks-btn" onClick={() => setS((v) => Math.min(4, v + 1))}>Advance state →</button> : null}
          <button type="button" className="tks-btn tks-btn--ghost" aria-pressed={bg} onClick={() => setBg((v) => !v)}>Continue in background</button>
          <button type="button" className="tks-btn tks-btn--ghost" onClick={() => setS(0)}>Retry</button>
          {bg ? <span style={{ alignSelf: "center" }}>Running in background — you can keep watching.</span> : null}
        </p>
      </div>
    </div>
  </Ax>;
}

/* ---------------- File 30 (printed 31) — Global Voice Before and After ---------------- */
export function AurionXVoiceBeforeAfter() {
  const [pos, setPos] = useState(50);
  // Pass 3: the two stills are the real crops from the original (faces
  // only — the printed subtitles are NOT in the crops; they stay DOM
  // chips over the image, as laid out on the slide).
  const stillCard = (label: string, lang: string, sub: string, img: string) => <div>
    <p style={{ margin: "0 0 5px", fontSize: 13.5 }}><b>{label}</b> <span style={{ color: "#9a9aa0", fontSize: 11.5 }}>{lang}</span></p>
    <div style={{ border: "1px solid #26272c", borderRadius: 10, overflow: "hidden" }}>
      <Img src={img} h={128} alt={`${label} film still — same scene, same timecode`}><span style={{ background: "#111", padding: "2px 9px", fontSize: 10.6, color: "#fff", position: "absolute", left: "50%", bottom: 8, transform: "translateX(-50%)", whiteSpace: "nowrap", borderRadius: 4 }}>{sub}</span></Img>
    </div>
    <p style={{ textAlign: "center", fontFamily: '"IBM Plex Mono",monospace', margin: "5px 0 0", fontSize: 12.5 }}>00:12:47:09</p>
  </div>;
  return <Ax n="31" title="" label="AurionX global voice before and after — interactive rebuild of AurionX_30 (printed 31)">
    <p style={{ margin: "0 0 4px", display: "flex", justifyContent: "space-between", fontSize: 10.6, color: "#9a9aa0" }}><span>AurionX Portfolio | Image 31 of 41</span><span>Global Voice Before and After</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 14, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 34, margin: "0 0 5px" }}>Global Voice Before and After</h3>
        <p className="tks-lede" style={{ margin: 0 }}>Same scene. Same timecode. Different experience.</p>
      </div>
      <p style={{ margin: 0, textAlign: "right" }}><span style={{ display: "block", fontSize: 10.6, color: "#9a9aa0", letterSpacing: "0.08em" }}>TARGET LANGUAGE</span><span style={{ fontSize: 25, fontWeight: 800, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>English</span></p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
      {stillCard("Original", "Indonesian speech", "Kamu pergi tanpa pamit?", `${CROP}f30-still-a.jpg`)}
      {stillCard("Localized", "English (dubbed)", "You left without saying goodbye?", `${CROP}f30-still-b.jpg`)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.15fr", gap: 14, marginTop: 10, fontSize: 12 }}>
      <p style={{ margin: 0 }}><span style={{ color: "#9a9aa0", fontSize: 10.6 }}>ORIGINAL TRANSCRIPT (INDONESIAN)</span><br />Kamu pergi tanpa pamit?</p>
      <p style={{ margin: 0 }}><span style={{ color: "#9a9aa0", fontSize: 10.6 }}>TRANSLATED TRANSCRIPT (ENGLISH)</span><br />You left without saying goodbye?</p>
      <p style={{ margin: 0 }}><span style={{ fontSize: 10.6, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontWeight: 800 }}>LIP-SYNC STATUS / PREVIEW QUALITY</span><br /><span style={{ color: "#c9c9ce" }}>Lip-sync optimized for timing and naturalness. Not a final representation of performance.</span></p>
    </div>
    <div className="tks-card" style={{ marginTop: 11 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Waveform comparison</p>
      <div style={{ position: "relative" }}>
        {/* Pass 3: printed waveforms are dense vertical-bar waveforms,
            not sine curves — redrawn as bars (same deterministic data). */}
        <svg viewBox="0 0 300 96" style={{ width: "100%", display: "block" }} role="img" aria-label="Waveform comparison: original Indonesian above, localized English below, sharing one playhead">
          {Array.from({ length: 100 }, (_, i) => { const h = 5 + Math.abs(Math.sin(i * 0.9 + 1) * Math.sin(i * 0.23)) * 36; return <rect key={`a${i}`} x={i * 3} y={22 - h / 2} width={1.7} height={h} fill="#2DD4BF" opacity={0.85} />; })}
          {Array.from({ length: 100 }, (_, i) => { const h = 5 + Math.abs(Math.sin(i * 0.9 + 4) * Math.sin(i * 0.21 + 1)) * 36; return <rect key={`b${i}`} x={i * 3} y={72 - h / 2} width={1.7} height={h} fill={VI} opacity={0.9} />; })}
          <line x1={(pos / 100) * 300} y1={0} x2={(pos / 100) * 300} y2={96} stroke="#fff" strokeWidth="1.4" />
          <polygon points={`${(pos / 100) * 300},0 ${(pos / 100) * 300 - 4},-0 ${(pos / 100) * 300 + 4},0 ${(pos / 100) * 300},6`} fill="#fff" />
        </svg>
        <span style={{ position: "absolute", left: 2, top: 0, fontSize: 9.6, color: "#2DD4BF" }}>● Original (Indonesian)</span>
        <span style={{ position: "absolute", left: 2, top: 50, fontSize: 9.6, color: "#b18cff" }}>● Localized (English)</span>
      </div>
      <label style={{ display: "flex", gap: 9, alignItems: "center", marginTop: 7 }}>Playhead <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Waveform playhead" style={{ flex: 1, accentColor: AZ }} /> <span style={{ fontFamily: '"IBM Plex Mono",monospace' }}>00:12:47:09</span></label>
      <p style={{ margin: "6px 0 0", color: "#c9c9ce", fontSize: 11.6 }}>Identical timecode. Different language. Clear context. Supporting creators in reaching more audiences with clarity, empathy, and precision.</p>
    </div>
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
const SETUP_TITLES = ["Select target language", "Choose delivery mode", "Choose voice experience", "Confirm and review"];
export function AurionXLanguageSetup() {
  const [lang, setLang] = useState(0);
  const [mode, setMode] = useState(0);
  const [voice, setVoice] = useState(0);
  const [done, setDone] = useState(false);
  const [focusStep, setFocusStep] = useState(0);
  const tvPanel = (idx: number, children: ReactNode) => <div onClick={() => setFocusStep(idx)} style={{ border: `1.5px solid ${focusStep === idx ? VI : "#26272c"}`, borderRadius: 11, overflow: "hidden", background: "#0a0e18", cursor: "pointer" }}>
    <div style={{ background: "linear-gradient(120deg,#1a2436,#241a33)", padding: "8px 11px 6px" }}>
      <p style={{ margin: 0, fontSize: 11.6 }}><b>{idx + 1} · {SETUP_TITLES[idx]}</b></p>
    </div>
    {/* Pass 4: each printed TV panel carries the same drama still
        on its right side, behind no text — the still is a real crop
        and the option UI stays DOM on the left, as printed. */}
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <div style={{ flex: 1, padding: "9px 11px" }}>{children}</div>
      <img src={`${CROP}f32-still.jpg`} alt="" style={{ width: "34%", objectFit: "cover", display: "block" }} />
    </div>
    <div style={{ borderTop: "1px solid #23242a", padding: "7px 11px", fontSize: 9.4, lineHeight: 1.6, color: "#9a9aa0" }}>
      <span style={{ color: ACC }}>{idx === 0 ? "Remote focus" : "Voice shortcuts"}</span> — {SETUP_SHORTCUTS[idx].join(" · ")}
      <span aria-hidden="true" style={{ display: "block", height: 22, marginTop: 5, borderRadius: 4, background: "linear-gradient(180deg,#1c1d22,#101114)", border: "1px solid #2c2d33" }} />
    </div>
  </div>;
  return <Ax n="32" title="" label="AurionX language and voice setup — interactive rebuild of AurionX_31 (printed 32)">
    <p style={{ margin: "0 0 4px", display: "flex", justifyContent: "space-between", fontSize: 10.6, color: "#9a9aa0" }}><span>32 / 41 | AURIONX | PORTFOLIO</span><span>TV EXPERIENCE</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 14, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 33, margin: "0 0 5px" }}>Language and Voice Setup</h3>
        <p className="tks-lede" style={{ margin: 0 }}>Choose how your story is understood and heard. You stay in control of language, voice, and permissions.</p>
      </div>
      <p aria-hidden="true" style={{ margin: 0, display: "flex", gap: 6, alignItems: "center", fontWeight: 800 }}>{[1, 2, 3, 4].map((k) => <span key={k} style={{ display: "contents" }}>{k > 1 ? <span style={{ width: 16, borderTop: "2px solid #3a3b40" }} /> : null}<span style={{ width: 25, height: 25, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11.5, background: focusStep === k - 1 ? GRAD : "#1d1e24", border: "1.5px solid #3a3b40" }}>{k}</span></span>)}</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 12, alignItems: "start" }}>
      {tvPanel(0, <>{SETUP_LANGS.map((l, i) => <button key={l} type="button" onClick={(e) => { e.stopPropagation(); setLang(i); }} aria-pressed={lang === i} style={{ display: "block", width: "100%", textAlign: "left", background: lang === i ? "#16202f" : "transparent", border: "none", borderBottom: "1px solid #1d1e24", padding: "5px 4px", cursor: "pointer", font: "inherit", color: "#e8e8ea", fontSize: 11.6 }}>{l}{lang === i ? <span style={{ color: ACC }}> ✓</span> : ""}</button>)}</>)}
      {tvPanel(1, <>{SETUP_MODES.map(([t, b], i) => <button key={t} type="button" onClick={(e) => { e.stopPropagation(); setMode(i); }} aria-pressed={mode === i} style={{ display: "block", width: "100%", textAlign: "left", background: mode === i ? "#16202f" : "transparent", border: `1px solid ${mode === i ? AZ : "#2c2d33"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#e8e8ea", marginBottom: 5 }}><b style={{ fontSize: 11.6 }}>{t}</b><br /><span style={{ fontSize: 9.6, color: "#9a9aa0" }}>{b}</span></button>)}</>)}
      {tvPanel(2, <>{SETUP_VOICES.map(([t, b], i) => <button key={t} type="button" onClick={(e) => { e.stopPropagation(); setVoice(i); }} aria-pressed={voice === i} style={{ display: "block", width: "100%", textAlign: "left", background: voice === i ? "#16202f" : "transparent", border: `1px solid ${voice === i ? VI : "#2c2d33"}`, borderRadius: 8, padding: "6px 8px", cursor: "pointer", font: "inherit", color: "#e8e8ea", marginBottom: 5 }}><b style={{ fontSize: 11.6 }}>{t}</b><br /><span style={{ fontSize: 9.6, color: "#9a9aa0" }}>{b}</span>{i === 0 ? <span style={{ display: "inline-block", marginTop: 3, background: "#2a2118", color: "#e8a33d", borderRadius: 999, padding: "1px 7px", fontSize: 8.8 }}>Available only with permission</span> : null}</button>)}</>)}
      {tvPanel(3, <>
        <ul style={{ margin: "0 0 8px", paddingLeft: 15, fontSize: 10.4, lineHeight: 1.6 }}><li>This will include AI-generated audio — new voices will be created for this content.</li><li>We respect permissions — voices are used only with permission.</li><li>You're in control — review or remove permissions anytime.</li></ul>
        <p style={{ margin: 0, display: "flex", gap: 4, flexWrap: "wrap" }}><button type="button" onClick={(e) => { e.stopPropagation(); setDone(true); }} style={{ background: GRAD, border: "none", color: "#fff", borderRadius: 999, padding: "4px 12px", fontWeight: 700, cursor: "pointer", font: "inherit", fontSize: 10.6 }}>Process</button><span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "3px 10px", fontSize: 10.6 }}>Review permissions</span><span style={{ border: "1px solid #3a3b40", borderRadius: 999, padding: "3px 10px", fontSize: 10.6 }}>Cancel</span></p>
        {done ? <p style={{ fontSize: 10.4, margin: "7px 0 0" }} aria-live="polite">Processing with: {SETUP_LANGS[lang]} · {SETUP_MODES[mode][0]} · {SETUP_VOICES[voice][0]}.</p> : null}
      </>)}
    </div>
    <p style={{ color: "#9a9aa0", margin: "11px 0 0", fontSize: 11.3 }}>Availability may vary by region and title. Voice options depend on permissions from rights holders.</p>
  </Ax>;
}

/* ---------------- File 32 (printed 28) — Five-Minute Cut Technical Pipeline ---------------- */
const CUT_PIPELINE: Array<[string, string]> = [
  ["Media ingestion", "⬇"], ["Scene segmentation", "🎞"], ["Multimodal feature extraction", "⬡"], ["Highlight scoring", "📊"], ["Spoiler constraints", "🛡"],
  ["Duration optimization", "🕐"], ["Sequence assembly", "🧩"], ["Audio normalization", "∿"], ["Video render", "🖥"],
];
export function AurionXCutPipeline() {
  const [s, setS] = useState(5);
  return <Ax n="28" title="" label="AurionX five-minute cut technical pipeline — interactive rebuild of AurionX_32 (printed 28)">
    <p style={{ margin: "0 0 10px", display: "flex", justifyContent: "space-between", fontSize: 11.5 }}><span><b>28 / 41</b> · Five-Minute Cut Technical Pipeline</span><span style={{ color: "#b18cff" }}>Proposed architecture — verify against implementation</span></p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 4.5 }}>
      {CUT_PIPELINE.map(([t, icon], i) => <button key={t} type="button" onClick={() => setS(i)} aria-pressed={i === s} style={{ textAlign: "center", background: "#0d0f16", border: `1.5px solid ${i === s ? VI : "#23242a"}`, borderRadius: 9, padding: "7px 4px", cursor: "pointer", font: "inherit", color: "#e8e8ea", position: "relative" }}>
        <span style={{ display: "inline-flex", width: 19, height: 19, border: `1.5px solid ${VI}`, borderRadius: 4, alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 800 }}>{i + 1}</span>
        <span aria-hidden="true" style={{ display: "block", fontSize: 17, color: "#b18cff", margin: "4px 0 2px" }}>{icon}</span>
        <b style={{ display: "block", fontSize: 9.3, lineHeight: 1.3 }}>{t}</b>
        {i < 8 ? <span aria-hidden="true" style={{ position: "absolute", right: -6, top: "40%", color: AZ, zIndex: 2, fontSize: 11 }}>→</span> : null}
      </button>)}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(9,1fr)", gap: 4.5, marginTop: 9, fontSize: 8.8, lineHeight: 1.5 }}>
      <div style={{ gridColumn: "1 / 4", border: "1px solid #23242a", borderRadius: 8, padding: "6px 8px", background: "#0d0f16" }}>
        <b style={{ color: ACC }}>Signal inputs</b>
        <p style={{ margin: "3px 0 0" }}>👁 Visual · 🔊 Audio · ▤ Transcript · ⬡ Metadata<br />↘ branching into the feature matrix</p>
      </div>
      <div style={{ border: "1px solid #23242a", borderRadius: 8, padding: "6px 7px", background: "#0d0f16" }}><b style={{ color: ACC }}>Feature matrix</b><span aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 2, marginTop: 4 }}>{Array.from({ length: 24 }, (_, i) => <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: AZ, opacity: 0.3 + ((i * 29) % 70) / 100 }} />)}</span></div>
      <div style={{ border: "1px solid #23242a", borderRadius: 8, padding: "6px 7px", background: "#0d0f16" }}><b style={{ color: "#b18cff" }}>Highlight scoring</b><span aria-hidden="true" style={{ display: "flex", gap: 2.5, alignItems: "flex-end", height: 26, marginTop: 4 }}>{[40, 70, 55, 90, 62, 80].map((h, i) => <span key={i} style={{ flex: 1, height: `${h}%`, background: VI, borderRadius: 1.5 }} />)}</span></div>
      <div style={{ border: "1px solid #23242a", borderRadius: 8, padding: "6px 7px", background: "#0d0f16" }}><b style={{ color: ACC }}>Spoiler constraints</b><p style={{ margin: "3px 0 0" }}>✓ No ending scenes<br />✕ Twist scene 41<br />✓ Dialogue-safe only</p></div>
      <div style={{ border: "1px solid #23242a", borderRadius: 8, padding: "6px 7px", background: "#0d0f16", textAlign: "center" }}><b style={{ color: "#b18cff" }}>Duration</b><svg viewBox="0 0 40 40" style={{ width: 38, display: "block", margin: "3px auto 0" }} aria-hidden="true"><circle cx="20" cy="20" r="16" fill="none" stroke="#26272c" strokeWidth="4.5" /><circle cx="20" cy="20" r="16" fill="none" stroke={VI} strokeWidth="4.5" strokeDasharray="100.5" strokeDashoffset="18" transform="rotate(-90 20 20)" /><text x="20" y="24" fontSize="8.5" fill="#fff" textAnchor="middle" fontWeight="800">05:00</text></svg><span>Target duration</span></div>
      <div style={{ border: "1px solid #23242a", borderRadius: 8, padding: "6px 7px", background: "#0d0f16" }}><b style={{ color: ACC }}>Sequence assembly</b><p style={{ margin: "3px 0 0" }}>01 · 00:32<br />02 · 00:41<br />03 · 00:28<br />n · 00:37</p></div>
      <div style={{ border: "1px solid #23242a", borderRadius: 8, padding: "6px 7px", background: "#0d0f16" }}><b style={{ color: "#b18cff" }}>Audio normalization</b><br /><Wave color={VI} w={72} h={16} /><br /><Wave color={CY} w={72} h={16} /></div>
      <div style={{ border: "1px solid #23242a", borderRadius: 8, padding: "6px 7px", background: "#0d0f16" }}><b style={{ color: ACC }}>Video render</b><Still h={24} tone="#183038"><span style={{ fontSize: 8.4 }}>▶ render monitor</span></Still></div>
    </div>
    <p style={{ margin: "10px 0 0", fontSize: 12 }} aria-live="polite"><b>{CUT_PIPELINE[s][0]}</b> — stage {s + 1} of 9 in the printed pipeline.</p>
    <p style={{ margin: "9px 0 0", background: "#0d0f16", border: "1px solid #23242a", borderRadius: 9, padding: "9px 14px", textAlign: "center", fontSize: 12.8 }}>AurionX assembles and renders the selected segments through a programmable media pipeline.</p>
  </Ax>;
}

/* ---------------- 33 — Global Voice Technical Pipeline ---------------- */
const GV_GROUPS: Array<[string, string, string[]]> = [
  ["SOURCE", "#2DD4BF", ["Audio separation"]],
  ["UNDERSTANDING", "#2979FF", ["Speech recognition", "Speaker diarization"]],
  ["LOCALIZATION", "#7B61FF", ["Translation", "Target-language adaptation", "Speech synthesis"]],
  ["DELIVERY", "#2DD4BF", ["Duration alignment", "Audio mixing", "Optional lip synchronization", "Subtitle output"]],
];
const GV_ICONS = ["∿", "🎙", "👥", "🌐", "🔤", "🗣", "🕐", "🎚", "👄", "▤"];
const GV_TRACKS: Array<[string, string, string]> = [
  ["Original audio", "#2DD4BF", "Feeds separation → subtitles"],
  ["Background audio", "#2979FF", "Preserved through → mixing"],
  ["Localized speech", "#7B61FF", "Synthesized in LOCALIZATION → remix"],
  ["Remixed output", "#FF8FB2", "Mixed in DELIVERY → playback"],
  ["Subtitles", "#E8A33D", "From recognition → subtitle output"],
];
export function AurionXVoicePipeline() {
  const [stage, setStage] = useState(0);
  const flat = GV_GROUPS.flatMap(([g, color, items]) => (items as string[]).map((t) => ({ g, color, t })));
  return <Ax n="33" title="" eyebrow="GLOBAL VOICE" label="AurionX global voice technical pipeline — interactive rebuild of AurionX_33">
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 31, margin: "0 0 4px" }}>Global Voice Technical Pipeline</h3>
        <p style={{ margin: 0, color: "#c9c9ce", fontSize: 12.3 }}>Proposed pipeline — implementation status requires source verification.</p>
      </div>
      <div style={{ border: "1px solid #2c2d33", borderRadius: 9, padding: "7px 11px", fontSize: 10.3 }}>
        <b>PROPOSED PIPELINE</b><br />STATUS&nbsp; <span style={{ border: "1px solid #3a3b40", borderRadius: 5, padding: "0 6px" }}>VERIFY</span> <span style={{ border: "1px solid #3a3b40", borderRadius: 5, padding: "0 6px" }}>SIMULATED</span> <span style={{ border: "1px solid #3a3b40", borderRadius: 5, padding: "0 6px" }}>FUTURE</span>
        <p style={{ margin: "4px 0 0", color: "#9a9aa0" }}>As printed, no stage carries a filled status.</p>
      </div>
    </div>
    <div style={{ display: "flex", gap: 14, marginTop: 13 }}>
      {GV_GROUPS.map(([g, color, items]) => { const start = GV_GROUPS.slice(0, GV_GROUPS.indexOf(GV_GROUPS.find((x) => x[0] === g)!)).reduce((a, x) => a + x[2].length, 0); return <div key={g} style={{ flex: (items as string[]).length }}>
        <p style={{ margin: "0 0 6px", fontSize: 10.6, fontWeight: 800, letterSpacing: "0.1em", color, borderTop: `3px solid ${color}`, paddingTop: 5 }}>⬢ {g}</p>
        <div style={{ display: "flex", gap: 5 }}>
          {(items as string[]).map((t, k) => { const idx = start + k; return <button key={t} type="button" onClick={() => setStage(idx)} aria-pressed={idx === stage} style={{ flex: 1, textAlign: "center", background: "#0d0f16", border: `1.5px solid ${idx === stage ? color : "#23242a"}`, borderRadius: 9, padding: "7px 5px", cursor: "pointer", font: "inherit", color: "#e8e8ea", position: "relative" }}>
            <span style={{ position: "absolute", top: -8, left: 6, width: 17, height: 17, borderRadius: "50%", background: color, color: "#07080d", fontSize: 9.5, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{idx + 1}</span>
            <span aria-hidden="true" style={{ display: "block", fontSize: 17, color, marginTop: 5 }}>{GV_ICONS[idx]}</span>
            <b style={{ display: "block", fontSize: 9.6, lineHeight: 1.35, marginTop: 3 }}>{t}</b>
            {idx < 9 ? <span aria-hidden="true" style={{ position: "absolute", right: -8, top: "42%", color: AZ, zIndex: 2, fontSize: 11 }}>→</span> : null}
          </button>; })}
        </div>
      </div>; })}
    </div>
    <div style={{ border: "1px solid #23242a", borderRadius: 10, background: "#0a0c12", padding: "10px 13px", marginTop: 13 }}>
      <p className="tks-kicker" style={{ marginTop: 0 }}>Signal tracks</p>
      {GV_TRACKS.map(([name, color, route], i) => <p key={name} style={{ margin: "5px 0", display: "flex", gap: 10, alignItems: "center", fontSize: 10.8 }}>
        <span style={{ width: 108, flex: "none" }}>{name}</span>
        <svg viewBox="0 0 300 12" style={{ flex: 1, height: 12 }} aria-hidden="true"><polyline fill="none" stroke={color} strokeWidth="1.8" strokeDasharray={i % 2 ? "4 3" : undefined} points={`0,6 ${60 + i * 22},6 ${84 + i * 22},${i % 2 ? 2 : 10} ${150 + i * 16},${i % 2 ? 2 : 10} 292,6`} /><circle cx={84 + i * 22} cy={i % 2 ? 2 : 10} r={2.4} fill={color} /><polygon points={`300,6 293,3 293,9`} fill={color} /></svg>
        <span style={{ color: "#9a9aa0", fontSize: 9.8, width: 218, flex: "none" }}>{route}</span>
      </p>)}
    </div>
    <p style={{ margin: "10px 0 0", border: "1px solid #2c2d33", borderRadius: 9, padding: "7px 12px", fontSize: 10.8, display: "flex", gap: 10, alignItems: "center" }} aria-live="polite"><span aria-hidden="true" style={{ color: ACC }}>ⓘ</span><span><b>{flat[stage].t}</b> — group {flat[stage].g}, stage {stage + 1} of 10 · STATUS: VERIFY · SIMULATED · FUTURE (no stage carries a filled status, as printed).</span></p>
  </Ax>;
}

/* ---------------- 34 — Quality, Ethics and Failure States ---------------- */
const FAILURE_STATES = [
  ["Low translation confidence", "Ask for confirmation", "Keep playback available", "∿"],
  ["Unsupported language", "Offer subtitles", "“Let's continue with subtitles.”", "🌐"],
  ["Overlapping speakers", "Separate or simplify", "Separated tracks — Alex · Maya", "👥"],
  ["Music and speech collision", "Preserve original mix", "Original audio preserved", "🎵"],
  ["Voice-replication permission", "Consent required", "Use standard localized voice", "🎙"],
  ["Protected speaker", "Use standard localized voice", "Standard localized voice output", "🛡"],
  ["Lip-sync below threshold", "Disable lip sync", "Lip sync disabled", "👄"],
  ["Fallback to subtitles", "Keep playback available", "“Let's continue with subtitles.”", "▤"],
];
export function AurionXFailureStates() {
  const [f, setF] = useState(0);
  const stateCard = (i: number) => { const [t, resp, out, icon] = FAILURE_STATES[i]; return <button key={t} type="button" onClick={() => setF(i)} aria-pressed={i === f} style={{ textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === f ? VI : "#23242a"}`, borderRadius: 10, padding: "9px 11px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
    <span style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 10.6 }}><span aria-hidden="true" style={{ fontSize: 15 }}>{icon}</span><b style={{ lineHeight: 1.3 }}>{t}</b><span aria-hidden="true" style={{ color: "#E8A33D", marginLeft: "auto" }}>⚠</span></span>
    <span style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 7, fontSize: 10.2 }}><span aria-hidden="true" style={{ color: ACC }}>→</span><span style={{ border: "1px solid #2c2d33", borderRadius: 999, padding: "1.5px 8px" }}>{resp}</span></span>
    <span style={{ display: "block", marginTop: 7 }}><Still h={24} tone="#171a24"><span style={{ fontSize: 8.6 }}>{out}</span></Still><span aria-hidden="true" style={{ display: "block", height: 3, background: "#26272c", borderRadius: 2, marginTop: 4 }}><span style={{ display: "block", width: `${28 + ((i * 13) % 55)}%`, height: "100%", background: GRAD, borderRadius: 2 }} /></span></span>
  </button>; };
  return <Ax n="34" title="" eyebrow="GLOBAL VOICE" label="AurionX quality ethics failure states — interactive rebuild of AurionX_34">
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "start" }}>
      <h3 style={{ fontSize: 30, margin: "0 0 4px" }}>Quality, Ethics and Failure States</h3>
      <p style={{ margin: 0, fontSize: 11.3, display: "flex", gap: 7, alignItems: "center", border: "1px solid #2c2d33", borderRadius: 9, padding: "7px 11px" }}><b style={{ color: ACC }}>RISK CONTROL</b> <span>🔍 Detect</span><span aria-hidden="true" style={{ color: "#77787e" }}>┄→</span><span>💬 Explain</span><span aria-hidden="true" style={{ color: "#77787e" }}>┄→</span><span>🛟 Fall back safely</span></p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 12 }}>
      {stateCard(0)}{stateCard(1)}{stateCard(2)}
      {stateCard(3)}
      <div style={{ border: "1.5px solid #2c2d33", borderRadius: 10, padding: "11px 13px", textAlign: "center", background: "#0a0c12", display: "flex", flexDirection: "column", justifyContent: "center", gap: 7 }}>
        <p style={{ margin: 0, fontSize: 12.5 }}><span aria-hidden="true" style={{ color: ACC }}>[ ⟳ ]</span> <b>REVERSIBLE</b></p>
        <p style={{ margin: 0, fontSize: 12.5 }}><span aria-hidden="true" style={{ color: "#8f9bff" }}>[ 👤 ]</span> <b>PERMISSION-AWARE</b></p>
        <p style={{ margin: 0, fontSize: 12.5 }}><span aria-hidden="true" style={{ color: "#b18cff" }}>[ 👁 ]</span> <b>TRANSPARENT</b></p>
      </div>
      {stateCard(4)}
      {stateCard(5)}{stateCard(6)}{stateCard(7)}
    </div>
    <button type="button" onClick={() => setF(8)} aria-pressed={f === 8} style={{ width: "100%", marginTop: 9, textAlign: "left", border: `1.5px solid ${f === 8 ? VI : "#23242a"}`, borderRadius: 10, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#e8e8ea", padding: 0, background: "#0d0f16" }}>
      <Still h={40} tone="#1a2334"><b>9 · AI-generated audio</b> — disclosure banner as printed</Still>
      <span style={{ display: "block", padding: "8px 13px", fontSize: 12 }}>✦ “Audio translated with AI” · “Audio translated with AI” · “Audio translated with AI” <span aria-hidden="true" style={{ display: "block", height: 3, background: "#26272c", borderRadius: 2, marginTop: 6 }}><span style={{ display: "block", width: "46%", height: "100%", background: GRAD, borderRadius: 2 }} /></span></span>
    </button>
    <p style={{ margin: "9px 0 0", fontSize: 11.8 }} aria-live="polite"><b>{f === 8 ? "AI-generated audio" : FAILURE_STATES[f][0]}</b> — response: {f === 8 ? "Persistent disclosure" : FAILURE_STATES[f][1]} → outcome: {f === 8 ? "“Audio translated with AI” — shown persistently over playback" : FAILURE_STATES[f][2]}.</p>
  </Ax>;
}

/* ---------------- 35 — Complete System Architecture ---------------- */
const SYS_LAYERS: Array<[string, string, string[]]> = [
  ["CLIENT", "#00E5FF", ["Television interface", "Playback controller", "Voice capture", "Result renderer"]],
  ["APPLICATION SERVICES", "#2979FF", ["Request orchestrator", "Content metadata service", "Job-status service", "Permissions service"]],
  ["AI AND MEDIA SERVICES", "#7B61FF", ["Speech recognition", "Scene retrieval", "Highlight engine", "Translation", "Speech synthesis", "Lip synchronization", "Media rendering"]],
  ["INFRASTRUCTURE", "#8F9BFF", ["Metadata database", "Vector index", "Object storage", "Background task queue", "Logging and evaluation"]],
];
const SYS_ICONS = [["📺", "🎮", "🎙", "🖥"], ["⬡", "▤", "◔", "🔑"], ["🎙", "🎬", "✦", "🌐", "🗣", "👄", "🎞"], ["🗄", "⬢", "☁", "☰", "📊"]];
export function AurionXSystemArchitecture() {
  const [l, setL] = useState(2);
  return <Ax n="35" title="" eyebrow="ENGINEERING" label="AurionX complete system architecture — interactive rebuild of AurionX_35">
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 30, margin: "0 0 4px" }}>Complete System Architecture</h3>
        <p style={{ margin: 0, color: "#c9c9ce", fontSize: 12.3 }}>Proposed architecture — technology stack requires repository verification.</p>
      </div>
      <p style={{ margin: 0, border: "1px solid #2c2d33", borderRadius: 9, padding: "7px 11px", fontSize: 11 }}><b>STACK:</b> <span style={{ border: "1px solid #3a3b40", borderRadius: 5, padding: "0 7px" }}>VERIFY</span></p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 148px", gap: 12, marginTop: 12, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 0 }}>
        {SYS_LAYERS.map(([name, color, mods], i) => <span key={name} style={{ display: "contents" }}>
          <button type="button" onClick={() => setL(i)} aria-pressed={i === l} style={{ display: "grid", gridTemplateColumns: "158px 1fr", textAlign: "left", background: "#0d0f16", border: `1.5px solid ${i === l ? color : "#23242a"}`, borderRadius: 10, overflow: "hidden", cursor: "pointer", font: "inherit", color: "#e8e8ea", padding: 0 }}>
            <span style={{ padding: "10px 12px", borderRight: "1px solid #23242a", display: "flex", gap: 8, alignItems: "center" }}><span aria-hidden="true" style={{ fontSize: 16 }}>{SYS_ICONS[i][0]}</span><b style={{ color, fontSize: 12.3 }}>{name}</b></span>
            <span style={{ padding: "8px 10px", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>{(mods as string[]).map((mod, mi) => <span key={mod} style={{ border: "1px solid #2c2d33", background: "#10131b", borderRadius: 7, padding: "4px 9px", fontSize: 10.4 }}>{SYS_ICONS[i][mi]} {mod}</span>)}</span>
          </button>
          {i < 3 ? <span aria-hidden="true" style={{ display: "flex", justifyContent: "space-around", padding: "1px 30px", fontSize: 10 }}><span style={{ color: CY }}>│</span><span style={{ color: VI }}>┆</span><span style={{ color: "#2DD4BF" }}>┆</span><span style={{ color: AZ }}>│</span></span> : null}
        </span>)}
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        <div style={{ border: "1px solid #23242a", borderRadius: 10, padding: "9px 11px", background: "#0d0f16" }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>AI layer feeds</p>
          {[["🎬", "Scene Recall", CY], ["✦", "Five-Minute Cut", VI], ["🌐", "Global Voice", "#B18CFF"]].map(([icon, t, c]) => <p key={t as string} style={{ margin: "5px 0", fontSize: 11.3 }}><span aria-hidden="true">{icon as string}</span> <b style={{ color: c as string }}>{t as string}</b></p>)}
        </div>
        <div style={{ border: "1px solid #23242a", borderRadius: 10, padding: "9px 11px", background: "#0d0f16", fontSize: 10.4, lineHeight: 1.8 }}>
          <p className="tks-kicker" style={{ marginTop: 0 }}>Legend — line styles</p>
          <p style={{ margin: 0 }}><span style={{ color: CY }}>——</span> Request<br /><span style={{ color: VI }}>┄┄</span> Media<br /><span style={{ color: "#2DD4BF" }}>- -</span> Metadata<br /><span style={{ color: AZ }}>····</span> Permission</p>
        </div>
      </div>
    </div>
    <p style={{ margin: "9px 0 0", fontSize: 11.6 }} aria-live="polite">Layer selected: <b>{SYS_LAYERS[l][0]}</b> ({SYS_LAYERS[l][2].length} modules).</p>
  </Ax>;
}

/* ---------------- 36 — Implementation Evidence ---------------- */
const EVIDENCE = [
  ["Repository structure", "Proves system boundaries", "🗂"], ["Selected code", "Proves product logic", "▤"], ["Component tree", "Proves interface architecture", "⬡"],
  ["API request and response", "Proves service contract", "⇄"], ["Example JSON", "Proves data model", "{ }"], ["Commit history", "Proves iteration", "⎇"],
  ["Deployed prototype", "Proves runnable state", "🖥"], ["Real output files", "Proves generated media", "🎞"], ["Local or cloud setup", "Proves operating environment", "☁"],
];
const hexNode = (t: string) => <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#171126", border: `1.5px solid ${VI}`, clipPath: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)", padding: "9px 13px", fontSize: 9.6, fontWeight: 800, letterSpacing: "0.05em", textAlign: "center" }}>{t}</span>;
export function AurionXEvidence() {
  const [sel, setSel] = useState(6);
  const evCard = (i: number, hero?: boolean) => { const [t, proves, icon] = EVIDENCE[i]; return <button key={t} type="button" onClick={() => setSel(i)} aria-pressed={i === sel} style={{ textAlign: "left", width: "100%", background: "#0d0f16", border: `1.5px solid ${i === sel ? VI : "#23242a"}`, borderRadius: 10, padding: hero ? "13px 15px" : "9px 11px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
    <span style={{ color: "#8f9bff", fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span> <b style={{ fontSize: hero ? 15 : 12.3 }}>{t}</b>
    <span style={{ display: "block", border: "1px dashed #3a3b3f", borderRadius: 7, padding: hero ? "10px 10px" : "6px", textAlign: "center", color: "#9a9aa0", margin: "8px 0 5px", fontSize: hero ? 12 : 10.4 }}><span aria-hidden="true" style={{ display: "block", fontSize: hero ? 20 : 14, marginBottom: 4 }}>{icon}</span>INSERT VERIFIED CAPTURE</span>
    <span style={{ display: "block", color: "#c9c9ce", fontSize: hero ? 11.6 : 10.4, margin: 0 }}>{proves}</span>
  </button>; };
  return <Ax n="36" title="" eyebrow="ENGINEERING" label="AurionX implementation evidence — interactive rebuild of AurionX_36">
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 30, margin: "0 0 4px" }}>Implementation Evidence</h3>
        <p style={{ margin: 0, color: "#c9c9ce", fontSize: 12.3 }}>No repository or deployment evidence was supplied.</p>
      </div>
      <p style={{ margin: 0, textAlign: "right", fontSize: 11 }}><b style={{ color: "#e8a33d" }}>EVIDENCE CAPTURE REQUIRED</b><br /><span style={{ border: "1.5px solid #e8a33d", color: "#e8a33d", borderRadius: 999, padding: "2px 10px", display: "inline-block", marginTop: 5 }}>⚠ INSERT VERIFIED CAPTURE</span></p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "172px 1fr 172px", gap: 7, marginTop: 9, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 6 }}>{evCard(0)}{evCard(4)}{evCard(5)}</div>
      <div style={{ display: "grid", gap: 6 }}>
        {evCard(6, true)}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>{evCard(1)}{evCard(2)}{evCard(3)}</div>
      </div>
      <div style={{ display: "grid", gap: 6 }}>{evCard(7)}{evCard(8)}</div>
    </div>
    <p style={{ margin: "11px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center" }} aria-live="polite">
      <span>{hexNode("PRODUCT DECISION")}</span>
      <span style={{ fontSize: 11.3 }}>Selected: <b>{EVIDENCE[sel][0]}</b> — {EVIDENCE[sel][1].toLowerCase()}. {hexNode("IMPLEMENTATION")} sits under slot 07, as printed.</span>
      <span>{hexNode("OUTPUT")}</span>
    </p>
    <p style={{ textAlign: "center", color: "#e8a33d", margin: "10px 0 0", fontSize: 12 }}>⚠ Do not publish placeholders as final evidence.</p>
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
  return <Ax n="37" title="" eyebrow="ENGINEERING" label="AurionX testing and evaluation — interactive rebuild of AurionX_37">
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "start" }}>
      <div>
        <h3 style={{ fontSize: 30, margin: "0 0 4px" }}>Testing and Evaluation</h3>
        <p style={{ margin: 0, color: "#c9c9ce", fontSize: 12.3 }}>Evaluation plan — results and measurements were not supplied.</p>
      </div>
      <p style={{ margin: 0, border: "1px solid #2c2d33", borderRadius: 9, padding: "7px 11px", fontSize: 11 }}><b>EVALUATION PLAN</b></p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 168px", gap: 12, marginTop: 12, alignItems: "start" }}>
      <div style={{ overflowX: "auto" }}><table className="tks-table tks-table--micro"><thead><tr><th>Feature</th><th>Test case</th><th>Input</th><th>Expected</th><th>Actual</th><th>Latency</th><th>Confidence</th><th>Failure mode</th><th>Resolution</th></tr></thead>
        <tbody>{TESTS.map(([feature, cases], gi) => (cases as string[]).map((c, ci) => <tr key={c} style={ci === 0 && gi > 0 ? { borderTop: "2.5px solid #3a3b40" } : undefined}>
          {ci === 0 ? <td rowSpan={(cases as string[]).length} style={{ color: ACC, fontWeight: 700, verticalAlign: "top" }}><span aria-hidden="true" style={{ marginRight: 5 }}>⬡</span>{feature}</td> : null}
          <td>{c}</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td><td style={{ color: "#e8a33d" }}>MEASUREMENT REQUIRED</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td><td>NOT SUPPLIED</td></tr>))}</tbody></table></div>
      <div style={{ border: "1px solid #23242a", borderRadius: 10, background: "#0d0f16", padding: "10px 12px" }}>
        {TEST_LOOP.map(([t, b], i) => <span key={t} style={{ display: "contents" }}>
          <button type="button" onClick={() => setLoop(i)} aria-pressed={i === loop} style={{ display: "block", width: "100%", textAlign: "left", background: i === loop ? "#12141f" : "transparent", border: "none", borderRadius: 7, padding: "5px 6px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
            <span aria-hidden="true" style={{ color: ACC, marginRight: 6 }}>⬡</span><b style={{ fontSize: 12 }}>{t}</b>
            <span style={{ display: "block", fontSize: 9.8, lineHeight: 1.5, color: "#9a9aa0", marginTop: 2 }}>{b}</span>
          </button>
          {i < 3 ? <span aria-hidden="true" style={{ display: "block", textAlign: "center", color: ACC, fontSize: 11 }}>↓</span> : null}
        </span>)}
        <p style={{ margin: "10px 0 0", borderTop: "1px solid #23242a", paddingTop: 8, fontSize: 10.6 }}>🛡 <b>Publish only measured results.</b></p>
      </div>
    </div>
    <p style={{ margin: "11px 0 0", border: "1px solid #23242a", borderRadius: 9, padding: "8px 12px", fontSize: 10.8, display: "flex", gap: 18, flexWrap: "wrap", background: "#0a0c12" }}>
      <span><span aria-hidden="true" style={{ display: "inline-block", width: 11, height: 11, background: "#2FBF71", borderRadius: 2, marginRight: 5 }} /><b>DEFINED</b> — test case is defined and ready to execute</span>
      <span><span aria-hidden="true" style={{ display: "inline-block", width: 11, height: 11, background: "#55565a", borderRadius: 2, marginRight: 5 }} /><b>NOT SUPPLIED</b> — information or result was not supplied</span>
      <span><span aria-hidden="true" style={{ display: "inline-block", width: 11, height: 11, background: "#E8A33D", borderRadius: 2, marginRight: 5 }} /><b>MEASUREMENT REQUIRED</b> — measurement or observation required to complete evaluation</span>
    </p>
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
  const [dim, setDim] = useState(0);
  const tvMock = (v2: boolean) => <div style={{ border: "1px solid #26272c", borderRadius: 10, overflow: "hidden" }}>
    {/* Pass 3: both printed mockups sit over the same lighthouse still —
        real crop underneath, each version's UI state stays DOM over it. */}
    <Img src={`${CROP}f39-lighthouse.jpg`} h={92} alt="Lighthouse still behind the TV mockup" darken>
      <span style={{ position: "absolute", inset: 0, padding: "6px 8px", textShadow: "0 1px 4px #000", lineHeight: 1.55 }}>{v2 ? <span><b style={{ color: ACC }}>◯ Listening</b> — “I found three possible scenes”<br />1 · 00:42:18 Character on cliff [Selected] · 2 · 00:22:10 Waves crash · 3 · 01:03:55 Storm clouds<br />Scene search — Analyzing… 65%</span>
        : <span><b>Search &amp; Find</b> — “Search for scenes · Describe a moment...”<br />Categories · Tools · Settings in a dense sidebar; 7-item results list.</span>}</span>
    </Img>
    <p style={{ margin: 0, padding: "6px 10px", fontSize: 9.8, color: "#9a9aa0", background: "#0d0f16" }}>Subtitle: “The wind never stops out here.” · 00:42:18</p>
  </div>;
  return <Ax n="38" title="" eyebrow="ENGINEERING" label="AurionX design iteration — interactive rebuild of AurionX_38">
    <h3 style={{ fontSize: 30, margin: "0 0 10px" }}>Design Iteration</h3>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 118px 1fr", gap: 10, alignItems: "start" }}>
      <div><p style={{ margin: "0 0 6px", fontSize: 11.6 }}><b>VERSION 1</b> <span style={{ color: "#9a9aa0" }}>RECONSTRUCTED</span></p>{tvMock(false)}</div>
      <div style={{ textAlign: "center", paddingTop: 34 }}>
        <p style={{ margin: 0, fontSize: 10.6, lineHeight: 1.7, color: "#c9c9ce" }}>FROM<br /><b>DESTINATION<br />SCREENS</b><br /><span aria-hidden="true" style={{ color: ACC, fontSize: 16 }}>→</span><br />TO<br /><b>COMPLETE STATE<br />TRANSITIONS</b></p>
        <p style={{ margin: "10px 0 0", fontSize: 9.4, color: "#77787e" }}>Source mockup capture was not supplied.</p>
      </div>
      <div><p style={{ margin: "0 0 6px", fontSize: 11.6 }}><b style={{ color: "#2DD4BF" }}>VERSION 2</b> <span style={{ color: "#9a9aa0" }}>AURIONX SYSTEM</span></p>{tvMock(true)}</div>
    </div>
    <table className="tks-table" style={{ marginTop: 12 }}><thead><tr><th>Version 1</th><th style={{ textAlign: "center" }}>Dimension</th><th>Version 2</th></tr></thead>
      <tbody>{ITERATION.map(([dimName, v1, v2], i) => <tr key={dimName} onClick={() => setDim(i)} style={{ cursor: "pointer", background: i === dim ? "#1d1e20" : undefined }}>
        <td style={{ color: "#b9b9be" }}>{v1}</td>
        <td style={{ textAlign: "center", whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ color: ACC }}>→</span> <b>{dimName}</b> <span aria-hidden="true" style={{ color: ACC }}>←</span></td>
        <td>{v2}</td></tr>)}</tbody></table>
  </Ax>;
}

/* ---------------- 39 — Final Product Ecosystem (pass-2: grouping kept per analyst) ---------------- */
export function AurionXEcosystem() {
  const [spoiler, setSpoiler] = useState(true);
  const [aiAudio, setAiAudio] = useState(true);
  const [balance, setBalance] = useState(55);
  const [scene, setScene] = useState(0);
  const SCENES = [["00:42:18", "Character on cliff"], ["00:22:10", "Waves crash on rocks"], ["01:03:55", "Storm clouds build"]];
  // Pass 4: overlay method — the stage is the original ecosystem
  // photograph (room, TV, floating glass panels, laptop, tablet).
  // Every baked UI surface is covered by a live DOM counterpart at
  // its printed position: title veil, Scene Recall panel, the TV,
  // Five-Minute Cut and Global Voice glass panels, laptop and tablet
  // screens. The devices sit at slight angles in the photograph;
  // the DOM screens are axis-aligned (noted in §15).
  const glass: React.CSSProperties = { position: "absolute", background: "rgba(9,11,17,0.965)", border: "1px solid #2e3038", borderRadius: 8, padding: "1.6% 1.8%", fontSize: 8.8, lineHeight: 1.5, color: "#e8e8ea", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" };
  return <Ax n="39" title="Final Product Ecosystem" sub="Outcome — AurionX: An AI-Native Viewing Layer for Global Entertainment." eyebrow="OUTCOME" label="AurionX final product ecosystem — interactive rebuild of AurionX_39">
    <Stage bg={`${CROP}room-ecosystem.jpg`} label="The AurionX ecosystem in the living room: television, floating panels, laptop and tablet, as printed">
      <div style={{ position: "absolute", left: 0, top: 0, width: "35%", height: "27.5%", background: "linear-gradient(100deg, rgba(5,5,7,0.97) 52%, rgba(5,5,7,0) 98%)", padding: "1.8% 0 0 1.8%" }}>
        <p style={{ margin: 0, fontSize: 10.5 }}><span style={{ border: "1.5px solid #e8e8ea", borderRadius: 4, padding: "0 6px", fontWeight: 800 }}>39</span>&nbsp; <span style={{ color: ACC, letterSpacing: "0.14em", fontSize: 8.8, fontWeight: 700 }}>OUTCOME</span></p>
        <p style={{ margin: "3px 0 2px", fontSize: 15.5, fontWeight: 600 }}>Final Product Ecosystem</p>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 800, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>AurionX</p>
        <p style={{ margin: "1px 0 0", fontSize: 8.6, color: "#c9c9ce", lineHeight: 1.45 }}>An AI-Native Viewing Layer<br />for Global Entertainment</p>
      </div>
      <div style={{ ...glass, left: "3.6%", top: "25.8%", width: "17.2%", height: "29.5%" }} role="region" aria-label="Scene Recall panel">
        <b style={{ fontSize: 9.6 }}>Scene Recall</b>
        {SCENES.map(([tc, t], i) => <button key={tc} type="button" aria-pressed={scene === i} onClick={() => setScene(i)} style={{ display: "block", width: "100%", textAlign: "left", marginTop: 4, background: i === scene ? "#1b2030" : "#10131b", border: `1px solid ${i === scene ? ACC : "#2c2e35"}`, borderRadius: 5, color: "#e8e8ea", font: "inherit", fontSize: 8.4, padding: "3px 6px", cursor: "pointer" }}>{i + 1} · {tc} — {t}{i === scene ? " · Selected scene" : ""}</button>)}
        <p style={{ margin: "5px 0 0", display: "flex", gap: 4 }}><span className="tks-chip" style={{ fontSize: 8.2, padding: "1px 7px" }}>↩ Back to playback</span><span className="tks-chip" style={{ fontSize: 8.2, padding: "1px 7px" }}>Cancel</span></p>
      </div>
      <TvBox l={25.2} t={18.4} w={44.4} h={53.5} label="Television — Scene Recall results over the lighthouse film">
        <img src={`${CROP}f39-lighthouse.jpg`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(3,5,9,0.88) 0%, rgba(3,5,9,0.55) 34%, transparent 55%)" }} aria-hidden="true" />
        <span style={{ position: "absolute", left: "3.5%", top: "5%", right: "3.5%", fontSize: 9.2 }}>
          <span style={{ display: "flex", justifyContent: "space-between" }}><span>◯ <b style={{ color: ACC }}>Listening</b></span><span style={{ fontFamily: '"IBM Plex Mono",monospace' }}>00:42:18</span></span>
          <Wave color={CY} w={120} h={12} />
          <span style={{ display: "block", color: "#c9c9ce", marginTop: 2 }}>I found three possible scenes</span>
          {SCENES.map(([tc, t], i) => <span key={tc} style={{ display: "block", marginTop: 3, background: i === scene ? "#10131bcc" : "#10131b88", border: i === scene ? `1px solid ${ACC}` : "1px solid transparent", borderRadius: 4, padding: "2px 6px", maxWidth: "46%" }}>{i + 1} · {tc} {t}</span>)}
        </span>
        <span style={{ position: "absolute", left: "50%", bottom: "9%", transform: "translateX(-50%)", background: "#111d", padding: "2px 10px", borderRadius: 4, whiteSpace: "nowrap", fontSize: 9.4 }}>The wind never stops out here.</span>
        <span style={{ position: "absolute", left: "3%", right: "3%", bottom: "3.5%", height: 3, background: "#2c2e35", borderRadius: 2 }}><span style={{ display: "block", height: "100%", width: "38%", background: GRAD, borderRadius: 2 }} /></span>
      </TvBox>
      <div style={{ ...glass, left: "72.2%", top: "4.9%", width: "21.2%", height: "35%" }} role="region" aria-label="Five-Minute Cut panel">
        <p style={{ margin: 0, display: "flex", justifyContent: "space-between" }}><b style={{ fontSize: 9.6 }}>Five-Minute Cut</b><span style={{ color: "#9a9aa0" }}>5 MIN</span></p>
        <label style={{ display: "block", marginTop: 4 }}>Configuration — Balanced <input type="range" min={0} max={100} value={balance} onChange={(e) => setBalance(Number(e.target.value))} aria-label="Five-minute cut balance" style={{ width: "100%", height: 3, accentColor: AZ }} /></label>
        <p style={{ margin: "3px 0" }}><button type="button" className="tks-chip" style={{ fontSize: 8.2, padding: "1px 7px" }} aria-pressed={spoiler} onClick={() => setSpoiler((v) => !v)}>Spoiler protection {spoiler ? "ON" : "OFF"}</button></p>
        <p style={{ margin: "3px 0 2px", color: "#9a9aa0" }}>Generated timeline · 5:00</p>
        <img src={`${CROP}f39-lighthouse.jpg`} alt="" style={{ width: "100%", height: 20, objectFit: "cover", borderRadius: 3, display: "block" }} />
        <p style={{ margin: "4px 0 0" }}><span className="tks-chip" style={{ fontSize: 8.2, padding: "1px 7px" }}>Export cut</span></p>
      </div>
      <div style={{ ...glass, left: "75.1%", top: "39.2%", width: "19.6%", height: "31.6%" }} role="region" aria-label="Global Voice panel">
        <p style={{ margin: 0 }}>◯ <b style={{ color: ACC, fontSize: 9.6 }}>Global Voice</b></p>
        <Wave color={CY} w={110} h={11} />
        <p style={{ margin: "2px 0", color: "#c9c9ce" }}>I found three possible scenes</p>
        <p style={{ margin: "2px 0", background: "#10131b", borderRadius: 4, padding: "2px 6px" }}>English ⌄</p>
        <p style={{ margin: "2px 0", background: "#10131b", borderRadius: 4, padding: "2px 6px" }}>Subtitles + dubbing ⌄</p>
        <p style={{ margin: "3px 0 0" }}><button type="button" className="tks-chip" style={{ fontSize: 8.2, padding: "1px 7px" }} aria-pressed={aiAudio} onClick={() => setAiAudio((v) => !v)}>AI-generated audio {aiAudio ? "ON" : "OFF"}</button></p>
        <p style={{ margin: "3px 0 0", fontFamily: '"IBM Plex Mono",monospace', color: "#9a9aa0" }}>00:42:18</p>
      </div>
      <div style={{ position: "absolute", left: "5%", top: "59.6%", width: "21.2%", height: "33.4%", background: "#07090f", border: "1px solid #2e3038", borderRadius: 6, padding: "1.4% 1.6%", fontSize: 8.2, color: "#e8e8ea", transform: "rotate(-1.2deg)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} role="region" aria-label="Laptop companion — Home">
        <b>⌂ Home</b><span style={{ display: "block", color: "#9a9aa0", margin: "3px 0 2px" }}>Continue Watching</span>
        <span style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>{["f39-lighthouse.jpg", "hero-castle.jpg", "f25-eclipse.jpg", "f25-ship.jpg"].map((s) => <img key={s} src={`${CROP}${s}`} alt="" style={{ width: "100%", height: 17, objectFit: "cover", borderRadius: 2, display: "block" }} />)}</span>
        <span style={{ display: "block", color: "#9a9aa0", margin: "4px 0 2px" }}>Recommended For You</span>
        <span style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>{["f02-castle.jpg", "f19-face.jpg", "f19-kitchen.jpg", "f30-still-b.jpg"].map((s) => <img key={s} src={`${CROP}${s}`} alt="" style={{ width: "100%", height: 17, objectFit: "cover", borderRadius: 2, display: "block" }} />)}</span>
        <span style={{ display: "block", color: "#9a9aa0", marginTop: 4 }}>Recently Added</span>
      </div>
      <div style={{ position: "absolute", left: "68.9%", top: "65.4%", width: "24.8%", height: "31.8%", background: "#07090f", border: "1px solid #2e3038", borderRadius: 6, padding: "1.4% 1.6%", fontSize: 8.2, color: "#e8e8ea", transform: "rotate(1.5deg)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} role="region" aria-label="Tablet companion">
        <span style={{ position: "relative", display: "block", height: "62%", borderRadius: 3, overflow: "hidden" }}><img src={`${CROP}f39-tablet.jpg`} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /><b style={{ position: "absolute", left: 6, top: 5, fontSize: 9.4, lineHeight: 1.35, textShadow: "0 1px 4px #000" }}>Intelligent.<br />Immersive.<br />Yours.</b></span>
        <span style={{ display: "block", color: "#9a9aa0", margin: "3px 0 2px" }}>Featured</span>
        <span style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>{["f39-lighthouse.jpg", "hero-castle.jpg", "f02-frames.jpg", "f25-ship.jpg"].map((s) => <img key={s} src={`${CROP}${s}`} alt="" style={{ width: "100%", height: 15, objectFit: "cover", borderRadius: 2, display: "block" }} />)}</span>
      </div>
    </Stage>
  </Ax>;
}

/* ---------------- 40 — Project Outcome ---------------- */
const OUTCOME_EVIDENCE = ["Competition placement", "Prototype completion", "Designed states", "Implemented modules", "Usability participants", "Measured performance", "Repository and deployment"];
export function AurionXOutcome() {
  const [f, setF] = useState(0);
  const FEATS = [["Scene Recall", "AI-native scene discovery and recall across global entertainment.", "▤", CY], ["Five-Minute Cut", "AI-assisted highlight edits that distill stories into shareable moments.", "🎬", AZ], ["Global Voice", "AI-generated dubbing and voice experiences for global audiences.", "∿", VI]];
  const OWN = [["◎", "Product strategy"], ["👤", "UX and interface design"], ["⬡", "AI workflow design"], ["▤", "Technical architecture"], ["⌁", "Prototype planning"]];
  return <Ax n="40" title="" eyebrow="OUTCOME" label="AurionX project outcome — interactive rebuild of AurionX_40">
    <div style={{ display: "grid", gridTemplateColumns: "1.65fr 1fr", gap: 12, alignItems: "start" }}>
      <div style={{ border: "1px solid #2c2d33", borderRadius: 13, padding: "13px 15px", background: "#0a0c12" }}>
        <p className="tks-kicker" style={{ marginTop: 0 }}>Verified from supplied project context</p>
        <p style={{ fontSize: 33, fontWeight: 300, lineHeight: 1.28, margin: "5px 0 3px" }}>Independent 2024<br />competition<br />concept</p>
        <p style={{ color: "#c9c9ce", margin: "0 0 14px" }}>Solo Product Designer and Engineer</p>
        <p className="tks-kicker">Three connected experiences</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
          {FEATS.map(([t, b, icon, c], i) => <button key={t as string} type="button" onClick={() => setF(i)} aria-pressed={i === f} style={{ textAlign: "left", background: "transparent", border: "none", borderLeft: i ? "1px solid #23242a" : "none", padding: "2px 12px", cursor: "pointer", font: "inherit", color: "#e8e8ea" }}>
            <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: "50%", border: `2px solid ${c as string}`, color: c as string, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{icon as string}</span>
            <b style={{ display: "block", margin: "7px 0 3px", fontSize: 13 }}>{t as string}</b>
            <span style={{ display: "block", fontSize: 10.6, lineHeight: 1.55, color: "#b9b9be" }}>{b as string}</span>
          </button>)}
        </div>
        <p className="tks-kicker" style={{ marginTop: 14 }}>End-to-end ownership</p>
        <div style={{ display: "flex" }}>
          {OWN.map(([icon, t], i) => <span key={t} style={{ flex: 1, padding: "0 9px", borderLeft: i ? "1px solid #23242a" : "none", fontSize: 10.6, textAlign: "center" }}><span aria-hidden="true" style={{ display: "block", fontSize: 17, color: ACC, marginBottom: 3 }}>{icon}</span>{t}</span>)}
        </div>
        <p style={{ margin: "14px 0 0", borderTop: "1px solid #23242a", paddingTop: 10, fontSize: 11.6 }}><b style={{ color: ACC }}>◎ INDEPENDENT CONCEPT</b> — Not released or commissioned as an official commercial product.</p>
      </div>
      <div style={{ borderRadius: 13, overflow: "hidden", border: "1px solid #2c2d33" }}>
        {/* Pass 3: the printed right side is the B/W lighthouse photograph
            itself — real crop from this file (no text in the region). */}
        <Img src={`${CROP}f40-lighthouse.jpg`} h={118} alt="Black-and-white lighthouse photograph heading the evidence column" />
        <div style={{ background: "#0d0f16", padding: "10px 13px" }}>
          <p className="tks-kicker" style={{ marginTop: 0, color: "#e8a33d" }}>Not supplied — add only with evidence</p>
          {OUTCOME_EVIDENCE.map((e) => <p key={e} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "6px 0", fontSize: 11.6 }}><span><span aria-hidden="true" style={{ color: "#e8a33d", marginRight: 7 }}>⚠</span>{e}</span><span style={{ color: "#e8a33d", fontFamily: '"IBM Plex Mono",monospace', fontSize: 9.8 }}>EVIDENCE REQUIRED</span></p>)}
        </div>
      </div>
    </div>
  </Ax>;
}

/* ---------------- 41 — Reflection and Next Release ---------------- */
const WORKED = ["Voice reduced large-screen navigation friction.", "The three features shared one underlying media-intelligence layer.", "Building the prototype exposed constraints that visual design alone did not reveal."];
const IMPROVE = ["Test with a larger and more diverse sample.", "Separate local and cloud-processing expectations.", "Strengthen rights and consent handling.", "Validate use on real television hardware.", "Improve low-confidence recovery.", "Reduce model latency."];
const ROADMAP = [["V1", "Scene Recall"], ["V1.5", "Five-Minute Cut"], ["V2", "Global Voice"], ["RESEARCH", "Live broadcasting and expression-aware localization"]];
export function AurionXReflection() {
  const [checked, setChecked] = useState<boolean[]>(IMPROVE.map(() => false));
  const [rm, setRm] = useState(0);
  return <Ax n="41" title="" eyebrow="REFLECTION" label="AurionX reflection and next release — interactive rebuild of AurionX_41">
    <h3 style={{ fontSize: 30, margin: "0 0 12px" }}>Reflection and Next Release</h3>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.08fr", gap: 22 }}>
      <div>
        <p className="tks-kicker" style={{ marginTop: 0, color: ACC }}>What worked</p>
        {WORKED.map((w, i) => <p key={w} style={{ margin: 0, padding: "9px 0", borderBottom: "1px solid #23242a", display: "flex", gap: 13, alignItems: "baseline" }}><span style={{ color: CY, fontSize: 27, fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span><span style={{ fontSize: 13.2, lineHeight: 1.6 }}>{w}</span></p>)}
      </div>
      {/* Pass 3: printed ratio restored (near 50/50) and the B/W
          lighthouse bleed from the right edge restored as a real crop
          behind the improve column (text stays DOM above it). */}
      <div style={{ backgroundImage: `linear-gradient(90deg, rgba(7,8,13,0.95) 42%, rgba(7,8,13,0.62)), url(${CROP}f41-lighthouse.jpg)`, backgroundSize: "cover", backgroundPosition: "right top", borderRadius: 8, padding: "2px 10px 2px 2px" }}>
        <p className="tks-kicker" style={{ marginTop: 0, color: ACC }}>What I would improve</p>
        {IMPROVE.map((w, i) => <p key={w} style={{ margin: 0, padding: "8px 0", borderBottom: "1px solid #23242a", display: "flex", gap: 11, alignItems: "center" }}>
          <button type="button" onClick={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))} aria-pressed={checked[i]} aria-label={`Mark improvement ${i + 1} addressed`} style={{ width: 25, height: 25, borderRadius: "50%", flex: "none", border: "none", background: checked[i] ? GRAD : "#23242a", outline: `1.5px solid ${VI}`, color: "#fff", fontSize: 10.5, fontWeight: 800, cursor: "pointer" }}>{checked[i] ? "✓" : String(i + 1).padStart(2, "0")}</button>
          <span style={{ fontSize: 12.6, color: checked[i] ? "#9a9aa0" : "#e8e8ea" }}>{w}</span></p>)}
      </div>
    </div>
    <p className="tks-kicker" style={{ marginTop: 16 }}>Roadmap</p>
    <div style={{ position: "relative", margin: "8px 6px 0" }}>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 8, height: 3, background: GRAD, borderRadius: 2 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", position: "relative" }}>
        {ROADMAP.map(([v, t], i) => <button key={t} type="button" onClick={() => setRm(i)} aria-pressed={i === rm} style={{ background: "transparent", border: "none", borderLeft: i ? "1px solid #2c2d33" : "none", cursor: "pointer", font: "inherit", color: "#e8e8ea", textAlign: "center", padding: 0 }}>
          <span aria-hidden="true" style={{ width: 19, height: 19, borderRadius: "50%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", background: "#07080d", border: `2.5px solid ${i === rm ? CY : VI}` }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: i === rm ? CY : "transparent" }} /></span>
          <span style={{ display: "block", marginTop: 8, fontSize: 11.4 }}><b style={{ color: ACC }}>{v}</b> · {t}</span>
        </button>)}
      </div>
    </div>
    <p style={{ margin: "16px 0 0", display: "flex", alignItems: "center", gap: 14 }}><span aria-hidden="true" style={{ flex: 1, borderTop: "1px solid #2c2d33" }} /><span style={{ fontSize: 13.4, color: "#d8d8dc" }}>From a focused retrieval tool to a responsible global viewing layer.</span><span aria-hidden="true" style={{ flex: 1, borderTop: "1px solid #2c2d33" }} /></p>
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
