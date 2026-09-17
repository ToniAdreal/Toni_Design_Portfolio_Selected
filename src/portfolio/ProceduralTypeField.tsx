import { useEffect, useRef } from "react";
import { useMotionSetting } from "../motion/MotionContext";
import { useMotionKernel, useFrameSubscription } from "../motion/MotionKernel";

interface Token {
  text: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  isOverprint: boolean;
}

const VOCABULARY = [
  "question",
  "evidence",
  "constraint",
  "state",
  "decision",
  "system",
  "outcome",
  "audit",
  "prototype",
  "release",
  "validation",
  "recovery",
  "interface",
  "model",
];

// Simple deterministic pseudo-random number generator (Mulberry32)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function ProceduralTypeField({ isHeroActive = true }: { isHeroActive?: boolean }) {
  const { capabilities, reduced } = useMotionSetting();
  const { pointerX, pointerY, scrollVelocity } = useMotionKernel();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tokensRef = useRef<Token[]>([]);
  const isVisibleRef = useRef(true);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  // Initialize tokens deterministically with fixed seed
  const initTokens = (width: number, height: number) => {
    const rng = mulberry32(1337);
    const count = width < 768 ? 20 : 42;
    const tokens: Token[] = [];

    for (let i = 0; i < count; i++) {
      const text = VOCABULARY[Math.floor(rng() * VOCABULARY.length)];
      const x = rng() * width;
      const y = rng() * height;
      const size = 11 + rng() * 6;
      const opacity = 0.06 + rng() * 0.12;

      tokens.push({
        text,
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (rng() - 0.5) * 0.35,
        vy: (rng() - 0.5) * 0.35,
        size,
        opacity,
        isOverprint: rng() > 0.7,
      });
    }

    tokensRef.current = tokens;
  };

  const drawFrame = (ctx: CanvasRenderingContext2D, width: number, height: number, animated = false) => {
    ctx.clearRect(0, 0, width, height);

    const px = pointerX.get();
    const py = pointerY.get();
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    const localPx = canvasRect ? px - canvasRect.left : -9999;
    const localPy = canvasRect ? py - canvasRect.top : -9999;

    const velocity = animated ? scrollVelocity.get() : 0;
    const velocityStretch = Math.max(-10, Math.min(10, velocity * 0.4));

    for (const token of tokensRef.current) {
      if (animated && !reduced) {
        token.x += token.vx;
        token.y += token.vy + velocityStretch * 0.1;

        // Wrap around bounds
        if (token.x < -80) token.x = width + 60;
        if (token.x > width + 80) token.x = -60;
        if (token.y < -30) token.y = height + 30;
        if (token.y > height + 30) token.y = -30;
      }

      // Pointer proximity check
      let currentOpacity = token.opacity;
      let renderX = token.x;
      let renderY = token.y;

      if (capabilities.canUsePointerFX && !reduced) {
        const dx = localPx - token.x;
        const dy = localPy - token.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 140;

        if (dist < radius && dist > 0) {
          const repelFactor = (1 - dist / radius) * 16;
          renderX -= (dx / dist) * repelFactor;
          renderY -= (dy / dist) * repelFactor;
          currentOpacity = Math.min(0.4, token.opacity + (1 - dist / radius) * 0.25);
        }
      }

      ctx.font = `${token.size}px "IBM Plex Mono", monospace`;

      // Overprint echo
      if (token.isOverprint) {
        ctx.fillStyle = `rgba(49, 93, 255, ${currentOpacity * 0.6})`;
        ctx.fillText(token.text, renderX + 2, renderY + 2);
      }

      ctx.fillStyle = `rgba(245, 246, 247, ${currentOpacity})`;
      ctx.fillText(token.text, renderX, renderY);
    }
  };

  // Setup canvas size, DPR, and render initial static frame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);
      const w = rect.width || window.innerWidth;
      const h = rect.height || window.innerHeight;

      sizeRef.current = { width: w, height: h, dpr };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initTokens(w, h);
      drawFrame(ctx, w, h, false);
    };

    resize();

    // IntersectionObserver to pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [capabilities.canUseCanvasMotion, reduced]);

  // Connect to single shared RAF scheduler via useFrameSubscription
  useFrameSubscription(
    () => {
      if (!isHeroActive || !isVisibleRef.current || reduced || !capabilities.canUseCanvasMotion) {
        return;
      }
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = sizeRef.current;
      drawFrame(ctx, width, height, true);
    },
    !reduced && capabilities.canUseCanvasMotion && isHeroActive
  );

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
    />
  );
}

export default ProceduralTypeField;
