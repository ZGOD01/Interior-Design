import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center flex-wrap gap-1", className)}
    >
      <ol className="flex items-center flex-wrap gap-1" role="list">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {index === 0 && (
                <Home className="size-3 text-charcoal-muted mr-0.5 shrink-0" aria-hidden />
              )}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-[11px] font-sans text-charcoal-muted hover:text-clay transition-colors duration-200 font-light"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "text-[11px] font-sans font-light",
                    isLast ? "text-charcoal font-medium" : "text-charcoal-muted"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight className="size-3 text-border/70 shrink-0" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
