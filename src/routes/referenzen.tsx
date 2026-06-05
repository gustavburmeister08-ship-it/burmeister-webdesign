import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { CtaRow } from "@/components/site/CtaRow";

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
      <Section className="pb-10">
        <Eyebrow>Referenzen</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Echte Projekte – Keine erfundenen Vorzeigekunden
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/75">
          Hier sehen Sie ausschließlich Projekte, die tatsächlich von mir umgesetzt
          wurden. Mit der Zeit kommen weitere dazu.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-12">

          {/* geyerliner.de – echtes Kundenprojekt */}
          <a
            href="https://geyerliner.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(24,32,38,0.3)] md:col-span-7"
          >
            <img
              src="/images/gb-webdesign-referenz-geyerliner.webp"
              alt="geyerliner.de auf Laptop, Tablet und Smartphone – modernes responsives Design"
              width={900}
              height={500}
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="flex flex-col p-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Kundenprojekt</p>
              <h2 className="mt-2 font-serif text-2xl text-foreground">geyerliner.de</h2>
              <p className="mt-3 text-sm text-foreground/75">
                Lokale Unternehmenswebsite mit klarem Aufbau, moderner Darstellung und
                guter Auffindbarkeit. Live unter geyerliner.de.
              </p>
              <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Projekt öffnen <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {/* Salon Bernstein – Orientierungsbeispiel */}
          <a
            href="https://salon-bernstein.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(24,32,38,0.3)] md:col-span-5"
          >
            <div className="h-40 w-full bg-[linear-gradient(135deg,var(--brand-stone),oklch(0.88_0.04_85))] flex items-center justify-center">
              <span className="font-serif text-3xl text-foreground/30">Salon Bernstein</span>
            </div>
            <div className="flex flex-col p-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Orientierungsbeispiel</p>
              <h2 className="mt-2 font-serif text-2xl text-foreground">Salon Bernstein</h2>
              <p className="mt-3 text-sm text-foreground/75">
                Demo-Website für einen Friseursalon – modern, mobil optimiert, mit Online-Buchung und klarer Leistungsübersicht.
              </p>
              <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Demo ansehen <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {/* Goldener Stier – Orientierungsbeispiel */}
          <a
            href="https://goldener-stier.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(24,32,38,0.3)] md:col-span-5"
          >
            <div className="h-40 w-full bg-[linear-gradient(135deg,oklch(0.76_0.08_60),oklch(0.88_0.06_75))] flex items-center justify-center">
              <span className="font-serif text-3xl text-foreground/30">Goldener Stier</span>
            </div>
            <div className="flex flex-col p-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Orientierungsbeispiel</p>
              <h2 className="mt-2 font-serif text-2xl text-foreground">Goldener Stier</h2>
              <p className="mt-3 text-sm text-foreground/75">
                Demo-Website für ein Restaurant – Speisekarte, Öffnungszeiten und Atmosphäre übersichtlich präsentiert.
              </p>
              <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Demo ansehen <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {/* Ihr Projekt */}
          <div className="rounded-2xl border border-dashed border-border bg-card/60 p-8 text-sm text-foreground/70 md:col-span-7">
            <p className="font-medium text-foreground">Ihr Projekt könnte hier stehen.</p>
            <p className="mt-3">
              Ich arbeite gezielt mit wenigen Kunden gleichzeitig, damit jedes Projekt
              die nötige Aufmerksamkeit bekommt. Wenn Sie eine bestimmte Branche oder
              ein bestimmtes Beispiel sehen möchten, fragen Sie gern direkt nach.
            </p>
            <Link to="/kontakt" className="mt-4 inline-flex text-sm font-medium text-primary hover:underline">
              Projekt besprechen →
            </Link>
          </div>

        </div>
      </Section>

      <Section>
        <Eyebrow>Vorher / Nachher</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Was ein Relaunch konkret verändert.
        </h2>
        <p className="mt-4 max-w-xl text-foreground/75">
          Links: die alte, unleserliche Website auf dem Desktop. Rechts: das neue,
          mobile Design – klar, modern, auf Anfragen optimiert.
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

      <Section className="bg-secondary/60">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          Sie möchten Ihre eigene Referenz werden?
        </h2>
        <CtaRow />
      </Section>
    </>
  );
}