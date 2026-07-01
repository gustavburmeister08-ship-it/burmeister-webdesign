import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/site/Section";
import { FaqAccordion, type FaqItem } from "@/components/site/RefreshBlocks";
import { WeitereArtikel } from "@/components/site/WeitereArtikel";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { socialMeta, hreflangLinks, breadcrumbJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const SLUG = "website-relaunch-kosten-leipzig";
const HERO_IMAGE = "/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp";
const DETAIL_1_IMAGE = "/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-1.webp";
const DETAIL_2_IMAGE = "/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-2.webp";

interface SourceItem {
  title: string;
  url: string;
}

const COPY = {
  de: {
    metaTitle: "Website-Relaunch Kosten 2026: Realistische Preise",
    metaDescription:
      "Website-Relaunch Kosten für Leipziger Unternehmen: reale Preise ab 1.590 EUR, die wichtigsten Kostenfaktoren und wie Sie typische Rankingverluste beim Relaunch vermeiden.",
    breadcrumbLabel: "Website-Relaunch Kosten: Womit realistisch rechnen?",
    heroAlt: "Unternehmer betrachtet die eigene Website am Laptop im hellen Büro",
    category: "Website-Relaunch",
    readTime: "8 Min.",
    dateDisplay: "1. Juli 2026",
    title: "Website-Relaunch Kosten: Womit realistisch rechnen?",
    intro:
      "<p>Wer nach &bdquo;Website Relaunch Kosten&ldquo; sucht, hat meist schon ein klares Gefühl dafür, dass die alte Seite nicht mehr passt: veraltetes Design, keine vernünftige Darstellung auf dem Smartphone, Ladezeiten wie aus einer anderen Zeit. Die Preisangaben im Netz schwanken dabei zwischen wenigen Hundert und mehreren Zehntausend Euro, was die Entscheidung selten leichter macht. In der Beratungspraxis in Leipzig erlebe ich häufig, dass Handwerksbetriebe, Gastronomen oder kleine Praxen zunächst ein Bauchgefühl-Budget nennen und dann überrascht sind, wie klar sich ein Relaunch kalkulieren lässt, sobald Umfang, Ziel und Ausgangspunkt sauber getrennt werden. Dieser Ratgeber zeigt, womit Sie 2026 realistisch rechnen, welche Faktoren den Preis treiben und wie Sie einen überteuerten oder unterdimensionierten Relaunch vermeiden.</p>",
    tocLabel: "Inhalt",
    toc: [
      "Kurzantwort",
      "Für wen ist das Thema relevant?",
      "Vorteile und Grenzen",
      "Kostenlogik",
      "Typische Fehler",
      "Entscheidungshilfe",
      "Fazit",
    ],
    detail1Caption: "Struktur, Design und Texte bilden die Grundlage jeder Kostenkalkulation. Foto: EVG Kowalievska / Pexels",
    detail1Alt: "Laptop auf Schreibtisch im modernen Büroarbeitsplatz",
    detail2Caption: "Ein klares Festpreisangebot entsteht im persönlichen Erstgespräch. Foto: Alena Darmel / Pexels",
    detail2Alt: "Beratungsgespräch zwischen zwei Personen an einem Tisch im Büro",
    sections: [
      {
        id: "abschnitt-1",
        heading: "Kurzantwort",
        html: "<p>Für ein lokales Unternehmen mit einer bestehenden, überschaubaren Website liegt ein professioneller Relaunch bei einem selbstständigen Webdesigner in Leipzig realistisch ab 1.590 EUR, abhängig vom Seitenumfang, den vorhandenen Inhalten und dem technischen Zustand der alten Seite. Enthalten sind dabei in der Regel Struktur, Design, Texte, mobile Optimierung, SEO-Grundlagen und die Veröffentlichung. Größere Mittelstandsprojekte mit vielen Unterseiten, individuellem Backend oder mehrsprachigem Auftritt bewegen sich laut aktuellen Marktanalysen für den deutschen Mittelstand eher zwischen 8.000 und 15.000 EUR, teils deutlich darüber.</p><p>Der entscheidende Unterschied liegt selten in der reinen Seitenzahl, sondern darin, wie viel bereits wiederverwendbar ist: Fotos, Texte, Struktur, eine klare Zielgruppe. Je mehr davon vorhanden ist, desto näher liegt Ihr Relaunch am unteren Ende der Preisspanne. Wichtig für die Einordnung: Die höheren Mittelstandswerte stammen meist aus B2B-Projekten mit vielen Abteilungen, mehrsprachigen Inhalten oder individuellen Softwareanbindungen, nicht aus dem typischen Bedarf eines Handwerksbetriebs, einer Praxis oder eines Gastronomiebetriebs in Leipzig.</p>",
      },
      {
        id: "abschnitt-2",
        heading: "Für wen ist das Thema relevant?",
        html: "<p>Relevant ist die Frage vor allem für drei Situationen: Erstens für Betriebe, deren Website älter als fünf bis sieben Jahre ist und auf dem Smartphone kaum lesbar oder bedienbar ist. Zweitens für Unternehmen, die zwar Anfragen über Empfehlung bekommen, über die eigene Website aber praktisch keine neuen Kunden gewinnen. Drittens für alle, die nach einem Umzug, einer Umfirmierung oder einer Sortiments- beziehungsweise Leistungsänderung merken, dass die bestehende Seite nicht mehr zum tatsächlichen Angebot passt.</p><p>Typisch sind Handwerksbetriebe mit einer zehn Jahre alten Baukasten-Seite, Gastronomiebetriebe ohne aktuelle Speisekarte und Öffnungszeiten sowie kleine Dienstleister und Praxen, deren Auftritt auf dem Smartphone abgeschnitten oder unleserlich dargestellt wird. Eine Website ohne klare Struktur ist wie ein Laden ohne Beschilderung: Kundinnen und Kunden gehen wieder, bevor sie gefunden haben, was sie suchen.</p><p>Nicht relevant ist ein vollständiger Relaunch dagegen häufig für Unternehmen, deren Website erst vor ein bis zwei Jahren erneuert wurde und lediglich einzelne Texte oder Bilder veraltet sind. Hier reicht meist eine punktuelle Pflege im Rahmen der laufenden Wartung, statt gleich das gesamte Konzept neu aufzusetzen.</p>",
      },
      {
        id: "abschnitt-3",
        heading: "Vorteile und Grenzen",
        html: "<p>Ein Relaunch bringt vor allem drei praktische Vorteile: eine moderne, auf Mobilgeräten funktionierende Darstellung, eine klarere Struktur mit erkennbarem Handlungsaufruf und technisch saubere Grundlagen für lokale Sichtbarkeit, etwa passende Meta-Titel, Beschreibungen und eine Optimierung auf 30 oder mehr lokale Suchbegriffe. Realistisches Zielniveau bei der technischen Performance ist ein Lighthouse Performance Score von 95 oder höher, was sich direkt auf Ladezeit und Nutzererlebnis auswirkt.</p><p>Ehrlich gehört aber auch dazu: Ein Relaunch ersetzt keine Werbekampagne und garantiert keine bestimmte Platzierung bei Google. Er schafft die technische und inhaltliche Grundlage, auf der lokale Sichtbarkeit und Anfragen wachsen können, das Ergebnis hängt aber zusätzlich von Inhalten, Bewertungen und dem Google-Unternehmensprofil ab. Bei einem eigenen Kundenprojekt wie geyerliner.de (echtes Kundenprojekt) hat sich gezeigt, dass vor allem die Reduzierung auf klare Kernbotschaften nach dem Relaunch die Qualität der Anfragen spürbar verbessert hat, nicht allein deren Anzahl.</p><p>Mehr zum Leistungsumfang eines Relaunches finden Sie unter <a data-link=\"/leistungen\">Leistungen</a>.</p>",
      },
      {
        id: "abschnitt-4",
        heading: "Kostenlogik",
        html: "<p>Die Kosten eines Relaunches hängen an vier Faktoren: Seitenumfang, Wiederverwendbarkeit vorhandener Inhalte, gewünschter Funktionsumfang (zum Beispiel Terminbuchung oder Online-Speisekarte) und Textarbeit. Bei Burmeister Webdesign gelten dabei ausschließlich reale Werte: Ein einfacher One-Pager startet ab 790 EUR, eine mehrseitige Website ab 1.390 EUR, ein vollständiger Relaunch einer bestehenden Seite ab 1.590 EUR. Hosting und laufende Wartung kommen mit ab 30 EUR pro Monat hinzu.</p><p>Diese Preise gelten als Festpreis nach einem kostenlosen 15-minütigen Erstgespräch, nicht als Stundensatz. Für lokale Unternehmen ist das in der Praxis planbarer als eine Abrechnung nach Aufwand, bei der die Endsumme erst nach Projektabschluss feststeht. Ob ein Baukasten-System oder ein individuell umgesetzter Relaunch durch einen Webdesigner sinnvoller ist, hängt stark davon ab, wie wichtig Ihnen Individualität, Ladezeit und persönliche Betreuung sind.</p><table><thead><tr><th>Kriterium</th><th>Website-Baukasten</th><th>Relaunch durch Webdesigner</th></tr></thead><tbody><tr><td>Startkosten</td><td>oft ab 0 bis 20 EUR/Monat</td><td>ab 1.590 EUR Festpreis</td></tr><tr><td>Individualität</td><td>eingeschränkt auf Vorlagen</td><td>auf Betrieb zugeschnitten</td></tr><tr><td>Persönliche Betreuung</td><td>meist kein fester Ansprechpartner</td><td>direkter Ansprechpartner vor Ort</td></tr><tr><td>SEO-Grundlagen</td><td>häufig nachträglich, selbst zu pflegen</td><td>im Kernangebot bereits enthalten</td></tr><tr><td>Laufender Aufwand</td><td>Pflege liegt beim Unternehmen selbst</td><td>Wartung optional ab 30 EUR/Monat</td></tr></tbody></table><p>Details zu allen Paketen und der genauen Preisstruktur finden Sie unter <a data-link=\"/preise\">Preise im Detail</a>.</p><div class=\"tip-box\">Fragen Sie vor jedem Angebot konkret nach, ob der genannte Preis ein Festpreis oder ein Stundensatz ist, das verhindert böse Überraschungen bei der Endrechnung.</div>",
      },
      {
        id: "abschnitt-5",
        heading: "Typische Fehler",
        html: "<p>Der häufigste und teuerste Fehler beim Relaunch ist das Fehlen sauberer Weiterleitungen von alten auf neue Adressen. Ändert sich die Struktur der Website ohne ein vollständiges URL-Mapping, verlieren gut rankende Seiten ihre über Jahre aufgebaute Sichtbarkeit, weil Suchmaschinen die alten Adressen nicht mehr finden und bestehende Verlinkungen von außen ins Leere laufen. Ein zweiter typischer Fehler ist das großzügige Löschen bewährter Inhalte, etwa gut funktionierender Texte oder Unterseiten, nur weil sie optisch nicht mehr ins neue Design passen. Ein dritter Fehler ist fehlendes Monitoring in den ersten vier bis acht Wochen nach dem Launch, in denen Suchmaschinen die neue Struktur neu bewerten und Schwankungen normal, aber beobachtungspflichtig sind.</p><div class=\"warning-box\">Ohne vollständiges URL-Mapping vor dem Relaunch drohen Rankingverluste, weil Backlinks und Suchmaschinenindex auf nicht mehr existierende Adressen zeigen.</div><p>Ein weiterer Klassiker: Unternehmen entscheiden sich für das günstigste Angebot, ohne zu prüfen, ob Texte, mobile Optimierung und SEO-Grundlagen überhaupt enthalten sind, und zahlen die fehlenden Leistungen später einzeln nach.</p>",
      },
      {
        id: "abschnitt-6",
        heading: "Entscheidungshilfe",
        html: "<p>Als grobe Orientierung: Reicht Ihre bestehende Seite inhaltlich noch aus und stört nur das Design, genügt häufig ein überschaubarer Relaunch ab 1.590 EUR. Fehlen dagegen komplette Unterseiten, eine mobile Darstellung oder eine klare Struktur, ist meist eine mehrseitige Neuerstellung ab 1.390 EUR die passendere Einordnung. Für ein einzelnes Angebot oder eine reine Kontaktseite reicht in vielen Fällen ein One-Pager ab 790 EUR.</p><p>Stellen Sie sich vor der Beauftragung drei konkrete Fragen: Wie alt ist die aktuelle Seite und wann wurde sie zuletzt inhaltlich gepflegt? Wie viele Anfragen kommen aktuell wirklich über die Website, nicht über Empfehlung? Und ist ein Festpreisangebot vorhanden, bevor die Arbeit beginnt? Ein realistischer Ablauf von Erstgespräch über Festpreisangebot bis zur ersten Vorschau dauert typischerweise etwa sieben Tage, gefolgt von einer Feedbackrunde und dem Launch.</p><p>Als zusätzliches Prüfkriterium hilft ein Blick auf die letzten zwölf Monate: Wie viele konkrete Anfragen kamen über das Kontaktformular oder die angegebene Telefonnummer der Website, nicht über persönliche Empfehlung? Liegt diese Zahl bei null oder nahe null, ist das ein deutliches Signal, dass Struktur, Auffindbarkeit oder mobile Darstellung nicht mehr funktionieren und ein Relaunch sich in überschaubarer Zeit amortisieren kann.</p>",
      },
      {
        id: "abschnitt-7",
        heading: "Fazit",
        html: "<p>Ein Website-Relaunch für ein lokales Unternehmen in Leipzig lässt sich mit realen Werten kalkulieren, nicht mit vagen Schätzungen: ab 1.590 EUR für einen vollständigen Relaunch, ab 1.390 EUR für eine mehrseitige Neuerstellung, ab 790 EUR für einen One-Pager, dazu ab 30 EUR im Monat für Hosting und Wartung. Entscheidend für den tatsächlichen Preis sind Umfang, wiederverwendbare Inhalte und ein sauberes Konzept für Weiterleitungen, damit bestehende Sichtbarkeit nicht verloren geht.</p><p>Wenn Sie unsicher sind, wo Ihr Projekt in dieser Spanne liegt, ist ein kostenloses Erstgespräch der einfachste nächste Schritt: <a data-link=\"/kontakt\">Kostenloses Erstgespräch vereinbaren</a>.</p>",
      },
    ],
    ctaCardTitle: "Sie möchten Ihre Website modernisieren?",
    ctaCardText: "Ich prüfe mit Ihnen, welche Lösung zu Ihrem Unternehmen, Ihrem Budget und Ihren Zielen passt, passend zum Thema Website Relaunch Kosten.",
    ctaCardButton: "Leistungen ansehen",
    sourcesLabel: "Quellen",
    sources: [
      { title: "Website Relaunch Kosten 2026: Realistische Preise (davidkeiser.de)", url: "https://davidkeiser.de/wissen/website-relaunch-kosten/" },
      { title: "Website-Relaunch Kosten 2026: Budget- und Prozessleitfaden (webdelo.de)", url: "https://webdelo.de/blog/website-relaunch-kosten-2026" },
      { title: "Die 10 häufigsten SEO Fehler beim Website Relaunch (luna-park.de)", url: "https://www.luna-park.de/blog/28104-seo-fehler-beim-relaunch/" },
      { title: "Website-Relaunch ohne Rankingverlust: SEO-Hürden (raidboxes.io)", url: "https://raidboxes.io/en/blog/online-marketing/website-relaunch-seo/" },
    ] as SourceItem[],
    photoCredits:
      "<a href=\"https://www.pexels.com\" target=\"_blank\" rel=\"noopener\">Photos provided by Pexels</a> · Foto: <a href=\"https://www.pexels.com/photo/a-man-looking-at-a-website-on-the-internet-7309483/\" target=\"_blank\" rel=\"noopener\">RDNE Stock project / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/turned-on-silver-laptop-on-tabletop-1128207/\" target=\"_blank\" rel=\"noopener\">EVG Kowalievska / Pexels</a> (Pexels License) · Foto: <a href=\"https://www.pexels.com/photo/a-man-and-a-woman-talking-to-an-agent-7642116/\" target=\"_blank\" rel=\"noopener\">Alena Darmel / Pexels</a> (Pexels License)",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Kurz beantwortet.",
    faqItems: [
      {
        question: "Was kostet ein Website-Relaunch für ein kleines Unternehmen in Leipzig?",
        answer: "Ein vollständiger Relaunch einer bestehenden Website startet bei einem selbstständigen Webdesigner in Leipzig realistisch ab 1.590 EUR als Festpreis. Enthalten sind meist Struktur, Design, Texte, mobile Optimierung und SEO-Grundlagen. Der genaue Preis richtet sich nach Seitenumfang und wiederverwendbaren Inhalten und wird im kostenlosen Erstgespräch konkret ermittelt.",
      },
      {
        question: "Wie lange dauert ein Website-Relaunch von der Anfrage bis zum Launch?",
        answer: "Nach dem kostenlosen 15-minütigen Erstgespräch folgt ein Festpreisangebot, danach steht meist innerhalb von etwa sieben Tagen eine erste Vorschau. Nach einer Feedbackrunde erfolgt der Launch, insgesamt liegt ein überschaubarer Relaunch damit häufig bei zwei bis drei Wochen Gesamtdauer, abhängig von der Rückmeldegeschwindigkeit des Unternehmens.",
      },
      {
        question: "Verliert meine Website beim Relaunch ihre bisherigen Google-Rankings?",
        answer: "Ohne sauberes URL-Mapping und Weiterleitungen von alten auf neue Adressen drohen tatsächlich Rankingverluste, weil Backlinks und Suchmaschinenindex ins Leere laufen. Mit vollständigen 301-Weiterleitungen, erhaltenen Kerninhalten und Monitoring in den ersten vier bis acht Wochen nach dem Launch lässt sich dieses Risiko deutlich reduzieren.",
      },
      {
        question: "Lohnt sich ein Website-Baukasten statt eines Relaunches durch einen Webdesigner?",
        answer: "Ein Baukasten kann für ein sehr einfaches, temporäres Angebot ausreichen, bietet aber meist wenig Individualität und keine feste Ansprechperson. Für Betriebe, die Wert auf ein zugeschnittenes Design, persönliche Betreuung und mitgelieferte SEO-Grundlagen legen, ist ein individueller Relaunch ab 1.590 EUR häufig die wirtschaftlich sinnvollere Entscheidung.",
      },
    ],
    ctaSectionEyebrow: "Kostenloses Erstgespräch",
    ctaSectionTitle: "Sie möchten Ihre Website modernisieren?",
    ctaSectionText: "Ich prüfe mit Ihnen, welche Lösung zu Ihrem Unternehmen, Ihrem Budget und Ihren Zielen passt, passend zum Thema Website Relaunch Kosten.",
    ctaSectionButton: "Leistungen ansehen",
  },
  en: {
    metaTitle: "Website Relaunch Costs 2026: Realistic Prices",
    metaDescription:
      "Website relaunch costs for businesses in Leipzig: real prices from 1,590 EUR, the key cost factors, and how to avoid typical ranking losses during a relaunch.",
    breadcrumbLabel: "Website Relaunch Costs: What Should You Realistically Budget?",
    heroAlt: "A business owner looking at their own website on a laptop in a bright office",
    category: "Website Relaunch",
    readTime: "8 min",
    dateDisplay: "July 1, 2026",
    title: "Website Relaunch Costs: What Should You Realistically Budget?",
    intro:
      "<p>Anyone searching for &ldquo;website relaunch costs&rdquo; usually already has a clear feeling that the old site no longer fits: outdated design, a poor showing on smartphones, load times straight out of another era. Price estimates online swing between a few hundred and several tens of thousands of euros, which rarely makes the decision any easier. In my consulting practice in Leipzig I regularly see tradespeople, restaurant owners, or small practices first quote a gut-feeling budget, and then be surprised at how clearly a relaunch can be calculated once scope, goal, and starting point are cleanly separated. This guide shows what you should realistically budget for in 2026, which factors drive the price, and how to avoid an overpriced or under-scoped relaunch.</p>",
    tocLabel: "Contents",
    toc: [
      "Short answer",
      "Who is this relevant for?",
      "Benefits and limits",
      "Cost logic",
      "Common mistakes",
      "Decision guide",
      "Conclusion",
    ],
    detail1Caption: "Structure, design, and copy form the foundation of every cost calculation. Photo: EVG Kowalievska / Pexels",
    detail1Alt: "Laptop on a desk in a modern office workspace",
    detail2Caption: "A clear fixed-price quote takes shape during the personal initial consultation. Photo: Alena Darmel / Pexels",
    detail2Alt: "Consultation between two people at a table in an office",
    sections: [
      {
        id: "abschnitt-1",
        heading: "Short answer",
        html: "<p>For a local business with an existing, modest-sized website, a professional relaunch with an independent web designer in Leipzig realistically starts at 1,590 EUR, depending on the number of pages, the existing content, and the technical condition of the old site. This typically includes structure, design, copy, mobile optimization, SEO fundamentals, and publishing. Larger mid-market projects with many subpages, a custom backend, or a multilingual presence tend to fall between 8,000 and 15,000 EUR according to current market analyses for the German Mittelstand, sometimes considerably more.</p><p>The decisive difference is rarely the raw page count, but rather how much can already be reused: photos, copy, structure, a clearly defined target audience. The more of that already exists, the closer your relaunch sits to the lower end of the price range. Important for context: the higher Mittelstand figures usually come from B2B projects with many departments, multilingual content, or custom software integrations — not from the typical needs of a trade business, a practice, or a restaurant in Leipzig.</p>",
      },
      {
        id: "abschnitt-2",
        heading: "Who is this relevant for?",
        html: "<p>This question is mainly relevant in three situations: first, for businesses whose website is older than five to seven years and is barely readable or usable on a smartphone. Second, for companies that do get inquiries through referrals but win practically no new customers through their own website. Third, for anyone who, after a move, a rebranding, or a change in offerings or services, notices that the existing site no longer matches what the business actually offers.</p><p>Typical examples are trade businesses with a ten-year-old website-builder site, restaurants without an up-to-date menu and opening hours, and small service providers and practices whose site gets cut off or renders illegibly on a smartphone. A website without a clear structure is like a shop with no signage: customers leave again before they've found what they were looking for.</p><p>On the other hand, a full relaunch is often not relevant for companies whose website was renewed just one or two years ago and where only individual texts or images are outdated. In that case, targeted upkeep as part of ongoing maintenance is usually enough, rather than rebuilding the entire concept from scratch.</p>",
      },
      {
        id: "abschnitt-3",
        heading: "Benefits and limits",
        html: "<p>A relaunch brings three main practical benefits: a modern presentation that works on mobile devices, a clearer structure with a recognizable call to action, and technically clean fundamentals for local visibility, such as fitting meta titles, descriptions, and optimization for 30 or more local search terms. A realistic target level for technical performance is a Lighthouse Performance score of 95 or higher, which directly affects load time and user experience.</p><p>In fairness, it's also worth saying: a relaunch is not a substitute for an ad campaign and guarantees no specific ranking on Google. It creates the technical and content foundation on which local visibility and inquiries can grow, but the outcome also depends on content, reviews, and the Google Business Profile. In one of my own client projects, geyerliner.de (a real client project), it became clear that above all reducing the messaging down to clear core statements after the relaunch noticeably improved the quality of inquiries after the relaunch, not just their number.</p><p>You can find more on the scope of a relaunch under <a data-link=\"/leistungen\">Services</a>.</p>",
      },
      {
        id: "abschnitt-4",
        heading: "Cost logic",
        html: "<p>The cost of a relaunch depends on four factors: number of pages, how much existing content can be reused, the desired feature set (for example appointment booking or an online menu), and copywriting effort. At Burmeister Webdesign, only real, published figures apply: a simple one-pager starts at 790 EUR, a multi-page website starts at 1,390 EUR, and a full relaunch of an existing site starts at 1,590 EUR. Hosting and ongoing maintenance are added starting at 30 EUR per month.</p><p>These prices apply as a fixed price after a free 15-minute initial consultation, not as an hourly rate. In practice, that's more predictable for local businesses than billing by effort, where the final total only becomes clear once the project is finished. Whether a website-builder platform or an individually built relaunch by a web designer makes more sense depends heavily on how important individuality, load time, and personal support are to you.</p><table><thead><tr><th>Criterion</th><th>Website builder</th><th>Relaunch by a web designer</th></tr></thead><tbody><tr><td>Starting cost</td><td>often from 0 to 20 EUR/month</td><td>from 1,590 EUR fixed price</td></tr><tr><td>Individuality</td><td>limited to templates</td><td>tailored to the business</td></tr><tr><td>Personal support</td><td>usually no fixed contact person</td><td>direct, local point of contact</td></tr><tr><td>SEO fundamentals</td><td>often added later, self-maintained</td><td>already included in the core offer</td></tr><tr><td>Ongoing effort</td><td>upkeep is on the business itself</td><td>maintenance optional from 30 EUR/month</td></tr></tbody></table><p>You'll find details on all packages and the exact pricing structure under <a data-link=\"/preise\">Pricing details</a>.</p><div class=\"tip-box\">Before accepting any quote, ask explicitly whether the stated price is a fixed price or an hourly rate — that prevents unpleasant surprises on the final invoice.</div>",
      },
      {
        id: "abschnitt-5",
        heading: "Common mistakes",
        html: "<p>The most common and most costly mistake during a relaunch is the lack of clean redirects from old addresses to new ones. If the website's structure changes without a complete URL mapping, pages that were ranking well lose the visibility they built up over years, because search engines can no longer find the old addresses and existing external links lead nowhere. A second typical mistake is generously deleting content that was working well, such as effective copy or subpages, simply because it no longer visually fits the new design. A third mistake is a lack of monitoring in the first four to eight weeks after launch, during which search engines re-evaluate the new structure and fluctuations are normal, but need to be watched.</p><div class=\"warning-box\">Without a complete URL mapping before the relaunch, you risk ranking losses, because backlinks and the search engine index point to addresses that no longer exist.</div><p>Another classic: companies choose the cheapest offer without checking whether copywriting, mobile optimization, and SEO fundamentals are even included, and end up paying for the missing services separately later.</p>",
      },
      {
        id: "abschnitt-6",
        heading: "Decision guide",
        html: "<p>As a rough guide: if your existing site's content still holds up and only the design is the problem, a modest relaunch from 1,590 EUR is often enough. If, on the other hand, entire subpages, mobile display, or a clear structure are missing, a multi-page rebuild from 1,390 EUR is usually the better fit. For a single offer or a pure contact page, a one-pager from 790 EUR is often sufficient.</p><p>Before commissioning any work, ask yourself three concrete questions: how old is the current site, and when was its content last maintained? How many inquiries are actually coming through the website right now, as opposed to referrals? And is a fixed-price quote in place before work begins? A realistic timeline from initial consultation through fixed-price quote to a first preview typically takes about seven days, followed by a round of feedback and the launch.</p><p>As an additional check, it helps to look at the last twelve months: how many concrete inquiries came in through the website's contact form or listed phone number, as opposed to personal referral? If that number is zero or close to zero, that's a clear signal that structure, discoverability, or mobile display are no longer working, and a relaunch can pay for itself within a manageable amount of time.</p>",
      },
      {
        id: "abschnitt-7",
        heading: "Conclusion",
        html: "<p>A website relaunch for a local business in Leipzig can be calculated using real figures, not vague estimates: from 1,590 EUR for a full relaunch, from 1,390 EUR for a multi-page rebuild, from 790 EUR for a one-pager, plus from 30 EUR a month for hosting and maintenance. What actually determines the price is scope, reusable content, and a clean plan for redirects, so that existing visibility isn't lost.</p><p>If you're unsure where your project falls within this range, a free initial consultation is the easiest next step: <a data-link=\"/kontakt\">Book a free consultation</a>.</p>",
      },
    ],
    ctaCardTitle: "Want to modernize your website?",
    ctaCardText: "I'll help you work out which solution fits your business, your budget, and your goals — in the context of website relaunch costs.",
    ctaCardButton: "View services",
    sourcesLabel: "Sources",
    sources: [
      { title: "Website Relaunch Kosten 2026: Realistische Preise (davidkeiser.de)", url: "https://davidkeiser.de/wissen/website-relaunch-kosten/" },
      { title: "Website-Relaunch Kosten 2026: Budget- und Prozessleitfaden (webdelo.de)", url: "https://webdelo.de/blog/website-relaunch-kosten-2026" },
      { title: "Die 10 häufigsten SEO Fehler beim Website Relaunch (luna-park.de)", url: "https://www.luna-park.de/blog/28104-seo-fehler-beim-relaunch/" },
      { title: "Website Relaunch Without Ranking Loss: SEO Hurdles (raidboxes.io)", url: "https://raidboxes.io/en/blog/online-marketing/website-relaunch-seo/" },
    ] as SourceItem[],
    photoCredits:
      "<a href=\"https://www.pexels.com\" target=\"_blank\" rel=\"noopener\">Photos provided by Pexels</a> · Photo: <a href=\"https://www.pexels.com/photo/a-man-looking-at-a-website-on-the-internet-7309483/\" target=\"_blank\" rel=\"noopener\">RDNE Stock project / Pexels</a> (Pexels License) · Photo: <a href=\"https://www.pexels.com/photo/turned-on-silver-laptop-on-tabletop-1128207/\" target=\"_blank\" rel=\"noopener\">EVG Kowalievska / Pexels</a> (Pexels License) · Photo: <a href=\"https://www.pexels.com/photo/a-man-and-a-woman-talking-to-an-agent-7642116/\" target=\"_blank\" rel=\"noopener\">Alena Darmel / Pexels</a> (Pexels License)",
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Quick answers.",
    faqItems: [
      {
        question: "How much does a website relaunch cost for a small business in Leipzig?",
        answer: "A full relaunch of an existing website realistically starts at 1,590 EUR as a fixed price with an independent web designer in Leipzig. This usually includes structure, design, copy, mobile optimization, and SEO fundamentals. The exact price depends on the number of pages and reusable content, and is determined concretely during the free initial consultation.",
      },
      {
        question: "How long does a website relaunch take, from inquiry to launch?",
        answer: "After the free 15-minute initial consultation comes a fixed-price quote, and a first preview is usually ready within about seven days after that. After a round of feedback, the launch follows — so a manageable relaunch often takes a total of two to three weeks, depending on how quickly the business responds.",
      },
      {
        question: "Will my website lose its existing Google rankings during a relaunch?",
        answer: "Without clean URL mapping and redirects from old to new addresses, ranking losses are a real risk, because backlinks and the search engine index end up pointing nowhere. With complete 301 redirects, preserved core content, and monitoring in the first four to eight weeks after launch, this risk can be significantly reduced.",
      },
      {
        question: "Is a website builder worth it instead of a relaunch by a web designer?",
        answer: "A website builder can be enough for a very simple, temporary offering, but usually provides little individuality and no fixed point of contact. For businesses that value a tailored design, personal support, and included SEO fundamentals, an individually built relaunch from 1,590 EUR is often the more economically sensible choice.",
      },
    ],
    ctaSectionEyebrow: "Free Initial Consultation",
    ctaSectionTitle: "Want to modernize your website?",
    ctaSectionText: "I'll help you work out which solution fits your business, your budget, and your goals — in the context of website relaunch costs.",
    ctaSectionButton: "View services",
  },
} as const;

function renderHtmlWithLinks(html: string) {
  // dangerouslySetInnerHTML can't render React <LocalizedLink> components, so
  // body copy keeps plain <a data-link="..."> markers; this article has no
  // in-body links besides the ones rendered separately below, so we simply
  // pass the HTML through as-is (LocalizedLink is only used for the JSX CTAs).
  return html;
}

export function ratgeberRelaunchHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/ratgeber/website-relaunch-kosten-leipzig" : "/ratgeber/website-relaunch-kosten-leipzig";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    inLanguage: locale,
    headline: t.title,
    description: t.metaDescription,
    keywords:
      locale === "en"
        ? "website relaunch costs, relaunch website price, website redesign cost, what does a relaunch cost, relaunch website Leipzig"
        : "Website Relaunch Kosten, Relaunch Website Preis, Website überarbeiten Kosten, Was kostet ein Relaunch, Relaunch Website Leipzig",
    image: "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp",
    author: { "@type": "Organization", name: "Burmeister Webdesign" },
    publisher: {
      "@type": "Organization",
      name: "Burmeister Webdesign",
      logo: {
        "@type": "ImageObject",
        url: "https://burmeister-webdesign.com/images/gb-webdesign-logo-lang-schwarz-320.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://burmeister-webdesign.com${path}`,
    },
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
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

  const imageSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp",
      license: "https://www.pexels.com/license/",
      acquireLicensePage: "https://www.pexels.com/photo/a-man-looking-at-a-website-on-the-internet-7309483/",
      creditText: "RDNE Stock project / Pexels",
      copyrightNotice: "© RDNE Stock project / Pexels",
      creator: { "@type": "Person", name: "RDNE Stock project", url: "https://www.pexels.com/@rdne" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-1.webp",
      license: "https://www.pexels.com/license/",
      acquireLicensePage: "https://www.pexels.com/photo/turned-on-silver-laptop-on-tabletop-1128207/",
      creditText: "EVG Kowalievska / Pexels",
      copyrightNotice: "© EVG Kowalievska / Pexels",
      creator: { "@type": "Person", name: "EVG Kowalievska", url: "https://www.pexels.com/@kowalievska" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-detail-2.webp",
      license: "https://www.pexels.com/license/",
      acquireLicensePage: "https://www.pexels.com/photo/a-man-and-a-woman-talking-to-an-agent-7642116/",
      creditText: "Alena Darmel / Pexels",
      copyrightNotice: "© Alena Darmel / Pexels",
      creator: { "@type": "Person", name: "Alena Darmel", url: "https://www.pexels.com/@a-darmel" },
    },
  ];

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.metaTitle,
        description: t.metaDescription,
        path,
        image: "https://burmeister-webdesign.com/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/ratgeber/website-relaunch-kosten-leipzig"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(path, t.breadcrumbLabel, locale)),
      },
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      ...imageSchemas.map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
    ],
  };
}

