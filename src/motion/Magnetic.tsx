import { useRef, type ReactNode } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { useMotionSetting } from "./MotionContext";

interface MagneticProps {
  children: ReactNode;
  maxDistance?: number;
  className?: string;
}

export function Magnetic({
  children,
  maxDistance = 10,
  className = "",
}: MagneticProps) {
  const { capabilities, reduced } = useMotionSetting();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !capabilities.canUsePointerFX || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    // Constrain displacement between -maxDistance and +maxDistance (6-12px)
    const factor = 0.25;
    const boundedX = Math.max(-maxDistance, Math.min(maxDistance, dx * factor));
    const boundedY = Math.max(-maxDistance, Math.min(maxDistance, dy * factor));

    x.set(boundedX);
    y.set(boundedY);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (reduced || !capabilities.canUsePointerFX) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
