import { createFileRoute } from "@tanstack/react-router";
import { RatgeberRelaunchPage, ratgeberRelaunchHead } from "../-shared/ratgeber-website-relaunch-kosten";

export const Route = createFileRoute("/ratgeber/website-relaunch-kosten-leipzig")({
  head: () => ratgeberRelaunchHead("de"),
  component: () => <RatgeberRelaunchPage locale="de" />,
});
