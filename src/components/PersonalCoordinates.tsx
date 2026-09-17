import { Section, SectionTitle } from "./primitives";
import { personal } from "../content/site";

export function PersonalCoordinates() {
  return (
    <Section id="about">
      <SectionTitle index="08" title="Personal coordinates" />
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="max-w-xl text-lg leading-relaxed">{personal.bio}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-ink/75">
            {personal.collaboration}
          </p>

          {personal.selectedPublications.length > 0 && (
            <div className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink/40">
                Selected publications
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {personal.selectedPublications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}
          {personal.verifiedPatent && (
            <p className="mt-6 font-mono text-sm text-ink/70">
              Patent: {personal.verifiedPatent}
            </p>
          )}
        </div>

        <dl className="space-y-5 font-mono text-sm">
          <div>
            <dt className="text-ink/40">Location</dt>
            <dd className="mt-1">{personal.location}</dd>
          </div>
          <div>
            <dt className="text-ink/40">Time zone</dt>
            <dd className="mt-1">{personal.timezone}</dd>
          </div>
          <div>
            <dt className="text-ink/40">Languages</dt>
            <dd className="mt-1">{personal.languages.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-ink/40">Current interests</dt>
            <dd className="mt-1 flex flex-col gap-1">
              {personal.interests.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
