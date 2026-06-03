import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Burmeister Webdesign Leipzig" },
      { name: "description", content: "Impressum von Burmeister Webdesign Leipzig. Platzhalterseite – wird vor Veröffentlichung mit verbindlichen Angaben ergänzt." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "https://burmeister-webdesign.de/impressum" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.de/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <Section>
      <Eyebrow>Rechtliches · Platzhalter</Eyebrow>
      <h1 className="mt-5 font-serif text-4xl text-foreground md:text-5xl">Impressum</h1>
      <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/60 p-6 text-sm text-foreground/75">
        <p className="font-medium text-foreground">Hinweis: Dies ist eine Platzhalterseite.</p>
        <p className="mt-2">
          Vor der Veröffentlichung muss dieses Impressum durch die korrekten rechtlichen
          Angaben gemäß § 5 DDG (ehemals § 5 TMG) ersetzt werden. Es werden keine
          Daten erfunden.
        </p>
      </div>

      <div className="prose prose-sm mt-10 max-w-3xl text-foreground/80">
        <h2 className="font-serif text-2xl text-foreground">Angaben gemäß § 5 DDG</h2>
        <p>
          [Vollständiger Name]<br />
          [Straße und Hausnummer]<br />
          [Postleitzahl] Leipzig<br />
          Deutschland
        </p>

        <h3 className="mt-6 font-serif text-xl text-foreground">Kontakt</h3>
        <p>
          Telefon: [Telefonnummer]<br />
          E-Mail: [E-Mail-Adresse]
        </p>

        <h3 className="mt-6 font-serif text-xl text-foreground">Umsatzsteuer-ID</h3>
        <p>[USt-IdNr. gem. § 27 a UStG – sofern vorhanden]</p>

        <h3 className="mt-6 font-serif text-xl text-foreground">Verantwortlich für den Inhalt</h3>
        <p>[Vollständiger Name, Adresse]</p>

        <h3 className="mt-6 font-serif text-xl text-foreground">Haftungshinweis</h3>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Inhalte
          externer Links übernommen. Für den Inhalt der verlinkten Seiten sind
          ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </Section>
  );
}