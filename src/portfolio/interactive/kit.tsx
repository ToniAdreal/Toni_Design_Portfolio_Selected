import { useState } from "react";
import { projectBySlug } from "../../content/real";
import "./kit.css";

export type GalleryImage = { src: string; alt: string; caption: string; rationale: string; tags?: string[] };

/**
 * KitScreen — the shared interactive fallback for case-study screens.
 *
 * Replaces the static printed image with a real chapter explorer built
 * ONLY from the case study's own data (src/content/real/*.ts): screen
 * titles, captions, rationale, tags, project metrics, formulas,
 * decisions and workflow. No content is invented; where a screen's own
 * product UI has a bespoke rebuild, the registry uses that instead.
 */
export function KitScreen({ slug, chapterTitle, images, activeIndex }: {
  slug: string;
  chapterTitle: string;
  images: GalleryImage[];
  activeIndex: number;
}) {
  const project = projectBySlug(slug);
  const [selected, setSelected] = useState(activeIndex);
  const [tab, setTab] = useState<"screen" | "data">("screen");
  const [openDecision, setOpenDecision] = useState<string | null>(null);
  const image = images[selected] ?? images[0];
  if (!image) return null;

  return <div className="ix" role="region" aria-label={`${project?.name ?? slug} — ${chapterTitle} (interactive)`}>
    <div className="ix-head"><span><b>{project?.index ?? ""}</b>&nbsp;&nbsp;|&nbsp;&nbsp;{chapterTitle}</span><span className="ix-brand">{project?.name}</span></div>
    <div className="ix-body" style={{ paddingTop: 10 }}>
      {project && <div className="ix-stats" style={{ background: "#101012", padding: 10, marginBottom: 10 }}>
        {project.metrics.map((m) => <div className="ix-stat" key={m.label} style={{ border: 0, padding: 0 }}>
          <span>{m.label}</span><b style={{ color: "#f5f5f5", fontSize: 14 }}>{m.value}</b>
        </div>)}
      </div>}
      <div className="ix-explorer">
        <nav className="ix-rail" aria-label={`Screens in ${chapterTitle}`}>
          {images.map((img, i) => <button type="button" key={img.src} aria-pressed={i === selected} onClick={() => setSelected(i)}>
            <span className="ix-mono" style={{ fontSize: 9, opacity: .6 }}>{String(i + 1).padStart(2, "0")} · </span>{img.alt}
          </button>)}
        </nav>
        <div>
          <div className="ix-tabs" role="tablist" aria-label="Screen detail views" style={{ marginBottom: 8 }}>
            <button type="button" role="tab" className="ix-tab" style={{ color: tab === "screen" ? "#111" : "#8a8578", borderBottomColor: tab === "screen" ? "#111" : "transparent" }} aria-selected={tab === "screen"} onClick={() => setTab("screen")}>Screen</button>
            <button type="button" role="tab" className="ix-tab" style={{ color: tab === "data" ? "#111" : "#8a8578", borderBottomColor: tab === "data" ? "#111" : "transparent" }} aria-selected={tab === "data"} onClick={() => setTab("data")}>Project Data</button>
          </div>
          {tab === "screen" ? <div className="ix-detail" aria-live="polite">
            <h4>{image.alt}</h4>
            <p>{image.caption}</p>
            <p className="ix-why"><span className="ix-label" style={{ color: "#8a8578" }}>Why this design</span>{image.rationale}</p>
            {image.tags && image.tags.length > 0 && <p>{image.tags.map((t) => <span key={t} className="ix-chip" style={{ borderColor: "#c9c4b4", marginRight: 6 }}>{t}</span>)}</p>}
          </div> : <div className="ix-detail">
            {project?.formulas && project.formulas.length > 0 && <div style={{ marginBottom: 12 }}>
              <p className="ix-label" style={{ color: "#8a8578" }}>Formulas</p>
              {project.formulas.map((f) => <p key={f.name} style={{ marginBottom: 6 }}><b>{f.name}.</b> <span className="ix-mono" style={{ fontSize: 11 }}>{f.expr}</span>{f.note ? <><br /><span style={{ color: "#55534e" }}>{f.note}</span></> : null}</p>)}
            </div>}
            {project?.decisions && project.decisions.length > 0 && <div style={{ marginBottom: 12 }}>
              <p className="ix-label" style={{ color: "#8a8578" }}>Key Decisions — select to expand</p>
              {project.decisions.map((d) => <div key={d.id} style={{ marginBottom: 6 }}>
                <button type="button" className="ix-row" style={{ borderColor: "#d8d4c8", background: "#fff" }} aria-expanded={openDecision === d.id} onClick={() => setOpenDecision(openDecision === d.id ? null : d.id)}>{d.question}</button>
                {openDecision === d.id && <div style={{ border: "1px solid #d8d4c8", borderTop: 0, padding: "8px 10px", background: "#fff" }}>
                  <p style={{ margin: "0 0 6px" }}><b>Decision:</b> {d.decision}</p>
                  <p style={{ margin: "0 0 6px" }}><b>Evidence:</b> {d.evidence}</p>
                  <p style={{ margin: 0, color: "#55534e" }}><b>Why:</b> {d.why}</p>
                </div>}
              </div>)}
            </div>}
            {project?.workflow && project.workflow.length > 0 && <div>
              <p className="ix-label" style={{ color: "#8a8578" }}>Workflow</p>
              {project.workflow.map((w) => <p key={w.stage} style={{ marginBottom: 5 }}><b>{w.stage}</b> — {w.artifact} <span style={{ color: "#55534e" }}>({w.tool})</span></p>)}
            </div>}
            {!project?.formulas && !project?.decisions && !project?.workflow && <p>No additional structured project data is published for this case study.</p>}
          </div>}
        </div>
      </div>
    </div>
    <div className="ix-foot"><span>{project?.context}</span><span>Interactive screen — real components, not an image</span></div>
  </div>;
}
