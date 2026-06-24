import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";

import {
  initMetaPixel,
  isMetaPixelConfigured,
  shouldTrackViewContent,
  trackMetaEvent,
  trackMetaPageView,
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
  const lastPageViewPath = useRef<string | null>(null);
  const lastViewContentPath = useRef<string | null>(null);

  useEffect(() => {
    if (!isMetaPixelConfigured()) return;
    initMetaPixel();
  }, []);

  useEffect(() => {
    const path = location.pathname;

    if (lastPageViewPath.current !== path) {
      lastPageViewPath.current = path;
      trackMetaPageView();
    }

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
