import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import {
  FaqAccordion,
  FinalCta,
  PageIntro,
  type FaqItem,
} from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, serviceJsonLd, socialMeta } from "@/lib/seo";

const PREISE_FAQ: FaqItem[] = [
  {
    question: "Sind die Preise Festpreise?",
    answer:
      "Nach dem kostenlosen Erstgespraech erhalten Sie ein klares Festpreisangebot. Es gibt keine Abrechnung nach Stunden und keine versteckten Kosten.",
  },
  {
    question: "Wann muss ich bezahlen?",
    answer:
      "Erst nach Ihrer Zusage starten wir. Sie bekommen vorher ein schriftliches Angebot und entscheiden in Ruhe.",
  },
  {
    question: "Wie schnell ist eine Website fertig?",
    answer:
      "Ein One-Pager ist typischerweise in 1 Woche fertig. Mehrseitige Websites dauern meist 2-4 Wochen. Die erste Vorschau erhalten Sie nach 7 Tagen.",
  },
  {
    question: "Gibt es monatliche Kosten?",
    answer:
      "Nur wenn Sie Hosting und Wartung buchen. Dieses Paket startet bei 30 EUR pro Monat und ist optional.",
  },
];

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Webdesign Preise Leipzig - Website erstellen ab 790 EUR" },
      {
        name: "description",
        content:
          "Webdesign-Preise aus Leipzig: One-Pager ab 790 EUR, mehrseitige Website ab 1.390 EUR, Relaunch ab 1.590 EUR. Klare Festpreise, keine Stundenabrechnung.",
      },
      ...socialMeta({
        title: "Webdesign-Preise Leipzig - Website ab 790 EUR",
        description:
          "Klare Startpreise, Festpreis nach Erstgespraech, keine Stundenabrechnung und keine versteckten Kosten.",
        path: "/preise",
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-preise-karten.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: "https://burmeister-webdesign.com/preise" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/preise", "Preise")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: "Webdesign Preise Leipzig",
            description:
              "One-Pager ab 790 EUR, mehrseitige Website ab 1.390 EUR und Website-Relaunch ab 1.590 EUR mit Festpreisangebot.",
            path: "/preise",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: PREISE_FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  }),
  component: PreisePage,
});

const PACKAGES = [
  {
    title: "One-Pager",
    subtitle: "Für ein klares Angebot",
    price: "790",
    time: "typisch 1 Woche",
    popular: false,
    items: [
      "Eine starke, ausführliche Seite",
      "Texte, Design und Umsetzung",
      "Kontaktformular und klare Anfrageführung",
      "SEO-Grundlagen und mobile Optimierung",
    ],
  },
  {
    title: "Mehrseitige Website",
    subtitle: "Am häufigsten gewählt",
    price: "1.390",
    time: "typisch 2-4 Wochen",
    popular: true,
    items: [
      "Mehrere Unterseiten für Leistungen, Über mich und Kontakt",
      "Struktur, Texte und Bildaufbereitung inklusive",
      "30+ lokale Suchbegriffe recherchiert",
      "Meta-Titel und Beschreibungen für alle Seiten",
    ],
  },
  {
    title: "Website-Relaunch",
    subtitle: "Wenn die alte Seite nicht mehr überzeugt",
    price: "1.590",
    time: "je nach Umfang",
    popular: false,
    items: [
      "Neuaufbau oder starke Überarbeitung",
      "Übernahme und Verbesserung vorhandener Inhalte",
      "Bessere mobile Nutzerführung",
      "Klarer Weg zur Anfrage",
    ],
  },
] as const;

function PreisePage() {
  return (
    <>
      <PageIntro
        eyebrow="Preise"
        title="Klare Startpreise. Festpreis nach dem Erstgespräch."
        text="Sie sollen schnell einschätzen können, ob wir preislich zusammenpassen. Nach dem kostenlosen Gespräch bekommen Sie ein schriftliches Angebot ohne Stundenfallen."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Keine Stundenabrechnung",
            "Keine versteckten Kosten",
            "Zahlung erst nach Zusage",
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
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col rounded-xl border p-7 ${
                pkg.popular
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_24px_70px_-30px_oklch(0.44_0.084_170/0.6)]"
                  : "border-border bg-card text-foreground"
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-6 bg-[var(--brand-gold)] text-foreground hover:bg-[var(--brand-gold)]">
                  Beliebt
                </Badge>
              )}
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${pkg.popular ? "text-primary-foreground/65" : "text-muted-foreground"}`}
              >
                {pkg.subtitle}
              </p>
              <h2 className="mt-3 font-serif text-2xl">{pkg.title}</h2>
              <p
                className={`mt-5 font-serif text-5xl ${pkg.popular ? "text-primary-foreground" : "text-foreground"}`}
              >
                {pkg.price}
                <span className="text-xl"> EUR</span>
              </p>
              <p
                className={`mt-2 text-sm ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                ab · {pkg.time}
              </p>
              <ul
                className={`mt-7 flex-1 space-y-3 text-sm ${pkg.popular ? "text-primary-foreground/86" : "text-foreground/75"}`}
              >
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={pkg.popular ? "secondary" : "outline"}
                className={`mt-8 rounded-full ${pkg.popular ? "bg-background text-foreground hover:bg-background/90" : "bg-secondary"}`}
              >
                <Link to="/kontakt">
                  Paket anfragen
                  <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Festpreis", "Sie wissen vor Projektstart, was es kostet."],
            [
              "Eine Feedbackrunde",
              "Eine Feedbackrunde ist im Angebot enthalten.",
            ],
            ["Erste Vorschau", "Nach 7 Tagen sehen Sie den ersten Stand."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <ShieldCheck size={22} className="text-primary" />
              <h3 className="mt-4 font-serif text-xl text-foreground">
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
        <div className="rounded-xl border border-border bg-card p-7 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <Eyebrow>Optionaler Betrieb</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl text-foreground">
              Hosting & Wartung ab 30 EUR/Monat
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
              Backups, Updates, kleine Aenderungen und laufende Pflege. So
              bleibt die Website nach dem Launch betreut, statt einfach nur
              uebergeben zu werden.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 rounded-full md:mt-0"
          >
            <Link to="/leistungen">
              Details ansehen
              <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>Häufige Fragen</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Preisfragen, direkt beantwortet.
        </h2>
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={PREISE_FAQ} />
        </div>
      </Section>

      <FinalCta
        title="Sie möchten wissen, welches Paket passt?"
        text="Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von 24 Stunden und gebe Ihnen eine ehrliche Einschätzung."
        button="Kostenlos anfragen"
      />
    </>
  );
}
