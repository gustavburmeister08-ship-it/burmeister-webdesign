import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import { FinalCta, PageIntro } from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      {
        title: "Referenzen Webdesign Leipzig - echte lokale Projekte",
      },
      {
        name: "description",
        content:
          "Webdesign-Referenzen aus Leipzig: echtes Kundenprojekt geyerliner.de, ehrliche Demo-Beispiele und Vorher-Nachher-Eindruck fuer lokale Websites in Leipzig.",
      },
      ...socialMeta({
        title: "Webdesign-Referenzen Leipzig",
        description:
          "Echte Projekte und ehrliche Orientierungsbeispiele fuer lokale Unternehmen.",
        path: "/referenzen",
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-referenz-geyerliner.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: "https://burmeister-webdesign.com/referenzen" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/referenzen", "Referenzen")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Webdesign-Referenzen Leipzig",
          itemListElement: PROJECTS.map((project, index) => ({
            "@type": "CreativeWork",
            position: index + 1,
            name: project.title,
            url: project.href,
            creator: { "@id": "https://burmeister-webdesign.com/#business" },
          })),
        }),
      },
    ],
  }),
  component: ReferenzenPage,
});

const PROJECTS = [
  {
    title: "geyerliner.de",
    type: "Kundenprojekt · Live",
    href: "https://geyerliner.de",
    image: "/images/gb-webdesign-referenz-geyerliner.webp",
    alt: "geyerliner.de als responsive Website auf mehreren Geraeten",
    text: "Lokale Unternehmenswebsite mit klarer Struktur, modernem Auftritt und direkter Anfragefuehrung.",
    real: true,
  },
  {
    title: "Salon Bernstein",
    type: "Orientierungsbeispiel · Friseur",
    href: "https://salon-bernstein.pages.dev/",
    image: "/images/gb-webdesign-website-mockup.webp",
    alt: "Demo-Website fuer einen Friseursalon als Website-Mockup",
    text: "Demo fuer einen lokalen Friseursalon mit Leistungen, Atmosphaere und Buchungsfokus.",
    real: false,
  },
  {
    title: "Goldener Stier",
    type: "Orientierungsbeispiel · Restaurant",
    href: "https://goldener-stier.pages.dev/",
    image: "/images/gb-webdesign-pc-vor-laden.webp",
    alt: "Demo-Website fuer ein Restaurant auf einem Bildschirm",
    text: "Demo fuer Gastronomie mit Speisekarte, Oeffnungszeiten und Reservierung.",
    real: false,
  },
] as const;

function ReferenzenPage() {
  return (
    <>
      <PageIntro
        eyebrow="Referenzen"
        title="Echte Arbeit zuerst. Demos bleiben ehrlich gekennzeichnet."
        text="Referenzen sollen Vertrauen schaffen, nicht blenden. Echte Live-Projekte stehen vorne, Demo-Websites zeigen transparent, was fuer verschiedene Branchen moeglich ist."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "15 Websites umgesetzt",
            "30 lokale Unternehmen unterstützt",
            "Case-Details folgen",
          ].map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="border-border bg-card text-foreground/70"
            >
              {item}
            </Badge>
          ))}
        </div>
      </PageIntro>

      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                project.real
                  ? "border-primary/35 md:col-span-2"
                  : "border-border"
              }`}
            >
              <img
                src={project.image}
                alt={project.alt}
                width={900}
                height={500}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col p-6">
                <Badge
                  variant={project.real ? "default" : "outline"}
                  className="w-fit"
                >
                  {project.type}
                </Badge>
                <h2 className="mt-4 font-serif text-2xl text-foreground">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {project.text}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-primary">
                  Ansehen <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Eyebrow>Vorher / Nachher</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Ein Relaunch veraendert nicht nur Optik, sondern Vertrauen.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Fuer lokale Unternehmen zaehlt der erste Eindruck. Ein klarer,
              mobiler und schneller Auftritt macht es Besuchern leichter,
              Vertrauen zu fassen und anzufragen.
            </p>
          </div>
          <div className="md:col-span-7">
            <img
              src="/images/gb-webdesign-vorher-nacher.webp"
              alt="Vorher-Nachher-Vergleich einer alten und neuen Website"
              width={1200}
              height={600}
              loading="lazy"
              className="w-full rounded-xl border border-border object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-xl border border-dashed border-border bg-card p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="font-serif text-2xl text-foreground">
              Ihr Projekt kann der naechste echte Case werden.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
              Aktuell werden weitere Case-Details ergaenzt. Bis dahin bleiben
              Demo-Beispiele klar als solche markiert.
            </p>
          </div>
          <Button
            asChild
            className="mt-6 rounded-full bg-foreground text-background hover:bg-foreground/90 md:mt-0"
          >
            <Link to="/kontakt">
              Projekt besprechen
              <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </Section>

      <FinalCta
        title="Sie möchten eine Website, die als echte Referenz funktioniert?"
        text="Dann lassen Sie uns kurz prüfen, was Ihre aktuelle Website leisten muss und wie schnell ein sinnvoller Relaunch möglich ist."
      />
    </>
  );
}
