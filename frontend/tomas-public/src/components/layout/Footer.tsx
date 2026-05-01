import Link from "next/link";
import { MapPin, Phone, Mail, Smartphone, ArrowRight, Globe2, Share2 } from "lucide-react";
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
    <footer className="bg-navy-900">
      {/* Gold top accent */}
      <div className="h-[3px] bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-end gap-3 mb-5">
              <div className="w-11 h-11 bg-gold-400 rounded-xl flex items-center justify-center">
                <span className="font-jakarta font-bold text-2xl text-navy-900 leading-none select-none">T</span>
              </div>
              <div>
                <div className="font-jakarta font-bold text-base text-white leading-tight">TOMAS</div>
                <div className="h-[2px] w-full bg-gold-400/60 mt-1 rounded-full" />
                <div className="text-[9px] tracking-[0.2em] uppercase text-white/35 mt-0.5">Dış Ticaret</div>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Global ticaret, tedarik zinciri ve kurumsal çözümler alanında güvenilir iş ortağınız. 20+ yıllık sektör deneyimi.
            </p>
            <div className="flex items-center gap-2.5">
              {[Globe2, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-400/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-jakarta font-semibold text-[11px] text-white/35 uppercase tracking-[0.18em] mb-5">Hizmetler</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-2 text-sm text-white/55 hover:text-gold-400 transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="font-jakarta font-semibold text-[11px] text-white/35 uppercase tracking-[0.18em] mb-5">Kurumsal</h4>
            <ul className="space-y-2.5">
              {CORPORATE.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="flex items-center gap-2 text-sm text-white/55 hover:text-gold-400 transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-jakarta font-semibold text-[11px] text-white/35 uppercase tracking-[0.18em] mb-5">İletişim</h4>
            <ul className="space-y-3.5 mb-8">
              {settings.address && (
                <li className="flex gap-3 text-sm text-white/55">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>{settings.address}</span>
                </li>
              )}
              {settings.phone && (
                <li>
                  <a href={`tel:${settings.phone.replace(/\s/g,"")}`} className="flex gap-3 text-sm text-white/55 hover:text-gold-400 transition-colors">
                    <Phone className="w-4 h-4 text-gold-500 shrink-0" />{settings.phone}
                  </a>
                </li>
              )}
              {settings.gsm && (
                <li>
                  <a href={`tel:${settings.gsm.replace(/\s/g,"")}`} className="flex gap-3 text-sm text-white/55 hover:text-gold-400 transition-colors">
                    <Smartphone className="w-4 h-4 text-gold-500 shrink-0" />{settings.gsm}
                  </a>
                </li>
              )}
              {settings.email && (
                <li>
                  <a href={`mailto:${settings.email}`} className="flex gap-3 text-sm text-white/55 hover:text-gold-400 transition-colors">
                    <Mail className="w-4 h-4 text-gold-500 shrink-0" />{settings.email}
                  </a>
                </li>
              )}
            </ul>
            {/* Newsletter */}
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2.5">Bülten</p>
            <form action="#" className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-xl bg-white/8 border border-white/15 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold-400/50 transition-colors"
              />
              <button type="submit" className="px-4 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 text-sm font-semibold rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all shrink-0">
                Abone
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {settings.siteName || "Tomas Dış Ticaret A.Ş."}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/kvkk" className="text-xs text-white/25 hover:text-white/50 transition-colors">KVKK</Link>
            <Link href="/gizlilik-politikasi" className="text-xs text-white/25 hover:text-white/50 transition-colors">Gizlilik</Link>
            <span className="text-xs text-white/20">Üsküdar, İstanbul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
