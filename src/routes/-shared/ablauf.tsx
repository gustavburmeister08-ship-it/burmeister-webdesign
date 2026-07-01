import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { FinalCta, PageIntro } from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, serviceJsonLd, socialMeta, hreflangLinks } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locale";

const COPY = {
  de: {
    metaTitle: "Ablauf - Website erstellen lassen Leipzig klar geplant",
    metaDescription:
      "So entsteht Ihre Website: kostenloses Erstgespräch, Festpreisangebot, erste Vorschau nach 7 Tagen, Feedbackrunde, Veröffentlichung und Einweisung.",
    ogTitle: "Website-Ablauf Leipzig - erste Vorschau nach 7 Tagen",
    ogDescription:
      "Ein klarer Prozess ohne Technikstress: Erstgespräch, Angebot, Vorschau, Feedback, Launch und Einweisung.",
    breadcrumbLabel: "Ablauf",
    serviceName: "Website erstellen lassen in Leipzig",
    serviceDescription:
      "Klarer Website-Prozess vom kostenlosen Erstgespräch bis zur Veröffentlichung inklusive Einweisung.",
    howToName: "So entsteht Ihre Website in Leipzig",
    howToDescription:
      "Von Erstgespräch bis Launch: Website-Erstellung mit Festpreis, erster Vorschau nach 7 Tagen und Einweisung.",
    steps: [
      {
        n: "01",
        title: "Kostenloses Erstgespräch",
        text: "Sie erzählen kurz, was Sie brauchen. Ich sage ehrlich, ob und wie ich helfen kann.",
        detail: "15 Minuten · keine Verpflichtung",
      },
      {
        n: "02",
        title: "Festpreisangebot",
        text: "Sie erhalten ein schriftliches Angebot mit klarem Umfang und Preis.",
        detail: "Keine Stundenabrechnung",
      },
      {
        n: "03",
        title: "Struktur, Texte und erste Vorschau",
        text: "Ich erarbeite Struktur, Texte und Design. Nach 7 Tagen sehen Sie eine erste private Vorschau.",
        detail: "Erste Vorschau nach 7 Tagen",
      },
      {
        n: "04",
        title: "Feedbackrunde",
        text: "Sie geben Feedback, ich arbeite die vereinbarten Anpassungen ein.",
        detail: "Eine Feedbackrunde inklusive",
      },
      {
        n: "05",
        title: "Veröffentlichung und Einweisung",
        text: "Die Website geht live. Sie erhalten eine Einweisung und wissen, wie alles funktioniert.",
        detail: "Launch und Einweisung inklusive",
      },
    ],
    introEyebrow: "Ablauf",
    introTitle: "Ein klarer Prozess, der Ihnen Arbeit abnimmt.",
    introText:
      "Keine langen Abstimmungen, keine Fachsprache, keine unklaren Kosten. Sie wissen jederzeit, was passiert und was als Nächstes kommt.",
    introBadges: [
      "Erste Vorschau nach 7 Tagen",
      "Antwort innerhalb von 24 Stunden",
      "Festpreis nach Erstgespräch",
    ],
    scheduleEyebrow: "Zeitplan",
    scheduleTitle: "Realistische Zeiträume statt vager Versprechen.",
    scheduleItems: [
      ["One-Pager", "typischerweise 1 Woche"],
      ["Mehrseitige Website", "typischerweise 2-4 Wochen"],
      ["Rückmeldung", "innerhalb von 24 Stunden"],
    ],
    taskEyebrow: "Ihre Aufgabe",
    taskTitle: "Sie müssen keine Website planen.",
    taskText:
      "Ich brauche keine fertigen Texte und keine perfekten Vorgaben. Wichtig sind nur die Informationen, die Ihr Unternehmen ausmachen.",
    taskItems: [
      "Sie erzählen mir, was Sie anbieten.",
      "Sie schicken vorhandene Bilder, falls es welche gibt.",
      "Sie prüfen die private Vorschau.",
      "Sie geben Feedback und später die Freigabe.",
    ],
    handleEyebrow: "Was ich übernehme",
    handleTitle: "Struktur, Texte, Design, Technik und Launch.",
    handleText:
      "Das Ziel ist nicht, dass Sie Webdesign lernen. Das Ziel ist, dass Ihre Website professionell online geht und Sie wissen, wie es danach weitergeht.",
    handleButton: "Schritt 1 starten",
    finalCtaTitle: "Bereit für Schritt 1?",
    finalCtaText:
      "Das Erstgespräch kostet nichts. Sie bekommen eine ehrliche Einschätzung und wissen danach, ob und wie wir Ihr Projekt angehen.",
  },
  en: {
    metaTitle: "Process - Website Design Leipzig, Clearly Planned",
    metaDescription:
      "How your website is built: free initial consultation, fixed-price offer, first preview after 7 days, feedback round, launch and walkthrough.",
    ogTitle: "Website Process Leipzig - first preview after 7 days",
    ogDescription:
      "A clear process without tech stress: consultation, offer, preview, feedback, launch and walkthrough.",
    breadcrumbLabel: "Process",
    serviceName: "Website design services in Leipzig",
    serviceDescription:
      "A clear website process from the free initial consultation through to launch, including a walkthrough.",
    howToName: "How your website is built in Leipzig",
    howToDescription:
      "From consultation to launch: website creation with a fixed price, first preview after 7 days and a walkthrough.",
    steps: [
      {
        n: "01",
        title: "Free initial consultation",
        text: "You tell me briefly what you need. I'll tell you honestly whether and how I can help.",
        detail: "15 minutes · no obligation",
      },
      {
        n: "02",
        title: "Fixed-price offer",
        text: "You receive a written offer with a clear scope and price.",
        detail: "No hourly billing",
      },
      {
        n: "03",
        title: "Structure, copy and first preview",
        text: "I develop the structure, copy and design. After 7 days you'll see a first private preview.",
        detail: "First preview after 7 days",
      },
      {
        n: "04",
        title: "Feedback round",
        text: "You give feedback, I implement the agreed changes.",
        detail: "One feedback round included",
      },
      {
        n: "05",
        title: "Launch and walkthrough",
        text: "The website goes live. You get a walkthrough and know how everything works.",
        detail: "Launch and walkthrough included",
      },
    ],
    introEyebrow: "Process",
    introTitle: "A clear process that takes work off your hands.",
    introText:
      "No lengthy back-and-forth, no jargon, no unclear costs. You always know what's happening and what comes next.",
    introBadges: [
      "First preview after 7 days",
      "Reply within 24 hours",
      "Fixed price after consultation",
    ],
    scheduleEyebrow: "Timeline",
    scheduleTitle: "Realistic timeframes instead of vague promises.",
    scheduleItems: [
      ["One-pager", "typically 1 week"],
      ["Multi-page website", "typically 2-4 weeks"],
      ["Response time", "within 24 hours"],
    ],
    taskEyebrow: "Your part",
    taskTitle: "You don't need to plan a website.",
    taskText:
      "I don't need finished copy or perfect specifications. All that matters is the information that defines your business.",
    taskItems: [
      "You tell me what you offer.",
      "You send existing photos, if you have any.",
      "You review the private preview.",
      "You give feedback and later sign off.",
    ],
    handleEyebrow: "What I take care of",
    handleTitle: "Structure, copy, design, tech and launch.",
    handleText:
      "The goal isn't for you to learn web design. The goal is for your website to go live professionally, and for you to know what happens afterward.",
    handleButton: "Start step 1",
    finalCtaTitle: "Ready for step 1?",
    finalCtaText:
      "The initial consultation costs nothing. You'll get an honest assessment and then know whether and how we'll tackle your project.",
  },
} as const;

