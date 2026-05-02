import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SECTORS = [
  { label: "Ambalaj & Endüstriyel", href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler", color: "#ffcc00" },
  { label: "Polimer & Plastik",      href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti",       color: "#0055ff" },
  { label: "Tarım & Gıda",           href: "/hizmetler/tarim-narenciye-ve-gida-urunleri",           color: "#e63b2e" },
  { label: "Makine & Endüstriyel",   href: "/hizmetler/makine-ve-endustriyel-urunler",              color: "#1a1a1a" },
];

export default function Sectors() {
  return (
    <section style={{ backgroundColor: "#f5f0e8", borderBottom: "3px solid #1a1a1a" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ marginBottom: 48, borderBottom: "3px solid #1a1a1a", paddingBottom: 24 }}>
          <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", color: "#1a1a1a", opacity: 0.4, marginBottom: 10, textTransform: "uppercase" as const }}>
            Sektörler
          </p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#1a1a1a", margin: 0 }}>
            Öne Çıkan Sektörler
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 3 }}>
          {SECTORS.map(({ label, href, color }) => (
            <Link key={href} href={href} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: color, border: "2px solid #1a1a1a", padding: "40px 24px", display: "flex", flexDirection: "column", gap: 16, minHeight: 180 }}>
                <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 16, color: color === "#1a1a1a" ? "#ffcc00" : "#1a1a1a", lineHeight: 1.2 }}>
                  {label}
                </span>
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                  <ArrowRight size={16} color={color === "#1a1a1a" ? "#ffcc00" : "#1a1a1a"} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
