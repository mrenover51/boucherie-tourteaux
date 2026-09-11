export const siteConfig = {
  name: "Boucherie Tourteaux",
  description: "Boucherie à Avize, au cœur de la Côte des Blancs : service traiteur, livraison et vente à emporter. À proximité d’Épernay.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://boucherie-tourteaux.fr",
  phone: "03 26 51 73 71", phoneHref: "tel:+33326517371", email: "boucherie.tourteaux@gmail.com",
  address: { street: "33 rue Pasteur", postalCode: "51190", city: "Avize", region: "Grand Est", country: "FR" },
  hours: [{ days: "Lundi", hours: "Fermé" },{ days: "Mardi — Samedi", hours: "8h — 13h · 15h30 — 19h" },{ days: "Dimanche", hours: "8h — 13h" }],
} as const;
export const navigation = [{ label: "Accueil", href: "/" },{ label: "La Boucherie", href: "/boucherie" },{ label: "Nos Produits", href: "/produits" },{ label: "Traiteur", href: "/traiteur" },{ label: "Autour d’Avize", href: "/boucherie-autour-avize" },{ label: "Galerie", href: "/galerie" },{ label: "Contact", href: "/contact" }] as const;
