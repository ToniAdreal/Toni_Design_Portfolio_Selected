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
      title: 'Hero & Product Vision',
      slots: [
        {
          file: 'Budweiser_01.png',
          title: 'BrewOps Cover Showcase',
          caption: 'An impactful hero presentation of the BrewOps Intelligence platform. The composition highlights the integration of AI-driven supply chain management with the iconic Budweiser brand identity.',
          rationale: 'Establishes a strong visual anchor that immediately communicates enterprise scale and brand alignment.',
          tags: ['Hero', 'Product Vision']
        },
        {
          file: 'Budweiser_02.png',
          title: 'Executive Dashboard Preview',
          caption: 'A high-level view of the primary dashboard interface tailored for supply chain executives. Key metrics such as overall yield and global distribution status are front and center.',
          rationale: 'Demonstrates immediate value realization for decision-makers through surfaced KPIs.',
          tags: ['Dashboard', 'UI']
        },
        {
          file: 'Budweiser_03.png',
          title: 'Platform Value Proposition',
          caption: 'A conceptual breakdown of the platform’s core pillars: visibility, prediction, and action. The interface subtly reinforces these pillars through its modular layout.',
          rationale: 'Aligns the product features directly with enterprise business objectives.',
          tags: ['Vision', 'Strategy']
        },
        {
          file: 'Budweiser_04.png',
          title: 'Mobile Experience Highlights',
          caption: 'Showcasing the responsive design strategy for on-the-go floor managers and logistics personnel. Critical alerts and simplified data views are optimized for mobile consumption.',
          rationale: 'Ensures that vital operational intelligence is accessible across contexts and form factors.',
          tags: ['Mobile', 'Responsive']
        },
        {
          file: 'Budweiser_05.png',
          title: 'Ecosystem Integration Vision',
          caption: 'A structural overview of how BrewOps integrates with existing ERP and IoT systems across the brewery. The visual maps data flows from raw materials to retail delivery.',
          rationale: 'Validates the platform’s technical feasibility and comprehensive scope within a complex ecosystem.',
          tags: ['System Architecture', 'Strategy']
        }
      ]
    },
    {
      id: 'research-role-framework',
      title: 'Research & Role Framework',
      slots: [
        {
          file: 'Budweiser_06.png',
          title: 'Stakeholder Mapping',
          caption: 'A visualization of the key personas served by the platform, from brewmasters to logistics coordinators. Emphasizes the intersection of their workflows and shared data needs.',
          rationale: 'Grounds the product architecture in verified user needs and organizational realities.',
          tags: ['Research', 'Personas']
        },
        {
          file: 'Budweiser_07.png',
          title: 'Brewmaster Workflow Analysis',
          caption: 'Detailed user journey map for the Brewmaster persona, identifying pain points in quality control and yield tracking. Highlights opportunities for AI intervention.',
          rationale: 'Translates field research into actionable product features for specialized roles.',
          tags: ['Journey Mapping', 'UX']
        },
        {
          file: 'Budweiser_08.png',
          title: 'Logistics Coordinator Needs',
          caption: 'Analysis of the dispatch and routing challenges faced by logistics teams. Showcases wireframed solutions for real-time fleet tracking and bottleneck alerts.',
          rationale: 'Prioritizes features that directly impact delivery SLAs and cost efficiency.',
          tags: ['Research', 'Logistics']
        },
        {
          file: 'Budweiser_09.png',
          title: 'Data Flow Taxonomy',
          caption: 'A structural diagram defining how data points are categorized, transformed, and displayed based on user permissions and roles.',
          rationale: 'Ensures data security and relevance by presenting only contextually appropriate information.',
          tags: ['Taxonomy', 'Information Architecture']
        },
        {
          file: 'Budweiser_10.png',
          title: 'Role-Based Access Models',
          caption: 'UI mockups demonstrating how the navigation and dashboard widgets adapt based on the authenticated user’s role, whether an executive or a floor operator.',
          rationale: 'Provides a personalized, focused experience that reduces cognitive load for individual users.',
          tags: ['Access Control', 'UI']
        }
      ]
    },
    {
      id: 'ia-navigation',
      title: 'Information Architecture & Navigation',
      slots: [
        {
          file: 'Budweiser_11.png',
          title: 'Platform Sitemap',
          caption: 'A comprehensive sitemap outlining the platform’s modular structure. It delineates the separation between the Control Tower, forecasting, and operational domains.',
          rationale: 'Establishes a scalable framework that can accommodate future feature expansions without breaking the core structure.',
          tags: ['Information Architecture', 'Sitemap']
        },
        {
          file: 'Budweiser_12.png',
          title: 'Global Navigation System',
          caption: 'The primary sidebar navigation featuring collapsible groups and quick-access pinned items. Uses clear iconography and typography to support scannability.',
          rationale: 'Facilitates rapid switching between complex operational contexts with minimal friction.',
          tags: ['Navigation', 'UI']
        },
        {
          file: 'Budweiser_13.png',
          title: 'Contextual Sub-Navigation',
          caption: 'Demonstrates the horizontal sub-navigation patterns used within specific modules like "Demand Planning". Includes filters, date ranges, and export controls.',
          rationale: 'Keeps the primary view clean while offering powerful, context-specific manipulation tools.',
          tags: ['Navigation', 'UX']
        },
        {
          file: 'Budweiser_14.png',
          title: 'Search and Command Center',
          caption: 'A global search interface that allows users to quickly find specific SKUs, shipping routes, or personnel. Features an integrated command palette for power users.',
          rationale: 'Accelerates workflows for expert users who know exactly what data they need.',
          tags: ['Search', 'Interaction Design']
        },
        {
          file: 'Budweiser_15.png',
          title: 'Breadcrumbs & Wayfinding',
          caption: 'Detailed view of the platform’s breadcrumb trails and page headers. Ensures users maintain spatial awareness even deep within nested data tables.',
          rationale: 'Prevents user disorientation in a highly complex, multi-tiered application.',
          tags: ['Wayfinding', 'UI']
        }
      ]
    },
    {
      id: 'control-tower-risk',
      title: 'Control Tower & Risk Dashboards',
      slots: [
        {
          file: 'Budweiser_16.png',
          title: 'Global Control Tower Overview',
          caption: 'The central hub for monitoring worldwide brewing operations. Features a unified map interface with live status indicators for facilities and transit routes.',
          rationale: 'Provides executives with a single pane of glass for immediate situational awareness.',
          tags: ['Dashboard', 'Control Tower']
        },
        {
          file: 'Budweiser_17.png',
          title: 'Real-Time Alert Feed',
          caption: 'An intelligent notification center that aggregates and categorizes risks, such as raw material shortages or extreme weather impacting delivery routes.',
          rationale: 'Transforms passive monitoring into proactive management by highlighting critical issues.',
          tags: ['Alerts', 'UI']
        },
        {
          file: 'Budweiser_18.png',
          title: 'Risk Heatmap Visualization',
          caption: 'A detailed heatmap illustrating regional risk probabilities across the supply chain network. Uses color theory effectively to distinguish severity levels.',
          rationale: 'Allows teams to quickly identify and prioritize vulnerabilities before they cause systemic delays.',
          tags: ['Data Viz', 'Risk']
        },
        {
          file: 'Budweiser_19.png',
          title: 'Facility Status Drill-Down',
          caption: 'A focused view of a single brewing facility, showing active batches, equipment health, and immediate local risks. Accessible directly from the Control Tower map.',
          rationale: 'Bridges the gap between macro-level oversight and micro-level operational control.',
          tags: ['Drill-down', 'Dashboard']
        },
        {
          file: 'Budweiser_20.png',
          title: 'Incident Management Flow',
          caption: 'The UI workflow for acknowledging, assigning, and resolving a flagged risk within the platform. Includes collaborative notes and status tracking.',
          rationale: 'Ensures accountability and streamlines the resolution process for operational disruptions.',
          tags: ['Workflow', 'UX']
        }
      ]
    },
    {
      id: 'demand-supply-scenario',
      title: 'Demand, Supply & Scenario Planning',
      slots: [
        {
          file: 'Budweiser_21.png',
          title: 'AI Demand Forecasting',
          caption: 'A dashboard predicting future product demand based on historical data, market trends, and seasonal events. Features confidence intervals visualized over line charts.',
          rationale: 'Leverages predictive analytics to optimize production schedules and reduce waste.',
          tags: ['AI', 'Forecasting']
        },
        {
          file: 'Budweiser_22.png',
          title: 'Supply Allocation Matrix',
          caption: 'A complex data grid aligning raw material availability against projected brewing schedules. Highlights potential shortfalls in crucial ingredients like hops or barley.',
          rationale: 'Provides procurement teams with the lead time necessary to secure resources.',
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
          title: 'Production Schedule Gantt',
          caption: 'A dynamic Gantt chart visualizing batch brewing timelines across multiple facilities. Supports drag-and-drop adjustments with instant resource reallocation calculation.',
          rationale: 'Offers an intuitive, standard mental model for visualizing and adjusting time-based operations.',
          tags: ['Data Viz', 'Scheduling']
        },
        {
          file: 'Budweiser_25.png',
          title: 'Cost Variance Analysis',
          caption: 'Financial overlay showing the cost implications of different scenario plans. Features waterfall charts to break down specific operational costs.',
          rationale: 'Ties operational decisions directly to business outcomes and financial efficiency.',
          tags: ['Finance', 'Analytics']
        }
      ]
    },
    {
      id: 'logistics-inventory',
      title: 'Logistics, Inventory & Maintenance',
      slots: [
        {
          file: 'Budweiser_26.png',
          title: 'Fleet Tracking & Routing',
          caption: 'A logistics view showing active delivery routes, vehicle telemetry, and estimated times of arrival. Integrates real-time traffic and weather overlays.',
          rationale: 'Maximizes fleet efficiency and provides accurate delivery estimates to distributors.',
          tags: ['Logistics', 'Map']
        },
        {
          file: 'Budweiser_27.png',
          title: 'Warehouse Inventory Overview',
          caption: 'A digital twin representation of warehouse stock levels, categorizing pallets by SKU, age, and destination. Indicates areas nearing capacity.',
          rationale: 'Maintains optimal inventory balance and prevents costly overstock or stockout scenarios.',
          tags: ['Inventory', 'Dashboard']
        },
        {
          file: 'Budweiser_28.png',
          title: 'Predictive Maintenance Alerts',
          caption: 'Equipment status dashboard utilizing IoT sensor data to predict machinery failures before they occur. Highlights a centrifuge requiring immediate servicing.',
          rationale: 'Reduces costly unplanned downtime through data-driven maintenance scheduling.',
          tags: ['IoT', 'Maintenance']
        },
        {
          file: 'Budweiser_29.png',
          title: 'Cold Chain Monitoring',
          caption: 'Specialized interface for tracking temperature logs across the supply chain, ensuring product quality is maintained during transit.',
          rationale: 'Crucial for compliance and maintaining the brand standard for product freshness.',
          tags: ['Compliance', 'Monitoring']
        },
        {
          file: 'Budweiser_30.png',
          title: 'Carrier Performance Metrics',
          caption: 'Scorecard evaluating third-party logistics providers on metrics like on-time delivery rate, damage incidents, and cost per mile.',
          rationale: 'Facilitates data-backed negotiations and vendor management for the logistics team.',
          tags: ['Metrics', 'Vendor Management']
        }
      ]
    },
    {
      id: 'quality-insights-copilot',
      title: 'Quality, Insights & AI Copilot',
      slots: [
        {
          file: 'Budweiser_31.png',
          title: 'Batch Quality Assurance',
          caption: 'A detailed QA view comparing real-time fermentation metrics (gravity, pH, temperature) against the golden standard for a specific Budweiser recipe.',
          rationale: 'Ensures absolute product consistency across all global brewing facilities.',
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
          title: 'Copilot Action Suggestions',
          caption: 'Shows the AI proactively suggesting actions, such as rerouting shipments away from a port strike, complete with projected impact analyses.',
          rationale: 'Shifts the system from an analytical tool to an active, prescriptive partner.',
          tags: ['AI', 'Proactive']
        },
        {
          file: 'Budweiser_34.png',
          title: 'Automated Insight Reports',
          caption: 'A generated weekly performance summary highlighting key efficiency gains and anomalies, formatted automatically for executive distribution.',
          rationale: 'Saves hours of manual reporting work and ensures stakeholders receive consistent updates.',
          tags: ['Reporting', 'Automation']
        },
        {
          file: 'Budweiser_35.png',
          title: 'Sustainability & Resource Tracking',
          caption: 'Dashboard tracking water and energy consumption per hectoliter of beer produced. Integrates with corporate sustainability goals.',
          rationale: 'Aligns operational tracking with ESG (Environmental, Social, and Governance) targets.',
          tags: ['Sustainability', 'Dashboard']
        }
      ]
    },
    {
      id: 'data-visualization-system',
      title: 'Data Visualization System',
      slots: [
        {
          file: 'Budweiser_36.png',
          title: 'Core Chart Library',
          caption: 'A comprehensive display of the bespoke chart components: line, bar, donut, and scatter plots, all styled with the brand’s color palette.',
          rationale: 'Creates a cohesive visual language that makes complex data universally legible across the platform.',
          tags: ['Data Viz', 'Design System']
        },
        {
          file: 'Budweiser_37.png',
          title: 'Interactive Tooltips & Hover States',
          caption: 'Demonstrates the rich interaction design within charts. Hovering over a data point reveals deep context, exact values, and variance percentages.',
          rationale: 'Provides progressive disclosure, keeping charts clean while offering deep data access.',
          tags: ['Interaction', 'Micro-interactions']
        },
        {
          file: 'Budweiser_38.png',
          title: 'Complex Data Grids',
          caption: 'The standard table component optimized for heavy data manipulation, featuring inline editing, complex sorting, sticky headers, and custom cell renderers.',
          rationale: 'Ensures that power users can efficiently manage thousands of rows of operational data.',
          tags: ['Data Grid', 'UI Component']
        },
        {
          file: 'Budweiser_39.png',
          title: 'Gauge and KPI Cards',
          caption: 'A collection of standard metric cards used throughout the platform to display single-value KPIs with accompanying trend lines (sparklines).',
          rationale: 'Standardizes how success and failure metrics are communicated at a glance.',
          tags: ['KPI', 'Components']
        },
        {
          file: 'Budweiser_40.png',
          title: 'Accessibility in Data Viz',
          caption: 'Examples of charts toggled into high-contrast and colorblind-safe modes, demonstrating compliance with WCAG standards. Uses patterns in addition to color.',
          rationale: 'Guarantees that critical operational data is accessible to all users, regardless of visual ability.',
          tags: ['Accessibility', 'A11y']
        }
      ]
    },
    {
      id: 'design-system',
      title: 'Design System & Component Library',
      slots: [
        {
          file: 'Budweiser_41.png',
          title: 'Brand Tokens & Color Palette',
          caption: 'The foundation of the design system, showcasing the primary brand reds, neutral grays, and semantic status colors tailored for dark and light modes.',
          rationale: 'Maintains strict brand alignment while establishing a functional palette for enterprise software.',
          tags: ['Design System', 'Tokens']
        },
        {
          file: 'Budweiser_42.png',
          title: 'Typography & Hierarchy',
          caption: 'The typographic scale utilized across the application, emphasizing legibility for data-heavy interfaces. Displays pairings for headers, body, and micro-copy.',
          rationale: 'Establishes clear information hierarchy and readability in dense informational contexts.',
          tags: ['Typography', 'System']
        },
        {
          file: 'Budweiser_43.png',
          title: 'Form Inputs & Controls',
          caption: 'A comprehensive state matrix of input fields, dropdowns, toggles, and buttons. Displays default, hover, active, disabled, and error states.',
          rationale: 'Ensures predictable and accessible interactions across all user input scenarios.',
          tags: ['UI Components', 'Forms']
        },
        {
          file: 'Budweiser_44.png',
          title: 'Modals & Overlays',
          caption: 'Documentation of standard dialog patterns, side panels, and popovers used for complex data entry and detailed viewing without leaving the context of the page.',
          rationale: 'Preserves user context and flow during interruptive or deep-dive tasks.',
          tags: ['Patterns', 'Overlays']
        },
        {
          file: 'Budweiser_45.png',
          title: 'Iconography Set',
          caption: 'A custom, tailored icon library designed specifically for brewing, logistics, and supply chain concepts. Features consistent line weights and scalable SVGs.',
          rationale: 'Provides visual shorthand that speeds up recognition of industry-specific tools and data.',
          tags: ['Iconography', 'Assets']
        }
      ]
    },
    {
      id: 'technical-results',
      title: 'Technical Results & Evaluation',
      slots: [
        {
          file: 'Budweiser_46.png',
          title: 'Performance Optimization',
          caption: 'A technical view showing the platform’s rendering performance metrics, highlighting successful strategies for handling large datasets via virtualization.',
          rationale: 'Proves the interface is performant and responsive even under enterprise data loads.',
          tags: ['Performance', 'Engineering']
        },
        {
          file: 'Budweiser_47.png',
          title: 'User Testing Insights',
          caption: 'Key takeaways and heatmaps from usability testing sessions with actual supply chain personnel. Highlights areas of friction that were successfully redesigned.',
          rationale: 'Validates design decisions through empirical data and continuous iteration.',
          tags: ['UX Research', 'Testing']
        },
        {
          file: 'Budweiser_48.png',
          title: 'KPI Impact Visualization',
          caption: 'An infographic detailing the projected business impact of the platform, such as a 15% reduction in stockouts and a 20% increase in fleet efficiency.',
          rationale: 'Quantifies the ROI of UX improvements to business stakeholders.',
          tags: ['ROI', 'Business Impact']
        },
        {
          file: 'Budweiser_49.png',
          title: 'Cross-Platform Consistency',
          caption: 'Side-by-side comparisons of the interface on large desktop monitors, tablets, and ruggedized industrial mobile devices.',
          rationale: 'Ensures a cohesive brand and functional experience regardless of the hardware utilized on the warehouse floor.',
          tags: ['Responsive', 'Cross-Platform']
        },
        {
          file: 'Budweiser_50.png',
          title: 'Final Platform Showcase',
          caption: 'A culmination shot of the BrewOps Intelligence platform in a real-world context on a Control Tower display screen.',
          rationale: 'Serves as a powerful closing statement demonstrating the realized vision of the project.',
          tags: ['Showcase', 'Outcome']
        }
      ]
    }
  ]
};
