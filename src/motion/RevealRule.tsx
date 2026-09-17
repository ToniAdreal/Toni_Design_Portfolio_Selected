import { motion } from "motion/react";
import { useMotionSetting } from "./MotionContext";

interface RevealRuleProps {
  className?: string;
  delay?: number;
}

export function RevealRule({ className = "", delay = 0 }: RevealRuleProps) {
  const { reduced } = useMotionSetting();

  if (reduced) {
    return <div className={`h-[1px] w-full bg-white/15 ${className}`} />;
  }

  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`h-[1px] w-full bg-white/15 ${className}`}
    />
  );
}

export default RevealRule;
