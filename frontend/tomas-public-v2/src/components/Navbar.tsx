"use client";
import { useState } from "react";
import Link from "next/link";
import type { SiteSettings } from "@/lib/api";

interface NavbarProps {
  settings: SiteSettings;
}

export default function Navbar({ settings }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/haberler", label: "Haberler" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#0f2550",
        boxShadow: "0 2px 20px rgba(0,0,0,.25)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", height: "70px", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div
            style={{
              width: "40px", height: "40px", background: "#d4a017",
              borderRadius: "8px", display: "flex", alignItems: "center",
              justifyContent: "center", fontWeight: 700, fontSize: "18px", color: "#0f2550",
            }}
          >
            T
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "16px", color: "#fff", lineHeight: 1.1 }}>
              {settings.siteName || "Tomas"}
            </div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,.6)", lineHeight: 1 }}>
              Dış Ticaret
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }} className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: "rgba(255,255,255,.85)",
                fontWeight: 500,
                fontSize: "14px",
                padding: "8px 14px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all .15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.85)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            style={{
              marginLeft: "8px",
              background: "#d4a017",
              color: "#0f2550",
              fontWeight: 700,
              fontSize: "14px",
              padding: "9px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all .15s",
            }}
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#fff", fontSize: "22px", padding: "4px",
            display: "none",
          }}
          className="mobile-menu-btn"
          aria-label="Menü"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#091a38", borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <div className="container" style={{ padding: "12px 1.5rem 20px" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block", color: "rgba(255,255,255,.85)", fontWeight: 500,
                  fontSize: "15px", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.08)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              style={{
                display: "block", background: "#d4a017", color: "#0f2550",
                fontWeight: 700, fontSize: "15px", padding: "12px 16px",
                borderRadius: "8px", textDecoration: "none", marginTop: "12px", textAlign: "center",
              }}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
