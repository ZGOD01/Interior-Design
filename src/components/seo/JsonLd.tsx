import React from "react";
import { companyData } from "@/data/company";

// ── Local Business Schema ─────────────────────────────────────────────────────
interface LocalBusinessJsonLdProps {
  url?: string;
}

export function LocalBusinessJsonLd({ url = "https://www.iiclimited.com" }: LocalBusinessJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: companyData.legalName,
    alternateName: companyData.brandName,
    url,
    logo: `${url}/logo.png`,
    image: `${url}/og-image.jpg`,
    description:
      "IIC Limited is Pune's premium interior contracting firm offering residential, commercial, industrial interiors and turnkey civil engineering projects.",
    telephone: "+91-911-949-1193",
    email: "info@iiclimited.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 14, Samarth Arcade, Baner Road",
      addressLocality: "Baner",
      addressRegion: "Pune",
      postalCode: "411045",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5590",
      longitude: "73.7868",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "₹₹₹",
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Pimpri-Chinchwad" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Design & Contracting Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Interiors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Interiors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Interiors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey Projects" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Engineering" } },
      ],
    },
    sameAs: [
      "https://www.instagram.com/iiclimited",
      "https://www.linkedin.com/company/iiclimited",
    ],
    foundingDate: String(companyData.foundedYear),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// ── Service Page Schema ───────────────────────────────────────────────────────
interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export function ServiceJsonLd({ name, description, url, imageUrl }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    ...(imageUrl && { image: imageUrl }),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: companyData.legalName,
      url: "https://www.iiclimited.com",
    },
    areaServed: { "@type": "City", name: "Pune" },
    serviceType: "Interior Design and Contracting",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// ── FAQ Page Schema ────────────────────────────────────────────────────────────
interface FaqJsonLdProps {
  items: { question: string; answer: string }[];
}

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// ── BreadcrumbList Schema ─────────────────────────────────────────────────────
interface BreadcrumbJsonLdItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbJsonLdItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
