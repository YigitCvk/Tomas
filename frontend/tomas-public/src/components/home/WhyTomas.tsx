import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, Layers, ClipboardCheck, Clock, Target } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const REASONS = [
  { icon: ShieldCheck,     title: "Güvenilir Tedarik",           desc: "Tedarikçi araştırması ve değerlendirme ile güvence altına alınmış süreç." },
  { icon: Globe2,          title: "Global Bakış Açısı",          desc: "Farklı pazarlardaki tedarikçi ve alıcı ağına erişim ve koordinasyon." },
  { icon: Layers,          title: "Çok Sektörlü Deneyim",        desc: "Ambalaj, polimer, tarım, makine ve dijital alanda bütüncül yaklaşım." },
  { icon: ClipboardCheck,  title: "Operasyonel Takip",           desc: "Sipariş sürecinden teslimata kadar izlenebilir ve şeffaf operasyon." },
  { icon: Clock,           title: "Süreç Disiplini",             desc: "Planlı zaman yönetimi ile gecikme riskini minimize eden sistematik yürütüm." },
  { icon: Target,          title: "Kalite Odaklılık",            desc: "Ürün ve süreç kalitesinde tutarlılığı esas alan titiz değerlendirme." },
];

export default function WhyTomas() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — 40% */}
          <AnimateOnScroll className="lg:col-span-2">
            <p className="text-gold-600 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">Farkımız</p>
            <h2
              className="font-jakarta font-bold text-navy-900 leading-tight mb-5"
              style={{ fontSize: "clamp(1.9rem, 3vw, 2.75rem)", letterSpacing: "-0.02em" }}
            >
              Neden
              <br />
              <span className="text-gold-400">Tomas?</span>
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
              Dış ticaret süreçleri karmaşık ve çok aktörlüdür. Tomas, bu süreçleri sizin adınıza koordine ederek riski azaltır, operasyonel yükü hafifletir ve süreci izlenebilir kılar.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-semibold rounded-full shadow-md shadow-gold-400/25 hover:shadow-gold-400/40 transition-all duration-200 text-sm group"
            >
              İletişime Geçin
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimateOnScroll>

          {/* Right — 60%: 2×3 grid */}
          <AnimateOnScroll className="lg:col-span-3" delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group flex items-start gap-4 bg-slate-50 hover:bg-navy-900 rounded-2xl p-5 transition-all duration-300 border border-transparent hover:border-navy-800">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/15 group-hover:bg-gold-400 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gold-600 group-hover:text-navy-900 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-semibold text-navy-900 group-hover:text-white text-sm mb-1.5 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-slate-500 group-hover:text-slate-300 text-xs leading-relaxed transition-colors duration-300">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
