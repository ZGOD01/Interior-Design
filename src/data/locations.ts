export interface LocationItem {
  id: string;
  name: string;
  slug: string;
  type: "residential" | "commercial" | "industrial" | "all";
  description: string;
}

export const locationsData: LocationItem[] = [
  {
    id: "koregaon-park",
    name: "Koregaon Park",
    slug: "koregaon-park",
    type: "residential",
    description: "Bespoke luxury penthouses, custom villas, and premium structural styling fitouts."
  },
  {
    id: "hinjawadi",
    name: "Hinjawadi",
    slug: "hinjawadi",
    type: "commercial",
    description: "High-density open workstation layouts, acoustic boardrooms, and IT-park corporate hubs."
  },
  {
    id: "chakan",
    name: "Chakan",
    slug: "chakan",
    type: "industrial",
    description: "Heavy-duty concrete floorings, warehouse partitioning, cleanroom configurations, and administrative hubs under factory licensing rules."
  },
  {
    id: "kalyani-nagar",
    name: "Kalyani Nagar",
    slug: "kalyani-nagar",
    type: "commercial",
    description: "Creative design-build co-working spaces, corporate headquarters, and high-end conference suites."
  },
  {
    id: "baner",
    name: "Baner",
    slug: "baner",
    type: "all",
    description: "Premium commercial complexes, luxury residential apartments, and modern turnkey retail showrooms."
  }
];
