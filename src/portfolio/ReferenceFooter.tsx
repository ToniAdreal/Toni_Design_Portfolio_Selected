import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { useMotionSetting } from "../motion/MotionContext";
import Magnetic from "../motion/Magnetic";
import { useReferenceClock } from "./ReferenceNav";
import "./reference-chrome.css";

export default function ReferenceFooter() {
  const ref = useRef<HTMLElement>(null);
  const { reduced } = useMotionSetting();
  const time = useReferenceClock();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [65, 0]);
  return <footer ref={ref} id="contact" className="ref-footer">
    <motion.div className="ref-footer-inner" style={reduced ? undefined : { y }}>
      <div className="ref-footer-eyebrow"><span>A CONVERSATION IS A GOOD START.</span><span>TONI ADREAL</span></div>
      <div className="ref-footer-invitation">
        <h2>Let’s make<br />something real.</h2>
        <Magnetic maxDistance={14}><a className="ref-contact-circle" href="https://www.linkedin.com/in/toniadreal/" target="_blank" rel="noreferrer"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 27 27 5M5 5h22v22" stroke="currentColor" strokeWidth="1.5" /></svg><span>Get in touch</span><span className="ref-sr-only">on LinkedIn (opens in a new tab)</span></a></Magnetic>
      </div>
      <div className="ref-footer-bottom">
        <div className="ref-footer-credit"><span>© {new Date().getFullYear()} Toni Adreal</span><span>Design. Build. Keep learning.</span></div>
        <nav className="ref-footer-social" aria-label="Social and website links"><a href="https://www.linkedin.com/in/toniadreal/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ToniAdreal" target="_blank" rel="noreferrer">GitHub</a><a href="https://x.com/toniadreal_lab" target="_blank" rel="noreferrer">X</a><a href="https://toni.tokenta.space/" target="_blank" rel="noreferrer">Personal site</a><Link to="/portfolio/work">Work</Link></nav>
        <div className="ref-footer-time"><span>LOCAL TIME</span><span>{time} <span className="ref-footer-timezone">UTC+8</span></span></div>
      </div>
    </motion.div>
  </footer>;
}
