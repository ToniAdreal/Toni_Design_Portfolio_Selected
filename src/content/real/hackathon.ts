import type { Project } from './types';

/**
 * Hackathon & Engineering Works — added in Interactive V2.
 * Only verified evidence is listed (see AUDIT_AND_PLAN.md):
 * public repos, a live demo, a merged upstream PR, confirmed
 * registrations. PassGate has no public repo and is presented as
 * a concept/workflow only, with no invented links or metrics.
 */
export const hackathon: Project = {
  slug: 'hackathon',
  index: '09',
  name: 'Hackathon & Engineering',
  tagline: 'Verified builds from hackathons and open source',
  context: 'Hackathons / Open Source / Shipped Products',
  accent: '--acc-hackathon',
  summary: 'Engineering work with public evidence: VerifyGate (pre-delivery verification harness for coding agents, live demo), VerifyPay (verifier-gated USDC escrow on Arc, submitted to Arc Microgrants), PassGate (Airwallex Agentic Banking hackathon entry, idea shortlisted — concept only), ChatPack (browser extension, Chrome Web Store v0.6.2 live, ¥12.90 paid tier), and a merged contribution to open-telemetry/opentelemetry-go (PR #9238).',
  metrics: [
    { label: 'VerifyGate', value: 'Live Demo' },
    { label: 'OpenTelemetry', value: 'PR #9238 Merged' },
    { label: 'ChatPack', value: '¥12.90 · CWS v0.6.2' },
    { label: 'VerifyPay', value: 'Arc Microgrants Submitted' },
  ],
  chapters: [
    {
      id: 'verifygate',
      number: '01',
      title: 'VerifyGate — Verification Harness',
      images: [
        {
          file: 'Hackathon_01.svg',
          title: 'VerifyGate Overview',
          caption: 'Pre-delivery verification harness for coding agents — AI proposes, deterministic checks dispose, and every verdict is written to a hash-chained evidence record. Built on NVIDIA Nemotron via Nebius Token Factory.',
          rationale: 'Agent output needs a deterministic gate, not another opinion: the harness runs the checks and chains the evidence.',
          tags: ['Engineering', 'AI Agents'],
        },
        {
          file: 'Hackathon_02.svg',
          title: 'Hash-Chained Evidence Record',
          caption: 'Each check result is hashed together with the previous record hash, so the evidence trail is tamper-evident end to end.',
          rationale: 'If a verdict cannot be audited later, it is not evidence — the chain makes silent edits visible.',
          tags: ['Engineering', 'Evidence'],
        },
      ],
    },
    {
      id: 'verifypay-passgate',
      number: '02',
      title: 'VerifyPay & PassGate — Escrow for Agent Work',
      images: [
        {
          file: 'Hackathon_03.svg',
          title: 'VerifyPay — Verifier-Gated USDC Escrow',
          caption: 'Verifier-gated USDC escrow for AI-agent work on Arc: funds lock, the agent delivers, a verifier gates release. Submitted to Arc Microgrants (500 USDC × 8 grants, deadline 2026-11-01).',
          rationale: 'The same escrow discipline as the Tokenta and ALLWEB3 case studies, applied to agent-delivered work.',
          tags: ['Web3', 'Escrow'],
        },
        {
          file: 'Hackathon_04.svg',
          title: 'PassGate — Agentic Banking Concept',
          caption: 'Airwallex Agentic Banking hackathon entry (HackerEarth) — registration confirmed by email, idea shortlisted. Presented as concept and workflow only: no public repo exists.',
          rationale: 'Honest status over decoration: where there is no public artifact, the workflow itself is the exhibit.',
          tags: ['Concept', 'FinTech'],
        },
      ],
    },
    {
      id: 'chatpack-opentelemetry',
      number: '03',
      title: 'ChatPack & Open Source',
      images: [
        {
          file: 'Hackathon_05.svg',
          title: 'ChatPack — Browser Extension',
          caption: 'Browser extension with a ¥12.90 one-time paid tier via Afdian (auto-delivered activation codes); Chrome Web Store v0.6.2 live; free tier with 5 trials.',
          rationale: 'A shipped, monetised product — the pricing and store status are public and checkable.',
          tags: ['Shipped Product', 'Extension'],
        },
        {
          file: 'Hackathon_06.svg',
          title: 'OpenTelemetry PR #9238 — Merged',
          caption: 'Found and fixed a bug in open-telemetry/opentelemetry-go where recordingSpan.snapshot() reported zero dropped events/links when SpanLimits EventCountLimit/LinkCountLimit were 0. PR #9238 merged by maintainers after two approvals, with a regression test.',
          rationale: 'Upstream open-source evidence: the fix, the test, and the review are all public on GitHub.',
          tags: ['Open Source', 'Go'],
        },
      ],
    },
  ],
};