export function ablaufHead(locale: Locale) {
  const t = COPY[locale];
  const path = locale === "en" ? "/en/ablauf" : "/ablauf";

  return {
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      ...socialMeta({
        title: t.ogTitle,
        description: t.ogDescription,
        path,
        image: "https://burmeister-webdesign.com/images/gb-webdesign-prozess.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: `https://burmeister-webdesign.com${path}` },
      ...hreflangLinks("/ablauf"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(path, t.breadcrumbLabel, locale)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: t.serviceName,
            description: t.serviceDescription,
            path,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: t.howToName,
          description: t.howToDescription,
          step: t.steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.text,
          })),
        }),
      },
    ],
  };
}

export function AblaufPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <PageIntro eyebrow={t.introEyebrow} title={t.introTitle} text={t.introText}>
        <div className="mt-8 flex flex-wrap gap-2">
          {t.introBadges.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="border-border bg-card text-foreground/70"
            >
              {item}
            </Badge>
          ))}
        </div>
      </PageIntro>

      <Section className="pt-0">
        <ol className="space-y-4">
          {t.steps.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 rounded-xl border border-border bg-card p-6 md:grid-cols-12 md:items-start"
            >
              <div className="md:col-span-2">
                <p className="font-serif text-4xl leading-none text-primary">
                  {step.n}
                </p>
              </div>
              <div className="md:col-span-7">
                <h2 className="font-serif text-2xl text-foreground">
                  {step.title}
                </h2>
                <p className="mt-2 leading-relaxed text-foreground/70">
                  {step.text}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <Badge
                  variant="outline"
                  className="border-primary/20 bg-secondary text-primary"
                >
                  {step.detail}
                </Badge>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-secondary/45">
        <Eyebrow>{t.scheduleEyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          {t.scheduleTitle}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.scheduleItems.map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>{t.taskEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.taskTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              {t.taskText}
            </p>
          </div>
          <div className="grid gap-3 md:col-span-7">
            {t.taskItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/75"
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-primary"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>{t.handleEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              {t.handleTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              {t.handleText}
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <Button
              asChild
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <LocalizedLink to="/kontakt">
                {t.handleButton}
                <ArrowRight size={15} />
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </Section>

      <FinalCta title={t.finalCtaTitle} text={t.finalCtaText} />
    </>
  );
}
