import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich – Gustav Burmeister | Webdesigner Leipzig" },
      { name: "description", content: "Gustav Burmeister – freiberuflicher Webdesigner aus Leipzig. Persönlich, fair und direkt: Websites für kleine Unternehmen ab 790 €. Lernen Sie mich kennen." },
      { property: "og:title", content: "Gustav Burmeister – Webdesigner aus Leipzig" },
      { property: "og:description", content: "Freiberuflicher Webdesigner aus Leipzig. Persönlich erreichbar, faire Preise, Websites ab 790 €." },
      { property: "og:url", content: "https://burmeister-webdesign.com/ueber-mich" },
      { property: "og:image", content: "https://burmeister-webdesign.com/images/gb-webdesign-arbeitsfoto.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/ueber-mich" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://burmeister-webdesign.com/" },
            { "@type": "ListItem", position: 2, name: "Über mich", item: "https://burmeister-webdesign.com/ueber-mich" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://burmeister-webdesign.com/#person",
          name: "Gustav Burmeister",
          jobTitle: "Webdesigner",
          description: "Freiberuflicher Webdesigner aus Leipzig, spezialisiert auf moderne, bezahlbare Websites für kleine lokale Unternehmen.",
          url: "https://burmeister-webdesign.com/ueber-mich",
          image: "https://burmeister-webdesign.com/images/gb-webdesign-arbeitsfoto.webp",
          email: "gustav.burmeister08@gmail.com",
          telephone: "+493418605648",
          worksFor: {
            "@type": "Organization",
            "@id": "https://burmeister-webdesign.com/#business",
            name: "Gustav Burmeister Webdesign Leipzig",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Leipzig",
            addressRegion: "Sachsen",
            addressCountry: "DE",
          },
          knowsAbout: ["Webdesign", "SEO", "Website-Relaunch", "Landingpages", "Google Business Profil"],
        }),
      },
    ],
  }),
  component: UeberMichPage,
});

function UeberMichPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <Section className="pb-12">
        <Eyebrow>Über mich</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Persönlich, direkt, aus Leipzig.
        </h1>
      </Section>

      {/* ── HAUPTTEIL ──────────────────────── */}
      <Section className="pt-0">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-secondary" />
              <img
                src="/images/gb-webdesign-arbeitsfoto.webp"
                alt="Gustav Burmeister – Webdesigner aus Leipzig an der Arbeit"
                width={800}
                height={1000}
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Standort", "Leipzig & Umgebung"],
                ["Ansprache", "Direkt mit mir"],
                ["Erreichbar per", "Telefon, WhatsApp, E-Mail"],
                ["Fokus", "Kleine lokale Betriebe"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="mt-1.5 text-sm font-medium text-foreground">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/75 md:col-span-7">
            <h2 className="font-serif text-3xl text-foreground">
              Ich mache Websites für Betriebe, die keine Agentur brauchen –{" "}
              <em className="italic text-primary">aber eine vernünftige Website schon.</em>
            </h2>

            <p>
              Mein Name ist <strong className="text-foreground">Gustav Burmeister</strong>.
              Ich bin freiberuflicher Webdesigner aus Leipzig und arbeite mit kleinen
              Unternehmen aus der Region zusammen – Handwerksbetrieben, Restaurants,
              lokalen Dienstleistern und Selbstständigen.
            </p>
            <p>
              Viele Firmen, die zu mir kommen, haben entweder gar keine Website,
              eine veraltete – oder sie haben schlechte Erfahrungen mit Agenturen
              gemacht: zu teuer, zu langsam, zu unpersönlich. Das mache ich anders.
            </p>
            <p>
              Ich biete genau das, was Sie wirklich benötigen – persönlich betreut,
              klar erklärt, zu fairen Preisen. Kein Call-Center, kein Ticket-System.
              Sie sprechen direkt mit mir.
            </p>
            <p>
              Wo es sinnvoll ist, nutze ich moderne Werkzeuge – auch KI – um Texte,
              Bilder und Abläufe effizienter zu gestalten. Das Ergebnis bleibt
              handgemacht und auf Sie zugeschnitten – nur bezahlbarer.
            </p>
          </div>
        </div>
      </Section>

      {/* ── WERTE ───────────────────────────── */}
      <Section className="bg-secondary/40">
        <Eyebrow>Meine Arbeitsweise</Eyebrow>
        <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
          Was mich von einer Agentur unterscheidet.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Persönlicher Kontakt", d: "Sie sprechen immer direkt mit mir – nicht mit Projektmanagern, die Ihre Wünsche weiterleiten." },
            { t: "Feste Preise", d: "Kein Stundensatz. Kein Overrun. Das Angebot ist der Preis – schriftlich vereinbart, bevor wir starten." },
            { t: "Ehrliche Beratung", d: "Ich empfehle nur, was wirklich sinnvoll ist. Was nicht hilft, sage ich Ihnen – auch wenn ich damit nichts verdiene." },
            { t: "Texte inklusive", d: "Sie müssen keine Texte schreiben. Ich formuliere für Sie – klar, verständlich und auf Ihre Kunden zugeschnitten." },
            { t: "Schnelle Umsetzung", d: "Kein halbes Jahr Entwicklungszeit. Einfache Projekte sind oft in 2–3 Wochen live." },
            { t: "Lokal verwurzelt", d: "Ich kenne Leipzig, die Branchen hier und was Kunden in der Region wirklich suchen." },
          ].map(({ t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
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
              Ihr Webdesigner in Leipzig – persönlich erreichbar
            </h2>
            <p className="mt-4 text-background/70">
              Kostenloses Erstgespräch – 15 Minuten, kein Verkaufsdruck.
              Einfach kurz schreiben, was Sie vorhaben.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/kontakt"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Kontakt aufnehmen <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
