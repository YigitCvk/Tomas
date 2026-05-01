import Link from "next/link";
import { ArrowRight, Globe2, Layers, ClipboardList, Handshake } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BlobShape } from "@/components/ui/Decorations";

const VALUE_CARDS = [
  { icon: Globe2,         title: "Global Tedarik Odağı",        desc: "Farklı ülkelerdeki tedarikçi ve alıcı ağına erişim ve koordinasyon." },
  { icon: Layers,         title: "Çok Sektörlü Yaklaşım",       desc: "Ambalaj, polimer, tarım, makine ve dijital alanda entegre çözümler." },
  { icon: ClipboardList,  title: "Süreç Disiplini",             desc: "Tedarikten teslimata planlı, izlenebilir ve şeffaf operasyon yönetimi." },
  { icon: Handshake,      title: "Uzun Vadeli İş Birliği",      desc: "Tek seferlik değil; kalıcı ve güvene dayalı iş ortaklığı modeli." },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <BlobShape color="sky" className="absolute -top-16 right-0 w-80 h-80 opacity-30" />

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — 40% */}
          <AnimateOnScroll className="lg:col-span-2">
            <p className="text-gold-600 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">
              Hakkımızda
            </p>
            <h2
              className="font-jakarta font-bold text-navy-900 leading-tight mb-5"
              style={{ fontSize: "clamp(1.9rem, 3vw, 2.75rem)", letterSpacing: "-0.02em" }}
            >
              B2B Dış Ticarette
              <br />Süreç Ortağınız
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4 text-[15px]">
              Tomas Dış Ticaret; farklı sektörlerdeki ürün ve çözüm ihtiyaçlarını dış ticaret, tedarik ve operasyon süreçleriyle bir araya getiren bir B2B çözüm ortağıdır.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              İşletmelerin ithalat, ihracat, ürün araştırması, tedarikçi değerlendirme ve teslimat süreçlerinde daha planlı, izlenebilir ve güvenilir bir yapı kurmasına destek olur.
            </p>
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy-900 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-all duration-200 text-sm group"
            >
              Daha Fazla Bilgi
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimateOnScroll>

          {/* Right — 60%: 2×2 value cards */}
          <AnimateOnScroll className="lg:col-span-3" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {VALUE_CARDS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${i % 2 === 0 ? "bg-navy-900" : "bg-gold-400"}`}>
                    <Icon className={`w-6 h-6 ${i % 2 === 0 ? "text-gold-400" : "text-navy-900"}`} />
                  </div>
                  <div className="font-jakarta font-semibold text-navy-900 text-sm mb-1.5">{title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
