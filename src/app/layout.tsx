import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
    default: "IIC Limited | Premium Interior Design & Turnkey Contracting Pune",
    template: "%s | IIC Limited"
  },
  description: "International Interior Contractor Private Limited (IIC Limited) delivers high-end residential, commercial, industrial interiors and civil contracting in Pune. Trusted turnkey design-build contractors.",
  keywords: ["Interior Design Pune", "Turnkey Contractor Pune", "Commercial Interiors Pune", "Civil Engineering Pune", "Residential Interiors Pune", "IIC Limited"],
  authors: [{ name: "IIC Limited" }],
  creator: "IIC Limited",
  metadataBase: new URL("https://www.iiclimited.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.iiclimited.com",
    title: "IIC Limited | Premium Interior Design & Turnkey Contracting Pune",
    description: "International Interior Contractor Private Limited (IIC Limited) delivers high-end residential, commercial, industrial interiors and civil contracting in Pune.",
    siteName: "IIC Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "IIC Limited | Premium Interior Design & Turnkey Contracting Pune",
    description: "International Interior Contractor Private Limited (IIC Limited) delivers high-end residential, commercial, industrial interiors and civil contracting in Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
