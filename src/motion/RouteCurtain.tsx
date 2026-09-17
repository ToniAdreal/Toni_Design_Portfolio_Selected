import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useMotionSetting } from "./MotionContext";

function getRouteLabel(pathname: string): string {
  if (pathname === "/portfolio") return "PORTFOLIO";
  if (pathname.startsWith("/portfolio/work/")) {
    const slug = pathname.replace("/portfolio/work/", "").toUpperCase();
    return `WORK : ${slug}`;
  }
  if (pathname === "/") return "TONI ADREAL";
  return "NAVIGATING";
}

export function RouteCurtain() {
  const location = useLocation();
  const { reduced } = useMotionSetting();
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState(() => getRouteLabel(location.pathname));
  const prevPathRef = useRef(location.pathname);
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Do not trigger on initial mount or on same pathname (e.g. hash changes)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (location.pathname !== prevPathRef.current) {
      prevPathRef.current = location.pathname;
      setLabel(getRouteLabel(location.pathname));
      setActive(true);

      const timer = setTimeout(() => {
        setActive(false);
      }, reduced ? 180 : 750);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, reduced]);

  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key={location.pathname}
          initial={
            reduced
              ? { opacity: 0 }
              : { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
          }
          animate={
            reduced
              ? { opacity: [0, 1, 0] }
              : {
                  clipPath: [
                    "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  ],
                }
          }
          exit={{ opacity: 0 }}
          transition={{
            duration: reduced ? 0.18 : 0.75,
            ease: [0.76, 0, 0.24, 1],
            times: reduced ? undefined : [0, 0.45, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#315DFF] text-white"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/75">
              TRANSITION
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {label}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
