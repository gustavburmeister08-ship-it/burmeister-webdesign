// Generiert von scripts/import-ratgeber-article.mjs - Artikelinhalte vom burmeister-webdesign-ratgeber-bot
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/site/Section";
import { FaqAccordion, type FaqItem } from "@/components/site/RefreshBlocks";
import { WeitereArtikel } from "@/components/site/WeitereArtikel";
import { socialMeta } from "@/lib/seo";

const SLUG = "was-kostet-eine-website-fuer-mein-unternehmen";
const HERO_IMAGE = "/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-hero.webp";
const HERO_ALT = "Was kostet eine Website für mein Unternehmen wirklich? – Webdesign für lokale Unternehmen";
const CATEGORY = "Website erstellen lassen";
const READ_TIME = "7 Min.";
const ARTICLE_DATE_DISPLAY = "29. Juni 2026";

const faqItems: FaqItem[] = [
  {
    "question": "Was kostet eine Website für ein kleines Unternehmen ungefähr?",
    "answer": "Realistisch liegen die Kosten zwischen 1.000 und 8.000 Euro, abhängig von Umfang und Anbieter. Ein einfacher One-Pager ist günstiger als eine mehrseitige Website mit individuellem Design. Bei Burmeister Webdesign starten One-Pager bei 790 Euro, mehrseitige Websites bei 1.390 Euro, jeweils als klarer Festpreis nach dem Erstgespräch."
  },
  {
    "question": "Ist ein Baukasten günstiger als ein Webdesigner?",
    "answer": "Kurzfristig ja, langfristig oft nicht. Baukästen mit generischen Vorlagen wirken günstig, stoßen aber bei individuellen Anpassungen, mobiler Optimierung und lokaler SEO schnell an Grenzen. Ein professionell erstellter Festpreis enthält diese Punkte meist direkt, ohne versteckte Folgekosten bei jeder gewünschten Änderung."
  },
  {
    "question": "Ist Festpreis oder Stundenhonorar bei Webdesign besser?",
    "answer": "Für ein klar abgegrenztes Projekt wie eine Unternehmenswebsite ist ein Festpreis fast immer die bessere Wahl. Sie kennen die Kosten vorab und tragen kein Risiko, falls der Aufwand höher ausfällt. Stundenhonorare passen eher zu offenen, sich ständig ändernden Aufgaben als zu einer einmaligen Website-Erstellung."
  },
  {
    "question": "Wie lange dauert eine Website bei diesem Preis?",
    "answer": "Ein One-Pager ist meist innerhalb einer Woche fertig, mehrseitige Websites benötigen typischerweise zwei bis vier Wochen bis zur ersten Vorschau und zum Launch. Die genaue Dauer hängt vor allem davon ab, wie schnell Sie Texte und Informationen zu Ihrem Unternehmen liefern können."
  }
];

