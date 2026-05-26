import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "clay" | "olive" | "sand" | "outline";
  className?: string;
}

export function Badge({ children, variant = "sand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-sans font-medium uppercase tracking-widest",
        variant === "clay" && "border-clay/25 bg-clay/10 text-clay",
        variant === "olive" && "border-olive/25 bg-olive/10 text-olive",
        variant === "sand" && "border-border/50 bg-sand/70 text-charcoal-muted",
        variant === "outline" && "border-border/60 bg-transparent text-charcoal-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
