import Link from "next/link";
import type { SiteSettings } from "@/lib/api";

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer style={{ background: "#091a38", color: "rgba(255,255,255,.8)", paddingTop: "64px" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "44px", height: "44px", background: "#d4a017",
                  borderRadius: "10px", display: "flex", alignItems: "center",
                  justifyContent: "center", fontWeight: 700, fontSize: "20px", color: "#0f2550",
                }}
              >
                T
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "18px", color: "#fff" }}>
                  {settings.siteName || "Tomas Dış Ticaret"}
                </div>
              </div>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,.6)", marginBottom: "20px" }}>
              Global ticaret, tedarik ve kurumsal hizmetlerde güvenilir iş ortağınız.
            </p>
            {settings.whatsApp && (
              <a
                href={`https://wa.me/${settings.whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#25d366", color: "#fff", fontWeight: 600,
                  fontSize: "14px", padding: "10px 18px", borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                💬 WhatsApp ile Ulaşın
              </a>
            )}
          </div>

          {/* Hizmetler */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "15px", color: "#fff", marginBottom: "16px" }}>Hizmetler</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["Uluslararası Ticaret", "/hizmetler/uluslararasi-ticaret-ihracat-ithalat"],
                ["Ambalaj Ürünleri", "/hizmetler/ambalaj-urunleri-endustriyel-malzemeler"],
                ["Polimer ve Plastik", "/hizmetler/polimer-plastik-hammadde-ticareti"],
                ["Tarım ve Gıda", "/hizmetler/tarim-narenciye-gida-urunleri"],
                ["Yazılım ve Dijital", "/hizmetler/yazilim-dijital-cozumler"],
              ].map(([label, href]) => (
                <li key={href} style={{ marginBottom: "8px" }}>
                  <Link
                    href={href}
                    style={{ color: "rgba(255,255,255,.65)", fontSize: "14px", textDecoration: "none" }}
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "15px", color: "#fff", marginBottom: "16px" }}>Kurumsal</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["Hakkımızda", "/hakkimizda"],
                ["Haberler", "/haberler"],
                ["SSS", "/sss"],
                ["İletişim", "/iletisim"],
                ["KVKK", "/kvkk"],
                ["Gizlilik Politikası", "/gizlilik-politikasi"],
              ].map(([label, href]) => (
                <li key={href} style={{ marginBottom: "8px" }}>
                  <Link
                    href={href}
                    style={{ color: "rgba(255,255,255,.65)", fontSize: "14px", textDecoration: "none" }}
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "15px", color: "#fff", marginBottom: "16px" }}>İletişim</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {settings.address && (
                <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,.65)" }}>
                  <span>📍</span><span>{settings.address}</span>
                </li>
              )}
              {settings.phone && (
                <li style={{ fontSize: "14px" }}>
                  <a href={`tel:${settings.phone.replace(/\s/g, "")}`} style={{ color: "rgba(255,255,255,.65)", textDecoration: "none" }}>
                    📞 {settings.phone}
                  </a>
                </li>
              )}
              {settings.gsm && (
                <li style={{ fontSize: "14px" }}>
                  <a href={`tel:${settings.gsm.replace(/\s/g, "")}`} style={{ color: "rgba(255,255,255,.65)", textDecoration: "none" }}>
                    📱 {settings.gsm}
                  </a>
                </li>
              )}
              {settings.email && (
                <li style={{ fontSize: "14px" }}>
                  <a href={`mailto:${settings.email}`} style={{ color: "#d4a017", textDecoration: "none" }}>
                    ✉️ {settings.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div
          style={{
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)" }}>
            © {new Date().getFullYear()} {settings.siteName || "Tomas Dış Ticaret"}. Tüm hakları saklıdır.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)" }}>
            Üsküdar / İstanbul, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
