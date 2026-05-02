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

      <section style={{ backgroundColor: "#f5f0e8", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* İletişim kartları */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 3, marginBottom: 24 }}>
            {contactItems.map(({ icon: Icon, title, value, href }) => (
              <div key={title} style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "24px 20px", textAlign: "center" as const }}>
                <div style={{ width: 40, height: 40, backgroundColor: "#1a1a1a", border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <Icon size={18} color="#ffcc00" />
                </div>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#1a1a1a", marginBottom: 8 }}>
                  {title}
                </div>
                {href ? (
                  <a href={href} style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 600, textDecoration: "none", wordBreak: "break-word" as const }}>
                    {value}
                  </a>
                ) : (
                  <p style={{ fontSize: 12, color: "rgba(26,26,26,0.6)", lineHeight: 1.6, margin: 0 }}>{value}</p>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          {settings.whatsApp && (
            <div style={{ backgroundColor: "#25D366", border: "2px solid #1a1a1a", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 18, color: "#fff", marginBottom: 4 }}>
                  WhatsApp ile Hızlı İletişim
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>Anlık yanıt için WhatsApp üzerinden ulaşın.</div>
              </div>
              <a
                href={`https://wa.me/${settings.whatsApp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#fff", color: "#25D366", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "12px 24px", border: "2px solid #1a1a1a", textDecoration: "none" }}
              >
                <MessageCircle size={14} /> WhatsApp&apos;tan Yaz
              </a>
            </div>
          )}

          {/* Form + sağ panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 3, alignItems: "start" }}>

            {/* Form */}
            <div style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 22, color: "#1a1a1a", marginBottom: 6 }}>
                Bize Yazın
              </h2>
              <p style={{ fontSize: 13, color: "rgba(26,26,26,0.5)", marginBottom: 24 }}>
                Formu doldurarak en kısa sürede size dönelim.
              </p>
              <ContactForm services={services} />
            </div>

            {/* Sağ: adres + çalışma saatleri */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Adres kutusu */}
              <div style={{ backgroundColor: "#1a1a1a", border: "2px solid #1a1a1a", padding: "48px 32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 200, textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ width: 48, height: 48, backgroundColor: "#ffcc00", border: "2px solid #ffcc00", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <MapPin size={22} color="#1a1a1a" />
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 320 }}>{settings.address}</p>
                </div>
              </div>

              {/* Çalışma saatleri */}
              <div style={{ backgroundColor: "#fff", border: "2px solid #1a1a1a", padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, backgroundColor: "#1a1a1a", border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Clock size={16} color="#ffcc00" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 13, color: "#1a1a1a", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                    Çalışma Saatleri
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                    { day: "Cumartesi",        hours: "10:00 – 14:00" },
                    { day: "Pazar",            hours: "Kapalı" },
                  ].map(({ day, hours }) => (
                    <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(26,26,26,0.08)", paddingBottom: 10 }}>
                      <span style={{ fontSize: 13, color: "rgba(26,26,26,0.6)" }}>{day}</span>
                      <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 13, color: "#1a1a1a" }}>{hours}</span>
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
