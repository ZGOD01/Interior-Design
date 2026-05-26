import React from "react";

/**
 * Generates the local business schema for IIC Limited in Pune.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "IIC Limited | International Interior Contractor Private Limited",
    "image": "https://www.iiclimited.com/og-image.jpg",
    "@id": "https://www.iiclimited.com/#organization",
    "url": "https://www.iiclimited.com",
    "telephone": "+91 91194 91193",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H-7, Liberty Phase II, opposite Lane Number 6, Ragvilas Society, Koregaon Park",
      "addressLocality": "Pune",
      "postalCode": "411001",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5362,
      "longitude": 73.8940
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 91194 91193",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "mr"]
    }
  };
}

/**
 * Generates service-specific schemas for search engine verification.
 */
export function getServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "IIC Limited",
      "telephone": "+91 91194 91193",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "H-7, Liberty Phase II, Koregaon Park",
        "addressLocality": "Pune",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Pune"
    },
    "url": `https://www.iiclimited.com${url}`
  };
}

/**
 * Generates structured FAQ schema.
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

interface JsonLdProps {
  schema: Record<string, unknown>;
}

/**
 * Component to inject schema markup inside the page body/header cleanly.
 */
export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
