"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { contactDetails } from "@/data/navigation";

interface StickyMobileCTAProps {
  className?: string;
}

const whatsappNumber = "919119491193";
const whatsappMsg = encodeURIComponent(
  "Hello, I'd like to enquire about your turnkey interior services."
);

export function StickyMobileCTA({ className }: StickyMobileCTAProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-bottom",
        className
      )}
    >
      {/* Blur backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-background/90 backdrop-blur-md border-t border-border/40"
      />

      <div className="relative flex items-center gap-3 px-4 py-3">
        {/* Call button */}
        <a
          href={`tel:${contactDetails.phones[0].value.replace(/\s+/g, "")}`}
          aria-label="Call IIC Limited"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "flex-1 gap-2 border-border/60"
          )}
        >
          <Phone className="size-4 text-clay" />
          Call Now
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp IIC Limited"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "flex-1 gap-2 border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/5"
          )}
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>

        {/* Book CTA */}
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "flex-[1.4]"
          )}
        >
          Book Free Consultation
        </Link>
      </div>
    </div>
  );
}
