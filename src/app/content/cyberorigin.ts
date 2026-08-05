import type { Project } from './types';

export const cyberorigin: Project = {
  slug: 'cyberorigin',
  index: '06',
  name: 'DataQuest',
  tagline: 'Human-Action Data Marketplace for Embodied AI',
  context: 'CyberOrigin / AI Data Infrastructure',
  accent: '--acc-cyberorigin',
  summary: 'A two-sided marketplace connecting human contributors who capture real-world action data with AI researchers who need high-quality training datasets for embodied intelligence. The platform features guided mobile capture with real-time quality feedback, transparent reward tracking, multi-tier role progression, and rigorous review workflows -- bridging the gap between human behavior and machine understanding.',
  metrics: [
    { label: 'User Roles', value: '5 Distinct Personas' },
    { label: 'Task Types', value: 'Kitchen / Walking / Device' },
    { label: 'Platform', value: 'iOS + Web Dashboard' },
    { label: 'Quality System', value: 'Real-time Guided Capture' },
  ],
  chapters: [
    {
      title: 'Hero & Product Overview',
      slots: [
        {
          file: 'CyberOrigin_01.png',
          title: 'DataQuest Project Hero',
          caption: 'The hero showcase introduces the DataQuest platform as the vital link between human action and machine learning. It highlights the dual nature of the application: a seamless mobile capture experience for contributors and a robust dataset management dashboard for researchers.',
          rationale: 'Establishes the platform\'s core value proposition immediately, blending consumer-friendly mobile UI with enterprise-grade data tools.',
          tags: ['Hero', 'Overview']
        },
        {
          file: 'CyberOrigin_02.png',
          title: 'Platform Ecosystem Map',
          caption: 'A high-level diagram illustrating the data lifecycle from human contributor capture to reviewer validation, and finally to researcher consumption. It visualizes the flow of tasks, data, and rewards across the two-sided marketplace.',
          rationale: 'Provides mental scaffolding for understanding the complex multi-stakeholder ecosystem before diving into specific features.',
          tags: ['Ecosystem', 'Strategy']
        },
        {
          file: 'CyberOrigin_03.png',
          title: 'Core Value Propositions',
          caption: 'Visual breakdown of the three primary pillars: High-Fidelity Capture, Scalable QA, and Fair Compensation. Each pillar is supported by key interface snippets that demonstrate the platform\'s capability in these areas.',
          rationale: 'Translates abstract platform benefits into concrete product features that stakeholders can easily digest.',
          tags: ['Value Prop', 'Product Strategy']
        },
        {
          file: 'CyberOrigin_04.png',
          title: 'Cross-Platform Experience',
          caption: 'Showcases the unified design language spanning the native iOS application for mobile contributors and the responsive web application for desktop-bound reviewers and researchers. Ensures a cohesive brand presence across all touchpoints.',
          rationale: 'Demonstrates versatility in designing for distinct contexts of use while maintaining brand and systemic consistency.',
          tags: ['Cross-Platform', 'UI Design']
        },
        {
          file: 'CyberOrigin_05.png',
          title: 'The AI Training Pipeline',
          caption: 'Explains how the collected raw action data is processed, annotated, and formatted for embodied AI training. Highlights the transformation from chaotic human environments to structured, machine-readable datasets.',
          rationale: 'Connects the UX of data collection to the ultimate technical goal of advancing AI models.',
          tags: ['Data Pipeline', 'AI']
        }
      ]
    },
    {
      title: 'Research & User Personas',
      slots: [
        {
          file: 'CyberOrigin_06.png',
          title: 'User Demographics & Behaviors',
          caption: 'Summary of generative research findings detailing the motivations, technical literacy, and environmental constraints of our target contributor pool. The data highlights a need for low-friction, highly guided interactions.',
          rationale: 'Roots design decisions in empirical evidence, ensuring the interface serves actual user needs rather than assumptions.',
          tags: ['UX Research', 'Demographics']
        },
        {
          file: 'CyberOrigin_07.png',
          title: 'Persona: The Gig Contributor',
          caption: 'Detailed profile of "Alex," a gig worker motivated by flexible income. Focuses on their need for quick onboarding, clear task instructions, and transparent payout mechanisms to build trust in the platform.',
          rationale: 'Humanizes quantitative data to create empathy and guide feature prioritization for the supply side of the marketplace.',
          tags: ['Persona', 'Contributor']
        },
        {
          file: 'CyberOrigin_08.png',
          title: 'Persona: The AI Researcher',
          caption: 'Profile of "Dr. Chen," an ML scientist requiring diverse, edge-case rich datasets for robotics. Highlights their pain points with current data quality and the need for granular filtering and export capabilities.',
          rationale: 'Ensures the demand side of the marketplace is equipped with the necessary tools to derive value from the collected data.',
          tags: ['Persona', 'Researcher']
        },
        {
          file: 'CyberOrigin_09.png',
          title: 'Persona: The QA Specialist',
          caption: 'Insights into the reviewer persona who bridges the gap between contributor and researcher. Details their workflow needs for high-throughput evaluation, anomaly detection, and providing constructive feedback.',
          rationale: 'Highlights the critical role of human-in-the-loop validation for maintaining dataset integrity.',
          tags: ['Persona', 'Reviewer']
        },
        {
          file: 'CyberOrigin_10.png',
          title: 'Journey Mapping: First Capture',
          caption: 'An emotional journey map tracking a new contributor\'s experience from downloading the app to receiving approval for their first submitted task. Identifies key friction points and opportunities for delight.',
          rationale: 'Visualizes the end-to-end user experience to pinpoint moments where proactive guidance or positive reinforcement is needed.',
          tags: ['Journey Map', 'UX']
        }
      ]
    },
    {
      title: 'Information Architecture & Task Flows',
      slots: [
        {
          file: 'CyberOrigin_11.png',
          title: 'Global Information Architecture',
          caption: 'Comprehensive sitemap outlining the structural hierarchy of both the mobile app and web dashboard. Demonstrates how complex features are organized into intuitive navigational models for different user roles.',
          rationale: 'Provides a blueprint for scalable navigation that can accommodate future feature additions without cluttering the interface.',
          tags: ['IA', 'Sitemap']
        },
        {
          file: 'CyberOrigin_12.png',
          title: 'User Flow: Task Discovery & Acceptance',
          caption: 'Step-by-step flow diagram showing how contributors browse available tasks, evaluate requirements, and commit to a capture session. Highlights the implementation of urgency and location-based filtering.',
          rationale: 'Optimizes the conversion funnel by reducing cognitive load during the task selection process.',
          tags: ['User Flow', 'Discovery']
        },
        {
          file: 'CyberOrigin_13.png',
          title: 'User Flow: Guided Data Capture',
          caption: 'Detailed sequence of the core recording loop, illustrating pre-flight checks, real-time feedback mechanisms, and post-capture review before submission. Emphasizes error prevention and recovery.',
          rationale: 'Ensures data quality at the source by guiding users through complex spatial and environmental requirements.',
          tags: ['User Flow', 'Capture']
        },
        {
          file: 'CyberOrigin_14.png',
          title: 'User Flow: The Review Process',
          caption: 'Diagram mapping the QA specialist\'s workflow for evaluating submitted tasks. Shows the paths for approval, rejection with feedback, and escalation to senior reviewers for edge cases.',
          rationale: 'Designs for high throughput and consistency in the review process, minimizing bottlenecks in data availability.',
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
      title: 'Mobile Capture Experience',
      slots: [
        {
          file: 'CyberOrigin_16.png',
          title: 'Dashboard & Task Feed',
          caption: 'The primary entry point for mobile contributors, featuring personalized task recommendations, progress towards daily goals, and quick access to active captures. The UI uses card-based layouts for easy scanning.',
          rationale: 'Maximizes engagement by presenting actionable opportunities immediately upon app launch.',
          tags: ['Dashboard', 'Mobile UI']
        },
        {
          file: 'CyberOrigin_17.png',
          title: 'Pre-flight Context Setup',
          caption: 'The interface guiding users to prepare their environment before recording. Includes interactive checklists for lighting, space clearance, and required props to ensure data viability.',
          rationale: 'Prevents wasted effort by confirming environmental prerequisites before the user begins the recording process.',
          tags: ['Onboarding', 'Preparation']
        },
        {
          file: 'CyberOrigin_18.png',
          title: 'Augmented Reality Guidance',
          caption: 'The live camera view augmented with real-time UI overlays that provide feedback on framing, motion speed, and spatial positioning. Utilizes device sensors to guide the user dynamically.',
          rationale: 'Lowers the barrier to entry for complex data capture by providing immediate, in-context correction.',
          tags: ['AR', 'Camera Interface']
        },
        {
          file: 'CyberOrigin_19.png',
          title: 'Post-Capture Review & Trim',
          caption: 'A streamlined editor allowing contributors to review their recording, trim unnecessary padding at the start and end, and verify quality against the task rubric before finalizing submission.',
          rationale: 'Empowers users to self-correct and improve their submission quality, reducing the burden on human reviewers.',
          tags: ['Video Editing', 'Review']
        },
        {
          file: 'CyberOrigin_20.png',
          title: 'Earnings & Reputation Wallet',
          caption: 'A transparent view of pending and completed payouts, alongside the user\'s quality score and progression towards higher tier tasks. Visualizes the direct correlation between data quality and earning potential.',
          rationale: 'Builds trust and incentivizes continuous improvement through clear financial and status rewards.',
          tags: ['Fintech', 'Gamification']
        }
      ]
    },
    {
      title: 'Role Framework & Job Maps',
      slots: [
        {
          file: 'CyberOrigin_21.png',
          title: 'Multi-Tier Role Hierarchy',
          caption: 'Visual representation of the progression system, showing how contributors can level up from novice to expert status based on submission volume and quality scores, unlocking more complex and lucrative tasks.',
          rationale: 'Creates a compelling long-term retention loop while organically cultivating a highly skilled contributor pool.',
          tags: ['Progression', 'System Design']
        },
        {
          file: 'CyberOrigin_22.png',
          title: 'Job Map: Kitchen Interaction Tasks',
          caption: 'Detailed breakdown of the requirements for capturing complex culinary actions. Outlines the specific metadata, camera angles, and object interactions needed for this high-value dataset category.',
          rationale: 'Demonstrates the platform\'s capability to handle nuanced, context-heavy data collection protocols.',
          tags: ['Job Map', 'Domain Specific']
        },
        {
          file: 'CyberOrigin_23.png',
          title: 'Job Map: Locomotion & Navigation',
          caption: 'Guidelines for capturing human movement across different terrains and environments. Highlights the UI components required for tracking trajectory, pace, and spatial mapping.',
          rationale: 'Showcases solutions for data capture that involve significant physical movement and environmental variability.',
          tags: ['Job Map', 'Motion']
        },
        {
          file: 'CyberOrigin_24.png',
          title: 'Job Map: Device & Appliance Usage',
          caption: 'Instructions for recording interactions with smart home devices and traditional appliances. Focuses on capturing fine motor skills and the causal relationship between action and device state change.',
          rationale: 'Highlights the design\'s adaptability to capture intricate details necessary for fine-manipulation AI training.',
          tags: ['Job Map', 'Interaction']
        },
        {
          file: 'CyberOrigin_25.png',
          title: 'Skill Verification Flows',
          caption: 'The onboarding interfaces for specific task categories, requiring users to pass short interactive quizzes or submit calibration videos to prove competence before accessing paid tasks.',
          rationale: 'Acts as a quality gatekeeper, ensuring users understand the nuances of a task type before polluting the dataset.',
          tags: ['Verification', 'Quality Assurance']
        }
      ]
    },
    {
      title: 'Reviewer & Marketplace Operations',
      slots: [
        {
          file: 'CyberOrigin_26.png',
          title: 'Reviewer Workspace Overview',
          caption: 'The high-density web dashboard designed for QA specialists. Features a split-pane layout with the submitted media on one side and a robust rubric, annotation tools, and metadata on the other.',
          rationale: 'Optimizes for speed and accuracy, allowing reviewers to process high volumes of submissions with minimal cognitive fatigue.',
          tags: ['Dashboard', 'Enterprise']
        },
        {
          file: 'CyberOrigin_27.png',
          title: 'Video Annotation & Scrubbing Tools',
          caption: 'Detailed view of the custom video player equipped with frame-by-frame scrubbing, spatial bookmarking, and tools for highlighting specific errors or areas of interest within the capture.',
          rationale: 'Provides the granular control necessary to validate complex temporal and spatial actions accurately.',
          tags: ['Tooling', 'Annotation']
        },
        {
          file: 'CyberOrigin_28.png',
          title: 'Feedback Construction Interface',
          caption: 'A modular system for reviewers to assemble constructive feedback for rejected tasks. Utilizes predefined snippets based on common errors, supplemented with custom notes to educate the contributor.',
          rationale: 'Standardizes feedback to reduce bias while providing actionable guidance to improve future contributor performance.',
          tags: ['Feedback', 'Workflow']
        },
        {
          file: 'CyberOrigin_29.png',
          title: 'Marketplace Supply/Demand Analytics',
          caption: 'An operations dashboard visualizing the real-time balance of available tasks versus active contributors. Includes predictive modeling to inform dynamic pricing and incentive structures.',
          rationale: 'Empowers platform administrators to maintain marketplace liquidity and address bottlenecks proactively.',
          tags: ['Analytics', 'Data Viz']
        },
        {
          file: 'CyberOrigin_30.png',
          title: 'Dispute Resolution Center',
          caption: 'The interface for handling appeals when contributors contest a rejection. Presents a side-by-side view of the original submission, reviewer feedback, and the contributor\'s rationale for a senior moderator to adjudicate.',
          rationale: 'Ensures fairness and maintains trust within the community through a transparent arbitration process.',
          tags: ['Moderation', 'Trust & Safety']
        }
      ]
    },
    {
      title: 'Design System & Visual Language',
      slots: [
        {
          file: 'CyberOrigin_31.png',
          title: 'Core Aesthetic Concept',
          caption: 'The moodboard and foundational design principles driving the CyberOrigin aesthetic. Blends utilitarian clarity for task execution with subtle futuristic elements to reflect the AI-driven nature of the platform.',
          rationale: 'Establishes a unique visual identity that feels both accessible to gig workers and credible to enterprise researchers.',
          tags: ['Art Direction', 'Visual Design']
        },
        {
          file: 'CyberOrigin_32.png',
          title: 'Color Palette & Typography',
          caption: 'Detailed specification of the brand colors, emphasizing high-contrast combinations for legibility in various lighting conditions. Highlights the typographic hierarchy chosen for dense data presentation.',
          rationale: 'Ensures accessibility and readability remain paramount, especially for mobile users capturing data outdoors.',
          tags: ['Typography', 'Color']
        },
        {
          file: 'CyberOrigin_33.png',
          title: 'Component Library: Mobile',
          caption: 'A selection of fundamental UI components tailored for iOS, including large touch targets, clear state indicators, and haptic feedback specifications to support one-handed operation during capture.',
          rationale: 'Accelerates development while ensuring a tactile, responsive feel crucial for a tool used in active environments.',
          tags: ['Design System', 'Mobile Components']
        },
        {
          file: 'CyberOrigin_34.png',
          title: 'Component Library: Web Dashboard',
          caption: 'The desktop counterpart to the mobile system, featuring data-dense tables, complex filtering models, and standardized charting components for the reviewer and researcher interfaces.',
          rationale: 'Maintains visual consistency while adapting functional paradigms for mouse-and-keyboard, information-heavy contexts.',
          tags: ['Design System', 'Web Components']
        },
        {
          file: 'CyberOrigin_35.png',
          title: 'Iconography & Feedback States',
          caption: 'The custom icon set designed for the platform, alongside a comprehensive overview of success, warning, error, and loading states. Emphasizes unambiguous communication of system status.',
          rationale: 'Reduces cognitive load by relying on universally recognizable symbols and clear visual affordances for critical interactions.',
          tags: ['Iconography', 'UI States']
        }
      ]
    },
    {
      title: 'Technical Architecture & Evaluation',
      slots: [
        {
          file: 'CyberOrigin_36.png',
          title: 'High-Level System Architecture',
          caption: 'A diagram illustrating the technical stack, showcasing the relationship between the client applications, the scalable cloud backend, and the data processing pipelines that prepare the AI training sets.',
          rationale: 'Communicates an understanding of the engineering complexities involved in handling large-scale, high-fidelity video and sensor data.',
          tags: ['Architecture', 'Tech Stack']
        },
        {
          file: 'CyberOrigin_37.png',
          title: 'Real-Time Edge Processing',
          caption: 'Visualizes how the mobile application leverages on-device machine learning (CoreML) to provide instant feedback on framing and lighting before the data is ever sent to the server.',
          rationale: 'Highlights the strategic use of edge computing to reduce server costs and improve the user experience with zero-latency guidance.',
          tags: ['Edge Computing', 'Innovation']
        },
        {
          file: 'CyberOrigin_38.png',
          title: 'Data Privacy & Anonymization',
          caption: 'The workflow for automatically blurring faces, license plates, and sensitive information in the captured videos. Details the consent management UI and the technical masking process.',
          rationale: 'Addresses critical regulatory and ethical concerns, ensuring user safety and compliance with global privacy standards.',
          tags: ['Privacy', 'Ethics']
        },
        {
          file: 'CyberOrigin_39.png',
          title: 'Performance Optimization Metrics',
          caption: 'A dashboard showing improvements in upload speeds, app start times, and battery consumption achieved through iterative design and engineering optimizations.',
          rationale: 'Demonstrates a commitment to measurable outcomes and the importance of performance as a core user experience metric.',
          tags: ['Performance', 'Metrics']
        },
        {
          file: 'CyberOrigin_40.png',
          title: 'Future Roadmap & Vision',
          caption: 'A conceptual look at upcoming features, including support for specialized hardware integrations (wearables, smart glasses) and automated AI-assisted preliminary reviews to further scale the platform.',
          rationale: 'Positions the project not just as a completed artifact, but as a living platform poised to evolve alongside the rapidly advancing field of embodied AI.',
          tags: ['Roadmap', 'Vision']
        }
      ]
    }
  ]
};
