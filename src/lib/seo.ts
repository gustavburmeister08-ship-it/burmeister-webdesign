export const SITE_URL = "https://burmeister-webdesign.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/gb-webdesign-leipzig.webp`;

type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

export function socialMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): MetaTag[] {
  const url = `${SITE_URL}${path}`;

  return [
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export function breadcrumbJsonLd(path: string, label: string) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: `${SITE_URL}/`,
    },
  ];

  if (path !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: label,
      item: `${SITE_URL}${path}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Webdesign",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Leipzig" },
      { "@type": "AdministrativeArea", name: "Sachsen" },
    ],
    url: `${SITE_URL}${path}`,
  };
}
