import Link from "next/link";
import { ArrowRight, Globe2, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart } from "lucide-react";

const SERVICES = [
  { icon: Globe2,       title: "Uluslararası Ticaret",     desc: "İhracat ve ithalat operasyonlarını planlamasından teslimatına kadar süreç koordinasyonu.",          href: "/hizmetler/uluslararasi-ticaret-ihracat-ithalat",      color: "#0055ff" },
  { icon: Package,      title: "Ambalaj & Endüstriyel",    desc: "Endüstriyel ambalaj ve sarf malzemeleri tedarikinde geniş ürün portföyü ve teslimat takibi.",       href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler", color: "#e63b2e" },
  { icon: Factory,      title: "Polimer & Plastik",        desc: "Plastik hammadde ve polimer ürün gruplarında tedarik araştırması ve ithalat koordinasyonu.",         href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti",       color: "#ffcc00" },
  { icon: Leaf,         title: "Tarım & Gıda",             desc: "Tarımsal ürün ve gıda tedarikinde belgelendirme, kalite takibi ve lojistik koordinasyonu.",          href: "/hizmetler/tarim-narenciye-ve-gida-urunleri",           color: "#0055ff" },
  { icon: Wrench,       title: "Makine & Endüstriyel",     desc: "Endüstriyel makine ve ekipman tedarikinde teknik ihtiyaç analizi ve operasyon takibi.",              href: "/hizmetler/makine-ve-endustriyel-urunler",             color: "#e63b2e" },
  { icon: Microscope,   title: "Mühendislik & Araştırma",  desc: "Teknik araştırma, ürün değerlendirme ve fizibilite süreçlerinde B2B odaklı analiz desteği.",         href: "/hizmetler/muhendislik-ve-arastirma-hizmetleri",       color: "#ffcc00" },
  { icon: Cpu,          title: "Yazılım & Dijital",        desc: "Web çözümleri, e-ticaret altyapısı ve kurumsal yazılım ihtiyaçlarında dijital dönüşüm ortaklığı.",   href: "/hizmetler/yazilim-ve-dijital-cozumler",               color: "#0055ff" },
  { icon: Megaphone,    title: "Reklam & Kurumsal Kimlik", desc: "Marka kimliği ve kurumsal iletişim materyalleri için tasarım çözümleri.",                            href: "/hizmetler/reklam-ve-kurumsal-kimlik-tasarimi",        color: "#e63b2e" },
  { icon: ShoppingCart, title: "E-Ticaret",                desc: "E-ticaret altyapısı kurulumu, pazar yeri entegrasyonu ve dijital satış kanalı geliştirme.",          href: "/hizmetler/e-ticaret",                                 color: "#ffcc00" },
];

export default function Services() {
  return (
    <section style={{ backgroundColor: "#f5f0e8", borderBottom: "3px solid #1a1a1a" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 48, borderBottom: "3px solid #1a1a1a", paddingBottom: 24 }}>
          <div>
            <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", color: "#1a1a1a", opacity: 0.4, marginBottom: 10, textTransform: "uppercase" as const }}>
              Ne Yapıyoruz
            </p>
            <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#1a1a1a", margin: 0 }}>
              Hizmetlerimiz
            </h2>
          </div>
          <Link
            href="/hizmetler"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#1a1a1a", textDecoration: "none", borderBottom: "2px solid #1a1a1a", paddingBottom: 2 }}
          >
            Tüm Hizmetler <ArrowRight size={13} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 3 }}>
          {SERVICES.map(({ icon: Icon, title, desc, href, color }, i) => (
            <Link key={href} href={href} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: 44, height: 44, backgroundColor: color, border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} color={color === "#ffcc00" ? "#1a1a1a" : "#fff"} />
                  </div>
                  <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 32, color: "#1a1a1a", opacity: 0.06, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 16, color: "#1a1a1a", margin: 0, lineHeight: 1.3 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(26,26,26,0.6)", lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#1a1a1a", marginTop: 4 }}>
                  Detaylı Bilgi <ArrowRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
