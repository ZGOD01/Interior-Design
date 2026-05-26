export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: "residential" | "commercial" | "industrial" | "turnkey" | "civil";
  categoryLabel: string;
  client: string;
  location: string;
  year: string;
  area: string;
  description: string;
  images: string[];
  deliverables: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "koregaon-park-residence",
    title: "Minimalist Luxury Apartment",
    slug: "minimalist-luxury-apartment",
    category: "residential",
    categoryLabel: "Residential Interiors",
    client: "Private Residence",
    location: "Koregaon Park, Pune",
    year: "2025",
    area: "3,200 Sq. Ft.",
    description: "A premium minimalist sanctuary emphasizing raw limestone walls, bronze highlights, hidden storage, and imported Italian marble finishes to establish large whitespace and architectural serenity.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    ],
    deliverables: ["Space Optimization", "Modular Kitchen Integration", "Acoustic Paneled Master Suite", "Custom Marble Vanity Architecture"]
  },
  {
    id: "hinjawadi-it-hq",
    title: "Next-Gen Corporate HQ",
    slug: "next-gen-corporate-hq",
    category: "commercial",
    categoryLabel: "Commercial Interiors",
    client: "Vertex Systems",
    location: "Hinjawadi Phase II, Pune",
    year: "2024",
    area: "24,000 Sq. Ft.",
    description: "An open-office setup created for high productivity and employee wellbeing, incorporating soft felt divider screens, custom workstations, and interactive hot-desking configurations.",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539628399243-734011af57ee?q=80&w=1200&auto=format&fit=crop"
    ],
    deliverables: ["HVAC & Integrated Wiring Shells", "Collaborative Phone Booths", "Acoustic Meeting Pod Designs", "Custom Brand Wall Artworks"]
  },
  {
    id: "chakan-automation-plant",
    title: "Precision Industrial Facility",
    slug: "precision-industrial-facility",
    category: "industrial",
    categoryLabel: "Industrial Interiors",
    client: "Auro Heavy Industries",
    location: "Chakan MIDC, Pune",
    year: "2025",
    area: "45,000 Sq. Ft.",
    description: "A high-performance plant housing precision industrial lines. The project featured heavy-duty epoxy finishes, thermal partitioning layers, and dust-resistant cleanroom panels.",
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
    ],
    deliverables: ["Anti-Static Epoxy Flooring", "Administrative Laboratory Shells", "HVAC Dust-Containment Integration", "Heavy Loading Dock Reinforcements"]
  },
  {
    id: "viman-nagar-penthouse",
    title: "Turnkey Bespoke Penthouse",
    slug: "turnkey-bespoke-penthouse",
    category: "turnkey",
    categoryLabel: "Turnkey Projects",
    client: "Private Client",
    location: "Viman Nagar, Pune",
    year: "2025",
    area: "5,500 Sq. Ft.",
    description: "An all-inclusive design-build luxury penthouse. IIC Limited managed every phase: structural adjustments, procurement of premium marble and custom bronze fittings, down to styling handovers.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop"
    ],
    deliverables: ["Bespoke Interior Plan", "Municipal Structural Approvals", "Global Furniture Procurement", "Custom Automation & Security Setup"]
  },
  {
    id: "kothrud-structural-retrofit",
    title: "Civil Retrofitting & Foundation",
    slug: "civil-retrofitting-foundation",
    category: "civil",
    categoryLabel: "Civil Engineering",
    client: "Elite Plaza Association",
    location: "Kothrud, Pune",
    year: "2024",
    area: "12,000 Sq. Ft.",
    description: "Critical structural strengthening of an older commercial retail block in Kothrud, utilizing structural steel carbon-fiber columns and dynamic pressure concrete grouting.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop"
    ],
    deliverables: ["Foundation Underpinning", "Steel Column Encasing", "Severe Waterproofing Barriers", "Slab Deflection Realignment"]
  }
];
