import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight, Calculator, Check, CheckCircle2, Clipboard, ExternalLink,
  Gauge, MapPin, QrCode, Search, ShieldCheck, Sparkles, Star, XCircle,
} from "lucide-react";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { Section, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { socialMeta, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export type ToolSlug = "website-kostenrechner" | "seo-check" | "google-bewertungslink-generator" | "local-seo-check" | "datenschutz-check";

const tools = [
  { slug: "website-kostenrechner", title: "Website-Kostenrechner", text: "Ermitteln Sie in zwei Minuten eine realistische Preisspanne für Ihr Webprojekt.", icon: Calculator, intent: "Website-Kosten kalkulieren" },
  { slug: "seo-check", title: "Website- & SEO-Schnellcheck", text: "Prüfen Sie die wichtigsten Onpage-Signale mit einem klaren SEO-Score.", icon: Gauge, intent: "SEO-Potenzial erkennen" },
  { slug: "google-bewertungslink-generator", title: "Google-Bewertungslink-Generator", text: "Erstellen Sie einen direkten Bewertungslink und einen QR-Code zum Teilen.", icon: Star, intent: "Mehr Bewertungen erhalten" },
  { slug: "local-seo-check", title: "Local-SEO-Check", text: "Finden Sie heraus, wie sichtbar Ihr Unternehmen in Ihrer Region aufgestellt ist.", icon: MapPin, intent: "Lokal besser ranken" },
  { slug: "datenschutz-check", title: "Datenschutz-Check", text: "Erkennen Sie typische technische Datenschutz-Risiken auf Ihrer Website.", icon: ShieldCheck, intent: "Risiken früh erkennen" },
] as const;

const faq: Record<ToolSlug, { q: string; a: string }[]> = {
  "website-kostenrechner": [
    { q: "Wie genau ist der Website-Kostenrechner?", a: "Die Spanne basiert auf typischen Projektumfängen und den veröffentlichten Startpreisen von Burmeister Webdesign. Ein verbindlicher Festpreis folgt erst nach einem kostenlosen Erstgespräch." },
    { q: "Kostet die Berechnung etwas?", a: "Nein. Der Rechner ist kostenlos und kann ohne E-Mail-Adresse genutzt werden." },
  ],
  "seo-check": [
    { q: "Ist der SEO-Check kostenlos?", a: "Ja. Der Schnellcheck ist kostenlos und zeigt sofort, welche Grundlagen bereits vorhanden sind." },
    { q: "Ersetzt der Check eine technische SEO-Analyse?", a: "Nein. Er ist eine fundierte Ersteinschätzung. Für Rankings, Crawling, Core Web Vitals und Wettbewerber ist eine vollständige Analyse sinnvoll." },
  ],
  "google-bewertungslink-generator": [
    { q: "Wo finde ich meine Google Place ID?", a: "Öffnen Sie den offiziellen Place-ID-Finder von Google, suchen Sie Ihr Unternehmen und kopieren Sie die angezeigte Place ID." },
    { q: "Darf ich Kunden um Google-Bewertungen bitten?", a: "Ja, Sie dürfen echte Kunden um eine ehrliche Bewertung bitten. Vermeiden Sie gekaufte Bewertungen, Belohnungen und eine Vorauswahl ausschließlich zufriedener Kunden." },
  ],
  "local-seo-check": [
    { q: "Was ist Local SEO?", a: "Local SEO umfasst Maßnahmen, mit denen ein Unternehmen bei standortbezogenen Google-Suchen und in Google Maps sichtbarer wird." },
    { q: "Für wen lohnt sich lokale Suchmaschinenoptimierung?", a: "Besonders für Handwerker, Praxen, Kanzleien, Gastronomie, Studios und Dienstleister mit einem regionalen Einzugsgebiet." },
  ],
  "datenschutz-check": [
    { q: "Ist das Ergebnis eine Rechtsberatung?", a: "Nein. Der Check weist nur auf häufige technische Auffälligkeiten hin und ersetzt keine individuelle Prüfung durch eine Rechtsanwältin, einen Rechtsanwalt oder eine Datenschutzfachkraft." },
    { q: "Welche Bereiche werden geprüft?", a: "Der Selbstcheck betrachtet typische Themen wie Impressum, Datenschutzerklärung, Cookies, externe Dienste, Formulare, HTTPS und Einwilligungen." },
  ],
};

const titles: Record<ToolSlug, [string, string]> = {
  "website-kostenrechner": ["Website-Kosten berechnen", "Kostenloser Rechner für eine realistische Projektspanne"],
  "seo-check": ["Kostenloser Website- & SEO-Check", "Onpage-Grundlagen in wenigen Minuten prüfen"],
  "google-bewertungslink-generator": ["Google-Bewertungslink erstellen", "Direkter Link und QR-Code für Ihre Kunden"],
  "local-seo-check": ["Kostenloser Local-SEO-Check", "Lokale Sichtbarkeit mit 10 Signalen bewerten"],
  "datenschutz-check": ["Technischer Datenschutz-Check", "Typische Risiken Ihrer Website früh erkennen"],
};

export function toolHead(slug: ToolSlug) {
  const [title, description] = titles[slug];
  const path = `/tools/${slug}`;
  return { meta: [{ title: `${title} | Burmeister Webdesign` }, { name: "description", content: description }, ...socialMeta({ title, description, path })], links: [{ rel: "canonical", href: `${SITE_URL}${path}` }], scripts: [
    { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd(path, title)) },
    { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", name: title, applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, url: `${SITE_URL}${path}` }) },
    { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq[slug].map(x => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) }) },
  ] };
}

