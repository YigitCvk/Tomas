import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BULLETS = [
  "Tedarikten teslimata süreç koordinasyonu",
  "Çok sektörlü B2B çözüm ortaklığı",
  "Şeffaf operasyon ve düzenli raporlama",
];

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#f5f0e8", borderBottom: "3px solid #1a1a1a", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 72px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48, alignItems: "center" }}>

          {/* Left */}
          <div>
            <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", color: "#1a1a1a", opacity: 0.45, marginBottom: 20, textTransform: "uppercase" }}>
              Global Ticaret Çözümleri
            </p>

            <h1 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(2.4rem,5vw,4rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#1a1a1a", marginBottom: 24 }}>
              Global Ticarete{" "}
              <span style={{ backgroundColor: "#ffcc00", padding: "2px 8px", display: "inline", boxDecorationBreak: "clone" }}>
                Açılan
              </span>
              <br />Güvenilir
              <br />Çözüm Ortağınız
            </h1>

            <p style={{ fontSize: 16, color: "rgba(26,26,26,0.65)", lineHeight: 1.75, maxWidth: 480, marginBottom: 32 }}>
              Tomas Dış Ticaret; ithalat, ihracat, global tedarik ve endüstriyel ürünler alanında işletmeler için uçtan uca B2B süreç desteği sunar.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
              <Link
                href="/hizmetler"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#1a1a1a", color: "#ffcc00", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", border: "2px solid #1a1a1a", boxShadow: "4px 4px 0 #ffcc00", textDecoration: "none" }}
              >
                Hizmetlerimiz <ArrowRight size={14} />
              </Link>
              <Link
                href="/iletisim"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#ffcc00", color: "#1a1a1a", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", border: "2px solid #1a1a1a", boxShadow: "4px 4px 0 #1a1a1a", textDecoration: "none" }}
              >
                Teklif Al
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {BULLETS.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 8, height: 8, backgroundColor: "#ffcc00", border: "2px solid #1a1a1a", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(26,26,26,0.65)" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative Bauhaus block */}
          <div className="hidden lg:flex" style={{ justifyContent: "flex-end" }}>
            <div style={{ position: "relative", width: 420, height: 420 }}>
              {/* Big yellow square */}
              <div style={{ position: "absolute", top: 0, left: 40, width: 320, height: 320, backgroundColor: "#ffcc00", border: "3px solid #1a1a1a" }} />
              {/* Black square offset */}
              <div style={{ position: "absolute", top: 60, left: 0, width: 120, height: 120, backgroundColor: "#1a1a1a" }} />
              {/* Blue accent */}
              <div style={{ position: "absolute", bottom: 40, right: 0, width: 80, height: 80, backgroundColor: "#0055ff", border: "3px solid #1a1a1a" }} />
              {/* Red small */}
              <div style={{ position: "absolute", bottom: 0, left: 80, width: 60, height: 60, backgroundColor: "#e63b2e", border: "3px solid #1a1a1a" }} />
              {/* Text in yellow square */}
              <div style={{ position: "absolute", top: 40, left: 80, width: 280, height: 240, display: "flex", flexDirection: "column", justifyContent: "center", padding: 32, zIndex: 10 }}>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 80, lineHeight: 1, color: "#1a1a1a", opacity: 0.12, userSelect: "none" }}>
                  B2B
                </div>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 22, color: "#1a1a1a", marginTop: 8 }}>
                  9 Hizmet Alanı
                </div>
                <div style={{ fontSize: 13, color: "rgba(26,26,26,0.6)", marginTop: 4 }}>
                  Uluslararası ticaret çözümleri
                </div>
              </div>
              {/* Grid pattern overlay */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,26,26,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
