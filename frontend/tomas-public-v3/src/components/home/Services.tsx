import Link from "next/link";
import { ArrowRight, Globe2, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart } from "lucide-react";

const SERVICES = [
  { icon: Globe2,       title: "Uluslararası Ticaret",     desc: "İhracat ve ithalat operasyonlarını planlamasından teslimatına kadar süreç koordinasyonu.",          href: "/hizmetler/uluslararasi-ticaret-ihracat-ithalat" },
  { icon: Package,      title: "Ambalaj & Endüstriyel",    desc: "Endüstriyel ambalaj ve sarf malzemeleri tedarikinde geniş ürün portföyü ve teslimat takibi.",       href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler" },
  { icon: Factory,      title: "Polimer & Plastik",        desc: "Plastik hammadde ve polimer ürün gruplarında tedarik araştırması ve ithalat koordinasyonu.",         href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti" },
  { icon: Leaf,         title: "Tarım & Gıda",             desc: "Tarımsal ürün ve gıda tedarikinde belgelendirme, kalite takibi ve lojistik koordinasyonu.",          href: "/hizmetler/tarim-narenciye-ve-gida-urunleri" },
  { icon: Wrench,       title: "Makine & Endüstriyel",     desc: "Endüstriyel makine ve ekipman tedarikinde teknik ihtiyaç analizi ve operasyon takibi.",              href: "/hizmetler/makine-ve-endustriyel-urunler" },
  { icon: Microscope,   title: "Mühendislik & Araştırma",  desc: "Teknik araştırma, ürün değerlendirme ve fizibilite süreçlerinde B2B odaklı analiz desteği.",         href: "/hizmetler/muhendislik-ve-arastirma-hizmetleri" },
  { icon: Cpu,          title: "Yazılım & Dijital",        desc: "Web çözümleri, e-ticaret altyapısı ve kurumsal yazılım ihtiyaçlarında dijital dönüşüm ortaklığı.",   href: "/hizmetler/yazilim-ve-dijital-cozumler" },
  { icon: Megaphone,    title: "Reklam & Kurumsal Kimlik", desc: "Marka kimliği ve kurumsal iletişim materyalleri için profesyonel tasarım çözümleri.",                href: "/hizmetler/reklam-ve-kurumsal-kimlik-tasarimi" },
  { icon: ShoppingCart, title: "E-Ticaret",                desc: "E-ticaret altyapısı kurulumu, pazar yeri entegrasyonu ve dijital satış kanalı geliştirme.",          href: "/hizmetler/e-ticaret" },
];

export default function Services() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#EBF1FF", borderRadius: 9999, padding: "6px 14px", marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#0B5CFF" }}>Ne Yapıyoruz</span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1F36", marginBottom: 16 }}>
            Hizmet Alanlarımız
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 560, margin: "0 auto" }}>
            9 farklı sektörde uzman ekibimizle uçtan uca B2B süreç desteği sunuyoruz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
          {SERVICES.map(({ icon: Icon, title, desc, href }) => (
            <Link key={href} href={href} style={{ textDecoration: "none", display: "block" }}>
              <div
                style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 14, border: "1px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                <div style={{ width: 48, height: 48, backgroundColor: "#EBF1FF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={22} color="#0B5CFF" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#1A1F36", margin: 0, lineHeight: 1.3 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#0B5CFF", marginTop: 4 }}>
                  Detaylı Bilgi <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link
            href="/hizmetler"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 15, padding: "13px 32px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 4px 16px rgba(11,92,255,0.3)" }}
          >
            Tüm Hizmetleri Gör <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
