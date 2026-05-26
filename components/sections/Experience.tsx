"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const EXPERIENCES = [
  {
    title: "Romantic Getaways",
    image: "/experience-1.jpg",
    blurb:
      "At JoVell Hospitality Group, we believe connection thrives when people share flavor, story, and experience. That\u2019s why our JoVell team designs olive oil networking activations that double as powerful team\u2011building journeys. Whether you\u2019re gathering colleagues in Florida, hosting partners in Mallorca, or curating a leadership retreat abroad, we bring our signature tastings and storytelling to you. Each experience is tailored to your destination, your culture, and your goals \u2014 blending sensory discovery with hospitality\u2011forward interaction.",
  },
  {
    title: "Group Events",
    image: "/experience-2.jpg",
    blurb:
      "From intimate circles of eight to global gatherings of eight hundred, JoVell curates hotel buy\u2011outs, gala evenings, and chartered crossings \u2014 each experience touched with a drizzle of ease and a swirl of Mediterranean charm.",
  },
  {
    title: "Global Affiliates",
    image: "/experience-3.jpg",
    blurb:
      "Hand\u2011selected hoteliers, sommeliers, transportation and aviation partners, and olive\u2011oil producers across five continents \u2014 unseen by many, relied upon by us, each relationship touched with a quiet Mediterranean swirl.",
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
              We craft an experience around your story — your values, your
              culture, your purpose and your guests. Your guests leave not only
              with new connections, but with a deeper understanding of what makes
              your organization unique.
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
  image,
}: {
  title: string;
  blurb: string;
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

        <div className="absolute inset-x-6 bottom-6">
          <h3 className="font-display text-3xl leading-tight text-white">
            {title}
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-200">
            {blurb}
          </p>
        </div>
      </div>
    </article>
  );
}
