import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { useMotionSetting, type MotionMode } from "../motion/MotionContext";
import { useMotionKernel } from "../motion/MotionKernel";
import Magnetic from "../motion/Magnetic";
import WritingModal from "./WritingModal";
import "./reference-chrome.css";

export function useReferenceClock() {
  const format = () => new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(format()), 15_000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

const links = [
  { label: "Work", href: "/portfolio/work", kind: "route" },
  { label: "Writing", href: "#writing", kind: "writing" },
  { label: "About", href: "/portfolio#about", kind: "anchor" },
  { label: "Contact", href: "/portfolio#contact", kind: "anchor" },
] as const;

export default function ReferenceNav() {
  const { reduced, mode, setMode } = useMotionSetting();
  const { scrollY, scrollTo, lenisRef } = useMotionKernel();
  const location = useLocation();
  const time = useReferenceClock();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 90);
  const [open, setOpen] = useState(false);
  const [writingOpen, setWritingOpen] = useState(false);
  const drawer = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#writing") {
        setWritingOpen(true);
      }
    };
    const handleOpenModal = () => setWritingOpen(true);
    window.addEventListener("hashchange", handleHash);
    window.addEventListener("open-writing-modal", handleOpenModal);
    if (window.location.hash === "#writing") {
      setWritingOpen(true);
    }
    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("open-writing-modal", handleOpenModal);
    };
  }, []);

  useEffect(() => {
    const update = (value: number) => setScrolled(value > 90);
    update(window.scrollY);
    return scrollY.on("change", update);
  }, [scrollY]);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const inertNodes = [...document.querySelectorAll<HTMLElement>("main, footer")]
      .map((node) => ({ node, wasInert: node.inert }));
    inertNodes.forEach(({ node }) => { node.inert = true; });
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    lenisRef.current?.stop();
    const frame = requestAnimationFrame(() => drawer.current?.querySelector<HTMLButtonElement>("button")?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const controls = drawer.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), select:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      } else if (!drawer.current?.contains(document.activeElement)) {
        event.preventDefault(); first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      inertNodes.forEach(({ node, wasInert }) => { node.inert = wasInert; });
      lenisRef.current?.start();
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
      else trigger.current?.focus({ preventScroll: true });
    };
  }, [open, lenisRef]);

  const navigateAnchor = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.slice(href.indexOf("#"));
    const target = document.querySelector<HTMLElement>(hash);
    if (target) {
      event.preventDefault();
      setOpen(false);
      requestAnimationFrame(() => {
        history.replaceState(null, "", `${location.pathname}${hash}`);
        scrollTo(target, { offset: -24, duration: reduced ? 0 : 1.1 });
      });
    } else setOpen(false);
  };

  const renderLink = (item: (typeof links)[number], className?: string) => {
    if (item.kind === "writing") {
      return (
        <button
          type="button"
          className={className}
          onClick={() => {
            setOpen(false);
            setWritingOpen(true);
          }}
        >
          {item.label}
        </button>
      );
    }
    if (item.kind === "route") return <Link className={className} to={item.href} onClick={() => setOpen(false)}>{item.label}</Link>;
    if (item.kind === "anchor") return <Link className={className} to={item.href} onClick={(event) => navigateAnchor(event, item.href)}>{item.label}</Link>;
    return <a className={className} href={item.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{item.label}<span className="ref-sr-only"> (opens in a new tab)</span></a>;
  };

  return <>
    <a className="ref-skip" href="#main-content">Skip to content</a>
    <header className={`ref-nav ${scrolled ? "is-scrolled" : ""}`}>
      <Link to="/portfolio" className="ref-brand" aria-label="Toni Adreal home">
        <img src="/favicon.png" alt="Toni Adreal" className="ref-brand-logo" width={37} height={37} />
        <span className="ref-brand-name">Toni.</span>
      </Link>
      <span className="ref-nav-clock" aria-label={`Local time, UTC plus 8, ${time}`}>{time}<span className="ref-clock-dot" /></span>
      <nav className="ref-nav-links" aria-label="Primary navigation" inert={scrolled || open}>
        {links.map((item) => <span key={item.label}>{renderLink(item)}</span>)}
      </nav>
    </header>
    <div className={`ref-menu-position ${scrolled ? "is-scrolled" : ""}`}>
      <Magnetic maxDistance={8}>
        <button ref={trigger} className="ref-menu-trigger" aria-label="Open navigation menu" aria-expanded={open} aria-controls="reference-navigation-drawer" onClick={() => setOpen(true)} tabIndex={open ? -1 : undefined}>
          <span /><span />
        </button>
      </Magnetic>
    </div>
    <AnimatePresence>
      {open && <div className="ref-drawer-layer">
        <motion.div className="ref-drawer-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.35 }} onClick={() => setOpen(false)} />
        <motion.div ref={drawer} id="reference-navigation-drawer" className="ref-drawer" role="dialog" aria-modal="true" aria-labelledby="ref-drawer-title" initial={reduced ? false : { x: "110%" }} animate={{ x: 0 }} exit={{ x: reduced ? 0 : "110%", opacity: reduced ? 0 : 1 }} transition={{ duration: reduced ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}>
          <motion.svg className="ref-drawer-curve" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" initial={{ scaleX: 1 }} animate={{ scaleX: 0 }} exit={{ scaleX: 1 }} transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}><path d="M100 0 C-30 15 -30 85 100 100 Z" /></motion.svg>
          <div className="ref-drawer-top"><span id="ref-drawer-title">Navigation</span><button className="ref-drawer-close" aria-label="Close navigation menu" onClick={() => setOpen(false)}><span /><span /></button></div>
          <nav className="ref-drawer-links" aria-label="Expanded navigation">
            {links.map((item, i) => <motion.div key={item.label} initial={reduced ? false : { y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: reduced ? 0 : 0.2 + i * 0.065, duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}><span className="ref-drawer-number">0{i + 1}</span>{renderLink(item)}</motion.div>)}
          </nav>
          <div className="ref-drawer-bottom">
            <div className="ref-drawer-socials"><a href="https://www.linkedin.com/in/toniadreal/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ToniAdreal" target="_blank" rel="noreferrer">GitHub</a><a href="https://toni.tokenta.space/" target="_blank" rel="noreferrer">Personal site</a></div>
            <label className="ref-motion-label">Motion<select value={mode} onChange={(event) => setMode(event.target.value as MotionMode)}><option value="auto">System</option><option value="full">Full</option><option value="reduced">Reduced</option></select></label>
          </div>
        </motion.div>
      </div>}
    </AnimatePresence>
    <WritingModal open={writingOpen} onClose={() => setWritingOpen(false)} />
  </>;
}
