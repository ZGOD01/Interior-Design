export interface LocalSeoData {
  id: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  localIntro: string;
  targetAudience: string;
  problemsSolved: { problem: string; solution: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqItems: { question: string; answer: string }[];
  relevantServicesSlugs: string[]; // Slugs of services to display links to
  imageUrl: string;
}

export const localSeoPagesMap: Record<string, LocalSeoData> = {
  "interior-designers-pune": {
    id: "interior-designers-pune",
    slug: "interior-designers-pune",
    seoTitle: "Premium Interior Designers in Pune | Design & Execution | IICL",
    seoDescription: "Searching for interior designers in Pune? IIC Limited offers architectural layout planning, custom modular finishes, and certified site execution with locked BOQs.",
    heroHeadline: "Interior Design and Precision Site Execution in Pune",
    heroSubtitle: "For clients who want both design clarity and reliable contracting under one roof",
    localIntro: "Whether you are looking to design a quiet luxury apartment in Koregaon Park, a modern bungalow in Baner, or a dynamic corporate headquarters in Hinjawadi, finding a reliable design partner in Pune can be complex. At IIC Limited, we combine creative spatial planning with structural site engineering.",
    targetAudience: "Pune property owners who value architectural layouts, certified material logs, detailed design blueprints, and strict engineering supervision over quick design templates.",
    problemsSolved: [
      { problem: "Visuals Mismatched with Site Reality", solution: "We run physical load scans and coordinate site engineering concurrently with 3D renderings." },
      { problem: "Subcontractor Dilution", solution: "We employ in-house certified civil engineers to direct all masonry, carpentry, and electrical trades." },
      { problem: "Random Material Subbing", solution: "Written brand locks are signed off before material loading. What you approve is exactly what is installed." }
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Audit", description: "Measuring actual slab deflections, floor levels, and utility grids." },
      { step: "02", title: "Circadian 3D", description: "Modeling spaces with custom furniture and realistic illumination pathing." },
      { step: "03", title: "BOQ Price Lock", description: "Finalizing exact itemized pricing documents to prevent budget creep." },
      { step: "04", title: "Engineer Supervision", description: "Supervising masonry, MEP execution, and finishing with site engineers." },
      { step: "05", title: "spotless Handover", description: "Executing a 150-point QA check and deep cleaning before key exchange." }
    ],
    faqItems: [
      { question: "What separates IICL from traditional decorators in Pune?", answer: "We are licensed design-build contractors. Traditional decorators only provide design drawings and delegate execution to subcontractors. We assume sole, written responsibility for both design and construction." },
      { question: "Do you design for premium flats in Pune?", answer: "Yes, we regularly design bespoke interiors for flats (3BHK, 4BHK, penthouses) in premium areas like Koregaon Park, Kalyani Nagar, Viman Nagar, and Baner." },
      { question: "Can we visit your active sites in Pune?", answer: "Absolutely. We arrange guided site walkthroughs at our active residential or office fitout projects so you can inspect our material quality and engineer supervision." }
    ],
    relevantServicesSlugs: ["residential-interiors", "commercial-interiors", "turnkey-projects"],
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
  },
  "office-interior-designers-pune": {
    id: "office-interior-designers-pune",
    slug: "office-interior-designers-pune",
    seoTitle: "Office Interior Designers in Pune | IT & Corporate Fitouts | IICL",
    seoDescription: "Office interior designers in Pune specializing in IT parks, corporate headquarters, and workspace zoning. Acoustic partitions, MEP networks, and civic compliance.",
    heroHeadline: "High-Performance Office Interiors for Pune Enterprises",
    heroSubtitle: "Acoustic, ergonomic, and regulatory-compliant fitouts designed to scale with your business",
    localIntro: "Pune's business landscape—from tech hubs in Hinjawadi and Kharadi to corporate rows in Baner—demands workspaces that optimize focus, collaboration, and spatial utility. IIC Limited builds custom commercial interiors designed around team ergonomics and strict compliance codes.",
    targetAudience: "Startups, tech companies, and corporate offices looking to establish collaborative boardrooms, soundproof meeting pods, modular desks, and clean data wiring setups.",
    problemsSolved: [
      { problem: "Acoustic Muddle", solution: "Double-glazed acoustic partitions and high-NRC ceiling panel installations." },
      { problem: "MEP Project Delay", solution: "Phased scheduling and parallel electrical/HVAC fits verified by site engineers." },
      { problem: "Non-Compliant Layouts", solution: "Strict mapping against municipal fire safety, building bylaws, and exit codes." }
    ],
    processSteps: [
      { step: "01", title: "Workforce Zoning", description: "Profiling headcount growth, utility requirements, and acoustic needs." },
      { step: "02", title: "Technical MEP Plan", description: "Designing server rooms, HVAC nodes, and data routing blueprints." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Phased Execution", description: "Scheduling shifts (night-work when needed) to prevent operational downtime." },
      { step: "05", title: "Systems Commissioning", description: "Load tests, air flow balancing, and civic safety sign-offs." }
    ],
    faqItems: [
      { question: "Do you build offices in Hinjawadi IT Parks?", answer: "Yes, we execute turnkey corporate office interiors in Hinjawadi (Phases I, II, III), Magarpatta City, and EON Free Zone in Kharadi." },
      { question: "What is the average timeline for an office fitout in Pune?", answer: "For a standard 5,000 to 10,000 sq. ft. commercial space, delivery takes approximately 60 to 75 business days, backed by written late-handover penalty credits." },
      { question: "Can you assist with PMC fire NOC clearances?", answer: "Yes, we coordinate all structural stability reports, fire marshal inspections, and commercial building clearances." }
    ],
    relevantServicesSlugs: ["commercial-interiors", "turnkey-projects"],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
  },
  "home-interior-design-pune": {
    id: "home-interior-design-pune",
    slug: "home-interior-design-pune",
    seoTitle: "Bespoke Home Interior Design Pune | Flat & Villa Fitouts | IICL",
    seoDescription: "Bespoke home interior design in Pune by IIC Limited. Premium kitchens, custom wardrobe storage, false ceiling integration, and written structural warranties.",
    heroHeadline: "Bespoke Home Interior Design and Execution in Pune",
    heroSubtitle: "Designing and building quiet luxury flat and villa interiors with engineered reliability",
    localIntro: "Your home should be a reflection of calm functionality. We construct custom home interiors across Pune—specializing in custom modular kitchens, smart storage cabinetry, biophilic light plans, and premium wall treatments. We combine creative design with engineering rigors.",
    targetAudience: "Pune apartment and villa owners seeking high-end finishes, Boiled Water Proof (BWP) carpentry, custom sizing, and a single accountable contractor.",
    problemsSolved: [
      { problem: "Warping Carpentry & Wood Rot", solution: "Exclusive use of IS 710 certified Boiling Water Proof marine plywood with 5-year warranties." },
      { problem: "Random Contractor Delays", solution: "Milestone-linked delay penalty clauses written into our primary contracts." },
      { problem: "Cluttered Storage", solution: "Bespoke spatial design utilizing sliding doors, walk-in closets, and corner fittings." }
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Survey", description: "Inspecting slab level margins, dampness checks, and utility entry points." },
      { step: "02", title: "Blueprinting & 3D", description: "Creating detailed layout configurations and rendering realistic views." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Precision Carpentry", description: "Building structures with high-grade marine ply and premium soft-close hardware." },
      { step: "05", title: "Clean Handover", description: "A 150-point QA check followed by deep sanitization before key transfer." }
    ],
    faqItems: [
      { question: "Do you design home interiors in Pune West (Baner/Balewadi)?", answer: "Yes, we regularly execute premium residential interiors in Baner, Balewadi, Wakad, Kothrud, and Aundh, as well as Pune East (Koregaon Park, Viman Nagar)." },
      { question: "What warranty do you offer on custom carpentry?", answer: "We provide a 5-year written structural warranty covering raw woodwork, core material stability, and premium fittings." },
      { question: "Are modular kitchen appliances included in the budget?", answer: "We specify slot sizes and coordinate custom cabinetry around your chosen appliances. We can procure appliances directly at corporate discount codes." }
    ],
    relevantServicesSlugs: ["residential-interiors", "turnkey-projects"],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
  },
  "turnkey-interior-contractors-pune": {
    id: "turnkey-interior-contractors-pune",
    slug: "turnkey-interior-contractors-pune",
    seoTitle: "Turnkey Interior Contractors in Pune | Design-Build | IICL",
    seoDescription: "Top turnkey interior contractors in Pune. Single-point design-build responsibility, locked BOQ estimates, certified civil engineering, and zero delay stress.",
    heroHeadline: "Zero-Friction Turnkey Interior Contractors in Pune",
    heroSubtitle: "Design, procurement, civil execution, and final handover under a single contract",
    localIntro: "Traditional contracting in Pune requires coordinating separate designers, carpenters, electricians, plumbers, and inspectors. IIC Limited acts as your single turnkey partner, assuming full, legally locked responsibility for design, materials, logistics, execution, and approvals.",
    targetAudience: "Pune business leads and home buyers who want to secure a fixed budget, lock delivery timelines, and eliminate contractor coordination headaches.",
    problemsSolved: [
      { problem: "Budget Cost Overruns", solution: "Once signed, we absorb any cost increases in steel, cement, or core materials." },
      { problem: "Subcontractor Misalignment", solution: "Our designers and civil engineers work under one firm, preventing site design errors." },
      { problem: "Long Inspection Loops", solution: "Site engineers run daily QA checks and log progress updates to save you visits." }
    ],
    processSteps: [
      { step: "01", title: "Conception & Cost Lock", description: "Drafting layouts directly against a locked budget configuration." },
      { step: "02", title: "Direct Sourcing", description: "Acquiring certified goods directly from manufacturers to bypass retail markups." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Coordinated Execution", description: "Civil adjustments, carpentry, and electrical grids executed concurrently." },
      { step: "05", title: "Validation Handover", description: "Final testing of all MEP systems, cleaning, and occupancy NOC handovers." }
    ],
    faqItems: [
      { question: "What does 'Turnkey' mean with IIC Limited?", answer: "It means absolute peace of mind. We manage everything: architectural plans, material sourcing, structural civil engineering, electrical/plumbing execution, and styling. You receive a fully complete, clean space ready for move-in." },
      { question: "How do you protect clients against budget creep?", answer: "We sign a locked Bill of Quantities (BOQ) contract. We guarantee in writing that the final price will not change, unless you request layout modifications mid-project." },
      { question: "Do you handle civil demolitions and repairs?", answer: "Yes, we maintain in-house civil engineering crews to execute demolitions, column reinforcements, plastering, and waterproofing." }
    ],
    relevantServicesSlugs: ["turnkey-projects", "civil-engineering"],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
  },
  "industrial-interior-designers-pune": {
    id: "industrial-interior-designers-pune",
    slug: "industrial-interior-designers-pune",
    seoTitle: "Industrial Interior Designers in Pune | Factory Offices | IICL",
    seoDescription: "Industrial interior designers in Pune serving Chakan and Bhosari MIDC. Certified cleanroom labs, heavy-duty ESD flooring, and fire-safe partitions.",
    heroHeadline: "Regulatory-Compliant Industrial Interior Design in Pune",
    heroSubtitle: "Engineering factory administrative offices, laboratories, and control rooms with safety and precision",
    localIntro: "Building workspace interiors inside heavy manufacturing plants in Chakan, Bhosari, or Talegaon MIDC requires advanced engineering parameters. We build high-durability, flame-retardant factory offices, testing labs, and plant workspaces that conform to strict ISO and safety clearances.",
    targetAudience: "Factory operators, logistics managers, and pharma project leads in Pune industrial nodes seeking dust-resistant, isolated, and structurally sound office blocks.",
    problemsSolved: [
      { problem: "Machinery Noise & Vibrations", solution: "Specifying acoustically decoupled wall framing and vibration-isolated sub-floors." },
      { problem: "Electrostatic Build-up", solution: "Installing certified anti-static (ESD) epoxy floor coatings." },
      { problem: "Dust and Fume Intrusion", solution: "Positive-pressure sealing systems and cleanroom-compliant joint paneling." }
    ],
    processSteps: [
      { step: "01", title: "Code Compliance Audit", description: "Evaluating chemical risk factors, fire codes, and dynamic slab loads." },
      { step: "02", title: "Engineering Layout", description: "Decoupling administrative zones from plant manufacturing floors." },
      { step: "03", title: "BOQ Line-Item Lock", description: "100% itemized pricing document finalized before site mobilization." },
      { step: "04", title: "Certified Execution", description: "Executing fitouts under strict on-site engineer oversight and safety protocols." },
      { step: "05", title: "Compliance Handover", description: "Stress testing ESD floor limits, seals, and delivering fire-marshal logs." }
    ],
    faqItems: [
      { question: "Do you design factory offices in Chakan MIDC?", answer: "Yes, we regularly build administrative office cabins, control rooms, and labs inside plants in Chakan, Bhosari, Talegaon, and Ranjangaon." },
      { question: "What materials do you use for cleanrooms?", answer: "We install non-porous cleanroom panels, dust-resistant joints, and high-efficiency particulate air (HEPA) ventilation grids." },
      { question: "Are your site crews trained for industrial safety?", answer: "Yes, our workers are certified, equipped with industrial PPE, and supervised directly by licensed civil site engineers." }
    ],
    relevantServicesSlugs: ["industrial-interiors", "civil-engineering"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
  }
};

export function getLocalSeoData(key: string): LocalSeoData {
  return localSeoPagesMap[key];
}
