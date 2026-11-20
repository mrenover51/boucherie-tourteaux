import cover from "@/public/images/noel/Menu de Noël Gourmand à la Boucherie Tourteaux.webp";
import first from "@/public/images/noel/Menu de Noël Boucherie Tourteaux.webp";
import second from "@/public/images/noel/Menu de Noël 2026 Boucherie Tourteaux.webp";

// Passer à false pour masquer les promotions. La page et son référencement restent accessibles.
// Aucune désactivation automatique.
export const christmasPromotionEnabled = true;
export const christmasCover = cover;
export const christmasMenus = [
  { image: first, alt: "Menu de Noël 2026 à Avize, page 1 sur 2 : mises en bouche, entrées, poissons et plats cuisinés" },
  { image: second, alt: "Menu de Noël 2026 à Avize, page 2 sur 2 : accompagnements, viandes et volailles" },
] as const;

// Transcription des deux visuels officiels, sans conversion des tarifs « au cours ».
export const christmasCategories: { title: string; products: [string, string][] }[] = [
  { title: "Mises en bouche", products: [
    ["Assortiment petits fours", "1,00 €/pièce"],
    ["Plateau de charcuterie", "5,00 €/100 g"],
    ["Caviar 30 g", "69,95 €/pièce"],
    ["Œuf de Noël saumon & truffe ou Saint-Jacques & mandarine", "4,50 €/pièce"],
  ] },
  { title: "Entrées froides", products: [
    ["Saumon fumé Écossais", "95,95 €/kg"],
    ["Foie gras", "150,00 €/kg"],
    ["Pâté en croûte de canard à l’orange", "35,95 €/kg"],
    ["Pâté en croûte Saint-Jacques Noilly-Prat", "41,95 €/kg"],
    ["Pâté en croûte chapon et trompettes-de-la-mort", "35,95 €/kg"],
    ["Saumon farci mousseline de crevettes", "69,95 €/kg"],
    ["Demi langouste", "au cours"],
    ["Exquis d’artichaut", "7,95 €/pièce"],
  ] },
  { title: "Entrées chaudes", products: [
    ["Coquille Saint-Jacques à la normande", "7,95 €/pièce"],
    ["Boudin blanc aux morilles", "22,95 €/kg"],
    ["Boudin blanc à la truffe", "29,95 €/kg"],
    ["Escargots de Bourgogne", "11,95 €/douzaine"],
    ["Bouchée aux ris de veau", "9,95 €/pièce"],
    ["Délice de Saint-Jacques au Riesling", "8,95 €/pièce"],
    ["Cassolette de ris de veau et queues de morilles", "9,95 €/pièce"],
  ] },
  { title: "Poissons cuisinés", products: [
    ["Cabillaud sauce au chorizo", "12,95 €/pièce"],
    ["Loup de mer sauce crustacés et Cognac", "12,95 €/pièce"],
    ["Filet de dorade sauce au beurre blanc", "13,95 €/pièce"],
  ] },
  { title: "Viandes et volailles cuisinées", products: [
    ["Chapon crème de morilles et foie gras", "12,95 €/pièce"],
    ["Suprême de pintade aux trompettes-de-la-mort", "14,95 €/pièce"],
    ["Filet de bœuf en croûte sauce foie gras", "16,95 €/pièce"],
    ["Civet de chevreuil sauce Grand Veneur", "10,95 €/pièce"],
    ["Filet de veau sauce morilles", "15,95 €/pièce"],
  ] },
  { title: "Accompagnements", products: [
    ["Gratin dauphinois", "10,95 €/kg"], ["Gratin dauphinois truffé", "29,95 €/kg"],
    ["Pommes dauphines", "22,95 €/kg"], ["Fagot de haricots verts", "2,50 €/pièce"],
    ["Risotto à la truffe", "32,95 €/kg"], ["Fondue de poireaux aux girolles", "31,95 €/kg"],
    ["Fricassée de cèpes", "69,95 €/kg"],
  ] },
  { title: "Les viandes", products: [
    ["Filet de porc", "23,95 €/kg"], ["Filet de veau", "54,95 €/kg"],
    ["Filet de bœuf", "59,95 €/kg"], ["Rosbeef extra", "33,95 €/kg"],
  ] },
  { title: "Volailles fermières", products: [
    ["Chapon fermier blanc Champagne", "21,95 €/kg"], ["Chapon fermier jaune Champagne", "21,95 €/kg"],
    ["Chapon fermier noir Challans", "22,95 €/kg"], ["Chapon fermier jaune Challans", "22,95 €/kg"],
    ["Mini chapon fermier", "25,95 €/kg"], ["Dinde fermière Challans", "25,95 €/kg"],
    ["Poularde fermière", "21,95 €/kg"], ["Chapon de pintade", "29,95 €/kg"],
  ] },
  { title: "Volailles de Bresse", products: [
    ["Chapon de Bresse", "au cours"], ["Poularde de Bresse", "au cours"],
    ["Dinde de Bresse", "au cours"], ["Poulet de Bresse", "au cours"],
  ] },
  { title: "Découpes de volailles", products: [
    ["Cuisse de chapon", "22,95 €/kg"], ["Suprême de chapon", "34,95 €/kg"],
    ["Suprême de poularde", "35,95 €/kg"], ["Cuisse de poularde", "24,95 €/kg"],
    ["Cuisse de pintade", "20,95 €/kg"], ["Suprême de pintade", "28,95 €/kg"],
  ] },
];
