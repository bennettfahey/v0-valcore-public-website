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
    <div 
      className="flex items-center justify-center shrink-0 transition-all duration-300 group"
      style={{ width: '320px', backgroundColor: '#F5F2EB' }}
    >
      <div 
        style={{ 
          padding: '16px', 
          backgroundColor: '#F5F2EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt={name}
          className="object-contain transition-all duration-300 grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100"
          style={{ 
            height: '72px', 
            width: 'auto', 
            maxWidth: '240px',
            mixBlendMode: 'multiply',
            background: 'transparent'
          }}
        />
      </div>
    </div>
  )
}

export function VendorCarousel() {
  // Triple the array for seamless looping
  const tripledVendors = [...vendors, ...vendors, ...vendors]

  return (
    <section className="py-16 lg:py-20 bg-[#F5F2EB]" style={{ overflow: 'hidden' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#1D3D14]">
          Trusted Vendor Network
        </p>
      </div>
      
      <div className="relative" style={{ overflow: 'hidden' }}>
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#F5F2EB] to-transparent" />
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#F5F2EB] to-transparent" />
        
        <div 
          className="flex"
          style={{ 
            width: 'max-content',
            willChange: 'transform',
            animation: 'marquee 200s linear infinite'
          }}
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
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </section>
  )
}
