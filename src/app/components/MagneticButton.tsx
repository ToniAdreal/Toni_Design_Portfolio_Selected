import { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'red' | 'outline' | 'light';
}

export function MagneticButton({ children, onClick, className, variant = 'red' }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const styles: Record<string, string> = {
    red: 'bg-[var(--toni-red)] text-white',
    outline: 'border border-black/15 text-[var(--toni-text)] bg-transparent',
    light: 'bg-white text-[var(--toni-text)]',
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.3 }}
      className={`font-display relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium tracking-tight ${styles[variant]} ${className ?? ''}`}
    >
      {children}
    </motion.button>
  );
}