function ToolShell({ slug, children }: { slug: ToolSlug; children: ReactNode }) {
  const [title, subtitle] = titles[slug];
  return <>
    <section className="border-b border-border bg-secondary/45 px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center"><Eyebrow>Kostenloses Online-Tool</Eyebrow><h1 className="mt-5 font-serif text-4xl text-foreground md:text-6xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/65">{subtitle}. Ohne Anmeldung, verständlich und sofort nutzbar.</p></div>
    </section>
    <Section><div className="mx-auto max-w-4xl">{children}</div></Section>
    <Section className="bg-secondary/45"><div className="mx-auto max-w-4xl"><Eyebrow>Häufige Fragen</Eyebrow><div className="mt-7 grid gap-4 md:grid-cols-2">{faq[slug].map(x => <article key={x.q} className="rounded-xl border border-border bg-card p-6"><h2 className="font-serif text-xl">{x.q}</h2><p className="mt-3 text-sm leading-7 text-foreground/65">{x.a}</p></article>)}</div></div></Section>
    <Section><div className="mx-auto max-w-4xl rounded-2xl bg-primary p-8 text-primary-foreground md:flex md:items-center md:justify-between"><div><p className="text-sm font-semibold uppercase tracking-wider opacity-70">Nächster sinnvoller Schritt</p><h2 className="mt-3 font-serif text-3xl">Aus dem Ergebnis einen klaren Plan machen.</h2><p className="mt-3 max-w-xl opacity-80">Ich prüfe Ihre Situation persönlich und sage Ihnen ehrlich, welche Maßnahmen sich lohnen.</p></div><Button asChild variant="secondary" className="mt-6 rounded-full md:mt-0"><LocalizedLink to="/kontakt">Kostenlos besprechen <ArrowRight size={16}/></LocalizedLink></Button></div></Section>
  </>;
}

function ResultBar({ score }: { score: number }) { const color = score >= 75 ? "bg-primary" : score >= 45 ? "bg-[var(--brand-gold)]" : "bg-destructive"; return <div><div className="mb-2 flex justify-between text-sm"><span>Ihr Ergebnis</span><strong>{score} / 100</strong></div><div className="h-3 overflow-hidden rounded-full bg-secondary"><div className={`h-full rounded-full ${color} transition-all duration-300`} style={{ width: `${score}%` }}/></div></div>; }

