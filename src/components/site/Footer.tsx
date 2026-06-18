import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const NAV_LINKS = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/preise", label: "Preise" },
  { to: "/ablauf", label: "Ablauf" },
  { to: "/ueber-mich", label: "Über mich" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-logo-lang-weiss.webp"
              alt="Gustav Burmeister Webdesign Leipzig"
              width={220}
              height={56}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
              Moderne Websites für kleine Unternehmen in Leipzig und Umgebung –
              persönlich betreut, verständlich erklärt und preiswert umgesetzt.
            </p>
            <p className="mt-3 text-xs text-background/35">
              Webdesigner in Leipzig · Websites ab 790 € · Website-Relaunch · SEO Leipzig
            </p>

            {/* Contact */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappHref}
                className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-4 py-2 text-xs text-background/70 transition-colors hover:border-background/30 hover:text-background"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-4 py-2 text-xs text-background/70 transition-colors hover:border-background/30 hover:text-background"
              >
                <Phone size={13} /> {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-4 py-2 text-xs text-background/70 transition-colors hover:border-background/30 hover:text-background"
              >
                <Mail size={13} /> E-Mail
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:col-span-1 md:block" />

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-background/40">Seiten</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-background/40">Rechtliches</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/impressum" className="text-sm text-background/60 transition-colors hover:text-background">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-sm text-background/60 transition-colors hover:text-background">Datenschutz</Link></li>
            </ul>
            <div className="mt-8 rounded-xl border border-background/10 bg-background/5 p-4">
              <p className="text-xs font-medium text-background/70">Freie Kapazität?</p>
              <p className="mt-1 text-xs text-background/45">Jetzt unverbindliches Erstgespräch vereinbaren.</p>
              <Link
                to="/kontakt"
                className="mt-3 inline-block text-xs font-medium text-background/70 underline underline-offset-2 hover:text-background"
              >
                Erstgespräch anfragen →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="text-xs text-background/35">
            © {new Date().getFullYear()} {CONTACT.brand}. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-background/25">
            Gemäß § 19 UStG keine Umsatzsteuer.
          </p>
        </div>
      </div>
    </footer>
  );
}
