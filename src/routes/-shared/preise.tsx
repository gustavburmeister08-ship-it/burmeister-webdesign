import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import {
  FaqAccordion,
  FinalCta,
  PageIntro,
  type FaqItem,
} from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, serviceJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    metaTitle: "Webdesign Preise Leipzig - Website erstellen ab 790 EUR",
    metaDescription:
      "Webdesign-Preise aus Leipzig: One-Pager ab 790 EUR, mehrseitige Website ab 1.390 EUR, Relaunch ab 1.590 EUR. Klare Festpreise, keine Stundenabrechnung.",
    ogTitle: "Webdesign-Preise Leipzig - Website ab 790 EUR",
    ogDescription:
      "Klare Startpreise, Festpreis nach Erstgespräch, keine Stundenabrechnung und keine versteckten Kosten.",
    breadcrumbLabel: "Preise",
    serviceName: "Webdesign Preise Leipzig",
    serviceDescription:
      "One-Pager ab 790 EUR, mehrseitige Website ab 1.390 EUR und Website-Relaunch ab 1.590 EUR mit Festpreisangebot.",
    faq: [
      {
        question: "Sind die Preise Festpreise?",
        answer:
          "Nach dem kostenlosen Erstgespräch erhalten Sie ein klares Festpreisangebot. Es gibt keine Abrechnung nach Stunden und keine versteckten Kosten.",
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
    ],
    introEyebrow: "Preise",
    introTitle: "Klare Startpreise. Festpreis nach dem Erstgespräch.",
    introText:
      "Sie sollen schnell einschätzen können, ob wir preislich zusammenpassen. Nach dem kostenlosen Gespräch bekommen Sie ein schriftliches Angebot ohne Stundenfallen.",
    introBadges: [
      "Keine Stundenabrechnung",
      "Keine versteckten Kosten",
      "Zahlung erst nach Zusage",
    ],
    packages: [
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
    ],
    popularBadge: "Beliebt",
    priceFrom: "ab",
    packageCta: "Paket anfragen",
    reassurance: [
      ["Festpreis", "Sie wissen vor Projektstart, was es kostet."],
      [
        "Eine Feedbackrunde",
        "Eine Feedbackrunde ist im Angebot enthalten.",
      ],
      ["Erste Vorschau", "Nach 7 Tagen sehen Sie den ersten Stand."],
    ],
    hostingEyebrow: "Optionaler Betrieb",
    hostingTitle: "Hosting & Wartung ab 30 EUR/Monat",
    hostingText:
      "Backups, Updates, kleine Änderungen und laufende Pflege. So bleibt die Website nach dem Launch betreut, statt einfach nur übergeben zu werden.",
    hostingCta: "Details ansehen",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Preisfragen, direkt beantwortet.",
    finalCtaTitle: "Sie möchten wissen, welches Paket passt?",
    finalCtaText:
      "Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von 24 Stunden und gebe Ihnen eine ehrliche Einschätzung.",
    finalCtaButton: "Kostenlos anfragen",
  },
  en: {
    metaTitle: "Web Design Prices Leipzig - Websites from 790 EUR",
    metaDescription:
      "Web design prices from Leipzig: one-pager from 790 EUR, multi-page website from 1,390 EUR, relaunch from 1,590 EUR. Clear fixed prices, no hourly billing.",
    ogTitle: "Web Design Prices Leipzig - websites from 790 EUR",
    ogDescription:
      "Clear starting prices, fixed price after the consultation, no hourly billing and no hidden costs.",
    breadcrumbLabel: "Prices",
    serviceName: "Web Design Prices Leipzig",
    serviceDescription:
      "One-pager from 790 EUR, multi-page website from 1,390 EUR and website relaunch from 1,590 EUR with a fixed-price offer.",
    faq: [
      {
        question: "Are the prices fixed prices?",
        answer:
          "After the free initial consultation you receive a clear fixed-price offer. There's no hourly billing and no hidden costs.",
      },
      {
        question: "When do I have to pay?",
        answer:
          "We only start once you've accepted. You get a written offer beforehand and can decide without pressure.",
      },
      {
        question: "How quickly is a website finished?",
        answer:
          "A one-pager is typically ready in 1 week. Multi-page websites usually take 2-4 weeks. You receive the first preview after 7 days.",
      },
      {
        question: "Are there monthly costs?",
        answer:
          "Only if you book hosting and maintenance. That package starts at 30 EUR per month and is optional.",
      },
    ],
    introEyebrow: "Prices",
    introTitle: "Clear starting prices. Fixed price after the consultation.",
    introText:
      "You should be able to quickly tell whether we're a fit price-wise. After the free call you get a written offer with no hourly traps.",
    introBadges: [
      "No hourly billing",
      "No hidden costs",
      "Payment only after acceptance",
    ],
    packages: [
      {
        title: "One-Pager",
        subtitle: "For a clear offer",
        price: "790",
        time: "typically 1 week",
        popular: false,
        items: [
          "One strong, in-depth page",
          "Copy, design and implementation",
          "Contact form and clear inquiry flow",
          "SEO basics and mobile optimization",
        ],
      },
      {
        title: "Multi-page website",
        subtitle: "Most commonly chosen",
        price: "1,390",
        time: "typically 2-4 weeks",
        popular: true,
        items: [
          "Multiple subpages for services, about and contact",
          "Structure, copy and image preparation included",
          "30+ local search terms researched",
          "Meta titles and descriptions for every page",
        ],
      },
      {
        title: "Website relaunch",
        subtitle: "When the old site no longer convinces",
        price: "1,590",
        time: "depending on scope",
        popular: false,
        items: [
          "Rebuild or thorough revision",
          "Migration and improvement of existing content",
          "Better mobile user experience",
          "Clear path to inquiry",
        ],
      },
    ],
    popularBadge: "Popular",
    priceFrom: "from",
    packageCta: "Request package",
    reassurance: [
      ["Fixed price", "You know the cost before the project starts."],
      [
        "One feedback round",
        "One feedback round is included in the offer.",
      ],
      ["First preview", "You see the first draft after 7 days."],
    ],
    hostingEyebrow: "Optional service",
    hostingTitle: "Hosting & maintenance from 30 EUR/month",
    hostingText:
      "Backups, updates, small changes and ongoing care. That way the website stays looked after after launch, instead of just being handed over.",
    hostingCta: "See details",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Pricing questions, answered directly.",
    finalCtaTitle: "Want to know which package fits?",
    finalCtaText:
      "Write a few lines about what you have in mind. I'll get back to you within 24 hours with an honest assessment.",
    finalCtaButton: "Request for free",
  },
} as const;

export function preiseHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/preise" : "/preise";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-preise-karten.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/preise"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(path, t.breadcrumbLabel, locale)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: t.serviceName,
            description: t.serviceDescription,
            path,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  };
}

export function PreisePage({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const faqItems: FaqItem[] = t.faq.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

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
        <div className="grid gap-5 md:grid-cols-3">
          {t.packages.map((pkg) => (
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
                  {t.popularBadge}
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
                {t.priceFrom} · {pkg.time}
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
                <LocalizedLink to="/kontakt">
                  {t.packageCta}
                  <ArrowRight size={14} />
                </LocalizedLink>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid gap-6 md:grid-cols-3">
          {t.reassurance.map(([title, text]) => (
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
            <Eyebrow>{t.hostingEyebrow}</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl text-foreground">
              {t.hostingTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
              {t.hostingText}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 rounded-full md:mt-0"
          >
            <LocalizedLink to="/leistungen">
              {t.hostingCta}
              <ArrowRight size={14} />
            </LocalizedLink>
          </Button>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>{t.faqEyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          {t.faqTitle}
        </h2>
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </Section>

      <FinalCta
        title={t.finalCtaTitle}
        text={t.finalCtaText}
        button={t.finalCtaButton}
      />
    </>
  );
}
