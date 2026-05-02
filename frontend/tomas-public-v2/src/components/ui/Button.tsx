import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "yellow" | "black" | "blue" | "red" | "outline";
type Size = "sm" | "md" | "lg";

const BASE: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontFamily: "var(--font-space-grotesk)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  cursor: "pointer",
  border: "2px solid #1a1a1a",
  textDecoration: "none",
  transition: "box-shadow 0.12s, transform 0.12s",
  userSelect: "none",
};

const VARIANT_STYLES: Record<Variant, React.CSSProperties> = {
  yellow:  { backgroundColor: "#ffcc00", color: "#1a1a1a", boxShadow: "4px 4px 0 #1a1a1a" },
  black:   { backgroundColor: "#1a1a1a", color: "#ffcc00", boxShadow: "4px 4px 0 #ffcc00" },
  blue:    { backgroundColor: "#0055ff", color: "#fff",    boxShadow: "4px 4px 0 #1a1a1a" },
  red:     { backgroundColor: "#e63b2e", color: "#fff",    boxShadow: "4px 4px 0 #1a1a1a" },
  outline: { backgroundColor: "transparent", color: "#1a1a1a", boxShadow: "4px 4px 0 #1a1a1a" },
};

const SIZE_STYLES: Record<Size, React.CSSProperties> = {
  sm: { padding: "8px 16px",  fontSize: 11 },
  md: { padding: "12px 24px", fontSize: 12 },
  lg: { padding: "14px 32px", fontSize: 13 },
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

type AsLink = BaseProps & { href: string } & Omit<ComponentProps<"a">, "href" | "style" | "children">;
type AsButton = BaseProps & { href?: undefined } & Omit<ComponentProps<"button">, "style" | "children">;

export function Button({ variant = "yellow", size = "lg", style, href, children, ...rest }: AsLink | AsButton) {
  const merged: React.CSSProperties = { ...BASE, ...VARIANT_STYLES[variant], ...SIZE_STYLES[size], ...style };
  if (href !== undefined) {
    return (
      <Link href={href} style={merged} {...(rest as Omit<ComponentProps<"a">, "href" | "style" | "children">)}>
        {children}
      </Link>
    );
  }
  return (
    <button style={merged} {...(rest as Omit<ComponentProps<"button">, "style" | "children">)}>
      {children}
    </button>
  );
}
