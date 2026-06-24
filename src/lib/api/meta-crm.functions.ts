import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const metaCrmEventSchema = z.object({
  eventName: z.string().trim().min(1).max(100),
  eventTime: z.number().int().positive().optional(),
  leadEventSource: z.string().trim().min(1).max(120).optional(),
  email: z.string().max(200).optional(),
  phone: z.string().max(80).optional(),
  firstName: z.string().max(100).optional(),
  lastName: z.string().max(100).optional(),
  fbc: z.string().max(200).optional(),
  leadId: z.union([z.string().min(1).max(32), z.number().int()]).optional(),
});

export const trackMetaCrmEvent = createServerFn({ method: "POST" })
  .inputValidator(metaCrmEventSchema)
  .handler(async ({ data }) => {
    const { sendMetaCrmEvent } = await import("@/lib/meta-capi.server");
    return sendMetaCrmEvent(data);
  });
