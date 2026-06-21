import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import { FinalCta, PageIntro } from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, serviceJsonLd, socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/ablauf")({
  head: () => ({
    meta: [
      {
        title: "Ablauf - Website erstellen lassen Leipzig klar geplant",
      },
      {
        name: "description",
        content:
          "So entsteht Ihre Website: kostenloses Erstgespräch, Festpreisangebot, erste Vorschau nach 7 Tagen, Feedbackrunde, Veröffentlichung und Einweisung.",
      },
      ...socialMeta({
        title: "Website-Ablauf Leipzig - erste Vorschau nach 7 Tagen",
        description:
          "Ein klarer Prozess ohne Technikstress: Erstgespräch, Angebot, Vorschau, Feedback, Launch und Einweisung.",
        path: "/ablauf",
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-prozess.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: "https://burmeister-webdesign.com/ablauf" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/ablauf", "Ablauf")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: "Website erstellen lassen in Leipzig",
            description:
              "Klarer Website-Prozess vom kostenlosen Erstgespräch bis zur Veröffentlichung inklusive Einweisung.",
            path: "/ablauf",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "So entsteht Ihre Website in Leipzig",
          description:
            "Von Erstgespräch bis Launch: Website-Erstellung mit Festpreis, erster Vorschau nach 7 Tagen und Einweisung.",
          step: STEPS.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.text,
          })),
        }),
      },
    ],
  }),
  component: AblaufPage,
});

const STEPS = [
  {
    n: "01",
    title: "Kostenloses Erstgespräch",
    text: "Sie erzählen kurz, was Sie brauchen. Ich sage ehrlich, ob und wie ich helfen kann.",
    detail: "15 Minuten · keine Verpflichtung",
  },
  {
    n: "02",
    title: "Festpreisangebot",
    text: "Sie erhalten ein schriftliches Angebot mit klarem Umfang und Preis.",
    detail: "Keine Stundenabrechnung",
  },
  {
    n: "03",
    title: "Struktur, Texte und erste Vorschau",
    text: "Ich erarbeite Struktur, Texte und Design. Nach 7 Tagen sehen Sie eine erste private Vorschau.",
    detail: "Erste Vorschau nach 7 Tagen",
  },
  {
    n: "04",
    title: "Feedbackrunde",
    text: "Sie geben Feedback, ich arbeite die vereinbarten Anpassungen ein.",
    detail: "Eine Feedbackrunde inklusive",
  },
  {
    n: "05",
    title: "Veröffentlichung und Einweisung",
    text: "Die Website geht live. Sie erhalten eine Einweisung und wissen, wie alles funktioniert.",
    detail: "Launch und Einweisung inklusive",
  },
] as const;

function AblaufPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ablauf"
        title="Ein klarer Prozess, der Ihnen Arbeit abnimmt."
        text="Keine langen Abstimmungen, keine Fachsprache, keine unklaren Kosten. Sie wissen jederzeit, was passiert und was als Nächstes kommt."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Erste Vorschau nach 7 Tagen",
            "Antwort innerhalb von 24 Stunden",
            "Festpreis nach Erstgespräch",
          ].map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="border-border bg-card text-foreground/70"
            >
              {item}
            </Badge>
          ))}
        </div>
      </PageIntro>

      <Section className="pt-0">
        <ol className="space-y-4">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 rounded-xl border border-border bg-card p-6 md:grid-cols-12 md:items-start"
            >
              <div className="md:col-span-2">
                <p className="font-serif text-4xl leading-none text-primary">
                  {step.n}
                </p>
              </div>
              <div className="md:col-span-7">
                <h2 className="font-serif text-2xl text-foreground">
                  {step.title}
                </h2>
                <p className="mt-2 leading-relaxed text-foreground/70">
                  {step.text}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <Badge
                  variant="outline"
                  className="border-primary/20 bg-secondary text-primary"
                >
                  {step.detail}
                </Badge>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>Zeitplan</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Realistische Zeiträume statt vager Versprechen.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["One-Pager", "typischerweise 1 Woche"],
            ["Mehrseitige Website", "typischerweise 2-4 Wochen"],
            ["Rückmeldung", "innerhalb von 24 Stunden"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Ihre Aufgabe</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Sie müssen keine Website planen.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Ich brauche keine fertigen Texte und keine perfekten Vorgaben.
              Wichtig sind nur die Informationen, die Ihr Unternehmen ausmachen.
            </p>
          </div>
          <div className="grid gap-3 md:col-span-7">
            {[
              "Sie erzählen mir, was Sie anbieten.",
              "Sie schicken vorhandene Bilder, falls es welche gibt.",
              "Sie prüfen die private Vorschau.",
              "Sie geben Feedback und später die Freigabe.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/75"
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-primary"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Was ich übernehme</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Struktur, Texte, Design, Technik und Launch.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Das Ziel ist nicht, dass Sie Webdesign lernen. Das Ziel ist, dass
              Ihre Website professionell online geht und Sie wissen, wie es
              danach weitergeht.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <Button
              asChild
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/kontakt">
                Schritt 1 starten
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Bereit für Schritt 1?"
        text="Das Erstgespräch kostet nichts. Sie bekommen eine ehrliche Einschätzung und wissen danach, ob und wie wir Ihr Projekt angehen."
      />
    </>
  );
}
