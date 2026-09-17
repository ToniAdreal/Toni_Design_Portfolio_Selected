import { useEffect, useRef, type PointerEvent, type KeyboardEvent } from "react";
import { useFrameSubscription } from "../motion/MotionKernel";
import { decodeGlobeGeometry, inverseGlobe, renderGlobe, type GlobeGeometry } from "./globeGeometry";

type Props = {
  className?: string;
  active?: boolean;
  reduced?: boolean;
  onCoordinates?: (value: { lat: number; lon: number } | null) => void;
};

let geometryRequest: Promise<GlobeGeometry> | null = null;
function loadGeometry() {
  return geometryRequest ??= fetch(`${import.meta.env.BASE_URL}data/world-countries-110m.json`)
    .then((response) => {
      if (!response.ok) throw new Error("Geographic data could not load");
      return response.json();
    })
    .then(decodeGlobeGeometry)
    .catch((error) => { geometryRequest = null; throw error; });
}

/** Supply a square parent with an explicit width/height. All dimensions are CSS pixels. */
export default function ReferenceGlobe({ className, active = true, reduced = false, onCoordinates }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const world = useRef<GlobeGeometry | null>(null);
  const scene = useRef({ size: 0, lon: 110, lat: 20, vx: 0, vy: 0, dirty: true, inView: true, dragging: false, lastInteraction: 0 });
  const drag = useRef<{ id: number; x: number; y: number; time: number; pointerType: string } | null>(null);
  const coordinates = useRef(onCoordinates);
  coordinates.current = onCoordinates;

  const draw = () => {
    const canvas = canvasRef.current, state = scene.current;
    const context = canvas?.getContext("2d");
    if (!context || state.size < 1) return;
    renderGlobe(context, world.current, state.size, state.lon, state.lat);
    state.dirty = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let mounted = true;
    loadGeometry().then((data) => {
      if (!mounted) return;
      world.current = data;
      scene.current.dirty = true;
      draw();
    }).catch(() => { /* The sphere/graticule fallback remains usable offline. */ });
    const resize = () => {
      // clientWidth is unaffected by the parent's scale during the pinned scene.
      const size = Math.min(canvas.clientWidth, canvas.clientHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(size * dpr); canvas.height = Math.round(size * dpr);
      canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene.current.size = size; scene.current.dirty = true;
      draw();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      scene.current.inView = entry.isIntersecting;
      if (entry.isIntersecting) scene.current.dirty = true;
    });
    visibility.observe(canvas);
    resize();
    return () => { mounted = false; observer.disconnect(); visibility.disconnect(); };
  }, []);

  useEffect(() => {
    scene.current.dirty = true;
    if (reduced) { scene.current.vx = 0; scene.current.vy = 0; }
    draw();
  }, [reduced, active]);

  useFrameSubscription((time, delta) => {
    const state = scene.current;
    if (!active || !state.inView || document.hidden) return;
    const frames = Math.min(delta, 40) / 16.667;
    if (!reduced && !state.dragging) {
      if (Math.abs(state.vx) + Math.abs(state.vy) > .0008) {
        state.lon += state.vx * frames;
        state.lat = Math.max(-65, Math.min(65, state.lat + state.vy * frames));
        state.vx *= Math.pow(.945, frames); state.vy *= Math.pow(.945, frames);
        state.dirty = true;
      } else if (time - state.lastInteraction > 3800) {
        state.lon += .012 * frames;
        state.dirty = true;
      }
    }
    if (state.dirty) draw();
  }, active);

  const updateCoordinates = (event: PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width * .462);
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height * .462);
    const result = inverseGlobe(x, y, scene.current.lon, scene.current.lat);
    coordinates.current?.(result);
    return result;
  };

  const pointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    if (event.button !== 0 || !updateCoordinates(event)) return;
    const state = scene.current;
    state.dragging = true; state.vx = 0; state.vy = 0; state.lastInteraction = performance.now();
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, time: performance.now(), pointerType: event.pointerType };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.style.cursor = "grabbing";
  };

  const pointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    const current = drag.current, state = scene.current;
    if (current && current.id === event.pointerId) {
      const now = performance.now(), dt = Math.max(8, now - current.time);
      const width = event.currentTarget.getBoundingClientRect().width;
      const factor = 150 / Math.max(220, width);
      const dx = (event.clientX - current.x) * factor, dy = (event.clientY - current.y) * factor;
      state.lon -= dx; state.lat = Math.max(-65, Math.min(65, state.lat + dy));
      state.vx = reduced ? 0 : -dx / dt * 16.667;
      state.vy = reduced ? 0 : dy / dt * 16.667;
      state.dirty = true; state.lastInteraction = now;
      current.x = event.clientX; current.y = event.clientY; current.time = now;
      if (reduced) draw();
    }
    updateCoordinates(event);
  };

  const pointerUp = (event: PointerEvent<HTMLCanvasElement>) => {
    if (drag.current?.id !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    drag.current = null; scene.current.dragging = false; scene.current.lastInteraction = performance.now();
    event.currentTarget.style.cursor = "grab";
  };

  const keyDown = (event: KeyboardEvent<HTMLCanvasElement>) => {
    const state = scene.current;
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "ArrowLeft") state.lon -= 8;
    if (event.key === "ArrowRight") state.lon += 8;
    if (event.key === "ArrowUp") state.lat = Math.min(65, state.lat + 8);
    if (event.key === "ArrowDown") state.lat = Math.max(-65, state.lat - 8);
    if (event.key === "Home") { state.lon = 110; state.lat = 20; }
    state.vx = 0; state.vy = 0; state.dirty = true; state.lastInteraction = performance.now();
    draw();
  };

  return <canvas ref={canvasRef} className={className} tabIndex={0} role="img"
    aria-label="Interactive geographic globe. Toni is based in Ningbo, China. Drag horizontally or use arrow keys to rotate. Press Home to return to Asia."
    style={{ display: "block", width: "100%", height: "100%", cursor: "grab", touchAction: "pan-y", borderRadius: "50%" }}
    onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp}
    onPointerCancel={pointerUp} onLostPointerCapture={pointerUp} onKeyDown={keyDown}
    onPointerLeave={() => { if (!drag.current) coordinates.current?.(null); }} />;
}
