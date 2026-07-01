// Generiert von scripts/import-ratgeber-article.mjs - Artikelinhalte vom burmeister-webdesign-ratgeber-bot
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/site/Section";
import { FaqAccordion, type FaqItem } from "@/components/site/RefreshBlocks";
import { WeitereArtikel } from "@/components/site/WeitereArtikel";
import { socialMeta } from "@/lib/seo";

const SLUG = "website-relaunch-kosten-leipzig";
const HERO_IMAGE = "/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp";
const HERO_ALT = "Unternehmer betrachtet die eigene Website am Laptop im hellen Büro";
const CATEGORY = "Website-Relaunch";
const READ_TIME = "8 Min.";
const ARTICLE_DATE_DISPLAY = "1. Juli 2026";

const faqItems: FaqItem[] = [
  {
    "question": "Was kostet ein Website-Relaunch für ein kleines Unternehmen in Leipzig?",
    "answer": "Ein vollständiger Relaunch einer bestehenden Website startet bei einem selbstständigen Webdesigner in Leipzig realistisch ab 1.590 EUR als Festpreis. Enthalten sind meist Struktur, Design, Texte, mobile Optimierung und SEO-Grundlagen. Der genaue Preis richtet sich nach Seitenumfang und wiederverwendbaren Inhalten und wird im kostenlosen Erstgespräch konkret ermittelt."
  },
  {
    "question": "Wie lange dauert ein Website-Relaunch von der Anfrage bis zum Launch?",
    "answer": "Nach dem kostenlosen 15-minütigen Erstgespräch folgt ein Festpreisangebot, danach steht meist innerhalb von etwa sieben Tagen eine erste Vorschau. Nach einer Feedbackrunde erfolgt der Launch, insgesamt liegt ein überschaubarer Relaunch damit häufig bei zwei bis drei Wochen Gesamtdauer, abhängig von der Rückmeldegeschwindigkeit des Unternehmens."
  },
  {
    "question": "Verliert meine Website beim Relaunch ihre bisherigen Google-Rankings?",
    "answer": "Ohne sauberes URL-Mapping und Weiterleitungen von alten auf neue Adressen drohen tatsächlich Rankingverluste, weil Backlinks und Suchmaschinenindex ins Leere laufen. Mit vollständigen 301-Weiterleitungen, erhaltenen Kerninhalten und Monitoring in den ersten vier bis acht Wochen nach dem Launch lässt sich dieses Risiko deutlich reduzieren."
  },
  {
    "question": "Lohnt sich ein Website-Baukasten statt eines Relaunches durch einen Webdesigner?",
    "answer": "Ein Baukasten kann für ein sehr einfaches, temporäres Angebot ausreichen, bietet aber meist wenig Individualität und keine feste Ansprechperson. Für Betriebe, die Wert auf ein zugeschnittenes Design, persönliche Betreuung und mitgelieferte SEO-Grundlagen legen, ist ein individueller Relaunch ab 1.590 EUR häufig die wirtschaftlich sinnvollere Entscheidung."
  }
];

