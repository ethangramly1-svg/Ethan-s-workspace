"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Ember = {
  left: number;
  size: number;
  delay: number;
  dur: number;
  drift: number;
  hue: string;
};

const HUES = ["#ff7a18", "#f97316", "#fb923c", "#fbbf24"];

export function Embers({
  count = 24,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    const next: Ember[] = Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 6,
      dur: 6 + Math.random() * 8,
      drift: (i % 2 === 0 ? 1 : -1) * (15 + Math.random() * 35),
      hue: HUES[i % HUES.length],
    }));
    setEmbers(next);
  }, [count]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {embers.map((e, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: -12,
            width: e.size,
            height: e.size,
            background: e.hue,
            boxShadow: `0 0 12px ${e.hue}`,
          }}
          animate={{
            y: ["0%", "-1100%"],
            x: [0, e.drift, 0, e.drift * 0.6],
            opacity: [0, 0.9, 0.6, 0],
          }}
          transition={{
            duration: e.dur,
            delay: e.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.2, 0.7, 1],
          }}
        />
      ))}
    </div>
  );
}
