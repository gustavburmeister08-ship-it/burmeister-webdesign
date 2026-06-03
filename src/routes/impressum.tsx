import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Burmeister Webdesign Leipzig" },
      { name: "description", content: "Impressum von Burmeister Webdesign Leipzig gemäß § 5 DDG." },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <Section>
      <h1 className="font-serif text-4xl text-foreground md:text-5xl">Impressum</h1>

      <div className="mt-10 max-w-3xl space-y-10 text-[15px] leading-relaxed text-foreground/85">

        {/* 1 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">Angaben gemäß § 5 DDG</h2>
          <p>
            Gustav Burmeister<br />
            An der Märchenwiese 40<br />
            04277 Leipzig<br />
            Deutschland
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href="tel:+4916099627317" className="underline underline-offset-2">
              +49 160 99627317
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:gustav.burmeister08@gmail.com" className="underline underline-offset-2">
              gustav.burmeister08@gmail.com
            </a>
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">Umsatzsteuer</h2>
          <p>
            Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer
            berechnet. Es liegt keine Umsatzsteuer-Identifikationsnummer vor.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
          </h2>
          <p>
            Gustav Burmeister<br />
            An der Märchenwiese 40<br />
            04277 Leipzig
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-3">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte
            umgehend entfernen.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">Haftung für Links</h2>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
            Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
            Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
            nicht erkennbar.
          </p>
          <p className="mt-3">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werde ich derartige Links umgehend entfernen.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">Urheberrecht</h2>
          <p>
            Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen
            Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten,
            nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-3">
            Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
            aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
          </p>
        </div>

      </div>
    </Section>
  );
}
