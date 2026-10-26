import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { zhDictionary, zhDictionaryLower } from "./zh/index";

export type Language = "en" | "zh";

const STORAGE_KEY = "toni-portfolio-lang";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}>({ lang: "en", setLang: () => {}, toggleLang: () => {} });

export function useLanguage() {
  return useContext(LanguageContext);
}

/* ------------------------------------------------------------------ */
/* DOM translation engine                                              */
/*                                                                     */
/* The case-study decks contain thousands of hard-coded English        */
/* strings inside bespoke slide components. Translating them through   */
/* a rendered-text dictionary keeps English mode byte-identical (the   */
/* engine is fully detached in English) while Chinese mode rewrites    */
/* text nodes and accessible labels in place. Originals are kept in    */
/* WeakMaps so toggling back restores the exact original strings,      */
/* including strings React swaps into reused text nodes at runtime.    */
/* ------------------------------------------------------------------ */

const SKIP_SELECTOR =
  "script, style, code, pre, [data-no-translate], .ref-work-title-display";
const ATTRS = ["aria-label", "title", "placeholder", "alt"] as const;

// Longest phrases first so multi-word entries beat single words.
const PHRASES = Object.entries(zhDictionary)
  .filter(([en]) => en.length >= 3 && /\s/.test(en))
  .sort((a, b) => b[0].length - a[0].length);

