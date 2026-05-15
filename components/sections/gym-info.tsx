import { MapPin, Phone, Clock, Star, Globe } from "lucide-react";

const reviews = [
  {
    author: "Laura",
    text: "Down 10 pounds this month and is all thanks to the most wonderful handsome coach Gavin! I will keep pushing to become the best version of myself possible.",
  },
  {
    author: "litgear shop",
    text: "Amazing gym and not over priced. It costs more than a regular gym but is way more impressive than a regular gym.",
  },
  {
    author: "Green Physical Therapy",
    text: "At Green Physical Therapy, we're committed to guiding our patients toward environments that drive real results — and Fit Club is one of those places.",
  },
];

export function GymInfo() {
  return (
    <section id="visit" className="w-full px-4 md:px-8 py-24 bg-background border-t border-ember-700/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold fire-text mb-3">
            Find the fire.
          </h2>
          <p className="text-foreground/70">
            Northwest Las Vegas. Open today until 8 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-3">
            <InfoLine icon={<MapPin className="h-5 w-5" />} title="Location">
              1922 Rock Springs Dr
              <br />
              Las Vegas, NV 89128
            </InfoLine>
            <InfoLine icon={<Clock className="h-5 w-5" />} title="Hours">
              Open · Closes 8 PM
            </InfoLine>
            <InfoLine icon={<Phone className="h-5 w-5" />} title="Phone">
              <a href="tel:+17252045655" className="hover:text-ember-300">
                (725) 204-5655
              </a>
            </InfoLine>
            <InfoLine icon={<Globe className="h-5 w-5" />} title="Web">
              <a
                href="https://fitclubvegas.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ember-300"
              >
                fitclubvegas.com
              </a>
            </InfoLine>
            <InfoLine icon={<Star className="h-5 w-5" />} title="Reviews">
              4.8 · 70 Google reviews
            </InfoLine>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div
                key={r.author}
                className="relative p-5 rounded-xl bg-ember-500/5 border border-ember-700/30 hover:border-ember-500/50 transition-colors"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-ember-400 text-ember-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-ember-700 dark:text-ember-300 text-xs font-semibold mt-3">
                  — {r.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 p-4 rounded-xl bg-ember-500/5 border border-ember-700/30">
      <div className="text-ember-400 mt-0.5">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-ember-400 mb-1">
          {title}
        </div>
        <div className="text-foreground">{children}</div>
      </div>
    </div>
  );
}
