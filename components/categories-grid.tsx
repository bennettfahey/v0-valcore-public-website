"use client"

import { useEffect, useRef, useState } from "react"
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
} from "lucide-react"
import { categories } from "@/lib/categories-data"

// Map category slugs to icons
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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="categories" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Savings categories
          </h2>
        </div>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.slug] || FileText
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className={`group rounded-xl bg-background p-5 transition-all duration-500 hover:bg-primary hover:shadow-md ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${Math.min(index * 50, 350)}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="h-4 w-4 text-primary group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-primary group-hover:text-white transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-foreground/60 group-hover:text-white/70 mt-1 transition-colors line-clamp-2">
                      {category.bullets[0]}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
