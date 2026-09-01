import type { Metadata } from "next";
import { LocalLanding, type LocalLandingContent } from "@/components/local/local-landing";

export const metadata: Metadata = {
  title: { absolute: "Boucherie près d’Épernay : venir à Avize | Tourteaux" },
  description: "Depuis Épernay, rejoignez la Boucherie Tourteaux au 33 rue Pasteur à Avize. Retrouvez l’itinéraire, les horaires et les services confirmés.",
  alternates: { canonical: "/boucherie-epernay" },
  openGraph: { title: "Boucherie près d’Épernay | Boucherie Tourteaux", description: "Une boucherie à Avize, au sud d’Épernay, avec service traiteur, livraison et vente à emporter.", url: "/boucherie-epernay", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Boucherie près d’Épernay | Tourteaux", description: "Adresse, accès, horaires et services de la Boucherie Tourteaux à Avize." },
};

const content: LocalLandingContent = {
  city: "Épernay",
  slug: "boucherie-epernay",
  eyebrow: "Depuis Épernay vers Avize",
  h1: "Votre boucherie près d’Épernay, à Avize",
  intro: "La Boucherie Tourteaux vous accueille au 33 rue Pasteur à Avize, au sud d’Épernay, au cœur de la Côte des Blancs. Retrouvez ici les informations utiles pour organiser votre déplacement jusqu’à la boutique.",
  routeNote: "Depuis Épernay, rejoignez Avize en direction de la Côte des Blancs. Le temps de trajet dépend du point de départ et de la circulation : ouvrez l’itinéraire pour un guidage à jour.",
  nearby: ["Pierry", "Chouilly", "Oiry", "Moussy", "Mancy", "Monthelon"],
  sections: [
    {
      title: "Une adresse de boucherie au sud d’Épernay",
      paragraphs: [
        "Vous recherchez une boucherie proche d’Épernay sans supposer l’existence d’une seconde boutique en ville ? La Boucherie Tourteaux est implantée uniquement à Avize. Cette page précise donc clairement où se trouve le commerce et comment le rejoindre. Avize se situe à moins de dix kilomètres d’Épernay à vol d’oiseau ; le parcours routier exact varie selon votre quartier de départ.",
        "La boutique réunit les activités publiquement confirmées de boucherie et de service traiteur. La vente à emporter et la livraison sont également proposées. Avant un déplacement motivé par une pièce, une quantité ou une demande précise, le plus simple reste d’appeler le 03 26 51 73 71 : l’équipe peut ainsi vous renseigner sur les disponibilités et les modalités applicables.",
      ],
    },
    {
      title: "Vérifier une disponibilité avant de venir",
      paragraphs: [
        "La page produits présente les grandes catégories visibles dans l’offre du site. Elle ne tient pas lieu de stock en temps réel : la sélection peut varier. Un échange direct avec la boucherie permet simplement de vérifier une disponibilité avant votre venue depuis Épernay. Pour une demande traiteur, présentez votre besoin afin que l’équipe indique ce qui est réellement proposé.",
        "La vente à emporter facilite le retrait en boutique. La livraison étant un service confirmé, ses conditions, son calendrier et sa zone exacte doivent néanmoins être demandés au cas par cas. La présence d’une commune sur cette page ne signifie donc pas qu’une livraison y est systématiquement assurée.",
      ],
    },
    {
      title: "Horaires et organisation du déplacement",
      paragraphs: [
        "La Boucherie Tourteaux est ouverte du mardi au samedi de 8 h à 13 h puis de 15 h 30 à 19 h, et le dimanche de 8 h à 13 h. Elle est fermée le lundi. Ces horaires sont réunis sur la page contact avec l’adresse, le téléphone cliquable et une carte chargée uniquement à la demande afin de préserver les performances.",
        "Pour venir, utilisez le bouton d’itinéraire : il calcule le parcours actuel vers le 33 rue Pasteur à Avize depuis votre position. Aucune possibilité de stationnement particulière n’est annoncée ici, faute d’information métier validée. En cas de doute, contactez la boutique avant le départ. Vous pouvez aussi découvrir la page consacrée à la zone autour d’Avize pour situer Cramant, Le Mesnil-sur-Oger et les autres communes de la Côte des Blancs.",
      ],
    },
  ],
};

export default function BoucherieEpernayPage() { return <LocalLanding content={content} />; }
