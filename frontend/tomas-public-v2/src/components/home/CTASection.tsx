import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section style={{ backgroundColor: "#1a1a1a" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48, alignItems: "center" }}>

          <div>
            <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", color: "#ffcc00", marginBottom: 14, textTransform: "uppercase" as const }}>
              Birlikte Çalışalım
            </p>
            <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 20px" }}>
              Dış Ticaret Süreçlerinizi{" "}
              <span style={{ backgroundColor: "#ffcc00", color: "#1a1a1a", padding: "2px 6px" }}>Birlikte Planlayalım</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 0 }}>
              Tedarik ve dış ticaret ihtiyaçlarınızı değerlendirmek için uzman ekibimizle iletişime geçin.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Link
              href="/iletisim"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "#ffcc00", color: "#1a1a1a", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "18px 32px", border: "2px solid #ffcc00", boxShadow: "4px 4px 0 #ffcc00", textDecoration: "none" }}
            >
              Teklif Al <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+902123025935"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "transparent", color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", padding: "18px 32px", border: "2px solid rgba(255,255,255,0.2)", textDecoration: "none" }}
            >
              <Phone size={14} /> 0 (212) 302 59 35
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
