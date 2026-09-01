import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery/gallery-experience";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Galerie de la boucherie à Avize",
  description: "Découvrez la Boucherie Tourteaux à Avize à travers une sélection d’images de la boutique, du métier et des catégories présentées sur le site.",
  alternates: { canonical: "/galerie" },
  openGraph: { title: "Galerie | Boucherie Tourteaux", description: "L’univers de la Boucherie Tourteaux en images.", url: "/galerie", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Galerie | Boucherie Tourteaux", description: "L’univers de la Boucherie Tourteaux en images." },
};

export default function GalleryPage() {
  const schema = [{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Galerie de la Boucherie Tourteaux", url: `${siteConfig.url}/galerie`, about: { "@id": businessId } }, breadcrumbSchema([{ name: "Accueil", href: "/" }, { name: "Galerie", href: "/galerie" }])];
  return <><GalleryExperience /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} /></>;
}
