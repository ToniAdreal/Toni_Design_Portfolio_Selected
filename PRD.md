# Product Requirements Document (PRD)
## Toni Design Portfolio & Systems Architecture Case Study Website

- **Personal Website Reference:** toni.tokenta.space
- **Design Reference Origin:** Behance — REDBOW Event Agency Web Design
- **Case Study Layout Benchmark:** Dana J. Wright Portfolio (danajwright.com)
- **Document Revision:** 4.0 (Implementation-Ready Specification for Figma Make / React + Tailwind)
- **Status:** AWAITING USER APPROVAL BEFORE IMPLEMENTATION

---

## 0. Critical Pre-Implementation Note: Image Assets

This is the single most important item to resolve before we build.

- The four source folders (`Next_Card...`, `AurionX...`, `DeepVise...`, `AW3`) live on your local Windows drive (`E:\Web3\...`) and are **not accessible** from this build environment.
- The only images currently in the project are the **four REDBOW style-reference images** (in `src/imports/`), which define the visual language — not portfolio content.
- To render the real case-study screens (142 images total), you must **drag-and-drop / upload the image folders into this project**. Once uploaded, each image imports via an ES module binding and renders through `<ImageWithFallback>`.

**Proposed handling (choose one — see Section 8, Open Questions):**
1. **Recommended:** You upload the images; I wire every image into its exact slot per the matrix in Section 5. This yields the true portfolio.
2. **Scaffold-first:** I build the entire site now with labeled placeholder frames (correct aspect ratios, captions, and analysis text already in place), and you swap in real images by uploading them later. Nothing else has to change.

Every image slot in this PRD already has its caption, rationale, and layout defined, so writing the analysis does not depend on the images being present — only the final visual render does.

---

## 1. Executive Summary & Core Objective

Design and build a world-class design portfolio for Toni showcasing four flagship product-design + systems-engineering case studies:

| # | Project | One-liner | Source Context |
|---|---------|-----------|----------------|
| 01 | **Next Card** | Gen Z credit-card growth system for China | Mastercard China Advisors Case Competition 2024 |
| 02 | **AurionX** | AI-native viewing layer for smart TVs | Sony "Start Your Dreams" Innovation Competition |
| 03 | **DeepVise** | Private machine intelligence for predictive maintenance + explainable credit | FinTechathon / FATE Federated Learning |
| 04 | **ALLWEB3 (AW3)** | Three-sided Web3 growth & campaign marketplace | Programmable marketplace infrastructure |

The site fuses the **high-contrast Swiss typography + electric-red accents** of the REDBOW reference with the **analytical, evidence-driven case-study method** of Dana J. Wright. Every image is presented with explicit UX rationale, business context, and technical detail. Motion is **dynamic and Apple-like** — smooth, physical, restrained.

---

## 2. Design System & Motion Architecture

### 2.1 Color Tokens (from REDBOW reference)
| Token | Value | Use |
|-------|-------|-----|
| `--bg-canvas` | `#FFFFFF` | Primary light canvas (REDBOW is predominantly white) |
| `--bg-onyx` | `#0A0A0B` | Dark case-study reading surface |
| `--surface` | `#F7F7F8` | Cards, section fills |
| `--accent-red` | `#FF1E27` | Radial glow, active nodes, CTAs, timeline markers |
| `--text-primary` | `#0A0A0B` | Headlines/body on light |
| `--text-secondary` | `#8E8E93` | Captions, labels |
| `--rule` | `#E5E5EA` | Hairline grid rules |
| `--mono-tag` | `#0A0A0B` on `#F0F0F2` | Monospaced technical tags |

Per-project accent (used sparingly inside each case study): Next Card = warm neon orange; AurionX = electric cyan; DeepVise = industrial blue; AW3 = cyber green (`#00FF00`). All defined once as CSS variables in `theme.css`.

### 2.2 Typography
- **Display / headers:** Swiss grotesk (Inter / Space Grotesk), tight tracking (`-0.03em`), line-height ~1.05.
- **Body / rationale:** Inter, line-height 1.6, optimized for long reading.
- **Technical labels / formulas / IDs:** JetBrains Mono / Space Mono.
- Font imports go **only** in `src/styles/fonts.css`.
- We will **not** override Tailwind font-size/weight/line-height utilities unless you ask; type scale lives in `theme.css`.

