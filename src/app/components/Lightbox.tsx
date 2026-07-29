import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioImage } from './PortfolioImage';
import type { ImageSlot } from '../content/types';

interface Props {
  images: ImageSlot[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const [zoom, setZoom] = useState(1);
  const open = index !== null;
  const current = open ? images[index] : null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      const next = (index + dir + images.length) % images.length;
      setZoom(1);
      onNavigate(next);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
        >
          <div className="flex items-center justify-between px-6 py-4 text-white">
            <span className="font-mono-tech text-[12px] text-white/60">{current.file}</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setZoom((z) => Math.max(1, z - 0.5))} className="opacity-70 hover:opacity-100"><ZoomOut size={20} /></button>
              <button onClick={() => setZoom((z) => Math.min(4, z + 0.5))} className="opacity-70 hover:opacity-100"><ZoomIn size={20} /></button>
              <button onClick={onClose} className="opacity-70 hover:opacity-100"><X size={22} /></button>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4">
            <button onClick={() => go(-1)} className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><ChevronLeft size={24} /></button>
            <motion.div
              key={current.file}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: zoom }}
              transition={{ duration: 0.3 }}
              className="max-h-[70vh] max-w-[80vw] cursor-move overflow-auto"
              drag={zoom > 1}
              dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
            >
              <PortfolioImage file={current.file} alt={current.title} contain index={current.file} />
            </motion.div>
            <button onClick={() => go(1)} className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><ChevronRight size={24} /></button>
          </div>

          <div className="mx-auto max-w-3xl px-6 py-6 text-center text-white">
            <h4 className="font-display text-[18px] font-medium">{current.title}</h4>
            <p className="font-body mt-1 text-[14px] text-white/60">{current.caption}</p>
            <p className="font-body mt-2 text-[13px] text-white/40">{current.rationale}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
