"use client";

import Image from "next/image";
import { ArrowUpRight, Heart, UsersRound, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const EXPERIENCES = [
  {
    title: "Romantic Getaways",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80&auto=format&fit=crop",
    blurb:
      "Private islands, candlelit moorings, and suites with vows whispered into the breeze. Curated for honeymooners, anniversaries, and quiet elopements.",
    tag: "Just the two of you",
  },
  {
    title: "Group Tours",
    icon: UsersRound,
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&q=80&auto=format&fit=crop",
    blurb:
      "Friends, families, alumni, and corporate retinues — JoVell hosts groups of 8 to 800 across hotel buy-outs, gala dinners, and chartered crossings.",
    tag: "From 8 to 800 guests",
  },
  {
    title: "Global Affiliates",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80&auto=format&fit=crop",
    blurb:
      "Trusted partnerships with hoteliers, sommeliers, and aviation brokers across five continents — invisible to most, indispensable to us.",
    tag: "5 continents · 62 partners",
  },
];

const YT_ID = "kX3Gf0u0894";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-ink-900 py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-100/15 to-transparent"
      />

      <div className="container-wide">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-brand">The Experience</p>
            <h2 className="display-heading mt-6 text-5xl text-white md:text-7xl">
              Three doorways into a<br />
              <em className="italic text-brand">JoVell journey.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-ink-300 md:ml-auto">
              Each engagement begins with a conversation, not a catalog. These
              are the most common shapes our work takes — though every
              client&apos;s story rewrites the map.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 0.08}>
              <ExperienceCard {...exp} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-brand">Field notes</p>
              <h3 className="display-heading mt-6 text-4xl text-white md:text-5xl">
                A short film from our global affiliates.
              </h3>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-300">
                Watch how our partnerships translate into moments — coastlines,
                conversations and confidences shared with the JoVell network
                across the world.
              </p>
              <a
                href="https://www.youtube.com/watch?v=kX3Gf0u0894"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8"
              >
                Watch on YouTube
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.75rem] border border-ink-100/10 bg-ink-800 shadow-[0_60px_120px_-50px_rgba(230,16,62,0.35)]">
                <iframe
                  src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1`}
                  title="JoVell Hospitality Group — Global Affiliates"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  blurb,
  tag,
  icon: Icon,
  image,
}: {
  title: string;
  blurb: string;
  tag: string;
  icon: typeof Heart;
  image: string;
}) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-ink-100/10">
      <div className="relative aspect-[5/6] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

        <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </span>

        <div className="absolute inset-x-6 bottom-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-brand">
            {tag}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight text-white">
            {title}
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-200">
            {blurb}
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white">
            <span className="h-px w-6 bg-brand" />
            Inquire
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
