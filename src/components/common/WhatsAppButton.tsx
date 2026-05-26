"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919119491193";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi IICL, I want to discuss an interior project. Please contact me."
);

interface WhatsAppButtonProps {
  className?: string;
  message?: string;
}

export function WhatsAppButton({ className, message }: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay appearance so it doesn't flash on first paint
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const encodedMsg = message ? encodeURIComponent(message) : WHATSAPP_MSG;

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IIC Limited on WhatsApp"
      className={cn(
        // Desktop-only floating button — hidden on mobile (use StickyMobileCTA instead)
        "fixed bottom-8 right-6 z-50 hidden md:flex items-center gap-3",
        "transition-all duration-500 ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
    >
      {/* Tooltip label */}
      <span className="hidden lg:flex items-center gap-2 rounded-full bg-card border border-border/40 shadow-sm px-4 py-2.5 text-sm font-sans font-semibold text-charcoal whitespace-nowrap">
        <span className="size-1.5 rounded-full bg-[#25D366] animate-pulse" />
        Chat on WhatsApp
      </span>

      {/* Icon bubble */}
      <div
        className="relative size-14 flex items-center justify-center rounded-full bg-[#25D366] shadow-md transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-hidden
      >
        {/* Pulse ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"
        />
        <MessageCircle className="size-6 text-white relative z-10" fill="white" strokeWidth={0} />
      </div>
    </a>
  );
}
