import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/api";
import { ArrowRight, Globe2, Package, Factory, Leaf, Cpu, Wrench, Microscope, Megaphone, ShoppingCart, Box } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
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
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Hizmetler" }]}
      />

      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          {services.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ color: "#6B7280", fontSize: 15 }}>Hizmet bilgileri yüklenemiyor. Lütfen daha sonra tekrar deneyin.</p>
              <Link href="/iletisim" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 14, padding: "11px 24px", borderRadius: 9999, textDecoration: "none" }}>
                Bize Doğrudan Ulaşın <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
              {services.map((svc, i) => {
                const Icon = getIcon(svc.slug);
                return (
                  <Link key={svc.id} href={`/hizmetler/${svc.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <div
                      style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 14, border: "1px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ width: 48, height: 48, backgroundColor: "#EBF1FF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={22} color="#0B5CFF" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: 28, color: "#1A1F36", opacity: 0.07 }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1A1F36", margin: 0, lineHeight: 1.3 }}>
                        {svc.title}
                      </h2>
                      {svc.shortDescription && (
                        <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7, margin: 0, flex: 1 }}>
                          {svc.shortDescription}
                        </p>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#0B5CFF", marginTop: 4 }}>
                        Detayları İncele <ArrowRight size={13} />
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