interface SourceItem { title: string; url: string }
const SOURCE_ITEMS: SourceItem[] = [
  {
    "title": "Website Relaunch Kosten 2026: Realistische Preise (davidkeiser.de)",
    "url": "https://davidkeiser.de/wissen/website-relaunch-kosten/"
  },
  {
    "title": "Website-Relaunch Kosten 2026: Budget- und Prozessleitfaden (webdelo.de)",
    "url": "https://webdelo.de/blog/website-relaunch-kosten-2026"
  },
  {
    "title": "Die 10 häufigsten SEO Fehler beim Website Relaunch (luna-park.de)",
    "url": "https://www.luna-park.de/blog/28104-seo-fehler-beim-relaunch/"
  },
  {
    "title": "Website-Relaunch ohne Rankingverlust: SEO-Hürden (raidboxes.io)",
    "url": "https://raidboxes.io/en/blog/online-marketing/website-relaunch-seo/"
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
      "name": "Website-Relaunch Kosten: Womit realistisch rechnen?",
      "item": "https://burmeister-webdesign.com/ratgeber/website-relaunch-kosten-leipzig"
    }
  ]
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "inLanguage": "de",
  "headline": "Website-Relaunch Kosten: Womit realistisch rechnen?",
  "description": "Website-Relaunch Kosten für Leipziger Unternehmen: reale Preise ab 1.590 EUR, die wichtigsten Kostenfaktoren und wie Sie typische Rankingverluste beim Relaunch vermeiden.",
  "keywords": "Website Relaunch Kosten, Relaunch Website Preis, Website überarbeiten Kosten, Was kostet ein Relaunch, Relaunch Website Leipzig",
  "image": "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp",
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
    "@id": "https://burmeister-webdesign.com/ratgeber/website-relaunch-kosten-leipzig"
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
      "name": "Was kostet ein Website-Relaunch für ein kleines Unternehmen in Leipzig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein vollständiger Relaunch einer bestehenden Website startet bei einem selbstständigen Webdesigner in Leipzig realistisch ab 1.590 EUR als Festpreis. Enthalten sind meist Struktur, Design, Texte, mobile Optimierung und SEO-Grundlagen. Der genaue Preis richtet sich nach Seitenumfang und wiederverwendbaren Inhalten und wird im kostenlosen Erstgespräch konkret ermittelt."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert ein Website-Relaunch von der Anfrage bis zum Launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nach dem kostenlosen 15-minütigen Erstgespräch folgt ein Festpreisangebot, danach steht meist innerhalb von etwa sieben Tagen eine erste Vorschau. Nach einer Feedbackrunde erfolgt der Launch, insgesamt liegt ein überschaubarer Relaunch damit häufig bei zwei bis drei Wochen Gesamtdauer, abhängig von der Rückmeldegeschwindigkeit des Unternehmens."
      }
    },
    {
      "@type": "Question",
      "name": "Verliert meine Website beim Relaunch ihre bisherigen Google-Rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ohne sauberes URL-Mapping und Weiterleitungen von alten auf neue Adressen drohen tatsächlich Rankingverluste, weil Backlinks und Suchmaschinenindex ins Leere laufen. Mit vollständigen 301-Weiterleitungen, erhaltenen Kerninhalten und Monitoring in den ersten vier bis acht Wochen nach dem Launch lässt sich dieses Risiko deutlich reduzieren."
      }
    },
    {
      "@type": "Question",
      "name": "Lohnt sich ein Website-Baukasten statt eines Relaunches durch einen Webdesigner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Baukasten kann für ein sehr einfaches, temporäres Angebot ausreichen, bietet aber meist wenig Individualität und keine feste Ansprechperson. Für Betriebe, die Wert auf ein zugeschnittenes Design, persönliche Betreuung und mitgelieferte SEO-Grundlagen legen, ist ein individueller Relaunch ab 1.590 EUR häufig die wirtschaftlich sinnvollere Entscheidung."
      }
    }
  ]
};
const imageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/a-man-looking-at-a-website-on-the-internet-7309483/",
    "creditText": "RDNE Stock project / Pexels",
    "copyrightNotice": "© RDNE Stock project / Pexels",
    "creator": {
      "@type": "Person",
      "name": "RDNE Stock project",
      "url": "https://www.pexels.com/@rdne"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-1.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/turned-on-silver-laptop-on-tabletop-1128207/",
    "creditText": "EVG Kowalievska / Pexels",
    "copyrightNotice": "© EVG Kowalievska / Pexels",
    "creator": {
      "@type": "Person",
      "name": "EVG Kowalievska",
      "url": "https://www.pexels.com/@kowalievska"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-2.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/a-man-and-a-woman-talking-to-an-agent-7642116/",
    "creditText": "Alena Darmel / Pexels",
    "copyrightNotice": "© Alena Darmel / Pexels",
    "creator": {
      "@type": "Person",
      "name": "Alena Darmel",
      "url": "https://www.pexels.com/@a-darmel"
    }
  }
];

