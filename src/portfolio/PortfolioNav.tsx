import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import { useMotionSetting, type MotionMode } from "../motion/MotionContext";
import { useMotionKernel } from "../motion/MotionKernel";
import { Magnetic } from "../motion/Magnetic";

const navItems = [
  { label: "Atlas", href: "/portfolio#atlas" },
  { label: "Featured", href: "/portfolio#featured" },
  { label: "Index", href: "/portfolio#index" },
  { label: "Method", href: "/portfolio#method" },
  { label: "About", href: "/portfolio#about" },
];

function MotionToggle({ dark = true }: { dark?: boolean }) {
  const { mode, setMode } = useMotionSetting();
  const options: { value: MotionMode; label: string }[] = [
    { value: "auto", label: "Auto" },
    { value: "reduced", label: "Reduced" },
    { value: "full", label: "Full" },
  ];
  const base = dark ? "border-white/20" : "border-ink/15";
  return (
    <div
      role="group"
      aria-label="Motion setting"
      className={`flex items-center gap-1 rounded-full border ${base} p-0.5 font-mono text-[11px]`}
    >
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setMode(o.value)}
          aria-pressed={mode === o.value}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            mode === o.value
              ? dark
                ? "bg-white text-[#0B0C0E]"
                : "bg-ink text-paper"
              : dark
                ? "text-white/55 hover:text-white"
                : "text-ink/60 hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

interface CaseCtx {
  title: string;
  chapterLabel?: string;
}

export function PortfolioNav({ caseCtx }: { caseCtx?: CaseCtx }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { reduced, capabilities } = useMotionSetting();
  const { scrollY } = useMotionKernel();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll position for transforming full nav into floating circular trigger
  useEffect(() => {
    const checkScroll = () => {
      const threshold = window.innerHeight * 0.65;
      const scrolled = scrollY.get() > threshold;
      setIsScrolled(scrolled);
    };

    const unsub = scrollY.on("change", checkScroll);
    checkScroll();
    return () => unsub();
  }, [scrollY]);

  // Focus trap, Escape close, and body scroll lock
  useEffect(() => {
    if (!open) return;
    const prevFocused = document.activeElement as HTMLElement | null;
    const node = drawerRef.current;
    const focusables = node?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (triggerRef.current) {
        triggerRef.current.focus();
      } else {
        prevFocused?.focus();
      }
    };
  }, [open]);

  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <>
      <a
        href="#hero"
        className="sr-only rounded-md focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-white focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-[#0B0C0E]"
      >
        Skip to main content
      </a>

      {/* Top State: Full Navigation Bar (visible before 0.65 viewport heights) */}
      <header
        aria-label="Site navigation"
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out ${
          isScrolled && !caseCtx
            ? "pointer-events-none -translate-y-6 opacity-0"
            : "pointer-events-auto translate-y-0 opacity-100 bg-[#0B0C0E]/75 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-8 md:px-12">
          {caseCtx ? (
            <div className="flex items-center gap-4 overflow-hidden">
              <Link
                to="/portfolio#index"
                className="shrink-0 font-mono text-[13px] text-[#A7ABB2] hover:text-white"
              >
                ← Back to work
              </Link>
              <span className="truncate font-display text-sm font-semibold text-white">
                {caseCtx.title}
              </span>
              {caseCtx.chapterLabel && (
                <span className="hidden shrink-0 font-mono text-xs text-[#A7ABB2] sm:inline">
                  {caseCtx.chapterLabel}
                </span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-8">
              <Link
                to="/portfolio"
                className="font-display text-base font-semibold tracking-tight text-white hover:text-white/90"
              >
                Toni Adreal
              </Link>
              {/* Local status / availability line */}
              <span className="hidden items-center gap-2 font-mono text-xs text-[#A7ABB2]/80 lg:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available Q4/2026 for systems &amp; design engineering
              </span>
            </div>
          )}

          {!caseCtx && (
            <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[13px] text-[#A7ABB2] transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            {!caseCtx && (
              <div className="hidden sm:block">
                <MotionToggle />
              </div>
            )}
            <a
              href="https://toni.tokenta.space/"
              target="_blank"
              rel="noreferrer"
              className="hidden font-mono text-[13px] text-[#A7ABB2] transition-colors hover:text-white sm:inline"
            >
              Personal Site ↗
            </a>
            <Magnetic maxDistance={6}>
              <a
                href="/portfolio#about"
                className="rounded-full bg-cobalt px-4 py-2 font-mono text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact
              </a>
            </Magnetic>
            {!caseCtx && (
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu drawer"
                aria-expanded={open}
                className="font-mono text-[13px] text-[#A7ABB2] hover:text-white md:hidden"
              >
                Menu
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Scrolled State: Circular Trigger in upper right */}
      {!caseCtx && (
        <div
          className={`fixed right-6 top-6 z-50 transition-all duration-500 ease-out sm:right-8 ${
            isScrolled
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-4 scale-75 opacity-0"
          }`}
        >
          <Magnetic maxDistance={10}>
            <button
              ref={triggerRef}
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open navigation menu"}
              aria-expanded={open}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0B0C0E]/90 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-cobalt hover:shadow-[0_0_20px_rgba(49,93,255,0.4)]"
            >
              <div className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "translate-y-1.5 rotate-45" : "group-hover:w-4"
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "-translate-y-2 -rotate-45" : "group-hover:translate-x-1"
                  }`}
                />
              </div>
            </button>
          </Magnetic>
        </div>
      )}

      {/* Curved Off-Canvas Drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={closeDrawer}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer Content Container with Curved Leading Edge */}
            <motion.div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
              initial={
                reduced
                  ? { opacity: 0 }
                  : { x: "100%", borderTopLeftRadius: "60px", borderBottomLeftRadius: "60px" }
              }
              animate={
                reduced
                  ? { opacity: 1 }
                  : { x: 0, borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }
              }
              exit={
                reduced
                  ? { opacity: 0 }
                  : { x: "100%", borderTopLeftRadius: "60px", borderBottomLeftRadius: "60px" }
              }
              transition={{
                duration: reduced ? 0.2 : 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex h-full w-full max-w-md flex-col justify-between border-l border-white/10 bg-[#0E1015] p-8 sm:p-12"
            >
              {/* Drawer Top */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <Link
                    to="/portfolio"
                    onClick={closeDrawer}
                    className="font-display text-lg font-bold tracking-tight text-white"
                  >
                    Toni Adreal
                  </Link>
                  <button
                    onClick={closeDrawer}
                    aria-label="Close menu"
                    className="rounded-full border border-white/20 p-2 font-mono text-xs text-[#A7ABB2] hover:border-white hover:text-white"
                  >
                    ESC ✕
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav aria-label="Drawer Links" className="mt-10 flex flex-col gap-5">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={reduced ? false : { opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: reduced ? 0 : 0.15 + index * 0.065,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={closeDrawer}
                        className="group flex items-baseline justify-between py-1 font-display text-3xl font-semibold tracking-tight text-[#F5F6F7] transition-colors hover:text-cobalt"
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-xs text-[#A7ABB2] opacity-0 transition-opacity group-hover:opacity-100">
                          0{index + 1} →
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom Meta & Controls */}
              <div className="space-y-6 border-t border-white/10 pt-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#A7ABB2]/60">
                    Motion Mode
                  </p>
                  <div className="mt-2">
                    <MotionToggle />
                  </div>
                </div>

                <div className="flex flex-col gap-2 font-mono text-xs text-[#A7ABB2]">
                  <a
                    href="https://toni.tokenta.space/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Personal Site ↗
                  </a>
                  <a
                    href="https://github.com/ToniAdreal"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/toniadreal/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn ↗
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href="/portfolio#about"
                    onClick={closeDrawer}
                    className="flex w-full items-center justify-center rounded-md bg-cobalt py-3 font-mono text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Get in touch →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PortfolioNav;
