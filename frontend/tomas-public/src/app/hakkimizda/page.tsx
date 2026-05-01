import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, Layers, ClipboardCheck, Handshake, Target } from "lucide-react";
import { getPageBySlug } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";

export const revalidate = 300;
export const metadata: Metadata = {
  title: "Hakkımızda | Tomas Dış Ticaret",
  description: "Tomas Dış Ticaret; ithalat, ihracat, global tedarik ve endüstriyel ürünler alanında B2B çözüm ortaklığı sunan kurumsal bir dış ticaret şirketidir. Yaklaşımımız, değerlerimiz ve çalışma modelimiz.",
  openGraph: {
    title: "Hakkımızda | Tomas Dış Ticaret",
    description: "B2B dış ticaret ve tedarik süreçlerinde güvenilir çözüm ortağı. Misyon, vizyon ve değerlerimiz.",
    type: "website",
  },
};

const VALUES = [
  { icon: ShieldCheck,    title: "Güvenilirlik",              desc: "İş süreçlerinde şeffaflık ve tutarlılığı esas alan bir yapıyla çalışıyoruz." },
  { icon: Globe2,         title: "Global Bakış Açısı",        desc: "Farklı pazarlardaki tedarikçi ve alıcı dinamiklerini yakından takip ediyoruz." },
  { icon: Layers,         title: "Çok Sektörlü Yaklaşım",    desc: "Birden fazla sektörde deneyimle geniş yelpazede çözüm üretiyoruz." },
  { icon: ClipboardCheck, title: "Süreç Disiplini",           desc: "Her adımın planlandığı ve izlendiği sistematik bir operasyon anlayışı." },
  { icon: Handshake,      title: "Sürdürülebilir İş Birliği", desc: "Uzun vadeli ve güvene dayalı iş ortaklıkları kuruyoruz." },
  { icon: Target,         title: "Kalite Odaklılık",          desc: "Ürün ve süreçte kalite standartlarından ödün vermiyoruz." },
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
      />

      {/* Kurumsal Tanıtım */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

            {/* Left — content */}
            <AnimateOnScroll className="lg:col-span-3">
              <div className="prose prose-slate max-w-none prose-headings:font-jakarta prose-headings:text-navy-900 prose-a:text-gold-600">
                {page?.content ? (
                  <div dangerouslySetInnerHTML={{ __html: page.content }} />
                ) : (
                  <>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                      Tomas Dış Ticaret; farklı sektörlerdeki ürün ve çözüm ihtiyaçlarını dış ticaret, tedarik ve operasyon süreçleriyle bir araya getiren bir B2B çözüm ortağıdır. İşletmelerin ithalat, ihracat, ürün araştırması, tedarikçi değerlendirme ve teslimat süreçlerinde daha planlı, izlenebilir ve güvenilir bir yapı kurmasına destek olur.
                    </p>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                      İstanbul merkezli olarak faaliyet gösteren Tomas Dış Ticaret; ambalaj, polimer, tarım ve gıda, makine, mühendislik, yazılım ve e-ticaret gibi geniş bir yelpazede hizmet sunmaktadır. Müşterilerinin operasyonel yükünü azaltmak ve ticari süreçlerini daha güvenilir hale getirmek temel önceliğidir.
                    </p>
                    <h2>Misyonumuz</h2>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                      İşletmelerin uluslararası ticaret ve tedarik süreçlerinde güvenilir, planlı ve izlenebilir bir yapı kurmasına köprü olmak. Her ticari süreçte müşterilerimizin yanında yer alarak operasyonel risklerini azaltmak ve iş birliği potansiyellerini güçlendirmek.
                    </p>
                    <h2>Vizyonumuz</h2>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                      Çok sektörlü dış ticaret ve tedarik çözümlerinde önde gelen, müşterileri tarafından güvenilir iş ortağı olarak tercih edilen bir B2B hizmet şirketi olmak. Sürdürülebilir iş birliği modelleriyle uzun vadeli değer yaratmaya odaklanmak.
                    </p>
                    <h2>Çalışma Yaklaşımımız</h2>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                      Her müşteri ilişkisini bir ortaklık olarak ele alıyoruz. Süreç başında ihtiyaçları net biçimde tanımlıyor, operasyonu şeffaf yönetiyor ve düzenli raporlamayla müşterilerimizi bilgilendiriyoruz. Kısa vadeli maliyet avantajı yerine uzun vadeli güvenilirliği önceliyoruz.
                    </p>
                  </>
                )}
              </div>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-jakarta font-bold rounded-full shadow-md shadow-gold-400/25 hover:shadow-gold-400/40 transition-all duration-200 text-sm group"
              >
                Bizimle İletişime Geçin
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimateOnScroll>

            {/* Right — values */}
            <AnimateOnScroll className="lg:col-span-2" delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {VALUES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-jakarta font-semibold text-navy-900 text-sm mb-1">{title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-slate-50 border-t border-slate-100 py-20">
        <div className="container max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="font-jakarta font-bold text-navy-900 text-2xl mb-4">Neden Tomas ile Çalışmalısınız?</h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
              Dış ticaret ve tedarik süreçleri; birden fazla tarafın koordinasyonunu, mevzuat bilgisini ve operasyonel disiplini gerektiren karmaşık yapılardır. Tomas, bu yapının tüm aktörlerini sizin adınıza koordine ederek sürecin yükünü hafifletir.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Tedarikçi araştırmasından numune teminiye, sözleşme koşullarından lojistik takibine kadar her aşamada şeffaf ve sistematik bir yönetim anlayışı sunuyoruz. Bu sayede siz asıl işinize odaklanırken operasyonel riskleri minimize ediyoruz.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
