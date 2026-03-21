import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CategoryDetailContent } from "@/components/category-detail-content"
import { categories, getCategoryBySlug } from "@/lib/categories-data"
import { notFound } from "next/navigation"
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
      <CategoryDetailContent category={category} />
      <Footer />
    </main>
  )
}
