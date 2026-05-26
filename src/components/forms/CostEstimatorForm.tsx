"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Calculator, ArrowRight, Loader2 } from "lucide-react";

const estimatorSchema = z.object({
  projectType: z.enum(
    ["residential", "commercial", "industrial", "turnkey", "civil"],
    { error: "Select a project type" }
  ),
  carpetArea: z
    .number({ error: "Enter carpet area in sq. ft." })
    .min(100, "Minimum 100 sq. ft.")
    .max(100000, "Please contact us for larger projects"),
  qualityTier: z.enum(["standard", "premium", "luxury"], {
    error: "Select a quality tier",
  }),
  timelineUrgency: z.enum(["flexible", "normal", "urgent"]).optional(),
});

type EstimatorFormData = z.infer<typeof estimatorSchema>;

// Approximate per sq. ft. rates (INR) — for indicative purposes only
const rateMatrix: Record<string, Record<string, { min: number; max: number }>> = {
  residential: { standard: { min: 1200, max: 1800 }, premium: { min: 1800, max: 2800 }, luxury: { min: 2800, max: 5000 } },
  commercial:  { standard: { min: 1400, max: 2000 }, premium: { min: 2000, max: 3200 }, luxury: { min: 3200, max: 6000 } },
  industrial:  { standard: { min: 900,  max: 1400 }, premium: { min: 1400, max: 2200 }, luxury: { min: 2200, max: 3500 } },
  turnkey:     { standard: { min: 1600, max: 2400 }, premium: { min: 2400, max: 4000 }, luxury: { min: 4000, max: 7500 } },
  civil:       { standard: { min: 800,  max: 1200 }, premium: { min: 1200, max: 1800 }, luxury: { min: 1800, max: 3000 } },
};

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

interface EstimateResult {
  min: number;
  max: number;
}

const inputClass =
  "w-full border-b border-border/70 bg-transparent px-0 py-3.5 text-sm text-charcoal placeholder:text-charcoal-muted/40 font-sans font-light outline-none transition-all duration-300 focus:border-clay rounded-none";
const labelClass =
  "block text-[11px] font-sans font-medium uppercase tracking-widest text-charcoal mb-2";
const errorClass = "mt-1.5 text-[11px] font-sans text-red-500 font-light";

export function CostEstimatorForm({ className }: { className?: string }) {
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EstimatorFormData>({
    resolver: zodResolver(estimatorSchema),
    defaultValues: { qualityTier: "premium", timelineUrgency: "normal" },
  });

  const onSubmit = async (data: EstimatorFormData) => {
    await new Promise((res) => setTimeout(res, 700));
    const rate = rateMatrix[data.projectType]?.[data.qualityTier];
    if (!rate) return;
    const urgencyMultiplier = data.timelineUrgency === "urgent" ? 1.1 : 1;
    setEstimate({
      min: Math.round(data.carpetArea * rate.min * urgencyMultiplier),
      max: Math.round(data.carpetArea * rate.max * urgencyMultiplier),
    });
  };

  return (
    <div className={cn("space-y-8", className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Project Type */}
          <div>
            <label htmlFor="ce-type" className={labelClass}>Project Type *</label>
            <select id="ce-type" className={cn(inputClass, errors.projectType && "border-red-400/60")} {...register("projectType")}>
              <option value="">Select type…</option>
              <option value="residential">Residential Interiors</option>
              <option value="commercial">Commercial Interiors</option>
              <option value="industrial">Industrial Interiors</option>
              <option value="turnkey">Turnkey Project</option>
              <option value="civil">Civil Engineering</option>
            </select>
            {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
          </div>

          {/* Carpet Area */}
          <div>
            <label htmlFor="ce-area" className={labelClass}>Carpet Area (sq. ft.) *</label>
            <Controller
              name="carpetArea"
              control={control}
              render={({ field }) => (
                <input
                  id="ce-area"
                  type="number"
                  min={100}
                  placeholder="e.g. 1200"
                  className={cn(inputClass, errors.carpetArea && "border-red-400/60")}
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(e.target.value === "" ? undefined : Number(e.target.value))}
                />
              )}
            />
            {errors.carpetArea && <p className={errorClass}>{errors.carpetArea.message}</p>}
          </div>

          {/* Quality Tier */}
          <div>
            <label htmlFor="ce-tier" className={labelClass}>Quality Tier *</label>
            <select id="ce-tier" className={cn(inputClass, errors.qualityTier && "border-red-400/60")} {...register("qualityTier")}>
              <option value="standard">Standard (Functional & Clean)</option>
              <option value="premium">Premium (Our Most Popular)</option>
              <option value="luxury">Luxury (Ultra-High End)</option>
            </select>
            {errors.qualityTier && <p className={errorClass}>{errors.qualityTier.message}</p>}
          </div>

          {/* Timeline Urgency */}
          <div>
            <label htmlFor="ce-urgency" className={labelClass}>Timeline Preference</label>
            <select id="ce-urgency" className={inputClass} {...register("timelineUrgency")}>
              <option value="flexible">Flexible (Best pricing)</option>
              <option value="normal">Normal (Standard timeline)</option>
              <option value="urgent">Urgent (10% premium applies)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full gap-3 disabled:opacity-60")}
        >
          {isSubmitting ? (
            <><Loader2 className="size-4 animate-spin" /> Calculating…</>
          ) : (
            <><Calculator className="size-4" /> Get Indicative Estimate</>
          )}
        </button>
      </form>

      {/* Result Panel */}
      {estimate && (
        <div className="rounded-2xl border border-clay/25 bg-clay/5 p-7 space-y-4">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-clay">
            Indicative Project Estimate
          </p>
          <div className="font-heading text-3xl md:text-4xl font-light text-charcoal">
            {formatINR(estimate.min)}{" "}
            <span className="text-charcoal-muted text-2xl">–</span>{" "}
            {formatINR(estimate.max)}
          </div>
          <p className="text-[11px] text-charcoal-muted font-sans font-light leading-relaxed">
            This is an indicative range based on industry averages. Your actual project cost will be determined after a site audit and detailed BOQ. Contact us for a precise zero-obligation quote.
          </p>
          <a
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2 mt-2")}
          >
            Get Exact Quote <ArrowRight className="size-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
