"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRightLeft } from "lucide-react";

interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const beforeAfterShowcase: BeforeAfterItem[] = [
  {
    id: "residential-kp",
    title: "Koregaon Park Salon Living Room",
    description: "From a raw concrete pillar layout with low natural light to a minimalist ivory sanctuary maximizing spatial flow and soft timber warmth.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", // Raw tiled/concrete floor stage
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop", // Premium styled interior
    beforeLabel: "Structural Brick Stage",
    afterLabel: "Refined Handover"
  },
  {
    id: "commercial-hinjawadi",
    title: "Vertex Systems Corporate Lounge",
    description: "Re-engineering a complex commercial shell. Seamlessly integrated acoustic felt panel partitions and linear HVAC ducts into a styled workspace.",
    beforeImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop", // Under construction slab stage
    afterImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop", // Final workspace
    beforeLabel: "MEP Layout Setup",
    afterLabel: "Completed Office"
  }
];

export function BeforeAfterSection({ className }: { className?: string }) {
  const [activeItemIdx, setActiveItemIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const activeItem = beforeAfterShowcase[activeItemIdx];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border/20 pb-6">
        <div className="space-y-2 text-left">
          <span className="tag-label">Execution Blueprint</span>
          <h3 className="font-heading text-2xl md:text-3xl font-light text-charcoal">
            From Raw Concrete to Refined Handover
          </h3>
          <p className="text-sm text-charcoal-muted font-sans font-light max-w-md">
            Interactive comparisons showing our precision civil engineering shell work transitioning into custom design finishes.
          </p>
        </div>

        {/* Tab Switches */}
        <div className="flex bg-sand/30 border border-border/40 rounded-full p-1 self-start md:self-auto">
          {beforeAfterShowcase.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIdx(idx);
                setSliderPosition(50); // Reset slider
              }}
              className={cn(
                "px-5 py-2 rounded-full text-xs md:text-sm font-sans font-semibold uppercase tracking-wider transition-all duration-300",
                activeItemIdx === idx
                  ? "bg-deep-cta text-cta-text"
                  : "text-charcoal-muted hover:text-charcoal"
              )}
            >
              {idx === 0 ? "Residential" : "Commercial Workspace"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Interactive Compare Frame */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-border/40 bg-card select-none">
            {/* Before Image (Background layer) */}
            <Image
              src={activeItem.beforeImage}
              alt={activeItem.beforeLabel || "Before Phase"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-charcoal/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-xs font-sans font-semibold text-white uppercase tracking-wider">
              {activeItem.beforeLabel}
            </div>

            {/* After Image (Clipped layer) */}
            <div
              className="absolute inset-y-0 left-0 right-0 z-10 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src={activeItem.afterImage}
                alt={activeItem.afterLabel || "After Phase"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute bottom-6 right-6 z-20 bg-clay/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-xs font-sans font-semibold text-white uppercase tracking-wider">
                {activeItem.afterLabel}
              </div>
            </div>

            {/* Slider bar line */}
            <div
              className="absolute inset-y-0 z-20 w-[1.5px] bg-white cursor-ew-resize pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central handle button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 rounded-full bg-white text-charcoal border border-border shadow-md flex items-center justify-center">
                <ArrowRightLeft className="size-4 opacity-75" />
              </div>
            </div>

            {/* Invisible native input for responsive slide interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Drag to compare before and after stages"
            />
          </div>
          <div className="flex justify-between text-xs md:text-sm text-charcoal-muted/50 font-sans px-2">
            <span>← Swipe left / right to compare phases</span>
            <span>{activeItem.title}</span>
          </div>
        </div>

        {/* Right Side: Editorial text card */}
        <div className="lg:col-span-4 bg-card border border-border/30 rounded-[1.75rem] p-7 md:p-8 space-y-5 lg:h-full lg:flex lg:flex-col lg:justify-between">
          <div className="space-y-4">
            <span className="form-step-pill">Bespoke Case Study</span>
            <h4 className="font-heading text-xl font-light text-charcoal leading-tight tracking-tight">
              {activeItem.title}
            </h4>
            <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
              {activeItem.description}
            </p>
          </div>

          <div className="border-t border-border/20 pt-5 space-y-3.5">
            <div className="flex items-center justify-between text-sm font-sans">
              <span className="text-charcoal-muted">Slab Level Verification</span>
              <span className="font-semibold text-clay uppercase">Certified</span>
            </div>
            <div className="flex items-center justify-between text-sm font-sans">
              <span className="text-charcoal-muted">Plywood Moisture Test</span>
              <span className="font-semibold text-clay uppercase">Passed</span>
            </div>
            <div className="flex items-center justify-between text-sm font-sans">
              <span className="text-charcoal-muted">Locked Budget Variance</span>
              <span className="font-semibold text-clay uppercase">0% Escalation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
