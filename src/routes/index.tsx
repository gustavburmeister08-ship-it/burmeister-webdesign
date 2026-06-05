import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Wrench,
  Utensils,
  Briefcase,
  Sparkles,
  Clock3,
  Wallet,
  Search,
  Layers,
  ShieldCheck,
  PenLine,
  ImageIcon,
  ServerCog,
  ShoppingBag,
  Zap,
  MapPin,
} from "lucide-react";
import { CtaRow } from "@/components/site/CtaRow";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webdesign Leipzig – Website erstellen lassen ab 1.000 €" },
      {
        name: "description",
        content: "Webdesigner aus Leipzig für kleine Unternehmen. Website ab 1.000 € – schnell umgesetzt, verständlich erklärt. Jetzt kostenloses Erstgespräch anfragen.",
      },
      { property: "og:title", content: "Webdesign Leipzig – Website erstellen lassen ab 1.000 €" },
      { property: "og:description", content: "Websites ab 1.000 € – schnell, verständlich, persönlich betreut. Jetzt Erstgespräch anfragen." },
      { property: "og:url", content: "https://burmeister-webdesign.com/" },
      { property: "og:image", content: "https://burmeister-webdesign.com/images/gb-webdesign-leipzig-cafe.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Was kostet eine Website in Leipzig?",
              acceptedAnswer: { "@type": "Answer", text: "Einfache Websites starten bei 1.000 €. Der genaue Preis hängt vom Umfang ab – mehrseitige Websites beginnen bei ca. 2.000 €, Relaunches ab 3.000 €. Nach einem kostenlosen Erstgespräch erhalten Sie ein verbindliches Angebot." },
            },
            {
              "@type": "Question",
              name: "Wie lange dauert die Erstellung einer Website?",
              acceptedAnswer: { "@type": "Answer", text: "Einfache Websites sind oft in 2–3 Wochen fertig. Komplexere Projekte dauern 4–8 Wochen, abhängig von Umfang und Ihren Feedbackzeiten." },
            },
            {
              "@type": "Question",
              name: "Was ist im Preis enthalten?",
              acceptedAnswer: { "@type": "Answer", text: "Struktur, Design, Texte, Bildaufbereitung und technische Umsetzung sind inklusive. Optional: Hosting, Wartung und SEO-Grundoptimierung." },
            },
            {
              "@type": "Question",
              name: "Muss ich selbst Texte und Bilder liefern?",
              acceptedAnswer: { "@type": "Answer", text: "Nein. Ich übernehme Texte und Bildaufbereitung. Sie liefern nur die Informationen zu Ihrer Firma – ich schreibe die Texte für Sie." },
            },
            {
              "@type": "Question",
              name: "Bieten Sie auch Hosting und Wartung an?",
              acceptedAnswer: { "@type": "Answer", text: "Ja. Schnelles, sicheres Hosting inkl. täglicher Backups und laufender Pflege ab 30 €/Monat." },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const TRUST = [
  { icon: Wallet, label: "Websites ab 1.000 €" },
  { icon: Clock3, label: "Schnelle Umsetzung" },
  { icon: ShieldCheck, label: "Persönlicher Ansprechpartner" },
  { icon: ServerCog, label: "Hosting & Wartung möglich" },
];

const LEISTUNGEN = [
  { icon: Layers, title: "Neue Website", text: "Modern, mobil optimiert und auf Ihre Kunden zugeschnitten – inklusive Texten, Bildern und klarer Struktur." },
  { icon: Sparkles, title: "Website-Relaunch", text: "Bestehende Seiten bekommen ein zeitgemäßes Design, eine bessere Struktur und mehr Anfragen." },
  { icon: Zap, title: "Landingpages", text: "Fokussierte Einzelseiten für Aktionen, neue Leistungen oder Google-Anzeigen." },
  { icon: Search, title: "SEO-Grundoptimierung", text: "Damit Ihre Firma in Leipzig und Umgebung gefunden wird – mit sauberer Technik und passenden Texten." },
  { icon: MapPin, title: "Google Business Profil", text: "Einrichtung und Pflege Ihres Profils, damit Kunden Sie in Google Maps sofort finden." },
  { icon: PenLine, title: "Texte & Struktur", text: "Verständliche Texte, die Kunden ansprechen – ohne leere Floskeln, ohne Fachchinesisch." },
  { icon: ImageIcon, title: "Bildbearbeitung", text: "Vorhandene Fotos werden optimiert. KI-gestützte Bildaufbereitung sorgt für ein hochwertiges Ergebnis." },
  { icon: ServerCog, title: "Hosting & Wartung", text: "Schnelles, sicheres Hosting und laufende Pflege – Sie müssen sich um nichts kümmern." },
  { icon: ShoppingBag, title: "Online-Shops & Web-Apps", text: "Wenn Sie mehr brauchen als eine Website: kleine Shops, Buchungssysteme und Automatisierungen." },
];

const STEPS = [
  { n: "01", title: "Kostenloses Erstgespräch", text: "Telefon, WhatsApp oder vor Ort in Leipzig. Wir klären, was Sie brauchen und was sinnvoll ist." },
  { n: "02", title: "Festes Angebot", text: "Sie erhalten ein verständliches Angebot mit klarem Preis – keine Stundenfallen, keine Überraschungen." },
  { n: "03", title: "Inhalte & Entwurf", text: "Ich übernehme Struktur, Texte und Bilder. Sie sehen früh einen ersten Designentwurf." },
  { n: "04", title: "Umsetzung", text: "Schnelle, saubere Umsetzung. Sie geben Feedback, ich baue ein. Direkt und unkompliziert." },
  { n: "05", title: "Online & Betreuung", text: "Veröffentlichung, Einweisung und auf Wunsch laufende Wartung & Pflege." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_0%,oklch(0.95_0.04_85)_0%,transparent_70%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>Webdesign aus Leipzig · Persönlich betreut</Eyebrow>
            <h1 className="mt-5 font-serif text-[40px] leading-[1.05] tracking-tight text-foreground md:text-[58px] lg:text-[64px]">
              Professionelle Websites für kleine Unternehmen in Leipzig.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              Moderne Websites, Landingpages und Relaunches – schnell umgesetzt,
              verständlich erklärt und preiswert realisiert. Persönlicher
              Ansprechpartner statt anonymer Agentur.
            </p>
            <CtaRow />

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {TRUST.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon size={16} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-[var(--brand-stone)]" />
              <img
                src="/images/gb-webdesign-leipzig-cafe.webp"
                alt="Webdesigner arbeitet in einem Café in Leipzig – Laptop mit Website auf dem Tisch, Straßenbahn und Leipzig-Schild im Hintergrund"
                width={1280}
                height={960}
                fetchPriority="high"
                loading="eager"
                className="w-full rounded-2xl object-cover shadow-[0_30px_80px_-30px_rgba(24,32,38,0.35)]"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-4 shadow-lg md:block">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Aktuell</p>
                <p className="mt-1 font-serif text-base text-foreground">Freie Kapazität für 2 Projekte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section className="bg-card">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Das Problem</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Eine veraltete Website kostet Sie jeden Monat Kunden.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/80 md:col-span-7">
            <p>
              Viele kleine Unternehmen in Leipzig haben eine Website, die seit Jahren
              nicht mehr angefasst wurde. Sie wirkt altbacken, lädt langsam, sieht
              auf dem Handy schlecht aus – und Anfragen bleiben aus.
            </p>
            <p>
              Andere haben gar keine Website und verlieren täglich Kunden an die
              Konkurrenz, weil sie bei Google nicht gefunden werden. Für eine neue
              Website fehlt schlicht die Zeit oder das technische Wissen.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {[
                "Schlecht auffindbar bei Google",
                "Auf dem Handy unbrauchbar",
                "Wirkt unprofessionell",
                "Kein klarer Weg zur Anfrage",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* LÖSUNG */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-zielgruppen-collage.webp"
              alt="Vier Zielgruppen: Handwerker, Restaurantmitarbeiterin, Friseurin und Reinigungsmann – jeweils mit moderner Website auf dem Laptop"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Die Lösung</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Eine Website, die für Sie arbeitet – ohne dass Sie sich darum kümmern müssen.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">
              Ich übernehme alles: Struktur, Design, Texte, Bilder, SEO-Grundlagen und
              die technische Umsetzung. Sie liefern, was nur Sie wissen – ich kümmere
              mich um den Rest. Klar verständlich, ohne Fachbegriffe.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Komplette Umsetzung aus einer Hand",
                "Persönlicher Ansprechpartner in Leipzig",
                "Texte und Bilder, die zu Ihnen passen",
                "Faire Preise, transparent kommuniziert",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* LEISTUNGEN */}
      <Section className="bg-secondary/60">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Leistungen</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Alles, was eine kleine Firma in Leipzig wirklich braucht.
            </h2>
          </div>
          <Link to="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Alle Leistungen ansehen <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(24,32,38,0.3)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* REFERENZ */}
      <Section>
        <Eyebrow>Referenz</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Echte Projekte aus Leipzig – keine erfundenen Vorzeigekunden.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <a
            href="https://geyerliner.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(24,32,38,0.3)] md:col-span-7"
          >
            <img
              src="/images/gb-webdesign-referenz-geyerliner.webp"
              alt="geyerliner.de auf Laptop, Tablet und Smartphone – responsives Design für ein lokales Unternehmen in Leipzig"
              width={900}
              height={500}
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="p-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Aktuelles Projekt</p>
              <h3 className="mt-2 font-serif text-2xl text-foreground">geyerliner.de</h3>
              <p className="mt-3 text-sm text-foreground/75">
                Website für ein lokales Unternehmen – moderne Darstellung, klarer Aufbau
                und gute Auffindbarkeit. Live unter geyerliner.de.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Projekt ansehen <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
          <div className="rounded-2xl border border-dashed border-border bg-card/60 p-8 text-sm text-foreground/70 md:col-span-5">
            <p className="font-medium text-foreground">Weitere Referenzen folgen.</p>
            <p className="mt-3">
              Ich zeige nur Projekte, die wirklich von mir umgesetzt wurden – ohne
              Stockfotos oder erfundene Logos. Wenn Sie eine konkrete Branche sehen
              möchten, melden Sie sich gern.
            </p>
          </div>
        </div>
      </Section>

      {/* ABLAUF */}
      <Section className="bg-foreground text-background">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-background/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" /> Ablauf
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            In fünf einfachen Schritten zur neuen Website.
          </h2>
          <p className="mt-4 text-background/70">
            Klar strukturiert, ohne unnötige Meetings und ohne Wartezeiten.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-background/10 bg-background/[0.04] p-6">
              <span className="font-serif text-2xl text-[var(--brand-gold)]">{s.n}</span>
              <h3 className="mt-3 font-serif text-lg text-background">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* PREIS */}
      <Section>
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-12 md:p-14">
          <div className="md:col-span-7">
            <Eyebrow>Preisorientierung</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Websites ab 1.000 €.
            </h2>
            <p className="mt-4 text-foreground/75">
              Keine starren Pakete, keine versteckten Kosten. Der genaue Preis hängt
              vom Umfang ab – einseitige Websites starten bei <strong>1.000 €</strong>,
              umfangreichere Projekte und Relaunches werden individuell kalkuliert.
            </p>
            <p className="mt-3 text-foreground/75">
              Nach einem kurzen, kostenlosen Erstgespräch erhalten Sie ein klares,
              schriftliches Angebot. Erst dann entscheiden Sie.
            </p>
            <CtaRow compact />
          </div>
          <div className="rounded-2xl bg-secondary p-8 md:col-span-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Beispielhafte Orientierung</p>
            <ul className="mt-4 divide-y divide-border text-sm">
              {[
                ["Einseitige Website", "ab 1.000 €"],
                ["Mehrseitige Website", "ab 2.000 €"],
                ["Website-Relaunch", "ab 3.000 €"],
                ["Hosting & Wartung", "ab 30 €/Monat"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between py-3">
                  <span className="text-foreground/80">{k}</span>
                  <span className="font-medium text-foreground">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Richtwerte. Konkretes Angebot nach Erstgespräch.
            </p>
          </div>
        </div>
      </Section>

      {/* ZIELGRUPPE */}
      <Section className="bg-secondary/50">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Wrench, t: "Handwerksbetriebe", d: "Damit potenzielle Kunden Sie online finden und direkt anfragen können." },
            { icon: Utensils, t: "Restaurants & Cafés", d: "Speisekarte, Öffnungszeiten und Reservierung – klar und mobil optimiert." },
            { icon: Briefcase, t: "Lokale Dienstleister", d: "Vom Steuerberater bis zur Physiopraxis – seriös, verständlich, vertrauenswürdig." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-serif text-xl text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* KONTAKT CTA */}
      <Section>
        <div className="overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl">
                Lassen Sie uns 15 Minuten sprechen – unverbindlich und kostenlos.
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Sie sagen mir, was Sie vorhaben. Ich sage Ihnen ehrlich, ob und wie ich
                Ihnen helfen kann – und was es ungefähr kostet.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:-translate-y-0.5"
              >
                Erstgespräch anfragen <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
