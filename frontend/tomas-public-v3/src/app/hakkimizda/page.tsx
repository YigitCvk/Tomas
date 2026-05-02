import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, Layers, ClipboardCheck, Handshake, Target } from "lucide-react";
import { getPageBySlug } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const revalidate = 300;
export const metadata: Metadata = {
  title: "Hakkımızda | Tomas Dış Ticaret",
  description: "Tomas Dış Ticaret; ithalat, ihracat, global tedarik ve endüstriyel ürünler alanında B2B çözüm ortaklığı sunan kurumsal bir dış ticaret şirketidir.",
};

const VALUES = [
  { icon: ShieldCheck,    title: "Güvenilirlik",              desc: "İş süreçlerinde şeffaflık ve tutarlılığı esas alan yapı." },
  { icon: Globe2,         title: "Global Bakış Açısı",        desc: "Farklı pazarlardaki tedarikçi dinamiklerini yakından takip." },
  { icon: Layers,         title: "Çok Sektörlü Yaklaşım",    desc: "9 farklı alanda geniş yelpazede çözüm üretme." },
  { icon: ClipboardCheck, title: "Süreç Disiplini",           desc: "Her adımın planlandığı sistematik operasyon anlayışı." },
  { icon: Handshake,      title: "Sürdürülebilir İş Birliği", desc: "Uzun vadeli ve güvene dayalı iş ortaklıkları." },
  { icon: Target,         title: "Kalite Odaklılık",          desc: "Ürün ve süreçte kalite standartlarından ödün vermeme." },
];

export default async function AboutPage() {
  const page = await getPageBySlug("hakkimizda", "tr");

  return (
    <>
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Hakkımızda", url: "/hakkimizda" },
      ]} />

      <PageHero
        eyebrow="Biz Kimiz"
        title="Hakkımızda"
        subtitle="B2B dış ticaret ve tedarik süreçlerinde güvenilir çözüm ortağınız"
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Hakkımızda" }]}
      />

      {/* Main content */}
      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5" style={{ gap: 64, alignItems: "start" }}>

            {/* Left: text */}
            <div style={{ gridColumn: "span 3" }}>
              <div className="prose">
                {page?.content ? (
                  <div dangerouslySetInnerHTML={{ __html: page.content }} />
                ) : (
                  <>
                    <p>
                      Tomas Dış Ticaret; farklı sektörlerdeki ürün ve çözüm ihtiyaçlarını dış ticaret, tedarik ve operasyon süreçleriyle bir araya getiren bir B2B çözüm ortağıdır.
                    </p>
                    <p>
                      İstanbul merkezli olarak faaliyet gösteren Tomas Dış Ticaret; ambalaj, polimer, tarım ve gıda, makine, mühendislik, yazılım ve e-ticaret gibi geniş bir yelpazede hizmet sunmaktadır.
                    </p>
                    <h2>Misyonumuz</h2>
                    <p>
                      İşletmelerin uluslararası ticaret ve tedarik süreçlerinde güvenilir, planlı ve izlenebilir bir yapı kurmasına köprü olmak.
                    </p>
                    <h2>Vizyonumuz</h2>
                    <p>
                      Çok sektörlü dış ticaret ve tedarik çözümlerinde müşterileri tarafından güvenilir iş ortağı olarak tercih edilen bir B2B hizmet şirketi olmak.
                    </p>
                    <h2>Çalışma Yaklaşımımız</h2>
                    <p>
                      Her müşteri ilişkisini bir ortaklık olarak ele alıyoruz. Süreç başında ihtiyaçları net biçimde tanımlıyor, operasyonu şeffaf yönetiyor ve düzenli raporlamayla bilgilendiriyoruz.
                    </p>
                  </>
                )}
              </div>
              <Link
                href="/iletisim"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 32, backgroundColor: "#0B5CFF", color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 28px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 4px 16px rgba(11,92,255,0.3)" }}
              >
                Bizimle İletişime Geçin <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right: values */}
            <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 12 }}>
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 14, backgroundColor: "#F9FAFB", borderRadius: 12, padding: "16px 20px", border: "1px solid #E4E7EF" }}>
                  <div style={{ width: 36, height: 36, backgroundColor: "#EBF1FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="#0B5CFF" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1F36", marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section style={{ background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", padding: "64px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff", marginBottom: 20, lineHeight: 1.15 }}>
            Neden Tomas ile Çalışmalısınız?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 16 }}>
            Dış ticaret ve tedarik süreçleri; birden fazla tarafın koordinasyonunu, mevzuat bilgisini ve operasyonel disiplini gerektiren karmaşık yapılardır.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.8 }}>
            Tomas, bu yapının tüm aktörlerini sizin adınıza koordine ederek sürecin yükünü hafifletir.
          </p>
        </div>
      </section>
    </>
  );
}
