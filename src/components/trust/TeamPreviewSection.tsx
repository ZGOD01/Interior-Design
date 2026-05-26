import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  education: string;
  bio: string;
  placeholderImg: string;
  linkedInUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Architect & Partner",
    role: "Principal Architectural Designer",
    education: "B.Arch — Sir J.J. School of Art, Mumbai",
    bio: "Guiding the creative direction and spatial flow of all IIC Limited spaces. Specializes in residential penthouses and modern office ergonomics utilizing clean ivory whitespace and rich tactile woods.",
    placeholderImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", // Elegant female portrait
    linkedInUrl: "#"
  },
  {
    name: "Lead Civil Engineer & Partner",
    role: "Principal Site Execution Director",
    education: "M.Tech (Structures) — COEP, Pune",
    bio: "Directs all on-site structural stability, daily supervisor logs, plumbing alignments, concrete batch tests, and PCMC/PMC municipal clearances. Ensures structural design transitions perfectly into reality.",
    placeholderImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", // Premium male portrait
    linkedInUrl: "#"
  }
];

export function TeamPreviewSection({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Strict TODO warn flag */}
      {/* TODO: Add real headshots of leadership team and verified partner Bios. */}
      
      <div className="space-y-2 text-left max-w-xl">
        <span className="tag-label">Studio Leadership</span>
        <h3 className="font-heading text-2xl md:text-3xl font-light text-charcoal">
          Principal Partners
        </h3>
        <p className="text-sm text-charcoal-muted font-sans font-light">
          Meet our architectural leads and structural site directors who govern IIC Limited. One team managing fine design curation and robust civil execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.role}
            className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 bg-card border border-border/40 rounded-[2rem] hover:border-clay/20 transition-studio relative overflow-hidden group"
          >
            {/* Visual Frame */}
            <div className="w-full sm:w-40 aspect-[4/5] rounded-2xl overflow-hidden bg-sand/40 border border-border/30 relative shrink-0">
              <Image
                src={member.placeholderImg}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 160px"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103 grayscale"
              />
              <div className="absolute inset-0 bg-clay/5 mix-blend-color" />
            </div>

            {/* Content Details */}
            <div className="space-y-4 flex flex-col justify-between py-1">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-heading text-lg md:text-xl font-light text-charcoal leading-none">
                      {member.name}
                    </h4>
                    <p className="text-xs md:text-sm text-clay font-sans uppercase tracking-widest font-semibold mt-1.5">
                      {member.role}
                    </p>
                  </div>
                  {member.linkedInUrl && (
                    <a
                      href={member.linkedInUrl}
                      aria-label={`${member.name} LinkedIn Profile`}
                      className="text-charcoal-muted hover:text-[#0077B5] transition-colors shrink-0"
                    >
                      <svg
                        className="size-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-xs text-charcoal-muted font-mono uppercase">
                  {member.education}
                </p>
                <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="text-xs text-charcoal-muted/40 font-mono pt-2">
                * TODO: Replace template profile photo with real team headshots.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
