import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { blogData } from "@/data/blog";

export const metadata: Metadata = {
  title: "Studio Journal | Interior Design Guides for Pune | IIC Limited",
  description:
    "Read expert guides on office interior design, home fitout costs, turnkey contracting, and industrial workspace planning in Pune. Written by IIC Limited's principal engineers.",
  keywords: [
    "interior design guide Pune",
    "office fitout tips Pune",
    "home interior cost Pune",
    "turnkey contracting guide",
    "industrial interior Pune",
  ],
  alternates: {
    canonical: "https://www.iiclimited.com/blog",
  },
  openGraph: {
    title: "Studio Journal | Interior Design Guides for Pune | IIC Limited",
    description:
      "Expert guides on office design, home interiors, and turnkey contracting in Pune — written by IIC Limited's engineers and designers.",
    url: "https://www.iiclimited.com/blog",
    type: "website",
    images: [
      {
        url: "https://www.iiclimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIC Limited Studio Journal — Interior Design Guides Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Journal | IIC Limited",
    description: "Expert guides on office design, home interiors, and turnkey contracting in Pune.",
    images: ["https://www.iiclimited.com/og-image.jpg"],
  },
};

export default function BlogIndexPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        
        {/* HERO SECTION */}
        <section className="py-16 md:py-24 border-b border-border/20">
          <Container className="text-center max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-clay/40" />
              <Badge variant="clay">Studio Journal</Badge>
              <span className="w-8 h-px bg-clay/40" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-tight text-charcoal leading-tight">
              Aesthetics meeting <span className="italic font-normal text-clay">Engineering.</span>
            </h1>
            <p className="text-xs md:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
              Clear, practical guides written by our principal engineers and project leads on spatial planning, raw material locks, and turnkey contracting inside Pune.
            </p>
          </Container>
        </section>

        {/* ARTICLES GRID */}
        <Section variant="ivory" className="py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col bg-card border border-border/40 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:border-clay/20"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6 bg-card">
                    <div className="space-y-4">
                      {/* Meta information row */}
                      <div className="flex items-center justify-between text-xs md:text-sm text-charcoal-muted font-sans font-light border-b border-border/20 pb-3">
                        <span className="uppercase tracking-widest text-clay font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="size-3 text-clay/55" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="font-heading text-lg md:text-xl font-light text-charcoal leading-snug tracking-tight group-hover:text-clay transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between border-t border-border/20 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-sand border border-border/40 flex items-center justify-center text-xs font-sans text-clay font-bold">
                          {post.author.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="text-xs md:text-sm font-sans text-charcoal-muted font-medium">
                          {post.author}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center justify-center size-8.5 rounded-full border border-border/60 bg-background text-charcoal transition-all duration-300 group-hover:border-clay/40 group-hover:bg-clay/5 group-hover:text-clay"
                      >
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
