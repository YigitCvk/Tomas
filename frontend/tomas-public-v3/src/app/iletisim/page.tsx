import type { Metadata } from "next";
import { MapPin, Phone, Smartphone, Mail, Clock, MessageCircle } from "lucide-react";
import { getSiteSettings, getServices } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/JsonLd";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Tomas Dış Ticaret",
  description: "Teklif almak, iş birliği talebi oluşturmak veya tedarik süreçleriniz hakkında görüşmek için Tomas Dış Ticaret ile iletişime geçin.",
};

export default async function ContactPage() {
  const [settings, services] = await Promise.all([getSiteSettings(), getServices("tr")]);

  const contactItems = [
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
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
      />

      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* Contact cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 16, marginBottom: 24 }}>
            {contactItems.map(({ icon: Icon, title, value, href }) => (
              <div key={title} style={{ backgroundColor: "#F9FAFB", borderRadius: 16, padding: "24px 20px", textAlign: "center" as const, border: "1px solid #E4E7EF" }}>
                <div style={{ width: 44, height: 44, backgroundColor: "#EBF1FF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <Icon size={18} color="#0B5CFF" />
                </div>
                <div style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#6B7280", marginBottom: 8 }}>
                  {title}
                </div>
                {href ? (
                  <a href={href} style={{ fontSize: 13, color: "#1A1F36", fontWeight: 600, textDecoration: "none", wordBreak: "break-word" as const }}>
                    {value}
                  </a>
                ) : (
                  <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{value}</p>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          {settings.whatsApp && (
            <div style={{ backgroundColor: "#25D366", borderRadius: 16, padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 4 }}>
                  WhatsApp ile Hızlı İletişim
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>Anlık yanıt için WhatsApp üzerinden ulaşın.</div>
              </div>
              <a
                href={`https://wa.me/${settings.whatsApp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#25D366", fontWeight: 700, fontSize: 14, padding: "11px 24px", borderRadius: 9999, textDecoration: "none" }}
              >
                <MessageCircle size={15} /> WhatsApp&apos;tan Yaz
              </a>
            </div>
          )}

          {/* Form + right panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 24, alignItems: "start" }}>

            {/* Form */}
            <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "40px", border: "1px solid #E4E7EF", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <h2 style={{ fontWeight: 700, fontSize: 22, color: "#1A1F36", marginBottom: 6 }}>
                Bize Yazın
              </h2>
              <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 28 }}>
                Formu doldurarak en kısa sürede size dönelim.
              </p>
              <ContactForm services={services} />
            </div>

            {/* Right: address + hours */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Address */}
              <div style={{ background: "linear-gradient(135deg, #0B5CFF 0%, #003F9E 100%)", borderRadius: 16, padding: "48px 32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 200, textAlign: "center" as const }}>
                <div style={{ width: 52, height: 52, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <MapPin size={24} color="#fff" />
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 320, margin: 0 }}>{settings.address}</p>
              </div>

              {/* Hours */}
              <div style={{ backgroundColor: "#F9FAFB", borderRadius: 16, padding: "28px 32px", border: "1px solid #E4E7EF" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, backgroundColor: "#EBF1FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Clock size={16} color="#0B5CFF" />
                  </div>
                  <h3 style={{ fontWeight: 600, fontSize: 13, color: "#1A1F36", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                    Çalışma Saatleri
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                    { day: "Cumartesi",        hours: "10:00 – 14:00" },
                    { day: "Pazar",            hours: "Kapalı" },
                  ].map(({ day, hours }) => (
                    <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E4E7EF", paddingBottom: 10 }}>
                      <span style={{ fontSize: 13, color: "#6B7280" }}>{day}</span>
                      <span style={{ fontWeight: 600, fontSize: 13, color: "#1A1F36" }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
