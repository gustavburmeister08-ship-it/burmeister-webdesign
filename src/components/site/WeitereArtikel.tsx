import { Section, Eyebrow } from "@/components/site/Section";
import { RatgeberCard } from "@/components/site/RatgeberCard";
import { RATGEBER_ARTIKEL } from "@/lib/ratgeber-articles";
import { useLocale } from "@/lib/i18n/locale";

const COPY = {
  de: { eyebrow: "Weitere Artikel", title: "Mehr aus dem Ratgeber." },
  en: { eyebrow: "More Articles", title: "More from the guides." },
} as const;

export function WeitereArtikel({ currentSlug }: { currentSlug: string }) {
  const locale = useLocale();
  const t = COPY[locale];
  const others = RATGEBER_ARTIKEL.filter((a) => a.slug !== currentSlug).slice(0, 3);
  if (others.length === 0) return null;

  return (
    <Section className="bg-secondary/45">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
        {t.title}
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((article) => (
          <RatgeberCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
}
