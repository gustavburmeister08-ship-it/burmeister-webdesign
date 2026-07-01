import { Section } from "@/components/site/Section";
import { EmailContact, EmailText } from "@/components/site/EmailContact";
import { breadcrumbJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    metaTitle: "Impressum – Gustav Burmeister Webdesign Leipzig",
    metaDescription:
      "Impressum von Gustav Burmeister Webdesign Leipzig gemäß § 5 DDG.",
    ogTitle: "Impressum - Gustav Burmeister Webdesign Leipzig",
    ogDescription:
      "Kontakt- und Anbieterkennzeichnung von Gustav Burmeister Webdesign Leipzig.",
    breadcrumbLabel: "Impressum",
    heading: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 DDG",
        body: (
          <p>
            Gustav Burmeister
            <br />
            An der Märchenwiese 40
            <br />
            04277 Leipzig
            <br />
            Deutschland
          </p>
        ),
      },
      {
        heading: "Kontakt",
        body: (
          <p>
            Telefon:{" "}
            <a href="tel:+493418605648" className="underline underline-offset-2">
              0341 8605648
            </a>
            <br />
            E-Mail:{" "}
            <EmailContact icon={false} className="inline underline underline-offset-2">
              <EmailText />
            </EmailContact>
          </p>
        ),
      },
      {
        heading: "Umsatzsteuer",
        body: (
          <p>
            Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine
            Umsatzsteuer berechnet. Es liegt keine
            Umsatzsteuer-Identifikationsnummer vor.
          </p>
        ),
      },
      {
        heading: "Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV",
        body: (
          <p>
            Gustav Burmeister
            <br />
            An der Märchenwiese 40
            <br />
            04277 Leipzig
          </p>
        ),
      },
      {
        heading: "Haftung für Inhalte",
        body: (
          <>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
              Inhalte umgehend entfernen.
            </p>
          </>
        ),
      },
      {
        heading: "Haftung für Links",
        body: (
          <>
            <p>
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber
              verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werde ich derartige Links
              umgehend entfernen.
            </p>
          </>
        ),
      },
      {
        heading: "Urheberrecht",
        body: (
          <>
            <p>
              Die durch mich erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden,
              werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf
              eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werde ich derartige Inhalte umgehend entfernen.
            </p>
          </>
        ),
      },
    ],
  },
  en: {
    metaTitle: "Legal Notice (Impressum) – Gustav Burmeister Webdesign Leipzig",
    metaDescription:
      "Legal notice (Impressum) of Gustav Burmeister Webdesign Leipzig pursuant to § 5 DDG.",
    ogTitle: "Legal Notice - Gustav Burmeister Webdesign Leipzig",
    ogDescription:
      "Provider identification and legal notice of Gustav Burmeister Webdesign Leipzig.",
    breadcrumbLabel: "Legal Notice",
    heading: "Legal Notice (Impressum)",
    sections: [
      {
        heading: "Information pursuant to § 5 DDG (German Digital Services Act)",
        body: (
          <p>
            Gustav Burmeister
            <br />
            An der Märchenwiese 40
            <br />
            04277 Leipzig
            <br />
            Germany
          </p>
        ),
      },
      {
        heading: "Contact",
        body: (
          <p>
            Phone:{" "}
            <a href="tel:+493418605648" className="underline underline-offset-2">
              +49 341 8605648
            </a>
            <br />
            Email:{" "}
            <EmailContact icon={false} className="inline underline underline-offset-2">
              <EmailText />
            </EmailContact>
          </p>
        ),
      },
      {
        heading: "VAT",
        body: (
          <p>
            As a small business owner within the meaning of § 19 (1) UStG
            (German VAT Act), no value-added tax is charged. No VAT
            identification number has been issued.
          </p>
        ),
      },
      {
        heading: "Responsible for content pursuant to § 18 (2) MStV",
        body: (
          <p>
            Gustav Burmeister
            <br />
            An der Märchenwiese 40
            <br />
            04277 Leipzig
          </p>
        ),
      },
      {
        heading: "Liability for Content",
        body: (
          <>
            <p>
              As a service provider, I am responsible for my own content on
              these pages in accordance with general law pursuant to § 7 (1)
              DDG. However, pursuant to §§ 8 to 10 DDG, I am not obligated as a
              service provider to monitor transmitted or stored third-party
              information or to investigate circumstances that indicate
              unlawful activity.
            </p>
            <p className="mt-3">
              Obligations to remove or block the use of information under
              general law remain unaffected. However, liability in this
              respect is only possible from the point in time at which a
              specific infringement becomes known. Upon becoming aware of any
              such infringements, I will remove this content immediately.
            </p>
          </>
        ),
      },
      {
        heading: "Liability for Links",
        body: (
          <>
            <p>
              My website contains links to external third-party websites over
              whose content I have no control. Therefore, I cannot assume any
              liability for this third-party content. The respective provider
              or operator of the linked pages is always responsible for their
              content. The linked pages were checked for possible legal
              violations at the time of linking. No unlawful content was
              identifiable at the time of linking.
            </p>
            <p className="mt-3">
              Permanent monitoring of the content of linked pages is not
              reasonable without concrete evidence of an infringement. Upon
              becoming aware of any infringements, I will remove such links
              immediately.
            </p>
          </>
        ),
      },
      {
        heading: "Copyright",
        body: (
          <>
            <p>
              The content and works created by me on these pages are subject
              to German copyright law. Reproduction, editing, distribution and
              any kind of use outside the limits of copyright law require my
              written consent. Downloads and copies of this page are only
              permitted for private, non-commercial use.
            </p>
            <p className="mt-3">
              Insofar as the content on this page was not created by me,
              third-party copyrights are respected. Should you nevertheless
              become aware of a copyright infringement, please notify me
              accordingly. Upon becoming aware of any infringements, I will
              remove such content immediately.
            </p>
          </>
        ),
      },
    ],
  },
} as const;

export function impressumHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/impressum" : "/impressum";

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
      ...hreflangLinks("/impressum"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(path, t.breadcrumbLabel, locale)),
      },
    ],
  };
}

export function ImpressumPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <Section>
      <h1 className="font-serif text-4xl text-foreground md:text-5xl">
        {t.heading}
      </h1>

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
