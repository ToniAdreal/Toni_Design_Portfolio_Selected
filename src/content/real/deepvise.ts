import type { Project } from './types';

export const deepvise: Project = {
  slug: 'deepvise',
  index: '03',
  name: 'DeepVise',
  tagline: 'Private Machine Intelligence & Explainable Credit Review',
  context: 'FinTechathon — FATE Federated Learning',
  accent: '--acc-deepvise',
  summary:
    'DeepVise bridges industrial press-equipment health monitoring with manufacturing credit evaluation. Using the FATE federated-learning framework, multiple enterprises train shared models without exposing raw telemetry, while advanced signal processing (WNSES) predicts remaining useful life and drives dynamic, privacy-preserving credit adjustment and asset securitization.',
  overview: 'A federated learning platform bridging industrial IoT telemetry with manufacturing credit evaluation. By processing high-frequency press-equipment vibration data locally and sharing only model weights via FATE, DeepVise enables banks to dynamically adjust credit lines based on real-time machine health while preserving enterprise data privacy.',
  metrics: [
    { label: 'Manufacturing GDP', value: '¥33.0T', type: 'measured' },
    { label: 'Industrial loan balance', value: '¥24.23T', type: 'measured' },
    { label: 'Portfolio volume', value: '¥85M', type: 'measured' },
    { label: 'Ports', value: 'Enterprise + Lender', type: 'target' },
  ],
  meta: {
    role: 'Lead Product Designer',
    team: '1 Designer, 2 Data Scientists, 1 ML Engineer',
    duration: '8 weeks',
    ownership: 'Research > Product Strategy > UX > UI Design',
    status: 'Competition Concept',
    tools: ['Figma', 'Python (FATE)', 'Data Visualization'],
  },
  decisions: [
    {
      id: 'dv-dec-01',
      question: 'How should raw machine health data be presented to financial officers?',
      evidence: 'Lenders lacked the domain expertise to interpret raw vibration data or spectral kurtosis charts.',
      alternatives: ['A. Show raw data', 'B. Abstract into a 0-100 score', 'C. Show binary healthy/unhealthy'],
      decision: 'Abstract into a 0-100 score with traffic light indicators.',
      why: 'Translates complex ML to an actionable financial risk metric that fits existing credit evaluation workflows.',
    },
    {
      id: 'dv-dec-02',
      question: 'Who initiates dynamic credit limit adjustments?',
      evidence: 'Enterprises feared that automated ML could suddenly reduce their credit lines without human oversight.',
      alternatives: ['A. Fully automatic adjustments', 'B. Bank proposes, enterprise approves', 'C. Enterprise requests based on health'],
      decision: 'Bank proposes, enterprise approves for reductions; automatic for increases.',
      why: 'Preserves trust by giving the enterprise agency over negative adjustments while automating positive ones.',
    },
  ],
  workflow: [
    { stage: 'Research', artifact: 'Financial and IoT domain research', tool: 'Literature review', judgment: 'Identified the gap between equipment depreciation and credit limits' },
    { stage: 'Architecture', artifact: 'Federated learning system map', tool: 'Diagramming', judgment: 'Selected FATE framework to ensure raw telemetry never leaves the factory' },
    { stage: 'System Design', artifact: 'Dual-port interface design', tool: 'Figma', judgment: 'Separated the industrial monitoring view from the financial portfolio view' },
    { stage: 'Prototype', artifact: 'High-fidelity dashboard', tool: 'Figma', judgment: 'Tested visualization of WNSES health indices with sample telemetry data' },
  ],
  formulas: [
    { name: 'WNSES', expr: 'κ_{l,h}(x̄_{l,h}[n]) = Σ_{n=1}^{N} NSE_{l,h}[n] × ω₁[n]^{-2}', note: 'Weighted Normalized Squared Envelope Sum. NSE is the normalized squared envelope; ω₁[n] = N · NSE_{l,h}[n] adaptively weights subtle transient bearing/motor anomalies.' },
    { name: 'FedMA', expr: 'W_q = (1/J) Σ_{j=1}^{J} W_{j,q} · Π_jᵀ', note: 'Federated Matched Averaging. A probability BBP-MAP cost matrix builds permutation matrix Π_j to align neurons, overcoming FedAvg misalignment.' },
  ],
  chapters: [
    {
      id: 'overview',
      number: '01',
      title: 'Platform Overview & Macro Context',
      images: [
        { file: 'DeepVise_01.png', title: 'Executive Platform Dashboard', caption: 'Machine P-01-042: Health Score 72/100 (Warning), vibration anomaly alert, credit-review recommendation, FATE tag.', rationale: 'Establishing the dual-domain monitoring value proposition.', tags: ['Overview'] },
        { file: 'DeepVise_02.png', title: 'Macro & Manufacturing Credit Context', caption: '¥33.0T manufacturing GDP; ¥24.23T industrial long-term loans (+15.1% YoY).', rationale: 'Establishing macroeconomic necessity.', tags: ['Research'] },
        { file: 'DeepVise_03.png', title: 'Dual-Port Table of Contents', caption: 'Market Need, Dual-Port Application, Equipment Health Science, Data Collaboration.', rationale: 'Clear structural overview.', tags: ['Structure'] },
        { file: 'DeepVise_04.png', title: 'Industrial Credit Demand Analysis', caption: 'Press-equipment market sizing (¥83.6B, 41.8% of forging machinery).', rationale: 'Identifying the target industrial asset class.', tags: ['Research'] },
        { file: 'DeepVise_05.png', title: 'Policy & Regulatory Drivers', caption: 'PBOC and MIIT notices supporting high-tech manufacturing finance.', rationale: 'Demonstrating regulatory alignment.', tags: ['Compliance'] },
        { file: 'DeepVise_06.png', title: 'Smart Manufacturing × FinTech Map', caption: 'IoT telemetry, ML, and dynamic credit scoring in one operating model.', rationale: 'Strategic domain integration.', tags: ['Strategy'] },
      ],
    },
    {
      id: 'pain-points',
      number: '02',
      title: 'Dual Pain-Point Analysis',
      images: [
        { file: 'DeepVise_07.png', title: 'Enterprise vs. Lender Pain Points', caption: 'Enterprise: delayed warnings, data silos, repair costs. Lender: static data, no post-loan tracking, privacy barriers.', rationale: 'Defining the exact problem space.', tags: ['Research'] },
        { file: 'DeepVise_08.png', title: 'Equipment Management Deep Dive', caption: 'Unpredicted downtime cost, spare-part lag, subjective manual inspection.', rationale: 'Justifying automated telemetry ingest.', tags: ['Research'] },
        { file: 'DeepVise_09.png', title: 'Credit Wind-Control Pain Points', caption: 'Lagging annual audits fail to reflect sudden operational shutdowns.', rationale: 'Justifying real-time telemetry-driven credit scoring.', tags: ['Research'] },
      ],
    },
    {
      id: 'architecture',
      number: '03',
      title: 'System & FATE Architecture',
      images: [
        { file: 'DeepVise_10.png', title: 'System Overview (Dual-Loop Model)', caption: 'Enterprise inner loop (telemetry → health → RUL) and lender outer loop (aggregation → credit → ABS).', rationale: 'Core systems-design diagram.', tags: ['Architecture'] },
        { file: 'DeepVise_11.png', title: 'FATE Federated Learning Infrastructure', caption: 'Privacy-preserving parameter exchange without raw data transfer.', rationale: 'Demonstrating data-privacy compliance.', tags: ['Architecture'] },
        { file: 'DeepVise_12.png', title: 'Solution Module Map', caption: 'Ingest, Health Scoring, FedMA Training, Dual-Port UI, Security Audit.', rationale: 'Platform module taxonomy.', tags: ['Architecture'] },
      ],
    },
    {
      id: 'dual-port',
      number: '04',
      title: 'Dual-Port Product UI',
      images: [
        { file: 'DeepVise_13.png', title: 'Dual Financial Port Selector', caption: 'deepvise.online: "Enterprise — Need Loan" vs. "Institution — Manage Assets".', rationale: 'Dual-audience entry UX.', tags: ['UI'] },
        { file: 'DeepVise_14.png', title: 'Role Selection & Identity Gateway', caption: 'Corporate wallet auth and enterprise identity verification.', rationale: 'Secure portal access control.', tags: ['Security'] },
        { file: 'DeepVise_15.png', title: 'Lending Institution Overview', caption: 'Portfolio ¥85M, avg rate 4.85%, 12 active enterprises, risk breakdown.', rationale: 'Multi-company portfolio monitoring.', tags: ['UI'] },
        { file: 'DeepVise_16.png', title: 'Dynamic Credit Adjustment', caption: 'Adjusting limits and rates based on real-time equipment health.', rationale: 'Automated risk-based loan pricing.', tags: ['Product'] },
        { file: 'DeepVise_17.png', title: '3D Industrial Digital Twin', caption: 'HIGHTOPO 3D render of a 5-station press line with health overlays.', rationale: 'Cutting-edge digital-twin presentation.', tags: ['UI'] },
      ],
    },
    {
      id: 'health-science',
      number: '05',
      title: 'Equipment Health Science & Math',
      images: [
        { file: 'DeepVise_18.png', title: 'Equipment Health Science Cover', caption: 'Transition into signal-processing math and sensor hardware.', rationale: 'Narrative section demarcation.', tags: ['Section'] },
        { file: 'DeepVise_19.png', title: 'ANSYS FEM & Vibration Ingest', caption: 'ANSYS R16.2 stress simulation of press frames and bearings.', rationale: 'Physics-based engineering validation.', tags: ['Engineering'] },
        { file: 'DeepVise_20.png', title: 'Feature Extraction Pipeline', caption: 'Vibration capture, Kurtosis, Negative Entropy, WNSES health index.', rationale: 'Feature-engineering specification.', tags: ['Engineering'] },
        { file: 'DeepVise_21.png', title: 'WNSES & Spectral Kurtosis Derivation', caption: 'Full formulas for Spectral Kurtosis, Negative Entropy, and WNSES weighting.', rationale: 'Rigorous mathematical proof.', tags: ['Math'] },
        { file: 'DeepVise_22.png', title: 'Adaptive Soft Thresholding', caption: 'Spectral kurtosis under normal ops vs. early bearing micro-cracks.', rationale: 'Anomaly-detection sensitivity proof.', tags: ['Math'] },
        { file: 'DeepVise_23.png', title: 'Transient Impulse & Weight Optimization', caption: 'ω₁[n] = N · NSE_{l,h}[n] isolating impact spikes from background noise.', rationale: 'Signal-processing rigor.', tags: ['Math'] },
      ],
    },
    {
      id: 'training',
      number: '06',
      title: 'Diagnostics & Federated Training',
      images: [
        { file: 'DeepVise_24.png', title: 'Fault Diagnostics & Alert Engine', caption: 'Multi-level thresholds (Notice → Warning → Critical) with recommendations.', rationale: 'Actionable maintenance UX.', tags: ['UI'] },
        { file: 'DeepVise_25.png', title: 'Offline vs. Online Training Pipeline', caption: 'Local model build → FedMA matching & aggregation → online RUL inference.', rationale: 'ML pipeline blueprint.', tags: ['Engineering'] },
        { file: 'DeepVise_26.png', title: 'FedAvg vs. FedMA Alignment', caption: 'Neuron misalignment in FedAvg vs. FedMA PDF matching.', rationale: 'Technical superiority proof of FedMA.', tags: ['Math'] },
        { file: 'DeepVise_27.png', title: 'BBP-MAP Cost Matrix & Permutation', caption: 'Cost matrix P, permutation Π_j, and full FedMA pseudocode.', rationale: 'Complete algorithmic specification.', tags: ['Math'] },
        { file: 'DeepVise_28.png', title: 'Edge Node & IoT Topology', caption: 'Sensors, PLC controllers, edge gateways, encrypted parameter broadcast.', rationale: 'Hardware & network topology.', tags: ['Architecture'] },
        { file: 'DeepVise_29.png', title: 'Multi-IoT I/O Pair Sharing', caption: 'Input/output pairs across M devices and N edge nodes.', rationale: 'Scalable data-ingest model.', tags: ['Architecture'] },
        { file: 'DeepVise_30.png', title: 'Automated Maintenance Generator', caption: 'Step-by-step repair guides, replacement parts, downtime windows.', rationale: 'Operational maintenance enablement.', tags: ['Product'] },
      ],
    },
    {
      id: 'governance',
      number: '07',
      title: 'Governance, Privacy & ABS',
      images: [
        { file: 'DeepVise_31.png', title: 'Data Collaboration & Privacy Cover', caption: 'Transition into inter-institutional security, differential privacy, ABS.', rationale: 'Section boundary marker.', tags: ['Section'] },
        { file: 'DeepVise_32.png', title: 'Service Blueprint & ABS Architecture', caption: '8-stage blueprint across Telemetry, Factory, App, Finance, Lender, Governance (E1–E32).', rationale: 'Comprehensive operational & legal blueprint.', tags: ['Architecture'] },
      ],
    },
  ],
};
