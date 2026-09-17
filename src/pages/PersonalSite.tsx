import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMotionSetting } from "../motion/MotionContext";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { CurrentChapter } from "../components/CurrentChapter";
import { EvidenceStrip } from "../components/EvidenceStrip";
import { SelectedTrajectory } from "../components/SelectedTrajectory";
import { Publications } from "../components/Publications";
import { WorkingMethod } from "../components/WorkingMethod";
import { Capabilities } from "../components/Capabilities";
import { PersonalCoordinates } from "../components/PersonalCoordinates";
import { Contact } from "../components/Contact";
import { identity } from "../content/site";

// First-session-only labeled curtain (650–900ms). Skipped on repeat navigation
// during the session and in reduced-motion mode.
function Curtain() {
  const { reduced } = useMotionSetting();
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("toni-intro-seen");
  });

  useEffect(() => {
    if (!show) return;
    if (reduced) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("toni-intro-seen", "1");
    const t = setTimeout(() => setShow(false), 850);
    return () => clearTimeout(t);
  }, [show, reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-between bg-ink px-8 pb-10 text-paper"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="font-display text-lg font-semibold">{identity.name}</span>
          <span className="font-mono text-xs text-paper/50">Observe · Frame · Build · Verify</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PersonalSite() {
  return (
    <div className="bg-paper text-ink">
      <Curtain />
      <Nav />
      <main id="main">
        <Hero />
        <CurrentChapter />
        <EvidenceStrip />
        <SelectedTrajectory />
        <Publications />
        <WorkingMethod />
        <Capabilities />
        <PersonalCoordinates />
      </main>
      <Contact />
    </div>
  );
}
