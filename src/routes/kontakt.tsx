import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
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
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <Section className="pb-10">
        <Eyebrow>Kontakt</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Kostenloses Erstgespräch – persönlich, unverbindlich, in unter 15 Minuten
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/75">
          Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb eines
          Werktags persönlich zurück – oft am selben Tag.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4 md:col-span-5">
            <img
              src="/images/gb-webdesign-kontakt-hero.webp"
              alt="Gustav Burmeister – persönlicher Ansprechpartner für Webdesign in Leipzig"
              width={800}
              height={500}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
            <a
              href={CONTACT.whatsappHref}
              className="flex items-start gap-4 rounded-2xl bg-primary p-6 text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={22} className="mt-0.5" />
              <div>
                <p className="font-serif text-lg">Per WhatsApp schreiben</p>
                <p className="text-sm text-primary-foreground/80">Schnellste Antwortzeit. Auch für ein kurzes „Passt es?“.</p>
              </div>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:bg-secondary"
            >
              <Phone size={22} className="mt-0.5 text-primary" />
              <div>
                <p className="font-serif text-lg text-foreground">Anrufen</p>
                <p className="text-sm text-foreground/70">{CONTACT.phoneDisplay}</p>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:bg-secondary"
            >
              <Mail size={22} className="mt-0.5 text-primary" />
              <div>
                <p className="font-serif text-lg text-foreground">E-Mail</p>
                <p className="text-sm text-foreground/70">{CONTACT.email}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-dashed border-border p-6 text-sm text-foreground/70">
              <MapPin size={20} className="mt-0.5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Leipzig & Umgebung</p>
                <p className="mt-1">
                  Termine vor Ort auf Anfrage. Die Zusammenarbeit funktioniert genauso
                  gut komplett digital.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}