import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { n: "9", label: "Hizmet Alanı" },
  { n: "50+", label: "Ülke Pazarı" },
  { n: "B2B", label: "Odaklı Yaklaşım" },
  { n: "IST", label: "İstanbul Merkezli" },
];

export default function About() {
  return (
    <section style={{ backgroundColor: "#F9FAFB", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, alignItems: "center" }}>

          {/* Left: stats */}
          <div className="grid grid-cols-2" style={{ gap: 16 }}>
            {STATS.map(({ n, label }) => (
              <div key={label} style={{ backgroundColor: "#fff", borderRadius: 16, padding: "32px 28px", border: "1px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ fontWeight: 800, fontSize: 40, color: "#0B5CFF", lineHeight: 1, marginBottom: 8 }}>{n}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#6B7280" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#EBF1FF", borderRadius: 9999, padding: "6px 14px", marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#0B5CFF" }}>Biz Kimiz</span>
            </div>

            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1F36", marginBottom: 20 }}>
              Dış Ticarette{" "}
              <span style={{ color: "#0B5CFF" }}>Güvenilir B2B</span>{" "}
              Ortağınız
            </h2>

            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.8, marginBottom: 16 }}>
              Tomas Dış Ticaret; farklı sektörlerdeki ürün ve çözüm ihtiyaçlarını dış ticaret, tedarik ve operasyon süreçleriyle bir araya getiren bir B2B çözüm ortağıdır.
            </p>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.8, marginBottom: 36 }}>
              İstanbul merkezli olarak faaliyet gösteren Tomas; ambalaj, polimer, tarım, makine, mühendislik, yazılım ve e-ticaret gibi geniş bir yelpazede hizmet sunar.
            </p>

            <Link
              href="/hakkimizda"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 14, padding: "11px 24px", borderRadius: 9999, textDecoration: "none" }}
            >
              Hakkımızda <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
