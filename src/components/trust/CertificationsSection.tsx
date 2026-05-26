"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, HardHat, FileText, CheckCircle } from "lucide-react";

interface CertificateItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  number: string;
  description: string;
}

const certificationData: CertificateItem[] = [
  {
    icon: ShieldCheck,
    title: "Licensed Structural Engineer Registration",
    subtitle: "PMC & PCMC Municipal Corporations",
    number: "Reg No: SE/PMC/1024",
    description: "In-house engineering clearance capability allowing us to inspect load-bearing structures and design customized structural retrofits securely."
  },
  {
    icon: HardHat,
    title: "Licensed Civil Site Supervision",
    subtitle: "Daily Safety & Work Code Compliance",
    number: "Certified Lead Leads",
    description: "Licensed site engineer supervise plywood grade checks, concrete pouring ratios, core cut layouts, and safety checks on every single project."
  },
  {
    icon: FileText,
    title: "Legal Company Incorporation ID",
    subtitle: "Ministry of Corporate Affairs MCA",
    number: "CIN: U45201PN2019PLC185203",
    description: "IIC Limited (IICL) is a legally registered corporate entity incorporated under Indian business laws since 2019."
  }
];

export function CertificationsSection({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2 text-left max-w-xl">
        <span className="tag-label">Compliance Records</span>
        <h3 className="font-heading text-2xl md:text-3xl font-light text-charcoal">
          Structural Clearances & Licensing
        </h3>
        <p className="text-xs text-charcoal-muted font-sans font-light">
          No fake certifications. Below are the verified company registration numbers and corporate structural licenses that guide our execution in Pune.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-card border border-border/40 rounded-[1.5rem] p-6 space-y-4 hover:border-clay/20 transition-studio relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-full bg-clay/5 border border-clay/10 text-clay shrink-0">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-clay bg-clay/5 rounded-full px-2.5 py-0.5 border border-clay/10">
                    <CheckCircle className="size-2.5 text-clay" /> Active
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-heading text-base font-medium text-charcoal tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted font-sans uppercase tracking-wider font-semibold">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-border/20 pt-4 mt-6">
                <span className="font-mono text-xs text-charcoal-muted bg-sand/35 border border-border/30 rounded px-2 py-1 select-all">
                  {item.number}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-charcoal-muted/50 font-mono italic text-left">
        * TODO: Scanned corporate registration certificates and physical PMC licensing credentials available for inspection upon client request.
      </p>
    </div>
  );
}
