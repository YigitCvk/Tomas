import type { Metadata } from "next";
import { getFaqs } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { FAQPageJsonLd, BreadcrumbListJsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "./FaqAccordion";

export const revalidate = 600;
export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Tomas Dış Ticaret",
  description: "Uluslararası ticaret, teslimat süreleri, ödeme koşulları ve hizmetlerimiz hakkında en çok sorulan sorular.",
};

const FALLBACK_FAQS = [
  { question: "Hangi ülkelerle ticaret yapıyorsunuz?", answer: "Avrupa, Orta Doğu, Asya ve Afrika başta olmak üzere 50'den fazla ülkeyle aktif ticaret ilişkilerimiz mevcuttur." },
  { question: "Minimum sipariş miktarı nedir?", answer: "Ürün kategorisine göre değişmekle birlikte, müşteri odaklı yaklaşımımızla küçük ve büyük hacimli siparişlere hizmet vermekteyiz." },
  { question: "Teslimat süreleri ne kadardır?", answer: "Ürün ve destinasyona bağlı olarak 7-30 iş günü arasında değişmektedir. Detaylı bilgi için iletişime geçiniz." },
  { question: "Ödeme koşulları nelerdir?", answer: "Akreditif, havale, CAD ve müzakereye açık diğer ödeme seçenekleri sunulmaktadır." },
  { question: "Kalite belgeleriniz var mı?", answer: "Evet, ürün ve hizmetlerimiz uluslararası kalite standartlarına uygun olup gerekli sertifikalara sahibiz." },
  { question: "İthalat sürecinde destek veriyor musunuz?", answer: "Gümrük işlemleri, belgelendirme ve lojistik konularında uçtan uca destek sağlamaktayız." },
];

export default async function FaqPage() {
  const apiFaqs = await getFaqs("tr");
  const faqs = apiFaqs.length > 0
    ? apiFaqs.map((f) => ({ question: f.question, answer: f.answer }))
    : FALLBACK_FAQS;

  return (
    <>
      <FAQPageJsonLd faqs={faqs} />
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "Sıkça Sorulan Sorular", url: "/sss" },
      ]} />

      <PageHero
        eyebrow="Yardım"
        title="Sıkça Sorulan Sorular"
        subtitle="En çok merak edilen sorular ve yanıtları"
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "SSS" }]}
      />

      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
