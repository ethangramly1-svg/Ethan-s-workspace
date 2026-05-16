"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Star, Users, Flame, Trophy } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { WordReveal } from "@/components/ui/word-reveal";

type Stat = {
  icon: React.ReactNode;
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
  caption: string;
};

const STATS: Stat[] = [
  {
    icon: <Star className="h-5 w-5" />,
    target: 4.8,
    decimals: 1,
    label: "Google Rating",
    caption: "Across 70+ verified reviews",
  },
  {
    icon: <Users className="h-5 w-5" />,
    target: 70,
    suffix: "+",
    label: "Members Lifting",
    caption: "Daily check-ins, six days a week",
  },
  {
    icon: <Flame className="h-5 w-5" />,
    target: 10,
    suffix: " lbs",
    label: "Avg. 30-Day Drop",
    caption: "Bootcamp + 1-on-1 coaching",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    target: 100,
    suffix: "+",
    label: "Workout Combos",
    caption: "Tailored to every body part",
  },
];

function AnimatedNumber({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="w-full bg-background py-20 px-4 md:px-8 border-t border-ember-700/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <WordReveal
            text="Numbers don't lie."
            as="h2"
            className="block text-3xl md:text-5xl font-bold fire-text"
          />
          <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
            What the iron at Fit Club Vegas-NW actually produces.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard
                glow="rgba(249, 115, 22, 0.22)"
                radius={300}
                className="group relative rounded-2xl p-6 md:p-8 bg-gradient-to-br from-ember-950/60 to-black border border-ember-700/30 hover:border-ember-500/60 transition-colors overflow-hidden h-full"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-ember-500/10 blur-2xl group-hover:bg-ember-500/20 transition-colors" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-ember-300/90 mb-3">
                    {s.icon}
                    <span className="text-xs uppercase tracking-widest">
                      {s.label}
                    </span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black fire-text tracking-tight tabular-nums">
                    <AnimatedNumber
                      target={s.target}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  </div>
                  <p className="text-foreground/60 text-sm mt-3">{s.caption}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
