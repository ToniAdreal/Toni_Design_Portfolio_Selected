# Toni Adreal — Personal Website

An editorial "systems notebook" personal site: warm paper ground, cobalt signal
accent, oversized asymmetric typography, and a restrained scroll-driven motion
grammar. Built with React 19, Vite, Tailwind CSS v4, and Motion for React.

## Editing content

All facts live in **`src/content/site.ts`** — never inside layout components.
Edit identity, metrics, experiences, writing, channels, capabilities, and social
links there. Two conventions matter:

- **`requiresVerification`** on metrics — unverified values are gated by the
  `showUnverifiedMetrics` flag so nothing is silently published.
- **`enabled`** on channels and social links — disabled entries are filtered out
  of rendering and leave no empty layout gaps. Never invent URLs or QR codes.
- **`primaryEmail` / `emailConfirmed`** — the email is a placeholder (see the
  `TODO` comment). While `emailConfirmed` is `false` the contact CTA points to
  the portfolio instead of a `mailto:`. Set `emailConfirmed = true` once final.

## Adding the four publishing channels later

Substack, Medium, WeChat Official Account, and WeChat Channels are pre-defined in
the `channels` array with `enabled: false`. To publish one:

1. Fill in `accountName`, `url`, `latestItem`, and — for WeChat — a verified
   `qrImage` path (place the image under `public/`).
2. Set `enabled: true`.
3. If it has a public profile URL, also flip the matching entry in `socialLinks`.

The card and footer link appear automatically; no layout changes needed.

## Motion controls

A site-wide toggle (Auto / Reduced / Full) lives in the nav and persists to
`localStorage`. **Auto** follows `prefers-reduced-motion`. **Reduced** removes
the hero canvas animation, curtain, scroll-driven method pinning, spotlights,
magnetic hover, and swaps transitions for immediate/opacity changes — all content
stays available and in source order. The first-session intro curtain shows once
per browser session (`sessionStorage`).

## Responsive behavior

- **≥1440px** — full composition, five hero words.
- **768–1439px** — canvas DPR capped at 1.5.
- **<768px** — four hero words, cursor previews removed, the Working Method
  becomes four stacked sections (no pinning), canvas DPR capped at 1.0.

## Structure

- `src/content/site.ts` — typed content data layer.
- `src/motion/MotionContext.tsx` — motion-setting provider + resolved `reduced`.
- `src/components/*` — one file per section plus shared `primitives.tsx`.
- `src/index.css` — fonts, design tokens, global craft.

## Portfolio site

A second, dark-editorial site shares this design system and lives under routes:

- `/` — personal site (this page).
- `/portfolio` — portfolio home (Hero, Featured Work, Project Index, Evidence
  Archive, Working Method, Capabilities, About & Contact).
- `/portfolio/work/:slug` — reusable case-study route. **Code-split** via
  `React.lazy` in `src/routes.tsx`, so case-study content stays out of the home
  bundle and only the active study loads.

### Editing portfolio content

All portfolio facts live in **`src/content/portfolio.ts`**: `projects`,
`featuredSlugs` (the editable flagship set), `artifacts`, `methodStages`,
`capabilities`, `portfolioSocial`, and `caseStudies` (keyed by slug). Each
project carries `state` (Shipped / Prototype / Competition proposal / Research /
Concept), `accessState`, `evidenceStage`, `outcomeType`, and `enabled` /
`requiresVerification` flags. Verified outcomes only; otherwise state honest
status. `primaryEmail` has a `TODO` and stays a non-`mailto` CTA until
`emailConfirmed` is `true`.

### Access control (no client secrets)

Restricted projects (`accessState: "Restricted"`) never ship confidential data
to the client. The case-study route renders only the public abstract plus a
**Request access** interface — there is **no client-side password check**.
Restricted routes emit `noindex, nofollow` and are kept out of the sitemap. To
enable real restricted review, wire the "Request a review link" action to
server-side authentication or a short-lived signed URL; do not embed secrets,
private images, or full restricted case data in JS, JSON, or HTML.

### Metadata

Each route sets its own `document.title` / description; the case study also sets
`robots`. For production SSG/SSR, promote these to route-level metadata.

## Develop

The Vite dev server runs automatically inside Figma Make. Locally: `pnpm dev`.
Routing uses `react-router-dom` (Data mode via `createBrowserRouter`).