export const Route = createFileRoute("/ratgeber/website-relaunch-kosten-leipzig")({
  head: () => ({
    meta: [
      { title: "Website-Relaunch Kosten 2026: Realistische Preise" },
      { name: "description", content: "Website-Relaunch Kosten für Leipziger Unternehmen: reale Preise ab 1.590 EUR, die wichtigsten Kostenfaktoren und wie Sie typische Rankingverluste beim Relaunch vermeiden." },
      ...socialMeta({
        title: "Website-Relaunch Kosten 2026: Realistische Preise",
        description: "Website-Relaunch Kosten für Leipziger Unternehmen: reale Preise ab 1.590 EUR, die wichtigsten Kostenfaktoren und wie Sie typische Rankingverluste beim Relaunch vermeiden.",
        path: "/ratgeber/website-relaunch-kosten-leipzig",
        image: "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp",
      }),
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/ratgeber/website-relaunch-kosten-leipzig" }],
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
              {"Website-Relaunch Kosten: Womit realistisch rechnen?"}
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
            dangerouslySetInnerHTML={{ __html: "<p>Wer nach &bdquo;Website Relaunch Kosten&ldquo; sucht, hat meist schon ein klares Gefühl dafür, dass die alte Seite nicht mehr passt: veraltetes Design, keine vernünftige Darstellung auf dem Smartphone, Ladezeiten wie aus einer anderen Zeit. Die Preisangaben im Netz schwanken dabei zwischen wenigen Hundert und mehreren Zehntausend Euro, was die Entscheidung selten leichter macht. In der Beratungspraxis in Leipzig erlebe ich häufig, dass Handwerksbetriebe, Gastronomen oder kleine Praxen zunächst ein Bauchgefühl-Budget nennen und dann überrascht sind, wie klar sich ein Relaunch kalkulieren lässt, sobald Umfang, Ziel und Ausgangspunkt sauber getrennt werden. Dieser Ratgeber zeigt, womit Sie 2026 realistisch rechnen, welche Faktoren den Preis treiben und wie Sie einen überteuerten oder unterdimensionierten Relaunch vermeiden.</p>" }}
          />

            <nav aria-label="Inhaltsverzeichnis" className="mb-8 rounded-xl border border-border bg-card px-5 py-4">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{"Inhalt"}</p>
              <ol className="space-y-1.5 text-sm">
                <li><a href="#abschnitt-1" className="text-primary hover:underline">{"Kurzantwort"}</a></li>
                <li><a href="#abschnitt-2" className="text-primary hover:underline">{"Für wen ist das Thema relevant?"}</a></li>
                <li><a href="#abschnitt-3" className="text-primary hover:underline">{"Vorteile und Grenzen"}</a></li>
                <li><a href="#abschnitt-4" className="text-primary hover:underline">{"Kostenlogik"}</a></li>
                <li><a href="#abschnitt-5" className="text-primary hover:underline">{"Typische Fehler"}</a></li>
                <li><a href="#abschnitt-6" className="text-primary hover:underline">{"Entscheidungshilfe"}</a></li>
                <li><a href="#abschnitt-7" className="text-primary hover:underline">{"Fazit"}</a></li>
              </ol>
            </nav>

            <figure className="mb-10 overflow-hidden rounded-xl">
              <img
                src="/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-1.webp"
                alt="Laptop auf Schreibtisch im modernen Büroarbeitsplatz"
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                {"Struktur, Design und Texte bilden die Grundlage jeder Kostenkalkulation. Foto: EVG Kowalievska / Pexels"}
              </figcaption>
            </figure>

            <h2 id="abschnitt-1" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Kurzantwort"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Für ein lokales Unternehmen mit einer bestehenden, überschaubaren Website liegt ein professioneller Relaunch bei einem selbstständigen Webdesigner in Leipzig realistisch ab 1.590 EUR, abhängig vom Seitenumfang, den vorhandenen Inhalten und dem technischen Zustand der alten Seite. Enthalten sind dabei in der Regel Struktur, Design, Texte, mobile Optimierung, SEO-Grundlagen und die Veröffentlichung. Größere Mittelstandsprojekte mit vielen Unterseiten, individuellem Backend oder mehrsprachigem Auftritt bewegen sich laut aktuellen Marktanalysen für den deutschen Mittelstand eher zwischen 8.000 und 15.000 EUR, teils deutlich darüber.</p><p>Der entscheidende Unterschied liegt selten in der reinen Seitenzahl, sondern darin, wie viel bereits wiederverwendbar ist: Fotos, Texte, Struktur, eine klare Zielgruppe. Je mehr davon vorhanden ist, desto näher liegt Ihr Relaunch am unteren Ende der Preisspanne. Wichtig für die Einordnung: Die höheren Mittelstandswerte stammen meist aus B2B-Projekten mit vielen Abteilungen, mehrsprachigen Inhalten oder individuellen Softwareanbindungen, nicht aus dem typischen Bedarf eines Handwerksbetriebs, einer Praxis oder eines Gastronomiebetriebs in Leipzig.</p>" }}
            />

            <h2 id="abschnitt-2" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Für wen ist das Thema relevant?"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Relevant ist die Frage vor allem für drei Situationen: Erstens für Betriebe, deren Website älter als fünf bis sieben Jahre ist und auf dem Smartphone kaum lesbar oder bedienbar ist. Zweitens für Unternehmen, die zwar Anfragen über Empfehlung bekommen, über die eigene Website aber praktisch keine neuen Kunden gewinnen. Drittens für alle, die nach einem Umzug, einer Umfirmierung oder einer Sortiments- beziehungsweise Leistungsänderung merken, dass die bestehende Seite nicht mehr zum tatsächlichen Angebot passt.</p><p>Typisch sind Handwerksbetriebe mit einer zehn Jahre alten Baukasten-Seite, Gastronomiebetriebe ohne aktuelle Speisekarte und Öffnungszeiten sowie kleine Dienstleister und Praxen, deren Auftritt auf dem Smartphone abgeschnitten oder unleserlich dargestellt wird. Eine Website ohne klare Struktur ist wie ein Laden ohne Beschilderung: Kundinnen und Kunden gehen wieder, bevor sie gefunden haben, was sie suchen.</p><p>Nicht relevant ist ein vollständiger Relaunch dagegen häufig für Unternehmen, deren Website erst vor ein bis zwei Jahren erneuert wurde und lediglich einzelne Texte oder Bilder veraltet sind. Hier reicht meist eine punktuelle Pflege im Rahmen der laufenden Wartung, statt gleich das gesamte Konzept neu aufzusetzen.</p>" }}
            />

            <Card className="my-10 border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center md:p-6">
                <div className="flex-1">
                  <p className="mb-1 font-semibold text-foreground">{"Sie möchten Ihre Website modernisieren?"}</p>
                  <p className="text-sm text-foreground/70">{"Ich prüfe mit Ihnen, welche Lösung zu Ihrem Unternehmen, Ihrem Budget und Ihren Zielen passt, passend zum Thema Website Relaunch Kosten."}</p>
                </div>
                <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  <Link to="/leistungen">{"Leistungen ansehen"}</Link>
                </Button>
              </CardContent>
            </Card>

            <h2 id="abschnitt-3" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Vorteile und Grenzen"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Ein Relaunch bringt vor allem drei praktische Vorteile: eine moderne, auf Mobilgeräten funktionierende Darstellung, eine klarere Struktur mit erkennbarem Handlungsaufruf und technisch saubere Grundlagen für lokale Sichtbarkeit, etwa passende Meta-Titel, Beschreibungen und eine Optimierung auf 30 oder mehr lokale Suchbegriffe. Realistisches Zielniveau bei der technischen Performance ist ein Lighthouse Performance Score von 95 oder höher, was sich direkt auf Ladezeit und Nutzererlebnis auswirkt.</p><p>Ehrlich gehört aber auch dazu: Ein Relaunch ersetzt keine Werbekampagne und garantiert keine bestimmte Platzierung bei Google. Er schafft die technische und inhaltliche Grundlage, auf der lokale Sichtbarkeit und Anfragen wachsen können, das Ergebnis hängt aber zusätzlich von Inhalten, Bewertungen und dem Google-Unternehmensprofil ab. Bei einem eigenen Kundenprojekt wie geyerliner.de (echtes Kundenprojekt) hat sich gezeigt, dass vor allem die Reduzierung auf klare Kernbotschaften nach dem Relaunch die Qualität der Anfragen spürbar verbessert hat, nicht allein deren Anzahl.</p><p>Mehr zum Leistungsumfang eines Relaunches finden Sie unter <a href=\"/leistungen\">Leistungen</a>.</p>" }}
            />

            <figure className="mb-6 overflow-hidden rounded-xl shadow-sm md:float-left md:mb-3 md:mr-7 md:w-[42%]">
              <img
                src="/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-2.webp"
                alt="Beratungsgespräch zwischen zwei Personen an einem Tisch im Büro"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 px-1 text-xs text-muted-foreground">
                {"Ein klares Festpreisangebot entsteht im persönlichen Erstgespräch. Foto: Alena Darmel / Pexels"}
              </figcaption>
            </figure>

            <h2 id="abschnitt-4" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Kostenlogik"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Die Kosten eines Relaunches hängen an vier Faktoren: Seitenumfang, Wiederverwendbarkeit vorhandener Inhalte, gewünschter Funktionsumfang (zum Beispiel Terminbuchung oder Online-Speisekarte) und Textarbeit. Bei Burmeister Webdesign gelten dabei ausschließlich reale Werte: Ein einfacher One-Pager startet ab 790 EUR, eine mehrseitige Website ab 1.390 EUR, ein vollständiger Relaunch einer bestehenden Seite ab 1.590 EUR. Hosting und laufende Wartung kommen mit ab 30 EUR pro Monat hinzu.</p><p>Diese Preise gelten als Festpreis nach einem kostenlosen 15-minütigen Erstgespräch, nicht als Stundensatz. Für lokale Unternehmen ist das in der Praxis planbarer als eine Abrechnung nach Aufwand, bei der die Endsumme erst nach Projektabschluss feststeht. Ob ein Baukasten-System oder ein individuell umgesetzter Relaunch durch einen Webdesigner sinnvoller ist, hängt stark davon ab, wie wichtig Ihnen Individualität, Ladezeit und persönliche Betreuung sind.</p><table><thead><tr><th>Kriterium</th><th>Website-Baukasten</th><th>Relaunch durch Webdesigner</th></tr></thead><tbody><tr><td>Startkosten</td><td>oft ab 0 bis 20 EUR/Monat</td><td>ab 1.590 EUR Festpreis</td></tr><tr><td>Individualität</td><td>eingeschränkt auf Vorlagen</td><td>auf Betrieb zugeschnitten</td></tr><tr><td>Persönliche Betreuung</td><td>meist kein fester Ansprechpartner</td><td>direkter Ansprechpartner vor Ort</td></tr><tr><td>SEO-Grundlagen</td><td>häufig nachträglich, selbst zu pflegen</td><td>im Kernangebot bereits enthalten</td></tr><tr><td>Laufender Aufwand</td><td>Pflege liegt beim Unternehmen selbst</td><td>Wartung optional ab 30 EUR/Monat</td></tr></tbody></table><p>Details zu allen Paketen und der genauen Preisstruktur finden Sie unter <a href=\"/preise\">Preise im Detail</a>.</p><div class=\"tip-box\">Fragen Sie vor jedem Angebot konkret nach, ob der genannte Preis ein Festpreis oder ein Stundensatz ist, das verhindert böse Überraschungen bei der Endrechnung.</div>" }}
            />

            <h2 id="abschnitt-5" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Typische Fehler"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Der häufigste und teuerste Fehler beim Relaunch ist das Fehlen sauberer Weiterleitungen von alten auf neue Adressen. Ändert sich die Struktur der Website ohne ein vollständiges URL-Mapping, verlieren gut rankende Seiten ihre über Jahre aufgebaute Sichtbarkeit, weil Suchmaschinen die alten Adressen nicht mehr finden und bestehende Verlinkungen von außen ins Leere laufen. Ein zweiter typischer Fehler ist das großzügige Löschen bewährter Inhalte, etwa gut funktionierender Texte oder Unterseiten, nur weil sie optisch nicht mehr ins neue Design passen. Ein dritter Fehler ist fehlendes Monitoring in den ersten vier bis acht Wochen nach dem Launch, in denen Suchmaschinen die neue Struktur neu bewerten und Schwankungen normal, aber beobachtungspflichtig sind.</p><div class=\"warning-box\">Ohne vollständiges URL-Mapping vor dem Relaunch drohen Rankingverluste, weil Backlinks und Suchmaschinenindex auf nicht mehr existierende Adressen zeigen.</div><p>Ein weiterer Klassiker: Unternehmen entscheiden sich für das günstigste Angebot, ohne zu prüfen, ob Texte, mobile Optimierung und SEO-Grundlagen überhaupt enthalten sind, und zahlen die fehlenden Leistungen später einzeln nach.</p>" }}
            />

            <h2 id="abschnitt-6" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Entscheidungshilfe"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Als grobe Orientierung: Reicht Ihre bestehende Seite inhaltlich noch aus und stört nur das Design, genügt häufig ein überschaubarer Relaunch ab 1.590 EUR. Fehlen dagegen komplette Unterseiten, eine mobile Darstellung oder eine klare Struktur, ist meist eine mehrseitige Neuerstellung ab 1.390 EUR die passendere Einordnung. Für ein einzelnes Angebot oder eine reine Kontaktseite reicht in vielen Fällen ein One-Pager ab 790 EUR.</p><p>Stellen Sie sich vor der Beauftragung drei konkrete Fragen: Wie alt ist die aktuelle Seite und wann wurde sie zuletzt inhaltlich gepflegt? Wie viele Anfragen kommen aktuell wirklich über die Website, nicht über Empfehlung? Und ist ein Festpreisangebot vorhanden, bevor die Arbeit beginnt? Ein realistischer Ablauf von Erstgespräch über Festpreisangebot bis zur ersten Vorschau dauert typischerweise etwa sieben Tage, gefolgt von einer Feedbackrunde und dem Launch.</p><p>Als zusätzliches Prüfkriterium hilft ein Blick auf die letzten zwölf Monate: Wie viele konkrete Anfragen kamen über das Kontaktformular oder die angegebene Telefonnummer der Website, nicht über persönliche Empfehlung? Liegt diese Zahl bei null oder nahe null, ist das ein deutliches Signal, dass Struktur, Auffindbarkeit oder mobile Darstellung nicht mehr funktionieren und ein Relaunch sich in überschaubarer Zeit amortisieren kann.</p>" }}
            />

            <h2 id="abschnitt-7" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Fazit"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Ein Website-Relaunch für ein lokales Unternehmen in Leipzig lässt sich mit realen Werten kalkulieren, nicht mit vagen Schätzungen: ab 1.590 EUR für einen vollständigen Relaunch, ab 1.390 EUR für eine mehrseitige Neuerstellung, ab 790 EUR für einen One-Pager, dazu ab 30 EUR im Monat für Hosting und Wartung. Entscheidend für den tatsächlichen Preis sind Umfang, wiederverwendbare Inhalte und ein sauberes Konzept für Weiterleitungen, damit bestehende Sichtbarkeit nicht verloren geht.</p><p>Wenn Sie unsicher sind, wo Ihr Projekt in dieser Spanne liegt, ist ein kostenloses Erstgespräch der einfachste nächste Schritt: <a href=\"/kontakt\">Kostenloses Erstgespräch vereinbaren</a>.</p>" }}
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

            <p className="mt-10 clear-both text-xs text-muted-foreground/70" dangerouslySetInnerHTML={{ __html: "<a href=\"https://www.pexels.com\" target=\"_blank\" rel=\"noopener\">Photos provided by Pexels</a> · Foto: <a href=\"https://www.pexels.com/photo/a-man-looking-at-a-website-on-the-internet-7309483/\" target=\"_blank\" rel=\"noopener\">RDNE Stock project / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/turned-on-silver-laptop-on-tabletop-1128207/\" target=\"_blank\" rel=\"noopener\">EVG Kowalievska / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/a-man-and-a-woman-talking-to-an-agent-7642116/\" target=\"_blank\" rel=\"noopener\">Alena Darmel / Pexels</a> (Pexels License)" }} />
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
              {"Sie möchten Ihre Website modernisieren?"}
            </h2>
            <p className="mt-4 max-w-2xl text-background/70">{"Ich prüfe mit Ihnen, welche Lösung zu Ihrem Unternehmen, Ihrem Budget und Ihren Zielen passt, passend zum Thema Website Relaunch Kosten."}</p>
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
