import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
type Props = ComponentProps<typeof Link> & { variant?: "primary" | "outline" | "text" };
export function Button({ className, variant = "primary", ...props }: Props) {
  return <Link className={cn("bespoke-button inline-flex min-h-12 items-center justify-center gap-3 rounded-[2px] px-6 text-xs font-semibold uppercase tracking-[.16em] transition-[color,background-color,border-color,transform] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent", variant === "primary" && "bg-surface-dark text-on-dark hover:bg-surface-black", variant === "outline" && "border border-border-dark/30 text-foreground hover:bg-surface-dark hover:text-on-dark", variant === "text" && "min-h-0 rounded-none px-0 pb-1 text-foreground underline decoration-accent underline-offset-8", className)} {...props} />;
}
