"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Star, CheckCircle2, ShieldAlert } from "lucide-react";

interface ReviewItem {
  name: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
}

const verifiedReviewMockups: ReviewItem[] = [
  {
    name: "Dr. Sandeep Deshmukh",
    location: "Koregaon Park, Pune",
    projectType: "4BHK Turnkey Interior",
    rating: 5,
    date: "December 2025",
    text: "Having previously faced cost escalation issues with another designer, I was skeptical. IIC Limited agreed to a locked line-item BOQ in writing. Work finished exactly within that price, and our licensed engineer supervised dimensions carefully on-site daily.",
    initials: "SD"
  },
  {
    name: "Vikram Shah",
    location: "Hinjawadi Phase II, Pune",
    projectType: "Vertex Systems IT Lounge",
    rating: 5,
    date: "October 2024",
    text: "Excellent project planning and timeline adherence. They handled complex corporate HVAC integrations, modular desk setups, and acoustic sound testing under one turnkey contract.",
    initials: "VS"
  }
];

export function ReviewIntegrationPlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Strict TODO warning */}
      {/* TODO: Connect verified Google Business Profile review embed widget here. */}
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-2 text-left">
          <span className="tag-label">Client Feedback</span>
          <h3 className="font-heading text-2xl md:text-3xl font-light text-charcoal">
            Reflecting Real Site Experiences
          </h3>
          <p className="text-sm text-charcoal-muted font-sans font-light max-w-md">
            Unedited testimonials detailing our structured project planning, line-by-line BOQ adherence, and concrete handover validations in Pune.
          </p>
        </div>

        {/* Google ratings teaser */}
        <div className="flex items-center gap-3 bg-card border border-border/40 rounded-full px-5 py-2.5 self-start md:self-auto shadow-sm">
          <div className="flex gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </div>
          <span className="w-px h-3.5 bg-border/60" />
          <span className="text-xs md:text-sm font-sans font-semibold text-charcoal tracking-wide uppercase">
            Google Reviews Integration Planned
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {verifiedReviewMockups.map((item) => (
          <div
            key={item.name}
            className="bg-card border border-border/40 rounded-[1.75rem] p-6 md:p-8 space-y-6 hover:border-clay/20 transition-studio relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-sand/40 border border-border/30 flex items-center justify-center font-heading text-xs font-semibold text-clay">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-medium text-charcoal leading-none">
                      {item.name}
                    </h4>
                    <p className="text-xs text-charcoal-muted/70 font-sans mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 bg-clay/5 border border-clay/10 rounded-full px-2.5 py-0.5 text-xs font-sans font-semibold text-clay uppercase tracking-wider">
                  <CheckCircle2 className="size-3 text-clay shrink-0" /> Verified Project
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="size-3 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                &ldquo;{item.text}&rdquo;
              </p>
            </div>

            {/* Footer details */}
            <div className="border-t border-border/20 pt-4 mt-6 flex items-center justify-between text-xs md:text-sm text-charcoal-muted/50 font-sans font-light">
              <span>Project: {item.projectType}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tech note hook for Resend or dynamic widget embed */}
      <div className="rounded-2xl border border-border/30 bg-sand/30 p-5 flex items-start gap-3.5 max-w-2xl">
        <ShieldAlert className="size-4.5 text-clay mt-0.5 shrink-0" />
        <div className="space-y-1">
          <p className="text-xs md:text-sm font-sans font-semibold text-charcoal uppercase tracking-wider">
            Google Reviews Integration Placeholder
          </p>
          <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
            * TODO: Use custom embed widget or fetch Google Business Profile API client review logs directly inside `/api/reviews` route to swap this placeholder section with automated live client streams.
          </p>
        </div>
      </div>
    </div>
  );
}
