import React from "react";
import { cn } from "@/lib/utils";

interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

const defaultSteps: ProcessStepItem[] = [
  { number: "01", title: "Discover", description: "Detailed structural site audit, spatial planning review, and style alignment." },
  { number: "02", title: "Design", description: "Photorealistic 3D rendering, custom modular designs, and material curation." },
  { number: "03", title: "Plan", description: "100% itemized BOQ estimation with locked line-item prices before execution." },
  { number: "04", title: "Execute", description: "Engineering-grade site supervision, strict milestone trackers." },
  { number: "05", title: "Handover", description: "150-point QA validation checklist, professional cleanup, keys handover." },
];

interface ProcessSectionProps {
  steps?: ProcessStepItem[];
  tagline?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function ProcessSection({
  steps = defaultSteps,
  tagline = "Structured Workflow",
  title = "The 5-Step Execution Roadmap",
  description = "Peace of mind contracting through standard operational stages. We coordinate every milestone.",
  className,
}: ProcessSectionProps) {
  return (
    <div className={cn("space-y-16 md:space-y-24", className)}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <p className="text-[10px] md:text-xs font-sans font-medium tracking-[0.3em] text-clay uppercase">
          {tagline}
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extralight text-charcoal tracking-tight leading-[1.15]">
          {title}
        </h2>
        {description && (
          <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">{description}</p>
        )}
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="group relative flex flex-col gap-4 pt-6 border-t border-border/30 hover:border-clay/35 transition-studio"
          >
            {/* Number */}
            <span className="font-heading text-2xl font-light italic text-clay/70">
              {step.number} {"//"}
            </span>

            <div className="space-y-2">
              <h3 className="font-sans text-sm font-medium text-charcoal">{step.title}</h3>
              <p className="text-xs text-charcoal-muted font-light leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
