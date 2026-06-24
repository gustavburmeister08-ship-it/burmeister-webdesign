import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Gauge,
  MapPin,
  MessageSquareQuote,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
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
import { breadcrumbJsonLd, socialMeta } from "@/lib/seo";
import { trackAdLandingViewContent } from "@/lib/meta-events";

// Meta/Facebook-Ads-Landingpage-Varianten: ?ad=<id> aktiviert einen alternativen
// Hero auf der ansonsten unveränderten Startseite, ohne eigene Route/Navigation.
const AD_VARIANTS = {
  lokal790: {
    headline: "Websites für lokale Unternehmen ab 790 €",
    subheadline:
      "Für Handwerker, Restaurants, Friseure, Cafés und kleine Betriebe in Leipzig. Persönlich erstellt von Gustav Burmeister – modern, mobil optimiert und klar auf Anfragen ausgelegt.",
    cta: "Kostenloses Erstgespräch anfragen",
  },
} as const;

type AdVariantId = keyof typeof AD_VARIANTS;

function isAdVariantId(value: unknown): value is AdVariantId {
  return typeof value === "string" && value in AD_VARIANTS;
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) =>
    isAdVariantId(search.ad) ? { ad: search.ad } : {},
  head: () => ({
    meta: [
      { title: "Webdesign Leipzig - Website erstellen lassen ab 790 EUR" },
      {
        name: "description",
        content:
          "Webdesigner aus Leipzig für kleine Unternehmen: Websites ab 790 EUR, erste Vorschau nach 7 Tagen, Festpreis nach Erstgespräch und Performance 95+.",
      },
      ...socialMeta({
        title: "Webdesign Leipzig - Website ab 790 EUR",
        description:
          "Websites für lokale Unternehmen in Leipzig: persönlich, schnell, bezahlbar und ohne Technikstress.",
        path: "/",
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-leipzig-cafe.webp",
      }),
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/", "Startseite")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const HOME_FAQ: FaqItem[] = [
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
];

const RESULT_FACTORS = [
  {
    icon: BadgeCheck,
    title: "Vertrauen in Sekunden",
    text: "Klare Headlines, echte Bilder und ein professioneller erster Eindruck helfen Besuchern sofort einzuordnen, ob Sie der richtige Anbieter sind.",
  },
  {
    icon: Gauge,
    title: "Schnell auf dem Handy",
    text: "Jede Website wird mit Performance im Blick gebaut. Zielwert: Lighthouse Performance 95+.",
  },
  {
    icon: Search,
    title: "Lokal auffindbar",
    text: "30+ lokale Suchbegriffe, saubere Meta-Daten und lokale Inhalte legen die Grundlage für bessere Sichtbarkeit.",
  },
  {
    icon: MessageSquareQuote,
    title: "Ein klarer nächster Schritt",
    text: "Besucher sollen nicht rätseln. Jede Seite führt ruhig zum Erstgespräch oder zur Angebotsanfrage.",
  },
] as const;

const OFFER_ITEMS = [
  "Struktur, Design und Umsetzung",
  "Texte auf Wunsch inklusive",
  "Mobile Optimierung",
  "SEO-Grundlagen für lokale Suche",
  "Meta-Titel und Beschreibungen für alle Seiten",
  "Veröffentlichung und Einweisung inklusive",
] as const;

const COMPARISON = [
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
] as const;

const PROCESS = [
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
] as const;

function Index() {
  const { ad } = Route.useSearch();
  const adVariant = ad ? AD_VARIANTS[ad] : undefined;

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
          <Eyebrow>Webdesign aus Leipzig</Eyebrow>
          <div className="mt-8 grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-primary/20 bg-card/70 text-primary"
                >
                  Erste Vorschau nach 7 Tagen
                </Badge>
                <Badge
                  variant="outline"
                  className="border-border bg-card/70 text-foreground/70"
                >
                  Festpreis nach Erstgespräch
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
                    <Button
                      asChild
                      className="rounded-full bg-foreground px-6 py-3 text-background hover:bg-foreground/90"
                    >
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
                    Websites, die lokale Kunden verstehen und Anfragen leichter
                    machen.
                  </h1>
                  <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-foreground/72">
                    Professionelle Websites für Handwerker, Restaurants und
                    lokale Dienstleister: schnell umgesetzt, klar erklärt und
                    bezahlbar kalkuliert.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="rounded-full bg-foreground px-6 py-3 text-background hover:bg-foreground/90"
                    >
                      <Link to="/kontakt">
                        Kostenloses Erstgespräch
                        <ArrowRight size={15} />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full bg-card px-6 py-3"
                    >
                      <Link to="/preise">Preise ansehen</Link>
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
                  alt="Webdesigner aus Leipzig arbeitet an einer Website auf einem Laptop"
                  width={1280}
                  height={960}
                  fetchPriority="high"
                  loading="eager"
                  className="aspect-[4/3] w-full rounded-xl object-cover shadow-[0_40px_80px_-35px_rgba(24,32,38,0.35)]"
                />
                <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-border bg-card/95 px-5 py-4 shadow-lg backdrop-blur-sm md:left-auto md:right-5 md:w-[260px]">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Direkter Kontakt
                  </p>
                  <p className="mt-1 text-sm leading-snug text-foreground/75">
                    Sie sprechen direkt mit Gustav, ohne Ticketsystem und ohne
                    Weiterleitung.
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
            <Eyebrow>Kostenloses Erstgespräch</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Jetzt unverbindlich anfragen.
            </h2>
            <p className="mt-4 text-foreground/70">
              Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von
              24 Stunden persönlich zurück.
            </p>
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
              Das Problem
            </span>
            <h2 className="mt-5 font-serif text-3xl text-background md:text-4xl">
              Eine unklare Website kostet Vertrauen, bevor jemand anfragt.
            </h2>
          </div>
          <div className="space-y-5 text-background/70 md:col-span-7">
            <p>
              Besucher lesen nicht alles. Sie scannen, ob Ihr Unternehmen
              seriös, erreichbar und passend wirkt. Wenn die Website langsam,
              alt oder unklar ist, suchen sie weiter.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Wirkt nicht professionell",
                "Auf dem Handy schwer nutzbar",
                "Bei Google schlecht sichtbar",
                "Kein klarer Weg zur Anfrage",
              ].map((item) => (
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
              alt="Lokale Zielgruppen wie Handwerk, Gastronomie und Dienstleistung mit moderner Website"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Die Lösung</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Sie führen Ihr Geschäft. Ich kümmere mich um Website, Texte und
              Technik.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              Sie liefern die Informationen, die nur Sie kennen. Daraus entsteht
              eine klare Website mit guter Struktur, echten Texten, sauberer
              Technik und einem einfachen Weg zur Anfrage.
            </p>
            <TrustPointList
              className="mt-7"
              items={[
                "One-Pager typischerweise in 1 Woche",
                "Mehrseitige Websites meist in 2-4 Wochen",
                "Eine Feedbackrunde inklusive",
                "Veröffentlichung und Einweisung inklusive",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>Warum das wirkt</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Vier Dinge machen aus Besuchern echte Anfragen.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {RESULT_FACTORS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card p-7">
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
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Eyebrow>Kernangebot</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Website oder Relaunch für lokale Unternehmen.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Kein Sammelsurium aus Einzelleistungen. Das Kernprodukt ist eine
              professionelle Website, die Vertrauen schafft, gefunden wird und
              Besucher zur Anfrage führt.
            </p>
            <Button asChild variant="outline" className="mt-7 rounded-full">
              <Link to="/leistungen">
                Leistungen ansehen
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {OFFER_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/75"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>Einordnung</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Warum nicht einfach Baukasten, Agentur oder die alte Website behalten?
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {COMPARISON.map(({ option, problem }) => (
            <div
              key={option}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-serif text-xl text-foreground">{option}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Projekte</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Echte Arbeit und ehrliche Beispiele.
            </h2>
          </div>
          <Link
            to="/referenzen"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Referenzen ansehen <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
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
          ].map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={project.image}
                alt={`${project.title} als Website-Referenz`}
                width={900}
                height={500}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {project.label}
                </p>
                <h3 className="mt-2 font-serif text-xl text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/65">
                  {project.text}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
                  Ansehen <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Eyebrow>Preisorientierung</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Bezahlbar, aber nicht beliebig.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Preise filtern. Deshalb gibt es klare Startpreise, aber kein
              blindes Paket von der Stange. Nach dem Erstgespräch erhalten Sie
              ein Festpreisangebot.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="space-y-3">
              {[
                ["One-Pager", "ab 790 EUR"],
                ["Mehrseitige Website", "ab 1.390 EUR"],
                ["Website-Relaunch", "ab 1.590 EUR"],
                ["Hosting & Wartung", "ab 30 EUR/Monat"],
              ].map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm"
                >
                  <span className="text-foreground/70">{name}</span>
                  <span className="font-semibold text-foreground">{price}</span>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="mt-5 rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/preise">
                Preise im Detail
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Ablauf</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Ein einfacher Prozess mit klaren Ergebnissen.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {PROCESS.map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="font-serif text-3xl leading-none text-primary">
                {number}
              </p>
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

      <Section className="bg-secondary/45">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-arbeitsfoto.webp"
              alt="Gustav Burmeister, Webdesigner aus Leipzig"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Über Gustav</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Persönlicher Webdesigner statt anonymer Agentur.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              Ich arbeite mit wenigen lokalen Unternehmen gleichzeitig. Sie
              bekommen direkten Kontakt, klare Empfehlungen und eine Website,
              die ohne Fachsprache erklärt wird.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "15 Websites umgesetzt",
                "30 lokale Unternehmen unterstützt",
                "Kein Ticketsystem",
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
            <Button
              asChild
              variant="outline"
              className="mt-7 rounded-full bg-card"
            >
              <Link to="/ueber-mich">
                Mehr über mich
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Häufige Fragen</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Kurz beantwortet, bevor wir sprechen.
        </h2>
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={HOME_FAQ} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
