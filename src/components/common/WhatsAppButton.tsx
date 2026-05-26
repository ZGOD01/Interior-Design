"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919119491193";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello, I'd like to enquire about your turnkey interior services."
);

interface WhatsAppButtonProps {
  className?: string;
}

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a slight delay so it doesn't flash on load
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        "fixed bottom-24 right-5 z-50 hidden md:flex items-center gap-2.5 rounded-full shadow-lg transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
    >
      {/* Tooltip label */}
      <span className="hidden lg:flex items-center rounded-full bg-card border border-border/40 px-4 py-2 text-[11px] font-sans font-semibold text-charcoal shadow-sm whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Icon bubble */}
      <div className="relative size-14 flex items-center justify-center rounded-full bg-[#25D366] shadow-md transition-transform duration-300 hover:scale-110 active:scale-95">
        {/* Pulse ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
        />
        <MessageCircle className="size-6 text-white relative z-10" />
      </div>
    </a>
  );
}
