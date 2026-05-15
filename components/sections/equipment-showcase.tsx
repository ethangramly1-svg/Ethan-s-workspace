"use client";

import Image from "next/image";
import { Dumbbell } from "lucide-react";
import { asset } from "@/lib/asset";

const items = [
  {
    src: "/equipment/dumbbells.png",
    label: "Dumbbells",
    copy: "5–120 lb. The bread and butter of hypertrophy.",
  },
  {
    src: "/equipment/kettlebell.png",
    label: "Kettlebells",
    copy: "Swings, snatches, get-ups. Cardio meets strength.",
  },
  {
    src: "/equipment/barbell.jpg",
    label: "Barbells",
    copy: "Squat. Bench. Deadlift. The unkillable big three.",
  },
];

export function EquipmentShowcase() {
  return (
    <section id="equipment" className="w-full bg-background py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-700 dark:text-ember-300 text-sm mb-5">
            <Dumbbell className="h-4 w-4" />
            The Arsenal
          </div>
          <h2 className="text-4xl md:text-6xl font-bold fire-text">
            Forged for fire.
          </h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            New machines. Heavy iron. Everything you need to torch the fat and
            build the body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <EquipmentTile key={item.label} {...item} />
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
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ember-700/30 bg-black/60 transition-colors hover:border-ember-500/60">
      <div className="relative aspect-[4/3] w-full bg-black">
        <Image
          src={asset(src)}
          alt={label}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-ember-300 font-bold text-xl drop-shadow">
            {label}
          </h3>
        </div>
      </div>
      <div className="p-4 border-t border-ember-700/30 bg-black/60">
        <p className="text-ember-100/80 text-sm">{copy}</p>
      </div>
    </div>
  );
}
