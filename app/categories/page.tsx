import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { categories, getLogoUrl } from "@/lib/categories-data"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Vendor Categories | ValCore",
  description: "Pre-negotiated contracts across essential business needs. Explore our vendor categories for office supplies, MRO, packaging, safety equipment, and more.",
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-primary sm:text-5xl">
              Our Vendor Categories
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
              Pre-negotiated contracts across essential business needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group block rounded-xl bg-card border border-border p-6 transition-colors hover:border-primary/30"
              >
                <h2 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                  {category.name}
                </h2>
                
                <ul className="mt-4 space-y-2">
                  {category.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {category.vendors.map((vendor) => (
                    <div
                      key={vendor.domain}
                      className="relative flex items-center"
                    >
                      <Image
                        src={getLogoUrl(vendor.domain)}
                        alt={vendor.name}
                        width={60}
                        height={32}
                        className="object-contain grayscale-[60%] mix-blend-multiply group-hover:grayscale-0 transition-all duration-300"
                        style={{ width: "auto", height: "auto", maxHeight: "32px" }}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
