"use client";

import { motion } from "framer-motion";

const TOP_ROW = [
  "BOOTCAMP",
  "STRENGTH",
  "HIIT",
  "MOBILITY",
  "BOXING",
  "CARDIO",
  "OPEN GYM",
];

const BOTTOM_ROW = [
  "BURN",
  "LIFT",
  "PUSH",
  "GROW",
  "SWEAT",
  "REPEAT",
  "TRANSFORM",
];

function Row({
  items,
  direction,
  duration,
  className,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
  className: string;
}) {
  const loop = [...items, ...items];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className={`flex gap-10 md:gap-16 whitespace-nowrap ${className}`}
        animate={{ x: [from, to] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 md:gap-16">
            <span>{item}</span>
            <span className="text-ember-500/70" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="What we train"
      className="w-full bg-background py-12 md:py-16 border-y border-ember-700/20 overflow-hidden relative"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

      <Row
        items={TOP_ROW}
        direction="left"
        duration={28}
        className="text-6xl md:text-8xl font-black fire-text tracking-tighter"
      />
      <Row
        items={BOTTOM_ROW}
        direction="right"
        duration={36}
        className="text-5xl md:text-7xl font-black text-foreground/15 tracking-tighter mt-2 md:mt-4"
      />
    </section>
  );
}
