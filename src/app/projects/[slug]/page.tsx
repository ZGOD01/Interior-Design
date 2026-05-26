import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface PageProps {
  params: {
    slug: string;
  };
}

// ── Static Params ──────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// ── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Portfolio Showcase | IIC Limited Pune`,
    description: `${project.description.slice(0, 155)}... Completed turnkey interior by IIC Limited in ${project.location}.`,
    alternates: {
      canonical: `https://www.iiclimited.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | IIC Limited`,
      description: project.description,
      url: `https://www.iiclimited.com/projects/${project.slug}`,
      type: "website",
      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  const mainImage = project.images[0] ?? "";
  const subImage = project.images[1] ?? mainImage;
  const whatsappUrl = `https://wa.me/919119491193?text=Hi%20IICL%2C%20I%20am%20interested%20in%20your%20project%20showcase%3A%20${encodeURIComponent(project.title)}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.iiclimited.com" },
          { name: "Projects", url: "https://www.iiclimited.com/projects" },
          { name: project.title, url: `https://www.iiclimited.com/projects/${project.slug}` },
        ]}
      />
      
      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        {/* ── 1. NARRATIVE HERO ── */}
        <section className="py-12 md:py-20 border-b border-border/20">
          <Container>
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-clay/40" />
                <span className="tag-label">{project.categoryLabel}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.15]">
                {project.title}
              </h1>
              <p className="font-sans text-base md:text-lg font-light text-clay leading-relaxed tracking-tight max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Structured meta cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              <div className="bg-card border border-border/30 rounded-2xl p-5 space-y-1.5">
                <span className="text-xs font-sans font-semibold tracking-widest text-charcoal-muted/50 uppercase">Client</span>
                <p className="text-xs font-heading font-medium text-charcoal">{project.client}</p>
              </div>
              <div className="bg-card border border-border/30 rounded-2xl p-5 space-y-1.5">
                <span className="text-xs font-sans font-semibold tracking-widest text-charcoal-muted/50 uppercase">Location</span>
                <p className="text-xs font-heading font-medium text-charcoal">{project.location}</p>
              </div>
              <div className="bg-card border border-border/30 rounded-2xl p-5 space-y-1.5">
                <span className="text-xs font-sans font-semibold tracking-widest text-charcoal-muted/50 uppercase">Year</span>
                <p className="text-xs font-heading font-medium text-charcoal">{project.year}</p>
              </div>
              <div className="bg-card border border-border/30 rounded-2xl p-5 space-y-1.5">
                <span className="text-xs font-sans font-semibold tracking-widest text-charcoal-muted/50 uppercase">Carpet Area</span>
                <p className="text-xs font-heading font-medium text-charcoal">{project.area}</p>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 2. FULL WIDTH COVER FRAME ── */}
        <section className="py-8 bg-sand/15">
          <Container>
            <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden border border-border/40 bg-card p-1.5">
              <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                <Image
                  src={mainImage}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ── 3. ARCHITECTURAL DUAL STORY SPLIT ── */}
        <Section variant="ivory" className="py-16 md:py-24 border-b border-border/20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Side: Creative spatial concept */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <span className="tag-label">Spatial Blueprint</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                    Spatial curation & material choice
                  </h2>
                </div>
                <div className="space-y-6 text-sm text-charcoal-muted font-sans font-light leading-relaxed max-w-xl">
                  <p>
                    For this {project.area} space, our principal architectural lead focused on establishing clean spatial flow and calming vistas. By curating warm timber panels, high-contrast structural accents, and raw ivory whites, we highlighted native sunlight exposure and visual breathing room.
                  </p>
                  <p>
                    Every furniture element was detailed in-house, ensuring correct height clearance and comfortable modular functionality. We purposefully avoided generic filler pieces in favor of custom-sized joinery that merges seamlessly with the apartment structural parameters.
                  </p>
                </div>

                {/* Delivered items check list */}
                <div className="space-y-4 pt-4 border-t border-border/10">
                  <span className="tag-label">Detailed Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {project.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-clay shrink-0" />
                        <span className="text-xs text-charcoal font-sans font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Site execution parameters */}
              <div className="lg:col-span-5 bg-card border border-border/30 rounded-[1.75rem] p-7 md:p-8 space-y-6">
                <div className="space-y-1.5">
                  <span className="tag-label">Engineering Discipline</span>
                  <h3 className="font-heading text-xl font-light text-charcoal tracking-tight">
                    Site Construction & Validation
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1 text-xs font-sans">
                    <p className="font-semibold text-charcoal uppercase tracking-wider">Licensed Supervisor Supervision</p>
                    <p className="text-charcoal-muted font-light leading-relaxed">
                      Our in-house site engineer logged core-drill checks, plywood moisture levels, and MEP alignments daily.
                    </p>
                  </div>
                  <div className="space-y-1 text-xs font-sans">
                    <p className="font-semibold text-charcoal uppercase tracking-wider">Material Procurement Check</p>
                    <p className="text-charcoal-muted font-light leading-relaxed">
                      Sourced direct-from-manufacturer IS-710 marine plywood and premium grade aggregates, inspected on delivery.
                    </p>
                  </div>
                  <div className="space-y-1 text-xs font-sans">
                    <p className="font-semibold text-charcoal uppercase tracking-wider">Locked BOQ Budget Compliance</p>
                    <p className="text-charcoal-muted font-light leading-relaxed">
                      Completed precisely to the original signed baseline budget. 0% structural price variance or escalation fees.
                    </p>
                  </div>
                </div>

                <div className="bg-sand/35 border border-border/30 rounded-xl p-4 flex gap-3 text-xs md:text-sm text-charcoal-muted/70 font-sans leading-relaxed">
                  <AlertCircle className="size-4 text-clay shrink-0 mt-0.5" />
                  <span>
                    * TODO: Add client case walkthrough reports and physical site clearance log sheet.
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── 4. LOOKBOOK GALLERY / VISUAL MASONRY ── */}
        <Section variant="sand" className="py-16 md:py-24 border-b border-border/20 bg-sand/20">
          <Container className="space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="tag-label">Lookbook Details</span>
              <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                Curated Material Details
              </h2>
              <p className="text-xs text-charcoal-muted font-sans font-light">
                Close-ups showing tactile grain matches, joint detailing, and custom spatial fittings designed to feel refined at every angle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
              {/* Image Card 1 */}
              <div className="bg-card border border-border/30 rounded-[2rem] overflow-hidden p-1.5 flex flex-col justify-between group">
                <div className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden">
                  <Image
                    src={subImage}
                    alt={`${project.title} detailed texture view`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <span className="tag-label text-xs">Tactile Choice</span>
                  <p className="text-xs text-charcoal font-sans font-semibold">Joinery & Natural Woods</p>
                  <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                    Custom fitted panelings designed using high-grade marine core timber structures and sealed with organic, matte-finish timber preservatives.
                  </p>
                </div>
              </div>

              {/* Image Card 2 (Before & After Placeholders) */}
              <div className="bg-card border border-border/30 rounded-[2rem] overflow-hidden p-1.5 flex flex-col justify-between group">
                <div className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-sand/40 flex items-center justify-center">
                  <Image
                    src={mainImage}
                    alt={`${project.title} layout planning`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102 opacity-40 blur-[1px]"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                  <div className="relative z-10 bg-charcoal/80 backdrop-blur-md rounded-full px-5 py-2 text-white text-xs md:text-sm font-sans font-semibold uppercase tracking-wider">
                    Before / After Slider Available
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  <span className="tag-label text-xs">Execution Log</span>
                  <p className="text-xs text-charcoal font-sans font-semibold">Before/After Structural Comparison</p>
                  <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                    * TODO: Replace comparison placeholder with original high-resolution site measurements and raw structural layout logs.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── 5. FINAL TRUST SITE AUDIT CTA ── */}
        <section className="py-20 md:py-28 bg-background relative border-t border-border/10">
          <Container>
            <div className="relative rounded-[2rem] border border-border/50 overflow-hidden bg-card p-8 md:p-16 lg:p-20 text-center max-w-4xl mx-auto shadow-sm">
              <div aria-hidden className="absolute top-0 right-0 size-80 rounded-full bg-clay/[0.03] blur-3xl -mr-20 -mt-20" />
              
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <span className="tag-label">Initiate site audit</span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
                  Inspired by this project showcase?
                </h2>
                <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                  Book a free 1-hour site measurement audit in Pune. Speak with our principal structural leads, review physical layout challenges, and establish a locked BOQ outline before signing.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full sm:w-auto justify-between group rounded-full px-8 py-5 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    Plan Your Estimate
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
                    Discuss Case on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Global Floating Elements */}
        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}
