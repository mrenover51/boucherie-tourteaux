import type { Metadata } from "next";
import { ContactExperience } from "@/components/contact/contact-experience";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact et horaires",
  description: "Contactez la Boucherie Tourteaux au 03 26 51 73 71. Retrouvez-nous au 33 rue Pasteur, 51190 Avize.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Boucherie Tourteaux à Avize", description: "Adresse, téléphone, horaires et itinéraire de la Boucherie Tourteaux.", url: "/contact", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact | Boucherie Tourteaux", description: "Adresse, téléphone et horaires de la Boucherie Tourteaux à Avize." },
};

const faq = [
  { question: "Quels sont les horaires de la Boucherie Tourteaux ?", answer: "La boucherie est ouverte du mardi au samedi de 8h à 13h et de 15h30 à 19h, ainsi que le dimanche de 8h à 13h. Elle est fermée le lundi." },
  { question: "Où se trouve la Boucherie Tourteaux ?", answer: "La boutique se trouve au 33 rue Pasteur, 51190 Avize, dans la Marne." },
  { question: "Comment passer une commande ?", answer: "Pour connaître les disponibilités ou préparer une commande, contactez directement la boucherie au 03 26 51 73 71." },
  { question: "Les disponibilités sont-elles affichées en ligne ?", answer: "La sélection peut évoluer. Les disponibilités précises sont communiquées directement en boutique ou par téléphone." },
] as const;

export default function ContactPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Butcher",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: "+33326517371",
    email: siteConfig.email,
    address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, postalCode: siteConfig.address.postalCode, addressLocality: siteConfig.address.city, addressRegion: siteConfig.address.region, addressCountry: siteConfig.address.country },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "13:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "15:30", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "13:00" },
    ],
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return (
    <>
      <ContactExperience faq={faq} email={siteConfig.email} phone={siteConfig.phone} phoneHref={siteConfig.phoneHref} hours={siteConfig.hours} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
