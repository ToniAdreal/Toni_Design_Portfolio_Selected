import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type MotionMode = "auto" | "reduced" | "full";

export interface MotionCapabilities {
  canSmoothScroll: boolean;
  canUsePointerFX: boolean;
  canUseCanvasMotion: boolean;
  canPinScenes: boolean;
}

export interface MotionState {
  mode: MotionMode;
  setMode: (m: MotionMode) => void;
  // Resolved: true when motion should be minimized (auto+system-reduced or reduced).
  reduced: boolean;
  capabilities: MotionCapabilities;
}

const MotionCtx = createContext<MotionState | null>(null);

const STORAGE_KEY = "toni-motion-mode";

function systemPrefersReduced(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function checkDeviceCapabilities(): { isDesktop: boolean; isFinePointer: boolean } {
  if (typeof window === "undefined") {
    return { isDesktop: true, isFinePointer: true };
  }
  const isDesktop = window.innerWidth >= 768;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  return { isDesktop, isFinePointer };
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<MotionMode>(() => {
    if (typeof window === "undefined") return "auto";
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "full" || saved === "reduced" ? saved : "auto";
    } catch { return "auto"; }
  });
  const [systemReduced, setSystemReduced] = useState(systemPrefersReduced);
  const [deviceCaps, setDeviceCaps] = useState(checkDeviceCapabilities);

  useEffect(() => {
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqPointer = window.matchMedia("(pointer: fine)");

    const updateSystem = () => setSystemReduced(mqReduced.matches);
    const updateDevice = () => setDeviceCaps(checkDeviceCapabilities());

    mqReduced.addEventListener("change", updateSystem);
    mqPointer.addEventListener("change", updateDevice);
    window.addEventListener("resize", updateDevice);

    return () => {
      mqReduced.removeEventListener("change", updateSystem);
      mqPointer.removeEventListener("change", updateDevice);
      window.removeEventListener("resize", updateDevice);
    };
  }, []);

  const setMode = (m: MotionMode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      /* ignore */
    }
  };

  const reduced = mode === "reduced" || (mode === "auto" && systemReduced);

  const capabilities: MotionCapabilities = useMemo(() => {
    if (reduced) {
      return {
        canSmoothScroll: false,
        canUsePointerFX: false,
        canUseCanvasMotion: false,
        canPinScenes: false,
      };
    }
    const { isDesktop, isFinePointer } = deviceCaps;
    return {
      canSmoothScroll: isDesktop && isFinePointer,
      canUsePointerFX: isDesktop && isFinePointer,
      canUseCanvasMotion: true,
      canPinScenes: isDesktop,
    };
  }, [reduced, deviceCaps]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const motionVal = reduced ? "reduced" : mode;
      document.documentElement.setAttribute("data-motion", motionVal);
    }
  }, [reduced, mode]);

  const value = useMemo(
    () => ({ mode, setMode, reduced, capabilities }),
    [mode, reduced, capabilities]
  );

  return <MotionCtx.Provider value={value}>{children}</MotionCtx.Provider>;
}

export function useMotionSetting(): MotionState {
  const ctx = useContext(MotionCtx);
  if (!ctx) throw new Error("useMotionSetting must be used within MotionProvider");
  return ctx;
}
