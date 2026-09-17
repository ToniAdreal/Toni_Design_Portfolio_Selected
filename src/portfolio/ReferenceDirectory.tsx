import { useRef, useState, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Link } from "react-router";
import { useMotionSetting } from "../motion/MotionContext";
import { useMotionKernel } from "../motion/MotionKernel";
import "./reference-chrome.css";

const workPreview = "/projects/Next_Card_Image_01.png";

const entries = [
  { title: "WORK", subtitle: "Selected projects & experiments", href: "/portfolio/work" },
  { title: "WRITING", subtitle: "Thoughts, field notes & observations", href: "https://toni.tokenta.space/#writing" },
  { title: "ABOUT", subtitle: "A little more about the person", href: "#about" },
] as const;

export default function ReferenceDirectory() {
  const { reduced, capabilities } = useMotionSetting();
  const { scrollTo } = useMotionKernel();
  const [active, setActive] = useState<number | null>(null);
  const lastX = useRef(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const spring = { stiffness: 150, damping: 22, mass: 0.35 };
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);
  const smoothRotate = useSpring(rotate, spring);
  const canPreview = !reduced && capabilities.canUsePointerFX;

  const move = (event: PointerEvent<HTMLElement>) => {
    if (!canPreview || event.pointerType === "touch") return;
    x.set(Math.max(12, Math.min(window.innerWidth - 254, event.clientX - 118)));
    y.set(Math.max(12, Math.min(window.innerHeight - 202, event.clientY - 95)));
    rotate.set(Math.max(-7, Math.min(7, (event.clientX - lastX.current) * 0.2)));
    lastX.current = event.clientX;
  };

  return <section id="directory" className="ref-directory" aria-label="Explore work, writing and about">
    <div className="ref-directory-inner">
      <div className="ref-directory-caption"><span>A FEW PLACES TO START</span><span>01 — 03</span></div>
      {entries.map((entry, i) => {
        const content = <><span className="ref-directory-number">0{i + 1}</span><span className="ref-directory-title">{entry.title}</span><span className="ref-directory-subtitle">{entry.subtitle}</span><svg className="ref-directory-arrow" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 27 27 5M5 5h22v22" stroke="currentColor" strokeWidth="1.5" /></svg></>;
        const props = {
          className: "ref-directory-link",
          onPointerEnter: (event: PointerEvent<HTMLAnchorElement>) => { if (canPreview && event.pointerType !== "touch") { lastX.current = event.clientX; move(event); setActive(i); } },
          onPointerMove: move,
          onPointerLeave: () => { setActive(null); rotate.set(0); },
        };
        return <motion.div className="ref-directory-row" key={entry.title} initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <motion.div className="ref-directory-rule" initial={reduced ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, margin: "0px 0px -20px 0px" }} />
          {i === 0 ? <Link to={entry.href} {...props}>{content}</Link> : <a href={entry.href} {...props} target={i === 1 ? "_blank" : undefined} rel={i === 1 ? "noreferrer" : undefined} onClick={i === 2 ? (event) => { const target = document.getElementById("about"); if (target) { event.preventDefault(); scrollTo(target, { offset: -24 }); } } : undefined}>{content}{i === 1 && <span className="ref-sr-only"> (opens in a new tab)</span>}</a>}
        </motion.div>;
      })}
    </div>
    {canPreview && <motion.div className={`ref-directory-preview ref-directory-preview-${active ?? 0}`} aria-hidden="true" style={{ x: smoothX, y: smoothY, rotate: smoothRotate }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.8 : 1 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
      {active === 0 && <img src={workPreview} alt="" />}
      {active === 1 && <svg viewBox="0 0 240 180"><rect width="240" height="180" fill="#eae9e5" /><text x="24" y="46" fontSize="12" fontFamily="monospace" fill="#666">FIELD NOTES / TONI</text><text x="22" y="98" fontSize="43" fontFamily="Georgia, serif" fontStyle="italic" fill="#151515">Thinking</text><text x="22" y="142" fontSize="43" fontFamily="Georgia, serif" fontStyle="italic" fill="#151515">in public.</text></svg>}
      {active === 2 && <svg viewBox="0 0 240 180"><rect width="240" height="180" fill="#0044ee" /><g stroke="#c8d7ff" fill="none" opacity="0.8"><circle cx="120" cy="89" r="69" /><ellipse cx="120" cy="89" rx="35" ry="69" /><ellipse cx="120" cy="89" rx="69" ry="26" /><path d="M51 89h138M120 20v138" /></g><text x="16" y="164" fontSize="9" fontFamily="monospace" fill="white">DESIGN × ENGINEERING × REAL LIFE</text></svg>}
      <span className="ref-preview-caption">{active !== null ? entries[active].title : "EXPLORE"}<span>VIEW</span></span>
    </motion.div>}
  </section>;
}
