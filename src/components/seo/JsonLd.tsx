import React from "react";
import { companyData } from "@/data/company";

const BASE_URL = "https://www.iiclimited.com";

// ── Organization Schema ───────────────────────────────────────────────────────
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: companyData.legalName,
    alternateName: [companyData.brandName, companyData.shortBrandName],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 300,
      height: 60,
    },
    image: `${BASE_URL}/og-image.jpg`,
    description:
      "IIC Limited (International Interior Contractor Private Limited) is a Pune-based turnkey interior design and civil contracting company serving residential, commercial, and industrial clients across Pune since 2011.",
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
    foundingDate: String(companyData.foundedYear),
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Pimpri-Chinchwad" },
    ],
    sameAs: [
      "https://www.instagram.com/iiclimited",
      "https://www.linkedin.com/company/iiclimited",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// ── WebSite Schema (for homepage) ─────────────────────────────────────────────
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "IIC Limited",
    description:
      "Premium interior design and turnkey contracting in Pune. Residential, commercial, industrial interiors and civil engineering.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// ── Local Business Schema ─────────────────────────────────────────────────────
interface LocalBusinessJsonLdProps {
  url?: string;
  serviceType?: string;
}

export function LocalBusinessJsonLd({
  url = BASE_URL,
  serviceType,
}: LocalBusinessJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}/#localbusiness`,
    name: companyData.legalName,
    alternateName: companyData.brandName,
    url,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/og-image.jpg`,
    description:
      "IIC Limited is a Pune-based turnkey interior design and civil contracting firm. We deliver residential, commercial, and industrial interiors with locked BOQ pricing, engineer supervision, and 5-year structural warranties.",
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
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, Cheque",
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Pimpri-Chinchwad" },
    ],
    ...(serviceType && { knowsAbout: serviceType }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Design & Contracting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Interior Design",
            areaServed: "Pune",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Interior Design",
            areaServed: "Pune",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Interior Design",
            areaServed: "Pune",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Turnkey Interior Projects",
            areaServed: "Pune",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil Engineering & Contracting",
            areaServed: "Pune",
          },
        },
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
      "@id": `${BASE_URL}/#localbusiness`,
      name: companyData.legalName,
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Pimpri-Chinchwad" },
    ],
    serviceType: "Interior Design and Contracting",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Custom quote based on project scope",
      },
    },
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
