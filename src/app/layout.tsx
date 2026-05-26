import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IIC Limited | Interior Design & Turnkey Contracting Pune",
    template: "%s | IIC Limited",
  },
  description:
    "IIC Limited (International Interior Contractor) plans and delivers residential, commercial, and industrial interiors in Pune. Turnkey design-build contracting with locked BOQ pricing and engineer supervision.",
  keywords: [
    "interior designers Pune",
    "turnkey interior contractors Pune",
    "residential interior design Pune",
    "commercial interior designers Pune",
    "office interior designers Pune",
    "industrial interior designers Pune",
    "home interior design Pune",
    "civil interior contractors Pune",
    "IIC Limited",
    "interior contracting Pune",
  ],
  authors: [{ name: "IIC Limited" }],
  creator: "IIC Limited",
  publisher: "International Interior Contractor Private Limited",
  metadataBase: new URL("https://www.iiclimited.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iiclimited.com",
    title: "IIC Limited | Interior Design & Turnkey Contracting Pune",
    description:
      "IIC Limited plans and delivers residential, commercial, and industrial interiors in Pune. Turnkey design-build contracting with locked BOQ pricing and licensed engineer supervision.",
    siteName: "IIC Limited",
    images: [
      {
        url: "https://www.iiclimited.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIC Limited — Interior Design & Contracting Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIC Limited | Interior Design & Turnkey Contracting Pune",
    description:
      "IIC Limited plans and delivers residential, commercial, and industrial interiors in Pune. Turnkey design-build with locked BOQ pricing.",
    images: ["https://www.iiclimited.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here when available
    // google: "your-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-foreground"
        suppressHydrationWarning
      >
        {/* Global SEO Schemas */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  );
}
