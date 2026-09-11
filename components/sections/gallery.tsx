"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  { src: "/images/etalage 1.png", alt: "Étal de la Boucherie Tourteaux à Avize", className: "md:col-span-4 md:row-span-2 lg:col-span-6", mobileRatio: "aspect-[4/3]" },
  { src: "/images/Boucher 1.png", alt: "Découpe artisanale à la Boucherie Tourteaux à Avize", className: "md:col-span-2 md:row-span-2 lg:col-span-3", mobileRatio: "aspect-[3/4]" },
  { src: "/images/petit-four.png", alt: "Assortiment de petits fours de la Boucherie Tourteaux à Avize", className: "md:col-span-3 md:row-span-2 lg:col-span-3", mobileRatio: "aspect-[3/4]" },
  { src: "/images/prepa-pate1.png", alt: "Préparation artisanale à la Boucherie Tourteaux à Avize", className: "md:col-span-3 md:row-span-2 lg:col-span-4", mobileRatio: "aspect-[4/3]" },
  { src: "/images/rayon 6.png", alt: "Pièces de bœuf présentées à la Boucherie Tourteaux à Avize", className: "md:col-span-2 md:row-span-2 lg:col-span-3", mobileRatio: "aspect-[3/4]" },
  { src: "/images/galerie-outils.webp", alt: "Outils du métier de boucher", className: "md:col-span-4 md:row-span-2 lg:col-span-5", mobileRatio: "aspect-[4/3]" },
] as const;

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected === null ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <div data-stagger className="mt-12 grid grid-cols-1 gap-3 sm:auto-rows-[280px] sm:grid-cols-2 md:auto-rows-[150px] md:grid-cols-6 md:gap-4 lg:auto-rows-[180px] lg:grid-cols-12 xl:auto-rows-[205px]">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelected(index)}
            className={`group relative overflow-hidden rounded-lg text-left ${image.mobileRatio} sm:aspect-auto ${image.className}`}
            aria-label={`Agrandir : ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 67vw, 50vw"
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
            <Expand className="absolute right-5 bottom-5 size-6 translate-y-3 text-on-dark opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div role="dialog" aria-modal="true" aria-label="Aperçu de la galerie" onClick={() => setSelected(null)} className="fixed inset-0 z-[100] grid place-items-center bg-black/92 p-5">
          <button type="button" className="absolute top-6 right-6 text-on-dark" aria-label="Fermer"><X className="size-8" /></button>
          <div className="relative h-[80vh] w-full max-w-6xl">
            <Image src={images[selected].src} alt={images[selected].alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
