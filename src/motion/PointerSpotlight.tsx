import { useRef, useEffect } from "react";
import { useMotionSetting } from "./MotionContext";
import { useMotionKernel } from "./MotionKernel";

interface PointerSpotlightProps {
  className?: string;
  size?: number;
  color?: string;
}

export function PointerSpotlight({
  className = "",
  size = 280,
  color = "rgba(49, 93, 255, 0.08)",
}: PointerSpotlightProps) {
  const { capabilities, reduced } = useMotionSetting();
  const { pointerX, pointerY } = useMotionKernel();
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !capabilities.canUsePointerFX) return;

    const update = () => {
      if (!spotlightRef.current) return;
      const x = pointerX.get();
      const y = pointerY.get();
      spotlightRef.current.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
    };

    const unsubX = pointerX.on("change", update);
    const unsubY = pointerY.on("change", update);
    update();

    return () => {
      unsubX();
      unsubY();
    };
  }, [capabilities.canUsePointerFX, reduced, pointerX, pointerY, size]);

  if (reduced || !capabilities.canUsePointerFX) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-10 overflow-hidden ${className}`}
    >
      <div
        ref={spotlightRef}
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          willChange: "transform",
        }}
        className="pointer-events-none absolute left-0 top-0 rounded-full"
      />
    </div>
  );
}

export default PointerSpotlight;
