import { createFileRoute } from "@tanstack/react-router"; import { ReviewLinkGenerator, toolHead } from "../-shared/tools";
export const Route=createFileRoute("/tools/google-bewertungslink-generator")({head:()=>toolHead("google-bewertungslink-generator"),component:ReviewLinkGenerator});
