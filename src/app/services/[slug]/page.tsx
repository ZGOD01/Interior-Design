import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  HardHat, 
  Building2, 
  Layers, 
  Hammer, 
  Home as HomeIcon,
  CheckCircle,
  ChevronRight,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { projectsData } from "@/data/projects";
import { buttonVariants } from "@/components/ui/button";

// Normalizer dictionary to support both short and long slugs
const slugMap: Record<string, string> = {
  "residential": "residential",
  "residential-interiors": "residential",
  "commercial": "commercial",
  "commercial-interiors": "commercial",
  "industrial": "industrial",
  "industrial-interiors": "industrial",
  "turnkey": "turnkey",
  "turnkey-projects": "turnkey",
  "civil": "civil",
  "civil-engineering": "civil",
};

interface ServiceDetails {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  whoThisIsFor: string;
  icon: React.ComponentType<{ className?: string }>;
  problemsSolved: { problem: string; solution: string }[];
  included: string[];
  processSteps: { step: string; title: string; description: string }[];
  relatedProjectId: string;
  faqItems: { question: string; answer: string }[];
  imageUrl: string;
  seoDescription: string;
}

const serviceDetailsData: Record<string, ServiceDetails> = {
  residential: {
    id: "residential",
    slug: "residential-interiors",
    title: "Residential Interiors",
    tagline: "Bespoke Homes",
    subtitle: "Custom spatial designs built for quiet luxury and everyday functionality",
    overview: "We construct personalized interior sanctuaries for Pune's homeowners. From high-rise penthouses in Koregaon Park to sprawling luxury villas, IIC Limited bridges high-aesthetic spatial styling with meticulous physical civil execution. We handle the entire design-build scope so you move into a perfectly finished space.",
    whoThisIsFor: "Pune homeowners and premium apartment buyers seeking customized modular kitchens, walk-in wardrobes, acoustic-paneled master suites, and bespoke architectural woodwork that browser templates cannot replicate.",
    icon: HomeIcon,
    problemsSolved: [
      { problem: "Subcontractor Delay Stress", solution: "Our in-house project managers coordinate timelines directly, backed by delay penalty clauses." },
      { problem: "Diluted Material Quality", solution: "100% material authentication. We sign off exact plywood and hardware brands in writing before loading." },
      { problem: "Lack of Space Efficiency", solution: "Custom modular geometry mapped precisely to your raw flat dimensions for zero dead corners." }
    ],
    included: [
      "Custom Kitchen Modular layouts (L-Shape, Parallel, Island)",
      "High-Acoustic Master Suite partitionings & headboards",
      "Premium Veneer/Laminate customized storage systems",
      "Concealed LED architectural lighting integrations",
      "Anti-microbial and stain-resistant vanity shells"
    ],
    processSteps: [
      { step: "01", title: "Discovery Scan", description: "Detailed physical site measurement and personal design BRIEFING." },
      { step: "02", title: "3D Rendering", description: "Curation of color charts, material boards, and photorealistic spatial views." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Craftsmanship & Assembly", description: "Precision site civil adjustments and modular fitment supervised by engineers." },
      { step: "05", title: "Spotless Handover", description: "Final 150-point QA verification and deep cleaning before key exchange." }
    ],
    relatedProjectId: "koregaon-park-residence",
    faqItems: [
      { question: "How long does a premium apartment interior execution take in Pune?", answer: "Typically, it takes 45 to 60 business days from the final BOQ validation and color sign-offs. We include milestone-linked delay guarantees in our contracts." },
      { question: "What materials do you use for modular kitchen cabinets?", answer: "We exclusively use IS 710 certified Boiling Water Proof (BWP) marine plywood, combined with premium soft-close hardware brands like Blum or Hettich." },
      { question: "Can I inspect the materials before they are installed?", answer: "Absolutely. We encourage a material audit at your site. All brand seals and laminate thicknesses are verified by our site engineer with you." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
    seoDescription: "Discover bespoke residential interior design and turnkey execution in Pune by IIC Limited. Luxury modular kitchens, bedrooms, and customized living spaces.",
  },
  commercial: {
    id: "commercial",
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    tagline: "Inspiring Workspaces",
    subtitle: "High-performance offices designed to enhance focus, collaboration, and brand identity",
    overview: "We design and build commercial workspaces that optimize workflow efficiency and inspire teamwork. Our commercial fitout services integrate modern aesthetics, acoustic partitions, fire safety standards, and future-proof data cabling to match the pace of Pune's growing enterprises.",
    whoThisIsFor: "IT firms, premium corporate headquarters, scaling startups, retail showrooms, and clinics seeking productivity-focused spatial layouts that comply with commercial building bylaws.",
    icon: Building2,
    problemsSolved: [
      { problem: "Poor Acoustic Comfort", solution: "Double-glazed acoustic partitions and high-NRC ceiling panel installations." },
      { problem: "Messy Core Wiring", solution: "Integrated raceway cabling and under-floor service hatches for safety." },
      { problem: "Rigid Static Workspaces", solution: "Modular hot-desk networks and collaborative zones that scale with headcount." }
    ],
    included: [
      "Open-Office Workstations & Ergonomic seating lines",
      "Acoustic Boardrooms & soundproof private pods",
      "Smart-cabling and integrated HVAC distribution ducting",
      "Retail lobby brand wall architectures",
      "Commercial fire safety code integrations & exit routes"
    ],
    processSteps: [
      { step: "01", title: "Workspace Audit", description: "Mapping department dynamics, growth projections, and utility limits." },
      { step: "02", title: "Zoning & MEP Drafting", description: "Planning acoustic barriers, electrical loads, and HVAC zones." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Phased Fitout Execution", description: "Strict construction scheduling to meet tight business opening deadlines." },
      { step: "05", title: "Systems Commissioning", description: "Load tests, air flow balancing, and handover of occupancy NOCs." }
    ],
    relatedProjectId: "hinjawadi-it-hq",
    faqItems: [
      { question: "Do you handle local fire and civic NOC clearances in Pune?", answer: "Yes, our engineers coordinate municipal documentation, fire marshal certifications, and load clearances as part of our turnkey commercial services." },
      { question: "How do you manage office renovations without disrupting operations?", answer: "We implement phased night-shift execution and soundproof dust barriers to isolate work zones if parts of the office remain active." },
      { question: "Can we integrate smart IoT access systems into the layout?", answer: "Yes, we specify and install automated access controls, smart lighting sensors, and board automation systems." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    seoDescription: "Premium corporate office design and workspace planning in Pune. Custom acoustic boardrooms, smart workstations, and commercial renovations by IIC Limited.",
  },
  industrial: {
    id: "industrial",
    slug: "industrial-interiors",
    title: "Industrial Interiors",
    tagline: "Regulatory Compliant",
    subtitle: "Durable, high-compliance workspace interiors engineered for industrial performance",
    overview: "Our industrial division builds administrative blocks, cleanroom labs, and factory offices inside heavy manufacturing settings. We emphasize robust chemical-resistant finishes, acoustic isolation from plant floors, clean air regulations, and heavy-duty structural durability in Pune's major MIDC nodes.",
    whoThisIsFor: "Manufacturing units, pharmaceutical companies, testing laboratories, and logistics hubs requiring heavy-duty, certified workspaces adjacent to production floors.",
    icon: HardHat,
    problemsSolved: [
      { problem: "Corrosive Fumes & Staining", solution: "Specifying chemical-resistant panel coatings and heavy epoxy floor finishes." },
      { problem: "Severe Vibration Deflection", solution: "Installing decoupled framing systems to keep offices quiet next to heavy machinery." },
      { problem: "Micro-Dust Penetration", solution: "Positive-pressure sealing systems and cleanroom-compliant joints." }
    ],
    included: [
      "Anti-Static (ESD) Heavy-duty Epoxy Floor coats",
      "Double-skin insulated drywall partition walls",
      "Factory supervisor glass observation cabins",
      "Dust-resistant acoustic grid ceilings",
      "Integrated emergency eyewash and ventilation pathways"
    ],
    processSteps: [
      { step: "01", title: "Safety & Hazard Scan", description: "Evaluating chemical, thermal, electrical, and vibration threats." },
      { step: "02", title: "Material Spec Selection", description: "Choosing certified flame-retardant, anti-dust materials." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Engineered Construction", description: "Strict execution adhering to industrial safety gear protocols." },
      { step: "05", title: "Regulatory Compliance Handovers", description: "Factory inspector compliance validation and material certificates delivery." }
    ],
    relatedProjectId: "chakan-automation-plant",
    faqItems: [
      { question: "Which MIDC regions in Pune do you cover?", answer: "We serve all primary industrial sectors including Chakan, Bhosari, Talegaon, Ranjangaon, and Hadapsar industrial zones." },
      { question: "What epoxy flooring thickness do you use for factory offices?", answer: "We customize epoxy coatings from 2mm self-leveling lines to 5mm heavy-duty polyurethane screen configurations based on wheel load cycles." },
      { question: "Are your partition systems fire-rated?", answer: "Yes, we install partition configurations with certified fire-ratings of 1 to 2 hours, backed by manufacturer test certifications." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    seoDescription: "Industrial factory office fitouts and lab designs in Pune. Heavy-duty epoxy flooring, cleanrooms, and high-compliance partitions by IIC Limited.",
  },
  turnkey: {
    id: "turnkey",
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    tagline: "Single Accountability",
    subtitle: "Complete end-to-end design-build contracting under a single point of responsibility",
    overview: "Our turnkey project model takes the chaos out of construction. IIC Limited serves as your sole contractor, managing architectural drawings, material procurement, civil contracting, mechanical, electrical, plumbing, and final styling. We guarantee the budget and schedule in writing before we start.",
    whoThisIsFor: "Busy business owners, developers, and corporate project directors who want to avoid the coordination headache of managing multiple isolated contractors.",
    icon: Layers,
    problemsSolved: [
      { problem: "Budget Overrun Creep", solution: "We assume 100% budget accountability once the line-item BOQ is signed." },
      { problem: "Contractor Blame-Shifting", solution: "Single-point coordination resolves conflict between designer and builders instantly." },
      { problem: "Procurement Delays", solution: "Direct partnership with manufacturers ensures materials arrive on schedule." }
    ],
    included: [
      "End-to-end project management & scheduling",
      "Full material supply chain log details",
      "Civil works, framing, and plastering",
      "MEP (Mechanical, Electrical, Plumbing, HVAC) grids",
      "Interior finishes, carpentry, and final styling"
    ],
    processSteps: [
      { step: "01", title: "Conception & Cost Lock", description: "Mapping designs directly against a fixed turnkey budget allocation." },
      { step: "02", title: "Procurement Bidding", description: "Sourcing verified direct-from-manufacturer raw materials." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Coordinated Construction", description: "Executing civil structural modifications and aesthetic finishes simultaneously." },
      { step: "05", title: "QA Inspection & Handover", description: "150-point quality check and delivering clean keys." }
    ],
    relatedProjectId: "viman-nagar-penthouse",
    faqItems: [
      { question: "What happens if there is an unexpected price hike during construction?", answer: "Once the BOQ is signed, all price hikes in steel, cement, or materials are completely absorbed by IIC Limited. Your contract price remains locked." },
      { question: "Can we bring in our own designer?", answer: "Yes, we regularly collaborate with external design firms, serving as the sole turnkey engineering and contracting partner to build their design." },
      { question: "Are municipal permits managed under turnkey?", answer: "Yes, we handle municipal approvals, water connections, and structural stability certifications as part of our scope." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    seoDescription: "Pune's leading turnkey design-build contractor. Single-point accountability for civil works, interior fitouts, and MEP execution with locked budgets.",
  },
  civil: {
    id: "civil",
    slug: "civil-engineering",
    title: "Civil Engineering",
    tagline: "Structural Strength",
    subtitle: "Certified structural modifications, foundation reinforcements, and premium civil finishes",
    overview: "We execute safety-critical civil engineering projects. Led by licensed engineers, our team handles structural retrofitting, foundation repairs, concrete works, masonry, plastering, and advanced waterproofing. We build the strong foundations required for premium aesthetic finishes.",
    whoThisIsFor: "Property associations, commercial building owners, and residential developers seeking structural load upgrades, masonry additions, or complex leak resolution.",
    icon: Hammer,
    problemsSolved: [
      { problem: "Slab Deflections & Weak Columns", solution: "Structural reinforcement using carbon-fiber wraps or steel beams." },
      { problem: "Recurring Water Seepage", solution: "Pressure grout chemical injection and multi-layered membrane waterproofing." },
      { problem: "Unsafe Wall Demolitions", solution: "Load-transfer calculation and beam setups before structural changes." }
    ],
    included: [
      "Load-bearing concrete footings & beams",
      "Carbon-fiber column wrapping & steel retrofits",
      "Precise internal demolitions & wall adjustments",
      "Engineered brickwork & plastering underlayments",
      "Injection grouting and wet area waterproofing"
    ],
    processSteps: [
      { step: "01", title: "Core Foundation Scan", description: "Using rebound hammer tests and scanning to check rebar placement." },
      { step: "02", title: "Structural Calculations", description: "Drafting load transfer designs certified by structural engineers." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Precision Pour & Laying", description: "Strict monitoring of concrete mixing ratios and steel placements." },
      { step: "05", title: "Load Handover Validation", description: "Issuing formal structural stability certificates signed by engineers." }
    ],
    relatedProjectId: "kothrud-structural-retrofit",
    faqItems: [
      { question: "Do your structural designs come with engineering certifications?", answer: "Yes, every structural alteration or load-bearing design is officially signed off and certified by a licensed structural engineer." },
      { question: "What testing do you perform on raw concrete?", answer: "We compress cubes of concrete in laboratories to verify they reach their designed strength class (e.g. M25, M30) before loading them." },
      { question: "Do you fix active water leakage in basements?", answer: "Yes, we specialize in high-pressure polyurethane injections and crystal crystallization barrier waterproofing to stop active leaks." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    seoDescription: "Licensed civil contracting and structural engineering in Pune. Column retrofits, concrete foundations, internal demolitions, and leak waterproofing by IIC Limited.",
  }
};

// Generate dynamic metadata for search engine indexing
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const normalizedKey = slugMap[rawSlug];
  if (!normalizedKey) return {};

  const details = serviceDetailsData[normalizedKey];
  return {
    title: `${details.title} | Interior Design Pune | IIC Limited`,
    description: details.seoDescription,
    keywords: [
      `${details.title.toLowerCase()} Pune`,
      "turnkey contractor Pune",
      "interior design Pune",
      "IIC Limited",
    ],
    alternates: {
      canonical: `https://www.iiclimited.com/services/${details.slug}`,
    },
    openGraph: {
      title: `${details.title} | IIC Limited Pune`,
      description: details.seoDescription,
      url: `https://www.iiclimited.com/services/${details.slug}`,
      type: "website",
      images: [
        {
          url: details.imageUrl,
          width: 1200,
          height: 800,
          alt: `${details.title} — IIC Limited Pune`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${details.title} | IIC Limited Pune`,
      description: details.seoDescription,
      images: [details.imageUrl],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise in Next.js 15 Server Component
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const normalizedKey = slugMap[rawSlug];
  
  if (!normalizedKey) {
    notFound();
  }

  const details = serviceDetailsData[normalizedKey];
  const relatedProject = projectsData.find(p => p.id === details.relatedProjectId);

  const IconComponent = details.icon;
  const whatsappUrl = `https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20discuss%20our%20project%20needs%20for%20${encodeURIComponent(details.title)}.`;

  // Canonical URL for SEO
  const pageUrl = `https://www.iiclimited.com/services/${details.slug}`;

  // Formatted FAQ list for schema
  const schemaFaqItems = details.faqItems.map(item => ({
    question: item.question,
    answer: item.answer
  }));

  // Map the FAQ list to match FAQAccordion prop type
  const faqItemsWithIds = details.faqItems.map((item, idx) => ({
    id: `faq-${idx}`,
    question: item.question,
    answer: item.answer
  }));

  return (
    <>
      {/* Dynamic SEO Schemas */}
      <ServiceJsonLd 
        name={details.title} 
        description={details.seoDescription} 
        url={pageUrl} 
        imageUrl={details.imageUrl} 
      />
      <FaqJsonLd items={schemaFaqItems} />
      <BreadcrumbJsonLd 
        items={[
          { name: "Home", url: "https://www.iiclimited.com" },
          { name: "Services", url: "https://www.iiclimited.com/services" },
          { name: details.title, url: pageUrl }
        ]} 
      />

      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        
        {/* ── 1. EDITORIAL HERO ── */}
        <section className="relative py-16 md:py-24 border-b border-border/20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Area */}
              <div className="lg:col-span-6 space-y-8 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-clay/40" />
                  <Badge variant="clay">{details.tagline}</Badge>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-none">
                  {details.title}
                </h1>

                <p className="font-sans text-lg font-light text-clay leading-relaxed tracking-tight">
                  {details.subtitle}
                </p>

                <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-sans font-light max-w-xl">
                  {details.overview}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full sm:w-auto justify-between group rounded-full px-8 py-5.5 bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300 font-sans font-medium"
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
                      "w-full sm:w-auto gap-2 border-border/80 rounded-full px-8 py-5.5 hover:bg-card transition-all duration-300 font-sans font-medium"
                    )}
                  >
                    <MessageCircle className="size-4 text-clay" />
                    WhatsApp Architect
                  </a>
                </div>
              </div>

              {/* Graphic / Image Area */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-[2rem] border border-border/30 overflow-hidden bg-sand/30 p-1.5">
                  <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                    <Image
                      src={details.imageUrl}
                      alt={details.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-1000 hover:scale-102"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ── 2. OVERVIEW & WHO IS IT FOR ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="tag-label">Target Audience</span>
                <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                  Who is this service tailored for?
                </h2>
                <div className="size-12 rounded-full bg-clay/5 border border-clay/10 flex items-center justify-center text-clay">
                  <IconComponent className="size-6" />
                </div>
              </div>

              <div className="lg:col-span-7 bg-card rounded-[1.5rem] border border-border/40 p-8 md:p-10 space-y-6">
                <p className="text-sm md:text-base text-charcoal-muted leading-relaxed font-sans font-light">
                  {details.whoThisIsFor}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border/20 pt-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-charcoal">Studio Quality</h4>
                      <p className="text-sm text-charcoal-muted font-light leading-relaxed">Engineers monitor raw material compliance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-charcoal">Locked BOQ</h4>
                      <p className="text-sm text-charcoal-muted font-light leading-relaxed">No unexpected price hikes mid-project.</p>
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
                Traditional contracting in Pune is loaded with budget inflation and subpar craftsmanship. We design out the stress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {details.problemsSolved.map((item, idx) => (
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

        {/* ── 4. WHAT IS INCLUDED (SCOPE) ── */}
        <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="tag-label">Scope of Work</span>
                <h2 className="font-heading text-3xl font-light text-charcoal tracking-tight leading-snug">
                  What is included in the project deliverables?
                </h2>
                <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-sm">
                  We supply, supervise, and configure all materials. Each item is accounted for on our bill of quantities.
                </p>
                <div className="w-16 h-px bg-clay" />
              </div>

              <div className="lg:col-span-7 bg-card rounded-[1.5rem] border border-border/40 p-8">
                <ul className="space-y-4">
                  {details.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-charcoal-muted font-sans font-light">
                      <CheckCircle2 className="size-5 text-clay shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── 5. PROCESS ROADMAP (HORIZONTAL TIMELINE) ── */}
        <Section variant="ivory" className="border-b border-border/20 py-20 md:py-28">
          <Container className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">Execution Strategy</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Our 5-Step Process Roadmap
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">
                From core diagnostic scan to keys handover, we follow standard operational workflows.
              </p>
            </div>

            {/* Connecting Timeline Line */}
            <div className="relative max-w-5xl mx-auto pt-6 pb-2">
              
              {/* Connecting Line (Desktop) */}
              <div aria-hidden className="absolute top-[37px] left-10 right-10 h-0.5 bg-border/40 hidden lg:block z-0" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                {details.processSteps.map((step, idx) => (
                  <div 
                    key={step.step}
                    className="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center text-left lg:text-center relative group"
                  >
                    <div className="relative flex lg:justify-center items-center">
                      {/* Vertical connecting line (Mobile) */}
                      {idx < details.processSteps.length - 1 && (
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

        {/* ── 6. RELATED PROJECTS ── */}
        {relatedProject && (
          <Section variant="sand" className="border-b border-border/30 py-20 md:py-24 bg-sand/20">
            <Container className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <span className="tag-label">Pune Showcases</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal tracking-tight">
                    Related Project Execution
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans font-semibold tracking-widest uppercase text-clay hover:text-charcoal transition-colors group shrink-0 pb-1"
                >
                  View All Projects <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="max-w-4xl mx-auto group/project">
                <Link href={`/projects/${relatedProject.slug}`} className="block">
                  <div className="relative w-full aspect-[16/10] md:aspect-[1.6/1] rounded-[2rem] border border-border/40 overflow-hidden bg-sand/15 transition-all duration-700 group-hover/project:border-clay/20">
                    <Image
                      src={relatedProject.images[0] ?? ""}
                      alt={relatedProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project:scale-102"
                    />
                    <div className="absolute top-6 right-6 size-10 flex items-center justify-center rounded-full border border-white/20 bg-charcoal/10 backdrop-blur-md opacity-0 scale-90 transition-all duration-500 group-hover/project:opacity-100 group-hover/project:scale-100">
                      <ChevronRight className="size-5 text-white" />
                    </div>
                  </div>
                </Link>

                <div className="space-y-3.5 px-2 mt-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-sans font-semibold tracking-[0.2em] text-clay uppercase">
                      {relatedProject.categoryLabel}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span className="text-xs md:text-sm font-sans text-charcoal-muted font-light uppercase tracking-wider">
                      {relatedProject.year}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-charcoal tracking-tight leading-none group-hover/project:text-clay transition-colors duration-300">
                      <Link href={`/projects/${relatedProject.slug}`}>{relatedProject.title}</Link>
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-charcoal-muted font-sans font-light leading-relaxed max-w-3xl">
                    {relatedProject.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-charcoal-muted font-light pt-4 border-t border-border/20">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-4 text-clay" />
                      <span>{relatedProject.location}</span>
                    </div>
                    <span className="text-xs md:text-sm font-sans">{relatedProject.area}</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* ── 7. SERVICE FAQS ── */}
        <Section variant="ivory" className="border-b border-border/20 py-20 md:py-28">
          <Container className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">Clarifications</span>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Frequently Asked Inquiries
              </h2>
            </div>
            
            <FAQAccordion items={faqItemsWithIds} />
          </Container>
        </Section>

        {/* ── 8. FINAL SERVICE CTA ── */}
        <section className="relative py-20 md:py-28 bg-sand/35">
          <Container>
            <div className="relative rounded-[2rem] border border-border/50 overflow-hidden bg-card p-8 md:p-16 lg:p-20 text-center max-w-4xl mx-auto shadow-sm">
              <div aria-hidden className="absolute top-0 right-0 size-80 rounded-full bg-clay/[0.03] -mr-20 -mt-20 blur-3xl" />
              
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <span className="tag-label">Initiate Site Audit</span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
                  Ready to construct your interior project with certified engineering?
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

        {/* Floating Actions and Sticky Mobile Bars */}
        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}

// Pre-render params for all short and long slugs
export async function generateStaticParams() {
  return [
    { slug: "residential" },
    { slug: "residential-interiors" },
    { slug: "commercial" },
    { slug: "commercial-interiors" },
    { slug: "industrial" },
    { slug: "industrial-interiors" },
    { slug: "turnkey" },
    { slug: "turnkey-projects" },
    { slug: "civil" },
    { slug: "civil-engineering" },
  ];
}
