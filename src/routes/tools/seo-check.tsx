import { createFileRoute } from "@tanstack/react-router"; import { SeoCheck, toolHead } from "../-shared/tools";
export const Route=createFileRoute("/tools/seo-check")({head:()=>toolHead("seo-check"),component:SeoCheck});
