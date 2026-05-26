"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { mainNavigation, contactDetails } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Monitor scroll state to change visual density
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route transition safely to avoid synchronous cascading renders
  useEffect(() => {
    if (mobileMenuOpen || activeSubmenu !== null) {
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, mobileMenuOpen, activeSubmenu]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b",
        scrolled
          ? "bg-background/90 border-border/40 backdrop-blur-md py-3.5 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo - Premium Minimalist */}
        <Link href="/" className="group flex items-baseline gap-1">
          <span className="font-heading text-2xl font-light tracking-[0.1em] text-charcoal transition-colors group-hover:text-clay">
            IICL
          </span>
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-clay uppercase">
            STUDIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {mainNavigation.map((link) => {
            const hasChildren = link.children && link.children.length > 0;
            const isActive =
              pathname === link.href ||
              (hasChildren && pathname.startsWith(link.href));

            if (hasChildren) {
              return (
                <div
                  key={link.label}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveSubmenu(link.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-sans font-semibold uppercase tracking-widest transition-colors hover:text-clay cursor-pointer",
                      isActive ? "text-clay" : "text-charcoal-muted"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="size-3 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu - Studio Style */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl border border-border/40 bg-card p-2.5 shadow-lg transition-all duration-300 origin-top scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto"
                    )}
                  >
                    {link.children?.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            "block rounded-xl px-4 py-2.5 text-xs transition-all hover:bg-sand/65 hover:text-clay",
                            isChildActive
                              ? "bg-sand text-clay font-medium"
                              : "text-charcoal-muted"
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-sans font-semibold uppercase tracking-widest transition-colors hover:text-clay",
                  isActive ? "text-clay" : "text-charcoal-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${contactDetails.phones[0].value.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 text-xs text-charcoal hover:text-clay transition-colors"
          >
            <Phone className="size-3.5 text-clay" />
            <span className="hidden lg:inline">{contactDetails.phones[0].value}</span>
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "px-5"
            )}
          >
            Book site audit
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-1.5 text-charcoal hover:text-clay focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[65px] z-40 w-full border-b border-border/40 bg-card/95 backdrop-blur-lg shadow-xl md:hidden transition-all duration-300 ease-in-out transform origin-top",
          mobileMenuOpen
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
                <div key={link.label} className="border-b border-border/20 py-2">
                  <button
                    onClick={() =>
                      setActiveSubmenu(isSubmenuActive ? null : link.label)
                    }
                    className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-widest text-charcoal py-2"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-4 text-charcoal-muted transition-transform duration-200",
                        isSubmenuActive && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "mt-1 space-y-1 pl-4 transition-all duration-200 overflow-hidden",
                      isSubmenuActive ? "max-h-60 opacity-100 py-1" : "max-h-0 opacity-0"
                    )}
                  >
                    {link.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-xs text-charcoal-muted hover:text-clay"
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
                className="block border-b border-border/20 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-clay"
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
              href="https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
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
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "w-full text-center justify-center"
              )}
            >
              Book site audit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
