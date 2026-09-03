"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "@/components/ui/maison-icons";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";

const images = [
  { src: "/images/facade.png", width: 1040, height: 649, alt: "Façade de la Boucherie Tourteaux à Avize", caption: "La façade", kind: "wide" },
  { src: "/images/hero.png", width: 1536, height: 1024, alt: "Intérieur et étal de la Boucherie Tourteaux à Avize", caption: "La boutique", kind: "wide" },
  { src: "/images/logo mur.png", width: 1448, height: 1086, alt: "Enseigne intérieure Boucherie Tourteaux à Avize", caption: "L’identité", kind: "wide" },
  { src: "/images/etalage 1.png", width: 1448, height: 1086, alt: "Étal de la Boucherie Tourteaux à Avize", caption: "L’étal", kind: "wide" },
  { src: "/images/Boucher 1.png", width: 1086, height: 1448, alt: "Découpe artisanale à la Boucherie Tourteaux à Avize", caption: "Le geste", kind: "portrait" },
  { src: "/images/rayon 4.png", width: 1448, height: 1086, alt: "Rayon de viandes à la Boucherie Tourteaux à Avize", caption: "Boucherie", kind: "wide" },
  { src: "/images/rayon 5.png", width: 1448, height: 1086, alt: "Sélection de viandes et volailles à la Boucherie Tourteaux à Avize", caption: "La sélection", kind: "wide" },
  { src: "/images/rayon 6.png", width: 1086, height: 1448, alt: "Pièces de bœuf présentées à la Boucherie Tourteaux à Avize", caption: "Belles pièces", kind: "portrait" },
  { src: "/images/rayon 7.png", width: 1086, height: 1448, alt: "Rayon de charcuterie à la Boucherie Tourteaux à Avize", caption: "Charcuterie", kind: "portrait" },
  { src: "/images/rayon 10.png", width: 1448, height: 1086, alt: "Sélection de charcuteries sèches à la Boucherie Tourteaux à Avize", caption: "Charcuterie sèche", kind: "wide" },
  { src: "/images/rayon 1.png", width: 1448, height: 1086, alt: "Sélection traiteur et charcuterie à la Boucherie Tourteaux à Avize", caption: "Traiteur", kind: "wide" },
  { src: "/images/rayon 2.png", width: 1536, height: 1024, alt: "Vitrine de préparations traiteur à la Boucherie Tourteaux à Avize", caption: "Plats préparés", kind: "wide" },
  { src: "/images/rayon 3.png", width: 1448, height: 1086, alt: "Préparations et produits élaborés à la Boucherie Tourteaux à Avize", caption: "Préparations", kind: "wide" },
  { src: "/images/rayon 9.png", width: 1448, height: 1086, alt: "Sélection de fromages à la Boucherie Tourteaux à Avize", caption: "Fromages", kind: "wide" },
  { src: "/images/rayon 8.png", width: 1448, height: 1086, alt: "Sélection de miel à la Boucherie Tourteaux à Avize", caption: "Miel", kind: "wide" },
  { src: "/images/rayon 11.png", width: 1448, height: 1086, alt: "Rayon de conserves et boissons à la Boucherie Tourteaux à Avize", caption: "Conserves & boissons", kind: "wide" },
  { src: "/images/rayon 12.png", width: 1448, height: 1086, alt: "Rayon d’épicerie et accompagnements à la Boucherie Tourteaux à Avize", caption: "Épicerie", kind: "wide" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function GalleryExperience() {
  const [active, setActive] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (active === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => value === null ? 0 : (value + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((value) => value === null ? 0 : (value - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", keydown);
    };
  }, [active]);

  const move = (direction: 1 | -1) => setActive((value) => value === null ? 0 : (value + direction + images.length) % images.length);

  return (
    <>
      <section className="flex min-h-[62svh] items-end border-b border-border-dark/10 bg-background py-16 sm:py-24">
        <Container>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center gap-3 text-[.65rem] font-semibold uppercase tracking-[.24em] text-foreground"><span className="h-px w-8 bg-current" /> En images</motion.p>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <h1 className="overflow-hidden pb-[.12em] font-serif text-[clamp(4rem,10vw,9rem)] leading-[.78] tracking-[-.055em]"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease }} className="block">Galerie de la boucherie à Avize.</motion.span></h1>
            <motion.p initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="max-w-md border-l border-accent pl-6 text-sm leading-7 text-foreground/55">Une collection d’images éditoriales consacrée aux matières, aux gestes et aux différentes catégories de la maison.</motion.p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setActive(index)}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: .65, delay: (index % 3) * .06, ease }}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden bg-surface-subtle text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`Agrandir : ${image.caption}`}
              >
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <span className="absolute right-5 bottom-5 left-5 flex items-end justify-between text-on-dark"><span className="font-serif text-3xl">{image.caption}</span><span className="flex size-10 translate-y-2 items-center justify-center rounded-full bg-surface text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"><Expand className="size-4" /></span></span>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label={`Image ${active + 1} sur ${images.length}`} className="fixed inset-0 z-[90] flex items-center justify-center bg-surface-black/95 p-4 sm:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button type="button" className="absolute inset-0" onClick={() => setActive(null)} aria-label="Fermer la galerie" />
            <button ref={closeButton} type="button" onClick={() => setActive(null)} aria-label="Fermer" className="absolute top-5 right-5 z-20 flex size-12 items-center justify-center rounded-full border border-on-dark/25 text-on-dark transition hover:rotate-90 hover:bg-surface hover:text-foreground"><X className="size-5" /></button>
            <button type="button" onClick={() => move(-1)} aria-label="Image précédente" className="absolute bottom-6 left-5 z-20 flex size-12 items-center justify-center rounded-full border border-on-dark/25 text-on-dark transition hover:bg-surface hover:text-foreground sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"><ChevronLeft className="size-5" /></button>
            <motion.figure key={images[active].src} initial={reduceMotion ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .4, ease }} className="relative z-10 flex max-h-[84vh] max-w-6xl flex-col items-center">
              <Image src={images[active].src} alt={images[active].alt} width={images[active].width} height={images[active].height} sizes="(max-width: 1200px) 90vw, 1152px" className="max-h-[76vh] w-auto max-w-full object-contain" />
              <figcaption className="mt-5 text-center"><span className="font-serif text-2xl text-on-dark">{images[active].caption}</span><span className="ml-4 text-[.65rem] tracking-[.18em] text-accent-light">{String(active + 1).padStart(2, "0")} / {images.length}</span></figcaption>
            </motion.figure>
            <button type="button" onClick={() => move(1)} aria-label="Image suivante" className="absolute right-5 bottom-6 z-20 flex size-12 items-center justify-center rounded-full border border-on-dark/25 text-on-dark transition hover:bg-surface hover:text-foreground sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"><ChevronRight className="size-5" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

