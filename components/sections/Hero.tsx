"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";

const HOTEL_URL = "http://c2eventz.hotelplanner.com";
const AIR_URL = "http://bookmytravel.com/c2eventz";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pt-36 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay"
      />

      <div className="container-wide relative grid grid-cols-1 gap-14 pb-24 lg:grid-cols-12 lg:gap-10">
        {/* Left — Text & CTA */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-brand"
          >
            JoVell Hospitality Group · Est. Fort Lauderdale, FL
          </motion.p>

          <h1 className="display-heading mt-8 text-[clamp(3rem,8vw,7.5rem)] text-white">
            <SplitWords
              text="Fresh Events,"
              delay={0.05}
              className="block"
            />
            <SplitWords
              text="Powered by"
              delay={0.18}
              className="block italic text-ink-200"
            />
            <SplitWords
              text="Partnerships."
              delay={0.32}
              className="block italic text-brand"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-ink-200 md:text-xl"
          >
            Your journey begins with industry partners. From discounted suites
            to private cruise corridors, we orchestrate the rare quietly — with
            an olive&#8209;oil&#8209;smooth touch that sets the tone from the
            very first moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={HOTEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Discounted Hotel Rooms
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={AIR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Air &amp; Cruise Reservations
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        {/* Right — Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-ink-100/10 bg-ink-800 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)]">
            <Image
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80&auto=format&fit=crop"
              alt="Mallorca luxury coastal resort"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur">
              <Plane className="h-3 w-3 text-brand" strokeWidth={1.5} />
              Miami → Mallorca
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-2xl text-white">
                  Mallorca · Spain
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-ink-200">
                  Private villa &amp; chartered transit
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

function SplitWords({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { y: "110%", opacity: 0 },
            visible: {
              y: "0%",
              opacity: 1,
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-block overflow-hidden pr-[0.25em]"
          style={{ overflow: "hidden" }}
        >
          <span className="inline-block">{word}</span>
        </motion.span>
      ))}
    </motion.span>
  );
}

function Marquee() {
  const items = [
    "Fort Lauderdale ✦ FL",
    "Amalfi ✦ Italia",
    "Mallorca ✦ ES",
    "St. Barths ✦ FWI",
    "Kyoto ✦ JP",
    "Cape Town ✦ ZA",
    "Marrakech ✦ MA",
    "Cartagena ✦ CO",
  ];
  const reel = [...items, ...items];

  return (
    <div className="relative border-y border-ink-100/10 bg-ink-800/30 py-5">
      <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-2xl tracking-tight text-ink-100/60 md:text-3xl">
        {reel.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-brand">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
