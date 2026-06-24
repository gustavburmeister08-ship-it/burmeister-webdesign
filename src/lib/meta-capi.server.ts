import process from "node:process";

const DEFAULT_API_VERSION = "v25.0";

type MetaEventName = "Contact" | "Lead" | "PageView" | "ViewContent";

export type MetaCapiEventInput = {
  eventName: MetaEventName;
  eventId: string;
  eventSourceUrl: string;
  clientUserAgent: string;
  fbp?: string;
  fbc?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  customData?: Record<string, string | number | boolean>;
};

export type MetaCrmEventInput = {
  eventName: string;
  eventTime?: number;
  leadEventSource?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  fbc?: string;
  leadId?: string | number;
};

type MetaUserData = {
  client_user_agent?: string;
  fbp?: string;
  fbc?: string;
  em?: string[];
  ph?: string[];
  fn?: string[];
  ln?: string[];
  lead_id?: string | number;
};

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function getMetaConfig() {
  return {
    accessToken: process.env.META_CAPI_ACCESS_TOKEN,
    pixelId: process.env.META_PIXEL_ID,
    apiVersion: process.env.META_CAPI_API_VERSION ?? DEFAULT_API_VERSION,
    testEventCode: process.env.META_TEST_EVENT_CODE,
    crmLeadEventSource:
      process.env.META_CRM_LEAD_EVENT_SOURCE ?? "Burmeister Webdesign CRM",
  };
}

async function sha256(value: string) {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hashBuffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function hashIfPresent(
  value: string | undefined,
  normalize: (value: string) => string,
) {
  if (!value) return undefined;
  const normalized = normalize(value);
  if (!normalized) return undefined;
  return sha256(normalized);
}

export async function sendMetaCapiEvent(input: MetaCapiEventInput) {
  const config = getMetaConfig();

  if (!config.accessToken || !config.pixelId) {
    return { configured: false, sent: false };
  }

  const [email, phone, firstName, lastName] = await Promise.all([
    hashIfPresent(input.email, normalizeEmail),
    hashIfPresent(input.phone, normalizePhone),
    hashIfPresent(input.firstName, normalizeText),
    hashIfPresent(input.lastName, normalizeText),
  ]);

  const userData: MetaUserData = {
    client_user_agent: input.clientUserAgent,
    ...(input.fbp ? { fbp: input.fbp } : {}),
    ...(input.fbc ? { fbc: input.fbc } : {}),
    ...(email ? { em: [email] } : {}),
    ...(phone ? { ph: [phone] } : {}),
    ...(firstName ? { fn: [firstName] } : {}),
    ...(lastName ? { ln: [lastName] } : {}),
  };

  const body = {
    data: [
      {
        event_name: input.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        event_source_url: input.eventSourceUrl,
        action_source: "website",
        opt_out: false,
        data_processing_options: [],
        user_data: userData,
        ...(input.customData ? { custom_data: input.customData } : {}),
      },
    ],
    ...(config.testEventCode ? { test_event_code: config.testEventCode } : {}),
  };

  return postMetaEvents(body, config);
}

export async function sendMetaCrmEvent(input: MetaCrmEventInput) {
  const config = getMetaConfig();

  if (!config.accessToken || !config.pixelId) {
    return { configured: false, sent: false };
  }

  const [email, phone, firstName, lastName] = await Promise.all([
    hashIfPresent(input.email, normalizeEmail),
    hashIfPresent(input.phone, normalizePhone),
    hashIfPresent(input.firstName, normalizeText),
    hashIfPresent(input.lastName, normalizeText),
  ]);

  const userData: MetaUserData = {
    ...(input.fbc ? { fbc: input.fbc } : {}),
    ...(input.leadId ? { lead_id: input.leadId } : {}),
    ...(email ? { em: [email] } : {}),
    ...(phone ? { ph: [phone] } : {}),
    ...(firstName ? { fn: [firstName] } : {}),
    ...(lastName ? { ln: [lastName] } : {}),
  };

  const body = {
    data: [
      {
        event_name: input.eventName,
        event_time: input.eventTime ?? Math.floor(Date.now() / 1000),
        action_source: "system_generated",
        user_data: userData,
        custom_data: {
          event_source: "crm",
          lead_event_source: input.leadEventSource ?? config.crmLeadEventSource,
        },
      },
    ],
    ...(config.testEventCode ? { test_event_code: config.testEventCode } : {}),
  };

  return postMetaEvents(body, config);
}

async function postMetaEvents(
  body: unknown,
  config: ReturnType<typeof getMetaConfig>,
) {
  if (!config.accessToken || !config.pixelId) {
    return { configured: false, sent: false };
  }

  const url = new URL(
    `https://graph.facebook.com/${config.apiVersion}/${config.pixelId}/events`,
  );
  url.searchParams.set("access_token", config.accessToken);

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const message = await response.text();
    console.error(`Meta CAPI event failed: ${response.status} ${message}`);
    return { configured: true, sent: false };
  }

  return { configured: true, sent: true };
}
