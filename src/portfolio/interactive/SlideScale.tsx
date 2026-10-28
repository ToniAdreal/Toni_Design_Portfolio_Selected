import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * SlideScale — renders a bespoke slide rebuild on a fixed 980px design
 * canvas and scales it proportionally to the available width, exactly
 * the way the original slide image was scaled. This preserves the
 * slide's layout, proportions, type hierarchy and density at any
 * container width instead of letting grids reflow and collapse.
 */
export function SlideScale({ children, width = 980 }: { children: ReactNode; width?: number }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const o = outer.current, i = inner.current;
    if (!o || !i) return;
    const update = () => {
      const w = o.clientWidth;
      if (w > 0) setScale(w / width);
      setHeight(i.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={outer} className="slide-scale" style={{ position: "relative", width: "100%", height: height ? height * scale : undefined, overflow: "hidden" }}>
      <div ref={inner} style={{ width, transform: scale ? `scale(${scale})` : undefined, transformOrigin: "0 0", position: height ? "absolute" : undefined, top: 0, left: 0 }}>
        {children}
      </div>
    </div>
  );
}
