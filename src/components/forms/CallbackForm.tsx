"use client";

/**
 * CallbackForm — Quick Callback Request
 *
 * TODO (Backend Integration):
 *  - Resend: POST to /api/send-callback
 *  - EmailJS: emailjs.send(SERVICE_ID, 'callback_template', formData)
 *  - Supabase: supabase.from('callbacks').insert(formData)
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Phone, CheckCircle, Loader2, MessageCircle, Lock } from "lucide-react";

const WHATSAPP_NUMBER = "919119491193";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi IICL, I want to discuss an interior project. Please contact me."
);

// ── Schema ───────────────────────────────────────────────────────────────────
const callbackSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(13)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    error: "Please select a preferred time",
  }),
});

type CallbackFormData = z.infer<typeof callbackSchema>;

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
      <div className="form-success-icon">
        <CheckCircle className="size-7 text-clay" strokeWidth={1.5} />
      </div>
      <div className="space-y-2 max-w-xs">
        <h3 className="font-heading text-xl font-light text-charcoal">Callback Requested</h3>
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

// ── Component ─────────────────────────────────────────────────────────────────
export function CallbackForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CallbackFormData>({
    resolver: zodResolver(callbackSchema),
  });

  const onSubmit = async (data: CallbackFormData) => {
    // TODO: Replace with real backend integration
    await new Promise((res) => setTimeout(res, 1000));
    console.info("[IICL] Callback form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) return <SuccessState />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
      noValidate
      aria-label="Request a callback"
    >
      {/* Name */}
      <div>
        <label htmlFor="cb-name" className={F.label}>Your Name *</label>
        <input
          id="cb-name"
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
        <label htmlFor="cb-phone" className={F.label}>Mobile Number *</label>
        <input
          id="cb-phone"
          type="tel"
          autoComplete="tel"
          placeholder="91194 91193"
          className={cn(errors.phone ? F.inputErr : F.input)}
          {...register("phone")}
        />
        {errors.phone && <p className={F.error}>{errors.phone.message}</p>}
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="cb-time" className={F.label}>Best Time to Call *</label>
        <select
          id="cb-time"
          className={cn(errors.preferredTime ? F.inputErr : F.input)}
          {...register("preferredTime")}
        >
          <option value="">Pick a time slot…</option>
          <option value="morning">Morning — 9 am to 12 pm</option>
          <option value="afternoon">Afternoon — 12 pm to 4 pm</option>
          <option value="evening">Evening — 4 pm to 7 pm</option>
        </select>
        {errors.preferredTime && (
          <p className={F.error}>{errors.preferredTime.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-1">
        <button
          type="submit"
          id="cb-submit"
          disabled={isSubmitting}
          className="form-submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Requesting…
            </>
          ) : (
            <>
              <Phone className="size-4" />
              Request a Callback
            </>
          )}
        </button>

        {/* WhatsApp alternate */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-border/60 px-8 py-3.5 text-sm font-sans font-medium text-charcoal transition-all duration-300 hover:border-[#25D366]/50 hover:text-[#25D366]"
        >
          <MessageCircle className="size-4" />
          Or message on WhatsApp
        </a>

        <p className="form-privacy flex items-center justify-center gap-1.5">
          <Lock className="size-3 opacity-50" />
          We&apos;ll only use your details to contact you about your project.
        </p>
      </div>
    </form>
  );
}
