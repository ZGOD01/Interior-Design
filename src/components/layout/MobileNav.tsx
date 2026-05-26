"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { mainNavigation, contactDetails } from "@/data/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const whatsappNumber = "919119491193";
  const whatsappMsg = encodeURIComponent(
    "Hello, I'd like to book a free consultation for interior design and turnkey contracting."
  );

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[65px] z-40 w-full max-h-[calc(100vh-65px)] overflow-y-auto border-b border-border/40 bg-card/95 backdrop-blur-lg shadow-md md:hidden transition-all duration-300 ease-in-out transform origin-top",
        open
          ? "translate-y-0 opacity-100 scale-y-100"
          : "-translate-y-5 opacity-0 scale-y-90 pointer-events-none"
      )}
    >
      <div className="space-y-1 px-6 py-6">
        {mainNavigation.map((link) => {
          const hasChildren = link.children && link.children.length > 0;
          const isSubmenuActive = activeSubmenu === link.label;

          if (hasChildren) {
            return (
              <div key={link.label} className="border-b border-border/20 py-1">
                <div className="flex w-full items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex-1 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-charcoal hover:text-clay"
                  >
                    {link.label}
                  </Link>
                  <button
                    onClick={() =>
                      setActiveSubmenu(isSubmenuActive ? null : link.label)
                    }
                    className="p-3 focus:outline-none"
                    aria-label={`Toggle ${link.label} menu`}
                  >
                    <ChevronDown
                      className={cn(
                        "size-4 text-charcoal-muted transition-transform duration-200",
                        isSubmenuActive && "rotate-180"
                      )}
                    />
                  </button>
                </div>

                <div
                  className={cn(
                    "space-y-1 pl-4 transition-all duration-200 overflow-hidden",
                    isSubmenuActive ? "max-h-[500px] opacity-100 pb-2" : "max-h-0 opacity-0"
                  )}
                >
                  {link.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2.5 text-xs md:text-sm text-charcoal-muted hover:text-clay"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="block border-b border-border/20 py-4 text-sm font-sans font-semibold uppercase tracking-widest text-charcoal hover:text-clay"
            >
              {link.label}
            </Link>
          );
        })}

        {/* Action CTAs */}
        <div className="pt-5 flex flex-col gap-4">
          <a
            href={`tel:${contactDetails.phones[0].value.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-xs text-charcoal"
          >
            <Phone className="size-4 text-clay" />
            {contactDetails.phones[0].value}
          </a>
          
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-full text-center justify-center gap-2 border-border/60"
            )}
          >
            <MessageCircle className="size-4 text-clay" />
            WhatsApp Us
          </a>

          <Link
            href="/contact"
            onClick={onClose}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "w-full text-center justify-center"
            )}
          >
            Book free audit
          </Link>
        </div>
      </div>
    </div>
  );
}
