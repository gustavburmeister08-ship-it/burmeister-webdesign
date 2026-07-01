import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/site/Section";
import { PageIntro, FinalCta } from "@/components/site/RefreshBlocks";
import { RatgeberCard } from "@/components/site/RatgeberCard";
import { RATGEBER_ARTIKEL } from "@/lib/ratgeber-articles";
import { breadcrumbJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    title: "Ratgeber - Webdesign Leipzig für lokale Unternehmen",
    description:
      "Praxisnahe Ratgeber-Artikel rund um Website-Erstellung, Relaunch, lokale SEO und Preise für lokale Unternehmen in Leipzig.",
    ogTitle: "Ratgeber - Webdesign Leipzig",
    ogDescription:
      "Praxisnahe Artikel zu Website-Kosten, Relaunch, lokaler Sichtbarkeit und mehr für lokale Unternehmen.",
    breadcrumbLabel: "Ratgeber",
    intro: {
      eyebrow: "Ratgeber",
      title: "Praxisnahe Antworten für Ihre Website.",
      text: "Kosten, Relaunch, lokale Sichtbarkeit und mehr: ehrlich erklärt, ohne Fachsprache und ohne leere Versprechen.",
      badges: [
        "Kein Keyword-Stuffing",
        "Echte Preise statt Schätzungen",
        "Direkt von Gustav",
      ],
    },
    empty:
      "Die ersten Ratgeber-Artikel werden gerade vorbereitet. Schauen Sie bald wieder vorbei.",
    cta: {
      title: "Nicht das passende Thema gefunden?",
      text: "Schreiben Sie mir kurz, was Sie wissen möchten. Ich beantworte Ihre Frage im kostenlosen Erstgespräch direkt.",
    },
  },
  en: {
    title: "Guides - Web Design Leipzig for Local Businesses",
    description:
      "Practical guides on website creation, relaunches, local SEO and pricing for local businesses in Leipzig.",
    ogTitle: "Guides - Web Design Leipzig",
    ogDescription:
      "Practical articles on website costs, relaunches, local visibility and more for local businesses.",
    breadcrumbLabel: "Guides",
    intro: {
      eyebrow: "Guides",
      title: "Practical answers for your website.",
      text: "Costs, relaunches, local visibility and more: explained honestly, without jargon and without empty promises.",
      badges: [
        "No keyword stuffing",
        "Real prices instead of estimates",
        "Straight from Gustav",
      ],
    },
    empty: "The first guide articles are being prepared. Check back soon.",
    cta: {
      title: "Didn't find the right topic?",
      text: "Write to me briefly about what you'd like to know. I'll answer your question directly in the free consultation.",
    },
  },
} as const;

export function ratgeberIndexHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/ratgeber" : "/ratgeber";

  return {
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/ratgeber"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd(path, t.breadcrumbLabel, locale),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name:
            locale === "en"
              ? "Burmeister Webdesign Guides"
              : "Burmeister Webdesign Ratgeber",
          itemListElement: RATGEBER_ARTIKEL.map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: article.title[locale],
            url: `https://burmeister-webdesign.com${locale === "en" ? "/en" : ""}/ratgeber/${article.slug}`,
          })),
        }),
      },
    ],
  };
}

export function RatgeberIndexPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <PageIntro eyebrow={t.intro.eyebrow} title={t.intro.title} text={t.intro.text}>
        <div className="mt-8 flex flex-wrap gap-2">
          {t.intro.badges.map((item) => (
            <Badge key={item} variant="outline" className="border-border bg-card text-foreground/70">
              {item}
            </Badge>
          ))}
        </div>
      </PageIntro>

      <Section className="pt-0">
        {RATGEBER_ARTIKEL.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RATGEBER_ARTIKEL.map((article) => (
              <RatgeberCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
            <p className="text-foreground/65">{t.empty}</p>
          </div>
        )}
      </Section>

      <FinalCta title={t.cta.title} text={t.cta.text} />
    </>
  );
}
