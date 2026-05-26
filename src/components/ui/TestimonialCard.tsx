import React from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between bg-card border border-border/40 rounded-[2rem] p-8 md:p-10 bento-shadow transition-studio hover:bento-shadow-hover hover:border-clay/20",
        className
      )}
    >
      {/* Upper Section */}
      <div className="space-y-6 relative">
        {/* Decorative Quote Mark */}
        <div className="absolute top-0 right-0 text-clay/[0.08]" aria-hidden>
          <Quote className="size-12 fill-current rotate-180" />
        </div>

        {/* Muted Star Ratings */}
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-clay text-clay" />
          ))}
        </div>

        {/* Narrative Quote */}
        <blockquote className="text-sm leading-relaxed text-charcoal font-sans font-light italic">
          &ldquo;{testimonial.comment}&rdquo;
        </blockquote>
      </div>

      {/* Profile Details */}
      <div className="border-t border-border/30 pt-6 mt-8 flex items-start gap-4">
        {/* Avatar with raw tone colors */}
        <div className="size-11 shrink-0 rounded-full bg-sand border border-border/30 flex items-center justify-center">
          <span className="font-heading text-sm font-semibold text-clay">
            {testimonial.author.charAt(0)}
          </span>
        </div>

        <div className="space-y-1">
          <p className="font-heading text-sm font-semibold text-charcoal tracking-tight">
            {testimonial.author}
          </p>
          <p className="text-xs text-charcoal-muted font-light leading-none">
            {testimonial.designation}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
          <span className="inline-block mt-1 text-[9px] font-semibold tracking-widest text-clay uppercase font-sans">
            {testimonial.projectType}
          </span>
        </div>

        <div className="ml-auto text-[10px] text-charcoal-muted/60 shrink-0 font-sans font-light">
          {testimonial.date}
        </div>
      </div>
    </div>
  );
}
