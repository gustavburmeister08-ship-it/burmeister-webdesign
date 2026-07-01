// Generiert von scripts/import-ratgeber-article.mjs - Artikelinhalte vom burmeister-webdesign-ratgeber-bot
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/site/Section";
import { FaqAccordion, type FaqItem } from "@/components/site/RefreshBlocks";
import { WeitereArtikel } from "@/components/site/WeitereArtikel";
import { socialMeta } from "@/lib/seo";

const SLUG = "website-fuer-handwerksbetrieb-erstellen-lassen";
const HERO_IMAGE = "/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-hero.webp";
const HERO_ALT = "Handwerker plant seine Website am Laptop, helles modernes Arbeitsbüro";
const CATEGORY = "Website erstellen lassen";
const READ_TIME = "8 Min.";
const ARTICLE_DATE_DISPLAY = "1. Juli 2026";

const faqItems: FaqItem[] = [
  {
    "question": "Was kostet eine Website für einen Handwerksbetrieb?",
    "answer": "Ein einfacher One-Pager für einen Handwerksbetrieb startet ab 790 EUR und ist bei guter Vorbereitung in etwa zwei Wochen fertig. Eine mehrseitige Website mit eigenen Leistungsseiten und Referenzgalerie beginnt bei 1.390 EUR. Der genaue Preis ergibt sich nach einem kostenlosen Erstgespräch und einem konkreten Festpreisangebot."
  },
  {
    "question": "Wie lange dauert es, eine Handwerker-Website erstellen zu lassen?",
    "answer": "Bei guter Vorbereitung dauert eine Handwerker-Website typischerweise zwei bis vier Wochen. Die erste Vorschau ist meist nach sieben Tagen fertig. Wie lange der Prozess wirklich dauert, hängt vor allem von Ihrer Mitwirkung ab: Wer Fotos und Inhalte schnell liefert, bekommt auch schnell eine fertige Website."
  },
  {
    "question": "Kann ich meine Handwerker-Website auch selbst mit einem Baukasten erstellen?",
    "answer": "Technisch ja, aber der Aufwand ist größer als gedacht und das Ergebnis bei lokaler SEO oft schwächer. Baukastenlösungen wie Wix oder Jimdo haben Einschränkungen bei der URL-Struktur und lokalen Optimierungen. Für Betriebe, die über Google neue Kunden gewinnen wollen, ist ein professioneller Webdesigner meist die sinnvollere Investition."
  },
  {
    "question": "Welche Inhalte muss ich vor dem Website-Auftrag bereithalten?",
    "answer": "Mindestens drei Dinge sollten Sie vorbereitet haben: erstens eine klare Leistungsliste Ihres Betriebs, zweitens fünf bis zehn eigene Referenzfotos und drittens eine Einschätzung zu Ihrer Zielregion. Haben Sie diese drei Punkte parat, kann ein qualifizierter Webdesigner oft binnen 24 Stunden ein konkretes Angebot erstellen."
  },
  {
    "question": "Braucht mein Handwerksbetrieb wirklich eine eigene Website?",
    "answer": "Fast jeder Handwerksbetrieb, der regional neue Kunden über Google gewinnen will, braucht eine eigene Website. Empfehlungen und soziale Medien allein reichen nicht mehr, weil viele Kunden direkt suchen, bevor sie jemanden ansprechen. Eine einfache Website ab 790 EUR kann diese Lücke schließen und dauerhaft neue Anfragen erzeugen."
  }
];

