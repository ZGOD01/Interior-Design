import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  accent?: "clay" | "olive";
}

export function FeatureCard({
  number,
  title,
  description,
  className,
  accent = "clay",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 py-8 px-4 transition-studio border-t border-border/25 hover:border-clay/30",
        className
      )}
    >
      {/* Number Index */}
      <span
        className={cn(
          "font-heading text-lg font-light tracking-[0.1em] italic",
          accent === "clay" ? "text-clay" : "text-olive"
        )}
      >
        {number} /
      </span>

      {/* Text Details */}
      <div className="space-y-2">
        <h3 className="font-sans text-base font-medium text-charcoal leading-snug">
          {title}
        </h3>
        <p className="text-xs text-charcoal-muted font-light leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
