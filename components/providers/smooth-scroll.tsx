"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
      deviceMemory?: number;
    }).connection;
    const constrained =
      reducedMotion ||
      connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g" ||
      ((navigator.hardwareConcurrency ?? 8) <= 4 &&
        ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4);

    document.documentElement.dataset.motion = constrained ? "reduced" : "enhanced";
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-stagger], [data-image-reveal], [data-timeline]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
