const STEPS = [
  { n: "01", title: "İhtiyaç Analizi",      desc: "Ürün veya hizmet ihtiyacınızı, bütçenizi ve teslimat beklentilerinizi birlikte belirliyoruz." },
  { n: "02", title: "Tedarikçi Araştırması", desc: "Global tedarikçi ağımızda en uygun kaynakları belirliyoruz, fiyat ve kalite analizi yapıyoruz." },
  { n: "03", title: "Süreç Koordinasyonu",  desc: "Sipariş, gümrük, lojistik ve belgelendirme süreçlerini sizin adınıza yönetiyoruz." },
  { n: "04", title: "Teslimat & Raporlama", desc: "Ürünlerin teslimini takip ediyor, süreç boyunca düzenli raporlarla bilgilendiriyoruz." },
];

export default function Process() {
  return (
    <section style={{ background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 9999, padding: "6px 14px", marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Nasıl Çalışıyoruz</span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#fff", margin: 0 }}>
            Çalışma Sürecimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20 }}>
          {STEPS.map(({ n, title, desc }) => (
            <div key={n} style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", borderRadius: 16, padding: "32px 24px", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div style={{ fontWeight: 800, fontSize: 48, color: "#fff", opacity: 0.2, lineHeight: 1, marginBottom: 16, userSelect: "none" }}>
                {n}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
                {title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
