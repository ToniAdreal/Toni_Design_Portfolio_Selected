import { useMotionSetting } from "../motion/MotionContext";

export function HeroScanline() {
  const { reduced } = useMotionSetting();

  if (reduced) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
    >
      <div
        className="h-24 w-full opacity-20"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(49, 93, 255, 0.15) 50%, transparent 100%)",
          animation: "hero-scanline 6s linear infinite",
        }}
      />
      <style>{`
        @keyframes hero-scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}

export default HeroScanline;
