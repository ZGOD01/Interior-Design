"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { HardHat, FileCheck, Layers, ClipboardCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TrustPoint {
  icon: React.ElementType;
  title: string;
  label: string;
  desc: string;
}

const trustPoints: TrustPoint[] = [
  {
    icon: ClipboardCheck,
    title: "100% Itemized Locked BOQ",
    label: "FINANCIAL CLARITY",
    desc: "We deliver complete line-item specifications with fixed pricing agreements. No budget variations or surprise builder markups post-signing."
  },
  {
    icon: HardHat,
    title: "In-House Licensed Engineers",
    label: "STRUCTURAL SAFETY",
    desc: "Licensed civil engineering partners supervise site parameters, load transfers, and compliance rather than outsourcing to random contractors."
  },
  {
    icon: Layers,
    title: "Rigorous Material Batch Testing",
    label: "TACTILE QUALITY",
    desc: "Every batch of timber, marine plywood, electrical wiring, and sealant is checked for moisture levels and fire compliance on delivery."
  },
  {
    icon: FileCheck,
    title: "Single accountability turnkey",
    label: "ZERO COORDINATION FRICTION",
    desc: "We oversee architecture concepts, design sheets, materials procurement, contracting, and municipal clearances under one team."
  }
];

export function SiteExecutionTrustSection({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-12", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left side copy */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <span className="tag-label">Execution Ethos</span>
            <h3 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
              A calmer way to execute interior projects.
            </h3>
          </div>
          <p className="text-base text-charcoal-muted font-sans font-light leading-relaxed">
            Beautiful concepts are meaningless without proper execution discipline. At IIC Limited, we manage spatial designs alongside rigorous engineering standards to ensure your completed space is exactly as rendered, stable, and delivered on schedule.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-deep-cta text-cta-text px-6 py-3.5 text-sm md:text-base font-sans font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-clay"
            >
              Discuss Your Space
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Right side bento cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card border border-border/40 rounded-2xl p-5 hover:border-clay/20 transition-studio flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2 rounded-full bg-clay/5 border border-clay/10 text-clay shrink-0 w-fit">
                    <Icon className="size-4.5" strokeWidth={1.5} />
                  </div>
                  <span className="block text-xs font-sans font-semibold tracking-widest text-clay uppercase">
                    {item.label}
                  </span>
                  <h4 className="font-heading text-base font-light text-charcoal leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
