"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-brand-card overflow-hidden transition-colors duration-200 hover:border-slate-700/80"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-white transition-all hover:bg-slate-800/20 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="pr-4 text-base md:text-lg">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-brand-primary shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer block with transition */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] border-t border-slate-800" : "max-h-0"
              }`}
            >
              <p className="p-5 text-sm md:text-base leading-relaxed text-brand-subtext">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
