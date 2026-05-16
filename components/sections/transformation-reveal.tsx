"use client";

import { useRef, useState } from "react";
import { Flame, Phone, MousePointer2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Embers } from "@/components/ui/embers";
import { WordReveal } from "@/components/ui/word-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { asset } from "@/lib/asset";

const COMPOSITE = asset("/transformation.png");
const RADIUS = 80;

export function TransformationReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const update = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const layerStyle = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${COMPOSITE})`,
    backgroundSize: "200% 100%",
    backgroundPosition: side === "left" ? "0% center" : "100% center",
    backgroundRepeat: "no-repeat",
    imageRendering: "auto",
  });

  return (
    <section className="relative w-full px-4 md:px-8 py-20 bg-background overflow-hidden">
      <Embers count={14} />
      <div className="max-w-6xl mx-auto relative z-10">
        <Card className="bg-black/[0.96] border-ember-700/30 ember-glow overflow-hidden">
          <Spotlight className="-top-32 left-0" fill="#fb923c" />

          <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-300 text-sm w-fit mb-5">
                <Flame className="h-4 w-4" />
                See the transformation
              </div>
              <WordReveal
                text="Hover the body."
                as="h2"
                className="block text-4xl md:text-5xl font-bold fire-text leading-[1.05]"
              />
              <WordReveal
                text="See the future you."
                as="h2"
                className="block text-4xl md:text-5xl font-bold fire-text leading-[1.05] mb-4"
              />
              <p className="text-ember-100/80 text-lg mb-6">
                Move your cursor over the photo. Wherever you point, the
                version of you on the other side of the work shows through.
              </p>
              <div className="flex items-center gap-2 text-ember-300/80 text-xs uppercase tracking-widest mb-6">
                <MousePointer2 className="h-4 w-4" />
                <span>Drag your cursor across the photo</span>
              </div>
              <MagneticButton
                href="tel:+17252045655"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ember-500 text-white font-semibold hover:bg-ember-400 transition-colors w-fit shadow-[0_0_30px_rgba(249,115,22,0.55)]"
              >
                <Phone className="h-4 w-4" />
                Start your transformation
              </MagneticButton>
            </div>

            <div className="relative bg-black flex items-center justify-center p-4 md:p-6">
              <div
                ref={ref}
                onMouseMove={(e) => update(e.clientX, e.clientY)}
                onMouseLeave={() => setPos(null)}
                onTouchMove={(e) =>
                  update(e.touches[0].clientX, e.touches[0].clientY)
                }
                onTouchEnd={() => setPos(null)}
                className="sharpen relative aspect-[1/2] w-full max-w-[240px] overflow-hidden rounded-xl border border-ember-700/30 select-none touch-none"
                style={{ cursor: pos ? "none" : "crosshair" }}
              >
                <div style={layerStyle("left")} aria-label="Before" />

                <div
                  style={{
                    ...layerStyle("right"),
                    opacity: pos ? 1 : 0,
                    transition: "opacity 100ms ease",
                    clipPath: pos
                      ? `circle(${RADIUS}px at ${pos.x}px ${pos.y}px)`
                      : "circle(0px at 50% 50%)",
                    WebkitClipPath: pos
                      ? `circle(${RADIUS}px at ${pos.x}px ${pos.y}px)`
                      : "circle(0px at 50% 50%)",
                  }}
                  aria-label="After"
                />

                {pos && (
                  <div
                    className="absolute pointer-events-none rounded-full border-2 border-ember-300 shadow-[0_0_30px_rgba(249,115,22,0.65)]"
                    style={{
                      left: pos.x - RADIUS,
                      top: pos.y - RADIUS,
                      width: RADIUS * 2,
                      height: RADIUS * 2,
                    }}
                  />
                )}

                <div className="pointer-events-none absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 text-ember-200/80 text-[10px] uppercase tracking-widest">
                  Before
                </div>

                {pos && (
                  <div
                    className="pointer-events-none absolute px-2 py-0.5 rounded-md bg-ember-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                    style={{
                      left: Math.min(Math.max(pos.x - 22, 8), 160),
                      top: Math.max(pos.y - RADIUS - 26, 8),
                    }}
                  >
                    After
                  </div>
                )}

                {!pos && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 text-ember-200 text-[10px] uppercase tracking-widest pointer-events-none whitespace-nowrap">
                    Hover to reveal
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
