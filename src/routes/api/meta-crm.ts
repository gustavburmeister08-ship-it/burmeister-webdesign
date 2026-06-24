import process from "node:process";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const crmPayloadSchema = z
  .object({
    event_name: z.string().trim().min(1).max(100),
    event_time: z.number().int().positive().optional(),
    lead_event_source: z.string().trim().min(1).max(120).optional(),
    email: z.string().max(200).optional(),
    phone: z.string().max(80).optional(),
    first_name: z.string().max(100).optional(),
    last_name: z.string().max(100).optional(),
    fbc: z.string().max(200).optional(),
    lead_id: z.union([z.string().min(1).max(32), z.number().int()]).optional(),
  })
  .refine((data) => data.email || data.phone || data.fbc || data.lead_id, {
    message:
      "Send at least one matching parameter: email, phone, fbc, or lead_id.",
  });

export const Route = createFileRoute("/api/meta-crm")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.META_CRM_WEBHOOK_SECRET;

        if (!secret) {
          return Response.json(
            { error: "CRM webhook is not configured." },
            { status: 503 },
          );
        }

        const providedSecret = request.headers.get("x-crm-webhook-secret");
        if (providedSecret !== secret) {
          return Response.json({ error: "Unauthorized." }, { status: 401 });
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON." }, { status: 400 });
        }

        const parsed = crmPayloadSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid CRM payload.", issues: parsed.error.issues },
            { status: 400 },
          );
        }

        const { sendMetaCrmEvent } = await import("@/lib/meta-capi.server");
        const result = await sendMetaCrmEvent({
          eventName: parsed.data.event_name,
          eventTime: parsed.data.event_time,
          leadEventSource: parsed.data.lead_event_source,
          email: parsed.data.email,
          phone: parsed.data.phone,
          firstName: parsed.data.first_name,
          lastName: parsed.data.last_name,
          fbc: parsed.data.fbc,
          leadId: parsed.data.lead_id,
        });

        return Response.json(result);
      },
    },
  },
});
