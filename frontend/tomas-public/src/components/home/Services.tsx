import Link from "next/link";
import { ArrowRight, Globe2, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { DottedGrid } from "@/components/ui/Decorations";

const SERVICES = [
  { icon: Globe2,        title: "Uluslararası Ticaret",              desc: "İhracat ve ithalat operasyonlarını planlamasından teslimatına kadar süreç koordinasyonu ve çözüm ortaklığı.",              href: "/hizmetler/uluslararasi-ticaret-ihracat-ithalat" },
  { icon: Package,       title: "Ambalaj & Endüstriyel Malzemeler",  desc: "Endüstriyel ambalaj ve sarf malzemeleri tedarikinde geniş ürün portföyü, tedarikçi araştırması ve teslimat takibi.",        href: "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler" },
  { icon: Factory,       title: "Polimer & Plastik Hammadde",        desc: "Plastik hammadde ve polimer ürün gruplarında tedarik araştırması, fiyat analizi ve ithalat koordinasyonu.",                  href: "/hizmetler/polimer-ve-plastik-hammadde-ticareti" },
  { icon: Leaf,          title: "Tarım, Narenciye & Gıda",           desc: "Tarımsal ürün ve gıda tedarikinde belgelendirme, kalite takibi ve lojistik koordinasyonu.",                                  href: "/hizmetler/tarim-narenciye-ve-gida-urunleri" },
  { icon: Wrench,        title: "Makine & Endüstriyel Ürünler",      desc: "Endüstriyel makine ve ekipman tedarikinde teknik ihtiyaç analizi, tedarikçi araştırması ve operasyon takibi.",              href: "/hizmetler/makine-ve-endustriyel-urunler" },
  { icon: Microscope,    title: "Mühendislik & Araştırma",           desc: "Teknik araştırma, ürün değerlendirme ve fizibilite süreçlerinde B2B odaklı analiz ve danışmanlık desteği.",                 href: "/hizmetler/muhendislik-ve-arastirma-hizmetleri" },
  { icon: Cpu,           title: "Yazılım & Dijital Çözümler",        desc: "Web çözümleri, e-ticaret altyapısı ve kurumsal yazılım ihtiyaçlarında dijital dönüşüm ortaklığı.",                          href: "/hizmetler/yazilim-ve-dijital-cozumler" },
  { icon: Megaphone,     title: "Reklam & Kurumsal Kimlik",          desc: "Marka kimliği, kurumsal iletişim materyalleri ve pazara giriş iletişim altyapısı için tasarım çözümleri.",                  href: "/hizmetler/reklam-ve-kurumsal-kimlik-tasarimi" },
  { icon: ShoppingCart,  title: "E-Ticaret",                         desc: "E-ticaret altyapısı kurulumu, pazar yeri entegrasyonu ve dijital satış kanalı geliştirme desteği.",                          href: "/hizmetler/e-ticaret" },
];

export default function Services() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-gold-600 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">
            Ne Yapıyoruz
          </p>
          <h2
            className="font-jakarta font-bold text-navy-900 leading-tight mb-4"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            Hizmetlerimiz
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            B2B dış ticaret ve tedarik süreçlerinde uçtan uca çözüm ortaklığı.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc, href }, i) => (
            <AnimateOnScroll key={href} delay={i * 0.05}>
              <Link href={href} className="group block h-full">
                <div className="relative h-full bg-white group-hover:bg-navy-900 rounded-3xl p-8 border border-slate-200 group-hover:border-transparent shadow-sm group-hover:shadow-2xl transition-all duration-[400ms] ease-in-out overflow-hidden">
                  <div className="absolute top-4 right-4 text-slate-200 group-hover:text-navy-700 transition-colors duration-[400ms]">
                    <DottedGrid rows={3} cols={3} gap={10} dotSize={2} />
                  </div>

                  <div className="relative w-16 h-16 rounded-2xl bg-navy-50 group-hover:bg-gold-400 flex items-center justify-center mb-6 -rotate-3 transition-all duration-[400ms]">
                    <Icon className="w-7 h-7 text-navy-700 group-hover:text-navy-900 transition-colors duration-[400ms]" />
                  </div>

                  <h3 className="font-jakarta font-bold text-[17px] text-navy-900 group-hover:text-white leading-snug mb-3 transition-colors duration-[400ms]">
                    {title}
                  </h3>

                  <p className="text-slate-500 group-hover:text-slate-300 text-[14px] leading-relaxed mb-6 transition-colors duration-[400ms]">
                    {desc}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:text-gold-400 transition-colors duration-[400ms]">
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-all duration-200 group"
          >
            Tüm Hizmetleri Gör
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
