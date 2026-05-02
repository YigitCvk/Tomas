const STEPS = [
  { n: "01", title: "İhtiyaç Analizi",      desc: "Ürün veya hizmet ihtiyacınızı, bütçenizi ve teslimat beklentilerinizi birlikte belirliyoruz." },
  { n: "02", title: "Tedarikçi Araştırması", desc: "Global tedarikçi ağımızda en uygun kaynakları belirliyoruz, fiyat ve kalite analizi yapıyoruz." },
  { n: "03", title: "Süreç Koordinasyonu",  desc: "Sipariş, gümrük, lojistik ve belgelendirme süreçlerini sizin adınıza yönetiyoruz." },
  { n: "04", title: "Teslimat & Raporlama", desc: "Ürünlerin teslimini takip ediyor, süreç boyunca düzenli raporlarla bilgilendiriyoruz." },
];

export default function Process() {
  return (
    <section style={{ backgroundColor: "#1a1a1a", borderBottom: "3px solid #ffcc00" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", color: "#ffcc00", marginBottom: 10, textTransform: "uppercase" as const }}>
            Nasıl Çalışıyoruz
          </p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", margin: 0 }}>
            Çalışma Sürecimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 3 }}>
          {STEPS.map(({ n, title, desc }, i) => (
            <div key={n} style={{ backgroundColor: i % 2 === 0 ? "#ffcc00" : "#f5f0e8", border: "2px solid #ffcc00", padding: "36px 28px", position: "relative" }}>
              <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 72, color: "#1a1a1a", opacity: 0.12, lineHeight: 1, userSelect: "none" as const, marginBottom: 8 }}>
                {n}
              </div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 17, color: "#1a1a1a", marginBottom: 12, lineHeight: 1.2 }}>
                {title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(26,26,26,0.65)", lineHeight: 1.7, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
