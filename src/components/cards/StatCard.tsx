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
        "group flex flex-col gap-2 border-l border-border/30 pl-6 py-2 transition-studio hover:border-clay/40",
        className
      )}
    >
      <span className="font-heading text-4xl md:text-5xl font-extralight tracking-tight text-charcoal group-hover:text-clay transition-colors duration-500">
        {value}
      </span>
      <span className="text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-charcoal">
        {label}
      </span>
      {description && (
        <span className="text-xs md:text-sm font-sans text-charcoal-muted font-light mt-0.5 leading-relaxed max-w-[200px]">
          {description}
        </span>
      )}
    </div>
  );
}
