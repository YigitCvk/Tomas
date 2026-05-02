import Link from "next/link";
import { MapPin, Phone, Mail, Smartphone, ArrowRight } from "lucide-react";
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
    <footer style={{ backgroundColor: "#0F172A", color: "#fff" }}>
      {/* Top CTA band */}
      <div style={{ background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", padding: "56px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.4rem,3vw,2rem)", color: "#fff", marginBottom: 8, lineHeight: 1.2 }}>
              Dış Ticaret Süreçlerinizi Birlikte Yönetelim
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 480 }}>
              Tedarik ve dış ticaret ihtiyaçlarınız için uzman ekibimizle iletişime geçin.
            </p>
          </div>
          <Link href="/iletisim" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#0B5CFF", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 9999, textDecoration: "none", flexShrink: 0 }}>
            Teklif Al <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 40px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 40, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontWeight: 800, fontSize: 18, color: "#fff" }}>T</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", lineHeight: 1 }}>Tomas</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>Dış Ticaret</div>
              </div>
            </Link>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 0 }}>
              Global ticaret ve tedarik çözümlerinde güvenilir B2B iş ortağınız.
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 16 }}>Hizmetler</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 16 }}>Kurumsal</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {CORPORATE.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 16 }}>İletişim</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {settings.address && (
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <MapPin size={14} style={{ color: "#0B5CFF", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{settings.address}</span>
                </div>
              )}
              {settings.phone && (
                <a href={`tel:${settings.phone.replace(/\s/g, "")}`} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  <Phone size={14} style={{ color: "#0B5CFF", flexShrink: 0 }} />{settings.phone}
                </a>
              )}
              {settings.gsm && (
                <a href={`tel:${settings.gsm.replace(/\s/g, "")}`} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  <Smartphone size={14} style={{ color: "#0B5CFF", flexShrink: 0 }} />{settings.gsm}
                </a>
              )}
              {settings.email && (
                <a href={`mailto:${settings.email}`} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  <Mail size={14} style={{ color: "#0B5CFF", flexShrink: 0 }} />{settings.email}
                </a>
              )}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} {settings.siteName || "Tomas Dış Ticaret"}. Tüm hakları saklıdır.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/kvkk" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>KVKK</Link>
            <Link href="/gizlilik-politikasi" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Gizlilik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
