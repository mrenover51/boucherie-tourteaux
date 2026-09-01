export const siteConfig = {
  name: "Boucherie Tourteaux",
  description: "Boucherie artisanale à Avize : viandes françaises, charcuterie maison et service traiteur.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://boucherie-tourteaux.fr",
  phone: "03 26 51 73 71", phoneHref: "tel:+33326517371", email: "mrtourteaux51@hotmail.fr",
  address: { street: "33 rue Pasteur", postalCode: "51190", city: "Avize", region: "Grand Est", country: "FR" },
  hours: [{ days: "Lundi", hours: "Fermé" },{ days: "Mardi — Samedi", hours: "8h — 13h · 15h30 — 19h" },{ days: "Dimanche", hours: "8h — 13h" }],
} as const;
export const navigation = [{ label: "Accueil", href: "/" },{ label: "La Boucherie", href: "/boucherie" },{ label: "Nos Produits", href: "/produits" },{ label: "Traiteur", href: "/traiteur" },{ label: "Nos Engagements", href: "/boucherie#engagements" },{ label: "Galerie", href: "/galerie" },{ label: "Actualités", href: "/#actualites" },{ label: "Contact", href: "/contact" }] as const;
