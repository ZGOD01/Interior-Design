"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQAccordionItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQAccordionItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("max-w-3xl mx-auto space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id || index}
            className={cn(
              "rounded-[1.25rem] border transition-all duration-500 bg-card overflow-hidden",
              isOpen ? "border-clay/40 shadow-sm" : "border-border/50 hover:border-clay/20"
            )}
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left font-sans text-base font-light text-charcoal outline-none hover:text-clay cursor-pointer p-6 md:p-7"
            >
              <span className="font-heading text-base md:text-lg font-light tracking-tight">{item.question}</span>
              <ChevronDown
                className={cn(
                  "size-4.5 text-charcoal-muted transition-transform duration-500 shrink-0 ml-4",
                  isOpen && "rotate-180 text-clay"
                )}
              />
            </button>

            <div
              className={cn(
                "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 border-t border-border/20">
                <p className="text-xs md:text-sm leading-relaxed text-charcoal-muted font-light font-sans mt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
