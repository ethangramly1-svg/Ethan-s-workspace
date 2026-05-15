"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Target, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { BODY_PARTS, BODY_PART_ORDER, type BodyPartId } from "@/lib/workouts";

const Body3D = dynamic(
  () => import("@/components/ui/body-3d").then((m) => m.Body3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader" />
      </div>
    ),
  },
);

export function BurnSection() {
  const [selected, setSelected] = useState<BodyPartId | null>("abs");
  const [hovered, setHovered] = useState<BodyPartId | null>(null);

  const activeId = hovered ?? selected;
  const activePart = activeId ? BODY_PARTS[activeId] : null;

  return (
    <section id="burn" className="relative w-full bg-background py-24 px-4 md:px-8 overflow-hidden">
      <Spotlight className="-top-20 left-0 md:left-40" fill="#fb923c" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-700 dark:text-ember-300 text-sm mb-5">
            <Target className="h-4 w-4" />
            Interactive 3D Fat-Burner
          </div>
          <h2 className="text-4xl md:text-6xl font-bold fire-text mb-4">
            Click. Burn. Repeat.
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Rotate the body. Tap any part you want to torch. Get the exact set
            of exercises our coaches prescribe.
          </p>
        </div>

        <Card className="relative w-full overflow-hidden border-ember-700/30 bg-black/80 ember-glow">
          <Spotlight className="-top-32 -left-10" fill="#f97316" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 relative">
            <div className="relative h-[520px] md:h-[640px] border-b lg:border-b-0 lg:border-r border-ember-700/20">
              <Body3D
                selected={selected}
                onSelect={setSelected}
                onHover={setHovered}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-ember-300/60 pointer-events-none">
                Drag to rotate · Scroll to zoom
              </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-6">
                {BODY_PART_ORDER.map((id) => (
                  <button
                    key={id}
                    onClick={() => setSelected(id)}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                      selected === id
                        ? "bg-ember-500 text-white border-ember-400 shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                        : "bg-ember-500/5 text-ember-200 border-ember-700/40 hover:bg-ember-500/15 hover:border-ember-500/60"
                    }`}
                  >
                    {BODY_PARTS[id].label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activePart && (
                  <motion.div
                    key={activePart.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Flame className="h-6 w-6 text-ember-400 animate-flicker" />
                      <h3 className="text-2xl md:text-3xl font-bold text-ember-100">
                        {activePart.label}
                      </h3>
                    </div>
                    <p className="text-ember-200/80 mb-1">{activePart.tagline}</p>
                    <p className="text-xs uppercase tracking-widest text-ember-400 mb-6">
                      Burn estimate · {activePart.caloriesPerSession}
                    </p>

                    <div className="space-y-3">
                      {activePart.exercises.map((ex, i) => (
                        <motion.div
                          key={ex.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-ember-500/5 border border-ember-700/30 hover:border-ember-500/50 hover:bg-ember-500/10 transition-colors"
                        >
                          <ChevronRight className="h-5 w-5 text-ember-400 mt-0.5 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <span className="font-semibold text-ember-50">
                                {ex.name}
                              </span>
                              <span className="text-xs text-ember-400 font-mono">
                                {ex.sets}
                              </span>
                            </div>
                            <p className="text-xs text-ember-200/60 mt-1">
                              {ex.notes}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-[11px] text-ember-200/40 mt-6 leading-relaxed">
                      Spot-reduction is a myth — targeted strength builds the
                      muscle, but the visible fat loss comes from cardio + a
                      sustained calorie deficit. Stack both.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
