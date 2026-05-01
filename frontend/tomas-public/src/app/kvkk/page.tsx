import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Tomas Dış Ticaret",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin nasıl işlendiğine dair aydınlatma metni.",
  robots: { index: false },
};

export default function KvkkPage() {
  return (
    <>
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "KVKK Aydınlatma Metni", url: "/kvkk" },
      ]} />

      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        subtitle="6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca hazırlanmıştır"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate max-w-none prose-headings:font-jakarta prose-headings:text-navy-900 prose-headings:font-bold prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-900">

              <p className="text-slate-500 leading-relaxed">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca,{" "}
                <strong>Tomas Dış Ticaret</strong> tarafından kişisel verileriniz aşağıda açıklanan
                amaçlar dahilinde toplanmakta, işlenmekte ve saklanmaktadır.
              </p>

              <h2>1. Veri Sorumlusu</h2>
              <p className="text-slate-500 leading-relaxed">
                <strong>Ticari Ünvan:</strong> Tomas Dış Ticaret<br />
                <strong>Adres:</strong> Libadiye Cad. No:82E Emaar Heights Blok K:23 D:2307 34700 Üsküdar / İstanbul<br />
                <strong>E-posta:</strong>{" "}
                <Link href="mailto:info@tomas.com.tr">info@tomas.com.tr</Link><br />
                <strong>Telefon:</strong> 0 (212) 302 59 35
              </p>

              <h2>2. İşlenen Kişisel Veriler</h2>
              <p className="text-slate-500 leading-relaxed">
                Web sitemiz üzerinden iletişim formu aracılığıyla toplanan kişisel veriler şunlardır:
              </p>
              <ul className="text-slate-500">
                <li>Ad ve soyad</li>
                <li>Şirket adı</li>
                <li>E-posta adresi</li>
                <li>Telefon numarası</li>
                <li>Ülke bilgisi</li>
                <li>Tarafınızca iletilen mesaj içeriği</li>
                <li>IP adresi (güvenlik amaçlı)</li>
              </ul>

              <h2>3. Kişisel Veri İşleme Amaçları</h2>
              <p className="text-slate-500 leading-relaxed">
                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="text-slate-500">
                <li>İletişim formundan gelen taleplerin değerlendirilmesi ve yanıtlanması</li>
                <li>Hizmet teklifleri ve bilgilendirme içeriklerinin iletilmesi</li>
                <li>Müşteri ilişkilerinin yönetimi ve takibi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>

              <h2>4. Hukuki Dayanak</h2>
              <p className="text-slate-500 leading-relaxed">
                Kişisel verileriniz; KVKK&apos;nın 5. maddesi kapsamında{" "}
                <strong>meşru menfaat (Madde 5/2-f)</strong> ve{" "}
                <strong>sözleşmenin ifası (Madde 5/2-c)</strong> hukuki sebeplerine dayanılarak işlenmektedir.
                Açık rızanızın alınmasının gerektiği hallerde ise rızanıza başvurulacaktır.
              </p>

              <h2>5. Kişisel Verilerin Aktarımı</h2>
              <p className="text-slate-500 leading-relaxed">
                Kişisel verileriniz; yasal zorunluluk bulunan durumlar haricinde veya açık rızanız olmaksızın
                üçüncü taraf kişi, kurum veya kuruluşlarla paylaşılmamaktadır.
                Teknik hizmet sağlayıcıları ile paylaşılması gerektiğinde, bu aktarımlar
                KVKK&apos;nın 8. ve 9. maddeleri çerçevesinde gerçekleştirilmektedir.
              </p>

              <h2>6. Saklama Süresi</h2>
              <p className="text-slate-500 leading-relaxed">
                Kişisel verileriniz, işleme amacının ortadan kalkmasıyla birlikte veya ilgili mevzuatın
                öngördüğü süre dolduğunda silinmekte, yok edilmekte ya da anonim hale getirilmektedir.
                İletişim formundan gelen veriler 3 yıl süreyle saklanmaktadır.
              </p>

              <h2>7. İlgili Kişi Hakları (KVKK Madde 11)</h2>
              <p className="text-slate-500 leading-relaxed">
                KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="text-slate-500">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>İşlenme amacını ve bu amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                <li>İşlemenin münhasıran otomatik sistemler aracılığıyla gerçekleştirilmesi halinde aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kanuna aykırı işleme nedeniyle zarar uğramanız halinde zararın giderilmesini talep etme</li>
              </ul>

              <h2>8. Başvuru Yöntemi</h2>
              <p className="text-slate-500 leading-relaxed">
                Yukarıda belirtilen haklarınızı kullanmak için{" "}
                <Link href="mailto:info@tomas.com.tr">info@tomas.com.tr</Link>{" "}
                adresine e-posta yoluyla veya şirket adresimize yazılı olarak başvurabilirsiniz.
                Talebiniz, niteliğine göre en geç <strong>30 gün</strong> içinde sonuçlandırılacaktır.
              </p>

              <h2>9. Çerez Politikası</h2>
              <p className="text-slate-500 leading-relaxed">
                Web sitemiz temel işlevsellik için zorunlu çerezler kullanmaktadır.
                Analitik çerezler için önceden onayınız alınmaktadır.
                Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.
              </p>

            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
              <Link
                href="/gizlilik-politikasi"
                className="text-sm text-gold-600 font-semibold hover:text-gold-700 transition-colors"
              >
                → Gizlilik Politikamızı İnceleyin
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
