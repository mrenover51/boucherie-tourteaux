import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
type Props = ComponentProps<typeof Link> & { variant?: "primary" | "outline" | "text" };
export function Button({ className, variant = "primary", ...props }: Props) {
  return <Link className={cn("bespoke-button inline-flex min-h-12 items-center justify-center gap-3 rounded-[2px] px-6 text-xs font-semibold uppercase tracking-[.16em] transition-[color,background-color,border-color,transform] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordeaux", variant === "primary" && "bg-bordeaux text-white hover:bg-bordeaux-dark", variant === "outline" && "border border-bordeaux/30 text-bordeaux hover:bg-bordeaux hover:text-white", variant === "text" && "min-h-0 rounded-none px-0 pb-1 text-bordeaux underline decoration-gold underline-offset-8", className)} {...props} />;
}
