import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { writingEcosystem, type MediaChannel } from "../content/writingMedia";
import { useMotionSetting } from "../motion/MotionContext";

interface WritingModalProps {
  open: boolean;
  onClose: () => void;
}

function CopyBadge({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy handle "${text}"`}
      className="inline-flex items-center gap-1.5 rounded border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
    >
      <span>{text}</span>
      <span className="text-[10px] text-white/40">{copied ? "✓ Copied" : "Copy"}</span>
    </button>
  );
}

function ChannelCard({ channel }: { channel: MediaChannel }) {
  const isDirect = channel.category === "direct" && !!channel.url;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#14161A] p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#181B20]">
      <div>
        <div className="flex items-start justify-between gap-3">
          <span className="font-display text-base font-semibold text-white">
            {channel.name}
          </span>
          <span className="rounded bg-[#1E232B] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/60">
            {channel.tag}
          </span>
        </div>

        <div className="mt-2.5 flex items-center gap-2">
          <span className="font-mono text-xs text-white/40">Brand / Account:</span>
          <CopyBadge text={channel.brandHandle} />
        </div>

        <p className="mt-3 text-xs leading-relaxed text-white/65">
          {channel.description}
        </p>
      </div>

      <div className="mt-4 border-t border-white/10 pt-3">
        {isDirect ? (
          <a
            href={channel.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#7AA2F7] transition-colors hover:text-white"
          >
            {channel.urlLabel ?? "Visit Publication ↗"}
          </a>
        ) : (
          <div className="flex items-center justify-between text-xs text-white/45 font-mono text-[11px]">
            <span>{channel.searchTip}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WritingModal({ open, onClose }: WritingModalProps) {
  const { reduced } = useMotionSetting();
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard trap and ESC handler
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="writing-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0D0F12] text-white shadow-2xl"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#7AA2F7]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7AA2F7]" />
                  <span>Media Ecosystem</span>
                </div>
                <h2 id="writing-modal-title" className="mt-1 font-display text-2xl font-bold tracking-tight">
                  {writingEcosystem.brandName}
                </h2>
                <p className="mt-1 text-xs text-white/60">
                  {writingEcosystem.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close writing modal"
                className="rounded-full border border-white/15 p-2 text-white/60 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body: Channel Grid */}
            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <p className="text-xs leading-relaxed text-white/70">
                {writingEcosystem.summary}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {writingEcosystem.channels.map((channel) => (
                  <ChannelCard key={channel.id} channel={channel} />
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-white/10 bg-[#090A0D] px-6 py-3.5 sm:px-8 text-[11px] font-mono text-white/50">
              <span>Publications &amp; Video by Toni Adreal</span>
              <button
                type="button"
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                Press ESC to close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
