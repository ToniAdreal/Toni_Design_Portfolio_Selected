import { useState } from "react";
import "./tokenta-slides.css";

/**
 * AurionX design-system rebuilds transcribed from the actual images
 * AurionX_17 (Visual Identity System) and AurionX_18 (Television Design
 * System). Dark spectral theme: Cyan #00E5FF, Azure #2979FF, Violet
 * #7B61FF on Charcoal #0B0D12.
 */

const COLOURS = [
  ["Cyan", "#00E5FF", "Spectral"], ["Azure", "#2979FF", "Spectral"], ["Violet", "#7B61FF", "Spectral"],
  ["Charcoal", "#0B0D12", "Neutrals"], ["Slate", "#2A2F36", "Neutrals"], ["Ivory", "#F5F3EE", "Neutrals"],
];
const ACTIVATION = ["Idle", "Listening", "Understanding", "Thinking", "Responding", "Complete"];
const TYPE_SCALE = [
  ["Display", "64", "Semibold"], ["Headline", "36", "Semibold"], ["Title", "20", "Medium"], ["Body", "16", "Regular"],
];
const ICONS = ["Home", "Search", "Library", "Live", "On Demand", "Voice", "Profile", "Settings"];
const SURFACES = [
  ["Base", "#0B0D12"], ["Elevated 1", "#11151B"], ["Elevated 2", "#161A21"],
  ["Outline", "1px – #2A2F36"], ["Divider", "1px – #1E232B"], ["Glow (Active)", "Azure glow"],
];

