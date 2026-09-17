import { motion, useTransform, type MotionValue } from "motion/react";
import { useMotionSetting } from "../motion/MotionContext";

interface HeroWordProps {
  word: string;
  index: number;
  progress: MotionValue<number>;
  reduced: boolean;
}

export function HeroWord({ word, index, progress, reduced }: HeroWordProps) {
  const { capabilities } = useMotionSetting();

  // QUESTION (index 0)
  const qX = useTransform(progress, [0.0, 0.12, 0.3, 0.84, 1.0], ["0vw", "0vw", "-16vw", "-16vw", "-40vw"]);
  const qY = useTransform(progress, [0.0, 0.12, 0.3, 0.84, 1.0], ["0vh", "0vh", "-12vh", "-12vh", "-25vh"]);
  const qScale = useTransform(progress, [0.0, 0.12, 0.3, 0.84, 1.0], [1, 1, 0.72, 0.72, 0.5]);
  const qOpacity = useTransform(progress, [0.0, 0.12, 0.3, 0.84, 1.0], [1, 1, 0.25, 0.25, 0]);

  // EVIDENCE (index 1)
  const eX = useTransform(progress, [0.0, 0.12, 0.22, 0.3, 0.48, 0.84, 1.0], ["8vw", "8vw", "0vw", "0vw", "14vw", "14vw", "35vw"]);
  const eY = useTransform(progress, [0.0, 0.12, 0.22, 0.3, 0.48, 0.84, 1.0], ["15vh", "15vh", "0vh", "0vh", "-10vh", "-10vh", "-25vh"]);
  const eScale = useTransform(progress, [0.0, 0.12, 0.22, 0.3, 0.48, 0.84, 1.0], [0.75, 0.75, 1.08, 1.08, 0.72, 0.72, 0.5]);
  const eOpacity = useTransform(progress, [0.0, 0.12, 0.22, 0.3, 0.48, 0.84, 1.0], [0.15, 0.15, 1, 1, 0.25, 0.25, 0]);

  // DECISION (index 2)
  const dX = useTransform(progress, [0.0, 0.22, 0.3, 0.4, 0.48, 0.68, 1.0], ["-30vw", "-30vw", "0vw", "0vw", "-10vw", "-10vw", "-35vw"]);
  const dY = useTransform(progress, [0.0, 0.22, 0.3, 0.4, 0.48, 0.68, 1.0], ["8vh", "8vh", "0vh", "0vh", "12vh", "12vh", "25vh"]);
  const dScale = useTransform(progress, [0.0, 0.22, 0.3, 0.4, 0.48, 0.68, 1.0], [0.7, 0.7, 1.05, 1.05, 0.7, 0.7, 0.5]);
  const dOpacity = useTransform(progress, [0.0, 0.22, 0.3, 0.4, 0.48, 0.68, 1.0], [0, 0, 1, 1, 0.25, 0.25, 0]);

  // SYSTEM (index 3)
  const sX = useTransform(progress, [0.0, 0.4, 0.48, 0.58, 0.68, 0.84, 1.0], ["12vw", "12vw", "0vw", "0vw", "0vw", "0vw", "30vw"]);
  const sY = useTransform(progress, [0.0, 0.4, 0.48, 0.58, 0.68, 0.84, 1.0], ["30vh", "30vh", "0vh", "0vh", "0vh", "-8vh", "-20vh"]);
  const sScale = useTransform(progress, [0.0, 0.4, 0.48, 0.58, 0.68, 0.84, 1.0], [0.65, 0.65, 1.1, 1.1, 1.1, 0.8, 0.5]);
  const sOpacity = useTransform(progress, [0.0, 0.4, 0.48, 0.58, 0.68, 0.84, 1.0], [0, 0, 1, 1, 1, 0.35, 0]);

  // OUTCOME (index 4)
  const oX = useTransform(progress, [0.0, 0.58, 0.68, 0.84, 1.0], ["0vw", "0vw", "0vw", "0vw", "0vw"]);
  const oY = useTransform(progress, [0.0, 0.58, 0.68, 0.84, 1.0], ["25vh", "25vh", "0vh", "0vh", "20vh"]);
  const oScale = useTransform(progress, [0.0, 0.58, 0.68, 0.84, 1.0], [0.6, 0.6, 1.15, 1.15, 0.7]);
  const oOpacity = useTransform(progress, [0.0, 0.58, 0.68, 0.84, 1.0], [0, 0, 1, 1, 0]);

  if (reduced || !capabilities.canPinScenes) {
    const isCobalt = index === 4;
    return (
      <div className="overflow-hidden py-1">
        <span
          className={`block font-display text-[12vw] font-bold leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[7vw] ${
            isCobalt ? "text-[#315DFF]" : "text-[#F5F6F7]/85"
          }`}
        >
          {word}
        </span>
      </div>
    );
  }

  // Dynamic values based on index
  const x = index === 0 ? qX : index === 1 ? eX : index === 2 ? dX : index === 3 ? sX : oX;
  const y = index === 0 ? qY : index === 1 ? eY : index === 2 ? dY : index === 3 ? sY : oY;
  const scale = index === 0 ? qScale : index === 1 ? eScale : index === 2 ? dScale : index === 3 ? sScale : oScale;
  const opacity = index === 0 ? qOpacity : index === 1 ? eOpacity : index === 2 ? dOpacity : index === 3 ? sOpacity : oOpacity;
  const isCobalt = index === 4;

  return (
    <motion.div
      style={{ x, y, scale, opacity }}
      className="pointer-events-none absolute left-0 right-0 flex justify-center text-center will-change-transform"
    >
      <span
        className={`font-display text-[13vw] font-bold tracking-tight select-none sm:text-[10vw] lg:text-[8vw] ${
          isCobalt
            ? "text-[#315DFF] drop-shadow-[0_0_35px_rgba(49,93,255,0.45)]"
            : "text-[#F5F6F7]"
        }`}
      >
        {word}
      </span>
    </motion.div>
  );
}

export default HeroWord;
