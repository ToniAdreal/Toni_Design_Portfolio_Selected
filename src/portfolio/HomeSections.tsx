import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  artifactGroups,
  artifacts,
  capabilities,
  getProject,
  methodStages,
  portfolioIdentity,
  portfolioSocial,
} from "../content/portfolio";
import { useMotionSetting } from "../motion/MotionContext";
import { RevealRule } from "../motion/RevealRule";
import { ProximityText } from "../motion/ProximityText";
import { Magnetic } from "../motion/Magnetic";

const confBadge: Record<string, string> = {
  Public: "text-[#A7ABB2]",
  Synthetic: "text-cobalt",
  Redacted: "text-coral",
};

// 1. Evidence Archive: Horizontal scroll rail on desktop with variable artifact cards, vertical on mobile
export function EvidenceArchive() {
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const filteredArtifacts =
    selectedGroup === "All"
      ? artifacts
      : artifacts.filter((a) => a.group === selectedGroup);

  return (
    <section
      id="archive"
      aria-label="Evidence archive"
      className="mx-auto max-w-[1440px] px-6 py-28 sm:px-8 md:px-12"
    >
      <RevealRule />

      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Evidence Archive // 05
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Verified Artifacts
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#A7ABB2]">
            Representative design specs, state architectures, and synthetic test suites. Every artifact carries its verifiable provenance and confidentiality scope.
          </p>
        </div>

        {/* Group selector tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGroup("All")}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
              selectedGroup === "All"
                ? "border-cobalt bg-cobalt text-white"
                : "border-white/15 text-[#A7ABB2] hover:border-white/30"
            }`}
          >
            All
          </button>
          {artifactGroups.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGroup(g)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                selectedGroup === g
                  ? "border-cobalt bg-cobalt text-white"
                  : "border-white/15 text-[#A7ABB2] hover:border-white/30"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Horizontal Rail / Mobile Grid */}
      <div className="mt-12 flex gap-6 overflow-x-auto pb-6 scrollbar-thin md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
        {filteredArtifacts.map((a) => (
          <figure
            key={a.id}
            className="flex min-w-[280px] shrink-0 flex-col rounded-sm border border-white/10 bg-white/[0.015] p-4 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.03] md:min-w-0"
          >
            <div className="relative overflow-hidden rounded-sm bg-[#0E121A]">
              {a.type === "image" && a.image ? (
                <img
                  src={a.image}
                  alt={a.imageAlt ?? a.caption}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              ) : a.type === "redacted" ? (
                <div className="flex aspect-[16/10] w-full items-center justify-center border border-coral/30 bg-coral/5 p-4 text-center">
                  <div>
                    <span className="font-mono text-xs font-semibold text-coral">
                      REDACTED ARTIFACT
                    </span>
                    <p className="mt-1 font-mono text-[10px] text-[#A7ABB2]">
                      Available for supervised NDA inspection
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex aspect-[16/10] w-full flex-col justify-between border border-white/10 bg-white/[0.02] p-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cobalt">
                    // {a.group} SPEC
                  </span>
                  <div className="font-mono text-xs text-[#A7ABB2]">
                    [DATA_CONTRACT_SYNTHETIC]
                  </div>
                  <span className="font-mono text-[10px] uppercase text-[#A7ABB2]/50">
                    TYPE: {a.type}
                  </span>
                </div>
              )}
            </div>

            <figcaption className="mt-4 flex flex-1 flex-col justify-between">
              <p className="text-sm font-medium leading-snug text-[#F5F6F7]">
                {a.type === "link" && a.url ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cobalt hover:underline"
                  >
                    {a.caption} ↗
                  </a>
                ) : (
                  a.caption
                )}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[11px] text-[#A7ABB2]/70">
                <span>{a.project} · {a.year}</span>
                <span className={confBadge[a.confidentiality]}>
                  {a.confidentiality}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

// 2. Working Method: Compact scrubbed progression reconnecting the 5 kinetic hero terms
export function WorkingMethod() {
  return (
    <section
      id="method"
      aria-label="Working method"
      className="mx-auto max-w-[1440px] px-6 py-28 sm:px-8 md:px-12"
    >
      <RevealRule />

      <div className="mt-8 mb-12 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
          Working Method // 06
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Question to Outcome
        </h2>
        <p className="mt-3 text-base text-[#A7ABB2]">
          Five stages. AI assists edge cases, synthesis, and calibration; human judgment owns consequential decisions, architecture, and accountability.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {methodStages.map((s, i) => {
          const rel = getProject(s.relatedSlug);
          return (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col justify-between rounded-sm border border-white/10 bg-white/[0.015] p-5 transition-colors hover:border-cobalt/50 hover:bg-white/[0.03]"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-cobalt">
                  0{i + 1} //
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:text-cobalt transition-colors">
                  {s.stage}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F5F6F7]/85">
                  {s.definition}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-mono text-[11px] leading-relaxed text-[#A7ABB2]">
                  {s.aiRole}
                </p>
                {rel && (
                  <Link
                    to={rel.hasCaseStudy ? `/portfolio/work/${rel.slug}` : "/portfolio#index"}
                    className="mt-3 inline-block font-mono text-xs text-cobalt hover:underline"
                  >
                    Ref: {rel.title} →
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// 3. Capabilities: Typographic proximity text, rule draws, and code-native diagrams
export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      className="mx-auto max-w-[1440px] px-6 py-28 sm:px-8 md:px-12"
    >
      <RevealRule />

      <div className="mt-8 mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
          Capabilities // 07
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Practices &amp; Systems
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {capabilities.map((c, i) => (
          <div
            key={c.name}
            className="flex flex-col justify-between rounded-sm border border-white/10 bg-white/[0.015] p-8 transition-colors hover:border-white/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cobalt">
                  PRACTICE // 0{i + 1}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">
                <ProximityText text={c.name} />
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#F5F6F7]/85">
                {c.definition}
              </p>

              {/* Code-native diagrammatic badge */}
              <div className="mt-6 rounded border border-white/10 bg-[#0B0C0E]/70 p-3 font-mono text-xs text-[#A7ABB2]">
                <div className="text-cobalt font-semibold">
                  // TOOLS &amp; SPECIFICATIONS
                </div>
                <div className="mt-1.5 flex flex-wrap gap-2 text-white">
                  {c.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/5 px-2 py-0.5 border border-white/5 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-4 font-mono text-xs">
              {c.relatedSlugs.map((slug) => {
                const p = getProject(slug);
                if (!p) return null;
                return (
                  <Link
                    key={slug}
                    to={p.hasCaseStudy ? `/portfolio/work/${slug}` : "/portfolio#index"}
                    className="text-cobalt hover:underline"
                  >
                    {p.title} ↗
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 4. About and Contact: Section color inversion from dark to rich paper/cobalt ground, local time readout, and magnetic contact CTA
export function AboutContact() {
  const links = portfolioSocial.filter((l) => l.enabled && l.url);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Shanghai",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC+8"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="about"
      aria-label="About and Contact"
      className="relative mt-20 border-t border-white/10 bg-[#0E1015]"
    >
      {/* Visual Inverted Accent Block */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12">
        <div className="rounded-sm border border-white/10 bg-gradient-to-b from-[#141822] to-[#0E121A] p-8 sm:p-14 lg:p-18">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
              About &amp; Collaboration // 08
            </span>
            <div className="flex items-center gap-3 font-mono text-xs text-[#A7ABB2]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LOCAL TIME: {timeStr || "ONLINE"}</span>
            </div>
          </div>

          <h2 className="mt-10 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            A combined product and engineering practice — I design the system and ship it in production code.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A7ABB2]">
            I work where design and engineering aren&apos;t separate hand-offs: framing the problem with research, modeling reversible state, and building the interface in typed React and motion systems.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Magnetic maxDistance={10}>
              <a
                href={portfolioIdentity.personalSite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-cobalt px-8 py-4 font-mono text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Initiate collaboration via personal site →
              </a>
            </Magnetic>
            <Magnetic maxDistance={8}>
              <a
                href="#hero"
                className="inline-flex items-center rounded-md border border-white/20 px-6 py-4 font-mono text-sm text-[#F5F6F7] transition-colors hover:border-white"
              >
                Back to top ↑
              </a>
            </Magnetic>
          </div>
        </div>

        {/* 5. Compact Final Structural Directory */}
        <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4 font-mono text-xs text-[#A7ABB2]">
          {/* Col 1 */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider">
              Flagship Work
            </span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/portfolio/work/tokenta-workflow" className="hover:text-white">
                  Tokenta Workflow OS (Case Study)
                </Link>
              </li>
              <li>
                <a href="#featured" className="hover:text-white">
                  ALLWEB3 Escrow Protocol
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white">
                  Next Card Commerce
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white">
                  AI Evaluation Harness
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider">
              Navigation
            </span>
            <ul className="mt-4 space-y-2">
              <li><a href="#hero" className="hover:text-white">Hero Journey</a></li>
              <li><a href="#atlas" className="hover:text-white">Evidence Atlas</a></li>
              <li><a href="#featured" className="hover:text-white">Featured Work</a></li>
              <li><a href="#index" className="hover:text-white">Project Index</a></li>
              <li><a href="#archive" className="hover:text-white">Evidence Archive</a></li>
              <li><a href="#method" className="hover:text-white">Working Method</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider">
              Coordinates
            </span>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider">
              Colophon &amp; Identity
            </span>
            <p className="mt-4 leading-relaxed text-[#A7ABB2]/80">
              Toni Adreal · Portfolio 2026. Built with React 19, TypeScript, motion/react, Lenis, and Tailwind CSS v4.
            </p>
            <p className="mt-2 text-[10px] text-[#A7ABB2]/50">
              Deterministic Canvas 2D · Single RAF Kernel · Accessible Semantics
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/5 pt-6 font-mono text-[11px] text-[#A7ABB2]/50 sm:flex-row">
          <span>&copy; 2026 Toni Adreal. All verified rights reserved.</span>
          <span>Tokyo / Shanghai / Remote</span>
        </div>
      </div>
    </footer>
  );
}
