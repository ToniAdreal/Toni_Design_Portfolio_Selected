import type { Project } from './types';

export const cyberorigin: Project = {
  slug: 'cyberorigin',
  index: '06',
  name: 'DataQuest',
  tagline: 'Human-Action Data Marketplace for Embodied AI',
  context: 'CyberOrigin / AI Data Infrastructure',
  accent: '--acc-cyberorigin',
  summary: 'A two-sided marketplace connecting human contributors who capture real-world action data with AI researchers who need high-quality training datasets for embodied intelligence. The platform features guided mobile capture with real-time quality feedback, transparent reward tracking, multi-tier role progression, and rigorous review workflows -- bridging the gap between human behavior and machine understanding.',
  overview: 'Designed a two-sided marketplace connecting human contributors who capture real-world action data with AI researchers building embodied intelligence models. The platform manages the full lifecycle from guided mobile capture with real-time quality feedback through multi-tier review workflows, transparent reward tracking, and enterprise research dashboards -- solving the core tension between data quality requirements and contributor experience.',
  metrics: [
    { label: 'User Roles', value: '5 Distinct Personas', type: 'measured' },
    { label: 'Task Types', value: 'Kitchen / Walking / Device', type: 'measured' },
    { label: 'Platform', value: 'iOS + Web Dashboard', type: 'target' },
    { label: 'Quality System', value: 'Real-time Guided Capture', type: 'target' },
  ],
  meta: {
    role: 'Lead Product Designer',
    team: '1 Designer, 2 Engineers, 1 PM',
    duration: '10 weeks',
    ownership: 'Research > UX > UI > Interaction Design > Prototype',
    status: 'Working Prototype',
    tools: ['Figma', 'React Native', 'Claude', 'Cursor'],
  },
  decisions: [
    {
      id: 'co-dec-01',
      question: 'Should data quality feedback be given during or after capture?',
      evidence: 'Early testing showed contributors submitted low-quality data when feedback was post-hoc. They had already invested time and felt frustrated by rejections.',
      alternatives: ['A. Post-capture quality review only', 'B. Real-time hints during capture', 'C. AI auto-correction after capture'],
      decision: 'Real-time guided capture with inline quality hints.',
      why: 'Prevents wasted effort. Contributors self-correct in the moment rather than re-doing entire sessions.',
    },
    {
      id: 'co-dec-02',
      question: 'How should the reviewer workflow handle disagreements between reviewers?',
      evidence: 'Pilot data showed 12% disagreement rate between first-pass reviewers on edge-case captures.',
      alternatives: ['A. Majority vote', 'B. Escalate to senior reviewer', 'C. Auto-reject disputed captures'],
      decision: 'Escalate to senior reviewer with both annotations visible.',
      why: 'Preserves contributor earnings for ambiguous cases. Senior reviewers see full context to make informed decisions.',
    },
  ],
  workflow: [
    { stage: 'Research', artifact: 'Stakeholder interviews + competitor analysis', tool: 'Manual research + Claude synthesis', judgment: 'Mapped 5 distinct user personas across contributor, reviewer, and researcher roles' },
    { stage: 'Architecture', artifact: 'Multi-role information architecture', tool: 'Figma', judgment: 'Separated contributor-facing mobile flows from reviewer/researcher web dashboards' },
    { stage: 'Interaction', artifact: 'State machine for capture workflow', tool: 'Figma + diagramming', judgment: 'Identified 14 distinct capture states including pause, resume, quality-warning, and timeout' },
    { stage: 'Prototype', artifact: 'Mobile capture + web dashboard prototypes', tool: 'React Native + React', judgment: 'Tested guided capture flow with simulated quality scoring' },
    { stage: 'Validation', artifact: 'Usability testing with 3 contributor personas', tool: 'Moderated sessions', judgment: 'Discovered camera permission flow caused 30% early abandonment; redesigned to progressive disclosure' },
  ],
  chapters: [
    {
      id: 'hero-product-overview',
      number: '01',
      title: 'Hero & Product Overview',
      images: [
        {
          file: 'CyberOrigin_01.png',
          title: 'DataQuest Project Hero',
          caption: 'The hero showcase introduces the DataQuest platform as the vital link between human action and machine learning. It highlights the dual nature of the application: a seamless mobile capture experience for contributors and a robust dataset management dashboard for researchers.',
          rationale: 'Establishes the platform\'s core value proposition immediately, blending consumer-friendly mobile UI with enterprise-grade data tools.',
          tags: ['Hero', 'Overview']
        },
        {
          file: 'CyberOrigin_02.png',
          title: 'Implemented Prototype Architecture',
          caption: 'The implemented prototype architecture — a front-end boundary with no back end, as printed.',
          rationale: 'Showing what was actually built, not what was planned.',
          tags: ['Ecosystem', 'Strategy']
        },
        {
          file: 'CyberOrigin_03.png',
          title: 'The Embodied-AI Data Loop',
          caption: 'The embodied-AI data loop at the heart of DataQuest.',
          rationale: 'The loop is the product: capture, review, train, repeat.',
          tags: ['Value Prop', 'Product Strategy']
        },
        {
          file: 'CyberOrigin_04.png',
          title: 'CyberOrigin Ecosystem Diagram',
          caption: 'The CyberOrigin ecosystem diagram — contributors, platform, and researchers in one system.',
          rationale: 'The ecosystem drawn with all three sides present.',
          tags: ['Cross-Platform', 'UI Design']
        },
        {
          file: 'CyberOrigin_05.png',
          title: 'Initial Responsive Web Prototype (V0)',
          caption: 'The initial responsive web prototype — the historical V0 of the product.',
          rationale: 'V0 kept in the deck as evidence of the path taken.',
          tags: ['Data Pipeline', 'AI']
        }
      ]
    },
    {
      id: 'research-user-personas',
      number: '02',
      title: 'Research & User Personas',
      images: [
        {
          file: 'CyberOrigin_06.png',
          title: 'What the First Prototype Resolved and Exposed',
          caption: 'What the first prototype resolved, and what it exposed.',
          rationale: 'A prototype review that keeps the failures in.',
          tags: ['UX Research', 'Demographics']
        },
        {
          file: 'CyberOrigin_07.png',
          title: 'Contributor Journey',
          caption: 'The contributor journey in nine steps; the slide notes its stages are evidence-based hypotheses in the absence of formal user interviews.',
          rationale: 'A journey labelled as hypothesis where the evidence is thin.',
          tags: ['Persona', 'Contributor']
        },
        {
          file: 'CyberOrigin_08.png',
          title: 'Data Lifecycle and Quality Model',
          caption: 'The data lifecycle and the quality model that governs it.',
          rationale: 'Quality modelled alongside the lifecycle it polices.',
          tags: ['Persona', 'Researcher']
        },
        {
          file: 'CyberOrigin_09.png',
          title: 'Low-Fidelity Exploration — Wireframe Wall',
          caption: 'Low-fidelity exploration: the wireframe wall behind the mobile capture experience.',
          rationale: 'Exploration breadth before commitment.',
          tags: ['Persona', 'Reviewer']
        },
        {
          file: 'CyberOrigin_10.png',
          title: 'Mobile Home Screen',
          caption: 'The mobile home screen (phone) for contributors.',
          rationale: 'The contributor’s front door, on the device they actually use.',
          tags: ['Journey Map', 'UX']
        }
      ]
    },
    {
      id: 'information-architecture-task-flows',
      number: '03',
      title: 'Information Architecture & Task Flows',
      images: [
        {
          file: 'CyberOrigin_11.png',
          title: 'Solo Ownership Timeline (2025)',
          caption: 'The solo ownership timeline for 2025 — one designer across the whole product.',
          rationale: 'Ownership timeline as accountability record.',
          tags: ['IA', 'Sitemap']
        },
        {
          file: 'CyberOrigin_12.png',
          title: 'What the Product Must Explain Before Capture',
          caption: 'The trust contract: what the product must explain before a contributor captures anything.',
          rationale: 'Explanation before capture is a quality feature.',
          tags: ['User Flow', 'Discovery']
        },
        {
          file: 'CyberOrigin_13.png',
          title: 'Data Bottleneck Map',
          caption: 'The data bottleneck map — where capture, review, and supply jam.',
          rationale: 'Bottlenecks mapped before they are solved.',
          tags: ['User Flow', 'Capture']
        },
        {
          file: 'CyberOrigin_14.png',
          title: 'Value Exchange',
          caption: 'The value exchange between contributors and researchers.',
          rationale: 'A marketplace diagrammed as an exchange, not a funnel.',
          tags: ['User Flow', 'Review']
        },
        {
          file: 'CyberOrigin_15.png',
          title: 'State Machine: Task Lifecycle',
          caption: 'Technical diagram representing the state transitions of a task from creation to completion, including edge cases like abandonment, expiration, and dispute resolution.',
          rationale: 'Aligns design states with engineering architecture, ensuring robust handling of all possible user scenarios.',
          tags: ['State Machine', 'Logic']
        }
      ]
    },
    {
      id: 'mobile-capture-experience',
      number: '04',
      title: 'Mobile Capture Experience',
      images: [
        {
          file: 'CyberOrigin_16.png',
          title: 'Dashboard & Task Feed',
          caption: 'The primary entry point for mobile contributors, featuring personalized task recommendations, progress towards daily goals, and quick access to active captures. The UI uses card-based layouts for easy scanning.',
          rationale: 'Maximizes engagement by presenting actionable opportunities immediately upon app launch.',
          tags: ['Dashboard', 'Mobile UI']
        },
        {
          file: 'CyberOrigin_17.png',
          title: 'Profile & Wallet (V0, Historical)',
          caption: 'Profile and wallet dashboard from the V0 prototype — kept in the deck as a historical artifact.',
          rationale: 'Historical surfaces labelled as historical.',
          tags: ['Onboarding', 'Preparation']
        },
        {
          file: 'CyberOrigin_18.png',
          title: 'Evidence and Claim Map',
          caption: 'The evidence and claim map tying product claims to their evidence.',
          rationale: 'Claims that cannot point at evidence do not ship.',
          tags: ['AR', 'Camera Interface']
        },
        {
          file: 'CyberOrigin_19.png',
          title: 'Naming and Reward Cleanup',
          caption: 'Naming and reward cleanup — terminology and reward language made consistent.',
          rationale: 'Cleanup as a design task in its own right.',
          tags: ['Video Editing', 'Review']
        },
        {
          file: 'CyberOrigin_20.png',
          title: 'Role and Job Map',
          caption: 'The role and job map across the marketplace’s five roles.',
          rationale: 'Roles defined by their jobs.',
          tags: ['Fintech', 'Gamification']
        }
      ]
    },
    {
      id: 'role-framework-job-maps',
      number: '05',
      title: 'Role Framework & Job Maps',
      images: [
        {
          file: 'CyberOrigin_21.png',
          title: 'Contributor Journey — Detailed',
          caption: 'The detailed contributor journey, with drop-off risks and trust signals marked.',
          rationale: 'The journey annotated with its own failure points.',
          tags: ['Progression', 'System Design']
        },
        {
          file: 'CyberOrigin_22.png',
          title: 'From Broad Browsing to Bounded Task Completion',
          caption: 'Before/after: from broad browsing to bounded task completion.',
          rationale: 'Bounded tasks are the marketplace’s quality lever.',
          tags: ['Job Map', 'Domain Specific']
        },
        {
          file: 'CyberOrigin_23.png',
          title: 'Product Principles',
          caption: 'The product principles governing the DataQuest design.',
          rationale: 'Principles stated where the flows can be judged against them.',
          tags: ['Job Map', 'Motion']
        },
        {
          file: 'CyberOrigin_24.png',
          title: 'Scope Map',
          caption: 'The scope map — what the prototype covers and what it leaves out.',
          rationale: 'Scope drawn as a map, not implied.',
          tags: ['Job Map', 'Interaction']
        },
        {
          file: 'CyberOrigin_25.png',
          title: 'Data Lifecycle — Nine Stages',
          caption: 'The data lifecycle in nine stages, plus the ownership lane.',
          rationale: 'Ownership tracked through every stage.',
          tags: ['Verification', 'Quality Assurance']
        }
      ]
    },
    {
      id: 'reviewer-marketplace-operations',
      number: '06',
      title: 'Reviewer & Marketplace Operations',
      images: [
        {
          file: 'CyberOrigin_26.png',
          title: 'Reviewer Workspace Overview',
          caption: 'The high-density web dashboard designed for QA specialists. Features a split-pane layout with the submitted media on one side and a robust rubric, annotation tools, and metadata on the other.',
          rationale: 'Optimizes for speed and accuracy, allowing reviewers to process high volumes of submissions with minimal cognitive fatigue.',
          tags: ['Dashboard', 'Enterprise']
        },
        {
          file: 'CyberOrigin_27.png',
          title: 'Quality Score Model',
          caption: 'The quality score model used to judge captures.',
          rationale: 'Scoring made explicit so contributors can aim at it.',
          tags: ['Tooling', 'Annotation']
        },
        {
          file: 'CyberOrigin_28.png',
          title: 'Reward Calculation',
          caption: 'The printed reward-calculation example, shown as printed on the slide.',
          rationale: 'The worked example kept exactly as the deck prints it.',
          tags: ['Feedback', 'Workflow']
        },
        {
          file: 'CyberOrigin_29.png',
          title: 'Ledger and Settlement Flow',
          caption: 'The ledger and settlement flow — how contributor earnings are recorded and paid.',
          rationale: 'Money movement drawn with the same care as data movement.',
          tags: ['Analytics', 'Data Viz']
        },
        {
          file: 'CyberOrigin_30.png',
          title: 'Reward Model Options',
          caption: 'Reward model options compared for the marketplace.',
          rationale: 'Options compared before one is chosen.',
          tags: ['Moderation', 'Trust & Safety']
        }
      ]
    },
    {
      id: 'design-system-visual-language',
      number: '07',
      title: 'Design System & Visual Language',
      images: [
        {
          file: 'CyberOrigin_31.png',
          title: 'DataQuest Information Architecture',
          caption: 'The real information architecture: 10 sections and 34+ screens.',
          rationale: 'The IA the product actually shipped with.',
          tags: ['Art Direction', 'Visual Design']
        },
        {
          file: 'CyberOrigin_32.png',
          title: 'DataQuest Task Taxonomy',
          caption: 'The task taxonomy, with a live classifier in the rebuild.',
          rationale: 'Taxonomy as a working tool, not a poster.',
          tags: ['Typography', 'Color']
        },
        {
          file: 'CyberOrigin_33.png',
          title: 'Component Library',
          caption: 'The full component-library board for the DataQuest system.',
          rationale: 'The library at board scale.',
          tags: ['Design System', 'Mobile Components']
        },
        {
          file: 'CyberOrigin_34.png',
          title: 'Conceptual Object Model',
          caption: 'The conceptual object model behind the marketplace.',
          rationale: 'Objects before screens.',
          tags: ['Design System', 'Web Components']
        },
        {
          file: 'CyberOrigin_35.png',
          title: 'Low-Fidelity Exploration Board',
          caption: 'The low-fidelity exploration board — the street-view variant of the file 09 board.',
          rationale: 'A second exploration pass, in a second context.',
          tags: ['Iconography', 'UI States']
        }
      ]
    },
    {
      id: 'technical-architecture-evaluation',
      number: '08',
      title: 'Technical Architecture & Evaluation',
      images: [
        {
          file: 'CyberOrigin_36.png',
          title: 'Task Card Comparison (co-dq-30)',
          caption: 'Task-card A/B/C comparison with the printed recommendation (co-dq-30).',
          rationale: 'Comparison with the recommendation on the record.',
          tags: ['Architecture', 'Tech Stack']
        },
        {
          file: 'CyberOrigin_37.png',
          title: 'Contributor Flow: Capture Task',
          caption: 'The contributor capture-task flow as a wireflow.',
          rationale: 'The core flow, wired end to end.',
          tags: ['Edge Computing', 'Innovation']
        },
        {
          file: 'CyberOrigin_38.png',
          title: 'Decision Log (co-dq-32)',
          caption: 'The decision log (co-dq-32) — decisions and their reasoning, on record.',
          rationale: 'Decisions logged where reviewers can find them.',
          tags: ['Privacy', 'Ethics']
        },
        {
          file: 'CyberOrigin_39.png',
          title: 'Evolution of a Unified System',
          caption: 'The evolution of DataQuest into a unified system.',
          rationale: 'Evolution shown, not just the end state.',
          tags: ['Performance', 'Metrics']
        },
        {
          file: 'CyberOrigin_40.png',
          title: 'Visual Foundations',
          caption: 'Visual foundations: the design-system basis of the deck (violet-to-blue, as printed).',
          rationale: 'Foundations close the deck they opened.',
          tags: ['Roadmap', 'Vision']
        }
      ]
    }
  ]
};
