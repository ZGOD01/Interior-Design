import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageCircle, 
  HelpCircle, 
  ShieldCheck, 
  MapPin,
  ChevronRight
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { LocalBusinessJsonLd, FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { getLocalSeoData } from "@/data/localSeo";
import { servicesData } from "@/data/services";
import { blogData } from "@/data/blog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { QualityChecklistSection } from "@/components/trust/QualityChecklistSection";
import { ClientLogosSection } from "@/components/trust/ClientLogosSection";

interface LocalSEOPageProps {
  categoryKey: string;
}

export function LocalSEOPage({ categoryKey }: LocalSEOPageProps) {
  const data = getLocalSeoData(categoryKey);
  if (!data) return null;

  const whatsappUrl = `https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20discuss%20our%20needs%20for%20${encodeURIComponent(data.heroHeadline)}.`;
  const pageUrl = `https://www.iiclimited.com/${data.slug}`;

  // Find the details of the relevant services
  const relevantServices = servicesData.filter((s) =>
    data.relevantServicesSlugs.includes(s.slug)
  );

  // Find related blog articles by checking the relatedLocalPage field
  const relatedArticles = blogData.filter(
    (post) => post.relatedLocalPage === categoryKey
  ).slice(0, 2);

  // FAQ formatting
  const formattedFaqs = data.faqItems.map((item, idx) => ({
    id: `faq-${idx}`,
    question: item.question,
    answer: item.answer,
  }));

  const schemaFaqs = data.faqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      {/* Schema Injection */}
      <LocalBusinessJsonLd url={pageUrl} />
      <ServiceJsonLd
        name={data.seoTitle.split(" | ")[0]}
        description={data.seoDescription}
        url={pageUrl}
        imageUrl={data.imageUrl}
      />
      <FaqJsonLd items={schemaFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.iiclimited.com" },
          { name: data.seoTitle.split(" | ")[0], url: pageUrl },
        ]}
      />

      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        
        {/* ── 1. LOCAL HERO ── */}
        <section className="relative py-16 md:py-24 border-b border-border/20 bg-background">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text column */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-clay/40" />
                  <Badge variant="clay" className="flex items-center gap-1.5">
                    <MapPin className="size-3 text-clay shrink-0" />
                    Pune Local Execution
                  </Badge>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-tight text-charcoal leading-[1.1]">
                  {data.heroHeadline}
                </h1>

                <p className="font-sans text-lg font-light text-clay leading-relaxed tracking-tight">
                  {data.heroSubtitle}
                </p>

                <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-sans font-light max-w-xl">
                  {data.localIntro}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full sm:w-auto justify-between group rounded-full px-8 py-5.5 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    Book Site Consultation
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full sm:w-auto gap-2 border-border/85 rounded-full px-8 py-5.5 hover:bg-card transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    <MessageCircle className="size-4 text-clay" />
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>

              {/* Image column */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] rounded-[2rem] border border-border/30 overflow-hidden bg-sand/30 p-1.5">
                  <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                    <Image
                      src={data.imageUrl}
                      alt={data.heroHeadline}
                      fill
                      priority
                      className="object-cover transition-transform duration-1000 hover:scale-102"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ── 2. INTRO NARRATIVE & WHO IT&apos;S FOR ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="tag-label">Client Blueprint</span>
                <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal tracking-tight leading-snug">
                  Who we help in Pune
                </h2>
                <div className="w-12 h-[1px] bg-clay" />
              </div>

              <div className="lg:col-span-7 bg-card rounded-[1.5rem] border border-border/40 p-8 md:p-10 space-y-6">
                <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-sans font-light">
                  {data.targetAudience}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border/20 pt-6">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="size-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-charcoal">Structural Safety</h4>
                      <p className="text-sm text-charcoal-muted font-light leading-relaxed">All core load distributions are verified by engineers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="size-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-charcoal">Locked Pricing BOQ</h4>
                      <p className="text-sm text-charcoal-muted font-light leading-relaxed">No random subcontractor modifications mid-project.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── 3. PROBLEMS SOLVED ── */}
        <Section variant="ivory" className="border-b border-border/20 py-20 md:py-28">
          <Container className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">Resolving Friction</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Problems We Eliminate
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">
                We replace subcontractor coordination headaches with direct engineer accountability and wholesale pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {data.problemsSolved.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[1.5rem] border border-border/40 bg-card p-6 md:p-8 space-y-4 hover:border-clay/20 transition-all duration-300"
                >
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-clay/5 border border-clay/10 text-clay">
                    <HelpCircle className="size-5" />
                  </div>
                  <h3 className="font-sans text-sm font-semibold text-charcoal">
                    {item.problem}
                  </h3>
                  <div className="w-8 h-px bg-border/20" />
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    <span className="font-semibold text-clay block mb-1">Our Resolution:</span>
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── 4. RELEVANT SERVICES INDEX ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
          <Container className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">Local Solutions</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Relevant Specialties We Coordinate
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light max-w-lg mx-auto">
                Explore our specific design-build execution scopes linked to your search requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relevantServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-card border border-border/40 rounded-[1.5rem] p-6.5 flex flex-col justify-between space-y-4 hover:border-clay/20 transition-all duration-300"
                >
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-lg font-light text-charcoal leading-none">
                      {service.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted font-light leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-semibold uppercase tracking-wider text-clay hover:text-charcoal transition-colors group h-fit w-fit"
                  >
                    View Details <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── 5. TIMELINE (HORIZONTAL TIMELINE) ── */}
        <Section variant="ivory" className="border-b border-border/20 py-20 md:py-28">
          <Container className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">Dynamic Workflow</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Our 5-Step Execution Roadmap
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">
                How we move your Pune project from empty slab diagnostics to final handover.
              </p>
            </div>

            {/* Connecting Timeline Line */}
            <div className="relative max-w-5xl mx-auto pt-6 pb-2">
              
              {/* Connecting Line (Desktop) */}
              <div aria-hidden className="absolute top-[37px] left-10 right-10 h-0.5 bg-border/40 hidden lg:block z-0" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                {data.processSteps.map((step, idx) => (
                  <div 
                    key={step.step}
                    className="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center text-left lg:text-center relative group"
                  >
                    <div className="relative flex lg:justify-center items-center">
                      {/* Vertical connecting line (Mobile) */}
                      {idx < data.processSteps.length - 1 && (
                        <div aria-hidden className="absolute top-10 bottom-[-32px] left-[17px] w-0.5 bg-border/40 lg:hidden z-0" />
                      )}
                      
                      <div className="size-9 rounded-full border border-clay/20 bg-card flex items-center justify-center font-heading text-sm font-light text-clay transition-all duration-300 group-hover:bg-clay group-hover:text-cta-text z-10 shrink-0">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 pt-1 lg:pt-0">
                      <h3 className="font-heading text-base md:text-lg font-medium text-charcoal leading-none">{step.title}</h3>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* ── 6. LOCAL FAQS ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
          <Container className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">Pune Local Info</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Frequently Asked Inquiries
              </h2>
            </div>

            <FAQAccordion items={formattedFaqs} />
          </Container>
        </Section>

        {/* ── 7. RELATED BLOG ARTICLES (INTERNAL LINKS) ── */}
        {relatedArticles.length > 0 && (
          <Section variant="ivory" className="border-b border-border/20 py-16 md:py-20">
            <Container className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-2">
                  <span className="tag-label">Studio Journal</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                    Related Reading
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-semibold tracking-widest uppercase text-clay hover:text-charcoal transition-colors group shrink-0 pb-1"
                >
                  All Articles <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-card border border-border/40 rounded-[1.5rem] overflow-hidden hover:border-clay/20 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-102"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-sans font-semibold uppercase tracking-widest text-clay">{post.category}</span>
                      <h3 className="font-heading text-base md:text-lg font-light text-charcoal leading-snug tracking-tight group-hover:text-clay transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs md:text-sm font-sans font-semibold text-clay uppercase tracking-wider pt-1">
                        Read Article <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* ── 8. TRUST: QUALITY CHECKLIST ── */}
        <QualityChecklistSection />

        {/* ── 9. TRUST: CLIENT LOGOS ── */}
        <ClientLogosSection />

        {/* ── 10. FINAL LOCAL CTA ── */}
        <section className="relative py-20 md:py-28 bg-sand/35">
          <Container>
            <div className="relative rounded-[2rem] border border-border/50 overflow-hidden bg-card p-8 md:p-16 lg:p-20 text-center max-w-4xl mx-auto shadow-sm">
              {/* Soft blurred background details */}
              <div aria-hidden className="absolute top-0 right-0 size-80 rounded-full bg-clay/[0.03] -mr-20 -mt-20 blur-3xl" />
              
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <span className="tag-label">Initiate Site Audit</span>
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

        {/* Floating and Mobile CTAs */}
        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}