export function WebsiteKostenrechner() {
  const [pages, setPages] = useState(5); const [type, setType] = useState("company"); const [extras, setExtras] = useState<string[]>([]);
  const toggle = (x:string) => setExtras(v => v.includes(x) ? v.filter(i=>i!==x) : [...v,x]);
  const base = type === "one" ? 790 : type === "shop" ? 2790 : 1390;
  const total = base + Math.max(0, pages - (type === "one" ? 1 : 5)) * 140 + extras.reduce((n,x)=>n+({seo:490,booking:690,multilang:590,copy:390}[x]||0),0);
  return <ToolShell slug="website-kostenrechner"><div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm md:grid-cols-[1.4fr_1fr] md:p-9"><div className="space-y-8"><fieldset><legend className="font-semibold">1. Welche Website brauchen Sie?</legend><div className="mt-3 grid gap-2 sm:grid-cols-3">{[["one","One-Pager"],["company","Firmenwebsite"],["shop","Onlineshop"]].map(([v,l])=><button key={v} type="button" onClick={()=>setType(v)} className={`min-h-12 cursor-pointer rounded-lg border px-3 text-sm transition-colors ${type===v?"border-primary bg-primary text-primary-foreground":"hover:bg-secondary"}`}>{l}</button>)}</div></fieldset><div><Label htmlFor="pages">2. Anzahl Seiten: {pages}</Label><Slider id="pages" className="mt-5" min={1} max={20} step={1} value={[pages]} onValueChange={v=>setPages(v[0])}/></div><fieldset><legend className="font-semibold">3. Gewünschte Extras</legend><div className="mt-3 grid gap-3 sm:grid-cols-2">{[["seo","SEO-Paket"],["booking","Terminbuchung"],["multilang","Mehrsprachig"],["copy","Professionelle Texte"]].map(([v,l])=><label key={v} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-secondary"><Checkbox checked={extras.includes(v)} onCheckedChange={()=>toggle(v)}/><span className="text-sm">{l}</span></label>)}</div></fieldset></div><aside className="rounded-xl bg-secondary p-6"><Sparkles className="text-primary"/><p className="mt-5 text-sm text-foreground/60">Realistische Projektspanne</p><p className="mt-2 font-serif text-4xl">{Math.round(total*.9).toLocaleString("de-DE")}–{Math.round(total*1.15).toLocaleString("de-DE")} €</p><p className="mt-4 text-sm leading-6 text-foreground/60">Einmalige Investition, abhängig von Inhalten und technischen Details.</p><Button asChild className="mt-7 w-full rounded-full"><LocalizedLink to="/kontakt">Festpreis anfragen <ArrowRight size={15}/></LocalizedLink></Button></aside></div></ToolShell>;
}

const seoItems = [["title","Aussagekräftiger Seitentitel"],["desc","Meta-Beschreibung vorhanden"],["h1","Genau eine klare H1"],["mobile","Mobil gut bedienbar"],["speed","Lädt gefühlt unter 3 Sekunden"],["https","HTTPS ist aktiv"],["content","Leistung und Ort klar beschrieben"],["alt","Bilder haben Alternativtexte"]] as const;
export function SeoCheck() { const [url,setUrl]=useState(""); const [checked,setChecked]=useState<string[]>([]); const toggle=(x:string)=>setChecked(v=>v.includes(x)?v.filter(i=>i!==x):[...v,x]); const valid=/^https?:\/\/.+\..+/.test(url); const score=Math.round((checked.length/seoItems.length)*90)+(valid?10:0); return <ToolShell slug="seo-check"><div className="rounded-2xl border bg-card p-6 md:p-9"><Label htmlFor="seo-url">Adresse Ihrer Website</Label><div className="mt-2 flex flex-col gap-2 sm:flex-row"><Input id="seo-url" type="url" placeholder="https://ihre-website.de" value={url} onChange={e=>setUrl(e.target.value)}/><Button type="button" onClick={()=>{}} className="sm:w-auto"><Search size={16}/> Prüfen</Button></div><p className="mt-2 text-xs text-muted-foreground">Bewerten Sie die sichtbaren Grundlagen Ihrer Seite ehrlich.</p><div className="my-8"><ResultBar score={score}/></div><div className="grid gap-3 sm:grid-cols-2">{seoItems.map(([v,l])=><label key={v} className="flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-secondary"><Checkbox checked={checked.includes(v)} onCheckedChange={()=>toggle(v)}/><span className="text-sm">{l}</span></label>)}</div><p className="mt-6 rounded-lg bg-secondary p-4 text-sm">{score>=75?"Starke Basis. Jetzt können Inhalte, Suchintentionen und Autorität den Unterschied machen.":score>=45?"Solide Ansätze, aber mehrere Grundlagen bremsen Ihre Sichtbarkeit.":"Hier liegt deutliches Potenzial. Beginnen Sie mit Technik, Seitenstruktur und klaren Inhalten."}</p></div></ToolShell>; }

