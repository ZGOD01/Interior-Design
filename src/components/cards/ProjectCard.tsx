import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  size?: "default" | "large";
  className?: string;
}

export function ProjectCard({ project, size = "default", className }: ProjectCardProps) {
  const coverImage = project.images[0] ?? "";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col gap-5 transition-studio pb-4",
        className
      )}
    >
      {/* Image container with rounded corners */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-border/20 bg-sand/20 transition-all duration-700 group-hover:border-clay/20 w-full",
          size === "large" ? "aspect-[16/10] md:aspect-[1.5/1]" : "aspect-[4/3] md:aspect-[4/5]"
        )}
      >
        {coverImage && (
          <Image
            src={coverImage}
            alt={project.title}
            fill
            sizes={
              size === "large"
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
          />
        )}

        {/* Action Button inside image */}
        <div className="absolute top-6 right-6 size-10 flex items-center justify-center rounded-full border border-white/20 bg-charcoal/10 backdrop-blur-md opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          <ArrowUpRight className="size-4 text-white" />
        </div>
      </div>

      {/* Content under image */}
      <div className="space-y-3 px-2">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-sans font-medium tracking-[0.2em] text-clay uppercase">
            {project.categoryLabel}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="text-[10px] font-sans text-charcoal-muted font-light uppercase tracking-wider">
            {project.year}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl md:text-2xl font-light text-charcoal tracking-tight leading-none group-hover:text-clay transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight className="size-4.5 text-charcoal-muted shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-clay" />
        </div>

        <div className="flex items-center justify-between text-xs text-charcoal-muted font-light pt-1 border-t border-border/10">
          <div className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-clay" />
            <span>{project.location}</span>
          </div>
          <span className="text-[10px] font-sans text-charcoal-muted/70">{project.area}</span>
        </div>
      </div>
    </Link>
  );
}
