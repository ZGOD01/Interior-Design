import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/data/services";

interface BentoServiceCardProps {
  service: ServiceItem;
  wide?: boolean;
  tall?: boolean;
  className?: string;
}

export function BentoServiceCard({
  service,
  wide = false,
  className,
}: BentoServiceCardProps) {

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex flex-col gap-5 transition-studio pb-4",
        wide && "md:col-span-2",
        className
      )}
    >
      {/* Image container with rounded corners and overflow hidden */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-border/20 bg-sand/20 transition-all duration-700 group-hover:border-clay/20",
          wide ? "aspect-[16/10] md:aspect-[2.1/1]" : "aspect-[4/3] md:aspect-[4/5]"
        )}
      >
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          sizes={wide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
        />
        
        {/* Soft elegant top-right arrow button inside image */}
        <div className="absolute top-6 right-6 size-10 flex items-center justify-center rounded-full border border-white/20 bg-charcoal/10 backdrop-blur-md opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          <ArrowUpRight className="size-4 text-white" />
        </div>
      </div>

      {/* Content under image */}
      <div className="space-y-3 px-2">
        <div className="flex items-center gap-3">
          <span className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] text-clay uppercase">
            {service.subtitle}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="text-xs md:text-sm font-sans text-charcoal-muted font-light uppercase tracking-wider">
            Turnkey Studio
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl md:text-2xl font-light text-charcoal tracking-tight leading-none group-hover:text-clay transition-colors duration-300">
            {service.title}
          </h3>
          <ArrowUpRight className="size-4.5 text-charcoal-muted shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-clay" />
        </div>

        <p className="text-xs text-charcoal-muted font-light leading-relaxed font-sans max-w-2xl">
          {service.shortDescription}
        </p>

        {/* Curated deliverables in light list */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 text-xs md:text-sm text-charcoal-muted font-sans font-light border-t border-border/10">
          {service.features.slice(0, 3).map((feat) => (
            <span key={feat} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-clay/50" />
              {feat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
