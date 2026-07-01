import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Gauge,
  MessageSquareQuote,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import {
  FaqAccordion,
  FinalCta,
  TrustMetricGrid,
  TrustPointList,
  type FaqItem,
} from "@/components/site/RefreshBlocks";
import { ContactForm } from "@/components/site/ContactForm";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { breadcrumbJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import { trackAdLandingViewContent } from "@/lib/meta-events";
import type { Locale } from "@/lib/i18n/locale";

// Meta/Facebook-Ads-Landingpage-Varianten: ?ad=<id> aktiviert einen alternativen
// Hero auf der ansonsten unveränderten Startseite, ohne eigene Route/Navigation.
const AD_VARIANTS = {
  de: {
    lokal790: {
      headline: "Websites für lokale Unternehmen ab 790 €",
      subheadline:
        "Für Handwerker, Restaurants, Friseure, Cafés und kleine Betriebe in Leipzig. Persönlich erstellt von Gustav Burmeister – modern, mobil optimiert und klar auf Anfragen ausgelegt.",
      cta: "Kostenloses Erstgespräch anfragen",
    },
  },
  en: {
    lokal790: {
      headline: "Websites for local businesses from €790",
      subheadline:
        "For tradespeople, restaurants, hairdressers, cafés and small businesses in Leipzig. Personally built by Gustav Burmeister – modern, mobile-optimized and clearly geared toward inquiries.",
      cta: "Request a free consultation",
    },
  },
} as const;

export type AdVariantId = keyof (typeof AD_VARIANTS)["de"];

export function isHomeAdVariant(value: unknown): value is AdVariantId {
  return typeof value === "string" && value in AD_VARIANTS.de;
}

const COPY = {
  de: {
    metaTitle: "Webdesign Leipzig - Website erstellen lassen ab 790 EUR",
    metaDescription:
      "Webdesigner aus Leipzig für kleine Unternehmen: Websites ab 790 EUR, erste Vorschau nach 7 Tagen, Festpreis nach Erstgespräch und Performance 95+.",
    ogTitle: "Webdesign Leipzig - Website ab 790 EUR",
    ogDescription:
      "Websites für lokale Unternehmen in Leipzig: persönlich, schnell, bezahlbar und ohne Technikstress.",
    breadcrumbLabel: "Startseite",
    heroEyebrow: "Webdesign aus Leipzig",
    heroBadges: ["Erste Vorschau nach 7 Tagen", "Festpreis nach Erstgespräch"],
    heroTitle:
      "Websites, die lokale Kunden verstehen und Anfragen leichter machen.",
    heroText:
      "Professionelle Websites für Handwerker, Restaurants und lokale Dienstleister: schnell umgesetzt, klar erklärt und bezahlbar kalkuliert.",
    heroCtaKontakt: "Kostenloses Erstgespräch",
    heroCtaPreise: "Preise ansehen",
    heroImageAlt: "Webdesigner aus Leipzig arbeitet an einer Website auf einem Laptop",
    directContactLabel: "Direkter Kontakt",
    directContactText:
      "Sie sprechen direkt mit Gustav, ohne Ticketsystem und ohne Weiterleitung.",
    adFormEyebrow: "Kostenloses Erstgespräch",
    adFormTitle: "Jetzt unverbindlich anfragen.",
    adFormText:
      "Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von 24 Stunden persönlich zurück.",
    problemEyebrow: "Das Problem",
    problemTitle: "Eine unklare Website kostet Vertrauen, bevor jemand anfragt.",
    problemText:
      "Besucher lesen nicht alles. Sie scannen, ob Ihr Unternehmen seriös, erreichbar und passend wirkt. Wenn die Website langsam, alt oder unklar ist, suchen sie weiter.",
    problemItems: [
      "Wirkt nicht professionell",
      "Auf dem Handy schwer nutzbar",
      "Bei Google schlecht sichtbar",
      "Kein klarer Weg zur Anfrage",
    ],
    solutionEyebrow: "Die Lösung",
    solutionTitle:
      "Sie führen Ihr Geschäft. Ich kümmere mich um Website, Texte und Technik.",
    solutionText:
      "Sie liefern die Informationen, die nur Sie kennen. Daraus entsteht eine klare Website mit guter Struktur, echten Texten, sauberer Technik und einem einfachen Weg zur Anfrage.",
    solutionImageAlt:
      "Lokale Zielgruppen wie Handwerk, Gastronomie und Dienstleistung mit moderner Website",
    solutionPoints: [
      "One-Pager typischerweise in 1 Woche",
      "Mehrseitige Websites meist in 2-4 Wochen",
      "Eine Feedbackrunde inklusive",
      "Veröffentlichung und Einweisung inklusive",
    ],
    whyEyebrow: "Warum das wirkt",
    whyTitle: "Vier Dinge machen aus Besuchern echte Anfragen.",
    resultFactors: [
      {
        title: "Vertrauen in Sekunden",
        text: "Klare Headlines, echte Bilder und ein professioneller erster Eindruck helfen Besuchern sofort einzuordnen, ob Sie der richtige Anbieter sind.",
      },
      {
        title: "Schnell auf dem Handy",
        text: "Jede Website wird mit Performance im Blick gebaut. Zielwert: Lighthouse Performance 95+.",
      },
      {
        title: "Lokal auffindbar",
        text: "30+ lokale Suchbegriffe, saubere Meta-Daten und lokale Inhalte legen die Grundlage für bessere Sichtbarkeit.",
      },
      {
        title: "Ein klarer nächster Schritt",
        text: "Besucher sollen nicht rätseln. Jede Seite führt ruhig zum Erstgespräch oder zur Angebotsanfrage.",
      },
    ],
    offerEyebrow: "Kernangebot",
    offerTitle: "Website oder Relaunch für lokale Unternehmen.",
    offerText:
      "Kein Sammelsurium aus Einzelleistungen. Das Kernprodukt ist eine professionelle Website, die Vertrauen schafft, gefunden wird und Besucher zur Anfrage führt.",
    offerCta: "Leistungen ansehen",
    offerItems: [
      "Struktur, Design und Umsetzung",
      "Texte auf Wunsch inklusive",
      "Mobile Optimierung",
      "SEO-Grundlagen für lokale Suche",
      "Meta-Titel und Beschreibungen für alle Seiten",
      "Veröffentlichung und Einweisung inklusive",
    ],
    comparisonEyebrow: "Einordnung",
    comparisonTitle:
      "Warum nicht einfach Baukasten, Agentur oder die alte Website behalten?",
    comparison: [
      {
        option: "Baukasten",
        problem:
          "Schnell gestartet, aber oft generisch, begrenzt und ohne klare lokale Strategie.",
      },
      {
        option: "Alte Website behalten",
        problem:
          "Kostet Vertrauen, wirkt auf dem Handy schlecht und führt Besucher selten zur Anfrage.",
      },
      {
        option: "Grosse Agentur",
        problem:
          "Professionell, aber für kleine Betriebe oft zu teuer, zu langsam und zu unpersönlich.",
      },
      {
        option: "Gustav",
        problem:
          "Direkt, lokal, bezahlbar: eine klare Website mit persönlichem Ansprechpartner statt Ticketsystem.",
      },
    ],
    projectsEyebrow: "Projekte",
    projectsTitle: "Echte Arbeit und ehrliche Beispiele.",
    projectsCta: "Referenzen ansehen",
    viewLabel: "Ansehen",
    projects: [
      {
        label: "Kundenprojekt",
        title: "geyerliner.de",
        href: "https://geyerliner.de",
        image: "/images/references/geyerliner-home.webp",
        text: "Live-Projekt für ein lokales Unternehmen.",
      },
      {
        label: "Kundenprojekt",
        title: "holistiq-sea.de",
        href: "https://holistiq-sea.de",
        image: "/images/references/holistiq-sea-home.webp",
        text: "Ruhige Startseite mit klarem Einstieg und Vertrauensaufbau.",
      },
      {
        label: "Orientierungsbeispiel",
        title: "Salon Bernstein",
        href: "https://salon-bernstein.pages.dev/",
        image: "/images/references/salon-bernstein-home.webp",
        text: "Demo für einen Friseursalon mit Buchungsfokus.",
      },
      {
        label: "Orientierungsbeispiel",
        title: "Goldener Stier",
        href: "https://goldener-stier.pages.dev/",
        image: "/images/references/goldener-stier-home.webp",
        text: "Demo für Gastronomie mit Speisekarte und Reservierung.",
      },
    ],
    referenceAltSuffix: "als Website-Referenz",
    pricingEyebrow: "Preisorientierung",
    pricingTitle: "Bezahlbar, aber nicht beliebig.",
    pricingText:
      "Preise filtern. Deshalb gibt es klare Startpreise, aber kein blindes Paket von der Stange. Nach dem Erstgespräch erhalten Sie ein Festpreisangebot.",
    pricingItems: [
      ["One-Pager", "ab 790 EUR"],
      ["Mehrseitige Website", "ab 1.390 EUR"],
      ["Website-Relaunch", "ab 1.590 EUR"],
      ["Hosting & Wartung", "ab 30 EUR/Monat"],
    ],
    pricingCta: "Preise im Detail",
    processEyebrow: "Ablauf",
    processTitle: "Ein einfacher Prozess mit klaren Ergebnissen.",
    process: [
      ["01", "Erstgespräch", "15 Minuten, kostenlos und ohne Verpflichtung."],
      [
        "02",
        "Festpreisangebot",
        "Keine Stundenabrechnung, keine versteckten Kosten.",
      ],
      ["03", "Erste Vorschau", "Nach 7 Tagen sehen Sie eine private Vorschau."],
      [
        "04",
        "Feedback & Launch",
        "Eine Feedbackrunde, Veröffentlichung und Einweisung inklusive.",
      ],
    ],
    aboutEyebrow: "Über Gustav",
    aboutTitle: "Persönlicher Webdesigner statt anonymer Agentur.",
    aboutText:
      "Ich arbeite mit wenigen lokalen Unternehmen gleichzeitig. Sie bekommen direkten Kontakt, klare Empfehlungen und eine Website, die ohne Fachsprache erklärt wird.",
    aboutBadges: [
      "15 Websites umgesetzt",
      "30 lokale Unternehmen unterstützt",
      "Kein Ticketsystem",
    ],
    aboutCta: "Mehr über mich",
    aboutImageAlt: "Gustav Burmeister, Webdesigner aus Leipzig",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Kurz beantwortet, bevor wir sprechen.",
    faq: [
      {
        question: "Was kostet eine Website in Leipzig?",
        answer:
          "Einfache One-Pager starten bei 790 EUR. Mehrseitige Websites beginnen bei 1.390 EUR, Relaunches ab 1.590 EUR. Nach dem kostenlosen Erstgespräch erhalten Sie ein klares Festpreisangebot.",
      },
      {
        question: "Wie schnell sehe ich einen ersten Entwurf?",
        answer:
          "Die erste Vorschau erhalten Sie nach 7 Tagen. Ein One-Pager ist typischerweise in 1 Woche fertig, mehrseitige Websites meist in 2-4 Wochen.",
      },
      {
        question: "Muss ich Texte und Technik selbst vorbereiten?",
        answer:
          "Nein. Sie liefern die Informationen zu Ihrem Unternehmen. Struktur, Texte, Design, Bildaufbereitung und technische Umsetzung übernehme ich.",
      },
      {
        question: "Was passiert nach dem Launch?",
        answer:
          "Veröffentlichung und Einweisung sind inklusive. Optional übernehme ich Hosting, Wartung, Backups, Updates und kleine Änderungen.",
      },
    ],
  },
  en: {
    metaTitle: "Web Design Leipzig - Get a Website Built from €790",
    metaDescription:
      "Web designer from Leipzig for small businesses: websites from €790, first preview after 7 days, fixed price after consultation and performance target 95+.",
    ogTitle: "Web Design Leipzig - Websites from €790",
    ogDescription:
      "Websites for local businesses in Leipzig: personal, fast, affordable and stress-free.",
    breadcrumbLabel: "Home",
    heroEyebrow: "Web Design from Leipzig",
    heroBadges: ["First preview after 7 days", "Fixed price after consultation"],
    heroTitle:
      "Websites that local customers understand and that make inquiries easier.",
    heroText:
      "Professional websites for tradespeople, restaurants and local service providers: implemented quickly, explained clearly and priced affordably.",
    heroCtaKontakt: "Free Consultation",
    heroCtaPreise: "View Pricing",
    heroImageAlt: "Web designer from Leipzig working on a website on a laptop",
    directContactLabel: "Direct Contact",
    directContactText:
      "You speak directly with Gustav, with no ticket system and no hand-offs.",
    adFormEyebrow: "Free Consultation",
    adFormTitle: "Request it now, no obligation.",
    adFormText:
      "Write a few lines about your plans. I'll get back to you personally within 24 hours.",
    problemEyebrow: "The Problem",
    problemTitle: "An unclear website loses trust before anyone even inquires.",
    problemText:
      "Visitors don't read everything. They scan to see whether your business looks credible, reachable and like the right fit. If the website is slow, outdated or unclear, they keep looking.",
    problemItems: [
      "Doesn't look professional",
      "Hard to use on mobile",
      "Poor visibility on Google",
      "No clear path to inquire",
    ],
    solutionEyebrow: "The Solution",
    solutionTitle:
      "You run your business. I take care of the website, copy and technology.",
    solutionText:
      "You provide the information only you know. From that, I build a clear website with good structure, real copy, clean technology and a simple path to inquiry.",
    solutionImageAlt:
      "Local target groups such as trades, hospitality and services with a modern website",
    solutionPoints: [
      "One-pagers typically in 1 week",
      "Multi-page websites usually in 2-4 weeks",
      "One feedback round included",
      "Publishing and onboarding included",
    ],
    whyEyebrow: "Why It Works",
    whyTitle: "Four things turn visitors into real inquiries.",
    resultFactors: [
      {
        title: "Trust in seconds",
        text: "Clear headlines, real images and a professional first impression help visitors instantly judge whether you're the right provider.",
      },
      {
        title: "Fast on mobile",
        text: "Every website is built with performance in mind. Target: Lighthouse performance score 95+.",
      },
      {
        title: "Findable locally",
        text: "30+ local search terms, clean metadata and local content lay the foundation for better visibility.",
      },
      {
        title: "One clear next step",
        text: "Visitors shouldn't have to guess. Every page calmly leads toward the consultation or quote request.",
      },
    ],
    offerEyebrow: "Core Offer",
    offerTitle: "Website or relaunch for local businesses.",
    offerText:
      "No grab-bag of individual services. The core product is a professional website that builds trust, gets found and turns visitors into inquiries.",
    offerCta: "View Services",
    offerItems: [
      "Structure, design and implementation",
      "Copywriting included on request",
      "Mobile optimization",
      "SEO fundamentals for local search",
      "Meta titles and descriptions for every page",
      "Publishing and onboarding included",
    ],
    comparisonEyebrow: "Comparison",
    comparisonTitle:
      "Why not just use a website builder, an agency, or keep the old site?",
    comparison: [
      {
        option: "Website builder",
        problem:
          "Quick to start, but often generic, limited and without a clear local strategy.",
      },
      {
        option: "Keeping the old website",
        problem:
          "Costs trust, works poorly on mobile and rarely leads visitors to inquire.",
      },
      {
        option: "Large agency",
        problem:
          "Professional, but often too expensive, too slow and too impersonal for small businesses.",
      },
      {
        option: "Gustav",
        problem:
          "Direct, local, affordable: a clear website with a personal point of contact instead of a ticket system.",
      },
    ],
    projectsEyebrow: "Projects",
    projectsTitle: "Real work and honest examples.",
    projectsCta: "View References",
    viewLabel: "View",
    projects: [
      {
        label: "Client project",
        title: "geyerliner.de",
        href: "https://geyerliner.de",
        image: "/images/references/geyerliner-home.webp",
        text: "Live project for a local business.",
      },
      {
        label: "Client project",
        title: "holistiq-sea.de",
        href: "https://holistiq-sea.de",
        image: "/images/references/holistiq-sea-home.webp",
        text: "Calm homepage with a clear entry point and trust-building.",
      },
      {
        label: "Reference example",
        title: "Salon Bernstein",
        href: "https://salon-bernstein.pages.dev/",
        image: "/images/references/salon-bernstein-home.webp",
        text: "Demo for a hair salon with a booking focus.",
      },
      {
        label: "Reference example",
        title: "Goldener Stier",
        href: "https://goldener-stier.pages.dev/",
        image: "/images/references/goldener-stier-home.webp",
        text: "Demo for a restaurant with a menu and reservations.",
      },
    ],
    referenceAltSuffix: "as a website reference",
    pricingEyebrow: "Pricing Orientation",
    pricingTitle: "Affordable, but not arbitrary.",
    pricingText:
      "Prices act as a filter. That's why there are clear starting prices, but no blind off-the-shelf package. After the consultation you'll receive a fixed-price quote.",
    pricingItems: [
      ["One-pager", "from €790"],
      ["Multi-page website", "from €1,390"],
      ["Website relaunch", "from €1,590"],
      ["Hosting & maintenance", "from €30/month"],
    ],
    pricingCta: "Pricing in Detail",
    processEyebrow: "Process",
    processTitle: "A simple process with clear results.",
    process: [
      ["01", "Initial consultation", "15 minutes, free and no obligation."],
      [
        "02",
        "Fixed-price quote",
        "No hourly billing, no hidden costs.",
      ],
      ["03", "First preview", "You'll see a private preview after 7 days."],
      [
        "04",
        "Feedback & launch",
        "One feedback round, publishing and onboarding included.",
      ],
    ],
    aboutEyebrow: "About Gustav",
    aboutTitle: "A personal web designer instead of an anonymous agency.",
    aboutText:
      "I work with only a few local businesses at a time. You get direct contact, clear recommendations and a website explained without jargon.",
    aboutBadges: [
      "15 websites delivered",
      "30 local businesses supported",
      "No ticket system",
    ],
    aboutCta: "More About Me",
    aboutImageAlt: "Gustav Burmeister, web designer from Leipzig",
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Quick answers before we talk.",
    faq: [
      {
        question: "What does a website in Leipzig cost?",
        answer:
          "Simple one-pagers start at €790. Multi-page websites start at €1,390, relaunches from €1,590. After the free consultation you'll receive a clear fixed-price quote.",
      },
      {
        question: "How quickly will I see a first draft?",
        answer:
          "You'll receive the first preview after 7 days. A one-pager is typically ready in 1 week, multi-page websites usually in 2-4 weeks.",
      },
      {
        question: "Do I need to prepare copy and technical details myself?",
        answer:
          "No. You provide the information about your business. I take care of structure, copy, design, image preparation and technical implementation.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Publishing and onboarding are included. Optionally, I can also handle hosting, maintenance, backups, updates and small changes.",
      },
    ],
  },
} as const;

const RESULT_ICONS = [BadgeCheck, Gauge, Search, MessageSquareQuote] as const;

export function homeHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en" : "/";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
        image: "https://burmeister-webdesign.com/images/gb-webdesign-leipzig-cafe.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/"),
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