### 2.3 Signature UI Components (REDBOW DNA)
1. **Red-noise hero** — full-bleed radial red glow bleeding from top, subtle grain, exactly as in the reference frames.
2. **Rotating stamp widget** — circular text badge `DESIGN PORTFOLIO • TONI • 2026` that rotates with scroll velocity (the `R` bordered mark in the reference).
3. **Arc selector** — semicircular curve with numbered nodes (01–04) to jump between projects/chapters (matches the "Our Partners" arc in `download-2.jpg`).
4. **Split-reader case layout** — sticky left outline / TOC + right scrolling content stream (Dana J. Wright pattern).
5. **High-DPI lightbox** — pan/zoom modal for inspecting screens at native resolution, keyboard navigation.
6. **Magnetic CTAs** — buttons that pull toward the cursor with an expanding red highlight.

### 2.4 Motion (Apple-like, via `motion/react`)
- Scroll-driven parallax on device mockups + background grid.
- Sub-degree 3D perspective tilt on frames responding to cursor.
- Staggered fade-up reveals, cubic-bezier `(0.16, 1, 0.3, 1)`.
- Shared-element transition when opening a project from the grid into its case page.
- All motion respects `prefers-reduced-motion`.

---

## 3. Global Architecture & Navigation

Routing via `react-router` (already installed).

```
/                         Home
/portfolio/next-card      Next Card case study
/portfolio/aurionx        AurionX case study
/portfolio/deepvise       DeepVise case study
/portfolio/allweb3        ALLWEB3 case study
/about                    About & capabilities (optional, phase 2)
```

**Home layout (top → bottom):**
1. Red-noise hero: oversized display headline, rotating stamp, top nav (Home / Work / About / Contact), metric counters.
2. "Make it memorable"-style statement band (mirrors reference).
3. Featured projects matrix — 4 interactive cards with hover preview, tech badges, executive summary, per-project accent.
4. Arc selector — semicircular node navigator to jump into any case study.
5. Capabilities grid — Product Strategy / Systems Architecture / UX-UI / Full-stack.
6. Footer — contact, links, back-to-top with stamp.

**Case study page template (shared component `CaseStudyLayout`):**
- Sticky left: project title, chapter TOC (scroll-spy), progress indicator, "back to work".
- Right stream: chapter sections, each pairing full-bleed asset(s) with an analytical sidebar (Context → Insight → Decision), plus mono-tagged metrics.
- Lightbox on any image click.
- Prev/Next project footer nav.

---

## 4. Case Study Narrative Structure (Dana J. Wright model)

Each project renders as ordered chapters. Every image slot = `{ image, title, caption, rationale, tags[] }`. Chapters and per-image analysis are fully specified in Section 5.

---

## 5. Per-Project Image Matrix & Layout

> The full image-by-image breakdown (captions + rationale for all 142 images) is already authored and stored in the project transcript at `src/imports/pasted_text/prd-update-request.md` (Sections 4.1–4.4). To keep this PRD reviewable, the structure is summarized below; the detailed per-image copy will be transcribed verbatim into the content data files during implementation.

### 5.1 Next Card — 50 images (01–51, no 39)
Business context: Mastercard China 2024, strategic pivot from affluent to **Gen Z** (born 1996–2010), 300K/6-month acquisition target, ¥45 CAC, Pearl River Delta (Shenzhen & Guangzhou).
- **Ch.1 Executive Direction & Market Sizing** (01–05)
- **Ch.2 Research Synthesis & Strategy** (06–12)
- **Ch.3 Product Architecture & Card Proposition** (13–22)
- **Ch.4 Frictionless Onboarding & KYC** (23–30)
- **Ch.5 Core App Features & Interaction** (31–38)
- **Ch.6 Marketing Campaign & System Specs** (40–51)

### 5.2 AurionX — 41 images (01–41)
Business context: Sony "Start Your Dreams", Topic 1 "Big Screen for Young Gen's Lifestyle"; 100-pt / 5×20 evaluation. Three pillars: Scene Recall, 5-Minute Intelligent Cut, Global Voice Dubbing.
- **Hero & Overview** (01–05)
- **Problem Space** (06–08)
- **Research & Synthesis** (09–11)
- **Principles, Scope, Architecture, IA** (12–16)
- **Design System** (17–18)
- **Scene Recall** (19–24)
- **5-Minute Cut** (25–30)
- **Global Voice Dubbing** (31–34)
- **System, Evidence, Testing, Outcome, Reflection** (35–41)

