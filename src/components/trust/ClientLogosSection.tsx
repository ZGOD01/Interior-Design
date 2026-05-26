"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Grayscale typography-focused client signature placeholders
const clientPartners = [
  { name: "Vertex Systems", type: "IT Corporate Office, Hinjawadi Phase II" },
  { name: "Auro Heavy Industries", type: "MIDC Automation Plant, Chakan" },
  { name: "Symphony Estates", type: "Premium Residential Villa, Koregaon Park" },
  { name: "Elite Commercial Plaza", type: "Strengthening Retrofit, Kothrud" },
  { name: "Phoenix Residential", type: "Turnkey Architecture Shell, Viman Nagar" }
];

export function ClientLogosSection({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6 text-center py-6", className)}>
      {/* Strict TODO comment inside build for client review */}
      {/* TODO: Replace vector typographic shells with verified corporate client logos in SVG format when final permissions are obtained. */}
      
      <div className="space-y-1 max-w-xl mx-auto mb-8">
        <span className="tag-label">Corporate Partnerships</span>
        <h3 className="font-heading text-lg font-light text-charcoal">
          Spaces Entrusted to Our Care
        </h3>
        <p className="text-sm text-charcoal-muted font-sans font-light">
          Typographic signature outline representing premium residential estates, Hinjawadi office fitouts, and Chakan industrial facilities completed in Pune.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto items-stretch">
        {clientPartners.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center justify-center p-5 bg-card border border-border/40 rounded-2xl hover:border-clay/20 transition-studio hover:bg-background group"
          >
            <span className="font-heading text-sm md:text-base font-light text-charcoal/70 tracking-tight leading-none group-hover:text-clay transition-colors duration-300">
              {partner.name}
            </span>
            <span className="text-xs md:text-sm text-charcoal-muted/60 font-sans tracking-wide uppercase mt-2.5 text-center leading-relaxed">
              {partner.type}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-charcoal-muted/50 font-mono italic max-w-md mx-auto pt-2">
        * TODO: Replace placeholder typography signatures with official verified partner brand assets.
      </p>
    </div>
  );
}
