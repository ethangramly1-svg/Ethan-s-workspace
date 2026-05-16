"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

export function WordReveal({
  text,
  className = "",
  as = "span",
}: {
  text: string;
  className?: string;
  as?: Tag;
}) {
  const words = text.split(" ");
  const inner = (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="inline-flex flex-wrap items-end gap-x-[0.28em] gap-y-2"
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );

  switch (as) {
    case "h1":
      return <h1 className={className}>{inner}</h1>;
    case "h2":
      return <h2 className={className}>{inner}</h2>;
    case "h3":
      return <h3 className={className}>{inner}</h3>;
    case "h4":
      return <h4 className={className}>{inner}</h4>;
    case "p":
      return <p className={className}>{inner}</p>;
    case "div":
      return <div className={className}>{inner}</div>;
    default:
      return <span className={className}>{inner}</span>;
  }
}
