import type { ReactNode } from "react";
import { KitScreen, type GalleryImage } from "./kit";
import { tokentaInteractiveFor } from "./TokentaInteractive";
import { tokentaSlideFor } from "./TokentaSlides";
import { NextCardHeroApp, NextCardWireframeWall } from "./NextCardApp";
import { AurionXTVDesignSystem, AurionXVisualIdentity } from "./AurionXDesignSystem";
import {
  Allweb3FeeCalculator, Allweb3Milestones, Allweb3Reputation, Allweb3Settlement,
  AurionXGlobalVoice, AurionXHighlightConfig, AurionXSceneRecall,
  BrewOpsControlTower, BrewOpsCopilot, BrewOpsScenario,
  DataQuestLifecycle, DataQuestReviewer, DataQuestTaskFeed,
  DeepViseDashboard, DeepVisePortSelector,
  MengniuAlertCenter, MengniuBarnTwin, MengniuCommandCenter,
  NextCardApplicationFlow, NextCardRewardEngine, NextCardValueEngines, NextCardValueTriangle,
} from "./ProjectScreens";
import { ChatPackCard, OpenTelemetryPR, VerifyGateDemo, VerifyPayEscrow } from "./HackathonScreens";

/**
 * Interactive V2 registry.
 *
 * Resolution order for every gallery slot:
 *  1. A bespoke rebuild keyed by file name (used where the printed
 *     screen itself was read and transcribed) or by data title.
 *  2. KitScreen — the shared chapter explorer built from the case
 *     study's own data (titles, captions, rationale, metrics,
 *     formulas, decisions, workflow).
 * The case-study shell, captions and rationale are never changed.
 */

const KNOWN_SLUGS = new Set([
  "next-card", "aurionx", "deepvise", "allweb3",
  "budweiser", "cyberorigin", "mengniu", "tokenta", "hackathon",
]);

type ChapterLike = { id: string; title: string; images?: GalleryImage[] };

function bespoke(slug: string, chapter: ChapterLike, image: GalleryImage): ReactNode | null {
  const file = image.src.split("/").pop() ?? "";
  const title = image.alt;

  if (slug === "tokenta") return tokentaSlideFor(file) ?? tokentaInteractiveFor(chapter.id, title);

  if (slug === "next-card") {
    if (file.startsWith("Next_Card_Image_01")) return <NextCardHeroApp />;
    if (file.startsWith("Next_Card_Image_34")) return <NextCardWireframeWall />;
    if (file.startsWith("Next_Card_Image_22")) return <NextCardValueEngines />;
    if (file.startsWith("Next_Card_Image_23")) return <NextCardValueTriangle />;
    if (title === "Step 1 — ID OCR & Biometric Liveness") return <NextCardApplicationFlow />;
    if (title === "Reward Engine Logic & Category Rules") return <NextCardRewardEngine />;
  }
  if (slug === "aurionx") {
    if (file.startsWith("AurionX_17_")) return <AurionXVisualIdentity />;
    if (file.startsWith("AurionX_18_")) return <AurionXTVDesignSystem />;
    if (file.startsWith("AurionX_21_")) return <AurionXSceneRecall />;
    if (file.startsWith("AurionX_26_")) return <AurionXHighlightConfig />;
    if (file.startsWith("AurionX_32_")) return <AurionXGlobalVoice />;
  }
  if (slug === "deepvise") {
    if (title === "Executive Platform Dashboard") return <DeepViseDashboard />;
    if (title === "Dual Financial Port Selector") return <DeepVisePortSelector />;
    if (title === "Lending Institution Overview") return <DeepVisePortSelector />;
    if (title === "Fault Diagnostics & Alert Engine") return <DeepViseDashboard />;
  }
  if (slug === "allweb3") {
    if (title === "Deterministic Fee Calculator & Escrow Preview") return <Allweb3FeeCalculator />;
    if (title === "Creator Profile & Reputation Scorecard") return <Allweb3Reputation />;
    if (title === "Automated Escrow Release & Settlement") return <Allweb3Settlement />;
    if (title === "Task Workspace & Milestone Tracker") return <Allweb3Milestones />;
  }
  if (slug === "budweiser") {
    if (title === "Global Control Tower Overview") return <BrewOpsControlTower />;
    if (title === "Scenario Planning Sandbox") return <BrewOpsScenario />;
    if (title === "BrewOps AI Copilot Interface") return <BrewOpsCopilot />;
  }
  if (slug === "cyberorigin") {
    if (title === "State Machine: Task Lifecycle") return <DataQuestLifecycle />;
    if (title === "Dashboard & Task Feed") return <DataQuestTaskFeed />;
    if (title === "Reviewer Workspace Overview") return <DataQuestReviewer />;
  }
  if (slug === "mengniu") {
    if (title === "Command Center Dashboard") return <MengniuCommandCenter />;
    if (title === "Intelligent Alert Center") return <MengniuAlertCenter />;
    if (title === "Digital Twin Barn Interface") return <MengniuBarnTwin />;
  }
  if (slug === "hackathon") {
    if (title === "VerifyGate Overview") return <VerifyGateDemo />;
    if (title === "Hash-Chained Evidence Record") return <VerifyGateDemo />;
    if (title === "VerifyPay — Verifier-Gated USDC Escrow") return <VerifyPayEscrow />;
    if (title === "PassGate — Agentic Banking Concept") return <VerifyPayEscrow />;
    if (title === "ChatPack — Browser Extension") return <ChatPackCard />;
    if (title === "OpenTelemetry PR #9238 — Merged") return <OpenTelemetryPR />;
  }
  return null;
}

export function interactiveFor(slug: string | undefined, chapter: ChapterLike, image: GalleryImage, index: number): ReactNode | null {
  if (!slug || !KNOWN_SLUGS.has(slug)) return null;
  const hit = bespoke(slug, chapter, image);
  if (hit) return hit;
  const images = chapter.images ?? [image];
  return <KitScreen slug={slug} chapterTitle={chapter.title} images={images} activeIndex={index} />;
}
