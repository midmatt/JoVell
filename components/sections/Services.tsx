"use client";

import Image from "next/image";
import { Globe2, CalendarHeart, Map } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Global Travel & Events",
    icon: Globe2,
    description:
      "Door\u2011to\u2011destination orchestration \u2014 private transfers, customs liaison, and concierge layovers across sixty\u2011plus countries, all delivered with the quiet ease of a Mediterranean breeze.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "The Journey Within the Tasting",
    icon: CalendarHeart,
    description:
      "Our tasting specialists work in soft harmony, guiding each pour and palate without ever disrupting the flow. The experience feels effortless because every detail is held with Mediterranean calm.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Phase One to Completion",
    icon: Map,
    description:
      "From the first idea scribbled on a napkin to a final tasting perched on a Mallorcan cliff \u2014 wine in hand, cheese on the board, olive oil catching the last light \u2014 every moment shaped through one seamless line of guidance.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop",
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
              An atelier of <em className="italic text-ink-200">movement</em>,
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
            <Reveal key={service.n} delay={0.1 * i}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  n,
  title,
  description,
  icon: Icon,
  image,
}: {
  n: string;
  title: string;
  description: string;
  icon: typeof Globe2;
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
        <span className="absolute left-5 top-5 font-display text-3xl text-white/80">
          {n}
        </span>
        <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 pt-7">
        <h3 className="font-display text-3xl leading-tight text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-300">{description}</p>
        <div className="mt-auto flex items-center gap-3 pt-4 text-xs uppercase tracking-[0.22em] text-brand">
          <span className="h-px w-6 bg-brand" />
          Explore service
        </div>
      </div>
    </article>
  );
}
