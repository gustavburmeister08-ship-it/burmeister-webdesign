import { createFileRoute } from "@tanstack/react-router";
import { RatgeberIndexPage, ratgeberIndexHead } from "../-shared/ratgeber-index";

export const Route = createFileRoute("/ratgeber/")({
  head: () => ratgeberIndexHead("de"),
  component: () => <RatgeberIndexPage locale="de" />,
});
