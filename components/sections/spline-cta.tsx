"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Phone } from "lucide-react";

export function SplineCTA() {
  return (
    <section className="w-full px-4 md:px-8 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full h-[520px] bg-black/[0.96] relative overflow-hidden border-ember-700/30 ember-glow">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#fb923c" />

          <div className="flex h-full flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold fire-text mb-4">
                Step into the fire.
              </h2>
              <p className="mt-2 text-ember-100/80 max-w-lg text-lg">
                Drop in for a free trial week. Bootcamp, personal training, or
                just an open floor with our best machines.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+17252045655"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ember-500 text-white font-semibold hover:bg-ember-400 transition-colors shadow-[0_0_30px_rgba(249,115,22,0.55)]"
                >
                  <Phone className="h-4 w-4" />
                  (725) 204-5655
                </a>
                <a
                  href="https://fitclubvegas.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-ember-200 border border-ember-500/40 hover:bg-ember-500/10 transition-colors"
                >
                  fitclubvegas.com
                </a>
              </div>
            </div>

            <div className="flex-1 relative min-h-[280px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
