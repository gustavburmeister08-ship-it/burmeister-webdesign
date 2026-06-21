import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Gauge,
  ImageIcon,
  MapPin,
  PenLine,
  Search,
  ServerCog,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import {
  FaqAccordion,
  FinalCta,
  PageIntro,
  TrustMetricGrid,
  type FaqItem,
} from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, serviceJsonLd, socialMeta } from "@/lib/seo";

const LEISTUNGEN_FAQ: FaqItem[] = [
  {
    question: "Was ist bei einer Website immer enthalten?",
    answer:
      "Struktur, Design, Texte, Bildaufbereitung, mobile Optimierung, SEO-Grundlagen sowie Meta-Titel und Beschreibungen fuer alle Seiten.",
  },
  {
    question: "Muss ich selbst Texte schreiben?",
    answer:
      "Nein. Sie liefern die Informationen zu Ihrem Unternehmen, ich formuliere daraus klare, verstaendliche Website-Texte.",
  },
  {
    question: "Ist lokale SEO inklusive?",
    answer:
      "Ja. Ich recherchiere 30+ lokale Suchbegriffe und setze die SEO-Grundlagen fuer Ihre Seiten um. Erweiterungen wie Google Business Profil sind optional moeglich.",
  },
  {
    question: "Bieten Sie auch Hosting und Wartung an?",
    answer:
      "Ja. Hosting und Wartung sind optional ab 30 EUR pro Monat moeglich, inklusive Backups, Updates und kleiner Aenderungen.",
  },
];

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen - Webdesign Leipzig fuer lokale Unternehmen" },
      {
        name: "description",
        content:
          "Webdesign-Leistungen in Leipzig: Website-Erstellung, Relaunch, Texte, lokale SEO, Google Business Profil, Hosting und Wartung fuer kleine Unternehmen.",
      },
      ...socialMeta({
        title: "Webdesign-Leistungen Leipzig - alles aus einer Hand",
        description:
          "Website, Relaunch, Texte, SEO-Grundlagen und Wartung fuer lokale Unternehmen in Leipzig.",
        path: "/leistungen",
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-website-mockup.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: "https://burmeister-webdesign.com/leistungen" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/leistungen", "Leistungen")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: "Webdesign-Leistungen fuer lokale Unternehmen in Leipzig",
            description:
              "Website-Erstellung, Relaunch, Texte, lokale SEO, Google Business Profil, Hosting und Wartung fuer kleine Unternehmen.",
            path: "/leistungen",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: LEISTUNGEN_FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Webdesign-Leistungen Leipzig",
          itemListElement: [
            "Website-Erstellung Leipzig",
            "Website-Relaunch Leipzig",
            "Texte und Struktur",
            "Lokale SEO Leipzig",
            "Google Business Profil",
            "Hosting und Wartung",
          ].map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            url: "https://burmeister-webdesign.com/leistungen",
          })),
        }),
      },
    ],
  }),
  component: LeistungenPage,
});

const INCLUDED = [
  {
    icon: Wrench,
    title: "Struktur & Design",
    text: "Eine klare Seite, die Besucher sofort verstehen und die zu Ihrem Betrieb passt.",
  },
  {
    icon: PenLine,
    title: "Texte inklusive",
    text: "Sie liefern die Infos, ich formuliere verstaendlich und anfrageorientiert.",
  },
  {
    icon: Smartphone,
    title: "Mobil optimiert",
    text: "Die Website funktioniert zuerst auf dem Smartphone, nicht nur am Desktop.",
  },
  {
    icon: Search,
    title: "SEO-Grundlagen",
    text: "30+ lokale Suchbegriffe, Meta-Daten und saubere Seitenstruktur.",
  },
  {
    icon: ImageIcon,
    title: "Bildaufbereitung",
    text: "Vorhandene Fotos werden passend zugeschnitten, optimiert und eingebunden.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Zielwert: Lighthouse Performance 95+ bei jeder Website.",
  },
] as const;

const ADDONS = [
  {
    icon: ServerCog,
    title: "Hosting & Wartung",
    text: "Backups, Updates, kleine Aenderungen und laufende Pflege ab 30 EUR/Monat.",
  },
  {
    icon: MapPin,
    title: "Google Business Profil",
    text: "Einrichtung mit passenden Kategorien, Bildern und Beschreibung fuer Google Maps.",
  },
  {
    icon: FileText,
    title: "Landingpages",
    text: "Fokussierte Seiten fuer Aktionen, einzelne Leistungen oder Google-Anzeigen.",
  },
] as const;

function LeistungenPage() {
  return (
    <>
      <PageIntro
        eyebrow="Leistungen"
        title="Eine Website fuer lokale Unternehmen - mit allem, was wirklich wichtig ist."
        text="Das Kernangebot ist klar: Website oder Relaunch fuer kleine Unternehmen in Leipzig. Texte, Struktur, Design, Technik und SEO-Grundlagen kommen aus einer Hand."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Website ab 790 EUR",
            "Erste Vorschau nach 7 Tagen",
            "Direkter Kontakt mit Gustav",
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
        <TrustMetricGrid />
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Eyebrow>Kernangebot</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Website-Erstellung und Relaunch ohne Technikstress.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Sie bekommen keine komplizierte Agenturleistung, sondern ein
              klares Ergebnis: eine professionelle Website, die Vertrauen
              schafft, lokal gefunden wird und Anfragen einfacher macht.
            </p>
            <Button
              asChild
              className="mt-7 rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/kontakt">
                Angebot einholen
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:col-span-7 sm:grid-cols-2">
            {INCLUDED.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card p-6">
                <Icon size={21} className="text-primary" />
                <h3 className="mt-4 font-serif text-xl text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>Optionale Erweiterungen</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Wenn Sie mehr brauchen, bleibt es trotzdem aus einer Hand.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ADDONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-7"
            >
              <Icon size={22} className="text-primary" />
              <h3 className="mt-5 font-serif text-xl text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>Lokale Sichtbarkeit</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Damit Kunden Sie in Leipzig finden.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Lokale SEO heisst nicht, einfach ein paar Keywords einzubauen. Ich
              recherchiere Suchbegriffe, die zu Ihrer Branche und Region passen,
              und strukturiere Ihre Inhalte so, dass Kunden schneller verstehen,
              warum sie bei Ihnen richtig sind.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "30+ lokale Suchbegriffe recherchiert",
                "Meta-Titel und Beschreibungen fuer alle Seiten",
                "Google Business Profil optional mit Kategorien und Bildern",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/75"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <img
              src="/images/gb-webdesign-lokale-seo-leipzig.webp"
              alt="Lokale SEO und Google Maps Sichtbarkeit fuer Unternehmen in Leipzig"
              width={900}
              height={600}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>Häufige Fragen</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Was vor dem Start wichtig ist.
        </h2>
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={LEISTUNGEN_FAQ} />
        </div>
      </Section>

      <FinalCta
        title="Nicht sicher, welche Leistung Sie brauchen?"
        text="Das klaeren wir im kostenlosen Erstgespraech. Ich sage Ihnen ehrlich, was sinnvoll ist und was Sie sich sparen koennen."
      />
    </>
  );
}
