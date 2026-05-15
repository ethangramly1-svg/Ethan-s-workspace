"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Flame, Phone, MousePointer2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const BEFORE_SRC = "/transformation-before.jpg";
const AFTER_SRC = "/transformation-after.jpg";
const BEFORE_FALLBACK =
  "https://images.unsplash.com/photo-1611077542243-9c2acd7a09e2?q=80&w=900&auto=format&fit=crop";
const AFTER_FALLBACK =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop";

const RADIUS = 140;

export function TransformationReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const update = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: clientX - rect.left, y: clientY - rect.top });
  };

  return (
    <section className="w-full px-4 md:px-8 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-black/[0.96] border-ember-700/30 ember-glow overflow-hidden">
          <Spotlight className="-top-32 left-0" fill="#fb923c" />

          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-300 text-sm w-fit mb-5">
                <Flame className="h-4 w-4" />
                See the transformation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold fire-text mb-4">
                Hover the body.
                <br />
                See the future you.
              </h2>
              <p className="text-ember-100/80 text-lg mb-6">
                Move your cursor over the photo. Wherever you point, you&apos;ll
                see the shape that&apos;s waiting on the other side of the work.
              </p>
              <div className="flex items-center gap-2 text-ember-300/80 text-xs uppercase tracking-widest mb-6">
                <MousePointer2 className="h-4 w-4" />
                <span>Try it — drag your cursor across the photo</span>
              </div>
              <a
                href="tel:+17252045655"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ember-500 text-white font-semibold hover:bg-ember-400 transition-colors w-fit shadow-[0_0_30px_rgba(249,115,22,0.55)]"
              >
                <Phone className="h-4 w-4" />
                Start your transformation
              </a>
            </div>

            <div
              ref={ref}
              onMouseMove={(e) => update(e.clientX, e.clientY)}
              onMouseLeave={() => setPos(null)}
              onTouchMove={(e) =>
                update(e.touches[0].clientX, e.touches[0].clientY)
              }
              onTouchEnd={() => setPos(null)}
              className="relative aspect-[3/4] md:aspect-auto md:min-h-[560px] overflow-hidden bg-black select-none touch-none"
              style={{ cursor: pos ? "none" : "crosshair" }}
            >
              <RevealImage src={BEFORE_SRC} fallback={BEFORE_FALLBACK} alt="Before" />

              <div
                className="absolute inset-0 transition-opacity duration-100"
                style={{
                  opacity: pos ? 1 : 0,
                  clipPath: pos
                    ? `circle(${RADIUS}px at ${pos.x}px ${pos.y}px)`
                    : "circle(0px at 50% 50%)",
                  WebkitClipPath: pos
                    ? `circle(${RADIUS}px at ${pos.x}px ${pos.y}px)`
                    : "circle(0px at 50% 50%)",
                }}
              >
                <RevealImage src={AFTER_SRC} fallback={AFTER_FALLBACK} alt="After" />
              </div>

              {pos && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-ember-300 shadow-[0_0_30px_rgba(249,115,22,0.55)]"
                  style={{
                    left: pos.x - RADIUS,
                    top: pos.y - RADIUS,
                    width: RADIUS * 2,
                    height: RADIUS * 2,
                  }}
                />
              )}

              {!pos && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 text-ember-200 text-xs uppercase tracking-widest pointer-events-none">
                  Hover to reveal
                </div>
              )}

              <div className="pointer-events-none absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 text-ember-200/80 text-[10px] uppercase tracking-widest">
                Before
              </div>
              {pos && (
                <div
                  className="pointer-events-none absolute px-2 py-0.5 rounded-md bg-ember-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                  style={{
                    left: Math.min(Math.max(pos.x - 28, 8), 200),
                    top: Math.max(pos.y - RADIUS - 28, 8),
                  }}
                >
                  After
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function RevealImage({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="object-cover"
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src.endsWith(src)) img.src = fallback;
      }}
      unoptimized
      priority
      draggable={false}
    />
  );
}
