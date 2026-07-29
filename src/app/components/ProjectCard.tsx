import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioImage } from './PortfolioImage';
import type { Project } from '../content/types';

export function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 6, ry: px * 6 });
  };

  const cover = project.chapters[0]?.images[0]?.file ?? '';
  const accent = `var(${project.accent})`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      onClick={() => navigate(`/portfolio/${project.slug}`)}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="group cursor-pointer"
    >
      <motion.div
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className="overflow-hidden rounded-3xl bg-[var(--toni-surface)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <PortfolioImage file={cover} alt={project.name} index={project.index} contain />
        </div>
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <h3 className="toni-display text-[26px]">{project.name}</h3>
            <p className="font-body mt-1 text-[15px] text-[var(--toni-text-2)]">{project.tagline}</p>
          </div>
          <div
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform group-hover:rotate-45"
          >
            <ArrowUpRight size={18} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
