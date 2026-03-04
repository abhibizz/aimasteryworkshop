import { useState, useEffect } from "react";

/**
 * Observes whether an element (by ID) is visible in the viewport.
 * Used to hide sticky CTAs when the registration form is on screen.
 */
export function useFormVisibility(elementId: string, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementId, threshold]);

  return visible;
}
