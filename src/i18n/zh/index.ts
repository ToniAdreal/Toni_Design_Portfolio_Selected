import { commonZh } from "./common";
import { shellZh } from "./shell";
import { tokentaZh } from "./tokenta";
import { nextCardZh } from "./nextCard";
import { aurionxZh } from "./aurionx";
import { allweb3Zh } from "./allweb3";
import { dataquestZh } from "./dataquest";
import { deepviseZh } from "./deepvise";
import { brewopsZh } from "./brewops";
import { mengniuZh } from "./mengniu";
import { hackathonZh } from "./hackathon";
import { kitZh } from "./kit";
import { fixesZh } from "./fixes";

// Merge order: generic vocabulary first, deck dictionaries next (they win
// on context-specific conflicts), shell chrome last for UI consistency.
export const zhDictionary: Record<string, string> = {
  ...commonZh,
  ...kitZh,
  ...tokentaZh,
  ...nextCardZh,
  ...aurionxZh,
  ...allweb3Zh,
  ...dataquestZh,
  ...deepviseZh,
  ...brewopsZh,
  ...mengniuZh,
  ...hackathonZh,
  ...shellZh,
  ...fixesZh,
};

// Case-insensitive lookup for ALL-CAPS / Capitalized renderings of the
// same source string. First writer wins so deck entries keep priority
// in insertion order above.
export const zhDictionaryLower = new Map<string, string>();
for (const [en, zh] of Object.entries(zhDictionary)) {
  const key = en.toLowerCase();
  if (!zhDictionaryLower.has(key)) zhDictionaryLower.set(key, zh);
}
