export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNavigation: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Interiors", href: "/services/residential" },
      { label: "Commercial Interiors", href: "/services/commercial" },
      { label: "Industrial Interiors", href: "/services/industrial" },
      { label: "Turnkey Projects", href: "/services/turnkey" },
      { label: "Civil Engineering", href: "/services/civil" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const contactDetails = {
  address: {
    street: "H-7, Liberty Phase II, opposite Lane Number 6, Ragvilas Society, Koregaon Park",
    city: "Pune",
    state: "Maharashtra",
    zip: "411001",
    country: "India",
    display: "H-7, Liberty Phase II, opposite Lane Number 6, Ragvilas Society, Koregaon Park, Pune, Maharashtra 411001"
  },
  phones: [
    { value: "+91 91194 91193", label: "Mobile / WhatsApp" },
    { value: "020 29999089", label: "Landline" }
  ],
  email: "info@iiclimited.com",
  hours: {
    days: "Monday - Saturday",
    time: "10:00 AM - 7:00 PM",
    sunday: "Closed"
  },
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  }
};
