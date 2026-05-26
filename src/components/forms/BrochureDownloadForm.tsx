"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Download, CheckCircle, Loader2 } from "lucide-react";

const brochureSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10)
    .max(13)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  serviceInterest: z.string().optional(),
});

type BrochureFormData = z.infer<typeof brochureSchema>;

const inputClass =
  "w-full border-b border-border/70 bg-transparent px-0 py-3.5 text-sm text-charcoal placeholder:text-charcoal-muted/40 font-sans font-light outline-none transition-all duration-300 focus:border-clay rounded-none";

const labelClass =
  "block text-[11px] font-sans font-medium uppercase tracking-widest text-charcoal mb-2";

const errorClass = "mt-1.5 text-[11px] font-sans text-red-500 font-light";

// Replace with actual hosted PDF URL
const BROCHURE_URL = "/iicl-brochure.pdf";

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
    await new Promise((res) => setTimeout(res, 900));
    console.info("Brochure download request:", data);
    setSubmitted(true);
    // Trigger download
    const a = document.createElement("a");
    a.href = BROCHURE_URL;
    a.download = "IICL-Company-Brochure.pdf";
    a.click();
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center gap-4 py-10 text-center", className)}>
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-clay/10 border border-clay/20">
          <CheckCircle className="size-7 text-clay" />
        </div>
        <div className="space-y-1">
          <h3 className="font-heading text-xl font-light text-charcoal">Download Started</h3>
          <p className="text-xs text-charcoal-muted font-light">
            Your brochure should download automatically. Check your downloads folder.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
      noValidate
    >
      <div>
        <label htmlFor="bd-name" className={labelClass}>Your Name *</label>
        <input
          id="bd-name"
          type="text"
          autoComplete="name"
          placeholder="Full name"
          className={cn(inputClass, errors.name && "border-red-400/60")}
          {...register("name")}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="bd-email" className={labelClass}>Email *</label>
        <input
          id="bd-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className={cn(inputClass, errors.email && "border-red-400/60")}
          {...register("email")}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="bd-phone" className={labelClass}>Mobile Number *</label>
        <input
          id="bd-phone"
          type="tel"
          autoComplete="tel"
          placeholder="9119491193"
          className={cn(inputClass, errors.phone && "border-red-400/60")}
          {...register("phone")}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="bd-service" className={labelClass}>Service Interest</label>
        <select
          id="bd-service"
          className={inputClass}
          {...register("serviceInterest")}
        >
          <option value="">Any service…</option>
          <option value="residential">Residential Interiors</option>
          <option value="commercial">Commercial Interiors</option>
          <option value="industrial">Industrial Interiors</option>
          <option value="turnkey">Turnkey Projects</option>
          <option value="civil">Civil Engineering</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "w-full gap-3 disabled:opacity-60"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Preparing Download…
          </>
        ) : (
          <>
            <Download className="size-4" />
            Download Brochure (PDF)
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-charcoal-muted font-sans font-light">
        We never share your details with third parties.
      </p>
    </form>
  );
}
