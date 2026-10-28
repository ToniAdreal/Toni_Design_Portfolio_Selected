import type { Project } from './types';

export const budweiser: Project = {
  slug: 'budweiser',
  index: '05',
  name: 'BrewOps Intelligence',
  tagline: 'AI-Powered Beverage Supply-Chain Intelligence Copilot',
  context: 'Budweiser / Anheuser-Busch InBev',
  accent: '--acc-budweiser',
  summary: 'An independently designed AI-driven supply-chain intelligence platform for Budweiser, transforming complex brewing and logistics data into actionable operational insights. The system integrates a Control Tower, demand forecasting, risk heatmaps, scenario planning, and an AI copilot across six operational domains -- from raw materials to last-mile delivery.',
  metrics: [
    { label: 'Domains', value: '9 Operational Areas' },
    { label: 'Roles Served', value: '6 Enterprise Roles' },
    { label: 'Data Viz Patterns', value: '6 Chart Types' },
    { label: 'Accessibility', value: 'WCAG 2.1 AA' },
  ],
  chapters: [
    {
      id: 'hero-product-vision',
      number: '01',
      title: 'Hero & Product Vision',
      images: [
        {
          file: 'Budweiser_01.png',
          title: 'BrewOps Cover Showcase',
          caption: 'An impactful hero presentation of the BrewOps Intelligence platform. The composition highlights the integration of AI-driven supply chain management with the iconic Budweiser brand identity.',
          rationale: 'Establishes a strong visual anchor that immediately communicates enterprise scale and brand alignment.',
          tags: ['Hero', 'Product Vision']
        },
        {
          file: 'Budweiser_02.png',
          title: 'From Fragmented to Focused',
          caption: 'Before/after: the transformation from fragmented tooling to a focused platform.',
          rationale: 'The whole project in one before/after.',
          tags: ['Dashboard', 'UI']
        },
        {
          file: 'Budweiser_03.png',
          title: 'Project Timeline',
          caption: '2023 blueprint → 2026 reconstruction → demonstrator: the project timeline as printed.',
          rationale: 'A timeline that admits the gap years.',
          tags: ['Vision', 'Strategy']
        },
        {
          file: 'Budweiser_04.png',
          title: 'Beverage Supply Chain Panorama',
          caption: 'Six stages and six risks across the beverage supply chain — no mobile content on this slide.',
          rationale: 'The panorama before any dashboard.',
          tags: ['Mobile', 'Responsive']
        },
        {
          file: 'Budweiser_05.png',
          title: 'Decision Latency Map',
          caption: 'Roughly 24–48 hours of decision lag across silos and role handoffs.',
          rationale: 'Latency named as the enemy.',
          tags: ['System Architecture', 'Strategy']
        }
      ]
    },
    {
      id: 'research-role-framework',
      number: '02',
      title: 'Research & Role Framework',
      images: [
        {
          file: 'Budweiser_06.png',
          title: '2023 Concept Evidence Audit (bw-08)',
          caption: 'The 2023 concept audited against evidence: four strengths, seven gaps.',
          rationale: 'Auditing your own earlier concept is the cheapest research there is.',
          tags: ['Research', 'Personas']
        },
        {
          file: 'Budweiser_07.png',
          title: 'Ownership & Evidence Map',
          caption: 'Ownership across the 2023 team, Toni’s 2023 contribution, and the 2026 solo reconstruction.',
          rationale: 'Credit mapped as carefully as the product.',
          tags: ['Journey Mapping', 'UX']
        },
        {
          file: 'Budweiser_08.png',
          title: 'From Pain Points to Decisions That Move the Chain',
          caption: 'A data-to-decision matrix turning pain points into decisions.',
          rationale: 'Pain points are only useful once they point at decisions.',
          tags: ['Research', 'Logistics']
        },
        {
          file: 'Budweiser_09.png',
          title: 'Opportunity Prioritization',
          caption: 'Scoring table: five candidate areas against five criteria (out of 25). The printed ranking keeps Consumer Insight 4th (17) below Quality Intelligence 5th (18), as printed.',
          rationale: 'Prioritization with its arithmetic — and its quirks — visible.',
          tags: ['Taxonomy', 'Information Architecture']
        },
        {
          file: 'Budweiser_10.png',
          title: 'Role-to-Job Map (bw-13)',
          caption: 'Six hypothesis-based proto-roles mapped to their jobs.',
          rationale: 'Roles labelled as hypotheses until evidence upgrades them.',
          tags: ['Access Control', 'UI']
        }
      ]
    },
    {
      id: 'ia-navigation',
      number: '03',
      title: 'Information Architecture & Navigation',
      images: [
        {
          file: 'Budweiser_11.png',
          title: 'Original Deck Contact Sheet (BW-05)',
          caption: 'The ten slides of the 2023 historical deck, as a contact sheet.',
          rationale: 'The ancestor deck, shown whole.',
          tags: ['Information Architecture', 'Sitemap']
        },
        {
          file: 'Budweiser_12.png',
          title: 'Object Model (bw-20)',
          caption: 'The entity chain: Alert → Scenario → … → Outcome.',
          rationale: 'An object model is a promise about what the system can say.',
          tags: ['Navigation', 'UI']
        },
        {
          file: 'Budweiser_13.png',
          title: 'AI-Enabled Decision Support Framework (2023)',
          caption: 'A 2023 historical artifact: the AI-enabled decision-support framework hub diagram (p.6).',
          rationale: 'Historical concepts kept, labelled with their year.',
          tags: ['Navigation', 'UX']
        },
        {
          file: 'Budweiser_14.png',
          title: 'Supply Chain Insights Chatbot — Early Concept (2023)',
          caption: 'A 2023 historical artifact: the insights chatbot early concept (p.07).',
          rationale: 'An early chatbot concept, preserved as evidence of the path.',
          tags: ['Search', 'Interaction Design']
        },
        {
          file: 'Budweiser_15.png',
          title: 'Research Synthesis',
          caption: 'Research synthesis from seven supporting sources, 2020–2023.',
          rationale: 'Synthesis across years, not just interviews.',
          tags: ['Wayfinding', 'UI']
        }
      ]
    },
    {
      id: 'control-tower-risk',
      number: '04',
      title: 'Control Tower & Risk Dashboards',
      images: [
        {
          file: 'Budweiser_16.png',
          title: 'Global Control Tower Overview',
          caption: 'The central hub for monitoring worldwide brewing operations. Features a unified map interface with live status indicators for facilities and transit routes.',
          rationale: 'Provides executives with a single pane of glass for immediate situational awareness.',
          tags: ['Dashboard', 'Control Tower']
        },
        {
          file: 'Budweiser_17.png',
          title: 'Hypothesis-Based Operational Handoff (bw-15)',
          caption: 'Four lanes by five stages, Scenario B — an explicitly hypothesis-based handoff.',
          rationale: 'A handoff that says what it does not yet know.',
          tags: ['Alerts', 'UI']
        },
        {
          file: 'Budweiser_18.png',
          title: 'Product Principles',
          caption: 'Four product principles. No heatmap appears on this slide.',
          rationale: 'Principles placed where the risk chapter can be judged by them.',
          tags: ['Data Viz', 'Risk']
        },
        {
          file: 'Budweiser_19.png',
          title: 'Feature Scope Map',
          caption: 'Eleven modules in three tiers, plus four out-of-scope items.',
          rationale: 'Out-of-scope listed with the same care as in-scope.',
          tags: ['Drill-down', 'Dashboard']
        },
        {
          file: 'Budweiser_20.png',
          title: 'Information Architecture (bw-19)',
          caption: 'The deck’s real IA: nine sections, 36 child pages.',
          rationale: 'The IA the product actually uses.',
          tags: ['Workflow', 'UX']
        }
      ]
    },
    {
      id: 'demand-supply-scenario',
      number: '05',
      title: 'Demand, Supply & Scenario Planning',
      images: [
        {
          file: 'Budweiser_21.png',
          title: 'From Fragmented Reaction to Accountable Decision Flow',
          caption: 'Before/after case-study slide: fragmented reaction versus accountable decision flow.',
          rationale: 'Accountability as the design goal.',
          tags: ['AI', 'Forecasting']
        },
        {
          file: 'Budweiser_22.png',
          title: 'Design Tokens: Design and Code Alignment',
          caption: 'Design tokens as printed (tokens.theme.ts) — a design-system slide inside the Demand/Supply chapter.',
          rationale: 'Tokens shared between design and code, in one file.',
          tags: ['Data Grid', 'Planning']
        },
        {
          file: 'Budweiser_23.png',
          title: 'Scenario Planning Sandbox',
          caption: 'An interactive modeling interface where users can simulate disruptions (e.g., a supplier strike) and view the projected impact on downstream delivery.',
          rationale: 'Empowers proactive strategic planning rather than reactive crisis management.',
          tags: ['Simulation', 'Interactive']
        },
        {
          file: 'Budweiser_24.png',
          title: 'Wireframe Exploration Wall',
          caption: 'Seventeen low-fidelity wireframes, v1.0, May 2024.',
          rationale: 'Breadth first, in low fidelity.',
          tags: ['Data Viz', 'Scheduling']
        },
        {
          file: 'Budweiser_25.png',
          title: 'Dashboard Wireframe Comparison (bw-23)',
          caption: 'Executive summary versus operational queue wireframes, compared.',
          rationale: 'Two altitudes of the same data, compared side by side.',
          tags: ['Finance', 'Analytics']
        }
      ]
    },
    {
      id: 'logistics-inventory',
      number: '06',
      title: 'Logistics, Inventory & Maintenance',
      images: [
        {
          file: 'Budweiser_26.png',
          title: 'Scenario Builder Wireflow',
          caption: 'Five steps, with the glass constraint in Q3’24. The slide prints two S2 OTIF values (94.7% in its table, 95.6% on its approval card); both are kept as printed.',
          rationale: 'A wireflow that keeps its source inconsistency visible.',
          tags: ['Logistics', 'Map']
        },
        {
          file: 'Budweiser_27.png',
          title: 'Design Decision Log — Budweiser Trade Portal',
          caption: 'A decision log for a different sub-project (Budweiser Trade Portal, May 20, 2025): three rejected patterns and the chosen direction.',
          rationale: 'Rejected patterns recorded with the chosen one.',
          tags: ['Inventory', 'Dashboard']
        },
        {
          file: 'Budweiser_28.png',
          title: 'Visual Foundations',
          caption: 'The visual-foundations design-system board (v1.0, May 2025).',
          rationale: 'Foundations versioned like product.',
          tags: ['IoT', 'Maintenance']
        },
        {
          file: 'Budweiser_29.png',
          title: 'Component Library',
          caption: 'Cards, alerts, filters, data table, and confidence display.',
          rationale: 'The library the hi-fi screens are built from.',
          tags: ['Compliance', 'Monitoring']
        },
        {
          file: 'Budweiser_30.png',
          title: 'Data Visualization System',
          caption: 'Six chart patterns plus accessible colour rules.',
          rationale: 'Charts chosen as a system, with accessibility rules attached.',
          tags: ['Metrics', 'Vendor Management']
        }
      ]
    },
    {
      id: 'quality-insights-copilot',
      number: '07',
      title: 'Quality, Insights & AI Copilot',
      images: [
        {
          file: 'Budweiser_31.png',
          title: 'Control Tower',
          caption: 'The hi-fi Control Tower dashboard (May 10–17, 2024), with 152 at-risk SKUs.',
          rationale: 'The flagship surface, at production fidelity.',
          tags: ['QA', 'Analytics']
        },
        {
          file: 'Budweiser_32.png',
          title: 'BrewOps AI Copilot Interface',
          caption: 'The integrated AI chat interface, overlaid on a complex dataset. The user is asking the copilot to "summarize weekend yield drops in the St. Louis facility."',
          rationale: 'Democratizes complex data access by allowing users to query the system using natural language.',
          tags: ['AI', 'Conversational UI']
        },
        {
          file: 'Budweiser_33.png',
          title: 'Control Tower Explained',
          caption: 'The file-31 dashboard, annotated 1–5.',
          rationale: 'Explaining the flagship surface on the surface itself.',
          tags: ['AI', 'Proactive']
        },
        {
          file: 'Budweiser_34.png',
          title: 'Demand Risk: Elevated CO2 Levels Detected',
          caption: 'Investigation detail EVT-2024-0517-002, with the slide’s own tabs.',
          rationale: 'An investigation page that behaves like a case file.',
          tags: ['Reporting', 'Automation']
        },
        {
          file: 'Budweiser_35.png',
          title: 'Logistics Scenario Comparison',
          caption: 'Baseline, cost-optimised, and service-optimised scenarios compared.',
          rationale: 'Scenarios compared on equal footing.',
          tags: ['Sustainability', 'Dashboard']
        }
      ]
    },
    {
      id: 'data-visualization-system',
      number: '08',
      title: 'Data Visualization System',
      images: [
        {
          file: 'Budweiser_36.png',
          title: 'Recommendation: Optimize Packaging Line 3 Schedule',
          caption: 'Approval detail REC-2024-0517-0892.',
          rationale: 'A recommendation with an ID, an owner, and an approval trail.',
          tags: ['Data Viz', 'Design System']
        },
        {
          file: 'Budweiser_37.png',
          title: 'Predictive Maintenance — Fleet View',
          caption: '126 assets ranked by health.',
          rationale: 'Ranking is the interface: worst first.',
          tags: ['Interaction', 'Micro-interactions']
        },
        {
          file: 'Budweiser_38.png',
          title: 'Asset Detail — Filler 2 (FLR-02)',
          caption: 'Health 82%, predicted failure Jun 4, 2024.',
          rationale: 'One asset, full depth.',
          tags: ['Data Grid', 'UI Component']
        },
        {
          file: 'Budweiser_39.png',
          title: 'Quality Inspection Flow',
          caption: '1,248 items; item ITM-2024-0517-0001 with cap seal damage.',
          rationale: 'Inspection as a flow, not a form.',
          tags: ['KPI', 'Components']
        },
        {
          file: 'Budweiser_40.png',
          title: 'Control Tower with Copilot Panel',
          caption: 'The Control Tower with the BrewOps Copilot panel open (BETA, scoped to Columbus).',
          rationale: 'The copilot inside the surface it advises on.',
          tags: ['Accessibility', 'A11y']
        }
      ]
    },
    {
      id: 'design-system',
      number: '09',
      title: 'Design System & Component Library',
      images: [
        {
          file: 'Budweiser_41.png',
          title: 'BrewOps Copilot State Gallery',
          caption: 'Three guardrail states: insufficient data, conflicting sources, approval required.',
          rationale: 'Guardrails designed as first-class states.',
          tags: ['Design System', 'Tokens']
        },
        {
          file: 'Budweiser_42.png',
          title: 'Outcome Scorecard',
          caption: 'Six of six verified outcomes as of May 17, 2024, as printed. (File 46 prints different test counts; the deck’s internal contradiction is kept as printed.)',
          rationale: 'A scorecard that does not hide the deck’s own contradiction.',
          tags: ['Typography', 'System']
        },
        {
          file: 'Budweiser_43.png',
          title: 'BrewOps Intelligence System Architecture',
          caption: 'The layered platform architecture diagram.',
          rationale: 'Architecture drawn at the level decisions are made.',
          tags: ['UI Components', 'Forms']
        },
        {
          file: 'Budweiser_44.png',
          title: 'Data Flow Sequence',
          caption: 'Eight steps from alert generation to audit and traceability.',
          rationale: 'Every alert traceable back to its source.',
          tags: ['Patterns', 'Overlays']
        },
        {
          file: 'Budweiser_45.png',
          title: 'BrewOps Intelligence in Action (bw-43)',
          caption: 'The Control Tower beside its KpiCard.tsx source.',
          rationale: 'Design and code, shown together.',
          tags: ['Iconography', 'Assets']
        }
      ]
    },
    {
      id: 'technical-results',
      number: '10',
      title: 'Technical Results & Evaluation',
      images: [
        {
          file: 'Budweiser_46.png',
          title: 'Quality Evidence (BW-44)',
          caption: '362 automated tests, axe-core 96, Lighthouse — as printed. (File 42 prints 182/182 tests and full WCAG conformance; the contradiction is the deck’s own, kept as printed.)',
          rationale: 'Quality evidence with its contradiction left visible.',
          tags: ['Performance', 'Engineering']
        },
        {
          file: 'Budweiser_47.png',
          title: 'Usability Test Plan',
          caption: 'A plan — 8–10 participants, 5 tasks, targets — not results.',
          rationale: 'A plan labelled as a plan.',
          tags: ['UX Research', 'Testing']
        },
        {
          file: 'Budweiser_48.png',
          title: 'Findings Priority Matrix',
          caption: 'Expert review: severity by frequency across 10 findings.',
          rationale: 'Findings prioritised, not just listed.',
          tags: ['ROI', 'Business Impact']
        },
        {
          file: 'Budweiser_49.png',
          title: 'Iteration #47: Improve Alert Clarity and Actionability',
          caption: 'Before/after of iteration #47.',
          rationale: 'Iteration numbered and shown, not summarised away.',
          tags: ['Responsive', 'Cross-Platform']
        },
        {
          file: 'Budweiser_50.png',
          title: 'Technical Results',
          caption: 'Measured, observed, and simulated outcome tables, as printed. (The slide prints two P95 baselines, 5.94s and 5.12s; both kept.)',
          rationale: 'Results separated into measured, observed, and simulated.',
          tags: ['Showcase', 'Outcome']
        }
      ]
    }
  ]
};
