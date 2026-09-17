export interface AtlasNode {
  id: string;
  slug: string;
  title: string;
  domain: string;
  year: string;
  state: string;
  evidenceStage: string;
  hasCaseStudy: boolean;
  // 3D coordinates on unit sphere
  uX: number;
  uY: number;
  uZ: number;
  // Screen projections
  screenX: number;
  screenY: number;
  screenZ: number;
  scale: number;
  isFront: boolean;
}

export interface AtlasState {
  rotationX: number;
  rotationY: number;
  targetRotationX: number;
  targetRotationY: number;
  velocityX: number;
  velocityY: number;
  isDragging: boolean;
  activeNodeId: string;
  hoverNodeId: string | null;
}

export const ATLAS_PROJECTS = [
  {
    id: "tokenta-workflow",
    slug: "tokenta-workflow",
    title: "Tokenta Workflow OS",
    domain: "Product Design & AI",
    year: "2024",
    state: "Shipped",
    evidenceStage: "Outcome",
    hasCaseStudy: true,
  },
  {
    id: "allweb3-escrow",
    slug: "allweb3-escrow",
    title: "ALLWEB3 Escrow",
    domain: "Systems & Web3",
    year: "2023",
    state: "Shipped",
    evidenceStage: "System",
    hasCaseStudy: false,
  },
  {
    id: "next-card",
    slug: "next-card",
    title: "Next Card",
    domain: "Commerce & UX",
    year: "2023",
    state: "Prototype",
    evidenceStage: "Decision",
    hasCaseStudy: false,
  },
  {
    id: "cyberorigin-signals",
    slug: "cyberorigin-signals",
    title: "CyberOrigin Signals",
    domain: "Design Engineering",
    year: "2022",
    state: "Shipped",
    evidenceStage: "System",
    hasCaseStudy: false,
  },
  {
    id: "eval-harness",
    slug: "eval-harness",
    title: "AI Evaluation Harness",
    domain: "AI & Research",
    year: "2023",
    state: "Research",
    evidenceStage: "Evidence",
    hasCaseStudy: false,
  },
  {
    id: "type-field",
    slug: "type-field",
    title: "Generative Type Field",
    domain: "Research & Motion",
    year: "2024",
    state: "Concept",
    evidenceStage: "Question",
    hasCaseStudy: false,
  },
];

export function createInitialNodes(): AtlasNode[] {
  const count = ATLAS_PROJECTS.length;
  return ATLAS_PROJECTS.map((p, i) => {
    // Distribute nodes evenly on spherical coordinates using golden spiral
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    const uX = Math.cos(theta) * Math.sin(phi);
    const uY = Math.cos(phi) * 0.85; // slight vertical compression
    const uZ = Math.sin(theta) * Math.sin(phi);

    return {
      ...p,
      uX,
      uY,
      uZ,
      screenX: 0,
      screenY: 0,
      screenZ: 0,
      scale: 1,
      isFront: true,
    };
  });
}

