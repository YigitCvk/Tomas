import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BULLETS = [
  "İhracat ve ithalat süreç koordinasyonu",
  "9 farklı sektörde çok yönlü B2B çözüm ortaklığı",
  "Şeffaf operasyon, anlık takip ve raporlama",
];

const STATS = [
  { value: "9", label: "Hizmet Alanı" },
  { value: "50+", label: "Ülke" },
  { value: "B2B", label: "Odaklı" },
];

export default function Hero() {
  return (
    <section style={{ background: "linear-gradient(160deg, #F0F5FF 0%, #ffffff 60%)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 24px 80px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 64, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#EBF1FF", borderRadius: 9999, padding: "6px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0B5CFF" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#0B5CFF", letterSpacing: "0.05em" }}>Global Ticaret Çözümleri</span>
            </div>

            <h1 style={{ fontWeight: 800, fontSize: "clamp(2.2rem,4.5vw,3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1F36", marginBottom: 24 }}>
              Dış Ticarette{" "}
              <span style={{ color: "#0B5CFF" }}>Güvenilir</span>{" "}
              İş Ortağınız
            </h1>

            <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.75, maxWidth: 500, marginBottom: 36 }}>
              Tomas Dış Ticaret; ithalat, ihracat, global tedarik ve endüstriyel ürünler alanında işletmelere uçtan uca B2B süreç desteği sunar.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <Link
                href="/iletisim"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 15, padding: "13px 28px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 4px 16px rgba(11,92,255,0.35)" }}
              >
                Teklif Al <ArrowRight size={16} />
              </Link>
              <Link
                href="/hizmetler"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#1A1F36", fontWeight: 600, fontSize: 15, padding: "13px 28px", borderRadius: 9999, textDecoration: "none", border: "1.5px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                Hizmetlerimiz
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {BULLETS.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={16} style={{ color: "#0B5CFF", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "#6B7280" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="hidden lg:flex" style={{ justifyContent: "flex-end" }}>
            <div style={{ position: "relative", width: 460, height: 400 }}>
              {/* Main card */}
              <div style={{ position: "absolute", top: 0, left: 20, right: 0, background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", borderRadius: 24, padding: "40px 36px", boxShadow: "0 24px 64px rgba(11,92,255,0.3)" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
                  Faaliyet Alanları
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Uluslararası Ticaret", "Ambalaj & Endüstriyel", "Polimer & Plastik", "Tarım & Gıda", "Yazılım & Dijital"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 14px" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#fff", flexShrink: 0 }} />
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats floating card */}
              <div style={{ position: "absolute", bottom: -24, left: 0, backgroundColor: "#fff", borderRadius: 16, padding: "20px 24px", boxShadow: "0 12px 40px rgba(0,0,0,0.12)", border: "1px solid #E4E7EF", display: "flex", gap: 28 }}>
                {STATS.map(({ value, label }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 800, fontSize: 22, color: "#1A1F36", lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
