import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router";
import { useMotionSetting } from "../motion/MotionContext";
import { useFrameSubscription } from "../motion/MotionKernel";
import {
  createInitialNodes,
  renderEvidenceAtlas,
  ATLAS_PROJECTS,
  type AtlasNode,
  type AtlasState,
} from "./evidenceAtlasRenderer";
import { Magnetic } from "../motion/Magnetic";

const FRICTION = 0.94;
const MAX_VELOCITY = 0.065;

export function EvidenceAtlas() {
  const { capabilities, reduced } = useMotionSetting();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nodesRef = useRef<AtlasNode[]>(createInitialNodes());
  const [activeNodeId, setActiveNodeId] = useState<string>("tokenta-workflow");

  const stateRef = useRef<AtlasState>({
    rotationX: 0.15,
    rotationY: 0.4,
    targetRotationX: 0.15,
    targetRotationY: 0.4,
    velocityX: 0.0015,
    velocityY: 0.0035,
    isDragging: false,
    activeNodeId: "tokenta-workflow",
    hoverNodeId: null,
  });

  const dragRef = useRef<{
    lastX: number;
    lastY: number;
    lastTime: number;
    hasMoved: boolean;
  }>({
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    hasMoved: false,
  });

  const isVisibleRef = useRef(false);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  const activeProject =
    ATLAS_PROJECTS.find((p) => p.id === activeNodeId) || ATLAS_PROJECTS[0];

  const handleSelectNode = useCallback((nodeId: string) => {
    setActiveNodeId(nodeId);
    stateRef.current.activeNodeId = nodeId;
    // Animate selected node to front
    const node = nodesRef.current.find((n) => n.id === nodeId);
    if (node) {
      // Calculate rotation to bring node into view
      const targetY = -Math.atan2(node.uX, node.uZ);
      stateRef.current.velocityY = (targetY - stateRef.current.rotationY) * 0.1;
    }
  }, []);

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const ROTATE_STEP = 0.08;
    if (e.key === "ArrowLeft") {
      stateRef.current.velocityY -= ROTATE_STEP;
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      stateRef.current.velocityY += ROTATE_STEP;
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      stateRef.current.velocityX -= ROTATE_STEP;
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      stateRef.current.velocityX += ROTATE_STEP;
      e.preventDefault();
    }
  };

  // Canvas setup, resize & initial static render
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);
      const w = rect.width || 800;
      const h = rect.height || 540;

      sizeRef.current = { width: w, height: h, dpr };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      renderEvidenceAtlas(ctx, w, h, nodesRef.current, stateRef.current, reduced);
    };

    resize();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  // Frame tick via single RAF scheduler
  useFrameSubscription(
    () => {
      if (!isVisibleRef.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const state = stateRef.current;

      if (!reduced) {
        if (!state.isDragging) {
          // Apply velocity with friction
          state.rotationY += state.velocityY;
          state.rotationX += state.velocityX;

          state.velocityY *= FRICTION;
          state.velocityX *= FRICTION;

          // Gentle ambient drift
          state.rotationY += 0.001;

          // Clamp elevation
          state.rotationX = Math.max(-0.6, Math.min(0.6, state.rotationX));
        }
      }

      const { width, height } = sizeRef.current;
      renderEvidenceAtlas(ctx, width, height, nodesRef.current, state, reduced);
    },
    !reduced && capabilities.canUseCanvasMotion
  );

  // Pointer drag events
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (reduced) return;
    stateRef.current.isDragging = true;
    dragRef.current = {
      lastX: e.clientX,
      lastY: e.clientY,
      lastTime: performance.now(),
      hasMoved: false,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    if (stateRef.current.isDragging) {
      const now = performance.now();
      const dt = Math.max(1, now - dragRef.current.lastTime);
      const dx = e.clientX - dragRef.current.lastX;
      const dy = e.clientY - dragRef.current.lastY;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        dragRef.current.hasMoved = true;
      }

      const sensitivity = 0.0045;
      stateRef.current.rotationY += dx * sensitivity;
      stateRef.current.rotationX -= dy * sensitivity;
      stateRef.current.rotationX = Math.max(-0.6, Math.min(0.6, stateRef.current.rotationX));

      // Calculate instantaneous angular velocity and clamp
      const vy = (dx * sensitivity) / (dt / 16.666);
      const vx = (-dy * sensitivity) / (dt / 16.666);
      stateRef.current.velocityY = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vy));
      stateRef.current.velocityX = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vx));

      dragRef.current.lastX = e.clientX;
      dragRef.current.lastY = e.clientY;
      dragRef.current.lastTime = now;
    } else {
      // Hit test for hovering node
      let foundHover: string | null = null;
      for (const node of nodesRef.current) {
        if (!node.isFront) continue;
        const dist = Math.hypot(localX - node.screenX, localY - node.screenY);
        if (dist < 24 * node.scale) {
          foundHover = node.id;
          break;
        }
      }
      stateRef.current.hoverNodeId = foundHover;
      canvas.style.cursor = foundHover ? "pointer" : "grab";
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    stateRef.current.isDragging = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }

    // If it was a click without significant dragging, test for node selection
    if (!dragRef.current.hasMoved) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      for (const node of nodesRef.current) {
        if (!node.isFront) continue;
        const dist = Math.hypot(localX - node.screenX, localY - node.screenY);
        if (dist < 32 * node.scale) {
          handleSelectNode(node.id);
          break;
        }
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="atlas"
      aria-label="Interactive Evidence Atlas"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative mx-auto max-w-[1440px] px-6 py-20 outline-none focus-visible:ring-1 focus-visible:ring-cobalt sm:px-8 md:px-12"
    >
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Evidence Atlas // 02
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Navigable Project Topology
          </h2>
        </div>
        <p className="font-mono text-xs text-[#A7ABB2]">
          Drag to inspect · Arrow keys rotate · Tap node to inspect
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Canvas 2D Stage */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.01] lg:col-span-8">
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className="h-full w-full touch-none select-none"
          />

          {/* Controls helper */}
          <div className="pointer-events-none absolute bottom-4 left-4 flex gap-2 font-mono text-[11px] text-[#A7ABB2]/70">
            <span className="rounded border border-white/10 bg-[#0B0C0E]/80 px-2 py-0.5">
              DRAG TO ROTATE
            </span>
            <span className="rounded border border-white/10 bg-[#0B0C0E]/80 px-2 py-0.5">
              FRICTION: {FRICTION}
            </span>
          </div>
        </div>

        {/* Live Telemetry / Project Card Readout */}
        <div className="flex flex-col justify-between rounded-sm border border-white/10 bg-white/[0.02] p-6 lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-cobalt/40 bg-cobalt/10 px-2.5 py-0.5 font-mono text-[11px] text-cobalt">
                STAGE: {activeProject.evidenceStage}
              </span>
              <span className="font-mono text-xs text-[#A7ABB2]">
                YEAR // {activeProject.year}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
              {activeProject.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-cobalt">
              {activeProject.domain}
            </p>

            <dl className="mt-6 space-y-2.5 border-t border-white/10 pt-4 font-mono text-xs">
              <div className="flex justify-between">
                <dt className="text-[#A7ABB2]">Delivery State</dt>
                <dd className="font-semibold text-white">{activeProject.state}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#A7ABB2]">Validation</dt>
                <dd className="text-white">Human-In-The-Loop</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 pt-4">
            {activeProject.hasCaseStudy ? (
              <Magnetic maxDistance={6}>
                <Link
                  to={`/portfolio/work/${activeProject.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-md bg-cobalt px-5 py-2.5 font-mono text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  View full case study →
                </Link>
              </Magnetic>
            ) : (
              <Magnetic maxDistance={6}>
                <a
                  href="#featured"
                  className="inline-flex w-full items-center justify-center rounded-md border border-white/20 px-5 py-2.5 font-mono text-xs text-[#F5F6F7] transition-colors hover:border-white"
                >
                  Jump to chapter details ↓
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </div>

      {/* Screen-reader and Reduced-motion HTML equivalent */}
      <div className={reduced ? "mt-8 block" : "sr-only"}>
        <h3 className="font-mono text-sm uppercase text-cobalt">
          All Project Nodes (Accessible Index)
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {ATLAS_PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectNode(p.id)}
              className={`rounded border p-3 text-left font-mono text-xs transition-colors ${
                p.id === activeNodeId
                  ? "border-cobalt bg-cobalt/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-[#A7ABB2] hover:border-white/30"
              }`}
            >
              <span className="block font-display text-sm font-semibold text-white">
                {p.title}
              </span>
              <span className="mt-1 block text-[11px] text-[#A7ABB2]">
                {p.domain} · {p.year} · {p.state}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EvidenceAtlas;
