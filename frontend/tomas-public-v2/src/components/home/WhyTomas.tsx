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
    <section style={{ backgroundColor: "#fff", borderBottom: "3px solid #1a1a1a" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", color: "#1a1a1a", opacity: 0.4, marginBottom: 10, textTransform: "uppercase" as const }}>
            Neden Tomas
          </p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#1a1a1a", margin: 0 }}>
            Neden Bizimle Çalışmalısınız?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 3 }}>
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} style={{ backgroundColor: i === 0 ? "#ffcc00" : "#f5f0e8", border: "2px solid #1a1a1a", padding: "32px 28px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, backgroundColor: i === 0 ? "#1a1a1a" : "#1a1a1a", border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={18} color="#ffcc00" />
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 15, color: "#1a1a1a", margin: "0 0 8px 0", lineHeight: 1.2 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(26,26,26,0.65)", lineHeight: 1.7, margin: 0 }}>
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