export function ReviewLinkGenerator() { const [placeId,setPlaceId]=useState(""); const link=placeId.trim()?`https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId.trim())}`:""; const qr=link?`https://quickchart.io/qr?text=${encodeURIComponent(link)}&size=260`:""; const [copied,setCopied]=useState(false); return <ToolShell slug="google-bewertungslink-generator"><div className="grid gap-8 rounded-2xl border bg-card p-6 md:grid-cols-[1fr_280px] md:p-9"><div><Label htmlFor="place-id">Google Place ID Ihres Unternehmens</Label><Input id="place-id" className="mt-2" placeholder="z. B. ChIJ..." value={placeId} onChange={e=>setPlaceId(e.target.value)}/><a className="mt-3 inline-flex items-center gap-1 text-sm text-primary underline underline-offset-4" href="https://developers.google.com/maps/documentation/places/web-service/place-id#find-id" target="_blank" rel="noreferrer">Place ID bei Google finden <ExternalLink size={13}/></a>{link&&<div className="mt-7"><Label htmlFor="review-link">Ihr direkter Bewertungslink</Label><div className="mt-2 flex gap-2"><Input id="review-link" readOnly value={link}/><Button aria-label="Link kopieren" onClick={async()=>{await navigator.clipboard.writeText(link);setCopied(true)}}><Clipboard size={16}/></Button></div><p className="mt-3 text-sm text-primary">{copied?"Link kopiert – bereit zum Teilen.":"Tipp: Link per E-Mail, Rechnung oder WhatsApp versenden."}</p></div>}</div><div className="flex min-h-64 items-center justify-center rounded-xl bg-secondary p-4">{qr?<img src={qr} width="240" height="240" alt="QR-Code für den Google-Bewertungslink"/>:<div className="text-center text-muted-foreground"><QrCode className="mx-auto" size={42}/><p className="mt-3 text-sm">Ihr QR-Code erscheint hier</p></div>}</div></div></ToolShell>; }

const localItems = ["Vollständig gepflegtes Google-Unternehmensprofil","Einheitliche Kontaktdaten im Web","Passende Haupt- und Nebenkategorien","Mindestens 10 aktuelle Bewertungen","Antworten auf Kundenbewertungen","Leistung und Ort im Seitentitel","Eigene Standort- oder Einzugsgebietsseite","Lokale Referenzen und Projekte","Mobile Website mit schneller Ladezeit","Einträge in relevanten Branchenportalen"];
export function LocalSeoCheck(){const [yes,setYes]=useState<number[]>([]);const score=yes.length*10;return <ToolShell slug="local-seo-check"><div className="rounded-2xl border bg-card p-6 md:p-9"><ResultBar score={score}/><div className="mt-8 space-y-2">{localItems.map((x,i)=><button type="button" key={x} onClick={()=>setYes(v=>v.includes(i)?v.filter(n=>n!==i):[...v,i])} className={`flex min-h-14 w-full cursor-pointer items-center gap-3 rounded-lg border p-4 text-left text-sm transition-colors ${yes.includes(i)?"border-primary bg-primary/5":"hover:bg-secondary"}`}>{yes.includes(i)?<CheckCircle2 className="shrink-0 text-primary" size={20}/>:<XCircle className="shrink-0 text-muted-foreground" size={20}/>}<span>{x}</span></button>)}</div><p className="mt-6 rounded-lg bg-secondary p-4 text-sm">{score>=80?"Ihre lokale Basis ist stark. Der nächste Hebel sind lokale Inhalte und kontinuierliche Signale.":score>=50?"Sie sind auf dem richtigen Weg. Schließen Sie zuerst die noch offenen Grundlagen.":"Ihre lokale Sichtbarkeit hat großes, kurzfristig nutzbares Potenzial."}</p></div></ToolShell>}

