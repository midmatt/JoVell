import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FAQAccordion, type FaqItem } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about JoVell Hospitality Group — bookings, partnerships, and how we curate luxury travel and events.",
};

const FAQS: FaqItem[] = [
  {
    question: "Where is JoVell Hospitality Group based?",
    answer:
      "Our headquarters is in Hollywood, Florida, with on-the-ground affiliates across five continents. We design from South Florida and execute everywhere the client wishes to be.",
  },
  {
    question: "How do I book a discounted hotel room?",
    answer:
      "Use our HotelPlanner portal at c2eventz.hotelplanner.com — JoVell maintains corporate-rate access at thousands of properties worldwide. For boutique houses outside the platform, contact a partner directly.",
  },
  {
    question: "Do you handle air and cruise reservations?",
    answer:
      "Yes. Through our partner site bookmytravel.com/c2eventz we coordinate commercial, private and chartered air, plus full-ship and stateroom cruise bookings with major and luxury lines.",
  },
  {
    question: "What size of events can JoVell produce?",
    answer:
      "Intimate dinners of eight guests to corporate buyouts of eight hundred. Our model is the same at every scale — one senior partner, one direct line, one accountable team on the ground.",
  },
  {
    question: "Can you plan a destination wedding or anniversary?",
    answer:
      "Romantic getaways and milestone celebrations are a cornerstone of the house — from elopements in Capri to anniversaries crossed by private yacht. We coordinate officiants, photographers, attire, and family logistics.",
  },
  {
    question: "Which destinations do you cover?",
    answer:
      "Sixty-two countries and counting. Our most active corridors are the Mediterranean, the Caribbean, Japan, Iceland, Morocco, and select South American capitals — but if it can be reached respectfully, we can plan it.",
  },
  {
    question: "Do you support corporate retreats and incentive travel?",
    answer:
      "Absolutely. We design corporate retreats, sales incentive trips, and board-level offsites — including private jet manifests, on-site production, and confidentiality protocols where required.",
  },
  {
    question: "How is JoVell different from a typical travel agency?",
    answer:
      "We are a hospitality atelier, not a transactional booking shop. Engagements are conducted by senior partners, plans are bespoke, and our success is measured exclusively in returning clients and quiet referrals.",
  },
  {
    question: "How do I begin?",
    answer:
      "Email joseph.vella@jovellhg.com or call 305.900.7092. A first conversation — under thirty minutes, no obligation — is the only proper way to begin.",
  },
];

export default function FaqPage() {
  return (
    <div className="relative overflow-hidden bg-ink-900 pt-36 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[120%] -translate-x-1/2 bg-radial-fade"
      />

      <section className="container-wide relative pb-20">
        <Reveal>
          <p className="eyebrow text-brand">Knowledge House</p>
          <h1 className="display-heading mt-6 text-6xl text-white md:text-[7.5rem]">
            Frequently
            <br />
            <em className="italic text-brand">Asked</em>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink-300">
            A small library of answers. If your question isn&apos;t below, the
            quickest route is{" "}
            <Link
              href="/contact"
              className="text-white underline underline-offset-4 hover:text-brand"
            >
              one direct line
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="container-wide relative pb-28 md:pb-40">
        <Reveal delay={0.1}>
          <FAQAccordion items={FAQS} />
        </Reveal>

        <Reveal delay={0.15} className="mt-20">
          <div className="grid items-center gap-8 rounded-[2rem] border border-ink-100/10 bg-ink-800/60 p-10 md:grid-cols-2 md:p-14">
            <div>
              <p className="eyebrow text-brand">Still curious?</p>
              <h2 className="display-heading mt-5 text-4xl text-white md:text-5xl">
                Speak with a senior partner.
              </h2>
              <p className="mt-4 max-w-md text-base text-ink-300">
                We answer thoughtfully — usually within a working day, sometimes
                the same hour.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              <Link href="/contact" className="btn-primary">
                Contact JoVell
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <a
                href="mailto:joseph.vella@jovellhg.com"
                className="btn-ghost"
              >
                Email Joseph
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
