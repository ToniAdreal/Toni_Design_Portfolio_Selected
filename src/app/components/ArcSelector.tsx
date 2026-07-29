import { useNavigate } from 'react-router';
import { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../content';

// Semicircular node navigator inspired by the REDBOW "Our Partners" arc.
export function ArcSelector() {
  const navigate = useNavigate();
  const [hover, setHover] = useState<number | null>(null);

  const W = 900;
  const H = 460;
  const cx = W / 2;
  const cy = H - 20;
  const r = 380;

  // distribute nodes across the upper semicircle
  const nodes = projects.map((p, i) => {
    const t = projects.length === 1 ? 0.5 : i / (projects.length - 1);
    const angle = Math.PI - t * Math.PI; // 180deg -> 0deg
    return {
      p,
      x: cx + r * Math.cos(angle),
      y: cy - r * Math.sin(angle),
    };
  });

  return (
    <section className="relative mx-auto max-w-[1100px] overflow-hidden px-6 py-24">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full" style={{ background: 'var(--toni-red)' }} />
        <span className="font-mono-tech text-[12px] uppercase tracking-widest text-[var(--toni-text-2)]">
          Case Study Index
        </span>
      </div>
      <h2 className="toni-display max-w-xl text-[40px] md:text-[54px]">Jump into any chapter</h2>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-6 w-full">
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="var(--toni-rule)"
          strokeWidth={1.5}
        />
        {nodes.map((n, i) => (
          <g
            key={n.p.slug}
            className="cursor-pointer"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onClick={() => navigate(`/portfolio/${n.p.slug}`)}
          >
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={hover === i ? 34 : 26}
              fill={hover === i ? 'var(--toni-red)' : '#0a0a0b'}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <text
              x={n.x}
              y={n.y + 5}
              textAnchor="middle"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fill: '#fff' }}
            >
              {n.p.index}
            </text>
            <text
              x={n.x}
              y={n.y - 46}
              textAnchor="middle"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 600,
                fill: 'var(--toni-text)',
              }}
            >
              {n.p.name}
            </text>
          </g>
        ))}
      </svg>
    </section>
  );
}
