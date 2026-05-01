import type { Metadata } from "next";
import { MapPin, Phone, Smartphone, Mail, Clock, MessageCircle } from "lucide-react";
import { getSiteSettings, getServices } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Tomas Dış Ticaret",
  description: "Teklif almak, iş birliği talebi oluşturmak veya tedarik süreçleriniz hakkında görüşmek için Tomas Dış Ticaret ile iletişime geçin.",
  openGraph: {
    title: "İletişim | Tomas Dış Ticaret",
    description: "Teklif, tedarik veya iş birliği talepleriniz için bizimle iletişime geçin.",
    type: "website",
  },
};

export default async function ContactPage() {
  const [settings, services] = await Promise.all([getSiteSettings(), getServices("tr")]);

  const contactCards = [
    { icon: MapPin,     title: "Adres",   value: settings.address, href: null },
    { icon: Phone,      title: "Telefon", value: settings.phone,   href: settings.phone ? `tel:${settings.phone.replace(/\s/g, "")}` : null },
    { icon: Smartphone, title: "GSM",     value: settings.gsm,     href: settings.gsm ? `tel:${settings.gsm.replace(/\s/g, "")}` : null },
    { icon: Mail,       title: "E-posta", value: settings.email,   href: settings.email ? `mailto:${settings.email}` : null },
  ].filter((c) => c.value);

  return (
    <>
      <BreadcrumbListJsonLd items={[
        { name: "Ana Sayfa", url: "/" },
        { name: "İletişim", url: "/iletisim" },
      ]} />

      <PageHero
        eyebrow="Bize Ulaşın"
        title="İletişim"
        subtitle="Teklif, tedarik veya iş birliği talepleriniz için bizimle iletişime geçin"
      />

      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="container">

          {/* Contact cards */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {contactCards.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-slate-100 text-center">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className="font-jakarta font-semibold text-navy-900 text-xs uppercase tracking-wide mb-1.5">{title}</div>
                  {href ? (
                    <a href={href} className="text-gold-600 hover:text-gold-700 text-sm font-medium transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-500 text-xs leading-relaxed">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* WhatsApp CTA */}
          {settings.whatsApp && (
            <AnimateOnScroll delay={0.05}>
              <div className="bg-[#25D366] rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4 mb-10">
                <div>
                  <div className="font-jakarta font-bold text-white text-lg">WhatsApp ile Hızlı İletişim</div>
                  <div className="text-white/85 text-sm mt-1">Anlık yanıt için WhatsApp üzerinden ulaşın.</div>
                </div>
                <a
                  href={`https://wa.me/${settings.whatsApp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#25D366] font-bold text-sm px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </AnimateOnScroll>
          )}

          {/* Main grid: form + info */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Form */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-3xl border border-slate-100 p-8">
                <h2 className="font-jakarta font-bold text-navy-900 text-xl mb-1.5">Bize Yazın</h2>
                <p className="text-slate-400 text-sm mb-6">Formu doldurarak en kısa sürede size dönelim.</p>
                <ContactForm services={services} />
              </div>
            </AnimateOnScroll>

            {/* Right: address + hours */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl h-64 flex items-center justify-center mb-5 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative z-10 text-center px-6">
                  <MapPin className="w-10 h-10 text-gold-400 mx-auto mb-3" />
                  <p className="text-white/75 text-sm leading-relaxed">{settings.address}</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-navy-900 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-gold-400" />
                  </div>
                  <h3 className="font-jakarta font-semibold text-navy-900 text-sm">Çalışma Saatleri</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                    { day: "Cumartesi", hours: "10:00 – 14:00" },
                    { day: "Pazar", hours: "Kapalı" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-slate-500">{day}</span>
                      <span className="font-semibold text-navy-900">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
