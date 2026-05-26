"use client";

/**
 * ConsultationForm — Full Booking Form
 * 
 * TODO (Backend Integration):
 * Replace the onSubmit placeholder with one of:
 *  - Resend: POST to /api/send-consultation with form data
 *  - EmailJS: emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
 *  - Supabase: supabase.from('leads').insert(formData)
 *  - Custom: fetch('/api/consultation', { method: 'POST', body: JSON.stringify(formData) })
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle, Loader2, Lock } from "lucide-react";

// ── Schema ──────────────────────────────────────────────────────────────────
const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(13, "Phone number too long")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z
    .string()
    .optional()
    .refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
      message: "Enter a valid email address",
    }),
  projectType: z.enum(
    ["residential", "commercial", "industrial", "turnkey", "civil"],
    { error: "Please select a project type" }
  ),
  location: z.string().min(2, "Please enter your project location"),
  area: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().max(500, "Please keep message under 500 characters").optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

// ── Shared field classes ─────────────────────────────────────────────────────
const F = {
  label: "form-label",
  input: "form-input",
  inputErr: "form-input form-input-error",
  error: "form-error",
};

// ── Success State ────────────────────────────────────────────────────────────
function SuccessState() {
  return (
    <div className="form-success animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="form-success-icon">
        <CheckCircle className="size-7 text-clay" strokeWidth={1.5} />
      </div>
      <div className="space-y-2.5 max-w-xs">
        <h3 className="font-heading text-2xl font-light text-charcoal">
          Request Received
        </h3>
        <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
          Thank you. The IICL team will contact you shortly to discuss your project.
        </p>
      </div>
      <div className="flex items-center gap-2 text-xs md:text-sm text-charcoal-muted/50 font-sans">
        <Lock className="size-3" />
        We&apos;ll only use your details to contact you about your project.
      </div>
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────
export function ConsultationForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    // TODO: Replace with real backend/email/CRM integration
    await new Promise((res) => setTimeout(res, 1200));
    console.info("[IICL] Consultation form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) return <SuccessState />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-7", className)}
      noValidate
      aria-label="Book a free consultation"
    >
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="cf-name" className={F.label}>Full Name *</label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Rajesh Kulkarni"
            className={cn(errors.name ? F.inputErr : F.input)}
            {...register("name")}
          />
          {errors.name && <p className={F.error}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="cf-phone" className={F.label}>Mobile Number *</label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="91194 91193"
            className={cn(errors.phone ? F.inputErr : F.input)}
            {...register("phone")}
          />
          {errors.phone && <p className={F.error}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Row 2: Email + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="cf-email" className={F.label}>
            Email{" "}
            <span className="normal-case tracking-normal text-charcoal-muted/50 font-light">(optional)</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="rajesh@company.com"
            className={cn(errors.email ? F.inputErr : F.input)}
            {...register("email")}
          />
          {errors.email && <p className={F.error}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="cf-type" className={F.label}>Project Type *</label>
          <select
            id="cf-type"
            className={cn(errors.projectType ? F.inputErr : F.input)}
            {...register("projectType")}
          >
            <option value="">Select type…</option>
            <option value="residential">Residential Interiors</option>
            <option value="commercial">Commercial Interiors</option>
            <option value="industrial">Industrial Interiors</option>
            <option value="turnkey">Turnkey Project</option>
            <option value="civil">Civil Engineering</option>
          </select>
          {errors.projectType && <p className={F.error}>{errors.projectType.message}</p>}
        </div>
      </div>

      {/* Row 3: Location + Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="cf-location" className={F.label}>Project Location *</label>
          <input
            id="cf-location"
            type="text"
            placeholder="Baner, Pune"
            className={cn(errors.location ? F.inputErr : F.input)}
            {...register("location")}
          />
          {errors.location && <p className={F.error}>{errors.location.message}</p>}
        </div>

        <div>
          <label htmlFor="cf-area" className={F.label}>
            Approx. Area{" "}
            <span className="normal-case tracking-normal text-charcoal-muted/50 font-light">(sq. ft.)</span>
          </label>
          <input
            id="cf-area"
            type="text"
            placeholder="e.g. 1,200 sq. ft."
            className={F.input}
            {...register("area")}
          />
        </div>
      </div>

      {/* Row 4: Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="cf-budget" className={F.label}>Budget Range</label>
          <select id="cf-budget" className={F.input} {...register("budget")}>
            <option value="">Select budget…</option>
            <option value="under-5L">Under ₹5L</option>
            <option value="5-15L">₹5L – ₹15L</option>
            <option value="15-30L">₹15L – ₹30L</option>
            <option value="30-75L">₹30L – ₹75L</option>
            <option value="75L+">₹75L and above</option>
          </select>
        </div>

        <div>
          <label htmlFor="cf-timeline" className={F.label}>Timeline</label>
          <select id="cf-timeline" className={F.input} {...register("timeline")}>
            <option value="">Select timeline…</option>
            <option value="asap">As soon as possible</option>
            <option value="1-3m">Within 1–3 months</option>
            <option value="3-6m">3–6 months</option>
            <option value="flexible">Flexible / planning stage</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={F.label}>
          Additional Details{" "}
          <span className="normal-case tracking-normal text-charcoal-muted/50 font-light">(optional)</span>
        </label>
        <textarea
          id="cf-message"
          rows={3}
          placeholder="Share anything that would help us understand your space…"
          className={cn(F.input, "resize-none")}
          {...register("message")}
        />
        {errors.message && <p className={F.error}>{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <div className="space-y-3 pt-1">
        <button
          type="submit"
          id="cf-submit"
          disabled={isSubmitting}
          className="form-submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Book Free Consultation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        <p className="form-privacy flex items-center justify-center gap-1.5">
          <Lock className="size-3 opacity-50" />
          We&apos;ll only use your details to contact you about your project.
        </p>
      </div>
    </form>
  );
}
