import { createFileRoute } from "@tanstack/react-router";
import {
  RatgeberWasKostetPage,
  ratgeberWasKostetHead,
} from "../../-shared/ratgeber-was-kostet-eine-website";

export const Route = createFileRoute(
  "/en/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen",
)({
  head: () => ratgeberWasKostetHead("en"),
  component: () => <RatgeberWasKostetPage locale="en" />,
});
