"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";
import { Flame } from "lucide-react";

const heroMedia = {
  src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1280&auto=format&fit=crop",
  background:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop",
  title: "Burn It Down",
  date: "Fit Club Vegas · Northwest",
  scrollToExpand: "Scroll to ignite",
};

export const ScrollHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={heroMedia.src}
      bgImageSrc={heroMedia.background}
      title={heroMedia.title}
      date={heroMedia.date}
      scrollToExpand={heroMedia.scrollToExpand}
      textBlend
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-ember-700 dark:text-ember-300 text-sm mb-6">
          <Flame className="h-4 w-4" />
          4.8 ★ · 70 reviews · 1922 Rock Springs Dr
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 fire-text">
          Fat doesn&apos;t stand a chance.
        </h2>
        <p className="text-lg mb-6 text-foreground/90">
          Welcome to Fit Club Vegas-NW. Below, you&apos;ll find an interactive 3D
          fat-burner. Tap any body part — face, stomach, glutes — and we&apos;ll
          tell you exactly which workout torches it.
        </p>
        <p className="text-base text-foreground/60">
          Bootcamp · Personal Training · Knowledgeable coaches · Coach Gavin
          approved.
        </p>
      </div>
    </ScrollExpandMedia>
  );
};
