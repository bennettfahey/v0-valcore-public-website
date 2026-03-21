"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import type { Category } from "@/lib/categories-data"
import { getLogoUrl } from "@/lib/categories-data"

export function CategoryDetailContent({ category }: { category: Category }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F5F0E6] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All Categories
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl"
          >
            {category.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Vendors Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-10">
            Trusted suppliers
          </h2>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {category.vendors.map((vendor) => (
              <div
                key={vendor.domain}
                className="group flex flex-col items-center justify-center rounded-2xl bg-white border border-black/[0.06] p-8 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                  <Image
                    src={getLogoUrl(vendor.domain)}
                    alt={vendor.name}
                    width={120}
                    height={64}
                    className="max-h-16 max-w-[140px] object-contain grayscale-[60%] group-hover:grayscale-0 transition-[filter] duration-300"
                    style={{ width: "auto", height: "auto" }}
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-medium text-foreground/80 text-center">
                  {vendor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Savings across {category.name.toLowerCase()}
          </h3>
          <p className="text-muted-foreground mb-10">
            Pre-negotiated contracts covering these areas and more.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.bullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <div className="border-l-2 border-primary/20 pl-3 py-1">
                  <span className="text-sm font-medium text-foreground">
                    {bullet}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Ready to save on {category.name.toLowerCase()}?
          </h3>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Join Valcore at zero cost and start accessing pre-negotiated contracts today.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-primary-foreground transition-colors duration-200 hover:bg-[#2D5A1E] cursor-pointer mt-8"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
