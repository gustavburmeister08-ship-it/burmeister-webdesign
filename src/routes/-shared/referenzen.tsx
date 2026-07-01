import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { FinalCta, PageIntro } from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const PROJECTS = {
  de: [
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
  ],
  en: [
    {
      title: "geyerliner.de",
      type: "Client project · Live",
      href: "https://geyerliner.de",
      image: "/images/references/geyerliner-home.webp",
      alt: "Homepage of geyerliner.de as a web design reference",
      text: "Local business website with a clear structure, modern look and direct inquiry flow.",
      real: true,
    },
    {
      title: "holistiq-sea.de",
      type: "Client project · Live",
      href: "https://holistiq-sea.de",
      image: "/images/references/holistiq-sea-home.webp",
      alt: "Homepage of holistiq-sea.de as a web design reference",
      text: "Homepage for a local service with calm positioning, a clear entry point and a trust-building presence.",
      real: true,
    },
    {
      title: "Feuchtewehr",
      type: "Client project · Live",
      href: "https://feuchtewehr.pages.dev/",
      image: "/images/references/feuchtewehr-home.webp",
      alt: "Homepage of the Feuchtewehr website as a web design reference",
      text: "Project site for water-damage management with an emergency-response focus, service structure and clear contact paths.",
      real: true,
    },
    {
      title: "Tradesperson model site",
      type: "Model site · Plumbing & heating",
      href: "https://sanitaertechnik-leipzig.pages.dev/",
      image: "/images/references/handwerker-modellseite-home.webp",
      alt: "Homepage of the Sanitaertechnik Leipzig model site",
      text: "Demo for a local trades business with emergency service, trust signals and direct inquiry flow.",
      real: false,
    },
    {
      title: "Salon Bernstein",
      type: "Orientation example · Hair salon",
      href: "https://salon-bernstein.pages.dev/",
      image: "/images/references/salon-bernstein-home.webp",
      alt: "Homepage of the Salon Bernstein demo website",
      text: "Demo for a local hair salon with services, atmosphere and a booking focus.",
      real: false,
    },
    {
      title: "Goldener Stier",
      type: "Orientation example · Restaurant",
      href: "https://goldener-stier.pages.dev/",
      image: "/images/references/goldener-stier-home.webp",
      alt: "Homepage of the Goldener Stier demo website",
      text: "Demo for a restaurant with a menu, opening hours and reservations.",
      real: false,
    },
  ],
} as const;