const privacyItems = ["Die Website nutzt HTTPS","Impressum ist leicht erreichbar","Datenschutzerklärung ist aktuell","Nicht notwendige Cookies starten erst nach Einwilligung","Ablehnen ist so einfach wie Akzeptieren","Externe Schriftarten sind lokal eingebunden","Formulare enthalten einen Datenschutzhinweis","Analyse- und Marketingdienste sind dokumentiert","Eingebettete Karten/Videos sind vor Zustimmung blockiert","Auftragsverarbeitungsverträge sind geprüft"];
export function PrivacyCheck(){const [state,setState]=useState<Record<number,boolean>>({});const answered=Object.keys(state).length;const yes=Object.values(state).filter(Boolean).length;const score=answered?Math.round(yes/privacyItems.length*100):0;return <ToolShell slug="datenschutz-check"><div className="rounded-2xl border bg-card p-6 md:p-9"><div className="rounded-lg border-l-4 border-[var(--brand-gold)] bg-secondary p-4 text-sm"><strong>Wichtig:</strong> Technischer Selbstcheck, keine Rechtsberatung. Im Zweifel fachkundig prüfen lassen.</div><div className="my-8"><ResultBar score={score}/></div><div className="space-y-3">{privacyItems.map((x,i)=><div key={x} className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"><span className="text-sm">{x}</span><div className="flex gap-2"><button onClick={()=>setState(s=>({...s,[i]:true}))} className={`min-h-11 cursor-pointer rounded-md border px-4 text-sm ${state[i]===true?"border-primary bg-primary text-primary-foreground":"hover:bg-secondary"}`}>Ja</button><button onClick={()=>setState(s=>({...s,[i]:false}))} className={`min-h-11 cursor-pointer rounded-md border px-4 text-sm ${state[i]===false?"border-destructive bg-destructive text-white":"hover:bg-secondary"}`}>Nein / unklar</button></div></div>)}</div>{answered>0&&<p className="mt-6 rounded-lg bg-secondary p-4 text-sm">{yes===privacyItems.length?"Alle typischen Grundlagen sind nach Ihrer Einschätzung abgedeckt. Lassen Sie Änderungen trotzdem regelmäßig prüfen.":`${privacyItems.length-yes} Punkt(e) sind offen oder unklar. Priorisieren Sie Einwilligungen, externe Dienste und Pflichtseiten.`}</p>}</div></ToolShell>}

export function ToolsIndex(){return <><section className="bg-secondary/45 px-5 py-20"><div className="mx-auto max-w-4xl text-center"><Eyebrow>Kostenlose Website-Tools</Eyebrow><h1 className="mt-5 font-serif text-5xl md:text-6xl">Bessere Entscheidungen für Ihre Website.</h1><p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/65">Fünf praktische Rechner und Checks für Kosten, SEO, Google-Bewertungen, lokale Sichtbarkeit und Datenschutz.</p></div></section><Section><div className="grid gap-5 md:grid-cols-2">{tools.map((t,i)=><LocalizedLink key={t.slug} to={`/tools/${t.slug}` as "/"} className={`group rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg ${i===0?"md:col-span-2 md:flex md:items-center md:justify-between":""}`}><div><t.icon className="text-primary" size={28}/><p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">{t.intent}</p><h2 className="mt-2 font-serif text-2xl">{t.title}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-foreground/65">{t.text}</p></div><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">Tool starten <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></span></LocalizedLink>)}</div></Section></>}

export function toolsIndexHead(){const title="Kostenlose Website- & SEO-Tools";const description="Kostenlose Tools für Website-Kosten, SEO, Google-Bewertungen, Local SEO und Datenschutz.";return{meta:[{title:`${title} | Burmeister Webdesign`},{name:"description",content:description},...socialMeta({title,description,path:"/tools"})],links:[{rel:"canonical",href:`${SITE_URL}/tools`}],scripts:[{type:"application/ld+json",children:JSON.stringify(breadcrumbJsonLd("/tools","Tools"))}]}}
