"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
  category?: string;
};

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-ink-100/10 border-y border-ink-100/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-white"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-5">
                <span className="font-display text-base text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl leading-snug text-white md:text-3xl">
                  {item.question}
                </span>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink-100/15 text-ink-100 transition-all duration-300 group-hover:border-brand group-hover:text-brand">
                {isOpen ? (
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-10 pr-12 text-base leading-relaxed text-ink-300 md:max-w-3xl">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
