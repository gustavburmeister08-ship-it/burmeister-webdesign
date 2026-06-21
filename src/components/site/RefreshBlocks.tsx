import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Eyebrow } from "@/components/site/Section";

export const TRUST_METRICS = [
  { value: "7 Tage", label: "bis zur ersten Vorschau" },
  { value: "15", label: "Websites umgesetzt" },
  { value: "30", label: "lokale Unternehmen unterstützt" },
  { value: "95+", label: "Lighthouse Performance als Ziel" },
] as const;

export const CORE_TRUST_POINTS = [
  "Festpreis nach Erstgespräch",
  "Antwort innerhalb von 24 Stunden",
  "Direkter Kontakt mit Gustav",
  "Keine versteckten Kosten",
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export function TrustMetricGrid({
  items = TRUST_METRICS,
  className = "",
}: {
  items?: readonly { value: string; label: string }[];
  className?: string;
}) {
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
  items = CORE_TRUST_POINTS,
  className = "",
}: {
  items?: readonly string[];
  className?: string;
}) {
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
    <Accordion
      type="single"
      collapsible
      className="rounded-xl border border-border bg-card px-5"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`}>
          <AccordionTrigger className="py-5 text-left text-base text-foreground hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-foreground/70">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FinalCta({
  eyebrow = "Kostenloses Erstgespräch",
  title = "Lassen Sie uns kurz prüfen, was für Ihre Website sinnvoll ist.",
  text = "Sie schildern mir Ihr Vorhaben. Ich sage Ihnen ehrlich, was passt, was es ungefähr kostet und wie schnell es realistisch geht.",
  button = "Erstgespräch anfragen",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  button?: string;
}) {
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
            {[
              "Antwort innerhalb von 24 Stunden",
              "Festpreis nach Erstgespräch",
              "Keine Verpflichtung",
            ].map((item) => (
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
            <Link to="/kontakt">
              {button}
              <ArrowRight size={15} />
            </Link>
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
