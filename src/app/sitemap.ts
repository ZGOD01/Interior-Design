import type { MetadataRoute } from "next";
import { blogData } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.iiclimited.com";
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // ── 1. Core pages ────────────────────────────────────────────────────────────
  const corePages: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",            priority: 1.0,  changeFreq: "weekly"  },
    { path: "/about",     priority: 0.8,  changeFreq: "monthly" },
    { path: "/services",  priority: 0.9,  changeFreq: "monthly" },
    { path: "/estimate",  priority: 0.9,  changeFreq: "monthly" },
    { path: "/projects",  priority: 0.8,  changeFreq: "weekly"  },
    { path: "/gallery",   priority: 0.7,  changeFreq: "weekly"  },
    { path: "/blog",      priority: 0.7,  changeFreq: "weekly"  },
    { path: "/contact",   priority: 0.85, changeFreq: "monthly" },
  ];

  corePages.forEach(({ path, priority, changeFreq }) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: changeFreq,
      priority,
    });
  });

  // ── 2. Service detail pages (canonical long-slug only) ────────────────────────
  const canonicalServiceSlugs = [
    "residential-interiors",
    "commercial-interiors",
    "industrial-interiors",
    "turnkey-projects",
    "civil-engineering",
  ];
  canonicalServiceSlugs.forEach((slug) => {
    entries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  });

  // ── 3. Local SEO landing pages ────────────────────────────────────────────────
  const localPageSlugs = [
    "interior-designers-pune",
    "office-interior-designers-pune",
    "home-interior-design-pune",
    "turnkey-interior-contractors-pune",
    "industrial-interior-designers-pune",
  ];
  localPageSlugs.forEach((slug) => {
    entries.push({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // ── 4. Blog articles ──────────────────────────────────────────────────────────
  blogData.forEach((post) => {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.65,
    });
  });

  return entries;
}
