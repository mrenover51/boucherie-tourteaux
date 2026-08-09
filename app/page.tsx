import { HomeExperience } from "@/components/home/home-experience";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata(
  "Accueil",
  "Boucherie Tourteaux, boucherie, charcuterie et traiteur au 33 rue Pasteur à Avize.",
);

export default function HomePage() {
  return <HomeExperience phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} />;
}