interface SourceItem { title: string; url: string }
const SOURCE_ITEMS: SourceItem[] = [
  {
    "title": "In 6 Schritten zur idealen Website für Handwerker",
    "url": "https://www.ibau.de/akademie/wissenswertes/website-handwerker/"
  },
  {
    "title": "Webseite für Handwerker: häufige Fehler",
    "url": "https://bau.org/text/260325-webseite-handwerker-fehler"
  },
  {
    "title": "Handwerker-Website: Top-Anbieter, Kosten und Tipps 2026",
    "url": "https://websitewissen.com/handwerker-website"
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": "https://burmeister-webdesign.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Ratgeber",
      "item": "https://burmeister-webdesign.com/ratgeber"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Website für Handwerksbetrieb erstellen lassen: Das brauchen Sie vorher",
      "item": "https://burmeister-webdesign.com/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen"
    }
  ]
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "inLanguage": "de",
  "headline": "Website für Handwerksbetrieb erstellen lassen: Das brauchen Sie vorher",
  "description": "Website für Handwerksbetrieb erstellen lassen: Was Sie vorher brauchen, was eine gute Handwerker-Website kostet und welche Fehler Betriebe in Leipzig häufig machen.",
  "keywords": "Website für Handwerksbetrieb, Webdesign Handwerker Leipzig, Handwerker Website Beispiele, Website Handwerksbetrieb Kosten, Homepage für Handwerker",
  "image": "https://burmeister-webdesign.com/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-hero.webp",
  "author": {
    "@type": "Organization",
    "name": "Burmeister Webdesign"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Burmeister Webdesign",
    "logo": {
      "@type": "ImageObject",
      "url": "https://burmeister-webdesign.com/images/gb-webdesign-logo-lang-schwarz-320.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://burmeister-webdesign.com/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen"
  },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-01"
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine Website für einen Handwerksbetrieb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein einfacher One-Pager für einen Handwerksbetrieb startet ab 790 EUR und ist bei guter Vorbereitung in etwa zwei Wochen fertig. Eine mehrseitige Website mit eigenen Leistungsseiten und Referenzgalerie beginnt bei 1.390 EUR. Der genaue Preis ergibt sich nach einem kostenlosen Erstgespräch und einem konkreten Festpreisangebot."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert es, eine Handwerker-Website erstellen zu lassen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei guter Vorbereitung dauert eine Handwerker-Website typischerweise zwei bis vier Wochen. Die erste Vorschau ist meist nach sieben Tagen fertig. Wie lange der Prozess wirklich dauert, hängt vor allem von Ihrer Mitwirkung ab: Wer Fotos und Inhalte schnell liefert, bekommt auch schnell eine fertige Website."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich meine Handwerker-Website auch selbst mit einem Baukasten erstellen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technisch ja, aber der Aufwand ist größer als gedacht und das Ergebnis bei lokaler SEO oft schwächer. Baukastenlösungen wie Wix oder Jimdo haben Einschränkungen bei der URL-Struktur und lokalen Optimierungen. Für Betriebe, die über Google neue Kunden gewinnen wollen, ist ein professioneller Webdesigner meist die sinnvollere Investition."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Inhalte muss ich vor dem Website-Auftrag bereithalten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mindestens drei Dinge sollten Sie vorbereitet haben: erstens eine klare Leistungsliste Ihres Betriebs, zweitens fünf bis zehn eigene Referenzfotos und drittens eine Einschätzung zu Ihrer Zielregion. Haben Sie diese drei Punkte parat, kann ein qualifizierter Webdesigner oft binnen 24 Stunden ein konkretes Angebot erstellen."
      }
    },
    {
      "@type": "Question",
      "name": "Braucht mein Handwerksbetrieb wirklich eine eigene Website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fast jeder Handwerksbetrieb, der regional neue Kunden über Google gewinnen will, braucht eine eigene Website. Empfehlungen und soziale Medien allein reichen nicht mehr, weil viele Kunden direkt suchen, bevor sie jemanden ansprechen. Eine einfache Website ab 790 EUR kann diese Lücke schließen und dauerhaft neue Anfragen erzeugen."
      }
    }
  ]
};
const imageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-hero.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/crop-craftsman-working-on-laptop-in-workplace-5973975/",
    "creditText": "Ono  Kosuki / Pexels",
    "copyrightNotice": "© Ono  Kosuki / Pexels",
    "creator": {
      "@type": "Person",
      "name": "Ono  Kosuki",
      "url": "https://www.pexels.com/@ono-kosuki"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-detail-1.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/macbook-pro-displaying-website-version-2-on-table-285814/",
    "creditText": "Tranmautritam / Pexels",
    "copyrightNotice": "© Tranmautritam / Pexels",
    "creator": {
      "@type": "Person",
      "name": "Tranmautritam",
      "url": "https://www.pexels.com/@tranmautritam"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-detail-2.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/people-wearing-long-sleeves-standing-in-a-conference-room-8761650/",
    "creditText": "Pavel Danilyuk / Pexels",
    "copyrightNotice": "© Pavel Danilyuk / Pexels",
    "creator": {
      "@type": "Person",
      "name": "Pavel Danilyuk",
      "url": "https://www.pexels.com/@pavel-danilyuk"
    }
  }
];

