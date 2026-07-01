import { MessageCircle, Phone } from "lucide-react";
import { EmailContact } from "@/components/site/EmailContact";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { CONTACT } from "@/lib/contact";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";

const AUTHORITY_LINKS = {
  de: [
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
  ],
  en: [
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
      label: "Google Business Profile Help",
    },
  ],
} as const;

export function Footer() {
  const locale = useLocale();
  const t = ui(locale);

  const NAV_LINKS = [
    { to: "/leistungen", label: t.nav.leistungen },
    { to: "/preise", label: t.nav.preise },
    { to: "/ablauf", label: t.nav.ablauf },
    { to: "/referenzen", label: t.nav.referenzen },
    { to: "/ratgeber", label: t.nav.ratgeber },
    { to: "/ueber-mich", label: t.nav.ueberMich },
    { to: "/kontakt", label: t.nav.kontakt },
  ];

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
              {t.footer.tagline}
            </p>
            <p className="mt-3 text-xs text-background/68">{t.footer.stats}</p>

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
              <EmailContact className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-4 py-2 text-xs text-background/75 transition-colors hover:border-background/30 hover:text-background">
                E-Mail
              </EmailContact>
            </div>
          </div>

          <div className="hidden md:col-span-1 md:block" />

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-background/70">
              {t.footer.pagesHeading}
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <LocalizedLink
                    to={link.to}
                    className="text-sm text-background/65 transition-colors hover:text-background"
                  >
                    {link.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-background/70">
              {t.footer.trustHeading}
            </p>
            <div className="mt-4 space-y-2.5 text-sm text-background/65">
              <p>{t.footer.serviceArea}</p>
              <p>{t.footer.address}</p>
              <p>{t.footer.hours}</p>
            </div>
            <div className="mt-8 rounded-lg border border-background/10 bg-background/5 p-4">
              <p className="text-xs font-medium text-background/75">
                {t.footer.directContact}
              </p>
              <p className="mt-1 text-xs text-background/50">
                {t.footer.directContactText}
              </p>
              <LocalizedLink
                to="/kontakt"
                className="mt-3 inline-block text-xs font-medium text-background/75 underline underline-offset-2 hover:text-background"
              >
                {t.footer.requestCta}
              </LocalizedLink>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-background/10 pt-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-background/70">
              {t.footer.foundationsHeading}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {AUTHORITY_LINKS[locale].map((link) => (
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
              {t.footer.legalHeading}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <LocalizedLink
                  to="/impressum"
                  className="text-xs text-background/60 underline underline-offset-4 transition-colors hover:text-background"
                >
                  {t.footer.impressum}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  to="/datenschutz"
                  className="text-xs text-background/60 underline underline-offset-4 transition-colors hover:text-background"
                >
                  {t.footer.datenschutz}
                </LocalizedLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-8">
          <p className="text-xs text-background/68">
            © {new Date().getFullYear()} {CONTACT.brand}. {t.footer.rightsReserved}
          </p>
          <p className="text-xs text-background/62">{t.footer.vatNotice}</p>
        </div>
      </div>
    </footer>
  );
}
