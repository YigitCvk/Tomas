import Link from "next/link";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <div style={{ backgroundColor: "#1a1a1a", borderBottom: "3px solid #ffcc00", padding: "56px 0 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {breadcrumbs && (
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20 }}>
            {breadcrumbs.map((bc, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>/</span>}
                {bc.href ? (
                  <Link href={bc.href} style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                    {bc.label}
                  </Link>
                ) : (
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{bc.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", color: "#ffcc00", marginBottom: 14, textTransform: "uppercase" }}>
            {eyebrow}
          </p>
        )}
        <h1 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, color: "#fff", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.65, marginTop: 14, marginBottom: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
