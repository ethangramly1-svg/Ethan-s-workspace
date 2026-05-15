"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Equipment3D } from "@/components/ui/equipment-3d";
import { Dumbbell } from "lucide-react";

const items: { type: "dumbbell" | "kettlebell" | "barbell"; label: string; copy: string }[] = [
  {
    type: "dumbbell",
    label: "Dumbbells",
    copy: "5–120 lb. The bread and butter of hypertrophy.",
  },
  {
    type: "kettlebell",
    label: "Kettlebells",
    copy: "Swings, snatches, get-ups. Cardio meets strength.",
  },
  {
    type: "barbell",
    label: "Barbells",
    copy: "Squat. Bench. Deadlift. The unkillable big three.",
  },
];

export function EquipmentShowcase() {
  return (
    <section id="equipment" className="bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-700 dark:text-ember-300 text-sm mb-5">
              <Dumbbell className="h-4 w-4" />
              The Arsenal
            </div>
            <h2 className="text-4xl font-semibold text-foreground">
              New machines.{" "}
              <span className="block text-4xl md:text-[6rem] font-bold mt-1 leading-none fire-text">
                Forged for fire.
              </span>
            </h2>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-0 bg-gradient-to-br from-ember-950 via-black to-ember-950">
          {items.map((item, i) => (
            <div
              key={item.type}
              className={`relative flex flex-col ${
                i !== items.length - 1
                  ? "border-b md:border-b-0 md:border-r border-ember-700/30"
                  : ""
              }`}
            >
              <div className="flex-1 min-h-[200px]">
                <Equipment3D type={item.type} />
              </div>
              <div className="p-4 md:p-6 border-t border-ember-700/30 bg-black/60">
                <h3 className="text-ember-300 font-semibold text-lg">
                  {item.label}
                </h3>
                <p className="text-ember-100/60 text-sm mt-1">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