interface SourceItem { title: string; url: string }
const SOURCE_ITEMS: SourceItem[] = [
  {
    "title": "Webdesign Kosten 2026: Was eine Website wirklich kostet",
    "url": "https://kopfundstift.de/webdesign-kosten/"
  },
  {
    "title": "Webdesigner Kosten 2026: Festpreis, Stundensatz, Preisspannen Mittelstand",
    "url": "https://davidkeiser.de/wissen/webdesigner-kosten-hub/"
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
      "name": "Was kostet eine Website für mein Unternehmen wirklich?",
      "item": "https://burmeister-webdesign.com/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen"
    }
  ]
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "inLanguage": "de",
  "headline": "Was kostet eine Website für mein Unternehmen wirklich?",
  "description": "Website erstellen lassen Kosten 2026: realistische Preisspannen, Kostenfaktoren und eine klare Entscheidungshilfe für lokale Unternehmen in Leipzig.",
  "keywords": "Website erstellen lassen Kosten, Website Kosten Leipzig, Was kostet eine Homepage, Website erstellen lassen Preis, Kosten Webdesign kleine Unternehmen",
  "image": "https://burmeister-webdesign.com/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-hero.webp",
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
    "@id": "https://burmeister-webdesign.com/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen"
  },
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-30"
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine Website für ein kleines Unternehmen ungefähr?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Realistisch liegen die Kosten zwischen 1.000 und 8.000 Euro, abhängig von Umfang und Anbieter. Ein einfacher One-Pager ist günstiger als eine mehrseitige Website mit individuellem Design. Bei Burmeister Webdesign starten One-Pager bei 790 Euro, mehrseitige Websites bei 1.390 Euro, jeweils als klarer Festpreis nach dem Erstgespräch."
      }
    },
    {
      "@type": "Question",
      "name": "Ist ein Baukasten günstiger als ein Webdesigner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kurzfristig ja, langfristig oft nicht. Baukästen mit generischen Vorlagen wirken günstig, stoßen aber bei individuellen Anpassungen, mobiler Optimierung und lokaler SEO schnell an Grenzen. Ein professionell erstellter Festpreis enthält diese Punkte meist direkt, ohne versteckte Folgekosten bei jeder gewünschten Änderung."
      }
    },
    {
      "@type": "Question",
      "name": "Ist Festpreis oder Stundenhonorar bei Webdesign besser?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für ein klar abgegrenztes Projekt wie eine Unternehmenswebsite ist ein Festpreis fast immer die bessere Wahl. Sie kennen die Kosten vorab und tragen kein Risiko, falls der Aufwand höher ausfällt. Stundenhonorare passen eher zu offenen, sich ständig ändernden Aufgaben als zu einer einmaligen Website-Erstellung."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert eine Website bei diesem Preis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein One-Pager ist meist innerhalb einer Woche fertig, mehrseitige Websites benötigen typischerweise zwei bis vier Wochen bis zur ersten Vorschau und zum Launch. Die genaue Dauer hängt vor allem davon ab, wie schnell Sie Texte und Informationen zu Ihrem Unternehmen liefern können."
      }
    }
  ]
};
const imageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-hero.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/woman-in-dress-sitting-in-front-of-a-laptop-10375901/",
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
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-detail-1.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/businessmen-talking-over-coffee-23496863/",
    "creditText": "Vitaly Gariev / Pexels",
    "copyrightNotice": "© Vitaly Gariev / Pexels",
    "creator": {
      "@type": "Person",
      "name": "Vitaly Gariev",
      "url": "https://www.pexels.com/@silverkblack"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://burmeister-webdesign.com/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-detail-2.webp",
    "license": "https://www.pexels.com/license/",
    "acquireLicensePage": "https://www.pexels.com/photo/woman-wearing-an-apron-standing-by-the-shelves-3906984/",
    "creditText": "Andrea Piacquadio / Pexels",
    "copyrightNotice": "© Andrea Piacquadio / Pexels",
    "creator": {
      "@type": "Person",
      "name": "Andrea Piacquadio",
      "url": "https://www.pexels.com/@olly"
    }
  }
];

