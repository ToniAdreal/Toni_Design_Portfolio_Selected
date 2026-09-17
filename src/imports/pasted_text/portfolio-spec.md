Build a production-ready responsive portfolio website for Toni Adreal in English. The portfolio is a decision tool for hiring managers, design leaders, engineering leaders, founders, and prospective clients. Do not add emoji. Do not clone ansyn.me or reproduce its exact visual composition, assets, wording, or branding. Create an original dark editorial portfolio that shares a design system with Toni's personal site while using more evidence-driven layouts and quieter motion.

PRIMARY GOAL
Make it easy to identify Toni's strongest work, understand personal ownership, inspect design and systems evidence, and contact Toni. The portfolio should demonstrate product design, design engineering, AI product work, commerce, Web3, and complex operational systems without forcing visitors to read all eight projects.

TECHNICAL FOUNDATION
- Use React and TypeScript.
- Use a framework structure compatible with static generation or server rendering, route-level metadata, optimized images, and code splitting.
- Use Tailwind CSS or well-organized CSS modules plus CSS variables.
- Use Motion for React for component and layout transitions.
- Use CSS animations or the Web Animations API for route curtains and simple mask reveals.
- Lenis is optional on desktop only and must never be required.
- Use Canvas 2D only for the hero evidence field or a small systems visualization. Do not use WebGL by default.
- Animate transform and opacity whenever possible.
- Route-split every case study and keep project content outside the home-page bundle.

PUBLIC IDENTITY
- Preferred public name: Toni Adreal.
- Role: Product Designer and Full-Stack Engineer.
- Portfolio thesis: Evidence becomes a product when decisions survive contact with reality.
- Supporting line: Selected work across product design, design engineering, AI systems, commerce, and complex operational workflows.
- Verified links:
  - Personal site: https://toni.tokenta.space/
  - LinkedIn: https://www.linkedin.com/in/toniadreal/
  - GitHub: https://github.com/ToniAdreal
  - X: https://x.com/toniadreal_lab
- Primary email is not finalized. Store it in one content variable named primaryEmail and add an internal TODO in the content file only.

VISUAL DIRECTION
- Style: dark editorial systems portfolio with technical precision and a restrained experimental edge.
- Canvas: near-black #0B0C0E.
- Reading surface: warm off-white #F4F2EC.
- Signal accent: cobalt #315DFF.
- Optional project accent: muted coral #D95043, only when justified by project content.
- Primary light text: #F5F6F7.
- Secondary text: #A7ABB2.
- Display type: Space Grotesk or Geist Sans.
- Body type: Inter.
- Metadata type: IBM Plex Mono.
- Chinese fallback: Noto Sans SC.
- Twelve-column grid, maximum width 1440 px, responsive gutters from 24 to 48 px.
- Use square or lightly rounded frames, thin rules, large titles, and strong image captions.
- Do not create a dashboard aesthetic. Do not place every section inside cards.
- Project images must be neutral evidence frames. Do not add device mockups unless the device context is necessary to understand the work.

MOTION SYSTEM
- First load: kinetic words resolve into the portfolio thesis over 700 to 900 ms.
- Hero words: QUESTION, EVIDENCE, DECISION, SYSTEM, OUTCOME.
- Use clip-path strip reveals with 70 to 100 ms stagger.
- Featured case-study chapters reveal the image mask as a metadata rule draws over 650 to 800 ms.
- Desktop project-index rows may use a cursor-tracking radial spotlight and a floating preview with 180 to 260 ms lag.
- Keyboard focus uses an inline thumbnail and strong outline. Touch uses inline thumbnails only.
- Quick view uses a FLIP-style expansion over 500 to 650 ms.
- Small metadata labels may use a text-scramble effect for 250 to 320 ms. Project names and body copy must remain stable.
- Case-study route changes use a labeled dark-to-paper curtain over 500 to 650 ms.
- Case-study pages use a subtle scroll progress line and current chapter label. Do not add parallax to body text.
- Before-and-after comparisons must be user-controlled scrubbers, never auto-playing carousels.
- Maximum image hover scale: 1.06. Maximum tilt: 2 degrees.

