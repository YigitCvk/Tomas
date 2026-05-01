import Link from "next/link";
import { Package, Factory, Leaf, Wrench, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const SECTORS = [
  {
    icon:     Package,
    title:    "Ambalaj & Endüstriyel",
    desc:     "Esnek ambalaj, karton ve endüstriyel paketleme çözümleri.",
    gradient: "from-navy-900 via-navy-800 to-navy-700",
    href:     "/hizmetler/ambalaj-urunleri-ve-endustriyel-malzemeler",
  },
  {
    icon:     Factory,
    title:    "Polimer & Plastik",
    desc:     "Hammadde tedariki ve polimer ürün ticaretinde güvenilir kaynak.",
    gradient: "from-navy-800 via-navy-700 to-navy-600",
    href:     "/hizmetler/polimer-ve-plastik-hammadde-ticareti",
  },
  {
    icon:     Leaf,
    title:    "Tarım & Gıda",
    desc:     "Narenciye, tahıl ve işlenmiş gıda ürünleri ihracatı.",
    gradient: "from-navy-900 via-[#0f3020] to-[#1a4028]",
    href:     "/hizmetler/tarim-narenciye-ve-gida-urunleri",
  },
  {
    icon:     Wrench,
    title:    "Makine & Mühendislik",
    desc:     "Endüstriyel ekipman ihracatı ve proje yönetimi.",
    gradient: "from-navy-700 via-navy-800 to-navy-900",
    href:     "/hizmetler/makine-ve-endustriyel-urunler",
  },
];

export default function Sectors() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="container">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-gold-600 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">Sektörler</p>
          <h2
            className="font-jakarta font-bold text-navy-900 leading-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            Sektörel Çözümler
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map(({ icon: Icon, title, desc, gradient, href }, i) => (
            <AnimateOnScroll key={href} delay={i * 0.08}>
              <Link href={href} className="group block h-full">
                <div className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                  {/* Visual area */}
                  <div className={`relative h-52 bg-gradient-to-br ${gradient} flex items-start justify-start p-6 overflow-hidden`}>
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    {/* Gold glow */}
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl" />

                    {/* Outlined icon — top-left, large */}
                    <div className="relative z-10 w-14 h-14 rounded-2xl border-2 border-white/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-gold-400/80" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white flex-1 p-6 border-x border-b border-slate-100 rounded-b-3xl">
                    <h3 className="font-jakarta font-bold text-navy-900 text-lg mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:text-gold-700 transition-colors">
                      Detay
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
