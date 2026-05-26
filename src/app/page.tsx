"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Building, 
  Layers, 
  Sparkles,
  ClipboardCheck,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HomepageEstimatorForm } from "@/components/forms/HomepageEstimatorForm";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { BeforeAfterSection } from "@/components/trust/BeforeAfterSection";
import { ClientLogosSection } from "@/components/trust/ClientLogosSection";
import { ReviewIntegrationPlaceholder } from "@/components/trust/ReviewIntegrationPlaceholder";
import { QualityChecklistSection } from "@/components/trust/QualityChecklistSection";

import { projectsData } from "@/data/projects";
import { faqsData } from "@/data/faqs";

const customEase = [0.16, 1, 0.3, 1] as const;

// Framer Motion Animation Variants
const fUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: customEase }
};

const fScaleReveal = {
  initial: { opacity: 0, scale: 0.96, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: customEase }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-80px" }
};

export default function Home() {
  const whatsappUrl = "https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20turnkey%20interior%20services.";

  const formattedFaqs = faqsData.map((faq, idx) => ({
    id: faq.id || `faq-${idx}`,
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <>
      <Header />

      <main className="flex-1 overflow-x-hidden bg-background pt-20 pb-28 md:pb-0">
        
        {/* ── 1. HERO SECTION (LEFT-RIGHT EDITORIAL SPLIT) ── */}
        <section className="relative min-h-[90vh] flex flex-col justify-center py-16 md:py-24 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Headline, Copy, Action CTAs, Trust Note */}
              <div className="lg:col-span-5 space-y-8 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: customEase }}
                >
                  <span className="text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.25em] text-clay">
                    PUNE&apos;S PREMIER DESIGN-BUILD STUDIO
                  </span>
                </motion.div>

                <motion.h1 
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.05] max-w-lg"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
                >
                  Interiors that feel <span className="italic font-normal text-clay">calm</span>, refined, and built to last.
                </motion.h1>

                <motion.p 
                  className="text-base md:text-lg text-charcoal-muted leading-8 font-sans font-light max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
                >
                  IICL helps homeowners, offices, commercial spaces, and industrial clients plan and execute interiors with clear coordination, quality finishes, and reliable handover.
                </motion.p>

                {/* CTA buttons */}
                <motion.div 
                  className="flex flex-wrap gap-4 items-center pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                >
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full sm:w-auto justify-between group rounded-full px-8 py-6 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    Book Free Consultation
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/projects"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full sm:w-auto justify-center rounded-full px-8 py-6 border-border/80 text-charcoal hover:bg-card transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    View Projects
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full sm:w-auto gap-2 border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/5 rounded-full px-8 py-6 transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    <MessageCircle className="size-4 shrink-0" />
                    WhatsApp Us
                  </a>
                </motion.div>

                {/* Small Trust Note */}
                <motion.div
                  className="pt-2 border-t border-border/30 max-w-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-sm text-charcoal-muted font-sans font-light flex flex-wrap gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-clay shrink-0" />
                      In-house civil engineers
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-clay shrink-0" />
                      5-Year structural warranty
                    </span>
                  </p>
                </motion.div>
              </div>

              {/* Right Side: Large Image, Overlapping Smaller Image, Floating Trust Card */}
              <div className="lg:col-span-7 flex justify-center items-center relative">
                <motion.div 
                  className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-[2rem] overflow-hidden border border-border/20 bg-sand/15"
                  initial={{ opacity: 0, scale: 0.97, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.3, ease: customEase }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                    alt="Elegant modern living room with warm minimal furnishings"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  
                  {/* Floating Trust Card (Only One) */}
                  <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-4.5 shadow-sm text-left max-w-[210px] hidden sm:block z-10 animate-fadeIn">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="size-2 rounded-full bg-clay" />
                      <p className="text-xs md:text-sm font-sans font-semibold tracking-wider text-clay uppercase">
                        STUDIO STANDARDS
                      </p>
                    </div>
                    <p className="font-heading text-lg font-light text-charcoal leading-tight">
                      Turnkey Project Execution
                    </p>
                    <p className="text-xs text-charcoal-muted font-light mt-1">
                      Design concept to certified site handover, managed entirely by IICL.
                    </p>
                  </div>
                </motion.div>

                {/* Overlapping Smaller Image Card */}
                <motion.div
                  className="absolute bottom-[-30px] left-[-20px] w-64 h-48 rounded-2xl border border-border/50 bg-card overflow-hidden p-1.5 shadow-md hidden sm:block z-10 bg-card/95 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: customEase }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                      alt="Bespoke kitchen design details by IICL"
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          </Container>
        </section>

        {/* ── 2. MINIMAL TRUST STRIP (4 NON-NUMERIC TRUST POINTS) ── */}
        <section className="border-y border-border/50 bg-sand/20 py-8">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center items-center text-center sm:text-left">
              
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start px-2">
                <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0">
                  <MapPin className="size-4.5 text-clay" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal uppercase tracking-wider">Pune-Based Team</h4>
                  <p className="text-xs text-charcoal-muted font-sans font-light mt-0.5">Serving municipal limits & suburbs</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start px-2 border-t sm:border-t-0 pt-4 sm:pt-0 sm:border-l border-border/30">
                <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0">
                  <Building className="size-4.5 text-clay" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal uppercase tracking-wider">Bespoke Expertise</h4>
                  <p className="text-xs text-charcoal-muted font-sans font-light mt-0.5">Residential to industrial scale</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start px-2 border-t lg:border-t-0 pt-4 lg:pt-0 lg:border-l border-border/30">
                <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0">
                  <Layers className="size-4.5 text-clay" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal uppercase tracking-wider">Turnkey Execution</h4>
                  <p className="text-xs text-charcoal-muted font-sans font-light mt-0.5">Full design-build single accountability</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start px-2 border-t lg:border-t-0 pt-4 lg:pt-0 lg:border-l border-border/30">
                <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0">
                  <Sparkles className="size-4.5 text-clay" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-charcoal uppercase tracking-wider">Consultation-First</h4>
                  <p className="text-xs text-charcoal-muted font-sans font-light mt-0.5">Detailed upfront planning & locked BOQ</p>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ── 3. SERVICES BENTO GRID ── */}
        <Section variant="ivory" className="border-b border-border/40 py-20 md:py-28">
          <Container className="space-y-16">
            <motion.div 
              className="text-center max-w-2xl mx-auto space-y-4"
              {...fUp}
            >
              <span className="tag-label">Specialist Capabilities</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-charcoal tracking-tight leading-[1.15]">
                Curated Design, Engaged Execution.
              </h2>
              <p className="text-base md:text-lg text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">
                Discover our specialized divisions, each built with fine taste and certified structural stability to deliver seamless environments in Pune.
              </p>
            </motion.div>

            {/* Bento Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-6 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              
              {/* 1. Turnkey Projects (Large Card: Colspan 4) */}
              <motion.div 
                variants={fUp}
                className="md:col-span-4 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[380px] md:min-h-[420px] transition-all duration-700 hover:border-clay/30"
              >
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
                  <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-clay">
                    COMPLETE SINGLE ACCOUNTABILITY
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-light text-charcoal">
                    Turnkey Projects
                  </h3>
                  <p className="text-base text-charcoal-muted font-sans font-light leading-relaxed max-w-md pt-1">
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
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-[0.2em] text-clay hover:text-charcoal transition-colors shrink-0 group-hover:translate-x-1 duration-300"
                  >
                    Explore Service <ArrowRight className="size-3" />
                  </Link>
                </div>
              </motion.div>

              {/* 2. Residential Interiors (Standard Card: Colspan 2) */}
              <motion.div 
                variants={fUp}
                className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[380px] md:min-h-[420px] transition-all duration-700 hover:border-clay/30"
              >
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
              </motion.div>

              {/* 3. Commercial Interiors (Standard Card: Colspan 2) */}
              <motion.div 
                variants={fUp}
                className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[350px] transition-all duration-700 hover:border-clay/30"
              >
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
              </motion.div>

              {/* 4. Industrial Interiors (Standard Card: Colspan 2) */}
              <motion.div 
                variants={fUp}
                className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[350px] transition-all duration-700 hover:border-clay/30"
              >
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
              </motion.div>

              {/* 5. Civil Engineering (Standard Card: Colspan 2) */}
              <motion.div 
                variants={fUp}
                className="md:col-span-2 rounded-[2rem] border border-border/50 bg-card overflow-hidden group relative flex flex-col justify-between p-8 min-h-[350px] transition-all duration-700 hover:border-clay/30"
              >
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
              </motion.div>

            </motion.div>
          </Container>
        </Section>

        {/* ── 4. DESIGN + EXECUTION ETHOS STORY (SPLIT GRID) ── */}
        <Section variant="sand" className="border-b border-border/40 bg-sand/20 py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Large Beautiful Image */}
              <div className="lg:col-span-6 relative">
                <motion.div 
                  className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-[2rem] overflow-hidden border border-border/20 bg-card"
                  {...fScaleReveal}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                    alt="Architectural details, warm woods, minimal finishes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </motion.div>
              </div>

              {/* Right Side: Narrative and 3 Soft Cards */}
              <div className="lg:col-span-6 space-y-8">
                <motion.div className="space-y-4" {...fUp}>
                  <span className="tag-label">Studio Narrative</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
                    Design taste meets on-site discipline.
                  </h2>
                  <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                    At IICL, we believe beautiful spatial concept sheets are only as good as the site execution behind them. We support our design studio with in-house civil engineers, strict batch material inspection, locked-in BOQs, and careful coordinator oversight, removing the typical friction points of site construction.
                  </p>
                </motion.div>

                {/* 3 Soft Feature Cards */}
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    variants={fUp}
                    className="flex gap-4 p-5 rounded-[1.25rem] border border-border/50 bg-card/60 backdrop-blur-sm"
                  >
                    <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0 h-fit">
                      <ClipboardCheck className="size-4 text-clay" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-xs font-semibold text-charcoal uppercase tracking-wider">Clear Planning</h4>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                        100% itemized line-item BOQs with locked prices before site starts. Zero budget escalation clauses or hidden subcontractor fees.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fUp}
                    className="flex gap-4 p-5 rounded-[1.25rem] border border-border/50 bg-card/60 backdrop-blur-sm"
                  >
                    <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0 h-fit">
                      <ShieldCheck className="size-4 text-clay" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-xs font-semibold text-charcoal uppercase tracking-wider">Site Coordination</h4>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                        Licensed civil engineering leads supervising all layout parameters, plywood grades, concrete pours, and worker safety daily.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fUp}
                    className="flex gap-4 p-5 rounded-[1.25rem] border border-border/50 bg-card/60 backdrop-blur-sm"
                  >
                    <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0 h-fit">
                      <CheckCircle2 className="size-4 text-clay" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-xs font-semibold text-charcoal uppercase tracking-wider">Quality Handover</h4>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                        Rigorous 150-point QA verification checklist audits before client walkthroughs. Dust-free, move-in ready handover spaces.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </Container>
        </Section>

        {/* ── 5. FEATURED PROJECTS ── */}
        <Section variant="ivory" className="border-b border-border/40 py-20 md:py-28">
          <Container className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.div 
                className="space-y-3"
                {...fUp}
              >
                <span className="tag-label">Completed Showcases</span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-charcoal tracking-tight">
                  Spaces Shaped with Clarity
                </h2>
                <p className="text-xs md:text-sm text-charcoal-muted font-sans font-light max-w-md">
                  Explore our premium apartments, corporate office workspaces, and factory fitouts executed across Pune limits.
                </p>
              </motion.div>
              <motion.div {...fUp}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-sans font-semibold tracking-[0.25em] uppercase text-clay hover:text-charcoal transition-colors group shrink-0 pb-1"
                >
                  View All Projects 
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Asymmetrical Project Showcase */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {projectsData.slice(0, 3).map((project) => (
                <motion.div key={project.id} variants={fUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* ── Before & After Compare Showcase ── */}
        <Section variant="ivory" className="border-b border-border/40 py-20 md:py-28">
          <Container>
            <BeforeAfterSection />
          </Container>
        </Section>

        {/* ── 6. PROCESS SECTION (HORIZONTAL TIMELINE) ── */}
        <Section variant="sand" className="border-b border-border/40 bg-sand/20 py-20 md:py-28">
          <Container className="space-y-16">
            <motion.div 
              className="text-center max-w-2xl mx-auto space-y-4"
              {...fUp}
            >
              <span className="tag-label">Execution Roadmap</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-charcoal tracking-tight leading-[1.15]">
                How We Deliver Clarity
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">
                Peace of mind is planned. We guide you through 5 simple checkpoints to align design expectations and on-site realities.
              </p>
            </motion.div>

            {/* Desktop Timeline (Horizontal) & Mobile (Vertical) */}
            <div className="relative max-w-5xl mx-auto pt-6 pb-2">
              
              {/* Connecting Line (Desktop) */}
              <div aria-hidden className="absolute top-[37px] left-10 right-10 h-0.5 bg-border/40 hidden lg:block z-0" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                
                {/* Step 1: Discover */}
                <motion.div 
                  variants={fUp}
                  className="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center text-left lg:text-center relative group"
                >
                  <div className="relative flex lg:justify-center items-center">
                    {/* Vertical connecting line (Mobile) */}
                    <div aria-hidden className="absolute top-10 bottom-[-32px] left-[17px] w-0.5 bg-border/40 lg:hidden z-0" />
                    
                    <div className="size-9 rounded-full border border-clay/20 bg-card flex items-center justify-center font-heading text-sm font-light text-clay transition-all duration-300 group-hover:bg-clay group-hover:text-cta-text z-10 shrink-0">
                      01
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 pt-1 lg:pt-0">
                    <h3 className="font-heading text-base md:text-lg font-medium text-charcoal leading-none">Discover</h3>
                    <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed max-w-xs">
                      1-hour detailed structural audit, space planning review, and visual alignment.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2: Design */}
                <motion.div 
                  variants={fUp}
                  className="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center text-left lg:text-center relative group"
                >
                  <div className="relative flex lg:justify-center items-center">
                    {/* Vertical connecting line (Mobile) */}
                    <div aria-hidden className="absolute top-10 bottom-[-32px] left-[17px] w-0.5 bg-border/40 lg:hidden z-0" />
                    
                    <div className="size-9 rounded-full border border-clay/20 bg-card flex items-center justify-center font-heading text-sm font-light text-clay transition-all duration-300 group-hover:bg-clay group-hover:text-cta-text z-10 shrink-0">
                      02
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 pt-1 lg:pt-0">
                    <h3 className="font-heading text-base md:text-lg font-medium text-charcoal leading-none">Design</h3>
                    <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed max-w-xs">
                      High-fidelity 3D modeling, layout plans, and material texture curation.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3: Plan */}
                <motion.div 
                  variants={fUp}
                  className="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center text-left lg:text-center relative group"
                >
                  <div className="relative flex lg:justify-center items-center">
                    {/* Vertical connecting line (Mobile) */}
                    <div aria-hidden className="absolute top-10 bottom-[-32px] left-[17px] w-0.5 bg-border/40 lg:hidden z-0" />
                    
                    <div className="size-9 rounded-full border border-clay/20 bg-card flex items-center justify-center font-heading text-sm font-light text-clay transition-all duration-300 group-hover:bg-clay group-hover:text-cta-text z-10 shrink-0">
                      03
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 pt-1 lg:pt-0">
                    <h3 className="font-heading text-base md:text-lg font-medium text-charcoal leading-none">Plan</h3>
                    <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed max-w-xs">
                      100% itemized line-item BOQ creation with finalized locked prices before work.
                    </p>
                  </div>
                </motion.div>

                {/* Step 4: Execute */}
                <motion.div 
                  variants={fUp}
                  className="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center text-left lg:text-center relative group"
                >
                  <div className="relative flex lg:justify-center items-center">
                    {/* Vertical connecting line (Mobile) */}
                    <div aria-hidden className="absolute top-10 bottom-[-32px] left-[17px] w-0.5 bg-border/40 lg:hidden z-0" />
                    
                    <div className="size-9 rounded-full border border-clay/20 bg-card flex items-center justify-center font-heading text-sm font-light text-clay transition-all duration-300 group-hover:bg-clay group-hover:text-cta-text z-10 shrink-0">
                      04
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 pt-1 lg:pt-0">
                    <h3 className="font-heading text-base md:text-lg font-medium text-charcoal leading-none">Execute</h3>
                    <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed max-w-xs">
                      Daily on-site engineering-grade site supervision logs and milestone tracker logs.
                    </p>
                  </div>
                </motion.div>

                {/* Step 5: Handover */}
                <motion.div 
                  variants={fUp}
                  className="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center text-left lg:text-center relative group"
                >
                  <div className="relative flex lg:justify-center items-center">
                    <div className="size-9 rounded-full border border-clay/20 bg-card flex items-center justify-center font-heading text-sm font-light text-clay transition-all duration-300 group-hover:bg-clay group-hover:text-cta-text z-10 shrink-0">
                      05
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 pt-1 lg:pt-0">
                    <h3 className="font-heading text-base md:text-lg font-medium text-charcoal leading-none">Handover</h3>
                    <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed max-w-xs">
                      150-point QA validation inspection checklist, clean up, and keys handover.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </Container>
        </Section>

        {/* ── 7. ESTIMATE / CONSULTATION SECTION (LEAD MAGNET) ── */}
        <Section variant="ivory" className="border-b border-border/40 py-20 md:py-28" id="estimator">
          <Container className="max-w-4xl mx-auto space-y-12">
            <motion.div 
              className="text-center max-w-2xl mx-auto space-y-4"
              {...fUp}
            >
              <span className="tag-label">INDICATIVE CALCULATOR</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Start with a quick project estimate.
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light max-w-lg mx-auto">
                Share your space type and approximate area. The IICL team can help you understand the next step.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card border border-border/50 rounded-[2rem] p-8 md:p-12 lg:p-14 shadow-sm"
              {...fUp}
            >
              <HomepageEstimatorForm />
            </motion.div>
          </Container>
        </Section>

        {/* ── 8. TRUST & CREDIBILITY SYSTEM ── */}
        <Section variant="sand" className="border-b border-border/40 bg-sand/20 py-20 md:py-28">
          <Container className="space-y-24">
            {/* Reviews */}
            <ReviewIntegrationPlaceholder />
            
            {/* Quality audits */}
            <QualityChecklistSection />

            {/* Typography client logos */}
            <ClientLogosSection />
          </Container>
        </Section>

        {/* ── 9. FAQ PREVIEW ACCORDION ── */}
        <Section variant="ivory" className="border-b border-border/40 py-20 md:py-28">
          <Container className="space-y-12">
            <motion.div 
              className="text-center max-w-2xl mx-auto space-y-4"
              {...fUp}
            >
              <span className="tag-label">RESOLVING CONCERNS</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-charcoal tracking-tight">
                Frequently Asked Inquiries
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-sans font-light max-w-lg mx-auto">
                Read our answers regarding turnkey structural permissions, material standards, locked BOQs, and warranty details in Pune.
              </p>
            </motion.div>
            
            <motion.div {...fUp}>
              <FAQAccordion items={formattedFaqs} />
            </motion.div>
          </Container>
        </Section>

        {/* ── 10. FINAL CTA ── */}
        <Section variant="sand" className="border-t border-border/10 py-24 md:py-32 bg-sand/20">
          <Container>
            <motion.div 
              className="relative rounded-[2rem] border border-border/50 overflow-hidden bg-card p-8 md:p-16 lg:p-20 text-center max-w-5xl mx-auto shadow-sm"
              {...fUp}
            >
              {/* Soft decorative background clay shape */}
              <div aria-hidden className="absolute top-0 right-0 size-80 rounded-full bg-clay/[0.03] -mr-20 -mt-20 blur-3xl" />
              <div aria-hidden className="absolute bottom-0 left-0 size-80 rounded-full bg-olive/[0.02] -ml-20 -mb-20 blur-3xl" />
              
              <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                <span className="tag-label">Initiate Consultation</span>
                
                <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal tracking-tight leading-tight">
                  Ready to plan your space with clarity?
                </h2>
                
                <p className="text-sm md:text-base text-charcoal-muted font-sans font-light leading-relaxed max-w-xl mx-auto">
                  Talk to IICL about your home, office, commercial, or turnkey interior project. Arrange a free 1-hour site audit with our civil engineers to discuss options.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full sm:w-auto justify-between group rounded-full px-8 py-5 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    Book Free Consultation
                    <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full sm:w-auto gap-2 border-border/85 rounded-full px-8 py-5 hover:bg-background transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    <MessageCircle className="size-4 shrink-0 text-clay" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Floating and Mobile CTAs */}
        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}
