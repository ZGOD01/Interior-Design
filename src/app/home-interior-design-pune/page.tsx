import React from "react";
import type { Metadata } from "next";
import { LocalSEOPage } from "@/components/common/LocalSEOPage";
import { getLocalSeoData } from "@/data/localSeo";

const key = "home-interior-design-pune";

export async function generateMetadata(): Promise<Metadata> {
  const data = getLocalSeoData(key);
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: {
      canonical: `https://www.iiclimited.com/${data.slug}`,
    },
  };
}

export default function Page() {
  return <LocalSEOPage categoryKey={key} />;
}
