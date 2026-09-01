import { siteConfig } from "@/lib/site-config";

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.street,
  postalCode: siteConfig.address.postalCode,
  addressLocality: siteConfig.address.city,
  addressRegion: "Marne",
  addressCountry: siteConfig.address.country,
};

export const openingHoursSpecification = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "13:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "15:30", closes: "19:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "13:00" },
] as const;

export const businessId = `${siteConfig.url}/#commerce`;

export function breadcrumbSchema(items: readonly { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
