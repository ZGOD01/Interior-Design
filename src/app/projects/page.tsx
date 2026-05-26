"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MessageCircle, 
  MapPin, 
  ChevronRight,
  ArrowUpRight
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

import { projectsData } from "@/data/projects";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
  { id: "turnkey", label: "Turnkey" },
  { id: "civil", label: "Civil" },
];

export default function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const whatsappUrl = "https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20discuss%20our%20project%20needs.";

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

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
                <Badge variant="clay">Our Portfolio</Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.1] max-w-2xl">
                Spaces Shaped with engineering-grade execution.
              </h1>

              <p className="font-sans text-lg font-light text-clay leading-relaxed tracking-tight max-w-xl">
                A showcase of residential penthouses, corporate office spaces, and industrial factory interiors completed across Pune limits.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 2. PORTFOLIO & FILTER GRID ── */}
        <Section variant="ivory" className="py-16 md:py-24">
          <Container className="space-y-12">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2.5 justify-start md:justify-center border-b border-border/20 pb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-xs font-sans font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer border",
                    activeCategory === cat.id
                      ? "bg-deep-cta border-deep-cta text-cta-text"
                      : "bg-card border-border/60 text-charcoal-muted hover:border-clay/40"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Asymmetrical Grid of Large Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const coverImage = project.images[0] ?? "";
                return (
                  <div key={project.id} className="group/project flex flex-col gap-4">
                    <Link href={`/projects/${project.slug}`} className="block">
                      <div className="relative w-full aspect-[4/5] rounded-[1.75rem] border border-border/40 overflow-hidden bg-sand/15 transition-all duration-700 group-hover/project:border-clay/20">
                        {coverImage && (
                          <Image
                            src={coverImage}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project:scale-102"
                          />
                        )}
                        <div className="absolute top-6 right-6 size-9 flex items-center justify-center rounded-full border border-white/20 bg-charcoal/10 backdrop-blur-md opacity-0 scale-90 transition-all duration-500 group-hover/project:opacity-100 group-hover/project:scale-100">
                          <ArrowUpRight className="size-3.5 text-white" />
                        </div>
                      </div>
                    </Link>

                    <div className="space-y-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-sans font-semibold tracking-wider text-clay uppercase">
                          {project.categoryLabel}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="text-[9px] font-sans text-charcoal-muted font-light uppercase tracking-wider">
                          {project.year}
                        </span>
                      </div>
                      
                      <Link href={`/projects/${project.slug}`} className="block group-hover/project:text-clay transition-colors duration-300">
                        <h3 className="font-heading text-lg md:text-xl font-light text-charcoal tracking-tight leading-snug">
                          {project.title}
                        </h3>
                      </Link>

                      <div className="flex items-center justify-between text-[11px] text-charcoal-muted font-light pt-2 border-t border-border/20">
                        <div className="flex items-center gap-1 text-charcoal-muted">
                          <MapPin className="size-3 text-clay shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        <span className="text-[10px] font-sans">{project.area}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16 bg-card border border-border/40 rounded-[1.5rem] p-8 max-w-md mx-auto space-y-2">
                <p className="font-heading text-lg font-light text-charcoal">No completed showcases found</p>
                <p className="text-xs text-charcoal-muted font-sans font-light">
                  We are currently executing projects in this category inside Pune limits. Check back soon for handovers.
                </p>
              </div>
            )}

          </Container>
        </Section>

        {/* ── 3. FINAL CTA SECTION ── */}
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
                    Book Site Audit
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
