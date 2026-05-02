"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown, ArrowRight } from "lucide-react";
import type { SiteSettings } from "@/lib/api";

const SERVICES_MENU = [
  { href: "/hizmetler/uluslararasi-ticaret-ihracat-ithalat",        label: "Uluslararası Ticaret",    desc: "İhracat ve ithalat süreç koordinasyonu" },
  { href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler",  label: "Ambalaj & Endüstriyel",   desc: "Sarf malzeme tedarik ve takibi" },
  { href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti",        label: "Polimer & Plastik",        desc: "Hammadde tedarik ve ithalat" },
  { href: "/hizmetler/tarim-narenciye-ve-gida-urunleri",            label: "Tarım & Gıda",            desc: "Belgelendirme ve lojistik koordinasyonu" },
  { href: "/hizmetler/makine-ve-endustriyel-urunler",              label: "Makine & Endüstriyel",    desc: "Teknik ihtiyaç analizi ve tedarik" },
  { href: "/hizmetler/muhendislik-ve-arastirma-hizmetleri",        label: "Mühendislik & Araştırma", desc: "Fizibilite ve danışmanlık desteği" },
  { href: "/hizmetler/yazilim-ve-dijital-cozumler",                label: "Yazılım & Dijital",       desc: "Web, e-ticaret ve kurumsal yazılım" },
  { href: "/hizmetler/reklam-ve-kurumsal-kimlik-tasarimi",         label: "Reklam & Kimlik",         desc: "Marka ve tasarım çözümleri" },
  { href: "/hizmetler/e-ticaret",                                  label: "E-Ticaret",               desc: "Pazar yeri entegrasyonu ve satış" },
];

const NAV_LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/haberler",   label: "Haberler" },
  { href: "/sss",        label: "SSS" },
  { href: "/iletisim",   label: "İletişim" },
];

export default function Header({ settings }: { settings: SiteSettings }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid #E4E7EF",
        transition: "background 0.2s, box-shadow 0.2s",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.07)" : "none",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 68, gap: 32 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontWeight: 800, fontSize: 18, color: "#fff", fontFamily: "var(--font-inter)" }}>T</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1F36", lineHeight: 1, fontFamily: "var(--font-inter)" }}>Tomas</div>
              <div style={{ fontSize: 10, color: "#6B7280", letterSpacing: "0.08em", lineHeight: 1 }}>Dış Ticaret</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ alignItems: "center", gap: 4, flex: 1 }}>
            {/* Services dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button style={{ display: "flex", alignItems: "center", gap: 4, padding: "8px 12px", borderRadius: 8, border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: servicesOpen ? "#0B5CFF" : "#374151", fontFamily: "var(--font-inter)" }}>
                Hizmetler <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>

              {servicesOpen && (
                <div style={{ position: "absolute", top: "calc(100% + 8px)", left: -20, width: 680, backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "1px solid #E4E7EF", padding: 24, zIndex: 100 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Hizmet Alanlarımız</p>
                  <div className="grid grid-cols-3" style={{ gap: 4 }}>
                    {SERVICES_MENU.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setServicesOpen(false)} style={{ display: "block", padding: "10px 12px", borderRadius: 10, textDecoration: "none", transition: "background 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#F3F7FF")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1F36", marginBottom: 2 }}>{s.label}</div>
                        <div style={{ fontSize: 11, color: "#6B7280", lineHeight: 1.4 }}>{s.desc}</div>
                      </Link>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #E4E7EF" }}>
                    <Link href="/hizmetler" onClick={() => setServicesOpen(false)} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#0B5CFF", textDecoration: "none" }}>
                      Tüm Hizmetleri Gör <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={{ padding: "8px 12px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "#374151", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#0B5CFF"; e.currentTarget.style.background = "#F3F7FF"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.background = "transparent"; }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 12, flexShrink: 0 }}>
            {settings.phone && (
              <a href={`tel:${settings.phone.replace(/\s/g, "")}`} style={{ fontSize: 13, fontWeight: 500, color: "#6B7280", textDecoration: "none" }}>{settings.phone}</a>
            )}
            <Link href="/iletisim" style={{ backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 14, padding: "9px 20px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 2px 8px rgba(11,92,255,0.35)", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#003F9E")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0B5CFF")}
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(true)} style={{ marginLeft: "auto", padding: 8, borderRadius: 8, border: "1px solid #E4E7EF", background: "transparent", cursor: "pointer", display: "flex" }} className="lg:hidden" aria-label="Menüyü Aç">
            <Menu size={20} color="#374151" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }} onClick={() => setMobileOpen(false)} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 340, maxWidth: "100%", backgroundColor: "#fff", display: "flex", flexDirection: "column", boxShadow: "-4px 0 24px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E4E7EF" }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1F36" }}>Tomas Dış Ticaret</div>
              <button onClick={() => setMobileOpen(false)} style={{ padding: 6, borderRadius: 8, border: "1px solid #E4E7EF", background: "transparent", cursor: "pointer", display: "flex" }} aria-label="Kapat">
                <X size={18} color="#374151" />
              </button>
            </div>
            <nav style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
              {[{ href: "/", label: "Ana Sayfa" }, { href: "/hizmetler", label: "Hizmetler" }, ...NAV_LINKS].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px 16px", borderRadius: 10, fontWeight: 500, fontSize: 15, color: "#1A1F36", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F3F7FF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div style={{ padding: 20, borderTop: "1px solid #E4E7EF" }}>
              <Link href="/iletisim" onClick={() => setMobileOpen(false)} style={{ display: "block", textAlign: "center", backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 15, padding: "13px", borderRadius: 9999, textDecoration: "none" }}>
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
