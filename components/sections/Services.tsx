"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    title: "Global Travel & Events",
    description:
      "Door\u2011to\u2011destination orchestration \u2014 private transfers, customs liaison, and concierge layovers across sixty\u2011plus countries, all delivered with the quiet ease of a Mediterranean breeze.",
    image: "/service-1.jpg",
  },
  {
    title: "The Journey Within the Tasting",
    description:
      "Our tasting specialists work in soft harmony, guiding each pour and palate without ever disrupting the flow. The experience feels effortless because every detail is held with Mediterranean calm.",
    image: "/service-2.jpg",
  },
  {
    title: "Phase One to Completion",
    description:
      "From the first idea scribbled on a napkin to a final tasting perched on a Mallorcan cliff \u2014 wine in hand, cheese on the board, olive oil catching the last light \u2014 every moment shaped through one seamless line of guidance.",
    image: "/service-3.jpg",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink-900 py-28 md:py-40"
    >
      <div className="container-wide">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-brand">What we orchestrate</p>
            <h2 className="display-heading mt-6 text-5xl text-white md:text-7xl">
              An atelier of <em className="italic text-brand">movement</em>,
              <br />
              celebration &amp; arrival.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-ink-300 md:ml-auto">
              Three disciplines, one signature. Each engagement is led by a
              senior partner and built bespoke — never templated. Discover the
              services behind every JoVell journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.1 * i}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink-100/10 bg-ink-800/60 p-1.5 transition-all duration-500 hover:border-brand/50 hover:bg-ink-800">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 pt-7">
        <h3 className="font-display text-3xl leading-tight text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-300">{description}</p>
      </div>
    </article>
  );
}
