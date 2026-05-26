import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 px-6 py-8 md:py-10 bg-card border border-border/40 rounded-[1.5rem] bento-shadow text-center transition-studio hover:bento-shadow-hover hover:border-clay/20 hover:-translate-y-0.5",
        className
      )}
    >
      <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-clay tracking-tight">
        {value}
      </span>
      <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-charcoal uppercase font-sans">
        {label}
      </span>
      {description && (
        <span className="text-sm text-charcoal-muted leading-relaxed font-sans font-light mt-1 max-w-[200px] mx-auto">
          {description}
        </span>
      )}
    </div>
  );
}
