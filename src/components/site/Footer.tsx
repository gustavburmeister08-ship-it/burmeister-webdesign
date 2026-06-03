import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img
              src="/images/gb-webdesign-logo-lang-weiss.webp"
              alt="Burmeister Webdesign Leipzig"
              width={220}
              height={56}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-background/70">
            Moderne Websites für kleine Unternehmen in Leipzig und Umgebung. Persönlich
            betreut, verständlich erklärt und preiswert umgesetzt.
          </p>
          <p className="mt-4 text-xs text-background/55">
            Webdesigner in Leipzig · Websites für Handwerk, Gastronomie und lokale
            Dienstleister · Website-Relaunch · Landingpages · SEO-Grundoptimierung
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-background">Seiten</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li><Link to="/leistungen" className="hover:text-background">Leistungen</Link></li>
            <li><Link to="/referenzen" className="hover:text-background">Referenzen</Link></li>
            <li><Link to="/preise" className="hover:text-background">Preise</Link></li>
            <li><Link to="/ablauf" className="hover:text-background">Ablauf</Link></li>
            <li><Link to="/ueber-mich" className="hover:text-background">Über mich</Link></li>
            <li><Link to="/kontakt" className="hover:text-background">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-background">Kontakt</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li>{CONTACT.name}</li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-background">{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneHref} className="hover:text-background">{CONTACT.phoneDisplay}</a></li>
            <li><a href={CONTACT.whatsappHref} className="hover:text-background">WhatsApp schreiben</a></li>
          </ul>
          <ul className="mt-6 flex gap-4 text-xs text-background/55">
            <li><Link to="/impressum" className="hover:text-background">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-background">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-background/50 md:px-8">
          © {new Date().getFullYear()} {CONTACT.brand}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}