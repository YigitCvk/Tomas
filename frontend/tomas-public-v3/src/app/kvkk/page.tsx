import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Tomas Dış Ticaret",
  description: "Tomas Dış Ticaret kişisel verilerin korunması kanunu (KVKK) kapsamında aydınlatma metni.",
  robots: { index: false, follow: false },
};

export default function KvkkPage() {
  return (
    <>
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "KVKK", url: "/kvkk" },
      ]} />

      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "KVKK" }]}
      />

      <section style={{ backgroundColor: "#F9FAFB", padding: "80px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "48px", border: "1px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <div className="prose">
              <h2>1. Veri Sorumlusu</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Tomas Dış Ticaret tarafından aşağıda açıklanan kapsamda işlenmektedir.
              </p>

              <h2>2. İşlenen Kişisel Veriler</h2>
              <p>
                Ad-soyad, e-posta adresi, telefon numarası, şirket bilgisi ve mesaj içeriği gibi iletişim formları aracılığıyla ilettiğiniz bilgiler işlenmektedir.
              </p>

              <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p>
                Kişisel verileriniz; iletişim taleplerinizin yanıtlanması, ticari tekliflerin hazırlanması, hizmetlerimizin sunulması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
              </p>

              <h2>4. Kişisel Verilerin Aktarılması</h2>
              <p>
                Kişisel verileriniz, yasal zorunluluklar ve hizmet gereklilikleri dışında üçüncü kişilerle paylaşılmamaktadır.
              </p>

              <h2>5. Haklarınız</h2>
              <p>
                KVKK&apos;nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenen verilere ilişkin bilgi talep etme, işleme amacını öğrenme, düzeltme veya silme talep etme haklarına sahipsiniz. Bu haklarınızı kullanmak için{" "}
                <a href="mailto:info@tomas.com.tr">info@tomas.com.tr</a>{" "}
                adresine yazabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
