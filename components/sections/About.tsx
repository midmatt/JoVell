"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bone text-ink-900"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-wide relative grid grid-cols-1 gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-12">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&auto=format&fit=crop"
              alt="Luxury hospitality interior — chandelier and stairwell"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-4 hidden w-72 rounded-3xl border border-ink-900/10 bg-bone p-6 shadow-xl md:block">
            <p className="font-display text-5xl text-brand">2009</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-ink-700">
              Founded in Fort Lauderdale, FL
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              Born from a single chartered weekend that turned into a
              fourteen-year obsession with the perfect arrival.
            </p>
          </div>

          <span className="vertical-text absolute -left-4 top-8 hidden text-[10px] uppercase tracking-[0.4em] text-ink-700/70 lg:block">
            Chapter I — The Legacy
          </span>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="eyebrow text-brand">A house, a heritage</p>
          <h2 className="display-heading mt-6 text-5xl text-ink-900 md:text-7xl">
            The Legacy of
            <br />
            <em className="italic text-brand">JoVell</em>.
          </h2>

          <div className="mt-10 grid gap-8 text-base leading-relaxed text-ink-700 md:grid-cols-2">
            <p className="md:col-span-2 text-lg md:text-xl text-ink-900">
              Founded by Joseph Vella in 2009, JoVell Hospitality Group began as
              a single, well-mannered favor — a friend needing a flawless
              wedding in Tuscany. It has since become a quiet authority on
              luxury travel and event production for clients who insist on
              elegance without announcement.
            </p>

            <div>
              <h3 className="font-display text-2xl text-ink-900">Our Mission</h3>
              <p className="mt-3 text-ink-700">
                To deliver journeys that feel inevitable — where every transfer,
                room, and toast lands precisely as imagined, and where mission
                success is serving clients, not volume.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-ink-900">Our Heritage</h3>
              <p className="mt-3 text-ink-700">
                Rooted in the Mediterranean art of hospitality and softened by
                South Florida&apos;s easy warmth, JoVell curates partnerships
                across five continents — from boutique hoteliers to private
                aviation — every connection sealed with a quiet, signature swirl
                of olive oil.
              </p>
            </div>

            <blockquote className="md:col-span-2 mt-6 border-l-2 border-brand pl-6 font-display text-2xl italic text-ink-900 md:text-3xl">
              &ldquo;Luxury isn&apos;t loud. It&apos;s the quiet certainty that
              everything has already been arranged.&rdquo;
              <footer className="mt-4 text-xs uppercase not-italic tracking-[0.22em] text-ink-700">
                — Joseph Vella, Founder
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
