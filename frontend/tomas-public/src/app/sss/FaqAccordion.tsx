"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem { question: string; answer: string }

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${
            open === i ? "border-gold-400/60 shadow-sm" : "border-slate-100"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-jakarta font-semibold text-navy-900 text-[15px] pr-4">{faq.question}</span>
            {open === i ? (
              <ChevronUp className="w-5 h-5 text-gold-500 shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
            )}
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
