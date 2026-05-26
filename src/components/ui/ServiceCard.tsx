import React from "react";
import Link from "next/link";
import { ArrowUpRight, Home, Briefcase, Factory, Layers, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Briefcase,
  Factory,
  Layers,
  Hammer,
};

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  isFeatured?: boolean;
}

export function ServiceCard({ service, className, isFeatured = false }: ServiceCardProps) {
  const Icon = iconMap[service.iconName] ?? Home;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between bg-card border border-border/50 rounded-[2rem] p-8 md:p-10 bento-shadow transition-studio hover:bento-shadow-hover hover:border-clay/35 hover:-translate-y-1 overflow-hidden",
        isFeatured ? "md:col-span-2" : "col-span-1",
        className
      )}
    >
      {/* Decorative accent shape on hover */}
      <div 
        aria-hidden
        className="absolute -top-24 -right-24 size-48 rounded-full bg-clay/5 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150 group-hover:opacity-100" 
      />

      <div className="space-y-6 relative z-10">
        {/* Top bar with icon and details */}
        <div className="flex items-center justify-between">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-sand/65 border border-border/30 transition-all duration-500 group-hover:bg-clay/10 group-hover:border-clay/20">
            <Icon className="size-6 text-clay transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
          </div>
          
          <div className="size-9 flex items-center justify-center rounded-full border border-border/50 text-charcoal-muted transition-all duration-500 group-hover:border-clay/40 group-hover:text-clay group-hover:bg-clay/5">
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="tag-label opacity-80">Specialty Focus</span>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal group-hover:text-clay transition-all duration-300">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-charcoal-muted font-light line-clamp-3">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Feature Tags list instead of bullet dots */}
      <div className="relative z-10 border-t border-border/30 pt-6 mt-8">
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="text-xs font-sans font-medium text-charcoal-muted bg-sand/55 border border-border/30 px-3 py-1 rounded-full transition-all group-hover:border-clay/20 group-hover:bg-clay/[0.03]"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
