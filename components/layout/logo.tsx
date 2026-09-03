import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false, priority = false }: { light?: boolean; priority?: boolean }) {
  return (
    <Link href="/" aria-label="Boucherie Tourteaux — Accueil" className={`relative z-50 block h-12 w-16 shrink-0 transition-transform duration-300 hover:scale-[1.03] sm:h-14 sm:w-[4.75rem] xl:h-[3.75rem] xl:w-20 ${light ? "drop-shadow-[0_2px_8px_rgba(0,0,0,.24)]" : ""}`}>
      <Image
        src="/images/logo.png"
        alt="Boucherie Tourteaux Avize"
        width={1448}
        height={1086}
        sizes="(max-width: 639px) 64px, (max-width: 1279px) 76px, 80px"
        className="size-full object-contain object-center"
        priority={priority}
      />
    </Link>
  );
}
