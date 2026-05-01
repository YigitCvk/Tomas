"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BlobShape, DottedPattern, GlobeIllustration, UnderlineSquiggle } from "@/components/ui/Decorations";

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const VALUE_PROPS = [
  "Çok sektörlü B2B çözüm ortaklığı",
  "Tedarikten teslimata süreç desteği",
  "Şeffaf operasyon ve düzenli raporlama",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <BlobShape color="amber" className="absolute -top-24 -left-24 w-72 h-72 opacity-15" />
      <BlobShape color="navy"  className="absolute -bottom-20 right-0 w-64 h-64 opacity-8" />
      <DottedPattern className="absolute inset-0 text-slate-300 opacity-30" />

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease } }}
              className="flex items-center gap-2.5 mb-7"
            >
              <div className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-navy-900" />
              </div>
              <span className="text-gold-600 text-[11px] font-semibold uppercase tracking-[0.22em]">
                Global Ticaret Çözümleri
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease } }}
              className="font-jakarta font-bold text-navy-900 leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              Global Ticarete Açılan{" "}
              <span className="relative inline-block">
                <span className="text-gold-400">Güvenilir</span>
                <UnderlineSquiggle className="absolute w-full h-[10px] -bottom-1 left-0 text-gold-400" />
              </span>
              <br />Çözüm Ortağınız
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease } }}
              className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Tomas Dış Ticaret; ithalat, ihracat, global tedarik, endüstriyel ürünler ve dijital çözümler alanlarında işletmeler için uçtan uca B2B süreç desteği sunar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease } }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/hizmetler"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-semibold rounded-full shadow-lg shadow-gold-400/30 hover:shadow-gold-400/50 hover:shadow-xl transition-all duration-200 group"
              >
                Hizmetlerimizi İncele
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/iletisim"
                className="flex items-center gap-2 px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-all duration-200"
              >
                Teklif Al <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.42, ease } }}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4"
            >
              {VALUE_PROPS.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-600">{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Globe Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.15, ease } }}
            className="relative hidden lg:flex items-center justify-center py-8"
          >
            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden bg-gradient-to-br from-navy-500 via-navy-700 to-navy-900 shadow-2xl">
              <GlobeIllustration className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-gold-400/10" />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute left-0 top-10 -rotate-[5deg] bg-white rounded-2xl shadow-xl p-4 z-10 w-52 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 text-2xl">
                  🌍
                </div>
                <div>
                  <div className="font-jakarta font-bold text-navy-900 text-sm leading-tight">Global Tedarik</div>
                  <div className="text-slate-400 text-xs mt-1 leading-snug">Çok bölgeli ticaret ağı</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 — gold */}
            <div className="absolute -right-4 top-1/3 rotate-[4deg] bg-gold-400 rounded-2xl shadow-xl p-5 z-10 w-40 text-center">
              <div className="font-jakarta font-bold text-navy-900 text-sm leading-tight mb-1">B2B Odaklı</div>
              <div className="text-navy-700 text-xs font-medium">Süreç ortaklığı</div>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute left-2 bottom-10 rotate-[5deg] bg-white rounded-2xl shadow-xl p-4 z-10 w-48 border-l-4 border-navy-900">
              <div className="font-jakarta font-bold text-navy-900 text-sm leading-tight mb-1">Çok Sektörlü</div>
              <div className="text-slate-400 text-xs">9 farklı hizmet alanı</div>
            </div>

            <div className="absolute top-0 right-4 text-gold-400/40">
              <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
                {Array.from({ length: 16 }, (_, i) => (
                  <circle key={i} cx={(i % 4) * 20 + 10} cy={Math.floor(i / 4) * 20 + 10} r="3" fill="currentColor" />
                ))}
              </svg>
            </div>
            <div className="absolute bottom-0 left-8 text-navy-500/20">
              <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden>
                {Array.from({ length: 9 }, (_, i) => (
                  <circle key={i} cx={(i % 3) * 24 + 12} cy={Math.floor(i / 3) * 24 + 12} r="3" fill="currentColor" />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
