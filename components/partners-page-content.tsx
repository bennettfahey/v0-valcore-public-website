"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { partners, getPartnerLogoUrl } from "@/lib/partners-data"

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
                <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                  <Image
                    src={getPartnerLogoUrl(partner.domain)}
                    alt={partner.name}
                    width={120}
                    height={64}
                    className="max-h-16 max-w-[140px] object-contain grayscale-[60%] group-hover:grayscale-0 transition-[filter] duration-300"
                    style={{ width: "auto", height: "auto" }}
                    loading="lazy"
                    unoptimized
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = "none"
                      const fallback = target.nextElementSibling
                      if (fallback) (fallback as HTMLElement).style.display = "flex"
                    }}
                  />
                  <div
                    className="hidden h-16 w-full items-center justify-center rounded-xl bg-primary/[0.06]"
                    style={{ display: "none" }}
                  >
                    <span className="text-2xl font-bold text-primary">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                </div>
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
