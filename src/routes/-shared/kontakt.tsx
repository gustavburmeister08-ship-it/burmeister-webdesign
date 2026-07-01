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
import { EmailContact, EmailText } from "@/components/site/EmailContact";
import { CONTACT } from "@/lib/contact";
import { breadcrumbJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    metaTitle: "Kontakt - Webdesign Leipzig | kostenloses Erstgespräch",
    metaDescription:
      "Kostenloses Erstgespräch für Ihre Website in Leipzig: Antwort innerhalb von 24 Stunden, Festpreis nach Erstgespräch, direkter Kontakt mit Gustav.",
    ogTitle: "Kostenloses Erstgespräch - Webdesign Leipzig",
    ogDescription:
      "Website anfragen: persönlich, unverbindlich, Antwort innerhalb von 24 Stunden.",
    breadcrumbLabel: "Kontakt",
    contactPageName: "Kontakt Gustav Burmeister Webdesign Leipzig",
    eyebrow: "Kontakt",
    heroTitle: "Kostenloses Erstgespräch anfragen.",
    heroText:
      "Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von 24 Stunden persönlich zurück und sage ehrlich, was sinnvoll ist.",
    badges: [
      "Antwort innerhalb von 24 Stunden",
      "Festpreis nach Erstgespräch",
      "Keine Verpflichtung",
    ],
    formHeading: "Angebot einholen",
    formText:
      "Je konkreter Ihre Nachricht, desto schneller kann ich einschätzen, was sinnvoll ist.",
    heroAlt: "Gustav Burmeister als persönlicher Ansprechpartner für Webdesign in Leipzig",
    afterHeading: "Was danach passiert",
    steps: [
      "Ich antworte innerhalb von 24 Stunden.",
      "Wir klären Ihr Vorhaben in einem kurzen Erstgespräch.",
      "Sie erhalten ein Festpreisangebot ohne Verpflichtung.",
    ],
    whatsapp: "Per WhatsApp schreiben",
    whatsappText: "Direkt mit Gustav, kein Ticketsystem.",
    call: "Anrufen",
    emailCta: "E-Mail schreiben",
    addressLine: "An der Märchenwiese 40",
    addressSub: "04277 Leipzig · Vor-Ort-Termine auf Anfrage",
    hoursLine: "Mo-Fr, 9-18 Uhr",
    hoursSub: "Antwort meist innerhalb von 24 Stunden",
    paymentNotice:
      "Zahlung erst nach Zusage. Das Erstgespräch bleibt kostenlos und unverbindlich.",
    mapTitle: "Karte: Gustav Burmeister Webdesign in Leipzig",
    serviceAreaHeading: "Servicegebiet",
    serviceAreaText:
      "Webdesign für Leipzig, Umgebung und lokale Unternehmen in Sachsen. Termine vor Ort nach Absprache.",
  },
  en: {
    metaTitle: "Contact - Web Design Leipzig | Free Consultation",
    metaDescription:
      "Free consultation for your website in Leipzig: reply within 24 hours, fixed price after the consultation, direct contact with Gustav.",
    ogTitle: "Free Consultation - Web Design Leipzig",
    ogDescription:
      "Request a website: personal, no obligation, reply within 24 hours.",
    breadcrumbLabel: "Contact",
    contactPageName: "Contact Gustav Burmeister Web Design Leipzig",
    eyebrow: "Contact",
    heroTitle: "Request your free consultation.",
    heroText:
      "Write a few lines about what you have in mind. I'll get back to you personally within 24 hours and tell you honestly what makes sense.",
    badges: ["Reply within 24 hours", "Fixed price after consultation", "No obligation"],
    formHeading: "Request a quote",
    formText:
      "The more specific your message, the faster I can assess what makes sense.",
    heroAlt: "Gustav Burmeister as your personal contact for web design in Leipzig",
    afterHeading: "What happens next",
    steps: [
      "I reply within 24 hours.",
      "We clarify your project in a short initial call.",
      "You receive a fixed-price offer with no obligation.",
    ],
    whatsapp: "Message on WhatsApp",
    whatsappText: "Directly with Gustav, no ticket system.",
    call: "Call",
    emailCta: "Send an email",
    addressLine: "An der Märchenwiese 40",
    addressSub: "04277 Leipzig, Germany · On-site appointments by request",
    hoursLine: "Mon-Fri, 9am-6pm",
    hoursSub: "Reply usually within 24 hours",
    paymentNotice:
      "Payment only after acceptance. The initial consultation stays free and non-binding.",
    mapTitle: "Map: Gustav Burmeister Web Design in Leipzig",
    serviceAreaHeading: "Service area",
    serviceAreaText:
      "Web design for Leipzig, the surrounding area and local businesses in Saxony. On-site appointments by arrangement.",
  },
} as const;

