import type { ReactNode } from "react";
import { KitScreen, type GalleryImage } from "./kit";
import { SlideScale } from "./SlideScale";
import { tokentaInteractiveFor } from "./TokentaInteractive";
import { tokentaSlideFor } from "./TokentaSlides";
import { tokentaEarlyFor } from "./TokentaEarly";
import { tokentaBrandFor } from "./TokentaBrand";
import { aurionXChapterFor } from "./AurionXChapters";
import { allweb3ChapterFor } from "./Allweb3Chapters";
import { dataQuestChapterFor } from "./DataQuestChapters";
import { deepViseChapterFor } from "./DeepViseChapters";
import { brewOpsChapterFor } from "./BrewOpsChapters";
import { mengniuChapterFor } from "./MengniuChapters";
import { NextCardHeroApp, NextCardWireframeWall } from "./NextCardApp";
import { NextCardWireframeWallShowcase } from "./NextCardPhones";
import { nextCardChapterFor } from "./NextCardChapters";
import { AurionXTVDesignSystem, AurionXVisualIdentity } from "./AurionXDesignSystem";
import {
  AurionXGlobalVoice, AurionXHighlightConfig, AurionXSceneRecall,
  BrewOpsControlTower, BrewOpsCopilot, BrewOpsScenario,
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

  if (slug === "tokenta") return tokentaEarlyFor(file) ?? tokentaBrandFor(file) ?? tokentaSlideFor(file) ?? tokentaInteractiveFor(chapter.id, title);

  if (slug === "next-card") {
    if (file.startsWith("Next_Card_Image_01")) return <NextCardHeroApp />;
    if (file.startsWith("Next_Card_Image_34")) return <NextCardWireframeWallShowcase />;
    if (file.startsWith("Next_Card_Image_22")) return <NextCardValueEngines />;
    if (file.startsWith("Next_Card_Image_23")) return <NextCardValueTriangle />;
    if (title === "Step 1 — ID OCR & Biometric Liveness") return <NextCardApplicationFlow />;
    if (title === "Reward Engine Logic & Category Rules") return <NextCardRewardEngine />;
    const nc = nextCardChapterFor(file);
    if (nc) return nc;
  }
  if (slug === "aurionx") {
    const ch = aurionXChapterFor(file);
    if (ch) return ch;
    if (file.startsWith("AurionX_17_")) return <AurionXVisualIdentity />;
    if (file.startsWith("AurionX_18_")) return <AurionXTVDesignSystem />;
    if (file.startsWith("AurionX_21_")) return <AurionXSceneRecall />;
    if (file.startsWith("AurionX_26_")) return <AurionXHighlightConfig />;
    if (file.startsWith("AurionX_32_")) return <AurionXGlobalVoice />;
  }
  if (slug === "deepvise") {
    // File-keyed chapter dispatcher first — it covers every file in the
    // deck, including file 13 (Challenge Statement), whose data title was
    // rewritten from the actual slide; no title-keyed route may shadow it.
    const dv = deepViseChapterFor(file);
    if (dv) return dv;
    if (title === "Executive Platform Dashboard") return <DeepViseDashboard />;
    if (title === "Lending Institution Overview") return <DeepVisePortSelector />;
    if (title === "Fault Diagnostics & Alert Engine") return <DeepViseDashboard />;
  }
  if (slug === "allweb3") {
    // File-keyed chapter dispatcher covers all 19 files, including
    // 5/7/8/13 (rebuilt from the actual slides in Allweb3Rebuilds); their
    // data titles were rewritten from those slides, so the former
    // title-keyed ProjectScreens routes for them are removed.
    const aw = allweb3ChapterFor(file);
    if (aw) return aw;
  }
  if (slug === "budweiser") {
    const bo = brewOpsChapterFor(file);
    if (bo) return bo;
    if (title === "Global Control Tower Overview") return <BrewOpsControlTower />;
    if (title === "Scenario Planning Sandbox") return <BrewOpsScenario />;
    if (title === "BrewOps AI Copilot Interface") return <BrewOpsCopilot />;
  }
  if (slug === "cyberorigin") {
    // File-keyed chapter dispatcher covers all 40 files, including
    // 15/16/26 (rebuilt from the actual slides in DataQuestRebuilds);
    // their data titles were rewritten from those slides, so the former
    // title-keyed ProjectScreens routes for them are removed.
    const dq = dataQuestChapterFor(file);
    if (dq) return dq;
  }
  if (slug === "mengniu") {
    const mn = mengniuChapterFor(file);
    if (mn) return mn;
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

/**
 * Design-canvas width per component family (detail-fidelity pass):
 * slide-deck kits (.tks / .nc) are designed at 980px; the dense
 * product-UI kits (.ix / .tkx) were designed near-native at ~780px
 * and keep that canvas so their small mono type stays legible.
 */
function canvasWidth(slug: string, chapter: ChapterLike, image: GalleryImage): number {
  const file = image.src.split("/").pop() ?? "";
  const title = image.alt;
  // Pass 5: per-screen wide canvases for dense board screens whose
  // content is complete but cannot reach the printed aspect at 980px
  // without shrinking design type below legibility. A wider design
  // canvas scaled to the same figure keeps type proportionally
  // smaller — exactly how the printed slide itself works. Measured
  // before/after at 760px figure width in BUILD_NOTES §16.
  if (slug === "budweiser" && file.startsWith("Budweiser_45")) return 1470;
  if (slug === "deepvise" && file.startsWith("DeepVise_26")) return 1470;
  if (slug === "aurionx" && (file.startsWith("AurionX_17_") || file.startsWith("AurionX_18_"))) return 1280;
  switch (slug) {
    case "tokenta": return tokentaInteractiveFor(chapter.id, title) ? 780 : 980;
    case "next-card":
      if (file.startsWith("Next_Card_Image_01") || file.startsWith("Next_Card_Image_34")) return 980;
      return nextCardChapterFor(file) ? 980 : 780;
    case "aurionx":
      return aurionXChapterFor(file) ? 980 : 780;
    case "deepvise": return deepViseChapterFor(file) ? 980 : 780;
    case "allweb3": return allweb3ChapterFor(file) ? 980 : 780;
    case "budweiser": return brewOpsChapterFor(file) ? 980 : 780;
    case "cyberorigin": return dataQuestChapterFor(file) ? 980 : 780;
    case "mengniu": return mengniuChapterFor(file) ? 980 : 780;
    default: return 780;
  }
}

export function interactiveFor(slug: string | undefined, chapter: ChapterLike, image: GalleryImage, index: number): ReactNode | null {
  if (!slug || !KNOWN_SLUGS.has(slug)) return null;
  const hit = bespoke(slug, chapter, image);
  if (hit) return <SlideScale width={canvasWidth(slug, chapter, image)}>{hit}</SlideScale>;
  const images = chapter.images ?? [image];
  return <KitScreen slug={slug} chapterTitle={chapter.title} images={images} activeIndex={index} />;
}
