import { createFileRoute } from "@tanstack/react-router";
import {
  Layers, Sparkles, Zap, Search, MapPin, PenLine,
  ImageIcon, ServerCog, ShoppingBag, Workflow, ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { CtaRow } from "@/components/site/CtaRow";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – Webdesigner Leipzig | Gustav Burmeister Webdesign" },
      { name: "description", content: "Webdesigner Leipzig: Website-Erstellung, Relaunch, Landingpages, SEO, Google Business, Hosting. Alles aus einer Hand – persönlich betreut ab 790 €." },
      { property: "og:title", content: "Webdesign-Leistungen Leipzig – Gustav Burmeister Webdesign" },
      { property: "og:description", content: "Website-Erstellung, Relaunch, SEO, Hosting & mehr – alles aus einer Hand in Leipzig ab 790 €." },
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
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Was ist im Webdesign-Paket enthalten?",
              acceptedAnswer: { "@type": "Answer", text: "Struktur, Design, Texte, Bildaufbereitung und technische Umsetzung sind inklusive. Auf Wunsch auch SEO-Grundoptimierung, Hosting und Wartung." },
            },
            {
              "@type": "Question",
              name: "Muss ich selbst Texte schreiben?",
              acceptedAnswer: { "@type": "Answer", text: "Nein. Ich übernehme die Texte für Ihre Website. Sie liefern die Informationen zu Ihrem Unternehmen – ich formuliere verständlich und zielgruppengerecht." },
            },
            {
              "@type": "Question",
              name: "Hilft Webdesign bei der Google-Auffindbarkeit?",
              acceptedAnswer: { "@type": "Answer", text: "Ja. Jede Website enthält eine SEO-Grundoptimierung: saubere Technik, lokale Bezüge und Inhalte, die zu echten Suchanfragen passen. Für mehr Sichtbarkeit empfehle ich zusätzlich ein Google Business Profil." },
            },
            {
              "@type": "Question",
              name: "Bieten Sie auch Wartung nach dem Launch an?",
              acceptedAnswer: { "@type": "Answer", text: "Ja. Optionales Hosting & Wartungspaket ab 30 €/Monat – inklusive täglicher Backups, regelmäßiger Updates und kleiner Änderungen auf Zuruf." },
            },
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
  { icon: Search, title: "SEO-Grundoptimierung", text: "Saubere Technik, sinnvolle Inhalte und lokale Bezüge – damit Sie für Suchanfragen wie 'Webdesign Leipzig' oder Ihre Branche gefunden werden." },
  { icon: MapPin, title: "Google Business Profil", text: "Einrichtung, Pflege und Optimierung Ihres Eintrags in Google Maps inklusive Kategorien, Bildern und Beschreibung." },
  { icon: PenLine, title: "Texte & Struktur", text: "Verständliche Texte, die Kunden überzeugen, statt leere Werbefloskeln. Klare Struktur, die Besucher zum Ziel führt." },
  { icon: ImageIcon, title: "Bildbearbeitung", text: "Ihre vorhandenen Fotos werden professionell aufbereitet. Wo sinnvoll, helfen KI-Werkzeuge bei Freistellung, Schärfe und Bildqualität." },
  { icon: ServerCog, title: "Hosting & Wartung", text: "Schnelles, sicheres Hosting, regelmäßige Updates, Sicherungen und kleine Änderungen – ohne dass Sie sich kümmern müssen." },
  { icon: Workflow, title: "Automatisierungen", text: "Wiederkehrende Aufgaben (Anfragen, Formulare, Datenpflege) lassen sich oft mit kleinen Automatisierungen vereinfachen." },
  { icon: ShoppingBag, title: "Shops & Web-Apps", text: "Wenn eine Website nicht reicht: kleine Shops, Buchungssysteme oder individuelle Web-Anwendungen – pragmatisch umgesetzt." },
];

function LeistungenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <Section className="pb-12">
        <Eyebrow>Leistungen</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Alles für Ihre Website –{" "}
          <em className="italic text-primary">aus einer Hand in Leipzig</em>
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
          Von der ersten Idee bis zum laufenden Betrieb. Sie haben einen festen
          Ansprechpartner – keine Weiterleitung, keine anonyme Agentur.
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap gap-10">
          {[
            { n: "ab 790 €", l: "Einstiegspreis" },
            { n: "2–4 Wo.", l: "Typische Umsetzungszeit" },
            { n: "1", l: "Fester Ansprechpartner" },
          ].map(({ n, l }) => (
            <div key={l}>
              <p className="font-serif text-3xl text-foreground">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LEISTUNGS-GRID ───────────────────── */}
      <Section className="pt-0">
        <div className="grid gap-px rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }, i) => {
            const corners = [
              i === 0 && "rounded-tl-3xl",
              i === 1 && "md:rounded-tr-3xl lg:rounded-none",
              i === 2 && "lg:rounded-tr-3xl",
              i === ITEMS.length - 3 && "lg:rounded-bl-3xl",
              i === ITEMS.length - 2 && "md:rounded-bl-3xl lg:rounded-none",
              i === ITEMS.length - 1 && "rounded-br-3xl",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div key={title} className={`group bg-card p-7 transition-colors duration-150 hover:bg-secondary/60 ${corners}`}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-150 group-hover:bg-card">
                  <Icon size={18} />
                </span>
                <h2 className="mt-5 font-serif text-xl text-foreground">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── SEO ─────────────────────────────── */}
      <Section className="bg-secondary/40">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>Lokale SEO Leipzig</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Damit Kunden Sie bei Google finden – nicht die Konkurrenz.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Ich optimiere Ihre Website für Suchanfragen wie „Handwerker Leipzig" oder
              „Friseur in meiner Nähe". Saubere Technik, passende Texte und lokale
              Bezüge sorgen für bessere Auffindbarkeit – ohne Tricks, die Google abstraft.
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

      {/* ── Google Business ───────────────── */}
      <Section>
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
            <p className="mt-4 leading-relaxed text-foreground/70">
              Ich richte Ihr Google Business Profil vollständig ein: Kategorie,
              Öffnungszeiten, Fotos, Beschreibung und Kontaktdaten. So erscheinen
              Sie bei lokalen Suchen auf der Karte – direkt dort, wo Ihre Kunden suchen.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Hosting & Wartung ─────────────── */}
      <Section className="bg-secondary/40">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>Hosting & Wartung</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Ihre Website läuft. Immer. Ohne Ihr Zutun.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
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

      {/* ── FAQ ─────────────────────────────── */}
      <Section>
        <Eyebrow>Häufige Fragen</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Was Kunden vor dem Start fragen
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Was ist im Webdesign-Paket enthalten?",
              a: "Struktur, Design, Texte, Bildaufbereitung und technische Umsetzung sind inklusive. Auf Wunsch auch SEO-Grundoptimierung, Hosting und Wartung.",
            },
            {
              q: "Muss ich selbst Texte schreiben?",
              a: "Nein. Ich übernehme die Texte für Ihre Website. Sie liefern die Informationen – ich formuliere verständlich und zielgruppengerecht.",
            },
            {
              q: "Hilft Webdesign bei der Google-Auffindbarkeit?",
              a: "Ja. Jede Website enthält eine SEO-Grundoptimierung: saubere Technik, lokale Bezüge und passende Inhalte. Für mehr Sichtbarkeit empfehle ich zusätzlich ein Google Business Profil.",
            },
            {
              q: "Bieten Sie auch Wartung nach dem Launch an?",
              a: "Ja. Optionales Hosting & Wartungspaket ab 30 €/Monat – inklusive täglicher Backups, regelmäßiger Updates und kleiner Änderungen auf Zuruf.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-serif text-lg text-foreground">{q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────── */}
      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl text-background md:text-4xl">
              Nicht sicher, was Sie genau brauchen?
            </h2>
            <p className="mt-4 text-background/70">
              Das ist völlig in Ordnung. Im kostenlosen Erstgespräch klären wir
              gemeinsam, welche Leistungen für Ihre Situation sinnvoll sind – und
              welche nicht.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/kontakt"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Erstgespräch anfragen <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
