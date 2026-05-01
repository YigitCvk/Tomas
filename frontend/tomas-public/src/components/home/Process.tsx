import { Search, Handshake, Ship, Package, RefreshCw } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CurvedConnector, BlobShape } from "@/components/ui/Decorations";

const STEPS = [
  { num: "01", icon: Search,     title: "Analiz",         desc: "Pazar koşullarını ve ihtiyaçlarınızı detaylı analiz ederiz." },
  { num: "02", icon: Handshake,  title: "Tedarik",        desc: "Global ağımızla en uygun tedarikçileri belirleriz."          },
  { num: "03", icon: Ship,       title: "Lojistik",       desc: "Nakliye ve gümrük süreçlerini uçtan uca yönetiriz."         },
  { num: "04", icon: Package,    title: "Teslimat",       desc: "Zamanında, güvenli ve belgeli teslimatı sağlarız."           },
  { num: "05", icon: RefreshCw,  title: "İş Birliği",    desc: "Uzun vadeli, sürdürülebilir ortaklık kurarız."               },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <BlobShape color="amber" className="absolute top-0 right-0 w-72 h-72 opacity-10" />
      <BlobShape color="navy"  className="absolute bottom-0 left-0 w-56 h-56 opacity-5"  />

      <div className="container">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-gold-600 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">
            Nasıl Çalışıyoruz
          </p>
          <h2
            className="font-jakarta font-bold text-navy-900 leading-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            İş Sürecimiz
          </h2>
        </AnimateOnScroll>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden lg:block">
          <div className="flex items-start">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex items-start flex-1">
                {/* Step */}
                <div className="flex flex-col items-center text-center flex-1 px-3 relative">
                  {/* Large outlined step number */}
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 font-jakarta font-bold leading-none select-none pointer-events-none"
                    style={{ fontSize: "5.5rem", color: "transparent", WebkitTextStroke: "2px #e2e8f0" }}
                    aria-hidden
                  >
                    {step.num}
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-navy-900 flex items-center justify-center mb-6 shadow-lg ring-4 ring-white mt-2">
                    <step.icon className="w-8 h-8 text-gold-400" />
                  </div>

                  <h3 className="font-jakarta font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[160px]">{step.desc}</p>
                </div>

                {/* Curved connector (between steps) */}
                {i < STEPS.length - 1 && (
                  <div className="flex items-center mt-12 shrink-0">
                    <CurvedConnector className="w-16 h-10 text-gold-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden relative pl-14">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400 via-gold-500 to-navy-900/20" />

          {STEPS.map((step) => (
            <div key={step.num} className="relative mb-10 last:mb-0">
              <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center ring-2 ring-white shadow-md">
                <step.icon className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-xs font-bold text-gold-500">{step.num}</span>
                  <h3 className="font-jakarta font-bold text-navy-900 text-base">{step.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
