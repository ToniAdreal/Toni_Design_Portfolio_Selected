Build a production-ready responsive personal website for Toni Adreal in English. This site is the canonical public home for identity, current work, experience, writing, research, public channels, and contact. Do not add emoji. Do not clone ansyn.me or reproduce its exact compositions, assets, wording, or branding. Create an original editorial motion system inspired by experimental typography, generative information fields, restrained color, and meaningful scroll choreography.

PRIMARY GOAL
Within five seconds, a visitor should understand that Toni Adreal is a product designer and full-stack engineer who turns evidence into usable systems across AI products, complex workflows, backend systems, and production software. Motion should increase understanding and memorability without delaying access to content.

TECHNICAL FOUNDATION
- Use React and TypeScript.
- Use a framework structure compatible with static generation or server rendering.
- Use Tailwind CSS or well-organized CSS modules plus CSS variables.
- Use Motion for React for component states and the Web Animations API or CSS animations for simple route curtains and mask reveals.
- Lenis smooth scrolling is optional on desktop only. Native scrolling must remain the fallback. Disable smooth scrolling on mobile and reduced-motion mode.
- Use Canvas 2D for the procedural text field and systems map. Do not use WebGL unless strictly necessary.
- Use transform and opacity for most animations.
- Split components and content data cleanly. Do not hardcode repeated experience, metric, project, publication, or channel data inside layout components.

PUBLIC IDENTITY
- Preferred public name: Toni Adreal.
- Role: Product Designer and Full-Stack Engineer.
- Hero line: I turn evidence into systems people can use.
- Supporting line: Product designer and full-stack engineer working across AI products, complex workflows, backend systems, and production software.
- Verified links to use:
  - Personal website canonical URL: https://toni.tokenta.space/
  - Portfolio: https://toni.portfolio.tokenta.space/
  - LinkedIn: https://www.linkedin.com/in/toniadreal/
  - GitHub: https://github.com/ToniAdreal
  - X: https://x.com/toniadreal_lab
- Primary email is not finalized. Put it in a single content variable named primaryEmail and show a clear TODO in the content file, not in the rendered interface.
- Substack, Medium, WeChat Official Account, and WeChat Channels URLs and QR images are not yet supplied. Create typed content placeholders and hide unavailable cards from production rendering. Never invent URLs, account names, or QR codes.

VISUAL DIRECTION
- Style: editorial systems notebook, precise, personal, contemporary, technically credible.
- Base background: warm off-white #F4F2EC.
- Primary ink: #111214.
- Signal accent: cobalt #315DFF.
- Quiet gray: #C9CDD3.
- Optional status accent: muted coral #D95043, used only when the content requires a status or active node.
- Display type: Space Grotesk or Geist Sans.
- Body type: Inter.
- Metadata type: IBM Plex Mono.
- Chinese fallback: Noto Sans SC.
- Use a twelve-column grid, maximum content width 1440 px, responsive gutters from 24 to 48 px.
- Prefer open layout, thin rules, asymmetric typography, and large negative space. Avoid a page made entirely of rounded cards.
- Retain the current liquid-metal visual identity only as a quiet monochrome contour, masked crop, or occasional material inset. It must support the typography rather than dominate the hero.

MOTION SYSTEM
Create one coherent motion grammar and reuse it across the site.
- First session only: a short labeled page curtain and hero reveal, 650 to 900 ms total. Skip the intro for repeat navigation during the session.
- Hero words use horizontal clip-path strip reveals with 80 to 110 ms stagger. Finish within 850 ms.
- Hero Canvas 2D field uses real vocabulary from Toni's work: evidence, API, state, model, escrow, workflow, prototype, validation, system, interaction, release, research.
- Allow a low-opacity typographic overprint or echo behind the hero.
- A single scanline may run once and stop. Do not create an endless decorative loop.
- Section titles enter with a line-mask rise and rule draw over 550 to 750 ms.
- Use one pinned scrollytelling sequence only, in the Working Method section. Desktop height should be about 180vh, not 400vh.
- Primary buttons may use a subtle magnetic hover, capped at 8 px displacement.
- One short identity phrase may use character-level proximity animation. Body text must never move character by character.
- Experience rows may use a cursor-tracking radial spotlight, 6 px title shift, and desktop-only floating image preview.
- Experience expansion must use a FLIP-style height and position transition over 500 to 650 ms.
- Route changes use a labeled curtain wipe over 500 to 650 ms.
- Maximum image hover scale: 1.06. Maximum tilt: 2 degrees.

REDUCED MOTION
Add a site-wide Motion setting with Auto, Reduced, and Full options. Auto follows prefers-reduced-motion. Reduced mode must remove smooth scrolling, pinned scroll scrubbing, parallax, inertial motion, scale changes, cursor-following previews, scanlines, magnetic displacement, and route curtains. Replace them with immediate state changes or a short opacity transition. All content must remain available and correctly ordered.

INFORMATION ARCHITECTURE
1. Hero
2. Current Chapter
3. Evidence Strip
4. Selected Trajectory
5. Publications and Channels
6. Working Method
7. Capabilities
8. Personal Coordinates
9. Contact

NAVIGATION
- Desktop: Toni Adreal, Now, Experience, Writing, About, Contact, Portfolio.
- Keep the wordmark and Portfolio action visible.
- After the hero, secondary section labels may collapse into a compact floating menu trigger.
- Mobile: wordmark, Portfolio, Menu.
- Menu opens as an off-canvas drawer with a clear close control, focus trap, Escape behavior, and focus restoration.
- Add a visible-on-focus Skip to main content link.
- Use semantic nav and main landmarks and correct current-route and current-section states.

