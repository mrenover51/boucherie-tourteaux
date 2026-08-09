import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function MaisonIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return <MaisonIcon {...props}><path d="M6 18 18 6M9 6h9v9" /><path d="M6 8.5V18h9.5" opacity=".35" /></MaisonIcon>;
}

export function ArrowDown(props: IconProps) {
  return <MaisonIcon {...props}><path d="M12 4v15M7.5 14.5 12 19l4.5-4.5" /><path d="M8 4h8" opacity=".35" /></MaisonIcon>;
}

export function ChevronRight(props: IconProps) {
  return <MaisonIcon {...props}><path d="m9 5 7 7-7 7" /><path d="M5 12h11" opacity=".35" /></MaisonIcon>;
}

export function ChevronLeft(props: IconProps) {
  return <MaisonIcon {...props}><path d="m15 5-7 7 7 7" /><path d="M19 12H8" opacity=".35" /></MaisonIcon>;
}

export function X(props: IconProps) {
  return <MaisonIcon {...props}><path d="m6 6 12 12M18 6 6 18" /><circle cx="12" cy="12" r="10" opacity=".3" /></MaisonIcon>;
}

export function Phone(props: IconProps) {
  return <MaisonIcon {...props}><path d="M7.2 3.5 4.7 5.2c-.8.6-.8 2-.2 3.5 1.8 4.8 6 9 10.8 10.8 1.5.6 2.9.6 3.5-.2l1.7-2.5-4.6-3-1.7 2c-2.6-1.2-4.8-3.4-6-6l2-1.7-3-4.6Z" /></MaisonIcon>;
}

export function MapPin(props: IconProps) {
  return <MaisonIcon {...props}><path d="M12 21s6-6.1 6-11a6 6 0 1 0-12 0c0 4.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /><path d="M9 22h6" opacity=".35" /></MaisonIcon>;
}

export function MapPinned(props: IconProps) {
  return <MaisonIcon {...props}><path d="m3 6 5-2 8 2 5-2v14l-5 2-8-2-5 2V6Z" /><path d="M8 4v14M16 6v14" opacity=".4" /><path d="M16 5.5s2.5-2.4 2.5-4.1a2.5 2.5 0 0 0-5 0c0 1.7 2.5 4.1 2.5 4.1Z" /></MaisonIcon>;
}

export function Clock3(props: IconProps) {
  return <MaisonIcon {...props}><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5H7.5" /><path d="M8 2h8" opacity=".35" /></MaisonIcon>;
}

export function UsersRound(props: IconProps) {
  return <MaisonIcon {...props}><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-1.5A5.5 5.5 0 0 1 9 12a5.5 5.5 0 0 1 5.5 5.5V19" /><path d="M15 6a3 3 0 0 1 0 6M17 13.5a4.5 4.5 0 0 1 3.5 4.4V19" opacity=".45" /></MaisonIcon>;
}

export function Scale(props: IconProps) {
  return <MaisonIcon {...props}><path d="M12 3v18M7 21h10M4 6h16M7 6l-4 8h8L7 6ZM17 6l-4 8h8l-4-8Z" /><path d="M3 14c.7 2 7.3 2 8 0M13 14c.7 2 7.3 2 8 0" opacity=".45" /></MaisonIcon>;
}

export function Sparkles(props: IconProps) {
  return <MaisonIcon {...props}><path d="M12 2c.6 5.5 2.5 7.4 8 8-5.5.6-7.4 2.5-8 8-.6-5.5-2.5-7.4-8-8 5.5-.6 7.4-2.5 8-8Z" /><path d="M19 16c.2 2 1 2.8 3 3-2 .2-2.8 1-3 3-.2-2-1-2.8-3-3 2-.2 2.8-1 3-3Z" opacity=".55" /></MaisonIcon>;
}

export function BadgeCheck(props: IconProps) {
  return <MaisonIcon {...props}><path d="m12 2 3 2 3.5.5.5 3.5 2 3-2 3-.5 3.5-3.5.5-3 2-3-2-3.5-.5-.5-3.5-2-3 2-3 .5-3.5L9 4l3-2Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></MaisonIcon>;
}

export function ShieldCheck(props: IconProps) {
  return <MaisonIcon {...props}><path d="M12 2.5 20 6v5.5c0 4.7-3.2 8.2-8 10-4.8-1.8-8-5.3-8-10V6l8-3.5Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></MaisonIcon>;
}

export function HandHeart(props: IconProps) {
  return <MaisonIcon {...props}><path d="M3 13.5h3l3.2 3.2c.8.8 2.1.9 3 .2l7.8-5.4c-1-1.4-2.4-1.6-3.8-.8l-3.5 2" /><path d="M6 13.5V19H3M9 12.5l-1.3-1.3a3 3 0 0 1 4.3-4.3l.5.5.5-.5a3 3 0 0 1 4.3 4.3L16 12.5" /></MaisonIcon>;
}

export function Beef(props: IconProps) {
  return <MaisonIcon {...props}><path d="M4 15.5c0-5.8 4.3-10 10-10 3.8 0 6 2.2 6 5.5 0 4.7-4.2 7.5-9.5 7.5C6.5 18.5 4 17.5 4 15.5Z" /><path d="M8 15c1.2-2.3 3.6-4.8 7.5-5.5M7 18.2 5.5 21M17 17l1.5 3" opacity=".5" /></MaisonIcon>;
}

export function ScanLine(props: IconProps) {
  return <MaisonIcon {...props}><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" /><path d="M7 12h10M9 9.5c1.7-1.3 4.3-1.3 6 0M9 14.5c1.7 1.3 4.3 1.3 6 0" /></MaisonIcon>;
}

export function Expand(props: IconProps) {
  return <MaisonIcon {...props}><path d="M9 4H4v5M15 4h5v5M20 15v5h-5M9 20H4v-5" /><path d="m4 9 5-5M15 4l5 5M20 15l-5 5M9 20l-5-5" opacity=".45" /></MaisonIcon>;
}

export function Send(props: IconProps) {
  return <MaisonIcon {...props}><path d="m3 4 18 8-18 8 3-7 9-1-9-1-3-7Z" /><path d="M6 11v2" opacity=".4" /></MaisonIcon>;
}

export function Check(props: IconProps) {
  return <MaisonIcon {...props}><path d="m4 12 5 5L20 6" /><path d="M4 6v14h16" opacity=".3" /></MaisonIcon>;
}

export function Info(props: IconProps) {
  return <MaisonIcon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5h.01" /></MaisonIcon>;
}

export function ShoppingBag(props: IconProps) {
  return <MaisonIcon {...props}><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 10V6a3 3 0 0 1 6 0v4" /><path d="M7 13h10" opacity=".35" /></MaisonIcon>;
}
