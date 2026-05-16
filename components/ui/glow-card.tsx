"use client";

import { useRef, useState } from "react";

type Pos = { x: number; y: number };

export function GlowCard({
  children,
  className = "",
  glow = "rgba(249, 115, 22, 0.22)",
  radius = 360,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: string;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Pos | null>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos(null)}
      className={`relative ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-200"
        style={{
          opacity: pos ? 1 : 0,
          background: pos
            ? `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 65%)`
            : undefined,
        }}
      />
      {children}
    </div>
  );
}