export function renderEvidenceAtlas(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: AtlasNode[],
  state: AtlasState,
  reduced = false
): AtlasNode | null {
  ctx.clearRect(0, 0, width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * (width < 768 ? 0.36 : 0.32);
  const focalLength = radius * 2.8;

  // 1. Render orbital background rings
  ctx.save();
  ctx.strokeStyle = "rgba(49, 93, 255, 0.12)";
  ctx.lineWidth = 1;

  // Equator ellipse
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radius, radius * 0.38, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Subtle outer boundary circle
  ctx.strokeStyle = "rgba(245, 246, 247, 0.05)";
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // 2. Project nodes in 3D
  const cosY = Math.cos(state.rotationY);
  const sinY = Math.sin(state.rotationY);
  const cosX = Math.cos(state.rotationX);
  const sinX = Math.sin(state.rotationX);

  for (const node of nodes) {
    // 3D rotation around Y then X
    const x1 = node.uX * cosY + node.uZ * sinY;
    const z1 = -node.uX * sinY + node.uZ * cosY;

    const y2 = node.uY * cosX - z1 * sinX;
    const z2 = node.uY * sinX + z1 * cosX;

    const pX = x1 * radius;
    const pY = y2 * radius;
    const pZ = z2 * radius;

    const perspective = focalLength / (focalLength - pZ);
    node.screenX = centerX + pX * perspective;
    node.screenY = centerY + pY * perspective;
    node.screenZ = pZ;
    node.scale = Math.max(0.6, Math.min(1.4, perspective));
    node.isFront = pZ > -radius * 0.15;
  }

  // Sort nodes from back to front for correct occlusion
  const sortedNodes = [...nodes].sort((a, b) => a.screenZ - b.screenZ);

  // 3. Draw inter-node connecting arcs
  ctx.save();
  for (let i = 0; i < sortedNodes.length; i++) {
    const n1 = sortedNodes[i];
    const n2 = sortedNodes[(i + 1) % sortedNodes.length];

    const isFwd = n1.isFront && n2.isFront;
    ctx.strokeStyle = isFwd ? "rgba(49, 93, 255, 0.35)" : "rgba(245, 246, 247, 0.06)";
    ctx.lineWidth = isFwd ? 1.5 : 0.8;
    if (!isFwd) ctx.setLineDash([3, 4]);
    else ctx.setLineDash([]);

    ctx.beginPath();
    ctx.moveTo(n1.screenX, n1.screenY);
    ctx.lineTo(n2.screenX, n2.screenY);
    ctx.stroke();
  }
  ctx.restore();

  // 4. Draw individual nodes
  let hoveredNode: AtlasNode | null = null;

  for (const node of sortedNodes) {
    const isSelected = node.id === state.activeNodeId;
    const isHovered = node.id === state.hoverNodeId;
    if (isHovered) hoveredNode = node;

    const baseAlpha = node.isFront ? (isSelected ? 1.0 : 0.85) : 0.25;
    const nodeRadius = (isSelected ? 14 : isHovered ? 12 : 8) * node.scale;

    // Node core circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(node.screenX, node.screenY, nodeRadius, 0, Math.PI * 2);

    if (isSelected) {
      ctx.fillStyle = "#315DFF";
      ctx.shadowColor = "#315DFF";
      ctx.shadowBlur = 18;
      ctx.fill();

      // Outer ripple ring for active node
      ctx.strokeStyle = "rgba(49, 93, 255, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(node.screenX, node.screenY, nodeRadius + 6, 0, Math.PI * 2);
      ctx.stroke();
    } else if (isHovered) {
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "#315DFF";
      ctx.shadowBlur = 12;
      ctx.fill();
    } else {
      ctx.fillStyle = node.isFront ? "#1A2238" : "#10141E";
      ctx.strokeStyle = node.isFront ? "#315DFF" : "rgba(245, 246, 247, 0.2)";
      ctx.lineWidth = node.isFront ? 1.5 : 1;
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();

    // Node label (only for front nodes or active node)
    if (node.isFront || isSelected) {
      ctx.save();
      ctx.font = `${Math.round(11 * node.scale)}px "IBM Plex Mono", monospace`;
      ctx.fillStyle = isSelected
        ? "#315DFF"
        : `rgba(245, 246, 247, ${baseAlpha})`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const labelY = node.screenY + nodeRadius + 14;
      ctx.fillText(node.title, node.screenX, labelY);

      // Sub-label for active node
      if (isSelected) {
        ctx.font = `${Math.round(9 * node.scale)}px "IBM Plex Mono", monospace`;
        ctx.fillStyle = "rgba(167, 171, 178, 0.9)";
        ctx.fillText(`[ ${node.evidenceStage} · ${node.year} ]`, node.screenX, labelY + 14);
      }
      ctx.restore();
    }
  }

  return hoveredNode;
}
