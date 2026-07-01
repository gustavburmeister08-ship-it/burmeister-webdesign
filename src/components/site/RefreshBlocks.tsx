import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { useLocale, type Locale } from "@/lib/i18n/locale";

export const TRUST_METRICS: Record<
  Locale,
  readonly { value: string; label: string }[]
> = {
  de: [
    { value: "7 Tage", label: "bis zur ersten Vorschau" },
    { value: "15", label: "Websites umgesetzt" },
    { value: "30", label: "lokale Unternehmen unterstützt" },
    { value: "95+", label: "Lighthouse Performance als Ziel" },
  ],
  en: [
    { value: "7 days", label: "until the first preview" },
    { value: "15", label: "websites delivered" },
    { value: "30", label: "local businesses supported" },
    { value: "95+", label: "Lighthouse performance target" },
  ],
} as const;

export const CORE_TRUST_POINTS: Record<Locale, readonly string[]> = {
  de: [
    "Festpreis nach Erstgespräch",
    "Antwort innerhalb von 24 Stunden",
    "Direkter Kontakt mit Gustav",
    "Keine versteckten Kosten",
  ],
  en: [
    "Fixed price after the initial consultation",
    "Reply within 24 hours",
    "Direct contact with Gustav",
    "No hidden costs",
  ],
} as const;

const FINAL_CTA_DEFAULTS: Record<
  Locale,
  { eyebrow: string; title: string; text: string; button: string; badges: readonly string[] }
> = {
  de: {
    eyebrow: "Kostenloses Erstgespräch",
    title: "Lassen Sie uns kurz prüfen, was für Ihre Website sinnvoll ist.",
    text: "Sie schildern mir Ihr Vorhaben. Ich sage Ihnen ehrlich, was passt, was es ungefähr kostet und wie schnell es realistisch geht.",
    button: "Erstgespräch anfragen",
    badges: [
      "Antwort innerhalb von 24 Stunden",
      "Festpreis nach Erstgespräch",
      "Keine Verpflichtung",
    ],
  },
  en: {
    eyebrow: "Free Consultation",
    title: "Let's quickly check what makes sense for your website.",
    text: "Tell me about your plans. I'll give you an honest answer on what fits, roughly what it costs and how quickly it can realistically happen.",
    button: "Request a consultation",
    badges: [
      "Reply within 24 hours",
      "Fixed price after the initial consultation",
      "No obligation",
    ],
  },
} as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export function TrustMetricGrid({
  items,
  className = "",
}: {
  items?: readonly { value: string; label: string }[];
  className?: string;
}) {
  const locale = useLocale();
  items ??= TRUST_METRICS[locale];
  return (
    <dl
      className={`grid overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {items.map(({ value, label }) => (
        <div
          key={label}
          className="border-b border-border px-5 py-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
        >
          <dt className="font-serif text-3xl leading-none text-foreground">
            {value}
          </dt>
          <dd className="mt-2 text-sm leading-snug text-muted-foreground">
            {label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function TrustPointList({
  items,
  className = "",
}: {
  items?: readonly string[];
  className?: string;
}) {
  const locale = useLocale();
  items ??= CORE_TRUST_POINTS[locale];
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-foreground/75"
        >
          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="rounded-xl border border-border bg-card px-5">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group border-b border-border last:border-b-0"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base text-foreground marker:hidden">
            {item.question}
            <span
              aria-hidden="true"
              className="text-xl leading-none text-muted-foreground transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="pb-5 text-sm leading-relaxed text-foreground/70">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export function FinalCta({
  eyebrow,
  title,
  text,
  button,
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  button?: string;
}) {
  const locale = useLocale();
  const defaults = FINAL_CTA_DEFAULTS[locale];
  eyebrow ??= defaults.eyebrow;
  title ??= defaults.title;
  text ??= defaults.text;
  button ??= defaults.button;

  return (
    <Section className="bg-foreground text-background">
      <div className="grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">
            <span className="h-px w-6 bg-[var(--brand-gold)]" />
            {eyebrow}
          </span>
          <h2 className="mt-5 font-serif text-3xl text-background md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-background/70">{text}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {defaults.badges.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="border-background/15 bg-background/5 text-background/70"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 md:justify-self-end">
          <Button
            asChild
            className="rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90"
          >
            <LocalizedLink to="/kontakt">
              {button}
              <ArrowRight size={15} />
            </LocalizedLink>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <Section className="pb-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
        {text}
      </p>
      {children}
    </Section>
  );
}
