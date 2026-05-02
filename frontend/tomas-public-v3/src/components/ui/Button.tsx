import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontWeight: 600,
  cursor: "pointer",
  textDecoration: "none",
  borderRadius: 9999,
  border: "none",
  transition: "background 0.15s, transform 0.1s",
  userSelect: "none",
  flexShrink: 0,
};

const VARIANT_STYLES: Record<Variant, React.CSSProperties> = {
  primary:   { backgroundColor: "#0B5CFF", color: "#fff",    boxShadow: "0 4px 16px rgba(11,92,255,0.35)" },
  secondary: { backgroundColor: "#fff",    color: "#1A1F36", border: "1.5px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" },
  ghost:     { backgroundColor: "transparent", color: "#0B5CFF" },
};

const SIZE_STYLES: Record<Size, React.CSSProperties> = {
  sm: { padding: "8px 16px",  fontSize: 13 },
  md: { padding: "11px 24px", fontSize: 14 },
  lg: { padding: "13px 28px", fontSize: 15 },
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

type AsLink   = BaseProps & { href: string }    & Omit<ComponentProps<"a">,      "href" | "style" | "children">;
type AsButton = BaseProps & { href?: undefined } & Omit<ComponentProps<"button">, "style" | "children">;

export function Button({ variant = "primary", size = "lg", style, href, children, ...rest }: AsLink | AsButton) {
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
