import { useLocation } from "@tanstack/react-router";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { useLocale, delocalizePath } from "@/lib/i18n/locale";

const LABELS: Record<"de" | "en", Record<string, string>> = {
  de: {
    "/": "Startseite",
    "/leistungen": "Leistungen",
    "/preise": "Preise",
    "/ablauf": "Ablauf",
    "/referenzen": "Referenzen",
    "/ueber-mich": "Über mich",
    "/kontakt": "Kontakt",
    "/impressum": "Impressum",
    "/datenschutz": "Datenschutz",
    "/ratgeber": "Ratgeber",
  },
  en: {
    "/": "Home",
    "/leistungen": "Services",
    "/preise": "Pricing",
    "/ablauf": "Process",
    "/referenzen": "References",
    "/ueber-mich": "About",
    "/kontakt": "Contact",
    "/impressum": "Legal Notice",
    "/datenschutz": "Privacy Policy",
    "/ratgeber": "Guides",
  },
};

export function SeoBreadcrumbs() {
  const location = useLocation();
  const locale = useLocale();
  const canonicalPath = delocalizePath(location.pathname).replace(/\/$/, "") || "/";
  const label = LABELS[locale][canonicalPath];

  if (!label) return null;

  const homeLabel = LABELS[locale]["/"];

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border/70 bg-background/92"
    >
      <ol className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-3 text-xs text-muted-foreground md:px-8">
        <li>
          {canonicalPath === "/" ? (
            <span aria-current="page" className="text-foreground">
              {homeLabel}
            </span>
          ) : (
            <LocalizedLink to="/" className="hover:text-foreground hover:underline">
              {homeLabel}
            </LocalizedLink>
          )}
        </li>
        {canonicalPath !== "/" && (
          <>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page" className="text-foreground">
                {label}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
