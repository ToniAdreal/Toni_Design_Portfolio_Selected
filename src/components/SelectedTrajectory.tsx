import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section, SectionTitle } from "./primitives";
import { archive, experiences, type Experience } from "../content/site";
import { useMotionSetting } from "../motion/MotionContext";

function Row({ exp, open, onToggle }: { exp: Experience; open: boolean; onToggle: () => void }) {
  const { reduced } = useMotionSetting();
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      className="border-b border-ink/12"
      onMouseMove={(e) => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setSpot(null)}
      style={{ position: "relative" }}
    >
      {spot && !reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            background: `radial-gradient(240px circle at ${spot.x}px ${spot.y}px, rgba(49,93,255,0.06), transparent 70%)`,
          }}
        />
      )}
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group relative flex w-full flex-col gap-4 py-8 text-left md:flex-row md:items-baseline md:justify-between"
      >
        <div className="flex-1">
          <div className="flex items-baseline gap-4">
            <h3
              className="font-display text-2xl font-semibold tracking-tight transition-transform group-hover:translate-x-1.5 sm:text-3xl"
              style={{ transition: reduced ? "none" : undefined }}
            >
              {exp.org}
            </h3>
            <span className="font-mono text-xs text-ink/45">{exp.dates}</span>
          </div>
          <p className="mt-2 font-mono text-sm text-ink/60">{exp.role}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/80">
            {exp.outcome}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2 md:flex-col md:items-end">
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] text-ink/60"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="font-mono text-xs text-cobalt md:mt-3">
            {open ? "− Close" : "+ Expand"}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0.2 : 0.58, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-10 md:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink/40">
                  Responsibilities
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-cobalt">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-ink/40">
                  Constraints
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {exp.constraints}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink/40">
                  Selected deliverables
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
                  {exp.deliverables.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-cobalt">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-ink/40">
                  Verified outcomes
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
                  {exp.outcomes.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="text-coral">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
                {exp.portfolioLink && (
                  <a
                    href={exp.portfolioLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block font-mono text-sm text-cobalt hover:underline"
                  >
                    Related portfolio work →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SelectedTrajectory() {
  const [open, setOpen] = useState<number | null>(0);
  const groups: Array<"Research" | "Product" | "Recognition"> = [
    "Research",
    "Product",
    "Recognition",
  ];

  return (
    <Section id="experience">
      <SectionTitle index="04" title="Selected trajectory" />
      <div className="border-t border-ink/12">
        {experiences.map((exp, i) => (
          <Row
            key={exp.org}
            exp={exp}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-wider text-ink/40">
          Archive
        </h3>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {groups.map((g) => (
            <div key={g}>
              <p className="font-mono text-sm text-cobalt">{g}</p>
              <ul className="mt-3 space-y-3">
                {archive
                  .filter((a) => a.group === g)
                  .map((a) => (
                    <li key={a.title} className="border-b border-ink/10 pb-3">
                      <p className="text-sm font-medium">{a.title}</p>
                      <p className="font-mono text-xs text-ink/45">{a.meta}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
