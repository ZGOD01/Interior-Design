import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  isFeatured?: boolean;
}

export function ServiceCard({ service, className, isFeatured = false }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex flex-col gap-5 transition-studio pb-4",
        isFeatured && "md:col-span-2",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-border/20 bg-sand/20 transition-all duration-700 group-hover:border-clay/20">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
        />
        <div className="absolute top-6 right-6 size-10 flex items-center justify-center rounded-full border border-white/20 bg-charcoal/10 backdrop-blur-md opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          <ArrowUpRight className="size-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 px-2">
        <div className="flex items-center gap-3">
          <span className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] text-clay uppercase">
            {service.subtitle}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="text-xs md:text-sm font-sans text-charcoal-muted font-light uppercase tracking-wider">
            Curated Scope
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl md:text-2xl font-light text-charcoal tracking-tight leading-none group-hover:text-clay transition-colors duration-300">
            {service.title}
          </h3>
          <ArrowUpRight className="size-4.5 text-charcoal-muted shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-clay" />
        </div>

        <p className="text-xs text-charcoal-muted font-light leading-relaxed font-sans max-w-2xl line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Deliverables in light list */}
        <div className="flex flex-wrap gap-2 pt-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="text-xs font-sans font-light text-charcoal-muted bg-sand/30 border border-border/25 px-2.5 py-0.5 rounded-full transition-all group-hover:border-clay/20"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
