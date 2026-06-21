import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, Eyebrow } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { CONTACT } from "@/lib/contact";
import { breadcrumbJsonLd, socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      {
        title: "Kontakt - Webdesign Leipzig | kostenloses Erstgespräch",
      },
      {
        name: "description",
        content:
          "Kostenloses Erstgespräch für Ihre Website in Leipzig: Antwort innerhalb von 24 Stunden, Festpreis nach Erstgespräch, direkter Kontakt mit Gustav.",
      },
      ...socialMeta({
        title: "Kostenloses Erstgespräch - Webdesign Leipzig",
        description:
          "Website anfragen: persönlich, unverbindlich, Antwort innerhalb von 24 Stunden.",
        path: "/kontakt",
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-kontakt-hero.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: "https://burmeister-webdesign.com/kontakt" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/kontakt", "Kontakt")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "https://burmeister-webdesign.com/kontakt",
          name: "Kontakt Gustav Burmeister Webdesign Leipzig",
          mainEntity: {
            "@type": "LocalBusiness",
            "@id": "https://burmeister-webdesign.com/#business",
            name: "Gustav Burmeister Webdesign Leipzig",
            telephone: "+493418605648",
            email: "gustav.burmeister08@gmail.com",
            areaServed: { "@type": "City", name: "Leipzig" },
            address: {
              "@type": "PostalAddress",
              streetAddress: "An der Märchenwiese 40",
              postalCode: "04277",
              addressLocality: "Leipzig",
              addressRegion: "Sachsen",
              addressCountry: "DE",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
          },
        }),
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <Section className="pb-12">
        <Eyebrow>Kontakt</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          Kostenloses Erstgespräch anfragen.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
          Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von 24
          Stunden persönlich zurück und sage ehrlich, was sinnvoll ist.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Antwort innerhalb von 24 Stunden",
            "Festpreis nach Erstgespräch",
            "Keine Verpflichtung",
          ].map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="border-border bg-card text-foreground/70"
            >
              {item}
            </Badge>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-xl border border-border bg-card p-7 md:p-9">
              <h2 className="font-serif text-2xl text-foreground">
                Angebot einholen
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Je konkreter Ihre Nachricht, desto schneller kann ich
                einschätzen, was sinnvoll ist.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <aside className="space-y-4 md:col-span-5">
            <img
              src="/images/gb-webdesign-kontakt-hero.webp"
              alt="Gustav Burmeister als persönlicher Ansprechpartner für Webdesign in Leipzig"
              width={800}
              height={500}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl text-foreground">
                Was danach passiert
              </h2>
              <div className="mt-5 space-y-4">
                {[
                  ["1", "Ich antworte innerhalb von 24 Stunden."],
                  [
                    "2",
                    "Wir klären Ihr Vorhaben in einem kurzen Erstgespräch.",
                  ],
                  [
                    "3",
                    "Sie erhalten ein Festpreisangebot ohne Verpflichtung.",
                  ],
                ].map(([n, text]) => (
                  <div
                    key={n}
                    className="flex gap-3 text-sm text-foreground/70"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-primary">
                      {n}
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={CONTACT.whatsappHref}
              className="group flex items-start gap-4 rounded-xl bg-primary p-6 text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle size={22} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-serif text-lg">Per WhatsApp schreiben</p>
                <p className="mt-1 text-sm text-primary-foreground/75">
                  Direkt mit Gustav, kein Ticketsystem.
                </p>
              </div>
            </a>

            {[
              {
                icon: Phone,
                title: "Anrufen",
                text: CONTACT.phoneDisplay,
                href: CONTACT.phoneHref,
              },
              {
                icon: Mail,
                title: "E-Mail schreiben",
                text: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
            ].map(({ icon: Icon, title, text, href }) => (
              <a
                key={title}
                href={href}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
              >
                <Icon size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-serif text-lg text-foreground">{title}</p>
                  <p className="mt-0.5 text-sm text-foreground/65">{text}</p>
                </div>
              </a>
            ))}

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-dashed border-border p-4 text-sm text-foreground/65">
                <MapPin size={16} className="text-primary" />
                <p className="mt-2 font-medium text-foreground">
                  An der Märchenwiese 40
                </p>
                <p className="mt-0.5 text-xs">
                  04277 Leipzig · Vor-Ort-Termine auf Anfrage
                </p>
              </div>
              <div className="rounded-xl border border-dashed border-border p-4 text-sm text-foreground/65">
                <Clock size={16} className="text-primary" />
                <p className="mt-2 font-medium text-foreground">
                  Mo-Fr, 9-18 Uhr
                </p>
                <p className="mt-0.5 text-xs">
                  Antwort meist innerhalb von 24 Stunden
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm text-foreground/70">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-primary" />
              Zahlung erst nach Zusage. Das Erstgespräch bleibt kostenlos und
              unverbindlich.
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                title="Karte: Gustav Burmeister Webdesign in Leipzig"
                src="https://www.google.com/maps?q=An%20der%20M%C3%A4rchenwiese%2040%2C%2004277%20Leipzig&output=embed"
                width="600"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
              <div className="p-4 text-sm text-foreground/70">
                <p className="font-medium text-foreground">Servicegebiet</p>
                <p className="mt-1">
                  Webdesign für Leipzig, Umgebung und lokale Unternehmen in
                  Sachsen. Termine vor Ort nach Absprache.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
