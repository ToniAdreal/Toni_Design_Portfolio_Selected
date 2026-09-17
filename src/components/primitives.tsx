import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useMotionSetting } from "../motion/MotionContext";

// Section title with a line-mask rise and a rule that draws in (550–750ms).
export function SectionTitle({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id?: string;
}) {
  const { reduced } = useMotionSetting();
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-cobalt">{index}</span>
        <div className="overflow-hidden">
          <motion.h2
            id={id}
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            initial={reduced ? { opacity: 0 } : { y: "110%" }}
            whileInView={reduced ? { opacity: 1 } : { y: "0%" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: reduced ? 0.2 : 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h2>
        </div>
      </div>
      <motion.div
        className="mt-6 h-px origin-left bg-ink/20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: reduced ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 ${className}`}
    >
      {children}
    </section>
  );
}
