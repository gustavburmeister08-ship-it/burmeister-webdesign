import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/ablauf")({
  head: () => ({
    meta: [
      { title: "Website erstellen lassen Leipzig – Ablauf in 5 Schritten | Gustav Burmeister Webdesign" },
      { name: "description", content: "So entsteht Ihre Website in Leipzig: Erstgespräch, Angebot, Design-Entwurf, Umsetzung und Veröffentlichung – in fünf klaren Schritten, transparent und schnell." },
      { property: "og:title", content: "Website-Ablauf in 5 Schritten – Gustav Burmeister Webdesign Leipzig" },
      { property: "og:description", content: "In fünf klaren Schritten zur fertigen Website – transparent, schnell, persönlich betreut." },
      { property: "og:url", content: "https://burmeister-webdesign.com/ablauf" },
      { property: "og:image", content: "https://burmeister-webdesign.com/images/gb-webdesign-prozess.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/ablauf" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://burmeister-webdesign.com/" },
            { "@type": "ListItem", position: 2, name: "Ablauf", item: "https://burmeister-webdesign.com/ablauf" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "So entsteht Ihre Website – in fünf einfachen Schritten",
          description: "Von der ersten Idee bis zur fertigen Website: Gustav Burmeister Webdesign Leipzig begleitet Sie in fünf klaren Schritten.",
          step: [
            { "@type": "HowToStep", position: 1, name: "Kostenloses Erstgespräch", text: "Telefonisch, per WhatsApp oder vor Ort in Leipzig. Wir klären, was Sie brauchen und was sinnvoll ist." },
            { "@type": "HowToStep", position: 2, name: "Festes Angebot", text: "Sie erhalten ein verständliches Angebot mit klarem Preis – keine Stundenfallen, keine Überraschungen." },
            { "@type": "HowToStep", position: 3, name: "Inhalte & Entwurf", text: "Ich übernehme Texte, Bildaufbereitung und Struktur. Sie sehen früh einen ersten Designentwurf." },
            { "@type": "HowToStep", position: 4, name: "Umsetzung", text: "Schnelle, saubere technische Umsetzung. Anpassungen werden direkt eingearbeitet – ohne komplizierte Ticket-Systeme." },
            { "@type": "HowToStep", position: 5, name: "Veröffentlichung & Betreuung", text: "Ihre Website geht live. Auf Wunsch übernehme ich Hosting, Wartung und kleine Änderungen." },
          ],
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
    text: "Telefonisch, per WhatsApp oder vor Ort in Leipzig. Sie schildern Ihre Situation, ich sage Ihnen ehrlich, ob und wie ich helfen kann.",
    detail: "Keine Verpflichtung, kein Verkaufsgespräch.",
  },
  {
    n: "02",
    title: "Festes Angebot",
    text: "Sie erhalten ein verständliches, schriftliches Angebot mit klarem Preis. Erst dann entscheiden Sie.",
    detail: "Festpreis ohne Stundenfallen.",
  },
  {
    n: "03",
    title: "Inhalte & Entwurf",
    text: "Ich übernehme Texte, Bildaufbereitung und Struktur. Sie sehen früh einen ersten Designentwurf und können Feedback geben.",
    detail: "Sie liefern Infos – ich schreibe die Texte.",
  },
  {
    n: "04",
    title: "Umsetzung",
    text: "Schnelle, saubere technische Umsetzung. Anpassungen werden direkt eingearbeitet – ohne komplizierte Ticket-Systeme.",
    detail: "Direkter Draht, kein Call-Center.",
  },
  {
    n: "05",
    title: "Veröffentlichung & Betreuung",
    text: "Ihre Website geht live. Ich erkläre Ihnen alles Wichtige und begleite Sie bei Bedarf weiter.",
    detail: "Auf Wunsch: Hosting, Wartung und laufende Pflege.",
  },
];

function AblaufPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <Section className="pb-12">
        <Eyebrow>Ablauf</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          In fünf einfachen Schritten zur fertigen Website.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
          Klar strukturiert, ohne unnötige Meetings, ohne Wartezeiten.
          Sie wissen jederzeit, wo Ihr Projekt steht.
        </p>
      </Section>

      {/* ── PROZESS-BILD ───────────────────── */}
      <Section className="pt-0 pb-0">
        <img
          src="/images/gb-webdesign-prozess.webp"
          alt="Fünf-Schritte-Ablauf: Erstgespräch, Angebot, Umsetzung, Veröffentlichung, Wartung – Infografik"
          width={1200}
          height={400}
          loading="lazy"
          className="w-full rounded-2xl border border-border bg-card object-contain p-4"
        />
      </Section>

      {/* ── SCHRITTE ───────────────────────── */}
      <Section>
        <ol className="relative space-y-0">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative grid md:grid-cols-12">
              {/* Timeline line */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-[26px] top-14 hidden h-[calc(100%-3.5rem)] w-px bg-border md:block" />
              )}

              {/* Number col */}
              <div className="mb-4 flex items-center gap-4 md:col-span-2 md:mb-0 md:block">
                <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 border-border bg-card">
                  <span className="font-serif text-lg leading-none text-[var(--brand-gold)]">{s.n}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pb-12 md:col-span-10 md:pb-14 md:pt-3">
                <div className="rounded-2xl border border-border bg-card p-7">
                  <h2 className="font-serif text-xl text-foreground">{s.title}</h2>
                  <p className="mt-2 leading-relaxed text-foreground/70">{s.text}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <span className="h-px w-4 bg-[var(--brand-gold)]" />
                    {s.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── ZEITRAHMEN ─────────────────────── */}
      <Section className="bg-secondary/40">
        <Eyebrow>Zeitplan</Eyebrow>
        <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
          Wie lange dauert es?
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { t: "One-Pager", d: "Ca. 2–3 Wochen – von der Freigabe bis zur Veröffentlichung." },
            { t: "Mehrseitige Website", d: "Ca. 4–6 Wochen – abhängig von Umfang und Ihren Feedbackzeiten." },
            { t: "Website-Relaunch", d: "Ca. 4–8 Wochen – je nach Umfang der bestehenden Seite." },
          ].map(({ t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg text-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Richtwerte. Der Zeitplan hängt maßgeblich davon ab, wie schnell Feedback und Freigaben kommen.
        </p>
      </Section>

      {/* ── CTA ─────────────────────────────── */}
      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl text-background md:text-4xl">
              Bereit für Schritt&nbsp;1?
            </h2>
            <p className="mt-4 text-background/70">
              Das Erstgespräch kostet nichts und dauert 15 Minuten. Ich melde mich
              innerhalb eines Werktages – oft noch am selben Tag.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/kontakt"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Erstgespräch anfragen <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
