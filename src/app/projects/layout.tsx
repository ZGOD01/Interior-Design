import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Projects in Pune | Portfolio | IIC Limited",
  description:
    "Browse IIC Limited's portfolio of residential, commercial, industrial, and turnkey interior projects in Pune. Completed projects in Koregaon Park, Hinjawadi, Chakan, and across Pune.",
  keywords: [
    "interior design projects Pune",
    "interior portfolio Pune",
    "residential interior project Pune",
    "office fitout project Pune",
    "industrial interior project Pune",
  ],
  alternates: {
    canonical: "https://www.iiclimited.com/projects",
  },
  openGraph: {
    title: "Interior Design Portfolio | IIC Limited Pune",
    description:
      "Completed residential, commercial, and industrial interior projects across Pune by IIC Limited.",
    url: "https://www.iiclimited.com/projects",
    type: "website",
    images: [
      {
        url: "https://www.iiclimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIC Limited Interior Projects — Portfolio Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Projects Portfolio | IIC Limited Pune",
    description:
      "Residential, commercial, and industrial interior projects in Pune by IIC Limited.",
    images: ["https://www.iiclimited.com/og-image.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
