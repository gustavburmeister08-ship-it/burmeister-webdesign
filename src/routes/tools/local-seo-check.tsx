import { createFileRoute } from "@tanstack/react-router"; import { LocalSeoCheck, toolHead } from "../-shared/tools";
export const Route=createFileRoute("/tools/local-seo-check")({head:()=>toolHead("local-seo-check"),component:LocalSeoCheck});
