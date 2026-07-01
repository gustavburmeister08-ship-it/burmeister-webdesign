import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import {
  FinalCta,
  PageIntro,
  TrustMetricGrid,
} from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    metaTitle: "Über mich - Gustav Burmeister | Webdesigner Leipzig",
    metaDescription:
      "Gustav Burmeister ist Webdesigner aus Leipzig für lokale Unternehmen: direkter Kontakt, klare Preise, 15 Websites und 30 Unternehmen unterstützt.",
    ogTitle: "Gustav Burmeister - Webdesigner aus Leipzig",
    ogDescription:
      "Persönlicher Webdesigner für kleine Unternehmen in Leipzig: direkter Kontakt, klare Preise und schnelle Umsetzung.",
    breadcrumbLabel: "Über mich",
    personDescription:
      "Freiberuflicher Webdesigner aus Leipzig, spezialisiert auf moderne, bezahlbare Websites für kleine lokale Unternehmen.",
    knowsAbout: [
      "Webdesign",
      "Website-Relaunch",
      "Lokale SEO",
      "Google Business Profil",
      "Hosting und Wartung",
    ],
    introEyebrow: "Über mich",
    introTitle: "Persönlicher Webdesigner aus Leipzig, nicht anonyme Agentur.",
    introText:
      "Ich helfe kleinen lokalen Unternehmen zu Websites, die professionell wirken, schnell online gehen und ohne Technikstress funktionieren.",
    photoAlt: "Gustav Burmeister arbeitet an einer Website",
    photoBadges: [
      "Direkter Kontakt",
      "Kein Ticketsystem",
      "Antwort innerhalb von 24 Stunden",
    ],
    whyEyebrow: "Warum ich so arbeite",
    whyTitle:
      "Kleine Betriebe brauchen keine komplizierte Agentur. Sie brauchen Klarheit.",
    whyParagraphs: [
      "Viele lokale Unternehmen haben keine Zeit, sich durch Baukästen, Plugins, SEO-Fachbegriffe oder Agenturprozesse zu arbeiten. Genau dort setze ich an.",
      "Sie sagen mir, was Sie anbieten. Ich kümmere mich um Struktur, Texte, Design, Technik und den Launch. Direkt, verständlich und mit einem klaren Festpreis nach dem Erstgespräch.",
    ],
    whyList: [
      "15 Websites umgesetzt",
      "30 lokale Unternehmen unterstützt",
      "Erste Vorschau nach 7 Tagen",
      "Veröffentlichung und Einweisung inklusive",
    ],
    approachEyebrow: "Arbeitsweise",
    approachTitle: "Was Kunden nach der Zusammenarbeit haben.",
    approachItems: [
      [
        "Mehr Vertrauen",
        "Ein professioneller erster Eindruck für Besucher, die Ihr Unternehmen noch nicht kennen.",
      ],
      [
        "Weniger Technikstress",
        "Sie müssen keine Plattform, Plugins oder Fachbegriffe verwalten.",
      ],
      [
        "Bessere Anfrageführung",
        "Besucher verstehen schneller, was Sie anbieten und wie sie Kontakt aufnehmen.",
      ],
      [
        "Lokale Grundlage",
        "SEO-Grundlagen und lokale Suchbegriffe werden von Anfang an mitgedacht.",
      ],
    ],
    standpointEyebrow: "Standpunkt",
    standpointTitle:
      "Bezahlbar heißt nicht billig. Es heißt passend für kleine Unternehmen.",
    standpointText:
      "Ich baue nicht für Designpreise, sondern für Betriebe, die online seriös wirken, gefunden werden und einfacher Anfragen bekommen wollen.",
    standpointButton: "Preise ansehen",
    finalCtaTitle: "Sie möchten direkt mit mir sprechen?",
    finalCtaText:
      "Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von 24 Stunden persönlich zurück.",
    finalCtaButton: "Kontakt aufnehmen",
  },
  en: {
    metaTitle: "About Me - Gustav Burmeister | Web Designer Leipzig",
    metaDescription:
      "Gustav Burmeister is a web designer from Leipzig for local businesses: direct contact, transparent pricing, 15 websites and 30 businesses supported.",
    ogTitle: "Gustav Burmeister - Web Designer from Leipzig",
    ogDescription:
      "A personal web designer for small businesses in Leipzig: direct contact, transparent pricing and fast delivery.",
    breadcrumbLabel: "About Me",
    personDescription:
      "Freelance web designer from Leipzig, specializing in modern, affordable websites for small local businesses.",
    knowsAbout: [
      "Web design",
      "Website relaunch",
      "Local SEO",
      "Google Business Profile",
      "Hosting and maintenance",
    ],
    introEyebrow: "About Me",
    introTitle: "A personal web designer from Leipzig, not an anonymous agency.",
    introText:
      "I help small local businesses get websites that look professional, launch quickly and run without tech stress.",
    photoAlt: "Gustav Burmeister working on a website",
    photoBadges: [
      "Direct contact",
      "No ticket system",
      "Reply within 24 hours",
    ],
    whyEyebrow: "Why I work this way",
    whyTitle:
      "Small businesses don't need a complicated agency. They need clarity.",
    whyParagraphs: [
      "Many local businesses don't have time to work through website builders, plugins, SEO jargon or agency processes. That's exactly where I come in.",
      "You tell me what you offer. I take care of structure, copy, design, tech and the launch. Direct, understandable, and with a clear fixed price after the initial consultation.",
    ],
    whyList: [
      "15 websites delivered",
      "30 local businesses supported",
      "First preview after 7 days",
      "Launch and walkthrough included",
    ],
    approachEyebrow: "How I work",
    approachTitle: "What clients have after working together.",
    approachItems: [
      [
        "More trust",
        "A professional first impression for visitors who don't yet know your business.",
      ],
      [
        "Less tech stress",
        "You don't have to manage a platform, plugins or technical jargon.",
      ],
      [
        "Better inquiry flow",
        "Visitors understand faster what you offer and how to get in touch.",
      ],
      [
        "A local foundation",
        "SEO fundamentals and local search terms are considered from the start.",
      ],
    ],
    standpointEyebrow: "My stance",
    standpointTitle:
      "Affordable doesn't mean cheap. It means the right fit for small businesses.",
    standpointText:
      "I don't build for design awards - I build for businesses that want to look credible online, get found and receive inquiries more easily.",
    standpointButton: "View pricing",
    finalCtaTitle: "Want to talk to me directly?",
    finalCtaText:
      "Write a few lines about what you have in mind. I'll get back to you personally within 24 hours.",
    finalCtaButton: "Get in touch",
  },
} as const;

