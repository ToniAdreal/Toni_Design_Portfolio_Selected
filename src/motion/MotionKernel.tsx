import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import { motionValue, type MotionValue } from "motion/react";
import Lenis from "lenis";
import { useMotionSetting } from "./MotionContext";

export type FrameSubscriber = (time: number, delta: number) => void;

export interface MotionKernelState {
  scrollY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
  scrollVelocity: MotionValue<number>;
  scrollDirection: MotionValue<number>;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  pointerVelocityX: MotionValue<number>;
  pointerVelocityY: MotionValue<number>;
  viewportWidth: MotionValue<number>;
  viewportHeight: MotionValue<number>;
  subscribeFrame: (subscriber: FrameSubscriber) => () => void;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number; immediate?: boolean; duration?: number }
  ) => void;
  lenisRef: React.RefObject<Lenis | null>;
}

const MotionKernelCtx = createContext<MotionKernelState | null>(null);

export function MotionKernel({ children }: { children: ReactNode }) {
  const { capabilities, reduced } = useMotionSetting();

  // Primary reactive values stored in MotionValues to avoid React re-renders on scroll / pointer / RAF.
  const scrollY = useMemo(() => motionValue(0), []);
  const scrollProgress = useMemo(() => motionValue(0), []);
  const scrollVelocity = useMemo(() => motionValue(0), []);
  const scrollDirection = useMemo(() => motionValue(0), []);

  const pointerX = useMemo(
    () => motionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0),
    []
  );
  const pointerY = useMemo(
    () => motionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0),
    []
  );
  const pointerVelocityX = useMemo(() => motionValue(0), []);
  const pointerVelocityY = useMemo(() => motionValue(0), []);

  const viewportWidth = useMemo(
    () => motionValue(typeof window !== "undefined" ? window.innerWidth : 1440),
    []
  );
  const viewportHeight = useMemo(
    () => motionValue(typeof window !== "undefined" ? window.innerHeight : 900),
    []
  );

  const lenisRef = useRef<Lenis | null>(null);
  const frameSubscribers = useRef<Set<FrameSubscriber>>(new Set());

  const subscribeFrame = useCallback((subscriber: FrameSubscriber) => {
    frameSubscribers.current.add(subscriber);
    return () => {
      frameSubscribers.current.delete(subscriber);
    };
  }, []);

  const scrollTo = useCallback((
    target: number | string | HTMLElement,
    options?: { offset?: number; immediate?: boolean; duration?: number }
  ) => {
    if (lenisRef.current && capabilities.canSmoothScroll) {
      lenisRef.current.scrollTo(target, options);
    } else {
      const node = typeof target === "string" ? document.querySelector(target) : typeof target === "number" ? null : target;
      const top = typeof target === "number" ? target : node ? node.getBoundingClientRect().top + window.scrollY : window.scrollY;
      window.scrollTo({ top: top + (options?.offset ?? 0), behavior: reduced || options?.immediate ? "auto" : "smooth" });
    }
  }, [capabilities.canSmoothScroll, reduced]);

  // Lenis lifecycle
  useEffect(() => {
    if (capabilities.canSmoothScroll) {
      const lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.095,
        anchors: true,
      });

      lenis.on("scroll", (e) => {
        scrollY.set(e.scroll);
        scrollProgress.set(e.progress);
        scrollVelocity.set(e.velocity);
        scrollDirection.set(e.direction);
      });

      lenisRef.current = lenis;
      scrollY.set(window.scrollY);

      return () => {
        lenis.destroy();
        lenisRef.current = null;
      };
    } else {
      lenisRef.current = null;
      // Fallback native scroll tracking
      let lastScrollY = window.scrollY;
      let lastTime = performance.now();

      const onScroll = () => {
        const currentY = window.scrollY;
        const now = performance.now();
        const dt = Math.max(1, now - lastTime);
        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight
        );

        scrollY.set(currentY);
        scrollProgress.set(Math.min(1, Math.max(0, currentY / maxScroll)));
        const v = (currentY - lastScrollY) / (dt / 16.666);
        scrollVelocity.set(v);
        scrollDirection.set(
          currentY > lastScrollY ? 1 : currentY < lastScrollY ? -1 : 0
        );

        lastScrollY = currentY;
        lastTime = now;
      };

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [
    capabilities.canSmoothScroll,
    scrollY,
    scrollProgress,
    scrollVelocity,
    scrollDirection,
  ]);

  // Pointer tracking (smoothed velocities, direct MotionValue writing)
  useEffect(() => {
    let lastX = pointerX.get();
    let lastY = pointerY.get();
    let lastTime = performance.now();

    const onPointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const currentX = e.clientX;
      const currentY = e.clientY;

      pointerX.set(currentX);
      pointerY.set(currentY);

      // Instant velocity with simple smoothing
      const vx = (currentX - lastX) / (dt / 16.666);
      const vy = (currentY - lastY) / (dt / 16.666);
      pointerVelocityX.set(vx);
      pointerVelocityY.set(vy);

      lastX = currentX;
      lastY = currentY;
      lastTime = now;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [pointerX, pointerY, pointerVelocityX, pointerVelocityY]);

  // Viewport resize tracking
  useEffect(() => {
    const onResize = () => {
      viewportWidth.set(window.innerWidth);
      viewportHeight.set(window.innerHeight);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [viewportWidth, viewportHeight]);

  // Single shared requestAnimationFrame loop
  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();
    let isVisible = !document.hidden;

    const onVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    const loop = (time: number) => {
      if (isVisible) {
        const delta = Math.min(100, time - lastTime);
        lastTime = time;

        // 1. Tick Lenis if active
        if (lenisRef.current) {
          lenisRef.current.raf(time);
        }

        // 2. Tick all frame subscribers
        for (const sub of frameSubscribers.current) {
          try {
            sub(time, delta);
          } catch (err) {
            console.error("Frame subscriber error:", err);
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const value = useMemo<MotionKernelState>(
    () => ({
      scrollY,
      scrollProgress,
      scrollVelocity,
      scrollDirection,
      pointerX,
      pointerY,
      pointerVelocityX,
      pointerVelocityY,
      viewportWidth,
      viewportHeight,
      subscribeFrame,
      scrollTo,
      lenisRef,
    }),
    [
      scrollY,
      scrollProgress,
      scrollVelocity,
      scrollDirection,
      pointerX,
      pointerY,
      pointerVelocityX,
      pointerVelocityY,
      viewportWidth,
      viewportHeight,
      subscribeFrame,
      scrollTo,
    ]
  );

  return (
    <MotionKernelCtx.Provider value={value}>
      {children}
    </MotionKernelCtx.Provider>
  );
}

export function useMotionKernel(): MotionKernelState {
  const ctx = useContext(MotionKernelCtx);
  if (!ctx) throw new Error("useMotionKernel must be used within MotionKernel");
  return ctx;
}

export function useFrameSubscription(
  callback: FrameSubscriber,
  enabled = true
) {
  const { subscribeFrame } = useMotionKernel();
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    if (!enabled) return;
    return subscribeFrame((time, delta) => {
      cbRef.current(time, delta);
    });
  }, [subscribeFrame, enabled]);
}
