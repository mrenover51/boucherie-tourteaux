import Image from "next/image";

const creations = [
  {
    src: "/images/paella.png",
    width: 939,
    height: 1674,
    alt: "Paella préparée par la Boucherie Tourteaux à Avize",
    caption: "Plat préparé",
  },
  {
    src: "/images/charcuterie-fromage.png",
    width: 1652,
    height: 952,
    alt: "Plateau de charcuterie et fromages de la Boucherie Tourteaux à Avize",
    caption: "Charcuterie & fromages",
  },
  {
    src: "/images/petit-four.png",
    width: 991,
    height: 1588,
    alt: "Assortiment de petits fours de la Boucherie Tourteaux à Avize",
    caption: "Pour la réception",
  },
  {
    src: "/images/planche-fromage.png",
    width: 1672,
    height: 941,
    alt: "Planche de fromages préparée par la Boucherie Tourteaux à Avize",
    caption: "Plateau de fromages",
  },
  {
    src: "/images/poisson1.png",
    width: 1870,
    height: 841,
    alt: "Présentation traiteur autour du poisson",
    caption: "Préparation traiteur",
  },
  {
    src: "/images/poisson3.png",
    width: 1078,
    height: 1459,
    alt: "Préparation de poisson dressée pour le service traiteur",
    caption: "Le soin du dressage",
  },
  {
    src: "/images/saumon.png",
    width: 1652,
    height: 952,
    alt: "Préparation traiteur à base de saumon",
    caption: "Préparation au saumon",
  },
  {
    src: "/images/poisson2.png",
    width: 1653,
    height: 951,
    alt: "Présentation de poisson préparée pour une réception",
    caption: "Pour vos tables",
  },
] as const;

export function TraiteurGallery() {
  return (
    <section className="bg-surface py-20 sm:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12 2xl:px-14">
        <div data-reveal className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              Réalisations traiteur
            </p>
            <h2 className="mt-6 max-w-4xl font-serif text-[clamp(3.2rem,6vw,6.5rem)] leading-[.88] tracking-[-.04em] text-foreground">
              Des compositions pensées pour la table.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-foreground/58 lg:pb-2">
            Plats préparés, petits fours et plateaux : un aperçu en images des
            réalisations de la maison.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:mt-20 lg:columns-3 lg:gap-5">
          {creations.map((creation) => (
            <figure
              key={creation.src}
              data-image-reveal
              className="group relative mb-4 break-inside-avoid overflow-hidden bg-surface-warm lg:mb-5"
            >
              <Image
                src={creation.src}
                width={creation.width}
                height={creation.height}
                alt={creation.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75" />
              <figcaption className="absolute right-5 bottom-5 left-5 text-[.62rem] font-semibold uppercase tracking-[.18em] text-on-dark/90">
                {creation.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