### 5.3 DeepVise — 32 images (01–32)
Business context: FinTechathon, FATE federated learning; dual-port (Enterprise + Lender), WNSES health index, FedMA aggregation, ABS securitization. Formulas (WNSES, FedMA) rendered in JetBrains Mono math blocks.
- **Platform Overview & Macro Context** (01–06)
- **Dual Pain-Point Analysis** (07–09)
- **System & FATE Architecture** (10–12)
- **Dual-Port Product UI** (13–17)
- **Equipment Health Science & Math** (18–23)
- **Diagnostics & Federated Training** (24–30)
- **Governance, Privacy & ABS Blueprint** (31–32)

### 5.4 ALLWEB3 (AW3) — 19 images (1–19)
Business context: three-sided marketplace (Creators / Projects / Admin) on Base/Arbitrum; deterministic fee calculator, CVPI reputation index, SPC NFT minting, 5/9 Safe{Wallet} DAO arbitration. Fee/reputation formulas rendered as mono blocks.
- **Overview & IA** (1–2)
- **Creator + Project Portals** (3–9)
- **Verification & Settlement** (10–15)
- **Governance & Design System** (16–19)

*(Full verbatim per-image captions/rationale from transcript Sections 4.1–4.4 will populate `src/app/content/*.ts`.)*

---

## 6. Technical Implementation Plan

- **Stack:** React 18 + Vite + Tailwind v4 (existing project); `react-router` for routing; `motion/react` for animation; shadcn/ui components already present for primitives.
- **Content model:** one typed data file per project under `src/app/content/` (`nextCard.ts`, `aurionx.ts`, `deepvise.ts`, `allweb3.ts`), each exporting chapters → image slots with caption/rationale/tags.
- **Components under `src/app/components/`:**
  - `Hero.tsx`, `RotatingStamp.tsx`, `ArcSelector.tsx`, `ProjectGrid.tsx`, `ProjectCard.tsx`
  - `CaseStudyLayout.tsx`, `ChapterSection.tsx`, `AnalysisSidebar.tsx`, `MetricRow.tsx`, `FormulaBlock.tsx`
  - `Lightbox.tsx`, `MagneticButton.tsx`, `SiteNav.tsx`, `Footer.tsx`
- **Images:** ES-module imports rendered via `<ImageWithFallback>`; `object-cover` for device/hero, `object-contain` for diagrams/logos; lazy-loaded; native-res source retained for lightbox.
- **Responsive:** 1920+, 1440/1280, 768, 375/414.
- **Accessibility:** semantic landmarks, alt text per image, keyboard-navigable lightbox + arc selector, reduced-motion support.

---

## 7. Build Phases (post-approval)

1. **Foundation** — tokens in `theme.css`, fonts, routing shell, nav + footer.
2. **Home** — hero, stamp, project grid, arc selector, capabilities.
3. **Case template** — `CaseStudyLayout` + chapter/sidebar/lightbox components.
4. **Content** — transcribe all 142 slots into content files.
5. **Wire images** — real uploads or placeholder frames.
6. **Motion pass** — parallax, tilt, magnetic, reveals, shared-element transitions.
7. **QA** — responsive, reduced-motion, keyboard, cross-project nav.

---

## 8. Open Questions for You (please confirm)

1. **Images:** Option 1 (you upload real images now) or Option 2 (scaffold with placeholders, swap later)? See Section 0.
2. **Theme default:** Home in **light** (REDBOW-faithful) with case studies in **dark** reading mode — is that the intent, or all-light / all-dark?
3. **Scope of v1:** All four case studies fully built, or start with **one flagship** (e.g., Next Card) end-to-end to validate the template, then replicate?
4. **About / Contact pages:** in v1 or later?
5. **Copy:** use the transcribed per-image analysis verbatim, or would you like it tightened/edited for tone?

Once you approve (and answer the above), I will begin implementation immediately per Section 7.
