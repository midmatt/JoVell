import type { Metadata } from "next";
import Image from "next/image";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach JoVell Hospitality Group in Fort Lauderdale, Florida — luxury travel, transportation and events.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-ink-900 pt-36 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[120%] -translate-x-1/2 bg-radial-fade"
      />

      <section className="container-wide relative pb-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-brand">A direct line</p>
            <h1 className="display-heading mt-6 text-6xl text-white md:text-[7.5rem]">
              Tell us where
              <br />
              you&apos;re <em className="italic text-brand">going</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-300">
              Whether the trip is a weekend in Charleston or a six-week
              expedition across the Med, JoVell&apos;s senior partners are best
              reached the old-fashioned way — by hand-written note, by email,
              or by phone.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-ink-100/10">
              <Image
                src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&q=80&auto=format&fit=crop"
                alt="A quiet hotel lobby with warm light"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl text-white">
                  Fort Lauderdale, Florida
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-ink-200">
                  By appointment only · Atrium suite, level III
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Contact />
    </div>
  );
}
