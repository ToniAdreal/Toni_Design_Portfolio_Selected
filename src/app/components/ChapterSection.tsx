import { motion } from 'motion/react';
import { PortfolioImage } from './PortfolioImage';
import type { Chapter, ImageSlot } from '../content/types';

interface Props {
  chapter: Chapter;
  accent: string;
  onImageClick: (images: ImageSlot[], index: number) => void;
}

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ChapterSection({ chapter, accent, onImageClick }: Props) {
  return (
    <section id={`ch-${chapter.id}`} className="scroll-mt-28 border-b border-white/10 py-16 first:pt-0">
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <span className="font-mono-tech text-[13px]" style={{ color: accent }}>{chapter.number}</span>
          <span className="h-px w-8" style={{ background: accent }} />
          <span className="font-mono-tech text-[11px] uppercase tracking-widest text-white/40">Chapter</span>
        </div>
        <h2 className="toni-display mt-3 text-[32px] md:text-[42px]">{chapter.title}</h2>
        {chapter.summary && (
          <p className="font-body mt-3 max-w-2xl text-[16px] leading-relaxed text-white/45">{chapter.summary}</p>
        )}
      </div>

      <div className="flex flex-col gap-16">
        {chapter.images.map((img, i) => (
          <motion.div
            key={img.file}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-start"
          >
            {/* image */}
            <button
              onClick={() => onImageClick(chapter.images, i)}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111113] text-left"
            >
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]">
                <PortfolioImage file={img.file} alt={img.title} index={img.file} />
              </div>
              <span className="font-mono-tech absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] text-white">
                {img.file}
              </span>
            </button>

            {/* analysis sidebar */}
            <div className="md:pt-2">
              <h3 className="font-display text-[20px] font-medium leading-snug">{img.title}</h3>
              <p className="font-body mt-3 text-[15px] leading-relaxed text-white/60">{img.caption}</p>
              <div className="mt-4 border-l-2 pl-4" style={{ borderColor: accent }}>
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-white/35">Rationale</span>
                <p className="font-body mt-1 text-[14px] leading-relaxed text-white/50">{img.rationale}</p>
              </div>
              {img.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {img.tags.map((t) => (
                    <span key={t} className="font-mono-tech rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
