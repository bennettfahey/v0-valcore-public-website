"use client"

const vendors = [
  { name: "Staples", domain: "staples.com" },
  { name: "ODP Business Solutions", domain: "odpbusiness.com" },
  { name: "Grainger", domain: "grainger.com" },
  { name: "MSC Industrial", domain: "mscdirect.com" },
  { name: "Global Industrial", domain: "globalindustrial.com" },
  { name: "Trinity Packaging", domain: "trinitypackaging.com" },
  { name: "Arbill", domain: "arbill.com" },
  { name: "Medline", domain: "medline.com" },
  { name: "Motion Industries", domain: "motionindustries.com" },
  { name: "Sherwin-Williams", domain: "sherwin-williams.com" },
  { name: "Home Depot", domain: "homedepot.com" },
  { name: "Airgas", domain: "airgas.com" },
  { name: "Ferrellgas", domain: "ferrellgas.com" },
  { name: "Hertz", domain: "hertz.com" },
  { name: "DHL", domain: "dhl.com" },
  { name: "UPS", domain: "ups.com" },
  { name: "Mighty Auto Parts", domain: "mightyautoparts.com" },
  { name: "UniFirst", domain: "unifirst.com" },
  { name: "Cintas", domain: "cintas.com" },
  { name: "CDW", domain: "cdw.com" },
  { name: "B&H Photo", domain: "bhphotovideo.com" },
  { name: "Insight", domain: "insight.com" },
  { name: "Ricoh", domain: "ricoh.com" },
  { name: "United Rentals", domain: "unitedrentals.com" },
]

function VendorLogo({ name, domain }: { name: string; domain: string }) {
  const logoUrl = `https://img.logo.dev/${domain}?token=pk_Xwdp4Ef1RTiQ8dgmECd17g&size=160`

  return (
    <div className="flex items-center justify-center shrink-0 w-[280px] px-4 group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt={name}
        className="h-14 w-auto max-w-[200px] object-contain grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  )
}

export function VendorCarousel() {
  const tripledVendors = [...vendors, ...vendors, ...vendors]

  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Trusted Vendor Network
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex motion-safe:animate-[marquee_200s_linear_infinite]"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {tripledVendors.map((vendor, index) => (
            <VendorLogo
              key={`${vendor.domain}-${index}`}
              name={vendor.name}
              domain={vendor.domain}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
      `}</style>
    </section>
  )
}
