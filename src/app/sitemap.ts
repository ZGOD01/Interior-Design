import type { MetadataRoute } from "next";
import { blogData } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.iiclimited.com";
  const entries: MetadataRoute.Sitemap = [];

  // 1. Core pages
  const corePaths = ["", "/about", "/contact", "/portfolio", "/blog"];
  corePaths.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1.0 : 0.8,
    });
  });

  // 2. Service detail pages (both short and long slugs)
  const serviceSlugs = [
    "residential",
    "residential-interiors",
    "commercial",
    "commercial-interiors",
    "industrial",
    "industrial-interiors",
    "turnkey",
    "turnkey-projects",
    "civil",
    "civil-engineering",
  ];
  serviceSlugs.forEach((slug) => {
    entries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // 3. Local SEO landing pages (at root level)
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
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 4. Dynamic Blog articles
  blogData.forEach((post) => {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return entries;
}
