export interface Partner {
  name: string
  url: string
  logo: string
  description: string
}

export const partners: Partner[] = [
  // Agriculture
  { name: "DataStor", url: "https://www.datastorsystems.com/", logo: "/partners/datastor.webp", description: "Control systems and batching software for feed and chemical plants" },
  { name: "DSL Systems", url: "https://www.dsl-systems.com/", logo: "/partners/dsl.webp", description: "Control systems and automation software for feed and grain plants" },
  { name: "PigKnows", url: "https://pigknows.com/", logo: "/partners/pigknows.webp", description: "Cloud-based swine production management software" },
  { name: "Red Wing Software", url: "https://www.redwingsoftware.com/home/home.aspx", logo: "/partners/redwing.webp", description: "Accounting and payroll software for agriculture" },
  { name: "Vertical Software", url: "https://www.verticalsoftware.net/", logo: "/partners/vertical.webp", description: "Grain accounting and scale automation" },
  { name: "WEM Automation", url: "https://wemautomation.com/", logo: "/partners/wem.webp", description: "Control systems and automation for feed and asphalt plants" },
  // Food & Beverage
  { name: "Matrix", url: "https://matrixcontrols.com/", logo: "/partners/matrix.webp", description: "Real-time food processing software for yield control and traceability" },
  { name: "Prophet", url: "https://www.prophetize.com/", logo: "/partners/prophet.webp", description: "ERP for the fresh-produce supply chain" },
  // Bulk Materials
  { name: "Aldata Software", url: "https://aldatasoftware.com/", logo: "/partners/aldata.webp", description: "Log and timber fiber-supply management software" },
  { name: "AWS", url: "https://awsys.com/", logo: "/partners/aws.webp", description: "Truck scale ticketing and data collection for aggregates and mining" },
  { name: "Creative Info Systems", url: "https://www.creativeinfo.net/", logo: "/partners/cis.webp", description: "Cloud-based truck scale ticketing for aggregates, mining, and waste" },
  // Manufacturing & Fabrication
  { name: "DISCUS", url: "https://www.discussoftware.com/", logo: "/partners/discus.webp", description: "Quality control software for manufacturers" },
  { name: "Documoto", url: "https://www.documoto.com/", logo: "/partners/documoto.webp", description: "Cloud platform for online parts catalogs" },
  { name: "Henning Software", url: "https://www.henningsoftware.com/", logo: "/partners/henning.png", description: "ERP for precision manufacturers" },
  { name: "ShopData", url: "https://shopdata.com/", logo: "/partners/shopdata.png", description: "CAD-CAM nesting software for metal fabrication" },
  // Logistics
  { name: "GeoMetrix", url: "https://www.geometrix.com/", logo: "/partners/geometrix.webp", description: "Rail logistics and transportation management" },
  { name: "GT Maritime", url: "https://www.gtmaritime.com/", logo: "/partners/gtmaritime.webp", description: "Secure maritime email and cybersecurity" },
]
