import React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  "Written BOQ — 100% itemized, zero hidden costs",
  "5-Year Structural Warranty on all civil works",
  "Penalty clause for delayed handovers",
  "Daily on-site certified engineer supervision",
  "Premium-grade authentic materials — verified",
];

interface TrustStripProps {
  className?: string;
}

export function TrustStrip({ className }: TrustStripProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5",
        className
      )}
    >
      {trustItems.map((item) => (
        <div
          key={item}
          className="flex items-center gap-2 text-sm font-sans font-light text-charcoal-muted"
        >
          <ShieldCheck className="size-3.5 shrink-0 text-clay" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
