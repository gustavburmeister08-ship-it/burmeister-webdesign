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
          "Webdesign-Referenzen aus Leipzig: echte Kundenprojekte wie geyerliner.de, holistiq-sea.de und Feuchtewehr sowie ehrliche Demo-Beispiele für lokale Websites.",
      },
      ...socialMeta({
        title: "Webdesign-Referenzen Leipzig",
        description:
          "Echte Kundenprojekte und ehrliche Orientierungsbeispiele für lokale Unternehmen.",
        path: "/referenzen",
        image:
          "https://burmeister-webdesign.com/images/references/geyerliner-home.webp",
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
    image: "/images/references/geyerliner-home.webp",
    alt: "Startseite von geyerliner.de als Webdesign-Referenz",
    text: "Lokale Unternehmenswebsite mit klarer Struktur, modernem Auftritt und direkter Anfrageführung.",
    real: true,
  },
  {
    title: "holistiq-sea.de",
    type: "Kundenprojekt · Live",
    href: "https://holistiq-sea.de",
    image: "/images/references/holistiq-sea-home.webp",
    alt: "Startseite von holistiq-sea.de als Webdesign-Referenz",
    text: "Startseite für ein lokales Angebot mit ruhiger Positionierung, klarem Einstieg und vertrauensbildendem Auftritt.",
    real: true,
  },
  {
    title: "Feuchtewehr",
    type: "Kundenprojekt · Live",
    href: "https://feuchtewehr.pages.dev/",
    image: "/images/references/feuchtewehr-home.webp",
    alt: "Startseite der Feuchtewehr-Website als Webdesign-Referenz",
    text: "Projektseite für Wasserschaden-Management mit Soforthilfe-Fokus, Leistungsstruktur und klaren Kontaktwegen.",
    real: true,
  },
  {
    title: "Handwerker Modellseite",
    type: "Modellseite · Sanitär & Heizung",
    href: "https://sanitaertechnik-leipzig.pages.dev/",
    image: "/images/references/handwerker-modellseite-home.webp",
    alt: "Startseite der Sanitärtechnik-Leipzig Modellseite",
    text: "Demo für einen lokalen Handwerksbetrieb mit Notdienst, Vertrauenssignalen und direkter Anfrageführung.",
    real: false,
  },
  {
    title: "Salon Bernstein",
    type: "Orientierungsbeispiel · Friseur",
    href: "https://salon-bernstein.pages.dev/",
    image: "/images/references/salon-bernstein-home.webp",
    alt: "Startseite der Demo-Website Salon Bernstein",
    text: "Demo für einen lokalen Friseursalon mit Leistungen, Atmosphäre und Buchungsfokus.",
    real: false,
  },
  {
    title: "Goldener Stier",
    type: "Orientierungsbeispiel · Restaurant",
    href: "https://goldener-stier.pages.dev/",
    image: "/images/references/goldener-stier-home.webp",
    alt: "Startseite der Demo-Website Goldener Stier",
    text: "Demo für Gastronomie mit Speisekarte, Öffnungszeiten und Reservierung.",
    real: false,
  },
] as const;

function ReferenzenPage() {
  return (
    <>
      <PageIntro
        eyebrow="Referenzen"
        title="Echte Arbeit zuerst. Demos bleiben ehrlich gekennzeichnet."
        text="Referenzen sollen Vertrauen schaffen, nicht blenden. Echte Live-Projekte stehen vorne, Demo-Websites zeigen transparent, was für verschiedene Branchen möglich ist."
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                project.real ? "border-primary/35" : "border-border"
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
              Ein Relaunch verändert nicht nur Optik, sondern Vertrauen.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Für lokale Unternehmen zählt der erste Eindruck. Ein klarer,
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
              Ihr Projekt kann der nächste echte Case werden.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
              Aktuell werden weitere Case-Details ergänzt. Bis dahin bleiben
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
