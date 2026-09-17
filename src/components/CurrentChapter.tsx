import { useRef, useState } from "react";
import { Section } from "./primitives";
import { currentChapter } from "../content/site";
import { useMotionSetting } from "../motion/MotionContext";

// Interactive systems map (not a globe). Four nodes connected to a center.
// Pointer offsets the network slightly; keyboard focus reveals the same labels.
export function CurrentChapter() {
  const { reduced } = useMotionSetting();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<string | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setOffset({ x: nx * 16, y: ny * 16 });
  };

  const nodes = currentChapter.nodes;
  const positions = [
    { cx: 130, cy: 90 },
    { cx: 370, cy: 110 },
    { cx: 110, cy: 250 },
    { cx: 380, cy: 250 },
  ];
  const center = { cx: 250, cy: 170 };

  return (
    <Section id="now">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-cobalt">Current chapter</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {currentChapter.org}
          </h2>
          <dl className="mt-6 space-y-3 font-mono text-sm text-ink/70">
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 text-ink/40">Location</dt>
              <dd>{currentChapter.location}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 text-ink/40">Time zone</dt>
              <dd>{currentChapter.timezone}</dd>
            </div>
          </dl>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            {currentChapter.problemSpace}
          </p>
        </div>

        <div
          ref={wrapRef}
          onMouseMove={onMove}
          onMouseLeave={() => setOffset({ x: 0, y: 0 })}
          className="relative aspect-[5/4] w-full"
        >
          <svg
            viewBox="0 0 500 340"
            role="group"
            aria-label="Current work map: Product, Design, Engineering, and AI connected to Tokenta"
            className="h-full w-full"
          >
            <g
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: reduced ? undefined : "transform 0.3s ease-out",
              }}
            >
              {positions.map((p, i) => (
                <line
                  key={i}
                  x1={center.cx}
                  y1={center.cy}
                  x2={p.cx}
                  y2={p.cy}
                  stroke="#111214"
                  strokeOpacity={active === nodes[i].id ? 0.5 : 0.18}
                  strokeWidth={1}
                />
              ))}
              <circle cx={center.cx} cy={center.cy} r={6} fill="#315dff" />
              <text
                x={center.cx}
                y={center.cy - 14}
                textAnchor="middle"
                className="font-mono"
                fontSize="11"
                fill="#111214"
              >
                {currentChapter.org}
              </text>

              {positions.map((p, i) => {
                const node = nodes[i];
                const isActive = active === node.id;
                return (
                  <g
                    key={node.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`${node.label}: ${node.note}`}
                    onFocus={() => setActive(node.id)}
                    onBlur={() => setActive(null)}
                    onMouseEnter={() => setActive(node.id)}
                    onMouseLeave={() => setActive(null)}
                    className="cursor-pointer outline-none"
                  >
                    <circle
                      cx={p.cx}
                      cy={p.cy}
                      r={isActive ? 9 : 5}
                      fill={isActive ? "#315dff" : "#111214"}
                      style={{ transition: reduced ? undefined : "r 0.2s" }}
                    />
                    <text
                      x={p.cx}
                      y={p.cy - 14}
                      textAnchor="middle"
                      className="font-display"
                      fontSize="14"
                      fontWeight="600"
                      fill="#111214"
                    >
                      {node.label}
                    </text>
                    {isActive && (
                      <text
                        x={p.cx}
                        y={p.cy + 22}
                        textAnchor="middle"
                        className="font-mono"
                        fontSize="9.5"
                        fill="#111214"
                        fillOpacity="0.6"
                      >
                        {node.note}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </Section>
  );
}
