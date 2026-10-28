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
      id: 'project-overview-sensor-framework',
      number: '01',
      title: 'Project Overview & Sensor Framework',
      images: [
        {
          file: 'Mengniu_01.png',
          title: 'Sensor Taxonomy',
          caption: 'Four signal domains, each signal tagged PROTOTYPE or CONCEPTUAL as printed.',
          rationale: 'The taxonomy is the data architecture of the twin.',
          tags: ['Overview', 'Dashboard']
        },
        {
          file: 'Mengniu_02.png',
          title: 'Visual Direction Board',
          caption: 'Material Realism, Industrial Clarity, Spatial Orientation, Restrained Alerting. Printed palette #009A4E / #111111 / #333333 / #666666 / #E6E6E6 / #F6F7F5; typography Inter.',
          rationale: 'Direction set before screens: realism with restraint.',
          tags: ['Taxonomy', 'IoT']
        },
        {
          file: 'Mengniu_03.png',
          title: 'Cow Health Model',
          caption: 'Six dimensions — Feed, Water, Space, Light, Rest, Air — around an Overall Health of “Good”.',
          rationale: 'Health as a model, not a single sensor reading.',
          tags: ['Data Flow', 'Biometrics']
        },
        {
          file: 'Mengniu_04.png',
          title: 'Research-to-Feature Matrix',
          caption: 'Six peer-reviewed rows mapped to product features.',
          rationale: 'Every feature traces to a published source.',
          tags: ['Environment', 'Sensors']
        },
        {
          file: 'Mengniu_05.png',
          title: 'User and Task Model',
          caption: 'Farm/Barn Operator as the primary user; five core tasks.',
          rationale: 'The user model is a task model.',
          tags: ['Production', 'Analytics']
        },
        {
          file: 'Mengniu_06.png',
          title: 'Information Architecture',
          caption: 'Six sections over a Unified Data Platform.',
          rationale: 'One platform under every section.',
          tags: ['Architecture', 'Data']
        },
        {
          file: 'Mengniu_07.png',
          title: 'Primary Interaction Flow',
          caption: 'The primary flow, following Cow 5247 (barn of 1,256 cows; elevated temperature 38.6 °C, up 1.2 °C).',
          rationale: 'The flow is told through one cow, not a feature list.',
          tags: ['Dashboard', 'Concept']
        }
      ]
    },
    {
      id: 'research-evidence-user-models',
      number: '02',
      title: 'Research Evidence & User Models',
      images: [
        {
          file: 'Mengniu_08.png',
          title: 'Wireframe Board',
          caption: 'A retrospective reconstruction: Barn Overview (2,560 cows), Cow #0457, the Health Control table, Minimap, and Milking State. (The slide prints the milking share as both 12.6% and 12.8%; kept as printed.)',
          rationale: 'Wireframes rebuilt honestly, labelled as reconstruction.',
          tags: ['Research', 'Fieldwork']
        },
        {
          file: 'Mengniu_09.png',
          title: 'Health Control Explorations',
          caption: 'Nutrition 92 / Activity 88 / Reproduction 91 / Environment 85 / Immune 87 / Digestion 90 — the hexagonal model was selected.',
          rationale: 'Explorations kept, with the winner marked.',
          tags: ['Persona', 'Strategy']
        },
        {
          file: 'Mengniu_10.png',
          title: 'Minimap and Selection Explorations',
          caption: 'Minimap and selection explorations; the final treatment centres Cow #8127, Pen E-2.',
          rationale: 'Selection is the core barn interaction.',
          tags: ['Persona', 'Medical']
        },
        {
          file: 'Mengniu_11.png',
          title: 'Cow 0986 — Health Overlay',
          caption: 'A photographic barn slide with the hexagonal overlay live on Cow 0986: Feed 88% / Water 92% / Space 85% / Rest 93% / Air 87% / Light 90% — “Healthy”.',
          rationale: 'The twin shown in the physical barn, not a studio render.',
          tags: ['Workflow', 'Analysis']
        },
        {
          file: 'Mengniu_12.png',
          title: 'Constraints',
          caption: 'Five constraint cards on a dark slide.',
          rationale: 'Constraints stated plainly, mid-deck.',
          tags: ['Synthesis', 'Research']
        },
        {
          file: 'Mengniu_13.png',
          title: 'Project Snapshot',
          caption: 'Solo ownership across ten stages; ten weeks, Jan–Mar 2024; stack: Unity, C#, Blazor, .NET, SQL Server, InfluxDB, WebGL, Three.js, Figma, After Effects.',
          rationale: 'One snapshot for ownership, time, and stack.',
          tags: ['Research', 'UX']
        },
        {
          file: 'Mengniu_14.png',
          title: 'Why Dairy Cow Health Matters',
          caption: 'Why dairy cow health matters — the case before the product.',
          rationale: 'The welfare argument precedes the technology argument.',
          tags: ['Strategy', 'Value']
        }
      ]
    },
    {
      id: 'information-architecture-wireframes',
      number: '03',
      title: 'Information Architecture & Wireframes',
      images: [
        {
          file: 'Mengniu_15.png',
          title: 'Research Evidence',
          caption: 'Three review articles form the printed evidence base for the health model.',
          rationale: 'Evidence named on the slide itself.',
          tags: ['IA', 'Sitemap']
        },
        {
          file: 'Mengniu_16.png',
          title: 'Opportunity Statement',
          caption: 'A single “how might we” question — nothing else is printed on this slide.',
          rationale: 'One question, given a whole slide.',
          tags: ['Navigation', 'UX']
        },
        {
          file: 'Mengniu_17.png',
          title: 'From Physical Farm to Digital Twin',
          caption: 'The end-to-end system map in six layers, from physical farm to digital twin.',
          rationale: 'The system map is the architecture argument.',
          tags: ['Wireframe', 'Layout']
        },
        {
          file: 'Mengniu_18.png',
          title: 'Real Farm and Simulated Farm',
          caption: 'Real farm and simulated farm, side by side (A/B).',
          rationale: 'Simulation earns trust by comparison with the real barn.',
          tags: ['Wireframe', 'Profile']
        },
        {
          file: 'Mengniu_19.png',
          title: 'Scope Boundary',
          caption: 'Six Built versus five Proposed items — the boundary as printed.',
          rationale: 'Built and proposed are never blurred.',
          tags: ['Wireflow', 'Interaction']
        },
        {
          file: 'Mengniu_20.png',
          title: 'Product Goals and Priorities',
          caption: 'Six goal cards with their priorities.',
          rationale: 'Goals stated as cards the rest of the deck must answer.',
          tags: ['Mobile', 'Wireframe']
        }
      ]
    }
  ]
};
