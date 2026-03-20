export interface Vendor {
  name: string
  domain: string
}

export interface Category {
  slug: string
  name: string
  description: string
  bullets: string[]
  vendors: Vendor[]
}

export const categories: Category[] = [
  {
    slug: "office-workplace",
    name: "Office & Workplace Supplies",
    description: "Comprehensive office and workplace solutions from industry-leading vendors.",
    bullets: [
      "Office supplies & paper products",
      "Janitorial & breakroom",
      "Furniture & ergonomics",
      "Ink, toner & printing",
    ],
    vendors: [
      { name: "Staples", domain: "staples.com" },
      { name: "ODP Business Solutions", domain: "odpbusiness.com" },
      { name: "Ricoh", domain: "ricoh.com" },
    ],
  },
  {
    slug: "mro",
    name: "MRO (Maintenance, Repair & Operations)",
    description: "Industrial maintenance, repair, and operations supplies from trusted partners.",
    bullets: [
      "Industrial tools & hardware",
      "Electrical & lighting",
      "Plumbing & HVAC",
      "Fasteners & raw materials",
    ],
    vendors: [
      { name: "Grainger", domain: "grainger.com" },
      { name: "MSC Industrial", domain: "mscdirect.com" },
      { name: "Global Industrial", domain: "globalindustrial.com" },
    ],
  },
  {
    slug: "packaging-shipping",
    name: "Packaging & Shipping",
    description: "End-to-end packaging and shipping solutions for businesses of all sizes.",
    bullets: [
      "Custom & stock boxes",
      "Stretch wrap & strapping",
      "Cushioning & void fill",
      "Small parcel shipping (DHL/UPS)",
    ],
    vendors: [
      { name: "Trinity Packaging", domain: "trinitypackaging.com" },
      { name: "DHL", domain: "dhl.com" },
      { name: "UPS", domain: "ups.com" },
    ],
  },
  {
    slug: "safety-ppe",
    name: "Safety Equipment & PPE",
    description: "Keep your workforce protected with premium safety equipment and PPE.",
    bullets: [
      "Gloves, eyewear, respirators",
      "Hard hats & head protection",
      "Hi-vis & protective clothing",
      "First aid & emergency supplies",
    ],
    vendors: [
      { name: "Arbill", domain: "arbill.com" },
      { name: "Medline", domain: "medline.com" },
    ],
  },
  {
    slug: "technology-hardware",
    name: "Technology & Hardware",
    description: "Enterprise technology solutions and hardware from leading IT providers.",
    bullets: [
      "Laptops, desktops & servers",
      "Software & cloud services",
      "Networking & security",
      "Managed IT services",
    ],
    vendors: [
      { name: "B&H Photo", domain: "bhphotovideo.com" },
      { name: "CDW", domain: "cdw.com" },
      { name: "Insight", domain: "insight.com" },
    ],
  },
  {
    slug: "fleet-automotive",
    name: "Fleet & Automotive Parts",
    description: "Fleet management and automotive parts for commercial vehicles.",
    bullets: [
      "Filters, brake pads & rotors",
      "Belts, hoses & engine parts",
      "Batteries & electrical",
      "Vehicle rental programs",
    ],
    vendors: [
      { name: "Hertz", domain: "hertz.com" },
      { name: "Mighty Auto Parts", domain: "mightyautoparts.com" },
    ],
  },
  {
    slug: "uniforms-facility",
    name: "Uniforms & Facility Services",
    description: "Professional uniform programs and facility service solutions.",
    bullets: [
      "Uniform rental & purchase",
      "Flame-resistant apparel",
      "Mat & facility services",
      "First aid compliance",
    ],
    vendors: [
      { name: "UniFirst", domain: "unifirst.com" },
      { name: "Cintas", domain: "cintas.com" },
    ],
  },
  {
    slug: "industrial-supplies",
    name: "Industrial Supplies & Equipment",
    description: "Heavy-duty industrial supplies and equipment rentals for demanding operations.",
    bullets: [
      "Industrial gases & welding",
      "Power transmission components",
      "Paint & coatings",
      "Equipment rental",
    ],
    vendors: [
      { name: "Airgas", domain: "airgas.com" },
      { name: "Sherwin-Williams", domain: "sherwin-williams.com" },
      { name: "United Rentals", domain: "unitedrentals.com" },
      { name: "Ferrellgas", domain: "ferrellgas.com" },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug)
}

export function getLogoUrl(domain: string): string {
  return `https://img.logo.dev/${domain}?token=pk_Xwdp4Ef1RTiQ8dgmECd17g&size=60`
}
