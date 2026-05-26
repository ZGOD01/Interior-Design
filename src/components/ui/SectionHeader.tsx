import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  tagline,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-14 md:mb-20 space-y-4",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
      {...props}
    >
      {tagline && (
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <span className="tag-label">{tagline}</span>
        </div>
      )}
      
      <h2 className="font-heading text-3xl md:text-5xl font-light tracking-tight text-charcoal leading-[1.15]">
        {title}
      </h2>
      
      {description && (
        <p className="font-sans text-xs md:text-sm leading-relaxed text-charcoal-muted font-light mx-auto max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
