export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "turnkey" | "design" | "cost" | "civil";
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is a Turnkey Project and how does it work with IIC Limited?",
    answer: "A turnkey project is an all-inclusive service where IIC Limited handles everything from design conceptualization and architectural drafting to material procurement, construction, civil work, and final decoration. You receive one contract and a single point of contact, ensuring your space is ready to move in with zero management stress.",
    category: "turnkey"
  },
  {
    id: "faq-2",
    question: "Do you provide custom design services without execution?",
    answer: "Yes, our team can deliver stand-alone interior design concepts, complete with high-fidelity 3D renderings and comprehensive Material Specification Sheets, allowing you to hire third-party contractors if you wish. However, we highly recommend our end-to-end turnkey service to ensure execution matches the design intent exactly.",
    category: "design"
  },
  {
    id: "faq-3",
    question: "How do you calculate budgets and ensure there are no cost overruns?",
    answer: "During our primary consultation and site audit, we prepare a detailed Itemized Bill of Quantities (BOQ). For turnkey projects, once the final design and BOQ are signed, we guarantee that budget in writing, assuming no customer-requested change orders are introduced during execution.",
    category: "cost"
  },
  {
    id: "faq-4",
    question: "Do you handle structural civil permissions and local corporation approvals in Pune?",
    answer: "Yes, our certified civil engineering team works directly with structural engineers and local municipal authorities in Pune to procure necessary structural stability permits, society clearances, and municipal floor-modification certificates where required.",
    category: "civil"
  },
  {
    id: "faq-5",
    question: "What is the typical timeline for an office or residential fitout in Pune?",
    answer: "An average premium 3BHK residential project takes between 45 to 60 days from design approval. Corporate offices (approximately 5,000 to 10,000 sq. ft.) are delivered in 60 to 75 days, utilizing parallel task-scheduling to compress schedules without cutting corners.",
    category: "turnkey"
  }
];
