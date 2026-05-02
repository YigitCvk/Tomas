import Link from "next/link";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <div style={{ backgroundColor: "#F9FAFB", borderBottom: "1px solid #E4E7EF", padding: "56px 0 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {breadcrumbs && (
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20 }}>
            {breadcrumbs.map((bc, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {i > 0 && <span style={{ color: "#D1D5DB", fontSize: 12 }}>/</span>}
                {bc.href ? (
                  <Link href={bc.href} style={{ fontSize: 13, color: "#6B7280", textDecoration: "none" }}>
                    {bc.label}
                  </Link>
                ) : (
                  <span style={{ fontSize: 13, color: "#1A1F36", fontWeight: 500 }}>{bc.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#EBF1FF", borderRadius: 9999, padding: "5px 12px", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#0B5CFF", letterSpacing: "0.06em" }}>{eyebrow}</span>
          </div>
        )}
        <h1 style={{ fontWeight: 800, color: "#1A1F36", fontSize: "clamp(1.75rem,4vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 560, lineHeight: 1.65, marginTop: 14, marginBottom: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