export function ueberMichHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/ueber-mich" : "/ueber-mich";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
        image: "https://burmeister-webdesign.com/images/gb-webdesign-arbeitsfoto.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/ueber-mich"),
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
          "@type": "Person",
          "@id": "https://burmeister-webdesign.com/#person",
          name: "Gustav Burmeister",
          jobTitle: locale === "en" ? "Web Designer" : "Webdesigner",
          description: t.personDescription,
          url: `https://burmeister-webdesign.com${path}`,
          image:
            "https://burmeister-webdesign.com/images/gb-webdesign-arbeitsfoto.webp",
          telephone: "+493418605648",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Leipzig",
            addressRegion: "Sachsen",
            addressCountry: "DE",
          },
          knowsAbout: t.knowsAbout,
        }),
      },
    ],
  };
}

export function UeberMichPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <PageIntro
        eyebrow={t.introEyebrow}
        title={t.introTitle}
        text={t.introText}
      />

      <Section className="pt-0">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-arbeitsfoto.webp"
              alt={t.photoAlt}
              width={800}
              height={1000}
              loading="eager"
              className="w-full rounded-xl object-cover"
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {t.photoBadges.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-border bg-card text-foreground/70"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <Eyebrow>{t.whyEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.whyTitle}
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-foreground/72">
              {t.whyParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.whyList.map((item) => (
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
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <TrustMetricGrid />
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>{t.approachEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.approachTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            {t.approachItems.map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow>{t.standpointEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.standpointTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              {t.standpointText}
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button asChild variant="outline" className="rounded-full bg-card">
              <LocalizedLink to="/preise">
                {t.standpointButton}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
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
