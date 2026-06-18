import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Website-Kosten | Gustav Burmeister Webdesign Leipzig" },
      { name: "description", content: "Webdesign-Preise aus Leipzig: Websites ab 790 €. Keine starren Pakete, transparente Kalkulation, individuelles Angebot nach kostenlosem Erstgespräch." },
      { property: "og:title", content: "Webdesign-Preise Leipzig – Website ab 790 €" },
      { property: "og:description", content: "Transparente Webdesign-Preise aus Leipzig: ab 790 €, individuelles Angebot nach kostenlosem Erstgespräch." },
      { property: "og:url", content: "https://burmeister-webdesign.com/preise" },
      { property: "og:image", content: "https://burmeister-webdesign.com/images/gb-webdesign-arbeitsfoto.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/preise" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://burmeister-webdesign.com/" },
            { "@type": "ListItem", position: 2, name: "Preise", item: "https://burmeister-webdesign.com/preise" },
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
              acceptedAnswer: { "@type": "Answer", text: "Eine einseitige Website (One-Pager) startet bei 790 €, inklusive Design, Texten und mobiler Optimierung." },
            },
            {
              "@type": "Question",
              name: "Was kostet ein Website-Relaunch?",
              acceptedAnswer: { "@type": "Answer", text: "Ein Website-Relaunch beginnt bei 1.590 €. Der Preis hängt vom Umfang der bestehenden Website und den gewünschten Änderungen ab." },
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

const PAKETE = [
  {
    title: "Einseitige Website",
    subtitle: "One-Pager",
    price: "790",
    popular: false,
    inkl: [
      "Eine ausführliche Seite (One-Pager)",
      "Mobiles, modernes Design",
      "Kontaktformular & Kontaktdaten",
      "SEO-Grundeinstellungen",
    ],
  },
  {
    title: "Mehrseitige Website",
    subtitle: "Am häufigsten gewählt",
    price: "1.390",
    popular: true,
    inkl: [
      "Mehrere Unterseiten (Leistungen, Über uns, Kontakt …)",
      "Individuelles Design für Ihre Branche",
      "Texte und Bildaufbereitung inklusive",
      "Lokale SEO-Grundlagen für Leipzig",
    ],
  },
  {
    title: "Website-Relaunch",
    subtitle: "Neuaufbau Ihrer alten Website",
    price: "1.590",
    popular: false,
    inkl: [
      "Neuaufbau einer bestehenden Website",
      "Übernahme & Verbesserung vorhandener Inhalte",
      "Modernes Design und bessere Nutzerführung",
      "Verbesserte Auffindbarkeit bei Google",
    ],
  },
] as const;

function PreisePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <Section className="pb-12">
        <Eyebrow>Preise</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Faire Preise. Keine Überraschungen.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
          Websites starten bei <strong className="text-foreground">790 €</strong>. Der genaue Preis hängt vom Umfang ab –
          nach einem kurzen, kostenlosen Gespräch erhalten Sie ein klares, schriftliches Angebot.
        </p>
      </Section>

      {/* ── PAKETE ──────────────────────────── */}
      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {PAKETE.map((p) => (
            <div
              key={p.title}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.popular
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_20px_60px_-20px_oklch(0.44_0.084_170/0.4)]"
                  : "border-border bg-card text-foreground"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand-gold)] px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground">
                  Beliebt
                </span>
              )}
              <p className={`text-xs font-semibold uppercase tracking-wider ${p.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {p.subtitle}
              </p>
              <h2 className="mt-3 font-serif text-2xl">{p.title}</h2>
              <p className={`mt-4 font-serif text-4xl ${p.popular ? "text-primary-foreground" : "text-foreground"}`}>
                {p.price} <span className="text-xl">€</span>
              </p>
              <p className={`mt-1 text-xs ${p.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>ab · Festpreisangebot</p>

              <ul className={`mt-7 flex-1 space-y-3 text-sm ${p.popular ? "text-primary-foreground/85" : "text-foreground/75"}`}>
                {p.inkl.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className={`mt-0.5 shrink-0 ${p.popular ? "text-primary-foreground" : "text-primary"}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/kontakt"
                className={`mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  p.popular
                    ? "bg-background text-foreground hover:shadow-md"
                    : "border border-border bg-secondary text-foreground hover:border-foreground/25 hover:bg-secondary/80"
                }`}
              >
                Anfragen <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Hosting Add-on */}
        <div className="mt-5 rounded-2xl border border-border bg-card p-7 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Optionaler Zusatz</p>
            <h2 className="mt-2 font-serif text-xl text-foreground">Hosting & Wartung</h2>
            <p className="mt-2 text-sm text-foreground/65">
              Schnelles Hosting, tägliche Backups, regelmäßige Updates und kleine
              Änderungen auf Zuruf – alles aus einer Hand.
            </p>
          </div>
          <div className="mt-5 shrink-0 md:mt-0 md:text-right">
            <p className="font-serif text-3xl text-foreground">30 <span className="text-xl">€/Monat</span></p>
            <ul className="mt-2 space-y-1 text-sm text-foreground/60 md:text-right">
              {["Tägliche Sicherungen", "Regelmäßige Updates", "Kleinen Änderungen inklusive", "Persönlicher Ansprechpartner"].map((i) => (
                <li key={i} className="flex items-center gap-1.5 md:justify-end">
                  <Check size={12} className="text-primary" />{i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Alle Preise sind Richtwerte zur ersten Orientierung. Das finale Angebot wird nach dem Erstgespräch schriftlich vereinbart.
          Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
        </p>
      </Section>

      {/* ── VERTRAUEN ───────────────────────── */}
      <Section className="bg-secondary/40">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Kein Stundensatz", d: "Sie zahlen einen Festpreis, der vorab schriftlich vereinbart wird. Keine Überraschungen." },
            { t: "Erst zusagen, dann zahlen", d: "Sie entscheiden nach dem kostenlosen Erstgespräch. Keine Vorleistung, kein Risiko." },
            { t: "Was nicht sinnvoll ist, empfehle ich nicht", d: "Ich empfehle nur, was Ihrem Unternehmen wirklich nützt – nicht was mehr kostet." },
          ].map(({ t, d }) => (
            <div key={t} className="rounded-xl bg-card border border-border p-6">
              <h3 className="font-serif text-lg text-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────── */}
      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl text-background md:text-4xl">
              Sie wissen noch nicht, was Sie genau brauchen?
            </h2>
            <p className="mt-4 text-background/70">
              Genau dafür ist das kostenlose Erstgespräch da. Wir klären in 15 Minuten,
              was sinnvoll ist – und was Sie sich sparen können.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/kontakt"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Kostenloses Erstgespräch <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
