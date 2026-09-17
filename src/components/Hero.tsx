import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  canvasVocabulary,
  heroAccentWord,
  heroWords,
  identity,
} from "../content/site";
import { useMotionSetting } from "../motion/MotionContext";

// Procedural drifting-word field. Static first frame; pauses when offscreen or
// document hidden; DPR capped; disabled entirely in reduced mode.
function CanvasField({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.5);
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type Tok = { x: number; y: number; vx: number; vy: number; t: string; s: number };
    const tokens: Tok[] = canvasVocabulary
      .concat(canvasVocabulary)
      .map((t) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        t,
        s: 11 + Math.random() * 5,
      }));

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, w, h);
      for (const tk of tokens) {
        if (animate) {
          tk.x += tk.vx;
          tk.y += tk.vy;
          if (tk.x < -60) tk.x = w + 40;
          if (tk.x > w + 60) tk.x = -40;
          if (tk.y < -20) tk.y = h + 20;
          if (tk.y > h + 20) tk.y = -20;
        }
        ctx.font = `${tk.s}px "IBM Plex Mono", monospace`;
        ctx.fillStyle = "rgba(17,18,20,0.16)";
        ctx.fillText(tk.t, tk.x, tk.y);
      }
    };

    draw(false); // static first frame

    if (reduced) return;

    let raf = 0;
    let running = true;
    const loop = () => {
      if (running) draw(true);
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        running = e.isIntersecting && !document.hidden;
      },
      { threshold: 0 },
    );
    io.observe(canvas);
    const onVis = () => {
      running = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

export function Hero() {
  const { reduced } = useMotionSetting();

  // At <768px show four words per the responsive spec.
  const words =
    typeof window !== "undefined" && window.innerWidth < 768
      ? heroWords.slice(0, 4)
      : heroWords;

  return (
    <div id="top" className="relative min-h-[100svh] overflow-hidden">
      <CanvasField reduced={reduced} />

      {/* low-opacity typographic overprint echo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="select-none font-display text-[28vw] font-bold leading-none text-ink/[0.03]">
          EVIDENCE
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-center px-6 pt-28 pb-16 sm:px-8 md:px-12">
        <p className="mb-8 max-w-xl font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
          {identity.role}
        </p>

        {/* Oversized asymmetric words with clip-path strip reveals */}
        <div className="flex flex-col gap-1">
          {words.map((word, i) => {
            const accent = word === heroAccentWord;
            const offsets = ["ml-0", "ml-[8vw]", "ml-[3vw]", "ml-[14vw]", "ml-[6vw]"];
            return (
              <div key={word} className={`overflow-hidden ${offsets[i]}`}>
                <span
                  className={`block font-display text-[15vw] font-bold leading-[0.92] tracking-tight sm:text-[12vw] lg:text-[9.5vw] ${
                    accent ? "text-cobalt" : i % 2 ? "text-ink/45" : "text-ink"
                  }`}
                  style={
                    reduced
                      ? undefined
                      : {
                          animation: `strip-in 0.72s cubic-bezier(0.16,1,0.3,1) ${i * 0.095}s both`,
                        }
                  }
                >
                  {word}
                </span>
              </div>
            );
          })}
        </div>

        {/* Positioning statement — stable, visible before animation finishes */}
        <div className="mt-12 max-w-2xl">
          <motion.h1
            className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduced ? 0 : 0.5 }}
          >
            {identity.heroLine}
          </motion.h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            {identity.supportingLine}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="rounded-full bg-cobalt px-6 py-3 font-mono text-sm text-paper transition-transform hover:-translate-y-0.5"
          >
            View selected work
          </a>
          <a
            href="#writing"
            className="rounded-full border border-ink/25 px-6 py-3 font-mono text-sm transition-colors hover:border-ink"
          >
            Read latest writing
          </a>
        </div>
      </div>
    </div>
  );
}
