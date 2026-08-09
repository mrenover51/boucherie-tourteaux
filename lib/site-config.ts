export const siteConfig = {
  name: "Boucherie Tourteaux",
  description: "Boucherie, charcuterie et traiteur à Avize, dans la Marne.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://boucherie-tourteaux.fr",
  phone: "03 26 51 73 71",
  phoneHref: "tel:+33326517371",
  email: "mrtourteaux51@hotmail.fr",
  address: { street: "33 rue Pasteur", postalCode: "51190", city: "Avize", region: "Grand Est", country: "FR" },
  hours: [
    { days: "Lundi", hours: "Fermé" },
    { days: "Mardi — Samedi", hours: "8h — 13h · 15h30 — 19h" },
    { days: "Dimanche", hours: "8h — 13h" },
  ],
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "La boucherie", href: "/boucherie" },
  { label: "Produits", href: "/produits" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
] as const;
