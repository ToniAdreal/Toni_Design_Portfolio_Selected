import { motion } from "motion/react";
import { Section } from "./primitives";
import { metrics, showUnverifiedMetrics } from "../content/site";
import { useMotionSetting } from "../motion/MotionContext";

export function EvidenceStrip() {
  const { reduced } = useMotionSetting();
  // Never silently publish unverified metrics.
  const visible = metrics.filter(
    (m) => !m.requiresVerification || showUnverifiedMetrics,
  );

  return (
    <Section className="!py-16">
      <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink/12 bg-ink/12 sm:grid-cols-3 lg:grid-cols-5">
        {visible.map((m, i) => (
          <motion.div
            key={m.label}
            className="bg-paper p-6"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.06 }}
          >
            <div className="font-display text-4xl font-bold tracking-tight text-cobalt">
              {m.value}
            </div>
            <div className="mt-2 font-mono text-xs leading-snug text-ink/60">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
