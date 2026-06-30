import { Section, Eyebrow } from "@/components/site/Section";
import { RatgeberCard } from "@/components/site/RatgeberCard";
import { RATGEBER_ARTIKEL } from "@/lib/ratgeber-articles";

export function WeitereArtikel({ currentSlug }: { currentSlug: string }) {
  const others = RATGEBER_ARTIKEL.filter((a) => a.slug !== currentSlug).slice(0, 3);
  if (others.length === 0) return null;

  return (
    <Section className="bg-secondary/45">
      <Eyebrow>Weitere Artikel</Eyebrow>
      <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
        Mehr aus dem Ratgeber.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((article) => (
          <RatgeberCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
}
