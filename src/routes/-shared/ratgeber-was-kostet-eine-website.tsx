// Generiert von scripts/import-ratgeber-article.mjs - Artikelinhalte vom burmeister-webdesign-ratgeber-bot
// Bilingual shared module (DE/EN) for the ratgeber article "Was kostet eine Website für mein Unternehmen wirklich?"
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/site/Section";
import { FaqAccordion, type FaqItem } from "@/components/site/RefreshBlocks";
import { WeitereArtikel } from "@/components/site/WeitereArtikel";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { socialMeta, breadcrumbJsonLd, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const SLUG = "was-kostet-eine-website-fuer-mein-unternehmen";
const HERO_IMAGE =
  "/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-hero.webp";
const DETAIL_1_IMAGE =
  "/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-detail-1.webp";
const DETAIL_2_IMAGE =
  "/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-detail-2.webp";

interface SourceItem {
  title: string;
  url: string;
}

const COPY = {
  de: {
    metaTitle: "Website Kosten 2026: Was eine Website wirklich kostet",
    metaDescription:
      "Website erstellen lassen Kosten 2026: realistische Preisspannen, Kostenfaktoren und eine klare Entscheidungshilfe für lokale Unternehmen in Leipzig.",
    breadcrumbLabel: "Was kostet eine Website für mein Unternehmen wirklich?",
    headline: "Was kostet eine Website für mein Unternehmen wirklich?",
    heroAlt:
      "Was kostet eine Website für mein Unternehmen wirklich? – Webdesign für lokale Unternehmen",
    category: "Website erstellen lassen",
    readTime: "7 Min.",
    dateDisplay: "29. Juni 2026",
    tocLabel: "Inhalt",
    toc: [
      { id: "abschnitt-1", label: "Kurzantwort" },
      { id: "abschnitt-2", label: "Für wen ist das Thema relevant?" },
      { id: "abschnitt-3", label: "Vorteile und Grenzen" },
      { id: "abschnitt-4", label: "Kostenlogik" },
      { id: "abschnitt-5", label: "Typische Fehler" },
      { id: "abschnitt-6", label: "Entscheidungshilfe" },
      { id: "abschnitt-7", label: "Fazit" },
    ],
    intro:
      "<p>Sie überlegen, eine neue Website für Ihr Unternehmen erstellen zu lassen, und die erste Frage ist fast immer dieselbe: Was kostet das eigentlich? Die ehrliche Antwort lautet: Es kommt darauf an, aber nicht im vagen Sinne. Die Spannweite bei <strong>Website erstellen lassen Kosten</strong> reicht von wenigen hundert Euro bis zu mehreren zehntausend Euro, je nachdem, wer die Website baut und was sie leisten soll. Als Webdesigner aus Leipzig arbeite ich fast ausschließlich mit kleinen, lokalen Unternehmen wie Handwerksbetrieben, Restaurants oder Friseursalons. Bei genau dieser Zielgruppe sehe ich im Erstgespräch immer wieder die gleiche Unsicherheit: lieber zu viel zahlen aus Angst vor schlechter Qualität, oder lieber sehr wenig zahlen und auf Funktion verzichten. Beides lässt sich vermeiden, wenn man die Kostenlogik einmal verstanden hat.</p>",
    detail1Caption:
      "Klare Preisstruktur schafft Vertrauen vor dem ersten Gespräch. Foto: Vitaly Gariev / Pexels",
    detail1Alt: "Website erstellen lassen Kosten Detailansicht",
    detail2Caption:
      "Auch kleine, lokale Betriebe profitieren von einer klaren Online-Präsenz. Foto: Andrea Piacquadio / Pexels",
    detail2Alt: "Website erstellen lassen Kosten Praxisbeispiel",
    sections: {
      s1: "<p>Eine professionelle Website für ein kleines Unternehmen kostet in Deutschland 2026 meist zwischen 1.000 und 8.000 Euro, abhängig von Umfang, Design und Agentur- oder Freelancer-Modell. Bei mir starten One-Pager bei 790 Euro, mehrseitige Websites bei 1.390 Euro und Relaunches bei 1.590 Euro, jeweils als klarer Festpreis nach einem kostenlosen Erstgespräch. <a href=\"/preise\">Die genaue Preisstruktur sehen Sie auf der Preise-Seite</a>. Wichtiger als die nackte Zahl ist die Frage, was im Preis enthalten ist: Struktur, Texte, mobile Optimierung und SEO-Grundlagen sollten bei jedem seriösen Angebot dazugehören, nicht als teurer Aufpreis verkauft werden.</p>",
      s2: "<p>Die Kostenfrage stellt sich in der Praxis vor allem in drei Situationen. Erstens: Sie gründen gerade und brauchen eine erste professionelle Präsenz, ohne das gesamte Startkapital in die Website zu stecken. Zweitens: Ihre bestehende Website ist veraltet, wirkt auf dem Handy schlecht und Sie überlegen einen Relaunch. Drittens: Sie bekommen ein Angebot vorgelegt und können die Zahl nicht einordnen, weil ein Vergleichswert fehlt.</p><p>In allen drei Fällen hilft derselbe Denkansatz: nicht die billigste Lösung suchen, sondern die Lösung, die zu Umfang und Zielen passt. Ein Friseursalon mit Online-Terminbuchung braucht andere Funktionen als ein Handwerksbetrieb, der vor allem Vertrauen und Erreichbarkeit zeigen möchte. Auch ein Restaurant mit Speisekarte und Reservierung hat einen anderen Funktionsbedarf als eine kleine Praxis, die vor allem Kompetenz und Erreichbarkeit zeigen will.</p><p>Wichtig ist außerdem, wer im Unternehmen die Website später pflegt. Wenn niemand regelmäßig Zeit für Inhalte hat, lohnt sich von Anfang an ein Wartungspaket, statt jede kleine Änderung einzeln zu beauftragen. Das verändert die Kostenrechnung spürbar, weil laufende Kosten dann von Anfang an eingeplant sind statt überraschend aufzutauchen.</p>",
      s3: "<p>Eine professionell erstellte Website hat einen klaren Vorteil: Sie wirkt sofort glaubwürdiger als ein Social-Media-Profil allein und gibt Ihnen die volle Kontrolle über Inhalte und Auffindbarkeit bei Google. Anders als ein gemietetes Profil auf einer Plattform gehört Ihnen die Website, und Sie sind nicht von Algorithmus-Änderungen eines Drittanbieters abhängig. Gleichzeitig sind die Grenzen offen zu benennen: Eine Website allein bringt keine Kunden, wenn niemand sie findet. Lokale Sichtbarkeit über Google und ein gepflegtes Google Business Profil gehören für die meisten kleinen Unternehmen mindestens genauso dazu wie die Website selbst.</p><div class=\"tip-box\">Fragen Sie bei jedem Angebot konkret, ob lokale SEO-Grundlagen wie Suchbegriffe, Meta-Texte und Google Business Profil im Preis enthalten sind, nicht nur Design und Technik.</div><p>Ein weiterer Punkt, den viele unterschätzen: Eine Website ist kein einmaliges Projekt. Hosting, Sicherheitsupdates und kleine inhaltliche Anpassungen fallen dauerhaft an, dafür sollten Sie realistisch mit laufenden Kosten kalkulieren. Wer das von Anfang an einplant, vermeidet auch die unangenehme Überraschung, dass eine vermeintlich abgeschlossene Website nach wenigen Monaten technisch veraltet oder unsicher wirkt.</p>",
      s4: "<p>Die Kosten für eine Website setzen sich aus mehreren Faktoren zusammen: Seitenanzahl, Design-Individualität, Texterstellung, technische Umsetzung und SEO-Grundlagen. Aktuelle Branchenvergleiche für Deutschland 2026 zeigen, dass marktübliche Preise bei Agenturen und Freelancern oft deutlich höher liegen als viele Unternehmen erwarten.</p><table><thead><tr><th>Website-Typ</th><th>Marktüblicher Preis 2026</th><th>Bei Burmeister Webdesign</th></tr></thead><tbody><tr><td>One-Pager</td><td>1.500 bis 2.500 Euro</td><td>ab 790 Euro</td></tr><tr><td>Mehrseitige Unternehmenswebsite</td><td>3.000 bis 10.000 Euro</td><td>ab 1.390 Euro</td></tr><tr><td>Website-Relaunch</td><td>3.500 bis 7.500 Euro</td><td>ab 1.590 Euro</td></tr><tr><td>Hosting und Wartung pro Monat</td><td>100 bis 500 Euro</td><td>ab 30 Euro</td></tr></tbody></table><p>Diese Differenz erklärt sich nicht durch geringere Qualität, sondern durch das Geschäftsmodell: Ich arbeite mit wenigen lokalen Unternehmen gleichzeitig, ohne den Overhead einer großen Agentur und mit einem klar standardisierten Ablauf von Erstgespräch bis Launch. Was im Leistungsumfang konkret enthalten ist, sehen Sie auf der <a href=\"/leistungen\">Leistungen-Seite</a>. Wenn Sie selbst Texte und Fotos liefern, sinkt der Aufwand zusätzlich, weil die zeitintensive Content-Erstellung wegfällt.</p>",
      s5: "<p>In Erstgesprächen sehe ich häufig drei wiederkehrende Fehler. Erstens: allein nach dem niedrigsten Preis entscheiden, ohne zu prüfen, was im Angebot fehlt, zum Beispiel mobile Optimierung oder SEO-Grundlagen. Zweitens: einen Baukasten wählen und die laufende Pflege unterschätzen, weil Vorlagen zwar günstig wirken, aber bei individuellen Änderungen schnell an Grenzen stoßen. Drittens: sich von Stundenhonoraren ohne Obergrenze überraschen lassen, weil der Aufwand am Ende deutlich höher ausfällt als geschätzt.</p><div class=\"warning-box\">Ein Angebot ohne klaren Festpreis und ohne Leistungsbeschreibung ist ein Warnsignal. Lassen Sie sich vor Projektstart schriftlich bestätigen, was genau im Preis enthalten ist.</div><p>Ein vierter, oft übersehener Punkt: Wer keine Informationen zum eigenen Unternehmen vorbereitet, etwa Texte, Bilder und eine Leistungsübersicht, verzögert das Projekt erheblich, unabhängig vom gewählten Anbieter.</p>",
      s6: "<p>Drei einfache Kriterien helfen bei der Einordnung. Wenn Sie nur eine digitale Visitenkarte mit Kontaktdaten brauchen, reicht ein einfacher One-Pager. Wenn Sie mehrere Leistungen, Referenzen und eine Kontaktseite zeigen möchten, ist eine mehrseitige Website sinnvoller. Wenn Ihre bestehende Website älter als drei bis vier Jahre ist und auf dem Handy schlecht aussieht, ist ein Relaunch meist wirtschaftlicher als weitere Flickschusterei an der alten Seite.</p><p>Ein viertes Kriterium betrifft das Budget selbst: Wenn Sie aktuell nur ein begrenztes Budget haben, ist ein schlanker Start mit einem One-Pager oft sinnvoller als ein Website-Projekt auf Kredit, das Funktionen enthält, die Sie im ersten Jahr ohnehin nicht nutzen. Eine Website lässt sich später erweitern, ein zu großzügig kalkuliertes Projekt aber nur schwer wieder verkleinern. <a href=\"/ablauf\">Wie der Ablauf von Erstgespräch bis Launch konkret aussieht</a>, zeigt die Ablauf-Seite. In jedem Fall lohnt sich ein kostenloses Erstgespräch, bevor Sie sich auf ein Angebot festlegen, weil sich dort am schnellsten klärt, welcher Umfang tatsächlich notwendig ist.</p>",
      s7: "<p>Die Kosten für eine Website hängen weniger vom Anbieter als vom tatsächlichen Umfang ab. Realistisch sollten Sie für eine professionelle Unternehmenswebsite mit 1.000 bis 8.000 Euro rechnen, je nach Anspruch und Anbieter-Modell. Bei mir starten Projekte für lokale Unternehmen bereits bei 790 Euro für einen One-Pager, jeweils mit klarem Festpreis nach dem Erstgespräch. Wenn Sie wissen möchten, was Ihre Website konkret kosten würde, ist das kostenlose Erstgespräch der schnellste und unverbindlichste Weg dahin.</p>",
    },
    ctaBoxTitle: "Sie möchten wissen, was Ihre Website konkret kosten würde?",
    ctaBoxText:
      "Im kostenlosen Erstgespräch schauen wir gemeinsam auf Ihr Vorhaben. Sie erhalten danach ein klares Festpreisangebot, ohne versteckte Kosten.",
    ctaBoxButton: "Kostenloses Erstgespräch",
    sourcesLabel: "Quellen",
    sourceItems: [
      {
        title: "Webdesign Kosten 2026: Was eine Website wirklich kostet",
        url: "https://kopfundstift.de/webdesign-kosten/",
      },
      {
        title:
          "Webdesigner Kosten 2026: Festpreis, Stundensatz, Preisspannen Mittelstand",
        url: "https://davidkeiser.de/wissen/webdesigner-kosten-hub/",
      },
    ] as SourceItem[],
    photoCreditsHtml:
      '<a href="https://www.pexels.com" target="_blank" rel="noopener">Photos provided by Pexels</a> · Foto: <a href="https://www.pexels.com/photo/woman-in-dress-sitting-in-front-of-a-laptop-10375901/" target="_blank" rel="noopener">RDNE Stock project / Pexels</a> (Pexels License) · Foto: <a href="https://www.pexels.com/photo/businessmen-talking-over-coffee-23496863/" target="_blank" rel="noopener">Vitaly Gariev / Pexels</a> (Pexels License) · Foto: <a href="https://www.pexels.com/photo/woman-wearing-an-apron-standing-by-the-shelves-3906984/" target="_blank" rel="noopener">Andrea Piacquadio / Pexels</a> (Pexels License)',
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Kurz beantwortet.",
    faqItems: [
      {
        question:
          "Was kostet eine Website für ein kleines Unternehmen ungefähr?",
        answer:
          "Realistisch liegen die Kosten zwischen 1.000 und 8.000 Euro, abhängig von Umfang und Anbieter. Ein einfacher One-Pager ist günstiger als eine mehrseitige Website mit individuellem Design. Bei Burmeister Webdesign starten One-Pager bei 790 Euro, mehrseitige Websites bei 1.390 Euro, jeweils als klarer Festpreis nach dem Erstgespräch.",
      },
      {
        question: "Ist ein Baukasten günstiger als ein Webdesigner?",
        answer:
          "Kurzfristig ja, langfristig oft nicht. Baukästen mit generischen Vorlagen wirken günstig, stoßen aber bei individuellen Anpassungen, mobiler Optimierung und lokaler SEO schnell an Grenzen. Ein professionell erstellter Festpreis enthält diese Punkte meist direkt, ohne versteckte Folgekosten bei jeder gewünschten Änderung.",
      },
      {
        question: "Ist Festpreis oder Stundenhonorar bei Webdesign besser?",
        answer:
          "Für ein klar abgegrenztes Projekt wie eine Unternehmenswebsite ist ein Festpreis fast immer die bessere Wahl. Sie kennen die Kosten vorab und tragen kein Risiko, falls der Aufwand höher ausfällt. Stundenhonorare passen eher zu offenen, sich ständig ändernden Aufgaben als zu einer einmaligen Website-Erstellung.",
      },
      {
        question: "Wie lange dauert eine Website bei diesem Preis?",
        answer:
          "Ein One-Pager ist meist innerhalb einer Woche fertig, mehrseitige Websites benötigen typischerweise zwei bis vier Wochen bis zur ersten Vorschau und zum Launch. Die genaue Dauer hängt vor allem davon ab, wie schnell Sie Texte und Informationen zu Ihrem Unternehmen liefern können.",
      },
    ] as FaqItem[],
    finalCtaEyebrow: "Kostenloses Erstgespräch",
    finalCtaTitle: "Sie möchten wissen, was Ihre Website konkret kosten würde?",
    finalCtaText:
      "Im kostenlosen Erstgespräch schauen wir gemeinsam auf Ihr Vorhaben. Sie erhalten danach ein klares Festpreisangebot, ohne versteckte Kosten.",
    finalCtaButton: "Kostenloses Erstgespräch",
  },
  en: {
    metaTitle: "Website Costs 2026: What a Website Really Costs",
    metaDescription:
      "Website costs 2026: realistic price ranges, cost factors and a clear decision guide for local businesses in Leipzig.",
    breadcrumbLabel: "What Does a Website Really Cost for My Business?",
    headline: "What Does a Website Really Cost for My Business?",
    heroAlt:
      "What does a website really cost for my business? – Web design for local businesses",
    category: "Getting a Website Built",
    readTime: "7 min",
    dateDisplay: "June 29, 2026",
    tocLabel: "Contents",
    toc: [
      { id: "abschnitt-1", label: "Short answer" },
      { id: "abschnitt-2", label: "Who is this relevant for?" },
      { id: "abschnitt-3", label: "Benefits and limits" },
      { id: "abschnitt-4", label: "Cost logic" },
      { id: "abschnitt-5", label: "Common mistakes" },
      { id: "abschnitt-6", label: "Decision guide" },
      { id: "abschnitt-7", label: "Conclusion" },
    ],
    intro:
      "<p>You're thinking about having a new website built for your business, and the first question is almost always the same: what does that actually cost? The honest answer is: it depends, but not in a vague way. The range for <strong>getting a website built</strong> spans from a few hundred euros to tens of thousands, depending on who builds the site and what it needs to do. As a web designer based in Leipzig, I work almost exclusively with small, local businesses like trade companies, restaurants, and hair salons. With exactly this target group, I see the same uncertainty again and again in the initial consultation: either pay too much out of fear of poor quality, or pay very little and go without functionality. Both can be avoided once you understand the cost logic.</p>",
    detail1Caption:
      "A clear pricing structure builds trust before the first conversation. Photo: Vitaly Gariev / Pexels",
    detail1Alt: "Website cost detail view",
    detail2Caption:
      "Even small, local businesses benefit from a clear online presence. Photo: Andrea Piacquadio / Pexels",
    detail2Alt: "Website cost practical example",
    sections: {
      s1: "<p>A professional website for a small business in Germany typically costs between 1,000 and 8,000 euros in 2026, depending on scope, design, and whether you work with an agency or a freelancer. With me, one-page sites start at 790 euros, multi-page websites at 1,390 euros, and relaunches at 1,590 euros — each as a clear fixed price after a free initial consultation. <a href=\"/preise\">You can see the exact pricing structure on the pricing page</a>. More important than the raw number is what's actually included in the price: structure, copywriting, mobile optimization, and basic SEO should be part of any serious offer, not sold separately as an expensive add-on.</p>",
      s2: "<p>In practice, the cost question comes up mainly in three situations. First: you're just starting your business and need an initial professional presence without sinking your entire startup capital into the website. Second: your existing website is outdated, looks bad on mobile, and you're considering a relaunch. Third: you've received a quote and can't tell whether the number is reasonable because you have nothing to compare it to.</p><p>In all three cases, the same approach helps: don't look for the cheapest solution, look for the solution that matches your scope and goals. A hair salon with online appointment booking needs different features than a trade business that mainly wants to convey trust and reachability. A restaurant with a menu and reservations also has different functional needs than a small practice that primarily wants to demonstrate expertise and availability.</p><p>It's also important to consider who in the business will maintain the website afterward. If no one has regular time for content updates, a maintenance package is worth setting up from the start, rather than commissioning every small change individually. This noticeably changes the cost calculation, because ongoing costs are planned for from day one instead of showing up as a surprise later.</p>",
      s3: "<p>A professionally built website has a clear advantage: it immediately looks more credible than a social media profile alone, and it gives you full control over your content and how findable you are on Google. Unlike a rented profile on a platform, the website belongs to you, and you're not dependent on a third party's algorithm changes. At the same time, it's worth being upfront about the limits: a website alone won't bring you customers if no one finds it. Local visibility through Google and a well-maintained Google Business Profile matter at least as much as the website itself for most small businesses.</p><div class=\"tip-box\">Ask specifically, with every quote, whether basic local SEO — search terms, meta texts, and a Google Business Profile — is included in the price, not just design and technical implementation.</div><p>Another point many people underestimate: a website isn't a one-time project. Hosting, security updates, and small content adjustments come up on an ongoing basis, so you should realistically budget for recurring costs. Planning for this from the start also avoids the unpleasant surprise of a supposedly finished website looking technically outdated or insecure after just a few months.</p>",
      s4: "<p>The cost of a website is made up of several factors: number of pages, how custom the design is, copywriting, technical implementation, and basic SEO. Current industry comparisons for Germany in 2026 show that typical market prices at agencies and with freelancers are often noticeably higher than many businesses expect.</p><table><thead><tr><th>Website type</th><th>Typical market price 2026</th><th>At Burmeister Webdesign</th></tr></thead><tbody><tr><td>One-page site</td><td>€1,500 to €2,500</td><td>from €790</td></tr><tr><td>Multi-page business website</td><td>€3,000 to €10,000</td><td>from €1,390</td></tr><tr><td>Website relaunch</td><td>€3,500 to €7,500</td><td>from €1,590</td></tr><tr><td>Hosting and maintenance per month</td><td>€100 to €500</td><td>from €30</td></tr></tbody></table><p>This difference isn't down to lower quality — it comes from the business model: I work with only a handful of local businesses at a time, without the overhead of a large agency, and with a clearly standardized process from the initial consultation through to launch. You can see exactly what's included in the scope of work on the <a href=\"/leistungen\">services page</a>. If you supply your own text and photos yourself, the effort — and the price — drops further, since the time-consuming content creation falls away.</p>",
      s5: "<p>In initial consultations, I regularly see three recurring mistakes. First: deciding purely on the lowest price without checking what's missing from the offer, such as mobile optimization or basic SEO. Second: choosing a website builder and underestimating the ongoing maintenance, because templates look cheap at first but quickly hit their limits with custom changes. Third: getting caught off guard by hourly rates with no cap, because the actual effort ends up considerably higher than estimated.</p><div class=\"warning-box\">An offer without a clear fixed price and without a description of what's included is a warning sign. Get written confirmation, before the project starts, of exactly what's covered by the price.</div><p>A fourth, often overlooked point: if you haven't prepared any information about your own business — text, images, an overview of your services — the project will be significantly delayed, regardless of which provider you choose.</p>",
      s6: "<p>Three simple criteria help with the decision. If you only need a digital business card with contact details, a simple one-page site is enough. If you want to show multiple services, references, and a contact page, a multi-page website makes more sense. If your existing website is more than three or four years old and looks bad on mobile, a relaunch is usually more cost-effective than continuing to patch up the old site.</p><p>A fourth criterion concerns the budget itself: if your budget is currently limited, a lean start with a one-page site is often smarter than financing a website project that includes features you won't even use in the first year. A website can be expanded later, but a project that was scoped too generously is hard to scale back down. <a href=\"/ablauf\">See exactly what the process from initial consultation to launch looks like</a> on the process page. Either way, a free initial consultation is worthwhile before you commit to any offer, since that's the fastest way to clarify what scope is actually necessary.</p>",
      s7: "<p>The cost of a website depends less on the provider than on the actual scope of the project. Realistically, you should budget between 1,000 and 8,000 euros for a professional business website, depending on your requirements and the provider's model. With me, projects for local businesses start at just 790 euros for a one-page site, always with a clear fixed price after the initial consultation. If you want to know what your website would actually cost, the free initial consultation is the fastest and most no-obligation way to find out.</p>",
    },
    ctaBoxTitle: "Want to know what your website would actually cost?",
    ctaBoxText:
      "In the free initial consultation, we'll look at your project together. Afterward, you'll receive a clear fixed-price offer with no hidden costs.",
    ctaBoxButton: "Free initial consultation",
    sourcesLabel: "Sources",
    sourceItems: [
      {
        title: "Web design costs 2026: What a website really costs",
        url: "https://kopfundstift.de/webdesign-kosten/",
      },
      {
        title:
          "Web designer costs 2026: Fixed price, hourly rate, price ranges for SMEs",
        url: "https://davidkeiser.de/wissen/webdesigner-kosten-hub/",
      },
    ] as SourceItem[],
    photoCreditsHtml:
      '<a href="https://www.pexels.com" target="_blank" rel="noopener">Photos provided by Pexels</a> · Photo: <a href="https://www.pexels.com/photo/woman-in-dress-sitting-in-front-of-a-laptop-10375901/" target="_blank" rel="noopener">RDNE Stock project / Pexels</a> (Pexels License) · Photo: <a href="https://www.pexels.com/photo/businessmen-talking-over-coffee-23496863/" target="_blank" rel="noopener">Vitaly Gariev / Pexels</a> (Pexels License) · Photo: <a href="https://www.pexels.com/photo/woman-wearing-an-apron-standing-by-the-shelves-3906984/" target="_blank" rel="noopener">Andrea Piacquadio / Pexels</a> (Pexels License)',
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Quick answers.",
    faqItems: [
      {
        question:
          "Roughly what does a website cost for a small business?",
        answer:
          "Realistically, costs range between 1,000 and 8,000 euros, depending on scope and provider. A simple one-page site is cheaper than a multi-page website with custom design. At Burmeister Webdesign, one-page sites start at 790 euros and multi-page websites at 1,390 euros, each as a clear fixed price after the initial consultation.",
      },
      {
        question: "Is a website builder cheaper than a web designer?",
        answer:
          "In the short term, yes — in the long term, often not. Website builders with generic templates look cheap, but they quickly hit their limits when it comes to custom adjustments, mobile optimization, and local SEO. A professionally built fixed-price package usually includes these points directly, without hidden follow-up costs for every requested change.",
      },
      {
        question:
          "Is a fixed price or an hourly rate better for web design?",
        answer:
          "For a clearly scoped project like a business website, a fixed price is almost always the better choice. You know the costs upfront and carry no risk if the effort turns out to be higher than planned. Hourly rates fit open-ended, constantly changing tasks better than a one-time website build.",
      },
      {
        question: "How long does a website take at this price?",
        answer:
          "A one-page site is usually finished within a week; multi-page websites typically take two to four weeks until the first preview and launch. The exact timeline mainly depends on how quickly you can supply text and information about your business.",
      },
    ] as FaqItem[],
    finalCtaEyebrow: "Free initial consultation",
    finalCtaTitle: "Want to know what your website would actually cost?",
    finalCtaText:
      "In the free initial consultation, we'll look at your project together. Afterward, you'll receive a clear fixed-price offer with no hidden costs.",
    finalCtaButton: "Free initial consultation",
  },
} as const;

const articleSchemaBase = {
  image: `https://burmeister-webdesign.com${HERO_IMAGE}`,
  author: { "@type": "Organization", name: "Burmeister Webdesign" },
  publisher: {
    "@type": "Organization",
    name: "Burmeister Webdesign",
    logo: {
      "@type": "ImageObject",
      url: "https://burmeister-webdesign.com/images/gb-webdesign-logo-lang-schwarz-320.webp",
    },
  },
  datePublished: "2026-06-29",
  dateModified: "2026-06-30",
};

const imageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `https://burmeister-webdesign.com${HERO_IMAGE}`,
    license: "https://www.pexels.com/license/",
    acquireLicensePage:
      "https://www.pexels.com/photo/woman-in-dress-sitting-in-front-of-a-laptop-10375901/",
    creditText: "RDNE Stock project / Pexels",
    copyrightNotice: "© RDNE Stock project / Pexels",
    creator: {
      "@type": "Person",
      name: "RDNE Stock project",
      url: "https://www.pexels.com/@rdne",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `https://burmeister-webdesign.com${DETAIL_1_IMAGE}`,
    license: "https://www.pexels.com/license/",
    acquireLicensePage:
      "https://www.pexels.com/photo/businessmen-talking-over-coffee-23496863/",
    creditText: "Vitaly Gariev / Pexels",
    copyrightNotice: "© Vitaly Gariev / Pexels",
    creator: {
      "@type": "Person",
      name: "Vitaly Gariev",
      url: "https://www.pexels.com/@silverkblack",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `https://burmeister-webdesign.com${DETAIL_2_IMAGE}`,
    license: "https://www.pexels.com/license/",
    acquireLicensePage:
      "https://www.pexels.com/photo/woman-wearing-an-apron-standing-by-the-shelves-3906984/",
    creditText: "Andrea Piacquadio / Pexels",
    copyrightNotice: "© Andrea Piacquadio / Pexels",
    creator: {
      "@type": "Person",
      name: "Andrea Piacquadio",
      url: "https://www.pexels.com/@olly",
    },
  },
];

export function ratgeberWasKostetHead(locale: Locale) {
  const t = COPY[locale];
  const path =
    locale === "en"
      ? `/en/ratgeber/${SLUG}`
      : `/ratgeber/${SLUG}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    inLanguage: locale,
    headline: t.headline,
    description: t.metaDescription,
    keywords:
      locale === "en"
        ? "getting a website built, website cost Leipzig, what does a website cost, website price, small business web design cost"
        : "Website erstellen lassen Kosten, Website Kosten Leipzig, Was kostet eine Homepage, Website erstellen lassen Preis, Kosten Webdesign kleine Unternehmen",
    ...articleSchemaBase,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://burmeister-webdesign.com${path}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.metaTitle,
        description: t.metaDescription,
        path,
        image: `https://burmeister-webdesign.com${HERO_IMAGE}`,
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks(`/ratgeber/${SLUG}`),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd(path, t.breadcrumbLabel, locale),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      ...imageSchemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    ],
  };
}

