import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery/gallery-experience";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Découvrez en images l’univers éditorial de la Boucherie Tourteaux à Avize.",
  alternates: { canonical: "/galerie" },
  openGraph: { title: "Galerie | Boucherie Tourteaux", description: "L’univers de la Boucherie Tourteaux en images.", url: "/galerie", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Galerie | Boucherie Tourteaux", description: "L’univers de la Boucherie Tourteaux en images." },
};

export default function GalleryPage() {
  return <GalleryExperience />;
}
