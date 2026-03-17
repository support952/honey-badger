export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  tag: string;
  description: string;
  details: string[];
  featured?: boolean;
}

export const categories = [
  "All Services",
  "Visa Strategy",
  "Business Planning",
  "Financial Services",
  "Document Packages",
  "Corporate Setup",
  "Digital Products",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "e2-full-blueprint",
    title: "Full E2 Visa Blueprint",
    price: 5000,
    category: "Visa Strategy",
    tag: "Most Popular",
    description:
      "Complete end-to-end E2 visa strategy including business plan, financial projections, and go-to-market framework. Our flagship package.",
    details: [
      "Comprehensive E2 business plan",
      "3–5 year financial projections",
      "Go-to-market strategy",
      "Investment structure advisory",
      "Consulate interview preparation",
      "60-day post-filing support",
    ],
    featured: true,
  },
  {
    id: "custom-business-plan",
    title: "Custom Business Plan",
    price: 1000,
    category: "Business Planning",
    tag: "Essential",
    description:
      "A meticulously crafted business plan tailored to E2 visa requirements and your specific industry vertical.",
    details: [
      "Industry & market analysis",
      "Competitive positioning",
      "Revenue model design",
      "Operational framework",
      "Executive summary for consulate",
    ],
  },
  {
    id: "financial-projections",
    title: "Financial Projections",
    price: 1000,
    category: "Financial Services",
    tag: "Strategy",
    description:
      "Detailed 3–5 year financial forecasts with revenue modeling, expense breakdowns, and break-even analysis.",
    details: [
      "Revenue & expense forecasting",
      "Break-even analysis",
      "Cash flow projections",
      "Sensitivity scenarios",
      "Investor-ready formatting",
    ],
  },
  {
    id: "financial-model-excel",
    title: "Financial Model Creation",
    price: 1200,
    category: "Financial Services",
    tag: "Premium",
    description:
      "Institutional-grade Excel financial model with dynamic assumptions, scenario analysis, and investor dashboards.",
    details: [
      "Dynamic Excel workbook",
      "3-scenario modeling",
      "Automated dashboards",
      "Assumption controls",
      "Valuation framework",
      "Lifetime model access",
    ],
  },
  {
    id: "multi-entity-planning",
    title: "Multi-Entity Structure",
    price: 2000,
    category: "Corporate Setup",
    tag: "Advanced",
    description:
      "Strategic planning for multi-entity corporate structures, holding companies, and cross-border operations.",
    details: [
      "Entity structure design",
      "Tax optimization advisory",
      "Inter-company agreements",
      "Compliance framework",
      "State selection guidance",
    ],
  },
  {
    id: "cash-flow-analysis",
    title: "Cash Flow Analysis",
    price: 300,
    category: "Financial Services",
    tag: "Operations",
    description:
      "Detailed cash flow review and optimization plan to ensure your business maintains healthy liquidity.",
    details: [
      "Current state assessment",
      "Cash cycle optimization",
      "Working capital analysis",
      "Receivables strategy",
    ],
  },
  {
    id: "risk-compliance-review",
    title: "Risk & Compliance Review",
    price: 300,
    category: "Corporate Setup",
    tag: "Operations",
    description:
      "Comprehensive review of your business risk profile and regulatory compliance landscape in the U.S. market.",
    details: [
      "Regulatory risk assessment",
      "Compliance gap analysis",
      "Mitigation recommendations",
      "Documentation audit",
    ],
  },
  {
    id: "business-doc-package",
    title: "Business Document Package",
    price: 275,
    category: "Document Packages",
    tag: "Starter",
    description:
      "Essential business documentation bundle prepared to consulate standards — ideal for straightforward E2 applications.",
    details: [
      "Application cover letter",
      "Investment evidence compilation",
      "Business overview document",
      "Supporting exhibits",
    ],
  },
  {
    id: "family-doc-package",
    title: "Family & Personal Package",
    price: 200,
    category: "Document Packages",
    tag: "Personal",
    description:
      "Document preparation for dependent family members — ensuring your spouse and children are covered.",
    details: [
      "Dependent applications",
      "Relationship evidence",
      "Personal statement drafting",
      "Document translation coordination",
    ],
  },
  {
    id: "expedite-package",
    title: "Expedited Processing",
    price: 600,
    category: "Visa Strategy",
    tag: "Fast Track",
    description:
      "Priority handling with accelerated timelines. Full application preparation within 7–14 business days.",
    details: [
      "7–14 day turnaround",
      "Dedicated case manager",
      "Priority document review",
      "Rush coordination",
      "Daily status updates",
    ],
  },
  {
    id: "financial-template",
    title: "Financial Model Template",
    price: 1000,
    category: "Digital Products",
    tag: "Self-Service",
    description:
      "Pre-built, E2-optimized financial model template. Plug in your numbers and generate consulate-ready projections.",
    details: [
      "Plug-and-play Excel template",
      "Built-in formulas",
      "E2 visa compliance checks",
      "Video walkthrough included",
      "Free updates for 1 year",
    ],
  },
  {
    id: "financial-model-basic",
    title: "Financial Model Setup",
    price: 500,
    category: "Financial Services",
    tag: "Essentials",
    description:
      "We build a foundational financial model for your business — clean, clear, and ready for your E2 application.",
    details: [
      "Revenue model setup",
      "Expense framework",
      "Basic projections",
      "Clean formatting",
    ],
  },
];

export const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Alphabetical", value: "alpha" },
] as const;

export function sortProducts(items: Product[], sort: string): Product[] {
  const sorted = [...items];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "alpha":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "featured":
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}
