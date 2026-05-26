export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: ServiceProcessStep[];
  imageUrl: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "residential",
    slug: "residential",
    title: "Residential Interiors",
    subtitle: "Custom Bespoke Homes Designed for Modern Living",
    iconName: "Home",
    shortDescription: "Tailored luxury living spaces, modular kitchens, customized bedrooms, and elegant lounges that balance functionality and timeless design.",
    longDescription: "At IIC Limited, we believe home is a reflection of your personality. Our residential team creates customized, luxurious, and highly functional residential designs. From luxury apartments to spacious villas in Pune, we offer end-to-end design, execution, and furnishing services with meticulous attention to detail.",
    features: [
      "Custom Modular Kitchen Designs",
      "Bespoke Living Room & Lounge Layouts",
      "Elegant Wardrobe & Storage Solutions",
      "Tailored False Ceilings & Lighting Plans",
      "Curated Material & Decor Selections"
    ],
    benefits: [
      "Maximum space utilization for urban apartments",
      "Harmonious palettes tailored to your aesthetics",
      "High-grade premium materials with full durability warranties"
    ],
    process: [
      { title: "Consultation & Discovery", description: "Understanding your lifestyle, design taste, and budget parameters." },
      { title: "Space Planning & Layouts", description: "Developing highly efficient structural drafts and flow charts." },
      { title: "3D Design & Materialization", description: "Rendering photorealistic visuals and choosing fine textures." },
      { title: "Execution & Fit-out", description: "Immaculate craftsmanship on-site under strict safety rules." },
      { title: "Handover", description: "A spotless walkthrough of your newly designed personal sanctuary." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial Interiors",
    subtitle: "Productive, Inspiring, and Strategic Workspaces",
    iconName: "Briefcase",
    shortDescription: "Corporate offices, retail outlets, co-working spaces, and premium lounges designed to maximize productivity and represent corporate brand identities.",
    longDescription: "We design business environments that inspire collaboration, drive productivity, and convey your corporate vision. Our corporate team delivers office layouts that prioritize modern aesthetics, acoustic ergonomics, smart lighting, and flexible floor planning for growing enterprises in Pune's IT and business parks.",
    features: [
      "Ergonomic Open-Office Workstations",
      "Acoustic Conference Rooms & Boardrooms",
      "Corporate Reception & Lounge Architecture",
      "Integrated Smart Workspace Technology",
      "Branded Environmental Graphics"
    ],
    benefits: [
      "Optimized flow and collaboration dynamics",
      "Strict compliance with fire, safety, and local building codes",
      "Future-proof structures allowing modular adjustments"
    ],
    process: [
      { title: "Corporate Briefing", description: "Mapping workforce dynamics, brand principles, and structural needs." },
      { title: "Zoning & Flow Analysis", description: "Acoustic profiling and collaborative zone charting." },
      { title: "Technical Drafting & Fitouts", description: "Detailed electrical, HVAC, and data cabling layout planning." },
      { title: "Production & Installation", description: "Executing fitouts with zero disturbance to active premises when possible." },
      { title: "Commissioning", description: "Testing all systems and handing over a fully certified, high-performance office." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "industrial",
    slug: "industrial",
    title: "Industrial Interiors",
    subtitle: "High-Performance Facilities prioritizing Safety and Efficiency",
    iconName: "Factory",
    shortDescription: "Heavy-duty manufacturing environments, laboratory controls, warehouse operations, and robust control room infrastructure built to rigid regulatory standards.",
    longDescription: "Our industrial interior division handles high-compliance projects. We design and construct heavy-duty setups, cleanrooms, research labs, and factory administrative zones in industrial nodes across Pune. We emphasize durability, dust-containment, thermal insulation, and extreme safety parameters.",
    features: [
      "Heavy-Duty Epoxy & Anti-Static Flooring",
      "High-Containment Control Room Shells",
      "Industrial Administrative Offices",
      "Ventilation & Safety Partition Shells",
      "Cleanroom Compliant Panel Infillings"
    ],
    benefits: [
      "Resilient materials designed for corrosive environments",
      "Enhanced worker safety through deliberate physical design",
      "Alignment with ISO standards and pollution control parameters"
    ],
    process: [
      { title: "Compliance Check & Audits", description: "Verifying exact industrial safety codes, chemical resistancies, and load bearings." },
      { title: "Engineering Blueprinting", description: "Aligning architectural internals with heavy mechanical processes." },
      { title: "Material Selection", description: "Sourcing certified fire-resistant, anti-static, and heavy-duty materials." },
      { title: "Robust Execution", description: "Employing specialized industrial civil workers under expert engineer oversight." },
      { title: "Safety Sign-off", description: "Full stress tests and compliance handovers." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "turnkey",
    slug: "turnkey",
    title: "Turnkey Projects",
    subtitle: "End-to-End Design-Build Management Under One Roof",
    iconName: "Layers",
    shortDescription: "A singular point of accountability encompassing architecture, interior execution, project management, and procurement for absolute budget and time control.",
    longDescription: "Our turnkey projects eliminate the stress of handling multiple contractors. IIC Limited acts as your single point of contact. We assume full responsibility for the entire project life cycle—from initial architectural drawings and municipal approvals to raw material procurement, civil works, styling, and final handover.",
    features: [
      "Singular Management & Contact Point",
      "Comprehensive Budget Guarantee Layouts",
      "Procurement and Global Logistics Management",
      "Dedicated On-site Project Managers",
      "Integrated Progress Dashboard Handovers"
    ],
    benefits: [
      "Zero coordinate friction between architect and contractor",
      "Strict defense against budget overruns and timeline creep",
      "Peace of mind with structured, milestone-based updates"
    ],
    process: [
      { title: "Integrated Conception", description: "Unifying architectural concepts with execution budgets." },
      { title: "Material Procurement & Bidding", description: "Acquiring certified goods at direct contracting prices." },
      { title: "Unified Project Planning", description: "Scheduling a comprehensive timeline with daily tracking targets." },
      { title: "Parallel Construction & Assembly", description: "Civil works, electrical networks, and styling executed concurrently." },
      { title: "Final Certification & Handover", description: "Strict quality checks and handover of all legal/structural credentials." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "civil",
    slug: "civil",
    title: "Civil Engineering",
    subtitle: "Strong, Compliant Foundations for Architectural Structures",
    iconName: "Hammer",
    shortDescription: "Structural retrofits, concrete foundations, load-bearing framework creations, and complete building shell construction built to survive generations.",
    longDescription: "A beautiful interior requires a flawless structure. Our civil engineering division undertakes structural repairs, floor expansions, wall reconstructions, concrete pours, and structural retrofitting. Led by certified engineers in Pune, we ensure every structural modification is structurally sound, code-compliant, and built with concrete materials.",
    features: [
      "Foundation Concrete Engineering & Grouting",
      "Structural Steel Fabrications & Retrofits",
      "Demolitions & Safe Internal Remodeling",
      "Premium Brickwork, Plastering, & Underlayments",
      "Advanced Structural Waterproofing Treatments"
    ],
    benefits: [
      "Certified structural integrity backed by engineering calculations",
      "Long-lasting water protection for all concrete elements",
      "Seamless integration with upcoming aesthetic finishings"
    ],
    process: [
      { title: "Geological & Structural Scans", description: "Inspecting core foundation integrity and beam load distributions." },
      { title: "Engineering Blueprint Approvals", description: "Acquiring certified engineer seals and municipal clearances." },
      { title: "Raw Material Batch Quality Audits", description: "Verifying exact concrete grades, steel tensile strengths, and mortar blends." },
      { title: "Precision Structural Execution", description: "Executing raw foundations under the direction of master site engineers." },
      { title: "Core Load Handovers", description: "Issuing architectural stability certifications." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
  }
];
