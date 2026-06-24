import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";

import {
  isMetaPixelConfigured,
  shouldTrackViewContent,
  trackMetaEvent,
} from "@/lib/meta-events";

function isContactTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;

  const contactLink = target.closest<HTMLAnchorElement>(
    'a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me/"]',
  );
  if (contactLink) return true;

  return Boolean(target.closest("[data-meta-contact]"));
}

export function MetaTracking() {
  const location = useLocation();
  const lastViewContentPath = useRef<string | null>(null);

  useEffect(() => {
    const path = location.pathname;

    if (!shouldTrackViewContent(path) || lastViewContentPath.current === path) {
      return;
    }

    lastViewContentPath.current = path;
    trackMetaEvent("ViewContent");
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (isContactTarget(event.target)) {
        trackMetaEvent("Contact");
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