REDUCED MOTION
Add a site-wide Motion setting with Auto, Reduced, and Full. Auto follows prefers-reduced-motion. Reduced mode removes smooth scrolling, pinned scrubbing, parallax, inertial motion, cursor-following previews, magnetic movement, text scramble, scale, and route curtains. Use immediate state changes or a short opacity transition. All content and relationships must remain clear.

INFORMATION ARCHITECTURE
1. Hero
2. Featured Work
3. Project Index
4. Evidence Archive
5. Working Method
6. Capabilities
7. About and Contact

NAVIGATION
- Desktop: Toni Adreal, Featured, Index, Method, About, Personal Site, Contact.
- Mobile: Toni Adreal, Personal Site, Menu.
- Add Skip to main content.
- Use semantic nav and main landmarks.
- On case-study routes, show Back to work, the current project title, chapter index, and Contact.

HERO
- Visible H1: Evidence becomes a product when decisions survive contact with reality.
- Stable supporting copy and View featured work action must be readable before animation completes.
- Arrange QUESTION, EVIDENCE, DECISION, SYSTEM, and OUTCOME as large editorial words around a quiet Canvas 2D field made from project metadata and artifact terms.
- Include a secondary See how I work action.
- Do not show an unexplained count strip immediately after the hero. Counts belong in the Evidence Archive with definitions.

FEATURED WORK
- Select three or four flagship studies, not eight equal cards.
- Recommended starting set: Tokenta, ALLWEB3, Next Card, and one AI or systems project with the strongest verified evidence. Make this list editable in data.
- Present each featured study as a full-width editorial chapter.
- Alternate image and text emphasis without breaking the shared grid.
- Each chapter must show project name, one-sentence problem, Toni's role, team context, year, project state, one verified outcome or honest status, access state, and View case study action.
- Add one small label showing the strongest evidence stage: Question, Evidence, Decision, System, or Outcome.

PROJECT INDEX
- Include all supporting projects in an editorial list.
- Columns: project, domain, role, year, state, outcome type, access.
- Filters: Product Design, Design Engineering, AI, Web3, Commerce, Research, Public, Restricted.
- Desktop hover: radial spotlight and floating image preview positioned so it never covers the active row's text.
- Keyboard: focus outline and inline thumbnail.
- Touch: inline thumbnail and explicit Quick view button.
- Quick view expands within the list using a FLIP layout transition and shows summary, personal ownership, evidence, outcome, and related case-study action.

EVIDENCE ARCHIVE
- Group visible artifacts into Research, Flows, Interface, Systems, Validation, and Writing.
- Show representative artifacts, not only counts.
- Counts such as documented artifacts and screens may appear as secondary metadata only after their counting rules are defined.
- Support image, diagram, short text, link, and redacted-evidence artifact types.
- Every artifact must have project, type, year, caption, and confidentiality status.

WORKING METHOD
- Five stages: Question, Evidence, Decision, System, Outcome.
- Use a compact horizontal or two-column sequence, not a four-viewport scroll section.
- Explain how AI supports synthesis, edge-case generation, and prototype calibration while human judgment owns conclusions and consequential decisions.
- Link each stage to relevant artifacts or featured studies.

CAPABILITIES
- Product Design.
- Design Engineering.
- AI Product Systems.
- Systems Thinking and Delivery.
- Each capability includes one concise definition, selected tools, and links to related projects.
- Avoid duplicated marketing claims and long tool clouds.

ABOUT AND CONTACT
- Short statement of Toni's combined product and engineering practice.
- Link clearly to the personal site and its writing and publications section.
- Primary action: contact by the approved primary email.
- Secondary links: LinkedIn, GitHub, X, Personal Site.
- Do not use a generic agency slogan.

CASE STUDY TEMPLATE
Build a reusable route template with these chapters:
1. Summary: problem, role, duration, team, state, outcome.
2. Context: user, business, operational, and technical conditions.
3. Evidence: research inputs, analytics, constraints, contradictions.
4. Decision: what changed, why, and which alternatives were rejected.
5. System: flows, information architecture, states, services, and interfaces.
6. Validation: usability checks, accessibility, failure paths, technical tests.
7. Outcome: shipped result, evaluation result, award, publication, or honest current status.
8. Reflection: what Toni would change and what the work taught.
9. Credits: personal ownership, collaborators, tools, and confidentiality.