export function AurionXVisualIdentity() {
  const [colour, setColour] = useState(0);
  const [stage, setStage] = useState(1);
  const [typeRow, setTypeRow] = useState(0);
  const [icon, setIcon] = useState("Voice");
  const glow = [0.08, 0.3, 0.5, 0.85, 1, 0.95][stage];
  return <div className="tks tks--dark" style={{ background: "#07080d", padding: "18px 22px 14px" }} role="region" aria-label="AurionX visual identity system — interactive rebuild of AurionX_17">
    <div className="tks-head"><span><b>⋈ AurionX</b>&nbsp;&nbsp;|&nbsp;&nbsp;17 of 41&nbsp;&nbsp;·&nbsp;&nbsp;Visual Identity System</span></div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.2fr 1.4fr", marginTop: 7 }}>
      <div className="tks-card"><p className="tks-kicker">Mark</p><p style={{ fontSize: 58, textAlign: "center", margin: "4px 0 2px", lineHeight: 1, background: "linear-gradient(90deg,#00E5FF,#7B61FF)", WebkitBackgroundClip: "text", color: "transparent", fontWeight: 900 }}>⋈</p></div>
      <div className="tks-card"><p className="tks-kicker">Wordmark</p><p style={{ fontSize: 40, fontWeight: 600, textAlign: "center", margin: "12px 0 4px" }}>Aurion<span style={{ background: "linear-gradient(90deg,#00E5FF,#7B61FF)", WebkitBackgroundClip: "text", color: "transparent" }}>X</span></p><p style={{ textAlign: "center", margin: 0, letterSpacing: "0.55em", fontSize: 11, color: "#9a9aa0" }}>A U R I O N X</p></div>
      <div className="tks-card"><p className="tks-kicker">Colour — click a swatch</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6, marginTop: 6 }}>{COLOURS.map(([n, hex, grp], i) => <button key={n} type="button" onClick={() => setColour(i)} aria-pressed={colour === i} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", textAlign: "left", font: "inherit", color: "#f0f0f2" }}><span style={{ display: "block", background: hex, height: 40, borderRadius: 5, border: colour === i ? "2px solid #fff" : "1px solid #333438" }} /><span style={{ display: "block", marginTop: 4, fontSize: 11.5 }}><b>{n}</b></span><span style={{ display: "block", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#9a9aa0" }}>{hex} · {grp}</span></button>)}</div>
        <p style={{ margin: "8px 0 0" }} aria-live="polite"><b>{COLOURS[colour][0]}</b> — {COLOURS[colour][1]} · {COLOURS[colour][2]}</p></div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1.3fr 1fr", marginTop: 7 }}>
      <div className="tks-card"><p className="tks-kicker">Typography — Suisse Intl (Light · Regular · Medium · Semibold · Bold)</p>
        <div>{TYPE_SCALE.map(([n, s, w], i) => <button key={n} type="button" aria-pressed={typeRow === i} onClick={() => setTypeRow(i)} style={{ display: "flex", alignItems: "baseline", gap: 12, width: "100%", background: typeRow === i ? "#10131b" : "transparent", border: "none", borderBottom: "1px solid #23252c", padding: "3px 6px", cursor: "pointer", font: "inherit", color: "#f0f0f2", textAlign: "left" }}>
          <span style={{ width: 74, fontSize: 11.5, color: "#9a9aa0" }}>{n}</span>
          <span style={{ fontSize: Math.min(30, Number(s)), lineHeight: 1.15, fontWeight: w === "Semibold" ? 700 : w === "Medium" ? 500 : 400 }}>Ag</span>
          <span style={{ marginLeft: "auto", fontFamily: "'IBM Plex Mono', monospace", fontSize: 17, color: "#00E5FF" }}>{s}</span>
          <span style={{ width: 66, fontSize: 11, color: "#9a9aa0" }}>{w}</span>
        </button>)}</div>
        <p style={{ margin: "8px 0 0", color: "#9a9aa0" }} aria-live="polite">Selected: {TYPE_SCALE[typeRow][0]} — {TYPE_SCALE[typeRow][1]}px · {TYPE_SCALE[typeRow][2]} (specimens capped at 30px for the slide canvas).</p></div>
      <div className="tks-card"><p className="tks-kicker">Grid</p><p style={{ margin: "4px 0", color: "#c9c9ce", fontSize: 11.5 }}>12 Columns — callouts as printed: <b>Margins</b> · <b>Gutters</b></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 3 }}>{Array.from({ length: 12 }, (_, i) => <span key={i} style={{ height: 28, background: "#14161c", border: "1px dashed #2c2f36" }} />)}</div></div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1fr 1.3fr", marginTop: 7 }}>
      <div className="tks-card"><p className="tks-kicker">Voice wave</p>
        <svg viewBox="0 0 300 50" width="100%" height="30" role="img" aria-label="Voice wave: flowing cyan-to-violet waveform lines"><path d="M0,25 C50,5 90,45 150,25 C210,5 250,45 300,25" fill="none" stroke="#00E5FF" strokeWidth="1.2" opacity={0.4 + glow * 0.6} /><path d="M0,25 C50,15 90,35 150,25 C210,15 250,35 300,25" fill="none" stroke="#7B61FF" strokeWidth="1.2" /></svg>
        <p style={{ color: "#9a9aa0", margin: 0 }}>The wave's energy follows the activation stage selected on the right.</p></div>
      <div className="tks-card"><p className="tks-kicker">Activation — select a state</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 6 }}>{ACTIVATION.map((a, i) => <button key={a} type="button" className="tks-chip" aria-pressed={stage === i} onClick={() => setStage(i)}>{String(i + 1).padStart(2, "0")} {a}</button>)}</div>
        <p style={{ textAlign: "center", fontSize: 26, margin: "5px 0 0", background: "linear-gradient(90deg,#00E5FF,#7B61FF)", WebkitBackgroundClip: "text", color: "transparent", fontWeight: 900, opacity: 0.25 + glow * 0.75 }} aria-live="polite">⋈</p>
        <p style={{ textAlign: "center", color: "#9a9aa0", margin: 0 }}>{ACTIVATION[stage]} — mark glow {(glow * 100).toFixed(0)}% (visualised from the printed state sequence)</p></div>
    </div>
    <div className="tks-grid" style={{ gridTemplateColumns: "1.3fr 1fr", marginTop: 7 }}>
      <div className="tks-card"><p className="tks-kicker">Iconography</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 6 }}>{ICONS.map((n) => <button key={n} type="button" className="tks-chip" aria-pressed={icon === n} onClick={() => setIcon(n)}>{n}</button>)}</div>
        <p style={{ margin: "8px 0 0" }} aria-live="polite">Selected icon: <b>{icon}</b> — line icon set as printed (Home, Search, Library, Live, On Demand, Voice, Profile, Settings).</p></div>
      <div className="tks-card"><p className="tks-kicker">Surfaces</p>{SURFACES.map(([n, v]) => <p key={n} style={{ margin: "4px 0", display: "flex", justifyContent: "space-between" }}><span>{n}</span><span style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#9a9aa0" }}>{v}</span></p>)}</div>
    </div>
  </div>;
}

/* ---------------- AurionX_18 — Television Design System ---------------- */

export function AurionXTVDesignSystem() {
  const [focus, setFocus] = useState<"edge" | "highlands">("edge");
  const [toast, setToast] = useState<string | null>(null);
  const [modal, setModal] = useState<"remove" | "delete" | null>(null);
  const [inList, setInList] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [progress, setProgress] = useState(54);
  const [subtitle, setSubtitle] = useState<"Default" | "Large" | "High Contrast">("Default");
  const [voice, setVoice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [safeArea, setSafeArea] = useState("Action Safe Area");
  const chapters: Array<[string, number]> = [["Start", 0], ["Chapter 1 · 12:45", 21], ["Chapter 2 · 34:20", 57], ["End", 100]];
  const notify = (msg: string) => { setToast(msg); };
  return <div className="tks tks--dark" style={{ background: "#07080d", padding: "18px 22px 14px" }} role="region" aria-label="AurionX television design system — interactive rebuild of AurionX_18">
    <div className="tks-head"><span><b>Aurion<span style={{ color: "#7B61FF" }}>X</span></b>&nbsp;&nbsp;|&nbsp;&nbsp;Television Design System&nbsp;&nbsp;·&nbsp;&nbsp;18 of 41</span><span style={{ fontFamily: "Inter, sans-serif", fontSize: 11 }}>Ten-Foot Experience · Clear · Confident · Purposeful</span></div>
    {toast && <p role="status" style={{ background: "#14161c", borderLeft: "3px solid #7B61FF", padding: "8px 12px", margin: "10px 0 0" }}>✓ {toast} <button type="button" className="tks-chip" style={{ float: "right" }} onClick={() => setToast(null)}>Dismiss</button></p>}
    {modal && <div style={{ background: modal === "delete" ? "#2a0f0f" : "#14161c", border: "1px solid #3a3b3f", borderRadius: 10, padding: "14px", marginTop: 7 }} role="alertdialog" aria-label={modal === "delete" ? "Delete download confirmation" : "Remove from My List"}>
      {modal === "remove" ? <div><b>Remove from My List?</b><p style={{ color: "#b9b9be" }}>Edge of Tomorrow will be removed from your list.</p>
        <button type="button" className="tks-btn tks-btn--ghost" onClick={() => setModal(null)}>Cancel</button> <button type="button" className="tks-btn" style={{ background: "#d92d20", borderColor: "#d92d20", color: "#fff" }} onClick={() => { setInList(false); setModal(null); notify("Removed from My List"); }}>Remove</button></div>
      : <div><b>⚠ Delete Download?</b><p style={{ color: "#e8b4b0" }}>Edge of Tomorrow will be deleted from this device.</p>
        <button type="button" className="tks-btn tks-btn--ghost" onClick={() => setModal(null)}>Cancel</button> <button type="button" className="tks-btn" style={{ background: "#d92d20", borderColor: "#d92d20", color: "#fff" }} onClick={() => { setDeleted(true); setModal(null); notify("Download deleted"); }}>Delete</button></div>}
    </div>}
    <div className="tks-grid" style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1fr", marginTop: 8 }}>
      <div>
        <p className="tks-kicker">Content Cards — Focused / Rest</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {([["edge", "Edge of Tomorrow", "2024 • Action, Sci-Fi • 2h 5m", "A soldier relives the same day in an endless battle for survival."], ["highlands", "Highlands", "2023 • Drama • 1h 48m", "A remote village, a hidden past, a path forward."]] as const).map(([id, name, meta, sub]) => <button key={id} type="button" className="tks-card" style={focus === id ? { borderImage: "linear-gradient(90deg,#2979FF,#7B61FF) 1", boxShadow: "0 0 0 2px #7B61FF" } : undefined} aria-pressed={focus === id} onClick={() => setFocus(id)}>
            <span className="tks-kicker">{focus === id ? "Focused" : "Rest"}</span>
            <span style={{ display: "block", height: 40, background: "linear-gradient(160deg,#3a4a63,#14161c)", borderRadius: 6, margin: "5px 0" }} />
            <b style={{ display: "block" }}>{name}</b><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>{meta}</span>
            <span style={{ display: "block", color: "#c9c9ce", fontSize: 11, marginTop: 3 }}>{sub}</span>
            {id === "edge" && <span style={{ display: "block", marginTop: 6 }}>▶ Play&nbsp;&nbsp;More Info</span>}
          </button>)}
        </div>
        <p className="tks-kicker" style={{ marginTop: 8 }}>Progress Indicators — drag to update Linear, Buffered and Circular together</p>
        <input type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} aria-label="Progress" style={{ width: "100%" }} />
        <p style={{ margin: "4px 0", color: "#c9c9ce" }}>Linear {progress}% · Buffered {progress}% · Circular {progress}% (printed at 54% / 54% / 75%)</p>
        <p className="tks-kicker" style={{ marginTop: 7 }}>Timeline Markers</p>
        <p style={{ margin: "4px 0" }}>{chapters.map(([n, v]) => <button key={n} type="button" className="tks-chip" style={{ marginRight: 5 }} aria-pressed={progress === v} onClick={() => setProgress(v)}>{n} — {v === 0 ? "00:00" : v === 100 ? "60:00" : n.split("· ")[1]}</button>)}</p>
      </div>
      <div>
        <p className="tks-kicker">Remote Control Focus Ring</p>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ width: 96, height: 96, borderRadius: "50%", border: "3px solid #2979FF", margin: "0 auto", display: "grid", placeItems: "center", boxShadow: "0 0 18px rgba(123,97,255,.45)" }}>
            <div><button type="button" className="tks-chip" aria-label="Up" onClick={() => setFocus("edge")}>⌃</button><br />
            <button type="button" className="tks-chip" aria-label="Left" onClick={() => setFocus("edge")}>‹</button> <span style={{ display: "inline-block", width: 26, height: 26, borderRadius: "50%", background: "#22242a", verticalAlign: "middle" }} /> <button type="button" className="tks-chip" aria-label="Right" onClick={() => setFocus("highlands")}>›</button><br />
            <button type="button" className="tks-chip" aria-label="Down" onClick={() => setFocus("highlands")}>⌄</button></div>
          </div>
          <button type="button" className="tks-btn" style={{ marginTop: 8 }} onClick={() => notify(`Select / OK — ${focus === "edge" ? "Edge of Tomorrow" : "Highlands"} focused`)}>Select / OK</button>
        </div>
        <p style={{ color: "#9a9aa0", margin: 0 }}>Focus ring — Cyan to violet activation gradient · Directional navigation · Select / OK. Focused card: <b style={{ color: "#fff" }}>{focus === "edge" ? "Edge of Tomorrow" : "Highlands"}</b></p>
        <p className="tks-kicker" style={{ marginTop: 8 }}>Confidence States</p>
        {voice === "Search for sci-fi movies" && <p style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: "8px", margin: "5px 0" }}>◉ Playing — Edge of Tomorrow<br /><span style={{ color: "#7ee787" }}>100% confident</span> (High confidence)</p>}
        {voice === "What should I watch?" && <p style={{ border: "1px solid #2c2d30", borderRadius: 8, padding: "8px", margin: "5px 0" }}>◉ Did you mean Edge of Tomorrow?<br /><span style={{ color: "#c4a7ff" }}>40% confident</span> (Low confidence)</p>}
        {!voice && <p style={{ color: "#9a9aa0", margin: "5px 0" }}>Use a Voice &amp; Input prompt to see the printed confidence states.</p>}
        <p className="tks-kicker" style={{ marginTop: 7 }}>Loading &amp; Cancellation</p>
        <p style={{ margin: "4px 0" }}>{loading ? "◌ Loading your experience... Please wait" : "✕ Cancelled — No changes were made"} <button type="button" className="tks-chip" style={{ marginLeft: 8 }} onClick={() => setLoading((v) => !v)}>{loading ? "Cancel" : "Reload"}</button></p>
      </div>
      <div>
        <p className="tks-kicker">Buttons</p>
        <p style={{ margin: "6px 0" }}><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>Primary</span><br /><button type="button" className="tks-btn" style={{ background: "linear-gradient(90deg,#2979FF,#7B61FF)", border: "none", color: "#fff", width: "100%" }} onClick={() => notify("Playing Edge of Tomorrow")}>▶ Play</button></p>
        <p style={{ margin: "6px 0" }}><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>Secondary</span><br /><button type="button" className="tks-btn tks-btn--ghost" style={{ width: "100%" }} onClick={() => inList ? setModal("remove") : (setInList(true), notify("Added to My List"))}>{inList ? "✓ In My List — Remove…" : "+ My List"}</button></p>
        <p style={{ margin: "6px 0" }}><span style={{ color: "#9a9aa0", fontSize: 10.5 }}>Destructive</span><br /><button type="button" className="tks-btn" style={{ background: "#d92d20", borderColor: "#d92d20", color: "#fff", width: "100%" }} disabled={deleted} onClick={() => setModal("delete")}>{deleted ? "Download Deleted" : "🗑 Delete"}</button></p>
        <p className="tks-kicker" style={{ marginTop: 8 }}>Toast</p>
        <p style={{ border: "1px solid #2c2d30", borderLeft: "3px solid #7B61FF", borderRadius: 6, padding: "8px", margin: "5px 0" }}>✓ Added to My List <span style={{ color: "#9a9aa0" }}>(printed toast specimen)</span></p>
        <p className="tks-kicker" style={{ marginTop: 8 }}>Subtitle Styles</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{(["Default", "Large", "High Contrast"] as const).map((s) => <button key={s} type="button" className="tks-chip" aria-pressed={subtitle === s} onClick={() => setSubtitle(s)}>{s}</button>)}</div>
        <p style={{ margin: "8px 0 0", background: "#000", padding: "10px", textAlign: "center", color: subtitle === "High Contrast" ? "#ffe600" : "#fff", fontSize: subtitle === "Large" ? 16 : 12.5, fontWeight: subtitle === "Large" ? 800 : 500, textTransform: subtitle === "Large" ? "uppercase" : "none" }} aria-live="polite">{subtitle === "Large" ? "THE JOURNEY IS JUST BEGINNING." : "The journey is just beginning."}</p>
        <p className="tks-kicker" style={{ marginTop: 8 }}>Modal Dialog</p>
        <p style={{ margin: "4px 0" }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setModal("remove")}>Open "Remove from My List?" dialog</button></p>
      </div>
      <div>
        <p className="tks-kicker">Voice &amp; Input</p>
        {["Search for sci-fi movies", "What should I watch?"].map((q) => <button key={q} type="button" className="tks-card" style={{ display: "block", width: "100%", marginBottom: 7 }} aria-pressed={voice === q} onClick={() => setVoice(q)}>🎙 {q}</button>)}
        <p className="tks-kicker" style={{ marginTop: 8 }}>High Contrast State</p>
        <div style={{ border: "2px solid #ffe600", borderRadius: 8, padding: "9px", display: "flex", gap: 9, alignItems: "center" }}><span style={{ background: "#ffe600", color: "#000", fontWeight: 900, padding: "10px 12px", borderRadius: 5 }}>▶</span><span><b style={{ color: "#ffe600" }}>Edge of Tomorrow</b><br /><span style={{ color: "#eee", fontSize: 11 }}>2024 • Action, Sci-Fi • 2h 5m</span><br /><span style={{ display: "block", height: 4, background: "#333", marginTop: 5 }}><span style={{ display: "block", height: 4, width: "40%", background: "#ffe600" }} /></span></span></div>
        <p className="tks-kicker" style={{ marginTop: 8 }}>TV Safe-Area Grid</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{["Action Safe Area", "Title Safe Area", "TV Frame"].map((s) => <button key={s} type="button" className="tks-chip" aria-pressed={safeArea === s} onClick={() => setSafeArea(s)}>{s}</button>)}</div>
        <p style={{ margin: "7px 0 0", color: "#c9c9ce" }} aria-live="polite">{safeArea === "Action Safe Area" ? "Action Safe Area — 90% · 1620 × 900" : safeArea === "Title Safe Area" ? "Title Safe Area — 80% · 1440 × 810" : "TV Frame — 100% · 1920 × 1080"}</p>
        <p className="tks-kicker" style={{ marginTop: 8 }}>Viewing Distance</p>
        <p style={{ margin: "4px 0", color: "#c9c9ce" }}>10 ft — Optimal experience at 10 feet (3 meters)</p>
        <p className="tks-kicker" style={{ marginTop: 8 }}>Destructive Confirmation</p>
        <p style={{ margin: "4px 0" }}><button type="button" className="tks-btn tks-btn--ghost" onClick={() => setModal("delete")}>Open "Delete Download?" confirmation</button></p>
      </div>
    </div>
    <div className="tks-foot"><span>AurionX Television Design System</span><span>Built for clarity. Designed for distance. Made to entertain.</span><span>18 of 41</span></div>
  </div>;
}
