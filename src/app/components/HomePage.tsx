import { motion } from 'motion/react';
import { SiteNav } from './SiteNav';
import { Hero } from './Hero';
import { ProjectCard } from './ProjectCard';
import { ArcSelector } from './ArcSelector';
import { Footer } from './Footer';
import { projects } from '../content';

const stats = [
  { value: '4', label: 'Flagship case studies' },
  { value: '142', label: 'Documented artifacts' },
  { value: '80+', label: 'Screens designed' },
  { value: '98%', label: 'Completion rate' },
];

const capabilities = [
  { title: 'Product Strategy', desc: 'Market sizing, evidence mapping, and prioritization that ties every decision to a source.' },
  { title: 'Systems Architecture', desc: 'Federated ML, oracle verification, escrow settlement, and dual-port platform design.' },
  { title: 'UX / UI Design', desc: 'Design systems, 10-foot TV UX, onboarding flows, and high-fidelity interaction.' },
  { title: 'Full-stack Engineering', desc: 'React, motion systems, smart-contract logic, and buildable technical proofs.' },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <Hero />

      {/* stat band */}
      <section className="border-y border-[var(--toni-rule)]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-10 md:px-10 ${i !== 0 ? 'border-l border-[var(--toni-rule)]' : ''}`}
            >
              <div className="toni-display text-[40px] md:text-[52px]">{s.value}</div>
              <div className="font-body mt-1 text-[13px] text-[var(--toni-text-2)]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* work */}
      <section id="work" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--toni-red)' }} />
              <span className="font-mono-tech text-[12px] uppercase tracking-widest text-[var(--toni-text-2)]">
                Selected Work
              </span>
            </div>
            <h2 className="toni-display text-[44px] md:text-[64px]">Case studies</h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </section>

      <ArcSelector />

      {/* about / capabilities */}
      <section id="about" className="bg-[var(--toni-onyx)] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full" style={{ background: 'var(--toni-red)' }} />
            <span className="font-mono-tech text-[12px] uppercase tracking-widest text-white/50">
              Capabilities
            </span>
          </div>
          <h2 className="toni-display max-w-3xl text-[40px] md:text-[56px]">
            Strategy, systems, and craft — end to end.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-[var(--toni-onyx)] p-8">
                <h3 className="font-display text-[22px] font-medium">{c.title}</h3>
                <p className="font-body mt-2 text-[15px] leading-relaxed text-white/50">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