export function kontaktHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/kontakt" : "/kontakt";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
        image: "https://burmeister-webdesign.com/images/gb-webdesign-kontakt-hero.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/kontakt"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(path, t.breadcrumbLabel, locale)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `https://burmeister-webdesign.com${path}`,
          name: t.contactPageName,
          mainEntity: {
            "@type": "LocalBusiness",
            "@id": "https://burmeister-webdesign.com/#business",
            name: "Gustav Burmeister Webdesign Leipzig",
            telephone: "+493418605648",
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
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
            ],
          },
        }),
      },
    ],
  };
}

export function KontaktPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <Section className="pb-12">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-foreground md:text-5xl">
          {t.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-foreground/70">
          {t.heroText}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {t.badges.map((item) => (
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
                {t.formHeading}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.formText}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <aside className="space-y-4 md:col-span-5">
            <img
              src="/images/gb-webdesign-kontakt-hero.webp"
              alt={t.heroAlt}
              width={800}
              height={500}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl text-foreground">
                {t.afterHeading}
              </h2>
              <div className="mt-5 space-y-4">
                {t.steps.map((text, i) => (
                  <div
                    key={text}
                    className="flex gap-3 text-sm text-foreground/70"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-primary">
                      {i + 1}
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
                <p className="font-serif text-lg">{t.whatsapp}</p>
                <p className="mt-1 text-sm text-primary-foreground/75">
                  {t.whatsappText}
                </p>
              </div>
            </a>

            <a
              href={CONTACT.phoneHref}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
            >
              <Phone size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-serif text-lg text-foreground">{t.call}</p>
                <p className="mt-0.5 text-sm text-foreground/65">
                  {CONTACT.phoneDisplay}
                </p>
              </div>
            </a>

            <EmailContact
              icon={false}
              className="flex w-full items-start gap-4 rounded-xl border border-border bg-card p-5 text-left transition-colors hover:bg-secondary"
            >
              <Mail size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-serif text-lg text-foreground">
                  {t.emailCta}
                </p>
                <p className="mt-0.5 text-sm text-foreground/65">
                  <EmailText />
                </p>
              </div>
            </EmailContact>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-dashed border-border p-4 text-sm text-foreground/65">
                <MapPin size={16} className="text-primary" />
                <p className="mt-2 font-medium text-foreground">
                  {t.addressLine}
                </p>
                <p className="mt-0.5 text-xs">{t.addressSub}</p>
              </div>
              <div className="rounded-xl border border-dashed border-border p-4 text-sm text-foreground/65">
                <Clock size={16} className="text-primary" />
                <p className="mt-2 font-medium text-foreground">
                  {t.hoursLine}
                </p>
                <p className="mt-0.5 text-xs">{t.hoursSub}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-sm text-foreground/70">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-primary" />
              {t.paymentNotice}
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                title={t.mapTitle}
                src="https://www.google.com/maps?q=An%20der%20M%C3%A4rchenwiese%2040%2C%2004277%20Leipzig&output=embed"
                width="600"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
              <div className="p-4 text-sm text-foreground/70">
                <p className="font-medium text-foreground">
                  {t.serviceAreaHeading}
                </p>
                <p className="mt-1">{t.serviceAreaText}</p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
