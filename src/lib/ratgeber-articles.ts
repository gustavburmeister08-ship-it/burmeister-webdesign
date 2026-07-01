export interface RatgeberArtikel {
  slug: string;
  title: { de: string; en: string };
  excerpt: { de: string; en: string };
  category: { de: string; en: string };
  image: string;
  date: string;
  readTime: { de: string; en: string };
}

// Wird vom Ratgeber-Bot-Importer (scripts/import-ratgeber-article.mjs)
// automatisch um neue Einträge ergänzt. Reihenfolge: neueste zuerst.
// Der Importer erzeugt zunächst nur die deutschen Felder; die englischen
// Felder (en) müssen danach manuell nachgepflegt werden.
export const RATGEBER_ARTIKEL: RatgeberArtikel[] = [
  {
    slug: "website-fuer-handwerksbetrieb-erstellen-lassen",
    title: { de: "Website für Handwerksbetrieb erstellen lassen: Das brauchen Sie vorher", en: "Website für Handwerksbetrieb erstellen lassen: Das brauchen Sie vorher" }, // TODO: ins Englische übersetzen
    excerpt: { de: "Website für Handwerksbetrieb erstellen lassen: Was Sie vorher brauchen, was eine gute Handwerker-Website kostet und welche Fehler Betriebe in Leipzig ...", en: "Website für Handwerksbetrieb erstellen lassen: Was Sie vorher brauchen, was eine gute Handwerker-Website kostet und welche Fehler Betriebe in Leipzig ..." }, // TODO: ins Englische übersetzen
    category: { de: "Website erstellen lassen", en: "Website erstellen lassen" }, // TODO: ins Englische übersetzen
    image: "/images/ratgeber/website-fuer-handwerksbetrieb-erstellen-lassen/website-fuer-handwerksbetrieb-erstellen-lassen-hero.webp",
    date: "2026-07-01",
    readTime: { de: "8 Min.", en: "8 Min." }, // TODO: ins Englische übersetzen
  },
  {
    slug: "website-relaunch-kosten-leipzig",
    title: {
      de: "Website-Relaunch Kosten: Womit realistisch rechnen?",
      en: "Website Relaunch Costs: What to Realistically Budget For",
    },
    excerpt: {
      de: "Website-Relaunch Kosten für Leipziger Unternehmen: reale Preise ab 1.590 EUR, die wichtigsten Kostenfaktoren und wie Sie typische Rankingverluste...",
      en: "Website relaunch costs for Leipzig businesses: real prices from €1,590, the key cost factors and how to avoid typical ranking losses...",
    },
    category: { de: "Website-Relaunch", en: "Website Relaunch" },
    image:
      "/images/ratgeber/website-relaunch-kosten-leipzig/website-relaunch-kosten-leipzig-hero.webp",
    date: "2026-07-01",
    readTime: { de: "8 Min.", en: "8 min" },
  },
  {
    slug: "was-kostet-eine-website-fuer-mein-unternehmen",
    title: {
      de: "Was kostet eine Website für mein Unternehmen wirklich?",
      en: "What Does a Website for My Business Really Cost?",
    },
    excerpt: {
      de: "Website erstellen lassen Kosten 2026: realistische Preisspannen, Kostenfaktoren und eine klare Entscheidungshilfe für lokale Unternehmen in Leipzig.",
      en: "Website costs 2026: realistic price ranges, cost factors and clear decision-making help for local businesses in Leipzig.",
    },
    category: { de: "Website erstellen lassen", en: "Building a Website" },
    image:
      "/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-hero.webp",
    date: "2026-06-29",
    readTime: { de: "7 Min.", en: "7 min" },
  },
];
