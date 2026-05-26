import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { buttonVariants } from "@/components/ui/button";
import { TeamPreviewSection } from "@/components/trust/TeamPreviewSection";
import { CertificationsSection } from "@/components/trust/CertificationsSection";
import { SiteExecutionTrustSection } from "@/components/trust/SiteExecutionTrustSection";

export const metadata: Metadata = {
  title: "Our Story | Design Studio & Turnkey Contractor | IIC Limited Pune",
  description:
    "Learn how IIC Limited bridges creative interior design with civil engineering precision in Pune. A team of architects, structural engineers, and project leads under one roof.",
  keywords: ["about IIC Limited", "interior design studio Pune", "turnkey contractor background", "Pune design firm"],
  alternates: {
    canonical: "https://www.iiclimited.com/about",
  },
  openGraph: {
    title: "Our Story | IIC Limited — Interior Design Studio Pune",
    description:
      "Learn how IIC Limited bridges creative interior design with civil engineering precision in Pune.",
    url: "https://www.iiclimited.com/about",
    type: "website",
    images: [
      {
        url: "https://www.iiclimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIC Limited Studio — About Our Design Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | IIC Limited Pune",
    description: "Design studio and turnkey civil contractor in Pune. One team for creative design and structural execution.",
    images: ["https://www.iiclimited.com/og-image.jpg"],
  },
};

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20IIC%20Limited.";

  return (
    <>
      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        
        {/* ── 1. EDITORIAL HERO ── */}
        <section className="py-16 md:py-24 border-b border-border/20">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-clay/40" />
                <Badge variant="clay">Our Story</Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.1] max-w-2xl">
                Built on taste. Executed with engineering discipline.
              </h1>

              <p className="font-sans text-lg font-light text-clay leading-relaxed tracking-tight max-w-xl">
                IIC Limited was founded to bridge the gap between creative interior design studios and local construction contractors in Pune.
              </p>
            </div>
            
            {/* Large Image Block */}
            <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden border border-border/30 bg-sand/15 mt-12 md:mt-16 p-1.5">
              <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
                  alt="IICL curated interior space"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ── 2. THE BRAND STORY & ETHOS ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="tag-label">The Studio Ethos</span>
                <h2 className="font-heading text-3xl font-light text-charcoal tracking-tight leading-snug">
                  Why Design Taste Meets On-Site Discipline
                </h2>
                <div className="w-12 h-[1px] bg-clay" />
              </div>

              <div className="lg:col-span-7 bg-card rounded-[1.5rem] border border-border/40 p-8 md:p-10 space-y-6">
                <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-sans font-light">
                  Most homeowners and business managers hiring an interior designer in Pune faces a common dilemma: designers draft photorealistic 3D sheets but possess little knowledge of structural loads, MEP (electrical/plumbing) routing, or local authority clearances. Conversely, local civil builders lack refined style and spatial aesthetics.
                </p>
                <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-sans font-light">
                  IIC Limited operates as a single unified team. Our principal architects establish spatial flow and curate material textures, while our in-house licensed civil engineers supervise layout dimensions, concrete pours, and structural clearances. The result is a space completed exactly as rendered, without budget escalation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/20 pt-6">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="size-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-charcoal">Licensed Civil Leads</h4>
                      <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed">Safety-first coordination for internal structural modifications.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-charcoal">Locked Pricing BOQ</h4>
                      <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed">Locked line-item pricing agreements. No surprise costs.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </Section>

        {/* ── 3. LEADERSHIP & TEAM PREVIEW ── */}
        <Section variant="ivory" className="border-b border-border/20 py-20 md:py-28">
          <Container>
            <TeamPreviewSection />
          </Container>
        </Section>

        {/* ── 4. SITE EXECUTION GUARANTEES ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-28 bg-sand/20">
          <Container>
            <SiteExecutionTrustSection />
          </Container>
        </Section>

        {/* ── 5. STRUCTURAL CERTIFICATIONS & BADGES ── */}
        <Section variant="ivory" className="border-b border-border/20 py-20 md:py-28">
          <Container>
            <CertificationsSection />
          </Container>
        </Section>

        {/* ── 5. FINAL ABOUT CTA ── */}
        <section className="relative py-20 md:py-28 bg-sand/35">
          <Container>
            <div className="relative rounded-[2rem] border border-border/50 overflow-hidden bg-card p-8 md:p-16 lg:p-20 text-center max-w-4xl mx-auto shadow-sm">
              <div aria-hidden className="absolute top-0 right-0 size-80 rounded-full bg-clay/[0.03] -mr-20 -mt-20 blur-3xl" />
              
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <span className="tag-label">Initiate site audit</span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
                  Ready to plan your space with clarity?
                </h2>
                <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                  Book a free site measurement audit in Pune limits. Let our civil engineers inspect load limits, concrete parameters, and provide an initial itemized BOQ list.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full sm:w-auto justify-between group rounded-full px-8 py-5 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    Book Site Audit
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full sm:w-auto gap-2 border-border/80 rounded-full px-8 py-5 hover:bg-background transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    <MessageCircle className="size-4 text-clay" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Floating actions and mobile sticky CTAs */}
        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}
