"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, ClipboardList, AlertCircle } from "lucide-react";

interface ChecklistItem {
  stage: string;
  checks: string[];
  focus: string;
}

const qaChecklists: ChecklistItem[] = [
  {
    stage: "01. Concrete & Brick Stability Stage",
    checks: [
      "Waterproofing barrier integrity (3-layer pressure grouting test)",
      "Core-cut mapping to avoid reinforcing steel shears",
      "Plumb alignment checks (tolerance under 2mm over 3 meters)"
    ],
    focus: "Structural Safety"
  },
  {
    stage: "02. Framing & Cabinet Sourcing Stage",
    checks: [
      "Commercial IS-710 marine plywood moisture balance test (below 12%)",
      "Anti-termite batch injection along floor channels",
      "Heavy-duty hardware alignment calibration check"
    ],
    focus: "Material Longevity"
  },
  {
    stage: "03. Pre-Handover Finish Audit Stage",
    checks: [
      "Seamless laminate joints alignment inspection",
      "Acoustics felt backing and seals insulation decibel check",
      "150-Point comprehensive deep dust-free vacuum detailing"
    ],
    focus: "Move-in Ready State"
  }
];

export function QualityChecklistSection({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2 text-left max-w-xl">
        <span className="tag-label">Site Auditing</span>
        <h3 className="font-heading text-2xl md:text-3xl font-light text-charcoal">
          Our 150-Point QA Verification Checklist
        </h3>
        <p className="text-sm text-charcoal-muted font-sans font-light">
          We protect your project investment. Our in-house site engineers inspect every phase against strict structural stability codes and material grade guidelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {qaChecklists.map((item) => (
          <div
            key={item.stage}
            className="bg-card border border-border/40 rounded-[1.75rem] p-6 md:p-7 space-y-6 hover:border-clay/20 transition-studio relative flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-border/25 pb-4">
                <h4 className="font-heading text-base font-medium text-charcoal tracking-tight">
                  {item.stage}
                </h4>
                <span className="inline-flex bg-sand/40 border border-border/30 rounded-full px-2.5 py-0.5 text-xs font-sans font-semibold text-clay uppercase tracking-widest">
                  {item.focus}
                </span>
              </div>

              <ul className="space-y-4">
                {item.checks.map((check) => (
                  <li key={check} className="flex gap-3 text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                    <CheckCircle2 className="size-4 text-clay shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-border/10 flex items-center gap-2 text-xs md:text-sm text-charcoal-muted/50 font-sans mt-4">
              <ClipboardList className="size-3.5" />
              <span>Signed by Certified Engineer</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2.5 text-xs md:text-sm text-charcoal-muted/40 font-mono italic">
        <AlertCircle className="size-3.5 text-clay shrink-0" />
        <span>* TODO: Client receives a signed physical copy of the finalized 150-point QA clearance certificate upon key handover.</span>
      </div>
    </div>
  );
}