export const Route = createFileRoute("/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen")({
  head: () => ({
    meta: [
      { title: "Website Kosten 2026: Was eine Website wirklich kostet" },
      { name: "description", content: "Website erstellen lassen Kosten 2026: realistische Preisspannen, Kostenfaktoren und eine klare Entscheidungshilfe für lokale Unternehmen in Leipzig." },
      ...socialMeta({
        title: "Website Kosten 2026: Was eine Website wirklich kostet",
        description: "Website erstellen lassen Kosten 2026: realistische Preisspannen, Kostenfaktoren und eine klare Entscheidungshilfe für lokale Unternehmen in Leipzig.",
        path: "/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen",
        image: "https://burmeister-webdesign.com/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-hero.webp",
      }),
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen" }],
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
              {"Was kostet eine Website für mein Unternehmen wirklich?"}
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
            dangerouslySetInnerHTML={{ __html: "<p>Sie überlegen, eine neue Website für Ihr Unternehmen erstellen zu lassen, und die erste Frage ist fast immer dieselbe: Was kostet das eigentlich? Die ehrliche Antwort lautet: Es kommt darauf an, aber nicht im vagen Sinne. Die Spannweite bei <strong>Website erstellen lassen Kosten</strong> reicht von wenigen hundert Euro bis zu mehreren zehntausend Euro, je nachdem, wer die Website baut und was sie leisten soll. Als Webdesigner aus Leipzig arbeite ich fast ausschließlich mit kleinen, lokalen Unternehmen wie Handwerksbetrieben, Restaurants oder Friseursalons. Bei genau dieser Zielgruppe sehe ich im Erstgespräch immer wieder die gleiche Unsicherheit: lieber zu viel zahlen aus Angst vor schlechter Qualität, oder lieber sehr wenig zahlen und auf Funktion verzichten. Beides lässt sich vermeiden, wenn man die Kostenlogik einmal verstanden hat.</p>" }}
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
                src="/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-detail-1.webp"
                alt="Website erstellen lassen Kosten Detailansicht"
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                {"Klare Preisstruktur schafft Vertrauen vor dem ersten Gespräch. Foto: Vitaly Gariev / Pexels"}
              </figcaption>
            </figure>

            <h2 id="abschnitt-1" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Kurzantwort"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Eine professionelle Website für ein kleines Unternehmen kostet in Deutschland 2026 meist zwischen 1.000 und 8.000 Euro, abhängig von Umfang, Design und Agentur- oder Freelancer-Modell. Bei mir starten One-Pager bei 790 Euro, mehrseitige Websites bei 1.390 Euro und Relaunches bei 1.590 Euro, jeweils als klarer Festpreis nach einem kostenlosen Erstgespräch. <a href=\"/preise\">Die genaue Preisstruktur sehen Sie auf der Preise-Seite</a>. Wichtiger als die nackte Zahl ist die Frage, was im Preis enthalten ist: Struktur, Texte, mobile Optimierung und SEO-Grundlagen sollten bei jedem seriösen Angebot dazugehören, nicht als teurer Aufpreis verkauft werden.</p>" }}
            />

            <h2 id="abschnitt-2" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Für wen ist das Thema relevant?"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Die Kostenfrage stellt sich in der Praxis vor allem in drei Situationen. Erstens: Sie gründen gerade und brauchen eine erste professionelle Präsenz, ohne das gesamte Startkapital in die Website zu stecken. Zweitens: Ihre bestehende Website ist veraltet, wirkt auf dem Handy schlecht und Sie überlegen einen Relaunch. Drittens: Sie bekommen ein Angebot vorgelegt und können die Zahl nicht einordnen, weil ein Vergleichswert fehlt.</p><p>In allen drei Fällen hilft derselbe Denkansatz: nicht die billigste Lösung suchen, sondern die Lösung, die zu Umfang und Zielen passt. Ein Friseursalon mit Online-Terminbuchung braucht andere Funktionen als ein Handwerksbetrieb, der vor allem Vertrauen und Erreichbarkeit zeigen möchte. Auch ein Restaurant mit Speisekarte und Reservierung hat einen anderen Funktionsbedarf als eine kleine Praxis, die vor allem Kompetenz und Erreichbarkeit zeigen will.</p><p>Wichtig ist außerdem, wer im Unternehmen die Website später pflegt. Wenn niemand regelmäßig Zeit für Inhalte hat, lohnt sich von Anfang an ein Wartungspaket, statt jede kleine Änderung einzeln zu beauftragen. Das verändert die Kostenrechnung spürbar, weil laufende Kosten dann von Anfang an eingeplant sind statt überraschend aufzutauchen.</p>" }}
            />

            <Card className="my-10 border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center md:p-6">
                <div className="flex-1">
                  <p className="mb-1 font-semibold text-foreground">{"Sie möchten wissen, was Ihre Website konkret kosten würde?"}</p>
                  <p className="text-sm text-foreground/70">{"Im kostenlosen Erstgespräch schauen wir gemeinsam auf Ihr Vorhaben. Sie erhalten danach ein klares Festpreisangebot, ohne versteckte Kosten."}</p>
                </div>
                <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  <Link to="/kontakt">{"Kostenloses Erstgespräch"}</Link>
                </Button>
              </CardContent>
            </Card>

            <h2 id="abschnitt-3" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Vorteile und Grenzen"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Eine professionell erstellte Website hat einen klaren Vorteil: Sie wirkt sofort glaubwürdiger als ein Social-Media-Profil allein und gibt Ihnen die volle Kontrolle über Inhalte und Auffindbarkeit bei Google. Anders als ein gemietetes Profil auf einer Plattform gehört Ihnen die Website, und Sie sind nicht von Algorithmus-Änderungen eines Drittanbieters abhängig. Gleichzeitig sind die Grenzen offen zu benennen: Eine Website allein bringt keine Kunden, wenn niemand sie findet. Lokale Sichtbarkeit über Google und ein gepflegtes Google Business Profil gehören für die meisten kleinen Unternehmen mindestens genauso dazu wie die Website selbst.</p><div class=\"tip-box\">Fragen Sie bei jedem Angebot konkret, ob lokale SEO-Grundlagen wie Suchbegriffe, Meta-Texte und Google Business Profil im Preis enthalten sind, nicht nur Design und Technik.</div><p>Ein weiterer Punkt, den viele unterschätzen: Eine Website ist kein einmaliges Projekt. Hosting, Sicherheitsupdates und kleine inhaltliche Anpassungen fallen dauerhaft an, dafür sollten Sie realistisch mit laufenden Kosten kalkulieren. Wer das von Anfang an einplant, vermeidet auch die unangenehme Überraschung, dass eine vermeintlich abgeschlossene Website nach wenigen Monaten technisch veraltet oder unsicher wirkt.</p>" }}
            />

            <figure className="mb-6 overflow-hidden rounded-xl shadow-sm md:float-left md:mb-3 md:mr-7 md:w-[42%]">
              <img
                src="/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-detail-2.webp"
                alt="Website erstellen lassen Kosten Praxisbeispiel"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 px-1 text-xs text-muted-foreground">
                {"Auch kleine, lokale Betriebe profitieren von einer klaren Online-Präsenz. Foto: Andrea Piacquadio / Pexels"}
              </figcaption>
            </figure>

            <h2 id="abschnitt-4" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Kostenlogik"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Die Kosten für eine Website setzen sich aus mehreren Faktoren zusammen: Seitenanzahl, Design-Individualität, Texterstellung, technische Umsetzung und SEO-Grundlagen. Aktuelle Branchenvergleiche für Deutschland 2026 zeigen, dass marktübliche Preise bei Agenturen und Freelancern oft deutlich höher liegen als viele Unternehmen erwarten.</p><table><thead><tr><th>Website-Typ</th><th>Marktüblicher Preis 2026</th><th>Bei Burmeister Webdesign</th></tr></thead><tbody><tr><td>One-Pager</td><td>1.500 bis 2.500 Euro</td><td>ab 790 Euro</td></tr><tr><td>Mehrseitige Unternehmenswebsite</td><td>3.000 bis 10.000 Euro</td><td>ab 1.390 Euro</td></tr><tr><td>Website-Relaunch</td><td>3.500 bis 7.500 Euro</td><td>ab 1.590 Euro</td></tr><tr><td>Hosting und Wartung pro Monat</td><td>100 bis 500 Euro</td><td>ab 30 Euro</td></tr></tbody></table><p>Diese Differenz erklärt sich nicht durch geringere Qualität, sondern durch das Geschäftsmodell: Ich arbeite mit wenigen lokalen Unternehmen gleichzeitig, ohne den Overhead einer großen Agentur und mit einem klar standardisierten Ablauf von Erstgespräch bis Launch. Was im Leistungsumfang konkret enthalten ist, sehen Sie auf der <a href=\"/leistungen\">Leistungen-Seite</a>. Wenn Sie selbst Texte und Fotos liefern, sinkt der Aufwand zusätzlich, weil die zeitintensive Content-Erstellung wegfällt.</p>" }}
            />

            <h2 id="abschnitt-5" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Typische Fehler"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>In Erstgesprächen sehe ich häufig drei wiederkehrende Fehler. Erstens: allein nach dem niedrigsten Preis entscheiden, ohne zu prüfen, was im Angebot fehlt, zum Beispiel mobile Optimierung oder SEO-Grundlagen. Zweitens: einen Baukasten wählen und die laufende Pflege unterschätzen, weil Vorlagen zwar günstig wirken, aber bei individuellen Änderungen schnell an Grenzen stoßen. Drittens: sich von Stundenhonoraren ohne Obergrenze überraschen lassen, weil der Aufwand am Ende deutlich höher ausfällt als geschätzt.</p><div class=\"warning-box\">Ein Angebot ohne klaren Festpreis und ohne Leistungsbeschreibung ist ein Warnsignal. Lassen Sie sich vor Projektstart schriftlich bestätigen, was genau im Preis enthalten ist.</div><p>Ein vierter, oft übersehener Punkt: Wer keine Informationen zum eigenen Unternehmen vorbereitet, etwa Texte, Bilder und eine Leistungsübersicht, verzögert das Projekt erheblich, unabhängig vom gewählten Anbieter.</p>" }}
            />

            <h2 id="abschnitt-6" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Entscheidungshilfe"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Drei einfache Kriterien helfen bei der Einordnung. Wenn Sie nur eine digitale Visitenkarte mit Kontaktdaten brauchen, reicht ein einfacher One-Pager. Wenn Sie mehrere Leistungen, Referenzen und eine Kontaktseite zeigen möchten, ist eine mehrseitige Website sinnvoller. Wenn Ihre bestehende Website älter als drei bis vier Jahre ist und auf dem Handy schlecht aussieht, ist ein Relaunch meist wirtschaftlicher als weitere Flickschusterei an der alten Seite.</p><p>Ein viertes Kriterium betrifft das Budget selbst: Wenn Sie aktuell nur ein begrenztes Budget haben, ist ein schlanker Start mit einem One-Pager oft sinnvoller als ein Website-Projekt auf Kredit, das Funktionen enthält, die Sie im ersten Jahr ohnehin nicht nutzen. Eine Website lässt sich später erweitern, ein zu großzügig kalkuliertes Projekt aber nur schwer wieder verkleinern. <a href=\"/ablauf\">Wie der Ablauf von Erstgespräch bis Launch konkret aussieht</a>, zeigt die Ablauf-Seite. In jedem Fall lohnt sich ein kostenloses Erstgespräch, bevor Sie sich auf ein Angebot festlegen, weil sich dort am schnellsten klärt, welcher Umfang tatsächlich notwendig ist.</p>" }}
            />

            <h2 id="abschnitt-7" className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {"Fazit"}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: "<p>Die Kosten für eine Website hängen weniger vom Anbieter als vom tatsächlichen Umfang ab. Realistisch sollten Sie für eine professionelle Unternehmenswebsite mit 1.000 bis 8.000 Euro rechnen, je nach Anspruch und Anbieter-Modell. Bei mir starten Projekte für lokale Unternehmen bereits bei 790 Euro für einen One-Pager, jeweils mit klarem Festpreis nach dem Erstgespräch. Wenn Sie wissen möchten, was Ihre Website konkret kosten würde, ist das kostenlose Erstgespräch der schnellste und unverbindlichste Weg dahin.</p>" }}
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

            <p className="mt-10 clear-both text-xs text-muted-foreground/70" dangerouslySetInnerHTML={{ __html: "<a href=\"https://www.pexels.com\" target=\"_blank\" rel=\"noopener\">Photos provided by Pexels</a> · Foto: <a href=\"https://www.pexels.com/photo/woman-in-dress-sitting-in-front-of-a-laptop-10375901/\" target=\"_blank\" rel=\"noopener\">RDNE Stock project / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/businessmen-talking-over-coffee-23496863/\" target=\"_blank\" rel=\"noopener\">Vitaly Gariev / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/woman-wearing-an-apron-standing-by-the-shelves-3906984/\" target=\"_blank\" rel=\"noopener\">Andrea Piacquadio / Pexels</a> (Pexels License)" }} />
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
              {"Sie möchten wissen, was Ihre Website konkret kosten würde?"}
            </h2>
            <p className="mt-4 max-w-2xl text-background/70">{"Im kostenlosen Erstgespräch schauen wir gemeinsam auf Ihr Vorhaben. Sie erhalten danach ein klares Festpreisangebot, ohne versteckte Kosten."}</p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button asChild className="rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90">
              <Link to="/kontakt">
                {"Kostenloses Erstgespräch"}
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
