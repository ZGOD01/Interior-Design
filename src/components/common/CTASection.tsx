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
        variant === "sand" ? "bg-sand/30 border-y border-border/15" : "bg-background",
        className
      )}
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8 py-10 md:py-16">
          {tagline && (
            <p className="text-xs md:text-sm font-sans font-medium tracking-[0.3em] text-clay uppercase">
              {tagline}
            </p>
          )}

          <h2 className="font-heading text-4xl md:text-6xl font-extralight tracking-tight text-charcoal leading-[1.1] max-w-3xl mx-auto">
            {title}
          </h2>

          {description && (
            <p className="max-w-xl mx-auto text-sm text-charcoal-muted leading-relaxed font-sans font-light">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href={primaryHref}
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto gap-2 rounded-full px-8 py-6")}
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </Link>

            {whatsapp ? (
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto gap-2 border-border/70 rounded-full px-8 py-6")}
              >
                <MessageCircle className="size-4 text-clay" />
                WhatsApp Us
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto rounded-full px-8 py-6")}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
