import { createFileRoute } from "@tanstack/react-router";
import {
  Layers, Sparkles, Zap, Search, MapPin, PenLine,
  ImageIcon, ServerCog, ShoppingBag, Workflow,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { CtaRow } from "@/components/site/CtaRow";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – Webdesigner Leipzig | Gustav Burmeister Webdesign" },
      { name: "description", content: "Webdesigner Leipzig: Website-Erstellung, Relaunch, Landingpages, SEO, Google Business, Hosting. Alles aus einer Hand – persönlich betreut ab 1.000 €." },
      { property: "og:title", content: "Webdesign-Leistungen Leipzig – Gustav Burmeister Webdesign" },
      { property: "og:description", content: "Website-Erstellung, Relaunch, SEO, Hosting & mehr – alles aus einer Hand in Leipzig ab 1.000 €." },
      { property: "og:url", content: "https://burmeister-webdesign.com/leistungen" },
      { property: "og:image", content: "https://burmeister-webdesign.com/images/gb-webdesign-website-mockup.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/leistungen" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://burmeister-webdesign.com/" },
            { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://burmeister-webdesign.com/leistungen" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Webdesign-Leistungen Leipzig",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Website-Erstellung Leipzig", url: "https://burmeister-webdesign.com/leistungen" },
            { "@type": "ListItem", position: 2, name: "Website-Relaunch Leipzig", url: "https://burmeister-webdesign.com/leistungen" },
            { "@type": "ListItem", position: 3, name: "Landingpages", url: "https://burmeister-webdesign.com/leistungen" },
            { "@type": "ListItem", position: 4, name: "SEO-Grundoptimierung Leipzig", url: "https://burmeister-webdesign.com/leistungen" },
            { "@type": "ListItem", position: 5, name: "Google Business Profil einrichten", url: "https://burmeister-webdesign.com/leistungen" },
            { "@type": "ListItem", position: 6, name: "Hosting & Wartung", url: "https://burmeister-webdesign.com/leistungen" },
          ],
        }),
      },
    ],
  }),
  component: LeistungenPage,
});

const ITEMS = [
  { icon: Layers, title: "Website-Erstellung", text: "Neue Websites für kleine Unternehmen in Leipzig – komplett aus einer Hand: Struktur, Design, Texte, Bilder und Technik." },
  { icon: Sparkles, title: "Website-Relaunch", text: "Veraltete Seiten werden ersetzt durch ein modernes, mobil optimiertes Design mit klarer Nutzerführung und besseren Anfragen." },
  { icon: Zap, title: "Landingpages", text: "Fokussierte Einzelseiten für eine Leistung, eine Kampagne oder eine Google-Anzeige. Schnell live, schnell wirksam." },
  { icon: Search, title: "SEO-Grundoptimierung", text: "Saubere Technik, sinnvolle Inhalte und lokale Bezüge – damit Sie für Suchanfragen wie „Webdesign Leipzig“ oder Ihre Branche gefunden werden." },
  { icon: MapPin, title: "Google Business Profil", text: "Einrichtung, Pflege und Optimierung Ihres Eintrags in Google Maps inklusive Kategorien, Bildern und Beschreibung." },
  { icon: PenLine, title: "Texte & Website-Struktur", text: "Verständliche Texte, die Kunden überzeugen, statt leere Werbefloskeln. Klare Struktur, die Besucher zum Ziel führt." },
  { icon: ImageIcon, title: "Bildbearbeitung & KI-Optimierung", text: "Ihre vorhandenen Fotos werden professionell aufbereitet. Wo sinnvoll, helfen KI-Werkzeuge bei Freistellung, Schärfe und Bildqualität." },
  { icon: ServerCog, title: "Hosting & Wartung", text: "Schnelles, sicheres Hosting in Deutschland, regelmäßige Updates, Sicherungen und kleine Änderungen – ohne dass Sie sich kümmern müssen." },
  { icon: Workflow, title: "Automatisierungen", text: "Wiederkehrende Aufgaben (Anfragen, Formulare, Datenpflege) lassen sich oft mit kleinen Automatisierungen vereinfachen." },
  { icon: ShoppingBag, title: "Online-Shops & Web-Apps", text: "Wenn eine Website nicht reicht: kleine Shops, Buchungssysteme oder individuelle Web-Anwendungen – pragmatisch umgesetzt." },
];

