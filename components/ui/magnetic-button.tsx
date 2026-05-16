"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.28,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({
          x: (e.clientX - r.left - r.width / 2) * strength,
          y: (e.clientY - r.top - r.height / 2) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 14, mass: 0.4 }}
      className={`inline-flex relative ${className}`}
      aria-label={ariaLabel}
    >
      <motion.span
        className="relative inline-flex"
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
}
