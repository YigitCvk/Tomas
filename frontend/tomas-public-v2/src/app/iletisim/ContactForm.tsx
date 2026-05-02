"use client";
import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import type { ServiceDto } from "@/lib/api";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: "2px solid #1a1a1a",
  backgroundColor: "#f5f0e8",
  fontSize: 14,
  color: "#1a1a1a",
  outline: "none",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-space-grotesk)",
  fontWeight: 700,
  fontSize: 10,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#1a1a1a",
  marginBottom: 6,
};

export default function ContactForm({ services }: { services: ServiceDto[] }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("hp_field")) return;

    setStatus("loading");
    try {
      const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5238";
      const res = await fetch(`${API}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          companyName: data.get("companyName"),
          email: data.get("email"),
          phone: data.get("phone"),
          country: data.get("country"),
          interestedServiceId: data.get("serviceId") ? Number(data.get("serviceId")) : null,
          message: data.get("message"),
          consentAccepted: data.get("consent") === "on",
          honeypot: data.get("hp_field"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setMsg(json.message || "Mesajınız alındı. En kısa sürede dönüş yapacağız.");
        form.reset();
      } else {
        setStatus("error");
        setMsg("Gönderim sırasında hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("error");
      setMsg("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ width: 56, height: 56, backgroundColor: "#ffcc00", border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <CheckCircle size={24} color="#1a1a1a" />
        </div>
        <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900, fontSize: 20, color: "#1a1a1a", marginBottom: 10 }}>
          Mesajınız Alındı!
        </h3>
        <p style={{ fontSize: 14, color: "rgba(26,26,26,0.6)", lineHeight: 1.7, marginBottom: 24 }}>{msg}</p>
        <button
          onClick={() => setStatus("idle")}
          style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "12px 24px", backgroundColor: "#1a1a1a", color: "#ffcc00", border: "2px solid #1a1a1a", cursor: "pointer" }}
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="hp_field" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      {status === "error" && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, backgroundColor: "#e63b2e", border: "2px solid #1a1a1a", color: "#fff", padding: "12px 16px", marginBottom: 20 }}>
          <AlertCircle size={16} />
          <span style={{ fontSize: 13 }}>{msg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, marginBottom: 12 }}>
        <div>
          <label style={labelStyle}>Ad Soyad *</label>
          <input name="fullName" required style={inputStyle} placeholder="Ad Soyad" />
        </div>
        <div>
          <label style={labelStyle}>Şirket</label>
          <input name="companyName" style={inputStyle} placeholder="Şirket adı" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, marginBottom: 12 }}>
        <div>
          <label style={labelStyle}>E-posta *</label>
          <input name="email" type="email" required style={inputStyle} placeholder="ornek@firma.com" />
        </div>
        <div>
          <label style={labelStyle}>Telefon</label>
          <input name="phone" style={inputStyle} placeholder="+90 xxx xxx xx xx" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, marginBottom: 12 }}>
        <div>
          <label style={labelStyle}>Ülke</label>
          <input name="country" style={inputStyle} placeholder="Ülke" />
        </div>
        <div>
          <label style={labelStyle}>İlgilenilen Hizmet</label>
          <select name="serviceId" style={{ ...inputStyle, cursor: "pointer" }}>
            <option value="">Seçiniz</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={labelStyle}>Mesajınız *</label>
        <textarea
          name="message"
          required
          rows={5}
          style={{ ...inputStyle, resize: "none" }}
          placeholder="Mesajınızı buraya yazınız..."
        />
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 20 }}>
        <input type="checkbox" name="consent" id="consent" required style={{ width: 16, height: 16, marginTop: 2, accentColor: "#1a1a1a", flexShrink: 0 }} />
        <label htmlFor="consent" style={{ fontSize: 12, color: "rgba(26,26,26,0.6)", lineHeight: 1.65 }}>
          Kişisel verilerimin işlenmesine ilişkin{" "}
          <Link href="/kvkk" style={{ color: "#1a1a1a", fontWeight: 700, textDecoration: "underline" }}>
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni okudum ve onaylıyorum. *
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", backgroundColor: status === "loading" ? "rgba(26,26,26,0.4)" : "#1a1a1a", color: "#ffcc00", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" as const, border: "2px solid #1a1a1a", cursor: status === "loading" ? "not-allowed" : "pointer", boxShadow: "4px 4px 0 #ffcc00" }}
      >
        <Send size={14} />
        {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