export function RatgeberWasKostetPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/8] w-full md:aspect-[21/8]">
          <img
            src={HERO_IMAGE}
            alt={t.heroAlt}
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
              <Tag size={12} /> {(locale === "en" ? "Guide · " : "Ratgeber · ") + t.category}
            </span>
            <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-background md:text-5xl">
              {t.headline}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-background/70">
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {t.readTime}
              </span>
              <span>{t.dateDisplay}</span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div
            className="ratgeber-prose mb-8"
            dangerouslySetInnerHTML={{ __html: t.intro }}
          />

          <nav
            aria-label={t.tocLabel}
            className="mb-8 rounded-xl border border-border bg-card px-5 py-4"
          >
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t.tocLabel}
            </p>
            <ol className="space-y-1.5 text-sm">
              {t.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-primary hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <figure className="mb-10 overflow-hidden rounded-xl">
            <img
              src={DETAIL_1_IMAGE}
              alt={t.detail1Alt}
              className="aspect-[3/2] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {t.detail1Caption}
            </figcaption>
          </figure>

          <h2
            id="abschnitt-1"
            className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl"
          >
            {t.toc[0].label}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{ __html: t.sections.s1 }}
          />

          <h2
            id="abschnitt-2"
            className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl"
          >
            {t.toc[1].label}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{ __html: t.sections.s2 }}
          />

          <Card className="my-10 border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center md:p-6">
              <div className="flex-1">
                <p className="mb-1 font-semibold text-foreground">
                  {t.ctaBoxTitle}
                </p>
                <p className="text-sm text-foreground/70">{t.ctaBoxText}</p>
              </div>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <LocalizedLink to="/kontakt">{t.ctaBoxButton}</LocalizedLink>
              </Button>
            </CardContent>
          </Card>

          <h2
            id="abschnitt-3"
            className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl"
          >
            {t.toc[2].label}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{ __html: t.sections.s3 }}
          />

          <figure className="mb-6 overflow-hidden rounded-xl shadow-sm md:float-left md:mb-3 md:mr-7 md:w-[42%]">
            <img
              src={DETAIL_2_IMAGE}
              alt={t.detail2Alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="mt-2 px-1 text-xs text-muted-foreground">
              {t.detail2Caption}
            </figcaption>
          </figure>

          <h2
            id="abschnitt-4"
            className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl"
          >
            {t.toc[3].label}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{ __html: t.sections.s4 }}
          />

          <h2
            id="abschnitt-5"
            className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl"
          >
            {t.toc[4].label}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{ __html: t.sections.s5 }}
          />

          <h2
            id="abschnitt-6"
            className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl"
          >
            {t.toc[5].label}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{ __html: t.sections.s6 }}
          />

          <h2
            id="abschnitt-7"
            className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl"
          >
            {t.toc[6].label}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{ __html: t.sections.s7 }}
          />

          <div className="mt-10 border-t border-border pt-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t.sourcesLabel}
            </p>
            <ul className="space-y-1.5 text-sm">
              {t.sourceItems.map((source, i) => (
                <li key={i}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener"
                    className="text-primary hover:underline"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mt-10 clear-both text-xs text-muted-foreground/70"
            dangerouslySetInnerHTML={{ __html: t.photoCreditsHtml }}
          />
        </div>
      </Section>

      {t.faqItems.length > 0 && (
        <Section className="bg-secondary/45">
          <Eyebrow>{t.faqEyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
            {t.faqTitle}
          </h2>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={t.faqItems} />
          </div>
        </Section>
      )}

      <WeitereArtikel currentSlug={SLUG} />

      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">
              <span className="h-px w-6 bg-[var(--brand-gold)]" />
              {t.finalCtaEyebrow}
            </span>
            <h2 className="mt-5 font-serif text-3xl text-background md:text-4xl">
              {t.finalCtaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-background/70">
              {t.finalCtaText}
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button
              asChild
              className="rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90"
            >
              <LocalizedLink to="/kontakt">
                {t.finalCtaButton}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
