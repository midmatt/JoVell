"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/20 blur-[120px]"
      />

      <div className="container-wide relative grid gap-14 py-28 md:py-40 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-brand">Begin a conversation</p>
          <h2 className="display-heading mt-6 text-5xl text-white md:text-7xl">
            Let&apos;s plan
            <br />
            something <em className="italic text-brand">rare</em>.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-300">
            Tell us where you&apos;re going — or where you&apos;d like to be
            invited. A senior partner replies within one working day, in
            English, Italian, Spanish or French.
          </p>

          <ul className="mt-12 space-y-6 text-base text-ink-100">
            <ContactRow icon={MapPin} label="Headquarters" value="Hollywood, Florida" />
            <ContactRow
              icon={Mail}
              label="Mail"
              value="joseph.vella@jovellhg.com"
              href="mailto:joseph.vella@jovellhg.com"
            />
            <ContactRow
              icon={Phone}
              label="Direct line"
              value="305.900.7092"
              href="tel:+13059007092"
            />
          </ul>

          <div className="mt-12 hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.24em] text-ink-400">
              Office hours
            </p>
            <p className="mt-2 font-display text-2xl text-white">
              Mon — Fri · 9:00 to 19:00 EST
            </p>
            <p className="mt-1 text-sm text-ink-300">
              Concierge available 24 / 7 during active travel.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-ink-100/10 bg-ink-800/50 p-8 backdrop-blur md:p-12"
          >
            <div className="grid gap-8">
              <Field
                label="Your name"
                id="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Joseph Vella"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="hello@yourdomain.com"
              />
              <Field
                label="What can we plan?"
                id="message"
                multiline
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                placeholder="Dates, party size, destinations, dreams..."
              />

              <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-ink-400">
                  Replies within 1 working day. Discretion guaranteed.
                </p>
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                  disabled={status === "sent"}
                >
                  {status === "sent" ? (
                    <>
                      <Check className="h-4 w-4" strokeWidth={1.5} />
                      Received
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink-100/15 bg-ink-800/60 text-brand transition-colors group-hover:border-brand">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.24em] text-ink-400">
          {label}
        </p>
        <p className="mt-1 font-display text-2xl text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
}) {
  return (
    <label htmlFor={id} className="group block">
      <span className="block text-[10px] uppercase tracking-[0.24em] text-ink-400">
        {label}
      </span>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          required
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-3 w-full resize-none border-b border-ink-100/15 bg-transparent pb-3 font-display text-2xl text-white outline-none transition-colors placeholder:font-sans placeholder:text-base placeholder:tracking-normal placeholder:text-ink-400/60 focus:border-brand"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-3 w-full border-b border-ink-100/15 bg-transparent pb-3 font-display text-2xl text-white outline-none transition-colors placeholder:font-sans placeholder:text-base placeholder:tracking-normal placeholder:text-ink-400/60 focus:border-brand"
        />
      )}
    </label>
  );
}
