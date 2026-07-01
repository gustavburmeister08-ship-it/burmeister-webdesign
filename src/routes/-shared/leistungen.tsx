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
import { LocalizedLink } from "@/components/site/LocalizedLink";
import {
  FaqAccordion,
  FinalCta,
  PageIntro,
  TrustMetricGrid,
  type FaqItem,
} from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, serviceJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    metaTitle: "Leistungen - Webdesign Leipzig für lokale Unternehmen",
    metaDescription:
      "Webdesign-Leistungen in Leipzig: Website-Erstellung, Relaunch, Texte, lokale SEO, Google Business Profil, Hosting und Wartung für kleine Unternehmen.",
    ogTitle: "Webdesign-Leistungen Leipzig - alles aus einer Hand",
    ogDescription:
      "Website, Relaunch, Texte, SEO-Grundlagen und Wartung für lokale Unternehmen in Leipzig.",
    breadcrumbLabel: "Leistungen",
    serviceName: "Webdesign-Leistungen für lokale Unternehmen in Leipzig",
    serviceDescription:
      "Website-Erstellung, Relaunch, Texte, lokale SEO, Google Business Profil, Hosting und Wartung für kleine Unternehmen.",
    itemListName: "Webdesign-Leistungen Leipzig",
    itemListItems: [
      "Website-Erstellung Leipzig",
      "Website-Relaunch Leipzig",
      "Texte und Struktur",
      "Lokale SEO Leipzig",
      "Google Business Profil",
      "Hosting und Wartung",
    ],
    faq: [
      {
        question: "Was ist bei einer Website immer enthalten?",
        answer:
          "Struktur, Design, Texte, Bildaufbereitung, mobile Optimierung, SEO-Grundlagen sowie Meta-Titel und Beschreibungen für alle Seiten.",
      },
      {
        question: "Muss ich selbst Texte schreiben?",
        answer:
          "Nein. Sie liefern die Informationen zu Ihrem Unternehmen, ich formuliere daraus klare, verständliche Website-Texte.",
      },
      {
        question: "Ist lokale SEO inklusive?",
        answer:
          "Ja. Ich recherchiere 30+ lokale Suchbegriffe und setze die SEO-Grundlagen für Ihre Seiten um. Erweiterungen wie Google Business Profil sind optional möglich.",
      },
      {
        question: "Bieten Sie auch Hosting und Wartung an?",
        answer:
          "Ja. Hosting und Wartung sind optional ab 30 EUR pro Monat möglich, inklusive Backups, Updates und kleiner Änderungen.",
      },
    ],
    introEyebrow: "Leistungen",
    introTitle:
      "Eine Website für lokale Unternehmen - mit allem, was wirklich wichtig ist.",
    introText:
      "Das Kernangebot ist klar: Website oder Relaunch für kleine Unternehmen in Leipzig. Texte, Struktur, Design, Technik und SEO-Grundlagen kommen aus einer Hand.",
    introBadges: [
      "Website ab 790 EUR",
      "Erste Vorschau nach 7 Tagen",
      "Direkter Kontakt mit Gustav",
    ],
    included: [
      {
        icon: Wrench,
        title: "Struktur & Design",
        text: "Eine klare Seite, die Besucher sofort verstehen und die zu Ihrem Betrieb passt.",
      },
      {
        icon: PenLine,
        title: "Texte inklusive",
        text: "Sie liefern die Infos, ich formuliere verständlich und anfrageorientiert.",
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
    ],
    addons: [
      {
        icon: ServerCog,
        title: "Hosting & Wartung",
        text: "Backups, Updates, kleine Änderungen und laufende Pflege ab 30 EUR/Monat.",
      },
      {
        icon: MapPin,
        title: "Google Business Profil",
        text: "Einrichtung mit passenden Kategorien, Bildern und Beschreibung für Google Maps.",
      },
      {
        icon: FileText,
        title: "Landingpages",
        text: "Fokussierte Seiten für Aktionen, einzelne Leistungen oder Google-Anzeigen.",
      },
    ],
    coreEyebrow: "Kernangebot",
    coreTitle: "Website-Erstellung und Relaunch ohne Technikstress.",
    coreText:
      "Sie bekommen keine komplizierte Agenturleistung, sondern ein klares Ergebnis: eine professionelle Website, die Vertrauen schafft, lokal gefunden wird und Anfragen einfacher macht.",
    coreCta: "Angebot einholen",
    addonsEyebrow: "Optionale Erweiterungen",
    addonsTitle: "Wenn Sie mehr brauchen, bleibt es trotzdem aus einer Hand.",
    seoEyebrow: "Lokale Sichtbarkeit",
    seoTitle: "Damit Kunden Sie in Leipzig finden.",
    seoText:
      "Lokale SEO heißt nicht, einfach ein paar Keywords einzubauen. Ich recherchiere Suchbegriffe, die zu Ihrer Branche und Region passen, und strukturiere Ihre Inhalte so, dass Kunden schneller verstehen, warum sie bei Ihnen richtig sind.",
    seoItems: [
      "30+ lokale Suchbegriffe recherchiert",
      "Meta-Titel und Beschreibungen für alle Seiten",
      "Google Business Profil optional mit Kategorien und Bildern",
    ],
    seoImageAlt: "Lokale SEO und Google Maps Sichtbarkeit für Unternehmen in Leipzig",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Was vor dem Start wichtig ist.",
    finalCtaTitle: "Nicht sicher, welche Leistung Sie brauchen?",
    finalCtaText:
      "Das klären wir im kostenlosen Erstgespräch. Ich sage Ihnen ehrlich, was sinnvoll ist und was Sie sich sparen können.",
  },
  en: {
    metaTitle: "Services - Web Design Leipzig for Local Businesses",
    metaDescription:
      "Web design services in Leipzig: website creation, relaunch, copywriting, local SEO, Google Business Profile, hosting and maintenance for small businesses.",
    ogTitle: "Web Design Services Leipzig - everything from one source",
    ogDescription:
      "Website, relaunch, copy, SEO basics and maintenance for local businesses in Leipzig.",
    breadcrumbLabel: "Services",
    serviceName: "Web Design Services for Local Businesses in Leipzig",
    serviceDescription:
      "Website creation, relaunch, copywriting, local SEO, Google Business Profile, hosting and maintenance for small businesses.",
    itemListName: "Web Design Services Leipzig",
    itemListItems: [
      "Website Creation Leipzig",
      "Website Relaunch Leipzig",
      "Copy and Structure",
      "Local SEO Leipzig",
      "Google Business Profile",
      "Hosting and Maintenance",
    ],
    faq: [
      {
        question: "What is always included in a website?",
        answer:
          "Structure, design, copy, image preparation, mobile optimization, SEO basics, plus meta titles and descriptions for every page.",
      },
      {
        question: "Do I have to write the texts myself?",
        answer:
          "No. You provide the information about your business, and I turn it into clear, easy-to-understand website copy.",
      },
      {
        question: "Is local SEO included?",
        answer:
          "Yes. I research 30+ local search terms and implement the SEO basics for your pages. Extensions like a Google Business Profile are available as an option.",
      },
      {
        question: "Do you also offer hosting and maintenance?",
        answer:
          "Yes. Hosting and maintenance are available as an option from 30 EUR per month, including backups, updates and small changes.",
      },
    ],
    introEyebrow: "Services",
    introTitle:
      "A website for local businesses - with everything that truly matters.",
    introText:
      "The core offer is simple: a new website or relaunch for small businesses in Leipzig. Copy, structure, design, technology and SEO basics all from one source.",
    introBadges: [
      "Website from 790 EUR",
      "First preview after 7 days",
      "Direct contact with Gustav",
    ],
    included: [
      {
        icon: Wrench,
        title: "Structure & Design",
        text: "A clear page that visitors understand instantly and that fits your business.",
      },
      {
        icon: PenLine,
        title: "Copy included",
        text: "You provide the details, I turn them into clear, inquiry-focused copy.",
      },
      {
        icon: Smartphone,
        title: "Mobile optimized",
        text: "The website works on smartphones first, not just on desktop.",
      },
      {
        icon: Search,
        title: "SEO basics",
        text: "30+ local search terms, meta data and clean page structure.",
      },
      {
        icon: ImageIcon,
        title: "Image preparation",
        text: "Existing photos are cropped, optimized and embedded to fit.",
      },
      {
        icon: Gauge,
        title: "Performance",
        text: "Target: Lighthouse performance score of 95+ on every website.",
      },
    ],
    addons: [
      {
        icon: ServerCog,
        title: "Hosting & Maintenance",
        text: "Backups, updates, small changes and ongoing care from 30 EUR/month.",
      },
      {
        icon: MapPin,
        title: "Google Business Profile",
        text: "Setup with fitting categories, images and description for Google Maps.",
      },
      {
        icon: FileText,
        title: "Landing pages",
        text: "Focused pages for promotions, individual services or Google ads.",
      },
    ],
    coreEyebrow: "Core offer",
    coreTitle: "Website creation and relaunch without the tech stress.",
    coreText:
      "You don't get a complicated agency service, but a clear result: a professional website that builds trust, gets found locally and makes it easier for people to get in touch.",
    coreCta: "Request a quote",
    addonsEyebrow: "Optional extensions",
    addonsTitle: "If you need more, it still stays from one source.",
    seoEyebrow: "Local visibility",
    seoTitle: "So customers can find you in Leipzig.",
    seoText:
      "Local SEO doesn't just mean adding a few keywords. I research search terms that fit your industry and region, and structure your content so customers understand faster why you're the right choice.",
    seoItems: [
      "30+ local search terms researched",
      "Meta titles and descriptions for every page",
      "Google Business Profile optional with categories and images",
    ],
    seoImageAlt: "Local SEO and Google Maps visibility for businesses in Leipzig",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "What matters before you start.",
    finalCtaTitle: "Not sure which service you need?",
    finalCtaText:
      "We'll clarify that in the free consultation. I'll tell you honestly what makes sense and what you can skip.",
  },
} as const;

export function leistungenHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/leistungen" : "/leistungen";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-website-mockup.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/leistungen"),
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: t.itemListName,
          itemListElement: t.itemListItems.map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            url: `https://burmeister-webdesign.com${path}`,
          })),
        }),
      },
    ],
  };
}

export function LeistungenPage({ locale }: { locale: Locale }) {
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
        <TrustMetricGrid />
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Eyebrow>{t.coreEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.coreTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              {t.coreText}
            </p>
            <Button
              asChild
              className="mt-7 rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <LocalizedLink to="/kontakt">
                {t.coreCta}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:col-span-7 sm:grid-cols-2">
            {t.included.map(({ icon: Icon, title, text }) => (
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
        <Eyebrow>{t.addonsEyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          {t.addonsTitle}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.addons.map(({ icon: Icon, title, text }) => (
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
            <Eyebrow>{t.seoEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.seoTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              {t.seoText}
            </p>
            <ul className="mt-7 space-y-3">
              {t.seoItems.map((item) => (
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
              alt={t.seoImageAlt}
              width={900}
              height={600}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
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

      <FinalCta title={t.finalCtaTitle} text={t.finalCtaText} />
    </>
  );
}
