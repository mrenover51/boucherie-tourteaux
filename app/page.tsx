import { HomeExperience } from "@/components/home/home-experience";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata(
  "Boucherie Tourteaux à Avize, au cœur de la Côte des Blancs",
  "Boucherie Tourteaux à Avize : boucherie, service traiteur, livraison et vente à emporter au cœur de la Côte des Blancs, près d’Épernay.",
  "/",
);

export default function HomePage() {
  return <HomeExperience phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} />;
}
