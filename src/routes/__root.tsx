import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { SeoBreadcrumbs } from "@/components/site/SeoBreadcrumbs";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Seite nicht gefunden
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die aufgerufene Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Es ist ein Fehler aufgetreten. Versuchen Sie es erneut oder gehen Sie
          zur Startseite.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gustav Burmeister Webdesign Leipzig – Website ab 790 €" },
      {
        name: "description",
        content:
          "Webdesigner in Leipzig für kleine Unternehmen. Websites ab 790 € – schnell umgesetzt, verständlich erklärt. Jetzt kostenloses Erstgespräch anfragen.",
      },
      { name: "author", content: "Gustav Burmeister" },
      {
        property: "og:site_name",
        content: "Gustav Burmeister Webdesign Leipzig",
      },
      {
        property: "og:title",
        content: "Gustav Burmeister Webdesign Leipzig",
      },
      {
        property: "og:description",
        content: "Websites für kleine Unternehmen in Leipzig – ab 790 €.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Gustav Burmeister Webdesign Leipzig – Website ab 790 €",
      },
      {
        name: "twitter:description",
        content:
          "Webdesigner in Leipzig für kleine Unternehmen. Websites ab 790 € – schnell umgesetzt, verständlich erklärt.",
      },
      {
        property: "og:image",
        content:
          "https://burmeister-webdesign.com/images/gb-webdesign-leipzig.webp",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:image",
        content:
          "https://burmeister-webdesign.com/images/gb-webdesign-leipzig.webp",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://burmeister-webdesign.com/#website",
          url: "https://burmeister-webdesign.com",
          name: "Gustav Burmeister Webdesign Leipzig",
          description:
            "Webdesign für kleine Unternehmen in Leipzig – Websites ab 790 €",
          inLanguage: "de-DE",
          publisher: { "@id": "https://burmeister-webdesign.com/#business" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://burmeister-webdesign.com/#organization",
          name: "Gustav Burmeister Webdesign Leipzig",
          url: "https://burmeister-webdesign.com",
          logo: "https://burmeister-webdesign.com/images/gb-webdesign-logo.webp",
          telephone: "+493418605648",
          founder: { "@type": "Person", name: "Gustav Burmeister" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "An der Märchenwiese 40",
            addressLocality: "Leipzig",
            addressRegion: "Sachsen",
            postalCode: "04277",
            addressCountry: "DE",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://burmeister-webdesign.com/#business",
          name: "Gustav Burmeister Webdesign Leipzig",
          description:
            "Webdesign-Angebot für kleine Unternehmen in Leipzig: Websites, Relaunches, Landingpages, SEO-Grundlagen, Hosting und Wartung.",
          url: "https://burmeister-webdesign.com",
          logo: "https://burmeister-webdesign.com/images/gb-webdesign-logo.webp",
          image:
            "https://burmeister-webdesign.com/images/gb-webdesign-leipzig.webp",
          telephone: "+493418605648",
          founder: { "@type": "Person", name: "Gustav Burmeister" },
          parentOrganization: {
            "@id": "https://burmeister-webdesign.com/#organization",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "An der Märchenwiese 40",
            addressLocality: "Leipzig",
            addressRegion: "Sachsen",
            postalCode: "04277",
            addressCountry: "DE",
          },
          areaServed: [
            { "@type": "City", name: "Leipzig" },
            { "@type": "AdministrativeArea", name: "Sachsen" },
          ],
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
          priceRange: "€–€€",
          serviceType: "Webdesign",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Webdesign-Leistungen",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website-Erstellung",
                  description:
                    "Neue Websites für kleine Unternehmen in Leipzig.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website-Relaunch",
                  description: "Modernisierung veralteter Websites.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Landingpages",
                  description: "Fokussierte Einzelseiten für Kampagnen.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO-Grundoptimierung",
                  description:
                    "Technische und inhaltliche SEO für lokale Sichtbarkeit.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Google Business Profil",
                  description:
                    "Einrichtung und Pflege des Google-Business-Eintrags.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Hosting & Wartung",
                  description:
                    "Sicheres Hosting und laufende Website-Pflege ab 30 €/Monat.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Favicon – hardcoded so they always appear before HeadContent */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <SeoBreadcrumbs />
      <main id="main-content" className="flex-1">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