SECTION DETAILS

HERO
- Use a visible H1. Do not hide the true headline for accessibility.
- Place five oversized words in an asymmetric editorial composition: OBSERVE, FRAME, BUILD, VERIFY, LEARN.
- Make one word cobalt and the others black or gray.
- Put the positioning statement and supporting line in stable readable areas that remain visible before animation finishes.
- Primary actions: View selected work and Read latest writing.
- Keep Portfolio visible in navigation.
- At 1280x720 and 390x844, the H1, role, and actions must appear within the first viewport.

CURRENT CHAPTER
- Transition from the hero field into an interactive systems map, not a globe.
- Show current role at Tokenta, UTC+8, location at city or region level, and one concise statement of the current problem space.
- Create four nodes: Product, Design, Engineering, AI.
- Pointer movement can rotate or offset the network slightly. Keyboard focus reveals the same node labels. Reduced mode is static.

EVIDENCE STRIP
- Show four or five verified metrics only.
- Create content variables for recommended candidates: 5+ years hands-on delivery, 15+ OpenAPI specifications, 3 publications, 8 end-to-end projects, 2 global top-ten recognitions.
- Mark these values as requiresVerification in the data model. Do not silently publish unverified metrics.
- Do not publish a patent count until the status is reconciled.

SELECTED TRAJECTORY
- Feature Tokenta, ALLWEB3, CyberOrigin, and SUSTech.
- Collapsed row fields: organization, role, dates, one outcome sentence, and three capability tags.
- Expanded content: responsibilities, constraints, selected deliverables, verified outcomes, and a related portfolio link.
- Place competitions and smaller projects in a compact archive grouped by Research, Product, and Recognition.

PUBLICATIONS AND CHANNELS
- Create a Latest Thinking rail with at most six items across personal writing, research publications, and videos.
- Separate Research Publications from Personal Writing.
- Create channel card components for Substack, Medium, WeChat Official Account, and WeChat Channels.
- Each channel data object supports platform, accountName, url, qrImage, language, editorialPromise, cadence, latestItem, and enabled.
- Hide disabled channel cards without leaving empty layout gaps.
- WeChat cards must support verified QR images and a copyable account identifier once supplied.
- If feeds are available, fetch at build time and cache them. Otherwise render from a local typed content file.

WORKING METHOD
- One pinned desktop sequence with four steps: Observe, Frame, Build, Verify.
- Left side: active step number, title, and concise explanation.
- Right side: one systems diagram that evolves between the four states.
- Mobile: ordinary stacked sections with no pinning.
- Reduced motion: static four-step layout.

CAPABILITIES
- Four groups: Product Design, Full-Stack Systems, AI and Data Products, Delivery and Systems Thinking.
- Each group needs one concise capability sentence, selected tools, and links to related work.
- Avoid long undifferentiated skill-tag clouds.

PERSONAL COORDINATES
- Short direct biography, current location, time zone, languages, collaboration preferences, and current interests.
- Keep private contact details out of the public page.
- Include selected publications and one verified patent entry only after content approval.

CONTACT
- Use a brief transition from the paper field to a near-black footer.
- Primary action: email.
- Secondary links: Portfolio, LinkedIn, GitHub, X, Substack, Medium, WeChat Official Account, WeChat Channels, but render only enabled and verified links.
- Do not use a generic large agency slogan. Use a direct invitation connected to Toni's practice.

RESPONSIVE BEHAVIOR
- 1440 px and above: full twelve-column composition.
- 768 to 1439 px: reduce hero word count to four and cap canvas device-pixel ratio at 1.0 to 1.5.
- Below 768 px: remove cursor-dependent previews, stack content in source order, disable smooth scrolling, and turn the pinned method into four normal sections.
- Below 480 px: at least 20 px side padding, 44x44 px minimum touch targets, and no headline longer than three lines.

PERFORMANCE
- Use AVIF and WebP with responsive width descriptors for liquid-metal and editorial images.
- Lazy-load all noncritical images.
- Include explicit image dimensions.
- Cap canvas DPR at 1.5 desktop and 1.0 on mobile or low-power mode.
- Pause requestAnimationFrame loops when offscreen or when the document is hidden.
- Create a static first frame for canvas scenes.
- Do not load motion code on routes that do not use it.
- Target Lighthouse Performance 90 or higher on representative mobile hardware.

ACCESSIBILITY
- WCAG AA contrast.
- Semantic headings, nav, main, sections, footer, buttons, and links.
- Visible focus rings in cobalt.
- Keyboard equivalents for every hover or pointer interaction.
- Decorative liquid-metal and canvas layers are ignored by assistive technology; meaningful diagrams have text equivalents.
- Dialogs and drawers trap focus, close with Escape, and restore focus.
- No auto-moving content persists longer than five seconds without a global pause or reduced-motion mechanism.

SEO AND SHARING
- Unique title and description.
- Canonical URL.
- Open Graph and Twitter images and descriptions.
- Person structured data.
- Sitemap, robots policy, RSS link when available, and language alternates for English and Chinese content.

CONTENT DATA MODEL
Create typed objects for identity, navigation, metrics, experiences, publications, writingItems, channels, capabilities, socialLinks, and siteSettings. Add requiresVerification and enabled flags where appropriate. Put all unresolved data in the content layer and never display TODO text publicly.

DELIVERY
Generate all pages and reusable components, use realistic content based on this prompt, and keep unresolved facts in clearly named content variables. Include a concise README explaining content editing, motion controls, responsive behavior, and how to add the four publishing channels later.

