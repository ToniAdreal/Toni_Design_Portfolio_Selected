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
        { file: '3.png', title: 'Campaign Discovery & Creator Matching', caption: 'Campaigns filtered by category, budget tier, deliverables, with AI match badges (>70%).', rationale: 'Streamlining creator sourcing.', tags: ['UI'] },
        { file: '4.png', title: 'Campaign Creation Wizard (Brief)', caption: 'Objectives, audience, deliverables (tweets, videos, AMAs), KPI thresholds.', rationale: 'Standardizing briefs before work begins.', tags: ['UI'] },
        { file: '5.png', title: 'Deterministic Fee Calculator & Escrow Preview', caption: 'Creator Pool $10,000, Base Fee $600, Complexity 1.0x, Loyalty −$30, Oracle $60, Deposit $10,630.', rationale: 'Transparent deterministic pricing.', tags: ['Finance'] },
        { file: '6.png', title: 'KOL Evaluation & Selection Drawer', caption: 'Candidate profiles, CVPI scores, past ROI, minted SPCs.', rationale: 'Data-driven candidate selection.', tags: ['UI'] },
        { file: '7.png', title: 'Creator Profile & Reputation Scorecard', caption: 'Reputation 845 (Tier S), specialization NFTs, 98% completion, 3.2x ROI.', rationale: 'Immutable on-chain creator resume.', tags: ['UI'] },
        { file: '8.png', title: 'Task Workspace & Milestone Tracker', caption: 'Milestones (Draft → Distribution → 30-Day KPI), progress bar, escrow lock.', rationale: 'Transparent work-execution environment.', tags: ['UI'] },
        { file: '9.png', title: 'Deliverable Evidence Submission', caption: 'Content URLs, wallet-signed tracking links, IPFS metadata hashes.', rationale: 'Verifiable work submission.', tags: ['Product'] },
      ],
    },
    {
      id: 'settlement',
      number: '03',
      title: 'Verification & Settlement',
      images: [
        { file: '10.png', title: 'Success Criteria & Evidence Pipeline', caption: '7-stage banner: clear terms → reduced fragmentation → ownership → traceable evidence → safe release → analytics → auditable exceptions.', rationale: 'Visualizing operational clarity and traceability.', tags: ['Process'] },
        { file: '11.png', title: 'Oracle Verification & Metric Indexer', caption: 'Chainlink / zk-SNARK nodes fetching social metrics, wallet connections, on-chain events.', rationale: 'Automated performance verification.', tags: ['Engineering'] },
        { file: '12.png', title: 'SPC NFT Minting Screen', caption: 'On KPI validation, mints an ERC-721 SPC with campaign ID, metrics, timestamp.', rationale: 'Cryptographic proof of work.', tags: ['Web3'] },
        { file: '13.png', title: 'Automated Escrow Release & Settlement', caption: 'Smart contract releases payment per gross-to-net credit rules.', rationale: 'Trustless financial settlement.', tags: ['Web3'] },
        { file: '14.png', title: 'Creator Earnings Dashboard & Ledger', caption: 'Gross earnings, 5% Pro fee, referral credits, gasless withdrawal request.', rationale: 'Financial transparency for creators.', tags: ['Finance'] },
        { file: '15.png', title: 'Multi-KOL Attribution Funnel', caption: 'Click → landing → wallet connect → purchase, with Shapley value attribution.', rationale: 'Advanced growth-attribution engineering.', tags: ['Analytics'] },
      ],
    },
    {
      id: 'governance',
      number: '04',
      title: 'Governance & Design System',
      images: [
        { file: '16.png', title: 'DAO Arbitration Portal & Timeline', caption: 'Reviewing disputes, IPFS evidence, executing 5/9 Safe multi-sig payouts/refunds.', rationale: 'Marketplace dispute governance.', tags: ['Governance'] },
        { file: '17.png', title: 'Admin Governance Terminal', caption: 'Tier fee rates, CVPI weights, oracle pricing, emergency pause switches.', rationale: 'Platform governance administration.', tags: ['Governance'] },
        { file: '18.png', title: 'Immutable Operational Audit Log', caption: 'Records admin overrides, fee changes, escrow releases, deployments.', rationale: 'System auditability and compliance.', tags: ['Governance'] },
        { file: '19.png', title: 'Production Design System Tokens', caption: 'Near-black surfaces (#010A01), cyber-green actions (#00FF00), containers, type scales, 26 MVP asset specs.', rationale: 'Scalable design-system documentation.', tags: ['Design System'] },
      ],
    },
  ],
};
