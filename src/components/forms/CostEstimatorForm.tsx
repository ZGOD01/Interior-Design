"use client";

/**
 * CostEstimatorForm — Premium Space Planning Tool
 *
 * This is a two-step progressive form:
 *  Step 1: Project details (type, area, budget, timeline)
 *  Step 2: Contact details + submit → see estimate
 *
 * TODO (Backend Integration):
 *  - After step 2, POST to /api/estimate-request with all data
 *  - Store lead in Supabase / CRM
 *  - Send estimate email via Resend / EmailJS
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Loader2,
  Lock,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "919119491193";

// ── Schemas ───────────────────────────────────────────────────────────────────
const step1Schema = z.object({
  projectType: z.enum(
    ["residential", "commercial", "industrial", "turnkey", "civil"],
    { error: "Please select a project type" }
  ),
  area: z
    .number({ error: "Enter carpet area in sq. ft." })
    .min(100, "Minimum 100 sq. ft.")
    .max(100000, "Please contact us for larger projects"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().optional(),
});

const step2Schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(13)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  location: z.string().min(2, "Please enter your city"),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

// ── Rate matrix ───────────────────────────────────────────────────────────────
const rateMatrix: Record<string, Record<string, { min: number; max: number }>> = {
  residential: {
    "under-5L":  { min: 800,  max: 1200  },
    "5-15L":     { min: 1200, max: 1800  },
    "15-30L":    { min: 1800, max: 2800  },
    "30-75L":    { min: 2800, max: 4500  },
    "75L+":      { min: 4500, max: 8000  },
  },
  commercial: {
    "under-5L":  { min: 900,  max: 1400  },
    "5-15L":     { min: 1400, max: 2000  },
    "15-30L":    { min: 2000, max: 3200  },
    "30-75L":    { min: 3200, max: 5500  },
    "75L+":      { min: 5500, max: 10000 },
  },
  industrial: {
    "under-5L":  { min: 700,  max: 1000  },
    "5-15L":     { min: 1000, max: 1500  },
    "15-30L":    { min: 1500, max: 2200  },
    "30-75L":    { min: 2200, max: 3500  },
    "75L+":      { min: 3500, max: 6000  },
  },
  turnkey: {
    "under-5L":  { min: 1000, max: 1600  },
    "5-15L":     { min: 1600, max: 2400  },
    "15-30L":    { min: 2400, max: 4000  },
    "30-75L":    { min: 4000, max: 6500  },
    "75L+":      { min: 6500, max: 12000 },
  },
  civil: {
    "under-5L":  { min: 600,  max: 900   },
    "5-15L":     { min: 900,  max: 1300  },
    "15-30L":    { min: 1300, max: 2000  },
    "30-75L":    { min: 2000, max: 3200  },
    "75L+":      { min: 3200, max: 5500  },
  },
};

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

function computeEstimate(type: string, area: number, budget: string) {
  const rate = rateMatrix[type]?.[budget];
  if (!rate) return null;
  return { min: Math.round(area * rate.min), max: Math.round(area * rate.max) };
}

const F = {
  label: "form-label",
  input: "form-input",
  inputErr: "form-input form-input-error",
  error: "form-error",
};

// ── Success State ─────────────────────────────────────────────────────────────
function SuccessState({
  estimate,
  projectType,
  whatsappMsg,
}: {
  estimate: { min: number; max: number } | null;
  projectType: string;
  whatsappMsg: string;
}) {
  const typeLabel: Record<string, string> = {
    residential: "Residential Interiors",
    commercial: "Commercial Interiors",
    industrial: "Industrial Interiors",
    turnkey: "Turnkey Project",
    civil: "Civil Engineering",
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-3 duration-500 space-y-8">
      {/* Estimate Result */}
      {estimate && (
        <div className="rounded-[1.75rem] border border-clay/20 bg-clay/[0.04] p-7 md:p-9 space-y-4">
          <div className="flex items-center gap-2">
            <span className="form-step-pill">Indicative Estimate</span>
            <span className="text-xs md:text-sm text-charcoal-muted/50 font-sans">· {typeLabel[projectType] ?? projectType}</span>
          </div>
          <div className="font-heading text-4xl md:text-5xl font-light text-charcoal tracking-tight">
            {formatINR(estimate.min)}
            <span className="text-charcoal-muted/40 text-3xl mx-3">–</span>
            {formatINR(estimate.max)}
          </div>
          <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed max-w-sm">
            This is an indicative range based on industry averages and your stated budget. Your actual project cost will be confirmed after a free site audit and detailed BOQ.
          </p>
        </div>
      )}

      {/* Confirmation */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="form-success-icon">
          <CheckCircle className="size-6 text-clay" strokeWidth={1.5} />
        </div>
        <div className="space-y-1.5 max-w-xs">
          <h3 className="font-heading text-xl font-light text-charcoal">We&apos;ve received your request</h3>
          <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
            Thank you. The IICL team will contact you shortly to discuss your project.
          </p>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-sans font-medium text-charcoal transition-all duration-300 hover:border-[#25D366]/40 hover:text-[#25D366]"
        >
          <MessageCircle className="size-4" />
          Discuss on WhatsApp now
        </a>
        <div className="flex items-center gap-1.5 text-xs md:text-sm text-charcoal-muted/40 font-sans">
          <Lock className="size-3" />
          We&apos;ll only use your details to contact you about your project.
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function CostEstimatorForm({ className }: { className?: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappMsg, setWhatsappMsg] = useState("");

  // Step 1 form
  const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema) });
  const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema) });

  const onStep1 = (data: Step1Data) => {
    setStep1Data(data);
    setStep(2);
  };

  const onStep2 = async (data: Step2Data) => {
    // TODO: Replace with real backend integration
    const allData = { ...step1Data, ...data };
    await new Promise((res) => setTimeout(res, 1100));
    console.info("[IICL] Estimator submitted:", allData);

    const msg = encodeURIComponent(
      `Hi IICL, I want to discuss an interior project. Please contact me.\n\nProject: ${step1Data?.projectType}, Area: ${step1Data?.area} sq ft, Budget: ${step1Data?.budget}, Location: ${data.location}`
    );
    setWhatsappMsg(msg);
    setSubmitted(true);
  };

  const estimate =
    submitted && step1Data
      ? computeEstimate(step1Data.projectType, step1Data.area, step1Data.budget)
      : null;

  if (submitted && step1Data) {
    return (
      <div className={className}>
        <SuccessState
          estimate={estimate}
          projectType={step1Data.projectType}
          whatsappMsg={whatsappMsg}
        />
      </div>
    );
  }

  return (
    <div className={cn("space-y-8", className)}>
      {/* Step indicator */}
      <div className="flex items-center gap-3">
        <span className={cn("form-step-pill", step === 1 ? "bg-clay/10" : "opacity-40")}>
          Step 1 — Project
        </span>
        <ChevronRight className="size-3.5 text-charcoal-muted/40" />
        <span className={cn("form-step-pill", step === 2 ? "bg-clay/10" : "opacity-40")}>
          Step 2 — Contact
        </span>
      </div>

      {/* ── STEP 1 ── */}
      {step === 1 && (
        <form onSubmit={form1.handleSubmit(onStep1)} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {/* Project Type */}
            <div>
              <label htmlFor="ce-type" className={F.label}>Project Type *</label>
              <select
                id="ce-type"
                className={cn(form1.formState.errors.projectType ? F.inputErr : F.input)}
                {...form1.register("projectType")}
              >
                <option value="">Select type…</option>
                <option value="residential">Residential Interiors</option>
                <option value="commercial">Commercial Interiors</option>
                <option value="industrial">Industrial Interiors</option>
                <option value="turnkey">Turnkey Project</option>
                <option value="civil">Civil Engineering</option>
              </select>
              {form1.formState.errors.projectType && (
                <p className={F.error}>{form1.formState.errors.projectType.message}</p>
              )}
            </div>

            {/* Area */}
            <div>
              <label htmlFor="ce-area" className={F.label}>Approx. Area (sq. ft.) *</label>
              <input
                id="ce-area"
                type="number"
                min={100}
                placeholder="e.g. 1,200"
                className={cn(form1.formState.errors.area ? F.inputErr : F.input)}
                {...form1.register("area", { valueAsNumber: true })}
              />
              {form1.formState.errors.area && (
                <p className={F.error}>{form1.formState.errors.area.message}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="ce-budget" className={F.label}>Budget Range *</label>
              <select
                id="ce-budget"
                className={cn(form1.formState.errors.budget ? F.inputErr : F.input)}
                {...form1.register("budget")}
              >
                <option value="">Select budget…</option>
                <option value="under-5L">Under ₹5L</option>
                <option value="5-15L">₹5L – ₹15L</option>
                <option value="15-30L">₹15L – ₹30L</option>
                <option value="30-75L">₹30L – ₹75L</option>
                <option value="75L+">₹75L and above</option>
              </select>
              {form1.formState.errors.budget && (
                <p className={F.error}>{form1.formState.errors.budget.message}</p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="ce-timeline" className={F.label}>Timeline</label>
              <select id="ce-timeline" className={F.input} {...form1.register("timeline")}>
                <option value="">Select timeline…</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3m">Within 1–3 months</option>
                <option value="3-6m">3–6 months</option>
                <option value="flexible">Flexible / planning stage</option>
              </select>
            </div>
          </div>

          <button type="submit" className="form-submit">
            Continue to Contact Details
            <ChevronRight className="size-4" />
          </button>
          <p className="form-helper text-center">
            No estimate is locked — all numbers are indicative only.
          </p>
        </form>
      )}

      {/* ── STEP 2 ── */}
      {step === 2 && (
        <form onSubmit={form2.handleSubmit(onStep2)} className="space-y-6" noValidate>
          <div>
            <label htmlFor="ce-name" className={F.label}>Your Name *</label>
            <input
              id="ce-name"
              type="text"
              autoComplete="name"
              placeholder="Rajesh Kulkarni"
              className={cn(form2.formState.errors.name ? F.inputErr : F.input)}
              {...form2.register("name")}
            />
            {form2.formState.errors.name && (
              <p className={F.error}>{form2.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="ce-phone" className={F.label}>Mobile Number *</label>
            <input
              id="ce-phone"
              type="tel"
              autoComplete="tel"
              placeholder="91194 91193"
              className={cn(form2.formState.errors.phone ? F.inputErr : F.input)}
              {...form2.register("phone")}
            />
            {form2.formState.errors.phone && (
              <p className={F.error}>{form2.formState.errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="ce-location" className={F.label}>Your City / Area *</label>
            <input
              id="ce-location"
              type="text"
              placeholder="Baner, Pune"
              className={cn(form2.formState.errors.location ? F.inputErr : F.input)}
              {...form2.register("location")}
            />
            {form2.formState.errors.location && (
              <p className={F.error}>{form2.formState.errors.location.message}</p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-none rounded-full border border-border/60 px-6 py-4 text-sm font-sans font-medium text-charcoal-muted transition-all duration-300 hover:border-border hover:text-charcoal"
            >
              Back
            </button>
            <button
              type="submit"
              id="ce-submit"
              disabled={form2.formState.isSubmitting}
              className="form-submit flex-1"
            >
              {form2.formState.isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Getting Estimate…
                </>
              ) : (
                <>
                  Get My Estimate
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>
          </div>

          <p className="form-privacy flex items-center justify-center gap-1.5">
            <Lock className="size-3 opacity-50" />
            We&apos;ll only use your details to contact you about your project.
          </p>
        </form>
      )}
    </div>
  );
}
