import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section style={{ backgroundColor: "#fff", borderBottom: "3px solid #1a1a1a" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 64, alignItems: "center" }}>

          {/* Left: number grid */}
          <div className="grid grid-cols-2" style={{ gap: 3 }}>
            {[
              { n: "9", label: "Hizmet Alanı" },
              { n: "50+", label: "Ülke Pazarı" },
              { n: "B2B", label: "Odaklı Yaklaşım" },
              { n: "IST", label: "İstanbul Merkezli" },
            ].map(({ n, label }) => (
              <div key={label} style={{ backgroundColor: "#f5f0e8", border: "2px solid #1a1a1a", padding: "32px 24px" }}>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 44, color: "#1a1a1a", lineHeight: 1 }}>
                  {n}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(26,26,26,0.5)", marginTop: 8, letterSpacing: "0.05em" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div>
            <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", color: "#1a1a1a", opacity: 0.4, marginBottom: 16, textTransform: "uppercase" as const }}>
              Biz Kimiz
            </p>
            <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1a1a1a", marginBottom: 20 }}>
              Dış Ticarette{" "}
              <span style={{ backgroundColor: "#ffcc00", padding: "2px 6px" }}>Güvenilir B2B</span>
              {" "}Ortağınız
            </h2>
            <p style={{ fontSize: 15, color: "rgba(26,26,26,0.65)", lineHeight: 1.8, marginBottom: 16 }}>
              Tomas Dış Ticaret; farklı sektörlerdeki ürün ve çözüm ihtiyaçlarını dış ticaret, tedarik ve operasyon süreçleriyle bir araya getiren bir B2B çözüm ortağıdır.
            </p>
            <p style={{ fontSize: 15, color: "rgba(26,26,26,0.65)", lineHeight: 1.8, marginBottom: 32 }}>
              İstanbul merkezli olarak faaliyet gösteren Tomas; ambalaj, polimer, tarım, makine, mühendislik, yazılım ve e-ticaret gibi geniş bir yelpazede hizmet sunar.
            </p>
            <Link
              href="/hakkimizda"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#1a1a1a", textDecoration: "none", borderBottom: "2px solid #1a1a1a", paddingBottom: 4 }}
            >
              Hakkımızda Daha Fazla <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
