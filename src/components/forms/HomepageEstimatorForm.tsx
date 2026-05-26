"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

const homepageEstimatorSchema = z.object({
  projectType: z.enum(
    ["residential", "commercial", "industrial", "turnkey", "civil"],
    { error: "Select your project type" }
  ),
  approxArea: z
    .number({ error: "Enter approximate area in sq. ft." })
    .min(100, "Minimum 100 sq. ft. required")
    .max(100000, "For very large spaces, please contact us directly"),
  location: z
    .string()
    .min(3, "Please enter a valid neighborhood or area in Pune"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
});

type HomepageEstimatorFormData = z.infer<typeof homepageEstimatorSchema>;

const rateMatrix: Record<string, { min: number; max: number }> = {
  residential: { min: 1800, max: 2800 },
  commercial: { min: 2000, max: 3200 },
  industrial: { min: 1400, max: 2200 },
  turnkey: { min: 2400, max: 4000 },
  civil: { min: 1200, max: 1800 },
};

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} Lakh`;
  return `₹${n.toLocaleString("en-IN")}`;
}

const inputClass =
  "w-full border-b border-border/80 bg-transparent px-0 py-3.5 text-base text-charcoal placeholder:text-charcoal-muted/30 font-sans font-light outline-none transition-all duration-300 focus:border-clay rounded-none";
const labelClass =
  "block text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-clay mb-1";
const errorClass = "mt-1.5 text-xs font-sans text-red-500 font-light";

export function HomepageEstimatorForm({ className }: { className?: string }) {
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);
  const [submittedData, setSubmittedData] = useState<HomepageEstimatorFormData | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<HomepageEstimatorFormData>({
    resolver: zodResolver(homepageEstimatorSchema),
  });

  const onSubmit = async (data: HomepageEstimatorFormData) => {
    // Simulate API lead save and calculation latency
    await new Promise((res) => setTimeout(res, 900));
    const rates = rateMatrix[data.projectType];
    if (rates) {
      setEstimate({
        min: data.approxArea * rates.min,
        max: data.approxArea * rates.max,
      });
      setSubmittedData(data);
    }
  };

  const handleReset = () => {
    setEstimate(null);
    setSubmittedData(null);
    reset();
  };

  return (
    <div className={cn("w-full transition-studio", className)}>
      {!estimate ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Project Type */}
            <div className="relative">
              <label htmlFor="hp-type" className={labelClass}>Project Type</label>
              <select
                id="hp-type"
                className={cn(inputClass, errors.projectType && "border-red-400/60")}
                {...register("projectType")}
              >
                <option value="">Choose space type…</option>
                <option value="residential">Residential Interiors</option>
                <option value="commercial">Commercial Interiors</option>
                <option value="industrial">Industrial Interiors</option>
                <option value="turnkey">Turnkey Design-Build</option>
                <option value="civil">Civil Engineering & Contracting</option>
              </select>
              {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
            </div>

            {/* Approx Area */}
            <div className="relative">
              <label htmlFor="hp-area" className={labelClass}>Approx Area (Sq. Ft.)</label>
              <Controller
                name="approxArea"
                control={control}
                render={({ field }) => (
                  <input
                    id="hp-area"
                    type="number"
                    placeholder="e.g. 1500"
                    className={cn(inputClass, errors.approxArea && "border-red-400/60")}
                    value={field.value ?? ""}
                    onChange={(e) =>
                      field.onChange(e.target.value === "" ? undefined : Number(e.target.value))
                    }
                  />
                )}
              />
              {errors.approxArea && <p className={errorClass}>{errors.approxArea.message}</p>}
            </div>

            {/* Location in Pune */}
            <div className="relative">
              <label htmlFor="hp-location" className={labelClass}>Location (Neighborhood in Pune)</label>
              <input
                id="hp-location"
                type="text"
                placeholder="e.g. Koregaon Park, Baner, Kharadi"
                className={cn(inputClass, errors.location && "border-red-400/60")}
                {...register("location")}
              />
              {errors.location && <p className={errorClass}>{errors.location.message}</p>}
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label htmlFor="hp-phone" className={labelClass}>Mobile Number (For verification)</label>
              <input
                id="hp-phone"
                type="tel"
                placeholder="e.g. 9876543210"
                className={cn(inputClass, errors.phone && "border-red-400/60")}
                {...register("phone")}
              />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full md:w-auto px-10 py-6 rounded-full group flex items-center justify-center gap-3 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Generating Estimate…
                </>
              ) : (
                <>
                  Get My Estimate
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="p-8 md:p-12 bg-ivory border border-border/60 rounded-[1.5rem] space-y-6 animate-fadeIn">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-clay/10 rounded-full shrink-0">
              <CheckCircle2 className="size-6 text-clay" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-heading text-xl md:text-2xl font-light text-charcoal">
                Estimate Calculated Successfully
              </h3>
              <p className="text-sm text-charcoal-muted font-light leading-relaxed font-sans">
                Based on current Pune market material rates and structural parameters, your indicative design-build range is:
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-card border border-border/40 rounded-xl text-center space-y-2">
            <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.25em] text-clay">
              Estimated Investment Range
            </span>
            <div className="font-heading text-3xl md:text-5xl font-light text-charcoal tracking-tight">
              {formatINR(estimate.min)} <span className="text-charcoal-muted text-xl md:text-2xl font-sans font-light mx-2">to</span> {formatINR(estimate.max)}
            </div>
            <p className="text-sm text-charcoal-muted font-sans font-light">
              *Includes structural core setups, premium finishes, design styling, and handover.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
              We have logged your request for <strong className="font-medium text-charcoal">{submittedData?.approxArea} sq. ft.</strong> at <strong className="font-medium text-charcoal">{submittedData?.location}</strong>. 
              Our site coordinator will reach out to you shortly at <strong className="font-medium text-charcoal">+91 {submittedData?.phone}</strong> to offer a free 1-hour site measurement audit and detailed itemized BOQ list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "w-full sm:w-auto px-6 py-4 justify-center rounded-full bg-clay text-white hover:bg-clay-hover"
                )}
              >
                Confirm Free Site Audit
              </a>
              <button
                onClick={handleReset}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "w-full sm:w-auto px-6 py-4 justify-center rounded-full border-border/80 text-charcoal-muted hover:bg-card"
                )}
              >
                Calculate Another Space
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