function LeistungenPage() {
  return (
    <>
      <Section className="pb-10">
        <Eyebrow>Leistungen</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Alles für Ihre neue Website – aus einer Hand in Leipzig.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/75">
          Von der ersten Idee bis zum laufenden Betrieb. Sie haben einen festen
          Ansprechpartner und ein verständliches Angebot – ohne Agentur-Aufschlag.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SEO */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>Lokale SEO Leipzig</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Damit Kunden Sie bei Google finden – nicht die Konkurrenz.
            </h2>
            <p className="mt-4 text-foreground/75">
              Ich optimiere Ihre Website für Suchanfragen wie „Handwerker Leipzig" oder
              „Friseur in meiner Nähe". Saubere Technik, passende Texte und lokale
              Bezüge sorgen dafür, dass Sie besser gefunden werden – ohne Tricks,
              die Google abstraft.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src="/images/gb-webdesign-lokale-seo-leipzig.webp"
              alt="Google Maps und lokale Suchergebnisse auf Laptop und Smartphone – bessere Sichtbarkeit in Leipzig"
              width={900}
              height={600}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Google Business */}
      <Section className="bg-secondary/50">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src="/images/gb-webdesign-google-business-profil.webp"
              alt="Google Business Profil auf einem Smartphone – Bewertungen, Öffnungszeiten und Standort"
              width={900}
              height={600}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <Eyebrow>Google Business Profil</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              In Google Maps sofort sichtbar sein.
            </h2>
            <p className="mt-4 text-foreground/75">
              Ich richte Ihr Google Business Profil vollständig ein: Kategorie,
              Öffnungszeiten, Fotos, Beschreibung und Kontaktdaten. So erscheinen
              Sie bei lokalen Suchen auf der Karte – direkt dort, wo Ihre Kunden
              nach Ihnen suchen.
            </p>
          </div>
        </div>
      </Section>

      {/* Hosting & Wartung */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>Hosting & Wartung</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Ihre Website läuft. Immer. Ohne Ihr Zutun.
            </h2>
            <p className="mt-4 text-foreground/75">
              Regelmäßige Updates, tägliche Backups, Sicherheitsüberwachung und
              schnelles Hosting – alles aus einer Hand. Kleine Änderungen werden
              auf Zuruf erledigt. Sie kümmern sich um Ihr Geschäft, ich um Ihre Website.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src="/images/gb-webdesign-hosting-wartung.webp"
              alt="Laptop mit Hosting-Dashboard zeigt Updates, Backups, Sicherheit und Monitoring"
              width={900}
              height={600}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Bildbearbeitung */}
      <Section className="bg-secondary/50">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src="/images/gb-webdesign-bildbearbeitung-vergleich.webp"
              alt="Vorher-Nachher-Vergleich: Bildbearbeitung und Optimierung für professionelle Website-Fotos"
              width={900}
              height={600}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <Eyebrow>Bildbearbeitung</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Professionelle Bilder – aus dem, was Sie haben.
            </h2>
            <p className="mt-4 text-foreground/75">
              Schlechte Bilder kosten Vertrauen. Ich bearbeite Ihre vorhandenen Fotos
              professionell: Belichtung, Freistellung, Schärfe und Bildschnitt. Wo
              nötig, helfen KI-Werkzeuge für ein hochwertiges Ergebnis – ohne
              Fotoshooting-Kosten.
            </p>
          </div>
        </div>
      </Section>

      {/* Web-Apps */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>Web-Apps & Automatisierungen</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Wenn eine Website nicht mehr reicht.
            </h2>
            <p className="mt-4 text-foreground/75">
              Buchungssysteme, Anfrage-Dashboards, automatische E-Mail-Antworten,
              kleine Online-Shops – ich setze um, was Ihr Betrieb braucht. Pragmatisch,
              ohne Overkill und zu einem festen Preis.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src="/images/gb-webdesign-webapp-dashboard.webp"
              alt="Web-App Dashboard auf einem Desktop-Monitor – Übersicht über Anfragen und Leistungen"
              width={900}
              height={600}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          Nicht sicher, was Sie genau brauchen?
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/75">
          Das ist völlig in Ordnung. Im kostenlosen Erstgespräch klären wir gemeinsam,
          welche Leistungen für Ihre Situation sinnvoll sind – und welche nicht.
        </p>
        <CtaRow />
      </Section>
    </>
  );
}