"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { WordReveal } from "@/components/ui/word-reveal";
import { asset } from "@/lib/asset";

const items = [
  {
    src: "/equipment/dumbbells.png",
    label: "Dumbbells",
    copy: "5–120 lb. The bread and butter of hypertrophy.",
    accent: "from-ember-500/30 to-transparent",
  },
  {
    src: "/equipment/kettlebell.png",
    label: "Kettlebells",
    copy: "Swings, snatches, get-ups. Cardio meets strength.",
    accent: "from-ember-400/35 to-transparent",
  },
  {
    src: "/equipment/barbell.jpg",
    label: "Barbells",
    copy: "Squat. Bench. Deadlift. The unkillable big three.",
    accent: "from-ember-600/30 to-transparent",
  },
];

export function EquipmentShowcase() {
  return (
    <section id="equipment" className="w-full bg-background py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-700 dark:text-ember-300 text-sm mb-5">
            <Dumbbell className="h-4 w-4" />
            The Arsenal
          </div>
          <WordReveal
            text="Forged for fire."
            as="h2"
            className="block text-4xl md:text-6xl font-bold fire-text leading-[1.05]"
          />
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            New machines. Heavy iron. Everything you need to torch the fat and
            build the body.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <EquipmentTile {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipmentTile({
  src,
  label,
  copy,
}: {
  src: string;
  label: string;
  copy: string;
  accent: string;
}) {
  return (
    <GlowCard
      glow="rgba(249, 115, 22, 0.18)"
      radius={420}
      className="group h-full overflow-hidden rounded-2xl border border-ember-700/30 bg-black/70 transition-all hover:border-ember-500/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.35)]"
    >
      <div className="relative aspect-square w-full bg-black overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, rgba(249,115,22,0.28) 0%, rgba(249,115,22,0) 60%)",
          }}
        />
        <Image
          src={asset(src)}
          alt={label}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.06]"
          unoptimized
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-ember-500/0 group-hover:ring-ember-500/30 transition-colors" />
      </div>
      <div className="p-5 border-t border-ember-700/30 bg-gradient-to-b from-black/80 to-black/60">
        <div className="flex items-center justify-between gap-3 mb-1">
          <h3 className="text-ember-300 font-bold text-xl">{label}</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-ember-700/40 to-transparent" />
        </div>
        <p className="text-foreground/70 text-sm">{copy}</p>
      </div>
    </GlowCard>
  );
}
