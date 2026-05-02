import Link from "next/link";
import { MapPin, Phone, Mail, Smartphone } from "lucide-react";
import type { SiteSettings } from "@/lib/api";

const SERVICES = [
  { label: "Uluslararası Ticaret",    href: "/hizmetler/uluslararasi-ticaret-ihracat-ithalat" },
  { label: "Ambalaj Ürünleri",        href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler" },
  { label: "Polimer & Plastik",       href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti" },
  { label: "Tarım & Gıda",            href: "/hizmetler/tarim-narenciye-ve-gida-urunleri" },
  { label: "Makine & Endüstriyel",    href: "/hizmetler/makine-ve-endustriyel-urunler" },
  { label: "Mühendislik & Araştırma", href: "/hizmetler/muhendislik-ve-arastirma-hizmetleri" },
  { label: "Yazılım & Dijital",       href: "/hizmetler/yazilim-ve-dijital-cozumler" },
  { label: "Reklam & Kimlik",         href: "/hizmetler/reklam-ve-kurumsal-kimlik-tasarimi" },
  { label: "E-Ticaret",               href: "/hizmetler/e-ticaret" },
];

const CORPORATE = [
  { label: "Hakkımızda",          href: "/hakkimizda" },
  { label: "Haberler",            href: "/haberler" },
  { label: "SSS",                 href: "/sss" },
  { label: "İletişim",            href: "/iletisim" },
  { label: "KVKK",                href: "/kvkk" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
];

export default function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", borderTop: "3px solid #ffcc00" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" style={{ paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, backgroundColor: "#ffcc00", border: "2px solid #ffcc00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 20, color: "#1a1a1a" }}>T</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 18, color: "#fff", lineHeight: 1 }}>TOMAS</div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)" }}>DIŞ TİCARET</div>
              </div>
            </Link>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              Global ticaret, tedarik zinciri ve kurumsal çözümler alanında güvenilir iş ortağınız.
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", color: "#ffcc00", marginBottom: 16 }}>HİZMETLER</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500, textDecoration: "none" }} className="hover:text-[#ffcc00] transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", color: "#ffcc00", marginBottom: 16 }}>KURUMSAL</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {CORPORATE.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500, textDecoration: "none" }} className="hover:text-[#ffcc00] transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", color: "#ffcc00", marginBottom: 16 }}>İLETİŞİM</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {settings.address && (
                <div style={{ display: "flex", gap: 10 }}>
                  <MapPin size={14} style={{ color: "#ffcc00", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{settings.address}</span>
                </div>
              )}
              {settings.phone && (
                <a href={`tel:${settings.phone.replace(/\s/g, "")}`} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 600 }} className="hover:text-[#ffcc00] transition-colors">
                  <Phone size={14} style={{ color: "#ffcc00", flexShrink: 0 }} />{settings.phone}
                </a>
              )}
              {settings.gsm && (
                <a href={`tel:${settings.gsm.replace(/\s/g, "")}`} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 600 }} className="hover:text-[#ffcc00] transition-colors">
                  <Smartphone size={14} style={{ color: "#ffcc00", flexShrink: 0 }} />{settings.gsm}
                </a>
              )}
              {settings.email && (
                <a href={`mailto:${settings.email}`} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 600 }} className="hover:text-[#ffcc00] transition-colors">
                  <Mail size={14} style={{ color: "#ffcc00", flexShrink: 0 }} />{settings.email}
                </a>
              )}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} {settings.siteName || "Tomas Dış Ticaret"}. Tüm hakları saklıdır.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/kvkk" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", textDecoration: "none" }} className="hover:text-white transition-colors">KVKK</Link>
            <Link href="/gizlilik-politikasi" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", textDecoration: "none" }} className="hover:text-white transition-colors">Gizlilik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