function normalize(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function lookup(core: string): string | null {
  const exact = zhDictionary[core] ?? zhDictionaryLower.get(core.toLowerCase());
  return exact ?? null;
}

const isWordChar = (ch: string | undefined) =>
  ch !== undefined && /[A-Za-z0-9]/.test(ch);

function replacePhrases(core: string): string {
  let out = core;
  for (const [en, zh] of PHRASES) {
    if (!out.includes(en) && !out.toLowerCase().includes(en.toLowerCase())) continue;
    // Case-sensitive pass first, then a case-insensitive pass.
    for (const insensitive of [false, true]) {
      const hay = insensitive ? out.toLowerCase() : out;
      const needle = insensitive ? en.toLowerCase() : en;
      let idx = hay.indexOf(needle);
      if (idx === -1) continue;
      let result = "";
      let cursor = 0;
      while (idx !== -1) {
        const before = out[idx - 1];
        const after = out[idx + en.length];
        const bounded =
          (!isWordChar(en[0]) || !isWordChar(before)) &&
          (!isWordChar(en[en.length - 1]) || !isWordChar(after));
        result += out.slice(cursor, idx);
        result += bounded ? zh : out.slice(idx, idx + en.length);
        cursor = idx + en.length;
        idx = hay.indexOf(needle, cursor);
      }
      result += out.slice(cursor);
      out = result;
      if (!insensitive) break;
    }
    if (out === zh) break;
  }
  return out;
}

export function translateString(input: string): string {
  if (!/[A-Za-z]{2}/.test(input)) return input;
  const lead = input.match(/^\s*/)?.[0] ?? "";
  const trail = input.match(/\s*$/)?.[0] ?? "";
  const core = normalize(input);
  if (!core) return input;
  const exact = lookup(core);
  if (exact) return lead + exact + trail;
  const replaced = replacePhrases(core);
  return lead + replaced + trail;
}

interface TextState {
  original: string;
  expected: string;
}
interface AttrState {
  original: string;
  expected: string;
}

class DomTranslator {
  private textState = new WeakMap<Text, TextState>();
  private attrState = new WeakMap<Element, Map<string, AttrState>>();
  private observer: MutationObserver | null = null;
  private active = false;

  private translateTextNode(node: Text) {
    const parent = node.parentElement;
    if (!parent || parent.closest(SKIP_SELECTOR)) return;
    const current = node.nodeValue ?? "";
    let state = this.textState.get(node);
    if (!state) {
      state = { original: current, expected: current };
      this.textState.set(node, state);
    } else if (current !== state.expected && current !== state.original) {
      // React (or the app) wrote a new string into a reused node.
      state.original = current;
    } else if (current === state.original && state.expected !== state.original) {
      // Already showing the original (e.g. fresh render before we ran).
    } else if (current !== state.expected) {
      state.original = current;
    }
    const translated = translateString(state.original);
    state.expected = translated;
    if (translated !== current) node.nodeValue = translated;
  }

  private restoreTextNode(node: Text) {
    const state = this.textState.get(node);
    if (state && node.nodeValue !== state.original) node.nodeValue = state.original;
    if (state) state.expected = state.original;
  }

  private translateAttrs(el: Element) {
    if (el.closest(SKIP_SELECTOR)) return;
    let map = this.attrState.get(el);
    if (!map) {
      map = new Map();
      this.attrState.set(el, map);
    }
    for (const attr of ATTRS) {
      const current = el.getAttribute(attr);
      if (current === null) continue;
      let state = map.get(attr);
      if (!state) {
        state = { original: current, expected: current };
        map.set(attr, state);
      } else if (current !== state.expected && current !== state.original) {
        state.original = current;
      }
      const translated = translateString(state.original);
      state.expected = translated;
      if (translated !== current) el.setAttribute(attr, translated);
    }
  }

  private restoreAttrs(el: Element) {
    const map = this.attrState.get(el);
    if (!map) return;
    for (const [attr, state] of map) {
      if (el.getAttribute(attr) !== state.original) el.setAttribute(attr, state.original);
      state.expected = state.original;
    }
  }

  private walk(root: ParentNode, mode: "zh" | "en") {
    const walker = document.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    let n: Node | null;
    while ((n = walker.nextNode())) nodes.push(n as Text);
    for (const node of nodes) {
      if (mode === "zh") this.translateTextNode(node);
      else this.restoreTextNode(node);
    }
    const elements = (root as Element).querySelectorAll?.("*") ?? [];
    elements.forEach((el) => {
      if (mode === "zh") this.translateAttrs(el);
      else this.restoreAttrs(el);
    });
    // The root element itself may carry attributes (e.g. <html> children).
    if (root instanceof Element) {
      if (mode === "zh") this.translateAttrs(root);
      else this.restoreAttrs(root);
    }
  }

  start() {
    if (this.active) return;
    this.active = true;
    this.walk(document.documentElement, "zh");
    this.observer = new MutationObserver((mutations) => {
      if (!this.active) return;
      for (const m of mutations) {
        if (m.type === "characterData") {
          this.translateTextNode(m.target as Text);
        } else if (m.type === "attributes" && m.attributeName) {
          this.translateAttrs(m.target as Element);
        } else if (m.type === "childList") {
          m.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) this.translateTextNode(node as Text);
            else if (node.nodeType === Node.ELEMENT_NODE) this.walk(node as Element, "zh");
          });
        }
      }
    });
    this.observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRS],
    });
  }

  stop() {
    this.active = false;
    this.observer?.disconnect();
    this.observer = null;
    this.walk(document.documentElement, "en");
  }
}

const translator = new DomTranslator();

function readInitialLang(): Language {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() =>
    typeof window === "undefined" ? "en" : readInitialLang(),
  );
  const first = useRef(true);

  const setLang = useCallback((next: Language) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "zh" ? "en" : "zh")),
    [],
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private mode — language simply will not persist */
    }
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = lang;
    if (lang === "zh") {
      // Let React finish rendering the current route before rewriting.
      const raf = requestAnimationFrame(() => translator.start());
      return () => cancelAnimationFrame(raf);
    }
    if (!first.current) translator.stop();
    first.current = false;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      type="button"
      data-no-translate
      onClick={toggleLang}
      aria-pressed={lang === "zh"}
      aria-label={lang === "zh" ? "Switch language to English" : "切换为中文"}
      title={lang === "zh" ? "English" : "中文"}
      className={className ?? "lang-toggle"}
    >
      {lang === "zh" ? "EN" : "中文"}
    </button>
  );
}