export const Route = createFileRoute("/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen")({
  head: () => ({
    meta: [
      { title: "Website für Handwerksbetrieb erstellen lassen" },
      { name: "description", content: "Website für Handwerksbetrieb erstellen lassen: Was Sie vorher brauchen, was eine gute Handwerker-Website kostet und welche Fehler Betriebe in Leipzig häufig machen." },
      ...socialMeta({
        title: "Website für Handwerksbetrieb erstellen lassen",
        description: "Website für Handwerksbetrieb erstellen lassen: Was Sie vorher brauchen, was eine gute Handwerker-Website kostet und welche Fehler Betriebe in Leipzig häufig machen.",
        path: "/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen",
        image: "https://burmeister-webdesign.com/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-hero.webp",
      }),
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      ...(faqSchema ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }] : []),
      ...imageSchemas.map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/8] w-full md:aspect-[21/8]">
          <img
            src={HERO_IMAGE}
            alt={HERO_ALT}
            width={1600}
            height={750}
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8 md:pb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/70">
              <Tag size={12} /> {"Ratgeber · "}{CATEGORY}
            </span>
            <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-background md:text-5xl">
              {"Website für Handwerksbetrieb erstellen lassen: Das brauchen Sie vorher"}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-background/70">
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {READ_TIME}
              </span>
              <span>{ARTICLE_DATE_DISPLAY}</span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div
            className="ratgeber-prose mb-8"
            dangerouslySetInnerHTML={{ __html: "<p>Viele Handwerksbetriebe kommen zur ersten Beratung mit einem klaren Wunsch: eine ordentliche Website, die Anfragen bringt. Was dabei oft fehlt, sind konkrete Unterlagen. Keine eigenen Fotos, keine sortierte Leistungsliste, keine Entscheidung zur Zielregion. Das Ergebnis: Der Abstimmungsaufwand steigt, die Umsetzung dauert länger als nötig. In meiner Arbeit als Webdesigner in Leipzig zeigt sich regelmäßig, dass Betriebe, die sich vor dem Auftrag etwa 30 Minuten Zeit nehmen, am Ende eine bessere Website für ihren Handwerksbetrieb erhalten, und das in kürzerer Zeit. Dieser Ratgeber zeigt Ihnen, was Sie bereithalten sollten.</p>" }}
          />

            <nav aria-label="Inhaltsverzeichnis" className="mb-8 rounded-xl border border-border bg-card px-5 py-4">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{"Inhalt"}</p>
              <ol className="space-y-1.5 text-sm">
                <li><a href="#abschnitt-1" className="text-primary hover:underline">{"Kurzantwort"}</a></li>
                <li><a href="#abschnitt-2" className="text-primary hover:underline">{"Für wen ist das Thema relevant?"}</a></li>
                <li><a href="#abschnitt-3" className="text-primary hover:underline">{"Baukasten oder Webdesigner: Was passt zu Ihrem Betrieb?"}</a></li>
                <li><a href="#abschnitt-4" className="text-primary hover:underline">{"Kostenlogik"}</a></li>
                <li><a href="#abschnitt-5" className="text-primary hover:underline">{"Typische Fehler"}</a></li>
                <li><a href="#abschnitt-6" className="text-primary hover:underline">{"Entscheidungshilfe"}</a></li>
                <li><a href="#abschnitt-7" className="text-primary hover:underline">{"Fazit"}</a></li>
              </ol>
            </nav>

            <figure className="mb-10 overflow-hidden rounded-xl">
              <img
                src="/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-detail-1.webp"
                alt="Moderne Unternehmenswebsite auf einem Laptop-Bildschirm, helles Büro"
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                {"Eine klare Website-Struktur sorgt dafür, dass Besucher schnell finden, was sie suchen, und eine Anfrage stellen. Foto: Tranmautritam / Pexels"}
              </figcaption>
            </figure>

            <h2 id="abschnitt-1" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Kurzantwort"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Bevor ein Webdesigner mit der Arbeit beginnen kann, braucht er drei Dinge von Ihnen: erstens eine klare Liste Ihrer Leistungen (z. B. Elektroinstallation, Badumbauten, Notdienst), zweitens mindestens fünf bis zehn eigene Fotos von abgeschlossenen Projekten oder Ihrem Team, drittens eine Einschätzung, für welche Region Sie tätig sind (z. B. Leipzig und Umgebung oder bestimmte Stadtteile). Mit diesen Informationen lässt sich ein konkretes Angebot oft innerhalb von 24 Stunden erstellen. Fehlt eines davon, verlängert sich der Abstimmungsprozess typischerweise um eine bis zwei Wochen.</p><p>Was Sie <strong>nicht</strong> vorher brauchen: fertige Texte, ein grafisches Konzept oder technisches Vorwissen. Das gehört zur Arbeit des Webdesigners. Ihre Aufgabe ist es, den Inhalt zu liefern. Die Gestaltung und Struktur übernimmt der Profi.</p>" }}
            />

            <h2 id="abschnitt-2" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Für wen ist das Thema relevant?"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Dieses Thema richtet sich an alle Handwerksbetriebe in Leipzig und Umgebung, die eine Website neu erstellen oder grundlegend überarbeiten lassen wollen. Drei Situationen kommen dabei besonders häufig vor.</p><p>Die erste: Betriebe ohne eigene Website. Viele Solo-Handwerker und kleine Betriebe arbeiten bisher ausschließlich über Empfehlungen, lokale Anzeigenportale oder eine Facebook-Seite. Das funktioniert bis zu einem gewissen Punkt, begrenzt aber die Reichweite erheblich, weil Interessenten, die aktiv bei Google suchen, Sie schlicht nicht finden.</p><p>Die zweite: Betriebe mit veralteter Website. Eine Seite, die seit 2015 nicht mehr angefasst wurde, ist auf modernen Smartphones oft schwer bedienbar, lädt langsam und vermittelt nicht das nötige Vertrauen. Viele potenzielle Kunden entscheiden innerhalb weniger Sekunden, ob ein Betrieb seriös wirkt.</p><p>Die dritte: Betriebe nach einer Expansion. Wer sich als Soloselbstständiger vergrößert hat und nun ein Team führt, braucht eine Website, die das widerspiegelt. Einen ersten Überblick über mögliche Leistungspakete finden Sie in der <a href=\"/leistungen\">Leistungsübersicht</a>.</p>" }}
            />

            <Card className="my-10 border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center md:p-6">
                <div className="flex-1">
                  <p className="mb-1 font-semibold text-foreground">{"Sie möchten eine Website für Ihren Handwerksbetrieb?"}</p>
                  <p className="text-sm text-foreground/70">{"Ich prüfe mit Ihnen, welche Lösung zu Ihrem Betrieb, Ihrem Budget und Ihren Zielen passt. Kostenloses Erstgespräch, Festpreisangebot, erste Vorschau nach 7 Tagen."}</p>
                </div>
                <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  <Link to="/leistungen">{"Leistungen ansehen"}</Link>
                </Button>
              </CardContent>
            </Card>

            <h2 id="abschnitt-3" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Baukasten oder Webdesigner: Was passt zu Ihrem Betrieb?"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Eine professionell umgesetzte Website bringt einem Handwerksbetrieb klare Vorteile: Sie ist für lokale Suchanfragen optimiert, auf allen Geräten sofort bedienbar und zeigt potenziellen Kunden vom ersten Blick an, dass hier ein seriöser Betrieb dahintersteht.</p><div class=\"tip-box\">Wenn Sie ausschließlich über bestehende Netzwerke und Empfehlungen arbeiten und das langfristig so bleibt, kann ein einfacher One-Pager ab 790 EUR ausreichen. Wer aktiv neue Kunden über Google gewinnen will, braucht eine mehrseitige Website mit lokaler SEO-Optimierung.</div><p>Viele Handwerksbetriebe stehen vor der Frage: Baukasten oder professioneller Webdesigner? Beide Wege haben ihre Berechtigung, aber auch klare Unterschiede:</p><table><thead><tr><th>Kriterium</th><th>Baukasten (z. B. Wix, Jimdo)</th><th>Professionelles Webdesign</th></tr></thead><tbody><tr><td>Kosten initial</td><td>gering (ab ca. 15 EUR im Monat)</td><td>ab 790 EUR einmalig</td></tr><tr><td>Laufende Kosten</td><td>Abo-Gebühren dauerhaft</td><td>ab 30 EUR im Monat optional</td></tr><tr><td>Lokale SEO</td><td>eingeschränkt, oft keine saubere URL-Struktur</td><td>gezielt auf Ihre Region ausgerichtet</td></tr><tr><td>Mobiloptimierung</td><td>vorhanden, aber nicht immer sauber umgesetzt</td><td>individuell getestet und optimiert</td></tr><tr><td>Zeitaufwand für Sie</td><td>hoch (alles selbst)</td><td>gering (Sie liefern Inhalte, der Designer übernimmt den Rest)</td></tr><tr><td>Ergebnis nach 6 Monaten</td><td>stark von Eigeneinsatz abhängig</td><td>stabile Basis für lokale Sichtbarkeit</td></tr></tbody></table><p>Für Betriebe, die dauerhaft über Google neue Kunden gewinnen wollen, überwiegen die Vorteile einer professionellen Lösung. Für sehr kleine Betriebe ohne Wachstumsambitionen kann ein Baukasten ein vertretbarer Einstieg sein, wenn man bereit ist, regelmäßig selbst Zeit zu investieren.</p>" }}
            />

            <figure className="mb-6 overflow-hidden rounded-xl shadow-sm md:float-left md:mb-3 md:mr-7 md:w-[42%]">
              <img
                src="/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-detail-2.webp"
                alt="Handwerker schaut auf Smartphone, digitale Planung im Berufsalltag"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 px-1 text-xs text-muted-foreground">
                {"Auch im Handwerk zählt digitale Sichtbarkeit: Wer auf dem Smartphone gefunden wird, bekommt mehr Anfragen. Foto: Pavel Danilyuk / Pexels"}
              </figcaption>
            </figure>

            <h2 id="abschnitt-4" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Kostenlogik"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Die Kosten für eine Website für einen Handwerksbetrieb hängen von zwei Faktoren ab: dem Seitenumfang und dem Aufwand für individuelle Elemente wie Kontaktformulare, Galerielösungen oder Notdienst-Hinweise.</p><p>Bei Burmeister Webdesign gelten folgende Richtwerte: Ein One-Pager, der alle wesentlichen Informationen auf einer scrollbaren Seite bündelt, startet ab 790 EUR. Er eignet sich gut für Soloselbstständige mit überschaubarem Leistungsspektrum. Eine mehrseitige Website mit eigenen Seiten für verschiedene Leistungsbereiche, einer Referenzgalerie und einem Kontaktformular beginnt bei 1.390 EUR. Das ist der Standard für die meisten kleinen und mittleren Handwerksbetriebe in Leipzig.</p><p>Was die Kosten nach oben treibt: fehlende Referenzfotos (dann braucht es Stockbilder oder ein Fotoshooting), Texte, die komplett erstellt werden müssen, oder besondere technische Anforderungen wie Online-Terminbuchung. Was ohne Aufpreis enthalten ist: mobile Optimierung, Grundlagen-SEO für lokale Suchanfragen (über 30 lokale Suchbegriffe), Meta-Titel und Beschreibungen sowie die Einweisung nach dem Launch.</p><p>Monatliche Wartung und Hosting sind optional und starten ab 30 EUR im Monat. Darin enthalten sind regelmäßige kleine Anpassungen, Software-Updates und ein direkter Ansprechpartner, wenn etwas nicht stimmt. Der Ablauf ist transparent: Erstgespräch (15 Minuten, kostenlos), dann ein Festpreisangebot, erste Vorschau nach 7 Tagen, Feedbackrunde, Launch.</p>" }}
            />

            <h2 id="abschnitt-5" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Typische Fehler"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<div class=\"warning-box\">Der häufigste Fehler: eine Website beauftragen, ohne eigene Referenzfotos bereitzuhalten. Stockfotos wirken professionell, aber sie vermitteln kein Vertrauen in Ihre konkrete Arbeit. Kunden wollen sehen, was Sie wirklich können.</div><p>Fehler Nummer zwei: Die E-Mail-Adresse passt nicht zur Domain. Wer eine Website unter beispiel-handwerk.de betreibt und weiterhin über einen Gmail-Account erreichbar ist, wirkt inkonsistent. Eine passende E-Mail-Adresse (info@beispiel-handwerk.de) gehört zum Gesamtbild und kostet meist nichts extra.</p><p>Fehler Nummer drei: Das Google-Business-Profil wird vergessen. Eine Website allein reicht für lokale Sichtbarkeit nicht aus. Das kostenlose Google-Business-Profil ergänzt die Website und ist oft der erste Kontaktpunkt für Kunden, die auf Google Maps suchen. Beides zusammen macht einen spürbaren Unterschied in der Auffindbarkeit.</p><p>Fehler Nummer vier: Zu viele Informationen auf einmal. Wer seinen Betrieb, seine Geschichte, alle Mitarbeiter, alle Leistungen und alle Zertifikate auf der Startseite unterbringen will, verliert die Besucher. Eine klare Struktur mit dem Wichtigsten zuerst ist wirksamer als der Versuch, auf Anhieb alles gleichzeitig zu zeigen.</p>" }}
            />

            <h2 id="abschnitt-6" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Entscheidungshilfe"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Bevor Sie einen Auftrag für eine Handwerker-Website erteilen, lohnt sich ein kurzer Selbsttest. Gehen Sie diese fünf Punkte durch:</p><ul><li>Ich kann meine Leistungen in fünf bis acht Sätzen klar beschreiben.</li><li>Ich habe mindestens fünf Referenzfotos von abgeschlossenen Projekten bereit.</li><li>Ich kenne meine Zielregion (z. B. Leipzig Süd, Landkreis Leipzig oder ganz Sachsen).</li><li>Ich habe eine eigene Domain oder weiß, wie ich eine registrieren kann.</li><li>Ich habe mindestens eine Google-Bewertung, die ich auf der Website erwähnen darf.</li></ul><p>Wer vier oder fünf dieser Punkte erfüllt, ist gut vorbereitet und erhält in der Regel innerhalb von zwei bis drei Wochen eine fertige Website. Schauen Sie sich gerne <a href=\"/referenzen\">Referenzen aus ähnlichen Branchen</a> an, um ein Gefühl für mögliche Ergebnisse zu bekommen.</p><p>Wer bei mehreren Punkten noch unsicher ist, sollte die Vorbereitung zunächst abschließen. Das kostet jetzt etwa eine Stunde, spart aber Zeit und Abstimmungsaufwand im laufenden Prozess erheblich.</p>" }}
            />

            <h2 id="abschnitt-7" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Fazit"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Eine Website für Ihren Handwerksbetrieb erstellen zu lassen, ist kein kompliziertes Projekt, wenn die Grundlagen stimmen. Wer mit konkreten Leistungsinformationen, eigenen Fotos und einer klaren Zielregion in das Erstgespräch geht, bekommt schneller eine Website, die auch Anfragen bringt. Die drei wichtigsten Vorbereitungsschritte: Leistungsliste zusammenstellen, Referenzfotos sammeln, Zielregion festlegen. Alles andere übernimmt ein erfahrener Webdesigner.</p><p>Wenn Sie unsicher sind, wo Sie anfangen sollen, biete ich ein kostenloses Erstgespräch an, in dem wir gemeinsam klären, was für Ihren Betrieb sinnvoll ist. In 15 Minuten finden wir heraus, ob und wie ich Ihnen helfen kann, bevor wir konkrete Schritte besprechen. <a href=\"/kontakt\">Jetzt über das Kontaktformular melden</a> und Termin vereinbaren.</p>" }}
            />

            <div className="mt-10 border-t border-border pt-6">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{"Quellen"}</p>
              <ul className="space-y-1.5 text-sm">
                {SOURCE_ITEMS.map((source, i) => (
                  <li key={i}>
                    <a href={source.url} target="_blank" rel="noopener" className="text-primary hover:underline">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 clear-both text-xs text-muted-foreground/70" dangerouslySetInnerHTML={{ __html: "<a href=\"https://www.pexels.com\" target=\"_blank\" rel=\"noopener\">Photos provided by Pexels</a> · Foto: <a href=\"https://www.pexels.com/photo/crop-craftsman-working-on-laptop-in-workplace-5973975/\" target=\"_blank\" rel=\"noopener\">Ono  Kosuki / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/macbook-pro-displaying-website-version-2-on-table-285814/\" target=\"_blank\" rel=\"noopener\">Tranmautritam / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/people-wearing-long-sleeves-standing-in-a-conference-room-8761650/\" target=\"_blank\" rel=\"noopener\">Pavel Danilyuk / Pexels</a> (Pexels License)" }} />
        </div>
      </Section>

      {faqItems.length > 0 && (
        <Section className="bg-secondary/45">
          <Eyebrow>Häufige Fragen</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
            Kurz beantwortet.
          </h2>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={faqItems} />
          </div>
        </Section>
      )}

      <WeitereArtikel currentSlug={SLUG} />

      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">
              <span className="h-px w-6 bg-[var(--brand-gold)]" />
              Kostenloses Erstgespräch
            </span>
            <h2 className="mt-5 font-serif text-3xl text-background md:text-4xl">
              {"Sie möchten eine Website für Ihren Handwerksbetrieb?"}
            </h2>
            <p className="mt-4 max-w-2xl text-background/70">{"Ich prüfe mit Ihnen, welche Lösung zu Ihrem Betrieb, Ihrem Budget und Ihren Zielen passt. Kostenloses Erstgespräch, Festpreisangebot, erste Vorschau nach 7 Tagen."}</p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button asChild className="rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90">
              <Link to="/leistungen">
                {"Leistungen ansehen"}
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
