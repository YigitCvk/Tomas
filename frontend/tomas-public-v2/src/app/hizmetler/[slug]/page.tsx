import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/api";
import { FALLBACK_SERVICES } from "@/lib/fallback-data";
import { ArrowRight, Mail, Phone, Globe2, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart, Box } from "lucide-react";
import { ServiceJsonLd, BreadcrumbListJsonLd } from "@/components/JsonLd";

export const revalidate = 300;

function getIcon(slug: string): React.ElementType {
  if (slug.includes("uluslararasi")) return Globe2;
  if (slug.includes("ambalaj")) return Package;
  if (slug.includes("polimer")) return Factory;
  if (slug.includes("tarim")) return Leaf;
  if (slug.includes("yazilim") || slug.includes("dijital")) return Cpu;
  if (slug.includes("makine")) return Wrench;
  if (slug.includes("muhendislik")) return Microscope;
  if (slug.includes("reklam")) return Megaphone;
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

  const related = allServices.filter((s) => s.id !== service.id).slice(0, 8);
  const Icon = getIcon(slug);

  return (
    <>
      <ServiceJsonLd name={service.title} description={service.shortDescription} url={`/hizmetler/${slug}`} />
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Hizmetler", url: "/hizmetler" },
        { name: service.title, url: `/hizmetler/${slug}` },
      ]} />

      {/* Hero */}
      <div style={{ backgroundColor: "#1a1a1a", borderBottom: "3px solid #ffcc00", padding: "56px 0 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Link href="/hizmetler" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Hizmetler</Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{service.title}</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
            <div style={{ width: 56, height: 56, backgroundColor: "#ffcc00", border: "2px solid #ffcc00", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon size={24} color="#1a1a1a" />
            </div>
            <div>
              <h1 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, color: "#fff", fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 12 }}>
                {service.title}
              </h1>
              {service.shortDescription && (
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 600, lineHeight: 1.65 }}>
                  {service.shortDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "#f5f0e8", padding: "64px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 24, alignItems: "start" }}>

            {/* Main */}
            <main style={{ gridColumn: "span 2" }}>
              <div style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "40px 40px" }}>
                {service.content ? (
                  <div className="prose" dangerouslySetInnerHTML={{ __html: service.content }} />
                ) : (
                  <p style={{ color: "rgba(26,26,26,0.6)", lineHeight: 1.75 }}>
                    Bu hizmet hakkında detaylı bilgi için lütfen iletişime geçiniz.
                  </p>
                )}
              </div>

              {/* CTA card */}
              <div style={{ marginTop: 16, backgroundColor: "#1a1a1a", border: "2px solid #1a1a1a", padding: "40px" }}>
                <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, color: "#fff", fontSize: 20, marginBottom: 12 }}>
                  Bu hizmet için teklif alın
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                  Tedarik ve dış ticaret süreçlerinizi birlikte planlayalım.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <Link
                    href="/iletisim"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#ffcc00", color: "#1a1a1a", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "12px 24px", border: "2px solid #ffcc00", boxShadow: "4px 4px 0 #ffcc00", textDecoration: "none" }}
                  >
                    Teklif Al <ArrowRight size={13} />
                  </Link>
                  <a
                    href="mailto:info@tomas.com.tr"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "transparent", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "12px 24px", border: "2px solid rgba(255,255,255,0.15)", textDecoration: "none" }}
                  >
                    <Mail size={13} /> E-posta Gönder
                  </a>
                </div>
                <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexWrap: "wrap", gap: 20 }}>
                  <a href="tel:+902123025935" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none" }}>
                    <Phone size={13} /> 0 (212) 302 59 35
                  </a>
                  <a href="mailto:info@tomas.com.tr" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none" }}>
                    <Mail size={13} /> info@tomas.com.tr
                  </a>
                </div>
              </div>
            </main>

            {/* Sidebar */}
            {related.length > 0 && (
              <aside>
                <div style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "24px", position: "sticky", top: 80 }}>
                  <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", color: "#1a1a1a", marginBottom: 16, textTransform: "uppercase" as const }}>
                    Diğer Hizmetler
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {related.map((s) => {
                      const SIcon = getIcon(s.slug);
                      return (
                        <Link
                          key={s.id}
                          href={`/hizmetler/${s.slug}`}
                          style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", backgroundColor: "#f5f0e8", border: "1px solid rgba(26,26,26,0.1)", textDecoration: "none" }}
                        >
                          <SIcon size={14} color="#1a1a1a" />
                          <span style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 500, flex: 1 }}>{s.title}</span>
                          <ArrowRight size={11} color="rgba(26,26,26,0.35)" />
                        </Link>
                      );
                    })}
                  </div>
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: "2px solid #1a1a1a" }}>
                    <Link
                      href="/iletisim"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "12px", backgroundColor: "#1a1a1a", color: "#ffcc00", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" as const, textDecoration: "none" }}
                    >
                      <Mail size={13} /> Teklif Al
                    </Link>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
