import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SECTORS = [
  { label: "Ambalaj & Endüstriyel", href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler", bg: "#EBF1FF", color: "#0B5CFF" },
  { label: "Polimer & Plastik",      href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti",       bg: "#F0FDF4", color: "#16A34A" },
  { label: "Tarım & Gıda",           href: "/hizmetler/tarim-narenciye-ve-gida-urunleri",           bg: "#FFF7ED", color: "#EA580C" },
  { label: "Makine & Endüstriyel",   href: "/hizmetler/makine-ve-endustriyel-urunler",              bg: "#FDF4FF", color: "#9333EA" },
];

export default function Sectors() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 48 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#EBF1FF", borderRadius: 9999, padding: "6px 14px", marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#0B5CFF" }}>Sektörler</span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1F36", margin: 0 }}>
              Öne Çıkan Sektörler
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
          {SECTORS.map(({ label, href, bg, color }) => (
            <Link key={href} href={href} style={{ textDecoration: "none" }}>
              <div
                style={{ backgroundColor: bg, borderRadius: 20, padding: "36px 24px", display: "flex", flexDirection: "column", gap: 32, minHeight: 180, transition: "transform 0.2s", position: "relative", overflow: "hidden" }}
              >
                <span style={{ fontWeight: 700, fontSize: 16, color: "#1A1F36", lineHeight: 1.3 }}>
                  {label}
                </span>
                <div style={{ marginTop: "auto", width: 36, height: 36, backgroundColor: "#fff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <ArrowUpRight size={18} color={color} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
