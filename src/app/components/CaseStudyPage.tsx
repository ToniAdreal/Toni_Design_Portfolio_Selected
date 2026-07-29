import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteNav } from './SiteNav';
import { Footer } from './Footer';
import { Lightbox } from './Lightbox';
import { ChapterSection } from './ChapterSection';
import { projects, projectBySlug } from '../content';
import type { ImageSlot } from '../content/types';

export function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? projectBySlug(slug) : undefined;
  const [activeChapter, setActiveChapter] = useState(0);
  const [lightbox, setLightbox] = useState<{ images: ImageSlot[]; index: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      if (!project) return;
      const marks = project.chapters.map((c) => {
        const el = document.getElementById(`ch-${c.id}`);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = marks.findIndex((t) => t > 120);
      setActiveChapter(idx === -1 ? project.chapters.length - 1 : Math.max(0, idx - 1));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [project]);

  if (!project) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-[var(--toni-onyx)] text-white">
        <p className="font-display text-2xl">Project not found</p>
        <Link to="/" className="font-body text-[var(--toni-red)]">Back home</Link>
      </div>
    );
  }

  const openLightbox = (images: ImageSlot[], index: number) => setLightbox({ images, index });
  const accent = `var(${project.accent})`;
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[var(--toni-onyx)] text-white">
      <SiteNav dark />

      {/* header */}
      <section className="grain relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
          style={{ background: `radial-gradient(120% 90% at 50% -20%, ${accent} 0%, transparent 55%)`, opacity: 0.35 }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Link to="/" className="font-body mb-8 inline-flex items-center gap-2 text-[14px] text-white/50 hover:text-white">
            <ArrowLeft size={16} /> All work
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-mono-tech rounded-full px-3 py-1 text-[11px] text-black" style={{ background: accent }}>
              {project.index}
            </span>
            <span className="font-mono-tech text-[12px] uppercase tracking-widest text-white/50">
              {project.context}
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="toni-display mt-6 max-w-4xl text-[13vw] leading-[0.95] md:text-[6.5vw]"
          >
            {project.name}
          </motion.h1>
          <p className="font-body mt-4 max-w-2xl text-[19px] text-white/60">{project.tagline}</p>
          <p className="font-body mt-8 max-w-3xl text-[16px] leading-relaxed text-white/45">{project.summary}</p>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-[var(--toni-onyx)] p-6">
                <div className="toni-display text-[30px]" style={{ color: accent }}>{m.value}</div>
                <div className="font-body mt-1 text-[12px] text-white/50">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* formulas */}
      {project.formulas && project.formulas.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-4 md:grid-cols-2">
            {project.formulas.map((f) => (
              <div key={f.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="font-mono-tech text-[12px] uppercase tracking-widest" style={{ color: accent }}>{f.name}</div>
                <div className="font-mono-tech mt-3 overflow-x-auto text-[15px] text-white">{f.expr}</div>
                {f.note && <p className="font-body mt-3 text-[13px] leading-relaxed text-white/40">{f.note}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* split reader */}
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="flex gap-12">
          {/* sticky TOC */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-28">
              <div className="font-mono-tech mb-4 text-[11px] uppercase tracking-widest text-white/40">Contents</div>
              <nav className="flex flex-col gap-1">
                {project.chapters.map((c, i) => (
                  <a
                    key={c.id}
                    href={`#ch-${c.id}`}
                    className={`font-body rounded-lg px-3 py-2 text-[14px] transition-colors ${
                      activeChapter === i ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    <span className="font-mono-tech mr-2 text-[11px]" style={{ color: accent }}>{c.number}</span>
                    {c.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* content stream */}
          <div className="min-w-0 flex-1">
            {project.chapters.map((chapter) => (
              <ChapterSection
                key={chapter.id}
                chapter={chapter}
                accent={accent}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </div>
      </div>

      {/* next project */}
      <section
        className="cursor-pointer border-t border-white/10 py-20 transition-colors hover:bg-white/[0.03]"
        onClick={() => navigate(`/portfolio/${next.slug}`)}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
          <div>
            <div className="font-mono-tech text-[12px] uppercase tracking-widest text-white/40">Next project</div>
            <div className="toni-display mt-2 text-[40px] md:text-[64px]">{next.name}</div>
          </div>
          <ArrowRight size={48} style={{ color: accent }} />
        </div>
      </section>

      <Footer dark />

      <Lightbox
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onNavigate={(i) => setLightbox((lb) => (lb ? { ...lb, index: i } : lb))}
      />
    </div>
  );
}
