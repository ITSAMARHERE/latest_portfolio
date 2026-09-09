import { useEffect, useRef, useState } from "react";

/**
 * Subtle desktop-only cursor. Reads `data-cursor="View"` on hovered elements
 * to show a contextual label. Disabled on touch devices and reduced motion.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor],a,button,input,textarea",
      );
      if (!el) {
        setActive(false);
        setLabel(null);
        return;
      }
      setActive(true);
      setLabel(el.dataset["cursor"] ?? null);
    };

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 bg-accent/10 backdrop-blur-[1px] transition-[width,height,background-color] duration-300 ease-[var(--ease-out-expo)] grid place-items-center"
        style={{
          width: label ? 62 : active ? 34 : 14,
          height: label ? 62 : active ? 34 : 14,
        }}
      >
        {label ? (
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
