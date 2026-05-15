import { ScrollHero } from "@/components/sections/scroll-hero";
import { BurnSection } from "@/components/sections/burn-section";
import { EquipmentShowcase } from "@/components/sections/equipment-showcase";
import { TransformationReveal } from "@/components/sections/transformation-reveal";
import { GymInfo } from "@/components/sections/gym-info";

export default function Home() {
  return (
    <main className="bg-background">
      <ScrollHero />
      <BurnSection />
      <TransformationReveal />
      <EquipmentShowcase />
      <GymInfo />
      <footer className="w-full py-10 text-center text-foreground/50 text-sm border-t border-ember-700/20">
        Fit Club Vegas-NW · 1922 Rock Springs Dr · Burn it down.
      </footer>
    </main>
  );
}
