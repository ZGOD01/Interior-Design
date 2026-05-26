import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tagline,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24 space-y-4",
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left w-full",
        className
      )}
    >
      {tagline && (
        <p className="text-xs md:text-sm font-sans font-medium tracking-[0.3em] text-clay uppercase">
          {tagline}
        </p>
      )}

      <h2 className="font-heading text-3xl md:text-5xl font-extralight text-charcoal tracking-tight leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-xs md:text-sm text-charcoal-muted leading-relaxed font-sans font-light max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
