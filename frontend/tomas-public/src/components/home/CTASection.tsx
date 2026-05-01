import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BlobShape, GlobeIllustration } from "@/components/ui/Decorations";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      {/* Globe background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none select-none">
        <GlobeIllustration className="w-[700px] h-[700px] text-white" />
      </div>

      {/* Corner blobs */}
      <BlobShape color="amber" className="absolute -top-20 -left-20 w-72 h-72 opacity-20" />
      <BlobShape color="amber" className="absolute -bottom-20 -right-20 w-80 h-80 opacity-15" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <AnimateOnScroll>
            <p className="text-gold-400 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">
              Global Ticaretin Gücü
            </p>
            <h2
              className="font-jakarta font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Uluslararası Ticarette<br />
              <span className="text-gold-400">Güçlü Bir Ortak</span><br />
              Arıyor musunuz?
            </h2>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-lg">
              25 yılı aşkın tecrübemiz ve 50&apos;den fazla ülkedeki aktif ticaret ağımızla ihracat süreçlerinizi
              uçtan uca yönetiyoruz. Bugün iletişime geçin, size özel çözüm tasarlayalım.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["ISO Sertifikalı Süreçler", "Şeffaf Maliyet", "7/24 Destek"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-slate-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  {badge}
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right */}
          <AnimateOnScroll delay={0.15}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              <h3 className="font-jakarta font-bold text-white text-xl mb-2">
                Hemen Başlayalım
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Formu doldurun ya da bizi arayın — 24 saat içinde uzmanlarımız sizi geri arasın.
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="/iletisim"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-jakarta font-bold rounded-2xl shadow-lg shadow-gold-400/20 hover:shadow-gold-400/30 transition-all duration-200 group"
                >
                  Teklif Al
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+902121234567"
                  className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-gold-400/50 text-white hover:text-gold-400 font-semibold rounded-2xl transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  +90 (212) 123 45 67
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                {[
                  { value: "25+", label: "Yıl" },
                  { value: "500+", label: "Proje" },
                  { value: "50+", label: "Ülke" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-jakarta font-bold text-gold-400 text-2xl leading-none mb-1">{value}</div>
                    <div className="text-slate-400 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
