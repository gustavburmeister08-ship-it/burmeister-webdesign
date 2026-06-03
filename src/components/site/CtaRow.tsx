import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function CtaRow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${compact ? "" : "mt-8"}`}
      aria-label="Kontaktmöglichkeiten"
    >
      <Link
        to="/kontakt"
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
      >
        Kostenloses Erstgespräch
        <ArrowRight size={16} />
      </Link>
      <a
        href={CONTACT.whatsappHref}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle size={16} /> Per WhatsApp schreiben
      </a>
      <a
        href={CONTACT.phoneHref}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
      >
        <Phone size={16} /> {CONTACT.phoneDisplay}
      </a>
      <a
        href={`mailto:${CONTACT.email}`}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
      >
        <Mail size={16} /> E-Mail
      </a>
    </div>
  );
}