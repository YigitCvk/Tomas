import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "calc(100vh - 130px)", backgroundColor: "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 24px" }}>
      <div style={{ maxWidth: 560, width: "100%", textAlign: "center" as const }}>

        {/* Ghost 404 */}
        <div style={{ fontWeight: 900, fontSize: "clamp(6rem,20vw,12rem)", lineHeight: 1, color: "#0B5CFF", opacity: 0.06, userSelect: "none" as const, marginBottom: -16 }}>
          404
        </div>

        <div style={{ backgroundColor: "#fff", borderRadius: 24, padding: "48px 40px", border: "1px solid #E4E7EF", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
          <div style={{ width: 64, height: 64, backgroundColor: "#EBF1FF", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <span style={{ fontWeight: 800, fontSize: 28, color: "#0B5CFF" }}>?</span>
          </div>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(1.5rem,4vw,2rem)", color: "#1A1F36", lineHeight: 1.1, marginBottom: 16 }}>
            Sayfa Bulunamadı
          </h1>
          <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 32 }}>
            Aradığınız sayfa taşınmış, silinmiş ya da hiç mevcut olmamış olabilir.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 4px 16px rgba(11,92,255,0.3)" }}
            >
              <Home size={15} /> Ana Sayfa
            </Link>
            <Link
              href="/hizmetler"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#1A1F36", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 9999, textDecoration: "none", border: "1.5px solid #E4E7EF" }}
            >
              Hizmetler <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
