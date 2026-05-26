import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "ivory" | "sand";
  spacing?: "default" | "sm" | "none";
}

export function Section({
  children,
  className,
  variant = "ivory",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        variant === "sand" ? "bg-sand" : "bg-background",
        spacing === "default" && "section-padding",
        spacing === "sm" && "section-padding-sm",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
