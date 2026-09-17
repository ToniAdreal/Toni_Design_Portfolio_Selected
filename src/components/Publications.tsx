import { Section, SectionTitle } from "./primitives";
import { channels, writingItems } from "../content/site";

export function Publications() {
  const research = writingItems.filter((w) => w.kind === "Research Publication");
  const personal = writingItems.filter((w) => w.kind !== "Research Publication");
  // Hide disabled channel cards without leaving empty layout gaps.
  const activeChannels = channels.filter((c) => c.enabled);

  return (
    <Section id="writing">
      <SectionTitle index="05" title="Publications & channels" />

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink/40">
            Personal writing & video
          </h3>
          <ul className="mt-5">
            {personal.map((w) => (
              <li key={w.title} className="border-b border-ink/12 py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-lg font-medium leading-snug">
                    {w.title}
                  </p>
                  <span className="shrink-0 font-mono text-xs text-cobalt">
                    {w.kind === "Video" ? "Video" : "Essay"}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-ink/45">{w.meta}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink/40">
            Research publications
          </h3>
          <ul className="mt-5">
            {research.map((w) => (
              <li key={w.title} className="border-b border-ink/12 py-4">
                <p className="font-display text-lg font-medium leading-snug">
                  {w.title}
                </p>
                <p className="mt-1 font-mono text-xs text-ink/45">{w.meta}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {activeChannels.length > 0 && (
        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink/40">
            Channels
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeChannels.map((c) => (
              <div key={c.platform} className="border border-ink/15 p-5">
                <p className="font-display text-base font-semibold">{c.platform}</p>
                <p className="mt-1 font-mono text-xs text-ink/45">
                  {c.accountName} · {c.language}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {c.editorialPromise}
                </p>
                <p className="mt-3 font-mono text-xs text-ink/40">{c.cadence}</p>
                {c.qrImage && (
                  <img
                    src={c.qrImage}
                    width={96}
                    height={96}
                    loading="lazy"
                    alt={`${c.platform} QR code`}
                    className="mt-4 bg-quiet/40"
                  />
                )}
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block font-mono text-xs text-cobalt hover:underline"
                  >
                    Follow →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
