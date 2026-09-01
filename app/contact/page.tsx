import type { Metadata } from "next";
import { ContactExperience } from "@/components/contact/contact-experience";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, businessId, safeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Horaires et contact à Avize | Boucherie Tourteaux" },
  description: "Adresse, téléphone, horaires et itinéraire de la Boucherie Tourteaux : 33 rue Pasteur, 51190 Avize. Ouverte le dimanche matin.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Boucherie Tourteaux à Avize", description: "Adresse, téléphone, horaires et itinéraire de la Boucherie Tourteaux.", url: "/contact", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact | Boucherie Tourteaux", description: "Adresse, téléphone et horaires de la Boucherie Tourteaux à Avize." },
};

const faq = [
  { question: "Quels sont les horaires de la Boucherie Tourteaux ?", answer: "La boucherie est ouverte du mardi au samedi de 8h à 13h et de 15h30 à 19h, ainsi que le dimanche de 8h à 13h. Elle est fermée le lundi." },
  { question: "Où se trouve la Boucherie Tourteaux ?", answer: "La boutique se trouve au 33 rue Pasteur, 51190 Avize, dans la Marne." },
  { question: "Comment vérifier une disponibilité ?", answer: "Contactez directement la boucherie au 03 26 51 73 71 avant votre déplacement." },
  { question: "Les disponibilités sont-elles affichées en ligne ?", answer: "La sélection peut évoluer. Les disponibilités précises sont communiquées directement en boutique ou par téléphone." },
  { question: "La boucherie est-elle ouverte le dimanche ?", answer: "Oui, la Boucherie Tourteaux est ouverte le dimanche de 8h à 13h." },
  { question: "La Boucherie Tourteaux propose-t-elle un service traiteur ?", answer: "Oui. Contactez la boucherie pour présenter votre besoin et connaître les possibilités disponibles." },
  { question: "La livraison est-elle proposée ?", answer: "Oui, un service de livraison est proposé. Sa zone, ses jours et ses conditions doivent être confirmés directement avec la boutique." },
  { question: "Comment venir depuis Épernay ?", answer: "La boutique se situe à Avize, au sud d’Épernay. Utilisez le bouton Itinéraire pour calculer le trajet actuel depuis votre adresse." },
] as const;

export default function ContactPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  const crumbs = [{ name: "Accueil", href: "/" }, { name: "Contact", href: "/contact" }] as const;
  const pageSchema = { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact et horaires de la Boucherie Tourteaux", url: `${siteConfig.url}/contact`, about: { "@id": businessId } };

  return (
    <>
      <ContactExperience faq={faq} email={siteConfig.email} phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} hours={siteConfig.hours} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd([pageSchema, breadcrumbSchema(crumbs), faqSchema]) }} />
    </>
  );
}
