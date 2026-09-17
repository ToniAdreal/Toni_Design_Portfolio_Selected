import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { useMotionSetting } from "../motion/MotionContext";
import { useMotionKernel } from "../motion/MotionKernel";
import ReferenceGlobe from "./ReferenceGlobe";
import ReferenceTypeField from "./ReferenceTypeField";
import "./reference-journey.css";

// A single stage owns both scenes: the globe enters before the type leaves.
const words = ["Proof", "Design", "Signal", "Build", "System"];

function mapRange(value: number, input: number[], output: number[]) {
  if (value <= input[0]) return output[0];
  if (value >= input[input.length - 1]) return output[output.length - 1];
  const index = input.findIndex((point) => point >= value);
  const start = index - 1;
  const ratio = (value - input[start]) / (input[index] - input[start]);
  return output[start] + (output[index] - output[start]) * ratio;
}

function StripedWord({ word, index }: { word: string; index: number }) {
  return (
    <div className={`reference-word reference-word-${index}`} aria-hidden="true">
      <span className="reference-word-size">{word}</span>
      {Array.from({ length: 7 }, (_, strip) => (
        <span key={strip} className="reference-word-strip" style={{
          "--slice-top": `${strip * 100 / 7}%`,
          "--slice-bottom": `${100 - (strip + 1) * 100 / 7}%`,
          "--slice-delay": `${index * 55 + strip * 48}ms`,
        } as CSSProperties}>{word}</span>
      ))}
    </div>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Shanghai", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="reference-clock"><span>LOCAL TIME: {time}</span><span>TIME ZONE: UTC+08:00</span></div>;
}

export default function ReferenceJourney() {
  const section = useRef<HTMLElement>(null);
  const { reduced, capabilities } = useMotionSetting();
  const { scrollTo, viewportHeight } = useMotionKernel();
  const pinned = capabilities.canPinScenes && !reduced;
  const { scrollYProgress: progress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const typeY = useTransform(() => -viewportHeight.get() * .57 * Math.min(1, progress.get() / .72));
  // Clear the opening typography before the globe copy becomes readable. The
  // scenes still overlap spatially, but no longer compete for attention.
  const typeOpacity = useTransform(() => mapRange(progress.get(), [0, .16, .42, .56], [1, .98, .35, 0]));
  const fieldOpacity = useTransform(() => mapRange(progress.get(), [0, .20, .46, .58], [1, .95, .14, 0]));
  const globeYFactor = useTransform(() => mapRange(progress.get(), [0, .14, .40, .80, 1], [1.5, 1.4, .96, 0, 0]));
  const globeY = useTransform(() => viewportHeight.get() * globeYFactor.get());
  const globeScale = useTransform(() => mapRange(progress.get(), [0, .30, .48, .80, 1], [2.05, 2.05, 1.72, 1, 1]));
  const chapterOpacity = useTransform(() => mapRange(progress.get(), [.54, .68, 1], [0, 1, 1]));
  const chapterY = useTransform(() => mapRange(progress.get(), [.54, .69], [36, 0]));
  const scrollOpacity = useTransform(() => mapRange(progress.get(), [0, .08], [1, 0]));
  const [chapterActive, setChapterActive] = useState(!pinned);
  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number } | null>(null);
  useMotionValueEvent(progress, "change", value => setChapterActive(value > .70 || !pinned));
  useEffect(() => setChapterActive(!pinned || progress.get() > .70), [pinned, progress]);

  const goToChapter = () => {
    if (!section.current) return;
    const target = pinned
      ? section.current.offsetTop + (section.current.offsetHeight - window.innerHeight) * .85
      : (document.querySelector(".reference-chapter") as HTMLElement)?.offsetTop ?? 0;
    scrollTo(target, { duration: 1.3 });
  };

  // Honor #about links from the directory and work page, including native Back.
  useEffect(() => {
    const handle = () => { if (window.location.hash === "#about" || window.location.hash === "#atlas") goToChapter(); };
    const timer = window.setTimeout(handle, 100);
    window.addEventListener("hashchange", handle);
    return () => { window.clearTimeout(timer); window.removeEventListener("hashchange", handle); };
  }, [pinned, scrollTo]);

  return (
    <section ref={section} id="hero" className={`reference-journey ${pinned ? "is-pinned" : "is-static"}`} aria-labelledby="reference-title">
      <span id="about" className="reference-about-anchor" aria-hidden="true" />
      <div className="reference-stage">
        <h1 id="reference-title" className="sr-only">Toni Adreal — Product Designer and Full-Stack Engineer. I turn evidence into working products.</h1>
        <motion.div className="reference-type-scene" style={pinned ? { y: typeY, opacity: typeOpacity } : undefined}>
          <motion.div className="reference-field-wrap" style={pinned ? { opacity: fieldOpacity } : undefined}>
            <ReferenceTypeField progress={progress} />
          </motion.div>
          <div className="reference-words">{words.map((word, index) => <StripedWord key={word} word={word} index={index} />)}</div>
        </motion.div>
        <motion.div className="reference-bottom-line" style={pinned ? { opacity: scrollOpacity, pointerEvents: chapterActive ? "none" : "auto" } : undefined}>
          <span>FROM QUESTIONS TO WORKING PRODUCTS</span>
          <button onClick={goToChapter}>SCROLL <span aria-hidden="true">↓</span></button>
        </motion.div>

        <div className="reference-chapter">
          <motion.div className="reference-globe-wrap" style={pinned ? { y: globeY, scale: globeScale } : undefined}>
            <ReferenceGlobe reduced={reduced} active={chapterActive} onCoordinates={setCoordinates} />
          </motion.div>
          <motion.div className="reference-chapter-copy" inert={pinned && !chapterActive} style={pinned ? { opacity: chapterOpacity, y: chapterY, pointerEvents: chapterActive ? "auto" : "none" } : undefined}>
            <h2 className="reference-manifesto"><span>TURNING</span><span>QUESTIONS</span><span>INTO THE</span><span>REAL THING.</span></h2>
            <LocalTime />
            <div className="reference-coordinate-readout" aria-live="off"><span>LAT {coordinates ? coordinates.lat.toFixed(2) + "°" : "—"}</span><span>LON {coordinates ? coordinates.lon.toFixed(2) + "°" : "—"}</span></div>
            <div className="reference-bio">
              <p>I’M TONI. I DESIGN PRODUCTS, BUILD SYSTEMS, AND FOLLOW QUESTIONS INTO THE REAL WORLD.</p>
              <Link to="/portfolio/work" className="reference-work-link"><span>Explore my</span> Selected work <span aria-hidden="true">↗</span></Link>
              <div className="reference-chapter-links"><span>Ningbo, China</span><Link to="/portfolio/work">Design &amp; engineering</Link><a href="https://toni.tokenta.space/" target="_blank" rel="noreferrer">Personal site ↗</a></div>
            </div>
            <span className="reference-corner reference-corner-a" aria-hidden="true" /><span className="reference-corner reference-corner-b" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