const COPY = {
  de: {
    metaTitle: "Referenzen Webdesign Leipzig - echte lokale Projekte",
    metaDescription:
      "Webdesign-Referenzen aus Leipzig: echte Kundenprojekte wie geyerliner.de, holistiq-sea.de und Feuchtewehr sowie ehrliche Demo-Beispiele für lokale Websites.",
    ogTitle: "Webdesign-Referenzen Leipzig",
    ogDescription:
      "Echte Kundenprojekte und ehrliche Orientierungsbeispiele für lokale Unternehmen.",
    breadcrumbLabel: "Referenzen",
    itemListName: "Webdesign-Referenzen Leipzig",
    introEyebrow: "Referenzen",
    introTitle: "Echte Arbeit zuerst. Demos bleiben ehrlich gekennzeichnet.",
    introText:
      "Referenzen sollen Vertrauen schaffen, nicht blenden. Echte Live-Projekte stehen vorne, Demo-Websites zeigen transparent, was für verschiedene Branchen möglich ist.",
    introBadges: [
      "15 Websites umgesetzt",
      "30 lokale Unternehmen unterstützt",
      "Case-Details folgen",
    ],
    viewLabel: "Ansehen",
    beforeAfterEyebrow: "Vorher / Nachher",
    beforeAfterTitle: "Ein Relaunch verändert nicht nur Optik, sondern Vertrauen.",
    beforeAfterText:
      "Für lokale Unternehmen zählt der erste Eindruck. Ein klarer, mobiler und schneller Auftritt macht es Besuchern leichter, Vertrauen zu fassen und anzufragen.",
    beforeAfterAlt: "Vorher-Nachher-Vergleich einer alten und neuen Website",
    ctaHeading: "Ihr Projekt kann der nächste echte Case werden.",
    ctaText:
      "Aktuell werden weitere Case-Details ergänzt. Bis dahin bleiben Demo-Beispiele klar als solche markiert.",
    ctaButton: "Projekt besprechen",
    finalCtaTitle: "Sie möchten eine Website, die als echte Referenz funktioniert?",
    finalCtaText:
      "Dann lassen Sie uns kurz prüfen, was Ihre aktuelle Website leisten muss und wie schnell ein sinnvoller Relaunch möglich ist.",
  },
  en: {
    metaTitle: "Web Design References Leipzig - real local projects",
    metaDescription:
      "Web design references from Leipzig: real client projects like geyerliner.de, holistiq-sea.de and Feuchtewehr, plus honestly labeled demo examples for local websites.",
    ogTitle: "Web Design References Leipzig",
    ogDescription:
      "Real client projects and honestly labeled orientation examples for local businesses.",
    breadcrumbLabel: "References",
    itemListName: "Web Design References Leipzig",
    introEyebrow: "References",
    introTitle: "Real work comes first. Demos stay honestly labeled.",
    introText:
      "References should build trust, not dazzle. Real live projects come first, while demo websites transparently show what's possible for different industries.",
    introBadges: [
      "15 websites delivered",
      "30 local businesses supported",
      "Case details coming soon",
    ],
    viewLabel: "View",
    beforeAfterEyebrow: "Before / After",
    beforeAfterTitle: "A relaunch changes more than looks - it changes trust.",
    beforeAfterText:
      "For local businesses, the first impression counts. A clear, mobile-friendly and fast presence makes it easier for visitors to build trust and get in touch.",
    beforeAfterAlt: "Before-and-after comparison of an old and a new website",
    ctaHeading: "Your project could be the next real case study.",
    ctaText:
      "More case details are currently being added. Until then, demo examples remain clearly labeled as such.",
    ctaButton: "Discuss your project",
    finalCtaTitle: "Want a website that works as a real reference?",
    finalCtaText:
      "Then let's quickly check what your current website needs to deliver and how fast a worthwhile relaunch could happen.",
  },
} as const;

export function referenzenHead(locale: Locale) {
  const t = COPY[locale];
  const projects = PROJECTS[locale];
  const path = locale === "en" ? "/en/referenzen" : "/referenzen";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
        image: "https://burmeister-webdesign.com/images/references/geyerliner-home.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/referenzen"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(path, t.breadcrumbLabel, locale)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: t.itemListName,
          itemListElement: projects.map((project, index) => ({
            "@type": "CreativeWork",
            position: index + 1,
            name: project.title,
            url: project.href,
            creator: { "@id": "https://burmeister-webdesign.com/#business" },
          })),
        }),
      },
    ],
  };
}

export function ReferenzenPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const projects = PROJECTS[locale];

  return (
    <>
      <PageIntro eyebrow={t.introEyebrow} title={t.introTitle} text={t.introText}>
        <div className="mt-8 flex flex-wrap gap-2">
          {t.introBadges.map((item) => (
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
          {projects.map((project) => (
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
                  {t.viewLabel} <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Eyebrow>{t.beforeAfterEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.beforeAfterTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              {t.beforeAfterText}
            </p>
          </div>
          <div className="md:col-span-7">
            <img
              src="/images/gb-webdesign-vorher-nacher.webp"
              alt={t.beforeAfterAlt}
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
              {t.ctaHeading}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
              {t.ctaText}
            </p>
          </div>
          <Button
            asChild
            className="mt-6 rounded-full bg-foreground text-background hover:bg-foreground/90 md:mt-0"
          >
            <LocalizedLink to="/kontakt">
              {t.ctaButton}
              <ArrowRight size={15} />
            </LocalizedLink>
          </Button>
        </div>
      </Section>

      <FinalCta title={t.finalCtaTitle} text={t.finalCtaText} />
    </>
  );
}
