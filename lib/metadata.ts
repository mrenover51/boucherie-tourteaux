import type { Metadata } from "next";
export function createMetadata(title: string, description: string, canonical = "/"): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, locale: "fr_FR", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