export function RatgeberRelaunchPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const faqItems: readonly FaqItem[] = t.faqItems;

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
              {t.title}
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
            dangerouslySetInnerHTML={{ __html: renderHtmlWithLinks(t.intro) }}
          />

          <nav aria-label={locale === "en" ? "Table of contents" : "Inhaltsverzeichnis"} className="mb-8 rounded-xl border border-border bg-card px-5 py-4">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.tocLabel}</p>
            <ol className="space-y-1.5 text-sm">
              {t.sections.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-primary hover:underline">
                    {t.toc[i]}
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

          <h2 id={t.sections[0].id} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t.sections[0].heading}
          </h2>
          <div className="ratgeber-prose" dangerouslySetInnerHTML={{ __html: t.sections[0].html }} />

          <h2 id={t.sections[1].id} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t.sections[1].heading}
          </h2>
          <div className="ratgeber-prose" dangerouslySetInnerHTML={{ __html: t.sections[1].html }} />

          <Card className="my-10 border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center md:p-6">
              <div className="flex-1">
                <p className="mb-1 font-semibold text-foreground">{t.ctaCardTitle}</p>
                <p className="text-sm text-foreground/70">{t.ctaCardText}</p>
              </div>
              <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <LocalizedLink to="/leistungen">{t.ctaCardButton}</LocalizedLink>
              </Button>
            </CardContent>
          </Card>

          <h2 id={t.sections[2].id} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t.sections[2].heading}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{
              __html: t.sections[2].html.replace(
                '<a data-link="/leistungen">',
                `<a href="${locale === "en" ? "/en/leistungen" : "/leistungen"}">`,
              ),
            }}
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

          <h2 id={t.sections[3].id} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t.sections[3].heading}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{
              __html: t.sections[3].html.replace(
                '<a data-link="/preise">',
                `<a href="${locale === "en" ? "/en/preise" : "/preise"}">`,
              ),
            }}
          />

          <h2 id={t.sections[4].id} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t.sections[4].heading}
          </h2>
          <div className="ratgeber-prose" dangerouslySetInnerHTML={{ __html: t.sections[4].html }} />

          <h2 id={t.sections[5].id} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t.sections[5].heading}
          </h2>
          <div className="ratgeber-prose" dangerouslySetInnerHTML={{ __html: t.sections[5].html }} />

          <h2 id={t.sections[6].id} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t.sections[6].heading}
          </h2>
          <div
            className="ratgeber-prose"
            dangerouslySetInnerHTML={{
              __html: t.sections[6].html.replace(
                '<a data-link="/kontakt">',
                `<a href="${locale === "en" ? "/en/kontakt" : "/kontakt"}">`,
              ),
            }}
          />

          <div className="mt-10 border-t border-border pt-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.sourcesLabel}</p>
            <ul className="space-y-1.5 text-sm">
              {t.sources.map((source, i) => (
                <li key={i}>
                  <a href={source.url} target="_blank" rel="noopener" className="text-primary hover:underline">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 clear-both text-xs text-muted-foreground/70" dangerouslySetInnerHTML={{ __html: t.photoCredits }} />
        </div>
      </Section>

      {faqItems.length > 0 && (
        <Section className="bg-secondary/45">
          <Eyebrow>{t.faqEyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
            {t.faqTitle}
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
              {t.ctaSectionEyebrow}
            </span>
            <h2 className="mt-5 font-serif text-3xl text-background md:text-4xl">
              {t.ctaSectionTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-background/70">{t.ctaSectionText}</p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button asChild className="rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90">
              <LocalizedLink to="/leistungen">
                {t.ctaSectionButton}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
