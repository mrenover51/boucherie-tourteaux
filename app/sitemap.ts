import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/boucherie", "/produits", "/traiteur", "/galerie", "/contact", "/boucherie-autour-avize", "/boucherie-epernay"].map((path) => ({ url: `${siteConfig.url}${path}` }));
}
