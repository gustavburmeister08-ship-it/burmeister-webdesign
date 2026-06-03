import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { CtaRow } from "@/components/site/CtaRow";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Websites ab 500 € | Burmeister Webdesign Leipzig" },
      { name: "description", content: "Webdesign-Preise aus Leipzig: Websites ab 500 €. Keine starren Pakete, transparente Kalkulation, individuelles Angebot nach kostenlosem Erstgespräch." },
      { property: "og:title", content: "Webdesign-Preise Leipzig – Website ab 500 €" },
      { property: "og:description", content: "Transparente Webdesign-Preise aus Leipzig: ab 500 €, individuelles Angebot nach kostenlosem Erstgespräch." },
      { property: "og:url", content: "https://burmeister-webdesign.de/preise" },
      { property: "og:image", content: "https://burmeister-webdesign.de/images/gb-webdesign-arbeitsfoto.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.de/preise" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://burmeister-webdesign.de/" },
            { "@type": "ListItem", position: 2, name: "Preise", item: "https://burmeister-webdesign.de/preise" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Was kostet eine einfache Website in Leipzig?",
              acceptedAnswer: { "@type": "Answer", text: "Eine einseitige Website (One-Pager) startet bei 500 €, inklusive Design, Texten und mobiler Optimierung." },
            },
            {
              "@type": "Question",
              name: "Was kostet ein Website-Relaunch?",
              acceptedAnswer: { "@type": "Answer", text: "Ein Website-Relaunch beginnt bei 1.500 €. Der Preis hängt vom Umfang der bestehenden Website und den gewünschten Änderungen ab." },
            },
            {
              "@type": "Question",
              name: "Gibt es monatliche Folgekosten?",
              acceptedAnswer: { "@type": "Answer", text: "Hosting und Wartung sind optional und starten bei 30 €/Monat – inklusive Backups, Updates und kleiner Änderungen." },
            },
            {
              "@type": "Question",
              name: "Wann muss ich bezahlen?",
              acceptedAnswer: { "@type": "Answer", text: "Nach dem kostenlosen Erstgespräch erhalten Sie ein schriftliches Angebot. Erst nach Ihrer Zusage beginnen wir – keine Vorleistung." },
            },
            {
              "@type": "Question",
              name: "Gibt es versteckte Kosten?",
              acceptedAnswer: { "@type": "Answer", text: "Nein. Das Angebot ist ein Festpreis. Eventuelle Zusatzleistungen werden vorab besprochen und schriftlich vereinbart." },
            },
          ],
        }),
      },
    ],
  }),
  component: PreisePage,
});

const ROWS: { title: string; price: string; inkl: string[] }[] = [
  {
    title: "Einseitige Website",
    price: "ab 500 €",
    inkl: [
      "Eine ausführliche Seite (One-Pager)",
      "Mobiles, modernes Design",
      "Kontaktformular & Kontaktdaten",
      "Grundlegende SEO-Einstellungen",
    ],
  },
  {
    title: "Mehrseitige Website",
    price: "ab 1.200 €",
    inkl: [
      "Mehrere Unterseiten (z. B. Leistungen, Über uns, Kontakt)",
      "Individuelles Design auf Ihre Branche zugeschnitten",
      "Texte und Bildaufbereitung inklusive",
      "Lokale SEO-Grundlagen für Leipzig",
    ],
  },
  {
    title: "Website-Relaunch",
    price: "ab 1.500 €",
    inkl: [
      "Neuaufbau einer bestehenden Website",
      "Übernahme & Verbesserung vorhandener Inhalte",
      "Modernes Design und bessere Nutzerführung",
      "Verbesserte Auffindbarkeit bei Google",
    ],
  },
  {
    title: "Hosting & Wartung",
    price: "ab 30 €/Monat",
    inkl: [
      "Schnelles, sicheres Hosting",
      "Regelmäßige Sicherungen & Updates",
      "Kleine Änderungen auf Zuruf",
      "Persönlicher Ansprechpartner",
    ],
  },
];

function PreisePage() {
  return (
    <>
      <Section className="pb-10">
        <Eyebrow>Preise</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Website-Kosten in Leipzig: Preise ab 500 €.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/75">
          Websites bei Burmeister Webdesign starten bei <strong>500 €</strong>. Der
          tatsächliche Preis hängt vom Umfang ab – Sie erhalten nach einem kurzen,
          kostenlosen Gespräch ein verständliches, schriftliches Angebot.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {ROWS.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-baseline justify-between">
                <h2 className="font-serif text-xl text-foreground">{r.title}</h2>
                <span className="font-serif text-lg text-primary">{r.price}</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-foreground/80">
                {r.inkl.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Preise sind Richtwerte zur ersten Orientierung. Endgültige Konditionen werden
          individuell vereinbart. Alle Preise zzgl. gesetzlicher Umsatzsteuer.
        </p>
      </Section>

      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-4xl">
              Sie wissen noch nicht, was Sie genau brauchen?
            </h2>
            <p className="mt-4 text-background/75">
              Genau dafür ist das kostenlose Erstgespräch da. Wir klären in 15 Minuten,
              was sinnvoll ist – und was Sie sich sparen können.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <CtaRow compact />
          </div>
        </div>
      </Section>
    </>
  );
}