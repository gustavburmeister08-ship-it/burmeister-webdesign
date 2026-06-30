import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { RatgeberArtikel } from "@/lib/ratgeber-articles";

// Jeder Ratgeber-Artikel ist eine eigene, vom Importer generierte
// Dateiroute (kein $slug-Parameter) - daher hier ein normaler Link mit
// dynamischem href statt des typisierten TanStack <Link>, dessen "to"-Prop
// nur gegen die zur Build-Zeit bekannten literalen Routen typprüfen kann.
export function RatgeberCard({ article }: { article: RatgeberArtikel }) {
  return (
    <a
      href={`/ratgeber/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <img
        src={article.image}
        alt={article.title}
        width={900}
        height={500}
        loading="lazy"
        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="outline" className="w-fit border-border text-foreground/70">
          {article.category}
        </Badge>
        <h3 className="mt-4 font-serif text-xl text-foreground">{article.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/65">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock size={13} /> {article.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
            Lesen <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
