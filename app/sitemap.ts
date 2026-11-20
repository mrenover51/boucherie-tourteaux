import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/noel-2026", "/boucherie", "/produits", "/traiteur", "/galerie", "/contact", "/boucherie-autour-avize", "/boucherie-epernay"].map((path) => ({ url: `${siteConfig.url}${path}` }));
}
