'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

const heroMedia = {
  src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
  background:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop',
  title: 'Locked In',
  date: 'A focused workspace',
  scrollToExpand: 'Scroll to expand',
  about: {
    overview:
      "This is Ethan's workspace — a playground for interactive UI experiments. As you scroll, the cover image expands to fill the screen, easing you into the rest of the page.",
    conclusion:
      'Keep scrolling for an interactive 3D scene powered by Spline, dropped inside a shadcn card with an Aceternity spotlight on top.',
  },
};

const HeroContent = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white">About this page</h2>
      <p className="text-lg mb-6 text-neutral-200">{heroMedia.about.overview}</p>
      <p className="text-lg mb-6 text-neutral-200">
        {heroMedia.about.conclusion}
      </p>
    </div>
  );
};

export const ScrollHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
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
      <HeroContent />
    </ScrollExpandMedia>
  );
};
