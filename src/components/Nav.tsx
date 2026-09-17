import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { identity, navItems } from "../content/site";
import { useMotionSetting, type MotionMode } from "../motion/MotionContext";

function MotionToggle() {
  const { mode, setMode } = useMotionSetting();
  const options: { value: MotionMode; label: string }[] = [
    { value: "auto", label: "Auto" },
    { value: "reduced", label: "Reduced" },
    { value: "full", label: "Full" },
  ];
  return (
    <div
      role="group"
      aria-label="Motion setting"
      className="flex items-center gap-1 rounded-full border border-ink/15 p-0.5 font-mono text-[11px]"
    >
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setMode(o.value)}
          aria-pressed={mode === o.value}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            mode === o.value ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const { reduced } = useMotionSetting();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Focus trap + escape + focus restoration for the drawer.
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const node = drawerRef.current;
    const focusables = node?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && focusables && focusables.length) {
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
      prev?.focus();
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
      >
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-8 md:px-12">
          <a href="#top" className="font-display text-base font-semibold tracking-tight">
            {identity.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[13px] text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MotionToggle />
            </div>
            <a
              href="/portfolio"
              className="rounded-full bg-ink px-4 py-2 font-mono text-[13px] text-paper transition-opacity hover:opacity-85"
            >
              Portfolio
            </a>
            <button
              ref={triggerRef}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="font-mono text-[13px] text-ink/70 hover:text-ink md:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-ink/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0.15 : 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed right-0 top-0 z-50 flex h-full w-[min(88vw,360px)] flex-col bg-paper p-6 shadow-2xl"
              initial={reduced ? { opacity: 0 } : { x: "100%" }}
              animate={reduced ? { opacity: 1 } : { x: 0 }}
              exit={reduced ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: reduced ? 0.15 : 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink/50">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="font-mono text-sm text-ink/70 hover:text-ink"
                >
                  Close ✕
                </button>
              </div>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto">
                <MotionToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
