"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { partners, getPartnerLogoUrl, type Partner } from "@/lib/partners-data"

function PartnerLogo({ partner }: { partner: Partner }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative h-16 w-full mb-4 flex items-center justify-center">
      {!failed && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={getPartnerLogoUrl(partner.domain)}
          alt={partner.name}
          className={`max-h-16 max-w-[140px] object-contain grayscale-[60%] group-hover:grayscale-0 transition-[filter,opacity] duration-300 ${loaded ? "opacity-100" : "opacity-0 absolute"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          loading="lazy"
        />
      )}
      {(!loaded || failed) && (
        <div className="h-16 w-full flex items-center justify-center rounded-xl bg-primary/[0.06]">
          <span className="text-2xl font-bold text-primary">
            {partner.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  )
}

export function PartnersPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F5F0E6] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4"
            >
              Our network
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-semibold text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              Our Trusted Partners
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Valcore is backed by a network of industry-leading software companies across agriculture, manufacturing, logistics, and more.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partners.map((partner) => (
              <a
                key={partner.domain}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-2xl bg-white border border-black/[0.06] p-8 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/20 hover:shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <PartnerLogo partner={partner} />
                <span className="text-sm font-semibold text-foreground/80 text-center">
                  {partner.name}
                </span>
                <span className="mt-1 text-xs text-muted-foreground text-center line-clamp-2">
                  {partner.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
