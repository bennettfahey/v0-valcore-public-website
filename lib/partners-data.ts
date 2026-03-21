export interface Partner {
  name: string
  url: string
  domain: string
  description: string
}

export const partners: Partner[] = [
  { name: "Optio Systems", url: "https://optio-systems.com/", domain: "optio-systems.com", description: "Process control for feed, grain, paint & chemical manufacturing" },
  { name: "PigKnows", url: "https://www.pigknows.com/", domain: "pigknows.com", description: "Swine production management software" },
  { name: "Red Wing Software", url: "https://www.redwingsoftware.com/", domain: "redwingsoftware.com", description: "Accounting and payroll software for agriculture" },
  { name: "Vertical Software", url: "https://www.verticalsoftware.net/", domain: "verticalsoftware.net", description: "Grain accounting and scale automation" },
  { name: "WEM Automation", url: "https://www.wemautomation.com/", domain: "wemautomation.com", description: "Industrial automation for agriculture" },
  { name: "Matrix", url: "https://www.matrixcontrols.com/", domain: "matrixcontrols.com", description: "Industrial control systems for food & beverage" },
  { name: "Prophet", url: "https://www.prophetize.com/", domain: "prophetize.com", description: "ERP solutions for food & beverage" },
  { name: "Aldata Software", url: "https://aldatasoftware.com/", domain: "aldatasoftware.com", description: "Scale management for bulk materials" },
  { name: "AWS", url: "https://www.awsscales.com/", domain: "awsscales.com", description: "Aggregate weighing systems & software" },
  { name: "SMSTurbo / Fulcrum", url: "https://www.creativeinfo.net/", domain: "creativeinfo.net", description: "Scale management software for bulk materials" },
  { name: "DISCUS", url: "https://www.discussoftware.com/", domain: "discussoftware.com", description: "Quality engineering and manufacturing automation" },
  { name: "Documoto", url: "https://www.documoto.com/", domain: "documoto.com", description: "Parts catalog and content management" },
  { name: "Henning Software", url: "https://www.henningsoftware.com/", domain: "henningsoftware.com", description: "ERP for precision manufacturers" },
  { name: "ShopData", url: "https://www.shopdata.com/", domain: "shopdata.com", description: "CAD-CAM nesting software for fabrication" },
  { name: "GeoMetrix", url: "https://www.geometrix.com/", domain: "geometrix.com", description: "Rail logistics and transportation management" },
  { name: "GT Maritime", url: "https://www.gtmaritime.com/", domain: "gtmaritime.com", description: "Maritime software and cybersecurity" },
]

export function getPartnerLogoUrl(domain: string): string {
  return `https://img.logo.dev/${domain}?token=pk_Xwdp4Ef1RTiQ8dgmECd17g&size=60`
}
