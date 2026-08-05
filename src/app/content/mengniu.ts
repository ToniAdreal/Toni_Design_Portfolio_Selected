import type { Project } from './types';

export const mengniu: Project = {
  slug: 'mengniu',
  index: '07',
  name: 'Mengniu Digital Twin',
  tagline: 'Smart Dairy Farming Intelligence Platform',
  context: 'Mengniu Dairy Group / AgriTech IoT',
  accent: '--acc-mengniu',
  summary: 'A digital twin platform for Mengniu Dairy Group that transforms traditional dairy farming through IoT sensor networks and predictive analytics. The system monitors individual cow health metrics, barn environmental conditions, and production quality in real-time, enabling farm managers to make data-driven decisions that improve animal welfare, milk yield, and operational efficiency across large-scale dairy operations.',
  metrics: [
    { label: 'Sensor Domains', value: '4 Signal Categories' },
    { label: 'Monitoring', value: 'Individual Cow Level' },
    { label: 'Environment', value: 'Barn-wide IoT Mesh' },
    { label: 'Scope', value: 'Prototype to Integration' },
  ],
  chapters: [
    {
      title: 'Project Overview & Sensor Framework',
      content: [
        {
          file: 'Mengniu_01.png',
          title: 'Platform Hero View',
          caption: 'An introductory glance at the Mengniu Digital Twin platform interface. It establishes a command center paradigm for modern dairy farming operations.',
          rationale: 'Establishes the platform scale and capability instantly for enterprise agricultural management.',
          tags: ['Overview', 'Dashboard']
        },
        {
          file: 'Mengniu_02.png',
          title: 'Sensor Taxonomy Map',
          caption: 'A comprehensive map categorizing the four primary signal domains collected across the farm ecosystem. This taxonomy forms the foundational data architecture for the entire digital twin.',
          rationale: 'Translates complex IoT hardware integrations into understandable, categorical data streams.',
          tags: ['Taxonomy', 'IoT']
        },
        {
          file: 'Mengniu_03.png',
          title: 'Cow Health Signal Flow',
          caption: 'Visualization of how individual biometric sensors attached to the cattle transmit vital health data. This real-time flow enables immediate anomaly detection and preventative care.',
          rationale: 'Highlights the system’s capacity for granular, individual-level health tracking at scale.',
          tags: ['Data Flow', 'Biometrics']
        },
        {
          file: 'Mengniu_04.png',
          title: 'Barn Environmental Sensors',
          caption: 'Diagram detailing the spatial placement of environmental sensors across the barn infrastructure. It illustrates how temperature, humidity, and air quality are continuously monitored.',
          rationale: 'Demonstrates the holistic approach to environmental monitoring that ensures optimal animal welfare.',
          tags: ['Environment', 'Sensors']
        },
        {
          file: 'Mengniu_05.png',
          title: 'Milk Yield Tracking Integration',
          caption: 'Overview of the production data pipeline linking individual milking stations to central analytics. This stream correlates yield variations with health and environmental factors.',
          rationale: 'Connects operational outputs directly with underlying health and environmental inputs.',
          tags: ['Production', 'Analytics']
        },
        {
          file: 'Mengniu_06.png',
          title: 'Data Ingestion Architecture',
          caption: 'High-level schematic of the data ingestion layer handling high-frequency sensor readings. It emphasizes robustness and low-latency processing critical for real-time alerts.',
          rationale: 'Provides transparency into the technical backbone required for a reliable digital twin operation.',
          tags: ['Architecture', 'Data']
        },
        {
          file: 'Mengniu_07.png',
          title: 'Executive Dashboard Prototype',
          caption: 'Early concept for the executive-level dashboard summarizing farm-wide metrics. It aggregates diverse data streams into actionable KPIs for farm directors.',
          rationale: 'Ensures complex, multi-modal data is distilled into a scannable, decisive format for leadership.',
          tags: ['Dashboard', 'Concept']
        }
      ]
    },
    {
      title: 'Research Evidence & User Models',
      content: [
        {
          file: 'Mengniu_08.png',
          title: 'On-site Ethnographic Research',
          caption: 'Photographic evidence and notes from observational research conducted at operational dairy farms. This phase was crucial for understanding the physical constraints of the farm environment.',
          rationale: 'Roots the digital solution in the gritty, physical realities of agricultural work.',
          tags: ['Research', 'Fieldwork']
        },
        {
          file: 'Mengniu_09.png',
          title: 'Farm Manager Persona',
          caption: 'Detailed user persona outlining the goals, pain points, and daily routine of a large-scale farm manager. Their primary focus is balancing operational efficiency with animal welfare.',
          rationale: 'Aligns product features with the specific, pragmatic needs of the primary decision-maker.',
          tags: ['Persona', 'Strategy']
        },
        {
          file: 'Mengniu_10.png',
          title: 'Veterinarian User Model',
          caption: 'Persona focused on the farm veterinarian, highlighting their need for immediate, detailed health anomalies. Their workflow dictates the alert urgency and diagnostic interface requirements.',
          rationale: 'Ensures clinical data is accessible and actionable for specialized medical interventions.',
          tags: ['Persona', 'Medical']
        },
        {
          file: 'Mengniu_11.png',
          title: 'Task Analysis: Morning Rounds',
          caption: 'A step-by-step breakdown of the farm manager’s morning inspection routine. It identifies critical moments where mobile digital twin access provides maximum value.',
          rationale: 'Maps digital interventions to existing physical workflows to minimize friction and adoption barriers.',
          tags: ['Workflow', 'Analysis']
        },
        {
          file: 'Mengniu_12.png',
          title: 'Pain Point Affinity Mapping',
          caption: 'Synthesis of qualitative research highlighting common frustrations with existing disparate farm systems. The clustering reveals a strong need for unified data visualization.',
          rationale: 'Validates the core value proposition of a centralized digital twin platform.',
          tags: ['Synthesis', 'Research']
        },
        {
          file: 'Mengniu_13.png',
          title: 'Alert Fatigue Study',
          caption: 'Analysis of current alarm systems demonstrating the danger of alert fatigue. This insight drove the development of a tiered, intelligent notification hierarchy.',
          rationale: 'Directly informs the design of a smarter, less noisy notification system to prevent cognitive overload.',
          tags: ['Research', 'UX']
        },
        {
          file: 'Mengniu_14.png',
          title: 'Value Proposition Canvas',
          caption: 'Mapping the digital twin features directly to the pains and gains of the farm operators. This serves as the strategic anchor for all subsequent design decisions.',
          rationale: 'Maintains a strict focus on delivering tangible business and operational value.',
          tags: ['Strategy', 'Value']
        }
      ]
    },
    {
      title: 'Information Architecture & Wireframes',
      content: [
        {
          file: 'Mengniu_15.png',
          title: 'Platform Sitemap',
          caption: 'Comprehensive structural map of the digital twin application. It delineates navigation between global farm views, individual barn monitoring, and specific cow diagnostics.',
          rationale: 'Establishes a logical hierarchy that scales from macro farm overviews to micro individual details.',
          tags: ['IA', 'Sitemap']
        },
        {
          file: 'Mengniu_16.png',
          title: 'Navigation Schema',
          caption: 'Detailed breakdown of the primary and secondary navigation structures. The design prioritizes quick access to critical alerts and high-level health summaries.',
          rationale: 'Ensures users can navigate complex, multi-layered data environments without losing context.',
          tags: ['Navigation', 'UX']
        },
        {
          file: 'Mengniu_17.png',
          title: 'Barn View Wireframe',
          caption: 'Low-fidelity layout exploring the spatial representation of a specific barn. It tests the placement of environmental data overlays alongside individual cow statuses.',
          rationale: 'Validates the information density and spatial relationships before committing to visual design.',
          tags: ['Wireframe', 'Layout']
        },
        {
          file: 'Mengniu_18.png',
          title: 'Individual Cow Profile Wireframe',
          caption: 'Structural exploration for the detailed biometric profile of a single cow. The layout groups historical health trends, current vitals, and lactation cycles logically.',
          rationale: 'Organizes dense clinical and operational data into a scannable, structured format.',
          tags: ['Wireframe', 'Profile']
        },
        {
          file: 'Mengniu_19.png',
          title: 'Alert Triage Wireflow',
          caption: 'Interaction flow depicting how a user receives, assesses, and actions a health alert. It emphasizes a rapid, informed decision-making process.',
          rationale: 'Focuses on minimizing the time between anomaly detection and corrective action.',
          tags: ['Wireflow', 'Interaction']
        },
        {
          file: 'Mengniu_20.png',
          title: 'Mobile Companion Layouts',
          caption: 'Initial structural concepts for the mobile application used by staff in the field. The focus is on high-contrast, easily tappable interfaces suitable for outdoor, active use.',
          rationale: 'Adapts the platform for the physical realities of on-the-go farm management.',
          tags: ['Mobile', 'Wireframe']
        }
      ]
    },
    {
      title: 'Product Goals & Visual Direction',
      content: [
        {
          file: 'Mengniu_21.png',
          title: 'Design Principles',
          caption: 'The core tenets guiding the visual and interaction design: Clarity, Immediacy, and Trust. These principles ensure the tool remains utilitarian yet approachable.',
          rationale: 'Provides a unified philosophical foundation for all visual and interactive decisions.',
          tags: ['Principles', 'Strategy']
        },
        {
          file: 'Mengniu_22.png',
          title: 'Moodboard: Utilitarian Tech',
          caption: 'A collection of visual references blending modern tech interfaces with rugged, industrial agricultural tools. It seeks a balance between sophisticated data and practical application.',
          rationale: 'Sets a visual tone that feels advanced yet appropriate for the agricultural context.',
          tags: ['Moodboard', 'Visuals']
        },
        {
          file: 'Mengniu_23.png',
          title: 'Color Palette Exploration',
          caption: 'Development of a semantic color system tailored for data visualization. Specific hues are strictly assigned to denote health statuses, environmental warnings, and system alerts.',
          rationale: 'Utilizes color primarily as an informational tool rather than just aesthetic decoration.',
          tags: ['Color', 'System']
        },
        {
          file: 'Mengniu_24.png',
          title: 'Typography System',
          caption: 'Selection and scaling of typefaces prioritized for legibility on various screens and in varying lighting conditions. Monospaced fonts are used for tabular sensor data.',
          rationale: 'Ensures critical data points are readable at a glance, minimizing cognitive load.',
          tags: ['Typography', 'System']
        },
        {
          file: 'Mengniu_25.png',
          title: 'Iconography & Indicators',
          caption: 'A custom suite of icons and status indicators designed specifically for dairy farming operations. They provide clear, unambiguous visual shorthand for complex states.',
          rationale: 'Accelerates comprehension of data through intuitive, context-specific visual cues.',
          tags: ['Iconography', 'UI']
        },
        {
          file: 'Mengniu_26.png',
          title: 'Data Visualization Styles',
          caption: 'Exploration of chart and graph styles tailored for biometric and environmental trends. The emphasis is on highlighting deviations from the norm rather than raw data points.',
          rationale: 'Transforms raw numbers into immediate insights, focusing the user on actionable anomalies.',
          tags: ['Data Viz', 'Exploration']
        },
        {
          file: 'Mengniu_27.png',
          title: 'Component Library Preview',
          caption: 'An early look at the foundational UI components—buttons, cards, and data tables—assembled to ensure a cohesive visual language across the platform.',
          rationale: 'Establishes a scalable design system for consistent application development.',
          tags: ['Components', 'Design System']
        }
      ]
    },
    {
      title: 'High-Fidelity UI & System Architecture',
      content: [
        {
          file: 'Mengniu_28.png',
          title: 'Command Center Dashboard',
          caption: 'The final, high-fidelity global dashboard offering a comprehensive view of farm operations. It integrates weather, overall yield, and aggregated herd health into a single pane of glass.',
          rationale: 'Provides farm leadership with a powerful, real-time pulse on their entire operation.',
          tags: ['UI', 'Dashboard']
        },
        {
          file: 'Mengniu_29.png',
          title: 'Digital Twin Barn Interface',
          caption: 'A spatially-aware representation of a specific barn, overlaying live sensor data onto a 2D floor plan. Users can visually pinpoint environmental issues or sick animals instantly.',
          rationale: 'Leverages spatial memory to make complex sensor data immediately understandable in physical context.',
          tags: ['UI', 'Spatial']
        },
        {
          file: 'Mengniu_30.png',
          title: 'Comprehensive Cow Diagnostics',
          caption: 'The detailed view of an individual cow, featuring real-time biometric tracking, historical lactation data, and predictive health warnings powered by machine learning.',
          rationale: 'Empowers veterinarians with deep, contextualized data for precise medical intervention.',
          tags: ['UI', 'Diagnostics']
        },
        {
          file: 'Mengniu_31.png',
          title: 'Intelligent Alert Center',
          caption: 'The centralized notification hub where alerts are prioritized by severity and impact. It provides guided workflows for resolving identified issues efficiently.',
          rationale: 'Reduces alert fatigue by structuring notifications into actionable, prioritized tasks.',
          tags: ['UI', 'Alerts']
        },
        {
          file: 'Mengniu_32.png',
          title: 'Mobile Field App',
          caption: 'High-fidelity screens of the mobile companion application designed for on-the-ground staff. It features offline capabilities and barcode scanning for rapid cow identification.',
          rationale: 'Ensures the digital twin remains useful and accessible at the point of physical action.',
          tags: ['UI', 'Mobile']
        },
        {
          file: 'Mengniu_33.png',
          title: 'System Architecture Diagram',
          caption: 'A technical illustration showing the flow of data from edge IoT devices through the cloud processing layer and into the user-facing application interfaces.',
          rationale: 'Demonstrates the robust, scalable technical foundation supporting the frontend experience.',
          tags: ['Architecture', 'Technical']
        },
        {
          file: 'Mengniu_34.png',
          title: 'Platform Ecosystem Value',
          caption: 'A concluding summary visualization illustrating how the integrated platform drives efficiency, improves animal welfare, and ultimately increases yield quality and volume.',
          rationale: 'Connects the UX/UI execution directly back to the core business objectives of the enterprise.',
          tags: ['Summary', 'Value']
        }
      ]
    }
  ]
};
