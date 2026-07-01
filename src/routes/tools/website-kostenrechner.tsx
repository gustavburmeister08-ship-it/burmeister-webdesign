import { createFileRoute } from "@tanstack/react-router"; import { WebsiteKostenrechner, toolHead } from "../-shared/tools";
export const Route=createFileRoute("/tools/website-kostenrechner")({head:()=>toolHead("website-kostenrechner"),component:WebsiteKostenrechner});
