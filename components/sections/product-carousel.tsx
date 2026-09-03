"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Beef } from "lucide-react";
import { useRef } from "react";
type Product = { title: string; text: string; image: string };
export function ProductCarousel({ products }: { products: Product[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (direction: number) =>
    ref.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  return (
    <div className="mt-12">
      <div
        ref={ref}
        data-stagger
        className="scrollbar-none flex snap-x gap-5 overflow-x-auto pb-6"
      >
        {products.map((p) => (
          <article
            key={p.title}
            className="group min-w-[78vw] snap-start overflow-hidden rounded-[.75rem] border border-border-dark/8 bg-surface shadow-[0_14px_36px_rgba(23,23,23,.055)] transition duration-500 hover:-translate-y-1 sm:min-w-[310px] lg:min-w-[calc((100%-3.75rem)/4)]"
          >
            <Link href={p.title === "Traiteur" ? "/traiteur" : "/produits"} className="block h-full" aria-label={`Découvrir ${p.title}`}>
            <div className="relative h-64 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width:640px) 78vw, 330px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="relative -mt-8 p-7 pt-0">
              <span className="grid size-11 place-items-center rounded-full bg-surface-dark text-accent-light shadow-lg">
                <Beef className="size-5 stroke-[1.4]" />
              </span>
              <h3 className="mt-5 font-serif text-3xl text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/56">
                {p.text}
              </p>
            </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-2 flex justify-end gap-3">
        <button
          onClick={() => move(-1)}
          aria-label="Produits précédents"
          className="carousel-arrow"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          onClick={() => move(1)}
          aria-label="Produits suivants"
          className="carousel-arrow"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
