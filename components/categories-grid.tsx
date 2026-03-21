"use client"

import Link from "next/link"
import {
  FileText,
  Wrench,
  Package,
  Shield,
  Monitor,
  Car,
  Shirt,
  Factory,
  ArrowRight,
} from "lucide-react"
import { categories } from "@/lib/categories-data"
import { motion } from "framer-motion"

const categoryIcons: Record<string, React.ElementType> = {
  "office-workplace": FileText,
  "mro": Wrench,
  "packaging-shipping": Package,
  "safety-ppe": Shield,
  "technology-hardware": Monitor,
  "fleet-automotive": Car,
  "uniforms-facility": Shirt,
  "industrial-supplies": Factory,
}

export function CategoriesGrid() {
  return (
    <section id="categories" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            What we cover
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Savings categories
          </h2>
        </motion.div>

        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.slug] || FileText
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.35),
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="group block rounded-2xl bg-white/70 backdrop-blur-sm border border-black/[0.06] p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/[0.06] group-hover:bg-primary/[0.1] flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {category.bullets[0]}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
