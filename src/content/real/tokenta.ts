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
          title: 'Ecosystem Architecture Overview',
          caption: 'A high-level visual representation of the asset lifecycle from creation to settlement. This infographic simplifies the complex decentralized infrastructure into digestible flows.',
          rationale: 'Translating complex on-chain mechanics into clear visual metaphors accelerates user comprehension and trust.',
          tags: ['Infographic', 'System Architecture']
        },
        {
          file: 'Tokenta_03.png',
          title: 'Value Proposition Dashboard',
          caption: 'The primary dashboard view highlighting platform statistics, current liquidity, and active verifications. The layout prioritizes macro-level metrics before driving users into specific asset categories.',
          rationale: 'Displaying aggregate platform health and activity reinforces the network effect and encourages user participation.',
          tags: ['Dashboard', 'Data Visualization']
        },
        {
          file: 'Tokenta_04.png',
          title: 'Core Modalities Navigation',
          caption: 'The navigation system specifically tailored for filtering Models, Datasets, and Agents. The UI employs distinct iconography and color coding to differentiate these primary asset classes.',
          rationale: 'Clear delineation of asset types prevents cognitive overload when browsing heterogeneous technical components.',
          tags: ['Navigation', 'Taxonomy']
        },
        {
          file: 'Tokenta_05.png',
          title: 'Trust & Verification Badging',
          caption: 'An overview of the platform\'s trust indicators, showing how verification status is communicated across different components. These badges serve as the fundamental unit of trust on the exchange.',
          rationale: 'Consistent, universally recognizable trust indicators are crucial for reducing friction in high-value asset transactions.',
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
          title: 'Asset Marketplace Grid',
          caption: 'The primary discovery interface featuring dense but scannable asset cards. Each card surfaces critical metadata including performance metrics, verification status, and pricing.',
          rationale: 'Optimizing information density allows professional buyers to evaluate multiple assets simultaneously without losing crucial context.',
          tags: ['Marketplace', 'Card Design']
        },
        {
          file: 'Tokenta_07.png',
          title: 'Advanced Filtering Interface',
          caption: 'A robust sidebar filtration system allowing users to drill down by modality, parameter count, license type, and attestation level. The interface supports complex multi-variable queries.',
          rationale: 'Technical buyers require granular control over their search parameters to find precise fits for their specialized use cases.',
          tags: ['Search', 'Filtering']
        },
        {
          file: 'Tokenta_08.png',
          title: 'Model Detail Page',
          caption: 'The comprehensive view for a specific AI model, featuring performance benchmarks, hardware requirements, and the full verification trail. The layout separates technical specs from commercial terms.',
          rationale: 'Segregating technical evaluation from commercial negotiation streamlines the distinct phases of the buyer journey.',
          tags: ['Detail View', 'Information Architecture']
        },
        {
          file: 'Tokenta_09.png',
          title: 'Dataset Exploration View',
          caption: 'A specialized interface for evaluating datasets, including data schema previews, distribution metrics, and provenance tracking. Visual summaries help users gauge data quality quickly.',
          rationale: 'Evaluating data requires different affordances than evaluating code; providing schema previews builds confidence prior to purchase.',
          tags: ['Data Viz', 'Preview Interface']
        },
        {
          file: 'Tokenta_10.png',
          title: 'Agent Capability Matrix',
          caption: 'The profile view for autonomous agents, highlighting their API integrations, permission scopes, and execution history. The design emphasizes security boundaries and operational limits.',
          rationale: 'When purchasing autonomous capabilities, understanding security perimeters is the user\'s primary concern.',
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
          title: 'Verification Pipeline Overview',
          caption: 'The 5-stage attestation pipeline interface, showing an asset moving through Provenance, Audit, Probe, Quorum, and Listing phases. The stepper provides clear visibility into current status.',
          rationale: 'Transparent progress tracking through complex asynchronous processes reduces user anxiety and support overhead.',
          tags: ['Stepper', 'Process Flow']
        },
        {
          file: 'Tokenta_12.png',
          title: 'Provenance Tracking Interface',
          caption: 'The cryptographic provenance view detailing the origin and chain of custody for a dataset or model. The UI visualizes the cryptographic signatures tying the asset to its creators.',
          rationale: 'Visualizing cryptographic proof transforms abstract blockchain concepts into tangible guarantees of authenticity.',
          tags: ['Provenance', 'Cryptography']
        },
        {
          file: 'Tokenta_13.png',
          title: 'Security Audit & Probing Results',
          caption: 'The detailed report view for automated security probes and manual audits. Vulnerability scores and structural integrity metrics are presented with clear severity indicators.',
          rationale: 'Standardized security reporting formats allow technical teams to rapidly assess risk without parsing heterogeneous audit documents.',
          tags: ['Security', 'Reporting']
        },
        {
          file: 'Tokenta_14.png',
          title: 'Attestor Quorum Dashboard',
          caption: 'The decentralized consensus interface showing the 5/7 attestor quorum in action. The view displays individual attestor nodes, their stakes, and their current voting status.',
          rationale: 'Exposing the mechanics of decentralized consensus reinforces the platform\'s core value proposition of trustless verification.',
          tags: ['Consensus', 'Node Monitoring']
        },
        {
          file: 'Tokenta_15.png',
          title: 'Final Listing Authorization',
          caption: 'The culminating step where verified assets are minted and listed. The interface summarizes all attestations and requires a final cryptographic signature from the asset owner.',
          rationale: 'A clear, definitive finalization step ensures users understand they are committing an immutable record to the ledger.',
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
          title: 'Active Order Room',
          caption: 'The centralized hub for negotiating a specific asset transfer. The split-pane design places communication on one side and structured deal terms on the other.',
          rationale: 'Combining unstructured chat with structured parameter negotiation prevents miscommunication during complex commercial agreements.',
          tags: ['Communication', 'Layout']
        },
        {
          file: 'Tokenta_17.png',
          title: 'Term Sheet Builder',
          caption: 'The interactive interface for defining licensing terms, usage limits, and payment schedules. The component translates legal and technical constraints into smart contract parameters.',
          rationale: 'Abstracting smart contract logic into a familiar term sheet format bridges the gap between legal intent and on-chain execution.',
          tags: ['Forms', 'Smart Contracts']
        },
        {
          file: 'Tokenta_18.png',
          title: 'Counter-Offer Workflow',
          caption: 'The differential view highlighting proposed changes in a counter-offer. The UI uses standard diff paradigms to show modifications to price, scope, or duration clearly.',
          rationale: 'Applying developer-familiar diff patterns to commercial terms minimizes the risk of overlooked modifications during rapid negotiation.',
          tags: ['Diff View', 'Workflow']
        },
        {
          file: 'Tokenta_19.png',
          title: 'Multi-party Signature Flow',
          caption: 'The coordinated signing experience requiring authorization from multiple stakeholders. The interface tracks pending signatures and provides context for the required cryptographic actions.',
          rationale: 'Enterprise transactions often require multi-sig approval; coordinating this asynchronously demands clear status visibility for all parties.',
          tags: ['Multi-sig', 'Coordination']
        },
        {
          file: 'Tokenta_20.png',
          title: 'Agreement Finalization State',
          caption: 'The success state confirming that terms have been locked and the smart contract deployed. The design emphasizes finality and provides immediate next steps for the escrow phase.',
          rationale: 'Strong visual confirmation of agreement finality provides necessary closure before transitioning to the capital-intensive escrow phase.',
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
          title: 'Design Token Architecture',
          caption: 'An overview of the semantic design tokens powering the platform. The visualization demonstrates how core values map to component-specific implementations.',
          rationale: 'A robust token architecture is essential for maintaining consistency across a dense, data-heavy application while supporting future theming.',
          tags: ['Design Tokens', 'Architecture']
        },
        {
          file: 'Tokenta_22.png',
          title: 'Typography & Layout Grids',
          caption: 'The structural foundation of the platform, showing the modular scale and spatial system. The dense 4px grid supports the high information density required by technical users.',
          rationale: 'Rigorous spatial systems are the invisible framework that makes complex, data-dense interfaces feel organized rather than overwhelming.',
          tags: ['Grid', 'Typography']
        },
        {
          file: 'Tokenta_23.png',
          title: 'Component Library: Data Display',
          caption: 'A selection of the core data visualization and display components, including tables, graphs, and metric cards. The components are designed for maximum legibility.',
          rationale: 'Standardizing data display patterns reduces cognitive load, allowing users to focus on the data itself rather than how to read it.',
          tags: ['Components', 'Data Design']
        },
        {
          file: 'Tokenta_24.png',
          title: 'Component Library: Interaction',
          caption: 'The interactive elements of the system, showcasing form controls, state buttons, and complex input mechanisms. The system prioritizes clear affordances and feedback states.',
          rationale: 'Unambiguous interaction patterns are critical in Web3 interfaces where actions often involve financial commitment.',
          tags: ['Interactive', 'Forms']
        },
        {
          file: 'Tokenta_25.png',
          title: 'Dark Mode Implementation',
          caption: 'The platform rendered in its dark theme, utilizing a specific palette designed to reduce eye strain during extended analytical sessions. The contrast ratios are carefully calibrated for data visualization.',
          rationale: 'Technical users often prefer dark modes for deep work; achieving the right contrast ensures data remains legible without harsh glare.',
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
          title: 'Escrow Funding Interface',
          caption: 'The secure portal for depositing funds into the transaction smart contract. The interface details the exact token amounts, network fees, and current blockchain congestion.',
          rationale: 'Absolute clarity around financial commitments and network conditions is necessary to prevent user error during large capital movements.',
          tags: ['Escrow', 'Web3 Finance']
        },
        {
          file: 'Tokenta_27.png',
          title: 'Asset Delivery & Decryption',
          caption: 'The secure handover process where the buyer receives and decrypts the purchased AI asset. The UI guides the user through the cryptographic key exchange.',
          rationale: 'Abstracting the complexity of secure key exchange into a guided flow ensures successful asset delivery regardless of user technical expertise.',
          tags: ['Decryption', 'Asset Delivery']
        },
        {
          file: 'Tokenta_28.png',
          title: 'Settlement Confirmation',
          caption: 'The final settlement screen showing the release of escrowed funds to the seller upon verified delivery. The immutable transaction receipt is prominently displayed.',
          rationale: 'The transaction receipt serves as the ultimate proof of outcome, providing finality and a permanent record for institutional accounting.',
          tags: ['Settlement', 'Receipt']
        },
        {
          file: 'Tokenta_29.png',
          title: 'Dispute Resolution Center',
          caption: 'The interface for handling exceptions or failed deliveries. It surfaces the arbitration parameters defined during negotiation and provides tools for evidence submission.',
          rationale: 'Designing for failure states gracefully is paramount in decentralized systems where traditional customer support channels are replaced by arbitration protocols.',
          tags: ['Arbitration', 'Edge Cases']
        },
        {
          file: 'Tokenta_30.png',
          title: 'Portfolio & Asset Management',
          caption: 'The user\'s post-purchase inventory, showing acquired models, datasets, and agents. The dashboard tracks usage limits, license expirations, and integration status.',
          rationale: 'A comprehensive management interface transforms the platform from a simple marketplace into an ongoing operational tool for AI teams.',
          tags: ['Inventory', 'Management']
        }
      ]
    }
  ]
};
