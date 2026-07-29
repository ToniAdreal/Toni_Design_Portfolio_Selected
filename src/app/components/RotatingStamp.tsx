import { useScroll, useTransform, motion } from 'motion/react';

interface Props {
  size?: number;
  text?: string;
  dark?: boolean;
}

export function RotatingStamp({
  size = 112,
  text = 'DESIGN PORTFOLIO • TONI • 2026 • ',
  dark = false,
}: Props) {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 3000], [0, 360]);
  const chars = text.split('');
  const color = dark ? '#ffffff' : 'var(--toni-text)';

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{ rotate }}
      >
        <defs>
          <path id="stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 2, fill: color }}>
          <textPath href="#stamp-circle" xlinkHref="#stamp-circle">
            {chars.join('')}
          </textPath>
        </text>
      </motion.svg>
      <div
        className="absolute flex h-11 w-11 items-center justify-center rounded-full"
        style={{ background: 'var(--toni-red)' }}
      >
        <span className="font-display text-[18px] font-bold text-white">R</span>
      </div>
    </div>
  );
}
