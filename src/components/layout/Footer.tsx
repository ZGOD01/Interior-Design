import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { mainNavigation, contactDetails } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/20 bg-secondary/85 pt-32 pb-16 text-charcoal-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Large Editorial Headline */}
        <div className="border-b border-border/20 pb-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 col-span-1">
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extralight text-charcoal tracking-tight leading-[1.05]">
                Designing spaces <br />
                that feel <span className="italic font-bold text-clay">calm</span> and built to last.
              </h2>
            </div>
            <div className="lg:col-span-4 col-span-1">
              <p className="text-sm font-sans font-light leading-relaxed max-w-sm text-charcoal-muted">
                Pune-based design studio and turnkey contractor specializing in premium residential, corporate offices, and structurally certified civil engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Signature info */}
          <div className="lg:col-span-4 col-span-1 space-y-6">
            <div className="space-y-1">
              <span className="font-heading text-xl font-light tracking-[0.15em] text-charcoal">
                IICL
              </span>
              <p className="text-[10px] font-sans font-medium tracking-[0.25em] text-clay uppercase">
                STUDIO / CONTRACTING
              </p>
            </div>
            <p className="text-xs leading-relaxed text-charcoal-muted font-sans font-light">
              International Interior Contractor Private Limited (IIC Limited). Registered site execution and municipal clearance managers.
            </p>
            <div className="flex items-center gap-5">
              {Object.entries(contactDetails.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  className="text-[10px] font-sans font-light uppercase tracking-widest text-charcoal-muted transition-colors hover:text-clay"
                >
                  {key}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 col-span-1 space-y-5 lg:pl-4">
            <h3 className="text-[10px] font-sans font-medium tracking-[0.25em] text-charcoal uppercase">
              STUDIO
            </h3>
            <ul className="space-y-3 text-xs">
              {mainNavigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-clay font-light text-charcoal-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="transition-colors hover:text-clay text-charcoal-muted font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-clay text-charcoal-muted font-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-3 col-span-1 space-y-5">
            <h3 className="text-[10px] font-sans font-medium tracking-[0.25em] text-charcoal uppercase">
              SPECIALTIES
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/services/residential-interiors" className="transition-colors hover:text-clay font-light text-charcoal-muted">
                  Residential Interiors
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-interiors" className="transition-colors hover:text-clay font-light text-charcoal-muted">
                  Commercial Interiors
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-interiors" className="transition-colors hover:text-clay font-light text-charcoal-muted">
                  Industrial Interiors
                </Link>
              </li>
              <li>
                <Link href="/services/turnkey-projects" className="transition-colors hover:text-clay font-light text-charcoal-muted">
                  Turnkey Projects
                </Link>
              </li>
              <li>
                <Link href="/services/civil-engineering" className="transition-colors hover:text-clay font-light text-charcoal-muted">
                  Civil Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Pune Contact */}
          <div className="lg:col-span-3 col-span-1 space-y-5">
            <h3 className="text-[10px] font-sans font-medium tracking-[0.25em] text-charcoal uppercase">
              CONTACT
            </h3>
            <ul className="space-y-3.5 text-xs text-charcoal-muted font-light">
              <li className="flex items-start gap-2 text-charcoal-muted/90">
                <MapPin className="size-3.5 shrink-0 text-clay mt-0.5" />
                <span className="leading-relaxed">
                  {contactDetails.address.display}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 text-clay" />
                <div className="flex flex-col">
                  {contactDetails.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.value.replace(/\s+/g, "")}`}
                      className="hover:text-clay transition-colors"
                    >
                      {phone.value} <span className="text-[9px] opacity-70">({phone.label})</span>
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0 text-clay" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-clay transition-colors"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="size-3.5 shrink-0 text-clay mt-0.5" />
                <div>
                  <p>{contactDetails.hours.days}</p>
                  <p className="text-[10px] opacity-70">{contactDetails.hours.time}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-muted font-sans font-light">
          <p>
            &copy; {currentYear} International Interior Contractor Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-1 opacity-70">
            <Globe className="size-3.5 text-clay" />
            <span>Serving Pune and Maharashtra regions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
