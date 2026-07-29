import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export function SiteNav({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const base = dark ? 'text-white' : 'text-[var(--toni-text)]';
  const links = [
    { to: '/', label: 'Home' },
    { to: '/#work', label: 'Work' },
    { to: '/#about', label: 'About' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? dark
            ? 'bg-black/60 backdrop-blur-xl'
            : 'bg-white/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className={`font-display text-[17px] font-semibold tracking-tight ${base}`}>
          Toni<span style={{ color: 'var(--toni-red)' }}>.</span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body hidden text-[14px] tracking-tight opacity-70 transition-opacity hover:opacity-100 sm:inline ${base} ${
                pathname === l.to ? 'opacity-100' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/toniadreal/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display rounded-full bg-[var(--toni-red)] px-4 py-2 text-[13px] font-medium text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
