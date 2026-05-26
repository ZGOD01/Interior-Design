import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/button";

interface CTASectionProps {
  tagline?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  whatsapp?: boolean;
  className?: string;
  variant?: "ivory" | "sand";
}

export function CTASection({
  tagline = "Ready to Begin?",
  title,
  description,
  primaryLabel = "Book Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "View Our Projects",
  secondaryHref = "/projects",
  whatsapp = true,
  className,
  variant = "sand",
}: CTASectionProps) {
  const whatsappNumber = "919119491193";
  const whatsappMsg = encodeURIComponent(
    "Hello, I'd like to book a free consultation for interior design and turnkey contracting."
  );

  return (
    <section
      className={cn(
        "section-padding",
        variant === "sand" ? "bg-sand/60 border-y border-border/40" : "bg-background",
        className
      )}
    >
      <Container>
        <div className="relative rounded-[2.5rem] border border-border/40 overflow-hidden bg-card p-8 md:p-16 lg:p-20 bento-shadow text-center">
          {/* Subtle architectural background details */}
          <div 
            aria-hidden
            className="absolute top-0 right-0 size-80 rounded-full bg-clay/[0.02] -mr-20 -mt-20 blur-3xl"
          />
          <div 
            aria-hidden
            className="absolute bottom-0 left-0 size-80 rounded-full bg-olive/[0.02] -ml-20 -mb-20 blur-3xl"
          />

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            {tagline && (
              <div className="flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-clay/30" />
                <span className="tag-label">{tagline}</span>
                <span className="w-8 h-px bg-clay/30" />
              </div>
            )}

            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.1]">
              {title}
            </h2>

            {description && (
              <p className="max-w-xl mx-auto text-sm md:text-base text-charcoal-muted leading-relaxed font-light">
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Primary Action */}
              <Link
                href={primaryHref}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto")}
              >
                {primaryLabel}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </Link>

              {/* Secondary or WhatsApp action */}
              {whatsapp ? (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto gap-2 border-border/70")}
                >
                  <MessageCircle className="size-4 text-clay" />
                  WhatsApp Us
                </a>
              ) : (
                <Link
                  href={secondaryHref}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
