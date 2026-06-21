import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const NAV_LINKS = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/preise", label: "Preise" },
  { to: "/ablauf", label: "Ablauf" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/ueber-mich", label: "Über mich" },
  { to: "/kontakt", label: "Kontakt" },
];

const AUTHORITY_LINKS = [
  {
    href: "https://developers.google.com/search/docs",
    label: "Google Search Central",
  },
  {
    href: "https://pagespeed.web.dev/",
    label: "PageSpeed Insights",
  },
  {
    href: "https://support.google.com/business/",
    label: "Google Business Profil Hilfe",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-logo-lang-weiss.webp"
              alt="Gustav Burmeister Webdesign Leipzig"
              width={220}
              height={56}
              loading="lazy"
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/78">
              Premium wirkende Websites für lokale Unternehmen, die schnell
              starten wollen: Festpreis nach Erstgespräch, persönliche Betreuung
              und erste Vorschau nach 7 Tagen.
            </p>
            <p className="mt-3 text-xs text-background/68">
              Webdesigner Leipzig · Websites ab 790 EUR · Lighthouse 95+ · SEO
              Grundlage inklusive
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappHref}
                className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-4 py-2 text-xs text-background/75 transition-colors hover:border-background/30 hover:text-background"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-4 py-2 text-xs text-background/75 transition-colors hover:border-background/30 hover:text-background"
              >
                <Phone size={13} /> {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-4 py-2 text-xs text-background/75 transition-colors hover:border-background/30 hover:text-background"
              >
                <Mail size={13} /> E-Mail
              </a>
            </div>
          </div>

          <div className="hidden md:col-span-1 md:block" />

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-background/70">
              Seiten
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/65 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-background/70">
              Vertrauen
            </p>
            <div className="mt-4 space-y-2.5 text-sm text-background/65">
              <p>Servicegebiet: Leipzig und Umgebung</p>
              <p>Adresse: An der Märchenwiese 40, 04277 Leipzig</p>
              <p>Erreichbar: Mo-Fr, 9-18 Uhr</p>
            </div>
            <div className="mt-8 rounded-lg border border-background/10 bg-background/5 p-4">
              <p className="text-xs font-medium text-background/75">
                Direkter Kontakt mit Gustav
              </p>
              <p className="mt-1 text-xs text-background/50">
                Kein Ticketsystem. Antwort in der Regel innerhalb von 24 h.
              </p>
              <Link
                to="/kontakt"
                className="mt-3 inline-block text-xs font-medium text-background/75 underline underline-offset-2 hover:text-background"
              >
                Erstgespräch anfragen →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-background/10 pt-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-background/70">
              Fachliche Grundlagen
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {AUTHORITY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-xs text-background/60 underline underline-offset-4 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-background/70">
              Rechtliches
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link
                  to="/impressum"
                  className="text-xs text-background/60 underline underline-offset-4 transition-colors hover:text-background"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-xs text-background/60 underline underline-offset-4 transition-colors hover:text-background"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="text-xs text-background/68">
            © {new Date().getFullYear()} {CONTACT.brand}. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-xs text-background/62">
            Gemäß § 19 UStG keine Umsatzsteuer.
          </p>
        </div>
      </div>
    </footer>
  );
}
