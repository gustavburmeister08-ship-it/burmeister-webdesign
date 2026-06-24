import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const metaEventSchema = z.object({
  eventName: z.enum(["Contact", "Lead", "PageView", "ViewContent"]),
  eventId: z.string().min(8).max(120),
  eventSourceUrl: z.string().url(),
  clientUserAgent: z.string().min(1).max(1000),
  fbp: z.string().max(200).optional(),
  fbc: z.string().max(200).optional(),
  email: z.string().max(200).optional(),
  phone: z.string().max(80).optional(),
  firstName: z.string().max(100).optional(),
  lastName: z.string().max(100).optional(),
  customData: z
    .record(z.union([z.string(), z.number(), z.boolean()]))
    .optional(),
});

export const trackMetaServerEvent = createServerFn({ method: "POST" })
  .inputValidator(metaEventSchema)
  .handler(async ({ data }) => {
    const { sendMetaCapiEvent } = await import("@/lib/meta-capi.server");
    return sendMetaCapiEvent(data);
  });
