import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/api";
import { FALLBACK_SERVICES } from "@/lib/fallback-data";
import { ArrowRight, Mail, MessageCircle, Phone, Globe2, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart, Box, ChevronRight } from "lucide-react";
import { DottedPattern } from "@/components/ui/Decorations";
import { ServiceJsonLd, BreadcrumbListJsonLd } from "@/components/JsonLd";

export const revalidate = 300;

function getIcon(slug: string): React.ElementType {
  if (slug.includes("uluslararasi") || (slug.includes("ticaret") && slug.includes("ihracat"))) return Globe2;
  if (slug.includes("ambalaj")) return Package;
  if (slug.includes("polimer") || slug.includes("plastik")) return Factory;
  if (slug.includes("tarim") || slug.includes("gida")) return Leaf;
  if (slug.includes("yazilim") || slug.includes("dijital")) return Cpu;
  if (slug.includes("makine")) return Wrench;
  if (slug.includes("muhendislik") || slug.includes("arastirma")) return Microscope;
  if (slug.includes("reklam") || slug.includes("kimlik")) return Megaphone;
  if (slug === "e-ticaret") return ShoppingCart;
  return Box;
}

export async function generateStaticParams() {
  return FALLBACK_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug, "tr");
  if (!service) return {};
  const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tomas.com.tr";
  return {
    title: service.metaTitle || `${service.title} | Tomas Dış Ticaret`,
    description: service.metaDescription || service.shortDescription,
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription || service.shortDescription,
      images: service.ogImagePath ? [service.ogImagePath] : undefined,
      type: "website",
    },
    alternates: { canonical: `${SITE}/hizmetler/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug, "tr"),
    getServices("tr"),
  ]);

  if (!service) notFound();

  const related = allServices.filter((s) => s.id !== service.id).slice(0, 6);
  const Icon = getIcon(slug);
  const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tomas.com.tr";

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.shortDescription}
        url={`/hizmetler/${slug}`}
      />
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Hizmetler", url: "/hizmetler" },
        { name: service.title, url: `/hizmetler/${slug}` },
      ]} />

      {/* Hero */}
      <div className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
        <DottedPattern className="absolute inset-0 text-white opacity-[0.04]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link href="/hizmetler" className="hover:text-gold-400 transition-colors">Hizmetler</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/75">{service.title}</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gold-400/15 border border-gold-400/25 flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8 text-gold-400" />
            </div>
            <div>
              <h1
                className="font-jakarta font-bold text-white mb-3 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
              >
                {service.title}
              </h1>
              {service.shortDescription && (
                <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                  {service.shortDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-slate-50 py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Main content */}
            <main className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-100 p-8 lg:p-10">
                {service.content ? (
                  <div
                    className="prose prose-slate max-w-none prose-headings:font-jakarta prose-headings:text-navy-900 prose-h3:text-base prose-h3:font-semibold prose-li:text-slate-500 prose-p:text-slate-500 prose-ol:text-slate-500"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                  />
                ) : (
                  <p className="text-slate-500 leading-relaxed">
                    Bu hizmet hakkında detaylı bilgi için lütfen iletişime geçiniz.
                  </p>
                )}
              </div>

              {/* CTA card */}
              <div className="mt-6 bg-navy-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <DottedPattern className="absolute inset-0 text-white opacity-[0.04]" />
                <div className="relative z-10">
                  <h3 className="font-jakarta font-bold text-white text-xl mb-3">
                    Bu hizmet için teklif alın
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                    Tedarik ve dış ticaret süreçlerinizi birlikte planlayalım. Uzman ekibimiz ihtiyaçlarınızı değerlendirip size dönecektir.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-jakarta font-bold rounded-full shadow-md shadow-gold-400/20 hover:shadow-gold-400/30 transition-all duration-200 group"
                    >
                      Teklif Al
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="https://wa.me/905324201299"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-gold-400/50 text-white font-semibold rounded-full transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm text-white/60">
                    <a href="tel:+902123025935" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      0 (212) 302 59 35
                    </a>
                    <a href="mailto:info@tomas.com.tr" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                      info@tomas.com.tr
                    </a>
                  </div>
                </div>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
              {related.length > 0 && (
                <div className="bg-white rounded-3xl border border-slate-100 p-6 sticky top-[88px]">
                  <h3 className="font-jakarta font-semibold text-navy-900 text-xs uppercase tracking-widest mb-5">
                    Diğer Hizmetler
                  </h3>
                  <div className="flex flex-col gap-1">
                    {related.map((s) => {
                      const SIcon = getIcon(s.slug);
                      return (
                        <Link
                          key={s.id}
                          href={`/hizmetler/${s.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                            <SIcon className="w-4 h-4 text-gold-400" />
                          </div>
                          <span className="text-sm text-slate-600 group-hover:text-navy-900 transition-colors">
                            {s.title}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-gold-400 ml-auto transition-colors" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <Link
                      href="/iletisim"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold rounded-xl transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Teklif Al
                    </Link>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
