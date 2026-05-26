export interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  imageUrl?: string;
}

export interface MaterialPartner {
  name: string;
  category: string;
  logoUrl?: string;
}

export const companyData = {
  legalName: "International Interior Contractor Private Limited",
  brandName: "IIC Limited",
  shortBrandName: "IICL",
  tagline: "Spaces designed with aesthetic clarity. Executed with civil precision.",
  foundedYear: 2011,
  pmcLicense: "PMC/LIC/CIVIL/2026/894",
  pcmcLicense: "PCMC/CON/STRUCT/2026/102",
  guarantees: [
    { title: "Locked BOQ Cost Protection", text: "We sign itemized BOQ contracts. Zero cost escalations once locked." },
    { title: "5-Year Structural Warranty", text: "Every structural beam, pour, and joint is certified for 5 full years." },
    { title: "Milestone Late Penalties", text: "If we miss our delivery milestone, we pay weekly penalty credits." },
    { title: "Daily Engineering Audits", text: "Licensed civil engineers supervise your concrete and assembly works daily." }
  ],
  engineeringStandards: [
    "IS 456:2000 Structural Concrete Design specifications",
    "IS 1904:1986 Foundation Engineering foundations in Pune soils",
    "ISO 9001:2015 Site Safety & Procurement certifications"
  ],
  team: [
    { name: "Rahul Deshmukh", role: "Principal Architect & Director", credentials: "B.Arch, IIA" },
    { name: "Vikram Phadke", role: "Chief Structural Engineer", credentials: "M.Tech Civil (COEP)" },
    { name: "Ananya Mehta", role: "Head of Interior Design", credentials: "M.Des (CEPT University)" }
  ] as TeamMember[],
  materialPartners: [
    { name: "Saint-Gobain", category: "High-Acoustic Glass & Drywalls" },
    { name: "Greenply", category: "IS 710 Marine Grade Plywood" },
    { name: "Asian Paints", category: "Low-VOC Premium Finishes" },
    { name: "Schneider Electric", category: "Integrated Home Automation Systems" }
  ] as MaterialPartner[]
};
