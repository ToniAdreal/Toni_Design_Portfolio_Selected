import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import { projects, type Project } from "../content/portfolio";
import { useMotionSetting } from "../motion/MotionContext";
import ReferenceNav from "./ReferenceNav";
import ReferenceFooter from "./ReferenceFooter";
import "./reference-work.css";

const ease = [0.22, 1, 0.36, 1] as const;
const selectedProjects = projects.filter((project) => project.enabled);

function ProjectRow({ project, index, open, onToggle }: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { reduced } = useMotionSetting();
  const panelId = `work-panel-${project.slug}`;
  const titleId = `work-title-${project.slug}`;
  const titleRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => () => cancelAnimationFrame(animationRef.current), []);

  // A short decode on deliberate entry; no per-frame React state updates.
  const decodeTitle = () => {
    if (reduced || !titleRef.current) return;
    cancelAnimationFrame(animationRef.current);
    const start = performance.now();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 290, 1);
      if (!titleRef.current) return;
      titleRef.current.textContent = project.title.split("").map((char, position) => {
        if (char === " " || position / project.title.length < progress) return char;
        return letters[(position * 7 + Math.floor((now - start) / 42)) % letters.length];
      }).join("");
      if (progress < 1) animationRef.current = requestAnimationFrame(tick);
    };
    animationRef.current = requestAnimationFrame(tick);
  };

  const settleTitle = () => {
    cancelAnimationFrame(animationRef.current);
    if (titleRef.current) titleRef.current.textContent = project.title;
  };

  return (
    <motion.article
      layout="position"
      className={`ref-work-row${open ? " is-open" : ""}`}
      transition={{ layout: reduced ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 27 } }}
    >
      <h2 className="ref-work-row-heading">
        <button
          className="ref-work-row-trigger"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${project.title}, ${open ? "collapse" : "expand"} project`}
          onClick={onToggle}
          onPointerEnter={decodeTitle}
          onPointerLeave={settleTitle}
          onFocus={decodeTitle}
          onBlur={settleTitle}
        >
          <span className="ref-work-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <span className="ref-work-title" id={titleId}>
            <span className="ref-work-title-measure" aria-hidden="true">{project.title}</span>
            <span className="ref-work-title-display" ref={titleRef} aria-hidden="true">{project.title}</span>
            <span className="ref-work-sr-only">{project.title}</span>
          </span>
          <span className="ref-work-row-meta" aria-hidden="true">
            <span>{project.domain.slice(0, 2).join(" / ")}</span>
            <span>{project.year} <span className="ref-work-meta-separator">/</span> {project.state}</span>
          </span>
          <span className="ref-work-plus" aria-hidden="true"><span /><span /></span>
        </button>
      </h2>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={titleId}
            className="ref-work-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: reduced ? 0 : 0.65, ease }, opacity: { duration: reduced ? 0 : 0.3 } }}
          >
            <div className="ref-work-panel-content">
              <div className="ref-work-project-copy">
                <p className="ref-work-project-problem">{project.tagline}</p>
                <p className="ref-work-project-abstract">{project.publicAbstract}</p>
                <dl className="ref-work-facts">
                  <div><dt>Role</dt><dd>{project.role}</dd></div>
                  <div><dt>Field</dt><dd>{project.domain.join(" / ")}</dd></div>
                  <div><dt>Status</dt><dd>{project.state} / {project.accessState}</dd></div>
                </dl>
                {project.hasCaseStudy ? (
                  <Link className="ref-work-project-link" to={`/portfolio/work/${project.slug}`}>
                    Read the case study <span aria-hidden="true">↗</span>
                  </Link>
                ) : (
                  <a className="ref-work-project-link" href="mailto:toniadreal11@gmail.com">
                    Discuss this project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <figure className="ref-work-figure">
                <div className="ref-work-image-mask">
                  <motion.img
                    src={project.coverImage}
                    alt={project.coverAlt}
                    loading="lazy"
                    initial={reduced ? false : { scale: 1.09 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.9, ease }}
                  />
                </div>
                <figcaption><span>Selected case-study cover</span><span>{project.year}</span></figcaption>
              </figure>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ReferenceWork() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const { reduced } = useMotionSetting();

  useEffect(() => {
    document.title = "Selected work — Toni Adreal";
  }, []);

  return (
    <div className="ref-work-page">
      <ReferenceNav />
      <main id="main-content" tabIndex={-1} className="ref-work-main">
        <header className="ref-work-intro">
          <div className="ref-work-eyebrow"><span>Independent practice</span><span>Product / Systems / Code</span></div>
          <h1 className="ref-work-heading">
            <motion.span initial={reduced ? false : { y: "108%" }} animate={{ y: 0 }} transition={{ duration: 0.95, ease }}>Selected work.</motion.span>
          </h1>
          <div className="ref-work-description">
            <p>A collection of questions<br />turned into working systems.</p>
            <p>Product design, design engineering, and experiments in AI. Open a project to explore the problem, my contribution, and the work behind it.</p>
          </div>
        </header>
        <section className="ref-work-projects" aria-label="Selected projects">
          <div className="ref-work-list-label"><span>Project index</span><span>{String(selectedProjects.length).padStart(2, "0")} projects</span></div>
          {selectedProjects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={index}
              open={openProject === project.slug}
              onToggle={() => setOpenProject(openProject === project.slug ? null : project.slug)}
            />
          ))}
        </section>
        <div className="ref-work-endnote">
          <span>Always a work in progress.</span>
          <Link to="/portfolio">Back to the beginning <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
      <ReferenceFooter />
    </div>
  );
}
