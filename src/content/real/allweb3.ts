import type { Project } from './types';

export const allweb3: Project = {
  slug: 'allweb3',
  index: '04',
  name: 'ALLWEB3',
  tagline: 'Three-Sided Web3 Growth & Campaign Marketplace',
  context: 'Programmable Marketplace Infrastructure (Base / Arbitrum)',
  accent: '--acc-allweb3',
  summary:
    'A programmable Web3 growth marketplace connecting Creators (KOLs/UGC), Project campaign managers, and platform governance admins. It replaces opaque agency mediation by anchoring briefs, submissions, performance verification, reputation scoring, and payment release to immutable smart contracts, with a three-layer architecture across Application, Verification (Chainlink + zk-SNARK + TEE), and Settlement layers.',
  metrics: [
    { label: 'Chains', value: 'Base / Arbitrum' },
    { label: 'Features', value: 'F-01 → F-13' },
    { label: 'Reputation scale', value: '0 – 1,000' },
    { label: 'DAO arbitration', value: '5 / 9 Safe' },
  ],
  formulas: [
    { name: 'Escrow Deposit', expr: 'Deposit = Creator Pool + (Adjusted Service Fee − Loyalty Discount) + Total Oracle Fee', note: 'Service fee tiers 10%→4.5%; complexity 0.8x→1.5x; loyalty discount 5%→15%.' },
    { name: 'Creator Settlement', expr: 'Credit = Gross Award − (Gross × Plan Rate) − (Gross × 2% referral)', note: 'Plan rate: 10% Standard, 5% Pro ($49/mo). Gas reconciled only on manual withdrawal.' },
    { name: 'Reputation (CVPI)', expr: 'Score = Σ (Behavior_Type_i × Weight_i × e^{−λΔt})', note: 'Scale 0–1,000. Tier C <400, B 400–599, A 600–799, S 800+. Pro plan +10% match boost.' },
  ],
  chapters: [
    {
      id: 'overview',
      number: '01',
      title: 'Overview & Information Architecture',
      images: [
        { file: '1.png', title: 'Marketplace Multi-Portal Overview', caption: 'CMP-2026-042: Creator, Project, and Admin portals around a central campaign node.', rationale: 'Establishing the 3-portal interconnected marketplace vision.', tags: ['Overview'] },
        { file: '2.png', title: 'Three-Portal IA Map', caption: 'Navigation trees, permission boundaries, and shared state across portals.', rationale: 'Systems-engineering blueprint clarity.', tags: ['IA'] },
      ],
    },
    {
      id: 'portals',
      number: '02',
      title: 'Creator & Project Portals',
      images: [
        { file: '3.png', title: 'Role and Scope Card', caption: 'IMAGE 03 — Role and Scope Card: Solo Product Designer and Full-Stack Builder.', rationale: 'Scope honesty: one person, named roles.', tags: ['UI'] },
        { file: '4.png', title: 'One Platform. Every Role.', caption: 'Creator, Project, and Admin portals plus the public website — one platform, every role, total alignment.', rationale: 'Three portals introduced as one system, not three products.', tags: ['UI'] },
        { file: '5.png', title: 'The Opaque Campaign Workflow', caption: 'The legacy campaign chain as printed: Brief → Agency → Outreach → Content → Screenshots → Spreadsheets → Disputed metrics → Manual payment — every handoff disconnected, with gaps, rework, and dispute risk.', rationale: 'The problem slide: a fragmented process with no single source of truth.', tags: ['Process'] },
        { file: '6.png', title: 'Stakeholder Pain Map', caption: 'Pain map across Creators, Projects, and Platform operators — converging on one problem: no shared source of truth.', rationale: 'The pain map is the marketplace’s requirements document.', tags: ['UI'] },
        { file: '7.png', title: 'Legacy Process vs ALLWEB3', caption: 'Side-by-side as printed: the fragmented legacy process (emails, chats, spreadsheets, unclear agency fees; printed illustrative figure of 20–40% value leakage) against the structured ALLWEB3 flow — structured brief, matching, escrow, verified performance, reputation, automatic settlement (printed illustrative 15–30% efficiency gain).', rationale: 'The comparison that frames the whole product: structured and transparent beats manual and unclear.', tags: ['UI'] },
        { file: '8.png', title: 'The Trust Gap', caption: 'A $100,000 campaign budget (illustrative, as printed) enters on one side; what returns is questioned at five broken links — Attribution, Identity, Evidence, Approval, Settlement — with the results printed as questions (Impressions? 2,500,000 · Engagement? 125,000 · Conversions? 3,200).', rationale: 'Naming the gap the platform exists to close: money moves, proof does not.', tags: ['UI'] },
        { file: '9.png', title: 'Make Marketing Performance Legible', caption: '“Make marketing performance legible before money moves” — the four-pillar loop diagram.', rationale: 'Legibility before liquidity: performance first, payment second.', tags: ['Product'] },
      ],
    },
    {
      id: 'settlement',
      number: '03',
      title: 'Verification & Settlement',
      images: [
        { file: '10.png', title: 'Success Criteria & Evidence Pipeline', caption: '7-stage banner: clear terms → reduced fragmentation → ownership → traceable evidence → safe release → analytics → auditable exceptions.', rationale: 'Visualizing operational clarity and traceability.', tags: ['Process'] },
        { file: '11.png', title: 'Three-Sided Ecosystem', caption: 'The three-sided ecosystem diagram: Creators, Project teams, and Platform operators, with wallets, social platforms, oracle providers, blockchain networks, and payment assets.', rationale: 'The ecosystem drawn with its external dependencies included.', tags: ['Engineering'] },
        { file: '12.png', title: 'Three-Layer Architecture', caption: 'The three-layer architecture: Application, Verification, and Settlement layers — including secure budget custody with release rules.', rationale: 'Layers separate what users do, what gets verified, and what gets paid.', tags: ['Web3'] },
        { file: '13.png', title: 'Verifiable Trust Loop', caption: 'The six-node loop as printed: Identity → Participation → Verified evidence → Reputation → Matching and terms → Settlement — and settlement reinforces identity, so the loop compounds.', rationale: 'Trust drawn as a cycle, not a checkpoint: every settled campaign strengthens the next match.', tags: ['Web3'] },
        { file: '14.png', title: 'Role and Permission Matrix', caption: 'The role and permission matrix — who can do what, across every portal.', rationale: 'Permissions written down are permissions that can be audited.', tags: ['Finance'] },
        { file: '15.png', title: 'Top-Level Information Architecture', caption: 'The deck’s actual IA map: top-level architecture with 13 shared domain objects.', rationale: 'Shared objects are what keep three portals one product.', tags: ['Analytics'] },
      ],
    },
    {
      id: 'governance',
      number: '04',
      title: 'Governance & Design System',
      images: [
        { file: '16.png', title: 'Creator and Project Management', caption: 'The admin console for creator and project management: tables, profiles, and a suspension action.', rationale: 'Governance shown as everyday tooling, not a whitepaper.', tags: ['Governance'] },
        { file: '17.png', title: 'Admin Portal — Meridian Protocol', caption: 'Operational overview of the Admin Portal for Meridian Protocol: health, disputes, settlements, flagged verifications, and audit events.', rationale: 'An operations overview, honestly short of a configuration terminal.', tags: ['Governance'] },
        { file: '18.png', title: 'Dispute Resolution — DR-2025-0518', caption: 'The dispute resolution case DR-2025-0518; the decision stays locked until a rationale exists.', rationale: 'Arbitration designed as a case file, not a chat thread.', tags: ['Governance'] },
        { file: '19.png', title: 'One Campaign Across Three Portals', caption: 'A six-step synchronized campaign timeline (CMP-2025-05-001) following one campaign across all three portals.', rationale: 'One campaign, three viewpoints, one timeline.', tags: ['Design System'] },
      ],
    },
  ],
};