export function HomePage({
  locale,
  ad,
}: {
  locale: Locale;
  ad?: AdVariantId;
}) {
  const t = COPY[locale];
  const adVariant = ad ? AD_VARIANTS[locale][ad] : undefined;

  useEffect(() => {
    if (ad) {
      trackAdLandingViewContent(ad);
    }
  }, [ad]);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,oklch(0.976_0.007_80)_0%,oklch(0.948_0.01_82)_52%,oklch(0.976_0.007_80)_100%)]" />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <Eyebrow>{t.heroEyebrow}</Eyebrow>
          <div className="mt-8 grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-primary/20 bg-card/70 text-primary">
                  {t.heroBadges[0]}
                </Badge>
                <Badge variant="outline" className="border-border bg-card/70 text-foreground/70">
                  {t.heroBadges[1]}
                </Badge>
              </div>
              {adVariant ? (
                <>
                  <h1 className="mt-6 font-serif text-[clamp(2.55rem,6vw,4.7rem)] leading-[1.04] text-foreground">
                    {adVariant.headline}
                  </h1>
                  <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/72">
                    {adVariant.subheadline}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full bg-foreground px-6 py-3 text-background hover:bg-foreground/90">
                      <a href="#kontakt-formular">
                        {adVariant.cta}
                        <ArrowRight size={15} />
                      </a>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="mt-6 font-serif text-[clamp(2.55rem,6vw,4.7rem)] leading-[1.04] text-foreground">
                    {t.heroTitle}
                  </h1>
                  <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/72">
                    {t.heroText}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full bg-foreground px-6 py-3 text-background hover:bg-foreground/90">
                      <LocalizedLink to="/kontakt">
                        {t.heroCtaKontakt}
                        <ArrowRight size={15} />
                      </LocalizedLink>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full bg-card px-6 py-3">
                      <LocalizedLink to="/preise">{t.heroCtaPreise}</LocalizedLink>
                    </Button>
                  </div>
                </>
              )}
              <TrustPointList className="mt-8" />
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-3 -z-10 rounded-2xl bg-[var(--brand-stone)]" />
                <img
                  src="/images/gb-webdesign-leipzig-cafe-960.webp"
                  srcSet="/images/gb-webdesign-leipzig-cafe-640.webp 640w, /images/gb-webdesign-leipzig-cafe-960.webp 960w, /images/gb-webdesign-leipzig-cafe-1280.webp 1280w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt={t.heroImageAlt}
                  width={1280}
                  height={960}
                  fetchPriority="high"
                  loading="eager"
                  className="aspect-[4/3] w-full rounded-xl object-cover shadow-[0_40px_80px_-35px_rgba(24,32,38,0.35)]"
                />
                <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-border bg-card/95 px-5 py-4 shadow-lg backdrop-blur-sm md:left-auto md:right-5 md:w-[260px]">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.directContactLabel}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-foreground/75">
                    {t.directContactText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <TrustMetricGrid className="mt-16" />
        </div>
      </section>

      {adVariant ? (
        <Section id="kontakt-formular" className="bg-secondary/45">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>{t.adFormEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.adFormTitle}
            </h2>
            <p className="mt-4 text-foreground/70">{t.adFormText}</p>
            <div className="mt-8 rounded-xl border border-border bg-card p-7 md:p-9">
              <ContactForm />
            </div>
          </div>
        </Section>
      ) : null}

      <Section className="bg-foreground text-background">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">
              <span className="h-px w-6 bg-[var(--brand-gold)]" />
              {t.problemEyebrow}
            </span>
            <h2 className="mt-5 font-serif text-3xl text-background md:text-4xl">
              {t.problemTitle}
            </h2>
          </div>
          <div className="space-y-5 text-background/70 md:col-span-7">
            <p>{t.problemText}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.problemItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-background/10 bg-background/5 px-4 py-3 text-sm text-background/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-zielgruppen-collage-768.webp"
              srcSet="/images/gb-webdesign-zielgruppen-collage-480.webp 480w, /images/gb-webdesign-zielgruppen-collage-768.webp 768w, /images/gb-webdesign-zielgruppen-collage-1024.webp 1024w"
              sizes="(min-width: 768px) 42vw, 100vw"
              alt={t.solutionImageAlt}
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>{t.solutionEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.solutionTitle}
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">{t.solutionText}</p>
            <TrustPointList className="mt-7" items={t.solutionPoints} />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>{t.whyEyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          {t.whyTitle}
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {t.resultFactors.map(({ title, text }, i) => {
            const Icon = RESULT_ICONS[i];
            return (
              <div key={title} className="bg-card p-7">
                <Icon size={22} className="text-primary" />
                <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Eyebrow>{t.offerEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.offerTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">{t.offerText}</p>
            <Button asChild variant="outline" className="mt-7 rounded-full">
              <LocalizedLink to="/leistungen">
                {t.offerCta}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {t.offerItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/75"
                >
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>{t.comparisonEyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          {t.comparisonTitle}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.comparison.map(({ option, problem }) => (
            <div key={option} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">{option}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{problem}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{t.projectsEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.projectsTitle}
            </h2>
          </div>
          <LocalizedLink
            to="/referenzen"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {t.projectsCta} <ArrowRight size={15} />
          </LocalizedLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={project.image}
                alt={`${project.title} ${t.referenceAltSuffix}`}
                width={900}
                height={500}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {project.label}
                </p>
                <h3 className="mt-2 font-serif text-xl text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm text-foreground/65">{project.text}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
                  {t.viewLabel} <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Eyebrow>{t.pricingEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.pricingTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">{t.pricingText}</p>
          </div>
          <div className="md:col-span-6">
            <div className="space-y-3">
              {t.pricingItems.map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm"
                >
                  <span className="text-foreground/70">{name}</span>
                  <span className="font-semibold text-foreground">{price}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-5 rounded-full bg-foreground text-background hover:bg-foreground/90">
              <LocalizedLink to="/preise">
                {t.pricingCta}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>{t.processEyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          {t.processTitle}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {t.process.map(([number, title, text]) => (
            <div key={number} className="rounded-xl border border-border bg-card p-6">
              <p className="font-serif text-3xl leading-none text-primary">{number}</p>
              <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-arbeitsfoto.webp"
              alt={t.aboutImageAlt}
              width={800}
              height={1000}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>{t.aboutEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">{t.aboutText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {t.aboutBadges.map((item) => (
                <Badge key={item} variant="outline" className="border-border bg-card text-foreground/70">
                  {item}
                </Badge>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-7 rounded-full bg-card">
              <LocalizedLink to="/ueber-mich">
                {t.aboutCta}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>{t.faqEyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          {t.faqTitle}
        </h2>
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={t.faq as unknown as FaqItem[]} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
