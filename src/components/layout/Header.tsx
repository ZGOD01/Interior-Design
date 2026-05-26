"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { mainNavigation, contactDetails } from "@/data/navigation";
import { MobileNav } from "@/components/layout/MobileNav";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    if (mobileOpen) {
      const timer = setTimeout(() => setMobileOpen(false), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b",
          scrolled
            ? "bg-background/80 border-border/20 backdrop-blur-lg py-4"
            : "bg-transparent border-transparent py-7"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Brand Logo - Premium Minimalist */}
          <Link href="/" className="group flex items-baseline gap-1">
            <span className="font-heading text-2xl font-light tracking-[0.1em] text-charcoal transition-colors group-hover:text-clay">
              IICL
            </span>
            <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-clay uppercase">
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
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 text-[10px] md:text-[11px] font-sans font-light uppercase tracking-[0.2em] transition-colors hover:text-clay cursor-pointer",
                        isActive ? "text-clay" : "text-charcoal-muted"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="size-3 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu - Studio Style */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-[1.5rem] border border-border/50 bg-card p-2.5 shadow-md transition-all duration-300 origin-top scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto"
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
                    "text-[10px] md:text-[11px] font-sans font-light uppercase tracking-[0.2em] transition-colors hover:text-clay",
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
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden p-1.5 text-charcoal hover:text-clay focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Linked Mobile Dropdown Navigation */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
