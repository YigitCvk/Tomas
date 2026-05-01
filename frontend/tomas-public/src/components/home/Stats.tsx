import { Globe2, Layers3, ClipboardList, Handshake } from "lucide-react";
import { DottedPattern, BlobShape } from "@/components/ui/Decorations";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const PILLARS = [
  {
    icon: Globe2,
    title: "Global Tedarik Ağı",
    desc: "Farklı coğrafyalardaki tedarikçi ve alıcılarla köprü kurarak işletmelerin uluslararası pazarlara güvenli erişimini sağlıyoruz.",
  },
  {
    icon: Layers3,
    title: "Çok Sektörlü Çözümler",
    desc: "Ambalaj, polimer, tarım, makine, yazılım ve e-ticaret alanlarında bütüncül ve entegre B2B çözümler üretiyoruz.",
  },
  {
    icon: ClipboardList,
    title: "Uçtan Uca Süreç Yönetimi",
    desc: "İhtiyaç analizinden teslimat takibine kadar tüm operasyonu koordine ediyor, süreci şeffaf ve izlenebilir kılıyoruz.",
  },
  {
    icon: Handshake,
    title: "Kalıcı İş Birliği Modeli",
    desc: "Tek seferlik işlemler yerine uzun vadeli, güvene dayalı iş ortaklıkları kurarak sürdürülebilir ticaret ilişkileri geliştiriyoruz.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <DottedPattern className="absolute inset-0 text-white opacity-[0.04]" />
      <BlobShape color="amber" className="absolute -top-20 right-0 w-80 h-80 opacity-10" />
      <BlobShape color="sky"   className="absolute -bottom-16 left-0 w-64 h-64 opacity-8"  />

      <div className="container relative z-10">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-gold-400 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">Değer Önerimiz</p>
          <h2
            className="font-jakarta font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            Tomas ile Çalışmanın<br />Temel Faydaları
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 0.08}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-400/15 border border-gold-400/20 flex items-center justify-center mb-5 group-hover:bg-gold-400/25 transition-colors duration-200">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <div className="font-jakarta font-bold text-white text-base mb-2">{title}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{desc}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
