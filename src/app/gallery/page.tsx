import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  MessageCircle, 
  ChevronRight,
  Maximize2
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

export const metadata: Metadata = {
  title: "Design Lookbook | Curated Materials & Execution Details | IIC Limited Pune",
  description:
    "Browse our spatial lookbook. Explore detailed views of BWP cabinetry joinery, structural carbon columns, epoxy flooring, and luxury marble finishes in Pune.",
  alternates: {
    canonical: "https://www.iiclimited.com/gallery",
  },
};

const lookbookImages = [
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
    caption: "Limestone plaster wall detailing, Koregaon Park Penthouse",
    aspect: "aspect-[4/5]",
    category: "Residential"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    caption: "Bespoke kitchen veneer joints, Viman Nagar Penthouse",
    aspect: "aspect-video",
    category: "Turnkey"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    caption: "Double-glazed acoustic partitions, Hinjawadi Office",
    aspect: "aspect-[4/3]",
    category: "Commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
    caption: "M25 concrete batch quality testing on-site, Kothrud",
    aspect: "aspect-[4/5]",
    category: "Civil"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    caption: "Anti-static epoxy floor installation, ChakanMIDC",
    aspect: "aspect-square",
    category: "Industrial"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
    caption: "Custom modular wardrobe internal carcass assembly, Baner",
    aspect: "aspect-[4/5]",
    category: "Residential"
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
    caption: "Concealed LED architectural warm lighting, Kalyani Nagar",
    aspect: "aspect-video",
    category: "Turnkey"
  },
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
    caption: "MEP services ducting and cable tray routing, Bund Garden Office",
    aspect: "aspect-[4/3]",
    category: "Commercial"
  }
];

export default function GalleryPage() {
  const whatsappUrl = "https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20discuss%20our%20material%20selections.";

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
                <Badge variant="clay">Studio Lookbook</Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.1] max-w-2xl">
                Curation in wood, stone, & concrete.
              </h1>

              <p className="font-sans text-lg font-light text-clay leading-relaxed tracking-tight max-w-xl">
                Close-up views of material batch tests, raw modular joins, electrical network checks, and final handovers across Pune limit sites.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 2. MASONRY EDITORIAL GRID ── */}
        <Section variant="ivory" className="py-16 md:py-24">
          <Container>
            
            {/* Masonry Columns (flawless native CSS columns) */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full">
              {lookbookImages.map((img, idx) => (
                <div 
                  key={idx}
                  className="break-inside-avoid mb-6 rounded-[1.5rem] border border-border/40 overflow-hidden bg-card p-1.5 transition-all duration-500 hover:border-clay/20 group"
                >
                  <div className={cn("relative w-full overflow-hidden rounded-xl bg-sand/20", img.aspect)}>
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Hover Action Layer */}
                    <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                      <div className="size-9 rounded-full bg-card/90 backdrop-blur-sm border border-border/30 flex items-center justify-center shadow-sm">
                        <Maximize2 className="size-4 text-clay" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4.5 space-y-1.5 text-left bg-card">
                    <span className="text-[9px] font-sans font-semibold tracking-wider text-clay uppercase">
                      {img.category}
                    </span>
                    <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

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
