import Link from "next/link";
import { ArrowRight, Home, MessageCircle } from "lucide-react";
import { DottedPattern, BlobShape } from "@/components/ui/Decorations";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-navy-900 min-h-[85vh] flex items-center">
      <DottedPattern className="absolute inset-0 text-white opacity-[0.04]" />
      <BlobShape className="absolute -top-40 -right-40 w-[520px] h-[520px] text-gold-400 opacity-[0.06]" />
      <BlobShape className="absolute -bottom-40 -left-40 w-[440px] h-[440px] text-gold-400 opacity-[0.04]" />

      <div className="container relative z-10 py-24 text-center">
        <div
          className="font-jakarta font-bold text-gold-400 leading-none mb-6 select-none"
          style={{ fontSize: "clamp(5rem, 18vw, 12rem)", letterSpacing: "-0.04em", opacity: 0.18 }}
          aria-hidden="true"
        >
          404
        </div>

        <div className="-mt-8 mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Sayfa Bulunamadı
          </span>
        </div>

        <h1 className="font-jakarta font-bold text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
          Aradığınız sayfa mevcut değil
        </h1>
        <p className="text-slate-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
          Bu sayfa kaldırılmış, taşınmış ya da hiç var olmamış olabilir.
          Ana sayfaya dönerek devam edebilirsiniz.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-jakarta font-bold rounded-full shadow-md shadow-gold-400/20 hover:shadow-gold-400/30 transition-all duration-200 group"
          >
            <Home className="w-4 h-4" />
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-gold-400/40 text-white font-semibold rounded-full transition-all duration-200 group"
          >
            <MessageCircle className="w-4 h-4" />
            İletişime Geç
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
