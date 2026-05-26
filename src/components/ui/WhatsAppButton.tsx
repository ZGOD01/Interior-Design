"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const whatsappNumber = "919119491193";
  const whatsappMsg = encodeURIComponent(
    "Hello, I'd like to book a free consultation for interior design and turnkey contracting."
  );

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-20 md:bottom-8 right-6 md:right-8 z-40 flex flex-col items-end gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Tooltip bubble - Premium Bento Style */}
      {tooltipOpen && (
        <div className="relative bg-card border border-border/40 rounded-2xl shadow-xl p-5 max-w-[240px] bento-shadow transition-all duration-300">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute top-3.5 right-3.5 text-charcoal-muted hover:text-clay cursor-pointer"
            aria-label="Close"
          >
            <X className="size-3.5" />
          </button>
          
          <span className="tag-label text-[9px] block mb-1">Direct Chat</span>
          <p className="font-heading text-sm font-semibold text-charcoal mb-1">Talk with Site Lead</p>
          <p className="text-[11px] text-charcoal-muted leading-relaxed font-light font-sans">
            Have spatial questions? Chat directly with our Pune execution team now.
          </p>
          
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-[10px] font-sans font-semibold tracking-wider uppercase rounded-full py-2.5 transition-all duration-300 hover:bg-[#1da855] shadow-sm cursor-pointer"
          >
            <MessageCircle className="size-3.5" />
            Open WhatsApp
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setTooltipOpen(!tooltipOpen)}
        aria-label="Chat on WhatsApp"
        className="size-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center transition-all duration-500 hover:scale-115 hover:shadow-2xl cursor-pointer relative"
      >
        <MessageCircle className="size-6 animate-pulse" />
        {/* Pulse ring */}
        <span className="absolute size-14 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" aria-hidden />
      </button>
    </div>
  );
}
