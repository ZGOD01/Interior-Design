"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Phone, CheckCircle, Loader2 } from "lucide-react";

const callbackSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(13)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  preferredTime: z.enum(
    ["morning", "afternoon", "evening"],
    { error: "Select a preferred time" }
  ),
});

type CallbackFormData = z.infer<typeof callbackSchema>;

const inputClass =
  "w-full border-b border-border/70 bg-transparent px-0 py-3.5 text-sm text-charcoal placeholder:text-charcoal-muted/40 font-sans font-light outline-none transition-all duration-300 focus:border-clay rounded-none";

const labelClass =
  "block text-[11px] font-sans font-medium uppercase tracking-widest text-charcoal mb-2";

const errorClass = "mt-1.5 text-[11px] font-sans text-red-500 font-light";

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
    await new Promise((res) => setTimeout(res, 1000));
    console.info("Callback form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center gap-4 py-10 text-center", className)}>
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-clay/10 border border-clay/20">
          <CheckCircle className="size-7 text-clay" />
        </div>
        <div className="space-y-1">
          <h3 className="font-heading text-xl font-light text-charcoal">We&apos;ll Call You Back!</h3>
          <p className="text-xs text-charcoal-muted font-light">
            Expect a call during your preferred time slot.
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
        <label htmlFor="cb-name" className={labelClass}>Your Name *</label>
        <input
          id="cb-name"
          type="text"
          autoComplete="name"
          placeholder="Full name"
          className={cn(inputClass, errors.name && "border-red-400/60")}
          {...register("name")}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="cb-phone" className={labelClass}>Mobile Number *</label>
        <input
          id="cb-phone"
          type="tel"
          autoComplete="tel"
          placeholder="9119491193"
          className={cn(inputClass, errors.phone && "border-red-400/60")}
          {...register("phone")}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="cb-time" className={labelClass}>Preferred Call Time *</label>
        <select
          id="cb-time"
          className={cn(inputClass, errors.preferredTime && "border-red-400/60")}
          {...register("preferredTime")}
        >
          <option value="">Select a time slot…</option>
          <option value="morning">Morning (9am – 12pm)</option>
          <option value="afternoon">Afternoon (12pm – 4pm)</option>
          <option value="evening">Evening (4pm – 7pm)</option>
        </select>
        {errors.preferredTime && (
          <p className={errorClass}>{errors.preferredTime.message}</p>
        )}
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
            Requesting Callback…
          </>
        ) : (
          <>
            <Phone className="size-4" />
            Request a Callback
          </>
        )}
      </button>
    </form>
  );
}
