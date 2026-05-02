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

const ICON_COLORS = ["#0055ff", "#e63b2e", "#ffcc00", "#0055ff", "#e63b2e", "#ffcc00", "#0055ff", "#e63b2e", "#ffcc00"];

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

      <section style={{ backgroundColor: "#f5f0e8", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          {services.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ color: "rgba(26,26,26,0.45)", fontSize: 15 }}>Hizmet bilgileri yüklenemiyor. Lütfen daha sonra tekrar deneyin.</p>
              <Link href="/iletisim" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#1a1a1a", textDecoration: "none", borderBottom: "2px solid #1a1a1a", paddingBottom: 2 }}>
                Bize Doğrudan Ulaşın <ArrowRight size={12} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 3 }}>
              {services.map((svc, i) => {
                const Icon = getIcon(svc.slug);
                const color = ICON_COLORS[i % ICON_COLORS.length];
                return (
                  <Link key={svc.id} href={`/hizmetler/${svc.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <div style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ width: 44, height: 44, backgroundColor: color, border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={20} color={color === "#ffcc00" ? "#1a1a1a" : "#fff"} />
                        </div>
                        <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 32, color: "#1a1a1a", opacity: 0.06 }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 16, color: "#1a1a1a", margin: 0, lineHeight: 1.3 }}>
                        {svc.title}
                      </h2>
                      {svc.shortDescription && (
                        <p style={{ fontSize: 13, color: "rgba(26,26,26,0.6)", lineHeight: 1.7, margin: 0, flex: 1 }}>
                          {svc.shortDescription}
                        </p>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#1a1a1a", marginTop: 8 }}>
                        Detayları İncele <ArrowRight size={11} />
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
