import { lazy, Suspense, useLayoutEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
import PersonalHome from "./PersonalHome";
import PortfolioHome from "./portfolio/PortfolioHome";
import { RouteCurtain } from "./motion/RouteCurtain";
import { useMotionKernel } from "./motion/MotionKernel";
const ReferenceWork = lazy(() => import("./portfolio/ReferenceWork"));

// Route-split: case-study content stays out of the home bundle and loads on demand.
const CaseStudy = lazy(() => import("./portfolio/CaseStudy"));

function CaseStudyFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fdfdfd]">
      <span className="font-mono text-sm text-[#777]">Loading…</span>
    </div>
  );
}

function RootShell() {
  const location = useLocation();
  const { scrollTo } = useMotionKernel();
  useLayoutEffect(() => {
    scrollTo(0, { immediate: true });
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) scrollTo(target, { immediate: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, scrollTo]);
  return (
    <>
      <RouteCurtain />
      <Outlet />
    </>
  );
}

function RootIndex() {
  const isPortfolio =
    typeof window !== "undefined" &&
    (window.location.hostname.includes("portfolio") ||
      window.location.hostname === "toni.portfolio.tokenta.space");
  return isPortfolio ? <PortfolioHome /> : <PersonalHome />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootShell />,
    children: [
      { index: true, Component: RootIndex },
      { path: "portfolio", Component: PortfolioHome },
      { path: "portfolio/work", element: <Suspense fallback={<CaseStudyFallback />}><ReferenceWork /></Suspense> },
      {
        path: "work/:slug",
        element: (
          <Suspense fallback={<CaseStudyFallback />}>
            <CaseStudy />
          </Suspense>
        ),
      },
      {
        path: "portfolio/work/:slug",
        element: (
          <Suspense fallback={<CaseStudyFallback />}>
            <CaseStudy />
          </Suspense>
        ),
      },
      { path: "*", Component: RootIndex },
    ],
  },
]);
