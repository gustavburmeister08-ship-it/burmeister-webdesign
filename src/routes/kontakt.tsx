import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Webdesign Leipzig anfragen – Kostenloses Erstgespräch" },
      { name: "description", content: "Website in Leipzig erstellen lassen? Kostenloses Erstgespräch per Telefon, WhatsApp oder E-Mail. Gustav Burmeister Webdesign – persönlich, unverbindlich, schnell." },
      { property: "og:title", content: "Kostenloses Erstgespräch | Gustav Burmeister Webdesign Leipzig" },
      { property: "og:description", content: "Jetzt Erstgespräch anfragen – kostenlos, unverbindlich, persönlich. Telefon, WhatsApp oder E-Mail." },
      { property: "og:url", content: "https://burmeister-webdesign.com/kontakt" },
      { property: "og:image", content: "https://burmeister-webdesign.com/images/gb-webdesign-kontakt-hero.webp" },
    ],
    links: [{ rel: "canonical", href: "https://burmeister-webdesign.com/kontakt" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Startseite", item: "https://burmeister-webdesign.com/" },
            { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://burmeister-webdesign.com/kontakt" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://burmeister-webdesign.com/#business",
          name: "Gustav Burmeister Webdesign Leipzig",
          url: "https://burmeister-webdesign.com",
          telephone: "+493418605648",
          email: "gustav.burmeister08@gmail.com",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+493418605648",
            contactType: "customer service",
            availableLanguage: "German",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "An der Märchenwiese 40",
            addressLocality: "Leipzig",
            postalCode: "04277",
            addressRegion: "Sachsen",
            addressCountry: "DE",
          },
          areaServed: { "@type": "City", name: "Leipzig" },
        }),
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <Section className="pb-12">
        <Eyebrow>Kontakt</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Kostenloses Erstgespräch –{" "}
          <em className="italic text-primary">persönlich, unverbindlich.</em>
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
          Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb eines
          Werktags persönlich zurück – oft noch am selben Tag.
        </p>
      </Section>

      {/* ── FORMULAR + SIDEBAR ─────────────── */}
      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-12">

          {/* Formular */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
              <h2 className="font-serif text-xl text-foreground">Nachricht schreiben</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">Ich antworte werktags innerhalb von 24 Stunden.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 md:col-span-5">
            <img
              src="/images/gb-webdesign-kontakt-hero.webp"
              alt="Gustav Burmeister – persönlicher Ansprechpartner für Webdesign in Leipzig"
              width={800}
              height={500}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />

            {/* WhatsApp – Highlight */}
            <a
              href={CONTACT.whatsappHref}
              className="group flex items-start gap-4 rounded-2xl bg-primary p-6 text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle size={22} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-serif text-lg">Per WhatsApp schreiben</p>
                <p className="mt-1 text-sm text-primary-foreground/75">Schnellste Antwortzeit – auch für ein kurzes „Passt es?"</p>
              </div>
            </a>

            {/* Telefon */}
            <a
              href={CONTACT.phoneHref}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
            >
              <Phone size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-serif text-lg text-foreground">Anrufen</p>
                <p className="mt-0.5 text-sm text-foreground/65">{CONTACT.phoneDisplay}</p>
              </div>
            </a>

            {/* E-Mail */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
            >
              <Mail size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-serif text-lg text-foreground">E-Mail schreiben</p>
                <p className="mt-0.5 text-sm text-foreground/65">{CONTACT.email}</p>
              </div>
            </a>

            {/* Infos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-3 rounded-xl border border-dashed border-border p-4 text-sm text-foreground/65">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Leipzig</p>
                  <p className="mt-0.5 text-xs">Vor-Ort-Termine auf Anfrage</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-dashed border-border p-4 text-sm text-foreground/65">
                <Clock size={16} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Antwortzeit</p>
                  <p className="mt-0.5 text-xs">Innerhalb 24&nbsp;Std.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
