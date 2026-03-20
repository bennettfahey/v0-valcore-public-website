import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { categories, getCategoryBySlug, getLogoUrl } from "@/lib/categories-data"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  
  if (!category) {
    return {
      title: "Category Not Found | ValCore",
    }
  }

  return {
    title: `${category.name} | ValCore`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Categories
          </Link>
          
          <h1 className="text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Vendors Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-primary mb-10">
            Our partners in this category
          </h2>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {category.vendors.map((vendor) => (
              <div
                key={vendor.domain}
                className="group flex flex-col items-center justify-center rounded-xl bg-background border border-border p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                  <Image
                    src={getLogoUrl(vendor.domain)}
                    alt={vendor.name}
                    width={120}
                    height={64}
                    className="max-h-16 max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{ width: "auto", height: "auto" }}
                    unoptimized
                  />
                </div>
                <span className="text-sm font-medium text-foreground/80 text-center">
                  {vendor.name}
                </span>
              </div>
            ))}
          </div>

          {/* Coverage */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Coverage
            </h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {category.bullets.map((bullet, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
