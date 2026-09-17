import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./primitives";
import { workingMethod } from "../content/site";
import { useMotionSetting } from "../motion/MotionContext";

// One diagram that evolves across four states (Observe → Frame → Build → Verify).
function Diagram({ step }: { step: number }) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label={`Systems diagram, step ${step + 1}: ${workingMethod[step].title}`}
      className="h-full w-full"
    >
      {/* scattered evidence points — always present, condense over steps */}
      {Array.from({ length: 9 }).map((_, i) => {
        const spread = step === 0 ? 1 : step === 1 ? 0.6 : 0.35;
        const cx = 200 + Math.cos((i / 9) * Math.PI * 2) * 120 * spread;
        const cy = 200 + Math.sin((i / 9) * Math.PI * 2) * 120 * spread;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={3}
            fill="#111214"
            fillOpacity={0.5}
            style={{ transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)" }}
          />
        );
      })}

      {/* frame: a boundary appears at step >= 1 */}
      <rect
        x={110}
        y={110}
        width={180}
        height={180}
        fill="none"
        stroke="#315dff"
        strokeWidth={1.5}
        strokeOpacity={step >= 1 ? 0.7 : 0}
        style={{ transition: "all 0.6s" }}
      />

      {/* build: connecting structure at step >= 2 */}
      <g
        style={{ transition: "opacity 0.6s" }}
        opacity={step >= 2 ? 1 : 0}
      >
        <line x1={150} y1={150} x2={250} y2={250} stroke="#111214" strokeWidth={1.5} />
        <line x1={250} y1={150} x2={150} y2={250} stroke="#111214" strokeWidth={1.5} />
        <circle cx={200} cy={200} r={7} fill="#315dff" />
      </g>

      {/* verify: check ring at step 3 */}
      <circle
        cx={200}
        cy={200}
        r={90}
        fill="none"
        stroke="#d95043"
        strokeWidth={2}
        strokeDasharray="6 6"
        strokeOpacity={step >= 3 ? 0.8 : 0}
        style={{ transition: "all 0.6s" }}
      />
    </svg>
  );
}

export function WorkingMethod() {
  const { reduced } = useMotionSetting();
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  // Desktop-only pinning driven by scroll progress across ~180vh.
  useEffect(() => {
    if (reduced || window.innerWidth < 768) return;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.999);
      setStep(Math.floor(progress * 4));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  const pinned = !reduced && typeof window !== "undefined" && window.innerWidth >= 768;

  // Reduced / mobile: ordinary stacked four-step layout.
  if (!pinned) {
    return (
      <section
        id="method"
        className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-8 md:px-12"
      >
        <SectionTitle index="06" title="Working method" />
        <div className="space-y-14">
          {workingMethod.map((s, i) => (
            <div key={s.step} className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <span className="font-mono text-sm text-cobalt">{s.step}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/75">{s.body}</p>
              </div>
              <div className="aspect-square w-full max-w-xs">
                <Diagram step={i} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="method" className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12">
      <div ref={ref} style={{ height: "180vh" }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col justify-center">
          <SectionTitle index="06" title="Working method" />
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex gap-2">
                {workingMethod.map((s, i) => (
                  <span
                    key={s.step}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-cobalt" : "bg-ink/15"
                    }`}
                  />
                ))}
              </div>
              <span className="mt-8 block font-mono text-sm text-cobalt">
                {workingMethod[step].step}
              </span>
              <h3 className="mt-2 font-display text-4xl font-bold tracking-tight">
                {workingMethod[step].title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/75">
                {workingMethod[step].body}
              </p>
            </div>
            <div className="mx-auto aspect-square w-full max-w-md">
              <Diagram step={step} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
