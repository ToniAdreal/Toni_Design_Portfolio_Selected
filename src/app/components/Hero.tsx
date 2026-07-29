import { motion } from 'motion/react';
import { RotatingStamp } from './RotatingStamp';
import { MagneticButton } from './MagneticButton';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      {/* red radial noise glow */}
      <div className="red-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="flex items-start justify-between">
          <motion.span
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="font-mono-tech text-[12px] uppercase tracking-[0.2em] text-[var(--toni-text-2)]"
          >
            Product Design · Systems Architecture
          </motion.span>
          <div className="hidden md:block">
            <RotatingStamp />
          </div>
        </div>

        <motion.h1
          custom={1}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="toni-display mt-10 max-w-5xl text-[15vw] leading-[0.92] md:text-[9vw]"
        >
          Make it
          <br />
          memorable<span style={{ color: 'var(--toni-red)' }}>.</span>
        </motion.h1>

        <motion.div
          custom={2}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="font-body max-w-md text-[17px] leading-relaxed text-[var(--toni-text-2)]">
            Toni is a product designer and systems architect crafting evidence-driven case
            studies across fintech, AI media, and Web3 — from brief to settlement.
          </p>
          <div className="flex gap-3">
            <MagneticButton
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => (window.location.href = 'mailto:hello@tokenta.space')}>
              Get in touch
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
