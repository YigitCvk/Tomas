"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu, X, ChevronDown, ArrowRight,
  Globe, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart,
  Phone, Mail,
} from "lucide-react";
import type { SiteSettings } from "@/lib/api";

const SERVICES_MENU = [
  { href: "/hizmetler/uluslararasi-ticaret-ihracat-ithalat",        label: "Uluslararası Ticaret",    Icon: Globe },
  { href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler",  label: "Ambalaj Ürünleri",        Icon: Package },
  { href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti",        label: "Polimer & Plastik",       Icon: Factory },
  { href: "/hizmetler/tarim-narenciye-ve-gida-urunleri",            label: "Tarım & Gıda",            Icon: Leaf },
  { href: "/hizmetler/makine-ve-endustriyel-urunler",               label: "Makine & Endüstriyel",    Icon: Wrench },
  { href: "/hizmetler/muhendislik-ve-arastirma-hizmetleri",         label: "Mühendislik & Araştırma", Icon: Microscope },
  { href: "/hizmetler/yazilim-ve-dijital-cozumler",                 label: "Yazılım & Dijital",       Icon: Cpu },
  { href: "/hizmetler/reklam-ve-kurumsal-kimlik-tasarimi",          label: "Reklam & Kimlik",         Icon: Megaphone },
  { href: "/hizmetler/e-ticaret",                                   label: "E-Ticaret",               Icon: ShoppingCart },
];

const NAV = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/haberler",   label: "Haberler"   },
  { href: "/sss",        label: "SSS"         },
  { href: "/iletisim",   label: "İletişim"    },
];

export default function Header({ settings }: { settings: SiteSettings }) {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 48);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* ── Top bar ── */}
        <div
          className={`bg-navy-900 overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-0 opacity-0 py-0" : "max-h-12 opacity-100 py-2"
          }`}
        >
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-5 text-xs text-white/65">
              {settings.phone && (
                <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
                  <Phone className="w-3 h-3" />
                  {settings.phone}
                </a>
              )}
              {settings.email && (
                <a href={`mailto:${settings.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors">
                  <Mail className="w-3 h-3" />
                  {settings.email}
                </a>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-white/60">
              <button className="px-2 py-0.5 rounded text-white font-medium">TR</button>
              <span className="opacity-40">/</span>
              <button className="px-2 py-0.5 rounded hover:text-white transition-colors">EN</button>
            </div>
          </div>
        </div>

        {/* ── Main bar ── */}
        <div className={`bg-white transition-all duration-300 ${scrolled ? "border-b border-slate-200 shadow-sm" : ""}`}>
          <div className="container flex items-center justify-between h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex items-end gap-3 shrink-0">
              <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center">
                <span className="font-jakarta font-bold text-xl text-gold-400 leading-none select-none">T</span>
              </div>
              <div>
                <div className="font-jakarta font-bold text-[17px] text-navy-900 leading-none tracking-tight">
                  TOMAS
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[2px] w-7 bg-gold-400 rounded-full" />
                  <span className="text-[9px] tracking-[0.2em] uppercase text-slate-400">Dış Ticaret</span>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors group">
                Ana Sayfa
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400 rounded-full transition-all duration-200 group-hover:w-[calc(100%-32px)]" />
              </Link>

              {/* Hizmetler mega-menu */}
              <div className="relative group">
                <Link href="/hizmetler" className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors">
                  Hizmetler
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 w-[520px] grid grid-cols-2 gap-1">
                    {SERVICES_MENU.map(({ href, label, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-navy-50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-xl bg-navy-900 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-gold-400" />
                        </div>
                        <span className="text-sm font-medium text-slate-600 group-hover/item:text-navy-900 transition-colors leading-snug">
                          {label}
                        </span>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-1 pt-2 border-t border-slate-100">
                      <Link href="/hizmetler" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gold-600 hover:text-gold-700 group/all transition-colors">
                        Tüm Hizmetleri Gör
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/all:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {NAV.map((l) => (
                <Link key={l.href} href={l.href} className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors group">
                  {l.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400 rounded-full transition-all duration-200 group-hover:w-[calc(100%-32px)]" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/iletisim"
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-semibold text-sm rounded-full shadow-md shadow-gold-400/30 hover:shadow-gold-400/50 hover:shadow-lg transition-all duration-200 group"
              >
                Teklif Al
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div className={`fixed inset-0 z-[99] transition-all duration-300 ${mobileOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="font-jakarta font-bold text-navy-900">Menü</div>
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
            {[
              { href: "/", label: "Ana Sayfa" },
              { href: "/hizmetler", label: "Hizmetler" },
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/haberler", label: "Haberler" },
              { href: "/sss", label: "SSS" },
              { href: "/iletisim", label: "İletişim" },
            ].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-2xl text-slate-700 font-medium hover:bg-slate-50 hover:text-navy-900 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-100 space-y-3">
            {settings.phone && (
              <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-gold-500" />{settings.phone}
              </a>
            )}
            <Link href="/iletisim" onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-semibold rounded-full shadow-md">
              Teklif Al <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
