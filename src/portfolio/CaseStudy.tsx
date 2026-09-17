import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { caseStudies, getProject, projects, type CaseChapter, type Project } from "../content/portfolio";
import { useMotionSetting } from "../motion/MotionContext";
import ReferenceFooter from "./ReferenceFooter";
import ReferenceNav from "./ReferenceNav";
import "./reference-case.css";

const ease = [0.22, 1, 0.36, 1] as const;

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const distance = root.scrollHeight - root.clientHeight;
      setProgress(distance > 0 ? root.scrollTop / distance : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="ref-case-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>;
}

function CaseFacts({ project }: { project: Project }) {
  return <dl className="ref-case-facts">
    <div><dt>Role</dt><dd>{project.role}</dd></div>
    <div><dt>Team</dt><dd>{project.team}</dd></div>
    <div><dt>Time</dt><dd>{project.year} / {project.duration}</dd></div>
    <div><dt>Status</dt><dd>{project.state} / {project.accessState}</dd></div>
  </dl>;
}

function RestrictedView({ project }: { project: Project }) {
  return <>
    <main id="main-content" tabIndex={-1} className="ref-case-main ref-case-restricted">
      <Link className="ref-case-back" to="/portfolio/work"><span aria-hidden="true">←</span> Selected work</Link>
      <header className="ref-case-hero">
        <div className="ref-case-kicker"><span>Restricted project</span><span>{project.year}</span></div>
        <h1>{project.title}</h1>
        <p className="ref-case-lede">{project.tagline}</p>
      </header>
      <section className="ref-case-restricted-grid" aria-labelledby="public-abstract">
        <div><p className="ref-case-label">Access note</p><h2 id="public-abstract">Public abstract</h2></div>
        <div>
          <p>{project.publicAbstract}</p>
          <p className="ref-case-access-note">Implementation details and internal results remain confidential. A supervised review can be arranged without shipping private material to the browser.</p>
          <a className="ref-case-action" href="https://toni.tokenta.space/#contact" target="_blank" rel="noreferrer">Request a review <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <CaseFacts project={project} />
    </main>
    <ReferenceFooter />
  </>;
}

function Chapter({ chapter, index, onEnter }: { chapter: CaseChapter; index: number; onEnter: (id: string) => void }) {
  useEffect(() => {
    const element = document.getElementById(chapter.id);
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onEnter(chapter.id);
    }, { rootMargin: "-35% 0px -55% 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [chapter.id, onEnter]);

  return <section id={chapter.id} className="ref-case-chapter">
    <div className="ref-case-chapter-heading"><span>{String(index + 1).padStart(2, "0")}</span><h2>{chapter.title}</h2></div>
    {chapter.body.length > 0 && <div className="ref-case-chapter-body">{chapter.body.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>}
    {chapter.image && <figure className={chapter.fullBleed ? "is-wide" : undefined}>
      <div className="ref-case-image-mask"><img src={chapter.image} alt={chapter.imageAlt ?? chapter.title} loading="lazy" /></div>
      {chapter.imageAlt && <figcaption><span>{chapter.imageAlt}</span><span>Synthetic / public-safe visual</span></figcaption>}
    </figure>}
    {chapter.images && chapter.images.length > 0 && <div className="ref-case-gallery">
      {chapter.images.map((image, imageIndex) => <figure className="ref-case-gallery-item" key={image.src}>
        <div className="ref-case-image-mask"><img src={image.src} alt={image.alt} loading={index === 0 && imageIndex === 0 ? "eager" : "lazy"} decoding="async" /></div>
        <figcaption><span>{image.caption}</span><span>{image.rationale}</span></figcaption>
      </figure>)}
    </div>}
  </section>;
}

export default function CaseStudy() {
  const { slug = "" } = useParams();
  const { reduced } = useMotionSetting();
  const project = getProject(slug);
  const study = caseStudies[slug];
  const [active, setActive] = useState("summary");

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — Toni Adreal`;
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = project.accessState === "Restricted" ? "noindex, nofollow" : "index, follow";
    return () => { if (robots) robots.content = "index, follow"; };
  }, [project]);

  if (!project) return <div className="ref-case-page"><ReferenceNav /><main id="main-content" tabIndex={-1} className="ref-case-main ref-case-missing"><p className="ref-case-label">404 / Project index</p><h1>Project not found.</h1><Link className="ref-case-action" to="/portfolio/work">Return to selected work <span aria-hidden="true">↗</span></Link></main><ReferenceFooter /></div>;

  if (project.accessState === "Restricted" || !study) return <div className="ref-case-page"><ReferenceNav /><RestrictedView project={project} /></div>;

  const enabled = projects.filter((item) => item.enabled && item.hasCaseStudy && caseStudies[item.slug]);
  const projectIndex = enabled.findIndex((item) => item.slug === slug);
  const previous = enabled[projectIndex - 1];
  const next = enabled[projectIndex + 1];

  return <div className="ref-case-page">
    {!reduced && <ReadingProgress />}
    <ReferenceNav />
    <main id="main-content" tabIndex={-1} className="ref-case-main">
      <Link className="ref-case-back" to="/portfolio/work"><span aria-hidden="true">←</span> Selected work</Link>
      <header className="ref-case-hero">
        <div className="ref-case-kicker"><span>{project.evidenceStage} / Case study</span><span>{project.year}</span></div>
        <h1><motion.span initial={reduced ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: .9, ease }}>{project.title}</motion.span></h1>
        <div className="ref-case-hero-bottom"><p className="ref-case-lede">{project.tagline}</p><p className="ref-case-abstract">{project.publicAbstract}</p></div>
      </header>
      <CaseFacts project={project} />
      <figure className="ref-case-cover"><div className="ref-case-image-mask"><img src={project.coverImage} alt={project.coverAlt} /></div><figcaption><span>{project.title}</span><span>{project.outcomeType}</span></figcaption></figure>
      <div className="ref-case-story">
        <nav className="ref-case-index" aria-label="Case study chapters"><p>Contents</p><ol>{study.chapters.map((chapter, index) => <li key={chapter.id} className={active === chapter.id ? "is-active" : undefined}><a href={`#${chapter.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.title}</a></li>)}</ol></nav>
        <article className="ref-case-article">
          {study.chapters.map((chapter, index) => <Chapter key={chapter.id} chapter={chapter} index={index} onEnter={setActive} />)}
          <section className="ref-case-credits"><div><p className="ref-case-label">Credits / disclosure</p><h2>What I owned.</h2></div><dl><div><dt>Ownership</dt><dd>{study.credits.ownership}</dd></div><div><dt>Collaborators</dt><dd>{study.credits.collaborators}</dd></div><div><dt>Tools</dt><dd>{study.credits.tools.join(" / ")}</dd></div><div><dt>Confidentiality</dt><dd>{study.credits.confidentiality}</dd></div></dl></section>
        </article>
      </div>
      <nav className="ref-case-next" aria-label="Continue through projects"><span>Continue exploring</span><div>{previous && <Link to={`/portfolio/work/${previous.slug}`}><small>Previous</small>{previous.title}</Link>}{next ? <Link to={`/portfolio/work/${next.slug}`}><small>Next</small>{next.title}</Link> : <Link to="/portfolio/work"><small>Next</small>Selected work</Link>}</div></nav>
    </main>
    <ReferenceFooter />
  </div>;
}
