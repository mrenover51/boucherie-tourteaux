import type { Metadata } from "next";
export function createMetadata(title: string, description: string): Metadata {
  return { title, description, openGraph: { title, description, locale: "fr_FR", type: "website" } };
}
