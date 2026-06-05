import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { CtaRow } from "@/components/site/CtaRow";

export const Route = createFileRoute("/ablauf")({
  head: () => ({
    meta: [
      { title: "Website erstellen lassen – Ablauf | Burmeister Leipzig" },
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
            { "@type": "HowToStep", position: 4, name: "Umsetzung", text: "Schnelle, saubere Umsetzung. Anpassungen werden direkt eingearbeitet – ohne komplizierte Ticket-Systeme." },
            { "@type": "HowToStep", position: 5, name: "Veröffentlichung & Betreuung", text: "Ihre Website geht live. Auf Wunsch übernehme ich Hosting, Wartung und kleine Änderungen." },
          ],
        }),
      },
    ],
  }),
  component: AblaufPage,
});

const STEPS = [
  { n: "01", title: "Kostenloses Erstgespräch", text: "Telefonisch, per WhatsApp oder vor Ort in Leipzig. Sie schildern Ihre Situation, ich sage Ihnen ehrlich, ob und wie ich helfen kann." },
  { n: "02", title: "Festes Angebot", text: "Sie erhalten ein verständliches, schriftliches Angebot mit klarem Preis. Erst dann entscheiden Sie." },
  { n: "03", title: "Inhalte & Entwurf", text: "Ich übernehme Texte, Bildaufbereitung und Struktur. Sie sehen früh einen ersten Designentwurf und können Feedback geben." },
  { n: "04", title: "Umsetzung", text: "Schnelle, saubere technische Umsetzung. Anpassungen werden direkt eingearbeitet – ohne komplizierte Ticket-Systeme." },
  { n: "05", title: "Veröffentlichung & Betreuung", text: "Ihre Website geht live. Auf Wunsch übernehme ich Hosting, Wartung und kleine Änderungen – damit Ihre Website auch in zwei Jahren noch aktuell ist." },
];

function AblaufPage() {
  return (
    <>
      <Section className="pb-10">
        <Eyebrow>Ablauf</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          So entsteht Ihre Website – in fünf einfachen Schritten.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/75">
          Klar strukturiert, ohne unnötige Meetings, ohne Wartezeiten. Sie wissen jederzeit, wo Ihr Projekt steht.
        </p>
      </Section>

      <Section className="pt-0">
        <img
          src="/images/gb-webdesign-prozess.webp"
          alt="Fünf-Schritte-Ablauf: Erstgespräch, Angebot, Umsetzung, Veröffentlichung, Wartung – Infografik"
          width={1200}
          height={400}
          loading="lazy"
          className="mb-10 w-full rounded-2xl border border-border object-contain bg-card p-4"
        />
        <ol className="space-y-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="grid items-start gap-6 rounded-2xl border border-border bg-card p-7 md:grid-cols-12"
            >
              <div className="md:col-span-2">
                <span className="font-serif text-3xl text-[var(--brand-gold)]">{s.n}</span>
              </div>
              <div className="md:col-span-10">
                <h2 className="font-serif text-xl text-foreground">{s.title}</h2>
                <p className="mt-2 text-foreground/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-secondary/60">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          Bereit für den ersten Schritt?
        </h2>
        <CtaRow />
      </Section>
    </>
  );
}