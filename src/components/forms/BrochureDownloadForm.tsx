"use client";

/**
 * BrochureDownloadForm — Gated PDF Download
 *
 * TODO (Backend Integration):
 *  - Store lead: supabase.from('brochure_leads').insert(formData)
 *  - Send brochure email: Resend/EmailJS with PDF attachment or link
 *  - Replace BROCHURE_URL with actual hosted PDF path
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Download, CheckCircle, Loader2, Lock, FileText } from "lucide-react";

// Replace with actual hosted PDF path when available
const BROCHURE_URL = "/iicl-brochure.pdf";

// ── Schema ───────────────────────────────────────────────────────────────────
const brochureSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(13)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().email("Please enter a valid email address"),
  serviceInterest: z.string().optional(),
});

type BrochureFormData = z.infer<typeof brochureSchema>;

const F = {
  label: "form-label",
  input: "form-input",
  inputErr: "form-input form-input-error",
  error: "form-error",
};

// ── Success State ─────────────────────────────────────────────────────────────
function SuccessState() {
  return (
    <div className="form-success animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="relative">
        <div className="form-success-icon">
          <CheckCircle className="size-7 text-clay" strokeWidth={1.5} />
        </div>
        <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-background border border-border/40 flex items-center justify-center">
          <FileText className="size-3.5 text-clay" />
        </div>
      </div>
      <div className="space-y-2 max-w-xs">
        <h3 className="font-heading text-xl font-light text-charcoal">Brochure Downloading</h3>
        <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
          Thank you. The IICL team will contact you shortly to discuss your project. Your brochure should appear in your downloads folder.
        </p>
      </div>
      <div className="flex items-center gap-1.5 text-xs md:text-sm text-charcoal-muted/40 font-sans">
        <Lock className="size-3" />
        We&apos;ll only use your details to contact you about your project.
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export function BrochureDownloadForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BrochureFormData>({
    resolver: zodResolver(brochureSchema),
  });

  const onSubmit = async (data: BrochureFormData) => {
    // TODO: Replace with real backend integration
    await new Promise((res) => setTimeout(res, 900));
    console.info("[IICL] Brochure download request:", data);
    setSubmitted(true);
    // Trigger browser download
    const a = document.createElement("a");
    a.href = BROCHURE_URL;
    a.download = "IICL-Company-Brochure.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (submitted) return <SuccessState />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
      noValidate
      aria-label="Download company brochure"
    >
      {/* Name */}
      <div>
        <label htmlFor="bd-name" className={F.label}>Your Name *</label>
        <input
          id="bd-name"
          type="text"
          autoComplete="name"
          placeholder="Full name"
          className={cn(errors.name ? F.inputErr : F.input)}
          {...register("name")}
        />
        {errors.name && <p className={F.error}>{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="bd-phone" className={F.label}>Mobile Number *</label>
        <input
          id="bd-phone"
          type="tel"
          autoComplete="tel"
          placeholder="91194 91193"
          className={cn(errors.phone ? F.inputErr : F.input)}
          {...register("phone")}
        />
        {errors.phone && <p className={F.error}>{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="bd-email" className={F.label}>Email Address *</label>
        <input
          id="bd-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className={cn(errors.email ? F.inputErr : F.input)}
          {...register("email")}
        />
        {errors.email && <p className={F.error}>{errors.email.message}</p>}
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="bd-service" className={F.label}>
          Primary Interest{" "}
          <span className="normal-case tracking-normal text-charcoal-muted/50 font-light">(optional)</span>
        </label>
        <select id="bd-service" className={F.input} {...register("serviceInterest")}>
          <option value="">Any service…</option>
          <option value="residential">Residential Interiors</option>
          <option value="commercial">Commercial Interiors</option>
          <option value="industrial">Industrial Interiors</option>
          <option value="turnkey">Turnkey Projects</option>
          <option value="civil">Civil Engineering</option>
        </select>
      </div>

      {/* Submit */}
      <div className="space-y-3 pt-1">
        <button
          type="submit"
          id="bd-submit"
          disabled={isSubmitting}
          className="form-submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Preparing PDF…
            </>
          ) : (
            <>
              <Download className="size-4" />
              Download Brochure
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
