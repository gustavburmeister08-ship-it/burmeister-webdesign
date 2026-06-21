import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/Section";
import {
  FinalCta,
  PageIntro,
  TrustMetricGrid,
} from "@/components/site/RefreshBlocks";
import { breadcrumbJsonLd, socialMeta } from "@/lib/seo";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich - Gustav Burmeister | Webdesigner Leipzig" },
      {
        name: "description",
        content:
          "Gustav Burmeister ist Webdesigner aus Leipzig für lokale Unternehmen: direkter Kontakt, klare Preise, 15 Websites und 30 Unternehmen unterstützt.",
      },
      ...socialMeta({
        title: "Gustav Burmeister - Webdesigner aus Leipzig",
        description:
          "Persönlicher Webdesigner für kleine Unternehmen in Leipzig: direkter Kontakt, klare Preise und schnelle Umsetzung.",
        path: "/ueber-mich",
        image:
          "https://burmeister-webdesign.com/images/gb-webdesign-arbeitsfoto.webp",
      }),
    ],
    links: [
      { rel: "canonical", href: "https://burmeister-webdesign.com/ueber-mich" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd("/ueber-mich", "Über mich")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://burmeister-webdesign.com/#person",
          name: "Gustav Burmeister",
          jobTitle: "Webdesigner",
          description:
            "Freiberuflicher Webdesigner aus Leipzig, spezialisiert auf moderne, bezahlbare Websites für kleine lokale Unternehmen.",
          url: "https://burmeister-webdesign.com/ueber-mich",
          image:
            "https://burmeister-webdesign.com/images/gb-webdesign-arbeitsfoto.webp",
          email: "gustav.burmeister08@gmail.com",
          telephone: "+493418605648",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Leipzig",
            addressRegion: "Sachsen",
            addressCountry: "DE",
          },
          knowsAbout: [
            "Webdesign",
            "Website-Relaunch",
            "Lokale SEO",
            "Google Business Profil",
            "Hosting und Wartung",
          ],
        }),
      },
    ],
  }),
  component: UeberMichPage,
});

function UeberMichPage() {
  return (
    <>
      <PageIntro
        eyebrow="Über mich"
        title="Persönlicher Webdesigner aus Leipzig, nicht anonyme Agentur."
        text="Ich helfe kleinen lokalen Unternehmen zu Websites, die professionell wirken, schnell online gehen und ohne Technikstress funktionieren."
      />

      <Section className="pt-0">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <img
              src="/images/gb-webdesign-arbeitsfoto.webp"
              alt="Gustav Burmeister arbeitet an einer Website"
              width={800}
              height={1000}
              loading="eager"
              className="w-full rounded-xl object-cover"
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Direkter Kontakt",
                "Kein Ticketsystem",
                "Antwort innerhalb von 24 Stunden",
              ].map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-border bg-card text-foreground/70"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Warum ich so arbeite</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Kleine Betriebe brauchen keine komplizierte Agentur. Sie brauchen
              Klarheit.
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-foreground/72">
              <p>
                Viele lokale Unternehmen haben keine Zeit, sich durch Baukästen,
                Plugins, SEO-Fachbegriffe oder Agenturprozesse zu arbeiten.
                Genau dort setze ich an.
              </p>
              <p>
                Sie sagen mir, was Sie anbieten. Ich kümmere mich um Struktur,
                Texte, Design, Technik und den Launch. Direkt, verständlich und
                mit einem klaren Festpreis nach dem Erstgespräch.
              </p>
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "15 Websites umgesetzt",
                "30 lokale Unternehmen unterstützt",
                "Erste Vorschau nach 7 Tagen",
                "Veröffentlichung und Einweisung inklusive",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/75"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <TrustMetricGrid />
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Arbeitsweise</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Was Kunden nach der Zusammenarbeit haben.
            </h2>
          </div>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            {[
              [
                "Mehr Vertrauen",
                "Ein professioneller erster Eindruck für Besucher, die Ihr Unternehmen noch nicht kennen.",
              ],
              [
                "Weniger Technikstress",
                "Sie müssen keine Plattform, Plugins oder Fachbegriffe verwalten.",
              ],
              [
                "Bessere Anfrageführung",
                "Besucher verstehen schneller, was Sie anbieten und wie sie Kontakt aufnehmen.",
              ],
              [
                "Lokale Grundlage",
                "SEO-Grundlagen und lokale Suchbegriffe werden von Anfang an mitgedacht.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/45">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow>Standpunkt</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
              Bezahlbar heißt nicht billig. Es heißt passend für kleine
              Unternehmen.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Ich baue nicht für Designpreise, sondern für Betriebe, die online
              seriös wirken, gefunden werden und einfacher Anfragen bekommen
              wollen.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button asChild variant="outline" className="rounded-full bg-card">
              <Link to="/preise">
                Preise ansehen
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Sie möchten direkt mit mir sprechen?"
        text="Schreiben Sie kurz, was Sie vorhaben. Ich melde mich innerhalb von 24 Stunden persönlich zurück."
        button="Kontakt aufnehmen"
      />
    </>
  );
}
