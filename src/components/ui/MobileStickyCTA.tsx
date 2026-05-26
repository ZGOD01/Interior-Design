"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  const whatsappNumber = "919119491193";
  const whatsappMsg = encodeURIComponent(
    "Hello, I'd like to book a free consultation for interior design and turnkey contracting."
  );

  useEffect(() => {
    const handleScroll = () => {
      // Appear after user scrolls 300px down
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 w-full border-t border-border/40 bg-card/95 backdrop-blur-md px-6 py-4 flex items-center gap-3 md:hidden shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      {/* WhatsApp trigger */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: "default" }),
          "flex-1 justify-center gap-2 border-border/70 text-xs font-semibold py-3 h-12"
        )}
      >
        <MessageCircle className="size-4 text-clay" />
        WhatsApp Us
      </a>

      {/* Book audit trigger */}
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "default", size: "default" }),
          "flex-1 justify-center gap-2 text-xs font-semibold py-3 h-12"
        )}
      >
        <Calendar className="size-4 text-white" />
        Book Site Audit
      </Link>
    </div>
  );
}
