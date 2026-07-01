import type { Locale } from "@/lib/i18n/locale";

export const UI = {
  de: {
    nav: {
      start: "Start",
      leistungen: "Leistungen",
      preise: "Preise",
      ablauf: "Ablauf",
      referenzen: "Referenzen",
      ratgeber: "Ratgeber",
      ueberMich: "Über mich",
      kontakt: "Kontakt",
    },
    headerCta: "Kostenloses Erstgespräch",
    menuOpen: "Menü öffnen",
    mobileNavLabel: "Mobile Navigation",
    mobileNavTitle: "Navigation",
    mobileNavText: "Schnell zu Leistungen, Preisen, Ablauf und Kontakt.",
    skipToContent: "Zum Inhalt springen",
    languageSwitchLabel: "In English anzeigen",
    footer: {
      tagline:
        "Premium wirkende Websites für lokale Unternehmen, die schnell starten wollen: Festpreis nach Erstgespräch, persönliche Betreuung und erste Vorschau nach 7 Tagen.",
      stats:
        "Webdesigner Leipzig · Websites ab 790 EUR · Lighthouse 95+ · SEO Grundlage inklusive",
      pagesHeading: "Seiten",
      trustHeading: "Vertrauen",
      serviceArea: "Servicegebiet: Leipzig und Umgebung",
      address: "Adresse: An der Märchenwiese 40, 04277 Leipzig",
      hours: "Erreichbar: Mo-Fr, 9-18 Uhr",
      directContact: "Direkter Kontakt mit Gustav",
      directContactText: "Kein Ticketsystem. Antwort in der Regel innerhalb von 24 h.",
      requestCta: "Erstgespräch anfragen →",
      foundationsHeading: "Fachliche Grundlagen",
      legalHeading: "Rechtliches",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      rightsReserved: "Alle Rechte vorbehalten.",
      vatNotice: "Gemäß § 19 UStG keine Umsatzsteuer.",
    },
    notFound: {
      title: "Seite nicht gefunden",
      text: "Die aufgerufene Seite existiert nicht oder wurde verschoben.",
      cta: "Zur Startseite",
    },
    error: {
      title: "Seite konnte nicht geladen werden",
      text: "Es ist ein Fehler aufgetreten. Versuchen Sie es erneut oder gehen Sie zur Startseite.",
      retry: "Erneut versuchen",
      cta: "Zur Startseite",
    },
  },
  en: {
    nav: {
      start: "Home",
      leistungen: "Services",
      preise: "Pricing",
      ablauf: "Process",
      referenzen: "References",
      ratgeber: "Guides",
      ueberMich: "About",
      kontakt: "Contact",
    },
    headerCta: "Free Consultation",
    menuOpen: "Open menu",
    mobileNavLabel: "Mobile navigation",
    mobileNavTitle: "Navigation",
    mobileNavText: "Quick access to services, pricing, process and contact.",
    skipToContent: "Skip to content",
    languageSwitchLabel: "Auf Deutsch anzeigen",
    footer: {
      tagline:
        "Premium-feeling websites for local businesses that want to launch quickly: fixed price after the initial consultation, personal support and a first preview after 7 days.",
      stats:
        "Web designer Leipzig · Websites from €790 · Lighthouse 95+ · SEO basics included",
      pagesHeading: "Pages",
      trustHeading: "Trust",
      serviceArea: "Service area: Leipzig and surroundings",
      address: "Address: An der Märchenwiese 40, 04277 Leipzig, Germany",
      hours: "Available: Mon-Fri, 9am-6pm",
      directContact: "Direct contact with Gustav",
      directContactText: "No ticket system. Reply usually within 24 hours.",
      requestCta: "Request a consultation →",
      foundationsHeading: "Resources",
      legalHeading: "Legal",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
      rightsReserved: "All rights reserved.",
      vatNotice: "No VAT charged under § 19 UStG (German small business regulation).",
    },
    notFound: {
      title: "Page not found",
      text: "The page you requested does not exist or has been moved.",
      cta: "Go to homepage",
    },
    error: {
      title: "Page could not be loaded",
      text: "An error occurred. Please try again or go to the homepage.",
      retry: "Try again",
      cta: "Go to homepage",
    },
  },
} as const satisfies Record<Locale, unknown>;

export function ui(locale: Locale) {
  return UI[locale];
}
