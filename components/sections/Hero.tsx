"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Plane, Ship } from "lucide-react";

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
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-brand"
          >
            JoVell Hospitality Group · Est. Hollywood, FL
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
              className="block text-brand"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-ink-200 md:text-xl"
          >
            Your journey begins with industry partners. From discounted suites
            to private cruise corridors, we orchestrate the rare quietly.
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
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={AIR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Air &amp; Cruise Reservations
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-ink-100/10 pt-8"
          >
            <Stat number="14" label="Years curating travel" />
            <Stat number="62" label="Countries chartered" />
            <Stat number="100%" label="Member referrals" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-ink-100/10 bg-ink-800 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)]">
            <Image
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80&auto=format&fit=crop"
              alt="Luxury resort terrace at golden hour"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Now booking — winter 2026
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-2xl text-white">
                  Amalfi · Italia
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-ink-200">
                  Private villa &amp; chartered transit
                </p>
              </div>
              <ArrowUpRight
                className="h-6 w-6 text-white"
                strokeWidth={1.2}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute -left-6 -top-6 hidden rotate-[-6deg] rounded-3xl border border-ink-100/15 bg-ink-800/80 p-4 backdrop-blur md:block"
          >
            <div className="flex items-center gap-3">
              <Plane className="h-4 w-4 text-brand" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.22em] text-ink-100">
                MIA → NCE
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="absolute -bottom-6 -right-4 hidden rotate-[5deg] rounded-3xl border border-ink-100/15 bg-ink-800/80 p-4 backdrop-blur md:block"
          >
            <div className="flex items-center gap-3">
              <Ship className="h-4 w-4 text-brand" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.22em] text-ink-100">
                Yacht week · suite 04
              </span>
            </div>
          </motion.div>
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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-white md:text-5xl">{number}</p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink-300">
        {label}
      </p>
    </div>
  );
}

function Marquee() {
  const items = [
    "Hollywood ✦ FL",
    "Amalfi ✦ Italia",
    "Marrakech ✦ MA",
    "St. Barths ✦ FWI",
    "Kyoto ✦ JP",
    "Cape Town ✦ ZA",
    "Reykjavík ✦ IS",
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
