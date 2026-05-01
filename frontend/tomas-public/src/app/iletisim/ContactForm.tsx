"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import type { ServiceDto } from "@/lib/api";

interface Props {
  services: ServiceDto[];
}

const inputClass =
  "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-150";
const labelClass = "block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide";

export default function ContactForm({ services }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("hp_field")) return;

    setStatus("loading");
    try {
      const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
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
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-jakarta font-bold text-navy-900 text-xl mb-2">Mesajınız Alındı!</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{msg}</p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-colors"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input type="text" name="hp_field" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === "error" && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm mb-5">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {msg}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass}>Ad Soyad *</label>
          <input name="fullName" required className={inputClass} placeholder="Ad Soyad" />
        </div>
        <div>
          <label className={labelClass}>Şirket</label>
          <input name="companyName" className={inputClass} placeholder="Şirket adı" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass}>E-posta *</label>
          <input name="email" type="email" required className={inputClass} placeholder="ornek@firma.com" />
        </div>
        <div>
          <label className={labelClass}>Telefon</label>
          <input name="phone" className={inputClass} placeholder="+90 xxx xxx xx xx" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass}>Ülke</label>
          <input name="country" className={inputClass} placeholder="Ülke" />
        </div>
        <div>
          <label className={labelClass}>İlgilenilen Hizmet</label>
          <select name="serviceId" className={inputClass}>
            <option value="">Seçiniz</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass}>Mesajınız *</label>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Mesajınızı buraya yazınız..."
        />
      </div>

      <div className="flex gap-2.5 items-start mb-5">
        <input type="checkbox" name="consent" id="consent" required className="w-4 h-4 mt-0.5 accent-gold-500 shrink-0" />
        <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
          Kişisel verilerimin işlenmesine ilişkin{" "}
          <Link href="/kvkk" className="text-gold-600 hover:underline">KVKK Aydınlatma Metni</Link>
          &apos;ni okudum ve onaylıyorum. *
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 disabled:bg-slate-400 text-white font-jakarta font-bold rounded-xl transition-colors duration-150 text-sm"
      >
        <Send className="w-4 h-4" />
        {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
