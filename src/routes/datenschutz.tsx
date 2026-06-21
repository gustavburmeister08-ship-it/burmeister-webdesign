import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { breadcrumbJsonLd, socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Gustav Burmeister Webdesign Leipzig" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Gustav Burmeister Webdesign Leipzig gemäß DSGVO.",
      },
      { name: "robots", content: "noindex, nofollow" },
      ...socialMeta({
        title: "Datenschutz - Gustav Burmeister Webdesign Leipzig",
        description:
          "Datenschutzhinweise von Gustav Burmeister Webdesign Leipzig gemäß DSGVO.",
        path: "/datenschutz",
      }),
    ],
    links: [
      {
        rel: "canonical",
        href: "https://burmeister-webdesign.com/datenschutz",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd("/datenschutz", "Datenschutz"),
        ),
      },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <Section>
      <h1 className="font-serif text-4xl text-foreground md:text-5xl">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 max-w-3xl text-foreground/70">
        Stand: Juni 2025 · Gültig für burmeister-webdesign.com
      </p>

      <div className="mt-10 max-w-3xl space-y-10 text-[15px] leading-relaxed text-foreground/85">
        {/* 1 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            und des Bundesdatenschutzgesetzes (BDSG) ist:
          </p>
          <p className="mt-3">
            Gustav Burmeister
            <br />
            An der Märchenwiese 40
            <br />
            04277 Leipzig
            <br />
            Deutschland
            <br />
            E-Mail:{" "}
            <a
              href="mailto:gustav.burmeister08@gmail.com"
              className="underline underline-offset-2"
            >
              gustav.burmeister08@gmail.com
            </a>
            <br />
            Telefon:{" "}
            <a
              href="tel:+493418605648"
              className="underline underline-offset-2"
            >
              0341 8605648
            </a>
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p>
            Ich verarbeite personenbezogene Daten grundsätzlich nur, soweit dies
            zur Bereitstellung einer funktionsfähigen Website sowie meiner
            Inhalte und Leistungen erforderlich ist. Eine Verarbeitung
            personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung der
            betroffenen Person oder wenn die Verarbeitung durch gesetzliche
            Vorschriften erlaubt ist.
          </p>
          <p className="mt-3">
            <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO
            (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung /
            vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse).
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            3. Hosting (Cloudflare Pages)
          </h2>
          <p>Diese Website wird gehostet bei:</p>
          <p className="mt-3">
            Cloudflare Germany GmbH, Rosental 7, c/o WeWork, 80331 München
            <br />
            und Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA
          </p>
          <p className="mt-3">
            Cloudflare ist Auftragsverarbeiter für den technischen Betrieb
            dieser Website. Die Verarbeitung stützt sich auf Art. 6 Abs. 1 lit.
            f DSGVO (berechtigtes Interesse am zuverlässigen und sicheren
            Betrieb der Website).
          </p>
          <p className="mt-3">
            Beim Aufruf dieser Website werden durch Cloudflare automatisch
            technische Verbindungsdaten (Server-Log-Dateien) erfasst:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>IP-Adresse des anfragenden Geräts (anonymisiert)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Aufgerufene URL</li>
            <li>Browser-Typ und -Version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
          <p className="mt-3">
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
            Eine Übermittlung in die USA erfolgt auf Grundlage der
            EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
            Cloudflare ist zertifiziert unter dem EU-U.S. Data Privacy
            Framework.
          </p>
          <p className="mt-3">
            Datenschutzinformationen Cloudflare:{" "}
            <a
              href="https://www.cloudflare.com/de-de/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              cloudflare.com/de-de/privacypolicy
            </a>
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            4. Schriftarten
          </h2>
          <p>
            Diese Website nutzt Systemschriftarten, die bereits auf Ihrem Gerät
            oder in Ihrem Browser vorhanden sind. Es werden keine externen
            Schriftarten von Google Fonts oder vergleichbaren Drittanbietern
            geladen.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            5. Kontaktformular und Kontaktaufnahme
          </h2>
          <p>
            Wenn Sie mich über das Kontaktformular, per E-Mail oder telefonisch
            kontaktieren, verarbeite ich die von Ihnen übermittelten Daten zur
            Bearbeitung Ihrer Anfrage.
          </p>
          <p className="mt-3">
            <strong>Verarbeitete Daten können sein:</strong> Name, Firmenname,
            E-Mail-Adresse, Telefonnummer, URL einer bestehenden Website,
            Budgetangabe, gewünschte Leistung, Nachrichtentext.
          </p>
          <p className="mt-3">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Bearbeitung von Anfragen).
          </p>
          <p className="mt-3">
            Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
            verwendet und nicht an Dritte weitergegeben. Sie werden gelöscht,
            sobald die Anfrage abschließend bearbeitet wurde und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            6. Cookies und lokaler Speicher
          </h2>
          <p>
            Diese Website setzt ausschließlich einen technisch notwendigen
            Eintrag im lokalen Speicher (localStorage) des Browsers, um Ihre
            Cookie-Einstellung zu speichern. Es werden keine Tracking-, Analyse-
            oder Marketing-Cookies verwendet.
          </p>
          <p className="mt-3">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse am technischen Betrieb).
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            7. Keine Weitergabe an Dritte – kein Tracking
          </h2>
          <p>
            Diese Website verwendet kein Google Analytics, kein Meta Pixel, kein
            LinkedIn Insight Tag und keine sonstigen Tracking- oder
            Analysedienste. Es findet keine Profilerstellung und keine
            Weitergabe von Nutzerdaten zu Werbezwecken statt.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            8. Ihre Rechte als betroffene Person
          </h2>
          <p>
            Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Auskunftsrecht</strong> (Art. 15 DSGVO)
            </li>
            <li>
              <strong>Recht auf Berichtigung</strong> unrichtiger Daten (Art. 16
              DSGVO)
            </li>
            <li>
              <strong>Recht auf Löschung</strong> (Art. 17 DSGVO)
            </li>
            <li>
              <strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18
              DSGVO)
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)
            </li>
            <li>
              <strong>Widerspruchsrecht</strong> gegen die Verarbeitung auf
              Basis von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)
            </li>
            <li>
              <strong>Recht auf Widerruf</strong> einer erteilten Einwilligung
              mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
            </li>
          </ul>
          <p className="mt-3">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a
              href="mailto:gustav.burmeister08@gmail.com"
              className="underline underline-offset-2"
            >
              gustav.burmeister08@gmail.com
            </a>
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            9. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
            Die zuständige Behörde für den Freistaat Sachsen ist:
          </p>
          <p className="mt-3">
            <strong>
              Sächsischer Datenschutz- und Transparenzbeauftragter
            </strong>
            <br />
            Devrientstraße 5<br />
            01067 Dresden
            <br />
            Telefon: +49 351 493-5401
            <br />
            E-Mail:{" "}
            <a
              href="mailto:saechsdsb@slt.sachsen.de"
              className="underline underline-offset-2"
            >
              saechsdsb@slt.sachsen.de
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.saechsdsb.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              www.saechsdsb.de
            </a>
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">
            10. Aktualität und Änderungen dieser Datenschutzerklärung
          </h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni
            2025. Durch die Weiterentwicklung dieser Website oder aufgrund
            geänderter gesetzlicher oder behördlicher Vorgaben kann es notwendig
            werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
            Version ist stets unter burmeister-webdesign.com/datenschutz
            abrufbar.
          </p>
        </div>
      </div>
    </Section>
  );
}
