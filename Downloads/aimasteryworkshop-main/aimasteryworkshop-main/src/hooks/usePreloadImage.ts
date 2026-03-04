import { useEffect } from "react";

/** Dynamically injects a <link rel="preload"> for the hero image if not already present */
const usePreloadImage = (src: string) => {
  useEffect(() => {
    if (!src) return;
    const existing = document.querySelector(`link[rel="preload"][href="${src}"]`);
    if (existing) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
    return () => { link.remove(); };
  }, [src]);
};

export default usePreloadImage;
