import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MenuViewer } from "@/components/noel/menu-viewer";
import { christmasCategories, christmasCover } from "@/lib/noel-2026";
import { createMetadata } from "@/lib/metadata";

const title = "Menu de Noël 2026 à Avize | Boucherie Tourteaux";
const description = "Découvrez le menu de Noël 2026 de la Boucherie Tourteaux à Avize : entrées festives, plats cuisinés, viandes, volailles et accompagnements.";
const baseMetadata = createMetadata(title, description, "/noel-2026");
export const metadata = {
  ...baseMetadata,
  title: { absolute: title },
  openGraph: { ...baseMetadata.openGraph, images: [{ url: christmasCover.src, width: christmasCover.width, height: christmasCover.height, alt: "Tables en Fête — Noël 2026" }] },
  twitter: { ...baseMetadata.twitter, images: [christmasCover.src] },
};

export default function ChristmasPage() {
  return <div className="christmas-page">
    <section className="border-b border-[#d7b76b]/30 bg-[#290e18] pb-12 pt-40 sm:pb-20 sm:pt-48">
      <Container className="grid items-center gap-10 md:grid-cols-[1.15fr_.85fr] md:gap-16">
        <div><p className="text-sm uppercase tracking-[.22em] text-[#e3c783]">À Avize · Noël 2026</p>
          <h1 className="mt-5 font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[.95]">Tables en Fête</h1>
          <p className="mt-7 text-xl text-[#ead9b4]">Menu de Noël 2026 — Boucherie Tourteaux</p>
          <p className="mt-6 max-w-xl text-base leading-8">Pour vos repas de fête, la Boucherie Tourteaux vous propose une sélection de mets gourmands, viandes, volailles et accompagnements pour partager un Noël savoureux.</p>
          <a href="#menus" className="christmas-button mt-7">CONSULTER LES MENUS</a>
        </div>
        <Image src={christmasCover} alt="Affiche officielle Tables en Fête : menu de Noël 2026 de la Boucherie Tourteaux à Avize" preload sizes="(max-width: 767px) 85vw, 420px" className="mx-auto h-auto w-full max-w-[420px] border border-[#d7b76b]/40 p-2" />
      </Container>
    </section>
    <section id="menus" className="scroll-mt-32 py-14 sm:py-20"><Container>
      <p className="text-sm uppercase tracking-[.2em] text-[#e3c783]">Les menus officiels</p>
      <h2 className="mt-4 font-serif text-4xl sm:text-6xl">Votre table de fête, à découvrir.</h2>
      <p className="mb-9 mt-5 max-w-2xl text-base leading-7">Consultez les deux pages et agrandissez les visuels pour lire chaque détail. Retrouvez également tous les produits et tarifs ci-dessous.</p>
      <MenuViewer />
    </Container></section>
    <section className="border-y border-[#d7b76b]/25 bg-[#201419] py-14 sm:py-20"><Container>
      <h2 className="font-serif text-4xl sm:text-6xl">Les spécialités de Noël</h2>
      <p className="mt-5 text-base leading-7">Ouvrez une catégorie pour consulter les produits et leurs tarifs.</p>
      <div className="mt-9 grid items-start gap-4 lg:grid-cols-2">{christmasCategories.map(category => <details key={category.title} className="christmas-category">
        <summary className="cursor-pointer px-5 py-5 font-serif text-2xl text-[#f0d99f]">{category.title}</summary>
        <dl className="px-5 pb-3">{category.products.map(([name, price]) => <div key={name} className="flex flex-wrap justify-between gap-x-5 gap-y-2 border-t border-[#d7b76b]/20 py-4 text-base leading-7">
          <dt className="min-w-0 flex-1 basis-44">{name}</dt><dd className="text-[#f0d99f]">{price}</dd>
        </div>)}</dl>
      </details>)}</div>
    </Container></section>
    <section className="py-14 sm:py-20"><Container>
      <div className="border border-[#d7b76b]/45 bg-[#290e18] p-6 sm:p-12">
        <h2 className="max-w-3xl font-serif text-4xl sm:text-5xl">Préparez vos fêtes avec la Boucherie Tourteaux</h2>
        <p className="mt-6 max-w-2xl text-base leading-8">Pour toute information ou pour préparer votre commande de Noël, contactez directement notre équipe en boutique ou par téléphone.</p>
        <address className="mt-7 space-y-2 text-base not-italic leading-7"><p className="font-bold text-[#e3c783]">Boucherie Tourteaux</p><p>33 rue Pasteur, 51190 Avize</p><p><a href="tel:+33326517371">03 26 51 73 71</a></p><p><a className="break-all" href="mailto:boucherie.tourteaux@gmail.com">boucherie.tourteaux@gmail.com</a></p></address>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="tel:+33326517371" className="christmas-button">APPELER LA BOUCHERIE</a><Link href="/contact" className="christmas-button">NOUS CONTACTER</Link></div>
      </div>
    </Container></section>
  </div>;
}
