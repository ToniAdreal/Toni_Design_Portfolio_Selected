import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useMotionSetting } from "./MotionContext";

interface ProximityTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
}

export function ProximityText({
  text,
  className = "",
  letterClassName = "",
}: ProximityTextProps) {
  const { capabilities, reduced } = useMotionSetting();
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (reduced || !capabilities.canUsePointerFX) {
    return <span className={className}>{text}</span>;
  }

  const chars = Array.from(text);

  return (
    <span
      ref={containerRef}
      aria-label={text}
      className={`inline-block ${className}`}
      onPointerLeave={() => setHoverIndex(null)}
    >
      <span aria-hidden="true" className="inline-flex">
        {chars.map((char, index) => {
          const isSpace = char === " ";
          const isDirect = hoverIndex === index;
          const isNeighbor =
            hoverIndex !== null && Math.abs(hoverIndex - index) === 1;

          const translateY = isDirect ? -3 : isNeighbor ? -1.5 : 0;
          const color = isDirect ? "#315DFF" : undefined;

          return (
            <motion.span
              key={index}
              onPointerEnter={() => setHoverIndex(index)}
              animate={{ y: translateY, color }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className={`inline-block select-none ${letterClassName}`}
            >
              {isSpace ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </span>
    </span>
  );
}

export default ProximityText;
