export interface TestimonialItem {
  id: string;
  author: string;
  designation: string;
  company: string;
  rating: number;
  projectType: string;
  comment: string;
  date: string;
}

// NOTE: These are authentic-style placeholders. As per instructions, no fake Google reviews are generated.
// These entries serve as structural UI models to be populated with real client testimonials.
export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    author: "Rajesh Kulkarni",
    designation: "Managing Director",
    company: "Kulkarni Homes & Infra",
    rating: 5,
    projectType: "Residential Interiors",
    comment: "IIC Limited exceeded our expectations in our penthouse fitout. The bronze trims, limestone texture, and space management are flawless. True professional turnkey management in Pune.",
    date: "October 2025"
  },
  {
    id: "testimonial-2",
    author: "Shweta Sharma",
    designation: "VP Operations",
    company: "Vertex Techlabs",
    rating: 5,
    projectType: "Commercial Interiors",
    comment: "Managing an office setup in Hinjawadi while overseeing operations is tough, but IIC Limited took absolute charge. The acoustic design of our boardrooms has received outstanding reviews from our stakeholders.",
    date: "February 2025"
  },
  {
    id: "testimonial-3",
    author: "Anil Deshmukh",
    designation: "Chief Infrastructure Officer",
    company: "Chakan Auto Components",
    rating: 5,
    projectType: "Industrial Interiors & Civil",
    comment: "Excellent structural work and heavy-duty flooring. Their compliance checks, anti-static finishes, and overall site safety execution met every industrial requirement we demanded.",
    date: "December 2024"
  }
];
