import { createFileRoute } from "@tanstack/react-router"; import { PrivacyCheck, toolHead } from "../-shared/tools";
export const Route=createFileRoute("/tools/datenschutz-check")({head:()=>toolHead("datenschutz-check"),component:PrivacyCheck});
