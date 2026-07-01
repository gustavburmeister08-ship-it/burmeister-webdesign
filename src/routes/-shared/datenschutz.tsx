import { Section } from "@/components/site/Section";
import { EmailContact, EmailText } from "@/components/site/EmailContact";
import { breadcrumbJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    metaTitle: "Datenschutzerklärung – Gustav Burmeister Webdesign Leipzig",
    metaDescription:
      "Datenschutzerklärung von Gustav Burmeister Webdesign Leipzig gemäß DSGVO.",
    ogTitle: "Datenschutz - Gustav Burmeister Webdesign Leipzig",
    ogDescription:
      "Datenschutzhinweise von Gustav Burmeister Webdesign Leipzig gemäß DSGVO.",
    breadcrumbLabel: "Datenschutz",
    heading: "Datenschutzerklärung",
    stand: "Stand: Juni 2026 · Gültig für burmeister-webdesign.com",
    sections: [
      {
        heading: "1. Verantwortlicher",
        body: (
          <>
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
              <EmailContact icon={false} className="inline underline underline-offset-2">
                <EmailText />
              </EmailContact>
              <br />
              Telefon:{" "}
              <a href="tel:+493418605648" className="underline underline-offset-2">
                0341 8605648
              </a>
            </p>
          </>
        ),
      },
      {
        heading: "2. Allgemeines zur Datenverarbeitung",
        body: (
          <>
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
          </>
        ),
      },
      {
        heading: "3. Hosting (Cloudflare Pages)",
        body: (
          <>
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
          </>
        ),
      },
      {
        heading: "4. Schriftarten",
        body: (
          <p>
            Diese Website nutzt Systemschriftarten, die bereits auf Ihrem Gerät
            oder in Ihrem Browser vorhanden sind. Es werden keine externen
            Schriftarten von Google Fonts oder vergleichbaren Drittanbietern
            geladen.
          </p>
        ),
      },
      {
        heading: "5. Kontaktformular und Kontaktaufnahme",
        body: (
          <>
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
          </>
        ),
      },
      {
        heading: "6. Meta Pixel und Meta Conversions API",
        body: (
          <>
            <p>
              Diese Website kann Meta Pixel und die Meta Conversions API des
              Anbieters Meta Platforms Ireland Limited, Merrion Road, Dublin 4,
              D04 X2K5, Irland, einsetzen, um die Wirksamkeit von Werbeanzeigen zu
              messen und Kontaktanfragen besser zuzuordnen.
            </p>
            <p className="mt-3">
              Dabei können technische Informationen wie aufgerufene URL, Zeitpunkt
              des Ereignisses, Browser-Kennung, Klickkennung,
              Browser-Informationen, Geräteinformationen sowie Interaktionen wie
              Seitenaufrufe, Kontaktklicks und abgesendete Kontaktformulare an
              Meta übermittelt werden. Angaben aus Kontaktformularen wie
              E-Mail-Adresse, Telefonnummer, Vorname oder Nachname werden vor der
              Übermittlung nach den Vorgaben von Meta gehasht.
            </p>
            <p className="mt-3">
              Meta kann diese Informationen mit Ihrem Facebook- oder
              Instagram-Konto verknüpfen, sofern Sie bei Meta angemeldet sind oder
              Meta Sie wiedererkennen kann. Die Verarbeitung kann auch eine
              Übermittlung in die USA umfassen. Meta ist nach eigenen Angaben
              unter dem EU-U.S. Data Privacy Framework zertifiziert.
            </p>
            <p className="mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung), soweit eine Einwilligung erforderlich ist. Soweit
              technisch notwendige Verarbeitungsvorgänge betroffen sind, kann Art.
              6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Messung und
              Optimierung von Werbemaßnahmen) einschlägig sein.
            </p>
            <p className="mt-3">
              Datenschutzinformationen von Meta:{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                facebook.com/privacy/policy
              </a>
            </p>
          </>
        ),
      },
      {
        heading: "7. Cookies und lokaler Speicher",
        body: (
          <>
            <p>
              Für den technischen Betrieb werden keine eigenen
              Marketing-Cookie-Einstellungen im lokalen Speicher gespeichert.
              Durch den Einsatz von Meta Pixel können jedoch Cookies oder
              vergleichbare Technologien von Meta gesetzt oder ausgelesen werden,
              insbesondere zur Wiedererkennung von Browsern und zur Zuordnung von
              Werbeklicks.
            </p>
            <p className="mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung), soweit eine Einwilligung erforderlich ist.
            </p>
          </>
        ),
      },
      {
        heading: "8. Ihre Rechte als betroffene Person",
        body: (
          <>
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
              <EmailContact icon={false} className="inline underline underline-offset-2">
                <EmailText />
              </EmailContact>
            </p>
          </>
        ),
      },
      {
        heading: "9. Beschwerderecht bei der Aufsichtsbehörde",
        body: (
          <>
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
              <EmailContact
                user="saechsdsb"
                domain="slt.sachsen.de"
                icon={false}
                className="inline underline underline-offset-2"
              >
                <EmailText user="saechsdsb" domain="slt.sachsen.de" />
              </EmailContact>
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
          </>
        ),
      },
      {
        heading: "10. Aktualität und Änderungen dieser Datenschutzerklärung",
        body: (
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni
            2026. Durch die Weiterentwicklung dieser Website oder aufgrund
            geänderter gesetzlicher oder behördlicher Vorgaben kann es notwendig
            werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
            Version ist stets unter burmeister-webdesign.com/datenschutz
            abrufbar.
          </p>
        ),
      },
    ],
  },
  en: {
    metaTitle: "Privacy Policy – Gustav Burmeister Webdesign Leipzig",
    metaDescription:
      "Privacy policy of Gustav Burmeister Webdesign Leipzig pursuant to the GDPR.",
    ogTitle: "Privacy Policy - Gustav Burmeister Webdesign Leipzig",
    ogDescription:
      "Privacy notice of Gustav Burmeister Webdesign Leipzig pursuant to the GDPR.",
    breadcrumbLabel: "Privacy Policy",
    heading: "Privacy Policy",
    stand: "Last updated: June 2026 · Applies to burmeister-webdesign.com",
    sections: [
      {
        heading: "1. Controller",
        body: (
          <>
            <p>
              The controller within the meaning of the General Data Protection
              Regulation (GDPR/DSGVO) and the German Federal Data Protection
              Act (BDSG) is:
            </p>
            <p className="mt-3">
              Gustav Burmeister
              <br />
              An der Märchenwiese 40
              <br />
              04277 Leipzig
              <br />
              Germany
              <br />
              Email:{" "}
              <EmailContact icon={false} className="inline underline underline-offset-2">
                <EmailText />
              </EmailContact>
              <br />
              Phone:{" "}
              <a href="tel:+493418605648" className="underline underline-offset-2">
                +49 341 8605648
              </a>
            </p>
          </>
        ),
      },
      {
        heading: "2. General Information on Data Processing",
        body: (
          <>
            <p>
              I generally process personal data only to the extent necessary
              to provide a functioning website as well as my content and
              services. Personal data is regularly processed only after
              obtaining the consent of the data subject, or where processing
              is permitted by law.
            </p>
            <p className="mt-3">
              <strong>Legal basis:</strong> Art. 6 (1)(a) GDPR (consent), Art.
              6 (1)(b) GDPR (performance of a contract / pre-contractual
              measures), Art. 6 (1)(f) GDPR (legitimate interest).
            </p>
          </>
        ),
      },
      {
        heading: "3. Hosting (Cloudflare Pages)",
        body: (
          <>
            <p>This website is hosted by:</p>
            <p className="mt-3">
              Cloudflare Germany GmbH, Rosental 7, c/o WeWork, 80331 Munich
              <br />
              and Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107,
              USA
            </p>
            <p className="mt-3">
              Cloudflare acts as a processor for the technical operation of
              this website. Processing is based on Art. 6 (1)(f) GDPR
              (legitimate interest in the reliable and secure operation of the
              website).
            </p>
            <p className="mt-3">
              When this website is accessed, Cloudflare automatically collects
              technical connection data (server log files):
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>IP address of the requesting device (anonymized)</li>
              <li>Date and time of access</li>
              <li>URL accessed</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
            </ul>
            <p className="mt-3">
              This data is not merged with other data sources. Transfer to the
              USA takes place on the basis of the EU Standard Contractual
              Clauses (Art. 46 (2)(c) GDPR). Cloudflare is certified under the
              EU-U.S. Data Privacy Framework.
            </p>
            <p className="mt-3">
              Cloudflare privacy information:{" "}
              <a
                href="https://www.cloudflare.com/de-de/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                cloudflare.com/de-de/privacypolicy
              </a>
            </p>
          </>
        ),
      },
      {
        heading: "4. Fonts",
        body: (
          <p>
            This website uses system fonts that are already present on your
            device or in your browser. No external fonts from Google Fonts or
            comparable third-party providers are loaded.
          </p>
        ),
      },
      {
        heading: "5. Contact Form and Getting in Touch",
        body: (
          <>
            <p>
              If you contact me via the contact form, by email, or by
              telephone, I process the data you provide in order to handle
              your inquiry.
            </p>
            <p className="mt-3">
              <strong>Data processed may include:</strong> name, company name,
              email address, phone number, URL of an existing website, budget
              indication, requested service, message text.
            </p>
            <p className="mt-3">
              <strong>Legal basis:</strong> Art. 6 (1)(b) GDPR (pre-contractual
              measures) and Art. 6 (1)(f) GDPR (legitimate interest in
              handling inquiries).
            </p>
            <p className="mt-3">
              The data is used exclusively to process your inquiry and is not
              passed on to third parties. It is deleted once the inquiry has
              been fully processed and no statutory retention obligations
              apply.
            </p>
          </>
        ),
      },
      {
        heading: "6. Meta Pixel and Meta Conversions API",
        body: (
          <>
            <p>
              This website may use Meta Pixel and the Meta Conversions API
              provided by Meta Platforms Ireland Limited, Merrion Road, Dublin
              4, D04 X2K5, Ireland, to measure the effectiveness of
              advertisements and to better attribute contact inquiries.
            </p>
            <p className="mt-3">
              In doing so, technical information such as the URL accessed, the
              time of the event, browser identifier, click identifier,
              browser information, device information, as well as
              interactions such as page views, contact clicks, and submitted
              contact forms may be transmitted to Meta. Information from
              contact forms such as email address, phone number, first name,
              or last name is hashed according to Meta's specifications
              before transmission.
            </p>
            <p className="mt-3">
              Meta may link this information to your Facebook or Instagram
              account if you are logged into Meta or if Meta can recognize
              you. Processing may also involve a transfer to the USA. Meta
              states that it is certified under the EU-U.S. Data Privacy
              Framework.
            </p>
            <p className="mt-3">
              <strong>Legal basis:</strong> Art. 6 (1)(a) GDPR (consent),
              insofar as consent is required. Insofar as technically
              necessary processing operations are concerned, Art. 6 (1)(f)
              GDPR (legitimate interest in measuring and optimizing
              advertising measures) may apply.
            </p>
            <p className="mt-3">
              Meta's privacy information:{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                facebook.com/privacy/policy
              </a>
            </p>
          </>
        ),
      },
      {
        heading: "7. Cookies and Local Storage",
        body: (
          <>
            <p>
              No proprietary marketing cookie settings are stored in local
              storage for technical operation. However, through the use of
              Meta Pixel, cookies or comparable technologies from Meta may be
              set or read, in particular to recognize browsers and attribute
              advertising clicks.
            </p>
            <p className="mt-3">
              <strong>Legal basis:</strong> Art. 6 (1)(a) GDPR (consent),
              insofar as consent is required.
            </p>
          </>
        ),
      },
      {
        heading: "8. Your Rights as a Data Subject",
        body: (
          <>
            <p>
              You have the following rights with respect to your personal
              data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Right of access</strong> (Art. 15 GDPR)
              </li>
              <li>
                <strong>Right to rectification</strong> of inaccurate data
                (Art. 16 GDPR)
              </li>
              <li>
                <strong>Right to erasure</strong> (Art. 17 GDPR)
              </li>
              <li>
                <strong>Right to restriction of processing</strong> (Art. 18
                GDPR)
              </li>
              <li>
                <strong>Right to data portability</strong> (Art. 20 GDPR)
              </li>
              <li>
                <strong>Right to object</strong> to processing based on Art. 6
                (1)(f) GDPR (Art. 21 GDPR)
              </li>
              <li>
                <strong>Right to withdraw</strong> consent given, with effect
                for the future (Art. 7 (3) GDPR)
              </li>
            </ul>
            <p className="mt-3">
              To exercise your rights, please contact:{" "}
              <EmailContact icon={false} className="inline underline underline-offset-2">
                <EmailText />
              </EmailContact>
            </p>
          </>
        ),
      },
      {
        heading: "9. Right to Lodge a Complaint with a Supervisory Authority",
        body: (
          <>
            <p>
              You have the right to lodge a complaint with a data protection
              supervisory authority regarding the processing of your personal
              data. The competent authority for the Free State of Saxony is:
            </p>
            <p className="mt-3">
              <strong>
                Saxon Data Protection and Transparency Commissioner
                (Sächsischer Datenschutz- und Transparenzbeauftragter)
              </strong>
              <br />
              Devrientstraße 5<br />
              01067 Dresden, Germany
              <br />
              Phone: +49 351 493-5401
              <br />
              Email:{" "}
              <EmailContact
                user="saechsdsb"
                domain="slt.sachsen.de"
                icon={false}
                className="inline underline underline-offset-2"
              >
                <EmailText user="saechsdsb" domain="slt.sachsen.de" />
              </EmailContact>
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
          </>
        ),
      },
      {
        heading: "10. Currency and Changes to this Privacy Policy",
        body: (
          <p>
            This privacy policy is currently valid and dated June 2026. Due to
            the further development of this website or changes in legal or
            regulatory requirements, it may become necessary to change this
            privacy policy. The current version is always available at
            burmeister-webdesign.com/datenschutz (German original) and
            burmeister-webdesign.com/en/datenschutz.
          </p>
        ),
      },
    ],
  },
} as const;

export function datenschutzHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/datenschutz" : "/datenschutz";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { name: "robots", content: "noindex, nofollow" },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/datenschutz"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(path, t.breadcrumbLabel, locale)),
      },
    ],
  };
}

export function DatenschutzPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <Section>
      <h1 className="font-serif text-4xl text-foreground md:text-5xl">
        {t.heading}
      </h1>
      <p className="mt-4 max-w-3xl text-foreground/70">{t.stand}</p>

      {locale === "en" && (
        <div className="mt-6 max-w-3xl rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Note:</strong> This is a courtesy translation. The German
          version of this page is legally binding.
        </div>
      )}

      <div className="mt-10 max-w-3xl space-y-10 text-[15px] leading-relaxed text-foreground/85">
        {t.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="mb-3 font-serif text-xl text-foreground">
              {section.heading}
            </h2>
            {section.body}
          </div>
        ))}
      </div>
    </Section>
  );
}
