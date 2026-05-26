import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { buttonVariants } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Specialties | Interior Design & Turnkey Contracting Pune | IIC Limited",
  description:
    "IIC Limited delivers residential interiors, commercial office fitouts, industrial workspaces, civil engineering, and end-to-end turnkey projects in Pune with locked BOQ pricing.",
  keywords: [
    "interior design services Pune",
    "turnkey contractor Pune",
    "office fitout Pune",
    "residential interior Pune",
    "industrial interior Pune",
  ],
  alternates: {
    canonical: "https://www.iiclimited.com/services",
  },
  openGraph: {
    title: "Our Specialties | Interior Design & Contracting Services Pune | IIC Limited",
    description:
      "Residential, commercial, industrial interiors and turnkey civil contracting in Pune by IIC Limited.",
    url: "https://www.iiclimited.com/services",
    type: "website",
    images: [
      {
        url: "https://www.iiclimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIC Limited Services — Interior Design Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services Pune | IIC Limited",
    description: "Residential, commercial, industrial, and turnkey interior contracting in Pune.",
    images: ["https://www.iiclimited.com/og-image.jpg"],
  },
};

const comparisonData = [
  {
    title: "Residential Interiors",
    forWho: "Homeowners & penthouse buyers seeking bespoke woodwork and custom spatial curation.",
    deliverables: "Boiling Water Proof wardrobes, modular kitchens, custom lighting design, and styling decor.",
    compliance: "Material certificates audit, zero-toxic wood checks, and internal partition society NOCs."
  },
  {
    title: "Commercial Interiors",
    forWho: "IT hubs, startup spaces, clinics, and retail firms planning custom focused workstation zones.",
    deliverables: "Acoustical meeting rooms, open-plan workspaces, cabling networks, and custom lobbys.",
    compliance: "Fire safety NOC coordination, HVAC air load audits, and corporate bylaws compliance."
  },
  {
    title: "Industrial Interiors",
    forWho: "Factory plants, labs, cleanrooms, and industrial warehouses in Pune MIDC nodes.",
    deliverables: "Anti-static epoxy floorings, dust-resistant cleanroom jointings, and soundproof observation boxes.",
    compliance: "ISO chemical resistance certifications, positive-pressure air seals, and safety clearances."
  },
  {
    title: "Turnkey Projects",
    forWho: "Property developers & corporate clients wishing to avoid coordinate friction across multiple contractors.",
    deliverables: "Single point of contact managing architectural concepts, procurement logistics, civil, and styling.",
    compliance: "Milestone-linked delay penalties, locked BOQs, and full legal stability NOCs."
  },
  {
    title: "Civil Engineering",
    forWho: "Commercial or residential complexes demanding slab load reinforcements or severe seepage repair.",
    deliverables: "Column steel carbon wrapping, concrete foundation underpinnings, and chemical waterproofing.",
    compliance: "Structural stability certificates officially stamped by licensed engineers."
  }
];

export default function ServicesIndexPage() {
  const whatsappUrl = "https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home",     url: "https://www.iiclimited.com" },
          { name: "Services", url: "https://www.iiclimited.com/services" },
        ]}
      />
      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        
        {/* ── 1. EDITORIAL HERO ── */}
        <section className="py-16 md:py-24 border-b border-border/20">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-clay/40" />
                <Badge variant="clay">Our Specialties</Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.1] max-w-2xl">
                Five Specialties. One Accountability.
              </h1>

              <p className="font-sans text-lg font-light text-clay leading-relaxed tracking-tight max-w-xl">
                From commercial acoustics and industrial MIDC clearances to luxury penthouses, we provide certified turnkey site management.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 2. SERVICES BENTO GRID ── */}
        <Section variant="ivory" className="border-b border-border/40 py-20 md:py-28">
          <Container className="space-y-12">
            
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              
              {/* 1. Turnkey Projects (Large Card: Colspan 4) */}
              <div className="md:col-span-4 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[380px] md:min-h-[420px] transition-all duration-700 hover:border-clay/30">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                    alt="Turnkey construction coordination by IICL"
                    fill
                    className="object-cover opacity-15 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent" />
                </div>

                <div className="relative z-10 space-y-2">
                  <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-clay">
                    COMPLETE SINGLE ACCOUNTABILITY
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-charcoal">
                    Turnkey Projects
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed max-w-md pt-1">
                    Let us assume full responsibility for your workspace or residential build. We handle concept architecture, material sourcing, structural clearances, and contracting in Pune, ensuring complete budget security and timeline adherence.
                  </p>
                </div>

                <div className="relative z-10 pt-6 flex justify-between items-end border-t border-border/30">
                  <div className="flex flex-wrap gap-4 text-xs md:text-sm text-charcoal-muted/80 font-sans font-light">
                    <span>✓ Single Contact</span>
                    <span>✓ Guaranteed Deadlines</span>
                    <span>✓ Locked-In BOQ</span>
                  </div>
                  <Link 
                    href="/services/turnkey-projects"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-clay hover:text-charcoal transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Explore Service <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 2. Residential Interiors (Standard Card: Colspan 2) */}
              <div className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[380px] md:min-h-[420px] transition-all duration-700 hover:border-clay/30">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
                    alt="Bespoke luxury residential interior"
                    fill
                    className="object-cover opacity-15 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent" />
                </div>

                <div className="relative z-10 space-y-2">
                  <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-clay">
                    MODERN LIVING SPACES
                  </span>
                  <h3 className="font-heading text-2xl font-light text-charcoal">
                    Residential Interiors
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed pt-1">
                    Bespoke high-end homes, modular kitchens, customized bedrooms, and elegant lounges that balance functionality and architectural whitespace.
                  </p>
                </div>

                <div className="relative z-10 pt-6 flex justify-between items-end border-t border-border/30">
                  <span className="text-xs md:text-sm font-sans text-charcoal-muted/70 font-light">Custom Homes</span>
                  <Link 
                    href="/services/residential-interiors"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-clay hover:text-charcoal transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Explore <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 3. Commercial Interiors (Standard Card: Colspan 2) */}
              <div className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[350px] transition-all duration-700 hover:border-clay/30">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                    alt="Premium corporate office workspace"
                    fill
                    className="object-cover opacity-15 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent" />
                </div>

                <div className="relative z-10 space-y-2">
                  <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-clay">
                    COLLABORATIVE WORKSPACES
                  </span>
                  <h3 className="font-heading text-2xl font-light text-charcoal">
                    Commercial Interiors
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed pt-1">
                    Corporate office layouts, acoustical meeting rooms, corporate lounges, and high-productivity work setups designed for modern teams.
                  </p>
                </div>

                <div className="relative z-10 pt-6 flex justify-between items-end border-t border-border/30">
                  <span className="text-xs md:text-sm font-sans text-charcoal-muted/70 font-light">Office Fitouts</span>
                  <Link 
                    href="/services/commercial-interiors"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-clay hover:text-charcoal transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Explore <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 4. Industrial Interiors (Standard Card: Colspan 2) */}
              <div className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[350px] transition-all duration-700 hover:border-clay/30">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                    alt="High compliance industrial facility interior"
                    fill
                    className="object-cover opacity-15 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent" />
                </div>

                <div className="relative z-10 space-y-2">
                  <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-clay">
                    HIGH-COMPLIANCE PLANTS
                  </span>
                  <h3 className="font-heading text-2xl font-light text-charcoal">
                    Industrial Interiors
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed pt-1">
                    Epoxy floors, laboratory partitions, warehouse spaces, control rooms, and industrial office modules complying with regulatory codes.
                  </p>
                </div>

                <div className="relative z-10 pt-6 flex justify-between items-end border-t border-border/30">
                  <span className="text-xs md:text-sm font-sans text-charcoal-muted/70 font-light">MIDC Industrial</span>
                  <Link 
                    href="/services/industrial-interiors"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-clay hover:text-charcoal transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Explore <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* 5. Civil Engineering (Standard Card: Colspan 2) */}
              <div className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[350px] transition-all duration-700 hover:border-clay/30">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
                    alt="Structural civil engineering and foundation setup"
                    fill
                    className="object-cover opacity-15 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent" />
                </div>

                <div className="relative z-10 space-y-2">
                  <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.25em] text-clay">
                    STRUCTURAL INTEGRITY
                  </span>
                  <h3 className="font-heading text-2xl font-light text-charcoal">
                    Civil Engineering
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed pt-1">
                    Concrete foundations, load-bearing frames, partition re-modelling, and structural waterproofing to ensure solid interior layouts.
                  </p>
                </div>

                <div className="relative z-10 pt-6 flex justify-between items-end border-t border-border/30">
                  <span className="text-xs md:text-sm font-sans text-charcoal-muted/70 font-light">Stability Certified</span>
                  <Link 
                    href="/services/civil-engineering"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-clay hover:text-charcoal transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Explore <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

            </div>
          </Container>
        </Section>

        {/* ── 3. SERVICE COMPARISON MATRIX ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
          <Container className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">Specialty Mapping</span>
              <h2 className="font-heading text-3xl font-light text-charcoal tracking-tight">
                Specialty Comparison
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">
                Compare typical deliverables and engineering compliance standards across our divisions.
              </p>
            </div>

            {/* Comparison Cards Grid (Fully Responsive) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {comparisonData.map((item) => (
                <div 
                  key={item.title} 
                  className="bg-card border border-border/50 rounded-[1.5rem] p-6 space-y-5"
                >
                  <div className="space-y-1 border-b border-border/20 pb-3">
                    <h3 className="font-heading text-lg font-light text-charcoal leading-none">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-sans font-semibold tracking-wider text-clay uppercase">WHO IT IS FOR</span>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                        {item.forWho}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-sans font-semibold tracking-wider text-clay uppercase">KEY DELIVERABLES</span>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                        {item.deliverables}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-sans font-semibold tracking-wider text-clay uppercase">ENGINEERING COMPLIANCE</span>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                        {item.compliance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── 4. FINAL CTA SECTION ── */}
        <section className="relative py-20 md:py-28 bg-sand/35">
          <Container>
            <div className="relative rounded-[2rem] border border-border/50 overflow-hidden bg-card p-8 md:p-16 lg:p-20 text-center max-w-4xl mx-auto shadow-sm">
              <div aria-hidden className="absolute top-0 right-0 size-80 rounded-full bg-clay/[0.03] -mr-20 -mt-20 blur-3xl" />
              
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <span className="tag-label">Initiate site audit</span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
                  Ready to construct your project with certified engineering?
                </h2>
                <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                  Book a detailed 1-hour site consultation. Our engineering leads will inspect your physical layout, assess structural limits, and provide a line-by-line initial BOQ baseline without obligations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full sm:w-auto justify-between group rounded-full px-8 py-5 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    Plan Your Project
                    <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
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
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Floating actions & mobile sticky CTAs */}
        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}
