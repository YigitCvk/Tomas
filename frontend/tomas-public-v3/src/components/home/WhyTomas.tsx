import { ShieldCheck, Globe2, Layers, ClipboardCheck, Clock, Target } from "lucide-react";

const REASONS = [
  { icon: ShieldCheck,    title: "Güvenilirlik",             desc: "İş süreçlerinde şeffaflık ve tutarlılığı esas alan yapı." },
  { icon: Globe2,         title: "Global Bakış Açısı",       desc: "Farklı pazarlardaki tedarikçi ve alıcı dinamiklerini yakından takip." },
  { icon: Layers,         title: "Çok Sektörlü Yaklaşım",   desc: "9 farklı alanda deneyimle geniş yelpazede çözüm üretme." },
  { icon: ClipboardCheck, title: "Süreç Disiplini",          desc: "Her adımın planlandığı ve izlendiği sistematik operasyon anlayışı." },
  { icon: Clock,          title: "Zamanında Teslimat",       desc: "Süreç takibi ve proaktif iletişimle zamanında teslim garantisi." },
  { icon: Target,         title: "Kalite Odaklılık",         desc: "Ürün ve süreçte kalite standartlarından ödün vermeme ilkesi." },
];

export default function WhyTomas() {
  return (
    <section style={{ backgroundColor: "#F9FAFB", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#EBF1FF", borderRadius: 9999, padding: "6px 14px", marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#0B5CFF" }}>Neden Tomas</span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1F36", margin: 0 }}>
            Neden Bizimle Çalışmalısınız?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", display: "flex", gap: 16, alignItems: "flex-start", border: "1px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <div style={{ width: 44, height: 44, backgroundColor: "#EBF1FF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={20} color="#0B5CFF" />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1A1F36", margin: "0 0 8px 0", lineHeight: 1.2 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
