import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Tomas Dış Ticaret",
  description: "Tomas Dış Ticaret gizlilik politikası ve çerez kullanımı hakkında bilgiler.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Gizlilik Politikası", url: "/gizlilik-politikasi" },
      ]} />

      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Gizlilik" }]}
      />

      <section style={{ backgroundColor: "#f5f0e8", padding: "80px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "48px" }}>
            <div className="prose">
              <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 20, color: "#1a1a1a", borderBottom: "2px solid #1a1a1a", paddingBottom: 8, marginBottom: 16 }}>
                Genel Bilgi
              </h2>
              <p style={{ fontSize: 14, color: "rgba(26,26,26,0.7)", lineHeight: 1.85, marginBottom: 24 }}>
                Bu Gizlilik Politikası, Tomas Dış Ticaret web sitesini ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını açıklamaktadır. Sitemizi kullanmaya devam ederek bu politikayı kabul etmiş sayılırsınız.
              </p>

              <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 20, color: "#1a1a1a", borderBottom: "2px solid #1a1a1a", paddingBottom: 8, marginBottom: 16 }}>
                Toplanan Bilgiler
              </h2>
              <p style={{ fontSize: 14, color: "rgba(26,26,26,0.7)", lineHeight: 1.85, marginBottom: 24 }}>
                İletişim formları aracılığıyla gönüllü olarak paylaştığınız ad, e-posta, telefon gibi bilgiler ile site kullanım istatistikleri (anonim) toplanmaktadır.
              </p>

              <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 20, color: "#1a1a1a", borderBottom: "2px solid #1a1a1a", paddingBottom: 8, marginBottom: 16 }}>
                Çerezler (Cookies)
              </h2>
              <p style={{ fontSize: 14, color: "rgba(26,26,26,0.7)", lineHeight: 1.85, marginBottom: 24 }}>
                Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu durumda bazı özellikler çalışmayabilir.
              </p>

              <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 20, color: "#1a1a1a", borderBottom: "2px solid #1a1a1a", paddingBottom: 8, marginBottom: 16 }}>
                Üçüncü Taraf Paylaşımı
              </h2>
              <p style={{ fontSize: 14, color: "rgba(26,26,26,0.7)", lineHeight: 1.85, marginBottom: 24 }}>
                Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır.
              </p>

              <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 20, color: "#1a1a1a", borderBottom: "2px solid #1a1a1a", paddingBottom: 8, marginBottom: 16 }}>
                İletişim
              </h2>
              <p style={{ fontSize: 14, color: "rgba(26,26,26,0.7)", lineHeight: 1.85, marginBottom: 0 }}>
                Gizlilik politikamız hakkında sorularınız için{" "}
                <a href="mailto:info@tomas.com.tr" style={{ color: "#1a1a1a", fontWeight: 700 }}>info@tomas.com.tr</a>{" "}
                adresine ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
