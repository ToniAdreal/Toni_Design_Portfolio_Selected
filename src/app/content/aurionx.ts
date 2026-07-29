import type { Project } from './types';

export const aurionx: Project = {
  slug: 'aurionx',
  index: '02',
  name: 'AurionX',
  tagline: 'AI-Native Viewing Layer for Smart Televisions',
  context: 'Sony "Start Your Dreams" Innovation Competition',
  accent: '--acc-aurionx',
  summary:
    'Submitted under Sony Topic 1 "Big Screen for Young Gen\'s Lifestyle." AurionX solves 10-foot living-room friction through semantic voice queries, ambient computer-vision sensors, a 5-minute intelligent cut, and zero-shot speech-to-speech AI dubbing — integrated with BRAVIA OS and the PlayStation ecosystem. Evaluated on 100 points across five equal 20-point dimensions.',
  metrics: [
    { label: 'SUS score', value: '88.5 / 100' },
    { label: 'Task completion', value: '96%' },
    { label: 'Scene-search time', value: '-70%' },
    { label: 'Evaluation', value: '5 × 20 pts' },
  ],
  chapters: [
    {
      id: 'overview',
      number: '01',
      title: 'Hero & Overview',
      images: [
        { file: 'AurionX_01_Cinematic_Hero.png', title: 'Cinematic Living Room TV', caption: 'Ultra-thin-bezel Sony TV with the AurionX AI audio-waveform overlay ("AurionX is listening").', rationale: 'Setting a premium, 10-foot ambient visual tone.', tags: ['Hero'] },
        { file: 'AurionX_02_Three-Feature_Overview.png', title: 'Core Pillar Breakdown', caption: 'Scene Recall, 5-Minute Intelligent Cut, and Global Voice Dubbing.', rationale: 'Establishing clear product taxonomy.', tags: ['Overview'] },
        { file: 'AurionX_03_Project_at_a_Glance.png', title: 'Executive Summary & Submission', caption: 'Project scope, solo-ownership breakdown, alignment with Sony\'s mandate.', rationale: 'Strategic framing for competition judges.', tags: ['Strategy'] },
        { file: 'AurionX_04_Solo_Ownership_Timeline.png', title: 'End-to-End Roadmap', caption: 'Milestones across research, prototyping, UI, and AI pipeline integration.', rationale: 'Proving execution capability.', tags: ['Process'] },
        { file: 'AurionX_05_Competition_Brief_Reconstruction.png', title: 'Sony Topic 1 Deconstruction', caption: 'Mapping prompt requirements to solution modules.', rationale: 'Demonstrating 100% topic matchiness.', tags: ['Strategy'] },
      ],
    },
    {
      id: 'problem',
      number: '02',
      title: 'Problem Space',
      images: [
        { file: 'AurionX_06_The_Television_Interaction_Problem.png', title: '10-Foot Remote Control Friction', caption: 'D-pad navigation fatigue, text-input friction, buried content menus.', rationale: 'Defining the core problem space.', tags: ['Research'] },
        { file: 'AurionX_07_Movie_Discovery_Friction.png', title: 'Viewer Choice Paralysis', caption: 'Average 18-minute decision times before playing a movie.', rationale: 'Quantifying the market pain point.', tags: ['Research'] },
        { file: 'AurionX_08_Language_Access_Problem.png', title: 'Subtitle & Dubbing Barriers', caption: 'Friction from poorly translated subtitles and unnatural dubs.', rationale: 'Identifying the global entertainment barrier.', tags: ['Research'] },
      ],
    },
    {
      id: 'synthesis',
      number: '03',
      title: 'Research & Synthesis',
      images: [
        { file: 'AurionX_09_Research_Method_and_Evidence.png', title: 'Living-Room Field Studies', caption: 'Qualitative interviews and remote testing with Gen Z movie enthusiasts.', rationale: 'Empirical research foundation.', tags: ['Method'] },
        { file: 'AurionX_10_Insight_Synthesis.png', title: 'Affinity Matrix of Viewer Needs', caption: 'Natural voice queries, instant scene retrieval, personalized digests.', rationale: 'Translating raw research into requirements.', tags: ['Method'] },
        { file: 'AurionX_11_Opportunity_Prioritization_Matrix.png', title: 'Impact vs. Feasibility Quadrant', caption: 'Scoping the MVP feature set vs. exploratory ideas.', rationale: 'Strategic roadmap control.', tags: ['Strategy'] },
      ],
    },
    {
      id: 'foundations',
      number: '04',
      title: 'Principles, Scope & Architecture',
      images: [
        { file: 'AurionX_12_Product_Principles.png', title: '10-Foot UI Design Guidelines', caption: 'Viewing-distance ergonomics, large focus rings, minimal text, high contrast.', rationale: 'Establishing the TV UX baseline.', tags: ['Principles'] },
        { file: 'AurionX_13_Product_Scope.png', title: 'Feature & Ecosystem Boundaries', caption: 'Scope across BRAVIA OS, PS5 companion apps, and mobile remote triggers.', rationale: 'Clear platform architecture.', tags: ['Scope'] },
        { file: 'AurionX_14_AurionX_Product_Architecture.png', title: 'System Integration Architecture', caption: 'TV frontend, edge CV sensors, multimodal AI backend, media storage.', rationale: 'Technical design alignment.', tags: ['Architecture'] },
        { file: 'AurionX_15_Information_Architecture.png', title: 'TV Focus-State Navigation Tree', caption: 'D-pad directional flow across video, overlays, and control drawers.', rationale: 'Predictable remote navigation.', tags: ['IA'] },
        { file: 'AurionX_16_End-to-End_Experience_Map.png', title: 'Viewer Journey Timeline', caption: 'Emotional and operational curve before, during, and after watching.', rationale: 'Holistic experience optimization.', tags: ['UX'] },
      ],
    },
    {
      id: 'design-system',
      number: '05',
      title: 'Design System',
      images: [
        { file: 'AurionX_17_Visual_Identity_System.png', title: 'Design Tokens & Palette', caption: 'Glowing focus indicators, glassmorphism surfaces, cyan AI waveforms, type hierarchy.', rationale: 'Premium Sony aesthetic alignment.', tags: ['Design System'] },
        { file: 'AurionX_18_Television_Design_System.png', title: 'Modular TV UI Library', caption: 'Focus rings, scrubber timeline, voice states, timestamp cards, track selectors.', rationale: 'Scalable design-system components.', tags: ['Design System'] },
      ],
    },
    {
      id: 'scene-recall',
      number: '06',
      title: 'Scene Recall',
      images: [
        { file: 'AurionX_19_Scene_Recall_Scenario.png', title: 'Natural Voice Scene Retrieval', caption: '"Show me the battle scene on the icy lake from Episode 3" cues the exact timestamp.', rationale: 'Scenario-driven UX validation.', tags: ['Scenario'] },
        { file: 'AurionX_20_Scene_Recall_User_Flow.png', title: 'Voice Query → Playback Wireflow', caption: '3-step interaction minimizing menu steps.', rationale: 'Streamlined user task flow.', tags: ['UX'] },
        { file: 'AurionX_21_High-Fidelity_Interaction_Sequence.png', title: 'Screen Transition Sequence', caption: 'Voice activation, semantic search, scene timestamp overlay.', rationale: 'Micro-interaction clarity.', tags: ['UI'] },
        { file: 'AurionX_22_Scene_Index_Anatomy.png', title: 'Scene Card Anatomy', caption: 'Thumbnail, confidence score, dialogue preview, character tags.', rationale: 'Precision visual hierarchy.', tags: ['UI'] },
        { file: 'AurionX_23_Scene_Recall_Technical_Pipeline.png', title: 'Multimodal Semantic Indexing', caption: 'Transcript parsing, CLIP embeddings, vector storage, real-time timestamp matching.', rationale: 'Technical feasibility proof for judges.', tags: ['Engineering'] },
        { file: 'AurionX_24_Error_and_Clarification_States.png', title: 'Low-Confidence Query Handling', caption: 'Ambiguous commands prompt simple D-pad option selection.', rationale: 'Robust edge-case management.', tags: ['UX'] },
      ],
    },
    {
      id: 'five-minute',
      number: '07',
      title: '5-Minute Intelligent Cut',
      images: [
        { file: 'AurionX_25_Five-Minute_Cut_Scenario.png', title: 'Intelligent Movie Digest', caption: 'A personalized 5-minute highlight reel for time-limited users.', rationale: 'Addressing Gen Z fast-content habits.', tags: ['Scenario'] },
        { file: 'AurionX_26_Highlight_Configuration_UI.png', title: 'Digest Parameter Controls', caption: 'Duration (3/5/10 min) and focus (Action, Plot, Character arcs).', rationale: 'Personalized content customization.', tags: ['UI'] },
        { file: 'AurionX_27_Highlight_Selection_Storyboard.png', title: 'Automated Digest Storyboard', caption: 'AI-selected key scenes with smooth chapter crossfades.', rationale: 'Content flow UX.', tags: ['UX'] },
        { file: 'AurionX_28_Five-Minute_Cut_Technical_Pipeline.png', title: 'Summarization Architecture', caption: 'Scene-importance weights, audio energy peaks, narrative continuity rules.', rationale: 'Engineering rigor.', tags: ['Engineering'] },
        { file: 'AurionX_29_Generated_Output_Comparison.png', title: 'Before vs. After Summary Quality', caption: 'Manual editing cuts vs. AI-generated highlights.', rationale: 'Demonstrating output quality.', tags: ['Evidence'] },
        { file: 'AurionX_30_Progress_and_Control_States.png', title: 'Generation & Scrubbing States', caption: 'Radial progress loader, cancellation modal, instant playback buffer.', rationale: 'Clear system-status feedback.', tags: ['UI'] },
      ],
    },
    {
      id: 'global-voice',
      number: '08',
      title: 'Global Voice Dubbing',
      images: [
        { file: 'AurionX_31_Global_Voice_Before_and_After.png', title: 'Subtitles vs. AI Voice Dubbing', caption: 'Shift from text overlays to emotion-matched speech-to-speech dubbing.', rationale: 'Highlighting the accessibility breakthrough.', tags: ['Scenario'] },
        { file: 'AurionX_32_Language_and_Voice_Setup.png', title: 'Dialect & Voice Sync Controls', caption: 'Target language, accent locality, lip-sync calibration.', rationale: 'User-driven audio customization.', tags: ['UI'] },
        { file: 'AurionX_33_Global_Voice_Technical_Pipeline.png', title: 'Speech-to-Speech Architecture', caption: 'Vocal source separation, neural translation, timbre preservation, zero-shot cloning.', rationale: 'Cutting-edge AI systems engineering.', tags: ['Engineering'] },
        { file: 'AurionX_34_Quality_Ethics_and_Failure_States.png', title: 'Ethical Safeguards & Fallbacks', caption: 'AI-content disclaimers, copyright tags, original-audio fallback.', rationale: 'Responsible AI design principles.', tags: ['Ethics'] },
      ],
    },
    {
      id: 'system-outcome',
      number: '09',
      title: 'System, Evidence & Outcome',
      images: [
        { file: 'AurionX_35_Complete_System_Architecture.png', title: 'Full Ecosystem Wiring', caption: 'TV client, Ambient camera sensor, cloud AI inference, Sony services.', rationale: 'Comprehensive systems overview.', tags: ['Architecture'] },
        { file: 'AurionX_36_Implementation_Evidence.png', title: 'Working Prototype Evidence', caption: 'Runtime code capture, React component tree, API response logs.', rationale: 'Proving buildability.', tags: ['Evidence'] },
        { file: 'AurionX_37_Testing_and_Evaluation.png', title: 'Usability Metrics', caption: 'SUS 88.5/100, 96% task completion, 70% reduction in scene-search time.', rationale: 'Quantifiable UX success evidence.', tags: ['Evidence'] },
        { file: 'AurionX_38_Design_Iteration.png', title: 'Key-Screen Evolution', caption: 'Side-by-side progression across 3 iterations.', rationale: 'Reflective design process.', tags: ['Process'] },
        { file: 'AurionX_39_Final_Product_Ecosystem.png', title: 'Cross-Device Companion Suite', caption: 'Synchronized UI across BRAVIA TV, PS5 dashboard, Xperia companion.', rationale: 'Multi-screen ecosystem synergy.', tags: ['Product'] },
        { file: 'AurionX_40_Project_Outcome.png', title: 'Competition Victory & Impact', caption: 'Award achievements and alignment with Sony\'s product vision.', rationale: 'Final impact summary.', tags: ['Impact'] },
        { file: 'AurionX_41_Reflection_and_Next_Release.png', title: 'Future Roadmap & Spatial Vision', caption: 'Reflections on 10-foot interaction and future Spatial Reality Displays.', rationale: 'Forward-looking engineering vision.', tags: ['Reflection'] },
      ],
    },
  ],
};
