import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CostEstimatorForm } from "@/components/forms/CostEstimatorForm";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Space Planning Estimator | Get an Indicative Interior Cost | IIC Limited",
  description:
    "Use IIC Limited's free space planning tool to get an indicative budget range for your interior project in Pune. Takes 2 minutes. No obligations.",
  alternates: {
    canonical: "https://www.iiclimited.com/estimate",
  },
  openGraph: {
    title: "Space Planning Estimator | IIC Limited Pune",
    description:
      "Get an indicative interior design budget in 2 minutes. Free, no obligations.",
    url: "https://www.iiclimited.com/estimate",
    type: "website",
    images: [
      {
        url: "https://www.iiclimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIC Limited Space Planning Estimator",
      },
    ],
  },
};

// Trust items shown alongside the form
const trustItems = [
  {
    icon: "🏗️",
    label: "Locked BOQ Pricing",
    desc: "No hidden changes post-contract",
  },
  {
    icon: "👷",
    label: "Licensed Engineer On-Site",
    desc: "Supervised execution every day",
  },
  {
    icon: "📋",
    label: "Free Site Audit",
    desc: "Included before any BOQ is issued",
  },
  {
    icon: "🤝",
    label: "Zero Obligation",
    desc: "Estimate is free and non-binding",
  },
];

export default function EstimatePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.iiclimited.com" },
          { name: "Space Planning Estimator", url: "https://www.iiclimited.com/estimate" },
        ]}
      />
      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        {/* ── HERO ── */}
        <section className="py-16 md:py-20 border-b border-border/20">
          <Container>
            <div className="max-w-3xl space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-clay/40" aria-hidden />
                <span className="tag-label">Planning Tool</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.1]">
                Start with a quick estimate.
              </h1>
              <p className="font-sans text-base md:text-lg font-light text-charcoal-muted leading-relaxed max-w-xl">
                Share a few details and our team will help you understand the next step for your space.
              </p>
            </div>
          </Container>
        </section>

        {/* ── FORM + TRUST ── */}
        <Section variant="ivory" className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* LEFT: Form card */}
              <div className="lg:col-span-7">
                <div className="bg-card border border-border/40 rounded-[2rem] p-8 md:p-12 space-y-8">
                  <div className="space-y-1.5 border-b border-border/20 pb-6">
                    <span className="tag-label">2-Minute Estimate</span>
                    <h2 className="font-heading text-2xl font-light text-charcoal tracking-tight">
                      Plan My Space
                    </h2>
                    <p className="text-xs text-charcoal-muted font-sans font-light">
                      All estimates are indicative only. Exact pricing requires a free site audit.
                    </p>
                  </div>
                  <CostEstimatorForm />
                </div>
              </div>

              {/* RIGHT: Why choose + trust */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                {/* Trust items */}
                <div className="space-y-4">
                  <span className="tag-label">Why IICL</span>
                  <div className="space-y-3">
                    {trustItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 bg-card border border-border/30 rounded-2xl p-5"
                      >
                        <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
                        <div className="space-y-0.5">
                          <p className="text-sm font-sans font-semibold text-charcoal leading-none">
                            {item.label}
                          </p>
                          <p className="text-sm font-sans font-light text-charcoal-muted leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note card */}
                <div className="rounded-2xl border border-border/30 bg-sand/30 p-6 space-y-3">
                  <p className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-clay">
                    Good to know
                  </p>
                  <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                    Estimates are based on industry-average per sq. ft. rates for Pune. Your actual project cost will be locked in a detailed Bill of Quantities (BOQ) after a free site audit — with no hidden additions thereafter.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}
