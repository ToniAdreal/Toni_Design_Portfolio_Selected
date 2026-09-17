import { useEffect, useRef } from "react";
import type { MotionValue } from "motion/react";
import { useFrameSubscription, useMotionKernel } from "../motion/MotionKernel";
import { useMotionSetting } from "../motion/MotionContext";

const vocabulary = [
  "toni", "proof", "design", "signal", "build", "system", "evidence",
  "product", "motion", "research", "interface", "code", "question", "real",
];

type FieldState = {
  width: number;
  height: number;
  visible: boolean;
  last: number;
  pointerX: number;
  pointerY: number;
  mask?: Uint8ClampedArray;
};

export default function ReferenceTypeField({ progress }: { progress: MotionValue<number> }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { pointerX, pointerY, scrollVelocity } = useMotionKernel();
  const { reduced } = useMotionSetting();
  const scene = useRef<FieldState>({ width: 0, height: 0, visible: true, last: 0, pointerX: -1, pointerY: -1 });

  const draw = (time: number) => {
    const node = canvas.current;
    const ctx = node?.getContext("2d");
    const { width: w, height: h, mask } = scene.current;
    if (!node || !ctx || !w || !h) return;
    ctx.clearRect(0, 0, w, h);

    const seconds = reduced ? 0 : time / 1000;
    scene.current.pointerX += (pointerX.get() - scene.current.pointerX) * .08;
    scene.current.pointerY += (pointerY.get() - scene.current.pointerY) * .08;
    const velocity = reduced ? 0 : Math.max(-18, Math.min(18, scrollVelocity.get()));
    const fontSize = w < 600 ? 10 : 11;
    const lineHeight = w < 600 ? 14 : 15;
    const columnWidth = w < 600 ? 45 : 54;
    const columns = Math.ceil(w / columnWidth) + 1;
    const rows = Math.ceil(h / lineHeight) + 4;
    ctx.font = `500 ${fontSize}px "Courier New", ui-monospace, monospace`;
    ctx.textBaseline = "middle";

    for (let column = 0; column < columns; column++) {
      const direction = column % 3 === 0 ? -1 : 1;
      const speed = (7 + (column * 7) % 19) * direction;
      const x = column * columnWidth + Math.sin(seconds * .19 + column * 1.7) * 5;
      const laneOffset = seconds * speed + velocity * (column % 2 ? .22 : -.12);

      for (let row = -2; row < rows; row++) {
        const wrapped = ((row * lineHeight + laneOffset) % (h + lineHeight * 3) + h + lineHeight * 3) % (h + lineHeight * 3);
        const y = wrapped - lineHeight;
        const sampleX = Math.max(0, Math.min(w - 1, Math.floor(x + columnWidth * .38)));
        const sampleY = Math.max(0, Math.min(h - 1, Math.floor(y)));
        const inName = Boolean(mask && [-9, 0, 9].some((offsetX) =>
          [-5, 0, 5].some((offsetY) => {
            const sx = Math.max(0, Math.min(w - 1, sampleX + offsetX));
            const sy = Math.max(0, Math.min(h - 1, sampleY + offsetY));
            return mask[(sy * w + sx) * 4 + 3] > 0;
          }),
        ));
        const distance = Math.hypot(x - scene.current.pointerX, y + h * .15 - scene.current.pointerY);
        const proximity = reduced ? 0 : Math.max(0, 1 - distance / 155);
        const edgeFade = Math.min(1, Math.max(0, y) / 44) * Math.min(1, Math.max(0, h - y) / 95);
        const wordIndex = Math.abs((column * 11 + row * 7 + Math.floor(seconds * Math.abs(speed) * .22))) % vocabulary.length;
        const nameToken = inName || Math.abs(row * 19 + column * 31) % 37 === 0;
        const token = nameToken ? "toni" : vocabulary[wordIndex];
        const clipped = token.slice(0, 3 + ((row + column * 2) & 3));
        const baseAlpha = nameToken ? (inName ? .33 : .25) : .055 + ((row * 13 + column * 17) % 9) * .008;
        const alpha = Math.min(.56, (baseAlpha + proximity * .20) * edgeFade);
        ctx.fillStyle = `rgba(25,28,31,${Math.max(0, alpha)})`;
        ctx.fillText(clipped, x + proximity * Math.sin(row) * 8, y);

        if ((row * 17 + column * 23) % 113 === 0 && edgeFade > .5) {
          ctx.fillStyle = `rgba(38,78,244,${inName ? .62 : .36})`;
          ctx.fillRect(x, y + 6, 15 + (column % 3) * 7, 1.1);
        }
      }
    }

    ctx.save();
    ctx.font = `600 ${w < 600 ? 11 : 13}px "Courier New", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(19,22,25,.58)";
    const nameY = h * .54 + Math.sin(seconds * .7) * 10;
    ["t", "o", "n", "i"].forEach((letter, index) => ctx.fillText(letter, w * .5 - 45 + index * 30, nameY));
    ctx.restore();

    // A restrained dashed registration outline makes TONI discoverable while
    // the darker microtype continues to move through the letterforms.
    ctx.save();
    const nameSize = Math.min(w * .235, h * .33);
    ctx.font = `700 ${nameSize}px "Courier New", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 1;
    ctx.setLineDash([1.5, 4]);
    ctx.strokeStyle = "rgba(24,27,30,.13)";
    ctx.strokeText("TONI", w * .5, h * .54);
    ctx.restore();

    if (!reduced) {
      const scanY = (seconds * 31) % (h + 90) - 45;
      const gradient = ctx.createLinearGradient(0, scanY - 18, 0, scanY + 18);
      gradient.addColorStop(0, "rgba(51,84,245,0)");
      gradient.addColorStop(.5, "rgba(51,84,245,.045)");
      gradient.addColorStop(1, "rgba(51,84,245,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 18, w, 36);
    }
  };

  useEffect(() => {
    const node = canvas.current;
    if (!node) return;
    const resize = () => {
      const w = Math.max(1, Math.round(node.clientWidth));
      const h = Math.max(1, Math.round(node.clientHeight));
      const dpr = Math.min(window.devicePixelRatio, w < 768 ? 1 : 1.5);
      scene.current.width = w;
      scene.current.height = h;
      node.width = Math.round(w * dpr);
      node.height = Math.round(h * dpr);
      node.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = w;
      maskCanvas.height = h;
      const maskContext = maskCanvas.getContext("2d", { willReadFrequently: true });
      if (maskContext) {
        const size = Math.min(w * .235, h * .33);
        maskContext.font = `700 ${size}px "Courier New", monospace`;
        maskContext.textAlign = "center";
        maskContext.textBaseline = "middle";
        maskContext.fillStyle = "#000";
        maskContext.fillText("TONI", w * .5, h * .54);
        scene.current.mask = maskContext.getImageData(0, 0, w, h).data;
      }
      draw(0);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(node);
    const observer = new IntersectionObserver(([entry]) => { scene.current.visible = entry.isIntersecting; });
    observer.observe(node);
    resize();
    return () => { resizeObserver.disconnect(); observer.disconnect(); };
  }, [reduced]);

  useFrameSubscription((time) => {
    if (!scene.current.visible || progress.get() > .73 || time - scene.current.last < 32) return;
    scene.current.last = time;
    draw(time);
  }, !reduced);

  return <canvas ref={canvas} className="reference-type-canvas" aria-hidden="true" />;
}
