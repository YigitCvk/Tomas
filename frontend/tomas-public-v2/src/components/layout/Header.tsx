"use client";
import { useState } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";
import type { SiteSettings } from "@/lib/api";

const SERVICES_MENU = [
  { href: "/hizmetler/uluslararasi-ticaret-ihracat-ithalat", label: "Uluslararası Ticaret" },
  { href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler", label: "Ambalaj Ürünleri" },
  { href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti", label: "Polimer & Plastik" },
  { href: "/hizmetler/tarim-narenciye-ve-gida-urunleri", label: "Tarım & Gıda" },
  { href: "/hizmetler/makine-ve-endustriyel-urunler", label: "Makine & Endüstriyel" },
  { href: "/hizmetler/muhendislik-ve-arastirma-hizmetleri", label: "Mühendislik & Araştırma" },
  { href: "/hizmetler/yazilim-ve-dijital-cozumler", label: "Yazılım & Dijital" },
  { href: "/hizmetler/reklam-ve-kurumsal-kimlik-tasarimi", label: "Reklam & Kimlik" },
  { href: "/hizmetler/e-ticaret", label: "E-Ticaret" },
];

const NAV_LINKS = [
  { href: "/hakkimizda", label: "HAKKIMIZDA" },
  { href: "/haberler", label: "HABERLER" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İLETİŞİM" },
];

export default function Header({ settings }: { settings: SiteSettings }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header style={{ backgroundColor: "#f5f0e8", borderBottom: "3px solid #1a1a1a", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 36, height: 36, backgroundColor: "#ffcc00", border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 18, color: "#1a1a1a", lineHeight: 1 }}>T</span>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 17, letterSpacing: "-0.02em", color: "#1a1a1a", lineHeight: 1 }}>TOMAS</div>
              <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "#1a1a1a", opacity: 0.45 }}>DIŞ TİCARET</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ alignItems: "center" }}>
            <div style={{ position: "relative" }} className="group">
              <Link href="/hizmetler" style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", color: "#1a1a1a", padding: "0 14px", height: 64, display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }} className="hover:bg-[#ffcc00] transition-colors">
                HİZMETLER <ChevronDown size={12} />
              </Link>
              <div style={{ position: "absolute", top: "100%", left: 0, backgroundColor: "#f5f0e8", border: "2px solid #1a1a1a", borderTop: "none", width: 240, zIndex: 100 }} className="invisible group-hover:visible">
                {SERVICES_MENU.map((s) => (
                  <Link key={s.href} href={s.href} style={{ display: "block", padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#1a1a1a", borderBottom: "1px solid rgba(26,26,26,0.1)", textDecoration: "none" }} className="hover:bg-[#ffcc00] transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", color: "#1a1a1a", padding: "0 14px", height: 64, display: "flex", alignItems: "center", textDecoration: "none" }} className="hover:bg-[#ffcc00] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 16 }}>
            {settings.phone && (
              <a href={`tel:${settings.phone.replace(/\s/g, "")}`} style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", textDecoration: "none" }}>{settings.phone}</a>
            )}
            <Link href="/iletisim" style={{ backgroundColor: "#1a1a1a", color: "#ffcc00", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", padding: "10px 20px", border: "2px solid #1a1a1a", boxShadow: "3px 3px 0 #ffcc00", textDecoration: "none" }}>
              TEKLİF AL
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(true)} style={{ border: "2px solid #1a1a1a", padding: 8, background: "transparent", cursor: "pointer", display: "flex" }} className="lg:hidden" aria-label="Menüyü Aç" aria-expanded={mobileOpen}>
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(26,26,26,0.5)" }} onClick={() => setMobileOpen(false)} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 320, maxWidth: "100%", backgroundColor: "#f5f0e8", borderLeft: "3px solid #1a1a1a", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "2px solid #1a1a1a" }}>
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 18 }}>TOMAS</span>
              <button onClick={() => setMobileOpen(false)} style={{ border: "2px solid #1a1a1a", padding: 6, background: "transparent", cursor: "pointer", display: "flex" }} aria-label="Menüyü Kapat">
                <X size={18} />
              </button>
            </div>
            <nav style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
              {[{ href: "/", label: "ANA SAYFA" }, { href: "/hizmetler", label: "HİZMETLER" }, ...NAV_LINKS].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "14px 16px", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 15, color: "#1a1a1a", border: "2px solid #1a1a1a", backgroundColor: "#fff", marginBottom: 6, textDecoration: "none" }} className="hover:bg-[#ffcc00] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div style={{ padding: 20, borderTop: "2px solid #1a1a1a" }}>
              <Link href="/iletisim" onClick={() => setMobileOpen(false)} style={{ display: "block", textAlign: "center", backgroundColor: "#1a1a1a", color: "#ffcc00", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 14, letterSpacing: "0.1em", padding: "14px", border: "2px solid #1a1a1a", textDecoration: "none" }}>
                TEKLİF AL
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
