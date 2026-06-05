import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { CtaRow } from "@/components/site/CtaRow";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich – Gustav Burmeister | Webdesigner Leipzig" },
      { name: "description", content: "Gustav Burmeister – freiberuflicher Webdesigner aus Leipzig. Persönlich, fair und direkt: Websites für kleine Unternehmen ab 1.000 €. Lernen Sie mich kennen." },
      { property: "og:title", content: "Gustav Burmeister – Webdesigner aus Leipzig" },
      { property: "og:description", content: "Freiberuflicher Webdesigner aus Leipzig. Persönlich erreichbar, faire Preise, Websites ab 1.000 €." },
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
          telephone: "+4916099627317",
          worksFor: {
            "@type": "Organization",
            "@id": "https://burmeister-webdesign.com/#business",
            name: "Burmeister Webdesign Leipzig",
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
      <Section className="pb-10">
        <Eyebrow>Über mich</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Gustav Burmeister – Ihr Webdesigner aus Leipzig.
        </h1>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-arbeitsfoto.webp"
              alt="Gustav Burmeister – Webdesigner aus Leipzig an der Arbeit"
              width={800}
              height={1000}
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/80 md:col-span-7">
            <p>
              Mein Name ist <strong>Gustav Burmeister</strong>. Ich bin freiberuflicher
              Webdesigner aus Leipzig und arbeite mit kleinen Unternehmen aus der
              Region zusammen – Handwerksbetrieben, Restaurants, lokalen Dienstleistern
              und Selbstständigen.
            </p>
            <p>
              Ich glaube nicht an überteuerte Agentur-Pakete für Firmen, die einfach
              nur eine vernünftige Website brauchen. Stattdessen biete ich genau das,
              was Sie wirklich benötigen – persönlich betreut, klar erklärt und zu
              fairen Preisen.
            </p>
            <p>
              Wo es sinnvoll ist, nutze ich moderne Werkzeuge inklusive KI, um Texte,
              Bilder und Abläufe effizienter zu gestalten. Das Ergebnis bleibt
              handgemacht und auf Sie zugeschnitten – nur eben schneller und damit
              bezahlbarer.
            </p>

            <div className="grid gap-6 pt-4 sm:grid-cols-2">
              {[
                ["Standort", "Leipzig & Umgebung"],
                ["Ansprache", "Direkt mit mir, kein Call-Center"],
                ["Erreichbarkeit", "Telefon, WhatsApp, E-Mail"],
                ["Schwerpunkt", "Kleine lokale Unternehmen"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="mt-1 font-medium text-foreground">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          Lust auf ein unverbindliches Gespräch?
        </h2>
        <CtaRow />
      </Section>
    </>
  );
}