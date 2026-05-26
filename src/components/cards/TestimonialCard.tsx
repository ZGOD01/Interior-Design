import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-6 rounded-[2rem] border border-border/20 bg-card p-8 md:p-10 transition-studio hover:border-clay/20",
        className
      )}
    >
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-3 fill-clay text-clay" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm md:text-base font-sans font-light italic text-charcoal-muted leading-relaxed flex-1">
        &ldquo;{testimonial.comment}&rdquo;
      </blockquote>

      {/* Footer */}
      <div className="flex items-end justify-between border-t border-border/15 pt-6">
        <div className="space-y-1">
          <p className="text-sm font-sans font-medium text-charcoal">{testimonial.author}</p>
          <p className="text-[10px] font-sans text-charcoal-muted font-light uppercase tracking-wider">{testimonial.designation}</p>
          <p className="text-[10px] font-sans text-charcoal-muted/70 font-light">{testimonial.company}</p>
        </div>
        <span className="text-[9px] font-sans font-light uppercase tracking-widest text-clay border border-clay/10 bg-clay/[0.03] rounded-full px-3 py-1">
          {testimonial.projectType}
        </span>
      </div>
    </article>
  );
}
