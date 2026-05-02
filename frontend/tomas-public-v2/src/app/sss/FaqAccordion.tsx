"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem { question: string; answer: string }

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ border: "2px solid #1a1a1a", backgroundColor: open === i ? "#ffcc00" : "#fff" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const, gap: 16 }}
            aria-expanded={open === i}
          >
            <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 15, color: "#1a1a1a", lineHeight: 1.35, flex: 1 }}>
              {faq.question}
            </span>
            <div style={{ width: 28, height: 28, backgroundColor: "#1a1a1a", border: "2px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {open === i ? <Minus size={14} color="#ffcc00" /> : <Plus size={14} color="#ffcc00" />}
            </div>
          </button>
          {open === i && (
            <div style={{ padding: "0 24px 20px" }}>
              <div style={{ height: 2, backgroundColor: "#1a1a1a", marginBottom: 16 }} />
              <p style={{ fontSize: 14, color: "rgba(26,26,26,0.7)", lineHeight: 1.75, margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
