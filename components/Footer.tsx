"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Facebook, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink-100/10 bg-ink-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[120%] -translate-x-1/2 bg-radial-fade opacity-70"
      />

      <div className="container-wide relative grid gap-14 py-20 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="eyebrow text-brand">Stay in the loop</p>
          <h3 className="display-heading mt-6 text-4xl text-white md:text-5xl">
            Receive bespoke
            <br />
            travel dispatches.
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-300">
            Discounted hotel codes, partner cruise offers, and intimate
            invitations — sent only when the destination is worth your time.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-ink-100/15 bg-ink-800/50 p-1.5 pl-5 backdrop-blur"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent text-sm text-ink-100 outline-none placeholder:text-ink-400"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="group grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-white transition-all hover:bg-brand-700"
              aria-label="Subscribe"
            >
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </button>
          </form>
          {sent && (
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-brand">
              Subscribed — welcome aboard.
            </p>
          )}
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-ink-300">Navigate</p>
          <ul className="mt-6 space-y-3 text-base text-ink-200">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="http://c2eventz.hotelplanner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Hotel Bookings
              </a>
            </li>
            <li>
              <a
                href="http://bookmytravel.com/c2eventz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Air &amp; Cruise
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-ink-300">Headquarters</p>
          <ul className="mt-6 space-y-4 text-sm text-ink-200">
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                strokeWidth={1.5}
              />
              Fort Lauderdale, Florida — USA
            </li>
            <li className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                strokeWidth={1.5}
              />
              <a
                href="mailto:joseph@jovellhg.com"
                className="hover:text-white"
              >
                joseph@jovellhg.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                strokeWidth={1.5}
              />
              <a href="tel:+13059007092" className="hover:text-white">
                305.900.7092
              </a>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-100/15 text-ink-200 transition-all hover:border-brand hover:text-brand"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="hairline" />

      <div className="container-wide flex flex-col items-start justify-between gap-3 py-8 text-[11px] uppercase tracking-[0.22em] text-ink-400 md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} JoVell Hospitality Group. All rights
          reserved.
        </p>
        <p className="text-ink-400">
          Crafted in Fort Lauderdale, FL · Departing daily worldwide.
        </p>
      </div>
    </footer>
  );
}
