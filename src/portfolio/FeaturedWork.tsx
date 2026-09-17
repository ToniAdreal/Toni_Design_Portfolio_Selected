import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { featuredSlugs, getProject, type Project } from "../content/portfolio";
import { useMotionSetting } from "../motion/MotionContext";
import { RevealRule } from "../motion/RevealRule";
import { Magnetic } from "../motion/Magnetic";

// Chapter 01: Tokenta Workflow OS — Animated node network assembly
function TokentaVisual({ project }: { project: Project }) {
  const { reduced } = useMotionSetting();
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm border border-white/10 bg-[#0E121A]">
      <img
        src={project.coverImage}
        alt={project.coverAlt}
        width={1200}
        height={800}
        loading="eager"
        className="h-full w-full object-cover opacity-80"
      />
      {/* Live system state overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-90" />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full bg-cobalt ${reduced ? "" : "animate-ping"}`} />
          <span className="text-white">HITL REVIEW // ACTIVE</span>
        </div>
        <span className="text-[#A7ABB2]">DISPATCH: 14ms · 4 TOOLS CONSOLIDATED</span>
      </div>
    </div>
  );
}

// Chapter 02: ALLWEB3 Escrow — Transactional state recovery timeline
function EscrowVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm border border-white/10 bg-[#0E121A]">
      <img
        src={project.coverImage}
        alt={project.coverAlt}
        width={1200}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-90" />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-white">RECOVERABLE STATE // DETERMINISTIC</span>
        </div>
        <span className="text-[#A7ABB2]">TIMELOCK: ARBITRATION WINDOW</span>
      </div>
    </div>
  );
}

// Chapter 03: Next Card — Decision branch convergence
function NextCardVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm border border-white/10 bg-[#0E121A]">
      <img
        src={project.coverImage}
        alt={project.coverAlt}
        width={1200}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-90" />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
          <span className="text-white">CONVERGED PATH: FUNDING-FIRST</span>
        </div>
        <span className="text-[#A7ABB2]">BOUNCE DROP-OFF: MITIGATED</span>
      </div>
    </div>
  );
}

// Chapter 04: AI Evaluation Harness — Scoring signal calibration grid
function EvalHarnessVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm border border-white/10 bg-[#0E121A]">
      <img
        src={project.coverImage}
        alt={project.coverAlt}
        width={1200}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-90" />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          <span className="text-white">RESTRICTED REVIEW // REDACTED DATA</span>
        </div>
        <span className="text-[#A7ABB2]">CALIBRATION: 98.4% CONFIDENCE</span>
      </div>
    </div>
  );
}

function ChapterItem({ project, index }: { project: Project; index: number }) {
  const { reduced } = useMotionSetting();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const flip = index % 2 === 1;

  const renderVisual = () => {
    switch (project.slug) {
      case "tokenta-workflow":
        return <TokentaVisual project={project} />;
      case "allweb3-escrow":
        return <EscrowVisual project={project} />;
      case "next-card":
        return <NextCardVisual project={project} />;
      case "eval-harness":
        return <EvalHarnessVisual project={project} />;
      default:
        return (
          <img
            src={project.coverImage}
            alt={project.coverAlt}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full rounded-sm border border-white/10 object-cover"
          />
        );
    }
  };

  return (
    <article
      ref={ref}
      className="relative space-y-8"
      aria-label={`Chapter 0${index + 1}: ${project.title}`}
    >
      <RevealRule />

      {/* Chapter header line */}
      <div className="flex items-center justify-between font-mono text-xs text-[#A7ABB2]">
        <span className="text-cobalt">CHAPTER // 0{index + 1}</span>
        <span>
          {project.year} · {project.state}
          {project.accessState === "Restricted" ? " · [RESTRICTED]" : ""}
        </span>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Media Stage */}
        <motion.div
          initial={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, y: 30, scale: 0.98 }
          }
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.98 }
          }
          transition={{ duration: reduced ? 0.2 : 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
        >
          {renderVisual()}
        </motion.div>

        {/* Narrative & Evidence Column */}
        <div
          className={`flex flex-col justify-between space-y-6 lg:col-span-5 ${
            flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-cobalt/40 bg-cobalt/10 px-2.5 py-0.5 font-mono text-[11px] text-cobalt">
                STAGE: {project.evidenceStage}
              </span>
              <span className="font-mono text-xs text-[#A7ABB2]">
                {project.domain.join(" · ")}
              </span>
            </div>

            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#F5F6F7]/90">
              {project.tagline}
            </p>

            <dl className="mt-6 space-y-2.5 border-t border-white/10 pt-4 font-mono text-xs text-[#A7ABB2]">
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 text-[#A7ABB2]/60">Role</dt>
                <dd className="text-white">{project.role}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 text-[#A7ABB2]/60">Team</dt>
                <dd className="text-[#F5F6F7]/80">{project.team}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 text-[#A7ABB2]/60">
                  {project.outcomeType === "Verified outcome" ? "Outcome" : "Status"}
                </dt>
                <dd className="text-white">{project.outcome}</dd>
              </div>
            </dl>
          </div>

          <div className="pt-2">
            {project.hasCaseStudy ? (
              <Magnetic maxDistance={6}>
                <Link
                  to={`/portfolio/work/${project.slug}`}
                  className="inline-flex items-center rounded-md bg-cobalt px-5 py-2.5 font-mono text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Read full case study →
                </Link>
              </Magnetic>
            ) : (
              <span className="inline-block font-mono text-xs text-[#A7ABB2]">
                {project.accessState === "Restricted"
                  ? "Restricted — request access below"
                  : "Verified status documented in index"}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function FeaturedWork() {
  const featured = featuredSlugs
    .map(getProject)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      id="featured"
      aria-label="Featured work chapters"
      className="mx-auto max-w-[1440px] px-6 py-28 sm:px-8 md:px-12"
    >
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
          Selected Evidence Chapters // 03
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured Work
        </h2>
      </div>

      <div className="space-y-32">
        {featured.map((p, i) => (
          <ChapterItem key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedWork;
