import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Burmeister Webdesign Leipzig" },
      { name: "description", content: "Datenschutzerklärung von Burmeister Webdesign Leipzig. Platzhalterseite – wird vor Veröffentlichung durch eine vollständige Datenschutzerklärung ersetzt." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "https://burmeister-webdesign.de/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.de/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <Section>
      <Eyebrow>Rechtliches · Platzhalter</Eyebrow>
      <h1 className="mt-5 font-serif text-4xl text-foreground md:text-5xl">Datenschutzerklärung</h1>
      <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/60 p-6 text-sm text-foreground/75">
        <p className="font-medium text-foreground">Hinweis: Dies ist eine Platzhalterseite.</p>
        <p className="mt-2">
          Vor der Veröffentlichung muss eine vollständige, auf das tatsächliche
          Verarbeitungs- und Hosting-Szenario zugeschnittene Datenschutzerklärung
          eingefügt werden. Es werden keine Angaben erfunden.
        </p>
      </div>

      <div className="prose prose-sm mt-10 max-w-3xl space-y-6 text-foreground/80">
        <section>
          <h2 className="font-serif text-2xl text-foreground">1. Verantwortlicher</h2>
          <p>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            <br />[Vollständiger Name und Anschrift, siehe Impressum]
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">2. Aufruf der Website</h2>
          <p>
            Beim Aufruf dieser Website werden technisch notwendige Daten (z. B. IP-Adresse,
            Browsertyp, Uhrzeit) verarbeitet. Eine Speicherung über den unmittelbaren
            Besuch hinaus erfolgt nicht zu Werbe- oder Tracking-Zwecken.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">3. Kontaktformular</h2>
          <p>
            Wenn Sie das Kontaktformular oder unsere E-Mail-Adresse nutzen, verarbeiten
            wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage
            (Art. 6 Abs. 1 lit. b und f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">4. Cookies</h2>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies. Es
            werden keine Tracking- oder Marketing-Cookies gesetzt.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie
            das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Platzhaltertext – ersetzt keine rechtssichere Datenschutzerklärung.
        </p>
      </div>
    </Section>
  );
}