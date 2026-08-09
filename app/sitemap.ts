import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/boucherie", "/produits", "/galerie", "/contact"].map((path, i) => ({ url: `${siteConfig.url}${path}`, changeFrequency: i === 0 ? "weekly" : "monthly", priority: i === 0 ? 1 : .8 }));
}
