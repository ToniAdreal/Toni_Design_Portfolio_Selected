import { ImageWithFallback } from './figma/ImageWithFallback';

// Eagerly resolve any uploaded portfolio images living under src/imports.
// Real uploads will be matched by file name; until then a labeled placeholder renders.
const modules = import.meta.glob('/src/imports/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byName: Record<string, string> = {};
for (const path in modules) {
  const name = path.split('/').pop() ?? path;
  byName[name.toLowerCase()] = modules[path];
}

export function resolveImage(file: string): string | undefined {
  return byName[file.toLowerCase()];
}

interface Props {
  file: string;
  alt: string;
  className?: string;
  index?: string;
  contain?: boolean;
}

export function PortfolioImage({ file, alt, className, index, contain }: Props) {
  const src = resolveImage(file);
  const fit = contain ? 'object-contain' : 'object-cover';

  if (src) {
    return (
      <ImageWithFallback
        src={src}
        alt={alt}
        className={`h-full w-full ${fit} ${className ?? ''}`}
      />
    );
  }

  // Placeholder frame — swapped automatically once the real file is uploaded.
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-[#111113] text-center ${className ?? ''}`}
    >
      <span
        className="font-mono-tech text-[11px] uppercase tracking-widest"
        style={{ color: 'var(--toni-red)' }}
      >
        {index ? `Slot ${index}` : 'Image'}
      </span>
      <span className="font-mono-tech text-[11px] text-white/40">{file}</span>
      <span className="max-w-[70%] font-body text-[11px] text-white/25">
        Upload this file to src/imports to render
      </span>
    </div>
  );
}
