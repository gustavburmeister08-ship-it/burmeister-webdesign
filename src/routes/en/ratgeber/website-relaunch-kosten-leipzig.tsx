import { createFileRoute } from "@tanstack/react-router";
import { RatgeberRelaunchPage, ratgeberRelaunchHead } from "../../-shared/ratgeber-website-relaunch-kosten";

export const Route = createFileRoute("/en/ratgeber/website-relaunch-kosten-leipzig")({
  head: () => ratgeberRelaunchHead("en"),
  component: () => <RatgeberRelaunchPage locale="en" />,
});
