import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Webdesign-Referenzen Leipzig – Gustav Burmeister Webdesign" },
      { name: "description", content: "Webdesign-Referenzen aus Leipzig: echte Projekte von Gustav Burmeister Webdesign. Aktuelle Referenz: geyerliner.de – sehen Sie selbst, was alles möglich ist." },
      { property: "og:title", content: "Webdesign-Referenzen aus Leipzig – Echte Projekte" },
      { property: "og:description", content: "Echte Webdesign-Projekte aus Leipzig. Aktuelle Referenz: geyerliner.de – kein Stockfoto, kein Fake." },
      { property: "og:url", content: "https://burmeister-webdesign.com/referenzen" },
      { property: "og:image", content: "https://burmeister-webdesign.com/images/gb-webdesign-referenz-geyerliner.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/referenzen" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://burmeister-webdesign.com/" },
            { "@type": "ListItem", position: 2, name: "Referenzen", item: "https://burmeister-webdesign.com/referenzen" },
          ],
        }),
      },
    ],
  }),
  component: ReferenzenPage,
});

function ReferenzenPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <Section className="pb-12">
        <Eyebrow>Referenzen</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Echte Projekte –{" "}
          <em className="italic text-primary">keine erfundenen Vorzeigekunden.</em>
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
          Hier sehen Sie ausschließlich Projekte, die tatsächlich von mir umgesetzt
          wurden. Die Demo-Websites zeigen, was für Ihre Branche möglich ist.
        </p>
      </Section>

      {/* ── PROJEKTE ───────────────────────── */}
      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-12">

          {/* geyerliner.de – echtes Kundenprojekt, größere Karte */}
          <a
            href="https://geyerliner.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(24,32,38,0.25)] md:col-span-7"
          >
            <div className="overflow-hidden">
              <img
                src="/images/gb-webdesign-referenz-geyerliner.webp"
                alt="geyerliner.de auf Laptop, Tablet und Smartphone – modernes responsives Design"
                width={900}
                height={500}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                Kundenprojekt · Live
              </span>
              <h2 className="mt-3 font-serif text-2xl text-foreground">geyerliner.de</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/65">
                Lokale Unternehmenswebsite mit klarem Aufbau, moderner Darstellung und
                guter Auffindbarkeit. Live und im Einsatz.
              </p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-primary">
                Projekt ansehen <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {/* Rechte Spalte: 2 Demo-Karten übereinander */}
          <div className="flex flex-col gap-5 md:col-span-5">

            {/* Salon Bernstein */}
            <a
              href="https://salon-bernstein.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(24,32,38,0.25)]"
            >
              <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,oklch(0.93_0.01_82),oklch(0.87_0.05_85))]">
                <span className="font-serif text-2xl text-foreground/20">Salon Bernstein</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Orientierungsbeispiel · Friseur</span>
                <h2 className="mt-2 font-serif text-xl text-foreground">Salon Bernstein</h2>
                <p className="mt-1.5 text-sm text-foreground/65">Demo für einen Friseursalon – modern, mit Online-Buchung.</p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
                  Demo ansehen <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>

            {/* Goldener Stier */}
            <a
              href="https://goldener-stier.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(24,32,38,0.25)]"
            >
              <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,oklch(0.76_0.08_60),oklch(0.88_0.06_75))]">
                <span className="font-serif text-2xl text-foreground/20">Goldener Stier</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Orientierungsbeispiel · Restaurant</span>
                <h2 className="mt-2 font-serif text-xl text-foreground">Goldener Stier</h2>
                <p className="mt-1.5 text-sm text-foreground/65">Demo für ein Restaurant – Speisekarte, Atmosphäre, Öffnungszeiten.</p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
                  Demo ansehen <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </div>

          {/* Ihr Projekt */}
          <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-8 md:col-span-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-serif text-xl text-foreground">Ihr Projekt könnte hier stehen.</p>
                <p className="mt-2 max-w-2xl text-sm text-foreground/65">
                  Ich arbeite mit wenigen Kunden gleichzeitig, damit jedes Projekt die Aufmerksamkeit bekommt, die es verdient.
                  Wenn Sie ein Beispiel aus einer bestimmten Branche sehen möchten, fragen Sie gern direkt an.
                </p>
              </div>
              <Link
                to="/kontakt"
                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Projekt besprechen <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── VORHER / NACHHER ───────────────── */}
      <Section className="bg-secondary/40">
        <Eyebrow>Vorher / Nachher</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Was ein Relaunch konkret verändert.
        </h2>
        <p className="mt-4 max-w-xl text-foreground/70">
          Links: die alte, unleserliche Website auf dem Desktop. Rechts: das neue, mobile Design –
          klar, modern, auf Anfragen optimiert.
        </p>
        <img
          src="/images/gb-webdesign-vorher-nacher.webp"
          alt="Vorher-Nachher-Vergleich: veraltete Website links, neue responsive Website rechts auf Laptop und Smartphone"
          width={1200}
          height={600}
          loading="lazy"
          className="mt-8 w-full rounded-2xl border border-border object-cover"
        />
      </Section>

      {/* ── CTA ─────────────────────────────── */}
      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl text-background md:text-4xl">
              Sie möchten Ihre eigene Referenz werden?
            </h2>
            <p className="mt-4 text-background/70">
              Kostenloses Erstgespräch – unverbindlich, persönlich, in unter 15 Minuten.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/kontakt"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Erstgespräch anfragen <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
