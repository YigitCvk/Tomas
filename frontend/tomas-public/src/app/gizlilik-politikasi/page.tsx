import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Tomas Dış Ticaret",
  description: "tomas.com.tr web sitesinde kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklayan gizlilik politikamız.",
  robots: { index: false },
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
        subtitle="Kişisel verilerinize gösterdiğimiz özenin detayları"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate max-w-none prose-headings:font-jakarta prose-headings:text-navy-900 prose-headings:font-bold prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-900">

              <p className="text-slate-500 leading-relaxed">
                Bu gizlilik politikası, <strong>tomas.com.tr</strong> web sitesini kullanırken
                kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                Site üzerinden herhangi bir işlem yaparak bu politikayı kabul etmiş sayılırsınız.
              </p>

              <h2>1. Hangi Verileri Topluyoruz?</h2>
              <p className="text-slate-500 leading-relaxed">
                Web sitemizi ziyaret ettiğinizde veya iletişim formunu doldurduğunuzda aşağıdaki
                veriler toplanabilir:
              </p>
              <ul className="text-slate-500">
                <li>Ad-soyad, şirket adı, e-posta, telefon (iletişim formundan)</li>
                <li>IP adresi ve tarayıcı bilgileri (sunucu logları aracılığıyla)</li>
                <li>Sayfa ziyaret istatistikleri (Google Analytics aracılığıyla — anonim)</li>
                <li>Çerez verileri (aşağıda açıklanmıştır)</li>
              </ul>

              <h2>2. Çerezler (Cookies)</h2>
              <p className="text-slate-500 leading-relaxed">
                Sitemiz iki tür çerez kullanmaktadır:
              </p>
              <ul className="text-slate-500">
                <li>
                  <strong>Zorunlu çerezler:</strong> Oturum yönetimi ve site güvenliği için
                  gereklidir; devre dışı bırakılamaz.
                </li>
                <li>
                  <strong>Analitik çerezler:</strong> Google Analytics aracılığıyla ziyaretçi
                  istatistikleri ölçülür. Bu çerezler için onayınız alınmaktadır.
                  Tarayıcı ayarlarınızdan veya{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                    Google Analytics Devre Dışı Bırakma Eklentisi
                  </a>{" "}
                  aracılığıyla takibi sonlandırabilirsiniz.
                </li>
              </ul>

              <h2>3. Verileri Nasıl Kullanıyoruz?</h2>
              <ul className="text-slate-500">
                <li>Sizinle iletişim kurmak ve form başvurularınızı yanıtlamak</li>
                <li>Hizmetlerimizi geliştirmek için anonim istatistikler üretmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                <li>Site güvenliğini sağlamak</li>
              </ul>

              <h2>4. Veri Güvenliği</h2>
              <p className="text-slate-500 leading-relaxed">
                Kişisel verileriniz <strong>HTTPS protokolü</strong> ile şifrelenerek iletilmekte
                ve güvenli sunucularda saklanmaktadır. Verilerinize yalnızca yetkilendirilmiş
                personelin erişimi mevcuttur. Olası bir ihlal durumunda yasal süreler içinde
                bilgilendirme yapılacaktır.
              </p>

              <h2>5. Üçüncü Taraflarla Paylaşım</h2>
              <p className="text-slate-500 leading-relaxed">
                Kişisel verileriniz aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:
              </p>
              <ul className="text-slate-500">
                <li>Yasal bir zorunluluk bulunması halinde yetkili makamlarla</li>
                <li>Açık rızanızın bulunması halinde iş ortaklarımızla</li>
                <li>Hizmet sunumunu gerektiren teknik altyapı sağlayıcılarıyla (veri işleyen sıfatıyla)</li>
              </ul>

              <h2>6. Yurt Dışı Aktarım</h2>
              <p className="text-slate-500 leading-relaxed">
                Google Analytics gibi hizmetler ABD merkezli sunucularda çalışmaktadır.
                Bu aktarımlar, AB-ABD Veri Gizliliği Çerçevesi kapsamında gerçekleşmekte olup
                KVKK&apos;nın 9. maddesi uyarınca gereken korumalar sağlanmaktadır.
              </p>

              <h2>7. Veri Saklama</h2>
              <p className="text-slate-500 leading-relaxed">
                İletişim formundan gelen veriler <strong>3 yıl</strong> süreyle saklanmaktadır.
                Analitik veriler Google tarafından 14 ay sonra silinmektedir.
                Talebiniz halinde verileriniz daha erken silinebilir.
              </p>

              <h2>8. Haklarınız</h2>
              <p className="text-slate-500 leading-relaxed">
                KVKK ve AB GDPR kapsamındaki haklarınız için{" "}
                <Link href="/kvkk">KVKK Aydınlatma Metnimize</Link> bakınız.
                Başvurularınız için:{" "}
                <Link href="mailto:info@tomas.com.tr">info@tomas.com.tr</Link>
              </p>

              <h2>9. Politika Güncellemeleri</h2>
              <p className="text-slate-500 leading-relaxed">
                Bu gizlilik politikası gerektiğinde güncellenebilir. Önemli değişiklikler
                web sitemizde duyurulacaktır. Son güncelleme: <strong>Ocak 2025</strong>
              </p>

            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
              <Link
                href="/kvkk"
                className="text-sm text-gold-600 font-semibold hover:text-gold-700 transition-colors"
              >
                → KVKK Aydınlatma Metnini İnceleyin
              </Link>
              <Link
                href="/"
                className="text-sm text-slate-400 hover:text-navy-900 transition-colors"
              >
                ← Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
