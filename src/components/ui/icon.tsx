import type { SVGProps } from "react";

export type IconName =
  | "megaphone"
  | "newspaper"
  | "sparkles"
  | "users"
  | "pen"
  | "chat"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "bolt"
  | "shield"
  | "globe"
  | "chart"
  | "menu"
  | "close"
  | "star"
  | "quote";

const paths: Record<IconName, React.ReactNode> = {
  megaphone: <path d="M3 11v2a1 1 0 0 0 1 1h2l3.5 4V6L6 10H4a1 1 0 0 0-1 1Zm10-6 7-3v20l-7-3M13 5v14" />,
  newspaper: (
    <>
      <path d="M4 4h13v16H5a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1Z" />
      <path d="M17 8h3a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2M7 8h6M7 12h6M7 16h4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      <path d="M19 14l.8 2.2 2.2.8-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 19v-2a4 4 0 0 0-3-3.87M16 4.13A4 4 0 0 1 16 11.6" />
    </>
  ),
  pen: <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M20 6 9 17l-5-5" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  chart: <path d="M3 3v18h18M7 14l3-3 3 3 5-6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  star: <path d="m12 2 3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.6 3.2L6.7 14l-5-4.8 7-.9L12 2Z" />,
  quote: <path d="M7 7H4v6h3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V7Zm10 0h-3v6h3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V7Z" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
