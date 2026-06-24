import { trackMetaServerEvent } from "@/lib/api/meta-capi.functions";

type MetaEventName = "Contact" | "Lead" | "PageView" | "ViewContent";

type LeadData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  service?: string;
  budget?: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelQueue;
    _fbq?: Window["fbq"];
  }
}

type MetaPixelQueue = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: MetaPixelQueue;
  queue: unknown[];
  version?: string;
};

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
const VIEW_CONTENT_PATHS = new Set(["/kontakt", "/leistungen", "/preise"]);

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));
  return cookie
    ? decodeURIComponent(cookie.split("=").slice(1).join("="))
    : undefined;
}

function createEventId(eventName: MetaEventName) {
  const random =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2);
  return `${eventName.toLowerCase()}-${Date.now()}-${random}`;
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return {};
  if (parts.length === 1) return { firstName: parts[0] };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export function isMetaPixelConfigured() {
  return Boolean(PIXEL_ID);
}

async function sendServerEvent(
  eventName: MetaEventName,
  eventId: string,
  leadData?: LeadData,
) {
  if (typeof window === "undefined") return;

  try {
    await trackMetaServerEvent({
      data: {
        eventName,
        eventId,
        eventSourceUrl: window.location.href,
        clientUserAgent: navigator.userAgent,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
        email: leadData?.email,
        phone: leadData?.phone,
        firstName: leadData?.firstName,
        lastName: leadData?.lastName,
        customData: {
          page_path: window.location.pathname,
          ...(leadData?.service ? { service: leadData.service } : {}),
          ...(leadData?.budget ? { budget: leadData.budget } : {}),
        },
      },
    });
  } catch (error) {
    console.warn("Meta CAPI event could not be sent", error);
  }
}

export function trackMetaEvent(eventName: MetaEventName, leadData?: LeadData) {
  const eventId = createEventId(eventName);

  if (PIXEL_ID && typeof window !== "undefined") {
    window.fbq?.("track", eventName, {}, { eventID: eventId });
  }

  void sendServerEvent(eventName, eventId, leadData);
}

export function trackLeadFromForm(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  trackMetaEvent("Lead", {
    ...splitName(name),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("telefon") ?? ""),
    service: String(formData.get("leistung") ?? ""),
    budget: String(formData.get("budget") ?? ""),
  });
}

export function shouldTrackViewContent(pathname: string) {
  return VIEW_CONTENT_PATHS.has(pathname);
}
