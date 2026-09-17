import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useSpring, useMotionValue, useTransform } from "motion/react";
import { Link } from "react-router";
import {
  domainFilters,
  projects,
  type Project,
  artifacts,
} from "../content/portfolio";
import { useMotionSetting } from "../motion/MotionContext";
import { useMotionKernel } from "../motion/MotionKernel";

const GLYPHS = "01_!><[]*#~/\\";

// Text scramble decode effect on hover/focus
function ScrambleTitle({ title, isHovered }: { title: string; isHovered: boolean }) {
  const { reduced } = useMotionSetting();
  const [displayText, setDisplayText] = useState(title);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduced || !isHovered) {
      setDisplayText(title);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      return;
    }

    let iteration = 0;
    const totalFrames = title.length * 2.5;

    const tick = () => {
      iteration++;
      const resolvedChars = Math.floor((iteration / totalFrames) * title.length);

      const scrambled = title
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < resolvedChars) return title[index];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (iteration < totalFrames) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(title);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isHovered, title, reduced]);

  return (
    <span aria-label={title} className="font-display text-lg font-semibold tracking-tight">
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}

function QuickView({ p }: { p: Project }) {
  const related = artifacts.filter((a) => p.relatedArtifacts.includes(a.id));
  return (
    <div className="grid gap-6 border-t border-white/10 bg-white/[0.02] px-4 py-6 md:grid-cols-2 md:px-8">
      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#A7ABB2]/60">
          Executive Abstract
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-[#F5F6F7]/85">
          {p.publicAbstract}
        </p>
        <h4 className="mt-5 font-mono text-xs uppercase tracking-wider text-[#A7ABB2]/60">
          Personal ownership
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-[#F5F6F7]/85">
          {p.role}
        </p>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#A7ABB2]/60">
          Synthesized Evidence
        </h4>
        <ul className="mt-2 space-y-2 text-sm text-[#F5F6F7]/85">
          {related.map((a) => (
            <li key={a.id} className="flex gap-2">
              <span className="text-cobalt font-mono">—</span>
              <span>
                {a.caption}{" "}
                <span className="font-mono text-xs text-[#A7ABB2]/60">
                  ({a.confidentiality})
                </span>
              </span>
            </li>
          ))}
        </ul>
        <h4 className="mt-5 font-mono text-xs uppercase tracking-wider text-[#A7ABB2]/60">
          {p.outcomeType === "Verified outcome" ? "Verified Outcome" : "Delivery Status"}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-white font-medium">
          {p.outcome}
        </p>
        {p.hasCaseStudy && (
          <Link
            to={`/portfolio/work/${p.slug}`}
            className="mt-5 inline-block font-mono text-xs font-semibold text-cobalt hover:underline"
          >
            Open comprehensive case study →
          </Link>
        )}
      </div>
    </div>
  );
}

// Spring-smoothed cursor-following image preview
function FloatingPreview({ project }: { project: Project | null }) {
  const { capabilities, reduced } = useMotionSetting();
  const { pointerX, pointerY, pointerVelocityX } = useMotionKernel();

  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);

  // Springs for lagging follow and subtle rotational tilt
  const springX = useSpring(previewX, { damping: 22, stiffness: 220, mass: 0.15 });
  const springY = useSpring(previewY, { damping: 22, stiffness: 220, mass: 0.15 });
  const springRotate = useSpring(
    useTransform(pointerVelocityX, [-20, 20], [-6, 6]),
    { damping: 18, stiffness: 180 }
  );

  useEffect(() => {
    if (reduced || !capabilities.canUsePointerFX) return;

    const update = () => {
      const px = pointerX.get();
      const py = pointerY.get();
      // Clamp away from edges and row text
      const targetX = Math.min(px + 28, window.innerWidth - 280);
      const targetY = py - 85;

      previewX.set(targetX);
      previewY.set(targetY);
    };

    const uX = pointerX.on("change", update);
    const uY = pointerY.on("change", update);
    update();

    return () => {
      uX();
      uY();
    };
  }, [pointerX, pointerY, previewX, previewY, capabilities.canUsePointerFX, reduced]);

  if (reduced || !capabilities.canUsePointerFX || !project) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotate: springRotate,
      }}
      initial={{ opacity: 0, scale: 0.9, clipPath: "inset(10% 10% 10% 10%)" }}
      animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{ opacity: 0, scale: 0.9, clipPath: "inset(10% 10% 10% 10%)" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed left-0 top-0 z-30 hidden w-[240px] overflow-hidden rounded-sm border border-white/20 bg-[#0E121A] shadow-2xl lg:block"
    >
      <img
        src={project.coverImage}
        alt=""
        aria-hidden="true"
        width={240}
        height={160}
        className="aspect-[3/2] w-full object-cover"
      />
      <div className="bg-[#0B0C0E]/95 p-2 font-mono text-[10px] text-[#A7ABB2]">
        <span className="text-white font-semibold">{project.title}</span> · {project.year}
      </div>
    </motion.div>
  );
}

