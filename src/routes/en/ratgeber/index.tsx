import { createFileRoute } from "@tanstack/react-router";
import { RatgeberIndexPage, ratgeberIndexHead } from "../../-shared/ratgeber-index";

export const Route = createFileRoute("/en/ratgeber/")({
  head: () => ratgeberIndexHead("en"),
  component: () => <RatgeberIndexPage locale="en" />,
});
