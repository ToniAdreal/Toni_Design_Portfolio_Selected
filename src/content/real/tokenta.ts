import type { Project } from './types';

export const tokenta: Project = {
  slug: 'tokenta',
  index: '08',
  name: 'Tokenta',
  tagline: 'Verifiable AI Asset Exchange',
  context: 'Web3 / Decentralized AI Infrastructure',
  accent: '--acc-tokenta',
  summary: 'A decentralized exchange layer for AI assets where every model, dataset, and agent is verified through a multi-stage attestation pipeline, every transfer is secured by smart contract escrow, and every deal is enforceable on-chain. Tokenta combines a marketplace discovery interface, real-time negotiation rooms, deterministic settlement flows, and a rigorous design system built for trust, auditability, and institutional-grade AI commerce.',
  metrics: [
    { label: 'Verification', value: '5-Stage Pipeline' },
    { label: 'Attestors', value: '5/7 Quorum' },
    { label: 'Settlement', value: 'On-chain Escrow' },
    { label: 'Assets', value: 'Models / Datasets / Agents' },
  ],
  chapters: [
    {
      id: 'hero-system-overview',
      number: '01',
      title: 'Hero & System Overview',
      images: [
        {
          file: 'Tokenta_01.png',
          title: 'Platform Landing Experience',
          caption: 'The hero section introduces the core value proposition of verifiable AI commerce. The interface balances high-impact typography with subtle institutional cues to establish immediate credibility.',
          rationale: 'First impressions in Web3 infrastructure require a delicate balance of cutting-edge technology signaling and enterprise-grade reliability.',
          tags: ['Hero Design', 'Brand Architecture']
        },
        {
          file: 'Tokenta_02.png',
          title: 'Solo Ownership',
          caption: 'Solo ownership across ten disciplines — the full Tokenta product carried by one designer, end to end.',
          rationale: 'Establishing individual ownership and range before the product detail begins.',
          tags: ['Infographic', 'System Architecture']
        },
        {
          file: 'Tokenta_03.png',
          title: 'The Fragmented Market',
          caption: 'The fragmented market the platform answers: seven printed artifacts from the pre-platform workflow, including Pricing_Terms_v3.xlsx and Invoice #INV-2025-0412.',
          rationale: 'Grounding the product in the messy artifacts it replaces.',
          tags: ['Dashboard', 'Data Visualization']
        },
        {
          file: 'Tokenta_04.png',
          title: 'Risk Map',
          caption: 'The risk map: five printed risks for a marketplace in AI assets, each with its designed response.',
          rationale: 'Naming the risks early so the trust design can answer them directly.',
          tags: ['Navigation', 'Taxonomy']
        },
        {
          file: 'Tokenta_05.png',
          title: 'The Closed Trust Loop',
          caption: 'The closed trust loop — a five-node cycle in which verification, escrow, and reputation reinforce each other.',
          rationale: 'Showing trust as a system loop rather than a single feature.',
          tags: ['UI Components', 'Trust Design']
        }
      ]
    },
    {
      id: 'marketplace-asset-discovery',
      number: '02',
      title: 'Marketplace & Asset Discovery',
      images: [
        {
          file: 'Tokenta_06.png',
          title: 'Thesis Evolution',
          caption: 'How the product thesis evolved — the position the rest of the case study defends.',
          rationale: 'Making the design argument explicit before showing screens.',
          tags: ['Marketplace', 'Card Design']
        },
        {
          file: 'Tokenta_07.png',
          title: 'Product Principles',
          caption: 'The product principles that governed every Tokenta design decision.',
          rationale: 'Principles as decision tools, not decoration.',
          tags: ['Search', 'Filtering']
        },
        {
          file: 'Tokenta_08.png',
          title: 'Scope Boundary',
          caption: 'The scope boundary: what Tokenta covers, and what it deliberately leaves out.',
          rationale: 'A clear boundary keeps a trust product credible.',
          tags: ['Detail View', 'Information Architecture']
        },
        {
          file: 'Tokenta_09.png',
          title: 'User Roles',
          caption: 'The user roles on the platform — buyers, sellers, and verifiers — and what each one is trusted to do.',
          rationale: 'Role clarity is the foundation of the permission model.',
          tags: ['Data Viz', 'Preview Interface']
        },
        {
          file: 'Tokenta_10.png',
          title: 'Object Model',
          caption: 'The object model: the platform’s core entities and how they relate.',
          rationale: 'A shared object model keeps marketplace, verification, and escrow consistent.',
          tags: ['Security UI', 'Profile Design']
        }
      ]
    },
    {
      id: 'verification-pipeline-attestation',
      number: '03',
      title: 'Verification Pipeline & Attestation',
      images: [
        {
          file: 'Tokenta_11.png',
          title: 'Trust Architecture',
          caption: 'The trust architecture — how provenance, audit, and attestation are layered into the platform.',
          rationale: 'Architecture first: trust is structural, not a badge.',
          tags: ['Stepper', 'Process Flow']
        },
        {
          file: 'Tokenta_12.png',
          title: 'End-to-End Service Blueprint',
          caption: 'The end-to-end service blueprint, from listing an asset to settled payment.',
          rationale: 'Blueprinting the whole service exposes the handoffs where trust breaks.',
          tags: ['Provenance', 'Cryptography']
        },
        {
          file: 'Tokenta_13.png',
          title: 'Route Map',
          caption: 'The route map of the product surface — how the main journeys connect.',
          rationale: 'A route-level view keeps deep product structure navigable.',
          tags: ['Security', 'Reporting']
        },
        {
          file: 'Tokenta_14.png',
          title: 'Navigation Priorities',
          caption: 'Navigation priorities, demonstrated live: header, mobile menu, breadcrumb, and table-of-contents patterns.',
          rationale: 'Priority order in navigation is a trust decision as much as a usability one.',
          tags: ['Consensus', 'Node Monitoring']
        },
        {
          file: 'Tokenta_15.png',
          title: 'Content Template System',
          caption: 'Five reusable page templates — Product, Developer, Institutional, Career, and Legal detail — created breadth without turning the site into one-off pages.',
          rationale: 'Templates scale a content-heavy trust platform without diluting it.',
          tags: ['Transaction', 'Confirmation']
        }
      ]
    },
    {
      id: 'order-room-negotiation',
      number: '04',
      title: 'Order Room & Negotiation',
      images: [
        {
          file: 'Tokenta_16.png',
          title: 'Visual Inspiration',
          caption: 'Five reference panels — institutional terminals, audit logs, code consoles, market-data grids, regulatory documents — tagged density, precision, explicit states, traceability, legibility. References are directional, not copied.',
          rationale: 'The design language borrows the rigor of institutional systems rather than the spectacle of typical crypto marketing.',
          tags: ['Design Language', 'References']
        },
        {
          file: 'Tokenta_17.png',
          title: 'Wireframe Wall',
          caption: 'Six wireframe screens — Dashboard, Marketplace, Asset detail, Order Room, Escrow, Analytics — resolved through hierarchy before final styling, over five design questions: density, navigation, comparison, state legibility, responsive prioritization. (Slide header as printed: 20.)',
          rationale: 'Dense institutional screens were resolved through hierarchy before final styling.',
          tags: ['Wireframes', 'Process']
        },
        {
          file: 'Tokenta_18.png',
          title: 'Brand Foundations',
          caption: 'Brand foundations as printed for the Tokenta identity: palette, type, spacing, and state chips.',
          rationale: 'Identity grounded in the same restraint as the product UI.',
          tags: ['Diff View', 'Workflow']
        },
        {
          file: 'Tokenta_19.png',
          title: 'Data as Decoration',
          caption: 'Before/after: data as decoration versus data as evidence — with the 359-asset marketplace table the claim rests on.',
          rationale: 'A trust platform cannot decorate with the data it asks users to rely on.',
          tags: ['Multi-sig', 'Coordination']
        },
        {
          file: 'Tokenta_20.png',
          title: 'Design Tokens',
          caption: 'Design tokens with live previews — colour, type, spacing, radius, and motion values.',
          rationale: 'Tokens make the system’s restraint repeatable.',
          tags: ['Success State', 'Transition']
        }
      ]
    },
    {
      id: 'design-system-technical-architecture',
      number: '05',
      title: 'Design System & Technical Architecture',
      images: [
        {
          file: 'Tokenta_21.png',
          title: 'Density Study',
          caption: 'A density study: how much information a Tokenta screen can carry before it stops being trustworthy.',
          rationale: 'Density is a deliberate variable in data-heavy trust interfaces.',
          tags: ['Design Tokens', 'Architecture']
        },
        {
          file: 'Tokenta_22.png',
          title: 'Verification: Six Stages',
          caption: 'The six stages of verification an asset passes through before it can be listed.',
          rationale: 'Staging verification makes an opaque process inspectable.',
          tags: ['Grid', 'Typography']
        },
        {
          file: 'Tokenta_23.png',
          title: 'Component Library',
          caption: 'The component library as printed — the shared parts the product screens are assembled from.',
          rationale: 'A library view proves the system, not just the screens.',
          tags: ['Components', 'Data Design']
        },
        {
          file: 'Tokenta_24.png',
          title: 'Responsive Grid',
          caption: 'The responsive grid, with a live breakpoint switcher showing how Tokenta layouts adapt.',
          rationale: 'Trust surfaces must survive every viewport, not just the demo size.',
          tags: ['Interactive', 'Forms']
        },
        {
          file: 'Tokenta_25.png',
          title: 'Homepage Hero',
          caption: 'The homepage hero, with its working terminal and verify interaction.',
          rationale: 'The hero demonstrates the product promise instead of only stating it.',
          tags: ['Theming', 'Accessibility']
        }
      ]
    },
    {
      id: 'escrow-settlement-outcomes',
      number: '06',
      title: 'Escrow, Settlement & Outcomes',
      images: [
        {
          file: 'Tokenta_26.png',
          title: 'Terminal Overview',
          caption: 'The terminal overview: market tabs, chart ranges, order book, and execution log.',
          rationale: 'Power users judge a trust platform by its terminal.',
          tags: ['Escrow', 'Web3 Finance']
        },
        {
          file: 'Tokenta_27.png',
          title: 'Homepage Storyline',
          caption: 'The homepage storyline — the order in which the public site makes its argument.',
          rationale: 'Sequence is persuasion: proof before promise.',
          tags: ['Decryption', 'Asset Delivery']
        },
        {
          file: 'Tokenta_28.png',
          title: 'Marketplace Grid',
          caption: 'The real marketplace grid: 612 assets with working type and capability filters and sorting.',
          rationale: 'Discovery at catalogue scale is where verification metadata earns its place.',
          tags: ['Settlement', 'Receipt']
        },
        {
          file: 'Tokenta_29.png',
          title: 'Buyer & Seller Views',
          caption: 'Buyer and seller views as printed — tabulated asset views for both sides of the market. (The printed tables show real-estate assets, an inconsistency in the source deck, kept as printed.)',
          rationale: 'Two-sided views keep both parties working from the same record.',
          tags: ['Arbitration', 'Edge Cases']
        },
        {
          file: 'Tokenta_30.png',
          title: 'Search Query Builder',
          caption: 'A working search query builder — removable rules and chips with a live results preview.',
          rationale: 'Structured search beats keyword hope for technical assets.',
          tags: ['Inventory', 'Management']
        }
      ]
    }
  ]
};