function Row({
  p,
  onHover,
}: {
  p: Project;
  onHover: (proj: Project | null) => void;
}) {
  const { reduced } = useMotionSetting();
  const [openQV, setOpenQV] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: reduced ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative border-b border-white/10 transition-colors hover:bg-white/[0.015]"
      onPointerEnter={() => {
        setIsHovered(true);
        onHover(p);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
    >
      <div className="relative grid grid-cols-2 items-center gap-4 py-5 md:grid-cols-[2fr_1fr_1.4fr_0.6fr_1fr_auto]">
        {/* Title & Mobile thumbnail */}
        <div className="col-span-2 md:col-span-1">
          <button
            onClick={() => setOpenQV((v) => !v)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            aria-expanded={openQV}
            className="text-left text-[#F5F6F7] transition-colors hover:text-cobalt"
          >
            <ScrambleTitle title={p.title} isHovered={isHovered} />
          </button>
          {/* Mobile responsive thumbnail */}
          <img
            src={p.coverImage}
            alt={p.coverAlt}
            width={160}
            height={100}
            loading="lazy"
            className="mt-3 w-36 rounded-sm border border-white/10 object-cover lg:hidden"
          />
        </div>

        {/* Metadata columns */}
        <div className="hidden font-mono text-xs text-[#A7ABB2] md:block">
          {p.domain[0]}
        </div>
        <div className="hidden font-mono text-xs text-[#A7ABB2] md:block">
          {p.role.split(" (")[0]}
        </div>
        <div className="font-mono text-xs text-[#A7ABB2]">{p.year}</div>
        <div className="font-mono text-xs text-[#A7ABB2]">
          <span className="text-white font-medium">{p.state}</span>
          <span className="block text-[11px] text-[#A7ABB2]/60">{p.accessState}</span>
        </div>

        {/* Quick View trigger */}
        <button
          onClick={() => setOpenQV((v) => !v)}
          aria-expanded={openQV}
          className={`justify-self-end rounded-md border px-3.5 py-1.5 font-mono text-xs transition-colors ${
            openQV
              ? "border-cobalt bg-cobalt text-white"
              : "border-white/20 text-[#A7ABB2] hover:border-white hover:text-white"
          }`}
        >
          {openQV ? "Close" : "Quick view"}
        </button>
      </div>

      {/* FLIP-style QuickView expansion */}
      <AnimatePresence initial={false}>
        {openQV && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0.15 : 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <QuickView p={p} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProjectIndex() {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const list = projects.filter((p) => {
    if (!p.enabled) return false;
    if (!filter) return true;
    if (filter === "Public" || filter === "Restricted") return p.accessState === filter;
    return p.domain.includes(filter as any);
  });

  return (
    <section
      id="index"
      aria-label="Project index table"
      className="mx-auto max-w-[1440px] px-6 py-28 sm:px-8 md:px-12"
    >
      <FloatingPreview project={hoveredProject} />

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Project Index // 04
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Complete Index
          </h2>
        </div>
        <span className="font-mono text-xs text-[#A7ABB2]">
          {list.length} {list.length === 1 ? "project" : "projects"} displayed
        </span>
      </div>

      {/* Filter Chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(null)}
          aria-pressed={filter === null}
          className={`rounded-full border px-3.5 py-1 font-mono text-xs transition-colors ${
            filter === null
              ? "border-cobalt bg-cobalt text-white"
              : "border-white/15 text-[#A7ABB2] hover:border-white/40"
          }`}
        >
          All
        </button>
        {domainFilters.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            aria-pressed={filter === d}
            className={`rounded-full border px-3.5 py-1 font-mono text-xs transition-colors ${
              filter === d
                ? "border-cobalt bg-cobalt text-white"
                : "border-white/15 text-[#A7ABB2] hover:border-white/40"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div className="mt-10 hidden border-b border-white/20 pb-3 font-mono text-xs uppercase tracking-wider text-[#A7ABB2]/60 md:grid md:grid-cols-[2fr_1fr_1.4fr_0.6fr_1fr_auto] md:gap-4">
        <span>Project</span>
        <span>Domain</span>
        <span>Role</span>
        <span>Year</span>
        <span>Status</span>
        <span className="justify-self-end">Action</span>
      </div>

      {/* Project Rows */}
      <div className="divide-y divide-white/10">
        {list.map((p) => (
          <Row key={p.slug} p={p} onHover={setHoveredProject} />
        ))}
      </div>
    </section>
  );
}

export default ProjectIndex;
