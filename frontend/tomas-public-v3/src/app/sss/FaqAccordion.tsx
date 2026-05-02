"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem { question: string; answer: string }

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderRadius: 12, border: "1px solid #E4E7EF", overflow: "hidden", backgroundColor: "#fff", boxShadow: open === i ? "0 4px 20px rgba(11,92,255,0.08)" : "0 1px 4px rgba(0,0,0,0.04)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const, gap: 16 }}
            aria-expanded={open === i}
          >
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1A1F36", lineHeight: 1.35, flex: 1 }}>
              {faq.question}
            </span>
            <div style={{ width: 28, height: 28, backgroundColor: open === i ? "#0B5CFF" : "#EBF1FF", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
              {open === i ? <Minus size={14} color="#fff" /> : <Plus size={14} color="#0B5CFF" />}
            </div>
          </button>
          {open === i && (
            <div style={{ padding: "0 24px 20px" }}>
              <div style={{ height: 1, backgroundColor: "#E4E7EF", marginBottom: 16 }} />
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
