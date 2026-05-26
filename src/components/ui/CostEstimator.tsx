"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, Home, Briefcase, Factory, Shield, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type SpatialType = "residential" | "commercial" | "industrial" | "turnkey";
type QualityTier = "standard" | "premium" | "luxury";

export function CostEstimator() {
  const [step, setStep] = useState<1 | 2>(1);
  const [type, setType] = useState<SpatialType>("residential");
  const [area, setArea] = useState<number>(1200);
  const [tier, setTier] = useState<QualityTier>("premium");
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  // Lead info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Base pricing indicators (per Sq. Ft. in Pune market)
  const priceMap: Record<SpatialType, Record<QualityTier, number>> = {
    residential: { standard: 1600, premium: 2400, luxury: 3800 },
    commercial: { standard: 1800, premium: 2800, luxury: 4200 },
    industrial: { standard: 1200, premium: 1800, luxury: 2600 },
    turnkey: { standard: 2200, premium: 3200, luxury: 4800 },
  };

  const calculateCost = () => {
    const rate = priceMap[type][tier];
    const base = area * rate;
    const low = base * 0.95;
    const high = base * 1.05;
    return {
      low: Math.round(low).toLocaleString("en-IN"),
      high: Math.round(high).toLocaleString("en-IN"),
      rate,
    };
  };

  const { low, high, rate } = calculateCost();

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-card border border-border/40 rounded-[2.5rem] bento-shadow overflow-hidden p-6 md:p-10 lg:p-12 transition-studio hover:border-clay/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Setup Panel */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="space-y-2">
            <span className="tag-label">Interactive Fitout Calculator</span>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-charcoal tracking-tight">
              Estimate Your Pune Project Fitout Cost
            </h3>
            <p className="text-sm text-charcoal-muted font-light leading-relaxed max-w-lg">
              Adjust the sliders below to calibrate raw structural areas and finish tiers to output an itemized budgeting baseline.
            </p>
          </div>

          {step === 1 ? (
            <div className="space-y-6 md:space-y-8">
              {/* Type Selection */}
              <div className="space-y-3">
                <label className="text-xs md:text-sm font-semibold tracking-widest text-charcoal uppercase block">
                  Step 1: Spatial Category
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(["residential", "commercial", "industrial", "turnkey"] as SpatialType[]).map((t) => {
                    const icons = {
                      residential: Home,
                      commercial: Briefcase,
                      industrial: Factory,
                      turnkey: Shield,
                    };
                    const Icon = icons[t];
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={cn(
                          "flex flex-col items-center justify-center p-4 rounded-2xl border transition-studio gap-2 bg-background cursor-pointer",
                          type === t
                            ? "border-clay bg-clay/[0.03] text-clay"
                            : "border-border/60 text-charcoal-muted hover:border-border hover:bg-sand/35"
                        )}
                      >
                        <Icon className="size-5" />
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider font-sans capitalize">
                          {t}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Area Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs md:text-sm font-semibold tracking-widest text-charcoal uppercase">
                    Step 2: Floor Area (Sq. Ft.)
                  </label>
                  <span className="text-sm font-semibold text-clay bg-sand border border-border/40 px-3 py-1 rounded-full">
                    {area.toLocaleString("en-IN")} Sq. Ft.
                  </span>
                </div>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="100"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-1 bg-sand border border-border/20 rounded-lg appearance-none cursor-pointer accent-clay"
                  />
                  <div className="flex justify-between text-xs md:text-sm text-charcoal-muted font-light">
                    <span>500 sq.ft.</span>
                    <span>12,000 sq.ft.</span>
                    <span>25,000+ sq.ft.</span>
                  </div>
                </div>
              </div>

              {/* Quality Tier selection */}
              <div className="space-y-3">
                <label className="text-xs md:text-sm font-semibold tracking-widest text-charcoal uppercase block">
                  Step 3: Material & Finish Tier
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(["standard", "premium", "luxury"] as QualityTier[]).map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setTier(q)}
                      className={cn(
                        "flex flex-col items-start p-4 rounded-2xl border transition-studio gap-1.5 bg-background cursor-pointer text-left",
                        tier === q
                          ? "border-clay bg-clay/[0.03] text-clay"
                          : "border-border/60 text-charcoal-muted hover:border-border hover:bg-sand/35"
                      )}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider font-sans capitalize block">
                        {q} Specs
                      </span>
                      <span className="text-xs md:text-sm font-light leading-snug">
                        {q === "standard" && "Certified materials, clean execution, baseline warranty."}
                        {q === "premium" && "Premium brands, textured paneling, extended warranties."}
                        {q === "luxury" && "Bespoke elements, custom lighting, biophilic fitouts."}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button onClick={handleNext} className="w-full justify-between group">
                  Next: Calculate Pricing
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-semibold tracking-widest text-charcoal uppercase block">
                      To lock your estimate & receive a written BOQ, enter your details:
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-sand/40 border border-border/60 rounded-xl px-4 py-3 text-sm md:text-base outline-none focus:border-clay/50 font-sans"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Contact Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-sand/40 border border-border/60 rounded-xl px-4 py-3 text-sm md:text-base outline-none focus:border-clay/50 font-sans"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button type="button" variant="outline" onClick={handleBack} className="w-1/3">
                      Modify
                    </Button>
                    <Button type="submit" className="w-2/3">
                      Secure Cost Sheet
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="bg-clay/[0.03] border border-clay/20 rounded-2xl p-6 space-y-4 text-center">
                  <CheckCircle className="size-8 text-clay mx-auto animate-bounce" />
                  <div className="space-y-1.5">
                    <h4 className="font-heading text-lg font-semibold text-charcoal">Estimate Secured</h4>
                    <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                      Thanks, <span className="font-medium text-charcoal">{name}</span>. A principal architect will contact you at <span className="font-medium text-charcoal">{phone}</span> within 2 hours to confirm your locked itemized BOQ specifications.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Cost Output Panel */}
        <div className="lg:col-span-5 bg-sand/50 border border-border/40 rounded-3xl p-6 md:p-8 space-y-6 text-center">
          <div className="space-y-1">
            <span className="tag-label uppercase tracking-widest block">
              Estimated Budget Baseline
            </span>
            <span className="text-xs md:text-sm text-charcoal-muted uppercase tracking-wider block">
              Based on ₹{rate}/sq.ft local Pune rates
            </span>
          </div>

          <div className="space-y-1 py-4 border-y border-border/40">
            <span className="text-xs md:text-sm text-charcoal-muted uppercase tracking-widest block">Approx. Range</span>
            <div className="font-heading text-2xl md:text-3xl lg:text-4xl font-extralight text-charcoal tracking-tight leading-none">
              ₹{low} <span className="text-lg text-clay/50 font-sans mx-1">to</span> ₹{high}
            </div>
            <span className="text-xs md:text-sm text-charcoal-muted font-light block pt-1">
              *Excluding local GST & PMC structural permissions.
            </span>
          </div>

          <ul className="space-y-3 text-left">
            <li className="flex items-start gap-2 text-sm text-charcoal-muted font-light">
              <CheckCircle className="size-4 text-clay shrink-0 mt-0.5" />
              <span>Locked itemized BOQ, no hidden costs.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-charcoal-muted font-light">
              <CheckCircle className="size-4 text-clay shrink-0 mt-0.5" />
              <span>Includes site engineers supervising civil works.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-charcoal-muted font-light">
              <CheckCircle className="size-4 text-clay shrink-0 mt-0.5" />
              <span>Backed by 5-Year written Structural Warranty.</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20discuss%20our%20estimated%20interior%20costs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full border border-border/80 bg-background text-charcoal text-sm uppercase tracking-widest font-semibold py-3.5 rounded-full transition-studio hover:border-clay/50 hover:text-clay"
            >
              <MessageCircle className="size-3.5 text-clay" />
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
