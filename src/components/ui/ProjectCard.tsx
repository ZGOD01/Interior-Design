import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  size?: "default" | "large";
}

export function ProjectCard({ project, className, size = "default" }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/40 bg-card bento-shadow transition-studio hover:bento-shadow-hover hover:border-clay/35 hover:-translate-y-1",
        className
      )}
    >
      {/* Visual Frame */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-sand/40",
          size === "large" ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
        )}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        {/* Studio Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Asymmetrical tags top bar */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
          <span className="inline-flex bg-white/95 backdrop-blur-md text-charcoal text-[9px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-border/20">
            {project.categoryLabel}
          </span>
          
          <div className="size-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-charcoal transition-all duration-500 group-hover:bg-clay group-hover:text-white">
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Narrative layout overlay (Bottom details) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 space-y-2">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-white/80 font-sans text-xs font-light">
            <MapPin className="size-3 text-clay shrink-0" />
            <span>{project.location}</span>
          </div>
        </div>
      </div>

      {/* Structured stats row */}
      <div className="bg-card px-6 py-5 md:px-8 flex items-center justify-between border-t border-border/30 gap-4">
        <div className="flex items-center gap-3.5 text-[11px] text-charcoal-muted font-sans font-light">
          <span>{project.area}</span>
          <span className="size-1 rounded-full bg-border" />
          <span>{project.year}</span>
        </div>
        
        {/* Deliverables tags */}
        <div className="flex flex-wrap gap-1.5 justify-end">
          {project.deliverables.slice(0, 2).map((d) => (
            <span
              key={d}
              className="text-[9px] font-medium bg-sand/65 border border-border/30 text-charcoal-muted px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-300 group-hover:border-clay/20"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
