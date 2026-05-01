import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/api";
import { ArrowRight, Globe2, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart, Box } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { DottedGrid } from "@/components/ui/Decorations";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const revalidate = 300;
export const metadata: Metadata = {
  title: "Hizmetlerimiz | Tomas Dış Ticaret",
  description: "Uluslararası ticaret, ambalaj, polimer, tarım, makine, mühendislik, yazılım ve e-ticaret alanlarında kapsamlı B2B çözümler.",
  openGraph: {
    title: "Hizmetlerimiz | Tomas Dış Ticaret",
    description: "B2B dış ticaret ve tedarik süreçlerinde uçtan uca çözüm ortaklığı. 9 farklı hizmet alanında süreç desteği.",
    type: "website",
  },
};

function getIcon(slug: string): React.ElementType {
  if (slug.includes("uluslararasi") || slug.includes("ticaret") || slug.includes("ihracat")) return Globe2;
  if (slug.includes("ambalaj")) return Package;
  if (slug.includes("polimer") || slug.includes("plastik")) return Factory;
  if (slug.includes("tarim") || slug.includes("gida")) return Leaf;
  if (slug.includes("yazilim") || slug.includes("dijital")) return Cpu;
  if (slug.includes("makine")) return Wrench;
  if (slug.includes("muhendislik") || slug.includes("arastirma")) return Microscope;
  if (slug.includes("reklam") || slug.includes("kimlik")) return Megaphone;
  if (slug.includes("ticaret") && slug.includes("e-")) return ShoppingCart;
  if (slug === "e-ticaret") return ShoppingCart;
  return Box;
}

export default async function ServicesPage() {
  const services = await getServices("tr");

  return (
    <>
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Hizmetler", url: "/hizmetler" },
      ]} />

      <PageHero
        eyebrow="Ne Yapıyoruz"
        title="Hizmetlerimiz"
        subtitle="B2B dış ticaret ve tedarik süreçlerinde uçtan uca çözüm ortaklığı"
      />

      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="container">
          {services.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center mx-auto mb-4">
                <Box className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-400 text-base">Hizmet bilgileri yüklenemiyor. Lütfen daha sonra tekrar deneyin.</p>
              <Link href="/iletisim" className="mt-6 inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                Bize Doğrudan Ulaşın <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => {
                const Icon = getIcon(svc.slug);
                return (
                  <Link key={svc.id} href={`/hizmetler/${svc.slug}`} className="group block h-full">
                    <div className="relative bg-white rounded-3xl p-7 border border-slate-100 h-full flex flex-col transition-all duration-[400ms] ease-in-out group-hover:bg-navy-900 group-hover:border-navy-800 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="absolute top-5 right-5 text-slate-200 group-hover:text-white/10 transition-colors duration-[400ms]">
                        <DottedGrid rows={3} cols={3} gap={10} dotSize={2.5} />
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-gold-400 flex items-center justify-center mb-6 -rotate-3 transition-all duration-[400ms] shrink-0">
                        <Icon className="w-6 h-6 text-navy-900 transition-colors duration-[400ms]" />
                      </div>

                      <h2 className="font-jakarta font-bold text-navy-900 group-hover:text-white text-[16px] leading-snug mb-3 transition-colors duration-[400ms]">
                        {svc.title}
                      </h2>
                      {svc.shortDescription && (
                        <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed mb-6 flex-1 transition-colors duration-[400ms]">
                          {svc.shortDescription}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:text-gold-400 transition-colors duration-[400ms] mt-auto">
                        Detayları İncele
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
