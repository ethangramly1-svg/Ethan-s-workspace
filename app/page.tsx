import { ScrollHero } from '@/components/sections/scroll-hero';
import { SplineShowcase } from '@/components/sections/spline-showcase';

export default function Home() {
  return (
    <main className="bg-black">
      <ScrollHero />
      <SplineShowcase />
      <footer className="w-full py-10 text-center text-neutral-500 text-sm">
        Built with Next.js, Tailwind, shadcn/ui, Spline & Framer Motion.
      </footer>
    </main>
  );
}
