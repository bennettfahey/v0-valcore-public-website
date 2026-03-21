"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { categories, getLogoUrl } from "@/lib/categories-data"

export function CategoriesPageContent() {
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
              Explore our vendors
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-semibold text-primary sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              Our Vendor Categories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Pre-negotiated contracts across essential business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <div key={category.slug} className="h-full">
                <Link
                  href={`/categories/${category.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-black/[0.06] p-6 h-full shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/20 hover:shadow-md cursor-pointer"
                >
                  <h2 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {category.name}
                  </h2>

                  <ul className="mt-4 space-y-2">
                    {category.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    {category.vendors.map((vendor) => (
                      <div
                        key={vendor.domain}
                        className="relative flex items-center"
                      >
                        <Image
                          src={getLogoUrl(vendor.domain)}
                          alt={vendor.name}
                          width={100}
                          height={48}
                          className="object-contain grayscale-[60%] group-hover:grayscale-0 transition-[filter] duration-300"
                          loading="lazy"
                          style={{ width: "auto", height: "auto", maxHeight: "44px" }}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
