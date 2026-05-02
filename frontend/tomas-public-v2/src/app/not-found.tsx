import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "calc(100vh - 130px)", backgroundColor: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 24px" }}>
      <div style={{ maxWidth: 640, width: "100%", textAlign: "center" as const }}>

        {/* Giant 404 */}
        <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(6rem,20vw,14rem)", lineHeight: 1, color: "#1a1a1a", opacity: 0.06, userSelect: "none" as const, marginBottom: -24 }}>
          404
        </div>

        <div style={{ backgroundColor: "#ffcc00", border: "3px solid #1a1a1a", padding: "48px 40px", boxShadow: "8px 8px 0 #1a1a1a" }}>
          <h1 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(1.5rem,4vw,2.5rem)", color: "#1a1a1a", lineHeight: 1.1, marginBottom: 16 }}>
            Sayfa Bulunamadı
          </h1>
          <p style={{ fontSize: 15, color: "rgba(26,26,26,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
            Aradığınız sayfa taşınmış, silinmiş ya da hiç mevcut olmamış olabilir.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#1a1a1a", color: "#ffcc00", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "14px 28px", border: "2px solid #1a1a1a", boxShadow: "4px 4px 0 rgba(26,26,26,0.3)", textDecoration: "none" }}
            >
              <Home size={14} /> Ana Sayfa
            </Link>
            <Link
              href="/hizmetler"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#1a1a1a", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "14px 28px", border: "2px solid #1a1a1a", textDecoration: "none" }}
            >
              Hizmetler <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
