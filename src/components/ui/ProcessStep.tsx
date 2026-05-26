import React from "react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function ProcessStep({ number, title, description, className }: ProcessStepProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 bg-card border border-border/40 rounded-[2rem] p-7 md:p-8 bento-shadow transition-studio hover:bento-shadow-hover hover:border-clay/20",
        className
      )}
    >
      {/* Decorative numbered badge */}
      <div className="flex items-center justify-between">
        <span className="font-heading text-4xl md:text-5xl font-extralight text-clay/20 transition-all duration-500 group-hover:text-clay/40">
          {number}
        </span>
        
        {/* Soft dot marker */}
        <span className="size-2 rounded-full bg-sand border border-border/60 transition-all group-hover:bg-clay/50 group-hover:scale-125" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h4 className="font-heading text-lg font-semibold text-charcoal tracking-tight group-hover:text-clay transition-all duration-300">
          {title}
        </h4>
        <p className="text-xs leading-relaxed text-charcoal-muted font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
