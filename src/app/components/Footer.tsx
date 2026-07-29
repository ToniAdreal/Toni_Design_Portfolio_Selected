import { RotatingStamp } from './RotatingStamp';

export function Footer({ dark = false }: { dark?: boolean }) {
  const bg = dark ? 'bg-[#0a0a0b] text-white' : 'bg-[var(--toni-onyx)] text-white';
  return (
    <footer className={`relative overflow-hidden ${bg}`}>
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="toni-display text-[28px]">Let's build something memorable.</div>
          <a
            href="mailto:toniadreal11@gmail.com"
            className="font-body mt-4 inline-block text-[15px] text-white/60 hover:text-white"
          >
            toniadreal11@gmail.com
          </a>
        </div>
        <div className="font-body flex flex-col gap-2 text-[14px] text-white/50 md:items-center">
          <span className="text-white/30">Menu</span>
          <a href="/" className="hover:text-white">Home</a>
          <a href="/#work" className="hover:text-white">Work</a>
          <a href="/#about" className="hover:text-white">About</a>
        </div>
        <div className="flex md:justify-end">
          <RotatingStamp dark size={100} />
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="font-mono-tech text-[12px] text-white/40">© 2026 TONI</span>
        </div>
      </div>
    </footer>
  );
}
