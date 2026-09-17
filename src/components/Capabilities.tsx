import { Section, SectionTitle } from "./primitives";
import { capabilities } from "../content/site";

export function Capabilities() {
  return (
    <Section id="capabilities">
      <SectionTitle index="07" title="Capabilities" />
      <div className="grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2">
        {capabilities.map((c) => (
          <div key={c.group} className="bg-paper p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {c.group}
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-ink/75">{c.statement}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.tools.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-ink/50"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#experience"
              className="mt-5 inline-block font-mono text-sm text-cobalt hover:underline"
            >
              {c.workLabel}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
