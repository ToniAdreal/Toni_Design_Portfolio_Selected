import { emailConfirmed, identity, socialLinks } from "../content/site";

export function Contact() {
  // Render only enabled and verified links.
  const links = socialLinks.filter((l) => l.enabled && l.url);

  return (
    <footer id="contact" className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12">
        <p className="font-mono text-sm text-cobalt">Contact</p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Have evidence that needs to become a system? Let&apos;s look at it together.
        </h2>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          {emailConfirmed ? (
            <a
              href={`mailto:${identity.primaryEmail}`}
              className="rounded-full bg-paper px-7 py-3.5 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
          ) : (
            <a
              href={identity.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-paper px-7 py-3.5 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5"
            >
              View portfolio
            </a>
          )}
        </div>

        <nav
          aria-label="Social and channels"
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-8"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-paper/60 transition-colors hover:text-paper"
            >
              {l.label} ↗
            </a>
          ))}
        </nav>

        <div className="mt-16 flex flex-col justify-between gap-3 font-mono text-xs text-paper/40 sm:flex-row">
          <span>{identity.name} · {identity.role}</span>
          <span>
            {identity.canonicalUrl.replace("https://", "").replace(/\/$/, "")}
          </span>
        </div>
      </div>
    </footer>
  );
}
