import { createFileRoute } from "@tanstack/react-router";
import {
  RatgeberWasKostetPage,
  ratgeberWasKostetHead,
} from "../-shared/ratgeber-was-kostet-eine-website";

export const Route = createFileRoute(
  "/ratgeber/was-kostet-eine-website-fuer-mein-unternehmen",
)({
  head: () => ratgeberWasKostetHead("de"),
  component: () => <RatgeberWasKostetPage locale="de" />,
});
