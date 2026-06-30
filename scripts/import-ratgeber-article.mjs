/**
 * import-ratgeber-article.mjs
 *
 * Importiert ein fertiges Artikel-Paket vom burmeister-webdesign-ratgeber-bot
 * in die burmeister-webdesign.com Website (TanStack Start, dateibasiertes
 * Routing). Anders als beim Geyerliner-Original erzeugt dieses Skript eine
 * EIGENE, literale Routendatei pro Artikel (kein App.tsx-Routen-Array, kein
 * vite.config-Prerender-Eintrag nötig - TanStack/Nitro erkennt Dateirouten
 * automatisch).
 *
 * Verwendung:
 *   node scripts/import-ratgeber-article.mjs <EXPORT_PFAD> [--overwrite] [--skip-build]
 *
 * Beispiel:
 *   node scripts/import-ratgeber-article.mjs "C:/Users/gusta/Desktop/Website-Business/burmeister-webdesign-ratgeber-bot/exports/website-relaunch-kosten-leipzig"
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://burmeister-webdesign.com';

// ── Datum ────────────────────────────────────────────────────────────────────

const TODAY = new Date().toISOString().split('T')[0];
function todayDisplayDE() {
  const [y, m, d] = TODAY.split('-').map(Number);
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  return `${d}. ${months[m - 1]} ${y}`;
}
function displayDateDE(iso) {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return todayDisplayDE();
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  return `${d}. ${months[m - 1]} ${y}`;
}

// ── Argument-Parsing ─────────────────────────────────────────────────────────

const rawArgs = process.argv.slice(2);
const exportPathArg = rawArgs.find(a => !a.startsWith('-'));
const overwrite = rawArgs.includes('--overwrite');
const skipBuild = rawArgs.includes('--skip-build');

if (!exportPathArg) {
  console.error('Verwendung: node scripts/import-ratgeber-article.mjs <EXPORT_PFAD> [--overwrite] [--skip-build]');
  process.exit(1);
}

const EXPORT_DIR = path.resolve(exportPathArg);

// ── Helfer ───────────────────────────────────────────────────────────────────

function check(condition, message) {
  if (!condition) {
    console.error(`\n[FEHLER] ${message}\n`);
    process.exit(1);
  }
}

function warn(message) {
  console.warn(`[WARNUNG] ${message}`);
}

function log(message) {
  console.log(`[import] ${message}`);
}

function readJsonFile(filePath, required = true) {
  if (!fs.existsSync(filePath)) {
    if (required) check(false, `Pflichtdatei fehlt: ${filePath}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    check(false, `JSON-Parse-Fehler in ${filePath}: ${e.message}`);
  }
}

function wordCount(text) {
  return String(text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

const SOURCE_IMAGE_EXTS = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];

function findSourceImage(imagesDir, filename) {
  if (!filename || !fs.existsSync(imagesDir)) return null;
  const base = filename.replace(/\.[a-z0-9]+$/i, '').toLowerCase();
  const files = fs.readdirSync(imagesDir);
  const exactWebp = files.find(f => f.toLowerCase() === `${base}.webp`);
  if (exactWebp) return exactWebp;
  for (const ext of SOURCE_IMAGE_EXTS) {
    const match = files.find(f => f.toLowerCase() === `${base}${ext}`);
    if (match) return match;
  }
  return files.find(f =>
    f.replace(/\.[a-z0-9]+$/i, '').toLowerCase() === base &&
    SOURCE_IMAGE_EXTS.includes(path.extname(f).toLowerCase())
  ) || null;
}

function sourceDisplayName(img) {
  const map = {
    pexels: 'Pexels',
    unsplash: 'Unsplash',
    pixabay: 'Pixabay',
    wikimedia: 'Wikimedia Commons',
    'other-licensed': 'Lizenzquelle',
  };
  return map[img.sourceType] || null;
}

function imageLicenseUrl(sourceType) {
  const map = {
    pexels: 'https://www.pexels.com/license/',
    unsplash: 'https://unsplash.com/license',
    pixabay: 'https://pixabay.com/service/license-summary/',
  };
  return map[sourceType] || 'https://www.pexels.com/license/';
}

// ── Schritt 1: Export-Paket laden ─────────────────────────────────────────────

log(`Export-Pfad: ${EXPORT_DIR}`);
check(fs.existsSync(EXPORT_DIR), `Export-Ordner nicht gefunden: ${EXPORT_DIR}`);
check(fs.existsSync(path.join(EXPORT_DIR, 'article.json')),
  'article.json fehlt im Export-Paket. Ist das wirklich ein gültiges Bot-Export-Paket?');

const article = readJsonFile(path.join(EXPORT_DIR, 'article.json'));
const seoFile = readJsonFile(path.join(EXPORT_DIR, 'seo.json'), false);
const schemaFile = readJsonFile(path.join(EXPORT_DIR, 'schema.json'), false);
const imageManifestFile = readJsonFile(path.join(EXPORT_DIR, 'image-manifest.json'), false);
const sourcesFile = readJsonFile(path.join(EXPORT_DIR, 'sources.json'), false);

const seoData = seoFile || {};
const schemaData = schemaFile || {};
const imageManifest = imageManifestFile || { images: article.images || [] };
const manifestImages = Array.isArray(imageManifest.images) ? imageManifest.images : [];

// ── Schritt 2: Pflichtfelder prüfen ──────────────────────────────────────────

const slug = article.slug;
check(
  slug && typeof slug === 'string' && /^[a-z0-9-]+$/.test(slug),
  `Ungültiger oder fehlender Slug: "${slug}". Erlaubt: Kleinbuchstaben, Ziffern, Bindestriche.`
);

const h1 = article.h1 || article.title;
check(h1, 'Pflichtfeld fehlt: h1 (oder title)');

const url = article.url || `/ratgeber/${slug}`;
const canonical = article.canonicalUrl || `${SITE_URL}${url}`;

const seoTitle = seoData.title || article.metaTitle;
check(
  seoTitle && seoTitle.length >= 10 && seoTitle.length <= 70,
  `Meta Title fehlt, zu kurz oder zu lang (10-70 Zeichen): "${seoTitle}"`
);

const seoDescription = seoData.description || article.metaDescription;
check(
  seoDescription && seoDescription.length >= 50 && seoDescription.length <= 170,
  `Meta Description fehlt, zu kurz oder zu lang (50-170 Zeichen): "${seoDescription}"`
);

const faqRaw = article.faq || [];
check(Array.isArray(faqRaw), 'faq muss ein Array sein');
if (faqRaw.length === 0) warn('Keine FAQ-Einträge gefunden - FAQ-Bereich wird ausgelassen.');

if (!article.cta) warn('Kein CTA-Objekt gefunden - Standard-CTA wird verwendet.');

const qc = article.qualityChecks || {};
const reviewWarnings = [];
if (article.review?.required) {
  for (const note of (article.review.notes || [])) reviewWarnings.push(`Review-Hinweis: ${note}`);
}

log(`Slug: ${slug}`);
log(`H1: ${h1}`);
log(`Canonical: ${canonical}`);

// ── Schritt 3: Auf Duplikat prüfen ───────────────────────────────────────────

const ROUTE_FILE_PATH = path.join(ROOT, 'src', 'routes', 'ratgeber', `${slug}.tsx`);
if (fs.existsSync(ROUTE_FILE_PATH)) {
  check(overwrite, `Routendatei für "${slug}" existiert bereits. Benutze --overwrite zum Überschreiben.`);
  warn(`--overwrite: "${slug}" wird überschrieben.`);
}

// ── Schritt 4: Daten normalisieren ────────────────────────────────────────────

const rawSections = article.sections || [];
const introSection = rawSections.find(s => s.type === 'intro');
const introHtml = introSection?.content || article.intro || '';
const contentSections = rawSections.filter(s => s.type !== 'intro');

const sections = contentSections.map((s, i) => ({
  id: s.id || `abschnitt-${i + 1}`,
  h2: s.heading || `[FEHLER: Überschrift fehlt - Abschnitt ${i + 1}]`,
  body: s.content || '',
}));

const faqItems = faqRaw
  .map(f => ({ question: f.question || '', answer: f.answer || '' }))
  .filter(f => f.question && f.answer);

const sourcesRaw = (sourcesFile && Array.isArray(sourcesFile.sources))
  ? sourcesFile.sources
  : (Array.isArray(article.sources) ? article.sources : []);
const sourceItems = sourcesRaw
  .map(s => ({ title: s.title || '', url: s.url || '' }))
  .filter(s => s.title && s.url && s.title !== 'TODO Quelle 1' && s.url !== 'TODO');

const articleDate = article.datePublished || TODAY;
const articleDateDisplay = displayDateDE(articleDate);

const allTextForWordcount = [
  introHtml,
  ...sections.map(s => `${s.h2}\n${s.body}`),
  ...faqItems.map(f => `${f.question}\n${f.answer}`),
].join('\n');
const wc = wordCount(allTextForWordcount);
const readTime = article.readTime || `${Math.max(4, Math.ceil(wc / 200))} Min.`;

const category = article.category || 'Ratgeber';

function toAbsoluteUrl(raw) {
  if (!raw) return null;
  if (raw.startsWith('http')) return raw;
  return `${SITE_URL}${raw.startsWith('/') ? raw : `/${raw}`}`;
}
const ogImage = toAbsoluteUrl(seoData.ogImage)
  || (manifestImages[0] ? toAbsoluteUrl(`/images/ratgeber/${slug}/${manifestImages[0].filename}`) : toAbsoluteUrl(`/images/ratgeber/${slug}/${slug}-hero.webp`));

const heroManifestImg = manifestImages.find(img => img.slot === 'hero');
const heroImagePath = article.heroImage || `/images/ratgeber/${slug}/${slug}-hero.webp`;
const heroAlt = heroManifestImg?.alt || h1;

const defaultCta = {
  headline: 'Sie möchten eine neue Website für Ihr Unternehmen?',
  text: `Ich prüfe mit Ihnen, welche Lösung zu Ihrem Unternehmen passt - passend zum Thema ${article.primaryKeyword || h1}.`,
  buttons: [{ label: 'Kostenloses Erstgespräch', href: '/kontakt' }],
};
const ctaData = article.cta && article.cta.headline ? article.cta : defaultCta;
if (!ctaData.buttons || ctaData.buttons.length === 0) ctaData.buttons = defaultCta.buttons;
// Bekannte, real existierende interne Routen - nur diese dürfen als <Link to="...">
// im generierten Code landen (sonst bricht der TanStack-Routen-Typecheck).
const KNOWN_ROUTES = new Set(['/leistungen', '/preise', '/referenzen', '/ablauf', '/kontakt', '/ueber-mich', '/impressum', '/datenschutz', '/ratgeber']);
function safeCtaHref(href) {
  return KNOWN_ROUTES.has(href) ? href : '/kontakt';
}

// ── Schemas ───────────────────────────────────────────────────────────────────

const blogPostingSchema = schemaData.blogPosting || {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  inLanguage: 'de',
  headline: h1,
  description: seoDescription,
  image: ogImage,
  author: { '@type': 'Organization', name: 'Burmeister Webdesign' },
  publisher: {
    '@type': 'Organization',
    name: 'Burmeister Webdesign',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/gb-webdesign-logo-lang-schwarz-320.webp` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  datePublished: articleDate,
  dateModified: TODAY,
};
blogPostingSchema.dateModified = TODAY;

const faqPageSchema = faqItems.length > 0 ? {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
} : null;

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: `${SITE_URL}/ratgeber` },
    { '@type': 'ListItem', position: 3, name: h1, item: canonical },
  ],
};

const imageSchemaObjects = manifestImages
  .filter(img => img.sourceType && !['manual-placeholder', 'own'].includes(img.sourceType))
  .map(img => {
    const srcName = sourceDisplayName(img);
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}/images/ratgeber/${slug}/${img.filename}`,
      license: imageLicenseUrl(img.sourceType),
      acquireLicensePage: img.sourceUrl || imageLicenseUrl(img.sourceType),
      creditText: img.photographer && srcName ? `${img.photographer} / ${srcName}` : (img.photographer || srcName || img.sourceType),
      copyrightNotice: img.photographer ? `© ${img.photographer} / ${srcName || img.sourceType}` : `© ${srcName || img.sourceType}`,
    };
    if (img.photographer) {
      schema.creator = { '@type': 'Person', name: img.photographer };
      if (img.photographerUrl) schema.creator.url = img.photographerUrl;
    }
    return schema;
  });

// ── Bildnachweise ─────────────────────────────────────────────────────────────

const imageCreditsList = manifestImages
  .filter(img => img.photographer || (img.sourceType && sourceDisplayName(img)))
  .map(img => {
    const src = sourceDisplayName(img);
    const lic = img.license ? ` (${img.license})` : '';
    if (img.sourceType === 'pexels' && img.photographer && img.sourceUrl) {
      return `Foto: <a href="${img.sourceUrl}" target="_blank" rel="noopener">${img.photographer} / Pexels</a>${lic}`;
    }
    if (img.photographer && src) return `Foto: ${img.photographer} / ${src}${lic}`;
    if (img.photographer) return `Foto: ${img.photographer}${lic}`;
    if (src) return `Bildquelle: ${src}${lic}`;
    return null;
  })
  .filter(Boolean);
const imageCredits = [...new Set(imageCreditsList)].join(' · ');
const hasPexels = manifestImages.some(img => img.sourceType === 'pexels');
const pexelsAttribution = hasPexels
  ? '<a href="https://www.pexels.com" target="_blank" rel="noopener">Photos provided by Pexels</a>'
  : '';
const creditsHtml = [pexelsAttribution, imageCredits].filter(Boolean).join(' · ');

// ── Detailbilder für die Artikel-TSX ──────────────────────────────────────────

function imgTsxData(slot) {
  const img = manifestImages.find(m => m.slot === slot);
  if (!img || !img.filename) return null;
  if (img.sourceType === 'manual-placeholder' || img.sourceType === 'own') return null;
  const src = sourceDisplayName(img);
  return {
    src: `/images/ratgeber/${slug}/${img.filename}`,
    alt: img.alt || '',
    caption: img.caption || '',
    credit: img.photographer && src ? `${img.photographer} / ${src}` : (img.photographer || src || ''),
  };
}
const detail1Img = imgTsxData('detail-1');
const detail2Img = imgTsxData('detail-2');

const CTA_BEFORE_IDX = sections.length >= 3 ? Math.min(Math.floor(sections.length / 3), sections.length - 2) : null;
const D2_BEFORE_IDX = sections.length >= 5 ? Math.min(Math.floor(sections.length / 2), sections.length - 1) : null;

// ── Schritt 5: TSX-Seite generieren ──────────────────────────────────────────

function generateTsx() {
  const imageSchemasCode = imageSchemaObjects.length > 0
    ? JSON.stringify(imageSchemaObjects, null, 2)
    : '[]';

  const ctaHref = safeCtaHref(ctaData.buttons[0]?.href || '/kontakt');
  const ctaLabel = ctaData.buttons[0]?.label || 'Kostenloses Erstgespräch';

  const sectionBlocks = sections.map((section, index) => {
    const lines = [];

    if (index === 0 && detail1Img) {
      lines.push(`
            <figure className="mb-10 overflow-hidden rounded-xl">
              <img
                src=${JSON.stringify(detail1Img.src)}
                alt=${JSON.stringify(detail1Img.alt)}
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />${detail1Img.caption ? `
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                {${JSON.stringify(detail1Img.caption)}}
              </figcaption>` : ''}
            </figure>`);
    }

    if (CTA_BEFORE_IDX !== null && index === CTA_BEFORE_IDX) {
      lines.push(`
            <Card className="my-10 border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center md:p-6">
                <div className="flex-1">
                  <p className="mb-1 font-semibold text-foreground">{${JSON.stringify(ctaData.headline)}}</p>
                  <p className="text-sm text-foreground/70">{${JSON.stringify(ctaData.text)}}</p>
                </div>
                <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  <Link to=${JSON.stringify(ctaHref)}>{${JSON.stringify(ctaLabel)}}</Link>
                </Button>
              </CardContent>
            </Card>`);
    }

    if (D2_BEFORE_IDX !== null && index === D2_BEFORE_IDX && detail2Img) {
      lines.push(`
            <figure className="mb-6 overflow-hidden rounded-xl shadow-sm md:float-left md:mb-3 md:mr-7 md:w-[42%]">
              <img
                src=${JSON.stringify(detail2Img.src)}
                alt=${JSON.stringify(detail2Img.alt)}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />${detail2Img.caption ? `
              <figcaption className="mt-2 px-1 text-xs text-muted-foreground">
                {${JSON.stringify(detail2Img.caption)}}
              </figcaption>` : ''}
            </figure>`);
    }

    lines.push(`
            <h2 id=${JSON.stringify(section.id)} className="mt-10 mb-4 scroll-mt-28 font-serif text-2xl font-medium text-foreground md:text-3xl">
              {${JSON.stringify(section.h2)}}
            </h2>
            <div
              className="ratgeber-prose"
              dangerouslySetInnerHTML={{ __html: ${JSON.stringify(section.body)} }}
            />`);

    return lines.join('\n');
  });

  const tocHtml = sections.length >= 4
    ? `
            <nav aria-label="Inhaltsverzeichnis" className="mb-8 rounded-xl border border-border bg-card px-5 py-4">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{"Inhalt"}</p>
              <ol className="space-y-1.5 text-sm">
${sections.map((s) => `                <li><a href=${JSON.stringify(`#${s.id}`)} className="text-primary hover:underline">{${JSON.stringify(s.h2)}}</a></li>`).join('\n')}
              </ol>
            </nav>`
    : '';

  const creditsLine = creditsHtml
    ? `
            <p className="mt-10 clear-both text-xs text-muted-foreground/70" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(creditsHtml)} }} />`
    : '';

  const sourcesBlock = sourceItems.length > 0
    ? `
            <div className="mt-10 border-t border-border pt-6">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{"Quellen"}</p>
              <ul className="space-y-1.5 text-sm">
                {SOURCE_ITEMS.map((source, i) => (
                  <li key={i}>
                    <a href={source.url} target="_blank" rel="noopener" className="text-primary hover:underline">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>`
    : '';

  return `// Generiert von scripts/import-ratgeber-article.mjs - Artikelinhalte vom burmeister-webdesign-ratgeber-bot
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, Eyebrow } from "@/components/site/Section";
import { FaqAccordion, type FaqItem } from "@/components/site/RefreshBlocks";
import { WeitereArtikel } from "@/components/site/WeitereArtikel";
import { socialMeta } from "@/lib/seo";

const SLUG = ${JSON.stringify(slug)};
const HERO_IMAGE = ${JSON.stringify(heroImagePath)};
const HERO_ALT = ${JSON.stringify(heroAlt)};
const CATEGORY = ${JSON.stringify(category)};
const READ_TIME = ${JSON.stringify(readTime)};
const ARTICLE_DATE_DISPLAY = ${JSON.stringify(articleDateDisplay)};

const faqItems: FaqItem[] = ${JSON.stringify(faqItems, null, 2)};

interface SourceItem { title: string; url: string }
const SOURCE_ITEMS: SourceItem[] = ${JSON.stringify(sourceItems, null, 2)};

const breadcrumbSchema = ${JSON.stringify(breadcrumbSchema, null, 2)};
const articleSchema = ${JSON.stringify(blogPostingSchema, null, 2)};
const faqSchema = ${faqPageSchema ? JSON.stringify(faqPageSchema, null, 2) : 'null'};
const imageSchemas = ${imageSchemasCode};

export const Route = createFileRoute(${JSON.stringify(url)})({
  head: () => ({
    meta: [
      { title: ${JSON.stringify(seoTitle)} },
      { name: "description", content: ${JSON.stringify(seoDescription)} },
      ...socialMeta({
        title: ${JSON.stringify(seoTitle)},
        description: ${JSON.stringify(seoDescription)},
        path: ${JSON.stringify(url)},
        image: ${JSON.stringify(ogImage)},
      }),
    ],
    links: [{ rel: "canonical", href: ${JSON.stringify(canonical)} }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      ...(faqSchema ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }] : []),
      ...imageSchemas.map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/8] w-full md:aspect-[21/8]">
          <img
            src={HERO_IMAGE}
            alt={HERO_ALT}
            width={1600}
            height={750}
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8 md:pb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/70">
              <Tag size={12} /> {"Ratgeber · "}{CATEGORY}
            </span>
            <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-background md:text-5xl">
              {${JSON.stringify(h1)}}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-background/70">
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {READ_TIME}
              </span>
              <span>{ARTICLE_DATE_DISPLAY}</span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div
            className="ratgeber-prose mb-8"
            dangerouslySetInnerHTML={{ __html: ${JSON.stringify(introHtml)} }}
          />
${tocHtml}
${sectionBlocks.join('\n')}
${sourcesBlock}
${creditsLine}
        </div>
      </Section>

      {faqItems.length > 0 && (
        <Section className="bg-secondary/45">
          <Eyebrow>Häufige Fragen</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
            Kurz beantwortet.
          </h2>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={faqItems} />
          </div>
        </Section>
      )}

      <WeitereArtikel currentSlug={SLUG} />

      <Section className="bg-foreground text-background">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">
              <span className="h-px w-6 bg-[var(--brand-gold)]" />
              Kostenloses Erstgespräch
            </span>
            <h2 className="mt-5 font-serif text-3xl text-background md:text-4xl">
              {${JSON.stringify(ctaData.headline)}}
            </h2>
            <p className="mt-4 max-w-2xl text-background/70">{${JSON.stringify(ctaData.text)}}</p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button asChild className="rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90">
              <Link to=${JSON.stringify(ctaHref)}>
                {${JSON.stringify(ctaLabel)}}
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
`;
}

// ── Schritt 6: ratgeber-articles.ts aktualisieren ─────────────────────────────

function updateRatgeberArticlesTs(content) {
  const excerpt = seoDescription.length > 150
    ? seoDescription.substring(0, 150).replace(/\s\S+$/, '') + '...'
    : seoDescription;

  const newEntry = `  {
    slug: ${JSON.stringify(slug)},
    title: ${JSON.stringify(h1)},
    excerpt: ${JSON.stringify(excerpt)},
    category: ${JSON.stringify(category)},
    image: ${JSON.stringify(heroImagePath)},
    date: ${JSON.stringify(articleDate)},
    readTime: ${JSON.stringify(readTime)},
  },\n`;

  const marker = 'export const RATGEBER_ARTIKEL: RatgeberArtikel[] = [';
  const markerIdx = content.indexOf(marker);
  check(markerIdx !== -1, 'RATGEBER_ARTIKEL-Array nicht in ratgeber-articles.ts gefunden');
  const insertAt = markerIdx + marker.length;
  return content.slice(0, insertAt) + '\n' + newEntry.trimEnd() + content.slice(insertAt);
}

// ── Schritt 7: Sitemap-Dateien aktualisieren ──────────────────────────────────

function updateGenerateSitemapScript(content) {
  if (content.includes(`"/ratgeber/${slug}"`)) return content;
  const marker = '// Pro Ratgeber-Artikel ergänzt scripts/import-ratgeber-article.mjs hier';
  const idx = content.indexOf(marker);
  check(idx !== -1, 'Marker-Kommentar nicht in generate-sitemap.mjs gefunden');
  const newLine = `  { path: "/ratgeber/${slug}", changefreq: "monthly", priority: "0.6" },\n  `;
  return content.slice(0, idx) + newLine + content.slice(idx);
}

function updateSitemapRouteFile(content) {
  if (content.includes(`"/ratgeber/${slug}"`)) return content;
  const marker = '// Pro Ratgeber-Artikel ergänzt scripts/import-ratgeber-article.mjs';
  const idx = content.indexOf(marker);
  check(idx !== -1, 'Marker-Kommentar nicht in sitemap[.]xml.ts gefunden');
  const newLine = `{ path: "/ratgeber/${slug}", changefreq: "monthly", priority: "0.6", lastmod: TODAY },\n          `;
  return content.slice(0, idx) + newLine + content.slice(idx);
}

// ── Schritt 8: Bilder kopieren ─────────────────────────────────────────────────

async function copyImages() {
  const srcImgDir = path.join(EXPORT_DIR, 'images');
  const destImgDir = path.join(ROOT, 'public', 'images', 'ratgeber', slug);

  const hasSrcImages = fs.existsSync(srcImgDir) && fs.readdirSync(srcImgDir).length > 0;
  if (!hasSrcImages) {
    if (manifestImages.length > 0) {
      warn(`REVIEW: Export-Paket enthält Bildmanifest, aber keine Bilddateien in images/. Bilder müssen manuell in public/images/ratgeber/${slug}/ ergänzt werden.`);
      reviewWarnings.push(`Bilder fehlen: ${manifestImages.map(i => i.filename).join(', ')}`);
    }
    return { copied: [], missing: manifestImages.map(i => i.filename) };
  }

  if (!fs.existsSync(destImgDir)) fs.mkdirSync(destImgDir, { recursive: true });

  let sharp = null;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    warn('sharp nicht verfügbar - Nicht-WebP-Bilder werden ohne Konvertierung kopiert. "npm install -D sharp" ausführen.');
  }

  const QUALITY = 85;
  async function toWebp(srcPath, destPath, slot) {
    const width = slot === 'hero' ? 1600 : 1200;
    await sharp(srcPath).resize({ width, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(destPath);
  }

  const srcFiles = fs.readdirSync(srcImgDir);
  const copied = [];
  const missing = [];
  const consumed = new Set();

  for (const img of manifestImages) {
    const target = img.filename;
    const srcName = findSourceImage(srcImgDir, target);
    if (!srcName) {
      missing.push(target);
      warn(`Bild aus Manifest fehlt im images/-Ordner: ${target}`);
      continue;
    }
    consumed.add(srcName);
    const srcPath = path.join(srcImgDir, srcName);
    const destPath = path.join(destImgDir, target);
    const isWebp = path.extname(srcName).toLowerCase() === '.webp';

    try {
      if (isWebp) {
        fs.copyFileSync(srcPath, destPath);
        log(`Bild kopiert: ${target}`);
      } else if (sharp) {
        await toWebp(srcPath, destPath, img.slot);
        log(`Bild konvertiert → ${target} (aus ${srcName})`);
      } else {
        fs.copyFileSync(srcPath, path.join(destImgDir, srcName));
        warn(`Bild ${srcName} konnte nicht zu ${target} konvertiert werden (sharp fehlt) - Rohdatei kopiert.`);
        reviewWarnings.push(`WebP-Konvertierung fehlt für ${target} (sharp nicht verfügbar).`);
      }
      copied.push(target);
      if (!img.alt) warn(`Kein Alt-Text für Bild: ${target}`);
    } catch (e) {
      missing.push(target);
      warn(`Bild ${srcName} → ${target} fehlgeschlagen: ${e.message}`);
    }
  }

  for (const file of srcFiles) {
    if (consumed.has(file)) continue;
    const ext = path.extname(file).toLowerCase();
    try {
      if (ext === '.webp' || !sharp || !SOURCE_IMAGE_EXTS.includes(ext)) {
        fs.copyFileSync(path.join(srcImgDir, file), path.join(destImgDir, file));
        log(`Zusätzliches Bild kopiert: ${file}`);
      } else {
        const outName = file.replace(/\.[a-z0-9]+$/i, '.webp');
        await toWebp(path.join(srcImgDir, file), path.join(destImgDir, outName), null);
        log(`Zusätzliches Bild konvertiert: ${file} → ${outName}`);
      }
    } catch (e) {
      warn(`Zusätzliches Bild ${file} konnte nicht übernommen werden: ${e.message}`);
    }
  }

  return { copied, missing };
}

// ── Schritt 9: Import-Report schreiben ────────────────────────────────────────

function writeReport(results) {
  const reportDir = path.join(ROOT, 'generated', 'import-reports');
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  const reportPath = path.join(reportDir, `${slug}-import-report.md`);
  const lines = [
    `# Import-Report: ${slug}`,
    ``,
    `**Datum:** ${TODAY}`,
    `**Status:** ${results.success ? '✅ Erfolgreich' : '❌ Fehler'}`,
    ``,
    `## Artikeldaten`,
    ``,
    `| Feld | Wert |`,
    `|---|---|`,
    `| Slug | \`${slug}\` |`,
    `| URL | \`${url}\` |`,
    `| Canonical | \`${canonical}\` |`,
    `| H1 | ${h1} |`,
    `| Kategorie | ${category} |`,
    `| Lesezeit | ${readTime} |`,
    `| Wortzahl (grob) | ${wc} |`,
    ``,
    `## Erzeugte / Geänderte Dateien`,
    ``,
    `- \`src/routes/ratgeber/${slug}.tsx\` - neue Ratgeber-Seite`,
    `- \`src/lib/ratgeber-articles.ts\` - Artikel-Index-Eintrag hinzugefügt`,
    `- \`scripts/generate-sitemap.mjs\` - URL-Eintrag hinzugefügt`,
    `- \`src/routes/sitemap[.]xml.ts\` - URL-Eintrag hinzugefügt`,
    ``,
    `## Bilder`,
    ``,
    `- Kopiert: ${results.images?.copied?.length || 0} Datei(en)`,
    `- Fehlend: ${results.images?.missing?.length || 0} Datei(en)`,
  ];

  if (results.images?.missing?.length > 0) {
    lines.push(``, `### Fehlende Bilder`, ``);
    for (const f of results.images.missing) lines.push(`- [ ] \`public/images/ratgeber/${slug}/${f}\``);
    lines.push(``, `> **REVIEW:** Bilder müssen manuell in \`public/images/ratgeber/${slug}/\` abgelegt werden.`);
  }

  lines.push(``, `## Nächster Schritt: Thema als erledigt markieren`, ``);
  lines.push(`Nach erfolgreichem Import und Prüfung der Seite im Bot-Verzeichnis ausführen:`, ``);
  lines.push('```', `npm run mark-done -- --slug ${slug}`, '```', ``);
  lines.push(`Bot-Verzeichnis: \`burmeister-webdesign-ratgeber-bot/\``);

  lines.push(``, `## SEO`, ``);
  lines.push(`- Meta Title: ${seoTitle.length} Zeichen ${seoTitle.length <= 65 ? '✅' : '⚠️'}`);
  lines.push(`- Meta Description: ${seoDescription.length} Zeichen ${seoDescription.length <= 170 ? '✅' : '⚠️'}`);
  lines.push(`- Canonical: ${canonical}`);
  lines.push(`- OG-Image: ${ogImage}`);
  lines.push(`- FAQ-Schema: ${faqItems.length > 0 ? `vorhanden (${faqItems.length} Fragen)` : 'nicht vorhanden (keine FAQ)'}`);
  lines.push(`- BlogPosting-Schema: vorhanden (dateModified: ${TODAY})`);
  lines.push(`- Breadcrumb-Schema: vorhanden`);
  lines.push(`- ImageObject-Schemas: ${imageSchemaObjects.length > 0 ? `${imageSchemaObjects.length} Bild(er) mit Lizenzdaten` : 'keine lizenzierten Bilder'}`);

  lines.push(``, `## Build`, ``);
  lines.push(`- Build-Ergebnis: ${results.buildSuccess === true ? '✅ Erfolgreich' : results.buildSuccess === false ? '❌ Fehlgeschlagen' : '— nicht ausgeführt (--skip-build)'}`);

  if (reviewWarnings.length > 0) {
    lines.push(``, `## ⚠️ Review-Hinweise`, ``);
    for (const w of reviewWarnings) lines.push(`- ${w}`);
  }

  if (results.error) {
    lines.push(``, `## Fehler`, ``, '```', results.error, '```');
  }

  fs.writeFileSync(reportPath, lines.join('\n') + '\n', 'utf8');
  return reportPath;
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

const results = { success: false, images: null, buildSuccess: null, error: null };

try {
  fs.mkdirSync(path.dirname(ROUTE_FILE_PATH), { recursive: true });
  fs.writeFileSync(ROUTE_FILE_PATH, generateTsx(), 'utf8');
  log(`✅ Routendatei erstellt: src/routes/ratgeber/${slug}.tsx`);

  const articlesTsPath = path.join(ROOT, 'src', 'lib', 'ratgeber-articles.ts');
  const articlesTsContent = fs.readFileSync(articlesTsPath, 'utf8');
  if (!articlesTsContent.includes(`slug: ${JSON.stringify(slug)}`)) {
    fs.writeFileSync(articlesTsPath, updateRatgeberArticlesTs(articlesTsContent), 'utf8');
    log('✅ ratgeber-articles.ts aktualisiert');
  } else {
    log('ℹ️  ratgeber-articles.ts: Eintrag existiert bereits, übersprungen');
  }

  const sitemapScriptPath = path.join(ROOT, 'scripts', 'generate-sitemap.mjs');
  fs.writeFileSync(sitemapScriptPath, updateGenerateSitemapScript(fs.readFileSync(sitemapScriptPath, 'utf8')), 'utf8');
  log('✅ scripts/generate-sitemap.mjs aktualisiert');

  const sitemapRoutePath = path.join(ROOT, 'src', 'routes', 'sitemap[.]xml.ts');
  fs.writeFileSync(sitemapRoutePath, updateSitemapRouteFile(fs.readFileSync(sitemapRoutePath, 'utf8')), 'utf8');
  log('✅ src/routes/sitemap[.]xml.ts aktualisiert');

  results.images = await copyImages();
  log(`✅ Bilder: ${results.images.copied.length} kopiert, ${results.images.missing.length} fehlend`);

  results.success = true;

  if (!skipBuild) {
    log('Starte npm run build...');
    try {
      execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });
      results.buildSuccess = true;
      log('✅ Build erfolgreich');
    } catch (e) {
      results.buildSuccess = false;
      results.error = e.message;
      warn('❌ Build fehlgeschlagen - Dateien wurden NICHT committed');
    }
  }
} catch (e) {
  results.error = e.message;
  console.error(`\n[FEHLER] ${e.message}\n`);
}

const reportPath = writeReport(results);
log(`📋 Report: ${reportPath}`);

console.log('');
if (results.success) {
  console.log('══════════════════════════════════════════════════');
  console.log(`✅ Import abgeschlossen: ${slug}`);
  console.log(`   Seite: ${url}`);
  console.log(`   Nächste Schritte:`);
  if (results.images?.missing?.length > 0) {
    console.log(`   1. Bilder in public/images/ratgeber/${slug}/ ablegen`);
    console.log(`   2. npm run build (falls nicht schon ausgeführt)`);
  } else {
    console.log(`   1. npm run build (falls nicht schon ausgeführt)`);
  }
  console.log(`   2. npm run dev — Seite lokal prüfen unter ${url}`);
  console.log(`   3. git add -A && git commit && git push — nach Bestätigung deployen`);
  console.log(`   4. Im Bot: npm run mark-done -- --slug ${slug}`);
  console.log('══════════════════════════════════════════════════');
} else {
  console.error('❌ Import nicht vollständig abgeschlossen. Prüfe den Report.');
  process.exit(1);
}