CASE STUDY READING EXPERIENCE
- Use a sticky chapter index after the summary.
- Use a visible reading progress line.
- Keep body copy between 55 and 75 characters per line.
- Full-bleed images are allowed, but captions and evidence labels remain on the main grid.
- Provide Previous project, Next project, Back to work, Personal site, Writing, and Contact at the end.

ACCESS MODEL AND SECURITY
- Every case study must expose a substantial public abstract before any restricted material.
- Public abstract includes the problem, role, process summary, representative imagery, and nonconfidential outcome.
- For confidential work, use redacted diagrams, synthetic examples, and a clear note explaining what was removed.
- Do not implement a client-side password check.
- Do not ship passwords, secrets, private images, or complete restricted case-study data in JavaScript, source maps, static JSON, or page HTML.
- If restricted review is required, design an interface for server-side authentication, short-lived signed access, or an unlisted review route protected at the server.
- Restricted states include Request access, reason for restriction, expected response time, and a public overview alternative.
- No-index restricted routes and prevent confidential assets from entering sitemaps or social metadata.

RESPONSIVE BEHAVIOR
- 1440 px and above: full editorial grid and floating previews.
- 768 to 1439 px: two-column featured chapters and inline index thumbnails.
- Below 768 px: one-column reading order, no pointer previews, no smooth scrolling, no pinned content.
- Below 480 px: at least 20 px side padding, 44x44 px minimum touch targets, concise headings, and captions directly below images.

PERFORMANCE
- Convert PNG project covers to AVIF and WebP with responsive variants.
- Lazy-load below-the-fold media.
- Include explicit image dimensions.
- Route-split case studies and fetch only the active case-study content.
- Keep private content off the client entirely.
- Cap any canvas DPR at 1.5 desktop and 1.0 mobile.
- Pause animation loops when offscreen or when the document is hidden.
- Use a static first frame for hero motion.
- Target Lighthouse Performance 90 or higher on representative mobile hardware.

ACCESSIBILITY
- WCAG AA contrast.
- Semantic headings, nav, main, article, aside, figure, figcaption, and footer elements.
- Visible cobalt focus rings.
- Keyboard equivalents for every hover and pointer behavior.
- Drawers and dialogs trap focus, close with Escape, announce labels, and restore focus.
- Meaningful diagrams have text equivalents.
- Decorative canvas and image layers are ignored by assistive technology.
- No automatically moving content persists longer than five seconds without a pause or reduced-motion mechanism.

SEO AND SHARING
- Unique route title and description for every case study.
- Canonical URLs.
- Route-specific Open Graph and Twitter images.
- CreativeWork structured data for case studies where appropriate.
- Sitemap and robots policy.
- The home page and public abstracts are indexable; restricted routes are not.

CONTENT DATA MODEL
Create typed objects for siteSettings, identity, navigation, featuredProjects, projects, artifacts, methodStages, capabilities, socialLinks, and caseStudies. Each project supports slug, title, tagline, domain, role, team, year, duration, state, outcome, outcomeType, accessState, evidenceStage, coverImage, publicAbstract, and relatedArtifacts. Add enabled and requiresVerification flags. Never display TODO strings publicly.

CONTENT QUALITY RULES
- Distinguish shipped work, prototypes, competition proposals, research, and concept work.
- Use verified outcomes only. If an outcome is unavailable, state the honest project status.
- Clearly separate Toni's individual ownership from team output.
- Do not imply employment by competition sponsors.
- Do not publish confidential employer or client information.
- The metric label and project card count must agree.

DELIVERY
Generate the responsive portfolio home page, reusable case-study template, one fully populated example case study using safe public content, reusable project-index and evidence-archive components, restricted-content interface states without a client secret, motion controls, and a concise README explaining content editing, route splitting, access control integration, reduced motion, and metadata.
