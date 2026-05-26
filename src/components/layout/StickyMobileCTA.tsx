"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactDetails } from "@/data/navigation";

const WHATSAPP_NUMBER = "919119491193";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi IICL, I want to discuss an interior project. Please contact me."
);

interface StickyMobileCTAProps {
  className?: string;
}

export function StickyMobileCTA({ className }: StickyMobileCTAProps) {
  const phoneNumber = contactDetails.phones[0]?.value.replace(/\s+/g, "") ?? "+919119491193";

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden",
        "transition-all duration-500",
        className
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Frosted backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-card/95 backdrop-blur-xl border-t border-border/30"
      />

      <div className="relative flex items-stretch gap-0 px-3 py-2.5">
        {/* Call */}
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call IIC Limited"
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 rounded-2xl",
            "text-charcoal-muted transition-all duration-200 active:scale-95",
            "hover:bg-sand/60 hover:text-clay"
          )}
        >
          <Phone className="size-5" strokeWidth={1.5} />
          <span className="text-xs font-sans font-semibold uppercase tracking-wider">Call</span>
        </a>

        {/* Divider */}
        <div className="w-px bg-border/40 my-2" aria-hidden />

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with IIC Limited on WhatsApp"
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 rounded-2xl",
            "text-charcoal-muted transition-all duration-200 active:scale-95",
            "hover:bg-[#25D366]/8 hover:text-[#25D366]"
          )}
        >
          <MessageCircle className="size-5" strokeWidth={1.5} />
          <span className="text-xs font-sans font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="w-px bg-border/40 my-2" aria-hidden />

        {/* Book Consultation — primary pill */}
        <Link
          href="/contact"
          aria-label="Book a free consultation"
          className={cn(
            "flex flex-[1.6] items-center justify-center gap-2 mx-1 my-0.5",
            "rounded-2xl bg-deep-cta text-cta-text",
            "text-sm font-sans font-semibold tracking-wide",
            "transition-all duration-200 hover:bg-clay active:scale-95"
          )}
        >
          <CalendarCheck className="size-4" strokeWidth={1.5} />
          <span>Book Free Consult</span>
        </Link>
      </div>
    </div>
  );
}
