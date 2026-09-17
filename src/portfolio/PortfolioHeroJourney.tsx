import { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { heroWords, portfolioIdentity } from "../content/portfolio";
import { useMotionSetting } from "../motion/MotionContext";
import { ProceduralTypeField } from "./ProceduralTypeField";
import { HeroWord } from "./HeroWord";
import { HeroScanline } from "./HeroScanline";
import { Magnetic } from "../motion/Magnetic";

export function PortfolioHeroJourney() {
  const { capabilities, reduced } = useMotionSetting();
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure continuous scroll progress through the multi-viewport journey
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // H1 and thesis fade/rise transitions mapped to scroll progress
  const thesisOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.15, 0.45, 0.8, 0.95],
    [1, 0.95, 0.85, 0.4, 0]
  );
  const thesisY = useTransform(
    scrollYProgress,
    [0.0, 0.4, 0.95],
    ["0px", "-15px", "-40px"]
  );

  // Dynamic height: 280svh on desktop, 210svh on tablet, normal flow on mobile (<768px)
  const isDesktop = capabilities.canPinScenes;
  const outerHeightClass = isDesktop
    ? "h-[280svh] lg:h-[280svh] md:h-[210svh]"
    : "min-h-[100svh] h-auto";

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Introduction and kinetic thesis"
      className={`relative bg-[#0B0C0E] text-[#F5F6F7] ${outerHeightClass}`}
    >
      {/* Pinned sticky stage on desktop/tablet, normal flow on mobile */}
      <div
        className={`${
          isDesktop && !reduced
            ? "sticky top-0 h-[100svh] overflow-hidden"
            : "relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
        } w-full`}
      >
        <ProceduralTypeField />
        <HeroScanline />

        {/* Ambient cobalt gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-cobalt/10 blur-[120px]"
        />

        {/* Inner Content Layer */}
        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 pt-28 pb-12 sm:px-8 md:px-12">
          {/* Top metadata badge */}
          <div className="relative z-20">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#A7ABB2]">
              Portfolio — Product Designer &amp; Full-Stack Engineer
            </p>
          </div>

          {/* Kinetic typography center stage */}
          <div className="relative z-20 my-auto flex h-[40vh] items-center justify-center">
            {isDesktop && !reduced ? (
              <div className="relative flex h-full w-full items-center justify-center">
                {heroWords.map((word, i) => (
                  <HeroWord
                    key={word}
                    word={word}
                    index={i}
                    progress={scrollYProgress}
                    reduced={reduced}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {heroWords.map((word, i) => (
                  <HeroWord
                    key={word}
                    word={word}
                    index={i}
                    progress={scrollYProgress}
                    reduced={true}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Bottom thesis, description, and primary CTAs */}
          <motion.div
            style={isDesktop && !reduced ? { opacity: thesisOpacity, y: thesisY } : undefined}
            className="relative z-20 max-w-2xl"
          >
            {/* Semantic H1 in DOM */}
            <h1 className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-[2rem]">
              {portfolioIdentity.thesis}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#A7ABB2]">
              {portfolioIdentity.supporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic maxDistance={8}>
                <a
                  href="#atlas"
                  className="inline-flex items-center rounded-md bg-cobalt px-6 py-3 font-mono text-sm text-white transition-opacity hover:opacity-90"
                >
                  Explore Evidence Atlas ↓
                </a>
              </Magnetic>
              <Magnetic maxDistance={8}>
                <a
                  href="#featured"
                  className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 font-mono text-sm text-[#F5F6F7] transition-colors hover:border-white"
                >
                  Featured work
                </a>
              </Magnetic>
              <a
                href="#method"
                className="font-mono text-sm text-[#A7ABB2] transition-colors hover:text-white"
              >
                Method →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHeroJourney;
