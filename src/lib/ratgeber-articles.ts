export interface RatgeberArtikel {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

// Wird vom Ratgeber-Bot-Importer (scripts/import-ratgeber-article.mjs)
// automatisch um neue Einträge ergänzt. Reihenfolge: neueste zuerst.
export const RATGEBER_ARTIKEL: RatgeberArtikel[] = [
  {
    slug: "was-kostet-eine-website-fuer-mein-unternehmen",
    title: "Was kostet eine Website für mein Unternehmen wirklich?",
    excerpt: "Website erstellen lassen Kosten 2026: realistische Preisspannen, Kostenfaktoren und eine klare Entscheidungshilfe für lokale Unternehmen in Leipzig.",
    category: "Website erstellen lassen",
    image: "/images/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen/was-kostet-eine-website-fuer-mein-unternehmen-hero.webp",
    date: "2026-06-29",
    readTime: "7 Min.",
  },];
