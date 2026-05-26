"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(13, "Phone number too long")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  serviceType: z.enum(
    ["residential", "commercial", "industrial", "turnkey", "civil"],
    { error: "Please select a service type" }
  ),
  projectLocation: z.string().min(3, "Please enter your project location"),
  budget: z.string().optional(),
  message: z.string().max(500, "Message too long").optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const inputClass =
  "w-full border-b border-border/70 bg-transparent px-0 py-3.5 text-sm text-charcoal placeholder:text-charcoal-muted/40 font-sans font-light outline-none transition-all duration-300 focus:border-clay rounded-none";

const labelClass = "block text-[11px] font-sans font-medium uppercase tracking-widest text-charcoal mb-2";

const errorClass = "mt-1.5 text-[11px] font-sans text-red-500 font-light";

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
    // Simulate API call — replace with actual form submission endpoint
    await new Promise((res) => setTimeout(res, 1200));
    console.info("Consultation form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-5 py-16 text-center", className)}>
        <div className="inline-flex size-16 items-center justify-center rounded-full bg-clay/10 border border-clay/20">
          <CheckCircle className="size-8 text-clay" />
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-light text-charcoal">Request Received</h3>
          <p className="text-sm text-charcoal-muted font-light max-w-sm">
            Our team will contact you within 24 hours to schedule your free consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="cf-name" className={labelClass}>Full Name *</label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Rajesh Kulkarni"
            className={cn(inputClass, errors.name && "border-red-400/60")}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className={labelClass}>Email *</label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="rajesh@example.com"
            className={cn(inputClass, errors.email && "border-red-400/60")}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className={labelClass}>Mobile Number *</label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="9119491193"
            className={cn(inputClass, errors.phone && "border-red-400/60")}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="cf-service" className={labelClass}>Service Required *</label>
          <select
            id="cf-service"
            className={cn(inputClass, errors.serviceType && "border-red-400/60")}
            {...register("serviceType")}
          >
            <option value="">Select a service…</option>
            <option value="residential">Residential Interiors</option>
            <option value="commercial">Commercial Interiors</option>
            <option value="industrial">Industrial Interiors</option>
            <option value="turnkey">Turnkey Projects</option>
            <option value="civil">Civil Engineering</option>
          </select>
          {errors.serviceType && <p className={errorClass}>{errors.serviceType.message}</p>}
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="cf-location" className={labelClass}>Project Location *</label>
          <input
            id="cf-location"
            type="text"
            placeholder="Hinjawadi, Pune"
            className={cn(inputClass, errors.projectLocation && "border-red-400/60")}
            {...register("projectLocation")}
          />
          {errors.projectLocation && <p className={errorClass}>{errors.projectLocation.message}</p>}
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="cf-budget" className={labelClass}>Approximate Budget</label>
          <select
            id="cf-budget"
            className={inputClass}
            {...register("budget")}
          >
            <option value="">Select budget range…</option>
            <option value="5-15L">₹5L – ₹15L</option>
            <option value="15-30L">₹15L – ₹30L</option>
            <option value="30-75L">₹30L – ₹75L</option>
            <option value="75L+">₹75L+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={labelClass}>Additional Details</label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Tell us about your project — scope, timeline, special requirements…"
          className={cn(inputClass, "resize-none")}
          {...register("message")}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
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
            Submitting…
          </>
        ) : (
          <>
            Book Free Consultation
            <ArrowRight className="size-4" />
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-charcoal-muted font-sans font-light">
        No spam. Our team will reach out within 24 hours.
      </p>
    </form>
  );
}
