import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", borderRadius: 24, padding: "64px 56px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 9999, padding: "6px 14px", marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Birlikte Çalışalım</span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 16px" }}>
              Dış Ticaret Süreçlerinizi Birlikte Planlayalım
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
              Tedarik ve dış ticaret ihtiyaçlarınızı değerlendirmek için uzman ekibimizle iletişime geçin.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            <Link
              href="/iletisim"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#fff", color: "#0B5CFF", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            >
              Teklif Al <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:info@tomasdisticaret.com"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 28px", borderRadius: 9999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Mail size={15} /> E-posta Gönder
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
