"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const BOOK_URL = "http://c2eventz.hotelplanner.com";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink-100/10 bg-ink-900/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="JoVell Hospitality Group home"
        >
          <Image
            src="/jovell-logo.png"
            alt="JoVell Hospitality Group"
            width={280}
            height={70}
            className="h-[70px] w-auto max-w-none object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-xs uppercase tracking-[0.22em] text-ink-200 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-brand transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition-all hover:bg-brand-700 md:inline-flex"
          >
            Book Now
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-100/15 text-ink-100 transition-colors hover:border-ink-100/40 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden"
          >
            <div className="border-t border-ink-100/10 bg-ink-900/95 backdrop-blur-xl">
              <div className="container-wide flex flex-col gap-1 py-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-ink-100/5 py-4 font-display text-3xl text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-5 w-5 text-ink-300"
                      strokeWidth={1.2}
                    />
                  </Link>
                ))}
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  Book Now
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
