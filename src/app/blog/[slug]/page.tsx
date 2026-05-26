import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, ChevronRight, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { blogData } from "@/data/blog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Category slug mapping for internal links
const categoryLinks: Record<string, { label: string; href: string }> = {
  workplace: { label: "Commercial Interiors", href: "/services/commercial-interiors" },
  residential: { label: "Residential Interiors", href: "/services/residential-interiors" },
  contracting: { label: "Turnkey Projects", href: "/services/turnkey-projects" },
  industrial: { label: "Industrial Interiors", href: "/services/industrial-interiors" },
  education: { label: "Civil Engineering", href: "/services/civil-engineering" },
};

// Generate dynamic metadata for dynamic blog routes
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const post = blogData.find((p) => p.slug === rawSlug);
  if (!post) return {};

  return {
    title: `${post.title} | Studio Journal | IIC Limited Pune`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.iiclimited.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.iiclimited.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.imageUrl,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const post = blogData.find((p) => p.slug === rawSlug);

  if (!post) {
    notFound();
  }

  const linkInfo = categoryLinks[post.category];
  const pageUrl = `https://www.iiclimited.com/blog/${post.slug}`;

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.imageUrl,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "IIC Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iiclimited.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  return (
    <>
      {/* Dynamic SEO Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema, null, 2) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.iiclimited.com" },
          { name: "Journal", url: "https://www.iiclimited.com/blog" },
          { name: post.title, url: pageUrl },
        ]}
      />

      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        <Container className="py-6">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[10px] font-sans font-semibold uppercase tracking-widest text-charcoal-muted hover:text-clay transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Journal
          </Link>
        </Container>

        {/* HERO TITLE BLOCK */}
        <section className="relative pb-10 border-b border-border/20">
          <Container className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="clay" className="capitalize">{post.category}</Badge>
              <span className="text-charcoal-muted/30">•</span>
              <div className="flex items-center gap-1.5 text-[10px] text-charcoal-muted font-sans font-light uppercase tracking-wider">
                <Clock className="size-3.5 text-clay/60" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="font-heading text-3xl md:text-5xl font-light text-charcoal tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Author row */}
            <div className="flex items-center gap-6 pt-4 border-t border-border/20">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-sand border border-border/40 flex items-center justify-center text-xs font-sans text-clay font-bold">
                  {post.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-[11px] font-sans font-semibold text-charcoal leading-none">{post.author}</p>
                  <p className="text-[9px] font-sans text-charcoal-muted leading-none mt-1">Author</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] text-charcoal-muted font-sans">
                <Calendar className="size-3.5 text-clay/55" />
                <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
            </div>
          </Container>
        </section>

        {/* FEATURED IMAGE */}
        <section className="py-6">
          <Container className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-border/30 bg-sand/35 p-1.5">
              <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* BODY & SIDEBAR CONTENT */}
        <Section variant="ivory" className="pt-8 py-20 md:py-24">
          <Container className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Reading panel */}
              <div className="lg:col-span-8 space-y-6">
                <div 
                  className="prose prose-studio max-w-none text-sm md:text-base text-charcoal-muted leading-relaxed font-sans font-light space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/\n\n/g, "</p><p>")
                      .replace(/### (.*)/g, '<h2 className="font-heading text-xl md:text-2xl font-light text-charcoal mt-8 mb-4 tracking-tight">$1</h2>')
                      .replace(/<p>###/g, "###")
                  }}
                />
              </div>

              {/* Sidebar Panel - Injected Internal Links */}
              <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
                {linkInfo && (
                  <div className="bg-card border border-border/40 rounded-[1.5rem] p-6 md:p-8 space-y-5 text-left">
                    <span className="tag-label">Related Specialty</span>
                    <h3 className="font-heading text-lg font-light text-charcoal tracking-tight">
                      Explore our turnkey execution scope
                    </h3>
                    <p className="text-[11px] text-charcoal-muted font-sans font-light leading-relaxed">
                      We plan, coordinate, and supervise {linkInfo.label.toLowerCase()} across Pune with guaranteed BOQs.
                    </p>
                    <Link
                      href={linkInfo.href}
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "flex items-center justify-between w-full bg-clay hover:bg-clay-hover text-white rounded-full px-5 py-3"
                      )}
                    >
                      View Service Details
                      <ChevronRight className="size-4" />
                    </Link>
                  </div>
                )}

                {/* Consultation Card */}
                <div className="bg-sand/45 border border-border/50 rounded-[1.5rem] p-6 md:p-8 space-y-4 text-left">
                  <span className="tag-label">Need advice?</span>
                  <h3 className="font-heading text-lg font-light text-charcoal tracking-tight">
                    Discuss your project parameters
                  </h3>
                  <p className="text-[11px] text-charcoal-muted font-sans font-light leading-relaxed">
                    Arrange a site consult with our principal engineers. No hidden rates, zero obligations.
                  </p>
                  <div className="flex flex-col gap-3 pt-2">
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "w-full justify-center rounded-full border-border/80 text-charcoal hover:bg-card"
                      )}
                    >
                      Book Site Audit
                    </Link>
                    <a
                      href={`https://wa.me/919119491193?text=Hello%2C%20I%20read%20your%20article%20%22${encodeURIComponent(post.title)}%22%20and%20had%20some%20questions.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "w-full justify-center gap-2 rounded-full border-border/80 text-charcoal hover:bg-card"
                      )}
                    >
                      <MessageCircle className="size-3.5 text-clay" />
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}

// Pre-render blog post params
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}
