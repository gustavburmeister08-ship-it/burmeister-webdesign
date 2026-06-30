import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/site/Section";
import { PageIntro, FinalCta } from "@/components/site/RefreshBlocks";
import { RatgeberCard } from "@/components/site/RatgeberCard";
import { RATGEBER_ARTIKEL } from "@/lib/ratgeber-articles";
import { breadcrumbJsonLd, socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/ratgeber/")({
  head: () => ({
    meta: [
      { title: "Ratgeber - Webdesign Leipzig für lokale Unternehmen" },
      {
        name: "description",
        content:
          "Praxisnahe Ratgeber-Artikel rund um Website-Erstellung, Relaunch, lokale SEO und Preise für lokale Unternehmen in Leipzig.",
      },
      ...socialMeta({
        title: "Ratgeber - Webdesign Leipzig",
        description:
          "Praxisnahe Artikel zu Website-Kosten, Relaunch, lokaler Sichtbarkeit und mehr für lokale Unternehmen.",
        path: "/ratgeber",
      }),
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/ratgeber" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/ratgeber", "Ratgeber")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Burmeister Webdesign Ratgeber",
          itemListElement: RATGEBER_ARTIKEL.map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: article.title,
            url: `https://burmeister-webdesign.com/ratgeber/${article.slug}`,
          })),
        }),
      },
    ],
  }),
  component: RatgeberPage,
});

function RatgeberPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ratgeber"
        title="Praxisnahe Antworten für Ihre Website."
        text="Kosten, Relaunch, lokale Sichtbarkeit und mehr: ehrlich erklärt, ohne Fachsprache und ohne leere Versprechen."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {["Kein Keyword-Stuffing", "Echte Preise statt Schätzungen", "Direkt von Gustav"].map(
            (item) => (
              <Badge key={item} variant="outline" className="border-border bg-card text-foreground/70">
                {item}
              </Badge>
            ),
          )}
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
            <p className="text-foreground/65">
              Die ersten Ratgeber-Artikel werden gerade vorbereitet. Schauen Sie bald wieder vorbei.
            </p>
          </div>
        )}
      </Section>

      <FinalCta
        title="Nicht das passende Thema gefunden?"
        text="Schreiben Sie mir kurz, was Sie wissen möchten. Ich beantworte Ihre Frage im kostenlosen Erstgespräch direkt."
      />
    </>
  );
}
