"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { BlobShape } from "@/components/ui/Decorations";

const TESTIMONIALS = [
  {
    quote:   "Tomas ile çalışmaya başladığımızdan bu yana ihracat süreçlerimiz son derece verimli hale geldi. Bürokratik engelleri sıfıra indirdiler.",
    author:  "Mehmet Yılmaz",
    title:   "Genel Müdür",
    company: "Akdeniz Gıda A.Ş.",
    country: "TR",
    rating:  5,
  },
  {
    quote:   "Global tedarik ağları ve lojistik yönetim konusundaki uzmanlıkları sayesinde maliyetlerimizi %20 oranında düşürdük. Kesinlikle tavsiye ediyorum.",
    author:  "Anna Kowalski",
    title:   "Procurement Manager",
    company: "EuroTrade GmbH",
    country: "DE",
    rating:  5,
  },
  {
    quote:   "Polimer hammadde tedarikinde güvenilir ve rekabetçi bir iş ortağı arıyorduk. Her beklentimizi karşıladı. Şeffaf süreç, hızlı teslimat.",
    author:  "Ibrahim Al-Rashid",
    title:   "Operations Director",
    company: "Gulf Plastics Co.",
    country: "AE",
    rating:  5,
  },
  {
    quote:   "Mühendislik ekipmanı ihracatında teknik destek ve belgelendirme konularında Tomas'ın desteği paha biçilmez. Güvenilir iş ortağımız.",
    author:  "Chen Wei",
    title:   "Import Manager",
    company: "SinoPack Industries",
    country: "CN",
    rating:  5,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selected, setSelected] = useState(0);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-white border-t border-b border-slate-100 py-24 lg:py-32">
      <BlobShape color="sky" className="absolute -top-24 -right-24 w-80 h-80 opacity-25" />

      <div className="container">
        <div className="text-center mb-14">
          <p className="text-gold-600 text-[11px] font-semibold uppercase tracking-[0.22em] mb-4">Referanslar</p>
          <h2
            className="font-jakarta font-bold text-navy-900 leading-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        {/* Embla carousel */}
        <div className="overflow-hidden -mx-3" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.33%-16px)] min-w-0 px-3"
              >
                <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full">
                  {/* Decorative dot cluster — top right */}
                  <div className="absolute top-5 right-5 text-gold-400/20">
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden>
                      {Array.from({ length: 9 }, (_, i) => (
                        <circle key={i} cx={(i%3)*16+8} cy={Math.floor(i/3)*16+8} r="3" fill="currentColor" />
                      ))}
                    </svg>
                  </div>

                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-gold-400/30 mb-5" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-slate-600 text-[15px] italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gold-400 font-jakarta font-bold shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900 text-sm">{t.author}</div>
                      <div className="text-slate-400 text-xs">{t.title} · {t.company}</div>
                    </div>
                    <div className="ml-auto px-2 py-0.5 rounded-full bg-slate-200 text-xs text-slate-500 font-medium">
                      {t.country}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={prev} aria-label="Önceki" className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-navy-900 hover:text-navy-900 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all duration-200 ${i === selected ? "w-6 h-2 bg-gold-500" : "w-2 h-2 bg-slate-200 hover:bg-slate-300"}`}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Sonraki" className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-navy-900 hover:text-navy-900 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
